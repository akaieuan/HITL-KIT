import { startStdioServer } from "./server";

/**
 * Executable entry. Run via `npx -y @hitl-kit/mcp` or install
 * globally and run `hitl-kit-mcp`. Communicates over stdio, which
 * is the standard transport for MCP servers launched as child
 * processes by clients (Claude Desktop, Cursor, Claude Code).
 *
 * CLI flags:
 *   --on-deny=escalate   (default) On gate deny, return escalation HitlEvent
 *   --on-deny=error      On gate deny, return a structured tool error
 *   --help               Print this help and exit
 */

const ON_DENY_VALUES = ["escalate", "error"] as const;
type OnDeny = (typeof ON_DENY_VALUES)[number];

function parseOnDeny(argv: string[]): OnDeny {
  const flag = argv.find(
    (a) => a === "--on-deny" || a.startsWith("--on-deny="),
  );
  if (!flag) return "escalate";

  // Handle both `--on-deny=value` and `--on-deny value`.
  const idx = argv.indexOf(flag);
  const value = flag.includes("=") ? flag.split("=")[1] : argv[idx + 1];

  if (!value || !ON_DENY_VALUES.includes(value as OnDeny)) {
    // eslint-disable-next-line no-console
    console.error(
      `hitl-kit-mcp: invalid --on-deny value ${JSON.stringify(value)}; must be one of: ${ON_DENY_VALUES.join(", ")}`,
    );
    process.exit(2);
  }
  return value as OnDeny;
}

function maybePrintHelpAndExit(argv: string[]): void {
  if (!argv.includes("--help") && !argv.includes("-h")) return;
  // eslint-disable-next-line no-console
  console.log(
    `hitl-kit-mcp\n\nUsage: hitl-kit-mcp [--on-deny=escalate|error]\n\nFlags:\n  --on-deny=escalate   On gate deny, return a HitlEvent escalation card (default)\n  --on-deny=error      On gate deny, return a structured tool error\n  --help, -h           Print this help`,
  );
  process.exit(0);
}

const argv = process.argv.slice(2);
maybePrintHelpAndExit(argv);
const onDeny = parseOnDeny(argv);

startStdioServer({ onDeny }).catch((err) => {
  // eslint-disable-next-line no-console
  console.error("hitl-kit-mcp failed to start:", err);
  process.exit(1);
});
