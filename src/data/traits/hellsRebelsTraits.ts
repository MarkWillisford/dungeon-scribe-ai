import type { TraitDefinition } from '@/types/traits';
import { BonusType } from '@/types/base';

export const HELLS_REBELS_TRAITS: TraitDefinition[] = [
  // ==================== CAMPAIGN TRAITS — Hell's Rebels ====================
  {
    id: 'child_of_kintargo',
    name: 'Child of Kintargo',
    description:
      "You were born into one of Kintargo's noble families, granting you an understanding of high society and the city's aristocratic traditions. You gain a +1 trait bonus on Knowledge (nobility) checks, and Knowledge (nobility) is always a class skill for you. In addition, the Noble Scion feat does not have a Charisma prerequisite for you. You begin play with a noble's outfit, a signet ring, and a single additional nonmagical item worth no more than 200 gp.",
    shortDescription:
      '+1 Knowledge (nobility); class skill; Noble Scion feat loses Charisma prerequisite',
    source: "Hell's Rebels Player's Guide",
    category: 'campaign',
    subcategory: "Hell's Rebels",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nobility',
        value: 1,
        source: 'Child of Kintargo',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Child of Kintargo',
      },
    ],
    tags: ['knowledge', 'nobility', 'noble', 'kintargo', 'social'],
  },
  {
    id: 'diva_in_training',
    name: 'Diva in Training',
    description:
      'You were preparing for a significant operatic role at the Kintargo Opera House when martial law disrupted all performances, leaving your ambitions unfulfilled for now. You gain a +1 trait bonus to one chosen Perform skill. All Perform skills are always class skills for you. In addition, any language-dependent spells or effects you create have their save DCs increased by 1.',
    shortDescription:
      '+1 one Perform skill; all Perform class skills; +1 DC on language-dependent effects',
    source: "Hell's Rebels Player's Guide",
    category: 'campaign',
    subcategory: "Hell's Rebels",
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Diva in Training',
      },
    ],
    choices: [
      {
        type: 'skill',
        label: 'Choose a Perform skill',
        options: [
          'Perform (act)',
          'Perform (comedy)',
          'Perform (dance)',
          'Perform (keyboard)',
          'Perform (oratory)',
          'Perform (percussion)',
          'Perform (sing)',
          'Perform (string)',
          'Perform (wind)',
        ],
        affectsEffects: true,
        effectTargetTemplate: 'skill.{choice}',
      },
    ],
    tags: ['perform', 'bard', 'opera', 'kintargo', 'language', 'spell_dc'],
  },
  {
    id: 'ex_asmodean',
    name: 'Ex-Asmodean',
    description:
      "You or your family once worshiped Asmodeus, but a formative experience—being forced to sacrifice a loved one, becoming a scapegoat for church corruption, or witnessing the deity's true indifference—drove you from the faith. Your family suffered for it: imprisonment, exile from Kintargo, or execution. This trauma drives your commitment to seek vengeance against the church. Choose one of the following: you gain a +1 trait bonus on attack rolls and weapon damage rolls, or you gain a +1 trait bonus on the save DCs of your spells against agents of House Thrune and worshipers of Asmodeus, including most (but not all) devils.",
    shortDescription:
      'Choose: +1 attack and damage, or +1 spell save DCs vs House Thrune and Asmodeus worshipers',
    source: "Hell's Rebels Player's Guide",
    category: 'campaign',
    subcategory: "Hell's Rebels",
    prerequisites: [],
    effects: [],
    choices: [
      {
        type: 'skill',
        label: 'Choose a benefit',
        options: [
          'Attack and damage bonus',
          'Spell save DC bonus vs House Thrune and Asmodeus worshipers',
        ],
        affectsEffects: true,
        effectTargetTemplate: 'special.{choice}',
      },
    ],
    tags: ['asmodeus', 'cheliax', 'attack', 'damage', 'spell_dc', 'thrune'],
  },
  {
    id: 'fed_up_citizen',
    name: 'Fed-Up Citizen',
    description:
      "You are a lawful character who opposes House Thrune's government not out of chaos or evil, but out of genuine disgust at the abuses inflicted on Kintargo's citizens. You gain a +1 trait bonus on Disguise checks, and Disguise is always a class skill for you. When detect good or detect law spells are used against you, your effective Hit Dice are 4 lower than their actual total for the purpose of determining aura strength; divine spellcasters are treated as standard-aligned creatures, preventing aura detection until 9th level. You also gain a +1 trait bonus on all saving throws against mind-affecting effects.",
    shortDescription:
      '+1 Disguise; class skill; aura suppression vs detect spells; +1 saves vs mind-affecting',
    source: "Hell's Rebels Player's Guide",
    category: 'campaign',
    subcategory: "Hell's Rebels",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.disguise',
        value: 1,
        source: 'Fed-Up Citizen',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Fed-Up Citizen',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against mind-affecting effects',
        },
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Fed-Up Citizen',
      },
    ],
    tags: ['disguise', 'lawful', 'mind-affecting', 'will', 'kintargo', 'rebellion'],
  },
  {
    id: 'gifted_satirist',
    name: 'Gifted Satirist',
    description:
      "You were raised among Kintargo's performance community—whether through family connections at the Opera House or as a street busker—and have mastered the art of cloaking scathing political commentary in harmless-seeming entertainment. You gain a +1 trait bonus on Linguistics checks, and Linguistics is always a class skill for you. You also gain a +2 trait bonus on all saving throws against fear effects.",
    shortDescription: '+1 Linguistics; class skill; +2 saves vs fear',
    source: "Hell's Rebels Player's Guide",
    category: 'campaign',
    subcategory: "Hell's Rebels",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.linguistics',
        value: 1,
        source: 'Gifted Satirist',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Gifted Satirist',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against fear effects',
        },
      },
    ],
    tags: ['linguistics', 'fear', 'save', 'performance', 'satire', 'kintargo'],
  },
  {
    id: 'historian_of_the_rebellion',
    name: 'Historian of the Rebellion',
    description:
      'You have long been fascinated by the Silver Ravens, a rebel group that operated in Kintargo during the Chelish Civil War, and have studied what little remains of their history. You gain a +1 trait bonus on Stealth checks, and Stealth is always a class skill for you. Once the party reestablishes the Silver Ravens, you grant a +2 bonus on one Organization check of your choice; this assignment can be changed at the start of each Upkeep phase.',
    shortDescription:
      '+1 Stealth; class skill; +2 on one Silver Ravens Organization check per phase',
    source: "Hell's Rebels Player's Guide",
    category: 'campaign',
    subcategory: "Hell's Rebels",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.stealth',
        value: 1,
        source: 'Historian of the Rebellion',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Historian of the Rebellion',
      },
    ],
    tags: ['stealth', 'silver ravens', 'rebellion', 'kintargo', 'history', 'organization'],
  },
  {
    id: 'natural_born_leader_hr',
    name: 'Natural Born Leader',
    description:
      "Throughout your life you have assumed leadership roles in a variety of situations—handling family emergencies, organizing pranks, or coordinating solutions at work. For the purpose of determining how many teams you can manage in the rebellion and any bonuses you gain on managed teams' actions, treat your Charisma score as 14 (or 2 points higher if your Charisma is already 14 or higher). In addition, if you take the Leadership feat, you gain a +1 trait bonus to your Leadership score.",
    shortDescription:
      'Treat Cha as 14 (or +2) for rebellion teams; +1 Leadership score if you take Leadership feat',
    source: "Hell's Rebels Player's Guide",
    category: 'campaign',
    subcategory: "Hell's Rebels",
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Natural Born Leader',
      },
    ],
    tags: ['leadership', 'charisma', 'rebellion', 'team', 'kintargo'],
  },
  {
    id: 'pattern_seeker',
    name: 'Pattern Seeker',
    description:
      "You are fascinated by hidden patterns in the world and have spent years tracking them—perhaps drawn to Kintargo's Devil's Bells, the great bells atop the Temple of Asmodeus whose unpredictable rings have been recorded since the end of the Chelish Civil War. You gain a +1 trait bonus on all Perception checks, and Perception is always a class skill for you. Any illusion (pattern) spells you cast have their save DCs increased by 1. You also gain a +1 trait bonus on all saving throws against illusion effects.",
    shortDescription:
      '+1 Perception; class skill; +1 DC on illusion (pattern) spells; +1 saves vs illusions',
    source: "Hell's Rebels Player's Guide",
    category: 'campaign',
    subcategory: "Hell's Rebels",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 1,
        source: 'Pattern Seeker',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Pattern Seeker',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against illusion effects',
        },
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Pattern Seeker',
      },
    ],
    tags: ['perception', 'illusion', 'pattern', 'spell_dc', 'save', 'kintargo'],
  },
  {
    id: 'star_struck',
    name: 'Star Struck',
    description:
      "You are obsessed with one of Kintargo's five famous celebrities, all of whom have since disappeared following the imposition of martial law. Choose one celebrity: Jackdaw (legendary folk hero/heroine; Intelligence), Jilia Bainilus (former lord-mayor; Wisdom), Octavio Sabinus (Hellknight Lictor; Strength), Shensen (opera performer and activist; Charisma), or Strea Vestori (tiefling community leader; Dexterity). You gain a +1 trait bonus on Knowledge (local) checks. Once per day, when about to make a skill check modified by the ability score associated with your chosen celebrity, you may roll twice and take the better result.",
    shortDescription:
      '+1 Knowledge (local); once per day roll twice on one ability score type skill check',
    source: "Hell's Rebels Player's Guide",
    category: 'campaign',
    subcategory: "Hell's Rebels",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_local',
        value: 1,
        source: 'Star Struck',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Star Struck',
      },
    ],
    choices: [
      {
        type: 'skill',
        label: 'Choose a celebrity',
        options: [
          'Jackdaw (Intelligence)',
          'Jilia Bainilus (Wisdom)',
          'Octavio Sabinus (Strength)',
          'Shensen (Charisma)',
          'Strea Vestori (Dexterity)',
        ],
        affectsEffects: true,
        effectTargetTemplate: 'special.{choice}',
      },
    ],
    tags: ['knowledge', 'local', 'reroll', 'daily', 'kintargo', 'celebrity'],
  },
  {
    id: 'urban_sleuth',
    name: 'Urban Sleuth',
    description:
      "You are invested in uncovering Kintargo's hidden history and choose one of the city's great mysteries as your focus: the Devil's Bells (Knowledge [arcana] or Knowledge [planes]), Local Dragons (Knowledge [arcana] or Knowledge [history]), Professor Mangvhune (Knowledge [local] or Knowledge [planes]), or the Silver Ravens (Knowledge [local] or Knowledge [history]). You gain a +1 trait bonus on the Knowledge skill associated with your chosen focus, and that skill becomes a class skill for you. Once per day, when making a Knowledge check related to your focus, you may roll twice and use the better result.",
    shortDescription:
      '+1 on one Knowledge skill tied to chosen mystery; class skill; once per day roll twice',
    source: "Hell's Rebels Player's Guide",
    category: 'campaign',
    subcategory: "Hell's Rebels",
    prerequisites: [],
    effects: [],
    choices: [
      {
        type: 'skill',
        label: 'Choose a mystery focus and Knowledge skill',
        options: [
          "Devil's Bells: Knowledge (arcana)",
          "Devil's Bells: Knowledge (planes)",
          'Local Dragons: Knowledge (arcana)',
          'Local Dragons: Knowledge (history)',
          'Professor Mangvhune: Knowledge (local)',
          'Professor Mangvhune: Knowledge (planes)',
          'Silver Ravens: Knowledge (local)',
          'Silver Ravens: Knowledge (history)',
        ],
        affectsEffects: true,
        effectTargetTemplate: 'skill.{choice}',
      },
    ],
    tags: ['knowledge', 'history', 'arcana', 'local', 'planes', 'kintargo', 'reroll', 'daily'],
  },
];

// CHECKPOINT: last_written=urban_sleuth, written=10/10, status=complete
