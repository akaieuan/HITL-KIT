import { NextResponse } from "next/server";
import { getGraph } from "../../graph";
import { isHitlInterrupt } from "@hitl-kit/langgraph";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const topic =
    (typeof body.topic === "string" && body.topic) || "climate policy review";

  const graph = getGraph();
  const threadId = `thread-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const config = { configurable: { thread_id: threadId } };

  // Run until the interrupt inside `review`.
  await graph.invoke({ topic }, config);

  // Pull the pending interrupt off the checkpoint.
  const snapshot = await graph.getState(config);
  const interrupts =
    (snapshot?.tasks ?? []).flatMap((t: { interrupts?: unknown[] }) =>
      Array.isArray(t.interrupts) ? t.interrupts : [],
    ) ?? [];

  const hitl = interrupts
    .map((i: unknown) =>
      typeof i === "object" && i !== null && "value" in i
        ? (i as { value: unknown }).value
        : i,
    )
    .find(isHitlInterrupt);

  return NextResponse.json({
    threadId,
    topic,
    interrupt: hitl ?? null,
    state: snapshot?.values ?? null,
  });
}
