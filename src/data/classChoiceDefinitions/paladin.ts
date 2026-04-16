import { ClassChoiceDefinition } from '@/types/classChoices';

// Paladin mercies grouped by minimum class level at which they become available.
// Core mercies from CRB + APG. All are inline — no collection query needed.
export const MERCY_OPTIONS = [
  // Available from level 3
  { id: 'mercy-shaken', name: 'Shaken', description: 'The shaken condition is removed.' },
  { id: 'mercy-sickened', name: 'Sickened', description: 'The sickened condition is removed.' },
  { id: 'mercy-fatigued', name: 'Fatigued', description: 'The fatigued condition is removed.' },
  // Available from level 6 (min class level 6 on the group)
  { id: 'mercy-dazed', name: 'Dazed', description: 'The dazed condition is removed.' },
  {
    id: 'mercy-diseased',
    name: 'Diseased',
    description: "The paladin's lay on hands ability also acts as remove disease.",
  },
  {
    id: 'mercy-staggered',
    name: 'Staggered',
    description:
      'The staggered condition is removed, as long as it is not caused by a permanent condition.',
  },
  // Available from level 9
  {
    id: 'mercy-cursed',
    name: 'Cursed',
    description: "The paladin's lay on hands ability also acts as remove curse.",
  },
  {
    id: 'mercy-exhausted',
    name: 'Exhausted',
    description: 'The exhausted condition is removed (requires the fatigued mercy).',
  },
  {
    id: 'mercy-frightened',
    name: 'Frightened',
    description: 'The frightened condition is removed (requires the shaken mercy).',
  },
  {
    id: 'mercy-injured',
    name: 'Injured',
    description: 'Ability damage is removed (1 point per use).',
  },
  {
    id: 'mercy-nauseated',
    name: 'Nauseated',
    description: 'The nauseated condition is removed (requires the sickened mercy).',
  },
  {
    id: 'mercy-poisoned',
    name: 'Poisoned',
    description: "The paladin's lay on hands ability also acts as neutralize poison.",
  },
  // Available from level 12
  {
    id: 'mercy-blinded',
    name: 'Blinded',
    description: 'The blinded condition is removed (requires the dazed mercy).',
  },
  {
    id: 'mercy-deafened',
    name: 'Deafened',
    description: 'The deafened condition is removed (requires the shaken mercy).',
  },
  { id: 'mercy-paralyzed', name: 'Paralyzed', description: 'The paralyzed condition is removed.' },
  {
    id: 'mercy-stunned',
    name: 'Stunned',
    description: 'The stunned condition is removed (requires the dazed mercy).',
  },
];

export const paladinDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'paladin-mercy',
    className: 'paladin',
    featureName: 'Mercy',
    description:
      "At 3rd level and every 3 levels thereafter, a paladin can select one mercy. Each mercy adds an effect to the paladin's lay on hands ability.",
    selectionMode: {
      type: 'at_class_levels',
      levels: [3, 6, 9, 12, 15, 18],
    },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'mercies-3',
        name: 'Level 3+ Mercies',
        options: MERCY_OPTIONS.slice(0, 3),
      },
      {
        id: 'mercies-6',
        name: 'Level 6+ Mercies',
        minClassLevel: 6,
        options: MERCY_OPTIONS.slice(3, 6),
      },
      {
        id: 'mercies-9',
        name: 'Level 9+ Mercies',
        minClassLevel: 9,
        options: MERCY_OPTIONS.slice(6, 12),
      },
      {
        id: 'mercies-12',
        name: 'Level 12+ Mercies',
        minClassLevel: 12,
        options: MERCY_OPTIONS.slice(12),
      },
    ],
    source: 'pf1e-core',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'paladin-divine-bond',
    className: 'paladin',
    featureName: 'Divine Bond',
    description:
      'At 5th level, a paladin forms a divine bond. She may bond with her weapon or with a mount. Weapon enhancement choices are per-use selections at the table — not stored here.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'bond-type',
        name: '',
        options: [
          {
            id: 'weapon',
            name: 'Weapon',
            description:
              'The paladin can enhance her weapon with holy energy. She may add enhancement bonuses or special abilities from the divine bond list for a number of minutes per day equal to her paladin level.',
          },
          {
            id: 'mount',
            name: 'Mount',
            description:
              'The paladin gains the service of a special mount (a heavy horse for Medium paladins, a pony for Small paladins). The mount advances in power as the paladin levels.',
          },
        ],
      },
    ],
    source: 'pf1e-core',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
