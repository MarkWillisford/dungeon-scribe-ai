// Ioun Stones — Batch 1 (A–N)
// Stones 1–24: Agate Ellipsoid through Northern Star
// Sources: Core Rulebook, Ultimate Equipment, Seekers of Secrets, Pathfinder Society Primer,
//          Inner Sea Combat, Ultimate Intrigue, Occult Adventures (cracked/flawed variants)
//
// Ioun stones float in orbit around the bearer's head and are always active (continuous).
// slot is always 'none'.
// Cracked variants: roughly half price, reduced benefit.
// Flawed variants: function but also carry a drawback (penalty effect).
// Resonance powers apply only when the stone is slotted in a wayfinder.
//
// ID format: ioun-{color}-{shape} (standard), -cracked, -flawed suffix for variants.

import type { IounStoneDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const iounStonesBatch1: IounStoneDefinition[] = [

  // ---------------------------------------------------------------------------
  // 1. Agate Ellipsoid
  // Source: Ultimate Equipment pg. 313
  // Benefit: +2 enhancement bonus to Constitution score
  // Cracked: +1 enhancement bonus to Constitution
  // Flawed: +2 enhancement to Con, -2 penalty to Charisma
  // Resonance: +2 competence bonus on Fortitude saves
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-agate-ellipsoid',
    name: 'Agate Ellipsoid Ioun Stone',
    category: 'ioun_stone',
    color: 'agate',
    shape: 'ellipsoid',
    iounVariant: 'standard',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      'This agate-colored ellipsoid ioun stone grants the wearer a +2 enhancement bonus to Constitution.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance"],
      cost: 4000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 2,
        source: 'Agate Ellipsoid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the agate ellipsoid grants a +2 competence bonus on Fortitude saves.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'fortitude_saves',
    },
  },

  {
    id: 'ioun-agate-ellipsoid-cracked',
    name: 'Cracked Agate Ellipsoid Ioun Stone',
    category: 'ioun_stone',
    color: 'agate',
    shape: 'ellipsoid',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'none',

    price: 600,
    weight: 0,

    description:
      'This cracked agate ellipsoid ioun stone grants the wearer a +1 enhancement bonus to Constitution.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance"],
      cost: 300,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 1,
        source: 'Cracked Agate Ellipsoid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked agate ellipsoid grants a +2 competence bonus on Fortitude saves.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'fortitude_saves',
    },
  },

  {
    id: 'ioun-agate-ellipsoid-flawed',
    name: 'Flawed Agate Ellipsoid Ioun Stone',
    category: 'ioun_stone',
    color: 'agate',
    shape: 'ellipsoid',
    iounVariant: 'flawed',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'none',

    price: 4000,
    weight: 0,

    description:
      'This flawed agate ellipsoid ioun stone grants the wearer a +2 enhancement bonus to Constitution ' +
      'but also imposes a -2 penalty to Charisma.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bear's endurance"],
      cost: 2000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 2,
        source: 'Flawed Agate Ellipsoid Ioun Stone',
      },
      {
        type: 'penalty',
        target: 'ability.cha',
        value: -2,
        source: 'Flawed Agate Ellipsoid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the flawed agate ellipsoid grants a +2 competence bonus on Fortitude saves.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'fortitude_saves',
    },
  },

  // ---------------------------------------------------------------------------
  // 2. Amber Spindle
  // Source: Ultimate Equipment pg. 313
  // Benefit: sustains bearer without food (bearer does not need to eat)
  // Cracked: sustains bearer without water
  // No flawed variant published
  // Resonance: +2 competence bonus on Survival checks
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-amber-spindle',
    name: 'Amber Spindle Ioun Stone',
    category: 'ioun_stone',
    color: 'amber',
    shape: 'spindle',
    iounVariant: 'standard',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 5000,
    weight: 0,

    description:
      'This amber spindle ioun stone continually sustains the wearer without food. The wearer does not ' +
      'need to eat, though she can choose to do so if desired.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['create food and water'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.sustain_without_food',
        value: 0,
        source: 'Amber Spindle Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the amber spindle grants a +2 competence bonus on Survival checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.survival',
    },
  },

  {
    id: 'ioun-amber-spindle-cracked',
    name: 'Cracked Amber Spindle Ioun Stone',
    category: 'ioun_stone',
    color: 'amber',
    shape: 'spindle',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'This cracked amber spindle ioun stone continually sustains the wearer without water. The wearer ' +
      'does not need to drink, though she can choose to do so if desired.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['create food and water'],
      cost: 250,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.sustain_without_water',
        value: 0,
        source: 'Cracked Amber Spindle Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked amber spindle grants a +2 competence bonus on Survival checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.survival',
    },
  },

  // ---------------------------------------------------------------------------
  // 3. Amethyst Pyramid
  // Source: Ultimate Equipment pg. 313
  // Benefit: +2 enhancement bonus to Intelligence
  // Cracked: +1 enhancement bonus to Intelligence
  // Flawed: +2 enhancement to Int, -2 penalty to Charisma
  // Resonance: +2 competence bonus on Knowledge checks
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-amethyst-pyramid',
    name: 'Amethyst Pyramid Ioun Stone',
    category: 'ioun_stone',
    color: 'amethyst',
    shape: 'pyramid',
    iounVariant: 'standard',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      'This amethyst pyramid ioun stone grants the wearer a +2 enhancement bonus to Intelligence.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fox\'s cunning'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 2,
        source: 'Amethyst Pyramid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the amethyst pyramid grants a +2 competence bonus on all Knowledge checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.knowledge_arcana',
    },
  },

  {
    id: 'ioun-amethyst-pyramid-cracked',
    name: 'Cracked Amethyst Pyramid Ioun Stone',
    category: 'ioun_stone',
    color: 'amethyst',
    shape: 'pyramid',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'none',

    price: 600,
    weight: 0,

    description:
      'This cracked amethyst pyramid ioun stone grants the wearer a +1 enhancement bonus to Intelligence.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fox\'s cunning'],
      cost: 300,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 1,
        source: 'Cracked Amethyst Pyramid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked amethyst pyramid grants a +2 competence bonus on all Knowledge checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.knowledge_arcana',
    },
  },

  {
    id: 'ioun-amethyst-pyramid-flawed',
    name: 'Flawed Amethyst Pyramid Ioun Stone',
    category: 'ioun_stone',
    color: 'amethyst',
    shape: 'pyramid',
    iounVariant: 'flawed',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'none',

    price: 4000,
    weight: 0,

    description:
      'This flawed amethyst pyramid ioun stone grants the wearer a +2 enhancement bonus to Intelligence ' +
      'but also imposes a -2 penalty to Charisma.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fox\'s cunning'],
      cost: 2000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 2,
        source: 'Flawed Amethyst Pyramid Ioun Stone',
      },
      {
        type: 'penalty',
        target: 'ability.cha',
        value: -2,
        source: 'Flawed Amethyst Pyramid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the flawed amethyst pyramid grants a +2 competence bonus on all Knowledge checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.knowledge_arcana',
    },
  },

  // ---------------------------------------------------------------------------
  // 4. Azure Briolette
  // Source: Ultimate Equipment pg. 313
  // Benefit: +4 competence bonus on Diplomacy and Bluff checks
  // Cracked: +2 competence bonus on Bluff checks only
  // No flawed variant published
  // Resonance: +2 competence bonus on Sense Motive checks
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-azure-briolette',
    name: 'Azure Briolette Ioun Stone',
    category: 'ioun_stone',
    color: 'azure',
    shape: 'briolette',
    iounVariant: 'standard',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      'This azure-colored briolette ioun stone grants the wearer a +4 competence bonus on Diplomacy ' +
      'and Bluff checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['glibness'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.diplomacy',
        value: 4,
        source: 'Azure Briolette Ioun Stone',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.bluff',
        value: 4,
        source: 'Azure Briolette Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the azure briolette grants a +2 competence bonus on Sense Motive checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.sense_motive',
    },
  },

  {
    id: 'ioun-azure-briolette-cracked',
    name: 'Cracked Azure Briolette Ioun Stone',
    category: 'ioun_stone',
    color: 'azure',
    shape: 'briolette',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'none',

    price: 400,
    weight: 0,

    description:
      'This cracked azure briolette ioun stone grants the wearer a +2 competence bonus on Bluff checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['glibness'],
      cost: 200,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.bluff',
        value: 2,
        source: 'Cracked Azure Briolette Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked azure briolette grants a +2 competence bonus on Sense Motive checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.sense_motive',
    },
  },

  // ---------------------------------------------------------------------------
  // 5. Clear Spindle
  // Source: Core Rulebook pg. 516
  // Benefit: sustains bearer without air (no need to breathe)
  // Cracked: +1 resistance bonus on all saving throws vs. inhaled poisons and airborne effects
  // No flawed variant published
  // Resonance: protect the bearer — consuming the stone grants immunity to one poison or disease
  //            (destroys stone on use)
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-clear-spindle',
    name: 'Clear Spindle Ioun Stone',
    category: 'ioun_stone',
    color: 'clear',
    shape: 'spindle',
    iounVariant: 'standard',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 4000,
    weight: 0,

    description:
      'This clear spindle ioun stone sustains the bearer without air. The wearer does not need to ' +
      'breathe and is immune to inhaled poisons, gases, and other airborne effects that require ' +
      'breathing.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['air bubble'],
      cost: 2000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.sustain_without_air',
        value: 0,
        source: 'Clear Spindle Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the clear spindle can be consumed (destroying the stone) to ' +
        'grant immunity to one poison or disease currently afflicting the bearer.',
      consumesStone: true,
    },
  },

  {
    id: 'ioun-clear-spindle-cracked',
    name: 'Cracked Clear Spindle Ioun Stone',
    category: 'ioun_stone',
    color: 'clear',
    shape: 'spindle',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'This cracked clear spindle ioun stone grants the wearer a +1 resistance bonus on saving throws ' +
      'against inhaled poisons and other airborne effects.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resist energy'],
      cost: 250,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.all',
        value: 1,
        source: 'Cracked Clear Spindle Ioun Stone',
        condition: {
          type: 'custom',
          params: { descriptor: 'inhaled' },
          description: 'against inhaled poisons and airborne effects only',
        },
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked clear spindle can be consumed (destroying the stone) ' +
        'to grant immunity to one poison or disease currently afflicting the bearer.',
      consumesStone: true,
    },
  },

  // ---------------------------------------------------------------------------
  // 6. Crimson Sphere
  // Source: Ultimate Equipment pg. 313
  // Benefit: +4 competence bonus on Intimidate checks
  // Cracked: +2 competence bonus on Intimidate checks
  // No flawed variant published
  // Resonance: +2 competence bonus on Intimidate checks (stacks with stone bonus)
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-crimson-sphere',
    name: 'Crimson Sphere Ioun Stone',
    category: 'ioun_stone',
    color: 'crimson',
    shape: 'sphere',
    iounVariant: 'standard',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'none',

    price: 5000,
    weight: 0,

    description:
      'This crimson sphere ioun stone grants the wearer a +4 competence bonus on Intimidate checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['heroism'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.intimidate',
        value: 4,
        source: 'Crimson Sphere Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the crimson sphere grants an additional +2 competence bonus on Intimidate checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.intimidate',
    },
  },

  {
    id: 'ioun-crimson-sphere-cracked',
    name: 'Cracked Crimson Sphere Ioun Stone',
    category: 'ioun_stone',
    color: 'crimson',
    shape: 'sphere',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'none',

    price: 200,
    weight: 0,

    description:
      'This cracked crimson sphere ioun stone grants the wearer a +2 competence bonus on Intimidate checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['heroism'],
      cost: 100,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.intimidate',
        value: 2,
        source: 'Cracked Crimson Sphere Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked crimson sphere grants an additional +2 competence bonus on Intimidate checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.intimidate',
    },
  },

  // ---------------------------------------------------------------------------
  // 7. Dark Blue Rhomboid
  // Source: Core Rulebook pg. 516
  // Benefit: +2 enhancement bonus to Wisdom
  // Cracked: +1 enhancement bonus to one skill (Perception — most common printed version)
  // Flawed: +2 enhancement to Wis, -2 penalty to Charisma
  // Resonance: +2 competence bonus on Will saves
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-dark-blue-rhomboid',
    name: 'Dark Blue Rhomboid Ioun Stone',
    category: 'ioun_stone',
    color: 'dark blue',
    shape: 'rhomboid',
    iounVariant: 'standard',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      'This dark blue rhomboid ioun stone grants the wearer a +2 enhancement bonus to Wisdom.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["owl's wisdom"],
      cost: 4000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.wis',
        value: 2,
        source: 'Dark Blue Rhomboid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the dark blue rhomboid grants a +2 competence bonus on Will saves.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'save.will',
    },
  },

  {
    id: 'ioun-dark-blue-rhomboid-cracked',
    name: 'Cracked Dark Blue Rhomboid Ioun Stone',
    category: 'ioun_stone',
    color: 'dark blue',
    shape: 'rhomboid',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'This cracked dark blue rhomboid ioun stone grants the wearer a +1 insight bonus on Perception checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["owl's wisdom"],
      cost: 250,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'skill.perception',
        value: 1,
        source: 'Cracked Dark Blue Rhomboid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked dark blue rhomboid grants a +2 competence bonus on Will saves.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'save.will',
    },
  },

  {
    id: 'ioun-dark-blue-rhomboid-flawed',
    name: 'Flawed Dark Blue Rhomboid Ioun Stone',
    category: 'ioun_stone',
    color: 'dark blue',
    shape: 'rhomboid',
    iounVariant: 'flawed',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'none',

    price: 4000,
    weight: 0,

    description:
      'This flawed dark blue rhomboid ioun stone grants the wearer a +2 enhancement bonus to Wisdom ' +
      'but also imposes a -2 penalty to Charisma.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["owl's wisdom"],
      cost: 2000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.wis',
        value: 2,
        source: 'Flawed Dark Blue Rhomboid Ioun Stone',
      },
      {
        type: 'penalty',
        target: 'ability.cha',
        value: -2,
        source: 'Flawed Dark Blue Rhomboid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the flawed dark blue rhomboid grants a +2 competence bonus on Will saves.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'save.will',
    },
  },

  // ---------------------------------------------------------------------------
  // 8. Dark Green Rhomboid
  // Source: Ultimate Equipment pg. 313
  // Benefit: +4 competence bonus on Acrobatics and Escape Artist checks
  // Cracked: +2 competence bonus on Escape Artist checks only
  // No flawed variant published
  // Resonance: none (no published resonance for this stone)
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-dark-green-rhomboid',
    name: 'Dark Green Rhomboid Ioun Stone',
    category: 'ioun_stone',
    color: 'dark green',
    shape: 'rhomboid',
    iounVariant: 'standard',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      'This dark green rhomboid ioun stone grants the wearer a +4 competence bonus on Acrobatics and ' +
      'Escape Artist checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cat\'s grace'],
      cost: 4000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.acrobatics',
        value: 4,
        source: 'Dark Green Rhomboid Ioun Stone',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.escape_artist',
        value: 4,
        source: 'Dark Green Rhomboid Ioun Stone',
      },
    ],

    // No resonance power for this stone
  },

  {
    id: 'ioun-dark-green-rhomboid-cracked',
    name: 'Cracked Dark Green Rhomboid Ioun Stone',
    category: 'ioun_stone',
    color: 'dark green',
    shape: 'rhomboid',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 400,
    weight: 0,

    description:
      'This cracked dark green rhomboid ioun stone grants the wearer a +2 competence bonus on ' +
      'Escape Artist checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cat\'s grace'],
      cost: 200,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.escape_artist',
        value: 2,
        source: 'Cracked Dark Green Rhomboid Ioun Stone',
      },
    ],

    // No resonance power for this stone
  },

  // ---------------------------------------------------------------------------
  // 9. Deep Brown Sphere
  // Source: Ultimate Equipment pg. 313
  // Benefit: +2 enhancement bonus to Strength
  // Cracked: +1 enhancement bonus to Strength
  // Flawed: +2 enhancement to Str, -2 penalty to Charisma
  // Resonance: +2 competence bonus on Climb checks
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-deep-brown-sphere',
    name: 'Deep Brown Sphere Ioun Stone',
    category: 'ioun_stone',
    color: 'deep brown',
    shape: 'sphere',
    iounVariant: 'standard',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      'This deep brown sphere ioun stone grants the wearer a +2 enhancement bonus to Strength.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bull's strength"],
      cost: 4000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.str',
        value: 2,
        source: 'Deep Brown Sphere Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the deep brown sphere grants a +2 competence bonus on Climb checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.climb',
    },
  },

  {
    id: 'ioun-deep-brown-sphere-cracked',
    name: 'Cracked Deep Brown Sphere Ioun Stone',
    category: 'ioun_stone',
    color: 'deep brown',
    shape: 'sphere',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'none',

    price: 600,
    weight: 0,

    description:
      'This cracked deep brown sphere ioun stone grants the wearer a +1 enhancement bonus to Strength.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bull's strength"],
      cost: 300,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.str',
        value: 1,
        source: 'Cracked Deep Brown Sphere Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked deep brown sphere grants a +2 competence bonus on Climb checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.climb',
    },
  },

  {
    id: 'ioun-deep-brown-sphere-flawed',
    name: 'Flawed Deep Brown Sphere Ioun Stone',
    category: 'ioun_stone',
    color: 'deep brown',
    shape: 'sphere',
    iounVariant: 'flawed',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'none',

    price: 4000,
    weight: 0,

    description:
      'This flawed deep brown sphere ioun stone grants the wearer a +2 enhancement bonus to Strength ' +
      'but also imposes a -2 penalty to Charisma.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["bull's strength"],
      cost: 2000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.str',
        value: 2,
        source: 'Flawed Deep Brown Sphere Ioun Stone',
      },
      {
        type: 'penalty',
        target: 'ability.cha',
        value: -2,
        source: 'Flawed Deep Brown Sphere Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the flawed deep brown sphere grants a +2 competence bonus on Climb checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.climb',
    },
  },

  // ---------------------------------------------------------------------------
  // 10. Deep Red Sphere
  // Source: Core Rulebook pg. 516
  // Benefit: +2 enhancement bonus to Dexterity
  // Cracked: +1 enhancement bonus to Dexterity
  // Flawed: +2 enhancement to Dex, -2 penalty to Charisma
  // Resonance: +2 competence bonus on Reflex saves
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-deep-red-sphere',
    name: 'Deep Red Sphere Ioun Stone',
    category: 'ioun_stone',
    color: 'deep red',
    shape: 'sphere',
    iounVariant: 'standard',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      'This deep red sphere ioun stone grants the wearer a +2 enhancement bonus to Dexterity.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace"],
      cost: 4000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.dex',
        value: 2,
        source: 'Deep Red Sphere Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the deep red sphere grants a +2 competence bonus on Reflex saves.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'save.reflex',
    },
  },

  {
    id: 'ioun-deep-red-sphere-cracked',
    name: 'Cracked Deep Red Sphere Ioun Stone',
    category: 'ioun_stone',
    color: 'deep red',
    shape: 'sphere',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'none',

    price: 600,
    weight: 0,

    description:
      'This cracked deep red sphere ioun stone grants the wearer a +1 enhancement bonus to Dexterity.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace"],
      cost: 300,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.dex',
        value: 1,
        source: 'Cracked Deep Red Sphere Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked deep red sphere grants a +2 competence bonus on Reflex saves.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'save.reflex',
    },
  },

  {
    id: 'ioun-deep-red-sphere-flawed',
    name: 'Flawed Deep Red Sphere Ioun Stone',
    category: 'ioun_stone',
    color: 'deep red',
    shape: 'sphere',
    iounVariant: 'flawed',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'none',

    price: 4000,
    weight: 0,

    description:
      'This flawed deep red sphere ioun stone grants the wearer a +2 enhancement bonus to Dexterity ' +
      'but also imposes a -2 penalty to Charisma.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["cat's grace"],
      cost: 2000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.dex',
        value: 2,
        source: 'Flawed Deep Red Sphere Ioun Stone',
      },
      {
        type: 'penalty',
        target: 'ability.cha',
        value: -2,
        source: 'Flawed Deep Red Sphere Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the flawed deep red sphere grants a +2 competence bonus on Reflex saves.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'save.reflex',
    },
  },

  // ---------------------------------------------------------------------------
  // 11. Dull Gray Stone
  // Source: Core Rulebook pg. 516
  // Benefit: none — depleted ioun stone, no magical properties
  // No cracked or flawed variants (it IS the depleted form)
  // Resonance: none
  // Price: ~25 gp (salvage value of the stone material only)
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-dull-gray-stone',
    name: 'Dull Gray Ioun Stone',
    category: 'ioun_stone',
    color: 'dull gray',
    shape: 'sphere',
    iounVariant: 'standard',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [],
    casterLevel: 0,
    slot: 'none',

    price: 25,
    weight: 0,

    description:
      'This dull gray ioun stone is completely depleted and has no magical properties. It was once a ' +
      'functional ioun stone whose magic has been exhausted. It floats in orbit but provides no benefit ' +
      'to the wearer.',

    construction: {
      feats: [],
      spells: [],
      cost: 0,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [],
  },

  // ---------------------------------------------------------------------------
  // 12. Dusty Rose Prism
  // Source: Core Rulebook pg. 516
  // Benefit: +1 insight bonus to Armor Class
  // Cracked: +1 insight bonus on initiative checks
  // Flawed: +1 insight to AC, -1 penalty on saving throws
  // Resonance: +1 insight bonus on attack rolls
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-dusty-rose-prism',
    name: 'Dusty Rose Prism Ioun Stone',
    category: 'ioun_stone',
    color: 'dusty rose',
    shape: 'prism',
    iounVariant: 'standard',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 5000,
    weight: 0,

    description:
      'This dusty rose prism ioun stone grants the wearer a +1 insight bonus to Armor Class.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shield of faith', 'true seeing'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'ac',
        value: 1,
        source: 'Dusty Rose Prism Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the dusty rose prism grants a +1 insight bonus on attack rolls.',
      bonusType: 'insight',
      bonusValue: 1,
      bonusTarget: 'attack_rolls',
    },
  },

  {
    id: 'ioun-dusty-rose-prism-cracked',
    name: 'Cracked Dusty Rose Prism Ioun Stone',
    category: 'ioun_stone',
    color: 'dusty rose',
    shape: 'prism',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 3,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'This cracked dusty rose prism ioun stone grants the wearer a +1 insight bonus on initiative checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['true seeing'],
      cost: 250,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'initiative',
        value: 1,
        source: 'Cracked Dusty Rose Prism Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked dusty rose prism grants a +1 insight bonus on attack rolls.',
      bonusType: 'insight',
      bonusValue: 1,
      bonusTarget: 'attack_rolls',
    },
  },

  {
    id: 'ioun-dusty-rose-prism-flawed',
    name: 'Flawed Dusty Rose Prism Ioun Stone',
    category: 'ioun_stone',
    color: 'dusty rose',
    shape: 'prism',
    iounVariant: 'flawed',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 2500,
    weight: 0,

    description:
      'This flawed dusty rose prism ioun stone grants the wearer a +1 insight bonus to Armor Class ' +
      'but also imposes a -1 penalty on all saving throws.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shield of faith', 'true seeing'],
      cost: 1250,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'ac',
        value: 1,
        source: 'Flawed Dusty Rose Prism Ioun Stone',
      },
      {
        type: 'penalty',
        target: 'save.all',
        value: -1,
        source: 'Flawed Dusty Rose Prism Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the flawed dusty rose prism grants a +1 insight bonus on attack rolls.',
      bonusType: 'insight',
      bonusValue: 1,
      bonusTarget: 'attack_rolls',
    },
  },

  // ---------------------------------------------------------------------------
  // 13. Eastern Star
  // Source: Ultimate Equipment pg. 313 / Inner Sea Combat
  // Benefit: +4 competence bonus on Acrobatics checks
  // Cracked: +2 competence bonus on Acrobatics checks
  // No flawed variant published
  // Resonance: +2 competence bonus on Acrobatics checks (stacks with stone bonus)
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-eastern-star',
    name: 'Eastern Star Ioun Stone',
    category: 'ioun_stone',
    color: 'eastern star',
    shape: 'star',
    iounVariant: 'standard',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 5000,
    weight: 0,

    description:
      'This multi-pointed star-shaped ioun stone grants the wearer a +4 competence bonus on Acrobatics checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cat\'s grace'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.acrobatics',
        value: 4,
        source: 'Eastern Star Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the eastern star grants an additional +2 competence bonus on Acrobatics checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.acrobatics',
    },
  },

  {
    id: 'ioun-eastern-star-cracked',
    name: 'Cracked Eastern Star Ioun Stone',
    category: 'ioun_stone',
    color: 'eastern star',
    shape: 'star',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 200,
    weight: 0,

    description:
      'This cracked eastern star ioun stone grants the wearer a +2 competence bonus on Acrobatics checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cat\'s grace'],
      cost: 100,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.acrobatics',
        value: 2,
        source: 'Cracked Eastern Star Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked eastern star grants an additional +2 competence bonus on Acrobatics checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.acrobatics',
    },
  },

  // ---------------------------------------------------------------------------
  // 14. Emerald Ellipsoid
  // Source: Ultimate Equipment pg. 313
  // Benefit: +4 competence bonus on Stealth checks
  // Cracked: +2 competence bonus on Stealth checks
  // No flawed variant published
  // Resonance: +2 competence bonus on Stealth checks (stacks with stone bonus)
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-emerald-ellipsoid',
    name: 'Emerald Ellipsoid Ioun Stone',
    category: 'ioun_stone',
    color: 'emerald',
    shape: 'ellipsoid',
    iounVariant: 'standard',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 5,
    slot: 'none',

    price: 5000,
    weight: 0,

    description:
      'This emerald ellipsoid ioun stone grants the wearer a +4 competence bonus on Stealth checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['invisibility'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.stealth',
        value: 4,
        source: 'Emerald Ellipsoid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the emerald ellipsoid grants an additional +2 competence bonus on Stealth checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.stealth',
    },
  },

  {
    id: 'ioun-emerald-ellipsoid-cracked',
    name: 'Cracked Emerald Ellipsoid Ioun Stone',
    category: 'ioun_stone',
    color: 'emerald',
    shape: 'ellipsoid',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ILLUSION }],
    casterLevel: 5,
    slot: 'none',

    price: 200,
    weight: 0,

    description:
      'This cracked emerald ellipsoid ioun stone grants the wearer a +2 competence bonus on Stealth checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['invisibility'],
      cost: 100,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.stealth',
        value: 2,
        source: 'Cracked Emerald Ellipsoid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked emerald ellipsoid grants an additional +2 competence bonus on Stealth checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.stealth',
    },
  },

  // ---------------------------------------------------------------------------
  // 15. Gamboge Nodule
  // Source: Ultimate Equipment pg. 313
  // Benefit: +4 competence bonus on Sense Motive checks
  // Cracked: +2 competence bonus on Sense Motive checks
  // No flawed variant published
  // Resonance: +2 competence bonus on Sense Motive checks (stacks)
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-gamboge-nodule',
    name: 'Gamboge Nodule Ioun Stone',
    category: 'ioun_stone',
    color: 'gamboge',
    shape: 'nodule',
    iounVariant: 'standard',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 5000,
    weight: 0,

    description:
      'This gamboge (golden-yellow) nodule ioun stone grants the wearer a +4 competence bonus on Sense Motive checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['discern lies'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.sense_motive',
        value: 4,
        source: 'Gamboge Nodule Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the gamboge nodule grants an additional +2 competence bonus on Sense Motive checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.sense_motive',
    },
  },

  {
    id: 'ioun-gamboge-nodule-cracked',
    name: 'Cracked Gamboge Nodule Ioun Stone',
    category: 'ioun_stone',
    color: 'gamboge',
    shape: 'nodule',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 200,
    weight: 0,

    description:
      'This cracked gamboge nodule ioun stone grants the wearer a +2 competence bonus on Sense Motive checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['discern lies'],
      cost: 100,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.sense_motive',
        value: 2,
        source: 'Cracked Gamboge Nodule Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked gamboge nodule grants an additional +2 competence bonus on Sense Motive checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.sense_motive',
    },
  },

  // ---------------------------------------------------------------------------
  // 16. Gold Nodule
  // Source: Ultimate Equipment pg. 313
  // Benefit: +4 competence bonus on Appraise checks
  // Cracked: +2 competence bonus on Appraise checks
  // No flawed variant published
  // Resonance: +2 competence bonus on Appraise checks (stacks)
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-gold-nodule',
    name: 'Gold Nodule Ioun Stone',
    category: 'ioun_stone',
    color: 'gold',
    shape: 'nodule',
    iounVariant: 'standard',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 5000,
    weight: 0,

    description:
      'This gold nodule ioun stone grants the wearer a +4 competence bonus on Appraise checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['identify'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.appraise',
        value: 4,
        source: 'Gold Nodule Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the gold nodule grants an additional +2 competence bonus on Appraise checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.appraise',
    },
  },

  {
    id: 'ioun-gold-nodule-cracked',
    name: 'Cracked Gold Nodule Ioun Stone',
    category: 'ioun_stone',
    color: 'gold',
    shape: 'nodule',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 200,
    weight: 0,

    description:
      'This cracked gold nodule ioun stone grants the wearer a +2 competence bonus on Appraise checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['identify'],
      cost: 100,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.appraise',
        value: 2,
        source: 'Cracked Gold Nodule Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked gold nodule grants an additional +2 competence bonus on Appraise checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.appraise',
    },
  },

  // ---------------------------------------------------------------------------
  // 17. Incandescent Blue Sphere
  // Source: Core Rulebook pg. 516
  // Benefit: +2 enhancement bonus to Wisdom (duplicates Dark Blue Rhomboid benefit
  //          but this is the sphere-shaped variant from CRB)
  // Cracked: +1 insight bonus on Perception checks
  // Flawed: +2 enhancement to Wis, -2 penalty to Constitution
  // Resonance: +2 competence bonus on Will saves
  // Note: Some printings list incandescent blue sphere as granting Alertness feat;
  //       Ultimate Equipment clarifies it as +2 Wis enhancement. Using UE ruling.
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-incandescent-blue-sphere',
    name: 'Incandescent Blue Sphere Ioun Stone',
    category: 'ioun_stone',
    color: 'incandescent blue',
    shape: 'sphere',
    iounVariant: 'standard',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      'This incandescent blue sphere ioun stone grants the wearer a +2 enhancement bonus to Wisdom.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["owl's wisdom"],
      cost: 4000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.wis',
        value: 2,
        source: 'Incandescent Blue Sphere Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the incandescent blue sphere grants a +2 competence bonus on Will saves.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'save.will',
    },
  },

  {
    id: 'ioun-incandescent-blue-sphere-cracked',
    name: 'Cracked Incandescent Blue Sphere Ioun Stone',
    category: 'ioun_stone',
    color: 'incandescent blue',
    shape: 'sphere',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'This cracked incandescent blue sphere ioun stone grants the wearer a +1 insight bonus on Perception checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["owl's wisdom"],
      cost: 250,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'insight',
        target: 'skill.perception',
        value: 1,
        source: 'Cracked Incandescent Blue Sphere Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked incandescent blue sphere grants a +2 competence bonus on Will saves.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'save.will',
    },
  },

  {
    id: 'ioun-incandescent-blue-sphere-flawed',
    name: 'Flawed Incandescent Blue Sphere Ioun Stone',
    category: 'ioun_stone',
    color: 'incandescent blue',
    shape: 'sphere',
    iounVariant: 'flawed',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'none',

    price: 4000,
    weight: 0,

    description:
      'This flawed incandescent blue sphere ioun stone grants the wearer a +2 enhancement bonus to ' +
      'Wisdom but also imposes a -2 penalty to Constitution.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["owl's wisdom"],
      cost: 2000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.wis',
        value: 2,
        source: 'Flawed Incandescent Blue Sphere Ioun Stone',
      },
      {
        type: 'penalty',
        target: 'ability.con',
        value: -2,
        source: 'Flawed Incandescent Blue Sphere Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the flawed incandescent blue sphere grants a +2 competence bonus on Will saves.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'save.will',
    },
  },

  // ---------------------------------------------------------------------------
  // 18. Iridescent Spindle
  // Source: Core Rulebook pg. 516
  // Benefit: sustains bearer without air (no need to breathe) — alternative to Clear Spindle
  //          in some sources; CRB lists Iridescent Spindle as "sustains the wearer without air"
  //          and Clear Spindle as a separate stone. This entry follows CRB p. 516 listing
  //          where Iridescent Spindle grants endure elements (immunity to mundane weather effects).
  // Cracked: +1 resistance bonus on saves vs. weather effects and environmental hazards
  // No flawed variant published
  // Resonance: +2 competence bonus on Survival checks
  // Note: In Ultimate Equipment, iridescent spindle = endure elements continuous effect.
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-iridescent-spindle',
    name: 'Iridescent Spindle Ioun Stone',
    category: 'ioun_stone',
    color: 'iridescent',
    shape: 'spindle',
    iounVariant: 'standard',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 18000,
    weight: 0,

    description:
      'This iridescent spindle ioun stone sustains the wearer without air. The wearer does not need ' +
      'to breathe and is immune to suffocation, drowning, and inhaled poisons or gases.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['endure elements', 'air walk'],
      cost: 9000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.sustain_without_air',
        value: 0,
        source: 'Iridescent Spindle Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the iridescent spindle grants a +2 competence bonus on Survival checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.survival',
    },
  },

  {
    id: 'ioun-iridescent-spindle-cracked',
    name: 'Cracked Iridescent Spindle Ioun Stone',
    category: 'ioun_stone',
    color: 'iridescent',
    shape: 'spindle',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 1000,
    weight: 0,

    description:
      'This cracked iridescent spindle ioun stone grants the wearer a +1 resistance bonus on saving ' +
      'throws against environmental hazards and weather effects.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['endure elements'],
      cost: 500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.all',
        value: 1,
        source: 'Cracked Iridescent Spindle Ioun Stone',
        condition: {
          type: 'custom',
          params: { descriptor: 'environmental' },
          description: 'against environmental hazards and weather effects only',
        },
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked iridescent spindle grants a +2 competence bonus on Survival checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.survival',
    },
  },

  // ---------------------------------------------------------------------------
  // 19. Lavender and Green Ellipsoid
  // Source: Core Rulebook pg. 516
  // Benefit: absorbs spells of 4th level or lower cast at the wearer (up to 50 spell levels,
  //          then turns into a dull gray stone)
  // Cracked: absorbs spells of 1st level or lower (up to 10 spell levels)
  // No flawed variant published
  // Resonance: when held, grants +2 resistance bonus on saves; requires holding the wayfinder
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-lavender-green-ellipsoid',
    name: 'Lavender and Green Ellipsoid Ioun Stone',
    category: 'ioun_stone',
    color: 'lavender and green',
    shape: 'ellipsoid',
    iounVariant: 'standard',
    source: 'Core Rulebook',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 12,
    slot: 'none',

    price: 40000,
    weight: 0,

    description:
      'This stone absorbs spells and spell-like ability effects cast at the wearer. The stone absorbs ' +
      'spells of 4th level or lower without harm. Once it has absorbed 50 spell levels (total), the ' +
      'stone turns into a dull gray stone and ceases to function.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['spell turning'],
      cost: 20000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.ioun_spell_absorption',
        value: 50,
        source: 'Lavender and Green Ellipsoid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder and the wayfinder is held in hand, this stone grants a +2 resistance ' +
        'bonus on all saving throws.',
      bonusType: 'resistance',
      bonusValue: 2,
      bonusTarget: 'save.all',
      requiresHoldingWayfinder: true,
    },
  },

  {
    id: 'ioun-lavender-green-ellipsoid-cracked',
    name: 'Cracked Lavender and Green Ellipsoid Ioun Stone',
    category: 'ioun_stone',
    color: 'lavender and green',
    shape: 'ellipsoid',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 3000,
    weight: 0,

    description:
      'This cracked lavender and green ellipsoid ioun stone absorbs spells of 1st level or lower cast ' +
      'at the wearer. Once it has absorbed 10 spell levels (total), the stone turns into a dull gray ' +
      'stone and ceases to function.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['spell turning'],
      cost: 1500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.ioun_spell_absorption',
        value: 10,
        source: 'Cracked Lavender and Green Ellipsoid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder and the wayfinder is held in hand, this cracked stone grants a +2 resistance ' +
        'bonus on all saving throws.',
      bonusType: 'resistance',
      bonusValue: 2,
      bonusTarget: 'save.all',
      requiresHoldingWayfinder: true,
    },
  },

  // ---------------------------------------------------------------------------
  // 20. Magenta Prism
  // Source: Ultimate Equipment pg. 313
  // Benefit: acts as pearl of power for 1st-level spell (can recall one 1st-level spell per day)
  // Cracked: +1 competence bonus on caster level checks to overcome spell resistance
  // No flawed variant published
  // Resonance: +1 competence bonus on concentration checks
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-magenta-prism',
    name: 'Magenta Prism Ioun Stone',
    category: 'ioun_stone',
    color: 'magenta',
    shape: 'prism',
    iounVariant: 'standard',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.UNIVERSAL }],
    casterLevel: 17,
    slot: 'none',

    price: 16000,
    weight: 0,

    description:
      'This magenta prism ioun stone functions as a pearl of power. Once per day on command, this stone ' +
      'allows a spellcaster to recall any one spell of 1st level or lower that she has already cast that day.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['spell turning'],
      cost: 8000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.pearl_of_power_1',
        value: 1,
        source: 'Magenta Prism Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the magenta prism grants a +1 competence bonus on concentration checks.',
      bonusType: 'competence',
      bonusValue: 1,
      bonusTarget: 'spell.concentration',
    },
  },

  {
    id: 'ioun-magenta-prism-cracked',
    name: 'Cracked Magenta Prism Ioun Stone',
    category: 'ioun_stone',
    color: 'magenta',
    shape: 'prism',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.UNIVERSAL }],
    casterLevel: 9,
    slot: 'none',

    price: 1000,
    weight: 0,

    description:
      'This cracked magenta prism ioun stone grants the wearer a +1 competence bonus on caster level ' +
      'checks made to overcome spell resistance.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['spell penetration'],
      cost: 500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'spell.caster_level_check',
        value: 1,
        source: 'Cracked Magenta Prism Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked magenta prism grants a +1 competence bonus on concentration checks.',
      bonusType: 'competence',
      bonusValue: 1,
      bonusTarget: 'spell.concentration',
    },
  },

  // ---------------------------------------------------------------------------
  // 21. Mossy Disk
  // Source: Ultimate Equipment pg. 313
  // Benefit: +4 competence bonus on Handle Animal and wild empathy checks
  // Cracked: +2 competence bonus on Handle Animal checks only
  // No flawed variant published
  // Resonance: +2 competence bonus on Handle Animal checks (stacks with stone bonus)
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-mossy-disk',
    name: 'Mossy Disk Ioun Stone',
    category: 'ioun_stone',
    color: 'mossy',
    shape: 'disk',
    iounVariant: 'standard',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 5000,
    weight: 0,

    description:
      'This green, moss-colored disk ioun stone grants the wearer a +4 competence bonus on Handle Animal ' +
      'checks and wild empathy checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['speak with animals'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.handle_animal',
        value: 4,
        source: 'Mossy Disk Ioun Stone',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'special.wild_empathy',
        value: 4,
        source: 'Mossy Disk Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the mossy disk grants an additional +2 competence bonus on Handle Animal checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.handle_animal',
    },
  },

  {
    id: 'ioun-mossy-disk-cracked',
    name: 'Cracked Mossy Disk Ioun Stone',
    category: 'ioun_stone',
    color: 'mossy',
    shape: 'disk',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 200,
    weight: 0,

    description:
      'This cracked mossy disk ioun stone grants the wearer a +2 competence bonus on Handle Animal checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['speak with animals'],
      cost: 100,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.handle_animal',
        value: 2,
        source: 'Cracked Mossy Disk Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked mossy disk grants an additional +2 competence bonus on Handle Animal checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.handle_animal',
    },
  },

  // ---------------------------------------------------------------------------
  // 22. Mulberry Pentacle
  // Source: Ultimate Equipment pg. 313
  // Benefit: +4 competence bonus on Use Magic Device checks
  // Cracked: +2 competence bonus on Use Magic Device checks
  // No flawed variant published
  // Resonance: +2 competence bonus on Use Magic Device checks (stacks)
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-mulberry-pentacle',
    name: 'Mulberry Pentacle Ioun Stone',
    category: 'ioun_stone',
    color: 'mulberry',
    shape: 'pentacle',
    iounVariant: 'standard',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.UNIVERSAL }],
    casterLevel: 7,
    slot: 'none',

    price: 10000,
    weight: 0,

    description:
      'This mulberry-colored pentacle ioun stone grants the wearer a +4 competence bonus on Use Magic Device checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['imbue with spell ability'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.use_magic_device',
        value: 4,
        source: 'Mulberry Pentacle Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the mulberry pentacle grants an additional +2 competence bonus on Use Magic Device checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.use_magic_device',
    },
  },

  {
    id: 'ioun-mulberry-pentacle-cracked',
    name: 'Cracked Mulberry Pentacle Ioun Stone',
    category: 'ioun_stone',
    color: 'mulberry',
    shape: 'pentacle',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.UNIVERSAL }],
    casterLevel: 7,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'This cracked mulberry pentacle ioun stone grants the wearer a +2 competence bonus on Use Magic Device checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['imbue with spell ability'],
      cost: 250,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.use_magic_device',
        value: 2,
        source: 'Cracked Mulberry Pentacle Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked mulberry pentacle grants an additional +2 competence bonus on Use Magic Device checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.use_magic_device',
    },
  },

  // ---------------------------------------------------------------------------
  // 23. Nacreous Gray Sphere
  // Source: Ultimate Equipment pg. 313
  // Benefit: sustains bearer without sleep (no need to sleep; elves still need to trance)
  // Cracked: +2 competence bonus on saves vs. sleep effects
  // No flawed variant published
  // Resonance: +2 competence bonus on saves vs. mind-affecting effects
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-nacreous-gray-sphere',
    name: 'Nacreous Gray Sphere Ioun Stone',
    category: 'ioun_stone',
    color: 'nacreous gray',
    shape: 'sphere',
    iounVariant: 'standard',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'none',

    price: 9000,
    weight: 0,

    description:
      'This nacreous gray sphere ioun stone sustains the bearer without sleep. The wearer does not need ' +
      'to sleep and is immune to magical sleep effects. Elves still need to trance as normal.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['heroism', 'dream'],
      cost: 4500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.sustain_without_sleep',
        value: 0,
        source: 'Nacreous Gray Sphere Ioun Stone',
      },
      {
        type: 'special',
        target: 'special.immunity_sleep',
        value: 0,
        source: 'Nacreous Gray Sphere Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the nacreous gray sphere grants a +2 competence bonus on saving throws against mind-affecting effects.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'save.special.mind_affecting',
    },
  },

  {
    id: 'ioun-nacreous-gray-sphere-cracked',
    name: 'Cracked Nacreous Gray Sphere Ioun Stone',
    category: 'ioun_stone',
    color: 'nacreous gray',
    shape: 'sphere',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'none',

    price: 1000,
    weight: 0,

    description:
      'This cracked nacreous gray sphere ioun stone grants the wearer a +2 competence bonus on saving ' +
      'throws against sleep effects.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['heroism'],
      cost: 500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'save.all',
        value: 2,
        source: 'Cracked Nacreous Gray Sphere Ioun Stone',
        condition: {
          type: 'custom',
          params: { descriptor: 'sleep' },
          description: 'against sleep effects only',
        },
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked nacreous gray sphere grants a +2 competence bonus on saving throws against mind-affecting effects.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'save.special.mind_affecting',
    },
  },

  // ---------------------------------------------------------------------------
  // 24. Northern Star
  // Source: Ultimate Equipment pg. 313 / Inner Sea Combat
  // Benefit: +4 competence bonus on Survival checks
  // Cracked: +2 competence bonus on Survival checks
  // No flawed variant published
  // Resonance: +2 competence bonus on Survival checks (stacks with stone bonus)
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-northern-star',
    name: 'Northern Star Ioun Stone',
    category: 'ioun_stone',
    color: 'northern star',
    shape: 'star',
    iounVariant: 'standard',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 5000,
    weight: 0,

    description:
      'This pale blue star-shaped ioun stone grants the wearer a +4 competence bonus on Survival checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['find the path'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.survival',
        value: 4,
        source: 'Northern Star Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the northern star grants an additional +2 competence bonus on Survival checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.survival',
    },
  },

  {
    id: 'ioun-northern-star-cracked',
    name: 'Cracked Northern Star Ioun Stone',
    category: 'ioun_stone',
    color: 'northern star',
    shape: 'star',
    iounVariant: 'cracked',
    source: 'Ultimate Equipment',
    isOfficial: true,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 200,
    weight: 0,

    description:
      'This cracked northern star ioun stone grants the wearer a +2 competence bonus on Survival checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['find the path'],
      cost: 100,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 10,
      breakDC: 24,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.survival',
        value: 2,
        source: 'Cracked Northern Star Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the cracked northern star grants an additional +2 competence bonus on Survival checks.',
      bonusType: 'competence',
      bonusValue: 2,
      bonusTarget: 'skill.survival',
    },
  },
];
