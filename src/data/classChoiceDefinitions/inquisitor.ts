import { type ClassChoiceDefinition } from '@/types/classChoices';

// Inquisitors choose EITHER a domain OR an inquisition at 1st level — mutually exclusive.
// The system does not enforce this exclusivity; the player fills one and leaves the other empty.

export const inquisitorDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'inquisitor-deity',
    className: 'inquisitor',
    featureName: 'Deity',
    description:
      'An inquisitor must worship a deity. The chosen deity determines which domains and inquisitions are available to her.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'collection',
    collectionName: 'deities',
    source: 'pf1e-apg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisitor-domain',
    className: 'inquisitor',
    featureName: 'Domain',
    description:
      "Choose one domain from your deity's list. This is an alternative to an inquisition — fill one or the other, not both.",
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'collection',
    collectionName: 'domains',
    collectionFilter: { deityIds: '{chosen_deity}' },
    source: 'pf1e-core',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'inquisitor-inquisition',
    className: 'inquisitor',
    featureName: 'Inquisition',
    description:
      'Choose an inquisition instead of a domain. Inquisitions are inquisitor-specific alternatives to domains. Fill one or the other, not both.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'collection',
    collectionName: 'inquisitions',
    source: 'pf1e-apg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
