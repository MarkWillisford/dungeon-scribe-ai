// Vishkanya favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-vishkanyas/
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - Vishkanya is an ARG race; entries without explicit citation default to ARG.
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

export const VISHKANYA_FAVORED_CLASS_BONUSES: FavoredClassBonusOption[] = [
  {
    id: 'vishkanya-bard',
    raceName: 'Vishkanya',
    className: 'Bard',
    shortName: 'Bonus Bardic Performance Round',
    description: "Add +1 to the bard's total number of bardic performance rounds per day.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'bardic_performance_rounds',
      perLevelValue: { numerator: 1, denominator: 1 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'vishkanya-rogue',
    raceName: 'Vishkanya',
    className: 'Rogue',
    shortName: 'Grapple/Reposition CMD',
    description: "Add +1 to the rogue's CMD when resisting a grapple or reposition attempt.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmd',
      perLevelValue: { numerator: 1, denominator: 1 },
      vsCombatManeuver: ['grapple', 'reposition'],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'vishkanya-sorcerer',
    raceName: 'Vishkanya',
    className: 'Sorcerer',
    shortName: 'Extra Bloodline Power Uses',
    description:
      "Select one bloodline power at 1st level that is normally usable a number of times per day equal to 3 + the sorcerer's Charisma modifier. The sorcerer adds +1/2 to the number of uses per day of that bloodline power.",
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'bloodline_power',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'bloodline power',
      pickOneConstraint: '1st-level bloodline power normally usable 3 + Cha mod/day',
    },
    source: ARG,
    ...META,
  },
];
