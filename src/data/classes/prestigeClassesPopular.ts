// Popular Prestige Classes — 12 widely-used prestige classes from various Pathfinder 1e sourcebooks
// Sources: Path of the Hellknight, Inner Sea Gods, Inner Sea Magic, Inner Sea World Guide,
//          Paths of Prestige, Pathfinder Campaign Setting

import { BABProgression, SaveProgression } from '@/types/base';
import { ExpandedClassData } from './types';

export const PRESTIGE_CLASSES_POPULAR: ExpandedClassData[] = [
  // ─── 1. Hellknight ───────────────────────────────────────────────────────────
  {
    name: 'Hellknight',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 10,
    skillRanksPerLevel: 2,
    classSkills: ['Intimidate', 'Knowledge (local)', 'Perception', 'Ride', 'Sense Motive'],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    alignment: 'Any lawful',
    prerequisites: {
      bab: 5,
      skills: [
        { name: 'Intimidate', ranks: 5 },
        { name: 'Knowledge (planes)', ranks: 5 },
      ],
      alignment: 'Any lawful',
      special: ['Must slay a devil in single combat with no assistance from others'],
    },
    classFeatures: [
      {
        name: 'Aura of Law',
        level: 1,
        description:
          "The power of a Hellknight's aura of law (see the detect law spell) is equal to his total character level.",
        effects: [],
      },
      {
        name: 'Detect Chaos',
        level: 1,
        description:
          "This ability functions like a paladin's detect evil ability, save that it detects chaos rather than evil.",
        effects: [],
      },
      {
        name: 'Order',
        level: 1,
        description:
          'A Hellknight must choose one Hellknight order to join. The choice of order determines which disciplines the Hellknight later has access to.',
        effects: [],
      },
      {
        name: 'Smite Chaos 1/day',
        level: 1,
        description:
          "This ability functions as the paladin's smite evil ability, but against chaotic-aligned creatures. The smite deals twice the Hellknight's level in bonus damage on the first successful attack against outsiders with the chaotic subtype, chaotic-aligned aberrations, and fey.",
        effects: [],
      },
      {
        name: 'Discern Lies',
        level: 2,
        description:
          'At 2nd level, a Hellknight can use discern lies as a spell-like ability a number of times per day equal to 3 + his Charisma modifier, with a caster level equal to his total character level.',
        effects: [],
      },
      {
        name: 'Hellknight Armor 1',
        level: 2,
        description:
          'At 2nd level, a Hellknight earns the right to wear Hellknight armor. While wearing this armor, the Hellknight reduces the armor check penalty by 1 and increases the maximum Dexterity bonus allowed by 1. He moves at full speed in Hellknight plate.',
        effects: [],
      },
      {
        name: 'Discipline',
        level: 3,
        description:
          'At 3rd level, a Hellknight gains his first discipline, chosen from those available to his order. Disciplines can be used once per day at 3rd level, twice per day at 6th level, and three times per day at 9th level.',
        effects: [],
      },
      {
        name: 'Force of Will 1',
        level: 3,
        description:
          'At 3rd level, a Hellknight gains a +2 bonus on Will saves against spells with one of the following subschools or descriptors: charm, compulsion, glamer, fear, figment, pattern, or phantasm. The Hellknight chooses which subschool or descriptor when he gains this ability.',
        effects: [],
      },
      {
        name: 'Smite Chaos 2/day',
        level: 4,
        description: 'At 4th level, the Hellknight can use smite chaos twice per day.',
        effects: [],
      },
      {
        name: 'Hellknight Armor 2',
        level: 5,
        description:
          'At 5th level, the Hellknight Armor adjustments increase to 2 (armor check penalty reduction and maximum Dexterity bonus increase).',
        effects: [],
      },
      {
        name: 'Discipline',
        level: 6,
        description:
          "At 6th level, the Hellknight gains a second discipline, chosen from any order's discipline list. All disciplines may now be used twice per day.",
        effects: [],
      },
      {
        name: 'Force of Will 2',
        level: 6,
        description:
          'At 6th level, the Hellknight chooses a second subschool or descriptor for Force of Will. The bonus for the first chosen subschool or descriptor increases to +4, while the new one starts at +2.',
        effects: [],
      },
      {
        name: 'Lawbringer',
        level: 7,
        description:
          "At 7th level, a Hellknight's weapon attacks are treated as lawful for the purpose of overcoming damage reduction.",
        effects: [],
      },
      {
        name: 'Smite Chaos 3/day',
        level: 7,
        description: 'At 7th level, the Hellknight can use smite chaos three times per day.',
        effects: [],
      },
      {
        name: 'Hellknight Armor 3',
        level: 8,
        description: 'At 8th level, the Hellknight Armor adjustments increase to 3.',
        effects: [],
      },
      {
        name: 'Discipline',
        level: 9,
        description:
          "At 9th level, the Hellknight gains a third discipline, chosen from any order's discipline list. All disciplines may now be used three times per day.",
        effects: [],
      },
      {
        name: 'Force of Will 3',
        level: 9,
        description:
          'At 9th level, the Hellknight chooses a third subschool or descriptor. Bonuses become +6, +4, and +2 respectively.',
        effects: [],
      },
      {
        name: 'Infernal Armor',
        level: 9,
        description:
          'At 9th level, while wearing Hellknight plate, the Hellknight gains a +2 bonus on all Charisma-based checks made to interact with lawful, nongood creatures, and gains darkvision 60 ft., resistance to fire 30, acid 10, and cold 10.',
        effects: [],
      },
      {
        name: "Hell's Knight",
        level: 10,
        description:
          'At 10th level, a Hellknight can grant a weapon within 100 feet the axiomatic, flaming burst, or unholy special ability for a number of rounds equal to his Charisma modifier. The Hellknight also becomes immune to fire while wearing Hellknight plate.',
        effects: [],
      },
      {
        name: 'Smite Chaos 4/day',
        level: 10,
        description: 'At 10th level, the Hellknight can use smite chaos four times per day.',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: 'Path of the Hellknight',
  },

  // ─── 2. Hellknight Signifer ──────────────────────────────────────────────────
  {
    name: 'Hellknight Signifer',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 8,
    skillRanksPerLevel: 2,
    classSkills: [
      'Diplomacy',
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
    weaponProficiencies: ['Order favored weapon'],
    armorProficiencies: ['Heavy armor'],
    alignment: 'Any lawful',
    prerequisites: {
      skills: [
        { name: 'Intimidate', ranks: 5 },
        { name: 'Knowledge (planes)', ranks: 5 },
        { name: 'Spellcraft', ranks: 5 },
      ],
      feats: ['Arcane Armor Training'],
      alignment: 'Any lawful',
      spellcasting: 'Ability to cast 3rd-level arcane spells or 2nd-level divine spells',
      special: ['Must slay a devil in single combat with no assistance from others'],
    },
    classFeatures: [
      {
        name: 'Aura of Law',
        level: 1,
        description:
          "The power of a Hellknight signifer's aura of law is equal to his total character level.",
        effects: [],
      },
      {
        name: 'Catechesis',
        level: 1,
        description:
          'Signifer levels stack with levels of one divine spellcasting class for determining the effects of domain powers, inquisitions, and mysteries. If the signifer has the Warrior Priest feat, he also gains Alignment Channel (chaos) as a bonus feat.',
        effects: [],
      },
      {
        name: 'Order',
        level: 1,
        description:
          "A Hellknight signifer must choose one Hellknight order to join, gaining access to that order's favored weapon.",
        effects: [],
      },
      {
        name: 'Signifer Mask',
        level: 1,
        description:
          "Upon initiation, a Hellknight signifer receives a mask, often of metal or wood, which obscures the wearer's face. The mask grants a +2 competence bonus on Sense Motive checks and on saving throws against spells and abilities that rely on visual effects. A signifer who is also an arcane spellcaster may use the mask as a bonded object.",
        effects: [],
      },
      {
        name: 'Arcane Armor Expertise',
        level: 2,
        description:
          'At 2nd level, the Hellknight signifer gains the Arcane Armor Mastery feat as a bonus feat.',
        effects: [],
      },
      {
        name: 'Signifer Armor Training 1',
        level: 3,
        description:
          'At 3rd level, while wearing armor, a Hellknight signifer reduces the armor check penalty by 1 (to a minimum of 0) and reduces arcane spell failure by 5%.',
        effects: [],
      },
      {
        name: 'Assiduous Gaze',
        level: 4,
        description:
          'At 4th level, a Hellknight signifer can activate an assiduous gaze ability as a swift action to examine a single creature, object, or 5-foot square within 30 feet. He can use this ability a number of times per day equal to half his class level. Available options include Elucidation (discern active spells), Morality (detect alignment), Scrutiny (detect spellcasting), and Vigilance (see through barriers up to 5 feet of wood or stone).',
        effects: [],
      },
      {
        name: 'Arcane Armor Expertise (Improved)',
        level: 5,
        description:
          'At 5th level, the Hellknight signifer can don armor as an immediate action rather than a swift action when using Arcane Armor Mastery.',
        effects: [],
      },
      {
        name: 'Discern Lies',
        level: 6,
        description:
          'At 6th level, a Hellknight signifer can use discern lies as a spell-like ability a number of times per day equal to 3 + his Charisma modifier, with a caster level equal to his total character level.',
        effects: [],
      },
      {
        name: 'Assiduous Gaze (2nd)',
        level: 7,
        description:
          'At 7th level, the signifer gains a second assiduous gaze ability. The Veracity option also becomes available, granting a true seeing effect for 1 round.',
        effects: [],
      },
      {
        name: 'Signifer Armor Training 2',
        level: 8,
        description:
          'At 8th level, the armor check penalty reduction increases by an additional 1, and arcane spell failure is reduced by an additional 5%. In addition, the signifer offsets the 5-foot speed reduction from wearing medium or heavy armor.',
        effects: [],
      },
      {
        name: 'Infernal Resilience',
        level: 9,
        description:
          'At 9th level, a Hellknight signifer gains DR 5/chaotic and becomes immune to poison.',
        effects: [],
      },
      {
        name: 'Diabolic Harbinger',
        level: 10,
        description:
          'At 10th level, the signifer gains telepathy with a range of 100 feet, can see perfectly in darkness of any kind, becomes immune to blindness and dazzled effects, and gains a +2 bonus on Charisma-based checks with lawful creatures (+4 with lawful outsiders).',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    advancesSpellcasting: {
      mode: 'single',
      tradition: 'chosen',
      atLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    source: 'Path of the Hellknight',
  },

  // ─── 3. Evangelist ───────────────────────────────────────────────────────────
  {
    name: 'Evangelist',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 8,
    skillRanksPerLevel: 6,
    classSkills: ['Craft', 'Diplomacy', 'Heal', 'Knowledge (religion)', 'Perception', 'Profession'],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', "Deity's favored weapon"],
    armorProficiencies: ['Light armor'],
    prerequisites: {
      skills: [{ name: 'Knowledge (religion)', ranks: 5 }],
      alignment: 'Within one step of chosen deity',
      special: ['Must worship a deity'],
    },
    classFeatures: [
      {
        name: 'Obedience',
        level: 1,
        description:
          'In order to maintain the abilities granted by this class, an evangelist must perform a daily obedience to her chosen deity. This ceremony takes 1 hour to perform.',
        effects: [],
      },
      {
        name: 'Skilled',
        level: 1,
        description:
          'At 1st level, the evangelist selects two skills to permanently add to her class skill list.',
        effects: [],
      },
      {
        name: 'Aligned Class',
        level: 2,
        description:
          'At 2nd level, the evangelist must choose a class she belonged to before adding the prestige class to be her aligned class. She gains all the class features for one additional level of her aligned class as if she had gained a level in it. She does not, however, gain the hit points, base attack bonus, saving throw bonuses, or skill ranks of that class. Essentially, levels of evangelist beyond 1st count as levels of her aligned class for the purpose of determining her class features.',
        effects: [],
      },
      {
        name: 'Protective Grace +1',
        level: 2,
        description:
          'At 2nd level, the evangelist gains a +1 dodge bonus to AC. This bonus increases to +2 at 7th level. The evangelist loses this bonus when she is denied her Dexterity bonus to AC.',
        effects: [],
      },
      {
        name: 'Divine Boon 1',
        level: 3,
        description:
          "At 3rd level, the evangelist gains the first boon granted by her chosen deity. The caster level for any spell-like abilities granted by this boon equals the evangelist's total character level.",
        effects: [],
      },
      {
        name: 'Aligned Class',
        level: 4,
        description: 'The evangelist gains an additional level of aligned class features.',
        effects: [],
      },
      {
        name: 'Gift of Tongues',
        level: 4,
        description:
          'At 4th level, the evangelist gains fluency in one new language as a divine gift from her deity.',
        effects: [],
      },
      {
        name: 'Multitude of Talents',
        level: 5,
        description:
          'At 5th level, the evangelist gains a +4 sacred or profane bonus on any skill check attempted with a skill in which the character has no ranks.',
        effects: [],
      },
      {
        name: 'Aligned Class',
        level: 5,
        description: 'The evangelist gains an additional level of aligned class features.',
        effects: [],
      },
      {
        name: 'Aligned Class',
        level: 6,
        description: 'The evangelist gains an additional level of aligned class features.',
        effects: [],
      },
      {
        name: 'Divine Boon 2',
        level: 6,
        description:
          'At 6th level, the evangelist gains the second boon granted by her chosen deity.',
        effects: [],
      },
      {
        name: 'Protective Grace +2',
        level: 7,
        description:
          "At 7th level, the evangelist's Protective Grace dodge bonus to AC increases to +2.",
        effects: [],
      },
      {
        name: 'Aligned Class',
        level: 7,
        description: 'The evangelist gains an additional level of aligned class features.',
        effects: [],
      },
      {
        name: 'Aligned Class',
        level: 8,
        description: 'The evangelist gains an additional level of aligned class features.',
        effects: [],
      },
      {
        name: 'Gift of Tongues',
        level: 8,
        description: 'At 8th level, the evangelist gains fluency in a second language.',
        effects: [],
      },
      {
        name: 'Aligned Class',
        level: 9,
        description: 'The evangelist gains an additional level of aligned class features.',
        effects: [],
      },
      {
        name: 'Divine Boon 3',
        level: 9,
        description:
          'At 9th level, the evangelist gains the third boon granted by her chosen deity.',
        effects: [],
      },
      {
        name: 'Aligned Class',
        level: 10,
        description: 'The evangelist gains an additional level of aligned class features.',
        effects: [],
      },
      {
        name: 'Spiritual Form',
        level: 10,
        description:
          'At 10th level, as a standard action, the evangelist can assume a spiritual form for a number of minutes per day equal to her character level. In this form, she gains telepathy with a range of 100 feet, chooses one ability score to gain a +4 bonus, and selects one physical transformation: wings (fly 40 ft., good maneuverability), gills (water breathing, swim 30 ft.), or a single natural attack (slam, bite, claw, or gore appropriate for her size).',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    advancesSpellcasting: {
      mode: 'single',
      tradition: 'chosen',
      atLevels: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    source: 'Inner Sea Gods',
  },

  // ─── 4. Swordlord ───────────────────────────────────────────────────────────
  {
    name: 'Swordlord',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 10,
    skillRanksPerLevel: 2,
    classSkills: [
      'Acrobatics',
      'Bluff',
      'Diplomacy',
      'Intimidate',
      'Knowledge (nobility)',
      'Perform',
      'Sense Motive',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      bab: 5,
      skills: [
        { name: 'Acrobatics', ranks: 5 },
        { name: 'Sense Motive', ranks: 3 },
      ],
      feats: ['Weapon Focus (Aldori dueling sword)', 'Weapon Finesse'],
      special: ['Dexterity 13'],
    },
    classFeatures: [
      {
        name: 'Deft Strike',
        level: 1,
        description:
          'A Swordlord can add his Dexterity bonus (if any) to damage rolls made with an Aldori dueling sword instead of his Strength bonus. This bonus on damage rolls applies whether the Swordlord is wielding the dueling sword one-handed or two-handed. A Swordlord cannot use this ability if he is wielding a shield or using an off-hand weapon.',
        effects: [],
      },
      {
        name: 'Quick Draw',
        level: 1,
        description:
          'At 1st level, a Swordlord gains Quick Draw as a bonus feat. If he already has this feat, he instead gains Dueling Mastery or another combat feat of his choice for which he qualifies.',
        effects: [],
      },
      {
        name: 'Display Weapon Prowess',
        level: 2,
        description:
          'At 2nd level, a Swordlord adds a bonus equal to half his class level on Intimidate checks when using Dazzling Display with an Aldori dueling sword. He also gains a +1 bonus per relevant weapon feat (Greater Weapon Focus, Greater Weapon Specialization, Improved Critical, Weapon Focus, Weapon Specialization) to Dazzling Display Intimidate checks. During duels, he gains these bonuses on performance combat checks and dueling parry and resolve rolls.',
        effects: [],
      },
      {
        name: 'Defensive Parry',
        level: 3,
        description:
          'At 3rd level, a Swordlord gains a +1 dodge bonus to his AC when making a full attack with an Aldori dueling sword. This bonus increases to +2 at 7th level. This stacks with levels of the fighter defender archetype.',
        effects: [],
      },
      {
        name: 'Adaptive Tactics',
        level: 4,
        description:
          'At 4th level, a Swordlord reduces the attack roll penalty for fighting defensively or using Combat Expertise by 1 (by 2 at 8th level). After making an attack against a creature in the same turn he has already attacked, the Swordlord can make a Sense Motive check as a swift action; on success, he gains a +2 circumstance bonus on attack rolls or to his AC against that creature until the start of his next turn.',
        effects: [],
      },
      {
        name: 'Shatter Confidence',
        level: 5,
        description:
          "At 5th level, when a Swordlord confirms a critical hit or succeeds at a disarm, reposition, or sunder combat maneuver with an Aldori dueling sword, he can attempt an Intimidate check to demoralize the target as a swift action. If the target is already shaken, the Swordlord can attempt to demoralize after any successful melee attack or combat maneuver; on success, all morale bonuses the target possesses are suppressed for a number of rounds equal to the Swordlord's class level.",
        effects: [],
      },
      {
        name: 'Saving Slash',
        level: 6,
        description:
          'At 6th level, a Swordlord can use an immediate action to attempt to deflect a melee critical hit, reducing it to a normal hit with a 25% chance of success. This cannot stack with the fortification armor special ability.',
        effects: [],
      },
      {
        name: 'Defensive Parry +2',
        level: 7,
        description:
          'At 7th level, the Defensive Parry dodge bonus to AC when making a full attack with an Aldori dueling sword increases to +2.',
        effects: [],
      },
      {
        name: 'Dexterous Duelist',
        level: 7,
        description:
          'At 7th level, while a Swordlord has one hand free, he is not denied his Dexterity bonus on Acrobatics or Climb checks, nor does he provoke attacks of opportunity when standing up from prone.',
        effects: [],
      },
      {
        name: 'Adaptive Tactics (Improved)',
        level: 8,
        description:
          'At 8th level, the attack roll penalty reduction from Adaptive Tactics increases to 2.',
        effects: [],
      },
      {
        name: 'Greater Saving Slash',
        level: 9,
        description:
          "At 9th level, a Swordlord's saving slash has a 50% chance of reducing a melee critical hit to a normal hit. He can also attempt saving slash against ranged critical hits with a 25% chance of success.",
        effects: [],
      },
      {
        name: 'Confounding Duelist',
        level: 10,
        description:
          "At 10th level, when a Swordlord's Shatter Confidence ability succeeds, it also suppresses the target's competence and insight bonuses in addition to morale bonuses for a number of rounds equal to the Swordlord's class level.",
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: 'Inner Sea World Guide / Paths of Prestige',
  },

  // ─── 5. Winter Witch ─────────────────────────────────────────────────────────
  {
    name: 'Winter Witch',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 6,
    skillRanksPerLevel: 2,
    classSkills: [
      'Bluff',
      'Intimidate',
      'Knowledge (arcana)',
      'Knowledge (nobility)',
      'Survival',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Low,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      skills: [
        { name: 'Knowledge (arcana)', ranks: 5 },
        { name: 'Spellcraft', ranks: 5 },
      ],
      special: [
        'Must be a witch with the winter witch archetype from Irrisen, or have been trained by one',
      ],
    },
    classFeatures: [
      {
        name: 'Hyperboreal Patronage',
        level: 1,
        description:
          "At 1st level, the winter witch's patron reveals an icy aspect, adding wall of ice to her spell list as a 3rd-level spell, icy prison as a 5th-level spell, and freezing sphere as a 7th-level spell.",
        effects: [],
      },
      {
        name: 'Winter Witchcraft',
        level: 1,
        description:
          'Winter witch levels stack with witch levels for the purpose of determining hexes, familiar abilities, and when she gains access to major hexes and grand hexes.',
        effects: [],
      },
      {
        name: 'Freeze and Thaw',
        level: 2,
        description:
          'At 2nd level, as a standard action, the winter witch can melt a 5-foot cube of ice or a 10-foot cube of snow, or freeze up to 5 cubic feet of water into solid ice over 1 round. She can use this ability a number of times per day equal to half her class level. This ability cannot affect water creatures, magical water, or non-water liquids.',
        effects: [],
      },
      {
        name: 'Unnatural Cold',
        level: 3,
        description:
          'At 3rd level, whenever the winter witch casts a spell with the cold descriptor, any affected creature with cold resistance treats its cold resistance as half its normal value against that spell.',
        effects: [],
      },
      {
        name: 'Sculpt Ice and Snow',
        level: 4,
        description:
          'At 4th level, the winter witch can sculpt ice and snow as if using stone shape, but affecting ice instead of stone. When used on snow, the volume affected is doubled. At 7th level, this functions as fabricate for ice. Items created from ice have hardness 5 and last 1 hour per class level. Usable a number of times per day equal to half her class level.',
        effects: [],
      },
      {
        name: 'Winter Hex',
        level: 5,
        description:
          'At 5th level, the winter witch must select from ice tomb, hoarfrost, or numbing chill hexes. Numbing chill deals 1d4 Dexterity damage and staggers the target for 1 round on a failed Fortitude save whenever the target takes cold damage from the witch. After all three are chosen, the witch may select other hexes normally.',
        effects: [],
      },
      {
        name: 'Blizzard Sight',
        level: 6,
        description:
          'At 6th level, a winter witch can see normally in natural or magical rain, sleet, hail, fog, snowstorms, blizzards, and similar weather conditions.',
        effects: [],
      },
      {
        name: 'Sculpt Ice and Snow (Improved)',
        level: 7,
        description:
          'At 7th level, Sculpt Ice and Snow functions as fabricate rather than stone shape when working with ice.',
        effects: [],
      },
      {
        name: 'Unearthly Cold',
        level: 8,
        description:
          "At 8th level, half of any cold damage dealt by the winter witch's spells becomes untyped otherworldly energy that bypasses cold resistance and cold immunity entirely.",
        effects: [],
      },
      {
        name: 'Iceglide',
        level: 10,
        description:
          'At 10th level, the winter witch can move through ice and snow at her base land speed without leaving a trace. She can breathe normally while doing so. This ability can be used for up to 10 minutes per day, which need not be consecutive but must be spent in 1-minute increments.',
        effects: [],
      },
      {
        name: 'Inexorable Cold',
        level: 10,
        description:
          'At 10th level, the winter witch gains a +1 bonus to caster level for all spells with the cold descriptor. She also gains a +1 bonus on caster level checks to counterspell, dispel, or penetrate spell resistance, and the save DCs of her cold spells increase by 1.',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    advancesSpellcasting: {
      mode: 'single',
      tradition: 'arcane',
      atLevels: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    source: 'Inner Sea Magic / Paths of Prestige',
  },

  // ─── 6. Student of War ───────────────────────────────────────────────────────
  {
    name: 'Student of War',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 10,
    skillRanksPerLevel: 6,
    classSkills: [
      'Climb',
      'Craft',
      'Disable Device',
      'Handle Animal',
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
      'Profession',
      'Sense Motive',
      'Spellcraft',
      'Survival',
      'Swim',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      bab: 5,
      skills: [
        { name: 'Knowledge (any one)', ranks: 4 },
        { name: 'Knowledge (any other)', ranks: 4 },
      ],
      feats: ['Combat Expertise', 'Dodge', 'Skill Focus (any Knowledge)'],
      special: [
        'Proficiency with two martial weapons',
        'Must have made successful Knowledge checks against five distinct creatures before defeating them',
      ],
    },
    classFeatures: [
      {
        name: 'Additional Skill',
        level: 1,
        description:
          'At 1st level, a student of war gains one additional class skill of her choice. She gains another additional class skill at levels 3, 5, 7, and 9.',
        effects: [],
      },
      {
        name: 'Know Your Enemy +1',
        level: 1,
        description:
          "As a move action, the student of war can study a visible foe and make a Knowledge check appropriate to the creature's type (DC 10 + target's HD). On a success, she gains a +1 insight bonus that she can apply in one of three stances: Defensive (bonus to AC and saves against the target), Martial (bonus to attack and damage rolls against the target), or Tactical (bonus to combat maneuver checks and CMD against the target). The effect lasts 1 minute per class level. At 7th level, studying becomes a swift action.",
        effects: [],
      },
      {
        name: 'Combat Feat',
        level: 2,
        description:
          'At 2nd level, the student of war gains a bonus combat feat. She gains another at levels 5 and 8.',
        effects: [],
      },
      {
        name: 'Mind Over Metal',
        level: 2,
        description:
          "At 2nd level, a student of war can use her Intelligence modifier instead of her Dexterity modifier for determining her AC bonus from armor and shields, subject to the armor's maximum Dexterity bonus.",
        effects: [],
      },
      {
        name: 'Additional Skill',
        level: 3,
        description: 'The student of war gains another additional class skill of her choice.',
        effects: [],
      },
      {
        name: 'Anticipate 1/day',
        level: 3,
        description:
          'At 3rd level, once per day as an immediate action, the student of war can ignore any damage and effects of a spell or ability she successfully saved against. She gains an additional daily use at levels 6 and 9.',
        effects: [],
      },
      {
        name: 'Know Your Enemy +2',
        level: 4,
        description: 'At 4th level, the insight bonus from Know Your Enemy increases to +2.',
        effects: [],
      },
      {
        name: 'Additional Skill',
        level: 5,
        description: 'The student of war gains another additional class skill of her choice.',
        effects: [],
      },
      {
        name: 'Combat Feat',
        level: 5,
        description: 'The student of war gains another bonus combat feat.',
        effects: [],
      },
      {
        name: 'Anticipate 2/day',
        level: 6,
        description: 'At 6th level, Anticipate can be used twice per day.',
        effects: [],
      },
      {
        name: 'Telling Blow',
        level: 6,
        description:
          'At 6th level, the student of war can ignore up to 5 points of damage reduction when attacking a creature she is studying with Know Your Enemy. This stacks with the Penetrating Strike feat.',
        effects: [],
      },
      {
        name: 'Additional Skill',
        level: 7,
        description: 'The student of war gains another additional class skill of her choice.',
        effects: [],
      },
      {
        name: 'Know Your Enemy +3 (swift action)',
        level: 7,
        description:
          'At 7th level, the insight bonus from Know Your Enemy increases to +3, and studying a foe becomes a swift action instead of a move action.',
        effects: [],
      },
      {
        name: 'Combat Feat',
        level: 8,
        description: 'The student of war gains another bonus combat feat.',
        effects: [],
      },
      {
        name: 'Additional Skill',
        level: 9,
        description: 'The student of war gains another additional class skill of her choice.',
        effects: [],
      },
      {
        name: 'Anticipate 3/day',
        level: 9,
        description: 'At 9th level, Anticipate can be used three times per day.',
        effects: [],
      },
      {
        name: 'Nemesis',
        level: 9,
        description:
          'At 9th level, as a swift action, the student of war can grant a weapon she wields the bane special ability against a creature she is currently studying with Know Your Enemy. This effect lasts for 1 minute.',
        effects: [],
      },
      {
        name: 'Deadly Blow',
        level: 10,
        description:
          "At 10th level, if the student of war exceeds the Know Your Enemy DC by 10 or more, she can ignore the target's natural damage reduction entirely and bypasses the target's immunity to critical hits and sneak attacks.",
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: 'Paths of Prestige',
  },

  // ─── 7. Mammoth Rider ────────────────────────────────────────────────────────
  {
    name: 'Mammoth Rider',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 12,
    skillRanksPerLevel: 4,
    classSkills: ['Handle Animal', 'Heal', 'Intimidate', 'Ride', 'Survival'],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      bab: 6,
      skills: [
        { name: 'Handle Animal', ranks: 9 },
        { name: 'Ride', ranks: 9 },
        { name: 'Survival', ranks: 5 },
      ],
      feats: ['Mounted Combat', 'Spirited Charge'],
      special: ['Must have an animal companion or mount with at least 6 Hit Dice'],
    },
    classFeatures: [
      {
        name: 'Gigantic Steed',
        level: 1,
        description:
          "At 1st level, the mammoth rider's steed becomes Huge, taking a -1 penalty on attack rolls and to AC, a -2 penalty to Dexterity (minimum 1), its damage increases by one size category, and its reach extends to 10 feet. It gains a +2 bonus to Strength and Constitution. At levels 3, 5, 7, and 9, the Strength bonus increases by +2. At levels 5 and 9, the Constitution bonus increases by +2.",
        effects: [],
      },
      {
        name: 'Steed',
        level: 1,
        description:
          'At 1st level, the mammoth rider selects a megafauna steed from an extensive list including mammoth, rhinoceros, elephant, various dinosaurs, dire bears, and others. This functions as a druid animal companion, and mammoth rider levels stack with other classes that grant animal companions.',
        effects: [],
      },
      {
        name: 'Wild Coercion',
        level: 1,
        description:
          'At 1st level, the mammoth rider gains wild empathy using druid mechanics. She can also use Intimidate rather than Diplomacy when interacting with animals and magical beasts, adding her Strength modifier to the check.',
        effects: [],
      },
      {
        name: 'Born Survivor',
        level: 2,
        description:
          'At 2nd level, the mammoth rider gains a bonus feat chosen from: Great Fortitude, Iron Will, Lightning Reflexes, or their improved versions. She gains another at 6th level.',
        effects: [],
      },
      {
        name: 'Colossus Hunter',
        level: 2,
        description:
          'At 2nd level, a mammoth rider gains a +1 bonus on weapon attack and damage rolls against Large or Huge creatures, and a +2 bonus on weapon attack and damage rolls against Gargantuan or Colossal creatures.',
        effects: [],
      },
      {
        name: 'Rapid Straddle',
        level: 3,
        description:
          'At 3rd level, the mammoth rider can fast mount or dismount her steed via Ride checks even though it is significantly larger, provided she has a move action available.',
        effects: [],
      },
      {
        name: 'Rugged Steed +1',
        level: 3,
        description:
          "At 3rd level, the mammoth rider's steed gains an additional +1 bonus to its natural armor. This bonus increases by +1 every 2 levels thereafter (+2 at 5th, +3 at 7th, +4 at 9th).",
        effects: [],
      },
      {
        name: 'Mistrust of Magic',
        level: 4,
        description:
          'At 4th level, if the mammoth rider has no levels in an arcane spellcasting class, she gains a +2 morale bonus on saves against arcane spells. Separate bonuses apply for divine and psychic magic if she lacks those casting abilities.',
        effects: [],
      },
      {
        name: 'Undaunted',
        level: 4,
        description:
          'At 4th level, the mammoth rider adds her Strength bonus to the DC of Intimidate checks attempted against her. Creatures cannot gain size bonuses when attempting to intimidate her.',
        effects: [],
      },
      {
        name: 'Rugged Steed +2',
        level: 5,
        description:
          "At 5th level, the steed's natural armor bonus from Rugged Steed increases to +2.",
        effects: [],
      },
      {
        name: 'Valiant Devotion',
        level: 5,
        description:
          "At 5th level, the mammoth rider's steed gains a +4 morale bonus on saving throws against charm, compulsion, and fear effects.",
        effects: [],
      },
      {
        name: 'Born Survivor',
        level: 6,
        description:
          'At 6th level, the mammoth rider gains another bonus feat from the Born Survivor list.',
        effects: [],
      },
      {
        name: "Hunter's Instinct",
        level: 6,
        id: 'quarry',
        activationMode: 'toggle',
        shortDescription:
          'Swift — designate one target as quarry (+4 attack, reroll one miss/round)',
        description:
          "At 6th level, the mammoth rider gains the ranger's quarry class feature, or improved quarry if she already possesses quarry. This works on any creature regardless of favored enemy status.",
        effects: [],
      },
      {
        name: 'Rugged Steed +3',
        level: 7,
        description:
          "At 7th level, the steed's natural armor bonus from Rugged Steed increases to +3.",
        effects: [],
      },
      {
        name: "Steed's Reach",
        level: 7,
        description: "At 7th level, the mammoth rider's steed's natural reach improves to 15 feet.",
        effects: [],
      },
      {
        name: 'Combined Might',
        level: 8,
        description:
          "At 8th level, once per round while mounted and her steed charges, the mammoth rider adds half her steed's Strength bonus to her damage roll, provided the steed can take free actions.",
        effects: [],
      },
      {
        name: 'Rugged Steed +4',
        level: 9,
        description:
          "At 9th level, the steed's natural armor bonus from Rugged Steed increases to +4.",
        effects: [],
      },
      {
        name: 'Pulverizing Assault',
        level: 9,
        description:
          "At 9th level, when a mammoth rider's mounted steed charges, constricts, uses powerful charge, or tramples, the target must succeed on a Fortitude save (DC 10 + half the steed's HD + the steed's Strength modifier) or become staggered for 1d4 rounds.",
        effects: [],
      },
      {
        name: 'Mammoth Lord',
        level: 10,
        description:
          'At 10th level, the mammoth rider becomes immune to the dazed, fatigued, shaken, sickened, staggered, and stunned conditions. On successful Fortitude or Will saves with reduced effects, she avoids the effect entirely. If both the mammoth rider and her steed hit the same opponent in the same turn, the target must succeed on a Fortitude save (same DC as Pulverizing Assault) or be stunned for 1 round; a creature is immune to this stunning effect for 24 hours afterward.',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: 'Paths of Prestige',
  },

  // ─── 8. Arcane Savant ────────────────────────────────────────────────────────
  {
    name: 'Arcane Savant',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 6,
    skillRanksPerLevel: 2,
    classSkills: [
      'Appraise',
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
      'Spellcraft',
      'Survival',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Low,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      skills: [
        { name: 'Knowledge (arcana)', ranks: 5 },
        { name: 'Spellcraft', ranks: 5 },
        { name: 'Use Magic Device', ranks: 5 },
      ],
      feats: ['Magical Aptitude', 'Any item creation feat'],
      spellcasting: 'Ability to cast 2nd-level arcane spells',
    },
    classFeatures: [
      {
        name: 'Adept Activation',
        level: 1,
        description:
          'At 1st level, an arcane savant can always take 10 on Use Magic Device checks, except when activating an item blindly. He does not automatically fail Use Magic Device checks on a natural roll of 1.',
        effects: [],
      },
      {
        name: 'Master Scholar',
        level: 1,
        description:
          'At 1st level, an arcane savant adds half his class level (minimum 1) as a bonus on Knowledge (arcana), Spellcraft, and Use Magic Device checks. He can always take 10 on Knowledge (arcana) and Spellcraft checks, even when distracted or threatened.',
        effects: [],
      },
      {
        name: 'Esoteric Magic',
        level: 2,
        description:
          "At each arcane savant level after 1st, the character chooses a spell from any class's spell list and adds it to his own spell list, treating it as a spell of his primary spellcasting class. If the spell is not normally available to his base class, it is treated as 1 spell level higher than its listed level.",
        effects: [],
      },
      {
        name: 'Glyph-Finding',
        level: 2,
        description:
          'At 2nd level, an arcane savant can use Spellcraft to find writing-based magical traps (such as explosive runes, glyphs of warding, sepia snake sigils, and symbols) in the same way a rogue uses Perception to find traps.',
        effects: [],
      },
      {
        name: 'Scroll Master',
        level: 3,
        description:
          "At 3rd level, when using a scroll or other spell-completion item, the arcane savant uses his own caster level instead of the item's caster level.",
        effects: [],
      },
      {
        name: 'Quick Identification',
        level: 4,
        description:
          'At 4th level, the arcane savant can cast identify as a swift action at his own caster level. He can use this ability once per day per two class levels.',
        effects: [],
      },
      {
        name: 'Sigil Master',
        level: 5,
        description:
          'At 5th level, the arcane savant gains a bonus equal to his class level on saving throws against writing-based magical traps. On a successful save, the trap does not trigger and is not disabled.',
        effects: [],
      },
      {
        name: 'Analyze Dweomer',
        level: 6,
        description:
          'At 6th level, the arcane savant can use analyze dweomer for a number of rounds per day equal to his class level. These rounds need not be consecutive.',
        effects: [],
      },
      {
        name: 'Silence Master',
        level: 6,
        description:
          'At 6th level, the arcane savant can activate spell-trigger, spell-completion, and command-word items silently, substituting gestures for words. Three times per day, he can also apply silent metamagic to a spell of 6th level or lower without increasing the spell level.',
        effects: [],
      },
      {
        name: 'Dispelling Master',
        level: 7,
        description:
          "At 7th level, prepared casters can spontaneously convert prepared spells of 3rd level or higher into dispel magic, or 6th level or higher into greater dispel magic. Spontaneous casters add these to their spells known. When the arcane savant successfully dispels or counterspells a magical effect, he heals a number of hit points equal to the dispelled effect's caster level.",
        effects: [],
      },
      {
        name: 'Symbol Master',
        level: 8,
        description:
          'At 8th level, any symbol spells cast by the arcane savant gain +2 to their save DC, Perception DC to notice, and Disable Device DC to remove. Once per day, the savant can double his Sigil Master bonus when saving against a symbol. He never automatically fails a saving throw against a symbol on a natural 1.',
        effects: [],
      },
      {
        name: 'Spellcasting Master',
        level: 9,
        description:
          'At 9th level, three times per day as a swift action, the arcane savant can focus his mind so that spells he casts that round do not provoke attacks of opportunity. Additionally, concentration spells persist after the savant stops concentrating for a number of rounds equal to his highest mental ability modifier (Intelligence, Wisdom, or Charisma).',
        effects: [],
      },
      {
        name: 'Item Master',
        level: 10,
        description:
          "At 10th level, the arcane savant can spend one hour attuning to a non-charged magic item. Thereafter, that item uses the savant's caster level instead of its own. Only one item can be attuned at a time.",
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    advancesSpellcasting: {
      mode: 'single',
      tradition: 'chosen',
      atLevels: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    source: 'Paths of Prestige',
  },

  // ─── 9. Agent of the Grave ───────────────────────────────────────────────────
  {
    name: 'Agent of the Grave',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 8,
    skillRanksPerLevel: 4,
    classSkills: [
      'Bluff',
      'Heal',
      'Intimidate',
      'Knowledge (arcana)',
      'Knowledge (history)',
      'Knowledge (religion)',
      'Linguistics',
      'Spellcraft',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    alignment: 'Any non-good',
    prerequisites: {
      skills: [
        { name: 'Knowledge (arcana)', ranks: 5 },
        { name: 'Knowledge (religion)', ranks: 5 },
      ],
      alignment: 'Any non-good',
      special: ['Must have been killed and returned from death'],
    },
    classFeatures: [
      {
        name: 'Inspired Necromancy',
        level: 1,
        description:
          'At 1st level, when determining the maximum number of Hit Dice of undead the Agent of the Grave can control with spells like animate dead, his agent of the grave levels count as twice their normal amount. This does not affect the number of undead the Agent can create with a single casting.',
        effects: [],
      },
      {
        name: "Lich's Touch",
        level: 1,
        description:
          "At 1st level, the Agent of the Grave can make melee touch attacks that deal 1d6 points of negative energy damage per agent of the grave level. This ability can also be used to heal undead. It can be used a number of times per day equal to 3 + the Agent's Charisma modifier.",
        effects: [],
      },
      {
        name: 'Unholy Fortitude',
        level: 1,
        description:
          'At 1st level and each level thereafter, when gaining a level in any class, the Agent of the Grave can choose to add either his Constitution or Charisma modifier to the hit points gained for that level (instead of being limited to Constitution).',
        effects: [],
      },
      {
        name: 'Undead Manipulator',
        level: 2,
        description:
          "At 2nd level, the Agent of the Grave's mind-affecting spells and spell-like abilities can treat undead creatures as if they were their original creature type. For example, charm person can be used against a humanoid zombie, and confusion against a skeletal champion.",
        effects: [],
      },
      {
        name: 'Negative Energy Conduit',
        level: 3,
        description:
          'At 3rd level, as a standard action, the Agent of the Grave can manifest an aura identical to the desecrate spell, lasting 10 minutes per level. This can be used once per day. Undead created by the Agent within or near this aura are treated as if created in a desecrate area.',
        effects: [],
      },
      {
        name: "Death's Shroud",
        level: 4,
        description:
          'At 4th level, the Agent of the Grave can use nondetection or undetectable alignment once per day as a spell-like ability, with a caster level equal to his highest caster level.',
        effects: [],
      },
      {
        name: 'Negative Energy Affinity',
        level: 4,
        description:
          'At 4th level, although still alive, the Agent of the Grave reacts to positive and negative energy as if he were undead: negative energy heals him and positive energy harms him. This grants no benefit if the Agent is actually undead.',
        effects: [],
      },
      {
        name: 'Secrets of Death',
        level: 5,
        description:
          'At 5th level, the Agent of the Grave can add a number of necromancy spells (not normally on his class spell list) equal to his Intelligence modifier to his spell list. Examples include death watch, inflict critical wounds, slay living, enervation, magic jar, or vampiric touch. He can add spells he cannot yet cast.',
        effects: [],
      },
      {
        name: 'Undeath Initiate',
        level: 5,
        description:
          'At 5th level, the Agent of the Grave gains a +5 bonus on all ability checks, skill checks, and saving throws related to the process of transforming himself into an undead creature (such as becoming a lich or vampire). If killed by an undead creature with a create spawn ability, he retains his Intelligence and free will, and is never under the control of his killer.',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: 'Paths of Prestige',
  },

  // ─── 10. Living Monolith ─────────────────────────────────────────────────────
  {
    name: 'Living Monolith',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 8,
    skillRanksPerLevel: 2,
    classSkills: [
      'Acrobatics',
      'Climb',
      'Intimidate',
      'Knowledge (engineering)',
      'Knowledge (history)',
      'Knowledge (religion)',
      'Linguistics',
      'Perception',
      'Sense Motive',
    ],
    babProgression: BABProgression.Full,
    saves: {
      fortitude: SaveProgression.Good,
      reflex: SaveProgression.Good,
      will: SaveProgression.Poor,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      bab: 5,
      skills: [
        { name: 'Knowledge (engineering)', ranks: 4 },
        { name: 'Knowledge (history)', ranks: 4 },
        { name: 'Knowledge (religion)', ranks: 2 },
      ],
      feats: ['Endurance', 'Iron Will'],
      special: [
        'Must speak an ancient language and Sphinx',
        'Must have a handcrafted stone scarab worth at least 1,000 gp embedded in the forehead in a sacred ritual with a sphinx or living monolith present',
      ],
    },
    classFeatures: [
      {
        name: 'Soul Stone',
        level: 1,
        description:
          "At 1st level, the living monolith's stone scarab becomes embedded in his forehead and cannot be removed without his permission or by magical means. It grants a +2 bonus on saving throws against death effects, mind-affecting effects, negative levels, and checks to overcome negative levels. The living monolith can invoke the soul stone 3 times per day as a swift action to grow as if affected by enlarge person (this works even on non-humanoids). He must choose to follow the ib stone or ka stone path.",
        effects: [],
      },
      {
        name: 'Ka Stone',
        level: 2,
        description:
          "A living monolith who chose the ka stone path gains Toughness as a bonus feat. His base attack bonus from living monolith levels equals his living monolith level when using his soul stone's size increase ability.",
        effects: [],
      },
      {
        name: 'Ib Stone',
        level: 2,
        description:
          'A living monolith who chose the ib stone path gains spells per day as if he had also gained a level in a previous spellcasting class. He does not gain greater or master ka stone abilities.',
        effects: [],
      },
      {
        name: 'Stone Blood',
        level: 2,
        description:
          'At 2nd level, the living monolith automatically stabilizes when reduced to negative hit points and becomes immune to continuous bleed damage and ability damage from blood drain effects.',
        effects: [],
      },
      {
        name: 'Fortified Flesh 1',
        level: 3,
        description:
          'At 3rd level, the living monolith gains DR 1/-- and a 10% chance to negate critical hits and sneak attacks (as the light fortification armor special ability). These increase by +1 DR and +10% at levels 5 and 8. When using soul stone size increase, gains an additional +1 DR and +10%.',
        effects: [],
      },
      {
        name: 'Stability',
        level: 4,
        description:
          'At 4th level, the living monolith gains a +4 bonus to his Combat Maneuver Defense when resisting a bull rush or trip attempt while standing on the ground.',
        effects: [],
      },
      {
        name: 'Tombsight',
        level: 4,
        description:
          'At 4th level, the living monolith can perceive the balance of life and death in creatures he views, functioning as deathwatch and detect undead simultaneously. This can be used at will while the living monolith concentrates.',
        effects: [],
      },
      {
        name: 'Fortified Flesh 2',
        level: 5,
        description:
          'At 5th level, DR increases to 2/-- and fortification chance increases to 20%. The living monolith also becomes immune to all diseases.',
        effects: [],
      },
      {
        name: 'Greater Ka Stone',
        level: 5,
        description:
          'At 5th level, a living monolith who chose the ka stone path invokes righteous might instead of enlarge person when using his soul stone. Neutral characters choose their alignment-based DR once at this level.',
        effects: [],
      },
      {
        name: 'Attunement to Stone',
        level: 6,
        description:
          'At 6th level, the living monolith can use meld into stone at will as a spell-like ability.',
        effects: [],
      },
      {
        name: 'Summon Sphinx',
        level: 7,
        description:
          'At 7th level, once per day the living monolith can call a sphinx and bargain with it as if using planar ally. At 9th level, this improves to greater planar ally. The living monolith gains a +4 bonus on Diplomacy checks with sphinxes.',
        effects: [],
      },
      {
        name: 'Fortified Flesh 3',
        level: 8,
        description:
          'At 8th level, DR increases to 3/-- and fortification chance increases to 30%.',
        effects: [],
      },
      {
        name: 'Communion with Stone',
        level: 8,
        description:
          'At 8th level, the living monolith gains tremorsense 30 feet. Once per day, he can communicate with rock or stone as stone tell. He also gains Terran as a bonus language.',
        effects: [],
      },
      {
        name: 'Assumption of Stone',
        level: 9,
        description:
          'At 9th level, the living monolith can use statue at will (personal range only) as a spell-like ability. He becomes immune to petrification.',
        effects: [],
      },
      {
        name: 'Summon Sphinx (Greater)',
        level: 9,
        description: 'At 9th level, Summon Sphinx improves to function as greater planar ally.',
        effects: [],
      },
      {
        name: 'Ageless Stone',
        level: 10,
        description:
          'At 10th level, the living monolith ceases aging and becomes immune to energy drain and death effects. He can still be killed by other means.',
        effects: [],
      },
      {
        name: 'Judgment of the Monolith',
        level: 10,
        description:
          'At 10th level, once per day the living monolith can conduct an inquisition ritual. On dead bodies, this functions as speak with dead. On living creatures, it functions as mark of justice that activates if the target lies. The living monolith can also entreat spirits as contact other plane (contacting a lesser deity).',
        effects: [],
      },
      {
        name: 'Master Ka Stone',
        level: 10,
        description:
          "At 10th level, a living monolith who chose the ka stone path regains lost hit points as if he had rested overnight whenever he invokes his soul stone's size increase ability.",
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: 'Pathfinder Campaign Setting',
  },

  // ─── 11. Noble Scion ─────────────────────────────────────────────────────────
  {
    name: 'Noble Scion',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 8,
    skillRanksPerLevel: 6,
    classSkills: [
      'Appraise',
      'Bluff',
      'Diplomacy',
      'Disguise',
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
      'Perception',
      'Perform',
      'Ride',
      'Sense Motive',
    ],
    babProgression: BABProgression.Medium,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Good,
      will: SaveProgression.Good,
    },
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Heavy armor', 'Shields'],
    prerequisites: {
      skills: [
        { name: 'Bluff', ranks: 2 },
        { name: 'Diplomacy', ranks: 2 },
        { name: 'Intimidate', ranks: 2 },
        { name: 'Knowledge (nobility)', ranks: 2 },
        { name: 'Sense Motive', ranks: 2 },
      ],
      special: ['Charisma 13', 'Must have the Noble Scion feat or be a member of a noble family'],
    },
    classFeatures: [
      {
        name: 'Affluent',
        level: 1,
        description:
          "At 1st level, a noble scion receives a stipend of 750 gp per class level. He receives 750 gp at 1st level, an additional 1,500 gp at 2nd level, and so on, representing his family's wealth and connections.",
        effects: [],
      },
      {
        name: 'Greater Leadership',
        level: 2,
        description:
          'At 2nd level, the noble scion gains the Leadership feat as a bonus feat. He can recruit a cohort one level lower than himself. At 10th level, the cohort can be the same level as the noble scion.',
        effects: [],
      },
      {
        name: 'Aristocratic Erudition',
        level: 3,
        description:
          'At 3rd level, the noble scion gains a bonus equal to half his class level on Diplomacy, Knowledge (local), and Knowledge (nobility) checks. He also reduces the DC for others to gather publicly available information about him by the same amount.',
        effects: [],
      },
      {
        name: 'Prestigious Influence',
        level: 4,
        description:
          'At 4th level, the noble scion gains a weekly pool of 150 gp + 10 gp per class level that can be spent on services including lodging, lifestyle, entertainment, servants, invitations to events, rumors, spellcasting, and expert hirelings (who provide a bonus of +10 + class level on a single skill check for 50 gp).',
        effects: [],
      },
      {
        name: 'Regional Expertise',
        level: 4,
        description:
          'At 4th level, the noble scion gains a bonus feat from a list based on his region or from a general list. He gains additional regional expertise feats at levels 6 and 8.',
        effects: [],
      },
      {
        name: 'Dilettante Studies',
        level: 5,
        description:
          'At 5th level, the noble scion chooses two from the following: Dilettante Performer (gains bardic performance), Dilettante Scholar (advances spellcasting by one level), Dilettante Scoundrel (gains +1d6 sneak attack), or Dilettante Warrior (gains +1 bonus on attack and damage rolls). He selects two more at 9th level.',
        effects: [],
      },
      {
        name: 'Regional Expertise',
        level: 6,
        description:
          'At 6th level, the noble scion gains another bonus feat from his regional expertise list.',
        effects: [],
      },
      {
        name: 'Servitor',
        level: 7,
        description:
          'At 7th level, the noble scion gains an NPC servitor at the same level as his cohort. This servitor is limited to NPC classes and can run errands while the scion is adventuring.',
        effects: [],
      },
      {
        name: 'Regional Expertise',
        level: 8,
        description:
          'At 8th level, the noble scion gains another bonus feat from his regional expertise list.',
        effects: [],
      },
      {
        name: 'Dilettante Studies',
        level: 9,
        description: 'At 9th level, the noble scion selects two more dilettante studies options.',
        effects: [],
      },
      {
        name: 'Peerless Patrician',
        level: 10,
        description:
          'At 10th level, once per round, the noble scion can roll twice on any Bluff, Diplomacy, Intimidate, Knowledge (nobility), or Sense Motive check and take the better result. Once per day, the noble scion can assume any one such roll resulted in a natural 20.',
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: 'Paths of Prestige',
  },

  // ─── 12. Bloatmage ──────────────────────────────────────────────────────────
  {
    name: 'Bloatmage',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 6,
    skillRanksPerLevel: 2,
    classSkills: [
      'Fly',
      'Heal',
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
      'Spellcraft',
      'Use Magic Device',
    ],
    babProgression: BABProgression.Low,
    saves: {
      fortitude: SaveProgression.Poor,
      reflex: SaveProgression.Poor,
      will: SaveProgression.Good,
    },
    weaponProficiencies: [],
    armorProficiencies: [],
    prerequisites: {
      skills: [
        { name: 'Heal', ranks: 5 },
        { name: 'Knowledge (arcana)', ranks: 5 },
      ],
      feats: ['Bloatmage Initiate'],
      spellcasting: 'Ability to cast 3rd-level arcane spells',
    },
    classFeatures: [
      {
        name: 'Blood Pool',
        level: 1,
        description:
          "At 1st level, the bloatmage gains a pool of blood points equal to his bloatmage level. He can spend blood points equal to a spell's level to cast that spell without expending a spell slot. His blood pool can hold up to twice his class level in blood points; exceeding this causes a homicidal rage lasting 1d6 rounds, after which the bloatmage drops to -1 hit points and begins dying. The blood pool naturally regains points equal to class level each day.",
        effects: [],
      },
      {
        name: 'Bloodsurge 1/day',
        level: 1,
        description:
          'At 1st level, as a free action, the bloatmage can surge to gain 1d4 blood points, risking dangerous collapse if his pool exceeds maximum capacity. He can use this once per day.',
        effects: [],
      },
      {
        name: 'Hemophilia',
        level: 1,
        description:
          'At 1st level, the bloatmage becomes especially vulnerable to bleed effects. The DC to staunch any bleed effect on the bloatmage increases by 5. Each round the bloatmage bleeds, he loses 1 blood point in addition to normal bleed damage.',
        effects: [],
      },
      {
        name: 'Corpulence 1',
        level: 3,
        description:
          "At 3rd level, the bloatmage's grotesquely swollen body grants a +1 natural armor bonus to AC.",
        effects: [],
      },
      {
        name: 'Bloodsurge 2/day',
        level: 4,
        description:
          'At 4th level, the bloatmage can use bloodsurge twice per day, and it now grants 1d8 blood points per use.',
        effects: [],
      },
      {
        name: 'Corpulence 2',
        level: 7,
        description:
          "At 7th level, the bloatmage's natural armor bonus from Corpulence increases to +2. However, his speed decreases by 10 feet (minimum 5 feet). Magical flight speed is unaffected.",
        effects: [],
      },
      {
        name: 'Bloodsurge 3/day',
        level: 8,
        description:
          'At 8th level, the bloatmage can use bloodsurge three times per day, and it now grants 1d12 blood points per use.',
        effects: [],
      },
      {
        name: 'Absorb Bloodline',
        level: 10,
        description:
          "At 10th level, once per day the bloatmage can consume 1 pint of fresh blood from an appropriate creature (dealing 1 point of Constitution damage), gaining access to that creature's sorcerer bloodline powers for 1 hour. This process normally takes a full minute, or a standard action if the blood has been distilled using the Brew Potion feat.",
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    advancesSpellcasting: {
      mode: 'single',
      tradition: 'arcane',
      atLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    source: 'Inner Sea Magic',
  },

  // ─── 13. Sentinel ────────────────────────────────────────────────────────────
  {
    name: 'Sentinel',
    category: 'Prestige',
    maxLevel: 10,
    hitDie: 10,
    skillRanksPerLevel: 2,
    classSkills: [
      'Climb',
      'Craft',
      'Handle Animal',
      'Intimidate',
      'Knowledge (religion)',
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
    weaponProficiencies: ['Simple', 'Martial'],
    armorProficiencies: ['Light', 'Medium', 'Heavy', 'Shields (except tower shields)'],
    alignment: "Within one step of the chosen deity's alignment",
    prerequisites: {
      bab: 5,
      feats: ['Deific Obedience', "Weapon Focus (deity's favored weapon)"],
      alignment: "Within one step of the chosen deity's alignment",
      special: [
        'Must worship a single, specific deity',
        'Alternate entry: Fiendish Obedience and Weapon Focus (favored weapon) with base attack bonus +7 or higher',
      ],
    },
    classFeatures: [
      {
        name: 'Obedience',
        level: 1,
        description:
          'In order to maintain the abilities granted by this prestige class, a sentinel must perform a daily obedience to his chosen deity.',
        effects: [],
      },
      {
        name: 'Symbolic Weapon',
        level: 1,
        description:
          "While wielding his deity's favored weapon, the sentinel gains a +1 sacred bonus (or profane bonus, if his deity is evil) on attack and damage rolls. This bonus increases by 1 for every 3 sentinel levels he possesses (to +2 at 3rd level, +3 at 6th level, and +4 at 9th level). His deity's favored weapon also functions as a holy (or unholy) symbol while wielded by the sentinel.",
        effects: [],
      },
      {
        name: 'Bonus Feat',
        level: 2,
        description:
          "At 2nd level, and again at 7th level, the sentinel gains a bonus feat in addition to those gained from normal advancement. These bonus feats must be selected from those listed as combat feats. The sentinel uses his sentinel level plus his fighter level (if any) to determine whether he qualifies for a feat. If a bonus feat requires selecting a specific weapon, it must be the deity's favored weapon.",
        effects: [],
      },
      {
        name: 'Divine Boon',
        level: 3,
        description:
          "At 3rd level, the sentinel gains the first boon granted by his chosen deity (as detailed in that deity's Deific Obedience entry). He gains the second boon at 6th level and the third boon at 9th level. When a divine boon grants a spell-like ability, the sentinel's caster level for that ability equals his total character level.",
        effects: [],
      },
      {
        name: 'Divine Quickness',
        level: 4,
        description:
          "At 4th level, while carrying his deity's favored weapon, the sentinel gains a +2 sacred bonus (or profane bonus, if his deity is evil) on initiative checks. This bonus increases to +4 at 8th level. The weapon doesn't need to be carried in hand, but it must at least be on the sentinel's person and accessible enough that he could wield it with no greater than a move action.",
        effects: [],
      },
      {
        name: 'Aligned Strike',
        level: 5,
        description:
          "At 5th level, the sentinel's righteous fervor allows him to cut through certain types of damage reduction. He chooses one aligned weapon type based on his deity's alignment (axiomatic for lawful, anarchic for chaotic, holy for good, or unholy for evil); his attacks with his deity's favored weapon are treated as that alignment for the purpose of overcoming damage reduction.",
        effects: [],
      },
      {
        name: 'Stalwart',
        level: 5,
        description:
          'At 5th level, the sentinel gains a +2 sacred bonus (or profane bonus, if his deity is evil) on saving throws to resist divine spells.',
        effects: [],
      },
      {
        name: 'Practiced Combatant',
        level: 7,
        description:
          "At 7th level, the sentinel gains a +2 sacred bonus (or profane bonus, if his deity is evil) on combat maneuver checks he performs with his deity's favored weapon.",
        effects: [],
      },
      {
        name: 'Righteous Leader',
        level: 8,
        description:
          'At 8th level, the sentinel gains Leadership as a bonus feat and is considered to qualify for that feat. He takes no penalty to his Leadership score for moving around frequently, but takes a –2 penalty (instead of the normal –1) on his Leadership score when recruiting a cohort of a different alignment.',
        effects: [],
      },
      {
        name: 'Unstoppable Warrior',
        level: 10,
        description:
          "At 10th level, the sentinel gains damage reduction whose value and bypass type are based on his deity's alignment; the exact DR value and bypass type for each alignment are given in the Unstoppable Warrior table in Inner Sea Gods (values range from DR 3/— to DR 10/evil or good). He no longer falls unconscious when reduced to a negative hit point total, though he can take only a single standard or move action each round while at negative hit points. Once per day as a swift action, the sentinel can use cure critical wounds on himself with a caster level equal to his total character level.",
        effects: [],
      },
    ],
    spellcasting: { type: 'None', casting: 'None' },
    source: 'Inner Sea Gods',
  },
];
