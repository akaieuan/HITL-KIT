import { tool } from "ai";
import { z } from "zod";
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

/**
 * Vercel AI SDK doesn't have native interrupts; instead, this adapter
 * shapes agent tool calls so they return a validated HitlEvent as the
 * tool result. The consumer renders the result via <HitlEventRenderer />
 * and submits the human's decision as a follow-up user message to
 * continue the conversation.
 *
 * Each helper returns a `Tool` object ready to drop into the `tools`
 * map passed to `generateText`, `streamText`, or `useChat`.
 *
 * The agent's `inputSchema` for each tool mirrors the HitlEvent shape
 * (minus the `kind` discriminator, which the adapter adds). The
 * `execute` function validates the input against the core Zod schema
 * and returns the fully-typed event.
 */

/* ─── Shared helpers ────────────────────────────────────────────────────── */

const CommonFields = {
  description: z.string().optional(),
};

/* ─── 01. Interrupt Card ────────────────────────────────────────────────── */

export interface HitlCardToolOptions {
  /** Description exposed to the model. Shape how the agent decides when to call this tool. */
  description?: string;
}

export function hitlCardTool(options: HitlCardToolOptions = {}) {
  return tool({
    description:
      options.description ??
      "Request human review of an in-progress action. Use for citations, quote verification, or any write step that should not proceed without explicit approval.",
    inputSchema: z.object({
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
    }),
    execute: async (input): Promise<HitlCardEvent> =>
      HitlCardEventSchema.parse({ kind: "hitl.card", ...input }),
  });
}

/* ─── 02. Subagent Status ───────────────────────────────────────────────── */

export function subagentStatusTool(options: { description?: string } = {}) {
  return tool({
    description:
      options.description ??
      "Report the execution status of a subagent task to the human.",
    inputSchema: z.object({
      status: z.enum([
        "idle",
        "running",
        "completed",
        "error",
        "skipped",
        "cancelled",
      ]),
      label: z.string(),
      detail: z.string().optional(),
    }),
    execute: async (input): Promise<SubagentStatusEvent> =>
      SubagentStatusEventSchema.parse({ kind: "subagent.status", ...input }),
  });
}

/* ─── 03. MiniTrace ─────────────────────────────────────────────────────── */

export function miniTraceTool(options: { description?: string } = {}) {
  return tool({
    description:
      options.description ??
      "Emit a collapsible thought/action/result trace so the human can inspect agent reasoning.",
    inputSchema: z.object({
      steps: z.array(
        z.object({
          type: z.enum(["thought", "action", "result"]),
          label: z.string(),
          detail: z.string().optional(),
        }),
      ),
    }),
    execute: async (input): Promise<MiniTraceEvent> =>
      MiniTraceEventSchema.parse({ kind: "trace.mini", ...input }),
  });
}

/* ─── 04. AI Generation Scale ───────────────────────────────────────────── */

export function aiGenerationScaleTool(options: { description?: string } = {}) {
  return tool({
    description:
      options.description ??
      "Surface an ordinal scale indicating how much AI involvement was used for a given output (0 = fully human, 4 = fully AI).",
    inputSchema: z.object({
      value: z.number().int().min(0).max(4),
      labels: z.array(z.string()).length(5).optional(),
    }),
    execute: async (input): Promise<AiGenerationScaleEvent> =>
      AiGenerationScaleEventSchema.parse({
        kind: "scale.ai_generation",
        ...input,
      }),
  });
}

/* ─── 05. Context Chips ─────────────────────────────────────────────────── */

export function contextChipsTool(options: { description?: string } = {}) {
  return tool({
    description:
      options.description ??
      "Show the human the removable context items attached to this agent run.",
    inputSchema: z.object({
      items: z.array(
        z.object({
          id: z.string(),
          label: z.string(),
          color: z.string(),
        }),
      ),
    }),
    execute: async (input): Promise<ContextChipsEvent> =>
      ContextChipsEventSchema.parse({ kind: "chips.context", ...input }),
  });
}

/* ─── 06. QA Flow ───────────────────────────────────────────────────────── */

export function qaFlowTool(options: { description?: string } = {}) {
  return tool({
    description:
      options.description ??
      "Ask the human a multi-part question. Supports single-choice, multi-select, and free-text follow-ups.",
    inputSchema: z.object({
      questions: z.array(
        z.discriminatedUnion("kind", [
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
        ]),
      ),
      submitLabel: z.string().optional(),
    }),
    execute: async (input): Promise<QAFlowEvent> =>
      QAFlowEventSchema.parse({ kind: "qa.flow", ...input }),
  });
}

/* ─── 07. Writing Agent ─────────────────────────────────────────────────── */

export function writingAgentTool(options: { description?: string } = {}) {
  return tool({
    description:
      options.description ??
      "Surface a draft-in-progress widget summarising what the writing agent is producing.",
    inputSchema: z.object({
      status: z.enum([
        "idle",
        "running",
        "completed",
        "error",
        "skipped",
        "cancelled",
      ]),
      title: z.string(),
      target: z.string(),
      wordRange: z.string(),
      evidence: z.array(z.string()),
    }),
    execute: async (input): Promise<WritingAgentEvent> =>
      WritingAgentEventSchema.parse({ kind: "agent.writing", ...input }),
  });
}

/* ─── 08. Research Agent ────────────────────────────────────────────────── */

export function researchAgentTool(options: { description?: string } = {}) {
  return tool({
    description:
      options.description ??
      "Surface a research-agent config panel so the human can inspect what search session is running.",
    inputSchema: z.object({
      mode: z.enum(["create", "followup", "readurl"]),
      config: z.record(z.string(), z.string()),
    }),
    execute: async (input): Promise<ResearchAgentEvent> =>
      ResearchAgentEventSchema.parse({ kind: "agent.research", ...input }),
  });
}

/* ─── 09. Batch Queue ───────────────────────────────────────────────────── */

export function batchQueueTool(options: { description?: string } = {}) {
  return tool({
    description:
      options.description ??
      "Present a batch of mixed agent actions to the human for sequential approve/reject.",
    inputSchema: z.object({
      items: z.array(
        z.object({
          id: z.string(),
          label: z.string(),
          kind: z.string(),
        }),
      ),
    }),
    execute: async (input): Promise<BatchQueueEvent> =>
      BatchQueueEventSchema.parse({ kind: "batch.queue", ...input }),
  });
}

/* ─── 10. Search Result Card ────────────────────────────────────────────── */

export function searchResultTool(options: { description?: string } = {}) {
  return tool({
    description:
      options.description ??
      "Show the human a single ranked search result with metadata and relevance.",
    inputSchema: z.object({
      rank: z.number().int(),
      title: z.string(),
      authors: z.string(),
      venue: z.string(),
      year: z.union([z.number(), z.string()]),
      snippet: z.string(),
      relevance: z.number().min(0).max(1),
      cites: z.number().optional(),
    }),
    execute: async (input): Promise<SearchResultEvent> =>
      SearchResultEventSchema.parse({ kind: "result.search", ...input }),
  });
}

/* ─── 11. Approve / Reject Row ──────────────────────────────────────────── */

export function approveRejectTool(options: { description?: string } = {}) {
  return tool({
    description:
      options.description ??
      "Ask the human for a binary approve/reject decision on a specific item.",
    inputSchema: z.object({
      label: z.string(),
      meta: z.string().optional(),
      accent: z.string().optional(),
      state: z.enum(["pending", "approved", "rejected"]),
    }),
    execute: async (input): Promise<ApproveRejectEvent> =>
      ApproveRejectEventSchema.parse({ kind: "approval.binary", ...input }),
  });
}

/* ─── 12. Diff Result ───────────────────────────────────────────────────── */

export function diffResultTool(options: { description?: string } = {}) {
  return tool({
    description:
      options.description ??
      "Show the human a proposed before/after diff for a text or code edit. Use whenever the agent wants to apply an in-place edit and the human should accept or reject before it lands.",
    inputSchema: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      language: z.string().optional(),
      hunks: z
        .array(
          z.object({
            before: z.string(),
            after: z.string(),
            startLine: z.number().int().optional(),
          }),
        )
        .min(1),
      acceptLabel: z.string().optional(),
      rejectLabel: z.string().optional(),
    }),
    execute: async (input): Promise<DiffResultEvent> =>
      DiffResultEventSchema.parse({ kind: "result.diff", ...input }),
  });
}

/* ─── 13. Citation Result ───────────────────────────────────────────────── */

export function citationResultTool(options: { description?: string } = {}) {
  return tool({
    description:
      options.description ??
      "Surface a single source-backed citation for a claim the agent is making. Use when the agent wants the human to verify the source supports the claim.",
    inputSchema: z.object({
      claim: z.string(),
      source: z.object({
        title: z.string(),
        authors: z.string(),
        year: z.union([z.number(), z.string()]),
        venue: z.string().optional(),
        url: z.string().url().optional(),
        quote: z.string().optional(),
        pages: z.string().optional(),
      }),
      confidence: z.number().min(0).max(1).optional(),
    }),
    execute: async (input): Promise<CitationResultEvent> =>
      CitationResultEventSchema.parse({ kind: "result.citation", ...input }),
  });
}

/* ─── 14. Editable Plan ─────────────────────────────────────────────────── */

export function editablePlanTool(options: { description?: string } = {}) {
  return tool({
    description:
      options.description ??
      "Surface a multi-step plan the human can edit, reorder, or delete steps from before the agent executes. Steps marked locked cannot be removed.",
    inputSchema: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      steps: z
        .array(
          z.object({
            id: z.string(),
            label: z.string(),
            detail: z.string().optional(),
            locked: z.boolean().optional(),
          }),
        )
        .min(1),
      submitLabel: z.string().optional(),
    }),
    execute: async (input): Promise<EditablePlanEvent> =>
      EditablePlanEventSchema.parse({ kind: "plan.editable", ...input }),
  });
}

/* ─── 15. Tool Call Preview ─────────────────────────────────────────────── */

export function toolCallPreviewTool(options: { description?: string } = {}) {
  return tool({
    description:
      options.description ??
      "Preview a tool call (name, args, optional rationale and signals) so the human can approve or reject before execution. Use for destructive or high-stakes tool calls.",
    inputSchema: z.object({
      toolName: z.string(),
      rationale: z.string().optional(),
      args: z.record(z.string(), z.unknown()),
      signals: z
        .object({
          confidence: z.number().min(0).max(1).optional(),
          costUsd: z.number().min(0).optional(),
          scope: z.array(z.string()).optional(),
        })
        .optional(),
      approveLabel: z.string().optional(),
      rejectLabel: z.string().optional(),
    }),
    execute: async (input): Promise<ToolCallPreviewEvent> =>
      ToolCallPreviewEventSchema.parse({ kind: "tool.call", ...input }),
  });
}

/**
 * Convenience bundle containing every HITL Kit tool. Spread into
 * `tools` when you want the full set available to the agent. Narrow
 * to only what you need for production.
 */
export const allHitlTools = {
  requestHumanReview: hitlCardTool(),
  reportSubagentStatus: subagentStatusTool(),
  showTrace: miniTraceTool(),
  showAiGenerationScale: aiGenerationScaleTool(),
  showContextChips: contextChipsTool(),
  askHumanQuestions: qaFlowTool(),
  showWritingAgent: writingAgentTool(),
  showResearchAgent: researchAgentTool(),
  presentBatchDecisions: batchQueueTool(),
  showSearchResult: searchResultTool(),
  requestApproval: approveRejectTool(),
  showDiff: diffResultTool(),
  showCitation: citationResultTool(),
  showEditablePlan: editablePlanTool(),
  previewToolCall: toolCallPreviewTool(),
};

// Suppress unused-export linting for the shared helper pattern.
export { CommonFields as _CommonFields };
