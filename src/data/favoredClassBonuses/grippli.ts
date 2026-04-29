// Grippli favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-grippli
// Grippli is an ARG (Advanced Race Guide) uncommon race. Per the attribution convention:
//   - no citation on ARG uncommon race entries → Advanced Race Guide
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

export const GRIPPLI_FAVORED_CLASS_BONUSES: FavoredClassBonusOption[] = [
  {
    id: 'grippli-alchemist',
    raceName: 'Grippli',
    className: 'Alchemist',
    shortName: 'Toxic Skin Uses',
    description: 'Add +1/4 to the number of toxic skin uses per day.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'toxic_skin',
      perLevelValue: { numerator: 1, denominator: 4 },
      requiresPickOne: false,
    },
    source: ARG,
    ...META,
  },
  {
    id: 'grippli-barbarian',
    raceName: 'Grippli',
    className: 'Barbarian',
    shortName: 'Hide/Bone Armor Bonus',
    description:
      'Add 1/5 to the armor bonus granted by hide armor or bone armor the barbarian wears (maximum +3).',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'armor',
      target: 'ac',
      perLevelValue: { numerator: 1, denominator: 5 },
      conditionDescription:
        'applies only to the armor bonus of hide or bone armor worn by the barbarian; maximum +3',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'grippli-bard',
    raceName: 'Grippli',
    className: 'Bard',
    shortName: 'Bardic Performance Range',
    description: 'Add 5 feet to the range of one bardic performance.',
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'bardic_performance',
      perLevelValue: { numerator: 5, denominator: 1 },
      requiresPickOne: true,
      pickOnePrompt: 'bardic performance',
      scopeDescription: 'adds 5 feet to the range of the chosen performance per selection',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'grippli-druid',
    raceName: 'Grippli',
    className: 'Druid',
    shortName: 'Concentration (Forest/Swamp)',
    description:
      'Add a +1/2 bonus on concentration checks. This bonus doubles in a forest or swamp terrain.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'concentration_check',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'bonus doubles in forest or swamp terrain',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'grippli-medium',
    raceName: 'Grippli',
    className: 'Medium',
    shortName: 'Spirit Surge Checks',
    description: "Add 1/4 to any checks modified by the medium's spirit surge ability.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'spirit_surge',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription: 'applies to any checks modified by spirit surge',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'grippli-oracle',
    raceName: 'Grippli',
    className: 'Oracle',
    shortName: 'Druid Poison/Water Spell Known',
    description:
      "Add one spell known with the poison or water descriptor from the druid's spell list. This spell must be at least 1 level below the highest spell level the oracle can cast. The spell is treated as 1 spell level higher, unless it is also on the oracle spell list.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      spellLevelConstraint: 'at least 1 level below highest castable',
      listConstraint:
        'druid spell list with poison or water descriptor; treated as 1 spell level higher unless also on the oracle spell list',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'grippli-gunslinger',
    raceName: 'Grippli',
    className: 'Gunslinger',
    shortName: 'Utility/Dead Shot Attack',
    description: 'Add a +1/4 bonus on attack rolls when making a utility shot or a dead shot.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'attack_roll',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription: 'when making a utility shot or a dead shot',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'grippli-rogue',
    raceName: 'Grippli',
    className: 'Rogue',
    shortName: 'Perception (Forest/Swamp)',
    description: 'Add a +1/2 bonus on Perception checks while in a forest or swamp.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_perception',
      perLevelValue: { numerator: 1, denominator: 2 },
      inTerrain: ['forest', 'swamp'],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'grippli-ranger',
    raceName: 'Grippli',
    className: 'Ranger',
    shortName: 'Swim Bonus + Swim Speed',
    description:
      'Add a +1 racial bonus on Swim skill checks. When this bonus reaches +8, the ranger gains a swim speed of 15 feet (this does not grant the ranger another +8 racial bonus on Swim checks).',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'racial',
      target: 'skill_swim',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription:
        'when accumulated bonus reaches +8, the ranger gains a 15 ft. swim speed (no additional +8 racial bonus is granted by the swim speed)',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'grippli-shaman',
    raceName: 'Grippli',
    className: 'Shaman',
    shortName: 'Druid Spell Known',
    description:
      "Add one spell from the druid spell list that isn't on the shaman spell list to the list of spells the shaman knows. This spell must be at least 1 level below the highest spell level the shaman can cast.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      spellLevelConstraint: 'at least 1 level below highest castable',
      listConstraint: 'druid spell list, must not be on the shaman spell list',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'grippli-skald',
    raceName: 'Grippli',
    className: 'Skald',
    shortName: 'Raging Song Rounds',
    description: "Increase the skald's total number of raging song rounds per day by 1.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'raging_song_rounds',
      perLevelValue: { numerator: 1, denominator: 1 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'grippli-slayer',
    raceName: 'Grippli',
    className: 'Slayer',
    shortName: 'Bone Weapon Damage',
    description: 'Add 1/3 to the damage the slayer deals with bone weapons (maximum +4).',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'weapon_damage',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription: 'only when wielding bone weapons; maximum +4',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'grippli-swashbuckler',
    raceName: 'Grippli',
    className: 'Swashbuckler',
    shortName: 'Derring-Do Skills',
    description:
      "Add 1/2 to the swashbuckler's Acrobatics, Climb, Escape Artist, Fly, Ride, and Swim checks when using the derring-do deed.",
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_acrobatics',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'only when using the derring-do deed',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_climb',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'only when using the derring-do deed',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_escape_artist',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'only when using the derring-do deed',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_fly',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'only when using the derring-do deed',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_ride',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'only when using the derring-do deed',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_swim',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'only when using the derring-do deed',
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'grippli-witch',
    raceName: 'Grippli',
    className: 'Witch',
    shortName: 'Familiar Poison DC',
    description: "Add 1/3 to the saving throw DC to resist the poison of the witch's familiar.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'familiar_poison_dc',
      bumpType: 'other',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription: "saving throw DC to resist the witch's familiar poison",
    },
    source: ARG,
    ...META,
  },
];
