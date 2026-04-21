# Contributing to HITL Kit

The site at `hitlkit.dev` and the registry at `hitlkit.dev/r/*.json` deploy automatically on every push to `main`. That means a broken commit on `main` is a broken public install for anyone running `npx shadcn add`.

This doc explains how to verify changes before they hit `main`.

---

## The verification ladder

Three layers, fastest to slowest. Run as much as the change warrants.

### 1. `pnpm verify` (~30s, no external state)

Run this before **every** push.

```bash
pnpm verify
```

Chains:

- `pnpm typecheck` — TypeScript errors across the whole repo
- `pnpm registry:check` — rebuilds `public/r/*.json` from `registry.json` and fails if there's drift
- `pnpm build` — full Next.js production build (catches bundler errors, missing imports, server-component issues)

If `pnpm verify` exits 0, the change at minimum compiles and the registry artifacts are in sync.

### 2. `pnpm smoke-test` (~60s, requires `pnpm dev`)

Run this when you change anything under `src/components/hitl/` or `registry.json`.

```bash
# in one terminal
pnpm dev

# in another
pnpm smoke-test
```

Spins up a throwaway Next.js consumer project in a temp directory and runs `npx shadcn add` against `http://localhost:3000/r/*.json` for three primitives covering different dependency depths (leaf, single-hop, two-hop). Verifies:

- registry endpoints reachable
- registry items parse
- transitive `registryDependencies` resolve correctly
- npm dependencies install
- expected files land at the expected paths

This catches what `pnpm verify` can't: the actual install flow that an external user will hit.

### 3. Vercel preview deployment (~3min, full end-to-end)

For substantial changes (new primitives, monorepo restructures, new packages, anything touching `registry.json`), don't push to `main`. Push to a feature branch instead:

```bash
git checkout -b v0.3-monorepo
git push -u origin v0.3-monorepo
```

Vercel automatically builds a preview deployment for any non-`main` branch pushed to GitHub. The preview URL gets posted as a comment on any PR opened against `main`.

Once the preview is live, run a final smoke test against the preview URL:

```bash
bash scripts/smoke-test.sh prod  # tests last-deployed prod
# or, swap the BASE_URL inside scripts/smoke-test.sh to test the preview URL directly
```

When the preview passes, open a PR. CI runs `.github/workflows/registry.yml` (registry drift check). When green, merge.

---

## When to use which

| Change | Verify | Smoke | Preview branch |
|---|---|---|---|
| Copy edits, README, docs | ✓ | | |
| New site route or page redesign | ✓ | | |
| Component prop API change | ✓ | ✓ | |
| New primitive added to registry | ✓ | ✓ | ✓ |
| Monorepo / package restructure | ✓ | ✓ | ✓ |
| New package published to npm | ✓ | ✓ | ✓ + manual review |

Default: when in doubt, use a preview branch. Pushing to `main` is reserved for changes you've already verified and that do not affect external installers.

---

## CI

`.github/workflows/registry.yml` runs on every push to `main` and every PR. It:

1. Installs deps with `pnpm install --frozen-lockfile`
2. Re-runs `pnpm registry:build`
3. Fails if `public/r/*.json` or `registry.json` drift from what was committed

If CI fails, the commit either has stale registry artifacts (run `pnpm registry:build` and commit the result) or breaks something else CI tested.

---

## Releasing a new primitive

1. Add the source file under `src/components/hitl/MyNewPrimitive.tsx`
2. Add an entry to `registry.json` with full URL `registryDependencies` if it depends on other primitives
3. Run `pnpm registry:build` to generate `public/r/my-new-primitive.json`
4. Add a section to `src/app/components/page.tsx` showing the live demo
5. Run `pnpm verify` — fix anything red
6. `pnpm dev` and `pnpm smoke-test` to verify install works
7. Push to a feature branch, get the Vercel preview URL
8. Open a PR. Once CI is green and the preview looks right, merge

---

## Anti-patterns (don't do these)

- **Skipping `pnpm verify` because "it's just a small change"**: tiny TypeScript errors break the production build. The 30 seconds saved costs minutes of revert work.
- **Pushing directly to `main` for anything touching `registry.json`**: every external user installs from `main`. Use a preview branch.
- **Forgetting to commit `public/r/*.json` after changing `registry.json`**: CI catches this, but waste your CI minutes for free.
- **`git push --no-verify` or `git commit --no-verify`**: there are no local hooks blocking you, but skipping verification is the same idea. Don't.
