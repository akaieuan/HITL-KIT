import { describe, expect, it } from "vitest";
import { inMemoryStore } from "../store";

describe("inMemoryStore", () => {
  it("get returns undefined for missing keys", async () => {
    const store = inMemoryStore();
    expect(await store.get("missing")).toBeUndefined();
  });

  it("set then get round-trips a value", async () => {
    const store = inMemoryStore();
    await store.set("k", { a: 1 });
    expect(await store.get<{ a: number }>("k")).toEqual({ a: 1 });
  });

  it("incr starts at 1 and grows monotonically", async () => {
    const store = inMemoryStore();
    expect(await store.incr("c")).toBe(1);
    expect(await store.incr("c")).toBe(2);
    expect(await store.incr("c")).toBe(3);
  });

  it("delete removes a key", async () => {
    const store = inMemoryStore();
    await store.set("k", "v");
    await store.delete("k");
    expect(await store.get("k")).toBeUndefined();
  });

  it("respects TTL on set (entry expires after window)", async () => {
    const store = inMemoryStore();
    // 1ms TTL is the smallest practical positive TTL. Setting then
    // sleeping past it should evict on the next get.
    await store.set("k", "v", 0.001);
    await new Promise((r) => setTimeout(r, 10));
    expect(await store.get("k")).toBeUndefined();
  });
});
