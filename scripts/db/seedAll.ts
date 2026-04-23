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
import * as readline from 'readline';
import { sleepSync } from './seedUtils';

const DRY_RUN = process.argv.includes('--dry-run');
const CONFIRM_PRODUCTION = process.argv.includes('--confirm-production');
const SCRIPTS_DIR = __dirname;
const STAGING_PROJECT = 'dungeon-scribe-ai-stagin-b4fb5';

/**
 * If the target project is not staging, require explicit --confirm-production
 * flag and an interactive confirmation prompt before proceeding.
 */
async function guardProduction(projectId: string): Promise<void> {
  if (projectId === STAGING_PROJECT) return;
  if (DRY_RUN) return; // dry-run is always safe

  if (!CONFIRM_PRODUCTION) {
    console.error(
      `\n${'!'.repeat(60)}\n` +
        `ERROR: Target project "${projectId}" is NOT staging.\n` +
        `To seed a non-staging project, you must pass --confirm-production.\n` +
        `\nUsage:\n` +
        `  npx tsx scripts/db/seedAll.ts --confirm-production\n` +
        `${'!'.repeat(60)}\n`,
    );
    process.exit(1);
  }

  // Interactive confirmation even with the flag
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const answer = await new Promise<string>((resolve) => {
    rl.question(
      `\n⚠️  You are about to seed PRODUCTION project: ${projectId}\n` +
        `   This will upsert documents across all ${SCRIPTS.length} collections.\n` +
        `   Type the project ID to confirm: `,
      resolve,
    );
  });
  rl.close();

  if (answer.trim() !== projectId) {
    console.error('\nConfirmation did not match. Aborting.');
    process.exit(1);
  }
}

const SCRIPTS: string[] = [
  // Foundation — no dependencies
  'seedRaces.ts',
  'seedClasses.ts',
  'seedFavoredClassBonuses.ts',
  'seedFeats.ts',
  'seedTraits.ts',
  'seedEquipment.ts', // seeds weapons, armor, shields, gear collections
  'seedSpells.ts',
  'seedTemplates.ts',
  'seedDeities.ts',
  'seedDomains.ts',
  'seedAnimalCompanions.ts',

  // Class option collections — no cross-dependencies, but logically after foundation
  'seedArchetypes.ts',
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
  // Eidolon data: base forms and subtypes must seed before evolutions so runtime
  // lookups by freeEvolutions id can resolve (though the seed itself doesn't enforce it).
  'seedEidolonBaseForms.ts',
  'seedEidolonSubtypes.ts',
  'seedEidolonEvolutions.ts',
  'seedDisciplines.ts',
  'seedManeuvers.ts',
  'seedStances.ts',
  'seedMartialTraditions.ts',

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

async function main(): Promise<void> {
  const projectId = process.env.FIREBASE_PROJECT_ID ?? STAGING_PROJECT;

  console.log(`\n${'='.repeat(60)}`);
  console.log('seedAll — Running all seed scripts');
  console.log(`Target project: ${projectId}`);
  if (DRY_RUN) console.log('Mode: DRY RUN (no writes)');
  console.log(`Scripts to run: ${SCRIPTS.length}`);
  console.log('='.repeat(60));

  await guardProduction(projectId);

  const results: ScriptResult[] = [];

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
    sleepSync(3000);
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
}

main().catch((err) => {
  console.error('seedAll failed:', err);
  process.exit(1);
});
