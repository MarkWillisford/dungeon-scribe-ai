import { ClassChoiceDefinition } from '@/types/classChoices';

// 3.5e prestige class — campaign content. Source: Complete Divine.
// Requires both arcane and divine spellcasting.
// Class document must be authored as campaign content before this definition is useful.

export const dweomerkeeperDefinitions: ClassChoiceDefinition[] = [
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
];
