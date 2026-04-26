"use client";

import { useState } from "react";
import { Check, X, Quote, ExternalLink, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CitationResultEvent } from "@hitl-kit/core";

interface CitationResultProps extends CitationResultEvent {
  onAction?: (action: { verified: boolean }) => void;
}

export function CitationResult({
  claim,
  source,
  confidence,
  onAction,
}: CitationResultProps) {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<"idle" | "verified" | "rejected">("idle");

  if (state !== "idle") {
    return (
      <div className="my-1.5 flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-1.5 text-xs">
        {state === "verified" ? (
          <>
            <Check className="h-3.5 w-3.5 text-[color:var(--accent-emerald)]" />
            <span className="font-medium text-foreground">Citation verified</span>
          </>
        ) : (
          <>
            <X className="h-3.5 w-3.5 text-[color:var(--accent-rose)]" />
            <span className="font-medium text-foreground">Citation rejected</span>
          </>
        )}
      </div>
    );
  }

  const confPct = confidence === undefined ? null : Math.round(confidence * 100);

  return (
    <div className="my-1.5 rounded-xl border border-border bg-card text-xs">
      <div className="px-3 py-2.5">
        <div className="flex items-start gap-2">
          <Quote className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[color:var(--accent-violet)]" />
          <p className="flex-1 leading-relaxed text-foreground">{claim}</p>
        </div>

        <div className="mt-2 flex items-center gap-2 text-muted-foreground">
          <span className="font-medium text-foreground">{source.authors}</span>
          <span>·</span>
          <span>{source.year}</span>
          {source.venue && (
            <>
              <span>·</span>
              <span className="italic">{source.venue}</span>
            </>
          )}
          {confPct !== null && (
            <span className="ml-auto rounded bg-muted/60 px-1.5 py-0.5 font-mono text-[10px]">
              {confPct}% conf
            </span>
          )}
        </div>

        <div className="mt-1 flex items-center gap-1 text-muted-foreground">
          <span>{source.title}</span>
          {source.url && (
            <a
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="ml-1 inline-flex items-center hover:text-foreground"
            >
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>

      {source.quote && (
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center gap-1 border-t border-border px-3 py-1.5 text-left text-muted-foreground hover:text-foreground"
        >
          {open ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
          <span>Supporting quote</span>
        </button>
      )}

      {open && source.quote && (
        <blockquote className="border-t border-border bg-muted/30 px-3 py-2 italic leading-relaxed text-muted-foreground">
          &ldquo;{source.quote}&rdquo;
          {source.pages && <span className="ml-2 not-italic">(pp. {source.pages})</span>}
        </blockquote>
      )}

      <div className="flex items-center gap-2 border-t border-border px-3 py-2">
        <button
          onClick={() => {
            setState("verified");
            onAction?.({ verified: true });
          }}
          className="flex items-center gap-1.5 rounded-md bg-muted px-3 py-1.5 font-medium text-foreground transition-opacity hover:opacity-80"
        >
          <Check className="h-3 w-3" />
          Verify
        </button>
        <button
          onClick={() => {
            setState("rejected");
            onAction?.({ verified: false });
          }}
          className={cn(
            "ml-auto flex h-6 items-center gap-1 rounded-md px-2 text-muted-foreground",
            "transition-colors hover:bg-muted hover:text-foreground",
          )}
        >
          <X className="h-3 w-3" />
          Reject
        </button>
      </div>
    </div>
  );
}
