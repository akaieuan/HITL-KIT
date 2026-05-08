import { describe, expect, it } from "vitest";
import { rateLimitGate } from "../gates/rate-limit";
import { inMemoryStore } from "../store";

describe("rateLimitGate", () => {
  it("allows up to max calls then denies", async () => {
    const store = inMemoryStore();
    const gate = rateLimitGate({
      store,
      key: () => "u1",
      max: 3,
      windowSec: 60,
    });
    const ctx = { adapter: "core" as const };

    expect((await gate(ctx)).allow).toBe(true);
    expect((await gate(ctx)).allow).toBe(true);
    expect((await gate(ctx)).allow).toBe(true);
    const fourth = await gate(ctx);
    expect(fourth.allow).toBe(false);
    if (!fourth.allow) expect(fourth.code).toBe("rate_limited");
  });

  it("isolates limits per-key", async () => {
    const store = inMemoryStore();
    const gate = rateLimitGate({
      store,
      key: (ctx) =>
        (ctx.signals?.userId as string | undefined) ?? "anon",
      max: 1,
      windowSec: 60,
    });
    expect(
      (await gate({ adapter: "core", signals: { userId: "alice" } })).allow,
    ).toBe(true);
    expect(
      (await gate({ adapter: "core", signals: { userId: "bob" } })).allow,
    ).toBe(true);
    expect(
      (await gate({ adapter: "core", signals: { userId: "alice" } })).allow,
    ).toBe(false);
  });
});
