// TemplateDefinition — static data shape for the Firestore 'templates' collection.
// Seed scripts only — authoritative copy lives in Firestore at runtime.

import type { DataQualityFields } from '@/types/base';
import { TemplateFeature } from '@/types/templates';

// Provenance — discriminated union replaces overlapping boolean fields
export type TemplateSourceInfo =
  | { type: 'official'; publication: string }
  | { type: 'third_party'; publisher: string; publication: string }
  | { type: 'converted'; originalSystem: string; publication: string }
  | { type: 'homebrew'; createdBy: string; campaignId?: string }
  | { type: 'campaign'; campaignId: string; createdBy?: string };

export type TemplatePrerequisite =
  | { type: 'alignment'; allowed: string[] }
  | { type: 'creature_type'; allowed: string[] }
  | { type: 'creature_type_excluded'; excluded: string[] }
  | { type: 'min_hd'; minimum: number }
  | { type: 'max_hd'; maximum: number }
  | { type: 'subtype'; required: string[] }
  | { type: 'special'; description: string };

export interface AbilityScoreChange {
  ability: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';
  change: number; // always a delta, never a final value
  minimum?: number; // ability cannot go below this value
  condition?: string; // e.g. 'only if base score is —'
}

export type TemplateDR =
  | { scalingType: 'flat'; value: number; bypassedBy: string }
  | {
      scalingType: 'hd_tiered';
      tiers: Array<{ minHD: number; maxHD?: number; value: number; bypassedBy: string }>;
    };

export interface TemplateResistance {
  energyType: 'fire' | 'cold' | 'electricity' | 'acid' | 'sonic' | string;
  value: number | 'immunity';
}

// frequency is intentionally an open string — NOT a closed union.
// Common patterns: 'at_will', '3/day', 'constant', '1/day'
// But expressions like '3+Cha mod/day' are valid and must not be rejected.
export interface TemplateSLA {
  spellName: string;
  frequency: string;
  casterLevelFormula: string; // e.g. 'equal to HD', '15'
  dcAbility?: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';
  dcBase?: number;
  condition?: string;
}

// Used only for HD-tiered CR templates (e.g. Druid Creature).
// Never combined with crAdjustment on the same TemplateDefinition.
export interface CRTierDefinition {
  tierIndex: number; // 0-based; matches AppliedTemplate.paidTiers[]
  minHD: number;
  maxHD?: number; // omit for the open-ended final tier
  crValue: number;
  label?: string; // e.g. '1–5 HD', '21+ HD'
  features: TemplateFeature[]; // imported from @/types/templates — not redefined
}

export interface TemplateDefinition extends DataQualityFields {
  id: string; // kebab-case: 'half-dragon', 'druid-creature'
  name: string;
  description: string;

  // ECL cost — use crAdjustment OR crTiers, never both
  crAdjustment?: number;
  laAdjustment?: number;
  crTiers?: CRTierDefinition[];

  // Two orthogonal classification fields
  acquisitionType: 'inherited' | 'acquired' | 'either';
  isSimpleTemplate: boolean;

  prerequisites?: TemplatePrerequisite[];

  // Type / subtype changes
  typeChange?: string;
  typeChangeNote?: string;
  subtypeGains?: string[];
  subtypeRemoves?: string[];
  sizeChange?: number; // steps: positive = larger, negative = smaller

  // Ability scores — always deltas
  abilityScoreChanges?: AbilityScoreChange[];
  abilityScoreChangeNote?: string;

  // Defenses
  naturalArmorChange?: number;
  damageReduction?: TemplateDR;
  resistances?: TemplateResistance[];
  immunities?: string[]; // non-energy immunities: ['poison', 'petrification']
  fastHealing?: string; // formula string, e.g. '5' or 'equal to HD'
  regeneration?: string; // formula + bypassed-by, e.g. '5 (cold iron or evil)'
  srFormula?: string; // e.g. 'HD + 11'

  // Features — imported type, not redefined
  features: TemplateFeature[];
  spellLikeAbilities?: TemplateSLA[];

  // Provenance
  sourceInfo: TemplateSourceInfo;
  visibility: 'global' | 'campaign' | 'private';
  rev: number;

  // Companion grant — present when applying this template to a character also
  // grants them an animal companion. Plan: animal-companion-builder.md §
  // Templates That Grant ACs. The effective-level formula drives AC
  // progression the same way a class level would.
  grantsCompanion?: GrantsCompanionSpec;
}

export interface GrantsCompanionSpec {
  // 'characterLevel'    — effective level = total character class HD
  // 'characterLevel-3'  — −3 (druid-creature style: HD-3 for wild shape etc.)
  // 'characterLevel-4'  — −4 (paladin mount style)
  effectiveLevelFormula: 'characterLevel' | 'characterLevel-3' | 'characterLevel-4';
  // Picker scope when adding the companion. Values match
  // CompanionPickerSheet.CompanionPickerFilter ('full' | 'mountsOnly').
  pickerFilter: 'full' | 'mountsOnly';
}
