import type { TraitDefinition } from '@/types/traits';
import { BonusType } from '@/types/base';

// NOTE: Pathfinder Campaign Setting: Faiths of Golarion (2018) contains no
// character traits — only deities and deific boons. Religion traits for its
// deities (Chaldira, Grandmother Spider, Gruhastha, Hei Feng, Kazutal,
// Ketephys, Magrim, Nivi Rhombodazzle, Shizuru, Tsukiyo) are sourced from
// Inner Sea Gods, Divine Anthology, and other books already covered elsewhere
// in this codebase.
//
// Pathfinder Player Companion: Disciple's Doctrine (2018) contains 7 faith-
// flavored traits included below.

export const FAITHS_GOLARION_TRAITS: TraitDefinition[] = [
  // ==================== DISCIPLE'S DOCTRINE ====================

  {
    id: 'aspect_of_the_quah',
    name: 'Aspect of the Quah',
    description:
      "You invoke your Shoanti quah's totem for power, gaining a unique totem aspect that permanently replaces one animal aspect from your animal focus feature. The aspect gained depends on your chosen quah: Shadde-Quah (Cliff) grants +4 competence bonus on Acrobatics checks to avoid falls and Constitution checks to avoid drowning (increasing to +4 at 8th level and +6 at 15th); Sklar-Quah (Emberstorm) grants fire resistance 5 (increasing to 10 at 8th and 15 at 15th); Shriikirri-Quah (Horse) grants +4 competence bonus on Ride checks (increasing to +6 at 8th and +8 at 15th); Lyrune-Quah (Star) grants low-light vision and +2 competence bonus on Perception (increasing to +4 at 8th and +6 at 15th); Tamiir-Quah (Storm) grants +4 bonus on saves vs cold, disease, heat, starvation, and thirst (increasing to +6 at 8th and +8 at 15th); Shundar-Quah (Storm Roc) grants +2 enhancement bonus to Charisma (increasing to +4 at 8th and +6 at 15th); Skoan-Quah (Will-o-Wisp) grants +2 bonus on saves vs fear and mind-affecting effects (increasing to +4 at 8th and +6 at 15th).",
    shortDescription: 'Replace one animal aspect with your Shoanti quah totem aspect',
    source: "Disciple's Doctrine",
    category: 'faith',
    prerequisites: [
      { type: 'special', description: 'Must be a hunter or have access to the animal aspect class feature' },
      { type: 'special', description: 'Must choose a Shoanti quah' },
    ],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'animal_aspect',
        value: 0,
        source: 'Aspect of the Quah',
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Shoanti Quah',
        options: [
          'Shadde-Quah (Cliff)',
          'Sklar-Quah (Emberstorm)',
          'Shriikirri-Quah (Horse)',
          'Lyrune-Quah (Star)',
          'Tamiir-Quah (Storm)',
          'Shundar-Quah (Storm Roc)',
          'Skoan-Quah (Will-o-Wisp)',
        ],
        affectsEffects: true,
      },
    ],
    tags: ['shoanti', 'animal focus', 'hunter', 'totem', 'quah'],
  },

  {
    id: 'dogged',
    name: 'Dogged',
    description:
      'You draw strength from adversity. Once per day, when you roll a natural 1 on an attack roll, saving throw, skill check, or ability check, you gain a +1 trait bonus on any one roll you attempt before the end of the next round.',
    shortDescription: '+1 trait bonus on one roll after rolling a natural 1 (1/day)',
    source: "Disciple's Doctrine",
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'any_roll',
        value: 1,
        source: 'Dogged',
        condition: {
          type: 'custom',
          params: {},
          description: 'On one roll before end of next round, after rolling a natural 1 (1/day)',
        },
      },
    ],
    tags: ['daily', 'reroll', 'bonus', 'natural 1'],
  },

  {
    id: 'ecumenical',
    name: 'Ecumenical',
    description:
      'Your upbringing in a cosmopolitan city such as Magnimar taught you to recognize signs of worship of demigods such as empyreal lords. You gain a +2 trait bonus on Knowledge (religion) checks involving entities other than the most prominent gods, and a +2 trait bonus on Diplomacy checks to influence worshipers of demigods and similar lesser deities.',
    shortDescription: '+2 Knowledge (religion) vs demigods; +2 Diplomacy with their worshipers',
    source: "Disciple's Doctrine",
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_religion',
        value: 2,
        source: 'Ecumenical',
        condition: {
          type: 'custom',
          params: {},
          description: 'When dealing with demigods and lesser deities',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 2,
        source: 'Ecumenical',
        condition: {
          type: 'custom',
          params: {},
          description: 'To influence worshipers of demigods and lesser deities',
        },
      },
    ],
    tags: ['demigods', 'knowledge', 'religion', 'diplomacy', 'social'],
  },

  {
    id: 'heretics_caution',
    name: "Heretic's Caution",
    description:
      'You were raised in an unconventional faith — one lacking a traditional deity or following a heretical variant — and learned to conceal your beliefs. You gain a +1 trait bonus on Bluff checks. This bonus increases to +3 on Bluff checks opposed by the Sense Motive checks of religious authorities.',
    shortDescription: '+1 Bluff; +3 Bluff vs religious authorities',
    source: "Disciple's Doctrine",
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: "Heretic's Caution",
      },
    ],
    tags: ['bluff', 'deception', 'religion', 'heretic'],
  },

  {
    id: 'imperfect_recall',
    name: 'Imperfect Recall',
    description:
      'Your belief in reincarnation, as taught by Sangpotshi philosophy or the traditions of regions once part of Imperial Lung Wa, is reinforced by vivid flashes of knowledge you have no conscious memory of learning. Once per day while you are in danger or distracted, you gain a +3 bonus on a single Knowledge skill check.',
    shortDescription: '+3 on one Knowledge check while in danger or distracted (1/day)',
    source: "Disciple's Doctrine",
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_any',
        value: 3,
        source: 'Imperfect Recall',
        condition: {
          type: 'custom',
          params: {},
          description: 'On one Knowledge check while in danger or distracted (1/day)',
        },
      },
    ],
    tags: ['knowledge', 'daily', 'reincarnation', 'sangpotshi'],
  },

  {
    id: 'natural_ritualist',
    name: 'Natural Ritualist',
    description:
      'You venerate nature through Shoanti totem spirits or Tamashigo kami appeasement. Once per week you construct a small shrine of natural materials and pay your respects in a 15-minute ritual (which spellcasters may perform during daily spell preparation). For 24 hours after completing the ritual you gain a +2 trait bonus on Knowledge (nature) and Survival checks.',
    shortDescription: '+2 Knowledge (nature) and Survival for 24 hours after weekly 15-min ritual',
    source: "Disciple's Doctrine",
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nature',
        value: 2,
        source: 'Natural Ritualist',
        condition: {
          type: 'custom',
          params: {},
          description: 'For 24 hours after completing weekly ritual',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 2,
        source: 'Natural Ritualist',
        condition: {
          type: 'custom',
          params: {},
          description: 'For 24 hours after completing weekly ritual',
        },
      },
    ],
    tags: ['nature', 'survival', 'knowledge', 'ritual', 'shoanti', 'kami'],
  },

  {
    id: 'self_sustaining',
    name: 'Self-Sustaining',
    description:
      'You follow a tradition emphasizing self-reliance, such as the worship of Razmir or the Prophecies of Kalistrade. Choose one 0-level spell from the following list: create water, mending, purify food and drink, or stabilize. You can cast the chosen spell once per day as a spell-like ability, using your character level as your caster level.',
    shortDescription: 'Cast one chosen 0-level utility spell 1/day as a spell-like ability',
    source: "Disciple's Doctrine",
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'spell_like_ability',
        value: 1,
        source: 'Self-Sustaining',
      },
    ],
    choices: [
      {
        type: 'custom',
        label: '0-Level Spell',
        options: ['create water', 'mending', 'purify food and drink', 'stabilize'],
        affectsEffects: true,
      },
    ],
    tags: ['spell-like ability', 'self-reliance', 'razmir', 'kalistrade', 'daily'],
  },
];

// CHECKPOINT: last_written=self_sustaining, written=7/7, status=complete
