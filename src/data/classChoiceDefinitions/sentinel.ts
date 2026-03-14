import { ClassChoiceDefinition } from '@/types/classChoices';

// Sentinel — Prestige class from Inner Sea Gods (2014).
// Entry requirements: Deific Obedience feat, Weapon Focus (deity's favored weapon),
// BAB +5, worship chosen deity.
//
// The only player choice is deity selection at level 1.
// Divine boons at levels 3, 6, and 9 are automatic — no player pick required.
// The class engine grants them from character.classChoices['sentinel-deity'].boons.sentinel[].

export const sentinelDefinitions: ClassChoiceDefinition[] = [
  {
    id: 'sentinel-deity',
    className: 'sentinel',
    featureName: 'Deity',
    description:
      "At 1st level, a Sentinel dedicates herself to a specific deity. This determines the divine boons she receives automatically at levels 3, 6, and 9 (from the deity's boons.sentinel tiers). The deity list is filtered to those that have Sentinel boon entries.",
    selectionMode: { type: 'single_at_creation' },
    optionSource: 'collection',
    collectionName: 'deities',
    // Only show deities that have Sentinel boons defined
    collectionFilter: { hasSentinelBoons: true },
    source: 'pf1e-isg',
    isOfficial: true,
    visibility: 'global',
    rev: 1,
  },
];
