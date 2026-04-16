import { ClassChoiceDefinition } from '@/types/classChoices';

export const bloodragerDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'bloodrager-bloodline',
    className: 'bloodrager',
    featureName: 'Bloodline',
    description:
      'At 1st level, a bloodrager chooses a bloodline that empowers his bloodrages, granting bonus spells, bonus feats, and bloodline powers.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'collection',
    collectionName: 'bloodlines',
    collectionFilter: { classIds: 'bloodrager' },
    source: 'pf1e-acg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
