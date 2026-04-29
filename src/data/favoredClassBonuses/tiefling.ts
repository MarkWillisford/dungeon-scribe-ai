// Tiefling favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/featured-races/arg-tiefling
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - no citation (featured race source) → Advanced Race Guide
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

export const TIEFLING_FAVORED_CLASS_BONUSES: FavoredClassBonusOption[] = [
  {
    id: 'tiefling-alchemist',
    raceName: 'Tiefling',
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
    id: 'tiefling-cleric',
    raceName: 'Tiefling',
    className: 'Cleric',
    shortName: 'SR Check vs Outsiders',
    description:
      'Add a +1 bonus on caster level checks made to overcome the spell resistance of outsiders.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'caster_level_check_sr',
      perLevelValue: { numerator: 1, denominator: 1 },
      vsCreatureType: ['outsider'],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'tiefling-druid',
    raceName: 'Tiefling',
    className: 'Druid',
    shortName: 'Fiendish Wild Empathy',
    description:
      'Add a +1 bonus on wild empathy checks made to improve the attitude of fiendish animals.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'wild_empathy',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'fiendish animals',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'tiefling-inquisitor',
    raceName: 'Tiefling',
    className: 'Inquisitor',
    shortName: 'Intimidate + Identify Creatures',
    description:
      'Add a +1/2 bonus on Intimidate checks and Knowledge checks to identify creatures.',
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
          target: 'skill_knowledge_identify',
          perLevelValue: { numerator: 1, denominator: 2 },
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'tiefling-magus',
    raceName: 'Tiefling',
    className: 'Magus',
    shortName: 'Arcane Pool',
    description: "Add +1/4 point to the magus's arcane pool.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'arcane_pool',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'tiefling-paladin',
    raceName: 'Tiefling',
    className: 'Paladin',
    shortName: 'Lay on Hands Self-Heal',
    description:
      'Add +1 to the amount of damage the paladin heals with lay on hands, but only when the paladin uses that ability on herself.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'lay_on_hands',
      bumpType: 'other',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'only when used on self',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'tiefling-rogue',
    raceName: 'Tiefling',
    className: 'Rogue',
    shortName: 'Sneak Attack vs Outsiders',
    description: 'Add +1/2 to sneak attack damage dealt to creatures with the outsider type.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'sneak_attack_damage',
      perLevelValue: { numerator: 1, denominator: 2 },
      vsCreatureType: ['outsider'],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'tiefling-sorcerer',
    raceName: 'Tiefling',
    className: 'Sorcerer',
    shortName: 'Corrupting Touch/Claws Uses',
    description:
      'Add +1/2 to the number of times per day a sorcerer can use the corrupting touch infernal bloodline power, or +1 to the total number of rounds per day the sorcerer can use the claws abyssal bloodline power.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'feature_uses_per_day',
          featureName: 'corrupting_touch',
          perLevelValue: { numerator: 1, denominator: 2 },
          requiresPickOne: true,
          pickOneConstraint:
            'infernal bloodline only; choose between corrupting touch uses or claws rounds at selection',
        },
        {
          type: 'feature_uses_per_day',
          featureName: 'claws_bloodline_rounds',
          perLevelValue: { numerator: 1, denominator: 1 },
          requiresPickOne: true,
          pickOneConstraint:
            'abyssal bloodline only; choose between corrupting touch uses or claws rounds at selection',
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'tiefling-summoner',
    raceName: 'Tiefling',
    className: 'Summoner',
    shortName: 'Eidolon HP or Skill Rank',
    description: "Add +1 hit point or +1 skill rank to the summoner's eidolon.",
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'hit_points',
          recipient: 'eidolon',
          perLevelValue: { numerator: 1, denominator: 1 },
          requiresPickOne: true,
          pickOnePrompt: 'hit point or skill rank',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_ranks',
          recipient: 'eidolon',
          perLevelValue: { numerator: 1, denominator: 1 },
          requiresPickOne: true,
          pickOnePrompt: 'hit point or skill rank',
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'tiefling-witch',
    raceName: 'Tiefling',
    className: 'Witch',
    shortName: 'Familiar Energy Resistance',
    description:
      'The familiar gains energy resistance that increases by 1 per selection (maximum 5).',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'energy_resistance',
      recipient: 'familiar',
      perLevelValue: { numerator: 1, denominator: 1 },
      requiresPickOne: true,
      pickOnePrompt: 'energy type',
      conditionDescription: 'maximum 5 resistance',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'tiefling-wizard',
    raceName: 'Tiefling',
    className: 'Wizard',
    shortName: 'Arcane School Power Uses',
    description: 'Add +1/2 to the number of uses per day of that arcane school power.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'arcane_school_power',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'arcane school power',
    },
    source: ARG,
    ...META,
  },
];
