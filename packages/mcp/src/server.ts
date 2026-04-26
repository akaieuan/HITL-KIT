import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import { HITL_TOOLS, TOOL_BY_NAME } from "./tools";

/**
 * Build an MCP server that exposes the 15 HITL primitive event kinds
 * as tools. Each tool validates input against the core Zod schema
 * and returns the fully typed HitlEvent as structured tool content.
 *
 * Connect to a transport (usually StdioServerTransport) with
 * `createHitlKitServer().connect(transport)`.
 */
export function createHitlKitServer(): Server {
  const server = new Server(
    {
      name: "hitl-kit",
      version: "0.6.0",
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
export async function startStdioServer(): Promise<void> {
  const server = createHitlKitServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  // Keep process alive as long as the transport stays open. The SDK
  // handles signal cleanup when the client disconnects.
}

// Suppress unused-import warnings on z when build order varies.
const _z = z;
export { _z as _z };
