import { ClassChoiceDefinition } from '@/types/classChoices';

export const arcanistDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'arcanist-exploit',
    className: 'arcanist',
    featureName: 'Arcanist Exploit',
    description:
      'At 1st level and every 2 levels thereafter, an arcanist learns a new exploit. Greater exploits are available at level 11+.',
    selectionMode: { type: 'at_class_levels', levels: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19] },
    optionSource: 'collection',
    collectionName: 'arcanistexploits',
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
