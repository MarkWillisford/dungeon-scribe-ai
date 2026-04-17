import { ClassChoiceDefinition } from '@/types/classChoices';

// Tome of Battle: The Book of Nine Swords (WotC, 3.5e)
// Three base initiating classes: Crusader, Swordsage, Warblade.
//
// All maneuver/stance selection uses type: 'special' because:
//   - Pick count varies per level (progression table delta, not a fixed schedule)
//   - Discipline filtering is dynamic (varies by class/archetype/tradition)
//   - Some classes allow swapping one known maneuver per level-up

const TOB_SOURCE = '3.5e-tob';

// ─── Crusader ─────────────────────────────────────────────────────────────────
// Unique: readies ALL known maneuvers. Random-grant mechanic: 2 per round (3 at 14+).
// Disciplines: Devoted Spirit, Stone Dragon, White Raven.

export const crusaderDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'crusader-maneuvers-known',
    className: 'crusader',
    featureName: 'Maneuvers Known',
    description:
      'The Crusader learns maneuvers from the Devoted Spirit, Stone Dragon, and White Raven disciplines. Unlike other initiating classes, the Crusader readies all known maneuvers — there is no separate readied subset. Each round, 2 readied maneuvers are randomly granted (rising to 3 at 14th level). The number of maneuvers known at each level is given in the progression table.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: { disciplineIds: ['devoted-spirit', 'stone-dragon', 'white-raven'] },
    source: TOB_SOURCE,
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'crusader-stances-known',
    className: 'crusader',
    featureName: 'Stances Known',
    description:
      'The Crusader learns stances from the Devoted Spirit, Stone Dragon, and White Raven disciplines. Stances do not need to be readied — once learned, a stance is always available. The number of stances known at each level is given in the progression table.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: { disciplineIds: ['devoted-spirit', 'stone-dragon', 'white-raven'] },
    source: TOB_SOURCE,
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// ─── Swordsage ────────────────────────────────────────────────────────────────
// Most maneuvers known of any ToB class; gains stances faster.
// Access to 6 of 9 ToB disciplines by default, plus 1 chosen at creation.
// Recovery: full-round action to recover one expended maneuver.

export const swordsageDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'swordsage-bonus-discipline',
    className: 'swordsage',
    featureName: 'Bonus Discipline',
    description:
      'At 1st level, the Swordsage selects one additional discipline beyond the default six (Desert Wind, Diamond Mind, Setting Sun, Shadow Hand, Stone Dragon, Tiger Claw). This additional discipline is chosen at character creation and cannot be changed.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'collection',
    collectionName: 'disciplines',
    collectionFilter: { sourceSystem: 'tob' },
    source: TOB_SOURCE,
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'swordsage-maneuvers-known',
    className: 'swordsage',
    featureName: 'Maneuvers Known',
    description:
      'The Swordsage learns maneuvers from the Desert Wind, Diamond Mind, Setting Sun, Shadow Hand, Stone Dragon, Tiger Claw disciplines, plus one bonus discipline chosen at creation. The Swordsage knows more maneuvers than any other ToB initiator. The number of maneuvers known at each level is given in the progression table. The Swordsage may swap one known maneuver each time they gain a class level.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: {
      disciplineIds: [
        'desert-wind', 'diamond-mind', 'setting-sun', 'shadow-hand', 'stone-dragon', 'tiger-claw',
        '{chosen:swordsage-bonus-discipline}',
      ],
    },
    source: TOB_SOURCE,
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'swordsage-stances-known',
    className: 'swordsage',
    featureName: 'Stances Known',
    description:
      'The Swordsage learns stances from accessible disciplines at a faster rate than other ToB initiators. Stances do not need to be readied. The number of stances known at each level is given in the progression table.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: {
      disciplineIds: [
        'desert-wind', 'diamond-mind', 'setting-sun', 'shadow-hand', 'stone-dragon', 'tiger-claw',
        '{chosen:swordsage-bonus-discipline}',
      ],
    },
    source: TOB_SOURCE,
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// ─── Warblade ─────────────────────────────────────────────────────────────────
// Disciplines: Diamond Mind, Iron Heart, Stone Dragon, Tiger Claw, White Raven.
// Recovery: initiate a strike, then recover all other expended maneuvers as a free action.

export const warbladeDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'warblade-maneuvers-known',
    className: 'warblade',
    featureName: 'Maneuvers Known',
    description:
      'The Warblade learns maneuvers from the Diamond Mind, Iron Heart, Stone Dragon, Tiger Claw, and White Raven disciplines. The number of maneuvers known at each level is given in the progression table. The Warblade may swap one known maneuver each time they gain a class level.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: {
      disciplineIds: ['diamond-mind', 'iron-heart', 'stone-dragon', 'tiger-claw', 'white-raven'],
    },
    source: TOB_SOURCE,
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'warblade-stances-known',
    className: 'warblade',
    featureName: 'Stances Known',
    description:
      'The Warblade learns stances from the Diamond Mind, Iron Heart, Stone Dragon, Tiger Claw, and White Raven disciplines. Stances do not need to be readied. The number of stances known at each level is given in the progression table.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: {
      disciplineIds: ['diamond-mind', 'iron-heart', 'stone-dragon', 'tiger-claw', 'white-raven'],
    },
    source: TOB_SOURCE,
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
