import type {
  Gate,
  GateSignals,
  GateDecision,
  GateStore,
} from "@hitl-kit/gates";
import { composeGates } from "@hitl-kit/gates";
import type { HitlEvent } from "@hitl-kit/core";

export interface RunGatesOptions {
  /** Signals fn invoked per tool call to derive ctx.signals. */
  signals?: (
    toolName: string,
    args: unknown,
  ) => GateSignals | Promise<GateSignals>;
  /**
   * - `"escalate"` (default): tool result is the escalation HitlEvent so
   *   the host UI renders it via <HitlEventRenderer /> like a happy-path event.
   * - `"error"`: returns a structured tool error.
   */
  onDeny?: "escalate" | "error";
}

export interface GateResult {
  decision: GateDecision;
  /**
   * The MCP tool result the server should return on deny. Undefined when
   * the decision allowed.
   */
  toolResult?:
    | { content: { type: "text"; text: string }[] }
    | { isError: true; content: { type: "text"; text: string }[] };
}

/**
 * Run gates for a single MCP tool call. Returns a structured result the
 * server uses to either continue (allow) or short-circuit with an
 * escalation event / error (deny).
 *
 * Composition rule: when both server-wide `gates` and `perToolGates[name]`
 * are configured, callers should run server-wide first then per-tool.
 * This file just runs whatever array it's handed.
 */
export async function runGates(
  gates: Gate[],
  ctx: {
    toolName: string;
    args: unknown;
    onDeny: "escalate" | "error";
    signals?: GateSignals;
    /**
     * Server-level shared store. Forwarded to gates via GateContext.store
     * so gate factories can read/write through one store instead of each
     * binding its own closure copy.
     */
    store?: GateStore;
  },
): Promise<GateResult> {
  if (gates.length === 0) {
    return { decision: { allow: true } };
  }
  const gate = composeGates(gates);
  const decision = await gate({
    input: ctx.args,
    signals: ctx.signals,
    adapter: "mcp",
    store: ctx.store,
  });

  if (decision.allow) {
    return { decision };
  }

  if (ctx.onDeny === "error") {
    return {
      decision,
      toolResult: {
        isError: true,
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                error: "gate_denied",
                code: decision.code,
                reason: decision.reason,
                tool: ctx.toolName,
              },
              null,
              2,
            ),
          },
        ],
      },
    };
  }

  // Default: escalate as a HitlEvent if one was supplied, otherwise
  // fall back to a structured error so the client doesn't silently
  // accept the original tool output.
  if (decision.escalate) {
    return {
      decision,
      toolResult: {
        content: [
          {
            type: "text",
            text: JSON.stringify(decision.escalate satisfies HitlEvent, null, 2),
          },
        ],
      },
    };
  }
  return {
    decision,
    toolResult: {
      isError: true,
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              error: "gate_denied",
              code: decision.code,
              reason: decision.reason,
              tool: ctx.toolName,
            },
            null,
            2,
          ),
        },
      ],
    },
  };
}
