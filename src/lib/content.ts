export const BRAND = {
  name: "HITL Kit",
  tagline: "Human-in-the-loop AI, measured properly.",
  description:
    "A design system and component library for human-in-the-loop AI, grounded in an open perspective paper.",
  github: "https://github.com/akaieuan/HITL-KIT",
  twitter: "https://x.com/akaieuan",
  site: "https://aka4uh.com",
  author: "Ieuan King",
  authorHandle: "akaieuan",
};

export const THESIS = {
  lede:
    "Most AI systems are evaluated on whether they can complete tasks autonomously. But in deployment, they need to assist humans, not replace them. That mismatch is why 95% of enterprise AI pilots fail.",
  claim:
    "Assist-Not-Complete is a paradigm for building AI systems that collaborate with humans instead of displacing them.",
};

export const LAYERS = [
  {
    num: "I",
    key: "paper",
    title: "The paper",
    subtitle: "An AI Measurement Problem",
    description:
      "A perspective piece synthesizing benchmark science, cognitive neuroscience, uncertainty quantification, and enterprise deployment data into the Assist-Not-Complete thesis.",
    meta: "~ 30 min read · 2026",
    href: "/paper",
    accent: "blue" as const,
  },
  {
    num: "II",
    key: "components",
    title: "The components",
    subtitle: "A shadcn-compatible HITL primitive library",
    description:
      "Eleven primitives for agentic UIs. Interrupt cards, approve and reject flows, batch queues, subagent states, trace viewers, the AI generation scale. Each one is the physical embodiment of a claim from the paper.",
    meta: "11 primitives · copy-paste · MIT",
    href: "/components",
    accent: "violet" as const,
  },
];

export const PATTERNS = [
  { name: "Interrupt Card", brief: "In-thread approval boundary for agent actions.", accent: "violet", href: "/components#hitl" },
  { name: "Subagent Status", brief: "Six discrete execution states for a running agent.", accent: "blue", href: "/components#agent-status" },
  { name: "MiniTrace", brief: "Collapsible thought, action, result viewer.", accent: "violet", href: "/components#trace" },
  { name: "AI Generation Scale", brief: "Five-segment ordinal of AI vs. human contribution.", accent: "amber", href: "/components#ai-scale" },
  { name: "Context Chips", brief: "Removable pills showing attached notes, files, URLs.", accent: "blue", href: "/components#context" },
  { name: "QA Flow", brief: "Multi-question approval card for agent-to-human handoff.", accent: "emerald", href: "/components#qa" },
  { name: "Writing Agent", brief: "Compound widget for draft-in-progress with status and evidence.", accent: "blue", href: "/components#writing-agent" },
  { name: "Research Agent", brief: "Three modes. Create, follow-up, read URL.", accent: "violet", href: "/components#research-agent" },
  { name: "Batch Queue", brief: "Sequential resolution of mixed agent items.", accent: "amber", href: "/components#batch" },
  { name: "Search Result Card", brief: "Ranked result with relevance bar and metadata.", accent: "violet", href: "/components#search-cards" },
  { name: "Shared Primitives", brief: "Accent swatches, approval badges, approve and reject rows.", accent: "emerald", href: "/components#shared" },
];

export type Accent = "violet" | "amber" | "emerald" | "blue" | "rose";

export const ACCENT_CLASSES: Record<Accent, { text: string; bg: string; border: string; dot: string; soft: string }> = {
  violet:  { text: "text-[color:var(--accent-violet)]",  bg: "bg-[color:var(--accent-violet)]",  border: "border-[color:var(--accent-violet)]/40",  dot: "bg-[color:var(--accent-violet)]",  soft: "bg-[color:var(--accent-violet)]/10" },
  amber:   { text: "text-[color:var(--accent-amber)]",   bg: "bg-[color:var(--accent-amber)]",   border: "border-[color:var(--accent-amber)]/40",   dot: "bg-[color:var(--accent-amber)]",   soft: "bg-[color:var(--accent-amber)]/10" },
  emerald: { text: "text-[color:var(--accent-emerald)]", bg: "bg-[color:var(--accent-emerald)]", border: "border-[color:var(--accent-emerald)]/40", dot: "bg-[color:var(--accent-emerald)]", soft: "bg-[color:var(--accent-emerald)]/10" },
  blue:    { text: "text-[color:var(--accent-blue)]",    bg: "bg-[color:var(--accent-blue)]",    border: "border-[color:var(--accent-blue)]/40",    dot: "bg-[color:var(--accent-blue)]",    soft: "bg-[color:var(--accent-blue)]/10" },
  rose:    { text: "text-[color:var(--accent-rose)]",    bg: "bg-[color:var(--accent-rose)]",    border: "border-[color:var(--accent-rose)]/40",    dot: "bg-[color:var(--accent-rose)]",    soft: "bg-[color:var(--accent-rose)]/10" },
};
