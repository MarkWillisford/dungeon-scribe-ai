import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

// Harrow Handbook (4 new), Dwarves of Golarion (3 new), People of North (1 new), Seekers of Secrets (2 new)

export const TIER3_BATCH6_FEATS: FeatDefinition[] = [
  // ─── The Harrow Handbook (Deadly Dealer already in acg-extra.ts) ──────────────
  {
    id: 'all_consuming_swing',
    name: 'All-Consuming Swing',
    description:
      'When using Cleave or Great Cleave, you can apply Vital Strike (or Improved/Greater) extra damage to the initial target. You take self-inflicted damage equal to the extra damage dealt, which cannot be reduced by DR.',
    shortDescription: 'Add Vital Strike damage to Cleave at the cost of self-damage.',
    source: 'Pathfinder Player Companion: The Harrow Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'power_attack' },
      { type: 'feat', featId: 'cleave' },
      { type: 'feat', featId: 'vital_strike' },
      { type: 'bab', minimum: 8 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'All-Consuming Swing',
      },
    ],
    activationMode: 'conditional',
    tags: ['cleave', 'vital strike', 'self-damage', 'harrow'],
  },
  {
    id: 'bears_balance',
    name: "Bear's Balance",
    description:
      'You gain +2 on Intimidate while not raging. When failing a save against fear, you may enter rage instead of succumbing. You cannot voluntarily end rage until the fear effect expires or you exhaust rage rounds. No benefit if already raging.',
    shortDescription: '+2 Intimidate; enter rage instead of fearing.',
    source: 'Pathfinder Player Companion: The Harrow Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'iron_will' },
      { type: 'class_feature', featureName: 'rage' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'skill.intimidate',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: "Bear's Balance",
      },
    ],
    activationMode: 'conditional',
    tags: ['rage', 'fear', 'intimidate', 'barbarian', 'harrow'],
  },
  {
    id: 'harrowed_summoning',
    name: 'Harrowed Summoning',
    description:
      'When casting summoning spells/SLAs, draw two harrow cards to grant summoned creatures a +4 enhancement bonus to ability scores matching drawn suits (+6 if both match). Alignment matches double duration; opposite matches halve it. Summoned creatures reflect drawn cards visually.',
    shortDescription: "Draw harrow cards to enhance summoned creatures' ability scores.",
    source: 'Pathfinder Player Companion: The Harrow Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'harrowed' }],
    effects: [
      {
        type: 'special',
        value: 4,
        bonusType: BonusType.ENHANCEMENT,
        target: 'special.ability',
        source: 'Harrowed Summoning',
      },
    ],
    activationMode: 'conditional',
    tags: ['harrow', 'summoning', 'conjuration', 'enhancement'],
  },
  {
    id: 'merciless_beating',
    name: 'Merciless Beating',
    description:
      'When you and 2+ allies threaten an opponent, you can forgo your flanking bonus to grant each ally +1 flanking bonus on attacks against that creature. This stacks with existing flanking bonuses.',
    shortDescription:
      'Sacrifice your flanking bonus to grant +1 flanking to all allies vs. same foe.',
    source: 'Pathfinder Player Companion: The Harrow Handbook',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'gang_up' },
    ],
    effects: [
      {
        type: 'special',
        value: 1,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Merciless Beating',
      },
    ],
    activationMode: 'conditional',
    tags: ['flanking', 'teamwork', 'support', 'harrow'],
  },

  // ─── Dwarves of Golarion (Darting Viper + Dorn-Dergar Master in armoryFeats) ──
  {
    id: 'bounding_hammer',
    name: 'Bounding Hammer',
    description:
      'As a standard action, throw a hammer at an opponent within 20 feet. On a hit, the hammer rebounds to your square. With Snatch Arrows, you can catch it. Does not work against incorporeal creatures (without ghost touch), adhesive creatures, or underwater.',
    shortDescription: 'Thrown hammer rebounds to you on a hit within 20 ft.',
    source: 'Pathfinder Player Companion: Dwarves of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'proficiency', proficiency: 'hammer' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Bounding Hammer',
      },
    ],
    activationMode: 'conditional',
    tags: ['dwarf', 'hammer', 'thrown', 'rebound'],
  },
  {
    id: 'sliding_axe_throw',
    name: 'Sliding Axe Throw',
    description:
      'Take -2 on ranged axe attacks to bounce/slide it along the ground. Against flat-footed, running, or charging targets, this bypasses shield bonuses to AC. A successful hit grants a free trip attempt (no counter-trip on failure). Requires clear ground.',
    shortDescription: 'Bounce axe throw to bypass shields and trip; -2 attack penalty.',
    source: 'Pathfinder Player Companion: Dwarves of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'bab', minimum: 1 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Sliding Axe Throw',
      },
    ],
    activationMode: 'conditional',
    tags: ['dwarf', 'axe', 'thrown', 'trip', 'shield bypass'],
  },
  {
    id: 'stance_of_the_xorn',
    name: 'Stance of the Xorn',
    description:
      'Flanking creatures do not gain the +2 flanking bonus against you. This does not prevent sneak attacks or being denied your Dexterity bonus. Losing your DEX bonus to AC negates this feat.',
    shortDescription: "Flankers don't get +2 attack bonus against you.",
    source: 'Pathfinder Player Companion: Dwarves of Golarion',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'bab', minimum: 3 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Stance of the Xorn',
      },
    ],
    activationMode: 'passive',
    tags: ['dwarf', 'flanking', 'defense', 'xorn', 'awareness'],
  },

  // ─── People of the North (Cold Celerity + Tribal Scars in adventurersGuideFeats) ─
  {
    id: 'witchbreaker',
    name: 'Witchbreaker',
    description:
      'You gain +2 on saves against hexes, spells, SLAs, and supernatural abilities from hags and witches. When you confirm a critical hit against a hag or witch, allies affected by a mind-affecting effect from that creature can attempt a new save as an immediate action.',
    shortDescription:
      '+2 saves vs. hag/witch abilities; crits let allies re-save vs. their effects.',
    source: 'Pathfinder Player Companion: People of the North',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'feat', featId: 'iron_will' }],
    effects: [
      {
        type: 'bonus',
        target: 'special.hex',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Witchbreaker',
      },
    ],
    activationMode: 'conditional',
    tags: ['witch', 'hag', 'hex', 'saving throw', 'critical hit', 'irrisen'],
  },

  // ─── Seekers of Secrets (Boon Companion in ultimateWilderness.ts) ─────────────
  {
    id: 'dilettante',
    name: 'Dilettante',
    description:
      'You gain a +2 bonus on Knowledge checks if you have 1-5 ranks in that skill. This does not stack with Skill Focus. You can make untrained Knowledge checks with DCs up to 15.',
    shortDescription: '+2 on Knowledge checks with 1-5 ranks; untrained checks up to DC 15.',
    source: 'Pathfinder Campaign Setting: Seekers of Secrets',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: '2 ranks each in 5 different Knowledge skills' },
    ],
    effects: [
      {
        type: 'special',
        value: 2,
        bonusType: BonusType.UNTYPED,
        target: 'skill.all',
        source: 'Dilettante',
      },
    ],
    activationMode: 'passive',
    tags: ['knowledge', 'pathfinder society', 'skill bonus', 'versatile'],
  },
  {
    id: 'friendly_switch',
    name: 'Friendly Switch',
    description:
      "As part of your movement or a 5-foot step, move into the space of a willing ally of your size or smaller, displacing them into the space you left. This provokes no AoOs and doesn't count against the ally's next turn movement.",
    shortDescription: 'Swap positions with an adjacent willing ally as part of movement.',
    source: 'Pathfinder Campaign Setting: Seekers of Secrets',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'bab', minimum: 1 }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Friendly Switch',
      },
    ],
    activationMode: 'conditional',
    tags: ['movement', 'positioning', 'ally', 'pathfinder society'],
  },
];
