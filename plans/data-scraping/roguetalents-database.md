# Rogue Talents Database — Collection Plan

## Overview

Collect all Paizo rogue talents from d20pfsrd.com into the Firestore `roguetalents`
collection. Static TS files are seed scripts only — the authoritative copy lives in
Firestore.

**Firestore collection:** `roguetalents`
**Scope:** ~100+ talents split into standard (any rogue level) and advanced (requires
rogue level 10+) tiers. Both tiers on the same source page.
**Source:** https://www.d20pfsrd.com/classes/core-classes/rogue/rogue-talents/

**Used by:**

- Rogue: `rogue-talent` ClassChoiceDefinition — picks at every even class level (2, 4, 6, 8, 10, 12, 14, 16, 18, 20). `talentTier: 'advanced'` entries are only displayed when rogue class level ≥ 10.
- Ninja: same collection, same shared pool — Ninja picks from the full talent list just as Rogues do.

---

## Data Model

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

export interface RogueTalentEntry extends ClassOptionBase {
  talentTier: 'standard' | 'advanced';
}
```

**`talentTier` mapping:**

| Source section     | `talentTier` value |
| ------------------ | ------------------ |
| "Rogue Talents"    | `'standard'`       |
| "Advanced Talents" | `'advanced'`       |

The UI filters by `talentTier` at selection time:

- `'advanced'` entries are shown only when the character's rogue class level ≥ 10.
- `'standard'` entries are available at any rogue level.

**Sub-pick talents:** Some talents require a secondary selection at pick time (e.g., Minor
Magic: choose a cantrip; Major Magic: choose a 1st-level spell). **Do not model this
structurally.** Capture the sub-pick instruction faithfully in `description`. The UI stores
the sub-pick result in `metadata` on the character's `ClassChoice` record.

---

## File Structure

```
src/data/rogueTalents/
  raw/
    roguetalents_batch_001.ts    ← Agent output, 25 entries each
    roguetalents_batch_002.ts
    roguetalents_batch_003.ts
    roguetalents_batch_004.ts
  index.ts                       ← Combined barrel (written after all batches done)

scripts/db/
  seedRogueTalents.ts            ← Seed script (ready to run, not auto-executed)
```

---

## Source & URL Pattern

**Source page:** https://www.d20pfsrd.com/classes/core-classes/rogue/rogue-talents/

All rogue talents (standard and advanced) are listed inline on a single page, divided into
two clearly labeled sections. There are no per-entry subpage URLs. Instead:

- All agents fetch the **same source URL**.
- Each agent is assigned a **named range** covering either a portion of the standard
  talents list or the full advanced talents list.
- The orchestrating Claude determines the full list by fetching the source page, counts
  the entries in each section, and divides them into 4 ranges of ~25.

**No URL fallback is needed** — all content is on one page. If the page fails to load,
retry once before aborting.

---

## Agent Batch Plan

~100 entries ÷ 25 per batch = **~4 batches → 1 round of 4 agents**.

All 4 agents launch in parallel. Each receives the source URL and their assigned range.

| Round | Batches | Approximate Content                 |
| ----- | ------- | ----------------------------------- |
| 1     | 001     | Standard Talents A–E (~25 entries)  |
| 1     | 002     | Standard Talents F–P (~25 entries)  |
| 1     | 003     | Standard Talents Q–Z (~25 entries)  |
| 1     | 004     | Advanced Talents (all, ~25 entries) |

_Exact split set by the orchestrating Claude after counting entries on the source page.
Standard talents are significantly more numerous than advanced talents; adjust batch
boundaries to reach ~25 per agent. Advanced Talents are likely fewer than 25 — batch 004
may be smaller._

---

## Agent Rules

1. You are given a source page URL and a named range of entries to extract. Fetch the page
   once and extract only the entries within your assigned range.
2. Write your output to `src/data/rogueTalents/raw/roguetalents_batch_NNN.ts`.
3. Begin the file with: `// Batch NNN | first: 'Name' | last: 'Name' | count: N`
4. Import types: `import { RogueTalentEntry } from '@/types/classOptions';`
5. `id` is always kebab-case of the talent name. E.g. `'bleeding-attack'`, `'minor-magic'`,
   `'improved-evasion'`, `'slippery-mind'`.
6. Do not summarize or abbreviate descriptions — copy them faithfully from the source.
   For sub-pick talents (Minor Magic, Major Magic, etc.), include the full instructions for
   what the player selects in the description text.
7. Emit one named camelCase export per entry (e.g. `bleedingAttack`, `minorMagic`),
   and one batch array at the bottom: `export const batch_NNN: RogueTalentEntry[] = [...]`.
8. **Page failure:** if the page cannot be fetched after one retry, emit `PAGE_FETCH_FAILED`
   stubs for all entries in your assigned range and log the attempted URL in the checkpoint comment.
9. Run `npm run typecheck` before reporting done. Fix all type errors.
10. **Collection-specific rules:**
    - `talentTier` — `'standard'` for entries in the "Rogue Talents" section; `'advanced'`
      for entries in the "Advanced Talents" section. This is the most critical field.
    - `prerequisites[]` — some talents require other talents (e.g. Major Magic requires
      Minor Magic). Use `{ type: 'special', description: 'Minor Magic rogue talent' }`.
      Level requirements use `{ type: 'level', minimum: N }`.
    - Sub-pick talents (Minor Magic, Major Magic, etc.): capture the sub-pick instruction
      in `description` only. Do **not** add any structural field for it. Example:
      `"...The rogue must choose a 0-level spell from the sorcerer/wizard spell list..."`
    - `source` — `'pf1e-core'` for CRB; `'pf1e-apg'` for APG; `'pf1e-uc'` for Ultimate
      Combat; `'pf1e-ui'` for Ultimate Intrigue; etc. Use the page's source citation.
    - The Ninja shares this collection — no field differences needed. The system queries
      the full collection for both classes.
    - Some talents reference rogue abilities (sneak attack, trapfinding, trap sense). Copy
      these references as written — do not resolve them.

---

## Sample Documents

Hand-authored to validate the model before agents launch.

### 1. Bleeding Attack — standard, no prerequisites

```typescript
export const bleedingAttack: RogueTalentEntry = {
  id: 'bleeding-attack',
  name: 'Bleeding Attack',
  talentTier: 'standard',
  description:
    "A rogue with this ability can cause living opponents to bleed by hitting them with a sneak attack. This attack causes the target to take 1 additional point of damage each round for each die of the rogue's sneak attack (e.g., 4d6 sneak attack deals 4 points of bleed). Bleeding creatures take that amount of damage every round at the start of each of their turns. The bleeding can be stopped by a DC 15 Heal check or the application of any effect that heals hit point damage. Bleed damage from this ability does not stack with itself. Bleed damage bypasses any damage reduction the creature might possess.",
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};
```

### 2. Minor Magic — standard, sub-pick handled in description only

```typescript
export const minorMagic: RogueTalentEntry = {
  id: 'minor-magic',
  name: 'Minor Magic',
  talentTier: 'standard',
  description:
    "A rogue with this talent gains the ability to cast a single 0-level spell from the sorcerer/wizard spell list. The rogue must choose this spell when she selects this talent, and once chosen, it cannot be changed. The rogue may cast this spell at will as a spell-like ability. The rogue's caster level for this ability is equal to her rogue level.",
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};
```

### 3. Improved Evasion — advanced talent

```typescript
export const improvedEvasion: RogueTalentEntry = {
  id: 'improved-evasion',
  name: 'Improved Evasion',
  talentTier: 'advanced',
  description:
    'This works like evasion, except that while the rogue still takes no damage on a successful Reflex saving throw against attacks, she henceforth takes only half damage on a failed save. A helpless rogue does not gain the benefit of improved evasion.',
  prerequisites: [{ type: 'special', description: 'evasion class feature' }],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};
```

---

## Seeding

**Script:** `scripts/db/seedRogueTalents.ts`

Follows the upsert pattern (no clear before seed — preserves campaign/homebrew talents):

```typescript
// Usage:
//   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
//   export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5
//   npx tsx scripts/db/seedRogueTalents.ts [--dry-run]
```

1. Import `ALL_ROGUE_TALENTS` from `src/data/rogueTalents/index.ts`
2. Batch-write to Firestore `roguetalents` collection using `batch.set(ref, entry)` (upsert)
3. Document ID = `talent.id` (deterministic, idempotent)

**Do not run the seed script automatically.** Write it and leave it ready.

---

## Combining Batches

After all 4 agents complete, write `src/data/rogueTalents/index.ts`:

```typescript
import { RogueTalentEntry } from '@/types/classOptions';
import { batch_001 } from './raw/roguetalents_batch_001';
import { batch_002 } from './raw/roguetalents_batch_002';
import { batch_003 } from './raw/roguetalents_batch_003';
import { batch_004 } from './raw/roguetalents_batch_004';

export const ALL_ROGUE_TALENTS: RogueTalentEntry[] = [
  ...batch_001,
  ...batch_002,
  ...batch_003,
  ...batch_004,
];

export const getRogueTalentById = (id: string): RogueTalentEntry | undefined =>
  ALL_ROGUE_TALENTS.find((t) => t.id === id);

export const getRogueTalentByName = (name: string): RogueTalentEntry | undefined =>
  ALL_ROGUE_TALENTS.find((t) => t.name.toLowerCase() === name.toLowerCase());

export const getStandardTalents = (): RogueTalentEntry[] =>
  ALL_ROGUE_TALENTS.filter((t) => t.talentTier === 'standard');

export const getAdvancedTalents = (): RogueTalentEntry[] =>
  ALL_ROGUE_TALENTS.filter((t) => t.talentTier === 'advanced');
```

---

## Execution Checklist

- [ ] Fetch https://www.d20pfsrd.com/classes/core-classes/rogue/rogue-talents/ and count entries
      in both the "Rogue Talents" and "Advanced Talents" sections
- [ ] Determine range boundaries for 4 batches of ~25; note section dividing line
- [ ] Round 1: launch all 4 agents in parallel (batches 001–004, single round)
- [ ] Combine all `raw/roguetalents_batch_NNN.ts` into `src/data/rogueTalents/index.ts`
- [ ] `npm run typecheck` — zero errors
- [ ] Write `scripts/db/seedRogueTalents.ts`
- [ ] Final `npm run typecheck` — zero errors
