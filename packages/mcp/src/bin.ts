import { startStdioServer } from "./server";

/**
 * Executable entry. Run via `npx -y @hitl-kit/mcp` or install
 * globally and run `hitl-kit-mcp`. Communicates over stdio, which
 * is the standard transport for MCP servers launched as child
 * processes by clients (Claude Desktop, Cursor, Claude Code).
 */

startStdioServer().catch((err) => {
  // eslint-disable-next-line no-console
  console.error("hitl-kit-mcp failed to start:", err);
  process.exit(1);
});
