import type { WondrousItemDefinition } from '@/types/magicItems';
import { AuraStrength, MagicSchool } from '@/types/equipment';

export const wondrousItemsAB13: WondrousItemDefinition[] = [
  // -------------------------------------------------------------------------
  // 301. Broom of Flying, Racing
  // Source: Ultimate Equipment
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-broom-of-flying-racing',
    name: 'Broom of Flying, Racing',
    category: 'wondrous',
    source: 'Ultimate Equipment',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 30000,
    weight: 3,

    description:
      'This item functions as a standard broom of flying but is enchanted for enhanced speed. ' +
      'As a swift action, the rider may activate increased speed, granting 60 feet per round ' +
      '(carrying up to 200 lbs.) or 40 feet per round (carrying up to 400 lbs.). Each minute ' +
      'spent at this speed consumes 1 hour of the broom\'s daily 9-minute flight allotment. ' +
      'The rider may also spend 5 hours of flight time as a swift action to achieve extreme ' +
      'speed: 120 feet per round (200 lb. load) or 80 feet per round (400 lb. load) for 1 ' +
      'round. When this extreme burst ends, there is a 50% chance the broom gains the broken ' +
      'condition and is powerless until repaired.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['haste', 'overland flight', 'permanency'],
      cost: 15000,
    },
    physicalStats: {
      hardness: 5,
      hitPoints: 5,
      breakDC: 18,
    },

    activationCategory: 'command_word',
    activationAction: 'swift',

    effects: [
      {
        type: 'special',
        target: 'special.fly_speed',
        value: 60,
        source: 'Broom of Flying, Racing',
        condition: {
          type: 'custom',
          params: { load: 'up_to_200_lbs' },
          description: 'enhanced speed mode, carrying up to 200 lbs.',
        },
      },
      {
        type: 'special',
        target: 'special.fly_speed',
        value: 40,
        source: 'Broom of Flying, Racing',
        condition: {
          type: 'custom',
          params: { load: 'up_to_400_lbs' },
          description: 'enhanced speed mode, carrying up to 400 lbs.',
        },
      },
      {
        type: 'special',
        target: 'special.broom_racing_burst',
        value: 0,
        source: 'Broom of Flying, Racing',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 302. Bubble Vault
  // Source: Pathfinder Player Companion: Quests & Campaigns (or similar)
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-bubble-vault',
    name: 'Bubble Vault',
    category: 'wondrous',
    source: "Pathfinder Player Companion: Quests & Campaigns",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 5,
    slot: 'none',

    price: 1500,
    weight: 0,

    description:
      'This tiny pearl expands into a soap-bubble approximately one foot in diameter when submerged ' +
      'in water. The vault can store up to 5 cubic feet of goods within its interior. When the command ' +
      'word is spoken three times within 30 feet, the bubble sinks and automatically embeds itself one ' +
      'foot deep in loose substrate. Repeating the command word three times from within 30 feet causes ' +
      'the bubble to surface and open for retrieval. After opening, the bubble reverts to pearl form ' +
      'for 24 hours before it can be used again. The bubble provides watertight storage but offers no ' +
      'other magical protection; contents face normal environmental hazards. If breached, the bubble ' +
      'has hardness 1 and 5 hit points.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['shrink item', 'unseen servant'],
      cost: 750,
    },
    physicalStats: {
      hardness: 1,
      hitPoints: 5,
      breakDC: 12,
    },

    activationCategory: 'command_word',

    effects: [
      {
        type: 'special',
        target: 'special.extradimensional_storage',
        value: 0,
        source: 'Bubble Vault',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 303. Burdenstone
  // Source: Pathfinder Player Companion: Dirty Tactics Toolbox
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-burdenstone',
    name: 'Burdenstone',
    category: 'wondrous',
    source: 'Pathfinder Player Companion: Dirty Tactics Toolbox',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.FAINT, school: MagicSchool.ENCHANTMENT }],
    casterLevel: 5,
    slot: 'none',

    price: 1000,
    weight: 0,

    description:
      'This gray lodestone with obsidian veins can be hurled as a ranged touch attack against a ' +
      'target within 30 feet wearing metal armor. Upon contact, it adheres to the target for 2d6 ' +
      'rounds. While attached, the burdenstone increases the target\'s carrying capacity by one ' +
      'step. If this causes the target\'s load to become heavy, the target falls prone, its ' +
      'movement drops to 10 feet, and it cannot run. The stone also prevents the target from ' +
      'flying while attached. Only one burdenstone can affect a given target at a time. The ' +
      'target may remove the stone prematurely with a DC 20 Strength check as a full-round ' +
      'action. After detaching or when the duration expires, the stone becomes an ordinary ' +
      'magnetic stone.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['burdened thoughts'],
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
        target: 'special.burdenstone_carrying_capacity',
        value: 0,
        source: 'Burdenstone',
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 304. Burrower's Bridle
  // Source: Pathfinder Player Companion: People of the Sands
  // -------------------------------------------------------------------------
  {
    id: 'wondrous-burrowers-bridle',
    name: "Burrower's Bridle",
    category: 'wondrous',
    source: 'Pathfinder Player Companion: People of the Sands',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,

    aura: [{ strength: AuraStrength.MODERATE, school: MagicSchool.TRANSMUTATION }],
    casterLevel: 9,
    slot: 'none',

    price: 6000,
    weight: 2,

    description:
      'This bridle attaches to creatures that possess a burrowing speed and are either friendly or ' +
      'helpless. The rider gains a +4 competence bonus on Ride, Handle Animal, and wild empathy checks ' +
      'made to control the burrowing creature. The bridle enables riders to calm and train burrowing ' +
      'creatures with Intelligence scores below 3, extending its usefulness beyond typical animals or ' +
      'magical beasts. Most notably, the bridle permits riders to accompany their mount while burrowing ' +
      'underground, though it does not grant the ability to breathe underground.',

    construction: {
      feats: ['Craft Wondrous Item'],
      spells: ['charm monster', 'passwall'],
      cost: 3000,
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
        bonusType: 'competence',
        target: 'skill.ride',
        value: 4,
        source: "Burrower's Bridle",
        condition: {
          type: 'custom',
          params: { mountType: 'burrowing_creature' },
          description: 'when riding a creature with a burrowing speed',
        },
      },
      {
        type: 'bonus',
        bonusType: 'competence',
        target: 'skill.handle_animal',
        value: 4,
        source: "Burrower's Bridle",
        condition: {
          type: 'custom',
          params: { mountType: 'burrowing_creature' },
          description: 'when handling a creature with a burrowing speed',
        },
      },
      {
        type: 'special',
        target: 'special.burrowers_bridle_wild_empathy',
        value: 0,
        source: "Burrower's Bridle",
      },
      {
        type: 'special',
        target: 'special.burrowers_bridle_underground_riding',
        value: 0,
        source: "Burrower's Bridle",
      },
    ],
  },
];
