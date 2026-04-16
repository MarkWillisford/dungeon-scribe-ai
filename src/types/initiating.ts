// Initiating system — martial analogue to spellcasting. Covers Tome of Battle (3.5e),
// Path of War, and Path of War: Expanded. See plans/initiating-system.md for design.
//
// Two categories of types:
//   - Catalog types (DisciplineDefinition, ManeuverDefinition, StanceDefinition,
//     MartialTradition) extend DataQualityFields — these are seeded into Firestore
//     and need admin verification tracking.
//   - Character subdocument types (KnownManeuver, ReadiedManeuver, KnownStance,
//     InitiatingPool, InitiatingContributor, Initiating) stay clean — they're
//     runtime state on a character, not catalog entries.

import type { GameDataSource } from './gameData';
import type { DataQualityFields } from './base';

// ---- Discipline ----

export type DisciplineSourceSystem = 'tob' | 'pow' | 'pow-extended';

export interface DisciplineDefinition extends DataQualityFields {
  id: string; // kebab-case: 'iron-heart', 'golden-lion'
  name: string;
  description: string;
  associatedSkill: string; // 'Acrobatics', 'Diplomacy', 'Knowledge (Martial)'
  associatedWeaponGroups: string[];
  sourceSystem: DisciplineSourceSystem;
  source: GameDataSource;
  isOfficial: boolean;
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  rev: number;
}

// ---- Maneuver ----

export type ManeuverType = 'strike' | 'boost' | 'counter';

export type ManeuverActionType =
  | 'standard'
  | 'full-round'
  | 'swift'
  | 'immediate'
  | 'move'
  | 'free';

export interface ManeuverPrerequisite {
  // Character must know N maneuvers from the same discipline before learning this one.
  disciplineManeuversKnown?: number;
  // Specific maneuver(s) required.
  requiredManeuverIds?: string[];
  // Derived: (maneuverLevel * 2) - 1, but some maneuvers override.
  minimumInitiatorLevel?: number;
}

export interface ManeuverDefinition extends DataQualityFields {
  id: string;
  name: string;
  disciplineId: string;
  level: number; // 1-9
  type: ManeuverType;
  actionType: ManeuverActionType;
  range: string;
  target?: string;
  area?: string;
  duration: string;
  savingThrow?: string;
  description: string;
  prerequisites: ManeuverPrerequisite;
  source: GameDataSource;
  isOfficial: boolean;
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  rev: number;
}

// ---- Stance ----

export interface StanceDefinition extends DataQualityFields {
  id: string;
  name: string;
  disciplineId: string;
  level: number;
  description: string;
  prerequisites: ManeuverPrerequisite;
  source: GameDataSource;
  isOfficial: boolean;
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  rev: number;
}

// ---- Martial Tradition (Path of War: Expanded) ----

export interface MartialTradition extends DataQualityFields {
  id: string; // 'empyreal-guardians'
  name: string;
  description: string;
  favoredDisciplineId: string; // Discipline members can swap in.
  alignmentRequirement?: string; // 'Lawful Good', 'Any non-evil', etc.
  source: GameDataSource;
  isOfficial: boolean;
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  rev: number;
}

// ---- Recovery Mechanics ----

export type RecoveryMechanic =
  | { type: 'full_round_one' } // Swordsage
  | { type: 'full_round_all' } // Warder
  | { type: 'strike_recovers_all' } // Warblade
  | { type: 'random_grant'; grantCount: number } // Crusader
  | { type: 'swift_one'; resourceId?: string } // Stalker (ki cost)
  | { type: 'gambit' } // Warlord
  | { type: 'move_through_threatened' } // Harbinger
  | { type: 'animus_fueled'; resourceId: string } // Mystic
  | { type: 'conviction_fueled'; resourceId: string } // Zealot
  | { type: 'custom'; description: string };

// ---- Character-side types (runtime state — NO DataQualityFields) ----

export interface InitiatingContributor {
  className: string;
  classLevels: number;
  ilProgression: 'full' | 'half';
  advancesManeuverAccess: boolean; // Prestige: advances readied/known counts
  advancesInitiatorLevel: boolean; // Prestige: advances IL
}

export interface InitiatingPool {
  baseClass: string; // 'warblade', 'stalker'
  initiatingAbility: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';
  contributors: InitiatingContributor[];
  effectiveInitiatorLevel: number;
  maxManeuverLevel: number; // ceil(IL / 2), capped at 9
  maneuversKnown: number;
  maneuversReadied: number;
  stancesKnown: number;
  accessibleDisciplines: string[]; // Base class default disciplineIds
  bonusDisciplines: { disciplineId: string; source: string }[];
  removedDisciplines: { disciplineId: string; reason: string }[];
  martialTraditionId?: string; // If a tradition is active on this pool
  recoveryMechanic: RecoveryMechanic;
  maneuverDC: {
    base: number; // 10 + maneuver level + ability mod
    abilityMod: number;
    miscBonus: number;
  };
}

export interface KnownManeuver {
  maneuverId: string;
  maneuverName: string; // Denormalized for display
  disciplineId: string;
  level: number;
  type: ManeuverType;
  poolBaseClass: string;
}

export interface ReadiedManeuver extends KnownManeuver {
  isExpended: boolean; // true = used this encounter
  isGranted?: boolean; // Crusader: whether granted this round
}

export interface KnownStance {
  stanceId: string;
  stanceName: string; // Denormalized for display
  disciplineId: string;
  level: number;
  poolBaseClass: string;
}

// ---- Top-level container on Character (parallels Spellcasting) ----

export interface Initiating {
  pools: InitiatingPool[];
  knownManeuvers: KnownManeuver[];
  readiedManeuvers: ReadiedManeuver[];
  knownStances: KnownStance[];
  activeStanceId: string | null;
}
