import type { HitlEvent } from "@hitl-kit/core";
import type { Gate, GateContext, GateDecision } from "../types";

export interface ScopeGateOptions {
  /**
   * Required scope strings. If set, every entry in `ctx.signals.scope`
   * must be present in `allowed`, OR the call must use no scopes that
   * fall outside `allowed`. Empty signal scopes are treated as no scope.
   */
  allowed?: string[];
  /**
   * Forbidden scope strings. If any of these appears in
   * `ctx.signals.scope`, the gate denies. Useful for blanket bans
   * (e.g. `["delete:*"]`).
   */
  denied?: string[];
  /**
   * Escape hatch for complex policies. If provided, this function fully
   * replaces the allowed/denied logic — return your own GateDecision.
   */
  policy?: (ctx: GateContext) => GateDecision | Promise<GateDecision>;
  escalate?: (ctx: GateContext, missing: string[]) => HitlEvent;
}

/**
 * Block based on simple allow/deny lists over `ctx.signals.scope`. For
 * richer rules (regex, OPA-style policies, dynamic per-user grants) pass
 * `policy` and ignore the lists.
 *
 * Named `scopeGate` rather than `policyGate` to keep semantics small —
 * the kit owns scope-level checks and stays out of the
 * org-policy / OPA / rego ecosystem.
 */
export function scopeGate(opts: ScopeGateOptions): Gate {
  return async (ctx): Promise<GateDecision> => {
    if (opts.policy) return opts.policy(ctx);

    const requested = ctx.signals?.scope ?? [];

    if (opts.denied?.length) {
      const hit = requested.find((s) => opts.denied!.includes(s));
      if (hit) {
        return {
          allow: false,
          code: "scope_violation",
          reason: `denied scope: ${hit}`,
          escalate: opts.escalate ? opts.escalate(ctx, [hit]) : defaultEscalate([hit]),
          meta: { denied: [hit] },
        };
      }
    }

    if (opts.allowed?.length) {
      const missing = requested.filter((s) => !opts.allowed!.includes(s));
      if (missing.length > 0) {
        return {
          allow: false,
          code: "scope_violation",
          reason: `requested scopes outside allowed set: ${missing.join(", ")}`,
          escalate: opts.escalate
            ? opts.escalate(ctx, missing)
            : defaultEscalate(missing),
          meta: { missing },
        };
      }
    }

    return { allow: true, meta: { requested } };
  };
}

function defaultEscalate(missing: string[]): HitlEvent {
  return {
    kind: "hitl.card",
    variant: "review",
    title: "Scope violation",
    subtitle:
      missing.length === 1
        ? `Requested ${missing[0]}`
        : `Requested ${missing.join(", ")}`,
    steps: [
      { label: "Scope gate triggered", done: true },
      { label: "Awaiting human override", done: false },
    ],
    runLabel: "Override and continue",
  };
}
