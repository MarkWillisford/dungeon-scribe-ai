// Strix favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-strix
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - Strix is an ARG race; uncited entries (all four Core classes listed) default to the
//     Advanced Race Guide (ARG).

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

export const STRIX_FAVORED_CLASS_BONUSES: FavoredClassBonusOption[] = [
  {
    id: 'strix-barbarian',
    raceName: 'Strix',
    className: 'Barbarian',
    shortName: 'Bonus Rage Round',
    description: "Add +1 to the barbarian's total number of rage rounds per day.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'rage_rounds',
      perLevelValue: { numerator: 1, denominator: 1 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'strix-fighter',
    raceName: 'Strix',
    className: 'Fighter',
    shortName: 'Hatred Attack Bonus',
    description: "Add +1/4 to the attack roll bonus from the strix's hatred racial trait.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'hatred_racial_trait',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription: 'attack roll bonus from the strix hatred racial trait',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'strix-monk',
    raceName: 'Strix',
    className: 'Monk',
    shortName: 'Ki Pool',
    description: "Add +1/4 point to the monk's ki pool.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'ki',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'strix-ranger',
    raceName: 'Strix',
    className: 'Ranger',
    shortName: "Hunter's Bond Duration",
    description:
      "Add +1/2 round to the duration of the bonus granted to the companions of the ranger using his hunter's bond ability.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'hunters_bond',
      bumpType: 'duration',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: "duration of the companion bonus from hunter's bond",
    },
    source: ARG,
    ...META,
  },
];
