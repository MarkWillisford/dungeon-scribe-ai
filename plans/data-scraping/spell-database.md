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

## CURRENT STATUS (as of 2026-03-14)

### Phase 1 — Initial Collection: COMPLETE

All 9 schools collected, sorted, and merged into final school files.

### Phase 2 — Gap Fill: COMPLETE (2026-03-14)

1,585 new spells collected across all alphabet letters (A–X) and merged into the 9 school files. All schools show `"merged": true` in `_progress.json`.

**Gap files (all complete):**

| Files                         | Letter Range    | New Spells |
| ----------------------------- | --------------- | ---------- |
| `gap_IJK.ts`                  | I, J, K         | 82         |
| `gap_S1.ts`                   | Sa–Se           | 47         |
| `gap_S3.ts`                   | Sr–Sz           | 84         |
| `gap_VWYZ.ts`                 | V, W, Y, Z      | 58         |
| `gap_A_1.ts`, `gap_A_2.ts`    | A               | ~         |
| `gap_B_1.ts`, `gap_B_2.ts`    | B               | ~         |
| `gap_C_1.ts`, `gap_C_2.ts`    | C               | ~         |
| `gap_D_1.ts`, `gap_D_2.ts`    | D               | ~         |
| `gap_E_1.ts`, `gap_E_2.ts`    | E               | ~         |
| `gap_F_1.ts`, `gap_F_2.ts`    | F               | ~         |
| `gap_G_1.ts`, `gap_G_2.ts`    | G               | ~         |
| `gap_H_1.ts`, `gap_H_2.ts`    | H               | ~         |
| `gap_L_1.ts`, `gap_L_2.ts`    | L               | ~         |
| `gap_M_1.ts`, `gap_M_2.ts`    | M               | ~         |
| `gap_N_1.ts`, `gap_N_2.ts`    | N               | ~         |
| `gap_O_1.ts`, `gap_O_2.ts`    | O               | ~         |
| `gap_P_1.ts`, `gap_P_2.ts`    | P               | ~         |
| `gap_R_1.ts`, `gap_R_2.ts`    | R               | ~         |
| `gap_S2_1.ts`, `gap_S2_2.ts`  | Sf–Sq           | ~         |
| `gap_T_1.ts`, `gap_T_2.ts`    | T               | ~         |
| `gap_U_1.ts`, `gap_U_2.ts`    | U               | ~         |
| `gap_X.ts`                    | X               | 0 (none exist in PF1e) |
| **Total**                     |                 | **1,585**  |

**Completed steps:**

1. ✅ All gap letter ranges collected (two files per letter to stay under 32k output token limit)
2. ✅ `sortGapBatches.ts` run — routed all 1,585 new spells to per-school `batch_gap_*.ts` files
3. ✅ `mergeSpells.ts` run — all batches merged into final 9 school files
4. ✅ Type-check: zero errors in `src/data/spells/`

**Remaining steps:**

5. [ ] Seed to staging: `npx tsx scripts/db/seedSpells.ts`
6. [ ] Verify in Firestore console, then seed to prod
