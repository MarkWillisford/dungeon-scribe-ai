/**
 * seedRulesets.ts — Upsert system preset rulesets to Firestore
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedRulesets.ts [--dry-run]
 *
 * Presets live at top-level collection `rulesets/{id}` with visibility: 'global'.
 * The script is idempotent (upsert). Document ID = ruleset.id.
 */

import * as admin from 'firebase-admin';
import { SYSTEM_PRESETS } from '../../src/data/rulesets/presets';
import type { Ruleset } from '../../src/types/ruleset';

const DRY_RUN = process.argv.includes('--dry-run');
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';
const COLLECTION = 'rulesets';

if (!admin.apps.length) {
  const credential = process.env.GOOGLE_APPLICATION_CREDENTIALS
    ? admin.credential.applicationDefault()
    : (() => {
        throw new Error(
          'GOOGLE_APPLICATION_CREDENTIALS env var not set. ' +
            'Download a service account key and set the path.',
        );
      })();

  admin.initializeApp({ credential, projectId: PROJECT_ID });
}

const db = admin.firestore();

async function seedRulesets(): Promise<void> {
  console.log(`Project: ${PROJECT_ID}`);
  console.log(`Dry run: ${DRY_RUN}`);
  console.log(`Seeding ${SYSTEM_PRESETS.length} system presets to '${COLLECTION}'...\n`);

  let upserted = 0;
  let skipped = 0;

  for (const ruleset of SYSTEM_PRESETS) {
    const docRef = db.collection(COLLECTION).doc(ruleset.id);

    if (DRY_RUN) {
      console.log(`  [dry-run] Would upsert: ${ruleset.id} (${ruleset.name})`);
      skipped++;
      continue;
    }

    await docRef.set(ruleset as unknown as Record<string, unknown>, { merge: true });
    console.log(`  Upserted: ${ruleset.id} (${ruleset.name})`);
    upserted++;
  }

  console.log(`\nDone. Upserted: ${upserted}, Skipped (dry-run): ${skipped}`);
}

seedRulesets().catch((err: unknown) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
