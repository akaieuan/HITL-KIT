# @hitl-kit/langgraph

> LangGraph adapter for [HITL Kit](https://hitlkit.dev). Emit schema-conformant HITL events from LangGraph `interrupt()` nodes and resume with typed `Command` payloads.

```bash
pnpm add @hitl-kit/core @hitl-kit/langgraph @langchain/langgraph
```

`@langchain/langgraph` is a peer dependency; the version you install is up to you.

---

## Why LangGraph first

LangGraph is the only mainstream TS agent framework with a native
`interrupt()` / `Command({ resume })` primitive explicitly designed for
human checkpoints. That primitive maps 1:1 to the **Assist-Not-Complete**
thesis: pause the graph, wait for structured human input, resume.

The adapter is a thin translation layer:

- **Emit side**: helpers like `createHitlCardInterrupt({...})` produce a
  validated `HitlInterruptPayload` that wraps a Zod-checked `HitlEvent`
  from `@hitl-kit/core`. You pass the payload directly into
  `interrupt()`.
- **Receive side**: `isHitlInterrupt(value)` is a type guard you use in
  your UI layer to route to `<HitlEventRenderer />` from `@hitl-kit/react`.

Because the `event` field is the exact shape `<HitlEventRenderer />`
expects, no manual mapping is needed.

---

## Usage

### Emit a HITL interrupt inside a graph node

```ts
import { StateGraph } from "@langchain/langgraph";
import { interrupt } from "@langchain/langgraph";
import { createHitlCardInterrupt } from "@hitl-kit/langgraph";

const graph = new StateGraph(State)
  .addNode("review-citation", async (state) => {
    const approval = interrupt(
      createHitlCardInterrupt({
        variant: "review",
        title: "Citation needs verification",
        subtitle: "IPCC 2023 · p. 12",
        steps: [
          { label: "Flagged by agent", done: true },
          { label: "Confirm", done: false },
        ],
        runLabel: "Confirm & continue",
      }),
    );
    // Graph pauses here.
    // When the UI sends `Command({ resume: { approved: true } })`,
    // `approval` becomes `{ approved: true }` and execution continues.
    return { ...state, approved: approval.approved };
  });
```

### Render the interrupt on the client

```tsx
import { HitlEventRenderer } from "@hitl-kit/react";
import { isHitlInterrupt } from "@hitl-kit/langgraph";
import { HitlCard } from "@/components/hitl/HitlCard";

function AgentRunner({ interruptValue, onResume }) {
  if (!isHitlInterrupt(interruptValue)) return null;

  return (
    <HitlEventRenderer
      event={interruptValue.event}
      registry={{
        "hitl.card": (ev) => (
          <HitlCard
            config={{
              id: ev.id ?? "default",
              kind: ev.variant,
              title: ev.title,
              subtitle: ev.subtitle,
              steps: ev.steps,
              runLabel: ev.runLabel,
              editPlaceholder: ev.editPlaceholder,
              openTab: "human",
            }}
          />
        ),
      }}
      onAction={(action) => onResume(action)}
    />
  );
}
```

### Resume the graph

On user approval, POST a resume command back to your graph runner:

```ts
await graph.invoke(
  new Command({ resume: { approved: true } }),
  { configurable: { thread_id: threadId } },
);
```

---

## Helpers (one per primitive)

Every HITL Kit primitive has a matching interrupt helper:

| Helper | Event kind |
|---|---|
| `createHitlCardInterrupt` | `hitl.card` |
| `createSubagentStatusInterrupt` | `subagent.status` |
| `createMiniTraceInterrupt` | `trace.mini` |
| `createAiGenerationScaleInterrupt` | `scale.ai_generation` |
| `createContextChipsInterrupt` | `chips.context` |
| `createQAFlowInterrupt` | `qa.flow` |
| `createWritingAgentInterrupt` | `agent.writing` |
| `createResearchAgentInterrupt` | `agent.research` |
| `createBatchQueueInterrupt` | `batch.queue` |
| `createSearchResultInterrupt` | `result.search` |
| `createApproveRejectInterrupt` | `approval.binary` |

Each helper validates the payload against the corresponding Zod schema
from `@hitl-kit/core` and throws synchronously if the event is malformed.
No more shipping a broken event to the UI.

---

## Part of HITL Kit

- **Schemas** → [@hitl-kit/core](../core)
- **Renderer** → [@hitl-kit/react](../react)
- **Components** → [hitlkit.dev/registry](https://www.hitlkit.dev/registry)
- **Paper** → [hitlkit.dev/paper](https://www.hitlkit.dev/paper)
- **Live demo** (coming with v0.4) → `apps/demo-langgraph`

MIT © Ieuan King.
