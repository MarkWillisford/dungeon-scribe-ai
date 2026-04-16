import { ClassChoiceDefinition } from '@/types/classChoices';

export const slayerDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'slayer-talent',
    className: 'slayer',
    featureName: 'Slayer Talent',
    description:
      'At 2nd level and every 2 levels thereafter, a slayer gains a slayer talent. Advanced talents are available at 10th level+.',
    selectionMode: { type: 'every_n_class_levels', n: 2, startLevel: 2 },
    optionSource: 'collection',
    collectionName: 'slayertalents',
    source: 'pf1e-acg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
