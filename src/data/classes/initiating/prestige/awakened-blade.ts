// Awakened Blade — Path of War prestige class (Dreamscarred Press)
// Source: https://www.d20pfsrd.com/alternative-rule-systems/3rd-party-rules-systems/path-of-war/prestige-classes/awakened-blade/

import { BABProgression, SaveProgression } from '@/types/base';
import type { ExpandedClassData } from '../../types';
import type { InitiatingProgressionTable } from '../../initiatingProgressionTables';

// Incremental additions to base class progression per prestige level 1-10:
// [maneuversKnown, maneuversReadied, stancesKnown]
// Values are additive (+N at that level), not cumulative totals.
export const AWAKENED_BLADE_PROGRESSION: InitiatingProgressionTable = [
  [0, 0, 0], // 1
  [1, 0, 0], // 2
  [0, 1, 0], // 3
  [1, 0, 1], // 4
  [0, 0, 0], // 5
  [1, 1, 1], // 6
  [0, 0, 0], // 7
  [1, 0, 0], // 8
  [0, 1, 0], // 9
  [1, 0, 1], // 10
];

export const AWAKENED_BLADE_CLASS: ExpandedClassData = {
  name: 'Awakened Blade',
  category: 'Prestige',
  maxLevel: 10,
  hitDie: 10,
  skillRanksPerLevel: 4,
  classSkills: [
    'Acrobatics',
    'Autohypnosis',
    'Diplomacy',
    'Intimidate',
    'Knowledge (psionics)',
    'Spellcraft',
    'Stealth',
  ],
  babProgression: BABProgression.Full,
  saves: {
    fortitude: SaveProgression.Poor,
    reflex: SaveProgression.Poor,
    will: SaveProgression.Good,
  },
  weaponProficiencies: [],
  armorProficiencies: [],
  prerequisites: {
    skills: [
      { name: 'Acrobatics', ranks: 5 },
      { name: 'Autohypnosis', ranks: 4 },
      { name: 'Knowledge (martial)', ranks: 3 },
      { name: 'Knowledge (psionics)', ranks: 3 },
    ],
    feats: ['Psionic Body', 'Psionic Meditation'],
    special: [
      'Ability to manifest defensive precognition and offensive precognition',
      'Ability to initiate 2nd-level maneuvers, including at least one stance',
    ],
  },
  classFeatures: [
    {
      name: 'Maneuvers',
      level: 1,
      description:
        'An awakened blade adds either Riven Hourglass or Sleeping Goddess (chosen when the character enters the class) to his list of available disciplines. If the character does not have the associated skill of the chosen discipline as a class skill, he gains it as a class skill. At every even-numbered awakened blade level (2nd, 4th, 6th, 8th, and 10th), the awakened blade gains new maneuvers known from any discipline he has access to (including those from his prior martial training or gained through the Martial Training feat). The character must meet a maneuver\'s prerequisites to learn it. The character adds his full awakened blade levels to his initiator level to determine his total initiator level and his highest-level maneuvers known.',
    },
    {
      name: 'Maneuvers Readied',
      level: 1,
      description:
        'At 3rd, 6th, and 9th levels, the awakened blade gains an additional maneuver readied slot. These slots are added to the character\'s total readied maneuvers from his base initiating class. The awakened blade readies his maneuvers using the same method as his base initiating class (such as meditating for 10 minutes for a stalker, or exercising for 10 minutes for a warder).',
    },
    {
      name: 'Stances Known',
      level: 1,
      description:
        'At 4th, 6th, and 10th levels, the awakened blade learns a new martial stance from any discipline he has access to. The character must meet the stance\'s prerequisites to learn it.',
    },
    {
      name: 'Situational Awareness',
      level: 1,
      description:
        'The awakened blade adds half his class level (rounded down, minimum of +1) as an insight bonus to initiative rolls. He may also add this bonus to his AC as a dodge bonus and to Reflex saving throws made to avoid traps. This bonus stacks with the trap sense class feature. At 3rd level, the awakened blade gains the benefits of uncanny dodge. He cannot be caught flat-footed, nor does he lose his Dexterity bonus to AC if the attacker is invisible. He still loses his Dexterity bonus to AC if immobilized or if an opponent successfully uses the feint action against him. If the awakened blade already possesses uncanny dodge from another class, he automatically gains improved uncanny dodge instead. At 9th level, the awakened blade gains the benefits of improved uncanny dodge. He can no longer be flanked. This defense denies a rogue the ability to sneak attack the awakened blade by flanking him, unless the attacker has at least four more rogue levels than the target has awakened blade levels. If a character already has uncanny dodge from another class, the levels from the classes that grant uncanny dodge stack to determine the minimum rogue level required to flank the character.',
    },
    {
      name: 'Deep Focus',
      level: 1,
      description:
        'The awakened blade gains the Deep Focus psionic feat as a bonus feat at 1st level. This feat allows the character to expend his psionic focus to take 15 on a concentration check.',
    },
    {
      name: 'Path of the Warrior',
      level: 1,
      description:
        'The awakened blade continues to train in his psionic and martial techniques as he advances. If the character has levels in psychic warrior, he adds his awakened blade levels to his psychic warrior level for the purposes of determining trance and maneuver abilities. If the character has levels in soulknife, he counts all awakened blade levels as +1 to existing manifester level with regards to a soulknife\'s mind blade enhancement bonus.',
    },
    {
      name: 'Stance of the Inner Eye',
      level: 2,
      description:
        'Starting at 2nd level, the awakened blade learns a potent supernatural stance that allows him to harness his psionic precognitive powers in conjunction with his martial skill. To enter this stance, the awakened blade uses a swift action to abandon a martial stance he is currently using. While in the Stance of the Inner Eye, the character gains a +1 insight bonus for every three initiator levels he possesses (minimum +1) to his AC, attack rolls, damage rolls, CMB checks, and to all saving throws. If caught in a situation where the character would be denied his Dexterity bonus to AC, these bonuses do not apply. The character inflicts an additional 1d6 points of precision damage while in this stance at 2nd level, and this damage bonus improves to 2d6 points of precision damage at 7th level. Creatures not subject to critical hits are immune to this additional damage. This is a supernatural ability.',
    },
    {
      name: 'Situational Awareness (Uncanny Dodge)',
      level: 3,
      description:
        'At 3rd level, the awakened blade gains the benefits of uncanny dodge as part of his situational awareness. He cannot be caught flat-footed, nor does he lose his Dexterity bonus to AC if the attacker is invisible. He still loses his Dexterity bonus to AC if immobilized or if an opponent successfully uses the feint action against him. If the awakened blade already possesses uncanny dodge from another class, he automatically gains improved uncanny dodge instead.',
    },
    {
      name: 'Bonus Psionic Feat',
      level: 4,
      description:
        'At 4th level and again at 8th level, the awakened blade may select one combat feat or one psionic feat as a bonus feat. The awakened blade must meet the prerequisites of the selected feat.',
    },
    {
      name: 'Precognitive Defenses',
      level: 5,
      description:
        'At 5th level, the awakened blade may expend his psionic focus as a free action to initiate a readied counter, even if he has already used his immediate or swift action this round. This specifically allows for the use of a free action on another creature\'s turn. This is a supernatural ability.',
    },
    {
      name: 'Hypercognitive Focus',
      level: 6,
      description:
        'At 6th level, whenever the awakened blade recovers one or more maneuvers, he may regain psionic focus as a free action as part of his maneuver recovery. He may only do this one time in a given round. Alternately, the character may expend his psionic focus when manifesting a psionic power and recover an expended maneuver. This is an extraordinary ability.',
    },
    {
      name: 'Clairsentient Counter',
      level: 7,
      description:
        'At 7th level, the awakened blade gains the ability to use a clairsentient counter. The character expends a readied maneuver and his psionic focus as an immediate action. The clairsentient counter is used in response to an attack against him of any sort (be it a melee or ranged attack, spell, power, or other spell-like or supernatural effect) and grants the character a standard or move action that he must use as part of this counter. This movement occurs before the attack is resolved but after the attack is made. The awakened blade may use this movement to move out of the area of an effect or to move out of range of the attack being directed at him. This is a supernatural ability.',
    },
    {
      name: 'Bonus Psionic Feat',
      level: 8,
      description:
        'At 8th level, the awakened blade may select one combat feat or one psionic feat as a bonus feat. The awakened blade must meet the prerequisites of the selected feat.',
    },
    {
      name: 'Situational Awareness (Improved Uncanny Dodge)',
      level: 9,
      description:
        'At 9th level, the awakened blade gains the benefits of improved uncanny dodge as part of his situational awareness. He can no longer be flanked. This defense denies a rogue the ability to sneak attack the awakened blade by flanking him, unless the attacker has at least four more rogue levels than the target has awakened blade levels. If the character already has uncanny dodge from another class, the levels from the classes that grant uncanny dodge stack to determine the minimum rogue level required to flank the character.',
    },
    {
      name: 'Pretercognitive Mind',
      level: 10,
      description:
        'At 10th level, while psionically focused, the awakened blade is considered to have the benefits of the Stance of the Inner Eye without needing to initiate the stance. He may continue to gain these benefits while he adopts any other martial stance that he knows, effectively gaining the benefits of both stances simultaneously. This is a supernatural ability.',
    },
  ],
  spellcasting: {
    type: 'Psychic',
    casting: 'Spontaneous',
    spellList: 'Psychic Warrior',
    spellTableKey: 'AWAKENED_BLADE_MANIFESTING',
  },
  initiating: {
    type: 'Martial',
    initiatingAbility: 'WIS',
    ilProgression: 'full',
    disciplines: ['riven-hourglass', 'sleeping-goddess'],
    progressionTableKey: 'awakened-blade',
    recoveryMechanics: {
      primary: {
        type: 'custom',
        description:
          'The awakened blade uses the recovery mechanism of his base initiating class. At 6th level, whenever the awakened blade recovers one or more maneuvers, he may regain psionic focus as a free action (once per round). Alternately, he may expend psionic focus when manifesting a psionic power to recover an expended maneuver.',
      },
    },
  },
  source: 'Path of War',
};
