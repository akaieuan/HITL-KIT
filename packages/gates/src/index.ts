export type {
  Gate,
  GateAllow,
  GateCode,
  GateContext,
  GateDecision,
  GateDeny,
  GateSignals,
  GateStore,
  GateStoreFactory,
} from "./types";
export { composeGates } from "./compose";
export { inMemoryStore } from "./store";
export { confidenceGate, type ConfidenceGateOptions } from "./gates/confidence";
export { costGate, type CostGateOptions } from "./gates/cost";
export { scopeGate, type ScopeGateOptions } from "./gates/scope";
export {
  approvalChainGate,
  type ApprovalChainGateOptions,
} from "./gates/approval-chain";
export { rateLimitGate, type RateLimitGateOptions } from "./gates/rate-limit";

// Convenience re-export so single-import consumers get HitlEvent types.
export type { HitlEvent } from "@hitl-kit/core";
