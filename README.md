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
  traces, and generation-scale changes. Framework-agnostic; the schemas are the
  spec.
- **Gates** — pure decision functions (confidence, cost, scope, approval chain,
  rate limit) that wrap any emit point and decide allow / deny / escalate. No
  path to an executed consequential action without an approval event.
- **A typed renderer** — `<HitlEventRenderer />` maps validated events to UI.
- **Adapters** — LangGraph `interrupt()`, Vercel AI SDK tools, and an MCP
  server, all speaking the same events.
- **UI primitives via shadcn** — copy, paste, own. No wrapper SDK, no lock-in.
- **Keyboard-first, screen-reader-honest** — accessible human control is the
  product, not a checklist.

## Packages

| Package | What it is |
|---|---|
| [`@hitl-kit/core`](https://www.npmjs.com/package/@hitl-kit/core) | The event schemas. The protocol. |
| [`@hitl-kit/react`](https://www.npmjs.com/package/@hitl-kit/react) | The typed event → UI dispatcher. |
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

- `packages/` — the six `@hitl-kit/*` packages
- `apps/demo-langgraph` — end-to-end demo: LangGraph agent → events → UI
- `docs/` — design notes
- The UI primitives themselves live in the
  [registry](https://www.akaoss.dev/registry) and install via the shadcn CLI —
  they are yours after that, not a dependency.

## Development

```bash
pnpm install && pnpm build && pnpm test
```

CI runs the test matrix plus a publish smoke test (packs every package,
installs the tarballs in a scratch consumer, typechecks under two module
resolutions), README typechecking, and an API-surface drift gate.

## License

MIT © [Ieuan King](https://github.com/akaieuan)
