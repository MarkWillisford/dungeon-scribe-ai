// Aasimar favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/featured-races/arg-aasimar
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - no citation, Aasimar entries → Advanced Race Guide (ARG is the source book for featured races)
//   - (PZO1129) → Advanced Class Guide
//   - (PZO1132) → Occult Adventures
//   - (PZO1134) → Ultimate Intrigue
//   - (PZO1135) → Adventurer's Guide

import type { FavoredClassBonusOption } from '@/types/favoredClassBonuses';
import type { GameDataSource } from '@/types/gameData';

const ARG: GameDataSource = {
  bookId: 'arg',
  bookName: 'Advanced Race Guide',
  publisher: 'Paizo',
};

const META = {
  visibility: 'global' as const,
  isOfficial: true,
  rev: 1,
  verificationStatus: 'needs_review' as const,
};

export const AASIMAR_FAVORED_CLASS_BONUSES: FavoredClassBonusOption[] = [
  {
    id: 'aasimar-bard',
    raceName: 'Aasimar',
    className: 'Bard',
    shortName: 'Bardic Performance CL',
    description:
      'Choose one bardic performance; treat the bard as +1/6 level higher when determining the effects of that performance.',
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'bardic_performance',
      perLevelValue: { numerator: 1, denominator: 6 },
      requiresPickOne: true,
      pickOnePrompt: 'bardic performance',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'aasimar-cavalier',
    raceName: 'Aasimar',
    className: 'Cavalier',
    shortName: 'Challenge Damage',
    description: "Add +1/4 to the cavalier's bonus on damage against targets of his challenge.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'challenge_damage',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'aasimar-cleric',
    raceName: 'Aasimar',
    className: 'Cleric',
    shortName: 'Positive Energy/Alignment Channel Damage',
    description:
      'Add +1/2 to damage when using positive energy against undead or using Alignment Channel to damage evil outsiders.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'channel_energy_damage',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'positive energy against undead',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'channel_energy_damage',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'Alignment Channel against evil outsiders',
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'aasimar-inquisitor',
    raceName: 'Aasimar',
    className: 'Inquisitor',
    shortName: 'Social Skills vs Outsiders',
    description:
      'Add +1/2 on Intimidate, Knowledge, and Sense Motive checks made against outsiders.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_intimidate',
          perLevelValue: { numerator: 1, denominator: 2 },
          vsCreatureType: ['outsider'],
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_knowledge',
          perLevelValue: { numerator: 1, denominator: 2 },
          vsCreatureType: ['outsider'],
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_sense_motive',
          perLevelValue: { numerator: 1, denominator: 2 },
          vsCreatureType: ['outsider'],
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'aasimar-oracle',
    raceName: 'Aasimar',
    className: 'Oracle',
    shortName: 'Revelation CL',
    description:
      "Add +1/6 to the oracle's level for the purpose of determining the effects of one revelation.",
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'revelation',
      perLevelValue: { numerator: 1, denominator: 6 },
      requiresPickOne: true,
      pickOnePrompt: 'revelation',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'aasimar-paladin',
    raceName: 'Aasimar',
    className: 'Paladin',
    shortName: 'Aura Save Bonus',
    description: "Add +1/6 to the morale bonus on saving throws provided by the paladin's auras.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'paladin_auras',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 6 },
      conditionDescription: 'morale bonus on saving throws provided by paladin auras',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'aasimar-sorcerer',
    raceName: 'Aasimar',
    className: 'Sorcerer',
    shortName: 'Good Descriptor CL',
    description:
      "Add +1/4 to the sorcerer's caster level when casting spells with the good descriptor.",
    mechanicalEffect: {
      type: 'caster_level',
      scopeType: 'full',
      descriptorFilter: ['good'],
      targetClass: 'Sorcerer',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'aasimar-summoner',
    raceName: 'Aasimar',
    className: 'Summoner',
    shortName: 'Eidolon DR/evil',
    description:
      "Add DR 1/evil to the summoner's eidolon. Each additional time the summoner selects this benefit, the DR/evil increases by +1/2 (maximum DR 10/evil).",
    mechanicalEffect: {
      type: 'damage_reduction',
      target: 'eidolon',
      damageType: 'evil',
      perLevelValue: { numerator: 1, denominator: 2 },
      maxTotal: 10,
    },
    source: ARG,
    ...META,
  },
];
