import type { HitlEvent } from "@hitl-kit/core";
import type { Gate, GateContext, GateDecision, GateStore } from "../types";

export interface ApprovalChainGateOptions {
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
  isApproval?: (ctx: GateContext) => { approverId?: string } | null;
  escalate?: (
    ctx: GateContext,
    state: { approved: string[]; remaining: string[] },
  ) => HitlEvent;
}

interface ApprovalChainState {
  approved: string[];
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
export function approvalChainGate(opts: ApprovalChainGateOptions): Gate {
  return async (ctx): Promise<GateDecision> => {
    const k = opts.key(ctx);
    const state = (await opts.store.get<ApprovalChainState>(k)) ?? {
      approved: [],
    };

    // Detect approval submission and record it.
    const submission = opts.isApproval?.(ctx);
    if (submission?.approverId) {
      const { approverId } = submission;
      if (!opts.approvers.includes(approverId)) {
        return {
          allow: false,
          code: "approval_required",
          reason: `unknown approver: ${approverId}`,
        };
      }
      if (opts.ordered) {
        const expectedIdx = state.approved.length;
        const expected = opts.approvers[expectedIdx];
        if (approverId !== expected) {
          return {
            allow: false,
            code: "approval_required",
            reason: `expected approver ${expected ?? "(none)"} next, got ${approverId}`,
          };
        }
      }
      if (!state.approved.includes(approverId)) {
        state.approved.push(approverId);
        await opts.store.set(k, state);
      }
    }

    const remaining = opts.approvers.filter((a) => !state.approved.includes(a));
    if (remaining.length === 0) {
      return {
        allow: true,
        meta: { approved: state.approved },
      };
    }

    return {
      allow: false,
      code: "approval_required",
      reason: `awaiting approvals: ${remaining.join(", ")}`,
      escalate: opts.escalate
        ? opts.escalate(ctx, { approved: state.approved, remaining })
        : defaultEscalate(state.approved, remaining),
      meta: { approved: state.approved, remaining },
    };
  };
}

function defaultEscalate(approved: string[], remaining: string[]): HitlEvent {
  return {
    kind: "hitl.card",
    variant: "review",
    title: "Awaiting approvals",
    subtitle:
      approved.length > 0
        ? `Approved: ${approved.join(", ")} · pending: ${remaining.join(", ")}`
        : `Pending: ${remaining.join(", ")}`,
    steps: [
      ...approved.map((a) => ({ label: `Approved by ${a}`, done: true })),
      ...remaining.map((a) => ({ label: `Awaiting ${a}`, done: false })),
    ],
    runLabel: "Submit approval",
  };
}
