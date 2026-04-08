/**
 * seedAlchemistDiscoveries.ts — Upload ALL_ALCHEMIST_DISCOVERIES to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedAlchemistDiscoveries.ts [--dry-run]
 *
 * Idempotent: uses batch.set() so re-running upserts without removing homebrew entries.
 */

import * as admin from 'firebase-admin';
import { ALL_ALCHEMIST_DISCOVERIES } from '../../src/data/alchemistDiscoveries/index';
import type { AlchemistDiscoveryEntry } from '../../src/types/classOptions';

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
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
}

async function seedAlchemistDiscoveries(discoveries: AlchemistDiscoveryEntry[]): Promise<void> {
  const byTier: Record<string, number> = {};
  discoveries.forEach((d) => {
    byTier[d.discoveryTier] = (byTier[d.discoveryTier] ?? 0) + 1;
  });
  console.log(`\nSeeding ${discoveries.length} alchemist discoveries to project: ${PROJECT_ID}`);
  console.log('By tier:', byTier);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(discoveries, BATCH_SIZE);
  let totalWritten = 0;
  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((entry) => {
      batch.set(db.collection('alchemistdiscoveries').doc(entry.id), entry);
    });
    await batch.commit();
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${discoveries.length}`);
  }

  console.log(`\nDone. ${totalWritten} alchemist discoveries seeded to Firestore.`);
}

seedAlchemistDiscoveries(ALL_ALCHEMIST_DISCOVERIES).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
