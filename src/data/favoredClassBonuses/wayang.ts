// Wayang favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-wayang
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - Wayang is an ARG (Advanced Race Guide) race; entries without a citation default to ARG.
//
// Note: d20pfsrd also lists 3rd-party favored class options from Jon Brazer Enterprises'
// Book of Heroic Races: Advanced Favored Class Options (JBE:SF:FCO). Those are non-Paizo and
// are excluded from this official seed set.

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

export const WAYANG_FAVORED_CLASS_BONUSES: FavoredClassBonusOption[] = [
  {
    id: 'wayang-bard',
    raceName: 'Wayang',
    className: 'Bard',
    shortName: 'Bonus Illusion Spell Known',
    description:
      "Add one spell known from the wizard's illusion school spell list. This spell must be at least one level below the highest spell level the bard can cast.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: "wizard's illusion school spell list",
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'wayang-oracle',
    raceName: 'Wayang',
    className: 'Oracle',
    shortName: 'Bonus Illusion Spell Known',
    description:
      "Add one spell known from the wizard's illusion school spell list. This spell must be at least one level below the highest spell level the oracle can cast.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: "wizard's illusion school spell list",
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'wayang-sorcerer',
    raceName: 'Wayang',
    className: 'Sorcerer',
    shortName: 'Shadow Subschool Spell Damage',
    description:
      'Add +1/2 point of damage to any illusion spells of the shadow subschool cast by the sorcerer.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'spell_damage',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'illusion spells of the shadow subschool',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'wayang-summoner',
    raceName: 'Wayang',
    className: 'Summoner',
    shortName: 'Eidolon Skill Rank',
    description: "Add +1 skill rank to the summoner's eidolon.",
    mechanicalEffect: {
      type: 'unmapped',
      reason:
        'Grants +1 skill rank to the eidolon per FCB pick. Pipeline needs an eidolon-skill-rank hook not yet modeled; the runtime must allocate the extra ranks on the eidolon sheet. Phase 3 wiring should add an FCBEffectEidolonSkillRank variant or extend learn_option with an eidolon recipient.',
    },
    source: ARG,
    ...META,
  },
];
