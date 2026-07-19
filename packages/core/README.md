# @hitl-kit/core

> Zod event schemas for human-in-the-loop AI primitives.

Framework-agnostic protocol shared by every HITL Kit adapter
(`@hitl-kit/langgraph`, `@hitl-kit/ai-sdk`, `@hitl-kit/mcp`) and
by `<HitlEventRenderer />` in `@hitl-kit/react`.

```bash
pnpm add @hitl-kit/core
```

## The 15 primitive events

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
  case "result.diff":        /* Diff Result (v0.6a)   */ break;
  case "result.citation":    /* Citation Result       */ break;
  case "plan.editable":      /* Editable Plan         */ break;
  case "tool.call":          /* Tool Call Preview     */ break;
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

```ts check
import { HitlCardEventSchema, type HitlCardEvent } from "@hitl-kit/core";
```

## Part of HITL Kit

- **Components** → install via shadcn CLI from [hitlkit.dev/registry](https://www.hitlkit.dev/registry)
- **Renderer** → [@hitl-kit/react](../react)
- **Paper** → [hitlkit.dev/paper](https://www.hitlkit.dev/paper)
- **Repo** → [github.com/akaieuan/HITL-KIT](https://github.com/akaieuan/HITL-KIT)

## License

MIT License

Copyright (c) 2023-2026 Ubik, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
