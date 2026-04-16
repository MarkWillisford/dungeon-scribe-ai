import { type ClassChoiceDefinition } from '@/types/classChoices';

export const hunterDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'hunter-precise-companion',
    className: 'hunter',
    featureName: 'Precise Companion',
    description:
      'At 2nd level, a hunter chooses either Precise Shot or Outflank as a bonus feat (prerequisites waived). If she chooses Outflank, her animal companion automatically gains the feat as well. This choice is permanent.',
    selectionMode: { type: 'at_class_levels', levels: [2] },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'precise-companion-options',
        name: '',
        options: [
          {
            id: 'precise-shot',
            name: 'Precise Shot',
            description:
              'You can shoot or throw ranged weapons at an opponent engaged in melee without taking the standard -4 penalty.',
          },
          {
            id: 'outflank',
            name: 'Outflank',
            description:
              'Whenever you and an ally who also has this feat are flanking the same creature, your flanking bonus on attack rolls increases to +4. Whenever you score a critical hit, your ally may make an attack of opportunity against the flanked creature.',
          },
        ],
      },
    ],
    source: 'pf1e-acg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'hunter-teamwork-feat',
    className: 'hunter',
    featureName: 'Teamwork Feat',
    description:
      'At 3rd level and every 3 levels thereafter, the hunter gains a bonus teamwork feat. She must meet the prerequisites for the feat. As a standard action, she can swap her most recent teamwork feat for another teamwork feat she qualifies for.',
    selectionMode: { type: 'at_class_levels', levels: [3, 6, 9, 12, 15, 18] },
    optionSource: 'collection',
    collectionName: 'feats',
    collectionFilter: { isTeamworkFeat: true },
    source: 'pf1e-acg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
