import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: { index: "src/index.ts" },
    format: ["esm"],
    dts: true,
    clean: true,
    sourcemap: true,
    target: "es2022",
    external: ["@hitl-kit/core", "@modelcontextprotocol/sdk", "zod", "zod-to-json-schema"],
  },
  {
    entry: { bin: "src/bin.ts" },
    format: ["esm"],
    dts: false,
    clean: false,
    sourcemap: false,
    target: "es2022",
    external: ["@hitl-kit/core", "@modelcontextprotocol/sdk", "zod", "zod-to-json-schema"],
    banner: { js: "#!/usr/bin/env node" },
  },
]);
