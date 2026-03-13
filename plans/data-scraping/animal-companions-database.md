# Animal Companions Database — Collection Plan

## Overview

Collect all official Paizo animal companions from d20pfsrd.com into the Firestore
`animalcompanions` collection. Static TS files are seed scripts only — the authoritative
copy lives in Firestore.

**Firestore collection:** `animalcompanions`
**Scope:** ~200 entries — Standard Animals, Aberrations, Accursed, Magical Beasts, Plants,
and Vermin. Official Pathfinder only. **Skip the 3rd-party section entirely** — it is
clearly labeled on the source page; stop when you reach it.
**Source:** https://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/

**Used by:**

- Druid Nature Bond: when player selects `animal_companion` as their nature bond type,
  the UI launches the Animal Companion builder which queries this collection.
- Ranger Hunter's Bond: same builder when player selects `animal_companion`.
- Animal Companion builder UI (Phase 3e — not yet built, data can be seeded now).

**DM additions:** Companions from 3.5e or homebrew (e.g. Fleshraker) use
`visibility: 'campaign'` and are added by the DM, not seeded here. The same
`AnimalCompanionEntry` type is used for all tiers of content.

---

## Data Model

New file: `src/types/animalCompanions.ts`

```typescript
// src/types/animalCompanions.ts

export interface AnimalCompanionProgressionTier {
  atDruidLevel: 4 | 7; // druid/ranger level when this tier activates
  sizeChange?: string; // e.g. 'Medium to Large' — omit if no size change
  abilityScoreChanges: {
    ability: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';
    change: number; // always a delta from the previous tier — never a final value
  }[];
  naturalArmorChange?: number; // delta from previous tier; omit if unchanged
  attackUpdate?: string; // updated attack string if dice change — e.g. 'bite (1d8)'
  specialQualitiesGained?: string[]; // new SQs that activate at this tier
}

export interface AnimalCompanionEntry {
  id: string; // kebab-case: 'wolf', 'leopard', 'giant-eagle', 'giant-mantis'
  name: string;
  companionType: 'animal' | 'magical beast' | 'plant' | 'vermin' | 'aberration' | 'accursed';

  // Starting statistics (before any druid-level progression)
  size: string; // 'Tiny' | 'Small' | 'Medium' | 'Large' | 'Huge'
  speed: string; // e.g. '50 ft.' or '30 ft., climb 20 ft., swim 20 ft.'
  naturalArmor: number; // starting natural armor bonus
  attacks: string; // e.g. 'bite (1d6)' or 'bite (1d6), 2 claws (1d4)'
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  specialQualities: string[]; // e.g. ['low-light vision', 'scent', 'darkvision 60 ft.']

  progressionTiers: AnimalCompanionProgressionTier[]; // [] if no progression

  // ContentMetadata
  source: string;
  isOfficial: boolean;
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  createdBy?: string;
  rev: number;
}
```

**Key notes:**

- `abilityScoreChanges` at each tier are **deltas from the previous tier** (or from starting
  stats for the first tier). Never write the final absolute value. E.g., if the wolf goes from
  STR 13 (base) to STR 15 at 4th, and to STR 19 at 7th, write `change: 2` for 4th and
  `change: 4` for 7th — not the cumulative total.
- When a size increase occurs at a tier, weapon attack dice typically increase by one die size.
  Capture the updated attack string in `attackUpdate` only if the dice change.
- `progressionTiers` is `[]` (empty array) for companions with no scaling progression.
- `int` for most animal companions is `—` (non-intelligent). Use `0` for these in the TypeScript
  object to avoid `undefined`; agents should note this in a comment.
- Vermin companions have `INT: —` (mindless). Use `0`.

---

## File Structure

```
src/data/animalCompanions/
  raw/
    animalcompanions_batch_001.ts    ← Agent output, 25 entries each
    animalcompanions_batch_002.ts
    ...
    animalcompanions_batch_008.ts
  index.ts                           ← Combined barrel (written after all batches done)

scripts/db/
  seedAnimalCompanions.ts            ← Seed script (ready to run, not auto-executed)
```

---

## Source & URL Pattern

**Index page:** https://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/

All companion entries may be listed inline on the index page (with anchor links) or may
link to individual subpages. Check the index page structure before dividing batches:

- If entries are **inline**: all agents fetch the same source page URL. Each agent is
  assigned a named range of entries (alphabetical or by type section) and extracts only
  those entries from the full page.
- If entries **link to subpages**: treat each subpage URL as an individual entry URL, same
  as the domains pattern. The orchestrating Claude determines this at run time.

**Stop condition:** The d20pfsrd page clearly separates official Paizo content from
3rd-party content. When agents encounter the 3rd-party section heading, they stop and
note the boundary in the checkpoint comment.

**Fallback URL construction:** For inline pages, no URL fallback is needed — all entries are
on the same page. If a subpage link fails, try constructing the URL from the companion name
using kebab-case slug: `https://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/{slug}/`.

---

## Agent Batch Plan

~200 entries ÷ 25 per batch = **~8 batches → 2 rounds of 4 agents**.

| Round | Batches | Approximate Content                                                              |
| ----- | ------- | -------------------------------------------------------------------------------- |
| 1     | 001–004 | Standard Animals A–L (~100 entries)                                              |
| 2     | 005–008 | Standard Animals M–Z + Aberrations + Accursed + Magical Beasts + Plants + Vermin |

_If total count is lower (closer to 120–150), adjust to fewer batches. Exact batch boundaries
set by the orchestrating Claude after fetching the index page and counting entries._

---

## Agent Rules

1. You are given a pre-assigned list of 25 entries (by URL or by named range on a single page).
   Work through them in order.
2. Write your output to `src/data/animalCompanions/raw/animalcompanions_batch_NNN.ts`.
3. Begin the file with: `// Batch NNN | first: 'Name' | last: 'Name' | count: N`
4. Import types: `import { AnimalCompanionEntry } from '@/types/animalCompanions';`
5. `id` is always kebab-case of the companion name. E.g. `'wolf'`, `'giant-eagle'`,
   `'ankylosaurus'`, `'giant-mantis'`.
6. Do not summarize or abbreviate special quality descriptions — copy them faithfully.
7. Emit one named camelCase export per entry (e.g. `wolf`, `giantEagle`), and one batch
   array at the bottom: `export const batch_NNN: AnimalCompanionEntry[] = [...]`.
8. **URL / page failures:** if a subpage URL fails, attempt the kebab-case slug fallback.
   Only emit a `PAGE_FETCH_FAILED` stub if both attempts fail. Log the entry name and both
   attempted URLs in the checkpoint comment.
9. Run `npm run typecheck` before reporting done. Fix all type errors.
10. **Collection-specific rules:**
    - `int: 0` for non-intelligent companions (all standard animals, vermin). Add a comment
      `// INT: — (non-intelligent)` on that line.
    - `abilityScoreChanges` entries at each tier are **deltas from the previous tier**,
      not cumulative totals from the starting stats block.
    - `sizeChange` — write as `'Small to Medium'`, `'Medium to Large'`, etc. Omit if no
      size change occurs at that tier.
    - `attackUpdate` — include only if the attack dice change at this tier (typically due
      to size increase). Copy the full updated attack string as shown on the source.
    - `companionType` — use `'animal'` for standard animals; `'magical beast'` for magical
      beasts; `'plant'` for plant companions; `'vermin'` for vermin; `'aberration'` for
      aberrations; `'accursed'` for accursed companions.
    - `source` — `'pf1e-core'` for CRB companions; `'pf1e-apg'` for APG; `'pf1e-uc'` for
      Ultimate Combat; etc. Use the page's source citation.
    - **Stop at the 3rd-party section.** Do not scrape any 3pp content. Note the last
      official entry and the stop point in the checkpoint comment.

---

## Sample Documents

Hand-authored to validate the model before agents launch.

### 1. Wolf — standard Medium animal, simple two-tier progression

```typescript
export const wolf: AnimalCompanionEntry = {
  id: 'wolf',
  name: 'Wolf',
  companionType: 'animal',
  size: 'Medium',
  speed: '50 ft.',
  naturalArmor: 2,
  attacks: 'bite (1d6)',
  str: 13,
  dex: 15,
  con: 15,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 6,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'CON', change: 2 },
      ],
      naturalArmorChange: 2,
    },
    {
      atDruidLevel: 7,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 4 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'bite (1d8)',
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};
```

### 2. Bear — size change at 4th level, two progression tiers

```typescript
export const bear: AnimalCompanionEntry = {
  id: 'bear',
  name: 'Bear',
  companionType: 'animal',
  size: 'Small',
  speed: '40 ft.',
  naturalArmor: 1,
  attacks: '2 claws (1d3), bite (1d4)',
  str: 15,
  dex: 13,
  con: 15,
  int: 0, // INT: — (non-intelligent)
  wis: 12,
  cha: 6,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      sizeChange: 'Small to Medium',
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'CON', change: 2 },
      ],
      naturalArmorChange: 2,
    },
    {
      atDruidLevel: 7,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 8 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 2,
      attackUpdate: '2 claws (1d6), bite (1d6)',
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};
```

### 3. Giant Mantis — Vermin companion (non-standard type)

```typescript
export const giantMantis: AnimalCompanionEntry = {
  id: 'giant-mantis',
  name: 'Giant Mantis',
  companionType: 'vermin',
  size: 'Medium',
  speed: '30 ft., climb 30 ft., fly 40 ft. (poor)',
  naturalArmor: 4,
  attacks: '2 claws (1d4), bite (1d6)',
  str: 15,
  dex: 15,
  con: 12,
  int: 0, // INT: — (mindless vermin)
  wis: 12,
  cha: 6,
  specialQualities: ['darkvision 60 ft.'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      abilityScoreChanges: [
        { ability: 'STR', change: 2 },
        { ability: 'CON', change: 2 },
      ],
      naturalArmorChange: 2,
    },
    {
      atDruidLevel: 7,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 4 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 2 },
      ],
      naturalArmorChange: 2,
      attackUpdate: '2 claws (1d6), bite (1d8)',
    },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};
```

---

## Seeding

**Script:** `scripts/db/seedAnimalCompanions.ts`

Follows the upsert pattern (no clear before seed — preserves campaign/homebrew companions
like DM-added 3.5e creatures):

```typescript
// Usage:
//   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
//   export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5
//   npx tsx scripts/db/seedAnimalCompanions.ts [--dry-run]
```

1. Import `ALL_ANIMAL_COMPANIONS` from `src/data/animalCompanions/index.ts`
2. Batch-write to Firestore `animalcompanions` collection using `batch.set(ref, entry)` (upsert)
3. Document ID = `companion.id` (deterministic, idempotent)

**Do not run the seed script automatically.** Write it and leave it ready.

---

## Execution Checklist

- [ ] Fetch https://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/ to determine
      whether entries are inline or subpages; count total official entries
- [ ] Divide into batches of 25; assign batch numbers; identify 3pp section boundary
- [ ] Round 1: launch 4 background agents (batches 001–004)
- [ ] Round 2: launch 4 background agents (batches 005–008)
- [ ] Combine all `raw/animalcompanions_batch_NNN.ts` into `src/data/animalCompanions/index.ts`
- [ ] `npm run typecheck` — zero errors
- [ ] Write `scripts/db/seedAnimalCompanions.ts`
- [ ] Final `npm run typecheck` — zero errors
