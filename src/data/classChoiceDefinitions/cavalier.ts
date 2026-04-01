import { type ClassChoiceDefinition } from '@/types/classChoices';

export const cavalierDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'cavalier-order',
    className: 'cavalier',
    featureName: 'Order',
    description:
      'The order the cavalier pledges to at 1st level. Determines bonus class skills, edicts, and order abilities gained at levels 2, 8, and 15.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'collection',
    collectionName: 'cavalierorders',
    source: 'pf1e-core',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
