import { ClassChoiceDefinition } from '@/types/classChoices';

// Weapon group ids used by Weapon Training and Advanced Weapon Training
const WEAPON_GROUPS: { id: string; name: string }[] = [
  { id: 'axes', name: 'Axes' },
  { id: 'blades-heavy', name: 'Blades, Heavy' },
  { id: 'blades-light', name: 'Blades, Light' },
  { id: 'bows', name: 'Bows' },
  { id: 'close', name: 'Close' },
  { id: 'crossbows', name: 'Crossbows' },
  { id: 'double', name: 'Double' },
  { id: 'firearms', name: 'Firearms' },
  { id: 'flails', name: 'Flails' },
  { id: 'hammers', name: 'Hammers' },
  { id: 'monk', name: 'Monk' },
  { id: 'natural', name: 'Natural' },
  { id: 'polearms', name: 'Polearms' },
  { id: 'spears', name: 'Spears' },
  { id: 'thrown', name: 'Thrown' },
];

export const fighterDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'fighter-bonus-feat',
    className: 'fighter',
    featureName: 'Bonus Feat',
    description:
      'At 1st level and every even level thereafter, a fighter gains a bonus feat from the list of combat feats.',
    selectionMode: {
      type: 'at_class_levels',
      levels: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    },
    optionSource: 'collection',
    collectionName: 'feats',
    collectionFilter: { isCombatFeat: true },
    source: 'pf1e-core',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'fighter-weapon-training',
    className: 'fighter',
    featureName: 'Weapon Training',
    description:
      'At 5th level and every 4 levels thereafter, a fighter selects a weapon group. He gains a bonus on attack and damage rolls with weapons from that group.',
    selectionMode: {
      type: 'at_class_levels',
      levels: [5, 9, 13, 17],
    },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'weapon-groups',
        name: '',
        options: WEAPON_GROUPS.map((g) => ({
          id: g.id,
          name: g.name,
          description: `Weapon group: ${g.name}`,
        })),
      },
    ],
    source: 'pf1e-core',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'fighter-advanced-weapon-training',
    className: 'fighter',
    featureName: 'Advanced Weapon Training',
    description:
      'At 9th level and every 4 levels thereafter, a fighter may choose an advanced weapon training option instead of gaining a new weapon group bonus.',
    selectionMode: {
      type: 'at_class_levels',
      levels: [9, 13, 17],
    },
    optionSource: 'collection',
    collectionName: 'advancedweapontraining',
    source: 'pf1e-core',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'fighter-advanced-armor-training',
    className: 'fighter',
    featureName: 'Advanced Armor Training',
    description:
      'At 7th level and every 4 levels thereafter, a fighter may select an advanced armor training option instead of the standard armor training progression.',
    selectionMode: {
      type: 'at_class_levels',
      levels: [7, 11, 15],
    },
    optionSource: 'collection',
    collectionName: 'advancedarmortraining',
    source: 'pf1e-core',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
