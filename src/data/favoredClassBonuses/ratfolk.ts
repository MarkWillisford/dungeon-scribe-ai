// Ratfolk favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/featured-races/arg-ratfolk
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - Ratfolk is an Advanced Race Guide (ARG) race; all entries with no citation default to ARG
//   - (PZO1129) → Advanced Class Guide
//   - (PZO1132) → Occult Adventures
//   - (PZO1134) → Ultimate Intrigue
//   - (PZO1135) → Adventurer's Guide
//
// The d20pfsrd page lists 20 Paizo-published favored class options (no parenthetical citations,
// so all default to ARG). A separate Jon Brazer Enterprises (JBE) subsection on the page is
// third-party and is intentionally excluded here (isOfficial/Paizo-only scope).

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

export const RATFOLK_FAVORED_CLASS_BONUSES: FavoredClassBonusOption[] = [
  {
    id: 'ratfolk-alchemist',
    raceName: 'Ratfolk',
    className: 'Alchemist',
    shortName: 'Fractional New Discovery',
    description: 'The alchemist gains +1/6 of a new discovery.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'alchemist_discovery',
      perLevelValue: { numerator: 1, denominator: 6 },
      scopeDescription: 'new discovery',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ratfolk-arcanist',
    raceName: 'Ratfolk',
    className: 'Arcanist',
    shortName: 'Consume Magic Items Uses',
    description:
      'Add 1/3 to the number of times per day the arcanist can use the consume magic items exploit.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'arcanist_exploit',
      perLevelValue: { numerator: 1, denominator: 3 },
      requiresPickOne: false,
      pickOneConstraint: 'consume magic items exploit only',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ratfolk-barbarian',
    raceName: 'Ratfolk',
    className: 'Barbarian',
    shortName: 'Swarming Flank Attack',
    description:
      "When raging, add +1/4 to the barbarian's swarming trait's flanking bonus on attack rolls.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'attack',
      perLevelValue: { numerator: 1, denominator: 4 },
      onlyWhenActive: 'rage',
      conditionDescription: "swarming trait's flanking bonus on attack rolls",
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ratfolk-bard',
    raceName: 'Ratfolk',
    className: 'Bard',
    shortName: 'Inspire Competence/Greatness',
    description:
      "Increase the bonus provided by the bard's inspire competence performance by 1/6, and add 1/6 to the number of allies the bard can affect with his inspire greatness performance.",
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'feature_numeric_bump',
          featureName: 'inspire_competence',
          bumpType: 'bonus',
          perLevelValue: { numerator: 1, denominator: 6 },
        },
        {
          type: 'feature_numeric_bump',
          featureName: 'inspire_greatness',
          bumpType: 'other',
          perLevelValue: { numerator: 1, denominator: 6 },
          conditionDescription: 'number of allies affected',
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ratfolk-druid',
    raceName: 'Ratfolk',
    className: 'Druid',
    shortName: 'Underground Wild Empathy',
    description:
      'Add a +1 bonus on wild empathy checks made to influence animals and magical beasts that live underground.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'wild_empathy',
      perLevelValue: { numerator: 1, denominator: 1 },
      inTerrain: ['underground'],
      conditionDescription: 'animals and magical beasts that live underground',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ratfolk-fighter',
    raceName: 'Ratfolk',
    className: 'Fighter',
    shortName: 'Bull Rush/Grapple Resist',
    description: "Add +1 to the Fighter's CMD when resisting a bull rush or grapple attempt.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmd',
      perLevelValue: { numerator: 1, denominator: 1 },
      vsCombatManeuver: ['bull_rush', 'grapple'],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ratfolk-gunslinger',
    raceName: 'Ratfolk',
    className: 'Gunslinger',
    shortName: 'Grit Initiative Bonus',
    description:
      'Add a +1/2 bonus on initiative checks when the gunslinger has at least 1 grit point.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'initiative',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'when the gunslinger has at least 1 grit point',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ratfolk-hunter',
    raceName: 'Ratfolk',
    className: 'Hunter',
    shortName: 'Companion Skill Rank',
    description:
      "Add 1 skill rank to the hunter's badger, dire rat, or riding rat animal companion.",
    mechanicalEffect: {
      type: 'unmapped',
      reason:
        "Adds a skill rank to the animal companion's sheet (conditional on companion species: badger, dire rat, or riding rat). Requires a companion-skill-rank transfer hook plus a species gate not yet modeled; Phase 3 wiring should add an `FCBEffectCompanionSkillRank` variant with a `speciesAllowlist` field.",
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ratfolk-inquisitor',
    raceName: 'Ratfolk',
    className: 'Inquisitor',
    shortName: 'Sense Motive + Dungeoneering ID',
    description:
      'Add 1/2 to Sense Motive checks and Knowledge (dungeoneering) checks to identify creatures.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_sense_motive',
          perLevelValue: { numerator: 1, denominator: 2 },
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_knowledge_dungeoneering',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'checks to identify creatures',
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ratfolk-investigator',
    raceName: 'Ratfolk',
    className: 'Investigator',
    shortName: 'Inspiration Skill Bonus',
    description: 'Add 1 to the bonus provided to a single skill (maximum +2) by inspiration.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'inspiration',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'single chosen skill; maximum +2 total from this FCB',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ratfolk-monk',
    raceName: 'Ratfolk',
    className: 'Monk',
    shortName: 'Stealth Move Speed',
    description:
      'Add +1 feet to the speed the monk can move while making a Stealth check without taking a penalty.',
    mechanicalEffect: {
      type: 'unmapped',
      reason:
        'Raises the speed cap at which the monk can move while using Stealth without incurring the standard -5 fast-move penalty. Not a standard movement-speed bonus and not a skill bonus; requires a dedicated "stealth move speed cap" hook not yet modeled.',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ratfolk-mesmerist',
    raceName: 'Ratfolk',
    className: 'Mesmerist',
    shortName: 'Hypnotic Stare Concentration',
    description:
      "Gain a +1 bonus on concentration checks to maintain the mesmerist's hypnotic stare.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'concentration_check',
      perLevelValue: { numerator: 1, denominator: 1 },
      conditionDescription: 'to maintain hypnotic stare',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ratfolk-occultist',
    raceName: 'Ratfolk',
    className: 'Occultist',
    shortName: 'Fractional Focus Power',
    description: 'Gain 1/6 of a new focus power.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'focus_power',
      perLevelValue: { numerator: 1, denominator: 6 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ratfolk-psychic',
    raceName: 'Ratfolk',
    className: 'Psychic',
    shortName: 'Fractional Phrenic Amplification',
    description: 'Gain 1/6 of a new phrenic amplification.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'phrenic_amplification',
      perLevelValue: { numerator: 1, denominator: 6 },
      scopeDescription: 'new phrenic amplification',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ratfolk-ranger',
    raceName: 'Ratfolk',
    className: 'Ranger',
    shortName: 'Adjacent Companion CMD',
    description: "Add +1 to an animal companion's CMD when adjacent to the ranger.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmd',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'animal_companion',
      conditionDescription: 'when adjacent to the ranger',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ratfolk-rogue',
    raceName: 'Ratfolk',
    className: 'Rogue',
    shortName: 'Escape Artist',
    description: 'Add a +1/2 bonus on Escape Artist checks.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_escape_artist',
      perLevelValue: { numerator: 1, denominator: 2 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ratfolk-spiritualist',
    raceName: 'Ratfolk',
    className: 'Spiritualist',
    shortName: 'Phantom HP + Skill Point',
    description: "Add 1/2 hit point and 1/2 skill point to the spiritualist's phantom.",
    mechanicalEffect: {
      type: 'unmapped',
      reason:
        'Adds fractional HP and fractional skill points to the phantom companion sheet. Neither the phantom-HP bump nor the phantom-skill-point transfer has a structured FCB variant yet; Phase 3 should add `FCBEffectCompanionHp` and `FCBEffectCompanionSkillPoint` variants (with FCBRecipient targeting).',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ratfolk-summoner',
    raceName: 'Ratfolk',
    className: 'Summoner',
    shortName: 'Eidolon Poison Save',
    description: "Add a +1 bonus on saving throws against poison made by the summoner's eidolon.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'saves',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'eidolon',
      conditionDescription: 'against poison',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ratfolk-swashbuckler',
    raceName: 'Ratfolk',
    className: 'Swashbuckler',
    shortName: 'Cover AC Bonus',
    description: 'Add 1/4 to the AC bonus provided by cover or improved cover.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'ac',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription: 'AC bonus provided by cover or improved cover',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'ratfolk-witch',
    raceName: 'Ratfolk',
    className: 'Witch',
    shortName: 'Hex Range Extension',
    description: 'Add +5 feet to the range of one hex with a range other than "touch."',
    mechanicalEffect: {
      type: 'unmapped',
      reason:
        'Extends the range of one chosen non-touch hex by +5 feet per level. Requires a hex-range-extension hook (with hex pick-one and "not touch" constraint) not yet modeled; Phase 3 wiring should add an `FCBEffectHexRangeBump` variant.',
    },
    source: ARG,
    ...META,
  },
];
