import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';
import { Alignment } from '@/types/base';

export const wondrousItemsEG5: WondrousItemDefinition[] = [
  // -------------------------------------------------------------------------
  // 101. Figurine of the Dwarven Forge
  // Source: Pathfinder Player Companion: Blood of the Ancients
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-figurine-dwarven-forge',
    name: 'Figurine of the Dwarven Forge',
    category: 'wondrous',
    source: 'Blood of the Ancients',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 15000,
    weight: 1,

    description:
      'This item consists of stone and steel figurines depicting a forge and anvil that are warm to the touch ' +
      'and emit a faint red glow. When commanded, it expands into a full-sized working forge occupying a ' +
      '10-by-5-foot area. The figurine can store a spell from a consumed magic scroll for use in crafting ' +
      'magical items, allowing the crafter to meet spell prerequisites for multiple creations — a new scroll ' +
      'replaces any previously stored spell. Additionally, once per day as a standard action, touching the ' +
      'figurine to a metal melee weapon grants that weapon the igniting special ability for 1 minute.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['flame blade', 'heat metal', 'shrink item'],
      cost: 7500,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.figurine_dwarven_forge_expansion',
        value: 0,
        source: 'Figurine of the Dwarven Forge',
      },
      {
        type: 'special',
        target: 'special.figurine_dwarven_forge_spell_storage',
        value: 0,
        source: 'Figurine of the Dwarven Forge',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'igniting',
            spellName: 'Igniting (weapon ability)',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 102. Figurines of Wondrous Power — Bronze Griffon
  // Source: Core Rulebook
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-figurine-bronze-griffon',
    name: 'Figurine of Wondrous Power (Bronze Griffon)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'none',

    price: 10000,
    weight: 1,

    description:
      'When tossed down and the command word spoken, this bronze statuette becomes a living griffon that ' +
      'functions in all ways like a normal griffon under the command of its possessor. The figurine can be ' +
      'used twice per week, with each use lasting up to 6 hours. Speaking the command word or reaching the ' +
      '6-hour duration returns it to statuette form.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate objects'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.figurine_animate_griffon',
        value: 0,
        source: 'Figurine of Wondrous Power (Bronze Griffon)',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 102. Figurines of Wondrous Power — Ebony Fly
  // Source: Core Rulebook
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-figurine-ebony-fly',
    name: 'Figurine of Wondrous Power (Ebony Fly)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'none',

    price: 10000,
    weight: 1,

    description:
      'When tossed down and the command word spoken, this ebony statuette becomes a giant fly the size of a ' +
      'pony with all the statistics of a pegasus but which can make no attacks. The figurine can be used ' +
      'three times per week, with each use lasting up to 12 hours. Speaking the command word or reaching ' +
      'the 12-hour duration returns it to statuette form.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate objects'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.figurine_animate_fly',
        value: 0,
        source: 'Figurine of Wondrous Power (Ebony Fly)',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 102. Figurines of Wondrous Power — Golden Lions
  // Source: Core Rulebook
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-figurine-golden-lions',
    name: 'Figurine of Wondrous Power (Golden Lions)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'none',

    price: 16500,
    weight: 1,

    description:
      'This matched pair of golden statuettes animates into two adult male lions when the command word is ' +
      'spoken. The lions obey and serve their owner. They can be used for up to 1 hour per day. If either ' +
      'lion is destroyed in battle, the corresponding figurine cannot be reactivated for a full week.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate objects'],
      cost: 8250,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.figurine_animate_lions',
        value: 0,
        source: 'Figurine of Wondrous Power (Golden Lions)',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 102. Figurines of Wondrous Power — Ivory Goats
  // Source: Core Rulebook
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-figurine-ivory-goats',
    name: 'Figurine of Wondrous Power (Ivory Goats)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'none',

    price: 21000,
    weight: 1,

    description:
      'This set of three ivory goat figurines each animates into a different creature when the command word ' +
      'is spoken. The Goat of Traveling functions as a heavy horse and can operate continuously for up to ' +
      '24 hours per week (minimum 1-day rest before reuse). The Goat of Travail becomes a creature with ' +
      'nightmare statistics with two large horns (1d8+4 damage each; +6 if charging), usable once per month ' +
      'for up to 12 hours. The Goat of Terror becomes a light horse-like mount whose rider can wield its ' +
      'horns as a +3 heavy lance and a +5 longsword; it radiates a fear effect in a 30-foot radius (Will ' +
      'DC 16 partial) during combat, usable every 2 weeks for up to 3 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate objects'],
      cost: 10500,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.figurine_animate_goats',
        value: 0,
        source: 'Figurine of Wondrous Power (Ivory Goats)',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 102. Figurines of Wondrous Power — Marble Elephant
  // Source: Core Rulebook
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-figurine-marble-elephant',
    name: 'Figurine of Wondrous Power (Marble Elephant)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'none',

    price: 17000,
    weight: 1,

    description:
      'When the command word is spoken, this hand-sized marble statuette transforms into a full-sized, ' +
      'obedient elephant that serves its owner as a mount, beast of burden, or combat ally. The figurine ' +
      'can be activated four times per month for up to 24 hours at a time.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate objects'],
      cost: 8500,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.figurine_animate_elephant',
        value: 0,
        source: 'Figurine of Wondrous Power (Marble Elephant)',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 102. Figurines of Wondrous Power — Obsidian Steed
  // Source: Core Rulebook
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-figurine-obsidian-steed',
    name: 'Figurine of Wondrous Power (Obsidian Steed)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 15,
    slot: 'none',

    price: 28500,
    weight: 1,

    description:
      'This black statuette animates into a nightmarish steed with the statistics of a nightmare when ' +
      'the command word is spoken. The steed serves its owner as a mount and can use its plane shift ' +
      'ability to travel to other planes. The figurine can be used once per week for up to 24 hours. ' +
      'The steed may refuse to serve a rider of good alignment, and there is a 10% chance each use that ' +
      'it acts as an independent nightmare for the duration.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate objects', 'plane shift'],
      cost: 14250,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.figurine_animate_nightmare',
        value: 0,
        source: 'Figurine of Wondrous Power (Obsidian Steed)',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 102. Figurines of Wondrous Power — Onyx Dog
  // Source: Core Rulebook
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-figurine-onyx-dog',
    name: 'Figurine of Wondrous Power (Onyx Dog)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'none',

    price: 15500,
    weight: 1,

    description:
      'When the command word is spoken, this onyx statuette becomes a living hound that has the statistics ' +
      'of a riding dog but with darkvision (60 ft.), low-light vision, and the scent ability. It can also ' +
      'track by scent (treat as if using the Survival skill with a +4 bonus). The dog can be used once per ' +
      'week for up to 6 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate objects', 'scrying'],
      cost: 7750,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.figurine_animate_dog',
        value: 0,
        source: 'Figurine of Wondrous Power (Onyx Dog)',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 102. Figurines of Wondrous Power — Serpentine Owl
  // Source: Core Rulebook
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-figurine-serpentine-owl',
    name: 'Figurine of Wondrous Power (Serpentine Owl)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'none',

    price: 9100,
    weight: 1,

    description:
      'This serpentine stone owl statuette animates into a normal-sized owl when the command word is ' +
      'spoken, serving as a messenger or scout. The owl can be used once per day for up to 8 hours. ' +
      'Three times per week, it can be used in giant owl form (as a giant owl) for up to 1 hour per use.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate objects'],
      cost: 4550,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.figurine_animate_owl',
        value: 0,
        source: 'Figurine of Wondrous Power (Serpentine Owl)',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 102. Figurines of Wondrous Power — Silver Raven
  // Source: Core Rulebook
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-figurine-silver-raven',
    name: 'Figurine of Wondrous Power (Silver Raven)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'none',

    price: 3800,
    weight: 1,

    description:
      'This small silver statuette animates into a raven when the command word is spoken. The raven can ' +
      'carry messages like an animal messenger spell and functions as a normal raven in all other respects. ' +
      'The figurine can be used once per day for up to 24 hours before it must revert to statuette form.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animal messenger', 'animate objects'],
      cost: 1900,
    },
    physicalStats: {
      hardness: 8,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.figurine_animate_raven',
        value: 0,
        source: 'Figurine of Wondrous Power (Silver Raven)',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'animal_messenger',
            spellName: 'Animal Messenger',
            casterLevel: 6,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 103. Firepowder
  // Source: Ultimate Equipment
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-firepowder',
    name: 'Firepowder',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'none',

    price: 10,
    weight: 1,

    description:
      'This chalky yellow powder is kept in a canvas pouch. When mixed with fine sand, the combination ' +
      'heats rapidly and combusts, creating a slow-burning flame that requires no fuel. Half a pound ' +
      'burns for approximately 8 hours, producing heat equivalent to a standard campfire.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['continual flame'],
      cost: 5,
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
        target: 'special.firepowder_campfire',
        value: 0,
        source: 'Firepowder',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 104. First Aid Gloves
  // Source: Ultimate Equipment
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-first-aid-gloves',
    name: 'First Aid Gloves',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'hands',

    price: 4500,
    weight: 1,

    description:
      'These hand coverings feature a sapphire decorating each finger, bearing 10 in all. The wearer can ' +
      'activate healing spells as a standard action by permanently consuming sapphires. Each spell costs ' +
      'gems equal to its spell level: cure light wounds (1 gem), cure moderate wounds (2 gems), cure serious ' +
      'wounds (3 gems), cure critical wounds (4 gems), breath of life (5 gems), and mass cure light wounds ' +
      '(5 gems). Both gloves must be worn together, and sapphires cannot be drawn from different hands for ' +
      'a single casting. Once all gems are depleted, the gloves lose their magical properties.',

    charges: { maximum: 10, rechargeMethod: 'Does not recharge; sapphires are permanently consumed' },

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
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.first_aid_gloves_healing',
        value: 0,
        source: 'First Aid Gloves',
      },
    ],
  },

  // NOT FOUND: Flail, Spine — this is a magic weapon (+2 flail), not a wondrous item.

  // -------------------------------------------------------------------------
  // 106. Flame of Rage
  // Source: Ultimate Equipment
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-flame-of-rage',
    name: 'Flame of Rage',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'head',

    price: 10000,
    weight: 1,

    description:
      'This ancient diadem shaped like an enraged face has a central ruby. While raging, the wearer can ' +
      'expend 1 round of rage as a standard action to fire a beam dealing 2d6 points of fire damage via ' +
      'ranged touch attack (30-foot range). Alternatively, spending 3 rounds of rage creates a 60-foot ' +
      'line of fire inflicting 5d6 points of fire damage to all creatures along the line (Reflex DC 14 ' +
      'negates).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['scorching ray'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 12,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.flame_of_rage_beam',
        value: 0,
        source: 'Flame of Rage',
        condition: {
          type: 'custom',
          params: { descriptor: 'rage' },
          description: 'only usable while the wearer is raging',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 107. Flask of Ebon Flame
  // Source: Ultimate Equipment
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-flask-of-ebon-flame',
    name: 'Flask of Ebon Flame',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 1500,
    weight: 1,

    description:
      'This vessel releases a strange sort of fire that is hostile to normal fire. When activated, it ' +
      'creates a 20-foot-radius burst of black flame that extinguishes natural fires and dispels magical ' +
      'fire effects (dispel check 1d20+5), temporarily disables fire-based magic items for 1d4 rounds, ' +
      'heals creatures for 5d6 points of damage caused by fire effects, and damages fire subtype creatures ' +
      'for 5d6 points (DC 15 Fortitude save for half). Fire subtype creatures that fail their save are ' +
      'also stunned for 1 round. Each flask contains a single use.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['quench', 'resist energy'],
      cost: 750,
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
        target: 'special.flask_ebon_flame_burst',
        value: 0,
        source: 'Flask of Ebon Flame',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 108. Flask of the Reaper
  // Source: Pathfinder Society Field Guide (or similar PFS source)
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-flask-of-the-reaper',
    name: 'Flask of the Reaper',
    category: 'wondrous',
    source: 'Pathfinder Society Field Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',

    price: 3800,
    weight: 0,

    description:
      'This diminutive metal container resembles a hip flask but is barely larger than a potion vial; ' +
      'the stopper typically displays a shield mark or featureless mask. Once daily, the user gains a ' +
      '+5 alchemical bonus to Fortitude saves against poison and a +5 competence bonus to Stealth checks ' +
      'for 1 hour. If the bearer\'s patron is the Reaper of Reputation, they can instead gain a +5 ' +
      'competence bonus to Perception, Sleight of Hand, or Stealth checks (user\'s choice) for 1 hour ' +
      'once daily, and may also pour acid from the flask once per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['acid splash', 'resistance'],
      specialRequirements: ['Creator must have 5 ranks in Perception, Sleight of Hand, and Stealth'],
      cost: 1900,
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
        bonusType: 'alchemical',
        target: 'save.fortitude',
        value: 5,
        source: 'Flask of the Reaper',
        condition: {
          type: 'custom',
          params: { descriptor: 'poison' },
          description: 'against poison only, 1 hour per day',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.stealth',
        value: 5,
        source: 'Flask of the Reaper',
        condition: {
          type: 'custom',
          params: { descriptor: 'daily_use' },
          description: '1 hour per day',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 109. Floating Sail (smallest variant — 10 ft. by 15 ft.)
  // Source: Pathfinder Player Companion: Magical Marketplace
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-floating-sail-small',
    name: 'Floating Sail (10 ft. by 15 ft.)',
    category: 'wondrous',
    source: "Magical Marketplace",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 5000,
    weight: 20,

    description:
      'This silk cloth, folded into a triangle and secured with a gold ribbon, unfurls into a rigid, ' +
      'floating sheet (10 ft. by 15 ft.) upon command. It can support up to 800 pounds in an area ' +
      'of the speaker\'s choosing. A second command causes it to fold back into triangular form. If ' +
      'bearing weight when commanded to collapse, creatures aboard may become entangled, fall, or ' +
      'worse. The sail also fails if its weight capacity is exceeded.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['water walk'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.floating_sail_platform',
        value: 800,
        source: 'Floating Sail (10 ft. by 15 ft.)',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 109. Floating Sail (15 ft. by 30 ft.)
  // Source: Pathfinder Player Companion: Magical Marketplace
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-floating-sail-medium',
    name: 'Floating Sail (15 ft. by 30 ft.)',
    category: 'wondrous',
    source: "Magical Marketplace",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 15000,
    weight: 25,

    description:
      'This silk cloth, folded into a triangle and secured with a gold ribbon, unfurls into a rigid, ' +
      'floating sheet (15 ft. by 30 ft.) upon command. It can support up to 1,000 pounds in an area ' +
      'of the speaker\'s choosing. A second command causes it to fold back into triangular form.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['water walk'],
      cost: 7500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.floating_sail_platform',
        value: 1000,
        source: 'Floating Sail (15 ft. by 30 ft.)',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 109. Floating Sail (15 ft. by 40 ft.)
  // Source: Pathfinder Player Companion: Magical Marketplace
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-floating-sail-large',
    name: 'Floating Sail (15 ft. by 40 ft.)',
    category: 'wondrous',
    source: "Magical Marketplace",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 20000,
    weight: 40,

    description:
      'This silk cloth, folded into a triangle and secured with a gold ribbon, unfurls into a rigid, ' +
      'floating sheet (15 ft. by 40 ft.) upon command. It can support up to 1,250 pounds in an area ' +
      'of the speaker\'s choosing. A second command causes it to fold back into triangular form.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['water walk'],
      cost: 10000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.floating_sail_platform',
        value: 1250,
        source: 'Floating Sail (15 ft. by 40 ft.)',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 109. Floating Sail (20 ft. by 50 ft.)
  // Source: Pathfinder Player Companion: Magical Marketplace
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-floating-sail-huge',
    name: 'Floating Sail (20 ft. by 50 ft.)',
    category: 'wondrous',
    source: "Magical Marketplace",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 32000,
    weight: 50,

    description:
      'This silk cloth, folded into a triangle and secured with a gold ribbon, unfurls into a rigid, ' +
      'floating sheet (20 ft. by 50 ft.) upon command. It can support up to 2,000 pounds in an area ' +
      'of the speaker\'s choosing. A second command causes it to fold back into triangular form.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['water walk'],
      cost: 16000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.floating_sail_platform',
        value: 2000,
        source: 'Floating Sail (20 ft. by 50 ft.)',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 110. Fold, Blind Man's
  // Source: Ultimate Equipment
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-fold-blind-mans',
    name: "Blind Man's Fold",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'eyes',

    price: 12000,
    weight: 0,

    description:
      "This item is crafted from a blind beggar's clothing scrap. When worn, it fully obscures normal " +
      'vision but grants the effects of the Improved Blind-Fight feat. The fold provides no benefit to ' +
      'creatures already unable to see normally.',

    construction: {
      feats: ['Craft Wondrous Item', 'Improved Blind-Fight'],
      spells: ['darkness'],
      cost: 6000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    grantedFeats: ['improved-blind-fight'],

    effects: [
      {
        type: 'special',
        target: 'special.blind_mans_fold_vision_obscured',
        value: 0,
        source: "Blind Man's Fold",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 111. Forbearer's Grace
  // Source: Ultimate Equipment
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-forbearers-grace',
    name: "Forbearer's Grace",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'neck',

    price: 5400,
    weight: 0,

    description:
      'A circular amulet made from three curved golden rods with a deep yellow topaz center. It grants a ' +
      '+2 resistance bonus on Fortitude saves against poisons and ongoing effects from poisons. If ability ' +
      'score damage from poison would reduce any ability score to 1, the amulet shatters and provides a ' +
      'restoration effect. This shattering does not cure active poisons.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['neutralize poison', 'restoration'],
      cost: 2700,
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
        bonusType: 'resistance',
        target: 'save.fortitude',
        value: 2,
        source: "Forbearer's Grace",
        condition: {
          type: 'custom',
          params: { descriptor: 'poison' },
          description: 'against poison and ongoing poison effects only',
        },
      },
      {
        type: 'special',
        target: 'special.forbearers_grace_restoration',
        value: 0,
        source: "Forbearer's Grace",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 112. Foresight Quill
  // Source: Pathfinder Player Companion: Disciple's Doctrine
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-foresight-quill',
    name: 'Foresight Quill',
    category: 'wondrous',
    source: "Disciple's Doctrine",
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 6,
    slot: 'none',

    price: 6500,
    weight: 0,

    description:
      'This writing instrument always bears ink, as though freshly drawn from an inkwell. Once daily, the ' +
      'user enters a trance and writes for 1 minute, then selects an attack roll, saving throw, or skill ' +
      'check type. For that chosen type, the user rolls twice and keeps the better result for that day. For ' +
      'the other two types, the user must roll twice and accept the worse result.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['borrow fortune'],
      cost: 3250,
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
        target: 'special.foresight_quill_roll_twice',
        value: 0,
        source: 'Foresight Quill',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 113. Forger's Friend
  // Source: Ultimate Equipment
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-forgers-friend',
    name: "Forger's Friend",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 7,
    slot: 'none',

    price: 11200,
    weight: 5,

    description:
      "A leather satchel containing forging tools (quills, ink, parchment, sealing wax) and personal " +
      "mementos. When a personal possession of the target individual is placed inside for 24 hours " +
      "alongside forgery materials, any documents created become supernaturally convincing. Creatures " +
      "detecting the forgery suffer penalties on Linguistics checks equal to scrying spell penalties " +
      "based on the satchel's contents. Only one creature's handwriting can be acclimated at a time.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['scrying'],
      cost: 5600,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 3,
      breakDC: 15,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.forgers_friend_forgery',
        value: 0,
        source: "Forger's Friend",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 114. Formula Alembic
  // Source: Advanced Player's Guide
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-formula-alembic',
    name: 'Formula Alembic',
    category: 'wondrous',
    source: "Advanced Player's Guide",
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'none',

    price: 200,
    weight: 2,

    description:
      'This magically-enhanced alchemical apparatus enables alchemists to extract formula knowledge from ' +
      'potions and extracts. The user heats a potion or extract within the device for 1 hour, producing ' +
      'magical liquid drops. When consumed by an alchemist, this liquid grants temporary knowledge of the ' +
      'formula as if it were an extract recorded in their formula book for 24 hours, allowing normal ' +
      'transcription. The heating does not damage the potion but leaves it very hot. The alembic only ' +
      'works with formulas on the alchemist extract list.',

    construction: {
      feats: ['Brew Potion', 'Craft Wondrous Item'],
      spells: ['identify'],
      specialRequirements: ['Creator must be an alchemist'],
      cost: 100,
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
        target: 'special.formula_alembic_extract',
        value: 0,
        source: 'Formula Alembic',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 115. Fortifying Leeches
  // Source: Ultimate Equipment
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-fortifying-leeches',
    name: 'Fortifying Leeches',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',

    price: 6000,
    weight: 2,

    description:
      'An ornate glass jar containing greenish fluid and large black leeches. When poured over the head ' +
      'and torso as a standard action, the leeches attach and provide a +2 enhancement bonus to ' +
      'Constitution for 8 hours. Users suffer a -4 penalty on Diplomacy checks with creatures that find ' +
      'the practice grotesque. The leeches are destroyed if the wearer takes more than 20 damage from ' +
      'area-effect energy damage. The jar refills automatically after 24 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance"],
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
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 2,
        source: 'Fortifying Leeches',
      },
      {
        type: 'penalty',
        bonusType: 'untyped',
        target: 'skill.diplomacy',
        value: -4,
        source: 'Fortifying Leeches',
        condition: {
          type: 'custom',
          params: { descriptor: 'grotesque_appearance' },
          description: 'vs. creatures that find the leech application grotesque',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 116. Frostwild Bridle
  // Source: Pathfinder Player Companion: Heroes of the Wild
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-frostwild-bridle',
    name: 'Frostwild Bridle',
    category: 'wondrous',
    source: 'Heroes of the Wild',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 9,
    slot: 'none',

    price: 48000,
    weight: 2,

    description:
      'This bridle made of crystal-studded white leather grants the wearer\'s mount cold resistance 20. ' +
      'Three times daily, the animal can exhale a 60-foot cone of frost dealing 9d6 cold damage ' +
      '(DC 17 Reflex save for half damage).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cone of cold', 'resist energy'],
      cost: 24000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 12,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'resistance',
        bonusType: 'untyped',
        target: 'energy_resistance.cold',
        value: 20,
        source: 'Frostwild Bridle',
        condition: {
          type: 'custom',
          params: { descriptor: 'mount_only' },
          description: "applies to the wearer's mount only",
        },
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'cone_of_cold',
            spellName: 'Cone of Cold',
            casterLevel: 9,
            usesPerDay: 3,
            saveDC: 17,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 117. Garuda Scabbard
  // Source: Pathfinder RPG (Inner Sea region / Golarion sourcebook)
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-garuda-scabbard',
    name: 'Garuda Scabbard',
    category: 'wondrous',
    source: 'Inner Sea World Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 9,
    slot: 'belt',

    price: 6000,
    weight: 2,

    description:
      'A belt-and-scabbard combination adorned with golden garuda imagery. The scabbard automatically ' +
      'conforms to fit whatever weapon the wielder carries. As a free action when no weapon is equipped, ' +
      'the wielder can command it to assume the form of any weapon for which they have proficiency. ' +
      'Once daily as a standard action, the wielder speaks the command word to unleash gale-force winds ' +
      'affecting creatures within 10 feet, triggering a special trip maneuver against all nearby enemies ' +
      'using the wielder\'s normal combat maneuver bonus (no attacks of opportunity provoked). Enemies ' +
      'failing their CMD are knocked prone; the wielder avoids falling if the attempt fails by 10 or more.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['gust of wind'],
      cost: 3000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 16,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.garuda_scabbard_trip',
        value: 0,
        source: 'Garuda Scabbard',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 118. Gauntlet of Rust
  // Source: Core Rulebook
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-gauntlet-of-rust',
    name: 'Gauntlet of Rust',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'hands',

    price: 11500,
    weight: 2,

    description:
      'A single metal gauntlet with a rusted appearance. The wearer can activate the rusting grasp spell ' +
      'once daily. The wearer also gains complete immunity to rust, whether magical or mundane, including ' +
      'immunity to rust monster attacks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['rusting grasp'],
      cost: 5750,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.immunity_rust',
        value: 0,
        source: 'Gauntlet of Rust',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'rusting_grasp',
            spellName: 'Rusting Grasp',
            casterLevel: 7,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 118. Gauntlet of Rust, Greater
  // Source: Core Rulebook
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-gauntlet-of-rust-greater',
    name: 'Gauntlet of Rust, Greater',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'hands',

    price: 34500,
    weight: 1,

    description:
      'Functionally identical to the standard gauntlet of rust, but the wearer can cast rusting grasp ' +
      'three times per day instead of once daily, while maintaining the same immunity to all forms of rust.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['rusting grasp'],
      cost: 17250,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.immunity_rust',
        value: 0,
        source: 'Gauntlet of Rust, Greater',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'rusting_grasp',
            spellName: 'Rusting Grasp',
            casterLevel: 7,
            usesPerDay: 3,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 119. Gauntlet, Inheritor's Gauntlet
  // Source: Pathfinder Player Companion: Faiths of Purity (Iomedae deity item)
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-gauntlet-inheritors',
    name: "Inheritor's Gauntlet",
    category: 'wondrous',
    source: 'Faiths of Purity',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'hands',

    price: 2700,
    weight: 1,

    description:
      "A metal gauntlet designed for chainmail, though versions for leather and full plate exist. A white " +
      "cloth affixed to the wrist bears a gold-embroidered longsword. Once daily, the wearer speaks the " +
      "command word to grant a held weapon a +1 enhancement bonus on attack and damage rolls for 1 minute. " +
      "If Iomedae is the wearer's patron deity, additional abilities unlock: the gauntlet can serve as a " +
      "holy symbol, and once daily the wearer can grant any held sword the properties of an evil outsider-" +
      "bane weapon for 1 minute. Additionally, drawing the deity's symbol on any solid surface causes it " +
      "to glow as brightly as a candle for 1 hour. The gauntlet occupies the entire hands slot.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['light', 'magic weapon', 'summon monster I'],
      cost: 1350,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 22,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.inheritors_gauntlet_weapon_bonus',
        value: 0,
        source: "Inheritor's Gauntlet",
      },
    ],

    conditionalEffects: [
      {
        condition: 'wielder_alignment',
        alignment: Alignment.LawfulGood,
        effects: [
          {
            type: 'special',
            target: 'special.inheritors_gauntlet_bane',
            value: 0,
            source: "Inheritor's Gauntlet",
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 120. Gauntlet, Iron Cobra
  // Source: Ultimate Equipment
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-gauntlet-iron-cobra',
    name: 'Gauntlet, Iron Cobra',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'hands',

    price: 8000,
    weight: 1,

    description:
      "An elbow-length scaled metal gauntlet that widens at the wrist to resemble a cobra's hood. It can " +
      'transform into an iron cobra construct up to three times daily, animating for a maximum of 1 hour ' +
      'per day total. The cobra obeys the wearer\'s commands and leaves behind a bracelet of linked scales ' +
      'that designates the wearer as the construct\'s master. The cobra reverts to gauntlet form when ' +
      'commanded or when its duration expires.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate objects', 'discern location', 'geas/quest'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 22,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.iron_cobra_animate',
        value: 0,
        source: 'Gauntlet, Iron Cobra',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 121. Gauntlets of Skill at Arms
  // Source: Advanced Race Guide (elven item)
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-gauntlets-skill-at-arms',
    name: 'Gauntlets of Skill at Arms',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'hands',

    price: 30302,
    weight: 1,

    description:
      'These leather gauntlets with silvered steel plates enable the wearer to use traditional elven ' +
      'weapons as if proficient: longbows, composite longbows, longswords, rapiers, shortbows, composite ' +
      'shortbows, and any weapon with "elven" in its name. If the wearer is already proficient with a ' +
      'given elven weapon, they gain a +1 competence bonus on attack and damage rolls with it. Both ' +
      'gauntlets must be worn together to function.',

    construction: {
      feats: ['Craft Magic Arms and Armor'],
      spells: [],
      specialRequirements: ['Creator must be an elf'],
      cost: 15302,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.elven_weapon_proficiency',
        value: 0,
        source: 'Gauntlets of Skill at Arms',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'attack.all',
        value: 1,
        source: 'Gauntlets of Skill at Arms',
        condition: {
          type: 'custom',
          params: { weaponGroup: 'elven_weapons' },
          description: 'with elven weapons the wearer is already proficient in',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'damage.all',
        value: 1,
        source: 'Gauntlets of Skill at Arms',
        condition: {
          type: 'custom',
          params: { weaponGroup: 'elven_weapons' },
          description: 'with elven weapons the wearer is already proficient in',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 122. Gauntlets of the Deep
  // Source: Ultimate Equipment
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-gauntlets-of-the-deep',
    name: 'Gauntlets of the Deep',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 7,
    slot: 'hands',

    price: 5000,
    weight: 2,

    description:
      'These fish-scale covered gloves remain perpetually cold and wet. After 24 hours of attunement, ' +
      'the wearer gains two benefits: they can throw piercing weapons underwater without penalty at normal ' +
      'range, and when attacking submerged targets from land, those targets lose their cover bonuses ' +
      'regardless of their aquatic position.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['freedom of movement'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.gauntlets_deep_underwater_throw',
        value: 0,
        source: 'Gauntlets of the Deep',
      },
      {
        type: 'special',
        target: 'special.gauntlets_deep_no_cover',
        value: 0,
        source: 'Gauntlets of the Deep',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 123. Gauntlets of the Skilled Maneuver
  // Source: Ultimate Equipment
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-gauntlets-skilled-maneuver',
    name: 'Gauntlets of the Skilled Maneuver',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'hands',

    price: 4000,
    weight: 1,

    description:
      'The wearer receives a +2 bonus on one type of combat maneuver check (such as bull rush, disarm, ' +
      'or steal) chosen by the creator when the item is created.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: [
        'Creator must possess one of: Improved Bull Rush, Improved Dirty Trick, Improved Disarm, ' +
          'Improved Drag, Improved Grapple, Improved Overrun, Improved Reposition, Improved Steal, ' +
          'Improved Sunder, or Improved Trip',
      ],
      cost: 2000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'cmb',
        value: 2,
        source: 'Gauntlets of the Skilled Maneuver',
        condition: {
          type: 'custom',
          params: { descriptor: 'specific_maneuver_type' },
          description: 'for one specific combat maneuver type chosen at creation',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 124. Gauntlets of the Unchained
  // Source: Pathfinder Unchained
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-gauntlets-of-the-unchained',
    name: 'Gauntlets of the Unchained',
    category: 'wondrous',
    source: 'Pathfinder Unchained',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'hands',

    price: 13200,
    weight: 6,

    description:
      "These silver gauntlets symbolize being bound to past deeds while remaining free for future " +
      "possibilities. The wearer can only use two-handed weapons due to magical chains preventing " +
      "dual-wielding. By tapping the manacles together as a swift action, the wearer's weapon damage " +
      "becomes lawful-aligned to bypass corresponding damage reduction for up to 7 rounds per day. " +
      "Breaking the chain as a standard action grants the anarchic weapon ability for 7 minutes but " +
      "permanently destroys the item's magic.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["chaos hammer", "order's wrath"],
      specialRequirements: ['Creator must be neutral'],
      cost: 6600,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'use_activated',
    activationAction: 'swift',

    effects: [
      {
        type: 'special',
        target: 'special.gauntlets_unchained_lawful_damage',
        value: 0,
        source: 'Gauntlets of the Unchained',
      },
      {
        type: 'special',
        target: 'special.gauntlets_unchained_two_handed_only',
        value: 0,
        source: 'Gauntlets of the Unchained',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 125. Gauntlets of the Weaponmaster
  // Source: Ultimate Equipment
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-gauntlets-of-the-weaponmaster',
    name: 'Gauntlets of the Weaponmaster',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 10,
    slot: 'hands',

    price: 110000,
    weight: 5,

    description:
      "These gauntlets range from leather with steel plating to fully articulated plate armor. The wearer " +
      "can store a held weapon on command, with a graven image appearing on the gauntlet's plates. Up to " +
      "10 weapons can be stored this way. Retrieving a weapon is a swift action by touching its image; " +
      "when retrieved, the current weapon is automatically stored. If storage is unavailable, held weapons " +
      "drop to the ground. The gauntlets accept weapons only. Additionally, the wearer can activate " +
      "greater heroism three times daily.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['heroism', 'rope trick'],
      cost: 55000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'command_word',
    activationAction: 'swift',

    effects: [
      {
        type: 'special',
        target: 'special.weaponmaster_weapon_storage',
        value: 10,
        source: 'Gauntlets of the Weaponmaster',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'greater_heroism',
            spellName: 'Greater Heroism',
            casterLevel: 10,
            usesPerDay: 3,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },
];
