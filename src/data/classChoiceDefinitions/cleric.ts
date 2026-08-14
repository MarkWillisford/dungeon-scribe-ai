import { ClassChoiceDefinition } from '@/types/classChoices';

export const clericDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'cleric-deity',
    className: 'cleric',
    featureName: 'Deity',
    description:
      "A cleric must choose a deity to worship. The chosen deity determines which domains are available and defines the cleric's religious identity.",
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'collection',
    collectionName: 'deities',
    source: 'pf1e-core',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
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
