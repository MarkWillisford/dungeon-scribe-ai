/**
 * backfillRaceSizeSpeed.ts — Repair race size and speed on existing characters
 *
 * The direct-entry race picker never sent a base speed or a size, and setRace
 * spread the previous race object forward, so every character created that way
 * kept the placeholder race's `baseSpeed: 30` and `Size.Medium` no matter which
 * race was chosen. A Gnome walked 30 feet and was Medium for AC, attack and
 * CMB/CMD.
 *
 * The picker now carries both, but characters saved before that fix still hold
 * the wrong snapshot. Re-selecting the race in the app would repair it, at the
 * cost of clearing that character's racial choices and alternate racial traits —
 * so this repairs the stored documents in place instead.
 *
 * For each character it looks the race up by name in the seed catalog and, when
 * they disagree, corrects:
 *   info.race.baseSpeed, info.race.sizeMod, info.size, combatStats.movement.base
 *
 * `movement.base` is only corrected when it still equals the old placeholder
 * (30) or the stale race speed — a value the user typed by hand is left alone.
 *
 * Prerequisites:
 *   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   export FIREBASE_PROJECT_ID=dungeon-scribe-doug-dev
 *
 * Usage:
 *   npx tsx scripts/db/backfillRaceSizeSpeed.ts            # dry run, changes nothing
 *   npx tsx scripts/db/backfillRaceSizeSpeed.ts --apply    # write the corrections
 */

import { config } from 'dotenv';
import { resolve } from 'path';
config({ path: resolve(__dirname, '../../.env.local') });

import * as admin from 'firebase-admin';
import { ALL_EXPANDED_RACES } from '../../src/data/races/index';

const PLACEHOLDER_SPEED = 30;
const APPLY = process.argv.includes('--apply');

interface CharacterDoc {
  info?: {
    name?: string;
    size?: string;
    race?: { name?: string; baseSpeed?: number; sizeMod?: string };
  };
  combatStats?: { movement?: { base?: number } };
}

function initFirestore(): admin.firestore.Firestore {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      projectId: process.env.FIREBASE_PROJECT_ID,
    });
  }
  return admin.firestore();
}

async function main(): Promise<void> {
  const db = initFirestore();
  console.log(`Project: ${process.env.FIREBASE_PROJECT_ID ?? '(from credentials)'}`);
  console.log(APPLY ? 'Mode:    APPLY — documents will be written\n' : 'Mode:    DRY RUN\n');

  const byName = new Map(ALL_EXPANDED_RACES.map((r) => [r.name.toLowerCase(), r]));
  const snap = await db.collection('characters').get();

  let repaired = 0;
  let alreadyCorrect = 0;
  let unmatched = 0;

  for (const doc of snap.docs) {
    const data = doc.data() as CharacterDoc;
    const charName = data.info?.name ?? '(unnamed)';
    const raceName = data.info?.race?.name;
    if (!raceName) {
      console.log(`  – ${charName}: no race recorded, skipping`);
      continue;
    }

    const race = byName.get(raceName.toLowerCase());
    if (!race) {
      console.log(`  ? ${charName}: race "${raceName}" is not in the catalog, skipping`);
      unmatched++;
      continue;
    }

    const storedSpeed = data.info?.race?.baseSpeed;
    const storedSizeMod = data.info?.race?.sizeMod;
    const storedInfoSize = data.info?.size;
    const storedMovement = data.combatStats?.movement?.base;

    const updates: Record<string, unknown> = {};
    if (storedSpeed !== race.speed) updates['info.race.baseSpeed'] = race.speed;
    if (storedSizeMod !== race.size) updates['info.race.sizeMod'] = race.size;
    if (storedInfoSize !== race.size) updates['info.size'] = race.size;

    // Only touch movement.base if it looks untouched by the user.
    const movementIsStale = storedMovement === PLACEHOLDER_SPEED || storedMovement === storedSpeed;
    if (movementIsStale && storedMovement !== race.speed) {
      updates['combatStats.movement.base'] = race.speed;
    }

    if (Object.keys(updates).length === 0) {
      alreadyCorrect++;
      continue;
    }

    console.log(`  ✎ ${charName} (${raceName})`);
    for (const [path, value] of Object.entries(updates)) {
      const before =
        path === 'info.race.baseSpeed'
          ? storedSpeed
          : path === 'info.race.sizeMod'
            ? storedSizeMod
            : path === 'info.size'
              ? storedInfoSize
              : storedMovement;
      console.log(`        ${path}: ${JSON.stringify(before)} → ${JSON.stringify(value)}`);
    }
    if (!movementIsStale && storedMovement !== race.speed) {
      console.log(
        `        combatStats.movement.base left at ${storedMovement} — looks hand-entered`,
      );
    }

    if (APPLY) await doc.ref.update(updates);
    repaired++;
  }

  console.log(
    `\n${repaired} character(s) ${APPLY ? 'repaired' : 'would be repaired'}, ` +
      `${alreadyCorrect} already correct, ${unmatched} with an unknown race.`,
  );
  if (!APPLY && repaired > 0) console.log('Re-run with --apply to write these changes.');
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
