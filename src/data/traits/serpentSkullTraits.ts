import type { TraitDefinition } from '@/types/traits';
import { BonusType } from '@/types/base';

export const SERPENTS_SKULL_TRAITS: TraitDefinition[] = [
  // ==================== CAMPAIGN TRAITS — Serpent's Skull ====================
  {
    id: 'boarded_in_cheliax',
    name: 'Boarded in Cheliax',
    description:
      "You boarded the Jenivere at a Chelaxian port city, viewing the Mwangi Expanse through a distinctly romantic tinge shaped by legends of exotic treasures and strange beasts. You carry a detailed map of the Mwangi Expanse that grants a +2 competence bonus on all Knowledge (geography) checks regarding that region. You also begin the campaign with 200 gp worth of mundane equipment specifically suited for jungle exploration.",
    shortDescription: '+2 Knowledge (geography) about Mwangi Expanse; 200 gp of jungle exploration gear',
    source: "Serpent's Skull Player's Guide",
    category: 'campaign',
    subcategory: "Serpent's Skull",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.knowledge_geography',
        value: 2,
        source: 'Boarded in Cheliax',
        condition: {
          type: 'custom',
          params: {},
          description: 'Regarding the Mwangi Expanse (competence bonus from map)',
        },
      },
    ],
    tags: ['cheliax', 'mwangi-expanse', 'knowledge_geography', 'exploration'],
  },

  {
    id: 'boarded_in_mediogalti',
    name: 'Boarded in Mediogalti',
    description:
      "You boarded the Jenivere in the pirate port of Ilizmagorti in Mediogalti, perhaps fleeing danger or seeking a fresh start. Life in this hazardous port has hardened you against toxins. You gain a +2 trait bonus on all saving throws against poison. In addition, you may select one of the following poisons to be immune to (gained through a painful conditioning process): blue whinnis, giant wasp poison, medium spider venom, small centipede poison, or spider vine poison.",
    shortDescription: '+2 saves vs poison; immunity to one chosen poison',
    source: "Serpent's Skull Player's Guide",
    category: 'campaign',
    subcategory: "Serpent's Skull",
    prerequisites: [],
    choices: [
      {
        type: 'custom',
        label: 'Choose a poison to be immune to',
        options: [
          'Blue whinnis',
          'Giant wasp poison',
          'Medium spider venom',
          'Small centipede poison',
          'Spider vine poison',
        ],
        affectsEffects: true,
        effectTargetTemplate: 'immunity.poison.{choice}',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save_vs_poison',
        value: 2,
        source: 'Boarded in Mediogalti',
      },
    ],
    tags: ['mediogalti', 'poison', 'saving-throw', 'immunity'],
  },

  {
    id: 'boarded_in_mwangi_expanse',
    name: 'Boarded in Mwangi Expanse',
    description:
      "You boarded the Jenivere in the Mwangi Expanse, where you have lived or recently traveled. Familiarity with jungle environments has given you both linguistic and naturalistic knowledge. You gain Polyglot as a bonus language and a +1 trait bonus on all Knowledge (nature) checks regarding jungle terrain and creatures.",
    shortDescription: 'Bonus language: Polyglot; +1 Knowledge (nature) about jungle terrain and creatures',
    source: "Serpent's Skull Player's Guide",
    category: 'campaign',
    subcategory: "Serpent's Skull",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nature',
        value: 1,
        source: 'Boarded in Mwangi Expanse',
        condition: {
          type: 'custom',
          params: {},
          description: 'Regarding jungle terrain and creatures',
        },
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'language.polyglot',
        value: 0,
        source: 'Boarded in Mwangi Expanse',
      },
    ],
    tags: ['mwangi-expanse', 'knowledge_nature', 'jungle', 'language', 'polyglot'],
  },

  {
    id: 'boarded_in_the_shackles',
    name: 'Boarded in the Shackles',
    description:
      "A life of weal and woe on the sea and amid the pirate-controlled lands of the Shackles has toughened you to a variety of hardships. You may choose one saving throw type — Fortitude, Reflex, or Will — and gain a +1 trait bonus on all saving throws of that type.",
    shortDescription: '+1 to all saves of one chosen type (Fortitude, Reflex, or Will)',
    source: "Serpent's Skull Player's Guide",
    category: 'campaign',
    subcategory: "Serpent's Skull",
    prerequisites: [],
    choices: [
      {
        type: 'custom',
        label: 'Choose a saving throw type',
        options: ['Fortitude', 'Reflex', 'Will'],
        affectsEffects: true,
        effectTargetTemplate: 'save.{choice}',
      },
    ],
    effects: [],
    tags: ['shackles', 'saving-throw', 'fortitude', 'reflex', 'will'],
  },

  {
    id: 'boarded_in_varisia',
    name: 'Boarded in Varisia',
    description:
      "You traveled from the northern lands to Garund, lacking familiarity with the jungle environment. Your exotic origin provides unusual advantages among jungle inhabitants. Choose one of the following benefits: gain a +2 trait bonus on all Bluff checks made against jungle inhabitants and natives, or treat spells with the mind-affecting descriptor as being cast at +1 caster level higher when cast against jungle creatures and natives.",
    shortDescription: 'Choose: +2 Bluff vs jungle inhabitants, or +1 caster level for mind-affecting spells vs jungle creatures',
    source: "Serpent's Skull Player's Guide",
    category: 'campaign',
    subcategory: "Serpent's Skull",
    prerequisites: [],
    choices: [
      {
        type: 'custom',
        label: 'Choose a benefit',
        options: [
          '+2 Bluff against jungle inhabitants and natives',
          '+1 effective caster level for mind-affecting spells against jungle creatures and natives',
        ],
        affectsEffects: true,
        effectTargetTemplate: 'special.{choice}',
      },
    ],
    effects: [],
    tags: ['varisia', 'jungle', 'bluff', 'mind-affecting', 'caster-level'],
  },

  {
    id: 'colonial',
    name: 'Colonial',
    description:
      "You are descended from Sargavan colonists with roots in Cheliax's original expansion during the Everwar. You have returned to your homeland aboard the Jenivere, seeking to restore Sargava's prominence. You gain a +1 trait bonus on Knowledge (local) checks relating to Sargavan settlements and politics, and a +1 trait bonus on saving throws against disease.",
    shortDescription: '+1 Knowledge (local) about Sargava; +1 saves vs disease',
    source: "Serpent's Skull Player's Guide",
    category: 'campaign',
    subcategory: "Serpent's Skull",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_local',
        value: 1,
        source: 'Colonial',
        condition: {
          type: 'custom',
          params: {},
          description: 'Relating to Sargavan settlements and politics',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save_vs_disease',
        value: 1,
        source: 'Colonial',
      },
    ],
    tags: ['sargava', 'cheliax', 'knowledge_local', 'disease', 'saving-throw'],
  },

  {
    id: 'get_the_cargo_through',
    name: 'Get the Cargo Through',
    description:
      "Your character's history as a merchant or mercenary transporting valuable cargo aboard the Jenivere to Eleder has earned you a respectable living. You begin the campaign with an additional 300 gp in starting wealth.",
    shortDescription: 'Begin play with +300 gp in starting wealth',
    source: "Serpent's Skull Player's Guide",
    category: 'campaign',
    subcategory: "Serpent's Skull",
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'starting_wealth',
        value: 300,
        source: 'Get the Cargo Through',
      },
    ],
    tags: ['wealth', 'starting-gold', 'merchant', 'mercenary'],
  },

  {
    id: 'jenivere_crew',
    name: 'Jenivere Crew',
    description:
      "You are an experienced sailor who has served aboard the Jenivere cargo vessel since its departure from Magnimar. Your time at sea has honed your practical skills. Choose one of the following skills: Acrobatics, Climb, Knowledge (nature), Knowledge (geography), Swim, or Survival. You gain a +1 trait bonus on checks with the chosen skill, and it is always a class skill for you.",
    shortDescription: '+1 to one chosen ship skill (Acrobatics, Climb, Know. nature/geography, Swim, or Survival); becomes class skill',
    source: "Serpent's Skull Player's Guide",
    category: 'campaign',
    subcategory: "Serpent's Skull",
    prerequisites: [],
    choices: [
      {
        type: 'skill',
        label: 'Choose a skill',
        options: ['Acrobatics', 'Climb', 'Knowledge (nature)', 'Knowledge (geography)', 'Swim', 'Survival'],
        affectsEffects: true,
        effectTargetTemplate: 'skill.{choice}',
      },
    ],
    effects: [],
    tags: ['sailor', 'acrobatics', 'climb', 'swim', 'survival', 'knowledge_nature', 'knowledge_geography', 'class-skill'],
  },

  {
    id: 'mwangi_scholar',
    name: 'Mwangi Scholar',
    description:
      'You have devoted yourself to extensive study of the Mwangi Expanse and are among a select group of genuine experts on its history and mysteries. You gain Polyglot as a bonus language and a +1 trait bonus on all Knowledge (history) checks regarding the Mwangi Expanse.',
    shortDescription: 'Bonus language: Polyglot; +1 Knowledge (history) about the Mwangi Expanse',
    source: "Serpent's Skull Player's Guide",
    category: 'campaign',
    subcategory: "Serpent's Skull",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_history',
        value: 1,
        source: 'Mwangi Scholar',
        condition: {
          type: 'custom',
          params: {},
          description: 'Regarding the Mwangi Expanse',
        },
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'language.polyglot',
        value: 0,
        source: 'Mwangi Scholar',
      },
    ],
    tags: ['mwangi-expanse', 'knowledge_history', 'language', 'polyglot', 'scholar'],
  },

  {
    id: 'stowaway',
    name: 'Stowaway',
    description:
      'You illegally boarded a seafaring vessel, either due to poverty or fear of customs discovery. Life hiding aboard ships has sharpened your ability to move unseen and to find food in difficult circumstances. You gain a +1 trait bonus on Stealth checks and a +1 trait bonus on Survival checks to find food.',
    shortDescription: '+1 Stealth; +1 Survival to find food',
    source: "Serpent's Skull Player's Guide",
    category: 'campaign',
    subcategory: "Serpent's Skull",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.stealth',
        value: 1,
        source: 'Stowaway',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Stowaway',
        condition: {
          type: 'custom',
          params: {},
          description: 'To find food',
        },
      },
    ],
    tags: ['stealth', 'survival', 'ship', 'shackles'],
  },
];

// CHECKPOINT: last_written=stowaway, written=10/10, status=complete
