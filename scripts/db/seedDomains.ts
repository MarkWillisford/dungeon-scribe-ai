/**
 * seedDomains.ts — Upload ALL_DOMAINS to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedDomains.ts [--dry-run]
 *
 * The script is idempotent: it clears the domains collection before re-seeding,
 * so re-running always produces a clean result.
 */

import * as admin from 'firebase-admin';
import { ALL_DOMAINS } from '../../src/data/domains/index';
import type { DomainDocument } from '../../src/types/classOptions';

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

// --- Helpers ---
function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

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
    console.log(`  Deleted ${chunk.length} documents`);
  }
}

async function seedDomains(domains: DomainDocument[]): Promise<void> {
  console.log(`\nSeeding ${domains.length} domains to project: ${PROJECT_ID}`);


  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  await clearCollection('domains');

  const chunks = chunkArray(domains, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((domain) => {
      const ref = db.collection('domains').doc(domain.id);
      batch.set(ref, domain);
    });
    await batch.commit();
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${domains.length}`);
  }

  console.log(`\nDone. ${totalWritten} domains seeded to Firestore.`);
}

// --- Run ---
seedDomains(ALL_DOMAINS).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
