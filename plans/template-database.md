# Template Database — Collection Plan

## Overview

Collect all ~540 templates from d20pfsrd.com into a Firestore `templates` collection. Includes official Pathfinder content, third-party (3pp) content, and converted 3.5e templates. Static TS files are seed scripts only — the authoritative copy lives in Firestore.

## Source

**Index page:** https://www.d20pfsrd.com/bestiary/monster-listings/templates/

The index is a single flat alphabetical list of ~540 entries. Third-party entries are marked with `[3pp]` inline in the link text. There are no sub-categories on this page — it is purely alphabetical.

---

## Collection Strategy

### Phase 1 — Pre-fetch Index

Before launching any agents, Claude fetches the index page and extracts the full URL list (~540 entries). This list is divided into numbered chunks of **25 templates each** (~22 batches total), pre-assigned to agents. Agents never need to figure out where to resume — each gets a fixed URL list.

### Phase 2 — Parallel Agent Rounds

Run **4–5 agents in parallel per round**, each with a pre-assigned batch. Each agent:

1. Receives a numbered list of 25 template URLs
2. Scrapes each page in order
3. Writes `src/data/templates/raw/templates_batch_NNN.ts`
4. Includes a checkpoint header comment (see format below)

With 4–5 agents per round and ~22 batches, this completes in **4–6 rounds**.

### Phase 3 — Combine

Once all batch files are written, Claude combines them into:

- `src/data/templates/index.ts` — barrel export with `ALL_TEMPLATES` array + helpers
- `scripts/db/seedTemplates.ts` — seed script (ready to run, not auto-executed)

### Checkpoint Header Format

Every batch file begins with:

```typescript
// Batch NNN | first: 'Template Name' | last: 'Template Name' | count: 25
```

This lets Claude verify coverage and resume from any point if a batch fails.

---

## File Structure

```
src/data/templates/
  types.ts                    ← TemplateDefinition + all sub-types (write first)
  raw/
    templates_batch_001.ts    ← Agent output, 25 templates each
    templates_batch_002.ts
    ...
    templates_batch_NNN.ts
  index.ts                    ← Combined barrel (written after all batches done)

scripts/db/
  seedTemplates.ts            ← Seed script (ready to run, not auto-executed)
```

---

## Data Model

### `src/data/templates/types.ts`

```typescript
import { TemplateFeature } from '@/types/templates';

// Provenance — discriminated union replaces overlapping boolean fields
export type TemplateSourceInfo =
  | { type: 'official'; publication: string }
  | { type: 'third_party'; publisher: string; publication: string }
  | { type: 'converted'; originalSystem: string; publication: string }
  | { type: 'homebrew'; createdBy: string; campaignId?: string }
  | { type: 'campaign'; campaignId: string; createdBy?: string };

export type TemplatePrerequisite =
  | { type: 'alignment'; allowed: string[] }
  | { type: 'creature_type'; allowed: string[] }
  | { type: 'creature_type_excluded'; excluded: string[] }
  | { type: 'min_hd'; minimum: number }
  | { type: 'max_hd'; maximum: number }
  | { type: 'subtype'; required: string[] }
  | { type: 'special'; description: string };

export interface AbilityScoreChange {
  ability: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';
  change: number; // always a delta, never a final value
  minimum?: number; // ability cannot go below this value
  condition?: string; // e.g. 'only if base score is —'
}

export type TemplateDR =
  | { scalingType: 'flat'; value: number; bypassedBy: string }
  | {
      scalingType: 'hd_tiered';
      tiers: Array<{ minHD: number; maxHD?: number; value: number; bypassedBy: string }>;
    };

export interface TemplateResistance {
  energyType: 'fire' | 'cold' | 'electricity' | 'acid' | 'sonic' | string;
  value: number | 'immunity';
}

// frequency is intentionally an open string — NOT a closed union.
// Common patterns: 'at_will', '3/day', 'constant', '1/day'
// But expressions like '3+Cha mod/day' are valid and must not be rejected.
export interface TemplateSLA {
  spellName: string;
  frequency: string;
  casterLevelFormula: string; // e.g. 'equal to HD', '15'
  dcAbility?: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';
  dcBase?: number;
  condition?: string;
}

// Used only for HD-tiered CR templates (e.g. Druid Creature).
// Never combined with crAdjustment on the same TemplateDefinition.
export interface CRTierDefinition {
  tierIndex: number; // 0-based; matches AppliedTemplate.paidTiers[]
  minHD: number;
  maxHD?: number; // omit for the open-ended final tier
  crValue: number;
  label?: string; // e.g. '1–5 HD', '21+ HD'
  features: TemplateFeature[]; // imported from @/types/templates — not redefined
}

export interface TemplateDefinition {
  id: string; // kebab-case: 'half-dragon', 'druid-creature'
  name: string;
  description: string;

  // ECL cost — use crAdjustment OR crTiers, never both
  crAdjustment?: number;
  laAdjustment?: number;
  crTiers?: CRTierDefinition[];

  // Two orthogonal classification fields
  acquisitionType: 'inherited' | 'acquired' | 'either';
  isSimpleTemplate: boolean;

  prerequisites?: TemplatePrerequisite[];

  // Type / subtype changes
  typeChange?: string;
  typeChangeNote?: string;
  subtypeGains?: string[];
  subtypeRemoves?: string[];
  sizeChange?: number; // steps: positive = larger, negative = smaller

  // Ability scores — always deltas
  abilityScoreChanges?: AbilityScoreChange[];
  abilityScoreChangeNote?: string;

  // Defenses
  naturalArmorChange?: number;
  damageReduction?: TemplateDR;
  resistances?: TemplateResistance[];
  immunities?: string[]; // non-energy immunities: ['poison', 'petrification']
  fastHealing?: string; // formula string, e.g. '5' or 'equal to HD'
  regeneration?: string; // formula + bypassed-by, e.g. '5 (cold iron or evil)'
  srFormula?: string; // e.g. 'HD + 11'

  // Features — imported type, not redefined
  features: TemplateFeature[];
  spellLikeAbilities?: TemplateSLA[];

  // Provenance
  sourceInfo: TemplateSourceInfo;
  visibility: 'global' | 'campaign' | 'private';
  rev: number;
}
```

---

## Agent Rules

Every scraping agent must follow these rules:

1. You are given a pre-assigned list of 25 template URLs. Scrape only those URLs, in order.
2. Write your output to `src/data/templates/raw/templates_batch_NNN.ts` where NNN is your batch number.
3. Begin the file with the checkpoint comment: `// Batch NNN | first: 'Name' | last: 'Name' | count: N`
4. `[3pp]` in the link text (from the index) means `sourceInfo: { type: 'third_party', ... }`. Extract the publisher name from the template page — never guess it.
5. `id` is the template name in kebab-case: `'half-dragon'`, `'celestial-blessed-creature'`.
6. Ability score changes are always **deltas** (e.g. `+4`, `–2`), never final values.
7. `crAdjustment` and `crTiers` are mutually exclusive. Never populate both.
8. `features` uses `TemplateFeature` from `@/types/templates` — never redefine it.
9. `frequency` on SLAs is an open string — write exactly what the source says.
10. If a template has no CR or LA cost, omit both fields entirely (do not write `crAdjustment: 0`).
11. If a field is absent or genuinely unknown, omit it — do not write `undefined` or `null`.
12. Every entry gets `rev: 1` and `visibility: 'global'`.
13. Do not summarize or abbreviate feature descriptions — copy them faithfully.
14. Emit one named export per template: `export const halfDragon: TemplateDefinition = { ... }`.
15. Also emit a default array export at the bottom: `export const batch_NNN = [halfDragon, ...]`.
16. If you cannot fetch a page (404, timeout, etc.), emit a stub with `description: 'PAGE_FETCH_FAILED'` and `features: []` so the batch file still compiles. Log the failed URL in the checkpoint comment.
17. Run `npm run typecheck` before reporting done. Fix all errors.

---

## Sample Documents

Four hand-authored templates to validate the model type-checks before agents launch.

### 1. Druid Creature (converted 3.5e)

HD-tiered CR template — canonical example of `crTiers`.

```typescript
export const druidCreature: TemplateDefinition = {
  id: 'druid-creature',
  name: 'Druid Creature',
  description:
    'A druid creature is an animal, magical beast, or plant creature that has been mystically bonded to a druid of great power, granting it enhanced abilities and a measure of divine magic.',
  acquisitionType: 'acquired',
  isSimpleTemplate: false,
  prerequisites: [{ type: 'creature_type', allowed: ['animal', 'magical beast', 'plant'] }],
  crTiers: [
    { tierIndex: 0, minHD: 1, maxHD: 5, crValue: 1, label: '1–5 HD', features: [] },
    { tierIndex: 1, minHD: 6, maxHD: 10, crValue: 2, label: '6–10 HD', features: [] },
    { tierIndex: 2, minHD: 11, maxHD: 15, crValue: 3, label: '11–15 HD', features: [] },
    { tierIndex: 3, minHD: 16, maxHD: 20, crValue: 4, label: '16–20 HD', features: [] },
    { tierIndex: 4, minHD: 21, crValue: 5, label: '21+ HD', features: [] },
  ],
  abilityScoreChanges: [
    { ability: 'INT', change: 2 },
    { ability: 'WIS', change: 2 },
  ],
  features: [
    {
      featureType: 'flat',
      name: 'Druidic Bond',
      description:
        'The druid creature shares a telepathic bond with its bonded druid at all times, regardless of distance or planar boundaries.',
    },
    {
      featureType: 'flat',
      name: 'Woodland Stride',
      description:
        'The druid creature can move through natural difficult terrain at its normal speed.',
    },
  ],
  sourceInfo: {
    type: 'converted',
    originalSystem: '3.5e',
    publication: 'Masters of the Wild',
  },
  visibility: 'global',
  rev: 1,
};
```

### 2. Advanced (official)

Simple inherited template — most commonly applied template in the game.

```typescript
export const advanced: TemplateDefinition = {
  id: 'advanced',
  name: 'Advanced',
  description:
    'Creatures with the advanced template are fiercer and more powerful than their ordinary cousins.',
  acquisitionType: 'inherited',
  isSimpleTemplate: true,
  crAdjustment: 1,
  abilityScoreChanges: [
    { ability: 'STR', change: 4 },
    { ability: 'DEX', change: 4 },
    { ability: 'CON', change: 4 },
    { ability: 'INT', change: 4 },
    { ability: 'WIS', change: 4 },
    { ability: 'CHA', change: 4 },
  ],
  naturalArmorChange: 2,
  features: [
    {
      featureType: 'flat',
      name: 'Ability Score Bonus',
      description:
        '+4 bonus to all ability scores. If the creature lacks a Constitution score, it does not gain a bonus to Constitution.',
    },
    {
      featureType: 'flat',
      name: 'Natural Armor',
      description: '+2 bonus to natural armor.',
    },
    {
      featureType: 'flat',
      name: 'Attack and Save Bonuses',
      description: '+2 bonus on attack rolls, saving throws, skill checks, and CMB/CMD.',
    },
  ],
  sourceInfo: {
    type: 'official',
    publication: 'Pathfinder Bestiary',
  },
  visibility: 'global',
  rev: 1,
};
```

### 3. Celestial-Blessed Creature (official)

Acquired template with subtypes and SLAs.

```typescript
export const celestialBlessedCreature: TemplateDefinition = {
  id: 'celestial-blessed-creature',
  name: 'Celestial-Blessed Creature',
  description:
    'A celestial-blessed creature has been touched by the divine power of a good-aligned celestial being, granting it a measure of heavenly power.',
  acquisitionType: 'acquired',
  isSimpleTemplate: false,
  prerequisites: [
    { type: 'alignment', allowed: ['LG', 'NG', 'CG', 'LN', 'N', 'CN'] },
    { type: 'creature_type_excluded', excluded: ['outsider'] },
  ],
  crAdjustment: 1,
  subtypeGains: ['good'],
  abilityScoreChanges: [
    { ability: 'WIS', change: 2 },
    { ability: 'CHA', change: 2 },
  ],
  resistances: [
    { energyType: 'fire', value: 10 },
    { energyType: 'electricity', value: 10 },
    { energyType: 'cold', value: 10 },
  ],
  damageReduction: { scalingType: 'flat', value: 5, bypassedBy: 'evil' },
  srFormula: 'HD + 5',
  spellLikeAbilities: [
    {
      spellName: 'aid',
      frequency: '3/day',
      casterLevelFormula: 'equal to HD',
    },
    {
      spellName: 'bless',
      frequency: '3/day',
      casterLevelFormula: 'equal to HD',
    },
    {
      spellName: 'holy smite',
      frequency: '1/day',
      casterLevelFormula: 'equal to HD',
      dcAbility: 'CHA',
      dcBase: 14,
    },
  ],
  features: [
    {
      featureType: 'flat',
      name: 'Celestial Aura',
      description:
        'The creature radiates a gentle golden light in a 10-foot radius. Evil creatures that enter this aura must succeed at a Will save (DC 10 + 1/2 HD + Cha modifier) or be shaken for 1 round.',
    },
    {
      featureType: 'flat',
      name: 'Smite Evil',
      description:
        'Once per day as a swift action the creature can smite evil. It adds its Charisma modifier to attack rolls and its HD to damage rolls against evil creatures.',
    },
  ],
  sourceInfo: {
    type: 'official',
    publication: 'Pathfinder Bestiary',
  },
  visibility: 'global',
  rev: 1,
};
```

### 4. Saint (official)

Acquired template with regeneration, immunities, and extended SLA list.

```typescript
export const saint: TemplateDefinition = {
  id: 'saint',
  name: 'Saint',
  description:
    'A saint is a mortal who has been elevated to a state of divine grace, granted extraordinary powers by a good deity as a reward for a life of exceptional virtue and service.',
  acquisitionType: 'acquired',
  isSimpleTemplate: false,
  prerequisites: [
    { type: 'alignment', allowed: ['LG', 'NG', 'CG'] },
    { type: 'creature_type', allowed: ['humanoid', 'monstrous humanoid'] },
  ],
  crAdjustment: 3,
  laAdjustment: 3,
  subtypeGains: ['good', 'extraplanar'],
  abilityScoreChanges: [
    { ability: 'STR', change: 4 },
    { ability: 'WIS', change: 6 },
    { ability: 'CHA', change: 8 },
  ],
  naturalArmorChange: 4,
  damageReduction: { scalingType: 'flat', value: 10, bypassedBy: 'evil' },
  resistances: [
    { energyType: 'fire', value: 'immunity' },
    { energyType: 'electricity', value: 10 },
    { energyType: 'cold', value: 10 },
  ],
  immunities: ['disease', 'poison'],
  regeneration: '10 (evil weapons or effects)',
  srFormula: 'HD + 15',
  spellLikeAbilities: [
    { spellName: 'bless', frequency: 'constant', casterLevelFormula: 'equal to HD' },
    { spellName: 'detect evil', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
    { spellName: 'holy aura', frequency: 'at_will', casterLevelFormula: 'equal to HD' },
    { spellName: 'cure serious wounds', frequency: '3/day', casterLevelFormula: 'equal to HD' },
    {
      spellName: 'flame strike',
      frequency: '3/day',
      casterLevelFormula: 'equal to HD',
      dcAbility: 'WIS',
      dcBase: 15,
    },
    {
      spellName: 'holy word',
      frequency: '1/day',
      casterLevelFormula: 'equal to HD',
      dcAbility: 'WIS',
      dcBase: 17,
    },
    { spellName: 'raise dead', frequency: '1/day', casterLevelFormula: 'equal to HD' },
  ],
  features: [
    {
      featureType: 'flat',
      name: 'Divine Grace',
      description: 'The saint adds its Charisma modifier (if positive) to all saving throws.',
    },
    {
      featureType: 'flat',
      name: 'Holy Champion',
      description:
        'All weapons wielded by the saint are treated as good-aligned and magical for purposes of overcoming damage reduction.',
    },
    {
      featureType: 'flat',
      name: 'Lay on Hands',
      description:
        'The saint can heal wounds by touch. Each day it can heal a total of HD × Cha modifier hit points. Each use heals one target as a standard action.',
    },
    {
      featureType: 'flat',
      name: 'Aura of Courage',
      description:
        'The saint is immune to fear. Each ally within 10 feet gains a +4 morale bonus on saving throws against fear effects.',
    },
  ],
  sourceInfo: {
    type: 'official',
    publication: 'Pathfinder Bestiary 2',
  },
  visibility: 'global',
  rev: 1,
};
```

---

## Seeding

`scripts/db/seedTemplates.ts` — follows the same pattern as `seedSpells.ts`:

1. Import `ALL_TEMPLATES` from `src/data/templates/index.ts`
2. Batch-write to Firestore `templates` collection
3. Document ID = `template.id` (deterministic, idempotent)
4. Run with: `npx ts-node scripts/db/seedTemplates.ts`

**Do not run the seed script automatically.** Write it and leave it ready.

---

## Execution Checklist

- [ ] Write `src/data/templates/types.ts`
- [ ] Hand-author 4 sample docs, verify `npm run typecheck` passes
- [ ] Fetch index page, extract full URL list, divide into 25-entry batches
- [ ] Round 1: launch 4–5 agents in parallel (batches 001–005)
- [ ] Round 2: launch next 4–5 agents (batches 006–010)
- [ ] ... repeat until all batches done (~22 batches total, ~5 rounds)
- [ ] Combine all `raw/templates_batch_NNN.ts` into `src/data/templates/index.ts`
- [ ] Write `scripts/db/seedTemplates.ts`
- [ ] Final `npm run typecheck` — zero errors
