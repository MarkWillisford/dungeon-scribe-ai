// Orc favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/featured-races/arg-orc
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - no citation → Advanced Race Guide (ARG)
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

export const ORC_FAVORED_CLASS_BONUSES: FavoredClassBonusEntry[] = [
  {
    id: 'orc-alchemist',
    raceName: 'Orc',
    className: 'Alchemist',
    shortName: 'Mutagen Duration',
    description: "Add +10 minutes to the duration of the alchemist's mutagens.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'mutagen',
      bumpType: 'duration',
      perLevelValue: { numerator: 10, denominator: 1 },
      conditionDescription: 'minutes of mutagen duration',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'orc-barbarian',
    raceName: 'Orc',
    className: 'Barbarian',
    shortName: 'Bonus Rage Round',
    description: "Add +1 to the barbarian's total number of rage rounds per day.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'rage_rounds',
      perLevelValue: { numerator: 1, denominator: 1 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'orc-cavalier',
    raceName: 'Orc',
    className: 'Cavalier',
    shortName: 'Bull Rush/Overrun vs Challenged',
    description:
      "Add +1 to the cavalier's CMB when making bull rush or overrun combat maneuvers against a challenged target.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmb',
      perLevelValue: { numerator: 1, denominator: 1 },
      vsCombatManeuver: ['bull_rush', 'overrun'],
      onlyWhenActive: 'challenge',
      conditionDescription: 'against a challenged target',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'orc-druid',
    raceName: 'Orc',
    className: 'Druid',
    shortName: 'Animal Companion Natural Attack Damage',
    description: "Add +1/2 to the damage dealt by the druid's animal companion's natural attacks.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'weapon_damage',
      recipient: 'animal_companion',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'natural attacks only',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'orc-fighter',
    raceName: 'Orc',
    className: 'Fighter',
    shortName: 'Death Threshold Con',
    description:
      "Add +2 to the Fighter's Constitution score for the purpose of determining when he dies from negative hit points.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'con_death_threshold',
      perLevelValue: { numerator: 2, denominator: 1 },
      conditionDescription: 'only to determine when the fighter dies from negative hit points',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'orc-ranger',
    raceName: 'Orc',
    className: 'Ranger',
    shortName: 'Animal Companion HP',
    description: "Add +1 hit point to the ranger's animal companion.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'hp',
      recipient: 'animal_companion',
      perLevelValue: { numerator: 1, denominator: 1 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'orc-witch',
    raceName: 'Orc',
    className: 'Witch',
    shortName: 'Familiar Spell',
    description: "Add one spell from the witch spell list to the witch's familiar.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_to_familiar',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'witch spell list',
    },
    source: ARG,
    ...META,
  },
];
