# Witch Hexes Database — Scraping Plan

## 2026-04-04

## Purpose

Witch hexes are selected at every even level (2, 4, 6, ..., 18) with major hexes unlocked
at level 10 and grand hexes at level 18. All hexes draw from the `hexes` Firestore collection,
filtered at runtime by `hexTier`. The Shaman class also uses hexes from this same collection.

---

## Status

| Area                          | Status                              |
| ----------------------------- | ----------------------------------- | ------- | -------- |
| Type: `HexEntry`              | **COMPLETE** — `hexTier: 'standard' | 'major' | 'grand'` |
| Collection: `hexes`           | NOT STARTED                         |
| classChoiceDefinitions: witch | NOT STARTED                         |
| Seed script: `seedHexes.ts`   | NOT STARTED                         |

---

## Source

Primary: **Archives of Nethys (aonprd.com)**

- Hex index: `https://www.aonprd.com/HexDisplay.aspx`
- Individual hex pages linked from index

---

## Scope (scouted 2026-04-04 from aonprd.com)

**104 total** — 60 standard / 31 major / 13 grand across 19 source books

### Standard Hexes (60)

Ameliorating, Aura of Purity, Beast of Ill-Omen, Blight, Cackle, Cauldron, Charm, Child-Scent,
City Sight, Combat Hypnosis, Congeal, Coven, Cursed Wound, Dark Apothecary, Deathcall, Discord,
Disguise, Disrupt Connection, Distraction, Enemy Ground, Evil Eye, Feral Speech, Flight, Floating
Lotus, Fortune, Gift of Consumption, Greater Gift of Consumption, Healing, Heralding Bloom,
Iceplant, Leshy Summoning, Minor Prophecy, Misfortune, Mother's Eye, Mud Witch\*, Murksight,
Nails, No Place Like Home, Peacebond, Poison Steep, Poison Touch, Pollute Water, Polluting
Glance, Prehensile Hair, Protective Luck, Scar, Seduction, Sink, Slumber, Soothsayer,
Summer's Heat, Swamp Hag, Swamp's Grasp, Swine, Tongues, Unnerve Beasts, Verdant Familiar,
Ward, Water Lung, Witch's Bottle

\*Mud Witch: Goblin only. Steal Voice (major): Tiefling only.

### Major Hexes (31, available at level 10+)

Agony, Animal Skin, Beast Eye, Beast's Gift, Cook People, Delicious Fright, Drugged,
False Hospitality, Hag's Eye, Harrowing Curse, Hidden Home, Hoarfrost, Ice Tomb,
Infected Wounds, Major Ameliorating, Major Healing, Nightmares, Pariah, Prophecy,
Regenerative Sinew, Restless Slumber, Retribution, Speak in Dreams, Steal Voice\*,
Vision, Waxen Image, Weather Control, Witch's Bounty, Witch's Brew, Witch's Charge, Withering

### Grand Hexes (13, available at level 18+)

Abominate, Animal Servant, Curse of Nonviolence, Death Curse, Death Interrupted, Dire Prophecy,
Eternal Slumber, Forced Reincarnation, Lay to Rest, Life Giver, Natural Disaster, Summon Spirit,
Witch's Hut

---

## File Structure

```
src/data/hexes/
  index.ts          — barrel export → ALL_HEXES: HexEntry[]
  hexes-batch1.ts   — standard hexes A–F (30 entries: Ameliorating → Fortune)
  hexes-batch2.ts   — standard hexes G–W (30 entries: Gift of Consumption → Witch's Bottle)
  hexes-major.ts    — all 31 major hexes
  hexes-grand.ts    — all 13 grand hexes
```

4 agents total.

---

## HexEntry Shape (agent reference)

```typescript
import type { HexEntry } from '@/types/classOptions';

export const hexesBatch1: HexEntry[] = [
  {
    id: 'hex-cackle',
    name: 'Cackle',
    hexTier: 'standard',
    description:
      'A witch can cackle madly as a move action. Any creature that is within 30 feet that is under the effects of an agony hex, charm hex, evil eye hex, fortune hex, or misfortune hex caused by the witch has the duration of that hex extended by 1 round.',
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
```

---

## classChoiceDefinitions to Write (after scraping)

```typescript
{
  id: 'witch-hex',
  className: 'witch',
  featureName: 'Hex',
  description:
    'At 1st level, a witch gains one hex. She gains an additional hex at 2nd level and every 2 levels thereafter. She cannot select the same hex twice. Major hexes are available at 10th level+, grand hexes at 18th level+.',
  selectionMode: { type: 'at_class_levels', levels: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20] },
  optionSource: 'collection',
  collectionName: 'hexes',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
}
```

Note: The UI must filter by hexTier based on current class level:

- levels 1–9: standard only
- levels 10–17: standard + major
- levels 18–20: standard + major + grand

---

## Execution Checklist

- [x] Scout AoN hex index — 104 total (60 standard / 31 major / 13 grand)
- [ ] Launch scraping agents (4 agents)
- [ ] Verify files close with `];` and export names correct
- [ ] Run typecheck
- [ ] Write `src/data/hexes/index.ts`
- [ ] Write `src/data/classChoiceDefinitions/witch.ts`
- [ ] Wire into `classChoiceDefinitions/index.ts`
- [ ] Write `scripts/db/seedHexes.ts`
- [ ] Commit + PR

---

## Seed Script Notes

Follow the `seedSpells.ts` pattern. Collection name: `hexes`. Document ID = `entry.id`.
