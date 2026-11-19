import { Bonus } from './base';

// ---- Combat calculation return types (used by CombatService) ----

export interface ACTotals {
  total: number;
  touch: number;
  flatFooted: number;
  breakdown: string[]; // ["Base: 10", "Armor: +8", "DEX: +2", "Bless: +1 morale"]
}

export interface SkillTotal {
  total: number;
  breakdown: string[];
}

export interface BuffedTotals {
  ac: ACTotals;
  fort: number;
  ref: number;
  will: number;
  meleeAttack: number[]; // iterative attack array e.g. [14, 9, 4]
  rangedAttack: number[];
  skills: Partial<Record<string, number>>; // skill key → buffed total
}

export interface CombatStats {
  hitPoints: {
    base: number; // Base HP from hit dice
    constitution: number;
    favoredClass: number;
    other: number; // Effect-granted HP (items, spells) — owned by the pipeline
    /** Computed maximum HP, or manualMax when the user has overridden it. */
    max: number;
    /**
     * User override of maximum HP. null/undefined means "use the calculated
     * value" — clearing this field is how the UI reverts to auto.
     */
    manualMax?: number | null;
    current: number;
    /**
     * True once current HP has been set deliberately (by the user, or by the
     * pipeline seeding a new character at full health). Without this flag a
     * character could never be recorded at 0 HP, because the pipeline would
     * read the 0 as "unset" and snap it back to maximum.
     */
    currentInitialized?: boolean;
    temporary: number;
    nonlethal: number;
  };

  armorClass: {
    base: number; // Always 10
    armor: number;
    shield: number;
    dexterity: number;
    size: number;
    natural: number;
    deflection: number;
    dodge: number;
    misc: number;
    total: number;
    touch: number;
    flatFooted: number;
  };

  combatManeuver: {
    bonus: {
      baseAttack: number;
      strengthMod: number;
      sizeMod: number;
      miscMods: Bonus[];
      useAbility?: {
        ability: string; // DEX, WIS, etc.
        source: string;
      };
      total: number;
    };
    defense: {
      baseValue: number; // Always 10
      baseAttack: number;
      strengthMod: number;
      dexterityMod: number;
      sizeMod: number;
      armorBonus: number;
      shieldBonus: number;
      naturalArmorBonus: number;
      deflectionBonus: number;
      dodgeBonus: number;
      miscMods: Bonus[];
      total: number;
      flatFooted: number;
    };
  };

  initiative: {
    dexterity: number;
    misc: number;
    total: number;
  };

  savingThrows: {
    fortitude: SavingThrow;
    reflex: SavingThrow;
    will: SavingThrow;
  };

  movement: {
    base: number;
    armor: number;
    fly: number;
    swim: number;
    climb: number;
    burrow: number;
    current: number;
  };

  // Cached totals with all active buffs + combat abilities applied (computed by CombatService)
  // Populated during a combat session; undefined when not in combat
  buffedTotals?: BuffedTotals;

  attackBonuses: {
    baseAttack: number[];
    strengthMod: number;
    sizeMod: number;

    abilityModifiers: {
      melee: string; // Default: "STR"
      ranged: string; // Default: "DEX"
      thrown: string; // Default: "STR"
    };

    miscMods: {
      melee: Bonus[];
      ranged: Bonus[];
      thrown: Bonus[];
      all: Bonus[];
    };

    meleeTotal: number;
    rangedTotal: number;
    allAttacks: {
      melee: number[];
      ranged: number[];
    };
  };
}

export interface SavingThrow {
  base: number;
  ability: number;
  magic: number;
  misc: number;
  temporary: number;
  total: number;
}
