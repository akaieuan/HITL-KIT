import { StateGraph, Annotation, MemorySaver, interrupt, START, END } from "@langchain/langgraph";
import { createHitlCardInterrupt } from "@hitl-kit/langgraph";

/**
 * Small research-agent graph with one HITL checkpoint.
 *
 * Flow:
 *   plan  →  review (interrupt: human approves/rejects)  →  finalize
 *
 * The review node pauses the graph via `interrupt()`, passing a
 * schema-conformant HitlInterruptPayload. The server waits for a
 * Command({ resume: { approved: boolean } }) and threads it through.
 */

const State = Annotation.Root({
  topic: Annotation<string>,
  citation: Annotation<string | null>,
  approved: Annotation<boolean | null>,
  result: Annotation<string | null>,
});

async function plan(state: typeof State.State) {
  // Simulate some research: found a citation that needs human review.
  return {
    citation:
      "Challapally et al. (MIT NANDA 2025). The GenAI Divide: State of AI in Business 2025.",
  };
}

async function review(state: typeof State.State) {
  const approval = interrupt(
    createHitlCardInterrupt({
      variant: "review",
      title: "Citation needs verification",
      subtitle: state.citation ?? "unknown source",
      steps: [
        { label: "Flagged by agent", done: true },
        { label: "Human confirmation", done: false },
        { label: "Write to final draft", done: false },
      ],
      runLabel: "Confirm & continue",
    }),
  ) as { approved: boolean };

  return { approved: approval.approved };
}

async function finalize(state: typeof State.State) {
  if (!state.approved) {
    return {
      result: `Rejected. Agent stopped without writing the citation.`,
    };
  }
  return {
    result: `Approved. Citation written to final draft:\n\n${state.citation}`,
  };
}

export function buildGraph() {
  const graph = new StateGraph(State)
    .addNode("plan", plan)
    .addNode("review", review)
    .addNode("finalize", finalize)
    .addEdge(START, "plan")
    .addEdge("plan", "review")
    .addEdge("review", "finalize")
    .addEdge("finalize", END);

  const checkpointer = new MemorySaver();
  return graph.compile({ checkpointer });
}

// One module-level instance so interrupt state persists across the
// run/resume route calls within a single server process.
let compiled: ReturnType<typeof buildGraph> | null = null;
export function getGraph() {
  if (!compiled) compiled = buildGraph();
  return compiled;
}
