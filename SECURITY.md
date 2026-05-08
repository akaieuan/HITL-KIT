# Security policy

## Reporting a vulnerability

If you find a security issue in HITL Kit (any package, the registry, the demo apps, or the docs site), please **do not file a public issue**. Email it instead:

- **Email:** ieuan@ubik.studio
- **Subject prefix:** `[hitl-kit security]`

I will acknowledge within 72 hours and aim to ship a fix or workaround within 14 days for confirmed issues.

If you don't get a reply within 72 hours, escalate by opening a private security advisory on GitHub: <https://github.com/akaieuan/HITL-KIT/security/advisories>.

## Scope

In scope:

- The five `@hitl-kit/*` packages on npm
- The shadcn registry endpoints at `https://www.hitlkit.dev/r/*.json`
- The MCP server (`hitl-kit-mcp` binary) as it runs against an MCP host

Out of scope:

- Vulnerabilities in upstream dependencies (`zod`, `ai`, `@langchain/langgraph`, `@modelcontextprotocol/sdk`, `next`) — please report those upstream
- The Vercel deployment infrastructure
- Issues that require an attacker to already control the host running the MCP server

## What constitutes a vulnerability

Examples that I'd treat as security issues:

- A primitive component that could be tricked into executing arbitrary script via crafted event data
- A schema parse path that allows prototype pollution or unbounded resource use
- A gate that fails open under reasonable inputs
- A leak of host-side state through tool results

Examples that aren't security issues (but are valid bug reports — open an issue):

- Schema validation rejecting valid input
- A gate denying when it shouldn't
- A demo route returning a 500
- Stylistic / accessibility / DX issues (please file these as regular issues)

## Disclosure

After a fix ships I'll:

1. Publish a GitHub Security Advisory describing the issue
2. Credit the reporter (unless they prefer to remain anonymous)
3. Note the patch version that addresses it in CHANGELOG / release notes

Thanks for helping keep HITL Kit safe.
