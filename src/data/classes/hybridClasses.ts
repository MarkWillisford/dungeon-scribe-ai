// Hybrid Classes — Advanced Class Guide (ACG)
// Each hybrid class blends two parent classes.

import { BABProgression, SaveProgression } from '@/types/base';
import { ExpandedClassData } from './types';

export const HYBRID_CLASSES_EXPANDED: ExpandedClassData[] = [
  // ─── ARCANIST (Sorcerer + Wizard) ──────────────────────────────────────────
  {
    name: 'Arcanist',
    category: 'Hybrid',
    maxLevel: 20,
    hitDie: 6,
    skillRanksPerLevel: 2,
    classSkills: [
      'Appraise',
      'Craft',
      'Fly',
      'Knowledge (arcana)',
      'Knowledge (dungeoneering)',
      'Knowledge (engineering)',
      'Knowledge (geography)',
      'Knowledge (history)',
      'Knowledge (local)',
      'Knowledge (nature)',
      'Knowledge (nobility)',
      'Knowledge (planes)',
      'Knowledge (religion)',
      'Linguistics',
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
    startingWealth: '2d6 x 10 gp',
    classFeatures: [
      {
        name: 'Arcane Reservoir',
        level: 1,
        description:
          "An arcanist has an innate pool of magical energy that she can draw upon to fuel her exploits and enhance her spells. The maximum number of points is equal to 3 + the arcanist level. Each day she can fill her reservoir with points equal to 3 + half her arcanist level. She can spend 1 point from her reservoir as a free action to increase a spell's caster level by 1 or its DC by 1.",
        effects: [],
      },
      {
        name: 'Arcanist Exploit',
        level: 1,
        description:
          'At 1st level and every 2 levels thereafter, the arcanist learns a new arcane exploit selected from a list of specialized abilities that consume arcane reservoir points.',
        effects: [],
      },
      {
        name: 'Cantrips',
        level: 1,
        description:
          'Arcanists can prepare a number of cantrips each day. These spells are cast like any other spell but do not consume spell slots when cast.',
        effects: [],
      },
      {
        name: 'Consume Spells',
        level: 1,
        description:
          "An arcanist can expend an available spell slot as a move action, adding a number of points to her arcane reservoir equal to the level of the spell slot consumed. She can use this ability a number of times per day equal to her Charisma modifier (minimum 1). Points gained in excess of the reservoir's maximum are lost.",
        effects: [],
      },
      {
        name: 'Arcanist Exploit',
        level: 3,
        description: 'Gain an additional arcanist exploit.',
        effects: [],
      },
      {
        name: 'Arcanist Exploit',
        level: 5,
        description: 'Gain an additional arcanist exploit.',
        effects: [],
      },
      {
        name: 'Arcanist Exploit',
        level: 7,
        description: 'Gain an additional arcanist exploit.',
        effects: [],
      },
      {
        name: 'Arcanist Exploit',
        level: 9,
        description: 'Gain an additional arcanist exploit.',
        effects: [],
      },
      {
        name: 'Greater Exploits',
        level: 11,
        description:
          'At 11th level and every 2 levels thereafter, the arcanist can choose a greater exploit whenever she could select a new exploit. Greater exploits are more powerful than standard exploits.',
        effects: [],
      },
      {
        name: 'Greater Exploit',
        level: 13,
        description: 'Gain an additional greater exploit.',
        effects: [],
      },
      {
        name: 'Greater Exploit',
        level: 15,
        description: 'Gain an additional greater exploit.',
        effects: [],
      },
      {
        name: 'Greater Exploit',
        level: 17,
        description: 'Gain an additional greater exploit.',
        effects: [],
      },
      {
        name: 'Greater Exploit',
        level: 19,
        description: 'Gain an additional greater exploit.',
        effects: [],
      },
      {
        name: 'Magical Supremacy',
        level: 20,
        description:
          'At 20th level, the arcanist can cast any spell she has prepared by expending points from her arcane reservoir equal to 1 + the spell level instead of expending a spell slot. Her caster level is treated as 2 higher and the DC of such spells increases by 2.',
        effects: [],
      },
    ],
    spellcasting: {
      type: 'Arcane',
      casting: 'Prepared',
      spellList: 'Wizard/Sorcerer',
      spellTableKey: 'ARCANIST_PER_DAY',
    },
    source: 'Advanced Class Guide',
  },

  // ─── BLOODRAGER (Barbarian + Sorcerer) ─────────────────────────────────────
  {
    name: 'Bloodrager',
    category: 'Hybrid',
    maxLevel: 20,
    hitDie: 10,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Climb',
      'Craft',
      'Handle Animal',
      'Intimidate',
      'Knowledge (arcana)',
      'Perception',
      'Ride',
      'Spellcraft',
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
    armorProficiencies: ['Light armor', 'Medium armor', 'Shields (except tower shields)'],
    startingWealth: '3d6 x 10 gp',
    classFeatures: [
      {
        name: 'Bloodline',
        level: 1,
        description:
          'Each bloodrager has a source of magic somewhere in his heritage that empowers his bloodrage, bonus feats, and bonus spells. The bloodrager must pick one bloodline upon taking his first level. This choice cannot be changed. Bloodline powers are gained at 1st, 4th, 8th, 12th, 16th, and 20th levels.',
        effects: [],
      },
      {
        name: 'Bloodrage',
        level: 1,
        description:
          'A bloodrager can bloodrage for a number of rounds per day equal to 4 + his Constitution modifier, plus 2 additional rounds per level after 1st. While bloodraging, he gains a +4 morale bonus to Strength and Constitution, a +2 morale bonus on Will saves, and a -2 penalty to AC. He can cast bloodrager spells while bloodraging starting at 4th level.',
        effects: [],
      },
      {
        name: 'Fast Movement',
        level: 1,
        description:
          "A bloodrager's land speed is faster than normal for his race by 10 feet. This applies only when wearing no armor, light armor, or medium armor, and not carrying a heavy load.",
        effects: [],
      },
      {
        name: 'Uncanny Dodge',
        level: 2,
        description:
          'At 2nd level, the bloodrager can no longer be caught flat-footed and retains his Dexterity bonus to AC even against invisible attackers.',
        effects: [],
      },
      {
        name: 'Blood Sanctuary',
        level: 3,
        description:
          'At 3rd level, a bloodrager receives a +2 bonus on saving throws against spells that he or an ally cast.',
        effects: [],
      },
      {
        name: 'Blood Casting',
        level: 4,
        description:
          'At 4th level, a bloodrager gains the ability to cast spells even while bloodraging. He also gains Eschew Materials as a bonus feat.',
        effects: [],
      },
      {
        name: 'Bloodline Power',
        level: 4,
        description: 'The bloodrager gains an additional bloodline power.',
        effects: [],
      },
      {
        name: 'Eschew Materials',
        level: 4,
        description: 'At 4th level, the bloodrager gains Eschew Materials as a bonus feat.',
        effects: [],
      },
      {
        name: 'Bloodline Bonus Feat',
        level: 6,
        description: 'The bloodrager gains a bonus feat from his bloodline-specific list.',
        effects: [],
      },
      {
        name: 'Damage Reduction',
        level: 7,
        description:
          'At 7th level, the bloodrager gains damage reduction 1/—. This increases by 1 at 10th level and every 3 levels thereafter, to a maximum of DR 5/— at 19th level.',
        effects: [],
      },
      {
        name: 'Bloodline Power',
        level: 8,
        description: 'The bloodrager gains an additional bloodline power.',
        effects: [],
      },
      {
        name: 'Bloodline Bonus Feat',
        level: 9,
        description: 'The bloodrager gains another bonus feat from his bloodline-specific list.',
        effects: [],
      },
      {
        name: 'Damage Reduction',
        level: 10,
        description: 'Damage reduction increases to 2/—.',
        effects: [],
      },
      {
        name: 'Greater Bloodrage',
        level: 11,
        description:
          "At 11th level, a bloodrager's morale bonus to Strength and Constitution during bloodrage increases to +6 and his Will save bonus increases to +3. In addition, upon entering a bloodrage he can apply the effects of a bloodrager spell he knows of 2nd level or lower to himself as a free action.",
        effects: [],
      },
      {
        name: 'Bloodline Power',
        level: 12,
        description: 'The bloodrager gains an additional bloodline power.',
        effects: [],
      },
      {
        name: 'Bloodline Bonus Feat',
        level: 12,
        description: 'The bloodrager gains another bonus feat from his bloodline-specific list.',
        effects: [],
      },
      {
        name: 'Damage Reduction',
        level: 13,
        description: 'Damage reduction increases to 3/—.',
        effects: [],
      },
      {
        name: 'Indomitable Will',
        level: 14,
        description:
          'At 14th level, the bloodrager gains a +4 bonus on Will saves to resist enchantment spells while bloodraging. This stacks with all other modifiers.',
        effects: [],
      },
      {
        name: 'Bloodline Bonus Feat',
        level: 15,
        description: 'The bloodrager gains another bonus feat from his bloodline-specific list.',
        effects: [],
      },
      {
        name: 'Bloodline Power',
        level: 16,
        description: 'The bloodrager gains an additional bloodline power.',
        effects: [],
      },
      {
        name: 'Damage Reduction',
        level: 16,
        description: 'Damage reduction increases to 4/—.',
        effects: [],
      },
      {
        name: 'Tireless Bloodrage',
        level: 17,
        description:
          'At 17th level, the bloodrager no longer becomes fatigued at the end of his bloodrage.',
        effects: [],
      },
      {
        name: 'Bloodline Bonus Feat',
        level: 18,
        description: 'The bloodrager gains another bonus feat from his bloodline-specific list.',
        effects: [],
      },
      {
        name: 'Damage Reduction',
        level: 19,
        description: 'Damage reduction increases to 5/—.',
        effects: [],
      },
      {
        name: 'Mighty Bloodrage',
        level: 20,
        description:
          "At 20th level, the bloodrager's morale bonus to Strength and Constitution during bloodrage increases to +8 and his Will save bonus increases to +4. In addition, he can apply the effects of a bloodrager spell of any level to himself when entering a bloodrage.",
        effects: [],
      },
      {
        name: 'Bloodline Power',
        level: 20,
        description: 'The bloodrager gains his final bloodline power.',
        effects: [],
      },
    ],
    spellcasting: {
      type: 'Arcane',
      casting: 'Spontaneous',
      spellList: 'Bloodrager',
      spellTableKey: 'BLOODRAGER_PER_DAY',
      spellsKnownTableKey: 'BLOODRAGER_KNOWN',
    },
    source: 'Advanced Class Guide',
  },

  // ─── BRAWLER (Fighter + Monk) ──────────────────────────────────────────────
  {
    name: 'Brawler',
    category: 'Hybrid',
    maxLevel: 20,
    hitDie: 10,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Climb',
      'Craft',
      'Escape Artist',
      'Handle Animal',
      'Intimidate',
      'Knowledge (dungeoneering)',
      'Knowledge (local)',
      'Perception',
      'Profession',
      'Ride',
      'Sense Motive',
      'Swim',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: ['Simple weapons', 'Handaxe', 'Short sword', 'Close weapon group'],
    armorProficiencies: ['Light armor', 'Shields (except tower shields)'],
    startingWealth: '3d6 x 10 gp',
    classFeatures: [
      {
        name: "Brawler's Cunning",
        level: 1,
        description:
          "If the brawler's Intelligence score is less than 13, it counts as 13 for the purpose of meeting the prerequisites of combat feats.",
        effects: [],
      },
      {
        name: 'Martial Flexibility',
        level: 1,
        description:
          "A brawler can take a move action to gain the benefit of a combat feat she doesn't possess for 1 minute. She can use this ability a number of times per day equal to 3 + half her brawler level. At 6th level, she can use it as a swift action. At 10th level, she can use it as a free action. At 12th level, she can use it as an immediate action.",
        effects: [],
      },
      {
        name: 'Martial Training',
        level: 1,
        description:
          'Brawler levels count as both fighter and monk levels for the purpose of qualifying for feats and other abilities.',
        effects: [],
      },
      {
        name: 'Unarmed Strike',
        level: 1,
        description:
          "At 1st level, a brawler gains Improved Unarmed Strike as a bonus feat. A brawler may attack with fists, elbows, knees, and feet. A brawler's unarmed strike damage is based on her level.",
        effects: [],
      },
      {
        name: "Brawler's Flurry",
        level: 2,
        description:
          'Starting at 2nd level, a brawler can make a flurry of blows as if using Two-Weapon Fighting. At 8th level this improves to Improved Two-Weapon Fighting, and at 15th level to Greater Two-Weapon Fighting.',
        effects: [],
      },
      {
        name: 'Bonus Combat Feat',
        level: 2,
        description:
          'At 2nd level and every 3 levels thereafter, a brawler gains a bonus combat feat in addition to those gained from normal advancement.',
        effects: [],
      },
      {
        name: 'Maneuver Training',
        level: 3,
        description:
          'At 3rd level, a brawler can select one combat maneuver and receive a +1 bonus on CMB checks and CMD when performing or defending against that maneuver. This bonus increases by +1 at 7th, 11th, 15th, and 19th levels. At 7th level and every 4 levels thereafter, she selects an additional maneuver.',
        effects: [],
      },
      {
        name: 'AC Bonus',
        level: 4,
        description:
          'At 4th level, the brawler gains a +1 dodge bonus to AC when wearing light or no armor and not using a shield. This increases by +1 at 9th, 13th, and 18th levels.',
        effects: [],
      },
      {
        name: 'Knockout',
        level: 4,
        description:
          'At 4th level, once per day a brawler can unleash a devastating attack that can instantly knock a target unconscious. The target must succeed at a Fortitude save (DC = 10 + 1/2 brawler level + Str modifier) or fall unconscious for 1d6 rounds. This increases to 2/day at 10th and 3/day at 16th.',
        effects: [],
      },
      {
        name: "Brawler's Strike",
        level: 5,
        description:
          "At 5th level, a brawler's unarmed attacks are treated as magic for the purpose of overcoming damage reduction. At 9th level, they are treated as cold iron and silver. At 12th level, they count as aligned. At 17th level, they are treated as adamantine.",
        effects: [],
      },
      {
        name: 'Close Weapon Mastery',
        level: 5,
        description:
          "At 5th level, the brawler's damage with close weapons is based on her unarmed strike damage, using the better of the two.",
        effects: [],
      },
      {
        name: 'Bonus Combat Feat',
        level: 5,
        description: 'Gain a bonus combat feat.',
        effects: [],
      },
      {
        name: 'Maneuver Training',
        level: 7,
        description: 'Select an additional maneuver and increase existing bonuses by +1.',
        effects: [],
      },
      {
        name: 'Bonus Combat Feat',
        level: 8,
        description: 'Gain a bonus combat feat.',
        effects: [],
      },
      { name: 'AC Bonus', level: 9, description: 'AC bonus increases to +2.', effects: [] },
      { name: 'Knockout', level: 10, description: 'Knockout increases to 2/day.', effects: [] },
      {
        name: 'Bonus Combat Feat',
        level: 11,
        description: 'Gain a bonus combat feat.',
        effects: [],
      },
      {
        name: 'Maneuver Training',
        level: 11,
        description: 'Select an additional maneuver and increase existing bonuses by +1.',
        effects: [],
      },
      { name: 'AC Bonus', level: 13, description: 'AC bonus increases to +3.', effects: [] },
      {
        name: 'Bonus Combat Feat',
        level: 14,
        description: 'Gain a bonus combat feat.',
        effects: [],
      },
      {
        name: 'Maneuver Training',
        level: 15,
        description: 'Select an additional maneuver and increase existing bonuses by +1.',
        effects: [],
      },
      {
        name: 'Awesome Blow',
        level: 16,
        description:
          'At 16th level, the brawler can as a standard action perform an awesome blow combat maneuver against a corporeal creature of her size or smaller.',
        effects: [],
      },
      { name: 'Knockout', level: 16, description: 'Knockout increases to 3/day.', effects: [] },
      {
        name: 'Bonus Combat Feat',
        level: 17,
        description: 'Gain a bonus combat feat.',
        effects: [],
      },
      { name: 'AC Bonus', level: 18, description: 'AC bonus increases to +4.', effects: [] },
      {
        name: 'Maneuver Training',
        level: 19,
        description: 'Select an additional maneuver and increase existing bonuses by +1.',
        effects: [],
      },
      {
        name: 'Improved Awesome Blow',
        level: 20,
        description:
          'At 20th level, the brawler can use her awesome blow ability against any corporeal creature, regardless of size.',
        effects: [],
      },
      {
        name: 'Bonus Combat Feat',
        level: 20,
        description: 'Gain a bonus combat feat.',
        effects: [],
      },
    ],
    spellcasting: {
      type: 'None',
      casting: 'None',
    },
    source: 'Advanced Class Guide',
  },

  // ─── HUNTER (Druid + Ranger) ───────────────────────────────────────────────
  {
    name: 'Hunter',
    category: 'Hybrid',
    maxLevel: 20,
    hitDie: 8,
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
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Shields (except tower shields)'],
    startingWealth: '4d6 x 10 gp',
    alignment: 'Any neutral',
    classFeatures: [
      {
        name: 'Animal Companion',
        level: 1,
        description:
          "A hunter forms a close bond with an animal companion. This animal companion functions as a druid's animal companion, using the hunter's level as her effective druid level.",
        effects: [],
      },
      {
        name: 'Animal Focus',
        level: 1,
        description:
          'A hunter can take on the aspect of an animal as a swift action, gaining a bonus based on the type of animal emulated. She can also apply an animal focus to her animal companion. At 8th level, she can maintain two animal foci simultaneously on herself.',
        effects: [],
      },
      {
        name: 'Nature Training',
        level: 1,
        description:
          'A hunter counts her total hunter level as both druid levels and ranger levels for the purpose of qualifying for feats, traits, and options that modify or improve an animal companion.',
        effects: [],
      },
      {
        name: 'Orisons',
        level: 1,
        description:
          'Hunters learn a number of orisons, or 0-level spells. These spells are cast like any other spell but do not consume spell slots.',
        effects: [],
      },
      {
        name: 'Wild Empathy',
        level: 1,
        description:
          "A hunter can improve the initial attitude of an animal. This ability functions just like a Diplomacy check to improve the attitude of a person, adding the hunter's level and Charisma modifier.",
        effects: [],
      },
      {
        name: 'Precise Companion',
        level: 2,
        description:
          'At 2nd level, a hunter chooses either Precise Shot or Outflank as a bonus feat. She does not need to meet the prerequisites for this feat. If she chooses Outflank, she automatically grants this feat to her animal companion as well.',
        effects: [],
      },
      {
        name: 'Track',
        level: 2,
        description:
          'At 2nd level, a hunter adds half her level to Survival skill checks made to follow tracks.',
        effects: [],
      },
      {
        name: 'Hunter Tactics',
        level: 3,
        description:
          "At 3rd level, the hunter automatically grants her teamwork feats to her animal companion. The companion doesn't need to meet the prerequisites of these feats.",
        effects: [],
      },
      {
        name: 'Teamwork Feat',
        level: 3,
        description:
          'At 3rd level and every 3 levels thereafter, the hunter gains a bonus teamwork feat. She must meet the prerequisites for the feat. As a standard action, she can swap her most recent teamwork feat for another.',
        effects: [],
      },
      {
        name: 'Improved Empathic Link',
        level: 4,
        description:
          "At 4th level, the hunter gains an empathic link with her animal companion. This functions like an empathic link with a familiar, plus she can see through the companion's eyes as a swift action.",
        effects: [],
      },
      {
        name: 'Woodland Stride',
        level: 5,
        description:
          'At 5th level, a hunter and her animal companion can move through any sort of undergrowth at normal speed without taking damage or suffering any impairment.',
        effects: [],
      },
      {
        name: 'Teamwork Feat',
        level: 6,
        description: 'Gain an additional bonus teamwork feat.',
        effects: [],
      },
      {
        name: 'Bonus Trick',
        level: 7,
        description:
          "At 7th level and every 6 levels thereafter, the hunter's animal companion learns an additional trick beyond those allowed by its Intelligence score.",
        effects: [],
      },
      {
        name: 'Second Animal Focus',
        level: 8,
        description:
          'At 8th level, whenever the hunter uses her animal focus ability, she can apply two animal aspects to herself instead of one.',
        effects: [],
      },
      {
        name: 'Swift Tracker',
        level: 8,
        description:
          'At 8th level, a hunter can move at normal speed while using Survival to follow tracks without taking the normal -5 penalty.',
        effects: [],
      },
      {
        name: 'Teamwork Feat',
        level: 9,
        description: 'Gain an additional bonus teamwork feat.',
        effects: [],
      },
      {
        name: 'Raise Animal Companion',
        level: 10,
        description:
          "At 10th level, if the hunter's animal companion is dead, she can spend 1,000 gp to resurrect it as if using the raise dead spell with a 1-minute casting time.",
        effects: [],
      },
      {
        name: 'Speak with Master',
        level: 11,
        description:
          "At 11th level, the hunter's animal companion can communicate with her as if using speak with animals, even if the companion is not normally capable of speech.",
        effects: [],
      },
      {
        name: 'Teamwork Feat',
        level: 12,
        description: 'Gain an additional bonus teamwork feat.',
        effects: [],
      },
      {
        name: 'Bonus Trick',
        level: 13,
        description: 'The animal companion learns another bonus trick.',
        effects: [],
      },
      {
        name: 'Greater Empathic Link',
        level: 14,
        description:
          'At 14th level, the hunter can telepathically communicate with her animal companion as if using speak with animals, regardless of distance (as long as they are on the same plane).',
        effects: [],
      },
      {
        name: 'Teamwork Feat',
        level: 15,
        description: 'Gain an additional bonus teamwork feat.',
        effects: [],
      },
      {
        name: 'One with the Wild',
        level: 17,
        description:
          'At 17th level, the hunter and her animal companion are so in tune with the natural world that they can intuitively sense natural hazards. Both gain a +4 insight bonus on initiative checks and cannot be surprised.',
        effects: [],
      },
      {
        name: 'Teamwork Feat',
        level: 18,
        description: 'Gain an additional bonus teamwork feat.',
        effects: [],
      },
      {
        name: 'Bonus Trick',
        level: 19,
        description: 'The animal companion learns another bonus trick.',
        effects: [],
      },
      {
        name: 'Master Hunter',
        level: 20,
        description:
          'At 20th level, a hunter becomes a master hunter. She can always move at full speed while using Survival to follow tracks without penalty. Additionally, each of her animal foci provides an additional benefit.',
        effects: [],
      },
    ],
    spellcasting: {
      type: 'Divine',
      casting: 'Spontaneous',
      spellList: 'Hunter (Druid/Ranger combined)',
      spellTableKey: 'SIX_LEVEL_SPONTANEOUS_PER_DAY',
      spellsKnownTableKey: 'SIX_LEVEL_SPONTANEOUS_KNOWN',
    },
    source: 'Advanced Class Guide',
  },

  // ─── INVESTIGATOR (Alchemist + Rogue) ──────────────────────────────────────
  {
    name: 'Investigator',
    category: 'Hybrid',
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
      'Disable Device',
      'Disguise',
      'Escape Artist',
      'Heal',
      'Intimidate',
      'Knowledge (arcana)',
      'Knowledge (dungeoneering)',
      'Knowledge (engineering)',
      'Knowledge (geography)',
      'Knowledge (history)',
      'Knowledge (local)',
      'Knowledge (nature)',
      'Knowledge (nobility)',
      'Knowledge (planes)',
      'Knowledge (religion)',
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
      'Hand crossbow',
      'Rapier',
      'Sap',
      'Shortbow',
      'Short sword',
      'Sword cane',
    ],
    armorProficiencies: ['Light armor'],
    startingWealth: '3d6 x 10 gp',
    classFeatures: [
      {
        name: 'Alchemy',
        level: 1,
        description:
          'An investigator can create mundane alchemical substances and magical potion-like extracts. When using Craft (alchemy) to create an alchemical item, an investigator gains a competence bonus equal to his class level on the check. An investigator prepares his formulae by mixing ingredients and a tiny fraction of his own magical power into a number of extracts.',
        effects: [],
      },
      {
        name: 'Inspiration',
        level: 1,
        description:
          'An investigator has an inspiration pool equal to half his investigator level + his Intelligence modifier. As a free action, he can expend one use of inspiration from his pool to add 1d6 to the result of a skill check or ability check. He can use inspiration on Knowledge, Linguistics, and Spellcraft checks without expending a use of inspiration.',
        effects: [],
      },
      {
        name: 'Trapfinding',
        level: 1,
        description:
          'An investigator adds half his level to Perception checks to locate traps and to Disable Device checks. An investigator can use Disable Device to disarm magic traps.',
        effects: [],
      },
      {
        name: 'Poison Lore',
        level: 2,
        description:
          'At 2nd level, an investigator cannot accidentally poison himself when applying poison to a weapon. He can also identify poisons by spending 1 minute examining the poison.',
        effects: [],
      },
      {
        name: 'Poison Resistance',
        level: 2,
        description:
          'At 2nd level, an investigator gains a +2 bonus on saving throws against poison. This increases to +4 at 5th level and +6 at 8th level. At 11th level, the investigator becomes completely immune to poison.',
        effects: [],
      },
      {
        name: 'Investigator Talent',
        level: 3,
        description:
          'At 3rd level and every 2 levels thereafter, an investigator gains an investigator talent, a special ability that aids him in his investigations.',
        effects: [],
      },
      {
        name: 'Keen Recollection',
        level: 3,
        description:
          'At 3rd level, an investigator can attempt all Knowledge skill checks untrained.',
        effects: [],
      },
      {
        name: 'Trap Sense',
        level: 3,
        description:
          'At 3rd level, an investigator gains a +1 bonus on Reflex saves to avoid traps and a +1 dodge bonus to AC against attacks by traps. These bonuses increase by 1 every 3 levels thereafter.',
        effects: [],
      },
      {
        name: 'Studied Combat',
        level: 4,
        description:
          'With a move action, an investigator can study a single enemy he can see. He then gains an insight bonus equal to half his investigator level on melee attack rolls and damage rolls against that creature for a number of rounds equal to his Intelligence modifier.',
        effects: [],
      },
      {
        name: 'Studied Strike',
        level: 4,
        description:
          'At 4th level, an investigator can deal an additional 1d6 points of precision damage as a free action when he hits the target of his studied combat. This increases by 1d6 every 2 levels thereafter to a maximum of 9d6 at 20th level.',
        effects: [],
      },
      {
        name: 'Swift Alchemy',
        level: 4,
        description:
          'At 4th level, an investigator can create alchemical items with astounding speed. It takes him half the normal amount of time. He can also apply poison to a weapon as a move action.',
        effects: [],
      },
      {
        name: 'Investigator Talent',
        level: 5,
        description: 'Gain an additional investigator talent.',
        effects: [],
      },
      {
        name: 'Poison Resistance',
        level: 5,
        description: 'Poison resistance increases to +4.',
        effects: [],
      },
      { name: 'Trap Sense', level: 6, description: 'Trap sense increases to +2.', effects: [] },
      {
        name: 'Investigator Talent',
        level: 7,
        description: 'Gain an additional investigator talent.',
        effects: [],
      },
      {
        name: 'Poison Resistance',
        level: 8,
        description: 'Poison resistance increases to +6.',
        effects: [],
      },
      {
        name: 'Investigator Talent',
        level: 9,
        description: 'Gain an additional investigator talent.',
        effects: [],
      },
      { name: 'Trap Sense', level: 9, description: 'Trap sense increases to +3.', effects: [] },
      {
        name: 'Poison Immunity',
        level: 11,
        description: 'At 11th level, the investigator becomes completely immune to poison.',
        effects: [],
      },
      {
        name: 'Investigator Talent',
        level: 11,
        description: 'Gain an additional investigator talent.',
        effects: [],
      },
      { name: 'Trap Sense', level: 12, description: 'Trap sense increases to +4.', effects: [] },
      {
        name: 'Investigator Talent',
        level: 13,
        description: 'Gain an additional investigator talent.',
        effects: [],
      },
      {
        name: 'Investigator Talent',
        level: 15,
        description: 'Gain an additional investigator talent.',
        effects: [],
      },
      { name: 'Trap Sense', level: 15, description: 'Trap sense increases to +5.', effects: [] },
      {
        name: 'Investigator Talent',
        level: 17,
        description: 'Gain an additional investigator talent.',
        effects: [],
      },
      { name: 'Trap Sense', level: 18, description: 'Trap sense increases to +6.', effects: [] },
      {
        name: 'Investigator Talent',
        level: 19,
        description: 'Gain an additional investigator talent.',
        effects: [],
      },
      {
        name: 'True Inspiration',
        level: 20,
        description:
          'At 20th level, an investigator can use inspiration on all skill checks and ability checks without expending uses of inspiration. Whenever he expends uses of inspiration, he adds 2d6 rather than 1d6 to the result.',
        effects: [],
      },
    ],
    spellcasting: {
      type: 'Alchemical',
      casting: 'Prepared',
      spellList: 'Alchemist',
      spellTableKey: 'SIX_LEVEL_PREPARED_PER_DAY',
    },
    source: 'Advanced Class Guide',
  },

  // ─── SHAMAN (Oracle + Witch) ───────────────────────────────────────────────
  {
    name: 'Shaman',
    category: 'Hybrid',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Craft',
      'Diplomacy',
      'Fly',
      'Handle Animal',
      'Heal',
      'Knowledge (nature)',
      'Knowledge (planes)',
      'Knowledge (religion)',
      'Profession',
      'Ride',
      'Spellcraft',
      'Survival',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons'],
    armorProficiencies: ['Light armor', 'Medium armor'],
    startingWealth: '3d6 x 10 gp',
    classFeatures: [
      {
        name: 'Orisons',
        level: 1,
        description:
          'A shaman can prepare a number of orisons, or 0-level spells, each day. These spells are cast like any other spell but do not consume spell slots.',
        effects: [],
      },
      {
        name: 'Spirit',
        level: 1,
        description:
          "A shaman forms a mystical bond with the spirits of the world. She must choose one spirit from the available options (Battle, Bones, Flame, Heavens, Life, Lore, Mammoth, Nature, Slums, Stone, Waves, Wind, or Wood). The spirit grants a spirit ability at 1st level, a greater spirit ability at 8th level, and a true spirit ability at 16th level. It also adds spells to the shaman's spell list.",
        effects: [],
      },
      {
        name: 'Spirit Animal',
        level: 1,
        description:
          "A shaman's spirit animal is her conduit to the spirit world. A shaman must commune with her spirit animal each day to prepare spells. The spirit animal also grants the shaman a special ability based on the type of animal chosen.",
        effects: [],
      },
      {
        name: 'Spirit Magic',
        level: 1,
        description:
          "A shaman's spirit adds one spell at each spell level to her daily list of available spells. These spirit magic spells cannot be exchanged for different spells.",
        effects: [],
      },
      {
        name: 'Hex',
        level: 2,
        description:
          'At 2nd level, a shaman learns a new hex. She gains additional hexes at 4th, 8th, 10th, 12th, 16th, 18th, and 20th levels. A shaman can select from shaman hexes or witch hexes.',
        effects: [],
      },
      { name: 'Hex', level: 4, description: 'The shaman gains an additional hex.', effects: [] },
      {
        name: 'Wandering Spirit',
        level: 4,
        description:
          'At 4th level, a shaman can bond with a second spirit each day. She gains the spirit ability of the wandering spirit and adds its spirit magic spells to her spell list. At 12th level, she gains the greater spirit ability. At 20th level, she gains the true spirit ability.',
        effects: [],
      },
      {
        name: 'Wandering Hex',
        level: 6,
        description:
          "At 6th level, a shaman can temporarily gain the use of one hex from her wandering spirit's hex list. She can change this hex each day when she communes with her spirit animal. At 14th level, she can use two wandering hexes.",
        effects: [],
      },
      {
        name: 'Greater Spirit',
        level: 8,
        description:
          'At 8th level, the shaman gains the greater spirit ability of her chosen spirit.',
        effects: [],
      },
      { name: 'Hex', level: 8, description: 'The shaman gains an additional hex.', effects: [] },
      { name: 'Hex', level: 10, description: 'The shaman gains an additional hex.', effects: [] },
      { name: 'Hex', level: 12, description: 'The shaman gains an additional hex.', effects: [] },
      {
        name: 'Greater Wandering Spirit',
        level: 12,
        description:
          'At 12th level, the shaman gains the greater spirit ability of her wandering spirit.',
        effects: [],
      },
      {
        name: 'Wandering Hex',
        level: 14,
        description: 'The shaman can now use two wandering hexes simultaneously.',
        effects: [],
      },
      {
        name: 'True Spirit',
        level: 16,
        description:
          'At 16th level, the shaman gains the true spirit ability of her chosen spirit.',
        effects: [],
      },
      { name: 'Hex', level: 16, description: 'The shaman gains an additional hex.', effects: [] },
      { name: 'Hex', level: 18, description: 'The shaman gains an additional hex.', effects: [] },
      {
        name: 'Manifestation',
        level: 20,
        description:
          'At 20th level, the shaman undergoes a transformation reflecting her connection to the spirit world. The exact nature depends on her chosen spirit. She also gains the true spirit ability of her wandering spirit.',
        effects: [],
      },
      { name: 'Hex', level: 20, description: 'The shaman gains an additional hex.', effects: [] },
    ],
    spellcasting: {
      type: 'Divine',
      casting: 'Prepared',
      spellList: 'Shaman',
      spellTableKey: 'FULL_9_PREPARED_PER_DAY',
    },
    source: 'Advanced Class Guide',
  },

  // ─── SKALD (Bard + Barbarian) ──────────────────────────────────────────────
  {
    name: 'Skald',
    category: 'Hybrid',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Appraise',
      'Bluff',
      'Climb',
      'Craft',
      'Diplomacy',
      'Escape Artist',
      'Handle Animal',
      'Intimidate',
      'Knowledge (arcana)',
      'Knowledge (dungeoneering)',
      'Knowledge (engineering)',
      'Knowledge (geography)',
      'Knowledge (history)',
      'Knowledge (local)',
      'Knowledge (nature)',
      'Knowledge (nobility)',
      'Knowledge (planes)',
      'Knowledge (religion)',
      'Linguistics',
      'Perception',
      'Perform',
      'Profession',
      'Ride',
      'Sense Motive',
      'Spellcraft',
      'Swim',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Shields (except tower shields)'],
    startingWealth: '3d6 x 10 gp',
    classFeatures: [
      {
        name: 'Bardic Knowledge',
        level: 1,
        description:
          'A skald adds half his class level (minimum 1) on all Knowledge skill checks and may make all Knowledge skill checks untrained.',
        effects: [],
      },
      {
        name: 'Cantrips',
        level: 1,
        description:
          'Skalds learn a number of cantrips. These spells are cast like any other spell but do not consume spell slots when cast.',
        effects: [],
      },
      {
        name: 'Inspired Rage',
        level: 1,
        description:
          'At 1st level, affected allies gain a +2 morale bonus to Strength and Constitution, a +1 morale bonus on Will saves, and a -1 penalty to AC. Unlike a barbarian, these are typed bonuses. At 4th level, the bonuses increase to +4 Str/Con, +2 Will, -2 AC. At 8th, +6/+3/-3. At 12th, +8/+4/-4. At 16th and beyond, allies may use rage powers the skald knows.',
        effects: [],
      },
      {
        name: 'Raging Song',
        level: 1,
        description:
          'A skald can use raging song for a number of rounds per day equal to 3 + his Charisma modifier, plus 2 additional rounds per level. Starting a raging song is a standard action (move action at 7th, swift at 13th).',
        effects: [],
      },
      {
        name: 'Scribe Scroll',
        level: 1,
        description: 'At 1st level, a skald gains Scribe Scroll as a bonus feat.',
        effects: [],
      },
      {
        name: 'Versatile Performance',
        level: 2,
        description:
          'At 2nd level, a skald can choose one type of Perform skill. He can use his bonus in that skill in place of his bonus in associated skills. He selects another Perform type at 7th level.',
        effects: [],
      },
      {
        name: 'Well-Versed',
        level: 2,
        description:
          'At 2nd level, the skald gains a +4 bonus on saving throws against bardic performance, sonic, and language-dependent effects.',
        effects: [],
      },
      {
        name: 'Rage Power',
        level: 3,
        description:
          'At 3rd level and every 3 levels thereafter, a skald learns a rage power that affects him and any allies under the effect of his inspired rage. He may not select rage powers that require the creature to spend a round of rage.',
        effects: [],
      },
      {
        name: 'Song of Marching',
        level: 3,
        description:
          'At 3rd level, a skald can use raging song to inspire allies to hustle without fatigue, expending 1 round of raging song for each hour of the march.',
        effects: [],
      },
      {
        name: 'Uncanny Dodge',
        level: 4,
        description:
          'At 4th level, the skald gains the ability to react to danger before his senses would normally allow him to do so. He cannot be caught flat-footed and retains his Dexterity bonus to AC.',
        effects: [],
      },
      {
        name: 'Spell Kenning',
        level: 5,
        description:
          'At 5th level, a skald can cast any spell from the bard, cleric, or sorcerer/wizard spell list once per day by using a skald spell slot. At 11th level, he can use this ability twice per day. At 17th, three times per day.',
        effects: [],
      },
      {
        name: 'Song of Strength',
        level: 6,
        description:
          'At 6th level, a skald can use raging song to allow allies to add half his skald level to Strength checks, Strength-based skill checks, and combat maneuver checks once per round.',
        effects: [],
      },
      {
        name: 'Rage Power',
        level: 6,
        description: 'The skald learns an additional rage power.',
        effects: [],
      },
      {
        name: 'Lore Master',
        level: 7,
        description:
          'At 7th level, a skald can take 10 on any Knowledge skill check. Once per day, he can take 20 on a Knowledge check as a standard action. At 13th level and every 6 levels thereafter, he can take 20 one additional time per day.',
        effects: [],
      },
      {
        name: 'Versatile Performance',
        level: 7,
        description: 'The skald selects another Perform type for versatile performance.',
        effects: [],
      },
      {
        name: 'Improved Uncanny Dodge',
        level: 8,
        description:
          'At 8th level, the skald can no longer be flanked. This defense denies rogues the sneak attack ability unless the attacker has at least four more rogue levels than the skald.',
        effects: [],
      },
      {
        name: 'Damage Reduction',
        level: 9,
        description:
          'At 9th level, a skald gains damage reduction 1/—. This increases to 2/— at 14th level and 3/— at 19th level.',
        effects: [],
      },
      {
        name: 'Rage Power',
        level: 9,
        description: 'The skald learns an additional rage power.',
        effects: [],
      },
      {
        name: 'Dirge of Doom',
        level: 10,
        description:
          'At 10th level, a skald can use raging song to create an aura of doom. Enemies within 30 feet become shaken unless they succeed at a Will save.',
        effects: [],
      },
      {
        name: 'Spell Kenning',
        level: 11,
        description: 'Spell kenning increases to 2/day.',
        effects: [],
      },
      {
        name: 'Rage Power',
        level: 12,
        description: 'The skald learns an additional rage power.',
        effects: [],
      },
      {
        name: 'Lore Master',
        level: 13,
        description: 'Lore master take-20 increases to 2/day.',
        effects: [],
      },
      {
        name: 'Song of the Fallen',
        level: 14,
        description:
          'At 14th level, a skald can temporarily revive dead allies using raging song. Dead allies within 60 feet are raised as if by raise dead for as long as the skald continues his song.',
        effects: [],
      },
      {
        name: 'Damage Reduction',
        level: 14,
        description: 'Damage reduction increases to 2/—.',
        effects: [],
      },
      {
        name: 'Rage Power',
        level: 15,
        description: 'The skald learns an additional rage power.',
        effects: [],
      },
      {
        name: 'Spell Kenning',
        level: 17,
        description: 'Spell kenning increases to 3/day.',
        effects: [],
      },
      {
        name: 'Rage Power',
        level: 18,
        description: 'The skald learns an additional rage power.',
        effects: [],
      },
      {
        name: 'Damage Reduction',
        level: 19,
        description: 'Damage reduction increases to 3/—.',
        effects: [],
      },
      {
        name: 'Lore Master',
        level: 19,
        description: 'Lore master take-20 increases to 3/day.',
        effects: [],
      },
      {
        name: 'Master Skald',
        level: 20,
        description:
          "At 20th level, the skald's inspired rage no longer imposes an AC penalty. Additionally, allies under his raging song can make one extra attack per round when making a full attack as if using haste.",
        effects: [],
      },
    ],
    spellcasting: {
      type: 'Arcane',
      casting: 'Spontaneous',
      spellList: 'Bard',
      spellTableKey: 'SIX_LEVEL_SPONTANEOUS_PER_DAY',
      spellsKnownTableKey: 'SIX_LEVEL_SPONTANEOUS_KNOWN',
    },
    source: 'Advanced Class Guide',
  },

  // ─── SLAYER (Ranger + Rogue) ───────────────────────────────────────────────
  {
    name: 'Slayer',
    category: 'Hybrid',
    maxLevel: 20,
    hitDie: 10,
    skillRanksPerLevel: 6,
    classSkills: [
      'Acrobatics',
      'Bluff',
      'Climb',
      'Craft',
      'Disguise',
      'Heal',
      'Intimidate',
      'Knowledge (dungeoneering)',
      'Knowledge (geography)',
      'Knowledge (local)',
      'Perception',
      'Profession',
      'Ride',
      'Sense Motive',
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
    armorProficiencies: ['Light armor', 'Medium armor', 'Shields (except tower shields)'],
    startingWealth: '5d6 x 10 gp',
    classFeatures: [
      {
        name: 'Studied Target',
        level: 1,
        description:
          'A slayer can study an opponent he can see as a move action. He gains a +1 bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks against that target, as well as a +1 bonus on weapon attack and damage rolls. At 5th level and every 5 levels thereafter, the bonus increases by 1 and the slayer can maintain the bonus against one additional target simultaneously.',
        effects: [],
      },
      {
        name: 'Track',
        level: 1,
        description:
          'A slayer adds half his level (minimum 1) to Survival skill checks made to follow tracks.',
        effects: [],
      },
      {
        name: 'Slayer Talent',
        level: 2,
        description:
          'At 2nd level and every 2 levels thereafter, a slayer gains a slayer talent. These abilities grant extra combat options, skills, or other special abilities.',
        effects: [],
      },
      {
        name: 'Sneak Attack',
        level: 3,
        description:
          'At 3rd level, the slayer deals an extra 1d6 points of damage when his target is flat-footed or flanked. This increases by 1d6 every 3 levels thereafter, to a maximum of 6d6 at 18th level.',
        effects: [],
      },
      {
        name: 'Slayer Talent',
        level: 4,
        description: 'Gain an additional slayer talent.',
        effects: [],
      },
      {
        name: 'Studied Target',
        level: 5,
        description:
          'Studied target bonus increases to +2 and the slayer can study two targets simultaneously.',
        effects: [],
      },
      {
        name: 'Sneak Attack',
        level: 6,
        description: 'Sneak attack increases to 2d6.',
        effects: [],
      },
      {
        name: 'Slayer Talent',
        level: 6,
        description: 'Gain an additional slayer talent.',
        effects: [],
      },
      {
        name: 'Stalker',
        level: 7,
        description:
          'At 7th level, a slayer gains his studied target bonus on Disguise, Intimidate, and Stealth checks against studied opponents.',
        effects: [],
      },
      {
        name: 'Slayer Talent',
        level: 8,
        description: 'Gain an additional slayer talent.',
        effects: [],
      },
      {
        name: 'Sneak Attack',
        level: 9,
        description: 'Sneak attack increases to 3d6.',
        effects: [],
      },
      {
        name: 'Advanced Talents',
        level: 10,
        description:
          'At 10th level, the slayer gains access to advanced slayer talents whenever he could choose a slayer talent.',
        effects: [],
      },
      {
        name: 'Studied Target',
        level: 10,
        description:
          'Studied target bonus increases to +3 and the slayer can study three targets simultaneously.',
        effects: [],
      },
      {
        name: 'Slayer Talent',
        level: 10,
        description: 'Gain an additional slayer talent.',
        effects: [],
      },
      {
        name: 'Swift Tracker',
        level: 11,
        description:
          'At 11th level, a slayer can move at normal speed while using Survival to follow tracks without taking the normal -5 penalty.',
        effects: [],
      },
      {
        name: 'Sneak Attack',
        level: 12,
        description: 'Sneak attack increases to 4d6.',
        effects: [],
      },
      {
        name: 'Slayer Talent',
        level: 12,
        description: 'Gain an additional slayer talent.',
        effects: [],
      },
      {
        name: "Slayer's Advance",
        level: 13,
        description:
          'At 13th level, once per day the slayer can move up to twice his base speed as a move action and still use Stealth at no penalty.',
        effects: [],
      },
      {
        name: 'Slayer Talent',
        level: 14,
        description: 'Gain an additional slayer talent.',
        effects: [],
      },
      {
        name: 'Quarry',
        level: 14,
        description:
          'At 14th level, the slayer can designate one studied target as his quarry. He gains a +2 insight bonus on attack rolls against his quarry, and all critical threats are automatically confirmed.',
        effects: [],
      },
      {
        name: 'Studied Target',
        level: 15,
        description:
          'Studied target bonus increases to +4 and the slayer can study four targets simultaneously.',
        effects: [],
      },
      {
        name: 'Sneak Attack',
        level: 15,
        description: 'Sneak attack increases to 5d6.',
        effects: [],
      },
      {
        name: 'Slayer Talent',
        level: 16,
        description: 'Gain an additional slayer talent.',
        effects: [],
      },
      {
        name: 'Slayer Talent',
        level: 18,
        description: 'Gain an additional slayer talent.',
        effects: [],
      },
      {
        name: 'Sneak Attack',
        level: 18,
        description: 'Sneak attack increases to 6d6.',
        effects: [],
      },
      {
        name: 'Improved Quarry',
        level: 19,
        description:
          'At 19th level, the slayer can select a quarry as a free action. He gains a +4 insight bonus on attack rolls against his quarry instead of +2.',
        effects: [],
      },
      {
        name: 'Master Slayer',
        level: 20,
        description:
          'At 20th level, the slayer can make a single melee attack against a studied target as a standard action. If the attack hits, the target must succeed at a Fortitude save (DC = 10 + 1/2 slayer level + Int modifier) or die. Whether or not the target succeeds, it cannot be targeted by this ability again for 24 hours.',
        effects: [],
      },
      {
        name: 'Studied Target',
        level: 20,
        description:
          'Studied target bonus increases to +5 and the slayer can study five targets simultaneously.',
        effects: [],
      },
      {
        name: 'Slayer Talent',
        level: 20,
        description: 'Gain an additional slayer talent.',
        effects: [],
      },
    ],
    spellcasting: {
      type: 'None',
      casting: 'None',
    },
    source: 'Advanced Class Guide',
  },

  // ─── SWASHBUCKLER (Fighter + Gunslinger) ───────────────────────────────────
  {
    name: 'Swashbuckler',
    category: 'Hybrid',
    maxLevel: 20,
    hitDie: 10,
    skillRanksPerLevel: 4,
    classSkills: [
      'Acrobatics',
      'Bluff',
      'Climb',
      'Craft',
      'Diplomacy',
      'Escape Artist',
      'Intimidate',
      'Knowledge (local)',
      'Knowledge (nobility)',
      'Perception',
      'Perform',
      'Profession',
      'Ride',
      'Sense Motive',
      'Sleight of Hand',
      'Swim',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: ['Light armor', 'Bucklers'],
    startingWealth: '5d6 x 10 gp',
    classFeatures: [
      {
        name: 'Panache',
        level: 1,
        description:
          'A swashbuckler gains a number of panache points at the start of each day equal to her Charisma modifier (minimum 1). She regains panache by confirming a critical hit or making a killing blow with a light or one-handed piercing melee weapon.',
        effects: [],
      },
      {
        name: 'Swashbuckler Finesse',
        level: 1,
        description:
          'At 1st level, a swashbuckler gains the benefits of the Weapon Finesse feat with light or one-handed piercing melee weapons, and she can use her Charisma score in place of Intelligence for combat feat prerequisites.',
        effects: [],
      },
      {
        name: 'Deeds',
        level: 1,
        description:
          'Swashbucklers spend panache points to accomplish deeds. At 1st level, she gains access to Derring-Do (spend 1 panache to add 1d6 to Acrobatics, Climb, Escape Artist, Fly, Ride, or Swim check), Dodging Panache (spend 1 panache as immediate action to gain Charisma bonus to AC against one attack), and Opportune Parry and Riposte (spend 1 panache as AoO to attempt to parry, then riposte on success).',
        effects: [],
      },
      {
        name: 'Charmed Life',
        level: 2,
        description:
          'At 2nd level, the swashbuckler can add her Charisma modifier to a saving throw as an immediate action three times per day. This increases to four at 6th, five at 10th, six at 14th, and seven at 18th level.',
        effects: [],
      },
      {
        name: 'Nimble',
        level: 3,
        description:
          'At 3rd level, a swashbuckler gains a +1 dodge bonus to AC while wearing light or no armor. Anything that causes her to lose her Dexterity bonus also causes her to lose this bonus. This bonus increases by 1 for every 4 levels beyond 3rd, to a maximum of +5 at 19th level.',
        effects: [],
      },
      {
        name: 'Deeds',
        level: 3,
        description:
          'At 3rd level, the swashbuckler gains access to Kip-Up (spend 1 panache to stand from prone as a move action without provoking), Menacing Swordplay (while having at least 1 panache, Intimidate as swift action after hitting), Precise Strike (while having at least 1 panache, add swashbuckler level to damage with light or one-handed piercing melee weapons), and Swashbuckler Initiative (while having at least 1 panache, +2 on initiative checks).',
        effects: [],
      },
      {
        name: 'Bonus Feat',
        level: 4,
        description:
          'At 4th level and every 4 levels thereafter, a swashbuckler gains a bonus combat feat.',
        effects: [],
      },
      {
        name: 'Swashbuckler Weapon Training',
        level: 5,
        description:
          'At 5th level, a swashbuckler gains a +1 bonus on attack and damage rolls with light or one-handed piercing melee weapons. She also gains the benefit of Improved Critical with these weapons. This bonus increases by 1 for every 4 levels beyond 5th, to a maximum of +4 at 17th level.',
        effects: [],
      },
      {
        name: 'Charmed Life',
        level: 6,
        description: 'Charmed life increases to 4/day.',
        effects: [],
      },
      {
        name: 'Deeds',
        level: 7,
        description:
          "At 7th level, the swashbuckler gains access to Swashbuckler's Grace (spend 1 panache to move through difficult terrain without penalty), Superior Feint (spend 1 panache to feint as a swift action), and Targeted Strike (spend 1 panache to target specific body parts for penalties).",
        effects: [],
      },
      { name: 'Bonus Feat', level: 8, description: 'Gain a bonus combat feat.', effects: [] },
      {
        name: 'Swashbuckler Weapon Training',
        level: 9,
        description: 'Weapon training bonus increases to +2.',
        effects: [],
      },
      {
        name: 'Charmed Life',
        level: 10,
        description: 'Charmed life increases to 5/day.',
        effects: [],
      },
      {
        name: 'Deeds',
        level: 11,
        description:
          "At 11th level, the swashbuckler gains access to Bleeding Wound (spend panache to add bleed damage), Evasive (spend 1 panache to gain evasion until start of next turn), and Subtle Blade (while having at least 1 panache, opponents don't gain bonuses for flanking her).",
        effects: [],
      },
      { name: 'Bonus Feat', level: 12, description: 'Gain a bonus combat feat.', effects: [] },
      {
        name: 'Swashbuckler Weapon Training',
        level: 13,
        description: 'Weapon training bonus increases to +3.',
        effects: [],
      },
      {
        name: 'Charmed Life',
        level: 14,
        description: 'Charmed life increases to 6/day.',
        effects: [],
      },
      {
        name: 'Deeds',
        level: 15,
        description:
          "At 15th level, the swashbuckler gains access to Dizzying Defense (while having at least 1 panache, fight defensively with reduced penalties), Perfect Thrust (spend 2 panache for a touch attack that ignores DR and hardness), and Swashbuckler's Edge (while having at least 1 panache, take 10 on Acrobatics, Climb, Escape Artist, Fly, Ride, or Swim even when distracted or in danger).",
        effects: [],
      },
      { name: 'Bonus Feat', level: 16, description: 'Gain a bonus combat feat.', effects: [] },
      {
        name: 'Swashbuckler Weapon Training',
        level: 17,
        description: 'Weapon training bonus increases to +4.',
        effects: [],
      },
      {
        name: 'Charmed Life',
        level: 18,
        description: 'Charmed life increases to 7/day.',
        effects: [],
      },
      {
        name: 'Deeds',
        level: 19,
        description:
          'At 19th level, the swashbuckler gains access to Cheat Death (spend all remaining panache as immediate action to avoid death), Deadly Stab (spend 2 panache to attempt a death attack), and Stunning Stab (spend 2 panache to stun the target for 1 round).',
        effects: [],
      },
      {
        name: 'Nimble',
        level: 19,
        description: 'Nimble bonus reaches maximum of +5.',
        effects: [],
      },
      { name: 'Bonus Feat', level: 20, description: 'Gain a bonus combat feat.', effects: [] },
      {
        name: 'Swashbuckler Weapon Mastery',
        level: 20,
        description:
          'At 20th level, when the swashbuckler threatens a critical hit with a light or one-handed piercing melee weapon, the critical is automatically confirmed. Additionally, the critical multiplier of such weapons increases by 1 (x2 becomes x3, for example).',
        effects: [],
      },
    ],
    spellcasting: {
      type: 'None',
      casting: 'None',
    },
    source: 'Advanced Class Guide',
  },

  // ─── WARPRIEST (Cleric + Fighter) ──────────────────────────────────────────
  {
    name: 'Warpriest',
    category: 'Hybrid',
    maxLevel: 20,
    hitDie: 8,
    skillRanksPerLevel: 2,
    classSkills: [
      'Climb',
      'Craft',
      'Diplomacy',
      'Handle Animal',
      'Heal',
      'Intimidate',
      'Knowledge (engineering)',
      'Knowledge (religion)',
      'Profession',
      'Ride',
      'Sense Motive',
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
    weaponProficiencies: ['Simple weapons', 'Martial weapons', "Deity's favored weapon"],
    armorProficiencies: [
      'Light armor',
      'Medium armor',
      'Heavy armor',
      'Shields (except tower shields)',
    ],
    startingWealth: '5d6 x 10 gp',
    alignment: 'Within one step of deity',
    classFeatures: [
      {
        name: 'Aura',
        level: 1,
        description:
          "A warpriest of a chaotic, evil, good, or lawful deity has a particularly powerful aura corresponding to the deity's alignment.",
        effects: [],
      },
      {
        name: 'Blessings',
        level: 1,
        description:
          "A warpriest selects two blessings from among those granted by his deity (each connected to one of his deity's domains). He can call upon the power of his blessings a number of times per day equal to 3 + half his warpriest level. At 10th level, he gains access to the major blessing power of each of his blessings.",
        effects: [],
      },
      {
        name: 'Focus Weapon',
        level: 1,
        description:
          "At 1st level, a warpriest receives Weapon Focus as a bonus feat (the weapon must be his deity's favored weapon).",
        effects: [],
      },
      {
        name: 'Orisons',
        level: 1,
        description:
          'Warpriests can prepare a number of orisons each day. These spells are cast like any other spell but do not consume spell slots.',
        effects: [],
      },
      {
        name: 'Sacred Weapon',
        level: 1,
        description:
          "At 1st level, weapons wielded by a warpriest are charged with divine power. His deity's favored weapon deals damage based on the warpriest's level rather than the weapon's base damage die. At 4th level, the warpriest can enhance his weapon with a +1 enhancement bonus as a swift action. This increases to +2 at 8th, +3 at 12th, +4 at 16th, and +5 at 20th level.",
        effects: [],
      },
      {
        name: 'Fervor',
        level: 2,
        description:
          'At 2nd level, a warpriest can draw upon the power of his faith to heal wounds or harm foes. He can use this ability a number of times per day equal to half his warpriest level + his Wisdom modifier. Fervor heals 1d6 damage (or deals 1d6 to undead), increasing by 1d6 for every 3 levels beyond 2nd. He can also use fervor to cast any warpriest spell as a swift action.',
        effects: [],
      },
      {
        name: 'Bonus Feat',
        level: 3,
        description:
          'At 3rd level and every 3 levels thereafter, a warpriest gains a bonus combat feat. He must meet the prerequisites for the feat.',
        effects: [],
      },
      {
        name: 'Channel Energy',
        level: 4,
        description:
          'At 4th level, a warpriest can channel energy as a cleric by expending 2 uses of fervor. This creates a 30-foot burst that either heals living creatures or damages undead for an amount equal to the fervor amount. The DC is 10 + half the warpriest level + his Wisdom modifier.',
        effects: [],
      },
      {
        name: 'Sacred Weapon Enhancement',
        level: 4,
        description:
          'At 4th level, the warpriest gains the ability to enhance his sacred weapon with a +1 enhancement bonus. He can also add weapon special abilities. The enhancement lasts for a number of rounds per day equal to his warpriest level.',
        effects: [],
      },
      {
        name: 'Fervor',
        level: 5,
        description: 'Fervor damage/healing increases to 2d6.',
        effects: [],
      },
      { name: 'Bonus Feat', level: 6, description: 'Gain a bonus combat feat.', effects: [] },
      {
        name: 'Sacred Armor',
        level: 7,
        description:
          'At 7th level, the warpriest can enhance his armor with a +1 enhancement bonus as a swift action, lasting for a number of minutes per day equal to his warpriest level. The bonus increases to +2 at 10th, +3 at 13th, +4 at 16th, and +5 at 19th level. He can add special abilities to the armor instead of enhancement bonuses.',
        effects: [],
      },
      {
        name: 'Fervor',
        level: 8,
        description: 'Fervor damage/healing increases to 3d6.',
        effects: [],
      },
      {
        name: 'Sacred Weapon Enhancement',
        level: 8,
        description: 'Sacred weapon enhancement increases to +2.',
        effects: [],
      },
      { name: 'Bonus Feat', level: 9, description: 'Gain a bonus combat feat.', effects: [] },
      {
        name: 'Blessings',
        level: 10,
        description:
          'The warpriest gains access to the major blessing power of each of his blessings.',
        effects: [],
      },
      {
        name: 'Sacred Armor',
        level: 10,
        description: 'Sacred armor enhancement increases to +2.',
        effects: [],
      },
      {
        name: 'Fervor',
        level: 11,
        description: 'Fervor damage/healing increases to 4d6.',
        effects: [],
      },
      { name: 'Bonus Feat', level: 12, description: 'Gain a bonus combat feat.', effects: [] },
      {
        name: 'Sacred Weapon Enhancement',
        level: 12,
        description: 'Sacred weapon enhancement increases to +3.',
        effects: [],
      },
      {
        name: 'Sacred Armor',
        level: 13,
        description: 'Sacred armor enhancement increases to +3.',
        effects: [],
      },
      {
        name: 'Fervor',
        level: 14,
        description: 'Fervor damage/healing increases to 5d6.',
        effects: [],
      },
      { name: 'Bonus Feat', level: 15, description: 'Gain a bonus combat feat.', effects: [] },
      {
        name: 'Sacred Weapon Enhancement',
        level: 16,
        description: 'Sacred weapon enhancement increases to +4.',
        effects: [],
      },
      {
        name: 'Sacred Armor',
        level: 16,
        description: 'Sacred armor enhancement increases to +4.',
        effects: [],
      },
      {
        name: 'Fervor',
        level: 17,
        description: 'Fervor damage/healing increases to 6d6.',
        effects: [],
      },
      { name: 'Bonus Feat', level: 18, description: 'Gain a bonus combat feat.', effects: [] },
      {
        name: 'Sacred Armor',
        level: 19,
        description: 'Sacred armor enhancement increases to +5.',
        effects: [],
      },
      {
        name: 'Sacred Weapon Enhancement',
        level: 20,
        description: 'Sacred weapon enhancement increases to +5.',
        effects: [],
      },
      {
        name: 'Fervor',
        level: 20,
        description: 'Fervor damage/healing increases to 7d6.',
        effects: [],
      },
      {
        name: 'Aspect of War',
        level: 20,
        description:
          "At 20th level, the warpriest can channel an aspect of war once per day as a swift action. For 1 minute, he treats his level as his base attack bonus, gains DR 10/—, and can move at full speed regardless of armor or encumbrance. Blessing uses during this time don't count against his daily limit.",
        effects: [],
      },
    ],
    spellcasting: {
      type: 'Divine',
      casting: 'Prepared',
      spellList: 'Cleric (6th-level max)',
      spellTableKey: 'MAGUS_PREPARED_PER_DAY',
    },
    source: 'Advanced Class Guide',
  },
];
