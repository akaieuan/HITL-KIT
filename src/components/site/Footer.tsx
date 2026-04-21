import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BRAND } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-32">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-[1fr_auto]">
          {/* Big brand + statement */}
          <div>
            <Link href="/" className="font-serif text-5xl font-light leading-none tracking-tight text-foreground">
              {BRAND.name}
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              {BRAND.tagline} A design system and component library
              for teams building agentic products, paired with an open
              perspective paper on why 95% of enterprise AI fails.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={BRAND.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-transparent px-4 py-2 text-xs text-foreground transition-colors hover:bg-muted"
              >
                Contribute on GitHub
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={BRAND.twitter}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
              >
                @{BRAND.authorHandle}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Column nav */}
          <div className="flex gap-10 text-xs sm:gap-14">
            <div className="flex flex-col gap-3">
              <p className="label">Read</p>
              <Link href="/paper" className="text-muted-foreground transition-colors hover:text-foreground">Paper</Link>
              <Link href="/components" className="text-muted-foreground transition-colors hover:text-foreground">Components</Link>
              <Link href="/registry" className="text-muted-foreground transition-colors hover:text-foreground">Registry</Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="label">Links</p>
              <a href={BRAND.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
                GitHub <ArrowUpRight className="h-3 w-3" />
              </a>
              <a href={BRAND.twitter} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
                X / Twitter <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label">
            © {new Date().getFullYear()} {BRAND.author} · built in public
          </p>
          <p className="label">
            v0.1 · assist-not-complete
          </p>
        </div>
      </div>
    </footer>
  );
}
