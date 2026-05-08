import type { Gate, GateSignals, GateDecision } from "@hitl-kit/gates";
import { composeGates } from "@hitl-kit/gates";
import type { HitlEvent } from "@hitl-kit/core";
import type { HitlInterruptPayload } from "./types";

export interface WithGatesOptions {
  signals?: GateSignals;
  /**
   * What to do when a gate denies.
   * - `"interrupt-with-escalate"` (default): replace the original payload's
   *   event with the gate's `escalate` event so the graph still pauses but
   *   the human sees the gate reason. If the gate provides no escalate,
   *   the original payload is preserved and the deny is recorded in `meta`.
   * - `"throw"`: throw a `GateDeniedError`. Use when you want the graph
   *   to fail rather than ask the human.
   * - function: produce a custom payload from the decision.
   */
  onDeny?:
    | "interrupt-with-escalate"
    | "throw"
    | ((decision: Extract<GateDecision, { allow: false }>) => HitlInterruptPayload);
}

export class GateDeniedError extends Error {
  constructor(public readonly decision: Extract<GateDecision, { allow: false }>) {
    super(`gate denied: ${decision.reason}`);
    this.name = "GateDeniedError";
  }
}

/**
 * Wrap a HitlInterruptPayload with a gate chain. Returns a payload ready
 * to pass into LangGraph's `interrupt()`. On deny, the default behavior
 * surfaces the gate's escalation event so the human can override.
 *
 * ```ts
 * const cardPayload = createHitlCardInterrupt({...});
 * const gated = await withGates(cardPayload, [confidenceGate({ min: 0.85 })], {
 *   signals: { confidence: state.modelConfidence },
 * });
 * const approval = interrupt(gated);
 * ```
 */
export async function withGates<E extends HitlEvent>(
  payload: HitlInterruptPayload<E>,
  gates: Gate[],
  opts: WithGatesOptions = {},
): Promise<HitlInterruptPayload<HitlEvent>> {
  const onDeny = opts.onDeny ?? "interrupt-with-escalate";
  const gate = composeGates(gates);
  const decision = await gate({
    event: payload.event,
    signals: opts.signals,
    adapter: "langgraph",
  });

  if (decision.allow) {
    return {
      ...payload,
      meta: { ...payload.meta, gate: decision.meta },
    };
  }

  if (onDeny === "throw") {
    throw new GateDeniedError(decision);
  }

  if (typeof onDeny === "function") {
    return onDeny(decision);
  }

  // Default: interrupt-with-escalate.
  if (decision.escalate) {
    return {
      source: "hitl-kit",
      event: decision.escalate,
      meta: {
        ...payload.meta,
        gate: {
          denied: true,
          code: decision.code,
          reason: decision.reason,
          ...decision.meta,
        },
      },
    };
  }

  // No escalation event provided — keep the original payload but flag the
  // deny in meta so consumers can react if they want.
  return {
    ...payload,
    meta: {
      ...payload.meta,
      gate: {
        denied: true,
        code: decision.code,
        reason: decision.reason,
        ...decision.meta,
      },
    },
  };
}
