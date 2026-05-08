import type { Gate, GateSignals, GateDecision } from "@hitl-kit/gates";
import { composeGates } from "@hitl-kit/gates";
import type { HitlEvent } from "@hitl-kit/core";

/**
 * A minimal description of an AI SDK Tool. We don't import the heavy
 * `ai` package types directly so this file stays runtime-cheap; the
 * structure matches what `tool()` returns.
 */
type AiSdkTool = {
  description?: string;
  inputSchema?: unknown;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  execute?: (input: any, context?: any) => Promise<any> | any;
};

export interface WithGatesOptions<TInput = unknown> {
  /**
   * Signals to forward into the gate context. May be a static object or
   * a function that derives signals from the resolved tool input. Use
   * the function form for cost / confidence values that depend on args.
   */
  signals?:
    | GateSignals
    | ((input: TInput) => GateSignals | Promise<GateSignals>);
  /**
   * What to do when a gate denies.
   * - `"escalate"` (default): the tool result becomes the gate's escalation
   *   event so `<HitlEventRenderer />` renders the deny exactly like a
   *   normal HITL event. The user can override by sending a follow-up
   *   user message — the same pattern as accepting a regular interrupt.
   * - `"throw"`: throw a `GateDeniedError`. Use when you want the agent
   *   loop to surface a tool error.
   */
  onDeny?: "escalate" | "throw";
}

export class GateDeniedError extends Error {
  constructor(public readonly decision: Extract<GateDecision, { allow: false }>) {
    super(`gate denied: ${decision.reason}`);
    this.name = "GateDeniedError";
  }
}

/**
 * Wrap an AI SDK tool with a gate chain. The wrapped tool runs the gates
 * before its inner `execute`, and on deny either throws or returns the
 * escalation HitlEvent so the client renderer can surface it.
 *
 * ```ts
 * const tools = {
 *   requestHumanReview: withGates(
 *     hitlCardTool(),
 *     [costGate({ maxUsd: 0.05 })],
 *     { signals: (input) => ({ costUsd: estimateCost(input) }) },
 *   ),
 * };
 * ```
 */
export function withGates<T extends AiSdkTool>(
  tool: T,
  gates: Gate[],
  opts: WithGatesOptions = {},
): T {
  const onDeny = opts.onDeny ?? "escalate";
  const gate = composeGates(gates);
  const innerExecute = tool.execute;

  const wrappedExecute = async (
    input: unknown,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    context?: any,
  ): Promise<unknown> => {
    const signals =
      typeof opts.signals === "function"
        ? await opts.signals(input)
        : opts.signals;

    const decision = await gate({
      input,
      signals,
      adapter: "ai-sdk",
    });

    if (!decision.allow) {
      if (onDeny === "throw") {
        throw new GateDeniedError(decision);
      }
      if (decision.escalate) {
        return decision.escalate satisfies HitlEvent;
      }
      // No escalate provided. Surface a structured error the agent can read.
      return {
        error: true,
        gate: {
          code: decision.code,
          reason: decision.reason,
        },
      };
    }

    if (!innerExecute) {
      throw new Error("withGates: wrapped tool has no execute() function");
    }
    return innerExecute(input, context);
  };

  return { ...tool, execute: wrappedExecute } as T;
}
