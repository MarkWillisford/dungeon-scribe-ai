import { ClassChoiceDefinition } from '@/types/classChoices';

export const clericDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'cleric-domains',
    className: 'cleric',
    featureName: 'Domains',
    description:
      'A cleric chooses two domains from among those belonging to her deity. Domain picks are filtered to the deity selected in the Identity section.',
    selectionMode: {
      type: 'multi_at_creation',
      count: 2,
    },
    optionSource: 'collection',
    collectionName: 'domains',
    // Runtime token — resolved from character.info.deity at selection time
    collectionFilter: { deityIds: '{chosen_deity}' },
    source: 'pf1e-core',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
