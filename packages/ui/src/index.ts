/**
 * @hitl-kit/ui
 *
 * Every HITL Kit primitive, one per core event kind, plus the scale family
 * and the shared palette. Props are the event spread; decisions come back
 * through `onAction`. Types come from `@hitl-kit/core`; re-exported here for
 * convenience only.
 */

// Decision surfaces
export { HitlCard, type HitlCardProps } from "./HitlCard";
export { ToolCallPreview, type ToolCallPreviewProps } from "./ToolCallPreview";
export { DiffResult, type DiffResultProps } from "./DiffResult";
export { CitationResult, type CitationResultProps } from "./CitationResult";
export { EvidencePointer, type EvidencePointerProps, describeLocator } from "./EvidencePointer";
export { ApproveRejectRow, type ApproveRejectRowProps } from "./ApproveRejectRow";
export { EditablePlan, type EditablePlanProps, DEMO_PLAN } from "./EditablePlan";
export { QAFlow, type QAFlowProps, DEMO_QA } from "./QAFlow";
export { BatchQueue, type BatchQueueProps, DEMO_BATCH } from "./BatchQueue";

// Agent state
export { SubagentStatusCard, type SubagentStatusCardProps } from "./SubagentStatusCard";
export { MiniTrace, type MiniTraceProps, DEMO_TRACE, DEMO_TRACE_STEPS } from "./MiniTrace";
export { ContextChips, type ContextChipsProps } from "./ContextChips";
export { SearchResultCard, type SearchResultCardProps, DEMO_SEARCH_RESULTS } from "./SearchResultCard";

// Composed
export { WritingAgent, type WritingAgentProps, DEMO_WRITING_AGENT } from "./WritingAgent";
export {
  ResearchAgent,
  type ResearchAgentProps,
  DEMO_RESEARCH_AGENT,
  DEMO_RESEARCH_CONFIG,
} from "./ResearchAgent";

// Scales and palette
export { AiGenerationScale, type AiGenerationScaleProps } from "./AiGenerationScale";
export { AiGenerationSlider, type AiGenerationSliderProps } from "./AiGenerationSlider";
export { AiGenerationMeter, type AiGenerationMeterProps } from "./AiGenerationMeter";
export { AiGenerationBadge, type AiGenerationBadgeProps } from "./AiGenerationBadge";
export { SharedPrimitives } from "./SharedPrimitives";
export * from "./ai-generation-levels";
export { STATUS_META } from "./subagent-meta";

// Fixtures
export {
  DEMO_HITL_CARDS,
  DEMO_TOOL_CALL,
  DEMO_DIFF,
  DEMO_CITATION,
  DEMO_EVIDENCE,
} from "./fixtures";

// Types
export type { DecisionSurfaceProps, HitlCardState } from "./types";
export { cn } from "./lib/utils";
