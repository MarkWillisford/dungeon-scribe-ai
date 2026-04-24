// Half-Elf favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/core-races/half-elf/
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

export const HALF_ELF_FAVORED_CLASS_BONUSES: FavoredClassBonusOption[] = [
  {
    id: 'half-elf-alchemist',
    raceName: 'Half-Elf',
    className: 'Alchemist',
    shortName: 'Splash Weapon Range',
    description:
      "Add +1 foot to the range increment of the alchemist's thrown splash weapons (including the alchemist's bombs).",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'thrown_splash_range_increment',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: "alchemist's thrown splash weapons including bombs",
    },
    source: APG,
    ...META,
  },
  {
    id: 'half-elf-arcanist',
    raceName: 'Half-Elf',
    className: 'Arcanist',
    shortName: 'Enchantment Duration CL',
    description:
      'When casting arcanist enchantment spells, add 1/3 to the effective caster level, but only for the purpose of determining duration.',
    mechanicalEffect: {
      type: 'caster_level',
      scopeType: 'duration_only',
      schoolFilter: 'enchantment',
      targetClass: 'Arcanist',
      perLevelValue: { numerator: 1, denominator: 3 },
    },
    source: ACG,
    ...META,
  },
  {
    id: 'half-elf-barbarian',
    raceName: 'Half-Elf',
    className: 'Barbarian',
    shortName: 'Trap Sense Bump',
    description:
      'Add +1/4 to the bonus on Reflex saves and dodge bonus to AC against attacks made by traps granted by trap sense.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'trap_sense',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription: 'Reflex saves and dodge bonus to AC against attacks made by traps',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'half-elf-bard',
    raceName: 'Half-Elf',
    className: 'Bard',
    shortName: 'Bonus Performance Round',
    description: "Add +1 to the bard's total number of bardic performance rounds per day.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'bardic_performance_rounds',
      perLevelValue: { numerator: 1, denominator: 1 },
    },
    source: CRB,
    ...META,
  },
  {
    id: 'half-elf-bloodrager',
    raceName: 'Half-Elf',
    className: 'Bloodrager',
    shortName: 'Blood Sanctuary Bump',
    description: 'Increase the bonus gained from blood sanctuary by 1/4.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'blood_sanctuary',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: ACG,
    ...META,
  },
  {
    id: 'half-elf-brawler',
    raceName: 'Half-Elf',
    className: 'Brawler',
    shortName: 'Trip/Overrun CMD',
    description:
      "Add 1 to the brawler's CMD when she's resisting a trip or overrun combat maneuver.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmd',
      perLevelValue: { numerator: 1, denominator: 1 },
      vsCombatManeuver: ['trip', 'overrun'],
    },
    source: ACG,
    ...META,
  },
  {
    id: 'half-elf-cavalier',
    raceName: 'Half-Elf',
    className: 'Cavalier',
    shortName: 'Mount Speed',
    description: "Add +1 foot to the cavalier's mount's base speed.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'base_speed',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'bonded_creature',
      conditionDescription: "cavalier's mount",
    },
    source: APG,
    ...META,
  },
  {
    id: 'half-elf-cleric-channel',
    raceName: 'Half-Elf',
    className: 'Cleric',
    shortName: 'Channel Energy Damage/Heal',
    description:
      'Add +1/3 to the amount of damage dealt or damage healed when the cleric uses channel energy.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'channel_energy',
      bumpType: 'damage',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription: 'damage dealt or damage healed',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'half-elf-cleric-remove-afflictions',
    raceName: 'Half-Elf',
    className: 'Cleric',
    shortName: 'Remove Afflictions CL Check',
    description:
      'Add a +1/4 bonus on caster level checks to remove afflictions (curses, diseases, poisons, etc.).',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'caster_level_check',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription: 'to remove afflictions (curses, diseases, poisons, etc.)',
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'half-elf-druid-domain',
    raceName: 'Half-Elf',
    className: 'Druid',
    shortName: 'Extra Domain Power Uses',
    description:
      "Select one cleric domain power at 1st level that is normally usable a number of times per day equal to 3 + the druid's Wisdom modifier. The druid adds +1/2 to the number of uses per day of that domain power.",
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'domain_power',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'domain power',
      pickOneConstraint: '1st-level cleric domain power normally usable 3 + Wis mod/day',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'half-elf-druid-animal-companion',
    raceName: 'Half-Elf',
    className: 'Druid',
    shortName: 'Animal Companion Skill Rank',
    description:
      'For druids whose nature bond gives them an animal companion, add +1 skill rank to the animal companion.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_ranks',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'animal_companion',
      conditionDescription: 'druid must have the animal companion nature bond',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'half-elf-fighter',
    raceName: 'Half-Elf',
    className: 'Fighter',
    shortName: 'Disarm/Overrun CMD',
    description: "Add +1 to the fighter's CMD when resisting a disarm or overrun combat maneuver.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmd',
      perLevelValue: { numerator: 1, denominator: 1 },
      vsCombatManeuver: ['disarm', 'overrun'],
    },
    source: CRB,
    ...META,
  },
  {
    id: 'half-elf-gunslinger',
    raceName: 'Half-Elf',
    className: 'Gunslinger',
    shortName: 'Grit Pool',
    description: "Add +1/4 to the number of grit points in the gunslinger's grit pool.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'grit',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: UC,
    ...META,
  },
  {
    id: 'half-elf-hunter',
    raceName: 'Half-Elf',
    className: 'Hunter',
    shortName: 'Companion Speed',
    description: "Add 1 foot to the hunter's companion's base speed.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'base_speed',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'animal_companion',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'half-elf-inquisitor',
    raceName: 'Half-Elf',
    className: 'Inquisitor',
    shortName: 'Teamwork Feat Swaps',
    description:
      'Add +1/4 to the number of times per day the inquisitor can change her most recent teamwork feat.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'teamwork_feat_swap',
      perLevelValue: { numerator: 1, denominator: 4 },
      requiresPickOne: false,
    },
    source: APG,
    ...META,
  },
  {
    id: 'half-elf-investigator',
    raceName: 'Half-Elf',
    className: 'Investigator',
    shortName: 'Inspiration Roll Bonus',
    description: 'Gain a +1/4 bonus on all inspiration rolls.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'inspiration_roll',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: ACG,
    ...META,
  },
  {
    id: 'half-elf-kineticist',
    raceName: 'Half-Elf',
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
    id: 'half-elf-magus',
    raceName: 'Half-Elf',
    className: 'Magus',
    shortName: 'Arcane Pool',
    description: "Add +1/4 to the magus's arcane pool.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'arcane_pool',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: UM,
    ...META,
  },
  {
    id: 'half-elf-medium',
    raceName: 'Half-Elf',
    className: 'Medium',
    shortName: 'Occult Skill Unlocks',
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
    id: 'half-elf-mesmerist',
    raceName: 'Half-Elf',
    className: 'Mesmerist',
    shortName: 'Enchantment Duration CL',
    description:
      "When casting mesmerist enchantment spells, add 1/2 to the effective caster level of the spell, but only to determine the spell's duration.",
    mechanicalEffect: {
      type: 'caster_level',
      scopeType: 'duration_only',
      schoolFilter: 'enchantment',
      targetClass: 'Mesmerist',
      perLevelValue: { numerator: 1, denominator: 2 },
    },
    source: OA,
    ...META,
  },
  {
    id: 'half-elf-monk',
    raceName: 'Half-Elf',
    className: 'Monk',
    shortName: 'Escape Artist/Acrobatics',
    description:
      'Add +1/2 on Escape Artist checks and on Acrobatics checks to cross narrow surfaces.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_escape_artist',
          perLevelValue: { numerator: 1, denominator: 2 },
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_acrobatics',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'to cross narrow surfaces',
        },
      ],
    },
    source: CRB,
    ...META,
  },
  {
    id: 'half-elf-occultist',
    raceName: 'Half-Elf',
    className: 'Occultist',
    shortName: 'Spellcraft/UMD Bonuses',
    description:
      'Gain a +1/2 bonus on Spellcraft checks to identify the properties of magic items and a +1/2 bonus on Use Magic Device checks to emulate a race.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_spellcraft',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'to identify the properties of magic items',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_use_magic_device',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'to emulate a race',
        },
      ],
    },
    source: OA,
    ...META,
  },
  {
    id: 'half-elf-oracle-spell-known',
    raceName: 'Half-Elf',
    className: 'Oracle',
    shortName: 'Extra Spell Known',
    description:
      'Add one spell known from the oracle spell list. This spell must be at least one level below the highest spell level the oracle can cast.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      spellLevelConstraint: 'at least 1 level below highest castable',
      listConstraint: 'oracle spell list',
    },
    source: APG,
    ...META,
  },
  {
    id: 'half-elf-oracle-revelation',
    raceName: 'Half-Elf',
    className: 'Oracle',
    shortName: 'Extra Revelation Uses',
    description:
      "Select one revelation normally usable a number of times per day equal to 3 + the oracle's Charisma modifier. Add 1/2 to the number of uses per day of that revelation.",
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'revelation',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'revelation',
      pickOneConstraint: 'revelation normally usable 3 + Cha mod/day',
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'half-elf-paladin',
    raceName: 'Half-Elf',
    className: 'Paladin',
    shortName: 'Aura Size',
    description: "Add +1 foot to the size of all the paladin's aura class features.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'paladin_aura_size',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: "all of the paladin's aura class features",
    },
    source: CRB,
    ...META,
  },
  {
    id: 'half-elf-psychic',
    raceName: 'Half-Elf',
    className: 'Psychic',
    shortName: 'Phrenic Amplification',
    description: 'Gain 1/6 of a new phrenic amplification.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'focus_power',
      perLevelValue: { numerator: 1, denominator: 6 },
      listConstraint: 'phrenic amplifications',
    },
    source: OA,
    ...META,
  },
  {
    id: 'half-elf-ranger-skill-rank',
    raceName: 'Half-Elf',
    className: 'Ranger',
    shortName: 'Companion Skill Rank',
    description: "Add +1 skill rank to the ranger's animal companion.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_ranks',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'animal_companion',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'half-elf-ranger-companion-bond',
    raceName: 'Half-Elf',
    className: 'Ranger',
    shortName: 'Companion Bond Duration',
    description: "The duration of the ranger's companion bond increases by 1 round.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'companion_bond',
      bumpType: 'duration',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'duration increases by 1 round per pick',
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'half-elf-rogue',
    raceName: 'Half-Elf',
    className: 'Rogue',
    shortName: 'Feint/Gather Information',
    description:
      'Add a +1/2 bonus on Bluff checks to feint and Diplomacy checks to gather information.',
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
          target: 'skill_diplomacy',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'to gather information',
        },
      ],
    },
    source: CRB,
    ...META,
  },
  {
    id: 'half-elf-shaman',
    raceName: 'Half-Elf',
    className: 'Shaman',
    shortName: 'Cleric Spell Add',
    description:
      "Add one spell from the cleric spell list that isn't on the shaman spell list to the list of spells the shaman knows.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'cleric spell list not on shaman spell list',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'half-elf-skald',
    raceName: 'Half-Elf',
    className: 'Skald',
    shortName: 'Raging Song Rounds',
    description: "Increase the skald's total number of raging song rounds per day by 1.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'raging_song_rounds',
      perLevelValue: { numerator: 1, denominator: 1 },
    },
    source: ACG,
    ...META,
  },
  {
    id: 'half-elf-slayer',
    raceName: 'Half-Elf',
    className: 'Slayer',
    shortName: 'Feint/Gather Information',
    description:
      'Gain a +1/2 bonus on Bluff checks to feint and Diplomacy checks to gain information.',
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
          target: 'skill_diplomacy',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'to gain information',
        },
      ],
    },
    source: ACG,
    ...META,
  },
  {
    id: 'half-elf-sorcerer',
    raceName: 'Half-Elf',
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
    id: 'half-elf-spiritualist',
    raceName: 'Half-Elf',
    className: 'Spiritualist',
    shortName: 'Phantom Skill Rank',
    description: "Add 1 skill rank to the spiritualist's phantom.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_ranks',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'phantom',
    },
    source: OA,
    ...META,
  },
  {
    id: 'half-elf-summoner',
    raceName: 'Half-Elf',
    className: 'Summoner',
    shortName: 'Eidolon Evolution Pool',
    description: "Add +1/4 to the eidolon's evolution pool.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'eidolon_evolution_pool',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: APG,
    ...META,
  },
  {
    id: 'half-elf-swashbuckler',
    raceName: 'Half-Elf',
    className: 'Swashbuckler',
    shortName: 'Charmed Life Uses',
    description:
      'Increase the number of times per day the swashbuckler can use charmed life by 1/4.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'charmed_life',
      perLevelValue: { numerator: 1, denominator: 4 },
      requiresPickOne: false,
    },
    source: ACG,
    ...META,
  },
  {
    id: 'half-elf-vigilante',
    raceName: 'Half-Elf',
    className: 'Vigilante',
    shortName: 'Seamless Guise Disguise',
    description: 'Gain +1/2 on the Disguise bonus from seamless guise.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'seamless_guise',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'Disguise bonus from seamless guise',
    },
    source: UI,
    ...META,
  },
  {
    id: 'half-elf-warpriest',
    raceName: 'Half-Elf',
    className: 'Warpriest',
    shortName: 'Channel Energy Damage/Heal',
    description:
      "Gain a +1/3 bonus on the damage dealt or healed with the warpriest's channel energy ability.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'channel_energy',
      bumpType: 'damage',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription: 'damage dealt or healed',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'half-elf-witch',
    raceName: 'Half-Elf',
    className: 'Witch',
    shortName: 'Familiar Spell Add',
    description:
      "Add one spell from the witch spell list to the witch's familiar. This spell must be at least one level below the highest spell level she can cast.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_to_familiar',
      perLevelValue: { numerator: 1, denominator: 1 },
      spellLevelConstraint: 'at least 1 level below highest castable',
      listConstraint: 'witch spell list',
    },
    source: APG,
    ...META,
  },
  {
    id: 'half-elf-wizard',
    raceName: 'Half-Elf',
    className: 'Wizard',
    shortName: 'Enchantment Duration CL',
    description:
      "When casting wizard enchantment spells, add +1/3 to the effective caster level of the spell, but only to determine the spell's duration.",
    mechanicalEffect: {
      type: 'caster_level',
      scopeType: 'duration_only',
      schoolFilter: 'enchantment',
      targetClass: 'Wizard',
      perLevelValue: { numerator: 1, denominator: 3 },
    },
    source: CRB,
    ...META,
  },
];
