import type { GameDataSource } from './gameData';
import type { DataQualityFields } from './base';

// ---- Prestige class spellcasting advancement ----
// 'single' — one base class advances per prestige level (Hathran, Dweomerkeeper, ...)
// 'both'   — both an arcane and divine pool advance per prestige level (Mystic Theurge)
// perLevel[i] corresponds to prestige class level (i + 1)
export type SpellcastingAdvancement =
  | {
      mode: 'single';
      // Length must equal this class entry's level.
      // Entries may be { baseClassEntryId: '' } when the user hasn't chosen a target yet —
      // validation surfaces that as a warning.
      perLevel: Array<{ baseClassEntryId: string }>;
    }
  | {
      mode: 'both';
      // Length must equal this class entry's level.
      // Entries may use '' for either id when the user hasn't chosen a target yet —
      // validation surfaces that as a warning.
      perLevel: Array<{ arcaneBaseClassEntryId: string; divineBaseClassEntryId: string }>;
    };

// ---- Spellcasting ----

export interface Spellcasting {
  pools: SpellcastingPool[]; // One per base spellcasting class (Cleric, Druid, Wizard, etc.)
  preparedSpells: PreparedSpell[];
  knownSpells: KnownSpell[];
  spellbooks: Spellbook[];
}

// ---- Spellcasting Pool ----
// Anchored to one base class (the class that owns the spell list and slot table).
// Prestige/advancement classes are contributors, not pool owners.
// A Cleric/Druid has TWO pools — they do not merge, even if both are divine.

export interface SpellcastingPool {
  baseClass: string; // 'cleric' | 'druid' | 'wizard' — maps to classLevels.{baseClass} in Firestore
  castingType: 'divine' | 'arcane' | 'psychic' | 'occult';
  spellAbility: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';

  // Editor metadata
  id?: string; // stable local UUID for action targeting
  baseClassEntryId?: string; // ClassEntry.id of the base caster this pool represents

  // Which classes built this pool and how many levels each contributed
  contributors: SpellcastingContributor[];

  // Stored explicitly — both can diverge independently from contributor sum
  effectiveSpellcastingLevel: number; // Governs slot table and max spell level access
  baseCasterLevel: number; // Governs effect duration, damage dice, SR checks, dispel

  // Gear/feat/ability CL bonuses, optionally scoped by school or descriptor
  clBonuses: CLBonus[];

  spellsPerDay: {
    base: number[];
    bonus: number[];
    misc: number[];
    total: number[];
    used: number[];
  };
  spellDC: {
    base: number; // 10 + spell level + ability mod
    miscBonus: number;
    byLevel: number[];
  };
  spellFailure: number;
  concentration: {
    abilityMod: number;
    casterLevel: number;
    misc: number;
    total: number;
  };
}

export interface SpellcastingContributor {
  className: string;
  classLevels: number;
  advancesSpellSlots: boolean; // false = grants CL only, no new slot progression
  advancesCasterLevel: boolean;
}

export interface CLBonus {
  bonus: number;
  source: string; // 'Orange Ioun Stone', 'Domain ability', etc.
  scope?: {
    schools?: string[]; // e.g. ['necromancy']
    descriptors?: string[]; // e.g. ['fire', 'evil']
    spellIds?: string[]; // Specific spell overrides
  };
  // Absent scope = applies to all spells in this pool
}

// ---- Spell Definition ----
//
// Two types, one shape:
//   Spell           — character subdocument (used inside Spellcasting on a character)
//   SpellDefinition — catalog entry (seeded into Firestore; carries admin quality fields)
//
// DataQualityFields live on SpellDefinition only so they never propagate into
// character records via KnownSpell / PreparedSpell.

export interface Spell {
  name: string;
  // Map of class name to spell level — e.g. { wizard: 3, sorcerer: 3, magus: 3 }
  // Queryable in Firestore: where('classLevels.wizard', '==', 3)
  classLevels: Record<string, number>;
  school: string;
  subschool?: string;
  descriptor?: string[];
  components: {
    verbal: boolean;
    somatic: boolean;
    material: boolean;
    materialComponents?: string;
    focus?: boolean;
    focusComponents?: string;
    divine?: boolean;
  };
  castingTime: string;
  range: string;
  area?: string;
  effect?: string;
  target: string;
  duration: string;
  savingThrow: string;
  spellResistance: string;
  description: string;
  source: string | GameDataSource; // string during static data phase; GameDataSource after Firestore migration
}

export interface SpellDefinition extends Spell, DataQualityFields {}

export interface KnownSpell extends Spell {
  classes: {
    className: string;
    level: number;
  }[];
}

export interface PreparedSpell extends Spell {
  prepared: number;
  cast: number;
  className: string;
  domain?: string;
}

export interface Spellbook {
  name: string;
  spells: Spell[];
  pages: number;
  pagesUsed: number;
  notes: string;
}
