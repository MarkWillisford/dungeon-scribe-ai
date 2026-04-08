import { ClassChoiceDefinition } from '@/types/classChoices';

export const rogueUnchainedDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'rogue-unchained-talent',
    className: 'rogue-unchained',
    featureName: 'Rogue Talent',
    description:
      'At 2nd level and every 2 levels thereafter, an unchained rogue gains a rogue talent. Advanced talents (marked talentTier: "advanced") are only available at rogue level 10 or higher.',
    selectionMode: {
      type: 'at_class_levels',
      levels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    },
    optionSource: 'collection',
    collectionName: 'roguetalents',
    collectionFilter: {},
    source: 'pf1e-unchained',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'rogue-unchained-finesse-training',
    className: 'rogue-unchained',
    featureName: 'Finesse Training',
    description:
      'At 3rd level (and again at 11th and 19th), the unchained rogue selects one weapon usable with Weapon Finesse. She adds her Dexterity modifier to damage rolls (instead of Strength) with that weapon. This choice is permanent.',
    selectionMode: {
      type: 'at_class_levels',
      levels: [3, 11, 19],
    },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'finesse-weapons',
        name: '',
        options: [
          { id: 'dagger', name: 'Dagger', description: 'Light weapon — 1d4 piercing or slashing, 19-20/×2.' },
          { id: 'kukri', name: 'Kukri', description: 'Light weapon — 1d4 slashing, 18-20/×2.' },
          { id: 'punching-dagger', name: 'Punching Dagger', description: 'Light weapon — 1d4 piercing, ×3.' },
          { id: 'rapier', name: 'Rapier', description: 'One-handed weapon — 1d6 piercing, 18-20/×2.' },
          { id: 'sap', name: 'Sap', description: 'Light weapon — 1d6 nonlethal bludgeoning, ×2.' },
          { id: 'short-sword', name: 'Short Sword', description: 'Light weapon — 1d6 piercing, 19-20/×2.' },
          { id: 'sickle', name: 'Sickle', description: 'Light weapon — 1d6 slashing, ×2.' },
          { id: 'starknife', name: 'Starknife', description: 'Light weapon — 1d4 piercing, ×3, can be thrown.' },
          { id: 'sword-cane', name: 'Sword Cane', description: 'One-handed weapon — 1d6 piercing, ×2, concealable.' },
          { id: 'whip', name: 'Whip', description: 'Exotic weapon — 1d3 nonlethal, ×2, 15-ft. reach, does not threaten.' },
          { id: 'kama', name: 'Kama', description: 'Light weapon — 1d6 slashing, ×2, monk weapon.' },
          { id: 'nunchaku', name: 'Nunchaku', description: 'Light weapon — 1d6 bludgeoning, ×2, monk weapon, disarm bonus.' },
        ],
      },
    ],
    source: 'pf1e-unchained',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
