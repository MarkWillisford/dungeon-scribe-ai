import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsAB5: WondrousItemDefinition[] = [
  // ---------------------------------------------------------------------------
  // 101. Banner of Restful Nights
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-banner-of-restful-nights',
    name: 'Banner of Restful Nights',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 5040,
    weight: 7,

    description:
      'This rather plain banner of nondescript canvas cloth can display chosen devices or patterns on ' +
      'command. When planted firmly in the ground, once per day it creates a calming 20-foot radius for ' +
      '8 hours (or until removed). Creatures within the area gain the benefits of endure elements, the ' +
      'banner resists magical weather effects from lower caster level sources, and it functions as an ' +
      'audible alarm spell with a password chosen by the planter.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['alarm', 'endure elements'],
      cost: 2520,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'special',
        target: 'special.endure_elements_aura_20ft',
        value: 0,
        source: 'Banner of Restful Nights',
      },
      {
        type: 'special',
        target: 'special.alarm_with_password',
        value: 0,
        source: 'Banner of Restful Nights',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 102. Banner of Tactical Command (standard and lesser variants)
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-banner-of-tactical-command',
    name: 'Banner of Tactical Command',
    category: 'wondrous',
    source: 'Ultimate Combat',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 10,
    slot: 'none',

    price: 100000,
    weight: 3,

    description:
      'This brightly colored 2-foot-by-4-foot banner is mounted on an 8-foot pole of spiraled gold and ' +
      'ivory. When displayed by an army commander during mass combat, the army gains knowledge of one ' +
      'additional tactic. The army must see the banner to benefit. If the commander is killed or ' +
      'captured, the banner stops functioning. A commander can use multiple banners up to their Charisma ' +
      'modifier; excess banners have randomly suppressed abilities each round.',

    construction: {
      feats: ['Craft Wondrous Item', 'Tactical Insight'],
      spells: [],
      cost: 50000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.mass_combat_additional_tactic',
        value: 0,
        source: 'Banner of Tactical Command',
      },
    ],
  },
  {
    id: 'wondrous-banner-of-tactical-command-lesser',
    name: 'Banner of Tactical Command, Lesser',
    category: 'wondrous',
    source: 'Ultimate Combat',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 10,
    slot: 'none',

    price: 20000,
    weight: 3,

    description:
      'This variant of the banner of tactical command functions identically to the standard version but ' +
      'affects only armies of Large size or smaller.',

    construction: {
      feats: ['Craft Wondrous Item', 'Tactical Insight'],
      spells: [],
      cost: 10000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.mass_combat_additional_tactic_large_or_smaller',
        value: 0,
        source: 'Banner of Tactical Command, Lesser',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 103. Banner of the Ancient Kings
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-banner-of-the-ancient-kings',
    name: 'Banner of the Ancient Kings',
    category: 'wondrous',
    source: "Adventurer's Armory",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 8,
    slot: 'none',

    price: 18000,
    weight: 5,

    description:
      'A 4-foot-by-6-foot tattered white canvas banner with loops for attachment to a spear or pole. ' +
      'When mounted on an 8+ foot pole and wielded two-handed, it grants the carrier a +4 circumstance ' +
      'bonus to Initiative checks and a +2 resistance bonus on all saving throws against mind-affecting ' +
      'effects. Allies within 30 feet also gain the +2 resistance bonus on mind-affecting saves and may ' +
      'attempt an additional saving throw each round if they previously failed. If the carrier possesses ' +
      'the Flagbearer feat, morale bonuses provided by the banner are doubled, and bard inspire courage ' +
      'abilities gain a four-level bonus.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['heroism', 'resistance'],
      cost: 9000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'special.initiative',
        value: 4,
        source: 'Banner of the Ancient Kings',
      },
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'special.save_vs_mind_affecting',
        value: 2,
        source: 'Banner of the Ancient Kings',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 104. Banner of The Scarlet Rose
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-banner-of-the-scarlet-rose',
    name: 'Banner of The Scarlet Rose',
    category: 'wondrous',
    source: 'Inner Sea World Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 7,
    slot: 'none',

    price: 18000,
    weight: 3,

    description:
      'This flag features an image of a red rose on a silvery field. When held by a woman, it provides ' +
      'a +2 shield bonus to AC and a +4 luck bonus to CMD, and functions as a heavy shield for feat ' +
      'purposes. It enhances competence bonuses from class abilities by +1 and grants allies within 30 ' +
      'feet a +2 resistance bonus on saving throws against mind-affecting effects.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['good hope', 'resistance', 'shield'],
      cost: 9000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'shield',
        target: 'ac.shield',
        value: 2,
        source: 'Banner of The Scarlet Rose',
      },
      {
        type: 'bonus',
        bonusType: 'luck',
        target: 'special.cmd',
        value: 4,
        source: 'Banner of The Scarlet Rose',
      },
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'special.save_vs_mind_affecting_allies_30ft',
        value: 2,
        source: 'Banner of The Scarlet Rose',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 105. Banner, Bastion
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-banner-bastion',
    name: 'Banner, Bastion',
    category: 'wondrous',
    source: 'Advanced Player\'s Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'none',

    price: 182000,
    weight: 3,

    description:
      "This magical banner displays a good or lawful deity's holy symbol. When carried by a devotee and " +
      'properly mounted, it emanates a hallow effect in a 40-foot radius around it. The banner stabilizes ' +
      'unstable terrain within its radius — natural terrain becomes fixed against magical alteration ' +
      '(requiring a DC 21 caster level check to change), while supernatural terrain forms a 40-foot ' +
      'sphere with breathable air above and packed earth below. The banner grants deity-specific benefits ' +
      'to allies of matching faith and corresponding debuffs to enemies. Creator must worship the ' +
      'related deity.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['hallow', 'move earth'],
      specialRequirements: ['Creator must worship the related deity'],
      cost: 91000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.hallow_effect_40ft_radius',
        value: 0,
        source: 'Banner, Bastion',
      },
      {
        type: 'special',
        target: 'special.terrain_stabilization',
        value: 0,
        source: 'Banner, Bastion',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 106. Banner, Champion's
  // ---------------------------------------------------------------------------
  {
    id: "wondrous-banner-champion-s",
    name: "Banner, Champion's",
    category: 'wondrous',
    source: 'Knights of the Inner Sea',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 8000,
    weight: 3,

    description:
      'This cloth flag or standard measures approximately 2 feet wide by 4 feet long and must be ' +
      'mounted on a lance, polearm, frame, or staff to function. It displays the wielder\'s heraldic ' +
      'symbol or a heraldic lion if none exists. The banner grants a character with the challenge class ' +
      'feature the benefit of treating his class level as 4 levels higher when determining the effect ' +
      'of his challenge ability (applies only to challenge bonus values, not frequency).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["eagle's splendor"],
      specialRequirements: ['Knowledge (nobility) 5 ranks'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.challenge_effective_level_plus_4',
        value: 4,
        source: "Banner, Champion's",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 107. Banner, Commander's
  // ---------------------------------------------------------------------------
  {
    id: "wondrous-banner-commander-s",
    name: "Banner, Commander's",
    category: 'wondrous',
    source: 'Knights of the Inner Sea',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 10000,
    weight: 3,

    description:
      'This cloth flag or standard measures approximately 2 feet wide by 4 feet long and must be ' +
      'mounted on a lance, polearm, frame, or staff to function. A character with the tactician class ' +
      'feature gains three benefits while carrying this banner: one additional daily use of their ' +
      'tactician ability, teamwork feat range extended to 60 feet instead of 30 feet, and granted ' +
      'feats remain usable for 2 additional rounds beyond normal duration.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["eagle's splendor"],
      specialRequirements: ['Diplomacy 5 ranks'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.tactician_extra_use_and_range',
        value: 0,
        source: "Banner, Commander's",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 108. Banner, Knight's (three variants: Type A, Type B, Type C)
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-banner-knight-s-a',
    name: "Banner, Knight's (Type A)",
    category: 'wondrous',
    source: 'Inner Sea Combat',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 10,
    slot: 'none',

    price: 7500,
    weight: 3,

    description:
      "This heraldic banner mounts on lances, polearms, frames, or staffs. When properly displayed, " +
      "it grants allies within line of sight a +4 morale bonus on saving throws against fear. The " +
      "banner loses effectiveness if toppled or touched by enemies unless reclaimed by allies.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['remove fear'],
      cost: 3750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'morale',
        target: 'special.save_vs_fear',
        value: 4,
        source: "Banner, Knight's (Type A)",
      },
    ],
  },
  {
    id: 'wondrous-banner-knight-s-b',
    name: "Banner, Knight's (Type B)",
    category: 'wondrous',
    source: 'Inner Sea Combat',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 10,
    slot: 'none',

    price: 15000,
    weight: 3,

    description:
      "This heraldic banner mounts on lances, polearms, frames, or staffs. When properly displayed, " +
      "it grants allies within line of sight a +6 morale bonus on saving throws against fear and " +
      "reduces the DC to prevent enemy rout by 5 in mass combat when visible to the majority of the " +
      "enemy army. The banner loses effectiveness if toppled or touched by enemies unless reclaimed.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['remove fear'],
      cost: 7500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'morale',
        target: 'special.save_vs_fear',
        value: 6,
        source: "Banner, Knight's (Type B)",
      },
      {
        type: 'special',
        target: 'special.mass_combat_rout_dc_minus_5',
        value: -5,
        source: "Banner, Knight's (Type B)",
      },
    ],
  },
  {
    id: 'wondrous-banner-knight-s-c',
    name: "Banner, Knight's (Type C)",
    category: 'wondrous',
    source: 'Inner Sea Combat',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'none',

    price: 125000,
    weight: 3,

    description:
      "This heraldic banner mounts on lances, polearms, frames, or staffs. Once daily, it grants " +
      "allies the benefits of blessing of fervor while held or planted by someone with the bravery " +
      "class feature or the Flagbearer feat. If the banner is defaced by enemies, those enemies gain " +
      "the benefits for 10 rounds instead.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['blessing of fervor'],
      cost: 62500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.blessing_of_fervor_once_per_day',
        value: 0,
        source: "Banner, Knight's (Type C)",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 109. Banner, Lord's (four variants: Crusades, Swiftness, Terror, Victory)
  // ---------------------------------------------------------------------------
  {
    id: "wondrous-banner-lord-s-crusades",
    name: "Banner, Lord's (Crusades)",
    category: 'wondrous',
    source: "Advanced Player's Guide",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'none',

    price: 100000,
    weight: 3,

    description:
      "This magical standard (2-4 feet wide, 4+ feet long) depicts noble insignia. When properly " +
      "mounted and displayed, it emits a hallow effect in a 40-foot radius. It does not need a bearer " +
      "once planted. It loses potency if toppled or touched by enemies.",

    construction: {
      feats: ['Craft Wondrous Item', 'Leadership'],
      spells: ["eagle's splendor", 'hallow'],
      cost: 50000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.hallow_effect_40ft_radius',
        value: 0,
        source: "Banner, Lord's (Crusades)",
      },
    ],
  },
  {
    id: "wondrous-banner-lord-s-swiftness",
    name: "Banner, Lord's (Swiftness)",
    category: 'wondrous',
    source: "Advanced Player's Guide",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'none',

    price: 10000,
    weight: 3,

    description:
      "This magical standard eliminates forced march penalties for allied armies while it is properly " +
      "displayed. It does not need a bearer once planted. It loses potency if toppled or touched by " +
      "enemies.",

    construction: {
      feats: ['Craft Wondrous Item', 'Leadership'],
      spells: ["eagle's splendor", 'freedom of movement'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.no_forced_march_penalties',
        value: 0,
        source: "Banner, Lord's (Swiftness)",
      },
    ],
  },
  {
    id: "wondrous-banner-lord-s-terror",
    name: "Banner, Lord's (Terror)",
    category: 'wondrous',
    source: "Advanced Player's Guide",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 10,
    slot: 'none',

    price: 56000,
    weight: 3,

    description:
      "This magical standard causes panic or the shaken condition in enemies while properly displayed. " +
      "It does not need a bearer once planted. It loses potency if toppled or touched by enemies.",

    construction: {
      feats: ['Craft Wondrous Item', 'Leadership'],
      spells: ["eagle's splendor", 'fear'],
      cost: 28000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.enemy_panic_or_shaken',
        value: 0,
        source: "Banner, Lord's (Terror)",
      },
    ],
  },
  {
    id: "wondrous-banner-lord-s-victory",
    name: "Banner, Lord's (Victory)",
    category: 'wondrous',
    source: "Advanced Player's Guide",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 10,
    slot: 'none',

    price: 75000,
    weight: 3,

    description:
      "This magical standard grants allied armies a +2 morale bonus to all rolls while properly " +
      "displayed. It does not need a bearer once planted. It loses potency if toppled or touched by " +
      "enemies.",

    construction: {
      feats: ['Craft Wondrous Item', 'Leadership'],
      spells: ["eagle's splendor", 'heroism'],
      cost: 37500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'morale',
        target: 'special.all_rolls',
        value: 2,
        source: "Banner, Lord's (Victory)",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 110. Barbed Pentacle of Asmodeus
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-barbed-pentacle-of-asmodeus',
    name: 'Barbed Pentacle of Asmodeus',
    category: 'wondrous',
    source: 'Inner Sea World Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 1,
    slot: 'neck',

    price: 3000,
    weight: 1,

    description:
      'An iron disk pendant featuring an inverted pentagram with barbed edges worn on an iron chain. ' +
      'When displayed openly, it grants a +1 deflection bonus to AC. For those devoted to Asmodeus, ' +
      'it functions as a holy symbol. The wearer can speak a command word to cast charm person once ' +
      'daily. By squeezing the barbs to draw blood (1 point of damage), the user produces blood-ink ' +
      'lasting one hour. Spells requiring or enhanced by written components gain a +1 DC increase when ' +
      'cast with this ink.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bleed', 'charm person', 'shield of faith'],
      cost: 1500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'bonus',
        bonusType: 'deflection',
        target: 'ac.deflection',
        value: 1,
        source: 'Barbed Pentacle of Asmodeus',
      },
      {
        type: 'special',
        target: 'special.charm_person_once_per_day',
        value: 0,
        source: 'Barbed Pentacle of Asmodeus',
      },
      {
        type: 'special',
        target: 'special.blood_ink_spell_dc_plus_1',
        value: 1,
        source: 'Barbed Pentacle of Asmodeus',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 111. Barding, Featherleaf
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-barding-featherleaf',
    name: 'Barding, Featherleaf',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'armor',

    price: 7310,
    weight: 1,

    description:
      'This enchanted sleeve crafted from tiny feather-shaped leaves fits avian creatures of Tiny size ' +
      'or smaller. It automatically adjusts to fit the wearer\'s torso and neck, functioning as +1 ' +
      'leather armor for a total AC bonus of +2. The item caps the wearer\'s maximum flight speed at ' +
      '60 feet with average maneuverability. In forested environments, the creature can navigate ' +
      'through branches, brush, and tree trunks as though they were insubstantial, though flight speed ' +
      'and maneuverability remain unchanged.',

    construction: {
      feats: ['Craft Magic Arms and Armor'],
      spells: ['fly', 'tree stride'],
      cost: 3660,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 16,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'armor',
        target: 'ac.armor',
        value: 2,
        source: 'Barding, Featherleaf',
      },
      {
        type: 'special',
        target: 'special.forest_phase_flight',
        value: 0,
        source: 'Barding, Featherleaf',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 112. Bathing Basin
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bathing-basin',
    name: 'Bathing Basin',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 5,
    slot: 'none',

    price: 6750,
    weight: 5,

    description:
      'This bronze bowl features wave etchings and maintains a cool temperature. Once daily, a user ' +
      'can activate it as a standard action to enlarge the basin and fill it with 25 gallons of cool, ' +
      'fresh water. The enlarged basin accommodates Medium or smaller creatures and persists for 1 hour ' +
      'or until shrunk back. Water vanishes upon shrinking, and any oversized contents are expelled to ' +
      'adjacent squares.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['create water', 'shrink item'],
      cost: 3375,
    },
    physicalStats: {
      hardness: 9,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.expand_basin_25_gallons_water_once_per_day',
        value: 0,
        source: 'Bathing Basin',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 113. Bead of Force
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bead-of-force',
    name: 'Bead of Force',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'none',

    price: 3000,
    weight: 0,

    description:
      'A small black sphere resembling a lusterless pearl that can be thrown up to 60 feet. Upon ' +
      'impact, it deals 5d6 points of force damage to all creatures within a 10-foot radius (Reflex ' +
      'DC 16 negates) and creates a resilient sphere effect lasting 10 minutes. The sphere contains ' +
      'its subject, is impenetrable, and can only be destroyed by specific items or spells. The subject ' +
      'can breathe normally but cannot escape or be moved. This is a single-use consumable item.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resilient sphere'],
      cost: 1500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'damage',
        target: 'special.force_damage_10ft_radius',
        value: 0,
        source: 'Bead of Force',
      },
      {
        type: 'special',
        target: 'special.resilient_sphere_10_minutes',
        value: 0,
        source: 'Bead of Force',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 114. Bead of Newt Prevention
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bead-of-newt-prevention',
    name: 'Bead of Newt Prevention',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 1000,
    weight: 0,

    description:
      'This carved bead features a tiny pictogram representing a small, harmless animal such as a ' +
      'newt, rabbit, or frog. When the wearer fails a saving throw against a hostile polymorph effect ' +
      'such as baleful polymorph, the bead is destroyed and negates the transformation entirely.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['dispel magic'],
      cost: 500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.negate_hostile_polymorph_on_failed_save',
        value: 0,
        source: 'Bead of Newt Prevention',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 115. Bead, Boro (six variants by extract level)
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bead-boro-1',
    name: 'Bead, Boro (1st-Level Extract)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 16,
    slot: 'none',

    price: 1000,
    weight: 0,

    description:
      'This multicolored glass bead allows an alchemist to recharge any one 1st-level extract that ' +
      'he had mixed and then consumed that day. The item functions once per day on command. It works ' +
      'with infusions but not potions, elixirs, bombs, mutagens, or non-magical alchemical materials.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be able to prepare 1st-level extracts'],
      cost: 500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'special',
        target: 'special.alchemist_recharge_1st_level_extract',
        value: 0,
        source: 'Bead, Boro (1st-Level Extract)',
      },
    ],
  },
  {
    id: 'wondrous-bead-boro-2',
    name: 'Bead, Boro (2nd-Level Extract)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 16,
    slot: 'none',

    price: 4000,
    weight: 0,

    description:
      'This multicolored glass bead allows an alchemist to recharge any one 2nd-level extract that ' +
      'he had mixed and then consumed that day. The item functions once per day on command. It works ' +
      'with infusions but not potions, elixirs, bombs, mutagens, or non-magical alchemical materials.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be able to prepare 2nd-level extracts'],
      cost: 2000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'special',
        target: 'special.alchemist_recharge_2nd_level_extract',
        value: 0,
        source: 'Bead, Boro (2nd-Level Extract)',
      },
    ],
  },
  {
    id: 'wondrous-bead-boro-3',
    name: 'Bead, Boro (3rd-Level Extract)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 16,
    slot: 'none',

    price: 9000,
    weight: 0,

    description:
      'This multicolored glass bead allows an alchemist to recharge any one 3rd-level extract that ' +
      'he had mixed and then consumed that day. The item functions once per day on command. It works ' +
      'with infusions but not potions, elixirs, bombs, mutagens, or non-magical alchemical materials.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be able to prepare 3rd-level extracts'],
      cost: 4500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'special',
        target: 'special.alchemist_recharge_3rd_level_extract',
        value: 0,
        source: 'Bead, Boro (3rd-Level Extract)',
      },
    ],
  },
  {
    id: 'wondrous-bead-boro-4',
    name: 'Bead, Boro (4th-Level Extract)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 16,
    slot: 'none',

    price: 16000,
    weight: 0,

    description:
      'This multicolored glass bead allows an alchemist to recharge any one 4th-level extract that ' +
      'he had mixed and then consumed that day. The item functions once per day on command. It works ' +
      'with infusions but not potions, elixirs, bombs, mutagens, or non-magical alchemical materials.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be able to prepare 4th-level extracts'],
      cost: 8000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'special',
        target: 'special.alchemist_recharge_4th_level_extract',
        value: 0,
        source: 'Bead, Boro (4th-Level Extract)',
      },
    ],
  },
  {
    id: 'wondrous-bead-boro-5',
    name: 'Bead, Boro (5th-Level Extract)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 16,
    slot: 'none',

    price: 25000,
    weight: 0,

    description:
      'This multicolored glass bead allows an alchemist to recharge any one 5th-level extract that ' +
      'he had mixed and then consumed that day. The item functions once per day on command. It works ' +
      'with infusions but not potions, elixirs, bombs, mutagens, or non-magical alchemical materials.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be able to prepare 5th-level extracts'],
      cost: 12500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'special',
        target: 'special.alchemist_recharge_5th_level_extract',
        value: 0,
        source: 'Bead, Boro (5th-Level Extract)',
      },
    ],
  },
  {
    id: 'wondrous-bead-boro-6',
    name: 'Bead, Boro (6th-Level Extract)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 16,
    slot: 'none',

    price: 36000,
    weight: 0,

    description:
      'This multicolored glass bead allows an alchemist to recharge any one 6th-level extract that ' +
      'he had mixed and then consumed that day. The item functions once per day on command. It works ' +
      'with infusions but not potions, elixirs, bombs, mutagens, or non-magical alchemical materials.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be able to prepare 6th-level extracts'],
      cost: 18000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'special',
        target: 'special.alchemist_recharge_6th_level_extract',
        value: 0,
        source: 'Bead, Boro (6th-Level Extract)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 116. Bead, Campfire
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bead-campfire',
    name: 'Bead, Campfire',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 1,
    slot: 'none',

    price: 720,
    weight: 0,

    description:
      'This magical bead transforms into a small campfire pile (2 feet tall) when its command word ' +
      'is spoken. The fire burns for 8 hours before returning to bead form. After extinguishing, the ' +
      'owner must wait twice the burn duration before reactivating it.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['produce flame'],
      cost: 360,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'special',
        target: 'special.campfire_8_hours',
        value: 0,
        source: 'Bead, Campfire',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 117. Beads, Bone
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-beads-bone',
    name: 'Beads, Bone',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 3,
    slot: 'wrists',

    price: 6000,
    weight: 0,

    description:
      'This bracelet of tiny carved skulls enables the wearer to command up to 8 HD worth of mindless ' +
      'undead creatures as the command undead spell. Controlling an undead creature requires a standard ' +
      'action, while releasing control takes only a free action. If the wearer attempts to control ' +
      'undead exceeding 8 HD total, newly controlled creatures fall under their command while previously ' +
      'controlled undead beyond the 8 HD limit become uncontrolled.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['command undead'],
      cost: 3000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.command_undead_8hd',
        value: 8,
        source: 'Beads, Bone',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 118. Beads, Prayer (Strand) — three variants: lesser, standard, greater
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-beads-prayer-lesser',
    name: 'Beads, Prayer — Lesser Strand',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 1,
    slot: 'none',

    price: 9600,
    weight: 1,

    description:
      'A lesser strand of prayer beads activates upon casting a divine spell while carrying it. The ' +
      'strand contains two or more special beads: a bead of blessing (casts bless once per day, CL 1) ' +
      'and a bead of healing (casts cure serious wounds, remove blindness/deafness, or remove disease ' +
      'once per day, CL 5). Each bead may only be used once per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bless', 'cure serious wounds', 'remove blindness/deafness', 'remove disease'],
      cost: 4800,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.bead_blessing_bless_once_per_day',
        value: 0,
        source: 'Beads, Prayer — Lesser Strand',
      },
      {
        type: 'special',
        target: 'special.bead_healing_cure_serious_once_per_day',
        value: 0,
        source: 'Beads, Prayer — Lesser Strand',
      },
    ],
  },
  {
    id: 'wondrous-beads-prayer-standard',
    name: 'Beads, Prayer — Standard Strand',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'none',

    price: 45800,
    weight: 1,

    description:
      'A standard strand of prayer beads activates upon casting a divine spell while carrying it. ' +
      'The strand contains beads of blessing (bless, once per day, CL 1), healing (cure serious ' +
      'wounds/remove blindness or deafness/remove disease, once per day, CL 5), karma (grants +4 ' +
      'caster level for 10 minutes, once per day, CL 9), and smiting (chaos hammer, holy smite, ' +
      "order's wrath, or unholy blight at DC 17, once per day, CL 7). Each bead may only be used " +
      'once per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [
        'bless',
        'cure serious wounds',
        'remove blindness/deafness',
        'remove disease',
        'righteous might',
        'chaos hammer',
        'holy smite',
        "order's wrath",
        'unholy blight',
      ],
      cost: 22900,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.bead_blessing_once_per_day',
        value: 0,
        source: 'Beads, Prayer — Standard Strand',
      },
      {
        type: 'special',
        target: 'special.bead_healing_once_per_day',
        value: 0,
        source: 'Beads, Prayer — Standard Strand',
      },
      {
        type: 'special',
        target: 'special.bead_karma_plus_4_cl_once_per_day',
        value: 4,
        source: 'Beads, Prayer — Standard Strand',
      },
      {
        type: 'special',
        target: 'special.bead_smiting_once_per_day',
        value: 0,
        source: 'Beads, Prayer — Standard Strand',
      },
    ],
  },
  {
    id: 'wondrous-beads-prayer-greater',
    name: 'Beads, Prayer — Greater Strand',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 17,
    slot: 'none',

    price: 95800,
    weight: 1,

    description:
      'A greater strand of prayer beads activates upon casting a divine spell while carrying it. ' +
      'It contains all the beads of the standard strand plus a bead of wind walking (casts wind walk ' +
      'once per day, CL 11) and a bead of summons (summons an alignment-appropriate creature from ' +
      'the Outer Planes for 1 day; one use only, CL 17). Each rechargeable bead may only be used ' +
      'once per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [
        'bless',
        'cure serious wounds',
        'remove blindness/deafness',
        'remove disease',
        'righteous might',
        'chaos hammer',
        'holy smite',
        "order's wrath",
        'unholy blight',
        'wind walk',
        'gate',
      ],
      cost: 47900,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.bead_blessing_once_per_day',
        value: 0,
        source: 'Beads, Prayer — Greater Strand',
      },
      {
        type: 'special',
        target: 'special.bead_healing_once_per_day',
        value: 0,
        source: 'Beads, Prayer — Greater Strand',
      },
      {
        type: 'special',
        target: 'special.bead_karma_plus_4_cl_once_per_day',
        value: 4,
        source: 'Beads, Prayer — Greater Strand',
      },
      {
        type: 'special',
        target: 'special.bead_smiting_once_per_day',
        value: 0,
        source: 'Beads, Prayer — Greater Strand',
      },
      {
        type: 'special',
        target: 'special.bead_wind_walking_once_per_day',
        value: 0,
        source: 'Beads, Prayer — Greater Strand',
      },
      {
        type: 'special',
        target: 'special.bead_summons_once_only',
        value: 0,
        source: 'Beads, Prayer — Greater Strand',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 119. Bear Pelt of the Bonebreaker
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bear-pelt-of-the-bonebreaker',
    name: 'Bear Pelt of the Bonebreaker',
    category: 'wondrous',
    source: 'Inner Sea Gods',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'shoulders',

    price: 3300,
    weight: 10,

    description:
      'This large bearskin cloak grants a +2 competence bonus on Intimidate checks. Once daily, the ' +
      'wearer can cause the hair on the cloak to bristle menacingly, activating a bless ability. If ' +
      'the associated deity (Erastil) is the wearer\'s patron, the item enables one daily use of beast ' +
      'shape transformation into a black or brown bear for up to 7 minutes. Creator must have 5 ranks ' +
      'in Intimidate.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['beast shape II', 'bless'],
      specialRequirements: ['Creator must have 5 ranks in Intimidate'],
      cost: 1650,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 3,
      breakDC: 10,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.intimidate',
        value: 2,
        source: 'Bear Pelt of the Bonebreaker',
      },
      {
        type: 'special',
        target: 'special.bless_once_per_day',
        value: 0,
        source: 'Bear Pelt of the Bonebreaker',
      },
      {
        type: 'special',
        target: 'special.beast_shape_bear_once_per_day',
        value: 0,
        source: 'Bear Pelt of the Bonebreaker',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 120. Beast-Bond Brand
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-beast-bond-brand',
    name: 'Beast-Bond Brand',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 1000,
    weight: 0,

    description:
      'A henna paste stamped as a rust-colored handprint on a familiar or animal companion, with a ' +
      'matching print from that creature applied to its master. The brand enhances the shared spells ' +
      'ability, permitting casters to deliver spells with personal or touch range to marked companions ' +
      'at distances up to 30 feet, provided line of effect exists. Each spell cast this way consumes ' +
      'charges equal to the spell\'s level. A fresh brand contains 10 charges and vanishes when ' +
      'depleted. The caster may designate only one creature at a time.',

    construction: {
      feats: ['Craft Wondrous Item', 'Reach Spell'],
      spells: [],
      specialRequirements: ['Creator must possess an animal companion or familiar'],
      cost: 500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    charges: { maximum: 10 },

    effects: [
      {
        type: 'special',
        target: 'special.shared_spells_30ft_range',
        value: 30,
        source: 'Beast-Bond Brand',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 121. Bell of Returning Spirits
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bell-of-returning-spirits',
    name: 'Bell of Returning Spirits',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'none',

    price: 3000,
    weight: 1,

    description:
      "An ancient bronze hand bell with an ivory handle features animal pictograms etched on its " +
      "exterior. The user can ring it once per day to summon their familiar within 100 feet to an " +
      "adjacent space. If the familiar is deceased, the bell functions as raise dead but targets only " +
      "that familiar. Negative levels from resurrection are removed at 1 per day, and lost Constitution " +
      "recovers at 1 point daily. After raising a familiar, the bell transforms into inert clay and " +
      "becomes non-magical.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['raise dead', "summon nature's ally"],
      cost: 1500,
    },
    physicalStats: {
      hardness: 9,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'special',
        target: 'special.summon_familiar_100ft_once_per_day',
        value: 0,
        source: 'Bell of Returning Spirits',
      },
      {
        type: 'special',
        target: 'special.raise_dead_familiar_once_destroys_item',
        value: 0,
        source: 'Bell of Returning Spirits',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 122. Bell, Gremlin
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bell-gremlin',
    name: 'Bell, Gremlin',
    category: 'wondrous',
    source: 'Pathfinder #19',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 2,
    slot: 'none',

    price: 400,
    weight: 0,

    description:
      'These miniature bronze or brass bells (approximately one inch tall) hang from chains or silk ' +
      'cords. Any gremlin within 20 feet cannot use supernatural abilities and becomes uncomfortable. ' +
      'When purposefully rung once per day, all gremlins within 20 feet who hear it must succeed at a ' +
      'DC 16 Will save or become sickened for 5 minutes.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['protection from evil'],
      cost: 200,
    },
    physicalStats: {
      hardness: 9,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.suppress_gremlin_supernatural_abilities_20ft',
        value: 0,
        source: 'Bell, Gremlin',
      },
      {
        type: 'special',
        target: 'special.gremlin_sickened_will_dc16_once_per_day',
        value: 0,
        source: 'Bell, Gremlin',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 123. Belt of Dwarvenkind
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-belt-of-dwarvenkind',
    name: 'Belt of Dwarvenkind',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.DIVINATION }],
    casterLevel: 12,
    slot: 'belt',

    price: 14900,
    weight: 1,

    description:
      'The belt provides multiple benefits. The wearer gains a +4 competence bonus on Charisma checks ' +
      'and Charisma-based skill checks when dealing with dwarves, a +2 bonus when dealing with gnomes ' +
      'and halflings, and a -2 penalty when dealing with others. The wearer can understand, speak, and ' +
      'read Dwarven. Non-dwarves wearing this belt gain 60-foot darkvision, dwarven stonecunning, a ' +
      '+2 enhancement bonus to Constitution, and a +2 resistance bonus on saves against poison, spells, ' +
      'and spell-like effects. Creator must be a dwarf.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['tongues'],
      specialRequirements: ['Creator must be a dwarf'],
      cost: 7450,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'special.cha_checks_vs_dwarves',
        value: 4,
        source: 'Belt of Dwarvenkind',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 2,
        source: 'Belt of Dwarvenkind',
      },
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'special.save_vs_poison_spells_sla',
        value: 2,
        source: 'Belt of Dwarvenkind',
      },
      {
        type: 'special',
        target: 'special.darkvision_60ft_non_dwarf_only',
        value: 60,
        source: 'Belt of Dwarvenkind',
      },
      {
        type: 'special',
        target: 'special.stonecunning_non_dwarf_only',
        value: 0,
        source: 'Belt of Dwarvenkind',
      },
      {
        type: 'special',
        target: 'special.speak_read_dwarven',
        value: 0,
        source: 'Belt of Dwarvenkind',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 124. Belt of Equilibrium
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-belt-of-equilibrium',
    name: 'Belt of Equilibrium',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 3,
    slot: 'belt',

    price: 12000,
    weight: 1,

    description:
      "As long as this belt's wearer doesn't move more than 5 feet during her turn, she ignores the " +
      'penalties for being fatigued, shaken, or sickened until the end of her next turn or until she ' +
      'moves more than 5 feet, whichever occurs first. The wearer remains under the effect of those ' +
      'conditions — they simply do not impose mechanical penalties during this period.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['lesser restoration', 'remove fear'],
      cost: 6000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.ignore_fatigued_shaken_sickened_penalties_when_stationary',
        value: 0,
        source: 'Belt of Equilibrium',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 125. Belt of Fallen Heroes
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-belt-of-fallen-heroes',
    name: 'Belt of Fallen Heroes',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'belt',

    price: 21000,
    weight: 1,

    description:
      'This brass belt features three battle scene panels. Once daily, the wearer summons a hero ' +
      'spirit functioning as a spiritual ally, though this entity retains some intelligence unlike ' +
      "the spell's force construct. Additionally, the wearer gains a +1 insight bonus on all saving " +
      "throws from the spirit's constant telepathic guidance.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['spiritual ally', 'divine favor'],
      cost: 10500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'save.all',
        value: 1,
        source: 'Belt of Fallen Heroes',
      },
      {
        type: 'special',
        target: 'special.spiritual_ally_once_per_day',
        value: 0,
        source: 'Belt of Fallen Heroes',
      },
    ],
  },
];
