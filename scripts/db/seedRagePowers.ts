/**
 * seedRagePowers.ts — Upsert ALL_RAGE_POWERS to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedRagePowers.ts [--dry-run]
 *
 * The script is idempotent (upsert, not clear+insert) so campaign/homebrew
 * rage powers added by users are preserved. Document ID = ragePower.id.
 */

import * as admin from 'firebase-admin';
import { ALL_RAGE_POWERS } from '../../src/data/ragePowers/index';
import type { ClassOptionBase } from '../../src/types/classOptions';
import { normalizeSource } from '../../src/utils/normalizeSource';
import { sleep, chunkArray } from './seedUtils';

const DRY_RUN = process.argv.includes('--dry-run');
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';
const BATCH_SIZE = 500; // Firestore max writes per batch

// --- Init ---
if (!admin.apps.length) {
  const credential = process.env.GOOGLE_APPLICATION_CREDENTIALS
    ? admin.credential.applicationDefault()
    : (() => {
        console.error(
          'ERROR: GOOGLE_APPLICATION_CREDENTIALS env var not set.\n' +
            'Download a service account key from Firebase Console and set:\n' +
            '  export GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json',
        );
        process.exit(1);
      })();

  admin.initializeApp({ credential, projectId: PROJECT_ID });
}

const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true });

async function seedRagePowers(powers: ClassOptionBase[]): Promise<void> {
  console.log(`\nSeeding ${powers.length} rage powers to project: ${PROJECT_ID}`);

  const bySource: Record<string, number> = {};
  powers.forEach((p) => {
    const key = typeof p.source === 'string' ? p.source : p.source.bookId;
    bySource[key] = (bySource[key] ?? 0) + 1;
  });
  console.log('By source:', bySource);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(powers, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((power) => {
      const ref = db.collection('ragepowers').doc(power.id);
      batch.set(ref, { ...power, source: normalizeSource(power.source) });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${powers.length}`);
  }

  console.log(`\nDone. ${totalWritten} rage powers upserted to Firestore.`);
}

// --- Run ---
seedRagePowers(ALL_RAGE_POWERS).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
