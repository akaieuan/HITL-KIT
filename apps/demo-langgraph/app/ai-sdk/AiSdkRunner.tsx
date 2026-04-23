"use client";

import { useState } from "react";
import { HitlEventRenderer, createRegistry } from "@hitl-kit/react";
import type { HitlCardEvent } from "@hitl-kit/core";
import { HitlCard } from "@/components/hitl/HitlCard";

type Phase = "idle" | "running" | "awaiting" | "resolved";

interface RunResponse {
  event: HitlCardEvent;
  conversation: Array<{ role: string; content: unknown }>;
}

/**
 * Vercel AI SDK demo. Calls /api/ai-sdk-run, which invokes a
 * HITL Kit tool (`hitlCardTool`) to produce a validated HitlCardEvent.
 * The event is rendered via <HitlEventRenderer />. On approval/dismiss,
 * we simulate the user's reply message that would continue the
 * conversation in a real AI SDK flow.
 */
export function AiSdkRunner() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [event, setEvent] = useState<HitlCardEvent | null>(null);
  const [decision, setDecision] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const start = async () => {
    setPhase("running");
    setError(null);
    setDecision(null);
    setEvent(null);

    try {
      const res = await fetch("/api/ai-sdk-run", { method: "POST" });
      if (!res.ok) throw new Error(`run failed: ${res.status}`);
      const data = (await res.json()) as RunResponse;
      setEvent(data.event);
      setPhase("awaiting");
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setPhase("idle");
    }
  };

  const resolve = (approved: boolean) => {
    // In a real app, this would append({ role: 'user', content: ... }) back
    // to the conversation. For the demo we just show what the next message
    // would be.
    setDecision(
      approved
        ? "User message sent: \"Approved. Continue and write to the draft.\""
        : "User message sent: \"Rejected. Do not write the citation.\"",
    );
    setPhase("resolved");
  };

  const reset = () => {
    setPhase("idle");
    setEvent(null);
    setDecision(null);
    setError(null);
  };

  const registry = createRegistry({
    "hitl.card": (ev) => (
      <HitlCard
        config={{
          id: ev.id ?? "default",
          kind: ev.variant,
          title: ev.title,
          subtitle: ev.subtitle,
          steps: ev.steps,
          runLabel: ev.runLabel,
          editPlaceholder: ev.editPlaceholder,
          openTab: "human",
        }}
        onConfirm={() => resolve(true)}
        onDismiss={() => resolve(false)}
      />
    ),
  });

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <p className="label mb-4">Vercel AI SDK demo</p>
      <h1 className="text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl">
        Agent calls a HITL tool,{" "}
        <span className="text-[color:var(--accent-blue)]">returns a typed event</span>.
      </h1>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
        This demo uses <code className="rounded bg-muted/60 px-1 py-0.5 font-mono text-[11px]">hitlCardTool()</code>{" "}
        from <code className="rounded bg-muted/60 px-1 py-0.5 font-mono text-[11px]">@hitl-kit/ai-sdk</code>. The
        server constructs the tool, invokes its <code className="rounded bg-muted/60 px-1 py-0.5 font-mono text-[11px]">execute</code>{" "}
        function (as AI SDK would when a real model calls it), and returns
        the validated event. The UI renders via <code className="rounded bg-muted/60 px-1 py-0.5 font-mono text-[11px]">&lt;HitlEventRenderer /&gt;</code>.
        Approve or dismiss, and the next conversational reply is composed.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          onClick={start}
          disabled={phase === "running" || phase === "awaiting"}
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {phase === "running" ? "Running…" : phase === "awaiting" ? "Awaiting human" : "Call tool"}
        </button>
        {phase === "resolved" && (
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-transparent px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-muted"
          >
            Reset
          </button>
        )}
      </div>

      {error && (
        <p className="mt-6 rounded-lg border border-[color:var(--accent-rose)]/30 bg-[color:var(--accent-rose)]/10 p-3 text-sm text-[color:var(--accent-rose)]">
          {error}
        </p>
      )}

      {event && phase === "awaiting" && (
        <div className="mt-10">
          <p className="label mb-2">Tool result · awaiting decision</p>
          <HitlEventRenderer event={event} registry={registry} />
        </div>
      )}

      {phase === "resolved" && decision && (
        <div className="mt-10 rounded-xl border border-[color:var(--accent-emerald)]/30 bg-[color:var(--accent-emerald)]/5 p-5">
          <p className="label mb-2 text-[color:var(--accent-emerald)]">Conversation continues</p>
          <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">
            {decision}
          </pre>
          <p className="mt-3 text-[11px] text-muted-foreground">
            In a real AI SDK flow, this message would <code className="rounded bg-muted/60 px-1 font-mono text-[10.5px]">append()</code>{" "}
            to the chat and the agent would respond based on the decision.
          </p>
        </div>
      )}
    </div>
  );
}
