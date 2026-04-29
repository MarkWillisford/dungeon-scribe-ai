// Gnome favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/core-races/gnome/
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
//   - (PRG:OA) → Occult Adventures

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

export const GNOME_FAVORED_CLASS_BONUSES: FavoredClassBonusEntry[] = [
  {
    id: 'gnome-alchemist',
    raceName: 'Gnome',
    className: 'Alchemist',
    shortName: 'Bombs Per Day',
    description: 'Add +1/2 to the number of bombs per day the alchemist can create.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'bombs',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: false,
    },
    source: APG,
    ...META,
  },
  {
    id: 'gnome-arcanist',
    raceName: 'Gnome',
    className: 'Arcanist',
    shortName: 'Arcane Reservoir',
    description:
      'Add 1/6 to the number of points the arcanist gains in her arcane reservoir each day.',
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'arcane_reservoir',
      perLevelValue: { numerator: 1, denominator: 6 },
    },
    source: ACG,
    ...META,
  },
  {
    id: 'gnome-barbarian',
    raceName: 'Gnome',
    className: 'Barbarian',
    shortName: 'Trap Sense Bonus',
    description: "Add a +1/2 bonus to the barbarian's trap sense.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'trap_sense',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 2 },
    },
    source: CRB,
    ...META,
  },
  {
    id: 'gnome-bard',
    raceName: 'Gnome',
    className: 'Bard',
    shortName: 'Bardic Performance Rounds',
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
    id: 'gnome-bloodrager',
    raceName: 'Gnome',
    className: 'Bloodrager',
    shortName: 'Bloodline Power CL',
    description:
      "Add 1/4 to the bloodrager's effective class level when determining the power of her bloodrager bloodline powers.",
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'bloodline_power',
      perLevelValue: { numerator: 1, denominator: 4 },
      requiresPickOne: false,
      scopeDescription: 'bloodrager bloodline powers only',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'gnome-brawler',
    raceName: 'Gnome',
    className: 'Brawler',
    shortName: 'Martial Flexibility Uses',
    description:
      'Increase the number of times per day the brawler can use martial flexibility by 1/4.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'martial_flexibility',
      perLevelValue: { numerator: 1, denominator: 4 },
      requiresPickOne: false,
    },
    source: ACG,
    ...META,
  },
  {
    id: 'gnome-cavalier',
    raceName: 'Gnome',
    className: 'Cavalier',
    shortName: 'Mounted Speed',
    description:
      "Add +1 to the cavalier's mounted base speed. In combat this has no effect unless the cavalier has selected this reward five times (or another increment of five). If the cavalier ever replaces his mount, the new mount gains this bonus to its speed.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'speed',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'bonded_creature',
      applyInIncrementsOf: 5,
      conditionDescription: "applies to the cavalier's mount; transfers to replacement mount",
    },
    source: APG,
    ...META,
  },
  {
    id: 'gnome-cleric',
    raceName: 'Gnome',
    className: 'Cleric',
    shortName: 'Channel Heal Animal/Fey/Plant',
    description:
      "Add +1/2 to the cleric's channeled energy total when healing creatures of the animal, fey, and plant types.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'channel_energy_healing',
      perLevelValue: { numerator: 1, denominator: 2 },
      vsCreatureType: ['animal', 'fey', 'plant'],
      conditionDescription: 'when healing creatures of the animal, fey, and plant types',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'gnome-druid-energy-resist',
    raceName: 'Gnome',
    className: 'Druid',
    shortName: 'Energy Resistance',
    description:
      'The druid gains energy resistance 1 against acid, cold, electricity, or fire. Each time the druid selects this reward, increase her resistance to one of these energy types by +1 (maximum 10 for any one type).',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'energy_resistance',
      perLevelValue: { numerator: 1, denominator: 1 },
      requiresPickOne: true,
      pickOnePrompt: 'energy type (acid, cold, electricity, or fire)',
      conditionDescription:
        'maximum 10 for any one type; each selection chooses one of acid, cold, electricity, or fire',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'gnome-druid-companion-dr',
    raceName: 'Gnome',
    className: 'Druid',
    shortName: 'Companion DR/Cold Iron',
    description:
      "The druid's animal companion gains 1/4 point of DR/cold iron (maximum DR 5/cold iron). If the druid replaces her companion, the new companion gains this DR.",
    mechanicalEffect: {
      type: 'damage_reduction',
      target: 'animal_companion',
      damageType: 'cold iron',
      perLevelValue: { numerator: 1, denominator: 4 },
      maxTotal: 5,
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'gnome-fighter',
    raceName: 'Gnome',
    className: 'Fighter',
    shortName: 'Dirty Trick/Steal Resist',
    description: "Add +1 to the fighter's CMD when resisting a dirty trick or steal attempt.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmd',
      perLevelValue: { numerator: 1, denominator: 1 },
      vsCombatManeuver: ['dirty_trick', 'steal'],
    },
    source: CRB,
    ...META,
  },
  {
    id: 'gnome-gunslinger',
    raceName: 'Gnome',
    className: 'Gunslinger',
    shortName: 'Gunsmithing Repair Time',
    description:
      'The gunslinger reduces the amount of time needed to restore a broken firearm using the Gunsmithing feat by 5 minutes (maximum reduction of 50 minutes).',
    mechanicalEffect: {
      type: 'unmapped',
      reason:
        'Reduces firearm repair time by 5 minutes per selection (max 50 minutes). No existing variant models out-of-combat time-cost reductions; Phase 3 wiring should add a `FCBEffectTimeReduction` variant or extend feature_numeric_bump with a time-unit bump.',
    },
    source: UC,
    ...META,
  },
  {
    id: 'gnome-hunter',
    raceName: 'Gnome',
    className: 'Hunter',
    shortName: 'Companion DR/Magic',
    description:
      "Add DR 1/magic to the hunter's animal companion. Each time the hunter gains another level, the DR increases by 1/2 (maximum DR 10/magic). If the hunter replaces her animal companion, the new companion gains this damage reduction.",
    mechanicalEffect: {
      type: 'damage_reduction',
      target: 'animal_companion',
      damageType: 'magic',
      perLevelValue: { numerator: 1, denominator: 2 },
      maxTotal: 10,
    },
    source: ACG,
    ...META,
  },
  {
    id: 'gnome-inquisitor',
    raceName: 'Gnome',
    className: 'Inquisitor',
    shortName: 'Inquisitor Spell Concentration',
    description: 'Add a +1 bonus on concentration checks when casting inquisitor spells.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'concentration_check',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'when casting inquisitor spells',
    },
    source: APG,
    ...META,
  },
  {
    id: 'gnome-investigator',
    raceName: 'Gnome',
    className: 'Investigator',
    shortName: 'Extra Extract Formula',
    description:
      "Add one extract formula from the investigator's list to his formula book. This formula must be at least 1 formula level below the highest level the investigator can create.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'extract_formula',
      perLevelValue: { numerator: 1, denominator: 1 },
      spellLevelConstraint: 'at least 1 formula level below highest creatable',
      listConstraint: "investigator's formula list",
    },
    source: ACG,
    ...META,
  },
  {
    id: 'gnome-kineticist-elemental-social',
    raceName: 'Gnome',
    className: 'Kineticist',
    shortName: 'Social Skills vs Elementals',
    description:
      "Gain a +1/2 bonus on Bluff, Diplomacy, Intimidate, and Sense Motive skill checks against creatures with the elemental subtype matching the kineticist's primary element.",
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_bluff',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription:
            "against creatures with the elemental subtype matching the kineticist's primary element",
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_diplomacy',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription:
            "against creatures with the elemental subtype matching the kineticist's primary element",
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_intimidate',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription:
            "against creatures with the elemental subtype matching the kineticist's primary element",
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_sense_motive',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription:
            "against creatures with the elemental subtype matching the kineticist's primary element",
        },
      ],
    },
    source: OA,
    ...META,
  },
  {
    id: 'gnome-kineticist-substance-cmb',
    raceName: 'Gnome',
    className: 'Kineticist',
    shortName: 'Substance Infusion CMB',
    description:
      'Add a +1/6 bonus on combat maneuver checks attempted as part of a substance infusion.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmb',
      perLevelValue: { numerator: 1, denominator: 6 },
      conditionDescription: 'combat maneuver checks attempted as part of a substance infusion',
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'gnome-magus-weapon-ability',
    raceName: 'Gnome',
    className: 'Magus',
    shortName: 'Arcane Pool Weapon Ability',
    description:
      'Add one of the following weapon special abilities to the list of weapon special abilities the magus may add to his weapon using his arcane pool: defending, ghost touch, merciful, mighty cleaving, vicious; allying, conductive, corrosive, corrosive burst, menacing. Once an ability has been selected with this reward, it cannot be changed.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'bonus_weapon_property',
      perLevelValue: { numerator: 1, denominator: 1 },
      requiresPickOne: true,
      pickOnePrompt:
        'weapon special ability (defending, ghost touch, merciful, mighty cleaving, vicious, allying, conductive, corrosive, corrosive burst, or menacing)',
      scopeDescription:
        'expands the list of weapon special abilities the magus can apply via arcane pool; choice is permanent',
    },
    source: UM,
    ...META,
  },
  {
    id: 'gnome-magus-illusion-spellbook',
    raceName: 'Gnome',
    className: 'Magus',
    shortName: 'Illusion Spell to Spellbook',
    description:
      "Add 1/2 of an illusion spell from the sorcerer/wizard spell list that isn't on the magus spell list to the magus's spellbook. The magus treats this spell as if it were on the magus spell list at the same level as on the sorcerer/wizard list. This spell must be at least 1 level below the highest spell level the magus can cast.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_in_spellbook',
      perLevelValue: { numerator: 1, denominator: 2 },
      spellLevelConstraint: 'at least 1 level below highest castable',
      listConstraint: 'sorcerer/wizard illusion spell not on the magus spell list',
      scopeDescription: 'magus treats the added spell as being on the magus list at the same level',
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'gnome-medium',
    raceName: 'Gnome',
    className: 'Medium',
    shortName: 'Social Skills vs Spirits/Undead',
    description:
      'Gain a +1/2 bonus on Bluff, Diplomacy, Intimidate, and Sense Motive skill checks against spirits, undead, phantoms, and creatures native to the Astral Plane.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_bluff',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription:
            'against spirits, undead, phantoms, and creatures native to the Astral Plane',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_diplomacy',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription:
            'against spirits, undead, phantoms, and creatures native to the Astral Plane',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_intimidate',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription:
            'against spirits, undead, phantoms, and creatures native to the Astral Plane',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_sense_motive',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription:
            'against spirits, undead, phantoms, and creatures native to the Astral Plane',
        },
      ],
    },
    source: OA,
    ...META,
  },
  {
    id: 'gnome-mesmerist',
    raceName: 'Gnome',
    className: 'Mesmerist',
    shortName: 'Mesmerist Tricks Per Day',
    description: 'Increase the number of mesmerist tricks the mesmerist can use per day by 1/3.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'mesmerist_trick',
      perLevelValue: { numerator: 1, denominator: 3 },
      requiresPickOne: false,
    },
    source: OA,
    ...META,
  },
  {
    id: 'gnome-monk',
    raceName: 'Gnome',
    className: 'Monk',
    shortName: 'Ki Acrobatics Bonus',
    description:
      "Add +1 to the monk's Acrobatics check bonus gained by spending a point from his ki pool. A monk must be at least 5th level to select this benefit.",
    minimumClassLevel: 5,
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_acrobatics',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'bonus gained by spending a point from the ki pool',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'gnome-occultist',
    raceName: 'Gnome',
    className: 'Occultist',
    shortName: 'Figment Duration + Distortion',
    description:
      "Increase the duration of the occultist's minor figment by 1 minute, and increase the total concealment miss chance from the occultist's distortion resonant power by 2%. This doesn't increase the maximum miss chance.",
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'feature_numeric_bump',
          featureName: 'minor_figment',
          bumpType: 'duration',
          perLevelValue: { numerator: 1, denominator: 1 },
          conditionDescription: '+1 minute of duration per selection',
        },
        {
          type: 'feature_numeric_bump',
          featureName: 'distortion_resonant_power',
          bumpType: 'other',
          perLevelValue: { numerator: 2, denominator: 1 },
          conditionDescription:
            '+2% concealment miss chance per selection; does not increase the maximum miss chance',
        },
      ],
    },
    source: OA,
    ...META,
  },
  {
    id: 'gnome-oracle',
    raceName: 'Gnome',
    className: 'Oracle',
    shortName: 'Curse CL',
    description:
      "Add +1/2 to the oracle's level for the purpose of determining the effects of the oracle's curse ability.",
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'oracle_curse',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: false,
      scopeDescription: "for determining the effects of the oracle's curse ability",
    },
    source: APG,
    ...META,
  },
  {
    id: 'gnome-paladin',
    raceName: 'Gnome',
    className: 'Paladin',
    shortName: 'Lay On Hands HP',
    description:
      "Add +1/2 hit point to the paladin's lay on hands ability (whether using it to heal or harm).",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'lay_on_hands',
      bumpType: 'other',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'hit points added per use, whether healing or harming',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'gnome-psychic',
    raceName: 'Gnome',
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
    id: 'gnome-ranger',
    raceName: 'Gnome',
    className: 'Ranger',
    shortName: 'Companion DR/Magic',
    description:
      "Add DR 1/magic to the ranger's animal companion. Each additional time the ranger selects this benefit, the DR/magic increases by +1/2 (maximum DR 10/magic). If the ranger ever replaces his animal companion, the new companion gains this DR.",
    mechanicalEffect: {
      type: 'damage_reduction',
      target: 'animal_companion',
      damageType: 'magic',
      perLevelValue: { numerator: 1, denominator: 2 },
      maxTotal: 10,
    },
    source: CRB,
    ...META,
  },
  {
    id: 'gnome-rogue-magical-writings',
    raceName: 'Gnome',
    className: 'Rogue',
    shortName: 'Disable/UMD on Magical Writings',
    description:
      'The rogue gains a +1/2 bonus on Disable Device and Use Magic Device checks related to glyphs, symbols, scrolls, and other magical writings.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_disable_device',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'glyphs, symbols, scrolls, and other magical writings',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_use_magic_device',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'glyphs, symbols, scrolls, and other magical writings',
        },
      ],
    },
    source: CRB,
    ...META,
  },
  {
    id: 'gnome-rogue-trap-dcs',
    raceName: 'Gnome',
    className: 'Rogue',
    shortName: 'Created Trap DCs',
    description: 'Add 1/4 to the Perception and Disable Device DCs of traps the rogue creates.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'feature_numeric_bump',
          featureName: 'rogue_created_trap_dc',
          bumpType: 'other',
          perLevelValue: { numerator: 1, denominator: 4 },
          conditionDescription: 'Perception DC of traps the rogue creates',
        },
        {
          type: 'feature_numeric_bump',
          featureName: 'rogue_created_trap_dc',
          bumpType: 'other',
          perLevelValue: { numerator: 1, denominator: 4 },
          conditionDescription: 'Disable Device DC of traps the rogue creates',
        },
      ],
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'gnome-shaman',
    raceName: 'Gnome',
    className: 'Shaman',
    shortName: 'Extra Shaman Hex',
    description: 'The shaman gains 1/6 of a new shaman hex.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'shaman_hex',
      perLevelValue: { numerator: 1, denominator: 6 },
    },
    source: ACG,
    ...META,
  },
  {
    id: 'gnome-skald',
    raceName: 'Gnome',
    className: 'Skald',
    shortName: 'Skald Spell Concentration',
    description: 'Add a +1 bonus on concentration checks when casting skald spells.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'concentration_check',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'when casting skald spells',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'gnome-slayer',
    raceName: 'Gnome',
    className: 'Slayer',
    shortName: 'Extra Slayer Talent',
    description: 'The slayer gains 1/6 of a new slayer talent.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'slayer_talent',
      perLevelValue: { numerator: 1, denominator: 6 },
    },
    source: ACG,
    ...META,
  },
  {
    id: 'gnome-sorcerer',
    raceName: 'Gnome',
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
    id: 'gnome-spiritualist',
    raceName: 'Gnome',
    className: 'Spiritualist',
    shortName: 'Spiritual Interference Shield',
    description:
      'Add 1/6 to the shield bonus granted to the spiritualist while under the effects of either spiritual interference or greater spiritual interference.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'spiritual_interference_shield_bonus',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 6 },
      conditionDescription:
        'shield bonus while under spiritual interference or greater spiritual interference',
    },
    source: OA,
    ...META,
  },
  {
    id: 'gnome-summoner',
    raceName: 'Gnome',
    className: 'Summoner',
    shortName: 'Eidolon Hit Points',
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
    id: 'gnome-swashbuckler',
    raceName: 'Gnome',
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
    id: 'gnome-vigilante',
    raceName: 'Gnome',
    className: 'Vigilante',
    shortName: 'Bluff for In-Character Lies',
    description:
      "Gain +1/2 on Bluff checks when attempting to tell a lie that would be true from the point of view of the vigilante's current identity.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_bluff',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription:
        "lies that would be true from the point of view of the vigilante's current identity",
    },
    source: UI,
    ...META,
  },
  {
    id: 'gnome-warpriest',
    raceName: 'Gnome',
    className: 'Warpriest',
    shortName: 'Channel Heal Animal/Fey/Plant',
    description:
      "Add 1/2 to the result of the warpriest's channeled energy when healing creatures of the animal, fey, and plant types.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'channel_energy_healing',
      perLevelValue: { numerator: 1, denominator: 2 },
      vsCreatureType: ['animal', 'fey', 'plant'],
      conditionDescription: 'when healing creatures of the animal, fey, and plant types',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'gnome-witch',
    raceName: 'Gnome',
    className: 'Witch',
    shortName: 'Extra Witch Hex',
    description: 'The witch gains 1/6 of a new witch hex.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'witch_hex',
      perLevelValue: { numerator: 1, denominator: 6 },
    },
    source: APG,
    ...META,
  },
  {
    id: 'gnome-wizard',
    raceName: 'Gnome',
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
