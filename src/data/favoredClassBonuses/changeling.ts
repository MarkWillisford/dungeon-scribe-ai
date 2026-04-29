// Changeling favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-changeling
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - Changeling is an ARG race; no-citation entries default to Advanced Race Guide
//   - (PZO1129) → Advanced Class Guide
//   - (PZO1132) → Occult Adventures
//   - (PZO1134) → Ultimate Intrigue
//   - (PZO1135) → Adventurer's Guide

import type { FavoredClassBonusOption } from '@/types/favoredClassBonuses';
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

export const CHANGELING_FAVORED_CLASS_BONUSES: FavoredClassBonusOption[] = [
  {
    id: 'changeling-oracle',
    raceName: 'Changeling',
    className: 'Oracle',
    shortName: 'Curse CL',
    description:
      "Add +1/2 to the oracle's level for the purpose of determining the effects of the oracle's curse ability.",
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'oracle_curse',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: false,
      scopeDescription: "determining the effects of the oracle's curse ability",
    },
    source: ARG,
    ...META,
  },
  {
    id: 'changeling-rogue',
    raceName: 'Changeling',
    className: 'Rogue',
    shortName: 'Fractional Rogue Talent',
    description: 'The rogue gains 1/6 of a new rogue talent.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'rogue_talent',
      perLevelValue: { numerator: 1, denominator: 6 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'changeling-witch',
    raceName: 'Changeling',
    className: 'Witch',
    shortName: 'Familiar Bonus Spell',
    description:
      "Add one spell from the witch spell list to the witch's familiar. This spell must be at least one level below the highest spell level she can cast. If the witch ever replaces her familiar, the new familiar knows these bonus spells.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_to_familiar',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'witch spell list',
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: ARG,
    ...META,
  },
];
