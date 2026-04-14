/**
 * seedSpells.ts — Upload ALL_SPELLS to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedSpells.ts [--dry-run]
 *
 * The script is idempotent: it clears the spells collection before re-seeding,
 * so re-running always produces a clean result.
 */

import * as admin from 'firebase-admin';
import { ALL_SPELLS } from '../../src/data/spells/index';
import type { Spell } from '../../src/types/spells';
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

async function clearCollection(collectionName: string): Promise<void> {
  console.log(`Clearing collection: ${collectionName}...`);
  const snapshot = await db.collection(collectionName).get();
  if (snapshot.empty) {
    console.log('  Collection already empty.');
    return;
  }
  const chunks = chunkArray(snapshot.docs, BATCH_SIZE);
  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((doc) => batch.delete(doc.ref));
    await batch.commit();
    await sleep(500);
    console.log(`  Deleted ${chunk.length} documents`);
  }
}

async function seedSpells(spells: Spell[]): Promise<void> {
  console.log(`\nSeeding ${spells.length} spells to project: ${PROJECT_ID}`);

  const bySchool: Record<string, number> = {};
  spells.forEach((s) => {
    bySchool[s.school] = (bySchool[s.school] ?? 0) + 1;
  });
  console.log('By school:', bySchool);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  await clearCollection('spells');

  const chunks = chunkArray(spells, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((spell) => {
      const ref = db.collection('spells').doc(); // auto-ID
      batch.set(ref, { ...spell, source: normalizeSource(spell.source) });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${spells.length}`);
  }

  console.log(`\nDone. ${totalWritten} spells seeded to Firestore.`);
}

// --- Run ---
seedSpells(ALL_SPELLS).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
