// Types for the dice rolling system

export interface DiceExpression {
  count: number; // number of dice (e.g. 2 in "2d6+3")
  sides: number; // sides per die (e.g. 6 in "2d6+3")
  modifier: number; // flat modifier (e.g. 3 in "2d6+3", -1 in "d8-1")
  notation: string; // original string e.g. "2d6+3"
}

export interface DiceResult {
  expression: DiceExpression;
  rolls: number[]; // individual die results
  subtotal: number; // sum of rolls before modifier
  total: number; // subtotal + modifier
}

// A single labelled bonus contributing to a roll — used for breakdown display
export interface BreakdownEntry {
  label: string; // e.g. "BAB", "STR", "Power Attack", "Bless"
  value: number; // e.g. 6, 3, -3, 1
}
