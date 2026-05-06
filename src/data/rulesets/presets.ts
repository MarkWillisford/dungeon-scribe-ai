import { Ruleset } from '@/types/ruleset';

const SYSTEM_OWNER_ID = 'system';

export const PRESET_PF1E_STANDARD: Ruleset = {
  id: 'preset-pf1e-standard',
  name: 'PF1e Standard',
  description: 'Standard Pathfinder 1st Edition rules. Point buy 20, official content only.',
  visibility: 'global',
  ownerId: SYSTEM_OWNER_ID,
  allowedSources: ['pf1e-official'],
  optionalRules: {
    heroPoints: false,
    gestalt: false,
    fractionalBABSaves: false,
    variantMulticlassing: false,
    eitrMode: 'off',
    relaxedEntry: false,
    mythic: false,
    pathOfWarMechanics: false,
    tomeOfBattleMechanics: false,
    crTemplates: true,
    laTemplates: true,
    crRefunds: false,
    laBuyback: false,
    crLaAbilityScoreReductions: true,
  },
  itemOverrides: { banned: [], allowed: [] },
  campaignRequirements: {},
  validationSettings: {
    abilityScoreMethod: 'point-buy',
    pointBuyBudget: 20,
    maxTraits: 2,
  },
  version: 1,
  createdAt: '2026-04-09T00:00:00.000Z',
  updatedAt: '2026-04-09T00:00:00.000Z',
};

// NOTE: The PF Society banned item list has not been researched yet.
// This preset ships without a ban list. See plans/ruleset-system.md — "PF Society Preset" section.
export const PRESET_PF1E_SOCIETY: Ruleset = {
  id: 'preset-pf1e-society',
  name: 'PF1e Society',
  description:
    'Pathfinder Society organized play rules. Ban list incomplete — research pending.',
  visibility: 'global',
  ownerId: SYSTEM_OWNER_ID,
  allowedSources: ['pf1e-official'],
  optionalRules: {
    heroPoints: false,
    gestalt: false,
    fractionalBABSaves: false,
    variantMulticlassing: false,
    eitrMode: 'off',
    relaxedEntry: false,
    mythic: false,
    pathOfWarMechanics: false,
    tomeOfBattleMechanics: false,
    crTemplates: false,
    laTemplates: false,
    crRefunds: false,
    laBuyback: false,
    crLaAbilityScoreReductions: false,
  },
  itemOverrides: {
    banned: [], // TODO: populate from PF Society organized play ban list
    allowed: [],
  },
  campaignRequirements: {},
  validationSettings: {
    abilityScoreMethod: 'point-buy',
    pointBuyBudget: 20,
    maxTraits: 2,
  },
  version: 1,
  createdAt: '2026-04-09T00:00:00.000Z',
  updatedAt: '2026-04-09T00:00:00.000Z',
};

export const PRESET_GO_NUTS: Ruleset = {
  id: 'preset-go-nuts',
  name: 'Go Nuts',
  description: 'All sources, all optional rules. Anything goes.',
  visibility: 'global',
  ownerId: SYSTEM_OWNER_ID,
  allowedSources: [
    'pf1e-official',
    '3.5e',
    'dreamscarred',
    'pf1e-3rdparty',
    'campaign-homebrew',
    'system-homebrew',
  ],
  optionalRules: {
    heroPoints: true,
    gestalt: true,
    fractionalBABSaves: true,
    variantMulticlassing: true,
    eitrMode: 'full',
    relaxedEntry: true,
    mythic: true,
    pathOfWarMechanics: true,
    tomeOfBattleMechanics: true,
    crTemplates: true,
    laTemplates: true,
    crRefunds: true,
    laBuyback: true,
    crLaAbilityScoreReductions: false,
  },
  itemOverrides: { banned: [], allowed: [] },
  campaignRequirements: {},
  validationSettings: {
    abilityScoreMethod: 'freeform',
    maxTraits: 99, // unlimited
  },
  version: 1,
  createdAt: '2026-04-09T00:00:00.000Z',
  updatedAt: '2026-04-09T00:00:00.000Z',
};

export const SYSTEM_PRESETS: Ruleset[] = [
  PRESET_PF1E_STANDARD,
  PRESET_PF1E_SOCIETY,
  PRESET_GO_NUTS,
];
