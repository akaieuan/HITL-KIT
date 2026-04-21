import Link from "next/link";
import { cn } from "@/lib/utils";
import { BRAND } from "@/lib/content";

const LINKS = [
  { href: "/paper", key: "paper", label: "Paper" },
  { href: "/components", key: "components", label: "Components" },
];

export function Nav({ active }: { active?: "paper" | "components" | "home" }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-serif text-lg font-medium leading-none tracking-tight text-foreground">
            {BRAND.name}
          </span>
          <span className="label hidden sm:inline">v0.1</span>
        </Link>

        <nav className="flex items-center gap-1">
          {LINKS.map((l) => {
            const isActive = active === l.key;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-md px-3 py-1.5 text-xs transition-colors",
                  isActive
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <span className="mx-1 hidden h-4 w-px bg-border sm:inline-block" />
          <a
            href={BRAND.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
