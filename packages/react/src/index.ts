export { HitlEventRenderer } from "./HitlEventRenderer";
export type { HitlEventRendererProps } from "./HitlEventRenderer";
export { createRegistry } from "./createRegistry";
export type { HitlRegistry, HitlEventOfKind } from "./types";

// Re-export every event type and schema from core so consumers only
// import from one package in simple cases. For advanced usage (importing
// a single schema like HitlCardEventSchema), import from "@hitl-kit/core"
// directly.
export type {
  HitlEvent,
  HitlEventKind,
  AgentStatus,
  ApprovalState,
} from "@hitl-kit/core";
