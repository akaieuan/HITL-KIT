"use client";

import { useMemo, useState } from "react";
import { HitlEventRenderer, createRegistry } from "@hitl-kit/react";
import {
  EditablePlanEventSchema,
  type EditablePlanEvent,
  type PlanStep,
} from "@hitl-kit/core";
import { EditablePlan } from "@/components/hitl/EditablePlan";

const sample: EditablePlanEvent = EditablePlanEventSchema.parse({
  kind: "plan.editable",
  title: "Draft research summary",
  subtitle: "Reorder, edit, or remove steps before the agent runs",
  steps: [
    { id: "scope", label: "Define scope and target audience", locked: true },
    { id: "search", label: "Search for primary sources" },
    { id: "synthesise", label: "Synthesise key claims with citations" },
    { id: "draft", label: "Draft 800-word summary" },
    { id: "review", label: "Self-review for hedging language" },
  ],
  submitLabel: "Run plan",
});

export function PlanRunner() {
  const [resume, setResume] = useState<{
    steps: PlanStep[];
    cancelled?: boolean;
  } | null>(null);

  const registry = useMemo(
    () =>
      createRegistry({
        "plan.editable": (event) => (
          <EditablePlan
            {...event}
            onAction={(a) =>
              setResume(a as { steps: PlanStep[]; cancelled?: boolean })
            }
          />
        ),
      }),
    [],
  );

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <p className="label mb-4">Editable plan</p>
      <h1 className="text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl">
        Agent proposes a plan,{" "}
        <span className="text-[color:var(--accent-blue)]">human edits before it runs</span>.
      </h1>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
        The new <code className="rounded bg-muted/60 px-1 py-0.5 font-mono text-[11px]">plan.editable</code>{" "}
        primitive lets the human reorder, rename, add, or delete steps before the
        agent acts. Locked steps (like scope) can&apos;t be removed.
      </p>

      <div className="mt-10">
        <HitlEventRenderer event={sample} registry={registry} />
      </div>

      {resume && (
        <div className="mt-6 rounded-xl border border-border bg-card p-4 text-xs">
          <p className="label mb-2">Resume payload (sent to graph)</p>
          <pre className="overflow-x-auto font-mono text-foreground">
            {JSON.stringify(resume, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
