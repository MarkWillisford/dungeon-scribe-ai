/**
 * seedTemplates.ts — Upsert ALL_TEMPLATES into Firestore 'templates' collection.
 *
 * Uses upsert (set with merge:false) keyed on template.id so existing campaign/homebrew
 * templates with non-colliding IDs are preserved.
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedTemplates.ts [--dry-run]
 */

import * as admin from 'firebase-admin';
import { ALL_TEMPLATES } from '../../src/data/templates/index';
import type { TemplateDefinition } from '../../src/data/templates/types';
import { sleep, chunkArray } from './seedUtils';

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

async function seedTemplates(templates: TemplateDefinition[]): Promise<void> {
  console.log(`\nSeeding ${templates.length} templates to project: ${PROJECT_ID}`);

  const byAcquisition: Record<string, number> = {};
  templates.forEach((t) => {
    byAcquisition[t.acquisitionType] = (byAcquisition[t.acquisitionType] ?? 0) + 1;
  });
  const simpleCount = templates.filter((t) => t.isSimpleTemplate).length;
  console.log('By acquisition type:', byAcquisition);
  console.log(`Simple templates: ${simpleCount}`);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(templates, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((template) => {
      // Use template.id (kebab-case) as the Firestore document ID
      const ref = db.collection('templates').doc(template.id);
      batch.set(ref, template);
    });
    await batch.commit();
    await sleep(500);
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${templates.length}`);
  }

  console.log(`\nDone. ${totalWritten} templates upserted to Firestore.`);
}

// --- Run ---
seedTemplates(ALL_TEMPLATES).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
