// Eidolon types — base forms, subtypes, draft/runtime shape, pool breakdown.
//
// The evolution entry itself lives in classOptions.ts alongside the other class
// option collections; it imports EidolonForm, EidolonSubtype, and EvolutionStacking
// from this file.

import { Size, Alignment, DataQualityFields } from './base';
import type { GameDataSource } from './gameData';

// ---- Enumerations ----

export type EidolonEdition = 'apg' | 'unchained';

// Every form except 'aberrant' exists in APG. Aberrant is Unchained-only.
// Late-APG additions (aquatic, avian, tauric) are allowed in both editions per
// ruleset decision; the UI surfaces them with a legacy note.
//
// Earlier drafts of the union included 'mounted' and 'vermious'. Neither exists
// as a first-party Paizo base form; they have been removed. If a campaign wants
// them, they ship as campaign content.
export type EidolonForm =
  | 'biped'
  | 'quadruped'
  | 'serpentine'
  | 'aquatic'
  | 'avian'
  | 'tauric'
  | 'aberrant';

export type EidolonSubtype =
  | 'aberrant'
  | 'aeon'
  | 'agathion'
  | 'ancestor'
  | 'angel'
  | 'archon'
  | 'astral'
  | 'azata'
  | 'daemon'
  | 'deepwater'
  | 'demon'
  | 'devil'
  | 'div'
  | 'elemental'
  | 'genie'
  | 'inevitable'
  | 'kami'
  | 'kyton'
  | 'plant'
  | 'protean'
  | 'psychopomp'
  | 'radiant'
  | 'shadow'
  | 'storykin'
  | 'twinned'
  | 'void';

export type EvolutionAbilityKey = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';

export type EvolutionEnergyType = 'acid' | 'cold' | 'electricity' | 'fire' | 'sonic';

// ---- Stacking rules (lives on EidolonEvolutionEntry) ----

// Structured replacement for the old `canBeTakenMultipleTimes: boolean`.
// Drives the picker's "this selection requires a different X" UI and
// validation's "ability increase STR at cap" checks.
export interface EvolutionStacking {
  canRepeat: boolean;
  // Absolute cap across all metadata variants. Absent = unlimited.
  // Example: breath weapon has maxTotal: 3 (uses per day cap).
  maxTotal?: number;
  // If present, repeats must pick a different metadata value.
  //   'ability'  — ability increase (different stat each repeat; same stat caps at 1 + floor(summoner / 6))
  //   'attack'   — bleed, pull, push, grab, improved damage (different attack type)
  //   'energy'   — resistance, immunity, energy attacks (different energy type)
  //   'skill'    — skilled (different skill)
  //   'spell'    — basic/minor/major/ultimate/psychic magic (different spell)
  //   'feat'     — extra feat (different feat)
  //   'slot'     — shared slot (different magic item slot)
  //   'limbPair' — claws, slam, pincers, hooves (one per limbs evolution the eidolon has)
  //   'tail'     — tail slap, sting (one per tail evolution)
  requiresDifferentMetadata?:
    | 'ability'
    | 'attack'
    | 'energy'
    | 'skill'
    | 'spell'
    | 'feat'
    | 'slot'
    | 'limbPair'
    | 'tail';
}

// ---- Base form definition (Firestore collection: eidolonBaseForms) ----

export interface EidolonBaseAttack {
  kind:
    | 'bite'
    | 'claws'
    | 'slam'
    | 'tail-slap'
    | 'gore'
    | 'hooves'
    | 'tentacle'
    | 'sting'
    | 'pincers'
    | 'wing-buffet'
    | 'other';
  count: number;
  primary: boolean;
  damageMedium: string; // "1d6", "1d8", etc.
  damageLarge?: string;
  damageHuge?: string;
  descriptor?: 'B' | 'P' | 'S';
  notes?: string;
}

export interface EidolonSaveProfile {
  fort: 'good' | 'bad';
  ref: 'good' | 'bad';
  will: 'good' | 'bad';
}

export interface EidolonAbilityScoreSet {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
}

export interface EidolonSpeedSet {
  land: number;
  fly?: number;
  flyManeuverability?: 'clumsy' | 'poor' | 'average' | 'good' | 'perfect';
  swim?: number;
  climb?: number;
  burrow?: number;
}

export interface EidolonBaseFormDefinition extends DataQualityFields {
  id: EidolonForm;
  name: string;
  description: string;
  edition: EidolonEdition | 'both';
  // true for aquatic/avian/mounted/tauric/vermious — late-APG additions allowed in both editions
  legacyBaseForm?: boolean;

  startingSize: Size;
  speeds: EidolonSpeedSet;
  naturalArmor: number;
  saves: EidolonSaveProfile;
  abilityScores: EidolonAbilityScoreSet;
  baseAttacks: EidolonBaseAttack[];
  // evolution ids granted at 1st level, NOT deducted from pool
  freeEvolutions: string[];

  source: GameDataSource;
  isOfficial: boolean;
  visibility: 'global' | 'campaign';
  campaignId?: string;
  rev: number;
}

// ---- Subtype definition (Firestore collection: eidolonSubtypes) ----

export interface EidolonSubtypeLevelGrant {
  classLevel: 1 | 4 | 8 | 12 | 16 | 20;
  freeEvolutions?: string[]; // evolution ids granted at this level
  bonusEvolutionPoints?: number; // +1 ep pool bump
  specialAbilities?: string[]; // human-readable: "DR 5/evil", "truespeech", etc.
}

export interface EidolonSubtypeDefinition extends DataQualityFields {
  id: EidolonSubtype;
  name: string;
  description: string;
  edition: 'unchained';
  // If present, the summoner's alignment must match one of these.
  alignmentRestriction?: Alignment[];
  // Subtype is only valid on these base forms.
  requiredBaseForms: EidolonForm[];
  scalingGrants: EidolonSubtypeLevelGrant[];

  source: GameDataSource;
  isOfficial: boolean;
  visibility: 'global' | 'campaign';
  campaignId?: string;
  rev: number;
}

// ---- Selected evolution (draft + runtime) ----

export interface SelectedEvolutionMetadata {
  // Populated only for evolutions whose stacking requires distinct metadata,
  // or for evolutions that need per-selection parameters (chosen spell, etc.).
  ability?: EvolutionAbilityKey;
  attackId?: string; // attack identifier (bite, claws, slam, ...) for attack-scoped evolutions
  energyType?: EvolutionEnergyType;
  skillKey?: string; // matches skillKey from skills.ts
  spellId?: string; // spell collection id
  featId?: string; // feat collection id (for Extra Feat evolution)
  slotId?: string; // magic item slot (for Shared Slot evolution)
  notes?: string; // free text escape hatch
}

export interface SelectedEvolution {
  instanceId: string; // uuid per selection; enables stacking + precise remove
  evolutionId: string; // EidolonEvolutionEntry.id
  metadata?: SelectedEvolutionMetadata;
}

// ---- Aspect / Greater Aspect transfer (lives on DraftEidolon) ----

// Aspect (L10): up to 2 ep diverted, 1:1 exchange.
// Greater Aspect (L18): up to 6 ep diverted, 2:1 exchange (eidolon loses 1 ep per 2 diverted, rounded up).
export interface EidolonAspectTransfer {
  divertedPoints: number;
  summonerEvolutions: SelectedEvolution[];
}

// ---- Draft + runtime eidolon ----

export interface DraftEidolon {
  id: string;
  name: string;
  // Which DraftClassEntry owns this eidolon. Multiple eidolons per summoner
  // class entry is valid for Broodmaster (2-4 brood members).
  summonerClassEntryId: string;
  edition: EidolonEdition;
  baseForm: EidolonForm;
  // Required when edition === 'unchained'. Validation surfaces a warning when absent.
  subtype?: EidolonSubtype;
  selectedEvolutions: SelectedEvolution[];
  aspectTransfer?: EidolonAspectTransfer;
  // GM override. Reason is required when set — blocks submission if empty.
  poolOverride?: { value: number; note: string };
}

// Runtime eidolon mirrors draft for v1. The combat sheet (HP, AC, saves, skills,
// feats, spells, equipment) is a separate phase and will extend this type.
export type Eidolon = DraftEidolon;

// ---- Summoner archetype state (lives on DraftClassEntry) ----

// Broodmaster: pool is pre-split. Summoner may spend 4 ep (L8+) on the shared
// Large evolution, or 6 ep (L13+) for the Huge size variant of that same
// evolution. Huge is a cost variant of Large — there is no separate
// 'evolution-huge' data entry. The remaining pool is then divided among brood members.
export interface BroodmasterState {
  sharedEvolutions: SelectedEvolution[];
}

// ---- Pool breakdown (output of EidolonPoolService.computePool) ----

export interface EidolonPoolSources {
  base: number; // from class level + edition
  extraEvolutionFeats: number; // +1 per Extra Evolution feat (cap 5)
  subtypeGrants: number; // +1 from Archon L4, Demon L8, etc.
  archetypeModifier: number; // Master Summoner halves base, Wild Caller ARG adds floor(level/4), etc.
  broodmasterShare: number; // negative when split across brood; shared pre-split applied first
  override: number; // poolOverride.value if present
}

export interface EidolonPoolBreakdown {
  total: number;
  spent: number;
  remaining: number;
  // Points diverted from this eidolon to the summoner via Aspect/Greater Aspect.
  // Uses 1:1 at L10, 2:1 at L18 (eidolon loses 1 per 2 rounded up).
  transferredToSummoner: number;
  sources: EidolonPoolSources;
  // Evolution ids granted free by base form and subtype scaling (not charged to pool).
  freeEvolutionsGranted: string[];
  warnings: string[];
}
