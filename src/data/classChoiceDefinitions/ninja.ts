import { ClassChoiceDefinition } from '@/types/classChoices';

export const ninjaDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'ninja-trick',
    className: 'ninja',
    featureName: 'Ninja Trick',
    description:
      'Starting at 2nd level, a ninja gains one ninja trick. She gains an additional ninja trick for every 2 levels attained after 2nd. Master tricks are available at 10th level+.',
    selectionMode: { type: 'every_n_class_levels', n: 2, startLevel: 2 },
    optionSource: 'collection',
    collectionName: 'ninjatricks',
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
