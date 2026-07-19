// AUTO-GENERATED public type surface for @hitl-kit/mcp.
// Regenerate with `pnpm api:check`. Do not edit by hand.
// A diff here means the published type API changed — review it on purpose.

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { Gate, GateSignals, GateStore, GateDecision } from '@hitl-kit/gates';
import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { HitlEvent } from '@hitl-kit/core';
export { AgentStatus, ApprovalState, HitlEvent, HitlEventKind } from '@hitl-kit/core';

/**
 * Options accepted by `createHitlKitServer`. All optional and backward-
 * compatible with the no-arg form used in v0.5.
 */
interface CreateHitlKitServerOptions {
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
    signals?: (toolName: string, args: unknown) => GateSignals | Promise<GateSignals>;
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
declare function createHitlKitServer(opts?: CreateHitlKitServerOptions): Server;
/**
 * Start the server on stdio. This is the usual entry point for an
 * MCP server launched by a client like Claude Desktop, Cursor, or
 * Claude Code.
 */
declare function startStdioServer(opts?: CreateHitlKitServerOptions): Promise<void>;

/**
 * Every HITL Kit tool exposed through the MCP server. Each tool
 * wraps the input side of a primitive event. The tool's JSON Schema
 * is derived from the core Zod schema (minus the `kind` discriminator,
 * which the tool adds). Calling a tool runs the Zod parse against
 * the input — malformed tool calls fail with a clear Zod error
 * before returning to the client.
 */
interface HitlTool {
    name: string;
    kind: HitlEvent["kind"];
    description: string;
    inputZod: z.ZodTypeAny;
    inputJsonSchema: ReturnType<typeof zodToJsonSchema>;
}
declare const HITL_TOOLS: HitlTool[];
declare const TOOL_BY_NAME: Record<string, HitlTool>;

interface RunGatesOptions {
    /** Signals fn invoked per tool call to derive ctx.signals. */
    signals?: (toolName: string, args: unknown) => GateSignals | Promise<GateSignals>;
    /**
     * - `"escalate"` (default): tool result is the escalation HitlEvent so
     *   the host UI renders it via <HitlEventRenderer /> like a happy-path event.
     * - `"error"`: returns a structured tool error.
     */
    onDeny?: "escalate" | "error";
}
interface GateResult {
    decision: GateDecision;
    /**
     * The MCP tool result the server should return on deny. Undefined when
     * the decision allowed.
     */
    toolResult?: {
        content: {
            type: "text";
            text: string;
        }[];
    } | {
        isError: true;
        content: {
            type: "text";
            text: string;
        }[];
    };
}
/**
 * Run gates for a single MCP tool call. Returns a structured result the
 * server uses to either continue (allow) or short-circuit with an
 * escalation event / error (deny).
 *
 * Composition rule: when both server-wide `gates` and `perToolGates[name]`
 * are configured, callers should run server-wide first then per-tool.
 * This file just runs whatever array it's handed.
 */
declare function runGates(gates: Gate[], ctx: {
    toolName: string;
    args: unknown;
    onDeny: "escalate" | "error";
    signals?: GateSignals;
    /**
     * Server-level shared store. Forwarded to gates via GateContext.store
     * so gate factories can read/write through one store instead of each
     * binding its own closure copy.
     */
    store?: GateStore;
}): Promise<GateResult>;

export { type CreateHitlKitServerOptions, type GateResult, HITL_TOOLS, type RunGatesOptions, TOOL_BY_NAME, createHitlKitServer, runGates, startStdioServer };
