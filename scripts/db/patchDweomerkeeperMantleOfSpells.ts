/**
 * patchDweomerkeeperMantleOfSpells.ts — Targeted patch for the Dweomerkeeper
 * "Mantle of Spells" class choice definition.
 *
 * Changes:
 *   - collectionFilter: { castingType: 'character_castable' }
 *     (was { castableByCharacter: true } or { castingType: 'divine' })
 *   - Removes levelFilterTable entirely (was based on incorrect source material;
 *     actual rule: "any spell she can cast", no fixed level cap per class level)
 *   - Updates description to match actual rule text
 *   - Bumps rev to 2
 *
 * Usage:
 *   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   npx tsx scripts/db/patchDweomerkeeperMantleOfSpells.ts [--dry-run]
 */

import * as admin from 'firebase-admin';

const DRY_RUN = process.argv.includes('--dry-run');
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: PROJECT_ID,
  });
}

const db = admin.firestore();

const DOC_ID = 'dweomerkeeper-mantle-of-spells';

async function patch(): Promise<void> {
  console.log(`\nPatching classChoiceDefinitions/${DOC_ID} in project: ${PROJECT_ID}`);
  if (DRY_RUN) console.log('[DRY RUN] — no writes will be performed\n');

  const ref = db.collection('classChoiceDefinitions').doc(DOC_ID);
  const snap = await ref.get();

  if (!snap.exists) {
    console.error(`Document not found: classChoiceDefinitions/${DOC_ID}`);
    process.exit(1);
  }

  const before = snap.data()!;
  console.log('Before:');
  console.log('  collectionFilter:', JSON.stringify(before.collectionFilter));
  console.log('  levelFilterTable:', before.levelFilterTable ? 'present' : 'absent');
  console.log('  rev:', before.rev);

  if (DRY_RUN) {
    console.log('\nWould apply:');
    console.log('  collectionFilter: { castingType: "character_castable" }');
    console.log('  levelFilterTable: DELETE');
    console.log('  rev: 2');
    return;
  }

  await ref.update({
    collectionFilter: { castingType: 'character_castable' },
    levelFilterTable: admin.firestore.FieldValue.delete(),
    description:
      'At 1st level and every odd level thereafter (1, 3, 5, 7, 9), a Dweomerkeeper chooses one arcane or divine spell she can cast. She may spontaneously convert any prepared spell of that type into the chosen spell, provided the converted spell is the same level or higher.',
    rev: 2,
  });

  const after = (await ref.get()).data()!;
  console.log('\nAfter:');
  console.log('  collectionFilter:', JSON.stringify(after.collectionFilter));
  console.log('  levelFilterTable:', after.levelFilterTable ? 'present' : 'absent');
  console.log('  rev:', after.rev);
  console.log('\nDone.');
}

patch().catch((e) => {
  console.error('Patch failed:', e);
  process.exit(1);
});
