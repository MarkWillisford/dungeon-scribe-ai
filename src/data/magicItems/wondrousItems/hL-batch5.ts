import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsHL5: WondrousItemDefinition[] = [
  // ---- 1. Horseshoes of Mist -----------------------------------------------
  {
    id: 'wondrous-horseshoes-of-mist',
    name: 'Horseshoes of Mist',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'feet',

    price: 27000,
    weight: 12,

    description:
      'These magical horseshoes emit wisps of mist with each hoof strike. On command from the rider, ' +
      'both mount and rider are transformed as if by a gaseous form spell, becoming incorporeal clouds. ' +
      'If mount and rider become separated while gaseous, the effect immediately ends for both. ' +
      'The shoes function for a total of 10 minutes per day, and the gaseous form can be ended in ' +
      'increments of no less than 1 minute.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['gaseous form'],
      cost: 13500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'command_word',
    activationAction: 'free',

    effects: [
      {
        type: 'special',
        target: 'special.gaseous_form_mount_and_rider',
        value: 0,
        source: 'Horseshoes of Mist',
      },
    ],

    charges: { maximum: 10, rechargeMethod: 'daily (minutes)' },
  },

  // ---- 2. Horseshoes of Speed -----------------------------------------------
  {
    id: 'wondrous-horseshoes-of-speed',
    name: 'Horseshoes of Speed',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'feet',

    price: 3000,
    weight: 12,

    description:
      'When all four of these iron horseshoes are affixed to a horse\'s hooves, they increase the ' +
      "animal's base land speed by 30 feet. This counts as an enhancement bonus. The horse's jumping " +
      'distances are also proportionally increased. All four shoes must be worn for the magic to function.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['haste'],
      cost: 1500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'speed.land',
        value: 30,
        source: 'Horseshoes of Speed',
      },
    ],
  },

  // ---- 3. Horseshoes, Nightmare ---------------------------------------------
  {
    id: 'wondrous-horseshoes-nightmare',
    name: 'Horseshoes, Nightmare',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 7,
    slot: 'feet',

    price: 9000,
    weight: 12,

    description:
      'These blackened steel horseshoes are etched with infernal symbols and images of distressed horses. ' +
      'They emit a faint brimstone odor. On command, the rider can grant the mount a smoke ability usable ' +
      'for 10 rounds per day (minimum 1 round per activation). When the smoke ability is active, the ' +
      "mount's eyes, hooves, mane, and tail ignite with hellish flames, adding 1d4 fire damage to each " +
      'hoof attack. All four shoes must be worn for the magic to function.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['burning hands', 'obscuring mist', 'stinking cloud'],
      cost: 4500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'command_word',
    activationAction: 'free',

    effects: [
      {
        type: 'damage',
        target: 'attack.hoof',
        value: 4,
        source: 'Horseshoes, Nightmare',
      },
      {
        type: 'special',
        target: 'special.nightmare_smoke_ability',
        value: 0,
        source: 'Horseshoes, Nightmare',
      },
    ],

    charges: { maximum: 10, rechargeMethod: 'daily (rounds)' },
  },

  // ---- 4. Hospitality's Hammock ---------------------------------------------
  {
    id: 'wondrous-hospitalitys-hammock',
    name: "Hospitality's Hammock",
    category: 'wondrous',
    source: "Pathfinder #55: The Wormwood Mutiny",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 5000,
    weight: 3,

    description:
      'This luxurious crimson silk hammock is embroidered in gold thread with tassels at each end. ' +
      'Entering or exiting the hammock requires a full-round action, reduced to a move action with a ' +
      'successful DC 5 Dexterity check. A creature that sleeps in this hammock for one full night ' +
      'loses any seasickness. Sleeping in the hammock for a full 8 hours grants healing as though ' +
      'the sleeper had rested for a full day of bed rest.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cure light wounds', 'remove disease'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 13,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.seasickness_cure',
        value: 0,
        source: "Hospitality's Hammock",
      },
      {
        type: 'special',
        target: 'special.bed_rest_healing',
        value: 0,
        source: "Hospitality's Hammock",
      },
    ],
  },

  // ---- 5. Hourglass of Last Chances -----------------------------------------
  {
    id: 'wondrous-hourglass-of-last-chances',
    name: 'Hourglass of Last Chances',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 11,
    slot: 'none',

    price: 10000,
    weight: 0,

    description:
      'This tiny hourglass contains blood-red sand. When turned over as a standard action, it ' +
      'grants a target within 30 feet freedom of movement and suspends the following conditions: ' +
      'blindness, confusion, daze, dazzle, deafness, disease, exhaustion, fatigue, feeblemindedness, ' +
      'insanity, nausea, poison, sickness, and stun. Suspended effects resume when deactivated; ' +
      'time spent suspended does not count toward the condition\'s duration. Ending the effects is a ' +
      'swift action. The hourglass provides up to 5 rounds of use per day, usable non-consecutively.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['freedom of movement', 'heal'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.freedom_of_movement',
        value: 0,
        source: 'Hourglass of Last Chances',
      },
      {
        type: 'special',
        target: 'special.condition_suspension',
        value: 0,
        source: 'Hourglass of Last Chances',
      },
    ],

    charges: { maximum: 5, rechargeMethod: 'daily (rounds)' },
  },

  // ---- 6. Hunter's Tree Fort ------------------------------------------------
  {
    id: 'wondrous-hunters-tree-fort',
    name: "Hunter's Tree Fort",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'none',

    price: 10000,
    weight: 1,

    description:
      'This wooden puzzle box transforms into a tree-mounted structure on command. When activated ' +
      'against a suitable tree (minimum 2-foot-diameter trunk), it rises to create a platform 20 feet ' +
      'above ground connected by a rope ladder. The structure blends with the tree (DC 25 Perception ' +
      'to notice; DC 15 for leafless trees). It has two configurations. Tree House: a 20-foot-square ' +
      'open platform with railings providing partial cover for standing creatures and total cover for ' +
      'prone ones. Blind: a 5-foot-square enclosed structure with roof and windows on all four sides, ' +
      'granting improved cover. The fort operates for up to 12 hours per 24-hour period ' +
      '(non-consecutive). Taking 50 damage (hardness 5) collapses it safely; a damaged fort requires ' +
      'a 24-hour cooldown before reactivation.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['rope trick', 'warp wood'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 50,
      breakDC: 20,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.deployable_tree_fort',
        value: 0,
        source: "Hunter's Tree Fort",
      },
    ],

    charges: { maximum: 12, rechargeMethod: 'daily (hours)' },
  },

  // ---- 7. Hybridization Funnel -----------------------------------------------
  {
    id: 'wondrous-hybridization-funnel',
    name: 'Hybridization Funnel',
    category: 'wondrous',
    source: "Adventurer's Armory",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',

    price: 200,
    weight: 2,

    description:
      'This dual-spouted alchemical device safely combines two splash weapons into a single container. ' +
      'The mixing process requires 10 minutes and a DC 25 Craft (alchemy) check; half-elves receive a ' +
      '+5 bonus on this check. A failed check destroys both components. Success produces a single ' +
      'standard-volume vial with the combined effects of both substances. The mixture remains potent ' +
      'for 24 hours before becoming inert. Holy or unholy water may be mixed with splash weapons at ' +
      'DC 30. The funnel works only with liquids; potions, elixirs, extracts, identical substances, ' +
      'and previously hybridized mixtures cannot be processed.',

    construction: {
      feats: ['Craft Wondrous Item', 'fabricate'],
      spells: [],
      cost: 100,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.hybridize_splash_weapons',
        value: 0,
        source: 'Hybridization Funnel',
      },
    ],
  },

  // ---- 8. Icon of Aspects ---------------------------------------------------
  {
    id: 'wondrous-icon-of-aspects',
    name: 'Icon of Aspects',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'none',

    price: 5500,
    weight: 1,

    description:
      'This wondrous item allows a cleric to temporarily swap one of her domain\'s granted powers for ' +
      'a different granted power from a domain associated with her deity. The exchange takes place ' +
      'during spell preparation and lasts until the next spell preparation. Both the original and ' +
      'replacement powers must be available at the cleric\'s current level. Only granted powers are ' +
      'affected — not domain spells or bonus feats. Only one creature can benefit from a given icon ' +
      'at a time.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['imbue with spell ability'],
      specialRequirements: ['Creator must be a divine spellcaster'],
      cost: 2750,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.domain_power_swap',
        value: 0,
        source: 'Icon of Aspects',
      },
    ],
  },

  // ---- 9. Idol of the Eye --------------------------------------------------
  {
    id: 'wondrous-idol-of-the-eye',
    name: 'Idol of the Eye',
    category: 'wondrous',
    source: 'Pathfinder Module: Curse of the Riven Sky',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 9,
    slot: 'none',

    price: 19000,
    weight: 5,

    description:
      'A golden figurine depicting a bald, obese wise man with a third eye in his forehead. Rather ' +
      'than channeling a deity, the idol draws on celestial mechanics — answers reference ' +
      'astronomical bodies and their positions. Once per day the idol can be used to cast augury, ' +
      'and once per day it can cast divination. Once per week it answers a single yes-or-no ' +
      'question as the commune spell.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['augury', 'commune', 'divination'],
      cost: 9500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 18,
    },

    activationCategory: 'use_activated',

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'augury',
            spellName: 'Augury',
            casterLevel: 9,
            usesPerDay: 1,
            activationAction: 'standard',
          },
          {
            spellId: 'divination',
            spellName: 'Divination',
            casterLevel: 9,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
      {
        spells: [
          {
            spellId: 'commune',
            spellName: 'Commune',
            casterLevel: 9,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],

    effects: [
      {
        type: 'special',
        target: 'special.commune_weekly',
        value: 0,
        source: 'Idol of the Eye',
      },
    ],
  },

  // ---- 10. Imperial Army Greathelm ------------------------------------------
  {
    id: 'wondrous-imperial-army-greathelm',
    name: 'Imperial Army Greathelm',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 9,
    slot: 'head',

    price: 29000,
    weight: 6,

    description:
      'A silver helmet adorned with a single oversized red plume, typically worn by experienced ' +
      'military commanders. If the wearer possesses the Leadership feat, they gain a +3 bonus to ' +
      'their Leadership score. Followers and cohorts within line of sight gain a +1 bonus to attack ' +
      'rolls and saving throws against fear effects. For wearers with the Tactician class feature, ' +
      "that ability's range extends to 60 feet.",

    construction: {
      feats: ['Craft Wondrous Item', 'Leadership'],
      spells: ['eagle\'s splendor', 'greater command'],
      cost: 14500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'special.leadership_score',
        value: 3,
        source: 'Imperial Army Greathelm',
        condition: {
          type: 'custom',
          params: { feat: 'Leadership' },
          description: 'wearer must possess the Leadership feat',
        },
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'attack.all',
        value: 1,
        source: 'Imperial Army Greathelm',
        condition: {
          type: 'custom',
          params: { descriptor: 'follower_or_cohort_in_line_of_sight' },
          description: 'followers and cohorts within line of sight only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'save.all',
        value: 1,
        source: 'Imperial Army Greathelm',
        condition: {
          type: 'custom',
          params: { descriptor: 'fear', scope: 'follower_or_cohort_in_line_of_sight' },
          description: 'followers and cohorts within line of sight vs. fear effects only',
        },
      },
      {
        type: 'special',
        target: 'special.tactician_range_60ft',
        value: 0,
        source: 'Imperial Army Greathelm',
      },
    ],
  },

  // ---- 11. Imploding Stone --------------------------------------------------
  {
    id: 'wondrous-imploding-stone',
    name: 'Imploding Stone',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'none',

    price: 3300,
    weight: 0,

    description:
      'This black pebble functions as a limited gravitational singularity. Activation (standard ' +
      'action, does not provoke) triggers a 1-round delay, then pulls all stone or earth within a ' +
      '5-foot-diameter sphere toward the stone with irresistible force, causing small tunnels to ' +
      'collapse inward and creating localized cave-ins. Living creatures are unaffected, but any ' +
      'creature occupying the same space as the stone when it activates is caught in the resulting ' +
      'bury zone. The stone is destroyed after use.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['move earth'],
      cost: 1650,
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
        target: 'special.stone_collapse_cave_in',
        value: 0,
        source: 'Imploding Stone',
      },
    ],
  },

  // ---- 12. Incense of Dulled Senses -----------------------------------------
  {
    id: 'wondrous-incense-of-dulled-senses',
    name: 'Incense of Dulled Senses',
    category: 'wondrous',
    source: "Pathfinder Player Companion: Dragonslayer's Handbook",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 10,
    slot: 'none',

    price: 1500,
    weight: 0,

    description:
      'This gray incense has a cold granite scent. When ignited, smoke expands to fill ten ' +
      '10-foot cubes and lingers unless dispersed by wind. The smoke lasts 10 minutes before ' +
      'dissipating. Creatures with blindsense, scent, or tremorsense that inhale the smoke must ' +
      'succeed at a DC 20 Fortitude save or lose those special senses for 10 minutes.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['blindness/deafness'],
      cost: 750,
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
        target: 'special.special_senses',
        value: 0,
        source: 'Incense of Dulled Senses',
        condition: {
          type: 'custom',
          params: { descriptor: 'blindsense_scent_or_tremorsense', saveType: 'fortitude', saveDC: 20 },
          description: 'creatures with blindsense, scent, or tremorsense that fail DC 20 Fortitude save',
        },
      },
    ],
  },

  // ---- 13. Incense of Eidos -------------------------------------------------
  {
    id: 'wondrous-incense-of-eidos',
    name: 'Incense of Eidos',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'none',

    price: 2000,
    weight: 1,

    description:
      'This incense produces a musty smell when burned, reminiscent of old tomes. When a creature ' +
      'burns the incense and spends 10 minutes in meditation, they may take 20 on any Knowledge ' +
      'skill check for the following 10 minutes, even in dangerous or distracting situations. ' +
      'One pound of incense provides three such meditation sessions.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["fox's cunning"],
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
        target: 'skill.knowledge',
        value: 20,
        source: 'Incense of Eidos',
      },
    ],
  },

  // ---- 14. Incense of Golden Embers -----------------------------------------
  {
    id: 'wondrous-incense-of-golden-embers',
    name: 'Incense of Golden Embers',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 7,
    slot: 'none',

    price: 2800,
    weight: 0,

    description:
      'This incense stick produces a sharp smell and fills the surrounding air with bright orange ' +
      'and golden motes when burned. Lighting the incense (standard action, does not provoke) and ' +
      'breathing the smoke for 1 minute grants the creature the fire subtype for 1 hour. This ' +
      'provides immunity to fire damage and vulnerability to cold damage for the duration. Each ' +
      'stick serves only one creature.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['elemental body i'],
      cost: 1400,
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
        target: 'special.fire_subtype',
        value: 0,
        source: 'Incense of Golden Embers',
      },
      {
        type: 'resistance',
        target: 'energy.fire',
        value: 9999,
        source: 'Incense of Golden Embers',
      },
      {
        type: 'special',
        target: 'special.vulnerability_cold',
        value: 0,
        source: 'Incense of Golden Embers',
      },
    ],
  },

  // ---- 15. Incense of Many Fates --------------------------------------------
  {
    id: 'wondrous-incense-of-many-fates',
    name: 'Incense of Many Fates',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 11,
    slot: 'none',

    price: 3300,
    weight: 1,

    description:
      'This meditative incense allows samsarans to access past or future lives for information ' +
      'about important people, places, or things. The effect functions similarly to legend lore but ' +
      'requires the subject\'s physical presence. Samsarans require 1 hour of meditation with no ' +
      'other actions; non-samsarans require 24 hours of meditation. Interruption negates the effect. ' +
      'Each block provides one use.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['legend lore'],
      cost: 1650,
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
        target: 'special.legend_lore_divination',
        value: 0,
        source: 'Incense of Many Fates',
      },
    ],
  },

  // ---- 16. Incense of Meditation --------------------------------------------
  {
    id: 'wondrous-incense-of-meditation',
    name: 'Incense of Meditation',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 7,
    slot: 'none',

    price: 4900,
    weight: 1,

    description:
      'This block of incense resembles normal incense until ignited. When burned, its special ' +
      'fragrance and pearly-hued smoke are recognizable by anyone making a DC 15 Spellcraft check. ' +
      'When a divine spellcaster burns the incense and spends 8 hours in prayer and meditation ' +
      'nearby, all spells prepared during that period gain the benefit of the Maximize Spell ' +
      'metamagic feat without occupying a higher-level spell slot. Each block burns for 8 hours ' +
      'and the maximized effects persist for 24 hours.',

    construction: {
      feats: ['Craft Wondrous Item', 'Maximize Spell'],
      spells: ['bless'],
      cost: 2450,
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
        target: 'special.maximize_spell_no_level_increase',
        value: 0,
        source: 'Incense of Meditation',
      },
    ],
  },

  // ---- 17. Incense of Transcendence -----------------------------------------
  {
    id: 'wondrous-incense-of-transcendence',
    name: 'Incense of Transcendence',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 7,
    slot: 'none',

    price: 1000,
    weight: 1,

    description:
      'This coiled incense enables an oracle to temporarily swap one revelation for another during ' +
      'an 8-hour meditation ritual. The replacement revelation must be of a level the oracle can ' +
      'access and from her mystery\'s available options. If the replaced revelation serves as a ' +
      'prerequisite for other abilities, those dependent abilities become unusable while the ' +
      'swap persists. The coil burns for 8 hours, with effects lasting 24 hours before the ' +
      'original revelations return.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['prayer'],
      specialRequirements: ['Creator must be an oracle of 7th level or higher'],
      cost: 500,
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
        target: 'special.oracle_revelation_swap',
        value: 0,
        source: 'Incense of Transcendence',
      },
    ],
  },

  // ---- 18. Infernal Cord ---------------------------------------------------
  {
    id: 'wondrous-infernal-cord',
    name: 'Infernal Cord',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',

    price: 5000,
    weight: 1,

    description:
      'A thick hide belt with scarred impressions of fiendish visages that shift between scowling ' +
      'and smiling. The cord grants a +2 enhancement bonus to Constitution (treated as temporary ' +
      'for the first 24 hours of use). Whenever an enemy scores a critical hit against the wearer, ' +
      'fast healing 1 activates for 1 minute; critical hits dealing only nonlethal damage do not ' +
      'trigger this. Fast healing is suppressed for 1 round when the triggering damage comes from ' +
      'silver weapons, good-aligned weapons, or good-descriptor spells or effects. The wearer ' +
      'detects as an evil creature, and any non-evil creature wearing the cord gains 1 negative ' +
      'level until it is removed.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance", 'infernal healing'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 2,
        source: 'Infernal Cord',
      },
      {
        type: 'special',
        target: 'special.fast_healing_on_critical',
        value: 1,
        source: 'Infernal Cord',
      },
      {
        type: 'special',
        target: 'special.detects_as_evil',
        value: 0,
        source: 'Infernal Cord',
      },
      {
        type: 'penalty',
        target: 'special.negative_levels',
        value: 1,
        source: 'Infernal Cord',
        condition: {
          type: 'custom',
          params: { descriptor: 'non_evil_wearer' },
          description: 'non-evil wearers only',
        },
      },
    ],
  },

  // ---- 18b. Greater Infernal Cord ------------------------------------------
  {
    id: 'wondrous-infernal-cord-greater',
    name: 'Infernal Cord, Greater',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',

    price: 31000,
    weight: 1,

    description:
      'A greater version of the infernal cord. This thick hide belt with shifting fiendish visages ' +
      'grants a +4 enhancement bonus to Constitution (treated as temporary for the first 24 hours). ' +
      'Whenever an enemy scores a critical hit against the wearer, fast healing 4 activates for ' +
      '1 minute. The same restrictions on triggering apply as the standard cord. The wearer ' +
      'detects as an evil cleric rather than simply an evil creature. Non-evil creatures wearing ' +
      'the cord gain 1 negative level until it is removed.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance", 'greater infernal healing'],
      cost: 15500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 4,
        source: 'Infernal Cord, Greater',
      },
      {
        type: 'special',
        target: 'special.fast_healing_on_critical',
        value: 4,
        source: 'Infernal Cord, Greater',
      },
      {
        type: 'special',
        target: 'special.detects_as_evil_cleric',
        value: 0,
        source: 'Infernal Cord, Greater',
      },
      {
        type: 'penalty',
        target: 'special.negative_levels',
        value: 1,
        source: 'Infernal Cord, Greater',
        condition: {
          type: 'custom',
          params: { descriptor: 'non_evil_wearer' },
          description: 'non-evil wearers only',
        },
      },
    ],
  },

  // ---- 19. Infiltrator's Onyx ----------------------------------------------
  {
    id: 'wondrous-infiltrators-onyx',
    name: "Infiltrator's Onyx",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 800,
    weight: 0,

    description:
      'This wondrous item consists of a paired white and black onyx gem. The black onyx functions ' +
      'as a 50 gp spell component for necromancy spells such as animate dead. When the black onyx ' +
      'is used in such a spell, the bearer of the white onyx receives a mental alert revealing the ' +
      "black gem's direction if it is within 1,000 feet, functioning as locate object for 5 minutes. " +
      "If the white onyx's owner is within 1 mile when a necromancy spell uses the black onyx, " +
      'they may destroy the white gem as a standard action to simultaneously destroy the black gem ' +
      'and ruin the spell. Either gem\'s destruction ends all effects and the white onyx crumbles ' +
      'to dust. Higher-value variants exist with black onyxes worth up to 1,000+ gp.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['alarm', 'locate object', 'magic aura'],
      cost: 425,
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
        target: 'special.necromancy_component_alert',
        value: 0,
        source: "Infiltrator's Onyx",
      },
    ],
  },

  // ---- 20. Ink of Stolen Secrets -------------------------------------------
  {
    id: 'wondrous-ink-of-stolen-secrets',
    name: 'Ink of Stolen Secrets',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'none',

    price: 50,
    weight: 1,

    description:
      'This alchemically crafted black ink attunes to a single sheet of standard parchment. ' +
      'Anything inscribed using the ink anywhere on the same plane of existence appears on the ' +
      'attuned parchment in sparkling blue script that lasts 1 hour. One vial fills a single ' +
      'sheet of parchment. The ink cannot replicate magical written effects such as a symbol of death.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['DC 15 Craft (alchemy) check'],
      cost: 25,
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
        target: 'special.remote_script_duplication',
        value: 0,
        source: 'Ink of Stolen Secrets',
      },
    ],
  },

  // ---- 21. Insightful Scroll Case ------------------------------------------
  {
    id: 'wondrous-insightful-scroll-case',
    name: 'Insightful Scroll Case',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 5000,
    weight: 2,

    description:
      'This enchanted electrum tube displays glowing blue runes on its surface indicating which ' +
      'spells are on scrolls currently stored within. A spellcaster who has a matching spell on ' +
      'their personal spell list can read these runes and cast directly from the case as if holding ' +
      'the scroll. The case holds up to five magic scrolls and protects them from fire, water, ' +
      'and similar environmental hazards.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['arcane sight', 'resist energy'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.scroll_identification_and_direct_cast',
        value: 0,
        source: 'Insightful Scroll Case',
      },
      {
        type: 'special',
        target: 'special.scroll_elemental_protection',
        value: 0,
        source: 'Insightful Scroll Case',
      },
    ],
  },

  // ---- 22. Insignia of Valor -----------------------------------------------
  {
    id: 'wondrous-insignia-of-valor',
    name: 'Insignia of Valor',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      'This heraldic metal badge depicts a creature such as a griffon, lion, or horse. It attaches ' +
      'to a shield or suit of armor with a DC 15 Craft (armor) check and 10 minutes of work with ' +
      'proper tools. The insignia functions only for wearers who possess both the channel energy ' +
      'and smite abilities. When the wearer dispatches an opponent using a smite attack (killing, ' +
      'destroying, or reducing it below 0 hit points), she may expend one use of her channel ' +
      'energy ability as a swift action that same round.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cure critical wounds'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.channel_energy_on_smite_kill',
        value: 0,
        source: 'Insignia of Valor',
      },
    ],
  },

  // ---- 23. Insistent Doorknocker -------------------------------------------
  {
    id: 'wondrous-insistent-doorknocker',
    name: 'Insistent Doorknocker',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',

    price: 5000,
    weight: 2,

    description:
      'An iron gargoyle face gripping an iron ring in its mouth. When pressed flat against a wall, ' +
      'floor, or ceiling and the command word is spoken, the item fuses to the surface and creates ' +
      'a functional doorway extending approximately 1 foot into the adjacent space, as if using ' +
      'passwall. Speaking the command word again ends the magical passage, restores the surface ' +
      'to normal, and releases the item. Usable once per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['passwall'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 22,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'passwall',
            spellName: 'Passwall',
            casterLevel: 9,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],

    effects: [
      {
        type: 'special',
        target: 'special.passwall_doorway',
        value: 0,
        source: 'Insistent Doorknocker',
      },
    ],
  },

  // ---- 24. Instant Bridge --------------------------------------------------
  {
    id: 'wondrous-instant-bridge',
    name: 'Instant Bridge',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'none',

    price: 7000,
    weight: 5,

    description:
      'This thin steel plate measures roughly one foot square. On command it rapidly stretches ' +
      'outward and unfolds, becoming a panel 1 inch thick, 3 feet wide, and up to 30 feet long. ' +
      'The bridge stops extending when it meets resistance such as a wall or creature. Each 5-foot ' +
      'segment has hardness 10 and 30 hit points; total extended weight is 300 pounds with a load ' +
      'capacity of 4,000 pounds. Repeating the command word collapses it back to portable form. ' +
      'Usable three times per day. If any portion is destroyed while extended, all magic is ' +
      'immediately lost.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shrink item', 'wall of iron'],
      cost: 3500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 30,
      breakDC: 28,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.deployable_bridge_30ft',
        value: 0,
        source: 'Instant Bridge',
      },
    ],

    charges: { maximum: 3, rechargeMethod: 'daily' },
  },

  // ---- 25. Instant Fortress ------------------------------------------------
  {
    id: 'wondrous-instant-fortress',
    name: 'Instant Fortress',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 13,
    slot: 'none',

    price: 55000,
    weight: 1,

    description:
      'This enchanted metal cube, when thrown down and commanded, expands in 1 round into a metal ' +
      'tower 20 feet square and 30 feet tall with arrow slits and crenellated battlements. The ' +
      'adamantine walls extend 10 feet into the ground, preventing the fortress from being tipped. ' +
      'The tower has one door that opens only to the owner and is immune to knock spells. Anyone ' +
      'caught in the area during expansion takes 10d10 points of damage (Reflex DC 19 half). The ' +
      'walls have hardness 20 and 100 hit points; only wish or miracle restores 50 points of ' +
      'damage at a time. The fortress must be empty to be returned to cube form via a second ' +
      'command word.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["mage's magnificent mansion"],
      cost: 27500,
    },
    physicalStats: {
      hardness: 20,
      hitPoints: 100,
      breakDC: 40,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.deployable_adamantine_fortress',
        value: 0,
        source: 'Instant Fortress',
      },
      {
        type: 'damage',
        target: 'special.expansion_zone',
        value: 100,
        source: 'Instant Fortress',
        condition: {
          type: 'custom',
          params: { descriptor: 'creatures_in_expansion_area', saveType: 'reflex', saveDC: 19 },
          description: 'creatures caught in expansion area; Reflex DC 19 half (10d10)',
        },
      },
    ],
  },
];
