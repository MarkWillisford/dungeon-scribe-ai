/**
 * seedClassFeatureEffectsStatus.ts
 *
 * Scans all class documents in Firestore and sets `effectsStatus` on each
 * class feature entry based on whether it already has effects modelled or
 * its description promises a numeric bonus.
 *
 * Usage:
 *   GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json \
 *   FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5 \
 *   npx tsx scripts/db/seedClassFeatureEffectsStatus.ts [--dry-run]
 */

import * as admin from 'firebase-admin';
import { config } from 'dotenv';
import * as path from 'path';
import { classifyEffectsStatus } from '../../src/utils/classFeatureEffectsStatus';
import type { EffectsStatus, ClassFeatureData } from '../../src/data/classes/types';
import { sleep } from './seedUtils';

config({ path: path.resolve(__dirname, '../../.env.local') });

const DRY_RUN = process.argv.includes('--dry-run');
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';
const BATCH_SIZE = 400;

if (!admin.apps.length) {
  if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    console.error(
      'ERROR: GOOGLE_APPLICATION_CREDENTIALS env var not set.\n' +
        'Download a service account key from Firebase Console and set:\n' +
        '  export GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json',
    );
    process.exit(1);
  }
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: PROJECT_ID,
  });
}

const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true });

interface ClassDoc {
  name: string;
  classFeatures?: ClassFeatureData[];
}

interface PatchResult {
  classDocs: number;
  featuresScanned: number;
  modelled: number;
  none: number;
  unmodelled: number;
  skipped: number;
}

async function run(): Promise<void> {
  console.log(`\nProject: ${PROJECT_ID}`);
  console.log(DRY_RUN ? '[DRY RUN] — no writes will be performed\n' : '');

  const snap = await db.collection('classes').get();
  const docs = snap.docs;
  console.log(`Found ${docs.length} class documents`);

  const result: PatchResult = {
    classDocs: 0,
    featuresScanned: 0,
    modelled: 0,
    none: 0,
    unmodelled: 0,
    skipped: 0,
  };

  // Collect writes: docRef → updated classFeatures array
  const patches: Array<{
    ref: admin.firestore.DocumentReference;
    classFeatures: ClassFeatureData[];
  }> = [];

  for (const docSnap of docs) {
    const data = docSnap.data() as ClassDoc;
    if (!data.classFeatures || data.classFeatures.length === 0) continue;

    let changed = false;
    const updated: ClassFeatureData[] = data.classFeatures.map((feature) => {
      result.featuresScanned++;
      const computed: EffectsStatus = classifyEffectsStatus(
        feature.description ?? '',
        (feature.effects ?? []).length,
      );

      if (feature.effectsStatus === computed) {
        result.skipped++;
        return feature;
      }

      changed = true;
      const counts = {
        modelled: result.modelled,
        none: result.none,
        unmodelled: result.unmodelled,
      };
      counts[computed]++;
      result.modelled = counts.modelled;
      result.none = counts.none;
      result.unmodelled = counts.unmodelled;

      return { ...feature, effectsStatus: computed };
    });

    if (changed) {
      result.classDocs++;
      patches.push({ ref: docSnap.ref, classFeatures: updated });
    }
  }

  console.log(`\nClassification summary (${result.featuresScanned} features scanned):`);
  console.log(`  modelled:   ${result.modelled}`);
  console.log(`  none:       ${result.none}`);
  console.log(`  unmodelled: ${result.unmodelled}`);
  console.log(`  unchanged:  ${result.skipped}`);
  console.log(`  class docs to update: ${result.classDocs}`);

  if (DRY_RUN || patches.length === 0) {
    console.log(DRY_RUN ? '\n[DRY RUN] no writes performed.' : '\nNothing to update.');
    return;
  }

  // Write in batches
  let written = 0;
  for (let i = 0; i < patches.length; i += BATCH_SIZE) {
    const chunk = patches.slice(i, i + BATCH_SIZE);
    const batch = db.batch();
    chunk.forEach(({ ref, classFeatures }) => {
      batch.set(ref, { classFeatures }, { merge: true });
    });
    await batch.commit();
    await sleep(300);
    written += chunk.length;
    console.log(`  Written: ${written}/${patches.length} class docs`);
  }

  console.log(`\nDone. ${written} class documents updated.`);
}

run().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
