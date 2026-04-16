import { BonusType } from '@/types/base';
import type { TraitDefinition } from '@/types/traits';

export const UC_EXTRA_TRAITS: TraitDefinition[] = [
  // ==================== COMBAT TRAITS ====================
  {
    id: 'tactician',
    name: 'Tactician',
    description:
      'You know how to take advantage of enemies who are unprepared for your assault. You gain a +1 trait bonus on initiative checks. In addition, once per day when you make an attack of opportunity, you gain a +2 trait bonus on the attack roll.',
    shortDescription: '+1 initiative; +2 on one AoO per day',
    source: 'Ultimate Campaign',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 1,
        source: 'Tactician',
      },
    ],
    tags: ['initiative', 'attack of opportunity'],
  },
  {
    id: 'reckless',
    name: 'Reckless',
    description:
      'You have a tendency for rash behavior, often disregarding your own safety as you move across the battlefield. You gain a +1 bonus on Acrobatics checks, and Acrobatics is always a class skill for you.',
    shortDescription: '+1 on Acrobatics; Acrobatics is a class skill',
    source: 'Ultimate Campaign',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.acrobatics',
        value: 1,
        source: 'Reckless',
      },
    ],
    tags: ['skill', 'acrobatics', 'class skill'],
  },
  {
    id: 'carefully_hidden',
    name: 'Carefully Hidden',
    description:
      'Your life as a member of an unpopular ethnic group has given you an uncanny knack for avoiding detection. You gain a +1 trait bonus to Will saves and a +2 trait bonus on saving throws against divination effects.',
    shortDescription: '+1 Will saves; +2 saves vs divination',
    source: 'Ultimate Campaign',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Carefully Hidden',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Carefully Hidden',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against divination effects',
        },
      },
    ],
    tags: ['save', 'will', 'divination'],
  },
  {
    id: 'log_roller',
    name: 'Log Roller',
    description:
      'You have spent your youth moving up and down treacherous waterways on rafts and boats. You gain a +1 trait bonus on Acrobatics checks and a +1 trait bonus on Swim checks. One of these skills (your choice) is always a class skill for you.',
    shortDescription: '+1 Acrobatics and +1 Swim; one becomes class skill',
    source: 'Ultimate Campaign',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.acrobatics',
        value: 1,
        source: 'Log Roller',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.swim',
        value: 1,
        source: 'Log Roller',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Class Skill',
        options: ['acrobatics', 'swim'],
        affectsEffects: false,
      },
    ],
    tags: ['skill', 'acrobatics', 'swim', 'class skill'],
  },
  {
    id: 'river_rat',
    name: 'River Rat',
    description:
      'You learned to swim right after you learned to walk. As a youth, a near-drowning made you particularly wary of the water, forcing you to learn how to swim with great skill. You gain a +1 trait bonus on damage dealt with daggers and a +1 trait bonus on Swim checks. Swim is always a class skill for you.',
    shortDescription: '+1 dagger damage; +1 Swim; Swim is a class skill',
    source: 'Ultimate Campaign',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.swim',
        value: 1,
        source: 'River Rat',
      },
    ],
    tags: ['dagger', 'damage', 'swim', 'class skill'],
  },
  {
    id: 'hard_headed',
    name: 'Hard-Headed',
    description:
      'You are difficult to sway from your beliefs. You gain a +1 trait bonus on saving throws against effects that cause the confused, dazed, fascinated, or stunned condition.',
    shortDescription: '+1 saves vs confused, dazed, fascinated, stunned',
    source: 'Ultimate Campaign',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Hard-Headed',
        condition: {
          type: 'custom',
          params: {},
          description:
            'Against effects that cause the confused, dazed, fascinated, or stunned condition',
        },
      },
    ],
    tags: ['save', 'conditions', 'confused', 'dazed', 'stunned'],
  },
  {
    id: 'iron_liver',
    name: 'Iron Liver',
    description:
      'Due to a protracted extravagance of-drink and a youth spent in a tavern, you have a remarkably strong constitution when dealing with alcohol and drugs. You gain a +2 trait bonus on Fortitude saves against poison and drugs, and a +4 trait bonus on Fortitude saves to avoid the effects of alcohol.',
    shortDescription: '+2 Fort vs poison/drugs; +4 Fort vs alcohol',
    source: 'Ultimate Campaign',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 2,
        source: 'Iron Liver',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against poison and drugs',
        },
      },
    ],
    tags: ['save', 'fortitude', 'poison', 'drugs', 'alcohol'],
  },
  {
    id: 'slippery',
    name: 'Slippery',
    description:
      'You have escaped from bondage on more than one occasion and are a master of slipping free from any sort of restraint. You gain a +1 trait bonus on Stealth checks and a +1 trait bonus on Escape Artist checks. One of these skills (your choice) is always a class skill for you.',
    shortDescription: '+1 Stealth and +1 Escape Artist; one becomes class skill',
    source: 'Ultimate Campaign',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.stealth',
        value: 1,
        source: 'Slippery',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.escapeArtist',
        value: 1,
        source: 'Slippery',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Class Skill',
        options: ['stealth', 'escapeArtist'],
        affectsEffects: false,
      },
    ],
    tags: ['skill', 'stealth', 'escape artist', 'class skill'],
  },
  {
    id: 'surprise_weapon',
    name: 'Surprise Weapon',
    description:
      'You are skilled at fighting with objects not traditionally considered weapons. You gain a +2 trait bonus on attack rolls with improvised weapons.',
    shortDescription: '+2 trait bonus on attack rolls with improvised weapons',
    source: 'Ultimate Campaign',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.all',
        value: 2,
        source: 'Surprise Weapon',
        condition: {
          type: 'custom',
          params: {},
          description: 'With improvised weapons',
        },
      },
    ],
    tags: ['attack', 'improvised weapon'],
  },
  {
    id: 'veteran_of_battle',
    name: 'Veteran of Battle',
    description:
      'You have fought in several battles and have learned to draw your weapon quickly. You gain a +1 trait bonus on initiative checks. When you draw a weapon, you may also make a free Intimidate check to demoralize one foe within 30 feet who can see you.',
    shortDescription: '+1 initiative; free Intimidate on weapon draw',
    source: 'Ultimate Campaign',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 1,
        source: 'Veteran of Battle',
      },
    ],
    tags: ['initiative', 'intimidate', 'demoralize'],
  },
  {
    id: 'world_weary',
    name: 'World-Weary',
    description:
      'You have seen so many sights that nothing amazes you anymore. You gain a +1 trait bonus on saving throws against illusion effects and a +1 trait bonus on Sense Motive checks.',
    shortDescription: '+1 saves vs illusion; +1 Sense Motive',
    source: 'Ultimate Campaign',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'World-Weary',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against illusion effects',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.senseMotive',
        value: 1,
        source: 'World-Weary',
      },
    ],
    tags: ['save', 'illusion', 'sense motive'],
  },
  {
    id: 'never_stop_shooting',
    name: 'Never Stop Shooting',
    description:
      'Even when you are in danger, you keep your cool and continue to fire your weapon. You gain a +2 trait bonus on attacks of opportunity made with ranged weapons.',
    shortDescription: '+2 on AoOs with ranged weapons',
    source: 'Ultimate Campaign',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.all',
        value: 2,
        source: 'Never Stop Shooting',
        condition: {
          type: 'custom',
          params: {},
          description: 'On attacks of opportunity with ranged weapons',
        },
      },
    ],
    tags: ['attack of opportunity', 'ranged'],
  },
  {
    id: 'perseverance_uc',
    name: 'Perseverance',
    description:
      'You are not easily frightened and will stand your ground in the face of danger. You gain a +1 trait bonus on Fortitude saves and a +1 trait bonus on Will saves against fear effects.',
    shortDescription: '+1 Fort saves; +1 Will vs fear',
    source: 'Ultimate Campaign',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 1,
        source: 'Perseverance',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Perseverance',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against fear effects',
        },
      },
    ],
    tags: ['save', 'fortitude', 'will', 'fear'],
  },
  {
    id: 'life_of_toil',
    name: 'Life of Toil',
    description:
      'You have lived a life of hard labor. You gain a +1 trait bonus on Fortitude saves.',
    shortDescription: '+1 Fortitude saves',
    source: 'Ultimate Campaign',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 1,
        source: 'Life of Toil',
      },
    ],
    tags: ['save', 'fortitude'],
  },
  {
    id: 'scarred_uc',
    name: 'Scarred',
    description:
      'A traumatic experience long ago left you with a disfiguring scar. The ugly wound still pains you, making you tough and thick-skinned. You gain a +2 trait bonus on all Intimidate checks, and a +1 natural armor bonus to your AC.',
    shortDescription: '+2 Intimidate; +1 natural armor',
    source: 'Ultimate Campaign',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 2,
        source: 'Scarred',
      },
    ],
    tags: ['intimidate', 'natural armor'],
  },
  // ==================== FAITH TRAITS ====================
  {
    id: 'devotion_to_the_old_ways',
    name: 'Devotion to the Old Ways',
    description:
      'You adhere to practices that predate modern religion. You gain a +1 trait bonus on Knowledge (nature) checks, and Knowledge (nature) is always a class skill for you.',
    shortDescription: '+1 Knowledge (nature); class skill',
    source: 'Ultimate Campaign',
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeNature',
        value: 1,
        source: 'Devotion to the Old Ways',
      },
    ],
    tags: ['skill', 'knowledge', 'nature', 'class skill'],
  },
  {
    id: 'disdainful_defender',
    name: 'Disdainful Defender',
    description:
      'You are resistant to the magic of other faiths. You gain a +2 trait bonus on Will saves against divine spells.',
    shortDescription: '+2 Will saves vs divine spells',
    source: 'Ultimate Campaign',
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 2,
        source: 'Disdainful Defender',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against divine spells',
        },
      },
    ],
    tags: ['save', 'will', 'divine'],
  },
  {
    id: 'guardian_of_the_forge',
    name: 'Guardian of the Forge',
    description:
      "Torag's sacred fires burn within your heart. You gain a +1 trait bonus on Knowledge (engineering) checks and a +1 trait bonus on Knowledge (religion) checks. One of these skills (your choice) is always a class skill for you.",
    shortDescription: '+1 Knowledge (engineering) and (religion); one becomes class skill',
    source: 'Ultimate Campaign',
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeEngineering',
        value: 1,
        source: 'Guardian of the Forge',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeReligion',
        value: 1,
        source: 'Guardian of the Forge',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Class Skill',
        options: ['knowledgeEngineering', 'knowledgeReligion'],
        affectsEffects: false,
      },
    ],
    tags: ['skill', 'knowledge', 'engineering', 'religion', 'class skill'],
  },
  {
    id: 'beacon_of_faith',
    name: 'Beacon of Faith',
    description:
      'You wield the might of your faith with power and clarity. Once per day as a free action, you may treat your caster level as 2 levels higher when casting a single divine spell.',
    shortDescription: 'Once per day, +2 caster level on one divine spell',
    source: 'Ultimate Campaign',
    category: 'faith',
    prerequisites: [],
    effects: [],
    tags: ['caster level', 'divine', 'daily'],
  },
  {
    id: 'blessed',
    name: 'Blessed',
    description:
      'Some divine agent watches over you. You gain a +1 trait bonus on all saving throws against charm and compulsion effects.',
    shortDescription: '+1 saves vs charm and compulsion',
    source: 'Ultimate Campaign',
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Blessed',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against charm and compulsion effects',
        },
      },
    ],
    tags: ['save', 'charm', 'compulsion'],
  },
  {
    id: 'propitiation_uc',
    name: 'Propitiation',
    description:
      'Your knowledge of the gods tells you exactly which rites and rituals please them. Once per day, when you fail a saving throw against an effect created by a divine spellcaster, you may reroll that saving throw. You must take the new result, even if it is worse.',
    shortDescription: 'Reroll one failed save vs divine spellcaster per day',
    source: 'Ultimate Campaign',
    category: 'faith',
    prerequisites: [],
    effects: [],
    tags: ['save', 'reroll', 'daily', 'divine'],
  },
  {
    id: 'spirit_sense',
    name: 'Spirit Sense',
    description:
      'You are so attuned to the spiritual world that it is sometimes difficult to tell the living from the dead. You gain a +2 trait bonus on Perception checks to avoid being surprised by a foe.',
    shortDescription: '+2 Perception vs surprise',
    source: 'Ultimate Campaign',
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 2,
        source: 'Spirit Sense',
        condition: {
          type: 'custom',
          params: {},
          description: 'To avoid being surprised',
        },
      },
    ],
    tags: ['perception', 'surprise', 'undead'],
  },
  {
    id: 'good_dreams',
    name: 'Good Dreams',
    description:
      'Your sleep is filled with visions of the future that border on the prophetic. Once per day, you may reroll a single Will save. You must take the new result, even if it is worse.',
    shortDescription: 'Reroll one Will save per day',
    source: 'Ultimate Campaign',
    category: 'faith',
    prerequisites: [],
    effects: [],
    tags: ['save', 'will', 'reroll', 'daily'],
  },
  {
    id: 'shadow_whispers',
    name: 'Shadow Whispers',
    description:
      'You hear shadows whispering dark truths to you. You gain a +1 trait bonus on Knowledge (planes) checks and Knowledge (religion) checks. One of these skills (your choice) is always a class skill for you.',
    shortDescription: '+1 Knowledge (planes) and (religion); one becomes class skill',
    source: 'Ultimate Campaign',
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgePlanes',
        value: 1,
        source: 'Shadow Whispers',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeReligion',
        value: 1,
        source: 'Shadow Whispers',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Class Skill',
        options: ['knowledgePlanes', 'knowledgeReligion'],
        affectsEffects: false,
      },
    ],
    tags: ['skill', 'knowledge', 'planes', 'religion', 'class skill'],
  },
  {
    id: 'undead_slayer',
    name: 'Undead Slayer',
    description:
      'Instructed at a young age in the tenets of the faith, you were told the stories of the undead creatures that prey upon the living. You gain a +1 trait bonus on weapon damage against undead.',
    shortDescription: '+1 weapon damage vs undead',
    source: 'Ultimate Campaign',
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.melee',
        value: 1,
        source: 'Undead Slayer',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against undead creatures',
        },
      },
    ],
    tags: ['damage', 'undead'],
  },
  {
    id: 'warded_against_nature_uc',
    name: 'Warded Against Nature',
    description:
      'You were born and raised in an area plagued by natural disasters or animals run wild, and as a result you have learned to fend off the forces of nature. You gain a +1 trait bonus on saving throws against the extraordinary and supernatural abilities of animals, magical beasts, and vermin.',
    shortDescription: '+1 saves vs abilities of animals, magical beasts, vermin',
    source: 'Ultimate Campaign',
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Warded Against Nature',
        condition: {
          type: 'custom',
          params: {},
          description:
            'Against extraordinary and supernatural abilities of animals, magical beasts, and vermin',
        },
      },
    ],
    tags: ['save', 'animals', 'magical beasts', 'vermin'],
  },
  {
    id: 'stoic_optimism',
    name: 'Stoic Optimism',
    description:
      'You realize that extravagant positive thinking can be the best way to survive hardship. You gain a +2 trait bonus on saving throws against fear effects.',
    shortDescription: '+2 saves vs fear',
    source: 'Ultimate Campaign',
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Stoic Optimism',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against fear effects',
        },
      },
    ],
    tags: ['save', 'fear'],
  },
  {
    id: 'zealous_striker',
    name: 'Zealous Striker',
    description:
      'Your faith drives your fighting. Once per day as a swift action, you can cry out a prayer to your deity. The next melee or ranged attack you make before the end of your turn gains a +1 morale bonus on the attack roll and, if successful, deals an additional 1d6 points of damage.',
    shortDescription: '1/day swift action: +1 attack and +1d6 damage on next attack',
    source: 'Ultimate Campaign',
    category: 'faith',
    prerequisites: [],
    effects: [],
    tags: ['attack', 'damage', 'daily', 'swift action'],
  },
  // ==================== MAGIC TRAITS ====================
  {
    id: 'self_taught_scholar',
    name: 'Self-Taught Scholar',
    description:
      'Being caught up in the wonder of magical learning, you may have tried your hand at resistance and counterspelling before even learning the basics of spellcasting. You gain a +1 trait bonus on Linguistics checks and a +1 trait bonus on Spellcraft checks to identify the properties of magic items.',
    shortDescription: '+1 Linguistics; +1 Spellcraft to identify magic items',
    source: 'Ultimate Campaign',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.linguistics',
        value: 1,
        source: 'Self-Taught Scholar',
      },
    ],
    tags: ['skill', 'linguistics', 'spellcraft', 'magic items'],
  },
  {
    id: 'cross_disciplined',
    name: 'Cross-Disciplined',
    description:
      'Your breadth of study has given you access to knowledge that few of your classmates possess. You gain a +1 trait bonus on Knowledge (arcana) checks and a +1 trait bonus on Spellcraft checks. One of these skills (your choice) is always a class skill for you.',
    shortDescription: '+1 Knowledge (arcana) and Spellcraft; one becomes class skill',
    source: 'Ultimate Campaign',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeArcana',
        value: 1,
        source: 'Cross-Disciplined',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.spellcraft',
        value: 1,
        source: 'Cross-Disciplined',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Class Skill',
        options: ['knowledgeArcana', 'spellcraft'],
        affectsEffects: false,
      },
    ],
    tags: ['skill', 'knowledge', 'arcana', 'spellcraft', 'class skill'],
  },
  {
    id: 'lore_seeker',
    name: 'Lore Seeker',
    description:
      'The secrets of ancient fallen civilizations fascinate you, and you have spent many months learning their secrets. You gain a +1 trait bonus on Knowledge (arcana) checks, and Knowledge (arcana) is always a class skill for you. In addition, you may choose up to three spells from the wizard spell list and treat them as one level lower when casting them (minimum 1st level).',
    shortDescription: '+1 Knowledge (arcana); class skill; cast up to 3 wizard spells at -1 level',
    source: 'Ultimate Campaign',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeArcana',
        value: 1,
        source: 'Lore Seeker',
      },
    ],
    tags: ['knowledge', 'arcana', 'class skill', 'spell level'],
  },
  {
    id: 'arcane_revitalization',
    name: 'Arcane Revitalization',
    description:
      'Your innate magic provides you with a small source of healing power. Once per day, you can gain 1 hit point when casting a spell. This effect is activated as a free action while casting the spell.',
    shortDescription: '1/day gain 1 HP when casting a spell',
    source: 'Ultimate Campaign',
    category: 'magic',
    prerequisites: [],
    effects: [],
    tags: ['healing', 'daily', 'casting'],
  },
  {
    id: 'strength_foretold',
    name: 'Strength Foretold',
    description:
      'You have been told that you will one day perform a great act of might. Once per day, you may gain a +1 trait bonus on a single Strength check or Strength-based skill check.',
    shortDescription: '1/day +1 on a Strength check or Strength-based skill check',
    source: 'Ultimate Campaign',
    category: 'magic',
    prerequisites: [],
    effects: [],
    tags: ['strength', 'daily'],
  },
  {
    id: 'skeptic',
    name: 'Skeptic',
    description:
      'Growing up, you were always more resistant to magic than most of the other children around you. You gain a +2 trait bonus on all saving throws against illusion effects.',
    shortDescription: '+2 saves vs illusion',
    source: 'Ultimate Campaign',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Skeptic',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against illusion effects',
        },
      },
    ],
    tags: ['save', 'illusion'],
  },
  {
    id: 'alchemical_adept',
    name: 'Alchemical Adept',
    description:
      'You are skilled in creating alchemical items. You gain a +2 trait bonus on all Craft (alchemy) checks to create alchemical items. Furthermore, when you fail a Craft (alchemy) check by 5 or more but do not roll a natural 1, you do not ruin any raw materials or have to pay that cost again.',
    shortDescription: '+2 Craft (alchemy); failed checks do not ruin materials',
    source: 'Ultimate Campaign',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.craftAlchemy',
        value: 2,
        source: 'Alchemical Adept',
      },
    ],
    tags: ['craft', 'alchemy', 'skill'],
  },
  {
    id: 'enduring_stoicism',
    name: 'Enduring Stoicism',
    description:
      'You have endured much in your time and are not easily shaken. You gain a +2 trait bonus on saving throws against fear effects and a +1 trait bonus on saving throws against enchantment effects.',
    shortDescription: '+2 saves vs fear; +1 saves vs enchantment',
    source: 'Ultimate Campaign',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Enduring Stoicism',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against fear effects',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Enduring Stoicism',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against enchantment effects',
        },
      },
    ],
    tags: ['save', 'fear', 'enchantment'],
  },
  {
    id: 'transmuter_of_korada',
    name: 'Transmuter of Korada',
    description:
      'Your study of transformative magic has given you insight into the nature of polymorphing. Whenever you cast a spell of the polymorph subschool, the duration is increased by 1 round.',
    shortDescription: '+1 round duration on polymorph spells',
    source: 'Ultimate Campaign',
    category: 'magic',
    prerequisites: [],
    effects: [],
    tags: ['polymorph', 'duration', 'transmutation'],
  },
  {
    id: 'siege_mentality',
    name: 'Siege Mentality',
    description:
      'You were born or raised in a land constantly besieged by outside forces or monsters. You gain a +1 trait bonus on saving throws against spells and effects with the fear descriptor, and a +1 trait bonus on all saving throws during the first round of combat.',
    shortDescription: '+1 saves vs fear; +1 all saves in first round of combat',
    source: 'Ultimate Campaign',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Siege Mentality',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against fear effects',
        },
      },
    ],
    tags: ['save', 'fear', 'combat'],
  },
  {
    id: 'bladed_magic',
    name: 'Bladed Magic',
    description:
      'You have an innate talent for using magical weaponry and those weapons work quickly in your hands. You gain a +1 trait bonus on Craft checks made to craft magic or masterwork weapons.',
    shortDescription: '+1 Craft checks to craft magic/masterwork weapons',
    source: 'Ultimate Campaign',
    category: 'magic',
    prerequisites: [],
    effects: [],
    tags: ['craft', 'weapons', 'magic items'],
  },
  {
    id: 'outlander_lore_seeker',
    name: 'Eldritch Delver',
    description:
      'You have always been fascinated by magic in all its forms. You gain a +1 trait bonus on Knowledge (arcana) checks. Additionally, whenever you identify a magic item, roll twice and take the higher result.',
    shortDescription: '+1 Knowledge (arcana); roll twice to identify magic items',
    source: 'Ultimate Campaign',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeArcana',
        value: 1,
        source: 'Eldritch Delver',
      },
    ],
    tags: ['knowledge', 'arcana', 'magic items'],
  },
  // ==================== SOCIAL TRAITS ====================
  {
    id: 'natural_born_leader_uc',
    name: 'Natural-Born Leader',
    description:
      'You have always found yourself in a position where others look to you for guidance and direction. All cohorts, followers, or summoned creatures under your leadership gain a +1 morale bonus on Will saves to avoid mind-affecting effects. If you ever take the Leadership feat, you gain a +1 trait bonus to your Leadership score.',
    shortDescription: 'Cohorts/followers get +1 Will vs mind-affecting; +1 Leadership score',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [],
    tags: ['leadership', 'cohort', 'follower', 'will'],
  },
  {
    id: 'influence',
    name: 'Influence',
    description:
      'Your position in society grants you special privileges. Choose one of the following skills: Diplomacy, Intimidate, or Knowledge (local). You gain a +1 trait bonus on checks with that skill, and it is always a class skill for you.',
    shortDescription: '+1 on Diplomacy, Intimidate, or Knowledge (local); becomes class skill',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.{choice}',
        value: 1,
        source: 'Influence',
      },
    ],
    choices: [
      {
        type: 'skill',
        label: 'Skill',
        options: ['diplomacy', 'intimidate', 'knowledgeLocal'],
        affectsEffects: true,
        effectTargetTemplate: 'skill.{choice}',
      },
    ],
    tags: ['skill', 'class skill', 'diplomacy', 'intimidate', 'knowledge'],
  },
  {
    id: 'log_cabins',
    name: 'Log Cabins',
    description:
      'You grew up in a region of dense forests and logging operations. You gain a +1 trait bonus on Knowledge (nature) checks and a +1 trait bonus on Survival checks when in forests. Knowledge (nature) is always a class skill for you.',
    shortDescription: '+1 Knowledge (nature); +1 Survival in forests; class skill',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeNature',
        value: 1,
        source: 'Log Cabins',
      },
    ],
    tags: ['knowledge', 'nature', 'survival', 'forest', 'class skill'],
  },
  {
    id: 'militia_veteran',
    name: 'Militia Veteran',
    description:
      'Your first job was serving in a civilian militia in your hometown. Choose one of the following skills: Profession (soldier), Ride, or Survival. You gain a +1 trait bonus on checks with that skill, and it is always a class skill for you.',
    shortDescription: '+1 on Profession (soldier), Ride, or Survival; becomes class skill',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.{choice}',
        value: 1,
        source: 'Militia Veteran',
      },
    ],
    choices: [
      {
        type: 'skill',
        label: 'Skill',
        options: ['professionSoldier', 'ride', 'survival'],
        affectsEffects: true,
        effectTargetTemplate: 'skill.{choice}',
      },
    ],
    tags: ['skill', 'class skill', 'military'],
  },
  {
    id: 'convincing_liar',
    name: 'Convincing Liar',
    description:
      'You have spent your life telling lies and have become adept at it. You gain a +1 trait bonus on Bluff or Intimidate checks and one of these skills (your choice) is always a class skill for you.',
    shortDescription: '+1 on Bluff or Intimidate; becomes class skill',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.{choice}',
        value: 1,
        source: 'Convincing Liar',
      },
    ],
    choices: [
      {
        type: 'skill',
        label: 'Skill',
        options: ['bluff', 'intimidate'],
        affectsEffects: true,
        effectTargetTemplate: 'skill.{choice}',
      },
    ],
    tags: ['skill', 'bluff', 'intimidate', 'class skill'],
  },
  {
    id: 'extremely_fashionable',
    name: 'Extremely Fashionable',
    description:
      'You really know how to make a good impression when dressed in the latest fashions. Whenever you are wearing clothing and/or jewelry worth at least 150 gp, you gain a +1 trait bonus on Bluff, Diplomacy, and Intimidate checks. One of these skills (your choice) is always a class skill for you.',
    shortDescription:
      '+1 Bluff, Diplomacy, Intimidate when wearing 150+ gp clothing; one becomes class skill',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Extremely Fashionable',
        condition: {
          type: 'custom',
          params: {},
          description: 'When wearing clothing/jewelry worth at least 150 gp',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Extremely Fashionable',
        condition: {
          type: 'custom',
          params: {},
          description: 'When wearing clothing/jewelry worth at least 150 gp',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Extremely Fashionable',
        condition: {
          type: 'custom',
          params: {},
          description: 'When wearing clothing/jewelry worth at least 150 gp',
        },
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Class Skill',
        options: ['bluff', 'diplomacy', 'intimidate'],
        affectsEffects: false,
      },
    ],
    tags: ['skill', 'bluff', 'diplomacy', 'intimidate', 'class skill', 'fashion'],
  },
  {
    id: 'talented',
    name: 'Talented',
    description:
      'You are a gifted artist, either with music, writing, or visual arts. You gain a +1 trait bonus on Perform checks, and Perform is always a class skill for you.',
    shortDescription: '+1 on Perform; Perform is a class skill',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perform',
        value: 1,
        source: 'Talented',
      },
    ],
    tags: ['skill', 'perform', 'class skill'],
  },
  {
    id: 'well_read',
    name: 'Well-Read',
    description:
      'You are well-versed in a wide range of subjects. You gain a +1 trait bonus on Knowledge (history) checks and a +1 trait bonus on Knowledge (local) checks. One of these skills (your choice) is always a class skill for you.',
    shortDescription: '+1 Knowledge (history) and (local); one becomes class skill',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeHistory',
        value: 1,
        source: 'Well-Read',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeLocal',
        value: 1,
        source: 'Well-Read',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Class Skill',
        options: ['knowledgeHistory', 'knowledgeLocal'],
        affectsEffects: false,
      },
    ],
    tags: ['skill', 'knowledge', 'history', 'local', 'class skill'],
  },
  {
    id: 'canter',
    name: 'Canter',
    description:
      'You grew up among thieves, smugglers, or others who communicate through innuendo and doublespeak. You gain a +5 trait bonus on Bluff checks made to pass secret messages.',
    shortDescription: '+5 Bluff for secret messages',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 5,
        source: 'Canter',
        condition: {
          type: 'custom',
          params: {},
          description: 'When passing secret messages',
        },
      },
    ],
    tags: ['bluff', 'secret messages'],
  },
  {
    id: 'animal_ally',
    name: 'Animal Ally',
    description:
      'You have always had a way with animals, and they seem to trust you. You gain a +1 trait bonus on Handle Animal checks, and Handle Animal is always a class skill for you.',
    shortDescription: '+1 on Handle Animal; Handle Animal is a class skill',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.handleAnimal',
        value: 1,
        source: 'Animal Ally',
      },
    ],
    tags: ['skill', 'handle animal', 'class skill'],
  },
  {
    id: 'artisan',
    name: 'Artisan',
    description:
      'You spent time working under artisans, gaining aitated bonus equal to half your level (minimum 1) on all Craft or Profession checks to earn a living. You gain a +1 trait bonus on Craft checks.',
    shortDescription: '+1 on Craft checks',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.craft',
        value: 1,
        source: 'Artisan',
      },
    ],
    tags: ['skill', 'craft'],
  },
  {
    id: 'auspicious_tattoo',
    name: 'Auspicious Tattoo',
    description:
      'You bear a tattoo that identifies you as a member of a noble bloodline or blessed group. You gain a +1 trait bonus on Will saves.',
    shortDescription: '+1 on Will saves',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Auspicious Tattoo',
      },
    ],
    tags: ['save', 'will'],
  },
  {
    id: 'performance_artist',
    name: 'Performance Artist',
    description:
      'You have spent years honing your performing skills. You gain a +1 trait bonus on one type of Perform check and a +1 trait bonus on Sense Motive checks. One of these skills (your choice) is always a class skill for you.',
    shortDescription: '+1 on one Perform and Sense Motive; one becomes class skill',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perform',
        value: 1,
        source: 'Performance Artist',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.senseMotive',
        value: 1,
        source: 'Performance Artist',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Class Skill',
        options: ['perform', 'senseMotive'],
        affectsEffects: false,
      },
    ],
    tags: ['skill', 'perform', 'sense motive', 'class skill'],
  },
  {
    id: 'vagabond_child',
    name: 'Vagabond Child',
    description:
      'You grew up among the outcasts and background of society, learning to fend for yourself. Choose one of the following skills: Disable Device, Escape Artist, or Sleight of Hand. You gain a +1 trait bonus on checks with that skill, and it is always a class skill for you.',
    shortDescription:
      '+1 on Disable Device, Escape Artist, or Sleight of Hand; becomes class skill',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.{choice}',
        value: 1,
        source: 'Vagabond Child',
      },
    ],
    choices: [
      {
        type: 'skill',
        label: 'Skill',
        options: ['disableDevice', 'escapeArtist', 'sleightOfHand'],
        affectsEffects: true,
        effectTargetTemplate: 'skill.{choice}',
      },
    ],
    tags: ['skill', 'class skill', 'rogue'],
  },
  {
    id: 'rapscallion',
    name: 'Rapscallion',
    description:
      'You have spent your life getting into and out of trouble. You gain a +1 trait bonus on Escape Artist checks and a +1 trait bonus on Initiative checks.',
    shortDescription: '+1 Escape Artist; +1 Initiative',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.escapeArtist',
        value: 1,
        source: 'Rapscallion',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 1,
        source: 'Rapscallion',
      },
    ],
    tags: ['escape artist', 'initiative'],
  },
  {
    id: 'hardy',
    name: 'Hardy',
    description:
      'You were born tough and physically resilient. You gain a +1 trait bonus on Fortitude saves.',
    shortDescription: '+1 Fortitude saves',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 1,
        source: 'Hardy',
      },
    ],
    tags: ['save', 'fortitude'],
  },
  {
    id: 'helpful_trait',
    name: 'Helpful',
    description:
      'You always know the best way to assist your companions. When using the aid another action, you grant a +3 bonus instead of the normal +2.',
    shortDescription: 'Aid another grants +3 instead of +2',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [],
    tags: ['aid another', 'teamwork'],
  },
  {
    id: 'child_of_nature',
    name: 'Child of Nature',
    description:
      'You have been blessed by a deity of nature or you have spent many years living in the wilderness. You gain a +1 trait bonus on Knowledge (nature) checks and Survival checks. One of these skills (your choice) is always a class skill for you.',
    shortDescription: '+1 Knowledge (nature) and Survival; one becomes class skill',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeNature',
        value: 1,
        source: 'Child of Nature',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Child of Nature',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Class Skill',
        options: ['knowledgeNature', 'survival'],
        affectsEffects: false,
      },
    ],
    tags: ['skill', 'knowledge', 'nature', 'survival', 'class skill'],
  },
  {
    id: 'life_of_the_party',
    name: 'Life of the Party',
    description:
      'You are known as the life of every social gathering. You gain a +1 trait bonus on Bluff checks and a +1 trait bonus on Diplomacy checks. One of these skills (your choice) is always a class skill for you.',
    shortDescription: '+1 Bluff and Diplomacy; one becomes class skill',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Life of the Party',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Life of the Party',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Class Skill',
        options: ['bluff', 'diplomacy'],
        affectsEffects: false,
      },
    ],
    tags: ['skill', 'bluff', 'diplomacy', 'class skill'],
  },
  {
    id: 'deft_dodger_social',
    name: 'Unwavering Resolve',
    description:
      'You are not easily shaken or frightened, and you never back down. You gain a +1 trait bonus on Will saves against fear effects.',
    shortDescription: '+1 Will saves vs fear',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Unwavering Resolve',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against fear effects',
        },
      },
    ],
    tags: ['save', 'will', 'fear'],
  },
  {
    id: 'courageous_resolve',
    name: 'Courageous Resolve',
    description:
      'Even when all seems lost you hold out for the best. You gain a +1 trait bonus on saving throws against fear effects.',
    shortDescription: '+1 saves vs fear',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Courageous Resolve',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against fear effects',
        },
      },
    ],
    tags: ['save', 'fear'],
  },
  {
    id: 'freedom_fighter',
    name: 'Freedom Fighter',
    description:
      'Your desire to free your allies is so strong that it gives you extra prowess in battle against those who would impede your efforts. You gain a +1 trait bonus on attack rolls and damage rolls against slavers or on any roll to free someone from bondage.',
    shortDescription: '+1 attack and damage vs slavers; +1 to free captives',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [],
    tags: ['attack', 'damage', 'slaver'],
  },
  {
    id: 'intense_artist',
    name: 'Intense Artist',
    description:
      'Your devotion to art is all-consuming. You gain a +1 trait bonus on Perform checks and a +1 trait bonus on Craft checks. One of these skills (your choice) is always a class skill for you.',
    shortDescription: '+1 Perform and Craft; one becomes class skill',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perform',
        value: 1,
        source: 'Intense Artist',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.craft',
        value: 1,
        source: 'Intense Artist',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Class Skill',
        options: ['perform', 'craft'],
        affectsEffects: false,
      },
    ],
    tags: ['skill', 'perform', 'craft', 'class skill'],
  },
  {
    id: 'mediator',
    name: 'Mediator',
    description:
      'You have a way with words that allows you to defuse even the most heated arguments. You gain a +1 trait bonus on Diplomacy checks. In addition, you receive a +1 trait bonus on Diplomacy checks to mediate a dispute between two parties that do not include yourself.',
    shortDescription: '+1 Diplomacy; additional +1 when mediating disputes',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Mediator',
      },
    ],
    tags: ['skill', 'diplomacy'],
  },
  {
    id: 'dockside_brawler',
    name: 'Dockside Brawler',
    description:
      'You grew up on the docks, learning to fight from sailors and dockworkers. You gain a +1 trait bonus on damage rolls with brass knuckles and improvised weapons.',
    shortDescription: '+1 damage with brass knuckles and improvised weapons',
    source: 'Ultimate Campaign',
    category: 'combat',
    prerequisites: [],
    effects: [],
    tags: ['damage', 'improvised weapon', 'brass knuckles'],
  },
  {
    id: 'undead_crusader_uc',
    name: 'Undead Crusader',
    description:
      'You have dedicated your life to destroying undead. You gain a +1 trait bonus on damage rolls against undead creatures and a +1 trait bonus on Knowledge (religion) checks relating to undead.',
    shortDescription: '+1 damage vs undead; +1 Knowledge (religion) about undead',
    source: 'Ultimate Campaign',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeReligion',
        value: 1,
        source: 'Undead Crusader',
        condition: {
          type: 'custom',
          params: {},
          description: 'Relating to undead',
        },
      },
    ],
    tags: ['damage', 'undead', 'knowledge', 'religion'],
  },
  {
    id: 'gifted_linguist',
    name: 'Gifted Linguist',
    description:
      'You have always had a talent for learning languages. You gain a +1 trait bonus on Linguistics checks and you begin play with one additional language of your choice.',
    shortDescription: '+1 Linguistics; one additional starting language',
    source: 'Ultimate Campaign',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.linguistics',
        value: 1,
        source: 'Gifted Linguist',
      },
    ],
    tags: ['skill', 'linguistics', 'language'],
  },
];
