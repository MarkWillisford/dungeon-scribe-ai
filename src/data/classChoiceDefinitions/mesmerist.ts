import { ClassChoiceDefinition } from '@/types/classChoices';

export const mesmeristDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'mesmerist-trick',
    className: 'mesmerist',
    featureName: 'Mesmerist Trick',
    description:
      'A mesmerist can implant hypnotic suggestions to help allies or hinder foes. He gains a mesmerist trick at 1st level and every 2 levels thereafter. Standard tricks are available from 1st level; masterful tricks require mesmerist level 5+.',
    selectionMode: {
      type: 'at_class_levels',
      levels: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
    },
    optionSource: 'collection',
    collectionName: 'mesmeristtricks',
    source: 'pf1e-oa',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
