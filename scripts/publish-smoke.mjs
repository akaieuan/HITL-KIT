/**
 * publish-smoke.mjs — Published-artifact smoke test for @hitl-kit/*.
 *
 * The check a stranger runs before depending on these packages: does the
 * *packaged* artifact (what `npm publish` would upload) actually work when
 * installed into a fresh project OUTSIDE this monorepo?
 *
 * What it does:
 *   1. Builds every package (`pnpm packages:build`).
 *   2. `pnpm pack`s all six packages (pnpm rewrites `workspace:*` cross-deps
 *      to concrete versions in each tarball's package.json).
 *   3. Creates a scratch consumer project in the OS temp dir (fs.mkdtemp) —
 *      never inside the repo. Its package.json installs the six packages via
 *      `file:` tarball specifiers, so the @hitl-kit/* cross-deps are satisfied
 *      by the sibling tarballs (not the registry). Peer dependencies are read
 *      from each package.json and installed from the real npm registry at a
 *      version satisfying the declared range (we use the version each package
 *      was built against, taken from its devDependencies, which is guaranteed
 *      to satisfy the peer range).
 *   4. Installs with plain `npm` — an honest, non-pnpm consumer.
 *   5. Runtime-imports every exports-map subpath of every package and exercises
 *      2–3 real symbols each. (All six packages expose a single `.` subpath.)
 *      React components are imported and element-created without a DOM render.
 *   6. Typechecks the same usage with `tsc --noEmit` under BOTH
 *      `moduleResolution: "bundler"` and `moduleResolution: "node16"`.
 *   7. Runs `@arethetypeswrong/cli --pack` on every tarball.
 *
 * attw ignore: `cjs-resolves-to-esm` is ignored by design. Every package is
 * ESM-only (`"type": "module"`, exports expose only the `import`/`types`
 * conditions, no `require`). attw's CJSResolvesToESM warning is the *correct*
 * description of that intent, not a packaging defect — a CommonJS consumer
 * must use dynamic import, which is expected. Any OTHER attw problem fails.
 *
 * Node-only. No new runtime deps added to any published package.
 */

import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, readdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(__dirname, "..");
const KEEP = process.env.KEEP_SMOKE === "1";

/** Every published package. `dir` under packages/, npm name, exports subpaths. */
const PACKAGES = [
  { dir: "core", name: "@hitl-kit/core", subpaths: ["."] },
  { dir: "react", name: "@hitl-kit/react", subpaths: ["."] },
  { dir: "gates", name: "@hitl-kit/gates", subpaths: ["."] },
  { dir: "langgraph", name: "@hitl-kit/langgraph", subpaths: ["."] },
  { dir: "ai-sdk", name: "@hitl-kit/ai-sdk", subpaths: ["."] },
  { dir: "mcp", name: "@hitl-kit/mcp", subpaths: ["."] },
];

/* ── logging ──────────────────────────────────────────────────────────── */
const t0 = Date.now();
const log = (m) => console.log(`[smoke +${((Date.now() - t0) / 1000).toFixed(1)}s] ${m}`);
function die(msg, detail) {
  console.error(`\n✗ PUBLISH SMOKE FAILED: ${msg}`);
  if (detail) console.error(detail);
  process.exit(1);
}

function run(cmd, args, opts = {}) {
  return execFileSync(cmd, args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], ...opts });
}

/* ── 1. build ─────────────────────────────────────────────────────────── */
log("building all packages…");
try {
  run("pnpm", ["packages:build"], { cwd: REPO, stdio: "inherit" });
} catch {
  die("`pnpm packages:build` failed");
}

/* ── 2. pack ──────────────────────────────────────────────────────────── */
const workRoot = mkdtempSync(join(tmpdir(), "hitl-smoke-"));
const tarDir = join(workRoot, "tarballs");
mkdirSync(tarDir, { recursive: true });
log(`scratch workspace: ${workRoot}`);

/** name -> concrete install spec for peers, collected from package.json. */
const peerSpecs = {};
const tarballs = {}; // name -> absolute tgz path

for (const pkg of PACKAGES) {
  const pkgDir = join(REPO, "packages", pkg.dir);
  const manifest = JSON.parse(readFileSync(join(pkgDir, "package.json"), "utf8"));

  // Collect peer deps: install the version this package was built against
  // (its devDependency), which is guaranteed to satisfy the peer range.
  for (const [peer, range] of Object.entries(manifest.peerDependencies ?? {})) {
    const dev = manifest.devDependencies?.[peer];
    peerSpecs[peer] = dev ?? range;
  }

  const before = new Set(readdirSync(tarDir));
  try {
    run("pnpm", ["pack", "--pack-destination", tarDir], { cwd: pkgDir });
  } catch (e) {
    die(`\`pnpm pack\` failed for ${pkg.name}`, e.stdout || e.message);
  }
  const created = readdirSync(tarDir).find((f) => !before.has(f) && f.endsWith(".tgz"));
  if (!created) die(`no tarball produced for ${pkg.name}`);
  tarballs[pkg.name] = join(tarDir, created);
  log(`packed ${pkg.name} → ${created}`);
}

// react needs react-dom in a real consumer even though only `react` is a
// declared peer; align its version with the react peer we resolved.
if (peerSpecs.react && !peerSpecs["react-dom"]) peerSpecs["react-dom"] = peerSpecs.react;

/* ── 3. scratch consumer ──────────────────────────────────────────────── */
const consumer = join(workRoot, "consumer");
mkdirSync(consumer, { recursive: true });

const consumerPkg = {
  name: "hitl-kit-smoke-consumer",
  version: "0.0.0",
  private: true,
  type: "module",
  dependencies: {
    ...Object.fromEntries(PACKAGES.map((p) => [p.name, `file:${tarballs[p.name]}`])),
    ...peerSpecs,
  },
  devDependencies: {
    typescript: "^5",
    "@types/react": peerSpecs.react ? "^19" : "^19",
    "@types/react-dom": "^19",
    "@types/node": "^20",
  },
};
writeFileSync(join(consumer, "package.json"), JSON.stringify(consumerPkg, null, 2));
log(`consumer deps: ${Object.entries(consumerPkg.dependencies).map(([k, v]) => `${k}@${v.startsWith("file:") ? "<tarball>" : v}`).join(", ")}`);

log("npm install (honest consumer, real registry for peers)…");
try {
  run("npm", ["install", "--no-audit", "--no-fund", "--loglevel=error"], {
    cwd: consumer,
    stdio: "inherit",
    env: { ...process.env, npm_config_package_lock: "false" },
  });
} catch {
  die("`npm install` failed in scratch consumer");
}

/* ── 4. usage fixtures (runtime .mjs + typecheck .ts/.tsx) ─────────────── */
const CARD = `{ kind: "hitl.card", variant: "review", title: "t", subtitle: "s", steps: [{ label: "a", done: true }], runLabel: "go" }`;

const RUNTIME = {
  core: `import { HitlEventSchema, HITL_EVENT_KINDS, z } from "@hitl-kit/core";
const r = HitlEventSchema.safeParse(${CARD});
if (!r.success) throw new Error("core: valid event failed to parse");
if (HITL_EVENT_KINDS.length !== 15) throw new Error("core: expected 15 kinds, got " + HITL_EVENT_KINDS.length);
if (typeof z.object !== "function") throw new Error("core: z re-export broken");`,

  react: `import { createElement } from "react";
import { createRegistry, HitlEventRenderer } from "@hitl-kit/react";
const registry = createRegistry({ "hitl.card": (e) => createElement("div", null, e.title) });
const el = createElement(HitlEventRenderer, { event: ${CARD}, registry });
if (!el || el.type !== HitlEventRenderer) throw new Error("react: createElement failed");
if (Object.keys(registry).length !== 1) throw new Error("react: createRegistry identity broken");`,

  gates: `import { composeGates, confidenceGate, inMemoryStore } from "@hitl-kit/gates";
const store = inMemoryStore();
if (typeof store.get !== "function") throw new Error("gates: inMemoryStore missing get");
const gate = composeGates([confidenceGate({ min: 0.8 })]);
const allow = await gate({ adapter: "core", signals: { confidence: 0.95 } });
if (allow.allow !== true) throw new Error("gates: high-confidence should allow");
const deny = await gate({ adapter: "core", signals: { confidence: 0.1 } });
if (deny.allow !== false) throw new Error("gates: low-confidence should deny");`,

  langgraph: `import { createHitlCardInterrupt, isHitlInterrupt } from "@hitl-kit/langgraph";
const payload = createHitlCardInterrupt({ variant: "review", title: "t", subtitle: "s", steps: [], runLabel: "go" });
if (!isHitlInterrupt(payload)) throw new Error("langgraph: isHitlInterrupt returned false");
if (payload.event.kind !== "hitl.card") throw new Error("langgraph: wrong event kind");`,

  "ai-sdk": `import { hitlCardTool, allHitlTools, isHitlToolResult } from "@hitl-kit/ai-sdk";
const t = hitlCardTool();
if (typeof t !== "object" || typeof t.execute !== "function") throw new Error("ai-sdk: hitlCardTool malformed");
if (Object.keys(allHitlTools).length !== 15) throw new Error("ai-sdk: expected 15 tools, got " + Object.keys(allHitlTools).length);
if (isHitlToolResult(null) !== false) throw new Error("ai-sdk: isHitlToolResult(null) should be false");`,

  mcp: `import { createHitlKitServer, HITL_TOOLS, TOOL_BY_NAME } from "@hitl-kit/mcp";
const server = createHitlKitServer();
if (!server) throw new Error("mcp: createHitlKitServer returned nothing");
if (HITL_TOOLS.length !== 15) throw new Error("mcp: expected 15 tools, got " + HITL_TOOLS.length);
if (typeof TOOL_BY_NAME !== "object") throw new Error("mcp: TOOL_BY_NAME not an object");`,
};

const TYPECHECK = {
  core: {
    ext: "ts",
    code: `import { HitlEventSchema, HITL_EVENT_KINDS, type HitlEvent, type HitlEventKind } from "@hitl-kit/core";
const parsed = HitlEventSchema.safeParse(${CARD});
if (parsed.success) { const e: HitlEvent = parsed.data; const k: HitlEventKind = e.kind; void k; }
const kinds: readonly HitlEventKind[] = HITL_EVENT_KINDS;
void kinds;`,
  },
  react: {
    ext: "tsx",
    code: `import { createElement } from "react";
import { createRegistry, HitlEventRenderer, type HitlRegistry } from "@hitl-kit/react";
import type { HitlEvent } from "@hitl-kit/core";
const registry: HitlRegistry = createRegistry({ "hitl.card": (e) => createElement("div", null, e.title) });
const ev: HitlEvent = ${CARD};
const node = createElement(HitlEventRenderer, { event: ev, registry });
void node;`,
  },
  gates: {
    ext: "ts",
    code: `import { composeGates, confidenceGate, type Gate, type GateContext } from "@hitl-kit/gates";
const gate: Gate = composeGates([confidenceGate({ min: 0.8 })]);
const ctx: GateContext = { adapter: "core", signals: { confidence: 0.9 } };
void gate; void ctx;`,
  },
  langgraph: {
    ext: "ts",
    code: `import { createHitlCardInterrupt, isHitlInterrupt, type HitlInterruptPayload } from "@hitl-kit/langgraph";
const payload: HitlInterruptPayload = createHitlCardInterrupt({ variant: "review", title: "t", subtitle: "s", steps: [], runLabel: "go" });
const ok: boolean = isHitlInterrupt(payload);
void ok;`,
  },
  "ai-sdk": {
    ext: "ts",
    code: `import { hitlCardTool, allHitlTools, isHitlToolResult, type HitlToolResult } from "@hitl-kit/ai-sdk";
const t = hitlCardTool({ description: "x" });
const r: boolean = isHitlToolResult({});
const _t: HitlToolResult | undefined = undefined;
void t; void allHitlTools; void r; void _t;`,
  },
  mcp: {
    ext: "ts",
    code: `import { createHitlKitServer, HITL_TOOLS, TOOL_BY_NAME, type CreateHitlKitServerOptions } from "@hitl-kit/mcp";
const opts: CreateHitlKitServerOptions = {};
const server = createHitlKitServer(opts);
void server; void HITL_TOOLS; void TOOL_BY_NAME;`,
  },
};

const runtimeDir = join(consumer, "runtime");
const tcDir = join(consumer, "typecheck");
mkdirSync(runtimeDir, { recursive: true });
mkdirSync(tcDir, { recursive: true });

for (const pkg of PACKAGES) {
  writeFileSync(join(runtimeDir, `${pkg.dir}.mjs`), RUNTIME[pkg.dir] + "\n");
  const tc = TYPECHECK[pkg.dir];
  writeFileSync(join(tcDir, `${pkg.dir}.${tc.ext}`), tc.code + "\n");
}

/* ── 5. runtime import of every subpath ───────────────────────────────── */
log("runtime: importing every exports subpath…");
for (const pkg of PACKAGES) {
  try {
    run("node", [join(runtimeDir, `${pkg.dir}.mjs`)], { cwd: consumer });
  } catch (e) {
    die(`runtime import/usage failed for ${pkg.name}`, (e.stderr || e.stdout || e.message));
  }
  log(`  runtime ok: ${pkg.name} (${pkg.subpaths.join(", ")})`);
}

/* ── 6. tsc under both resolution modes ───────────────────────────────── */
const baseCompiler = {
  target: "ES2020",
  lib: ["ES2020", "DOM", "DOM.Iterable"],
  strict: true,
  noEmit: true,
  esModuleInterop: true,
  skipLibCheck: true,
  jsx: "react-jsx",
  resolveJsonModule: true,
};

const tsconfigs = {
  bundler: { module: "ESNext", moduleResolution: "Bundler" },
  node16: { module: "node16", moduleResolution: "node16" },
};

const tcFiles = PACKAGES.map((p) => `typecheck/${p.dir}.${TYPECHECK[p.dir].ext}`);

for (const [mode, extra] of Object.entries(tsconfigs)) {
  const cfgPath = join(consumer, `tsconfig.${mode}.json`);
  writeFileSync(
    cfgPath,
    JSON.stringify({ compilerOptions: { ...baseCompiler, ...extra }, files: tcFiles }, null, 2),
  );
  log(`typecheck: tsc (moduleResolution=${extra.moduleResolution})…`);
  try {
    run("npx", ["--yes", "tsc", "-p", cfgPath], { cwd: consumer, stdio: "inherit" });
  } catch {
    die(`tsc --noEmit failed under moduleResolution=${extra.moduleResolution}`);
  }
  log(`  typecheck ok: moduleResolution=${extra.moduleResolution}`);
}

/* ── 7. are-the-types-wrong ───────────────────────────────────────────── */
log("attw: checking every tarball…");
for (const pkg of PACKAGES) {
  try {
    const out = run(
      "npx",
      ["--yes", "@arethetypeswrong/cli", "--pack", tarballs[pkg.name], "--ignore-rules", "cjs-resolves-to-esm"],
      { cwd: consumer },
    );
    // attw exits 0 when clean; surface its table only on demand.
    if (process.env.SMOKE_VERBOSE === "1") console.log(out);
    log(`  attw ok: ${pkg.name}`);
  } catch (e) {
    die(`@arethetypeswrong/cli reported problems for ${pkg.name}`, (e.stdout || e.stderr || e.message));
  }
}

/* ── done ─────────────────────────────────────────────────────────────── */
if (!KEEP) {
  try { rmSync(workRoot, { recursive: true, force: true }); } catch {}
} else {
  log(`KEEP_SMOKE=1 — left scratch consumer at ${workRoot}`);
}

console.log(`\n✓ PUBLISH SMOKE PASSED — ${PACKAGES.length} packages: runtime import + tsc (bundler & node16) + attw, from tarballs in a fresh npm consumer.`);
