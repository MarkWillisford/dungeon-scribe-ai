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
      'At 1st level and every odd level thereafter (1, 3, 5, 7, 9), a Dweomerkeeper chooses one arcane or divine spell she can cast. She may spontaneously convert any prepared spell of that type into the chosen spell, provided the converted spell is the same level or higher.',
    selectionMode: {
      type: 'at_class_levels',
      levels: [1, 3, 5, 7, 9],
    },
    optionSource: 'collection',
    collectionName: 'spells',
    // castingType: 'character_castable' — resolved at render time to all spell lists the
    // character has access to, capped by her actual prepared spell levels per pool.
    collectionFilter: { castingType: 'character_castable' },
    levelFilterTable: {
      1: { maxSpellLevel: 3 },
      3: { maxSpellLevel: 5 },
      5: { maxSpellLevel: 7 },
      7: { maxSpellLevel: 8 },
      9: { maxSpellLevel: 9 },
    },
    source: '3.5e',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'campaign',
    rev: 2,
  },
];
