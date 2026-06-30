// Harbinger — Path of War: Expanded initiating class (Dreamscarred Press)
// Source: https://www.d20pfsrd.com/alternative-rule-systems/3rd-party-rules-systems/path-of-war/classes/harbinger

import { BABProgression, BonusType, SaveProgression } from '@/types/base';
import type { ExpandedClassData } from '../types';
import type { InitiatingProgressionTable } from '../initiatingProgressionTables';

// [maneuversKnown, maneuversReadied, stancesKnown] per level 1-20
export const HARBINGER_PROGRESSION: InitiatingProgressionTable = [
  [5, 3, 1], // 1
  [6, 4, 2], // 2
  [7, 4, 2], // 3
  [7, 4, 2], // 4
  [8, 5, 3], // 5
  [8, 5, 3], // 6
  [9, 5, 3], // 7
  [9, 6, 3], // 8
  [10, 6, 4], // 9
  [10, 6, 4], // 10
  [11, 7, 5], // 11
  [11, 7, 5], // 12
  [12, 7, 5], // 13
  [12, 8, 5], // 14
  [13, 8, 6], // 15
  [13, 8, 6], // 16
  [14, 9, 6], // 17
  [14, 9, 7], // 18
  [15, 9, 7], // 19
  [16, 10, 7], // 20
];

export const HARBINGER_CLASS: ExpandedClassData = {
  name: 'Harbinger',
  category: 'Path of War: Expanded',
  maxLevel: 20,
  hitDie: 8,
  skillRanksPerLevel: 4,
  classSkills: [
    'Acrobatics',
    'Autohypnosis',
    'Bluff',
    'Climb',
    'Craft',
    'Diplomacy',
    'Fly',
    'Heal',
    'Intimidate',
    'Knowledge (arcana)',
    'Knowledge (local)',
    'Knowledge (martial)',
    'Knowledge (nobility)',
    'Knowledge (religion)',
    'Linguistics',
    'Profession',
    'Sense Motive',
    'Spellcraft',
    'Stealth',
    'Survival',
  ],
  babProgression: BABProgression.Medium,
  saves: {
    fortitude: SaveProgression.Good,
    reflex: SaveProgression.Poor,
    will: SaveProgression.Good,
  },
  weaponProficiencies: ['Simple weapons', 'Martial melee weapons'],
  armorProficiencies: ['Light armor', 'Shields (except tower shields)'],
  alignment: 'Any',
  classFeatures: [
    {
      name: 'Maneuvers',
      level: 1,
      description:
        "A harbinger begins her career with knowledge of five martial maneuvers. The disciplines available to her are Cursed Razor, Riven Hourglass, Scarlet Throne, Shattered Mirror, and Veiled Moon. The harbinger gains the associated skill of each of her disciplines as a class skill if it is not already on her class skill list. Once she knows a maneuver, she must ready it before she can use it (see Maneuvers Readied). A maneuver usable by harbingers is considered an extraordinary ability unless otherwise noted in it or its discipline's description. A harbinger's maneuvers are not affected by spell resistance, and she does not provoke attacks of opportunity when she initiates one. She learns additional maneuvers at higher levels, as shown on the class table. The harbinger must meet a maneuver's prerequisite to learn it. A harbinger adds her Intelligence modifier to any d20 rolls made as part of a maneuver (the harbinger's initiation modifier is Intelligence). Upon reaching 4th level, and at every even numbered harbinger level after that, she can choose to learn a new maneuver in place of one she already knows. In effect, the harbinger loses the old maneuver in exchange for the new one. The harbinger need not replace the old maneuver with a maneuver of the same level. She can choose a new maneuver of any level she likes, as long as she observes her restriction on the highest-level maneuvers she knows.",
      effects: [],
    },
    {
      name: 'Maneuvers Readied',
      level: 1,
      description:
        'A harbinger can ready three of her five maneuvers known at 1st level, but as she advances in level and learns more maneuvers, she must choose which maneuvers to ready. She readies her maneuvers by meditating over the nature of malevolence, honing her killer instinct, dwelling upon grief and sorrow, or otherwise communing with her negative side for ten minutes. The maneuvers she chooses remain readied until she decides to repeat this again and change them. The harbinger does not need to sleep or rest for any long period of time in order to ready her maneuvers; any time she spends ten minutes in communion with her darker urges, she can change her readied maneuvers. She may not ready any individual maneuver more than once. She begins an encounter with all readied maneuvers unexpended, regardless of how many times she may have already used them since she chose them. When the harbinger initiates a maneuver, she expends it for the current encounter, so each of her readied maneuvers can be used once per encounter (until she recovers them). In order for the harbinger to recover maneuvers, she must tap into her sorcerous malice by activating her dark claim class feature; the harbinger recovers a single expended maneuver whenever she Claims a creature, and she recovers a number of expended maneuvers equal to her harbinger initiation modifier (minimum 2) whenever a creature she has Claimed is reduced to 0 or fewer hit points. Alternately, the harbinger may concentrate on her inner negativity and recover a single maneuver as a standard action.',
      effects: [],
    },
    {
      name: 'Stances Known',
      level: 1,
      description:
        'Harbingers begin play with knowledge of one stance from any discipline open to harbingers. At the indicated levels (see class table), the harbinger selects an additional new stance. Unlike maneuvers, stances are not expended and the harbinger does not have to ready them. All the stances she knows are available to her at all times, and she can change the stance she is currently maintaining as a swift action. A stance is an extraordinary ability unless otherwise stated in the stance description. Unlike with maneuvers, the harbinger cannot learn a new stance at higher levels in place of one she already knows.',
      effects: [],
    },
    {
      name: 'Accursed Will',
      level: 1,
      description:
        'Starting at 1st level, the harbinger gains an insight bonus on attack rolls equal to 1/2 her harbinger initiation modifier (minimum +1). At 10th level, she gains an insight bonus on damage rolls equal to her harbinger initiation modifier.',
      effects: [],
    },
    {
      name: 'Dark Claim',
      level: 1,
      id: 'dark-claim',
      shortDescription: 'Mark a creature within close range as Claimed (swift action)',
      activationMode: 'action',
      description:
        'Starting at 1st level, a harbinger gains the ability to reach out with her sorcerous malice, marking foes as her own. As a swift action, the harbinger may Claim an opponent that she can see (including with special senses such as blindsense or tremorsense) within close range (25 feet + 5 feet per 2 harbinger levels) for a number of rounds equal to 1/2 her class level (minimum 1 round). A harbinger can have a maximum number of creatures Claimed equal to her harbinger initiation modifier (minimum 1), and may not Claim a creature she has already Claimed until or unless the Claim expires. Claimed creatures using the Withdraw action to leave a square threatened by the harbinger provoke attacks of opportunity from her. In addition, the harbinger automatically knows the position of creatures she has Claimed. Any opponent the harbinger cannot see still has total concealment (50% miss chance) against her, and the harbinger still suffers the normal miss chance when attacking creatures that have concealment. The harbinger is still denied her Dexterity bonus to her AC against attacks from Claimed creatures she cannot see.',
      effects: [
        {
          type: 'special',
          target: 'special.dark_claim',
          value: 0,
          source: 'Dark Claim',
        },
      ],
    },
    {
      name: 'Ill Tidings',
      level: 1,
      description:
        "Like unwanted news, the harbinger travels swiftly. At 1st level, a harbinger gains a +10-foot competence bonus to her movement speeds. At 10th level, this bonus increases to +20 feet. Apply this bonus before modifying the harbinger's movement speeds because of any load carried or armor worn.",
      effects: [],
    },
    {
      name: 'Dark Focus',
      level: 2,
      description:
        "Though all harbingers tap into violence and sorrow, they inevitably specialize in a method of combat that calls to them deep within themselves. At 2nd level, a harbinger selects one discipline she has access to from her harbinger levels to be her dark focus. She gains a +1 bonus on attack and damage rolls when initiating strikes and counters from her dark focus discipline. The bonus to attack and damage rolls increases by +1 at 5th level and every four levels thereafter. In addition, she gains a +1 bonus to the save DCs of maneuvers from her dark focus discipline. At 6th level, the harbinger gains either Advanced Study or Discipline Focus in her dark focus discipline as a bonus feat, even if she does not meet the prerequisites. In the case of Advanced Study, both maneuvers selected must be from her dark focus discipline. At 10th level, the harbinger selects a second discipline as her dark focus in addition to her original dark focus discipline. She does not gain an additional bonus feat, although the other bonuses from her dark focus class feature apply to the second discipline as well. At 14th level, the harbinger's dedication bears violent fruit. She may expend a readied maneuver to spontaneously initiate any maneuver she knows from her dark focus disciplines that is one or more levels lower than the expended maneuver, regardless of whether or not she has the dark focus maneuver readied. The initiation action of the spontaneously initiated maneuver is unchanged. At 20th level, the harbinger treats all maneuvers from her dark focus disciplines as being readied at the beginning of each encounter, in addition to her normal pool of readied maneuvers.",
      effects: [],
    },
    {
      name: 'Grim News',
      level: 3,
      id: 'grim-news',
      shortDescription:
        'Move up to speed as a swift action (1/encounter, scaling at levels 9 and 15)',
      activationMode: 'action',
      description:
        "Like a ghost or a rumor, the harbinger moves with supernatural acumen. Starting at 3rd level, a harbinger can move up to her speed as a swift action once per encounter. She can use this ability twice per encounter at 9th level, and three times per encounter at 15th level. At 9th level and again at 15th level, the harbinger selects one of the following abilities. Once made, her choice is permanent and cannot be changed. Dark Wings: The harbinger gains a fly speed equal to her base land speed, with good maneuverability. This flight is supernatural in nature. Omenwalk: The harbinger gains the ability to teleport up to her speed as a move action. The harbinger does not need line of effect or line of sight to her destination, although she still provokes attacks of opportunity for leaving a threatened square when using this ability. Spider's Boon: The harbinger gains a climb speed equal to her base land speed. In addition, she develops a sticky grip that aids her in battle, granting her a +4 racial bonus on grapple checks and to her CMD. Water Dweller: The harbinger gains a swim speed equal to her base land speed. In addition, the harbinger no longer needs to breathe and becomes immune to inhaled poisons.",
      resourcePool: {
        id: 'grim_news',
        name: 'Grim News',
        rechargeOn: 'per_encounter',
        maxFormula: '1 + floor(harbingerLevel / 9) + floor(harbingerLevel / 15)',
        restRecoveryMode: 'full',
      },
      effects: [
        {
          type: 'special',
          target: 'special.grim_news',
          value: 0,
          source: 'Grim News',
        },
      ],
    },
    {
      name: 'Massacre',
      level: 4,
      id: 'massacre',
      shortDescription:
        'Initiate a readied strike as immediate action when reducing foe to 0 HP (1/encounter)',
      activationMode: 'action',
      description:
        'The scent of blood in the air and the gentle throb of fading life force impels the harbinger to further heights of violence. Starting at 4th level, a harbinger can initiate one of her readied strikes against an adjacent creature as an immediate action when she reduces an opponent to 0 or fewer hit points. She can only initiate strikes with an initiation action of one standard action with this ability. The harbinger can use this ability once per encounter at 4th level, twice per encounter at 10th level, and three times per encounter at 16th level.',
      resourcePool: {
        id: 'massacre',
        name: 'Massacre',
        rechargeOn: 'per_encounter',
        maxFormula: '1 + floor(harbingerLevel / 10) + floor(harbingerLevel / 16)',
        restRecoveryMode: 'full',
      },
      effects: [
        {
          type: 'special',
          target: 'special.massacre',
          value: 0,
          source: 'Massacre',
        },
      ],
    },
    {
      name: 'Elusive Shadow',
      level: 5,
      id: 'elusive-shadow',
      shortDescription:
        '+2 dodge to AC and Reflex saves (toggle on when you have moved 10+ ft this round)',
      activationMode: 'toggle',
      description:
        "The harbinger's unnatural alacrity protects her from harm as she shies away from whirling blades and streaking spells alike. Starting at 5th level, a harbinger gains a +2 dodge bonus to her AC and Reflex saves during any round in which she has moved at least 10 feet (including by teleportation effects such as omenwalk).",
      effects: [
        {
          type: 'bonus',
          bonusType: BonusType.DODGE,
          target: 'ac.dodge',
          value: 2,
          source: 'Elusive Shadow',
          activation: { type: 'toggle', active: false },
        },
        {
          type: 'bonus',
          bonusType: BonusType.DODGE,
          target: 'save.reflex',
          value: 2,
          source: 'Elusive Shadow',
          activation: { type: 'toggle', active: false },
        },
      ],
    },
    {
      name: 'Dark Focus Bonus Feat',
      level: 6,
      description:
        'At 6th level, the harbinger gains either Advanced Study or Discipline Focus in her dark focus discipline as a bonus feat, even if she does not meet the prerequisites. In the case of Advanced Study, both maneuvers selected must be from her dark focus discipline.',
      effects: [],
    },
    {
      name: 'Sorcerous Deception',
      level: 7,
      description:
        'Having become adept at concealing the malice within, the harbinger develops the ability to allay the suspicions of those who investigate her with magic. At 7th level, a harbinger can use magic aura as a spell-like ability at will, with a caster level equal to her harbinger level. She may only target items and objects she is attending, carrying, wearing, or wielding.',
      effects: [
        {
          type: 'special',
          target: 'special.sorcerous_deception',
          value: 0,
          source: 'Sorcerous Deception',
        },
      ],
    },
    {
      name: 'Ill Intentions',
      level: 8,
      description:
        'Those cornered by the harbinger and her allies feel the weight of her malice pressing down against them. Starting at 8th level, whenever a harbinger and one or more of her allies flank a creature, that creature suffers a -2 penalty on saving throws and skill checks.',
      effects: [
        {
          type: 'special',
          target: 'special.ill_intentions',
          value: 0,
          source: 'Ill Intentions',
        },
      ],
    },
    {
      name: 'Grim News Improvement',
      level: 9,
      description:
        "At 9th level, the harbinger can use Grim News twice per encounter. She also selects one of the following movement abilities: Dark Wings, Omenwalk, Spider's Boon, or Water Dweller. See the Grim News class feature for details.",
      effects: [],
    },
    {
      name: 'Accursed Will Improvement',
      level: 10,
      description:
        'At 10th level, the harbinger gains an insight bonus on damage rolls equal to her harbinger initiation modifier.',
      effects: [],
    },
    {
      name: 'Ill Tidings Improvement',
      level: 10,
      description:
        "At 10th level, the harbinger's competence bonus to movement speeds from Ill Tidings increases to +20 feet.",
      effects: [],
    },
    {
      name: 'Dark Focus: Second Discipline',
      level: 10,
      description:
        'At 10th level, the harbinger selects a second discipline as her dark focus in addition to her original dark focus discipline. She does not gain an additional bonus feat, although the other bonuses from her dark focus class feature apply to the second discipline as well.',
      effects: [],
    },
    {
      name: 'Massacre Improvement',
      level: 10,
      description: 'At 10th level, the harbinger can use Massacre twice per encounter.',
      effects: [],
    },
    {
      name: 'Black Omen',
      level: 11,
      id: 'black-omen',
      shortDescription: 'Move up to half speed as an immediate action (1/encounter)',
      activationMode: 'action',
      description:
        'Like misfortune, the harbinger does not seem to move so much as simply arrive. Starting at 11th level, a harbinger may move up to half her speed as an immediate action once per encounter.',
      resourcePool: {
        id: 'black_omen',
        name: 'Black Omen',
        rechargeOn: 'per_encounter',
        maxFormula: '1',
        restRecoveryMode: 'full',
      },
      effects: [
        {
          type: 'special',
          target: 'special.black_omen',
          value: 0,
          source: 'Black Omen',
        },
      ],
    },
    {
      name: 'Bleak Prophecy',
      level: 12,
      description:
        'Those claimed by the harbinger are filled with dreadful visions of their own demise. Starting at 12th level, creatures Claimed by a harbinger become shaken while the Claim persists.',
      effects: [
        {
          type: 'special',
          target: 'special.bleak_prophecy',
          value: 0,
          source: 'Bleak Prophecy',
        },
      ],
    },
    {
      name: 'Dark Murmur',
      level: 13,
      description:
        "Those claimed by the harbinger find her as hard to catch as rumor itself. Starting at 13th level, the harbinger's movement no longer provokes attacks of opportunity from creatures she has Claimed.",
      effects: [
        {
          type: 'special',
          target: 'special.dark_murmur',
          value: 0,
          source: 'Dark Murmur',
        },
      ],
    },
    {
      name: 'Dark Focus: Spontaneous Initiation',
      level: 14,
      description:
        "At 14th level, the harbinger's dedication bears violent fruit. She may expend a readied maneuver to spontaneously initiate any maneuver she knows from her dark focus disciplines that is one or more levels lower than the expended maneuver, regardless of whether or not she has the dark focus maneuver readied. The initiation action of the spontaneously initiated maneuver is unchanged.",
      effects: [],
    },
    {
      name: 'Grim News Improvement',
      level: 15,
      description:
        "At 15th level, the harbinger can use Grim News three times per encounter. She also selects a second movement ability from the Grim News options: Dark Wings, Omenwalk, Spider's Boon, or Water Dweller.",
      effects: [],
    },
    {
      name: 'Massacre Improvement',
      level: 16,
      description: 'At 16th level, the harbinger can use Massacre three times per encounter.',
      effects: [],
    },
    {
      name: 'Rumors of War',
      level: 17,
      id: 'rumors-of-war',
      shortDescription:
        'Move and initiate a strike at any point during the movement (full-round action)',
      activationMode: 'action',
      description:
        'The harbinger sweeps through her enemies, spreading pain and woe wherever she steps. Starting at 17th level, a harbinger may move up to her speed and initiate a single strike at any point in the movement as a full-round action.',
      effects: [
        {
          type: 'special',
          target: 'special.rumors_of_war',
          value: 0,
          source: 'Rumors of War',
        },
      ],
    },
    {
      name: 'Voices in the Dark',
      level: 18,
      description:
        'Like a dark voice on the edge of hearing, the harbinger persecutes her enemies. Starting at 18th level, a harbinger can initiate a strike whenever she would normally be able to make an attack of opportunity (she still expends the attack of opportunity). She can only initiate strikes with an initiation action of one standard action with this ability.',
      effects: [],
    },
    {
      name: 'Whispers of Atrocity',
      level: 19,
      description:
        "There is no resisting the harbinger's malice. Starting at 19th level, maneuvers initiated by a harbinger ignore all immunities possessed by their targets.",
      effects: [],
    },
    {
      name: 'Dark Focus: Supremacy',
      level: 20,
      description:
        'At 20th level, the harbinger treats all maneuvers from her dark focus disciplines as being readied at the beginning of each encounter, in addition to her normal pool of readied maneuvers.',
      effects: [],
    },
  ],
  spellcasting: {
    type: 'None',
    casting: 'None',
  },
  initiating: {
    type: 'Martial',
    initiatingAbility: 'INT',
    ilProgression: 'full',
    disciplines: [
      'cursed-razor',
      'riven-hourglass',
      'scarlet-throne',
      'shattered-mirror',
      'veiled-moon',
    ],
    progressionTableKey: 'harbinger',
    recoveryMechanics: {
      primary: {
        type: 'custom',
        description:
          'The harbinger recovers a single expended maneuver whenever she Claims a creature using her dark claim class feature, and she recovers a number of expended maneuvers equal to her harbinger initiation modifier (minimum 2) whenever a creature she has Claimed is reduced to 0 or fewer hit points.',
      },
      secondary: { type: 'standard_one' },
    },
  },
  source: 'Path of War: Expanded',
};
