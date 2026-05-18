/**
 * seedResourceFeatEffects.ts — Patches resource-modifying feats in Firestore staging
 * with their correct effects arrays.
 *
 * Feats covered (bonus values verified against d20pfsrd.com / Archives of Nethys PF1e):
 *   extra_channel      → resource.channel_energy_uses  +2  (CRB)
 *   extra_ki           → resource.ki                   +2  (CRB)
 *   extra_rage         → resource.rage_rounds           +6  (CRB)
 *   extra_lay_on_hands → resource.lay_on_hands          +2  (CRB)
 *   extra_grit         → resource.grit                 +2  (UC)
 *   extra_panache      → resource.panache               +2  (ACG)
 *   extra_arcane_pool  → resource.arcane_pool           +2  (UM)
 *   extra_inspiration  → resource.inspiration          +3  (ACG)
 *
 * Idempotent: any existing effect targeting the same resource pool is replaced.
 * Targets staging only. Will exit if FIREBASE_PROJECT_ID is set to any other project.
 *
 * Usage:
 *   npx tsx scripts/db/seedResourceFeatEffects.ts [--dry-run]
 */

import * as admin from 'firebase-admin';
import type { FeatEffect } from '../../src/types/feats';
import { BonusType } from '../../src/types/base';
import { sleep } from './seedUtils';

const STAGING_PROJECT_ID = 'dungeon-scribe-ai-stagin-b4fb5';

// ---- Patch definitions ----

export interface FeatPatch {
  featId: string;
  featName: string;
  effect: FeatEffect;
}

export const RESOURCE_FEAT_PATCHES: FeatPatch[] = [
  {
    featId: 'extra_channel',
    featName: 'Extra Channel',
    effect: {
      type: 'bonus',
      bonusType: BonusType.UNTYPED,
      target: 'resource.channel_energy_uses',
      value: 2,
      source: 'Extra Channel',
    },
  },
  {
    featId: 'extra_ki',
    featName: 'Extra Ki',
    effect: {
      type: 'bonus',
      bonusType: BonusType.UNTYPED,
      target: 'resource.ki',
      value: 2,
      source: 'Extra Ki',
    },
  },
  {
    featId: 'extra_rage',
    featName: 'Extra Rage',
    effect: {
      type: 'bonus',
      bonusType: BonusType.UNTYPED,
      target: 'resource.rage_rounds',
      value: 6,
      source: 'Extra Rage',
    },
  },
  {
    featId: 'extra_lay_on_hands',
    featName: 'Extra Lay on Hands',
    effect: {
      type: 'bonus',
      bonusType: BonusType.UNTYPED,
      target: 'resource.lay_on_hands',
      value: 2,
      source: 'Extra Lay on Hands',
    },
  },
  {
    featId: 'extra_grit',
    featName: 'Extra Grit',
    effect: {
      type: 'bonus',
      bonusType: BonusType.UNTYPED,
      target: 'resource.grit',
      value: 2,
      source: 'Extra Grit',
    },
  },
  {
    featId: 'extra_panache',
    featName: 'Extra Panache',
    effect: {
      type: 'bonus',
      bonusType: BonusType.UNTYPED,
      target: 'resource.panache',
      value: 2,
      source: 'Extra Panache',
    },
  },
  {
    featId: 'extra_arcane_pool',
    featName: 'Extra Arcane Pool',
    effect: {
      type: 'bonus',
      bonusType: BonusType.UNTYPED,
      target: 'resource.arcane_pool',
      value: 2,
      source: 'Extra Arcane Pool',
    },
  },
  {
    featId: 'extra_inspiration',
    featName: 'Extra Inspiration',
    effect: {
      type: 'bonus',
      bonusType: BonusType.UNTYPED,
      target: 'resource.inspiration',
      value: 3,
      source: 'Extra Inspiration',
    },
  },
];

// ---- Pure logic (exported for testing) ----

/**
 * Returns a new effects array with the patch effect applied idempotently.
 * Any existing effect that targets the same resource pool is replaced.
 */
export function applyEffectPatch(currentEffects: FeatEffect[], patch: FeatEffect): FeatEffect[] {
  const filtered = currentEffects.filter((e) => e.target !== patch.target);
  return [...filtered, patch];
}

// ---- Execution (only when run as the main script) ----

async function run(): Promise<void> {
  const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? STAGING_PROJECT_ID;
  const DRY_RUN = process.argv.includes('--dry-run');

  if (PROJECT_ID !== STAGING_PROJECT_ID) {
    console.error(
      `ERROR: This script targets staging only.\n` +
        `Expected project: ${STAGING_PROJECT_ID}\n` +
        `Got:              ${PROJECT_ID}\n\n` +
        'Unset FIREBASE_PROJECT_ID or set it to the staging project ID to proceed.',
    );
    process.exit(1);
  }

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

  console.log(`\nseeding resource feat effects → project: ${PROJECT_ID}`);
  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes will be performed.\n');
  }

  let patched = 0;
  let skipped = 0;
  let missing = 0;

  for (const { featId, featName, effect } of RESOURCE_FEAT_PATCHES) {
    const ref = db.collection('feats').doc(featId);
    const snap = await ref.get();

    if (!snap.exists) {
      console.warn(`  SKIP  ${featName} (${featId}) — document not found in Firestore`);
      missing++;
      continue;
    }

    const data = snap.data() as { effects?: FeatEffect[] };
    const currentEffects: FeatEffect[] = data.effects ?? [];
    const updated = applyEffectPatch(currentEffects, effect);

    const alreadyCorrect = currentEffects.some(
      (e) => e.target === effect.target && e.value === effect.value,
    );

    if (alreadyCorrect) {
      console.log(`  OK    ${featName} (${featId}) — effect already present, no change`);
      skipped++;
      continue;
    }

    if (!DRY_RUN) {
      await ref.update({ effects: updated });
      await sleep(200);
    }

    const action = DRY_RUN ? '[DRY]' : 'PATCH';
    console.log(`  ${action} ${featName} (${featId}) → ${effect.target} +${effect.value}`);
    patched++;
  }

  console.log(`\nDone. patched=${patched} already-correct=${skipped} missing=${missing}`);
}

if (require.main === module) {
  run().catch((err) => {
    console.error('Script failed:', err);
    process.exit(1);
  });
}
