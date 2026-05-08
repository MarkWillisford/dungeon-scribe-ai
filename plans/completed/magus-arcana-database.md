# Magus Arcana Database — Scraping Plan

## 2026-04-06

## Purpose

A magus selects one arcana at 3rd level and every 3 levels thereafter (3, 6, 9, 12, 15, 18).
No tier distinction — all arcana are available from the same pool. All arcana draw from the
`magusarcana` Firestore collection.

---

## Status

| Area                              | Status                                                      |
| --------------------------------- | ----------------------------------------------------------- |
| Type: `MagusArcanaEntry`          | **COMPLETE** — alias of `ClassOptionBase` (no extra fields) |
| Collection: `magusarcana`         | NOT STARTED                                                 |
| classChoiceDefinitions: magus     | NOT STARTED                                                 |
| Seed script: `seedMagusArcana.ts` | NOT STARTED                                                 |

---

## Source

Primary: **Archives of Nethys (aonprd.com)**

- Arcana index: `https://www.aonprd.com/MagusArcana.aspx`

---

## Scope (scouted 2026-04-06 from aonprd.com)

**95 total** across 11 source books — no tier distinction

| Source                            | Count | Arcana                                                                                                                                                                                                                                                                                                                    |
| --------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ultimate Magic (UM)               | 21    | Accurate Strike, Arcane Accuracy, Arcane Cloak, Close Range, Concentrate, Critical Strike, Dispelling Strike, Empowered Magic, Familiar, Hasted Assault, Maneuver Mastery, Maximized Magic, Pool Strike, Quickened Magic, Reflection, Silent Magic, Spell Blending, Spell Shield, Still Magic, Wand Mastery, Wand Wielder |
| Ultimate Combat (UC)              | 17    | Arcane Edge, Arcane Redoubt, Arcane Redoubt (Greater), Bane Blade, Devoted Blade, Disruptive, Enduring Blade, Ghost Blade, Lingering Pain, Pool Strike (Arcing), Pool Strike (Clinging), Pool Strike (Thunderous), Prescient Attack, Prescient Defense, Rod Mastery, Rod Wielder, Spellbreaker                            |
| Blood of the Moon (BM)            | 6     | Aquatic Agility, Arcane Scent, Natural Spell Combat, Rakshasa's Fortune, Spell Trickery, Spell-Scars                                                                                                                                                                                                                      |
| Ranged Tactics Toolbox (RTT)      | 5     | Dark Shifter, Pool Ray, Ranger Trap, Reach Magic, Throwing Magus                                                                                                                                                                                                                                                          |
| Disciple's Doctrine (DD)          | 3     | Book-Bound, Circle of Order, Tabris's Step                                                                                                                                                                                                                                                                                |
| Magical Marketplace (MM)          | 3     | Divinatory Strike, Ki Arcana, Scroll Mastery                                                                                                                                                                                                                                                                              |
| Monster Summoner's Handbook (MSH) | 2     | Intuitive Protection, Planar Hunter                                                                                                                                                                                                                                                                                       |
| Heroes of the Streets (HotS)      | 2     | Distant Spellstrike, Reach Spellstrike                                                                                                                                                                                                                                                                                    |
| Advanced Class Guide (ACG)        | 2     | Arcane Deed, Flamboyant Arcana                                                                                                                                                                                                                                                                                            |
| The Harrow Handbook (THH)         | 1     | Arcane Dealer                                                                                                                                                                                                                                                                                                             |
| Agents of Evil (AoE)              | 1     | Vision-Clouding Strike                                                                                                                                                                                                                                                                                                    |

_Note: Rakshasa's Fortune appears in both BM and THH — scraper should include only the BM entry
and note the duplicate in a comment._

---

## File Structure

```
src/data/magusArcana/
  index.ts                — barrel export → ALL_MAGUS_ARCANA: MagusArcanaEntry[]
  magusArcana-um.ts       — UM (21 entries)
  magusArcana-uc.ts       — UC (17 entries)
  magusArcana-supp1.ts    — ACG + BM + THH + DD (12 entries)
  magusArcana-supp2.ts    — RTT + MM + MSH + HotS + AoE (13 entries)
```

4 agents total.

---

## MagusArcanaEntry Shape (agent reference)

`MagusArcanaEntry` is a type alias for `ClassOptionBase` — no extra fields needed.

```typescript
import type { MagusArcanaEntry } from '@/types/classOptions';

export const magusArcanaUm: MagusArcanaEntry[] = [
  {
    id: 'magus-arcana-hasted-assault',
    name: 'Hasted Assault',
    description:
      'The magus can expend 1 point from his arcane pool as a swift action to gain the benefits of haste for 1 round. At 15th level, he can expend 2 points to gain the benefits of haste for a number of rounds equal to his magus level.',
    source: 'pf1e-um',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
```

---

## Source Code Mapping

| AoN Abbreviation                  | Source Code     |
| --------------------------------- | --------------- |
| Ultimate Magic (UM)               | `pf1e-um`       |
| Ultimate Combat (UC)              | `pf1e-uc`       |
| Advanced Class Guide (ACG)        | `pf1e-acg`      |
| Blood of the Moon (BM)            | `pf1e-ppc-btm`  |
| The Harrow Handbook (THH)         | `pf1e-ppc-thh`  |
| Disciple's Doctrine (DD)          | `pf1e-ppc-dd`   |
| Ranged Tactics Toolbox (RTT)      | `pf1e-ppc-rtt`  |
| Magical Marketplace (MM)          | `pf1e-ppc-mm`   |
| Monster Summoner's Handbook (MSH) | `pf1e-ppc-msh`  |
| Heroes of the Streets (HotS)      | `pf1e-ppc-hots` |
| Agents of Evil (AoE)              | `pf1e-ppc-aoe`  |

---

## classChoiceDefinitions to Write (after scraping)

```typescript
{
  id: 'magus-arcana',
  className: 'magus',
  featureName: 'Magus Arcana',
  description:
    'At 3rd level, a magus gains one magus arcana. He gains an additional magus arcana for every three levels attained after 3rd level.',
  selectionMode: { type: 'every_n_class_levels', n: 3, startLevel: 3 },
  optionSource: 'collection',
  collectionName: 'magusarcana',
  source: 'pf1e-um',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
}
```

---

## Execution Checklist

- [x] Scout AoN — 95 total across 11 sources, no tier
- [ ] Launch scraping agents (4 agents)
- [ ] Verify files close with `];` and export names correct
- [ ] Run typecheck
- [ ] Write `src/data/magusArcana/index.ts`
- [ ] Write `src/data/classChoiceDefinitions/magus.ts`
- [ ] Wire into `classChoiceDefinitions/index.ts`
- [ ] Write `scripts/db/seedMagusArcana.ts`
- [ ] Commit + PR

---

## Seed Script Notes

Follow the `seedSpells.ts` pattern. Collection name: `magusarcana`. Document ID = `entry.id`.
