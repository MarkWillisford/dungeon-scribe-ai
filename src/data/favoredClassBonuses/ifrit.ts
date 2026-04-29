// Ifrit favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/featured-races/arg-ifrit
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - no citation (ARG race) → Advanced Race Guide
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

const ACG: GameDataSource = {
  bookId: 'acg',
  bookName: 'Advanced Class Guide',
  publisher: 'Paizo',
};

const OA: GameDataSource = {
  bookId: 'oa',
  bookName: 'Occult Adventures',
  publisher: 'Paizo',
};

const UI: GameDataSource = {
  bookId: 'ui',
  bookName: 'Ultimate Intrigue',
  publisher: 'Paizo',
};

const ADV_GUIDE: GameDataSource = {
  bookId: 'adventurers-guide',
  bookName: "Adventurer's Guide",
  publisher: 'Paizo',
};

// Unused source consts retained for symmetry with other race files and future additions.
void ACG;
void OA;
void UI;
void ADV_GUIDE;

const META = {
  visibility: 'global' as const,
  isOfficial: true,
  rev: 1,
  verificationStatus: 'needs_review' as const,
};

export const IFRIT_FAVORED_CLASS_BONUSES: FavoredClassBonusEntry[] = [
  {
    id: 'ifrit-alchemist',
    raceName: 'Ifrit',
    className: 'Alchemist',
    shortName: 'Bomb Damage',
    description: "Add +1/2 to the alchemist's bomb damage.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'alchemist_bomb_damage',
      perLevelValue: { numerator: 1, denominator: 2 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ifrit-bard',
    raceName: 'Ifrit',
    className: 'Bard',
    shortName: 'Fascinate Targets',
    description:
      'Add +1/6 to the number of people the bard can affect with the fascinate bardic performance.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'fascinate',
      bumpType: 'other',
      perLevelValue: { numerator: 1, denominator: 6 },
      conditionDescription: 'number of people affected',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ifrit-cleric',
    raceName: 'Ifrit',
    className: 'Cleric',
    shortName: 'Plane of Fire Knowledge',
    description:
      'Add a +1/2 bonus on Knowledge (planes) checks relating to the Plane of Fire and creatures with the fire subtype.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_knowledge_planes',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription:
        'checks relating to the Plane of Fire and creatures with the fire subtype',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ifrit-gunslinger',
    raceName: 'Ifrit',
    className: 'Gunslinger',
    shortName: 'Gunslinger Initiative Deed',
    description:
      'Add +1/2 to the bonus on initiative checks the gunslinger makes while using her gunslinger initiative deed.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'gunslinger_initiative_deed',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'initiative checks while using gunslinger initiative deed',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ifrit-inquisitor',
    raceName: 'Ifrit',
    className: 'Inquisitor',
    shortName: 'Fire Intimidate + Planes Knowledge',
    description:
      'Add a +1/2 bonus on Intimidate checks made against creatures with the fire subtype and a +1/2 bonus on Knowledge (planes) checks relating to the Plane of Fire.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_intimidate',
          perLevelValue: { numerator: 1, denominator: 2 },
          vsCreatureType: ['fire_subtype'],
          conditionDescription: 'against creatures with the fire subtype',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_knowledge_planes',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'checks relating to the Plane of Fire',
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ifrit-oracle',
    raceName: 'Ifrit',
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
    id: 'ifrit-rogue',
    raceName: 'Ifrit',
    className: 'Rogue',
    shortName: 'Acrobatics Jump + Demoralize',
    description:
      'Add a +1/2 bonus on Acrobatics checks to jump and a +1/2 bonus on Intimidate checks to demoralize enemies.',
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
          target: 'skill_intimidate',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'checks to demoralize enemies',
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ifrit-sorcerer',
    raceName: 'Ifrit',
    className: 'Sorcerer',
    shortName: 'Fire/Efreeti Bloodline Power CL',
    description:
      'Choose a bloodline power from the elemental (fire) bloodline or the efreeti bloodline that the sorcerer can use. The sorcerer treats her class level as though it were +1/6 higher (to a maximum of +4) when determining the effects of that power.',
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'bloodline_power',
      perLevelValue: { numerator: 1, denominator: 6 },
      requiresPickOne: true,
      pickOnePrompt: 'bloodline power (elemental fire or efreeti)',
      scopeDescription: 'maximum +4 class level bump',
    },
    source: ARG,
    ...META,
  },
];
