import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';
import { Alignment } from '@/types/base';

export const wondrousItemsAB4: WondrousItemDefinition[] = [
  // ---------------------------------------------------------------------------
  // 76. Bag of Concealment (Types I–IV)
  // Source: Pathfinder Chronicles: Classic Treasures Revisited
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bag-of-concealment-1',
    name: 'Bag of Concealment (Type I)',
    category: 'wondrous',
    source: 'Classic Treasures Revisited',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 5000,
    weight: 15,

    description:
      'This leather sack resembles a standard bag of holding and functions as one with Type I capacity (250 lbs / 30 cu ft). ' +
      'Only the person a bag of concealment is keyed to may access its contents. Any others who look in the bag see only the inside of an empty sack. ' +
      'The owner can transfer ownership by relinquishing their status as a standard action, after which another creature accessing the bag becomes the new keyed owner. ' +
      'The bag registers as non-magical unless successfully identified, and its mouth stretches to four times normal width for larger items.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fabricate', 'secret chest'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.extradimensional_storage',
        value: 250,
        source: 'Bag of Concealment (Type I)',
      },
      {
        type: 'special',
        target: 'special.concealment_keyed_access',
        value: 0,
        source: 'Bag of Concealment (Type I)',
      },
    ],
  },

  {
    id: 'wondrous-bag-of-concealment-2',
    name: 'Bag of Concealment (Type II)',
    category: 'wondrous',
    source: 'Classic Treasures Revisited',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 10000,
    weight: 25,

    description:
      'This leather sack resembles a standard bag of holding and functions as one with Type II capacity (500 lbs / 70 cu ft). ' +
      'Only the person a bag of concealment is keyed to may access its contents. Any others who look in the bag see only the inside of an empty sack. ' +
      'The owner can transfer ownership by relinquishing their status as a standard action, after which another creature accessing the bag becomes the new keyed owner. ' +
      'The bag registers as non-magical unless successfully identified, and its mouth stretches to four times normal width for larger items.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fabricate', 'secret chest'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.extradimensional_storage',
        value: 500,
        source: 'Bag of Concealment (Type II)',
      },
      {
        type: 'special',
        target: 'special.concealment_keyed_access',
        value: 0,
        source: 'Bag of Concealment (Type II)',
      },
    ],
  },

  {
    id: 'wondrous-bag-of-concealment-3',
    name: 'Bag of Concealment (Type III)',
    category: 'wondrous',
    source: 'Classic Treasures Revisited',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 14800,
    weight: 35,

    description:
      'This leather sack resembles a standard bag of holding and functions as one with Type III capacity (1,000 lbs / 150 cu ft). ' +
      'Only the person a bag of concealment is keyed to may access its contents. Any others who look in the bag see only the inside of an empty sack. ' +
      'The owner can transfer ownership by relinquishing their status as a standard action, after which another creature accessing the bag becomes the new keyed owner. ' +
      'The bag registers as non-magical unless successfully identified, and its mouth stretches to four times normal width for larger items.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fabricate', 'secret chest'],
      cost: 7400,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.extradimensional_storage',
        value: 1000,
        source: 'Bag of Concealment (Type III)',
      },
      {
        type: 'special',
        target: 'special.concealment_keyed_access',
        value: 0,
        source: 'Bag of Concealment (Type III)',
      },
    ],
  },

  {
    id: 'wondrous-bag-of-concealment-4',
    name: 'Bag of Concealment (Type IV)',
    category: 'wondrous',
    source: 'Classic Treasures Revisited',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 20000,
    weight: 60,

    description:
      'This leather sack resembles a standard bag of holding and functions as one with Type IV capacity (1,500 lbs / 250 cu ft). ' +
      'Only the person a bag of concealment is keyed to may access its contents. Any others who look in the bag see only the inside of an empty sack. ' +
      'The owner can transfer ownership by relinquishing their status as a standard action, after which another creature accessing the bag becomes the new keyed owner. ' +
      'The bag registers as non-magical unless successfully identified, and its mouth stretches to four times normal width for larger items.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['fabricate', 'secret chest'],
      cost: 10000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.extradimensional_storage',
        value: 1500,
        source: 'Bag of Concealment (Type IV)',
      },
      {
        type: 'special',
        target: 'special.concealment_keyed_access',
        value: 0,
        source: 'Bag of Concealment (Type IV)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 77. Bag of Devouring, Intelligent
  // Source: Pathfinder Campaign Setting: Rival Guide
  // Note: Intelligent cursed item variant. Price not listed in source (cursed). Using null.
  // intelligentItem block added per magicItems.ts schema.
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bag-of-devouring-intelligent',
    name: 'Bag of Devouring, Intelligent',
    category: 'wondrous',
    source: 'Rival Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.CONJURATION }],
    casterLevel: 17,
    slot: 'none',

    price: null, // cursed item — no purchase price listed
    weight: 15,

    description:
      'This item resembles a normal sack but has rows of vicious teeth, a bad attitude, and a thirst to devour all things. ' +
      'The bag believes itself to be the appendage of a creature called the Eater of All and despises all non-demon creatures while viewing demons as kindred spirits. ' +
      'It possesses all standard bag of devouring abilities plus a bite attack (+14 to hit, 1d10+5 damage with 2 bleed damage). ' +
      "The bag's hateful curse imposes a -1 penalty on the wielder's attack rolls, saving throws, skill checks, and ability checks (non-demons only). " +
      'Requires a bag of holding type III as base component for creation.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: [],
      specialRequirements: ['Requires a bag of holding type III as a base component'],
      cost: 0, // cursed — no standard creation cost
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.bag_of_devouring',
        value: 0,
        source: 'Bag of Devouring, Intelligent',
      },
    ],

    intelligentItem: {
      intelligence: 10,
      wisdom: 14,
      charisma: 13,
      alignment: Alignment.ChaoticEvil,
      ego: 13,
      communication: ['empathy'],
      languages: ['Abyssal'],
      senses: ['blindsense 30 ft.'],
      powers: [
        'Bite attack +14, 1d10+5 damage, 2 bleed',
        "Hateful curse: -1 penalty on non-demons' attack rolls, saving throws, skill checks, and ability checks",
        'Ego increases to 17 against non-demons',
      ],
    },

    curse: {
      curseType: 'drawback',
      description:
        "The bag imposes a -1 penalty on the wielder's attack rolls, saving throws, skill checks, and ability checks (non-demons only). It may attempt to bite the wielder.",
      appearsAs: 'appears to be a bag of holding (type III)',
      removalDC: 27,
    },
  },

  // ---------------------------------------------------------------------------
  // 78. Bag of Everlasting Dung
  // Source: Pathfinder Companion: Legacy of Fire Player's Guide
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bag-of-everlasting-dung',
    name: 'Bag of Everlasting Dung',
    category: 'wondrous',
    source: "Legacy of Fire Player's Guide",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 500,
    weight: 4,

    description:
      'This leather bag exudes a pungent scent when opened. Each day it provides enough dried dung to fuel a small fire for 8 hours or fertilize a 20-foot-square patch of land.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['create food and water'],
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
        target: 'special.daily_dung_supply',
        value: 0,
        source: 'Bag of Everlasting Dung',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 79. Bag of Holding (Types I–IV)
  // Source: Core Rulebook
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bag-of-holding-1',
    name: 'Bag of Holding (Type I)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 2500,
    weight: 15,

    description:
      'This appears to be a common cloth sack about 2 feet by 4 feet in size. The bag of holding opens into a nondimensional space: its inside is larger than its outside dimensions. ' +
      'Regardless of what is put into the bag, it weighs a fixed amount. A type I bag of holding can carry up to 250 pounds and has an interior volume of 30 cubic feet. ' +
      'If the bag is overloaded, or if sharp objects pierce it (from inside or outside), the bag ruptures and is ruined, and all contents are lost forever. ' +
      'If a bag of holding is turned inside out, its contents spill out, unharmed, but the bag must be put right before it can be used again. ' +
      'If living creatures are placed within the bag, they can survive for up to 10 minutes, after which time they begin to suffocate. ' +
      'Placing a bag of holding inside another extradimensional space (a portable hole, for example) results in a planar rift that destroys both items and pulls everything within 10 feet into the Astral Plane.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['secret chest'],
      cost: 1250,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.extradimensional_storage',
        value: 250,
        source: 'Bag of Holding (Type I)',
      },
    ],
  },

  {
    id: 'wondrous-bag-of-holding-2',
    name: 'Bag of Holding (Type II)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 5000,
    weight: 25,

    description:
      'This appears to be a common cloth sack about 2 feet by 4 feet in size. The bag of holding opens into a nondimensional space: its inside is larger than its outside dimensions. ' +
      'Regardless of what is put into the bag, it weighs a fixed amount. A type II bag of holding can carry up to 500 pounds and has an interior volume of 70 cubic feet. ' +
      'If the bag is overloaded, or if sharp objects pierce it (from inside or outside), the bag ruptures and is ruined, and all contents are lost forever. ' +
      'If a bag of holding is turned inside out, its contents spill out, unharmed, but the bag must be put right before it can be used again. ' +
      'If living creatures are placed within the bag, they can survive for up to 10 minutes, after which time they begin to suffocate. ' +
      'Placing a bag of holding inside another extradimensional space results in a planar rift that destroys both items and pulls everything within 10 feet into the Astral Plane.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['secret chest'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.extradimensional_storage',
        value: 500,
        source: 'Bag of Holding (Type II)',
      },
    ],
  },

  {
    id: 'wondrous-bag-of-holding-3',
    name: 'Bag of Holding (Type III)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 7400,
    weight: 35,

    description:
      'This appears to be a common cloth sack about 2 feet by 4 feet in size. The bag of holding opens into a nondimensional space: its inside is larger than its outside dimensions. ' +
      'Regardless of what is put into the bag, it weighs a fixed amount. A type III bag of holding can carry up to 1,000 pounds and has an interior volume of 150 cubic feet. ' +
      'If the bag is overloaded, or if sharp objects pierce it (from inside or outside), the bag ruptures and is ruined, and all contents are lost forever. ' +
      'If a bag of holding is turned inside out, its contents spill out, unharmed, but the bag must be put right before it can be used again. ' +
      'If living creatures are placed within the bag, they can survive for up to 10 minutes, after which time they begin to suffocate. ' +
      'Placing a bag of holding inside another extradimensional space results in a planar rift that destroys both items and pulls everything within 10 feet into the Astral Plane.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['secret chest'],
      cost: 3700,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.extradimensional_storage',
        value: 1000,
        source: 'Bag of Holding (Type III)',
      },
    ],
  },

  {
    id: 'wondrous-bag-of-holding-4',
    name: 'Bag of Holding (Type IV)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 10000,
    weight: 60,

    description:
      'This appears to be a common cloth sack about 2 feet by 4 feet in size. The bag of holding opens into a nondimensional space: its inside is larger than its outside dimensions. ' +
      'Regardless of what is put into the bag, it weighs a fixed amount. A type IV bag of holding can carry up to 1,500 pounds and has an interior volume of 250 cubic feet. ' +
      'If the bag is overloaded, or if sharp objects pierce it (from inside or outside), the bag ruptures and is ruined, and all contents are lost forever. ' +
      'If a bag of holding is turned inside out, its contents spill out, unharmed, but the bag must be put right before it can be used again. ' +
      'If living creatures are placed within the bag, they can survive for up to 10 minutes, after which time they begin to suffocate. ' +
      'Placing a bag of holding inside another extradimensional space results in a planar rift that destroys both items and pulls everything within 10 feet into the Astral Plane.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['secret chest'],
      cost: 5000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.extradimensional_storage',
        value: 1500,
        source: 'Bag of Holding (Type IV)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 80. Bag of Rust
  // Source: Pathfinder Player Companion: Dirty Tactics Toolbox
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bag-of-rust',
    name: 'Bag of Rust',
    category: 'wondrous',
    source: 'Dirty Tactics Toolbox',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'none',

    price: 1400,
    weight: 1,

    description:
      'A sealed cloth pouch containing a powdery substance can be thrown as a ranged touch attack up to 30 feet away. ' +
      'When it hits, the bag breaks and showers the target with powder. ' +
      'Against metal armor, it reduces the armor bonus by 1d6 (minimum 0). ' +
      'For ferrous creatures or metal objects, it deals 3d6+7 damage. ' +
      'Targeting a metal weapon incurs a -10 penalty on the attack roll and destroys the weapon if hit. ' +
      'Magic metal items are immune. If the bag misses, splash weapon rules apply; landing on metal surfaces causes damage but no splash damage to adjacent creatures.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['rusting grasp'],
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
        target: 'special.bag_of_rust_thrown_attack',
        value: 0,
        source: 'Bag of Rust',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 81. Bag of Shadow Clouds
  // Source: Pathfinder Roleplaying Game: Advanced Race Guide
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bag-of-shadow-clouds',
    name: 'Bag of Shadow Clouds',
    category: 'wondrous',
    source: 'Advanced Race Guide',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION }],
    casterLevel: 7,
    slot: 'none',

    price: 30240,
    weight: 1,

    description:
      'This deep gray cloth bag contains an extradimensional space connected to the Plane of Shadow. Peering inside reveals nothing but empty blackness. ' +
      'Three times per day as a move action, the bearer can reach within the bag and pull out 1d4 semisolid shards of shadow, each of which can be used as a thrown weapon targeting a single 5-foot square. ' +
      'Upon impact, each shard creates a darkness effect limited to one 5-foot square. ' +
      'As a move action, the bearer may reposition shadow clouds up to 10 feet in any direction. ' +
      'Whether thrown or not, all shadow manifestations dissipate after 10 minutes.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['darkness', 'shadow conjuration'],
      cost: 15120,
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
        target: 'special.shadow_cloud_shards',
        value: 3,
        source: 'Bag of Shadow Clouds',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 82. Bag of Tricks (grey, rust, tan)
  // Source: Core Rulebook
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bag-of-tricks-gray',
    name: 'Bag of Tricks (Gray)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 3,
    slot: 'none',

    price: 3400,
    weight: 1,

    description:
      'This small sack appears empty. Anyone reaching into the bag feels a small, fuzzy ball. If the ball is removed and tossed up to 20 feet away, it turns into an animal that serves the user for 10 minutes before vanishing. ' +
      'The gray bag produces (roll d%): 01-30 bat, 31-60 rat, 61-75 cat, 76-90 weasel, 91-100 riding dog. ' +
      'Animals produced are fully trained and serve willingly. Up to 10 animals per week can be drawn from the bag (maximum 2 per day). ' +
      'Animals disappear at the end of 10 minutes or when slain.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["summon nature's ally II"],
      cost: 1700,
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
        target: 'special.summon_animal_from_bag',
        value: 0,
        source: 'Bag of Tricks (Gray)',
      },
    ],
  },

  {
    id: 'wondrous-bag-of-tricks-rust',
    name: 'Bag of Tricks (Rust)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 5,
    slot: 'none',

    price: 8500,
    weight: 1,

    description:
      'This small sack appears empty. Anyone reaching into the bag feels a small, fuzzy ball. If the ball is removed and tossed up to 20 feet away, it turns into an animal that serves the user for 10 minutes before vanishing. ' +
      'The rust bag produces (roll d%): 01-30 wolverine, 31-60 wolf, 61-85 boar, 86-100 leopard. ' +
      'Animals produced are fully trained and serve willingly. Up to 10 animals per week can be drawn from the bag (maximum 2 per day). ' +
      'Animals disappear at the end of 10 minutes or when slain.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["summon nature's ally III"],
      cost: 4250,
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
        target: 'special.summon_animal_from_bag',
        value: 0,
        source: 'Bag of Tricks (Rust)',
      },
    ],
  },

  {
    id: 'wondrous-bag-of-tricks-tan',
    name: 'Bag of Tricks (Tan)',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 16000,
    weight: 1,

    description:
      'This small sack appears empty. Anyone reaching into the bag feels a small, fuzzy ball. If the ball is removed and tossed up to 20 feet away, it turns into an animal that serves the user for 10 minutes before vanishing. ' +
      'The tan bag produces (roll d%): 01-25 grizzly bear, 26-50 lion, 51-70 heavy horse (with saddle, bit and bridle), 71-90 tiger, 91-100 rhinoceros. ' +
      'Animals produced are fully trained and serve willingly. Up to 10 animals per week can be drawn from the bag (maximum 2 per day). ' +
      'Animals disappear at the end of 10 minutes or when slain.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ["summon nature's ally V"],
      cost: 8000,
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
        target: 'special.summon_animal_from_bag',
        value: 0,
        source: 'Bag of Tricks (Tan)',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 83. Bag, Corpse-Ferrying
  // Source: Pathfinder Chronicles: Classic Treasures Revisited
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bag-corpse-ferrying',
    name: 'Bag, Corpse-Ferrying',
    category: 'wondrous',
    source: 'Classic Treasures Revisited',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY },
    ],
    casterLevel: 9,
    slot: 'none',

    price: 4000,
    weight: 20,

    description:
      'This large black leather bag features a wide opening and lacing mechanism for closure. ' +
      'It carries up to 300 pounds or 10 cubic feet of material, easily accommodating a single Medium corpse or two Small corpses, including their gear. ' +
      'Contents receive the benefits of a gentle repose spell, preserving them from decay for as long as they remain within the bag.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['gentle repose', 'secret chest'],
      cost: 2000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'special',
        target: 'special.gentle_repose_storage',
        value: 0,
        source: 'Bag, Corpse-Ferrying',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 84. Bag, Handy Haversack
  // Source: Core Rulebook
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bag-handy-haversack',
    name: 'Bag, Handy Haversack',
    category: 'wondrous',
    source: 'Core Rulebook',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'none',

    price: 2000,
    weight: 5,

    description:
      'This ordinary-looking backpack has two side pouches, each of which appears to be a common bag of holding (able to hold up to 20 pounds or 2 cubic feet each). ' +
      'The pack has an interior that functions as a bag of holding capable of holding 80 pounds or 8 cubic feet. ' +
      'Regardless of what is put into the haversack, it weighs a fixed amount. ' +
      'When the wearer reaches into the haversack for a specific item, that item is always on top. ' +
      'Accessing any item stored in the haversack is a move action that does not provoke attacks of opportunity.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['secret chest'],
      cost: 1000,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 2,
      breakDC: 10,
    },

    activationCategory: 'use_activated',

    effects: [
      {
        type: 'special',
        target: 'special.extradimensional_storage',
        value: 80,
        source: 'Bag, Handy Haversack',
      },
      {
        type: 'special',
        target: 'special.haversack_instant_retrieval',
        value: 0,
        source: 'Bag, Handy Haversack',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 85. Baldric, Bane
  // Source: Ultimate Equipment
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-baldric-bane',
    name: 'Baldric, Bane',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 10,
    slot: 'chest',

    price: 10000,
    weight: 1,

    description:
      'This ornate sash of embroidered velvet stretches across the chest from shoulder to waist. ' +
      'If the wearer is an inquisitor, she is treated as five levels higher when using her bane and greater bane class abilities. ' +
      'If the wearer is not an inquisitor, she gains the bane ability of a 5th-level inquisitor, but must first attune a light or one-handed melee weapon to the baldric by hanging it from the cloth for 24 hours. ' +
      'She can only use the bane ability with the attuned weapon. Attaching a different weapon ends the previous attunement.',

    construction: {
      feats: ['Craft Wondrous Item', 'summon monster I'],
      spells: [],
      specialRequirements: ['Creator must be an inquisitor'],
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
        type: 'special',
        target: 'special.bane_baldric_inquisitor_bonus',
        value: 5,
        source: 'Baldric, Bane',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 86. Baldric, Merciful
  // Source: Ultimate Equipment
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-baldric-merciful',
    name: 'Baldric, Merciful',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 11,
    slot: 'chest',

    price: 60000,
    weight: 2,

    description:
      'A white silk sash embroidered with golden suns that never tears, fades, or soils. ' +
      'Once per day, a paladin wearing this baldric can select three extra mercies of her level or lower she does not already know and add them to the list of mercies she can use for the day. ' +
      'When the wearer uses a mercy to remove a condition caused by a curse, disease, or poison, the mercy actually cures the source curse, disease, or poison rather than merely suppressing it for 1 hour.',

    construction: {
      feats: ['Craft Wondrous Item', 'Extra Mercy'],
      spells: ['remove curse', 'remove disease'],
      specialRequirements: ['Creator must be lawful good'],
      cost: 30000,
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
        target: 'special.merciful_baldric_extra_mercies',
        value: 3,
        source: 'Baldric, Merciful',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 87. Balm of Impish Grace
  // Source: Ultimate Equipment
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-balm-of-impish-grace',
    name: 'Balm of Impish Grace',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 7,
    slot: 'none',

    price: 7500,
    weight: 0,

    description:
      'This red liniment enhances a Tiny or smaller creature\'s mobility when applied to the skin as a standard action. ' +
      'Users no longer provoke attacks of opportunity for moving through threatened squares or for entering a larger creature\'s square. ' +
      'Effects persist for 5 minutes. Each bottle contains 5 doses.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['grace'],
      cost: 3750,
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
        target: 'special.no_aoo_movement_through_threatened',
        value: 0,
        source: 'Balm of Impish Grace',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 88. Band of Efficacious Death
  // Source: Pathfinder Player Companion: Potions & Poisons
  // Note: AoN categorizes this as a ring; d20pfsrd lists it under wondrous items.
  // Included here per task list. Slot set to 'ring_left' to match physical function.
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-band-of-efficacious-death',
    name: 'Band of Efficacious Death',
    category: 'wondrous',
    source: 'Potions & Poisons',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.NECROMANCY }],
    casterLevel: 3,
    slot: 'ring',

    price: 9250,
    weight: 0,

    description:
      'This golden ring features a large onyx that opens to reveal a compartment holding a single poison dose. ' +
      'The ring grants a +2 competence bonus on Sleight of Hand checks to conceal poison on the wearer\'s body. ' +
      'It contains four daily-recharging charges that enhance poison duration: each tap on the onyx increases the poison\'s frequency by one increment per tap (maximum four taps per day).',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['pernicious poison'],
      cost: 4625,
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
        target: 'skill.sleight_of_hand',
        value: 2,
        source: 'Band of Efficacious Death',
      },
      {
        type: 'special',
        target: 'special.poison_frequency_enhancement',
        value: 4,
        source: 'Band of Efficacious Death',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 89. Band of the Stalwart Warrior
  // Source: Ultimate Equipment
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-band-of-the-stalwart-warrior',
    name: 'Band of the Stalwart Warrior',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.STRONG, school: MagicSchool.ABJURATION }],
    casterLevel: 16,
    slot: 'headband',

    price: 14000,
    weight: 1,

    description:
      'This plain iron band protects its wearer from fear effects. ' +
      'Whenever the wearer would be affected by a fear effect, she is merely shaken (even if the effect would normally make the target frightened or panicked). ' +
      'Furthermore, the subject gains a +2 competence bonus on all Will saves against fear. ' +
      'Additionally, if the wearer has the bravery class feature, she is considered four levels higher when determining that class feature\'s effect.',

    construction: {
      feats: ['Craft Wondrous Item', 'remove fear'],
      spells: [],
      cost: 7000,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 26,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'save.will',
        value: 2,
        source: 'Band of the Stalwart Warrior',
        condition: {
          type: 'custom',
          params: { descriptor: 'fear' },
          description: 'against fear effects only',
        },
      },
      {
        type: 'special',
        target: 'special.fear_cap_shaken',
        value: 0,
        source: 'Band of the Stalwart Warrior',
      },
      {
        type: 'special',
        target: 'special.bravery_class_feature_bonus',
        value: 4,
        source: 'Band of the Stalwart Warrior',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 90. Band of Toxin Nullification
  // Source: Pathfinder Player Companion: Potions & Poisons
  // Note: AoN categorizes this as a ring; d20pfsrd lists it under wondrous items.
  // Included here per task list. Slot set to 'ring_left' to match physical function.
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-band-of-toxin-nullification',
    name: 'Band of Toxin Nullification',
    category: 'wondrous',
    source: 'Potions & Poisons',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.NECROMANCY }],
    casterLevel: 9,
    slot: 'ring',

    price: 8500,
    weight: 0,

    description:
      'This platinum ring features a smoky quartz stone set neatly into it. ' +
      'Once per day, the wearer can speak a command word and place the quartz on her skin as a full-round action to siphon a single dose of poison from her body and into the quartz, rendering the poison inert. ' +
      'The effect only works after the wearer has already been poisoned.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['absorb toxicity'],
      cost: 4250,
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
        target: 'special.poison_siphon_nullify',
        value: 0,
        source: 'Band of Toxin Nullification',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 91. Band, Holly Wreath
  // Source: Ultimate Equipment
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-band-holly-wreath',
    name: 'Band, Holly Wreath',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'headband',

    price: 5700,
    weight: 1,

    description:
      'This headband is woven of magically preserved holly, its deep green leaves and bright red berries perpetually lustrous. ' +
      'The wearer may create goodberries once per day as the spell. ' +
      'Any effect the wearer creates that affects plants, including the domain powers of the Plant domain, takes effect at +1 caster level and gains a +1 bonus to the save DC.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['goodberry', 'plant growth'],
      cost: 2850,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'continuous',

    spellLikeAbilities: [
      {
        spells: [
          {
            spellId: 'goodberry',
            spellName: 'Goodberry',
            casterLevel: 3,
            usesPerDay: 1,
            activationAction: 'standard',
          },
        ],
      },
    ],

    effects: [
      {
        type: 'special',
        target: 'special.plant_effect_caster_level_bonus',
        value: 1,
        source: 'Band, Holly Wreath',
      },
      {
        type: 'special',
        target: 'special.plant_effect_save_dc_bonus',
        value: 1,
        source: 'Band, Holly Wreath',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 92. Band, Hunter's
  // Source: Ultimate Equipment
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-band-hunters',
    name: "Band, Hunter's",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 4,
    slot: 'headband',

    price: 11000,
    weight: 1,

    description:
      'This simple headband of braided hide grants a +5 competence bonus on Survival checks and inures the wearer to the strain of long travel, as the tireless pursuit spell. ' +
      'If the wearer is a ranger, the band increases his favored enemy bonus on attack rolls by 1 for each of his favored enemies. ' +
      "If the ranger has the hunter's bond (companions) class feature, this increase also applies to the attack roll bonus his allies gain from that ability.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['instant enemy', 'tireless pursuit'],
      specialRequirements: ['Creator must have 5 ranks in Survival'],
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
        bonusType: 'competence',
        target: 'skill.survival',
        value: 5,
        source: "Band, Hunter's",
      },
      {
        type: 'special',
        target: 'special.tireless_pursuit_endurance',
        value: 0,
        source: "Band, Hunter's",
      },
      {
        type: 'special',
        target: 'special.favored_enemy_attack_bonus',
        value: 1,
        source: "Band, Hunter's",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 93. Band, Serpent's
  // Source: Ultimate Equipment (AoN: "Serpent's Band")
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-band-serpents',
    name: "Band, Serpent's",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION },
      { strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT },
    ],
    casterLevel: 10,
    slot: 'headband',

    price: 9000,
    weight: 1,

    description:
      'This circlet grants the wearer a +2 insight bonus on saving throws against effects with the emotion descriptor, including fear effects. ' +
      'The wearer becomes fluent in Draconic and can communicate with non-sentient reptilian creatures as if using speak with animals. ' +
      'Additionally, the wearer gains a +4 competence bonus on Handle Animal and wild empathy checks when interacting with such creatures.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['animal trance', 'hypnotism', 'speak with animals', "summon nature's ally V"],
      cost: 4500,
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
        bonusType: 'insight',
        target: 'save.will',
        value: 2,
        source: "Band, Serpent's",
        condition: {
          type: 'custom',
          params: { descriptor: 'emotion' },
          description: 'against emotion/fear effects only',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.handle_animal',
        value: 4,
        source: "Band, Serpent's",
      },
      {
        type: 'special',
        target: 'special.speak_with_reptiles',
        value: 0,
        source: "Band, Serpent's",
      },
      {
        type: 'special',
        target: 'special.draconic_language_fluency',
        value: 0,
        source: "Band, Serpent's",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 94. Bandages of Rapid Recovery
  // Source: Ultimate Equipment
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bandages-of-rapid-recovery',
    name: 'Bandages of Rapid Recovery',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.CONJURATION }],
    casterLevel: 1,
    slot: 'chest',

    price: 200,
    weight: 1,

    description:
      "These linen bandages have the same color and softness as the feathers of a dove, but their antiseptic smell suggests a less natural origin. " +
      "Any creature wrapped in these bandages recovers from wounds and ability damage each day as if receiving complete bed rest, regardless of activity. " +
      "A creature actually receiving long-term care (via the Heal skill) or complete bed rest while wearing the bandages gains a +4 bonus to its effective level or Hit Dice when determining how many hit points it recovers each day. " +
      "The bandages are destroyed once removed or when the wearer recovers all hit points and ability damage, whichever comes first.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['cure light wounds', 'lesser restoration', 'stabilize'],
      cost: 100,
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
        target: 'special.bed_rest_recovery_always',
        value: 0,
        source: 'Bandages of Rapid Recovery',
      },
      {
        type: 'special',
        target: 'special.long_term_care_hit_dice_bonus',
        value: 4,
        source: 'Bandages of Rapid Recovery',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 95. Bandanna, Guerrilla
  // Source: Pathfinder Campaign Setting: Inner Sea Combat
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bandanna-guerrilla',
    name: 'Bandanna, Guerrilla',
    category: 'wondrous',
    source: 'Inner Sea Combat',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [
      { strength: AuraStrength.MODERATE, school: MagicSchool.ENCHANTMENT },
      { strength: AuraStrength.MODERATE, school: MagicSchool.ILLUSION },
    ],
    casterLevel: 10,
    slot: 'headband',

    price: 18000,
    weight: 1,

    description:
      'This plain brown and green bandanna can be tied around the forehead. The wearer gains a +5 competence bonus on Stealth checks while traveling in forested terrain, ' +
      'and can extend this bonus to up to 10 allies within 100 feet. ' +
      'For ranger characters, the item increases favored enemy attack roll bonuses by 1 for each favored enemy type. ' +
      "When the ranger has the hunter's bond (companions) feature, this increase also applies to their allies' attack roll bonuses from that ability.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['instant enemy', 'invisibility'],
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
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.stealth',
        value: 5,
        source: 'Bandanna, Guerrilla',
        condition: {
          type: 'custom',
          params: { terrain: 'forest' },
          description: 'in forested terrain only',
        },
      },
      {
        type: 'special',
        target: 'special.ally_stealth_bonus_in_forest',
        value: 5,
        source: 'Bandanna, Guerrilla',
      },
      {
        type: 'special',
        target: 'special.favored_enemy_attack_bonus',
        value: 1,
        source: 'Bandanna, Guerrilla',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 96. Bandolier, Beneficial
  // Source: Ultimate Equipment
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bandolier-beneficial',
    name: 'Bandolier, Beneficial',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'belt',

    price: 1000,
    weight: 2,

    description:
      'This leather bandolier has slots for up to 200 rounds of ammunition, with specialized pouches for pellets and black powder, and loops for bullets. ' +
      'It accommodates a gunsmith\'s kit and powder horn without affecting its weight. ' +
      'As a swift action, the wearer can command a single round of ammunition from the beneficial bandolier to teleport into a firearm of the appropriate type that he is wielding.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['secret chest'],
      cost: 500,
    },
    physicalStats: {
      hardness: 0,
      hitPoints: 1,
      breakDC: 10,
    },

    activationCategory: 'command_word',
    activationAction: 'swift',

    effects: [
      {
        type: 'special',
        target: 'special.ammunition_teleport_to_firearm',
        value: 0,
        source: 'Bandolier, Beneficial',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 97. Bandolier, Endless
  // Source: Ultimate Equipment
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bandolier-endless',
    name: 'Bandolier, Endless',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.CONJURATION }],
    casterLevel: 9,
    slot: 'chest',

    price: 1500,
    weight: 2,

    description:
      'Small loops sewn into this bandolier appear to hold twenty alchemical cartridges but due to a subtle bending of space can actually hold up to 60 cartridges. ' +
      'Six extradimensional pockets are sewn into the bandolier: four small ones (each holding a one-handed firearm, 1 pound of ammunition, a powder horn, or a similar object) and two large pockets (accommodating two-handed firearms or comparable items). ' +
      'The wearer can draw an item stored in the bandolier as easily as from an ordinary ammunition pouch or holster. ' +
      'The bandolier weighs the same no matter what is placed inside it.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['secret chest'],
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
        target: 'special.extradimensional_ammo_storage',
        value: 60,
        source: 'Bandolier, Endless',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 98. Bandolier, Pickpocket's
  // Source: Ultimate Equipment (listed under wondrous items on d20pfsrd)
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bandolier-pickpockets',
    name: "Bandolier, Pickpocket's",
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'chest',

    price: 12500,
    weight: 2,

    description:
      "This stylish black leather bandolier can store up to 12 daggers, vials, or similarly shaped items. " +
      "The wearer uses Sleight of Hand checks to oppose such checks made against them (rather than Perception). " +
      "As a swift action after a successful Sleight of Hand check, the wearer may conceal stolen Tiny or smaller objects within the bandolier's slots, making them appear as simple daggers. " +
      "Only a careful examination of the bandolier reveals the true nature of items concealed in this manner.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shrink item'],
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
        type: 'special',
        target: 'special.pickpocket_bandolier_concealment',
        value: 0,
        source: "Bandolier, Pickpocket's",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 99. Bands of Unbreakable Camaraderie
  // Source: Pathfinder Roleplaying Game: Adventurer's Guide
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-bands-of-unbreakable-camaraderie',
    name: 'Bands of Unbreakable Camaraderie',
    category: 'wondrous',
    source: "Adventurer's Guide",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.DIVINATION }],
    casterLevel: 11,
    slot: 'wrists',

    price: 5000,
    weight: 1,

    description:
      "These plain steel armbands restrict the wearer's ability to attack allies when unable to control his own actions (such as if confused or dominated) or unable to distinguish friends from foes (such as if blinded). " +
      'The wearer takes a -4 penalty on attack rolls against creatures considered allies. ' +
      'When two creatures each wear one armband, the penalty reduces to -2 against allies, and the pair ignores each other for effects that would force attacks against the closest creature, unless one deliberately attacks the other. ' +
      'If they do engage, attacks take the full -4 penalty, always fail critical hit confirmations, and deal nonlethal damage only.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['battlemind link'],
      cost: 2500,
    },
    physicalStats: {
      hardness: 10,
      hitPoints: 5,
      breakDC: 26,
    },

    activationCategory: 'continuous',

    effects: [
      {
        type: 'penalty',
        target: 'attack.all',
        value: -4,
        source: 'Bands of Unbreakable Camaraderie',
        condition: {
          type: 'custom',
          params: { targetType: 'ally', condition: 'confused_or_blinded' },
          description: 'only when attacking allies while confused, dominated, or unable to distinguish foes',
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 100. Banner of Piracy
  // Source: Pathfinder Player Companion: Merchant's Manifest
  // ---------------------------------------------------------------------------
  {
    id: 'wondrous-banner-of-piracy',
    name: 'Banner of Piracy',
    category: 'wondrous',
    source: "Merchant's Manifest",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 3,
    slot: 'none',

    price: 2500,
    weight: 10,

    description:
      "This long, rectangular piece of black fabric has three small metal rings on one side. " +
      "Once per day, if the banner is attached to a ship's mast, a passenger on board with line of sight to the banner can speak a command word and name a port to transform the banner into that port's flag for the next 24 hours. " +
      "When the banner transforms, it also transforms all flags and labels identifying the ship, including any on the ship's cargo. " +
      "If removed from the mast, all disguised elements revert to their original appearance. " +
      "Affected items emit faint transmutation auras, and all flags lose their enchantment if any single flag's enchantment is suppressed via dispel magic. " +
      "Creatures examining affected items closely can attempt a DC 14 Will save to see through the illusion.",

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['prestidigitation'],
      cost: 1250,
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
        target: 'special.ship_flag_disguise',
        value: 0,
        source: 'Banner of Piracy',
      },
    ],
  },
];
