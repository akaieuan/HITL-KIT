import Link from "next/link";

const tabs = [
  { href: "/", label: "LangGraph" },
  { href: "/ai-sdk", label: "AI SDK" },
  { href: "/diff", label: "Diff" },
  { href: "/citation", label: "Citation" },
  { href: "/plan", label: "Plan" },
  { href: "/tool-call", label: "Tool call" },
];

export function DemoNav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-border/60 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-11 max-w-3xl items-center gap-4 px-6 text-xs">
        <span className="label">HITL Kit demo</span>
        <div className="mx-auto flex items-center gap-1 overflow-x-auto">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className="whitespace-nowrap rounded-md px-3 py-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {tab.label}
            </Link>
          ))}
        </div>
        <a
          href="https://www.hitlkit.dev"
          target="_blank"
          rel="noreferrer"
          className="whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
        >
          hitlkit.dev ↗
        </a>
      </div>
    </nav>
  );
}
