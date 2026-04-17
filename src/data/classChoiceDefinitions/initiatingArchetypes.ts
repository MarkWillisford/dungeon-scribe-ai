import { ClassChoiceDefinition } from '@/types/classChoices';

// ClassChoiceDefinitions for grant-initiating martial archetypes.
// These archetypes add the initiating system to non-initiating base classes.
//
// className matches the archetype name (not the base class) so the UI can
// resolve definitions by checking the active archetype, not just the class name.
//
// All maneuver/stance selection uses type: 'special' — pick counts vary per
// level from the archetype's progression table, and discipline filtering is dynamic.

// ─── Primal Disciple (Barbarian, PoWE) ───────────────────────────────────────
// Disciplines: Golden Lion, Piercing Thunder, Primal Fury, Thrashing Dragon.
// Key ability: WIS. Full IL. Trades partial rage features for initiating.

export const primalDiscipleDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'primal-disciple-maneuvers-known',
    className: 'primal disciple',
    featureName: 'Maneuvers Known',
    description:
      'The Primal Disciple (Barbarian archetype) learns maneuvers from the Golden Lion, Piercing Thunder, Primal Fury, and Thrashing Dragon disciplines, using Wisdom as the initiating ability. The number of maneuvers known at each level is given in the archetype progression table.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: {
      disciplineIds: ['golden-lion', 'piercing-thunder', 'primal-fury', 'thrashing-dragon'],
    },
    source: 'dsp-powe',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'primal-disciple-stances-known',
    className: 'primal disciple',
    featureName: 'Stances Known',
    description:
      'The Primal Disciple learns stances from its accessible disciplines. Stances do not need to be readied.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: {
      disciplineIds: ['golden-lion', 'piercing-thunder', 'primal-fury', 'thrashing-dragon'],
    },
    source: 'dsp-powe',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// ─── Rubato (Bard, PoWE) ──────────────────────────────────────────────────────
// Disciplines: Elemental Flux, Golden Lion, Mithral Current.
// Key ability: CHA. Full IL. Trades some spell progression for initiating.

export const rubatoDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'rubato-maneuvers-known',
    className: 'rubato',
    featureName: 'Maneuvers Known',
    description:
      'The Rubato (Bard archetype) learns maneuvers from the Elemental Flux, Golden Lion, and Mithral Current disciplines, using Charisma as the initiating ability. The number of maneuvers known at each level is given in the archetype progression table.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: {
      disciplineIds: ['elemental-flux', 'golden-lion', 'mithral-current'],
    },
    source: 'dsp-powe',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'rubato-stances-known',
    className: 'rubato',
    featureName: 'Stances Known',
    description:
      'The Rubato learns stances from the Elemental Flux, Golden Lion, and Mithral Current disciplines. Stances do not need to be readied.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: {
      disciplineIds: ['elemental-flux', 'golden-lion', 'mithral-current'],
    },
    source: 'dsp-powe',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// ─── Myrmidon (Fighter, PoW) ──────────────────────────────────────────────────
// Disciplines: 4 chosen at creation from a list of 9.
// Key ability: WIS. Full IL. Trades bonus feats at 2/6/10/14/18 for initiating.

export const myrmidonDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'myrmidon-starting-disciplines',
    className: 'myrmidon',
    featureName: 'Starting Disciplines',
    description:
      'At 1st level, the Myrmidon selects 4 disciplines from the following list: Broken Blade, Golden Lion, Iron Tortoise, Mithral Current, Piercing Thunder, Primal Fury, Scarlet Throne, Tempest Gale, Thrashing Dragon. These disciplines cannot be changed after character creation.',
    selectionMode: { type: 'multi_at_creation', count: 4 },
    optionSource: 'collection',
    collectionName: 'disciplines',
    collectionFilter: {
      disciplineIds: [
        'broken-blade',
        'golden-lion',
        'iron-tortoise',
        'mithral-current',
        'piercing-thunder',
        'primal-fury',
        'scarlet-throne',
        'tempest-gale',
        'thrashing-dragon',
      ],
    },
    source: 'dsp-pow',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'myrmidon-maneuvers-known',
    className: 'myrmidon',
    featureName: 'Maneuvers Known',
    description:
      'The Myrmidon (Fighter archetype) learns maneuvers from the 4 disciplines chosen at creation, using Wisdom as the initiating ability. The number of maneuvers known at each level is given in the archetype progression table.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: { disciplineIds: '{chosen:myrmidon-starting-disciplines}' },
    source: 'dsp-pow',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'myrmidon-stances-known',
    className: 'myrmidon',
    featureName: 'Stances Known',
    description:
      'The Myrmidon learns stances from its 4 chosen disciplines. Stances do not need to be readied.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: { disciplineIds: '{chosen:myrmidon-starting-disciplines}' },
    source: 'dsp-pow',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// ─── Monk of the Silver Fist (Monk, PoWE) ─────────────────────────────────────
// Disciplines: Eternal Guardian, Iron Tortoise, Mithral Current.
// Key ability: WIS. Full IL. Trades some unarmed strike bonuses for initiating.

export const monkSilverFistDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'monk-silver-fist-maneuvers-known',
    className: 'monk of the silver fist',
    featureName: 'Maneuvers Known',
    description:
      'The Monk of the Silver Fist (Monk archetype) learns maneuvers from the Eternal Guardian, Iron Tortoise, and Mithral Current disciplines, using Wisdom as the initiating ability. The number of maneuvers known at each level is given in the archetype progression table.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: {
      disciplineIds: ['eternal-guardian', 'iron-tortoise', 'mithral-current'],
    },
    source: 'dsp-powe',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'monk-silver-fist-stances-known',
    className: 'monk of the silver fist',
    featureName: 'Stances Known',
    description:
      'The Monk of the Silver Fist learns stances from the Eternal Guardian, Iron Tortoise, and Mithral Current disciplines. Stances do not need to be readied.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: {
      disciplineIds: ['eternal-guardian', 'iron-tortoise', 'mithral-current'],
    },
    source: 'dsp-powe',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// ─── Knight Disciple (Paladin, PoW) ───────────────────────────────────────────
// Disciplines: Golden Lion, Iron Tortoise, Silver Crane.
// Key ability: CHA. Full IL. Trades spells, smite, lay on hands, and other paladin
// features for initiating.

export const knightDiscipleDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'knight-disciple-maneuvers-known',
    className: 'knight disciple',
    featureName: 'Maneuvers Known',
    description:
      'The Knight Disciple (Paladin archetype) learns maneuvers from the Golden Lion, Iron Tortoise, and Silver Crane disciplines, using Charisma as the initiating ability. The number of maneuvers known at each level is given in the archetype progression table.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: {
      disciplineIds: ['golden-lion', 'iron-tortoise', 'silver-crane'],
    },
    source: 'dsp-pow',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'knight-disciple-stances-known',
    className: 'knight disciple',
    featureName: 'Stances Known',
    description:
      'The Knight Disciple learns stances from the Golden Lion, Iron Tortoise, and Silver Crane disciplines. Stances do not need to be readied.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: {
      disciplineIds: ['golden-lion', 'iron-tortoise', 'silver-crane'],
    },
    source: 'dsp-pow',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// ─── Ambush Hunter (Ranger, PoW) ──────────────────────────────────────────────
// Disciplines: Golden Lion, Primal Fury (fixed) + 1 chosen.
// Key ability: WIS. Full IL. Trades spells, favored enemy, hunter's bond for initiating.

export const ambushHunterDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'ambush-hunter-bonus-discipline',
    className: 'ambush hunter',
    featureName: 'Bonus Discipline',
    description:
      'At 1st level, the Ambush Hunter selects one additional discipline beyond Golden Lion and Primal Fury. This bonus discipline is chosen at character creation and cannot be changed.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'collection',
    collectionName: 'disciplines',
    collectionFilter: { sourceSystem: ['pow', 'pow-extended'] },
    source: 'dsp-pow',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'ambush-hunter-maneuvers-known',
    className: 'ambush hunter',
    featureName: 'Maneuvers Known',
    description:
      'The Ambush Hunter (Ranger archetype) learns maneuvers from Golden Lion and Primal Fury, plus one bonus discipline chosen at creation, using Wisdom as the initiating ability. The number of maneuvers known at each level is given in the archetype progression table.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: {
      disciplineIds: ['golden-lion', 'primal-fury', '{chosen:ambush-hunter-bonus-discipline}'],
    },
    source: 'dsp-pow',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'ambush-hunter-stances-known',
    className: 'ambush hunter',
    featureName: 'Stances Known',
    description:
      'The Ambush Hunter learns stances from accessible disciplines. Stances do not need to be readied.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: {
      disciplineIds: ['golden-lion', 'primal-fury', '{chosen:ambush-hunter-bonus-discipline}'],
    },
    source: 'dsp-pow',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// ─── Hidden Blade (Path of War) (Rogue, PoW) ──────────────────────────────────
// Disambiguated from the existing PF1e "Hidden Blade" rogue archetype (weapon-concealment).
// Disciplines: Mithral Current, Thrashing Dragon, Veiled Moon + 1 bonus.
// Key ability: INT. Full IL. Trades rogue talents at 4/8/12/16/20 for initiating.

export const hiddenBladePowDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'hidden-blade-pow-bonus-discipline',
    className: 'hidden blade (path of war)',
    featureName: 'Bonus Discipline',
    description:
      'At 1st level, the Hidden Blade (Path of War) selects one additional discipline beyond Mithral Current, Thrashing Dragon, and Veiled Moon. This bonus discipline is chosen at character creation and cannot be changed.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'collection',
    collectionName: 'disciplines',
    collectionFilter: { sourceSystem: ['pow', 'pow-extended'] },
    source: 'dsp-pow',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'hidden-blade-pow-maneuvers-known',
    className: 'hidden blade (path of war)',
    featureName: 'Maneuvers Known',
    description:
      'The Hidden Blade (Path of War) (Rogue archetype) learns maneuvers from Mithral Current, Thrashing Dragon, and Veiled Moon, plus one bonus discipline chosen at creation, using Intelligence as the initiating ability. The number of maneuvers known at each level is given in the archetype progression table.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: {
      disciplineIds: ['mithral-current', 'thrashing-dragon', 'veiled-moon', '{chosen:hidden-blade-pow-bonus-discipline}'],
    },
    source: 'dsp-pow',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'hidden-blade-pow-stances-known',
    className: 'hidden blade (path of war)',
    featureName: 'Stances Known',
    description:
      'The Hidden Blade (Path of War) learns stances from accessible disciplines. Stances do not need to be readied.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: {
      disciplineIds: ['mithral-current', 'thrashing-dragon', 'veiled-moon', '{chosen:hidden-blade-pow-bonus-discipline}'],
    },
    source: 'dsp-pow',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
