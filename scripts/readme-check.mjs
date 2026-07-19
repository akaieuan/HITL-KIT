/**
 * readme-check.mjs — Typecheck README code examples against the real
 * built @hitl-kit/* types.
 *
 * The credibility question: do the code blocks in our READMEs actually
 * compile against the published type surface, or have they drifted?
 *
 * ── Fence convention (explicit, never inferred) ──────────────────────────
 * A fenced code block is typechecked ONLY when its info string contains the
 * whitespace-delimited token `check`:
 *
 *     ```ts check
 *     import { HitlEventSchema } from "@hitl-kit/core";
 *     ```
 *
 * Rules:
 *   • Opt-in only. A block with no `check` token is skipped — most README
 *     blocks are partial fragments (reference undefined `model`, `graph`,
 *     `@/components/...`, etc.) and are illustrative, not compilable. We
 *     never guess; the author annotates a block when it is meant to stand
 *     on its own against the published packages.
 *   • Only `ts` / `typescript` / `tsx` blocks are eligible. `bash`, `json`,
 *     etc. are always skipped even if annotated.
 *   • Each annotated block is compiled as its own isolated module with
 *     `tsc --noEmit` (moduleResolution: bundler). It must be self-contained:
 *     every identifier it uses must be imported or declared in the block.
 *
 * How resolution works: @hitl-kit/* map (via tsconfig `paths`) to each
 * package's built `dist/index.d.ts` — the exact type surface that ships.
 * Peer packages the examples import (react, ai, zod, @langchain/langgraph,
 * @modelcontextprotocol/sdk) are installed from the real npm registry into
 * a scratch consumer outside the repo.
 *
 * Node-only. No new runtime deps added to any published package.
 */

import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, readdirSync, rmSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(__dirname, "..");
const KEEP = process.env.KEEP_README === "1";

const t0 = Date.now();
const log = (m) => console.log(`[readme +${((Date.now() - t0) / 1000).toFixed(1)}s] ${m}`);

const PACKAGES = ["core", "react", "gates", "langgraph", "ai-sdk", "mcp"];

/** READMEs to scan: root + every package README. */
const READMES = [
  join(REPO, "README.md"),
  ...PACKAGES.map((p) => join(REPO, "packages", p, "README.md")),
].filter(existsSync);

/* ── markdown fence extraction ────────────────────────────────────────── */
/**
 * Parse fenced code blocks. Returns { lang, annotated, code, startLine }.
 * Handles ``` fences of 3+ backticks; a block closes on a fence of the same
 * length with no info string.
 */
function extractBlocks(md) {
  const lines = md.split("\n");
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const open = /^(\s*)(`{3,})(.*)$/.exec(lines[i]);
    if (!open) { i++; continue; }
    const fence = open[2];
    const info = open[3].trim();
    const tokens = info.split(/\s+/).filter(Boolean);
    const lang = (tokens[0] ?? "").toLowerCase();
    const annotated = tokens.slice(1).includes("check");
    const startLine = i + 1;
    const body = [];
    i++;
    while (i < lines.length) {
      const close = /^(\s*)(`{3,})\s*$/.exec(lines[i]);
      if (close && close[2].length >= fence.length) { i++; break; }
      body.push(lines[i]);
      i++;
    }
    blocks.push({ lang, annotated, code: body.join("\n"), startLine });
  }
  return blocks;
}

/* ── collect annotated blocks ─────────────────────────────────────────── */
const eligibleLangs = new Set(["ts", "typescript", "tsx"]);
const checks = [];
let totalBlocks = 0;
let skipped = 0;

for (const file of READMES) {
  const md = readFileSync(file, "utf8");
  const rel = relative(REPO, file);
  for (const b of extractBlocks(md)) {
    totalBlocks++;
    if (!b.annotated) { skipped++; continue; }
    if (!eligibleLangs.has(b.lang)) {
      console.error(`✗ ${rel}:${b.startLine} — block annotated \`check\` but language is \`${b.lang || "(none)"}\` (only ts/tsx/typescript allowed)`);
      process.exit(1);
    }
    checks.push({ rel, ...b, ext: b.lang === "tsx" ? "tsx" : "ts" });
  }
}

log(`scanned ${READMES.length} READMEs, ${totalBlocks} code blocks, ${checks.length} annotated \`check\`, ${skipped} skipped`);
if (checks.length === 0) {
  console.log("\n✓ README-RUNS PASSED — no `check`-annotated blocks to verify.");
  process.exit(0);
}

/* ── build packages so dist/*.d.ts exists ─────────────────────────────── */
for (const p of PACKAGES) {
  if (!existsSync(join(REPO, "packages", p, "dist", "index.d.ts"))) {
    log("dist missing — building packages…");
    execFileSync("pnpm", ["packages:build"], { cwd: REPO, stdio: "inherit" });
    break;
  }
}

/* ── scratch consumer (peers from npm; @hitl-kit/* via tsconfig paths) ─── */
const work = mkdtempSync(join(tmpdir(), "hitl-readme-"));
log(`scratch consumer: ${work}`);

// Collect peer specs from every package.json (install the tested version).
const peerSpecs = {};
for (const p of PACKAGES) {
  const m = JSON.parse(readFileSync(join(REPO, "packages", p, "package.json"), "utf8"));
  for (const [peer, range] of Object.entries(m.peerDependencies ?? {})) {
    peerSpecs[peer] = m.devDependencies?.[peer] ?? range;
  }
}
// The mcp README example imports @modelcontextprotocol/sdk directly (it is a
// runtime dep of @hitl-kit/mcp, not a peer) — make it resolvable.
const mcpManifest = JSON.parse(readFileSync(join(REPO, "packages", "mcp", "package.json"), "utf8"));
peerSpecs["@modelcontextprotocol/sdk"] = mcpManifest.dependencies["@modelcontextprotocol/sdk"];
if (peerSpecs.react && !peerSpecs["react-dom"]) peerSpecs["react-dom"] = peerSpecs.react;

writeFileSync(
  join(work, "package.json"),
  JSON.stringify(
    {
      name: "hitl-readme-consumer",
      version: "0.0.0",
      private: true,
      type: "module",
      dependencies: { ...peerSpecs },
      devDependencies: { typescript: "^5", "@types/react": "^19", "@types/react-dom": "^19", "@types/node": "^20" },
    },
    null,
    2,
  ),
);

log(`npm install peers: ${Object.keys(peerSpecs).join(", ")}`);
execFileSync("npm", ["install", "--no-audit", "--no-fund", "--loglevel=error"], {
  cwd: work,
  stdio: "inherit",
  env: { ...process.env, npm_config_package_lock: "false" },
});

/* ── write each block as an isolated module ───────────────────────────── */
const snippetDir = join(work, "snippets");
mkdirSync(snippetDir, { recursive: true });

const paths = Object.fromEntries(
  PACKAGES.map((p) => [`@hitl-kit/${p}`, [join(REPO, "packages", p, "dist", "index.d.ts")]]),
);

const files = [];
checks.forEach((c, idx) => {
  const base = `${c.rel.replace(/[^a-z0-9]+/gi, "_")}_L${c.startLine}_${idx}`;
  const fname = `${base}.${c.ext}`;
  writeFileSync(join(snippetDir, fname), c.code + "\n");
  files.push(`snippets/${fname}`);
});

writeFileSync(
  join(work, "tsconfig.json"),
  JSON.stringify(
    {
      compilerOptions: {
        target: "ES2022",
        module: "ESNext",
        moduleResolution: "Bundler",
        lib: ["ES2022", "DOM", "DOM.Iterable"],
        jsx: "react-jsx",
        strict: true,
        noEmit: true,
        esModuleInterop: true,
        skipLibCheck: true,
        resolveJsonModule: true,
        baseUrl: ".",
        paths,
      },
      files,
    },
    null,
    2,
  ),
);

/* ── typecheck; map any diagnostics back to README:line ───────────────── */
log(`typechecking ${checks.length} block(s)…`);
let tscOut = "";
let tscFailed = false;
try {
  tscOut = execFileSync("npx", ["--yes", "tsc", "-p", "tsconfig.json"], { cwd: work, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
} catch (e) {
  tscFailed = true;
  tscOut = (e.stdout || "") + (e.stderr || "");
}

if (tscFailed) {
  console.error("\n✗ README-RUNS FAILED — annotated example(s) did not typecheck:\n");
  // Rewrite temp snippet filenames back to README:line for readable output.
  let mapped = tscOut;
  checks.forEach((c, idx) => {
    const base = `${c.rel.replace(/[^a-z0-9]+/gi, "_")}_L${c.startLine}_${idx}`;
    mapped = mapped.split(`snippets/${base}.${c.ext}`).join(`${c.rel} (block @ line ${c.startLine})`);
  });
  console.error(mapped.trim());
  if (!KEEP) { try { rmSync(work, { recursive: true, force: true }); } catch {} }
  process.exit(1);
}

if (!KEEP) { try { rmSync(work, { recursive: true, force: true }); } catch {} }
else log(`KEEP_README=1 — left consumer at ${work}`);

console.log(`\n✓ README-RUNS PASSED — ${checks.length} \`check\` block(s) across ${new Set(checks.map((c) => c.rel)).size} README(s) compile against the built types.`);
for (const c of checks) console.log(`  · ${c.rel} (line ${c.startLine}) [${c.lang}]`);
