/**
 * seedSlayerTalents.ts — Upload ALL_SLAYER_TALENTS to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedSlayerTalents.ts [--dry-run]
 *
 * The script is idempotent: uses batch.set() so re-running always upserts without
 * removing campaign/homebrew talents stored in the same collection.
 */

import * as admin from 'firebase-admin';
import { ALL_SLAYER_TALENTS } from '../../src/data/slayerTalents/index';
import type { SlayerTalentEntry } from '../../src/types/classOptions';
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

async function seedSlayerTalents(talents: SlayerTalentEntry[]): Promise<void> {
  console.log(`\nSeeding ${talents.length} slayer talents to project: ${PROJECT_ID}`);

  const byTier: Record<string, number> = {};
  talents.forEach((t) => {
    byTier[t.talentTier] = (byTier[t.talentTier] ?? 0) + 1;
  });
  console.log('By tier:', byTier);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(talents, BATCH_SIZE);
  let totalWritten = 0;
  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((talent) => {
      batch.set(db.collection('slayertalents').doc(talent.id), {
        ...talent,
        source: normalizeSource(talent.source),
        visibility: 'global' as const,
      });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${talents.length}`);
  }

  console.log(`\nDone. ${totalWritten} slayer talents seeded to Firestore.`);
}

seedSlayerTalents(ALL_SLAYER_TALENTS).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
