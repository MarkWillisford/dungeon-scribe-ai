import { ClassChoiceDefinition } from '@/types/classChoices';

export const shamanDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'shaman-spirit',
    className: 'shaman',
    featureName: 'Spirit',
    description:
      'A shaman forms a mystical bond with a spirit at 1st level, gaining access to that spirit\'s spells, spirit ability (usable 3 + Wis modifier times per day), spirit hexes, and at higher levels, greater and true spirit abilities. This choice is permanent.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'collection',
    collectionName: 'shamanspirits',
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'shaman-wandering-spirit',
    className: 'shaman',
    featureName: 'Wandering Spirit',
    description:
      'At 4th level, a shaman can forge a temporary bond with a second spirit each day after 8 hours of rest. She gains that spirit\'s spirit ability, its spirit hexes (without gaining the actual hexes), and can prepare one spell from its spirit spell list in place of a shaman spell. This choice may change each day.',
    selectionMode: { type: 'at_class_levels', levels: [4] },
    optionSource: 'collection',
    collectionName: 'shamanspirits',
    collectionFilter: { wanderingOnly: true },
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
