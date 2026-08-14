import type { Effect } from './base';
import type { ResourcePoolDefinition } from './resources';

// ---- Level-Up Decision History ----

export type LevelUpDecision =
  | { type: 'class'; className: string; classLevel: number }
  | { type: 'cr_tier'; templateId: string; tierIndex: number }
  | { type: 'la_payment'; templateId: string }
  | { type: 'la_buyback'; templateId: string };

// ---- Template Choices (sub-option selections stored on applied templates) ----

export interface TemplateChoice {
  choiceId: string;
  selection: string; // id of the chosen TemplateChoiceOption
}

// ---- Applied Templates (paid — carry ECL machinery) ----

export interface AppliedTemplate {
  templateId: string; // Reference to template definition in Firestore
  name: string; // Snapshotted name
  abilityScoreChanges?: Array<{
    ability: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';
    change: number;
  }>; // Snapshotted at add-time for pipeline use
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
  // Toggle/pool features injected at load time from the Firestore template doc.
  // Only features with activationMode or resourcePool are stored here.
  features?: TemplateFeature[];
  // Resolved sub-choices for templates with choices (e.g. celestial type).
  templateChoices?: TemplateChoice[];
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
  // Toggle/resource fields — populate for abilities that appear in the combat panel.
  id?: string;
  // When this feature was injected from a template choice, the original id from
  // the choice option's grantsFeature — preserved so callers can cross-reference
  // the source data even though the injected feature uses a derived slot id.
  sourceFeatureId?: string;
  activationMode?: 'passive' | 'toggle' | 'conditional' | 'action';
  shortDescription?: string;
  effects?: Effect[];
  resourcePool?: ResourcePoolDefinition;
}

export interface HDThresholdFeature {
  scalingType: 'hd_threshold';
  name: string;
  description: string;
  minimumHD: number; // Feature activates when totalHD >= minimumHD
  id?: string;
  activationMode?: 'passive' | 'toggle' | 'conditional' | 'action';
  shortDescription?: string;
  effects?: Effect[];
  resourcePool?: ResourcePoolDefinition;
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
