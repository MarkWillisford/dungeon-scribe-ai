import { type ClassChoiceDefinition } from '@/types/classChoices';

const COMBAT_MANEUVERS: { id: string; name: string; description: string }[] = [
  { id: 'bull-rush', name: 'Bull Rush', description: 'Push an opponent back with a powerful charge.' },
  { id: 'dirty-trick', name: 'Dirty Trick', description: 'Hinder an opponent with underhanded tactics.' },
  { id: 'disarm', name: 'Disarm', description: 'Knock a weapon or item from an opponent\'s grasp.' },
  { id: 'drag', name: 'Drag', description: 'Pull an opponent along the ground.' },
  { id: 'grapple', name: 'Grapple', description: 'Grab and restrain an opponent.' },
  { id: 'overrun', name: 'Overrun', description: 'Barrel through or past an opponent.' },
  { id: 'reposition', name: 'Reposition', description: 'Move an opponent to a new location.' },
  { id: 'steal', name: 'Steal', description: 'Take an item from an opponent without disarming them.' },
  { id: 'sunder', name: 'Sunder', description: 'Strike and break an opponent\'s held item.' },
  { id: 'trip', name: 'Trip', description: 'Knock an opponent prone.' },
];

export const brawlerDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'brawler-maneuver-training',
    className: 'brawler',
    featureName: 'Maneuver Training',
    description:
      'At 3rd level and every 4 levels thereafter, a brawler selects one combat maneuver and gains a +1 bonus on CMB checks and to CMD when performing or defending against that maneuver.',
    selectionMode: { type: 'at_class_levels', levels: [3, 7, 11, 15, 19] },
    optionSource: 'inline',
    optionGroups: [
      {
        id: 'combat-maneuvers',
        name: '',
        options: COMBAT_MANEUVERS,
      },
    ],
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
  {
    id: 'brawler-bonus-combat-feat',
    className: 'brawler',
    featureName: 'Bonus Combat Feat',
    description:
      'At 2nd level and every 3 levels thereafter, a brawler gains a bonus combat feat in addition to those gained from normal advancement.',
    selectionMode: { type: 'at_class_levels', levels: [2, 5, 8, 11, 14, 17, 20] },
    optionSource: 'collection',
    collectionName: 'feats',
    collectionFilter: { isCombatFeat: true },
    source: 'pf1e-acg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
