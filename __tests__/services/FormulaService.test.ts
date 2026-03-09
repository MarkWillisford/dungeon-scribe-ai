import { FormulaService, type FormulaContext } from '@services/FormulaService';
import { Size } from '@/types/base';

const baseContext: FormulaContext = {
  BAB: 6,
  level: 8,
  str: 18,
  dex: 14,
  con: 12,
  int: 10,
  wis: 13,
  cha: 8,
  strMod: 4,
  dexMod: 2,
  conMod: 1,
  intMod: 0,
  wisMod: 1,
  chaMod: -1,
  size: 0,
};

describe('FormulaService', () => {
  describe('evaluate', () => {
    test('evaluates simple numbers', () => {
      expect(FormulaService.evaluate('42', baseContext)).toBe(42);
      expect(FormulaService.evaluate('3.5', baseContext)).toBe(3.5);
    });

    test('evaluates basic arithmetic', () => {
      expect(FormulaService.evaluate('2 + 3', baseContext)).toBe(5);
      expect(FormulaService.evaluate('10 - 4', baseContext)).toBe(6);
      expect(FormulaService.evaluate('3 * 4', baseContext)).toBe(12);
      expect(FormulaService.evaluate('10 / 2', baseContext)).toBe(5);
    });

    test('respects operator precedence', () => {
      expect(FormulaService.evaluate('2 + 3 * 4', baseContext)).toBe(14);
      expect(FormulaService.evaluate('10 - 2 * 3', baseContext)).toBe(4);
    });

    test('handles parentheses', () => {
      expect(FormulaService.evaluate('(2 + 3) * 4', baseContext)).toBe(20);
      expect(FormulaService.evaluate('((1 + 2) * (3 + 4))', baseContext)).toBe(21);
    });

    test('handles unary negation', () => {
      expect(FormulaService.evaluate('-5', baseContext)).toBe(-5);
      expect(FormulaService.evaluate('-(2 + 3)', baseContext)).toBe(-5);
      expect(FormulaService.evaluate('-BAB', baseContext)).toBe(-6);
    });

    test('resolves variables from context', () => {
      expect(FormulaService.evaluate('BAB', baseContext)).toBe(6);
      expect(FormulaService.evaluate('level', baseContext)).toBe(8);
      expect(FormulaService.evaluate('strMod', baseContext)).toBe(4);
      expect(FormulaService.evaluate('chaMod', baseContext)).toBe(-1);
    });

    test('evaluates floor function', () => {
      expect(FormulaService.evaluate('floor(BAB / 4)', baseContext)).toBe(1);
      expect(FormulaService.evaluate('floor(7 / 2)', baseContext)).toBe(3);
    });

    test('evaluates ceil function', () => {
      expect(FormulaService.evaluate('ceil(7 / 2)', baseContext)).toBe(4);
      expect(FormulaService.evaluate('ceil(level / 3)', baseContext)).toBe(3);
    });

    test('evaluates max function', () => {
      expect(FormulaService.evaluate('max(3, level)', baseContext)).toBe(8);
      expect(FormulaService.evaluate('max(3, 1)', baseContext)).toBe(3);
    });

    test('evaluates min function', () => {
      expect(FormulaService.evaluate('min(dexMod, 5)', baseContext)).toBe(2);
      expect(FormulaService.evaluate('min(10, 5)', baseContext)).toBe(5);
    });

    test('evaluates abs function', () => {
      expect(FormulaService.evaluate('abs(-3)', baseContext)).toBe(3);
      expect(FormulaService.evaluate('abs(chaMod)', baseContext)).toBe(1);
    });

    test('evaluates Power Attack formula', () => {
      // -(floor(BAB/4) + 1) = -(floor(6/4) + 1) = -(1 + 1) = -2
      expect(FormulaService.evaluate('-(floor(BAB / 4) + 1)', baseContext)).toBe(-2);
      // (floor(BAB/4) + 1) * 2 = (1 + 1) * 2 = 4
      expect(FormulaService.evaluate('(floor(BAB / 4) + 1) * 2', baseContext)).toBe(4);
    });

    test('evaluates Toughness formula', () => {
      // max(3, level) with level=8 → 8
      expect(FormulaService.evaluate('max(3, level)', baseContext)).toBe(8);
      // max(3, level) with level=1 → 3
      const lowLevel = { ...baseContext, level: 1 };
      expect(FormulaService.evaluate('max(3, level)', lowLevel)).toBe(3);
    });

    test('division by zero returns 0', () => {
      expect(FormulaService.evaluate('5 / 0', baseContext)).toBe(0);
    });

    test('throws on unknown variable', () => {
      expect(() => FormulaService.evaluate('unknownVar', baseContext)).toThrow('Unknown variable');
    });

    test('throws on unexpected character', () => {
      expect(() => FormulaService.evaluate('2 & 3', baseContext)).toThrow('Unexpected character');
    });

    test('throws on unexpected end of expression', () => {
      expect(() => FormulaService.evaluate('2 +', baseContext)).toThrow();
    });
  });

  describe('resolveValue', () => {
    test('returns number values as-is', () => {
      expect(FormulaService.resolveValue(5, baseContext)).toBe(5);
      expect(FormulaService.resolveValue(-3, baseContext)).toBe(-3);
      expect(FormulaService.resolveValue(0, baseContext)).toBe(0);
    });

    test('evaluates string formulas', () => {
      expect(FormulaService.resolveValue('BAB + 2', baseContext)).toBe(8);
      expect(FormulaService.resolveValue('floor(level / 2)', baseContext)).toBe(4);
    });
  });

  describe('getSizeModifier', () => {
    test('returns correct size modifiers', () => {
      expect(FormulaService.getSizeModifier(Size.Fine)).toBe(8);
      expect(FormulaService.getSizeModifier(Size.Small)).toBe(1);
      expect(FormulaService.getSizeModifier(Size.Medium)).toBe(0);
      expect(FormulaService.getSizeModifier(Size.Large)).toBe(-1);
      expect(FormulaService.getSizeModifier(Size.Colossal)).toBe(-8);
    });
  });
});
