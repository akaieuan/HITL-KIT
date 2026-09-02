# @hitl-kit/ui

Every HITL Kit primitive as one React package. One component per
`@hitl-kit/core` event kind, plus the AI-generation scale family and the
shared palette.

```bash
pnpm add @hitl-kit/ui @hitl-kit/core
```

```tsx
import { ToolCallPreview } from "@hitl-kit/ui";

<ToolCallPreview
  {...event}                       // a validated ToolCallPreviewEvent
  help="Sending leaves the system."
  onAction={(a) => {
    // a.kind: "approve" | "reject" | "abstain" | "undo" | "retry"
    resume(a);
  }}
/>
```

## The contract

**Props are the event.** Each primitive's props extend the matching core
event, so `<HitlEventRenderer />` mounts it with no adapter, and
`<Primitive {...event} />` is the whole call site.

**One `onAction`.** Every decision comes back as `{ kind, ...payload }`,
typed in `@hitl-kit/core` (`HitlAction` and the per-primitive unions). The
vocabulary is shared: a diff, a citation and a tool call all say `approve`,
`reject`, `abstain`, `undo`, whatever label the button shows. Labels are
presentation; kinds are protocol. The action object is the resume payload.

**Every decision surface** also takes:

| prop | what it does |
| --- | --- |
| `busy` | the last action is resolving: primary button disabled, `aria-busy`, spinner |
| `error` | the last action failed: rendered inline with **Retry** → `{ kind: "retry" }` |
| `help` | one plain sentence under the header |
| `allowAbstain` | offer **Can't tell** (default `true`) |
| `allowUndo` | keep **Undo** on the resolved line (default `true`) |
| `autoFocus` | focus the primary action on mount, for queues |

A resolved surface collapses to one line that says what happened, keeps a
**details** disclosure so the evidence stays checkable, and offers **Undo**.

## Styling

Tailwind utility classes on shadcn's tokens (`bg-card`, `text-muted-foreground`,
`ring-ring`) plus five accent variables (`--accent-violet`, `--accent-amber`,
`--accent-blue`, `--accent-emerald`, `--accent-rose`). A Tailwind v4 consumer
adds one line so the classes are scanned:

```css
@import "tailwindcss";
@source "../node_modules/@hitl-kit/ui/dist";
```

## The registry

The shadcn registry at `https://www.hitlkit.dev/r/<name>.json` is generated
from this package (`pnpm registry:build`, drift-checked in CI), so
`npx shadcn add` installs the same source with the imports rewritten to your
aliases. Registry items depend on `@hitl-kit/core` for their types.

## Primitives

| event kind | component |
| --- | --- |
| `hitl.card` | `HitlCard` |
| `tool.call` | `ToolCallPreview` |
| `result.diff` | `DiffResult` |
| `result.citation` | `CitationResult` |
| `evidence.pointer` | `EvidencePointer` |
| `approval.binary` | `ApproveRejectRow` |
| `plan.editable` | `EditablePlan` |
| `qa.flow` | `QAFlow` |
| `batch.queue` | `BatchQueue` |
| `subagent.status` | `SubagentStatusCard` |
| `trace.mini` | `MiniTrace` |
| `chips.context` | `ContextChips` |
| `result.search` | `SearchResultCard` |
| `agent.writing` | `WritingAgent` |
| `agent.research` | `ResearchAgent` |
| `scale.ai_generation` | `AiGenerationScale`, `AiGenerationSlider`, `AiGenerationMeter`, `AiGenerationBadge` |

Plus `SharedPrimitives` (the palette) and `DEMO_*` fixtures, each a valid
core event.

MIT.
