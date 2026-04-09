import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsEG3: WondrousItemDefinition[] = [
  // ---- 51. Embalming Thread ---------------------------------------------------
  {
    id: 'wondrous-embalming-thread',
    name: 'Embalming Thread',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'none',

    price: 10000,
    weight: 0,

    description:
      'This specialized magical thread enhances undead constructs when sewn into their flesh. ' +
      'Each length requires 1 hour per Hit Die to apply and a DC 20 Heal or Spellcraft check. ' +
      'Flesh golems and standard zombies gain DR 5/adamantine and slashing. Variant zombies ' +
      'without existing DR (such as fast zombies) instead gain DR 5/slashing. Each thimble ' +
      'contains 20 lengths of thread (one length per HD of the target creature). Failed ' +
      'application attempts do not consume materials but require 1 hour per stitch to clean.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['gentle repose', 'stoneskin'],
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
        target: 'special.embalming_thread_dr',
        value: 0,
        source: 'Embalming Thread',
      },
    ],
  },

  // ---- 52. Emblem of Lost Lives -----------------------------------------------
  {
    id: 'wondrous-emblem-of-lost-lives',
    name: 'Emblem of Lost Lives',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'neck',

    price: 12000,
    weight: 0,

    description:
      'This pendant emits a constant discordant chorus of voices audible only to its wearer, ' +
      'channeling knowledge from past lives. The wearer can focus on the voices as a standard ' +
      'action to gain a +2 insight bonus on one Knowledge check for 1 minute, once per day per ' +
      'trained Knowledge skill. Once per day the wearer may also consult the voices for 1 minute ' +
      'to use augury as a spell-like ability.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['augury', "fox's cunning"],
      cost: 6000,
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
        bonusType: 'insight',
        target: 'skill.knowledge_arcana',
        value: 2,
        source: 'Emblem of Lost Lives',
        condition: {
          type: 'custom',
          params: { descriptor: 'once_per_day_per_trained_knowledge_skill' },
          description: 'once per day per trained Knowledge skill, chosen when activated',
        },
      },
      {
        type: 'special',
        target: 'special.emblem_lost_lives_augury',
        value: 0,
        source: 'Emblem of Lost Lives',
      },
    ],

    spellLikeAbilities: [
      {
        usesPerDay: 1,
        spells: [
          {
            spellId: 'augury',
            spellName: 'Augury',
            casterLevel: 3,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 53. Energizing Salve ---------------------------------------------------
  {
    id: 'wondrous-energizing-salve',
    name: 'Energizing Salve',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 3000,
    weight: 1,

    description:
      'This paste temporarily enhances a construct\'s combat performance. Applied as a standard ' +
      'action to a construct, it grants a +2 dodge bonus to AC and a +2 insight bonus on attack ' +
      'rolls, saving throws, and skill checks. The construct also gains one additional attack at ' +
      'its full base attack bonus during full-attack actions. Effects last 5 minutes. The salve ' +
      'can be removed with alcohol-based solutions such as ale or wine.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['haste'],
      cost: 1500,
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
        bonusType: 'dodge',
        target: 'ac',
        value: 2,
        source: 'Energizing Salve',
        condition: {
          type: 'target_type',
          params: { creatureType: 'construct' },
          description: 'applies to construct only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'attack.all',
        value: 2,
        source: 'Energizing Salve',
        condition: {
          type: 'target_type',
          params: { creatureType: 'construct' },
          description: 'applies to construct only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'save.all',
        value: 2,
        source: 'Energizing Salve',
        condition: {
          type: 'target_type',
          params: { creatureType: 'construct' },
          description: 'applies to construct only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'skill.all',
        value: 2,
        source: 'Energizing Salve',
        condition: {
          type: 'target_type',
          params: { creatureType: 'construct' },
          description: 'applies to construct only',
        },
      },
      {
        type: 'special',
        target: 'special.energizing_salve_extra_attack',
        value: 0,
        source: 'Energizing Salve',
      },
    ],
  },

  // ---- 54. Enmity Fetish ------------------------------------------------------
  {
    id: 'wondrous-enmity-fetish',
    name: 'Enmity Fetish',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 40000,
    weight: 1,

    description:
      'This talisman is crafted from teeth, fingers, ears, or other grotesque trophies taken from ' +
      'the freshly dead. It embodies animosity toward a specific creature type from the ranger ' +
      'favored enemy list, determined upon creation. A ranger holding it quietly for 10 minutes ' +
      'can replace one favored enemy with the fetish\'s designated type for 24 hours, maintaining ' +
      'the same bonus value. Once per day, the ranger can activate it as a swift action for a ' +
      '10-minute effect at half the favored enemy bonus against the designated creature type.',

    construction: {
      feats: ['Craft Wondrous Item', 'Instant Enemy'],
      spells: [],
      specialRequirements: ['Creator must possess the favored enemy class feature'],
      cost: 20000,
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
        target: 'special.enmity_fetish_favored_enemy',
        value: 0,
        source: 'Enmity Fetish',
      },
    ],
  },

  // ---- 55. Entangling Aiguillette ---------------------------------------------
  {
    id: 'wondrous-entangling-aiguillette',
    name: 'Entangling Aiguillette',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 2000,
    weight: 1,

    description:
      'A living vine woven into a shoulder-worn aiguillette that responds to melee attacks. Once ' +
      'per day, as an immediate action when the wearer is struck by a melee attack, the vine ' +
      'uncoils to entangle the attacker (Reflex DC 13 negates). The entangled creature cannot ' +
      'move from its current space. It can attempt to break free at the start of its turn (DC ' +
      'increases by 1 per failed save, maximum DC 16) or with a move action and a DC 13 Strength ' +
      'or Escape Artist check. The wearer cannot move while the vine entangles a creature but can ' +
      'release it as a free action.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['entangle'],
      cost: 3000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 12,
    },

    activationCategory: 'use_activated',
    activationAction: 'immediate',

    effects: [
      {
        type: 'special',
        target: 'special.entangling_aiguillette_entangle',
        value: 0,
        source: 'Entangling Aiguillette',
      },
    ],
  },

  // ---- 56. Entwined Syrinx ----------------------------------------------------
  {
    id: 'wondrous-entwined-syrinx',
    name: 'Entwined Syrinx',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION }],
    casterLevel: 7,
    slot: 'none',

    price: 15300,
    weight: 2,

    description:
      'This gilded wind instrument functions as a masterwork musical instrument, providing a +2 ' +
      'bonus on all Perform (wind instrument) checks, and this bonus extends to the DC of bardic ' +
      'performances using the syrinx. When played, the user must succeed at a DC 15 Will save or ' +
      'become compelled to perform a somber dirge that functions as a fascinate bardic performance ' +
      'affecting all creatures within 90 feet who can see and hear the musician, including the ' +
      'player themselves. The performance continues for 1 hour or until interrupted.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['hypnotic pattern'],
      cost: 7150,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'skill.perform',
        value: 2,
        source: 'Entwined Syrinx',
        condition: {
          type: 'custom',
          params: { descriptor: 'wind_instrument' },
          description: 'Perform (wind instrument) checks only',
        },
      },
      {
        type: 'special',
        target: 'special.entwined_syrinx_compulsion',
        value: 0,
        source: 'Entwined Syrinx',
      },
    ],
  },

  // ---- 57. Escape Ladder ------------------------------------------------------
  {
    id: 'wondrous-escape-ladder',
    name: 'Escape Ladder',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'none',

    price: 4000,
    weight: 1,

    description:
      'This 10-foot rope ladder unrolls itself on command, extending upward into the air and ' +
      'magically holding itself in place. Climbing requires a DC 0 check. It can support 300 ' +
      'pounds unsupported or 600 pounds when anchored to a sturdy surface. A second command word ' +
      'causes the ladder to roll itself up. A third command word (usable once per day) creates an ' +
      'extradimensional pocket at the top of the ladder that holds one Medium creature. Upon ' +
      'entering, the space collapses at the end of the creature\'s turn, teleporting them 1d6 x 100 ' +
      'feet away to a safe ground location; the ladder then falls.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate rope', 'dimension door', 'rope trick'],
      cost: 2000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'special',
        target: 'special.escape_ladder_anchor',
        value: 0,
        source: 'Escape Ladder',
      },
      {
        type: 'special',
        target: 'special.escape_ladder_teleport',
        value: 0,
        source: 'Escape Ladder',
      },
    ],
  },

  // ---- 58. Esoteric Diadem (3 variants) ----------------------------------------
  {
    id: 'wondrous-esoteric-diadem-lesser',
    name: 'Esoteric Diadem (Lesser)',
    category: 'wondrous',
    source: 'Occult Adventures',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'headband',

    price: 18000,
    weight: 0,

    description:
      'This metal headband features a diamond-shaped gemstone that grants a kineticist enhanced ' +
      'control over an associated element. A lesser esoteric diadem increases the damage dealt by ' +
      'matching elemental simple and composite blasts by 1d6 (physical blasts use d8s instead of ' +
      'd6s). Extra damage dice from this item do not multiply on critical hits and do not apply to ' +
      'blasts using form infusions that lack an elemental overflow bonus.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be a 10th-level kineticist with access to the appropriate element'],
      cost: 9000,
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
        target: 'special.esoteric_diadem_blast_damage',
        value: 1,
        source: 'Esoteric Diadem (Lesser)',
      },
    ],
  },

  {
    id: 'wondrous-esoteric-diadem',
    name: 'Esoteric Diadem',
    category: 'wondrous',
    source: 'Occult Adventures',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'headband',

    price: 50000,
    weight: 0,

    description:
      'This metal headband features a diamond-shaped gemstone that grants a kineticist enhanced ' +
      'control over an associated element. A standard esoteric diadem increases the damage dealt ' +
      'by matching elemental simple and composite blasts by 2d6 (physical blasts use d8s instead ' +
      'of d6s). Extra damage dice from this item do not multiply on critical hits and do not apply ' +
      'to blasts using form infusions that lack an elemental overflow bonus.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be a 10th-level kineticist with access to the appropriate element'],
      cost: 25000,
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
        target: 'special.esoteric_diadem_blast_damage',
        value: 2,
        source: 'Esoteric Diadem',
      },
    ],
  },

  {
    id: 'wondrous-esoteric-diadem-greater',
    name: 'Esoteric Diadem (Greater)',
    category: 'wondrous',
    source: 'Occult Adventures',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 10,
    slot: 'headband',

    price: 98000,
    weight: 0,

    description:
      'This metal headband features a diamond-shaped gemstone that grants a kineticist enhanced ' +
      'control over an associated element. A greater esoteric diadem increases the damage dealt by ' +
      'matching elemental simple and composite blasts by 3d6 (physical blasts use d8s instead of ' +
      'd6s). Extra damage dice from this item do not multiply on critical hits and do not apply to ' +
      'blasts using form infusions that lack an elemental overflow bonus.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be a 10th-level kineticist with access to the appropriate element'],
      cost: 49000,
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
        target: 'special.esoteric_diadem_blast_damage',
        value: 3,
        source: 'Esoteric Diadem (Greater)',
      },
    ],
  },

  // ---- 59. Evergreen Seed Pouch -----------------------------------------------
  {
    id: 'wondrous-evergreen-seed-pouch',
    name: 'Evergreen Seed Pouch',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 16000,
    weight: 1,

    description:
      'A leather pouch adorned with mistletoe and holly sprigs shaped as a druidic Green Faith ' +
      'symbol, containing various plant seeds. When used as a divine focus for spells that affect ' +
      'plant matter (such as entangle or spike growth), the seeds plant themselves in the ground ' +
      'and instantly grow to create any vegetation required, enabling such spells to be cast in ' +
      'any terrain regardless of environmental conditions. Created plants persist for the spell\'s ' +
      'full duration.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wall of thorns'],
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
        type: 'special',
        target: 'special.evergreen_seed_pouch_terrain',
        value: 0,
        source: 'Evergreen Seed Pouch',
      },
    ],
  },

  // ---- 60. Exorcist Ofuda -----------------------------------------------------
  {
    id: 'wondrous-exorcist-ofuda',
    name: 'Exorcist Ofuda',
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Haunted Heroes Handbook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'none',

    price: 650,
    weight: 0,

    description:
      'A paper slip inscribed with holy writings designed to provide protection against lingering ' +
      'evil forces. The holder gains a +3 bonus on Perception checks to detect when a haunt\'s ' +
      'effects manifest. As a standard action, the holder can activate the ofuda to grant all ' +
      'allies within 30 feet a +2 sacred bonus on saving throws and a +2 deflection bonus to AC ' +
      'against haunt effects for 1 round. Activation destroys the item in a burst of flame.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['protection from evil'],
      cost: 325,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 8,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'skill.perception',
        value: 3,
        source: 'Exorcist Ofuda',
        condition: {
          type: 'custom',
          params: { descriptor: 'haunt_manifestation' },
          description: 'to detect haunt manifestations only',
        },
      },
      {
        type: 'special',
        target: 'special.exorcist_ofuda_haunt_protection',
        value: 0,
        source: 'Exorcist Ofuda',
      },
    ],
  },

  // ---- 61. Exorcist's Aspergillum ---------------------------------------------
  {
    id: "wondrous-exorcists-aspergillum",
    name: "Exorcist's Aspergillum",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 7,
    slot: 'none',

    price: 8000,
    weight: 1,

    description:
      "This silver aspergillum grants an inquisitor the ability to use detect undead as if it " +
      "were one of the spells associated with her detect alignment ability. Once per day, by " +
      "expending one use of her judgment ability, the wielder can cause her spells of 3rd level " +
      "and lower to affect incorporeal creatures as though they possessed the Ectoplasmic Spell " +
      "feat, lasting until the end of combat.",

    construction: {
      feats: ['Craft Wondrous Item', 'Ectoplasmic Spell'],
      spells: ['detect undead'],
      specialRequirements: ['Creator must be an inquisitor'],
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
        target: 'special.exorcists_aspergillum_detect_undead',
        value: 0,
        source: "Exorcist's Aspergillum",
      },
      {
        type: 'special',
        target: 'special.exorcists_aspergillum_ectoplasmic',
        value: 0,
        source: "Exorcist's Aspergillum",
      },
    ],
  },

  // ---- 62. Expedition Pavilion ------------------------------------------------
  {
    id: 'wondrous-expedition-pavilion',
    name: 'Expedition Pavilion',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'none',

    price: 6400,
    weight: 10,

    description:
      'This tent appears to cover only a 10-foot-by-10-foot area, but inside it measures a full ' +
      '30 feet by 30 feet, featuring a central area and three curtained bedrooms. Occupants remain ' +
      'undetectable by creatures outside through sight, sound, or scent. The interior maintains ' +
      '70 degrees Fahrenheit when external conditions range from 0 to 100 degrees; each degree ' +
      'beyond these thresholds changes the interior temperature by 1 degree. The pavilion shields ' +
      'against rain, dust, and sandstorms, and withstands winds below hurricane force. Requires ' +
      '10 minutes to erect or dismantle once daily.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['hide from animals', 'tiny hut'],
      cost: 3200,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.expedition_pavilion_shelter',
        value: 0,
        source: 'Expedition Pavilion',
      },
    ],
  },

  // ---- 63. Expended Lightning Gun ---------------------------------------------
  {
    id: 'wondrous-expended-lightning-gun',
    name: 'Expended Lightning Gun',
    category: 'wondrous',
    source: 'Pathfinder Adventure Path',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 17,
    slot: 'none',

    price: 15000,
    weight: 15,

    description:
      'This device is crafted from a strange metallic alloy with a bellows or tapered accordion ' +
      'structure and controls designed for large creatures, though humanoids can operate it with ' +
      'practice. As a standard action, the wielder makes a ranged touch attack (range 120 feet) ' +
      'that deals 10d12 electricity damage on a hit. The blast ignites combustibles, damages ' +
      'objects, and can melt low-melting-point metals such as lead, gold, copper, silver, and ' +
      'bronze. Limited to four shots before becoming inoperable.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['chain lightning'],
      cost: 7500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 20,
      breakDC: 24,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    charges: { maximum: 4 },

    effects: [
      {
        type: 'damage',
        bonusType: 'untyped',
        target: 'damage.ranged',
        value: '10d12',
        source: 'Expended Lightning Gun',
        condition: {
          type: 'custom',
          params: { descriptor: 'electricity' },
          description: 'electricity damage on ranged touch attack hit',
        },
      },
    ],
  },

  // ---- 64. Explorer's Pith Helmet ---------------------------------------------
  {
    id: "wondrous-explorers-pith-helmet",
    name: "Explorer's Pith Helmet",
    category: 'wondrous',
    source: 'Magical Marketplace',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 1,
    slot: 'head',

    price: 3200,
    weight: 1,

    description:
      "This colonial-style helmet provides jungle protection through multiple magical functions. " +
      "The wearer benefits from a constant endure elements effect (hot weather only) and receives " +
      "a +4 competence bonus on saving throws against swarm distraction abilities. Once per day, " +
      "the wearer can summon an invisible porter that functions as either a floating disk or an " +
      "unseen servant at their discretion.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['endure elements', 'floating disk', 'hide from animals', 'unseen servant'],
      cost: 1600,
    },
    physicalStats: {
      hardness: 2,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.explorers_pith_helmet_endure_elements',
        value: 0,
        source: "Explorer's Pith Helmet",
        condition: {
          type: 'custom',
          params: { descriptor: 'hot_weather' },
          description: 'endure elements vs. hot weather only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'save.all',
        value: 4,
        source: "Explorer's Pith Helmet",
        condition: {
          type: 'custom',
          params: { descriptor: 'swarm_distraction' },
          description: 'against swarm distraction abilities only',
        },
      },
      {
        type: 'special',
        target: 'special.explorers_pith_helmet_porter',
        value: 0,
        source: "Explorer's Pith Helmet",
      },
    ],

    spellLikeAbilities: [
      {
        usesPerDay: 1,
        spells: [
          {
            spellId: 'floating_disk',
            spellName: 'Floating Disk',
            casterLevel: 1,
            activationAction: 'standard',
          },
          {
            spellId: 'unseen_servant',
            spellName: 'Unseen Servant',
            casterLevel: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 65. Explosion Pocket ---------------------------------------------------
  {
    id: 'wondrous-explosion-pocket',
    name: 'Explosion Pocket',
    category: 'wondrous',
    source: "Goblins of Golarion",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 1,
    slot: 'none',

    price: 3000,
    weight: 1,

    description:
      "A ragged green patch that attaches to clothing, creating a functional pocket. Once per day " +
      "as a standard action, while the wearer's hand is in the pocket and the command word is " +
      "spoken, it creates a single vial of alchemist's fire. If a vial of alchemist's fire already " +
      "exists in the pocket when activated, the item instead supercharges that vial to deal double " +
      "normal fire damage. Any created or supercharged vial becomes inert water after 1 minute if " +
      "not used. The pocket can be detached from clothing with a full-round action.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['burning hands'],
      cost: 1500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 8,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.explosion_pocket_alchemists_fire',
        value: 0,
        source: 'Explosion Pocket',
      },
    ],
  },

  // ---- 66. Extraction Scarificator --------------------------------------------
  {
    id: 'wondrous-extraction-scarificator',
    name: 'Extraction Scarificator',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 3,
    slot: 'none',

    price: 2500,
    weight: 1,

    description:
      'This twisted variant of standard bloodletting tools requires a willing or helpless target ' +
      'and deals 1d4 points of damage plus 1d4 bleed when applied to exposed skin. Once per day, ' +
      'the scarificator extracts one of four bodily humors. Extraction completes when the target ' +
      'takes 6 total damage from bleeding, at which point the purified humor functions as a potion ' +
      '(CL 3rd) for 24 hours: black bile becomes a lesser restoration potion, blood becomes a ' +
      'cure moderate wounds potion, phlegm becomes a calm emotions potion, and yellow bile becomes ' +
      'a rage potion.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bleed', 'calm emotions', 'cure moderate wounds', 'lesser restoration', 'rage'],
      cost: 1250,
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
        target: 'special.extraction_scarificator_humor',
        value: 0,
        source: 'Extraction Scarificator',
      },
    ],
  },

  // ---- 67. Eye of Brokerage --------------------------------------------------
  {
    id: 'wondrous-eye-of-brokerage',
    name: 'Eye of Brokerage',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 9,
    slot: 'neck',

    price: 16550,
    weight: 1,

    description:
      'A golden, eye-shaped amulet featuring a diamond centerpiece that enhances negotiation and ' +
      'deal-making abilities. The wearer gains a +5 competence bonus on Appraise checks and on ' +
      'Sense Motive checks to avoid being bluffed. Once per day the wearer can hold the amulet to ' +
      'their eye for up to 7 rounds to determine if up to seven creatures within 40 feet are lying ' +
      '(Will DC 16 negates), functioning as the discern lies spell.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['chaos hammer', "order's wrath"],
      specialRequirements: ['Creator must be neutral'],
      cost: 8275,
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
        target: 'skill.appraise',
        value: 5,
        source: 'Eye of Brokerage',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.sense_motive',
        value: 5,
        source: 'Eye of Brokerage',
        condition: {
          type: 'custom',
          params: { descriptor: 'avoid_being_bluffed' },
          description: 'to avoid being bluffed only',
        },
      },
      {
        type: 'special',
        target: 'special.eye_of_brokerage_discern_lies',
        value: 0,
        source: 'Eye of Brokerage',
      },
    ],

    spellLikeAbilities: [
      {
        usesPerDay: 1,
        spells: [
          {
            spellId: 'discern_lies',
            spellName: 'Discern Lies',
            casterLevel: 9,
            saveDC: 16,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 68. Eye of Crystallized Venom ------------------------------------------
  {
    id: 'wondrous-eye-of-crystallized-venom',
    name: 'Eye of Crystallized Venom',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'neck',

    price: 2250,
    weight: 0,

    description:
      'A leather collar made from calfskin panels with a green gem in a golden setting. The gem ' +
      'glows when poisons or toxins are within 10 feet of the wearer. Once, after the wearer fails ' +
      'a saving throw against poison, they can use a swift action to crush the gem and reroll that ' +
      'save with a +2 competence bonus, accepting the second result. Destroying the gem in this way ' +
      'consumes the item permanently.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect poison', 'delay poison'],
      cost: 1125,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'swift',

    effects: [
      {
        type: 'special',
        target: 'special.eye_of_crystallized_venom_detect',
        value: 0,
        source: 'Eye of Crystallized Venom',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'save.all',
        value: 2,
        source: 'Eye of Crystallized Venom',
        condition: {
          type: 'custom',
          params: { descriptor: 'reroll_poison_save_once' },
          description: 'reroll a failed poison save once (destroys item)',
        },
      },
    ],
  },

  // ---- 69. Eye of the Mantis -------------------------------------------------
  {
    id: 'wondrous-eye-of-the-mantis',
    name: 'Eye of the Mantis',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 9,
    slot: 'none',

    price: 2000,
    weight: 0,

    description:
      "A 1-inch red marble statue resembling a tiny praying mantis. Upon speaking the command " +
      "word, the mantis animates and functions as a sensor eye from a prying eyes spell, operating " +
      "for up to 9 hours before returning to the bearer to display its observations, then reverting " +
      "to statue form for 1 day. If destroyed while animated, it immediately returns to statue form.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['prying eyes'],
      cost: 1000,
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
        target: 'special.eye_of_the_mantis_sensor',
        value: 0,
        source: 'Eye of the Mantis',
      },
    ],
  },

  // ---- 70. Eye of the Void ---------------------------------------------------
  {
    id: 'wondrous-eye-of-the-void',
    name: 'Eye of the Void',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 9,
    slot: 'none',

    price: 10000,
    weight: 1,

    description:
      'This small black glass sphere measuring 3 to 4 inches in diameter reveals a terrifying, ' +
      'multi-pupilled eye when activated via command word. Once per day, the wielder can choose ' +
      'to create either a 30-foot cone or a 15-foot sphere gaze effect. Affected creatures must ' +
      'succeed on a DC 16 Will save or become frightened for 1 minute and take 1d6 Wisdom damage; ' +
      'those who succeed are instead shaken for 1 minute. This is a mind-affecting fear effect.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fear'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'special',
        target: 'special.eye_of_the_void_gaze',
        value: 0,
        source: 'Eye of the Void',
      },
    ],
  },

  // ---- 71. Eye Patch, Mariner's -----------------------------------------------
  {
    id: "wondrous-eye-patch-mariners",
    name: "Eye Patch, Mariner's",
    category: 'wondrous',
    source: "Skull & Shackles Adventure Path",
    isOfficial: true,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION },
    ],
    casterLevel: 5,
    slot: 'eyes',

    price: 12000,
    weight: 0,

    description:
      "This ornamental pirate's eye patch typically features at least one jewel set into leather. " +
      "By speaking the command word as a standard action, the wearer can use each of the following " +
      "abilities once per day: comprehend languages, scorching ray, or see invisibility.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['comprehend languages', 'scorching ray', 'see invisibility'],
      cost: 6000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'comprehend_languages',
            spellName: 'Comprehend Languages',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
          {
            spellId: 'scorching_ray',
            spellName: 'Scorching Ray',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
          {
            spellId: 'see_invisibility',
            spellName: 'See Invisibility',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 72. Eye Patch, Pirate's ------------------------------------------------
  {
    id: "wondrous-eye-patch-pirates",
    name: "Eye Patch, Pirate's",
    category: 'wondrous',
    source: "Skull & Shackles Adventure Path",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 2,
    slot: 'eyes',

    price: 2600,
    weight: 0,

    description:
      "This black silk eye patch features a skull and crossbones design in silver thread. The " +
      "wearer gains a +2 competence bonus on Swim and Climb checks. Once per day, the wearer can " +
      "activate either touch of the sea or expeditious retreat as a spell-like ability.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['expeditious retreat', 'touch of the sea'],
      cost: 1300,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 8,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.swim',
        value: 2,
        source: "Eye Patch, Pirate's",
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.climb',
        value: 2,
        source: "Eye Patch, Pirate's",
      },
    ],

    spellLikeAbilities: [
      {
        usesPerDay: 1,
        spells: [
          {
            spellId: 'touch_of_the_sea',
            spellName: 'Touch of the Sea',
            casterLevel: 2,
            activationAction: 'standard',
          },
          {
            spellId: 'expeditious_retreat',
            spellName: 'Expeditious Retreat',
            casterLevel: 2,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 73. Eye, All-Seeing ----------------------------------------------------
  {
    id: 'wondrous-eye-all-seeing',
    name: 'Eye, All-Seeing',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 9,
    slot: 'none',

    price: 5500,
    weight: 5,

    description:
      'This oversized eyeball approximately one foot in diameter grants the possessor a +1 insight ' +
      'bonus to saving throw DCs for divination spells they cast and a +1 insight bonus on dispel ' +
      'checks against divination effects. Once per week, the holder may cast commune as a ' +
      'spell-like ability without requiring material components. Using this ability consumes the ' +
      "item's magic for one week, during which the insight bonuses are unavailable.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['commune', 'guidance'],
      cost: 2250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'spell.save_dc',
        value: 1,
        source: 'Eye, All-Seeing',
        condition: {
          type: 'custom',
          params: { descriptor: 'divination' },
          description: 'divination spells only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'special.dispel_check',
        value: 1,
        source: 'Eye, All-Seeing',
        condition: {
          type: 'custom',
          params: { descriptor: 'divination' },
          description: 'dispel checks against divination effects only',
        },
      },
    ],

    spellLikeAbilities: [
      {
        // Once per week per rules; modeled as 1/day — description text carries the weekly restriction
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
  },

  // ---- 74. Eye, Soulbound -----------------------------------------------------
  {
    id: 'wondrous-eye-soulbound',
    name: 'Eye, Soulbound',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY }],
    casterLevel: 16,
    slot: 'headband',

    price: 30000,
    weight: 0,

    description:
      'This star ruby gem in a gold clasp with spikes must be pressed against a willing or ' +
      'helpless creature\'s forehead to embed itself. Once implanted, the master who placed the ' +
      'gem can observe the world through the wearer\'s senses, communicate telepathically with ' +
      'the wearer (non-planar range), and cast hold monster, modify memory, pain strike, or ' +
      'suggestion through the eye at the wearer regardless of distance (normal saving throws and ' +
      'spell resistance apply). The wearer is not magically compelled to obey. Functions as a ' +
      'cursed item once implanted and requires remove curse or break enchantment to remove; the ' +
      'gem crumbles after removal.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['scrying'],
      cost: 15000,
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
        target: 'special.eye_soulbound_remote_viewing',
        value: 0,
        source: 'Eye, Soulbound',
      },
      {
        type: 'special',
        target: 'special.eye_soulbound_telepathy',
        value: 0,
        source: 'Eye, Soulbound',
      },
      {
        type: 'special',
        target: 'special.eye_soulbound_spell_conduit',
        value: 0,
        source: 'Eye, Soulbound',
      },
    ],
  },

  // ---- 75. Eye, Veiled --------------------------------------------------------
  {
    id: 'wondrous-eye-veiled',
    name: 'Eye, Veiled',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'headband',

    price: 12000,
    weight: 0,

    description:
      'A banded agate that affixes to the wearer\'s forehead, functioning as an additional eye that ' +
      'matches the wearer\'s existing vision capabilities (low-light vision, darkvision, oracle ' +
      'curses, etc.). While the original eyes function normally, the veiled eye provides no benefit. ' +
      'If the wearer becomes blinded or voluntarily closes their eyes, they can see through this ' +
      'magical agate instead, taking a -2 penalty on ranged attack rolls but gaining a +2 insight ' +
      'bonus on saving throws against gaze attacks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['remove blindness/deafness'],
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
        target: 'special.eye_veiled_backup_vision',
        value: 0,
        source: 'Eye, Veiled',
      },
      {
        type: 'penalty',
        bonusType: 'untyped',
        target: 'attack.ranged',
        value: -2,
        source: 'Eye, Veiled',
        condition: {
          type: 'custom',
          params: { descriptor: 'using_veiled_eye_only' },
          description: 'only when using veiled eye as sole vision source',
        },
      },
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'save.all',
        value: 2,
        source: 'Eye, Veiled',
        condition: {
          type: 'custom',
          params: { descriptor: 'gaze_attack' },
          description: 'against gaze attacks only',
        },
      },
    ],
  },
];
