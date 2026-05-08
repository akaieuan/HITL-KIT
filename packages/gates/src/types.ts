import type { HitlEvent } from "@hitl-kit/core";

/**
 * Stable identifier for the reason a gate denied. Useful for analytics
 * and downstream logic that switches on a specific failure mode.
 */
export type GateCode =
  | "confidence_too_low"
  | "cost_exceeded"
  | "scope_violation"
  | "approval_required"
  | "rate_limited";

/**
 * Free-form signals an adapter forwards into a gate. Adapters (LangGraph,
 * AI SDK, MCP) populate these from their environment — model logprobs,
 * cost estimators, tenant scope strings, etc. Gates read what they need
 * and ignore the rest.
 */
export interface GateSignals {
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
 * event the adapter is about to surface, optional structured input, and
 * the signals adapter forwarded.
 */
export interface GateContext {
  event?: HitlEvent;
  input?: unknown;
  signals?: GateSignals;
  adapter: "langgraph" | "ai-sdk" | "mcp" | "core";
}

/**
 * Allow result. `meta` is opaque, surfaces in adapter logs.
 */
export interface GateAllow {
  allow: true;
  meta?: Record<string, unknown>;
}

/**
 * Deny result. `escalate`, when set, is the HitlEvent the adapter should
 * surface to a human instead of (or in addition to) erroring out. This is
 * the "block but ask the human to override" pattern.
 */
export interface GateDeny {
  allow: false;
  reason: string;
  code: GateCode;
  escalate?: HitlEvent;
  meta?: Record<string, unknown>;
}

export type GateDecision = GateAllow | GateDeny;

/** A gate is a pure function from context to decision. May be async. */
export type Gate = (
  ctx: GateContext,
) => Promise<GateDecision> | GateDecision;

/**
 * Pluggable storage for gates that need to persist counters or
 * sign-off state across decisions (rateLimitGate, approvalChainGate,
 * cumulative costGate). The default `inMemoryStore()` is single-process;
 * production deployments should provide a Redis/Upstash/database adapter.
 */
export interface GateStore {
  get<T = unknown>(key: string): Promise<T | undefined>;
  set<T = unknown>(key: string, value: T, ttlSec?: number): Promise<void>;
  incr(key: string, ttlSec?: number): Promise<number>;
  delete(key: string): Promise<void>;
}

/** Convenience type for gate factories that need a writable store. */
export type GateStoreFactory = () => GateStore;
