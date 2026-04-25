// Merfolk favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-merfolk
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - Merfolk is an ARG race. Entries tagged "(Standard)" on d20pfsrd have no explicit product
//     code and default to the Advanced Race Guide (ARG).
//   - Entries tagged "(PPC:BotS)" are from Pathfinder Player Companion: Blood of the Sea.

import type { FavoredClassBonusEntry } from '@/types/favoredClassBonuses';
import type { GameDataSource } from '@/types/gameData';

const ARG: GameDataSource = {
  bookId: 'arg',
  bookName: 'Advanced Race Guide',
  publisher: 'Paizo',
};

const BOTS: GameDataSource = {
  bookId: 'bots',
  bookName: 'Pathfinder Player Companion: Blood of the Sea',
  publisher: 'Paizo',
};

const META = {
  visibility: 'global' as const,
  isOfficial: true,
  rev: 1,
  verificationStatus: 'needs_review' as const,
};

export const MERFOLK_FAVORED_CLASS_BONUSES: FavoredClassBonusEntry[] = [
  {
    id: 'merfolk-bard',
    raceName: 'Merfolk',
    className: 'Bard',
    shortName: 'New Bardic Masterpiece',
    description:
      'The bard learns 1/6 of a new bardic masterpiece. (The bard selects the masterpiece once he has made this selection six times and must meet its prerequisites when it is selected.)',
    mechanicalEffect: {
      type: 'unmapped',
      reason:
        "Granular 'learn bardic masterpiece' has no matching optionType in FCBEffectLearnOption (closest are spell_known / feat / etc.). Extend FCBEffectLearnOption.optionType with 'bardic_masterpiece' during Phase 3 wiring, or add a dedicated variant; selection rule requires meeting masterpiece prerequisites at the 6th pick.",
    },
    source: BOTS,
    ...META,
  },
  {
    id: 'merfolk-druid',
    raceName: 'Merfolk',
    className: 'Druid',
    shortName: 'Animal Companion HP',
    description:
      "Add +1 hit point to the druid's animal companion. If the merfolk ever replaces her animal companion, the new animal companion gains these bonus hit points.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'hp',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'animal_companion',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'merfolk-mesmerist',
    raceName: 'Merfolk',
    className: 'Mesmerist',
    shortName: 'New Mesmerist Trick',
    description: 'The mesmerist learns 1/4 of a new trick.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'mesmerist_trick',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: BOTS,
    ...META,
  },
  {
    id: 'merfolk-monk',
    raceName: 'Merfolk',
    className: 'Monk',
    shortName: 'Grapple/Trip CMB',
    description: 'Add a +1/4 bonus on combat maneuver checks to grapple or trip.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmb',
      perLevelValue: { numerator: 1, denominator: 4 },
      vsCombatManeuver: ['grapple', 'trip'],
    },
    source: BOTS,
    ...META,
  },
  {
    id: 'merfolk-oracle',
    raceName: 'Merfolk',
    className: 'Oracle',
    shortName: 'Bonus Oracle Spell Known',
    description:
      'Add one spell known from the oracle spell list. This spell must be at least 1 level below the highest level spell the oracle can cast.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'oracle spell list',
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: BOTS,
    ...META,
  },
  {
    id: 'merfolk-ranger',
    raceName: 'Merfolk',
    className: 'Ranger',
    shortName: 'Animal Companion HP',
    description:
      "Add +1 hit point to the ranger's animal companion. If the ranger ever replaces his animal companion, the new animal companion gains these bonus hit points.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'hp',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'animal_companion',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'merfolk-skald',
    raceName: 'Merfolk',
    className: 'Skald',
    shortName: 'Bonus Skald Spell Known',
    description:
      "Add one spell from the skald's spell list to the skald's known spells. This spell must be at least 1 spell level below the highest level of spell the skald can cast.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'skald spell list',
      spellLevelConstraint: 'at least 1 level below highest castable',
    },
    source: BOTS,
    ...META,
  },
  {
    id: 'merfolk-sorcerer',
    raceName: 'Merfolk',
    className: 'Sorcerer',
    shortName: 'Water Spell Range CL',
    description:
      "Add +1/2 to the sorcerer's caster level when determining the range of any spells with the water descriptor.",
    mechanicalEffect: {
      type: 'caster_level',
      scopeType: 'full',
      perLevelValue: { numerator: 1, denominator: 2 },
      descriptorFilter: ['water'],
      conditionDescription: 'applies only to determining spell range',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'merfolk-witch',
    raceName: 'Merfolk',
    className: 'Witch',
    shortName: 'Patron Spell CL (max +3)',
    description:
      "Add 1 to the witch's caster level for one of her patron spells (to a maximum of +3 caster level to any one spell).",
    mechanicalEffect: {
      type: 'caster_level',
      scopeType: 'full',
      perLevelValue: { numerator: 1, denominator: 1 },
      requiresPickOne: true,
      pickOnePrompt: 'patron spell',
      conditionDescription: 'maximum +3 caster level to the chosen patron spell',
    },
    source: BOTS,
    ...META,
  },
];
