// Svirfneblin favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-svirfneblin
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - Svirfneblin is an ARG race → uncited entries default to Advanced Race Guide
//   - (PZO1129) → Advanced Class Guide
//   - (PZO1132) → Occult Adventures
//   - (PZO1134) → Ultimate Intrigue
//   - (PZO1135) → Adventurer's Guide

import type { FavoredClassBonusEntry } from '@/types/favoredClassBonuses';
import type { GameDataSource } from '@/types/gameData';

const ARG: GameDataSource = {
  bookId: 'arg',
  bookName: 'Advanced Race Guide',
  publisher: 'Paizo',
};

const META = {
  visibility: 'global' as const,
  isOfficial: true,
  rev: 1,
  verificationStatus: 'needs_review' as const,
};

export const SVIRFNEBLIN_FAVORED_CLASS_BONUSES: FavoredClassBonusEntry[] = [
  {
    id: 'svirfneblin-alchemist',
    raceName: 'Svirfneblin',
    className: 'Alchemist',
    shortName: 'Bonus Extract Formula',
    description:
      "Add one extract formula from the alchemist's list to the alchemist's formula book. This formula must be at least one level below the highest formula level the alchemist can create.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'extract_formula',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: "alchemist's formula list",
      spellLevelConstraint: 'at least 1 level below highest creatable',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'svirfneblin-oracle',
    raceName: 'Svirfneblin',
    className: 'Oracle',
    shortName: 'Bonus Spell Known',
    description:
      'Add one spell known from the oracle spell list. This spell must be at least one level below the highest spell level the oracle can cast.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'oracle spell list',
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'svirfneblin-ranger',
    raceName: 'Svirfneblin',
    className: 'Ranger',
    shortName: 'Companion DR/Magic',
    description:
      "Add DR 1/magic to the ranger's animal companion. Each additional time the ranger selects this benefit, the DR/magic increases +1/2 (maximum DR 10/magic). If the ranger ever replaces his animal companion, the new companion gains this DR.",
    mechanicalEffect: {
      type: 'damage_reduction',
      target: 'animal_companion',
      damageType: 'magic',
      perLevelValue: { numerator: 1, denominator: 2 },
      maxTotal: 10,
    },
    source: ARG,
    ...META,
  },
];
