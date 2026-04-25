// Halfling favored class bonus options.
//
// Source: https://www.d20pfsrd.com/races/core-races/halfling/
// Verbatim rule text preserved in `description`. Source attribution follows the Paizo product
// code convention (see plans/favored-class-bonuses.md §"Source attribution"):
//   - no citation, Core classes → Core Rulebook
//   - no citation, APG classes (Alchemist, Cavalier, Inquisitor, Oracle, Summoner, Witch) → APG
//   - no citation, UM classes (Magus) → Ultimate Magic
//   - no citation, UC classes (Gunslinger) → Ultimate Combat
//   - (PZO1129) → Advanced Class Guide
//   - (PZO1132) → Occult Adventures
//   - (PZO1134) → Ultimate Intrigue
//   - (PZO1135) → Adventurer's Guide

import type { FavoredClassBonusEntry } from '@/types/favoredClassBonuses';
import type { GameDataSource } from '@/types/gameData';

const CRB: GameDataSource = {
  bookId: 'crb',
  bookName: 'Core Rulebook',
  publisher: 'Paizo',
};

const APG: GameDataSource = {
  bookId: 'apg',
  bookName: "Advanced Player's Guide",
  publisher: 'Paizo',
};

const UM: GameDataSource = {
  bookId: 'um',
  bookName: 'Ultimate Magic',
  publisher: 'Paizo',
};

const UC: GameDataSource = {
  bookId: 'uc',
  bookName: 'Ultimate Combat',
  publisher: 'Paizo',
};

const ACG: GameDataSource = {
  bookId: 'acg',
  bookName: 'Advanced Class Guide',
  publisher: 'Paizo',
};

const OA: GameDataSource = {
  bookId: 'oa',
  bookName: 'Occult Adventures',
  publisher: 'Paizo',
};

const UI: GameDataSource = {
  bookId: 'ui',
  bookName: 'Ultimate Intrigue',
  publisher: 'Paizo',
};

const ADV_GUIDE: GameDataSource = {
  bookId: 'adventurers-guide',
  bookName: "Adventurer's Guide",
  publisher: 'Paizo',
};

const META = {
  visibility: 'global' as const,
  isOfficial: true,
  rev: 1,
  verificationStatus: 'needs_review' as const,
};

export const HALFLING_FAVORED_CLASS_BONUSES: FavoredClassBonusEntry[] = [
  {
    id: 'halfling-alchemist',
    raceName: 'Halfling',
    className: 'Alchemist',
    shortName: 'Bonus Extract Formula',
    description:
      "Add one extract formula from the alchemist's list to the alchemist's formula book. This formula must be at least one level below the highest formula level the alchemist can create.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'extract_formula',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'alchemist formula list',
      spellLevelConstraint:
        'at least one level below highest formula level the alchemist can create',
    },
    source: APG,
    ...META,
  },
  {
    id: 'halfling-arcanist',
    raceName: 'Halfling',
    className: 'Arcanist',
    shortName: 'New Arcanist Exploit',
    description: 'Gain 1/6 of a new arcanist exploit.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'arcanist_exploit',
      perLevelValue: { numerator: 1, denominator: 6 },
    },
    source: ACG,
    ...META,
  },
  {
    id: 'halfling-barbarian-trap-sense',
    raceName: 'Halfling',
    className: 'Barbarian',
    shortName: 'Trap Sense / Surprise Accuracy',
    description:
      'Add a +1/2 bonus to trap sense or +1/3 to the bonus from the surprise accuracy rage power.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'feature_numeric_bump',
          featureName: 'trap_sense',
          bumpType: 'bonus',
          perLevelValue: { numerator: 1, denominator: 2 },
        },
        {
          type: 'feature_numeric_bump',
          featureName: 'surprise_accuracy_rage_power',
          bumpType: 'bonus',
          perLevelValue: { numerator: 1, denominator: 3 },
        },
      ],
    },
    source: CRB,
    ...META,
  },
  {
    id: 'halfling-barbarian-thrown-range',
    raceName: 'Halfling',
    className: 'Barbarian',
    shortName: 'Thrown Weapon Range',
    description:
      'Add 1 foot to the range increment of thrown weapons the barbarian wields. This option has no effect unless the barbarian has selected it 5 times (or another increment of 5).',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'thrown_weapon_range_increment',
      perLevelValue: { numerator: 1, denominator: 1 },
      applyInIncrementsOf: 5,
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'halfling-bard',
    raceName: 'Halfling',
    className: 'Bard',
    shortName: 'Secret Messages / Info / Child Disguise',
    description:
      '+1/2 on Bluff checks to pass secret messages, +1/2 on Diplomacy checks to gather information, and +1/2 on Disguise checks to appear as an elven, half-elven, or human child.',
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_bluff',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'to pass secret messages',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_diplomacy',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'to gather information',
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'skill_disguise',
          perLevelValue: { numerator: 1, denominator: 2 },
          conditionDescription: 'to appear as an elven, half-elven, or human child',
        },
      ],
    },
    source: CRB,
    ...META,
  },
  {
    id: 'halfling-bloodrager',
    raceName: 'Halfling',
    className: 'Bloodrager',
    shortName: 'Dodge AC vs Larger Foes',
    description:
      'Gain a +1/4 dodge bonus to AC while bloodraging against creatures at least one size category larger than the bloodrager.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'dodge',
      target: 'ac',
      perLevelValue: { numerator: 1, denominator: 4 },
      onlyWhenActive: 'bloodrage',
      conditionDescription:
        'against creatures at least one size category larger than the bloodrager',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'halfling-brawler',
    raceName: 'Halfling',
    className: 'Brawler',
    shortName: 'CMD vs Grapple/Overrun',
    description:
      "Gain a +1 bonus to the brawler's CMD when resisting a grapple or overrun combat maneuver.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmd',
      perLevelValue: { numerator: 1, denominator: 1 },
      vsCombatManeuver: ['grapple', 'overrun'],
    },
    source: ACG,
    ...META,
  },
  {
    id: 'halfling-cavalier-challenge-aoo',
    raceName: 'Halfling',
    className: 'Cavalier',
    shortName: 'Challenge AoO Damage',
    description:
      "Add +1/2 to the cavalier's effective class level for the purposes of determining the damage he deals when making an attack of opportunity against a challenged foe.",
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'challenge',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: false,
      scopeDescription:
        'determining damage dealt when making an attack of opportunity against a challenged foe',
    },
    source: APG,
    ...META,
  },
  {
    id: 'halfling-cavalier-mount-fear-saves',
    raceName: 'Halfling',
    className: 'Cavalier',
    shortName: 'Mount Fear Save Bonus',
    description:
      "The cavalier's mount gains a +1/2 bonus on saving throws against fear effects. If the cavalier ever replaces his mount, the new mount gains this bonus.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'saves',
      perLevelValue: { numerator: 1, denominator: 2 },
      recipient: 'bonded_creature',
      conditionDescription: "cavalier's mount; saves against fear effects",
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'halfling-cleric',
    raceName: 'Halfling',
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
    source: CRB,
    ...META,
  },
  {
    id: 'halfling-druid',
    raceName: 'Halfling',
    className: 'Druid',
    shortName: 'Animal Companion Save Luck',
    description: "Add a +1/4 luck bonus on the saving throws of the druid's animal companion.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'luck',
      target: 'saves',
      perLevelValue: { numerator: 1, denominator: 4 },
      recipient: 'animal_companion',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'halfling-fighter',
    raceName: 'Halfling',
    className: 'Fighter',
    shortName: 'Trip/Grapple Resist',
    description: "Add +1 to the Fighter's CMD when resisting a trip or grapple attempt.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmd',
      perLevelValue: { numerator: 1, denominator: 1 },
      vsCombatManeuver: ['trip', 'grapple'],
    },
    source: CRB,
    ...META,
  },
  {
    id: 'halfling-gunslinger',
    raceName: 'Halfling',
    className: 'Gunslinger',
    shortName: 'Nimble / Dodge Deed AC',
    description:
      "Add +1/4 to the dodge bonus to AC granted by the nimble class feature (maximum +2) or +1/4 to the AC bonus gained when using the gunslinger's dodge deed.",
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'feature_numeric_bump',
          featureName: 'nimble',
          bumpType: 'bonus',
          perLevelValue: { numerator: 1, denominator: 4 },
          conditionDescription: 'maximum +2',
        },
        {
          type: 'feature_numeric_bump',
          featureName: 'gunslinger_dodge_deed',
          bumpType: 'bonus',
          perLevelValue: { numerator: 1, denominator: 4 },
        },
      ],
    },
    source: UC,
    ...META,
  },
  {
    id: 'halfling-hunter',
    raceName: 'Halfling',
    className: 'Hunter',
    shortName: 'Animal Companion Save Luck',
    description:
      "The hunter's animal companion gains a +1/4 luck bonus on saving throws. If the hunter replaces her animal companion, the new animal companion gains this bonus.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'luck',
      target: 'saves',
      perLevelValue: { numerator: 1, denominator: 4 },
      recipient: 'animal_companion',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'halfling-inquisitor',
    raceName: 'Halfling',
    className: 'Inquisitor',
    shortName: 'Teamwork Feat Swaps',
    description:
      'Add +1/4 to the number of times per day that an inquisitor can change her most recent teamwork feat.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'teamwork_feat_change',
      perLevelValue: { numerator: 1, denominator: 4 },
      requiresPickOne: false,
    },
    source: APG,
    ...META,
  },
  {
    id: 'halfling-investigator',
    raceName: 'Halfling',
    className: 'Investigator',
    shortName: 'Bonus Extract Formula',
    description:
      "Add one extract formula from the investigator's list to his formula book. This formula must be at least 1 formula level below the highest level the investigator can create.",
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'extract_formula',
      perLevelValue: { numerator: 1, denominator: 1 },
      listConstraint: 'investigator formula list',
      spellLevelConstraint:
        'at least 1 formula level below highest level the investigator can create',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'halfling-kineticist',
    raceName: 'Halfling',
    className: 'Kineticist',
    shortName: 'Internal Buffer Capacity',
    description: "Increase the capacity of the kineticist's internal buffer by 1/6 point.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'internal_buffer',
      bumpType: 'other',
      perLevelValue: { numerator: 1, denominator: 6 },
      conditionDescription: 'capacity in points',
    },
    source: OA,
    ...META,
  },
  {
    id: 'halfling-magus',
    raceName: 'Halfling',
    className: 'Magus',
    shortName: 'New Magus Arcana',
    description: 'The magus gains 1/6 of a new magus arcana.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'magus_arcana',
      perLevelValue: { numerator: 1, denominator: 6 },
    },
    source: UM,
    ...META,
  },
  {
    id: 'halfling-medium',
    raceName: 'Halfling',
    className: 'Medium',
    shortName: 'Seance Boon Bonus',
    description:
      "Increase the bonus the medium gains from its seance boon by 1/3 point. This doesn't increase the bonus allies gain from shared seance.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'seance_boon',
      bumpType: 'bonus',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription: 'does not increase the bonus allies gain from shared seance',
    },
    source: OA,
    ...META,
  },
  {
    id: 'halfling-mesmerist',
    raceName: 'Halfling',
    className: 'Mesmerist',
    shortName: 'Mesmerist Tricks / Day',
    description: 'Increase the number of mesmerist tricks the mesmerist can use per day by 1/3.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'mesmerist_trick',
      perLevelValue: { numerator: 1, denominator: 3 },
      requiresPickOne: false,
    },
    source: OA,
    ...META,
  },
  {
    id: 'halfling-monk-grapple-stunning',
    raceName: 'Halfling',
    className: 'Monk',
    shortName: 'Grapple CMD + Stunning Attacks',
    description:
      "Add +1 to the monk's CMD when resisting a grapple and +1/2 to the number of stunning attacks he can attempt per day.",
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'cmd',
          perLevelValue: { numerator: 1, denominator: 1 },
          vsCombatManeuver: ['grapple'],
        },
        {
          type: 'feature_uses_per_day',
          featureName: 'stunning_fist',
          perLevelValue: { numerator: 1, denominator: 2 },
          requiresPickOne: false,
        },
      ],
    },
    source: CRB,
    ...META,
  },
  {
    id: 'halfling-monk-trip-prone',
    raceName: 'Halfling',
    className: 'Monk',
    shortName: 'CMD vs Trip + Damage vs Prone',
    description:
      "Gain a +1/4 bonus to CMD against trip and on damage rolls against prone targets that add the monk's Strength modifier.",
    mechanicalEffect: {
      type: 'compound',
      effects: [
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'cmd',
          perLevelValue: { numerator: 1, denominator: 4 },
          vsCombatManeuver: ['trip'],
        },
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'weapon_damage',
          perLevelValue: { numerator: 1, denominator: 4 },
          conditionDescription:
            "damage rolls against prone targets that add the monk's Strength modifier",
        },
      ],
    },
    source: ADV_GUIDE,
    ...META,
  },
  {
    id: 'halfling-occultist',
    raceName: 'Halfling',
    className: 'Occultist',
    shortName: 'Mental Focus / Day',
    description: 'Add 1/2 point of mental focus per day.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'mental_focus',
      bumpType: 'other',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'mental focus points per day',
    },
    source: OA,
    ...META,
  },
  {
    id: 'halfling-oracle',
    raceName: 'Halfling',
    className: 'Oracle',
    shortName: 'Curse CL',
    description:
      "Add +1/2 to the oracle's level for the purpose of determining the effects of the oracle's curse ability.",
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'oracle_curse',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: false,
      scopeDescription: "determining effects of the oracle's curse ability",
    },
    source: APG,
    ...META,
  },
  {
    id: 'halfling-paladin',
    raceName: 'Halfling',
    className: 'Paladin',
    shortName: 'Lay on Hands HP',
    description:
      "Add +1/2 hit point to the paladin's lay on hands ability (whether using it to heal or harm).",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'lay_on_hands',
      bumpType: 'damage',
      perLevelValue: { numerator: 1, denominator: 2 },
      conditionDescription: 'applies whether healing or harming',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'halfling-psychic',
    raceName: 'Halfling',
    className: 'Psychic',
    shortName: 'Discipline Power Cha Bump',
    description:
      'The psychic treats her Charisma bonus as 1/3 point higher for the purpose of determining the number of uses or rounds per day of her discipline powers.',
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'discipline_power_charisma_bonus',
      bumpType: 'uses_per_day',
      perLevelValue: { numerator: 1, denominator: 3 },
      conditionDescription:
        'treats Cha bonus as higher for uses or rounds per day of discipline powers',
    },
    source: OA,
    ...META,
  },
  {
    id: 'halfling-ranger',
    raceName: 'Halfling',
    className: 'Ranger',
    shortName: 'Dodge AC vs Favored Enemy',
    description: "Add a +1/4 dodge bonus to Armor Class against the ranger's favored enemies.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'dodge',
      target: 'ac',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription: "against the ranger's favored enemies",
    },
    source: CRB,
    ...META,
  },
  {
    id: 'halfling-rogue',
    raceName: 'Halfling',
    className: 'Rogue',
    shortName: 'Crit Confirm (Sling/Dagger/Halfling)',
    description:
      'Choose a weapon from the following list: sling, dagger, or any weapon with "halfling" in its name. Add a +1/2 bonus on critical hit confirmation rolls with that weapon (maximum bonus +4). This bonus does not stack with Critical Focus.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'crit_confirm',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'weapon (sling, dagger, or any weapon with "halfling" in its name)',
      conditionDescription: 'maximum bonus +4; does not stack with Critical Focus',
    },
    source: CRB,
    ...META,
  },
  {
    id: 'halfling-shaman',
    raceName: 'Halfling',
    className: 'Shaman',
    shortName: 'Spirit Animal CL',
    description:
      "Add 1/2 to the shaman's effective class level for the purpose of determining her spirit animal's natural armor adjustment, Intelligence, and special abilities.",
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'spirit_animal',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: false,
      scopeDescription:
        "determining spirit animal's natural armor adjustment, Intelligence, and special abilities",
    },
    source: ACG,
    ...META,
  },
  {
    id: 'halfling-skald',
    raceName: 'Halfling',
    className: 'Skald',
    shortName: 'Crit Confirm (Dagger/Sling/Halfling)',
    description:
      'Choose a weapon from the following list: dagger, sling, or any weapon with the word "halfling" in its name. Add a +1/2 bonus on critical hit confirmation rolls with that weapon (maximum bonus +4). This bonus doesn\'t stack with those gained through Critical Focus and similar effects.',
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'crit_confirm',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
      pickOnePrompt: 'weapon (dagger, sling, or any weapon with "halfling" in its name)',
      conditionDescription:
        'maximum bonus +4; does not stack with Critical Focus and similar effects',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'halfling-slayer',
    raceName: 'Halfling',
    className: 'Slayer',
    shortName: 'Dodge AC vs Studied Target',
    description: "Add a +1/4 dodge bonus to Armor Class against the slayer's studied target.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'dodge',
      target: 'ac',
      perLevelValue: { numerator: 1, denominator: 4 },
      conditionDescription: "against the slayer's studied target",
    },
    source: ACG,
    ...META,
  },
  {
    id: 'halfling-sorcerer',
    raceName: 'Halfling',
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
    source: CRB,
    ...META,
  },
  {
    id: 'halfling-spiritualist',
    raceName: 'Halfling',
    className: 'Spiritualist',
    shortName: 'Incorporeal Phantom Leash',
    description:
      "Add 1/4 to the number of rounds that the spiritualist's incorporeal phantom can be out of sight and line of effect before being sent back to the Ethereal Plane.",
    mechanicalEffect: {
      type: 'feature_numeric_bump',
      featureName: 'incorporeal_phantom_out_of_sight_rounds',
      bumpType: 'duration',
      perLevelValue: { numerator: 1, denominator: 4 },
    },
    source: OA,
    ...META,
  },
  {
    id: 'halfling-summoner',
    raceName: 'Halfling',
    className: 'Summoner',
    shortName: 'Eidolon Skill Rank',
    description: "Add +1 skill rank to the summoner's eidolon.",
    mechanicalEffect: {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'skill_ranks',
      perLevelValue: { numerator: 1, denominator: 1 },
      recipient: 'eidolon',
    },
    source: APG,
    ...META,
  },
  {
    id: 'halfling-swashbuckler',
    raceName: 'Halfling',
    className: 'Swashbuckler',
    shortName: 'Charmed Life Uses',
    description: 'Increase the number of times the swashbuckler can use charmed life by 1/4.',
    mechanicalEffect: {
      type: 'feature_uses_per_day',
      featureName: 'charmed_life',
      perLevelValue: { numerator: 1, denominator: 4 },
      requiresPickOne: false,
    },
    source: ACG,
    ...META,
  },
  {
    id: 'halfling-vigilante',
    raceName: 'Halfling',
    className: 'Vigilante',
    shortName: 'New Social Talent',
    description: 'Gain 1/6 of a new social talent.',
    mechanicalEffect: {
      type: 'learn_option',
      optionType: 'rogue_talent',
      perLevelValue: { numerator: 1, denominator: 6 },
      listConstraint: 'vigilante social talents',
      scopeDescription:
        'social talent (represented via rogue_talent optionType until a dedicated social_talent variant is added)',
    },
    source: UI,
    ...META,
  },
  {
    id: 'halfling-warpriest',
    raceName: 'Halfling',
    className: 'Warpriest',
    shortName: 'Sacred Weapon CL',
    description:
      "Add 1/4 to the warpriest's effective level when determining the damage of his sacred weapon.",
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'sacred_weapon',
      perLevelValue: { numerator: 1, denominator: 4 },
      requiresPickOne: false,
      scopeDescription: 'determining the damage of the warpriest sacred weapon',
    },
    source: ACG,
    ...META,
  },
  {
    id: 'halfling-witch',
    raceName: 'Halfling',
    className: 'Witch',
    shortName: 'Patron Spell CL',
    description:
      "Add +1/4 to the witch's caster level when determining the effects of the spells granted to her by her patron.",
    mechanicalEffect: {
      type: 'caster_level',
      scopeType: 'full',
      perLevelValue: { numerator: 1, denominator: 4 },
      targetClass: 'Witch',
      conditionDescription: 'spells granted to the witch by her patron',
    },
    source: APG,
    ...META,
  },
  {
    id: 'halfling-wizard',
    raceName: 'Halfling',
    className: 'Wizard',
    shortName: 'Familiar CL',
    description:
      "Add +1/2 to the wizard's effective class level for the purposes of determining his familiar's natural armor adjustment, Intelligence, and special abilities.",
    mechanicalEffect: {
      type: 'class_level_bump',
      featureName: 'familiar',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: false,
      scopeDescription:
        "determining familiar's natural armor adjustment, Intelligence, and special abilities",
    },
    source: CRB,
    ...META,
  },
];
