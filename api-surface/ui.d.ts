// AUTO-GENERATED public type surface for @hitl-kit/ui.
// Regenerate with `pnpm api:check`. Do not edit by hand.
// A diff here means the published type API changed — review it on purpose.

import * as react_jsx_runtime from 'react/jsx-runtime';
import { HitlCardEvent, HitlCardAction, ToolCallPreviewEvent, ToolCallAction, DiffResultEvent, DiffAction, CitationResultEvent, CitationAction, EvidencePointerEvent, EvidencePointerAction, EvidenceLocator, ApproveRejectEvent, ApproveRejectAction, EditablePlanEvent, EditablePlanAction, QAFlowEvent, QAFlowAction, BatchQueueEvent, BatchQueueAction, SubagentStatusEvent, MiniTraceEvent, TraceStep, TraceAction, ContextChipsEvent, ContextChipsAction, SearchResultEvent, WritingAgentEvent, WritingAgentAction, ResearchAgentEvent, ResearchAgentAction, AiGenerationScaleEvent, ScaleAction, AgentStatus } from '@hitl-kit/core';
import { ElementType } from 'react';
import { ClassValue } from 'clsx';

/**
 * UI-only types. Every event and action type lives in `@hitl-kit/core`;
 * this file holds only what the components need that the protocol does not.
 */

/** The interrupt card's local lifecycle. */
type HitlCardState = "idle" | "expanded" | "confirmed" | "dismissed";
/**
 * Props every decision surface accepts on top of its event.
 *
 * - `busy`: the consumer is resolving the last action (a resume in flight).
 *   The bar disables and announces it. Heuristic 1, visibility of status.
 * - `error`: the last action failed. Rendered inline with Retry. Heuristic 9.
 * - `help`: one plain sentence under the header. Heuristic 10.
 * - `allowAbstain`: offer "Can't tell". Default true. Heuristic 5.
 * - `allowUndo`: keep Undo on the resolved line. Default true. Heuristic 3.
 * - `autoFocus`: focus the primary action on mount, for queues. Heuristic 7.
 */
interface DecisionSurfaceProps {
    busy?: boolean;
    error?: string;
    help?: string;
    allowAbstain?: boolean;
    allowUndo?: boolean;
    autoFocus?: boolean;
    className?: string;
}

interface HitlCardProps extends HitlCardEvent, DecisionSurfaceProps {
    onAction?: (action: HitlCardAction) => void;
    /** Start expanded. Off by default so a thread of cards stays scannable. */
    defaultExpanded?: boolean;
}
/**
 * Interrupt Card. The agent stopped at a boundary and is asking the human to
 * confirm before it continues. Collapsed it is one line; expanded it shows
 * the steps so far, an optional note field, and the decision.
 */
declare function HitlCard({ variant, title, subtitle, steps, runLabel, editPlaceholder, onAction, defaultExpanded, busy, error, help, allowUndo, autoFocus, className, }: HitlCardProps): react_jsx_runtime.JSX.Element;

interface ToolCallPreviewProps extends ToolCallPreviewEvent, DecisionSurfaceProps {
    onAction?: (action: ToolCallAction) => void;
    /** Scopes that leave the system. Flagged in the signals row. Default: anything containing "external". */
    isExternalScope?: (scope: string) => boolean;
}
/**
 * Tool Call Preview. The call the agent wants to make, shown before it runs:
 * name, rationale, arguments on demand, and the signals a gate would read.
 */
declare function ToolCallPreview({ id, toolName, rationale, args, signals, approveLabel, rejectLabel, onAction, isExternalScope, busy, error, help, allowAbstain, allowUndo, autoFocus, className, }: ToolCallPreviewProps): react_jsx_runtime.JSX.Element;

interface DiffResultProps extends DiffResultEvent, DecisionSurfaceProps {
    onAction?: (action: DiffAction) => void;
}
/**
 * Diff Result. Before and after for a proposed edit, one strip per hunk,
 * so the human sees exactly what changes before it lands.
 */
declare function DiffResult({ id, title, subtitle, language, hunks, acceptLabel, rejectLabel, onAction, busy, error, help, allowAbstain, allowUndo, autoFocus, className, }: DiffResultProps): react_jsx_runtime.JSX.Element;

interface CitationResultProps extends CitationResultEvent, DecisionSurfaceProps {
    onAction?: (action: CitationAction) => void;
}
/**
 * Citation Result. The claim on top, the source below, the supporting quote
 * on demand, and the decision: does the source say what the agent says it says?
 */
declare function CitationResult({ id, claim, source, confidence, onAction, busy, error, help, allowAbstain, allowUndo, autoFocus, className, }: CitationResultProps): react_jsx_runtime.JSX.Element;

interface EvidencePointerProps extends Omit<EvidencePointerEvent, "notAssessed">, DecisionSurfaceProps {
    notAssessed?: string[];
    onAction?: (action: EvidencePointerAction) => void;
}
/** A locator in the units a person reads, never a raw object. */
declare function describeLocator(l: EvidenceLocator): string;
/**
 * Evidence Pointer. WHERE a claim is grounded, not merely that it is: one row
 * per pointer with the source, the locator in human units, and the excerpt.
 * Sources the agent consulted and drew nothing from are listed too, because
 * silence must not read as safety.
 */
declare function EvidencePointer({ id, claim, items, notAssessed, onAction, busy, error, help, allowAbstain, allowUndo, autoFocus, className, }: EvidencePointerProps): react_jsx_runtime.JSX.Element;

interface ApproveRejectRowProps extends Partial<Omit<ApproveRejectEvent, "state">>, Pick<ApproveRejectEvent, "state"> {
    onAction?: (action: ApproveRejectAction) => void;
    /** Tailwind background class for the accent bar, e.g. "bg-[color:var(--accent-amber)]". */
    accentClass?: string;
    busy?: boolean;
    allowAbstain?: boolean;
    allowUndo?: boolean;
    autoFocus?: boolean;
    className?: string;
}
/**
 * Approve / Reject Row. The smallest decision surface: controlled, so the
 * consumer owns `state` and hears every change through `onAction`.
 * Three answers, not two: approve, reject, and "can't tell".
 */
declare function ApproveRejectRow({ state, label, meta, accent, onAction, accentClass, busy, allowAbstain, allowUndo, autoFocus, className, }: ApproveRejectRowProps): react_jsx_runtime.JSX.Element;

interface EditablePlanProps extends EditablePlanEvent, Omit<DecisionSurfaceProps, "allowAbstain"> {
    onAction?: (action: EditablePlanAction) => void;
}
/**
 * Editable Plan. The steps the agent proposes, before it runs them: rename,
 * reorder, add, remove (locked steps stay), then submit or cancel.
 */
declare function EditablePlan({ title, subtitle, steps: initialSteps, submitLabel, onAction, busy, error, help, allowUndo, autoFocus, className, }: EditablePlanProps): react_jsx_runtime.JSX.Element;
declare const DEMO_PLAN: EditablePlanEvent;

interface QAFlowProps extends Partial<Omit<QAFlowEvent, "questions">>, Pick<QAFlowEvent, "questions">, Omit<DecisionSurfaceProps, "allowAbstain"> {
    onAction?: (action: QAFlowAction) => void;
}
/**
 * QA Flow. Single choice, multi-select and free text, then one submit.
 * After submit the answers stay visible and can be reopened for editing.
 */
declare function QAFlow({ questions, submitLabel, onAction, busy, error, help, allowUndo, autoFocus, className, }: QAFlowProps): react_jsx_runtime.JSX.Element;
declare const DEMO_QA: QAFlowEvent;

interface BatchQueueProps extends Partial<Omit<BatchQueueEvent, "items">>, Pick<BatchQueueEvent, "items">, Omit<DecisionSurfaceProps, "allowAbstain"> {
    onAction?: (action: BatchQueueAction) => void;
    /** Icon per item `kind`. Unknown kinds fall back to a document icon. */
    icons?: Record<string, ElementType>;
}
/**
 * Batch Queue. One decision per row, in order; the queue advances itself.
 * "Undo last" steps back one row, and the summary can be reset.
 */
declare function BatchQueue({ items, onAction, icons, busy, error, help, allowUndo, autoFocus, className, }: BatchQueueProps): react_jsx_runtime.JSX.Element;
declare const DEMO_BATCH: BatchQueueEvent;

interface SubagentStatusCardProps extends Partial<Omit<SubagentStatusEvent, "status" | "label">>, Pick<SubagentStatusEvent, "status" | "label"> {
    className?: string;
}
/** Subagent Status. One row: an icon in an orb, the agent's name, and its state in words. */
declare function SubagentStatusCard({ status, label, detail, className, }: SubagentStatusCardProps): react_jsx_runtime.JSX.Element;

interface MiniTraceProps extends Partial<Omit<MiniTraceEvent, "steps">>, Pick<MiniTraceEvent, "steps"> {
    onAction?: (action: TraceAction) => void;
    className?: string;
}
/** MiniTrace. Thought, action, result, one row each; a row with detail opens. */
declare function MiniTrace({ steps, onAction, className }: MiniTraceProps): react_jsx_runtime.JSX.Element;
declare const DEMO_TRACE: MiniTraceEvent;
/** @deprecated use `DEMO_TRACE.steps` */
declare const DEMO_TRACE_STEPS: TraceStep[];

interface ContextChipsProps extends Partial<Omit<ContextChipsEvent, "items">>, Pick<ContextChipsEvent, "items"> {
    /** Supply to make chips removable. */
    onAction?: (action: ContextChipsAction) => void;
    maxVisible?: number;
    className?: string;
}
/** Context Chips. What the agent was handed: notes, files, URLs. Removable when `onAction` is given. */
declare function ContextChips({ items, onAction, maxVisible, className }: ContextChipsProps): react_jsx_runtime.JSX.Element;

interface SearchResultCardProps extends Partial<Pick<SearchResultEvent, "kind" | "id" | "cites">>, Omit<SearchResultEvent, "kind" | "id" | "cites"> {
    className?: string;
}
/**
 * Search Result Card. Rank, title, authors, snippet, and a relevance bar.
 * The relevance is a signal for the human to weigh, not a verdict.
 */
declare function SearchResultCard({ rank, title, authors, venue, year, snippet, relevance, cites, className, }: SearchResultCardProps): react_jsx_runtime.JSX.Element;
declare const DEMO_SEARCH_RESULTS: SearchResultEvent[];

interface WritingAgentProps extends WritingAgentEvent {
    onAction?: (action: WritingAgentAction) => void;
    /** Show the status chip row so a reader can step through the states. */
    showStatusPicker?: boolean;
    /** Cycle through the statuses on a timer, for a live demo. */
    liveData?: boolean;
    className?: string;
}
/** Writing Agent. A draft in progress: title, target, word range, evidence notes, and the agent's state. */
declare function WritingAgent({ status: initialStatus, title, target, wordRange, evidence, onAction, showStatusPicker, liveData, className, }: WritingAgentProps): react_jsx_runtime.JSX.Element;
declare const DEMO_WRITING_AGENT: WritingAgentEvent;

type Mode = ResearchAgentEvent["mode"];
interface ResearchAgentProps extends Partial<Omit<ResearchAgentEvent, "mode">>, Pick<ResearchAgentEvent, "mode"> {
    onAction?: (action: ResearchAgentAction) => void;
    /** Per-mode config, used when the event's `config` is empty. */
    configByMode?: Partial<Record<Mode, Record<string, string>>>;
    className?: string;
}
/** Research Agent. Three operating modes for a long-running research task, and the config each one runs with. */
declare function ResearchAgent({ mode: initialMode, config, onAction, configByMode, className, }: ResearchAgentProps): react_jsx_runtime.JSX.Element;
declare const DEMO_RESEARCH_CONFIG: Record<Mode, Record<string, string>>;
declare const DEMO_RESEARCH_AGENT: ResearchAgentEvent;

interface AiGenerationScaleProps extends Partial<Omit<AiGenerationScaleEvent, "value" | "labels">>, Pick<AiGenerationScaleEvent, "value"> {
    labels?: readonly string[];
    /** Omit for a read-only scale. */
    onAction?: (action: ScaleAction) => void;
    showLabel?: boolean;
    className?: string;
}
/**
 * The five-button segmented scale: the widest, most explicit form, for a
 * settings panel where every option should be visible at once. For tight
 * layouts use `AiGenerationSlider`, `AiGenerationMeter` or `AiGenerationBadge`.
 */
declare function AiGenerationScale({ value, onAction, labels, showLabel, className, }: AiGenerationScaleProps): react_jsx_runtime.JSX.Element;

interface AiGenerationSliderProps extends Partial<Omit<AiGenerationScaleEvent, "value" | "labels">>, Pick<AiGenerationScaleEvent, "value"> {
    labels?: readonly string[];
    /** Omit for a read-only readout. */
    onAction?: (action: ScaleAction) => void;
    /** Optional right-hand micro-copy in the header row. Mono, muted. */
    hint?: string;
    ariaLabel?: string;
    className?: string;
}
/**
 * The compact drag scale: one header row and one track, about 58px tall,
 * and it holds together at 320px. Pointer drag snaps to the five stops;
 * arrows step, Home/End jump.
 */
declare function AiGenerationSlider({ value, onAction, labels, hint, ariaLabel, className, }: AiGenerationSliderProps): react_jsx_runtime.JSX.Element;

interface AiGenerationMeterProps extends Partial<Omit<AiGenerationScaleEvent, "value" | "labels">>, Pick<AiGenerationScaleEvent, "value"> {
    labels?: readonly string[];
    /** Drop the level name and keep only the segments, for very tight cells. */
    compact?: boolean;
    /** Overrides the generated description, e.g. "Provenance: Collaborative, 3 of 5". */
    ariaLabel?: string;
    className?: string;
}
/**
 * At-a-glance provenance: five segments filled to the current level, plus the
 * level name. Deliberately read-only and a single `role="img"`, so a table of
 * fifty rows does not add fifty tab stops. No "use client": no state, no handlers.
 */
declare function AiGenerationMeter({ value, labels, compact, ariaLabel, className, }: AiGenerationMeterProps): react_jsx_runtime.JSX.Element;

interface AiGenerationBadgeProps extends Partial<Omit<AiGenerationScaleEvent, "value" | "labels">>, Pick<AiGenerationScaleEvent, "value"> {
    labels?: readonly string[];
    /** Omit for a static badge. Supplied, the pill grows ‹ › steppers. */
    onAction?: (action: ScaleAction) => void;
    ariaLabel?: string;
    className?: string;
}
/**
 * The densest form: one pill with a five-dot indicator and the level name.
 * Read-only it is a single `role="img"`. Given `onAction` it becomes a
 * labelled group with two steppers and a polite live region.
 */
declare function AiGenerationBadge({ value, onAction, labels, ariaLabel, className, }: AiGenerationBadgeProps): react_jsx_runtime.JSX.Element;

/** The palette the kit draws from: accents, the four approval badges, and the row that sets them. */
declare function SharedPrimitives({ className }: {
    className?: string;
}): react_jsx_runtime.JSX.Element;

/**
 * The five-point AI-generation ordinal, shared by every scale variant.
 *
 * There is one array of level names and one accent progression in the kit.
 * `AiGenerationScale`, `AiGenerationSlider`, `AiGenerationMeter` and
 * `AiGenerationBadge` all read from here, so a level can never mean one thing
 * in the slider and another in the badge.
 *
 * Accents are punctuation: dots, segment fills, the thumb ring. They are never
 * a background for text. Light-theme accents sit around 3.3–4.1:1 on paper,
 * which clears WCAG 1.4.11 for graphical objects but not 1.4.3 for body text,
 * so every label in these components stays on `foreground` / `muted-foreground`.
 */
declare const AI_GENERATION_LEVELS: readonly ["Human", "Mostly Human", "Collaborative", "Mostly AI", "AI"];
type AiGenerationLevelName = (typeof AI_GENERATION_LEVELS)[number];
/** Highest valid index. The scale is 0-based: 0 = Human, 4 = AI. */
declare const AI_GENERATION_MAX: number;
/**
 * emerald → blue → amber → violet → rose, one per level.
 * Written as literal utility strings so Tailwind's source scan picks them up.
 */
declare const AI_GENERATION_ACCENTS: readonly ["bg-[color:var(--accent-emerald)]", "bg-[color:var(--accent-blue)]", "bg-[color:var(--accent-amber)]", "bg-[color:var(--accent-violet)]", "bg-[color:var(--accent-rose)]"];
/** Keep any incoming value inside 0…4 and integral. */
declare function clampAiLevel(value: number): number;
/** The display name for a level, honouring a caller-supplied label override. */
declare function aiLevelName(value: number, labels?: readonly string[]): string;
/** The accent utility class for a level. */
declare function aiLevelAccent(value: number): string;
/**
 * Screen-reader text for a level: "Collaborative, 3 of 5".
 * Position is 1-based because that is how a human counts the marks they see.
 */
declare function aiLevelDescription(value: number, labels?: readonly string[]): string;

/** One icon, colour and plain label per agent status, shared by every card that shows one. */
declare const STATUS_META: Record<AgentStatus, {
    icon: ElementType;
    color: string;
    label: string;
}>;

/**
 * Demo events for the decision surfaces. Each is a valid core event, so it
 * can be spread straight onto its primitive or fed to `HitlEventRenderer`.
 */
declare const DEMO_HITL_CARDS: HitlCardEvent[];
declare const DEMO_TOOL_CALL: ToolCallPreviewEvent;
declare const DEMO_DIFF: DiffResultEvent;
declare const DEMO_CITATION: CitationResultEvent;
declare const DEMO_EVIDENCE: EvidencePointerEvent;

/** Tailwind classname merge, the shadcn idiom. Installed by the registry as `lib/utils.ts`. */
declare function cn(...inputs: ClassValue[]): string;

export { AI_GENERATION_ACCENTS, AI_GENERATION_LEVELS, AI_GENERATION_MAX, AiGenerationBadge, type AiGenerationBadgeProps, type AiGenerationLevelName, AiGenerationMeter, type AiGenerationMeterProps, AiGenerationScale, type AiGenerationScaleProps, AiGenerationSlider, type AiGenerationSliderProps, ApproveRejectRow, type ApproveRejectRowProps, BatchQueue, type BatchQueueProps, CitationResult, type CitationResultProps, ContextChips, type ContextChipsProps, DEMO_BATCH, DEMO_CITATION, DEMO_DIFF, DEMO_EVIDENCE, DEMO_HITL_CARDS, DEMO_PLAN, DEMO_QA, DEMO_RESEARCH_AGENT, DEMO_RESEARCH_CONFIG, DEMO_SEARCH_RESULTS, DEMO_TOOL_CALL, DEMO_TRACE, DEMO_TRACE_STEPS, DEMO_WRITING_AGENT, type DecisionSurfaceProps, DiffResult, type DiffResultProps, EditablePlan, type EditablePlanProps, EvidencePointer, type EvidencePointerProps, HitlCard, type HitlCardProps, type HitlCardState, MiniTrace, type MiniTraceProps, QAFlow, type QAFlowProps, ResearchAgent, type ResearchAgentProps, STATUS_META, SearchResultCard, type SearchResultCardProps, SharedPrimitives, SubagentStatusCard, type SubagentStatusCardProps, ToolCallPreview, type ToolCallPreviewProps, WritingAgent, type WritingAgentProps, aiLevelAccent, aiLevelDescription, aiLevelName, clampAiLevel, cn, describeLocator };
