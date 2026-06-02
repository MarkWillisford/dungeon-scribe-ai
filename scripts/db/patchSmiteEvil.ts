/**
 * patchSmiteEvil.ts — Patch the Firestore `classes/paladin` document to add
 * toggle data (id, activationMode, shortDescription) to all Smite Evil class
 * feature entries.
 *
 * Without this patch, Smite Evil is a bare lore stub with no id or
 * activationMode, so it is invisible to the combat panel's toggle pipeline.
 *
 * Prerequisites:
 *   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging default)
 *
 * Usage:
 *   npx tsx scripts/db/patchSmiteEvil.ts [--dry-run]
 */

import * as admin from 'firebase-admin';

const DRY_RUN = process.argv.includes('--dry-run');
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';

if (!admin.apps.length) {
  if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    console.error('ERROR: GOOGLE_APPLICATION_CREDENTIALS not set.');
    process.exit(1);
  }
  admin.initializeApp({ credential: admin.credential.applicationDefault(), projectId: PROJECT_ID });
}

const db = admin.firestore();

interface ClassFeatureDoc {
  name: string;
  level: number;
  description: string;
  id?: string;
  activationMode?: string;
  shortDescription?: string;
  [key: string]: unknown;
}

const SMITE_SHORT_DESCRIPTION =
  'Swift — +CHA bonus to attack, +paladin level to damage, +CHA deflection to AC vs. target';

function applySmiteEvilPatch(features: ClassFeatureDoc[]): {
  patched: ClassFeatureDoc[];
  changeCount: number;
} {
  let changeCount = 0;
  const patched = features.map((f) => {
    if (!f.name.startsWith('Smite Evil')) return f;

    const isFirstEntry = f.level === 1;
    const updated: ClassFeatureDoc = { ...f, id: 'smite-evil' };

    if (isFirstEntry) {
      updated.activationMode = 'toggle';
      updated.shortDescription = SMITE_SHORT_DESCRIPTION;
    }

    changeCount++;
    return updated;
  });

  return { patched, changeCount };
}

async function patchPaladinSmiteEvil(): Promise<void> {
  const ref = db.collection('classes').doc('paladin');
  const snap = await ref.get();

  if (!snap.exists) {
    console.error('  ERROR: classes/paladin document not found.');
    process.exit(1);
  }

  const data = snap.data() as Record<string, unknown>;
  const features = (data.classFeatures ?? []) as ClassFeatureDoc[];

  const { patched, changeCount } = applySmiteEvilPatch(features);

  if (changeCount === 0) {
    console.log('  No Smite Evil features found — nothing to patch.');
    return;
  }

  console.log(`  Found ${changeCount} Smite Evil feature(s) to update.`);

  if (DRY_RUN) {
    console.log('  [DRY RUN] would update classes/paladin.classFeatures');
    patched
      .filter((f) => f.name.startsWith('Smite Evil'))
      .forEach((f) =>
        console.log(
          `    ${f.name} (level ${f.level}): id=${f.id}, activationMode=${f.activationMode ?? '(none)'}`,
        ),
      );
    return;
  }

  await ref.update({ classFeatures: patched });
  console.log('  ✓ classes/paladin patched.');
}

async function main(): Promise<void> {
  console.log(`\n=== patchSmiteEvil ===`);
  console.log(`Project: ${PROJECT_ID}`);
  if (DRY_RUN) console.log('[DRY RUN] — no writes will be performed.\n');

  console.log('\nPatching classes/paladin Smite Evil entries...');
  await patchPaladinSmiteEvil();

  console.log('\n✓ Patch complete.');
}

main().catch((err) => {
  console.error('\nFatal error:', err);
  process.exit(1);
});
