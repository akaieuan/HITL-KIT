/**
 * registry-build.mjs — the shadcn registry, generated from the package source.
 *
 * Reads `registry.json` (paths relative to `src/`), inlines each file, rewrites
 * the package-internal relative imports to the aliases a shadcn consumer has,
 * and writes one registry-item JSON per item plus an index to `registry/`.
 * The output is what `npx shadcn add https://www.hitlkit.dev/r/<name>.json`
 * installs, so the registry can never drift from the package.
 *
 *   node scripts/registry-build.mjs          write registry/
 *   node scripts/registry-build.mjs --check  write, then fail on git drift
 *
 * Node-only. No runtime deps.
 */

import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const PKG = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(PKG, "src");
const OUT = join(PKG, "registry");
const CHECK = process.argv.includes("--check");

const manifest = JSON.parse(readFileSync(join(PKG, "registry.json"), "utf8"));

/** Package-relative specifier → consumer alias. Order matters: longest first. */
const REWRITES = [
  [/from "\.\.\/lib\/utils"/g, 'from "@/lib/utils"'],
  [/from "\.\/lib\/utils"/g, 'from "@/lib/utils"'],
  [/from "\.\/internal\/ui"/g, 'from "@/components/hitl/internal/ui"'],
  [/from "\.\/([A-Za-z-]+)"/g, 'from "@/components/hitl/$1"'],
];

function rewrite(source) {
  return REWRITES.reduce((s, [re, to]) => s.replace(re, to), source);
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const index = {
  $schema: manifest.$schema,
  name: manifest.name,
  homepage: manifest.homepage,
  items: [],
};

for (const item of manifest.items) {
  const files = item.files.map((f) => ({
    path: f.target,
    type: f.type,
    target: f.target,
    content: rewrite(readFileSync(join(SRC, f.path), "utf8")),
  }));
  const out = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: item.name,
    type: item.type,
    title: item.title,
    description: item.description,
    ...(item.dependencies ? { dependencies: item.dependencies } : {}),
    ...(item.registryDependencies ? { registryDependencies: item.registryDependencies } : {}),
    files,
  };
  writeFileSync(join(OUT, `${item.name}.json`), JSON.stringify(out, null, 2) + "\n");
  index.items.push({ ...item, files: item.files.map((f) => ({ ...f, path: f.target })) });
}
writeFileSync(join(OUT, "registry.json"), JSON.stringify(index, null, 2) + "\n");

const ui = manifest.items.filter((i) => i.type === "registry:ui").length;
const lib = manifest.items.length - ui;
console.log(`· registry/ ${manifest.items.length} items (${ui} ui, ${lib} lib)`);

if (CHECK) {
  try {
    execFileSync("git", ["diff", "--exit-code", "--", "registry"], { cwd: PKG, stdio: "inherit" });
    const untracked = execFileSync(
      "git",
      ["ls-files", "--others", "--exclude-standard", "--", "registry"],
      { cwd: PKG, encoding: "utf8" },
    ).trim();
    if (untracked) throw new Error(untracked);
    console.log("✓ REGISTRY — no drift.");
  } catch (e) {
    console.error(
      "\n✗ REGISTRY DRIFT — packages/ui/registry differs from the committed output.\n" +
        "  Run `pnpm --filter @hitl-kit/ui registry:build` and commit the result.",
    );
    if (e instanceof Error && e.message && !e.message.includes("Command failed")) console.error(e.message);
    process.exit(1);
  }
}
