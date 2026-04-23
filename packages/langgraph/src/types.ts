import type { HitlEvent } from "@hitl-kit/core";

/**
 * The payload shape you pass into LangGraph's `interrupt()`. It wraps a
 * HitlEvent in an envelope so the resume handler can tell HITL Kit
 * interrupts apart from other interrupts in the same graph.
 */
export interface HitlInterruptPayload<E extends HitlEvent = HitlEvent> {
  /** Discriminator so resume handlers can route by source. */
  source: "hitl-kit";

  /** The validated HitlEvent to render in the UI. */
  event: E;

  /**
   * Optional metadata you want surfaced on the client side alongside
   * the event (thread id, node name, etc). Opaque to the adapter.
   */
  meta?: Record<string, unknown>;
}

/**
 * The shape you send back through a LangGraph `Command({ resume })` when
 * the human has acted on a HITL event. Constrained minimally; the adapter
 * passes the resume value through unchanged.
 *
 * Primitives typically return one of:
 *   - `{ approved: true }` / `{ approved: false }`
 *   - `{ state: "approved" | "rejected" }` for ApproveRejectEvent
 *   - `{ answers: [...] }` for QAFlowEvent
 *   - arbitrary payloads for custom primitives
 */
export type HitlResume = Record<string, unknown>;

/**
 * Runtime type guard. Returns true if a value is a HitlInterruptPayload
 * (as opposed to some other interrupt type in the same graph).
 */
export function isHitlInterrupt(
  value: unknown,
): value is HitlInterruptPayload {
  return (
    typeof value === "object" &&
    value !== null &&
    (value as { source?: unknown }).source === "hitl-kit" &&
    "event" in (value as object)
  );
}
