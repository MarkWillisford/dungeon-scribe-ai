import { CombatService } from '@services/CombatService';
import { CharacterService } from '@services/CharacterService';
import { ModifierPipelineService } from '@services/ModifierPipelineService';
import { CreateCharacterParams, AbilityScoreMethod } from '@/types/character';
import { Size, Alignment, BonusType } from '@/types/base';
import { Race } from '@/types/race';
import { Buff } from '@/types/buff';
import { Character } from '@/types';

// ----------------------------------------------------------------
// Shared fixtures
// ----------------------------------------------------------------

const mockRace: Race = {
  name: 'Human',
  sizeMod: Size.Medium,
  baseSpeed: 30,
  alternativeMovements: {},
  abilityModifiers: {},
  traits: [],
  languages: ['Common'],
  bonusLanguages: ['Any'],
};

function makeFighterParams(
  overrides: Partial<{ str: number; dex: number; con: number }> = {},
): CreateCharacterParams {
  return {
    name: 'Test Fighter',
    race: mockRace,
    selectedClass: 'Fighter',
    abilityScoreMethod: AbilityScoreMethod.PointBuy,
    abilityScores: {
      str: overrides.str ?? 16,
      dex: overrides.dex ?? 14,
      con: overrides.con ?? 14,
      int: 10,
      wis: 10,
      cha: 8,
    },
    alignment: Alignment.LawfulGood,
  };
}

function makeFighter(overrides?: Partial<{ str: number; dex: number; con: number }>): Character {
  const char = CharacterService.createDefaultCharacter(makeFighterParams(overrides));
  return ModifierPipelineService.recalculate(char);
}

const defaultAbilities = CombatService.defaultAbilities();

// ----------------------------------------------------------------
// Power Attack / Deadly Aim formulas
// ----------------------------------------------------------------

describe('CombatService.getPowerAttackValues', () => {
  it('BAB 1–3: penalty 1, damage bonus 2', () => {
    expect(CombatService.getPowerAttackValues(1)).toEqual({ penalty: 1, damageBonus: 2 });
    expect(CombatService.getPowerAttackValues(3)).toEqual({ penalty: 1, damageBonus: 2 });
  });

  it('BAB 4–7: penalty 2, damage bonus 4', () => {
    expect(CombatService.getPowerAttackValues(4)).toEqual({ penalty: 2, damageBonus: 4 });
    expect(CombatService.getPowerAttackValues(7)).toEqual({ penalty: 2, damageBonus: 4 });
  });

  it('BAB 8–11: penalty 3, damage bonus 6', () => {
    expect(CombatService.getPowerAttackValues(8)).toEqual({ penalty: 3, damageBonus: 6 });
  });

  it('BAB 16–19: penalty 5, damage bonus 10', () => {
    expect(CombatService.getPowerAttackValues(16)).toEqual({ penalty: 5, damageBonus: 10 });
  });
});

describe('CombatService.getDeadlyAimValues', () => {
  it('mirrors Power Attack formula', () => {
    expect(CombatService.getDeadlyAimValues(4)).toEqual({ penalty: 2, damageBonus: 4 });
  });
});

// ----------------------------------------------------------------
// getCombatAbilityEffects
// ----------------------------------------------------------------

describe('CombatService.getCombatAbilityEffects', () => {
  const fighter = makeFighter();

  it('returns empty array when all abilities off', () => {
    const effects = CombatService.getCombatAbilityEffects(fighter, defaultAbilities);
    expect(effects).toHaveLength(0);
  });

  it('Power Attack produces melee attack penalty and damage bonus', () => {
    const effects = CombatService.getCombatAbilityEffects(fighter, {
      ...defaultAbilities,
      powerAttack: true,
    });
    const attackEffect = effects.find((e) => e.target === 'attack.melee');
    const damageEffect = effects.find((e) => e.target === 'damage.melee');
    expect(attackEffect).toBeDefined();
    expect(attackEffect!.value).toBeLessThan(0);
    expect(damageEffect).toBeDefined();
    expect(damageEffect!.value).toBeGreaterThan(0);
  });

  it('Deadly Aim produces ranged attack penalty and damage bonus', () => {
    const effects = CombatService.getCombatAbilityEffects(fighter, {
      ...defaultAbilities,
      deadlyAim: true,
    });
    expect(effects.find((e) => e.target === 'attack.ranged')?.value).toBeLessThan(0);
    expect(effects.find((e) => e.target === 'damage.ranged')?.value).toBeGreaterThan(0);
  });

  it('Rage produces STR, CON, Will bonuses and AC penalty', () => {
    const effects = CombatService.getCombatAbilityEffects(fighter, {
      ...defaultAbilities,
      rage: true,
    });
    const strEffect = effects.find((e) => e.target === 'ability.str');
    const conEffect = effects.find((e) => e.target === 'ability.con');
    const willEffect = effects.find((e) => e.target === 'save.will');
    const acEffect = effects.find((e) => e.target === 'ac');

    expect(strEffect?.value).toBe(4);
    expect(strEffect?.bonusType).toBe(BonusType.MORALE);
    expect(conEffect?.value).toBe(4);
    expect(willEffect?.value).toBe(2);
    expect(acEffect?.value).toBe(-2);
  });

  it('Haste produces dodge AC, dodge Reflex, untyped attack, enhancement speed', () => {
    const effects = CombatService.getCombatAbilityEffects(fighter, {
      ...defaultAbilities,
      haste: true,
    });
    expect(effects.find((e) => e.target === 'ac.dodge' && e.source === 'Haste')?.value).toBe(1);
    expect(effects.find((e) => e.target === 'save.reflex')?.bonusType).toBe(BonusType.DODGE);
    expect(effects.find((e) => e.target === 'attack.all')?.value).toBe(1);
    expect(effects.find((e) => e.target === 'speed')?.value).toBe(30);
  });

  it('Combat Expertise applies penalty to attacks and dodge bonus to AC', () => {
    const effects = CombatService.getCombatAbilityEffects(fighter, {
      ...defaultAbilities,
      combatExpertise: true,
      combatExpertisePenalty: 3,
    });
    expect(effects.find((e) => e.target === 'attack.melee')?.value).toBe(-3);
    expect(effects.find((e) => e.target === 'attack.ranged')?.value).toBe(-3);
    expect(
      effects.find((e) => e.target === 'ac.dodge' && e.source === 'Combat Expertise')?.value,
    ).toBe(3);
  });

  it('TWF without feat applies -6 main-hand penalty (one-handed off-hand)', () => {
    const effects = CombatService.getCombatAbilityEffects(fighter, {
      ...defaultAbilities,
      twoWeaponFighting: true,
      twoWeaponFightingLightOffhand: false,
    });
    expect(effects.find((e) => e.target === 'attack.melee')?.value).toBe(-6);
  });

  it('TWF without feat applies -4 main-hand penalty (light off-hand)', () => {
    const effects = CombatService.getCombatAbilityEffects(fighter, {
      ...defaultAbilities,
      twoWeaponFighting: true,
      twoWeaponFightingLightOffhand: true,
    });
    expect(effects.find((e) => e.target === 'attack.melee')?.value).toBe(-4);
  });
});

// ----------------------------------------------------------------
// calculateAllTotals
// ----------------------------------------------------------------

describe('CombatService.calculateAllTotals', () => {
  it('returns base stats when no buffs or abilities active', () => {
    const fighter = makeFighter();
    const totals = CombatService.calculateAllTotals(fighter, [], defaultAbilities);

    // Fighter level 1, STR 16 (+3), DEX 14 (+2), CON 14 (+2)
    // BAB: 1 (Full progression). Melee: BAB(1) + STR(3) = +4
    expect(totals.meleeAttack).toEqual([4]);
    // AC: 10 + DEX(2) = 12 (no armor)
    expect(totals.ac.total).toBe(12);
    expect(totals.ac.touch).toBe(12);
    // Fort: base(2) + CON(2) = 4
    expect(totals.fort).toBe(4);
    // Ref: base(0) + DEX(2) = 2
    expect(totals.ref).toBe(2);
    // Will: base(0) + WIS(0) = 0
    expect(totals.will).toBe(0);
  });

  it('applies a morale buff to Will saves', () => {
    const fighter = makeFighter();
    const blessBuff: Buff = {
      id: 'bless',
      name: 'Bless',
      source: 'Bless',
      bonusType: BonusType.MORALE,
      duration: 10,
      durationType: 'rounds',
      isActive: true,
      effects: [
        {
          type: 'bonus',
          bonusType: BonusType.MORALE,
          target: 'attack.all',
          value: 1,
          source: 'Bless',
        },
        {
          type: 'bonus',
          bonusType: BonusType.MORALE,
          target: 'save.will',
          value: 1,
          source: 'Bless',
        },
      ],
    };

    const without = CombatService.calculateAllTotals(fighter, [], defaultAbilities);
    const with_ = CombatService.calculateAllTotals(fighter, [blessBuff], defaultAbilities);
    expect(with_.will).toBe(without.will + 1);
    expect(with_.meleeAttack[0]).toBe(without.meleeAttack[0] + 1);
  });

  it('two morale buffs to same stat — only highest applies', () => {
    const fighter = makeFighter();

    const buffA: Buff = {
      id: 'buff_a',
      name: 'Buff A',
      source: 'A',
      bonusType: BonusType.MORALE,
      duration: 10,
      durationType: 'rounds',
      isActive: true,
      effects: [
        {
          type: 'bonus',
          bonusType: BonusType.MORALE,
          target: 'save.will',
          value: 2,
          source: 'Buff A',
        },
      ],
    };
    const buffB: Buff = {
      id: 'buff_b',
      name: 'Buff B',
      source: 'B',
      bonusType: BonusType.MORALE,
      duration: 10,
      durationType: 'rounds',
      isActive: true,
      effects: [
        {
          type: 'bonus',
          bonusType: BonusType.MORALE,
          target: 'save.will',
          value: 5,
          source: 'Buff B',
        },
      ],
    };

    const base = CombatService.calculateAllTotals(fighter, [], defaultAbilities);
    const result = CombatService.calculateAllTotals(fighter, [buffA, buffB], defaultAbilities);
    // Only the +5 should apply (morale bonuses don't stack)
    expect(result.will).toBe(base.will + 5);
  });

  it('two dodge bonuses both apply (dodge stacks)', () => {
    const fighter = makeFighter();

    const dodge1: Buff = {
      id: 'dodge_1',
      name: 'Dodge 1',
      source: 'Item A',
      bonusType: BonusType.DODGE,
      duration: null,
      durationType: 'permanent',
      isActive: true,
      effects: [
        {
          type: 'bonus',
          bonusType: BonusType.DODGE,
          target: 'ac.dodge',
          value: 1,
          source: 'Item A',
        },
      ],
    };
    const dodge2: Buff = {
      id: 'dodge_2',
      name: 'Dodge 2',
      source: 'Item B',
      bonusType: BonusType.DODGE,
      duration: null,
      durationType: 'permanent',
      isActive: true,
      effects: [
        {
          type: 'bonus',
          bonusType: BonusType.DODGE,
          target: 'ac.dodge',
          value: 2,
          source: 'Item B',
        },
      ],
    };

    const base = CombatService.calculateAllTotals(fighter, [], defaultAbilities);
    const result = CombatService.calculateAllTotals(fighter, [dodge1, dodge2], defaultAbilities);
    expect(result.ac.total).toBe(base.ac.total + 3); // both apply
  });

  it('inactive buffs are ignored', () => {
    const fighter = makeFighter();
    const inactiveBuff: Buff = {
      id: 'inactive',
      name: 'Inactive',
      source: 'Spell',
      bonusType: BonusType.MORALE,
      duration: 10,
      durationType: 'rounds',
      isActive: false,
      effects: [
        {
          type: 'bonus',
          bonusType: BonusType.MORALE,
          target: 'save.will',
          value: 10,
          source: 'Inactive',
        },
      ],
    };

    const base = CombatService.calculateAllTotals(fighter, [], defaultAbilities);
    const result = CombatService.calculateAllTotals(fighter, [inactiveBuff], defaultAbilities);
    expect(result.will).toBe(base.will);
  });

  it('Power Attack reduces melee attack and increases damage', () => {
    const fighter = makeFighter();
    const base = CombatService.calculateAllTotals(fighter, [], defaultAbilities);
    const withPA = CombatService.calculateAllTotals(fighter, [], {
      ...defaultAbilities,
      powerAttack: true,
    });
    expect(withPA.meleeAttack[0]).toBeLessThan(base.meleeAttack[0]);
  });

  it('Rage increases melee attack (via STR bonus)', () => {
    const fighter = makeFighter();
    const base = CombatService.calculateAllTotals(fighter, [], defaultAbilities);
    const withRage = CombatService.calculateAllTotals(fighter, [], {
      ...defaultAbilities,
      rage: true,
    });
    // Rage adds +4 STR → +2 STR mod → +2 melee attack
    expect(withRage.meleeAttack[0]).toBe(base.meleeAttack[0] + 2);
  });

  it('Rage reduces AC by 2', () => {
    const fighter = makeFighter();
    const base = CombatService.calculateAllTotals(fighter, [], defaultAbilities);
    const withRage = CombatService.calculateAllTotals(fighter, [], {
      ...defaultAbilities,
      rage: true,
    });
    expect(withRage.ac.total).toBe(base.ac.total - 2);
  });

  it('Haste adds +1 to all attacks and +1 dodge AC', () => {
    const fighter = makeFighter();
    const base = CombatService.calculateAllTotals(fighter, [], defaultAbilities);
    const withHaste = CombatService.calculateAllTotals(fighter, [], {
      ...defaultAbilities,
      haste: true,
    });
    expect(withHaste.meleeAttack[0]).toBe(base.meleeAttack[0] + 1);
    expect(withHaste.ac.total).toBe(base.ac.total + 1);
  });

  it('skill buffs are included in skill totals', () => {
    const fighter = makeFighter();
    const perceptionBuff: Buff = {
      id: 'guidance',
      name: 'Guidance',
      source: 'Guidance',
      bonusType: BonusType.COMPETENCE,
      duration: 1,
      durationType: 'rounds',
      isActive: true,
      effects: [
        {
          type: 'bonus',
          bonusType: BonusType.COMPETENCE,
          target: 'skill.perception',
          value: 1,
          source: 'Guidance',
        },
      ],
    };

    const base = CombatService.calculateAllTotals(fighter, [], defaultAbilities);
    const result = CombatService.calculateAllTotals(fighter, [perceptionBuff], defaultAbilities);
    expect(result.skills.perception).toBe((base.skills.perception ?? 0) + 1);
  });
});

// ----------------------------------------------------------------
// getHPState
// ----------------------------------------------------------------

describe('CombatService.getHPState', () => {
  const MAX = 20;
  const CON = 14;

  it('healthy above 50% max', () => {
    expect(CombatService.getHPState(20, MAX, CON)).toBe('healthy');
    expect(CombatService.getHPState(11, MAX, CON)).toBe('healthy');
  });

  it('wounded at or below 50% max', () => {
    expect(CombatService.getHPState(10, MAX, CON)).toBe('wounded');
    expect(CombatService.getHPState(1, MAX, CON)).toBe('wounded');
  });

  it('disabled at exactly 0', () => {
    expect(CombatService.getHPState(0, MAX, CON)).toBe('disabled');
  });

  it('dying below 0 but above -CON score', () => {
    expect(CombatService.getHPState(-1, MAX, CON)).toBe('dying');
    expect(CombatService.getHPState(-13, MAX, CON)).toBe('dying');
  });

  it('dead at or below -CON score', () => {
    expect(CombatService.getHPState(-14, MAX, CON)).toBe('dead');
    expect(CombatService.getHPState(-20, MAX, CON)).toBe('dead');
  });
});

// ----------------------------------------------------------------
// calculateRageEndHPAdjustment
// ----------------------------------------------------------------

describe('CombatService.calculateRageEndHPAdjustment', () => {
  it('level 1 fighter loses 2 HP (2 HP per level)', () => {
    const fighter = makeFighter();
    const result = CombatService.calculateRageEndHPAdjustment(fighter, 15, 0);
    expect(result.hpLost).toBe(2);
    expect(result.newCurrentHP).toBe(13);
    expect(result.newTempHP).toBe(0);
  });

  it('temp HP absorbs loss first', () => {
    const fighter = makeFighter();
    const result = CombatService.calculateRageEndHPAdjustment(fighter, 15, 5);
    expect(result.hpLost).toBe(2);
    expect(result.newTempHP).toBe(3); // 5 - 2 = 3
    expect(result.newCurrentHP).toBe(15); // unaffected
  });

  it('temp HP partially absorbs — overflow hits current HP', () => {
    const fighter = makeFighter();
    const result = CombatService.calculateRageEndHPAdjustment(fighter, 15, 1);
    expect(result.newTempHP).toBe(0); // 1 temp absorbed
    expect(result.newCurrentHP).toBe(14); // 1 remaining loss hits current
  });

  it('can leave character dying', () => {
    const fighter = makeFighter();
    const result = CombatService.calculateRageEndHPAdjustment(fighter, 1, 0);
    expect(result.newCurrentHP).toBe(-1);
  });
});
