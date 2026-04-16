import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsAB9: WondrousItemDefinition[] = [
  // ---- 201: Boots of Escape ----------------------------------------------------
  {
    id: 'wondrous-boots-of-escape',
    name: 'Boots of Escape',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'feet',

    price: 8000,
    weight: 1,

    description:
      'These leather boots provide an escape mechanism for the wearer. Once per day, when the ' +
      'wearer is grappled, pinned, or entangled, she may transfer herself to any spot within 30 ' +
      'feet as if using a dimension door spell. If the wearer is a gnome, the range increases to ' +
      'up to 400 feet instead.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['dimension door'],
      specialRequirements: ['creator must be a gnome or a wizard specialized in conjuration'],
      cost: 4000,
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
        target: 'special.boots_of_escape_teleport',
        value: 0,
        source: 'Boots of Escape',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'dimension_door',
            spellName: 'Dimension Door',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'free',
          },
        ],
      },
    ],
  },

  // ---- 202: Boots of Flawless Resolve ------------------------------------------
  {
    id: 'wondrous-boots-of-flawless-resolve',
    name: 'Boots of Flawless Resolve',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 7,
    slot: 'feet',

    price: 6500,
    weight: 2,

    description:
      'These white leather knee-high boots are decorated with intricate patterns of gemstones ' +
      'and metalwork. Three times per day as a move action, the wearer can designate a single ' +
      'creature within 30 feet as a target. While the effect is active, the wearer gains a +2 ' +
      'insight bonus to AC against that target\'s attacks and a +4 bonus to CMD against that ' +
      'target\'s combat maneuvers. The effect lasts for up to 7 rounds but ends immediately if ' +
      'the wearer moves from her square (5-foot steps are permitted) or is moved involuntarily. ' +
      'The effect also ends if the designated target dies. Designating a new target requires ' +
      'another daily use.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['anticipate thoughts'],
      cost: 3250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'move',

    effects: [
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'ac',
        value: 2,
        source: 'Boots of Flawless Resolve',
        condition: {
          type: 'custom',
          params: { descriptor: 'designated_target_attack' },
          description: 'against attacks from the designated target only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'cmd',
        value: 4,
        source: 'Boots of Flawless Resolve',
        condition: {
          type: 'custom',
          params: { descriptor: 'designated_target_maneuver' },
          description: 'against combat maneuvers from the designated target only',
        },
      },
    ],
  },

  // ---- 203: Boots of Friendly Terrain ------------------------------------------
  {
    id: 'wondrous-boots-of-friendly-terrain',
    name: 'Boots of Friendly Terrain',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'feet',

    price: 2400,
    weight: 1,

    description:
      'These leather boots are attuned to a specific ranger favored terrain type (such as jungle ' +
      'or plains). A ranger wearing these boots treats the corresponding terrain type as a favored ' +
      'terrain, gaining a +2 bonus to all associated skills and checks. If the ranger already has ' +
      'that terrain type as a favored terrain, the existing bonus increases by 2 instead. As the ' +
      'wearer moves, her footprints vanish behind her with each step she takes.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['pass without trace'],
      specialRequirements: ['creator must be a ranger'],
      cost: 1200,
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
        target: 'special.boots_friendly_terrain_favored',
        value: 2,
        source: 'Boots of Friendly Terrain',
      },
    ],
  },

  // ---- 204: Boots of Gusto -----------------------------------------------------
  {
    id: 'wondrous-boots-of-gusto',
    name: 'Boots of Gusto',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'feet',

    price: 2000,
    weight: 1,

    description:
      'These red leather boots feature stitched designs of swordspeople wielding light weapons. ' +
      'Three times per day, the wearer can perform the derring-do 1st-level swashbuckler deed. ' +
      'This allows the wearer to add 1d6 to an Escape Artist, Fly, Ride, or Swim check as an ' +
      'immediate action, or add 1d6 to an Acrobatics check made to avoid an attack of opportunity ' +
      'while moving. The boots grant this deed but do not provide panache points.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace"],
      specialRequirements: ['creator must be a panache user'],
      cost: 1000,
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
        target: 'special.boots_of_gusto_derring_do',
        value: 0,
        source: 'Boots of Gusto',
      },
    ],
  },

  // ---- 205: Boots of Levitation ------------------------------------------------
  {
    id: 'wondrous-boots-of-levitation',
    name: 'Boots of Levitation',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'feet',

    price: 7500,
    weight: 1,

    description:
      'These comfortable leather boots enable the wearer to levitate on command. When activated ' +
      'by speaking the command word, the boots allow the wearer to levitate as if she had cast ' +
      'levitate on herself.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['levitate'],
      cost: 3750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.boots_levitation',
        value: 0,
        source: 'Boots of Levitation',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'levitate',
            spellName: 'Levitate',
            casterLevel: 3,
            usesPerDay: 0,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 206: Boots of Planar Grounding ------------------------------------------
  {
    id: 'wondrous-boots-of-planar-grounding',
    name: 'Boots of Planar Grounding',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'feet',

    price: 25000,
    weight: 0,

    description:
      'These iron-soled boots establish a powerful connection between the wearer and their ' +
      'current plane. The wearer always counts as being on her home plane, regardless of the ' +
      'plane she is actually on, and she never gains the extraplanar subtype.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['dimensional anchor'],
      cost: 12500,
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
        target: 'special.boots_planar_grounding_home_plane',
        value: 0,
        source: 'Boots of Planar Grounding',
      },
    ],
  },

  // ---- 207: Boots of Refuge ----------------------------------------------------
  {
    id: 'wondrous-boots-of-refuge',
    name: 'Boots of Refuge',
    category: 'wondrous',
    source: 'Pathfinder Roleplaying Game: Niobe',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'feet',

    price: 18000,
    weight: 4,

    description:
      'These leather boots offer two distinct magical wards. The wearer activates them as a swift action to ' +
      'gain either a speed ward or a protection ward. The speed ward grants a +30-foot enhancement bonus to ' +
      'all of her movement speeds. The protection ward allows her to stand up as a swift action without ' +
      'provoking attacks of opportunity, and she does not provoke attacks of opportunity from the first ' +
      'square she leaves when moving. The wearer can dismiss effects or switch wards as a swift action. ' +
      'The boots function for up to 10 rounds per day, used in 1-round increments.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['blessing of fervor'],
      cost: 9000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'swift',

    effects: [
      {
        type: 'special',
        target: 'special.boots_of_refuge_speed_ward',
        value: 0,
        source: 'Boots of Refuge',
      },
      {
        type: 'special',
        target: 'special.boots_of_refuge_protection_ward',
        value: 0,
        source: 'Boots of Refuge',
      },
    ],
  },

  // ---- 208: Boots of Speed -----------------------------------------------------
  {
    id: 'wondrous-boots-of-speed',
    name: 'Boots of Speed',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'feet',

    price: 12000,
    weight: 1,

    description:
      'As a free action, the wearer can click her heels together, gaining the benefits of a ' +
      'haste spell. The boots allow up to 10 rounds of haste per day, and these rounds need ' +
      'not be consecutive.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['haste'],
      cost: 6000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'free',

    effects: [
      {
        type: 'special',
        target: 'special.boots_of_speed_haste',
        value: 10,
        source: 'Boots of Speed',
      },
    ],
  },

  // ---- 209: Boots of Striding and Springing ------------------------------------
  {
    id: 'wondrous-boots-of-striding-and-springing',
    name: 'Boots of Striding and Springing',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'feet',

    price: 5500,
    weight: 1,

    description:
      'These boots increase the wearer\'s base land speed by 10 feet (enhancement bonus). ' +
      'They also grant a +5 competence bonus on Acrobatics checks made to jump.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['longstrider'],
      specialRequirements: ['creator must have 5 ranks in Acrobatics'],
      cost: 2750,
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
        bonusType: 'enhancement',
        target: 'speed.base',
        value: 10,
        source: 'Boots of Striding and Springing',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.acrobatics',
        value: 5,
        source: 'Boots of Striding and Springing',
        condition: {
          type: 'custom',
          params: { descriptor: 'jump' },
          description: 'on Acrobatics checks made to jump only',
        },
      },
    ],
  },

  // ---- 210: Boots of Swift Fury ------------------------------------------------
  {
    id: 'wondrous-boots-of-swift-fury',
    name: 'Boots of Swift Fury',
    category: 'wondrous',
    source: 'Ultimate Combat',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'feet',

    price: 7500,
    weight: 2,

    description:
      'These furred hide boots rise to the calf and fasten with iron buckles. They increase the ' +
      "wearer's base land speed by 10 feet (enhancement bonus). Additionally, while the wearer " +
      'is raging, she gains a +4 deflection bonus to AC against attacks of opportunity provoked ' +
      'by moving through or out of a threatened area or by casting a spell.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['expeditious retreat', 'rage'],
      cost: 3750,
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
        bonusType: 'enhancement',
        target: 'speed.base',
        value: 10,
        source: 'Boots of Swift Fury',
      },
      {
        type: 'bonus',
        bonusType: 'deflection',
        target: 'ac',
        value: 4,
        source: 'Boots of Swift Fury',
        condition: {
          type: 'custom',
          params: { descriptor: 'raging_aoo' },
          description: 'against attacks of opportunity while raging, when moving through threatened areas or casting',
        },
      },
    ],
  },

  // ---- 211: Boots of Teleportation ---------------------------------------------
  {
    id: 'wondrous-boots-of-teleportation',
    name: 'Boots of Teleportation',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'feet',

    price: 49000,
    weight: 3,

    description:
      'These light gray boots allow the wearer to teleport three times per day, exactly as if ' +
      'she had cast the teleport spell.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['teleport'],
      cost: 24500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'teleport',
            spellName: 'Teleport',
            casterLevel: 9,
            usesPerDay: 3,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 212: Boots of the Battle Herald -----------------------------------------
  {
    id: 'wondrous-boots-of-the-battle-herald',
    name: 'Boots of the Battle Herald',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 11,
    slot: 'feet',

    price: 30000,
    weight: 2,

    description:
      'These white leather boots feature tooled battle scenes. Once per day as a move action, ' +
      'the wearer can activate the boots to gain the benefits of greater heroism for 11 minutes.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater heroism', 'remove fear'],
      cost: 15000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'move',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'greater_heroism',
            spellName: 'Greater Heroism',
            casterLevel: 11,
            usesPerDay: 1,
            activationAction: 'move',
          },
        ],
      },
    ],
  },

  // ---- 213: Boots of the Cat ---------------------------------------------------
  {
    id: 'wondrous-boots-of-the-cat',
    name: 'Boots of the Cat',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'feet',

    price: 1000,
    weight: 1,

    description:
      'These blue boots grant the wearer feline grace when falling. The wearer always takes ' +
      'the minimum possible damage from falls and always lands on her feet at the end of a fall.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['feather fall'],
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
        target: 'special.boots_of_the_cat_fall',
        value: 0,
        source: 'Boots of the Cat',
      },
    ],
  },

  // ---- 214: Boots of the Earth ------------------------------------------------
  {
    id: 'wondrous-boots-of-the-earth',
    name: 'Boots of the Earth',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 3,
    slot: 'feet',

    price: 5000,
    weight: 5,

    description:
      "These dwarven leather boots have marble soles. As a move action, the wearer can plant " +
      'her feet and draw strength from the earth. While active, the boots grant fast healing 1 ' +
      'and increase the wearer\'s CMD by +4 against bull rush, reposition, and trip maneuvers. ' +
      'The benefits end immediately if the wearer moves, is moved, falls prone, or loses ' +
      'consciousness.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bull's strength", 'cure light wounds'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'move',

    effects: [
      {
        type: 'special',
        target: 'special.boots_of_the_earth_fast_healing',
        value: 1,
        source: 'Boots of the Earth',
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'cmd',
        value: 4,
        source: 'Boots of the Earth',
        condition: {
          type: 'custom',
          params: { descriptor: 'bull_rush_reposition_trip' },
          description: 'against bull rush, reposition, and trip maneuvers while planted',
        },
      },
    ],
  },

  // ---- 215: Boots of the Enduring March ----------------------------------------
  {
    id: 'wondrous-boots-of-the-enduring-march',
    name: 'Boots of the Enduring March',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 2,
    slot: 'feet',

    price: 1500,
    weight: 2,

    description:
      'These leather boots enhance the wearer\'s stamina during extended travel. When undertaking ' +
      'a forced march beyond the standard 8-hour daily limit, the wearer makes Constitution checks ' +
      'at DC 10 + 1 per additional hour of marching. If the wearer fails the check, she takes only ' +
      '1d4 points of nonlethal damage and does not become fatigued the first time she takes nonlethal ' +
      'damage in this way.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['endure elements'],
      cost: 750,
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
        target: 'special.boots_enduring_march',
        value: 0,
        source: 'Boots of the Enduring March',
      },
    ],
  },

  // ---- 216: Boots of the Eternal Rose ------------------------------------------
  {
    id: 'wondrous-boots-of-the-eternal-rose',
    name: 'Boots of the Eternal Rose',
    category: 'wondrous',
    source: 'Inner Sea Gods',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'feet',

    price: 4000,
    weight: 1,

    description:
      'These engraved leather boots grant the wearer a +2 competence bonus on Perform (dance) ' +
      'and Stealth checks. The wearer moves freely through areas filled with flowers, thorns, or ' +
      'brambles without impediment, though magically-enhanced obstacles still apply. As a free ' +
      'action once per round, the wearer may conjure a beautiful, nonmagical common flower (such ' +
      'as a daisy, pansy, rose, sunflower, or similar) that lasts for 1 day before crumbling into ' +
      'perfume and dust. If Shelyn is the wearer\'s patron deity, the wearer may also use daze ' +
      'monster once per day as a free action during a qualifying performance (involving dance, ' +
      'singing, or other Perform skills of at least 1 minute duration), or as a standard action ' +
      'otherwise.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['daze monster', 'pass without trace'],
      specialRequirements: ['creator must have 5 ranks in Perform (dance) and Stealth'],
      cost: 2000,
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
        target: 'skill.perform',
        value: 2,
        source: 'Boots of the Eternal Rose',
        condition: {
          type: 'custom',
          params: { descriptor: 'dance' },
          description: 'Perform (dance) only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.stealth',
        value: 2,
        source: 'Boots of the Eternal Rose',
      },
      {
        type: 'special',
        target: 'special.boots_eternal_rose_thorns',
        value: 0,
        source: 'Boots of the Eternal Rose',
      },
      {
        type: 'special',
        target: 'special.boots_eternal_rose_flower',
        value: 0,
        source: 'Boots of the Eternal Rose',
      },
      {
        // Daze monster SLA is only available to wearers who worship Shelyn — no ConditionalEffect
        // type covers deity patron; modeled as special with description covering the condition.
        type: 'special',
        target: 'special.boots_eternal_rose_daze_monster_shelyn_only',
        value: 0,
        source: 'Boots of the Eternal Rose',
        condition: {
          type: 'custom',
          params: { descriptor: 'shelyn_worshipper' },
          description: 'daze monster 1/day (Shelyn worshippers only)',
        },
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'daze_monster',
            spellName: 'Daze Monster',
            casterLevel: 3,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 217: Boots of the Mastodon ----------------------------------------------
  {
    id: 'wondrous-boots-of-the-mastodon',
    name: 'Boots of the Mastodon',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'feet',

    price: 10500,
    weight: 2,

    description:
      'These heavy footwear items fashioned from mastodon hide impose a -2 penalty on Stealth ' +
      'checks. They grant a +2 enhancement bonus on overrun attempts and a +2 dodge bonus to AC ' +
      'while the wearer is attempting an overrun combat maneuver. Once per day, the wearer can ' +
      'make a trample attack against creatures of Large size or smaller regardless of the wearer\'s ' +
      'actual size, dealing 2d8+18 points of damage (Reflex DC 29 for half).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['beast shape III'],
      cost: 5250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'penalty',
        bonusType: 'untyped',
        target: 'skill.stealth',
        value: -2,
        source: 'Boots of the Mastodon',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'cmb',
        value: 2,
        source: 'Boots of the Mastodon',
        condition: {
          type: 'custom',
          params: { descriptor: 'overrun' },
          description: 'on overrun attempts only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'dodge',
        target: 'ac',
        value: 2,
        source: 'Boots of the Mastodon',
        condition: {
          type: 'custom',
          params: { descriptor: 'overrun' },
          description: 'while attempting an overrun combat maneuver only',
        },
      },
      {
        type: 'special',
        target: 'special.boots_mastodon_trample',
        value: 0,
        source: 'Boots of the Mastodon',
      },
    ],
  },

  // ---- 218: Boots of the Mire --------------------------------------------------
  {
    id: 'wondrous-boots-of-the-mire',
    name: 'Boots of the Mire',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 5,
    slot: 'feet',

    price: 3500,
    weight: 1,

    description:
      'These leather boots grant the wearer several swamp-related benefits. The wearer can move ' +
      'through shallow and deep bog terrain without speed penalties and leaves no tracks in such ' +
      'terrain. The wearer remains dry and comfortable regardless of rain or fog. Additionally, ' +
      'the wearer gains a +2 resistance bonus on Fortitude saving throws against poison and disease.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['endure elements', 'pass without trace', 'resistance', 'water walk'],
      cost: 1750,
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
        target: 'special.boots_mire_bog_movement',
        value: 0,
        source: 'Boots of the Mire',
      },
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.fortitude',
        value: 2,
        source: 'Boots of the Mire',
        condition: {
          type: 'custom',
          params: { descriptor: 'poison_or_disease' },
          description: 'against poison and disease only',
        },
      },
    ],
  },

  // ---- 219: Boots of the Soft Step ---------------------------------------------
  {
    id: 'wondrous-boots-of-the-soft-step',
    name: 'Boots of the Soft Step',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'feet',

    price: 1000,
    weight: 2,

    description:
      'These bronze-riveted boots have thick leather soles that compress and expand as the ' +
      'wearer walks. They reduce the wearer\'s footfall for the purpose of tremorsense detection. ' +
      'When moving at half speed, a creature with tremorsense can only sense the wearer at half ' +
      'the usual distance. When moving at one-quarter speed or slower, the wearer cannot be ' +
      'detected by tremorsense at all.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['feather fall'],
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
        target: 'special.boots_soft_step_tremorsense',
        value: 0,
        source: 'Boots of the Soft Step',
      },
    ],
  },

  // ---- 220: Boots of the Vengeful Behir ----------------------------------------
  {
    id: 'wondrous-boots-of-the-vengeful-behir',
    name: 'Boots of the Vengeful Behir',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'feet',

    price: 5400,
    weight: 1,

    description:
      'These blue leather boots grant enhanced bull rush capability three times per day. When ' +
      'the wearer speaks the command word, he can attempt a bull rush the following round as if ' +
      'he were one size category larger than normal. Against dragons specifically, the wearer ' +
      'treats himself as two size categories larger instead. This bull rush attempt does not ' +
      'provoke attacks of opportunity.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['enlarge person'],
      cost: 2700,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'free',

    effects: [
      {
        type: 'special',
        target: 'special.boots_vengeful_behir_bull_rush',
        value: 0,
        source: 'Boots of the Vengeful Behir',
      },
    ],
  },

  // ---- 221: Boots of the Winterlands -------------------------------------------
  {
    id: 'wondrous-boots-of-the-winterlands',
    name: 'Boots of the Winterlands',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 5,
    slot: 'feet',

    price: 2500,
    weight: 1,

    description:
      'These boots grant three distinct advantages in cold environments. The wearer can traverse ' +
      'snow at normal speed without leaving tracks. The boots also allow movement across slippery ' +
      'ice at normal speed without falling (this applies only to horizontal surfaces). Additionally, ' +
      'the boots provide warmth equivalent to an endure elements spell, protecting against cold ' +
      'environments.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace", 'endure elements', 'pass without trace'],
      cost: 1250,
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
        target: 'special.boots_winterlands_snow_movement',
        value: 0,
        source: 'Boots of the Winterlands',
      },
      {
        type: 'special',
        target: 'special.boots_winterlands_ice_movement',
        value: 0,
        source: 'Boots of the Winterlands',
      },
      {
        type: 'special',
        target: 'special.boots_winterlands_endure_elements',
        value: 0,
        source: 'Boots of the Winterlands',
      },
    ],
  },

  // ---- 222: Boots of Vaulting --------------------------------------------------
  {
    id: 'wondrous-boots-of-vaulting',
    name: 'Boots of Vaulting',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'feet',

    price: 3500,
    weight: 1,

    description:
      'These suede boots enhance acrobatic jumping ability. The wearer ignores an additional ' +
      '10 feet when calculating fall distance for Acrobatics checks to soften a landing. Once ' +
      'per round as a free action, the wearer gains a +10 competence bonus on an Acrobatics ' +
      'check to jump, treating the jump as though the wearer had a running start. This bonus ' +
      'also applies to Acrobatics checks to avoid attacks of opportunity while jumping or to ' +
      'maintain balance after landing. However, attempting a second such enhanced jump within ' +
      '1 minute requires a Fortitude save (DC equal to the jump\'s Acrobatics DC) or suffer a ' +
      'leg injury that reduces speed by half for 24 hours. Each additional jump within that ' +
      'minute increases the save DC by 5. The injury can be cured with magic healing or a ' +
      'successful DC 15 Heal check.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace", 'jump'],
      cost: 1750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'free',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.acrobatics',
        value: 10,
        source: 'Boots of Vaulting',
        condition: {
          type: 'custom',
          params: { descriptor: 'jump_once_per_round' },
          description: 'on one Acrobatics check to jump per round (free action activation)',
        },
      },
      {
        type: 'special',
        target: 'special.boots_vaulting_fall_reduction',
        value: 10,
        source: 'Boots of Vaulting',
      },
    ],
  },

  // ---- 223: Boots, Anthill -----------------------------------------------------
  {
    id: 'wondrous-anthill-boots',
    name: 'Anthill Boots',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 13,
    slot: 'feet',

    price: 12500,
    weight: 2,

    description:
      'These sturdy boots have thick soles with tiny holes from which ants periodically emerge. ' +
      'The wearer gains a +4 competence bonus on Fortitude saving throws against swarms\' ' +
      'distraction ability. Once per day as a standard action, the wearer can summon a swarm of ' +
      'army ants from the boots, functioning as the vomit swarm spell except the creatures emerge ' +
      'from the boots rather than from the wearer\'s mouth. The summoned swarm persists for 13 ' +
      'rounds.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['vomit swarm'],
      cost: 6250,
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
        type: 'bonus',
        bonusType: 'competence',
        target: 'save.fortitude',
        value: 4,
        source: 'Anthill Boots',
        condition: {
          type: 'custom',
          params: { descriptor: 'swarm_distraction' },
          description: 'against swarms\' distraction ability only',
        },
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'vomit_swarm',
            spellName: 'Vomit Swarm',
            casterLevel: 13,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 224: Boots, Bastion -----------------------------------------------------
  {
    id: 'wondrous-bastion-boots',
    name: 'Bastion Boots',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'feet',

    price: 10500,
    weight: 4,

    description:
      'These metal boots feature engravings depicting The Keep card. The wearer can activate ' +
      'the boots to function as an immovable rod — while activated, both the boots and the wearer ' +
      'become immobile. Even when not activated, the boots provide a +4 bonus to the wearer\'s ' +
      'CMD against combat maneuvers that would move her.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['levitate'],
      cost: 5250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'cmd',
        value: 4,
        source: 'Bastion Boots',
        condition: {
          type: 'custom',
          params: { descriptor: 'movement_maneuvers' },
          description: 'against combat maneuvers that move the wearer',
        },
      },
      {
        type: 'special',
        target: 'special.bastion_boots_immovable',
        value: 0,
        source: 'Bastion Boots',
      },
    ],
  },

  // ---- 225: Boots, Bogstrider --------------------------------------------------
  {
    id: 'wondrous-bogstrider-boots',
    name: 'Bogstrider Boots',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 7,
    slot: 'feet',

    price: 10000,
    weight: 1,

    description:
      'These leather boots smell strongly of marsh gas and leave faint wet prints even when ' +
      'dry. The wearer can move through shallow and deep bog terrain without impediment — ' +
      'Acrobatics check DCs for moving through such terrain are unchanged. Additionally, three ' +
      'times per day when the wearer uses a charge or withdraw action, she can gain 60 additional ' +
      'feet of movement for that round.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['freedom of movement', 'haste'],
      cost: 5000,
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
        target: 'special.bogstrider_boots_bog_movement',
        value: 0,
        source: 'Bogstrider Boots',
      },
      {
        type: 'special',
        target: 'special.bogstrider_boots_speed_burst',
        value: 60,
        source: 'Bogstrider Boots',
      },
    ],
  },
];
