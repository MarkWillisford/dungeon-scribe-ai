import { type ClassChoiceDefinition } from '@/types/classChoices';

export const warpriestDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'warpriest-blessings',
    className: 'warpriest',
    featureName: 'Blessings',
    description:
      "At 1st level, a warpriest selects two blessings from among those granted by his deity (each connected to one of his deity's domains). Minor blessing powers are available from level 1; major blessing powers unlock at level 10.",
    selectionMode: { type: 'multi_at_creation', count: 2 },
    optionSource: 'collection',
    collectionName: 'warpriestblessings',
    collectionFilter: { deityIds: '{chosen_deity}' },
    source: 'pf1e-acg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'warpriest-bonus-feat',
    className: 'warpriest',
    featureName: 'Bonus Feat',
    description:
      'At 3rd level and every 3 levels thereafter, a warpriest gains a bonus combat feat. He must meet the prerequisites of these feats.',
    selectionMode: { type: 'at_class_levels', levels: [3, 6, 9, 12, 15, 18] },
    optionSource: 'collection',
    collectionName: 'feats',
    collectionFilter: { featType: 'combat' },
    source: 'pf1e-acg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
