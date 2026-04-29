// Fetchling favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/featured-races/arg-fetchling
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - no citation, ARG race → Advanced Race Guide
//   - (PZO1129) → Advanced Class Guide
//   - (PZO1132) → Occult Adventures
//   - (PZO1134) → Ultimate Intrigue
//   - (PZO1135) → Adventurer's Guide
//   - (PZO9466) → Blood of Shadows

import type { FavoredClassBonusEntry } from '@/types/favoredClassBonuses';
import type { GameDataSource } from '@/types/gameData';

const ARG: GameDataSource = {
  bookId: 'arg',
  bookName: 'Advanced Race Guide',
  publisher: 'Paizo',
};

const BLOOD_OF_SHADOWS: GameDataSource = {
  bookId: 'blood-of-shadows',
  bookName: 'Blood of Shadows',
  publisher: 'Paizo',
};

const META = {
  visibility: 'global' as const,
  isOfficial: true,
  rev: 1,
  verificationStatus: 'needs_review' as const,
};

export const FETCHLING_FAVORED_CLASS_BONUSES: FavoredClassBonusEntry[] = [
  {
    id: 'fetchling-alchemist',
    raceName: 'Fetchling',
    className: 'Alchemist',
    shortName: 'Poison Craft + DC',
    description:
      'Add +1 to Craft (alchemy) checks to craft poison and +1/4 to the DCs of poisons the alchemist creates.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_craft_alchemy',
          perLevelValue: { numerator: 1, denominator: 1 },
          conditionDescription: 'checks to craft poison',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'poison_dc',
          perLevelValue: { numerator: 1, denominator: 4 },
          conditionDescription: 'poisons the alchemist creates',
        },
      ],
    },
    source: BLOOD_OF_SHADOWS,
    ...META,
  },
  {
    id: 'fetchling-arcanist',
    raceName: 'Fetchling',
    className: 'Arcanist',
    shortName: 'Shadow Illusion Damage %',
    description:
      'When the arcanist casts an illusion (shadow) spell that deals a percentage of its damage or effect against nonbelievers, increase this amount by 2% (to a maximum of 100%).',
    mechanicalEffect: {
      type: 'unmapped',
      reason:
        'Increases the shadow illusion real-damage percentage against nonbelievers by 2% per pick (cap 100%). Requires a spell-casting hook that rewrites shadow illusion percentage values; not modeled by existing FCB variants.',
    },
    source: BLOOD_OF_SHADOWS,
    ...META,
  },
  {
    id: 'fetchling-barbarian',
    raceName: 'Fetchling',
    className: 'Barbarian',
    shortName: 'Rage Cold/Electricity Resist',
    description:
      'Add +1 to either cold or electricity resistance while raging (maximum resistance 15 for either type).',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'energy_resistance',
      perLevelValue: { numerator: 1, denominator: 1 },
      requiresPickOne: true,
      pickOnePrompt: 'cold or electricity',
      onlyWhenActive: 'rage',
      conditionDescription: 'maximum resistance 15 for either type',
    },
    source: BLOOD_OF_SHADOWS,
    ...META,
  },
  {
    id: 'fetchling-bard',
    raceName: 'Fetchling',
    className: 'Bard',
    shortName: 'Disguise Self Disguise',
    description: 'Add a +1 bonus on Disguise checks when using disguise self.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_disguise',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'when using disguise self',
    },
    source: BLOOD_OF_SHADOWS,
    ...META,
  },
  {
    id: 'fetchling-cleric',
    raceName: 'Fetchling',
    className: 'Cleric',
    shortName: 'Negative Energy Damage',
    description:
      'Add 1/2 point to negative energy damage dealt by channeling energy and inflict wounds spells.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'channel_energy_damage',
          perLevelValue: { numerator: 1, denominator: 2 },
          withDescriptor: ['negative_energy'],
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'spell_damage',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'inflict wounds spells',
        },
      ],
    },
    source: BLOOD_OF_SHADOWS,
    ...META,
  },
  {
    id: 'fetchling-druid',
    raceName: 'Fetchling',
    className: 'Druid',
    shortName: 'Companion Cold/Elec Resist',
    description:
      "The druid's animal companion gains resistance 1 against either cold or electricity. Each time the druid selects this reward, he increases his animal companion's resistance to one of those energy types by 1 (maximum 10 for any one energy type).",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'energy_resistance',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'animal_companion',
      requiresPickOne: true,
      pickOnePrompt: 'cold or electricity (selected each time)',
      conditionDescription: 'maximum 10 for any one energy type',
    },
    source: BLOOD_OF_SHADOWS,
    ...META,
  },
  {
    id: 'fetchling-fighter',
    raceName: 'Fetchling',
    className: 'Fighter',
    shortName: 'Slashing Weapon Crit Confirm',
    description:
      'Choose a slashing melee weapon. Add +1/2 to critical hit confirmation rolls made while using that weapon (maximum bonus of +4). This bonus does not stack with Critical Focus.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'critical_confirm',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'slashing melee weapon',
      conditionDescription: 'maximum bonus of +4; does not stack with Critical Focus',
    },
    source: BLOOD_OF_SHADOWS,
    ...META,
  },
  {
    id: 'fetchling-gunslinger',
    raceName: 'Fetchling',
    className: 'Gunslinger',
    shortName: 'Bonus Grit',
    description: "Add 1/4 point to the gunslinger's grit.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'grit',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: BLOOD_OF_SHADOWS,
    ...META,
  },
  {
    id: 'fetchling-hunter',
    raceName: 'Fetchling',
    className: 'Hunter',
    shortName: 'Companion DR/Magic',
    description:
      "The hunter's animal companion gains DR 1/ magic. Each additional time the hunter selects this benefit, the DR increases by +1/2 (maximum DR 10/magic). If the hunter ever replaces his animal companion, the new animal companion gains this DR.",
    mechanicalEffect: {
      type: 'damage_reduction',
      target: 'animal_companion',
      damageType: 'magic',
      perLevelValue: { numerator: 1, denominator: 2 },
      maxTotal: 10,
    },
    source: BLOOD_OF_SHADOWS,
    ...META,
  },
  {
    id: 'fetchling-inquisitor',
    raceName: 'Fetchling',
    className: 'Inquisitor',
    shortName: 'Knowledge (Planes) Identify',
    description: 'Add a +1 bonus on Knowledge (planes) checks made to identify creatures.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_knowledge_planes',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'checks made to identify creatures',
    },
    source: BLOOD_OF_SHADOWS,
    ...META,
  },
  {
    id: 'fetchling-magus',
    raceName: 'Fetchling',
    className: 'Magus',
    shortName: 'Bonus Arcane Pool',
    description: "Add 1/4 point to the magus's arcane pool.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'arcane_pool',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: BLOOD_OF_SHADOWS,
    ...META,
  },
  {
    id: 'fetchling-monk',
    raceName: 'Fetchling',
    className: 'Monk',
    shortName: 'Escape/Stealth in Dim Light',
    description:
      'Add a +1/2 bonus on Escape Artist and Stealth checks attempted while in dim light or darkness.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_escape_artist',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'while in dim light or darkness',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_stealth',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'while in dim light or darkness',
        },
      ],
    },
    source: BLOOD_OF_SHADOWS,
    ...META,
  },
  {
    id: 'fetchling-oracle',
    raceName: 'Fetchling',
    className: 'Oracle',
    shortName: 'Racial SLA CL',
    description:
      "Treat the oracle's level as +1/3 higher for the purposes of determining which of its racial spell-like abilities it can use.",
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'racial_spell_like_abilities',
      perLevelValue: { numerator: 1, denominator: 3 },
      requiresPickOne: false,
      scopeDescription: "determining which of the oracle's racial spell-like abilities it can use",
    },
    source: ARG,
    ...META,
  },
  {
    id: 'fetchling-paladin',
    raceName: 'Fetchling',
    className: 'Paladin',
    shortName: 'Aura of Courage Morale',
    description:
      "Add +1/4 to the morale bonus the paladin grants on allies' saving throws against fear effects.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'morale',
      target: 'ally_saves_vs_fear',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: BLOOD_OF_SHADOWS,
    ...META,
  },
  {
    id: 'fetchling-ranger',
    raceName: 'Fetchling',
    className: 'Ranger',
    shortName: 'Perception/Survival on Shadow',
    description: 'Add a +1/2 bonus on Perception and Survival checks made on the Plane of Shadow.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_perception',
          perLevelValue: { numerator: 1, denominator: 2 },
          inTerrain: ['plane_of_shadow'],
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_survival',
          perLevelValue: { numerator: 1, denominator: 2 },
          inTerrain: ['plane_of_shadow'],
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'fetchling-rogue',
    raceName: 'Fetchling',
    className: 'Rogue',
    shortName: 'Stealth/SoH in Dim Light',
    description:
      'Add a +1/2 bonus on Stealth and Sleight of Hand checks made while in dim light or darkness.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_stealth',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'while in dim light or darkness',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_sleight_of_hand',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'while in dim light or darkness',
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'fetchling-slayer',
    raceName: 'Fetchling',
    className: 'Slayer',
    shortName: 'Studied Target Dodge AC',
    description: "Add a +1/4 dodge bonus to Armor Class against the slayer's studied target.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'dodge',
      target: 'ac',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription: "against the slayer's studied target",
    },
    source: BLOOD_OF_SHADOWS,
    ...META,
  },
  {
    id: 'fetchling-sorcerer',
    raceName: 'Fetchling',
    className: 'Sorcerer',
    shortName: 'Cold/Electricity Resist',
    description:
      'Add +1/2 to either cold or electricity resistance (maximum resistance 10 for either type).',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'energy_resistance',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'cold or electricity',
      conditionDescription: 'maximum resistance 10 for either type',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'fetchling-summoner',
    raceName: 'Fetchling',
    className: 'Summoner',
    shortName: 'Eidolon Cold/Elec Resist',
    description:
      "The summoner's eidolon gains resistance 1 against either cold or electricity. Each time the summoner selects this reward, he increases his eidolon's resistance to one of those energy types by 1 (maximum 10 for any one energy type).",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'energy_resistance',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'eidolon',
      requiresPickOne: true,
      pickOnePrompt: 'cold or electricity (selected each time)',
      conditionDescription: 'maximum 10 for any one energy type',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'fetchling-wizard',
    raceName: 'Fetchling',
    className: 'Wizard',
    shortName: 'Shadow/Darkness Spellbook',
    description:
      "Add one spell from the wizard spell list to wizard's spellbook. The spell must be at or below the highest level he can cast and be of the illusion (shadow) subschool or have the [darkness] descriptor.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_in_spellbook',
      perLevelValue: { numerator: 1, denominator: 1 },
      spellLevelConstraint: 'at or below highest castable',
      listConstraint: 'wizard spell list; illusion (shadow) subschool or [darkness] descriptor',
    },
    source: ARG,
    ...META,
  },
];
