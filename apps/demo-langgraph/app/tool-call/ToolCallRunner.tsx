"use client";

import { useMemo, useState } from "react";
import { HitlEventRenderer, createRegistry } from "@hitl-kit/react";
import {
  ToolCallPreviewEventSchema,
  type ToolCallPreviewEvent,
} from "@hitl-kit/core";
import { ToolCallPreview } from "@/components/hitl/ToolCallPreview";

const sample: ToolCallPreviewEvent = ToolCallPreviewEventSchema.parse({
  kind: "tool.call",
  toolName: "send_email",
  rationale:
    "Drafted reply to the client thread; confirming high-stakes outbound before sending.",
  args: {
    to: "client@example.com",
    subject: "Re: Q3 deliverable timeline",
    body: "Thanks for flagging the schedule risk — I've replanned around the milestone you raised and will send a revised plan by Friday.",
    cc: ["pm@internal.com"],
  },
  signals: {
    confidence: 0.86,
    costUsd: 0.0012,
    scope: ["write:email", "send:external"],
  },
  approveLabel: "Send email",
  rejectLabel: "Hold",
});

export function ToolCallRunner() {
  const [decision, setDecision] = useState<{ approved: boolean } | null>(null);

  const registry = useMemo(
    () =>
      createRegistry({
        "tool.call": (event) => (
          <ToolCallPreview
            {...event}
            onAction={(a) => setDecision(a as { approved: boolean })}
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
        The new <code className="rounded bg-muted/60 px-1 py-0.5 font-mono text-[11px]">tool.call</code>{" "}
        primitive previews any agent tool call: name, args, optional rationale,
        and optional signals (confidence / cost / scope). The signals power
        gate decisions in v0.6b.
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
