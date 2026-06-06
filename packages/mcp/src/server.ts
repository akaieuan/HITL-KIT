import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import type { Gate, GateSignals, GateStore } from "@hitl-kit/gates";
import { HITL_TOOLS, TOOL_BY_NAME } from "./tools";
import { runGates } from "./gates";

/**
 * Options accepted by `createHitlKitServer`. All optional and backward-
 * compatible with the no-arg form used in v0.5.
 */
export interface CreateHitlKitServerOptions {
  /** Gates applied to every tool call. Run before per-tool gates. */
  gates?: Gate[];
  /**
   * Per-tool gates keyed by tool name (e.g. `"hitl_interrupt_card"`).
   * Run after server-wide gates, only for the matching tool.
   */
  perToolGates?: Partial<Record<string, Gate[]>>;
  /**
   * Function the host plugs in to attach signals (user id, project budget,
   * tenant scope) to each tool call. Receives the tool name and parsed
   * args.
   */
  signals?: (
    toolName: string,
    args: unknown,
  ) => GateSignals | Promise<GateSignals>;
  /** Optional shared GateStore (for stateful gates). */
  store?: GateStore;
  /**
   * What to do when a gate denies.
   * - `"escalate"` (default): tool result is the escalation HitlEvent.
   *   The host UI renders it via <HitlEventRenderer /> like a happy-path event.
   * - `"error"`: tool returns a structured error so the agent backs off.
   */
  onDeny?: "escalate" | "error";
}

/**
 * Build an MCP server that exposes the 15 HITL primitive event kinds
 * as tools. Each tool validates input against the core Zod schema
 * and returns the fully typed HitlEvent as structured tool content.
 *
 * Optional gates run before validation succeeds; on deny the server can
 * either surface an escalation HitlEvent (default) or return a tool error.
 *
 * Connect to a transport (usually StdioServerTransport) with
 * `createHitlKitServer().connect(transport)`.
 */
export function createHitlKitServer(
  opts: CreateHitlKitServerOptions = {},
): Server {
  const onDeny = opts.onDeny ?? "escalate";
  const serverGates = opts.gates ?? [];
  const perToolGates = opts.perToolGates ?? {};
  const store = opts.store;

  const server = new Server(
    {
      name: "hitl-kit",
      version: "0.7.0",
    },
    {
      capabilities: {
        tools: {},
      },
    },
  );

  // ── list tools ────────────────────────────────────────────────────
  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: HITL_TOOLS.map((t) => ({
      name: t.name,
      description: t.description,
      inputSchema: t.inputJsonSchema,
    })),
  }));

  // ── call tool ─────────────────────────────────────────────────────
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: rawArgs } = request.params;
    const tool = TOOL_BY_NAME[name];

    if (!tool) {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: JSON.stringify(
              { error: `Unknown tool: ${name}`, knownTools: Object.keys(TOOL_BY_NAME) },
              null,
              2,
            ),
          },
        ],
      };
    }

    // Zod-validate the payload. The tool.inputZod is the event schema
    // minus the `kind` discriminator; we add `kind` back after parsing.
    const parseResult = tool.inputZod.safeParse(rawArgs ?? {});
    if (!parseResult.success) {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                error: "Input validation failed",
                tool: name,
                issues: parseResult.error.issues,
              },
              null,
              2,
            ),
          },
        ],
      };
    }

    // Run gates after schema validation succeeds. Server-wide first, then
    // per-tool. Both share the same onDeny mode.
    const allGates = [...serverGates, ...(perToolGates[name] ?? [])];
    if (allGates.length > 0) {
      const signals = opts.signals
        ? await opts.signals(name, parseResult.data)
        : undefined;
      const gateResult = await runGates(allGates, {
        toolName: name,
        args: parseResult.data,
        onDeny,
        signals,
        store,
      });
      if (!gateResult.decision.allow && gateResult.toolResult) {
        return gateResult.toolResult;
      }
    }

    const event = {
      kind: tool.kind,
      ...(parseResult.data as Record<string, unknown>),
    };

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(event, null, 2),
        },
      ],
    };
  });

  return server;
}

/**
 * Start the server on stdio. This is the usual entry point for an
 * MCP server launched by a client like Claude Desktop, Cursor, or
 * Claude Code.
 */
export async function startStdioServer(
  opts?: CreateHitlKitServerOptions,
): Promise<void> {
  const server = createHitlKitServer(opts);
  const transport = new StdioServerTransport();
  await server.connect(transport);
  // Keep process alive as long as the transport stays open. The SDK
  // handles signal cleanup when the client disconnects.
}

// Suppress unused-import warnings on z when build order varies.
const _z = z;
export { _z as _z };
