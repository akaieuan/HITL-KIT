// AUTO-GENERATED public type surface for @hitl-kit/gates.
// Regenerate with `pnpm api:check`. Do not edit by hand.
// A diff here means the published type API changed — review it on purpose.

import { HitlEvent } from '@hitl-kit/core';
export { HitlEvent } from '@hitl-kit/core';

/**
 * Stable identifier for the reason a gate denied. Useful for analytics
 * and downstream logic that switches on a specific failure mode.
 */
type GateCode = "confidence_too_low" | "cost_exceeded" | "scope_violation" | "approval_required" | "rate_limited";
/**
 * Free-form signals an adapter forwards into a gate. Adapters (LangGraph,
 * AI SDK, MCP) populate these from their environment — model logprobs,
 * cost estimators, tenant scope strings, etc. Gates read what they need
 * and ignore the rest.
 */
interface GateSignals {
    confidence?: number;
    costUsd?: number;
    scope?: string[];
    userId?: string;
    /** Approver ids that have signed off so far (for approvalChainGate). */
    approvals?: string[];
    /** Pre-defined chain of approver ids (for approvalChainGate). */
    approvalChain?: string[];
}
/**
 * Context handed to a gate for a single decision. Contains the proposed
 * event the adapter is about to surface, optional structured input, the
 * signals the adapter forwarded, and an optional shared store gates can
 * read/write through (rate-limit counters, approval-chain state).
 */
interface GateContext {
    event?: HitlEvent;
    input?: unknown;
    signals?: GateSignals;
    adapter: "langgraph" | "ai-sdk" | "mcp" | "core";
    /**
     * Shared store wired by the adapter (e.g. the MCP server's `opts.store`).
     * Gates that need persistence (`rateLimitGate`, `approvalChainGate`,
     * cumulative `costGate`) should prefer `ctx.store` over a closure-bound
     * store so a single server-level store can drive multiple gates.
     */
    store?: GateStore;
}
/**
 * Allow result. `meta` is opaque, surfaces in adapter logs.
 */
interface GateAllow {
    allow: true;
    meta?: Record<string, unknown>;
}
/**
 * Deny result. `escalate`, when set, is the HitlEvent the adapter should
 * surface to a human instead of (or in addition to) erroring out. This is
 * the "block but ask the human to override" pattern.
 */
interface GateDeny {
    allow: false;
    reason: string;
    code: GateCode;
    escalate?: HitlEvent;
    meta?: Record<string, unknown>;
}
type GateDecision = GateAllow | GateDeny;
/** A gate is a pure function from context to decision. May be async. */
type Gate = (ctx: GateContext) => Promise<GateDecision> | GateDecision;
/**
 * Pluggable storage for gates that need to persist counters or
 * sign-off state across decisions (rateLimitGate, approvalChainGate,
 * cumulative costGate). The default `inMemoryStore()` is single-process;
 * production deployments should provide a Redis/Upstash/database adapter.
 */
interface GateStore {
    get<T = unknown>(key: string): Promise<T | undefined>;
    set<T = unknown>(key: string, value: T, ttlSec?: number): Promise<void>;
    incr(key: string, ttlSec?: number): Promise<number>;
    delete(key: string): Promise<void>;
}
/** Convenience type for gate factories that need a writable store. */
type GateStoreFactory = () => GateStore;

/**
 * Run gates sequentially. First-deny-wins.
 *
 * Why sequential: rate-limit and cost gates can short-circuit cheaply,
 * but the goal is to surface the *first* failure so the user sees a
 * single clear reason. Parallel evaluation would race on store reads
 * for stateful gates (rate-limit, approval chain) and produce
 * non-deterministic decisions.
 *
 * The composed gate is itself a Gate, so compose chains nest cleanly.
 */
declare function composeGates(gates: Gate[]): Gate;

/**
 * Single-process in-memory implementation of `GateStore`. Suitable for
 * development, demos, and single-instance deployments. For multi-process
 * production (multiple Lambda workers, replicated containers, edge
 * runtimes), provide a `GateStore` backed by Redis, Upstash, or your DB.
 *
 * Entries are evicted lazily on read; there's no background sweeper.
 */
declare function inMemoryStore(): GateStore;

interface ConfidenceGateOptions {
    /** Minimum confidence in [0, 1]. Decisions strictly below this fail. */
    min: number;
    /**
     * Custom signal extractor. Defaults to `ctx.signals?.confidence`. Useful
     * if you want to compute confidence from somewhere else (e.g. a typed
     * field on `ctx.event`).
     */
    signal?: (ctx: GateContext) => number | undefined;
    /**
     * Behavior when no confidence signal is supplied.
     *
     * - `false` (default): fail open. A confidence gate that denies when
     *   confidence is unknown would block every legitimate call from
     *   adapters that haven't been wired to emit confidence yet.
     * - `true`: fail closed. Denies with `code: "confidence_too_low"` and
     *   the default (or custom) escalation event. Use in production once
     *   you're sure adapters are reliably populating the signal.
     */
    failClosed?: boolean;
    /**
     * Optional escalation event surfaced when the gate denies. Receives the
     * actual score so you can render it in the UI. If omitted, a generic
     * `hitl.card` is built describing the breach. Called with `-1` when
     * `failClosed` triggers due to a missing signal.
     */
    escalate?: (ctx: GateContext, score: number) => HitlEvent;
}
/**
 * Block when model confidence (or any 0..1 score the adapter forwards as
 * `signals.confidence`) is below `min`. Pairs naturally with the
 * `scale.ai_generation` and `tool.call` primitives, both of which carry
 * a confidence signal.
 */
declare function confidenceGate(opts: ConfidenceGateOptions): Gate;

interface CostGateOptions {
    /** Maximum dollars per call (or, with `cumulative`, per window). */
    maxUsd: number;
    /**
     * Custom signal extractor. Defaults to `ctx.signals?.costUsd`. Useful
     * when cost depends on the resolved tool args, not just static signals.
     */
    signal?: (ctx: GateContext) => number | undefined;
    /**
     * Behavior when no cost signal is supplied.
     *
     * - `false` (default): fail open. The gate cannot evaluate without a
     *   signal, and silently passing keeps unwired adapters working.
     * - `true`: fail closed. Denies with `code: "cost_exceeded"` and an
     *   escalation event. Use once your adapters reliably emit cost.
     */
    failClosed?: boolean;
    /**
     * If set, accumulate cost over a sliding window (per `key`) and deny
     * when the running total would exceed `maxUsd`. Without `cumulative`,
     * the gate evaluates each decision independently.
     */
    cumulative?: {
        store: GateStore;
        key: (ctx: GateContext) => string;
        windowSec: number;
    };
    escalate?: (ctx: GateContext, projectedUsd: number) => HitlEvent;
}
/**
 * Block when projected cost exceeds `maxUsd`. Surfaces the projected
 * dollar amount in the deny reason and (default) escalation event.
 */
declare function costGate(opts: CostGateOptions): Gate;

interface ScopeGateOptions {
    /**
     * Required scope strings. If set, every entry in `ctx.signals.scope`
     * must be present in `allowed`, OR the call must use no scopes that
     * fall outside `allowed`. Empty signal scopes are treated as no scope.
     */
    allowed?: string[];
    /**
     * Forbidden scope strings. If any of these appears in
     * `ctx.signals.scope`, the gate denies. Useful for blanket bans
     * (e.g. `["delete:*"]`).
     */
    denied?: string[];
    /**
     * Escape hatch for complex policies. If provided, this function fully
     * replaces the allowed/denied logic — return your own GateDecision.
     */
    policy?: (ctx: GateContext) => GateDecision | Promise<GateDecision>;
    escalate?: (ctx: GateContext, missing: string[]) => HitlEvent;
}
/**
 * Block based on simple allow/deny lists over `ctx.signals.scope`. For
 * richer rules (regex, OPA-style policies, dynamic per-user grants) pass
 * `policy` and ignore the lists.
 *
 * Named `scopeGate` rather than `policyGate` to keep semantics small —
 * the kit owns scope-level checks and stays out of the
 * org-policy / OPA / rego ecosystem.
 */
declare function scopeGate(opts: ScopeGateOptions): Gate;

interface ApprovalChainGateOptions {
    store: GateStore;
    /** Stable key per chain (usually thread / run id). */
    key: (ctx: GateContext) => string;
    /** Approver ids, ordered if `ordered` is true. */
    approvers: string[];
    /** Require approvals in the order given. Default false. */
    ordered?: boolean;
    /**
     * Decides whether the current ctx represents an approval submission.
     * Return `{ approverId }` to record an approval; return `null` to
     * indicate this is a normal request that should be evaluated against
     * existing state.
     */
    isApproval?: (ctx: GateContext) => {
        approverId?: string;
    } | null;
    escalate?: (ctx: GateContext, state: {
        approved: string[];
        remaining: string[];
    }) => HitlEvent;
}
/**
 * Multi-approver workflow. Maintains a record of which approvers have
 * signed off, returning `allow: true` only once every approver in
 * `approvers` has signed.
 *
 * Designed for the "regulated workflow" use case: at least N humans must
 * approve before a tool call goes through. `ordered: true` enforces a
 * canonical sign-off order (useful for legal/finance review chains).
 */
declare function approvalChainGate(opts: ApprovalChainGateOptions): Gate;

interface RateLimitGateOptions {
    store: GateStore;
    key: (ctx: GateContext) => string;
    /** Max calls per window. */
    max: number;
    /** Window length in seconds. */
    windowSec: number;
    escalate?: (ctx: GateContext, retryAfterSec: number) => HitlEvent;
}
/**
 * Token-bucket-shaped rate limit. Increments a per-key counter on every
 * call; the counter expires after `windowSec`. Once the counter exceeds
 * `max`, the gate denies until the window rolls over.
 *
 * For multi-process deployments back this with a Redis/Upstash store.
 * The default `inMemoryStore()` is per-process.
 */
declare function rateLimitGate(opts: RateLimitGateOptions): Gate;

export { type ApprovalChainGateOptions, type ConfidenceGateOptions, type CostGateOptions, type Gate, type GateAllow, type GateCode, type GateContext, type GateDecision, type GateDeny, type GateSignals, type GateStore, type GateStoreFactory, type RateLimitGateOptions, type ScopeGateOptions, approvalChainGate, composeGates, confidenceGate, costGate, inMemoryStore, rateLimitGate, scopeGate };
