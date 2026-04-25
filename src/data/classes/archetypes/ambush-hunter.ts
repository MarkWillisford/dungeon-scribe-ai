import { ArchetypeData } from '../types';
import type { InitiatingProgressionTable } from '../initiatingProgressionTables';

// Archetype Maneuver Progression (half-IL, from Path of War)
// [maneuversKnown, maneuversReadied, stancesKnown]
export const AMBUSH_HUNTER_PROGRESSION: InitiatingProgressionTable = [
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

export const AMBUSH_HUNTER_ARCHETYPE: ArchetypeData = {
  name: 'Ambush Hunter',
  className: 'Ranger',
  description:
    'Stalkers in the wilderness who specialize in sudden, vicious strikes from hidden vantage points, the Ambush Hunters and their animal companions are masters of stealth and of overwhelming assault.',
  replacedFeatures: ['Spells', 'Favored Enemy', "Hunter's Bond", 'Quarry'],
  modifiedFeatures: [],
  newFeatures: [
    {
      name: 'Maneuvers',
      level: 1,
      description:
        "An ambush hunter begins his career with knowledge of three martial maneuvers. The disciplines available to him are Golden Lion and Primal Fury. The ambush hunter gains additional maneuvers known at higher levels as shown on the Archetype Maneuver Progression table. The maximum level of maneuvers gained through ambush hunter levels is limited by those listed in that table as well, although this restriction does not apply to maneuvers added to his maneuvers known through other methods, such as prestige classes or the Advanced Study feat. An ambush hunter must meet a maneuver's prerequisite to learn it. An ambush hunter adds his full ambush hunter level to his initiator level to determine his total initiator level and his highest-level maneuvers known. At 4th level and every even level thereafter (6th, 8th, 10th, and so on), the ambush hunter can choose to learn a new maneuver in place of one he already knows. In effect, he loses the old maneuver in exchange for the new one. He can choose a new maneuver of any level he likes, as long as he observes the restriction on the highest-level maneuvers he knows; the ambush hunter need not replace the old maneuver with a maneuver of the same level. He can swap only a single maneuver at any given level. An ambush hunter's maneuvers are not affected by spell resistance, and he does not provoke attacks of opportunity when he initiates one. An ambush hunter's initiation modifier is Wisdom. This ability replaces spells.",
    },
    {
      name: 'Maneuvers Readied',
      level: 1,
      description:
        "An ambush hunter can ready all three of his maneuvers known at 1st level, and as he advances in level and learns more maneuvers, he is able to ready more, but must still choose which maneuvers to ready. An ambush hunter must always ready his maximum number of maneuvers readied. He readies his maneuvers by practicing appearance and disappearance drills for ten minutes. The maneuvers he chooses remain readied until he decides to practice again and change them. The ambush hunter does not need to sleep or rest for any long period of time in order to ready his maneuvers; any time he spends ten minutes in practice, he can change his readied maneuvers. An ambush hunter begins an encounter with all his readied maneuvers unexpended, regardless of how many times he might have already used them since he chose them. When he initiates a maneuver, he expends it for the current encounter, so each of his readied maneuvers can be used once per encounter (unless he recovers them, as described below).",
    },
    {
      name: 'Maneuver Recovery',
      level: 1,
      description:
        "As a full-round action, the ambush hunter and his animal companion gain the ability to use the Stealth skill while being observed for one round, then each can make a Stealth check to hide and move up to their speed. When he does so, he recovers a number of expended maneuvers equal to his ambush hunter initiation modifier (minimum 2). The ambush hunter and his animal companion do not take a penalty on their Stealth checks from moving while using this ability. Alternately, the ambush hunter may take a moment to reassess his prey, recovering a single maneuver as a standard action.",
    },
    {
      name: 'Stances Known',
      level: 1,
      description:
        'An ambush hunter begins play with knowledge of one stance from any discipline open to him. At 4th, 7th, 11th, and 13th levels, he can select an additional stance to learn. Unlike maneuvers, stances are not expended and the ambush hunter does not have to ready them. All the stances he knows are available to him at all times, and he can change the stance he is currently maintaining as a swift action. A stance is an extraordinary ability unless otherwise stated in the stance or discipline description. Unlike with maneuvers, an ambush hunter cannot learn a new stance at higher levels in place of one he already knows.',
    },
    {
      name: 'Martial Style',
      level: 1,
      description:
        'At 1st level, the ambush hunter selects an additional martial discipline to add to his list. The ambush hunter may select his combat style from those associated with the chosen discipline, as listed below. Broken Blade (Acrobatics): Natural Weapon or Two-Weapon combat style. Iron Tortoise (Bluff): Thrown or Weapon and Shield combat style. Piercing Thunder (Acrobatics): Mounted or Two-Handed combat style. Scarlet Throne (Sense Motive): Mounted or Two-Handed combat style. Solar Wind (Perception): Archery, Crossbow, or Thrown combat style. Tempest Gale (Sleight of Hand): Archery, Crossbow, or Thrown combat style. Thrashing Dragon (Acrobatics): Thrown or Two-Weapon combat style. The associated skill of his selected discipline is added to his list of class skills, if it is not already. This ability replaces spells.',
    },
    {
      name: 'Martial Companion',
      level: 4,
      description:
        "At 4th level, the ambush hunter's animal companion gains a list of maneuvers and stances known equal to 1/2 the number of maneuvers or stances known by the ambush hunter (rounded down). The animal companion can only learn maneuvers from the Primal Fury discipline, and treats its natural attacks as Primal Fury discipline weapons. The animal companion does not ready maneuvers; instead, when the animal companion initiates a maneuver, it expends one of the ambush hunter's readied maneuvers (the ambush hunter chooses which one). The animal companion's initiation modifier and initiator level are equal to the ambush hunter's. This ability replaces hunter's bond.",
    },
    {
      name: 'Ambush Tactics',
      level: 4,
      description:
        "Whenever an ambush hunter or his animal companion attack a flat-footed creature or are both flanking the same creature, they both add the ambush hunter's initiation modifier as a bonus on damage rolls made with strikes against that flat-footed or flanked creature. Whenever the ranger and the animal companion successfully attack the same creature in a single round, the ambush hunter recovers one expended maneuver. This ability replaces favored enemy.",
    },
    {
      name: 'Pack Savagery',
      level: 8,
      description:
        "At 8th level, whenever the ambush hunter or his animal companion initiates a boost from the Primal Fury or Golden Lion disciplines, both the ambush hunter and his animal companion gain the benefits of the boost. The ambush hunter and the animal companion can only benefit from one such boost per round, even if they use this ability. This ability replaces quarry.",
    },
    {
      name: 'Unbreakable Bond',
      level: 19,
      description:
        "At 19th level, the ambush hunter's bond with his animal companion is so strong that it transcends time, space, life, and death. The ambush hunter always knows the exact location of his animal companion, regardless of distance (even if the animal companion is on another plane) and can view his animal companion's location as if by a scrying spell for a number of minutes per day equal to his ambush hunter initiation modifier. The caster level for this effect is equal to the ambush hunter's initiator level. In addition, if the ambush hunter's animal companion dies, it reincarnates 24 hours later in a random location within 1 mile of the ambush hunter.",
    },
  ],
  initiating: {
    type: 'Martial',
    initiatingAbility: 'WIS',
    ilProgression: 'half',
    disciplines: ['golden-lion', 'primal-fury'],
    progressionTableKey: 'ambush-hunter',
    recoveryMechanics: {
      primary: {
        type: 'custom',
        description:
          'As a full-round action, the ambush hunter and his animal companion gain the ability to use the Stealth skill while being observed for one round, then each can make a Stealth check to hide and move up to their speed. Recovers a number of expended maneuvers equal to his initiation modifier (minimum 2). No penalty on Stealth checks from moving.',
      },
      secondary: {
        type: 'custom',
        description:
          'As a standard action, the ambush hunter may reassess his prey, recovering a single expended maneuver.',
      },
    },
  },
  source: 'Path of War',
};
