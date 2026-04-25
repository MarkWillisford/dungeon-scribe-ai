/**
 * seedFavoredClassBonuses.ts — Upload ALL_FAVORED_CLASS_BONUSES to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedFavoredClassBonuses.ts [--dry-run]
 *
 * The script is idempotent: re-running upserts official entries by id without
 * touching campaign or homebrew content.
 */

import * as admin from 'firebase-admin';
import { ALL_FAVORED_CLASS_BONUSES } from '../../src/data/favoredClassBonuses/index';
import type { FavoredClassBonusOption } from '../../src/types/favoredClassBonuses';
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

async function seedFavoredClassBonuses(entries: FavoredClassBonusOption[]): Promise<void> {
  console.log(`\nSeeding ${entries.length} favored class bonuses to project: ${PROJECT_ID}`);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(entries, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((entry) => {
      const ref = db.collection('favoredClassBonuses').doc(entry.id);
      batch.set(ref, {
        ...entry,
        source: entry.source,
        visibility: 'global' as const,
      });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${entries.length}`);
  }

  console.log(`\nDone. ${totalWritten} favored class bonuses seeded to Firestore.`);
}

seedFavoredClassBonuses(ALL_FAVORED_CLASS_BONUSES).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
