import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsEG9: WondrousItemDefinition[] = [
  // -------------------------------------------------------------------------
  // Goggles, Darksight
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-goggles-darksight',
    name: 'Goggles, Darksight',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'eyes',

    price: 20000,
    weight: 0,

    description:
      'These goggles feature dark lenses crafted from thin obsidian sheets. They grant the wearer ' +
      'darkvision extending 120 feet and provide a +4 competence bonus to Perception and Survival ' +
      'checks made while tracking underground.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['darkvision', 'terrain bond'],
      cost: 10000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.darkvision_120ft',
        value: 120,
        source: 'Goggles, Darksight',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.perception',
        value: 4,
        source: 'Goggles, Darksight',
        condition: {
          type: 'custom',
          params: { descriptor: 'underground' },
          description: 'while underground only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.survival',
        value: 4,
        source: 'Goggles, Darksight',
        condition: {
          type: 'custom',
          params: { descriptor: 'underground_tracking' },
          description: 'while tracking underground only',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Goggles, Discerning
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-goggles-discerning',
    name: 'Goggles, Discerning',
    category: 'wondrous',
    source: 'Advanced Player\'s Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'eyes',

    price: 13500,
    weight: 0,

    description:
      'These two thick, gold-rimmed glass lenses are encased in a leather band. When worn, these ' +
      'goggles enable the wearer to perceive alignment through visual cues: good-aligned creatures ' +
      'appear with a faint blue glow, evil-aligned creatures with a faint red glow, and neutral ' +
      'creatures appear normal. The goggles are ineffective against undetectable alignment spells ' +
      'or similar magic, and require normal light conditions to function.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect good', 'detect evil'],
      cost: 6750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.alignment_detection_visual',
        value: 0,
        source: 'Goggles, Discerning',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Goggles, Glarecutter
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-goggles-glarecutter',
    name: 'Goggles, Glarecutter',
    category: 'wondrous',
    source: 'Adventurer\'s Armory',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'eyes',

    price: 2000,
    weight: 1,

    description:
      'Dark lenses made of smoked glass are mounted in a thin leather headband. These goggles ' +
      'filter incoming light to protect the wearer\'s vision, granting a +5 resistance bonus on ' +
      'Fortitude saving throws against sight- and light-based hazards or attacks, such as desert ' +
      'glare, blindness, gaze attacks, and so on.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['remove blindness/deafness', 'resistance'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.fort',
        value: 5,
        source: 'Goggles, Glarecutter',
        condition: {
          type: 'custom',
          params: { descriptor: 'light_or_sight_based' },
          description: 'against sight- and light-based hazards or attacks only',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Goggles, Kinsight
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-goggles-kinsight',
    name: 'Goggles, Kinsight',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 2,
    slot: 'eyes',

    price: 7500,
    weight: 1,

    description:
      'These magical spectacles consist of two separate crystal monocles linked together with a ' +
      'simple silver clasp that allows them to be worn like pince-nez spectacles. The lenses can ' +
      'be separated, enabling two individuals to view through one another\'s eyes when the halves ' +
      'remain within 500 feet of each other. When worn together as a single item, they provide ' +
      'only minor magnification without magical benefit.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['share senses'],
      cost: 3750,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.shared_vision_500ft',
        value: 500,
        source: 'Goggles, Kinsight',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Goggles, Saboteur's
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-goggles-saboteurs',
    name: "Goggles, Saboteur's",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 7,
    slot: 'eyes',

    price: 16000,
    weight: 0,

    description:
      'These eyepieces feature crimson lenses set in thick brass frames with a leather securing ' +
      'strap. The wearer can activate a gaze-based enchantment three times daily that compels a ' +
      'target to commit violence. A successful Will save (DC 16) negates the effect.',

    construction: {
      feats: ['Craft Wondrous Item', 'Heighten Spell'],
      spells: ['murderous command'],
      cost: 8000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.murderous_command_gaze_3_per_day',
        value: 3,
        source: "Goggles, Saboteur's",
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'murderous_command',
            spellName: 'Murderous Command',
            casterLevel: 7,
            usesPerDay: 3,
            saveDC: 16,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Sniper Goggles (and Greater variant)
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-goggles-sniper',
    name: 'Sniper Goggles',
    category: 'wondrous',
    source: 'Ultimate Combat',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'eyes',

    price: 20000,
    weight: 1,

    description:
      'The leather strap attached to these bulbous lenses allows the wearer to fit them to their ' +
      'head. The goggles enable the wearer to make ranged sneak attacks from any distance rather ' +
      'than the standard 30-foot limit. Additionally, when making a ranged sneak attack within ' +
      '30 feet, the wearer receives a +2 circumstance bonus to each sneak attack damage die.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['true strike'],
      cost: 10000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.ranged_sneak_attack_unlimited_range',
        value: 0,
        source: 'Sniper Goggles',
      },
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'special.sneak_attack_damage_per_die',
        value: 2,
        source: 'Sniper Goggles',
        condition: {
          type: 'custom',
          params: { descriptor: 'ranged_sneak_attack_within_30ft' },
          description: 'ranged sneak attacks within 30 feet only',
        },
      },
    ],
  },

  {
    id: 'wondrous-goggles-sniper-greater',
    name: 'Sniper Goggles, Greater',
    category: 'wondrous',
    source: 'Ultimate Combat',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 8,
    slot: 'eyes',

    price: 50000,
    weight: 0,

    description:
      'These goggles feature stubby periscope-like lenses that expand and retract depending on ' +
      'the needs of the wearer. They function as standard sniper goggles but extend the +2 ' +
      'circumstance bonus on each sneak attack damage die to any range, not just within 30 feet.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['true strike'],
      cost: 25000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.ranged_sneak_attack_unlimited_range',
        value: 0,
        source: 'Sniper Goggles, Greater',
      },
      {
        type: 'bonus',
        bonusType: 'circumstance',
        target: 'special.sneak_attack_damage_per_die',
        value: 2,
        source: 'Sniper Goggles, Greater',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Goggles, Storm
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-goggles-storm',
    name: 'Goggles, Storm',
    category: 'wondrous',
    source: 'Advanced Player\'s Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'eyes',

    price: 6000,
    weight: 0,

    description:
      'These goggles feature smoky crystal lenses set in an adjustable leather strap. They fully ' +
      'negate any Perception penalties imposed by a natural storm or atmospheric condition. Once ' +
      'per round when attacking a target with concealment from fog, mist, clouds, or vapor, the ' +
      'wearer can roll the miss chance percentile twice and take the better of the two results.',

    construction: {
      feats: ['Craft Wondrous Item', 'Skill Focus (Perception)'],
      spells: ['acute senses'],
      cost: 3000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.negate_storm_perception_penalties',
        value: 0,
        source: 'Goggles, Storm',
      },
      {
        type: 'special',
        target: 'special.reroll_fog_miss_chance_once_per_round',
        value: 0,
        source: 'Goggles, Storm',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Goggles, Treasure Hunter's
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-goggles-treasure-hunters',
    name: "Goggles, Treasure Hunter's",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'eyes',

    price: 6400,
    weight: 0,

    description:
      'These plain but durable goggles assist the wearer in finding concealed passages, precious ' +
      'metals, and valuables. The wearer benefits from a continuous detect secret doors effect. ' +
      'Once daily, the wearer can use locate object to identify 100 or more coins within compact ' +
      'containers. The goggles also grant three daily uses of the identify spell.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect secret doors', 'identify', 'locate object'],
      cost: 3200,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.detect_secret_doors_continuous',
        value: 0,
        source: "Goggles, Treasure Hunter's",
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'locate_object',
            spellName: 'Locate Object',
            casterLevel: 3,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
      {
        spells: [
          {
            spellId: 'identify',
            spellName: 'Identify',
            casterLevel: 3,
            usesPerDay: 3,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Goggles, Truesight
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-goggles-truesight',
    name: 'Goggles, Truesight',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.DIVINATION }],
    casterLevel: 11,
    slot: 'eyes',

    price: 184800,
    weight: 0,

    description:
      'These eyepieces feature a pair of perfect prisms held in place by golden frames and ' +
      'affixed to the head by a black leather strap. The wearer continuously benefits from true ' +
      'seeing and can activate analyze dweomer once per day as a command action.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['analyze dweomer', 'true seeing'],
      cost: 92400,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.true_seeing_continuous',
        value: 0,
        source: 'Goggles, Truesight',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'analyze_dweomer',
            spellName: 'Analyze Dweomer',
            casterLevel: 11,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Golden Dragon Kite
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-golden-dragon-kite',
    name: 'Golden Dragon Kite',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 3,
    slot: 'none',

    price: 3600,
    weight: 2,

    description:
      'This silk kite features a golden dragon motif. When deployed in adequate vertical space ' +
      '(40+ feet) with suitable wind conditions, it takes a full-round action to raise into the ' +
      'air and can be directed up to 100 feet away per turn. When the kite is airborne, the user ' +
      'can cast burning hands three times per day originating from the kite\'s location. Casting ' +
      'takes 1 minute to complete.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['burning hands'],
      cost: 1800,
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
        target: 'special.kite_remote_spell_origin',
        value: 100,
        source: 'Golden Dragon Kite',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'burning_hands',
            spellName: 'Burning Hands',
            casterLevel: 3,
            usesPerDay: 3,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Golden Eagle Epaulets
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-golden-eagle-epaulets',
    name: 'Golden Eagle Epaulets',
    category: 'wondrous',
    source: 'Inner Sea World Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 4500,
    weight: 1,

    description:
      'These decorative golden braids grant the wearer a +2 competence bonus on Diplomacy checks ' +
      'and a +2 competence bonus on one branch-specific skill (Perception for Steel Falcons, ' +
      'Ride for the Golden Legion, Swim for the Gray Corsairs, or Stealth for the Twilight ' +
      'Talons). The wearer may cast bless and sanctuary each once per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bless', 'guidance', 'sanctuary'],
      cost: 2250,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 2,
      breakDC: 14,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.diplomacy',
        value: 2,
        source: 'Golden Eagle Epaulets',
      },
      {
        type: 'special',
        target: 'special.eagle_knights_branch_skill_bonus',
        value: 2,
        source: 'Golden Eagle Epaulets',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'bless',
            spellName: 'Bless',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
          {
            spellId: 'sanctuary',
            spellName: 'Sanctuary',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Golem Gauntlet
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-golem-gauntlet',
    name: 'Golem Gauntlet',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 15,
    slot: 'none',

    price: 18505,
    weight: 5,

    description:
      'An adamantine light mace fashioned to resemble a golem\'s fist. When dealing damage to a ' +
      'golem, the creature must succeed at a DC 23 Will save or temporarily lose its spell ' +
      'immunity until the wielder\'s next turn begins. The wielder can ready an action to counter ' +
      'ranged spell attacks targeting them: by making a melee attack roll that exceeds the ' +
      'spell\'s attack roll, the magical ranged attack is negated.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["mage's disjunction"],
      cost: 9253,
    },
    physicalStats: {
      hardness: 20,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.suppress_golem_spell_immunity',
        value: 0,
        source: 'Golem Gauntlet',
        condition: {
          type: 'target_type',
          params: { creatureType: 'golem' },
          description: 'against golems only; DC 23 Will save negates',
        },
      },
      {
        type: 'special',
        target: 'special.counter_ranged_spell_attack',
        value: 0,
        source: 'Golem Gauntlet',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Gorget of Living Whispers
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-gorget-of-living-whispers',
    name: 'Gorget of Living Whispers',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT },
    ],
    casterLevel: 9,
    slot: 'neck',

    price: 15000,
    weight: 0,

    description:
      'This magical collar grants the wearer the ability to create a "living whisper" once daily ' +
      'as a standard action. When activated, the wearer speaks a suggested action, and their ' +
      'words manifest as a sinuous blue-runed creature resembling a fiendish venomous snake with ' +
      'an Intelligence score of 3. The creature communicates telepathically with the wearer and ' +
      'lasts for 1 minute or until defeated. Its bite forces a DC 14 Will save or subjects the ' +
      'victim to a suggestion spell (CL 9th). Creatures able to read Aklo can decipher the runes ' +
      'and learn what suggestion the bite imparts.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['suggestion', 'summon monster III'],
      cost: 7500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'use_activated',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.living_whisper_suggestion_snake',
        value: 1,
        source: 'Gorget of Living Whispers',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Gorget of Umbral Hunger
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-gorget-of-umbral-hunger',
    name: 'Gorget of Umbral Hunger',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'neck',

    price: 6500,
    weight: 0,

    description:
      'This intricately decorated bronze necklace fits tightly across the neck and houses a ruby ' +
      'in its center. The gorget grants the wearer fast healing 1 whenever they are in dim light ' +
      'or magical darkness. It restores up to 20 hit points daily, after which the effect ends ' +
      'until the next day. While actively healing, the wearer registers as evil — though this ' +
      'has no permanent alignment consequences.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['infernal healing'],
      cost: 3250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.fast_healing_1_in_dim_light_or_darkness',
        value: 1,
        source: 'Gorget of Umbral Hunger',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Gorget, Guardian
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-gorget-guardian',
    name: 'Gorget, Guardian',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION },
    ],
    casterLevel: 13,
    slot: 'neck',

    price: 12000,
    weight: 1,

    description:
      'A flanged collar made of mithral and steel that protects the wearer\'s neck and shoulders. ' +
      'It provides a +2 armor bonus to AC and grants light fortification. The wearer may inscribe ' +
      'a glyph of warding directly onto the gorget. When struck in melee combat, the wearer can ' +
      'trigger the glyph as an immediate action against the attacking creature and potentially ' +
      'nearby creatures within 5 feet if a blast glyph was inscribed — the wearer remains ' +
      'unharmed. The glyph can be triggered even if the attack would normally leave the wearer ' +
      'incapable of taking actions (such as being killed, stunned, dazed, or knocked unconscious).',

    construction: {
      feats: [
        'Craft Wondrous Item',
        'glyph of warding',
        'limited wish or miracle',
        'mage armor or magic vestment',
      ],
      spells: [],
      cost: 6000,
    },
    physicalStats: {
      hardness: 15,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'armor',
        target: 'ac.armor',
        value: 2,
        source: 'Gorget, Guardian',
      },
      {
        type: 'special',
        target: 'special.light_fortification',
        value: 25,
        source: 'Gorget, Guardian',
      },
      {
        type: 'special',
        target: 'special.gorget_glyph_of_warding_trigger',
        value: 0,
        source: 'Gorget, Guardian',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Gossip Glass
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-gossip-glass',
    name: 'Gossip Glass',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 1,
    slot: 'eyes',

    price: 3600,
    weight: 1,

    description:
      'This silver, bejeweled set of opera glasses provides a +4 competence bonus to Perception ' +
      'checks when looking through the lenses. The item grants the ability to understand any ' +
      'spoken language while reading lips, functioning as the comprehend languages spell. Usage ' +
      'is limited to conversations visible within line of sight where the user can observe the ' +
      'speakers\' lips.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['comprehend languages'],
      cost: 1800,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.perception',
        value: 4,
        source: 'Gossip Glass',
        condition: {
          type: 'custom',
          params: { descriptor: 'when_looking_through_lenses' },
          description: 'only when looking through the lenses',
        },
      },
      {
        type: 'special',
        target: 'special.comprehend_languages_lip_reading',
        value: 0,
        source: 'Gossip Glass',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Gown of Graceful Petiteness
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-gown-of-graceful-petiteness',
    name: 'Gown of Graceful Petiteness',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'body',

    price: 3500,
    weight: 1,

    description:
      'These fine dresses feature magically preserved and layered leaves woven throughout. A ' +
      'Medium humanoid requires one uninterrupted minute to don the gown, after which they ' +
      'become Small-sized. The gown functions similarly to reduce person but does not grant a ' +
      'size bonus to Dexterity, nor does it resize other carried items. Removing the gown also ' +
      'takes one uninterrupted minute and restores both wearer and garment to their original ' +
      'sizes. Creator must be an elf.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['reduce person'],
      specialRequirements: ['Creator must be an elf'],
      cost: 1750,
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
        target: 'special.reduce_to_small_size',
        value: 0,
        source: 'Gown of Graceful Petiteness',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Grasp of Granite
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-grasp-of-granite',
    name: 'Grasp of Granite',
    category: 'wondrous',
    source: 'Inner Sea World Guide',
    isOfficial: true,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION },
    ],
    casterLevel: 10,
    slot: 'hands',

    price: 12300,
    weight: 2,

    description:
      'A left-handed black iron gauntlet that transforms the wearer\'s left hand into ' +
      'supernaturally hardened black stone. The transformation causes initial pain, and the hand ' +
      'becomes unusable for tasks beyond striking; the wearer cannot carry a shield or secondary ' +
      'weapon in that hand and suffers a -4 penalty on two-handed skill checks. Removal requires ' +
      'remove curse, break enchantment, or similar magic. The gauntlet grants a +2 enhancement ' +
      'bonus to Strength, functions as a +1 adamantine gauntlet, enables use as a secondary ' +
      'natural attack, and grants one daily use of stone shape.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bull's strength", 'magic fang', 'stone shape'],
      cost: 6150,
    },
    physicalStats: {
      hardness: 20,
      hitPoints: 10,
      breakDC: 26,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.str',
        value: 2,
        source: 'Grasp of Granite',
      },
      {
        type: 'special',
        target: 'special.adamantine_gauntlet_natural_attack',
        value: 1,
        source: 'Grasp of Granite',
      },
      {
        type: 'penalty',
        target: 'special.two_handed_skill_checks',
        value: -4,
        source: 'Grasp of Granite',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'stone_shape',
            spellName: 'Stone Shape',
            casterLevel: 10,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Grave Salt
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-grave-salt',
    name: 'Grave Salt',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'none',

    price: 1100,
    weight: 5,

    description:
      'This pure white salt creates sanctified ground when poured in a circle, functioning like ' +
      'the consecrate spell. A single dose forms a 5-foot radius circle; additional doses each ' +
      'extend the radius by 5 feet. The sanctification lasts 1 hour per dose but can be ' +
      'disrupted if any corporeal creature uses a standard action to break the circle. One pouch ' +
      'contains 5 doses. The salt can also be thrown at incorporeal undead creatures up to ' +
      '15 feet away as a ranged touch attack; struck creatures must succeed at a DC 14 Will save ' +
      'or suffer 1d4 Charisma damage. Strong winds prevent this ranged application.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['consecrate'],
      cost: 550,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    charges: { maximum: 5 },

    effects: [
      {
        type: 'special',
        target: 'special.consecrate_circle_per_dose',
        value: 0,
        source: 'Grave Salt',
      },
      {
        type: 'special',
        target: 'special.charisma_damage_incorporeal_undead',
        value: 0,
        source: 'Grave Salt',
        condition: {
          type: 'target_type',
          params: { creatureType: 'incorporeal undead' },
          description: 'ranged touch vs incorporeal undead only; DC 14 Will save negates',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Grease, Mundanity
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-grease-mundanity',
    name: 'Grease, Mundanity',
    category: 'wondrous',
    source: 'Ultimate Magic',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 11,
    slot: 'none',

    price: 500,
    weight: 1,

    description:
      'This slippery, jet-black goo has a consistency comparable to warm lard. It functions as a ' +
      'splash weapon with a 10-foot range increment. When this substance strikes an animal ' +
      'companion, familiar, or bonded creature, it temporarily severs the magical connection ' +
      'between master and beast. Affected creatures lose abilities including empathic link, ' +
      'touch spell delivery, evasion, improved evasion, spell resistance, and shared spells. ' +
      'Animal-type familiars are treated as mundane animals rather than magical beasts for spell ' +
      'targeting purposes. The effect persists for 1d4 minutes or until removed through magical ' +
      'cleansing.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater dispel magic'],
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
        target: 'special.sever_companion_bond_1d4_minutes',
        value: 0,
        source: 'Grease, Mundanity',
        condition: {
          type: 'target_type',
          params: { creatureType: 'animal companion or familiar' },
          description: 'against animal companions, familiars, and bonded creatures only',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Greathelm of the Mammoth Lord
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-greathelm-of-the-mammoth-lord',
    name: 'Greathelm of the Mammoth Lord',
    category: 'wondrous',
    source: 'Inner Sea World Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'head',

    price: 24700,
    weight: 5,

    description:
      'This ivory-adorned hide helm features carved runes and curved tusks serving as cheek ' +
      'guards. The tusks function as a gore attack dealing 1d8 damage (1d6 for Small wearers), ' +
      'counting as magic and cold iron for damage reduction. The helm provides endure elements ' +
      'protection from cold environments and grants a +5 competence bonus on Handle Animal, ' +
      'Ride, and wild empathy checks with elephant-like creatures. On command, the wearer can ' +
      'use detect animals or plants or speak with animals (limited to elephant-like creatures). ' +
      'Once daily, the wearer can transform into a mammoth via beast shape III. Creator must ' +
      'have 5 ranks in Handle Animal and Ride.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [
        'beast shape III',
        'charm animal',
        'detect animals or plants',
        'endure elements',
        'speak with animals',
      ],
      specialRequirements: ['Creator must have 5 ranks in Handle Animal and Ride'],
      cost: 12350,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 16,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.gore_attack_1d8_magic_cold_iron',
        value: 0,
        source: 'Greathelm of the Mammoth Lord',
      },
      {
        type: 'special',
        target: 'special.endure_elements_cold',
        value: 0,
        source: 'Greathelm of the Mammoth Lord',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.handle_animal',
        value: 5,
        source: 'Greathelm of the Mammoth Lord',
        condition: {
          type: 'custom',
          params: { descriptor: 'elephant_like_creatures' },
          description: 'with elephant-like creatures only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.ride',
        value: 5,
        source: 'Greathelm of the Mammoth Lord',
        condition: {
          type: 'custom',
          params: { descriptor: 'elephant_like_creatures' },
          description: 'with elephant-like creatures only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'special.wild_empathy',
        value: 5,
        source: 'Greathelm of the Mammoth Lord',
        condition: {
          type: 'custom',
          params: { descriptor: 'elephant_like_creatures' },
          description: 'with elephant-like creatures only',
        },
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'detect_animals_or_plants',
            spellName: 'Detect Animals or Plants',
            casterLevel: 9,
            usesPerDay: 0,
            activationAction: 'standard',
          },
          {
            spellId: 'speak_with_animals',
            spellName: 'Speak with Animals',
            casterLevel: 9,
            usesPerDay: 0,
            activationAction: 'standard',
          },
        ],
      },
      {
        spells: [
          {
            spellId: 'beast_shape_iii',
            spellName: 'Beast Shape III',
            casterLevel: 9,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Greensurge Bomb
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-greensurge-bomb',
    name: 'Greensurge Bomb',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 750,
    weight: 1,

    description:
      'This magical item consists of a plant bulb with a root-based handle. When thrown as a ' +
      'splash weapon (10-foot range increment), it detonates upon ground contact, dispersing ' +
      'seeds across a 10-foot radius. Beginning the next turn, these seeds develop into thick ' +
      'undergrowth creating difficult terrain. The vegetation persists for 5 minutes regardless ' +
      'of surrounding environment — except on damaging surfaces like lava or acid — then ' +
      'deteriorates to dust.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['plant growth'],
      cost: 375,
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
        target: 'special.difficult_terrain_10ft_radius_5_minutes',
        value: 0,
        source: 'Greensurge Bomb',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Grim Lantern
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-grim-lantern',
    name: 'Grim Lantern',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'none',

    price: 5800,
    weight: 2,

    description:
      'This macabre item consists of a humanoid skull dangling from a short length of chain, ' +
      'containing trapped soulstuff that burns with heatless flame. The flickering light emanates ' +
      'from the skull\'s eye sockets and functions as a bullseye lantern. On command, the lantern ' +
      'can unleash its soulstuff as a sudden heat blast comparable to the burning hands spell, ' +
      'which extinguishes the lantern. When any living creature with at least 1 Hit Die dies ' +
      'within 30 feet of an empty grim lantern, the item automatically absorbs a soul fragment ' +
      'to restore its luminescence. The creator cannot be good-aligned.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['burning hands'],
      specialRequirements: ['Creator cannot be good-aligned'],
      cost: 2900,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 14,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.bullseye_lantern_light',
        value: 0,
        source: 'Grim Lantern',
      },
      {
        type: 'special',
        target: 'special.soul_absorption_recharge_30ft',
        value: 0,
        source: 'Grim Lantern',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'burning_hands',
            spellName: 'Burning Hands',
            casterLevel: 5,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Guardian Figurehead
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-guardian-figurehead',
    name: 'Guardian Figurehead',
    category: 'wondrous',
    source: 'Ultimate Combat',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'none',

    price: 1350,
    weight: 50,

    description:
      'An elegantly carved figurehead depicting a magical creature, divine figure, or local hero, ' +
      'typically affixed to a ship\'s prow or hull. Once daily as a swift action, the figurehead ' +
      'activates for 1 minute, granting all ranged attacks originating from anywhere other than ' +
      'the ship a 20% miss chance against the vessel and anyone aboard it. This protection ' +
      'excludes melee attacks, rays, and effects that do not require attack rolls (such as magic ' +
      'missile).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['entropic shield'],
      cost: 675,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 30,
      breakDC: 22,
    },

    activationCategory: 'command_word',
    activationAction: 'swift',

    effects: [
      {
        type: 'special',
        target: 'special.ship_ranged_miss_chance_20pct_1_minute',
        value: 20,
        source: 'Guardian Figurehead',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Guiding Scarab
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-guiding-scarab',
    name: 'Guiding Scarab',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.DIVINATION }],
    casterLevel: 12,
    slot: 'neck',

    price: 13000,
    weight: 0,

    description:
      'This golden scarab beetle provides multiple navigation and wayfinding benefits. The wearer ' +
      'receives a +5 competence bonus on Knowledge (geography) and Survival checks to avoid ' +
      'getting lost. The item allows the wearer to read any map, signpost, or way marker as if ' +
      'using comprehend languages. Once weekly, the wearer can spend 10 minutes concentrating ' +
      'for divination-like insight about the coming week\'s overland travels. As a full-round ' +
      'action, the wearer can direct the scarab to fly ahead toward a named or visualized ' +
      'location, revealing direction as if using find the path. While following the scarab, the ' +
      'wearer, any mount, and up to four designated allies gain tireless pursuit benefits. When ' +
      'the find the path effect ends, the guiding scarab crumbles to dust.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['find the path', 'know direction', 'tireless pursuit'],
      specialRequirements: ['5 ranks in Knowledge (geography)'],
      cost: 6500,
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
        target: 'skill.knowledge_geography',
        value: 5,
        source: 'Guiding Scarab',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.survival',
        value: 5,
        source: 'Guiding Scarab',
        condition: {
          type: 'custom',
          params: { descriptor: 'avoid_getting_lost' },
          description: 'to avoid getting lost only',
        },
      },
      {
        type: 'special',
        target: 'special.comprehend_languages_maps_and_markers',
        value: 0,
        source: 'Guiding Scarab',
      },
      {
        type: 'special',
        target: 'special.find_the_path_once_weekly_then_crumbles',
        value: 0,
        source: 'Guiding Scarab',
      },
    ],
  },
];
