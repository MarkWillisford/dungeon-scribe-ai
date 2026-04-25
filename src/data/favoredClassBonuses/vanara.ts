// Vanara favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-vanaras/
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - Vanara is an ARG (Advanced Race Guide) uncommon race; entries without a citation default to ARG.
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

export const VANARA_FAVORED_CLASS_BONUSES: FavoredClassBonusOption[] = [
  {
    id: 'vanara-alchemist',
    raceName: 'Vanara',
    className: 'Alchemist',
    shortName: 'Bomb Damage',
    description: "Add +1/2 to the alchemist's bomb damage.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'bomb_damage',
      perLevelValue: { numerator: 1, denominator: 2 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'vanara-druid',
    raceName: 'Vanara',
    className: 'Druid',
    shortName: 'Wild Empathy + Handle Animal',
    description:
      'Add a +1/2 bonus on wild empathy checks and a +1/2 bonus on Handle Animal skill checks.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'wild_empathy',
          perLevelValue: { numerator: 1, denominator: 2 },
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_handle_animal',
          perLevelValue: { numerator: 1, denominator: 2 },
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'vanara-fighter',
    raceName: 'Vanara',
    className: 'Fighter',
    shortName: 'Reposition/Trip Resist',
    description: "Add +1 to the Fighter's CMD when resisting a reposition or trip attempt.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmd',
      perLevelValue: { numerator: 1, denominator: 1 },
      vsCombatManeuver: ['reposition', 'trip'],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'vanara-monk',
    raceName: 'Vanara',
    className: 'Monk',
    shortName: 'Acrobatics (Jump)',
    description: 'Add a +1 bonus on Acrobatics checks made to jump.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_acrobatics',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'checks made to jump',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'vanara-ranger',
    raceName: 'Vanara',
    className: 'Ranger',
    shortName: 'Dodge AC vs Favored Enemies',
    description: "Add +1/4 dodge bonus to Armor Class against the ranger's favored enemies.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'dodge',
      target: 'ac',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription: "against the ranger's favored enemies",
    },
    source: ARG,
    ...META,
  },
  {
    id: 'vanara-rogue',
    raceName: 'Vanara',
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
];
