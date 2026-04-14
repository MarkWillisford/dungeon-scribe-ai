/**
 * seedAll.ts — Run all seed scripts in dependency order
 *
 * Runs each seed script as a child process via spawnSync. Streams output in real
 * time. Prints a pass/fail summary at the end. Non-zero exit on any failure.
 *
 * Prerequisites:
 *   Set env vars before running:
 *     export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *     export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging, default)
 *     export FIREBASE_PROJECT_ID=<prod-project-id>               (prod)
 *
 * Usage:
 *   npx tsx scripts/db/seedAll.ts [--dry-run]
 *
 * Order: foundation → class option collections → class choice definitions → supplemental
 */

import { spawnSync } from 'child_process';
import * as path from 'path';

const DRY_RUN = process.argv.includes('--dry-run');
const SCRIPTS_DIR = __dirname;

const SCRIPTS: string[] = [
  // Foundation — no dependencies
  'seedRaces.ts',
  'seedClasses.ts',
  'seedFeats.ts',
  'seedTraits.ts',
  'seedEquipment.ts', // seeds weapons, armor, shields, gear collections
  'seedSpells.ts',
  'seedTemplates.ts',
  'seedDeities.ts',
  'seedDomains.ts',
  'seedAnimalCompanions.ts',

  // Class option collections — no cross-dependencies, but logically after foundation
  'seedBloodlines.ts',
  'seedCavalierOrders.ts',
  'seedInquisitions.ts',
  'seedMysteries.ts',
  'seedRevelations.ts',
  'seedRagePowers.ts',
  'seedRogueTalents.ts',
  'seedHexes.ts',
  'seedArcanistExploits.ts',
  'seedInvestigatorTalents.ts',
  'seedKineticistWildTalents.ts',
  'seedMagusArcana.ts',
  'seedMesmeristTricks.ts',
  'seedNinjaTricks.ts',
  'seedOccultistFocusPowers.ts',
  'seedPhrenicAmplifications.ts',
  'seedShamanSpirits.ts',
  'seedSlayerTalents.ts',
  'seedWarpriestBlessings.ts',
  'seedAlchemistDiscoveries.ts',
  'seedEidolonEvolutions.ts',

  // Depends on option collections existing
  'seedClassChoiceDefinitions.ts',

  // Supplemental
  'seedRulesets.ts',
  'seedMagicItems.ts',
];

interface ScriptResult {
  script: string;
  status: 'passed' | 'failed';
  exitCode: number;
}

const results: ScriptResult[] = [];

console.log(`\n${'='.repeat(60)}`);
console.log('seedAll — Running all seed scripts');
console.log(
  `Target project: ${process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5'}`,
);
if (DRY_RUN) console.log('Mode: DRY RUN (no writes)');
console.log(`Scripts to run: ${SCRIPTS.length}`);
console.log('='.repeat(60));

for (const script of SCRIPTS) {
  const scriptPath = path.join(SCRIPTS_DIR, script);
  const args = ['tsx', scriptPath];
  if (DRY_RUN) args.push('--dry-run');

  console.log(`\n${'─'.repeat(60)}`);
  console.log(`▶ ${script}`);
  console.log('─'.repeat(60));

  const result = spawnSync('npx', args, {
    stdio: 'inherit',
    env: process.env,
    shell: false,
  });

  const exitCode = result.status ?? 1;
  const passed = exitCode === 0;

  results.push({ script, status: passed ? 'passed' : 'failed', exitCode });

  if (!passed) {
    console.error(`\n✗ ${script} failed (exit code ${exitCode})`);
  }
}

// --- Summary ---
console.log(`\n${'='.repeat(60)}`);
console.log('SUMMARY');
console.log('='.repeat(60));

const passed = results.filter((r) => r.status === 'passed');
const failed = results.filter((r) => r.status === 'failed');

passed.forEach((r) => console.log(`  ✓ ${r.script}`));
failed.forEach((r) => console.log(`  ✗ ${r.script} (exit code ${r.exitCode})`));

console.log(`\nResult: ${passed.length}/${results.length} passed`);

if (failed.length > 0) {
  console.error(`\n${failed.length} script(s) failed. See above for details.`);
  process.exit(1);
} else {
  console.log('\nAll scripts completed successfully.');
}
