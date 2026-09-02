<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./docs/banner.svg">
  <source media="(prefers-color-scheme: light)" srcset="./docs/banner.svg">
  <img src="./docs/banner.svg" alt="HITL Kit — Human-in-the-loop AI, measured properly" width="100%">
</picture>

# HITL Kit

> Human-in-the-loop primitives for agentic UIs. Signals in, decisions by people.

An open protocol for the moment an agent hands control back to a human — typed
events, composable gates, and the UI primitives that render them. Every
primitive embodies a claim from
[An AI Measurement Problem](https://www.akaoss.dev/paper); if it can't be tied
to a claim the paper defends, it doesn't ship.

[**akaoss.dev**](https://www.akaoss.dev) ·
[**components**](https://www.akaoss.dev/components) ·
[**registry**](https://www.akaoss.dev/registry) ·
[**paper**](https://www.akaoss.dev/paper) ·
[**research**](https://www.akaoss.dev/research)

## What is HITL Kit?

- **Typed HITL events** — a Zod-schema protocol for approvals, interrupts,
  traces, evidence, and generation-scale changes. Framework-agnostic; the
  schemas are the spec. Sixteen event kinds.
- **Typed actions** — what the human decided flows back as one discriminated
  object (`approve` / `reject` / `abstain` / `undo` / …), shared across every
  surface. Labels are presentation; kinds are protocol.
- **Gates** — pure decision functions (confidence, cost, scope, approval chain,
  rate limit) that wrap any emit point and decide allow / deny / escalate. No
  path to an executed consequential action without an approval event.
- **A typed renderer** — `<HitlEventRenderer />` maps validated events to UI.
- **Adapters** — LangGraph `interrupt()`, Vercel AI SDK tools, and an MCP
  server, all speaking the same events.
- **UI primitives, one source** — twenty components in `@hitl-kit/ui`, one per
  event kind plus the scale family. Props are the event spread; every decision
  comes back through one `onAction`. The shadcn registry is generated from the
  package, so copy, paste, own installs the same source.
- **Keyboard-first, screen-reader-honest** — accessible human control is the
  product, not a checklist. Every decision surface offers can't tell, undo,
  inline error with retry, and a help line.

## Packages

| Package | What it is |
|---|---|
| [`@hitl-kit/core`](https://www.npmjs.com/package/@hitl-kit/core) | The event and action schemas. The protocol. |
| [`@hitl-kit/react`](https://www.npmjs.com/package/@hitl-kit/react) | The typed event → UI dispatcher. |
| [`@hitl-kit/ui`](./packages/ui) | The twenty UI primitives, and the source the registry is generated from. Not yet on npm. |
| [`@hitl-kit/gates`](https://www.npmjs.com/package/@hitl-kit/gates) | Composable allow / deny / escalate gates. |
| [`@hitl-kit/langgraph`](https://www.npmjs.com/package/@hitl-kit/langgraph) | LangGraph adapter. |
| [`@hitl-kit/ai-sdk`](https://www.npmjs.com/package/@hitl-kit/ai-sdk) | Vercel AI SDK adapter. |
| [`@hitl-kit/mcp`](https://www.npmjs.com/package/@hitl-kit/mcp) | MCP server — any MCP client can emit HITL events. |

Each package's README carries its full usage. Component install is one command:

```bash
npx shadcn@latest add https://www.hitlkit.dev/r/hitl-card.json
```

```bash
pnpm add @hitl-kit/core @hitl-kit/react @hitl-kit/gates
```

## The shape of it

```tsx
import { createRegistry, HitlEventRenderer } from "@hitl-kit/react";
import { ToolCallPreview } from "@hitl-kit/ui";

const registry = createRegistry({
  "tool.call": (event) => (
    <ToolCallPreview
      {...event}
      help="Sending leaves the system. Read the arguments first."
      onAction={(a) => resume(a)} // a.kind: approve | reject | abstain | undo | retry
    />
  ),
});

<HitlEventRenderer event={event} registry={registry} />;
```

```ts check
import {
  composeGates,
  confidenceGate,
  costGate,
  scopeGate,
  rateLimitGate,
  inMemoryStore,
} from "@hitl-kit/gates";

const store = inMemoryStore();

const gates = [
  confidenceGate({ min: 0.85 }),
  costGate({ maxUsd: 0.10 }),
  scopeGate({ allowed: ["read:files", "read:web"] }),
  rateLimitGate({ store, key: (ctx) => ctx.signals?.userId ?? "anon", max: 30, windowSec: 60 }),
];
```

A denied gate emits an escalation event; the same renderer that shows the happy
path shows the human the override. Adapter wiring lives in
[`packages/gates`](./packages/gates), [`packages/langgraph`](./packages/langgraph),
[`packages/ai-sdk`](./packages/ai-sdk), and [`packages/mcp`](./packages/mcp).

## Repo contents

- `packages/` — the seven `@hitl-kit/*` packages
- `packages/ui/registry/` — the shadcn registry, generated from `packages/ui/src`
  and drift-checked; the site serves it as `hitlkit.dev/r/*.json`
- `apps/demo-langgraph` — end-to-end demo: LangGraph agent → events → UI
- `docs/` — design notes, including [`unified-ui.md`](./docs/unified-ui.md), the
  record of why the primitives live here as one library

## Development

```bash
pnpm install && pnpm verify
```

`pnpm verify` builds every package, typechecks, runs the tests, and checks the
generated registry for drift. CI adds a publish smoke test (packs every
package, installs the tarballs in a scratch consumer, typechecks under two
module resolutions), README typechecking, and an API-surface drift gate. See
[CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT © [Ieuan King](https://github.com/akaieuan)
