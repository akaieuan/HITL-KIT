import { describe, expect, it } from "vitest";
import {
  CitationResultEventSchema,
  HitlCardEventSchema,
  ToolCallPreviewEventSchema,
} from "../events";

/**
 * These tests pin the security constraints added in the v0.6c-security pass.
 * If a future refactor relaxes them, this file fails first.
 */

describe("URL safety", () => {
  const valid = {
    kind: "result.citation" as const,
    claim: "x",
    source: {
      title: "t",
      authors: "a",
      year: 2024,
    },
  };

  it("accepts http(s) URLs", () => {
    expect(
      CitationResultEventSchema.safeParse({
        ...valid,
        source: { ...valid.source, url: "https://example.com" },
      }).success,
    ).toBe(true);
    expect(
      CitationResultEventSchema.safeParse({
        ...valid,
        source: { ...valid.source, url: "http://example.com" },
      }).success,
    ).toBe(true);
  });

  it("rejects javascript: URI (XSS vector)", () => {
    const r = CitationResultEventSchema.safeParse({
      ...valid,
      source: { ...valid.source, url: "javascript:alert(1)" },
    });
    expect(r.success).toBe(false);
  });

  it("rejects data: URI", () => {
    const r = CitationResultEventSchema.safeParse({
      ...valid,
      source: { ...valid.source, url: "data:text/html,<script>alert(1)</script>" },
    });
    expect(r.success).toBe(false);
  });

  it("rejects file: URI", () => {
    const r = CitationResultEventSchema.safeParse({
      ...valid,
      source: { ...valid.source, url: "file:///etc/passwd" },
    });
    expect(r.success).toBe(false);
  });
});

describe("String length caps", () => {
  it("rejects oversized titles", () => {
    const r = HitlCardEventSchema.safeParse({
      kind: "hitl.card",
      variant: "review",
      title: "x".repeat(10000),
      subtitle: "ok",
      steps: [],
      runLabel: "ok",
    });
    expect(r.success).toBe(false);
  });

  it("accepts reasonable titles", () => {
    const r = HitlCardEventSchema.safeParse({
      kind: "hitl.card",
      variant: "review",
      title: "x".repeat(150),
      subtitle: "ok",
      steps: [],
      runLabel: "ok",
    });
    expect(r.success).toBe(true);
  });
});

describe("Array size caps", () => {
  it("rejects too many HitlCard steps", () => {
    const r = HitlCardEventSchema.safeParse({
      kind: "hitl.card",
      variant: "review",
      title: "t",
      subtitle: "s",
      steps: Array.from({ length: 100 }, (_, i) => ({
        label: `step ${i}`,
        done: false,
      })),
      runLabel: "ok",
    });
    expect(r.success).toBe(false);
  });
});

describe("ToolCall.args safety", () => {
  const base = {
    kind: "tool.call" as const,
    toolName: "send_email",
  };

  it("accepts a normal args object", () => {
    const r = ToolCallPreviewEventSchema.safeParse({
      ...base,
      args: { to: "x@y.com", subject: "hi", body: "test" },
    });
    expect(r.success).toBe(true);
  });

  it("rejects constructor as own key (prototype pollution attempt)", () => {
    // `__proto__` is the more famous vector, but JS object spread and
    // JSON.parse strip it before the schema ever sees it (V8 hardening).
    // `constructor` and `prototype` are regular string keys that DON'T
    // get stripped — those are what we actually need the schema to
    // catch. `__proto__` is defense-in-depth covered by the same refine.
    const args: Record<string, unknown> = {
      constructor: { prototype: { polluted: true } },
    };
    const r = ToolCallPreviewEventSchema.safeParse({ ...base, args });
    expect(r.success).toBe(false);
  });

  it("rejects prototype as own key", () => {
    const args: Record<string, unknown> = { prototype: { x: 1 } };
    const r = ToolCallPreviewEventSchema.safeParse({ ...base, args });
    expect(r.success).toBe(false);
  });

  it("rejects deeply nested args (DoS via JSON.stringify)", () => {
    // Build a 10-level nested object — over our depth cap of 6
    let deep: unknown = "leaf";
    for (let i = 0; i < 10; i++) deep = { nest: deep };
    const r = ToolCallPreviewEventSchema.safeParse({
      ...base,
      args: { root: deep },
    });
    expect(r.success).toBe(false);
  });

  it("rejects too many top-level keys", () => {
    const args: Record<string, string> = {};
    for (let i = 0; i < 200; i++) args[`k${i}`] = "v";
    const r = ToolCallPreviewEventSchema.safeParse({ ...base, args });
    expect(r.success).toBe(false);
  });

  it("rejects oversized serialized args (DoS via size)", () => {
    const r = ToolCallPreviewEventSchema.safeParse({
      ...base,
      args: { body: "x".repeat(200_000) },
    });
    expect(r.success).toBe(false);
  });

  it("rejects circular references", () => {
    const circ: Record<string, unknown> = { a: 1 };
    circ.self = circ;
    const r = ToolCallPreviewEventSchema.safeParse({ ...base, args: circ });
    expect(r.success).toBe(false);
  });
});
