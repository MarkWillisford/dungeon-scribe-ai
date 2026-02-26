import { ValidationService } from '@services/ValidationService';
import { AbilityScoreService } from '@services/AbilityScoreService';
import { AbilityScoreMethod } from '@/types/character';
import { AbilityScores } from '@/types/abilities';
import { Race } from '@/types/race';
import { Size } from '@/types/base';

describe('ValidationService', () => {
  describe('validatePointBuy', () => {
    test('should validate 15-point buy correctly', () => {
      const scores = createMockAbilityScores({
        str: 13,
        dex: 14,
        con: 13,
        int: 12,
        wis: 12,
        cha: 8,
      });
      const result = ValidationService.validatePointBuy(scores, 15);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should validate 20-point buy correctly', () => {
      const scores = createMockAbilityScores({
        str: 15,
        dex: 14,
        con: 13,
        int: 12,
        wis: 10,
        cha: 8,
      });
      const result = ValidationService.validatePointBuy(scores, 20);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should validate 25-point buy correctly', () => {
      const scores = createMockAbilityScores({
        str: 16,
        dex: 14,
        con: 14,
        int: 13,
        wis: 12,
        cha: 8,
      });
      const result = ValidationService.validatePointBuy(scores, 25);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should reject over-spent points', () => {
      const scores = createMockAbilityScores({
        str: 18,
        dex: 18,
        con: 18,
        int: 18,
        wis: 18,
        cha: 18,
      });
      const result = ValidationService.validatePointBuy(scores, 20);
      expect(result.isValid).toBe(false);
      expect(result.errors[0]).toContain('Point buy exceeds limit');
    });

    test('should reject scores below 7 or above 18', () => {
      const scores = createMockAbilityScores({
        str: 6,
        dex: 19,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10,
      });
      const result = ValidationService.validatePointBuy(scores, 20);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('STR score 6 is outside point buy range (7-18)');
      expect(result.errors).toContain('DEX score 19 is outside point buy range (7-18)');
    });

    test('should reject unreasonable custom point totals', () => {
      const scores = createMockAbilityScores({
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10,
      });
      const negativeResult = ValidationService.validatePointBuy(scores, -5);
      expect(negativeResult.isValid).toBe(false);

      const extremeResult = ValidationService.validatePointBuy(scores, 200);
      expect(extremeResult.isValid).toBe(false);
    });
  });

  describe('validateRolledStats', () => {
    test('should accept valid 3d6 rolls', () => {
      const scores = createMockAbilityScores({
        str: 15,
        dex: 12,
        con: 10,
        int: 8,
        wis: 16,
        cha: 13,
      });
      const rollHistory = [
        { ability: 'str', rolls: [5, 4, 6], total: 15, timestamp: new Date() },
        { ability: 'dex', rolls: [4, 4, 4], total: 12, timestamp: new Date() },
        { ability: 'con', rolls: [3, 3, 4], total: 10, timestamp: new Date() },
        { ability: 'int', rolls: [2, 3, 3], total: 8, timestamp: new Date() },
        { ability: 'wis', rolls: [6, 4, 6], total: 16, timestamp: new Date() },
        { ability: 'cha', rolls: [5, 3, 5], total: 13, timestamp: new Date() },
      ];

      const result = ValidationService.validateRolledStats(scores, rollHistory);
      expect(result.isValid).toBe(true);
    });

    test('should verify roll history matches final scores', () => {
      const scores = createMockAbilityScores({
        str: 15,
        dex: 12,
        con: 10,
        int: 8,
        wis: 16,
        cha: 13,
      });
      const rollHistory = [
        { ability: 'str', rolls: [5, 4, 6], total: 14, timestamp: new Date() }, // Wrong total!
        { ability: 'dex', rolls: [4, 4, 4], total: 12, timestamp: new Date() },
      ];

      const result = ValidationService.validateRolledStats(scores, rollHistory);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain("STR score 15 doesn't match roll total 14");
    });

    test('should handle missing roll history', () => {
      const scores = createMockAbilityScores({
        str: 15,
        dex: 12,
        con: 10,
        int: 8,
        wis: 16,
        cha: 13,
      });
      const result = ValidationService.validateRolledStats(scores, []);
      expect(result.isValid).toBe(true);
      expect(result.warnings).toContain(
        'No roll history provided - cannot verify legitimacy of rolled stats',
      );
    });
  });

  describe('validateCharacterName', () => {
    test('should accept valid names', () => {
      const result = ValidationService.validateCharacterName('Aragorn');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should reject empty names', () => {
      const result = ValidationService.validateCharacterName('');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Character name is required');
    });

    test('should reject very long names', () => {
      const longName = 'A'.repeat(60);
      const result = ValidationService.validateCharacterName(longName);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Character name must be 50 characters or less');
    });

    test('should warn about moderately long names', () => {
      const longName = 'A'.repeat(35);
      const result = ValidationService.validateCharacterName(longName);
      expect(result.isValid).toBe(true);
      expect(result.warnings).toContain('Character name is quite long');
    });

    test('should reject invalid characters', () => {
      const result = ValidationService.validateCharacterName('Test<>Character');
      expect(result.isValid).toBe(false);
      expect(result.errors[0]).toContain('Character name contains invalid characters');
    });

    test('should warn about test names', () => {
      const result = ValidationService.validateCharacterName('Test Character');
      expect(result.isValid).toBe(true);
      expect(result.warnings).toContain('Name suggests this might be a test character');
    });

    test('should warn about numeric names', () => {
      const result = ValidationService.validateCharacterName('12345');
      expect(result.isValid).toBe(true);
      expect(result.warnings).toContain('Name is only numbers');
    });
  });

  describe('validateRaceClassCombination', () => {
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

    test('should accept valid race/class combinations', () => {
      const result = ValidationService.validateRaceClassCombination(mockRace, 'Fighter');
      expect(result.isValid).toBe(true);
    });

    test('should reject missing race', () => {
      const result = ValidationService.validateRaceClassCombination(null as any, 'Fighter');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Race is required');
    });

    test('should reject missing class', () => {
      const result = ValidationService.validateRaceClassCombination(mockRace, '');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Class is required');
    });

    test('should warn about unusual race/class combinations', () => {
      const elfRace: Race = {
        ...mockRace,
        name: 'Elf',
        abilityModifiers: { dex: 2, con: -2 },
      };

      const result = ValidationService.validateRaceClassCombination(elfRace, 'Barbarian');
      expect(result.isValid).toBe(true);
      expect(result.warnings.length).toBeGreaterThan(0);
    });
  });

  describe('validateDiceFormula', () => {
    test('should accept valid dice formulas', () => {
      const validFormulas = ['3d6', '4d6k3', '2d8+1', '1d20-2'];

      validFormulas.forEach((formula) => {
        const result = ValidationService.validateDiceFormula(formula);
        expect(result.isValid).toBe(true);
      });
    });

    test('should reject invalid dice formulas', () => {
      const invalidFormulas = ['invalid', '3x6', 'd6', '3d', 'abc'];

      invalidFormulas.forEach((formula) => {
        const result = ValidationService.validateDiceFormula(formula);
        expect(result.isValid).toBe(false);
        expect(result.errors[0]).toContain('Invalid dice formula format');
      });
    });

    test('should reject extreme values', () => {
      const extremeFormulas = ['0d6', '25d6', '3d1', '3d200'];

      extremeFormulas.forEach((formula) => {
        const result = ValidationService.validateDiceFormula(formula);
        expect(result.isValid).toBe(false);
      });
    });

    test('should reject invalid keep values', () => {
      const result1 = ValidationService.validateDiceFormula('4d6k0');
      expect(result1.isValid).toBe(false);
      expect(result1.errors).toContain('Keep value must be at least 1 (got 0)');

      const result2 = ValidationService.validateDiceFormula('4d6k5');
      expect(result2.isValid).toBe(false);
      expect(result2.errors).toContain('Cannot keep more dice (5) than rolled (4)');
    });

    test('should warn about unusual dice combinations', () => {
      const result1 = ValidationService.validateDiceFormula('3d7');
      expect(result1.isValid).toBe(true);
      expect(result1.warnings).toContain('Unusual die size: d7');

      const result2 = ValidationService.validateDiceFormula('15d6');
      expect(result2.isValid).toBe(true);
      expect(result2.warnings).toContain('Rolling many dice (15) - this may be slow');

      const result3 = ValidationService.validateDiceFormula('4d6k4');
      expect(result3.isValid).toBe(true);
      expect(result3.warnings).toContain("Keeping all dice (4/4) - consider removing 'k' modifier");
    });

    test('should handle whitespace in formulas', () => {
      const result = ValidationService.validateDiceFormula(' 4d6k3 + 2 ');
      expect(result.isValid).toBe(true);
    });

    test('should reject empty formulas', () => {
      const result = ValidationService.validateDiceFormula('');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Dice formula is required');
    });
  });

  describe('validateAbilityScores by method', () => {
    test('should validate point buy scores correctly', () => {
      const scores = createMockAbilityScores({
        str: 15,
        dex: 14,
        con: 13,
        int: 12,
        wis: 10,
        cha: 8,
      });
      const result = ValidationService.validateAbilityScores(scores, AbilityScoreMethod.PointBuy);
      expect(result.isValid).toBe(true);
    });

    test('should validate 3d6 rolled scores correctly', () => {
      const scores = createMockAbilityScores({
        str: 16,
        dex: 12,
        con: 8,
        int: 14,
        wis: 10,
        cha: 6,
      });
      const result = ValidationService.validateAbilityScores(scores, AbilityScoreMethod.Roll3d6);
      expect(result.isValid).toBe(true);
    });

    test('should reject scores outside method ranges', () => {
      const scores = createMockAbilityScores({
        str: 3,
        dex: 14,
        con: 13,
        int: 12,
        wis: 10,
        cha: 8,
      });
      const result = ValidationService.validateAbilityScores(scores, AbilityScoreMethod.PointBuy);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('STR must be between 7-18 for point buy (got 3)');
    });

    test('should warn about very low or high scores', () => {
      const scores = createMockAbilityScores({
        str: 6,
        dex: 18,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10,
      });
      const result = ValidationService.validateAbilityScores(scores, AbilityScoreMethod.Roll3d6);
      expect(result.isValid).toBe(true);
      expect(result.warnings).toContain('STR of 6 is very low and may severely impact gameplay');
      expect(result.warnings).toContain('DEX of 18 is very high');
    });

    test('should reject zero constitution', () => {
      const scores = createMockAbilityScores({
        str: 10,
        dex: 10,
        con: 0,
        int: 10,
        wis: 10,
        cha: 10,
      });
      const result = ValidationService.validateAbilityScores(scores, AbilityScoreMethod.PointBuy);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain(
        'Constitution cannot be 0 or negative (character would be dead)',
      );
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
