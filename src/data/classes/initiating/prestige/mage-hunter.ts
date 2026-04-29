// Mage Hunter — Path of War: Expanded prestige class (Dreamscarred Press)
// Source: https://www.d20pfsrd.com/alternative-rule-systems/3rd-party-rules-systems/path-of-war/prestige-classes/mage-hunter/

import { BABProgression, SaveProgression } from '@/types/base';
import type { ExpandedClassData } from '../../types';
import type { InitiatingProgressionTable } from '../../initiatingProgressionTables';

// [maneuversKnown, maneuversReadied, stancesKnown] per prestige level 1-10
// These are cumulative gains from the prestige class itself.
export const MAGE_HUNTER_PROGRESSION: InitiatingProgressionTable = [
  [0, 0, 0], // 1
  [1, 0, 0], // 2
  [1, 1, 0], // 3
  [2, 1, 1], // 4
  [2, 1, 1], // 5
  [3, 2, 2], // 6
  [3, 2, 2], // 7
  [4, 2, 2], // 8
  [4, 3, 2], // 9
  [5, 3, 3], // 10
];

export const MAGE_HUNTER_CLASS: ExpandedClassData = {
  name: 'Mage Hunter',
  category: 'Prestige',
  maxLevel: 10,
  hitDie: 8,
  skillRanksPerLevel: 4,
  classSkills: [
    'Acrobatics',
    'Bluff',
    'Climb',
    'Craft',
    'Disguise',
    'Escape Artist',
    'Heal',
    'Knowledge (arcana)',
    'Knowledge (martial)',
    'Perception',
    'Spellcraft',
    'Stealth',
    'Use Magic Device',
  ],
  babProgression: BABProgression.Medium,
  saves: {
    fortitude: SaveProgression.Poor,
    reflex: SaveProgression.Good,
    will: SaveProgression.Poor,
  },
  weaponProficiencies: [],
  armorProficiencies: [],
  classFeatures: [
    {
      name: 'Maneuvers',
      level: 1,
      description:
        "At every even-numbered level, a mage hunter gains new maneuvers known from the Scarlet Throne, Shattered Mirror, Steel Serpent, Solar Wind, and Veiled Moon disciplines. He must meet a maneuver's prerequisites to learn it. He adds his full mage hunter levels to his initiator level to determine his total initiator level and his highest-level maneuvers known. At levels 3rd, 6th and 9th, he gains an additional maneuver readied per day.",
    },
    {
      name: 'Stances Known',
      level: 1,
      description:
        "At 4th level and again at 6th level and 10th level, a mage hunter learns a new stance from any of the disciplines available to him as a mage hunter. He must meet the stance's prerequisites to learn it.",
    },
    {
      name: 'Spells',
      level: 1,
      description:
        "A mage hunter casts arcane spells drawn from the magus spell list. He casts spells just as a sorcerer does. To learn or cast a spell, the mage hunter must have a primary initiator attribute score of at least 10 + the spell's level. He receives bonus spells per day based on his primary initiator attribute, and saving throw DCs are equal to 10 + spell level + his primary initiator attribute modifier. The mage hunter uses his initiator level as his caster level. Characters qualifying via Martial Training feats use Intelligence-based casting.",
    },
    {
      name: 'Martial Arcanist (Disruptive)',
      level: 1,
      description:
        'A mage hunter gains the Disruptive feat at 1st level. The mage hunter casts spells without arcane spell failure in light armor and when using a buckler.',
    },
    {
      name: 'Arcane Tenacity',
      level: 1,
      description:
        "A mage hunter's spells are particularly difficult to dispel; add 6 to the DC required to dispel the character's mage hunter spells.",
    },
    {
      name: 'Anchoring Point',
      level: 2,
      description:
        'As part of a successful martial strike, the mage hunter expends a 1st or higher-level spell slot as a free action and may attempt to target the foe with a dimensional anchor effect as a supernatural ability. Anchoring point lasts for a number of minutes equal to the level of the expended spell slot.',
    },
    {
      name: 'Strike of Dispelling',
      level: 3,
      description:
        'The mage hunter initiating this strike may expend a readied strike to use this strike in its place, and he makes an attack against a target. If the attack hits, the mage hunter may immediately make a dispel check with a caster level equal to his initiator level as if he had cast a targeted dispel magic in addition to doing normal damage. Each effect that is dispelled using this strike inflicts an additional 1d6 points of damage to the target.',
    },
    {
      name: 'Arcane Endurance',
      level: 4,
      description:
        "The duration of any of his mage hunter spells is doubled, as if affected by the Extend Spell feat (but without any adjustments to the spell's effective level or casting time). Spells that do not have a target entry are unaffected by this power.",
    },
    {
      name: 'Stance of the Mage Killer',
      level: 5,
      description:
        'To enter this stance, the mage hunter abandons a martial stance he is currently using as a swift action. Once within this stance, the mage hunter may cast one mage hunter spell as a swift action per round as part of a martial strike. Also while in this stance, if the mage hunter successfully makes a saving throw against an effect that has a reduced or partial effect on a successful saving throw (such as half damage on a fireball), the mage hunter instead is unaffected by the effect.',
    },
    {
      name: 'Mage Hunter Concentration',
      level: 6,
      description:
        'The mage hunter gains a +4 competence bonus to attempts to cast mage hunter spells defensively, and a +2 insight bonus to saves against spells.',
    },
    {
      name: 'Tethering Point',
      level: 7,
      description:
        'As part of a successful martial strike, the mage hunter expends a 1st or higher-level spell slot as a free action and may attempt to target the foe with a magical leash-like effect as a supernatural ability. Tethering point lasts for a number of minutes equal to the level of the expended spell slot. If the target of this ability were to utilize an effect, power, or spell with the (Teleportation) type, the mage hunter may either attempt to make a Will save against the effect to cause the target\'s attempt to flee to fail, or he may voluntarily go along for the ride and teleport with his quarry.',
    },
    {
      name: 'Martial Arcanist (Spellbreaker)',
      level: 8,
      description:
        'At 8th level, the mage hunter also gains the Spellbreaker feat. The mage hunter can now also cast spells without arcane spell failure in medium armor.',
    },
    {
      name: 'Strike of Magic Rending',
      level: 9,
      description:
        "The mage hunter initiating this strike may expend a readied strike to use this strike in its place, and he makes an attack against a target. If the attack hits, the mage hunter may immediately make a dispel check with a caster level equal to his initiator level as if he cast a targeted greater dispel magic in addition to doing normal damage. Additionally, if the mage hunter chooses to, anyone within 10 ft. of the mage hunter (excluding the mage hunter) is also affected as if they were hit by an area dispel magic. Each effect that is dispelled using this strike inflicts an additional 2d6 points of damage to the target or targets of this ability.",
    },
    {
      name: 'Mage Harrier Stance',
      level: 10,
      description:
        "To enter this stance, as a swift action the mage hunter abandons a martial stance he is currently using. Once within this stance, the mage hunter prevents magic-users from being able to cast defensively under any condition if they are within his melee reach. Additionally, while in this stance he gains spell resistance equal to 15 + his initiator level, and spells that fail against his spell resistance or that he successfully saves against grant a number of temporary hit points equal to twice the spell level cast against him to the mage hunter.",
    },
  ],
  prerequisites: {
    bab: 3,
    skills: [
      { name: 'Acrobatics', ranks: 2 },
      { name: 'Heal', ranks: 2 },
      { name: 'Spellcraft', ranks: 5 },
      { name: 'Stealth', ranks: 2 },
    ],
    feats: ['Improved Initiative', 'Step Up'],
    special: [
      'Ability to use 2nd-level maneuvers, including at least one strike and one stance',
      'Must speak Draconic',
      'Must read the Grimoire Serpentis Ferra (1 week uninterrupted study) or train with a willing instructor (4 weeks)',
    ],
  },
  spellcasting: {
    type: 'Arcane',
    casting: 'Spontaneous',
    spellList: 'Magus',
  },
  initiating: {
    type: 'Martial',
    initiatingAbility: 'INT',
    ilProgression: 'full',
    disciplines: [
      'scarlet-throne',
      'shattered-mirror',
      'steel-serpent',
      'solar-wind',
      'veiled-moon',
    ],
    progressionTableKey: 'mage-hunter',
    recoveryMechanics: {
      primary: {
        type: 'custom',
        description:
          'The mage hunter recovers maneuvers through the recovery mechanics of his base initiating class.',
      },
    },
  },
  source: 'Path of War: Expanded',
};
