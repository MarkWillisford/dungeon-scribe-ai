// Kitsune favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-kitsune
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - Kitsune is an ARG race; entries with no explicit citation default to Advanced Race Guide.
//   - (PZO1129) → Advanced Class Guide
//   - (PZO1132) → Occult Adventures
//   - (PZO1134) → Ultimate Intrigue
//   - (PZO1135) → Adventurer's Guide
//
// The d20pfsrd Kitsune page lists an "All" universal FCB ("Gain 1/6 of a new Magical Tail feat.
// Any kitsune character can choose this bonus upon gaining a level in her favored class."), in
// addition to 14 class-specific alternates. The universal option is modeled here as a per-class
// entry (id suffix `-magical-tail`) for every canonical PF1e class so that a Kitsune of any
// class can select it. Classes that also have a class-specific alternate therefore have two
// entries (multi-entry pattern, analogous to `dwarf-paladin-concentration`/`-creature-knowledge`).

import type { FavoredClassBonusEntry } from '@/types/favoredClassBonuses';
import type { GameDataSource } from '@/types/gameData';

const ARG: GameDataSource = {
  bookId: 'arg',
  bookName: 'Advanced Race Guide',
  publisher: 'Paizo',
};

const ACG: GameDataSource = {
  bookId: 'acg',
  bookName: 'Advanced Class Guide',
  publisher: 'Paizo',
};

const META = {
  visibility: 'global' as const,
  isOfficial: true,
  rev: 1,
  verificationStatus: 'needs_review' as const,
};

// The universal Magical Tail alternate. Applies identically regardless of class — only
// the `id` and `className` change per entry. Text is verbatim from the d20pfsrd "All" row.
const MAGICAL_TAIL_DESCRIPTION =
  'Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.';

const MAGICAL_TAIL_CLASSES = [
  'Alchemist',
  'Antipaladin',
  'Arcanist',
  'Barbarian',
  'Bard',
  'Bloodrager',
  'Brawler',
  'Cavalier',
  'Cleric',
  'Druid',
  'Fighter',
  'Gunslinger',
  'Hunter',
  'Inquisitor',
  'Investigator',
  'Magus',
  'Monk',
  'Ninja',
  'Oracle',
  'Paladin',
  'Ranger',
  'Rogue',
  'Samurai',
  'Shaman',
  'Skald',
  'Slayer',
  'Sorcerer',
  'Summoner',
  'Swashbuckler',
  'Warpriest',
  'Witch',
  'Wizard',
  'Medium',
  'Mesmerist',
  'Occultist',
  'Psychic',
  'Spiritualist',
  'Kineticist',
] as const;

const magicalTailEntries: FavoredClassBonusEntry[] = MAGICAL_TAIL_CLASSES.map((className) => ({
  id: `kitsune-${className.toLowerCase()}-magical-tail`,
  raceName: 'Kitsune',
  className,
  shortName: 'Magical Tail Feat',
  description: MAGICAL_TAIL_DESCRIPTION,
  mechanicalEffect: {
    type: 'learn_option',
    optionType: 'feat',
    perLevelValue: { numerator: 1, denominator: 6 },
    listConstraint: 'Magical Tail feat chain only',
  },
  source: ARG,
  ...META,
}));

export const KITSUNE_FAVORED_CLASS_BONUSES: FavoredClassBonusEntry[] = [
  ...magicalTailEntries,
  {
    id: 'kitsune-arcanist',
    raceName: 'Kitsune',
    className: 'Arcanist',
    shortName: 'Enchantment Duration CL',
    description:
      'When casting arcanist enchantment spells, add 1/3 to the effective caster level, but only for the purpose of determining duration.',
    mechanicalEffect: {
      type: 'caster_level',
      scopeType: 'duration_only',
      schoolFilter: 'enchantment',
      targetClass: 'Arcanist',
      perLevelValue: { numerator: 1, denominator: 3 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kitsune-bard',
    raceName: 'Kitsune',
    className: 'Bard',
    shortName: 'Bluff Lie / Diplomacy Gather Info',
    description:
      'Add a +½ bonus on Bluff checks to lie and a +½ bonus on Diplomacy checks to gather information.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_bluff',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'checks to lie',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_diplomacy',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'checks to gather information',
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kitsune-brawler',
    raceName: 'Kitsune',
    className: 'Brawler',
    shortName: 'Martial Flexibility Uses',
    description:
      'Increase the number of times per day the brawler can use martial flexibility by 1/4.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'martial_flexibility',
      perLevelValue: { numerator: 1, denominator: 4 },
      requiresPickOne: false,
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kitsune-cavalier',
    raceName: 'Kitsune',
    className: 'Cavalier',
    shortName: 'Banner Bonus',
    description: "Add 1/4 to the cavalier's banner bonus.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'banner',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kitsune-druid',
    raceName: 'Kitsune',
    className: 'Druid',
    shortName: 'Diplomacy/Intimidate Attitude',
    description:
      "Add a +½ bonus on Diplomacy and Intimidate checks to change a creature's attitude.",
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_diplomacy',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: "checks to change a creature's attitude",
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_intimidate',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: "checks to change a creature's attitude",
        },
      ],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kitsune-fighter',
    raceName: 'Kitsune',
    className: 'Fighter',
    shortName: 'Flanking/Flat-Footed Damage',
    description:
      'Add 1/3 to damage rolls the fighter makes with weapon attacks against an opponent that he is flanking or that is denied its Dexterity bonus to AC.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'weapon_damage',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription:
        'against an opponent the fighter is flanking or that is denied its Dexterity bonus to AC',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kitsune-mesmerist',
    raceName: 'Kitsune',
    className: 'Mesmerist',
    shortName: 'Mesmerist Tricks Uses',
    description: 'Increase the number of mesmerist tricks the mesmerist can use per day by 1/3.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'mesmerist_trick',
      perLevelValue: { numerator: 1, denominator: 3 },
      requiresPickOne: false,
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kitsune-oracle',
    raceName: 'Kitsune',
    className: 'Oracle',
    shortName: 'Weapon Proficiency Chip',
    description:
      'Reduce the penalty for not being proficient for one weapon by 1. When the nonproficiency penalty for a weapon becomes 0 because of this ability, the oracle is treated as having the appropriate Martial or Exotic Weapon Proficiency feat for that weapon.',
    mechanicalEffect: {
      type: 'weapon_proficiency_chip',
      perLevelValue: { numerator: 1, denominator: 1 },
      requiresPickOne: true,
      unlockProficiencyAtZero: true,
    },
    source: ACG,
    ...META,
  },
  {
    id: 'kitsune-rogue',
    raceName: 'Kitsune',
    className: 'Rogue',
    shortName: 'Bonus Rogue Talent',
    description: 'The rogue gains +1/6 of a new rogue talent.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'rogue_talent',
      perLevelValue: { numerator: 1, denominator: 6 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kitsune-shaman',
    raceName: 'Kitsune',
    className: 'Shaman',
    shortName: 'Enchantment Spell Known',
    description:
      "Add one enchantment spell from the sorcerer/wizard spell list that isn't on the shaman spell list to the list of spells the shaman knows. This spell must be at least 1 level below the highest spell level the shaman can cast.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'spell_known',
      perLevelValue: { numerator: 1, denominator: 1 },
      spellLevelConstraint: 'at least 1 level below highest castable',
      listConstraint: 'sorcerer/wizard enchantment spell not on shaman list',
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kitsune-sorcerer',
    raceName: 'Kitsune',
    className: 'Sorcerer',
    shortName: 'Enchantment Spell DC',
    description: 'Add +¼ to the DC of enchantment spells.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'spell_dc',
      perLevelValue: { numerator: 1, denominator: 4 },
      withDescriptor: ['enchantment'],
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kitsune-swashbuckler',
    raceName: 'Kitsune',
    className: 'Swashbuckler',
    shortName: 'Panache Pool',
    description: "Increase the total number of points in the swashbuckler's panache pool by 1/4.",
    mechanicalEffect: {
      type: 'resource_pool',
      resourceId: 'panache',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: ARG,
    ...META,
  },
  {
    id: 'kitsune-vigilante',
    raceName: 'Kitsune',
    className: 'Vigilante',
    shortName: 'Seamless Guise Disguise',
    description: 'Add 1/2 to the Disguise bonus provided by seamless guise.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'seamless_guise',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'Disguise bonus only',
    },
    source: ARG,
    ...META,
  },
];
