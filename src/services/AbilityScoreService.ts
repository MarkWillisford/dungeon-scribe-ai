import { AbilityScores, AbilityScore } from '@/types/abilities';
import { AbilityScoreMethod, DiceRoll } from '@/types/character';
import { ValidationResult, DiceParseResult, RollStatistics } from '@/types/validation';

export class AbilityScoreService {
  // Point Buy Constants
  private static readonly POINT_BUY_PRESETS = [
    { name: 'Low Fantasy', points: 15 },
    { name: 'Standard Fantasy', points: 20 },
    { name: 'High Fantasy', points: 25 },
  ];

  private static readonly POINT_BUY_COSTS = new Map([
    [7, -4],
    [8, -2],
    [9, -1],
    [10, 0],
    [11, 1],
    [12, 2],
    [13, 3],
    [14, 5],
    [15, 7],
    [16, 10],
    [17, 13],
    [18, 17],
  ]);

  private static readonly MIN_CUSTOM_POINTS = 5;
  private static readonly MAX_CUSTOM_POINTS = 50;

  // Point Buy Methods
  static validatePointBuy(scores: AbilityScores, totalPoints: number): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    let totalCost = 0;
    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;

    for (const ability of abilities) {
      const baseScore = scores[ability].base;

      // Validate score range
      if (baseScore < 7 || baseScore > 18) {
        errors.push(`${ability.toUpperCase()} score ${baseScore} is outside valid range (7-18)`);
        continue;
      }

      // Calculate point cost
      const cost = this.POINT_BUY_COSTS.get(baseScore);
      if (cost === undefined) {
        errors.push(`Invalid ${ability.toUpperCase()} score for point buy: ${baseScore}`);
        continue;
      }

      totalCost += cost;
    }

    // Check total points
    if (totalCost > totalPoints) {
      errors.push(`Point buy exceeds limit: ${totalCost}/${totalPoints} points used`);
    } else if (totalCost < totalPoints - 2) {
      warnings.push(`${totalPoints - totalCost} unused points remaining`);
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }

  static calculatePointCost(score: number): number {
    return this.POINT_BUY_COSTS.get(score) ?? 0;
  }

  static getPointBuyPresets(): { name: string; points: number }[] {
    return [...this.POINT_BUY_PRESETS];
  }

  static validateCustomPointBuy(totalPoints: number): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (totalPoints < this.MIN_CUSTOM_POINTS) {
      errors.push(`Custom point buy too low: ${totalPoints} (minimum: ${this.MIN_CUSTOM_POINTS})`);
    } else if (totalPoints > this.MAX_CUSTOM_POINTS) {
      errors.push(`Custom point buy too high: ${totalPoints} (maximum: ${this.MAX_CUSTOM_POINTS})`);
    }

    // Warning thresholds that don't conflict with valid range
    if (totalPoints < 15 && totalPoints >= this.MIN_CUSTOM_POINTS) {
      warnings.push('Very low point buy may result in weak characters');
    } else if (totalPoints > 30 && totalPoints <= this.MAX_CUSTOM_POINTS) {
      warnings.push('Very high point buy may result in overpowered characters');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }

  static getPointBuyRange(): { min: number; max: number } {
    return {
      min: this.MIN_CUSTOM_POINTS,
      max: this.MAX_CUSTOM_POINTS,
    };
  }

  // Dice Rolling Methods
  static roll3d6(): DiceRoll {
    const rolls = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];

    return {
      ability: '',
      rolls,
      total: rolls.reduce((sum, roll) => sum + roll, 0),
      timestamp: new Date(),
    };
  }

  static roll4d6DropLowest(): DiceRoll {
    const rolls = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];

    // Sort and drop the lowest
    rolls.sort((a, b) => b - a);
    const keptRolls = rolls.slice(0, 3);

    return {
      ability: '',
      rolls: keptRolls,
      total: keptRolls.reduce((sum, roll) => sum + roll, 0),
      timestamp: new Date(),
    };
  }

  static rollCustomDice(formula: string): DiceRoll {
    const parsed = this.parseDiceFormula(formula);

    if (!parsed) {
      throw new Error(`Invalid dice formula: ${formula}`);
    }

    const allRolls: number[] = [];
    for (let i = 0; i < parsed.count; i++) {
      allRolls.push(Math.floor(Math.random() * parsed.sides) + 1);
    }

    // Apply keep highest if specified
    let finalRolls = allRolls;
    if (parsed.keep && parsed.keep < allRolls.length) {
      allRolls.sort((a, b) => b - a);
      finalRolls = allRolls.slice(0, parsed.keep);
    }

    let total = finalRolls.reduce((sum, roll) => sum + roll, 0);

    // Apply modifier if specified
    if (parsed.modifier) {
      total += parsed.modifier;
    }

    return {
      ability: '',
      rolls: finalRolls,
      total,
      timestamp: new Date(),
    };
  }

  static rollAllAbilities(method: AbilityScoreMethod): { [key: string]: DiceRoll } {
    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    const results: { [key: string]: DiceRoll } = {};

    for (const ability of abilities) {
      let roll: DiceRoll;

      switch (method) {
        case AbilityScoreMethod.Roll3d6:
          roll = this.roll3d6();
          break;
        case AbilityScoreMethod.Roll4d6DropLowest:
          roll = this.roll4d6DropLowest();
          break;
        default:
          throw new Error(`Unsupported rolling method: ${method}`);
      }

      roll.ability = ability;
      results[ability] = roll;
    }

    return results;
  }

  // Utility Methods
  static parseDiceFormula(formula: string): DiceParseResult | null {
    // Remove spaces
    formula = formula.replace(/\s/g, '');

    // Pattern: XdY[kZ][+/-N]
    // Examples: 4d6k3, 3d6+1, 2d8-1, 4d6k3+2
    const match = formula.match(/^(\d+)d(\d+)(?:k(\d+))?([+-]\d+)?$/i);

    if (!match) {
      return null;
    }

    const count = parseInt(match[1], 10);
    const sides = parseInt(match[2], 10);
    const keep = match[3] ? parseInt(match[3], 10) : undefined;
    const modifier = match[4] ? parseInt(match[4], 10) : undefined;

    // Validate
    if (count < 1 || count > 20 || sides < 2 || sides > 100) {
      return null;
    }

    if (keep && (keep < 1 || keep > count)) {
      return null;
    }

    return { count, sides, keep, modifier };
  }

  static simulateRoll(count: number, sides: number, keep?: number): number[] {
    const rolls: number[] = [];
    for (let i = 0; i < count; i++) {
      rolls.push(Math.floor(Math.random() * sides) + 1);
    }

    if (keep && keep < rolls.length) {
      rolls.sort((a, b) => b - a);
      return rolls.slice(0, keep);
    }

    return rolls;
  }

  static calculateStatistics(rolls: DiceRoll[]): RollStatistics {
    if (rolls.length === 0) {
      return { average: 0, min: 0, max: 0, standardDeviation: 0 };
    }

    const totals = rolls.map((roll) => roll.total);
    const min = Math.min(...totals);
    const max = Math.max(...totals);
    const average = totals.reduce((sum, total) => sum + total, 0) / totals.length;

    // Calculate standard deviation
    const variance =
      totals.reduce((sum, total) => {
        return sum + Math.pow(total - average, 2);
      }, 0) / totals.length;
    const standardDeviation = Math.sqrt(variance);

    return { average, min, max, standardDeviation };
  }

  // Ability Score Helper Methods
  static createDefaultAbilityScore(base: number = 10): AbilityScore {
    return {
      base,
      racial: 0,
      inherent: 0,
      damage: 0,
      drain: 0,
      bonuses: {
        enhancement: [],
        morale: [],
        size: [],
        alchemical: [],
        insight: [],
        profane: [],
        sacred: [],
        luck: [],
        circumstance: [],
        competence: [],
        untyped: [],
      },
      total: base,
      modifier: Math.floor((base - 10) / 2),
      tempTotal: base,
      tempModifier: Math.floor((base - 10) / 2),
    };
  }

  static calculateAbilityModifier(score: number): number {
    return Math.floor((score - 10) / 2);
  }

  static createAbilityScoresFromRolls(rolls: { [key: string]: DiceRoll }): AbilityScores {
    return {
      str: this.createDefaultAbilityScore(rolls.str?.total || 10),
      dex: this.createDefaultAbilityScore(rolls.dex?.total || 10),
      con: this.createDefaultAbilityScore(rolls.con?.total || 10),
      int: this.createDefaultAbilityScore(rolls.int?.total || 10),
      wis: this.createDefaultAbilityScore(rolls.wis?.total || 10),
      cha: this.createDefaultAbilityScore(rolls.cha?.total || 10),
    };
  }
}
