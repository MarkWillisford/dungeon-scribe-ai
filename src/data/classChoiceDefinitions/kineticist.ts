import { ClassChoiceDefinition } from '@/types/classChoices';

export const kineticistDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'kineticist-element',
    className: 'kineticist',
    featureName: 'Element',
    description:
      'At 1st level, a kineticist chooses one primary element (aether, air, earth, fire, or water). This element determines her simple blast, defense wild talent, and available wild talents.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'kineticist-element-core',
        name: 'Core Elements',
        options: [
          {
            id: 'aether',
            name: 'Aether',
            description:
              'The kineticist channels telekinetic force. Simple blast: telekinetic blast (physical). Defense: force ward.',
          },
          {
            id: 'air',
            name: 'Air',
            description:
              'The kineticist channels wind and electricity. Simple blast: air blast (physical) or electric blast (energy). Defense: shroud of water.',
          },
          {
            id: 'earth',
            name: 'Earth',
            description:
              'The kineticist channels stone and metal. Simple blast: earth blast (physical) or metal blast (physical). Defense: flesh of stone.',
          },
          {
            id: 'fire',
            name: 'Fire',
            description:
              'The kineticist channels flames. Simple blast: fire blast (energy). Defense: searing flesh.',
          },
          {
            id: 'water',
            name: 'Water',
            description:
              'The kineticist channels water and cold. Simple blast: water blast (physical) or cold blast (energy). Defense: shroud of water.',
          },
        ],
      },
      {
        id: 'kineticist-element-supplemental',
        name: 'Supplemental Elements',
        minClassLevel: 1,
        options: [
          {
            id: 'void',
            name: 'Void',
            description:
              'The kineticist channels the power of the Negative Plane. Simple blast: negative blast (energy). Defense: emptiness. Source: Psychic Anthology.',
          },
          {
            id: 'wood',
            name: 'Wood',
            description:
              'The kineticist channels the verdant power of nature. Simple blast: positive blast (energy). Defense: flesh of wood. Source: Occult Origins.',
          },
        ],
      },
    ],
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'kineticist-expanded-element',
    className: 'kineticist',
    featureName: 'Expanded Element',
    description:
      'At 7th and 15th level, the kineticist chooses a second (and third) element, gaining its basic utility wild talent and simple blast. She may also choose the same element again to gain a composite blast instead.',
    selectionMode: { type: 'at_class_levels', levels: [7, 15] },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'kineticist-expanded-element-core',
        name: 'Core Elements',
        options: [
          {
            id: 'aether',
            name: 'Aether',
            description: 'Gain the aether element\'s basic utility wild talent and simple blast, or a composite blast if aether is already known.',
          },
          {
            id: 'air',
            name: 'Air',
            description: 'Gain the air element\'s basic utility wild talent and simple blast, or a composite blast if air is already known.',
          },
          {
            id: 'earth',
            name: 'Earth',
            description: 'Gain the earth element\'s basic utility wild talent and simple blast, or a composite blast if earth is already known.',
          },
          {
            id: 'fire',
            name: 'Fire',
            description: 'Gain the fire element\'s basic utility wild talent and simple blast, or a composite blast if fire is already known.',
          },
          {
            id: 'water',
            name: 'Water',
            description: 'Gain the water element\'s basic utility wild talent and simple blast, or a composite blast if water is already known.',
          },
        ],
      },
      {
        id: 'kineticist-expanded-element-supplemental',
        name: 'Supplemental Elements',
        options: [
          {
            id: 'void',
            name: 'Void',
            description: 'Gain the void element\'s basic utility wild talent and simple blast, or a composite blast if void is already known.',
          },
          {
            id: 'wood',
            name: 'Wood',
            description: 'Gain the wood element\'s basic utility wild talent and simple blast, or a composite blast if wood is already known.',
          },
        ],
      },
    ],
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'kineticist-infusion',
    className: 'kineticist',
    featureName: 'Wild Talent (Infusion)',
    description:
      'At 1st level and every 2 levels thereafter, a kineticist gains an infusion wild talent. Form infusions change how a kinetic blast is delivered; substance infusions add effects to the blast.',
    selectionMode: { type: 'at_class_levels', levels: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19] },
    optionSource: 'collection',
    collectionName: 'wildtalents',
    collectionFilter: { talentType: 'infusion' },
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'kineticist-utility',
    className: 'kineticist',
    featureName: 'Wild Talent (Utility)',
    description:
      'At 2nd level and every 2 levels thereafter, a kineticist gains a utility wild talent — a spell-like ability not directly tied to dealing damage.',
    selectionMode: { type: 'at_class_levels', levels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] },
    optionSource: 'collection',
    collectionName: 'wildtalents',
    collectionFilter: { talentType: 'utility' },
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
