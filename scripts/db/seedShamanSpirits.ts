/**
 * seedShamanSpirits.ts — Upload ALL_SHAMAN_SPIRITS to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedShamanSpirits.ts [--dry-run]
 *
 * The script is idempotent: it uses batch.set() with the spirit's own id as the
 * document ID, so re-running always upserts without removing campaign/homebrew
 * spirits stored in the same collection.
 */

import * as admin from 'firebase-admin';
import { ALL_SHAMAN_SPIRITS } from '../../src/data/shamanSpirits/index';
import type { ShamanSpiritEntry } from '../../src/types/classOptions';
import { normalizeSource } from '../../src/utils/normalizeSource';
import { sleep, chunkArray } from './seedUtils';

const DRY_RUN = process.argv.includes('--dry-run');
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';
const BATCH_SIZE = 500;

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

async function seedShamanSpirits(spirits: ShamanSpiritEntry[]): Promise<void> {
  console.log(`\nSeeding ${spirits.length} shaman spirits to project: ${PROJECT_ID}`);

  const wandering = spirits.filter((s) => s.wanderingSpirit).length;
  console.log(`Wandering spirits: ${wandering} / ${spirits.length}`);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(spirits, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((spirit) => {
      const ref = db.collection('shamanspirits').doc(spirit.id);
      batch.set(ref, {
        ...spirit,
        source: normalizeSource(spirit.source),
        visibility: 'global' as const,
      });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${spirits.length}`);
  }

  console.log(`\nDone. ${totalWritten} shaman spirits seeded to Firestore.`);
}

seedShamanSpirits(ALL_SHAMAN_SPIRITS).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
