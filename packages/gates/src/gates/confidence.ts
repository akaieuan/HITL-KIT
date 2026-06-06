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
   * Behavior when no confidence signal is supplied.
   *
   * - `false` (default): fail open. A confidence gate that denies when
   *   confidence is unknown would block every legitimate call from
   *   adapters that haven't been wired to emit confidence yet.
   * - `true`: fail closed. Denies with `code: "confidence_too_low"` and
   *   the default (or custom) escalation event. Use in production once
   *   you're sure adapters are reliably populating the signal.
   */
  failClosed?: boolean;
  /**
   * Optional escalation event surfaced when the gate denies. Receives the
   * actual score so you can render it in the UI. If omitted, a generic
   * `hitl.card` is built describing the breach. Called with `-1` when
   * `failClosed` triggers due to a missing signal.
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
  const failClosed = opts.failClosed ?? false;
  return async (ctx): Promise<GateDecision> => {
    const score = (opts.signal ?? defaultSignal)(ctx);
    if (score === undefined) {
      if (failClosed) {
        return {
          allow: false,
          code: "confidence_too_low",
          reason: `no confidence signal and failClosed=true (min ${min.toFixed(2)})`,
          escalate: opts.escalate
            ? opts.escalate(ctx, -1)
            : defaultEscalate(-1, min),
          meta: { failClosed: true, min },
        };
      }
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
