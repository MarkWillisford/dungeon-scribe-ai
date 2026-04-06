import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsEG2: WondrousItemDefinition[] = [
  // -------------------------------------------------------------------------
  // 26. Elixir of Luck
  // Source: Advanced Player's Guide pg. 325
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-of-luck',
    name: 'Elixir of Luck',
    category: 'wondrous',
    source: "Advanced Player's Guide",
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'none',

    price: 3600,
    weight: 0,

    description:
      'This golden potion grants 3 hero points upon consumption. These points must be used within 1 hour, ' +
      'do not count against the normal hero point limit, and can only benefit the imbiber. A character ' +
      'cannot benefit from more than one elixir of luck in a 1-month period.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['heroic fortune'],
      cost: 1800,
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
        target: 'special.elixir_of_luck_hero_points',
        value: 3,
        source: 'Elixir of Luck',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 27. Elixir of Repression
  // Source: Pathfinder Player Companion: Champions of Corruption
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-of-repression',
    name: 'Elixir of Repression',
    category: 'wondrous',
    source: 'Champions of Corruption',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 3,
    slot: 'none',

    price: 150,
    weight: 0,

    description:
      'This pale blue draught imposes a dull placidity on the imbiber for 12 hours. The drinker gains a ' +
      '+2 insight bonus on saving throws against mind-affecting spells and effects. However, the drinker ' +
      'must succeed at a DC 13 Will save to benefit from morale-granting spells and effects. Those ' +
      'suffering from madness instead gain a +4 insight bonus on saves against madness effects.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['calm emotions'],
      cost: 75,
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
        bonusType: 'insight',
        target: 'save.all',
        value: 2,
        source: 'Elixir of Repression',
        condition: {
          type: 'custom',
          params: { descriptor: 'mind_affecting' },
          description: 'against mind-affecting spells and effects only',
        },
      },
      {
        type: 'special',
        target: 'special.elixir_repression_morale_save',
        value: 0,
        source: 'Elixir of Repression',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 28. Elixir of Sex Shifting
  // Source: Advanced Class Guide
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-of-sex-shifting',
    name: 'Elixir of Sex Shifting',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',

    price: 2250,
    weight: 0,

    description:
      'Upon consumption, this elixir permanently transforms the biology of the drinker to take on ' +
      'a different set of sexual characteristics of their choice. The transformation is instantaneous ' +
      'and cannot be dispelled. A second dose allows the drinker to revert to a previous form or adopt ' +
      'different characteristics. The elixir has no effect on pregnant characters or on races that lack ' +
      'sexual differentiation. An unwilling drinker can refuse the transformation entirely.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['polymorph'],
      cost: 1125,
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
        target: 'special.elixir_sex_shifting_permanent_transform',
        value: 0,
        source: 'Elixir of Sex Shifting',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 29. Elixir of Shadewalking
  // Source: Pathfinder Campaign Setting pg. 197; Pathfinder #10: A History of Ashes pg. 19
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-of-shadewalking',
    name: 'Elixir of Shadewalking',
    category: 'wondrous',
    source: 'Pathfinder Campaign Setting',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION }],
    casterLevel: 11,
    slot: 'none',

    price: 3500,
    weight: 1,

    description:
      'This elixir, typically stored in a bone flask, enables the drinker and up to 11 additional ' +
      'creatures in contact with them to travel on the Shadow Plane under the effects of a shadow walk ' +
      'spell for up to 11 hours, allowing travel at an effective overland speed of 50 mph.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shadow walk'],
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
        target: 'special.elixir_shadewalking_shadow_walk',
        value: 0,
        source: 'Elixir of Shadewalking',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 30. Elixir of Swimming
  // Source: Ultimate Equipment pg. 295; Core Rulebook pg. 511
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-of-swimming',
    name: 'Elixir of Swimming',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 2,
    slot: 'none',

    price: 250,
    weight: 0,

    description:
      'A magic sheath surrounds the drinker upon consuming this elixir, allowing them to glide through ' +
      'the water easily. The drinker gains a +10 competence bonus on Swim checks for 1 hour.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Creator must have 5 ranks in the Swim skill'],
      cost: 125,
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
        target: 'skill.swim',
        value: 10,
        source: 'Elixir of Swimming',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 31. Elixir of the Infernal Familiar
  // Source: Pathfinder Player Companion: Potions & Poisons
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-of-the-infernal-familiar',
    name: 'Elixir of the Infernal Familiar',
    category: 'wondrous',
    source: 'Potions and Poisons',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'none',

    price: 1400,
    weight: 0,

    description:
      'A slender tube containing warm, acrid black sludge. When consumed, the drinker transforms into ' +
      'a gray cat for 1 hour via beast shape II. The user gains 30-foot darkvision, or an additional ' +
      '30 feet if already possessing darkvision. While transformed, their paw prints leave ' +
      'sulfur-scented scorch marks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['beast shape II', 'darkvision'],
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
        type: 'special',
        target: 'special.elixir_infernal_familiar_beast_shape',
        value: 0,
        source: 'Elixir of the Infernal Familiar',
      },
      {
        type: 'special',
        target: 'special.darkvision',
        value: 30,
        source: 'Elixir of the Infernal Familiar',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 32. Elixir of the Peaks
  // Source: Pathfinder Adventure Path: Rise of the Runelords Anniversary Edition
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-of-the-peaks',
    name: 'Elixir of the Peaks',
    category: 'wondrous',
    source: 'Rise of the Runelords Anniversary Edition',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'none',

    price: 2450,
    weight: 0,

    description:
      'This elixir grants mountaineering prowess for 8 hours. The drinker becomes acclimated to high ' +
      'altitudes below death zone levels and receives a +10 competence bonus on Climb checks and Survival ' +
      'checks in mountainous terrain, as well as a +2 competence bonus on all Survival checks made at ' +
      'elevations above 5,000 feet. The imbiber also gains the benefits of an endure elements spell.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['endure elements', 'spider climb'],
      cost: 1225,
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
        target: 'skill.climb',
        value: 10,
        source: 'Elixir of the Peaks',
        condition: {
          type: 'custom',
          params: { terrain: 'mountainous' },
          description: 'in mountainous terrain only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.survival',
        value: 10,
        source: 'Elixir of the Peaks',
        condition: {
          type: 'custom',
          params: { terrain: 'mountainous' },
          description: 'in mountainous terrain only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.survival',
        value: 2,
        source: 'Elixir of the Peaks',
        condition: {
          type: 'custom',
          params: { elevation: 5000 },
          description: 'at elevations above 5,000 feet only',
        },
      },
      {
        type: 'special',
        target: 'special.elixir_peaks_altitude_acclimation',
        value: 0,
        source: 'Elixir of the Peaks',
      },
      {
        type: 'special',
        target: 'special.elixir_peaks_endure_elements',
        value: 0,
        source: 'Elixir of the Peaks',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 33. Elixir of the Thundering Voice
  // Source: Advanced Class Guide
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-of-the-thundering-voice',
    name: 'Elixir of the Thundering Voice',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 250,
    weight: 0,

    description:
      "This elixir makes the drinker's voice fiercer and louder with an unsettling quality, granting " +
      'a +10 competence bonus on Intimidate checks for 1 hour.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['sound burst'],
      cost: 125,
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
        target: 'skill.intimidate',
        value: 10,
        source: 'Elixir of the Thundering Voice',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 34. Elixir of True Form
  // Source: Pathfinder Module: From Shore to Sea
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-of-true-form',
    name: 'Elixir of True Form',
    category: 'wondrous',
    source: 'From Shore to Sea',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 8,
    slot: 'none',

    price: 1600,
    weight: 0,

    description:
      "This elixir eliminates all curses and transmutation effects currently affecting the drinker upon " +
      "consumption. It prevents gillmen from transforming into skum but cannot reverse an already-completed " +
      "transformation. Only versions manufactured on the island of Nal-Kashel can remove that island's " +
      'specific warping effects.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['remove curse'],
      cost: 800,
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
        target: 'special.elixir_true_form_remove_curse_transmutation',
        value: 0,
        source: 'Elixir of True Form',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 35. Elixir of Truth
  // Source: Ultimate Equipment pg. 295; Core Rulebook pg. 511
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-of-truth',
    name: 'Elixir of Truth',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'This elixir forces the drinker to say nothing but the truth for 10 minutes (Will DC 13 negates). ' +
      'The drinker must answer any questions posed, though they may attempt a separate DC 13 Will save ' +
      'for each question — a successful save allows them to refuse to answer without breaking the ' +
      'compulsion. Only one question can be asked per round. This is a mind-affecting compulsion effect.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['zone of truth'],
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
        target: 'special.elixir_truth_compulsion',
        value: 0,
        source: 'Elixir of Truth',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 36. Elixir of Tumbling
  // Source: Ultimate Equipment pg. 295; Core Rulebook pg. 511
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-of-tumbling',
    name: 'Elixir of Tumbling',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 250,
    weight: 0,

    description:
      "This elixir grants the drinker a +10 competence bonus on Acrobatics checks for 1 hour, enabling " +
      'superior tumbling and careful movement across a variety of surfaces.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace"],
      cost: 125,
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
        value: 10,
        source: 'Elixir of Tumbling',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 37. Elixir of Two Worlds
  // Source: Pathfinder Campaign Setting: Aquatic Adventures
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-of-two-worlds',
    name: 'Elixir of Two Worlds',
    category: 'wondrous',
    source: 'Aquatic Adventures',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 15,
    slot: 'none',

    price: 5000,
    weight: 1,

    description:
      'This magical elixir must be consumed underwater and permanently transforms the drinker. ' +
      'Land-dwellers gain a tail fin, a 5-foot land speed, a 40-foot swim speed, and the aquatic subtype. ' +
      'Sea-dwellers gain legs, a 30-foot land speed, and lose the aquatic subtype. The transformation can ' +
      'only be reversed by miracle, wish, or another elixir of two worlds. This item cannot be used with ' +
      'alchemical allocation; a potion sponge or potion sureseal bladder is required for administration.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fins to feet', 'polymorph any object'],
      cost: 2500,
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
        target: 'special.elixir_two_worlds_permanent_transform',
        value: 0,
        source: 'Elixir of Two Worlds',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 38. Elixir of Vicious Magic
  // Source: Potions and Poisons pg. 20
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-of-vicious-magic',
    name: 'Elixir of Vicious Magic',
    category: 'wondrous',
    source: 'Potions and Poisons',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.EVOCATION }],
    casterLevel: 7,
    slot: 'none',

    price: 1750,
    weight: 0,

    description:
      'This flask of metallic-green liquid with pulsing globules enhances spell potency for 1 minute. ' +
      'Any spells the imbiber casts that deal hit point damage deal an additional amount of damage of ' +
      'the same type equal to the spell level — both to the target and to the imbiber.',

    construction: {
      feats: ['Craft Wondrous Item', 'Furious Spell'],
      spells: [],
      cost: 875,
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
        target: 'special.elixir_vicious_magic_spell_damage_bonus',
        value: 0,
        source: 'Elixir of Vicious Magic',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 39. Elixir of Vision
  // Source: Ultimate Equipment pg. 295; Core Rulebook pg. 511
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-of-vision',
    name: 'Elixir of Vision',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 2,
    slot: 'none',

    price: 250,
    weight: 0,

    description:
      'This potion grants the drinker the ability to notice acute details with great accuracy, ' +
      'providing a +10 competence bonus on Perception checks for 1 hour.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['true seeing'],
      cost: 125,
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
        target: 'skill.perception',
        value: 10,
        source: 'Elixir of Vision',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 40. Elixir, Adhesive Slime
  // Source: Pathfinder Player Companion: Potions & Poisons
  // Note: Fleshcraft elixir — created with Fleshwarper feat (not Craft Wondrous Item);
  //       no standard magic aura or CL listed in source.
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-adhesive-slime',
    name: 'Elixir, Adhesive Slime',
    category: 'wondrous',
    source: 'Potions and Poisons',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      "The drinker's skin secretes a transparent, sticky substance for 1 hour (DC 14 negates). This " +
      'grants a 15-foot climb speed. However, the subject suffers a -4 penalty to CMD against grapple ' +
      'attempts and must use a move action (rather than a free action) to drop held objects.',

    construction: {
      feats: ['Fleshwarper'],
      spells: [],
      specialRequirements: ['Craft (alchemy) 8 ranks', 'Heal DC 18'],
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
        target: 'special.climb_speed',
        value: 15,
        source: 'Elixir, Adhesive Slime',
      },
      {
        type: 'penalty',
        target: 'cmd',
        value: -4,
        source: 'Elixir, Adhesive Slime',
        condition: {
          type: 'custom',
          params: { maneuver: 'grapple' },
          description: 'against grapple attempts only',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 41. Elixir, Bloodbrew
  // Source: Pathfinder Adventure Path #47: Ashes at Dawn
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-bloodbrew',
    name: 'Elixir, Bloodbrew',
    category: 'wondrous',
    source: 'Pathfinder Adventure Path #47',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 3,
    slot: 'none',

    price: 1000,
    weight: 0,

    description:
      'This ruby red elixir grants 1d10+3 temporary hit points for 1 hour to any drinker. For enslaved ' +
      'vampires or vampire spawn, it also provides 1 hour of freedom from their creator\'s control. ' +
      'Vampires who drink it risk addiction (DC 20 Fortitude save); addicted vampires require daily ' +
      'doses or suffer -2 penalties to Dex, Con, Str, and Wis and lose fast healing. Living creatures ' +
      'gain only the temporary hit points but take a -2 penalty on saves against energy drain for 1 hour.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['false life', 'protection from evil'],
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
        target: 'special.elixir_bloodbrew_temp_hp',
        value: 0,
        source: 'Elixir, Bloodbrew',
      },
      {
        type: 'special',
        target: 'special.elixir_bloodbrew_vampire_freedom',
        value: 0,
        source: 'Elixir, Bloodbrew',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 42. Elixir, Chon Chon
  // Source: Pathfinder Adventure Path #53: Tide of Honor
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-chon-chon',
    name: 'Elixir, Chon Chon',
    category: 'wondrous',
    source: 'Pathfinder Adventure Path #53',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'none',

    price: 2750,
    weight: 0,

    description:
      "When consumed by a humanoid, this green fluid causes the drinker's ears to enlarge and their " +
      "head to separate from their body, shifting their consciousness into a Tiny flying form similar " +
      "to beast shape II. The detached head gains flight, constant detect magic, and a +4 racial bonus " +
      "on Perception checks (listen). The body is helpless during the separation. The duration is " +
      "unpredictable (1 minute to permanent, determined by GM). The effect can only be ended early by " +
      "remove curse. If the head is more than 5 feet from the body when the effect ends, the creature " +
      "dies.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect magic', 'polymorph'],
      cost: 1375,
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
        target: 'special.elixir_chon_chon_head_separation',
        value: 0,
        source: 'Elixir, Chon Chon',
      },
      {
        type: 'bonus',
        bonusType: 'racial',
        target: 'skill.perception',
        value: 4,
        source: 'Elixir, Chon Chon',
        condition: {
          type: 'custom',
          params: { sense: 'listen' },
          description: 'on Perception checks to listen only, while transformed',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 43. Elixir, Deathgag
  // Source: Pathfinder Adventure Path #45: Broken Moon
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-deathgag',
    name: 'Elixir, Deathgag',
    category: 'wondrous',
    source: 'Pathfinder Adventure Path #45',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 7,
    slot: 'none',

    price: 1400,
    weight: 0,

    description:
      'Used by death cults to prevent captured enemies from revealing secrets even after death. When an ' +
      'imbiber falls below -1 hit points, a fatal poison triggers, causing violent convulsions, foaming ' +
      "at the mouth, and blood-red eyes. The victim's jaw dissolves upon death, making them immune to " +
      'speak with dead spells. Only limited wish, miracle, or wish can reverse these effects before ' +
      'death occurs.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['contagion'],
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
        type: 'special',
        target: 'special.elixir_deathgag_speak_with_dead_immunity',
        value: 0,
        source: 'Elixir, Deathgag',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 44. Elixir, Fiery Maw
  // Source: Pathfinder Player Companion: Potions & Poisons
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-fiery-maw',
    name: 'Elixir, Fiery Maw',
    category: 'wondrous',
    source: 'Potions and Poisons',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'none',

    price: 800,
    weight: 0,

    description:
      'A crystalline bottle containing smoky orange liquid. When drunk as a standard action, the user ' +
      'gains the ability to breathe a 15-foot cone of fiery teeth for 1 hour or one use, whichever ' +
      'comes first. The breath weapon deals 2d4 fire damage, 2d4 bludgeoning/piercing/slashing damage, ' +
      'and 1d4 bleed damage. Targets may make a DC 13 Reflex save for half damage (bleed is not halved).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bleed', 'burning hands'],
      cost: 400,
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
        target: 'special.elixir_fiery_maw_breath_weapon',
        value: 0,
        source: 'Elixir, Fiery Maw',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 45. Elixir, Ring of Eyes
  // Source: Pathfinder Player Companion: Potions & Poisons
  // Note: Fleshcraft elixir — created with Fleshwarper feat; no standard aura/CL in source.
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-ring-of-eyes',
    name: 'Elixir, Ring of Eyes',
    category: 'wondrous',
    source: 'Potions and Poisons',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'none',

    price: 1400,
    weight: 0,

    description:
      "This fleshcraft elixir causes numerous malformed eyes to grow on the subject's head for 10 " +
      'minutes (DC 20 negates). The creature gains all-around vision and cannot be flanked. However, ' +
      'sensory overload from the extra eyes causes the subject to be dazzled for the duration.',

    construction: {
      feats: ['Fleshwarper'],
      spells: [],
      specialRequirements: ['Craft (alchemy) 13 ranks', 'Heal DC 24'],
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
        type: 'special',
        target: 'special.elixir_ring_of_eyes_all_around_vision',
        value: 0,
        source: 'Elixir, Ring of Eyes',
      },
      {
        type: 'special',
        target: 'special.elixir_ring_of_eyes_cannot_be_flanked',
        value: 0,
        source: 'Elixir, Ring of Eyes',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 46. Elixir, Spirit Rush
  // Source: Pathfinder Player Companion: Potions & Poisons
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-spirit-rush',
    name: 'Elixir, Spirit Rush',
    category: 'wondrous',
    source: 'Potions and Poisons',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 13,
    slot: 'none',

    price: 2400,
    weight: 0,

    description:
      'A purple, sparkling liquid that protects the drinker for 1 hour. When the drinker would be ' +
      'reduced to 0 or fewer hit points, the elixir automatically restores 3d8+5 hit points and renders ' +
      'them ethereal for 1 round, shunting them 30 feet from the source of the damage. While ethereal, ' +
      'movement through barriers does not provoke attacks of opportunity, though the character must land ' +
      'in an unoccupied space.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cure serious wounds', 'ethereal jaunt'],
      cost: 1200,
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
        target: 'special.elixir_spirit_rush_near_death_trigger',
        value: 0,
        source: 'Elixir, Spirit Rush',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 47. Elixir, Steelsheen
  // Source: Pathfinder Player Companion: Potions & Poisons
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-steelsheen',
    name: 'Elixir, Steelsheen',
    category: 'wondrous',
    source: 'Potions and Poisons',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'none',

    price: 900,
    weight: 0,

    description:
      "This indigo liquid hardens the drinker's skin with a metallic sheen for 10 minutes, granting a " +
      '+2 competence bonus to natural armor and 5 temporary hit points. When the imbiber first enters ' +
      'melee combat during the duration, they may choose to increase the natural armor bonus to +4 and ' +
      'gain 5 additional temporary hit points, but their movement speeds are halved for the remainder ' +
      'of the duration.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['barkskin', 'false life'],
      cost: 450,
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
        target: 'ac.natural',
        value: 2,
        source: 'Elixir, Steelsheen',
      },
      {
        type: 'special',
        target: 'special.elixir_steelsheen_temp_hp',
        value: 5,
        source: 'Elixir, Steelsheen',
      },
      {
        type: 'special',
        target: 'special.elixir_steelsheen_melee_upgrade',
        value: 0,
        source: 'Elixir, Steelsheen',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 48. Elixir, Swarmform
  // Source: Pathfinder Player Companion: Potions & Poisons
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-swarmform',
    name: 'Elixir, Swarmform',
    category: 'wondrous',
    source: 'Potions and Poisons',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'none',

    price: 3300,
    weight: 0,

    description:
      "This elixir contains dead insects suspended in bright pink liquid. Upon consumption, the " +
      "drinker's body transforms into a wasp swarm for 1 hour, with all equipment dropping to the " +
      "ground. The user retains their mental statistics but gains the physical attributes of a wasp " +
      "swarm. Only movement and mental actions are possible during the transformation. The effect ends " +
      "immediately if the swarm reaches 0 hit points.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['summon swarm'],
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
        target: 'special.elixir_swarmform_wasp_swarm_transform',
        value: 0,
        source: 'Elixir, Swarmform',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 49. Elixir, Webbed Appendages
  // Source: Pathfinder Player Companion: Potions & Poisons
  // Note: Fleshcraft elixir — created with Fleshwarper feat; no standard aura/CL in source.
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-webbed-appendages',
    name: 'Elixir, Webbed Appendages',
    category: 'wondrous',
    source: 'Potions and Poisons',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',

    price: 300,
    weight: 0,

    description:
      "Membranes of skin grow between the subject's fingers, toes, and appendages for 1 hour " +
      '(DC 12 negates), granting a 20-foot swim speed. However, the subject has difficulty holding ' +
      'items and takes a -2 penalty on attack rolls with held weapons.',

    construction: {
      feats: ['Fleshwarper'],
      spells: [],
      specialRequirements: ['Craft (alchemy) 8 ranks', 'Heal DC 16'],
      cost: 150,
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
        target: 'special.swim_speed',
        value: 20,
        source: 'Elixir, Webbed Appendages',
      },
      {
        type: 'penalty',
        target: 'attack.all',
        value: -2,
        source: 'Elixir, Webbed Appendages',
        condition: {
          type: 'custom',
          params: { requirement: 'held_weapon' },
          description: 'with held weapons only',
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 50. Elixir, Wraith's Sight
  // Source: Pathfinder Player Companion: Potions & Poisons
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-elixir-wraiths-sight',
    name: "Elixir, Wraith's Sight",
    category: 'wondrous',
    source: 'Potions and Poisons',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 9,
    slot: 'none',

    price: 1500,
    weight: 0,

    description:
      "When consumed, the drinker's eyes emit golden light and gain lifesense with a range of 30 feet " +
      "for 30 minutes. However, the drinker is blinded during this period. If the blindness is cured " +
      "by any means, the elixir's effect ends immediately.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['blindness/deafness', 'deathwatch'],
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
        type: 'special',
        target: 'special.lifesense',
        value: 30,
        source: "Elixir, Wraith's Sight",
      },
      {
        type: 'special',
        target: 'special.elixir_wraiths_sight_blinded',
        value: 0,
        source: "Elixir, Wraith's Sight",
      },
    ],
  },
];
