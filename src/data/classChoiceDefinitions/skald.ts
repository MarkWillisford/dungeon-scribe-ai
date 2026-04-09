import { type ClassChoiceDefinition, type ClassChoiceOptionGroup } from '@/types/classChoices';

const VERSATILE_PERFORMANCE_OPTIONS: ClassChoiceOptionGroup = {
  id: 'skald-perform-types',
  name: 'Versatile Performance',
  options: [
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

// AVP options become available at level 6; the skald selects one of these
// instead of a new Perform skill at levels 7, 12, and 17.
const ADVANCED_VERSATILE_PERFORMANCE_OPTIONS: ClassChoiceOptionGroup = {
  id: 'advanced-versatile-performance',
  name: 'Advanced Versatile Performance',
  minClassLevel: 6,
  options: [
    {
      id: 'expanded-versatility',
      name: 'Expanded Versatility',
      description:
        'Choose one Perform skill already selected with versatile performance. Add one of the following skills to its associated skill list: Bluff, Diplomacy, Disguise, Escape Artist, Handle Animal, Intimidate, Sense Motive, or Use Magic Device. Can be selected multiple times; no skill may be associated with the same Perform skill more than once.',
    },
    {
      id: 'martial-performance',
      name: 'Martial Performance',
      description:
        "Choose one weapon from a fighter weapon group associated with a Perform skill already selected with versatile performance. Gain proficiency with that weapon (or Weapon Focus if already proficient). The skald's effective fighter level equals 1/2 his skald level for qualifying for feats requiring weapons from those groups.",
    },
    {
      id: 'masterpiece',
      name: 'Masterpiece',
      description:
        "Gain a bardic masterpiece as if giving up a feat to learn it. Must meet the masterpiece's prerequisites, and it must list ranks in a Perform skill already selected with versatile performance as a prerequisite. Can be selected multiple times.",
    },
  ],
};

export const skaldDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'skald-versatile-performance',
    className: 'skald',
    featureName: 'Versatile Performance',
    description:
      'At 2nd level, choose one Skald Perform skill to substitute for two related skills. At 7th level and every 5 levels thereafter, select an additional Perform skill or an Advanced Versatile Performance option.',
    selectionMode: { type: 'at_class_levels', levels: [2, 7, 12, 17] },
    optionSource: 'inline',
    optionGroups: [VERSATILE_PERFORMANCE_OPTIONS, ADVANCED_VERSATILE_PERFORMANCE_OPTIONS],
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'skald-rage-power',
    className: 'skald',
    featureName: 'Rage Power',
    description:
      'At 3rd level and every 3 levels thereafter, a skald learns a rage power that affects him and any allies under the effect of his inspired rage. He may not select rage powers that require spending a standard action or rounds of rage to activate.',
    selectionMode: {
      type: 'every_n_class_levels',
      n: 3,
      startLevel: 3,
    },
    optionSource: 'collection',
    collectionName: 'ragepowers',
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
