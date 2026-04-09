import { type ClassChoiceDefinition } from '@/types/classChoices';

// Monk bonus feat list is fixed — seven specific feats only.
// At 1st level the monk also receives two separate fixed bonus feats (Improved Grapple or
// Stunning Fist, AND Combat Reflexes or Deflect Arrows), but those are binary choices
// handled as character creation prompts, not repeating class feature slots.
const MONK_BONUS_FEATS = [
  {
    id: 'catch-off-guard',
    name: 'Catch Off-Guard',
    description: 'You do not suffer any penalties for using an improvised melee weapon.',
  },
  {
    id: 'combat-reflexes',
    name: 'Combat Reflexes',
    description:
      'You may make a number of additional attacks of opportunity equal to your Dexterity bonus.',
  },
  {
    id: 'deflect-arrows',
    name: 'Deflect Arrows',
    description:
      'You can deflect ranged attacks against you once per round as an immediate action.',
  },
  {
    id: 'dodge',
    name: 'Dodge',
    description: 'You gain a +1 dodge bonus to your AC.',
  },
  {
    id: 'improved-grapple',
    name: 'Improved Grapple',
    description:
      'You do not provoke attacks of opportunity when performing a grapple combat maneuver.',
  },
  {
    id: 'scorpion-style',
    name: 'Scorpion Style',
    description:
      'You can reduce a foe\'s speed to 5 feet for 1 round on a successful unarmed strike.',
  },
  {
    id: 'throw-anything',
    name: 'Throw Anything',
    description:
      'You do not suffer any penalties for using an improvised ranged weapon.',
  },
];

export const monkDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'monk-bonus-feat',
    className: 'monk',
    featureName: 'Bonus Feat',
    description:
      'At 2nd level, and every 4 levels thereafter, a monk may select a bonus feat from a specific list: Catch Off-Guard, Combat Reflexes, Deflect Arrows, Dodge, Improved Grapple, Scorpion Style, and Throw Anything. He does not need to meet the prerequisites of these feats.',
    selectionMode: { type: 'at_class_levels', levels: [2, 6, 10, 14, 18] },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'monk-bonus-feats',
        name: '',
        options: MONK_BONUS_FEATS,
      },
    ],
    source: 'pf1e-core',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
