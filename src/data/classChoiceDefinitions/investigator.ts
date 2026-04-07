import { ClassChoiceDefinition } from '@/types/classChoices';

export const investigatorDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'investigator-talent',
    className: 'investigator',
    featureName: 'Investigator Talent',
    description:
      'At 3rd level and every 2 levels thereafter, an investigator gains one investigator talent. Some talents have minimum level requirements noted in their description.',
    selectionMode: { type: 'at_class_levels', levels: [3, 5, 7, 9, 11, 13, 15, 17, 19] },
    optionSource: 'collection',
    collectionName: 'investigatortalents',
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
