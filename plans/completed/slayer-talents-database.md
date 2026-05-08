# Slayer Talents Database — Scraping Plan

## 2026-04-06

## Purpose

A slayer selects one talent at 2nd level and every 2 levels thereafter (2, 4, 6, 8, 10, 12,
14, 16, 18, 20). Advanced talents unlock at level 10. All talents draw from the `slayertalents`
Firestore collection, filtered at runtime by `talentTier`.

---

## Status

| Area                                | Status                                                |
| ----------------------------------- | ----------------------------------------------------- |
| Type: `SlayerTalentEntry`           | **COMPLETE** — `talentTier: 'standard' \| 'advanced'` |
| Collection: `slayertalents`         | NOT STARTED                                           |
| classChoiceDefinitions: slayer      | NOT STARTED                                           |
| Seed script: `seedSlayerTalents.ts` | NOT STARTED                                           |

---

## Source

Primary: **Archives of Nethys (aonprd.com)**

- Talent index: `https://www.aonprd.com/SlayerTalents.aspx`

---

## Scope (scouted 2026-04-06 from aonprd.com)

**46 total** — 35 standard / 11 advanced across 11 source books

### Standard Talents (35)

| Source  | Talents                                                                                                         |
| ------- | --------------------------------------------------------------------------------------------------------------- |
| ACG (6) | Foil Scrutiny, Poison Use, Ranger Combat Style, Rogue Talent, Slowing Strike, Trapfinding                       |
| ACO (2) | Blood Reader, Studied Ally                                                                                      |
| DR (2)  | Aligned Sneak Attack, Sever Alignment                                                                           |
| DTT (1) | Catfolk Rogue Talent                                                                                            |
| EMH (4) | Castling, Extra Earthcraft, Fortified Position, Unbalancing Trick                                               |
| HG (3)  | Jaguar's Grace, Jaguar's Pounce, Jaguar's Protection                                                            |
| MAH (6) | Eternal Opposition, Experience Across Ages, Inured to Terror, Mountainside Ambush, Mystic Veil, Recall Training |
| PP (2)  | Focused Poison, Redirect Poison                                                                                 |
| SH (2)  | One of Those Faces, Scrying Familiarity                                                                         |
| UW (4)  | Sticks and Stones, Sunlight Strike, Sure Footing, Toxin Training                                                |

_DR source needs AoN verification during scraping — likely "Disciple's Doctrine" or similar._

### Advanced Talents (11, available at level 10+)

| Source  | Talents                                                                                 |
| ------- | --------------------------------------------------------------------------------------- |
| ACG (4) | Assassinate, Rogue and Ninja Advanced Talents, Slayer Camouflage, Woodland Stride       |
| CL (5)  | Armored Marauder, Armored Swiftness, Marksman's Shot, Reaping Stalker, Swallow Reversal |

_CL = Chronicle of Legends_

---

## File Structure

```
src/data/slayerTalents/
  index.ts                    — barrel export → ALL_SLAYER_TALENTS: SlayerTalentEntry[]
  slayerTalents-standard.ts   — all 35 standard talents
  slayerTalents-advanced.ts   — all 11 advanced talents
```

2 agents total.

---

## SlayerTalentEntry Shape (agent reference)

```typescript
import type { SlayerTalentEntry } from '@/types/classOptions';

export const slayerTalentsStandard: SlayerTalentEntry[] = [
  {
    id: 'slayer-talent-trapfinding',
    name: 'Trapfinding',
    talentTier: 'standard',
    description:
      'A slayer adds 1/2 his level to Perception skill checks made to locate traps and to Disable Device checks (minimum +1). A slayer can use Disable Device to disarm magical traps.',
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
```

---

## Source Code Mapping

| AoN Abbreviation                  | Source Code    |
| --------------------------------- | -------------- |
| ACG                               | `pf1e-acg`     |
| ACO (Advanced Class Origins)      | `pf1e-aco`     |
| CL (Chronicle of Legends)         | `pf1e-ppc-col` |
| DR — verify on AoN                | TBD            |
| DTT (Dirty Tactics Toolbox)       | `pf1e-ppc-dtt` |
| EMH (Elemental Master's Handbook) | `pf1e-ppc-emh` |
| HG (Heroes of Golarion)           | `pf1e-ppc-hog` |
| MAH (Martial Arts Handbook)       | `pf1e-ppc-mah` |
| PP (Potions and Poisons)          | `pf1e-ppc-pp`  |
| SH (Spymaster's Handbook)         | `pf1e-ppc-ssh` |
| UW (Ultimate Wilderness)          | `pf1e-ppc-uw`  |

---

## classChoiceDefinitions to Write (after scraping)

```typescript
{
  id: 'slayer-talent',
  className: 'slayer',
  featureName: 'Slayer Talent',
  description:
    'At 2nd level and every 2 levels thereafter, a slayer gains a slayer talent. Advanced talents are available at 10th level+.',
  selectionMode: { type: 'every_n_class_levels', n: 2, startLevel: 2 },
  optionSource: 'collection',
  collectionName: 'slayertalents',
  source: 'pf1e-acg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
}
```

Note: UI must filter by `talentTier` — standard only (<10), +advanced (10+).

---

## Execution Checklist

- [x] Scout AoN — 46 total (35 standard / 11 advanced)
- [ ] Launch scraping agents (2 agents)
- [ ] Verify files close with `];` and export names correct
- [ ] Run typecheck
- [ ] Write `src/data/slayerTalents/index.ts`
- [ ] Write `src/data/classChoiceDefinitions/slayer.ts`
- [ ] Wire into `classChoiceDefinitions/index.ts`
- [ ] Write `scripts/db/seedSlayerTalents.ts`
- [ ] Commit + PR

---

## Seed Script Notes

Follow the `seedRogueTalents.ts` pattern. Collection name: `slayertalents`. Document ID = `entry.id`.
