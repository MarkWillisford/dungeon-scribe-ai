// Sylph favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/featured-races/arg-sylph
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - no citation → Advanced Race Guide (ARG) (Sylph is a featured race from ARG)
//   - (PZO1129) → Advanced Class Guide
//   - (PZO1132) → Occult Adventures
//   - (PZO1134) → Ultimate Intrigue
//   - (PZO1135) → Adventurer's Guide

import type { FavoredClassBonusEntry } from '@/types/favoredClassBonuses';
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

export const SYLPH_FAVORED_CLASS_BONUSES: FavoredClassBonusEntry[] = [
  {
    id: 'sylph-cleric',
    raceName: 'Sylph',
    className: 'Cleric',
    shortName: 'Knowledge (planes) — Air',
    description:
      'Add a +1/2 bonus on Knowledge (planes) checks relating to the Plane of Air and creatures with the air subtype.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_knowledge_planes',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription:
        'checks relating to the Plane of Air and creatures with the air subtype',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'sylph-druid',
    raceName: 'Sylph',
    className: 'Druid',
    shortName: 'Knowledge (nature) — Weather/Flying',
    description:
      'Add a +1/2 bonus on Knowledge (nature) checks relating to weather and flying animals.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_knowledge_nature',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'checks relating to weather and flying animals',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'sylph-inquisitor',
    raceName: 'Sylph',
    className: 'Inquisitor',
    shortName: 'Stealth Motionless + Opposed Perception',
    description:
      'Add a +1/2 bonus on Stealth checks while motionless and on opposed Perception checks.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_stealth',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'while motionless',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_perception',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'opposed Perception checks',
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'sylph-oracle',
    raceName: 'Sylph',
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
    id: 'sylph-rogue',
    raceName: 'Sylph',
    className: 'Rogue',
    shortName: 'Acrobatics (Jump) + Sense Motive',
    description:
      'Add a +1/2 bonus on Acrobatics checks to jump and a +1/2 bonus on Sense Motive checks.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_acrobatics',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'checks to jump',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_sense_motive',
          perLevelValue: { numerator: 1, denominator: 2 },
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'sylph-sorcerer',
    raceName: 'Sylph',
    className: 'Sorcerer',
    shortName: 'Djinni/Air Bloodline Power CL',
    description:
      'Choose a bloodline power from the djinni or elemental (air) bloodline that the sorcerer can use. The sorcerer treats her class level as though it were +1/6 higher (to a maximum of +2) when determining the effects of that power.',
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'bloodline_power',
      perLevelValue: { numerator: 1, denominator: 6 },
      requiresPickOne: true,
      pickOnePrompt: 'bloodline power (djinni or elemental [air] bloodline)',
      scopeDescription: 'maximum +2 class level bump',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'sylph-witch',
    raceName: 'Sylph',
    className: 'Witch',
    shortName: 'Familiar Stealth + Perception',
    description:
      "Add a +1/2 bonus on Stealth checks and Perception checks made by the witch's familiar. If the Sylph ever replaces her familiar, the new familiar gains these bonus skill ranks.",
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_stealth',
          perLevelValue: { numerator: 1, denominator: 2 },
          recipient: 'familiar',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_perception',
          perLevelValue: { numerator: 1, denominator: 2 },
          recipient: 'familiar',
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'sylph-wizard',
    raceName: 'Sylph',
    className: 'Wizard',
    shortName: 'Air/Wood Elemental School Power CL',
    description:
      'Select one arcane school power from the air or wood elemental schools that the wizard can currently use. The wizard treats her class level as though it were +1/6 higher (to a maximum of +2) when determining the effects of that power.',
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'arcane_school_power',
      perLevelValue: { numerator: 1, denominator: 6 },
      requiresPickOne: true,
      pickOnePrompt: 'arcane school power (air or wood elemental school)',
      scopeDescription: 'maximum +2 class level bump',
    },
    source: ARG,
    ...META,
  },
];
