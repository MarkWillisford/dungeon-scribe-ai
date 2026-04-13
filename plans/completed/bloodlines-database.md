# Bloodlines Database — Scraping Plan

## 2026-04-03

## Purpose

Sorcerer (CRB) and Bloodrager (ACG) both select a bloodline at 1st level. Both classes
draw from the same `bloodlines` Firestore collection, filtered at runtime by `classIds`.
This plan covers scouting, scraping, type additions, and classChoiceDefinitions for both.

---

## Status

| Area                               | Status                                              |
| ---------------------------------- | --------------------------------------------------- |
| Type: `BloodlineEntry`             | **NEEDS `classIds` FIELD** — see Type Changes below |
| Collection: `bloodlines`           | NOT STARTED                                         |
| classChoiceDefinitions: sorcerer   | NOT STARTED                                         |
| classChoiceDefinitions: bloodrager | NOT STARTED                                         |
| Seed script: `seedBloodlines.ts`   | NOT STARTED                                         |

---

## Type Changes Required

`BloodlineEntry` in `src/types/classOptions.ts` needs a `classIds` field so the collection
can be filtered per class at runtime:

```typescript
export interface BloodlineEntry extends ClassOptionBase {
  classIds: ('sorcerer' | 'bloodrager')[]; // which classes can select this bloodline
  bloodlineArcana: string;
  powers: BloodlinePower[];
  bonusSpells: string[]; // 9 entries — index 0 = 1st-level bonus spell name
  bonusFeats: string[]; // feat names available at levels 7, 13, 19
  bloodlineSkills?: string[];
}
```

Some bloodlines appear in both classes (e.g. Draconic, Abyssal). Those entries carry
`classIds: ['sorcerer', 'bloodrager']`. Sorcerer-only entries carry `['sorcerer']`,
Bloodrager-only carry `['bloodrager']`.

---

## Source

Primary: **Archives of Nethys (aonprd.com)**

- Sorcerer bloodlines index: `https://www.aonprd.com/BloodlineDisplay.aspx`
- Bloodrager bloodlines index: `https://www.aonprd.com/BloodragerBloodlineDisplay.aspx`
- Individual bloodline pages: linked from each index

d20pfsrd fallback only if AoN 404s (rare for bloodlines).

---

## Scope (scouted 2026-04-03 from aonprd.com)

**Total entries: 99** — all separate (same-named bloodlines have different mechanics per class)

### Sorcerer Bloodlines — 75 total (51 standard + 24 Wildblooded)

#### Standard (51) — sorcerer-batch1.ts + sorcerer-batch2.ts

| Source            | Bloodlines                                                                                                                                                                    |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CRB               | Aberrant, Abyssal, Arcane, Celestial, Destined, Draconic, Elemental, Fey, Infernal, Undead                                                                                    |
| APG               | Aquatic, Boreal, Deep Earth, Dreamspun, Protean, Serpentine, Shadow, Starsoul, Stormborn, Verdant                                                                             |
| UM                | Accursed, Djinni, Efreeti, Maestro, Marid, Rakshasa, Shaitan                                                                                                                  |
| ARG               | Imperious (human only), Kobold (kobold only)                                                                                                                                  |
| Occult Adventures | Ectoplasm, Psychic                                                                                                                                                            |
| Player Companions | Daemon, Div, Ghoul, Harrow, Impossible, Martyred, Naga, Nanite, Oni, Orc, Pestilence, Phoenix, Possessed, Salamander, Scorpion, Shapechanger, Solar, Astral, Unicorn, Vestige |

#### Wildblooded (24) — sorcerer-wildblooded.ts (all from Ultimate Magic)

Aerial, Anarchic, Bedrock, Brutal, Dark Fey, Empyreal, Envenomed, Groveborn, Karmic,
Lifewater, Linnorm, Pit-Touched, Primal, Retribution, Rime-Blooded, Sage, Sanguine,
Seaborn, Shahzada, Sylvan, Umbral, Visionary, Void-Touched, Warped

Each Wildblooded entry: `id: 'sorcerer-wildblooded-<kebab-name>'`, carries a note
identifying its parent bloodline.

### Bloodrager Bloodlines — 24 total — bloodrager-batch1.ts

| Source                      | Bloodlines                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------ |
| ACG                         | Aberrant, Abyssal, Arcane, Celestial, Destined, Draconic, Elemental, Fey, Infernal, Undead |
| Advanced Class Origins      | Black Blood, Kyton                                                                         |
| Antihero's Handbook         | Martyred                                                                                   |
| Aquatic Adventures          | Aquatic                                                                                    |
| Blood of Shadows            | Shadow                                                                                     |
| Blood of the Ancients       | Vestige                                                                                    |
| Blood of the Beast          | Naga                                                                                       |
| Blood of the Coven          | Hag                                                                                        |
| Elemental Master's Handbook | Salamander                                                                                 |
| Heroes of Golarion          | Medusa, Sphinx                                                                             |
| Legacy of the First World   | Shapechanger                                                                               |
| AP #144: Midwives to Death  | Phoenix                                                                                    |
| Ultimate Wilderness         | Verdant                                                                                    |

**Important:** Sorcerer and Bloodrager versions of same-named bloodlines (e.g. Draconic,
Abyssal) have different powers, different level triggers, and different bonus spells.
They are **separate entries**: `sorcerer-draconic` vs `bloodrager-draconic`.

---

## File Structure

```
src/data/bloodlines/
  index.ts                   — barrel export → ALL_BLOODLINES: BloodlineEntry[]
  sorcerer-batch1.ts         — sorcerer standard A–I (~26 entries)
  sorcerer-batch2.ts         — sorcerer standard J–Z (~25 entries)
  sorcerer-wildblooded.ts    — all 24 Wildblooded variants
  bloodrager-batch1.ts       — all 24 bloodrager bloodlines
```

4 batch files total.

---

## BloodlineEntry Shape (agent reference)

```typescript
import type { BloodlineEntry } from '@/types/classOptions';

export const sorcererBloodlinesBatch1: BloodlineEntry[] = [
  {
    id: 'sorcerer-aberrant',
    name: 'Aberrant',
    classIds: ['sorcerer'],
    description: 'There is a taint in your blood...',
    bloodlineArcana:
      'Whenever you cast a spell of the polymorph subschool, increase the duration by 50%.',
    powers: [
      { name: 'Acidic Ray', description: '...', levelGained: 1 },
      { name: 'Long Limbs', description: '...', levelGained: 3 },
      { name: 'Unusual Anatomy', description: '...', levelGained: 9 },
      { name: 'Alien Resistance', description: '...', levelGained: 15 },
      { name: 'Tormented', description: '...', levelGained: 20 },
    ],
    bonusSpells: [
      'enlarge person', // 1st
      'see invisibility', // 2nd
      'tongues', // 3rd
      'black tentacles', // 4th
      'feeblemind', // 5th
      'veil', // 6th
      'plane shift', // 7th
      'mind blank', // 8th
      'shapechange', // 9th
    ],
    bonusFeats: [
      'Combat Casting',
      'Improved Disarm',
      'Improved Grapple',
      'Improved Initiative',
      'Improved Unarmed Strike',
      'Iron Will',
      'Silent Spell',
      'Skill Focus (Knowledge: dungeoneering)',
    ],
    bloodlineSkills: ['Knowledge (dungeoneering)'],
    source: 'pf1e-core',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
```

---

## classChoiceDefinitions to Write (after scraping)

### Sorcerer

```typescript
{
  id: 'sorcerer-bloodline',
  className: 'sorcerer',
  featureName: 'Bloodline',
  description: 'At 1st level, a sorcerer chooses a bloodline that shapes her magical abilities.',
  selectionMode: { type: 'single_at_creation' },
  optionSource: 'collection',
  collectionName: 'bloodlines',
  collectionFilter: { classIds: 'sorcerer' },
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
}
```

### Bloodrager

```typescript
{
  id: 'bloodrager-bloodline',
  className: 'bloodrager',
  featureName: 'Bloodline',
  description: 'At 1st level, a bloodrager chooses a bloodline that fuels her bloodrage.',
  selectionMode: { type: 'single_at_creation' },
  optionSource: 'collection',
  collectionName: 'bloodlines',
  collectionFilter: { classIds: 'bloodrager' },
  source: 'pf1e-acg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
}
```

---

## Execution Checklist

- [x] Add `classIds` field to `BloodlineEntry` in `src/types/classOptions.ts`
- [x] Run `npm run typecheck` — zero errors
- [x] Scout AoN sorcerer bloodlines index — 75 total (51 standard + 24 Wildblooded)
- [x] Scout AoN bloodrager bloodlines index — 24 total
- [ ] Launch scraping agents (4 agents, ~25 entries each)
  - [ ] Agent 1: sorcerer-batch1.ts — sorcerer standard A–I (~26 entries)
  - [ ] Agent 2: sorcerer-batch2.ts — sorcerer standard J–Z (~25 entries)
  - [ ] Agent 3: sorcerer-wildblooded.ts — all 24 Wildblooded variants
  - [ ] Agent 4: bloodrager-batch1.ts — all 24 bloodrager bloodlines
- [ ] Verify all files close with `];` and export names are correct
- [ ] Run typecheck — fix any invalid field shapes
- [ ] Write `src/data/bloodlines/index.ts`
- [ ] Write `src/data/classChoiceDefinitions/sorcerer.ts`
- [ ] Write `src/data/classChoiceDefinitions/bloodrager.ts`
- [ ] Wire both into `classChoiceDefinitions/index.ts`
- [ ] Write `scripts/db/seedBloodlines.ts`
- [ ] Commit + PR

---

## Seed Script Notes

Follow the `seedSpells.ts` pattern: firebase-admin, batch writes, idempotent upsert.
Collection name: `bloodlines`. Document ID = `entry.id`.
