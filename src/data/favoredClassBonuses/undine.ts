// Undine favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/featured-races/arg-undine
// Undine is an ARG race; entries without a citation default to Advanced Race Guide (bookId 'arg').
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - no citation → Advanced Race Guide (ARG)
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

export const UNDINE_FAVORED_CLASS_BONUSES: FavoredClassBonusEntry[] = [
  {
    id: 'undine-bard',
    raceName: 'Undine',
    className: 'Bard',
    shortName: 'Countersong vs Aquatic',
    description:
      'Add a +1 bonus on Perform checks to use the countersong bardic performance against creatures with the aquatic or water subtypes.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_perform',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription:
        'countersong bardic performance against creatures with the aquatic or water subtypes',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'undine-cleric',
    raceName: 'Undine',
    className: 'Cleric',
    shortName: 'SR Check vs Aquatic',
    description:
      'Add a +1 bonus on caster level checks to overcome the spell resistance of creatures with the aquatic or water subtype.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'caster_level_check_sr',
      perLevelValue: { numerator: 1, denominator: 1 },
      vsCreatureType: ['aquatic', 'water'],
      conditionDescription:
        'caster level checks to overcome spell resistance of creatures with the aquatic or water subtype',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'undine-druid',
    raceName: 'Undine',
    className: 'Druid',
    shortName: 'Aquatic Wild Empathy',
    description:
      'Add a +1 bonus on wild empathy checks to influence animals and magical beasts with the aquatic subtype.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'wild_empathy',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'animals and magical beasts with the aquatic subtype',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'undine-monk',
    raceName: 'Undine',
    className: 'Monk',
    shortName: 'Grapple CMD + Stunning Attacks',
    description:
      "Add +1 to the monk's CMD when resisting a grapple and +1/3 to the number of stunning attacks he can attempt per day.",
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'cmd',
          perLevelValue: { numerator: 1, denominator: 1 },
          vsCombatManeuver: ['grapple'],
          conditionDescription: 'when resisting a grapple',
        },
        {
          type: 'feature_uses_per_day',
          featureName: 'stunning_fist',
          perLevelValue: { numerator: 1, denominator: 3 },
          requiresPickOne: false,
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'undine-sorcerer',
    raceName: 'Undine',
    className: 'Sorcerer',
    shortName: 'Underwater CL Check',
    description: 'Add a +1 bonus on caster level checks to cast spells underwater.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'caster_level_check',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'caster level checks to cast spells underwater',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'undine-summoner',
    raceName: 'Undine',
    className: 'Summoner',
    shortName: 'Aquatic Eidolon Life Link Range',
    description:
      "If the summoner's eidolon has an aquatic base form, add +5 feet to the range of the summoner's life link ability.",
    mechanicalEffect: {
      type: 'unmapped',
      reason:
        "Adds +5 feet per level to the range of the summoner's life link ability, conditional on the eidolon having an aquatic base form. No existing variant models a range extension on a class feature; Phase 3 wiring should add an `FCBEffectFeatureRangeBump` variant or extend feature_numeric_bump with a distance unit and conditional eidolon-form gate.",
    },
    source: ARG,
    ...META,
  },
  {
    id: 'undine-wizard',
    raceName: 'Undine',
    className: 'Wizard',
    shortName: 'Water Spell to Spellbook',
    description:
      "Add one spell from the cleric, druid, or wizard spell list with the water descriptor to the wizard's spellbook.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_in_spellbook',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'cleric, druid, or wizard spell list with the water descriptor',
    },
    source: ARG,
    ...META,
  },
];
