/**
 * seedMagicItems.ts — Upload magic item definitions to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedMagicItems.ts [--dry-run]
 *
 * The script is idempotent: it upserts each item by ID, preserving any
 * campaign/homebrew content that shares no ID with official items.
 *
 * NOTE: This script is a scaffold. Populate ALL_MAGIC_ITEMS from
 * src/data/magicItems/index.ts once that data is scraped (PR 2).
 */

import * as admin from 'firebase-admin';
import type { MagicItemDefinition } from '../../src/types/magicItems';
import { normalizeSource } from '../../src/utils/normalizeSource';

// TODO: replace with real import once data exists
// import { ALL_MAGIC_ITEMS } from '../../src/data/magicItems/index';
const ALL_MAGIC_ITEMS: MagicItemDefinition[] = [];

const DRY_RUN = process.argv.includes('--dry-run');
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';
const BATCH_SIZE = 500; // Firestore max writes per batch
const COLLECTION = 'magicItems';

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

async function seed(): Promise<void> {
  console.log(`Seeding ${ALL_MAGIC_ITEMS.length} magic items to '${COLLECTION}'...`);

  if (DRY_RUN) {
    console.log('[dry-run] No writes performed.');
    return;
  }

  if (ALL_MAGIC_ITEMS.length === 0) {
    console.warn('ALL_MAGIC_ITEMS is empty — nothing to seed. Add data first (PR 2).');
    return;
  }

  const collectionRef = db.collection(COLLECTION);
  let written = 0;

  for (let i = 0; i < ALL_MAGIC_ITEMS.length; i += BATCH_SIZE) {
    const batch = db.batch();
    const slice = ALL_MAGIC_ITEMS.slice(i, i + BATCH_SIZE);

    for (const item of slice) {
      const ref = collectionRef.doc(item.id);
      batch.set(ref, { ...item, source: normalizeSource(item.source) }, { merge: true });
    }

    await batch.commit();
    written += slice.length;
    console.log(`  Written ${written} / ${ALL_MAGIC_ITEMS.length}`);
  }

  console.log(`Done. ${written} magic items upserted.`);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
