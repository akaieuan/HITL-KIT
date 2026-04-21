import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'HITL Kit — Human-in-the-Loop AI, Measured Properly | aka4uh',
  description:
    'An open-source design system, component library, and perspective paper on human-in-the-loop AI. Eleven primitives, a shadcn registry, and a research argument connecting them.',
}

export default function HitlKitProjectPage() {
  return (
    <div className="min-h-screen bg-background px-6 py-16">
      <article className="mx-auto max-w-2xl">
        <Link
          href="/demo"
          className="mb-10 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Projects
        </Link>

        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground/80">
          Open source · v0.1 shipped
        </p>
        <h1 className="mt-2 text-2xl font-light tracking-tight text-foreground md:text-[26px]">
          HITL Kit
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          A design system, component library, and perspective paper on
          human-in-the-loop AI.{' '}
          <a
            href="https://www.hitlkit.dev"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-border hover:decoration-foreground/60 underline-offset-[3px] transition-colors"
          >
            hitlkit.dev
          </a>
        </p>

        <div className="mt-10 space-y-10 text-[15px] font-light leading-relaxed text-muted-foreground">
          <section className="space-y-3">
            <h2 className="text-sm font-medium tracking-wide text-foreground">What this is</h2>
            <p>
              HITL Kit is three artifacts shipped as one project: a{' '}
              <strong className="font-medium text-foreground/90">perspective paper</strong> arguing that
              95% of enterprise AI pilots fail because we evaluate systems for autonomous completion when
              deployment demands human-AI collaboration; a{' '}
              <strong className="font-medium text-foreground/90">component library</strong> of eleven HITL
              primitives that installs into any shadcn/ui project via one CLI command; and a{' '}
              <strong className="font-medium text-foreground/90">shadcn-compatible registry</strong> I
              built and host at hitlkit.dev. The argument, the implementation, and the distribution, in
              one place.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-sm font-medium tracking-wide text-foreground">What I actually built</h2>
            <ul className="list-disc space-y-2 pl-5 marker:text-muted-foreground/50">
              <li>
                <span className="text-foreground/85">An AI Measurement Problem (paper).</span> A
                perspective piece synthesizing benchmark saturation, cognitive neuroscience, uncertainty
                quantification, and enterprise deployment data into the Assist-Not-Complete paradigm.
                Rendered live on the site from a single markdown source, with a sticky table of contents
                and editorial typography.
              </li>
              <li>
                <span className="text-foreground/85">Eleven HITL primitives.</span> Interrupt Card,
                Subagent Status, MiniTrace, AI Generation Scale, Context Chips, QA Flow, Writing Agent,
                Research Agent, Batch Queue, Search Result Card, Approve/Reject Row. Each one is the
                physical embodiment of a specific claim from the paper.
              </li>
              <li>
                <span className="text-foreground/85">Shadcn registry with fifteen endpoints.</span>{' '}
                registry.json, a build pipeline (pnpm registry:build), and fifteen JSON manifests served
                at hitlkit.dev/r/*.json. Transitive dependencies resolve correctly. End-to-end tested:
                anyone on the open internet can run{' '}
                <code className="rounded bg-muted/60 px-1 py-0.5 font-mono text-[12px]">
                  npx shadcn@latest add https://www.hitlkit.dev/r/hitl-card.json
                </code>{' '}
                and get a working install.
              </li>
              <li>
                <span className="text-foreground/85">The site itself.</span> Next.js 16, Tailwind CSS v4,
                TypeScript, React 19. Dark-mode-first with Geist and JetBrains Mono. Four routes: a
                landing that frames the thesis, a live component showcase, a markdown paper renderer, and
                a registry-install reference page with copy-button commands for every primitive.
              </li>
              <li>
                <span className="text-foreground/85">A taxonomy, not a grab-bag.</span> Every primitive
                traces to a named research claim: MiniTrace instantiates the supporting-facts requirement
                from HotpotQA (Yang 2018), the AI Generation Scale operationalises the scaffolding
                principle from Dhillon 2024, the Interrupt Card is the agency-preservation boundary from
                §3.1. The library is the paper, made clickable.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-sm font-medium tracking-wide text-foreground">Why it&apos;s unusual</h2>
            <p>
              Most open-source AI UI kits are commodities: chat bubbles, tool-call cards, maybe a
              markdown renderer. HITL Kit couples a{' '}
              <strong className="font-medium text-foreground/90">
                research argument with an installable implementation
              </strong>
              . I wrote the paper that says enterprise AI fails because it measures the wrong thing, then
              built the component library that makes the alternative buildable, then set up the shadcn
              registry so other teams can drop those components into their own agentic products.
              Positioning, authorship, engineering, and distribution are all one piece of work. The
              measurement critique is not separate from the UI library. The UI library is the critique
              made useful.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-sm font-medium tracking-wide text-foreground">How I describe the skill set</h2>
            <p className="text-[14px] leading-relaxed">
              Technical writing and research synthesis, design systems, component library engineering,
              shadcn CLI and registry authoring, Next.js App Router, Tailwind CSS v4, TypeScript, React
              19, open-source product positioning, agentic UI pattern design, human-AI collaboration
              research, and the ability to connect all of those into one shippable artifact.
            </p>
          </section>

          <section className="rounded-xl border border-border/80 bg-muted/15 px-5 py-4">
            <p className="text-[14px] leading-relaxed text-foreground/85">
              Most AI UI kits are commodities. HITL Kit couples a research argument with a buildable
              thing. I wrote the paper that justifies the library, built the library, hosted the
              registry, and made every primitive trace back to a specific claim. The paper is not
              marketing for the components; the components are the paper, made installable.
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}
