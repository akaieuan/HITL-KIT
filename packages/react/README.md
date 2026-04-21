# @hitl-kit/react

> `<HitlEventRenderer />` — type-safe dispatcher that maps validated HITL events to React primitives.

Pair with [`@hitl-kit/core`](../core) for the event schemas and
any HITL Kit primitives installed via [`npx shadcn@latest add`](https://www.hitlkit.dev/registry).

```bash
pnpm add @hitl-kit/core @hitl-kit/react
```

## Usage

1. Install the primitive(s) your agent emits. They land under `components/hitl/`:

   ```bash
   npx shadcn@latest add https://www.hitlkit.dev/r/hitl-card.json
   npx shadcn@latest add https://www.hitlkit.dev/r/subagent-status-card.json
   ```

2. Build a registry that maps event kinds to your primitive components:

   ```tsx
   import { createRegistry, HitlEventRenderer } from "@hitl-kit/react";
   import { HitlCard } from "@/components/hitl/HitlCard";
   import { SubagentStatusCard } from "@/components/hitl/SubagentStatusCard";

   const registry = createRegistry({
     "hitl.card": (event) => (
       <HitlCard
         config={{
           id: event.id ?? "default",
           kind: event.variant,
           title: event.title,
           subtitle: event.subtitle,
           steps: event.steps,
           runLabel: event.runLabel,
           editPlaceholder: event.editPlaceholder,
           openTab: "human",
         }}
       />
     ),
     "subagent.status": (event) => (
       <SubagentStatusCard
         status={event.status}
         label={event.label}
         detail={event.detail}
       />
     ),
   });
   ```

3. Render any streamed HITL event:

   ```tsx
   <HitlEventRenderer
     event={someEvent}
     registry={registry}
     onAction={(action) => {
       // called by the primitive when the human acts
     }}
     fallback={<p>Unknown event.</p>}
   />
   ```

## What the renderer does

- Runtime-validates `event` via the shared Zod schema from `@hitl-kit/core`
- Narrows the type to the correct event variant
- Looks up the right component in the registry by `event.kind`
- Spreads the event onto the component, plus the optional `onAction` callback

## API

- `HitlEventRenderer` — the dispatcher. `validate` defaults to `true`.
- `createRegistry` — identity helper for strongly typed registry definitions.
- `HitlRegistry`, `HitlEventOfKind<K>` — type utilities.

## Part of HITL Kit

- **Schemas** → [@hitl-kit/core](../core)
- **Components** → install via shadcn CLI from [hitlkit.dev/registry](https://www.hitlkit.dev/registry)
- **Adapters** (coming in v0.4+) → `@hitl-kit/langgraph`, `@hitl-kit/ai-sdk`, `@hitl-kit/mcp`
- **Repo** → [github.com/akaieuan/HITL-KIT](https://github.com/akaieuan/HITL-KIT)

MIT © Ieuan King.
