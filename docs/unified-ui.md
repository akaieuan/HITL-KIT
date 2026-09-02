# One primitive library: `@hitl-kit/ui`

**Status:** in execution on `feat/unified-ui`, 2026-09-02. Supersedes
`api-unification.md`, whose recommendations this adopts and whose open
question (registry vs demo copies) this closes.

## The problem, precisely

Three implementations of the same primitives existed:

| where | what | prop shape |
| --- | --- | --- |
| `akaoss/src/components/hitl/` | 19 registry primitives, the ones `npx shadcn add` installs | five take `config={}`, the rest spread; callbacks named per component (`onConfirm`, `onVerify`, `onAccept`, …) |
| `hitl-ai2/apps/demo-langgraph/components/hitl/` | 5 copies rewritten to spread props + `onAction` | the shape `HitlEventRenderer` actually needs |
| `hitl-ai2/_reference/hitl-ai0002/` | the Agatha-era originals | historical |

The demo copies exist because the renderer spreads the validated event onto
the component, and the registry originals could not accept that. Every fix
since then had to be made twice, and was not. The sixteenth event kind,
`evidence.pointer`, has a schema, an adapter and an MCP tool, and no
component anywhere.

## The decision

One package, in the library repo, is the source of truth:

```
hitl-ai2/packages/ui        @hitl-kit/ui
├── src/
│   ├── lib/utils.ts        cn()
│   ├── types.ts            local UI-only types (HitlCardState)
│   ├── subagent-meta.ts    status → icon/colour
│   ├── ai-generation-levels.ts
│   ├── <Primitive>.tsx     ×20 (19 + EvidencePointer)
│   └── index.ts            barrel
├── registry.json           the shadcn registry manifest, paths relative to src/
├── scripts/registry-build.mjs
└── registry/               GENERATED shadcn registry-item JSON, committed, drift-checked
```

**Props.** Every event-bound primitive's props are the core event spread:
`interface ToolCallPreviewProps extends ToolCallPreviewEvent`. `kind` rides
along unused. `<HitlEventRenderer />` mounts a primitive with no adapter
code, and `<ToolCallPreview {...event} />` is the whole call site.

**Actions.** One optional `onAction(action)` per primitive. Action types are
protocol, so they live in `@hitl-kit/core` (`actions.ts`): they are what a
LangGraph `Command({ resume })` or an AI SDK follow-up carries back. The
vocabulary is shared across surfaces: `approve | reject | abstain | undo |
dismiss | submit | cancel | change | remove | …`. A diff says `approve`
when the button says "Apply edit". Labels are presentation; kinds are
protocol.

**Distribution.** Two channels, one source:

1. The shadcn registry (primary for outside users, unchanged install URLs).
   `packages/ui/scripts/registry-build.mjs` reads `registry.json`, inlines
   each source file, rewrites the package-internal relative imports to the
   consumer's aliases (`./lib/utils` → `@/lib/utils`, `./types` →
   `@/components/hitl/types`, …), and writes shadcn registry-item JSON to
   `packages/ui/registry/`. Components import their event types from
   `@hitl-kit/core`, which is therefore an npm dependency of every item.
   `--check` fails on drift, like `api:check`.
2. The npm package `@hitl-kit/ui`, for workspace consumers (the demo app,
   and akaoss once it is published) and anyone who prefers a package. A
   Tailwind v4 consumer adds `@source "../node_modules/@hitl-kit/ui/dist";`
   so the utility classes are scanned.

**akaoss.** Until `@hitl-kit/ui` is on npm, akaoss keeps
`src/components/hitl/` and `public/r/` as GENERATED copies produced by
`scripts/hitl-sync.mjs` from the sibling checkout, with `pnpm hitl:check`
failing CI on drift, the same contract as `facts.json`. The catalogue keeps
importing `@/components/hitl/*`, so it cannot drift from what the registry
ships, and the site's primitive count keeps deriving from the registry
index. When the package is published, the sync flips to reading from
`node_modules/@hitl-kit/ui` and the local copy can go.

**Demo app.** Imports `@hitl-kit/ui` (workspace) directly; its copies are
deleted; its `globals.css` gains the `@source` line.

## The heuristics pass

Nielsen's ten, applied to each primitive in the same migration. What changes:

| heuristic | gap found | change |
| --- | --- | --- |
| 1 Visibility of status | a pending async decision looks identical to idle | `busy` prop on every decision surface: primary action disabled, `aria-busy`, spinner in the button |
| 2 Match the real world | `86% conf`, `$0.0012` | "86% confidence", cost with a `title` naming the unit; buttons keep plain verbs |
| 3 User control and freedom | only ApproveRejectRow can undo; cards resolve to a dead one-liner | every resolved line carries **Undo** → `{kind:"undo"}`; HitlCard's dismiss is reversible; BatchQueue can undo the last item |
| 4 Consistency | two prop shapes, seven callback names, four button styles | spread props, one `onAction`, one shared `DecisionBar` and `ResolvedLine` inside the package |
| 5 Error prevention | schema has `abstained`; no UI offers it | **Can't tell** (abstain) on every binary surface; external-scope tool calls flagged in the signals row |
| 6 Recognition over recall | resolving a card hides the evidence the decision was made on | resolved lines keep a "details" disclosure that re-opens the surface read-only |
| 7 Flexibility and efficiency | all pointer-first | full keyboard operability kept; `autoFocus` prop for the primary action in a queue |
| 8 Aesthetic and minimalist | 9/10/11/12px mix, chip soup | two sizes inside cards (11 meta, 12 body), one title size (13), consistent radii (8/10/14) |
| 9 Recover from errors | a failed resume is invisible | `error` prop rendered inline with **Retry** → `{kind:"retry"}` |
| 10 Help and documentation | rationale only on tool calls | `help` prop (short plain text) rendered as a quiet line under the header on every decision surface |

New primitive: **EvidencePointer** (`evidence.pointer`), the component the
schema has been waiting for since 2026-08-11: the claim, each pointer as a
row with source, locator and excerpt, `notAssessed` rendered explicitly
("not assessed: …") so absence is visible, and the same decision bar.

## Verification

`pnpm verify` (build → typecheck → test) with the new package in the
`@hitl-kit/*` filter; `pnpm api:update` for the new surface; the demo app
builds; in akaoss `pnpm hitl:sync && pnpm verify`.

## Out of scope here

Publishing to npm (the user's call), `approval.chain` and
`reasons.statement` (HANDOFF P1), and deleting `_reference/`.
