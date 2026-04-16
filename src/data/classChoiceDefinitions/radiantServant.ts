import { ClassChoiceDefinition } from '@/types/classChoices';

// 3.5e prestige class — campaign content. Source: Complete Divine (Radiant Servant of Pelor).
// Modified from Pelor to Milani for our campaign.
// Class document must be authored as campaign content before this definition is useful.

export const radiantServantDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'radiant-servant-extra-domain',
    className: 'radiant servant',
    featureName: 'Extra Domain',
    description:
      "At 4th level, a Radiant Servant of Milani gains an extra domain from her deity's domain list. Filtered to the character's chosen deity (Milani).",
    selectionMode: {
      type: 'at_class_levels',
      levels: [4],
    },
    optionSource: 'collection',
    collectionName: 'domains',
    collectionFilter: { deityIds: '{chosen_deity}' },
    source: '3.5e',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'campaign',
    rev: 1,
  },
];
