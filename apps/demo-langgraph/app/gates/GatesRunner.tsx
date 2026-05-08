"use client";

import { useMemo, useState } from "react";
import { HitlEventRenderer, createRegistry } from "@hitl-kit/react";
import {
  HitlCardEventSchema,
  ToolCallPreviewEventSchema,
  type HitlCardEvent,
  type ToolCallPreviewEvent,
} from "@hitl-kit/core";
import { confidenceGate, costGate } from "@hitl-kit/gates";
import { withGates } from "@hitl-kit/ai-sdk";
import { HitlCard } from "@/components/hitl/HitlCard";
import { ToolCallPreview } from "@/components/hitl/ToolCallPreview";

/**
 * The base "happy path" tool result the agent would produce. We wrap a
 * fake AI SDK tool with `withGates` and run it client-side so the demo
 * doesn't need a model. The wrapped tool's execute is what the agent
 * would call; in this demo we drive it directly with a confidence slider.
 */
const baseEvent: ToolCallPreviewEvent = ToolCallPreviewEventSchema.parse({
  kind: "tool.call",
  toolName: "send_email",
  rationale: "Drafted reply to the client thread.",
  args: {
    to: "client@example.com",
    subject: "Re: Q3 deliverable timeline",
    body: "Quick note — revised plan attached.",
  },
  signals: { confidence: 0.86, costUsd: 0.0012 },
  approveLabel: "Send",
});

function makeTool() {
  return {
    description: "Send an email after preview",
    inputSchema: {},
    execute: async (
      input: { confidence: number; costUsd: number },
    ): Promise<ToolCallPreviewEvent> =>
      ToolCallPreviewEventSchema.parse({
        ...baseEvent,
        signals: {
          confidence: input.confidence,
          costUsd: input.costUsd,
        },
      }),
  };
}

type Result =
  | { kind: "tool.call"; event: ToolCallPreviewEvent }
  | { kind: "hitl.card"; event: HitlCardEvent };

export function GatesRunner() {
  const [confidence, setConfidence] = useState(0.86);
  const [costUsd, setCostUsd] = useState(0.0012);
  const [confMin, setConfMin] = useState(0.85);
  const [costMax, setCostMax] = useState(0.05);
  const [result, setResult] = useState<Result | null>(null);

  const registry = useMemo(
    () =>
      createRegistry({
        "tool.call": (event) => <ToolCallPreview {...event} />,
        "hitl.card": (event) => (
          <HitlCard
            config={{
              id: event.id ?? "default",
              kind: event.variant,
              title: event.title,
              subtitle: event.subtitle,
              steps: event.steps,
              runLabel: event.runLabel,
              editPlaceholder: event.editPlaceholder,
              openTab: "human",
            }}
          />
        ),
      }),
    [],
  );

  const run = async () => {
    const gatedTool = withGates(
      makeTool(),
      [
        confidenceGate({ min: confMin }),
        costGate({ maxUsd: costMax }),
      ],
      {
        signals: () => ({ confidence, costUsd }),
        // default onDeny: "escalate" — denied calls return a hitl.card
      },
    );
    const out = (await gatedTool.execute!({ confidence, costUsd })) as
      | ToolCallPreviewEvent
      | HitlCardEvent;
    if (out.kind === "hitl.card") {
      const parsed = HitlCardEventSchema.parse(out);
      setResult({ kind: "hitl.card", event: parsed });
    } else {
      const parsed = ToolCallPreviewEventSchema.parse(out);
      setResult({ kind: "tool.call", event: parsed });
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <p className="label mb-4">Gates</p>
      <h1 className="text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl">
        Agent wants to call a tool —{" "}
        <span className="text-[color:var(--accent-amber)]">a gate decides</span>
        .
      </h1>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
        Tweak the signals (what the agent claims) and the gate thresholds
        (what the org allows). When a gate denies, the same renderer
        pipeline surfaces the gate&apos;s escalation card so a human can
        override. Same code path — happy and blocked.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-6 rounded-xl border border-border bg-card p-4 text-xs">
        <Field
          label="Model confidence"
          value={confidence}
          min={0}
          max={1}
          step={0.01}
          onChange={setConfidence}
        />
        <Field
          label="Confidence gate min"
          value={confMin}
          min={0}
          max={1}
          step={0.01}
          onChange={setConfMin}
        />
        <Field
          label="Projected cost (USD)"
          value={costUsd}
          min={0}
          max={1}
          step={0.001}
          onChange={setCostUsd}
        />
        <Field
          label="Cost gate max (USD)"
          value={costMax}
          min={0}
          max={1}
          step={0.001}
          onChange={setCostMax}
        />
      </div>

      <button
        onClick={run}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Run gated tool
      </button>

      {result && (
        <div className="mt-10">
          <p className="label mb-2">
            {result.kind === "hitl.card"
              ? "Gate denied · escalation rendered"
              : "Tool result · gates allowed"}
          </p>
          <HitlEventRenderer event={result.event} registry={registry} />
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="label">{label}</span>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="rounded-md border border-border bg-background px-2 py-1 font-mono text-foreground outline-none focus:ring-1 focus:ring-ring"
      />
    </label>
  );
}
