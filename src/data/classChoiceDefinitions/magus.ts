import { ClassChoiceDefinition } from '@/types/classChoices';

export const magusDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'magus-arcana',
    className: 'magus',
    featureName: 'Magus Arcana',
    description:
      'At 3rd level, a magus gains one magus arcana. He gains an additional magus arcana for every three levels attained after 3rd level.',
    selectionMode: { type: 'every_n_class_levels', n: 3, startLevel: 3 },
    optionSource: 'collection',
    collectionName: 'magusarcana',
    source: 'pf1e-um',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
