import { describe, expect, it } from "vitest";
import * as api from "../index";

/**
 * Public runtime export-name snapshot for @hitl-kit/ui.
 *
 * If a primitive, fixture or helper is added, removed, or renamed, this
 * snapshot fails and the change must be made on purpose (`pnpm test -u`).
 * The full type surface is snapshotted in api-surface/ui.d.ts via `pnpm api:check`.
 */
describe("@hitl-kit/ui public API", () => {
  it("exports a stable, sorted set of runtime names", () => {
    const names = Object.keys(api).sort();
    expect(names).toMatchSnapshot();
  });

  it("ships one component per core event kind", async () => {
    const { HITL_EVENT_KINDS } = await import("@hitl-kit/core");
    const byKind: Record<string, keyof typeof api> = {
      "hitl.card": "HitlCard",
      "subagent.status": "SubagentStatusCard",
      "trace.mini": "MiniTrace",
      "scale.ai_generation": "AiGenerationScale",
      "chips.context": "ContextChips",
      "qa.flow": "QAFlow",
      "agent.writing": "WritingAgent",
      "agent.research": "ResearchAgent",
      "batch.queue": "BatchQueue",
      "result.search": "SearchResultCard",
      "approval.binary": "ApproveRejectRow",
      "result.diff": "DiffResult",
      "result.citation": "CitationResult",
      "plan.editable": "EditablePlan",
      "tool.call": "ToolCallPreview",
      "evidence.pointer": "EvidencePointer",
    };
    for (const kind of HITL_EVENT_KINDS) {
      expect(byKind[kind], `no component mapped for ${kind}`).toBeDefined();
      expect(typeof api[byKind[kind]!]).toBe("function");
    }
  });
});
