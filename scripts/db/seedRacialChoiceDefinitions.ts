/**
 * seedRacialChoiceDefinitions.ts — Upsert all RacialChoiceDefinitions to Firestore
 *
 * Usage:
 *   npx tsx scripts/db/seedRacialChoiceDefinitions.ts [--dry-run]
 */

import * as admin from 'firebase-admin';
import { ELVEN_NOBLE_RACIAL_CHOICES } from './data/racialChoiceDefinitions/elvenNoble';
import type { RacialChoiceDefinition } from '../../src/types/racialChoices';
import { sleep, chunkArray } from './seedUtils';

const DRY_RUN = process.argv.includes('--dry-run');
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';
const BATCH_SIZE = 500;

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: PROJECT_ID,
  });
}

const db = admin.firestore();

const ALL_RACIAL_CHOICE_DEFINITIONS: RacialChoiceDefinition[] = [
  ...ELVEN_NOBLE_RACIAL_CHOICES,
];

async function seed() {
  console.log(`Seeding ${ALL_RACIAL_CHOICE_DEFINITIONS.length} racial choice definitions to project: ${PROJECT_ID}`);
  if (DRY_RUN) console.log('DRY RUN — no writes');

  const chunks = chunkArray(ALL_RACIAL_CHOICE_DEFINITIONS, BATCH_SIZE);
  let written = 0;

  for (const chunk of chunks) {
    if (!DRY_RUN) {
      const batch = db.batch();
      for (const def of chunk) {
        const ref = db.collection('racialChoiceDefinitions').doc(def.id);
        batch.set(ref, def);
      }
      await batch.commit();
    }
    written += chunk.length;
    console.log(`  Written: ${written}/${ALL_RACIAL_CHOICE_DEFINITIONS.length}`);
    if (chunks.indexOf(chunk) < chunks.length - 1) await sleep(200);
  }

  console.log('\nDone. Racial choice definitions upserted to Firestore.');
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
