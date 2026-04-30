// ---- Level-Up Decision History ----

export type LevelUpDecision =
  | { type: 'class'; className: string; classLevel: number }
  | { type: 'cr_tier'; templateId: string; tierIndex: number }
  | { type: 'la_payment'; templateId: string }
  | { type: 'la_buyback'; templateId: string };

// ---- Applied Templates (paid — carry ECL machinery) ----

export interface AppliedTemplate {
  templateId: string; // Reference to template definition in Firestore
  name: string; // Snapshotted name
  appliedAs: 'la' | 'cr';
  la?: number; // LA value if appliedAs === 'la'
  cr?: number; // CR value if appliedAs === 'cr'
  acquisitionType: 'inherited' | 'acquired' | 'either';
  acquiredAtCharacterLevel?: number; // If added mid-campaign
  paidTiers: number[]; // HD-tier indices already paid (CR templates)
  sourceId: string;
  sourceRev: number;
  // Editor metadata
  id?: string; // stable local UUID for action targeting
  isFreeGrant?: boolean;
  freeGrantNote?: string;
  grantedBy?: string;
}

// ---- Granted Bonuses (free — no ECL impact) ----

export interface GrantedBonus {
  id: string;
  name: string;
  description: string;
  grantedBy: string; // 'campaign' | 'dm' | userId
  sourceNote?: string; // e.g. "Simple Druid Template — free campaign grant"
}

// ---- Character-level CR Tracking (aggregate across all templates) ----

export interface CharacterCRTracking {
  totalCRApplied: number;
  crBonusLevelsTotal: number; // floor(totalCRApplied / 2)
  crBonusLevelsGranted: number;
  crBonusLevelsPending: number; // crBonusLevelsTotal - crBonusLevelsGranted (computed on save)
}

// ---- Template Feature Types (used in Firestore template definitions) ----

export type TemplateFeature = FlatFeature | HDThresholdFeature | HDFormulaFeature | HDTableFeature;

export interface FlatFeature {
  scalingType: 'flat';
  name: string;
  description: string;
}

export interface HDThresholdFeature {
  scalingType: 'hd_threshold';
  name: string;
  description: string;
  minimumHD: number; // Feature activates when totalHD >= minimumHD
}

export interface HDFormulaFeature {
  scalingType: 'hd_formula';
  name: string;
  description: string;
  formula: string; // e.g. 'HD - 3' for Wild Shape effective level
}

export interface HDTableFeature {
  scalingType: 'hd_table';
  name: string;
  overflowMax?: number; // Max overflow slots per spell level (‡ rule)
  tiers: Array<{
    minHD: number;
    maxHD?: number;
    spellsPerDay?: Array<number | 'overflow' | null>;
  }>;
}
