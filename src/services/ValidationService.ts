import { AbilityScores } from '@/types/abilities';
import { Race } from '@/types/race';
import { AbilityScoreMethod, DiceRoll } from '@/types/character';
import { ValidationResult } from '@/types/validation';

export class ValidationService {
  /**
   * Validates ability scores based on the generation method used
   */
  static validateAbilityScores(
    scores: AbilityScores,
    method: AbilityScoreMethod,
  ): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;

    // Common validations for all methods
    for (const ability of abilities) {
      const score = scores[ability].base;

      // Basic range check
      if (score < 1) {
        errors.push(`${ability.toUpperCase()} cannot be less than 1`);
      } else if (score > 25) {
        errors.push(`${ability.toUpperCase()} cannot be greater than 25`);
      }

      // Method-specific range checks
      switch (method) {
        case AbilityScoreMethod.PointBuy:
          if (score < 7 || score > 18) {
            errors.push(
              `${ability.toUpperCase()} must be between 7-18 for point buy (got ${score})`,
            );
          }
          break;

        case AbilityScoreMethod.Roll3d6:
          if (score < 3 || score > 18) {
            errors.push(
              `${ability.toUpperCase()} must be between 3-18 for 3d6 rolls (got ${score})`,
            );
          }
          break;

        case AbilityScoreMethod.Roll4d6DropLowest:
          if (score < 3 || score > 18) {
            errors.push(
              `${ability.toUpperCase()} must be between 3-18 for 4d6 drop lowest (got ${score})`,
            );
          }
          break;
      }

      // Warning for very low stats
      if (score <= 6) {
        warnings.push(
          `${ability.toUpperCase()} of ${score} is very low and may severely impact gameplay`,
        );
      }

      // Warning for very high stats (if not point buy)
      if (score >= 18 && method !== AbilityScoreMethod.PointBuy) {
        warnings.push(`${ability.toUpperCase()} of ${score} is very high`);
      }
    }

    // Constitution-specific validation
    if (scores.con.base <= 0) {
      errors.push('Constitution cannot be 0 or negative (character would be dead)');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }

  /**
   * Validates point buy allocation
   */
  static validatePointBuy(scores: AbilityScores, points: number): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Point buy specific validations
    if (points < 0 || points > 100) {
      errors.push(`Invalid point buy total: ${points}`);
      return { isValid: false, errors, warnings };
    }

    // Calculate actual point cost
    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;
    let totalCost = 0;

    const pointCosts = new Map([
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

    for (const ability of abilities) {
      const score = scores[ability].base;

      if (score < 7 || score > 18) {
        errors.push(`${ability.toUpperCase()} score ${score} is outside point buy range (7-18)`);
        continue;
      }

      const cost = pointCosts.get(score);
      if (cost === undefined) {
        errors.push(`Invalid score for point buy: ${score}`);
        continue;
      }

      totalCost += cost;
    }

    // Check if points are properly allocated
    if (totalCost > points) {
      errors.push(`Point buy exceeds limit: ${totalCost}/${points} points used`);
    } else if (totalCost < points - 3) {
      warnings.push(
        `${points - totalCost} unused points remaining (consider optimizing allocation)`,
      );
    }

    // Check for unbalanced builds
    const maxScore = Math.max(...abilities.map((a) => scores[a].base));
    const minScore = Math.min(...abilities.map((a) => scores[a].base));

    if (maxScore - minScore > 11) {
      warnings.push('Very unbalanced ability spread detected');
    }

    // Check for dump stats
    abilities.forEach((ability) => {
      if (scores[ability].base <= 8) {
        warnings.push(
          `${ability.toUpperCase()} is very low (${scores[ability].base}) - consider if this fits your character concept`,
        );
      }
    });

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }

  /**
   * Validates rolled stats against their roll history
   */
  static validateRolledStats(scores: AbilityScores, rollHistory: DiceRoll[]): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (rollHistory.length === 0) {
      warnings.push('No roll history provided - cannot verify legitimacy of rolled stats');
      return { isValid: true, errors, warnings };
    }

    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;

    // Check that we have rolls for all abilities
    const rolledAbilities = new Set(rollHistory.map((roll) => roll.ability));
    const missingRolls = abilities.filter((ability) => !rolledAbilities.has(ability));

    if (missingRolls.length > 0) {
      errors.push(`Missing roll history for: ${missingRolls.join(', ')}`);
    }

    // Verify each roll matches the score
    for (const ability of abilities) {
      const roll = rollHistory.find((r) => r.ability === ability);
      const score = scores[ability].base;

      if (roll) {
        if (roll.total !== score) {
          errors.push(
            `${ability.toUpperCase()} score ${score} doesn't match roll total ${roll.total}`,
          );
        }

        // Validate roll components
        if (!this.validateRollComponents(roll)) {
          errors.push(
            `Invalid roll data for ${ability.toUpperCase()}: ${JSON.stringify(roll.rolls)}`,
          );
        }
      }
    }

    // Statistical analysis of rolls
    const rollTotals = rollHistory.map((roll) => roll.total);
    const average = rollTotals.reduce((sum, total) => sum + total, 0) / rollTotals.length;
    const standardStats = this.getExpectedRollStats(rollHistory[0]); // Assume all same method

    // Check if rolls are suspiciously high
    if (average > standardStats.expectedAverage + 2) {
      warnings.push(
        `Average roll (${average.toFixed(1)}) is higher than expected (${standardStats.expectedAverage.toFixed(1)})`,
      );
    }

    // Check for impossible rolls
    const impossibleRolls = rollHistory.filter(
      (roll) => roll.total > standardStats.maxPossible || roll.total < standardStats.minPossible,
    );

    if (impossibleRolls.length > 0) {
      errors.push(
        `Impossible roll totals detected: ${impossibleRolls.map((r) => `${r.ability}:${r.total}`).join(', ')}`,
      );
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }

  /**
   * Validates character name
   */
  static validateCharacterName(name: string): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Required
    if (!name || name.trim().length === 0) {
      errors.push('Character name is required');
      return { isValid: false, errors, warnings };
    }

    // Length checks
    if (name.length > 50) {
      errors.push('Character name must be 50 characters or less');
    } else if (name.length > 30) {
      warnings.push('Character name is quite long');
    }

    if (name.length < 2) {
      warnings.push('Character name is very short');
    }

    // Character restrictions
    const invalidChars = name.match(/[<>{}[\]\\\/|`~!@#$%^&*()+=]/g);
    if (invalidChars) {
      errors.push(
        `Character name contains invalid characters: ${[...new Set(invalidChars)].join('')}`,
      );
    }

    // Check for common problematic patterns
    if (name.toLowerCase().includes('test') || name.toLowerCase().includes('temp')) {
      warnings.push('Name suggests this might be a test character');
    }

    if (/^\d+$/.test(name)) {
      warnings.push('Name is only numbers');
    }

    if (name.trim() !== name) {
      warnings.push('Name has leading or trailing whitespace');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }

  /**
   * Validates race and class combination for any restrictions
   */
  static validateRaceClassCombination(race: Race, className: string): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Basic validation
    if (!race || !race.name) {
      errors.push('Race is required');
    }

    if (!className || className.trim().length === 0) {
      errors.push('Class is required');
    }

    if (errors.length > 0) {
      return { isValid: false, errors, warnings };
    }

    // Check for race/class synergy warnings
    this.checkRaceClassSynergy(race, className, warnings);

    // Check for ability score conflicts
    this.checkAbilityScoreConflicts(race, className, warnings);

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }

  /**
   * Validates dice formula syntax
   */
  static validateDiceFormula(formula: string): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!formula || formula.trim().length === 0) {
      errors.push('Dice formula is required');
      return { isValid: false, errors, warnings };
    }

    // Remove spaces and convert to lowercase
    const cleanFormula = formula.replace(/\s/g, '').toLowerCase();

    // Basic pattern: XdY[kZ][+/-N]
    const validPattern = /^(\d+)d(\d+)(?:k(\d+))?([+-]\d+)?$/;
    const match = cleanFormula.match(validPattern);

    if (!match) {
      errors.push(
        `Invalid dice formula format: "${formula}". Expected format: XdY[kZ][+/-N] (e.g., 4d6k3, 3d6+1)`,
      );
      return { isValid: false, errors, warnings };
    }

    const [, countStr, sidesStr, keepStr, modifierStr] = match;
    const count = parseInt(countStr, 10);
    const sides = parseInt(sidesStr, 10);
    const keep = keepStr ? parseInt(keepStr, 10) : undefined;
    const modifier = modifierStr ? parseInt(modifierStr, 10) : undefined;

    // Validate ranges
    if (count < 1 || count > 20) {
      errors.push(`Number of dice must be between 1-20 (got ${count})`);
    }

    if (sides < 2 || sides > 100) {
      errors.push(`Die size must be between 2-100 (got ${sides})`);
    }

    if (keep !== undefined) {
      if (keep < 1) {
        errors.push(`Keep value must be at least 1 (got ${keep})`);
      } else if (keep > count) {
        errors.push(`Cannot keep more dice (${keep}) than rolled (${count})`);
      } else if (keep === count) {
        warnings.push(`Keeping all dice (${keep}/${count}) - consider removing 'k' modifier`);
      }
    }

    if (modifier !== undefined) {
      if (Math.abs(modifier) > 50) {
        warnings.push(`Large modifier (${modifier}) detected`);
      }
    }

    // Warn about unusual combinations
    if (sides !== 6 && sides !== 4 && sides !== 8 && sides !== 10 && sides !== 12 && sides !== 20) {
      warnings.push(`Unusual die size: d${sides}`);
    }

    if (count > 10) {
      warnings.push(`Rolling many dice (${count}) - this may be slow`);
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }

  // Private helper methods

  private static validateRollComponents(roll: DiceRoll): boolean {
    // Basic validation of roll structure
    if (!Array.isArray(roll.rolls) || roll.rolls.length === 0) {
      return false;
    }

    // Check that all roll values are valid integers
    if (!roll.rolls.every((r) => Number.isInteger(r) && r >= 1)) {
      return false;
    }

    // Check that total matches sum of rolls
    const calculatedTotal = roll.rolls.reduce((sum, r) => sum + r, 0);
    return calculatedTotal === roll.total;
  }

  private static getExpectedRollStats(sampleRoll: DiceRoll): {
    expectedAverage: number;
    minPossible: number;
    maxPossible: number;
  } {
    // Infer roll method from the sample roll
    const numDice = sampleRoll.rolls.length;

    if (numDice === 3) {
      // 3d6
      return { expectedAverage: 10.5, minPossible: 3, maxPossible: 18 };
    } else if (numDice === 3) {
      // 4d6 drop lowest (3 dice kept)
      return { expectedAverage: 12.24, minPossible: 3, maxPossible: 18 };
    }

    // Default conservative estimates
    return { expectedAverage: 10.5, minPossible: 3, maxPossible: 18 };
  }

  private static checkRaceClassSynergy(race: Race, className: string, warnings: string[]): void {
    // Examples of race/class synergy warnings
    const synergies: { [key: string]: string[] } = {
      Elf: ['Wizard', 'Ranger', 'Fighter'],
      Dwarf: ['Fighter', 'Cleric', 'Barbarian'],
      Halfling: ['Rogue', 'Ranger', 'Bard'],
      'Half-Orc': ['Barbarian', 'Fighter', 'Ranger'],
      Human: ['Any'], // Humans are versatile
    };

    const goodClasses = synergies[race.name] || [];
    if (
      goodClasses.length > 0 &&
      !goodClasses.includes('Any') &&
      !goodClasses.includes(className)
    ) {
      warnings.push(
        `${race.name} and ${className} is an unusual combination. Consider: ${goodClasses.join(', ')}`,
      );
    }
  }

  private static checkAbilityScoreConflicts(
    race: Race,
    className: string,
    warnings: string[],
  ): void {
    // Check if racial modifiers conflict with class needs
    const classKeyStats: { [key: string]: string[] } = {
      Fighter: ['str', 'con'],
      Wizard: ['int'],
      Cleric: ['wis'],
      Rogue: ['dex'],
      Ranger: ['dex', 'wis'],
      Barbarian: ['str', 'con'],
      Bard: ['cha'],
      Sorcerer: ['cha'],
      Paladin: ['str', 'cha'],
      Monk: ['dex', 'wis'],
    };

    const keyStats = classKeyStats[className] || [];

    for (const stat of keyStats) {
      const racialMod = race.abilityModifiers[stat as keyof typeof race.abilityModifiers] || 0;
      if (racialMod < 0) {
        warnings.push(
          `${race.name} has a penalty to ${stat.toUpperCase()}, which is important for ${className}`,
        );
      }
    }
  }
}
