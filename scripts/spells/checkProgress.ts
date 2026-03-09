#!/usr/bin/env npx tsx
/**
 * checkProgress.ts — Report spell collection status across all schools.
 *
 * Usage:
 *   npx tsx scripts/spells/checkProgress.ts
 *   npx tsx scripts/spells/checkProgress.ts --count   # also count spells in existing files (slow)
 */

import * as fs from 'fs';
import * as path from 'path';

const SPELLS_DIR = path.resolve(__dirname, '../../src/data/spells');
const PROGRESS_FILE = path.join(SPELLS_DIR, '_progress.json');
const BATCHES_DIR = path.join(SPELLS_DIR, 'batches');
const COUNT_MODE = process.argv.includes('--count');

const SCHOOL_TO_FILE: Record<string, string> = {
  abjuration: 'abjurationSpells.ts',
  conjuration: 'conjurationSpells.ts',
  divination: 'divinationSpells.ts',
  enchantment: 'enchantmentSpells.ts',
  evocation: 'evocationSpells.ts',
  illusion: 'illusionSpells.ts',
  necromancy: 'necromancySpells.ts',
  transmutation: 'transmutationSpells.ts',
  universal: 'universalSpells.ts',
};

function countSpellsInFile(filePath: string): number {
  if (!fs.existsSync(filePath)) return 0;
  const content = fs.readFileSync(filePath, 'utf-8');
  // Count occurrences of `name:` inside the spell array — each spell has exactly one
  const matches = content.match(/^\s+name:/gm);
  return matches?.length ?? 0;
}

function getBatchFiles(school: string): string[] {
  const dir = path.join(BATCHES_DIR, school);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.startsWith('batch_') && f.endsWith('.ts'))
    .sort();
}

function main() {
  const progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'));
  const { config, schools } = progress;

  console.log('\n=== Spell Collection Progress ===');
  console.log(`Batch size: ${config.batchSize} spells\n`);

  let totalCollected = 0;
  const rows: string[][] = [];

  for (const [school, data] of Object.entries(schools) as [string, any][]) {
    const batches = getBatchFiles(school);
    const schoolFile = path.join(SPELLS_DIR, SCHOOL_TO_FILE[school]);

    let existingCount = '?';
    if (COUNT_MODE) {
      const n = countSpellsInFile(schoolFile);
      existingCount = String(n);
      if (n > 0) totalCollected += n;
    }

    let batchCount = 0;
    if (COUNT_MODE) {
      for (const b of batches) {
        batchCount += countSpellsInFile(path.join(BATCHES_DIR, school, b));
      }
      totalCollected += batchCount;
    }

    const nextSpell =
      data.nextSpellName ??
      (data.status === 'not_started' ? '(start of school)' : '(unknown — run --count)');
    const mergedFlag = data.merged ? '✓' : '-';

    rows.push([
      school.padEnd(14),
      data.status.padEnd(22),
      COUNT_MODE ? existingCount.padStart(8) : '?'.padStart(8),
      COUNT_MODE ? String(batchCount).padStart(8) : String(batches.length) + ' batches',
      String(batches.length).padStart(7),
      mergedFlag.padStart(7),
      nextSpell,
    ]);
  }

  const header = [
    'School'.padEnd(14),
    'Status'.padEnd(22),
    'Existing'.padStart(8),
    COUNT_MODE ? 'Batches'.padStart(8) : 'Batch files',
    'Files'.padStart(7),
    'Merged'.padStart(7),
    'Next spell',
  ];

  console.log(header.join('  '));
  console.log('-'.repeat(100));
  for (const row of rows) {
    console.log(row.join('  '));
  }

  if (COUNT_MODE) {
    console.log('\n' + '-'.repeat(100));
    console.log(`Total spells collected: ${totalCollected}`);
  }

  console.log('\nReady to merge:');
  for (const [school, data] of Object.entries(schools) as [string, any][]) {
    const batches = getBatchFiles(school);
    if (batches.length > 0 && !data.merged) {
      console.log(`  ${school} — ${batches.length} batch file(s) waiting`);
    }
  }

  console.log();
}

main();
