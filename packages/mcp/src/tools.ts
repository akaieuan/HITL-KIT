import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
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
  type HitlEvent,
} from "@hitl-kit/core";

/**
 * Every HITL Kit tool exposed through the MCP server. Each tool
 * wraps the input side of a primitive event. The tool's JSON Schema
 * is derived from the core Zod schema (minus the `kind` discriminator,
 * which the tool adds). Calling a tool runs the Zod parse against
 * the input — malformed tool calls fail with a clear Zod error
 * before returning to the client.
 */

interface HitlTool {
  name: string;
  kind: HitlEvent["kind"];
  description: string;
  inputZod: z.ZodTypeAny;
  inputJsonSchema: ReturnType<typeof zodToJsonSchema>;
}

/** Strip `kind` from an event schema so tool input matches the payload shape. */
function payloadSchema<T extends z.ZodObject<{ kind: z.ZodLiteral<string> } & Record<string, z.ZodTypeAny>>>(
  schema: T,
): z.ZodTypeAny {
  const shape = schema.shape as Record<string, z.ZodTypeAny>;
  const rest = Object.fromEntries(
    Object.entries(shape).filter(([k]) => k !== "kind"),
  );
  return z.object(rest);
}

function defineTool(
  name: string,
  kind: HitlEvent["kind"],
  description: string,
  eventSchema: z.ZodObject<{ kind: z.ZodLiteral<string> } & Record<string, z.ZodTypeAny>>,
): HitlTool {
  const inputZod = payloadSchema(eventSchema);
  const inputJsonSchema = zodToJsonSchema(inputZod, {
    $refStrategy: "none",
    target: "jsonSchema7",
  });
  return { name, kind, description, inputZod, inputJsonSchema };
}

export const HITL_TOOLS: HitlTool[] = [
  defineTool(
    "hitl_interrupt_card",
    "hitl.card",
    "Surface an in-thread approval boundary for an agent action. Use for citations, quote verification, or any write step that needs explicit human approval before proceeding.",
    HitlCardEventSchema,
  ),
  defineTool(
    "hitl_subagent_status",
    "subagent.status",
    "Report the execution status of a subagent task to the human (one of: idle, running, completed, error, skipped, cancelled).",
    SubagentStatusEventSchema,
  ),
  defineTool(
    "hitl_mini_trace",
    "trace.mini",
    "Emit a collapsible thought/action/result reasoning trace so the human can inspect how the agent arrived at a result.",
    MiniTraceEventSchema,
  ),
  defineTool(
    "hitl_ai_generation_scale",
    "scale.ai_generation",
    "Surface an ordinal scale indicating how much AI involvement was used for a given output (0 = fully human, 4 = fully AI).",
    AiGenerationScaleEventSchema,
  ),
  defineTool(
    "hitl_context_chips",
    "chips.context",
    "Show the human the removable context items (notes, files, URLs) attached to this agent run.",
    ContextChipsEventSchema,
  ),
  defineTool(
    "hitl_qa_flow",
    "qa.flow",
    "Ask the human a multi-part question supporting single-choice, multi-select, and free-text follow-ups.",
    QAFlowEventSchema,
  ),
  defineTool(
    "hitl_writing_agent",
    "agent.writing",
    "Surface a draft-in-progress widget summarising what the writing agent is producing (title, target section, word range, evidence notes).",
    WritingAgentEventSchema,
  ),
  defineTool(
    "hitl_research_agent",
    "agent.research",
    "Surface a research-agent config panel so the human can inspect what search session is running (create / follow-up / read-URL).",
    ResearchAgentEventSchema,
  ),
  defineTool(
    "hitl_batch_queue",
    "batch.queue",
    "Present a batch of mixed agent actions to the human for sequential approve/reject.",
    BatchQueueEventSchema,
  ),
  defineTool(
    "hitl_search_result",
    "result.search",
    "Show the human a single ranked search result with metadata and relevance.",
    SearchResultEventSchema,
  ),
  defineTool(
    "hitl_approve_reject",
    "approval.binary",
    "Ask the human for a binary approve/reject decision on a specific item.",
    ApproveRejectEventSchema,
  ),
];

export const TOOL_BY_NAME: Record<string, HitlTool> = Object.fromEntries(
  HITL_TOOLS.map((t) => [t.name, t]),
);
