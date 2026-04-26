"use client";

import { useState } from "react";
import { Check, X, FileDiff } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DiffResultEvent } from "@hitl-kit/core";

interface DiffResultProps extends DiffResultEvent {
  onAction?: (action: { accepted: boolean }) => void;
}

export function DiffResult({
  title,
  subtitle,
  language,
  hunks,
  acceptLabel,
  rejectLabel,
  onAction,
}: DiffResultProps) {
  const [state, setState] = useState<"idle" | "accepted" | "rejected">("idle");

  if (state !== "idle") {
    return (
      <div className="my-1.5 flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-1.5 text-xs">
        {state === "accepted" ? (
          <>
            <Check className="h-3.5 w-3.5 text-[color:var(--accent-emerald)]" />
            <span className="font-medium text-foreground">{acceptLabel ?? "Apply edit"}</span>
            <span className="text-muted-foreground">· accepted</span>
          </>
        ) : (
          <>
            <X className="h-3.5 w-3.5 text-[color:var(--accent-rose)]" />
            <span className="font-medium text-foreground">{rejectLabel ?? "Reject"}</span>
            <span className="text-muted-foreground">· rejected</span>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="my-1.5 rounded-xl border border-border bg-card text-xs">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2">
        <FileDiff className="h-3.5 w-3.5 shrink-0 text-[color:var(--accent-blue)]" />
        <div className="flex-1 min-w-0">
          <span className="font-medium text-foreground">{title}</span>
          {subtitle && <span className="ml-2 text-muted-foreground">{subtitle}</span>}
        </div>
        {language && (
          <span className="rounded bg-muted/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
            {language}
          </span>
        )}
      </div>

      <div className="space-y-2 px-3 py-2">
        {hunks.map((hunk, i) => (
          <div key={i} className="overflow-hidden rounded-md border border-border">
            {hunk.startLine !== undefined && (
              <div className="bg-muted/40 px-2 py-1 font-mono text-[10px] text-muted-foreground">
                @ line {hunk.startLine}
              </div>
            )}
            <pre className="bg-[color:var(--accent-rose)]/8 px-2 py-1.5 font-mono text-[11px] leading-relaxed text-foreground">
              <span className="select-none text-[color:var(--accent-rose)]">- </span>
              {hunk.before}
            </pre>
            <pre className="bg-[color:var(--accent-emerald)]/8 px-2 py-1.5 font-mono text-[11px] leading-relaxed text-foreground">
              <span className="select-none text-[color:var(--accent-emerald)]">+ </span>
              {hunk.after}
            </pre>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 border-t border-border px-3 py-2">
        <button
          onClick={() => {
            setState("accepted");
            onAction?.({ accepted: true });
          }}
          className="flex items-center gap-1.5 rounded-md bg-muted px-3 py-1.5 font-medium text-foreground transition-opacity hover:opacity-80"
        >
          <Check className="h-3 w-3" />
          {acceptLabel ?? "Apply edit"}
        </button>
        <button
          onClick={() => {
            setState("rejected");
            onAction?.({ accepted: false });
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
