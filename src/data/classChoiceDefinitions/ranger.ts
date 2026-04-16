import { ClassChoiceDefinition } from '@/types/classChoices';

// Favored enemy types. Humanoid and Outsider carry subtypePrompt (Phase A field).
// subtypePrompt is used by the UI to ask the player to specify a subtype.
const FAVORED_ENEMY_OPTIONS = [
  { id: 'aberration', name: 'Aberration', description: 'Aberrations such as aboleths, beholders, and oozes.' },
  { id: 'animal', name: 'Animal', description: 'Natural animals.' },
  { id: 'construct', name: 'Construct', description: 'Constructs including golems and animated objects.' },
  { id: 'dragon', name: 'Dragon', description: 'True dragons and related creatures.' },
  { id: 'fey', name: 'Fey', description: 'Fey creatures such as dryads, nymphs, and pixies.' },
  {
    id: 'humanoid',
    name: 'Humanoid',
    description: 'Humanoids of a chosen subtype (dwarf, elf, goblinoid, human, etc.).',
    subtypePrompt: {
      label: 'Choose a humanoid subtype',
      options: [
        'aquatic', 'dwarf', 'elf', 'giant', 'gnoll', 'gnome',
        'goblinoid', 'halfling', 'human', 'orc', 'reptilian',
      ],
    },
  },
  { id: 'magical-beast', name: 'Magical Beast', description: 'Magical beasts such as basilisks and owlbears.' },
  { id: 'monstrous-humanoid', name: 'Monstrous Humanoid', description: 'Monstrous humanoids such as harpies and medusas.' },
  { id: 'ooze', name: 'Ooze', description: 'Oozes such as black puddings and gelatinous cubes.' },
  {
    id: 'outsider',
    name: 'Outsider',
    description: 'Outsiders of a chosen subtype (air, chaotic, devil, demon, etc.).',
    subtypePrompt: {
      label: 'Choose an outsider subtype',
      options: [
        'air', 'chaotic', 'daemon', 'demon', 'devil', 'earth',
        'elemental', 'evil', 'extraplanar', 'fire', 'good',
        'inevitable', 'lawful', 'native', 'protean', 'water',
      ],
    },
  },
  { id: 'plant', name: 'Plant', description: 'Plant creatures such as shambling mounds and treants.' },
  { id: 'undead', name: 'Undead', description: 'Undead creatures of all kinds.' },
  { id: 'vermin', name: 'Vermin', description: 'Vermin such as centipedes, scorpions, and spiders.' },
];

const FAVORED_TERRAIN_OPTIONS = [
  { id: 'cold', name: 'Cold', description: 'Cold environments including arctic tundra and glaciers.' },
  { id: 'desert', name: 'Desert', description: 'Desert environments including sandy and rocky deserts.' },
  { id: 'forest', name: 'Forest', description: 'Forest and woodland environments.' },
  { id: 'jungle', name: 'Jungle', description: 'Tropical jungle environments.' },
  { id: 'mountain', name: 'Mountain', description: 'Mountain and highlands environments.' },
  { id: 'plains', name: 'Plains', description: 'Open plains and grasslands.' },
  { id: 'planes', name: 'Planes (choose type)', description: 'A specific plane of existence.' },
  { id: 'swamp', name: 'Swamp', description: 'Swamp and bog environments.' },
  { id: 'underground', name: 'Underground', description: 'Underground environments including caves and dungeons.' },
  { id: 'urban', name: 'Urban', description: 'Cities, towns, and other urban settings.' },
  { id: 'water', name: 'Water', description: 'Aquatic environments including oceans, rivers, and lakes.' },
];

const COMBAT_STYLE_OPTIONS = [
  {
    id: 'archery',
    name: 'Archery',
    description: 'Bonus feats from the archery combat style list (Point-Blank Shot, Precise Shot, etc.).',
  },
  {
    id: 'crossbow',
    name: 'Crossbow',
    description: 'Bonus feats from the crossbow combat style list.',
  },
  {
    id: 'mounted-combat',
    name: 'Mounted Combat',
    description: 'Bonus feats from the mounted combat style list.',
  },
  {
    id: 'natural-weapon',
    name: 'Natural Weapon',
    description: 'Bonus feats from the natural weapon combat style list.',
  },
  {
    id: 'two-handed-weapon',
    name: 'Two-Handed Weapon',
    description: 'Bonus feats from the two-handed weapon combat style list (Power Attack, Cleave, etc.).',
  },
  {
    id: 'two-weapon-combat',
    name: 'Two-Weapon Combat',
    description: 'Bonus feats from the two-weapon combat style list (Two-Weapon Fighting, etc.).',
  },
  {
    id: 'weapon-and-shield',
    name: 'Weapon and Shield',
    description: 'Bonus feats from the weapon and shield combat style list.',
  },
];

export const rangerDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'ranger-favored-enemy',
    className: 'ranger',
    featureName: 'Favored Enemy',
    description:
      'At 1st level and every 5 levels thereafter, a ranger selects a favored enemy type. The same type may be selected again for a +2 stacking bonus. Humanoid and Outsider selections require choosing a subtype.',
    selectionMode: {
      type: 'at_class_levels',
      levels: [1, 5, 10, 15, 20],
      canRepeat: true,
    },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'enemy-types',
        name: '',
        options: FAVORED_ENEMY_OPTIONS,
      },
    ],
    source: 'pf1e-core',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'ranger-combat-style',
    className: 'ranger',
    featureName: 'Combat Style',
    description:
      'At 2nd level, a ranger selects a combat style. This determines which bonus feat list he draws from at levels 2, 6, 10, 14, and 18.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'combat-styles',
        name: '',
        options: COMBAT_STYLE_OPTIONS,
      },
    ],
    source: 'pf1e-core',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'ranger-favored-terrain',
    className: 'ranger',
    featureName: 'Favored Terrain',
    description:
      'At 3rd level and every 5 levels thereafter, a ranger selects a type of terrain. He gains bonuses on a range of skill checks and initiative while in that terrain.',
    selectionMode: {
      type: 'at_class_levels',
      levels: [3, 8, 13, 18],
    },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'terrain-types',
        name: '',
        options: FAVORED_TERRAIN_OPTIONS,
      },
    ],
    source: 'pf1e-core',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'ranger-hunters-bond',
    className: 'ranger',
    featureName: "Hunter's Bond",
    description:
      "At 4th level, a ranger forms a bond with his hunting companions or with an animal. Selecting 'animal_companion' launches the companion builder.",
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'bond-type',
        name: '',
        options: [
          {
            id: 'animal_companion',
            name: 'Animal Companion',
            description:
              'The ranger gains an animal companion as a druid of his ranger level – 3. The companion choice is made separately in the companion builder.',
          },
          {
            id: 'bonds_with_companions',
            name: 'Bond with Companions',
            description:
              "The ranger's bond is with his allies. Once per day he may grant half his favored enemy bonus to all allies within 30 feet.",
          },
        ],
      },
    ],
    source: 'pf1e-core',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
