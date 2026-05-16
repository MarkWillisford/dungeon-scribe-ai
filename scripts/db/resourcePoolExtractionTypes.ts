/**
 * Shared types for extractClassFeatureResourcePools.ts and its tests.
 * Kept separate so tests can import types without pulling in the Anthropic SDK.
 */

export interface ExtractedResourcePool {
  id: string;
  name: string;
  rechargeOn: 'rest' | 'per_encounter' | 'special';
  maxFormula: string;
  restRecoveryMode: 'full' | 'formula';
  restRecoveryFormula?: string;
  specialRechargeNote?: string;
}

export interface ClassFeatureResourcePoolEntry {
  classId: string;
  className: string;
  featureName: string;
  resourcePool: ExtractedResourcePool;
}
