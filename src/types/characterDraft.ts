// ---- Character Draft ----
// Editor state for the direct-entry character sheet.
// Captures user inputs only — computed values (BAB, saves, modifiers, totals)
// are derived from these via selectors, never stored here.
// All fields are serializable (no Date objects, no class instances).

import { Alignment, BonusType } from './base';
import { ClassChoice } from './classes';
import type { ItemSlot } from './magicItems';

// ---- Ability scores ----

export type AbilityKey = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';

export interface DraftTypedBonus {
  value: number;
  bonusType: BonusType;
  source?: string; // display label, e.g. "Succubus kiss", "Campaign reward"
}

// Stacking rules: untyped and dodge stack; all other bonus types take highest
// only. Penalties (negative values) always stack regardless of type — PF1e RAW.
export function computeOtherBonusTotal(bonuses: DraftTypedBonus[]): number {
  if (bonuses.length === 0) return 0;
  const byType = new Map<BonusType, number[]>();
  for (const b of bonuses) {
    const list = byType.get(b.bonusType) ?? [];
    list.push(b.value);
    byType.set(b.bonusType, list);
  }
  let total = 0;
  for (const [type, values] of byType) {
    const positives = values.filter((v) => v > 0);
    const negatives = values.filter((v) => v < 0);
    if (positives.length > 0) {
      total +=
        type === BonusType.UNTYPED || type === BonusType.DODGE
          ? positives.reduce((a, v) => a + v, 0)
          : Math.max(...positives);
    }
    // Penalties always stack — sum all negative values.
    if (negatives.length > 0) {
      total += negatives.reduce((a, v) => a + v, 0);
    }
  }
  return total;
}

export interface DraftAbilityScore {
  base: number;
  racial: number; // auto-populated from race selection, shown read-only
  inherent: number; // tomes / wishes (manual)
  enhancement: number; // auto-populated from equipped gear, shown read-only
  other: DraftTypedBonus[]; // typed bonuses (morale, sacred, insight, etc.)
  levelIncrements: number; // count of +1 increases allocated here
}

export type DraftAbilityScores = Record<AbilityKey, DraftAbilityScore>;

// Which ability receives the +1 at each class-HD milestone (every 4 HD)
export interface LevelIncrementSlot {
  atHD: number; // 4, 8, 12, 16, 20, 24, ...
  ability: AbilityKey | null;
}

// ---- Classes ----

export interface DraftClassEntry {
  id: string; // local uuid — used as React key and action target
  className: string;
  level: number;
  archetypeId?: string;
  archetypeName?: string;
  sourceSystem: 'pf1e' | '3.5e' | 'homebrew' | 'campaign';
  // Prestige-class spellcasting advancement. At each level of this class the
  // player picks which existing caster class (by DraftClassEntry.id) gets
  // advanced. Tradition (divine/arcane) is derived from the referenced
  // class's spellcasting.type — never stored here to avoid drift.
  //
  // 'single' — one base class advances per level (Hathran, Dweomerkeeper, ...).
  // 'both'   — both an arcane and a divine pool advance per level (Mystic Theurge).
  //
  // perLevel[i] corresponds to prestige class level (i + 1). Length must
  // equal this entry's `level`. Pointers may be '' when the user hasn't
  // chosen yet — validation surfaces that as a warning.
  spellcastingAdvancement?: SpellcastingAdvancement;
  classChoices: ClassChoice[];
  prereqOverride: boolean; // DM override — suppress prereq warnings for this class
  isFavoredClass?: boolean; // true if this is the character's favored class
  favoredClassBonuses?: {
    hp: number; // count of levels where the +1 HP bonus was taken
    skillRank: number; // count of levels where the +1 skill rank bonus was taken
  };
}

export type SpellcastingAdvancement =
  | {
      mode: 'single';
      perLevel: Array<{ baseClassEntryId: string }>;
    }
  | {
      mode: 'both';
      perLevel: Array<{ arcaneBaseClassEntryId: string; divineBaseClassEntryId: string }>;
    };

// ---- Templates ----

export interface DraftTemplateEntry {
  id: string;
  templateId?: string; // undefined for free grants
  templateName: string;
  appliedAs?: 'CR' | 'LA';
  crValue?: number;
  laValue?: number;
  acquired?: 'inherited' | 'acquired' | 'either';
  acquiredAtECL?: number; // ECL at which an acquired template was obtained (for timeline placement)
  isFreeGrant: boolean;
  freeGrantNote?: string; // description for free grants
  grantedBy?: string; // e.g. "DM (campaign grant)"
}

// ---- Feats ----

export type FeatSlotSource = 'racial' | 'level' | 'bonus' | 'mythic';

export interface DraftFeatSlot {
  id: string;
  source: FeatSlotSource;
  availableAt: string; // display label: "Lvl 1", "Fighter 4", "Tier 2"
  availableAtLevel: number; // numeric for ordering and validation
  featId?: string;
  featName?: string;
  prereqOverride: boolean; // suppress prereq warning for this slot
}

// ---- Skills ----

export interface DraftSkillEntry {
  ranks: number;
  misc: number;
  // isClassSkill is derived at runtime from the classes list — not stored here
}

// ---- Traits ----

export interface DraftTrait {
  id: string;
  traitId?: string; // DB id; undefined for custom/homebrew traits
  traitName: string;
  category: string; // Combat / Faith / Magic / Social / Race / Regional / Religion
  description: string;
}

// ---- Combat stats ----

export interface DraftCombatStats {
  maxHPOverride?: number; // undefined = use computed value
  currentHP: number;
  nonlethalDamage: number;
  tempHP: number;
  // Misc adjustments on top of auto-computed values
  acMiscBonus: number;
  saveFortMisc: number;
  saveRefMisc: number;
  saveWillMisc: number;
  meleeAttackMisc: number;
  rangedAttackMisc: number;
  cmbMisc: number;
  // Movement speeds (feet)
  speedLand: number;
  speedFly?: number;
  speedSwim?: number;
  speedClimb?: number;
}

// ---- Spellcasting ----

export type SpellPoolType = 'divine' | 'arcane';

export interface DraftSpellcastingPool {
  id: string;
  poolType: SpellPoolType;
  // The DraftClassEntry.id of the base caster this pool represents. Every
  // pool is anchored to exactly one base caster; prestige classes don't get
  // their own pool, they advance somebody else's via spellcastingAdvancement.
  baseClassEntryId: string;
  castingAbility: AbilityKey;
  spellsPerDayMisc: number[]; // index = spell level 0–9; misc adjustments
}

// ---- Equipment ----

// Character-layer equipped slot — ring splits into ring_left / ring_right here
// (item definitions use ItemSlot which has 'ring' singular)
export type DraftEquippedSlot = Exclude<ItemSlot, 'ring'> | 'ring_left' | 'ring_right';

// Unified equipped item — covers weapons, armor, shields, and magic items
export interface DraftEquipmentItem {
  id: string;
  definitionId?: string; // Firestore doc id in the source collection
  collection: 'weapons' | 'armor' | 'shields' | 'magicItems';
  name: string;
  slot?: DraftEquippedSlot; // undefined = in a container or carried
  containerId?: string; // id of a DraftEquipmentItem with isContainer === true
  isContainer?: boolean; // true for Bags of Holding, Handy Haversacks, etc.
  isOrbiting?: boolean; // true for ioun stones added via the orbiting picker
  allowsHandUse?: boolean; // true for bucklers — off-hand stays free
  abilityScoreBonuses?: Partial<Record<AbilityKey, number>>; // denormalized from item definition at add time
  notes?: string;
}

// Legacy shape — kept so existing code compiles; use DraftEquipmentItem going forward
/** @deprecated Use DraftEquipmentItem */
export interface DraftWeapon {
  id: string;
  name: string;
  attackBonus: number;
  damage: string;
  damageType: string;
  critRange: string;
  critMultiplier: number;
}

/** @deprecated Use DraftEquipmentItem */
export interface DraftArmor {
  id: string;
  name: string;
  acBonus: number;
  maxDex?: number;
  acp: number;
}

/** @deprecated Use DraftEquipmentItem */
export type DraftMagicItem = DraftEquipmentItem;

// ---- Root draft ----

export interface CharacterDraft {
  // Identity
  name: string;
  player: string;
  raceId: string;
  raceName: string;
  alignment: Alignment;
  deity: string;
  gender: string;
  age: string;
  height: string;
  weight: string;
  hair: string;
  eyes: string;
  skin: string;
  background: string;
  portrait?: string;

  // Abilities
  abilities: DraftAbilityScores;
  racialFlexBonus: boolean;
  racialFlexAbility?: AbilityKey;
  levelIncrementSlots: LevelIncrementSlot[];

  // Classes & Templates
  classes: DraftClassEntry[];
  templates: DraftTemplateEntry[];

  // Combat
  combat: DraftCombatStats;

  // Skills — key matches skillKey from Skills type (e.g. 'perception', 'spellcraft')
  skills: Record<string, DraftSkillEntry>;

  // Traits
  traits: DraftTrait[];

  // Feats
  featSlots: DraftFeatSlot[];

  // Spellcasting
  spellcastingPools: DraftSpellcastingPool[];

  // Equipment — unified slot system
  equipment: DraftEquipmentItem[];

  // Notes
  characterNotes: string;
  campaignNotes: string;
}
