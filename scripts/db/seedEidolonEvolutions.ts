/**
 * seedEidolonEvolutions.ts — Upload ALL_EIDOLON_EVOLUTIONS to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedEidolonEvolutions.ts [--dry-run]
 *
 * The script is idempotent: it uses batch.set() with the evolution's own id as the
 * document ID, so re-running always upserts without removing campaign/homebrew
 * evolutions stored in the same collection.
 */

import * as admin from 'firebase-admin';
import { ALL_EIDOLON_EVOLUTIONS } from '../../src/data/eidolonEvolutions/index';
import type { EidolonEvolutionEntry } from '../../src/types/classOptions';

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

async function seedEidolonEvolutions(evolutions: EidolonEvolutionEntry[]): Promise<void> {
  console.log(`\nSeeding ${evolutions.length} eidolon evolutions to project: ${PROJECT_ID}`);

  const byCost: Record<number, number> = {};
  const bySummoner: Record<string, number> = { apg: 0, unchained: 0, shared: 0 };
  evolutions.forEach((e) => {
    byCost[e.evolutionPointCost] = (byCost[e.evolutionPointCost] ?? 0) + 1;
    if (e.summoner === 'apg') bySummoner.apg++;
    else if (e.summoner === 'unchained') bySummoner.unchained++;
    else bySummoner.shared++;
  });
  console.log('By point cost:', byCost);
  console.log('By summoner:', bySummoner);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(evolutions, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((evolution) => {
      const ref = db.collection('eidolonevolutions').doc(evolution.id);
      batch.set(ref, evolution);
    });
    await batch.commit();
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${evolutions.length}`);
  }

  console.log(`\nDone. ${totalWritten} eidolon evolutions seeded to Firestore.`);
}

seedEidolonEvolutions(ALL_EIDOLON_EVOLUTIONS).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
