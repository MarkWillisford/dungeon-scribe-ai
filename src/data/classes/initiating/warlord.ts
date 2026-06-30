// Warlord — Path of War base class (Dreamscarred Press)
// Source: https://www.d20pfsrd.com/alternative-rule-systems/3rd-party-rules-systems/path-of-war/classes/warlord/

import { BABProgression, BonusType, SaveProgression } from '@/types/base';
import type { ExpandedClassData } from '../types';
import type { InitiatingProgressionTable } from '../initiatingProgressionTables';

// 20-level progression: [maneuversKnown, maneuversReadied, stancesKnown]
export const WARLORD_PROGRESSION: InitiatingProgressionTable = [
  [6, 4, 1], // 1
  [7, 5, 2], // 2
  [8, 5, 2], // 3
  [8, 5, 2], // 4
  [9, 6, 3], // 5
  [9, 6, 3], // 6
  [10, 6, 3], // 7
  [10, 7, 3], // 8
  [11, 7, 4], // 9
  [11, 7, 4], // 10
  [12, 8, 5], // 11
  [12, 8, 5], // 12
  [13, 8, 5], // 13
  [13, 9, 5], // 14
  [14, 9, 6], // 15
  [14, 9, 6], // 16
  [15, 10, 6], // 17
  [16, 10, 7], // 18
  [17, 10, 7], // 19
  [18, 11, 7], // 20
];

export const WARLORD_CLASS: ExpandedClassData = {
  name: 'Warlord',
  category: 'Path of War',
  maxLevel: 20,
  hitDie: 10,
  skillRanksPerLevel: 4,
  classSkills: [
    'Acrobatics',
    'Climb',
    'Craft',
    'Diplomacy',
    'Handle Animal',
    'Intimidate',
    'Knowledge (engineering)',
    'Knowledge (history)',
    'Knowledge (martial)',
    'Perception',
    'Profession',
    'Ride',
    'Sense Motive',
    'Survival',
    'Swim',
  ],
  babProgression: BABProgression.Full,
  saves: {
    fortitude: SaveProgression.Good,
    reflex: SaveProgression.Poor,
    will: SaveProgression.Good,
  },
  weaponProficiencies: ['Simple weapons', 'Martial weapons'],
  armorProficiencies: ['Light armor', 'Medium armor', 'Shields'],
  startingWealth: 'As fighter',
  classFeatures: [
    {
      name: 'Maneuvers',
      level: 1,
      description:
        "A warlord begins his career with knowledge of six martial maneuvers. The disciplines available to him are Golden Lion, Primal Fury, Scarlet Throne, Solar Wind, Thrashing Dragon, and either Piercing Thunder or Tempest Gale. Once he knows a maneuver, he must ready it before he can use it. A maneuver usable by warlords is considered an extraordinary ability unless otherwise noted in its description. The warlord's maneuvers are not affected by spell resistance, and he does not provoke attacks of opportunity when he initiates one. He learns additional maneuvers at higher levels, as shown on the table above. The warlord must meet a maneuver's prerequisite to learn it. Upon reaching 4th level, and at every even numbered warlord level after that, he can choose to learn a new maneuver in place of one he already knows. In effect, the warlord loses the old maneuver in exchange for the new one. The warlord need not replace the old maneuver with a maneuver of the same level. He can choose a new maneuver of any level he likes, as long as he observes his restriction on the highest-level maneuvers he knows. The warlord can swap only a single maneuver at any given level. A warlord's initiation modifier is Charisma.",
      effects: [],
    },
    {
      name: 'Maneuvers Readied',
      level: 1,
      description:
        'A warlord can ready four of his six starting maneuvers, but as he advances in level and learns more maneuvers, he must choose which maneuvers to ready. He readies his maneuvers by going over battle plans, practicing combat maneuvers, and performing weapon drills for 10 minutes. The maneuvers he chooses remain readied until he decides to repeat this again and change them. Warlords do not need to sleep or rest for any long period of time to ready their maneuvers; any time he spends 10 minutes in practice, he can change his readied maneuvers. He may not ready any individual maneuver more than once. He begins an encounter with all readied maneuvers unexpended, regardless of how many times he may have already used them since he chose them. When the warlord initiates a maneuver, he expends it for the current encounter, so each of his readied maneuvers can be used once per encounter (unless he recovers them). Warlords may recover their maneuvers through the use of gambits (see below). Alternatively, he may spend a standard action to recover a single readied maneuver of his choosing.',
      effects: [],
    },
    {
      name: 'Stances Known',
      level: 1,
      description:
        'Warlords begin play with knowledge of one stance from any discipline open to warlords. At the indicated levels (see class table), the warlord selects an additional new stance. Unlike maneuvers, stances are not expended and he does not have to ready them. All the stances he knows are available to him at all times, and he can change the stance he is currently using as a swift action. A stance is an extraordinary ability unless otherwise stated in the stance description. Unlike with maneuvers, the warlord cannot learn a new stance at higher levels in place of one he already knows.',
      effects: [],
    },
    {
      name: "Warlord's Gambit",
      level: 1,
      id: 'warlords-gambit',
      shortDescription:
        'Swift action: attempt a gambit risk to recover maneuvers + ally reward, or fail for 1 maneuver + -2 to all d20 rolls for 1 round',
      activationMode: 'action',
      description:
        "At 1st level, a warlord selects two gambits from the gambits available to warlords. At 4th level and every four levels thereafter, a warlord selects an additional gambit to learn. A gambit has two aspects: a risk and a reward. A gambit's risk describes an action the warlord must take in order to play the gambit. The warlord initiates a gambit as a swift action, then performs the risk action. He may add half his warlord initiation modifier as a luck bonus on any d20 rolls made while performing this action. If successful, he recovers a number of expended maneuvers equal to his warlord initiation modifier (minimum 2) and gains the reward listed in the gambit's description. Allies must be within 60 feet and able to see the gambit to benefit from its reward. If the warlord fails his gambit, he suffers the gambit's rake, recovering only a single expended maneuver and taking a -2 penalty on all d20 rolls for one round.",
      effects: [
        {
          type: 'special',
          target: 'special.warlords_gambit',
          value: 0,
          source: "Warlord's Gambit",
        },
      ],
    },
    {
      name: 'Bonus Feat',
      level: 1,
      description:
        'At 1st level and at 6th level, and then every four levels after, the warlord gains a bonus combat feat or teamwork feat of his choosing. The warlord must qualify for the feat before selecting it.',
      effects: [],
    },
    {
      name: 'Tactical Presence (Indomitable)',
      level: 2,
      id: 'tactical-presence-indomitable',
      shortDescription:
        'Move action (free at 7th): allies within 30ft gain Die Hard and +[CHA mod] morale bonus to Fortitude vs death/fatigue/exhaustion/poison',
      activationMode: 'toggle',
      description:
        "At 2nd level, the warlord's innate charisma allows his very presence to aid and assist not only himself but his allies as well, just by his being around. Adopting a presence is a move-equivalent action, and only one presence may be maintained at any given time. At 7th level, the warlord is capable of adopting a presence as a free action. Indomitable Presence: All allies within 30 ft. of his position gain the benefits of the Die Hard feat, and may add his warlord initiation modifier to Fortitude saves versus death effects, fatigue or exhaustion effects, or poison effects as a morale bonus.",
      effects: [
        {
          type: 'special',
          target: 'special.tactical_presence_indomitable',
          value: 0,
          source: 'Tactical Presence (Indomitable)',
          activation: { type: 'toggle', active: false },
        },
      ],
    },
    {
      name: 'Warleader',
      level: 3,
      id: 'warleader',
      shortDescription: 'Standard action: share teamwork feats with allies within 30ft',
      activationMode: 'action',
      description:
        "The warlord excels in the theater of war because he knows how best to work with his allies. At 3rd level, the warlord becomes an ever more capable commander and may share tactics with his allies. First, the warlord gains a teamwork feat as a bonus feat (he must meet the prerequisites for this feat to select it). As a standard action that the warlord performs, the warlord and allies within 30 ft. of him can share teamwork feats that they possess with each other, acting as if they both possessed the teamwork feat that they are sharing. The warlord can only share one teamwork feat at a time, either one of his own (with all allies within 30 ft. of him) or an ally's (in which case only the warlord receives the ability to use the teamwork feat he does not possess). The warlord and allies retain the use of this feat for 3 + his warlord initiation modifier in rounds. The warlord can use this ability a number of times per day equal to 1 + his warlord initiation modifier, plus one additional time per day at 7th level and every four warlord levels thereafter.",
      resourcePool: {
        id: 'warleader',
        name: 'Warleader',
        rechargeOn: 'rest',
        maxFormula: '1 + chaMod + floor((warlordLevel - 3) / 4)',
        restRecoveryMode: 'full',
      },
      effects: [
        {
          type: 'special',
          target: 'special.warleader',
          value: 0,
          source: 'Warleader',
        },
      ],
    },
    {
      name: 'Force of Personality',
      level: 3,
      description:
        "At 3rd level, the warlord's forceful personality and bold, headstrong nature assist him in resisting the influence of others. Where others use personal serenity, awareness of the world around them, or plain old sensibility, the warlord gets by with endless nerve. The warlord may add his warlord initiation modifier in addition to his Wisdom modifier to determine his Will save bonus. If the character is ever able to add his warlord initiation modifier to his Will save through use of another ability (for example, the paladin's divine grace) he may only add his warlord initiation modifier once to his Will save.",
      effects: [],
    },
    {
      id: 'tactical-flanker',
      name: 'Tactical Flanker',
      level: 4,
      shortDescription:
        'At start of turn: choose an adjacent square; you and allies can use it as your position for flanking until your next turn',
      activationMode: 'action',
      description:
        "At 4th level, the warlord is exceptionally gifted at working with his allies to bring down opponents and his skills assist any who ally with him. At the start of the warlord's turn, he chooses a single square adjacent to him. Until the start of his next turn, he and his allies can treat that square as if it was occupied by him for the purposes of flanking opponents.",
      effects: [
        {
          type: 'special',
          target: 'special.tactical_flanker',
          value: 0,
          source: 'Tactical Flanker',
        },
      ],
    },
    {
      name: "Warlord's Gambit (Additional Gambit)",
      level: 4,
      description:
        'At 4th level and every four levels thereafter, a warlord selects an additional gambit to learn.',
      effects: [],
    },
    {
      name: 'Tactical Presence (Rallying)',
      level: 5,
      id: 'tactical-presence-rallying',
      shortDescription:
        'Allies within 30ft gain +[CHA mod] morale bonus to Will saves vs fear/death/compulsion; ends if warlord is mind-affected',
      activationMode: 'toggle',
      description:
        'Rallying Presence: The sight of a warlord on the battlefield is enough to strengthen the hearts and wills of those who fight beside him in battle. At 5th level, the warlord may add his warlord initiation modifier as a morale bonus to Will saves versus fear, death effect, or compulsion effects to all allies within 30 ft. of his position. If the warlord maintaining this presence becomes cowed, frightened, panicked or falls prey to a hostile mind-affecting ability (such as one that would stun or daze him), compulsion or death effect, this presence immediately ends.',
      effects: [
        {
          type: 'special',
          target: 'special.tactical_presence_rallying',
          value: 0,
          source: 'Tactical Presence (Rallying)',
          activation: { type: 'toggle', active: false },
        },
      ],
    },
    {
      name: 'Battle Prowess +1',
      level: 5,
      id: 'battle-prowess',
      shortDescription:
        '+1 competence bonus to attack rolls, damage rolls, CMB, and CMD when in a stance from chosen discipline',
      activationMode: 'toggle',
      description:
        'The warlord is a skilled combatant, mixing traditional fighting skills with the skill of his martial discipline training. Choose a discipline, and when the warlord is in a martial stance from this chosen discipline, the character gets a +1 competence bonus to attack and damage rolls, CMB rolls, and to his CMD. He may select another discipline at 12th level, and a third discipline at 19th level.',
      effects: [
        {
          type: 'bonus',
          bonusType: BonusType.COMPETENCE,
          target: 'attack.all',
          value: 1,
          source: 'Battle Prowess',
          activation: { type: 'toggle', active: false },
        },
        {
          type: 'bonus',
          bonusType: BonusType.COMPETENCE,
          target: 'damage.all',
          value: 1,
          source: 'Battle Prowess',
          activation: { type: 'toggle', active: false },
        },
        {
          type: 'bonus',
          bonusType: BonusType.COMPETENCE,
          target: 'cmb',
          value: 1,
          source: 'Battle Prowess',
          activation: { type: 'toggle', active: false },
        },
        {
          type: 'bonus',
          bonusType: BonusType.COMPETENCE,
          target: 'cmd',
          value: 1,
          source: 'Battle Prowess',
          activation: { type: 'toggle', active: false },
        },
      ],
    },
    {
      name: 'Dual Boost (1/day)',
      level: 6,
      id: 'dual-boost',
      shortDescription: 'Swift action: initiate two boost maneuvers simultaneously',
      activationMode: 'action',
      description:
        'Knowledgeable in the ways of making the best of any situation through pluck and verve, the warlord is capable of applying multiple martial principles simultaneously. At 6th level, once per day the warlord may initiate two boost type maneuvers as part of the same swift action. He may use this an additional time per day at 12th level, and three times per day at 18th level.',
      resourcePool: {
        id: 'dual_boost',
        name: 'Dual Boost',
        rechargeOn: 'rest',
        maxFormula: 'floor((warlordLevel - 6) / 6) + 1',
        restRecoveryMode: 'full',
      },
      effects: [
        {
          type: 'special',
          target: 'special.dual_boost',
          value: 0,
          source: 'Dual Boost',
        },
      ],
    },
    {
      name: 'Bonus Feat',
      level: 6,
      description:
        'The warlord gains an additional bonus combat feat or teamwork feat of his choosing. The warlord must qualify for the feat before selecting it.',
      effects: [],
    },
    {
      name: 'Tactical Presence (Free Action)',
      level: 7,
      description:
        'At 7th level, the warlord is capable of adopting a presence as a free action instead of a move action.',
      effects: [],
    },
    {
      name: 'Tactical Assistance',
      level: 8,
      id: 'tactical-assistance',
      shortDescription:
        'Move action: aid another for any ally within 30ft, affecting all allies in range',
      activationMode: 'action',
      description:
        "At 8th level, the warlord's gift for helping his allies in combat improves. The character may use the aid another action for any single ally within 30 ft. of his position as a move action, and when he successfully uses the aid another action, it affects all allies within 30 feet.",
      effects: [
        {
          type: 'special',
          target: 'special.tactical_assistance',
          value: 0,
          source: 'Tactical Assistance',
        },
      ],
    },
    {
      name: "Warlord's Gambit (Additional Gambit)",
      level: 8,
      description: 'At 8th level, the warlord selects an additional gambit to learn.',
      effects: [],
    },
    {
      name: 'Tactical Presence (Victorious)',
      level: 9,
      id: 'tactical-presence-victorious',
      shortDescription:
        'When warlord reduces a foe to 0 HP, warlord and allies within 30ft gain (warlord level + CHA mod) temporary HP',
      activationMode: 'toggle',
      description:
        "Victorious Presence: At 9th level, any foe that the warlord brings to 0 or fewer hit points in battle immediately fuels his hunger for the win, granting him and his allies within 30 ft. of his position the character's class level plus his warlord initiation modifier in temporary hit points. These hit points endure until they are lost or until the end of the encounter, whichever occurs first. Damage inflicted on the warlord is deducted from his temporary hit points first before being deducted from his normal hit point total.",
      effects: [
        {
          type: 'special',
          target: 'special.tactical_presence_victorious',
          value: 0,
          source: 'Tactical Presence (Victorious)',
          activation: { type: 'toggle', active: false },
        },
      ],
    },
    {
      name: 'Bonus Feat',
      level: 10,
      description:
        'The warlord gains an additional bonus combat feat or teamwork feat of his choosing. The warlord must qualify for the feat before selecting it.',
      effects: [],
    },
    {
      name: 'Dual Tactical Presence',
      level: 11,
      description:
        'At 11th level, the sight of the warlord on a field of combat inspires multiple feelings in those around him. He may select and use two presences, activating them together as a free action.',
      effects: [],
    },
    {
      name: 'Battle Prowess +2',
      level: 12,
      id: 'battle-prowess-2',
      shortDescription:
        '+2 competence bonus to attack rolls, damage rolls, CMB, and CMD when in a stance from chosen discipline',
      activationMode: 'toggle',
      description:
        'The warlord selects another discipline for Battle Prowess. When in a martial stance from any chosen discipline, the competence bonus to attack and damage rolls, CMB rolls, and CMD increases to +2.',
      effects: [
        {
          type: 'bonus',
          bonusType: BonusType.COMPETENCE,
          target: 'attack.all',
          value: 2,
          source: 'Battle Prowess',
          activation: { type: 'toggle', active: false },
        },
        {
          type: 'bonus',
          bonusType: BonusType.COMPETENCE,
          target: 'damage.all',
          value: 2,
          source: 'Battle Prowess',
          activation: { type: 'toggle', active: false },
        },
        {
          type: 'bonus',
          bonusType: BonusType.COMPETENCE,
          target: 'cmb',
          value: 2,
          source: 'Battle Prowess',
          activation: { type: 'toggle', active: false },
        },
        {
          type: 'bonus',
          bonusType: BonusType.COMPETENCE,
          target: 'cmd',
          value: 2,
          source: 'Battle Prowess',
          activation: { type: 'toggle', active: false },
        },
      ],
    },
    {
      name: 'Dual Boost (2/day)',
      level: 12,
      description: 'The warlord may now use Dual Boost two times per day.',
      effects: [],
    },
    {
      name: "Warlord's Gambit (Additional Gambit)",
      level: 12,
      description: 'At 12th level, the warlord selects an additional gambit to learn.',
      effects: [],
    },
    {
      name: 'Improved Warleader',
      level: 13,
      description:
        "At 13th level, the warlord's excellence in battle has enabled him to utilize the tactical skills of his allies as well as his own with greater speed. The warlord may now use his warleader class feature as a move action.",
      effects: [],
    },
    {
      name: 'Bonus Feat',
      level: 14,
      description:
        'The warlord gains an additional bonus combat feat or teamwork feat of his choosing. The warlord must qualify for the feat before selecting it.',
      effects: [],
    },
    {
      name: "Warlord's Presence",
      level: 15,
      description:
        'At 15th level, the warlord is capable of using three of his presences together at the same time, activating them together as a free action.',
      effects: [],
    },
    {
      name: "Warlord's Gambit (Additional Gambit)",
      level: 16,
      description: 'At 16th level, the warlord selects an additional gambit to learn.',
      effects: [],
    },
    {
      name: 'Master Warleader',
      level: 17,
      description:
        "At 17th level, the warlord's peerless ability in the theater of war has enabled him to utilize the tactical skills of his allies as well as his own with the greatest of speed. The warlord may now use his warleader class feature as a swift action.",
      effects: [],
    },
    {
      name: 'Bonus Feat',
      level: 18,
      description:
        'The warlord gains an additional bonus combat feat or teamwork feat of his choosing. The warlord must qualify for the feat before selecting it.',
      effects: [],
    },
    {
      name: 'Dual Boost (3/day)',
      level: 18,
      description: 'The warlord may now use Dual Boost three times per day.',
      effects: [],
    },
    {
      name: 'Battle Prowess +3',
      level: 19,
      id: 'battle-prowess-3',
      shortDescription:
        '+3 competence bonus to attack rolls, damage rolls, CMB, and CMD when in a stance from chosen discipline',
      activationMode: 'toggle',
      description:
        'The warlord selects a third discipline for Battle Prowess. When in a martial stance from any chosen discipline, the competence bonus to attack and damage rolls, CMB rolls, and CMD increases to +3.',
      effects: [
        {
          type: 'bonus',
          bonusType: BonusType.COMPETENCE,
          target: 'attack.all',
          value: 3,
          source: 'Battle Prowess',
          activation: { type: 'toggle', active: false },
        },
        {
          type: 'bonus',
          bonusType: BonusType.COMPETENCE,
          target: 'damage.all',
          value: 3,
          source: 'Battle Prowess',
          activation: { type: 'toggle', active: false },
        },
        {
          type: 'bonus',
          bonusType: BonusType.COMPETENCE,
          target: 'cmb',
          value: 3,
          source: 'Battle Prowess',
          activation: { type: 'toggle', active: false },
        },
        {
          type: 'bonus',
          bonusType: BonusType.COMPETENCE,
          target: 'cmd',
          value: 3,
          source: 'Battle Prowess',
          activation: { type: 'toggle', active: false },
        },
      ],
    },
    {
      name: "Warlord's Gambit (Additional Gambit)",
      level: 20,
      description: 'At 20th level, the warlord selects an additional gambit to learn.',
      effects: [],
    },
    {
      name: 'Dual Stance',
      level: 20,
      description:
        "At 20th level, the warlord's ability to use his stances improves, allowing him to gain the benefits of two known stances simultaneously. He must still adopt each stance individually, requiring him to expend one swift action for each stance.",
      effects: [],
    },
  ],
  spellcasting: {
    type: 'None',
    casting: 'None',
  },
  initiating: {
    type: 'Martial',
    initiatingAbility: 'CHA',
    ilProgression: 'full',
    disciplines: [
      'golden-lion',
      'primal-fury',
      'scarlet-throne',
      'solar-wind',
      'thrashing-dragon',
      'piercing-thunder', // choice: Piercing Thunder OR Tempest Gale
    ],
    progressionTableKey: 'warlord',
    recoveryMechanics: {
      primary: { type: 'gambit' },
      secondary: { type: 'standard_one' },
    },
  },
  source: 'Path of War',
};
