// Oread favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/featured-races/arg-oread
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - Oread is an ARG (Advanced Race Guide) race; entries without a citation default to ARG.

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

export const OREAD_FAVORED_CLASS_BONUSES: FavoredClassBonusOption[] = [
  {
    id: 'oread-bard',
    raceName: 'Oread',
    className: 'Bard',
    shortName: 'Bardic Performance Range',
    description:
      "Add +5 feet to the range of one of the bard's bardic performances (max +30 feet to any one performance).",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'bardic_performance',
      bumpType: 'other',
      perLevelValue: { numerator: 5, denominator: 1 },
      conditionDescription:
        'range of one chosen bardic performance, in feet; maximum +30 feet to any one performance',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'oread-cleric',
    raceName: 'Oread',
    className: 'Cleric',
    shortName: 'Knowledge (planes): Earth',
    description:
      'Add a +1/2 bonus on Knowledge (planes) checks relating to the Plane of Earth and creatures with the earth subtype.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_knowledge_planes',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'Plane of Earth and creatures with the earth subtype',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'oread-druid',
    raceName: 'Oread',
    className: 'Druid',
    shortName: 'Knowledge (nature): Plants/Burrowers',
    description:
      'Add a +1/2 bonus on Knowledge (nature) checks relating to plants and burrowing animals.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_knowledge_nature',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'plants and burrowing animals',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'oread-fighter',
    raceName: 'Oread',
    className: 'Fighter',
    shortName: 'Bull Rush/Drag Resist',
    description: "Add +1 to the Fighter's CMD when resisting a bull rush or drag attempt.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmd',
      perLevelValue: { numerator: 1, denominator: 1 },
      vsCombatManeuver: ['bull_rush', 'drag'],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'oread-monk',
    raceName: 'Oread',
    className: 'Monk',
    shortName: 'Unarmed Crit Confirm',
    description:
      'Add +1/3 on critical hit confirmation rolls made with unarmed strikes (maximum bonus of +5).',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'critical_confirmation',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription: 'unarmed strikes only; maximum bonus +5',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'oread-paladin',
    raceName: 'Oread',
    className: 'Paladin',
    shortName: 'Aura of Courage/Resolve',
    description:
      'Add +1/4 to the bonus the paladin grants her allies with her aura of courage and aura of resolve special abilities.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'feature_numeric_bump',
          featureName: 'aura_of_courage',
          bumpType: 'bonus',
          perLevelValue: { numerator: 1, denominator: 4 },
          conditionDescription: "bonus granted to allies by the paladin's aura of courage",
        },
        {
          type: 'feature_numeric_bump',
          featureName: 'aura_of_resolve',
          bumpType: 'bonus',
          perLevelValue: { numerator: 1, denominator: 4 },
          conditionDescription: "bonus granted to allies by the paladin's aura of resolve",
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'oread-ranger',
    raceName: 'Oread',
    className: 'Ranger',
    shortName: 'Animal Companion Natural Armor',
    description: "Add +1/4 to the natural armor bonus of the ranger's animal companion.",
    mechanicalEffect: {
      type: 'natural_armor',
      target: 'animal_companion',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'oread-summoner',
    raceName: 'Oread',
    className: 'Summoner',
    shortName: 'Eidolon Natural Armor',
    description: "Add a +1/4 natural armor bonus to the AC of the summoner's eidolon.",
    mechanicalEffect: {
      type: 'natural_armor',
      target: 'eidolon',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: ARG,
    ...META,
  },
];
