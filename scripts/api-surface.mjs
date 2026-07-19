/**
 * api-surface.mjs — Public type-surface snapshot for @hitl-kit/*.
 *
 * The credibility question: did the public API change on purpose? Each
 * package's bundled `dist/index.d.ts` is the full type surface consumers
 * see. We copy it into a committed baseline at `api-surface/<pkg>.d.ts`.
 * `pnpm api:check` regenerates those files and fails if git sees any drift,
 * so an unintended change to the exported types breaks CI until the baseline
 * is reviewed and re-committed.
 *
 * Runtime export *names* are snapshotted separately, per package, by the
 * Vitest tests in packages/<pkg>/src/__tests__/api-surface.test.ts.
 *
 * Usage:
 *   node scripts/api-surface.mjs           regenerate baselines (write)
 *   node scripts/api-surface.mjs --check   regenerate, then fail on git drift
 *
 * The `pnpm api:check` script builds first so dist/ is current.
 * Node-only. Adds no runtime deps.
 */

import { execFileSync } from "node:child_process";
import { mkdirSync, copyFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(__dirname, "..");
const OUT = join(REPO, "api-surface");
const CHECK = process.argv.includes("--check");

const PACKAGES = ["core", "react", "gates", "langgraph", "ai-sdk", "mcp"];

mkdirSync(OUT, { recursive: true });

const header = (pkg) =>
  `// AUTO-GENERATED public type surface for @hitl-kit/${pkg}.\n` +
  `// Regenerate with \`pnpm api:check\`. Do not edit by hand.\n` +
  `// A diff here means the published type API changed — review it on purpose.\n\n`;

for (const pkg of PACKAGES) {
  const dts = join(REPO, "packages", pkg, "dist", "index.d.ts");
  if (!existsSync(dts)) {
    console.error(`✗ ${pkg}: dist/index.d.ts missing — run \`pnpm packages:build\` first.`);
    process.exit(1);
  }
  const dest = join(OUT, `${pkg}.d.ts`);
  writeFileSync(dest, header(pkg) + readFileSync(dts, "utf8"));
  console.log(`· api-surface/${pkg}.d.ts ${CHECK ? "regenerated" : "written"}`);
}

if (CHECK) {
  try {
    execFileSync("git", ["diff", "--exit-code", "--", "api-surface"], { cwd: REPO, stdio: "inherit" });
  } catch {
    console.error(
      "\n✗ API SURFACE DRIFT — api-surface/*.d.ts differs from the committed baseline.\n" +
        "  The public type API changed. If intentional, run `node scripts/api-surface.mjs`\n" +
        "  and commit the updated api-surface/*.d.ts. If not, revert the change.",
    );
    process.exit(1);
  }
  // Catch newly-added, untracked baseline files too.
  const untracked = execFileSync("git", ["ls-files", "--others", "--exclude-standard", "--", "api-surface"], {
    cwd: REPO,
    encoding: "utf8",
  }).trim();
  if (untracked) {
    console.error(`\n✗ API SURFACE DRIFT — untracked baseline file(s):\n${untracked}\n  Commit them (a new package surface) or remove.`);
    process.exit(1);
  }
  console.log("\n✓ API SURFACE — no type-surface drift.");
} else {
  console.log("\n✓ api-surface/*.d.ts regenerated. Review and commit.");
}
