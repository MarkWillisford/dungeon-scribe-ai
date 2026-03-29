import type { TraitDefinition } from '@/types/traits';
import { BonusType } from '@/types/base';

export const REIGN_OF_WINTER_TRAITS: TraitDefinition[] = [
  // ─── Reign of Winter Player's Guide ───────────────────────────────────────

  {
    id: 'adaptive_magic',
    name: 'Adaptive Magic',
    description:
      "You possess a natural fascination with magic and experimentation. Your background might include being the child of an alchemist, wizard, or witch; a member of the Pathfinder Society; or perhaps someone with a touch of fey or dragon blood. While you may lack formal magical training, you have an instinctive talent for using magical items and have always been drawn to the winter magic traditions of the North. You gain a +1 trait bonus on Knowledge (arcana) checks and a +1 trait bonus on Use Magic Device checks. Use Magic Device becomes a class skill for you.",
    shortDescription: '+1 Knowledge (arcana) and Use Magic Device; Use Magic Device becomes a class skill.',
    source: "Reign of Winter Player's Guide",
    category: 'campaign',
    subcategory: 'Reign of Winter',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeArcana',
        value: 1,
        source: 'Adaptive Magic',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.useMagicDevice',
        value: 1,
        source: 'Adaptive Magic',
      },
    ],
    tags: ['campaign', 'reign-of-winter', 'knowledge', 'arcana', 'use-magic-device', 'magic'],
  },

  {
    id: 'blood_of_giants',
    name: 'Blood of Giants',
    description:
      'You possess notable giant heritage, evidenced by exceptional height and strength from childhood. Physical markers may include blue-tinted hair or pale, snow-like skin. You gain a +1 trait bonus on combat maneuver checks to sunder, a +1 trait bonus to your CMD against bull rush combat maneuvers, and a +1 trait bonus to your CMD against overrun combat maneuvers.',
    shortDescription: '+1 CMB to sunder; +1 CMD vs bull rush; +1 CMD vs overrun.',
    source: "Reign of Winter Player's Guide",
    category: 'campaign',
    subcategory: 'Reign of Winter',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmb.sunder',
        value: 1,
        source: 'Blood of Giants',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmd.vs_bull_rush',
        value: 1,
        source: 'Blood of Giants',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmd.vs_overrun',
        value: 1,
        source: 'Blood of Giants',
      },
    ],
    tags: ['campaign', 'reign-of-winter', 'giant', 'cmb', 'cmd', 'sunder', 'bull-rush', 'overrun'],
  },

  {
    id: 'failed_winter_witch_apprentice',
    name: 'Failed Winter Witch Apprentice',
    description:
      "You were apprenticed as a winter witch in Irrisen but did not complete your training. Whether due to disagreements with the White Witches' politics, conflicts with teachers, or unsuitability for witchcraft, you left Irrisen. You retain some knowledge of witchery and northern magic despite your incomplete education. You gain a +1 trait bonus on Knowledge (arcana) and Spellcraft checks to identify spells or magical effects with the cold descriptor. Choose either Knowledge (arcana) or Spellcraft to become a class skill for you. You also gain Hallit or Skald as a bonus language (this does not count against your normal language allotment).",
    shortDescription:
      '+1 Knowledge (arcana) and Spellcraft to identify cold spells; chosen skill becomes class skill; bonus language (Hallit or Skald).',
    source: "Reign of Winter Player's Guide",
    category: 'campaign',
    subcategory: 'Reign of Winter',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeArcana',
        value: 1,
        source: 'Failed Winter Witch Apprentice',
        condition: {
          type: 'custom',
          description: 'To identify spells or magical effects with the cold descriptor',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.spellcraft',
        value: 1,
        source: 'Failed Winter Witch Apprentice',
        condition: {
          type: 'custom',
          description: 'To identify spells or magical effects with the cold descriptor',
          params: {},
        },
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
    tags: ['campaign', 'reign-of-winter', 'witch', 'irrisen', 'knowledge', 'spellcraft', 'cold', 'language'],
  },

  {
    id: 'northern_ancestry',
    name: 'Northern Ancestry',
    description:
      "One of your parents or ancestors originated from the frozen northern lands, instilling in you a deep connection to winter climates. You experienced formative years playing in snow and feel naturally drawn to traveling northward. You gain a +1 trait bonus on Fortitude saves and cold resistance 2. This cold resistance does not stack with cold resistance from other sources.",
    shortDescription: '+1 Fortitude saves; cold resistance 2.',
    source: "Reign of Winter Player's Guide",
    category: 'campaign',
    subcategory: 'Reign of Winter',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 1,
        source: 'Northern Ancestry',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'resistance.cold',
        value: 2,
        source: 'Northern Ancestry',
        condition: {
          type: 'custom',
          description: 'Does not stack with cold resistance from other sources',
          params: {},
        },
      },
    ],
    tags: ['campaign', 'reign-of-winter', 'fortitude', 'cold-resistance', 'north'],
  },

  {
    id: 'restless_wayfarer',
    name: 'Restless Wayfarer',
    description:
      'You have lived a nomadic lifestyle — whether through traveling merchant parents, membership in a nomadic tribe, or early departure from home seeking adventure. This background instills a love of exploration and new experiences, particularly in northern wilderness regions. You gain a +1 trait bonus on Knowledge (geography) checks and a +1 trait bonus on Knowledge (local) checks. One of these two skills becomes a class skill for you (your choice). You also gain one additional language beyond your normal allotment.',
    shortDescription:
      '+1 Knowledge (geography) and Knowledge (local); chosen skill becomes class skill; one bonus language.',
    source: "Reign of Winter Player's Guide",
    category: 'campaign',
    subcategory: 'Reign of Winter',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeGeography',
        value: 1,
        source: 'Restless Wayfarer',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeLocal',
        value: 1,
        source: 'Restless Wayfarer',
      },
    ],
    choices: [
      {
        type: 'class_skill',
        label: 'Class Skill',
        options: ['knowledgeGeography', 'knowledgeLocal'],
        affectsEffects: false,
      },
    ],
    tags: ['campaign', 'reign-of-winter', 'knowledge', 'geography', 'local', 'language', 'exploration'],
  },

  {
    id: 'vigilante_witch_hunter',
    name: 'Vigilante Witch Hunter',
    description:
      "You harbor a deep distrust of witches, stemming from a traumatic childhood experience or personal loss. You have dedicated yourself to identifying and exposing witches, particularly those operating in the North. You gain a +1 trait bonus on Sense Motive checks, and Sense Motive becomes a class skill for you. In addition, you begin the campaign with 1d4 hex nails.",
    shortDescription: '+1 Sense Motive (class skill); start with 1d4 hex nails.',
    source: "Reign of Winter Player's Guide",
    category: 'campaign',
    subcategory: 'Reign of Winter',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.senseMotive',
        value: 1,
        source: 'Vigilante Witch Hunter',
      },
    ],
    tags: ['campaign', 'reign-of-winter', 'witch', 'sense-motive', 'hex-nails'],
  },

  {
    id: 'warded_against_witchery',
    name: 'Warded against Witchery',
    description:
      "Your past involved exposure to evil witchcraft — whether as a victim, conduit, or witness. Though you have tried to move forward, premonitions and deja vu persistently haunt you. Through purity, spiritual blessing, innate resolve, or intuitive familiarity with the arcane arts, you have developed resistance to witchcraft. You gain a +1 trait bonus on saving throws against spells, spell-like abilities, and supernatural abilities of evil arcane spellcasters. You also gain a +1 trait bonus on Spellcraft checks to identify spells cast by evil arcane spellcasters.",
    shortDescription:
      '+1 saves vs evil arcane spellcasters; +1 Spellcraft to identify their spells.',
    source: "Reign of Winter Player's Guide",
    category: 'campaign',
    subcategory: 'Reign of Winter',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Warded against Witchery',
        condition: {
          type: 'custom',
          description: 'Against spells, spell-like abilities, and supernatural abilities of evil arcane spellcasters',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.spellcraft',
        value: 1,
        source: 'Warded against Witchery',
        condition: {
          type: 'custom',
          description: 'To identify spells cast by evil arcane spellcasters',
          params: {},
        },
      },
    ],
    tags: ['campaign', 'reign-of-winter', 'witch', 'saving-throws', 'spellcraft', 'arcane'],
  },
];

// CHECKPOINT: last_written=warded_against_witchery, written=7/7, status=complete
