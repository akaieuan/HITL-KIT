# HITL Kit handoff

Written 2026-08-12 from a cross-repo session. Start a session rooted in this
folder and read this first. Untracked scratch: delete it once the work lands.

## Do these two first

**1. Write this repo's `CLAUDE.md`.** It has none, and it is the largest
context gap in the workspace: six published packages spanning 0.2.0 to 0.8.0,
with nothing telling a new session the conventions. eval-kit's 137-line file
is the model. Its own file is stale in ways worth not copying, so read the
code, not that file, for the current shape.

**2. Delete `docs/EVAL_KIT_BRIEF 2.md`.** A sync-duplicate, the same species
as the `routes.d 3.ts` files that turned up in akaoss's build cache. Whatever
produces them has now hit two repos, so it is worth finding out what.

## The component work

The plan was a P1 triple of schema fields, each paired with an akaoss registry
component:

| field | state |
| --- | --- |
| `evidence.pointer` | **shipped** (`7b4d44f`, adapters wired in `ddbe8a5`) |
| `approval.abstain` | **shipped** (`7b4d44f`, as abstained approval state) |
| `reasons.statement` | **not started** |
| `approval.chain` | **not started**, follows the above |

So `reasons.statement` is the unfinished third of P1 and the natural next
task. `approval.chain` comes after it.

**`approval.chain` has a hard dependency that is now satisfied.** eval-kit's
spec deferred it explicitly:

> `eval-kit/docs/superpowers/specs/2026-08-12-gate-semantics-design.md:6`
> "Out of scope: HITL Kit component work. It gets its own spec, and it depends
> on this one landing first because `approval.chain` will encode the same
> decision."

That gate-semantics work has since landed (eval-kit PR #52). Under the rules
that replaced the old ones, an approval **names a tool and carries a budget**,
and scoring records one entry per gated *call* rather than per gate. Whatever
`approval.chain` encodes must match that, or the two repos will disagree about
what an approval means.

Note a naming collision: `approval-chain` already exists as a **gate**, at
`packages/gates/src/gates/approval-chain.ts` with tests. The planned work is
the **component/event** that encodes the same decision, sitting on top of it.
Pick names deliberately.

Neither field has a written spec. Both deserve one before code.

## The `@hitl-kit/mcp` decision, with a tripwire

Reviewed on 2026-08-12 and **kept**, with a condition. The case for keeping:
it imports `composeGates` and runs gate decisions on every tool call,
returning allow/deny/escalate, so it is not a card generator but the
enforcement point. It is also the only package that reaches agents whose code
you do not write (Claude Code, Cursor, Claude Desktop), which is where the
authorization thesis actually needs to land.

Its honest weakness: **nothing persists or consumes its events.** No file
sink, no network sink, and eval-kit has no hitl-kit dependency. It is an
enforcement point with no ledger, and the capture-to-measurement pipe
(mcp → traces → eval-kit scoring) is the unbuilt half of the thesis.

**Tripwire:** the `reasons.statement` and `approval.chain` work is where the
trace story gets built. If that ships and mcp still has no role in it,
deprecate it then, with evidence. Deciding now would cost the option; deciding
later costs nothing, since it has been stable since May.

Note true deletion is not available regardless: the npm unpublish window
closed in April 2026. The real options are keep, or deprecate and remove from
the repo.

## Stale facts to fix while you are here

- The `@hitl-kit/mcp` README says "15 event kinds". `evidence.pointer` landed
  2026-08-11 and made it 16. `src/tools.ts` is the source of truth.
- The root `package.json` is `private: true` at 0.6.3, and that number is
  published nowhere. akaoss used to display it as "v0.6"; that has been
  removed, and the site now derives per-package versions from npm. Do not
  reintroduce a single "HITL Kit version" anywhere, it names nothing
  installable.

## Cross-repo rule that applies to this work

A repo change is not done until `akaoss.dev/projects/hitl-kit` matches it.
Adding a primitive means adding it to akaoss's registry and rebuilding, and
the site's primitive count derives automatically from `REGISTRY_ITEMS` so it
follows on its own. Add `akaoss` as a secondary working directory in that
session.
