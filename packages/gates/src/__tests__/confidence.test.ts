import { describe, expect, it } from "vitest";
import { confidenceGate } from "../gates/confidence";

describe("confidenceGate", () => {
  it("allows when confidence is at or above threshold", async () => {
    const gate = confidenceGate({ min: 0.8 });
    const decision = await gate({
      adapter: "core",
      signals: { confidence: 0.85 },
    });
    expect(decision.allow).toBe(true);
  });

  it("denies when confidence is below threshold", async () => {
    const gate = confidenceGate({ min: 0.8 });
    const decision = await gate({
      adapter: "core",
      signals: { confidence: 0.42 },
    });
    expect(decision.allow).toBe(false);
    if (!decision.allow) {
      expect(decision.code).toBe("confidence_too_low");
      expect(decision.escalate).toBeDefined();
    }
  });

  it("allows when no confidence signal is supplied (fail open)", async () => {
    const gate = confidenceGate({ min: 0.8 });
    const decision = await gate({ adapter: "core" });
    expect(decision.allow).toBe(true);
  });

  it("custom signal extractor overrides ctx.signals", async () => {
    const gate = confidenceGate({
      min: 0.8,
      signal: () => 0.1,
    });
    const decision = await gate({
      adapter: "core",
      signals: { confidence: 0.99 },
    });
    expect(decision.allow).toBe(false);
  });
});
