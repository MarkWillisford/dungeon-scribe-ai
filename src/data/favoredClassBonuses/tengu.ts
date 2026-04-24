// Tengu favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/featured-races/arg-tengu
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

export const TENGU_FAVORED_CLASS_BONUSES: FavoredClassBonusOption[] = [
  {
    id: 'tengu-barbarian',
    raceName: 'Tengu',
    className: 'Barbarian',
    shortName: 'Superstitious Rage Power',
    description: 'Add +1/3 to the bonus from the superstitious rage power.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'superstitious_rage_power',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 3 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'tengu-fighter',
    raceName: 'Tengu',
    className: 'Fighter',
    shortName: 'Grapple/Trip Resist',
    description: "Add +1 to the fighter's CMD when resisting a grapple or trip attempt.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmd',
      perLevelValue: { numerator: 1, denominator: 1 },
      vsCombatManeuver: ['grapple', 'trip'],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'tengu-monk',
    raceName: 'Tengu',
    className: 'Monk',
    shortName: 'Bonus Ki Point',
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
    id: 'tengu-oracle',
    raceName: 'Tengu',
    className: 'Oracle',
    shortName: 'Curse CL',
    description:
      "Add +1/2 to the oracle's level for the purpose of determining the effects of the oracle's curse ability.",
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'oracle_curse',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: false,
      scopeDescription: "determining the effects of the oracle's curse ability",
    },
    source: ARG,
    ...META,
  },
  {
    id: 'tengu-rogue',
    raceName: 'Tengu',
    className: 'Rogue',
    shortName: 'Swordtrained Crit Confirm',
    description:
      "Choose a weapon from those listed under the tengu's swordtrained ability. Add a +1/2 bonus on critical hit confirmation rolls with that weapon (maximum bonus +4). This bonus does not stack with Critical Focus.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'critical_confirm',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'weapon from tengu swordtrained list',
      conditionDescription: 'maximum bonus +4; does not stack with Critical Focus',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'tengu-sorcerer',
    raceName: 'Tengu',
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
  {
    id: 'tengu-witch',
    raceName: 'Tengu',
    className: 'Witch',
    shortName: 'Familiar Spell',
    description:
      "Add one spell from the witch spell list to the witch's familiar. This spell must be at least one level below the highest spell level she can cast.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_to_familiar',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'witch spell list',
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: ARG,
    ...META,
  },
];
