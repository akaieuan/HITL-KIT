import { describe, expect, it } from "vitest";
import * as api from "../index";

/**
 * Public runtime export-name snapshot for @hitl-kit/gates.
 *
 * Guards the surface a consumer sees: if a runtime export is added,
 * removed, or renamed, this snapshot fails and the change must be made on
 * purpose (update with `pnpm test -u`). The full *type* surface is
 * snapshotted separately in api-surface/gates.d.ts via `pnpm api:check`.
 */
describe("@hitl-kit/gates public API", () => {
  it("exports a stable, sorted set of runtime names", () => {
    const names = Object.keys(api).sort();
    expect(names).toMatchSnapshot();
  });
});
