import { describe, expect, it } from "vitest";
import { confidenceGate, costGate } from "@hitl-kit/gates";
import { withGates, GateDeniedError } from "../gates";

/**
 * We don't import the real `tool()` helper from `ai` because that would
 * pull in the full AI SDK at test time. Instead we hand-roll a minimal
 * shape that matches what `tool()` returns — `withGates` only relies on
 * `execute` and the surface of `inputSchema`/`description`.
 */
function fakeTool() {
  return {
    description: "fake",
    inputSchema: {},
    execute: async (input: { x: number }) => ({
      kind: "hitl.card" as const,
      variant: "review" as const,
      title: `got ${input.x}`,
      subtitle: "ok",
      steps: [{ label: "done", done: true }],
      runLabel: "ok",
    }),
  };
}

describe("@hitl-kit/ai-sdk withGates", () => {
  it("calls inner execute when gates allow", async () => {
    const tool = withGates(fakeTool(), [confidenceGate({ min: 0.5 })], {
      signals: { confidence: 0.9 },
    });
    const result = (await tool.execute!({ x: 1 })) as {
      kind: string;
      title: string;
    };
    expect(result.kind).toBe("hitl.card");
    expect(result.title).toBe("got 1");
  });

  it("returns the escalate HitlEvent when gates deny (default)", async () => {
    const tool = withGates(fakeTool(), [confidenceGate({ min: 0.9 })], {
      signals: { confidence: 0.1 },
    });
    const result = (await tool.execute!({ x: 1 })) as {
      kind: string;
      title?: string;
    };
    expect(result.kind).toBe("hitl.card");
    expect(result.title).toMatch(/Confidence below/i);
  });

  it("throws GateDeniedError when onDeny=throw", async () => {
    const tool = withGates(fakeTool(), [costGate({ maxUsd: 0.01 })], {
      signals: { costUsd: 1.0 },
      onDeny: "throw",
    });
    await expect(tool.execute!({ x: 1 })).rejects.toBeInstanceOf(
      GateDeniedError,
    );
  });

  it("signals function form receives input", async () => {
    const tool = withGates(fakeTool(), [costGate({ maxUsd: 0.005 })], {
      signals: (input) => ({ costUsd: (input as { x: number }).x * 0.001 }),
    });
    // x=10 → projected cost 0.01 → over 0.005 → deny
    const result = (await tool.execute!({ x: 10 })) as {
      kind: string;
    };
    expect(result.kind).toBe("hitl.card"); // escalation
  });
});
