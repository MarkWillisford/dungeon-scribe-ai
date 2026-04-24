// Half-Orc favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/core-races/half-orc/
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

export const HALF_ORC_FAVORED_CLASS_BONUSES: FavoredClassBonusOption[] = [
  {
    id: 'half-orc-alchemist-bomb-damage',
    raceName: 'Half-Orc',
    className: 'Alchemist',
    shortName: 'Bomb Damage',
    description: "Add +1/2 to the alchemist's bomb damage.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'bomb_damage',
      perLevelValue: { numerator: 1, denominator: 2 },
    },
    source: APG,
    ...META,
  },
  {
    id: 'half-orc-alchemist-mutagen-break',
    raceName: 'Half-Orc',
    className: 'Alchemist',
    shortName: 'Mutagen Break/Sunder',
    description:
      "Gain a +1/2 bonus on Strength checks to break objects and on sunder combat maneuver checks when under the effects of a mutagen that increases the alchemist's Strength or Constitution score.",
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'strength_check_break',
          perLevelValue: { numerator: 1, denominator: 2 },
          onlyWhenActive: 'mutagen',
          conditionDescription: 'mutagen must increase Strength or Constitution',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'cmb',
          perLevelValue: { numerator: 1, denominator: 2 },
          vsCombatManeuver: ['sunder'],
          onlyWhenActive: 'mutagen',
          conditionDescription: 'mutagen must increase Strength or Constitution',
        },
      ],
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'half-orc-arcanist',
    raceName: 'Half-Orc',
    className: 'Arcanist',
    shortName: 'Concentration vs Damage',
    description:
      'Gain a +1 bonus on concentration checks made due to taking damage while casting arcanist spells.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'concentration_check',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'due to taking damage while casting arcanist spells',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'half-orc-barbarian',
    raceName: 'Half-Orc',
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
    id: 'half-orc-bard-performance',
    raceName: 'Half-Orc',
    className: 'Bard',
    shortName: 'Bonus Bardic Performance Round',
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
    id: 'half-orc-bard-secret-messages',
    raceName: 'Half-Orc',
    className: 'Bard',
    shortName: 'Secret Messages/Handwriting',
    description:
      'Gain a +1/2 bonus on Bluff checks to pass secret messages, Sense Motive checks to discern secret messages, and Linguistic checks to decipher unusual handwriting.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_bluff',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'pass secret messages',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_sense_motive',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'discern secret messages',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_linguistics',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'decipher unusual handwriting',
        },
      ],
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'half-orc-bloodrager',
    raceName: 'Half-Orc',
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
    id: 'half-orc-brawler',
    raceName: 'Half-Orc',
    className: 'Brawler',
    shortName: 'Unarmed Strike CL',
    description: "Add 1/4 to the brawler's effective level to determine her unarmed strike damage.",
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'unarmed_strike_damage',
      perLevelValue: { numerator: 1, denominator: 4 },
      requiresPickOne: false,
      scopeDescription: 'only to determine unarmed strike damage',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'half-orc-cavalier',
    raceName: 'Half-Orc',
    className: 'Cavalier',
    shortName: 'Mount HP',
    description:
      "Add +1 hit point to the cavalier's mount companion. If the cavalier ever replaces his mount, the new mount gains these bonus hit points.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'hit_points',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'animal_companion',
      conditionDescription: 'applies to the cavalier mount companion',
    },
    source: APG,
    ...META,
  },
  {
    id: 'half-orc-cleric',
    raceName: 'Half-Orc',
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
    id: 'half-orc-druid',
    raceName: 'Half-Orc',
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
    id: 'half-orc-fighter-stabilize',
    raceName: 'Half-Orc',
    className: 'Fighter',
    shortName: 'Stabilize Bonus',
    description: 'Add a +2 bonus on rolls to stabilize when dying.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'stabilize_check',
      perLevelValue: { numerator: 2, denominator: 1 },
    },
    source: CRB,
    ...META,
  },
  {
    id: 'half-orc-fighter-nonlethal-dr',
    raceName: 'Half-Orc',
    className: 'Fighter',
    shortName: 'Nonlethal DR',
    description: 'The fighter gains 1/2 point of DR/— against nonlethal damage (maximum DR 10/—).',
    mechanicalEffect: {
      type: 'damage_reduction',
      target: 'self',
      damageType: 'nonlethal',
      perLevelValue: { numerator: 1, denominator: 2 },
      maxTotal: 10,
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'half-orc-gunslinger',
    raceName: 'Half-Orc',
    className: 'Gunslinger',
    shortName: 'Pistol Whip Attack',
    description: 'Add a +1/3 bonus on attack rolls when using the pistol whip deed.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'attack_roll',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription: 'when using the pistol whip deed',
    },
    source: UC,
    ...META,
  },
  {
    id: 'half-orc-hunter',
    raceName: 'Half-Orc',
    className: 'Hunter',
    shortName: 'Animal Companion HP',
    description:
      "Add 1 hit point to the hunter's animal companion. If the hunter replaces his animal companion, the new animal companion gains these bonus hit points.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'hit_points',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'animal_companion',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'half-orc-inquisitor',
    raceName: 'Half-Orc',
    className: 'Inquisitor',
    shortName: 'Intimidate/Identify',
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
          conditionDescription: 'Knowledge checks to identify creatures',
        },
      ],
    },
    source: APG,
    ...META,
  },
  {
    id: 'half-orc-investigator',
    raceName: 'Half-Orc',
    className: 'Investigator',
    shortName: 'Studied Combat Crit Confirm',
    description:
      'Gain a +1/3 bonus on critical hit confirmation rolls made while using studied combat (maximum bonus of +5). This bonus does not stack with those gained through Critical Focus and similar effects.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'critical_confirm',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription:
        'while using studied combat; maximum bonus +5; does not stack with Critical Focus and similar',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'half-orc-kineticist',
    raceName: 'Half-Orc',
    className: 'Kineticist',
    shortName: 'Fire Blast Damage',
    description: 'Add 1/3 point of fire damage to fire-element blasts that deal fire damage.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'kineticist_blast_damage',
      perLevelValue: { numerator: 1, denominator: 3 },
      withDamageType: ['fire'],
      conditionDescription: 'fire-element blasts that deal fire damage',
    },
    source: OA,
    ...META,
  },
  {
    id: 'half-orc-magus',
    raceName: 'Half-Orc',
    className: 'Magus',
    shortName: 'Fire Spell Damage',
    description: 'Add +1/2 point of fire damage to spells that deal fire damage cast by the magus.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'spell_damage',
      perLevelValue: { numerator: 1, denominator: 2 },
      withDamageType: ['fire'],
    },
    source: UM,
    ...META,
  },
  {
    id: 'half-orc-medium',
    raceName: 'Half-Orc',
    className: 'Medium',
    shortName: 'Spirit Surge No Influence',
    description:
      'When gaining a taboo, the medium can use spirit surge without incurring influence an additional 1/4 time per day.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'spirit_surge_no_influence',
      perLevelValue: { numerator: 1, denominator: 4 },
      requiresPickOne: false,
      pickOneConstraint: 'only when a taboo has been taken',
    },
    source: OA,
    ...META,
  },
  {
    id: 'half-orc-mesmerist',
    raceName: 'Half-Orc',
    className: 'Mesmerist',
    shortName: 'Painful Stare Damage',
    description: "Increase the mesmerist's bonus damage from painful stare by 1/2 point.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'painful_stare',
      bumpType: 'damage',
      perLevelValue: { numerator: 1, denominator: 2 },
    },
    source: OA,
    ...META,
  },
  {
    id: 'half-orc-monk',
    raceName: 'Half-Orc',
    className: 'Monk',
    shortName: 'Grapple CMD + Stunning Fist',
    description:
      "Add +1 to the monk's CMD when resisting a grapple and +1/2 to the number of stunning attacks he can attempt per day.",
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'cmd',
          perLevelValue: { numerator: 1, denominator: 1 },
          vsCombatManeuver: ['grapple'],
        },
        {
          type: 'feature_uses_per_day',
          featureName: 'stunning_fist',
          perLevelValue: { numerator: 1, denominator: 2 },
          requiresPickOne: false,
        },
      ],
    },
    source: CRB,
    ...META,
  },
  {
    id: 'half-orc-occultist',
    raceName: 'Half-Orc',
    className: 'Occultist',
    shortName: 'Focus Power Damage',
    description: 'Deal an additional 1/2 point of damage with focus powers.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'focus_power_damage',
      perLevelValue: { numerator: 1, denominator: 2 },
    },
    source: OA,
    ...META,
  },
  {
    id: 'half-orc-oracle',
    raceName: 'Half-Orc',
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
    source: APG,
    ...META,
  },
  {
    id: 'half-orc-paladin',
    raceName: 'Half-Orc',
    className: 'Paladin',
    shortName: 'Smite Evil Crit Confirm',
    description:
      'Add +1/3 on critical hit confirmation rolls made while using smite evil (maximum bonus of +5). This bonus does not stack with Critical Focus.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'critical_confirm',
      perLevelValue: { numerator: 1, denominator: 3 },
      onlyWhenActive: 'smite_evil',
      conditionDescription: 'maximum bonus +5; does not stack with Critical Focus',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'half-orc-psychic',
    raceName: 'Half-Orc',
    className: 'Psychic',
    shortName: 'Concentration vs Damage',
    description:
      'Gain a +1 bonus on concentration checks required because of taking damage while casting spells from the psychic class.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'concentration_check',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'due to taking damage while casting psychic class spells',
    },
    source: OA,
    ...META,
  },
  {
    id: 'half-orc-ranger',
    raceName: 'Half-Orc',
    className: 'Ranger',
    shortName: 'Animal Companion HP',
    description:
      "Add +1 hit point to the ranger's animal companion. If the ranger ever replaces his animal companion, the new animal companion gains these bonus hit points.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'hit_points',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'animal_companion',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'half-orc-rogue',
    raceName: 'Half-Orc',
    className: 'Rogue',
    shortName: 'Sneak Attack Crit Confirm',
    description:
      'Add +1/3 on critical hit confirmation rolls made while using sneak attack (maximum bonus of +5). This bonus does not stack with Critical Focus.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'critical_confirm',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription:
        'while using sneak attack; maximum bonus +5; does not stack with Critical Focus',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'half-orc-shaman',
    raceName: 'Half-Orc',
    className: 'Shaman',
    shortName: 'Cleric Spell Known',
    description:
      "Add one spell from the cleric spell list that isn't on the shaman spell list to the list of spells the shaman knows. This spell must be at least 1 level below the highest spell level the shaman can cast.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'cleric spell list not on shaman spell list',
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'half-orc-skald',
    raceName: 'Half-Orc',
    className: 'Skald',
    shortName: 'Bonus Raging Song Round',
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
    id: 'half-orc-slayer',
    raceName: 'Half-Orc',
    className: 'Slayer',
    shortName: 'Sneak Attack Crit Confirm',
    description:
      "Gain a +1/3 bonus on critical hit confirmation rolls made while using sneak attack (maximum bonus of +5). This bonus doesn't stack with those gained through Critical Focus and similar effects.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'critical_confirm',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription:
        'while using sneak attack; maximum bonus +5; does not stack with Critical Focus and similar',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'half-orc-sorcerer',
    raceName: 'Half-Orc',
    className: 'Sorcerer',
    shortName: 'Fire Spell Damage',
    description:
      'Add +1/2 point of fire damage to spells that deal fire damage cast by the sorcerer.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'spell_damage',
      perLevelValue: { numerator: 1, denominator: 2 },
      withDamageType: ['fire'],
    },
    source: CRB,
    ...META,
  },
  {
    id: 'half-orc-spiritualist',
    raceName: 'Half-Orc',
    className: 'Spiritualist',
    shortName: 'Phantom HP',
    description: "Add 1 hit point to the spiritualist's phantom.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'hit_points',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'phantom',
    },
    source: OA,
    ...META,
  },
  {
    id: 'half-orc-summoner',
    raceName: 'Half-Orc',
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
    source: APG,
    ...META,
  },
  {
    id: 'half-orc-swashbuckler',
    raceName: 'Half-Orc',
    className: 'Swashbuckler',
    shortName: 'Precise Strike Crit Confirm',
    description:
      "Gain a +1/3 bonus on all critical hit confirmation rolls made while using the precise strike deed (maximum bonus of +5). This bonus doesn't stack with those gained through Critical Focus and similar effects.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'critical_confirm',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription:
        'while using the precise strike deed; maximum bonus +5; does not stack with Critical Focus and similar',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'half-orc-vigilante',
    raceName: 'Half-Orc',
    className: 'Vigilante',
    shortName: 'Unshakable DC',
    description: 'Add 1/2 to the DC increase from unshakable.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'unshakable',
      bumpType: 'other',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'DC increase from unshakable',
    },
    source: UI,
    ...META,
  },
  {
    id: 'half-orc-warpriest',
    raceName: 'Half-Orc',
    className: 'Warpriest',
    shortName: 'Stabilize Bonus',
    description: 'Gain a +2 bonus on rolls to stabilize when dying.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'stabilize_check',
      perLevelValue: { numerator: 2, denominator: 1 },
    },
    source: ACG,
    ...META,
  },
  {
    id: 'half-orc-witch',
    raceName: 'Half-Orc',
    className: 'Witch',
    shortName: 'Familiar Skill Rank',
    description:
      "Add +1 skill rank to the witch's familiar. If the half-orc ever replaces her familiar, the new familiar gains these bonus skill ranks.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_ranks',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'familiar',
    },
    source: APG,
    ...META,
  },
  {
    id: 'half-orc-wizard',
    raceName: 'Half-Orc',
    className: 'Wizard',
    shortName: 'Concentration vs Damage',
    description:
      'Add a +1 bonus on concentration checks made due to taking damage while casting wizard spells.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'concentration_check',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'due to taking damage while casting wizard spells',
    },
    source: CRB,
    ...META,
  },
];
