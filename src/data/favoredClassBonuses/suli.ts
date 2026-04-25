// Suli favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-suli
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - no citation (ARG race) → Advanced Race Guide
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

export const SULI_FAVORED_CLASS_BONUSES: FavoredClassBonusOption[] = [
  {
    id: 'suli-magus',
    raceName: 'Suli',
    className: 'Magus',
    shortName: 'Arcane Pool',
    description: "Add +1/4 point to the magus's arcane pool.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'arcane_pool',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'suli-monk',
    raceName: 'Suli',
    className: 'Monk',
    shortName: 'Elemental Assault Damage',
    description: 'Add +1/2 point of damage to elemental assault.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'elemental_assault',
      bumpType: 'damage',
      perLevelValue: { numerator: 1, denominator: 2 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'suli-ranger',
    raceName: 'Suli',
    className: 'Ranger',
    shortName: 'Energy Resistance',
    description:
      'Add +1 to acid resistance, cold resistance, electricity resistance, or fire resistance.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'energy_resistance',
      perLevelValue: { numerator: 1, denominator: 1 },
      requiresPickOne: true,
      pickOnePrompt: 'energy type (acid, cold, electricity, or fire)',
    },
    source: ARG,
    ...META,
  },
];
