import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsAB6: WondrousItemDefinition[] = [
  // ---- 126. Belt of Famine -------------------------------------------------------
  {
    id: 'wondrous-belt-of-famine',
    name: 'Belt of Famine',
    category: 'wondrous',
    source: 'Pathfinder: Spiral of Bones #5',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 5,
    slot: 'belt',

    price: 4000,
    weight: 1,

    description:
      'This dark leather belt features a piece of a cracked soul gem in its plain brass buckle. ' +
      'The wearer gains immunity to starvation and does not need to eat, though prolonged use ' +
      'causes an emaciated appearance. Three times per day, the wearer can make a touch attack ' +
      'to inflict painful hunger on a target. On a failed DC 15 Fortitude save, the target takes ' +
      '2d6 nonlethal damage and becomes fatigued. Creatures that do not eat or are immune to ' +
      'nonlethal damage are unaffected.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['create food and water', 'touch of fatigue'],
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
        target: 'special.immunity_starvation',
        value: 0,
        source: 'Belt of Famine',
      },
      {
        type: 'special',
        target: 'special.touch_attack_hunger_3_per_day',
        value: 0,
        source: 'Belt of Famine',
      },
    ],
  },

  // ---- 127. Belt of Foraging -----------------------------------------------------
  {
    id: 'wondrous-belt-of-foraging',
    name: 'Belt of Foraging',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'belt',

    price: 6000,
    weight: 1,

    description:
      'The wearer with at least 1 rank in Survival automatically succeeds at foraging checks ' +
      'while moving at half speed, and may provide food and water for one additional creature ' +
      'for every 2 points by which the result exceeds DC 10. Alternatively, the wearer can ' +
      'attempt a DC 20 Survival check to forage while moving at full speed, providing for one ' +
      'additional creature per 2 points over DC 20.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['detect animals or plants'],
      specialRequirements: ['Creator must possess at least 1 rank in Survival'],
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
        target: 'special.automatic_foraging_success',
        value: 0,
        source: 'Belt of Foraging',
      },
    ],
  },

  // ---- 128. Belt of Giant Strength (+2 / +4 / +6) --------------------------------
  {
    id: 'wondrous-belt-giant-strength-2',
    name: 'Belt of Giant Strength +2',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',

    price: 4000,
    weight: 1,

    description:
      "This thick leather belt adorned with large metal buckles grants an enhancement bonus " +
      "to the wearer's Strength score. Treat this as a temporary ability bonus for the first " +
      '24 hours the belt is worn.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bull's strength"],
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
        target: 'ability.str',
        value: 2,
        source: 'Belt of Giant Strength +2',
      },
    ],
  },
  {
    id: 'wondrous-belt-giant-strength-4',
    name: 'Belt of Giant Strength +4',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',

    price: 16000,
    weight: 1,

    description:
      "This thick leather belt adorned with large metal buckles grants an enhancement bonus " +
      "to the wearer's Strength score. Treat this as a temporary ability bonus for the first " +
      '24 hours the belt is worn.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bull's strength"],
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
        target: 'ability.str',
        value: 4,
        source: 'Belt of Giant Strength +4',
      },
    ],
  },
  {
    id: 'wondrous-belt-giant-strength-6',
    name: 'Belt of Giant Strength +6',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',

    price: 36000,
    weight: 1,

    description:
      "This thick leather belt adorned with large metal buckles grants an enhancement bonus " +
      "to the wearer's Strength score. Treat this as a temporary ability bonus for the first " +
      '24 hours the belt is worn.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bull's strength"],
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
        target: 'ability.str',
        value: 6,
        source: 'Belt of Giant Strength +6',
      },
    ],
  },

  // ---- 129. Belt of Incredible Dexterity (+2 / +4 / +6) --------------------------
  {
    id: 'wondrous-belt-incredible-dexterity-2',
    name: 'Belt of Incredible Dexterity +2',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',

    price: 4000,
    weight: 1,

    description:
      "This belt features a large silver buckle, usually depicting the image of a tiger. The " +
      "wearer gains an enhancement bonus to Dexterity. Treat this as a temporary ability bonus " +
      'for the first 24 hours the belt is worn.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace"],
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
        target: 'ability.dex',
        value: 2,
        source: 'Belt of Incredible Dexterity +2',
      },
    ],
  },
  {
    id: 'wondrous-belt-incredible-dexterity-4',
    name: 'Belt of Incredible Dexterity +4',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',

    price: 16000,
    weight: 1,

    description:
      "This belt features a large silver buckle, usually depicting the image of a tiger. The " +
      "wearer gains an enhancement bonus to Dexterity. Treat this as a temporary ability bonus " +
      'for the first 24 hours the belt is worn.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace"],
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
        target: 'ability.dex',
        value: 4,
        source: 'Belt of Incredible Dexterity +4',
      },
    ],
  },
  {
    id: 'wondrous-belt-incredible-dexterity-6',
    name: 'Belt of Incredible Dexterity +6',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',

    price: 36000,
    weight: 1,

    description:
      "This belt features a large silver buckle, usually depicting the image of a tiger. The " +
      "wearer gains an enhancement bonus to Dexterity. Treat this as a temporary ability bonus " +
      'for the first 24 hours the belt is worn.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace"],
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
        target: 'ability.dex',
        value: 6,
        source: 'Belt of Incredible Dexterity +6',
      },
    ],
  },

  // ---- 130. Belt of Mighty Constitution (+2 / +4 / +6) ---------------------------
  {
    id: 'wondrous-belt-mighty-constitution-2',
    name: 'Belt of Mighty Constitution +2',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',

    price: 4000,
    weight: 1,

    description:
      "A golden buckle depicting a bear's head adorns this belt. The wearer gains an enhancement " +
      'bonus to Constitution. Treat this as a temporary ability bonus for the first 24 hours the ' +
      'belt is worn.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance"],
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
        target: 'ability.con',
        value: 2,
        source: 'Belt of Mighty Constitution +2',
      },
    ],
  },
  {
    id: 'wondrous-belt-mighty-constitution-4',
    name: 'Belt of Mighty Constitution +4',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',

    price: 16000,
    weight: 1,

    description:
      "A golden buckle depicting a bear's head adorns this belt. The wearer gains an enhancement " +
      'bonus to Constitution. Treat this as a temporary ability bonus for the first 24 hours the ' +
      'belt is worn.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance"],
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
        target: 'ability.con',
        value: 4,
        source: 'Belt of Mighty Constitution +4',
      },
    ],
  },
  {
    id: 'wondrous-belt-mighty-constitution-6',
    name: 'Belt of Mighty Constitution +6',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',

    price: 36000,
    weight: 1,

    description:
      "A golden buckle depicting a bear's head adorns this belt. The wearer gains an enhancement " +
      'bonus to Constitution. Treat this as a temporary ability bonus for the first 24 hours the ' +
      'belt is worn.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance"],
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
        target: 'ability.con',
        value: 6,
        source: 'Belt of Mighty Constitution +6',
      },
    ],
  },

  // ---- 131. Belt of Mighty Hurling (Lesser / Greater) ----------------------------
  {
    id: 'wondrous-belt-mighty-hurling-lesser',
    name: 'Belt of Mighty Hurling, Lesser',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',

    price: 14000,
    weight: 1,

    description:
      'This thick leather belt features a bronze fist-shaped clasp. It grants a +2 enhancement ' +
      'bonus to Strength (treat as temporary for the first 24 hours worn) and allows the wearer ' +
      'to apply his Strength modifier as a bonus on attack rolls instead of his Dexterity modifier ' +
      'when making ranged attacks with thrown weapons. The range increment of thrown weapons also ' +
      'increases by 10 feet.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bull's strength", 'longshot'],
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
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.str',
        value: 2,
        source: 'Belt of Mighty Hurling, Lesser',
      },
      {
        type: 'special',
        target: 'special.str_to_thrown_attack_rolls',
        value: 0,
        source: 'Belt of Mighty Hurling, Lesser',
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'special.thrown_weapon_range_increment',
        value: 10,
        source: 'Belt of Mighty Hurling, Lesser',
      },
    ],
  },
  {
    id: 'wondrous-belt-mighty-hurling-greater',
    name: 'Belt of Mighty Hurling, Greater',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'belt',

    price: 42000,
    weight: 1,

    description:
      'This belt functions like the lesser belt of mighty hurling, but grants a +4 enhancement ' +
      'bonus to Strength (treat as temporary for the first 24 hours worn). Additionally, thrown ' +
      'weapons hurled by the wearer are treated as though they had the returning quality. This ' +
      'does not apply to improvised weapons, splash weapons, or weapons the wearer lacks ' +
      'proficiency with.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bull's strength", 'longshot', 'returning weapon'],
      cost: 21000,
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
        target: 'ability.str',
        value: 4,
        source: 'Belt of Mighty Hurling, Greater',
      },
      {
        type: 'special',
        target: 'special.str_to_thrown_attack_rolls',
        value: 0,
        source: 'Belt of Mighty Hurling, Greater',
      },
      {
        type: 'special',
        target: 'special.thrown_weapon_returning',
        value: 0,
        source: 'Belt of Mighty Hurling, Greater',
      },
    ],
  },

  // ---- 132. Belt of Physical Might (+2 / +4 / +6) --------------------------------
  // Grants bonuses to two physical stats (Str+Dex, Str+Con, or Dex+Con).
  // The combination is fixed at creation; most common is Str+Con.
  // Entries below represent all valid stat pairs at each bonus tier.
  {
    id: 'wondrous-belt-physical-might-str-con-2',
    name: 'Belt of Physical Might +2 (Str/Con)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'belt',

    price: 10000,
    weight: 1,

    description:
      'This magical belt provides enhancement bonuses to two of the three physical ability scores ' +
      '(Strength, Dexterity, or Constitution). The specific pair is fixed at creation. Treat the ' +
      'bonuses as temporary ability increases for the first 24 hours of wear. This variant ' +
      'enhances Strength and Constitution.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance", "bull's strength"],
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
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.str',
        value: 2,
        source: 'Belt of Physical Might +2 (Str/Con)',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 2,
        source: 'Belt of Physical Might +2 (Str/Con)',
      },
    ],
  },
  {
    id: 'wondrous-belt-physical-might-str-dex-2',
    name: 'Belt of Physical Might +2 (Str/Dex)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'belt',

    price: 10000,
    weight: 1,

    description:
      'This magical belt provides enhancement bonuses to two of the three physical ability scores ' +
      '(Strength, Dexterity, or Constitution). The specific pair is fixed at creation. Treat the ' +
      'bonuses as temporary ability increases for the first 24 hours of wear. This variant ' +
      'enhances Strength and Dexterity.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bull's strength", "cat's grace"],
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
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.str',
        value: 2,
        source: 'Belt of Physical Might +2 (Str/Dex)',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.dex',
        value: 2,
        source: 'Belt of Physical Might +2 (Str/Dex)',
      },
    ],
  },
  {
    id: 'wondrous-belt-physical-might-dex-con-2',
    name: 'Belt of Physical Might +2 (Dex/Con)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'belt',

    price: 10000,
    weight: 1,

    description:
      'This magical belt provides enhancement bonuses to two of the three physical ability scores ' +
      '(Strength, Dexterity, or Constitution). The specific pair is fixed at creation. Treat the ' +
      'bonuses as temporary ability increases for the first 24 hours of wear. This variant ' +
      'enhances Dexterity and Constitution.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance", "cat's grace"],
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
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.dex',
        value: 2,
        source: 'Belt of Physical Might +2 (Dex/Con)',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 2,
        source: 'Belt of Physical Might +2 (Dex/Con)',
      },
    ],
  },
  {
    id: 'wondrous-belt-physical-might-str-con-4',
    name: 'Belt of Physical Might +4 (Str/Con)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'belt',

    price: 40000,
    weight: 1,

    description:
      'This magical belt provides enhancement bonuses to two of the three physical ability scores ' +
      '(Strength, Dexterity, or Constitution). The specific pair is fixed at creation. Treat the ' +
      'bonuses as temporary ability increases for the first 24 hours of wear. This variant ' +
      'enhances Strength and Constitution.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance", "bull's strength"],
      cost: 20000,
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
        target: 'ability.str',
        value: 4,
        source: 'Belt of Physical Might +4 (Str/Con)',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 4,
        source: 'Belt of Physical Might +4 (Str/Con)',
      },
    ],
  },
  {
    id: 'wondrous-belt-physical-might-str-dex-4',
    name: 'Belt of Physical Might +4 (Str/Dex)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'belt',

    price: 40000,
    weight: 1,

    description:
      'This magical belt provides enhancement bonuses to two of the three physical ability scores ' +
      '(Strength, Dexterity, or Constitution). The specific pair is fixed at creation. Treat the ' +
      'bonuses as temporary ability increases for the first 24 hours of wear. This variant ' +
      'enhances Strength and Dexterity.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bull's strength", "cat's grace"],
      cost: 20000,
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
        target: 'ability.str',
        value: 4,
        source: 'Belt of Physical Might +4 (Str/Dex)',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.dex',
        value: 4,
        source: 'Belt of Physical Might +4 (Str/Dex)',
      },
    ],
  },
  {
    id: 'wondrous-belt-physical-might-dex-con-4',
    name: 'Belt of Physical Might +4 (Dex/Con)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'belt',

    price: 40000,
    weight: 1,

    description:
      'This magical belt provides enhancement bonuses to two of the three physical ability scores ' +
      '(Strength, Dexterity, or Constitution). The specific pair is fixed at creation. Treat the ' +
      'bonuses as temporary ability increases for the first 24 hours of wear. This variant ' +
      'enhances Dexterity and Constitution.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance", "cat's grace"],
      cost: 20000,
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
        target: 'ability.dex',
        value: 4,
        source: 'Belt of Physical Might +4 (Dex/Con)',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 4,
        source: 'Belt of Physical Might +4 (Dex/Con)',
      },
    ],
  },
  {
    id: 'wondrous-belt-physical-might-str-con-6',
    name: 'Belt of Physical Might +6 (Str/Con)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'belt',

    price: 90000,
    weight: 1,

    description:
      'This magical belt provides enhancement bonuses to two of the three physical ability scores ' +
      '(Strength, Dexterity, or Constitution). The specific pair is fixed at creation. Treat the ' +
      'bonuses as temporary ability increases for the first 24 hours of wear. This variant ' +
      'enhances Strength and Constitution.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance", "bull's strength"],
      cost: 45000,
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
        target: 'ability.str',
        value: 6,
        source: 'Belt of Physical Might +6 (Str/Con)',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 6,
        source: 'Belt of Physical Might +6 (Str/Con)',
      },
    ],
  },
  {
    id: 'wondrous-belt-physical-might-str-dex-6',
    name: 'Belt of Physical Might +6 (Str/Dex)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'belt',

    price: 90000,
    weight: 1,

    description:
      'This magical belt provides enhancement bonuses to two of the three physical ability scores ' +
      '(Strength, Dexterity, or Constitution). The specific pair is fixed at creation. Treat the ' +
      'bonuses as temporary ability increases for the first 24 hours of wear. This variant ' +
      'enhances Strength and Dexterity.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bull's strength", "cat's grace"],
      cost: 45000,
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
        target: 'ability.str',
        value: 6,
        source: 'Belt of Physical Might +6 (Str/Dex)',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.dex',
        value: 6,
        source: 'Belt of Physical Might +6 (Str/Dex)',
      },
    ],
  },
  {
    id: 'wondrous-belt-physical-might-dex-con-6',
    name: 'Belt of Physical Might +6 (Dex/Con)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'belt',

    price: 90000,
    weight: 1,

    description:
      'This magical belt provides enhancement bonuses to two of the three physical ability scores ' +
      '(Strength, Dexterity, or Constitution). The specific pair is fixed at creation. Treat the ' +
      'bonuses as temporary ability increases for the first 24 hours of wear. This variant ' +
      'enhances Dexterity and Constitution.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance", "cat's grace"],
      cost: 45000,
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
        target: 'ability.dex',
        value: 6,
        source: 'Belt of Physical Might +6 (Dex/Con)',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 6,
        source: 'Belt of Physical Might +6 (Dex/Con)',
      },
    ],
  },

  // ---- 133. Belt of Physical Perfection (+2 / +4 / +6) ---------------------------
  {
    id: 'wondrous-belt-physical-perfection-2',
    name: 'Belt of Physical Perfection +2',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 16,
    slot: 'belt',

    price: 16000,
    weight: 1,

    description:
      'This belt features a large platinum buckle and provides enhancement bonuses to all three ' +
      'physical ability scores: Strength, Dexterity, and Constitution. Treat these bonuses as ' +
      'temporary ability increases for the first 24 hours of wear.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance", "bull's strength", "cat's grace"],
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
        target: 'ability.str',
        value: 2,
        source: 'Belt of Physical Perfection +2',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.dex',
        value: 2,
        source: 'Belt of Physical Perfection +2',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 2,
        source: 'Belt of Physical Perfection +2',
      },
    ],
  },
  {
    id: 'wondrous-belt-physical-perfection-4',
    name: 'Belt of Physical Perfection +4',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 16,
    slot: 'belt',

    price: 64000,
    weight: 1,

    description:
      'This belt features a large platinum buckle and provides enhancement bonuses to all three ' +
      'physical ability scores: Strength, Dexterity, and Constitution. Treat these bonuses as ' +
      'temporary ability increases for the first 24 hours of wear.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance", "bull's strength", "cat's grace"],
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
        target: 'ability.str',
        value: 4,
        source: 'Belt of Physical Perfection +4',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.dex',
        value: 4,
        source: 'Belt of Physical Perfection +4',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 4,
        source: 'Belt of Physical Perfection +4',
      },
    ],
  },
  {
    id: 'wondrous-belt-physical-perfection-6',
    name: 'Belt of Physical Perfection +6',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 16,
    slot: 'belt',

    price: 144000,
    weight: 1,

    description:
      'This belt features a large platinum buckle and provides enhancement bonuses to all three ' +
      'physical ability scores: Strength, Dexterity, and Constitution. Treat these bonuses as ' +
      'temporary ability increases for the first 24 hours of wear.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance", "bull's strength", "cat's grace"],
      cost: 77000,
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
        target: 'ability.str',
        value: 6,
        source: 'Belt of Physical Perfection +6',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.dex',
        value: 6,
        source: 'Belt of Physical Perfection +6',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 6,
        source: 'Belt of Physical Perfection +6',
      },
    ],
  },

  // ---- 134. Belt of Spirit Vines -------------------------------------------------
  {
    id: 'wondrous-belt-of-spirit-vines',
    name: 'Belt of Spirit Vines',
    category: 'wondrous',
    source: 'Ultimate Wilderness',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'belt',

    price: 15000,
    weight: 2,

    description:
      'This woven vine belt allows the wearer to create a ghostly vine connection to a willing ' +
      'creature within 30 feet. When the wearer casts a druid, ranger, shaman, or witch spell ' +
      'with a range of touch on themselves, both the wearer and the connected creature gain the ' +
      "benefit of the spell for half the spell's duration. The vine persists until dismissed or " +
      'until the connected creature moves beyond 30 feet. The ability has no effect on ' +
      'instantaneous or permanent spells.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['plant growth'],
      cost: 7500,
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
        target: 'special.spirit_vine_shared_touch_spell',
        value: 0,
        source: 'Belt of Spirit Vines',
      },
    ],
  },

  // ---- 135. Belt of Stoneskin ----------------------------------------------------
  {
    id: 'wondrous-belt-of-stoneskin',
    name: 'Belt of Stoneskin',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 10,
    slot: 'belt',

    price: 60000,
    weight: 10,

    description:
      'The wearer gains DR 10/adamantine until the belt has absorbed 100 points of damage in a ' +
      '24-hour period, after which it becomes inactive for the remainder of that day. The belt ' +
      'requires 24 consecutive hours of wear after being first donned or after removal to ' +
      'activate its protective magic.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['stoneskin'],
      specialRequirements: ['Creator must be an oread or possess the earth subtype'],
      cost: 30000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 5,
      breakDC: 14,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.dr_10_adamantine_100_points_per_day',
        value: 0,
        source: 'Belt of Stoneskin',
      },
    ],
  },

  // ---- 136. Belt of Superior Maneuvers (+1 through +5) ---------------------------
  {
    id: 'wondrous-belt-superior-maneuvers-1',
    name: 'Belt of Superior Maneuvers +1',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'belt',

    price: 2000,
    weight: 0,

    description:
      'This thin black canvas belt typically secures robes or martial garments. Three times per ' +
      'day as a free action, the wearer selects a combat maneuver and receives a +1 enhancement ' +
      'bonus on combat maneuver checks for that maneuver and a +1 bonus to CMD when defending ' +
      'against it for 1 round. When worn by a brawler, the belt grants one additional daily use ' +
      'of martial flexibility.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['divine favor'],
      specialRequirements: ["Creator's caster level must be at least 3"],
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
        target: 'special.cmb_cmd_bonus_chosen_maneuver_3_per_day',
        value: 1,
        source: 'Belt of Superior Maneuvers +1',
      },
    ],
  },
  {
    id: 'wondrous-belt-superior-maneuvers-2',
    name: 'Belt of Superior Maneuvers +2',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'belt',

    price: 8000,
    weight: 0,

    description:
      'This thin black canvas belt typically secures robes or martial garments. Three times per ' +
      'day as a free action, the wearer selects a combat maneuver and receives a +2 enhancement ' +
      'bonus on combat maneuver checks for that maneuver and a +2 bonus to CMD when defending ' +
      'against it for 1 round. When worn by a brawler, the belt grants one additional daily use ' +
      'of martial flexibility.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['divine favor'],
      specialRequirements: ["Creator's caster level must be at least 6"],
      cost: 4000,
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
        target: 'special.cmb_cmd_bonus_chosen_maneuver_3_per_day',
        value: 2,
        source: 'Belt of Superior Maneuvers +2',
      },
    ],
  },
  {
    id: 'wondrous-belt-superior-maneuvers-3',
    name: 'Belt of Superior Maneuvers +3',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'belt',

    price: 18000,
    weight: 0,

    description:
      'This thin black canvas belt typically secures robes or martial garments. Three times per ' +
      'day as a free action, the wearer selects a combat maneuver and receives a +3 enhancement ' +
      'bonus on combat maneuver checks for that maneuver and a +3 bonus to CMD when defending ' +
      'against it for 1 round. When worn by a brawler, the belt grants one additional daily use ' +
      'of martial flexibility.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['divine favor'],
      specialRequirements: ["Creator's caster level must be at least 9"],
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
        target: 'special.cmb_cmd_bonus_chosen_maneuver_3_per_day',
        value: 3,
        source: 'Belt of Superior Maneuvers +3',
      },
    ],
  },
  {
    id: 'wondrous-belt-superior-maneuvers-4',
    name: 'Belt of Superior Maneuvers +4',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'belt',

    price: 32000,
    weight: 0,

    description:
      'This thin black canvas belt typically secures robes or martial garments. Three times per ' +
      'day as a free action, the wearer selects a combat maneuver and receives a +4 enhancement ' +
      'bonus on combat maneuver checks for that maneuver and a +4 bonus to CMD when defending ' +
      'against it for 1 round. When worn by a brawler, the belt grants one additional daily use ' +
      'of martial flexibility.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['divine favor'],
      specialRequirements: ["Creator's caster level must be at least 12"],
      cost: 16000,
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
        target: 'special.cmb_cmd_bonus_chosen_maneuver_3_per_day',
        value: 4,
        source: 'Belt of Superior Maneuvers +4',
      },
    ],
  },
  {
    id: 'wondrous-belt-superior-maneuvers-5',
    name: 'Belt of Superior Maneuvers +5',
    category: 'wondrous',
    source: 'Advanced Class Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.EVOCATION }],
    casterLevel: 5,
    slot: 'belt',

    price: 50000,
    weight: 0,

    description:
      'This thin black canvas belt typically secures robes or martial garments. Three times per ' +
      'day as a free action, the wearer selects a combat maneuver and receives a +5 enhancement ' +
      'bonus on combat maneuver checks for that maneuver and a +5 bonus to CMD when defending ' +
      'against it for 1 round. When worn by a brawler, the belt grants one additional daily use ' +
      'of martial flexibility.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['divine favor'],
      specialRequirements: ["Creator's caster level must be at least 15"],
      cost: 25000,
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
        target: 'special.cmb_cmd_bonus_chosen_maneuver_3_per_day',
        value: 5,
        source: 'Belt of Superior Maneuvers +5',
      },
    ],
  },

  // ---- 137. Belt of Teeth --------------------------------------------------------
  {
    id: 'wondrous-belt-of-teeth',
    name: 'Belt of Teeth',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'belt',

    price: 4000,
    weight: 3,

    description:
      "This belt's brass buckle is fashioned to resemble three demonic faces. Once per round, " +
      'the buckle can strike at creatures within 5 feet that provoke attacks of opportunity, ' +
      "using the wearer's base attack bonus and Strength modifier plus a +4 competence bonus. " +
      'It deals bite damage appropriate for the wearer\'s size (1d6 for Medium) plus Strength ' +
      'modifier. This does not increase the wearer\'s normal attack allotment but provides ' +
      'an alternative means to execute attacks of opportunity.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['magic fang'],
      cost: 2000,
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
        target: 'special.buckle_bite_attack_on_aoo',
        value: 0,
        source: 'Belt of Teeth',
      },
    ],
  },

  // ---- 138. Belt of the Snake King -----------------------------------------------
  {
    id: 'wondrous-belt-of-the-snake-king',
    name: 'Belt of the Snake King',
    category: 'wondrous',
    source: 'Inner Sea Gods',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'belt',

    price: 2600,
    weight: 1,

    description:
      'This belt writhes like a living snake, hissing and blinking red eyes. It fastens by ' +
      "holding its tail in its mouth. The wearer gains a +1 enhancement bonus to natural armor. " +
      "If Ydersius is the wearer's patron deity, the wearer may cast magic fang once daily on " +
      'one of their own natural weapons.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['barkskin', 'magic fang', 'summon monster I'],
      cost: 1300,
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
        target: 'ac.natural',
        value: 1,
        source: 'Belt of the Snake King',
      },
      {
        type: 'special',
        target: 'special.magic_fang_1_per_day_ydersius_patron',
        value: 0,
        source: 'Belt of the Snake King',
      },
    ],
  },

  // ---- 139. Belt of the Weasel ---------------------------------------------------
  {
    id: 'wondrous-belt-of-the-weasel',
    name: 'Belt of the Weasel',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'belt',

    price: 10000,
    weight: 1,

    description:
      'This belt features an unusually large buckle shaped like a smiling weasel\'s face. ' +
      'The wearer gains a +2 enhancement bonus to Dexterity (treat as temporary for the first ' +
      '24 hours), may move at half speed while prone without penalty, suffers no penalties on ' +
      'melee attack rolls or to AC against melee attacks while prone, and gains the compression ' +
      'ability.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['beast shape I'],
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
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.dex',
        value: 2,
        source: 'Belt of the Weasel',
      },
      {
        type: 'special',
        target: 'special.prone_movement_and_no_prone_penalties',
        value: 0,
        source: 'Belt of the Weasel',
      },
      {
        type: 'special',
        target: 'special.compression_ability',
        value: 0,
        source: 'Belt of the Weasel',
      },
    ],
  },

  // ---- 140. Belt of Thunderous Charging ------------------------------------------
  {
    id: 'wondrous-belt-of-thunderous-charging',
    name: 'Belt of Thunderous Charging',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',

    price: 10000,
    weight: 1,

    description:
      'An engraving of a charging rhinoceros adorns this thick leather belt. The wearer gains ' +
      'a +2 enhancement bonus to Strength (treat as temporary for the first 24 hours worn) and ' +
      'a +2 bonus on bull rush and overrun combat maneuver checks. When charging, the wearer\'s ' +
      'melee weapons and natural weapons deal damage as if they were one size category larger ' +
      'than they actually are.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bull's strength", 'lead blades'],
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
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.str',
        value: 2,
        source: 'Belt of Thunderous Charging',
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'special.cmb_bull_rush',
        value: 2,
        source: 'Belt of Thunderous Charging',
      },
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'special.cmb_overrun',
        value: 2,
        source: 'Belt of Thunderous Charging',
      },
      {
        type: 'special',
        target: 'special.charge_weapon_damage_one_size_larger',
        value: 0,
        source: 'Belt of Thunderous Charging',
      },
    ],
  },

  // ---- 141. Belt of Tumbling -----------------------------------------------------
  {
    id: 'wondrous-belt-of-tumbling',
    name: 'Belt of Tumbling',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'belt',

    price: 800,
    weight: 1,

    description:
      'This cotton cord wraps around the wearer\'s waist and provides a +4 competence bonus ' +
      'on Acrobatics checks made to move through a threatened square or through an enemy\'s space.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace"],
      cost: 400,
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
        value: 4,
        source: 'Belt of Tumbling',
      },
    ],
  },

  // ---- 142. Belt, Anaconda's Coils -----------------------------------------------
  {
    id: "wondrous-belt-anaconda-s-coils",
    name: "Belt, Anaconda's Coils",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'belt',

    price: 18500,
    weight: 1,

    description:
      "This snakeskin belt features a serpent-head buckle. The wearer gains a +2 enhancement " +
      "bonus to Strength (treat as temporary for the first 24 hours) and a +2 competence bonus " +
      "on grapple combat maneuver checks. The wearer also gains the constrict ability, dealing " +
      "1d6 damage plus Strength modifier when maintaining a grapple.",

    construction: {
      feats: ['Craft Wondrous Item', 'Beast Shape I'],
      spells: ["bull's strength"],
      cost: 9250,
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
        target: 'ability.str',
        value: 2,
        source: "Belt, Anaconda's Coils",
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'special.cmb_grapple',
        value: 2,
        source: "Belt, Anaconda's Coils",
      },
      {
        type: 'special',
        target: 'special.constrict_1d6_plus_str',
        value: 0,
        source: "Belt, Anaconda's Coils",
      },
    ],
  },

  // ---- 143. Belt, Bladed ---------------------------------------------------------
  {
    id: 'wondrous-belt-bladed',
    name: 'Belt, Bladed',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 1,
    slot: 'belt',

    price: 2000,
    weight: 3,

    description:
      'This belt consists of many bits of tanned leather joined together by thick metal studs. ' +
      'The wearer can command it to transform into a masterwork slashing or piercing melee weapon ' +
      'of their choice, then revert it back to belt form while holding the weapon. The belt can ' +
      'be enchanted as a piercing and slashing melee weapon, using the belt\'s cost as the base ' +
      'for magical enhancements.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['magic weapon'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 15,
    },

    activationCategory: 'command_word',
    activationAction: 'free',

    effects: [
      {
        type: 'special',
        target: 'special.transforms_into_masterwork_melee_weapon',
        value: 0,
        source: 'Belt, Bladed',
      },
    ],
  },

  // ---- 144. Belt, Blinkback ------------------------------------------------------
  {
    id: 'wondrous-belt-blinkback',
    name: 'Belt, Blinkback',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 7,
    slot: 'belt',

    price: 5000,
    weight: 2,

    description:
      'This segmented metallic belt features clips and straps designed to hold up to two ' +
      'one-handed melee weapons or up to four light melee weapons. When the wielder throws an ' +
      'attached weapon, the weapon teleports back to its strap or sheath immediately after ' +
      'the attack is resolved.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['teleport object'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 12,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.thrown_weapon_teleports_back_after_attack',
        value: 0,
        source: 'Belt, Blinkback',
      },
    ],
  },

  // ---- 145. Belt, Channel-Thieving -----------------------------------------------
  {
    id: 'wondrous-belt-channel-thieving',
    name: 'Belt, Channel-Thieving',
    category: 'wondrous',
    source: 'Horror Adventures',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 3,
    slot: 'belt',

    price: 2000,
    weight: 2,

    description:
      'A wide black leather belt featuring spiraling copper runes. Living wearers heal when ' +
      'nearby allies channel positive energy against undead; undead wearers heal when nearby ' +
      'allies channel negative energy against the living. The wearer regains 1 hit point for ' +
      'each 1d6 of energy channeled. The belt provides no benefit if the wearer themselves ' +
      'channels the energy.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cure light wounds', 'inflict light wounds'],
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
        type: 'special',
        target: 'special.heal_1hp_per_1d6_channeled_by_allies',
        value: 0,
        source: 'Belt, Channel-Thieving',
      },
    ],
  },

  // ---- 146. Belt, Channel-Thieving, Greater --------------------------------------
  {
    id: 'wondrous-belt-channel-thieving-greater',
    name: 'Belt, Channel-Thieving, Greater',
    category: 'wondrous',
    source: 'Horror Adventures',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 7,
    slot: 'belt',

    price: 9200,
    weight: 2,

    description:
      'This belt operates like the standard channel-thieving belt, but with enhanced ' +
      'effectiveness. The amount of healing equals half the amount of damage dealt by the ' +
      'creature channeling energy, rather than 1 hp per 1d6.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cure serious wounds', 'inflict serious wounds'],
      cost: 4600,
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
        target: 'special.heal_half_damage_channeled_by_allies',
        value: 0,
        source: 'Belt, Channel-Thieving, Greater',
      },
    ],
  },

  // ---- 147. Belt, Earth Elemental ------------------------------------------------
  {
    id: 'wondrous-belt-earth-elemental',
    name: 'Belt, Earth Elemental',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 11,
    slot: 'belt',

    price: 24000,
    weight: 3,

    description:
      'This belt consists of flat pieces of slate connected with strong leather straps. It ' +
      'provides a +4 enhancement bonus to Constitution (treat as temporary for the first 24 ' +
      'hours worn) and grants immunity to effects that would push, pull, or forcefully move ' +
      'the wearer (teleportation effects are not blocked). Once per day, the wearer can ' +
      'transform into a Large earth elemental using the elemental body III spell effect.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance", 'elemental body III'],
      cost: 12000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 12,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 4,
        source: 'Belt, Earth Elemental',
      },
      {
        type: 'special',
        target: 'special.immunity_forced_movement',
        value: 0,
        source: 'Belt, Earth Elemental',
      },
      {
        type: 'special',
        target: 'special.large_earth_elemental_form_1_per_day',
        value: 0,
        source: 'Belt, Earth Elemental',
      },
    ],
  },

  // ---- 148. Belt, Equestrian -----------------------------------------------------
  {
    id: 'wondrous-belt-equestrian',
    name: 'Belt, Equestrian',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'belt',

    price: 3200,
    weight: 1,

    description:
      'Images of horses stampeding across a barren, windswept plain adorn this belt. Wearers ' +
      'automatically succeed at Ride checks to guide with knees, remain seated, fight from ' +
      'mounts, control mounts in battle, or mount/dismount quickly while in medium, light, ' +
      'or no armor. Additionally, the belt grants a +4 competence bonus on all other Ride ' +
      'checks, including those made in heavy armor.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace"],
      cost: 1600,
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
        target: 'skill.ride',
        value: 4,
        source: 'Belt, Equestrian',
      },
      {
        type: 'special',
        target: 'special.auto_success_basic_ride_checks',
        value: 0,
        source: 'Belt, Equestrian',
      },
    ],
  },

  // ---- 149. Belt, Feller's -------------------------------------------------------
  {
    id: "wondrous-belt-feller-s",
    name: "Belt, Feller's",
    category: 'wondrous',
    source: 'Agents of Evil',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'belt',

    price: 12000,
    weight: 1,

    description:
      "Ostensibly designed for lumber operations, this belt serves as a weapon for enforcers " +
      "of the Lumber Consortium in Andoran. The wearer gains a +4 bonus on combat maneuver " +
      "checks to sunder wooden objects, ignores wooden objects' hardness, and bypasses damage " +
      "reduction from plant and fey creatures. After 24 hours of continuous wear, the belt " +
      "doubles the critical threat range of any held axe (as the keen weapon special ability). " +
      "This does not stack with other effects that expand critical threat range.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['keen edge', 'warp wood'],
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
        type: 'bonus',
        bonusType: 'untyped',
        target: 'special.cmb_sunder_wood',
        value: 4,
        source: "Belt, Feller's",
      },
      {
        type: 'special',
        target: 'special.ignore_wood_hardness',
        value: 0,
        source: "Belt, Feller's",
      },
      {
        type: 'special',
        target: 'special.bypass_dr_plant_fey',
        value: 0,
        source: "Belt, Feller's",
      },
      {
        type: 'special',
        target: 'special.keen_axe_after_24hr_wear',
        value: 0,
        source: "Belt, Feller's",
      },
    ],
  },

  // ---- 150. Belt, Gorgon ---------------------------------------------------------
  {
    id: 'wondrous-belt-gorgon',
    name: 'Belt, Gorgon',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'belt',

    price: 23000,
    weight: 1,

    description:
      "This magical belt provides a +4 enhancement bonus to Strength (treat as temporary for " +
      "the first 24 hours worn) and allows the wearer to ignore difficult terrain when charging " +
      "or performing overrun, bull rush, or trample combat maneuvers. Once per day, the wearer " +
      "can spew a 60-foot cone of poisonous green gas. Creatures caught in the area must " +
      "succeed at a DC 18 Fortitude save or be paralyzed for 1d4 rounds. At the end of each " +
      "of its turns, a paralyzed creature may attempt a new save to end the effect.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bull's strength", 'feather step', 'poison'],
      cost: 11500,
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
        bonusType: 'enhancement',
        target: 'ability.str',
        value: 4,
        source: 'Belt, Gorgon',
      },
      {
        type: 'special',
        target: 'special.ignore_difficult_terrain_while_charging_or_maneuver',
        value: 0,
        source: 'Belt, Gorgon',
      },
      {
        type: 'special',
        target: 'special.breath_weapon_60ft_cone_paralysis_1_per_day',
        value: 0,
        source: 'Belt, Gorgon',
      },
    ],
  },
];
