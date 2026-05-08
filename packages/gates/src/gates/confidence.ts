import type { HitlEvent } from "@hitl-kit/core";
import type { Gate, GateContext, GateDecision } from "../types";

export interface ConfidenceGateOptions {
  /** Minimum confidence in [0, 1]. Decisions strictly below this fail. */
  min: number;
  /**
   * Custom signal extractor. Defaults to `ctx.signals?.confidence`. Useful
   * if you want to compute confidence from somewhere else (e.g. a typed
   * field on `ctx.event`).
   */
  signal?: (ctx: GateContext) => number | undefined;
  /**
   * Optional escalation event surfaced when the gate denies. Receives the
   * actual score so you can render it in the UI. If omitted, a generic
   * `hitl.card` is built describing the breach.
   */
  escalate?: (ctx: GateContext, score: number) => HitlEvent;
}

/**
 * Block when model confidence (or any 0..1 score the adapter forwards as
 * `signals.confidence`) is below `min`. Pairs naturally with the
 * `scale.ai_generation` and `tool.call` primitives, both of which carry
 * a confidence signal.
 */
export function confidenceGate(opts: ConfidenceGateOptions): Gate {
  const min = opts.min;
  return async (ctx): Promise<GateDecision> => {
    const score = (opts.signal ?? defaultSignal)(ctx);
    if (score === undefined) {
      // No signal supplied — fail open. A confidence gate that fires when
      // confidence is unknown would block every legitimate call from
      // adapters that don't yet emit confidence.
      return { allow: true, meta: { reason: "no confidence signal" } };
    }
    if (score >= min) {
      return { allow: true, meta: { confidence: score } };
    }
    return {
      allow: false,
      code: "confidence_too_low",
      reason: `confidence ${score.toFixed(2)} below minimum ${min.toFixed(2)}`,
      escalate: opts.escalate
        ? opts.escalate(ctx, score)
        : defaultEscalate(score, min),
      meta: { confidence: score, min },
    };
  };
}

function defaultSignal(ctx: GateContext): number | undefined {
  return ctx.signals?.confidence;
}

function defaultEscalate(score: number, min: number): HitlEvent {
  return {
    kind: "hitl.card",
    variant: "review",
    title: "Confidence below threshold",
    subtitle: `Score ${score.toFixed(2)} · minimum ${min.toFixed(2)}`,
    steps: [
      { label: "Gate triggered", done: true },
      { label: "Awaiting human override", done: false },
    ],
    runLabel: "Override and continue",
  };
}
