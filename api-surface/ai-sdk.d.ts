// AUTO-GENERATED public type surface for @hitl-kit/ai-sdk.
// Regenerate with `pnpm api:check`. Do not edit by hand.
// A diff here means the published type API changed — review it on purpose.

import * as ai from 'ai';
import { z } from 'zod';
import { HitlEvent } from '@hitl-kit/core';
export { AgentStatus, AiGenerationScaleEvent, ApprovalState, ApproveRejectEvent, BatchQueueEvent, CitationResultEvent, ContextChipsEvent, DiffResultEvent, EditablePlanEvent, HitlCardEvent, HitlEvent, HitlEventKind, MiniTraceEvent, QAFlowEvent, ResearchAgentEvent, SearchResultEvent, SubagentStatusEvent, ToolCallPreviewEvent, WritingAgentEvent } from '@hitl-kit/core';
import { GateDecision, GateSignals, Gate } from '@hitl-kit/gates';

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
declare const CommonFields: {
    description: z.ZodOptional<z.ZodString>;
};
interface HitlCardToolOptions {
    /** Description exposed to the model. Shape how the agent decides when to call this tool. */
    description?: string;
}
declare function hitlCardTool(options?: HitlCardToolOptions): ai.Tool<{
    variant: "search" | "review" | "write";
    title: string;
    subtitle: string;
    steps: {
        label: string;
        done: boolean;
    }[];
    runLabel: string;
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
declare function subagentStatusTool(options?: {
    description?: string;
}): ai.Tool<{
    status: "idle" | "running" | "completed" | "error" | "skipped" | "cancelled";
    label: string;
    detail?: string | undefined;
}, {
    status: "idle" | "running" | "completed" | "error" | "skipped" | "cancelled";
    kind: "subagent.status";
    label: string;
    id?: string | undefined;
    detail?: string | undefined;
}>;
declare function miniTraceTool(options?: {
    description?: string;
}): ai.Tool<{
    steps: {
        type: "thought" | "action" | "result";
        label: string;
        detail?: string | undefined;
    }[];
}, {
    kind: "trace.mini";
    steps: {
        type: "thought" | "action" | "result";
        label: string;
        detail?: string | undefined;
    }[];
    id?: string | undefined;
}>;
declare function aiGenerationScaleTool(options?: {
    description?: string;
}): ai.Tool<{
    value: number;
    labels?: string[] | undefined;
}, {
    value: number;
    kind: "scale.ai_generation";
    id?: string | undefined;
    labels?: string[] | undefined;
}>;
declare function contextChipsTool(options?: {
    description?: string;
}): ai.Tool<{
    items: {
        label: string;
        id: string;
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
declare function qaFlowTool(options?: {
    description?: string;
}): ai.Tool<{
    questions: ({
        options: string[];
        id: string;
        kind: "single";
        prompt: string;
    } | {
        options: string[];
        id: string;
        kind: "multi";
        prompt: string;
    } | {
        id: string;
        kind: "text";
        prompt: string;
        placeholder?: string | undefined;
    })[];
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
declare function writingAgentTool(options?: {
    description?: string;
}): ai.Tool<{
    status: "idle" | "running" | "completed" | "error" | "skipped" | "cancelled";
    title: string;
    target: string;
    wordRange: string;
    evidence: string[];
}, {
    status: "idle" | "running" | "completed" | "error" | "skipped" | "cancelled";
    kind: "agent.writing";
    title: string;
    target: string;
    wordRange: string;
    evidence: string[];
    id?: string | undefined;
}>;
declare function researchAgentTool(options?: {
    description?: string;
}): ai.Tool<{
    mode: "create" | "followup" | "readurl";
    config: Record<string, string>;
}, {
    kind: "agent.research";
    mode: "create" | "followup" | "readurl";
    config: Record<string, string>;
    id?: string | undefined;
}>;
declare function batchQueueTool(options?: {
    description?: string;
}): ai.Tool<{
    items: {
        label: string;
        id: string;
        kind: string;
    }[];
}, {
    kind: "batch.queue";
    items: {
        kind: string;
        id: string;
        label: string;
    }[];
    id?: string | undefined;
}>;
declare function searchResultTool(options?: {
    description?: string;
}): ai.Tool<{
    title: string;
    rank: number;
    authors: string;
    venue: string;
    year: string | number;
    snippet: string;
    relevance: number;
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
declare function approveRejectTool(options?: {
    description?: string;
}): ai.Tool<{
    label: string;
    state: "pending" | "approved" | "rejected";
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
declare function diffResultTool(options?: {
    description?: string;
}): ai.Tool<{
    title: string;
    hunks: {
        before: string;
        after: string;
        startLine?: number | undefined;
    }[];
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
declare function citationResultTool(options?: {
    description?: string;
}): ai.Tool<{
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
declare function editablePlanTool(options?: {
    description?: string;
}): ai.Tool<{
    title: string;
    steps: {
        label: string;
        id: string;
        detail?: string | undefined;
        locked?: boolean | undefined;
    }[];
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
declare function toolCallPreviewTool(options?: {
    description?: string;
}): ai.Tool<{
    args: Record<string, unknown>;
    toolName: string;
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
/**
 * Convenience bundle containing every HITL Kit tool. Spread into
 * `tools` when you want the full set available to the agent. Narrow
 * to only what you need for production.
 */
declare const allHitlTools: {
    requestHumanReview: ai.Tool<{
        variant: "search" | "review" | "write";
        title: string;
        subtitle: string;
        steps: {
            label: string;
            done: boolean;
        }[];
        runLabel: string;
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
    reportSubagentStatus: ai.Tool<{
        status: "idle" | "running" | "completed" | "error" | "skipped" | "cancelled";
        label: string;
        detail?: string | undefined;
    }, {
        status: "idle" | "running" | "completed" | "error" | "skipped" | "cancelled";
        kind: "subagent.status";
        label: string;
        id?: string | undefined;
        detail?: string | undefined;
    }>;
    showTrace: ai.Tool<{
        steps: {
            type: "thought" | "action" | "result";
            label: string;
            detail?: string | undefined;
        }[];
    }, {
        kind: "trace.mini";
        steps: {
            type: "thought" | "action" | "result";
            label: string;
            detail?: string | undefined;
        }[];
        id?: string | undefined;
    }>;
    showAiGenerationScale: ai.Tool<{
        value: number;
        labels?: string[] | undefined;
    }, {
        value: number;
        kind: "scale.ai_generation";
        id?: string | undefined;
        labels?: string[] | undefined;
    }>;
    showContextChips: ai.Tool<{
        items: {
            label: string;
            id: string;
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
    askHumanQuestions: ai.Tool<{
        questions: ({
            options: string[];
            id: string;
            kind: "single";
            prompt: string;
        } | {
            options: string[];
            id: string;
            kind: "multi";
            prompt: string;
        } | {
            id: string;
            kind: "text";
            prompt: string;
            placeholder?: string | undefined;
        })[];
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
    showWritingAgent: ai.Tool<{
        status: "idle" | "running" | "completed" | "error" | "skipped" | "cancelled";
        title: string;
        target: string;
        wordRange: string;
        evidence: string[];
    }, {
        status: "idle" | "running" | "completed" | "error" | "skipped" | "cancelled";
        kind: "agent.writing";
        title: string;
        target: string;
        wordRange: string;
        evidence: string[];
        id?: string | undefined;
    }>;
    showResearchAgent: ai.Tool<{
        mode: "create" | "followup" | "readurl";
        config: Record<string, string>;
    }, {
        kind: "agent.research";
        mode: "create" | "followup" | "readurl";
        config: Record<string, string>;
        id?: string | undefined;
    }>;
    presentBatchDecisions: ai.Tool<{
        items: {
            label: string;
            id: string;
            kind: string;
        }[];
    }, {
        kind: "batch.queue";
        items: {
            kind: string;
            id: string;
            label: string;
        }[];
        id?: string | undefined;
    }>;
    showSearchResult: ai.Tool<{
        title: string;
        rank: number;
        authors: string;
        venue: string;
        year: string | number;
        snippet: string;
        relevance: number;
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
    requestApproval: ai.Tool<{
        label: string;
        state: "pending" | "approved" | "rejected";
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
    showDiff: ai.Tool<{
        title: string;
        hunks: {
            before: string;
            after: string;
            startLine?: number | undefined;
        }[];
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
    showCitation: ai.Tool<{
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
    showEditablePlan: ai.Tool<{
        title: string;
        steps: {
            label: string;
            id: string;
            detail?: string | undefined;
            locked?: boolean | undefined;
        }[];
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
    previewToolCall: ai.Tool<{
        args: Record<string, unknown>;
        toolName: string;
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
};

/**
 * A tool-call result that carries a HITL event. When you receive tool
 * results on the client (from `useChat` or `streamText`), filter for
 * results whose shape matches this and pass them to
 * `<HitlEventRenderer />`.
 */
interface HitlToolResult<E extends HitlEvent = HitlEvent> {
    /** The validated event. */
    result: E;
}
/**
 * Type guard: returns true if a tool result carries a HITL event.
 * Useful when filtering a streamed conversation for items to render.
 */
declare function isHitlToolResult(value: unknown): value is HitlToolResult;

/**
 * A minimal description of an AI SDK Tool. We don't import the heavy
 * `ai` package types directly so this file stays runtime-cheap; the
 * structure matches what `tool()` returns.
 */
type AiSdkTool = {
    description?: string;
    inputSchema?: unknown;
    execute?: (input: any, context?: any) => Promise<any> | any;
};
interface WithGatesOptions<TInput = unknown> {
    /**
     * Signals to forward into the gate context. May be a static object or
     * a function that derives signals from the resolved tool input. Use
     * the function form for cost / confidence values that depend on args.
     */
    signals?: GateSignals | ((input: TInput) => GateSignals | Promise<GateSignals>);
    /**
     * What to do when a gate denies.
     * - `"escalate"` (default): the tool result becomes the gate's escalation
     *   event so `<HitlEventRenderer />` renders the deny exactly like a
     *   normal HITL event. The user can override by sending a follow-up
     *   user message — the same pattern as accepting a regular interrupt.
     * - `"throw"`: throw a `GateDeniedError`. Use when you want the agent
     *   loop to surface a tool error.
     */
    onDeny?: "escalate" | "throw";
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
 * Wrap an AI SDK tool with a gate chain. The wrapped tool runs the gates
 * before its inner `execute`, and on deny either throws or returns the
 * escalation HitlEvent so the client renderer can surface it.
 *
 * ```ts
 * const tools = {
 *   requestHumanReview: withGates(
 *     hitlCardTool(),
 *     [costGate({ maxUsd: 0.05 })],
 *     { signals: (input) => ({ costUsd: estimateCost(input) }) },
 *   ),
 * };
 * ```
 */
declare function withGates<T extends AiSdkTool>(tool: T, gates: Gate[], opts?: WithGatesOptions): T;

export { GateDeniedError, type HitlCardToolOptions, type HitlToolResult, type WithGatesOptions, CommonFields as _CommonFields, aiGenerationScaleTool, allHitlTools, approveRejectTool, batchQueueTool, citationResultTool, contextChipsTool, diffResultTool, editablePlanTool, hitlCardTool, isHitlToolResult, miniTraceTool, qaFlowTool, researchAgentTool, searchResultTool, subagentStatusTool, toolCallPreviewTool, withGates, writingAgentTool };
