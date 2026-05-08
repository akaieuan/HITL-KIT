import { describe, expect, it } from "vitest";
import { approvalChainGate } from "../gates/approval-chain";
import { inMemoryStore } from "../store";
import type { GateContext } from "../types";

describe("approvalChainGate", () => {
  it("denies before any approvals are recorded", async () => {
    const store = inMemoryStore();
    const gate = approvalChainGate({
      store,
      key: () => "run-1",
      approvers: ["alice", "bob"],
    });
    const decision = await gate({ adapter: "core" });
    expect(decision.allow).toBe(false);
    if (!decision.allow) expect(decision.code).toBe("approval_required");
  });

  it("allows after every approver has signed (unordered)", async () => {
    const store = inMemoryStore();
    const gate = approvalChainGate({
      store,
      key: () => "run-1",
      approvers: ["alice", "bob"],
      isApproval: (ctx) => {
        const id = (ctx.signals?.userId as string | undefined) ?? undefined;
        return id ? { approverId: id } : null;
      },
    });

    // bob signs first (allowed in unordered)
    let d = await gate({ adapter: "core", signals: { userId: "bob" } });
    expect(d.allow).toBe(false);

    // alice signs
    d = await gate({ adapter: "core", signals: { userId: "alice" } });
    expect(d.allow).toBe(true);
  });

  it("requires sequential signing in ordered mode", async () => {
    const store = inMemoryStore();
    const gate = approvalChainGate({
      store,
      key: () => "run-1",
      approvers: ["alice", "bob"],
      ordered: true,
      isApproval: (ctx) => {
        const id = (ctx.signals?.userId as string | undefined) ?? undefined;
        return id ? { approverId: id } : null;
      },
    });

    // bob tries to sign first — out of order
    const oop = await gate({ adapter: "core", signals: { userId: "bob" } });
    expect(oop.allow).toBe(false);

    // alice signs first (correct)
    let d = await gate({ adapter: "core", signals: { userId: "alice" } });
    expect(d.allow).toBe(false); // still pending bob

    // bob signs second
    d = await gate({ adapter: "core", signals: { userId: "bob" } });
    expect(d.allow).toBe(true);
  });

  it("rejects an approval from an unknown approver", async () => {
    const store = inMemoryStore();
    const gate = approvalChainGate({
      store,
      key: () => "run-1",
      approvers: ["alice"],
      isApproval: (ctx: GateContext) => {
        const id = (ctx.signals?.userId as string | undefined) ?? undefined;
        return id ? { approverId: id } : null;
      },
    });
    const d = await gate({ adapter: "core", signals: { userId: "carol" } });
    expect(d.allow).toBe(false);
    if (!d.allow) expect(d.reason).toMatch(/unknown approver/);
  });
});
