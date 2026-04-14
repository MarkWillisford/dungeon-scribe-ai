import { BonusType } from '@/types/base';
import type { TraitDefinition } from '@/types/traits';

export const UC_TRAITS: TraitDefinition[] = [
  // ==================== COMBAT TRAITS ====================
  {
    id: 'blood_of_dragonscar',
    name: 'Blade of the Society',
    description:
      'You have been extensively trained in the art of sneak attacks. You gain a +1 trait bonus to damage rolls on sneak attacks.',
    shortDescription: '+1 damage on sneak attacks',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'combat',
    prerequisites: [],
    effects: [],
    tags: ['sneak attack', 'damage', 'rogue'],
  },
  {
    id: 'berserker_of_the_society',
    name: 'Berserker of the Society',
    description:
      'Your time spent as a Pathfinder has taught you new truths about the ways of battle. You may use your rage ability for 3 additional rounds per day.',
    shortDescription: '+3 rounds of rage per day',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'combat',
    prerequisites: [],
    effects: [],
    tags: ['rage', 'barbarian', 'rounds'],
  },
  {
    id: 'threatening_defender',
    name: 'Threatening Defender',
    description:
      'You have a talent for using your defense to your advantage. When using Combat Expertise, reduce the penalty on melee attack rolls by 1.',
    shortDescription: 'Reduce Combat Expertise penalty by 1',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'combat',
    prerequisites: [],
    effects: [],
    tags: ['combat expertise', 'attack', 'defense'],
  },
  {
    id: 'inspired_blade',
    name: 'Inspired',
    description:
      'A positive force, be it a living being or a supernatural ideal, inspired you to seek a greater purpose in life. Once per day as a free action, roll twice and take the better result on a skill check or ability check.',
    shortDescription: 'Once per day, roll twice on a skill or ability check',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'faith',
    prerequisites: [],
    effects: [],
    tags: ['reroll', 'daily', 'skill', 'ability'],
  },
  {
    id: 'omen',
    name: 'Omen',
    description:
      'You are the harbinger of some sinister force or prophecy. You gain a +1 trait bonus on Intimidate checks, and Intimidate is always a class skill for you. Once per day, you may attempt to demoralize an opponent as a swift action.',
    shortDescription: '+1 Intimidate; class skill; swift action demoralize 1/day',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Omen',
      },
    ],
    tags: ['intimidate', 'demoralize', 'class skill', 'swift action'],
  },
  // ==================== MAGIC TRAITS ====================
  {
    id: 'wayang_spellhunter',
    name: 'Wayang Spellhunter',
    description:
      "You grew up on one of the wayang-populated islands of southern Minata. You learned to craft magic that is difficult to detect. Pick a spell when you choose this trait. When you apply metamagic feats to this spell that add at least 1 level to the spell, treat its actual level as 1 lower for determining the spell's final adjusted level.",
    shortDescription: 'Reduce metamagic cost of one spell by 1 level',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'magic',
    prerequisites: [],
    effects: [],
    choices: [{ type: 'custom', label: 'Spell', affectsEffects: false }],
    tags: ['metamagic', 'spell level'],
  },
  {
    id: 'tenacious_shifting',
    name: 'Tenacious Shifting',
    description:
      'Your shifting ability is unusually tenacious. Once per day, you can extend the duration of your wild shape, change shape, or other polymorph ability by 1 round.',
    shortDescription: '+1 round polymorph duration once per day',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'magic',
    prerequisites: [],
    effects: [],
    tags: ['polymorph', 'wild shape', 'duration'],
  },
  // ==================== SOCIAL TRAITS ====================
  {
    id: 'maestro_of_the_society',
    name: 'Maestro of the Society',
    description:
      'The Pathfinder Society has taught you a peculiar trick that enables you to maintain your bardic performance for 3 additional rounds per day.',
    shortDescription: '+3 rounds of bardic performance per day',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    prerequisites: [],
    effects: [],
    tags: ['bardic performance', 'bard', 'rounds'],
  },
  {
    id: 'savant',
    name: 'Savant',
    description:
      'You have extensive knowledge of a particular Perform skill. You gain a +2 trait bonus on one Perform skill of your choice, and that Perform skill is always a class skill for you.',
    shortDescription: '+2 on one Perform skill; becomes class skill',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perform',
        value: 2,
        source: 'Savant',
      },
    ],
    choices: [
      {
        type: 'skill',
        label: 'Perform Skill',
        affectsEffects: true,
        effectTargetTemplate: 'skill.perform.{choice}',
      },
    ],
    tags: ['skill', 'perform', 'class skill'],
  },
  {
    id: 'seeker',
    name: 'Seeker',
    description:
      'You are always on the lookout for reward and danger. You gain a +1 trait bonus on Perception checks, and Perception is always a class skill for you.',
    shortDescription: '+1 on Perception; Perception is a class skill',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 1,
        source: 'Seeker',
      },
    ],
    tags: ['skill', 'perception', 'class skill'],
  },
  {
    id: 'resilient_trait',
    name: 'Resilient',
    description:
      'Growing up in a violent neighborhood or rife with plague has made you tougher than most. You gain a +1 trait bonus on Fortitude saves.',
    shortDescription: '+1 trait bonus on Fortitude saves',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 1,
        source: 'Resilient',
      },
    ],
    tags: ['save', 'fortitude'],
  },
  {
    id: 'lessons_of_chaldira',
    name: 'Lessons of Chaldira',
    description:
      'Your studies of the Chaldira Zuzaristan have given you a feel for fortune. Once per day, when you fail a saving throw, you can reroll the saving throw. You must take the new result, even if it is worse.',
    shortDescription: 'Reroll one failed saving throw per day',
    source: 'Ultimate Campaign',
    verificationStatus: 'needs_review' as const,
    category: 'faith',
    prerequisites: [],
    effects: [],
    tags: ['save', 'reroll', 'daily'],
  },
];
