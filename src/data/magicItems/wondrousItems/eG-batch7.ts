import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsEG7: WondrousItemDefinition[] = [
  // ---- 151: Gloves of Elvenkind -----------------------------------------------
  {
    id: 'wondrous-gloves-of-elvenkind',
    name: 'Gloves of Elvenkind',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'hands',

    price: 7500,
    weight: 0,

    description:
      'These plain gray leather gloves provide a +5 competence bonus on Spellcraft checks and on ' +
      'concentration checks made to cast a spell defensively. Both gloves must be worn for the magic ' +
      'to function.',

    construction: {
      feats: ['Craft Wondrous Item', 'Combat Casting'],
      spells: [],
      specialRequirements: ['Creator must be an elf'],
      cost: 3500,
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
        target: 'skill.spellcraft',
        value: 5,
        source: 'Gloves of Elvenkind',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'spell.concentration',
        value: 5,
        source: 'Gloves of Elvenkind',
        condition: {
          type: 'custom',
          params: { trigger: 'cast_defensively' },
          description: 'concentration checks to cast defensively only',
        },
      },
    ],
  },

  // ---- 152: Gloves of Feasting -------------------------------------------------
  {
    id: 'wondrous-gloves-of-feasting',
    name: 'Gloves of Feasting',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'hands',

    price: 8400,
    weight: 1,

    description:
      "Each of these leather gloves has a large, ragged hole in the palm. Upon donning them the wearer " +
      "experiences a round of nausea as their palms tear open to reveal mouths complete with fangs, lips, " +
      "and tongues. When the wearer's hands are unoccupied, they can breathe, eat, drink, and speak " +
      "through the hand-mouths. The wearer gains a +2 enhancement bonus on grapple combat maneuver " +
      "checks. When beginning a turn while grappling, the wearer gains a free bite attack using the " +
      "hand-mouths as natural weapons dealing 1d4 + Strength modifier damage (Medium) or " +
      "1d3 + Strength modifier (Small). The mouths remain closed while the wearer holds items.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['polymorph'],
      cost: 4200,
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
        target: 'cmb',
        value: 2,
        source: 'Gloves of Feasting',
        condition: {
          type: 'custom',
          params: { maneuver: 'grapple' },
          description: 'grapple combat maneuver checks only',
        },
      },
      {
        type: 'special',
        target: 'special.gloves_of_feasting_bite',
        value: 0,
        source: 'Gloves of Feasting',
      },
    ],
  },

  // ---- 153: Gloves of Improvised Might -----------------------------------------
  // Five variants (+1 through +5); counted as one item toward batch limit.
  {
    id: 'wondrous-gloves-of-improvised-might-1',
    name: 'Gloves of Improvised Might +1',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'hands',

    price: 4000,
    weight: 1,

    description:
      'These leather gloves provide a +1 enhancement bonus on attack rolls and damage rolls when wielding ' +
      'improvised weapons. They can also grant melee weapon special abilities applicable to melee or thrown ' +
      'weapons; the total modified bonus cannot exceed +5. The wearer still incurs standard nonproficiency ' +
      'penalties unless possessing feats such as Catch Off-Guard.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater magic weapon'],
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
        bonusType: 'enhancement',
        target: 'attack.melee',
        value: 1,
        source: 'Gloves of Improvised Might +1',
        condition: {
          type: 'weapon_type',
          params: { weaponType: 'improvised' },
          description: 'improvised weapons only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'damage.melee',
        value: 1,
        source: 'Gloves of Improvised Might +1',
        condition: {
          type: 'weapon_type',
          params: { weaponType: 'improvised' },
          description: 'improvised weapons only',
        },
      },
    ],
  },

  {
    id: 'wondrous-gloves-of-improvised-might-2',
    name: 'Gloves of Improvised Might +2',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'hands',

    price: 16000,
    weight: 1,

    description:
      'These leather gloves provide a +2 enhancement bonus on attack rolls and damage rolls when wielding ' +
      'improvised weapons.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater magic weapon'],
      cost: 8000,
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
        target: 'attack.melee',
        value: 2,
        source: 'Gloves of Improvised Might +2',
        condition: {
          type: 'weapon_type',
          params: { weaponType: 'improvised' },
          description: 'improvised weapons only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'damage.melee',
        value: 2,
        source: 'Gloves of Improvised Might +2',
        condition: {
          type: 'weapon_type',
          params: { weaponType: 'improvised' },
          description: 'improvised weapons only',
        },
      },
    ],
  },

  {
    id: 'wondrous-gloves-of-improvised-might-3',
    name: 'Gloves of Improvised Might +3',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'hands',

    price: 36000,
    weight: 1,

    description:
      'These leather gloves provide a +3 enhancement bonus on attack rolls and damage rolls when wielding ' +
      'improvised weapons.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater magic weapon'],
      cost: 18000,
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
        target: 'attack.melee',
        value: 3,
        source: 'Gloves of Improvised Might +3',
        condition: {
          type: 'weapon_type',
          params: { weaponType: 'improvised' },
          description: 'improvised weapons only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'damage.melee',
        value: 3,
        source: 'Gloves of Improvised Might +3',
        condition: {
          type: 'weapon_type',
          params: { weaponType: 'improvised' },
          description: 'improvised weapons only',
        },
      },
    ],
  },

  {
    id: 'wondrous-gloves-of-improvised-might-4',
    name: 'Gloves of Improvised Might +4',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'hands',

    price: 64000,
    weight: 1,

    description:
      'These leather gloves provide a +4 enhancement bonus on attack rolls and damage rolls when wielding ' +
      'improvised weapons.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater magic weapon'],
      cost: 32000,
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
        target: 'attack.melee',
        value: 4,
        source: 'Gloves of Improvised Might +4',
        condition: {
          type: 'weapon_type',
          params: { weaponType: 'improvised' },
          description: 'improvised weapons only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'damage.melee',
        value: 4,
        source: 'Gloves of Improvised Might +4',
        condition: {
          type: 'weapon_type',
          params: { weaponType: 'improvised' },
          description: 'improvised weapons only',
        },
      },
    ],
  },

  {
    id: 'wondrous-gloves-of-improvised-might-5',
    name: 'Gloves of Improvised Might +5',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'hands',

    price: 100000,
    weight: 1,

    description:
      'These leather gloves provide a +5 enhancement bonus on attack rolls and damage rolls when wielding ' +
      'improvised weapons.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater magic weapon'],
      cost: 50000,
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
        target: 'attack.melee',
        value: 5,
        source: 'Gloves of Improvised Might +5',
        condition: {
          type: 'weapon_type',
          params: { weaponType: 'improvised' },
          description: 'improvised weapons only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'damage.melee',
        value: 5,
        source: 'Gloves of Improvised Might +5',
        condition: {
          type: 'weapon_type',
          params: { weaponType: 'improvised' },
          description: 'improvised weapons only',
        },
      },
    ],
  },

  // ---- 154: Gloves of Larceny --------------------------------------------------
  {
    id: 'wondrous-gloves-of-larceny',
    name: 'Gloves of Larceny',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'hands',

    price: 2500,
    weight: 1,

    description:
      'These beige calfskin gloves grant the wearer a +5 competence bonus on Sleight of Hand checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must have 5 ranks in Sleight of Hand'],
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
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.sleight_of_hand',
        value: 5,
        source: 'Gloves of Larceny',
      },
    ],
  },

  // ---- 155: Gloves of Marking --------------------------------------------------
  {
    id: 'wondrous-gloves-of-marking',
    name: 'Gloves of Marking',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY },
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 4,
    slot: 'hands',

    price: 7200,
    weight: 1,

    description:
      'These leather gloves allow a wielder using a finesse-compatible piercing or slashing weapon to ' +
      'inscribe a mark upon a foe when landing a critical hit rather than dealing bonus damage. The mark ' +
      'consists of a simple symbol, such as a single letter. The wielder and allies gain a +2 morale bonus ' +
      'on attack rolls and melee damage rolls against the marked creature for 1 minute. The marked creature ' +
      'must succeed at a Will save (DC 10 + half the wielder\'s level + Dexterity modifier) or become ' +
      'shaken for 1 minute. Both bonuses and the shaken condition persist even if the damage is healed.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cause fear', 'heroism'],
      cost: 3600,
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
        target: 'special.gloves_of_marking',
        value: 0,
        source: 'Gloves of Marking',
      },
    ],
  },

  // ---- 156: Gloves of Pulverizing Disruption -----------------------------------
  {
    id: 'wondrous-gloves-of-pulverizing-disruption',
    name: 'Gloves of Pulverizing Disruption',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'hands',

    price: 9400,
    weight: 0,

    description:
      'These thick leather gloves grant the wearer three daily uses of a melee touch attack that targets ' +
      'undead creatures, constructs, or non-magical objects, dealing 3d4 damage. The gloves absorb matter ' +
      'from struck targets, creating dust stored for 24 hours. This dust provides a +2 bonus to the ' +
      "wearer's next dirty trick combat maneuver check attempted within that period. Unused dust " +
      'dissipates after 24 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['corrosive touch'],
      cost: 4700,
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
        target: 'special.gloves_of_pulverizing_disruption_attack',
        value: 0,
        source: 'Gloves of Pulverizing Disruption',
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'cmb',
        value: 2,
        source: 'Gloves of Pulverizing Disruption',
        condition: {
          type: 'custom',
          params: { maneuver: 'dirty_trick', trigger: 'dust_charge' },
          description: 'next dirty trick maneuver check within 24 hours after hitting with the gloves',
        },
      },
    ],

    charges: { maximum: 3, rechargeMethod: 'daily' },
  },

  // ---- 157: Gloves of Reconnaissance ------------------------------------------
  {
    id: 'wondrous-gloves-of-reconnaissance',
    name: 'Gloves of Reconnaissance',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'hands',

    price: 2000,
    weight: 0,

    description:
      'These fingerless leather gloves show signs of heavy use. On command, the wearer can see and hear ' +
      'through solid material no more than 5 feet thick by placing both hands on that material. The ability ' +
      'functions once per day for up to 1 minute. The wearer must wear the gloves continuously for 24 hours ' +
      'before the ability can first be activated.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['clairaudience/clairvoyance'],
      cost: 1000,
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
        target: 'special.gloves_of_reconnaissance_sight',
        value: 0,
        source: 'Gloves of Reconnaissance',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'clairaudience_clairvoyance',
            spellName: 'Clairaudience/Clairvoyance (through adjacent surface)',
            casterLevel: 3,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 158: Gloves of Restrained Death ----------------------------------------
  {
    id: 'wondrous-gloves-of-restrained-death',
    name: 'Gloves of Restrained Death',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'hands',

    price: 9250,
    weight: 2,

    description:
      'Supple black leather gloves featuring white stitching and four small sapphires (two per thumb) ' +
      'that pulse softly when worn. The wearer gains a +2 competence bonus on Stealth checks. When ' +
      'poisoned, the wearer can tap one or more sapphires as a free action to reduce the poison frequency ' +
      'by 1 increment per gem tapped (minimum 1 increment). Each tapped sapphire becomes inert for 24 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['restoration', 'neutralize poison'],
      cost: 4625,
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
        value: 2,
        source: 'Gloves of Restrained Death',
      },
      {
        type: 'special',
        target: 'special.gloves_of_restrained_death_poison',
        value: 0,
        source: 'Gloves of Restrained Death',
      },
    ],
  },

  // ---- 159: Gloves of Shaping --------------------------------------------------
  {
    id: 'wondrous-gloves-of-shaping',
    name: 'Gloves of Shaping',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'hands',

    price: 10000,
    weight: 0,

    description:
      'These soft leather gloves are constantly encrusted with clay between the fingers and allow the ' +
      'reshaping of otherwise durable materials. The wearer can shape materials with hardness 8 or lower ' +
      '(such as stone, wood, and leather) as if they were soft clay; crude shapes take roughly 1 cubic ' +
      'foot per round while detailed work requires additional time and Craft checks. Materials with ' +
      'hardness above 8 are treated as having half their normal hardness for purposes of damaging or ' +
      'reshaping them. The gloves function only when the wearer intentionally shapes materials with their ' +
      'hands or handheld tools.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['soften earth and stone', 'stone shape', 'transmute rock to mud'],
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
        target: 'special.gloves_of_shaping',
        value: 0,
        source: 'Gloves of Shaping',
      },
    ],
  },

  // ---- 160: Gloves of Stolen Unlife --------------------------------------------
  {
    id: 'wondrous-gloves-of-stolen-unlife',
    name: 'Gloves of Stolen Unlife',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 3,
    slot: 'hands',

    price: 3040,
    weight: 1,

    description:
      'Pale gray gauntlets set with black onyx cabochons that shift to white when activated. Three times ' +
      'per day as a swift action, after successfully targeting an undead creature with an offensive ' +
      'single-target spell, the wearer gains temporary hit points equal to 10 + the Hit Dice of the ' +
      'affected undead (maximum +10), lasting for a number of minutes equal to the spell\'s level. ' +
      'The effect ends if either glove is removed.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['false life'],
      cost: 1520,
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
        target: 'special.gloves_of_stolen_unlife_temp_hp',
        value: 0,
        source: 'Gloves of Stolen Unlife',
      },
    ],

    charges: { maximum: 3, rechargeMethod: 'daily' },
  },

  // ---- 161: Gloves of Swimming and Climbing ------------------------------------
  {
    id: 'wondrous-gloves-of-swimming-and-climbing',
    name: 'Gloves of Swimming and Climbing',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'hands',

    price: 6250,
    weight: 0,

    description:
      "These lightweight gloves grant the wearer a +5 competence bonus on Swim checks and Climb checks. " +
      "Both gloves must be worn simultaneously for the magic to function.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bull's strength", "cat's grace"],
      cost: 3125,
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
        target: 'skill.swim',
        value: 5,
        source: 'Gloves of Swimming and Climbing',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.climb',
        value: 5,
        source: 'Gloves of Swimming and Climbing',
      },
    ],
  },

  // ---- 162: Gloves of the Commanding Conjurer ---------------------------------
  {
    id: 'wondrous-gloves-of-the-commanding-conjurer',
    name: 'Gloves of the Commanding Conjurer',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 7,
    slot: 'hands',

    price: 30000,
    weight: 0,

    description:
      'Creatures conjured by the wearer can understand the wearer as if they shared a common language, ' +
      'though the communication is one-way. Three times per day, the wearer may attempt to control ' +
      'summoned creatures within 50 feet as if using control summoned creature (Will DC 16).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['comprehend languages', 'control summoned creature'],
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
        target: 'special.gloves_commanding_conjurer_language',
        value: 0,
        source: 'Gloves of the Commanding Conjurer',
      },
      {
        type: 'special',
        target: 'special.gloves_commanding_conjurer_control',
        value: 0,
        source: 'Gloves of the Commanding Conjurer',
      },
    ],

    charges: { maximum: 3, rechargeMethod: 'daily' },
  },

  // ---- 163: Gloves of the Keen Evaluator --------------------------------------
  {
    id: 'wondrous-gloves-of-the-keen-evaluator',
    name: "Gloves of the Keen Evaluator",
    category: 'wondrous',
    source: "Merchant's Manifest",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'hands',

    price: 1200,
    weight: 0,

    description:
      "White latex gloves designed to provide grip when examining detailed items. The wearer receives a " +
      "+4 competence bonus on Appraise checks to determine the value of an item. Additionally, during " +
      "price negotiations for an item the wearer has studied, she may apply her Appraise check result as " +
      "a Diplomacy result when haggling.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["eagle's splendor", 'investigative mind'],
      cost: 600,
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
        target: 'skill.appraise',
        value: 4,
        source: "Gloves of the Keen Evaluator",
      },
      {
        type: 'special',
        target: 'special.gloves_keen_evaluator_haggle',
        value: 0,
        source: "Gloves of the Keen Evaluator",
      },
    ],
  },

  // ---- 164: Gloves of the Shortened Path --------------------------------------
  {
    id: 'wondrous-gloves-of-the-shortened-path',
    name: 'Gloves of the Shortened Path',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'hands',

    price: 27000,
    weight: 0,

    description:
      'These oxblood leather gloves allow the wearer to bend space to extend her reach to a non-adjacent ' +
      'square within line of sight once per day for 10 rounds. During this time the wearer can touch, ' +
      'attack, and manipulate objects in the targeted square as if adjacent. Her arms and hands appear in ' +
      'that square, allowing creatures there to target her. She cannot transfer items between squares, ' +
      'provide flanking, grapple, make ranged attacks, or perform movement-based maneuvers from the ' +
      'distant square. The distant square becomes part of her threatened area. Creatures threatening her ' +
      'actual square automatically flank her. The effect is blocked by teleportation-restricting effects ' +
      'such as dimensional anchor. The wearer can change the targeted square as a swift action.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['teleport'],
      cost: 8000,
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
        target: 'special.gloves_shortened_path',
        value: 0,
        source: 'Gloves of the Shortened Path',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'teleport_reach_extension',
            spellName: 'Extended Reach (Shortened Path)',
            casterLevel: 9,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 165: Gloves of Unfolding Wind ------------------------------------------
  {
    id: 'wondrous-gloves-of-unfolding-wind',
    name: 'Gloves of Unfolding Wind',
    category: 'wondrous',
    source: "Adventurer's Guide",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'hands',

    price: 10000,
    weight: 1,

    description:
      'These white fingerless gloves are decorated with a spiral on the back of the hand. The wearer is ' +
      'treated as one size larger for resolving high wind effects, and thrown weapons wielded by the ' +
      'wearer are treated as siege weapons for purposes of wind effects. By expending 1 ki point, the ' +
      'wearer can create a gust of wind effect.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['gust of wind'],
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
        target: 'special.gloves_unfolding_wind_size_vs_wind',
        value: 0,
        source: 'Gloves of Unfolding Wind',
      },
      {
        type: 'special',
        target: 'special.gloves_unfolding_wind_gust',
        value: 0,
        source: 'Gloves of Unfolding Wind',
      },
    ],
  },

  // ---- 166: Gloves, Apprentice's Cheating --------------------------------------
  {
    id: "wondrous-gloves-apprentices-cheating",
    name: "Gloves, Apprentice's Cheating",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'hands',

    price: 2200,
    weight: 0,

    description:
      "These white gloves enable the wearer to employ mage hand and prestidigitation at will.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mage hand', 'prestidigitation'],
      cost: 1100,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'mage_hand',
            spellName: 'Mage Hand',
            casterLevel: 3,
            usesPerDay: 0,
            activationAction: 'standard',
          },
          {
            spellId: 'prestidigitation',
            spellName: 'Prestidigitation',
            casterLevel: 3,
            usesPerDay: 0,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 167: Gloves, Aristocrat's -----------------------------------------------
  // NOT FOUND: Gloves, Aristocrat's

  // ---- 168: Gloves, Assisting --------------------------------------------------
  {
    id: 'wondrous-gloves-assisting',
    name: 'Gloves, Assisting',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'hands',

    price: 180,
    weight: 1,

    description:
      'These gloves enable the wearer to summon a glowing disembodied hand via a command word. As a ' +
      'swift action, the wearer can direct the hand to assist with a task as if using the aid another ' +
      'action. The hand applies the wearer\'s base attack bonus or skill ranks for its checks but not ' +
      'ability modifiers or other bonuses. The hand persists until it has attempted one action or 1 minute ' +
      'elapses, after which the gloves lose their magical properties.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mage hand', 'unseen servant'],
      cost: 90,
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
        target: 'special.gloves_assisting_aid_another',
        value: 0,
        source: 'Gloves, Assisting',
      },
    ],
  },

  // ---- 169: Gloves, Challenger's -----------------------------------------------
  {
    id: "wondrous-gloves-challengers",
    name: "Gloves, Challenger's",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 1,
    slot: 'hands',

    price: 2200,
    weight: 0,

    description:
      "These velvet gloves enable single combat advantage. When the wearer removes one glove and uses it " +
      "to make a melee or ranged touch attack against an opponent, the wearer gains a +1 morale bonus on " +
      "attack rolls against that target and the target gains a -1 penalty on attack rolls against the " +
      "wearer. These effects persist for 1 minute but end immediately if anyone other than the wearer " +
      "attacks the challenged opponent. Both gloves must be worn by the same creature.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bane', 'bless'],
      cost: 1100,
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
        bonusType: 'morale',
        target: 'attack.all',
        value: 1,
        source: "Gloves, Challenger's",
        condition: {
          type: 'target_type',
          params: { trigger: 'challenged_target' },
          description: 'against the challenged target only',
        },
      },
      {
        type: 'penalty',
        bonusType: 'untyped',
        target: 'attack.all',
        value: -1,
        source: "Gloves, Challenger's",
        condition: {
          type: 'custom',
          params: { trigger: 'challenged_target_penalty' },
          description: 'penalty on challenged target\'s attacks against the wearer',
        },
      },
    ],
  },

  // ---- 170: Gloves, Deliquescent -----------------------------------------------
  {
    id: 'wondrous-gloves-deliquescent',
    name: 'Gloves, Deliquescent',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'hands',

    price: 8000,
    weight: 1,

    description:
      'Heavy leather gloves that ripple and flow at the wearer\'s command, reshaping to fit any hand, ' +
      'claw, tentacle, or alien limb. Melee touch attacks with the gloved hand deal 1d6 acid damage. ' +
      'Weapons or unarmed and natural attacks gain the corrosive special ability. The gloved hand is ' +
      'protected from ooze acid, allowing safe contact with oozes. Unarmed strikes and natural attacks ' +
      'against oozes never cause them to split.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['acid arrow', 'summon monster V'],
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
        type: 'damage',
        bonusType: 'untyped',
        target: 'damage.melee',
        value: '1d6',
        source: 'Gloves, Deliquescent',
        condition: {
          type: 'custom',
          params: { damageType: 'acid', attackType: 'touch' },
          description: 'melee touch attacks with the gloved hand deal acid damage',
        },
      },
      {
        type: 'special',
        target: 'special.gloves_deliquescent_corrosive',
        value: 0,
        source: 'Gloves, Deliquescent',
      },
      {
        type: 'special',
        target: 'special.gloves_deliquescent_ooze_protection',
        value: 0,
        source: 'Gloves, Deliquescent',
      },
    ],
  },

  // ---- 171: Gloves, Demonic Smith's --------------------------------------------
  {
    id: "wondrous-gloves-demonic-smiths",
    name: "Gloves, Demonic Smith's",
    category: 'wondrous',
    source: 'Inner Sea Combat',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 9,
    slot: 'hands',

    price: 8000,
    weight: 1,

    description:
      "Black leather gloves featuring red stitching honoring Flauros, a demon lord of fire. Melee touch " +
      "attacks with the gloved hands deal 1d6 fire damage, and any weapon held or unarmed strike gains " +
      "the flaming weapon special ability. During crafting, the gloves provide a +4 competence bonus on " +
      "relevant Craft checks for armor and weapons. However, rolling a natural 1 on such a Craft check " +
      "causes the gloves to become nonmagical until the wearer crafts and destroys five masterwork items " +
      "as an offering.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fabricate', 'fireball'],
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
        type: 'damage',
        bonusType: 'untyped',
        target: 'damage.melee',
        value: '1d6',
        source: "Gloves, Demonic Smith's",
        condition: {
          type: 'custom',
          params: { damageType: 'fire', attackType: 'touch' },
          description: 'melee touch attacks with the gloved hands deal fire damage',
        },
      },
      {
        type: 'special',
        target: 'special.gloves_demonic_smiths_flaming',
        value: 0,
        source: "Gloves, Demonic Smith's",
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 4,
        source: "Gloves, Demonic Smith's",
        condition: {
          type: 'custom',
          params: { craftType: 'armor_or_weapons' },
          description: 'Craft checks for armor and weapons only',
        },
      },
    ],
  },

  // ---- 172: Gloves, Fervent Searcher's -----------------------------------------
  {
    id: "wondrous-gloves-fervent-searchers",
    name: "Gloves, Fervent Searcher's",
    category: 'wondrous',
    source: "Merchant's Manifest",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'hands',

    price: 7400,
    weight: 0,

    description:
      'Dark blue silken fingerless gloves. Twice per day as a move action, the wearer can touch a solid ' +
      'surface and speak the command word to visibly reveal all footprints within 20 feet. This action ' +
      'grants a +5 bonus on Survival checks to track those footprints.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['residual tracking'],
      cost: 3700,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'move',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'skill.survival',
        value: 5,
        source: "Gloves, Fervent Searcher's",
        condition: {
          type: 'custom',
          params: { trigger: 'tracking_revealed_footprints' },
          description: 'tracking revealed footprints only',
        },
      },
      {
        type: 'special',
        target: 'special.gloves_fervent_searchers_reveal_tracks',
        value: 0,
        source: "Gloves, Fervent Searcher's",
      },
    ],

    charges: { maximum: 2, rechargeMethod: 'daily' },
  },

  // ---- 173: Gloves, First Aid --------------------------------------------------
  {
    id: 'wondrous-gloves-first-aid',
    name: 'Gloves, First Aid',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'hands',

    price: 4500,
    weight: 1,

    description:
      'White fingerless cloth gloves decorated with ten sapphires (one at the base of each exposed ' +
      'finger). The wearer can cast healing spells by permanently expending sapphires equal to each ' +
      "spell's level: cure light wounds (1), cure moderate wounds (2), cure serious wounds (3), " +
      'cure critical wounds (4), breath of life (5), or mass cure light wounds (5). Only a full ' +
      "hand's worth of gems may be expended per casting; both gloves must be worn. Once all sapphires " +
      'are expended the gloves become non-magical.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [
        'breath of life',
        'cure critical wounds',
        'cure light wounds',
        'cure moderate wounds',
        'cure serious wounds',
        'mass cure light wounds',
      ],
      cost: 2250,
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
        target: 'special.gloves_first_aid_healing',
        value: 0,
        source: 'Gloves, First Aid',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'cure_light_wounds',
            spellName: 'Cure Light Wounds',
            casterLevel: 9,
            activationAction: 'standard',
          },
          {
            spellId: 'cure_moderate_wounds',
            spellName: 'Cure Moderate Wounds',
            casterLevel: 9,
            activationAction: 'standard',
          },
          {
            spellId: 'cure_serious_wounds',
            spellName: 'Cure Serious Wounds',
            casterLevel: 9,
            activationAction: 'standard',
          },
          {
            spellId: 'cure_critical_wounds',
            spellName: 'Cure Critical Wounds',
            casterLevel: 9,
            activationAction: 'standard',
          },
          {
            spellId: 'breath_of_life',
            spellName: 'Breath of Life',
            casterLevel: 9,
            activationAction: 'standard',
          },
          {
            spellId: 'mass_cure_light_wounds',
            spellName: 'Mass Cure Light Wounds',
            casterLevel: 9,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 174: Gloves, Ghostvision ------------------------------------------------
  {
    id: 'wondrous-gloves-ghostvision',
    name: 'Gloves, Ghostvision',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION },
    ],
    casterLevel: 5,
    slot: 'hands',

    price: 4000,
    weight: 0,

    description:
      'Pale gray silk gloves with embroidered silver eyes on the back. When activated as a standard ' +
      'action, the wearer experiences deep pools of swirling gray mist over their eyes for 10 rounds ' +
      'once per day. During this time the wearer perceives all undead within 60 feet including ethereal ' +
      'and incorporeal creatures hidden in objects or walls up to 5 feet deep. Wearers with channel ' +
      'positive energy can expend one use to make a ranged touch attack against undead within channel ' +
      'range, rolling d12s instead of d6s for damage. While active, constructs and living opponents ' +
      'treat the wearer as blinded.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect undead', 'searing light'],
      specialRequirements: ['Channel positive energy class ability'],
      cost: 2000,
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
        target: 'special.gloves_ghostvision_detect_undead',
        value: 0,
        source: 'Gloves, Ghostvision',
      },
      {
        type: 'special',
        target: 'special.gloves_ghostvision_channel_boost',
        value: 0,
        source: 'Gloves, Ghostvision',
      },
      {
        type: 'special',
        target: 'special.gloves_ghostvision_blinded_penalty',
        value: 0,
        source: 'Gloves, Ghostvision',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'detect_undead',
            spellName: 'Detect Undead (enhanced — 60 ft., including ethereal)',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 175: Gloves, Glyphbane --------------------------------------------------
  {
    id: 'wondrous-gloves-glyphbane',
    name: 'Gloves, Glyphbane',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 7,
    slot: 'hands',

    price: 9000,
    weight: 0,

    description:
      'Dark-brown leather gloves featuring arcane insignia etched across their surface. The wearer gains ' +
      'a +5 competence bonus on Disable Device checks to disarm magical traps. Once per day, if the ' +
      'disarm check exceeds the DC by 10 or more, the wearer may alter the trap\'s trigger condition ' +
      'instead of disabling it, within the parameters the spell allows.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['find traps', 'dispel magic'],
      cost: 4500,
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
        target: 'skill.disable_device',
        value: 5,
        source: 'Gloves, Glyphbane',
        condition: {
          type: 'custom',
          params: { trapType: 'magical' },
          description: 'Disable Device checks to disarm magical traps only',
        },
      },
      {
        type: 'special',
        target: 'special.gloves_glyphbane_alter_trigger',
        value: 0,
        source: 'Gloves, Glyphbane',
      },
    ],
  },
];
