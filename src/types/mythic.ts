// ---- Mythic Progression ----
// Parallel to regular levels — not part of levelHistory.
// Gained via narrative events (trial completion), not XP.

export type MythicPath =
  | 'archmage'
  | 'champion'
  | 'guardian'
  | 'hierophant'
  | 'marshal'
  | 'trickster';

export interface MythicProgression {
  path: MythicPath;
  tier: number; // 1–10
  pathAbilities: MythicAbilityEntry[];
  universalAbilities: MythicAbilityEntry[];
  tierHistory: MythicTierGrant[];
}

export interface MythicAbilityEntry {
  abilityId: string;
  name: string;
  takenAtTier: number;
  sourceId: string;
  sourceRev: number; // Snapshotted like feats
}

export interface MythicTierGrant {
  tier: number;
  grantedAtECL: number;
  note?: string; // e.g. "Trial of the Verdant Tomb"
}
