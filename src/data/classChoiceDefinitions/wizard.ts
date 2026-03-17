import { ClassChoiceDefinition } from '@/types/classChoices';

const ARCANE_SCHOOLS = [
  { id: 'universalist', name: 'Universalist', description: 'No school specialization. The wizard gains Hand of the Apprentice and other universalist powers.' },
  { id: 'abjuration', name: 'Abjuration', description: 'Specializes in protective and warding magic.' },
  { id: 'conjuration', name: 'Conjuration', description: 'Specializes in summoning creatures and objects.' },
  { id: 'divination', name: 'Divination', description: 'Specializes in gaining knowledge and foresight.' },
  { id: 'enchantment', name: 'Enchantment', description: 'Specializes in affecting the minds of others.' },
  { id: 'evocation', name: 'Evocation', description: 'Specializes in energy and destructive magic.' },
  { id: 'illusion', name: 'Illusion', description: 'Specializes in deceptive and sensory magic.' },
  { id: 'necromancy', name: 'Necromancy', description: 'Specializes in death, undead, and life force magic.' },
  { id: 'transmutation', name: 'Transmutation', description: 'Specializes in changing and transforming matter and energy.' },
];

// Opposition schools are the same list minus Universalist
const OPPOSITION_SCHOOL_OPTIONS = ARCANE_SCHOOLS.filter((s) => s.id !== 'universalist').map(
  (s) => ({
    id: `oppose-${s.id}`,
    name: s.name,
    description: `Oppose ${s.name}: the wizard treats all ${s.name} spells as one level higher when determining slots required, and cannot prepare spells from this school.`,
  })
);

export const wizardDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'wizard-arcane-school',
    className: 'wizard',
    featureName: 'Arcane School',
    description:
      'At 1st level, a wizard selects an arcane school. Specialists gain school powers and an extra spell slot per level for that school. Universalists gain no opposition schools.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'arcane-schools',
        name: '',
        options: ARCANE_SCHOOLS,
      },
    ],
    source: 'pf1e-core',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'wizard-opposition-schools',
    className: 'wizard',
    featureName: 'Opposition Schools',
    description:
      'A specialist wizard (not Universalist) must choose two opposition schools. Preparing spells from these schools costs an extra spell slot of the same level.',
    selectionMode: {
      type: 'multi_at_creation',
      count: 2,
    },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'opposition-schools',
        name: '',
        options: OPPOSITION_SCHOOL_OPTIONS,
      },
    ],
    source: 'pf1e-core',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'wizard-arcane-bond',
    className: 'wizard',
    featureName: 'Arcane Bond',
    description:
      'At 1st level, wizards form a powerful bond with an object or a creature. A bonded object can be used once per day to cast any spell the wizard knows. A familiar grants skill bonuses and special abilities.',
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'bond-type',
        name: '',
        options: [
          {
            id: 'bonded_object',
            name: 'Bonded Object',
            description:
              'The wizard bonds with a specific object (amulet, ring, staff, wand, or weapon). Once per day, he can cast any one spell from his spellbook without preparing it by channeling through the object.',
          },
          {
            id: 'familiar',
            name: 'Familiar',
            description:
              'The wizard gains a familiar. The familiar type is selected separately. Familiars grant their master special benefits and can deliver touch spells.',
          },
        ],
      },
    ],
    source: 'pf1e-core',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'wizard-bonus-feat',
    className: 'wizard',
    featureName: 'Bonus Feat',
    description:
      'At 5th level and every 5 levels thereafter, a wizard gains a bonus feat from the list of metamagic, item creation, or Spell Mastery feats.',
    selectionMode: {
      type: 'at_class_levels',
      levels: [5, 10, 15, 20],
    },
    optionSource: 'collection',
    collectionName: 'feats',
    collectionFilter: { wizardBonusFeat: true }, // isMetamagic OR isItemCreation OR name === 'Spell Mastery'
    source: 'pf1e-core',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
