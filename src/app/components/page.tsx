"use client";

import { useState, useEffect } from "react";
import {
  Search,
  PenLine,
  Check,
  X,
  ChevronRight,
  ChevronDown,
  GraduationCap,
  ClipboardList,
  Cpu,
  Loader2,
  SkipForward,
  AlertOctagon,
  Ban,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { HitlCard, DEMO_HITL_CARDS } from "@/components/hitl/HitlCard";
import { WritingAgent } from "@/components/hitl/WritingAgent";
import { ResearchAgent } from "@/components/hitl/ResearchAgent";
import { SharedPrimitives } from "@/components/hitl/SharedPrimitives";
import { SEARCH_RESULTS } from "@/components/hitl/data";
import type { AgentStatus } from "@/components/hitl/types";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

// ─── Section wrapper (minimal, no boxed cards) ───────────────────────────────

function Section({
  id,
  index,
  label,
  description,
  children,
  cols = 1,
}: {
  id: string;
  index: string;
  label: string;
  description: string;
  children: React.ReactNode;
  cols?: 1 | 2 | 3;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-20">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono text-[11px] font-medium tracking-[0.12em] text-foreground">
          §&nbsp;{index}
        </span>
        <span className="font-mono text-[11px] tracking-[0.08em] text-muted-foreground uppercase">
          Component
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-border via-border/30 to-transparent" />
      </div>

      <div className="mb-12">
        <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-5xl">
          {label}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      <div
        className={cn(
          "grid gap-10",
          cols === 2 && "md:grid-cols-2",
          cols === 3 && "md:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {children}
      </div>
    </section>
  );
}

function Demo({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline justify-between gap-2 border-t border-border pt-3">
        <span className="label">{label}</span>
        {hint && (
          <span className="font-mono text-[10px] text-muted-foreground">
            {hint}
          </span>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}

// ─── Interrupt cards ─────────────────────────────────────────────────────────

function HitlSection() {
  return (
    <Section
      id="hitl"
      index="I"
      label="Interrupt Cards"
      description="Human-in-the-loop interrupt cards rendered inline in a chat thread. Three semantic variants. Each has idle, expanded, confirmed, and dismissed states. Click any to expand."
      cols={3}
    >
      {DEMO_HITL_CARDS.map((c) => (
        <Demo
          key={c.id}
          label={c.kind}
          hint={`kind="${c.kind}"`}
        >
          <HitlCard config={c} />
        </Demo>
      ))}
    </Section>
  );
}

// ─── Subagent status ─────────────────────────────────────────────────────────

const STATUS_META: Record<AgentStatus, { icon: React.ElementType; color: string }> = {
  idle: { icon: Cpu, color: "text-muted-foreground" },
  running: { icon: Loader2, color: "text-[color:var(--accent-blue)]" },
  completed: { icon: Check, color: "text-[color:var(--accent-emerald)]" },
  error: { icon: AlertOctagon, color: "text-[color:var(--accent-rose)]" },
  skipped: { icon: SkipForward, color: "text-[color:var(--accent-amber)]" },
  cancelled: { icon: Ban, color: "text-muted-foreground" },
};

function AgentStatusSection() {
  const statuses = Object.entries(STATUS_META) as [
    AgentStatus,
    (typeof STATUS_META)[AgentStatus],
  ][];
  return (
    <Section
      id="agent-status"
      index="II"
      label="Subagent Status"
      description="Six discrete agent execution states. The running state animates. Use in any card that wraps an in-progress agentic task."
      cols={2}
    >
      {statuses.map(([status, meta]) => {
        const Icon = meta.icon;
        return (
          <Demo key={status} label={status} hint={`status="${status}"`}>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-background/40 px-3 py-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted">
                <Icon
                  className={cn(
                    "h-3.5 w-3.5",
                    meta.color,
                    status === "running" && "animate-spin",
                  )}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-foreground">Research Agent</p>
                <p className="text-[10px] text-muted-foreground">Climate Policy workspace</p>
              </div>
              <span className={cn("text-[10px] font-medium capitalize", meta.color)}>
                {status}
              </span>
            </div>
          </Demo>
        );
      })}
    </Section>
  );
}

// ─── MiniTrace ───────────────────────────────────────────────────────────────

const TRACE_STEPS = [
  {
    type: "thought" as const,
    label: "Determine search strategy",
    detail: "Analyzing query intent and relevant databases",
  },
  {
    type: "action" as const,
    label: "Execute semantic search",
    detail: 'Query: "carbon pricing" returned 177 results',
  },
  {
    type: "result" as const,
    label: "Ranked results ready",
    detail: "Top 5 results surfaced with relevance scores",
  },
];

const TRACE_COLORS = {
  thought: {
    dot: "bg-[color:var(--accent-violet)]",
    border: "border-[color:var(--accent-violet)]/30",
    bg: "bg-[color:var(--accent-violet)]/5",
  },
  action: {
    dot: "bg-[color:var(--accent-blue)]",
    border: "border-[color:var(--accent-blue)]/30",
    bg: "bg-[color:var(--accent-blue)]/5",
  },
  result: {
    dot: "bg-[color:var(--accent-emerald)]",
    border: "border-[color:var(--accent-emerald)]/30",
    bg: "bg-[color:var(--accent-emerald)]/5",
  },
};

function MiniTraceSection() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const toggle = (i: number) =>
    setExpanded((p) => {
      const n = new Set(p);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });

  return (
    <Section
      id="trace"
      index="III"
      label="MiniTrace"
      description="Step-by-step thought, action, result trace renderer. Each step is collapsible to reveal detail. Makes agent reasoning transparent. A visible implementation of the supporting-facts requirement from §3.3 of the paper."
    >
      <Demo label="Search trace" hint="3 steps. Click any row to expand.">
        <div className="space-y-1.5">
          {TRACE_STEPS.map((step, i) => {
            const c = TRACE_COLORS[step.type];
            return (
              <div
                key={i}
                className={cn("rounded-lg border px-3 py-2 text-xs", c.border, c.bg)}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center gap-2 text-left"
                >
                  <span className={cn("h-2 w-2 shrink-0 rounded-full", c.dot)} />
                  <span className="flex-1 font-medium capitalize text-foreground">
                    {step.type}: {step.label}
                  </span>
                  {expanded.has(i) ? (
                    <ChevronDown className="h-3 w-3 shrink-0 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-3 w-3 shrink-0 text-muted-foreground" />
                  )}
                </button>
                {expanded.has(i) && (
                  <p className="mt-1 pl-4 text-[11px] text-muted-foreground">
                    {step.detail}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Demo>
    </Section>
  );
}

// ─── AI Generation Scale ─────────────────────────────────────────────────────

function AiScaleSection() {
  const labels = ["Human", "Mostly Human", "Collaborative", "Mostly AI", "AI"];
  const colors = [
    "bg-[color:var(--accent-emerald)]",
    "bg-[color:var(--accent-blue)]",
    "bg-[color:var(--accent-amber)]",
    "bg-[color:var(--accent-violet)]",
    "bg-[color:var(--accent-rose)]",
  ];
  const [values, setValues] = useState([0, 2, 4]);

  return (
    <Section
      id="ai-scale"
      index="IV"
      label="AI Generation Scale"
      description="Five-segment ordinal scale indicating AI involvement in a piece of work. Interactive. Click any segment to select. Embodies the scaffolding and expertise-matching principle from Dhillon et al. (2024)."
    >
      <Demo label="Three configurations" hint="Click segments to adjust">
        <div className="space-y-5">
          {values.map((v, idx) => (
            <div key={idx}>
              <div className="mb-1.5 flex gap-1">
                {labels.map((l, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      setValues((vals) => vals.map((x, j) => (j === idx ? i : x)))
                    }
                    className={cn(
                      "flex-1 rounded-md border py-1.5 text-center text-[10px] font-semibold uppercase tracking-wide transition-all",
                      v === i
                        ? `${colors[i]} border-transparent text-black`
                        : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
                    )}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <p className="text-center text-[10px] text-muted-foreground">
                Current: {labels[v]}
              </p>
            </div>
          ))}
        </div>
      </Demo>
    </Section>
  );
}

// ─── Context chips ───────────────────────────────────────────────────────────

const CONTEXT_SEEDS = [
  { id: "c1", color: "bg-[color:var(--accent-violet)]", label: "AR6 temperature finding" },
  { id: "c2", color: "bg-[color:var(--accent-blue)]", label: "IPCC AR6 Synthesis.pdf" },
  { id: "c3", color: "bg-[color:var(--accent-emerald)]", label: "eu-ets.europa.eu" },
  { id: "c4", color: "bg-[color:var(--accent-amber)]", label: "Price corridor note" },
  { id: "c5", color: "bg-[color:var(--accent-blue)]", label: "Carbon Markets 2024.pdf" },
];

function ContextItemsSection() {
  const [items, setItems] = useState(CONTEXT_SEEDS);
  const remove = (id: string) => setItems((p) => p.filter((x) => x.id !== id));
  const reset = () => setItems(CONTEXT_SEEDS);

  return (
    <Section
      id="context"
      index="V"
      label="Context Chips"
      description="Pill chips representing context attached to an agent run. Notes, files, URLs. Removable. Overflow truncation built in."
    >
      <Demo label="Context strip" hint="Click × to remove chips">
        <div className="flex flex-wrap items-center gap-1.5">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-1.5 rounded-full border border-border bg-background/40 px-2 py-0.5 text-xs text-foreground"
            >
              <span className={cn("h-2 w-2 shrink-0 rounded-full", item.color)} />
              <span>{item.label}</span>
              <button
                onClick={() => remove(item.id)}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-2.5 w-2.5" />
              </button>
            </div>
          ))}
          {items.length === 0 && (
            <span className="text-xs italic text-muted-foreground">All removed.</span>
          )}
          <button
            onClick={reset}
            className="text-[10px] text-muted-foreground underline underline-offset-2 hover:text-foreground"
          >
            reset
          </button>
        </div>
      </Demo>
    </Section>
  );
}

// ─── QA Flow ─────────────────────────────────────────────────────────────────

function QASection() {
  const [choice, setChoice] = useState("");
  const [multi, setMulti] = useState<Set<string>>(new Set());
  const [other, setOther] = useState("");
  const [done, setDone] = useState(false);
  const toggle = (o: string) =>
    setMulti((p) => {
      const n = new Set(p);
      if (n.has(o)) n.delete(o);
      else n.add(o);
      return n;
    });
  const single = [
    "Carbon pricing",
    "Regulation",
    "Voluntary markets",
    "Technology mandates",
  ];
  const multi_ = [
    "Stakeholder alignment",
    "Monitoring & verification",
    "Political feasibility",
    "Cost-effectiveness",
  ];

  return (
    <Section
      id="qa"
      index="VI"
      label="QA Flow"
      description="Multi-question approval card. Single-choice, multi-select, and a freeform other field. Submits to a confirmed state."
    >
      <Demo label="QA form" hint="Fill out and hit Continue">
        {done ? (
          <div className="flex items-center gap-2 rounded-lg border border-[color:var(--accent-emerald)]/30 bg-[color:var(--accent-emerald)]/5 p-3 text-sm font-medium text-[color:var(--accent-emerald)]">
            <Check className="h-4 w-4" /> Responses submitted
            <button
              onClick={() => {
                setDone(false);
                setChoice("");
                setMulti(new Set());
                setOther("");
              }}
              className="ml-auto text-[10px] underline underline-offset-2 opacity-60 hover:opacity-100"
            >
              reset
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <p className="mb-1.5 text-xs font-medium text-foreground">
                Preferred mechanism?
              </p>
              <div className="space-y-1">
                {single.map((o) => (
                  <button
                    key={o}
                    onClick={() => setChoice(o)}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-md border px-3 py-2 text-xs transition-colors",
                      choice === o
                        ? "border-[color:var(--accent-blue)]/50 bg-[color:var(--accent-blue)]/5 text-foreground"
                        : "border-border text-muted-foreground hover:bg-muted",
                    )}
                  >
                    <div
                      className={cn(
                        "h-3 w-3 shrink-0 rounded-full border",
                        choice === o
                          ? "border-[color:var(--accent-blue)] bg-[color:var(--accent-blue)]"
                          : "border-muted-foreground",
                      )}
                    />
                    {o}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-1.5 text-xs font-medium text-foreground">
                Implementation challenges?
              </p>
              <div className="space-y-1">
                {multi_.map((o) => (
                  <button
                    key={o}
                    onClick={() => toggle(o)}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-md border px-3 py-2 text-xs transition-colors",
                      multi.has(o)
                        ? "border-[color:var(--accent-blue)]/50 bg-[color:var(--accent-blue)]/5 text-foreground"
                        : "border-border text-muted-foreground hover:bg-muted",
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-3 w-3 shrink-0 items-center justify-center rounded",
                        multi.has(o)
                          ? "bg-[color:var(--accent-blue)]"
                          : "border border-muted-foreground",
                      )}
                    >
                      {multi.has(o) && <Check className="h-2 w-2 text-black" />}
                    </div>
                    {o}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-1 text-xs font-medium text-foreground">Other notes</p>
              <textarea
                className="w-full resize-none rounded-lg border border-border bg-background/40 px-3 py-2 text-xs outline-none placeholder:text-muted-foreground focus:ring-1 focus:ring-[color:var(--accent-blue)]"
                rows={2}
                placeholder="Any additional context…"
                value={other}
                onChange={(e) => setOther(e.target.value)}
              />
            </div>
            <button
              onClick={() => setDone(true)}
              className="w-full rounded-lg bg-foreground py-2 text-xs font-medium text-background transition-opacity hover:opacity-90"
            >
              Continue
            </button>
          </div>
        )}
      </Demo>
    </Section>
  );
}

// ─── Writing agent (NEW) ─────────────────────────────────────────────────────

function WritingAgentSection() {
  return (
    <Section
      id="writing-agent"
      index="VII"
      label="Writing Agent"
      description="Compound widget for a draft-in-progress document. Shows title, target section, word range, evidence notes, and the six status states. Use as the surface for an agent writing on your behalf."
    >
      <Demo label="Write doc agent" hint="Click status chips to cycle">
        <WritingAgent />
      </Demo>
    </Section>
  );
}

// ─── Research agent (NEW) ────────────────────────────────────────────────────

function ResearchAgentSection() {
  return (
    <Section
      id="research-agent"
      index="VIII"
      label="Research Agent"
      description="Three operating modes. Create (new session), Follow-up (continue a session), Read URL (extract from a single page). Use as the config surface for a long-running research task."
    >
      <Demo label="Research agent" hint="Switch modes in the top right">
        <ResearchAgent />
      </Demo>
    </Section>
  );
}

// ─── Search result cards ─────────────────────────────────────────────────────

function SearchCardsSection() {
  return (
    <Section
      id="search-cards"
      index="X"
      label="Search Result Cards"
      description="Ranked result cards with metadata, snippet, and relevance bar. Used in the Search right panel."
      cols={2}
    >
      {SEARCH_RESULTS.slice(0, 4).map((r) => (
        <Demo
          key={r.id}
          label={`Result #${r.rank}`}
          hint={`${r.venue}, ${r.year} · ${Math.round(r.relevance * 100)}% relevance`}
        >
          <div>
            <p className="mb-1 text-xs font-medium leading-snug text-foreground">
              {r.title}
            </p>
            <p className="mb-1 text-[10px] text-muted-foreground">{r.authors}</p>
            <p className="mb-2 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">
              {r.snippet}
            </p>
            <div className="flex items-center gap-2">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-[color:var(--accent-violet)] transition-all"
                  style={{ width: `${r.relevance * 100}%` }}
                />
              </div>
              <span className="text-[10px] text-muted-foreground">
                {Math.round(r.relevance * 100)}%
              </span>
            </div>
          </div>
        </Demo>
      ))}
    </Section>
  );
}

// ─── Approve / Reject ────────────────────────────────────────────────────────

function ApprovalSection() {
  type S = "pending" | "approved" | "rejected";
  const [states, setStates] = useState<S[]>([
    "pending",
    "pending",
    "pending",
    "pending",
  ]);
  const set = (i: number, s: S) =>
    setStates((p) => p.map((x, j) => (j === i ? s : x)));

  const items = [
    { label: "Verify citation accuracy", meta: "IPCC 2023 · p. 12", accent: "bg-[color:var(--accent-amber)]" },
    { label: "Confirm highlighted quote", meta: "Policy Brief §3.1", accent: "bg-[color:var(--accent-violet)]" },
    { label: "Approve section for export", meta: "Writing · Section 2", accent: "bg-[color:var(--accent-emerald)]" },
    { label: "Download: Carbon Pricing paper", meta: "Nature Climate, 2023", accent: "bg-[color:var(--accent-blue)]" },
  ];

  return (
    <Section
      id="approval"
      index="XI"
      label="Approve / Reject"
      description="The core binary decision row used across review, download, and notes panels. Three terminal states. Pending, approved, rejected."
      cols={2}
    >
      {items.map((item, i) => (
        <Demo key={i} label={item.label} hint={item.meta}>
          <div className="flex items-center gap-3">
            <div className={cn("w-1 self-stretch shrink-0 rounded-full", item.accent)} />
            <div className="flex-1">
              {states[i] === "pending" ? (
                <div className="flex gap-1.5">
                  <button
                    onClick={() => set(i, "approved")}
                    className="flex items-center gap-1 rounded-md bg-[color:var(--accent-emerald)]/10 px-2.5 py-1.5 text-xs font-medium text-[color:var(--accent-emerald)] transition-colors hover:bg-[color:var(--accent-emerald)]/20"
                  >
                    <Check className="h-3 w-3" /> Approve
                  </button>
                  <button
                    onClick={() => set(i, "rejected")}
                    className="flex items-center gap-1 rounded-md bg-[color:var(--accent-rose)]/10 px-2.5 py-1.5 text-xs font-medium text-[color:var(--accent-rose)] transition-colors hover:bg-[color:var(--accent-rose)]/20"
                  >
                    <X className="h-3 w-3" /> Reject
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "text-xs font-medium capitalize",
                      states[i] === "approved"
                        ? "text-[color:var(--accent-emerald)]"
                        : "text-[color:var(--accent-rose)]",
                    )}
                  >
                    {states[i]}
                  </span>
                  <button
                    onClick={() => set(i, "pending")}
                    className="text-[10px] text-muted-foreground underline underline-offset-2 hover:text-foreground"
                  >
                    undo
                  </button>
                </div>
              )}
            </div>
          </div>
        </Demo>
      ))}
    </Section>
  );
}

// ─── Batch queue ─────────────────────────────────────────────────────────────

const BATCH = [
  { type: "search", label: "Search: carbon pricing 2024", icon: Search },
  { type: "write", label: "Write: Section 2 introduction", icon: PenLine },
  { type: "research", label: "Research: IPCC AR6 findings", icon: GraduationCap },
  { type: "qa", label: "QA: Verify citation accuracy", icon: ClipboardList },
  { type: "web", label: "Read: eu-ets.europa.eu", icon: Globe },
];

function BatchSection() {
  const [decisions, setDecisions] = useState<
    Record<string, "approved" | "rejected" | null>
  >(Object.fromEntries(BATCH.map((b) => [b.type, null])));
  const [current, setCurrent] = useState(0);
  const decide = (type: string, d: "approved" | "rejected") => {
    setDecisions((p) => ({ ...p, [type]: d }));
    setCurrent((c) => Math.min(c + 1, BATCH.length));
  };
  const reset = () => {
    setDecisions(Object.fromEntries(BATCH.map((b) => [b.type, null])));
    setCurrent(0);
  };
  const all = Object.values(decisions).every((d) => d !== null);
  const approved = Object.values(decisions).filter((d) => d === "approved").length;

  return (
    <Section
      id="batch"
      index="IX"
      label="Batch Approval Queue"
      description="Sequential approve-reject flow across mixed agent items. Auto-advances to the next item. Resolves to a summary state."
    >
      <Demo label="Kitchen sink batch" hint="5 items. Step through each decision.">
        {all ? (
          <div className="space-y-3 text-center">
            <Check className="mx-auto h-8 w-8 text-[color:var(--accent-emerald)]" />
            <div>
              <p className="text-sm font-semibold text-foreground">Batch complete</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {approved} approved · {BATCH.length - approved} rejected
              </p>
            </div>
            <button
              onClick={reset}
              className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
            >
              Reset
            </button>
          </div>
        ) : (
          <div className="divide-y divide-border overflow-hidden rounded-lg border border-border">
            {BATCH.map((item, i) => {
              const Icon = item.icon;
              const d = decisions[item.type];
              const isActive = i === current;
              return (
                <div
                  key={item.type}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 text-xs transition-colors",
                    isActive && "bg-muted/50",
                  )}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                  <span
                    className={cn(
                      "flex-1 text-foreground",
                      d === "rejected" && "text-muted-foreground line-through",
                    )}
                  >
                    {item.label}
                  </span>
                  {d === "approved" && (
                    <Check className="h-4 w-4 shrink-0 text-[color:var(--accent-emerald)]" />
                  )}
                  {d === "rejected" && (
                    <X className="h-4 w-4 shrink-0 text-[color:var(--accent-rose)]" />
                  )}
                  {!d && isActive && (
                    <div className="flex shrink-0 gap-1.5">
                      <button
                        onClick={() => decide(item.type, "approved")}
                        className="rounded-md bg-[color:var(--accent-emerald)]/10 px-2 py-1 text-[color:var(--accent-emerald)] transition-colors hover:bg-[color:var(--accent-emerald)]/20"
                      >
                        ✓
                      </button>
                      <button
                        onClick={() => decide(item.type, "rejected")}
                        className="rounded-md bg-[color:var(--accent-rose)]/10 px-2 py-1 text-[color:var(--accent-rose)] transition-colors hover:bg-[color:var(--accent-rose)]/20"
                      >
                        ✗
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </Demo>
    </Section>
  );
}

// ─── Shared primitives (NEW) ─────────────────────────────────────────────────

function SharedPrimitivesSection() {
  return (
    <Section
      id="shared"
      index="XII"
      label="Shared Primitives"
      description="The atomic palette. Accent swatches, approval badge variants, and approve and reject rows. All other primitives compose from these pieces."
    >
      <Demo label="Shared palette" hint="Interactive">
        <SharedPrimitives />
      </Demo>
    </Section>
  );
}

// ─── TOC ─────────────────────────────────────────────────────────────────────

const TOC = [
  { id: "hitl", label: "Interrupt Cards" },
  { id: "agent-status", label: "Subagent Status" },
  { id: "trace", label: "MiniTrace" },
  { id: "ai-scale", label: "AI Generation Scale" },
  { id: "context", label: "Context Chips" },
  { id: "qa", label: "QA Flow" },
  { id: "writing-agent", label: "Writing Agent" },
  { id: "research-agent", label: "Research Agent" },
  { id: "batch", label: "Batch Queue" },
  { id: "search-cards", label: "Search Result Cards" },
  { id: "approval", label: "Approve / Reject" },
  { id: "shared", label: "Shared Primitives" },
];

export default function ComponentsPage() {
  const [active, setActive] = useState("hitl");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    TOC.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav active="components" />

      <div className="mx-auto flex max-w-6xl gap-12 px-6 pt-10">
        <aside className="sticky top-24 hidden h-fit w-56 shrink-0 lg:block">
          <p className="label mb-4">Patterns</p>
          <nav className="flex flex-col gap-0.5">
            {TOC.map(({ id, label }, i) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setActive(id)}
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 text-xs transition-colors",
                  active === id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="font-mono text-[9px] text-muted-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <main className="min-w-0 flex-1 pb-24">
          <div className="mb-20 pt-4">
            <p className="label mb-3">Component library</p>
            <h1 className="font-serif text-5xl leading-tight text-foreground sm:text-7xl">
              The HITL pattern language,{" "}
              <span className="text-[color:var(--accent-blue)] tracking-tight">
                as real components
              </span>
              .
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Every primitive below is the physical embodiment of a claim from
              the paper. Interactive. shadcn-compatible. Copy-paste ready.
            </p>
          </div>

          <HitlSection />
          <AgentStatusSection />
          <MiniTraceSection />
          <AiScaleSection />
          <ContextItemsSection />
          <QASection />
          <WritingAgentSection />
          <ResearchAgentSection />
          <BatchSection />
          <SearchCardsSection />
          <ApprovalSection />
          <SharedPrimitivesSection />
        </main>
      </div>

      <Footer />
    </>
  );
}
