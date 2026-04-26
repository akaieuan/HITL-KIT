"use client";

import { useMemo, useState } from "react";
import { HitlEventRenderer, createRegistry } from "@hitl-kit/react";
import {
  CitationResultEventSchema,
  type CitationResultEvent,
} from "@hitl-kit/core";
import { CitationResult } from "@/components/hitl/CitationResult";

const sample: CitationResultEvent = CitationResultEventSchema.parse({
  kind: "result.citation",
  claim:
    "Roughly 95% of enterprise generative-AI pilots fail to reach production deployment.",
  source: {
    title: "The GenAI Divide: State of AI in Business 2025",
    authors: "Challapally et al.",
    year: 2025,
    venue: "MIT NANDA",
    url: "https://example.com/genai-divide",
    quote:
      "Across 312 enterprise rollouts surveyed in Q1-Q3 2025, only 5.4 percent reached sustained production usage; the remainder either stalled in pilot or were withdrawn within 90 days of go-live.",
    pages: "12-14",
  },
  confidence: 0.78,
});

export function CitationRunner() {
  const [decision, setDecision] = useState<{ verified: boolean } | null>(null);

  const registry = useMemo(
    () =>
      createRegistry({
        "result.citation": (event) => (
          <CitationResult
            {...event}
            onAction={(a) => setDecision(a as { verified: boolean })}
          />
        ),
      }),
    [],
  );

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <p className="label mb-4">Citation result</p>
      <h1 className="text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl">
        Agent claims a fact,{" "}
        <span className="text-[color:var(--accent-violet)]">human verifies the source</span>.
      </h1>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
        The new <code className="rounded bg-muted/60 px-1 py-0.5 font-mono text-[11px]">result.citation</code>{" "}
        primitive surfaces a single source-backed citation: the claim, the source metadata,
        an optional supporting quote, and an optional confidence score.
      </p>

      <div className="mt-10">
        <HitlEventRenderer event={sample} registry={registry} />
      </div>

      {decision && (
        <div className="mt-6 rounded-xl border border-border bg-card p-4 text-xs">
          <p className="label mb-2">Resume payload</p>
          <pre className="font-mono text-foreground">{JSON.stringify(decision, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
