import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { AssistNotComplete } from "@/components/site/AssistNotComplete";
import { cn } from "@/lib/utils";
import { LAYERS, PATTERNS, THESIS, ACCENT_CLASSES, BRAND } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav active="home" />

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section className="pt-24 pb-40 md:pt-32 md:pb-48">
          <p className="label mb-8">
            A measurement problem. An{" "}
            <AssistNotComplete label="assist-not-complete" className="label text-muted-foreground hover:text-foreground" />{" "}
            paradigm.
          </p>

          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[6.5rem] lg:leading-[0.95]">
            Human-in-the-loop AI,{" "}
            <span className="text-[color:var(--accent-blue)] tracking-tight">
              measured properly
            </span>
            .
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {BRAND.name} is a design system and component library for teams
            building agentic products, paired with an open perspective paper
            on why 95% of enterprise AI fails.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link
              href="/paper"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Read the paper
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/components"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-transparent px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-muted"
            >
              Browse components
            </Link>
            <a
              href={BRAND.github}
              target="_blank"
              rel="noreferrer"
              className="ml-auto hidden items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors sm:flex"
            >
              <span className="label">github</span>
              akaieuan / HITL-KIT
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </section>

        {/* Thesis */}
        <section className="pb-32 md:pb-40">
          <blockquote className="font-serif text-2xl font-light leading-[1.3] tracking-tight text-foreground sm:text-3xl md:text-4xl md:leading-[1.25]">
            {THESIS.lede}
          </blockquote>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
            <AssistNotComplete /> is a paradigm for building AI systems that
            collaborate with humans instead of displacing them.
          </p>
        </section>

        {/* Artifacts */}
        <section className="pb-32 md:pb-40">
          <h2 className="mb-14 max-w-3xl font-serif text-3xl leading-tight text-foreground sm:text-5xl">
            A paper, and the components that prove it.
          </h2>

          <div className="flex flex-col">
            {LAYERS.map((layer, i) => {
              const accent = ACCENT_CLASSES[layer.accent];
              return (
                <Link
                  key={layer.key}
                  href={layer.href}
                  className="group grid grid-cols-[80px_1fr] gap-6 py-10 transition-colors first:border-t-0 sm:grid-cols-[140px_1fr_auto] sm:gap-12"
                >
                  {i !== 0 && (
                    <div className="col-span-full -mt-10 mb-10 h-px bg-gradient-to-r from-border via-border/40 to-transparent" />
                  )}

                  <div className="flex flex-col gap-2">
                    <span className={cn("font-mono text-2xl font-medium tracking-tight", accent.text)}>
                      {layer.num}
                    </span>
                    <span className="label">{layer.title}</span>
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl font-light leading-tight tracking-tight text-foreground sm:text-4xl">
                      {layer.subtitle}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {layer.description}
                    </p>
                    <p className="mt-4 font-mono text-[10.5px] tracking-wide text-muted-foreground/70">
                      {layer.meta}
                    </p>
                  </div>

                  <div className="hidden items-center gap-1.5 self-start pt-2 text-xs text-muted-foreground transition-colors group-hover:text-foreground sm:flex">
                    Open
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Patterns */}
        <section id="patterns" className="pb-32 md:pb-40">
          <div className="mb-14 flex items-end justify-between gap-6">
            <h2 className="max-w-2xl font-serif text-3xl leading-tight text-foreground sm:text-5xl">
              Eleven canonical HITL interactions.
            </h2>
            <Link
              href="/components"
              className="hidden shrink-0 text-xs text-muted-foreground transition-colors hover:text-foreground sm:inline-flex sm:items-center sm:gap-1"
            >
              See all components
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-3 lg:grid-cols-3 xl:grid-cols-4">
            {PATTERNS.map((p, i) => {
              const accent = ACCENT_CLASSES[p.accent as keyof typeof ACCENT_CLASSES];
              return (
                <Link
                  key={p.name}
                  href={p.href}
                  className="group relative flex flex-col gap-3 rounded-2xl bg-card/40 p-6 transition-all duration-200 hover:bg-card hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <span className={cn("font-mono text-[10px] font-medium", accent.text)}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={cn("h-1.5 w-1.5 rounded-full", accent.dot)} />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-light leading-tight tracking-tight text-foreground">
                      {p.name}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {p.brief}
                    </p>
                  </div>
                </Link>
              );
            })}

            {/* Browse-all CTA card fills the 12th cell */}
            <Link
              href="/components"
              className="group relative flex min-h-[140px] flex-col justify-between rounded-2xl border border-dashed border-border bg-transparent p-6 transition-colors hover:border-[color:var(--accent-blue)]/40"
            >
              <p className="label">Browse all</p>
              <p className="font-serif text-lg font-light leading-tight tracking-tight text-foreground transition-colors group-hover:text-[color:var(--accent-blue)]">
                Component library{" "}
                <ArrowUpRight className="inline h-4 w-4" />
              </p>
            </Link>
          </div>
        </section>

        {/* Install */}
        <section className="pb-32">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
            <div>
              <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-5xl">
                Drops into your existing shadcn/ui setup.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                No fork. No vendor lock-in. Same tokens, same Radix
                primitives, same Tailwind conventions. Every primitive ships
                as a shadcn registry item. Copy, paste, own.
              </p>
              <Link
                href="/registry"
                className="mt-6 inline-flex items-center gap-1.5 text-sm text-[color:var(--accent-blue)] transition-opacity hover:opacity-80"
              >
                See all 15 install commands
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="label">Install the Interrupt Card</span>
                <div className="h-px flex-1 bg-gradient-to-r from-border/60 to-transparent" />
              </div>
              <pre className="overflow-x-auto py-2 font-mono text-sm text-foreground">
                <span className="text-muted-foreground">$</span> npx shadcn@latest add{" "}
                <span className="text-[color:var(--accent-blue)]">
                  https://hitl-kit.dev/r/hitl-card.json
                </span>
              </pre>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                11 UI primitives, 3 shared libs, 1 root registry. All built,
                hosted at <code className="rounded bg-muted px-1 py-0.5 font-mono text-[10.5px]">/r/*.json</code>. Registry dependencies
                resolve automatically through the shadcn CLI.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
