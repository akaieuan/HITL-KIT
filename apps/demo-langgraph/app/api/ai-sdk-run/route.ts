import { NextResponse } from "next/server";
import { hitlCardTool } from "@hitl-kit/ai-sdk";
import type { HitlCardEvent } from "@hitl-kit/core";

export const runtime = "nodejs";

/**
 * Demonstrates the Vercel AI SDK adapter without needing a real
 * language model or API keys. In a real app, this endpoint would
 * pass the tool into `generateText` or `streamText` and the model
 * would decide when to call it.
 *
 * For the demo, we construct the tool-call args directly and invoke
 * the tool's `execute` function. The result is a fully-validated
 * HitlCardEvent — identical to what you'd get if a real agent had
 * called the tool.
 */
export async function POST() {
  const tool = hitlCardTool({
    description:
      "Request human review of a citation before writing to the draft.",
  });

  // Simulate the model deciding to call the tool with these args.
  const modelArgs = {
    variant: "review" as const,
    title: "Citation needs verification",
    subtitle: "Dhillon et al. (CHI 2024). Shaping Human-AI Collaboration.",
    steps: [
      { label: "Agent drafted the citation", done: true },
      { label: "Verify source", done: false },
      { label: "Write to final draft", done: false },
    ],
    runLabel: "Confirm & continue",
  };

  // Run the tool's execute. Zod validates; malformed args throw synchronously.
  if (!tool.execute) {
    return NextResponse.json(
      { error: "tool.execute is undefined" },
      { status: 500 },
    );
  }
  const event = (await tool.execute(modelArgs, {
    toolCallId: "demo-call-1",
    messages: [],
  })) as HitlCardEvent;

  return NextResponse.json({
    event,
    conversation: [
      { role: "user", content: "Research carbon policy literature." },
      {
        role: "assistant",
        content: "I'll check a source first.",
        tool_calls: [
          { name: "requestHumanReview", arguments: modelArgs },
        ],
      },
      { role: "tool", name: "requestHumanReview", content: event },
    ],
  });
}
