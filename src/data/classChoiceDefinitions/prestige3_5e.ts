import { ClassChoiceDefinition } from '@/types/classChoices';

// 3.5e prestige class choice definitions — campaign content (visibility: 'campaign').
// These classes must be authored as custom campaign content before these definitions
// are useful. Source: Complete Divine (Dweomerkeeper, Radiant Servant of Pelor).
// Modified from Pelor to Milani for our campaign.

export const prestige3_5eDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'dweomerkeeper-mantle-of-spells',
    className: 'dweomerkeeper',
    featureName: 'Mantle of Spells',
    description:
      'At each odd level (1, 3, 5, 7, 9), a Dweomerkeeper selects one divine spell she can spontaneously convert any prepared divine spell into. The maximum spell level available scales with class level.',
    selectionMode: {
      type: 'at_class_levels',
      levels: [1, 3, 5, 7, 9],
    },
    optionSource: 'collection',
    collectionName: 'spells',
    // Runtime filter: spells castable by this character + max level from levelFilterTable
    collectionFilter: { castableByCharacter: true },
    levelFilterTable: {
      1: { maxSpellLevel: 3 },
      3: { maxSpellLevel: 5 },
      5: { maxSpellLevel: 7 },
      7: { maxSpellLevel: 8 },
      9: { maxSpellLevel: 9 },
    },
    source: '3.5e',
    isOfficial: false,
    visibility: 'campaign',
    rev: 1,
  },
  {
    id: 'radiant-servant-extra-domain',
    className: 'radiant-servant',
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
    visibility: 'campaign',
    rev: 1,
  },
];
