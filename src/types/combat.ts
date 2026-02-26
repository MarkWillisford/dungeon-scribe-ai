import { Bonus } from './base';

export interface CombatStats {
  hitPoints: {
    base: number; // Base HP from hit dice
    constitution: number;
    favoredClass: number;
    other: number;
    current: number;
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
