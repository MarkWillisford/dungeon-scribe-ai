/**
 * extractClassFeatureResourcePools.ts
 *
 * AI agent pass over class feature descriptions to extract structured resource pool
 * definitions. Reads from local class data (source of truth for Firestore). Outputs
 * a JSON seed file for human review before any seeding occurs.
 *
 * This is a HITL script — the JSON output requires human review against PF1e rules
 * before proceeding to seed. See issue #144.
 *
 * Prerequisites:
 *   ANTHROPIC_API_KEY env var must be set.
 *
 * Usage:
 *   npx tsx scripts/db/extractClassFeatureResourcePools.ts [--dry-run]
 *
 * Output:
 *   scripts/db/seed-data/class-feature-resource-pools.json
 */

import Anthropic from '@anthropic-ai/sdk';
import * as fs from 'fs';
import * as path from 'path';
import {
  CORE_CLASSES_EXPANDED,
  HYBRID_CLASSES_EXPANDED,
  BASE_CLASSES_EXPANDED,
} from '../../src/data/classes/index';
import type { ExpandedClassData } from '../../src/data/classes/types';
import type { ExtractedResourcePool, ClassFeatureResourcePoolEntry } from './resourcePoolExtractionTypes';

export type { ExtractedResourcePool, ClassFeatureResourcePoolEntry } from './resourcePoolExtractionTypes';

// ----- Config -----

const DRY_RUN = process.argv.includes('--dry-run');
const OUTPUT_PATH = path.join(__dirname, 'seed-data', 'class-feature-resource-pools.json');

// Core classes (CRB) + ACG hybrid classes + Gunslinger (explicitly required).
// Gunslinger is a Base class but is required by the acceptance criteria.
const TARGET_CLASS_NAMES = new Set([
  // Core
  'Barbarian',
  'Bard',
  'Cleric',
  'Druid',
  'Fighter',
  'Monk',
  'Paladin',
  'Ranger',
  'Rogue',
  'Sorcerer',
  'Wizard',
  // ACG Hybrid
  'Arcanist',
  'Bloodrager',
  'Brawler',
  'Hunter',
  'Investigator',
  'Shaman',
  'Skald',
  'Slayer',
  'Swashbuckler',
  'Warpriest',
  // Base — explicitly required by acceptance criteria
  'Gunslinger',
]);

// ----- Helpers -----

function classDocId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Build the per-class prompt for Claude.
 * Groups all features for one class into a single API call for efficiency.
 */
function buildExtractionPrompt(cls: ExpandedClassData): string {
  const classId = classDocId(cls.name);
  const featureLines = cls.classFeatures
    .map((f) => `  Feature: "${f.name}" (gained at level ${f.level})\n  Description: ${f.description}`)
    .join('\n\n');

  return `You are extracting structured resource pool definitions from Pathfinder 1e class features.

CLASS: ${cls.name} (classId: "${classId}")

Examine ONLY features that grant an expendable resource pool — a pool of points, rounds, or uses
that a character spends throughout an adventuring day. Examples: ki points, rage rounds per day,
bardic performance rounds, grit, panache, arcane reservoir points, channel energy uses.

Do NOT extract:
- Passive bonuses (e.g., "Trap Sense +1")
- Abilities that simply improve each level (e.g., "Sneak Attack +1d6")
- Feats or skill bonuses
- Spell slots (handled separately)
- At-will abilities

For each qualifying feature, return a JSON object with this exact shape:
{
  "featureName": "<exact name from the feature list below>",
  "resourcePool": {
    "id": "<snake_case pool identifier, e.g. rage_rounds, ki, channel_energy_uses>",
    "name": "<display name>",
    "rechargeOn": "rest" | "per_encounter" | "special",
    "maxFormula": "<FormulaService expression — see conventions below>",
    "restRecoveryMode": "full" | "formula",
    "restRecoveryFormula": "<only when restRecoveryMode is formula>",
    "specialRechargeNote": "<only when rechargeOn is special>"
  }
}

FormulaService variable naming conventions:
- Ability score modifiers: strMod, dexMod, conMod, intMod, wisMod, chaMod
- Class level: use ${classId}Level (e.g. barbarianLevel, bardLevel, monkLevel)
- Supported functions: floor(), ceil(), round(), abs(), max(), min()
- Operators: +, -, *, /

restRecoveryMode rules:
- "full": pool refills completely after rest (most pools)
- "formula": pool refills by a formula amount per rest (e.g. Arcanist — can fill up to 3 + half level per day, but max is higher)

rechargeOn rules:
- "rest": regained after 8-hour rest (most pools)
- "per_encounter": resets after each encounter
- "special": regained through specific in-game actions (grit on crit/kill, panache on crit/kill)

Return a JSON array. If no features qualify, return [].
Return ONLY valid JSON — no prose, no markdown fences.

CLASS FEATURES:
${featureLines}`;
}

// ----- Claude extraction -----

async function extractPoolsForClass(
  client: Anthropic,
  cls: ExpandedClassData,
): Promise<ClassFeatureResourcePoolEntry[]> {
  const classId = classDocId(cls.name);
  const prompt = buildExtractionPrompt(cls);

  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 2048,
    messages: [{ role: 'user', content: prompt }],
  });

  const raw = message.content[0];
  if (raw.type !== 'text') {
    console.warn(`  [${cls.name}] Unexpected response type: ${raw.type}`);
    return [];
  }

  let parsed: Array<{ featureName: string; resourcePool: ExtractedResourcePool }>;
  try {
    parsed = JSON.parse(raw.text.trim());
    if (!Array.isArray(parsed)) {
      console.warn(`  [${cls.name}] Response is not an array`);
      return [];
    }
  } catch (err) {
    console.warn(`  [${cls.name}] JSON parse error:`, err);
    console.warn('  Raw response:', raw.text.slice(0, 300));
    return [];
  }

  return parsed.map((item) => ({
    classId,
    className: cls.name,
    featureName: item.featureName,
    resourcePool: item.resourcePool,
  }));
}

// ----- Main -----

async function main(): Promise<void> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('ERROR: ANTHROPIC_API_KEY env var not set.');
    process.exit(1);
  }

  const client = new Anthropic({ apiKey });

  const allClasses = [...CORE_CLASSES_EXPANDED, ...HYBRID_CLASSES_EXPANDED, ...BASE_CLASSES_EXPANDED];
  const targetClasses = allClasses.filter((cls) => TARGET_CLASS_NAMES.has(cls.name));

  console.log(`Extracting resource pools for ${targetClasses.length} classes...`);

  const results: ClassFeatureResourcePoolEntry[] = [];

  for (const cls of targetClasses) {
    console.log(`  Processing: ${cls.name}`);
    if (DRY_RUN) {
      console.log('    [dry-run] skipping API call');
      continue;
    }
    const entries = await extractPoolsForClass(client, cls);
    console.log(`    Found ${entries.length} resource pool(s)`);
    results.push(...entries);
  }

  if (DRY_RUN) {
    console.log('\n[dry-run] No output written.');
    return;
  }

  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(results, null, 2) + '\n');
  console.log(`\nWrote ${results.length} entries to: ${OUTPUT_PATH}`);
  console.log('\nIMPORTANT: This output requires human review against PF1e rules before seeding.');
  console.log('Acceptance criteria: verify at minimum Barbarian, Cleric, Monk, Bard, Paladin,');
  console.log('Arcanist, Gunslinger, and Swashbuckler entries for correctness.');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
