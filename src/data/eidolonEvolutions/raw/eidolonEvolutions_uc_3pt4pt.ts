// UC-Only 3-Point and 4-Point Eidolon Evolutions
// Source: Pathfinder Unchained (pf1e-unchained) + Horror Realms (pf1e-horror-realms)
// Count: 9 entries (3 × 3pt, 6 × 4pt)
//
// Shared evolutions (covered by APG entries, no summoner field) excluded here:
//   3pt: Blindsense, Burrow, Frightful Presence, Swallow Whole (APG has no subtype req),
//        Spell Resistance (APG shared entry covers both)
//   4pt: Blindsight, Breath Weapon, Fast Healing, Large
//
// UC-exclusive entries with same name but different mechanics get '-uc' suffix:
//   evolution-damage-reduction-uc: UC version INCREASES existing subtype DR by 5
//     (APG version GRANTS new DR 5 bypassed by chosen alignment — genuinely different)
//   evolution-swallow-whole-uc: UC version REQUIRES specific subtypes
//     (APG version has no subtype requirement)

import type { EidolonEvolutionEntry } from '@/types/classOptions';

export const eidolonEvolutionsUc3pt4pt: EidolonEvolutionEntry[] = [
  // ── 3-POINT EVOLUTIONS ───────────────────────────────────────────────────

  {
    id: 'evolution-advanced-psychic-magic',
    name: 'Advanced Psychic Magic',
    description:
      "The eidolon gains 5 points of psychic energy per day. Select one spell from the following list: darkness, detect thoughts, disfiguring touch, id insinuation I, mind thrust II, or touch of idiocy. The eidolon can cast that spell as a psychic spell by spending 2 points of psychic energy. The caster level for this ability equals the eidolon's total Hit Dice minus 2 (minimum 1st), and the save DC equals 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier. This evolution can be selected more than once. Each time, the eidolon gains a different spell from the list. Multiple psychic energy pools do not stack; the eidolon uses the highest amount granted across all psychic magic evolutions. The eidolon must have an aberrant subtype, the intermediate psychic magic evolution, a Charisma score of at least 12, and the summoner must be at least 7th level to select this evolution.",
    evolutionPointCost: 3,
    stacking: { canRepeat: true, requiresDifferentMetadata: 'spell' },
    effects: [
      {
        type: 'special',
        target: 'special.advanced-psychic-magic',
        value: 0,
        source: 'Eidolon Evolution — Advanced Psychic Magic',
      },
    ],
    prerequisites: [
      { type: 'evolution', evolutionId: 'evolution-intermediate-psychic-magic' },
      { type: 'ability_score', ability: 'CHA', minimum: 12 },
      { type: 'level', minimum: 7, class: 'summoner' },
    ],
    subtypeRestrictions: ['aberrant'],
    summoner: 'unchained',
    source: 'pf1e-horror-realms',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-alien-consciousness',
    name: 'Alien Consciousness',
    description:
      "The eidolon's alien mind inflicts damage on creatures that make mental contact with it. Whenever a creature establishes a telepathic link with the eidolon or reads its mind, it takes 1d4 points of Wisdom damage (or 1d8 points of sanity damage if using the sanity rules from Horror Adventures). As a swift action, the eidolon can initiate mental contact with one creature within 30 feet, forcing that creature to make a Will saving throw (DC 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier) or take the damage; a successful save halves the damage. A creature that succeeds at its saving throw against this ability is immune to that eidolon's alien consciousness for 24 hours. The summoner cannot be affected by his own eidolon's alien consciousness but can be affected by another summoner's eidolon. This is a mind-affecting effect. The eidolon must have an aberrant or protean subtype and the summoner must be at least 9th level to select this evolution.",
    evolutionPointCost: 3,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.alien-consciousness',
        value: 0,
        source: 'Eidolon Evolution — Alien Consciousness',
      },
    ],
    prerequisites: [{ type: 'level', minimum: 9, class: 'summoner' }],
    subtypeRestrictions: ['aberrant', 'protean'],
    summoner: 'unchained',
    source: 'pf1e-horror-realms',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-damage-reduction-uc',
    name: 'Damage Reduction',
    description:
      "The eidolon's subtype-granted damage reduction increases by 5 points. The eidolon must have existing damage reduction granted by its subtype to select this evolution. The summoner must be at least 15th level before selecting this evolution.",
    evolutionPointCost: 3,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.damage-reduction',
        value: 5,
        source: 'Eidolon Evolution — Damage Reduction',
      },
    ],
    prerequisites: [
      { type: 'level', minimum: 15, class: 'summoner' },
      { type: 'special', description: 'Must have existing subtype-granted damage reduction' },
    ],
    summoner: 'unchained',
    source: 'pf1e-unchained',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-pounce-uc',
    name: 'Pounce',
    description:
      'The eidolon gains quick reflexes, allowing it to make a full attack after a charge. The summoner must be at least 7th level before selecting this evolution.',
    evolutionPointCost: 3,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.pounce',
        value: 0,
        source: 'Eidolon Evolution — Pounce',
      },
    ],
    prerequisites: [{ type: 'level', minimum: 7, class: 'summoner' }],
    summoner: 'unchained',
    source: 'pf1e-unchained',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-swallow-whole-uc',
    name: 'Swallow Whole',
    description:
      "The eidolon gains the ability to swallow creatures it has grabbed with its bite attack. At the start of each of the eidolon's turns, if it has a creature grappled in its maw via a bite attack, the eidolon can attempt a combat maneuver check to swallow the grappled creature. The creature must be at least one size category smaller than the eidolon. A swallowed creature takes an amount of bludgeoning damage equal to the eidolon's bite damage each round plus 1d6 points of acid damage. A swallowed creature can cut its way out by dealing damage equal to 1/10 the eidolon's total hit points using a light piercing or slashing weapon, or it can attempt to escape the grapple normally. The eidolon must have the grab evolution (linked to its bite attack) and an agathion, daemon, demon, devil, div, elemental, protean, or psychopomp subtype. The summoner must be at least 9th level before selecting this evolution.",
    evolutionPointCost: 3,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.swallow-whole',
        value: 0,
        source: 'Eidolon Evolution — Swallow Whole',
      },
    ],
    prerequisites: [
      { type: 'evolution', evolutionId: 'evolution-grab' },
      { type: 'level', minimum: 9, class: 'summoner' },
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
    id: 'evolution-web-uc',
    name: 'Web',
    description:
      "The eidolon gains spinnerets and can spin webs. The eidolon's webs can support the eidolon and one creature of the same size. In addition, the eidolon can throw webbing as a ranged touch attack with a range of 50 feet and a range increment of 10 feet. This attack can target one creature, entangling it. An entangled creature can escape with a successful Escape Artist check or a Strength check (–4 penalty), with a DC equal to 10 + 1/2 the eidolon's HD + the eidolon's Constitution modifier. The webs have 0 hardness and a number of hit points equal to the eidolon's total Hit Dice. The eidolon can use this ability a number of times per day equal to 8. The eidolon must have the climb evolution and a daemon, demon, or protean subtype. The summoner must be at least 7th level before selecting this evolution.",
    evolutionPointCost: 3,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.web',
        value: 0,
        source: 'Eidolon Evolution — Web',
      },
    ],
    prerequisites: [
      { type: 'evolution', evolutionId: 'evolution-climb' },
      { type: 'level', minimum: 7, class: 'summoner' },
    ],
    subtypeRestrictions: ['daemon', 'demon', 'protean'],
    summoner: 'unchained',
    source: 'pf1e-unchained',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },

  // ── 4-POINT EVOLUTIONS ───────────────────────────────────────────────────

  {
    id: 'evolution-amorphous',
    name: 'Amorphous',
    description:
      "The eidolon's biology lacks discernible weak points. It is not subject to critical hits or sneak attacks. The eidolon must have an aberrant or elemental subtype. The summoner must be at least 9th level before selecting this evolution.",
    evolutionPointCost: 4,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.amorphous',
        value: 0,
        source: 'Eidolon Evolution — Amorphous',
      },
    ],
    prerequisites: [{ type: 'level', minimum: 9, class: 'summoner' }],
    subtypeRestrictions: ['aberrant', 'elemental'],
    summoner: 'unchained',
    source: 'pf1e-horror-realms',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-disease',
    name: 'Disease',
    description:
      "One of the eidolon's natural weapons carries a disease chosen from the following list: bubonic plague, filth fever, leprosy, red ache, or shakes. Any creature the eidolon hits with that attack must attempt a Fortitude saving throw or contract the disease. The save DC equals 10 + 1/2 the eidolon's HD + the eidolon's Constitution modifier. The eidolon can only expose a creature to the disease once per round, regardless of how many times it hits with the disease-carrying attack. For 2 additional evolution points, the eidolon can instead choose demon fever, devil chills, or slimy doom. The eidolon must have an aberrant, daemon, demon, or devil subtype, or the undead appearance evolution. The summoner must be at least 7th level before selecting this evolution.",
    evolutionPointCost: 4,
    stacking: { canRepeat: false },
    effects: [
      {
        type: 'special',
        target: 'special.disease',
        value: 0,
        source: 'Eidolon Evolution — Disease',
      },
    ],
    prerequisites: [
      { type: 'level', minimum: 7, class: 'summoner' },
      {
        type: 'special',
        description:
          'Must have aberrant, daemon, demon, or devil subtype, or the undead appearance evolution',
      },
    ],
    summoner: 'unchained',
    source: 'pf1e-horror-realms',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'evolution-superior-psychic-magic',
    name: 'Superior Psychic Magic',
    description:
      "The eidolon gains 7 points of psychic energy per day. Select one spell from the following list: confusion, deeper darkness, displacement, jester's jaunt, id insinuation II, or mind thrust III. The eidolon can cast that spell as a psychic spell by spending 3 points of psychic energy. The caster level for this ability equals the eidolon's total Hit Dice minus 2 (minimum 1st), and the save DC equals 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier. This evolution can be selected more than once. Each time, the eidolon gains a different spell from the list. Multiple psychic energy pools do not stack; the eidolon uses the highest amount granted across all psychic magic evolutions. The eidolon must have an aberrant subtype, the advanced psychic magic evolution, a Charisma score of at least 13, and the summoner must be at least 11th level to select this evolution.",
    evolutionPointCost: 4,
    stacking: { canRepeat: true, requiresDifferentMetadata: 'spell' },
    effects: [
      {
        type: 'special',
        target: 'special.superior-psychic-magic',
        value: 0,
        source: 'Eidolon Evolution — Superior Psychic Magic',
      },
    ],
    prerequisites: [
      { type: 'evolution', evolutionId: 'evolution-advanced-psychic-magic' },
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'level', minimum: 11, class: 'summoner' },
    ],
    subtypeRestrictions: ['aberrant'],
    summoner: 'unchained',
    source: 'pf1e-horror-realms',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
