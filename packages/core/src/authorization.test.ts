import { describe, expect, it } from "vitest";
import {
  ApprovalStateSchema,
  EvidencePointerEventSchema,
  HitlEventSchema,
  isAuthorized,
} from "./events.js";

/**
 * The authorization primitives.
 *
 * These pin the two claims that make the vocabulary worth having: that an
 * abstention is not a denial and never authorizes an action, and that
 * evidence has to be LOCATED rather than merely asserted.
 */

describe("abstained", () => {
  it("is a distinct state, not a flavour of rejected", () => {
    expect(ApprovalStateSchema.options).toContain("abstained");
    expect(ApprovalStateSchema.parse("abstained")).toBe("abstained");
  });

  it("does NOT authorize the gated action", () => {
    // The whole point. "I cannot determine this" must never be mistaken for
    // consent by a caller that only checks `state !== "rejected"`.
    expect(isAuthorized("approved")).toBe(true);
    expect(isAuthorized("abstained")).toBe(false);
    expect(isAuthorized("rejected")).toBe(false);
    expect(isAuthorized("pending")).toBe(false);
  });

  it("keeps the pre-existing states valid", () => {
    for (const s of ["pending", "approved", "rejected"] as const) {
      expect(() => ApprovalStateSchema.parse(s)).not.toThrow();
    }
  });
});

describe("evidence.pointer", () => {
  const base = {
    kind: "evidence.pointer" as const,
    claim: "The contract caps liability at 12 months of fees.",
    items: [
      {
        sourceId: "msa-2024",
        sourceLabel: "Master Services Agreement",
        locator: { type: "span" as const, start: 4120, end: 4260 },
        excerpt: "…liability shall not exceed the fees paid in the twelve (12) months…",
      },
    ],
  };

  it("accepts a located claim", () => {
    const parsed = EvidencePointerEventSchema.parse(base);
    expect(parsed.items[0]?.locator.type).toBe("span");
    // notAssessed defaults rather than being undefined — absence is a value.
    expect(parsed.notAssessed).toEqual([]);
  });

  it("carries what was NOT assessed", () => {
    const parsed = EvidencePointerEventSchema.parse({
      ...base,
      notAssessed: ["Amendment 3 (unparsed)", "Exhibit B"],
    });
    expect(parsed.notAssessed).toHaveLength(2);
  });

  it("accepts every locator kind", () => {
    const locators = [
      { type: "span" as const, start: 0, end: 10 },
      { type: "bbox" as const, x: 0.1, y: 0.2, width: 0.3, height: 0.4, page: 2 },
      { type: "segment" as const, startSec: 12, endSec: 24 },
      { type: "whole" as const },
    ];
    for (const locator of locators) {
      const ev = EvidencePointerEventSchema.parse({
        ...base,
        items: [{ ...base.items[0]!, locator }],
      });
      expect(ev.items[0]?.locator.type).toBe(locator.type);
    }
  });

  it("rejects a bbox outside the normalised range", () => {
    // Normalised 0–1 so a highlight survives rescaling; a pixel value here
    // would silently land in the wrong place on a different viewport.
    expect(() =>
      EvidencePointerEventSchema.parse({
        ...base,
        items: [
          {
            ...base.items[0]!,
            locator: { type: "bbox", x: 420, y: 60, width: 100, height: 20 },
          },
        ],
      }),
    ).toThrow();
  });

  it("rejects a non-http url on an evidence item", () => {
    // Same hardening as SafeUrlSchema elsewhere: a javascript: URI would
    // execute when the pointer is rendered as a link.
    expect(() =>
      EvidencePointerEventSchema.parse({
        ...base,
        items: [{ ...base.items[0]!, url: "javascript:alert(1)" }],
      }),
    ).toThrow();
  });

  it("is dispatchable through the event union", () => {
    const parsed = HitlEventSchema.parse(base);
    expect(parsed.kind).toBe("evidence.pointer");
  });
});
