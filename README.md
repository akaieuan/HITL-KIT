# HITL Kit

> Human-in-the-loop AI, measured properly.

A design system and component library for human-in-the-loop AI, paired with an open perspective paper on why 95% of enterprise AI pilots fail.

**Status:** v0.1 · Reference implementation. 11 primitives. Shadcn-compatible registry. Paper live at `/paper`.

---

## The thesis

Most AI systems are evaluated on whether they can complete tasks autonomously. But in deployment, they need to *assist* humans, not replace them. That mismatch is why enterprise AI pilots have a 95% failure rate.

**Assist-Not-Complete** is a paradigm for building AI systems that collaborate with humans instead of displacing them. This repo is the paradigm made tangible: a paper that argues it, and a component library that implements it.

Read the full paper at [`/paper`](./content/paper.md) or on the live site.

---

## What's in this repo

```
.
├── content/paper.md              The perspective paper (markdown)
├── registry.json                 Shadcn registry manifest
├── public/r/*.json               Built registry endpoints (one per primitive)
├── src/
│   ├── app/                      Next.js App Router pages
│   │   ├── page.tsx              Landing
│   │   ├── components/page.tsx   Live component showcase
│   │   ├── paper/page.tsx        Paper renderer (markdown → JSX)
│   │   └── registry/page.tsx     Install-command reference
│   ├── components/
│   │   ├── hitl/                 The 11 primitives + 3 shared lib files
│   │   └── site/                 Nav, Footer, brand bits
│   └── lib/                      cn helper, content constants
└── _reference/                   Original artifacts (PDF, docx, earlier drafts)
```

---

## The 11 primitives

Every primitive is the physical embodiment of a claim from the paper.

| Component | What it is |
|---|---|
| `hitl-card` | In-thread approval boundary for agent actions. Three variants, four states. |
| `subagent-status-card` | Single-row agent status. Six execution states (idle, running, completed, error, skipped, cancelled). |
| `mini-trace` | Collapsible thought → action → result viewer. Supporting-facts pattern from §3.3 of the paper. |
| `ai-generation-scale` | Five-segment ordinal of AI vs. human contribution. Dhillon scaffolding principle. |
| `context-chips` | Removable pill chips for notes, files, URLs. |
| `qa-flow` | Multi-question approval card. Single, multi, text. |
| `writing-agent` | Compound widget for a draft-in-progress document with six status states. |
| `research-agent` | Three-mode research config: create, follow-up, read URL. |
| `batch-queue` | Sequential approve and reject across mixed agent items. |
| `search-result-card` | Ranked result with relevance bar and metadata. |
| `approve-reject-row` | The canonical binary decision row. |

Plus 3 shared-lib items (`hitl-utils`, `hitl-types`, `hitl-subagent-meta`) and one `shared-primitives` palette.

---

## Install (shadcn registry)

Works today via GitHub raw URLs. Branded URLs land once the site is deployed.

### Prerequisites

A Tailwind project with shadcn/ui initialized. If you don't have that yet:

```bash
npx shadcn@latest init
```

### Add the accent tokens to your globals.css

HITL Kit primitives reference custom CSS variables for kind-semantic color. Paste this into `app/globals.css`:

```css
:root {
  --accent-violet:  #a78bfa;
  --accent-amber:   #fbbf24;
  --accent-emerald: #4ade80;
  --accent-rose:    #fb7185;
  --accent-blue:    #007AFF;
}
```

### Install a primitive

```bash
npx shadcn@latest add https://raw.githubusercontent.com/akaieuan/HITL-KIT/main/public/r/hitl-card.json
```

The CLI resolves registry dependencies (`hitl-utils`, `hitl-types`) and npm dependencies (`lucide-react`) automatically.

Swap `hitl-card.json` for any primitive name from the table above. See the [full install reference](https://github.com/akaieuan/HITL-KIT/tree/main/public/r) on the site's `/registry` page.

### Once deployed, URLs will simplify to:

```bash
npx shadcn@latest add https://hitl-kit.dev/r/hitl-card.json
```

---

## Local development

```bash
pnpm install
pnpm dev          # dev server at http://localhost:3000
pnpm build        # production build
pnpm typecheck    # tsc --noEmit
```

### Rebuild the registry after editing a primitive

```bash
pnpm registry:build
```

This runs `shadcn build` against `registry.json` and regenerates every `public/r/*.json`. Commit those alongside the source files.

---

## Tech stack

- **Next.js 16** (App Router) + React 19
- **Tailwind CSS v4** (native `@theme` inline)
- **TypeScript 5**
- **shadcn CLI** for registry building
- **lucide-react** for icons
- **react-markdown** + remark-gfm for the paper renderer
- **Geist + JetBrains Mono** for typography

No global state, no CSS-in-JS runtime, no wrapper SDK. Every component is copy-paste ready and yours to edit once installed.

---

## Roadmap

| Version | Scope | Status |
|---|---|---|
| **v0.1** | Reference site, 11 primitives as source, paper, shadcn registry built | ✅ Shipped |
| **v0.2** | Deploy to Vercel, branded URLs, auto-rebuild registry on push via CI | Planned |
| **v0.3** | `@hitl-kit/core` npm package with Zod event schemas + `<HitlEventRenderer />` | Planned |
| **v0.4** | Framework adapter: `@hitl-kit/langgraph` with working demo app | Planned |
| **v0.5** | Second adapter (Vercel AI SDK or Claude Agent SDK) + MCP server | Planned |

The goal for v0.3+ is LLM pluggability: an agent in LangGraph or Vercel AI SDK emits a structured HITL event and the renderer mounts the right primitive with the right props. Tool call → UI. No wiring per component.

---

## Contributing

Issues and PRs welcome. Open an issue first for substantial changes so we can agree on scope.

Good first contributions:
- Prop API polish on any primitive
- Accessibility improvements (ARIA, keyboard navigation)
- A new primitive with a clear HITL use case, plus its entry in `registry.json`
- Documentation fixes

---

## License

MIT. Do what you want.

---

## Credits

Built by [Ieuan King](https://aka4uh.com) ([@akaieuan](https://x.com/akaieuan)).

The component set was originally extracted from [Agatha](https://aka4uh.com), a research-agent workspace, and generalized into an open primitive library.

The paper synthesizes work from Challapally et al. (MIT NANDA 2025), Dhillon et al. (CHI 2024), Kosmyna et al. (MIT 2025), Ott et al. (Nature Comm 2022), Yang et al. (HotpotQA 2018), Zanzotto (JAIR 2019), and others. Full references in the paper.
