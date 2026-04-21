import type { ComponentType } from "react";
import type { HitlEvent, HitlEventKind } from "@hitl-kit/core";

/**
 * Helper that maps a HitlEvent to the event flavour with a given kind.
 * HitlRegistry<K> returns the prop type of a component that handles events of kind K.
 */
export type HitlEventOfKind<K extends HitlEventKind> = Extract<
  HitlEvent,
  { kind: K }
>;

/**
 * A registry maps event.kind to a React component that renders that event.
 * Each component receives the full event as props (spread), plus optional
 * onAction callback and any extra props you want to supply via registry closure.
 *
 * The registry is Partial so consumers can implement a subset of primitives.
 * Events whose kind is not in the registry render the fallback (default null).
 */
export type HitlRegistry = Partial<{
  [K in HitlEventKind]: ComponentType<
    HitlEventOfKind<K> & { onAction?: (action: unknown) => void }
  >;
}>;
