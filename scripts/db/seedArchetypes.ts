/**
 * seedArchetypes.ts — Upsert ALL_ARCHETYPES to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedArchetypes.ts [--dry-run]
 *
 * Large dataset (~1,176 archetypes). Batched in 500-doc chunks.
 * The script is idempotent (upsert, not clear+insert).
 *
 * Document ID: derived from className + name (kebab-case) to avoid
 * cross-class collisions (e.g. fighter-archer, rogue-scout).
 */

import * as admin from 'firebase-admin';
import { ALL_ARCHETYPES } from '../../src/data/classes/archetypes/index';
import type { ArchetypeData } from '../../src/data/classes/types';
import { normalizeSource } from '../../src/utils/normalizeSource';
import { sleep, chunkArray } from './seedUtils';

const DRY_RUN = process.argv.includes('--dry-run');
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';
const BATCH_SIZE = 500;

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
db.settings({ ignoreUndefinedProperties: true });

function archetypeDocId(className: string, name: string): string {
  const slug = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  return `${slug(className)}-${slug(name)}`;
}

async function seedArchetypes(archetypes: ArchetypeData[]): Promise<void> {
  console.log(`\nSeeding ${archetypes.length} archetypes to project: ${PROJECT_ID}`);

  const byClass: Record<string, number> = {};
  archetypes.forEach((a) => {
    byClass[a.className] = (byClass[a.className] ?? 0) + 1;
  });
  console.log(`By class (${Object.keys(byClass).length} classes):`, byClass);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(archetypes, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((archetype) => {
      const docId = archetypeDocId(archetype.className, archetype.name);
      const ref = db.collection('archetypes').doc(docId);
      batch.set(ref, {
        ...archetype,
        id: docId,
        source: normalizeSource(archetype.source),
        visibility: 'global' as const,
      }, { merge: true });
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${archetypes.length}`);
  }

  console.log(`\nDone. ${totalWritten} archetypes upserted to Firestore.`);
}

// --- Run ---
seedArchetypes(ALL_ARCHETYPES).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
