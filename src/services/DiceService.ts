import { BreakdownEntry, DiceExpression, DiceResult } from '@/types/dice';

export class DiceService {
  /**
   * Parse a dice notation string into a structured DiceExpression.
   * Supports: "d20", "1d20", "2d6+3", "d8-1", "4d6", "1d100"
   */
  static parse(notation: string): DiceExpression {
    const normalized = notation.trim().toLowerCase();
    const match = normalized.match(/^(\d*)d(\d+)([+-]\d+)?$/);
    if (!match) {
      throw new Error(`Invalid dice notation: "${notation}"`);
    }
    const count = match[1] ? parseInt(match[1], 10) : 1;
    const sides = parseInt(match[2], 10);
    const modifier = match[3] ? parseInt(match[3], 10) : 0;

    if (count < 1) throw new Error(`Dice count must be at least 1: "${notation}"`);
    if (sides < 2) throw new Error(`Dice must have at least 2 sides: "${notation}"`);

    return { count, sides, modifier, notation };
  }

  /**
   * Roll a parsed DiceExpression. Returns individual die results and the total.
   */
  static roll(expr: DiceExpression): DiceResult {
    const rolls: number[] = [];
    for (let i = 0; i < expr.count; i++) {
      rolls.push(Math.floor(Math.random() * expr.sides) + 1);
    }
    const subtotal = rolls.reduce((sum, r) => sum + r, 0);
    return {
      expression: expr,
      rolls,
      subtotal,
      total: subtotal + expr.modifier,
    };
  }

  /**
   * Parse and roll in one call.
   */
  static rollNotation(notation: string): DiceResult {
    return this.roll(this.parse(notation));
  }

  /**
   * Roll a d20 and return the result without any modifier applied.
   * The modifier is tracked separately in breakdown entries.
   */
  static rollD20(): number {
    return Math.floor(Math.random() * 20) + 1;
  }

  /**
   * Apply a raw roll (from physical dice or rollD20) plus a list of breakdown entries
   * to produce a final total and formatted breakdown strings.
   */
  static applyModifiers(
    rawRoll: number,
    entries: BreakdownEntry[],
  ): { total: number; breakdown: string[] } {
    const modifier = entries.reduce((sum, e) => sum + e.value, 0);
    const total = rawRoll + modifier;

    const breakdown: string[] = [`d20: ${rawRoll}`];
    for (const entry of entries) {
      if (entry.value !== 0) {
        const sign = entry.value > 0 ? '+' : '';
        breakdown.push(`${entry.label}: ${sign}${entry.value}`);
      }
    }

    return { total, breakdown };
  }

  /**
   * Format a DiceResult into breakdown strings for display.
   * Uses the dice result's rolls and any additional named bonus entries.
   */
  static formatBreakdown(result: DiceResult, bonusEntries: BreakdownEntry[] = []): string[] {
    const { expression, rolls } = result;
    const lines: string[] = [];

    if (expression.count === 1) {
      lines.push(`d${expression.sides}: ${rolls[0]}`);
    } else {
      lines.push(
        `${expression.count}d${expression.sides}: [${rolls.join(', ')}] = ${result.subtotal}`,
      );
    }

    for (const entry of bonusEntries) {
      if (entry.value !== 0) {
        const sign = entry.value > 0 ? '+' : '';
        lines.push(`${entry.label}: ${sign}${entry.value}`);
      }
    }

    if (expression.modifier !== 0) {
      const sign = expression.modifier > 0 ? '+' : '';
      lines.push(`Modifier: ${sign}${expression.modifier}`);
    }

    return lines;
  }

  /**
   * True if the raw d20 roll is a natural 20.
   */
  static isCriticalHit(rawRoll: number): boolean {
    return rawRoll === 20;
  }

  /**
   * True if the raw d20 roll is a natural 1.
   */
  static isCriticalFail(rawRoll: number): boolean {
    return rawRoll === 1;
  }

  /**
   * Build a dice notation string from parts. Useful for display.
   * e.g. buildNotation(1, 20, 9) → "1d20+9"
   */
  static buildNotation(count: number, sides: number, modifier: number): string {
    const base = `${count}d${sides}`;
    if (modifier === 0) return base;
    return modifier > 0 ? `${base}+${modifier}` : `${base}${modifier}`;
  }
}
