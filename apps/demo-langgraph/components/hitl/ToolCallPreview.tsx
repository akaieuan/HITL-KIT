"use client";

import { useState } from "react";
import { Check, X, Wrench, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ToolCallPreviewEvent } from "@hitl-kit/core";

interface ToolCallPreviewProps extends ToolCallPreviewEvent {
  onAction?: (action: { approved: boolean }) => void;
}

export function ToolCallPreview({
  toolName,
  rationale,
  args,
  signals,
  approveLabel,
  rejectLabel,
  onAction,
}: ToolCallPreviewProps) {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<"idle" | "approved" | "rejected">("idle");

  if (state !== "idle") {
    return (
      <div className="my-1.5 flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-1.5 text-xs">
        {state === "approved" ? (
          <>
            <Check className="h-3.5 w-3.5 text-[color:var(--accent-emerald)]" />
            <span className="font-mono text-foreground">{toolName}()</span>
            <span className="text-muted-foreground">· approved</span>
          </>
        ) : (
          <>
            <X className="h-3.5 w-3.5 text-[color:var(--accent-rose)]" />
            <span className="font-mono text-foreground">{toolName}()</span>
            <span className="text-muted-foreground">· rejected</span>
          </>
        )}
      </div>
    );
  }

  const confPct =
    signals?.confidence === undefined ? null : Math.round(signals.confidence * 100);

  return (
    <div className="my-1.5 rounded-xl border border-border bg-card text-xs">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2">
        <Wrench className="h-3.5 w-3.5 shrink-0 text-[color:var(--accent-amber)]" />
        <span className="font-mono font-medium text-foreground">{toolName}()</span>
        <span className="ml-auto rounded bg-muted/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
          tool call
        </span>
      </div>

      {rationale && (
        <div className="border-b border-border px-3 py-2 italic leading-relaxed text-muted-foreground">
          {rationale}
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-1 px-3 py-1.5 text-left text-muted-foreground hover:text-foreground"
      >
        {open ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
        <span>Arguments</span>
        <span className="ml-1 font-mono text-[10px]">({Object.keys(args).length})</span>
      </button>

      {open && (
        <pre className="overflow-x-auto border-t border-border bg-muted/30 px-3 py-2 font-mono text-[11px] leading-relaxed text-foreground">
          {JSON.stringify(args, null, 2)}
        </pre>
      )}

      {signals && (confPct !== null || signals.costUsd !== undefined || signals.scope?.length) && (
        <div className="flex flex-wrap items-center gap-2 border-t border-border px-3 py-2 text-muted-foreground">
          {confPct !== null && (
            <span className="rounded bg-muted/60 px-1.5 py-0.5 font-mono text-[10px]">
              {confPct}% conf
            </span>
          )}
          {signals.costUsd !== undefined && (
            <span className="rounded bg-muted/60 px-1.5 py-0.5 font-mono text-[10px]">
              ${signals.costUsd.toFixed(4)}
            </span>
          )}
          {signals.scope?.map((s) => (
            <span
              key={s}
              className="rounded bg-muted/60 px-1.5 py-0.5 font-mono text-[10px]"
            >
              {s}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-2 border-t border-border px-3 py-2">
        <button
          onClick={() => {
            setState("approved");
            onAction?.({ approved: true });
          }}
          className="flex items-center gap-1.5 rounded-md bg-muted px-3 py-1.5 font-medium text-foreground transition-opacity hover:opacity-80"
        >
          <Check className="h-3 w-3" />
          {approveLabel ?? "Run tool"}
        </button>
        <button
          onClick={() => {
            setState("rejected");
            onAction?.({ approved: false });
          }}
          className={cn(
            "ml-auto flex h-6 items-center gap-1 rounded-md px-2 text-muted-foreground",
            "transition-colors hover:bg-muted hover:text-foreground",
          )}
        >
          <X className="h-3 w-3" />
          {rejectLabel ?? "Reject"}
        </button>
      </div>
    </div>
  );
}
