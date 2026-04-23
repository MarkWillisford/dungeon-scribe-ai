// UC-Only 1-Point Eidolon Evolutions
// Source: Pathfinder Unchained (pf1e-unchained) + Horror Realms (pf1e-horror-realms)
// Count: 5 entries
//
// Includes:
//   - UC-exclusive: Basic Psychic Magic, Tentacle Mass
//   - UC forks with subtype requirements: Mount, Tail, Tentacle
//     (APG versions kept with summoner: 'apg'; UC summoners use the -uc variants)
//
// Excluded from this file (shared with APG at identical cost and prereqs):
//   Bite, Claws, Climb, Gills, Improved Damage, Improved Natural Armor, Magic Attacks,
//   Pincers, Pull, Push, Reach, Resistance, Scent, Shared Evolution, Skilled, Slam,
//   Sting, Swim, Tail Slap, Wing Buffet

import type { EidolonEvolutionEntry } from '@/types/classOptions';

export const eidolonEvolutionsUc1pt: EidolonEvolutionEntry[] = [
  {
    id: 'evolution-basic-psychic-magic',
    name: 'Basic Psychic Magic',
    description:
      "The eidolon learns to cast a psychic cantrip as a spell-like ability. Select one spell from the following list: dancing lights, detect magic, ghost sound, grave words, know direction, lullaby, mage hand, open/close, or telekinetic projectile. The eidolon can cast this spell at will as a psychic spell requiring thought and emotion components. The caster level for this ability equals the eidolon's total number of Hit Dice minus 2 (minimum 1st). The save DC for this ability is 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier. This evolution can be selected more than once. Each time, the eidolon gains a different spell from the list. The eidolon must have an aberrant subtype and a Charisma score of at least 10 to select this evolution.",
    evolutionPointCost: 1,
    stacking: { canRepeat: true, requiresDifferentMetadata: 'spell' },
    effects: [
      {
        type: 'special',
        target: 'special.basic-psychic-magic',
        value: 0,
        source: 'Eidolon Evolution — Basic Psychic Magic',
      },
    ],
    prerequisites: [{ type: 'ability_score', ability: 'CHA', minimum: 10 }],
    subtypeRestrictions: ['aberrant'],
    summoner: 'unchained',
    source: 'pf1e-horror-realms',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-tentacle-mass',
    name: 'Tentacle Mass',
    description:
      'The eidolon grows a thick mass of writhing tentacles in place of one of its natural attacks, granting it a tentacle mass primary natural attack. The tentacle mass deals 1d8 points of damage (2d6 if Large, 2d8 if Huge). If the eidolon also has the grab evolution linked to its tentacle mass, it can grapple creatures up to the same size as the eidolon (rather than one size smaller) and qualifies for the constrict evolution without requiring a serpentine base form. The eidolon must have an aberrant subtype to select this evolution.',
    evolutionPointCost: 1,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.natural-attack-tentacle-mass',
        value: 0,
        source: 'Eidolon Evolution — Tentacle Mass',
      },
    ],
    subtypeRestrictions: ['aberrant'],
    summoner: 'unchained',
    source: 'pf1e-horror-realms',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  // ── UC forks with subtype requirements ─────────────────────────────────────
  {
    id: 'evolution-mount-uc',
    name: 'Mount',
    description:
      'An eidolon is properly formed to serve as a combat-trained mount. The eidolon must be at least one size category larger than the summoner. The eidolon must have a quadruped or serpentine base form and a daemon, demon, devil, elemental, or protean subtype to take this evolution.',
    evolutionPointCost: 1,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.mount',
        value: 0,
        source: 'Eidolon Evolution — Mount',
      },
    ],
    formRestrictions: ['quadruped', 'serpentine'],
    subtypeRestrictions: ['daemon', 'demon', 'devil', 'elemental', 'protean'],
    summoner: 'unchained',
    source: 'pf1e-unchained',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-tail-uc',
    name: 'Tail',
    description:
      'An eidolon grows a long, powerful tail. The eidolon gains a +2 racial bonus on Acrobatics checks made to balance. This evolution can be selected more than once. The eidolon must have an agathion, daemon, demon, devil, div, elemental, protean, or psychopomp subtype to take this evolution.',
    evolutionPointCost: 1,
    stacking: { canRepeat: true },
    effects: [
      {
        type: 'bonus',
        bonusType: 'racial',
        target: 'skill.acrobatics',
        value: 2,
        source: 'Eidolon Evolution — Tail',
      },
    ],
    subtypeRestrictions: [
      'agathion',
      'daemon',
      'demon',
      'devil',
      'div',
      'elemental',
      'protean',
      'psychopomp',
    ],
    summoner: 'unchained',
    source: 'pf1e-unchained',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-tentacle-uc',
    name: 'Tentacle',
    description:
      'An eidolon possesses a long, sinuous tentacle, granting it a tentacle attack. This attack is a secondary attack. The tentacle deals 1d4 points of damage (1d6 if Large, 1d8 if Huge). This evolution can be selected more than once, granting one additional tentacle attack per selection. The eidolon must have a daemon, demon, or protean subtype to take this evolution.',
    evolutionPointCost: 1,
    stacking: { canRepeat: true },
    effects: [
      {
        type: 'special',
        target: 'special.natural-attack-tentacle',
        value: 0,
        source: 'Eidolon Evolution — Tentacle',
      },
    ],
    subtypeRestrictions: ['daemon', 'demon', 'protean'],
    summoner: 'unchained',
    source: 'pf1e-unchained',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
