import {
  HitlCardEventSchema,
  SubagentStatusEventSchema,
  MiniTraceEventSchema,
  AiGenerationScaleEventSchema,
  ContextChipsEventSchema,
  QAFlowEventSchema,
  WritingAgentEventSchema,
  ResearchAgentEventSchema,
  BatchQueueEventSchema,
  SearchResultEventSchema,
  ApproveRejectEventSchema,
  DiffResultEventSchema,
  CitationResultEventSchema,
  EditablePlanEventSchema,
  ToolCallPreviewEventSchema,
  type HitlEvent,
  type HitlCardEvent,
  type SubagentStatusEvent,
  type MiniTraceEvent,
  type AiGenerationScaleEvent,
  type ContextChipsEvent,
  type QAFlowEvent,
  type WritingAgentEvent,
  type ResearchAgentEvent,
  type BatchQueueEvent,
  type SearchResultEvent,
  type ApproveRejectEvent,
  type DiffResultEvent,
  type CitationResultEvent,
  type EditablePlanEvent,
  type ToolCallPreviewEvent,
} from "@hitl-kit/core";
import type { HitlInterruptPayload } from "./types";

/**
 * Each helper takes the *payload-shaped* fields (everything but the
 * `kind` discriminator) and returns a validated HitlInterruptPayload
 * ready to pass into LangGraph's `interrupt()`.
 *
 * Validation happens at interrupt-emit time, which means a malformed
 * payload fails fast inside the graph node — much easier to debug than
 * discovering it on the client.
 */

function wrap<E extends HitlEvent>(
  event: E,
  meta?: Record<string, unknown>,
): HitlInterruptPayload<E> {
  return {
    source: "hitl-kit",
    event,
    meta,
  };
}

/* ─── 01. Interrupt Card ────────────────────────────────────────────────── */

export function createHitlCardInterrupt(
  payload: Omit<HitlCardEvent, "kind">,
  meta?: Record<string, unknown>,
): HitlInterruptPayload<HitlCardEvent> {
  const event = HitlCardEventSchema.parse({ kind: "hitl.card", ...payload });
  return wrap(event, meta);
}

/* ─── 02. Subagent Status ───────────────────────────────────────────────── */

export function createSubagentStatusInterrupt(
  payload: Omit<SubagentStatusEvent, "kind">,
  meta?: Record<string, unknown>,
): HitlInterruptPayload<SubagentStatusEvent> {
  const event = SubagentStatusEventSchema.parse({
    kind: "subagent.status",
    ...payload,
  });
  return wrap(event, meta);
}

/* ─── 03. MiniTrace ─────────────────────────────────────────────────────── */

export function createMiniTraceInterrupt(
  payload: Omit<MiniTraceEvent, "kind">,
  meta?: Record<string, unknown>,
): HitlInterruptPayload<MiniTraceEvent> {
  const event = MiniTraceEventSchema.parse({ kind: "trace.mini", ...payload });
  return wrap(event, meta);
}

/* ─── 04. AI Generation Scale ───────────────────────────────────────────── */

export function createAiGenerationScaleInterrupt(
  payload: Omit<AiGenerationScaleEvent, "kind">,
  meta?: Record<string, unknown>,
): HitlInterruptPayload<AiGenerationScaleEvent> {
  const event = AiGenerationScaleEventSchema.parse({
    kind: "scale.ai_generation",
    ...payload,
  });
  return wrap(event, meta);
}

/* ─── 05. Context Chips ─────────────────────────────────────────────────── */

export function createContextChipsInterrupt(
  payload: Omit<ContextChipsEvent, "kind">,
  meta?: Record<string, unknown>,
): HitlInterruptPayload<ContextChipsEvent> {
  const event = ContextChipsEventSchema.parse({
    kind: "chips.context",
    ...payload,
  });
  return wrap(event, meta);
}

/* ─── 06. QA Flow ───────────────────────────────────────────────────────── */

export function createQAFlowInterrupt(
  payload: Omit<QAFlowEvent, "kind">,
  meta?: Record<string, unknown>,
): HitlInterruptPayload<QAFlowEvent> {
  const event = QAFlowEventSchema.parse({ kind: "qa.flow", ...payload });
  return wrap(event, meta);
}

/* ─── 07. Writing Agent ─────────────────────────────────────────────────── */

export function createWritingAgentInterrupt(
  payload: Omit<WritingAgentEvent, "kind">,
  meta?: Record<string, unknown>,
): HitlInterruptPayload<WritingAgentEvent> {
  const event = WritingAgentEventSchema.parse({
    kind: "agent.writing",
    ...payload,
  });
  return wrap(event, meta);
}

/* ─── 08. Research Agent ────────────────────────────────────────────────── */

export function createResearchAgentInterrupt(
  payload: Omit<ResearchAgentEvent, "kind">,
  meta?: Record<string, unknown>,
): HitlInterruptPayload<ResearchAgentEvent> {
  const event = ResearchAgentEventSchema.parse({
    kind: "agent.research",
    ...payload,
  });
  return wrap(event, meta);
}

/* ─── 09. Batch Queue ───────────────────────────────────────────────────── */

export function createBatchQueueInterrupt(
  payload: Omit<BatchQueueEvent, "kind">,
  meta?: Record<string, unknown>,
): HitlInterruptPayload<BatchQueueEvent> {
  const event = BatchQueueEventSchema.parse({
    kind: "batch.queue",
    ...payload,
  });
  return wrap(event, meta);
}

/* ─── 10. Search Result Card ────────────────────────────────────────────── */

export function createSearchResultInterrupt(
  payload: Omit<SearchResultEvent, "kind">,
  meta?: Record<string, unknown>,
): HitlInterruptPayload<SearchResultEvent> {
  const event = SearchResultEventSchema.parse({
    kind: "result.search",
    ...payload,
  });
  return wrap(event, meta);
}

/* ─── 11. Approve / Reject ──────────────────────────────────────────────── */

export function createApproveRejectInterrupt(
  payload: Omit<ApproveRejectEvent, "kind">,
  meta?: Record<string, unknown>,
): HitlInterruptPayload<ApproveRejectEvent> {
  const event = ApproveRejectEventSchema.parse({
    kind: "approval.binary",
    ...payload,
  });
  return wrap(event, meta);
}

/* ─── 12. Diff Result ───────────────────────────────────────────────────── */

export function createDiffResultInterrupt(
  payload: Omit<DiffResultEvent, "kind">,
  meta?: Record<string, unknown>,
): HitlInterruptPayload<DiffResultEvent> {
  const event = DiffResultEventSchema.parse({ kind: "result.diff", ...payload });
  return wrap(event, meta);
}

/* ─── 13. Citation Result ───────────────────────────────────────────────── */

export function createCitationResultInterrupt(
  payload: Omit<CitationResultEvent, "kind">,
  meta?: Record<string, unknown>,
): HitlInterruptPayload<CitationResultEvent> {
  const event = CitationResultEventSchema.parse({
    kind: "result.citation",
    ...payload,
  });
  return wrap(event, meta);
}

/* ─── 14. Editable Plan ─────────────────────────────────────────────────── */

export function createEditablePlanInterrupt(
  payload: Omit<EditablePlanEvent, "kind">,
  meta?: Record<string, unknown>,
): HitlInterruptPayload<EditablePlanEvent> {
  const event = EditablePlanEventSchema.parse({
    kind: "plan.editable",
    ...payload,
  });
  return wrap(event, meta);
}

/* ─── 15. Tool Call Preview ─────────────────────────────────────────────── */

export function createToolCallPreviewInterrupt(
  payload: Omit<ToolCallPreviewEvent, "kind">,
  meta?: Record<string, unknown>,
): HitlInterruptPayload<ToolCallPreviewEvent> {
  const event = ToolCallPreviewEventSchema.parse({
    kind: "tool.call",
    ...payload,
  });
  return wrap(event, meta);
}

/**
 * Resume payload for an EditablePlan interrupt. Use the type guard
 * `isEditablePlanResume()` to narrow `Command({ resume })` payloads on
 * the server side after a human submits the edited plan.
 */
export interface EditablePlanResume {
  steps: EditablePlanEvent["steps"];
  cancelled?: boolean;
}

export function isEditablePlanResume(
  value: unknown,
): value is EditablePlanResume {
  if (typeof value !== "object" || value === null) return false;
  const v = value as { steps?: unknown };
  return Array.isArray(v.steps);
}
