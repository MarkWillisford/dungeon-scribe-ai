import type { GameDataSource } from './gameData';
import type { DataQualityFields } from './base';

// ---- Discipline ----

export type DisciplineSourceSystem = 'tob' | 'pow' | 'pow-extended';

export interface DisciplineDefinition extends DataQualityFields {
  id: string;
  name: string;
  description: string;
  associatedSkill: string;
  associatedWeaponGroups: string[];
  sourceSystem: DisciplineSourceSystem;
  source: GameDataSource;
  // true = published by Paizo (PF1e) or WotC (3.5e). Always false for Dreamscarred Press / 3rd party.
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
  // N maneuvers from same discipline. SELF-INCLUSIVE: the maneuver being learned counts
  // toward this number. So "requires 2 Primal Fury" means you need 1 OTHER Primal Fury
  // maneuver already known. canLearnManeuver() adds +1 to the current count when checking.
  disciplineManeuversKnown?: number;
  requiredManeuverIds?: string[];
  minimumInitiatorLevel?: number;
}

export interface ManeuverDefinition extends DataQualityFields {
  id: string;
  name: string;
  disciplineId: string;
  level: number;
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
  id: string;
  name: string;
  description: string;
  favoredDisciplineId: string;
  alignmentRequirement?: string;
  source: GameDataSource;
  isOfficial: boolean;
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  rev: number;
}

// ---- Recovery Mechanics ----
// Most classes have TWO recovery methods: a primary (full-round, recover all/most)
// and a secondary (swift/move, recover one). Both are tracked per pool.

export type RecoveryMethod =
  | { type: 'full_round_one' }
  | { type: 'full_round_all' }
  | { type: 'strike_recovers_all' }
  | { type: 'random_grant'; grantCount: number }
  | { type: 'swift_one'; resourceId?: string }
  | { type: 'gambit' }
  | { type: 'move_through_threatened' }
  | { type: 'animus_fueled'; resourceId: string }
  | { type: 'conviction_fueled'; resourceId: string }
  | { type: 'custom'; description: string };

export interface RecoveryMechanics {
  primary: RecoveryMethod;
  secondary?: RecoveryMethod;
}

// ---- Initiating Pool (on Character — parallels SpellcastingPool) ----

export interface InitiatingContributor {
  className: string;
  classLevels: number;
  ilProgression: 'full' | 'half';
  advancesManeuverAccess: boolean;
  advancesInitiatorLevel: boolean;
}

export interface InitiatingPool {
  baseClass: string;
  initiatingAbility: 'INT' | 'WIS' | 'CHA';
  contributors: InitiatingContributor[];
  effectiveInitiatorLevel: number;
  maxManeuverLevel: number;
  maneuversKnown: number;
  maneuversReadied: number;
  stancesKnown: number;
  accessibleDisciplines: string[];
  bonusDisciplines: { disciplineId: string; source: string }[];
  removedDisciplines: { disciplineId: string; reason: string }[];
  martialTraditionId?: string;
  recoveryMechanics: RecoveryMechanics;
  maneuverDC: {
    base: number;
    abilityMod: number;
    miscBonus: number;
  };
}

// ---- Character's Maneuver Tracking ----

export interface KnownManeuver {
  maneuverId: string;
  maneuverName: string;
  disciplineId: string;
  level: number;
  type: ManeuverType;
  poolBaseClass: string;
}

export interface ReadiedManeuver extends KnownManeuver {
  isExpended: boolean;
  isGranted?: boolean;
}

export interface KnownStance {
  stanceId: string;
  stanceName: string;
  disciplineId: string;
  level: number;
  poolBaseClass: string;
}

// ---- Feat-Granted Maneuvers ----
// Feats like Martial Study grant maneuvers outside the class pool system.
// Tracked separately — do NOT count toward any pool's limits.

export interface FeatGrantedManeuver {
  maneuverId: string;
  maneuverName: string;
  disciplineId: string;
  level: number;
  type: ManeuverType;
  grantedByFeatId: string;
  isReadied: boolean;
  isExpended: boolean;
}

// ---- Top-level container (parallels Spellcasting) ----

export interface Initiating {
  pools: InitiatingPool[];
  knownManeuvers: KnownManeuver[];
  readiedManeuvers: ReadiedManeuver[];
  knownStances: KnownStance[];
  activeStanceIds: string[];
  maxActiveStances: number;
  featGrantedManeuvers: FeatGrantedManeuver[];
}
