// Drow favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/featured-races/arg-drow
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - no citation → Advanced Race Guide (ARG)
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

export const DROW_FAVORED_CLASS_BONUSES: FavoredClassBonusOption[] = [
  {
    id: 'drow-alchemist',
    raceName: 'Drow',
    className: 'Alchemist',
    shortName: 'Mutagen Duration',
    description: "Add +10 minutes to the duration of the alchemist's mutagens.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'mutagen',
      bumpType: 'duration',
      perLevelValue: { numerator: 10, denominator: 1 },
      conditionDescription: 'duration measured in minutes',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'drow-antipaladin',
    raceName: 'Drow',
    className: 'Antipaladin',
    shortName: 'Extra Cruelties',
    description: 'The antipaladin adds +1/4 to the number of cruelties he can inflict.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'cruelty',
      bumpType: 'other',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription: 'number of cruelties known',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'drow-cleric',
    raceName: 'Drow',
    className: 'Cleric',
    shortName: 'Extra Domain Power Uses',
    description:
      "Select one domain power granted at 1st level that is normally usable a number of times per day equal to 3 + the cleric's Wisdom modifier. The cleric adds +1/2 to the number of uses per day of that domain power.",
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'domain_power',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'domain power',
      pickOneConstraint: '1st-level domain power normally usable 3 + Wis mod/day',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'drow-fighter',
    raceName: 'Drow',
    className: 'Fighter',
    shortName: 'Disarm/Reposition CMB',
    description:
      "Choose the disarm or reposition combat maneuver. Add +1/3 to the Fighter's CMB when attempting this maneuver (maximum bonus of +4).",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmb',
      perLevelValue: { numerator: 1, denominator: 3 },
      requiresPickOne: true,
      pickOnePrompt: 'combat maneuver (disarm or reposition)',
      vsCombatManeuver: ['disarm', 'reposition'],
      conditionDescription: 'maximum bonus of +4',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'drow-rogue',
    raceName: 'Drow',
    className: 'Rogue',
    shortName: 'Bluff Feint/Secret Msg',
    description: 'Add a +1/2 bonus on Bluff checks to feint and pass secret messages.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_bluff',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'checks to feint and pass secret messages',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'drow-sorcerer',
    raceName: 'Drow',
    className: 'Sorcerer',
    shortName: 'Curse/Evil/Pain Spell Known',
    description:
      'Add one spell known from the sorcerer spell list. This spell must have the curse, evil, or pain descriptor, and be at least one level below the highest spell level the sorcerer can cast.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      spellLevelConstraint: 'at least 1 level below highest castable',
      listConstraint: 'sorcerer spell list; must have curse, evil, or pain descriptor',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'drow-wizard',
    raceName: 'Drow',
    className: 'Wizard',
    shortName: 'Extra Arcane School Power Uses',
    description:
      "Select one arcane school power at 1st level that is normally usable a number of times per day equal to 3 + the wizard's Intelligence modifier. The wizard adds +1/2 to the number of uses per day of that arcane school power.",
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'arcane_school_power',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'arcane school power',
      pickOneConstraint: '1st-level arcane school power normally usable 3 + Int mod/day',
    },
    source: ARG,
    ...META,
  },
];
