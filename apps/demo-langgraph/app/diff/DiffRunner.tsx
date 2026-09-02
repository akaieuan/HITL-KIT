"use client";

import { useMemo, useState } from "react";
import { HitlEventRenderer, createRegistry } from "@hitl-kit/react";
import { DiffResultEventSchema, type DiffAction, type DiffResultEvent } from "@hitl-kit/core";
import { DEMO_DIFF, DiffResult } from "@hitl-kit/ui";

const sample: DiffResultEvent = DiffResultEventSchema.parse(DEMO_DIFF);

export function DiffRunner() {
  const [decision, setDecision] = useState<DiffAction | null>(null);

  const registry = useMemo(
    () =>
      createRegistry({
        "result.diff": (event) => <DiffResult {...event} onAction={setDecision} />,
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
        The <code className="rounded bg-muted/60 px-1 py-0.5 font-mono text-[11px]">result.diff</code>{" "}
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
