import { type ClassChoiceDefinition } from '@/types/classChoices';

const FIREARM_TYPES: { id: string; name: string; description: string; category: string }[] = [
  // One-Handed Firearms
  { id: 'pistol', name: 'Pistol', description: 'Standard one-handed firearm.', category: 'One-Handed' },
  { id: 'double-barreled-pistol', name: 'Double-Barreled Pistol', description: 'Fires two shots before reloading.', category: 'One-Handed' },
  { id: 'revolver', name: 'Revolver', description: 'Holds multiple shots in a rotating cylinder.', category: 'One-Handed' },
  { id: 'dragon-pistol', name: 'Dragon Pistol', description: 'Short-range firearm that fires a spray of pellets.', category: 'One-Handed' },
  { id: 'pepperbox', name: 'Pepperbox', description: 'Multi-barreled pistol that rotates between shots.', category: 'One-Handed' },
  { id: 'coat-pistol', name: 'Coat Pistol', description: 'Compact concealed pistol.', category: 'One-Handed' },
  { id: 'dagger-pistol', name: 'Dagger Pistol', description: 'Combined dagger and single-shot pistol.', category: 'One-Handed' },
  { id: 'buckler-gun', name: 'Buckler Gun', description: 'Shield with a built-in single-shot pistol.', category: 'One-Handed' },
  { id: 'dwarven-sliding-pistol', name: 'Dwarven Sliding Pistol', description: 'Dwarven-crafted repeating pistol.', category: 'One-Handed' },
  // Two-Handed Firearms
  { id: 'musket', name: 'Musket', description: 'Standard two-handed firearm.', category: 'Two-Handed' },
  { id: 'double-barreled-musket', name: 'Double-Barreled Musket', description: 'Fires two shots before reloading.', category: 'Two-Handed' },
  { id: 'blunderbuss', name: 'Blunderbuss', description: 'Short-range firearm that fires a cone of pellets.', category: 'Two-Handed' },
  { id: 'rifle', name: 'Rifle', description: 'Long-range firearm with a rifled barrel.', category: 'Two-Handed' },
  { id: 'shotgun', name: 'Shotgun', description: 'Fires a spray of pellets in a cone.', category: 'Two-Handed' },
  { id: 'axe-musket', name: 'Axe Musket', description: 'Combined axe and single-shot musket.', category: 'Two-Handed' },
  { id: 'warhammer-musket', name: 'Musket (Warhammer)', description: 'Combined warhammer and single-shot musket.', category: 'Two-Handed' },
  { id: 'fire-lance', name: 'Fire Lance', description: 'Pole weapon with an attached firearm.', category: 'Two-Handed' },
];

export const gunslingerDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'gunslinger-gun-training',
    className: 'gunslinger',
    featureName: 'Gun Training',
    description:
      'Starting at 5th level, a gunslinger selects one type of firearm. She adds her Dexterity modifier to damage rolls when firing that type and reduces misfire value increases by 2. She selects an additional type at 9th, 13th, and 17th level.',
    selectionMode: { type: 'at_class_levels', levels: [5, 9, 13, 17] },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'one-handed-firearms',
        name: 'One-Handed Firearms',
        options: FIREARM_TYPES.filter((f) => f.category === 'One-Handed').map((f) => ({
          id: f.id,
          name: f.name,
          description: f.description,
        })),
      },
      {
        id: 'two-handed-firearms',
        name: 'Two-Handed Firearms',
        options: FIREARM_TYPES.filter((f) => f.category === 'Two-Handed').map((f) => ({
          id: f.id,
          name: f.name,
          description: f.description,
        })),
      },
    ],
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'gunslinger-bonus-feat',
    className: 'gunslinger',
    featureName: 'Bonus Feat',
    description:
      'At 4th level and every 4 levels thereafter, a gunslinger gains a bonus combat or grit feat.',
    selectionMode: { type: 'at_class_levels', levels: [4, 8, 12, 16, 20] },
    optionSource: 'collection',
    collectionName: 'feats',
    collectionFilter: { featTypes: ['combat', 'grit'] },
    source: 'pf1e-uc',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
