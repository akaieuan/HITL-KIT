import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  target: "es2020",
  // "use client" must survive bundling: every primitive is a client component.
  banner: { js: '"use client";' },
  external: ["react", "react-dom", "lucide-react", "@hitl-kit/core"],
});
