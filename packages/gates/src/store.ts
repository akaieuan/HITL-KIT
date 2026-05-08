import type { GateStore } from "./types";

interface StoredEntry<T = unknown> {
  value: T;
  expiresAt?: number;
}

/**
 * Single-process in-memory implementation of `GateStore`. Suitable for
 * development, demos, and single-instance deployments. For multi-process
 * production (multiple Lambda workers, replicated containers, edge
 * runtimes), provide a `GateStore` backed by Redis, Upstash, or your DB.
 *
 * Entries are evicted lazily on read; there's no background sweeper.
 */
export function inMemoryStore(): GateStore {
  const map = new Map<string, StoredEntry>();

  const isExpired = (entry: StoredEntry | undefined): entry is undefined => {
    if (!entry) return true;
    if (entry.expiresAt === undefined) return false;
    return Date.now() > entry.expiresAt;
  };

  return {
    async get<T = unknown>(key: string): Promise<T | undefined> {
      const entry = map.get(key);
      if (isExpired(entry)) {
        if (entry !== undefined) map.delete(key);
        return undefined;
      }
      return entry.value as T;
    },
    async set<T = unknown>(
      key: string,
      value: T,
      ttlSec?: number,
    ): Promise<void> {
      map.set(key, {
        value,
        expiresAt: ttlSec ? Date.now() + ttlSec * 1000 : undefined,
      });
    },
    async incr(key: string, ttlSec?: number): Promise<number> {
      const existing = map.get(key);
      let next = 1;
      let expiresAt: number | undefined;
      if (!isExpired(existing)) {
        const value = existing.value;
        next = (typeof value === "number" ? value : 0) + 1;
        expiresAt = existing.expiresAt;
      } else if (ttlSec) {
        expiresAt = Date.now() + ttlSec * 1000;
      }
      map.set(key, { value: next, expiresAt });
      return next;
    },
    async delete(key: string): Promise<void> {
      map.delete(key);
    },
  };
}
