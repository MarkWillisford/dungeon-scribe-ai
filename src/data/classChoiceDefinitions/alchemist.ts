import { type ClassChoiceDefinition } from '@/types/classChoices';

export const alchemistDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'alchemist-discovery',
    className: 'alchemist',
    featureName: 'Discovery',
    description:
      'At 2nd level and every 2 levels thereafter, an alchemist makes a new discovery. Some discoveries can only be made at certain level thresholds.',
    selectionMode: { type: 'at_class_levels', levels: [2, 4, 6, 8, 10, 12, 14, 16, 18] },
    optionSource: 'collection',
    collectionName: 'alchemistdiscoveries',
    collectionFilter: { discoveryTier: 'standard' },
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'alchemist-grand-discovery',
    className: 'alchemist',
    featureName: 'Grand Discovery',
    description:
      'At 20th level, an alchemist makes one grand discovery — a powerful capstone ability that defines his legacy.',
    selectionMode: { type: 'at_class_levels', levels: [20] },
    optionSource: 'collection',
    collectionName: 'alchemistdiscoveries',
    collectionFilter: { discoveryTier: 'grand' },
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
