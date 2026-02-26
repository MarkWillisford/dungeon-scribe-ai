// Validation result types used by services

export interface ValidationResult<T = unknown> {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  data?: T;
}

export interface DiceParseResult {
  count: number;
  sides: number;
  keep?: number;
  modifier?: number;
}

export interface RollStatistics {
  average: number;
  min: number;
  max: number;
  standardDeviation: number;
}
