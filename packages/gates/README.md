# @hitl-kit/gates

> Composable decision gates for HITL Kit. Pure functions that wrap any adapter's emit point and decide allow / deny / escalate.

```bash
pnpm add @hitl-kit/core @hitl-kit/gates
```

`@hitl-kit/core` is a peer; the version you install is up to you.

---

## Why gates exist

The first 15 HITL primitives are *UI*. They render whatever the agent emits. That's good for showing humans what's happening, but it doesn't change what the agent is allowed to do.

A gate is the missing decision layer. It evaluates *before* the adapter surfaces an event:

- Block when model confidence is below a threshold
- Block when projected cost exceeds budget
- Block when the agent reaches into a scope it shouldn't
- Require N approvers before a tool call goes through
- Throttle calls per window

Gates are pure functions — they don't import React, they don't render, they don't know about LangGraph or AI SDK. Adapter integration is a thin wrapper (`withGates` in each adapter package) that runs the gates and decides what to do with a deny: throw, return error, or surface an `escalate` event so the human can override.

---

## The five gates

```ts check
import {
  composeGates,
  confidenceGate,
  costGate,
  scopeGate,
  approvalChainGate,
  rateLimitGate,
  inMemoryStore,
} from "@hitl-kit/gates";

const store = inMemoryStore();

const gates = composeGates([
  confidenceGate({ min: 0.85 }),
  costGate({ maxUsd: 0.10 }),
  scopeGate({ allowed: ["read:files", "read:web"] }),
  rateLimitGate({ store, key: (ctx) => ctx.signals?.userId ?? "anon", max: 30, windowSec: 60 }),
  approvalChainGate({
    store,
    key: (ctx) => ctx.signals?.userId ?? "anon",
    approvers: ["alice", "bob"],
    ordered: false,
  }),
]);
```

`composeGates` runs the array sequentially; first deny wins.

---

## Gate API

```ts
type Gate = (ctx: GateContext) => Promise<GateDecision> | GateDecision;

interface GateContext {
  event?: HitlEvent;
  input?: unknown;
  signals?: GateSignals;
  adapter: "langgraph" | "ai-sdk" | "mcp" | "core";
}

type GateDecision =
  | { allow: true;  meta?: Record<string, unknown> }
  | { allow: false; reason: string; code: GateCode; escalate?: HitlEvent; meta?: Record<string, unknown> };
```

When `allow: false` and `escalate` is set, the adapter surfaces the escalation event to the human — render it via `<HitlEventRenderer />` and let the user override. This is the killer pattern: the same render pipeline handles happy-path and blocked-path with no special code.

---

## Storage

Stateful gates (`rateLimitGate`, `approvalChainGate`, optional cumulative `costGate`) need a `GateStore`. Ship `inMemoryStore()` is single-process. For production:

```ts
const redisStore: GateStore = {
  async get(key) { /* … */ },
  async set(key, value, ttlSec) { /* … */ },
  async incr(key, ttlSec) { /* … */ },
  async delete(key) { /* … */ },
};
```

Plug it into the gate factories that take a `store` field. No other changes needed.

---

## Adapter integration

Each adapter exports a `withGates` wrapper:

```ts
// LangGraph
import { withGates } from "@hitl-kit/langgraph";
const gated = await withGates(payload, [confidenceGate({ min: 0.85 })], { signals });
const approval = interrupt(gated);

// AI SDK
import { withGates } from "@hitl-kit/ai-sdk";
const tool = withGates(hitlCardTool(), [costGate({ maxUsd: 0.05 })], { signals });

// MCP — gates configured at server creation time
import { createHitlKitServer } from "@hitl-kit/mcp";
const server = createHitlKitServer({ gates: [rateLimitGate({ /* … */ })], onDeny: "escalate" });
```

See each adapter's README for full integration details.

---

## Part of HITL Kit

- **Schemas** → [@hitl-kit/core](../core)
- **Renderer** → [@hitl-kit/react](../react)
- **LangGraph adapter** → [@hitl-kit/langgraph](../langgraph)
- **AI SDK adapter** → [@hitl-kit/ai-sdk](../ai-sdk)
- **MCP adapter** → [@hitl-kit/mcp](../mcp)
- **Paper** → [hitlkit.dev/paper](https://www.hitlkit.dev/paper)

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
