import { type ClassChoiceDefinition, type ClassChoiceOptionGroup } from '@/types/classChoices';

const VERSATILE_PERFORMANCE_OPTIONS: ClassChoiceOptionGroup = {
  id: 'perform-types',
  name: '',
  options: [
    {
      id: 'act',
      name: 'Act',
      description: 'Use Perform (act) in place of Bluff and Disguise.',
    },
    {
      id: 'comedy',
      name: 'Comedy',
      description: 'Use Perform (comedy) in place of Bluff and Intimidate.',
    },
    {
      id: 'dance',
      name: 'Dance',
      description: 'Use Perform (dance) in place of Acrobatics and Fly.',
    },
    {
      id: 'keyboard',
      name: 'Keyboard Instruments',
      description: 'Use Perform (keyboard instruments) in place of Diplomacy and Intimidate.',
    },
    {
      id: 'oratory',
      name: 'Oratory',
      description: 'Use Perform (oratory) in place of Diplomacy and Sense Motive.',
    },
    {
      id: 'percussion',
      name: 'Percussion',
      description: 'Use Perform (percussion) in place of Handle Animal and Intimidate.',
    },
    {
      id: 'sing',
      name: 'Sing',
      description: 'Use Perform (sing) in place of Bluff and Sense Motive.',
    },
    {
      id: 'string',
      name: 'String Instruments',
      description: 'Use Perform (string instruments) in place of Bluff and Diplomacy.',
    },
    {
      id: 'wind',
      name: 'Wind Instruments',
      description: 'Use Perform (wind instruments) in place of Diplomacy and Handle Animal.',
    },
  ],
};

export const bardDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'bard-versatile-performance',
    className: 'bard',
    featureName: 'Versatile Performance',
    description:
      'Choose a type of Perform skill to substitute for two related skills for all purposes, including checks made to qualify for feats.',
    selectionMode: { type: 'at_class_levels', levels: [2, 6, 10, 14, 18] },
    optionSource: 'inline',
    optionGroups: [VERSATILE_PERFORMANCE_OPTIONS],
    source: 'pf1e-core',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
