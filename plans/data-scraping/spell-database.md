# Plan: Spell Data Collection

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
