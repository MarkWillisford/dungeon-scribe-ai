import { type ClassChoiceDefinition, type ClassChoiceOptionGroup } from '@/types/classChoices';

// Oracle's Curse — inline (~12 options, fixed list from Core/APG)
const ORACLE_CURSES: ClassChoiceOptionGroup = {
  id: 'curses',
  name: '',
  options: [
    {
      id: 'blackened',
      name: 'Blackened',
      description:
        'Your hands and forearms are shriveled and blackened. You take a -4 penalty on weapon attack rolls. At 5th level, 10th level, and 15th level, you gain fire spells as bonus spells known.',
    },
    {
      id: 'clouded-vision',
      name: 'Clouded Vision',
      description:
        'Your eyes are obscured. You cannot see anything beyond 30 ft. At 5th level, you gain darkvision 60 ft. At 10th level, you blindsense 30 ft. At 15th level, you blindsight 15 ft.',
    },
    {
      id: 'covetous',
      name: 'Covetous',
      description:
        'You find yourself drawn to wealth and valuables. You must make a Will save (DC 20) to voluntarily give away wealth. At 5th, 10th, 15th level, you gain Appraise bonuses and other treasure-related abilities.',
    },
    {
      id: 'deaf',
      name: 'Deaf',
      description:
        'You cannot hear and are immune to effects that rely on hearing. You cast all spells as if they were modified by the Silent Spell metamagic feat (no spell slot increase). At 5th level, you gain scent.',
    },
    {
      id: 'haunted',
      name: 'Haunted',
      description:
        'Malevolent spirits follow you. Retrieving stored items requires a move action. At 5th level, spirits cause missed attacks to affect you. At 10th level and 15th level, you gain bonus spells.',
    },
    {
      id: 'lame',
      name: 'Lame',
      description:
        'One of your legs is permanently lame. You move at 3/4 normal speed and cannot run or charge. At 5th level, you are immune to the fatigued condition. At 10th level, you are immune to exhausted.',
    },
    {
      id: 'misfortune',
      name: 'Misfortune',
      description:
        'Misfortune dogs your steps. Once per day, the GM can force you to reroll any one d20 roll and take the worse result. At 5th, 10th, and 15th level, you gain once-per-day reroll abilities.',
    },
    {
      id: 'powerless-prophecy',
      name: 'Powerless Prophecy',
      description:
        'You are plagued by visions of the future that you cannot prevent. Once per day you are staggered for 1 round. At higher levels, you gain increasing insight into the future.',
    },
    {
      id: 'tongues',
      name: 'Tongues',
      description:
        'In times of stress, you speak in a language other than your own. When casting spells or in combat, you automatically speak in the language associated with your mystery. At 5th level, you can understand all spoken languages.',
    },
    {
      id: 'wasting',
      name: 'Wasting',
      description:
        'Your body is slowly decaying. You take a -4 penalty to your Charisma score. At 5th level, you gain immunity to sickened. At 10th level, immunity to nauseated. At 15th level, immunity to disease.',
    },
    {
      id: 'wolfscarred-face',
      name: 'Wolfscarred Face',
      description:
        'Your face is deformed, giving you a bite attack (1d4 damage). You take a -4 penalty on Charisma-based skill checks (except Intimidate). At higher levels, you gain improved bite and other feral features.',
    },
    {
      id: 'wrecker',
      name: 'Wrecker',
      description:
        'Your touch causes objects to wither and decay. You take a -4 penalty on all saving throws against effects that cause the broken condition. At higher levels, you can channel this destructive power offensively.',
    },
  ],
};

export const oracleDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'oracle-mystery',
    className: 'oracle',
    featureName: 'Mystery',
    description:
      "The oracle's mystery determines bonus spells known, class skills, the pool of revelations available, and the final revelation at 20th level.",
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'collection',
    collectionName: 'mysteries',
    source: 'pf1e-apg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'oracle-curse',
    className: 'oracle',
    featureName: "Oracle's Curse",
    description:
      "A permanent curse that haunts the oracle, granting benefits at the cost of a persistent drawback. Effects scale at 5th, 10th, and 15th level.",
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'inline',
    optionGroups: [ORACLE_CURSES],
    source: 'pf1e-apg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'oracle-revelation',
    className: 'oracle',
    featureName: 'Revelation',
    description:
      'A supernatural ability drawn from your mystery, chosen at levels 1, 3, 7, 11, 15, and 19. Only revelations from your chosen mystery are shown.',
    selectionMode: { type: 'at_class_levels', levels: [1, 3, 7, 11, 15, 19] },
    optionSource: 'collection',
    collectionName: 'revelations',
    collectionFilter: { mysteryId: '{chosen_mystery}' },
    source: 'pf1e-apg',
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: 'global',
    rev: 1,
  },
];
