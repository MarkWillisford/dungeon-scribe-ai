import type { IounStoneDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const iounStonesBatch2: IounStoneDefinition[] = [
  // ---------------------------------------------------------------------------
  // 1. Onyx Rhomboid
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-onyx-rhomboid',
    name: 'Onyx Rhomboid Ioun Stone',
    category: 'ioun_stone',
    source: 'Pathfinder RPG: Occult Adventures',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'onyx',
    shape: 'rhomboid',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.NECROMANCY }],
    casterLevel: 12,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      'This jet-black stone sustains the wearer without need for food or water, as per the spell ' +
      'sustain (4th-level cleric spell). The wearer does not need to eat or drink, though he may choose to do so.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['hero\'s feast'],
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
        type: 'special',
        target: 'special.sustenance',
        value: 1,
        source: 'Onyx Rhomboid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the onyx rhomboid grants the wearer a +4 competence bonus on ' +
        'Survival checks made to find food and water.',
      bonusType: 'competence',
      bonusValue: 4,
      bonusTarget: 'skill.survival_food_water',
    },
  },

  {
    id: 'ioun-onyx-rhomboid-cracked',
    name: 'Onyx Rhomboid Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Pathfinder RPG: Occult Adventures',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'onyx',
    shape: 'rhomboid',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'none',

    price: 400,
    weight: 0,

    description:
      'This cracked onyx rhomboid sustains the wearer without need for food (but still requires water).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['create food and water'],
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
        type: 'special',
        target: 'special.sustenance_no_food',
        value: 1,
        source: 'Onyx Rhomboid Ioun Stone (Cracked)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. Opalescent White Pyramid
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-opalescent-white-pyramid',
    name: 'Opalescent White Pyramid Ioun Stone',
    category: 'ioun_stone',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'opalescent white',
    shape: 'pyramid',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',

    price: 10000,
    weight: 0,

    description:
      'This white stone with an opal-like sheen grants proficiency with one type of weapon chosen at ' +
      'the time of the stone\'s creation.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['greater magic weapon'],
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
        type: 'special',
        target: 'special.weapon_proficiency',
        value: 1,
        source: 'Opalescent White Pyramid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the stone expands the granted proficiency to include all weapons ' +
        'in the same weapon group as the chosen weapon.',
    },
  },

  {
    id: 'ioun-opalescent-white-pyramid-cracked',
    name: 'Opalescent White Pyramid Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'opalescent white',
    shape: 'pyramid',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 1000,
    weight: 0,

    description:
      'This cracked opalescent white pyramid grants proficiency with one specific martial or exotic ' +
      'weapon chosen at the time of the stone\'s creation.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['magic weapon'],
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
        type: 'special',
        target: 'special.weapon_proficiency_one',
        value: 1,
        source: 'Opalescent White Pyramid Ioun Stone (Cracked)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. Orange Prism
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-orange-prism',
    name: 'Orange Prism Ioun Stone',
    category: 'ioun_stone',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'orange',
    shape: 'prism',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.UNIVERSAL }],
    casterLevel: 15,
    slot: 'none',

    price: 30000,
    weight: 0,

    description:
      'This stone increases the bearer\'s caster level by 1.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish'],
      cost: 15000,
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
        target: 'spell.caster_level',
        value: 1,
        source: 'Orange Prism Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the orange prism adds an additional +1 bonus to the wearer\'s ' +
        'effective caster level for the purpose of determining spell duration only.',
      bonusType: 'competence',
      bonusValue: 1,
      bonusTarget: 'spell.caster_level_duration',
    },
  },

  {
    id: 'ioun-orange-prism-cracked',
    name: 'Orange Prism Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'orange',
    shape: 'prism',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.UNIVERSAL }],
    casterLevel: 9,
    slot: 'none',

    price: 1000,
    weight: 0,

    description:
      'This cracked orange prism increases the bearer\'s effective caster level for the purpose of ' +
      'determining the potency and duration of one specific spell known (chosen when the stone is created).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['limited wish'],
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
        bonusType: 'enhancement',
        target: 'spell.caster_level_one_spell',
        value: 1,
        source: 'Orange Prism Ioun Stone (Cracked)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. Pale Blue Rhomboid
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-pale-blue-rhomboid',
    name: 'Pale Blue Rhomboid Ioun Stone',
    category: 'ioun_stone',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pale blue',
    shape: 'rhomboid',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      'This stone increases the wearer\'s Strength score by 2.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bull\'s strength'],
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
        source: 'Pale Blue Rhomboid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the pale blue rhomboid grants a +1 competence bonus on Strength-based ' +
        'skill checks.',
      bonusType: 'competence',
      bonusValue: 1,
      bonusTarget: 'skill.strength_based',
    },
  },

  {
    id: 'ioun-pale-blue-rhomboid-cracked',
    name: 'Pale Blue Rhomboid Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pale blue',
    shape: 'rhomboid',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'This cracked stone grants a +1 enhancement bonus to Strength.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bull\'s strength'],
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
        bonusType: 'enhancement',
        target: 'ability.str',
        value: 1,
        source: 'Pale Blue Rhomboid Ioun Stone (Cracked)',
      },
    ],
  },

  {
    id: 'ioun-pale-blue-rhomboid-flawed',
    name: 'Pale Blue Rhomboid Ioun Stone (Flawed)',
    category: 'ioun_stone',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pale blue',
    shape: 'rhomboid',
    iounVariant: 'flawed',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'This flawed stone grants a +2 enhancement bonus to Strength but imposes a -1 penalty to Dexterity.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bull\'s strength'],
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
        bonusType: 'enhancement',
        target: 'ability.str',
        value: 2,
        source: 'Pale Blue Rhomboid Ioun Stone (Flawed)',
      },
      {
        type: 'penalty',
        target: 'ability.dex',
        value: -1,
        source: 'Pale Blue Rhomboid Ioun Stone (Flawed)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 5. Pale Green Prism
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-pale-green-prism',
    name: 'Pale Green Prism Ioun Stone',
    category: 'ioun_stone',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pale green',
    shape: 'prism',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 15,
    slot: 'none',

    price: 30000,
    weight: 0,

    description:
      'This stone grants a +1 competence bonus on all attack rolls, saving throws, skill checks, ' +
      'and ability checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish'],
      cost: 15000,
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
        target: 'attack.all',
        value: 1,
        source: 'Pale Green Prism Ioun Stone',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'save.all',
        value: 1,
        source: 'Pale Green Prism Ioun Stone',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.all',
        value: 1,
        source: 'Pale Green Prism Ioun Stone',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'ability_check.all',
        value: 1,
        source: 'Pale Green Prism Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the pale green prism expands its competence bonus to also apply to ' +
        'caster level checks.',
      bonusType: 'competence',
      bonusValue: 1,
      bonusTarget: 'caster_level_check',
    },
  },

  {
    id: 'ioun-pale-green-prism-cracked',
    name: 'Pale Green Prism Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pale green',
    shape: 'prism',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 4000,
    weight: 0,

    description:
      'This cracked pale green prism grants a +1 competence bonus on all saving throws.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resistance'],
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
        bonusType: 'competence',
        target: 'save.all',
        value: 1,
        source: 'Pale Green Prism Ioun Stone (Cracked)',
      },
    ],
  },

  {
    id: 'ioun-pale-green-prism-flawed',
    name: 'Pale Green Prism Ioun Stone (Flawed)',
    category: 'ioun_stone',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pale green',
    shape: 'prism',
    iounVariant: 'flawed',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 4000,
    weight: 0,

    description:
      'This flawed pale green prism grants a +1 competence bonus on all attack rolls, saving throws, ' +
      'skill checks, and ability checks, but imposes a -1 penalty on all initiative checks.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['guidance'],
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
        bonusType: 'competence',
        target: 'attack.all',
        value: 1,
        source: 'Pale Green Prism Ioun Stone (Flawed)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'save.all',
        value: 1,
        source: 'Pale Green Prism Ioun Stone (Flawed)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.all',
        value: 1,
        source: 'Pale Green Prism Ioun Stone (Flawed)',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'ability_check.all',
        value: 1,
        source: 'Pale Green Prism Ioun Stone (Flawed)',
      },
      {
        type: 'penalty',
        target: 'initiative',
        value: -1,
        source: 'Pale Green Prism Ioun Stone (Flawed)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 6. Pale Lavender Ellipsoid
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-pale-lavender-ellipsoid',
    name: 'Pale Lavender Ellipsoid Ioun Stone',
    category: 'ioun_stone',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pale lavender',
    shape: 'ellipsoid',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 15,
    slot: 'none',

    price: 4000,
    weight: 0,

    description:
      'This stone absorbs spells of 4th level or lower that are cast directly at the wearer (not ' +
      'area spells). Once it has absorbed 20 spell levels, it burns out and turns dull gray, forever ' +
      'losing its power. See ioun stones description for more details on spell absorption.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['spell turning'],
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
        target: 'special.spell_absorption',
        value: 20,
        source: 'Pale Lavender Ellipsoid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When held in a wayfinder (requires actively holding the wayfinder), the pale lavender ellipsoid ' +
        'also grants spell resistance 15 against spells of 4th level or lower.',
      requiresHoldingWayfinder: true,
    },
  },

  {
    id: 'ioun-pale-lavender-ellipsoid-cracked',
    name: 'Pale Lavender Ellipsoid Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pale lavender',
    shape: 'ellipsoid',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 7,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'This cracked stone absorbs spells of 3rd level or lower cast directly at the wearer. Once it ' +
      'has absorbed 10 spell levels, it burns out.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['spell turning'],
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
        target: 'special.spell_absorption',
        value: 10,
        source: 'Pale Lavender Ellipsoid Ioun Stone (Cracked)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 7. Pale Orange Rhomboid
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-pale-orange-rhomboid',
    name: 'Pale Orange Rhomboid Ioun Stone',
    category: 'ioun_stone',
    source: 'Pathfinder Society Field Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pale orange',
    shape: 'rhomboid',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 12,
    slot: 'none',

    price: 18000,
    weight: 0,

    description:
      'This stone grants the wearer a +2 enhancement bonus to both Strength and Constitution.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bull\'s strength', 'bear\'s endurance'],
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
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.str',
        value: 2,
        source: 'Pale Orange Rhomboid Ioun Stone',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 2,
        source: 'Pale Orange Rhomboid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the pale orange rhomboid grants a +1 competence bonus on ' +
        'Fortitude saving throws.',
      bonusType: 'competence',
      bonusValue: 1,
      bonusTarget: 'save.fortitude',
    },
  },

  {
    id: 'ioun-pale-orange-rhomboid-cracked',
    name: 'Pale Orange Rhomboid Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Pathfinder Society Field Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pale orange',
    shape: 'rhomboid',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 6,
    slot: 'none',

    price: 1500,
    weight: 0,

    description:
      'This cracked pale orange rhomboid grants a +1 enhancement bonus to Strength and a +1 enhancement ' +
      'bonus to Constitution.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bull\'s strength'],
      cost: 750,
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
        source: 'Pale Orange Rhomboid Ioun Stone (Cracked)',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 1,
        source: 'Pale Orange Rhomboid Ioun Stone (Cracked)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 8. Pale Ruby Trillian
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-pale-ruby-trillian',
    name: 'Pale Ruby Trillian Ioun Stone',
    category: 'ioun_stone',
    source: 'Pathfinder Society Field Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pale ruby',
    shape: 'trillian',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 9,
    slot: 'none',

    price: 20000,
    weight: 0,

    description:
      'This stone protects the wearer from ability drain and grants a +2 enhancement bonus to ' +
      'Constitution. Additionally, the wearer is protected against level draining effects (negative ' +
      'levels cannot permanently drain levels while this stone orbits).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['restoration'],
      cost: 10000,
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
        source: 'Pale Ruby Trillian Ioun Stone',
      },
      {
        type: 'special',
        target: 'special.negative_level_protection',
        value: 1,
        source: 'Pale Ruby Trillian Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the pale ruby trillian grants a +4 competence bonus on saves ' +
        'against energy drain effects.',
      bonusType: 'competence',
      bonusValue: 4,
      bonusTarget: 'save.energy_drain',
    },
  },

  {
    id: 'ioun-pale-ruby-trillian-cracked',
    name: 'Pale Ruby Trillian Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Pathfinder Society Field Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pale ruby',
    shape: 'trillian',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 5,
    slot: 'none',

    price: 4000,
    weight: 0,

    description:
      'This cracked pale ruby trillian prevents the wearer from gaining negative levels (though it ' +
      'does not remove existing ones), but does not provide an enhancement bonus to Constitution.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['death ward'],
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
        target: 'special.negative_level_protection',
        value: 1,
        source: 'Pale Ruby Trillian Ioun Stone (Cracked)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 9. Pearlescent Pyramid
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-pearlescent-pyramid',
    name: 'Pearlescent Pyramid Ioun Stone',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pearlescent',
    shape: 'pyramid',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      'This pearly pyramid-shaped ioun stone protects the wearer from starvation and thirst (as per ' +
      'the create food and water spell), and grants a +1 resistance bonus on all saving throws against ' +
      'diseases and poison.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['create food and water', 'delay poison'],
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
        type: 'special',
        target: 'special.sustenance',
        value: 1,
        source: 'Pearlescent Pyramid Ioun Stone',
      },
      {
        type: 'bonus',
        bonusType: 'resistance',
        target: 'save.disease_poison',
        value: 1,
        source: 'Pearlescent Pyramid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the pearlescent pyramid expands the resistance bonus to +2 on ' +
        'all saves against disease and poison.',
      bonusType: 'resistance',
      bonusValue: 2,
      bonusTarget: 'save.disease_poison',
    },
  },

  {
    id: 'ioun-pearlescent-pyramid-cracked',
    name: 'Pearlescent Pyramid Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pearlescent',
    shape: 'pyramid',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 1000,
    weight: 0,

    description:
      'This cracked pearlescent pyramid grants only sustenance (no need for food or water), with no ' +
      'bonus to saving throws.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['create food and water'],
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
        type: 'special',
        target: 'special.sustenance',
        value: 1,
        source: 'Pearlescent Pyramid Ioun Stone (Cracked)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 10. Pearly White Spindle
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-pearly-white-spindle',
    name: 'Pearly White Spindle Ioun Stone',
    category: 'ioun_stone',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pearly white',
    shape: 'spindle',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 15,
    slot: 'none',

    price: 20000,
    weight: 0,

    description:
      'This stone allows the wearer to regenerate 1 point of ability damage per hour (as if resting). ' +
      'The stone does not cure ability drain.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['lesser restoration'],
      cost: 10000,
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
        target: 'special.ability_damage_regen_per_hour',
        value: 1,
        source: 'Pearly White Spindle Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the pearly white spindle also allows the wearer to regrow lost ' +
        'limbs over a period of 1d4 weeks (as regenerate).',
    },
  },

  {
    id: 'ioun-pearly-white-spindle-cracked',
    name: 'Pearly White Spindle Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pearly white',
    shape: 'spindle',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 3400,
    weight: 0,

    description:
      'This cracked pearly white spindle allows the wearer to regenerate 1 point of ability damage per ' +
      'day (not per hour) as if resting for 8 hours.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['lesser restoration'],
      cost: 1700,
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
        target: 'special.ability_damage_regen_per_day',
        value: 1,
        source: 'Pearly White Spindle Ioun Stone (Cracked)',
      },
    ],
  },

  {
    id: 'ioun-pearly-white-spindle-flawed',
    name: 'Pearly White Spindle Ioun Stone (Flawed)',
    category: 'ioun_stone',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pearly white',
    shape: 'spindle',
    iounVariant: 'flawed',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 3400,
    weight: 0,

    description:
      'This flawed stone regenerates 1 point of ability damage per hour but also causes the wearer to ' +
      'have vivid, disruptive dreams when resting, imposing a -1 penalty on saving throws against sleep ' +
      'and charm effects.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['lesser restoration'],
      cost: 1700,
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
        target: 'special.ability_damage_regen_per_hour',
        value: 1,
        source: 'Pearly White Spindle Ioun Stone (Flawed)',
      },
      {
        type: 'penalty',
        target: 'save.sleep_charm',
        value: -1,
        source: 'Pearly White Spindle Ioun Stone (Flawed)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 11. Pink and Green Sphere
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-pink-and-green-sphere',
    name: 'Pink and Green Sphere Ioun Stone',
    category: 'ioun_stone',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pink and green',
    shape: 'sphere',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      'This stone increases the wearer\'s Charisma score by 2.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['eagle\'s splendor'],
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
        target: 'ability.cha',
        value: 2,
        source: 'Pink and Green Sphere Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the pink and green sphere grants a +1 competence bonus on ' +
        'Charisma-based skill checks.',
      bonusType: 'competence',
      bonusValue: 1,
      bonusTarget: 'skill.charisma_based',
    },
  },

  {
    id: 'ioun-pink-and-green-sphere-cracked',
    name: 'Pink and Green Sphere Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pink and green',
    shape: 'sphere',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'This cracked stone grants a +1 enhancement bonus to Charisma.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['eagle\'s splendor'],
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
        bonusType: 'enhancement',
        target: 'ability.cha',
        value: 1,
        source: 'Pink and Green Sphere Ioun Stone (Cracked)',
      },
    ],
  },

  {
    id: 'ioun-pink-and-green-sphere-flawed',
    name: 'Pink and Green Sphere Ioun Stone (Flawed)',
    category: 'ioun_stone',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pink and green',
    shape: 'sphere',
    iounVariant: 'flawed',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'This flawed stone grants a +2 enhancement bonus to Charisma but imposes a -1 penalty to Wisdom.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['eagle\'s splendor'],
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
        bonusType: 'enhancement',
        target: 'ability.cha',
        value: 2,
        source: 'Pink and Green Sphere Ioun Stone (Flawed)',
      },
      {
        type: 'penalty',
        target: 'ability.wis',
        value: -1,
        source: 'Pink and Green Sphere Ioun Stone (Flawed)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 12. Pink Rhomboid
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-pink-rhomboid',
    name: 'Pink Rhomboid Ioun Stone',
    category: 'ioun_stone',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pink',
    shape: 'rhomboid',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      'This stone increases the wearer\'s Constitution score by 2.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bear\'s endurance'],
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
        source: 'Pink Rhomboid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the pink rhomboid grants a +1 competence bonus on Fortitude ' +
        'saving throws.',
      bonusType: 'competence',
      bonusValue: 1,
      bonusTarget: 'save.fortitude',
    },
  },

  {
    id: 'ioun-pink-rhomboid-cracked',
    name: 'Pink Rhomboid Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pink',
    shape: 'rhomboid',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'This cracked stone grants a +1 enhancement bonus to Constitution.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bear\'s endurance'],
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
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 1,
        source: 'Pink Rhomboid Ioun Stone (Cracked)',
      },
    ],
  },

  {
    id: 'ioun-pink-rhomboid-flawed',
    name: 'Pink Rhomboid Ioun Stone (Flawed)',
    category: 'ioun_stone',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'pink',
    shape: 'rhomboid',
    iounVariant: 'flawed',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'This flawed stone grants a +2 enhancement bonus to Constitution but imposes a -1 penalty to ' +
      'Strength.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bear\'s endurance'],
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
        bonusType: 'enhancement',
        target: 'ability.con',
        value: 2,
        source: 'Pink Rhomboid Ioun Stone (Flawed)',
      },
      {
        type: 'penalty',
        target: 'ability.str',
        value: -1,
        source: 'Pink Rhomboid Ioun Stone (Flawed)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 13. Scarlet and Blue Sphere
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-scarlet-and-blue-sphere',
    name: 'Scarlet and Blue Sphere Ioun Stone',
    category: 'ioun_stone',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'scarlet and blue',
    shape: 'sphere',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      'This stone increases the wearer\'s Intelligence score by 2.',

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
        source: 'Scarlet and Blue Sphere Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the scarlet and blue sphere grants a +1 competence bonus on ' +
        'Intelligence-based skill checks.',
      bonusType: 'competence',
      bonusValue: 1,
      bonusTarget: 'skill.intelligence_based',
    },
  },

  {
    id: 'ioun-scarlet-and-blue-sphere-cracked',
    name: 'Scarlet and Blue Sphere Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'scarlet and blue',
    shape: 'sphere',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'This cracked stone grants a +1 enhancement bonus to Intelligence.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fox\'s cunning'],
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
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 1,
        source: 'Scarlet and Blue Sphere Ioun Stone (Cracked)',
      },
    ],
  },

  {
    id: 'ioun-scarlet-and-blue-sphere-flawed',
    name: 'Scarlet and Blue Sphere Ioun Stone (Flawed)',
    category: 'ioun_stone',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'scarlet and blue',
    shape: 'sphere',
    iounVariant: 'flawed',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'This flawed stone grants a +2 enhancement bonus to Intelligence but imposes a -1 penalty to ' +
      'Wisdom.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fox\'s cunning'],
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
        bonusType: 'enhancement',
        target: 'ability.int',
        value: 2,
        source: 'Scarlet and Blue Sphere Ioun Stone (Flawed)',
      },
      {
        type: 'penalty',
        target: 'ability.wis',
        value: -1,
        source: 'Scarlet and Blue Sphere Ioun Stone (Flawed)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 14. Scarlet and Green Cabochon
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-scarlet-and-green-cabochon',
    name: 'Scarlet and Green Cabochon Ioun Stone',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'scarlet and green',
    shape: 'cabochon',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 10,
    slot: 'none',

    price: 10000,
    weight: 0,

    description:
      'This stone increases the wearer\'s base speed by 10 feet. This bonus does not stack with other ' +
      'enhancement bonuses to speed.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['expeditious retreat', 'longstrider'],
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
        bonusType: 'enhancement',
        target: 'speed.base',
        value: 10,
        source: 'Scarlet and Green Cabochon Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the scarlet and green cabochon also grants a +1 competence bonus ' +
        'on Acrobatics checks made to jump.',
      bonusType: 'competence',
      bonusValue: 1,
      bonusTarget: 'skill.acrobatics_jump',
    },
  },

  {
    id: 'ioun-scarlet-and-green-cabochon-cracked',
    name: 'Scarlet and Green Cabochon Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'scarlet and green',
    shape: 'cabochon',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 1500,
    weight: 0,

    description:
      'This cracked stone increases the wearer\'s base speed by 5 feet.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['longstrider'],
      cost: 750,
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
        target: 'speed.base',
        value: 5,
        source: 'Scarlet and Green Cabochon Ioun Stone (Cracked)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 15. Sepia Ellipsoid
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-sepia-ellipsoid',
    name: 'Sepia Ellipsoid Ioun Stone',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'sepia',
    shape: 'ellipsoid',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 9,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      'This brown ellipsoid-shaped ioun stone grants the wearer the ability to understand, read, and ' +
      'write any language (as the tongues spell), but not to speak it beyond the wearer\'s natural abilities.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['tongues'],
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
        type: 'special',
        target: 'special.comprehend_languages',
        value: 1,
        source: 'Sepia Ellipsoid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the sepia ellipsoid also allows the wearer to speak any language ' +
        'understood, granting the full effects of the tongues spell.',
    },
  },

  {
    id: 'ioun-sepia-ellipsoid-cracked',
    name: 'Sepia Ellipsoid Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'sepia',
    shape: 'ellipsoid',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 1200,
    weight: 0,

    description:
      'This cracked sepia ellipsoid grants the ability to read (but not understand spoken) any one ' +
      'language chosen at time of creation.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['comprehend languages'],
      cost: 600,
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
        target: 'special.read_one_language',
        value: 1,
        source: 'Sepia Ellipsoid Ioun Stone (Cracked)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 16. Silver Spindle
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-silver-spindle',
    name: 'Silver Spindle Ioun Stone',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'silver',
    shape: 'spindle',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 10,
    slot: 'none',

    price: 6750,
    weight: 0,

    description:
      'This gleaming silver spindle grants the wearer the ability to use deathwatch at will (as the spell).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['deathwatch'],
      cost: 3375,
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
        target: 'special.deathwatch_at_will',
        value: 1,
        source: 'Silver Spindle Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the silver spindle extends the range of the deathwatch effect to ' +
        '60 feet and also reveals the current hit point total of any living creature observed.',
    },
  },

  {
    id: 'ioun-silver-spindle-cracked',
    name: 'Silver Spindle Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'silver',
    shape: 'spindle',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'This cracked silver spindle grants a +2 competence bonus on Perception checks made to notice ' +
      'when a creature is unconscious, near death, or dead.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['deathwatch'],
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
        target: 'skill.perception',
        value: 2,
        source: 'Silver Spindle Ioun Stone (Cracked)',
        condition: {
          type: 'custom',
          params: { descriptor: 'detect_dying' },
          description: 'only to notice unconscious, near-death, or dead creatures',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 17. Southern Star
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-southern-star',
    name: 'Southern Star Ioun Stone',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'white and black',
    shape: 'sphere',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 5000,
    weight: 0,

    description:
      'This small sphere is half white and half black. While orbiting, it acts as a compass, always ' +
      'pointing north and allowing the wearer to automatically determine which direction is north ' +
      'without a skill check.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['know direction'],
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
        target: 'special.compass_true_north',
        value: 1,
        source: 'Southern Star Ioun Stone',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.survival_navigation',
        value: 4,
        source: 'Southern Star Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the southern star also grants the wearer a +4 competence bonus ' +
        'on Knowledge (geography) checks.',
      bonusType: 'competence',
      bonusValue: 4,
      bonusTarget: 'skill.knowledge_geography',
    },
  },

  {
    id: 'ioun-southern-star-cracked',
    name: 'Southern Star Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'white and black',
    shape: 'sphere',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 1,
    slot: 'none',

    price: 100,
    weight: 0,

    description:
      'This cracked southern star acts only as a mundane compass, pointing north with no skill check ' +
      'required, but granting no skill bonuses.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['know direction'],
      cost: 50,
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
        target: 'special.compass_true_north',
        value: 1,
        source: 'Southern Star Ioun Stone (Cracked)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 18. Thorny
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-thorny',
    name: 'Thorny Ioun Stone',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'brown and black',
    shape: 'rhomboid',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ABJURATION }],
    casterLevel: 7,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      'This jagged brown and black stone is covered in sharp protrusions. Any creature that attempts ' +
      'to steal or grab the stone from the wearer takes 1d6 points of piercing damage and must succeed ' +
      'on a DC 15 Reflex save or drop whatever it grabbed (including the stone). The stone also grants ' +
      'a +2 competence bonus on combat maneuver defense (CMD) against steal and disarm attempts.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fire shield', 'mage armor'],
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
        type: 'special',
        target: 'special.thorny_grab_damage',
        value: 1,
        source: 'Thorny Ioun Stone',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'cmd.steal_disarm',
        value: 2,
        source: 'Thorny Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the thorny stone causes the thorns to deal 1d8 damage instead of ' +
        '1d6, and the Reflex save DC increases to 18.',
    },
  },

  {
    id: 'ioun-thorny-cracked',
    name: 'Thorny Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'brown and black',
    shape: 'rhomboid',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ABJURATION }],
    casterLevel: 3,
    slot: 'none',

    price: 1200,
    weight: 0,

    description:
      'This cracked thorny stone deals 1d4 piercing damage to any creature that attempts to grab it, ' +
      'with no Reflex save, but grants no CMD bonus.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['mage armor'],
      cost: 600,
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
        target: 'special.thorny_grab_damage_minor',
        value: 1,
        source: 'Thorny Ioun Stone (Cracked)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 19. Tourmaline Sphere
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-tourmaline-sphere',
    name: 'Tourmaline Sphere Ioun Stone',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'tourmaline',
    shape: 'sphere',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 12,
    slot: 'none',

    price: 22000,
    weight: 0,

    description:
      'This green-pink sphere allows the wearer to reroll one saving throw per day, taking the better ' +
      'of the two results.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['moment of greatness'],
      cost: 11000,
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
        target: 'special.saving_throw_reroll_per_day',
        value: 1,
        source: 'Tourmaline Sphere Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the tourmaline sphere increases the reroll frequency to twice per ' +
        'day instead of once.',
    },
  },

  {
    id: 'ioun-tourmaline-sphere-cracked',
    name: 'Tourmaline Sphere Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'tourmaline',
    shape: 'sphere',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 6,
    slot: 'none',

    price: 2500,
    weight: 0,

    description:
      'This cracked tourmaline sphere grants the wearer a +1 luck bonus on all saving throws.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['resistance'],
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
        bonusType: 'resistance',
        target: 'save.all',
        value: 1,
        source: 'Tourmaline Sphere Ioun Stone (Cracked)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 20. Turquoise Sphere
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-turquoise-sphere',
    name: 'Turquoise Sphere Ioun Stone',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'turquoise',
    shape: 'sphere',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'none',

    price: 8000,
    weight: 0,

    description:
      'This blue-green sphere increases the wearer\'s Wisdom score by 2.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['owl\'s wisdom'],
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
        source: 'Turquoise Sphere Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the turquoise sphere grants a +1 competence bonus on ' +
        'Wisdom-based skill checks.',
      bonusType: 'competence',
      bonusValue: 1,
      bonusTarget: 'skill.wisdom_based',
    },
  },

  {
    id: 'ioun-turquoise-sphere-cracked',
    name: 'Turquoise Sphere Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'turquoise',
    shape: 'sphere',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'This cracked turquoise sphere grants a +1 enhancement bonus to Wisdom.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['owl\'s wisdom'],
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
        bonusType: 'enhancement',
        target: 'ability.wis',
        value: 1,
        source: 'Turquoise Sphere Ioun Stone (Cracked)',
      },
    ],
  },

  {
    id: 'ioun-turquoise-sphere-flawed',
    name: 'Turquoise Sphere Ioun Stone (Flawed)',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'turquoise',
    shape: 'sphere',
    iounVariant: 'flawed',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'none',

    price: 500,
    weight: 0,

    description:
      'This flawed stone grants a +2 enhancement bonus to Wisdom but imposes a -1 penalty to Charisma.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['owl\'s wisdom'],
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
        bonusType: 'enhancement',
        target: 'ability.wis',
        value: 2,
        source: 'Turquoise Sphere Ioun Stone (Flawed)',
      },
      {
        type: 'penalty',
        target: 'ability.cha',
        value: -1,
        source: 'Turquoise Sphere Ioun Stone (Flawed)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 21. Vermilion Rhomboid
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-vermilion-rhomboid',
    name: 'Vermilion Rhomboid Ioun Stone',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'vermilion',
    shape: 'rhomboid',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 8,
    slot: 'none',

    price: 10000,
    weight: 0,

    description:
      'This brick-red rhomboid grants the wearer a +2 enhancement bonus to Dexterity and a +2 ' +
      'enhancement bonus to Strength, but only to a single chosen physical ability score at time of ' +
      'creation. Alternatively, this stone grants a +4 enhancement bonus to one physical ability score.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bull\'s strength', 'cat\'s grace'],
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
        bonusType: 'enhancement',
        target: 'ability.str',
        value: 2,
        source: 'Vermilion Rhomboid Ioun Stone',
      },
      {
        type: 'bonus',
        bonusType: 'enhancement',
        target: 'ability.dex',
        value: 2,
        source: 'Vermilion Rhomboid Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the vermilion rhomboid grants a +1 competence bonus on Reflex ' +
        'saving throws.',
      bonusType: 'competence',
      bonusValue: 1,
      bonusTarget: 'save.reflex',
    },
  },

  {
    id: 'ioun-vermilion-rhomboid-cracked',
    name: 'Vermilion Rhomboid Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'vermilion',
    shape: 'rhomboid',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'none',

    price: 1000,
    weight: 0,

    description:
      'This cracked vermilion rhomboid grants a +1 enhancement bonus to one physical ability score ' +
      '(Strength, Dexterity, or Constitution) chosen at the time of creation.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['bull\'s strength'],
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
        type: 'special',
        target: 'special.physical_ability_score_plus1',
        value: 1,
        source: 'Vermilion Rhomboid Ioun Stone (Cracked)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 22. Vibrant Purple Prism
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-vibrant-purple-prism',
    name: 'Vibrant Purple Prism Ioun Stone',
    category: 'ioun_stone',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'vibrant purple',
    shape: 'prism',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.UNIVERSAL }],
    casterLevel: 15,
    slot: 'none',

    price: 36000,
    weight: 0,

    description:
      'This deep purple prism stores up to 3 levels of spells that the wearer can cast. To store a spell, ' +
      'the user must cast it at the stone while it orbits. Storing a spell erases any spell currently stored. ' +
      'The stored spell can be released as a free action on any later turn.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['wish'],
      cost: 18000,
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
        target: 'special.spell_storage',
        value: 3,
        source: 'Vibrant Purple Prism Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the vibrant purple prism can store an additional spell level ' +
        '(4 total) and the stored spell can be cast as an immediate action.',
    },
  },

  {
    id: 'ioun-vibrant-purple-prism-cracked',
    name: 'Vibrant Purple Prism Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'vibrant purple',
    shape: 'prism',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.UNIVERSAL }],
    casterLevel: 9,
    slot: 'none',

    price: 6000,
    weight: 0,

    description:
      'This cracked vibrant purple prism stores up to 1 level of spells. Only spells of 1st level may ' +
      'be stored in the cracked version.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['limited wish'],
      cost: 3000,
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
        target: 'special.spell_storage',
        value: 1,
        source: 'Vibrant Purple Prism Ioun Stone (Cracked)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 23. Western Star
  // ---------------------------------------------------------------------------
  {
    id: 'ioun-western-star',
    name: 'Western Star Ioun Stone',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'white and blue',
    shape: 'sphere',
    iounVariant: 'standard',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 5,
    slot: 'none',

    price: 5000,
    weight: 0,

    description:
      'This small sphere is half white and half blue. While orbiting, it always points west (opposite ' +
      'of east), acting as a compass for westward navigation. The wearer automatically determines which ' +
      'direction is west without a skill check, and gains a +4 competence bonus on Survival checks made ' +
      'to navigate by direction.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['know direction'],
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
        target: 'special.compass_true_west',
        value: 1,
        source: 'Western Star Ioun Stone',
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.survival_navigation',
        value: 4,
        source: 'Western Star Ioun Stone',
      },
    ],

    resonancePower: {
      description:
        'When slotted in a wayfinder, the western star also grants a +4 competence bonus on ' +
        'Knowledge (geography) checks made in relation to western regions.',
      bonusType: 'competence',
      bonusValue: 4,
      bonusTarget: 'skill.knowledge_geography',
    },
  },

  {
    id: 'ioun-western-star-cracked',
    name: 'Western Star Ioun Stone (Cracked)',
    category: 'ioun_stone',
    source: 'Seekers of Secrets',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    color: 'white and blue',
    shape: 'sphere',
    iounVariant: 'cracked',

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.DIVINATION }],
    casterLevel: 1,
    slot: 'none',

    price: 100,
    weight: 0,

    description:
      'This cracked western star acts only as a mundane compass pointing west, with no skill bonus.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['know direction'],
      cost: 50,
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
        target: 'special.compass_true_west',
        value: 1,
        source: 'Western Star Ioun Stone (Cracked)',
      },
    ],
  },
];
