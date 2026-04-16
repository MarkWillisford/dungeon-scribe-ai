import { ClassChoiceDefinition } from '@/types/classChoices';

export const rogueDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'rogue-talent',
    className: 'rogue',
    featureName: 'Rogue Talent',
    description:
      'At 2nd level and every 2 levels thereafter, a rogue gains a rogue talent. Advanced talents (marked talentTier: "advanced") are only available at rogue level 10 or higher.',
    selectionMode: {
      type: 'at_class_levels',
      levels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    },
    optionSource: 'collection',
    collectionName: 'roguetalents',
    // UI should filter out advanced talents below class level 10
    collectionFilter: {},
    source: 'pf1e-core',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
