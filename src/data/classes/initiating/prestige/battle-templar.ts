// Battle Templar — Path of War: Expanded prestige class (Dreamscarred Press)
// Source: https://www.d20pfsrd.com/alternative-rule-systems/3rd-party-rules-systems/path-of-war/prestige-classes/battle-templar/

import { BABProgression, SaveProgression } from '@/types/base';
import type { ExpandedClassData } from '../../types';
import type { InitiatingProgressionTable } from '../../initiatingProgressionTables';

// Incremental gains per level: [maneuversKnown, maneuversReadied, stancesKnown]
// Levels 1-10
export const BATTLE_TEMPLAR_PROGRESSION: InitiatingProgressionTable = [
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

export const BATTLE_TEMPLAR_CLASS: ExpandedClassData = {
  name: 'Battle Templar',
  category: 'Prestige',
  maxLevel: 10,
  hitDie: 8,
  skillRanksPerLevel: 4,
  classSkills: [
    'Craft',
    'Diplomacy',
    'Heal',
    'Intimidate',
    'Knowledge (martial)',
    'Knowledge (religion)',
    'Spellcraft',
  ],
  babProgression: BABProgression.Medium,
  saves: {
    fortitude: SaveProgression.Good,
    reflex: SaveProgression.Poor,
    will: SaveProgression.Poor,
  },
  weaponProficiencies: [],
  armorProficiencies: ['Heavy armor', 'Shields (except tower shields)'],
  classFeatures: [
    {
      name: 'Weapon and Armor Proficiency',
      level: 1,
      description:
        'The battle templar gains no new weapon proficiencies, and gains proficiency in heavy armor and with shields (except tower shields).',
    },
    {
      name: 'Maneuvers',
      level: 1,
      description:
        "A battle templar adds Black Seraph (if he is evil-aligned) or Silver Crane (if he is good-aligned) to his list of available disciplines. If the battle templar is neither good nor evil, he chooses between the two disciplines. If he does not have that discipline's associated skill as a class skill, he gains it as a class skill. At each even level, a battle templar gains new maneuvers known chosen from this discipline, the Golden Lion discipline, and two disciplines of his choosing that he previously had access to (either from a martial disciple class or through the Martial Training feat). The battle templar must meet a maneuver's prerequisite to learn it. The character adds his full battle templar levels to his initiator level to determine his total initiator level and his highest-level maneuvers known. At 3rd, 6th, and 9th levels, the battle templar gains additional maneuvers readied per day.",
    },
    {
      name: 'Stances Known',
      level: 1,
      description:
        'At 4th, 6th, and 10th levels, the battle templar learns a new stance from any of his available disciplines.',
    },
    {
      name: 'Ordained Knight',
      level: 1,
      description:
        "A battle templar fulfills a role special to his religion, and as such, may act both as courageous warrior and as pious priest. He receives a circumstance bonus on Diplomacy checks equal to his class level when dealing with members of his faith. If the character possessed a unique divine ability from a previous class (the class features channel energy, a cleric's domains, a paladin's lay on hands, an inquisitor's bane or inquisitions, or an oracle's curse), he may add his levels in battle templar to that class to determine their effectiveness. Additionally, should the battle templar possess the aegis class feature, the battle templar may add his class level to his warder level to determine the bonus of his aegis class feature.",
    },
    {
      name: 'Spellcasting Advancement',
      level: 2,
      description:
        'At each level except the 1st and 10th levels, the battle templar gains new spells per day as if he had also gained a level in a divine spellcasting class he belonged to before adding the prestige class. He does not, however, gain other benefits a character of that class would have gained, except for additional spells per day, spells known (if he is a spontaneous spellcaster), and an increased effective level of spellcasting. If the character had more than one divine spellcasting class before becoming a battle templar, he must decide to which class he adds the new level for purposes of determining spells per day.',
    },
    {
      name: 'Reach of the Divine',
      level: 2,
      description:
        'At 2nd level, the battle templar is capable of aiding an ally with every strike of his weapon or bash of his shield through the use of his divine magic. Whenever the battle templar initiates a martial strike, he may cast a divine spell (with a level equal to or less than the level of the strike initiated) on himself or an ally within touch range as a move action. He must cast this defensively if he is casting within a threatened area to avoid provoking attacks of opportunity.',
    },
    {
      name: 'Martial Healing',
      level: 3,
      description:
        "The battle templar's divine power is so firmly blended with his martial talents that when he utilizes a martial maneuver, the power of his faith infuses it and aids him and his allies. When the battle templar initiates a martial strike, as a swift action he can heal himself or an ally within close range (25 ft. plus 5 ft. per two initiator levels) for 1d4 per maneuver level + the battle templar's class level in hit points.",
    },
    {
      name: 'Divine Recovery',
      level: 4,
      description:
        "Beginning at 4th level, a battle templar may channel divine power to recharge his martial maneuvers. As a swift action, the character can recover an expended maneuver by sacrificing a spell with a level equal to or greater than the maneuver's. If the spell's level is higher than the maneuver's level, then additional level 'overage' restores 1d8 hit points of damage to the battle templar per excess spell level.",
    },
    {
      name: 'Guardian of the Faith',
      level: 5,
      description:
        'At 5th level, the battle templar learns a signature stance of his calling, and with it he can better protect himself and those he considers his allies. This is a 5th level stance of no particular discipline. To enter this stance, as a swift action the battle templar abandons a martial stance he is currently using. The benefits of this ability end if the battle templar assumes a martial stance. Once within this stance, the battle templar gains damage reduction 10/adamantine, and allies within 20 ft of his position (excluding himself) gain a +4 sacred or profane (alignment dependent) bonus to AC, CMD, and to saving throws.',
    },
    {
      name: 'Shepherd the Flock',
      level: 6,
      description:
        'Those under his care must be protected; a credo of the battle templar. At 6th level, the battle templar\'s spells take on a defensive nature as he casts them to protect himself and his allies. Whenever he casts a spell through his Reach of the Divine class feature, the target also gains a +4 sacred or profane (alignment dependent) bonus to their AC for one minute (multiple uses of this ability do not increase the duration or the protection of this ability).',
    },
    {
      name: 'Wrath of the Faithful',
      level: 7,
      description:
        'At 7th level, the power of his faith fuses with the martial temper that brews within the battle templar, and when he casts his mighty divine spells, they inspire him to battle. When the battle templar casts a divine spell, the next martial strike he initiates within one minute of casting gains a morale bonus to damage rolls equal to the level of the spell cast.',
    },
    {
      name: 'Divine Inspiration',
      level: 8,
      description:
        "At 8th level, the battle templar is capable of utilizing the guidance of his divine magic to enlighten others and restore their martial talents should they be depleted. As an immediate action, the battle templar selects an ally within close range (25 ft. plus an additional 5 ft. per two initiator levels) and expends his divine spell energy to allow the ally to recover a maneuver as if the ally had used the battle templar's divine recovery class feature.",
    },
    {
      name: 'Bolstering Channel',
      level: 9,
      description:
        'At 9th level, the battle templar may channel the energy of his god while recovering his martial strength. As a standard action, the battle templar recovers a single maneuver and may channel energy as part of that action.',
    },
    {
      name: 'Battlefield Invocation',
      level: 10,
      description:
        "At 10th level, the battle templar has reached a pinnacle of divine power and martial prowess that few ever do, and as such, is capable of amazing feats of skill. The battle templar expends a 4th level or higher spell slot as a free action and initiates a martial strike as normal. Allies (excluding the battle templar) within 60 ft. of his position witnessing this are invigorated by his power, and regain 10 hit points per level of the spell sacrificed to power this ability and a +4 morale bonus to attack and damage rolls for one round. This ability does not combine with the Reach of the Divine or the Shepherd the Flock class features.",
    },
  ],
  prerequisites: {
    skills: [
      { name: 'Knowledge (martial)', ranks: 2 },
      { name: 'Knowledge (religion)', ranks: 2 },
      { name: 'Spellcraft', ranks: 5 },
    ],
    feats: ['Discipline Focus (Golden Lion or Iron Tortoise)', 'Martial Power'],
    spellcasting: 'Ability to cast 2nd-level divine spells',
    special: [
      'Ability to use maneuvers from Golden Lion or Iron Tortoise discipline, including at least one strike and one stance',
    ],
  },
  spellcasting: {
    type: 'Divine',
    casting: 'Prepared',
    spellList: 'Advances existing divine spellcasting class (levels 2-9)',
  },
  initiating: {
    type: 'Martial',
    initiatingAbility: 'WIS',
    ilProgression: 'full',
    disciplines: [
      'golden-lion',
      'silver-crane',
      'black-seraph',
    ],
    progressionTableKey: 'battle-templar',
    recoveryMechanics: {
      primary: {
        type: 'custom',
        description:
          "The battle templar recovers maneuvers through Divine Recovery: as a swift action, sacrifice a spell with a level equal to or greater than the maneuver's to recover it. Excess spell levels restore 1d8 hit points per level. At 9th level via Bolstering Channel, the battle templar may recover a single maneuver as a standard action and channel energy as part of that action.",
      },
    },
  },
  source: 'Path of War: Expanded',
};
