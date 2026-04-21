import type { HitlRegistry } from "./types";

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
export function createRegistry<R extends HitlRegistry>(registry: R): R {
  return registry;
}
