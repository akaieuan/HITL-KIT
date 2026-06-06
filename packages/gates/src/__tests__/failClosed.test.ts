import { describe, expect, it } from "vitest";
import { confidenceGate, costGate } from "../index";

describe("failClosed option", () => {
  it("confidenceGate fails open by default when no signal", async () => {
    const gate = confidenceGate({ min: 0.8 });
    const decision = await gate({ adapter: "core" });
    expect(decision.allow).toBe(true);
  });

  it("confidenceGate fails closed when failClosed=true and no signal", async () => {
    const gate = confidenceGate({ min: 0.8, failClosed: true });
    const decision = await gate({ adapter: "core" });
    expect(decision.allow).toBe(false);
    if (!decision.allow) {
      expect(decision.code).toBe("confidence_too_low");
      expect(decision.reason).toMatch(/failClosed=true/);
      expect(decision.escalate).toBeDefined();
    }
  });

  it("confidenceGate with failClosed=true still allows when signal is high enough", async () => {
    const gate = confidenceGate({ min: 0.8, failClosed: true });
    const decision = await gate({
      adapter: "core",
      signals: { confidence: 0.9 },
    });
    expect(decision.allow).toBe(true);
  });

  it("costGate fails open by default when no signal", async () => {
    const gate = costGate({ maxUsd: 0.05 });
    const decision = await gate({ adapter: "core" });
    expect(decision.allow).toBe(true);
  });

  it("costGate fails closed when failClosed=true and no signal", async () => {
    const gate = costGate({ maxUsd: 0.05, failClosed: true });
    const decision = await gate({ adapter: "core" });
    expect(decision.allow).toBe(false);
    if (!decision.allow) {
      expect(decision.code).toBe("cost_exceeded");
      expect(decision.reason).toMatch(/failClosed=true/);
    }
  });

  it("costGate with failClosed=true still allows when signal is under max", async () => {
    const gate = costGate({ maxUsd: 0.05, failClosed: true });
    const decision = await gate({
      adapter: "core",
      signals: { costUsd: 0.01 },
    });
    expect(decision.allow).toBe(true);
  });
});
