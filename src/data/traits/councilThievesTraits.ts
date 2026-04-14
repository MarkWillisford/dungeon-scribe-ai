import type { TraitDefinition } from '@/types/traits';
import { BonusType } from '@/types/base';

export const COUNCIL_OF_THIEVES_TRAITS: TraitDefinition[] = [
  // ==================== CAMPAIGN TRAITS — Council of Thieves ====================
  {
    id: 'child_of_infamy',
    name: 'Child of Infamy',
    description:
      'A close relative of yours was a famous actor or actress who died under compromising circumstances. Rather than diminishing your family reputation, the scandal only enhanced it. You have grown up in the shadow of this notoriety. You gain a +1 trait bonus on Perform (act) checks, and Perform (act) is always a class skill for you. You also begin play with 300 gp as inherited funds to spend as you wish.',
    shortDescription: '+1 Perform (act); class skill; begin with 300 gp',
    source: "Council of Thieves Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Council of Thieves',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perform_act',
        value: 1,
        source: 'Child of Infamy',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Child of Infamy',
      },
    ],
    tags: ['perform', 'act', 'westcrown', 'infamy', 'gold'],
  },
  {
    id: 'conspiracy_hunter',
    name: 'Conspiracy Hunter',
    description:
      'You have long heard rumors of dark deeds afoot in Westcrown—missing shipments, unexplained disappearances, and shadowy criminal organizations—and you are determined to uncover the truth. Choose one of the following skills: Bluff, Diplomacy, Knowledge (local), Perception, Sense Motive, or Stealth. You gain a +1 trait bonus on that skill, and it is always a class skill for you.',
    shortDescription:
      '+1 on one chosen skill (Bluff, Diplomacy, Knowledge [local], Perception, Sense Motive, or Stealth); class skill',
    source: "Council of Thieves Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Council of Thieves',
    prerequisites: [],
    effects: [],
    choices: [
      {
        type: 'skill',
        label: 'Choose a skill',
        options: [
          'Bluff',
          'Diplomacy',
          'Knowledge (local)',
          'Perception',
          'Sense Motive',
          'Stealth',
        ],
        affectsEffects: true,
        effectTargetTemplate: 'skill.{choice}',
      },
    ],
    tags: [
      'bluff',
      'diplomacy',
      'knowledge',
      'perception',
      'sense_motive',
      'stealth',
      'westcrown',
      'conspiracy',
    ],
  },
  {
    id: 'diabolist_raised',
    name: 'Diabolist Raised',
    description:
      "You were raised in devil-possessed Cheliax and have grown up with a thorough understanding of diabolism and infernal politics. You gain a +1 bonus on Bluff, Diplomacy, Intimidate, and Sense Motive checks made against Westcrown's nobility. You also gain a +1 bonus on all saving throws made against mind-affecting attacks from devils.",
    shortDescription:
      '+1 Bluff, Diplomacy, Intimidate, Sense Motive vs Westcrown nobility; +1 saves vs devil mind-affecting',
    source: "Council of Thieves Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Council of Thieves',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.bluff',
        value: 1,
        source: 'Diabolist Raised',
        condition: {
          type: 'custom',
          params: {},
          description: "Against Westcrown's nobility",
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Diabolist Raised',
        condition: {
          type: 'custom',
          params: {},
          description: "Against Westcrown's nobility",
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.intimidate',
        value: 1,
        source: 'Diabolist Raised',
        condition: {
          type: 'custom',
          params: {},
          description: "Against Westcrown's nobility",
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.sense_motive',
        value: 1,
        source: 'Diabolist Raised',
        condition: {
          type: 'custom',
          params: {},
          description: "Against Westcrown's nobility",
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: 1,
        source: 'Diabolist Raised',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against mind-affecting attacks from devils',
        },
      },
    ],
    tags: [
      'bluff',
      'diplomacy',
      'intimidate',
      'sense_motive',
      'devils',
      'cheliax',
      'westcrown',
      'nobility',
      'mind-affecting',
    ],
  },
  {
    id: 'infernal_bastard',
    name: 'Infernal Bastard',
    description:
      'You are a tiefling who has endured an exceptionally difficult life—perhaps an escaped slave, a family shame kept in hiding, or a homeless vagabond. Rather than the typical tiefling resistances, you gain a +2 bonus on all saving throws made against cold, electricity, and fire effects. In addition, rather than the typical tiefling darkness spell-like ability, you may choose any one 0-level spell that you can use at will as a spell-like ability.',
    shortDescription:
      '+2 saves vs cold, electricity, and fire; choose one 0-level spell usable at will (replaces tiefling defaults)',
    source: "Council of Thieves Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Council of Thieves',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: 2,
        source: 'Infernal Bastard',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against cold, electricity, and fire effects',
        },
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Infernal Bastard',
      },
    ],
    tags: ['tiefling', 'cold', 'electricity', 'fire', 'save', 'spell-like', 'westcrown'],
  },
  {
    id: 'shadow_child',
    name: 'Shadow Child',
    description:
      "You have grown up in Westcrown and have adapted to the city's curse-born darkness and the night-horrors that plague it after dark. When attacking targets in areas of dim light, you do not suffer the standard 20% miss chance on attack rolls for being in poorly lit conditions.",
    shortDescription: 'No 20% miss chance when attacking in dim light',
    source: "Council of Thieves Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Council of Thieves',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Shadow Child',
      },
    ],
    tags: ['dim light', 'darkness', 'miss chance', 'attack', 'westcrown', 'shadow'],
  },
  {
    id: 'the_pathfinders_exile',
    name: "The Pathfinder's Exile",
    description:
      'You have a secret contact in the Pathfinder Society and have been tasked with investigating the exiled Pathfinder lodge of Delvehaven in Westcrown and reporting your findings to the Grand Lodge in Absalom. You begin play with a functional wayfinder (value 500 gp) that you have committed to repaying. The wayfinder grants a +2 circumstance bonus on Survival checks to avoid becoming lost, and can emit light (as the light spell, CL 5th) as a standard action.',
    shortDescription:
      'Begin with a wayfinder (500 gp debt); +2 Survival vs getting lost; emit light at will',
    source: "Council of Thieves Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Council of Thieves',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.survival',
        value: 2,
        source: "The Pathfinder's Exile",
        condition: {
          type: 'custom',
          params: {},
          description: 'To avoid becoming lost',
        },
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: "The Pathfinder's Exile",
      },
    ],
    tags: ['pathfinder society', 'wayfinder', 'survival', 'light', 'westcrown', 'delvehaven'],
  },
  {
    id: 'westcrown_firebrand',
    name: 'Westcrown Firebrand',
    description:
      "You are from Westcrown and have grown frustrated with the city's tyranny and oppression, and you seek to join a resistance movement against the corrupt rulers. You gain a +1 trait bonus on Initiative checks. In addition, when you act during a surprise round, you gain a +1 trait bonus on all attack rolls.",
    shortDescription: '+1 Initiative; +1 attack rolls during a surprise round',
    source: "Council of Thieves Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Council of Thieves',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 1,
        source: 'Westcrown Firebrand',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Westcrown Firebrand',
        condition: {
          type: 'custom',
          params: {},
          description: 'During a surprise round',
        },
      },
    ],
    tags: ['initiative', 'attack', 'surprise round', 'westcrown', 'rebellion'],
  },
];

// CHECKPOINT: last_written=westcrown_firebrand, written=7/7, status=complete
