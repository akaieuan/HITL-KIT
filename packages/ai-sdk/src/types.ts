import type { HitlEvent } from "@hitl-kit/core";

/**
 * A tool-call result that carries a HITL event. When you receive tool
 * results on the client (from `useChat` or `streamText`), filter for
 * results whose shape matches this and pass them to
 * `<HitlEventRenderer />`.
 */
export interface HitlToolResult<E extends HitlEvent = HitlEvent> {
  /** The validated event. */
  result: E;
}

/**
 * Type guard: returns true if a tool result carries a HITL event.
 * Useful when filtering a streamed conversation for items to render.
 */
export function isHitlToolResult(value: unknown): value is HitlToolResult {
  if (typeof value !== "object" || value === null) return false;
  const maybe = value as { result?: unknown };
  if (typeof maybe.result !== "object" || maybe.result === null) return false;
  const event = maybe.result as { kind?: unknown };
  return typeof event.kind === "string" && event.kind.length > 0;
}
