import {
  abilityTotal,
  abilityModifier,
  formatModifier,
  formatBABString,
  computeTotalBAB,
  computeBaseFort,
  computeBaseRef,
  computeBaseWill,
  computeECL,
  computeMaxHP,
  type ClassDataMap,
} from '@/utils/characterComputations';
import { type DraftClassEntry, type DraftTemplateEntry } from '@/types/characterDraft';
import { BonusType } from '@/types/base';
import { ALL_EXPANDED_CLASSES } from '@/data/classes/index';

// Reuse the full static set as the test map. These are the same classes the
// runtime used before the Firestore migration, so existing test expectations
// still hold.
const TEST_CLASS_MAP: ClassDataMap = new Map(
  ALL_EXPANDED_CLASSES.map((c) => [c.name.toLowerCase(), c]),
);

// ---- helpers ----

function cls(className: string, level: number): DraftClassEntry {
  return {
    id: `class-${className.toLowerCase()}`,
    className,
    level,
    sourceSystem: 'pf1e',
    classChoices: [],
    prereqOverride: false,
  };
}

function laTemplate(laValue: number): DraftTemplateEntry {
  return {
    id: 'tpl-la',
    templateName: 'LA Template',
    appliedAs: 'LA',
    laValue,
    isFreeGrant: false,
  };
}

function crTemplate(crValue: number): DraftTemplateEntry {
  return {
    id: 'tpl-cr',
    templateName: 'CR Template',
    appliedAs: 'CR',
    crValue,
    isFreeGrant: false,
  };
}

function freeGrant(): DraftTemplateEntry {
  return { id: 'tpl-free', templateName: 'Free Grant', isFreeGrant: true };
}

// ---- abilityTotal ----

describe('abilityTotal', () => {
  it('sums all six layers', () => {
    expect(
      abilityTotal({
        base: 16,
        racial: 2,
        inherent: 0,
        enhancement: 4,
        other: [],
        levelIncrements: 2,
      }),
    ).toBe(24);
  });

  it('handles all-zero layers', () => {
    expect(
      abilityTotal({
        base: 10,
        racial: 0,
        inherent: 0,
        enhancement: 0,
        other: [],
        levelIncrements: 0,
      }),
    ).toBe(10);
  });

  it('applies stacking rules to other bonuses', () => {
    // Two morale bonuses — only highest applies (+4)
    // One untyped bonus — stacks (+3)
    // Total: 10 + 4 + 3 = 17
    expect(
      abilityTotal({
        base: 10,
        racial: 0,
        inherent: 0,
        enhancement: 0,
        other: [
          { value: 2, bonusType: BonusType.MORALE },
          { value: 4, bonusType: BonusType.MORALE },
          { value: 3, bonusType: BonusType.UNTYPED },
        ],
        levelIncrements: 0,
      }),
    ).toBe(17);
  });

  it('penalties always stack regardless of type', () => {
    // Two morale penalties — both stack (-2 + -4 = -6), not Math.max(-2,-4) = -2
    // One sacred bonus — highest only (+4)
    // Total: 10 + 4 + (-6) = 8
    expect(
      abilityTotal({
        base: 10,
        racial: 0,
        inherent: 0,
        enhancement: 0,
        other: [
          { value: -2, bonusType: BonusType.MORALE },
          { value: -4, bonusType: BonusType.MORALE },
          { value: 4, bonusType: BonusType.SACRED },
        ],
        levelIncrements: 0,
      }),
    ).toBe(8);
  });
});

// ---- abilityModifier ----

describe('abilityModifier', () => {
  it('returns correct modifier for common totals', () => {
    expect(abilityModifier(10)).toBe(0);
    expect(abilityModifier(11)).toBe(0);
    expect(abilityModifier(12)).toBe(1);
    expect(abilityModifier(18)).toBe(4);
    expect(abilityModifier(28)).toBe(9);
    expect(abilityModifier(8)).toBe(-1);
    expect(abilityModifier(7)).toBe(-2);
  });
});

// ---- formatModifier ----

describe('formatModifier', () => {
  it('prefixes non-negative values with +', () => {
    expect(formatModifier(0)).toBe('+0');
    expect(formatModifier(9)).toBe('+9');
  });

  it('does not double-prefix negative values', () => {
    expect(formatModifier(-2)).toBe('-2');
  });
});

// ---- computeTotalBAB ----

describe('computeTotalBAB', () => {
  it('returns 0 for empty class list', () => {
    expect(computeTotalBAB([], TEST_CLASS_MAP)).toBe(0);
  });

  it('computes Full BAB (Fighter)', () => {
    // Fighter: Full BAB — 1 per level
    expect(computeTotalBAB([cls('Fighter', 5)], TEST_CLASS_MAP)).toBe(5);
    expect(computeTotalBAB([cls('Fighter', 10)], TEST_CLASS_MAP)).toBe(10);
  });

  it('computes Medium BAB (Cleric)', () => {
    // Cleric: Medium BAB — floor(level * 0.75)
    expect(computeTotalBAB([cls('Cleric', 4)], TEST_CLASS_MAP)).toBe(3);
    expect(computeTotalBAB([cls('Cleric', 5)], TEST_CLASS_MAP)).toBe(3);
    expect(computeTotalBAB([cls('Cleric', 8)], TEST_CLASS_MAP)).toBe(6);
  });

  it('sums BAB across multiclass', () => {
    // Fighter 5 (BAB 5) + Cleric 5 (BAB 3) = 8
    expect(computeTotalBAB([cls('Fighter', 5), cls('Cleric', 5)], TEST_CLASS_MAP)).toBe(8);
  });

  it('defaults unknown class to Medium BAB', () => {
    expect(computeTotalBAB([cls('UnknownClass', 4)], TEST_CLASS_MAP)).toBe(3);
  });
});

// ---- formatBABString ----

describe('formatBABString', () => {
  it('shows +0 when BAB is 0', () => {
    expect(formatBABString(0)).toBe('+0');
  });

  it('shows a single attack for BAB below 6', () => {
    expect(formatBABString(3)).toBe('+3');
    expect(formatBABString(5)).toBe('+5');
  });

  it('generates iterative attacks every 5 points', () => {
    expect(formatBABString(6)).toBe('+6/+1');
    expect(formatBABString(8)).toBe('+8/+3');
    expect(formatBABString(18)).toBe('+18/+13/+8/+3');
  });
});

// ---- computeBaseFort ----
// Cleric: Good Fort, Good Will, Poor Ref
// Fighter: Full BAB, Good Fort, Poor Ref, Poor Will
// Wizard: Low BAB, Poor Fort, Poor Ref, Good Will
// Rogue:  Medium BAB, Poor Fort, Good Ref, Poor Will

describe('computeBaseFort', () => {
  it('returns 0 for empty class list', () => {
    expect(computeBaseFort([], TEST_CLASS_MAP)).toBe(0);
  });

  it('applies Good Fort progression: 2 + floor(level/2)', () => {
    // Cleric 5: 2 + floor(5/2) = 4
    expect(computeBaseFort([cls('Cleric', 5)], TEST_CLASS_MAP)).toBe(4);
    // Fighter 4: 2 + floor(4/2) = 4
    expect(computeBaseFort([cls('Fighter', 4)], TEST_CLASS_MAP)).toBe(4);
  });

  it('applies Poor Fort progression: floor(level/3)', () => {
    // Wizard 5: floor(5/3) = 1
    expect(computeBaseFort([cls('Wizard', 5)], TEST_CLASS_MAP)).toBe(1);
    // Rogue 3: floor(3/3) = 1
    expect(computeBaseFort([cls('Rogue', 3)], TEST_CLASS_MAP)).toBe(1);
  });

  it('adds the +2 base bonus exactly once for multiple Good Fort classes', () => {
    // Cleric 5 (Good) + Fighter 5 (Good):
    //   correct = 2 + floor(5/2) + floor(5/2) = 2 + 2 + 2 = 6
    //   buggy   = (2+2) + (2+2) = 8
    expect(computeBaseFort([cls('Cleric', 5), cls('Fighter', 5)], TEST_CLASS_MAP)).toBe(6);
  });

  it('does not add +2 when no class has Good Fort', () => {
    // Wizard 5 + Rogue 5: floor(5/3) + floor(5/3) = 1 + 1 = 2
    expect(computeBaseFort([cls('Wizard', 5), cls('Rogue', 5)], TEST_CLASS_MAP)).toBe(2);
  });

  it('mixes Good and Poor Fort correctly', () => {
    // Cleric 5 (Good) + Wizard 5 (Poor): 2 + floor(5/2) + floor(5/3) = 2 + 2 + 1 = 5
    expect(computeBaseFort([cls('Cleric', 5), cls('Wizard', 5)], TEST_CLASS_MAP)).toBe(5);
  });
});

// ---- computeBaseRef ----

describe('computeBaseRef', () => {
  it('returns 0 for empty class list', () => {
    expect(computeBaseRef([], TEST_CLASS_MAP)).toBe(0);
  });

  it('applies Good Ref progression (Rogue)', () => {
    // Rogue 4: 2 + floor(4/2) = 4
    expect(computeBaseRef([cls('Rogue', 4)], TEST_CLASS_MAP)).toBe(4);
  });

  it('applies Poor Ref progression (Cleric)', () => {
    // Cleric 5: floor(5/3) = 1
    expect(computeBaseRef([cls('Cleric', 5)], TEST_CLASS_MAP)).toBe(1);
  });

  it('adds +2 only once for multiple Good Ref classes', () => {
    // Rogue 4 + Rogue 4: 2 + floor(4/2) + floor(4/2) = 2 + 2 + 2 = 6
    expect(computeBaseRef([cls('Rogue', 4), cls('Rogue', 4)], TEST_CLASS_MAP)).toBe(6);
  });
});

// ---- computeBaseWill ----

describe('computeBaseWill', () => {
  it('returns 0 for empty class list', () => {
    expect(computeBaseWill([], TEST_CLASS_MAP)).toBe(0);
  });

  it('applies Good Will progression (Cleric)', () => {
    // Cleric 5: 2 + floor(5/2) = 4
    expect(computeBaseWill([cls('Cleric', 5)], TEST_CLASS_MAP)).toBe(4);
  });

  it('applies Poor Will progression (Fighter)', () => {
    // Fighter 5: floor(5/3) = 1
    expect(computeBaseWill([cls('Fighter', 5)], TEST_CLASS_MAP)).toBe(1);
  });

  it('adds +2 only once when mixing Good and Poor Will', () => {
    // Cleric 5 (Good) + Fighter 5 (Poor): 2 + floor(5/2) + floor(5/3) = 2 + 2 + 1 = 5
    expect(computeBaseWill([cls('Cleric', 5), cls('Fighter', 5)], TEST_CLASS_MAP)).toBe(5);
  });

  it('adds +2 only once for multiple Good Will classes', () => {
    // Cleric 5 + Wizard 5 (both Good Will): 2 + floor(5/2) + floor(5/2) = 6
    expect(computeBaseWill([cls('Cleric', 5), cls('Wizard', 5)], TEST_CLASS_MAP)).toBe(6);
  });
});

// ---- computeECL ----

describe('computeECL', () => {
  it('returns sum of class levels with no templates', () => {
    expect(computeECL([cls('Cleric', 5), cls('Fighter', 5)], [])).toBe(10);
  });

  it('adds LA template value to ECL', () => {
    expect(computeECL([cls('Cleric', 5)], [laTemplate(2)])).toBe(7);
  });

  it('does not add CR templates to ECL', () => {
    expect(computeECL([cls('Cleric', 5)], [crTemplate(2)])).toBe(5);
  });

  it('ignores free grants (no ECL cost)', () => {
    expect(computeECL([cls('Cleric', 5)], [freeGrant()])).toBe(5);
  });

  it('sums multiple LA templates', () => {
    expect(computeECL([cls('Cleric', 5)], [laTemplate(2), laTemplate(1)])).toBe(8);
  });
});

// ---- computeMaxHP ----

describe('computeMaxHP', () => {
  it('returns 0 for empty class list', () => {
    expect(computeMaxHP([], 0, TEST_CLASS_MAP)).toBe(0);
  });

  it('first level gets max hit die, subsequent levels get avg+1', () => {
    // Fighter d10: level 1 = 10, level 2 = 6 (floor(10/2)+1), con 0
    const result = computeMaxHP([cls('Fighter', 2)], 0, TEST_CLASS_MAP);
    expect(result).toBe(10 + 6);
  });

  it('adds con modifier per level', () => {
    // Fighter 3 levels, con +2: (10 + 6 + 6) + 2*3
    const result = computeMaxHP([cls('Fighter', 3)], 2, TEST_CLASS_MAP);
    expect(result).toBe(10 + 6 + 6 + 6);
  });

  it('includes favored class HP bonuses', () => {
    const fighter = {
      ...cls('Fighter', 3),
      isFavoredClass: true,
      favoredClassBonuses: { hp: 2, skillRank: 1 },
    };
    // Base: 10 + 6 + 6 = 22, con 0, favored HP +2 = 24
    expect(computeMaxHP([fighter], 0, TEST_CLASS_MAP)).toBe(24);
  });

  it('ignores favored class skill rank bonuses for HP', () => {
    const fighter = {
      ...cls('Fighter', 3),
      isFavoredClass: true,
      favoredClassBonuses: { hp: 0, skillRank: 3 },
    };
    expect(computeMaxHP([fighter], 0, TEST_CLASS_MAP)).toBe(10 + 6 + 6);
  });

  it('does not add favored class HP when not set', () => {
    expect(computeMaxHP([cls('Fighter', 2)], 0, TEST_CLASS_MAP)).toBe(10 + 6);
  });
});
