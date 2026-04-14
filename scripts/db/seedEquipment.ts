/**
 * seedEquipment.ts — Upsert ALL_WEAPONS, ALL_ARMOR, ALL_SHIELDS, ALL_GEAR to Firestore
 *
 * Seeding into 4 separate Firestore collections: weapons, armor, shields, gear.
 * Separate collections mirror GameDataService's separate getWeapons/getArmor/getShields/getGear
 * methods and avoid ID collisions across equipment categories.
 *
 * Prerequisites:
 *   1. Download a service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   2. Set env var: export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   3. Set env var: export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging)
 *                   export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedEquipment.ts [--dry-run]
 *
 * The script is idempotent (upsert, not clear+insert). Document ID = item.id.
 */

import * as admin from 'firebase-admin';
import { ALL_WEAPONS, ALL_ARMOR, ALL_SHIELDS, ALL_GEAR } from '../../src/data/equipment/index';
import type {
  WeaponDefinition,
  ArmorDefinition,
  ShieldDefinition,
  GearDefinition,
} from '../../src/types/equipment';
import { normalizeSource } from '../../src/utils/normalizeSource';

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

// --- Helpers ---
function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

type EquipmentItem = { id: string; source: string };

async function seedCollection(collectionName: string, items: EquipmentItem[]): Promise<void> {
  console.log(`\n  Seeding ${items.length} ${collectionName}...`);

  if (DRY_RUN) {
    console.log(`  [DRY RUN] — skipped.`);
    return;
  }

  const chunks = chunkArray(items, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach((item) => {
      const ref = db.collection(collectionName).doc(item.id);
      batch.set(ref, { ...item, source: normalizeSource(item.source) });
    });
    await batch.commit();
    totalWritten += chunk.length;
    console.log(`    Written: ${totalWritten}/${items.length}`);
  }

  console.log(`  Done. ${totalWritten} ${collectionName} upserted.`);
}

async function seedEquipment(
  weapons: WeaponDefinition[],
  armor: ArmorDefinition[],
  shields: ShieldDefinition[],
  gear: GearDefinition[],
): Promise<void> {
  const total = weapons.length + armor.length + shields.length + gear.length;
  console.log(`\nSeeding ${total} equipment items to project: ${PROJECT_ID}`);
  console.log(
    `  weapons: ${weapons.length}, armor: ${armor.length}, shields: ${shields.length}, gear: ${gear.length}`,
  );

  if (DRY_RUN) {
    console.log('\n[DRY RUN] — no writes performed.');
    return;
  }

  await seedCollection('weapons', weapons);
  await seedCollection('armor', armor);
  await seedCollection('shields', shields);
  await seedCollection('gear', gear);

  console.log(`\nDone. ${total} equipment items upserted across 4 collections.`);
}

// --- Run ---
seedEquipment(ALL_WEAPONS, ALL_ARMOR, ALL_SHIELDS, ALL_GEAR).catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
