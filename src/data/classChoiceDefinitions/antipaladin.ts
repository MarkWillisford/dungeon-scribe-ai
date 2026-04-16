import { type ClassChoiceDefinition } from '@/types/classChoices';

export const antiPaladinDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'antipaladin-cruelty',
    className: 'antipaladin',
    featureName: 'Cruelty',
    description:
      "At 3rd level and every 3 levels thereafter, an antipaladin selects one cruelty. Each cruelty adds an effect to the antipaladin's touch of corruption. Higher-tier cruelties unlock at levels 6, 9, and 12.",
    selectionMode: { type: 'at_class_levels', levels: [3, 6, 9, 12, 15, 18] },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'cruelties-3',
        name: 'Level 3 Cruelties',
        options: [
          {
            id: 'cruelty-fatigued',
            name: 'Fatigued',
            description:
              'The target is fatigued. A fatigued target that is already fatigued becomes exhausted if the save fails.',
          },
          {
            id: 'cruelty-shaken',
            name: 'Shaken',
            description:
              'The target is shaken for 1 round per level of the antipaladin.',
          },
          {
            id: 'cruelty-sickened',
            name: 'Sickened',
            description:
              'The target is sickened for 1 round per level of the antipaladin.',
          },
        ],
      },
      {
        id: 'cruelties-6',
        name: 'Level 6 Cruelties',
        minClassLevel: 6,
        options: [
          {
            id: 'cruelty-dazed',
            name: 'Dazed',
            description:
              'The target is dazed for 1 round. A dazed target can take no actions but is not helpless.',
          },
          {
            id: 'cruelty-diseased',
            name: 'Diseased',
            description:
              'The target contracts a disease, as if the antipaladin had cast contagion, using his antipaladin level as the caster level.',
          },
          {
            id: 'cruelty-staggered',
            name: 'Staggered',
            description:
              'The target is staggered for 1 minute per level of the antipaladin.',
          },
        ],
      },
      {
        id: 'cruelties-9',
        name: 'Level 9 Cruelties',
        minClassLevel: 9,
        options: [
          {
            id: 'cruelty-cursed',
            name: 'Cursed',
            description:
              'The target is cursed, as if the antipaladin had cast bestow curse, using his antipaladin level as the caster level.',
          },
          {
            id: 'cruelty-exhausted',
            name: 'Exhausted',
            description:
              'The target is exhausted. The target must already be fatigued for this cruelty to apply.',
          },
          {
            id: 'cruelty-frightened',
            name: 'Frightened',
            description:
              'The target is frightened for 1 round per level of the antipaladin. The target must already be shaken for this cruelty to apply.',
          },
          {
            id: 'cruelty-nauseated',
            name: 'Nauseated',
            description:
              'The target is nauseated for 1 round per level of the antipaladin. The target must already be sickened for this cruelty to apply.',
          },
          {
            id: 'cruelty-poisoned',
            name: 'Poisoned',
            description:
              'The target is poisoned, as if the antipaladin had cast poison, using his antipaladin level as the caster level.',
          },
        ],
      },
      {
        id: 'cruelties-12',
        name: 'Level 12 Cruelties',
        minClassLevel: 12,
        options: [
          {
            id: 'cruelty-blinded',
            name: 'Blinded',
            description:
              'The target is blinded for 1 round per level of the antipaladin.',
          },
          {
            id: 'cruelty-deafened',
            name: 'Deafened',
            description:
              'The target is deafened for 1 round per level of the antipaladin.',
          },
          {
            id: 'cruelty-paralyzed',
            name: 'Paralyzed',
            description:
              'The target is paralyzed for 1 round.',
          },
          {
            id: 'cruelty-stunned',
            name: 'Stunned',
            description:
              'The target is stunned for 1 round.',
          },
        ],
      },
    ],
    source: 'pf1e-apg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
