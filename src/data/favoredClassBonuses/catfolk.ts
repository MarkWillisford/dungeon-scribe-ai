// Catfolk favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/featured-races/arg-catfolk/
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - no citation → Advanced Race Guide (Catfolk FCOs are ARG-introduced)
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

export const CATFOLK_FAVORED_CLASS_BONUSES: FavoredClassBonusEntry[] = [
  {
    id: 'catfolk-alchemist',
    raceName: 'Catfolk',
    className: 'Alchemist',
    shortName: 'Bonus Discovery',
    description: 'Gain 1/6 of a bonus discovery.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'alchemist_discovery',
      perLevelValue: { numerator: 1, denominator: 6 },
      scopeDescription: 'bonus discovery',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'catfolk-bard',
    raceName: 'Catfolk',
    className: 'Bard',
    shortName: 'Bardic Knowledge Bonus',
    description: "Add +1/2 to the bard's bardic knowledge bonus.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'bardic_knowledge',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 2 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'catfolk-bloodrager',
    raceName: 'Catfolk',
    className: 'Bloodrager',
    shortName: 'Base Speed (in 5ft increments)',
    description:
      "Add 1 foot to the bloodrager's base speed. In combat, this has an effect only for every five increases in base speed. This bonus stacks with the bloodrager's fast movement feature, and applies under the same conditions as that feature.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'base_speed',
      perLevelValue: { numerator: 1, denominator: 1 },
      applyInIncrementsOf: 5,
      conditionDescription:
        'stacks with bloodrager fast movement; applies under same conditions as fast movement',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'catfolk-cavalier',
    raceName: 'Catfolk',
    className: 'Cavalier',
    shortName: 'Banner Bonus',
    description: "Add +1/4 to the cavalier's banner bonus.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'banner',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'catfolk-druid',
    raceName: 'Catfolk',
    className: 'Druid',
    shortName: 'Animal Companion HP',
    description:
      "Add +1 hit points to the druid's animal companion. If the druid ever replaces her animal companion, the new animal companion gains these bonus hit points.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'hit_points',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'animal_companion',
      conditionDescription: 'bonus hit points transfer to any replacement animal companion',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'catfolk-hunter',
    raceName: 'Catfolk',
    className: 'Hunter',
    shortName: 'Bonus Teamwork Feat',
    description: 'Gain 1/6 of a bonus teamwork feat.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'feat',
      perLevelValue: { numerator: 1, denominator: 6 },
      listConstraint: 'teamwork feats only',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'catfolk-inquisitor',
    raceName: 'Catfolk',
    className: 'Inquisitor',
    shortName: 'Track Bonus',
    description: "Add 1/2 to the inquisitor's track bonus.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'track',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 2 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'catfolk-investigator',
    raceName: 'Catfolk',
    className: 'Investigator',
    shortName: 'Inspiration Skill Bonus',
    description:
      'Add 1 to the bonus provided to a single skill (maximum +2) by inspiration. This skill must be one the investigator can already apply inspiration to. The investigator can select a different skill each level.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'inspiration',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription:
        'applies to a single skill (maximum +2); player may select a different skill each level',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'catfolk-medium',
    raceName: 'Catfolk',
    className: 'Medium',
    shortName: 'Spirit Surge Die Result',
    description: 'Add 1/3 to the result of any spirit surge die that the medium rolls.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'spirit_surge',
      bumpType: 'other',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription: 'added to the result of any spirit surge die rolled',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'catfolk-monk',
    raceName: 'Catfolk',
    className: 'Monk',
    shortName: 'Claw Attack Damage',
    description:
      "Add 1/2 to the monk's damage rolls with claw attacks and claw blades. A monk who selects this bonus at 1st level also treats claw blades as a monk weapon. If he is an unchained monk, he can use his style strikes with unarmed strike or claw blade attacks.",
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'weapon_damage',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'claw attacks and claw blades',
        },
        {
          type: 'unmapped',
          reason:
            'Selecting this bonus at 1st level also treats claw blades as a monk weapon and (for unchained monks) allows style strikes with unarmed strike or claw blade attacks. Requires a feature-unlock hook keyed to selection-at-level-1 not yet modeled.',
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'catfolk-oracle',
    raceName: 'Catfolk',
    className: 'Oracle',
    shortName: 'Extra Spell Known',
    description:
      'Add one spell known from the oracle spell list. This spell must be at least one level below the highest spell level the oracle can cast.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'oracle spell list',
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'catfolk-ranger',
    raceName: 'Catfolk',
    className: 'Ranger',
    shortName: 'Weapon Crit Confirm',
    description:
      'Choose a weapon from the following list: claws, kukri, longbow, longsword, short spear, or shortbow. Add +1/2 on critical hit confirmation rolls made while using that weapon (maximum bonus of +4). This bonus does not stack with Critical Focus.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'circumstance',
      target: 'critical_confirm',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'weapon (claws, kukri, longbow, longsword, short spear, or shortbow)',
      conditionDescription: 'maximum bonus +4; does not stack with Critical Focus',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'catfolk-rogue',
    raceName: 'Catfolk',
    className: 'Rogue',
    shortName: 'Feint Bluff/Pickpocket',
    description:
      'Add a +1/2 bonus on Bluff checks to feint and Sleight of Hand checks to pickpocket.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_bluff',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'to feint',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_sleight_of_hand',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'to pickpocket',
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'catfolk-shaman',
    raceName: 'Catfolk',
    className: 'Shaman',
    shortName: 'Hex CL',
    description:
      "Add 1/6 to the shaman's class level for the purpose of determining the effects of one hex.",
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'hex',
      perLevelValue: { numerator: 1, denominator: 6 },
      requiresPickOne: true,
      pickOnePrompt: 'hex',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'catfolk-slayer',
    raceName: 'Catfolk',
    className: 'Slayer',
    shortName: 'Sneak Attack Damage',
    description:
      'Add 1/3 to the result of any sneak attack damage that the slayer deals after all sneak attack damage dice have been totaled.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'sneak_attack_damage',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription: 'added to the total after all sneak attack damage dice are rolled',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'catfolk-sorcerer',
    raceName: 'Catfolk',
    className: 'Sorcerer',
    shortName: 'Extra Bloodline Power Uses',
    description:
      "Select one bloodline power at 1st level that is normally usable a number of times equal to 3 + the sorcerer's Charisma modifier. The sorcerer adds +1/2 to the number of uses per day of that bloodline power.",
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'bloodline_power',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'bloodline power',
      pickOneConstraint: '1st-level bloodline power normally usable 3 + Cha mod/day',
    },
    source: ARG,
    ...META,
  },
];
