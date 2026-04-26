# @hitl-kit/ai-sdk

> Vercel AI SDK adapter for [HITL Kit](https://hitlkit.dev). Typed `tool()` wrappers that return schema-conformant HITL events, so `<HitlEventRenderer />` can dispatch them client-side.

```bash
pnpm add @hitl-kit/core @hitl-kit/react @hitl-kit/ai-sdk ai zod
```

`ai` and `zod` are peer dependencies; the versions you install are up to you (AI SDK v4+, Zod v3+).

---

## Why this adapter exists

Unlike LangGraph, Vercel AI SDK doesn't have a native `interrupt()` /
`Command` primitive. The canonical way for an agent to "ask the human
something" in AI SDK is to call a tool. This adapter gives you 15
typed `tool()` wrappers — one per HITL Kit primitive — whose input
schemas mirror the primitive's event shape and whose return values are
validated HITL events ready to pass to `<HitlEventRenderer />`.

Flow:

1. Agent calls a HITL Kit tool
2. Tool returns a validated `HitlEvent` as the tool result
3. Your UI filters tool results and renders them via `<HitlEventRenderer />`
4. Human acts on the rendered primitive
5. Your app sends the decision back to the agent as a follow-up user message (AI SDK's canonical resume pattern)

---

## Usage

### Server: add the tools to a `generateText` or `streamText` call

```ts
import { generateText } from "ai";
import { hitlCardTool } from "@hitl-kit/ai-sdk";

const result = await generateText({
  model,
  messages,
  tools: {
    requestHumanReview: hitlCardTool({
      description:
        "Request human review of a citation before writing to the draft.",
    }),
  },
});
// If the model calls requestHumanReview, the tool result is a
// validated HitlCardEvent.
```

### Client: render tool results via `<HitlEventRenderer />`

```tsx
import { HitlEventRenderer } from "@hitl-kit/react";
import { isHitlToolResult } from "@hitl-kit/ai-sdk";
import { HitlCard } from "@/components/hitl/HitlCard";

// inside your chat UI, after streaming:
toolResults.filter(isHitlToolResult).map((r) => (
  <HitlEventRenderer
    key={r.result.id ?? r.result.kind}
    event={r.result}
    registry={{
      "hitl.card": (ev) => <HitlCard config={...} />,
    }}
  />
));
```

### Or just import everything at once

```ts
import { generateText } from "ai";
import { allHitlTools } from "@hitl-kit/ai-sdk";

await generateText({ model, messages, tools: allHitlTools });
```

---

## Tools (one per primitive)

| Factory | Event kind | Returns |
|---|---|---|
| `hitlCardTool` | `hitl.card` | `HitlCardEvent` |
| `subagentStatusTool` | `subagent.status` | `SubagentStatusEvent` |
| `miniTraceTool` | `trace.mini` | `MiniTraceEvent` |
| `aiGenerationScaleTool` | `scale.ai_generation` | `AiGenerationScaleEvent` |
| `contextChipsTool` | `chips.context` | `ContextChipsEvent` |
| `qaFlowTool` | `qa.flow` | `QAFlowEvent` |
| `writingAgentTool` | `agent.writing` | `WritingAgentEvent` |
| `researchAgentTool` | `agent.research` | `ResearchAgentEvent` |
| `batchQueueTool` | `batch.queue` | `BatchQueueEvent` |
| `searchResultTool` | `result.search` | `SearchResultEvent` |
| `approveRejectTool` | `approval.binary` | `ApproveRejectEvent` |
| `diffResultTool` *(v0.6a)* | `result.diff` | `DiffResultEvent` |
| `citationResultTool` *(v0.6a)* | `result.citation` | `CitationResultEvent` |
| `editablePlanTool` *(v0.6a)* | `plan.editable` | `EditablePlanEvent` |
| `toolCallPreviewTool` *(v0.6a)* | `tool.call` | `ToolCallPreviewEvent` |

Each factory accepts `{ description?: string }` so you can shape the
agent's mental model of when to call the tool. The validation happens
inside `execute` via the core Zod schema — malformed tool calls throw
before the result ever reaches the UI.

---

## Resume pattern

AI SDK has no `Command({ resume })`. When the human acts on a
primitive, your app sends a new user message back to the agent with
the result embedded:

```tsx
const handleApproval = (approved: boolean) => {
  append({
    role: "user",
    content: approved
      ? "Approved. Continue and write to the draft."
      : "Rejected. Do not write the citation.",
  });
};
```

The agent reads the new message, understands the decision, and
continues. Less elegant than LangGraph's typed resume, but works
with any AI SDK agent without special infrastructure.

---

## Part of HITL Kit

- **Schemas** → [@hitl-kit/core](../core)
- **Renderer** → [@hitl-kit/react](../react)
- **LangGraph adapter** (different pattern, native interrupts) → [@hitl-kit/langgraph](../langgraph)
- **Components** → [hitlkit.dev/registry](https://www.hitlkit.dev/registry)
- **Paper** → [hitlkit.dev/paper](https://www.hitlkit.dev/paper)

MIT © Ieuan King.
