import { BonusType } from '@/types/base';
import type { TraitDefinition } from '@/types/traits';

export const ARG_TRAITS: TraitDefinition[] = [
  // ==================== DWARF RACE TRAITS ====================
  {
    id: 'glory_of_old',
    name: 'Glory of Old',
    description:
      'In your veins flows the blood of dwarven heroes from Tar Taargadth. You receive a +1 trait bonus on saving throws against spells, spell-like abilities, and poison.',
    shortDescription: '+1 trait bonus on saves vs spells, SLAs, and poison',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Dwarf',
    prerequisites: [{ type: 'race', raceName: 'Dwarf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Glory of Old',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against spells, spell-like abilities, and poison',
        },
      },
    ],
    tags: ['save', 'dwarf', 'spells', 'poison'],
  },
  {
    id: 'steel_skin',
    name: 'Steel Skin',
    description:
      'You are especially resistant to pain and physical torment. You gain a +1 trait bonus on Fortitude saves.',
    shortDescription: '+1 trait bonus on Fortitude saves',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Dwarf',
    prerequisites: [{ type: 'race', raceName: 'Dwarf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 1,
        source: 'Steel Skin',
      },
    ],
    tags: ['save', 'fortitude', 'dwarf'],
  },
  // ==================== ELF RACE TRAITS ====================
  {
    id: 'forlorn',
    name: 'Forlorn',
    description:
      'Having lived outside of traditional elven society for much or all of your life, you know the world can be cruel, dangerous, and unforgiving of the weak. You gain a +1 trait bonus on Fortitude saving throws.',
    shortDescription: '+1 trait bonus on Fortitude saves',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Elf',
    prerequisites: [{ type: 'race', raceName: 'Elf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 1,
        source: 'Forlorn',
      },
    ],
    tags: ['save', 'fortitude', 'elf'],
  },
  {
    id: 'elven_reflexes',
    name: 'Elven Reflexes',
    description:
      'One of your parents was a member of a wild elven tribe, and you learned how to be quick on your feet. You gain a +2 trait bonus on initiative checks.',
    shortDescription: '+2 trait bonus on initiative checks',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Half-Elf',
    prerequisites: [{ type: 'race', raceName: 'Half-Elf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 2,
        source: 'Elven Reflexes',
      },
    ],
    tags: ['initiative', 'half-elf'],
  },
  // ==================== GNOME RACE TRAITS ====================
  {
    id: 'animal_friend',
    name: 'Animal Friend',
    description:
      'You have always felt a strong bond with animals. You gain a +1 trait bonus on Handle Animal checks and Will saves made against effects that target animals (such as charm animal or dominate animal).',
    shortDescription: '+1 on Handle Animal; +1 Will vs spells targeting animals',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Gnome',
    prerequisites: [
      { type: 'race', raceName: 'Gnome' },
      { type: 'special', description: 'Charisma 13' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.handleAnimal',
        value: 1,
        source: 'Animal Friend',
      },
    ],
    tags: ['handle animal', 'gnome', 'animals'],
  },
  // ==================== HALFLING RACE TRAITS ====================
  {
    id: 'helpful_halfling',
    name: 'Helpful',
    description:
      'You always know the right thing to do to help others. When you successfully perform an aid another action, you grant your ally a +4 bonus instead of the normal +2.',
    shortDescription: 'Aid another grants +4 instead of +2',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Halfling',
    prerequisites: [{ type: 'race', raceName: 'Halfling' }],
    effects: [],
    tags: ['aid another', 'halfling', 'teamwork'],
  },
  {
    id: 'well_informed',
    name: 'Well-Informed',
    description:
      'You make it a point to know everyone and to be connected to everything around you. You gain a +1 trait bonus on Knowledge (local) checks and Diplomacy checks to gather information, and one of these skills is always a class skill for you.',
    shortDescription:
      '+1 on Knowledge (local) and Diplomacy to gather info; one becomes class skill',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Halfling',
    prerequisites: [{ type: 'race', raceName: 'Halfling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeLocal',
        value: 1,
        source: 'Well-Informed',
      },
    ],
    tags: ['knowledge', 'local', 'diplomacy', 'halfling', 'class skill'],
  },
  // ==================== HALF-ORC RACE TRAITS ====================
  {
    id: 'tusked',
    name: 'Tusked',
    description:
      'Huge tusks jut from your jaw, and you receive a bite attack (1d4 damage for Medium characters). If used as part of a full-attack action, the bite attack is made at your full base attack bonus -5.',
    shortDescription: 'Gain a 1d4 bite attack',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Half-Orc',
    prerequisites: [{ type: 'race', raceName: 'Half-Orc' }],
    effects: [],
    tags: ['natural attack', 'bite', 'half-orc'],
  },
  {
    id: 'brute',
    name: 'Brute',
    description:
      'You have worked for thugs and criminals since childhood. You gain a +1 trait bonus on Intimidate checks, and Intimidate is always a class skill for you.',
    shortDescription: '+1 on Intimidate; Intimidate is a class skill',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Half-Orc',
    prerequisites: [{ type: 'race', raceName: 'Half-Orc' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Brute',
      },
    ],
    tags: ['intimidate', 'half-orc', 'class skill'],
  },
  // ==================== HUMAN RACE TRAITS ====================
  {
    id: 'focused_study',
    name: 'Focused Study',
    description:
      'When one finds a way to improve and broaden their ability at a single skill, they do. You gain Skill Focus in a single skill of your choice as a bonus feat at 1st level.',
    shortDescription: 'Gain Skill Focus as bonus feat at 1st level',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Human',
    prerequisites: [{ type: 'race', raceName: 'Human' }],
    effects: [],
    tags: ['skill focus', 'human', 'bonus feat'],
  },
  {
    id: 'eye_for_talent',
    name: 'Eye for Talent',
    description:
      'You have a keen eye for potential in those around you. When you acquire an animal companion, bonded mount, cohort, or familiar, that creature gains a +2 bonus to one ability score of your choice.',
    shortDescription: 'Companion/familiar gains +2 to one ability score',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Human',
    prerequisites: [{ type: 'race', raceName: 'Human' }],
    effects: [],
    tags: ['companion', 'familiar', 'ability score', 'human'],
  },
];
