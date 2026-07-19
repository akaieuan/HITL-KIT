// AUTO-GENERATED public type surface for @hitl-kit/langgraph.
// Regenerate with `pnpm api:check`. Do not edit by hand.
// A diff here means the published type API changed — review it on purpose.

import { HitlEvent, EditablePlanEvent, AiGenerationScaleEvent, ApproveRejectEvent, BatchQueueEvent, CitationResultEvent, ContextChipsEvent, DiffResultEvent, HitlCardEvent, MiniTraceEvent, QAFlowEvent, ResearchAgentEvent, SearchResultEvent, SubagentStatusEvent, ToolCallPreviewEvent, WritingAgentEvent } from '@hitl-kit/core';
export { AgentStatus, AiGenerationScaleEvent, ApprovalState, ApproveRejectEvent, BatchQueueEvent, CitationResultEvent, ContextChipsEvent, DiffResultEvent, EditablePlanEvent, HitlCardEvent, HitlEvent, HitlEventKind, MiniTraceEvent, QAFlowEvent, ResearchAgentEvent, SearchResultEvent, SubagentStatusEvent, ToolCallPreviewEvent, WritingAgentEvent } from '@hitl-kit/core';
import { GateDecision, GateSignals, Gate } from '@hitl-kit/gates';

/**
 * The payload shape you pass into LangGraph's `interrupt()`. It wraps a
 * HitlEvent in an envelope so the resume handler can tell HITL Kit
 * interrupts apart from other interrupts in the same graph.
 */
interface HitlInterruptPayload<E extends HitlEvent = HitlEvent> {
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
type HitlResume = Record<string, unknown>;
/**
 * Runtime type guard. Returns true if a value is a HitlInterruptPayload
 * (as opposed to some other interrupt type in the same graph).
 */
declare function isHitlInterrupt(value: unknown): value is HitlInterruptPayload;

declare function createHitlCardInterrupt(payload: Omit<HitlCardEvent, "kind">, meta?: Record<string, unknown>): HitlInterruptPayload<HitlCardEvent>;
declare function createSubagentStatusInterrupt(payload: Omit<SubagentStatusEvent, "kind">, meta?: Record<string, unknown>): HitlInterruptPayload<SubagentStatusEvent>;
declare function createMiniTraceInterrupt(payload: Omit<MiniTraceEvent, "kind">, meta?: Record<string, unknown>): HitlInterruptPayload<MiniTraceEvent>;
declare function createAiGenerationScaleInterrupt(payload: Omit<AiGenerationScaleEvent, "kind">, meta?: Record<string, unknown>): HitlInterruptPayload<AiGenerationScaleEvent>;
declare function createContextChipsInterrupt(payload: Omit<ContextChipsEvent, "kind">, meta?: Record<string, unknown>): HitlInterruptPayload<ContextChipsEvent>;
declare function createQAFlowInterrupt(payload: Omit<QAFlowEvent, "kind">, meta?: Record<string, unknown>): HitlInterruptPayload<QAFlowEvent>;
declare function createWritingAgentInterrupt(payload: Omit<WritingAgentEvent, "kind">, meta?: Record<string, unknown>): HitlInterruptPayload<WritingAgentEvent>;
declare function createResearchAgentInterrupt(payload: Omit<ResearchAgentEvent, "kind">, meta?: Record<string, unknown>): HitlInterruptPayload<ResearchAgentEvent>;
declare function createBatchQueueInterrupt(payload: Omit<BatchQueueEvent, "kind">, meta?: Record<string, unknown>): HitlInterruptPayload<BatchQueueEvent>;
declare function createSearchResultInterrupt(payload: Omit<SearchResultEvent, "kind">, meta?: Record<string, unknown>): HitlInterruptPayload<SearchResultEvent>;
declare function createApproveRejectInterrupt(payload: Omit<ApproveRejectEvent, "kind">, meta?: Record<string, unknown>): HitlInterruptPayload<ApproveRejectEvent>;
declare function createDiffResultInterrupt(payload: Omit<DiffResultEvent, "kind">, meta?: Record<string, unknown>): HitlInterruptPayload<DiffResultEvent>;
declare function createCitationResultInterrupt(payload: Omit<CitationResultEvent, "kind">, meta?: Record<string, unknown>): HitlInterruptPayload<CitationResultEvent>;
declare function createEditablePlanInterrupt(payload: Omit<EditablePlanEvent, "kind">, meta?: Record<string, unknown>): HitlInterruptPayload<EditablePlanEvent>;
declare function createToolCallPreviewInterrupt(payload: Omit<ToolCallPreviewEvent, "kind">, meta?: Record<string, unknown>): HitlInterruptPayload<ToolCallPreviewEvent>;
/**
 * Resume payload for an EditablePlan interrupt. Use the type guard
 * `isEditablePlanResume()` to narrow `Command({ resume })` payloads on
 * the server side after a human submits the edited plan.
 */
interface EditablePlanResume {
    steps: EditablePlanEvent["steps"];
    cancelled?: boolean;
}
declare function isEditablePlanResume(value: unknown): value is EditablePlanResume;

interface WithGatesOptions {
    signals?: GateSignals;
    /**
     * What to do when a gate denies.
     * - `"interrupt-with-escalate"` (default): replace the original payload's
     *   event with the gate's `escalate` event so the graph still pauses but
     *   the human sees the gate reason. If the gate provides no escalate,
     *   the original payload is preserved and the deny is recorded in `meta`.
     * - `"throw"`: throw a `GateDeniedError`. Use when you want the graph
     *   to fail rather than ask the human.
     * - function: produce a custom payload from the decision.
     */
    onDeny?: "interrupt-with-escalate" | "throw" | ((decision: Extract<GateDecision, {
        allow: false;
    }>) => HitlInterruptPayload);
}
declare class GateDeniedError extends Error {
    readonly decision: Extract<GateDecision, {
        allow: false;
    }>;
    constructor(decision: Extract<GateDecision, {
        allow: false;
    }>);
}
/**
 * Wrap a HitlInterruptPayload with a gate chain. Returns a payload ready
 * to pass into LangGraph's `interrupt()`. On deny, the default behavior
 * surfaces the gate's escalation event so the human can override.
 *
 * ```ts
 * const cardPayload = createHitlCardInterrupt({...});
 * const gated = await withGates(cardPayload, [confidenceGate({ min: 0.85 })], {
 *   signals: { confidence: state.modelConfidence },
 * });
 * const approval = interrupt(gated);
 * ```
 */
declare function withGates<E extends HitlEvent>(payload: HitlInterruptPayload<E>, gates: Gate[], opts?: WithGatesOptions): Promise<HitlInterruptPayload<HitlEvent>>;

export { type EditablePlanResume, GateDeniedError, type HitlInterruptPayload, type HitlResume, type WithGatesOptions, createAiGenerationScaleInterrupt, createApproveRejectInterrupt, createBatchQueueInterrupt, createCitationResultInterrupt, createContextChipsInterrupt, createDiffResultInterrupt, createEditablePlanInterrupt, createHitlCardInterrupt, createMiniTraceInterrupt, createQAFlowInterrupt, createResearchAgentInterrupt, createSearchResultInterrupt, createSubagentStatusInterrupt, createToolCallPreviewInterrupt, createWritingAgentInterrupt, isEditablePlanResume, isHitlInterrupt, withGates };
