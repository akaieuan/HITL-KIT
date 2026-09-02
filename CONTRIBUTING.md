# Contributing to HITL Kit

Every push to `main` becomes the next npm release candidate for seven
packages, and the registry that `npx shadcn add` installs from is generated
out of this repo. A broken commit on `main` is a broken public install.

This doc explains how to verify changes before they get there.

---

## The verification ladder

### 1. `pnpm verify` (about a minute, no external state)

Run this before **every** push.

```bash
pnpm verify
```

Chains:

- `pnpm packages:build` — tsup for every `@hitl-kit/*` package (also regenerates `packages/ui/registry/`)
- `pnpm packages:typecheck` — `tsc --noEmit` in every package
- `pnpm test` — Vitest across `packages/*/src`
- `pnpm registry:check` — fails if `packages/ui/registry/` drifted from `packages/ui/src`

### 2. The credibility harness

Three checks simulate an honest outside consumer of the published packages. Each has its own CI job and can be run locally.

```bash
pnpm smoke:publish   # packs every tarball and installs + imports + typechecks them in a fresh npm project OUTSIDE the repo
pnpm check:readme    # typechecks the README code examples that opt in (see below) against the built types
pnpm api:check       # regenerates api-surface/*.d.ts from dist and fails if the public type surface drifted
```

- **`pnpm smoke:publish`** (`scripts/publish-smoke.mjs`): `pnpm pack`s every package, spins up a scratch consumer in the OS temp dir, installs the tarballs via `file:` specifiers plus each package's real peer dependencies from npm, then runtime-imports every exports subpath, typechecks usage under `moduleResolution` both `bundler` and `node16`, and runs `@arethetypeswrong/cli` on each tarball.
- **`pnpm check:readme`** (`scripts/readme-check.mjs`): typechecks README examples against the built types.
- **`pnpm api:check`** (`scripts/api-surface.mjs`): the committed `api-surface/*.d.ts` files are the frozen public type surface. When you change an exported type on purpose, run `pnpm api:update` and commit the regenerated baseline. Runtime export *names* are snapshotted separately by `packages/*/src/__tests__/api-surface.test.ts` (update with `pnpm test -u`).

### 3. The demo app

```bash
pnpm --filter demo-langgraph typecheck
pnpm --filter demo-langgraph build
```

The demo consumes `@hitl-kit/ui` from the workspace, so this is the first real consumer of any primitive change.

### 4. The site

A primitive change is not done until [akaieuan/akaOSS](https://github.com/akaieuan/akaOSS) matches it. In that repo:

```bash
pnpm hitl:sync    # regenerate components/hitl, public/r, lib/registry-items.ts from ../hitl-ai2/packages/ui
pnpm verify       # typecheck, hitl:check, facts:check, build
```

Commit the regenerated files there. `pnpm hitl:check` fails its CI on drift.

---

## README `check` fence convention

`pnpm check:readme` only typechecks a fenced code block when its info string contains the token `check`:

````md
```ts check
import { HitlEventSchema } from "@hitl-kit/core";
```
````

The opt-in is explicit and never inferred. Most README blocks are partial fragments and are illustrative only, so they are skipped. Annotate a block with `check` when it is meant to stand on its own and compile against the published packages. Only `ts` / `typescript` / `tsx` blocks are eligible.

---

## Adding or changing a primitive

The primitives live in one place: `packages/ui/src`. There is no second copy to keep in step; the site's and the registry's copies are generated.

1. If it is a new event kind, add the Zod schema to `packages/core/src/events.ts`, the kind to `HITL_EVENT_KINDS`, and its action union to `packages/core/src/actions.ts` (the shared vocabulary: `approve` / `reject` / `abstain` / `undo` / … before inventing a verb).
2. Write `packages/ui/src/MyPrimitive.tsx`. Props extend the core event; decisions go through one `onAction`. Decision surfaces take `DecisionSurfaceProps` and build on `internal/ui.tsx` (`Card`, `DecisionBar`, `ResolvedLine`, `InlineError`, `HelpLine`). Type inside a card is 11 / 12 / 13px, nothing else.
3. Export it from `packages/ui/src/index.ts`, and map it in `packages/ui/src/__tests__/api-surface.test.ts` (one component per event kind is tested).
4. Add the item to `packages/ui/registry.json` (paths relative to `src/`; `registryDependencies` as full `https://www.hitlkit.dev/r/<name>.json` URLs).
5. `pnpm verify`, then `pnpm api:update` and `pnpm test -u` for the new surface, and commit the regenerated `packages/ui/registry/` and `api-surface/`.
6. Add adapter support (`createXInterrupt`, `xTool`, the MCP tool) so every channel can emit it.
7. In akaOSS: `pnpm hitl:sync`, add the specimen to the catalogue, `pnpm verify`, commit.

---

## CI

`.github/workflows/ci.yml` runs on every push to `main` and every PR: build → typecheck → test, plus a dependency audit that fails on high or critical advisories. The credibility harness jobs run alongside.

---

## Releasing

Releases are tag-triggered with npm Trusted Publishing (`.github/workflows/release.yml`). Bump the package version, tag, push the tag. Publishing is a decision, not a side effect of merging.

---

## Anti-patterns

- **Editing a primitive anywhere but `packages/ui/src`**: the site's `components/hitl/` and `public/r/` are generated and drift-checked. Your edit will be overwritten.
- **Skipping `pnpm verify` because "it's just a small change"**: tiny TypeScript errors break the published types.
- **Inventing a new action kind** when `approve` / `reject` / `abstain` / `undo` / `submit` / `cancel` already says it. Labels are presentation; kinds are protocol.
- **`git push --no-verify`**: there are no local hooks blocking you, but skipping verification is the same idea. Don't.
