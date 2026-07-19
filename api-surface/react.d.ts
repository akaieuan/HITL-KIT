// AUTO-GENERATED public type surface for @hitl-kit/react.
// Regenerate with `pnpm api:check`. Do not edit by hand.
// A diff here means the published type API changed — review it on purpose.

import * as react_jsx_runtime from 'react/jsx-runtime';
import { ComponentType, ReactNode } from 'react';
import { HitlEventKind, HitlEvent } from '@hitl-kit/core';
export { AgentStatus, ApprovalState, HitlEvent, HitlEventKind } from '@hitl-kit/core';

/**
 * Helper that maps a HitlEvent to the event flavour with a given kind.
 * HitlRegistry<K> returns the prop type of a component that handles events of kind K.
 */
type HitlEventOfKind<K extends HitlEventKind> = Extract<HitlEvent, {
    kind: K;
}>;
/**
 * A registry maps event.kind to a React component that renders that event.
 * Each component receives the full event as props (spread), plus optional
 * onAction callback and any extra props you want to supply via registry closure.
 *
 * The registry is Partial so consumers can implement a subset of primitives.
 * Events whose kind is not in the registry render the fallback (default null).
 */
type HitlRegistry = Partial<{
    [K in HitlEventKind]: ComponentType<HitlEventOfKind<K> & {
        onAction?: (action: unknown) => void;
    }>;
}>;

interface HitlEventRendererProps {
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
declare function HitlEventRenderer({ event, registry, onAction, fallback, invalidFallback, validate, }: HitlEventRendererProps): react_jsx_runtime.JSX.Element;

/**
 * Helper for defining a registry with strict typing. Purely an identity
 * function that forces the argument to satisfy HitlRegistry so you get
 * autocomplete on event.kind keys and type errors if a component's props
 * don't match the event shape.
 *
 * ```tsx
 * const registry = createRegistry({
 *   "hitl.card": ({ variant, title, steps }) => <HitlCard ... />,
 *   "subagent.status": ({ status, label }) => <SubagentStatusCard ... />,
 * });
 * ```
 */
declare function createRegistry<R extends HitlRegistry>(registry: R): R;

export { type HitlEventOfKind, HitlEventRenderer, type HitlEventRendererProps, type HitlRegistry, createRegistry };
