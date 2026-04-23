"use client";

import { useState } from "react";
import { HitlEventRenderer, createRegistry } from "@hitl-kit/react";
import type { HitlInterruptPayload } from "@hitl-kit/langgraph";
import { HitlCard } from "@/components/hitl/HitlCard";

/**
 * Registry binds one HitlEvent kind ("hitl.card") to the installed
 * HitlCard primitive. A real app would register every kind it expects
 * the agent to emit; this demo only uses one.
 */
function useRegistry(onResume: (approved: boolean) => void) {
  return createRegistry({
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
        onConfirm={() => onResume(true)}
        onDismiss={() => onResume(false)}
      />
    ),
  });
}

type Phase = "idle" | "running" | "awaiting" | "resuming" | "done";

interface RunResponse {
  threadId: string;
  topic: string;
  interrupt: HitlInterruptPayload | null;
  state: { citation?: string | null; result?: string | null } | null;
}

interface ResumeResponse {
  threadId: string;
  approved: boolean;
  state: { result?: string | null } | null;
  done: boolean;
}

export function AgentRunner() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [threadId, setThreadId] = useState<string | null>(null);
  const [pending, setPending] = useState<HitlInterruptPayload | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const start = async () => {
    setPhase("running");
    setError(null);
    setResult(null);
    setPending(null);

    try {
      const res = await fetch("/api/run", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ topic: "climate policy review" }),
      });
      if (!res.ok) throw new Error(`run failed: ${res.status}`);
      const data = (await res.json()) as RunResponse;
      setThreadId(data.threadId);
      if (data.interrupt) {
        setPending(data.interrupt);
        setPhase("awaiting");
      } else {
        setResult(data.state?.result ?? "(no interrupt, no result)");
        setPhase("done");
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setPhase("idle");
    }
  };

  const resume = async (approved: boolean) => {
    if (!threadId) return;
    setPhase("resuming");
    try {
      const res = await fetch("/api/resume", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ threadId, approved }),
      });
      if (!res.ok) throw new Error(`resume failed: ${res.status}`);
      const data = (await res.json()) as ResumeResponse;
      setResult(data.state?.result ?? "(no result)");
      setPhase("done");
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setPhase("awaiting");
    }
  };

  const reset = () => {
    setPhase("idle");
    setThreadId(null);
    setPending(null);
    setResult(null);
    setError(null);
  };

  const registry = useRegistry(resume);

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <p className="label mb-4">LangGraph demo</p>
      <h1 className="text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl">
        Agent runs, hits an interrupt,{" "}
        <span className="text-[color:var(--accent-blue)]">waits for a human</span>.
      </h1>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
        Click <span className="text-foreground">Run</span> to start a
        LangGraph flow. The agent reviews a citation, hits{" "}
        <code className="rounded bg-muted/60 px-1 py-0.5 font-mono text-[11px]">interrupt()</code>,
        and the UI below renders a <code className="rounded bg-muted/60 px-1 py-0.5 font-mono text-[11px]">HitlCard</code>{" "}
        via <code className="rounded bg-muted/60 px-1 py-0.5 font-mono text-[11px]">&lt;HitlEventRenderer /&gt;</code>.
        Confirm or dismiss, and the graph resumes with your decision.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          onClick={start}
          disabled={phase === "running" || phase === "awaiting" || phase === "resuming"}
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {phase === "running" ? "Running…" : phase === "awaiting" ? "Awaiting human" : phase === "resuming" ? "Resuming…" : "Run agent"}
        </button>
        {phase === "done" && (
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-transparent px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-muted"
          >
            Reset
          </button>
        )}
        {threadId && (
          <span className="label">
            thread:{" "}
            <span className="font-mono text-foreground normal-case tracking-normal">
              {threadId}
            </span>
          </span>
        )}
      </div>

      {error && (
        <p className="mt-6 rounded-lg border border-[color:var(--accent-rose)]/30 bg-[color:var(--accent-rose)]/10 p-3 text-sm text-[color:var(--accent-rose)]">
          {error}
        </p>
      )}

      {pending && phase === "awaiting" && (
        <div className="mt-10">
          <p className="label mb-2">Interrupt received · awaiting decision</p>
          <HitlEventRenderer event={pending.event} registry={registry} />
        </div>
      )}

      {phase === "done" && result && (
        <div className="mt-10 rounded-xl border border-[color:var(--accent-emerald)]/30 bg-[color:var(--accent-emerald)]/5 p-5">
          <p className="label mb-2 text-[color:var(--accent-emerald)]">Graph complete</p>
          <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">
            {result}
          </pre>
        </div>
      )}
    </div>
  );
}
