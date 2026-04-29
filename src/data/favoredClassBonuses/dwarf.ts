// Dwarf favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/core-races/dwarf/
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

import type { FavoredClassBonusOption } from '@/types/favoredClassBonuses';
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

export const DWARF_FAVORED_CLASS_BONUSES: FavoredClassBonusOption[] = [
  {
    id: 'dwarf-alchemist',
    raceName: 'Dwarf',
    className: 'Alchemist',
    shortName: 'Mutagen Natural Armor',
    description: "Add +1/4 to the alchemist's natural armor bonus when using his mutagen.",
    mechanicalEffect: {
      type: 'natural_armor',
      target: 'self',
      perLevelValue: { numerator: 1, denominator: 4 },
      onlyWhenActive: 'mutagen',
    },
    source: APG,
    ...META,
  },
  {
    id: 'dwarf-arcanist',
    raceName: 'Dwarf',
    className: 'Arcanist',
    shortName: 'Arcane Barrier/Weapon CL',
    description:
      "Add +1/4 to the arcanist's effective class level when determining the effects of the arcane barrier and arcane weapon arcanist exploits.",
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'arcanist_exploit',
      perLevelValue: { numerator: 1, denominator: 4 },
      requiresPickOne: false,
      scopeDescription: 'arcane barrier and arcane weapon exploits only',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'dwarf-barbarian',
    raceName: 'Dwarf',
    className: 'Barbarian',
    shortName: 'Bonus Rage Round',
    description: "Add +1 to the barbarian's total number of rage rounds per day.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'rage_rounds',
      perLevelValue: { numerator: 1, denominator: 1 },
    },
    source: CRB,
    ...META,
  },
  {
    id: 'dwarf-bard',
    raceName: 'Dwarf',
    className: 'Bard',
    shortName: 'Medium Armor ASF Reduction',
    description:
      'Reduce arcane spell failure chance for casting bard spells when wearing medium armor by +1%. Once the total reaches 10%, the bard also receives Medium Armor Proficiency, if he does not already possess it.',
    mechanicalEffect: {
      type: 'arcane_spell_failure_reduction',
      armorCategory: 'medium',
      perLevelPercent: { numerator: 1, denominator: 1 },
      maxReduction: 10,
      unlockedFeatOnMax: 'medium_armor_proficiency',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'dwarf-bloodrager',
    raceName: 'Dwarf',
    className: 'Bloodrager',
    shortName: 'Bonus Bloodrage Round',
    description: "Increase the bloodrager's total number of bloodrage rounds per day by 1.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'bloodrage_rounds',
      perLevelValue: { numerator: 1, denominator: 1 },
    },
    source: ACG,
    ...META,
  },
  {
    id: 'dwarf-brawler',
    raceName: 'Dwarf',
    className: 'Brawler',
    shortName: 'Unarmed Hardness Reduction',
    description:
      "Reduce the hardness of any object made from clay, stone, or metal by 1 whenever the object is struck by the brawler's unarmed strike (minimum 0).",
    mechanicalEffect: {
      type: 'hardness_reduction_on_strike',
      materials: ['clay', 'stone', 'metal'],
      perLevelValue: { numerator: 1, denominator: 1 },
      minimumResultingHardness: 0,
    },
    source: ACG,
    ...META,
  },
  {
    id: 'dwarf-cavalier',
    raceName: 'Dwarf',
    className: 'Cavalier',
    shortName: 'Challenge Damage',
    description: "Add +1/2 to the cavalier's bonus to damage against targets of his challenge.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'challenge_damage',
      perLevelValue: { numerator: 1, denominator: 2 },
    },
    source: APG,
    ...META,
  },
  {
    id: 'dwarf-cleric',
    raceName: 'Dwarf',
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
    id: 'dwarf-druid',
    raceName: 'Dwarf',
    className: 'Druid',
    shortName: 'Extra Domain Power Uses',
    description:
      "Select one domain power granted at 1st level that is normally usable a number of times per day equal to 3 + the druid's Wisdom modifier. The druid adds +1/2 to the number of uses per day of that domain power.",
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
    id: 'dwarf-fighter',
    raceName: 'Dwarf',
    className: 'Fighter',
    shortName: 'Bull Rush/Trip Resist',
    description: "Add +1 to the Fighter's CMD when resisting a bull rush or trip.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmd',
      perLevelValue: { numerator: 1, denominator: 1 },
      vsCombatManeuver: ['bull_rush', 'trip'],
    },
    source: CRB,
    ...META,
  },
  {
    id: 'dwarf-gunslinger',
    raceName: 'Dwarf',
    className: 'Gunslinger',
    shortName: 'Firearm Misfire Reduction',
    description:
      'Reduce the misfire chance for one type of firearm by 1/4. You cannot reduce the misfire chance of a firearm below 1.',
    mechanicalEffect: {
      type: 'firearm_misfire_reduction',
      perLevelValue: { numerator: 1, denominator: 4 },
      requiresPickOne: true,
      minimumMisfire: 1,
    },
    source: UC,
    ...META,
  },
  {
    id: 'dwarf-hunter',
    raceName: 'Dwarf',
    className: 'Hunter',
    shortName: 'Underground Wild Empathy',
    description:
      'Gain a +1/2 bonus on wild empathy checks the hunter makes to influence animals and magical beasts that live underground.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'wild_empathy',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'animals and magical beasts that live underground',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'dwarf-inquisitor',
    raceName: 'Dwarf',
    className: 'Inquisitor',
    shortName: 'Judgment CL',
    description:
      "Add +1/2 to the inquisitor's level for the purpose of determining the effects of one type of judgment.",
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'judgment',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'judgment type',
    },
    source: APG,
    ...META,
  },
  {
    id: 'dwarf-investigator',
    raceName: 'Dwarf',
    className: 'Investigator',
    shortName: 'Underground Perception + Stone Trap Sense',
    description:
      "Gain a +1/4 bonus on Perception checks when underground and +1/2 bonus to the investigator's trap sense ability regarding stone traps.",
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_perception',
          perLevelValue: { numerator: 1, denominator: 4 },
          inTerrain: ['underground'],
        },
        {
          type: 'feature_numeric_bump',
          featureName: 'trap_sense',
          bumpType: 'bonus',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'regarding stone traps',
        },
      ],
    },
    source: ACG,
    ...META,
  },
  {
    id: 'dwarf-kineticist',
    raceName: 'Dwarf',
    className: 'Kineticist',
    shortName: 'Earth Blast Damage',
    description: 'Add 1/3 point of damage to earth element blasts that deal damage.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'kineticist_blast_damage',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription: 'earth element blasts that deal damage',
    },
    source: OA,
    ...META,
  },
  {
    id: 'dwarf-magus',
    raceName: 'Dwarf',
    className: 'Magus',
    shortName: 'Extra Magus Arcana Uses',
    description:
      'Select one known magus arcana usable only once per day. The magus adds +1/6 to the number of times it can be used per day. Once that magus arcana is usable twice per day, the magus must select a different magus arcana.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'magus_arcana',
      perLevelValue: { numerator: 1, denominator: 6 },
      requiresPickOne: true,
      pickOnePrompt: 'magus arcana',
      pickOneConstraint:
        'magus arcana currently usable 1/day; switch to a different arcana once this one reaches 2/day',
    },
    source: UM,
    ...META,
  },
  {
    id: 'dwarf-medium',
    raceName: 'Dwarf',
    className: 'Medium',
    shortName: 'Possession/Haunt Save Bonus',
    description:
      'Gain a +1/2 bonus on saving throws against possession and a +1/2 bonus on saving throws to end haunt channeler, location channel, and spacious soul.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'saves',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'saving throws against possession',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'saves',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription:
            'saving throws to end haunt channeler, location channel, and spacious soul',
        },
      ],
    },
    source: OA,
    ...META,
  },
  {
    id: 'dwarf-mesmerist',
    raceName: 'Dwarf',
    className: 'Mesmerist',
    shortName: 'Painful Stare Damage',
    description: "Increase painful stare's damage by 1/4 point.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'painful_stare',
      bumpType: 'damage',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: OA,
    ...META,
  },
  {
    id: 'dwarf-monk',
    raceName: 'Dwarf',
    className: 'Monk',
    shortName: 'Unarmed Hardness Reduction',
    description:
      "Reduce the Hardness of any object made of clay, stone, or metal by 1 whenever the object is struck by the monk's unarmed strike (minimum of 0).",
    mechanicalEffect: {
      type: 'hardness_reduction_on_strike',
      materials: ['clay', 'stone', 'metal'],
      perLevelValue: { numerator: 1, denominator: 1 },
      minimumResultingHardness: 0,
    },
    source: CRB,
    ...META,
  },
  {
    id: 'dwarf-occultist',
    raceName: 'Dwarf',
    className: 'Occultist',
    shortName: 'Appraise/UMD on Stone/Metal',
    description:
      'Gain a +1/3 bonus on Appraise and Use Magic Device checks involving stone and metal objects.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_appraise',
          perLevelValue: { numerator: 1, denominator: 3 },
          conditionDescription: 'stone and metal objects',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_use_magic_device',
          perLevelValue: { numerator: 1, denominator: 3 },
          conditionDescription: 'stone and metal objects',
        },
      ],
    },
    source: OA,
    ...META,
  },
  {
    id: 'dwarf-oracle',
    raceName: 'Dwarf',
    className: 'Oracle',
    shortName: 'Weapon Proficiency Chip',
    description:
      'Reduce the penalty for not being proficient with one weapon by 1. When the nonproficiency penalty for a weapon becomes 0 because of this ability, the oracle is treated as having the appropriate Martial or Exotic Weapon Proficiency feat with that weapon.',
    mechanicalEffect: {
      type: 'weapon_proficiency_chip',
      perLevelValue: { numerator: 1, denominator: 1 },
      requiresPickOne: true,
      unlockProficiencyAtZero: true,
    },
    source: APG,
    ...META,
  },
  {
    id: 'dwarf-paladin-concentration',
    raceName: 'Dwarf',
    className: 'Paladin',
    shortName: 'Paladin Spell Concentration',
    description: 'Add a +1 bonus on concentration checks when casting paladin spells.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'concentration_check',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'when casting paladin spells',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'dwarf-paladin-creature-knowledge',
    raceName: 'Dwarf',
    className: 'Paladin',
    shortName: 'Creature Knowledge + Smite Unlock',
    description:
      "Choose a creature type (and subtype, if necessary) from the ranger's favored enemies list. Add a +1/2 bonus on Knowledge checks to identify creatures of that type. You can choose the same creature type up to six times; if you choose the same creature type six times, add 1 point of damage when smiting creatures of that type.",
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_knowledge_identify',
          perLevelValue: { numerator: 1, denominator: 2 },
          requiresPickOne: true,
          pickOnePrompt: 'creature type (from ranger favored enemies list)',
        },
        {
          type: 'unmapped',
          reason:
            'Unlocks +1 smite damage against chosen creature type once the same type has been picked 6 times. Requires a threshold-on-same-picks activation hook not yet modeled; Phase 3 wiring should add a `FCBEffectFeatureUnlock` variant or extend feature_numeric_bump with an `activateAtMinimumSamePickCount` field.',
        },
      ],
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'dwarf-psychic',
    raceName: 'Dwarf',
    className: 'Psychic',
    shortName: 'Abjuration Duration CL',
    description:
      "When casting psychic abjuration spells, add 1/2 level to the effective caster level of the spell, but only to determine the spell's duration.",
    mechanicalEffect: {
      type: 'caster_level',
      scopeType: 'duration_only',
      schoolFilter: 'abjuration',
      targetClass: 'Psychic',
      perLevelValue: { numerator: 1, denominator: 2 },
    },
    source: OA,
    ...META,
  },
  {
    id: 'dwarf-ranger',
    raceName: 'Dwarf',
    className: 'Ranger',
    shortName: 'Underground Wild Empathy',
    description:
      'Add a +1/2 bonus on wild empathy checks to influence animals and magical beasts that live underground.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'wild_empathy',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'animals and magical beasts that live underground',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'dwarf-rogue',
    raceName: 'Dwarf',
    className: 'Rogue',
    shortName: 'Stone Traps — Disable + Sense',
    description:
      'Add a +1/2 bonus on Disable Device checks regarding stone traps and a +1/2 bonus to trap sense regarding stone traps.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_disable_device',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'stone traps',
        },
        {
          type: 'feature_numeric_bump',
          featureName: 'trap_sense',
          bumpType: 'bonus',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'stone traps',
        },
      ],
    },
    source: CRB,
    ...META,
  },
  {
    id: 'dwarf-shaman',
    raceName: 'Dwarf',
    className: 'Shaman',
    shortName: 'Spirit Animal Natural Armor',
    description: "Add +1/4 to the natural armor bonus of the shaman's spirit animal.",
    mechanicalEffect: {
      type: 'natural_armor',
      target: 'spirit_animal',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: ACG,
    ...META,
  },
  {
    id: 'dwarf-skald',
    raceName: 'Dwarf',
    className: 'Skald',
    shortName: 'Heavy Armor ASF Reduction',
    description:
      'Reduce the arcane spell failure chance for casting skald spells when wearing heavy armor by 1%. Once the total reduction reaches 10%, the skald also receives Heavy Armor Proficiency.',
    mechanicalEffect: {
      type: 'arcane_spell_failure_reduction',
      armorCategory: 'heavy',
      perLevelPercent: { numerator: 1, denominator: 1 },
      maxReduction: 10,
      unlockedFeatOnMax: 'heavy_armor_proficiency',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'dwarf-slayer',
    raceName: 'Dwarf',
    className: 'Slayer',
    shortName: 'Dungeoneering + Underground Survival',
    description:
      'Gain a +1/3 bonus on Knowledge (dungeoneering) checks and on Survival checks when underground. If the slayer has a +1 bonus on Knowledge (dungeoneering) checks from this ability, he is also considered trained in that skill.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_knowledge_dungeoneering',
          perLevelValue: { numerator: 1, denominator: 3 },
          conditionDescription: 'also treated as trained once total bonus reaches +1',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_survival',
          perLevelValue: { numerator: 1, denominator: 3 },
          inTerrain: ['underground'],
        },
      ],
    },
    source: ACG,
    ...META,
  },
  {
    id: 'dwarf-sorcerer',
    raceName: 'Dwarf',
    className: 'Sorcerer',
    shortName: 'Acid/Earth Spell Damage',
    description: 'Add +1/2 to acid and earth spell or spell-like ability damage.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'spell_damage',
          perLevelValue: { numerator: 1, denominator: 2 },
          withDamageType: ['acid'],
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'spell_damage',
          perLevelValue: { numerator: 1, denominator: 2 },
          withDescriptor: ['earth'],
        },
      ],
    },
    source: CRB,
    ...META,
  },
  {
    id: 'dwarf-spiritualist-ectoplasmic-shield',
    raceName: 'Dwarf',
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
    id: 'dwarf-spiritualist-slam-damage',
    raceName: 'Dwarf',
    className: 'Spiritualist',
    shortName: 'Ectoplasmic Slam Damage',
    description:
      'Add a +1/4 bonus on weapon damage rolls with the slam attacks from ectoplasmic bonded manifestation.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'weapon_damage',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription: 'slam attacks from ectoplasmic bonded manifestation',
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'dwarf-summoner',
    raceName: 'Dwarf',
    className: 'Summoner',
    shortName: 'Eidolon Natural Armor',
    description: "Add a +1/4 natural armor bonus to the AC of the summoner's eidolon.",
    mechanicalEffect: {
      type: 'natural_armor',
      target: 'eidolon',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: APG,
    ...META,
  },
  {
    id: 'dwarf-swashbuckler',
    raceName: 'Dwarf',
    className: 'Swashbuckler',
    shortName: 'Precise Strike (Pick/Axe)',
    description:
      "Add +1/4 to the swashbuckler's effective class level to determine the extra damage she deals because of the precise strike deed when wielding a light pick or a heavy pick. If the swashbuckler has the Slashing Grace feat or another similar effect, she can treat the battleaxe or handaxe as a one-handed piercing melee weapon, and she gains this benefit when wielding the appropriate weapon for the feat as well.",
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'precise_strike_deed',
      perLevelValue: { numerator: 1, denominator: 4 },
      requiresPickOne: false,
      scopeDescription:
        'wielding a light pick or heavy pick; also battleaxe or handaxe if Slashing Grace (or similar) lets the swashbuckler treat it as a one-handed piercing melee weapon',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'dwarf-vigilante',
    raceName: 'Dwarf',
    className: 'Vigilante',
    shortName: 'Social Grace on Craft',
    description: 'Increase the bonus from social grace on Craft skills by +1/2.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'social_grace',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'Craft skills only',
    },
    source: UI,
    ...META,
  },
  {
    id: 'dwarf-warpriest',
    raceName: 'Dwarf',
    className: 'Warpriest',
    shortName: 'Weapon/Armor Blessings',
    description:
      'Add +1/3 to the number of times per day the warpriest can use blessings, but he can only use these additional uses on blessings that affect weapons or armor.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'blessing',
      perLevelValue: { numerator: 1, denominator: 3 },
      requiresPickOne: false,
      pickOneConstraint: 'additional uses apply only to blessings that affect weapons or armor',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'dwarf-witch',
    raceName: 'Dwarf',
    className: 'Witch',
    shortName: 'Familiar Natural Armor',
    description: "Add +1/4 natural armor bonus to the AC of the witch's familiar.",
    mechanicalEffect: {
      type: 'natural_armor',
      target: 'familiar',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: APG,
    ...META,
  },
  {
    id: 'dwarf-wizard-crafting',
    raceName: 'Dwarf',
    className: 'Wizard',
    shortName: 'Craft Progress Bonus',
    description:
      'Select one item creation feat known by the wizard. Whenever he crafts an item using that feat, the amount of progress he makes in an 8-hour period increases by 200 gp (50 gp if crafting while adventuring). This does not reduce the cost of the item; it just increases the rate at which the item is crafted.',
    mechanicalEffect: {
      type: 'crafting_speedup',
      goldPerDay: 200,
      goldPerDayAdventuring: 50,
      requiresPickOne: true,
      pickOnePrompt: 'item_creation_feat',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'dwarf-wizard-abjuration-duration',
    raceName: 'Dwarf',
    className: 'Wizard',
    shortName: 'Abjuration Duration CL',
    description:
      'Add 1/3 to the effective caster level of wizard abjuration spells, but only to determine duration.',
    mechanicalEffect: {
      type: 'caster_level',
      scopeType: 'duration_only',
      schoolFilter: 'abjuration',
      targetClass: 'Wizard',
      perLevelValue: { numerator: 1, denominator: 3 },
    },
    source: ADV_GUIDE,
    ...META,
  },
];
