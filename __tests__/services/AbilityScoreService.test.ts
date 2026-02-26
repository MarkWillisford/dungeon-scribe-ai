import { AbilityScoreService } from '@services/AbilityScoreService';
import { AbilityScoreMethod } from '@/types/character';
import { AbilityScores } from '@/types/abilities';

describe('AbilityScoreService', () => {
  describe('Point Buy Methods', () => {
    test('should calculate point costs correctly', () => {
      expect(AbilityScoreService.calculatePointCost(7)).toBe(-4);
      expect(AbilityScoreService.calculatePointCost(8)).toBe(-2);
      expect(AbilityScoreService.calculatePointCost(10)).toBe(0);
      expect(AbilityScoreService.calculatePointCost(14)).toBe(5);
      expect(AbilityScoreService.calculatePointCost(18)).toBe(17);
    });

    test('should provide standard point buy presets', () => {
      const presets = AbilityScoreService.getPointBuyPresets();
      expect(presets).toHaveLength(3);
      expect(presets.find((p) => p.points === 15)).toBeDefined();
      expect(presets.find((p) => p.points === 20)).toBeDefined();
      expect(presets.find((p) => p.points === 25)).toBeDefined();
    });

    test('should validate standard point buy totals correctly', () => {
      const mockScores = createMockAbilityScores({
        str: 15,
        dex: 14,
        con: 13,
        int: 12,
        wis: 10,
        cha: 8,
      });

      const result = AbilityScoreService.validatePointBuy(mockScores, 20);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should validate custom point buy totals (12, 32)', () => {
      const lowResult = AbilityScoreService.validateCustomPointBuy(12);
      expect(lowResult.isValid).toBe(true);
      expect(lowResult.warnings).toContain('Very low point buy may result in weak characters');

      const highResult = AbilityScoreService.validateCustomPointBuy(32);
      expect(highResult.isValid).toBe(true);
      expect(highResult.warnings).toContain(
        'Very high point buy may result in overpowered characters',
      );
    });

    test('should reject invalid custom point totals', () => {
      const negativeResult = AbilityScoreService.validateCustomPointBuy(-5);
      expect(negativeResult.isValid).toBe(false);
      expect(negativeResult.errors).toContain('Custom point buy too low: -5 (minimum: 5)');

      const extremeResult = AbilityScoreService.validateCustomPointBuy(100);
      expect(extremeResult.isValid).toBe(false);
      expect(extremeResult.errors).toContain('Custom point buy too high: 100 (maximum: 50)');
    });

    test('should reject over-spent points', () => {
      const mockScores = createMockAbilityScores({
        str: 18,
        dex: 18,
        con: 18,
        int: 18,
        wis: 18,
        cha: 18,
      });

      const result = AbilityScoreService.validatePointBuy(mockScores, 20);
      expect(result.isValid).toBe(false);
      expect(result.errors[0]).toContain('Point buy exceeds limit');
    });

    test('should provide reasonable range for custom points', () => {
      const range = AbilityScoreService.getPointBuyRange();
      expect(range.min).toBe(5);
      expect(range.max).toBe(50);
    });
  });

  describe('Dice Rolling Methods', () => {
    test('should roll 3d6 with valid range (3-18)', () => {
      for (let i = 0; i < 100; i++) {
        const roll = AbilityScoreService.roll3d6();
        expect(roll.total).toBeGreaterThanOrEqual(3);
        expect(roll.total).toBeLessThanOrEqual(18);
        expect(roll.rolls).toHaveLength(3);
        expect(roll.rolls.every((r) => r >= 1 && r <= 6)).toBe(true);
        expect(roll.timestamp).toBeInstanceOf(Date);
      }
    });

    test('should roll 4d6 drop lowest with valid range (3-18)', () => {
      for (let i = 0; i < 100; i++) {
        const roll = AbilityScoreService.roll4d6DropLowest();
        expect(roll.total).toBeGreaterThanOrEqual(3);
        expect(roll.total).toBeLessThanOrEqual(18);
        expect(roll.rolls).toHaveLength(3);
        expect(roll.rolls.every((r) => r >= 1 && r <= 6)).toBe(true);
      }
    });

    test('should parse custom dice formulas correctly', () => {
      expect(AbilityScoreService.parseDiceFormula('4d6k3')).toEqual({
        count: 4,
        sides: 6,
        keep: 3,
        modifier: undefined,
      });

      expect(AbilityScoreService.parseDiceFormula('3d6+2')).toEqual({
        count: 3,
        sides: 6,
        keep: undefined,
        modifier: 2,
      });

      expect(AbilityScoreService.parseDiceFormula('2d8-1')).toEqual({
        count: 2,
        sides: 8,
        keep: undefined,
        modifier: -1,
      });

      expect(AbilityScoreService.parseDiceFormula('invalid')).toBeNull();
    });

    test('should roll custom dice correctly', () => {
      const roll = AbilityScoreService.rollCustomDice('4d6k3');
      expect(roll.rolls).toHaveLength(3);
      expect(roll.total).toBeGreaterThanOrEqual(3);
      expect(roll.total).toBeLessThanOrEqual(18);

      const rollWithModifier = AbilityScoreService.rollCustomDice('3d6+2');
      expect(rollWithModifier.rolls).toHaveLength(3);
      expect(rollWithModifier.total).toBeGreaterThanOrEqual(5);
      expect(rollWithModifier.total).toBeLessThanOrEqual(20);
    });

    test('should handle edge cases in dice rolling', () => {
      expect(() => AbilityScoreService.rollCustomDice('invalid')).toThrow();
    });

    test('should roll all abilities correctly', () => {
      const results = AbilityScoreService.rollAllAbilities(AbilityScoreMethod.Roll3d6);

      expect(Object.keys(results)).toHaveLength(6);
      expect(results.str).toBeDefined();
      expect(results.dex).toBeDefined();
      expect(results.con).toBeDefined();
      expect(results.int).toBeDefined();
      expect(results.wis).toBeDefined();
      expect(results.cha).toBeDefined();

      Object.values(results).forEach((roll) => {
        expect(roll.total).toBeGreaterThanOrEqual(3);
        expect(roll.total).toBeLessThanOrEqual(18);
      });
    });
  });

  describe('Statistics', () => {
    test('should calculate roll statistics correctly', () => {
      const rolls = [
        { ability: 'str', rolls: [4, 5, 6], total: 15, timestamp: new Date() },
        { ability: 'dex', rolls: [3, 3, 3], total: 9, timestamp: new Date() },
        { ability: 'con', rolls: [6, 6, 6], total: 18, timestamp: new Date() },
      ];

      const stats = AbilityScoreService.calculateStatistics(rolls);
      expect(stats.min).toBe(9);
      expect(stats.max).toBe(18);
      expect(stats.average).toBe(14);
      expect(stats.standardDeviation).toBeGreaterThan(0);
    });

    test('should handle empty roll array', () => {
      const stats = AbilityScoreService.calculateStatistics([]);
      expect(stats.min).toBe(0);
      expect(stats.max).toBe(0);
      expect(stats.average).toBe(0);
      expect(stats.standardDeviation).toBe(0);
    });

    test('should track roll history properly', () => {
      const roll = AbilityScoreService.roll3d6();
      expect(roll.timestamp).toBeInstanceOf(Date);
      expect(roll.ability).toBe('');
      expect(roll.rolls.length).toBeGreaterThan(0);
      expect(roll.total).toBe(roll.rolls.reduce((sum, r) => sum + r, 0));
    });
  });

  describe('Ability Score Helpers', () => {
    test('should create default ability score correctly', () => {
      const score = AbilityScoreService.createDefaultAbilityScore(15);
      expect(score.base).toBe(15);
      expect(score.racial).toBe(0);
      expect(score.total).toBe(15);
      expect(score.modifier).toBe(2);
    });

    test('should calculate ability modifier correctly', () => {
      expect(AbilityScoreService.calculateAbilityModifier(8)).toBe(-1);
      expect(AbilityScoreService.calculateAbilityModifier(10)).toBe(0);
      expect(AbilityScoreService.calculateAbilityModifier(12)).toBe(1);
      expect(AbilityScoreService.calculateAbilityModifier(18)).toBe(4);
    });

    test('should create ability scores from rolls', () => {
      const rolls = {
        str: { ability: 'str', rolls: [6, 6, 6], total: 18, timestamp: new Date() },
        dex: { ability: 'dex', rolls: [4, 4, 4], total: 12, timestamp: new Date() },
        con: { ability: 'con', rolls: [3, 3, 4], total: 10, timestamp: new Date() },
        int: { ability: 'int', rolls: [5, 5, 5], total: 15, timestamp: new Date() },
        wis: { ability: 'wis', rolls: [2, 3, 3], total: 8, timestamp: new Date() },
        cha: { ability: 'cha', rolls: [4, 5, 6], total: 15, timestamp: new Date() },
      };

      const scores = AbilityScoreService.createAbilityScoresFromRolls(rolls);
      expect(scores.str.base).toBe(18);
      expect(scores.str.modifier).toBe(4);
      expect(scores.dex.base).toBe(12);
      expect(scores.dex.modifier).toBe(1);
    });
  });
});

function createMockAbilityScores(values: {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
}): AbilityScores {
  return {
    str: AbilityScoreService.createDefaultAbilityScore(values.str),
    dex: AbilityScoreService.createDefaultAbilityScore(values.dex),
    con: AbilityScoreService.createDefaultAbilityScore(values.con),
    int: AbilityScoreService.createDefaultAbilityScore(values.int),
    wis: AbilityScoreService.createDefaultAbilityScore(values.wis),
    cha: AbilityScoreService.createDefaultAbilityScore(values.cha),
  };
}
