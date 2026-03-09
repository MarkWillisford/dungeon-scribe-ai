# Plan: Comprehensive Class Data Collection from d20pfsrd — COMPLETE

## Context

We need to populate the app with all Pathfinder 1e classes from d20pfsrd.com, similar to what we just did for races (60 races collected). Classes are significantly larger — more data per entry, more categories, and prestige classes alone number 100+. Another agent is handling mechanical effects, so we just collect the factual data (text descriptions for features, not wired-up effects).

## Decisions

- **Prestige scope:** Core (10) + APG (8) + popular picks (~12) = ~30 prestige classes
- **NPC classes:** Skip (Adept, Aristocrat, Commoner, Expert, Warrior)
- **Spell tables:** Collect full spells-per-day tables for all casting classes
- **Effects:** Not wired up — text descriptions only (another agent handles that)

## Current State

- `src/types/classes.ts` — Rich ClassEntry/ClassFeature types (with effects array — used by character system)
- `src/data/classes.ts` — Simplified ClassData with 11 Core classes, features only to level 10
- Same dual-type pattern as races had — we create new files, don't touch existing

## Spell Table Deduplication

Many classes share identical spells-per-day (and spells-known) progressions. Instead of embedding a 20×10 grid in every class, we store each unique table once and have classes reference it by key.

**Identified shared tables (~10-15 unique):**
| Table Key | Used By |
|-----------|---------|
| `FULL_CASTER_9_PREPARED` | Wizard, Cleric (base numbers), Druid (base numbers), Shaman, Witch |
| `FULL_CASTER_9_SPONTANEOUS_PER_DAY` | Sorcerer, Oracle |
| `FULL_CASTER_9_SPONTANEOUS_KNOWN` | Sorcerer, Oracle |
| `SIX_LEVEL_SPONTANEOUS_PER_DAY` | Bard, Skald |
| `SIX_LEVEL_SPONTANEOUS_KNOWN` | Bard, Skald |
| `FOUR_LEVEL_PREPARED` | Paladin, Ranger |
| `SIX_LEVEL_PREPARED` | Magus, Inquisitor (approximate) |
| `ARCANIST_PER_DAY` | Arcanist (unique hybrid) |
| `ALCHEMIST_PER_DAY` | Alchemist |
| `MESMERIST_*`, `PSYCHIC_*`, etc. | Occult classes (verify during fetch) |

**Incremental approach:** For each class we fetch, check if its spell table matches one we already have. If yes, just reference the key. If no, add a new named table. This avoids downloading/storing duplicates.

**File:** `src/data/classes/spellProgressionTables.ts`

## Expanded Types: `src/data/classes/types.ts`

```typescript
type ClassCategory = 'Core' | 'Base' | 'Hybrid' | 'Unchained' | 'Occult' | 'Alternate' | 'Prestige';

interface ClassFeatureData {
  name: string;
  level: number;
  description: string;
}

interface PrestigePrerequisites {
  bab?: number;
  skills?: { name: string; ranks: number }[];
  feats?: string[];
  spellcasting?: string; // e.g., "Ability to cast 3rd-level arcane spells"
  special?: string[]; // freeform requirements
  alignment?: string; // e.g., "Any evil"
}

// Spell table stored in spellProgressionTables.ts
// spellTable[classLevel] = array of spells per spell level
// e.g., spellTable[0] = [3, 1] means at class level 1: 3 cantrips, 1 first-level
// null entries = "no access to that spell level yet"
type SpellProgressionTable = (number | null)[][];

interface SpellcastingData {
  type: 'Arcane' | 'Divine' | 'Psychic' | 'Alchemical' | 'None';
  casting: 'Prepared' | 'Spontaneous' | 'None';
  spellList?: string; // e.g., "Wizard/Sorcerer", "Cleric"
  spellTableKey?: string; // key into SPELL_TABLES (spells per day)
  spellsKnownTableKey?: string; // key into SPELL_TABLES (spontaneous casters only)
  domainSlots?: boolean; // true for Cleric/Druid (+1 domain/nature slot per level)
}

interface ExpandedClassData {
  name: string;
  category: ClassCategory;
  maxLevel: number; // 20 for base, typically 10 for prestige
  hitDie: number;
  skillRanksPerLevel: number;
  classSkills: string[];
  babProgression: BABProgression;
  saves: { fortitude: SaveProgression; reflex: SaveProgression; will: SaveProgression };
  weaponProficiencies: string[];
  armorProficiencies: string[];
  startingWealth?: string;
  classFeatures: ClassFeatureData[];
  spellcasting: SpellcastingData;
  prerequisites?: PrestigePrerequisites;
  alignment?: string; // e.g., "Any non-lawful", "Lawful Good"
  source: string;
}
```

## File Structure: `src/data/classes/`

| File                              | Contents                                                                                                                                  |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `types.ts`                        | Shared types (ExpandedClassData, SpellcastingData, SpellProgressionTable, etc.)                                                           |
| `spellProgressionTables.ts`       | All unique spell tables keyed by name (SPELL_TABLES map + SPELLS_KNOWN_TABLES map)                                                        |
| `coreClasses.ts`                  | 11 Core classes (re-mapped from existing, extended to lvl 20)                                                                             |
| `baseClasses.ts`                  | 12 Base classes (Alchemist, Cavalier, Gunslinger, Inquisitor, Magus, Omdura, Oracle, Shifter, Summoner, Witch, Vampire Hunter, Vigilante) |
| `hybridClasses.ts`                | 10 Hybrid classes (Arcanist, Bloodrager, Brawler, Hunter, Investigator, Shaman, Skald, Slayer, Swashbuckler, Warpriest)                   |
| `unchainedClasses.ts`             | 4 Unchained variants (Barbarian, Monk, Rogue, Summoner)                                                                                   |
| `occultClasses.ts`                | 6 Occult classes (Kineticist, Medium, Mesmerist, Occultist, Psychic, Spiritualist)                                                        |
| `alternateClasses.ts`             | 3 Alternate classes (Antipaladin, Ninja, Samurai)                                                                                         |
| `prestigeClassesCRB.ts`           | 10 Core Rulebook prestige classes                                                                                                         |
| `prestigeClassesAPG.ts`           | 8 Advanced Player's Guide prestige classes                                                                                                |
| `prestigeClassesPopular.ts`       | ~12 popular prestige classes                                                                                                              |
| `index.ts`                        | Barrel export + lookup helpers                                                                                                            |
| `archetypes/fighterArchetypes.ts` | Pilot: all Fighter archetypes (benchmark for scope decision)                                                                              |
| `archetypes/`                     | Additional archetype files TBD after pilot                                                                                                |

## Tiered Fetching Priority

| Tier | Category                        | Count | Notes                                                                                                                                                                           |
| ---- | ------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Core Classes (extend to lvl 20) | 11    | Already have partial data, need full 20 levels + spell tables                                                                                                                   |
| 2    | Base Classes                    | 12    | Most commonly used after Core                                                                                                                                                   |
| 3    | Hybrid Classes                  | 10    | Very popular in modern PF1e play                                                                                                                                                |
| 4    | Alternate + Unchained           | 7     | Small sets, quick                                                                                                                                                               |
| 5    | Occult Classes                  | 6     | Complete category                                                                                                                                                               |
| 6    | Core Prestige (CRB)             | 10    | Arcane Archer, Arcane Trickster, Assassin, Dragon Disciple, Duelist, Eldritch Knight, Loremaster, Mystic Theurge, Pathfinder Chronicler, Shadowdancer                           |
| 7    | Advanced Prestige (APG)         | 8     | Battle Herald, Holy Vindicator, Horizon Walker, Master Chymist, Master Spy, Nature Warden, Rage Prophet, Stalwart Defender                                                      |
| 8    | Popular Prestige                | ~12   | Hellknight, Hellknight Signifer, Evangelist, Swordlord, Winter Witch, Student of War, Mammoth Rider, Arcane Savant, Agent of the Grave, Living Monolith, Noble Scion, Bloatmage |

**Total: ~76 classes**

## Data to Collect Per Class

For each class we fetch from d20pfsrd:

- Hit die, skill ranks/level, class skills
- BAB and save progressions
- Weapon/armor proficiencies
- Starting wealth (base classes only)
- All class features (name + level + text description) for ALL levels (1-20 or 1-10 for prestige)
- Full spells-per-day table for casting classes
- Spellcasting type (arcane/divine/psychic/alchemical, prepared/spontaneous)
- Spell list reference
- Alignment restrictions if any
- Prerequisites (prestige only: BAB, skills, feats, spellcasting, special)
- Source book

NOT collecting:

- Mechanical effects wired to features (another agent handles that — we collect full text descriptions of abilities but don't wire them into stat-modifying code)
- Spell lists themselves (just the reference to which list)

## Archetypes

Archetypes swap/modify base class features. Each archetype is relatively small but there are hundreds total.

**Data shape:**

```typescript
interface ArchetypeData {
  name: string;
  className: string; // parent class
  description: string;
  replacedFeatures: string[]; // class features removed
  modifiedFeatures: string[]; // class features altered
  newFeatures: ClassFeatureData[]; // archetype's own features
  source: string;
}
```

**Approach: Benchmark with Fighter first**

1. Collect ALL Fighter archetypes as a pilot (Fighter has one of the largest lists)
2. Measure: total count, storage size, time to fetch
3. Extrapolate to full dataset and decide scope for remaining classes

**File structure:** `src/data/classes/archetypes/` directory

- `fighterArchetypes.ts` (pilot — all Fighter archetypes)
- Additional files TBD based on pilot results

Archetype collection happens AFTER base class data is complete (Tiers 1-8), as a separate phase.

## Execution Workflow (per class)

1. **Fetch** class page from d20pfsrd
2. **Extract** all class data (hit die, BAB, saves, features, proficiencies, etc.)
3. **If caster:** Extract the spells-per-day table (and spells-known if spontaneous)
4. **Check dedup:** Compare extracted table against existing keys in `spellProgressionTables.ts`
   - **Match found →** set `spellTableKey` to existing key (no new table added)
   - **No match →** add new named table to `spellProgressionTables.ts`, set key
5. **Write** class entry referencing the table key (not embedding the raw table)

This means spell tables are built up incrementally — Core classes (Tier 1) will establish most of the shared tables, and later tiers will mostly just reference them.

## Verification

- `npx tsc --noEmit` passes after adding new files
- All new files are self-contained in `src/data/classes/` — no modifications to existing files
- Existing `src/data/classes.ts` remains untouched
- Count check: total classes matches expected per category

---

# Plan: Spell Data Collection — NEXT UP

## Status

Infrastructure COMPLETE (2026-03-07). Ready to launch agents.

**Some school files already have content from a previous session:**

- abjuration, conjuration, divination, enchantment, illusion, necromancy, universal — have spells
- evocation, transmutation — empty stubs

When launching agents, check the last spell in each existing file to set `startSpell` correctly.

## Context

Pathfinder 1e has ~2,500 spells. We need to populate a Firestore `spells` collection with all of them. Unlike races/classes (which are static app code), spells are database content — they live in Firestore and are queried at runtime by the character sheet. However, we will still use AI agents to collect the data (not a dumb fetch script), because d20pfsrd.com has inconsistent HTML and agents handle edge cases far better.

## What Already Exists

- `src/types/spells.ts` — the `Spell` interface (already updated this session)
- `src/data/classes/spellProgressionTables.ts` — spells-per-day tables (complete, unrelated to this work)
- Firestore already configured with staging + prod environments

## The `Spell` Type (as of this session)

```typescript
export interface Spell {
  name: string;
  classLevels: Record<string, number>; // e.g. { wizard: 3, sorcerer: 3, magus: 3 }
  school: string;
  subschool?: string;
  descriptor?: string[];
  components: {
    verbal: boolean;
    somatic: boolean;
    material: boolean;
    materialComponents?: string;
    focus: boolean;
    focusComponents?: string;
    divine: boolean;
  };
  castingTime: string;
  range: string;
  area?: string; // added — alongside target, not replacing it
  target: string;
  duration: string;
  savingThrow: string;
  spellResistance: string;
  description: string;
  source: string; // single string e.g. "Core Rulebook" — simple is fine
}
```

Key changes made to the existing type:

- `level: number` replaced with `classLevels: Record<string, number>` — spells appear on multiple class lists at potentially different levels; this field is directly queryable in Firestore
- `area?: string` added alongside `target` — some spells have an area, some have a target, some have both
- Mythic spells are stored as completely separate `Spell` documents (not a flag)
- `source` stays as a plain string — no need to structure it further

## Firestore Design

- **Collection:** `spells`
- **Document ID:** Auto-generated (Firestore assigns)
  - Reason: multiple printings of the same spell exist (errata, reprints, different sourcebooks with different class lists). Auto-ID handles this naturally.
- **Querying by name:** `where('name', '==', 'Fireball')` — may return multiple docs if reprints exist; `source` field disambiguates
- **Querying by class+level:** `where('classLevels.wizard', '==', 3)` — pulls all wizard 3rd-level spells without loading all 2,500 spells
- **Seeding:** idempotent script reads static TS files and batch-uploads (Firestore max 500 writes per batch)

## File Structure to Create

```
src/data/spells/
  abjurationSpells.ts        — Spell[] exported as ABJURATION_SPELLS
  conjurationSpells.ts       — Spell[] exported as CONJURATION_SPELLS
  divinationSpells.ts        — Spell[] exported as DIVINATION_SPELLS
  enchantmentSpells.ts       — Spell[] exported as ENCHANTMENT_SPELLS
  evocationSpells.ts         — Spell[] exported as EVOCATION_SPELLS
  illusionSpells.ts          — Spell[] exported as ILLUSION_SPELLS
  necromancySpells.ts        — Spell[] exported as NECROMANCY_SPELLS
  transmutationSpells.ts     — Spell[] exported as TRANSMUTATION_SPELLS
  universalSpells.ts         — Spell[] exported as UNIVERSAL_SPELLS
  index.ts                   — barrel export + ALL_SPELLS array

scripts/db/
  seedSpells.ts              — reads ALL_SPELLS, batch-uploads to Firestore staging then prod
```

Splitting by school keeps each file to ~200-400 spells — manageable for agents, type-safe, re-seedable.

## Agent Strategy — Batched (context-safe)

Agents work in batches of 50 spells (configurable in `_progress.json`). Batches are atomic:
each agent writes one file, reports where it stopped, and the orchestrator (Claude Code) kicks
off the next agent from that point.

**Batch file location:** `src/data/spells/batches/{school}/batch_NNN.ts`
**Progress tracking:** `src/data/spells/_progress.json`
**Agent prompt:** `scripts/spells/AGENT_PROMPT_TEMPLATE.md`

### Per-batch agent output format

```typescript
// Divination spells — batch 001
// Batch metadata: {"school":"divination","batchNum":"001","startSpell":"BEGINNING","lastSpell":"Detect Thoughts","nextSpell":"Discern Lies","nextUrl":"https://...","spellsInBatch":50}
import type { Spell } from '@/types/spells';

export const DIVINATION_BATCH_001: Spell[] = [
  // ... spells
];
```

### Orchestration loop

1. Check `_progress.json` for next school/batch to run
2. Launch batch agents (up to 9 in parallel, one per school needing work)
3. Each agent writes its batch file and reports `lastSpell` + `nextSpell` + `nextUrl`
4. Update `_progress.json` with the handoff info
5. Repeat until all schools show `nextSpell: "DONE"`
6. Run `npx tsx scripts/spells/mergeSpells.ts` to combine batches into final school files
7. Review merged files, then `npx tsx scripts/spells/mergeSpells.ts --confirm-delete`

### Helper scripts

- `npx tsx scripts/spells/checkProgress.ts` — status table
- `npx tsx scripts/spells/checkProgress.ts --count` — also count spells in existing files
- `npx tsx scripts/spells/mergeSpells.ts [school]` — merge batches into final file(s), saves .bak
- `npx tsx scripts/spells/mergeSpells.ts --confirm-delete` — also delete batch files after merge

### Execution Order

1. ~~Build `scripts/db/seedSpells.ts`~~ already exists
2. Launch wave 1: 9 agents in parallel (one per school, batch_001)
3. Update `_progress.json` with each agent's handoff
4. Launch wave 2+ as needed until all schools done
5. Run `mergeSpells.ts` → review → `mergeSpells.ts --confirm-delete`
6. Type-check: `npm run typecheck`
7. Seed to staging: `npx tsx scripts/db/seedSpells.ts`
8. Verify in Firestore console
9. Seed to prod

## Open Questions (resolved)

- Static files vs direct-to-Firestore: **Static TS files** (agents needed for quality data collection)
- Document ID: **Auto-generated** (handles multiple printings)
- Source field: **Single string** (e.g. "Core Rulebook") — no need to structure further
- Mythic spells: **Separate spell documents** entirely
- Split strategy: **By school** (8 schools + universal = 9 files)

---

## CURRENT STATUS (as of 2026-03-08)

### Phase 1 — Initial Collection: COMPLETE (all schools)

All 9 schools collected and in batch files. `_progress.json` shows all schools `"status": "complete"`, `"merged": false`.

| School        | Batch files | Collected |
| ------------- | ----------- | --------- |
| abjuration    | 2           | 137       |
| conjuration   | 2           | 143       |
| divination    | 3           | 195       |
| enchantment   | 3           | 192       |
| evocation     | 2           | 54        |
| illusion      | 2           | 133       |
| necromancy    | 1           | 74        |
| transmutation | 10          | 458       |
| universal     | 1           | 5         |

**Total: ~1,391 spells collected in batch files, not yet merged into school files.**

### Phase 2 — Gap Fill: IN PROGRESS

Gap fill agents scrape spells missing from the initial collection (spells on d20pfsrd not yet in any batch or school file). Gap files live in `src/data/spells/batches/gap/`. After all gaps are collected, `sortGapBatches.ts` routes them into per-school batch files, then `mergeSpells.ts` merges everything.

**Gap files confirmed on disk:**

| File          | Spell Count | Letter Range | Status      |
| ------------- | ----------- | ------------ | ----------- |
| `gap_IJK.ts`  | 82          | I, J, K      | ✅ Complete |
| `gap_S1.ts`   | 47          | Sa–Se        | ✅ Complete |
| `gap_S3.ts`   | 84          | Sr–Sz        | ✅ Complete |
| `gap_VWYZ.ts` | 58          | V, W, Y, Z   | ✅ Complete |

**Gap files still needed (agents hit rate limit before completing):**

| File         | Letter Range | Status         |
| ------------ | ------------ | -------------- |
| `gap_A.ts`   | A            | ❌ Not created |
| `gap_B.ts`   | B            | ❌ Not created |
| `gap_C.ts`   | C            | ❌ Not created |
| `gap_D.ts`   | D            | ❌ Not created |
| `gap_EF.ts`  | E, F         | ❌ Not created |
| `gap_GH.ts`  | G, H         | ❌ Not created |
| `gap_LM.ts`  | L, M         | ❌ Not created |
| `gap_NOP.ts` | N, O, P      | ❌ Not created |
| `gap_QR.ts`  | Q, R         | ❌ Not created |
| `gap_S2.ts`  | Sf–Sq        | ❌ Not created |
| `gap_TU.ts`  | T, U         | ❌ Not created |

### Remaining Steps (in order)

1. **Complete 11 missing gap letter ranges** — launch agents per letter group, targeting `src/data/spells/batches/gap/gap_{letters}.ts`. Use `known_spells.txt` in the gap dir to avoid duplicates. Check d20pfsrd alphabetical school lists for each letter, collect spells not in `known_spells.txt`.

2. **Run `sortGapBatches.ts`** to route gap spells into per-school batch files:

   ```
   npx tsx scripts/spells/sortGapBatches.ts
   ```

3. **Merge all batches** into final school files:

   ```
   npx tsx scripts/spells/mergeSpells.ts
   ```

4. **Review merged files**, then delete batch files:

   ```
   npx tsx scripts/spells/mergeSpells.ts --confirm-delete
   ```

5. **Type-check:** `npm run typecheck`

6. **Seed to staging:** `npx tsx scripts/db/seedSpells.ts`

7. **Verify in Firestore console**, then seed to prod.

### Gap Agent Prompt Notes

When launching gap-fill agents, pass:

- **Known spells list:** `src/data/spells/batches/gap/known_spells.txt` (deduplication reference)
- **Letter range:** which letters to scan (e.g., "A", "EF", "GH")
- **Output file:** `src/data/spells/batches/gap/gap_{LETTERS}.ts`
- **Export name:** `GAP_SPELLS_{LETTERS}`
- **Format:** Same `Spell[]` format as regular batch files (see AGENT_PROMPT_TEMPLATE.md)
- **Rule:** Skip any spell whose name (case-insensitive) appears in `known_spells.txt`
