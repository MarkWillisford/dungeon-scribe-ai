import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const TECHNOLOGY_GUIDE_FEATS: FeatDefinition[] = [
  {
    id: 'craft_cybernetics',
    name: 'Craft Cybernetics',
    description:
      'You can create cybernetic items at a rate of one day per 1,000 gp of value using raw materials worth half that amount. You can also repair damaged cyberware (half materials and time of creation) and surgically implant cybernetic devices into living creatures.',
    shortDescription: 'Create, repair, and implant cybernetic items.',
    source: 'Pathfinder Campaign Setting: Technology Guide',
    types: ['item_creation'],
    prerequisites: [
      { type: 'feat', featId: 'technologist' },
      { type: 'skill', skillId: 'heal', ranks: 9 },
      { type: 'skill', skillId: 'knowledge_engineering', ranks: 9 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Craft Cybernetics',
      },
    ],
    activationMode: 'passive',
    tags: ['technology', 'crafting', 'cybernetics', 'item creation'],
  },
  {
    id: 'craft_pharmaceutical',
    name: 'Craft Pharmaceutical',
    description:
      'You can manufacture pharmaceuticals and poisons. Items costing 250 gp or less take 2 hours; more expensive items take 1 day per 1,000 gp. Raw materials cost half the total price.',
    shortDescription: 'Create technological pharmaceuticals and poisons.',
    source: 'Pathfinder Campaign Setting: Technology Guide',
    types: ['item_creation'],
    prerequisites: [
      { type: 'feat', featId: 'technologist' },
      { type: 'skill', skillId: 'heal', ranks: 9 },
      { type: 'skill', skillId: 'knowledge_nature', ranks: 9 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Craft Pharmaceutical',
      },
    ],
    activationMode: 'passive',
    tags: ['technology', 'crafting', 'pharmaceutical', 'item creation'],
  },
  {
    id: 'craft_technological_arms_armor',
    name: 'Craft Technological Arms and Armor',
    description:
      'You can craft technological weapons and armor at 1 day per 1,000 gp, using raw materials worth half the price. You can also repair broken technological weapons and armor at half materials and time.',
    shortDescription: 'Create and repair technological weapons and armor.',
    source: 'Pathfinder Campaign Setting: Technology Guide',
    types: ['item_creation'],
    prerequisites: [
      { type: 'feat', featId: 'technologist' },
      { type: 'skill', skillId: 'craft_mechanical', ranks: 7 },
      { type: 'skill', skillId: 'knowledge_engineering', ranks: 7 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Craft Technological Arms and Armor',
      },
    ],
    activationMode: 'passive',
    tags: ['technology', 'crafting', 'weapons', 'armor', 'item creation'],
  },
  {
    id: 'craft_technological_item',
    name: 'Craft Technological Item',
    description:
      'You can create technological gear at 1 day per 1,000 gp, using raw materials worth half the price. You can also repair broken technological items at half materials and time.',
    shortDescription: 'Create and repair general technological items.',
    source: 'Pathfinder Campaign Setting: Technology Guide',
    types: ['item_creation'],
    prerequisites: [
      { type: 'feat', featId: 'technologist' },
      { type: 'skill', skillId: 'craft_mechanical', ranks: 5 },
      { type: 'skill', skillId: 'knowledge_engineering', ranks: 5 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Craft Technological Item',
      },
    ],
    activationMode: 'passive',
    tags: ['technology', 'crafting', 'item creation'],
  },
  {
    id: 'robots_bane',
    name: "Robot's Bane",
    description:
      'You gain a +1 bonus on attack and damage rolls against robots, a +1 dodge bonus to AC, and +1 on saves against robot attacks. Bonuses increase to +2 at Knowledge (engineering) 11 ranks and +3 at 17 ranks. If robots are a favored enemy, the larger bonus applies (non-stacking).',
    shortDescription: 'Scaling attack, damage, AC, and save bonuses vs. robots.',
    source: 'Pathfinder Campaign Setting: Technology Guide',
    types: ['combat'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_engineering', ranks: 5 }],
    effects: [
      {
        type: 'bonus',
        target: 'special.robots',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: "Robot's Bane",
      },
      {
        type: 'damage',
        target: 'special.robots',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: "Robot's Bane",
      },
      { type: 'bonus', target: 'ac', value: 1, bonusType: BonusType.DODGE, source: "Robot's Bane" },
      {
        type: 'bonus',
        target: 'special.robots',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: "Robot's Bane",
      },
    ],
    activationMode: 'conditional',
    tags: ['technology', 'robot', 'favored enemy', 'scaling'],
  },
  {
    id: 'scavengers_luck',
    name: "Scavenger's Luck",
    description:
      "When using timeworn technology and the result is a glitch, you can reroll (must choose before determining the specific glitch and take the second result even if worse). Timeworn technology doesn't automatically glitch on a natural 1.",
    shortDescription: 'Reroll timeworn technology glitches; no auto-glitch on natural 1.',
    source: 'Pathfinder Campaign Setting: Technology Guide',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_engineering', ranks: 1 }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: "Scavenger's Luck",
      },
    ],
    activationMode: 'conditional',
    tags: ['technology', 'timeworn', 'glitch', 'reroll'],
  },
  {
    id: 'technologist',
    name: 'Technologist',
    description:
      'You are considered trained in any skill used against a technology-based subject. If a skill normally requires training to use against non-technological subjects, you must still have ranks in that skill. Without this feat, skill checks against technology are treated as untrained.',
    shortDescription: 'Trained in all skills vs. technology-based subjects.',
    source: 'Pathfinder Campaign Setting: Technology Guide',
    types: ['general'],
    prerequisites: [],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Technologist',
      },
    ],
    activationMode: 'passive',
    tags: ['technology', 'skill', 'trained'],
  },
  {
    id: 'technology_adept',
    name: 'Technology Adept',
    description:
      'The save DC of any effect caused by a technological firearm you wield increases by 1. If your Point-Blank Shot bonuses apply, the DC increases by 2 instead.',
    shortDescription: '+1 (or +2 with PBS) to save DCs from technological firearms.',
    source: 'Pathfinder Campaign Setting: Technology Guide',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'proficiency', proficiency: 'firearms' },
      { type: 'feat', featId: 'point_blank_shot' },
    ],
    effects: [
      {
        type: 'special',
        value: 1,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Technology Adept',
      },
    ],
    activationMode: 'passive',
    tags: ['technology', 'firearm', 'save DC'],
  },
  {
    id: 'technophobe',
    name: 'Technophobe',
    description:
      'When you reduce a robot to 0 HP or destroy a technological item possessed by an enemy, you receive a +2 morale bonus on ability checks, attack rolls, saving throws, and skill checks for rounds equal to your Wisdom bonus (minimum 1). Also applies to destroying unattended objects if they were in enemy possession within the last round.',
    shortDescription: '+2 morale on everything for WIS rounds after destroying robots/tech.',
    source: 'Pathfinder Campaign Setting: Technology Guide',
    types: ['general'],
    prerequisites: [{ type: 'feat', featId: 'improved_sunder' }],
    effects: [
      {
        type: 'bonus',
        target: 'attack.melee',
        value: 2,
        bonusType: BonusType.MORALE,
        source: 'Technophobe',
      },
      {
        type: 'bonus',
        target: 'special.all',
        value: 2,
        bonusType: BonusType.MORALE,
        source: 'Technophobe',
      },
    ],
    activationMode: 'conditional',
    tags: ['technology', 'robot', 'sunder', 'morale', 'luddite'],
  },
  {
    id: 'wrest_charge',
    name: 'Wrest Charge',
    description:
      'Attempt a DC 20 Disable Device check to extract an additional charge from a depleted battery or discharged timeworn technology. Failure by 5+ or using the charge permanently depletes the battery. Takes 1 minute (or move action at -10). Each battery can only be attempted once.',
    shortDescription:
      'Extract one more charge from depleted tech batteries (DC 20 Disable Device).',
    source: 'Pathfinder Campaign Setting: Technology Guide',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'disable_device', ranks: 5 },
      { type: 'skill', skillId: 'knowledge_engineering', ranks: 5 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Wrest Charge',
      },
    ],
    activationMode: 'conditional',
    tags: ['technology', 'battery', 'charge', 'disable device'],
  },
];
