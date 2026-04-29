// Duergar favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-duergar
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - no citation, ARG race (Duergar) → Advanced Race Guide
//   - (PZO1129) → Advanced Class Guide
//   - (PZO1132) → Occult Adventures
//   - (PZO1134) → Ultimate Intrigue
//   - (PZO1135) → Adventurer's Guide
//   - (PCS:DR) → Pathfinder Campaign Setting: People of the Darklands
//
// NOTE: 3rd-party publisher FCB options (Jon Brazer Enterprises "JBE:SF:FCO") listed on the
// d20pfsrd page are intentionally excluded — this dataset is Paizo-official only.

import type { FavoredClassBonusEntry } from '@/types/favoredClassBonuses';
import type { GameDataSource } from '@/types/gameData';

const ARG: GameDataSource = {
  bookId: 'arg',
  bookName: 'Advanced Race Guide',
  publisher: 'Paizo',
};

const PEOPLE_OF_DARKLANDS: GameDataSource = {
  bookId: 'people-of-the-darklands',
  bookName: 'Pathfinder Campaign Setting: People of the Darklands',
  publisher: 'Paizo',
};

const META = {
  visibility: 'global' as const,
  isOfficial: true,
  rev: 1,
  verificationStatus: 'needs_review' as const,
};

export const DUERGAR_FAVORED_CLASS_BONUSES: FavoredClassBonusEntry[] = [
  {
    id: 'duergar-cleric',
    raceName: 'Duergar',
    className: 'Cleric',
    shortName: 'Magic Item Craft Check',
    description: 'Add a +1/2 bonus on checks made to craft magic items.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'craft_magic_items_check',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'checks made to craft magic items',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'duergar-fighter',
    raceName: 'Duergar',
    className: 'Fighter',
    shortName: 'Bull Rush/Trip Resist',
    description: "Add +1 to the Fighter's CMD when resisting a bull rush or trip attempt.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmd',
      perLevelValue: { numerator: 1, denominator: 1 },
      vsCombatManeuver: ['bull_rush', 'trip'],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'duergar-inquisitor',
    raceName: 'Duergar',
    className: 'Inquisitor',
    shortName: 'Extra Judgment Uses',
    description:
      'Add +1/6 to the number of times per day the inquisitor can use the judgment class feature.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'judgment',
      perLevelValue: { numerator: 1, denominator: 6 },
      requiresPickOne: false,
    },
    source: ARG,
    ...META,
  },
  {
    id: 'duergar-kineticist',
    raceName: 'Duergar',
    className: 'Kineticist',
    shortName: 'Fractional Extra Wild Talent (Earth)',
    description:
      'Add 1/5 of an Extra Wild Talent feat that must be spent on an earth element wild talent.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'wild_talent',
      perLevelValue: { numerator: 1, denominator: 5 },
      listConstraint: 'earth element wild talents only (granted via Extra Wild Talent feat)',
    },
    source: PEOPLE_OF_DARKLANDS,
    ...META,
  },
  {
    id: 'duergar-psychic',
    raceName: 'Duergar',
    className: 'Psychic',
    shortName: 'Discipline Power Wis Bump',
    description:
      'The psychic treats her Wisdom bonus as 1/3 point higher for the purpose of determining the number of uses or rounds per day of her discipline powers.',
    mechanicalEffect: {
      type: 'unmapped',
      reason:
        "Treats the psychic's Wisdom bonus as +1/3 higher only when computing uses/rounds per day of discipline powers. Pipeline does not yet model ability-score-modifier bumps scoped to a single feature's uses-per-day calculation; needs a dedicated FCB variant (e.g., feature_ability_mod_bump with featureName and scope fields) during Phase 2 wiring.",
    },
    source: PEOPLE_OF_DARKLANDS,
    ...META,
  },
];
