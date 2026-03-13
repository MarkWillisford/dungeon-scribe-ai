#!/usr/bin/env npx tsx
/**
 * mergeSpells.ts — Merge batch files into the final school spell file.
 *
 * Combines the content of the existing school file (if any) with all batch files
 * in src/data/spells/batches/<school>/, writing a single complete school file.
 *
 * Does NOT delete batch files — run with --confirm-delete after you've signed off.
 *
 * Usage:
 *   npx tsx scripts/spells/mergeSpells.ts                    # merge all schools that have pending batches
 *   npx tsx scripts/spells/mergeSpells.ts divination         # merge one school
 *   npx tsx scripts/spells/mergeSpells.ts --confirm-delete   # also remove batch files after merging
 */

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

const SPELLS_DIR = path.resolve(__dirname, '../../src/data/spells');
const PROGRESS_FILE = path.join(SPELLS_DIR, '_progress.json');
const BATCHES_DIR = path.join(SPELLS_DIR, 'batches');
const PROJECT_ROOT = path.resolve(__dirname, '../..');

const SCHOOL_META: Record<string, { file: string; exportName: string }> = {
  abjuration: { file: 'abjurationSpells.ts', exportName: 'ABJURATION_SPELLS' },
  conjuration: { file: 'conjurationSpells.ts', exportName: 'CONJURATION_SPELLS' },
  divination: { file: 'divinationSpells.ts', exportName: 'DIVINATION_SPELLS' },
  enchantment: { file: 'enchantmentSpells.ts', exportName: 'ENCHANTMENT_SPELLS' },
  evocation: { file: 'evocationSpells.ts', exportName: 'EVOCATION_SPELLS' },
  illusion: { file: 'illusionSpells.ts', exportName: 'ILLUSION_SPELLS' },
  necromancy: { file: 'necromancySpells.ts', exportName: 'NECROMANCY_SPELLS' },
  transmutation: { file: 'transmutationSpells.ts', exportName: 'TRANSMUTATION_SPELLS' },
  universal: { file: 'universalSpells.ts', exportName: 'UNIVERSAL_SPELLS' },
};

const CONFIRM_DELETE = process.argv.includes('--confirm-delete');
const targetSchool = process.argv.find(
  (a) => !a.startsWith('-') && a !== process.argv[1] && a !== 'mergeSpells.ts',
);

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Extract the inner content of the Spell[] array from a TS file.
 * Returns everything between the opening `[` of the export and the final `\n];`.
 * Returns null if the file has no array content.
 */
function extractArrayContent(filePath: string): string | null {
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, 'utf-8');

  // Find the exported array opening bracket
  const exportMatch = content.match(/export const \w+ ?:.*?=\s*\[/);
  if (!exportMatch || exportMatch.index === undefined) return null;

  const openBracketIdx = content.indexOf('[', exportMatch.index) + 1;

  // Find the closing `];` — it should be the last `\n];` in the file
  const closingIdx = content.lastIndexOf('\n];');
  if (closingIdx === -1 || closingIdx <= openBracketIdx) return null;

  const inner = content.slice(openBracketIdx, closingIdx).trim();
  return inner.length > 0 ? inner : null;
}

function getBatchFiles(school: string): string[] {
  const dir = path.join(BATCHES_DIR, school);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.startsWith('batch_') && f.endsWith('.ts'))
    .sort()
    .map((f) => path.join(dir, f));
}

function buildFinalFile(school: string): string {
  const { exportName } = SCHOOL_META[school];
  const schoolFile = path.join(SPELLS_DIR, SCHOOL_META[school].file);
  const batchFiles = getBatchFiles(school);

  const sections: string[] = [];

  // 1. Existing school file content
  const existingContent = extractArrayContent(schoolFile);
  if (existingContent) {
    sections.push(
      `  // ─── Pre-existing content ────────────────────────────────────────────────────\n${existingContent}`,
    );
  }

  // 2. Each batch file
  for (const batchPath of batchFiles) {
    const batchName = path.basename(batchPath, '.ts');
    const batchContent = extractArrayContent(batchPath);
    if (batchContent) {
      const separator = `  // ─── ${batchName} ─────────────────────────────────────────────────────────────`;
      sections.push(`${separator}\n${batchContent}`);
    } else {
      console.warn(`  WARNING: ${batchName} has no extractable content — skipping`);
    }
  }

  if (sections.length === 0) {
    throw new Error(`No spell content found for school: ${school}`);
  }

  // Join sections — ensure each ends with a comma if needed
  const combined = sections
    .map((s) => {
      const trimmed = s.trimEnd();
      // Add trailing comma if the section doesn't end with one
      return trimmed.endsWith(',') ? trimmed : trimmed + ',';
    })
    .join('\n\n');

  return `import type { Spell } from '@/types/spells';

export const ${exportName}: Spell[] = [
${combined}
];
`;
}

function runTypeCheck(): boolean {
  try {
    execSync('npx tsc --noEmit', { cwd: PROJECT_ROOT, stdio: 'pipe' });
    return true;
  } catch (e) {
    const err = e as { stdout?: Buffer };
    console.error('TypeScript errors:\n' + err.stdout?.toString());
    return false;
  }
}

// ─── Main ────────────────────────────────────────────────────────────────────

function mergeSchool(school: string): boolean {
  const meta = SCHOOL_META[school];
  if (!meta) {
    console.error(`Unknown school: ${school}`);
    return false;
  }

  const batchFiles = getBatchFiles(school);
  if (batchFiles.length === 0) {
    console.log(`  ${school}: no batch files — skipping`);
    return true;
  }

  console.log(`  ${school}: merging ${batchFiles.length} batch file(s)...`);

  let merged: string;
  try {
    merged = buildFinalFile(school);
  } catch (e) {
    console.error(`  ERROR: ${e instanceof Error ? e.message : String(e)}`);
    return false;
  }

  const schoolFilePath = path.join(SPELLS_DIR, meta.file);

  // Write a backup of the original before overwriting
  const backupPath = schoolFilePath + '.bak';
  if (fs.existsSync(schoolFilePath)) {
    fs.copyFileSync(schoolFilePath, backupPath);
    console.log(`  Backup saved: ${path.basename(backupPath)}`);
  }

  fs.writeFileSync(schoolFilePath, merged, 'utf-8');
  console.log(`  Written: ${meta.file}`);

  return true;
}

function main() {
  const progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'));

  const schoolsToProcess = targetSchool ? [targetSchool] : Object.keys(SCHOOL_META);

  console.log('\n=== mergeSpells ===\n');

  const merged: string[] = [];
  for (const school of schoolsToProcess) {
    const success = mergeSchool(school);
    if (success) merged.push(school);
  }

  if (merged.length === 0) {
    console.log('\nNothing to merge.');
    return;
  }

  console.log(`\nMerged: ${merged.join(', ')}`);
  console.log('\nRunning type check...');

  const ok = runTypeCheck();
  if (!ok) {
    console.error('\nType check FAILED. Fix errors before proceeding.');
    console.log('Backups of original files saved as *.bak');
    process.exit(1);
  }

  console.log('Type check passed.\n');

  // Update progress.json
  for (const school of merged) {
    progress.schools[school].merged = true;
    progress.schools[school].lastUpdated = new Date().toISOString();
  }
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));

  if (CONFIRM_DELETE) {
    console.log('--confirm-delete: removing batch files...');
    for (const school of merged) {
      const batchFiles = getBatchFiles(school);
      for (const f of batchFiles) {
        fs.unlinkSync(f);
        console.log(`  Deleted: ${path.relative(PROJECT_ROOT, f)}`);
      }
      // Also remove the .bak file since we're done
      const bakPath = path.join(SPELLS_DIR, SCHOOL_META[school].file + '.bak');
      if (fs.existsSync(bakPath)) fs.unlinkSync(bakPath);
    }
    console.log('Batch files removed.');
  } else {
    console.log('Batch files preserved. Run with --confirm-delete after sign-off to remove them.');
  }
}

main();
