/**
 * seedUtils.ts — Shared utilities for seed scripts
 *
 * Loads .env.local on import so GOOGLE_APPLICATION_CREDENTIALS and any other
 * local overrides are available to all seed/verify scripts without needing
 * to export them manually before each run.
 */

import { config } from 'dotenv';
import { resolve } from 'path';

// Load .env.local from the repo root (two levels up from scripts/db/)
config({ path: resolve(__dirname, '../../.env.local') });

/** Pause execution for `ms` milliseconds. Use between batch commits to avoid rate-limiting. */
export const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

/** Split an array into chunks of at most `size` elements. */
export function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/**
 * Derive a stable Firestore document ID from a race name.
 *
 * Shared by seedRaces (which writes) and auditRaceDocs (which checks what was
 * written). Keep it in one place: if the two derivations ever drift, the audit
 * silently reports every race as an orphan.
 */
export function raceDocId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Synchronous sleep for use in non-async contexts (e.g. seedAll.ts spawnSync loops).
 * Uses Atomics.wait on a shared buffer — works in Node.js main thread.
 */
export function sleepSync(ms: number): void {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
