import Link from "next/link";

export function DemoNav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-border/60 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-11 max-w-2xl items-center gap-4 px-6 text-xs">
        <span className="label">HITL Kit demo</span>
        <div className="mx-auto flex items-center gap-1">
          <Link
            href="/"
            className="rounded-md px-3 py-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            LangGraph
          </Link>
          <Link
            href="/ai-sdk"
            className="rounded-md px-3 py-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            AI SDK
          </Link>
        </div>
        <a
          href="https://www.hitlkit.dev"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          hitlkit.dev ↗
        </a>
      </div>
    </nav>
  );
}
