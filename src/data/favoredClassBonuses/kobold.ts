// Kobold favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/featured-races/arg-kobold
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - no citation → Advanced Race Guide (ARG is Kobold's home book)
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

export const KOBOLD_FAVORED_CLASS_BONUSES: FavoredClassBonusEntry[] = [
  {
    id: 'kobold-alchemist',
    raceName: 'Kobold',
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
    id: 'kobold-barbarian',
    raceName: 'Kobold',
    className: 'Barbarian',
    shortName: 'Raging Natural Attack Damage',
    description: 'While you are raging, your racial natural attacks deal +1/4 point of damage.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'natural_attack_damage',
      perLevelValue: { numerator: 1, denominator: 4 },
      onlyWhenActive: 'rage',
      conditionDescription: 'racial natural attacks only',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kobold-bard',
    raceName: 'Kobold',
    className: 'Bard',
    shortName: 'Fascinate CL',
    description:
      "Treat the bard's level as +1/2 level higher for the purpose of determining the effect of the fascinate bardic performance.",
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'bardic_performance_fascinate',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: false,
      scopeDescription: 'fascinate bardic performance only',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kobold-cavalier',
    raceName: 'Kobold',
    className: 'Cavalier',
    shortName: 'Mount Charge/Withdraw Speed',
    description:
      "Add 5 feet (up to 15 feet maximum) to the cavalier's mount's speed when it uses the charge or withdraw action.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'mount_speed',
      recipient: 'animal_companion',
      perLevelValue: { numerator: 5, denominator: 1 },
      applyInIncrementsOf: 5,
      conditionDescription: "mount's speed on charge or withdraw action only; maximum +15 feet",
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kobold-cleric',
    raceName: 'Kobold',
    className: 'Cleric',
    shortName: 'Channel vs Flat-Footed',
    description:
      '+1 to channel energy damage dealt to creatures denied their Dexterity bonus to AC.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'channel_energy_damage',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'creatures denied their Dexterity bonus to AC',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kobold-druid',
    raceName: 'Kobold',
    className: 'Druid',
    shortName: 'Wild Empathy Bonus',
    description: "Add +1/2 to the druid's wild empathy bonus.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'wild_empathy',
      perLevelValue: { numerator: 1, denominator: 2 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kobold-fighter',
    raceName: 'Kobold',
    className: 'Fighter',
    shortName: 'Flank/Flat-Footed Damage',
    description:
      'Add +1/2 to damage rolls the fighter makes with weapon attacks against an opponent he is flanking or an opponent that is denied its Dexterity bonus to AC.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'weapon_damage',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription:
        'opponent the fighter is flanking or an opponent denied its Dexterity bonus to AC',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kobold-gunslinger',
    raceName: 'Kobold',
    className: 'Gunslinger',
    shortName: 'Nimble AC Bonus',
    description:
      'Add +1/4 to the dodge bonus to AC granted by the nimble class feature (maximum +4).',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'nimble',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription: 'dodge bonus to AC; maximum +4',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kobold-inquisitor',
    raceName: 'Kobold',
    className: 'Inquisitor',
    shortName: 'Track in Darkness',
    description: '1/2 to Survival checks made to track creatures in total darkness.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_survival',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'tracking creatures in total darkness',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kobold-magus',
    raceName: 'Kobold',
    className: 'Magus',
    shortName: 'Defensive Casting Concentration',
    description: 'Add a +1/2 bonus on concentration checks made to cast defensively.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'concentration_check',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'cast defensively',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kobold-monk',
    raceName: 'Kobold',
    className: 'Monk',
    shortName: 'Monk AC Bonus',
    description: "Add +1/3 to the monk's AC bonus class ability.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'monk_ac_bonus',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 3 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kobold-oracle',
    raceName: 'Kobold',
    className: 'Oracle',
    shortName: 'Self-Buff Armor Bonus',
    description:
      'Add +1/4 to the armor or natural armor bonus granted by oracle spells she casts on herself.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'armor_or_natural_armor',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription: 'oracle spells cast on herself only',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kobold-paladin',
    raceName: 'Kobold',
    className: 'Paladin',
    shortName: 'Smite Deflection Bonus',
    description: '1/4 to the deflection bonus granted by your smite evil ability.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'smite_evil',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription: 'deflection bonus granted by smite evil',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kobold-ranger',
    raceName: 'Kobold',
    className: 'Ranger',
    shortName: "Hunter's Bond Allies",
    description:
      "Add +1/4 to the number of opponents the ranger may select when using hunter's bond to grant a bonus to allies. All selected creatures must be of the same type.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'hunters_bond',
      bumpType: 'other',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription:
        "number of opponents selected when using hunter's bond to grant bonus to allies; all selected must be of the same type",
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kobold-rogue',
    raceName: 'Kobold',
    className: 'Rogue',
    shortName: 'Trap Sense AC',
    description: "Add +1/2 to the rogue's trap sense bonus to AC.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'trap_sense',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'bonus to AC only',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kobold-sorcerer',
    raceName: 'Kobold',
    className: 'Sorcerer',
    shortName: 'Chosen Energy Damage',
    description:
      'Choose acid, cold, electricity, or fire damage. Add +1/2 point of the chosen energy damage to spells that deal the chosen energy damage cast by the sorcerer.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'spell_damage',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'energy type (acid, cold, electricity, or fire)',
      conditionDescription: 'spells that deal the chosen energy damage',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kobold-summoner',
    raceName: 'Kobold',
    className: 'Summoner',
    shortName: 'Shield Ally Bonus',
    description: "Add +1/4 to the summoner's shield ally bonus (maximum +2).",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'shield_ally',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription: 'maximum +2',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kobold-witch',
    raceName: 'Kobold',
    className: 'Witch',
    shortName: 'Familiar Alertness Range',
    description:
      'Add +5 feet to the distance at which her familiar grants the Alertness feat (maximum +20 feet).',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'familiar_alertness_range',
      bumpType: 'other',
      perLevelValue: { numerator: 5, denominator: 1 },
      conditionDescription: 'distance at which familiar grants Alertness; maximum +20 feet',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kobold-wizard',
    raceName: 'Kobold',
    className: 'Wizard',
    shortName: 'Familiar Enchantment Save or Bonded Item HP',
    description:
      "Add 1/2 to your familiar's Will saves against enchantment effects, or increase the hit points of your bonded item by 1.",
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'will_save',
          recipient: 'familiar',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'vs enchantment effects',
        },
        {
          type: 'feature_numeric_bump',
          featureName: 'bonded_item_hp',
          bumpType: 'other',
          perLevelValue: { numerator: 1, denominator: 1 },
          conditionDescription: 'hit points of bonded item',
        },
      ],
    },
    source: ARG,
    ...META,
  },
];
