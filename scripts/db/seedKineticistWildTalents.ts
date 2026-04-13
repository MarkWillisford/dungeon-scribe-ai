/**
 * seedKineticistWildTalents.ts — Upsert ALL_WILD_TALENTS to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedKineticistWildTalents.ts [--dry-run]
 *
 * The script is idempotent (upsert, not clear+insert) so campaign/homebrew
 * wild talents added by users are preserved. Document ID = wildTalent.id.
 * Collection: 'wildtalents'
 */

import * as admin from 'firebase-admin';
import { ALL_WILD_TALENTS } from '../../src/data/kineticistWildTalents/index';
import type { KineticistWildTalentEntry } from '../../src/types/classOptions';
import { normalizeSource } from '../../src/utils/normalizeSource';

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

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

async function seedWildTalents(talents: KineticistWildTalentEntry[]): Promise<void> {
  console.log(`\nSeeding ${talents.length} wild talents to project: ${PROJECT_ID}`);

  const infusions = talents.filter((t) => t.talentType === 'infusion');
  const utilities = talents.filter((t) => t.talentType === 'utility');
  console.log(
    `  Infusions: ${infusions.length} (${infusions.filter((t) => t.infusionType === 'form').length} form, ${infusions.filter((t) => t.infusionType === 'substance').length} substance)`,
  );
  console.log(`  Utilities: ${utilities.length}`);

  const bySource: Record<string, number> = {};
  talents.forEach((t) => {
    bySource[t.source] = (bySource[t.source] ?? 0) + 1;
  });
  console.log('By source:', bySource);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(talents, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((talent) => {
      const ref = db.collection('wildtalents').doc(talent.id);
      batch.set(ref, { ...talent, source: normalizeSource(talent.source) });
    });
    await batch.commit();
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${talents.length}`);
  }

  console.log(`\nDone. ${totalWritten} wild talents upserted to Firestore.`);
}

seedWildTalents(ALL_WILD_TALENTS).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
