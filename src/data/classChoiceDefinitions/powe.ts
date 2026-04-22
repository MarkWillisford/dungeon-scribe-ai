import { ClassChoiceDefinition } from '@/types/classChoices';

// Path of War: Expanded (Dreamscarred Press, PF1e)
// Three base initiating classes: Harbinger, Mystic, Zealot.

const POWE_SOURCE = 'dsp-powe';

// ─── Harbinger ────────────────────────────────────────────────────────────────
// Disciplines: Cursed Razor, Eternal Guardian, Shattered Mirror, Veiled Moon + 1 chosen.
// Recovery: move through a threatened square to recover one maneuver.

export const harbingerDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'harbinger-bonus-discipline',
    className: 'harbinger',
    featureName: 'Bonus Discipline',
    description:
      'At 1st level, the Harbinger selects one additional discipline beyond the default four (Cursed Razor, Eternal Guardian, Shattered Mirror, Veiled Moon). This additional discipline is chosen at character creation and cannot be changed.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'collection',
    collectionName: 'disciplines',
    collectionFilter: { sourceSystem: ['pow', 'pow-extended'] },
    source: POWE_SOURCE,
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'harbinger-maneuvers-known',
    className: 'harbinger',
    featureName: 'Maneuvers Known',
    description:
      'The Harbinger learns maneuvers from the Cursed Razor, Eternal Guardian, Shattered Mirror, and Veiled Moon disciplines, plus one bonus discipline chosen at creation. The number of maneuvers known at each level is given in the progression table. The Harbinger may swap one known maneuver each time they gain a class level.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: {
      disciplineIds: ['cursed-razor', 'eternal-guardian', 'shattered-mirror', 'veiled-moon', '{chosen:harbinger-bonus-discipline}'],
    },
    source: POWE_SOURCE,
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'harbinger-stances-known',
    className: 'harbinger',
    featureName: 'Stances Known',
    description:
      'The Harbinger learns stances from its accessible disciplines. Stances do not need to be readied. The number of stances known at each level is given in the progression table.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: {
      disciplineIds: ['cursed-razor', 'eternal-guardian', 'shattered-mirror', 'veiled-moon', '{chosen:harbinger-bonus-discipline}'],
    },
    source: POWE_SOURCE,
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// ─── Mystic ───────────────────────────────────────────────────────────────────
// Disciplines: Elemental Flux, Mithral Current, Riven Hourglass, Shattered Mirror,
//              Sleeping Goddess, Tempest Gale.
// Recovery: animus-fueled (spend animus points to recover maneuvers).

export const mysticDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'mystic-maneuvers-known',
    className: 'mystic',
    featureName: 'Maneuvers Known',
    description:
      'The Mystic learns maneuvers from the Elemental Flux, Mithral Current, Riven Hourglass, Shattered Mirror, Sleeping Goddess, and Tempest Gale disciplines. The number of maneuvers known at each level is given in the progression table. The Mystic may swap one known maneuver each time they gain a class level.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: {
      disciplineIds: [
        'elemental-flux',
        'mithral-current',
        'riven-hourglass',
        'shattered-mirror',
        'sleeping-goddess',
        'tempest-gale',
      ],
    },
    source: POWE_SOURCE,
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'mystic-stances-known',
    className: 'mystic',
    featureName: 'Stances Known',
    description:
      'The Mystic learns stances from its accessible disciplines. Stances do not need to be readied. The number of stances known at each level is given in the progression table.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: {
      disciplineIds: [
        'elemental-flux',
        'mithral-current',
        'riven-hourglass',
        'shattered-mirror',
        'sleeping-goddess',
        'tempest-gale',
      ],
    },
    source: POWE_SOURCE,
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// ─── Zealot ───────────────────────────────────────────────────────────────────
// Disciplines: Eternal Guardian, Golden Lion, Silver Crane, Sleeping Goddess.
// Recovery: conviction-fueled (spend conviction points to recover maneuvers).

export const zealotDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'zealot-maneuvers-known',
    className: 'zealot',
    featureName: 'Maneuvers Known',
    description:
      'The Zealot learns maneuvers from the Eternal Guardian, Golden Lion, Silver Crane, and Sleeping Goddess disciplines. The number of maneuvers known at each level is given in the progression table. The Zealot may swap one known maneuver each time they gain a class level.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: {
      disciplineIds: ['eternal-guardian', 'golden-lion', 'silver-crane', 'sleeping-goddess'],
    },
    source: POWE_SOURCE,
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'zealot-stances-known',
    className: 'zealot',
    featureName: 'Stances Known',
    description:
      'The Zealot learns stances from the Eternal Guardian, Golden Lion, Silver Crane, and Sleeping Goddess disciplines. Stances do not need to be readied. The number of stances known at each level is given in the progression table.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: {
      disciplineIds: ['eternal-guardian', 'golden-lion', 'silver-crane', 'sleeping-goddess'],
    },
    source: POWE_SOURCE,
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
