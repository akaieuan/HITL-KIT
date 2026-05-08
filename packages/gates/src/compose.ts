import type { Gate, GateDecision } from "./types";

/**
 * Run gates sequentially. First-deny-wins.
 *
 * Why sequential: rate-limit and cost gates can short-circuit cheaply,
 * but the goal is to surface the *first* failure so the user sees a
 * single clear reason. Parallel evaluation would race on store reads
 * for stateful gates (rate-limit, approval chain) and produce
 * non-deterministic decisions.
 *
 * The composed gate is itself a Gate, so compose chains nest cleanly.
 */
export function composeGates(gates: Gate[]): Gate {
  return async (ctx) => {
    for (const g of gates) {
      const decision = await g(ctx);
      if (!decision.allow) return decision;
    }
    return { allow: true } satisfies GateDecision;
  };
}
