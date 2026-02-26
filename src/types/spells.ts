export interface Spellcasting {
  spellcastingClasses: SpellcastingClass[];
  preparedSpells: PreparedSpell[];
  knownSpells: KnownSpell[];
  spellbooks: Spellbook[];
}

export interface SpellcastingClass {
  className: string;
  casterLevel: number;
  spellAbility: string; // INT, WIS, CHA
  spellDC: {
    base: number; // 10 + spell level + ability mod
    miscBonus: number;
    byLevel: number[];
  };
  spellsPerDay: {
    base: number[];
    bonus: number[];
    misc: number[];
    total: number[];
    used: number[];
  };
  spellFailure: number;
  concentration: {
    abilityMod: number;
    casterLevel: number;
    misc: number;
    total: number;
  };
}

export interface Spell {
  name: string;
  level: number;
  school: string;
  subschool?: string;
  descriptor?: string[];
  components: {
    verbal: boolean;
    somatic: boolean;
    material: boolean;
    materialComponents?: string;
    focus: boolean;
    focusComponents?: string;
    divine: boolean;
  };
  castingTime: string;
  range: string;
  target: string;
  duration: string;
  savingThrow: string;
  spellResistance: string;
  description: string;
  source: string;
}

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
