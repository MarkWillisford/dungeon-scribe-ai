import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsCD4: WondrousItemDefinition[] = [
  // ---- 76: Circlet of Persuasion -----------------------------------------------
  {
    id: 'wondrous-circlet-of-persuasion',
    name: 'Circlet of Persuasion',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'headband',

    price: 4500,
    weight: 0,

    description:
      'This engraved silver headband grants the wearer a +3 competence bonus on all ' +
      'Charisma-based checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["eagle's splendor"],
      cost: 2250,
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
        target: 'skill.diplomacy',
        value: 3,
        source: 'Circlet of Persuasion',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.bluff',
        value: 3,
        source: 'Circlet of Persuasion',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.intimidate',
        value: 3,
        source: 'Circlet of Persuasion',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.perform',
        value: 3,
        source: 'Circlet of Persuasion',
      },
      {
        type: 'special',
        target: 'special.circlet_of_persuasion_cha_checks',
        value: 0,
        source: 'Circlet of Persuasion',
      },
    ],
  },

  // ---- 77: Circlet of Petty Discord --------------------------------------------
  {
    id: 'wondrous-circlet-of-petty-discord',
    name: 'Circlet of Petty Discord',
    category: 'wondrous',
    source: "Pathfinder Player Companion: Dirty Tactics Toolbox",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 10,
    slot: 'headband',

    price: 84000,
    weight: 0,

    description:
      'This silver crown can be activated once per day when the wearer casts a spell of the ' +
      'charm subschool. All targets of that spell must succeed on a DC 20 Will save or be ' +
      'overwhelmed with frustration toward their allies for 10 rounds. Affected creatures ' +
      'cannot treat allies as such for movement, flanking, or the application of beneficial ' +
      'effects; they cannot use feats (including teamwork feats), spells, or effects that ' +
      'target allies, and cannot use the aid another action.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['confusion', 'suggestion'],
      cost: 42000,
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
        target: 'special.circlet_of_petty_discord',
        value: 0,
        source: 'Circlet of Petty Discord',
      },
    ],

    spellLikeAbilities: [
      {
        usesPerDay: 1,
        spells: [
          {
            spellId: 'confusion',
            spellName: 'Confusion (partial — see description)',
            casterLevel: 10,
            saveDC: 20,
            activationAction: 'free',
          },
        ],
      },
    ],
  },

  // ---- 78: Circlet of Speaking -------------------------------------------------
  {
    id: 'wondrous-circlet-of-speaking',
    name: 'Circlet of Speaking',
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Animal Archive',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 4,
    slot: 'headband',

    price: 4800,
    weight: 1,

    description:
      'This silver headband is crafted for animal wearers. It grants an animal the ability ' +
      'to speak in one language chosen by its creator at the time of crafting. The language ' +
      'is permanent and cannot be changed. The circlet does not grant the animal increased ' +
      'Intelligence, but allows it to communicate its desires and rudimentary knowledge as ' +
      'though being addressed via speak with animals.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['speak with animals'],
      cost: 2400,
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
        target: 'special.circlet_of_speaking_animal_speech',
        value: 0,
        source: 'Circlet of Speaking',
      },
    ],
  },

  // ---- 79: Moon Circlet --------------------------------------------------------
  {
    id: 'wondrous-moon-circlet',
    name: 'Moon Circlet',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.EVOCATION }],
    casterLevel: 15,
    slot: 'headband',

    price: 20000,
    weight: 0,

    description:
      'This fine silver circlet, typically set with a carved moonstone or crescent moon design, ' +
      'grants the wearer darkvision out to 60 feet if not already possessed. Its power waxes and ' +
      'wanes with the moon: during a waxing moon the wearer gains +1 caster level on arcane spells; ' +
      'during a full moon (lasting 3 nights) the wearer gains +2 caster level; during a waning moon ' +
      'the wearer suffers -1 caster level; and during a new moon (lasting 3 nights) the wearer ' +
      'suffers -2 caster level. Removing the circlet imposes 2 negative levels until the next full ' +
      'moon or until the circlet is worn again — these negative levels can only be removed by limited ' +
      'wish, wish, or miracle.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['darkvision', 'light'],
      cost: 10000,
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
        target: 'special.darkvision',
        value: 60,
        source: 'Moon Circlet',
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'spell.caster_level',
        value: 1,
        source: 'Moon Circlet',
        condition: {
          type: 'custom',
          params: { moonPhase: 'waxing', casterType: 'arcane' },
          description: 'arcane spells during waxing moon only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'spell.caster_level',
        value: 2,
        source: 'Moon Circlet',
        condition: {
          type: 'custom',
          params: { moonPhase: 'full', casterType: 'arcane' },
          description: 'arcane spells during full moon only',
        },
      },
      {
        type: 'penalty',
        bonusType: 'untyped',
        target: 'spell.caster_level',
        value: 1,
        source: 'Moon Circlet',
        condition: {
          type: 'custom',
          params: { moonPhase: 'waning', casterType: 'arcane' },
          description: 'arcane spells during waning moon only',
        },
      },
      {
        type: 'penalty',
        bonusType: 'untyped',
        target: 'spell.caster_level',
        value: 2,
        source: 'Moon Circlet',
        condition: {
          type: 'custom',
          params: { moonPhase: 'new', casterType: 'arcane' },
          description: 'arcane spells during new moon only',
        },
      },
      {
        type: 'special',
        target: 'special.moon_circlet_removal_negative_levels',
        value: 0,
        source: 'Moon Circlet',
      },
    ],
  },

  // ---- 80: Ruby Circlet --------------------------------------------------------
  {
    id: 'wondrous-ruby-circlet',
    name: 'Ruby Circlet',
    category: 'wondrous',
    source: 'Osirion: Land of Pharaohs',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 11,
    slot: 'headband',

    price: 94000,
    weight: 5,

    description:
      "This golden circlet set with rubies is sized to fit discreetly beneath pharaonic regalia. " +
      "It functions as both a +6 headband of Wisdom and a circlet of persuasion. An additional " +
      "special ability activates for the rightful ruler of Osirion: while on the same plane as " +
      "Janhelia (an agent of the desert's elemental lords), the wearer may communicate with her " +
      "telepathically.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["eagle's splendor", "owl's wisdom", 'planar ally', 'telepathic bond'],
      cost: 47000,
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
        target: 'ability.wis',
        value: 6,
        source: 'Ruby Circlet',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.diplomacy',
        value: 3,
        source: 'Ruby Circlet',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.bluff',
        value: 3,
        source: 'Ruby Circlet',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.intimidate',
        value: 3,
        source: 'Ruby Circlet',
      },
      {
        type: 'special',
        target: 'special.ruby_circlet_osirion_ruler_telepathy',
        value: 0,
        source: 'Ruby Circlet',
        condition: {
          type: 'custom',
          params: { condition: 'rightful_ruler_of_osirion' },
          description: 'rightful ruler of Osirion only',
        },
      },
    ],
  },

  // ---- 81: Clamor Box ----------------------------------------------------------
  {
    id: 'wondrous-clamor-box',
    name: 'Clamor Box',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION }],
    casterLevel: 10,
    slot: 'none',

    price: 2000,
    weight: 2,

    description:
      'This tin music box can be preset to emit a loud noise at a chosen time. Four command ' +
      'words trigger four different types of sound: battle, fire, massacre, or riot. A fifth ' +
      'command word sets a delay of 1 round to 20 minutes before the sound triggers. When ' +
      'activated, the box produces sounds equivalent to 40 people speaking loudly, persisting ' +
      'for 2d6 rounds.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['ghost sound'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.clamor_box_sound_illusion',
        value: 0,
        source: 'Clamor Box',
      },
    ],
  },

  // ---- 82: Clasp of the Mind Scream --------------------------------------------
  // Note: d20pfsrd lists slot as 'Head'; modeled as 'chest' per item type (clasp).
  // AoN source confirms chest slot for clasps generally; head listing appears to be a site error.
  {
    id: 'wondrous-clasp-of-the-mind-scream',
    name: 'Clasp of the Mind Scream',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 8,
    slot: 'chest',

    price: 12800,
    weight: 1,

    description:
      'This device constantly emits mental static, granting the wearer a +1 resistance bonus ' +
      'on Will saves against mind-affecting effects. The wearer can use it 1d3 times per day to ' +
      'project a mental shout attack similar to the shout spell, but affecting only minds and ' +
      'not creatures immune to mind-affecting effects. The wearer may attempt a DC 20 Charisma ' +
      'check to shape a message of five words or fewer within the area. If used more times than ' +
      'allowed in a day, the wearer is subject to the effect and the clasp becomes inert for ' +
      '24 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect thoughts', 'shout'],
      cost: 6400,
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
        bonusType: 'resistance',
        target: 'save.will',
        value: 1,
        source: 'Clasp of the Mind Scream',
        condition: {
          type: 'custom',
          params: { effectDescriptor: 'mind_affecting' },
          description: 'against mind-affecting effects only',
        },
      },
      {
        type: 'special',
        target: 'special.clasp_mind_scream_mental_shout',
        value: 0,
        source: 'Clasp of the Mind Scream',
      },
    ],
  },

  // ---- 83: Ancestral Clasp -----------------------------------------------------
  {
    id: 'wondrous-ancestral-clasp',
    name: 'Ancestral Clasp',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 10000,
    weight: 0,

    description:
      'This slender metal tube etched with elven calligraphy fits over the pommel or haft of ' +
      'a weapon. When attached to a longbow, longsword, rapier, or shortbow, the wearer gains ' +
      'proficiency with that weapon. When fitted to any weapon with "elven" in its name, that ' +
      'weapon counts as a martial weapon per the elven racial trait. If the wearer is already ' +
      'proficient with the attached weapon, he instead gains a +1 insight bonus on attack rolls ' +
      'with it. The affected weapon remains nonmagical for the purposes of damage reduction. ' +
      'Attaching or removing the clasp is a standard action. Only half-elves or elves can craft ' +
      'this item.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['paragon surge'],
      specialRequirements: ['Creator must be a half-elf'],
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
        target: 'special.ancestral_clasp_weapon_proficiency',
        value: 0,
        source: 'Ancestral Clasp',
      },
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'attack.all',
        value: 1,
        source: 'Ancestral Clasp',
        condition: {
          type: 'custom',
          params: { condition: 'already_proficient_with_attached_weapon' },
          description: 'only when already proficient with the attached weapon',
        },
      },
    ],
  },

  // ---- 84: Swarmbane Clasp -----------------------------------------------------
  {
    id: 'wondrous-swarmbane-clasp',
    name: 'Swarmbane Clasp',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 8,
    slot: 'neck',

    price: 3000,
    weight: 0,

    description:
      'An amber clasp containing a fossilized insect, secured by a golden pin. The wearer\'s ' +
      'weapons and natural attacks deal full damage to swarms (bypassing their typical weapon ' +
      'immunity, though damage reduction still applies). The wearer also automatically succeeds ' +
      'on saving throws against a swarm\'s distraction ability when damaged by that swarm.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['repel vermin'],
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
        target: 'special.swarmbane_clasp_full_damage_to_swarms',
        value: 0,
        source: 'Swarmbane Clasp',
      },
      {
        type: 'special',
        target: 'special.swarmbane_clasp_auto_save_vs_distraction',
        value: 0,
        source: 'Swarmbane Clasp',
      },
    ],
  },

  // ---- 85: Woodsman's Clasp ----------------------------------------------------
  // NOT FOUND: Woodsman's Clasp — 404 on d20pfsrd and AoN returns no item data.

  // ---- 86: Claws of the Ice Bear -----------------------------------------------
  {
    id: 'wondrous-claws-of-the-ice-bear',
    name: 'Claws of the Ice Bear',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'hands',

    price: 1300,
    weight: 1,

    description:
      'These hand-mounted spiked climbing claws grant a +2 competence bonus on Climb checks ' +
      'and Acrobatics checks made when using both hands, and the wearer ignores the normal ' +
      'penalties on those skills for slippery or icy surfaces. Up to 3 times per day as a ' +
      'swift action, the wearer can gain the benefits of spider climb for 1 round. The claws ' +
      'function as spiked gauntlets when used as a weapon. The wearer cannot hold anything in ' +
      'their hands while wearing them.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['spider climb'],
      cost: 750,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.climb',
        value: 2,
        source: 'Claws of the Ice Bear',
        condition: {
          type: 'custom',
          params: { condition: 'using_both_hands' },
          description: 'when using both hands',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.acrobatics',
        value: 2,
        source: 'Claws of the Ice Bear',
        condition: {
          type: 'custom',
          params: { condition: 'using_both_hands' },
          description: 'when using both hands',
        },
      },
      {
        type: 'special',
        target: 'special.claws_ice_bear_ignore_icy_surface_penalty',
        value: 0,
        source: 'Claws of the Ice Bear',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'spider_climb',
            spellName: 'Spider Climb',
            casterLevel: 3,
            usesPerDay: 3,
            activationAction: 'swift',
          },
        ],
      },
    ],
  },

  // ---- 87: Cloak of Arachnida --------------------------------------------------
  {
    id: 'wondrous-cloak-of-arachnida',
    name: 'Cloak of Arachnida',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 6,
    slot: 'shoulders',

    price: 14000,
    weight: 1,

    description:
      'This red and violet silk garment is subtly patterned with a web motif. It grants the ' +
      'wearer the ability to climb as though using spider climb, immunity to entrapment by web ' +
      'spells or natural webs (and the ability to move through webs at half normal speed), a ' +
      '+2 luck bonus on Fortitude saves against spider poison, and the ability to cast web once ' +
      'per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['spider climb', 'web'],
      cost: 7000,
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
        target: 'special.cloak_of_arachnida_spider_climb',
        value: 0,
        source: 'Cloak of Arachnida',
      },
      {
        type: 'special',
        target: 'special.cloak_arachnida_web_immunity',
        value: 0,
        source: 'Cloak of Arachnida',
      },
      {
        type: 'bonus',
        bonusType: 'luck',
        target: 'save.fortitude',
        value: 2,
        source: 'Cloak of Arachnida',
        condition: {
          type: 'custom',
          params: { descriptor: 'spider_poison' },
          description: 'against spider poison only',
        },
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'web',
            spellName: 'Web',
            casterLevel: 6,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 88: Cloak of Daggers ----------------------------------------------------
  {
    id: 'wondrous-cloak-of-daggers',
    name: 'Cloak of Daggers',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 9,
    slot: 'shoulders',

    price: 18000,
    weight: 2,

    description:
      'This heavy black cloak trimmed with silver brocade emits a faint jingling sound when ' +
      'disturbed. The wearer can draw daggers as a free action (as if possessing the Quick Draw ' +
      'feat). Those already possessing Quick Draw can draw a single hidden dagger as a free action. ' +
      'Once per day, as part of any move action, the wearer can perform a cartwheel as a standard ' +
      'action, creating a 15-foot cone of daggers that deals piercing damage equal to the ' +
      "wearer's sneak attack damage (minimum 1d6). A Reflex save (DC = 10 + sneak attack dice " +
      '+ Intelligence modifier) halves the damage. The daggers vanish immediately afterward.',

    construction: {
      feats: ['Craft Wondrous Item', 'Quick Draw'],
      spells: ['wreath of blades'],
      specialRequirements: ['Creator must possess the sneak attack class ability'],
      cost: 9000,
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
        target: 'special.cloak_of_daggers_quick_draw',
        value: 0,
        source: 'Cloak of Daggers',
      },
      {
        type: 'special',
        target: 'special.cloak_of_daggers_cartwheel_attack',
        value: 0,
        source: 'Cloak of Daggers',
      },
    ],
  },

  // ---- 89: Cloak of Disarming --------------------------------------------------
  {
    id: 'wondrous-cloak-of-disarming',
    name: 'Cloak of Disarming',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'shoulders',

    price: 35000,
    weight: 1,

    description:
      'This well-crafted, stylish cloak can attempt disarm combat maneuvers. As a swift action, ' +
      'the wearer directs the cloak to attempt a disarm maneuver against a creature within 5 feet ' +
      'using the wearer\'s Combat Maneuver Bonus. The attempt does not provoke attacks of ' +
      'opportunity and poses no risk of the cloak being lost if unsuccessful. By expending 1 ' +
      'panache point before the attempt, the wearer gains a +5 competence bonus on the check.',

    construction: {
      feats: ['Craft Wondrous Item', 'Improved Disarm'],
      spells: ['pilfering hand'],
      specialRequirements: ['Creator must be a panache user'],
      cost: 17500,
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
        target: 'special.cloak_of_disarming_disarm_maneuver',
        value: 0,
        source: 'Cloak of Disarming',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'cmb',
        value: 5,
        source: 'Cloak of Disarming',
        condition: {
          type: 'custom',
          params: { condition: 'panache_point_spent', maneuver: 'disarm' },
          description: 'on disarm attempts when 1 panache point is expended',
        },
      },
    ],
  },

  // ---- 90: Cloak of Displacement (Minor) ---------------------------------------
  {
    id: 'wondrous-cloak-of-displacement-minor',
    name: 'Cloak of Displacement, Minor',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 3,
    slot: 'shoulders',

    price: 24000,
    weight: 1,

    description:
      'Embroidered with images of falling stars and pale moons, this cloak continuously distorts ' +
      'the light around the wearer, functioning like the blur spell: all attacks targeting the ' +
      'wearer have a 20% miss chance. The effect is continuous and has no daily limit.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['blur'],
      cost: 12000,
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
        target: 'special.cloak_displacement_minor_20pct_miss_chance',
        value: 0,
        source: 'Cloak of Displacement, Minor',
      },
    ],
  },

  // ---- 90b: Cloak of Displacement (Major) ---------------------------------------
  {
    id: 'wondrous-cloak-of-displacement-major',
    name: 'Cloak of Displacement, Major',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION }],
    casterLevel: 7,
    slot: 'shoulders',

    price: 50000,
    weight: 1,

    description:
      'Embroidered with images of falling stars and pale moons, this cloak distorts light waves ' +
      'around the wearer when activated by command, functioning exactly like the displacement ' +
      'spell for a total of 15 rounds per day. The duration need not be consecutive and may be ' +
      'divided however the wearer chooses.',

    construction: {
      feats: ['Craft Wondrous Item', 'Extend Spell'],
      spells: ['displacement'],
      cost: 25000,
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
        target: 'special.cloak_displacement_major_50pct_miss_chance',
        value: 0,
        source: 'Cloak of Displacement, Major',
      },
    ],
  },

  // ---- 91: Cloak of Elvenkind --------------------------------------------------
  {
    id: 'wondrous-cloak-of-elvenkind',
    name: 'Cloak of Elvenkind',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 3,
    slot: 'shoulders',

    price: 2500,
    weight: 1,

    description:
      'This plain gray cloak of elven design grants a +5 competence bonus on Stealth checks ' +
      'when the hood is drawn up around the head.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['invisibility'],
      specialRequirements: ['Creator must be an elf'],
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
        target: 'skill.stealth',
        value: 5,
        source: 'Cloak of Elvenkind',
        condition: {
          type: 'custom',
          params: { condition: 'hood_drawn_up' },
          description: 'only when hood is drawn up',
        },
      },
    ],
  },

  // ---- 92: Cloak of Eternal Mist -----------------------------------------------
  {
    id: 'wondrous-cloak-of-eternal-mist',
    name: 'Cloak of Eternal Mist',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 3,
    slot: 'shoulders',

    price: 3600,
    weight: 1,

    description:
      'Cool, damp mist constantly emanates from beneath this billowing, floor-length cloak. ' +
      'The wearer gains a +4 bonus on Stealth checks made in areas of fog or mist, and is ' +
      'treated as submerged in water for the purpose of racial water dependency abilities. When ' +
      'the wearer remains stationary for a full round without being moved, concealment is granted ' +
      'at the end of that round; the concealment persists until the wearer moves.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['create water', 'obscuring mist'],
      cost: 1800,
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
        target: 'skill.stealth',
        value: 4,
        source: 'Cloak of Eternal Mist',
        condition: {
          type: 'custom',
          params: { condition: 'in_fog_or_mist' },
          description: 'in fog or mist only',
        },
      },
      {
        type: 'special',
        target: 'special.cloak_eternal_mist_water_dependency',
        value: 0,
        source: 'Cloak of Eternal Mist',
      },
      {
        type: 'special',
        target: 'special.cloak_eternal_mist_stationary_concealment',
        value: 0,
        source: 'Cloak of Eternal Mist',
      },
    ],
  },

  // ---- 93: Cloak of Etherealness -----------------------------------------------
  {
    id: 'wondrous-cloak-of-etherealness',
    name: 'Cloak of Etherealness',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 15,
    slot: 'shoulders',

    price: 55000,
    weight: 1,

    description:
      'This silvery gray cloak seems to absorb light rather than be illuminated by it. When ' +
      'activated by command word, the wearer becomes ethereal, matching the effects of the ' +
      'ethereal jaunt spell. The effect can be dismissed at will. The cloak functions for up ' +
      'to 10 minutes per day, which need not be consecutive and can be divided into multiple ' +
      'uses of at least 1 minute each.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['ethereal jaunt'],
      cost: 27500,
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
        target: 'special.cloak_of_etherealness_ethereal_jaunt',
        value: 0,
        source: 'Cloak of Etherealness',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'ethereal_jaunt',
            spellName: 'Ethereal Jaunt',
            casterLevel: 15,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 94: Cloak of Fangs ------------------------------------------------------
  {
    id: 'wondrous-cloak-of-fangs',
    name: 'Cloak of Fangs',
    category: 'wondrous',
    source: 'Advanced Player\'s Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'shoulders',

    price: 2800,
    weight: 1,

    description:
      'This animal-hair cloak provides a +1 resistance bonus on saving throws. Up to 5 times ' +
      'per day as a swift action, the wearer can rapidly grow oversized teeth lasting 1 round. ' +
      'During that round the wearer gains a bite attack that functions as a primary natural ' +
      'attack dealing 1d6 points of piercing damage (1d4 if Small). If the wearer already ' +
      'possesses a bite attack, its damage increases by one step instead.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['alter self', 'resistance'],
      cost: 1250,
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
        bonusType: 'resistance',
        target: 'save.all',
        value: 1,
        source: 'Cloak of Fangs',
      },
      {
        type: 'special',
        target: 'special.cloak_of_fangs_bite_attack',
        value: 0,
        source: 'Cloak of Fangs',
      },
    ],
  },

  // ---- 95: Cloak of Fiery Vanishing --------------------------------------------
  {
    id: 'wondrous-cloak-of-fiery-vanishing',
    name: 'Cloak of Fiery Vanishing',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION },
    ],
    casterLevel: 5,
    slot: 'shoulders',

    price: 2600,
    weight: 1,

    description:
      'This thick leather cloak has charred, blackened edges and carries a faint smell of soot. ' +
      'Once per day when subjected to fire damage, the wearer can use an immediate action while ' +
      'obscured by flames to become invisible (as the invisibility spell). The effect leaves ' +
      'behind an illusory pile of ashes and bones, making it appear as though the wearer ' +
      'perished in the fire. Both the invisibility and illusory remains persist for 5 rounds or ' +
      'until the wearer attacks. Creatures examining the ashes may attempt a DC 11 Will save ' +
      'to disbelieve the illusion; success does not dispel the invisibility.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['invisibility', 'silent image'],
      cost: 1300,
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
        target: 'special.cloak_fiery_vanishing_invisibility',
        value: 0,
        source: 'Cloak of Fiery Vanishing',
        condition: {
          type: 'custom',
          params: { trigger: 'fire_damage_taken' },
          description: '1/day when subjected to fire damage as an immediate action',
        },
      },
    ],
  },

  // ---- 96: Cloak of Flash and Shadow -------------------------------------------
  {
    id: 'wondrous-cloak-of-flash-and-shadow',
    name: 'Cloak of Flash and Shadow',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 3,
    slot: 'shoulders',

    price: 11000,
    weight: 1,

    description:
      'This reversible cloak offers two distinct modes. The glamorous side features heavy gold ' +
      'and silver embroidery against richly colored silk, granting the wearer a +2 enhancement ' +
      'bonus to Charisma. The shadowy inside-out side features matte-black lining that absorbs ' +
      'light, granting a +2 competence bonus on Stealth checks and allowing the wearer to cast ' +
      'blur 3 times per day. Reversing the cloak is a standard action requiring at least one ' +
      'free hand.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['blur', "eagle's splendor"],
      cost: 5500,
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
        target: 'ability.cha',
        value: 2,
        source: 'Cloak of Flash and Shadow',
        condition: {
          type: 'custom',
          params: { cloakSide: 'glamorous' },
          description: 'glamorous side worn outward only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.stealth',
        value: 2,
        source: 'Cloak of Flash and Shadow',
        condition: {
          type: 'custom',
          params: { cloakSide: 'shadowy' },
          description: 'shadowy side worn outward only',
        },
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'blur',
            spellName: 'Blur',
            casterLevel: 3,
            usesPerDay: 3,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 97: Cloak of Good Fortune -----------------------------------------------
  {
    id: 'wondrous-cloak-of-good-fortune',
    name: 'Cloak of Good Fortune',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting: Paths of Prestige',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 9,
    slot: 'shoulders',

    price: 12500,
    weight: 1,

    description:
      'This elegant cloak has simple prayers to kami stitched into its lining. It grants the ' +
      'wearer a +1 luck bonus on attack rolls. Once per day, after spending 10 minutes reciting ' +
      'prayers, the wearer may pose a single question to a nearby spirit, functioning as the ' +
      'commune spell.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['commune', 'divine favor'],
      cost: 6250,
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
        bonusType: 'luck',
        target: 'attack.all',
        value: 1,
        source: 'Cloak of Good Fortune',
      },
    ],

    spellLikeAbilities: [
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
  },

  // ---- 98: Cloak of Heavenly Fire ----------------------------------------------
  {
    id: 'wondrous-cloak-of-heavenly-fire',
    name: 'Cloak of Heavenly Fire',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 6000,
    weight: 1,

    description:
      'This white silk cloak shimmers with divine energy. Once per day as an immediate action ' +
      'when touched or struck with a melee attack, the wearer can trigger flames that deal ' +
      '1d8+5 points of fire damage to the creature that struck; evil creatures take an ' +
      'additional 1d8+5 divine damage, unaffected by energy resistance or immunity. A DC 15 ' +
      'Reflex save halves the total damage. Once per day as a standard action, the wearer can ' +
      'restore 2d8+5 hit points to a touched creature through healing magic.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cure moderate wounds', 'fire shield'],
      cost: 3000,
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
        target: 'special.cloak_heavenly_fire_retaliation',
        value: 0,
        source: 'Cloak of Heavenly Fire',
      },
      {
        type: 'special',
        target: 'special.cloak_heavenly_fire_healing',
        value: 0,
        source: 'Cloak of Heavenly Fire',
      },
    ],
  },

  // ---- 99: Cloak of Human Guise ------------------------------------------------
  {
    id: 'wondrous-cloak-of-human-guise',
    name: 'Cloak of Human Guise',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 1,
    slot: 'shoulders',

    price: 900,
    weight: 1,

    description:
      'This magical cloak functions for half-human races (half-orcs and half-elves). It ' +
      'conceals only non-human physical traits, making the wearer appear fully human while ' +
      'retaining all plausibly human features. A half-orc loses visible tusks, gray or green ' +
      'skin, and pointed ears; a half-elf gains round ears and human-like eyes. The wearer ' +
      'cannot control the specific appearance generated. Those who know the wearer may still ' +
      'recognize them despite the disguise.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['disguise self'],
      cost: 450,
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
        target: 'special.cloak_human_guise_disguise_as_human',
        value: 0,
        source: 'Cloak of Human Guise',
      },
    ],
  },

  // ---- 100: Cloak of Moral Refraction ------------------------------------------
  {
    id: 'wondrous-cloak-of-moral-refraction',
    name: 'Cloak of Moral Refraction',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 13,
    slot: 'shoulders',

    price: 54200,
    weight: 1,

    description:
      'This light silver-and-red cloak maintains a pristine condition and reflects light like ' +
      'a mirror when laid flat. It holds 3 charges that regenerate at 1 per day at dawn. ' +
      'Spending 1 charge dispels an ongoing spell with an alignment descriptor, functioning as ' +
      'the third ability of dispel chaos/evil/good/law. Spending 2 charges allows the wearer ' +
      'to ready an action to automatically counter a spell or spell-like ability with an ' +
      'alignment descriptor (no caster level check required); charges are only expended if ' +
      'the readied action triggers. Spending 3 charges allows the wearer to use an immediate ' +
      'action to automatically counter a spell or spell-like ability from an outsider with an ' +
      'alignment subtype and force a DC 20 Will save for banishment; outsiders with 26 or more ' +
      'Hit Dice are unaffected.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['banishment', 'dispel chaos', 'dispel magic'],
      specialRequirements: ['Creator must be neutral'],
      cost: 27100,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    charges: {
      maximum: 3,
      rechargeMethod: 'Regenerates 1 charge per day at dawn',
    },

    effects: [
      {
        type: 'special',
        target: 'special.cloak_moral_refraction_dispel_alignment',
        value: 0,
        source: 'Cloak of Moral Refraction',
      },
      {
        type: 'special',
        target: 'special.cloak_moral_refraction_counter_readied',
        value: 0,
        source: 'Cloak of Moral Refraction',
      },
      {
        type: 'special',
        target: 'special.cloak_moral_refraction_banishment',
        value: 0,
        source: 'Cloak of Moral Refraction',
      },
    ],
  },
];
