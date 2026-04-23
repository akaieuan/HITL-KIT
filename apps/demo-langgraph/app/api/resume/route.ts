import { NextResponse } from "next/server";
import { Command } from "@langchain/langgraph";
import { getGraph } from "../../graph";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const threadId = String(body.threadId ?? "");
  const approved = Boolean(body.approved);

  if (!threadId) {
    return NextResponse.json({ error: "missing threadId" }, { status: 400 });
  }

  const graph = getGraph();
  const config = { configurable: { thread_id: threadId } };

  await graph.invoke(new Command({ resume: { approved } }), config);

  const snapshot = await graph.getState(config);
  return NextResponse.json({
    threadId,
    approved,
    state: snapshot?.values ?? null,
    done: snapshot?.next?.length === 0,
  });
}
