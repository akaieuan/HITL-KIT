import { describe, expect, it } from "vitest";
import { scopeGate } from "../gates/scope";

describe("scopeGate", () => {
  it("allows scopes within the allowed list", async () => {
    const gate = scopeGate({ allowed: ["read:files", "read:web"] });
    const decision = await gate({
      adapter: "core",
      signals: { scope: ["read:files"] },
    });
    expect(decision.allow).toBe(true);
  });

  it("denies a scope outside the allowed list", async () => {
    const gate = scopeGate({ allowed: ["read:files"] });
    const decision = await gate({
      adapter: "core",
      signals: { scope: ["write:db"] },
    });
    expect(decision.allow).toBe(false);
    if (!decision.allow) expect(decision.code).toBe("scope_violation");
  });

  it("denies a scope in the denied list", async () => {
    const gate = scopeGate({ denied: ["delete:all"] });
    const decision = await gate({
      adapter: "core",
      signals: { scope: ["delete:all"] },
    });
    expect(decision.allow).toBe(false);
  });

  it("allows when no scopes requested", async () => {
    const gate = scopeGate({ allowed: ["read:files"] });
    const decision = await gate({ adapter: "core" });
    expect(decision.allow).toBe(true);
  });

  it("policy escape hatch overrides allowed/denied", async () => {
    const gate = scopeGate({
      allowed: ["nope"],
      policy: () => ({ allow: true }),
    });
    const decision = await gate({
      adapter: "core",
      signals: { scope: ["something-else"] },
    });
    expect(decision.allow).toBe(true);
  });
});
