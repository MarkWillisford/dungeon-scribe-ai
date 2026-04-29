// Nagaji favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-nagaji
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - Nagaji is an ARG (Advanced Race Guide) race; entries without a citation default to ARG.

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

export const NAGAJI_FAVORED_CLASS_BONUSES: FavoredClassBonusEntry[] = [
  {
    id: 'nagaji-alchemist',
    raceName: 'Nagaji',
    className: 'Alchemist',
    shortName: 'Poison Craft + DC',
    description:
      'Add +1 on Craft (alchemy) checks to craft poison and +1/3 on the DCs of poisons the alchemist creates.',
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
          perLevelValue: { numerator: 1, denominator: 3 },
          conditionDescription: 'poisons the alchemist creates',
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'nagaji-cavalier',
    raceName: 'Nagaji',
    className: 'Cavalier',
    shortName: 'Mount Speed (in 5ft increments)',
    description:
      "Add 1 foot to the base speed of the cavalier's mount. This has no effect in combat unless the cavalier has selected this reward five times (or another increment of five). If the cavalier ever replaces this mount, the new mount gains this bonus to its speed.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'base_speed',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'bonded_creature',
      applyInIncrementsOf: 5,
      conditionDescription: 'bonus transfers to any replacement mount',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'nagaji-fighter',
    raceName: 'Nagaji',
    className: 'Fighter',
    shortName: 'Grapple/Trip Resist',
    description: "Add +1 to the fighter's CMD when resisting a grapple or trip attempt.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmd',
      perLevelValue: { numerator: 1, denominator: 1 },
      vsCombatManeuver: ['grapple', 'trip'],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'nagaji-mesmerist',
    raceName: 'Nagaji',
    className: 'Mesmerist',
    shortName: 'Enchantment/Illusion HD Limit',
    description:
      "Add 1/5 to the Hit-Die limit and the total number of Hit Die affected with each enchantment or illusion spell the mesmerist casts. This bonus stacks with the mesmerist's mental potency class feature and is applicable under the same conditions as that ability.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'mental_potency',
      bumpType: 'other',
      perLevelValue: { numerator: 1, denominator: 5 },
      conditionDescription:
        'adds to Hit-Die limit and total HD affected by enchantment or illusion spells; stacks with mental potency',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'nagaji-monk',
    raceName: 'Nagaji',
    className: 'Monk',
    shortName: 'Ki Pool',
    description: "Add +1/4 point to the monk's ki pool.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'ki',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'nagaji-oracle',
    raceName: 'Nagaji',
    className: 'Oracle',
    shortName: 'Revelation CL',
    description:
      "Add 1/6 to the oracle's level for the purpose of determining the effects of one revelation.",
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'revelation',
      perLevelValue: { numerator: 1, denominator: 6 },
      requiresPickOne: true,
      pickOnePrompt: 'revelation',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'nagaji-paladin',
    raceName: 'Nagaji',
    className: 'Paladin',
    shortName: 'Divine Bond Weapon Duration',
    description: "Add 1/2 minute to the duration of the paladin's divine bond with her weapon.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'divine_bond_weapon',
      bumpType: 'duration',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'duration measured in minutes',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'nagaji-ranger',
    raceName: 'Nagaji',
    className: 'Ranger',
    shortName: 'Snake Companion Skill Rank',
    description:
      "Add 1 skill rank to the ranger's constrictor snake or viper snake animal companion.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_rank',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'animal_companion',
      conditionDescription: 'only for a constrictor snake or viper animal companion',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'nagaji-slayer',
    raceName: 'Nagaji',
    className: 'Slayer',
    shortName: 'Slayer Talent Fraction',
    description: 'Gain 1/6 of a new slayer talent.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'slayer_talent',
      perLevelValue: { numerator: 1, denominator: 6 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'nagaji-sorcerer',
    raceName: 'Nagaji',
    className: 'Sorcerer',
    shortName: 'Transmutation/Poison CL (Duration)',
    description:
      "Add 1/2 to the sorcerer's caster level when determining the duration of transmutation spells she casts that target the sorcerer or spells she casts with the poison descriptor.",
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'caster_level',
          scopeType: 'duration_only',
          schoolFilter: 'transmutation',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'transmutation spells that target the sorcerer',
        },
        {
          type: 'caster_level',
          scopeType: 'duration_only',
          descriptorFilter: ['poison'],
          perLevelValue: { numerator: 1, denominator: 2 },
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'nagaji-summoner',
    raceName: 'Nagaji',
    className: 'Summoner',
    shortName: 'Eidolon HP',
    description: "Add +1 hit point to the summoner's eidolon.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'hit_points',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'eidolon',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'nagaji-warpriest',
    raceName: 'Nagaji',
    className: 'Warpriest',
    shortName: 'Blessing Uses (Scoped)',
    description:
      'Add 1/2 to the number of times per day the warpriest can use blessings, although he can use these additional blessings only for Charm, Magic, Nobility, Rune, or Scalykind blessings.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'blessing',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: false,
      pickOneConstraint:
        'additional uses apply only to Charm, Magic, Nobility, Rune, or Scalykind blessings',
    },
    source: ARG,
    ...META,
  },
];
