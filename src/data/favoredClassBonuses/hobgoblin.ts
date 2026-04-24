// Hobgoblin favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/featured-races/arg-hobgoblin
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - no citation → Advanced Race Guide (ARG)
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

const ACG: GameDataSource = {
  bookId: 'acg',
  bookName: 'Advanced Class Guide',
  publisher: 'Paizo',
};

const OA: GameDataSource = {
  bookId: 'oa',
  bookName: 'Occult Adventures',
  publisher: 'Paizo',
};

const UI: GameDataSource = {
  bookId: 'ui',
  bookName: 'Ultimate Intrigue',
  publisher: 'Paizo',
};

const ADV_GUIDE: GameDataSource = {
  bookId: 'adventurers-guide',
  bookName: "Adventurer's Guide",
  publisher: 'Paizo',
};

// Suppress unused-var warnings for source consts imported for completeness.
void ACG;
void OA;
void UI;
void ADV_GUIDE;

const META = {
  visibility: 'global' as const,
  isOfficial: true,
  rev: 1,
  verificationStatus: 'needs_review' as const,
};

export const HOBGOBLIN_FAVORED_CLASS_BONUSES: FavoredClassBonusOption[] = [
  {
    id: 'hobgoblin-alchemist',
    raceName: 'Hobgoblin',
    className: 'Alchemist',
    shortName: 'Bonus Bombs/Day',
    description: 'Add +1/2 to the number of bombs per day the alchemist can create.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'bombs',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: false,
    },
    source: ARG,
    ...META,
  },
  {
    id: 'hobgoblin-cavalier',
    raceName: 'Hobgoblin',
    className: 'Cavalier',
    shortName: 'Intimidate/Ride Bonus',
    description: 'Add a +1/2 bonus on Intimidate checks and Ride checks.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_intimidate',
          perLevelValue: { numerator: 1, denominator: 2 },
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_ride',
          perLevelValue: { numerator: 1, denominator: 2 },
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'hobgoblin-cleric',
    raceName: 'Hobgoblin',
    className: 'Cleric',
    shortName: 'Negative Energy Damage',
    description: 'Add +1/2 to negative energy spell damage, including inflict spells.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'spell_damage',
      perLevelValue: { numerator: 1, denominator: 2 },
      withDescriptor: ['negative_energy'],
      conditionDescription: 'negative energy spells, including inflict spells',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'hobgoblin-fighter',
    raceName: 'Hobgoblin',
    className: 'Fighter',
    shortName: 'Crit Confirm with Chosen Weapon',
    description:
      "Add a +1/2 circumstance bonus on critical hit confirmation rolls with a weapon of the Fighter's choice (maximum bonus +4).",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'circumstance',
      target: 'critical_confirmation',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'weapon',
      conditionDescription: 'maximum bonus +4',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'hobgoblin-gunslinger',
    raceName: 'Hobgoblin',
    className: 'Gunslinger',
    shortName: 'Bonus Grit',
    description: "Add +1/4 to the gunslinger's grit points.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'grit',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'hobgoblin-inquisitor',
    raceName: 'Hobgoblin',
    className: 'Inquisitor',
    shortName: 'Inquisitor Spell Concentration',
    description: 'Add a +1 bonus on concentration checks made to cast inquisitor spells.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'concentration_check',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'when casting inquisitor spells',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'hobgoblin-monk',
    raceName: 'Hobgoblin',
    className: 'Monk',
    shortName: 'Grapple/Trip CMB',
    description: 'Add a +1/4 bonus on combat maneuver checks made to grapple or trip.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmb',
      perLevelValue: { numerator: 1, denominator: 4 },
      vsCombatManeuver: ['grapple', 'trip'],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'hobgoblin-ranger',
    raceName: 'Hobgoblin',
    className: 'Ranger',
    shortName: 'Favored Enemy Bump',
    description:
      'Add +1/4 to a single existing favored enemy bonus (maximum bonus +1 per favored enemy).',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'favored_enemy',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription: 'single existing favored enemy; maximum bonus +1 per favored enemy',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'hobgoblin-rogue',
    raceName: 'Hobgoblin',
    className: 'Rogue',
    shortName: 'Weapon Proficiency Chip',
    description:
      'Reduce the penalty for not being proficient with one weapon by 1. When the nonproficiency penalty for a weapon becomes 0 because of this ability, the rogue is treated as having the appropriate Martial or Exotic Weapon Proficiency feat.',
    mechanicalEffect: {
      type: 'weapon_proficiency_chip',
      perLevelValue: { numerator: 1, denominator: 1 },
      requiresPickOne: true,
      unlockProficiencyAtZero: true,
    },
    source: ARG,
    ...META,
  },
];
