// Tome of Battle base initiating classes (WotC, 3.5e)
// Source: Tome of Battle: The Book of Nine Swords
// Class feature descriptions are best-effort from SRD sources.
// TODO: verify feature details against physical source books before final release.

import { BABProgression, SaveProgression } from '@/types/base';
import type { ExpandedClassData } from '../types';
import type { InitiatingProgressionTable } from '../initiatingProgressionTables';

// ─── Crusader ────────────────────────────────────────────────────────────────
// Unique: readies ALL known maneuvers. maneuversReadied always equals maneuversKnown.
// TODO: verify exact maneuver gain schedule and stance breakpoints
export const CRUSADER_PROGRESSION: InitiatingProgressionTable = [
  [3, 3, 1], // 1
  [5, 5, 1], // 2
  [6, 6, 1], // 3
  [7, 7, 2], // 4
  [8, 8, 2], // 5
  [10, 10, 2], // 6
  [11, 11, 2], // 7
  [12, 12, 3], // 8
  [13, 13, 3], // 9
  [15, 15, 3], // 10
  [16, 16, 3], // 11
  [17, 17, 4], // 12
  [18, 18, 4], // 13
  [20, 20, 4], // 14
  [21, 21, 4], // 15
  [22, 22, 5], // 16
  [23, 23, 5], // 17
  [25, 25, 5], // 18
  [26, 26, 5], // 19
  [27, 27, 6], // 20
];

export const CRUSADER_CLASS: ExpandedClassData = {
  name: 'Crusader',
  category: 'Base',
  maxLevel: 20,
  hitDie: 10,
  skillRanksPerLevel: 2,
  classSkills: [
    'Craft',
    'Diplomacy',
    'Intimidate',
    'Knowledge (religion)',
    'Profession',
    'Ride',
    'Sense Motive',
  ],
  babProgression: BABProgression.Full,
  saves: {
    fortitude: SaveProgression.Good,
    reflex: SaveProgression.Poor,
    will: SaveProgression.Good,
  },
  weaponProficiencies: ['Simple weapons', 'Martial weapons'],
  armorProficiencies: ['Light armor', 'Medium armor', 'Heavy armor', 'Shields'],
  startingWealth: '5d4 × 10 gp',
  classFeatures: [
    {
      name: 'Steely Resolve',
      level: 1,
      description:
        "The crusader maintains a pool of delayed damage. When the crusader takes damage, half of it (rounded down) is set aside and not immediately applied. At the start of each of the crusader's turns, half of the accumulated delayed damage (rounded down) is applied. This pool resets at the end of each encounter.",
    },
    {
      name: 'Furious Counterstrike',
      level: 1,
      description:
        "When the crusader's steely resolve delayed damage pool is greater than 0, the crusader gains a bonus on melee attack rolls and melee damage rolls equal to the number of points in the pool divided by 4 (rounded down, minimum +1).",
    },
    {
      name: 'Indomitable Soul',
      level: 2,
      description:
        'The crusader gains a +2 bonus on Will saving throws. This bonus increases by +1 for every four levels beyond 2nd.',
    },
    {
      name: 'Zealous Surge',
      level: 4,
      description:
        'Once per day, when the crusader fails a saving throw, she can immediately reroll the saving throw. The crusader must take the result of the reroll, even if it is lower.',
    },
    {
      name: 'Smite',
      level: 5,
      description:
        'Once per day, the crusader can declare a smite. She adds her Charisma modifier (if positive) to a single attack roll and adds her crusader level to the damage roll for that attack.',
    },
    {
      name: 'Aura of Chaos',
      level: 7,
      description:
        'The crusader radiates an aura of determination that bolsters nearby allies. Allies within 30 feet gain a +1 morale bonus on attack rolls and saving throws against fear. This bonus improves to +2 at 14th level.',
    },
    {
      name: 'Thicket of Blades',
      level: 9,
      description:
        "The crusader's threatened area becomes unusually difficult to navigate. Foes provoke attacks of opportunity when they move through the crusader's threatened area as normal, and 5-foot steps within that area are treated as normal movement for the purpose of provoking attacks of opportunity.",
    },
    {
      name: 'Mettle',
      level: 11,
      description:
        'The crusader can shrug off magical effects that would otherwise harm her. If the crusader succeeds on a Fortitude or Will saving throw against an effect that has a reduced effect on a successful save, she instead ignores the effect entirely.',
    },
    {
      name: 'Divine Surge',
      level: 14,
      description:
        'Once per day, as a swift action, the crusader can channel divine energy to gain a number of temporary hit points equal to twice her crusader level. These temporary hit points last for 1 minute.',
    },
  ],
  spellcasting: { type: 'None', casting: 'None' },
  initiating: {
    type: 'Martial',
    initiatingAbility: 'CHA',
    ilProgression: 'full',
    disciplines: ['devoted-spirit', 'stone-dragon', 'white-raven'],
    progressionTableKey: 'crusader',
    recoveryMechanics: {
      primary: { type: 'random_grant', grantCount: 2 },
    },
  },
  source: '3.5e-tob',
};

// ─── Swordsage ───────────────────────────────────────────────────────────────
// TODO: verify — Swordsage is the most knowledgeable initiator in ToB
export const SWORDSAGE_PROGRESSION: InitiatingProgressionTable = [
  [6, 4, 1], // 1
  [7, 4, 2], // 2
  [8, 5, 2], // 3
  [9, 5, 2], // 4
  [10, 5, 2], // 5
  [11, 6, 3], // 6
  [12, 6, 3], // 7
  [13, 6, 3], // 8
  [14, 7, 3], // 9
  [15, 7, 4], // 10
  [16, 7, 4], // 11
  [17, 8, 4], // 12
  [18, 8, 4], // 13
  [19, 8, 5], // 14
  [20, 9, 5], // 15
  [21, 9, 5], // 16
  [22, 9, 5], // 17
  [23, 10, 6], // 18
  [24, 10, 6], // 19
  [25, 10, 6], // 20
];

export const SWORDSAGE_CLASS: ExpandedClassData = {
  name: 'Swordsage',
  category: 'Base',
  maxLevel: 20,
  hitDie: 8,
  skillRanksPerLevel: 6,
  classSkills: [
    'Acrobatics',
    'Climb',
    'Craft',
    'Heal',
    'Intimidate',
    'Knowledge (history)',
    'Knowledge (local)',
    'Perception',
    'Profession',
    'Sense Motive',
    'Stealth',
    'Swim',
  ],
  babProgression: BABProgression.Medium,
  saves: {
    fortitude: SaveProgression.Poor,
    reflex: SaveProgression.Good,
    will: SaveProgression.Good,
  },
  weaponProficiencies: ['Simple weapons', 'Martial melee weapons'],
  armorProficiencies: ['Light armor'],
  startingWealth: '4d4 × 10 gp',
  classFeatures: [
    {
      name: 'AC Bonus',
      level: 1,
      description:
        'When wearing light or no armor and not carrying a heavy load, the swordsage adds her Wisdom modifier (if positive) as a bonus to Armor Class. This bonus applies even against touch attacks and when flat-footed, but not when the swordsage is immobilized or helpless.',
    },
    {
      name: 'Discipline Focus (Weapon Focus)',
      level: 1,
      description:
        "The swordsage gains Weapon Focus as a bonus feat for one weapon associated with one of her disciplines. She must choose a discipline and a weapon from that discipline's associated weapons.",
    },
    {
      name: 'Quick to Act',
      level: 1,
      description:
        'The swordsage gains a +1 bonus on initiative checks. This bonus increases by 1 for every five swordsage levels beyond 1st (+2 at 6th, +3 at 11th, +4 at 16th).',
    },
    {
      name: 'Discipline Focus (Insightful Strike)',
      level: 2,
      description:
        "For one of the swordsage's disciplines, she can add her Wisdom modifier (instead of Strength) to damage rolls whenever she uses a strike from that discipline.",
    },
    {
      name: 'Sense Magic',
      level: 3,
      description:
        'The swordsage can use detect magic at will as a spell-like ability. Her caster level equals her swordsage level.',
    },
    {
      name: 'Discipline Focus (Defensive Stance)',
      level: 6,
      description:
        "For one of the swordsage's disciplines, she gains a +2 bonus to Armor Class when in a stance from that discipline.",
    },
    {
      name: 'Evasion',
      level: 9,
      description:
        'If the swordsage succeeds on a Reflex saving throw against an attack that normally deals damage on a successful save, she takes no damage. Evasion can only be used if the swordsage is wearing light or no armor.',
    },
    {
      name: 'Discipline Mastery',
      level: 16,
      description:
        'The swordsage gains mastery over one of her disciplines. She treats her initiator level as 2 higher than normal for the purpose of meeting prerequisites for maneuvers from her chosen discipline and for the purpose of maneuver effects that scale with initiator level.',
    },
    {
      name: 'Dual Boost',
      level: 17,
      description:
        'The swordsage can initiate two boost maneuvers simultaneously. As a swift action, she can initiate two boosts, though she still expends both maneuvers.',
    },
  ],
  spellcasting: { type: 'None', casting: 'None' },
  initiating: {
    type: 'Martial',
    initiatingAbility: 'WIS',
    ilProgression: 'full',
    disciplines: [
      'desert-wind',
      'diamond-mind',
      'setting-sun',
      'shadow-hand',
      'stone-dragon',
      'tiger-claw',
    ],
    progressionTableKey: 'swordsage',
    recoveryMechanics: {
      primary: { type: 'full_round_one' },
    },
  },
  source: '3.5e-tob',
};

// ─── Warblade ────────────────────────────────────────────────────────────────
// TODO: verify — ToB Warblade table may differ slightly from PoW full-initiator standard
export const WARBLADE_PROGRESSION: InitiatingProgressionTable = [
  [5, 4, 1], // 1
  [6, 4, 1], // 2
  [7, 5, 1], // 3
  [8, 5, 2], // 4
  [9, 5, 2], // 5
  [10, 6, 2], // 6
  [11, 6, 2], // 7
  [12, 6, 3], // 8
  [13, 7, 3], // 9
  [14, 7, 3], // 10
  [15, 7, 3], // 11
  [16, 8, 4], // 12
  [17, 8, 4], // 13
  [18, 8, 4], // 14
  [19, 9, 4], // 15
  [20, 9, 5], // 16
  [21, 9, 5], // 17
  [22, 10, 5], // 18
  [23, 10, 5], // 19
  [24, 10, 6], // 20
];

export const WARBLADE_CLASS: ExpandedClassData = {
  name: 'Warblade',
  category: 'Base',
  maxLevel: 20,
  hitDie: 12,
  skillRanksPerLevel: 4,
  classSkills: [
    'Acrobatics',
    'Climb',
    'Craft',
    'Intimidate',
    'Knowledge (history)',
    'Knowledge (local)',
    'Perception',
    'Profession',
    'Ride',
    'Swim',
  ],
  babProgression: BABProgression.Full,
  saves: {
    fortitude: SaveProgression.Good,
    reflex: SaveProgression.Poor,
    will: SaveProgression.Poor,
  },
  weaponProficiencies: ['Simple weapons', 'Martial weapons'],
  armorProficiencies: ['Light armor', 'Medium armor', 'Heavy armor', 'Shields', 'Tower shields'],
  startingWealth: '6d4 × 10 gp',
  classFeatures: [
    {
      name: 'Battle Clarity (Reflex Saves)',
      level: 1,
      description:
        'The warblade can add her Intelligence modifier (minimum +0) as a bonus on Reflex saving throws as long as she is not flat-footed.',
    },
    {
      name: 'Weapon Aptitude',
      level: 1,
      description:
        "The warblade's training allows her to realign her weapon skills. Each morning, she may spend 1 hour practicing to reassign one of her weapon-specific fighter bonus feats (such as Weapon Focus) to a different qualifying weapon.",
    },
    {
      name: 'Uncanny Dodge',
      level: 2,
      description:
        'The warblade retains her Dexterity bonus to AC even if caught flat-footed or struck by an invisible attacker. She still loses her Dexterity bonus if immobilized.',
    },
    {
      name: 'Battle Ardor (Critical Confirmation)',
      level: 3,
      description:
        'The warblade adds her Intelligence modifier (minimum +0) as a bonus on attack rolls made to confirm critical hits.',
    },
    {
      name: 'Improved Uncanny Dodge',
      level: 6,
      description:
        'The warblade can no longer be flanked. A rogue must be at least four levels higher than the warblade to use flanking to deny her Dexterity bonus.',
    },
    {
      name: 'Battle Cunning (Damage)',
      level: 7,
      description:
        'The warblade adds her Intelligence modifier (minimum +0) as a bonus on damage rolls against flat-footed or flanked opponents.',
    },
    {
      name: 'Battle Skill (Combat Maneuvers)',
      level: 11,
      description:
        'The warblade adds her Intelligence modifier (minimum +0) as a bonus on her Combat Maneuver Bonus and Combat Maneuver Defense.',
    },
    {
      name: 'Battle Mastery',
      level: 15,
      description:
        'The warblade adds her Intelligence modifier (minimum +0) as a bonus on all attack rolls and damage rolls.',
    },
    {
      name: 'Stance Mastery',
      level: 20,
      description:
        "The warblade can maintain two stances simultaneously. Both stances' effects apply at the same time.",
    },
  ],
  spellcasting: { type: 'None', casting: 'None' },
  initiating: {
    type: 'Martial',
    initiatingAbility: 'INT',
    ilProgression: 'full',
    disciplines: ['diamond-mind', 'iron-heart', 'stone-dragon', 'tiger-claw', 'white-raven'],
    progressionTableKey: 'warblade',
    recoveryMechanics: {
      primary: { type: 'strike_recovers_all' },
    },
  },
  source: '3.5e-tob',
};
