/**
 * seedOccultistFocusPowers.ts — Upsert ALL_OCCULTIST_FOCUS_POWERS to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedOccultistFocusPowers.ts [--dry-run]
 *
 * The script is idempotent (upsert, not clear+insert) so campaign/homebrew
 * focus powers added by users are preserved. Document ID = focusPower.id.
 * Collection: 'occultistfocuspowers'
 */

import * as admin from 'firebase-admin';
import { ALL_OCCULTIST_FOCUS_POWERS } from '../../src/data/occultistFocusPowers/index';
import type { OccultistFocusPowerEntry } from '../../src/types/classOptions';
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

async function seedFocusPowers(powers: OccultistFocusPowerEntry[]): Promise<void> {
  console.log(`\nSeeding ${powers.length} occultist focus powers to project: ${PROJECT_ID}`);

  const bySchool: Record<string, number> = {};
  powers.forEach((p) => {
    bySchool[p.school] = (bySchool[p.school] ?? 0) + 1;
  });
  console.log('By school:', bySchool);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(powers, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((power) => {
      const ref = db.collection('occultistfocuspowers').doc(power.id);
      batch.set(ref, {
        ...power,
        source: normalizeSource(power.source),
        visibility: 'global' as const,
      });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${powers.length}`);
  }

  console.log(`\nDone. ${totalWritten} focus powers upserted to Firestore.`);
}

seedFocusPowers(ALL_OCCULTIST_FOCUS_POWERS).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
