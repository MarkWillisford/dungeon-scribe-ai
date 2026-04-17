// Dragon Fury — Path of War prestige class (Dreamscarred Press)
// Source: https://www.d20pfsrd.com/alternative-rule-systems/3rd-party-rules-systems/path-of-war/prestige-classes/dragon-fury/

import { BABProgression, SaveProgression } from '@/types/base';
import type { ExpandedClassData } from '../../types';
import type { InitiatingProgressionTable } from '../../initiatingProgressionTables';

// [maneuversKnown, maneuversReadied, stancesKnown] per prestige level 1-10
// These are cumulative gains from the prestige class itself.
export const DRAGON_FURY_PROGRESSION: InitiatingProgressionTable = [
  [0, 0, 0], // 1
  [1, 0, 0], // 2
  [1, 1, 1], // 3
  [2, 1, 1], // 4
  [2, 1, 2], // 5
  [3, 2, 2], // 6
  [3, 2, 2], // 7
  [4, 2, 2], // 8
  [4, 3, 3], // 9
  [5, 3, 3], // 10
];

export const DRAGON_FURY_CLASS: ExpandedClassData = {
  name: 'Dragon Fury',
  category: 'Prestige',
  maxLevel: 10,
  hitDie: 12,
  skillRanksPerLevel: 4,
  classSkills: [
    'Acrobatics',
    'Bluff',
    'Climb',
    'Craft',
    'Knowledge (martial)',
    'Perception',
    'Perform',
    'Sense Motive',
    'Survival',
  ],
  babProgression: BABProgression.Full,
  saves: {
    fortitude: SaveProgression.Good,
    reflex: SaveProgression.Good,
    will: SaveProgression.Poor,
  },
  weaponProficiencies: [],
  armorProficiencies: [],
  classFeatures: [
    {
      name: 'Dragon Fury Training',
      level: 1,
      description:
        'If the character possesses one of the following abilities: bardic performance, ki pool, or rage; the character may add his class level to the class that offers that ability to determine the number of bardic performance rounds, ki points, or rounds of rage that he may use per day. This does not improve their effectiveness; this only increases the number of uses per day.',
    },
    {
      name: 'Maneuvers',
      level: 1,
      description:
        "At every odd level, a dragon fury gains new maneuvers known from his available disciplines: Mithral Current, Primal Fury, Thrashing Dragon, and two of his previously available disciplines chosen when he takes his first dragon fury level. He must meet a maneuver's prerequisites to learn it. He adds his full dragon fury levels to his initiator level to determine his total initiator level and his highest-level maneuvers known. At 3rd, 6th, and 9th levels, he gains an additional maneuver readied per day.",
    },
    {
      name: 'Stances Known',
      level: 1,
      description:
        'At 3rd level and again at 5th level and 9th level, a dragon fury learns a new stance from any of the disciplines available to him as a dragon fury.',
    },
    {
      name: 'Dual Fang Focus',
      level: 1,
      description:
        'The dragon fury is a practitioner of two-weapon fighting styles and suffers fewer penalties when fighting with two weapons or a double weapon. He adds a +1 competence bonus to attack and damage rolls while two-weapon fighting with these weapons at 1st level. This bonus increases by +1 at 4th level, and again at 7th and 10th levels.',
    },
    {
      name: 'Sharp Fang',
      level: 1,
      description:
        'The dragon fury gains the Power Attack feat (even if he does not meet the prerequisites for this feat), and when fighting with two weapons in his hands (or when wielding a double weapon), he treats these weapons as if he were wielding both weapons as main hand weapons for the purposes of calculating the damage bonuses.',
    },
    {
      name: 'Dance of Thrashing Claws',
      level: 2,
      description:
        'While one weapon defends the dragon fury, the other one lies waiting to continue the defense and see the martial disciple to victory. While in a Thrashing Dragon stance and using a counter of the Broken Blade, Primal Fury, or Thrashing Dragon discipline, the character may use that counter one additional time (if necessary) before his next turn.',
    },
    {
      name: 'Dragon Fury Defense',
      level: 3,
      description:
        'Mastering the art of fighting with two weapons in his hands or when wielding a double weapon, the dragon fury learns how to better defend himself with his dual weapons. He gains a +1 shield bonus to his Armor Class at 3rd level. This increases to +2 at 6th level, and to +3 at 9th level. To gain this bonus to his Armor Class, the dragon fury must be fighting with two weapons or a double weapon and must be in a Broken Blade, Primal Fury, or Thrashing Dragon stance.',
    },
    {
      name: 'Dual Fang Focus +2',
      level: 4,
      description:
        'The dragon fury\'s competence bonus to attack and damage rolls while two-weapon fighting increases to +2.',
    },
    {
      name: 'Vicious Fang',
      level: 5,
      description:
        "At 5th level, the dragon fury uses Sharp Fang as if both of his wielded weapons were wielded as two-handed weapons (gaining a damage bonus equal to +3 per point of attack bonus subtracted).",
    },
    {
      name: 'Dragon Fury Defense +2',
      level: 6,
      description:
        'The dragon fury\'s shield bonus to Armor Class while fighting with two weapons or a double weapon and in a Broken Blade, Primal Fury, or Thrashing Dragon stance increases to +2.',
    },
    {
      name: 'Dual Fang Focus +3',
      level: 7,
      description:
        'The dragon fury\'s competence bonus to attack and damage rolls while two-weapon fighting increases to +3.',
    },
    {
      name: 'Deadly Fang Recovery',
      level: 8,
      description:
        "At 8th level, the dragon fury's ability to rend his foes asunder and continue the fight is nearly unmatched, spurring him to greater martial displays of prowess. Whenever the dragon fury reduces a foe to 0 hit points or fewer in a turn while executing a martial strike of his in-class disciplines or while full attacking an opponent while two-weapon fighting, the character may recover one expended maneuver.",
    },
    {
      name: 'Dragon Fury Defense +3',
      level: 9,
      description:
        'The dragon fury\'s shield bonus to Armor Class while fighting with two weapons or a double weapon and in a Broken Blade, Primal Fury, or Thrashing Dragon stance increases to +3.',
    },
    {
      name: "Dragon War God's Dance",
      level: 10,
      description:
        "At 10th level, the dragon fury gains a potent stance as the master level of his craft. The dragon fury may abandon a stance he is currently in to assume this stance as a swift action, losing the benefits of the previous stance to gain the benefits of this one. This stance is considered to be a stance of the Broken Blade, Primal Fury, and Thrashing Dragon disciplines. While in the Dragon War God's Dance, as a full round action the character may move any distance as a free action, so as long as his total movement for the round does not exceed twice his movement speed. He may continue subsequent attacks (up to his maximum number of attacks on a full attack action) after this movement is complete, so long as he has moved at least 10-ft prior to the last attack. Each attack inflicts an additional 4d6 points of damage. Unlike most stances, this stance is particularly strenuous, and may only be maintained for a number of rounds equal to 5 + Constitution modifier, after which he reverts to his previous stance and is fatigued for a number of rounds equal to the number of rounds he was in this stance. Once he has recovered from the Dragon War God's Dance, he may resume it again if he should so choose.",
    },
    {
      name: 'Dual Fang Focus +4',
      level: 10,
      description:
        'The dragon fury\'s competence bonus to attack and damage rolls while two-weapon fighting increases to +4.',
    },
  ],
  prerequisites: {
    bab: 4,
    skills: [
      { name: 'Acrobatics', ranks: 6 },
      { name: 'Knowledge (martial)', ranks: 6 },
    ],
    feats: ['Discipline Focus (Thrashing Dragon)', 'Two-Weapon Fighting'],
    special: [
      'Ability to use 3rd-level maneuvers, including at least one Thrashing Dragon strike and stance',
    ],
  },
  spellcasting: {
    type: 'None',
    casting: 'None',
  },
  initiating: {
    type: 'Martial',
    initiatingAbility: 'WIS',
    ilProgression: 'full',
    disciplines: [
      'mithral-current',
      'primal-fury',
      'thrashing-dragon',
    ],
    progressionTableKey: 'DRAGON_FURY_PROGRESSION',
    recoveryMechanics: {
      primary: {
        type: 'custom',
        description:
          'The dragon fury recovers maneuvers through the recovery mechanics of his base initiating class. Additionally, at 8th level via Deadly Fang Recovery, whenever the dragon fury reduces a foe to 0 hit points or fewer while executing a martial strike of his in-class disciplines or while full attacking while two-weapon fighting, he may recover one expended maneuver.',
      },
    },
  },
  source: 'Path of War',
};
