import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsCD2: WondrousItemDefinition[] = [
  // ---- 26. Cape, Eagle --------------------------------------------------------
  {
    id: 'wondrous-cape-eagle',
    name: 'Cape, Eagle',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'shoulders',

    price: 7000,
    weight: 1,

    description:
      'This cape is decorated with large eagle feathers across the back and arms. It grants the wearer ' +
      'the benefits of feather fall automatically whenever she falls more than 5 feet. Once per day, ' +
      'the wearer can transform into an eagle for up to 10 minutes, gaining an 80-foot fly speed and ' +
      'a +5 bonus on Perception checks while in that form.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['beast shape I', 'feather fall', 'perceive cues'],
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
        type: 'special',
        target: 'special.feather_fall_automatic',
        value: 0,
        source: 'Cape, Eagle',
      },
      {
        type: 'special',
        target: 'special.beast_shape_eagle',
        value: 0,
        source: 'Cape, Eagle',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'beast_shape_i',
            spellName: 'Beast Shape I (eagle only)',
            casterLevel: 7,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 27. Cape, Highwayman's -------------------------------------------------
  {
    id: 'wondrous-cape-highwaymans',
    name: "Cape, Highwayman's",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'shoulders',

    price: 32500,
    weight: 1,

    description:
      'This reversible cape offers two distinct configurations. When displaying the bright-colored side ' +
      'outward, it grants a +5 competence bonus on Bluff checks. When reversed to show its camouflage ' +
      'patterns, it grants a +5 competence bonus on Stealth checks instead. Reversing the cape is a move ' +
      'action. Additionally, the wearer may expend an immediate action to make an Escape Artist check ' +
      'against grappling, binding, or restraint effects, functioning as the liberating command spell.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['liberating command'],
      cost: 16250,
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
        target: 'skill.bluff',
        value: 5,
        source: "Cape, Highwayman's",
        condition: {
          type: 'custom',
          params: { side: 'bright' },
          description: 'only while bright side is displayed outward',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.stealth',
        value: 5,
        source: "Cape, Highwayman's",
        condition: {
          type: 'custom',
          params: { side: 'camouflage' },
          description: 'only while camouflage side is displayed outward',
        },
      },
      {
        type: 'special',
        target: 'special.escape_artist_immediate_liberating_command',
        value: 0,
        source: "Cape, Highwayman's",
      },
    ],
  },

  // ---- 28. Cape, Jellyfish ----------------------------------------------------
  {
    id: 'wondrous-cape-jellyfish',
    name: 'Cape, Jellyfish',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'shoulders',

    price: 19200,
    weight: 1,

    description:
      'This translucent cape grants the wearer water breathing and a 20-foot swim speed. While fully ' +
      'submerged in salt water, the wearer gains near-invisibility, causing all attacks against her to ' +
      'suffer a 20% miss chance. At the end of the wearer\'s turn while submerged, stinging tentacles ' +
      'lash out against all adjacent creatures, dealing 1 point of electricity damage and requiring a ' +
      'DC 16 Fortitude save or becoming sickened for 1 round (poison effect).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['beast shape II', 'water breathing'],
      cost: 9600,
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
        target: 'special.swim_speed',
        value: 20,
        source: 'Cape, Jellyfish',
      },
      {
        type: 'special',
        target: 'special.water_breathing',
        value: 0,
        source: 'Cape, Jellyfish',
      },
      {
        type: 'special',
        target: 'special.jellyfish_concealment_salt_water',
        value: 0,
        source: 'Cape, Jellyfish',
        condition: {
          type: 'custom',
          params: { environment: 'salt_water_submerged' },
          description: 'only while fully submerged in salt water',
        },
      },
      {
        type: 'special',
        target: 'special.jellyfish_stinging_tentacles',
        value: 0,
        source: 'Cape, Jellyfish',
        condition: {
          type: 'custom',
          params: { environment: 'salt_water_submerged' },
          description: 'only while fully submerged in salt water',
        },
      },
    ],
  },

  // ---- 29. Cape, Slashing -----------------------------------------------------
  {
    id: 'wondrous-cape-slashing',
    name: 'Cape, Slashing',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION },
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 5,
    slot: 'shoulders',

    price: 20000,
    weight: 1,

    description:
      'This burgundy cloak is trimmed with mithral plates along its edges. As a full-round action, the ' +
      'wearer can spin to slash with the cape, making an attack against each creature within 5 feet using ' +
      "the wearer's highest base attack bonus. Each hit deals 2d6 damage. The wearer is automatically " +
      'proficient with this attack. The cape can be enhanced as a melee weapon.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['blade barrier'],
      cost: 10000,
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
        target: 'special.cape_slashing_spin_attack',
        value: 0,
        source: 'Cape, Slashing',
      },
    ],
  },

  // ---- 30. Captain's Locker ---------------------------------------------------
  {
    id: 'wondrous-captains-locker',
    name: "Captain's Locker",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 13,
    slot: 'none',

    price: 30000,
    weight: 150,

    description:
      'This iron-banded sea chest measures 2-1/2 by 3 by 4 feet and is decorated with chains and brass ' +
      'skulls. Its interior functions as a type IV bag of holding, capable of holding up to 2,500 pounds ' +
      'or 250 cubic feet. The chest remains watertight and undamaged by water immersion. When placed in ' +
      "a ship's hold or cargo vehicle, it increases cargo capacity by 50% without adding to the vehicle's " +
      'weight. Removing the chest while overfilled ejects excess cargo, dealing 3d6 damage to anyone ' +
      'standing within 5 feet of the opening.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["mage's magnificent mansion", 'secret chest'],
      cost: 15000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 15,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.extradimensional_storage',
        value: 0,
        source: "Captain's Locker",
      },
      {
        type: 'special',
        target: 'special.cargo_capacity_increase',
        value: 50,
        source: "Captain's Locker",
      },
    ],
  },

  // ---- 31. Captain's Eye Patch ------------------------------------------------
  {
    id: 'wondrous-captains-eye-patch',
    name: "Captain's Eye Patch",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 11,
    slot: 'eyes',

    price: 46000,
    weight: 0,

    description:
      'This magical eye patch provides the wearer with darkvision to 60 feet. Additionally, the wearer ' +
      'can see through magical darkness, including that created by deeper darkness, for up to 11 minutes ' +
      'per day. This ability may be used in 1-minute increments.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['darkvision', 'true seeing'],
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
        type: 'special',
        target: 'special.darkvision',
        value: 60,
        source: "Captain's Eye Patch",
      },
      {
        type: 'special',
        target: 'special.see_through_magical_darkness',
        value: 11,
        source: "Captain's Eye Patch",
      },
    ],
  },

  // ---- 32. Caravan Guardian Statuette -----------------------------------------
  {
    id: 'wondrous-caravan-guardian-statuette',
    name: 'Caravan Guardian Statuette',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION },
    ],
    casterLevel: 3,
    slot: 'none',

    price: 16000,
    weight: 1,

    description:
      'This wooden eagle-shaped statuette alerts designated allies to intruders and summons an eagle ' +
      'guardian. Once per day, the wielder designates up to five allies. When any creature approaches ' +
      'within 20 feet without speaking the command word within one round, an eagle materializes and ' +
      'attacks. All designated allies receive a mental warning as per the alarm spell. Only one eagle ' +
      'can be summoned per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['alarm', "summon nature's ally I"],
      cost: 8000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.alarm_mental_alert',
        value: 0,
        source: 'Caravan Guardian Statuette',
      },
      {
        type: 'special',
        target: 'special.summon_eagle_guardian',
        value: 0,
        source: 'Caravan Guardian Statuette',
      },
    ],
  },

  // ---- 33. Carcanet of Detention ----------------------------------------------
  {
    id: 'wondrous-carcanet-of-detention',
    name: 'Carcanet of Detention',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 4,
    slot: 'neck',

    price: 7200,
    weight: 0,

    description:
      'This iron link necklace grants the wearer one daily use to animate and extend itself toward one ' +
      'Medium or smaller creature within 15 feet. The target must make a DC 15 Reflex save or become ' +
      'entangled and unable to move from its current location. The wearer can dismiss the effect as a ' +
      'swift action. The target may attempt a new save each full round. The duration extends to 10 minutes ' +
      'if not dismissed. The animated chain has hardness 10 and 15 hit points.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate rope'],
      cost: 3600,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.animate_entangle_target',
        value: 0,
        source: 'Carcanet of Detention',
      },
    ],
  },

  // ---- 34. Carpet of Comfort --------------------------------------------------
  {
    id: 'wondrous-carpet-of-comfort',
    name: 'Carpet of Comfort',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'none',

    price: 90000,
    weight: 15,

    description:
      'This 10-foot by 10-foot flying carpet protects passengers from the elements during flight, ' +
      'functioning as the tiny hut spell (shielding from wind and extreme temperatures without creating ' +
      'an opaque sphere). Once daily while grounded, a command word converts it into an opulent silk tent ' +
      'matching the functionality of the secure shelter spell.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['overland flight', 'secure shelter', 'tiny hut'],
      cost: 45000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.flying_carpet',
        value: 0,
        source: 'Carpet of Comfort',
      },
      {
        type: 'special',
        target: 'special.tiny_hut_environmental_protection',
        value: 0,
        source: 'Carpet of Comfort',
      },
      {
        type: 'special',
        target: 'special.secure_shelter_tent',
        value: 0,
        source: 'Carpet of Comfort',
      },
    ],
  },

  // ---- 35. Carpet of Flying (5×5 ft.) ----------------------------------------
  {
    id: 'wondrous-carpet-of-flying-5x5',
    name: 'Carpet of Flying (5 ft. × 5 ft.)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'none',

    price: 20000,
    weight: 8,

    description:
      'This 5-foot by 5-foot carpet can carry up to 200 pounds and flies at a speed of 40 feet. ' +
      'Activation is via spoken command word; direction is controlled verbally. The carpet can hover ' +
      'without requiring skill checks and grants a +5 bonus on Fly checks made while using it. Carrying ' +
      'double the weight capacity reduces speed to 30 feet.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['overland flight'],
      cost: 10000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.flying_carpet',
        value: 0,
        source: 'Carpet of Flying (5 ft. × 5 ft.)',
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'skill.fly',
        value: 5,
        source: 'Carpet of Flying (5 ft. × 5 ft.)',
      },
    ],
  },

  // ---- 35. Carpet of Flying (5×10 ft.) ---------------------------------------
  {
    id: 'wondrous-carpet-of-flying-5x10',
    name: 'Carpet of Flying (5 ft. × 10 ft.)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'none',

    price: 35000,
    weight: 10,

    description:
      'This 5-foot by 10-foot carpet can carry up to 400 pounds and flies at a speed of 40 feet. ' +
      'Activation is via spoken command word; direction is controlled verbally. The carpet can hover ' +
      'without requiring skill checks and grants a +5 bonus on Fly checks made while using it. Carrying ' +
      'double the weight capacity reduces speed to 30 feet.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['overland flight'],
      cost: 17500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.flying_carpet',
        value: 0,
        source: 'Carpet of Flying (5 ft. × 10 ft.)',
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'skill.fly',
        value: 5,
        source: 'Carpet of Flying (5 ft. × 10 ft.)',
      },
    ],
  },

  // ---- 35. Carpet of Flying (10×10 ft.) --------------------------------------
  {
    id: 'wondrous-carpet-of-flying-10x10',
    name: 'Carpet of Flying (10 ft. × 10 ft.)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'none',

    price: 60000,
    weight: 15,

    description:
      'This 10-foot by 10-foot carpet can carry up to 800 pounds and flies at a speed of 40 feet. ' +
      'Activation is via spoken command word; direction is controlled verbally. The carpet can hover ' +
      'without requiring skill checks and grants a +5 bonus on Fly checks made while using it. Carrying ' +
      'double the weight capacity reduces speed to 30 feet.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['overland flight'],
      cost: 30000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.flying_carpet',
        value: 0,
        source: 'Carpet of Flying (10 ft. × 10 ft.)',
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'skill.fly',
        value: 5,
        source: 'Carpet of Flying (10 ft. × 10 ft.)',
      },
    ],
  },

  // ---- 36. Cassock of the Clergy ----------------------------------------------
  {
    id: 'wondrous-cassock-of-the-clergy',
    name: 'Cassock of the Clergy',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 1,
    slot: 'body',

    price: 4600,
    weight: 1,

    description:
      "This vestment displays the wearer's holy symbol and functions as a divine focus. The wearer " +
      'gains a +3 competence bonus on Charisma-based checks to influence creatures that share her ' +
      "alignment or her deity's alignment. The wearer may use bless and sanctuary (DC 11) once per day " +
      'each. Prepared divine spellcasters may prepare one additional orison per day. For spontaneous ' +
      'divine casters, once per day the wearer may spend 1 hour in prayer to gain an orison as a spell ' +
      'known for 24 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bless', 'sanctuary'],
      specialRequirements: ['Creator must be a divine spellcaster'],
      cost: 2300,
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
        source: 'Cassock of the Clergy',
        condition: {
          type: 'custom',
          params: { targetAlignment: 'matching_wearer_or_deity' },
          description: 'only to influence creatures matching wearer or deity alignment',
        },
      },
      {
        type: 'special',
        target: 'special.divine_focus',
        value: 0,
        source: 'Cassock of the Clergy',
      },
      {
        type: 'special',
        target: 'special.extra_orison_preparation',
        value: 0,
        source: 'Cassock of the Clergy',
      },
    ],

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'bless',
            spellName: 'Bless',
            casterLevel: 1,
            usesPerDay: 1,
            activationAction: 'standard',
          },
          {
            spellId: 'sanctuary',
            spellName: 'Sanctuary',
            casterLevel: 1,
            usesPerDay: 1,
            saveDC: 11,
            activationAction: 'standard',
          },
        ],
      },
    ],
  },

  // ---- 37. Cathedral Pit Stone ------------------------------------------------
  {
    id: 'wondrous-cathedral-pit-stone',
    name: 'Cathedral Pit Stone',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 600,
    weight: 0,

    description:
      'This golden ribbon-wrapped smooth ring of basalt can be thrown as a ranged attack with a 20-foot ' +
      'range increment, or dropped onto a grid intersection. When thrown at a target, it creates a ' +
      '10-foot-wide, 20-foot-deep moat per the create pit spell, leaving the target on a stone pillar. ' +
      'When dropped on a grid intersection, nearby creatures must make DC 13 Reflex saves. The pit ' +
      'disappears after 6 rounds. The stone is consumed on use.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['create pit'],
      cost: 300,
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
        target: 'special.create_pit_thrown',
        value: 0,
        source: 'Cathedral Pit Stone',
      },
    ],
  },

  // ---- 38. Cauldron of Brewing ------------------------------------------------
  {
    id: 'wondrous-cauldron-of-brewing',
    name: 'Cauldron of Brewing',
    category: 'wondrous',
    source: 'Advanced Player\'s Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 3000,
    weight: 5,

    description:
      'This magical cooking vessel maintains any liquid temperature from room temperature to boiling salt ' +
      'water while remaining cool to the touch externally. It grants a +5 competence bonus on Craft ' +
      '(alchemy) skill checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must be trained in Craft (alchemy)'],
      cost: 1500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.craft',
        value: 5,
        source: 'Cauldron of Brewing',
        condition: {
          type: 'custom',
          params: { craftType: 'alchemy' },
          description: 'Craft (alchemy) checks only',
        },
      },
    ],
  },

  // ---- 39. Cauldron of Fireworks ----------------------------------------------
  {
    id: 'wondrous-cauldron-of-fireworks',
    name: 'Cauldron of Fireworks',
    category: 'wondrous',
    source: 'Ultimate Magic',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 17,
    slot: 'none',

    price: 7500,
    weight: 25,

    description:
      "This heavy cauldron emits colorful smoke when potions are poured into it. It stores potions up " +
      "to a number equal to the user's Intelligence modifier. Pouring a potion in is a standard action. " +
      "The wielder can fire a stored potion at any target within 30 feet as a standard action, " +
      "automatically affecting willing allies or requiring a ranged touch attack against unwilling " +
      "creatures. Only the original user can command the cauldron; a new user adding potions destroys " +
      "previously stored ones. Holders of the cauldron hex can fire potions stored by another user.",

    construction: {
      feats: ['Brew Potion', 'Craft Wondrous Item', 'Reach Spell'],
      spells: [],
      specialRequirements: ['cauldron hex'],
      cost: 3750,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.cauldron_fireworks_potion_launcher',
        value: 0,
        source: 'Cauldron of Fireworks',
      },
    ],
  },

  // ---- 40. Cauldron of Flying -------------------------------------------------
  {
    id: 'wondrous-cauldron-of-flying',
    name: 'Cauldron of Flying',
    category: 'wondrous',
    source: 'Advanced Player\'s Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'none',

    price: 40000,
    weight: 100,

    description:
      'This iron pot can accommodate two Medium humanoids. Activated by command word, it flies using ' +
      'overland flight mechanics, carrying up to 500 additional pounds at normal speed. Carrying double ' +
      'the capacity reduces speed to 30 feet. The vessel can hover without requiring skill checks, ' +
      'provides partial cover to passengers, and has hardness 10 and 60 hit points.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['overland flight'],
      cost: 20000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 60,
      breakDC: 25,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.flying_cauldron',
        value: 0,
        source: 'Cauldron of Flying',
      },
    ],
  },

  // ---- 41. Cauldron of Plenty -------------------------------------------------
  {
    id: 'wondrous-cauldron-of-plenty',
    name: 'Cauldron of Plenty',
    category: 'wondrous',
    source: 'Advanced Player\'s Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 12,
    slot: 'none',

    price: 15000,
    weight: 25,

    description:
      'This magical iron pot produces nourishing food for up to 36 people per day. Once per week, it ' +
      "can create a heroes' feast for up to 12 people. The cauldron requires no fire or ingredients and " +
      'produces food instantaneously.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['create food and water', "heroes' feast"],
      cost: 7500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.create_food_36_per_day',
        value: 0,
        source: 'Cauldron of Plenty',
      },
      {
        type: 'special',
        target: 'special.heroes_feast_weekly',
        value: 0,
        source: 'Cauldron of Plenty',
      },
    ],
  },

  // ---- 42. Cauldron of Resurrection -------------------------------------------
  {
    id: 'wondrous-cauldron-of-resurrection',
    name: 'Cauldron of Resurrection',
    category: 'wondrous',
    source: 'Advanced Player\'s Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 13,
    slot: 'none',

    price: 33000,
    weight: 35,

    description:
      'This iron cauldron shaped like a monstrous mouth can accommodate a Medium creature. When filled ' +
      'with pure water and sacred herbs, it restores deceased creatures to life. Using materials worth ' +
      '5,000 gp produces a raise dead effect; using materials worth 10,000 gp produces a resurrection ' +
      'effect. The item functions once per day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resurrection'],
      cost: 16500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.raise_dead_or_resurrection_daily',
        value: 0,
        source: 'Cauldron of Resurrection',
      },
    ],
  },

  // ---- 43. Cauldron of Seeing -------------------------------------------------
  {
    id: 'wondrous-cauldron-of-seeing',
    name: 'Cauldron of Seeing',
    category: 'wondrous',
    source: 'Advanced Player\'s Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 10,
    slot: 'none',

    price: 42000,
    weight: 5,

    description:
      'When filled with liquid, this small cauldron enables the user to see over virtually any distance ' +
      'as if using the scrying spell. It may have additional powers comparable to those of a crystal ball ' +
      'for equivalent prices.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['scrying'],
      cost: 21000,
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
        target: 'special.scrying_cauldron',
        value: 0,
        source: 'Cauldron of Seeing',
      },
    ],
  },

  // ---- 44. Cauldron of the Dead -----------------------------------------------
  {
    id: 'wondrous-cauldron-of-the-dead',
    name: 'Cauldron of the Dead',
    category: 'wondrous',
    source: 'Advanced Player\'s Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 9,
    slot: 'none',

    price: 30000,
    weight: 35,

    description:
      'This dark iron vessel can hold one Medium-sized creature. When filled with water and rare herbs, ' +
      'it converts dead bodies into zombies using animate dead magic. Material costs total 25 gp per Hit ' +
      'Die per corpse, with one body animated per round. The creator controls up to 12 HD of undead — or ' +
      'more if they can cast animate dead, using that spell\'s limit. Additional creatures beyond the ' +
      'control limit cause earlier ones to become uncontrolled.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animate dead'],
      cost: 15000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 20,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.animate_dead_cauldron',
        value: 0,
        source: 'Cauldron of the Dead',
      },
    ],
  },

  // ---- 45. Cauldron, Battlepot ------------------------------------------------
  // Note: Construction requires Craft Magic Arms and Armor (not Craft Wondrous Item)
  {
    id: 'wondrous-cauldron-battlepot',
    name: 'Cauldron, Battlepot',
    category: 'wondrous',
    source: 'Ultimate Magic',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'none',

    price: 9312,
    weight: 8,

    description:
      'This cast-iron cauldron functions as a +1 heavy mace when wielded by its handles, without ' +
      'imposing improvised weapon penalties. As a standard action (provoking attacks of opportunity), ' +
      'the wielder can seal a potion inside, destroying it and infusing the cauldron with its magic. ' +
      'Upon a successful hit, the wielder may discharge a stored potion as a free action, treating ' +
      'the target as if it had consumed the potion. The cauldron holds up to five potions, and the ' +
      'wielder chooses which to expend on each hit.',

    construction: {
      feats: ['Craft Magic Arms and Armor'],
      spells: [],
      specialRequirements: ['cauldron hex or touch injection', 'creator must have 8 ranks in Craft (alchemy)'],
      cost: 4656,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 20,
      breakDC: 25,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.battlepot_potion_weapon',
        value: 0,
        source: 'Cauldron, Battlepot',
      },
    ],
  },

  // ---- 46. Cautionary Creance -------------------------------------------------
  {
    id: 'wondrous-cautionary-creance',
    name: 'Cautionary Creance',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'none',

    price: 4000,
    weight: 2,

    description:
      'A leather leash exceeding 100 feet in length used to train flying animal companions or familiars. ' +
      'It provides a +4 circumstance bonus on Handle Animal checks made to train flying creatures. When ' +
      'binding a flying companion or familiar, the master may cast feather fall on the creature at will. ' +
      'Masters with share touch spells may use that ability once per day on the leashed creature without ' +
      'physical contact, limited to 3rd-level spells or lower. The creance attaches to the forearm, ' +
      'imposing a -1 penalty on attack rolls and skill checks with that arm.',

    construction: {
      feats: ['Craft Wondrous Item', 'Reach Spell'],
      spells: ['feather fall'],
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
        bonusType: 'circumstance',
        target: 'skill.handle_animal',
        value: 4,
        source: 'Cautionary Creance',
        condition: {
          type: 'custom',
          params: { trainingTarget: 'flying_creature' },
          description: 'Handle Animal checks to train flying creatures only',
        },
      },
      {
        type: 'penalty',
        bonusType: 'untyped',
        target: 'attack.all',
        value: 1,
        source: 'Cautionary Creance',
        condition: {
          type: 'custom',
          params: { arm: 'attached_arm' },
          description: 'attacks and skill checks with the arm the creance is attached to',
        },
      },
      {
        type: 'special',
        target: 'special.feather_fall_at_will_leashed_creature',
        value: 0,
        source: 'Cautionary Creance',
      },
    ],
  },

  // ---- 47. Caver's Hammock ----------------------------------------------------
  {
    id: 'wondrous-cavers-hammock',
    name: "Caver's Hammock",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION },
      { strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION },
    ],
    casterLevel: 5,
    slot: 'none',

    price: 1200,
    weight: 1,

    description:
      'A compact, lightweight hammock that folds into a pocket and supports up to 500 pounds. When ' +
      'activated via command word, it adheres to overhead surfaces or between two sturdy points within ' +
      '10 feet. In underground settings, the hammock assumes a rocky cavern appearance, requiring a ' +
      'DC 30 Perception check to spot. Blindsense and scent users can detect occupants normally; ' +
      'darkvision provides no special advantage.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['silent image', 'spider climb'],
      cost: 600,
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
        target: 'special.hammock_adheres_to_surface',
        value: 0,
        source: "Caver's Hammock",
      },
      {
        type: 'special',
        target: 'special.cavern_camouflage_dc30',
        value: 0,
        source: "Caver's Hammock",
        condition: {
          type: 'custom',
          params: { environment: 'underground' },
          description: 'only in underground settings',
        },
      },
    ],
  },

  // ---- 48. Censer of Conjuring Air Elementals ---------------------------------
  {
    id: 'wondrous-censer-conjuring-air-elementals',
    name: 'Censer of Conjuring Air Elementals',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 13,
    slot: 'none',

    price: 90000,
    weight: 1,

    description:
      'A 6-inch-wide perforated metallic vessel functioning as a thurible. As a full-round action, the ' +
      'user can summon an air elemental. When incense of meditation is used, the censer conjures a ' +
      'greater air elemental (as summon monster VII). When other incense is used, it summons a Large ' +
      'air elemental (as summon monster V). Normal incense is consumed per summoning; incense of ' +
      'meditation is consumed one-quarter block per use. The censer cannot summon another elemental ' +
      'until the previous one is dismissed, killed, or the duration expires.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['summon monster V', 'summon monster VII'],
      cost: 45000,
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
        target: 'special.summon_air_elemental',
        value: 0,
        source: 'Censer of Conjuring Air Elementals',
      },
    ],
  },

  // ---- 49. Chain, Broken Chain of the Beast -----------------------------------
  // Slot is 'belt' per source (worn as a belt)
  {
    id: 'wondrous-broken-chain-of-the-beast',
    name: 'Chain, Broken Chain of the Beast',
    category: 'wondrous',
    source: 'Inner Sea World Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'belt',

    price: 4500,
    weight: 5,

    description:
      'An 8-foot corroded chain threaded with leather, worn as a belt. Once per day, the wearer can ' +
      'summon an evil creature from the summon monster I list. The creature is uncontrolled and attacks ' +
      'nearby enemies, but may turn on the wearer or allies if no enemies remain. If Rovagug is the ' +
      "wearer's patron deity, the wearer may also gain the benefits of a rage spell once per day by " +
      "speaking the god's name. This rage ability activates automatically if the wearer becomes bound, " +
      'shackled, or helpless while conscious (if not already used that day).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['rage', 'summon monster I'],
      cost: 2250,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 20,
    },

    activationCategory: 'command_word',
    activationAction: 'standard',

    effects: [
      {
        type: 'special',
        target: 'special.summon_evil_creature_uncontrolled',
        value: 0,
        source: 'Chain, Broken Chain of the Beast',
      },
      {
        // Rovagug patron only: rage 1/day by speaking the deity's name; auto-activates if bound/helpless
        type: 'special',
        target: 'special.rage_rovagug_patron_deity',
        value: 0,
        source: 'Chain, Broken Chain of the Beast',
        condition: {
          type: 'custom',
          params: { patronDeity: 'Rovagug' },
          description: 'only if Rovagug is the patron deity',
        },
      },
    ],
  },

  // ---- 50. Chalice of Communal Dweomer ----------------------------------------
  {
    id: 'wondrous-chalice-of-communal-dweomer',
    name: 'Chalice of Communal Dweomer',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'none',

    price: 3750,
    weight: 1,

    description:
      'Once per day, the user may pour a potion with a duration longer than instantaneous into this ' +
      'chalice, then drink it as a standard action that provokes attacks of opportunity. The bearer and ' +
      'up to two willing allies within 30 feet all gain the benefits as though they had consumed the ' +
      'potion; however, the duration is divided evenly between all recipients (including the bearer), ' +
      'rounded down to the nearest round.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['alchemical allocation', 'amplify elixir'],
      cost: 1875,
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
        target: 'special.communal_potion_sharing',
        value: 0,
        source: 'Chalice of Communal Dweomer',
      },
    ],
  },
];
