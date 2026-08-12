// AUTO-GENERATED public type surface for @hitl-kit/core.
// Regenerate with `pnpm api:check`. Do not edit by hand.
// A diff here means the published type API changed — review it on purpose.

import { z } from 'zod';
export { z } from 'zod';

/**
 * Shared enums and building blocks reused across primitive events.
 */
/**
 * URL string that is guaranteed to be HTTP(S). Plain `z.string().url()`
 * accepts `javascript:` and `data:` URIs (because Node's URL constructor
 * parses them) — a malicious agent emitting one would let
 * `<a href={url}>` execute script when clicked. This refinement rejects
 * anything other than `http://` or `https://`.
 */
declare const SafeUrlSchema: z.ZodEffects<z.ZodString, string, string>;
declare const AgentStatusSchema: z.ZodEnum<["idle", "running", "completed", "error", "skipped", "cancelled"]>;
type AgentStatus = z.infer<typeof AgentStatusSchema>;
/**
 * The outcome of a human decision.
 *
 * `abstained` is deliberately distinct from `rejected`. "I cannot determine
 * this" is not "no" — it is a reviewer declining to convert an unresolved
 * question into an authorization, and it is the honest answer whenever the
 * evidence does not support either call. Collapsing it into `rejected` throws
 * away the one signal that says the standard itself was unclear, and makes a
 * queue of ambiguous cases look like a queue of denials.
 *
 * Consumers that exhaustively switch on this union will need a branch for it;
 * that is intentional, and the reason this is a minor rather than a patch.
 */
declare const ApprovalStateSchema: z.ZodEnum<["pending", "approved", "rejected", "abstained"]>;
type ApprovalState = z.infer<typeof ApprovalStateSchema>;
/**
 * States that authorize the gated action to proceed.
 *
 * Exported so callers never hand-roll `state === "approved"` and silently
 * disagree about whether an abstention permits action. It does not.
 */
declare const AUTHORIZING_STATES: readonly ApprovalState[];
/** True only when the human's decision permits the gated action. */
declare function isAuthorized(state: ApprovalState): boolean;
declare const HitlCardEventSchema: z.ZodObject<{
    kind: z.ZodLiteral<"hitl.card">;
    id: z.ZodOptional<z.ZodString>;
    variant: z.ZodEnum<["search", "review", "write"]>;
    title: z.ZodString;
    subtitle: z.ZodString;
    steps: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        done: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        label: string;
        done: boolean;
    }, {
        label: string;
        done: boolean;
    }>, "many">;
    runLabel: z.ZodString;
    editPlaceholder: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    kind: "hitl.card";
    variant: "search" | "review" | "write";
    title: string;
    subtitle: string;
    steps: {
        label: string;
        done: boolean;
    }[];
    runLabel: string;
    id?: string | undefined;
    editPlaceholder?: string | undefined;
}, {
    kind: "hitl.card";
    variant: "search" | "review" | "write";
    title: string;
    subtitle: string;
    steps: {
        label: string;
        done: boolean;
    }[];
    runLabel: string;
    id?: string | undefined;
    editPlaceholder?: string | undefined;
}>;
type HitlCardEvent = z.infer<typeof HitlCardEventSchema>;
declare const SubagentStatusEventSchema: z.ZodObject<{
    kind: z.ZodLiteral<"subagent.status">;
    id: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<["idle", "running", "completed", "error", "skipped", "cancelled"]>;
    label: z.ZodString;
    detail: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "idle" | "running" | "completed" | "error" | "skipped" | "cancelled";
    kind: "subagent.status";
    label: string;
    id?: string | undefined;
    detail?: string | undefined;
}, {
    status: "idle" | "running" | "completed" | "error" | "skipped" | "cancelled";
    kind: "subagent.status";
    label: string;
    id?: string | undefined;
    detail?: string | undefined;
}>;
type SubagentStatusEvent = z.infer<typeof SubagentStatusEventSchema>;
declare const TraceStepSchema: z.ZodObject<{
    type: z.ZodEnum<["thought", "action", "result"]>;
    label: z.ZodString;
    detail: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "thought" | "action" | "result";
    label: string;
    detail?: string | undefined;
}, {
    type: "thought" | "action" | "result";
    label: string;
    detail?: string | undefined;
}>;
type TraceStep = z.infer<typeof TraceStepSchema>;
declare const MiniTraceEventSchema: z.ZodObject<{
    kind: z.ZodLiteral<"trace.mini">;
    id: z.ZodOptional<z.ZodString>;
    steps: z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["thought", "action", "result"]>;
        label: z.ZodString;
        detail: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "thought" | "action" | "result";
        label: string;
        detail?: string | undefined;
    }, {
        type: "thought" | "action" | "result";
        label: string;
        detail?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    kind: "trace.mini";
    steps: {
        type: "thought" | "action" | "result";
        label: string;
        detail?: string | undefined;
    }[];
    id?: string | undefined;
}, {
    kind: "trace.mini";
    steps: {
        type: "thought" | "action" | "result";
        label: string;
        detail?: string | undefined;
    }[];
    id?: string | undefined;
}>;
type MiniTraceEvent = z.infer<typeof MiniTraceEventSchema>;
declare const AiGenerationScaleEventSchema: z.ZodObject<{
    kind: z.ZodLiteral<"scale.ai_generation">;
    id: z.ZodOptional<z.ZodString>;
    value: z.ZodNumber;
    labels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    value: number;
    kind: "scale.ai_generation";
    id?: string | undefined;
    labels?: string[] | undefined;
}, {
    value: number;
    kind: "scale.ai_generation";
    id?: string | undefined;
    labels?: string[] | undefined;
}>;
type AiGenerationScaleEvent = z.infer<typeof AiGenerationScaleEventSchema>;
declare const ContextChipItemSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    color: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    label: string;
    color: string;
}, {
    id: string;
    label: string;
    color: string;
}>;
type ContextChipItem = z.infer<typeof ContextChipItemSchema>;
declare const ContextChipsEventSchema: z.ZodObject<{
    kind: z.ZodLiteral<"chips.context">;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        color: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        label: string;
        color: string;
    }, {
        id: string;
        label: string;
        color: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    kind: "chips.context";
    items: {
        id: string;
        label: string;
        color: string;
    }[];
}, {
    kind: "chips.context";
    items: {
        id: string;
        label: string;
        color: string;
    }[];
}>;
type ContextChipsEvent = z.infer<typeof ContextChipsEventSchema>;
declare const QAQuestionSchema: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
    kind: z.ZodLiteral<"single">;
    id: z.ZodString;
    prompt: z.ZodString;
    options: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    options: string[];
    kind: "single";
    id: string;
    prompt: string;
}, {
    options: string[];
    kind: "single";
    id: string;
    prompt: string;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"multi">;
    id: z.ZodString;
    prompt: z.ZodString;
    options: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    options: string[];
    kind: "multi";
    id: string;
    prompt: string;
}, {
    options: string[];
    kind: "multi";
    id: string;
    prompt: string;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"text">;
    id: z.ZodString;
    prompt: z.ZodString;
    placeholder: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    kind: "text";
    id: string;
    prompt: string;
    placeholder?: string | undefined;
}, {
    kind: "text";
    id: string;
    prompt: string;
    placeholder?: string | undefined;
}>]>;
type QAQuestion = z.infer<typeof QAQuestionSchema>;
declare const QAFlowEventSchema: z.ZodObject<{
    kind: z.ZodLiteral<"qa.flow">;
    id: z.ZodOptional<z.ZodString>;
    questions: z.ZodArray<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"single">;
        id: z.ZodString;
        prompt: z.ZodString;
        options: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        options: string[];
        kind: "single";
        id: string;
        prompt: string;
    }, {
        options: string[];
        kind: "single";
        id: string;
        prompt: string;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"multi">;
        id: z.ZodString;
        prompt: z.ZodString;
        options: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        options: string[];
        kind: "multi";
        id: string;
        prompt: string;
    }, {
        options: string[];
        kind: "multi";
        id: string;
        prompt: string;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"text">;
        id: z.ZodString;
        prompt: z.ZodString;
        placeholder: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        kind: "text";
        id: string;
        prompt: string;
        placeholder?: string | undefined;
    }, {
        kind: "text";
        id: string;
        prompt: string;
        placeholder?: string | undefined;
    }>]>, "many">;
    submitLabel: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    kind: "qa.flow";
    questions: ({
        options: string[];
        kind: "single";
        id: string;
        prompt: string;
    } | {
        options: string[];
        kind: "multi";
        id: string;
        prompt: string;
    } | {
        kind: "text";
        id: string;
        prompt: string;
        placeholder?: string | undefined;
    })[];
    id?: string | undefined;
    submitLabel?: string | undefined;
}, {
    kind: "qa.flow";
    questions: ({
        options: string[];
        kind: "single";
        id: string;
        prompt: string;
    } | {
        options: string[];
        kind: "multi";
        id: string;
        prompt: string;
    } | {
        kind: "text";
        id: string;
        prompt: string;
        placeholder?: string | undefined;
    })[];
    id?: string | undefined;
    submitLabel?: string | undefined;
}>;
type QAFlowEvent = z.infer<typeof QAFlowEventSchema>;
declare const WritingAgentEventSchema: z.ZodObject<{
    kind: z.ZodLiteral<"agent.writing">;
    id: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<["idle", "running", "completed", "error", "skipped", "cancelled"]>;
    title: z.ZodString;
    target: z.ZodString;
    wordRange: z.ZodString;
    evidence: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    status: "idle" | "running" | "completed" | "error" | "skipped" | "cancelled";
    kind: "agent.writing";
    title: string;
    target: string;
    wordRange: string;
    evidence: string[];
    id?: string | undefined;
}, {
    status: "idle" | "running" | "completed" | "error" | "skipped" | "cancelled";
    kind: "agent.writing";
    title: string;
    target: string;
    wordRange: string;
    evidence: string[];
    id?: string | undefined;
}>;
type WritingAgentEvent = z.infer<typeof WritingAgentEventSchema>;
declare const ResearchAgentEventSchema: z.ZodObject<{
    kind: z.ZodLiteral<"agent.research">;
    id: z.ZodOptional<z.ZodString>;
    mode: z.ZodEnum<["create", "followup", "readurl"]>;
    config: z.ZodEffects<z.ZodRecord<z.ZodString, z.ZodString>, Record<string, string>, Record<string, string>>;
}, "strip", z.ZodTypeAny, {
    kind: "agent.research";
    mode: "create" | "followup" | "readurl";
    config: Record<string, string>;
    id?: string | undefined;
}, {
    kind: "agent.research";
    mode: "create" | "followup" | "readurl";
    config: Record<string, string>;
    id?: string | undefined;
}>;
type ResearchAgentEvent = z.infer<typeof ResearchAgentEventSchema>;
declare const BatchQueueItemSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    kind: z.ZodString;
}, "strip", z.ZodTypeAny, {
    kind: string;
    id: string;
    label: string;
}, {
    kind: string;
    id: string;
    label: string;
}>;
type BatchQueueItem = z.infer<typeof BatchQueueItemSchema>;
declare const BatchQueueEventSchema: z.ZodObject<{
    kind: z.ZodLiteral<"batch.queue">;
    id: z.ZodOptional<z.ZodString>;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        kind: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: string;
        id: string;
        label: string;
    }, {
        kind: string;
        id: string;
        label: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    kind: "batch.queue";
    items: {
        kind: string;
        id: string;
        label: string;
    }[];
    id?: string | undefined;
}, {
    kind: "batch.queue";
    items: {
        kind: string;
        id: string;
        label: string;
    }[];
    id?: string | undefined;
}>;
type BatchQueueEvent = z.infer<typeof BatchQueueEventSchema>;
declare const SearchResultEventSchema: z.ZodObject<{
    kind: z.ZodLiteral<"result.search">;
    id: z.ZodOptional<z.ZodString>;
    rank: z.ZodNumber;
    title: z.ZodString;
    authors: z.ZodString;
    venue: z.ZodString;
    year: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
    snippet: z.ZodString;
    relevance: z.ZodNumber;
    cites: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    kind: "result.search";
    title: string;
    rank: number;
    authors: string;
    venue: string;
    year: string | number;
    snippet: string;
    relevance: number;
    id?: string | undefined;
    cites?: number | undefined;
}, {
    kind: "result.search";
    title: string;
    rank: number;
    authors: string;
    venue: string;
    year: string | number;
    snippet: string;
    relevance: number;
    id?: string | undefined;
    cites?: number | undefined;
}>;
type SearchResultEvent = z.infer<typeof SearchResultEventSchema>;
declare const ApproveRejectEventSchema: z.ZodObject<{
    kind: z.ZodLiteral<"approval.binary">;
    id: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    meta: z.ZodOptional<z.ZodString>;
    accent: z.ZodOptional<z.ZodString>;
    state: z.ZodEnum<["pending", "approved", "rejected", "abstained"]>;
}, "strip", z.ZodTypeAny, {
    kind: "approval.binary";
    label: string;
    state: "pending" | "approved" | "rejected" | "abstained";
    id?: string | undefined;
    meta?: string | undefined;
    accent?: string | undefined;
}, {
    kind: "approval.binary";
    label: string;
    state: "pending" | "approved" | "rejected" | "abstained";
    id?: string | undefined;
    meta?: string | undefined;
    accent?: string | undefined;
}>;
type ApproveRejectEvent = z.infer<typeof ApproveRejectEventSchema>;
declare const DiffHunkSchema: z.ZodObject<{
    before: z.ZodString;
    after: z.ZodString;
    startLine: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    before: string;
    after: string;
    startLine?: number | undefined;
}, {
    before: string;
    after: string;
    startLine?: number | undefined;
}>;
type DiffHunk = z.infer<typeof DiffHunkSchema>;
declare const DiffResultEventSchema: z.ZodObject<{
    kind: z.ZodLiteral<"result.diff">;
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    subtitle: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    hunks: z.ZodArray<z.ZodObject<{
        before: z.ZodString;
        after: z.ZodString;
        startLine: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        before: string;
        after: string;
        startLine?: number | undefined;
    }, {
        before: string;
        after: string;
        startLine?: number | undefined;
    }>, "many">;
    acceptLabel: z.ZodOptional<z.ZodString>;
    rejectLabel: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    kind: "result.diff";
    title: string;
    hunks: {
        before: string;
        after: string;
        startLine?: number | undefined;
    }[];
    id?: string | undefined;
    subtitle?: string | undefined;
    language?: string | undefined;
    acceptLabel?: string | undefined;
    rejectLabel?: string | undefined;
}, {
    kind: "result.diff";
    title: string;
    hunks: {
        before: string;
        after: string;
        startLine?: number | undefined;
    }[];
    id?: string | undefined;
    subtitle?: string | undefined;
    language?: string | undefined;
    acceptLabel?: string | undefined;
    rejectLabel?: string | undefined;
}>;
type DiffResultEvent = z.infer<typeof DiffResultEventSchema>;
declare const CitationSourceSchema: z.ZodObject<{
    title: z.ZodString;
    authors: z.ZodString;
    year: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
    venue: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    quote: z.ZodOptional<z.ZodString>;
    pages: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    authors: string;
    year: string | number;
    url?: string | undefined;
    venue?: string | undefined;
    quote?: string | undefined;
    pages?: string | undefined;
}, {
    title: string;
    authors: string;
    year: string | number;
    url?: string | undefined;
    venue?: string | undefined;
    quote?: string | undefined;
    pages?: string | undefined;
}>;
type CitationSource = z.infer<typeof CitationSourceSchema>;
declare const CitationResultEventSchema: z.ZodObject<{
    kind: z.ZodLiteral<"result.citation">;
    id: z.ZodOptional<z.ZodString>;
    claim: z.ZodString;
    source: z.ZodObject<{
        title: z.ZodString;
        authors: z.ZodString;
        year: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
        venue: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        quote: z.ZodOptional<z.ZodString>;
        pages: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        authors: string;
        year: string | number;
        url?: string | undefined;
        venue?: string | undefined;
        quote?: string | undefined;
        pages?: string | undefined;
    }, {
        title: string;
        authors: string;
        year: string | number;
        url?: string | undefined;
        venue?: string | undefined;
        quote?: string | undefined;
        pages?: string | undefined;
    }>;
    confidence: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    kind: "result.citation";
    claim: string;
    source: {
        title: string;
        authors: string;
        year: string | number;
        url?: string | undefined;
        venue?: string | undefined;
        quote?: string | undefined;
        pages?: string | undefined;
    };
    id?: string | undefined;
    confidence?: number | undefined;
}, {
    kind: "result.citation";
    claim: string;
    source: {
        title: string;
        authors: string;
        year: string | number;
        url?: string | undefined;
        venue?: string | undefined;
        quote?: string | undefined;
        pages?: string | undefined;
    };
    id?: string | undefined;
    confidence?: number | undefined;
}>;
type CitationResultEvent = z.infer<typeof CitationResultEventSchema>;
declare const PlanStepSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    detail: z.ZodOptional<z.ZodString>;
    locked: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id: string;
    label: string;
    detail?: string | undefined;
    locked?: boolean | undefined;
}, {
    id: string;
    label: string;
    detail?: string | undefined;
    locked?: boolean | undefined;
}>;
type PlanStep = z.infer<typeof PlanStepSchema>;
declare const EditablePlanEventSchema: z.ZodObject<{
    kind: z.ZodLiteral<"plan.editable">;
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    subtitle: z.ZodOptional<z.ZodString>;
    steps: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        detail: z.ZodOptional<z.ZodString>;
        locked: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        label: string;
        detail?: string | undefined;
        locked?: boolean | undefined;
    }, {
        id: string;
        label: string;
        detail?: string | undefined;
        locked?: boolean | undefined;
    }>, "many">;
    submitLabel: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    kind: "plan.editable";
    title: string;
    steps: {
        id: string;
        label: string;
        detail?: string | undefined;
        locked?: boolean | undefined;
    }[];
    id?: string | undefined;
    subtitle?: string | undefined;
    submitLabel?: string | undefined;
}, {
    kind: "plan.editable";
    title: string;
    steps: {
        id: string;
        label: string;
        detail?: string | undefined;
        locked?: boolean | undefined;
    }[];
    id?: string | undefined;
    subtitle?: string | undefined;
    submitLabel?: string | undefined;
}>;
type EditablePlanEvent = z.infer<typeof EditablePlanEventSchema>;
declare const ToolCallSignalsSchema: z.ZodObject<{
    confidence: z.ZodOptional<z.ZodNumber>;
    costUsd: z.ZodOptional<z.ZodNumber>;
    scope: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    confidence?: number | undefined;
    costUsd?: number | undefined;
    scope?: string[] | undefined;
}, {
    confidence?: number | undefined;
    costUsd?: number | undefined;
    scope?: string[] | undefined;
}>;
type ToolCallSignals = z.infer<typeof ToolCallSignalsSchema>;
declare const ToolCallPreviewEventSchema: z.ZodObject<{
    kind: z.ZodLiteral<"tool.call">;
    id: z.ZodOptional<z.ZodString>;
    toolName: z.ZodString;
    rationale: z.ZodOptional<z.ZodString>;
    args: z.ZodEffects<z.ZodRecord<z.ZodString, z.ZodUnknown>, Record<string, unknown>, Record<string, unknown>>;
    signals: z.ZodOptional<z.ZodObject<{
        confidence: z.ZodOptional<z.ZodNumber>;
        costUsd: z.ZodOptional<z.ZodNumber>;
        scope: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        confidence?: number | undefined;
        costUsd?: number | undefined;
        scope?: string[] | undefined;
    }, {
        confidence?: number | undefined;
        costUsd?: number | undefined;
        scope?: string[] | undefined;
    }>>;
    approveLabel: z.ZodOptional<z.ZodString>;
    rejectLabel: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    kind: "tool.call";
    toolName: string;
    args: Record<string, unknown>;
    id?: string | undefined;
    rejectLabel?: string | undefined;
    rationale?: string | undefined;
    signals?: {
        confidence?: number | undefined;
        costUsd?: number | undefined;
        scope?: string[] | undefined;
    } | undefined;
    approveLabel?: string | undefined;
}, {
    kind: "tool.call";
    toolName: string;
    args: Record<string, unknown>;
    id?: string | undefined;
    rejectLabel?: string | undefined;
    rationale?: string | undefined;
    signals?: {
        confidence?: number | undefined;
        costUsd?: number | undefined;
        scope?: string[] | undefined;
    } | undefined;
    approveLabel?: string | undefined;
}>;
type ToolCallPreviewEvent = z.infer<typeof ToolCallPreviewEventSchema>;
/**
 * WHERE a claim is grounded, not merely THAT it is.
 *
 * A gate is only affordable when the checkable half of the standard has
 * already been checked. If the evidence is "this 40-page document", the
 * reviewer can only trust the agent or re-derive the answer themselves, and
 * both are failures of the gate: the first is a rubber stamp, the second
 * means the automation saved nothing. A pointer has to LOCATE the disputed
 * thing.
 *
 * Locators are a discriminated union rather than a loose {start, end} because
 * the units differ per modality and silently mixing them is how a highlight
 * lands on the wrong sentence. Ranges are half-open [start, end), matching
 * tag-kit's scope convention so the two families agree.
 */
declare const EvidenceLocatorSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"span">;
    start: z.ZodNumber;
    end: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "span";
    start: number;
    end: number;
}, {
    type: "span";
    start: number;
    end: number;
}>, z.ZodObject<{
    type: z.ZodLiteral<"bbox">;
    x: z.ZodNumber;
    y: z.ZodNumber;
    width: z.ZodNumber;
    height: z.ZodNumber;
    page: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "bbox";
    x: number;
    y: number;
    width: number;
    height: number;
    page?: number | undefined;
}, {
    type: "bbox";
    x: number;
    y: number;
    width: number;
    height: number;
    page?: number | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"segment">;
    startSec: z.ZodNumber;
    endSec: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "segment";
    startSec: number;
    endSec: number;
}, {
    type: "segment";
    startSec: number;
    endSec: number;
}>, z.ZodObject<{
    type: z.ZodLiteral<"whole">;
}, "strip", z.ZodTypeAny, {
    type: "whole";
}, {
    type: "whole";
}>]>;
type EvidenceLocator = z.infer<typeof EvidenceLocatorSchema>;
declare const EvidenceItemSchema: z.ZodObject<{
    /** Stable id for the source this points into (document, asset, message). */
    sourceId: z.ZodString;
    /** Human-readable source name, shown when the pointer is rendered. */
    sourceLabel: z.ZodString;
    locator: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"span">;
        start: z.ZodNumber;
        end: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "span";
        start: number;
        end: number;
    }, {
        type: "span";
        start: number;
        end: number;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"bbox">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        page: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "bbox";
        x: number;
        y: number;
        width: number;
        height: number;
        page?: number | undefined;
    }, {
        type: "bbox";
        x: number;
        y: number;
        width: number;
        height: number;
        page?: number | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"segment">;
        startSec: z.ZodNumber;
        endSec: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "segment";
        startSec: number;
        endSec: number;
    }, {
        type: "segment";
        startSec: number;
        endSec: number;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"whole">;
    }, "strip", z.ZodTypeAny, {
        type: "whole";
    }, {
        type: "whole";
    }>]>;
    /** The quoted or described excerpt the locator resolves to. */
    excerpt: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    sourceId: string;
    sourceLabel: string;
    locator: {
        type: "span";
        start: number;
        end: number;
    } | {
        type: "bbox";
        x: number;
        y: number;
        width: number;
        height: number;
        page?: number | undefined;
    } | {
        type: "segment";
        startSec: number;
        endSec: number;
    } | {
        type: "whole";
    };
    url?: string | undefined;
    excerpt?: string | undefined;
}, {
    sourceId: string;
    sourceLabel: string;
    locator: {
        type: "span";
        start: number;
        end: number;
    } | {
        type: "bbox";
        x: number;
        y: number;
        width: number;
        height: number;
        page?: number | undefined;
    } | {
        type: "segment";
        startSec: number;
        endSec: number;
    } | {
        type: "whole";
    };
    url?: string | undefined;
    excerpt?: string | undefined;
}>;
type EvidenceItem = z.infer<typeof EvidenceItemSchema>;
declare const EvidencePointerEventSchema: z.ZodObject<{
    kind: z.ZodLiteral<"evidence.pointer">;
    id: z.ZodOptional<z.ZodString>;
    /** The claim these pointers support or dispute. */
    claim: z.ZodString;
    items: z.ZodArray<z.ZodObject<{
        /** Stable id for the source this points into (document, asset, message). */
        sourceId: z.ZodString;
        /** Human-readable source name, shown when the pointer is rendered. */
        sourceLabel: z.ZodString;
        locator: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"span">;
            start: z.ZodNumber;
            end: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "span";
            start: number;
            end: number;
        }, {
            type: "span";
            start: number;
            end: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"bbox">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            page: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "bbox";
            x: number;
            y: number;
            width: number;
            height: number;
            page?: number | undefined;
        }, {
            type: "bbox";
            x: number;
            y: number;
            width: number;
            height: number;
            page?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"segment">;
            startSec: z.ZodNumber;
            endSec: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "segment";
            startSec: number;
            endSec: number;
        }, {
            type: "segment";
            startSec: number;
            endSec: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"whole">;
        }, "strip", z.ZodTypeAny, {
            type: "whole";
        }, {
            type: "whole";
        }>]>;
        /** The quoted or described excerpt the locator resolves to. */
        excerpt: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        sourceId: string;
        sourceLabel: string;
        locator: {
            type: "span";
            start: number;
            end: number;
        } | {
            type: "bbox";
            x: number;
            y: number;
            width: number;
            height: number;
            page?: number | undefined;
        } | {
            type: "segment";
            startSec: number;
            endSec: number;
        } | {
            type: "whole";
        };
        url?: string | undefined;
        excerpt?: string | undefined;
    }, {
        sourceId: string;
        sourceLabel: string;
        locator: {
            type: "span";
            start: number;
            end: number;
        } | {
            type: "bbox";
            x: number;
            y: number;
            width: number;
            height: number;
            page?: number | undefined;
        } | {
            type: "segment";
            startSec: number;
            endSec: number;
        } | {
            type: "whole";
        };
        url?: string | undefined;
        excerpt?: string | undefined;
    }>, "many">;
    /**
     * Sources the agent consulted but drew nothing from. Recording this is the
     * difference between "no evidence against" and "not looked for" — absence
     * has to be visible or the reviewer reads silence as safety.
     */
    notAssessed: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    kind: "evidence.pointer";
    items: {
        sourceId: string;
        sourceLabel: string;
        locator: {
            type: "span";
            start: number;
            end: number;
        } | {
            type: "bbox";
            x: number;
            y: number;
            width: number;
            height: number;
            page?: number | undefined;
        } | {
            type: "segment";
            startSec: number;
            endSec: number;
        } | {
            type: "whole";
        };
        url?: string | undefined;
        excerpt?: string | undefined;
    }[];
    claim: string;
    notAssessed: string[];
    id?: string | undefined;
}, {
    kind: "evidence.pointer";
    items: {
        sourceId: string;
        sourceLabel: string;
        locator: {
            type: "span";
            start: number;
            end: number;
        } | {
            type: "bbox";
            x: number;
            y: number;
            width: number;
            height: number;
            page?: number | undefined;
        } | {
            type: "segment";
            startSec: number;
            endSec: number;
        } | {
            type: "whole";
        };
        url?: string | undefined;
        excerpt?: string | undefined;
    }[];
    claim: string;
    id?: string | undefined;
    notAssessed?: string[] | undefined;
}>;
type EvidencePointerEvent = z.infer<typeof EvidencePointerEventSchema>;
/**
 * Every HITL event an agent can emit. Use this schema to validate
 * streaming tool-call output from a framework adapter before handing
 * it to `<HitlEventRenderer />` for display.
 */
declare const HitlEventSchema: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
    kind: z.ZodLiteral<"hitl.card">;
    id: z.ZodOptional<z.ZodString>;
    variant: z.ZodEnum<["search", "review", "write"]>;
    title: z.ZodString;
    subtitle: z.ZodString;
    steps: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        done: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        label: string;
        done: boolean;
    }, {
        label: string;
        done: boolean;
    }>, "many">;
    runLabel: z.ZodString;
    editPlaceholder: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    kind: "hitl.card";
    variant: "search" | "review" | "write";
    title: string;
    subtitle: string;
    steps: {
        label: string;
        done: boolean;
    }[];
    runLabel: string;
    id?: string | undefined;
    editPlaceholder?: string | undefined;
}, {
    kind: "hitl.card";
    variant: "search" | "review" | "write";
    title: string;
    subtitle: string;
    steps: {
        label: string;
        done: boolean;
    }[];
    runLabel: string;
    id?: string | undefined;
    editPlaceholder?: string | undefined;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"subagent.status">;
    id: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<["idle", "running", "completed", "error", "skipped", "cancelled"]>;
    label: z.ZodString;
    detail: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "idle" | "running" | "completed" | "error" | "skipped" | "cancelled";
    kind: "subagent.status";
    label: string;
    id?: string | undefined;
    detail?: string | undefined;
}, {
    status: "idle" | "running" | "completed" | "error" | "skipped" | "cancelled";
    kind: "subagent.status";
    label: string;
    id?: string | undefined;
    detail?: string | undefined;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"trace.mini">;
    id: z.ZodOptional<z.ZodString>;
    steps: z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["thought", "action", "result"]>;
        label: z.ZodString;
        detail: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "thought" | "action" | "result";
        label: string;
        detail?: string | undefined;
    }, {
        type: "thought" | "action" | "result";
        label: string;
        detail?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    kind: "trace.mini";
    steps: {
        type: "thought" | "action" | "result";
        label: string;
        detail?: string | undefined;
    }[];
    id?: string | undefined;
}, {
    kind: "trace.mini";
    steps: {
        type: "thought" | "action" | "result";
        label: string;
        detail?: string | undefined;
    }[];
    id?: string | undefined;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"scale.ai_generation">;
    id: z.ZodOptional<z.ZodString>;
    value: z.ZodNumber;
    labels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    value: number;
    kind: "scale.ai_generation";
    id?: string | undefined;
    labels?: string[] | undefined;
}, {
    value: number;
    kind: "scale.ai_generation";
    id?: string | undefined;
    labels?: string[] | undefined;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"chips.context">;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        color: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        label: string;
        color: string;
    }, {
        id: string;
        label: string;
        color: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    kind: "chips.context";
    items: {
        id: string;
        label: string;
        color: string;
    }[];
}, {
    kind: "chips.context";
    items: {
        id: string;
        label: string;
        color: string;
    }[];
}>, z.ZodObject<{
    kind: z.ZodLiteral<"qa.flow">;
    id: z.ZodOptional<z.ZodString>;
    questions: z.ZodArray<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"single">;
        id: z.ZodString;
        prompt: z.ZodString;
        options: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        options: string[];
        kind: "single";
        id: string;
        prompt: string;
    }, {
        options: string[];
        kind: "single";
        id: string;
        prompt: string;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"multi">;
        id: z.ZodString;
        prompt: z.ZodString;
        options: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        options: string[];
        kind: "multi";
        id: string;
        prompt: string;
    }, {
        options: string[];
        kind: "multi";
        id: string;
        prompt: string;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"text">;
        id: z.ZodString;
        prompt: z.ZodString;
        placeholder: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        kind: "text";
        id: string;
        prompt: string;
        placeholder?: string | undefined;
    }, {
        kind: "text";
        id: string;
        prompt: string;
        placeholder?: string | undefined;
    }>]>, "many">;
    submitLabel: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    kind: "qa.flow";
    questions: ({
        options: string[];
        kind: "single";
        id: string;
        prompt: string;
    } | {
        options: string[];
        kind: "multi";
        id: string;
        prompt: string;
    } | {
        kind: "text";
        id: string;
        prompt: string;
        placeholder?: string | undefined;
    })[];
    id?: string | undefined;
    submitLabel?: string | undefined;
}, {
    kind: "qa.flow";
    questions: ({
        options: string[];
        kind: "single";
        id: string;
        prompt: string;
    } | {
        options: string[];
        kind: "multi";
        id: string;
        prompt: string;
    } | {
        kind: "text";
        id: string;
        prompt: string;
        placeholder?: string | undefined;
    })[];
    id?: string | undefined;
    submitLabel?: string | undefined;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"agent.writing">;
    id: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<["idle", "running", "completed", "error", "skipped", "cancelled"]>;
    title: z.ZodString;
    target: z.ZodString;
    wordRange: z.ZodString;
    evidence: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    status: "idle" | "running" | "completed" | "error" | "skipped" | "cancelled";
    kind: "agent.writing";
    title: string;
    target: string;
    wordRange: string;
    evidence: string[];
    id?: string | undefined;
}, {
    status: "idle" | "running" | "completed" | "error" | "skipped" | "cancelled";
    kind: "agent.writing";
    title: string;
    target: string;
    wordRange: string;
    evidence: string[];
    id?: string | undefined;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"agent.research">;
    id: z.ZodOptional<z.ZodString>;
    mode: z.ZodEnum<["create", "followup", "readurl"]>;
    config: z.ZodEffects<z.ZodRecord<z.ZodString, z.ZodString>, Record<string, string>, Record<string, string>>;
}, "strip", z.ZodTypeAny, {
    kind: "agent.research";
    mode: "create" | "followup" | "readurl";
    config: Record<string, string>;
    id?: string | undefined;
}, {
    kind: "agent.research";
    mode: "create" | "followup" | "readurl";
    config: Record<string, string>;
    id?: string | undefined;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"batch.queue">;
    id: z.ZodOptional<z.ZodString>;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        kind: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: string;
        id: string;
        label: string;
    }, {
        kind: string;
        id: string;
        label: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    kind: "batch.queue";
    items: {
        kind: string;
        id: string;
        label: string;
    }[];
    id?: string | undefined;
}, {
    kind: "batch.queue";
    items: {
        kind: string;
        id: string;
        label: string;
    }[];
    id?: string | undefined;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"result.search">;
    id: z.ZodOptional<z.ZodString>;
    rank: z.ZodNumber;
    title: z.ZodString;
    authors: z.ZodString;
    venue: z.ZodString;
    year: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
    snippet: z.ZodString;
    relevance: z.ZodNumber;
    cites: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    kind: "result.search";
    title: string;
    rank: number;
    authors: string;
    venue: string;
    year: string | number;
    snippet: string;
    relevance: number;
    id?: string | undefined;
    cites?: number | undefined;
}, {
    kind: "result.search";
    title: string;
    rank: number;
    authors: string;
    venue: string;
    year: string | number;
    snippet: string;
    relevance: number;
    id?: string | undefined;
    cites?: number | undefined;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"approval.binary">;
    id: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    meta: z.ZodOptional<z.ZodString>;
    accent: z.ZodOptional<z.ZodString>;
    state: z.ZodEnum<["pending", "approved", "rejected", "abstained"]>;
}, "strip", z.ZodTypeAny, {
    kind: "approval.binary";
    label: string;
    state: "pending" | "approved" | "rejected" | "abstained";
    id?: string | undefined;
    meta?: string | undefined;
    accent?: string | undefined;
}, {
    kind: "approval.binary";
    label: string;
    state: "pending" | "approved" | "rejected" | "abstained";
    id?: string | undefined;
    meta?: string | undefined;
    accent?: string | undefined;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"result.diff">;
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    subtitle: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    hunks: z.ZodArray<z.ZodObject<{
        before: z.ZodString;
        after: z.ZodString;
        startLine: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        before: string;
        after: string;
        startLine?: number | undefined;
    }, {
        before: string;
        after: string;
        startLine?: number | undefined;
    }>, "many">;
    acceptLabel: z.ZodOptional<z.ZodString>;
    rejectLabel: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    kind: "result.diff";
    title: string;
    hunks: {
        before: string;
        after: string;
        startLine?: number | undefined;
    }[];
    id?: string | undefined;
    subtitle?: string | undefined;
    language?: string | undefined;
    acceptLabel?: string | undefined;
    rejectLabel?: string | undefined;
}, {
    kind: "result.diff";
    title: string;
    hunks: {
        before: string;
        after: string;
        startLine?: number | undefined;
    }[];
    id?: string | undefined;
    subtitle?: string | undefined;
    language?: string | undefined;
    acceptLabel?: string | undefined;
    rejectLabel?: string | undefined;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"result.citation">;
    id: z.ZodOptional<z.ZodString>;
    claim: z.ZodString;
    source: z.ZodObject<{
        title: z.ZodString;
        authors: z.ZodString;
        year: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
        venue: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        quote: z.ZodOptional<z.ZodString>;
        pages: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        authors: string;
        year: string | number;
        url?: string | undefined;
        venue?: string | undefined;
        quote?: string | undefined;
        pages?: string | undefined;
    }, {
        title: string;
        authors: string;
        year: string | number;
        url?: string | undefined;
        venue?: string | undefined;
        quote?: string | undefined;
        pages?: string | undefined;
    }>;
    confidence: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    kind: "result.citation";
    claim: string;
    source: {
        title: string;
        authors: string;
        year: string | number;
        url?: string | undefined;
        venue?: string | undefined;
        quote?: string | undefined;
        pages?: string | undefined;
    };
    id?: string | undefined;
    confidence?: number | undefined;
}, {
    kind: "result.citation";
    claim: string;
    source: {
        title: string;
        authors: string;
        year: string | number;
        url?: string | undefined;
        venue?: string | undefined;
        quote?: string | undefined;
        pages?: string | undefined;
    };
    id?: string | undefined;
    confidence?: number | undefined;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"plan.editable">;
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    subtitle: z.ZodOptional<z.ZodString>;
    steps: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        detail: z.ZodOptional<z.ZodString>;
        locked: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        label: string;
        detail?: string | undefined;
        locked?: boolean | undefined;
    }, {
        id: string;
        label: string;
        detail?: string | undefined;
        locked?: boolean | undefined;
    }>, "many">;
    submitLabel: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    kind: "plan.editable";
    title: string;
    steps: {
        id: string;
        label: string;
        detail?: string | undefined;
        locked?: boolean | undefined;
    }[];
    id?: string | undefined;
    subtitle?: string | undefined;
    submitLabel?: string | undefined;
}, {
    kind: "plan.editable";
    title: string;
    steps: {
        id: string;
        label: string;
        detail?: string | undefined;
        locked?: boolean | undefined;
    }[];
    id?: string | undefined;
    subtitle?: string | undefined;
    submitLabel?: string | undefined;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"tool.call">;
    id: z.ZodOptional<z.ZodString>;
    toolName: z.ZodString;
    rationale: z.ZodOptional<z.ZodString>;
    args: z.ZodEffects<z.ZodRecord<z.ZodString, z.ZodUnknown>, Record<string, unknown>, Record<string, unknown>>;
    signals: z.ZodOptional<z.ZodObject<{
        confidence: z.ZodOptional<z.ZodNumber>;
        costUsd: z.ZodOptional<z.ZodNumber>;
        scope: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        confidence?: number | undefined;
        costUsd?: number | undefined;
        scope?: string[] | undefined;
    }, {
        confidence?: number | undefined;
        costUsd?: number | undefined;
        scope?: string[] | undefined;
    }>>;
    approveLabel: z.ZodOptional<z.ZodString>;
    rejectLabel: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    kind: "tool.call";
    toolName: string;
    args: Record<string, unknown>;
    id?: string | undefined;
    rejectLabel?: string | undefined;
    rationale?: string | undefined;
    signals?: {
        confidence?: number | undefined;
        costUsd?: number | undefined;
        scope?: string[] | undefined;
    } | undefined;
    approveLabel?: string | undefined;
}, {
    kind: "tool.call";
    toolName: string;
    args: Record<string, unknown>;
    id?: string | undefined;
    rejectLabel?: string | undefined;
    rationale?: string | undefined;
    signals?: {
        confidence?: number | undefined;
        costUsd?: number | undefined;
        scope?: string[] | undefined;
    } | undefined;
    approveLabel?: string | undefined;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"evidence.pointer">;
    id: z.ZodOptional<z.ZodString>;
    /** The claim these pointers support or dispute. */
    claim: z.ZodString;
    items: z.ZodArray<z.ZodObject<{
        /** Stable id for the source this points into (document, asset, message). */
        sourceId: z.ZodString;
        /** Human-readable source name, shown when the pointer is rendered. */
        sourceLabel: z.ZodString;
        locator: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"span">;
            start: z.ZodNumber;
            end: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "span";
            start: number;
            end: number;
        }, {
            type: "span";
            start: number;
            end: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"bbox">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            page: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "bbox";
            x: number;
            y: number;
            width: number;
            height: number;
            page?: number | undefined;
        }, {
            type: "bbox";
            x: number;
            y: number;
            width: number;
            height: number;
            page?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"segment">;
            startSec: z.ZodNumber;
            endSec: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "segment";
            startSec: number;
            endSec: number;
        }, {
            type: "segment";
            startSec: number;
            endSec: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"whole">;
        }, "strip", z.ZodTypeAny, {
            type: "whole";
        }, {
            type: "whole";
        }>]>;
        /** The quoted or described excerpt the locator resolves to. */
        excerpt: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        sourceId: string;
        sourceLabel: string;
        locator: {
            type: "span";
            start: number;
            end: number;
        } | {
            type: "bbox";
            x: number;
            y: number;
            width: number;
            height: number;
            page?: number | undefined;
        } | {
            type: "segment";
            startSec: number;
            endSec: number;
        } | {
            type: "whole";
        };
        url?: string | undefined;
        excerpt?: string | undefined;
    }, {
        sourceId: string;
        sourceLabel: string;
        locator: {
            type: "span";
            start: number;
            end: number;
        } | {
            type: "bbox";
            x: number;
            y: number;
            width: number;
            height: number;
            page?: number | undefined;
        } | {
            type: "segment";
            startSec: number;
            endSec: number;
        } | {
            type: "whole";
        };
        url?: string | undefined;
        excerpt?: string | undefined;
    }>, "many">;
    /**
     * Sources the agent consulted but drew nothing from. Recording this is the
     * difference between "no evidence against" and "not looked for" — absence
     * has to be visible or the reviewer reads silence as safety.
     */
    notAssessed: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    kind: "evidence.pointer";
    items: {
        sourceId: string;
        sourceLabel: string;
        locator: {
            type: "span";
            start: number;
            end: number;
        } | {
            type: "bbox";
            x: number;
            y: number;
            width: number;
            height: number;
            page?: number | undefined;
        } | {
            type: "segment";
            startSec: number;
            endSec: number;
        } | {
            type: "whole";
        };
        url?: string | undefined;
        excerpt?: string | undefined;
    }[];
    claim: string;
    notAssessed: string[];
    id?: string | undefined;
}, {
    kind: "evidence.pointer";
    items: {
        sourceId: string;
        sourceLabel: string;
        locator: {
            type: "span";
            start: number;
            end: number;
        } | {
            type: "bbox";
            x: number;
            y: number;
            width: number;
            height: number;
            page?: number | undefined;
        } | {
            type: "segment";
            startSec: number;
            endSec: number;
        } | {
            type: "whole";
        };
        url?: string | undefined;
        excerpt?: string | undefined;
    }[];
    claim: string;
    id?: string | undefined;
    notAssessed?: string[] | undefined;
}>]>;
type HitlEvent = z.infer<typeof HitlEventSchema>;
/**
 * Literal string union of every supported event kind. Handy for
 * typing registry objects and exhaustive switch statements.
 */
type HitlEventKind = HitlEvent["kind"];
declare const HITL_EVENT_KINDS: readonly ["hitl.card", "subagent.status", "trace.mini", "scale.ai_generation", "chips.context", "qa.flow", "agent.writing", "agent.research", "batch.queue", "result.search", "approval.binary", "result.diff", "result.citation", "plan.editable", "tool.call", "evidence.pointer"];

export { AUTHORIZING_STATES, type AgentStatus, AgentStatusSchema, type AiGenerationScaleEvent, AiGenerationScaleEventSchema, type ApprovalState, ApprovalStateSchema, type ApproveRejectEvent, ApproveRejectEventSchema, type BatchQueueEvent, BatchQueueEventSchema, type BatchQueueItem, BatchQueueItemSchema, type CitationResultEvent, CitationResultEventSchema, type CitationSource, CitationSourceSchema, type ContextChipItem, ContextChipItemSchema, type ContextChipsEvent, ContextChipsEventSchema, type DiffHunk, DiffHunkSchema, type DiffResultEvent, DiffResultEventSchema, type EditablePlanEvent, EditablePlanEventSchema, type EvidenceItem, EvidenceItemSchema, type EvidenceLocator, EvidenceLocatorSchema, type EvidencePointerEvent, EvidencePointerEventSchema, HITL_EVENT_KINDS, type HitlCardEvent, HitlCardEventSchema, type HitlEvent, type HitlEventKind, HitlEventSchema, type MiniTraceEvent, MiniTraceEventSchema, type PlanStep, PlanStepSchema, type QAFlowEvent, QAFlowEventSchema, type QAQuestion, QAQuestionSchema, type ResearchAgentEvent, ResearchAgentEventSchema, SafeUrlSchema, type SearchResultEvent, SearchResultEventSchema, type SubagentStatusEvent, SubagentStatusEventSchema, type ToolCallPreviewEvent, ToolCallPreviewEventSchema, type ToolCallSignals, ToolCallSignalsSchema, type TraceStep, TraceStepSchema, type WritingAgentEvent, WritingAgentEventSchema, isAuthorized };
