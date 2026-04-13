import { type ClassChoiceDefinition } from '@/types/classChoices';

export const samuraiDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'samurai-order',
    className: 'samurai',
    featureName: 'Order',
    description:
      'At 1st level, a samurai must pledge himself to a specific order. The order grants the samurai a number of bonuses, class skills, and special abilities.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'collection',
    collectionName: 'cavalierorders',
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'samurai-weapon-expertise',
    className: 'samurai',
    featureName: 'Weapon Expertise',
    description:
      'At 3rd level, a samurai selects one weapon from the following list. He can draw that weapon as a free action (as Quick Draw), gains a +2 bonus on critical confirmation rolls with it, and his samurai levels count as fighter levels for weapon-focused feats with it. This choice is permanent.',
    selectionMode: { type: 'at_class_levels', levels: [3] },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'samurai-weapon-expertise-options',
        name: '',
        options: [
          { id: 'katana', name: 'Katana', description: 'A single-edged, curved sword favored by samurai.' },
          { id: 'longbow', name: 'Longbow', description: 'A powerful ranged weapon requiring great strength.' },
          { id: 'naginata', name: 'Naginata', description: 'A pole weapon with a curved blade, granting reach.' },
          { id: 'wakizashi', name: 'Wakizashi', description: 'A short companion blade to the katana.' },
        ],
      },
    ],
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'samurai-bonus-feat',
    className: 'samurai',
    featureName: 'Bonus Feat',
    description:
      'At 6th level, and every six levels thereafter, a samurai gains a bonus feat selected from those listed as combat feats.',
    selectionMode: { type: 'at_class_levels', levels: [6, 12, 18] },
    optionSource: 'collection',
    collectionName: 'feats',
    collectionFilter: { isCombatFeat: true },
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
