import type { HitlEvent } from "@hitl-kit/core";
import type { Gate, GateContext, GateDecision, GateStore } from "../types";

export interface CostGateOptions {
  /** Maximum dollars per call (or, with `cumulative`, per window). */
  maxUsd: number;
  /**
   * Custom signal extractor. Defaults to `ctx.signals?.costUsd`. Useful
   * when cost depends on the resolved tool args, not just static signals.
   */
  signal?: (ctx: GateContext) => number | undefined;
  /**
   * Behavior when no cost signal is supplied.
   *
   * - `false` (default): fail open. The gate cannot evaluate without a
   *   signal, and silently passing keeps unwired adapters working.
   * - `true`: fail closed. Denies with `code: "cost_exceeded"` and an
   *   escalation event. Use once your adapters reliably emit cost.
   */
  failClosed?: boolean;
  /**
   * If set, accumulate cost over a sliding window (per `key`) and deny
   * when the running total would exceed `maxUsd`. Without `cumulative`,
   * the gate evaluates each decision independently.
   */
  cumulative?: {
    store: GateStore;
    key: (ctx: GateContext) => string;
    windowSec: number;
  };
  escalate?: (ctx: GateContext, projectedUsd: number) => HitlEvent;
}

/**
 * Block when projected cost exceeds `maxUsd`. Surfaces the projected
 * dollar amount in the deny reason and (default) escalation event.
 */
export function costGate(opts: CostGateOptions): Gate {
  const max = opts.maxUsd;
  const failClosed = opts.failClosed ?? false;
  return async (ctx): Promise<GateDecision> => {
    const single = (opts.signal ?? defaultSignal)(ctx);
    if (single === undefined) {
      if (failClosed) {
        return {
          allow: false,
          code: "cost_exceeded",
          reason: `no cost signal and failClosed=true (max $${max.toFixed(4)})`,
          escalate: opts.escalate
            ? opts.escalate(ctx, -1)
            : defaultEscalate(-1, max),
          meta: { failClosed: true, max },
        };
      }
      return { allow: true, meta: { reason: "no cost signal" } };
    }

    let projected = single;
    if (opts.cumulative) {
      const { store, key, windowSec } = opts.cumulative;
      const k = key(ctx);
      const running = (await store.get<number>(k)) ?? 0;
      projected = running + single;
      // Tentatively bump the running total. Even if we deny, the user
      // attempted to spend — counting the attempt is the conservative
      // choice. If you need rollback semantics, override via custom store.
      await store.set(k, projected, windowSec);
    }

    if (projected <= max) {
      return { allow: true, meta: { costUsd: projected } };
    }

    return {
      allow: false,
      code: "cost_exceeded",
      reason: `projected $${projected.toFixed(4)} exceeds limit $${max.toFixed(4)}`,
      escalate: opts.escalate ? opts.escalate(ctx, projected) : defaultEscalate(projected, max),
      meta: { costUsd: projected, max },
    };
  };
}

function defaultSignal(ctx: GateContext): number | undefined {
  return ctx.signals?.costUsd;
}

function defaultEscalate(projected: number, max: number): HitlEvent {
  return {
    kind: "hitl.card",
    variant: "review",
    title: "Cost over budget",
    subtitle: `$${projected.toFixed(4)} projected · limit $${max.toFixed(4)}`,
    steps: [
      { label: "Cost gate triggered", done: true },
      { label: "Awaiting human override", done: false },
    ],
    runLabel: "Override and continue",
  };
}
