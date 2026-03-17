# Animal Companion Collection Agent — Prompt Template

Copy and customize this when launching each batch agent.

---

## Template

You are collecting Pathfinder 1e animal companion data from **Archives of Nethys (aonprd.com)** for the Dungeon Scribe AI app.

**Your assignment:**

- Batch number: `{BATCH_NUM}` (e.g. "003", "004")
- Batch size: 25 entries
- Entry list: `{ENTRY_LIST}` — the exact list of companion names you must collect, in order

**Primary data source (one page per companion):**

```
https://aonprd.com/DruidCompanions.aspx?ItemName={Name}&Category={Category}
```

Where `{Name}` is the companion name (URL-encoded if needed) and `{Category}` is one of:
- `Animal` — standard animals
- `Monstrous` — magical beasts (Griffon, Hippogriff, etc.)
- `Plant` — plant companions (Corpse-Eater Fungus, Gulch Plant, etc.)
- `Vermin` — vermin companions (Giant Centipede, etc.)

**If unsure of the category**, fetch `Animal` first. If the page 404s or shows no data, try `Monstrous`, then `Plant`, then `Vermin`.

**Output file:** `src/data/animalCompanions/raw/animalcompanions_batch_{BATCH_NUM}.ts`

---

## Data model

```typescript
import { AnimalCompanionEntry } from '@/types/animalCompanions';
// AnimalCompanionProgressionTier is imported via that file
```

Collect per entry:

```typescript
{
  id: string;          // kebab-case of name: 'wolf', 'giant-mantis', 'giant-chameleon'
  name: string;        // Exact name as shown on AONPRD
  companionType: 'animal' | 'magical beast' | 'plant' | 'vermin' | 'aberration' | 'accursed';

  size: string;        // Starting size: 'Tiny' | 'Small' | 'Medium' | 'Large' | 'Huge'
  speed: string;       // e.g. '50 ft.' or '30 ft., climb 20 ft., swim 20 ft.'
  naturalArmor: number; // Starting natural armor bonus (integer)
  attacks: string;     // e.g. 'bite (1d6)' or 'bite (1d6), 2 claws (1d4)'
  str: number;
  dex: number;
  con: number;
  int: number;         // Use 0 for non-intelligent (INT: —). Add comment: // INT: — (non-intelligent)
  wis: number;
  cha: number;
  specialQualities: string[]; // e.g. ['low-light vision', 'scent', 'darkvision 60 ft.']

  progressionTiers: AnimalCompanionProgressionTier[]; // [] if no progression listed

  source: string;      // e.g. 'pf1e-core', 'pf1e-b1' — see source table below
  isOfficial: boolean; // true for all entries from this agent
  visibility: 'global' | 'campaign' | 'private'; // always 'global' for seeded data
  rev: number;         // always 1 for new entries
}
```

**progressionTiers — CRITICAL rules:**

Each `AnimalCompanionProgressionTier` has:
```typescript
{
  atDruidLevel: 4 | 7;
  sizeChange?: string;           // e.g. 'Medium to Large' — omit if no size change
  abilityScoreChanges: {
    ability: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';
    change: number;              // DELTA from previous tier — NOT cumulative from base stats
  }[];
  naturalArmorChange?: number;   // delta from previous tier — omit if unchanged
  attackUpdate?: string;         // only if attack dice change (usually due to size increase)
  specialQualitiesGained?: string[]; // new SQs gained at this tier
}
```

**Delta example:** Wolf base STR 13 → STR 15 at 4th → STR 19 at 7th.
Write `change: 2` for 4th tier, `change: 4` for 7th tier. **Never write the final absolute value.**

---

## Source codes

| Source book                   | Code            |
| ----------------------------- | --------------- |
| Core Rulebook (CRB)           | `pf1e-core`     |
| Bestiary 1                    | `pf1e-b1`       |
| Bestiary 2                    | `pf1e-b2`       |
| Bestiary 3                    | `pf1e-b3`       |
| Bestiary 4                    | `pf1e-b4`       |
| Bestiary 5                    | `pf1e-b5`       |
| Bestiary 6                    | `pf1e-b6`       |
| Ultimate Magic                | `pf1e-um`       |
| Ultimate Combat               | `pf1e-uc`       |
| Advanced Player's Guide       | `pf1e-apg`      |
| Advanced Race Guide           | `pf1e-arg`      |
| Pathfinder Adventure Path     | `pf1e-ap{num}`  |
| Other/Unknown                 | `pf1e-unknown`  |

AONPRD shows the source on each companion page. Use it.

---

## Output file format

```typescript
// Batch {BATCH_NUM} | first: '{FIRST_ENTRY}' | last: '{LAST_ENTRY}' | count: {N}
// Batch metadata: {"batchNum":"{BATCH_NUM}","startEntry":"{FIRST_ENTRY}","lastEntry":"{LAST_ENTRY}","nextEntry":"{NEXT_ENTRY_OR_DONE}","entriesInBatch":{N}}
import { AnimalCompanionEntry } from '@/types/animalCompanions';

export const firstEntryName: AnimalCompanionEntry = {
  id: 'first-entry-name',
  name: 'First Entry Name',
  companionType: 'animal',
  size: 'Medium',
  // ...all fields
};

export const secondEntryName: AnimalCompanionEntry = {
  // ...
};

// ... one named camelCase export per entry ...

export const batch_{BATCH_NUM}: AnimalCompanionEntry[] = [
  firstEntryName,
  secondEntryName,
  // ...
];
```

**Naming conventions:**
- Named export: camelCase of the companion name (e.g. `giantChameleon`, `electricEel`, `griffon`)
- `id` field: kebab-case (e.g. `'giant-chameleon'`, `'electric-eel'`, `'griffon'`)

---

## Rules

1. **One fetch per companion** — fetch each companion's individual AONPRD page, not the list page.
2. **Follow the entry list exactly** — collect only the entries in `{ENTRY_LIST}`, in order.
3. **`int: 0`** for all non-intelligent companions (standard animals, vermin). Add comment `// INT: — (non-intelligent)`.
4. **`progressionTiers: []`** for companions with no progression listed on AONPRD.
5. **Ability score deltas** — always deltas from the previous tier, never absolute values.
6. **`attackUpdate`** — include only when attack dice change (usually at a size-change tier).
7. **`companionType`** — use `'animal'` for standard animals; `'magical beast'` for creatures listed under Monstrous; `'plant'` for plants; `'vermin'` for vermin; `'aberration'` / `'accursed'` as labeled.
8. **PAGE_FETCH_FAILED stub** — if both AONPRD and a d20pfsrd fallback fail, emit a stub:
   ```typescript
   export const stubName: AnimalCompanionEntry = {
     id: 'stub-name',
     name: 'Stub Name',
     companionType: 'animal',
     // PAGE_FETCH_FAILED — both AONPRD and d20pfsrd returned no data
     size: 'Medium', speed: '30 ft.', naturalArmor: 0,
     attacks: 'bite (1d6)',
     str: 10, dex: 10, con: 10,
     int: 0, // INT: — (non-intelligent)
     wis: 10, cha: 10,
     specialQualities: [],
     progressionTiers: [],
     source: 'pf1e-unknown',
     isOfficial: true,
     visibility: 'global',
     rev: 1,
   };
   ```
9. **Write in chunks of 10** entries — write/save to disk after every 10 entries. Do not write the entire batch in one shot.
10. **Run `npm run typecheck`** before reporting done. Fix all type errors.
11. **Verify the file compiles** — all string values must be properly quoted/escaped.

---

## d20pfsrd fallback

If an AONPRD page returns no data, try:
```
https://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/
```
Note: d20pfsrd puts all companions on one page; search for the companion name within the page content. This is less reliable than AONPRD individual pages.

---

## After writing the file

Report back with:

- Total entries written in this batch
- `lastEntry`: the last entry name collected
- `nextEntry`: the next entry to collect (or "DONE")
- Any entries that had to be stubbed and why
- Confirm `npm run typecheck` passed

The orchestrator (Claude Code) will update `src/data/animalCompanions/index.ts` and launch the next batch agent if needed.

---

## Example metadata comment

```
// Batch metadata: {"batchNum":"003","startEntry":"Electric Eel","lastEntry":"Hammerhead Shark","nextEntry":"Hippocampus","entriesInBatch":25}
```
