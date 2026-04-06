import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsAB10: WondrousItemDefinition[] = [
  // ---- 226: Boots, Burglar (Minor) --------------------------------------------
  {
    id: 'wondrous-boots-burglar-minor',
    name: 'Burglar Boots (Minor)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 1,
    slot: 'feet',

    price: 4000,
    weight: 0.5,

    description:
      'These black calfskin boots decorated with raven feathers grant their wearer a +5 competence bonus ' +
      'on Perception checks to spot or locate traps and devices on the floor within 10 feet. This bonus ' +
      'also applies to the wearer\'s AC and on Reflex saves against such floor traps.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must have 4 ranks in Perception'],
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
        target: 'skill.perception',
        value: 5,
        source: 'Burglar Boots (Minor)',
        condition: {
          type: 'custom',
          params: { descriptor: 'floor_traps_within_10ft' },
          description: 'to spot or locate traps and devices on the floor within 10 feet only',
        },
      },
      {
        type: 'special',
        target: 'special.floor_trap_ac_reflex_bonus',
        value: 5,
        source: 'Burglar Boots (Minor)',
      },
    ],
  },

  // ---- 226 (variant): Boots, Burglar (Major) ----------------------------------
  {
    id: 'wondrous-boots-burglar-major',
    name: 'Burglar Boots (Major)',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 10,
    slot: 'feet',

    price: 46000,
    weight: 0.5,

    description:
      'These boots function like minor burglar boots but provide enhanced bonuses: a +10 competence bonus ' +
      'on Perception checks to locate floor traps within 10 feet, and a +10 bonus to AC and on Reflex saves ' +
      'against such traps. Additionally, once per day the wearer can use find traps as a spell-like ability.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['find traps'],
      specialRequirements: ['Creator must have at least 12 ranks in Perception'],
      cost: 23000,
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
        target: 'skill.perception',
        value: 10,
        source: 'Burglar Boots (Major)',
        condition: {
          type: 'custom',
          params: { descriptor: 'floor_traps_within_10ft' },
          description: 'to spot or locate traps and devices on the floor within 10 feet only',
        },
      },
      {
        type: 'special',
        target: 'special.floor_trap_ac_reflex_bonus',
        value: 10,
        source: 'Burglar Boots (Major)',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'find_traps',
            spellName: 'Find Traps',
            casterLevel: 10,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 227: Boots, Caltrop ----------------------------------------------------
  {
    id: 'wondrous-boots-caltrop',
    name: 'Caltrop Boots',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'feet',

    price: 10000,
    weight: 2,

    description:
      'These black leather knee-high boots feature bulging, irregularly shaped heels. As a swift action, ' +
      'the wearer can activate them to spray caltrops from the heels while moving during the remainder of ' +
      'that round. The caltrops fill each square entered and affect any creature (including the wearer) that ' +
      'occupies or steps into those squares. The caltrops vanish when removed from the area. The boots ' +
      'function for 10 rounds per day, which need not be consecutive.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['spike growth'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 15,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.caltrop_trail',
        value: 10,
        source: 'Caltrop Boots',
      },
    ],
  },

  // ---- 228: Boots, Cat Burglar's ----------------------------------------------
  {
    id: 'wondrous-boots-cat-burglars',
    name: "Cat Burglar's Boots",
    category: 'wondrous',
    source: "Pathfinder #61: Shards of Sin",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'feet',

    price: 2000,
    weight: 1,

    description:
      "These boots grant a +2 competence bonus on Acrobatics, Climb, and Stealth checks. Once per day, " +
      "the wearer may use an immediate action to reroll a failed check in any one of these three skills. " +
      "Additionally, the boots contain a hidden pocket designed to hold a masterwork thieves' tool set, " +
      "requiring a DC 22 Perception check to discover.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace"],
      cost: 1000,
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
        target: 'skill.acrobatics',
        value: 2,
        source: "Cat Burglar's Boots",
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.climb',
        value: 2,
        source: "Cat Burglar's Boots",
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.stealth',
        value: 2,
        source: "Cat Burglar's Boots",
      },
      {
        type: 'special',
        target: 'special.skill_reroll_once_per_day',
        value: 0,
        source: "Cat Burglar's Boots",
      },
    ],
  },

  // ---- 229: Boots, Daredevil Softpaws -----------------------------------------
  {
    id: 'wondrous-boots-daredevil-softpaws',
    name: 'Daredevil Softpaws',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 3,
    slot: 'feet',

    price: 1400,
    weight: 1,

    description:
      "By clicking her heels together as a free action, the wearer gains a +5 competence bonus on " +
      "Acrobatics checks made to move through threatened squares or to move through an enemy's space " +
      "without provoking attacks of opportunity for up to 10 rounds per day (need not be consecutive). " +
      "Whenever the wearer successfully moves through an enemy's space without provoking an attack of " +
      "opportunity, she gains a +2 bonus on attack rolls against that enemy until the end of her turn.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace"],
      cost: 700,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.acrobatics',
        value: 5,
        source: 'Daredevil Softpaws',
        condition: {
          type: 'custom',
          params: { descriptor: 'move_through_threatened_square' },
          description: 'when moving through threatened squares or enemy spaces only',
        },
      },
      {
        type: 'special',
        target: 'special.daredevil_softpaws_attack_bonus',
        value: 2,
        source: 'Daredevil Softpaws',
      },
    ],
  },

  // ---- 230: Boots, Dunestrider ------------------------------------------------
  {
    id: 'wondrous-boots-dunestrider',
    name: 'Dunestrider Boots',
    category: 'wondrous',
    source: 'Legacy of Fire Player\'s Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'feet',

    price: 3000,
    weight: 2,

    description:
      'These weathered desert boots allow the wearer to traverse sandy terrain as if it were hardpacked ' +
      'earth. Sandy desert overland movement is treated as plains travel. Even loose sand and quicksand ' +
      'become normal terrain, eliminating all movement penalties associated with desert travel.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['expeditious retreat', 'longstrider'],
      cost: 1500,
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
        target: 'special.desert_terrain_movement',
        value: 0,
        source: 'Dunestrider Boots',
      },
    ],
  },

  // ---- 231: Boots, Earth Root -------------------------------------------------
  {
    id: 'wondrous-boots-earth-root',
    name: 'Earth Root Boots',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'feet',

    price: 8000,
    weight: 2,

    description:
      'The wearer of these boots gains a cumulative +1 circumstance bonus to CMD (maximum +10) for ' +
      'each consecutive round she remains stationary on solid ground. Any movement, even a 5-foot step, ' +
      'resets this bonus to 0.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['elemental body i'],
      cost: 4000,
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
        target: 'special.earth_root_cmd_bonus',
        value: 10,
        source: 'Earth Root Boots',
      },
    ],
  },

  // ---- 232: Boots, Getaway ----------------------------------------------------
  {
    id: 'wondrous-boots-getaway',
    name: 'Getaway Boots',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 11,
    slot: 'feet',

    price: 30000,
    weight: 1,

    description:
      'These boots can be attuned once per day to a location as a full-round action. Once per day as a ' +
      'full-round action, the wearer can teleport back to the attuned location, along with everything she ' +
      'is carrying or wearing, functioning as the getaway spell but without teleporting allies.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['getaway'],
      cost: 15000,
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
        target: 'special.teleport_to_attuned_location',
        value: 0,
        source: 'Getaway Boots',
      },
    ],
  },

  // ---- 233: Boots, Jaunt ------------------------------------------------------
  {
    id: 'wondrous-boots-jaunt',
    name: 'Jaunt Boots',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'feet',

    price: 7200,
    weight: 2,

    description:
      "These stylish black leather boots are stitched with images of winding roads and trails through " +
      "peaceful orchards. The wearer can activate them three times per day as a move action to travel up " +
      "to 15 feet (or their movement speed if lower) without provoking attacks of opportunity.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["jester's jaunt"],
      cost: 3600,
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
        target: 'special.short_range_teleport_no_aoo',
        value: 15,
        source: 'Jaunt Boots',
      },
    ],
  },

  // ---- 234: Boots, Jungle -----------------------------------------------------
  {
    id: 'wondrous-boots-jungle',
    name: 'Jungle Boots',
    category: 'wondrous',
    source: 'Sargava, the Lost Colony',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'feet',

    price: 6000,
    weight: 1,

    description:
      'These boots enable the wearer to move through normal undergrowth without hindrance or reduction ' +
      'in speed, as if she had the woodland stride ability.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['longstrider'],
      cost: 3000,
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
        target: 'special.woodland_stride',
        value: 0,
        source: 'Jungle Boots',
      },
    ],
  },

  // ---- 235: Boots, Nightmare --------------------------------------------------
  {
    id: 'wondrous-boots-nightmare',
    name: 'Nightmare Boots',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 6,
    slot: 'feet',

    price: 8500,
    weight: 3,

    description:
      'These black leather boots trimmed with crimson fiendish horsehair provide concealment when the ' +
      'wearer runs or charges. Three times per day as a swift action, the wearer can create a smoke cloud ' +
      'that grants concealment until the end of her turn. Once per day, after hitting with a melee attack, ' +
      'the wearer can ignite the boots to deal 2d6 points of fire damage to all creatures within 5 feet ' +
      '(DC 13 Reflex save for half).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['burning hands', 'pyrotechnics'],
      cost: 3750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 15,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.smoke_concealment_on_run_charge',
        value: 0,
        source: 'Nightmare Boots',
      },
      {
        type: 'damage',
        bonusType: 'untyped',
        target: 'special.fire_damage_aoe_5ft',
        value: '2d6',
        source: 'Nightmare Boots',
      },
    ],
  },

  // ---- 236: Boots, Rat-Tread --------------------------------------------------
  {
    id: 'wondrous-boots-rat-tread',
    name: 'Rat-Tread Boots',
    category: 'wondrous',
    source: 'Pathfinder Module: Tears at Bitter Manor',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 3,
    slot: 'feet',

    price: 8500,
    weight: 1,

    description:
      'These magical boots summon a rat swarm beneath the wearer that serves as a living carpet. On land, ' +
      'the swarm allows traversal through difficult terrain for up to 15 feet per round. Across calm water, ' +
      "the wearer can move up to 15 feet per round on the rats' backs. The swarm lasts up to 10 minutes " +
      'per day in 1-minute increments. If the wearer loses consciousness while the swarm is active, the ' +
      'swarm attempts to move her 5 feet away from the nearest enemy before dispersing. The swarm grants ' +
      'the wearer immunity from the attacks of rat swarms.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['charm animal', 'summon swarm'],
      cost: 4250,
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
        target: 'special.rat_swarm_movement_platform',
        value: 15,
        source: 'Rat-Tread Boots',
      },
      {
        type: 'special',
        target: 'special.rat_swarm_attack_immunity',
        value: 0,
        source: 'Rat-Tread Boots',
      },
    ],
  },

  // ---- 237: Boots, Rebuilder's ------------------------------------------------
  {
    id: 'wondrous-boots-rebuilders',
    name: "Rebuilder's Boots",
    category: 'wondrous',
    source: "Merchant's Manifest",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'feet',

    price: 14500,
    weight: 2,

    description:
      "These sturdy brown leather boots grant the wearer a +5 competence bonus on Craft checks to repair " +
      "items. As a move action, the wearer can activate them to move at full land speed while ignoring any " +
      "adverse movement effects of difficult terrain, as per the effects of the feather step spell. This " +
      "benefit lasts up to 40 minutes per day, usable in 1-minute increments, and can be ended as a free " +
      "action.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["crafter's fortune", 'feather step'],
      cost: 7250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: "Rebuilder's Boots",
        condition: {
          type: 'custom',
          params: { descriptor: 'repair_items' },
          description: 'on Craft checks to repair items only',
        },
      },
      {
        type: 'special',
        target: 'special.feather_step_difficult_terrain',
        value: 40,
        source: "Rebuilder's Boots",
      },
    ],
  },

  // ---- 238: Boots, Rime-Stride ------------------------------------------------
  {
    id: 'wondrous-boots-rime-stride',
    name: 'Rime-Stride Boots',
    category: 'wondrous',
    source: 'Dirty Tactics Toolbox',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 10,
    slot: 'feet',

    price: 27000,
    weight: 0,

    description:
      'These fur-lined boots provide two main benefits. First, they enhance movement on icy terrain by ' +
      'adding 15 feet to speed and eliminating the need for Acrobatics checks when running or charging on ' +
      'ice. During combat on ice, the wearer gains a +2 circumstance bonus on combat maneuver checks and ' +
      'to CMD. Second, once per day the wearer can create a 30-foot-radius icy surface lasting 10 rounds. ' +
      'Creatures moving through this area must succeed on a DC 10 Acrobatics check to move at half speed; ' +
      'failure prevents movement that round, and failure by 5 or more causes falling. Creatures using ' +
      'Acrobatics to move through the area become flat-footed and lose their Dexterity bonuses to AC.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['pass without trace', 'sleet storm'],
      cost: 13500,
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
        bonusType: 'untyped',
        target: 'speed.base',
        value: 15,
        source: 'Rime-Stride Boots',
        condition: {
          type: 'custom',
          params: { descriptor: 'icy_terrain' },
          description: 'on icy terrain only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'cmb',
        value: 2,
        source: 'Rime-Stride Boots',
        condition: {
          type: 'custom',
          params: { descriptor: 'fighting_on_ice' },
          description: 'while fighting on ice only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'cmd',
        value: 2,
        source: 'Rime-Stride Boots',
        condition: {
          type: 'custom',
          params: { descriptor: 'fighting_on_ice' },
          description: 'while fighting on ice only',
        },
      },
      {
        type: 'special',
        target: 'special.create_icy_surface_30ft',
        value: 0,
        source: 'Rime-Stride Boots',
      },
    ],
  },

  // ---- 239: Boots, Rootsense --------------------------------------------------
  {
    id: 'wondrous-boots-rootsense',
    name: 'Rootsense Boots',
    category: 'wondrous',
    source: 'Ultimate Wilderness',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'feet',

    price: 9000,
    weight: 1,

    description:
      'These tall brown boots feature sprouting twigs. When activated by the wearer while on the ground, ' +
      'ghostly roots extend into the earth, granting tremorsense out to 30 feet as long as the wearer ' +
      'remains stationary. While the roots are active, the boots also grant a +4 bonus to CMD against ' +
      'bull rush and trip attempts, plus a +4 circumstance bonus on combat maneuver checks and Escape ' +
      'Artist checks to break free from grapples or bonds.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['entangle'],
      cost: 4500,
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
        bonusType: 'untyped',
        target: 'special.tremorsense',
        value: 30,
        source: 'Rootsense Boots',
        condition: {
          type: 'custom',
          params: { descriptor: 'stationary_on_ground' },
          description: 'only while stationary on the ground with roots active',
        },
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'cmd',
        value: 4,
        source: 'Rootsense Boots',
        condition: {
          type: 'custom',
          params: { descriptor: 'roots_active_bull_rush_trip' },
          description: 'against bull rush and trip attempts only while roots are active',
        },
      },
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'cmb',
        value: 4,
        source: 'Rootsense Boots',
        condition: {
          type: 'custom',
          params: { descriptor: 'roots_active_break_free' },
          description: 'on combat maneuver checks to break free from grapples only while roots are active',
        },
      },
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'skill.escape_artist',
        value: 4,
        source: 'Rootsense Boots',
        condition: {
          type: 'custom',
          params: { descriptor: 'roots_active_break_free' },
          description: 'on Escape Artist checks to break free from grapples or bonds only while roots are active',
        },
      },
    ],
  },

  // ---- 240: Boots, Trackless --------------------------------------------------
  {
    id: 'wondrous-boots-trackless',
    name: 'Trackless Boots',
    category: 'wondrous',
    source: 'Second Darkness Player\'s Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'feet',

    price: 3500,
    weight: 2,

    description:
      'These soft leather boots provide a +4 competence bonus on Stealth checks and function similarly ' +
      'to the pass without trace spell, leaving no trail and preventing the wearer from being tracked.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['pass without trace'],
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
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.stealth',
        value: 4,
        source: 'Trackless Boots',
      },
      {
        type: 'special',
        target: 'special.pass_without_trace',
        value: 0,
        source: 'Trackless Boots',
      },
    ],
  },

  // ---- 241: Boots, Tremor -----------------------------------------------------
  {
    id: 'wondrous-boots-tremor',
    name: 'Tremor Boots',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'feet',

    price: 10000,
    weight: 1,

    description:
      'These brown leather boots feature steel-reinforced toes and grooved soles designed to detect ' +
      'vibrations. These boots grant the wearer tremorsense 5 feet as long as he is standing on solid ' +
      'ground.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['see invisibility'],
      cost: 5000,
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
        bonusType: 'untyped',
        target: 'special.tremorsense',
        value: 5,
        source: 'Tremor Boots',
        condition: {
          type: 'custom',
          params: { descriptor: 'standing_on_solid_ground' },
          description: 'only while standing on solid ground',
        },
      },
    ],
  },

  // ---- 242: Boots, Verdant ----------------------------------------------------
  {
    id: 'wondrous-boots-verdant',
    name: 'Verdant Boots',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'feet',

    price: 12000,
    weight: 2,

    description:
      "These boots can be activated three times per day to cause the wearer's current square to generate " +
      'an edible plant canopy. The vegetation functions as difficult terrain and provides cover for Medium ' +
      'or smaller creatures, and yields enough sustenance for two Medium creatures for one day. Plants can ' +
      'grow on normally inhospitable surfaces but not in areas hostile to vegetation. The plants vanish ' +
      'after 24 hours or after being completely harvested.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['plant growth'],
      cost: 6000,
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
        target: 'special.create_edible_plant_canopy',
        value: 0,
        source: 'Verdant Boots',
      },
    ],
  },

  // ---- 243: Boots, Winged -----------------------------------------------------
  {
    id: 'wondrous-boots-winged',
    name: 'Winged Boots',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'feet',

    price: 16000,
    weight: 1,

    description:
      'These boots appear to be ordinary footgear. On command, they sprout wings at the heel and let the ' +
      'wearer fly, without having to maintain concentration, as if affected by a fly spell (including a ' +
      '+4 bonus on Fly skill checks). The wearer can fly three times per day for up to 5 minutes per flight.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fly'],
      cost: 8000,
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
        bonusType: 'untyped',
        target: 'special.fly_speed',
        value: 0,
        source: 'Winged Boots',
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'skill.fly',
        value: 4,
        source: 'Winged Boots',
      },
    ],
  },

  // ---- 244: Bottle of Air -----------------------------------------------------
  {
    id: 'wondrous-bottle-of-air',
    name: 'Bottle of Air',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'none',

    price: 7250,
    weight: 2,

    description:
      'This glass bottle with a cork retains air within it at all times, continually renewing its ' +
      'contents. Underwater or in airless environments, drawing air from the bottle requires a standard ' +
      'action; afterward the character can act normally for as long as she can hold her breath. Multiple ' +
      'characters can share a single bottle.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['water breathing'],
      cost: 3625,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.breathable_air_supply',
        value: 0,
        source: 'Bottle of Air',
      },
    ],
  },

  // ---- 245: Bottle of Messages ------------------------------------------------
  {
    id: 'wondrous-bottle-of-messages',
    name: 'Bottle of Messages',
    category: 'wondrous',
    source: "Advanced Player's Guide",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 3,
    slot: 'none',

    price: 300,
    weight: 1,

    description:
      'A green glass bottle with a winding key on its stem. Turning the key causes a shadowy cork to ' +
      'become solid over the course of one round. The owner can speak up to 25 words into the bottle ' +
      'during this period, trapping the message inside. When the cork is removed or the bottle breaks, ' +
      'the message releases as if spoken at that moment. After releasing its message, the bottle shatters.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['magic mouth'],
      cost: 150,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.store_spoken_message',
        value: 0,
        source: 'Bottle of Messages',
      },
    ],
  },

  // ---- 246: Bottle of Shadows -------------------------------------------------
  {
    id: 'wondrous-bottle-of-shadows',
    name: 'Bottle of Shadows',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 7000,
    weight: 0,

    description:
      'A bottle made from dark ebony that can summon a shadow creature to serve the user. It contains 4 ' +
      'charges; each round of summoning drains 1 charge. The bearer may dismiss the shadow as a standard ' +
      'action. When the shadow kills a humanoid with at least 4 Hit Dice, the bottle gains 1 charge. The ' +
      'bottle automatically resets to 4 charges at sundown.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate dead'],
      cost: 3500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    charges: { maximum: 4, rechargeMethod: 'Resets to 4 charges at sundown; gains 1 charge when shadow kills a humanoid with 4+ HD' },

    effects: [
      {
        type: 'special',
        target: 'special.summon_shadow_creature',
        value: 0,
        source: 'Bottle of Shadows',
      },
    ],
  },

  // ---- 247: Bottle, Efreeti ---------------------------------------------------
  {
    id: 'wondrous-bottle-efreeti',
    name: 'Efreeti Bottle',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 14,
    slot: 'none',

    price: 145000,
    weight: 1,

    description:
      'A brass or bronze vessel with a lead stopper that emits thin streams of bitter smoke. When opened ' +
      'once per day, an efreeti emerges. A d% roll determines the outcome: 01-10 results in an insane ' +
      'efreeti that attacks immediately; 11-90 grants loyal service for up to 10 minutes that day; and ' +
      '91-100 provides three wishes. After granting three wishes, the efreeti vanishes permanently and the ' +
      'bottle loses its magic. The result is determined fresh each time the bottle is opened for the day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['planar binding'],
      cost: 72500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 24,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.efreeti_bottle_summon',
        value: 0,
        source: 'Efreeti Bottle',
      },
    ],
  },

  // ---- 248: Bottle, Eversmoking -----------------------------------------------
  {
    id: 'wondrous-bottle-eversmoking',
    name: 'Eversmoking Bottle',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',

    price: 5400,
    weight: 1,

    description:
      'This metal urn produces copious smoke when unstoppered. The amount of smoke is great if the stopper ' +
      'is pulled out, pouring from the bottle and totally obscuring vision across a 50-foot spread in 1 ' +
      'round. If left open, smoke spreads an additional 10 feet per round until reaching a 100-foot radius. ' +
      'The smoke persists until the bottle is resealed via command word, then disperses naturally. Moderate ' +
      'winds (11+ mph) clear it in 4 rounds; strong winds (21+ mph) clear it in 1 round.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['pyrotechnics'],
      cost: 2700,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.smoke_obscurement_50ft',
        value: 0,
        source: 'Eversmoking Bottle',
      },
    ],
  },

  // ---- 249: Bottled Misfortune ------------------------------------------------
  {
    id: 'wondrous-bottled-misfortune',
    name: 'Bottled Misfortune',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 10,
    slot: 'none',

    price: 500,
    weight: 1,

    description:
      'A leather bottle containing frothy green liquid. A witch can transfer any non-greater, non-grand ' +
      'hex she knows into the brew as a full-round action, creating a sticky syrup that functions as an ' +
      'injury poison (5% chance of self-harm without the poison use ability). Creatures struck by weapons ' +
      'coated in the syrup must succeed on a DC 15 saving throw or suffer the hex\'s effects. The syrup ' +
      'functions as both a poison and a magical effect, lasting 24 hours before becoming inert. Hexes with ' +
      'once-per-24-hours restrictions apply the same limitation to subsequent doses from the same batch.',

    construction: {
      feats: ['Brew Potion', 'Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be a witch with the poison steep hex'],
      cost: 250,
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
        target: 'special.hex_delivery_poison',
        value: 15,
        source: 'Bottled Misfortune',
      },
    ],
  },

  // ---- 250: Bottled Scream ----------------------------------------------------
  {
    id: 'wondrous-bottled-scream',
    name: 'Bottled Scream',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'none',

    price: 900,
    weight: 0.5,

    description:
      'A sealed smoked glass bottle that releases a shrill scream in a 20-foot-radius burst when opened ' +
      'or shattered. The scream ends bardic performances with audible components and forces spellcasters ' +
      'within the area to make concentration checks (DC 15 + spell level) or lose their spells. The scream ' +
      'also dispels any overlapping silence spells in the area. It can be used as a splash weapon or opened ' +
      'by hand.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shout'],
      cost: 450,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.sonic_scream_burst_20ft',
        value: 0,
        source: 'Bottled Scream',
      },
    ],
  },
];
