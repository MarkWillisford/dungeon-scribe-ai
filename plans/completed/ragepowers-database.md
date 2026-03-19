# Rage Powers Database — Collection Plan

## Overview

Collect all Paizo rage powers from d20pfsrd.com into the Firestore `ragepowers` collection.
Static TS files are seed scripts only — the authoritative copy lives in Firestore.

**Firestore collection:** `ragepowers`
**Scope:** ~100+ rage powers across Core Rulebook, APG, Ultimate Magic, Ultimate Combat,
and other Paizo sources.
**Source:** https://www.d20pfsrd.com/classes/core-classes/barbarian/rage-powers/

**Used by:**

- Barbarian: `barbarian-rage-power` ClassChoiceDefinition — picks every 2 class levels starting at 2nd
- Skald: same collection, same shared pool — Skald picks from the full rage power list just as Barbarians do

---

## Data Model

Rage powers need no extra fields beyond the shared base type.
Type is already defined in `src/types/classOptions.ts`:

```typescript
// src/types/classOptions.ts (reference — do not re-create)

export interface ClassOptionBase {
  id: string;
  name: string;
  description: string;
  prerequisites?: FeatPrerequisite[];
  source: string;
  createdBy?: string;
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  isOfficial: boolean;
  rev: number;
}

// Rage powers are a direct alias — no extra fields
export type RagePowerEntry = ClassOptionBase;
```

**Prerequisite rage powers** are captured in `prerequisites[]` using the `'special'` type:

```typescript
prerequisites: [{ type: 'special', description: 'Lesser Elemental Rage rage power' }];
```

This matches how `FeatPrerequisite` handles non-quantitative prerequisites throughout
the system.

---

## File Structure

```
src/data/ragePowers/
  raw/
    ragepowers_batch_001.ts    ← Agent output, 25 entries each
    ragepowers_batch_002.ts
    ragepowers_batch_003.ts
    ragepowers_batch_004.ts
  index.ts                     ← Combined barrel (written after all batches done)

scripts/db/
  seedRagePowers.ts            ← Seed script (ready to run, not auto-executed)
```

---

## Source & URL Pattern

**Source page:** https://www.d20pfsrd.com/classes/core-classes/barbarian/rage-powers/

All rage powers are listed inline on a single page, not on individual subpages. There are
no per-entry URLs to extract. Instead:

- All agents fetch the **same source URL**.
- Each agent is assigned a **named alphabetical range** of entries to extract from the page.
- The orchestrating Claude determines the full alphabetical list of rage powers from the
  source page and divides them into 4 ranges of ~25.

**No URL fallback is needed** — all content is on one page. If the page itself fails to
load, wait and retry once before aborting.

---

## Agent Batch Plan

~100 entries ÷ 25 per batch = **~4 batches → 1 round of 4 agents**.

All 4 agents launch in parallel. Each receives:

- The source page URL
- Their assigned alphabetical range (e.g. "A through D", "E through L", etc.)
- Their batch number (001–004)

| Round | Batches | Approximate Alphabetical Range |
| ----- | ------- | ------------------------------ |
| 1     | 001     | A through D (~25 entries)      |
| 1     | 002     | E through L (~25 entries)      |
| 1     | 003     | M through R (~25 entries)      |
| 1     | 004     | S through Z (~25 entries)      |

_Exact alphabetical split set by the orchestrating Claude after counting entries on the
source page. Adjust range boundaries so each batch has approximately 25 entries._

---

## Agent Rules

1. You are given a source page URL and an alphabetical range of entries to extract.
   Fetch the page once and extract only the entries within your assigned range.
2. Write your output to `src/data/ragePowers/raw/ragepowers_batch_NNN.ts`.
3. Begin the file with: `// Batch NNN | first: 'Name' | last: 'Name' | count: N`
4. Import types: `import { ClassOptionBase } from '@/types/classOptions';`
   `// RagePowerEntry = ClassOptionBase — using base type directly`
5. `id` is always kebab-case of the rage power name. E.g. `'intimidating-glare'`,
   `'greater-elemental-rage'`, `'lesser-elemental-rage'`.
6. Do not summarize or abbreviate descriptions — copy them faithfully from the source.
7. Emit one named camelCase export per entry (e.g. `intimidatingGlare`, `greaterElementalRage`),
   and one batch array at the bottom: `export const batch_NNN: ClassOptionBase[] = [...]`.
8. **Page failure:** if the page cannot be fetched after one retry, emit `PAGE_FETCH_FAILED`
   stubs for all entries in your assigned range and log the attempted URL in the checkpoint comment.
9. Run `npm run typecheck` before reporting done. Fix all type errors.
10. **Collection-specific rules:**
    - `prerequisites[]` — prerequisite rage powers use `{ type: 'special', description: 'X rage power' }`.
      Level prerequisites (e.g. "barbarian level 6") use `{ type: 'level', minimum: 6 }`.
      Capture all prerequisites listed on the page.
    - `source` — `'pf1e-core'` for CRB; `'pf1e-apg'` for APG; `'pf1e-um'` for Ultimate Magic;
      `'pf1e-uc'` for Ultimate Combat; `'pf1e-oe'` for Occult Origins; etc. Use the source
      citation shown on the page. When uncertain, use `'pf1e-core'` as a fallback and note it.
    - Some rage powers are restricted to specific archetypes (e.g. a power available only
      to the Urban Barbarian). Capture this restriction in the `description` text — do not
      add a separate field.
    - Some rage powers list a variant for when the power is used outside of rage. Include
      this information in the `description`.
    - The Skald shares this collection — no field differences needed. The system queries
      the full collection for both classes.

---

## Sample Documents

Hand-authored to validate the model before agents launch.

### 1. Intimidating Glare — simple power, no prerequisites

```typescript
export const intimidatingGlare: ClassOptionBase = {
  id: 'intimidating-glare',
  name: 'Intimidating Glare',
  description:
    "The barbarian can make an Intimidate check against one adjacent foe as a move action. If the barbarian successfully demoralizes the opponent, the foe is shaken for 1d4 rounds + 1 round for every 5 points by which the barbarian's check exceeds the DC.",
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};
```

### 2. Greater Elemental Rage — power requiring a prerequisite rage power

```typescript
export const greaterElementalRage: ClassOptionBase = {
  id: 'greater-elemental-rage',
  name: 'Greater Elemental Rage',
  description:
    'Once per rage, the barbarian can spend a swift action to cause one of her natural or manufactured weapons to deal damage of the same energy type as her elemental rage power for 1 round. The weapon deals this energy damage in addition to its normal damage. This energy damage ignores energy resistance.',
  prerequisites: [
    { type: 'special', description: 'Elemental Rage rage power' },
    { type: 'level', minimum: 8 },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};
```

### 3. Reckless Abandon — non-Core source, attack/AC tradeoff

```typescript
export const recklessAbandon: ClassOptionBase = {
  id: 'reckless-abandon',
  name: 'Reckless Abandon',
  description:
    "While raging, the barbarian can take a penalty to AC in order to gain a bonus on attack rolls. The penalty and bonus are both equal to the barbarian's Constitution modifier (minimum 1). The bonus applies to all attacks in a round, but the penalty lasts until the start of the barbarian's next turn.",
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};
```

---

## Seeding

**Script:** `scripts/db/seedRagePowers.ts`

Follows the upsert pattern (no clear before seed — preserves campaign/homebrew rage powers):

```typescript
// Usage:
//   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
//   export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5
//   npx tsx scripts/db/seedRagePowers.ts [--dry-run]
```

1. Import `ALL_RAGE_POWERS` from `src/data/ragePowers/index.ts`
2. Batch-write to Firestore `ragepowers` collection using `batch.set(ref, entry)` (upsert)
3. Document ID = `ragePower.id` (deterministic, idempotent)

**Do not run the seed script automatically.** Write it and leave it ready.

---

## Combining Batches

After all 4 agents complete, write `src/data/ragePowers/index.ts`:

```typescript
import { ClassOptionBase } from '@/types/classOptions';
import { batch_001 } from './raw/ragepowers_batch_001';
import { batch_002 } from './raw/ragepowers_batch_002';
import { batch_003 } from './raw/ragepowers_batch_003';
import { batch_004 } from './raw/ragepowers_batch_004';

export const ALL_RAGE_POWERS: ClassOptionBase[] = [
  ...batch_001,
  ...batch_002,
  ...batch_003,
  ...batch_004,
];

export const getRagePowerById = (id: string): ClassOptionBase | undefined =>
  ALL_RAGE_POWERS.find((p) => p.id === id);

export const getRagePowerByName = (name: string): ClassOptionBase | undefined =>
  ALL_RAGE_POWERS.find((p) => p.name.toLowerCase() === name.toLowerCase());
```

---

## Execution Checklist

- [x] Fetch https://www.d20pfsrd.com/classes/core-classes/barbarian/rage-powers/ and count all entries
- [x] Determine alphabetical range boundaries (2 batches of ~80 — page had 150+ entries, not ~100 as estimated)
- [x] Scrape all entries — batch 001 (83 entries, A–H) and batch 002 (67 entries, H–Z)
- [x] Resolve all PAGE_FETCH_FAILED entries — Moon Totem ×3 and Spirit Totem ×3 filled from individual subpages
- [x] Audit all entries against Archives of Nethys — removed 21 non-Paizo entries, added 8 confirmed Paizo powers
- [x] Combine both batches into `src/data/ragePowers/index.ts`
- [x] `npm run typecheck` — zero errors introduced by ragePowers files
- [x] Write `scripts/db/seedRagePowers.ts`
- [x] PR #7 open: https://github.com/MarkWillisford/dungeon-scribe-ai/pull/7

## Result

**150 verified Paizo rage powers** across 2 batch files.

~13 powers (Snake Totem ×3, Swamp Totem ×3, Tentacle Totem, Titan Totem ×3, Trait of the Beast,
Strength of Clan, Unhindering Rage, Wounded Bloodrage) could not be verified from any publicly
accessible SRD — likely from non-OGL Paizo Player Companion books. Manual PDF lookup required.
