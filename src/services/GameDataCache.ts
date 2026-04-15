/**
 * GameDataCache — in-memory TTL cache for game data queries.
 *
 * Session-lifetime only. AsyncStorage persistence is Phase D.
 * All Firestore reads are expensive (per-read billing) — cache aggressively.
 *
 * Default TTLs:
 *   Official content (feats, classes, etc.)  : 24 hours
 *   Campaign content                          : 30 minutes
 *   Search results                            : 5 minutes
 */

interface CacheEntry<T> {
  value: T;
  expiresAt: number;
}

export const TTL = {
  OFFICIAL: 24 * 60 * 60 * 1000, // 24 hours
  CAMPAIGN: 30 * 60 * 1000, // 30 minutes
  SEARCH: 5 * 60 * 1000, // 5 minutes
} as const;

export class GameDataCache {
  private static cache = new Map<string, CacheEntry<unknown>>();

  static get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return null;
    }
    return entry.value as T;
  }

  static set<T>(key: string, value: T, ttlMs: number = TTL.OFFICIAL): void {
    this.cache.set(key, { value, expiresAt: Date.now() + ttlMs });
  }

  static invalidate(key: string): void {
    this.cache.delete(key);
  }

  /** Removes all entries whose key starts with `prefix/`. */
  static invalidateCollection(prefix: string): void {
    const prefixSlash = `${prefix}/`;
    for (const key of this.cache.keys()) {
      if (key.startsWith(prefixSlash)) {
        this.cache.delete(key);
      }
    }
  }

  static clear(): void {
    this.cache.clear();
  }
}
