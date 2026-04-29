// Goblin favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/featured-races/arg-goblin
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

export const GOBLIN_FAVORED_CLASS_BONUSES: FavoredClassBonusEntry[] = [
  {
    id: 'goblin-alchemist',
    raceName: 'Goblin',
    className: 'Alchemist',
    shortName: 'Fire Resistance',
    description:
      'The alchemist gains fire resistance 1. Each time this reward is selected, increase fire resistance by +1.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'fire_resistance',
      perLevelValue: { numerator: 1, denominator: 1 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'goblin-barbarian',
    raceName: 'Goblin',
    className: 'Barbarian',
    shortName: 'Unarmed/Natural Crit Confirm',
    description:
      'Add +1/2 on critical hit confirmation rolls for attacks made with unarmed strikes or natural weapons (maximum bonus of +4).',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'critical_confirmation',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription:
        'attacks made with unarmed strikes or natural weapons (maximum bonus of +4)',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'goblin-bard',
    raceName: 'Goblin',
    className: 'Bard',
    shortName: 'Bonus Bardic Performance Rounds',
    description: "Add +1 to the bard's total number of bardic performance rounds per day.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'bardic_performance_rounds',
      perLevelValue: { numerator: 1, denominator: 1 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'goblin-cavalier',
    raceName: 'Goblin',
    className: 'Cavalier',
    shortName: 'Mount Bonus HP',
    description:
      "Add +1 hit points to the cavalier's mount companion. If the cavalier ever replaces his mount, the new mount gains these bonus hit points.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'hit_points',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'animal_companion',
      conditionDescription: 'mount companion; transfers to replacement mount',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'goblin-druid',
    raceName: 'Goblin',
    className: 'Druid',
    shortName: 'Animal Companion Bonus HP',
    description:
      "Add +1 hit points to the druid's animal companion. If the druid ever replaces her animal companion, the new animal companion gains these bonus hit points.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'hit_points',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'animal_companion',
      conditionDescription: 'transfers to replacement animal companion',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'goblin-gunslinger',
    raceName: 'Goblin',
    className: 'Gunslinger',
    shortName: 'Firearm Crit Confirm',
    description:
      'Add +1/3 on critical hit confirmation rolls made with firearms (maximum bonus of +5).',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'critical_confirmation',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription:
        'critical hit confirmation rolls made with firearms (maximum bonus of +5)',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'goblin-oracle',
    raceName: 'Goblin',
    className: 'Oracle',
    shortName: 'Fire Spell Concentration',
    description:
      'Add +1 on concentration checks made when casting spells with the fire descriptor.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'concentration_check',
      perLevelValue: { numerator: 1, denominator: 1 },
      withDescriptor: ['fire'],
      conditionDescription: 'when casting spells with the fire descriptor',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'goblin-ranger',
    raceName: 'Goblin',
    className: 'Ranger',
    shortName: 'Dog/Horse Damage',
    description:
      'Gain a +1/2 bonus on damage dealt to dogs (and dog-like creatures) and horses (and horse-like creatures).',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'weapon_damage',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription:
        'damage dealt to dogs (and dog-like creatures) and horses (and horse-like creatures)',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'goblin-rogue',
    raceName: 'Goblin',
    className: 'Rogue',
    shortName: 'Surprise Round Sneak Attack',
    description:
      "Add a +1 bonus on the rogue's sneak attack damage rolls during the surprise round or before the target has acted in combat.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'sneak_attack_damage',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'during the surprise round or before the target has acted in combat',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'goblin-sorcerer',
    raceName: 'Goblin',
    className: 'Sorcerer',
    shortName: 'Fire Spell Known',
    description:
      'Add +1 spell known from the sorcerer spell list. This spell must be at least one level below the highest spell level the sorcerer can cast, and must have the fire descriptor.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      spellLevelConstraint:
        'at least one level below the highest spell level the sorcerer can cast',
      listConstraint: 'sorcerer spell list, must have the fire descriptor',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'goblin-summoner',
    raceName: 'Goblin',
    className: 'Summoner',
    shortName: 'Fire Eidolon Evolutions',
    description:
      "Add +1/4 evolution point to the eidolon's evolution pool. These bonus evolution points must be spent on evolutions that deal fire damage or protect the eidolon from fire.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'eidolon_evolution_pool',
      perLevelValue: { numerator: 1, denominator: 4 },
      recipient: 'eidolon',
      conditionDescription:
        'bonus evolution points must be spent on evolutions that deal fire damage or protect the eidolon from fire',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'goblin-witch',
    raceName: 'Goblin',
    className: 'Witch',
    shortName: 'Spell to Familiar',
    description:
      "Add +1 spell from the witch spell list to the witch's familiar. This spell must be at least one level below the highest spell level she can cast.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_to_familiar',
      perLevelValue: { numerator: 1, denominator: 1 },
      spellLevelConstraint: 'at least one level below the highest spell level she can cast',
      listConstraint: 'witch spell list',
    },
    source: ARG,
    ...META,
  },
];
