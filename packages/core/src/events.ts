import { z } from "zod";

/**
 * Shared enums and building blocks reused across primitive events.
 */

export const AgentStatusSchema = z.enum([
  "idle",
  "running",
  "completed",
  "error",
  "skipped",
  "cancelled",
]);
export type AgentStatus = z.infer<typeof AgentStatusSchema>;

export const ApprovalStateSchema = z.enum(["pending", "approved", "rejected"]);
export type ApprovalState = z.infer<typeof ApprovalStateSchema>;

/* ─── 01. Interrupt Card ────────────────────────────────────────────────── */

export const HitlCardEventSchema = z.object({
  kind: z.literal("hitl.card"),
  id: z.string().optional(),
  variant: z.enum(["search", "review", "write"]),
  title: z.string(),
  subtitle: z.string(),
  steps: z.array(
    z.object({
      label: z.string(),
      done: z.boolean(),
    }),
  ),
  runLabel: z.string(),
  editPlaceholder: z.string().optional(),
});
export type HitlCardEvent = z.infer<typeof HitlCardEventSchema>;

/* ─── 02. Subagent Status ───────────────────────────────────────────────── */

export const SubagentStatusEventSchema = z.object({
  kind: z.literal("subagent.status"),
  id: z.string().optional(),
  status: AgentStatusSchema,
  label: z.string(),
  detail: z.string().optional(),
});
export type SubagentStatusEvent = z.infer<typeof SubagentStatusEventSchema>;

/* ─── 03. MiniTrace ─────────────────────────────────────────────────────── */

export const TraceStepSchema = z.object({
  type: z.enum(["thought", "action", "result"]),
  label: z.string(),
  detail: z.string().optional(),
});
export type TraceStep = z.infer<typeof TraceStepSchema>;

export const MiniTraceEventSchema = z.object({
  kind: z.literal("trace.mini"),
  id: z.string().optional(),
  steps: z.array(TraceStepSchema),
});
export type MiniTraceEvent = z.infer<typeof MiniTraceEventSchema>;

/* ─── 04. AI Generation Scale ───────────────────────────────────────────── */

export const AiGenerationScaleEventSchema = z.object({
  kind: z.literal("scale.ai_generation"),
  id: z.string().optional(),
  value: z.number().int().min(0).max(4),
  labels: z.array(z.string()).length(5).optional(),
});
export type AiGenerationScaleEvent = z.infer<
  typeof AiGenerationScaleEventSchema
>;

/* ─── 05. Context Chips ─────────────────────────────────────────────────── */

export const ContextChipItemSchema = z.object({
  id: z.string(),
  label: z.string(),
  color: z.string(),
});
export type ContextChipItem = z.infer<typeof ContextChipItemSchema>;

export const ContextChipsEventSchema = z.object({
  kind: z.literal("chips.context"),
  items: z.array(ContextChipItemSchema),
});
export type ContextChipsEvent = z.infer<typeof ContextChipsEventSchema>;

/* ─── 06. QA Flow ───────────────────────────────────────────────────────── */

export const QAQuestionSchema = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("single"),
    id: z.string(),
    prompt: z.string(),
    options: z.array(z.string()),
  }),
  z.object({
    kind: z.literal("multi"),
    id: z.string(),
    prompt: z.string(),
    options: z.array(z.string()),
  }),
  z.object({
    kind: z.literal("text"),
    id: z.string(),
    prompt: z.string(),
    placeholder: z.string().optional(),
  }),
]);
export type QAQuestion = z.infer<typeof QAQuestionSchema>;

export const QAFlowEventSchema = z.object({
  kind: z.literal("qa.flow"),
  id: z.string().optional(),
  questions: z.array(QAQuestionSchema),
  submitLabel: z.string().optional(),
});
export type QAFlowEvent = z.infer<typeof QAFlowEventSchema>;

/* ─── 07. Writing Agent ─────────────────────────────────────────────────── */

export const WritingAgentEventSchema = z.object({
  kind: z.literal("agent.writing"),
  id: z.string().optional(),
  status: AgentStatusSchema,
  title: z.string(),
  target: z.string(),
  wordRange: z.string(),
  evidence: z.array(z.string()),
});
export type WritingAgentEvent = z.infer<typeof WritingAgentEventSchema>;

/* ─── 08. Research Agent ────────────────────────────────────────────────── */

export const ResearchAgentEventSchema = z.object({
  kind: z.literal("agent.research"),
  id: z.string().optional(),
  mode: z.enum(["create", "followup", "readurl"]),
  config: z.record(z.string(), z.string()),
});
export type ResearchAgentEvent = z.infer<typeof ResearchAgentEventSchema>;

/* ─── 09. Batch Queue ───────────────────────────────────────────────────── */

export const BatchQueueItemSchema = z.object({
  id: z.string(),
  label: z.string(),
  kind: z.string(), // semantic kind ("search" | "write" | "research" | ...), consumer maps to icon
});
export type BatchQueueItem = z.infer<typeof BatchQueueItemSchema>;

export const BatchQueueEventSchema = z.object({
  kind: z.literal("batch.queue"),
  id: z.string().optional(),
  items: z.array(BatchQueueItemSchema),
});
export type BatchQueueEvent = z.infer<typeof BatchQueueEventSchema>;

/* ─── 10. Search Result Card ────────────────────────────────────────────── */

export const SearchResultEventSchema = z.object({
  kind: z.literal("result.search"),
  id: z.string().optional(),
  rank: z.number().int(),
  title: z.string(),
  authors: z.string(),
  venue: z.string(),
  year: z.union([z.number(), z.string()]),
  snippet: z.string(),
  relevance: z.number().min(0).max(1),
  cites: z.number().optional(),
});
export type SearchResultEvent = z.infer<typeof SearchResultEventSchema>;

/* ─── 11. Approve / Reject ──────────────────────────────────────────────── */

export const ApproveRejectEventSchema = z.object({
  kind: z.literal("approval.binary"),
  id: z.string().optional(),
  label: z.string(),
  meta: z.string().optional(),
  accent: z.string().optional(),
  state: ApprovalStateSchema,
});
export type ApproveRejectEvent = z.infer<typeof ApproveRejectEventSchema>;

/* ─── The discriminated union ───────────────────────────────────────────── */

/**
 * Every HITL event an agent can emit. Use this schema to validate
 * streaming tool-call output from a framework adapter before handing
 * it to `<HitlEventRenderer />` for display.
 */
export const HitlEventSchema = z.discriminatedUnion("kind", [
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
]);

export type HitlEvent = z.infer<typeof HitlEventSchema>;

/**
 * Literal string union of every supported event kind. Handy for
 * typing registry objects and exhaustive switch statements.
 */
export type HitlEventKind = HitlEvent["kind"];

export const HITL_EVENT_KINDS = [
  "hitl.card",
  "subagent.status",
  "trace.mini",
  "scale.ai_generation",
  "chips.context",
  "qa.flow",
  "agent.writing",
  "agent.research",
  "batch.queue",
  "result.search",
  "approval.binary",
] as const satisfies readonly HitlEventKind[];
