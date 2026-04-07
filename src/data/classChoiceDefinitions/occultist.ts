import { ClassChoiceDefinition } from '@/types/classChoices';

const IMPLEMENT_SCHOOL_OPTIONS = [
  {
    id: 'abjuration',
    name: 'Abjuration',
    description:
      'Implements: Belt, Brooch, Cloak, Holy Symbol, Ring. Resonant power: Warding Talisman. Base focus power: Mind Barrier.',
  },
  {
    id: 'conjuration',
    name: 'Conjuration',
    description:
      'Implements: Bag, Bottle, Pouch, Purse, Sack. Resonant power: Casting Focus. Base focus power: Servitor.',
  },
  {
    id: 'divination',
    name: 'Divination',
    description:
      'Implements: Crystal Ball, Goggles, Lens, Mirror. Resonant power: Third Eye. Base focus power: Sudden Insight.',
  },
  {
    id: 'enchantment',
    name: 'Enchantment',
    description:
      'Implements: Crown, Hat, Headband, Horn, Mask, Veil. Resonant power: Charmed Life. Base focus power: Cloud Mind.',
  },
  {
    id: 'evocation',
    name: 'Evocation',
    description:
      'Implements: Rod, Staff, Wand, Weapons. Resonant power: Intense Focus. Base focus power: Energy Ray.',
  },
  {
    id: 'illusion',
    name: 'Illusion',
    description:
      'Implements: Fan, Musical Instrument, Painting, Tattoo. Resonant power: Distortion. Base focus power: Minor Figment.',
  },
  {
    id: 'necromancy',
    name: 'Necromancy',
    description:
      'Implements: Bone, Candle, Skull. Resonant power: Necromantic Focus. Base focus power: Mind Fear.',
  },
  {
    id: 'transmutation',
    name: 'Transmutation',
    description:
      'Implements: Belt, Boots, Gloves, Tome. Resonant power: Physical Enhancement. Base focus power: Legacy Weapon.',
  },
];

export const occultistDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'occultist-implement-school-initial',
    className: 'occultist',
    featureName: 'Implement School',
    description:
      'An occultist learns to use two implement schools at 1st level. Each school grants a resonant power (passive), a base focus power (automatic), and access to school spells. The occultist must carry a physical implement for each school.',
    selectionMode: { type: 'multi_at_creation', count: 2 },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'occultist-implement-schools',
        name: '',
        options: IMPLEMENT_SCHOOL_OPTIONS,
      },
    ],
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'occultist-implement-school',
    className: 'occultist',
    featureName: 'Implement School',
    description:
      'The occultist gains an additional implement school at 2nd, 6th, 10th, 14th, and 18th levels (7 total). Each new school grants a resonant power and base focus power.',
    selectionMode: { type: 'at_class_levels', levels: [2, 6, 10, 14, 18] },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'occultist-implement-schools',
        name: '',
        options: IMPLEMENT_SCHOOL_OPTIONS,
      },
    ],
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'occultist-focus-power',
    className: 'occultist',
    featureName: 'Focus Power',
    description:
      'At 3rd level and every 2 levels thereafter, the occultist gains an additional focus power selected from any implement school for which he has an implement. Base powers are automatically granted and need not be selected here.',
    selectionMode: { type: 'at_class_levels', levels: [3, 5, 7, 9, 11, 13, 15, 17, 19] },
    optionSource: 'collection',
    collectionName: 'occultistfocuspowers',
    source: 'pf1e-oa',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
