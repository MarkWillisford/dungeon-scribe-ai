import { DiceService } from '@services/DiceService';

describe('DiceService', () => {
  // ----------------------------------------------------------------
  // parse
  // ----------------------------------------------------------------
  describe('parse', () => {
    it('parses standard notation: 2d6+3', () => {
      const expr = DiceService.parse('2d6+3');
      expect(expr.count).toBe(2);
      expect(expr.sides).toBe(6);
      expect(expr.modifier).toBe(3);
      expect(expr.notation).toBe('2d6+3');
    });

    it('parses d20 (implicit count of 1)', () => {
      const expr = DiceService.parse('d20');
      expect(expr.count).toBe(1);
      expect(expr.sides).toBe(20);
      expect(expr.modifier).toBe(0);
    });

    it('parses 1d20 explicitly', () => {
      const expr = DiceService.parse('1d20');
      expect(expr.count).toBe(1);
      expect(expr.sides).toBe(20);
      expect(expr.modifier).toBe(0);
    });

    it('parses negative modifier: d8-1', () => {
      const expr = DiceService.parse('d8-1');
      expect(expr.count).toBe(1);
      expect(expr.sides).toBe(8);
      expect(expr.modifier).toBe(-1);
    });

    it('parses 4d6 with no modifier', () => {
      const expr = DiceService.parse('4d6');
      expect(expr.count).toBe(4);
      expect(expr.sides).toBe(6);
      expect(expr.modifier).toBe(0);
    });

    it('parses 1d100', () => {
      const expr = DiceService.parse('1d100');
      expect(expr.count).toBe(1);
      expect(expr.sides).toBe(100);
      expect(expr.modifier).toBe(0);
    });

    it('is case-insensitive', () => {
      const expr = DiceService.parse('2D6+3');
      expect(expr.count).toBe(2);
      expect(expr.sides).toBe(6);
    });

    it('trims whitespace', () => {
      const expr = DiceService.parse('  2d6+3  ');
      expect(expr.count).toBe(2);
    });

    it('throws on invalid notation', () => {
      expect(() => DiceService.parse('abc')).toThrow();
      expect(() => DiceService.parse('2+3')).toThrow();
      expect(() => DiceService.parse('')).toThrow();
    });

    it('throws when sides < 2', () => {
      expect(() => DiceService.parse('1d1')).toThrow();
    });
  });

  // ----------------------------------------------------------------
  // roll
  // ----------------------------------------------------------------
  describe('roll', () => {
    it('rolls the correct number of dice', () => {
      const expr = DiceService.parse('4d6');
      const result = DiceService.roll(expr);
      expect(result.rolls).toHaveLength(4);
    });

    it('each die result is within valid range', () => {
      const expr = DiceService.parse('100d20');
      const result = DiceService.roll(expr);
      for (const r of result.rolls) {
        expect(r).toBeGreaterThanOrEqual(1);
        expect(r).toBeLessThanOrEqual(20);
      }
    });

    it('subtotal equals sum of rolls', () => {
      const expr = DiceService.parse('3d6');
      const result = DiceService.roll(expr);
      const expected = result.rolls.reduce((a, b) => a + b, 0);
      expect(result.subtotal).toBe(expected);
    });

    it('total equals subtotal + modifier', () => {
      const expr = DiceService.parse('2d6+3');
      const result = DiceService.roll(expr);
      expect(result.total).toBe(result.subtotal + 3);
    });

    it('handles negative modifier', () => {
      const expr = DiceService.parse('1d4-1');
      const result = DiceService.roll(expr);
      expect(result.total).toBe(result.subtotal - 1);
    });

    it('total can be as low as (count + modifier) for minimum rolls', () => {
      // d2-1 minimum is 0
      const expr = DiceService.parse('1d2-1');
      // Run many times to check minimum is never below 0
      for (let i = 0; i < 100; i++) {
        const result = DiceService.roll(expr);
        expect(result.total).toBeGreaterThanOrEqual(0);
        expect(result.total).toBeLessThanOrEqual(1);
      }
    });
  });

  // ----------------------------------------------------------------
  // rollNotation
  // ----------------------------------------------------------------
  describe('rollNotation', () => {
    it('parses and rolls in one call', () => {
      const result = DiceService.rollNotation('1d20');
      expect(result.rolls).toHaveLength(1);
      expect(result.rolls[0]).toBeGreaterThanOrEqual(1);
      expect(result.rolls[0]).toBeLessThanOrEqual(20);
    });
  });

  // ----------------------------------------------------------------
  // rollD20
  // ----------------------------------------------------------------
  describe('rollD20', () => {
    it('returns a value between 1 and 20', () => {
      for (let i = 0; i < 50; i++) {
        const roll = DiceService.rollD20();
        expect(roll).toBeGreaterThanOrEqual(1);
        expect(roll).toBeLessThanOrEqual(20);
      }
    });
  });

  // ----------------------------------------------------------------
  // applyModifiers
  // ----------------------------------------------------------------
  describe('applyModifiers', () => {
    it('adds modifier entries to the raw roll', () => {
      const { total } = DiceService.applyModifiers(14, [
        { label: 'BAB', value: 6 },
        { label: 'STR', value: 3 },
      ]);
      expect(total).toBe(23);
    });

    it('handles negative entries', () => {
      const { total } = DiceService.applyModifiers(14, [
        { label: 'BAB', value: 6 },
        { label: 'Power Attack', value: -3 },
      ]);
      expect(total).toBe(17);
    });

    it('returns breakdown with raw roll on first line', () => {
      const { breakdown } = DiceService.applyModifiers(14, [
        { label: 'BAB', value: 6 },
        { label: 'STR', value: 3 },
      ]);
      expect(breakdown[0]).toBe('d20: 14');
      expect(breakdown[1]).toBe('BAB: +6');
      expect(breakdown[2]).toBe('STR: +3');
    });

    it('omits zero-value entries from breakdown', () => {
      const { breakdown } = DiceService.applyModifiers(14, [
        { label: 'BAB', value: 6 },
        { label: 'Size', value: 0 },
      ]);
      expect(breakdown).toHaveLength(2);
    });
  });

  // ----------------------------------------------------------------
  // isCriticalHit / isCriticalFail
  // ----------------------------------------------------------------
  describe('isCriticalHit', () => {
    it('returns true only for 20', () => {
      expect(DiceService.isCriticalHit(20)).toBe(true);
      expect(DiceService.isCriticalHit(19)).toBe(false);
      expect(DiceService.isCriticalHit(1)).toBe(false);
    });
  });

  describe('isCriticalFail', () => {
    it('returns true only for 1', () => {
      expect(DiceService.isCriticalFail(1)).toBe(true);
      expect(DiceService.isCriticalFail(2)).toBe(false);
      expect(DiceService.isCriticalFail(20)).toBe(false);
    });
  });

  // ----------------------------------------------------------------
  // buildNotation
  // ----------------------------------------------------------------
  describe('buildNotation', () => {
    it('builds notation with positive modifier', () => {
      expect(DiceService.buildNotation(1, 20, 9)).toBe('1d20+9');
    });

    it('builds notation with negative modifier', () => {
      expect(DiceService.buildNotation(2, 6, -2)).toBe('2d6-2');
    });

    it('builds notation with zero modifier', () => {
      expect(DiceService.buildNotation(4, 6, 0)).toBe('4d6');
    });
  });

  // ----------------------------------------------------------------
  // formatBreakdown
  // ----------------------------------------------------------------
  describe('formatBreakdown', () => {
    it('formats single die result', () => {
      const result = DiceService.rollNotation('1d20');
      const lines = DiceService.formatBreakdown(result);
      expect(lines[0]).toMatch(/^d20: \d+$/);
    });

    it('formats multi-die result showing individual rolls', () => {
      const result = DiceService.rollNotation('3d6');
      const lines = DiceService.formatBreakdown(result);
      expect(lines[0]).toMatch(/^3d6: \[/);
    });

    it('includes bonus entries', () => {
      const result = DiceService.rollNotation('1d20');
      const lines = DiceService.formatBreakdown(result, [{ label: 'STR', value: 4 }]);
      expect(lines.some((l) => l.includes('STR: +4'))).toBe(true);
    });

    it('includes expression modifier', () => {
      const result = DiceService.rollNotation('2d6+3');
      const lines = DiceService.formatBreakdown(result);
      expect(lines.some((l) => l.includes('Modifier: +3'))).toBe(true);
    });

    it('omits modifier line when modifier is 0', () => {
      const result = DiceService.rollNotation('1d20');
      const lines = DiceService.formatBreakdown(result);
      expect(lines.every((l) => !l.includes('Modifier'))).toBe(true);
    });
  });
});
