# Security policy

## Reporting a vulnerability

If you find a security issue in HITL Kit (any package, the registry, the demo apps, or the docs site), please **do not file a public issue**. Email it instead:

- **Email:** ieuan@ubik.studio
- **Subject prefix:** `[hitl-kit security]`

I will acknowledge within 72 hours and aim to ship a fix or workaround within 14 days for confirmed issues.

If you don't get a reply within 72 hours, escalate by opening a private security advisory on GitHub: <https://github.com/akaieuan/HITL-KIT/security/advisories>.

## Scope

In scope:

- The six `@hitl-kit/*` packages on npm (`core`, `react`, `gates`, `langgraph`, `ai-sdk`, `mcp`)
- The shadcn registry endpoints at `https://www.hitlkit.dev/r/*.json`
- The MCP server (`hitl-kit-mcp` binary) as it runs against an MCP host

Out of scope:

- Vulnerabilities in upstream dependencies (`zod`, `ai`, `@langchain/langgraph`, `@modelcontextprotocol/sdk`, `next`) — please report those upstream
- The Vercel deployment infrastructure
- Issues that require an attacker to already control the host running the MCP server

## Threat model

HITL Kit sits between an LLM-driven agent and a human. The defense boundaries are:

1. **Tool-call args from the LLM → schema parse.** Every event the agent emits passes through a Zod schema before reaching the renderer or downstream code. Schemas cap string length, array size, and (for `tool.call.args`) JSON depth + serialized size. URL fields refine to `http(s):` only — `javascript:` and `data:` URIs are rejected to prevent `<a href>`-mediated XSS.

2. **Signals from the host → gates.** Gates read `confidence`, `costUsd`, `scope`, and other signals from `GateContext.signals`. **These are trusted from the host side**, not from the LLM. The MCP server takes a `signals(toolName, args)` function the host implements — the host is responsible for computing real signals (e.g. from logprobs, a cost estimator, a tenant scope lookup) rather than echoing what the LLM claims. A misconfigured host that pulls signals straight from the LLM's args defeats the gates.

3. **Gate decisions → adapter behavior.** Gates are pure functions that return `allow` / `deny` decisions. They never directly render or execute side effects; the adapter does, after reading the decision.

4. **Default fail mode.** `confidenceGate` and `costGate` default to **fail-open** when no signal is supplied (documented). For production, set `failClosed: true` so missing signals deny instead of pass. The MCP server's default `onDeny: "escalate"` surfaces a HitlEvent the host renders for human override; switch to `--on-deny=error` (or `onDeny: "error"`) to return a tool error instead.

5. **Schema strictness.** `tool.call.args` rejects `__proto__`, `constructor`, and `prototype` as own keys and bounds depth to 6 levels and 64 KB serialized to defend against prototype pollution and JSON.stringify DoS. Other schemas use `z.object({...})` which strips unknown keys at parse time.

## Known upstream issues we track

We pin certain transitive dependencies via `pnpm.overrides` to patch upstream advisories before the parent package publishes a fix. Current overrides (see root `package.json`):

- `fast-uri >=3.1.2` — fixes path traversal + host confusion via `@modelcontextprotocol/sdk > ajv`
- `hono >=4.12.21` — fixes multiple routing bypasses via `@modelcontextprotocol/sdk`
- `langsmith >=0.6.0` — fixes untrusted-manifest deserialization via `@langchain/core`
- `postcss >=8.5.10` — fixes XSS in CSS stringify via `next`
- `ip-address >=10.1.1` — fixes XSS in Address6 HTML methods via MCP SDK > express-rate-limit
- `qs >=6.15.2` — fixes DoS in stringify via MCP SDK > express > body-parser
- `brace-expansion >=5.0.6` — fixes max-range DoS via eslint resolver chain

CI runs `pnpm audit --audit-level high` on every push; new high-or-critical advisories fail the build.

## What constitutes a vulnerability

Examples that I'd treat as security issues:

- A primitive component that could be tricked into executing arbitrary script via crafted event data (e.g. a new XSS sink we didn't catch with the URL refine)
- A schema parse path that allows prototype pollution or unbounded resource use that survives the v0.6c hardening
- A gate that fails open under reasonable inputs when `failClosed: true` is set
- A leak of host-side state through tool results
- An adapter wrapper that bypasses the gate chain
- A new high-or-critical CVE in a transitive dependency that we haven't overridden or upgraded

Examples that aren't security issues (but are valid bug reports — open an issue):

- Schema validation rejecting valid input (loosen the cap with a PR + justification)
- A gate denying when it shouldn't
- A demo route returning a 500
- Stylistic / accessibility / DX issues (please file these as regular issues)

## Disclosure

After a fix ships I'll:

1. Publish a GitHub Security Advisory describing the issue
2. Credit the reporter (unless they prefer to remain anonymous)
3. Note the patch version that addresses it in CHANGELOG / release notes

Thanks for helping keep HITL Kit safe.
