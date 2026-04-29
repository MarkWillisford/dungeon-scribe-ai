// Bladecaster — Path of War prestige class (Dreamscarred Press)
// Source: https://www.d20pfsrd.com/alternative-rule-systems/3rd-party-rules-systems/path-of-war/prestige-classes/bladecaster/

import { BABProgression, SaveProgression } from '@/types/base';
import type { ExpandedClassData } from '../../types';
import type { InitiatingProgressionTable } from '../../initiatingProgressionTables';

// Incremental gains per level: [maneuversKnown, maneuversReadied, stancesKnown]
// Levels 1-10
export const BLADECASTER_PROGRESSION: InitiatingProgressionTable = [
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

export const BLADECASTER_CLASS: ExpandedClassData = {
  name: 'Bladecaster',
  category: 'Prestige',
  maxLevel: 10,
  hitDie: 10,
  skillRanksPerLevel: 4,
  classSkills: [
    'Acrobatics',
    'Craft',
    'Knowledge (arcana)',
    'Knowledge (martial)',
    'Perception',
    'Sense Motive',
    'Spellcraft',
    'Stealth',
  ],
  babProgression: BABProgression.Medium,
  saves: {
    fortitude: SaveProgression.Poor,
    reflex: SaveProgression.Poor,
    will: SaveProgression.Good,
  },
  weaponProficiencies: [],
  armorProficiencies: [],
  prerequisites: {
    bab: 4,
    skills: [
      { name: 'Knowledge (martial)', ranks: 5 },
      { name: 'Spellcraft', ranks: 5 },
    ],
    feats: ['Combat Casting', 'Improved Counterspell'],
    spellcasting: 'Ability to cast 2nd-level arcane spells',
    special: ['Ability to use 1st-level maneuvers including at least one stance'],
  },
  classFeatures: [
    {
      name: 'Martial Caster',
      level: 1,
      description:
        'The bladecaster may select one arcane spellcasting class that he possesses; he may now cast its spells in light armor without suffering interference from arcane spell failure chance.',
    },
    {
      name: 'Maneuvers',
      level: 1,
      description:
        'The character adds his full bladecaster levels to his initiator level to determine his total initiator level and his highest-level maneuvers known. At every even-numbered level, a bladecaster gains new maneuvers known, chosen from the Elemental Flux and Shattered Mirror disciplines and any discipline he previously had access to. He must meet the prerequisites for any maneuver he selects.',
    },
    {
      name: 'Maneuvers Readied',
      level: 1,
      description:
        "A bladecaster gains additional maneuvers readied at 3rd, 6th, and 9th levels as shown on the class table. These additional readied maneuvers are added to the character's total from his base initiating class.",
    },
    {
      name: 'Stances Known',
      level: 1,
      description:
        "A bladecaster gains additional stances known at 4th, 6th, and 10th levels as shown on the class table. These additional stances are added to the character's total from his base initiating class.",
    },
    {
      name: 'Stance of Arcane Steel',
      level: 1,
      description:
        "The bladecaster gains a special stance equivalent to a 3rd-level stance that he may assume as a swift action. While in this stance, as a free action, the bladecaster may sacrifice uncast spells or spell slots to grant himself one of the following bonuses for one round (the duration increases to two rounds at 5th level and three rounds at 9th level): Arcane Edge: The bladecaster gains an insight bonus on attack rolls equal to the spell's level. Eldritch Smite: The bladecaster adds 1d6 points of extra damage per level of the spell sacrificed. If either the bladecaster's weapon or the spell sacrificed has an elemental property (acid, cold, electricity, fire, or sonic), the damage is of that type; otherwise, the damage is force damage. Defensive Field: The bladecaster gains a bonus to AC equal to the spell's level. Grace of the Arcane: The bladecaster gains an insight bonus on Fortitude and Reflex saving throws equal to the spell's level. Energy Shield: The bladecaster gains resistance to acid, cold, electricity, fire, or sonic (chosen when the spell is sacrificed) equal to 5 times the spell's level.",
    },
    {
      name: 'Spellcasting Advancement',
      level: 2,
      description:
        'At each level except 1st level and 10th level, the bladecaster gains new spells per day and an increase in caster level (and spells known, if applicable) as if he had also gained a level in an arcane spellcasting class he belonged to before adding the prestige class. He does not, however, gain any other benefit a character of that class would have gained.',
    },
    {
      name: 'Arcane Steel',
      level: 2,
      description:
        "Whenever a bladecaster casts an arcane spell, he gains a defense field of energy that protects him from harm. The bladecaster gains temporary hit points equal to twice the spell's level. These temporary hit points stack with themselves and last until the end of the encounter or until depleted.",
    },
    {
      name: 'Arcane Recovery',
      level: 3,
      description:
        'As a free action, the character may expend a prepared spell or spell slot to recover an expended maneuver. The bladecaster sacrifices a prepared arcane spell or spell slot of a level equal to or greater than the maneuver level to be recovered, and the maneuver is instantly recovered. The bladecaster gains a +2 circumstance bonus to his caster level on the next arcane spell he casts (within one minute of using arcane recovery; multiple recoveries do not stack or accrue multiple uses).',
    },
    {
      name: "Battlecaster's Strike",
      level: 4,
      description:
        "When the bladecaster initiates a martial strike, as a swift action he may cast an arcane spell (with a range of touch and a level equal to or less than the level of the strike initiated) against the same target as the strike. The bladecaster must cast the spell defensively if he is threatened by any opponent. This ability may be used a number of times per day equal to 1 + the bladecaster's initiator modifier (minimum of 1).",
    },
    {
      name: 'Arcane Ruin',
      level: 5,
      description:
        "A foe damaged by the bladecaster's martial strikes finds that it suffers increased difficulties resisting the bladecaster's magic, suffering a -2 penalty to its Armor Class and saving throws against the bladecaster's arcane spells on subsequent rounds for the remainder of the encounter, or until the bladecaster recovers his maneuvers.",
    },
    {
      name: 'Martial Counterspell',
      level: 7,
      description:
        "If the bladecaster is targeted by or subjected to a spell or spell-like ability, he may as an immediate action expend a readied counter and make a Spellcraft check (DC 15 + the spell's level) to identify the spell. If successful, he then makes an initiator level check (1d20 + initiator level) against a DC of 11 + the caster level of the spell to counter it. If both checks succeed, the spell is countered as if by dispel magic.",
    },
    {
      name: 'Improved Battlecasting',
      level: 9,
      description:
        "The bladecaster may utilize ranged touch spells against foes as if they were melee touch spells when utilizing his battlecaster's strike.",
    },
    {
      name: 'Arcane Assault',
      level: 10,
      description:
        "The bladecaster may activate this ability as a free action when he casts a spell that requires an attack roll. He may initiate a strike as a free part of casting that spell, using the spell in place of his normal ranged or melee attack. The spell's range is reduced to 30 feet or the spell's range, whichever is smaller. If the target has spell resistance, the bladecaster must overcome it or the maneuver portion of the attack also fails. If the spell allows a saving throw that negates its effects, a successful save also negates the maneuver. This ability may be used a number of times per day equal to 1 + the bladecaster's initiator modifier.",
    },
  ],
  spellcasting: { type: 'None', casting: 'None' },
  advancesSpellcasting: {
    mode: 'single',
    tradition: 'arcane',
    atLevels: [2, 3, 4, 5, 6, 7, 8, 9],
  },
  initiating: {
    type: 'Martial',
    initiatingAbility: 'INT',
    ilProgression: 'full',
    disciplines: ['elemental-flux', 'shattered-mirror'],
    progressionTableKey: 'bladecaster',
    recoveryMechanics: {
      primary: {
        type: 'custom',
        description:
          'As a free action, the bladecaster may expend a prepared arcane spell or spell slot of a level equal to or greater than the maneuver level to be recovered, and the maneuver is instantly recovered. The bladecaster gains a +2 circumstance bonus to his caster level on the next arcane spell he casts within one minute.',
      },
    },
  },
  source: 'Path of War',
};
