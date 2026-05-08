import { describe, expect, it } from "vitest";
import {
  HitlEventSchema,
  HITL_EVENT_KINDS,
  type HitlEvent,
  type HitlEventKind,
} from "../events";

/**
 * One canonical valid example for every event kind. Keeping this in one
 * place gives us a "frozen schema" net — if a future change breaks the
 * parse, this file fails first.
 */
const FIXTURES: Record<HitlEventKind, HitlEvent> = {
  "hitl.card": {
    kind: "hitl.card",
    variant: "review",
    title: "Citation needs verification",
    subtitle: "IPCC 2023 · p. 12",
    steps: [
      { label: "Flagged by agent", done: true },
      { label: "Confirm", done: false },
    ],
    runLabel: "Confirm & continue",
  },
  "subagent.status": {
    kind: "subagent.status",
    status: "running",
    label: "Research Agent",
    detail: "Climate Policy workspace",
  },
  "trace.mini": {
    kind: "trace.mini",
    steps: [
      { type: "thought", label: "I should look up X" },
      { type: "action", label: "search the docs" },
      { type: "result", label: "found the right reference" },
    ],
  },
  "scale.ai_generation": {
    kind: "scale.ai_generation",
    value: 3,
    labels: ["Human", "Mostly human", "Mixed", "Mostly AI", "AI"],
  },
  "chips.context": {
    kind: "chips.context",
    items: [
      { id: "c1", label: "AR6 finding", color: "violet" },
      { id: "c2", label: "policy.pdf", color: "blue" },
    ],
  },
  "qa.flow": {
    kind: "qa.flow",
    questions: [
      {
        kind: "single",
        id: "q1",
        prompt: "Which approach?",
        options: ["A", "B"],
      },
      {
        kind: "multi",
        id: "q2",
        prompt: "Which factors?",
        options: ["x", "y", "z"],
      },
      { kind: "text", id: "q3", prompt: "Any notes?" },
    ],
  },
  "agent.writing": {
    kind: "agent.writing",
    status: "running",
    title: "Draft 2.1",
    target: "Section 3",
    wordRange: "300-500",
    evidence: ["finding-a", "finding-b"],
  },
  "agent.research": {
    kind: "agent.research",
    mode: "create",
    config: { topic: "carbon pricing", depth: "deep" },
  },
  "batch.queue": {
    kind: "batch.queue",
    items: [
      { id: "b1", label: "Search: x", kind: "search" },
      { id: "b2", label: "Write: y", kind: "write" },
    ],
  },
  "result.search": {
    kind: "result.search",
    rank: 1,
    title: "A paper",
    authors: "Smith et al.",
    venue: "Nature",
    year: 2024,
    snippet: "...",
    relevance: 0.9,
    cites: 14,
  },
  "approval.binary": {
    kind: "approval.binary",
    label: "Approve citation",
    state: "pending",
  },
  "result.diff": {
    kind: "result.diff",
    title: "Tighten intro",
    hunks: [
      {
        before: "It seems X.",
        after: "X.",
      },
    ],
  },
  "result.citation": {
    kind: "result.citation",
    claim: "95% of pilots fail.",
    source: {
      title: "GenAI Divide",
      authors: "Challapally et al.",
      year: 2025,
    },
  },
  "plan.editable": {
    kind: "plan.editable",
    title: "Draft summary",
    steps: [
      { id: "scope", label: "Define scope", locked: true },
      { id: "search", label: "Search sources" },
    ],
  },
  "tool.call": {
    kind: "tool.call",
    toolName: "send_email",
    args: { to: "user@example.com", subject: "hi" },
    signals: { confidence: 0.92, costUsd: 0.001 },
  },
};

describe("HitlEventSchema", () => {
  it("includes every kind in HITL_EVENT_KINDS exactly once", () => {
    const counts = HITL_EVENT_KINDS.reduce<Record<string, number>>(
      (acc, k) => {
        acc[k] = (acc[k] ?? 0) + 1;
        return acc;
      },
      {},
    );
    for (const [k, n] of Object.entries(counts)) {
      expect(n, `kind ${k} should appear exactly once in HITL_EVENT_KINDS`).toBe(1);
    }
    expect(HITL_EVENT_KINDS.length).toBe(15);
  });

  it("parses one valid example per kind (round-trip net)", () => {
    for (const kind of HITL_EVENT_KINDS) {
      const fixture = FIXTURES[kind];
      const parsed = HitlEventSchema.safeParse(fixture);
      expect(parsed.success, `kind ${kind} failed to parse`).toBe(true);
      if (parsed.success) {
        expect(parsed.data.kind).toBe(kind);
      }
    }
  });

  it("rejects an unknown kind", () => {
    const result = HitlEventSchema.safeParse({
      kind: "not.a.real.kind",
      foo: "bar",
    });
    expect(result.success).toBe(false);
  });

  it("rejects an event missing required fields", () => {
    const result = HitlEventSchema.safeParse({
      kind: "hitl.card",
      // missing every other required field
    });
    expect(result.success).toBe(false);
  });

  it("FIXTURES has an entry for every kind (keeps fixtures in sync)", () => {
    for (const kind of HITL_EVENT_KINDS) {
      expect(FIXTURES[kind], `missing fixture for ${kind}`).toBeDefined();
    }
  });
});
