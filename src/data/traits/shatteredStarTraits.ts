import type { TraitDefinition } from '@/types/traits';
import { BonusType } from '@/types/base';

export const SHATTERED_STAR_TRAITS: TraitDefinition[] = [
  // ==================== CAMPAIGN TRAITS — Shattered Star ====================
  {
    id: 'alabaster_outcast',
    name: 'Alabaster Outcast',
    description:
      "You are a disowned member of one of Magnimar's wealthy families who has joined the Pathfinder Society seeking fortune and redemption. Despite your exile, your family name retains influence in the city. You gain a +1 trait bonus on Diplomacy and Intimidate checks made within Magnimar, and you start play with a noble's outfit, a signet ring, and one additional nonmagical item worth no more than 200 gp.",
    shortDescription:
      '+1 Diplomacy and Intimidate in Magnimar; start with noble outfit and signet ring',
    source: "Shattered Star Player's Guide",
    category: 'campaign',
    subcategory: 'Shattered Star',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Alabaster Outcast',
        condition: {
          type: 'custom',
          params: {},
          description: 'Within Magnimar',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Alabaster Outcast',
        condition: {
          type: 'custom',
          params: {},
          description: 'Within Magnimar',
        },
      },
    ],
    tags: ['magnimar', 'diplomacy', 'intimidate', 'noble', 'social'],
  },

  {
    id: 'beast_of_the_society',
    name: 'Beast of the Society',
    description:
      'You have learned secrets from the Grand Lodge that allow you to maintain your wild shape for longer periods. When using wild shape to transform into a Small or Medium animal, the transformation lasts 2 hours per druid level instead of 1 hour per druid level.',
    shortDescription: 'Wild shape into Small/Medium animals lasts 2 hours per druid level',
    source: "Shattered Star Player's Guide",
    category: 'campaign',
    subcategory: 'Shattered Star',
    prerequisites: [
      { type: 'class', className: 'Druid' },
      { type: 'special', description: 'Pathfinder Society member' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_feature.wild_shape_duration',
        value: 0,
        source: 'Beast of the Society',
        condition: {
          type: 'custom',
          params: {},
          description:
            'When wild shaping into Small or Medium animals; duration doubles to 2 hours/level',
        },
      },
    ],
    tags: ['druid', 'wild-shape', 'pathfinder-society'],
  },

  {
    id: 'berserker_of_the_society',
    name: 'Berserker of the Society',
    description:
      'Your experience as a Pathfinder has deepened your understanding of rage. You may use your barbarian rage ability for 3 additional rounds per day.',
    shortDescription: '+3 rounds of barbarian rage per day',
    source: "Shattered Star Player's Guide",
    category: 'campaign',
    subcategory: 'Shattered Star',
    prerequisites: [
      { type: 'class', className: 'Barbarian' },
      { type: 'special', description: 'Pathfinder Society member' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'class_feature.rage_rounds',
        value: 3,
        source: 'Berserker of the Society',
      },
    ],
    tags: ['barbarian', 'rage', 'pathfinder-society'],
  },

  {
    id: 'blade_of_the_society',
    name: 'Blade of the Society',
    description:
      'Your training with the Pathfinder Society has taught you the vital weak points on humanoids and monsters. You gain a +1 trait bonus on damage rolls from sneak attacks.',
    shortDescription: '+1 damage on sneak attacks',
    source: "Shattered Star Player's Guide",
    category: 'campaign',
    subcategory: 'Shattered Star',
    prerequisites: [
      { type: 'class', className: 'Rogue' },
      { type: 'special', description: 'Pathfinder Society member' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'special.damage_sneak_attack',
        value: 1,
        source: 'Blade of the Society',
      },
    ],
    tags: ['rogue', 'sneak-attack', 'damage', 'pathfinder-society'],
  },

  {
    id: 'defender_of_the_society',
    name: 'Defender of the Society',
    description:
      'Your time spent studying the greatest warriors of the Society taught you new defensive skills while wearing armor. You gain a +1 trait bonus to Armor Class when wearing medium or heavy armor.',
    shortDescription: '+1 AC when wearing medium or heavy armor',
    source: "Shattered Star Player's Guide",
    category: 'campaign',
    subcategory: 'Shattered Star',
    prerequisites: [
      { type: 'class', className: 'Fighter' },
      { type: 'special', description: 'Pathfinder Society member' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'ac',
        value: 1,
        source: 'Defender of the Society',
        condition: {
          type: 'custom',
          params: {},
          description: 'When wearing medium or heavy armor',
        },
      },
    ],
    tags: ['fighter', 'armor-class', 'defense', 'pathfinder-society'],
  },

  {
    id: 'exalted_of_the_society',
    name: 'Exalted of the Society',
    description:
      'Your extensive study of divine powers within the Grand Lodge has enhanced your healing abilities. You may channel energy one additional time per day.',
    shortDescription: 'Channel energy one additional time per day',
    source: "Shattered Star Player's Guide",
    category: 'campaign',
    subcategory: 'Shattered Star',
    prerequisites: [
      { type: 'class', className: 'Cleric' },
      { type: 'special', description: 'Pathfinder Society member' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'class_feature.channel_energy_uses',
        value: 1,
        source: 'Exalted of the Society',
      },
    ],
    tags: ['cleric', 'channel-energy', 'healing', 'pathfinder-society'],
  },

  {
    id: 'exchange_agent',
    name: 'Exchange Agent',
    description:
      'You are a relative newcomer to Magnimar, sent by the Pathfinder Society from your home country to gain frontier experience in Varisia. You gain a bonus language from your homeland nation and a +1 trait bonus on checks with one of the following skills of your choice: Handle Animal, Knowledge (geography), Linguistics, or Survival. The selected skill is always a class skill for you.',
    shortDescription:
      '+1 to one of Handle Animal/Knowledge (geography)/Linguistics/Survival; bonus language',
    source: "Shattered Star Player's Guide",
    category: 'campaign',
    subcategory: 'Shattered Star',
    prerequisites: [],
    choices: [
      {
        type: 'skill',
        label: 'Choose a skill',
        options: ['Handle Animal', 'Knowledge (geography)', 'Linguistics', 'Survival'],
        affectsEffects: true,
        effectTargetTemplate: 'skill.{choice}',
      },
    ],
    effects: [],
    tags: ['magnimar', 'varisia', 'language', 'skill', 'pathfinder-society'],
  },

  {
    id: 'ex_sczarni',
    name: 'Ex-Sczarni',
    description:
      "You were raised in one of Magnimar's Sczarni gangs but never fully belonged. The Pathfinder Society recognized your potential and recruited you as an agent. You have since left the criminal organization, but retain skills from your former life. You gain a +2 trait bonus on Bluff checks made to pass hidden messages, and when delivering a coup de grace attack, you deal an additional 1d6 points of damage.",
    shortDescription: '+2 Bluff to pass hidden messages; +1d6 damage on coup de grace',
    source: "Shattered Star Player's Guide",
    category: 'campaign',
    subcategory: 'Shattered Star',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 2,
        source: 'Ex-Sczarni',
        condition: {
          type: 'custom',
          params: {},
          description: 'When passing hidden messages',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.damage_coup_de_grace',
        value: 0,
        source: 'Ex-Sczarni',
        condition: {
          type: 'custom',
          params: {},
          description: 'When delivering a coup de grace; deals +1d6 damage',
        },
      },
    ],
    tags: ['magnimar', 'sczarni', 'bluff', 'coup-de-grace', 'damage'],
  },

  {
    id: 'greater_adept_of_the_society',
    name: 'Greater Adept of the Society',
    description:
      'Through extensive study and training with accomplished spellcasters affiliated with the Pathfinder Society, you have expanded your magical capabilities. You gain one additional 0-level spell slot.',
    shortDescription: 'Gain one additional 0-level spell slot',
    source: "Shattered Star Player's Guide",
    category: 'campaign',
    subcategory: 'Shattered Star',
    prerequisites: [
      { type: 'class', className: 'Wizard' },
      { type: 'special', description: 'Pathfinder Society member' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.spell_slots_level_0',
        value: 1,
        source: 'Greater Adept of the Society',
      },
    ],
    tags: ['wizard', 'spells', 'cantrip', 'pathfinder-society'],
  },

  {
    id: 'havoc_of_the_society',
    name: 'Havoc of the Society',
    description:
      'Your study of destructive magic within the Pathfinder Society has enhanced your spellcasting power. Whenever you cast a spell that deals damage, you gain a +1 trait bonus to the total damage dealt. This damage is considered force damage regardless of the type of damage dealt by the spell.',
    shortDescription: '+1 damage when casting damage spells; that bonus damage is force damage',
    source: "Shattered Star Player's Guide",
    category: 'campaign',
    subcategory: 'Shattered Star',
    prerequisites: [
      { type: 'class', className: 'Sorcerer' },
      { type: 'special', description: 'Pathfinder Society member' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'special.spell_damage',
        value: 1,
        source: 'Havoc of the Society',
        condition: {
          type: 'custom',
          params: {},
          description: 'When casting a spell that deals damage; the bonus damage is force damage',
        },
      },
    ],
    tags: ['sorcerer', 'spell-damage', 'force', 'pathfinder-society'],
  },

  {
    id: 'honored_fist_of_the_society',
    name: 'Honored Fist of the Society',
    description:
      "You have gained access to martial arts knowledge from rare ancient texts within the Pathfinder Society's archives. You increase your ki pool by 1 point.",
    shortDescription: '+1 point in ki pool',
    source: "Shattered Star Player's Guide",
    category: 'campaign',
    subcategory: 'Shattered Star',
    prerequisites: [
      { type: 'class', className: 'Monk' },
      { type: 'special', description: 'Pathfinder Society member' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'class_feature.ki_pool',
        value: 1,
        source: 'Honored Fist of the Society',
      },
    ],
    tags: ['monk', 'ki', 'pathfinder-society'],
  },

  {
    id: 'maestro_of_the_society',
    name: 'Maestro of the Society',
    description:
      'You have access to the vast treasure trove of musical knowledge in the vaults beneath the Grand Lodge in Absalom. You can use bardic performance for 3 additional rounds per day.',
    shortDescription: '+3 rounds of bardic performance per day',
    source: "Shattered Star Player's Guide",
    category: 'campaign',
    subcategory: 'Shattered Star',
    prerequisites: [
      { type: 'class', className: 'Bard' },
      { type: 'special', description: 'Pathfinder Society member' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'class_feature.bardic_performance_rounds',
        value: 3,
        source: 'Maestro of the Society',
      },
    ],
    tags: ['bard', 'bardic-performance', 'pathfinder-society'],
  },

  {
    id: 'monument_scholar',
    name: 'Monument Scholar',
    description:
      "You grew up in Magnimar, where the city's ancient monuments captivated your imagination. This childhood fascination drove you to join the Pathfinder Society. You gain a +1 trait bonus on Knowledge (history) checks made in Varisia, a +2 trait bonus on Knowledge (history) checks specifically about Magnimar, and a +2 trait bonus on any skill check made to receive a boon from one of Magnimar's magically imbued monuments.",
    shortDescription:
      '+1 Knowledge (history) in Varisia; +2 Knowledge (history) about Magnimar; +2 to receive monument boons',
    source: "Shattered Star Player's Guide",
    category: 'campaign',
    subcategory: 'Shattered Star',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_history',
        value: 1,
        source: 'Monument Scholar',
        condition: {
          type: 'custom',
          params: {},
          description: 'When in Varisia',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_history',
        value: 2,
        source: 'Monument Scholar',
        condition: {
          type: 'custom',
          params: {},
          description: 'About Magnimar specifically',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'special.ability',
        value: 2,
        source: 'Monument Scholar',
        condition: {
          type: 'custom',
          params: {},
          description: 'Skill checks to receive a boon from Magnimar monuments',
        },
      },
    ],
    tags: ['magnimar', 'varisia', 'knowledge_history', 'monuments'],
  },

  {
    id: 'nontraditional_native',
    name: 'Nontraditional Native',
    description:
      "You are a member of the Shoanti or Varisian people who left your people to learn more about the mysteries of your homeland, eventually arriving at Magnimar's Pathfinder lodge. Varisian characters gain a +1 trait bonus on Knowledge (geography) checks related to Varisia and a +1 trait bonus on damage rolls during surprise rounds when wielding a bladed scarf or starknife. Shoanti characters gain a +1 trait bonus on Survival checks made within Varisia and a +1 trait bonus on rolls to confirm critical hits using an earth breaker or klar.",
    shortDescription:
      'Varisian: +1 Knowledge (geography) and +1 damage in surprise round with scarf/starknife. Shoanti: +1 Survival in Varisia and +1 critical confirmation with earth breaker/klar',
    source: "Shattered Star Player's Guide",
    category: 'campaign',
    subcategory: 'Shattered Star',
    prerequisites: [{ type: 'special', description: 'Must be of Shoanti or Varisian ethnicity' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Nontraditional Native',
        condition: {
          type: 'custom',
          params: {},
          description:
            'Varisian: +1 Knowledge (geography) in Varisia and +1 damage in surprise rounds with bladed scarf or starknife. Shoanti: +1 Survival in Varisia and +1 to confirm criticals with earth breaker or klar',
        },
      },
    ],
    tags: ['shoanti', 'varisian', 'varisia', 'ethnicity', 'knowledge_geography', 'survival'],
  },

  {
    id: 'ruin_raider',
    name: 'Ruin Raider',
    description:
      'You became a Pathfinder to pursue wealth through acquiring and selling rare relics throughout Varisia. You gain a +1 trait bonus on Appraise checks and a +4 bonus on Perception checks made to distinguish statue-like creatures (like caryatid columns and gargoyles) from actual sculptures.',
    shortDescription: '+1 Appraise; +4 Perception to identify statue-like creatures',
    source: "Shattered Star Player's Guide",
    category: 'campaign',
    subcategory: 'Shattered Star',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.appraise',
        value: 1,
        source: 'Ruin Raider',
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.perception',
        value: 4,
        source: 'Ruin Raider',
        condition: {
          type: 'custom',
          params: {},
          description: 'To distinguish statue-like creatures from actual sculptures',
        },
      },
    ],
    tags: ['appraise', 'perception', 'varisia', 'ruins'],
  },

  {
    id: 'serpent_runner',
    name: 'Serpent Runner',
    description:
      "Your training at the Serpent's Run, Magnimar's grand hippodrome, has given you an athletic edge. Choose one of the following benefits: reduce the armor check penalty of one specific armor type you are proficient with by 1 when wearing it; reduce the two-weapon fighting penalty to your primary weapon by 1; or gain a +2 trait bonus on Intimidate checks made to demoralize opponents.",
    shortDescription:
      'Choose: -1 armor check penalty on one armor type, -1 two-weapon primary penalty, or +2 Intimidate to demoralize',
    source: "Shattered Star Player's Guide",
    category: 'campaign',
    subcategory: 'Shattered Star',
    prerequisites: [],
    choices: [
      {
        type: 'custom',
        label: 'Choose a benefit',
        options: [
          'Reduce armor check penalty by 1 for one armor type',
          'Reduce two-weapon fighting penalty to primary weapon by 1',
          '+2 Intimidate to demoralize',
        ],
        affectsEffects: true,
        effectTargetTemplate: 'special.{choice}',
      },
    ],
    effects: [],
    tags: ['magnimar', 'hippodrome', 'armor', 'two-weapon-fighting', 'intimidate'],
  },

  {
    id: 'stalwart_of_the_society',
    name: 'Stalwart of the Society',
    description:
      "Access to the courageous powers of Golarion's ancient paladin orders through the Society's historical records has bolstered your resolve. You gain an additional +1 trait bonus on saving throws made against fear effects, which stacks with your aura of courage.",
    shortDescription: '+1 additional saving throw bonus vs fear (stacks with aura of courage)',
    source: "Shattered Star Player's Guide",
    category: 'campaign',
    subcategory: 'Shattered Star',
    prerequisites: [
      { type: 'class', className: 'Paladin' },
      { type: 'special', description: 'Pathfinder Society member' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'special.save_vs_fear',
        value: 1,
        source: 'Stalwart of the Society',
      },
    ],
    tags: ['paladin', 'fear', 'saving-throw', 'pathfinder-society'],
  },

  {
    id: 'tracker_of_the_society',
    name: 'Tracker of the Society',
    description:
      'Through your experience with the Pathfinder Society, you have developed exceptional tracking abilities. You gain a +1 trait bonus on initiative checks and a +2 trait bonus on Survival checks made while traveling through any of your favored terrains. These bonuses stack with your ranger favored terrain class feature.',
    shortDescription:
      '+1 initiative; +2 Survival in favored terrains (stacks with favored terrain)',
    source: "Shattered Star Player's Guide",
    category: 'campaign',
    subcategory: 'Shattered Star',
    prerequisites: [
      { type: 'class', className: 'Ranger' },
      { type: 'special', description: 'Pathfinder Society member' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 1,
        source: 'Tracker of the Society',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 2,
        source: 'Tracker of the Society',
        condition: {
          type: 'custom',
          params: {},
          description: 'While traveling through a favored terrain',
        },
      },
    ],
    tags: ['ranger', 'initiative', 'survival', 'favored-terrain', 'pathfinder-society'],
  },
];

// CHECKPOINT: last_written=tracker_of_the_society, written=18/18, status=complete
