// Human favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/core-races/human/
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

export const HUMAN_FAVORED_CLASS_BONUSES: FavoredClassBonusEntry[] = [
  {
    id: 'human-alchemist',
    raceName: 'Human',
    className: 'Alchemist',
    shortName: 'Extra Formula',
    description:
      "Add one extract formula from the alchemist formula list to the character's formula book. This formula must be at least one level below the highest formula level the alchemist can create.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'extract_formula',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'alchemist formula list',
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: APG,
    ...META,
  },
  {
    id: 'human-arcanist',
    raceName: 'Human',
    className: 'Arcanist',
    shortName: 'Extra Spell in Spellbook',
    description:
      "Add one spell from the arcanist spell list to the arcanist's spellbook. The spell must be at least 1 spell level below the highest level the arcanist can cast.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_in_spellbook',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'arcanist spell list',
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'human-barbarian',
    raceName: 'Human',
    className: 'Barbarian',
    shortName: 'Trap Sense or Superstitious',
    description:
      'Add a +1/2 bonus to trap sense or +1/3 to the bonus from the superstitious rage power.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'feature_numeric_bump',
          featureName: 'trap_sense',
          bumpType: 'bonus',
          perLevelValue: { numerator: 1, denominator: 2 },
        },
        {
          type: 'feature_numeric_bump',
          featureName: 'superstitious_rage_power',
          bumpType: 'bonus',
          perLevelValue: { numerator: 1, denominator: 3 },
        },
      ],
    },
    source: CRB,
    ...META,
  },
  {
    id: 'human-bard',
    raceName: 'Human',
    className: 'Bard',
    shortName: 'Extra Spell Known',
    description:
      'Add one spell known from the bard spell list. This spell must be at least one level below the highest spell level the bard can cast.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'bard spell list',
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'human-bloodrager',
    raceName: 'Human',
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
    id: 'human-brawler',
    raceName: 'Human',
    className: 'Brawler',
    shortName: 'CMD vs Chosen Maneuvers',
    description:
      "Gain a +1 bonus to the brawler's CMD when resisting two combat maneuvers of the brawler's choice.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmd',
      perLevelValue: { numerator: 1, denominator: 1 },
      requiresPickOne: true,
      pickOnePrompt: 'combat maneuver',
      pickCount: 2,
    },
    source: ACG,
    ...META,
  },
  {
    id: 'human-cavalier',
    raceName: 'Human',
    className: 'Cavalier',
    shortName: 'Banner Bonus',
    description: "Add +1/4 to the cavalier's banner bonus.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'banner',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: APG,
    ...META,
  },
  {
    id: 'human-cleric',
    raceName: 'Human',
    className: 'Cleric',
    shortName: 'CL Check vs Outsider SR',
    description:
      'Add a +1 bonus on caster level checks made to overcome the spell resistance of outsiders.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'caster_level_check_sr',
      perLevelValue: { numerator: 1, denominator: 1 },
      vsCreatureType: ['outsider'],
    },
    source: CRB,
    ...META,
  },
  {
    id: 'human-druid',
    raceName: 'Human',
    className: 'Druid',
    shortName: 'Diplomacy/Intimidate Attitude',
    description:
      "Add a +1/2 bonus on Diplomacy and Intimidate checks to change a creature's attitude.",
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_diplomacy',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: "to change a creature's attitude",
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_intimidate',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: "to change a creature's attitude",
        },
      ],
    },
    source: CRB,
    ...META,
  },
  {
    id: 'human-fighter',
    raceName: 'Human',
    className: 'Fighter',
    shortName: 'CMD vs Chosen Maneuvers',
    description:
      "Add +1 to the Fighter's CMD when resisting two combat maneuvers of the character's choice.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmd',
      perLevelValue: { numerator: 1, denominator: 1 },
      requiresPickOne: true,
      pickOnePrompt: 'combat maneuver',
      pickCount: 2,
    },
    source: CRB,
    ...META,
  },
  {
    id: 'human-gunslinger',
    raceName: 'Human',
    className: 'Gunslinger',
    shortName: 'Grit Points',
    description: "Add +1/4 point to the gunslinger's grit points.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'grit',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: UC,
    ...META,
  },
  {
    id: 'human-hunter',
    raceName: 'Human',
    className: 'Hunter',
    shortName: 'Companion Skill Rank',
    description:
      "Add 1 skill rank to the hunter's animal companion. If the hunter replaces his animal companion, the new animal companion gains these bonus skill ranks.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_ranks',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'animal_companion',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'human-inquisitor',
    raceName: 'Human',
    className: 'Inquisitor',
    shortName: 'Extra Spell Known',
    description:
      'Add one spell known from the inquisitor spell list. This spell must be at least one level below the highest spell level the inquisitor can cast.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'inquisitor spell list',
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: APG,
    ...META,
  },
  {
    id: 'human-inquisitor-perception',
    raceName: 'Human',
    className: 'Inquisitor',
    shortName: 'Perception vs Disguise/Invisible',
    description:
      'Add a +1/2 bonus on Perception checks to see through magical disguises or pinpoint invisible creatures.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_perception',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'to see through magical disguises or pinpoint invisible creatures',
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'human-investigator',
    raceName: 'Human',
    className: 'Investigator',
    shortName: 'Extra Formula',
    description:
      "Add one extract formula from the investigator's formula list to his formula book. This formula must be at least 1 formula level below the highest level the investigator can create.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'extract_formula',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'investigator formula list',
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'human-kineticist',
    raceName: 'Human',
    className: 'Kineticist',
    shortName: 'Extra Wild Talent Feat',
    description: 'Gain 1/6 of an Extra Wild Talent feat.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'feat',
      perLevelValue: { numerator: 1, denominator: 6 },
      listConstraint: 'Extra Wild Talent feat',
    },
    source: OA,
    ...META,
  },
  {
    id: 'human-magus',
    raceName: 'Human',
    className: 'Magus',
    shortName: 'Arcane Pool',
    description: "Add +1/4 point to the magus' arcane pool.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'arcane_pool',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: UM,
    ...META,
  },
  {
    id: 'human-medium',
    raceName: 'Human',
    className: 'Medium',
    shortName: 'Spirit Surge Without Influence',
    description:
      'When gaining a taboo, the medium can use spirit surge without incurring influence an additional 1/4 time per day.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'spirit_surge_without_influence',
      perLevelValue: { numerator: 1, denominator: 4 },
      requiresPickOne: false,
      pickOneConstraint: 'only when the medium has gained a taboo',
    },
    source: OA,
    ...META,
  },
  {
    id: 'human-mesmerist',
    raceName: 'Human',
    className: 'Mesmerist',
    shortName: 'Towering Ego Bonus',
    description:
      "Increase the mesmerist's towering ego bonus by 1/3 point (to a maximum increase of +2).",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'towering_ego',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription: 'maximum increase of +2',
    },
    source: OA,
    ...META,
  },
  {
    id: 'human-monk',
    raceName: 'Human',
    className: 'Monk',
    shortName: 'Ki Pool',
    description: "Add +1/4 point to the monk's ki pool.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'ki',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: CRB,
    ...META,
  },
  {
    id: 'human-occultist',
    raceName: 'Human',
    className: 'Occultist',
    shortName: 'New Focus Power',
    description: 'Gain 1/6 of a new focus power.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'focus_power',
      perLevelValue: { numerator: 1, denominator: 6 },
    },
    source: OA,
    ...META,
  },
  {
    id: 'human-occultist-ritual-skill',
    raceName: 'Human',
    className: 'Occultist',
    shortName: 'Occult Ritual Skill Check',
    description: 'Add a +1/3 bonus on any skill check attempted as a part of an occult ritual.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_check',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription: 'any skill check attempted as a part of an occult ritual',
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'human-oracle',
    raceName: 'Human',
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
    id: 'human-paladin-energy-resist',
    raceName: 'Human',
    className: 'Paladin',
    shortName: 'Energy Resistance',
    description: "Add +1 to the paladin's energy resistance to one kind of energy (maximum +10).",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'energy_resistance',
      perLevelValue: { numerator: 1, denominator: 1 },
      requiresPickOne: true,
      pickOnePrompt: 'energy type',
      conditionDescription: 'maximum +10',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'human-psychic',
    raceName: 'Human',
    className: 'Psychic',
    shortName: 'Extra Spell Known',
    description:
      'Add one spell known from the psychic spell list. This spell must be at least 1 level lower than the highest spell level the psychic can cast.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'psychic spell list',
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: OA,
    ...META,
  },
  {
    id: 'human-psychic-flatfooted-ac',
    raceName: 'Human',
    className: 'Psychic',
    shortName: 'Flat-Footed AC',
    description:
      "Add a +1/4 bonus to AC when flatfooted, to a maximum of what the psychic's AC would be if not flat-footed.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'ac',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription: "when flat-footed; capped at the psychic's non-flat-footed AC",
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'human-ranger',
    raceName: 'Human',
    className: 'Ranger',
    shortName: 'Companion HP or Skill Rank',
    description:
      "Add +1 hit point or +1 skill rank to the ranger's animal companion. If the ranger ever replaces his companion, the new companion gains these bonus hit points or skill ranks.",
    mechanicalEffect: {
      type: 'unmapped',
      reason:
        'Per-level choice between +1 HP or +1 skill rank to animal companion. Requires a "player-chooses-per-level" variant not yet modeled; Phase 3 wiring should add an FCBEffectCompanionHpOrSkillChoice variant.',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'human-rogue',
    raceName: 'Human',
    className: 'Rogue',
    shortName: 'New Rogue Talent',
    description: 'The rogue gains +1/6 of a new rogue talent.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'rogue_talent',
      perLevelValue: { numerator: 1, denominator: 6 },
    },
    source: CRB,
    ...META,
  },
  {
    id: 'human-shaman',
    raceName: 'Human',
    className: 'Shaman',
    shortName: 'Extra Cleric Spell Known',
    description:
      "Add one spell from the cleric spell list that isn't on the shaman spell list to the list of spells the shaman knows. This spell must be at least 1 level below the highest spell level the shaman can cast.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'cleric spell list, not on shaman spell list',
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'human-skald',
    raceName: 'Human',
    className: 'Skald',
    shortName: 'Extra Spell Known',
    description:
      "Add one spell from the skald's spell list to the skald's known spells. This spell must be at least 1 spell level below the highest level the skald can cast.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'skald spell list',
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'human-slayer',
    raceName: 'Human',
    className: 'Slayer',
    shortName: 'New Slayer Talent',
    description: 'Gain 1/6 of a new slayer talent.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'slayer_talent',
      perLevelValue: { numerator: 1, denominator: 6 },
    },
    source: ACG,
    ...META,
  },
  {
    id: 'human-sorcerer',
    raceName: 'Human',
    className: 'Sorcerer',
    shortName: 'Extra Spell Known',
    description:
      'Add one spell known from the sorcerer spell list. This spell must be at least one level below the highest spell level the sorcerer can cast.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'sorcerer spell list',
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'human-spiritualist',
    raceName: 'Human',
    className: 'Spiritualist',
    shortName: 'Phantom HP or Skill Rank',
    description: "Add 1 skill rank or 1 hit point to the spiritualist's phantom.",
    mechanicalEffect: {
      type: 'unmapped',
      reason:
        'Per-level choice between +1 skill rank or +1 HP to phantom. Requires a "player-chooses-per-level" variant not yet modeled; Phase 3 wiring should add an FCBEffectCompanionHpOrSkillChoice variant (shared with similar ranger/summoner FCBs).',
    },
    source: OA,
    ...META,
  },
  {
    id: 'human-summoner',
    raceName: 'Human',
    className: 'Summoner',
    shortName: 'Eidolon HP or Skill Rank',
    description: "Add +1 hit point or +1 skill rank to the summoner's eidolon.",
    mechanicalEffect: {
      type: 'unmapped',
      reason:
        'Per-level choice between +1 HP or +1 skill rank to eidolon. Requires a "player-chooses-per-level" variant not yet modeled; Phase 3 wiring should add an FCBEffectCompanionHpOrSkillChoice variant.',
    },
    source: APG,
    ...META,
  },
  {
    id: 'human-swashbuckler',
    raceName: 'Human',
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
    id: 'human-vigilante',
    raceName: 'Human',
    className: 'Vigilante',
    shortName: 'Seamless Guise Disguise',
    description: 'Gain +1/2 on the Disguise bonus provided by seamless guise.',
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
    id: 'human-warpriest',
    raceName: 'Human',
    className: 'Warpriest',
    shortName: 'Bonus Combat Feat',
    description: 'Gain 1/6 of a new bonus combat feat.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'combat_feat',
      perLevelValue: { numerator: 1, denominator: 6 },
    },
    source: ACG,
    ...META,
  },
  {
    id: 'human-witch',
    raceName: 'Human',
    className: 'Witch',
    shortName: 'Extra Familiar Spell',
    description:
      "Add one spell from the witch spell list to the witch's familiar. This spell must be at least one level below the highest spell level she can cast. If the witch ever replaces her familiar, the new familiar knows these bonus spells.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_to_familiar',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'witch spell list',
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: APG,
    ...META,
  },
  {
    id: 'human-wizard',
    raceName: 'Human',
    className: 'Wizard',
    shortName: 'Extra Spell in Spellbook',
    description:
      "Add one spell from the wizard spell list to the wizard's spellbook. This spell must be at least one level below the highest spell level the wizard can cast.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_in_spellbook',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'wizard spell list',
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: CRB,
    ...META,
  },
];
