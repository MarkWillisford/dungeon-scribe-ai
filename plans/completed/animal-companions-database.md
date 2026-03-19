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

**Primary source: Archives of Nethys — one page per companion (reliable)**

```
https://aonprd.com/DruidCompanions.aspx?ItemName={Name}&Category={Category}
```

Category options: `Animal`, `Monstrous`, `Plant`, `Vermin`

This mirrors the per-entry approach used for spells (each spell has its own d20pfsrd page).
AONPRD individual pages return clean, accurate data without truncation.

**Why not d20pfsrd?** d20pfsrd places ALL animal companions inline on a single enormous page
(`/classes/core-classes/druid/animal-companions/`). The WebFetch tool truncates this page
and synthesizes missing data, leading to errors. There are no individual subpages on d20pfsrd.

**Index / discovery:** `https://aonprd.com/DruidCompanions.aspx?ItemName=All&Category=Animal`
This returns the full companion list sorted alphabetically, including all types mixed together.

**d20pfsrd fallback:** If an AONPRD page fails, search for the entry by name within the
d20pfsrd index page as a last resort. Only use for stubs if both sources fail.

**Stop condition:** AONPRD only lists official Paizo content — no 3pp section to worry about.

---

## Agent Batch Plan

**Status as of 2026-03-16:** All 8 batches committed and pushed to `MW/animalcompanions-scraping`.
~220 entries total. Remaining work: fix 17 PAGE_FETCH_FAILED stubs (see stub fix list below).

**Agent prompt template:** `scripts/animal-companions/AGENT_PROMPT_TEMPLATE.md`

### Batch status

| Batch | Entries                                                 | Count | Status                        |
| ----- | ------------------------------------------------------- | ----- | ----------------------------- |
| 001   | Allosaurus – Bustard                                    | 25    | ✅ Done (1 stub: Bustard)     |
| 002   | Camel – Elasmotherium                                   | 25    | ✅ Done (3 stubs: see below)  |
| 003   | Elephant/Mastodon – Hippocampus                         | 24    | ✅ Done (0 stubs)             |
| 004   | Hippogriff – Megaloceros                                | 25    | ✅ Done (0 stubs)             |
| 005   | Megatherium – Quetzalcoatlus                            | 25    | ✅ Done (1 stub: Puma)        |
| 006   | Ram – Tortoise                                          | 21    | ✅ Done (4 stubs: see below)  |
| 007   | Trilobite Giant – Zebra (T–Z tail + Dire Rat/Dragonfly) | 22    | ✅ Done (12 stubs: see below) |
| 008   | Anglerfish – Dire Polar Bear (missed A–E)               | 25    | ✅ Done (0 stubs)             |

### Outstanding PAGE_FETCH_FAILED stubs (17 total)

These entries have placeholder data and need to be fixed by fetching their AONPRD page:

**Batch 001:**

- Bustard

**Batch 002:**

- Cattle, Deer (Ringhorn), Devil Monkey

**Batch 005:**

- Puma (AONPRD page is JS-rendered; try d20pfsrd or another source)

**Batch 006:**

- Seal, Sheep, Squirrel, Stag Beetle

**Batch 007 (all JS-rendered on AONPRD):**

- Trilobite (Giant), Trout, Tuatara (Giant), Turkey, Turtle, Uintaceratops,
  Unicorn, Ursine Charger, Viper (Giant), Whale Shark, Wombat (Giant),
  Woodpecker (Giant), Wyvern Skeletal

**Stub fix approach:** Fetch each entry's AONPRD page. If JS-rendered (no data), try
d20pfsrd inline page search, then Nethys wikis, then mark as permanently unresolvable.
Edit the specific batch file and replace the PAGE_FETCH_FAILED block with real data.

### Data quality note (batches 001–002)

Batches 001–002 were sourced from d20pfsrd's inline page. Some stats may be inaccurate
due to WebFetch truncation/synthesis. When data quality issues are found, fix them by
fetching the AONPRD individual page for that entry and correcting the values.

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

- [x] Create `src/types/animalCompanions.ts`
- [x] Batch 001: Allosaurus–Bustard (25 entries, d20pfsrd-sourced)
- [x] Batch 002: Camel–Elasmotherium (25 entries, d20pfsrd-sourced)
- [x] Create `src/data/animalCompanions/index.ts` (batches 001–002)
- [x] Write `scripts/db/seedAnimalCompanions.ts` (ready, not run)
- [x] Create `scripts/animal-companions/AGENT_PROMPT_TEMPLATE.md` (AONPRD-based)
- [x] Batch 003: Elephant/Mastodon–Hippocampus (AONPRD, 24 entries)
- [x] Batch 004: Hippogriff–Megaloceros (AONPRD, 25 entries)
- [x] Batch 005: Megatherium–Quetzalcoatlus (AONPRD, 25 entries)
- [x] Batch 006: Ram–Tortoise (AONPRD, 21 entries after dedup)
- [x] Batch 007: T–Z tail + Dire Rat/Dragonfly (22 entries, 12 stubs)
- [x] Batch 008: Missed A–E entries from AONPRD (25 entries, 0 stubs)
- [x] Update `src/data/animalCompanions/index.ts` with all 8 batches (~220 entries)
- [x] `npm run typecheck` — zero errors in data files
- [x] Commit and push `MW/animalcompanions-scraping`
- [ ] **Fix 17 PAGE_FETCH_FAILED stubs** (see stub list above)
- [ ] Final `npm run typecheck` — zero errors
- [ ] Seed staging Firestore: `npx tsx scripts/db/seedAnimalCompanions.ts --dry-run` then without flag
