"use client";

import { useState } from "react";
import { GripVertical, X, Check, ListChecks, Lock, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { EditablePlanEvent, PlanStep } from "@hitl-kit/core";

interface EditablePlanProps extends EditablePlanEvent {
  onAction?: (action: { steps: PlanStep[]; cancelled?: boolean }) => void;
}

export function EditablePlan({
  title,
  subtitle,
  steps: initialSteps,
  submitLabel,
  onAction,
}: EditablePlanProps) {
  const [steps, setSteps] = useState<PlanStep[]>(initialSteps);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="my-1.5 flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-1.5 text-xs">
        <Check className="h-3.5 w-3.5 text-[color:var(--accent-emerald)]" />
        <span className="font-medium text-foreground">{submitLabel ?? "Run plan"}</span>
        <span className="text-muted-foreground">· {steps.length} steps</span>
      </div>
    );
  }

  const move = (idx: number, dir: -1 | 1) => {
    const next = [...steps];
    const target = idx + dir;
    if (target < 0 || target >= next.length) return;
    [next[idx], next[target]] = [next[target]!, next[idx]!];
    setSteps(next);
  };

  const remove = (idx: number) => {
    if (steps[idx]?.locked) return;
    setSteps(steps.filter((_, i) => i !== idx));
  };

  const update = (idx: number, label: string) => {
    setSteps(steps.map((s, i) => (i === idx ? { ...s, label } : s)));
  };

  const addStep = () => {
    setSteps([
      ...steps,
      { id: `step-${Date.now()}`, label: "New step", locked: false },
    ]);
  };

  return (
    <div className="my-1.5 rounded-xl border border-border bg-card text-xs">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2">
        <ListChecks className="h-3.5 w-3.5 shrink-0 text-[color:var(--accent-blue)]" />
        <div className="flex-1 min-w-0">
          <span className="font-medium text-foreground">{title}</span>
          {subtitle && <span className="ml-2 text-muted-foreground">{subtitle}</span>}
        </div>
      </div>

      <ul className="space-y-1 px-2 py-2">
        {steps.map((step, i) => (
          <li
            key={step.id}
            className="group flex items-center gap-1.5 rounded-md border border-transparent px-1.5 py-1 hover:border-border"
          >
            <button
              onClick={() => move(i, -1)}
              disabled={i === 0}
              className="cursor-grab text-muted-foreground opacity-0 group-hover:opacity-100 disabled:opacity-30"
              title="Move up"
            >
              <GripVertical className="h-3.5 w-3.5" />
            </button>
            <span className="font-mono text-[10px] text-muted-foreground">{i + 1}</span>
            <input
              value={step.label}
              onChange={(e) => update(i, e.target.value)}
              disabled={step.locked}
              className={cn(
                "flex-1 bg-transparent text-foreground outline-none",
                step.locked && "text-muted-foreground",
              )}
            />
            {step.locked ? (
              <Lock className="h-3 w-3 text-muted-foreground" />
            ) : (
              <button
                onClick={() => remove(i)}
                className="text-muted-foreground opacity-0 transition-colors group-hover:opacity-100 hover:text-[color:var(--accent-rose)]"
                title="Remove"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 border-t border-border px-3 py-2">
        <button
          onClick={addStep}
          className="flex items-center gap-1 rounded-md px-2 py-1 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <Plus className="h-3 w-3" />
          Add step
        </button>
        <button
          onClick={() => {
            setSubmitted(true);
            onAction?.({ steps });
          }}
          className="ml-auto flex items-center gap-1.5 rounded-md bg-muted px-3 py-1.5 font-medium text-foreground transition-opacity hover:opacity-80"
        >
          <Check className="h-3 w-3" />
          {submitLabel ?? "Run plan"}
        </button>
        <button
          onClick={() => {
            setSubmitted(true);
            onAction?.({ steps: [], cancelled: true });
          }}
          className="flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}
