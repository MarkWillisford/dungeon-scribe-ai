# Ninja Tricks Database — Scraping Plan

## 2026-04-06

## Purpose

A ninja selects one trick at 2nd level and every 2 levels thereafter (2, 4, 6, 8, 10, 12,
14, 16, 18, 20). Master tricks unlock at level 10. All tricks draw from the `ninjatricks`
Firestore collection, filtered at runtime by `trickTier`.

Note: The "Rogue Talent" ninja trick lets a ninja select from the `roguetalents` collection,
but the ninja trick pool itself is a separate collection.

---

## Status

| Area                              | Status                                             |
| --------------------------------- | -------------------------------------------------- |
| Type: `NinjaTrickEntry`           | **COMPLETE** — `trickTier: 'standard' \| 'master'` |
| Collection: `ninjatricks`         | NOT STARTED                                        |
| classChoiceDefinitions: ninja     | NOT STARTED                                        |
| Seed script: `seedNinjaTricks.ts` | NOT STARTED                                        |

---

## Source

Primary: **Archives of Nethys (aonprd.com)**

- Trick index: `https://www.aonprd.com/NinjaTricks.aspx`

---

## Scope (scouted 2026-04-06 from aonprd.com)

**61 total** — 37 standard / 24 master across 6 source books

### Standard Tricks (37)

**Ultimate Combat (28):**
Acrobatic Master, Bleeding Attack, Combat Trick, Darkvision, Deadly Range, Deflect Arrows,
Fast Stealth, Feather Fall, Flurry of Stars, Forgotten Trick, Hidden Weapons, High Jumper,
Ki Block, Poison Bomb, Pressure Points, Rogue Talent, Shadow Clone, Slow Metabolism,
Slow Reactions, Smoke Bomb, Snatch Arrows, Style Master, Sudden Disguise, Undetected
Sabotage, Vanishing Trick, Ventriloquism, Wall Climber, Weapon Training

**Other Sources (9):**
Arcane Backfire (HftF), Blood Debt (CoB), Breath of the Ancestors (LoD),
Choking Bomb (UC), Herbal Compound (MAH), Ki Venom (MAH), Strangler (MAH),
Swarming Attack (HftF), Swift Poisoner (MAH)

### Master Tricks (24, available at level 10+)

**Ultimate Combat (13):**
Advanced Talent, Assassinate, Blinding Bomb, Deadly Shuriken, Evasion, Feat,
Ghost Step, Invisible Blade, Master Disguise, See the Unseen, Shadow Split,
Unarmed Combat Mastery, Unbound Steps

**Other Sources (11):**
Acceleration of Form (CoL), All the Stars in the Sky (CoL), Deep Cover (MAH),
False Face (CoL), Fractured Mirror (CoL), Greater Ki Venom (MAH), Kami Warden (CoL),
Kawarimi (CoB), Many Guises (MAH), Occulted Soul (MAH), Spiritual Companion (CoL)

---

## File Structure

```
src/data/ninjaTricks/
  index.ts                — barrel export → ALL_NINJA_TRICKS: NinjaTrickEntry[]
  ninjaTricks-standard.ts — all 37 standard tricks
  ninjaTricks-master.ts   — all 24 master tricks
```

2 agents total.

---

## NinjaTrickEntry Shape (agent reference)

```typescript
import type { NinjaTrickEntry } from '@/types/classOptions';

export const ninjaTricksStandard: NinjaTrickEntry[] = [
  {
    id: 'ninja-trick-vanishing-trick',
    name: 'Vanishing Trick',
    trickTier: 'standard',
    description:
      'As a swift action, the ninja can disappear for 1 round per level. This ability functions as invisibility. Using this ability uses up 1 ki point.',
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
```

---

## Source Code Mapping

| AoN Abbreviation       | Source Code    |
| ---------------------- | -------------- |
| Ultimate Combat        | `pf1e-uc`      |
| Chronicle of Legends   | `pf1e-ppc-col` |
| Martial Arts Handbook  | `pf1e-ppc-mah` |
| Heroes from the Fringe | `pf1e-ppc-hff` |
| Champions of Balance   | `pf1e-ppc-cob` |
| Legacy of Dragons      | `pf1e-ppc-lod` |

---

## classChoiceDefinitions to Write (after scraping)

```typescript
{
  id: 'ninja-trick',
  className: 'ninja',
  featureName: 'Ninja Trick',
  description:
    'Starting at 2nd level, a ninja gains one ninja trick. She gains an additional ninja trick for every 2 levels attained after 2nd. Master tricks are available at 10th level+.',
  selectionMode: { type: 'every_n_class_levels', n: 2, startLevel: 2 },
  optionSource: 'collection',
  collectionName: 'ninjatricks',
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
}
```

Note: UI must filter by `trickTier` — standard only (<10), +master (10+).

---

## Execution Checklist

- [x] Scout AoN — 61 total (37 standard / 24 master)
- [ ] Launch scraping agents (2 agents)
- [ ] Verify files close with `];` and export names correct
- [ ] Run typecheck
- [ ] Write `src/data/ninjaTricks/index.ts`
- [ ] Write `src/data/classChoiceDefinitions/ninja.ts`
- [ ] Wire into `classChoiceDefinitions/index.ts`
- [ ] Write `scripts/db/seedNinjaTricks.ts`
- [ ] Commit + PR

---

## Seed Script Notes

Follow the `seedRogueTalents.ts` pattern. Collection name: `ninjatricks`. Document ID = `entry.id`.
