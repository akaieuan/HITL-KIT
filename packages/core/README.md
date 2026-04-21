# @hitl-kit/core

> Zod event schemas for human-in-the-loop AI primitives.

Framework-agnostic protocol shared by every HITL Kit adapter
(`@hitl-kit/langgraph`, `@hitl-kit/ai-sdk`, `@hitl-kit/mcp`) and
by `<HitlEventRenderer />` in `@hitl-kit/react`.

```bash
pnpm add @hitl-kit/core
```

## The 11 primitive events

```ts
import { HitlEventSchema, type HitlEvent } from "@hitl-kit/core";

const raw = await toolCall.result(); // anything
const parsed = HitlEventSchema.safeParse(raw);
if (!parsed.success) throw new Error("invalid HITL event");

const event: HitlEvent = parsed.data;
switch (event.kind) {
  case "hitl.card":          /* Interrupt Card        */ break;
  case "subagent.status":    /* Subagent Status       */ break;
  case "trace.mini":         /* MiniTrace             */ break;
  case "scale.ai_generation":/* AI Generation Scale   */ break;
  case "chips.context":      /* Context Chips         */ break;
  case "qa.flow":            /* QA Flow               */ break;
  case "agent.writing":      /* Writing Agent         */ break;
  case "agent.research":     /* Research Agent        */ break;
  case "batch.queue":        /* Batch Queue           */ break;
  case "result.search":      /* Search Result Card    */ break;
  case "approval.binary":    /* Approve / Reject Row  */ break;
}
```

Every event is a discriminated union member on `kind`. TypeScript
narrows inside a switch, no casting needed.

## Why schemas

- **Type safety** across the agent → UI boundary
- **Runtime validation** so malformed tool-call output fails fast
- **Framework-agnostic**: any agent (LangGraph, Vercel AI SDK, Claude
  Agent SDK, OpenAI Agents, Mastra, LangChain, vanilla) that can
  produce JSON matching these schemas is instantly compatible with
  `@hitl-kit/react` and all HITL Kit adapters

## Standalone schemas

Every event is also exported individually so you can build narrow
adapters:

```ts
import { HitlCardEventSchema, type HitlCardEvent } from "@hitl-kit/core";
```

## Part of HITL Kit

- **Components** → install via shadcn CLI from [hitlkit.dev/registry](https://www.hitlkit.dev/registry)
- **Renderer** → [@hitl-kit/react](../react)
- **Paper** → [hitlkit.dev/paper](https://www.hitlkit.dev/paper)
- **Repo** → [github.com/akaieuan/HITL-KIT](https://github.com/akaieuan/HITL-KIT)

MIT © Ieuan King.
