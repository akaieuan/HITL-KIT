import { describe, expect, it } from "vitest";
import { confidenceGate } from "@hitl-kit/gates";
import { createHitlCardInterrupt } from "../interrupts";
import { withGates, GateDeniedError } from "../gates";
import { isHitlInterrupt } from "../types";

describe("@hitl-kit/langgraph withGates", () => {
  const basePayload = createHitlCardInterrupt({
    variant: "review",
    title: "Review citation",
    subtitle: "needs verification",
    steps: [
      { label: "Found by agent", done: true },
      { label: "Confirm", done: false },
    ],
    runLabel: "Confirm & continue",
  });

  it("passes the original payload through when gates allow", async () => {
    const gated = await withGates(basePayload, [confidenceGate({ min: 0.5 })], {
      signals: { confidence: 0.9 },
    });
    expect(isHitlInterrupt(gated)).toBe(true);
    expect(gated.event.kind).toBe("hitl.card");
    if (gated.event.kind === "hitl.card") {
      expect(gated.event.title).toBe("Review citation");
    }
  });

  it("on deny, default behavior swaps in the gate's escalate event", async () => {
    const gated = await withGates(basePayload, [confidenceGate({ min: 0.9 })], {
      signals: { confidence: 0.2 },
    });
    expect(isHitlInterrupt(gated)).toBe(true);
    expect(gated.event.kind).toBe("hitl.card");
    if (gated.event.kind === "hitl.card") {
      // Default escalate sets variant=review with a "Confidence below threshold" title
      expect(gated.event.title).toMatch(/Confidence below/i);
    }
    const meta = gated.meta as { gate?: { denied?: boolean; code?: string } };
    expect(meta.gate?.denied).toBe(true);
    expect(meta.gate?.code).toBe("confidence_too_low");
  });

  it("on deny with onDeny=throw, raises GateDeniedError", async () => {
    await expect(
      withGates(basePayload, [confidenceGate({ min: 0.9 })], {
        signals: { confidence: 0.2 },
        onDeny: "throw",
      }),
    ).rejects.toBeInstanceOf(GateDeniedError);
  });
});
