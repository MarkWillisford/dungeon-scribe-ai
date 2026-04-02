import { BonusType } from '@/types/base';
import type { TraitDefinition } from '@/types/traits';

export const IRON_GODS_TRAITS: TraitDefinition[] = [
  {
    id: 'against_the_technic_league',
    name: 'Against the Technic League',
    description:
      'You have a grudge against the Technic League, the cabal of spellcasters that truly controls Numeria. Your hatred may stem from personal loss (such as parents slain or enslaved by the League) or from moral outrage at their practices. Select either weapons or spells as your focus. If you choose weapons, you gain a +2 trait bonus on all damage rolls made against targets you know are associated with the Technic League. If you choose spells, you increase the save DC of your spells by 1 when targeting such foes.',
    shortDescription:
      'Choose weapons (+2 damage vs. Technic League) or spells (+1 spell save DC vs. Technic League).',
    source: "Iron Gods Player's Guide",
    category: 'campaign',
    subcategory: 'Iron Gods',
    prerequisites: [],
    effects: [],
    choices: [
      {
        type: 'custom',
        label: 'Choose your focus against the Technic League',
        options: [
          '+2 trait bonus on damage rolls against Technic League foes',
          '+1 to spell save DCs against Technic League foes',
        ],
        affectsEffects: false,
      },
    ],
    tags: ['numeria', 'technic-league', 'damage', 'spells'],
  },

  {
    id: 'local_ties_ig',
    name: 'Local Ties',
    description:
      'You have a personal connection to Khonnir Baine, the prominent wizard of Torch who may have served as your mentor, adoptive father, friend, or business associate. Through this relationship you have gained insight into technology. Select either Disable Device or Knowledge (engineering) as your chosen skill. You gain a +1 trait bonus on checks with that skill, and it is always a class skill for you. In addition, you are treated as having the Technologist feat for the purposes of skill checks related to your chosen skill. If you later gain the Technologist feat, your trait bonus with the chosen skill increases to +3.',
    shortDescription:
      'Choose Disable Device or Knowledge (engineering): +1 (or +3 with Technologist feat), class skill, counts as Technologist.',
    source: "Iron Gods Player's Guide",
    category: 'campaign',
    subcategory: 'Iron Gods',
    prerequisites: [],
    effects: [],
    choices: [
      {
        type: 'skill',
        label: 'Choose a skill',
        options: ['Disable Device', 'Knowledge (engineering)'],
        affectsEffects: true,
        effectTargetTemplate: 'skill.{choice}',
      },
    ],
    tags: [
      'numeria',
      'torch',
      'technology',
      'disable-device',
      'knowledge-engineering',
      'technologist',
    ],
  },

  {
    id: 'numerian_archaeologist',
    name: 'Numerian Archaeologist',
    description:
      'You have studied the mysterious technological ruins scattered throughout Numeria and believe that the strange flames atop Torch connect to a much larger complex buried beneath the town. Your research has taught you the language of those ruins and given you practical experience with their remnants. You gain Androffan as a bonus language. When you use a timeworn technological item, roll twice when determining any glitches the item might cause and choose which result to use.',
    shortDescription:
      'Gain Androffan as a bonus language; roll twice for timeworn tech item glitches and choose the result.',
    source: "Iron Gods Player's Guide",
    category: 'campaign',
    subcategory: 'Iron Gods',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'language.androffan',
        value: 0,
        source: 'Numerian Archaeologist',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.technology_glitch_roll',
        value: 0,
        source: 'Numerian Archaeologist',
        condition: {
          type: 'custom',
          description:
            'Roll twice for glitches when using timeworn technological items and choose the result',
          params: {},
        },
      },
    ],
    tags: ['numeria', 'technology', 'androffan', 'language', 'timeworn', 'glitch'],
  },

  {
    id: 'robot_slayer',
    name: 'Robot Slayer',
    description:
      'You are deeply concerned about the robots infesting the wilderness of Numeria. The discovery of a deactivated robot beneath Torch—and the possibility of more lurking in undiscovered ruins—has motivated you to explore the caves below the town and assess the true extent of the threat. You gain a +1 trait bonus on attack rolls against robots and a +1 dodge bonus to AC against attacks made by robots.',
    shortDescription: '+1 attack rolls vs. robots; +1 dodge bonus to AC vs. robot attacks.',
    source: "Iron Gods Player's Guide",
    category: 'campaign',
    subcategory: 'Iron Gods',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Robot Slayer',
        condition: {
          type: 'custom',
          description: 'Against robots',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'ac.dodge',
        value: 1,
        source: 'Robot Slayer',
        condition: {
          type: 'custom',
          description: 'Against attacks made by robots (dodge bonus)',
          params: {},
        },
      },
    ],
    tags: ['numeria', 'robot', 'attack', 'ac', 'dodge'],
  },

  {
    id: 'skymetal_smith',
    name: 'Skymetal Smith',
    description:
      'Your family has long worked with the violet flames atop Torch Hill, crafting items from the unusual metals that have fallen from the skies over Numeria. Before the fires mysteriously went out, you managed to craft a small skymetal item—the first significant work of your career. You begin play with a skymetal bauble (an art object worth 100 gp) of your choice. You may keep the item, gaining a +2 trait bonus on Will saving throws made against emotion and fear effects. Alternatively, you may sell the item for an additional 100 gp during character creation. If the item is later lost or destroyed through no fault of your own, you retain a +1 trait bonus on such Will saves; if you willingly sell or give it away, you lose all bonuses.',
    shortDescription:
      'Begin with a 100 gp skymetal bauble; keep it for +2 Will vs. emotion/fear, or sell for 100 gp.',
    source: "Iron Gods Player's Guide",
    category: 'campaign',
    subcategory: 'Iron Gods',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 2,
        source: 'Skymetal Smith',
        condition: {
          type: 'custom',
          description: 'Against emotion and fear effects while skymetal bauble is kept',
          params: {},
        },
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Choose what to do with your skymetal bauble',
        options: [
          'Keep the bauble (+2 Will vs. emotion/fear effects)',
          'Sell the bauble for an additional 100 gp during character creation',
        ],
        affectsEffects: false,
      },
    ],
    tags: ['numeria', 'skymetal', 'will-save', 'fear', 'emotion', 'crafting'],
  },

  {
    id: 'stargazer_ig',
    name: 'Stargazer',
    description:
      'You have long been fascinated by the stars and the possibility of life beyond Golarion, and you believe the technological ruins of Numeria are connected to visitors from other worlds. You gain a +2 trait bonus on Knowledge checks to identify the abilities and weaknesses of creatures with the extraterrestrial subtype or creatures native to other planets. You also gain a +1 trait bonus on Knowledge (geography) checks, and Knowledge (geography) is always a class skill for you. You are treated as having the Technologist feat for the purposes of identifying alien creatures via Knowledge skills and for all Knowledge (geography) checks. If you already have the Technologist feat, your bonus on Knowledge (geography) checks increases to +3.',
    shortDescription:
      '+2 Knowledge to identify alien creatures; +1 (or +3 with Technologist) Knowledge (geography) as class skill; counts as Technologist for alien ID and geography.',
    source: "Iron Gods Player's Guide",
    category: 'campaign',
    subcategory: 'Iron Gods',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_any',
        value: 2,
        source: 'Stargazer',
        condition: {
          type: 'custom',
          description: 'To identify abilities and weaknesses of alien or other-planet creatures',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_geography',
        value: 1,
        source: 'Stargazer',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'skill.knowledge_geography_class_skill',
        value: 0,
        source: 'Stargazer',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.technologist_feat_alien_id',
        value: 0,
        source: 'Stargazer',
        condition: {
          type: 'custom',
          description:
            'Treated as having Technologist feat for identifying alien creatures and Knowledge (geography) checks',
          params: {},
        },
      },
    ],
    tags: ['numeria', 'technology', 'alien', 'knowledge-geography', 'technologist', 'stars'],
  },
];

// CHECKPOINT: last_written=stargazer_ig, written=6/6, status=complete
