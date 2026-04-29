import { ArchetypeData } from '../types';
import type { InitiatingProgressionTable } from '../initiatingProgressionTables';

// ──────────────────────────────────────────────
// Primal Disciple — Barbarian archetype (Path of War: Expanded)
// GRANT archetype: gives the initiating system to the Barbarian.
// Source: https://www.d20pfsrd.com/classes/core-classes/barbarian/archetypes/dreamscarred-press-barbarian-archetypes/primal-disciple-barbarian-archetype/
// ──────────────────────────────────────────────

/**
 * Archetype Maneuver Progression (shared by PoW GRANT archetypes).
 * 20 rows: [maneuversKnown, maneuversReadied, stancesKnown]
 */
export const PRIMAL_DISCIPLE_PROGRESSION: InitiatingProgressionTable = [
  // Lvl  MK  MR  SK
  [3, 3, 1], // 1
  [4, 3, 1], // 2
  [5, 3, 1], // 3
  [6, 4, 2], // 4
  [6, 4, 2], // 5
  [6, 4, 2], // 6
  [7, 4, 3], // 7
  [7, 4, 3], // 8
  [8, 4, 3], // 9
  [8, 5, 3], // 10
  [9, 5, 4], // 11
  [9, 5, 4], // 12
  [10, 5, 5], // 13
  [11, 5, 5], // 14
  [11, 6, 5], // 15
  [12, 6, 5], // 16
  [13, 6, 5], // 17
  [14, 6, 5], // 18
  [14, 6, 5], // 19
  [15, 7, 5], // 20
];

export const PRIMAL_DISCIPLE_ARCHETYPE: ArchetypeData = {
  name: 'Primal Disciple',
  className: 'Barbarian',
  description:
    'Primal Disciples draw on the strength and wisdom of their ancestors to grant them the insight to use powerful martial techniques during their furious rages.',
  replacedFeatures: [
    'Fast Movement',
    'Trap Sense',
    'Rage Power (4th level)',
    'Rage Power (6th level)',
    'Rage Power (8th level)',
    'Rage Power (10th level)',
    'Rage Power (12th level)',
    'Rage Power (14th level)',
    'Rage Power (16th level)',
    'Rage Power (18th level)',
    'Rage Power (20th level)',
  ],
  modifiedFeatures: ['Class Skills'],
  newFeatures: [
    // ── Maneuvers ──
    {
      name: 'Maneuvers',
      level: 1,
      description:
        "A primal disciple begins her career with knowledge of three martial maneuvers. The disciplines available to her are Golden Lion, Piercing Thunder, Primal Fury, and Thrashing Dragon. A primal disciple gains Diplomacy as a class skill. Once the primal disciple knows a maneuver, she must ready it before she can use it. A maneuver usable by primal disciples is considered an extraordinary ability unless otherwise noted in it or its discipline's description. A primal disciple's maneuvers are not affected by spell resistance, and she does not provoke attacks of opportunity when she initiates one. The primal disciple learns additional maneuvers at higher levels, as indicated on Table: Archetype Maneuver Progression. The maximum level of maneuvers gained through primal disciple levels is limited by those listed in that table as well, although this restriction does not apply to maneuvers added to his maneuvers known through other methods, such as prestige classes or the Advanced Study feat. A primal disciple must meet a maneuver's prerequisite to learn it. Upon reaching 4th level, and at every even numbered initiator level thereafter (6th, 8th, 10th, and so on), the primal disciple can choose to learn a new maneuver in place of one she already knows. In effect, she loses the old maneuver in exchange for the new one. She can choose a new maneuver of any level she likes, as long as she observes the restriction on the highest-level maneuvers she knows; the primal disciple need not replace the old maneuver with a maneuver of the same level. She can swap only a single maneuver at any given level. A primal disciple's initiation modifier is Wisdom, and each primal disciple level is counted as a full initiator level.",
    },
    {
      name: 'Maneuvers Readied',
      level: 1,
      description:
        'A primal disciple can ready all three of her maneuvers known at 1st level, and as she advances in level and learns more maneuvers, she is able to ready more, but must still choose which maneuvers to ready. A primal disciple must always ready her maximum number of maneuvers readied. She readies her maneuvers by practicing weapon drills or communing with her ancestors for ten minutes. The maneuvers she chooses remain readied until she decides to meditate again and change them. The primal disciple does not need to sleep or rest for any long period of time in order to ready her maneuvers; any time she spends ten minutes in communion with her ancestors, she can change her readied maneuvers. A primal disciple begins an encounter with all her readied maneuvers unexpended, regardless of how many times she might have already used them since she chose them. When she initiates a maneuver, she expends it for the current encounter, so each of her readied maneuvers can be used once per encounter (unless she recovers them, as described below). In order for the primal disciple to recover maneuvers, she must draw on the strength of her ancestors as a full-round action. When she does so, she recovers a number of expended maneuvers equal to her primal disciple initiation modifier (minimum 2), regains one round of rage, and if she is fatigued as a result of her rage class feature, she can make a Fortitude save (DC 10 + the number of rounds the fatigue would last) to not become fatigued. Alternately, the primal disciple may focus inward and recover a single maneuver as a standard action.',
    },
    {
      name: 'Stances Known',
      level: 1,
      description:
        'A primal disciple begins play with knowledge of one stance from any discipline open to primal disciples. At 4th, 7th, 11th, and 13th levels, she can select an additional stance to learn. The maximum level of stances gained through primal disciple levels is limited by those listed in Table: Archetype Maneuver Progression. Unlike maneuvers, stances are not expended and the primal disciple does not have to ready them. All the stances she knows are available to her at all times, and she can change the stance she is currently maintaining as a swift action. A stance is an extraordinary ability unless otherwise stated in the stance or discipline description. Unlike with maneuvers, a primal disciple cannot learn a new stance at higher levels in place of one she already knows. This ability replaces the rage powers gained at 4th, 6th, 8th, 10th, 12th, 14th, 16th, 18th, and 20th levels.',
    },

    // ── Ancestral Style ──
    {
      name: 'Ancestral Style',
      level: 1,
      description:
        'Primal disciples draw their skill and strength from longstanding traditions of combat and skill in their tribes. At 1st level and again at 6th level, a primal disciple gains one of the following feats as a bonus feat: Enduring Protector, Martial Charge, Martial Power, Prodigious Two-Weapon Fighting, Seize the Opportunity, or Victorious Recovery. She must meet the prerequisites for these feats as normal. This ability replaces fast movement and trap sense.',
    },
  ],
  initiating: {
    type: 'Martial',
    initiatingAbility: 'WIS',
    ilProgression: 'full',
    disciplines: ['golden-lion', 'piercing-thunder', 'primal-fury', 'thrashing-dragon'],
    progressionTableKey: 'primal-disciple',
    recoveryMechanics: {
      primary: {
        type: 'custom',
        description:
          'The primal disciple draws on the strength of her ancestors as a full-round action, recovering a number of expended maneuvers equal to her initiation modifier (minimum 2), regaining one round of rage, and optionally making a Fortitude save (DC 10 + rounds of fatigue remaining) to avoid becoming fatigued from rage.',
      },
      secondary: {
        type: 'custom',
        description: 'As a standard action, recover a single expended maneuver.',
      },
    },
  },
  source: 'Path of War: Expanded',
};
