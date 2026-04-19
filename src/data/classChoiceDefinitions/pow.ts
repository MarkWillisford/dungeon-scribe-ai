import { ClassChoiceDefinition } from '@/types/classChoices';

// Path of War (Dreamscarred Press, PF1e)
// Three base initiating classes: Stalker, Warder, Warlord.

const POW_SOURCE = 'dsp-pow';

// ─── Stalker ──────────────────────────────────────────────────────────────────
// Disciplines: Broken Blade, Solar Wind, Steel Serpent, Thrashing Dragon, Veiled Moon.
// Recovery: swift action + ki to recover one maneuver.

export const stalkerDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'stalker-maneuvers-known',
    className: 'stalker',
    featureName: 'Maneuvers Known',
    description:
      'The Stalker learns maneuvers from the Broken Blade, Solar Wind, Steel Serpent, Thrashing Dragon, and Veiled Moon disciplines. The number of maneuvers known at each level is given in the progression table. The Stalker may swap one known maneuver each time they gain a class level.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: {
      disciplineIds: ['broken-blade', 'solar-wind', 'steel-serpent', 'thrashing-dragon', 'veiled-moon'],
    },
    source: POW_SOURCE,
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'stalker-stances-known',
    className: 'stalker',
    featureName: 'Stances Known',
    description:
      'The Stalker learns stances from the Broken Blade, Solar Wind, Steel Serpent, Thrashing Dragon, and Veiled Moon disciplines. Stances do not need to be readied. The number of stances known at each level is given in the progression table.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: {
      disciplineIds: ['broken-blade', 'solar-wind', 'steel-serpent', 'thrashing-dragon', 'veiled-moon'],
    },
    source: POW_SOURCE,
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// ─── Warder ───────────────────────────────────────────────────────────────────
// Disciplines: Broken Blade, Golden Lion, Iron Tortoise, Primal Fury, Scarlet Throne.
// Recovery: full-round action to recover all expended maneuvers.

export const warderDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'warder-maneuvers-known',
    className: 'warder',
    featureName: 'Maneuvers Known',
    description:
      'The Warder learns maneuvers from the Broken Blade, Golden Lion, Iron Tortoise, Primal Fury, and Scarlet Throne disciplines. The number of maneuvers known at each level is given in the progression table. The Warder may swap one known maneuver each time they gain a class level.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: {
      disciplineIds: ['broken-blade', 'golden-lion', 'iron-tortoise', 'primal-fury', 'scarlet-throne'],
    },
    source: POW_SOURCE,
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'warder-stances-known',
    className: 'warder',
    featureName: 'Stances Known',
    description:
      'The Warder learns stances from the Broken Blade, Golden Lion, Iron Tortoise, Primal Fury, and Scarlet Throne disciplines. Stances do not need to be readied. The number of stances known at each level is given in the progression table.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: {
      disciplineIds: ['broken-blade', 'golden-lion', 'iron-tortoise', 'primal-fury', 'scarlet-throne'],
    },
    source: POW_SOURCE,
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];

// ─── Warlord ──────────────────────────────────────────────────────────────────
// Disciplines: Golden Lion, Primal Fury, Scarlet Throne, Solar Wind, Thrashing Dragon.
// Recovery: gambit mechanic — succeed on a gambit to recover expended maneuvers.

export const warlordDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'warlord-maneuvers-known',
    className: 'warlord',
    featureName: 'Maneuvers Known',
    description:
      'The Warlord learns maneuvers from the Golden Lion, Primal Fury, Scarlet Throne, Solar Wind, and Thrashing Dragon disciplines. The number of maneuvers known at each level is given in the progression table. The Warlord may swap one known maneuver each time they gain a class level.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'maneuvers',
    collectionFilter: {
      disciplineIds: ['golden-lion', 'primal-fury', 'scarlet-throne', 'solar-wind', 'thrashing-dragon'],
    },
    source: POW_SOURCE,
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'warlord-stances-known',
    className: 'warlord',
    featureName: 'Stances Known',
    description:
      'The Warlord learns stances from the Golden Lion, Primal Fury, Scarlet Throne, Solar Wind, and Thrashing Dragon disciplines. Stances do not need to be readied. The number of stances known at each level is given in the progression table.',
    selectionMode: { type: 'special' },
    optionSource: 'collection',
    collectionName: 'stances',
    collectionFilter: {
      disciplineIds: ['golden-lion', 'primal-fury', 'scarlet-throne', 'solar-wind', 'thrashing-dragon'],
    },
    source: POW_SOURCE,
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
