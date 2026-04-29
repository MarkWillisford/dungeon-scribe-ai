import { ArchetypeData } from '../types';
import type { InitiatingProgressionTable } from '../initiatingProgressionTables';

// Archetype Maneuver Progression (full-IL, from Path of War)
// [maneuversKnown, maneuversReadied, stancesKnown]
export const HIDDEN_BLADE_PROGRESSION: InitiatingProgressionTable = [
  [3, 3, 1], // 1
  [4, 3, 1], // 2
  [5, 3, 1], // 3
  [6, 4, 2], // 4
  [6, 4, 2], // 5
  [6, 4, 2], // 6
  [7, 4, 3], // 7
  [7, 4, 3], // 8
  [8, 4, 3], // 9
  [8, 5, 3], // 10
  [9, 5, 4], // 11
  [9, 5, 4], // 12
  [10, 5, 5], // 13
  [11, 5, 5], // 14
  [11, 6, 5], // 15
  [12, 6, 5], // 16
  [13, 6, 5], // 17
  [14, 6, 5], // 18
  [14, 6, 5], // 19
  [15, 7, 5], // 20
];

export const HIDDEN_BLADE_ARCHETYPE: ArchetypeData = {
  name: 'Hidden Blade',
  className: 'Rogue',
  description:
    'Some rogues specialize in wielding weapons that their enemies will never see, striking from behind veils of shadow and illusion.',
  replacedFeatures: [
    'Rogue Talent (4th)',
    'Rogue Talent (8th)',
    'Rogue Talent (12th)',
    'Rogue Talent (16th)',
    'Rogue Talent (20th)',
  ],
  modifiedFeatures: [],
  newFeatures: [
    {
      name: 'Maneuvers',
      level: 1,
      description:
        "A hidden blade begins her career with knowledge of three martial maneuvers. The disciplines available to her are Mithral Current, Thrashing Dragon, and Veiled Moon. The hidden blade gains additional maneuvers known at higher levels as shown on the Archetype Maneuver Progression table. The maximum level of maneuvers gained through hidden blade levels is limited by those listed in that table as well, although this restriction does not apply to maneuvers added to her maneuvers known through other methods, such as prestige classes or the Advanced Study feat. A hidden blade must meet a maneuver's prerequisite to learn it. A hidden blade adds her full hidden blade level to her initiator level to determine her total initiator level and her highest-level maneuvers known. At 4th level and every even level thereafter (6th, 8th, 10th, and so on), the hidden blade can choose to learn a new maneuver in place of one she already knows. In effect, she loses the old maneuver in exchange for the new one. She can choose a new maneuver of any level she likes, as long as she observes the restriction on the highest-level maneuvers she knows; the hidden blade need not replace the old maneuver with a maneuver of the same level. She can swap only a single maneuver at any given level. A hidden blade's maneuvers are not affected by spell resistance, and she does not provoke attacks of opportunity when she initiates one. A hidden blade's initiation modifier is Intelligence. This ability replaces the rogue talents gained at 4th, 8th, 12th, 16th, and 20th levels.",
    },
    {
      name: 'Maneuvers Readied',
      level: 1,
      description:
        'A hidden blade can ready all three of her maneuvers known at 1st level, and as she advances in level and learns more maneuvers, she is able to ready more, but must still choose which maneuvers to ready. A hidden blade must always ready her maximum number of maneuvers readied. She readies her maneuvers by meditating or performing martial katas for ten minutes. The maneuvers she chooses remain readied until she decides to meditate again and change them. The hidden blade does not need to sleep or rest for any long period of time in order to ready her maneuvers; any time she spends ten minutes in meditation, she can change her readied maneuvers. A hidden blade begins an encounter with all her readied maneuvers unexpended, regardless of how many times she might have already used them since she chose them. When she initiates a maneuver, she expends it for the current encounter, so each of her readied maneuvers can be used once per encounter (unless she recovers them, as described below).',
    },
    {
      name: 'Maneuver Recovery (Gambits)',
      level: 1,
      description:
        "In order for the hidden blade to recover maneuvers, she must play a gambit (see Gambits below). When a gambit succeeds, she recovers a number of expended maneuvers equal to her hidden blade initiation modifier (minimum 2). When a gambit fails, she suffers the gambit's rake, recovering only a single expended maneuver and taking a -2 penalty on all d20 rolls for one round. If the hidden blade initiates a maneuver as part of a gambit, she cannot recover that maneuver when the gambit is completed. Alternately, the hidden blade may take a moment to analyze the battlefield, recovering a single maneuver as a standard action.",
    },
    {
      name: 'Stances Known',
      level: 1,
      description:
        'A hidden blade begins play with knowledge of one stance from any discipline open to hidden blades. At 4th, 7th, 11th, and 13th levels, she can select an additional stance to learn. Unlike maneuvers, stances are not expended and the hidden blade does not have to ready them. All the stances she knows are available to her at all times, and she can change the stance she is currently maintaining as a swift action. A stance is an extraordinary ability unless otherwise stated in the stance or discipline description. Unlike with maneuvers, a hidden blade cannot learn a new stance at higher levels in place of one she already knows.',
    },
    {
      name: 'Hidden Specialization',
      level: 1,
      description:
        "At 1st level, a hidden blade adds Broken Blade, Shattered Mirror, or Tempest Gale to her list of available disciplines. If the hidden blade does not have that discipline's associated skill as a class skill, she gains it as a class skill.",
    },
    {
      name: 'Hidden Weapons',
      level: 1,
      description:
        'A hidden blade is adept at storing and retrieving weapons from places that no one would expect to find them. At 1st level, she gains Quick Draw as a bonus feat, even if she does not meet the prerequisites. In addition, she can draw hidden weapons as a free action, rather than a move action.',
    },
    {
      name: 'Portable Hole Specialist',
      level: 1,
      description:
        'Starting at 1st level, a hidden blade becomes adept at smuggling and storing objects into and out of extradimensional spaces, and can retrieve items from bags of holding or portable holes as a move action, regardless of how full or unorganized the bag is.',
    },
    {
      name: 'Gambits',
      level: 1,
      description:
        "At 1st level, a hidden blade selects two gambits from the gambits available to warlords, or the hidden blade gambits listed below. At 4th level and every four levels thereafter, a hidden blade selects an additional gambit to learn. Any gambit that would normally use the hidden blade's Charisma modifier to determine its effects instead uses her hidden blade initiation modifier (Intelligence).",
    },
    {
      name: "Gambit: Coward's Gambit",
      level: 1,
      description:
        "The hidden blade attacks a flat-footed opponent or an opponent she is flanking. If the attack hits, allies within 30 feet gain a bonus on damage rolls against that opponent equal to the hidden blade's initiation modifier for one round.",
    },
    {
      name: "Gambit: Flanker's Gambit",
      level: 1,
      description:
        'The hidden blade attacks an opponent adjacent to one of her allies. If the attack hits, the hidden blade is considered to be flanking that opponent until the end of her next turn.',
    },
    {
      name: 'Gambit: Stealth Gambit',
      level: 1,
      description:
        'The hidden blade makes a Stealth check to hide. If successful, the hidden blade becomes invisible for a number of rounds equal to her initiation modifier, as if under the effect of an invisibility spell. This is a supernatural ability.',
    },
  ],
  initiating: {
    type: 'Martial',
    initiatingAbility: 'INT',
    ilProgression: 'full',
    disciplines: ['mithral-current', 'thrashing-dragon', 'veiled-moon'],
    progressionTableKey: 'hidden-blade',
    recoveryMechanics: {
      primary: {
        type: 'gambit',
      },
      secondary: {
        type: 'custom',
        description:
          'As a standard action, the hidden blade may analyze the battlefield, recovering a single expended maneuver.',
      },
    },
  },
  source: 'Path of War',
};
