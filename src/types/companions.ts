// src/types/companions.ts
//
// Animal companion / special mount types — see plans/animal-companion-builder.md.
// Companions are character-level instances; full computed values (stat block,
// available slots, attack lines) are derived at render time from the companion
// entry definition + this snapshot.

import type { ItemSlot, CharacterMagicItem } from './magicItems';
import type { Weapon, Armor, Gear } from './equipment';
import type { AppliedTemplate } from './templates';
import type { BodyShape } from './animalCompanions';

// Re-export BodyShape so consumers can grab everything from a single module.
export type { BodyShape };

// ---- CompanionGrant ----------------------------------------------------------
// Discriminated union of where a companion came from. Drives effective-level
// computation and where the companion card renders on the character sheet.
//
// 'cohort' is reserved for when the Leadership feat ships — not implemented now.

export type CompanionGrant =
  | { type: 'class'; classEntryId: string; classChoiceId: string }
  | { type: 'template'; templateId: string }
  | { type: 'feat'; featId: string }
  | { type: 'cohort'; cohortId: string };

// ---- Tricks ------------------------------------------------------------------

export type TrickName =
  | 'attack'
  | 'come'
  | 'defend'
  | 'down'
  | 'fetch'
  | 'guard'
  | 'heel'
  | 'perform'
  | 'seek'
  | 'stay'
  | 'track'
  | 'work'
  | 'assist'
  | 'distract'
  | 'flank'
  | 'getHelp'
  | 'maneuver'
  | 'sneak';

// ---- Companion-side feat instance --------------------------------------------
// Analogue of CharacterFeat; companions don't have classes, so feat slots are
// derived from HD instead of class level.

export interface CompanionFeat {
  featId: string;
  name: string;
  hdWhenTaken: number;
  active: boolean;
  choices: Record<string, string>;
}

// ---- Companion equipment -----------------------------------------------------
// Stripped-down version of Equipment. Companions wear barding, use magic items,
// and (for biped/quadruped forms) can wield weapons. Slot availability is
// filtered at the UI level by BODY_SHAPE_SLOTS + entry-level slotOverrides.

export interface CompanionEquipment {
  armor: Armor[];
  weapons: Weapon[];
  magicItems: CharacterMagicItem[];
  gear: Gear[];
  equippedSlots: Map<ItemSlot, string>;
}

// ---- CompanionInstance -------------------------------------------------------
// Lives at Character.companions[]. One per granted companion (Beastmaster gets
// multiple). Stores selections + overrides; full stat block is computed at
// render time from sourceEntryId + effectiveProgressionLevel + appliedTemplates
// + equipment + feats + tricks.

export interface CompanionInstance {
  instanceId: string;
  sourceEntryId: string; // 'wolf', 'leopard', 'fleshraker'
  name: string;
  grantedBy: CompanionGrant;
  effectiveProgressionLevel: number;

  abilityScoreOverrides: Partial<Record<'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA', number>>;
  hp: { max: number; current: number; temp: number; nonlethal: number };

  appliedTemplates: AppliedTemplate[];
  feats: CompanionFeat[];
  tricks: TrickName[];
  skillRanks: Record<string, number>;
  equipment: CompanionEquipment;

  // Two notes fields by design. `notes` on the Identity tab holds short
  // handler's memos (trained behaviors, quirks). `background` on the Notes
  // tab holds long-form narrative — origin, personality, adventure history.
  // Splitting them keeps the Identity tab compact while still giving
  // companions the same room for story that characters have.
  notes: string;
  background: string;
}
