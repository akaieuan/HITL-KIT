import { describe, expect, it } from "vitest";
import { costGate } from "../gates/cost";
import { inMemoryStore } from "../store";

describe("costGate", () => {
  it("allows when projected cost is at or below max", async () => {
    const gate = costGate({ maxUsd: 0.05 });
    const decision = await gate({
      adapter: "core",
      signals: { costUsd: 0.04 },
    });
    expect(decision.allow).toBe(true);
  });

  it("denies when projected cost exceeds max", async () => {
    const gate = costGate({ maxUsd: 0.05 });
    const decision = await gate({
      adapter: "core",
      signals: { costUsd: 0.10 },
    });
    expect(decision.allow).toBe(false);
    if (!decision.allow) expect(decision.code).toBe("cost_exceeded");
  });

  it("allows when no cost signal supplied (fail open)", async () => {
    const gate = costGate({ maxUsd: 0.05 });
    const decision = await gate({ adapter: "core" });
    expect(decision.allow).toBe(true);
  });

  it("cumulative mode accumulates across calls", async () => {
    const store = inMemoryStore();
    const gate = costGate({
      maxUsd: 0.05,
      cumulative: { store, key: () => "user:42", windowSec: 60 },
    });
    const ctx = { adapter: "core" as const, signals: { costUsd: 0.02 } };

    expect((await gate(ctx)).allow).toBe(true); // 0.02 total
    expect((await gate(ctx)).allow).toBe(true); // 0.04 total
    const third = await gate(ctx); // 0.06 total — over
    expect(third.allow).toBe(false);
  });
});
