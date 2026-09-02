"use client";

import { useMemo, useState } from "react";
import { HitlEventRenderer, createRegistry } from "@hitl-kit/react";
import {
  ToolCallPreviewEventSchema,
  type ToolCallAction,
  type ToolCallPreviewEvent,
} from "@hitl-kit/core";
import { DEMO_TOOL_CALL, ToolCallPreview } from "@hitl-kit/ui";

const sample: ToolCallPreviewEvent = ToolCallPreviewEventSchema.parse(DEMO_TOOL_CALL);

export function ToolCallRunner() {
  const [decision, setDecision] = useState<ToolCallAction | null>(null);

  const registry = useMemo(
    () =>
      createRegistry({
        "tool.call": (event) => (
          <ToolCallPreview
            {...event}
            help="Sending leaves the system. Read the arguments before you approve."
            onAction={setDecision}
          />
        ),
      }),
    [],
  );

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <p className="label mb-4">Tool call preview</p>
      <h1 className="text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl">
        Agent wants to call a tool,{" "}
        <span className="text-[color:var(--accent-amber)]">human approves first</span>.
      </h1>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
        The <code className="rounded bg-muted/60 px-1 py-0.5 font-mono text-[11px]">tool.call</code>{" "}
        primitive previews any agent tool call: name, args, optional rationale,
        and optional signals (confidence / cost / scope). The human can approve,
        reject, or say they can&apos;t tell, and undo any of them. The action
        below is the resume payload, verbatim.
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
