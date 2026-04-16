import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsMP1: WondrousItemDefinition[] = [
  {
    id: 'wondrous-magnates-miter',
    name: "Magnate's Miter",
    category: 'wondrous',
    source: 'Adventurer\'s Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 18,
    slot: 'head',

    price: 90000,
    weight: 1,

    description:
      'An alabaster headdress decorated with ruby lines representing Kersite fashion and Kalistocratic design. ' +
      'The item contains an imbued soul dedicated to supporting followers of the Prophecies of Kalistrade. ' +
      'Once daily as an immediate action, the wearer can allow the internal personality to surface for 1 minute, ' +
      'granting advantage on Intelligence-, Wisdom-, and Charisma-based skill checks (rolling twice and using the ' +
      'higher result). This ability activates even after a skill check is rolled but before results are determined. ' +
      'Additionally, once per day as an immediate action, the wearer gains the benefits of tower of iron will V ' +
      'to block mental effects, usable independently of the first ability.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['divide mind', 'possession', 'tower of iron will V'],
      cost: 45000,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.magnates_miter_skill_advantage',
        value: 0,
        source: "Magnate's Miter",
      },
      {
        type: 'special',
        target: 'special.magnates_miter_tower_iron_will',
        value: 0,
        source: "Magnate's Miter",
      },
    ],
  },
  {
    id: 'wondrous-maidens-helm',
    name: "Maiden's Helm",
    category: 'wondrous',
    source: 'Inner Sea World Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 6,
    slot: 'head',

    price: 3500,
    weight: 3,

    description:
      'This distinctive plate helm with a plume grants the wearer a +5 competence bonus on Intimidate checks. ' +
      'Additionally, the wearer can activate the command spell-like ability three times daily.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cause fear', 'command'],
      cost: 1750,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.intimidate',
        value: 5,
        source: "Maiden's Helm",
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'command',
            spellName: 'Command',
            casterLevel: 6,
            usesPerDay: 3,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },
  {
    id: 'wondrous-maidens-promise',
    name: "Maiden's Promise",
    category: 'wondrous',
    source: 'Adventurer\'s Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'neck',

    price: 500,
    weight: 0,

    description:
      'These paired lockets originated from Castle Korvosa\'s treasury. When worn by two individuals within ' +
      '30 feet of each other, the magic reinforces their mutual loyalty. Each wearer gains a +1 morale bonus ' +
      'on Will saves against effects compromising loyalty to the other. If one becomes helpless, the other ' +
      'receives a +1 morale bonus on attack rolls against threatening creatures. Should one wearer die, the ' +
      'survivor must succeed at a DC 16 Will save or experience crushing despair for 1 minute.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resistance', 'status'],
      cost: 250,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'morale',
        target: 'save.will',
        value: 1,
        source: "Maiden's Promise",
        condition: {
          type: 'custom',
          params: {},
          description: 'vs. effects compromising loyalty to paired wearer',
        },
      },
    ],
  },
  {
    id: 'wondrous-malleable-monument',
    name: 'Malleable Monument',
    category: 'wondrous',
    source: 'Faiths and Philosophies',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 9,
    slot: 'none',

    price: 8000,
    weight: 15,

    description:
      'A faceless humanoid stone statuette that can be imbued with divine energy. When held and activated as a ' +
      'full-round action, it reshapes into the wielder\'s deity\'s image for 24 hours. During this period, ' +
      'followers within 100 feet gain a +2 morale bonus on saves against fear, and can use it as an origin ' +
      'point for channel energy effects. Followers may drive it into the ground and spend 10 minutes praying ' +
      'to cast hallow or unhallow centered on the statue, with effects lasting 24 hours or until destroyed. ' +
      'The statue has hardness 8 and 25 hit points, losing all abilities after the hallow/unhallow use.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['hallow', 'remove fear', 'stone shape', 'unhallow'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 25,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'morale',
        target: 'save.will',
        value: 2,
        source: 'Malleable Monument',
        condition: {
          type: 'custom',
          params: {},
          description: 'vs. fear effects; followers of the deity within 100 feet',
        },
      },
    ],
  },
  {
    id: 'wondrous-malleable-symbol',
    name: 'Malleable Symbol',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 10000,
    weight: 1,

    description:
      'This nondescript metal lump transforms into a masterwork holy symbol after one minute of concentration ' +
      'by a worshipper. When channeling energy through the symbol, the bearer can freely adjust the affected ' +
      'area to a 10-foot burst (within 30 feet), 60-foot line, or 30-foot cone. The item reverts to its base ' +
      'form if separated from its owner for a full day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mass cure light wounds'],
      cost: 5000,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.malleable_symbol_channel_shape',
        value: 0,
        source: 'Malleable Symbol',
      },
    ],
  },
  {
    id: 'wondrous-mallet-of-building',
    name: 'Mallet of Building',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 5000,
    weight: 2,

    description:
      'A builder\'s mallet with a wooden shaft and black iron head that reddens near metal. The wielder can ' +
      'spend a full-round action to create and drive one of the following into a surface: copper nail, iron ' +
      'spike, iron piton, or 4-foot wooden fence post. Created items can penetrate earth, wood, or stone ' +
      'depending on material type. Items function normally until removed, which destroys them. The mallet ' +
      'produces up to 100 items daily.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['minor creation'],
      cost: 2500,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.mallet_of_building_creation',
        value: 0,
        source: 'Mallet of Building',
      },
    ],
  },
  {
    id: 'wondrous-manacles-of-cooperation',
    name: 'Manacles of Cooperation',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 1,
    slot: 'wrists',

    price: 2000,
    weight: 2,

    description:
      'These iron wrist cuffs fit Large or smaller humanoids. When placed on a helpless captive, they make ' +
      'the captive more docile and compliant. The wearer will not attempt escape independently and must ' +
      'succeed at a DC 11 Will save to refuse reasonable requests.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['charm person'],
      cost: 1000,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.manacles_cooperation_docile',
        value: 0,
        source: 'Manacles of Cooperation',
      },
    ],
  },
  {
    id: 'wondrous-manteau-of-the-mouse',
    name: 'Manteau of the Mouse',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'chest',

    price: 12500,
    weight: 5,

    description:
      'This garment is a soft fur vest available in brown, black, and white shades. Larger creatures suffer ' +
      'perception penalties when trying to spot the wearer, with the penalty increasing based on size ' +
      'difference. Additionally, the wearer may use beast shape III once per day to transform into a mouse.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['beast shape III'],
      cost: 6250,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.manteau_mouse_size_stealth',
        value: 0,
        source: 'Manteau of the Mouse',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'beast_shape_iii',
            spellName: 'Beast Shape III',
            casterLevel: 10,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },
  {
    id: 'wondrous-mantis-embrace',
    name: 'Mantis Embrace',
    category: 'wondrous',
    source: 'Adventurer\'s Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 13,
    slot: 'hands',

    price: 50000,
    weight: 1,

    description:
      'These red gloves allow the wearer to perform a special coup de grace attack after successfully pinning ' +
      'an opponent. The attack deals 1d8 slashing damage with a 19-20 critical threat range. If the attack ' +
      'kills the target, the target\'s head erupts in a geyser of blood, preventing life-restoring spells that ' +
      'require an intact body. Survivors gain immunity to further attempts for 24 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['explode head', 'suffocation'],
      cost: 25000,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.mantis_embrace_coup_de_grace',
        value: 0,
        source: 'Mantis Embrace',
      },
    ],
  },
  {
    id: 'wondrous-mantle-of-faith',
    name: 'Mantle of Faith',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 20,
    slot: 'chest',

    price: 76000,
    weight: 0,

    description:
      'This religious garment bears the varied religious icons and favored colors of a specific faith. When ' +
      'donned over regular clothing, it provides the wearer with damage reduction 5/evil.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['stoneskin'],
      cost: 38000,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'resistance',
        target: 'dr',
        value: 5,
        source: 'Mantle of Faith',
        condition: {
          type: 'custom',
          params: { bypass: 'evil' },
          description: 'DR 5/evil',
        },
      },
    ],
  },
  {
    id: 'wondrous-mantle-of-immortality',
    name: 'Mantle of Immortality',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 17,
    slot: 'chest',

    price: 50000,
    weight: 1,

    description:
      'This magical cape with gold trimming negates aging penalties to Strength, Dexterity, and Constitution ' +
      'from middle age onward. Removing it restores penalties and requires a DC 20 Fortitude save or inflicts ' +
      'exhaustion for 24 hours. Redonning the cape eliminates age penalties but does not cure the exhaustion.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater age resistance'],
      cost: 25000,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.mantle_immortality_age_negation',
        value: 0,
        source: 'Mantle of Immortality',
      },
    ],
  },
  {
    id: 'wondrous-mantle-of-life',
    name: 'Mantle of Life',
    category: 'wondrous',
    source: 'Horror Adventures',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 10,
    slot: 'shoulders',

    price: 48000,
    weight: 4,

    description:
      'This shoulder cape provides protection against undead energy drain. The wearer becomes immune to ' +
      'energy drain attacks from undead creatures while still experiencing other effects. Additionally, ' +
      'corpses wearing this item cannot be raised as undead through any means, though previously undead ' +
      'creatures may still use rejuvenation abilities.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['death ward'],
      cost: 24000,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'immunity',
        target: 'special.energy_drain_undead',
        value: 0,
        source: 'Mantle of Life',
        condition: {
          type: 'target_type',
          params: { creatureType: 'undead' },
          description: 'immune to energy drain from undead',
        },
      },
    ],
  },
  {
    id: 'wondrous-mantle-of-spell-resistance',
    name: 'Mantle of Spell Resistance',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 9,
    slot: 'chest',

    price: 90000,
    weight: 0,

    description:
      'This light mantle features assorted arcane markings. When worn over standard clothing or armor, the ' +
      'wearer gains spell resistance 21.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['spell resistance'],
      cost: 45000,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'resistance',
        target: 'sr',
        value: 21,
        source: 'Mantle of Spell Resistance',
      },
    ],
  },
  {
    id: 'wondrous-mantle-of-spores',
    name: 'Mantle of Spores',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 13400,
    weight: 1,

    description:
      'This shoulder mantle provides disease protection and an offensive spore ability. The wearer gains a +4 ' +
      'resistance bonus on saving throws against disease. Once daily, they can deploy spores as a swift action, ' +
      'inflicting 1d6 points of damage to adjacent creatures, followed by 1d3 points of damage per round for ' +
      '3 rounds as mold develops. The effect qualifies as a disease and can be cured via DC 15 Heal checks or ' +
      'disease-removal effects.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['contagion'],
      cost: 6700,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.fortitude',
        value: 4,
        source: 'Mantle of Spores',
        condition: { type: 'custom', params: {}, description: 'vs. disease' },
      },
      {
        type: 'damage',
        target: 'special.mantle_spores_attack',
        value: 0,
        source: 'Mantle of Spores',
      },
    ],
  },
  {
    id: 'wondrous-mantle-of-the-crusader-host',
    name: 'Mantle of the Crusader Host',
    category: 'wondrous',
    source: 'Pathfinder Society Field Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 20,
    slot: 'chest',

    price: 95000,
    weight: 0,

    description:
      'This holy shroud provides damage reduction 5/evil to its wearer. When facing demons, the reduction ' +
      'improves to 5/—. Paladins gain 5/— protection specifically against targets of their smite ability.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['stoneskin'],
      cost: 47500,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'resistance',
        target: 'dr',
        value: 5,
        source: 'Mantle of the Crusader Host',
        condition: {
          type: 'custom',
          params: { bypass: 'evil' },
          description: 'DR 5/evil; improves to DR 5/— vs. demons or smite targets (paladin)',
        },
      },
    ],
  },
  {
    id: 'wondrous-mantle-of-the-darkest-night',
    name: 'Mantle of the Darkest Night',
    category: 'wondrous',
    source: 'Villain Codex',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 6000,
    weight: 0,

    description:
      'This magical cloak transforms into a sphere of magical darkness when the wearer takes total defense. ' +
      'The darkness coalesces into a mantle on the wearer\'s shoulders again at the beginning of her next ' +
      'turn unless she immediately uses another total defense action to maintain it. The item provides up ' +
      'to 10 rounds of daily uses. Additionally, the wearer can hurl the mantle as a standard action to ' +
      'create a darkness effect lasting several rounds before the mantle reappears.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['deeper darkness'],
      cost: 3000,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.mantle_darkest_night_darkness',
        value: 0,
        source: 'Mantle of the Darkest Night',
      },
    ],
  },
  {
    id: 'wondrous-mantle-of-the-protector',
    name: 'Mantle of the Protector',
    category: 'wondrous',
    source: 'Melee Tactics Toolbox',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
    ],
    casterLevel: 7,
    slot: 'shoulders',

    price: 12200,
    weight: 10,

    description:
      'A silvery cloak featuring integrated steel pauldrons that fits loosely regardless of wearer. The owner ' +
      'attunes it daily to their armor and shield, then can lend it to an ally. The ally activates it as an ' +
      'immediate action to gain the owner\'s armor and shield bonuses plus special properties for 10 minutes. ' +
      'During this time, the owner\'s gear becomes dormant for 1 minute, forfeiting its benefits.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shield other'],
      cost: 6100,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.mantle_protector_share_armor',
        value: 0,
        source: 'Mantle of the Protector',
      },
    ],
  },
  {
    id: 'wondrous-manual-of-war',
    name: 'Manual of War',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 10,
    slot: 'none',

    price: 7500,
    weight: 2,

    description:
      'A bloodstained leather tome containing martial knowledge across generations. Once daily after one hour ' +
      'of study, a fighter may swap one bonus feat for another combat feat (meeting prerequisites). This change ' +
      'persists for 24 hours, after which time the fighter\'s feats return to normal. The fighter can spend ten ' +
      'minutes studying to end effects early.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['modify memory'],
      cost: 3750,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.manual_of_war_feat_swap',
        value: 0,
        source: 'Manual of War',
      },
    ],
  },
  {
    id: 'wondrous-markers-monocle',
    name: "Marker's Monocle",
    category: 'wondrous',
    source: 'Ultimate Intrigue',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'eyes',

    price: 5600,
    weight: 0,

    description:
      'This magical eyepiece features a convex glass lens set in a solid gold band. The wearer can make three ' +
      'daily Appraise checks against creatures within 60 feet to determine their carried currency and count of ' +
      'valuable items (over 20 gp). Additionally, once per day, the wearer may touch a creature to mark it, ' +
      'enabling up to three nearby allies to track the target for half an hour using scent-like tracking.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['locate object', 'scent trail'],
      cost: 2800,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.markers_monocle_appraise',
        value: 0,
        source: "Marker's Monocle",
      },
    ],
  },
  {
    id: 'wondrous-martyrs-tear',
    name: "Martyr's Tear",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 6,
    slot: 'none',

    price: 6000,
    weight: 0,

    description:
      'This rose-tinted gemstone shaped like a teardrop or broken heart contains a crack or chip near its ' +
      'center. Once daily, the bearer transfers 3d6 hit points into the gem via standard action, deepening ' +
      'its color. The gem stores up to 18 hit points maximum. The stored energy can be transferred to any ' +
      'creature as a standard action, healing them for the stored amount and returning the gem to normal coloring.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['vampiric touch'],
      cost: 3000,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.martyrs_tear_hp_storage',
        value: 0,
        source: "Martyr's Tear",
      },
    ],
  },
  {
    id: 'wondrous-marvelous-pigments',
    name: 'Marvelous Pigments',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 15,
    slot: 'none',

    price: 4000,
    weight: 0,

    description:
      'These pigments allow users to create permanent physical objects by painting their two-dimensional ' +
      'forms. Applied with a brush-tipped stick, one pot can create up to 1,000 cubic feet of material. ' +
      'Creating an object requires 10 minutes and a DC 15 Craft (painting) check. Only normal, inanimate ' +
      'objects may be created — no magic items or creatures. Valuable materials appear real but are made of ' +
      'cheap substitutes. Users can craft mundane items worth up to 2,000 gp, including weapons, armor, and food.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['major creation'],
      cost: 2000,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.marvelous_pigments_creation',
        value: 0,
        source: 'Marvelous Pigments',
      },
    ],
  },
  {
    id: 'wondrous-mask-of-a-thousand-tomes',
    name: 'Mask of a Thousand Tomes',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'head',

    price: 10000,
    weight: 1,

    description:
      'A parchment-colored eyeless mask with random snippets of script written across its surface that hint ' +
      'at the knowledge of the many tomes stored within. The mask grants its wearer a +10 competence bonus ' +
      'on all Knowledge skill checks, but the wearer is blinded while wearing the mask. The mask must be ' +
      'worn for 10 minutes before the wearer gains its bonus.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['clairaudience/clairvoyance'],
      cost: 5000,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.knowledge',
        value: 10,
        source: 'Mask of a Thousand Tomes',
      },
      {
        type: 'penalty',
        target: 'special.blinded',
        value: 0,
        source: 'Mask of a Thousand Tomes',
      },
    ],
  },
  {
    id: 'wondrous-mask-of-anonymous-mien',
    name: 'Mask of Anonymous Mien',
    category: 'wondrous',
    source: "Spymaster's Handbook",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'head',

    price: 25000,
    weight: 1,

    description:
      'This white disk mask allows the wearer to meditate for 1 minute to assume a faceless identity, ' +
      'becoming an utterly generic and unremarkable member of the wearer\'s race and gender. Knowledge ' +
      'checks about this identity don\'t reveal true identity details unless publicly known. Scrying ' +
      'attempts only work if targeting the faceless identity specifically, otherwise returning darkness. ' +
      'Multiple masks of anonymous mien create the same faceless appearance. Vigilantes may treat the ' +
      'faceless identity as a separate vigilante identity for class abilities.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['alter self', 'nondetection'],
      cost: 12500,
    },
    physicalStats: { hardness: 0, hitPoints: 1, breakDC: 10 },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.mask_anonymous_mien_identity',
        value: 0,
        source: 'Mask of Anonymous Mien',
      },
    ],
  },
];
