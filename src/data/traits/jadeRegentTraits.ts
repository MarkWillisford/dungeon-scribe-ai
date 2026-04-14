import type { TraitDefinition } from '@/types/traits';
import { BonusType } from '@/types/base';

export const JADE_REGENT_TRAITS: TraitDefinition[] = [
  // ─── Jade Regent Player's Guide ───────────────────────────────────────────

  {
    id: 'best_friend',
    name: 'Best Friend',
    description:
      'You have grown up alongside one of two NPCs — Ameiko or Sandru — and aspire to follow their adventurous path. If your best friend is Ameiko, you gain a +2 trait bonus on Diplomacy checks and Diplomacy becomes a class skill for you. If your best friend is Sandru, you gain a +2 trait bonus on Bluff checks and Bluff becomes a class skill for you. Regardless of your choice, you gain a +1 trait bonus on all attack rolls against enemies threatening your best friend.',
    shortDescription:
      '+2 Diplomacy (Ameiko) or Bluff (Sandru); chosen skill becomes class skill; +1 attack vs enemies threatening your best friend.',
    source: "Jade Regent Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Jade Regent',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Best Friend',
        condition: {
          type: 'custom',
          description: 'Against enemies threatening your best friend (Ameiko or Sandru)',
          params: {},
        },
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Best Friend',
        options: ['Ameiko', 'Sandru'],
        affectsEffects: false,
      },
    ],
    tags: ['campaign', 'jade-regent', 'npc', 'diplomacy', 'bluff', 'attack'],
  },

  {
    id: 'caravan_guard',
    name: 'Caravan Guard',
    description:
      "You recently worked as a guard for Sandru's caravan but left to pursue adventuring. Sandru seemed to understand, and even gave you some good tips on how best to survive potential challenges. You gain a +1 trait bonus on Survival checks, and Survival becomes a class skill for you.",
    shortDescription: '+1 Survival; Survival becomes a class skill.',
    source: "Jade Regent Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Jade Regent',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Caravan Guard',
      },
    ],
    tags: ['campaign', 'jade-regent', 'sandru', 'survival'],
  },

  {
    id: 'childhood_crush',
    name: 'Childhood Crush',
    description:
      'You harbor a long-standing romantic attraction to one of three NPCs — Ameiko, Sandru, or Shalelu. Once per day, you can attempt a DC 15 Charisma check to earn a kind word or smile from your crush; success grants a +1 trait bonus on all saving throws for the remainder of that day. If the NPC returns your affection, this bonus becomes permanent while the relationship endures. You also gain a +1 trait bonus on all attack rolls against enemies threatening your crush.',
    shortDescription:
      'Once per day, DC 15 Cha check for +1 saves rest of day; +1 attack vs enemies threatening your crush.',
    source: "Jade Regent Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Jade Regent',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Childhood Crush',
        condition: {
          type: 'custom',
          description: 'Against enemies threatening your chosen NPC crush',
          params: {},
        },
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Childhood Crush',
        options: ['Ameiko', 'Sandru', 'Shalelu'],
        affectsEffects: false,
      },
    ],
    tags: ['campaign', 'jade-regent', 'npc', 'saving-throws', 'attack', 'daily'],
  },

  {
    id: 'foster_child',
    name: 'Foster Child',
    description:
      'You were raised by Koya Mvashti after your parents passed away. She cared for you as a mother would, and you consider her your adoptive mother and Sandru Vhiski your adoptive brother. Choose any Knowledge skill: you gain a +2 trait bonus on checks with that skill and it becomes a class skill for you. You also gain a +1 trait bonus on all attack rolls against foes that threaten your adoptive mother, Koya.',
    shortDescription:
      '+2 to a chosen Knowledge skill (class skill); +1 attack vs enemies threatening Koya.',
    source: "Jade Regent Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Jade Regent',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Foster Child',
        condition: {
          type: 'custom',
          description: 'Against enemies threatening Koya',
          params: {},
        },
      },
    ],
    choices: [
      {
        type: 'skill',
        label: 'Knowledge Skill',
        options: [
          'knowledgeArcana',
          'knowledgeDungeoneering',
          'knowledgeEngineering',
          'knowledgeGeography',
          'knowledgeHistory',
          'knowledgeLocal',
          'knowledgeNature',
          'knowledgeNobility',
          'knowledgePlanes',
          'knowledgeReligion',
        ],
        affectsEffects: false,
      },
    ],
    tags: ['campaign', 'jade-regent', 'koya', 'knowledge', 'attack'],
  },

  {
    id: 'friend_of_the_family',
    name: 'Friend of the Family',
    description:
      "Your family maintained a longstanding friendship with the Mvashtis. Before her death, the elderly Niska Mvashti extracted a promise from you: to accompany her daughter Koya if she ever embarked on an extended journey. Though such a journey seemed unlikely, you accepted. Since making this vow you've experienced an uncanny sensation of being watched over, as if Niska herself ensures your vigilance. You gain a +1 trait bonus on Perception checks, and Perception becomes a class skill for you. You also gain a +1 trait bonus on all attack rolls against enemies threatening Koya.",
    shortDescription: '+1 Perception (class skill); +1 attack vs enemies threatening Koya.',
    source: "Jade Regent Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Jade Regent',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 1,
        source: 'Friend of the Family',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Friend of the Family',
        condition: {
          type: 'custom',
          description: 'Against enemies threatening Koya',
          params: {},
        },
      },
    ],
    tags: ['campaign', 'jade-regent', 'koya', 'perception', 'attack'],
  },

  {
    id: 'hero_worship',
    name: 'Hero Worship',
    description:
      'You possess an intense admiration for either Ameiko or Shalelu, viewing one of them as a hero worthy of emulation. If you chose Ameiko as your hero, you gain a +2 trait bonus on concentration checks. If you chose Shalelu as your hero, you gain a +1 trait bonus to AC against attacks of opportunity. Regardless of your choice, you also gain a +1 trait bonus on all attack rolls against foes that threaten your hero.',
    shortDescription:
      '+2 concentration (Ameiko) or +1 AC vs AoO (Shalelu); +1 attack vs enemies threatening your hero.',
    source: "Jade Regent Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Jade Regent',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Hero Worship',
        condition: {
          type: 'custom',
          description: 'Against foes threatening your chosen hero (Ameiko or Shalelu)',
          params: {},
        },
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Hero',
        options: ['Ameiko', 'Shalelu'],
        affectsEffects: false,
      },
    ],
    tags: ['campaign', 'jade-regent', 'npc', 'concentration', 'ac', 'attack'],
  },

  {
    id: 'rescued',
    name: 'Rescued',
    description:
      'You survived a near-fatal encounter through the intervention of either Koya or Shalelu, who saved your life at a critical moment. If Koya saved you, you gain a +2 trait bonus to the hit points restored by all cure spells. If Shalelu saved you, you gain a +1 trait bonus on Acrobatics checks and Acrobatics becomes a class skill for you, as well as a +1 trait bonus on all attack rolls against foes threatening Shalelu.',
    shortDescription:
      '+2 hp from cure spells (Koya) or +1 Acrobatics/class skill and +1 attack vs Shalelu threats (Shalelu).',
    source: "Jade Regent Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Jade Regent',
    prerequisites: [],
    effects: [],
    choices: [
      {
        type: 'custom',
        label: 'Rescuer',
        options: ['Koya', 'Shalelu'],
        affectsEffects: false,
      },
    ],
    tags: ['campaign', 'jade-regent', 'npc', 'healing', 'acrobatics', 'attack'],
  },

  {
    id: 'student_survivalist',
    name: 'Student Survivalist',
    description:
      'You were raised by Shalelu, a skilled survivalist from Sandpoint, who taught you wilderness skills and tactics. She treated you as a younger sibling and mentored you in her craft. You gain a +2 trait bonus on all Survival checks, Survival becomes a class skill for you, and you gain a +1 trait bonus on attack rolls against foes that threaten your mentor, Shalelu.',
    shortDescription: '+2 Survival (class skill); +1 attack vs enemies threatening Shalelu.',
    source: "Jade Regent Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Jade Regent',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 2,
        source: 'Student Survivalist',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Student Survivalist',
        condition: {
          type: 'custom',
          description: 'Against foes that threaten Shalelu',
          params: {},
        },
      },
    ],
    tags: ['campaign', 'jade-regent', 'shalelu', 'survival', 'attack'],
  },

  {
    id: 'younger_sibling',
    name: 'Younger Sibling',
    description:
      'You are the younger sibling of an established Sandpoint NPC — Ameiko, Sandru, or Shalelu. You may be a different race than your chosen sibling through adoption. If your sibling is Ameiko, you gain a +1 trait bonus on Will saves. If your sibling is Sandru, you gain a +1 trait bonus on Fortitude saves. If your sibling is Shalelu, you gain a +1 trait bonus on Reflex saves. Regardless of your choice, you gain a +1 trait bonus on all attack rolls against foes threatening your older sibling.',
    shortDescription:
      '+1 Will (Ameiko), Fortitude (Sandru), or Reflex (Shalelu); +1 attack vs enemies threatening your sibling.',
    source: "Jade Regent Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Jade Regent',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Younger Sibling',
        condition: {
          type: 'custom',
          description: 'Against foes threatening your older sibling (Ameiko, Sandru, or Shalelu)',
          params: {},
        },
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Older Sibling',
        options: ['Ameiko', 'Sandru', 'Shalelu'],
        affectsEffects: false,
      },
    ],
    tags: [
      'campaign',
      'jade-regent',
      'npc',
      'saving-throws',
      'will',
      'fortitude',
      'reflex',
      'attack',
    ],
  },
];

// CHECKPOINT: last_written=younger_sibling, written=9/9, status=complete
