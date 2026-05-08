import type { HitlEvent } from "@hitl-kit/core";
import type { Gate, GateContext, GateDecision, GateStore } from "../types";

export interface RateLimitGateOptions {
  store: GateStore;
  key: (ctx: GateContext) => string;
  /** Max calls per window. */
  max: number;
  /** Window length in seconds. */
  windowSec: number;
  escalate?: (ctx: GateContext, retryAfterSec: number) => HitlEvent;
}

/**
 * Token-bucket-shaped rate limit. Increments a per-key counter on every
 * call; the counter expires after `windowSec`. Once the counter exceeds
 * `max`, the gate denies until the window rolls over.
 *
 * For multi-process deployments back this with a Redis/Upstash store.
 * The default `inMemoryStore()` is per-process.
 */
export function rateLimitGate(opts: RateLimitGateOptions): Gate {
  return async (ctx): Promise<GateDecision> => {
    const k = opts.key(ctx);
    const count = await opts.store.incr(k, opts.windowSec);
    if (count <= opts.max) {
      return { allow: true, meta: { count, max: opts.max } };
    }
    // We're over the limit. The store still bumped the counter — that's
    // intentional, repeated denied calls keep extending the window's
    // counter so a flood of attempts doesn't slip through if the window
    // rolls during the burst. Conservative.
    const retryAfterSec = opts.windowSec;
    return {
      allow: false,
      code: "rate_limited",
      reason: `over rate limit: ${count}/${opts.max} per ${opts.windowSec}s`,
      escalate: opts.escalate
        ? opts.escalate(ctx, retryAfterSec)
        : defaultEscalate(count, opts.max, retryAfterSec),
      meta: { count, max: opts.max, retryAfterSec },
    };
  };
}

function defaultEscalate(
  count: number,
  max: number,
  retryAfterSec: number,
): HitlEvent {
  return {
    kind: "hitl.card",
    variant: "review",
    title: "Rate limit exceeded",
    subtitle: `${count}/${max} calls used · retry after ${retryAfterSec}s`,
    steps: [
      { label: "Rate limit gate triggered", done: true },
      { label: "Awaiting human override or window reset", done: false },
    ],
    runLabel: "Override and continue",
  };
}
