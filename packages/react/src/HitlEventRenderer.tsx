"use client";

import type { ReactNode } from "react";
import { HitlEventSchema, type HitlEvent } from "@hitl-kit/core";
import type { HitlRegistry } from "./types";

export interface HitlEventRendererProps {
  /**
   * The HITL event to render. Pass a parsed object or raw value.
   * When `validate` is true (default) the renderer uses the shared
   * Zod schema to validate and narrow the event at runtime.
   */
  event: HitlEvent | unknown;

  /**
   * A map of event.kind -> React component. Usually built with
   * `createRegistry(...)` for ergonomic typing.
   */
  registry: HitlRegistry;

  /**
   * Optional callback passed to the mounted primitive. Primitives
   * call this when the human interacts (approve, reject, submit QA, etc.).
   */
  onAction?: (action: unknown) => void;

  /**
   * Rendered when the event is unknown (no registry entry for its kind).
   * Default: null.
   */
  fallback?: ReactNode;

  /**
   * Rendered when runtime validation fails. Default: null.
   */
  invalidFallback?: ReactNode;

  /**
   * Disable runtime Zod validation. Use only if you've already
   * validated the event upstream (e.g. inside an adapter).
   */
  validate?: boolean;
}

/**
 * Type-safe dispatcher from a validated HitlEvent to the primitive
 * component registered for that event's kind.
 *
 * ```tsx
 * import { HitlEventRenderer } from "@hitl-kit/react";
 * import { HitlCard } from "@/components/hitl/HitlCard";
 *
 * const registry = {
 *   "hitl.card": (ev) => <HitlCard config={ev} />,
 * };
 *
 * <HitlEventRenderer event={event} registry={registry} />
 * ```
 */
export function HitlEventRenderer({
  event,
  registry,
  onAction,
  fallback = null,
  invalidFallback = null,
  validate = true,
}: HitlEventRendererProps) {
  let resolved: HitlEvent;

  if (validate) {
    const parsed = HitlEventSchema.safeParse(event);
    if (!parsed.success) {
      return <>{invalidFallback}</>;
    }
    resolved = parsed.data;
  } else {
    resolved = event as HitlEvent;
  }

  const Component = registry[resolved.kind];
  if (!Component) {
    return <>{fallback}</>;
  }

  // Narrow the event-kind/component pair. TypeScript can't infer that the
  // registry entry's prop type matches the specific event variant at this
  // point, so a single-site cast is used. The runtime dispatch is correct
  // because registry[kind] is typed against the matching event.
  const Typed = Component as React.ComponentType<
    HitlEvent & { onAction?: (action: unknown) => void }
  >;
  return <Typed {...resolved} onAction={onAction} />;
}
