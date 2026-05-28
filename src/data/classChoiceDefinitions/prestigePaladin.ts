import { ClassChoiceDefinition } from '@/types/classChoices';
import { MERCY_OPTIONS } from './paladin';

// Custom 15-level prestige class — campaign content.
// Effective paladin level for mercy availability = class level – 1.
// So level 6+ mercies unlock at PP level 7, level 9+ at PP 10, level 12+ at PP 13.

const WEAPON_GROUP_OPTIONS = [
  {
    id: 'wg-axes',
    name: 'Axes',
    description: 'Battleaxe, greataxe, handaxe, orc double axe, throwing axe, waraxe (dwarven).',
  },
  {
    id: 'wg-blades-heavy',
    name: 'Blades, Heavy',
    description:
      'Bastard sword, elven curve blade, falchion, greatsword, longsword, scimitar, scythe, temple sword.',
  },
  {
    id: 'wg-blades-light',
    name: 'Blades, Light',
    description: 'Dagger, kama, kukri, rapier, short sword, sickle, starknife.',
  },
  {
    id: 'wg-bows',
    name: 'Bows',
    description: 'Composite longbow, composite shortbow, longbow, shortbow.',
  },
  {
    id: 'wg-close',
    name: 'Close',
    description:
      'Gauntlet, heavy shield, light shield, punching dagger, sap, spiked armor, spiked gauntlet, spiked shield, unarmed strike.',
  },
  {
    id: 'wg-crossbows',
    name: 'Crossbows',
    description:
      'Hand crossbow, heavy crossbow, light crossbow, heavy repeating crossbow, light repeating crossbow.',
  },
  {
    id: 'wg-double',
    name: 'Double',
    description:
      'Dire flail, dwarven urgrosh, gnome hooked hammer, orc double axe, quarterstaff, two-bladed sword.',
  },
  {
    id: 'wg-flails',
    name: 'Flails',
    description:
      'Chain, dire flail, flail, heavy flail, morningstar, nunchaku, spiked chain, whip.',
  },
  {
    id: 'wg-hammers',
    name: 'Hammers',
    description: 'Gnome hooked hammer, greatclub, heavy mace, light mace, light hammer, warhammer.',
  },
  {
    id: 'wg-monk',
    name: 'Monk',
    description: 'Kama, nunchaku, quarterstaff, sai, shuriken, siangham, unarmed strike.',
  },
  {
    id: 'wg-polearms',
    name: 'Polearms',
    description: 'Glaive, guisarme, halberd, lucerne hammer, ranseur.',
  },
  {
    id: 'wg-spears',
    name: 'Spears',
    description: 'Javelin, lance, longspear, shortspear, spear, trident.',
  },
  {
    id: 'wg-thrown',
    name: 'Thrown',
    description:
      'Dagger, dart, halfling sling staff, javelin, shortspear, shuriken, sling, spear, starknife, throwing axe, trident.',
  },
];

export const prestigePaladinDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'prestige-paladin-turn-or-channel',
    className: 'prestige paladin',
    featureName: 'Turn Undead / Channel Energy',
    description:
      'At 1st level choose one permanently: Turn Undead (class levels stack with all other classes that grant turning) or Channel Energy (gains channel positive energy as a cleric, treating class level + 3 as effective cleric level).',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'turn-or-channel',
        name: '',
        options: [
          {
            id: 'turn-undead',
            name: 'Turn Undead',
            description:
              'Class levels stack with all other classes that grant turn undead for the purpose of turning checks and related abilities.',
          },
          {
            id: 'channel-energy',
            name: 'Channel Energy',
            description:
              'Gains channel positive energy as a cleric. Uses class level + 3 as effective cleric level (Charisma-based DC and uses per day).',
            grantsFeature: {
              name: 'Channel Energy (PP)',
              description:
                'Gains channel positive energy as a cleric, treating class level + 3 as effective cleric level for dice and DC (Charisma-based). Uses per day: 3 + Charisma modifier.',
              level: 1,
            },
          },
        ],
      },
    ],
    source: '3.5e',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'campaign',
    rev: 1,
  },
  {
    id: 'prestige-paladin-divine-bond',
    className: 'prestige paladin',
    featureName: 'Divine Bond',
    description:
      'At 2nd level, the Prestige Paladin forms a divine bond. She may bond with her weapon or with a mount. Effective paladin level is 3 higher than actual class level for this ability.',
    selectionMode: { type: 'at_class_levels', levels: [2] },
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
              'The paladin can enhance her weapon with holy energy. Effective paladin level is class level + 3 for purposes of uses per day and available enhancement bonuses.',
          },
          {
            id: 'mount',
            name: 'Mount',
            description:
              'The paladin gains the service of a special mount. Effective paladin level is class level + 3 for mount advancement.',
          },
        ],
      },
    ],
    source: '3.5e',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'campaign',
    rev: 1,
  },
  {
    id: 'prestige-paladin-mercy',
    className: 'prestige paladin',
    featureName: 'Mercy',
    description:
      'At levels 3, 7, 12, and 15, the Prestige Paladin selects one mercy. Available mercies are gated by effective paladin level (class level – 1).',
    selectionMode: {
      type: 'at_class_levels',
      levels: [3, 7, 12, 15],
    },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'mercies-base',
        name: 'Available from level 3',
        options: MERCY_OPTIONS.slice(0, 3),
      },
      {
        id: 'mercies-6',
        name: 'Available from level 7 (eff. paladin level 6)',
        minClassLevel: 7,
        options: MERCY_OPTIONS.slice(3, 6),
      },
      {
        id: 'mercies-9',
        name: 'Available from level 10 (eff. paladin level 9)',
        minClassLevel: 10,
        options: MERCY_OPTIONS.slice(6, 12),
      },
      {
        id: 'mercies-12',
        name: 'Available from level 13 (eff. paladin level 12)',
        minClassLevel: 13,
        options: MERCY_OPTIONS.slice(12),
      },
    ],
    source: '3.5e',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'campaign',
    rev: 1,
  },
  {
    id: 'prestige-paladin-weapon-training',
    className: 'prestige paladin',
    featureName: 'Weapon Training',
    description:
      'At levels 8 and 13, the Prestige Paladin selects a weapon group. She gains a cumulative +1 attack and damage bonus with weapons in that group (+1 at 8th, +2 at 13th for the second group; bonuses for earlier groups increase by +1 each time a new group is chosen).',
    selectionMode: {
      type: 'at_class_levels',
      levels: [8, 13],
    },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'weapon-groups',
        name: 'Weapon Groups',
        options: WEAPON_GROUP_OPTIONS,
      },
    ],
    source: '3.5e',
    isOfficial: false,
    verificationStatus: 'needs_review' as const,
    visibility: 'campaign',
    rev: 1,
  },
];
