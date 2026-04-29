// Samsaran favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-samsaran
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - Samsaran is an ARG (Advanced Race Guide) race; entries without a citation default to ARG.
//
// Note: d20pfsrd also lists 3rd-party favored class options from Jon Brazer Enterprises'
// Book of Heroic Races: Advanced Favored Class Options. Those are non-Paizo and are excluded
// from this official seed set.

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

export const SAMSARAN_FAVORED_CLASS_BONUSES: FavoredClassBonusEntry[] = [
  {
    id: 'samsaran-monk',
    raceName: 'Samsaran',
    className: 'Monk',
    shortName: 'Death Attack Save Bonus',
    description: "Add a +1/2 bonus on the monk's saving throws to resist death attacks.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'saves',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'saving throws to resist death attacks',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'samsaran-oracle',
    raceName: 'Samsaran',
    className: 'Oracle',
    shortName: 'Bonus Spell Known',
    description:
      'Add one spell known from the oracle spell list. This spell must be at least one level below the highest spell level the oracle can cast.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'oracle spell list',
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'samsaran-rogue',
    raceName: 'Samsaran',
    className: 'Rogue',
    shortName: 'Rogue Talent Fraction',
    description: 'The rogue gains 1/6 of a new rogue talent.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'rogue_talent',
      perLevelValue: { numerator: 1, denominator: 6 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'samsaran-wizard',
    raceName: 'Samsaran',
    className: 'Wizard',
    shortName: 'Bonus Spell in Spellbook',
    description:
      "Add one spell from the wizard spell list to the wizard's spellbook. This spell must be at least one level below the highest spell level the wizard can cast.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_in_spellbook',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'wizard spell list',
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: ARG,
    ...META,
  },
];
