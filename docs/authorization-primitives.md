# Design: the authorization primitives

- **Status:** proposed (2026-08-11)
- **Scope:** `@hitl-kit/core` (event schemas), the akaoss registry (components), `@hitl-kit/gates` (one state addition)
- **Relation to the enterprise plan:** complementary to E1 (conformance) / E2 (AG-UI adapter). These are new vocabulary, not new plumbing — they can land before, after, or interleaved.

## Why these and not more chat components

CopilotKit's primitives assume a conversational surface: chat, streaming, generative UI. The settings HITL Kit now targets — moderation queues, support escalations, benefits determinations, review workflows — are **authorization** settings, and they are not conversations. Copying the CopilotKit catalogue would import a chat assumption the thesis itself rejects, and would compete with a 36.7k-star VC-funded project on its strongest ground.

The primitives below are the ones an authorization gate needs and nothing in the ecosystem ships. Each one argues the thesis by existing.

## Current state (verified 2026-08-11)

- `@hitl-kit/core` defines **15 event kinds**; the registry ships **19 UI items + 4 lib items** (the four AI-generation densities share one event; `shared-primitives` has none).
- A new primitive is a **three-place addition**: (1) schema + union member + `HITL_EVENT_KINDS` entry in `packages/core/src/events.ts`, (2) component + `registry.json` item + `lib/registry-items.ts` mirror in akaoss, (3) a group/specimen entry in `lib/library.ts`. The registry slot opens automatically — `HitlRegistry` is mapped over `HitlEventKind`, so unregistered kinds render the fallback.
- `ApprovalStateSchema` is strictly `pending | approved | rejected` — **there is no abstention anywhere in the system.**
- `approvalChainGate` already implements multi-approver logic (ordered chains, store-backed state, `remaining` in meta) but its `defaultEscalate()` **fakes a chain UI by abusing `hitl.card` steps.** The logic exists; the vocabulary doesn't.
- The design source for tone/phase language already exists, unshipped: akaoss `src/components/inertial/` (`MandatedGate.tsx` phases, `ui.tsx` Tone maps, `btnBlocked` — "the refusal is the demonstration").
- Hardening precedent to copy for every new schema: `ToolCallPreviewEventSchema`'s `isToolCallArgsSafe` refinement (size/depth caps, prototype-pollution keys, cycles).

## The primitives

Naming follows the existing `<noun>.<qualifier>` convention (`approval.binary`, `result.citation`, `plan.editable`).

### P1 — ship first

**`evidence.pointer`** — a typed, *located* claim. `{ claim, source, locator }` where `locator` is a discriminated union: `span {start,end}` (half-open, matching tag-kit), `bbox {x,y,w,h}`, `segment {start,end}` (time), `page {n}`. The reviewer's attention lands on the disputed thing, not the whole document. Without located evidence a reviewer can only trust or re-derive — both are failures of the gate (research № 006). Nearest existing: `result.citation` (has quote, no location), `result.diff` (located, diff-only). Component renders the locator as a mono chip; clicking emits an action the host app resolves to a scroll/seek/highlight.

**`reasons.statement`** — the structured statement of reasons for an allow/deny/escalate. `{ decision, grounds: [{code, text, evidence?: EvidencePointer[]}], authority, contestable?: {how} }`. DSA-style regimes require exactly this artifact; `GateDeny.reason` (one string) and `tool.call.rationale` (free text) are the current, insufficient nearest things. This is the export surface auditors read — the component is almost a formality; the schema is the product.

**`approval.chain`** — the escalation chain as first-class vocabulary. `{ steps: [{approver, state, at?}], ordered, current }` where each state is `pending | approved | rejected | abstained | skipped`. First consumer exists today: `approvalChainGate.defaultEscalate()` stops faking it with `hitl.card`. Shows **named authority** — who authorized, under what delegation — which is the difference between an approval and a click.

**Abstention as a state, everywhere.** Add `"abstained"` to `ApprovalStateSchema`. "I cannot determine this" must be distinct from "no violation" — conflating them is the absence failure (№ 006/№ 007) built into the type system. This touches `approval.binary`, `batch.queue`, `qa.flow`, and the new `approval.chain`; add `abstained` to `@hitl-kit/gates`' vocabulary as a distinct `GateCode` path. **Semver note:** additive for producers, breaking for consumers who exhaustively switch on the enum — this is the 0.x minor that earns a migration note, and the conformance suite (E1) should assert every renderer handles it.

### P2 — second wave

**`coverage.report`** — what was *not* assessed. `{ assessed: [{channel, outcome}], notAssessed: [{channel, reason}] }`. The machine version of "absence is meaningful": a channel that reported nothing is not a channel that reported safe. Renders as the quiet table that makes an audit honest.

**`review.disagreement`** — where reviewers diverged. `{ item, reviews: [{reviewer, verdict}], resolution? }`. Disagreement display is where the standard is discovered to be ambiguous — feeds directly into tag-kit's agreement scoring and eval-kit's v0.5.0 calibration work. The cross-kit primitive.

### P3 — needs design spikes first

**`display.counterfactual`** — "what would have happened without you": the action as proposed vs. as executed after review. The only honest way to show a reviewer they changed something. Spike needed on how hosts supply the counterfactual without HITL Kit becoming a diff engine (`result.diff` may compose).

**Decision-latency capture** — time-on-decision is the cheapest rubber-stamp signal, and it must never phone home. Likely a headless hook (`useDecisionTimer`) that stamps an optional `latency_ms` onto the action payload, local only, documented as a calibration input for eval-kit — not an event kind at all.

## What every primitive ships with

- Zod schema with the `isToolCallArgsSafe`-style hardening where payloads are host-supplied
- Registry component in the akaoss house style (tone maps from `inertial/ui.tsx`; machine data mono, human voice sans; `btnBlocked` idiom for present-but-refusing controls)
- Specimen in the catalogue (`sections.ts` — extend `decision`/`evidence`, or introduce an `authorization` group once ≥3 of these exist)
- Keyboard path + screen-reader semantics (the a11y bar is the product, per the README)
- Conformance-suite entries once E1 lands — including the "renders `abstained`" assertion

## Sequencing

1. `evidence.pointer` + `reasons.statement` (schema-heavy, no breaking change, immediately useful to inertial and eval-kit's RFC 0002 gate timeline)
2. `abstained` + `approval.chain` (one coordinated minor: the enum addition and its first new consumer, plus the `approvalChainGate` de-fake)
3. P2 pair
4. P3 after spikes

Each lands as its own branch/PR with sign-off, per standing rules.
