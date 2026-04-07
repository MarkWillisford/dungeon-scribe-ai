// UC-Only 2-Point Eidolon Evolutions
// Source: Pathfinder Unchained (pf1e-unchained) + Horror Realms (pf1e-horror-realms)
// Count: 2 entries
// Excluded from this file (shared with APG): Ability Increase, Constrict, Energy Attacks,
//   Extra Feat, Flight, Gore, Grab, Immunity, Limbs, Poison, Rake, Rend, Shared Slot,
//   Trample, Tremorsense, Trip, Weapon Training

import type { EidolonEvolutionEntry } from '@/types/classOptions';

export const eidolonEvolutionsUc2pt: EidolonEvolutionEntry[] = [
  {
    id: 'evolution-blood-frenzy',
    name: 'Blood Frenzy',
    description:
      'The eidolon enters a frenzy when it is damaged. Whenever the eidolon takes damage in combat, it must attempt a Will save (DC 10 + 1/2 the eidolon\'s HD + the eidolon\'s Charisma modifier) or immediately attack the nearest creature, whether friend or foe, for 5 rounds (or until no creatures remain nearby). During the frenzy, the eidolon gains a +2 morale bonus on attack rolls and damage rolls. After the frenzy ends, the eidolon is fatigued for 1 minute and cannot frenzy again while fatigued. The eidolon must have an aberrant, daemon, or demon subtype and the summoner must be at least 7th level to select this evolution.',
    evolutionPointCost: 2,
    effects: [
      {
        type: 'special',
        target: 'special.blood-frenzy',
        value: 0,
        source: 'Eidolon Evolution — Blood Frenzy',
      },
    ],
    prerequisites: [
      { type: 'level', minimum: 7, class: 'summoner' },
    ],
    subtypeRestrictions: ['aberrant', 'daemon', 'demon'],
    summoner: 'unchained',
    source: 'pf1e-horror-realms',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-intermediate-psychic-magic',
    name: 'Intermediate Psychic Magic',
    description:
      'The eidolon gains 2 points of psychic energy per day. Select one spell from the following list: compel hostility, lesser confusion, hypnotism, mind thrust I, or vanish. The eidolon can cast that spell as a psychic spell by spending 1 point of psychic energy. The caster level for this ability equals the eidolon\'s total Hit Dice minus 2 (minimum 1st), and the save DC equals 10 + 1/2 the eidolon\'s HD + the eidolon\'s Charisma modifier. This evolution can be selected more than once. Each time, the eidolon gains a different spell from the list. Multiple psychic energy pools do not stack; the eidolon uses the highest amount of psychic energy granted across all psychic magic evolutions. The eidolon must have an aberrant subtype, the basic psychic magic evolution, a Charisma score of at least 11, and the summoner must be at least 5th level to select this evolution.',
    evolutionPointCost: 2,
    canBeTakenMultipleTimes: true,
    effects: [
      {
        type: 'special',
        target: 'special.intermediate-psychic-magic',
        value: 0,
        source: 'Eidolon Evolution — Intermediate Psychic Magic',
      },
    ],
    prerequisites: [
      { type: 'evolution', evolutionId: 'evolution-basic-psychic-magic' },
      { type: 'ability_score', ability: 'CHA', minimum: 11 },
      { type: 'level', minimum: 5, class: 'summoner' },
    ],
    subtypeRestrictions: ['aberrant'],
    summoner: 'unchained',
    source: 'pf1e-horror-realms',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
