// Elf favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/core-races/elf/
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - no citation, Core classes → Core Rulebook
//   - no citation, APG classes (Alchemist, Cavalier, Inquisitor, Oracle, Summoner, Witch) → APG
//   - no citation, UM classes (Magus) → Ultimate Magic
//   - no citation, UC classes (Gunslinger) → Ultimate Combat
//   - (PZO1129) → Advanced Class Guide
//   - (PZO1132) → Occult Adventures
//   - (PZO1134) → Ultimate Intrigue
//   - (PZO1135) → Adventurer's Guide

import type { FavoredClassBonusEntry } from '@/types/favoredClassBonuses';
import type { GameDataSource } from '@/types/gameData';

const CRB: GameDataSource = {
  bookId: 'crb',
  bookName: 'Core Rulebook',
  publisher: 'Paizo',
};

const APG: GameDataSource = {
  bookId: 'apg',
  bookName: "Advanced Player's Guide",
  publisher: 'Paizo',
};

const UM: GameDataSource = {
  bookId: 'um',
  bookName: 'Ultimate Magic',
  publisher: 'Paizo',
};

const UC: GameDataSource = {
  bookId: 'uc',
  bookName: 'Ultimate Combat',
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

const META = {
  visibility: 'global' as const,
  isOfficial: true,
  rev: 1,
  verificationStatus: 'needs_review' as const,
};

export const ELF_FAVORED_CLASS_BONUSES: FavoredClassBonusEntry[] = [
  {
    id: 'elf-alchemist',
    raceName: 'Elf',
    className: 'Alchemist',
    shortName: 'Bonus Extract Formula',
    description:
      "Add one extract formula from the alchemist's list to his formula book. This formula must be at least one level lower than the highest-level formula the alchemist can create.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'extract_formula',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: "alchemist's formula list",
      spellLevelConstraint: 'at least 1 level below highest-level formula creatable',
    },
    source: APG,
    ...META,
  },
  {
    id: 'elf-arcanist',
    raceName: 'Elf',
    className: 'Arcanist',
    shortName: 'Arcane Reservoir Pool',
    description: "Increase total number of points in the arcanist's arcane reservoir by 1.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'arcane_reservoir',
      perLevelValue: { numerator: 1, denominator: 1 },
    },
    source: ACG,
    ...META,
  },
  {
    id: 'elf-barbarian',
    raceName: 'Elf',
    className: 'Barbarian',
    shortName: 'Base Speed (increments of 5)',
    description:
      "Add +1 to the barbarian's base speed. In combat this option has no effect unless the barbarian has selected it five times (or another increment of five). This bonus stacks with the barbarian's fast movement feature and applies under the same conditions as that feature.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'base_speed',
      perLevelValue: { numerator: 1, denominator: 1 },
      applyInIncrementsOf: 5,
      conditionDescription:
        "stacks with barbarian's fast movement; applies under the same conditions as that feature",
    },
    source: CRB,
    ...META,
  },
  {
    id: 'elf-bard',
    raceName: 'Elf',
    className: 'Bard',
    shortName: 'Disarm/Sunder CMD',
    description: "Add +1 to the bard's CMD when resisting a disarm or sunder attempt.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmd',
      perLevelValue: { numerator: 1, denominator: 1 },
      vsCombatManeuver: ['disarm', 'sunder'],
    },
    source: CRB,
    ...META,
  },
  {
    id: 'elf-bloodrager',
    raceName: 'Elf',
    className: 'Bloodrager',
    shortName: 'Base Speed (increments of 5)',
    description:
      "Add 1 foot to the bloodrager's base speed. In combat, this only has an effect for every five increases in base speed. This bonus stacks with the bloodrager's fast movement class feature, and applies under the same conditions and that feature.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'base_speed',
      perLevelValue: { numerator: 1, denominator: 1 },
      applyInIncrementsOf: 5,
      conditionDescription:
        "stacks with bloodrager's fast movement; applies under the same conditions as that feature",
    },
    source: ACG,
    ...META,
  },
  {
    id: 'elf-brawler',
    raceName: 'Elf',
    className: 'Brawler',
    shortName: 'Base Speed (increments of 5)',
    description:
      "Add 1 foot to the brawler's base speed. In combat, this has an effect only for every five increases in the brawler's base speed.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'base_speed',
      perLevelValue: { numerator: 1, denominator: 1 },
      applyInIncrementsOf: 5,
    },
    source: ACG,
    ...META,
  },
  {
    id: 'elf-cavalier',
    raceName: 'Elf',
    className: 'Cavalier',
    shortName: 'Mount Hit Points',
    description:
      "Add +1 hit point to the cavalier's mount. If the cavalier ever replaces his mount, the new mount gains these bonus hit points.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'hit_points',
      recipient: 'bonded_creature',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'applies to the cavalier mount; transfers to a replacement mount',
    },
    source: APG,
    ...META,
  },
  {
    id: 'elf-cleric',
    raceName: 'Elf',
    className: 'Cleric',
    shortName: 'Extra Domain Power Uses',
    description:
      "Select one domain power granted at 1st level that is normally usable a number of times per day equal to 3 + the cleric's Wisdom modifier. The cleric adds +1/2 to the number of uses per day of that domain power.",
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'domain_power',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'domain power',
      pickOneConstraint: '1st-level domain power normally usable 3 + Wis mod/day',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'elf-druid',
    raceName: 'Elf',
    className: 'Druid',
    shortName: 'Wild Shape Natural Armor',
    description: "Add +1/3 to the druid's natural armor bonus when using wild shape.",
    mechanicalEffect: {
      type: 'natural_armor',
      target: 'self',
      perLevelValue: { numerator: 1, denominator: 3 },
      onlyWhenActive: 'wild_shape',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'elf-fighter',
    raceName: 'Elf',
    className: 'Fighter',
    shortName: 'Disarm/Sunder CMD',
    description: "Add +1 to the Fighter's CMD when resisting a disarm or sunder attempt.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmd',
      perLevelValue: { numerator: 1, denominator: 1 },
      vsCombatManeuver: ['disarm', 'sunder'],
    },
    source: CRB,
    ...META,
  },
  {
    id: 'elf-gunslinger',
    raceName: 'Elf',
    className: 'Gunslinger',
    shortName: 'Firearm Crit Confirm',
    description:
      'Add +1/3 on critical hit confirmation rolls made with firearms (maximum bonus of +5). This bonus does not stack with Critical Focus.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'critical_confirm',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription: 'with firearms; max +5 total; does not stack with Critical Focus',
    },
    source: UC,
    ...META,
  },
  {
    id: 'elf-hunter',
    raceName: 'Elf',
    className: 'Hunter',
    shortName: 'Elven Weapon Crit Confirm',
    description:
      'Choose a weapon from the following list: longbow, longsword, rapier, short sword, shortbow, or any weapon with "elven" in its name. Gain a +1/2 bonus on critical hit confirmation rolls made while using that type of weapon (maximum bonus +4). This bonus does not stack with those gained through Critical Focus and similar effects.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'critical_confirm',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'weapon',
      conditionDescription:
        'eligible weapons: longbow, longsword, rapier, short sword, shortbow, or any weapon with "elven" in its name; max +4 total; does not stack with Critical Focus and similar effects',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'elf-inquisitor',
    raceName: 'Elf',
    className: 'Inquisitor',
    shortName: 'Bonus Spell Known',
    description:
      "Add one spell known from the inquisitor's spell list. This spell must be at least one level below the highest-level spell the inquisitor can cast.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: "inquisitor's spell list",
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: APG,
    ...META,
  },
  {
    id: 'elf-investigator',
    raceName: 'Elf',
    className: 'Investigator',
    shortName: 'Inspiration Pool',
    description:
      "Increase the total number of points in the investigator's inspiration pool by 1/3.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'inspiration',
      perLevelValue: { numerator: 1, denominator: 3 },
    },
    source: ACG,
    ...META,
  },
  {
    id: 'elf-kineticist',
    raceName: 'Elf',
    className: 'Kineticist',
    shortName: 'Elemental Overflow Damage',
    description:
      "Gain a +1/4 bonus on damage rolls that apply the kineticist's elemental overflow bonus.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'weapon_damage',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription: 'damage rolls that apply the elemental overflow bonus',
    },
    source: OA,
    ...META,
  },
  {
    id: 'elf-magus',
    raceName: 'Elf',
    className: 'Magus',
    shortName: 'New Magus Arcana',
    description: 'The magus gains 1/6 of a new magus arcana.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'magus_arcana',
      perLevelValue: { numerator: 1, denominator: 6 },
    },
    source: UM,
    ...META,
  },
  {
    id: 'elf-medium',
    raceName: 'Elf',
    className: 'Medium',
    shortName: 'Occult Skill Unlock Bonus',
    description: 'Gain a +1/3 bonus on all skill checks using occult skill unlocks.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_check',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription: 'skill checks using occult skill unlocks',
    },
    source: OA,
    ...META,
  },
  {
    id: 'elf-mesmerist-acrobatics-bluff',
    raceName: 'Elf',
    className: 'Mesmerist',
    shortName: 'Acrobatics (threatened) + Feint Bluff',
    description:
      'Gain a +1/2 bonus on Acrobatics checks to move through a threatened area and a +1/2 bonus on Bluff checks to feint.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_acrobatics',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'to move through a threatened area',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_bluff',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'to feint',
        },
      ],
    },
    source: OA,
    ...META,
  },
  {
    id: 'elf-mesmerist-grapple-trip',
    raceName: 'Elf',
    className: 'Mesmerist',
    shortName: 'Grapple/Trip CMB',
    description: 'Add a +1/4 bonus on grapple and trip combat maneuver checks.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmb',
      perLevelValue: { numerator: 1, denominator: 4 },
      vsCombatManeuver: ['grapple', 'trip'],
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'elf-monk',
    raceName: 'Elf',
    className: 'Monk',
    shortName: 'Base Speed (increments of 5)',
    description:
      "Add +1 to the monk's base speed. In combat this option has no effect unless the monk has selected it five times (or another increment of five). This bonus stacks with the monk's fast movement class feature and applies under the same conditions as that feature.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'base_speed',
      perLevelValue: { numerator: 1, denominator: 1 },
      applyInIncrementsOf: 5,
      conditionDescription:
        "stacks with monk's fast movement; applies under the same conditions as that feature",
    },
    source: CRB,
    ...META,
  },
  {
    id: 'elf-occultist',
    raceName: 'Elf',
    className: 'Occultist',
    shortName: 'Mental Focus Pool',
    description: "Increase the occultist's total number of points of mental focus by 1/2 point.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'mental_focus',
      perLevelValue: { numerator: 1, denominator: 2 },
    },
    source: OA,
    ...META,
  },
  {
    id: 'elf-oracle',
    raceName: 'Elf',
    className: 'Oracle',
    shortName: 'Revelation CL',
    description:
      "Add +1/6 to the oracle's level for the purpose of determining the effects of one revelation.",
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'revelation',
      perLevelValue: { numerator: 1, denominator: 6 },
      requiresPickOne: true,
      pickOnePrompt: 'revelation',
    },
    source: APG,
    ...META,
  },
  {
    id: 'elf-paladin',
    raceName: 'Elf',
    className: 'Paladin',
    shortName: 'Lay on Hands HP',
    description:
      "Add +1/2 hit point to the paladin's lay on hands ability (whether using it to heal or harm).",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'lay_on_hands',
      bumpType: 'damage',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'applies to healing or harming uses',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'elf-psychic',
    raceName: 'Elf',
    className: 'Psychic',
    shortName: 'Phrenic Pool',
    description: "Increase the total number of points in the psychic's phrenic pool by 1/3 point.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'phrenic_pool',
      perLevelValue: { numerator: 1, denominator: 3 },
    },
    source: OA,
    ...META,
  },
  {
    id: 'elf-ranger',
    raceName: 'Elf',
    className: 'Ranger',
    shortName: 'Elven Weapon Crit Confirm',
    description:
      'Choose a weapon from the following list: longbow, longsword, rapier, shortbow, short sword, or any weapon with "elven" in its name. Add +1/2 on critical hit confirmation rolls made while using that weapon (maximum bonus of +4). This bonus does not stack with Critical Focus.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'critical_confirm',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'weapon',
      conditionDescription:
        'eligible weapons: longbow, longsword, rapier, shortbow, short sword, or any weapon with "elven" in its name; max +4 total; does not stack with Critical Focus',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'elf-rogue',
    raceName: 'Elf',
    className: 'Rogue',
    shortName: 'Minor/Major Magic Uses',
    description:
      'Add +1 to the number of times per day the rogue can cast a cantrip or 1st-level spell gained from the minor magic or major magic talent. The number of times this bonus is selected for the major magic talent cannot exceed the number of times it is selected for the minor magic talent. The rogue must possess the associated rogue talent to select these options.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'minor_or_major_magic_talent',
      perLevelValue: { numerator: 1, denominator: 1 },
      requiresPickOne: true,
      pickOnePrompt: 'minor magic or major magic talent',
      pickOneConstraint:
        'rogue must possess the talent; selections toward major magic cannot exceed those toward minor magic',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'elf-shaman',
    raceName: 'Elf',
    className: 'Shaman',
    shortName: 'Hex Range (+5 ft, max +30)',
    description:
      'Add 5 feet to the range of a chosen shaman hex. Multiple bonuses from this ability can apply to the same hex, to a maximum of an additional 30 feet for any single hex.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'shaman_hex_range',
      bumpType: 'other',
      perLevelValue: { numerator: 5, denominator: 1 },
      conditionDescription:
        'requires picking one shaman hex; maximum additional range of 30 feet for any single hex',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'elf-skald',
    raceName: 'Elf',
    className: 'Skald',
    shortName: 'Well-Versed Bonus',
    description: 'Increase the bonus granted by the well-versed class feature by 1/4 (maximum +8).',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'well_versed',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription: 'maximum +8 total',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'elf-slayer',
    raceName: 'Elf',
    className: 'Slayer',
    shortName: 'Studied Target Skills',
    description:
      'Increase the studied target bonus on Perception and Survival checks by 1/4. When the slayer gains the stalker class feature, he also gains this increase to the studied target bonus on Stealth checks.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'feature_numeric_bump',
          featureName: 'studied_target',
          bumpType: 'bonus',
          perLevelValue: { numerator: 1, denominator: 4 },
          conditionDescription: 'on Perception checks',
        },
        {
          type: 'feature_numeric_bump',
          featureName: 'studied_target',
          bumpType: 'bonus',
          perLevelValue: { numerator: 1, denominator: 4 },
          conditionDescription: 'on Survival checks',
        },
        {
          type: 'feature_numeric_bump',
          featureName: 'studied_target',
          bumpType: 'bonus',
          perLevelValue: { numerator: 1, denominator: 4 },
          conditionDescription:
            'on Stealth checks, only once the slayer gains the stalker class feature',
        },
      ],
    },
    source: ACG,
    ...META,
  },
  {
    id: 'elf-sorcerer-bloodline-power',
    raceName: 'Elf',
    className: 'Sorcerer',
    shortName: 'Extra Bloodline Power Uses',
    description:
      "Select one bloodline power at 1st level that is normally usable a number of times per day equal to 3 + the sorcerer's Charisma modifier. The sorcerer adds +1/2 to the number of uses per day of that bloodline power.",
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'bloodline_power',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'bloodline power',
      pickOneConstraint: '1st-level bloodline power normally usable 3 + Cha mod/day',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'elf-sorcerer-terrain-duration',
    raceName: 'Elf',
    className: 'Sorcerer',
    shortName: 'Terrain Spell Duration CL',
    description:
      "Choose a terrain type from the ranger's favored terrain list. When casting sorcerer spells in the chosen terrain, add 1/3 to the effective caster level of the spell, for the purpose of determining the spells' duration.",
    mechanicalEffect: {
      type: 'caster_level',
      scopeType: 'duration_only',
      targetClass: 'Sorcerer',
      perLevelValue: { numerator: 1, denominator: 3 },
      requiresPickOne: true,
      pickOnePrompt: 'terrain (from ranger favored terrain list)',
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'elf-spiritualist',
    raceName: 'Elf',
    className: 'Spiritualist',
    shortName: 'Ectoplasmic Shield Bonus',
    description:
      'Add 1/6 to the shield bonus granted by the 3rd-level ectoplasmic bonded manifestation ability.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'ectoplasmic_bonded_manifestation_shield',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 6 },
      conditionDescription: '3rd-level ectoplasmic bonded manifestation only',
    },
    source: OA,
    ...META,
  },
  {
    id: 'elf-summoner',
    raceName: 'Elf',
    className: 'Summoner',
    shortName: 'Reduce Eidolon Summon Time',
    description:
      'The amount of time the summoner must spend to summon his eidolon is reduced by 1 round, to a minimum of 1 round.',
    mechanicalEffect: {
      type: 'unmapped',
      reason:
        "Reduces the eidolon summoning action time by 1 round per pick (minimum 1 round). No existing FCBMechanicalEffect variant models action-economy adjustments to a specific class feature's casting/activation time; flag for Phase 3 (add an `FCBEffectActionTimeReduction` variant with featureName, perLevelValue, minimum).",
    },
    source: APG,
    ...META,
  },
  {
    id: 'elf-swashbuckler',
    raceName: 'Elf',
    className: 'Swashbuckler',
    shortName: 'Panache Pool',
    description: "Increase the total number of points in the swashbuckler's panache pool by 1/4.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'panache',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: ACG,
    ...META,
  },
  {
    id: 'elf-vigilante',
    raceName: 'Elf',
    className: 'Vigilante',
    shortName: 'Forest Acrobatics/Climb/Stealth',
    description: 'Gain +1/3 on all Acrobatics, Climb, and Stealth checks in forested areas.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_acrobatics',
          perLevelValue: { numerator: 1, denominator: 3 },
          inTerrain: ['forest'],
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_climb',
          perLevelValue: { numerator: 1, denominator: 3 },
          inTerrain: ['forest'],
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_stealth',
          perLevelValue: { numerator: 1, denominator: 3 },
          inTerrain: ['forest'],
        },
      ],
    },
    source: UI,
    ...META,
  },
  {
    id: 'elf-warpriest',
    raceName: 'Elf',
    className: 'Warpriest',
    shortName: 'Blessings (Air/Animal/Charm/Magic/Plant/Sun)',
    description:
      'Add 1/2 to the number of times per day the warpriest can use blessings, but he can use these additional blessings on only those from the Air, Animal, Charm, Magic, Plant, or Sun domains.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'blessing',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: false,
      pickOneConstraint:
        'additional uses apply only to blessings from the Air, Animal, Charm, Magic, Plant, or Sun domains',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'elf-witch-familiar-spell',
    raceName: 'Elf',
    className: 'Witch',
    shortName: 'Bonus Familiar Spell',
    description:
      "Add one spell from the witch spell list to the witch's familiar. This spell must be at least one level lower than the highest-level spell she can cast. If the witch ever replaces her familiar, the new familiar knows these bonus spells.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_to_familiar',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'witch spell list',
      spellLevelConstraint: 'at least 1 level below highest castable',
      scopeDescription: 'bonus spells transfer to any replacement familiar',
    },
    source: APG,
    ...META,
  },
  {
    id: 'elf-witch-spellcraft-sense-motive',
    raceName: 'Elf',
    className: 'Witch',
    shortName: 'Cursed Items/Enchantment Detection',
    description:
      'Add a +1/2 bonus on Spellcraft checks to identify cursed items and on Sense Motive checks to notice enchantment or possession.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_spellcraft',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'to identify cursed items',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_sense_motive',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'to notice enchantment or possession',
        },
      ],
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'elf-wizard',
    raceName: 'Elf',
    className: 'Wizard',
    shortName: 'Extra Arcane School Power Uses',
    description:
      "Select one arcane school power at 1st level that is normally usable a number of times per day equal to 3 + the wizard's Intelligence modifier. The wizard adds +1/2 to the number of uses per day of that arcane school power.",
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'arcane_school_power',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'arcane school power',
      pickOneConstraint: '1st-level arcane school power normally usable 3 + Int mod/day',
    },
    source: CRB,
    ...META,
  },
];
