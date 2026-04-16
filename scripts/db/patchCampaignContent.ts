/**
 * patchCampaignContent.ts — Patch live Firestore staging docs to fix the three
 * campaign content seeding issues discovered after the initial seed run.
 *
 * What this script does:
 *   1. Fixes classChoiceDefinitions/radiant-servant-extra-domain
 *      className: 'radiant-servant' → 'radiant servant' (space, not hyphen)
 *      so getDefinitionsForClass('Radiant Servant') resolves correctly.
 *
 *   2. Seeds the four new Prestige Paladin ClassChoiceDefinitions:
 *      prestige-paladin-turn-or-channel, prestige-paladin-divine-bond,
 *      prestige-paladin-mercy, prestige-paladin-weapon-training
 *
 *   3. If --campaign-id <id> is supplied, updates the campaignId field on the
 *      five orphaned class documents (hathran, dweomerkeeper,
 *      radiant-servant-of-milani, prestige-paladin, nemesis) from the
 *      FIXME placeholder to the real campaign ID.
 *      Without --campaign-id, step 3 is skipped with a warning.
 *
 * Prerequisites:
 *   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging default)
 *
 * Usage:
 *   # Fix choice definitions only (no campaign ID yet):
 *   npx tsx scripts/db/patchCampaignContent.ts [--dry-run]
 *
 *   # Fix everything including campaign ID:
 *   npx tsx scripts/db/patchCampaignContent.ts --campaign-id <id> [--dry-run]
 */

import * as admin from 'firebase-admin';
import { prestigePaladinDefinitions } from '../../src/data/classChoiceDefinitions/prestigePaladin';

const DRY_RUN = process.argv.includes('--dry-run');
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';

const campaignIdIdx = process.argv.indexOf('--campaign-id');
const CAMPAIGN_ID: string | null =
  campaignIdIdx !== -1 && process.argv[campaignIdIdx + 1]?.startsWith('--') === false
    ? process.argv[campaignIdIdx + 1]
    : null;

if (!admin.apps.length) {
  if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    console.error('ERROR: GOOGLE_APPLICATION_CREDENTIALS not set.');
    process.exit(1);
  }
  admin.initializeApp({ credential: admin.credential.applicationDefault(), projectId: PROJECT_ID });
}

const db = admin.firestore();

// ---------------------------------------------------------------------------
// 1. Fix radiant-servant-extra-domain className
// ---------------------------------------------------------------------------

async function fixRadiantServantClassName(): Promise<void> {
  const ref = db.collection('classChoiceDefinitions').doc('radiant-servant-extra-domain');
  const snap = await ref.get();

  if (!snap.exists) {
    console.warn('  ⚠  classChoiceDefinitions/radiant-servant-extra-domain not found — skipping.');
    return;
  }

  const current = snap.data()?.className;
  if (current === 'radiant servant') {
    console.log('  ✓ classChoiceDefinitions/radiant-servant-extra-domain already correct — skip.');
    return;
  }

  console.log(`  Patching className: '${current}' → 'radiant servant'`);
  if (!DRY_RUN) {
    await ref.update({ className: 'radiant servant' });
    console.log('  ✓ Done.');
  } else {
    console.log('  [DRY RUN] would update.');
  }
}

// ---------------------------------------------------------------------------
// 2. Seed Prestige Paladin ClassChoiceDefinitions
// ---------------------------------------------------------------------------

async function seedPrestigePaladinDefinitions(): Promise<void> {
  console.log(`  Seeding ${prestigePaladinDefinitions.length} Prestige Paladin definitions...`);
  for (const def of prestigePaladinDefinitions) {
    const ref = db.collection('classChoiceDefinitions').doc(def.id);
    if (DRY_RUN) {
      console.log(`  [DRY RUN] would upsert: classChoiceDefinitions/${def.id}`);
      continue;
    }
    await ref.set(def as unknown as Record<string, unknown>);
    console.log(`  ✓ classChoiceDefinitions/${def.id}`);
  }
}

// ---------------------------------------------------------------------------
// 3. Patch campaignId on the five class documents
// ---------------------------------------------------------------------------

const CAMPAIGN_CLASS_DOC_IDS = [
  'hathran',
  'dweomerkeeper',
  'radiant-servant-of-milani',
  'prestige-paladin',
  'nemesis',
];

async function patchCampaignIds(realCampaignId: string): Promise<void> {
  console.log(
    `  Patching campaignId → '${realCampaignId}' + visibility → 'campaign' on ${CAMPAIGN_CLASS_DOC_IDS.length} class docs...`,
  );
  for (const docId of CAMPAIGN_CLASS_DOC_IDS) {
    const ref = db.collection('classes').doc(docId);
    if (DRY_RUN) {
      console.log(`  [DRY RUN] would update: classes/${docId}.campaignId + visibility`);
      continue;
    }
    await ref.update({ campaignId: realCampaignId, visibility: 'campaign' });
    console.log(`  ✓ classes/${docId}`);
  }
}

/**
 * Temporary playtest fix: set visibility to 'global' on the five class docs so
 * they are accessible without a real campaign. Revert via patchCampaignIds()
 * once a campaign document exists in Firestore.
 */
async function setVisibilityGlobal(): Promise<void> {
  console.log(
    `  Setting visibility → 'global' (playtest workaround) on ${CAMPAIGN_CLASS_DOC_IDS.length} class docs...`,
  );
  for (const docId of CAMPAIGN_CLASS_DOC_IDS) {
    const ref = db.collection('classes').doc(docId);
    if (DRY_RUN) {
      console.log(`  [DRY RUN] would update: classes/${docId}.visibility = 'global'`);
      continue;
    }
    await ref.update({ visibility: 'global' });
    console.log(`  ✓ classes/${docId}`);
  }
}

// ---------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  console.log(`\n=== patchCampaignContent ===`);
  console.log(`Project: ${PROJECT_ID}`);
  if (DRY_RUN) console.log('[DRY RUN] — no writes will be performed.\n');

  console.log('\n[1/3] Fix radiant-servant-extra-domain className...');
  await fixRadiantServantClassName();

  console.log('\n[2/3] Seed Prestige Paladin ClassChoiceDefinitions...');
  await seedPrestigePaladinDefinitions();

  if (CAMPAIGN_ID) {
    console.log(
      '\n[3/3] Patch campaignId on class documents (and revert to campaign visibility)...',
    );
    await patchCampaignIds(CAMPAIGN_ID);
  } else {
    console.log('\n[3/3] No --campaign-id — setting visibility to global for playtest access...');
    await setVisibilityGlobal();
    console.log(
      '  NOTE: These classes are now globally visible (no campaign required).\n' +
        '  Re-run with --campaign-id <real-id> once a campaign exists to revert to campaign visibility.',
    );
  }

  console.log('\n✓ Patch complete.');
}

main().catch((err) => {
  console.error('\nFatal error:', err);
  process.exit(1);
});
