/**
 * verifySeeding.ts — Verify all Firestore collections match static data counts
 *
 * For each seeded collection:
 *   1. Compares Firestore document count against static array length
 *   2. Samples up to 5 documents and checks the source field is normalized
 *      (bookId must not be 'unknown')
 *
 * Prerequisites:
 *   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (default)
 *
 * Usage:
 *   npx tsx scripts/db/verifySeeding.ts
 */

import { config } from 'dotenv';
import { resolve } from 'path';
config({ path: resolve(__dirname, '../../.env.local') });

import * as admin from 'firebase-admin';
import { ALL_EXPANDED_RACES } from '../../src/data/races/index';
import { ALL_EXPANDED_CLASSES } from '../../src/data/classes/index';
import { ALL_ARCHETYPES } from '../../src/data/classes/archetypes/index';
import { ALL_FEATS } from '../../src/data/feats/index';
import { ALL_TRAITS } from '../../src/data/traits/index';
import { ALL_WEAPONS, ALL_ARMOR, ALL_SHIELDS, ALL_GEAR } from '../../src/data/equipment/index';
import { ALL_SPELLS } from '../../src/data/spells/index';
import { ALL_TEMPLATES } from '../../src/data/templates/index';
import { ALL_DEITIES } from '../../src/data/deities/index';
import { ALL_DOMAINS } from '../../src/data/domains/index';
import { ALL_ANIMAL_COMPANIONS } from '../../src/data/animalCompanions/index';
import { ALL_BLOODLINES } from '../../src/data/bloodlines/index';
import { ALL_CAVALIER_ORDERS } from '../../src/data/cavalierOrders/index';
import { ALL_INQUISITIONS } from '../../src/data/inquisitions/index';
import { ALL_MYSTERIES } from '../../src/data/mysteries/index';
import { ALL_REVELATIONS } from '../../src/data/revelations/index';
import { ALL_RAGE_POWERS } from '../../src/data/ragePowers/index';
import { ALL_ROGUE_TALENTS } from '../../src/data/rogueTalents/index';
import { ALL_HEXES } from '../../src/data/hexes/index';
import { ALL_ARCANIST_EXPLOITS } from '../../src/data/arcanistExploits/index';
import { ALL_INVESTIGATOR_TALENTS } from '../../src/data/investigatorTalents/index';
import { ALL_WILD_TALENTS } from '../../src/data/kineticistWildTalents/index';
import { ALL_MAGUS_ARCANA } from '../../src/data/magusArcana/index';
import { ALL_MESMERIST_TRICKS } from '../../src/data/mesmeristTricks/index';
import { ALL_NINJA_TRICKS } from '../../src/data/ninjaTricks/index';
import { ALL_OCCULTIST_FOCUS_POWERS } from '../../src/data/occultistFocusPowers/index';
import { ALL_PHRENIC_AMPLIFICATIONS } from '../../src/data/phrenicAmplifications/index';
import { ALL_SHAMAN_SPIRITS } from '../../src/data/shamanSpirits/index';
import { ALL_SLAYER_TALENTS } from '../../src/data/slayerTalents/index';
import { ALL_WARPRIEST_BLESSINGS } from '../../src/data/warpriestBlessings/index';
import { ALL_ALCHEMIST_DISCOVERIES } from '../../src/data/alchemistDiscoveries/index';
import { ALL_EIDOLON_EVOLUTIONS } from '../../src/data/eidolonEvolutions/index';
import { ALL_CLASS_CHOICE_DEFINITIONS } from '../../src/data/classChoiceDefinitions/index';
import { SYSTEM_PRESETS } from '../../src/config/rulesetPresets';
import { ALL_RINGS } from '../../src/data/magicItems/rings/index';
import { ALL_STAVES } from '../../src/data/magicItems/staves/index';
import { ALL_RODS } from '../../src/data/magicItems/rods/index';
import { ALL_FAVORED_CLASS_BONUSES } from '../../src/data/favoredClassBonuses/index';

const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';

if (!admin.apps.length) {
  const credential = process.env.GOOGLE_APPLICATION_CREDENTIALS
    ? admin.credential.applicationDefault()
    : (() => {
        console.error(
          'ERROR: GOOGLE_APPLICATION_CREDENTIALS env var not set.\n' +
            'Download a service account key and set:\n' +
            '  export GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json',
        );
        process.exit(1);
      })();
  admin.initializeApp({ credential, projectId: PROJECT_ID });
}

const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true });

// ---------------------------------------------------------------------------
// Collection registry
// ---------------------------------------------------------------------------

interface CollectionSpec {
  label: string;
  collection: string;
  expected: number;
}

export const COLLECTIONS: CollectionSpec[] = [
  { label: 'Races', collection: 'races', expected: ALL_EXPANDED_RACES.length },
  { label: 'Classes', collection: 'classes', expected: ALL_EXPANDED_CLASSES.length },
  { label: 'Archetypes', collection: 'archetypes', expected: ALL_ARCHETYPES.length },
  {
    label: 'Favored Class Bonuses',
    collection: 'favoredClassBonuses',
    expected: ALL_FAVORED_CLASS_BONUSES.length,
  },
  { label: 'Feats', collection: 'feats', expected: ALL_FEATS.length },
  { label: 'Traits', collection: 'traits', expected: ALL_TRAITS.length },
  { label: 'Weapons', collection: 'weapons', expected: ALL_WEAPONS.length },
  { label: 'Armor', collection: 'armor', expected: ALL_ARMOR.length },
  { label: 'Shields', collection: 'shields', expected: ALL_SHIELDS.length },
  { label: 'Gear', collection: 'gear', expected: ALL_GEAR.length },
  { label: 'Spells', collection: 'spells', expected: ALL_SPELLS.length },
  { label: 'Templates', collection: 'templates', expected: ALL_TEMPLATES.length },
  { label: 'Deities', collection: 'deities', expected: ALL_DEITIES.length },
  { label: 'Domains', collection: 'domains', expected: ALL_DOMAINS.length },
  {
    label: 'Animal Companions',
    collection: 'animalCompanions',
    expected: ALL_ANIMAL_COMPANIONS.length,
  },
  { label: 'Bloodlines', collection: 'bloodlines', expected: ALL_BLOODLINES.length },
  { label: 'Cavalier Orders', collection: 'cavalierorders', expected: ALL_CAVALIER_ORDERS.length },
  { label: 'Inquisitions', collection: 'inquisitions', expected: ALL_INQUISITIONS.length },
  { label: 'Mysteries', collection: 'mysteries', expected: ALL_MYSTERIES.length },
  { label: 'Revelations', collection: 'revelations', expected: ALL_REVELATIONS.length },
  { label: 'Rage Powers', collection: 'ragepowers', expected: ALL_RAGE_POWERS.length },
  { label: 'Rogue Talents', collection: 'roguetalents', expected: ALL_ROGUE_TALENTS.length },
  { label: 'Hexes', collection: 'hexes', expected: ALL_HEXES.length },
  {
    label: 'Arcanist Exploits',
    collection: 'arcanistexploits',
    expected: ALL_ARCANIST_EXPLOITS.length,
  },
  {
    label: 'Investigator Talents',
    collection: 'investigatortalents',
    expected: ALL_INVESTIGATOR_TALENTS.length,
  },
  {
    label: 'Kineticist Wild Talents',
    collection: 'wildtalents',
    expected: ALL_WILD_TALENTS.length,
  },
  { label: 'Magus Arcana', collection: 'magusarcana', expected: ALL_MAGUS_ARCANA.length },
  {
    label: 'Mesmerist Tricks',
    collection: 'mesmeristtricks',
    expected: ALL_MESMERIST_TRICKS.length,
  },
  { label: 'Ninja Tricks', collection: 'ninjatricks', expected: ALL_NINJA_TRICKS.length },
  {
    label: 'Occultist Focus Powers',
    collection: 'occultistfocuspowers',
    expected: ALL_OCCULTIST_FOCUS_POWERS.length,
  },
  {
    label: 'Phrenic Amplifications',
    collection: 'phrenicamplifications',
    expected: ALL_PHRENIC_AMPLIFICATIONS.length,
  },
  { label: 'Shaman Spirits', collection: 'shamanspirits', expected: ALL_SHAMAN_SPIRITS.length },
  { label: 'Slayer Talents', collection: 'slayertalents', expected: ALL_SLAYER_TALENTS.length },
  {
    label: 'Warpriest Blessings',
    collection: 'warpriestblessings',
    expected: ALL_WARPRIEST_BLESSINGS.length,
  },
  {
    label: 'Alchemist Discoveries',
    collection: 'alchemistdiscoveries',
    expected: ALL_ALCHEMIST_DISCOVERIES.length,
  },
  {
    label: 'Eidolon Evolutions',
    collection: 'eidolonevolutions',
    expected: ALL_EIDOLON_EVOLUTIONS.length,
  },
  {
    label: 'Class Choice Definitions',
    collection: 'classChoiceDefinitions',
    expected: ALL_CLASS_CHOICE_DEFINITIONS.length,
  },
  { label: 'Rulesets', collection: 'rulesets', expected: SYSTEM_PRESETS.length },
  {
    label: 'Magic Items',
    collection: 'magicItems',
    expected: ALL_RINGS.length + ALL_STAVES.length + ALL_RODS.length,
  },
];

// ---------------------------------------------------------------------------
// Verification helpers
// ---------------------------------------------------------------------------

interface CollectionResult {
  label: string;
  collection: string;
  expected: number;
  actual: number;
  countStatus: 'PASS' | 'FAIL' | 'WARN';
  unknownSources: number;
  sampledDocs: number;
  error?: string;
}

async function verifyCollection(spec: CollectionSpec): Promise<CollectionResult> {
  const result: CollectionResult = {
    label: spec.label,
    collection: spec.collection,
    expected: spec.expected,
    actual: 0,
    countStatus: 'FAIL',
    unknownSources: 0,
    sampledDocs: 0,
  };

  try {
    // Count via aggregation query
    const countSnap = await db.collection(spec.collection).count().get();
    result.actual = countSnap.data().count;

    if (result.actual === spec.expected) {
      result.countStatus = 'PASS';
    } else if (result.actual > 0 && Math.abs(result.actual - spec.expected) <= 5) {
      // Within 5 — likely a minor data discrepancy, not a missing batch
      result.countStatus = 'WARN';
    } else {
      result.countStatus = 'FAIL';
    }

    // Sample up to 5 docs and check source normalization
    const sampleSnap = await db.collection(spec.collection).limit(5).get();
    result.sampledDocs = sampleSnap.size;

    for (const doc of sampleSnap.docs) {
      const data = doc.data();
      const source = data.source;
      if (source && typeof source === 'object' && source.bookId === 'unknown') {
        result.unknownSources++;
      }
    }
  } catch (err) {
    result.error = String(err);
    result.countStatus = 'FAIL';
  }

  return result;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function verify(): Promise<void> {
  console.log(`\n${'='.repeat(70)}`);
  console.log('verifySeeding — Checking all Firestore collections');
  console.log(`Project: ${PROJECT_ID}`);
  console.log('='.repeat(70));

  const results: CollectionResult[] = [];

  for (const spec of COLLECTIONS) {
    process.stdout.write(`  Checking ${spec.label}...`);
    const result = await verifyCollection(spec);
    results.push(result);

    const countStr =
      result.countStatus === 'PASS'
        ? `✓ ${result.actual}/${result.expected}`
        : result.countStatus === 'WARN'
          ? `~ ${result.actual}/${result.expected} (off by ${Math.abs(result.actual - result.expected)})`
          : `✗ ${result.actual}/${result.expected}`;

    const sourceStr =
      result.unknownSources > 0 ? ` | ⚠ ${result.unknownSources} unknown sources` : '';

    console.log(` ${countStr}${sourceStr}`);

    if (result.error) {
      console.log(`    ERROR: ${result.error}`);
    }
  }

  // Summary
  const passed = results.filter((r) => r.countStatus === 'PASS');
  const warned = results.filter((r) => r.countStatus === 'WARN');
  const failed = results.filter((r) => r.countStatus === 'FAIL');
  const withUnknown = results.filter((r) => r.unknownSources > 0);

  console.log(`\n${'='.repeat(70)}`);
  console.log('SUMMARY');
  console.log('='.repeat(70));
  console.log(
    `Count checks:   ${passed.length} passed, ${warned.length} warned, ${failed.length} failed`,
  );
  console.log(`Source checks:  ${withUnknown.length} collection(s) with unknown source entries`);

  if (warned.length > 0) {
    console.log('\nWarnings (count mismatch ≤5):');
    warned.forEach((r) =>
      console.log(`  ~ ${r.label}: ${r.actual} in Firestore, ${r.expected} in static data`),
    );
  }

  if (failed.length > 0) {
    console.log('\nFailures:');
    failed.forEach((r) => {
      console.log(`  ✗ ${r.label}: ${r.actual} in Firestore, ${r.expected} in static data`);
      if (r.error) console.log(`    ${r.error}`);
    });
  }

  if (withUnknown.length > 0) {
    console.log('\nCollections with unknown sources (re-seed may be needed):');
    withUnknown.forEach((r) =>
      console.log(
        `  ⚠ ${r.label}: ${r.unknownSources}/${r.sampledDocs} sampled docs have unknown bookId`,
      ),
    );
  }

  const totalDocs = results.reduce((sum, r) => sum + r.actual, 0);
  const totalExpected = results.reduce((sum, r) => sum + r.expected, 0);
  console.log(
    `\nTotal: ${totalDocs.toLocaleString()} docs in Firestore, ${totalExpected.toLocaleString()} expected`,
  );

  if (failed.length > 0) {
    process.exit(1);
  }
}

if (require.main === module) {
  verify().catch((err) => {
    console.error('Verify failed:', err);
    process.exit(1);
  });
}
