import { describe, expect, it, vi } from "vitest";
import { composeGates } from "../compose";
import type { Gate } from "../types";

const allow: Gate = () => ({ allow: true });
const deny: Gate = () => ({
  allow: false,
  code: "scope_violation",
  reason: "no",
});

describe("composeGates", () => {
  it("allows when every gate allows", async () => {
    const composed = composeGates([allow, allow, allow]);
    const decision = await composed({ adapter: "core" });
    expect(decision.allow).toBe(true);
  });

  it("denies on first deny (short-circuit)", async () => {
    const second = vi.fn(deny);
    const third = vi.fn(allow);
    const composed = composeGates([allow, second, third]);
    const decision = await composed({ adapter: "core" });
    expect(decision.allow).toBe(false);
    expect(second).toHaveBeenCalledTimes(1);
    expect(third).not.toHaveBeenCalled();
  });

  it("returns allow for an empty gate list", async () => {
    const composed = composeGates([]);
    const decision = await composed({ adapter: "core" });
    expect(decision.allow).toBe(true);
  });

  it("supports async gates", async () => {
    const asyncDeny: Gate = async () => ({
      allow: false,
      code: "rate_limited",
      reason: "wait",
    });
    const composed = composeGates([allow, asyncDeny]);
    const decision = await composed({ adapter: "core" });
    expect(decision.allow).toBe(false);
    if (!decision.allow) expect(decision.code).toBe("rate_limited");
  });
});
