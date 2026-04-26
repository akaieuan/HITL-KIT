# @hitl-kit/mcp

> MCP server for [HITL Kit](https://hitlkit.dev). Exposes the 15 HITL primitive event kinds as Model Context Protocol tools so Claude Code, Cursor, Claude Desktop, and any MCP-aware client can emit schema-validated human-in-the-loop events.

---

## Why this exists

The MCP (Model Context Protocol) standardises how agent clients talk to
tools. If you add HITL Kit as an MCP server, an agent running in
**any** MCP-aware client — Claude Code, Claude Desktop, Cursor, future
ones — can call `hitl_interrupt_card`, `hitl_qa_flow`, etc. The server
validates input against the `@hitl-kit/core` Zod schemas and returns a
structured HITL event as the tool result. Zero per-client wiring.

---

## Install

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or
`%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "hitl-kit": {
      "command": "npx",
      "args": ["-y", "@hitl-kit/mcp"]
    }
  }
}
```

Restart Claude Desktop. In the chat you should see `hitl_*` tools
available.

### Cursor

In Cursor Settings → MCP Servers → Add:

```json
{
  "mcpServers": {
    "hitl-kit": {
      "command": "npx",
      "args": ["-y", "@hitl-kit/mcp"]
    }
  }
}
```

### Claude Code

```bash
claude mcp add hitl-kit npx -y @hitl-kit/mcp
```

Or add manually to your Claude Code settings (`~/.claude/mcp-servers.json` or per-project `.claude/mcp-servers.json`):

```json
{
  "mcpServers": {
    "hitl-kit": {
      "command": "npx",
      "args": ["-y", "@hitl-kit/mcp"]
    }
  }
}
```

---

## Tools exposed

| Tool name | Event kind |
|---|---|
| `hitl_interrupt_card` | `hitl.card` |
| `hitl_subagent_status` | `subagent.status` |
| `hitl_mini_trace` | `trace.mini` |
| `hitl_ai_generation_scale` | `scale.ai_generation` |
| `hitl_context_chips` | `chips.context` |
| `hitl_qa_flow` | `qa.flow` |
| `hitl_writing_agent` | `agent.writing` |
| `hitl_research_agent` | `agent.research` |
| `hitl_batch_queue` | `batch.queue` |
| `hitl_search_result` | `result.search` |
| `hitl_approve_reject` | `approval.binary` |
| `hitl_diff_result` *(v0.6a)* | `result.diff` |
| `hitl_citation_result` *(v0.6a)* | `result.citation` |
| `hitl_editable_plan` *(v0.6a)* | `plan.editable` |
| `hitl_tool_call` *(v0.6a)* | `tool.call` |

Each tool's input JSON Schema is generated from the matching Zod
schema in `@hitl-kit/core` (minus the `kind` discriminator, which the
server adds). The tool result is a JSON-stringified `HitlEvent` ready
to pass to `<HitlEventRenderer />`.

---

## Programmatic usage (advanced)

If you want to embed the HITL Kit MCP server in a custom host:

```ts
import { createHitlKitServer } from "@hitl-kit/mcp";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = createHitlKitServer();
const transport = new StdioServerTransport();
await server.connect(transport);
```

Or use a non-stdio transport (e.g., Streamable HTTP) — the server
returned by `createHitlKitServer()` is a standard MCP `Server` object.

---

## Dev / local test

```bash
pnpm --filter @hitl-kit/mcp build
# Then link and configure Claude Desktop to point at the built binary.
# See local dev notes in the repo's CONTRIBUTING.md.
```

Send a `list-tools` request via MCP Inspector or any stdio client;
you should get all 15 `hitl_*` tools. Calling one with valid input
returns a HitlEvent; calling with invalid input returns a structured
Zod error.

---

## Part of HITL Kit

- **Schemas** → [@hitl-kit/core](../core)
- **Renderer** → [@hitl-kit/react](../react)
- **LangGraph adapter** → [@hitl-kit/langgraph](../langgraph)
- **Vercel AI SDK adapter** → [@hitl-kit/ai-sdk](../ai-sdk)
- **Paper** → [hitlkit.dev/paper](https://www.hitlkit.dev/paper)

MIT © Ieuan King.
