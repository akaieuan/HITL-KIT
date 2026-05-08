import { describe, expect, it } from "vitest";
import { rateLimitGate, inMemoryStore } from "@hitl-kit/gates";
import { runGates } from "../gates";

describe("@hitl-kit/mcp runGates", () => {
  it("returns allow when no gates configured", async () => {
    const result = await runGates([], {
      toolName: "hitl_interrupt_card",
      args: {},
      onDeny: "escalate",
    });
    expect(result.decision.allow).toBe(true);
    expect(result.toolResult).toBeUndefined();
  });

  it("returns escalate tool result with HitlEvent JSON when gate denies", async () => {
    const store = inMemoryStore();
    const gates = [rateLimitGate({ store, key: () => "u", max: 0, windowSec: 60 })];
    const result = await runGates(gates, {
      toolName: "hitl_interrupt_card",
      args: {},
      onDeny: "escalate",
    });
    expect(result.decision.allow).toBe(false);
    expect(result.toolResult).toBeDefined();
    if (result.toolResult && "content" in result.toolResult) {
      const text = result.toolResult.content[0]?.text;
      expect(text).toMatch(/"kind"\s*:\s*"hitl\.card"/);
    }
  });

  it("returns isError tool result when onDeny=error", async () => {
    const store = inMemoryStore();
    const gates = [rateLimitGate({ store, key: () => "u", max: 0, windowSec: 60 })];
    const result = await runGates(gates, {
      toolName: "hitl_interrupt_card",
      args: {},
      onDeny: "error",
    });
    expect(result.decision.allow).toBe(false);
    if (result.toolResult && "isError" in result.toolResult) {
      expect(result.toolResult.isError).toBe(true);
      const text = result.toolResult.content[0]?.text;
      expect(text).toMatch(/"error"\s*:\s*"gate_denied"/);
      expect(text).toMatch(/"code"\s*:\s*"rate_limited"/);
    }
  });
});
