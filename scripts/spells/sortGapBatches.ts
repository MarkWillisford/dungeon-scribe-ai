#!/usr/bin/env npx tsx
/**
 * sortGapBatches.ts — Read gap batch files, deduplicate against existing collection,
 * then route new spells into per-school batch files ready for mergeSpells.ts.
 *
 * Gap batch files live in: src/data/spells/batches/gap/gap_{letters}.ts
 * Output files go to:      src/data/spells/batches/{school}/batch_gap_{letters}.ts
 *
 * Usage:
 *   npx tsx scripts/spells/sortGapBatches.ts
 *   npx tsx scripts/spells/sortGapBatches.ts --dry-run   # report counts only
 */

import * as fs from 'fs';
import * as path from 'path';

const SPELLS_DIR = path.resolve(__dirname, '../../src/data/spells');
const BATCHES_DIR = path.join(SPELLS_DIR, 'batches');
const GAP_DIR = path.join(BATCHES_DIR, 'gap');
const DRY_RUN = process.argv.includes('--dry-run');

const SCHOOL_TO_EXPORT: Record<string, string> = {
  abjuration: 'ABJURATION',
  conjuration: 'CONJURATION',
  divination: 'DIVINATION',
  enchantment: 'ENCHANTMENT',
  evocation: 'EVOCATION',
  illusion: 'ILLUSION',
  necromancy: 'NECROMANCY',
  transmutation: 'TRANSMUTATION',
  universal: 'UNIVERSAL',
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getKnownSpellNames(): Set<string> {
  const known = new Set<string>();
  const nameRegex = /^\s*name:\s*['"](.+?)['"]/gm;

  // Scan all school files and all batch files (excluding gap dir)
  const schoolFiles = fs
    .readdirSync(SPELLS_DIR)
    .filter((f) => f.endsWith('Spells.ts'))
    .map((f) => path.join(SPELLS_DIR, f));

  const batchFiles: string[] = [];
  for (const school of Object.keys(SCHOOL_TO_EXPORT)) {
    const dir = path.join(BATCHES_DIR, school);
    if (!fs.existsSync(dir)) continue;
    fs.readdirSync(dir)
      .filter((f) => f.endsWith('.ts'))
      .forEach((f) => batchFiles.push(path.join(dir, f)));
  }

  for (const file of [...schoolFiles, ...batchFiles]) {
    const content = fs.readFileSync(file, 'utf-8');
    let match;
    while ((match = nameRegex.exec(content)) !== null) {
      known.add(match[1].toLowerCase().trim());
    }
  }

  return known;
}

function getGapFiles(): string[] {
  if (!fs.existsSync(GAP_DIR)) return [];
  return fs
    .readdirSync(GAP_DIR)
    .filter((f) => f.startsWith('gap_') && f.endsWith('.ts'))
    .sort()
    .map((f) => path.join(GAP_DIR, f));
}

/** Naive extraction of spell objects from a TS array file as raw text blocks */
function extractSpellObjects(content: string): string[] {
  // Find the exported array content
  const startMatch = content.match(/export const \w+ ?:.*?=\s*\[/);
  if (!startMatch || startMatch.index === undefined) return [];
  const startIdx = content.indexOf('[', startMatch.index) + 1;
  const endIdx = content.lastIndexOf('\n];');
  if (endIdx <= startIdx) return [];

  const inner = content.slice(startIdx, endIdx).trim();
  if (!inner) return [];

  // Split into individual spell objects by finding top-level { } blocks
  const objects: string[] = [];
  let depth = 0;
  let start = -1;

  for (let i = 0; i < inner.length; i++) {
    if (inner[i] === '{') {
      if (depth === 0) start = i;
      depth++;
    } else if (inner[i] === '}') {
      depth--;
      if (depth === 0 && start !== -1) {
        objects.push(inner.slice(start, i + 1));
        start = -1;
      }
    }
  }

  return objects;
}

function extractName(obj: string): string | null {
  const m = obj.match(/name:\s*['"](.+?)['"]/);
  return m ? m[1] : null;
}

function extractSchool(obj: string): string | null {
  const m = obj.match(/school:\s*['"](.+?)['"]/);
  return m ? m[1].toLowerCase().split(' ')[0] : null; // e.g. "Abjuration (ward)" → "abjuration"
}

function normalizeSchool(raw: string): string {
  const s = raw.toLowerCase().trim();
  for (const key of Object.keys(SCHOOL_TO_EXPORT)) {
    if (s.startsWith(key)) return key;
  }
  return 'universal'; // fallback
}

// ─── Main ────────────────────────────────────────────────────────────────────

function main() {
  console.log('\n=== sortGapBatches ===\n');

  const knownSpells = getKnownSpellNames();
  console.log(`Known spells: ${knownSpells.size}`);

  const gapFiles = getGapFiles();
  if (gapFiles.length === 0) {
    console.log('No gap batch files found in', GAP_DIR);
    return;
  }
  console.log(`Gap files: ${gapFiles.length}\n`);

  // Accumulate new spells by school
  const bySchool: Record<string, { letterTag: string; objects: string[] }[]> = {};
  for (const key of Object.keys(SCHOOL_TO_EXPORT)) bySchool[key] = [];

  let totalChecked = 0;
  let totalNew = 0;
  let totalSkipped = 0;

  for (const gapFile of gapFiles) {
    const tag = path.basename(gapFile, '.ts').replace('gap_', ''); // e.g. "A", "EF", "SA_SH"
    const content = fs.readFileSync(gapFile, 'utf-8');
    const objects = extractSpellObjects(content);
    const newBySchool: Record<string, string[]> = {};

    for (const obj of objects) {
      totalChecked++;
      const name = extractName(obj);
      if (!name) continue;

      if (knownSpells.has(name.toLowerCase().trim())) {
        totalSkipped++;
        continue;
      }

      const rawSchool = extractSchool(obj) ?? 'universal';
      const school = normalizeSchool(rawSchool);
      if (!newBySchool[school]) newBySchool[school] = [];
      newBySchool[school].push(obj);
      knownSpells.add(name.toLowerCase().trim()); // prevent cross-file duplication
      totalNew++;
    }

    for (const [school, objs] of Object.entries(newBySchool)) {
      if (objs.length > 0) {
        bySchool[school].push({ letterTag: tag, objects: objs });
      }
    }

    console.log(
      `  ${path.basename(gapFile)}: ${objects.length} checked, ${Object.values(newBySchool).flat().length} new`,
    );
  }

  console.log(
    `\nTotal checked: ${totalChecked} | New: ${totalNew} | Skipped (already known): ${totalSkipped}\n`,
  );

  if (DRY_RUN) {
    console.log('[DRY RUN] — no files written.\nNew spells by school:');
    for (const [school, entries] of Object.entries(bySchool)) {
      const count = entries.reduce((n, e) => n + e.objects.length, 0);
      if (count > 0) console.log(`  ${school}: ${count}`);
    }
    return;
  }

  // Write output files
  for (const [school, entries] of Object.entries(bySchool)) {
    if (entries.length === 0) continue;
    const exportName = SCHOOL_TO_EXPORT[school];
    const dir = path.join(BATCHES_DIR, school);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    for (const { letterTag, objects } of entries) {
      const outFile = path.join(dir, `batch_gap_${letterTag}.ts`);
      const content = `import type { Spell } from '@/types/spells';\n\nexport const ${exportName}_GAP_${letterTag}: Spell[] = [\n  ${objects.join(',\n  ')},\n];\n`;
      fs.writeFileSync(outFile, content, 'utf-8');
      console.log(`  Written: ${school}/batch_gap_${letterTag}.ts (${objects.length} spells)`);
    }
  }

  console.log('\nDone. Run mergeSpells.ts to incorporate into final school files.');
}

main();
