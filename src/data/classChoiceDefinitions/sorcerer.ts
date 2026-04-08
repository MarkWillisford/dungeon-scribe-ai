import { ClassChoiceDefinition } from '@/types/classChoices';

export const sorcererDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'sorcerer-bloodline',
    className: 'sorcerer',
    featureName: 'Bloodline',
    description:
      'At 1st level, a sorcerer chooses a bloodline that shapes her magical abilities, granting bonus spells, bonus feats, an additional class skill, and bloodline powers.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'collection',
    collectionName: 'bloodlines',
    collectionFilter: { classIds: 'sorcerer' },
    source: 'pf1e-core',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
