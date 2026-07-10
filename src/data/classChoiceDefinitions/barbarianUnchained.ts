import { ClassChoiceDefinition } from '@/types/classChoices';

export const barbarianUnchainedDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'barbarian-unchained-rage-power',
    className: 'barbarian (unchained)',
    featureName: 'Rage Power',
    description:
      'At 2nd level and every 2 levels thereafter, an unchained barbarian gains a rage power. Some rage powers have prerequisite rage powers — those are enforced via the prerequisites[] field on each entry.',
    selectionMode: {
      type: 'every_n_class_levels',
      n: 2,
      startLevel: 2,
    },
    optionSource: 'collection',
    collectionName: 'ragepowers',
    source: 'pf1e-unchained',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
