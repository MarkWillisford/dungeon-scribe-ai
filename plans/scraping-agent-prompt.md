# Prompt: Write 4 Data Scraping Plans

## Context

You are working on **Dungeon Scribe AI 1.1** — a Pathfinder 1e character manager built in
React Native / Expo / Firebase. Your job is to write **4 complete scraping plan files**.
You are writing the **plans only** — you are not running any scraping, seeding, or writing
any data files.

Write each plan to:

- `plans/data-scraping/deities-database.md`
- `plans/data-scraping/animal-companions-database.md`
- `plans/data-scraping/ragepowers-database.md`
- `plans/data-scraping/roguetalents-database.md`

Use `plans/data-scraping/domains-database.md` as your format reference — match its level
of detail, section structure, and sample document quality exactly.

---

## Project Architecture

### Data Philosophy

Static TypeScript files in `src/data/` are **seed scripts only**. All game reference data
lives in Firestore and is queried at runtime. Agents collect data into static TS batch
files, which are then seeded to Firestore via seed scripts.

### Tech Stack

- TypeScript strict mode — `tsconfig.json` has `"strict": true`
- Path alias: `@/` maps to `src/` (e.g. `import { Foo } from '@/types/foo'`)
- Firebase Admin SDK for seeding
- `npm run typecheck` = `tsc --noEmit`

### Content Metadata

Every Firestore document carries these fields:

```typescript
source: string;       // e.g. 'pf1e-core' | 'pf1e-apg' | 'pf1e-inner-sea-gods' | '3.5e'
isOfficial: boolean;
createdBy?: string;   // userId; absent for official content
visibility: 'global' | 'campaign' | 'private';
campaignId?: string;
rev: number;          // starts at 1; increments on errata updates
```

### Base Type

All collection entry types extend this base, defined in `src/types/classOptions.ts`.
It provides every common field so collection-specific interfaces only need to add
what is unique to them.

```typescript
// src/types/classOptions.ts
interface ClassOptionBase {
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
```

`RagePowerEntry` is a direct alias (`type RagePowerEntry = ClassOptionBase`) because
rage powers need no extra fields. `RogueTalentEntry` extends it to add `talentTier`.
More complex types like `DeityEntry` and `AnimalCompanionEntry` are defined in their
own type files.

---

## Scraping Strategy

### Fully Automated Orchestration

The human never manually pre-fetches anything. The calling Claude instance handles the
entire orchestration loop autonomously:

1. **Fetch the index page** — extract the full list of entry names and URLs
2. **Divide into batches** — 25 entries per batch, numbered sequentially (001, 002, ...)
3. **Launch round 1** — 4 background agents in parallel, each with a pre-assigned list
   of 25 URLs and their batch number
4. **Wait for all 4** — collect results, verify checkpoint headers, note any stubs
5. **Launch round 2** — next 4 agents with the next 4 batches
6. **Repeat** until all batches are complete
7. **Combine** — write `src/data/{collection}/index.ts` from all batch files
8. **Typecheck** — `npm run typecheck`, fix any errors
9. **Done** — seed script is ready to run when the human chooses

Each plan should describe this loop clearly so the calling Claude instance knows
exactly how to execute it.

### Batch Size

**25 entries per agent batch.** Keeps each agent's context usage manageable and makes
partial failures easy to recover from without re-running large amounts of work.

### Parallelism

**4 agents per round.** Each round covers 100 entries. Plans should include a round
table showing which batches run in each round.

### URL Reliability — Two-Stage Approach

Agents receive a pre-assigned list of URLs extracted from the index. However, index
pages are not always perfectly reliable — URLs may be malformed, entries may have
moved, or the index may omit some entries.

**Agent URL strategy (include in every plan's agent rules):**

1. **Try the provided URL first.** If it returns valid content, use it.
2. **If the URL fails (404, redirect, unexpected content):** attempt to find the entry
   by searching the site. For d20pfsrd.com, try constructing the URL from the entry
   name (kebab-case slug). For aonprd.com, use the `ItemName` query parameter.
3. **If both fail:** emit a `PAGE_FETCH_FAILED` stub and log the entry name and
   attempted URLs in the batch file's checkpoint comment. Do not stop — continue
   with the remaining entries.

This two-stage approach dramatically reduces stub rate compared to failing immediately
on the first URL attempt.

### Batch File Format

Every agent writes one file: `src/data/{collection}/raw/{collection}_batch_NNN.ts`

```typescript
// Batch 001 | first: 'Entry Name' | last: 'Entry Name' | count: 25
import { SomeEntry } from '@/types/someFile';

export const firstEntry: SomeEntry = { ... };
export const secondEntry: SomeEntry = { ... };
// ... 25 total named exports

export const batch_001: SomeEntry[] = [firstEntry, secondEntry, ...];
```

Rules:

- Checkpoint comment on line 1: `// Batch NNN | first: 'Name' | last: 'Name' | count: N`
- One **named export per entry** in camelCase (e.g. `wolfCompanion`, `airDomain`)
- One **batch array export** at the bottom: `export const batch_NNN = [...]`
- `id` is always kebab-case (e.g. `'wolf'`, `'good-agathion'`, `'lesser-elemental-rage'`)

### Fallback for Unreachable Pages

If both URL attempts fail, the agent emits a stub and continues:

```typescript
export const brokenEntry: SomeEntry = {
  id: 'entry-name',
  name: 'Entry Name',
  description: 'PAGE_FETCH_FAILED',
  // required array fields use []
  // required number fields use 0
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};
```

The failed entry name and both attempted URLs are logged in the checkpoint comment.

### Combining Batches

After all agents complete, Claude writes the barrel:

```typescript
// src/data/{collection}/index.ts
import { SomeEntry } from '@/types/someFile';
import { batch_001 } from './raw/{collection}_batch_001';
// ... all batches

export const ALL_{COLLECTION}: SomeEntry[] = [
  ...batch_001,
  ...batch_002,
  // ...
];

export const get{Entry}ById = (id: string): SomeEntry | undefined =>
  ALL_{COLLECTION}.find(e => e.id === id);

export const get{Entry}ByName = (name: string): SomeEntry | undefined =>
  ALL_{COLLECTION}.find(e => e.name.toLowerCase() === name.toLowerCase());
```

---

## Seed Script Pattern

All seed scripts follow `scripts/db/seedSpells.ts` with one critical difference:
**do not clear the collection before seeding**.

The `seedSpells.ts` script clears before re-seeding because the spells collection
contains only official content. These collections (`deities`, `animalcompanions`,
`ragepowers`, `roguetalents`) will also contain DM-added campaign content
(`visibility: 'campaign'`) and player homebrew (`visibility: 'private'`). A clear
operation would destroy that custom content.

**Use upsert by document ID instead:**

```typescript
/**
 * seed{Collection}.ts — Upsert {collection} to Firestore
 *
 * Uses upsert (not clear+rewrite) to preserve any campaign/homebrew content
 * already in the collection. Official entries are overwritten by document ID.
 * Custom entries not in this seed set are left untouched.
 *
 * Prerequisites:
 *   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5
 *
 * Usage:
 *   npx tsx scripts/db/seed{Collection}.ts [--dry-run]
 */

import * as admin from 'firebase-admin';
import { ALL_{COLLECTION} } from '../../src/data/{collection}/index';

const DRY_RUN = process.argv.includes('--dry-run');
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';
const BATCH_SIZE = 500;

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: PROJECT_ID,
  });
}

const db = admin.firestore();

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
}

async function seed(): Promise<void> {
  console.log(`Seeding ${ALL_{COLLECTION}.length} entries to project: ${PROJECT_ID}`);

  if (DRY_RUN) {
    console.log('[DRY RUN] — no writes performed.');
    return;
  }

  const chunks = chunkArray(ALL_{COLLECTION}, BATCH_SIZE);
  let totalWritten = 0;

  for (const chunk of chunks) {
    const batch = db.batch();
    chunk.forEach(entry => {
      const ref = db.collection('{collection}').doc(entry.id);
      batch.set(ref, entry); // upsert — overwrites if exists, creates if not
    });
    await batch.commit();
    totalWritten += chunk.length;
    console.log(`  Written: ${totalWritten}/${ALL_{COLLECTION}.length}`);
  }

  console.log(`\nDone. ${totalWritten} entries upserted.`);
}

seed().catch(err => { console.error('Seed failed:', err); process.exit(1); });
```

**Do not run the seed script automatically.** Write it and leave it ready.

---

## Standard Agent Rules

Include these verbatim in every plan, then append collection-specific rules below them:

1. You are given a pre-assigned list of 25 entry URLs. Work through them in order.
2. Write your output to `src/data/{collection}/raw/{collection}_batch_NNN.ts`.
3. Begin the file with: `// Batch NNN | first: 'Name' | last: 'Name' | count: N`
4. Import types from the correct `@/types/` path.
5. `id` is always kebab-case.
6. Do not summarize or abbreviate descriptions — copy them faithfully from the source.
7. Emit one named camelCase export per entry, and one batch array at the bottom.
8. **URL failures:** if the provided URL fails, attempt to find the entry by name
   (see URL strategy above). Only emit a `PAGE_FETCH_FAILED` stub if both attempts fail.
   Log the entry name and both attempted URLs in the checkpoint comment.
9. Run `npm run typecheck` before reporting done. Fix all type errors.
10. [Collection-specific rules follow]

---

## Plan Format

Each plan must contain these sections in this order:

1. **Overview** — collection name, Firestore collection ID, scope, source URL, purpose,
   which classes/features use this collection
2. **Data Model** — full TypeScript interface(s) with file path, inline code blocks,
   and notes on any non-obvious fields
3. **File Structure** — directory tree showing batch files, index.ts, seed script
4. **Source & URL Pattern** — index page URL, individual entry URL pattern, notes on
   site navigation quirks
5. **Agent Batch Plan** — round-by-round table: round number, batch numbers, entry
   range covered
6. **Agent Rules** — standard rules (verbatim) + collection-specific additions
7. **Sample Documents** — 2–3 hand-authored TypeScript objects (see below)
8. **Seeding** — seed script path, run command, upsert note
9. **Execution Checklist** — checkbox list

---

## Sample Documents — What They Are and Why

Sample documents are **2–3 real entries hand-authored by the plan writer** and embedded
directly in the plan file as TypeScript code blocks. They are not written by scraping
agents — they are written now, by you, to:

1. **Prove the type works** — if you can't fill out 2–3 real entries cleanly, the type
   has a problem that needs fixing before any scraping runs
2. **Give agents a concrete target** — agents read the samples and produce output that
   matches them exactly, including field naming, string formatting, array shapes, and
   how to handle optional fields
3. **Show the range of cases** — include one simple entry and one complex entry
   (e.g. a rage power with no prerequisites, and one that requires another rage power;
   a deity with full boons, and one with no boons)

Choose real, well-known entries from the collection (not invented ones). The domains
plan uses Good Domain, Healing Domain, Liberation Domain, and Good-Agathion subdomain
as its samples — all real Pathfinder entries that illustrate different cases.

---

## Collection 1: Deities

**Firestore collection:** `deities`
**Source index:** `https://www.aonprd.com/DeitiesByGroup.aspx`
**Individual entry URL pattern:** `https://www.aonprd.com/DeityDisplay.aspx?ItemName={Name}`
(spaces encoded as `%20`, e.g. `Demon%20Lord%2C%20Lamashtu`)

### Scope

~400 deities across ~15 groups: Core Deities, Other Deities, Archdevils, Asura Ranas,
Azlanti, Daemon Harbingers, Dead Deities, Demon Lords, Dwarven, Eldest, Elemental Lords,
Elven, Empyreal Lords, Giants, Tian Xia. Scrape all groups.

~400 entries ÷ 25 per batch = **~16 batches → 4 rounds of 4 agents**.

### Type

```typescript
// src/types/deities.ts

export interface DeityBoonTier {
  tier: 1 | 2 | 3;
  description: string;
}

export interface DeityBoons {
  obedienceRequirement: string;
  evangelist: DeityBoonTier[]; // 3 entries
  exalted: DeityBoonTier[]; // 3 entries
  sentinel: DeityBoonTier[]; // 3 entries
}

export interface DeityEntry {
  id: string; // kebab-case: 'milani', 'iomedae', 'lamashtu'
  name: string;
  title?: string; // e.g. 'The Everbloom'
  alignment: string; // 'LG'|'NG'|'CG'|'LN'|'N'|'CN'|'LE'|'NE'|'CE'
  pantheon: string; // group from index: 'Core Deities', 'Empyreal Lords', etc.
  portfolio: string; // areas of concern text
  domains: string[]; // domain ids: ['chaos', 'good', 'healing']
  subdomains: string[]; // subdomain ids: ['chaos-azata', 'healing-restoration']
  favoredWeapon: string;
  allowedClericAlignments: string[]; // alignments within one step of deity's alignment
  symbol?: string;
  sacredAnimal?: string;
  sacredColors?: string[];
  description?: string;
  boons?: DeityBoons; // omit entirely if deity has no Deific Obedience entry
  source: string; // 'pf1e-core' | 'pf1e-inner-sea-gods' | etc.
  isOfficial: boolean;
  visibility: 'global' | 'campaign' | 'private';
  rev: number;
}
```

**Key notes for agents:**

- Boons (Evangelist / Exalted / Sentinel, tiers 1–3) are **on the individual deity page**.
  One page fetch = everything. No chaining required.
- Many minor deities (Dead Deities, some Daemon Harbingers) have no Deific Obedience
  entry — omit `boons` entirely for these.
- `allowedClericAlignments` is derived from the deity's alignment using the PF1e
  "within one step" rule. E.g. CG → `['CG', 'NG', 'CN']`.
- `domains` and `subdomains` use kebab-case IDs matching the `domains` Firestore
  collection (e.g. `'good'`, `'good-agathion'`).
- `pantheon` comes from the group heading on the index page. Preserve the exact
  group name as written (e.g. `'Empyreal Lords'`, not `'empyreal lords'`).

**Already authored — do not re-scrape:**
`src/data/deities/milani.ts` and `src/data/deities/iomedae.ts` exist and are correct.
Document IDs are deterministic (`entry.id`), so seeding them again is a safe no-op —
but agents should note in the checkpoint comment if they encounter these entries.

**Sample documents:** Write samples for at least:

- One Core Deity with full boons (e.g. Pharasma or Sarenrae)
- One Empyreal Lord or minor deity without boons
- One deity with an unusual domain set

---

## Collection 2: Animal Companions

**Firestore collection:** `animalcompanions`
**Source:** `https://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/`

### Scope

~200 entries organized alphabetically within creature-type sections: Standard Animals,
Aberration, Accursed, Magical Beast, Plant, Vermin. Official Pathfinder only —
**skip the 3rd-party section entirely**. The 3pp section is clearly labeled; agents
should stop when they reach it.

~200 entries ÷ 25 per batch = **~8 batches → 2 rounds of 4 agents**.

### Type

New file: `src/types/animalCompanions.ts`

```typescript
// src/types/animalCompanions.ts

export interface AnimalCompanionProgressionTier {
  atDruidLevel: 4 | 7;
  sizeChange?: string; // e.g. 'Medium to Large'
  abilityScoreChanges: {
    ability: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';
    change: number; // always a delta, never a final value
  }[];
  naturalArmorChange?: number;
  attackUpdate?: string; // full updated attack string e.g. 'bite (1d8)'
  specialQualitiesGained?: string[];
}

export interface AnimalCompanionEntry {
  id: string; // kebab-case: 'wolf', 'leopard', 'giant-eagle'
  name: string;
  companionType: 'animal' | 'magical beast' | 'plant' | 'vermin' | 'aberration' | 'accursed';

  // Starting Statistics
  size: string; // 'Tiny'|'Small'|'Medium'|'Large'|'Huge'
  speed: string; // e.g. '50 ft.' or '30 ft., climb 20 ft., swim 20 ft.'
  naturalArmor: number;
  attacks: string; // e.g. 'bite (1d6)' or 'bite (1d6), 2 claws (1d4)'
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  specialQualities: string[];

  progressionTiers: AnimalCompanionProgressionTier[];

  source: string;
  isOfficial: boolean;
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  createdBy?: string;
  rev: number;
}
```

**Key notes for agents:**

- Most companions have progression tiers at both 4th and 7th druid level. Some have
  only one. A few large creatures may have a single starting block with no progression.
- Ability score changes in tiers are always **deltas** — write `change: 8`, never
  the final value.
- DM additions (e.g. 3.5e creatures like Fleshraker) use `visibility: 'campaign'`.
  The plan should document this pattern — but agents only scrape official Paizo entries.
- The page may list all entries inline or link to subpages — agents should follow
  links if individual entry pages exist.

**Sample documents:** Write samples for at least:

- One small/medium standard animal (e.g. Wolf — simple, well-known)
- One creature with two progression tiers and a size change (e.g. Elephant or Bear)
- One non-standard type (e.g. a Plant or Vermin companion)

---

## Collection 3: Rage Powers

**Firestore collection:** `ragepowers`
**Source:** `https://www.d20pfsrd.com/classes/core-classes/barbarian/rage-powers/`

### Scope

~100+ rage powers across Core Rulebook, APG, Ultimate Magic, Ultimate Combat, and
other sources. The page lists all rage powers, grouped by tier or alphabetically.

~100 entries ÷ 25 per batch = **~4 batches → 1 round of 4 agents**.

### Type

```typescript
// src/types/classOptions.ts
// No extra fields needed — rage powers use the base type directly

export type RagePowerEntry = ClassOptionBase;
```

Prerequisites between rage powers (e.g. "Requires: Lesser Elemental Rage") are
captured using the `prerequisites` array inherited from `ClassOptionBase`:

```typescript
prerequisites: [{ type: 'special', description: 'Lesser Elemental Rage rage power' }];
```

**Key notes for agents:**

- Capture prerequisite rage powers faithfully in `prerequisites[]`.
- `source` should reflect the actual sourcebook: `'pf1e-core'`, `'pf1e-apg'`,
  `'pf1e-um'` (Ultimate Magic), `'pf1e-uc'` (Ultimate Combat), etc.
- Also used by Skald — no type or field difference needed.
- Some rage powers are only available to specific barbarian archetypes — capture
  this restriction in the `description` text, not as a separate field.

**Sample documents:** Write samples for at least:

- One simple rage power with no prerequisites (e.g. Intimidating Glare)
- One rage power with a prerequisite rage power (e.g. a Greater/Mighty variant)
- One rage power from a non-Core source (showing the `source` field usage)

---

## Collection 4: Rogue Talents

**Firestore collection:** `roguetalents`
**Source:** `https://www.d20pfsrd.com/classes/core-classes/rogue/rogue-talents/`

### Scope

~100+ talents split into standard (any level) and advanced (requires rogue level 10+)
tiers. Both tiers are on the same page or a small set of linked pages.

~100 entries ÷ 25 per batch = **~4 batches → 1 round of 4 agents**.

### Type

```typescript
// src/types/classOptions.ts

export interface RogueTalentEntry extends ClassOptionBase {
  talentTier: 'standard' | 'advanced';
}
```

**Key notes for agents:**

- The page is divided into "Rogue Talents" (standard) and "Advanced Talents" sections.
  Set `talentTier` accordingly.
- Some talents have a sub-pick at selection time (e.g. Minor Magic: choose a cantrip;
  Major Magic: choose a 1st-level spell). **Do not model this structurally.** Just
  capture it faithfully in the `description` field. The UI handles sub-picks as
  freeform `metadata` on the character's `ClassChoice` record.
- `source` should reflect the actual sourcebook.
- Also used by Ninja — no type or field difference needed.

**Sample documents:** Write samples for at least:

- One simple standard talent with no prerequisites (e.g. Bleeding Attack)
- One standard talent with a sub-pick (e.g. Minor Magic — show how to handle it
  in description only)
- One advanced talent (e.g. Improved Evasion or Slippery Mind)

---

## TypeScript Rules (apply to all sample documents and agent output)

- No `any` types
- Optional fields are **omitted entirely** when absent — do not write `field: undefined`
- String arrays that may be empty use `[]` not `undefined`
- All `id` strings are kebab-case
- `rev: 1` on all entries
- `isOfficial: true`, `visibility: 'global'` for all official Paizo content
- Descriptions are copied faithfully — do not paraphrase or summarize

---

## Out of Scope — Do Not Address

The `feats` Firestore collection does not yet exist and feat documents are missing
filter tags (`isCombatFeat`, `isMetamagic`, `isItemCreation`). This is a known gap
that will be addressed in a separate plan. Do not attempt to solve it here.
