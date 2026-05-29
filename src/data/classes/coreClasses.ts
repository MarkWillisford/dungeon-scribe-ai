// Core Classes — all 11 classes from the Core Rulebook, full levels 1-20
// Source: https://www.d20pfsrd.com/classes/core-classes/

import { BABProgression, SaveProgression } from '@/types/base';
import { ExpandedClassData } from './types';

export const CORE_CLASSES_EXPANDED: ExpandedClassData[] = [
  {
    name: 'Barbarian',
    category: 'Core',
    maxLevel: 20,
    hitDie: 12,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Climb',
      'Craft',
      'Handle Animal',
      'Intimidate',
      'Knowledge (nature)',
      'Perception',
      'Profession',
      'Ride',
      'Survival',
      'Swim',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Shields'],
    startingWealth: '3d6 × 10 gp',
    alignment: 'Any non-lawful',
    classFeatures: [
      {
        name: 'Fast Movement',
        level: 1,
        description:
          "A barbarian's land speed is faster than the norm for her race by +10 feet. This benefit applies only when she is wearing no armor, light armor, or medium armor, and not carrying a heavy load.",
      },
      {
        name: 'Rage',
        level: 1,
        description:
          'A barbarian can call upon inner reserves of strength and ferocity, granting her additional combat prowess. A barbarian can rage for a number of rounds per day equal to 4 + her Constitution modifier. At each level after 1st, she can rage for 2 additional rounds. While in rage, a barbarian gains a +4 morale bonus to her Strength and Constitution, as well as a +2 morale bonus on Will saves. She also takes a –2 penalty to Armor Class. A barbarian is fatigued after rage.',
      },
      {
        name: 'Rage Power',
        level: 2,
        description:
          'As a barbarian gains levels, she learns to use her rage in new ways. Starting at 2nd level, a barbarian gains a rage power. She gains another rage power for every two levels of barbarian attained after 2nd level.',
      },
      {
        name: 'Uncanny Dodge',
        level: 2,
        description:
          'At 2nd level, a barbarian gains the ability to react to danger before her senses would normally allow her to do so. She cannot be caught flat-footed, nor does she lose her Dex bonus to AC if the attacker is invisible.',
      },
      {
        name: 'Trap Sense +1',
        level: 3,
        description:
          'At 3rd level, a barbarian gains a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses increase by +1 every three barbarian levels thereafter.',
      },
      {
        name: 'Rage Power',
        level: 4,
        description: 'The barbarian gains an additional rage power.',
      },
      {
        name: 'Improved Uncanny Dodge',
        level: 5,
        description:
          'At 5th level, a barbarian can no longer be flanked. This defense denies another rogue the ability to sneak attack the character by flanking her, unless the attacker has at least four more rogue levels than the target has barbarian levels.',
      },
      {
        name: 'Rage Power',
        level: 6,
        description: 'The barbarian gains an additional rage power.',
      },
      { name: 'Trap Sense +2', level: 6, description: 'Trap sense bonus increases to +2.' },
      {
        name: 'Damage Reduction 1/—',
        level: 7,
        description:
          'At 7th level, a barbarian gains damage reduction. Subtract 1 from the damage the barbarian takes each time she is dealt damage from a weapon or natural attack. This increases by 1 for every three barbarian levels beyond 7th.',
      },
      {
        name: 'Rage Power',
        level: 8,
        description: 'The barbarian gains an additional rage power.',
      },
      { name: 'Trap Sense +3', level: 9, description: 'Trap sense bonus increases to +3.' },
      {
        name: 'Damage Reduction 2/—',
        level: 10,
        description: 'Damage reduction increases to 2/—.',
      },
      {
        name: 'Rage Power',
        level: 10,
        description: 'The barbarian gains an additional rage power.',
      },
      {
        name: 'Greater Rage',
        level: 11,
        description:
          'At 11th level, when a barbarian enters rage, the morale bonus to her Strength and Constitution increases to +6 and the morale bonus on her Will saves increases to +3.',
      },
      {
        name: 'Rage Power',
        level: 12,
        description: 'The barbarian gains an additional rage power.',
      },
      { name: 'Trap Sense +4', level: 12, description: 'Trap sense bonus increases to +4.' },
      {
        name: 'Damage Reduction 3/—',
        level: 13,
        description: 'Damage reduction increases to 3/—.',
      },
      {
        name: 'Indomitable Will',
        level: 14,
        description:
          'While in rage, a barbarian of 14th level or higher gains a +4 bonus on Will saves to resist enchantment spells. This bonus stacks with all other modifiers, including the morale bonus on Will saves she also receives during her rage.',
      },
      {
        name: 'Rage Power',
        level: 14,
        description: 'The barbarian gains an additional rage power.',
      },
      { name: 'Trap Sense +5', level: 15, description: 'Trap sense bonus increases to +5.' },
      {
        name: 'Damage Reduction 4/—',
        level: 16,
        description: 'Damage reduction increases to 4/—.',
      },
      {
        name: 'Rage Power',
        level: 16,
        description: 'The barbarian gains an additional rage power.',
      },
      {
        name: 'Tireless Rage',
        level: 17,
        description:
          'Starting at 17th level, a barbarian no longer becomes fatigued at the end of her rage.',
      },
      {
        name: 'Rage Power',
        level: 18,
        description: 'The barbarian gains an additional rage power.',
      },
      { name: 'Trap Sense +6', level: 18, description: 'Trap sense bonus increases to +6.' },
      {
        name: 'Damage Reduction 5/—',
        level: 19,
        description: 'Damage reduction increases to 5/—.',
      },
      {
        name: 'Mighty Rage',
        level: 20,
        description:
          'At 20th level, when a barbarian enters rage, the morale bonus to her Strength and Constitution increases to +8 and the morale bonus on her Will saves increases to +4.',
      },
      {
        name: 'Rage Power',
        level: 20,
        description: 'The barbarian gains an additional rage power.',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: 'Core Rulebook',
  },
  {
    name: 'Bard',
    category: 'Core',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 6,
    classSkills: [
      'Acrobatics',
      'Appraise',
      'Bluff',
      'Climb',
      'Craft',
      'Diplomacy',
      'Disguise',
      'Escape Artist',
      'Intimidate',
      'Knowledge (all)',
      'Linguistics',
      'Perception',
      'Perform',
      'Profession',
      'Sense Motive',
      'Sleight of Hand',
      'Spellcraft',
      'Stealth',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Good,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [
      'Simple weapons',
      'Longsword',
      'Rapier',
      'Sap',
      'Short sword',
      'Shortbow',
      'Whip',
    ],
    armorProficiencies: ['Light armor', 'Shields'],
    startingWealth: '3d6 × 10 gp',
    classFeatures: [
      {
        name: 'Bardic Knowledge',
        level: 1,
        description:
          'A bard adds half his class level (minimum 1) to all Knowledge skill checks and may make all Knowledge skill checks untrained.',
      },
      {
        name: 'Bardic Performance',
        level: 1,
        description:
          'A bard is trained to use the Perform skill to create magical effects on those around him. He can use this ability for a number of rounds per day equal to 4 + his Charisma modifier. At each level after 1st a bard can use bardic performance for 2 additional rounds per day.',
      },
      {
        name: 'Cantrips',
        level: 1,
        description:
          'Bards learn a number of cantrips, or 0-level spells. These spells are cast like any other spell, but they are not expended when cast and may be used again.',
      },
      {
        name: 'Countersong',
        level: 1,
        description:
          "At 1st level, a bard learns to counter magic effects that depend on sound. Each round of the countersong he makes a Perform check. Any creature within 30 feet that is affected by a sonic or language-dependent magical attack may use the bard's Perform check result in place of its saving throw.",
      },
      {
        name: 'Distraction',
        level: 1,
        description:
          "At 1st level, a bard can use his performance to counter magic effects that depend on sight. Each round, he makes a Perform check. Any creature within 30 feet affected by an illusion (pattern) or illusion (figment) may use the bard's Perform check in place of its saving throw.",
      },
      {
        name: 'Fascinate',
        level: 1,
        description:
          'At 1st level, a bard can use his performance to cause one or more creatures to become fascinated with him. Each creature to be fascinated must be within 90 feet and able to see and hear the bard.',
      },
      {
        name: 'Inspire Courage +1',
        level: 1,
        description:
          'A 1st-level bard can use his performance to inspire courage in his allies, granting a +1 morale bonus on saving throws against charm and fear effects and a +1 competence bonus on attack and weapon damage rolls.',
      },
      {
        name: 'Versatile Performance',
        level: 2,
        description:
          'At 2nd level, a bard can choose one type of Perform skill. He can use his bonus in that skill in place of his bonus in associated skills.',
      },
      {
        name: 'Well-Versed',
        level: 2,
        description:
          'At 2nd level, the bard becomes resistant to the bardic performance of others, and to sonic effects in general. The bard gains a +4 bonus on saving throws made against bardic performance, sonic, and language-dependent effects.',
      },
      {
        name: 'Inspire Competence +2',
        level: 3,
        description:
          "A bard of 3rd level or higher can use his performance to help an ally succeed at a task. That ally gets a +2 competence bonus on skill checks with a particular skill as long as she continues to hear the bard's performance.",
      },
      {
        name: 'Inspire Courage +2',
        level: 5,
        description: 'Inspire courage bonus increases to +2.',
      },
      {
        name: 'Lore Master 1/day',
        level: 5,
        description:
          'At 5th level, the bard becomes a master of lore and can take 10 on any Knowledge skill check that he has ranks in. A bard can also take 20 on Knowledge skill checks once per day.',
      },
      {
        name: 'Suggestion',
        level: 6,
        description:
          'A bard of 6th level or higher can use his performance to make a suggestion (as per the spell) to a creature he has already fascinated.',
      },
      {
        name: 'Versatile Performance',
        level: 6,
        description: 'The bard selects an additional Perform type for versatile performance.',
      },
      {
        name: 'Inspire Competence +3',
        level: 7,
        description: 'Inspire competence bonus increases to +3.',
      },
      {
        name: 'Dirge of Doom',
        level: 8,
        description:
          'A bard of 8th level or higher can use his performance to foster a sense of growing dread in his enemies, causing them to become shaken. This does not cause a frightened or panicked condition.',
      },
      {
        name: 'Inspire Greatness',
        level: 9,
        description:
          'A bard of 9th level or higher can use his performance to inspire greatness in himself or a single willing ally within 30 feet, granting extra Hit Dice, attack bonus, and Fortitude saves.',
      },
      {
        name: 'Jack-of-All-Trades',
        level: 10,
        description:
          'At 10th level, the bard can use any skill, even if the skill normally requires him to be trained.',
      },
      {
        name: 'Versatile Performance',
        level: 10,
        description: 'The bard selects an additional Perform type for versatile performance.',
      },
      {
        name: 'Inspire Competence +4',
        level: 11,
        description: 'Inspire competence bonus increases to +4.',
      },
      {
        name: 'Inspire Courage +3',
        level: 11,
        description: 'Inspire courage bonus increases to +3.',
      },
      {
        name: 'Lore Master 2/day',
        level: 11,
        description: 'Lore master usage increases to 2/day.',
      },
      {
        name: 'Soothing Performance',
        level: 12,
        description:
          "A bard of 12th level or higher can use his performance to create an effect equivalent to mass cure serious wounds, using the bard's level as the caster level. In addition, this performance removes the fatigued, sickened, and shaken conditions.",
      },
      {
        name: 'Frightening Tune',
        level: 14,
        description:
          "A bard of 14th level or higher can use his performance to cause fear in his enemies. To be affected, an enemy must be within 30 feet and able to hear the bard's performance.",
      },
      {
        name: 'Versatile Performance',
        level: 14,
        description: 'The bard selects an additional Perform type for versatile performance.',
      },
      {
        name: 'Inspire Competence +5',
        level: 15,
        description: 'Inspire competence bonus increases to +5.',
      },
      {
        name: 'Inspire Heroics',
        level: 15,
        description:
          'A bard of 15th level or higher can inspire tremendous heroism in himself or a single ally within 30 feet. The creature gains a +4 morale bonus on saving throws and a +4 dodge bonus to AC.',
      },
      {
        name: 'Inspire Courage +4',
        level: 17,
        description: 'Inspire courage bonus increases to +4.',
      },
      {
        name: 'Lore Master 3/day',
        level: 17,
        description: 'Lore master usage increases to 3/day.',
      },
      {
        name: 'Mass Suggestion',
        level: 18,
        description:
          'A bard of 18th level or higher can make a suggestion to any number of creatures that he has already fascinated.',
      },
      {
        name: 'Versatile Performance',
        level: 18,
        description: 'The bard selects an additional Perform type for versatile performance.',
      },
      {
        name: 'Inspire Competence +6',
        level: 19,
        description: 'Inspire competence bonus increases to +6.',
      },
      {
        name: 'Deadly Performance',
        level: 20,
        description:
          "A bard of 20th level or higher can use his performance to cause one enemy to die from joy or sorrow. The target must make a Will save (DC 10 + 1/2 the bard's level + the bard's Cha modifier). If it fails, it dies.",
      },
    ],
    spellcasting: {
      type: 'Arcane',
      casting: 'Spontaneous',
      spellList: 'Bard',
      spellTableKey: 'SIX_LEVEL_SPONTANEOUS_PER_DAY',
      spellsKnownTableKey: 'SIX_LEVEL_SPONTANEOUS_KNOWN',
    },
    source: 'Core Rulebook',
  },
  {
    name: 'Cleric',
    category: 'Core',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 2,
    classSkills: [
      'Appraise',
      'Craft',
      'Diplomacy',
      'Heal',
      'Knowledge (arcana)',
      'Knowledge (history)',
      'Knowledge (nobility)',
      'Knowledge (planes)',
      'Knowledge (religion)',
      'Linguistics',
      'Profession',
      'Sense Motive',
      'Spellcraft',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', "Deity's favored weapon"],
    armorProficiencies: ['Light armor', 'Medium armor', 'Shields'],
    startingWealth: '4d6 × 10 gp',
    alignment: "Within one step of deity's alignment",
    classFeatures: [
      {
        name: 'Aura',
        level: 1,
        description:
          "A cleric of a chaotic, evil, good, or lawful deity has a particularly powerful aura corresponding to the deity's alignment.",
      },
      {
        name: 'Channel Energy 1d6',
        level: 1,
        id: 'channel-energy',
        shortDescription: '30-ft burst heal/harm (3 + CHA mod/day)',
        description:
          'A cleric can release a wave of energy by channeling the power of her faith through her holy symbol. This energy can heal living creatures or harm undead, or vice versa for evil clerics. Channeling energy causes a burst that affects all creatures of one type in a 30-foot radius centered on the cleric. A cleric may channel energy a number of times per day equal to 3 + her Charisma modifier.',
        resourcePool: {
          id: 'channel_energy',
          name: 'Channel Energy',
          rechargeOn: 'rest',
          maxFormula: '3 + chaMod',
          restRecoveryMode: 'full',
        },
      },
      {
        name: 'Domains',
        level: 1,
        description:
          'A cleric chooses two domains from among those belonging to her deity. Each domain grants a number of domain powers dependent upon the level of the cleric, as well as a number of bonus spells.',
      },
      {
        name: 'Orisons',
        level: 1,
        description:
          'Clerics can prepare a number of orisons, or 0-level spells, each day. These spells are cast like any other spell, but they are not expended when cast and may be used again.',
      },
      {
        name: 'Spontaneous Casting',
        level: 1,
        description:
          "A good cleric can channel stored spell energy into healing spells that she did not prepare ahead of time. She can 'lose' any prepared spell in order to cast any cure spell of the same spell level or lower. An evil cleric can convert prepared spells to inflict spells.",
      },
      {
        name: 'Channel Energy 2d6',
        level: 3,
        description: 'Channel energy damage increases to 2d6.',
      },
      {
        name: 'Channel Energy 3d6',
        level: 5,
        description: 'Channel energy damage increases to 3d6.',
      },
      {
        name: 'Channel Energy 4d6',
        level: 7,
        description: 'Channel energy damage increases to 4d6.',
      },
      {
        name: 'Channel Energy 5d6',
        level: 9,
        description: 'Channel energy damage increases to 5d6.',
      },
      {
        name: 'Channel Energy 6d6',
        level: 11,
        description: 'Channel energy damage increases to 6d6.',
      },
      {
        name: 'Channel Energy 7d6',
        level: 13,
        description: 'Channel energy damage increases to 7d6.',
      },
      {
        name: 'Channel Energy 8d6',
        level: 15,
        description: 'Channel energy damage increases to 8d6.',
      },
      {
        name: 'Channel Energy 9d6',
        level: 17,
        description: 'Channel energy damage increases to 9d6.',
      },
      {
        name: 'Channel Energy 10d6',
        level: 19,
        description: 'Channel energy damage increases to 10d6.',
      },
    ],
    spellcasting: {
      type: 'Divine',
      casting: 'Prepared',
      spellList: 'Cleric',
      spellTableKey: 'FULL_9_PREPARED_PER_DAY',
      domainSlots: true,
    },
    source: 'Core Rulebook',
  },
  {
    name: 'Druid',
    category: 'Core',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Climb',
      'Craft',
      'Fly',
      'Handle Animal',
      'Heal',
      'Knowledge (geography)',
      'Knowledge (nature)',
      'Perception',
      'Profession',
      'Ride',
      'Spellcraft',
      'Survival',
      'Swim',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [
      'Club',
      'Dagger',
      'Dart',
      'Quarterstaff',
      'Scimitar',
      'Scythe',
      'Sickle',
      'Shortspear',
      'Sling',
      'Spear',
    ],
    armorProficiencies: ['Light armor', 'Medium armor', 'Shields (non-metal only)'],
    startingWealth: '2d6 × 10 gp',
    alignment: 'Any neutral',
    classFeatures: [
      {
        name: 'Nature Bond',
        level: 1,
        description:
          'At 1st level, a druid forms a bond with nature. This bond can take one of two forms: a close tie to the natural world granting the druid a cleric domain (Air, Animal, Earth, Fire, Plant, Water, or Weather), or a close bond with an animal companion.',
      },
      {
        name: 'Nature Sense',
        level: 1,
        description: 'A druid gains a +2 bonus on Knowledge (nature) and Survival checks.',
      },
      {
        name: 'Orisons',
        level: 1,
        description:
          'Druids can prepare a number of orisons, or 0-level spells, each day. These spells are not expended when cast and may be used again.',
      },
      {
        name: 'Wild Empathy',
        level: 1,
        description:
          'A druid can improve the attitude of an animal. This ability functions just like a Diplomacy check made to improve the attitude of a person. The druid rolls 1d20 and adds her druid level and her Charisma modifier.',
      },
      {
        name: 'Woodland Stride',
        level: 2,
        description:
          'Starting at 2nd level, a druid may move through any sort of undergrowth at her normal speed and without taking damage or suffering any other impairment.',
      },
      {
        name: 'Trackless Step',
        level: 3,
        description:
          'Starting at 3rd level, a druid leaves no trail in natural surroundings and cannot be tracked. She may choose to leave a trail if so desired.',
      },
      {
        name: "Resist Nature's Lure",
        level: 4,
        description:
          'Starting at 4th level, a druid gains a +4 bonus on saving throws against the spell-like and supernatural abilities of fey.',
      },
      {
        name: 'Wild Shape 1/day',
        level: 4,
        id: 'wild-shape',
        shortDescription: 'Transform into an animal (uses/day scale with level)',
        activationMode: 'toggle',
        description:
          'At 4th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. This ability functions like the beast shape I spell.',
        resourcePool: {
          id: 'wild_shape',
          name: 'Wild Shape',
          rechargeOn: 'rest',
          maxFormula: 'floor((druidLevel - 2) / 2)',
          restRecoveryMode: 'full',
          specialRechargeNote: 'At level 20, wild shape is at will.',
        },
      },
      { name: 'Wild Shape 2/day', level: 6, description: 'Wild shape usage increases to 2/day.' },
      { name: 'Wild Shape 3/day', level: 8, description: 'Wild shape usage increases to 3/day.' },
      {
        name: 'Venom Immunity',
        level: 9,
        description: 'At 9th level, a druid gains immunity to all poisons.',
      },
      { name: 'Wild Shape 4/day', level: 10, description: 'Wild shape usage increases to 4/day.' },
      { name: 'Wild Shape 5/day', level: 12, description: 'Wild shape usage increases to 5/day.' },
      {
        name: 'A Thousand Faces',
        level: 13,
        description:
          'At 13th level, a druid gains the ability to change her appearance at will, as if using the alter self spell, but only while in her normal form.',
      },
      { name: 'Wild Shape 6/day', level: 14, description: 'Wild shape usage increases to 6/day.' },
      {
        name: 'Timeless Body',
        level: 15,
        description:
          'After attaining 15th level, a druid no longer takes ability score penalties for aging and cannot be magically aged.',
      },
      { name: 'Wild Shape 7/day', level: 16, description: 'Wild shape usage increases to 7/day.' },
      { name: 'Wild Shape 8/day', level: 18, description: 'Wild shape usage increases to 8/day.' },
      {
        name: 'Wild Shape (at will)',
        level: 20,
        description: 'At 20th level, a druid can use wild shape at will.',
      },
    ],
    spellcasting: {
      type: 'Divine',
      casting: 'Prepared',
      spellList: 'Druid',
      spellTableKey: 'FULL_9_PREPARED_PER_DAY',
      domainSlots: true,
    },
    source: 'Core Rulebook',
  },
  {
    name: 'Fighter',
    category: 'Core',
    maxLevel: 20,
    hitDie: 10,
    skillRanksPerLevel: 2,
    classSkills: [
      'Climb',
      'Craft',
      'Handle Animal',
      'Intimidate',
      'Knowledge (dungeoneering)',
      'Knowledge (engineering)',
      'Profession',
      'Ride',
      'Survival',
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
    startingWealth: '5d6 × 10 gp',
    classFeatures: [
      {
        name: 'Bonus Feat',
        level: 1,
        description:
          'At 1st level, and at every even level thereafter, a fighter gains a bonus feat in addition to those gained from normal advancement. These bonus feats must be selected from those listed as combat feats.',
      },
      {
        name: 'Bravery +1',
        level: 2,
        description:
          'Starting at 2nd level, a fighter gains a +1 bonus on Will saves against fear. This bonus increases by +1 for every four levels beyond 2nd.',
      },
      { name: 'Bonus Feat', level: 2, description: 'The fighter gains a bonus combat feat.' },
      {
        name: 'Armor Training 1',
        level: 3,
        description:
          'Starting at 3rd level, a fighter learns to be more maneuverable while wearing armor. Whenever he is wearing armor, he reduces the armor check penalty by 1 (to a minimum of 0) and increases the maximum Dexterity bonus allowed by his armor by 1.',
      },
      { name: 'Bonus Feat', level: 4, description: 'The fighter gains a bonus combat feat.' },
      {
        name: 'Weapon Training 1',
        level: 5,
        description:
          'Starting at 5th level, a fighter can select one group of weapons. Whenever he attacks with a weapon from this group, he gains a +1 bonus on attack and damage rolls.',
      },
      { name: 'Bravery +2', level: 6, description: 'Bravery bonus increases to +2.' },
      { name: 'Bonus Feat', level: 6, description: 'The fighter gains a bonus combat feat.' },
      { name: 'Armor Training 2', level: 7, description: 'Armor training bonus increases by +1.' },
      { name: 'Bonus Feat', level: 8, description: 'The fighter gains a bonus combat feat.' },
      {
        name: 'Weapon Training 2',
        level: 9,
        description:
          'The fighter selects an additional weapon group with +1 bonus. Previous weapon training groups increase by +1.',
      },
      { name: 'Bravery +3', level: 10, description: 'Bravery bonus increases to +3.' },
      { name: 'Bonus Feat', level: 10, description: 'The fighter gains a bonus combat feat.' },
      { name: 'Armor Training 3', level: 11, description: 'Armor training bonus increases by +1.' },
      { name: 'Bonus Feat', level: 12, description: 'The fighter gains a bonus combat feat.' },
      {
        name: 'Weapon Training 3',
        level: 13,
        description:
          'The fighter selects a third weapon group with +1 bonus. Previous weapon training groups increase by +1.',
      },
      { name: 'Bravery +4', level: 14, description: 'Bravery bonus increases to +4.' },
      { name: 'Bonus Feat', level: 14, description: 'The fighter gains a bonus combat feat.' },
      {
        name: 'Armor Training 4',
        level: 15,
        description:
          'Armor training bonus increases by +1. A fighter can also move at his normal speed while wearing heavy armor.',
      },
      { name: 'Bonus Feat', level: 16, description: 'The fighter gains a bonus combat feat.' },
      {
        name: 'Weapon Training 4',
        level: 17,
        description:
          'The fighter selects a fourth weapon group with +1 bonus. Previous weapon training groups increase by +1.',
      },
      { name: 'Bravery +5', level: 18, description: 'Bravery bonus increases to +5.' },
      { name: 'Bonus Feat', level: 18, description: 'The fighter gains a bonus combat feat.' },
      {
        name: 'Armor Mastery',
        level: 19,
        description:
          'At 19th level, a fighter gains damage reduction 5/— whenever he is wearing armor or using a shield.',
      },
      {
        name: 'Weapon Mastery',
        level: 20,
        description:
          'At 20th level, a fighter chooses one weapon. Any attacks made with that weapon automatically confirm all critical threats and have their damage multiplier increased by 1. He cannot be disarmed while wielding a weapon of this type.',
      },
      { name: 'Bonus Feat', level: 20, description: 'The fighter gains a bonus combat feat.' },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: 'Core Rulebook',
  },
  {
    name: 'Monk',
    category: 'Core',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Climb',
      'Craft',
      'Escape Artist',
      'Intimidate',
      'Knowledge (history)',
      'Knowledge (religion)',
      'Perception',
      'Perform',
      'Profession',
      'Ride',
      'Sense Motive',
      'Stealth',
      'Swim',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Good,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [
      'Club',
      'Crossbow (light or heavy)',
      'Dagger',
      'Handaxe',
      'Javelin',
      'Kama',
      'Nunchaku',
      'Quarterstaff',
      'Sai',
      'Shortspear',
      'Short sword',
      'Shuriken',
      'Siangham',
      'Sling',
      'Spear',
    ],
    armorProficiencies: [],
    startingWealth: '1d6 × 10 gp',
    alignment: 'Any lawful',
    classFeatures: [
      {
        name: 'AC Bonus',
        level: 1,
        description:
          'When unarmored and unencumbered, the monk adds his Wisdom bonus (if any) to his AC and his CMD. In addition, a monk gains a +1 bonus to AC and CMD at 4th level. This bonus increases by 1 for every four monk levels thereafter (+2 at 8th, +3 at 12th, +4 at 16th, and +5 at 20th level).',
      },
      {
        name: 'Flurry of Blows',
        level: 1,
        description:
          'Starting at 1st level, a monk can make a flurry of blows as a full-attack action. When doing so, he may make one additional attack, taking a –2 penalty on all of his attack rolls. At 8th level, the monk may make two additional attacks. At 15th level, the penalty becomes 0.',
      },
      {
        name: 'Stunning Fist',
        level: 1,
        description:
          'At 1st level, the monk gains Stunning Fist as a bonus feat, even if he does not meet the prerequisites. The monk can use this feat a number of times per day equal to his monk level.',
      },
      {
        name: 'Unarmed Strike',
        level: 1,
        description:
          "At 1st level, a monk gains Improved Unarmed Strike as a bonus feat. A monk's attacks may be with fist, elbows, knees, and feet. A Small monk deals 1d4, a Medium monk 1d6, increasing at higher levels.",
      },
      {
        name: 'Bonus Feat',
        level: 2,
        description:
          'At 2nd level, and every 4 levels thereafter, a monk may select a bonus feat from: Catch Off-Guard, Combat Reflexes, Deflect Arrows, Dodge, Improved Grapple, Scorpion Style, and Throw Anything.',
      },
      {
        name: 'Evasion',
        level: 2,
        description:
          'At 2nd level, a monk can avoid damage from many area-effect attacks. If he makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, he instead takes no damage.',
      },
      {
        name: 'Fast Movement +10 ft.',
        level: 3,
        description:
          'At 3rd level, a monk gains an enhancement bonus to his land speed. A monk in armor or carrying a medium or heavy load loses this extra speed. The bonus increases by 10 ft. every 3 levels.',
      },
      {
        name: 'Maneuver Training',
        level: 3,
        description:
          'At 3rd level, a monk uses his monk level in place of his base attack bonus when calculating his Combat Maneuver Bonus.',
      },
      {
        name: 'Still Mind',
        level: 3,
        description:
          'A monk of 3rd level or higher gains a +2 bonus on saving throws against enchantment spells and effects.',
      },
      {
        name: 'Ki Pool (magic)',
        level: 4,
        description:
          'At 4th level, a monk gains a pool of ki points equal to 1/2 his monk level + his Wisdom modifier. As long as he has at least 1 point in his ki pool, his unarmed attacks are treated as magic weapons for overcoming damage reduction.',
      },
      {
        name: 'Slow Fall 20 ft.',
        level: 4,
        description:
          "At 4th level, a monk within arm's reach of a wall can use it to slow his descent, taking damage as if the fall were 20 feet shorter.",
      },
      {
        name: 'High Jump',
        level: 5,
        description:
          'At 5th level, a monk adds his level to all Acrobatics checks made to jump, both for vertical and horizontal jumps. He always counts as having a running start when making jump checks.',
      },
      {
        name: 'Purity of Body',
        level: 5,
        description:
          'At 5th level, a monk gains immunity to all diseases, including supernatural and magical diseases.',
      },
      { name: 'Bonus Feat', level: 6, description: 'The monk selects a bonus feat.' },
      {
        name: 'Fast Movement +20 ft.',
        level: 6,
        description: 'Fast movement bonus increases to +20 ft.',
      },
      { name: 'Slow Fall 30 ft.', level: 6, description: 'Slow fall distance increases to 30 ft.' },
      {
        name: 'Ki Pool (cold iron/silver)',
        level: 7,
        description:
          'At 7th level, his unarmed attacks are also treated as cold iron and silver for overcoming damage reduction.',
      },
      {
        name: 'Wholeness of Body',
        level: 7,
        description:
          'At 7th level, a monk can heal his own wounds as a standard action. He can heal a number of hit points equal to his monk level by using 2 points from his ki pool.',
      },
      { name: 'Slow Fall 40 ft.', level: 8, description: 'Slow fall distance increases to 40 ft.' },
      {
        name: 'Fast Movement +30 ft.',
        level: 9,
        description: 'Fast movement bonus increases to +30 ft.',
      },
      {
        name: 'Improved Evasion',
        level: 9,
        description:
          'At 9th level, a monk takes no damage on a successful Reflex save and only half damage on a failed save.',
      },
      { name: 'Bonus Feat', level: 10, description: 'The monk selects a bonus feat.' },
      {
        name: 'Ki Pool (lawful)',
        level: 10,
        description:
          'At 10th level, his unarmed attacks are treated as lawful weapons for overcoming damage reduction.',
      },
      {
        name: 'Slow Fall 50 ft.',
        level: 10,
        description: 'Slow fall distance increases to 50 ft.',
      },
      {
        name: 'Diamond Body',
        level: 11,
        description: 'At 11th level, a monk gains immunity to poisons of all kinds.',
      },
      {
        name: 'Abundant Step',
        level: 12,
        description:
          'At 12th level, a monk can slip magically between spaces, as if using the spell dimension door. Using this ability is a move action that consumes 2 points from his ki pool.',
      },
      {
        name: 'Fast Movement +40 ft.',
        level: 12,
        description: 'Fast movement bonus increases to +40 ft.',
      },
      {
        name: 'Slow Fall 60 ft.',
        level: 12,
        description: 'Slow fall distance increases to 60 ft.',
      },
      {
        name: 'Diamond Soul',
        level: 13,
        description:
          'At 13th level, a monk gains spell resistance equal to his current monk level + 10.',
      },
      { name: 'Bonus Feat', level: 14, description: 'The monk selects a bonus feat.' },
      {
        name: 'Slow Fall 70 ft.',
        level: 14,
        description: 'Slow fall distance increases to 70 ft.',
      },
      {
        name: 'Fast Movement +50 ft.',
        level: 15,
        description: 'Fast movement bonus increases to +50 ft.',
      },
      {
        name: 'Quivering Palm',
        level: 15,
        description:
          "Starting at 15th level, a monk can set up vibrations within the body of another creature that can thereafter be fatal. The target must make a Fortitude save (DC 10 + 1/2 the monk's level + the monk's Wis modifier) or die.",
      },
      {
        name: 'Slow Fall 80 ft.',
        level: 16,
        description: 'Slow fall distance increases to 80 ft.',
      },
      {
        name: 'Timeless Body',
        level: 17,
        description:
          'At 17th level, a monk no longer takes penalties to his ability scores for aging and cannot be magically aged.',
      },
      {
        name: 'Tongue of the Sun and Moon',
        level: 17,
        description: 'A monk of 17th level or higher can speak with any living creature.',
      },
      { name: 'Bonus Feat', level: 18, description: 'The monk selects a bonus feat.' },
      {
        name: 'Fast Movement +60 ft.',
        level: 18,
        description: 'Fast movement bonus increases to +60 ft.',
      },
      {
        name: 'Slow Fall (any distance)',
        level: 18,
        description: 'The monk can slow his fall from any distance.',
      },
      {
        name: 'Empty Body',
        level: 19,
        description:
          'At 19th level, a monk gains the ability to assume an ethereal state for 1 minute as though using the spell etherealness. Using this ability is a move action that consumes 3 points from his ki pool.',
      },
      {
        name: 'Perfect Self',
        level: 20,
        description:
          'At 20th level, a monk becomes a magical creature. He is treated as an outsider rather than a humanoid for spells and magical effects. He gains damage reduction 10/chaotic.',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: 'Core Rulebook',
  },
  {
    name: 'Paladin',
    category: 'Core',
    maxLevel: 20,
    hitDie: 10,
    skillRanksPerLevel: 2,
    classSkills: [
      'Craft',
      'Diplomacy',
      'Handle Animal',
      'Heal',
      'Knowledge (nobility)',
      'Knowledge (religion)',
      'Profession',
      'Ride',
      'Sense Motive',
      'Spellcraft',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Heavy armor', 'Shields', 'Tower shields'],
    startingWealth: '5d6 × 10 gp',
    alignment: 'Lawful Good',
    classFeatures: [
      {
        name: 'Aura of Good',
        level: 1,
        description: "The power of a paladin's aura of good is equal to her paladin level.",
      },
      {
        name: 'Detect Evil',
        level: 1,
        description:
          'At will, a paladin can use detect evil, as the spell. A paladin can, as a move action, concentrate on a single item or individual within 60 feet and determine if it is evil.',
      },
      {
        name: 'Smite Evil 1/day',
        level: 1,
        description:
          'Once per day, a paladin can call out to the powers of good to aid her. As a swift action, she adds her Charisma bonus to attack rolls and her paladin level to damage rolls against the target of her smite. She also gains a deflection bonus equal to her Charisma modifier to AC against the target.',
      },
      {
        name: 'Divine Grace',
        level: 2,
        description:
          'At 2nd level, a paladin gains a bonus equal to her Charisma bonus (if any) on all saving throws.',
      },
      {
        name: 'Lay on Hands',
        level: 2,
        description:
          'A paladin can heal wounds by touch. Each day she can use this ability a number of times equal to 1/2 her paladin level plus her Charisma modifier. Each use heals 1d6 hit points for every two paladin levels.',
      },
      {
        name: 'Aura of Courage',
        level: 3,
        description:
          'At 3rd level, a paladin is immune to fear. Each ally within 10 feet gains a +4 morale bonus on saving throws against fear effects.',
      },
      {
        name: 'Divine Health',
        level: 3,
        description:
          'At 3rd level, a paladin is immune to all diseases, including supernatural and magical diseases.',
      },
      {
        name: 'Mercy',
        level: 3,
        description:
          "At 3rd level, and every three levels thereafter, a paladin can select one mercy. Each mercy adds an effect to the paladin's lay on hands ability.",
      },
      {
        name: 'Channel Positive Energy',
        level: 4,
        description:
          'When a paladin reaches 4th level, she gains the ability to channel positive energy like a cleric. Using this ability consumes two uses of her lay on hands ability.',
      },
      { name: 'Smite Evil 2/day', level: 4, description: 'Smite evil usage increases to 2/day.' },
      {
        name: 'Divine Bond',
        level: 5,
        description:
          "Upon reaching 5th level, a paladin forms a divine bond with her god. This bond can take one of two forms: an enhancement to the paladin's weapon or a loyal mount.",
      },
      { name: 'Mercy', level: 6, description: 'The paladin selects an additional mercy.' },
      { name: 'Smite Evil 3/day', level: 7, description: 'Smite evil usage increases to 3/day.' },
      {
        name: 'Aura of Resolve',
        level: 8,
        description:
          'At 8th level, a paladin is immune to charm spells and spell-like abilities. Each ally within 10 feet gains a +4 morale bonus on saving throws against charm effects.',
      },
      { name: 'Mercy', level: 9, description: 'The paladin selects an additional mercy.' },
      { name: 'Smite Evil 4/day', level: 10, description: 'Smite evil usage increases to 4/day.' },
      {
        name: 'Aura of Justice',
        level: 11,
        description:
          'At 11th level, a paladin can expend two uses of her smite evil ability to grant the ability to smite evil to all allies within 10 feet, using her bonuses.',
      },
      { name: 'Mercy', level: 12, description: 'The paladin selects an additional mercy.' },
      { name: 'Smite Evil 5/day', level: 13, description: 'Smite evil usage increases to 5/day.' },
      {
        name: 'Aura of Faith',
        level: 14,
        description:
          "At 14th level, a paladin's weapons are treated as good-aligned for overcoming damage reduction. Any attack made against an enemy within 10 feet is treated as good-aligned.",
      },
      { name: 'Mercy', level: 15, description: 'The paladin selects an additional mercy.' },
      { name: 'Smite Evil 6/day', level: 16, description: 'Smite evil usage increases to 6/day.' },
      {
        name: 'Aura of Righteousness',
        level: 17,
        description:
          'At 17th level, a paladin gains DR 5/evil and immunity to compulsion spells and spell-like abilities. Each ally within 10 feet gains a +4 morale bonus on saving throws against compulsion effects.',
      },
      { name: 'Mercy', level: 18, description: 'The paladin selects an additional mercy.' },
      { name: 'Smite Evil 7/day', level: 19, description: 'Smite evil usage increases to 7/day.' },
      {
        name: 'Holy Champion',
        level: 20,
        description:
          'At 20th level, a paladin becomes a conduit for the power of her god. Her DR increases to 10/evil. Whenever she uses smite evil and successfully strikes an evil outsider, the outsider is subject to a banishment. Whenever she channels positive energy or uses lay on hands to heal, she heals the maximum possible amount.',
      },
    ],
    spellcasting: {
      type: 'Divine',
      casting: 'Prepared',
      spellList: 'Paladin',
      spellTableKey: 'FOUR_LEVEL_PREPARED_PER_DAY',
    },
    source: 'Core Rulebook',
  },
  {
    name: 'Ranger',
    category: 'Core',
    maxLevel: 20,
    hitDie: 10,
    skillRanksPerLevel: 6,
    classSkills: [
      'Climb',
      'Craft',
      'Handle Animal',
      'Heal',
      'Intimidate',
      'Knowledge (dungeoneering)',
      'Knowledge (geography)',
      'Knowledge (nature)',
      'Perception',
      'Profession',
      'Ride',
      'Spellcraft',
      'Stealth',
      'Survival',
      'Swim',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Shields'],
    startingWealth: '5d6 × 10 gp',
    classFeatures: [
      {
        name: 'Favored Enemy',
        level: 1,
        id: 'favored-enemy',
        shortDescription: '+2 attack, damage, and skills vs. favored enemy type',
        activationMode: 'toggle',
        description:
          'At 1st level, a ranger selects a creature type. He gains a +2 bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks, as well as weapon attack and damage rolls against creatures of his selected type.',
      },
      {
        name: 'Track',
        level: 1,
        description:
          'A ranger adds half his level (minimum 1) to Survival skill checks made to follow tracks.',
      },
      {
        name: 'Wild Empathy',
        level: 1,
        description:
          'A ranger can improve the initial attitude of an animal. The ranger rolls 1d20 and adds his ranger level and his Charisma bonus.',
      },
      {
        name: 'Combat Style Feat',
        level: 2,
        description:
          'At 2nd level, a ranger must select one combat style: archery or two-weapon combat. He gains a bonus feat from his chosen style, even if he does not meet the prerequisites.',
      },
      {
        name: 'Endurance',
        level: 3,
        description: 'A ranger gains Endurance as a bonus feat at 3rd level.',
      },
      {
        name: 'Favored Terrain',
        level: 3,
        id: 'favored-terrain',
        shortDescription: '+2 initiative and skills in favored terrain type',
        activationMode: 'toggle',
        description:
          'At 3rd level, a ranger may select a type of terrain. He gains a +2 bonus on initiative checks and Knowledge (geography), Perception, Stealth, and Survival skill checks in this terrain.',
      },
      {
        name: "Hunter's Bond",
        level: 4,
        description:
          'At 4th level, a ranger forms a bond with his hunting companions. This bond can take one of two forms: granting half his favored enemy bonus to allies within 30 feet, or gaining an animal companion.',
      },
      {
        name: 'Favored Enemy (2nd)',
        level: 5,
        description:
          'The ranger selects an additional favored enemy. In addition, the bonus against any one favored enemy increases by +2.',
      },
      {
        name: 'Combat Style Feat',
        level: 6,
        description: 'The ranger gains another combat style feat.',
      },
      {
        name: 'Woodland Stride',
        level: 7,
        description:
          'Starting at 7th level, a ranger may move through any sort of undergrowth at his normal speed and without taking damage.',
      },
      {
        name: 'Swift Tracker',
        level: 8,
        description:
          'Beginning at 8th level, a ranger can move at his normal speed while using Survival to follow tracks without taking the normal –5 penalty.',
      },
      {
        name: 'Favored Terrain (2nd)',
        level: 8,
        description:
          'The ranger selects an additional favored terrain or increases an existing bonus by +2.',
      },
      {
        name: 'Evasion',
        level: 9,
        description:
          'When he makes a successful Reflex save against an attack that normally deals half damage, he instead takes no damage.',
      },
      {
        name: 'Combat Style Feat',
        level: 10,
        description: 'The ranger gains another combat style feat.',
      },
      {
        name: 'Favored Enemy (3rd)',
        level: 10,
        description:
          'The ranger selects an additional favored enemy or increases an existing bonus by +2.',
      },
      {
        name: 'Quarry',
        level: 11,
        description:
          'At 11th level, a ranger can denote one target within line of sight as his quarry. He gains a +2 insight bonus on attack rolls against his quarry, and all critical threats are automatically confirmed.',
      },
      {
        name: 'Camouflage',
        level: 12,
        description:
          'A ranger of 12th level or higher can use the Stealth skill to hide in any of his favored terrains, even if the terrain does not grant cover or concealment.',
      },
      {
        name: 'Favored Terrain (3rd)',
        level: 13,
        description:
          'The ranger selects an additional favored terrain or increases an existing bonus by +2.',
      },
      {
        name: 'Combat Style Feat',
        level: 14,
        description: 'The ranger gains another combat style feat.',
      },
      {
        name: 'Favored Enemy (4th)',
        level: 15,
        description:
          'The ranger selects an additional favored enemy or increases an existing bonus by +2.',
      },
      {
        name: 'Improved Evasion',
        level: 16,
        description:
          'At 16th level, a ranger takes no damage on a successful Reflex save and only half damage on a failed save.',
      },
      {
        name: 'Hide in Plain Sight',
        level: 17,
        description:
          'While in any of his favored terrains, a ranger of 17th level or higher can use the Stealth skill even while being observed.',
      },
      {
        name: 'Combat Style Feat',
        level: 18,
        description: 'The ranger gains another combat style feat.',
      },
      {
        name: 'Favored Terrain (4th)',
        level: 18,
        description:
          'The ranger selects an additional favored terrain or increases an existing bonus by +2.',
      },
      {
        name: 'Improved Quarry',
        level: 19,
        description:
          'At 19th level, the ranger can select a quarry as a free action. The insight bonus to attack increases to +4.',
      },
      {
        name: 'Favored Enemy (5th)',
        level: 20,
        description:
          'The ranger selects an additional favored enemy or increases an existing bonus by +2.',
      },
      {
        name: 'Master Hunter',
        level: 20,
        description:
          "A ranger can always move at full speed while tracking. As a standard action, he can make a single attack against a favored enemy at full attack bonus. If the attack hits, the target must make a Fortitude save (DC 10 + 1/2 the ranger's level + the ranger's Wisdom modifier) or die.",
      },
    ],
    spellcasting: {
      type: 'Divine',
      casting: 'Prepared',
      spellList: 'Ranger',
      spellTableKey: 'FOUR_LEVEL_PREPARED_PER_DAY',
    },
    source: 'Core Rulebook',
  },
  {
    name: 'Rogue',
    category: 'Core',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 8,
    classSkills: [
      'Acrobatics',
      'Appraise',
      'Bluff',
      'Climb',
      'Craft',
      'Diplomacy',
      'Disable Device',
      'Disguise',
      'Escape Artist',
      'Intimidate',
      'Knowledge (dungeoneering)',
      'Knowledge (local)',
      'Linguistics',
      'Perception',
      'Perform',
      'Profession',
      'Sense Motive',
      'Sleight of Hand',
      'Stealth',
      'Swim',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: [
      'Simple weapons',
      'Hand crossbow',
      'Rapier',
      'Sap',
      'Shortbow',
      'Short sword',
    ],
    armorProficiencies: ['Light armor'],
    startingWealth: '4d6 × 10 gp',
    classFeatures: [
      {
        name: 'Sneak Attack +1d6',
        level: 1,
        description:
          "If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage. The rogue's attack deals extra damage anytime her target would be denied a Dexterity bonus to AC, or when the rogue flanks her target.",
      },
      {
        name: 'Trapfinding',
        level: 1,
        description:
          'A rogue adds 1/2 her level to Perception skill checks made to locate traps and to Disable Device skill checks (minimum +1). A rogue can use Disable Device to disarm magic traps.',
      },
      {
        name: 'Evasion',
        level: 2,
        description:
          'If she makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, she instead takes no damage.',
      },
      {
        name: 'Rogue Talent',
        level: 2,
        description:
          'As a rogue gains experience, she learns a number of talents that aid her and confound her foes. Starting at 2nd level, a rogue gains one rogue talent. She gains an additional rogue talent for every 2 levels attained after 2nd level.',
      },
      {
        name: 'Sneak Attack +2d6',
        level: 3,
        description: 'Sneak attack damage increases to +2d6.',
      },
      {
        name: 'Trap Sense +1',
        level: 3,
        description:
          'At 3rd level, a rogue gains a +1 bonus on Reflex saves to avoid traps and a +1 dodge bonus to AC against trap attacks.',
      },
      {
        name: 'Rogue Talent',
        level: 4,
        description: 'The rogue gains an additional rogue talent.',
      },
      {
        name: 'Uncanny Dodge',
        level: 4,
        description:
          'A rogue cannot be caught flat-footed, nor does she lose her Dex bonus to AC if the attacker is invisible.',
      },
      {
        name: 'Sneak Attack +3d6',
        level: 5,
        description: 'Sneak attack damage increases to +3d6.',
      },
      {
        name: 'Rogue Talent',
        level: 6,
        description: 'The rogue gains an additional rogue talent.',
      },
      { name: 'Trap Sense +2', level: 6, description: 'Trap sense bonus increases to +2.' },
      {
        name: 'Sneak Attack +4d6',
        level: 7,
        description: 'Sneak attack damage increases to +4d6.',
      },
      {
        name: 'Improved Uncanny Dodge',
        level: 8,
        description:
          'A rogue can no longer be flanked. This defense denies another rogue the ability to sneak attack the character by flanking her, unless the attacker has at least four more rogue levels.',
      },
      {
        name: 'Rogue Talent',
        level: 8,
        description: 'The rogue gains an additional rogue talent.',
      },
      {
        name: 'Sneak Attack +5d6',
        level: 9,
        description: 'Sneak attack damage increases to +5d6.',
      },
      { name: 'Trap Sense +3', level: 9, description: 'Trap sense bonus increases to +3.' },
      {
        name: 'Advanced Talents',
        level: 10,
        description:
          'At 10th level, and every 2 levels thereafter, a rogue can choose an advanced rogue talent in place of a rogue talent.',
      },
      {
        name: 'Rogue Talent',
        level: 10,
        description: 'The rogue gains an additional rogue talent.',
      },
      {
        name: 'Sneak Attack +6d6',
        level: 11,
        description: 'Sneak attack damage increases to +6d6.',
      },
      {
        name: 'Rogue Talent',
        level: 12,
        description: 'The rogue gains an additional rogue talent.',
      },
      { name: 'Trap Sense +4', level: 12, description: 'Trap sense bonus increases to +4.' },
      {
        name: 'Sneak Attack +7d6',
        level: 13,
        description: 'Sneak attack damage increases to +7d6.',
      },
      {
        name: 'Rogue Talent',
        level: 14,
        description: 'The rogue gains an additional rogue talent.',
      },
      {
        name: 'Sneak Attack +8d6',
        level: 15,
        description: 'Sneak attack damage increases to +8d6.',
      },
      { name: 'Trap Sense +5', level: 15, description: 'Trap sense bonus increases to +5.' },
      {
        name: 'Rogue Talent',
        level: 16,
        description: 'The rogue gains an additional rogue talent.',
      },
      {
        name: 'Sneak Attack +9d6',
        level: 17,
        description: 'Sneak attack damage increases to +9d6.',
      },
      {
        name: 'Rogue Talent',
        level: 18,
        description: 'The rogue gains an additional rogue talent.',
      },
      { name: 'Trap Sense +6', level: 18, description: 'Trap sense bonus increases to +6.' },
      {
        name: 'Sneak Attack +10d6',
        level: 19,
        description: 'Sneak attack damage increases to +10d6.',
      },
      {
        name: 'Master Strike',
        level: 20,
        description:
          "Each time the rogue deals sneak attack damage, she can choose one of the following effects: the target can be put to sleep for 1d4 hours, paralyzed for 2d6 rounds, or slain. The target receives a Fortitude save (DC 10 + 1/2 the rogue's level + the rogue's Intelligence modifier) to negate.",
      },
      {
        name: 'Rogue Talent',
        level: 20,
        description: 'The rogue gains an additional rogue talent.',
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: 'Core Rulebook',
  },
  {
    name: 'Sorcerer',
    category: 'Core',
    maxLevel: 20,
    hitDie: 6,
    skillRanksPerLevel: 2,
    classSkills: [
      'Appraise',
      'Bluff',
      'Craft',
      'Fly',
      'Intimidate',
      'Knowledge (arcana)',
      'Profession',
      'Spellcraft',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Low,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons'],
    armorProficiencies: [],
    startingWealth: '2d6 × 10 gp',
    classFeatures: [
      {
        name: 'Bloodline',
        level: 1,
        description:
          'Each sorcerer has a source of magic somewhere in her heritage that grants her spells, bonus feats, an additional class skill, and other special abilities.',
      },
      {
        name: 'Bloodline Power',
        level: 1,
        description:
          'At 1st level, 3rd level, 9th level, 15th level, and 20th level, a sorcerer gains a new bloodline power.',
      },
      {
        name: 'Cantrips',
        level: 1,
        description:
          'Sorcerers learn a number of cantrips, or 0-level spells. These spells are not expended when cast and may be used again.',
      },
      {
        name: 'Eschew Materials',
        level: 1,
        description: 'A sorcerer gains Eschew Materials as a bonus feat at 1st level.',
      },
      {
        name: 'Bloodline Power',
        level: 3,
        description: 'The sorcerer gains an additional bloodline power.',
      },
      {
        name: 'Bloodline Spell',
        level: 3,
        description:
          'At 3rd level, and every two levels thereafter, a sorcerer learns an additional spell derived from her bloodline.',
      },
      {
        name: 'Bloodline Spell',
        level: 5,
        description: 'The sorcerer learns an additional bloodline spell.',
      },
      {
        name: 'Bloodline Feat',
        level: 7,
        description:
          'At 7th level, and every six levels thereafter, a sorcerer receives one bonus feat chosen from a list specific to each bloodline.',
      },
      {
        name: 'Bloodline Spell',
        level: 7,
        description: 'The sorcerer learns an additional bloodline spell.',
      },
      {
        name: 'Bloodline Power',
        level: 9,
        description: 'The sorcerer gains an additional bloodline power.',
      },
      {
        name: 'Bloodline Spell',
        level: 9,
        description: 'The sorcerer learns an additional bloodline spell.',
      },
      {
        name: 'Bloodline Spell',
        level: 11,
        description: 'The sorcerer learns an additional bloodline spell.',
      },
      {
        name: 'Bloodline Feat',
        level: 13,
        description: 'The sorcerer receives an additional bloodline bonus feat.',
      },
      {
        name: 'Bloodline Spell',
        level: 13,
        description: 'The sorcerer learns an additional bloodline spell.',
      },
      {
        name: 'Bloodline Power',
        level: 15,
        description: 'The sorcerer gains an additional bloodline power.',
      },
      {
        name: 'Bloodline Spell',
        level: 15,
        description: 'The sorcerer learns an additional bloodline spell.',
      },
      {
        name: 'Bloodline Spell',
        level: 17,
        description: 'The sorcerer learns an additional bloodline spell.',
      },
      {
        name: 'Bloodline Feat',
        level: 19,
        description: 'The sorcerer receives an additional bloodline bonus feat.',
      },
      {
        name: 'Bloodline Spell',
        level: 19,
        description: 'The sorcerer learns an additional bloodline spell.',
      },
      {
        name: 'Bloodline Power',
        level: 20,
        description: 'The sorcerer gains the final bloodline power.',
      },
    ],
    spellcasting: {
      type: 'Arcane',
      casting: 'Spontaneous',
      spellList: 'Wizard/Sorcerer',
      spellTableKey: 'FULL_9_SPONTANEOUS_PER_DAY',
      spellsKnownTableKey: 'FULL_9_SPONTANEOUS_KNOWN',
    },
    source: 'Core Rulebook',
  },
  {
    name: 'Wizard',
    category: 'Core',
    maxLevel: 20,
    hitDie: 6,
    skillRanksPerLevel: 2,
    classSkills: [
      'Appraise',
      'Craft',
      'Fly',
      'Knowledge (all)',
      'Linguistics',
      'Profession',
      'Spellcraft',
    ],
    babProgression: BABProgression.Low,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Club', 'Dagger', 'Heavy crossbow', 'Light crossbow', 'Quarterstaff'],
    armorProficiencies: [],
    startingWealth: '2d6 × 10 gp',
    classFeatures: [
      {
        name: 'Arcane Bond',
        level: 1,
        description:
          'At 1st level, wizards form a powerful bond with an object or a creature. A familiar is a small animal that serves the wizard. A bonded object is an item a wizard can use to cast additional spells.',
      },
      {
        name: 'Arcane School',
        level: 1,
        description:
          'A wizard can choose to specialize in one school of magic, gaining additional spells and powers based on that school. A wizard that does not select a school receives the universalist school instead.',
      },
      {
        name: 'Cantrips',
        level: 1,
        description:
          'Wizards can prepare a number of cantrips, or 0-level spells, each day. These spells are not expended when cast and may be used again.',
      },
      {
        name: 'Scribe Scroll',
        level: 1,
        description: 'At 1st level, a wizard gains Scribe Scroll as a bonus feat.',
      },
      {
        name: 'Bonus Feat',
        level: 5,
        description:
          'At 5th, 10th, 15th, and 20th level, a wizard gains a bonus feat. He can choose a metamagic feat, an item creation feat, or Spell Mastery.',
      },
      { name: 'Bonus Feat', level: 10, description: 'The wizard gains an additional bonus feat.' },
      { name: 'Bonus Feat', level: 15, description: 'The wizard gains an additional bonus feat.' },
      { name: 'Bonus Feat', level: 20, description: 'The wizard gains an additional bonus feat.' },
    ],
    spellcasting: {
      type: 'Arcane',
      casting: 'Prepared',
      spellList: 'Wizard/Sorcerer',
      spellTableKey: 'FULL_9_PREPARED_PER_DAY',
    },
    source: 'Core Rulebook',
  },
];
