import { ClassChoiceDefinition } from '@/types/classChoices';

export const witchDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'witch-hex',
    className: 'witch',
    featureName: 'Hex',
    description:
      'At 1st level, a witch gains one hex. She gains an additional hex at 2nd level and every 2 levels thereafter. She cannot select the same hex twice. Major hexes are available at 10th level+, grand hexes at 18th level+.',
    selectionMode: { type: 'at_class_levels', levels: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20] },
    optionSource: 'collection',
    collectionName: 'hexes',
    source: 'pf1e-apg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
