// Dhampir favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/featured-races/arg-dhampir
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - no citation → Advanced Race Guide (ARG race)
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

export const DHAMPIR_FAVORED_CLASS_BONUSES: FavoredClassBonusOption[] = [
  {
    id: 'dhampir-alchemist',
    raceName: 'Dhampir',
    className: 'Alchemist',
    shortName: 'Mutagen Duration',
    description: "Add +10 minutes to the duration of the alchemist's mutagens.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'mutagen',
      bumpType: 'duration',
      perLevelValue: { numerator: 10, denominator: 1 },
      conditionDescription: 'duration extended by 10 minutes per pick',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'dhampir-cleric',
    raceName: 'Dhampir',
    className: 'Cleric',
    shortName: 'Channel vs Undead CL',
    description: 'Add +1 to the caster level of any channeling feat used to affect undead.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'channeling_feat_caster_level',
      bumpType: 'other',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'adds +1 to caster level of any channeling feat used to affect undead',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'dhampir-fighter',
    raceName: 'Dhampir',
    className: 'Fighter',
    shortName: 'Stabilize Bonus',
    description: 'Add a +2 bonus on rolls to stabilize when dying.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'stabilize_check',
      perLevelValue: { numerator: 2, denominator: 1 },
      conditionDescription: 'rolls to stabilize when dying',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'dhampir-inquisitor',
    raceName: 'Dhampir',
    className: 'Inquisitor',
    shortName: 'Demoralize Humanoids',
    description: 'Add a +1/2 bonus on Intimidate checks to demoralize humanoids.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_intimidate',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'Intimidate checks to demoralize humanoids',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'dhampir-oracle',
    raceName: 'Dhampir',
    className: 'Oracle',
    shortName: 'Negative Energy Damage',
    description: '+1/2 point of negative energy damage to spells that deal negative energy damage.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'spell_damage',
      perLevelValue: { numerator: 1, denominator: 2 },
      withDamageType: ['negative_energy'],
      conditionDescription: 'spells that deal negative energy damage',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'dhampir-rogue',
    raceName: 'Dhampir',
    className: 'Rogue',
    shortName: 'Stealth/Perception Dim Light',
    description:
      'Add a +1/2 bonus on Stealth checks and Perception checks made in dim light or darkness.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_stealth',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'checks made in dim light or darkness',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_perception',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'checks made in dim light or darkness',
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'dhampir-wizard',
    raceName: 'Dhampir',
    className: 'Wizard',
    shortName: 'Necromancy CL',
    description:
      "Add +1/4 to the wizard's caster level when casting spells of the necromancy school.",
    mechanicalEffect: {
      type: 'caster_level',
      scopeType: 'full',
      schoolFilter: 'necromancy',
      targetClass: 'Wizard',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: ARG,
    ...META,
  },
];
