import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const ARCANE_ANTHOLOGY_FEATS: FeatDefinition[] = [
  // Extra Spontaneous Spell Mastery, Mask Focus, Masked by Fear, Masked Intent,
  // Nameless One, Ritual Mask — all skipped (already in adventurersGuideFeats.ts / adventurersGuideFeats2.ts)
  {
    id: 'avid_spellbook_reader',
    name: 'Avid Spellbook Reader',
    description:
      'You gain a +2 bonus on Spellcraft checks for deciphering arcane magical writing. Additionally, you can benefit from up to two preparation rituals simultaneously, provided you have access to both rituals while preparing spells and prepare at least three spells of 1st level or higher from each source book.',
    shortDescription:
      '+2 Spellcraft to decipher arcane writing; use two preparation rituals at once.',
    source: 'Pathfinder Player Companion: Arcane Anthology',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Ability to prepare arcane spells' }],
    effects: [
      {
        type: 'bonus',
        target: 'special.spellcraft',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Avid Spellbook Reader',
      },
    ],
    activationMode: 'passive',
    tags: ['spellbook', 'preparation ritual', 'arcane', 'spellcraft'],
  },
  {
    id: 'painful_blow',
    name: 'Painful Blow',
    description:
      'When using Vital Strike (or its improved versions), struck creatures must treat the damage dealt as continuous damage until the beginning of your next turn, requiring concentration checks to cast spells. You can use this ability twice per day, or three times per day with a BAB of +12 or higher.',
    shortDescription: 'Vital Strike damage counts as continuous for concentration checks 2-3/day.',
    source: 'Pathfinder Player Companion: Arcane Anthology',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'vital_strike' },
      { type: 'bab', minimum: 6 },
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 3 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Painful Blow',
      },
    ],
    activationMode: 'conditional',
    tags: ['vital strike', 'concentration', 'anti-caster', 'continuous damage'],
  },
  {
    id: 'ritualistic_preparation',
    name: 'Ritualistic Preparation',
    description:
      'You can treat spellbooks with preparation rituals as if they were prayer books or meditation books. Additionally, you may take the Avid Spellbook Reader feat without meeting its standard prerequisites.',
    shortDescription:
      'Use spellbooks as prayer/meditation books; bypass Avid Spellbook Reader prereqs.',
    source: 'Pathfinder Player Companion: Arcane Anthology',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_arcana', ranks: 1 },
      { type: 'skill', skillId: 'linguistics', ranks: 1 },
      { type: 'skill', skillId: 'spellcraft', ranks: 1 },
      { type: 'special', description: 'Ability to cast read magic' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Ritualistic Preparation',
      },
    ],
    activationMode: 'passive',
    tags: ['spellbook', 'preparation ritual', 'prayer book', 'meditation'],
  },
  {
    id: 'spell_denial',
    name: 'Spell Denial',
    description:
      'Select one school of magic. You gain a +2 bonus on all saving throws against spells of that school. You can take this feat multiple times, selecting a different school each time.',
    shortDescription: '+2 saves vs. one chosen spell school (can be taken multiple times).',
    source: 'Pathfinder Player Companion: Arcane Anthology',
    types: ['general'],
    prerequisites: [
      {
        type: 'special',
        description: 'Constitution 13, Dexterity 13, or Wisdom 13',
      },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'special.chosen_school',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Spell Denial',
      },
    ],
    activationMode: 'passive',
    choices: [
      {
        type: 'school',
        label: 'School of Magic',
        options: [
          'abjuration',
          'conjuration',
          'divination',
          'enchantment',
          'evocation',
          'illusion',
          'necromancy',
          'transmutation',
        ],
        affectsEffects: true,
      },
    ],
    tags: ['saving throw', 'spell school', 'anti-magic'],
  },
];
