export type SourceCollection =
  | 'pf1e-official'
  | '3.5e'
  | 'dreamscarred'
  | 'pf1e-3rdparty'
  | 'campaign-homebrew'
  | 'system-homebrew';

export type EitrMode = 'off' | 'syrens_subset' | 'full';

export interface OptionalRules {
  heroPoints: boolean;
  gestalt: boolean;
  fractionalBABSaves: boolean;
  variantMulticlassing: boolean;
  eitrMode: EitrMode;
  relaxedEntry: boolean; // Removes HD + skill rank prereqs for prestige classes
  mythic: boolean;
  pathOfWarMechanics: boolean; // Activates PoW maneuver level validation
  tomeOfBattleMechanics: boolean; // Activates ToB maneuver level validation (3.5e)
  crTemplates: boolean;
  laTemplates: boolean;
  crRefunds: boolean;
  laBuyback: boolean;
  crLaAbilityScoreReductions: boolean;
}

export type OverrideKind = 'feat' | 'class' | 'spell' | 'item';

export interface ItemOverrideEntry {
  kind: OverrideKind;
  id: string;
  name: string; // Denormalized for display without lookup
  reason?: string;
  grantedAs?: 'campaign-reward'; // For allowed overrides only — DM-approved rewards
}

export interface ValidationSettings {
  abilityScoreMethod: 'point-buy' | 'standard-array' | 'dice' | 'freeform';
  pointBuyBudget?: number; // Only used when method === 'point-buy'
  maxTraits: number;
  minTraits: number;
}

export interface CampaignRequirements {
  allowedAlignments?: string[]; // If set, character alignment must be in this list
  requiredSources?: SourceCollection[]; // Sources the character MUST draw from
}

export interface Ruleset {
  id: string;
  name: string;
  description?: string;
  visibility: 'private' | 'global'; // 'global' = system presets
  ownerId: string; // Firebase UID — rulesets are user-scoped

  allowedSources: SourceCollection[];

  optionalRules: OptionalRules;

  itemOverrides: {
    banned: ItemOverrideEntry[];
    allowed: ItemOverrideEntry[]; // Includes campaign-reward grants
  };

  campaignRequirements: CampaignRequirements;

  validationSettings: ValidationSettings;

  version: number; // Monotonically incremented on save
  createdAt: string; // ISO timestamp
  updatedAt: string;
}

export interface CampaignRulesetLink {
  campaignId: string;
  rulesetId: string;
  rulesetVersion: number; // Version at time of last sync
}
