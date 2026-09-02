"use client";

import { useMemo, useState } from "react";
import { HitlEventRenderer, createRegistry } from "@hitl-kit/react";
import {
  CitationResultEventSchema,
  type CitationAction,
  type CitationResultEvent,
} from "@hitl-kit/core";
import { CitationResult, DEMO_CITATION } from "@hitl-kit/ui";

const sample: CitationResultEvent = CitationResultEventSchema.parse(DEMO_CITATION);

export function CitationRunner() {
  const [decision, setDecision] = useState<CitationAction | null>(null);

  const registry = useMemo(
    () =>
      createRegistry({
        "result.citation": (event) => (
          <CitationResult
            {...event}
            help="Open the quote. Does the source say what the claim says it says?"
            onAction={setDecision}
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
        The <code className="rounded bg-muted/60 px-1 py-0.5 font-mono text-[11px]">result.citation</code>{" "}
        primitive surfaces a single source-backed citation: the claim, the source metadata,
        an optional supporting quote, and an optional confidence score. Verify, reject,
        or say you can&apos;t tell.
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
