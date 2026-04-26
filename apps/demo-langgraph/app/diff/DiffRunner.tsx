"use client";

import { useMemo, useState } from "react";
import { HitlEventRenderer, createRegistry } from "@hitl-kit/react";
import { DiffResultEventSchema, type DiffResultEvent } from "@hitl-kit/core";
import { DiffResult } from "@/components/hitl/DiffResult";

const sample: DiffResultEvent = DiffResultEventSchema.parse({
  kind: "result.diff",
  title: "Tighten introduction paragraph",
  subtitle: "Removes hedging, names the thesis directly",
  language: "markdown",
  hunks: [
    {
      startLine: 1,
      before:
        "It seems like the central question of this paper might be how AI systems should be evaluated when they are deployed in collaborative settings.",
      after:
        "This paper argues that AI systems must be evaluated against collaborative performance, not autonomous task completion.",
    },
  ],
  acceptLabel: "Apply edit",
  rejectLabel: "Keep original",
});

export function DiffRunner() {
  const [decision, setDecision] = useState<{ accepted: boolean } | null>(null);

  const registry = useMemo(
    () =>
      createRegistry({
        "result.diff": (event) => (
          <DiffResult
            {...event}
            onAction={(a) => setDecision(a as { accepted: boolean })}
          />
        ),
      }),
    [],
  );

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <p className="label mb-4">Diff result</p>
      <h1 className="text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl">
        Agent proposes an edit,{" "}
        <span className="text-[color:var(--accent-blue)]">human accepts or rejects</span>.
      </h1>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
        The new <code className="rounded bg-muted/60 px-1 py-0.5 font-mono text-[11px]">result.diff</code>{" "}
        primitive shows a before/after for any text or code change. Drop into any
        agent loop where you want a human to see exactly what will change before it lands.
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
