import {
  abilityTotal,
  abilityModifier,
  getAbilityModifier,
  formatModifier,
  formatBABString,
  computeTotalBAB,
  computeTotalBABFractional,
  computeBaseFort,
  computeBaseRef,
  computeBaseWill,
  computeBaseFortFractional,
  computeBaseRefFractional,
  computeBaseWillFractional,
  computeECL,
  computeMaxHP,
  computeFeatSlots,
  type ClassDataMap,
} from '@/utils/characterComputations';
import {
  type DraftClassEntry,
  type DraftTemplateEntry,
  type DraftAbilityScore,
} from '@/types/characterDraft';
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

// ---- getAbilityModifier ----

function score(base: number): DraftAbilityScore {
  return { base, racial: 0, inherent: 0, enhancement: 0, other: [], levelIncrements: 0 };
}

describe('getAbilityModifier', () => {
  it('returns correct modifier from a DraftAbilityScore record', () => {
    const abilities: Record<'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha', DraftAbilityScore> = {
      str: score(16),
      dex: score(12),
      con: score(14),
      int: score(10),
      wis: score(8),
      cha: score(7),
    };
    expect(getAbilityModifier(abilities, 'str')).toBe(3);
    expect(getAbilityModifier(abilities, 'dex')).toBe(1);
    expect(getAbilityModifier(abilities, 'wis')).toBe(-1);
    expect(getAbilityModifier(abilities, 'cha')).toBe(-2);
  });

  it('includes racial bonus in the total', () => {
    const abilities: Record<'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha', DraftAbilityScore> = {
      str: { base: 14, racial: 2, inherent: 0, enhancement: 0, other: [], levelIncrements: 0 },
      dex: score(10),
      con: score(10),
      int: score(10),
      wis: score(10),
      cha: score(10),
    };
    expect(getAbilityModifier(abilities, 'str')).toBe(3); // total 16 → +3
  });
});

// ---- computeTotalBAB — all BAB progressions ----

describe('computeTotalBAB — Low BAB', () => {
  it('computes Low BAB (Wizard): floor(level * 0.5)', () => {
    expect(computeTotalBAB([cls('Wizard', 4)], TEST_CLASS_MAP)).toBe(2);
    expect(computeTotalBAB([cls('Wizard', 5)], TEST_CLASS_MAP)).toBe(2);
    expect(computeTotalBAB([cls('Wizard', 10)], TEST_CLASS_MAP)).toBe(5);
  });

  it('mixes Full and Low BAB correctly', () => {
    // Fighter 5 (BAB 5) + Wizard 4 (BAB 2) = 7
    expect(computeTotalBAB([cls('Fighter', 5), cls('Wizard', 4)], TEST_CLASS_MAP)).toBe(7);
  });

  it('falls back to Medium (0.75) for unrecognised BABProgression value', () => {
    const badMap: ClassDataMap = new Map([
      [
        'oddclass',
        {
          name: 'OddClass',
          babProgression: 'SomeBadValue' as never,
          saves: { fortitude: 'Poor', reflex: 'Poor', will: 'Poor' },
          hitDie: 8,
          skillRanksPerLevel: 2,
          classSkills: [],
          spellcasting: { type: 'None' },
        } as never,
      ],
    ]);
    expect(computeTotalBAB([cls('OddClass', 4)], badMap)).toBe(3);
  });
});

// ---- computeTotalBABFractional ----

describe('computeTotalBABFractional', () => {
  it('returns 0 for empty class list', () => {
    expect(computeTotalBABFractional([], TEST_CLASS_MAP)).toBe(0);
  });

  it('Full BAB matches standard (Fighter)', () => {
    expect(computeTotalBABFractional([cls('Fighter', 5)], TEST_CLASS_MAP)).toBe(5);
  });

  it('Medium BAB floors once at end (Cleric)', () => {
    // Cleric 5: raw = 5 * 0.75 = 3.75 → floor = 3 (same as standard here)
    expect(computeTotalBABFractional([cls('Cleric', 5)], TEST_CLASS_MAP)).toBe(3);
  });

  it('Low BAB floors once at end (Wizard)', () => {
    // Wizard 5: raw = 5 * 0.5 = 2.5 → floor = 2
    expect(computeTotalBABFractional([cls('Wizard', 5)], TEST_CLASS_MAP)).toBe(2);
  });

  it('multiclass: sums fractions then floors once', () => {
    // Cleric 1 + Wizard 1: 0.75 + 0.5 = 1.25 → floor = 1
    // standard would give floor(0.75) + floor(0.5) = 0 + 0 = 0
    expect(computeTotalBABFractional([cls('Cleric', 1), cls('Wizard', 1)], TEST_CLASS_MAP)).toBe(1);
  });

  it('defaults unknown class to Medium (0.75) fractional rate', () => {
    // Unknown 4: raw = 4 * 0.75 = 3.0 → floor = 3
    expect(computeTotalBABFractional([cls('UnknownClass', 4)], TEST_CLASS_MAP)).toBe(3);
  });

  it('falls back to 0.75 for unrecognised BABProgression value in fractional mode', () => {
    const badMap: ClassDataMap = new Map([
      [
        'oddclass',
        {
          name: 'OddClass',
          babProgression: 'SomeBadValue' as never,
          saves: { fortitude: 'Poor', reflex: 'Poor', will: 'Poor' },
          hitDie: 8,
          skillRanksPerLevel: 2,
          classSkills: [],
          spellcasting: { type: 'None' },
        } as never,
      ],
    ]);
    // 4 * 0.75 = 3.0 → floor = 3
    expect(computeTotalBABFractional([cls('OddClass', 4)], badMap)).toBe(3);
  });
});

// ---- fractional saves ----

describe('computeBaseFortFractional', () => {
  it('returns 0 for empty class list', () => {
    expect(computeBaseFortFractional([], TEST_CLASS_MAP)).toBe(0);
  });

  it('Good Fort: 2 + floor(level/2) (Cleric)', () => {
    expect(computeBaseFortFractional([cls('Cleric', 5)], TEST_CLASS_MAP)).toBe(4);
  });

  it('Poor Fort: floor(level/3) (Wizard)', () => {
    expect(computeBaseFortFractional([cls('Wizard', 5)], TEST_CLASS_MAP)).toBe(1);
  });

  it('multiclass: adds +2 once, sums fractions then floors', () => {
    // Cleric 1 (Good) + Wizard 1 (Poor): raw = 1/2 + 1/3 = 0.833 → floor = 0; +2 → 2
    expect(computeBaseFortFractional([cls('Cleric', 1), cls('Wizard', 1)], TEST_CLASS_MAP)).toBe(2);
  });
});

describe('computeBaseRefFractional', () => {
  it('returns 0 for empty class list', () => {
    expect(computeBaseRefFractional([], TEST_CLASS_MAP)).toBe(0);
  });

  it('Good Ref: 2 + floor(level/2) (Rogue)', () => {
    expect(computeBaseRefFractional([cls('Rogue', 4)], TEST_CLASS_MAP)).toBe(4);
  });

  it('Poor Ref: floor(level/3) (Cleric)', () => {
    expect(computeBaseRefFractional([cls('Cleric', 5)], TEST_CLASS_MAP)).toBe(1);
  });
});

describe('computeBaseWillFractional', () => {
  it('returns 0 for empty class list', () => {
    expect(computeBaseWillFractional([], TEST_CLASS_MAP)).toBe(0);
  });

  it('Good Will: 2 + floor(level/2) (Cleric)', () => {
    expect(computeBaseWillFractional([cls('Cleric', 5)], TEST_CLASS_MAP)).toBe(4);
  });

  it('Poor Will: floor(level/3) (Fighter)', () => {
    expect(computeBaseWillFractional([cls('Fighter', 5)], TEST_CLASS_MAP)).toBe(1);
  });
});

// ---- unknown class fallbacks in saves ----

describe('save computations — unknown class fallback', () => {
  it('computeBaseFort defaults unknown class to Poor (floor(level/3))', () => {
    expect(computeBaseFort([cls('UnknownClass', 3)], TEST_CLASS_MAP)).toBe(1);
  });

  it('computeBaseRef defaults unknown class to Poor (floor(level/3))', () => {
    expect(computeBaseRef([cls('UnknownClass', 3)], TEST_CLASS_MAP)).toBe(1);
  });

  it('computeBaseWill defaults unknown class to Poor (floor(level/3))', () => {
    expect(computeBaseWill([cls('UnknownClass', 3)], TEST_CLASS_MAP)).toBe(1);
  });

  it('computeBaseFortFractional defaults unknown class to Poor (level/3)', () => {
    // Unknown 3: raw = 3/3 = 1.0 → floor = 1; no Good save → 0 + 1 = 1
    expect(computeBaseFortFractional([cls('UnknownClass', 3)], TEST_CLASS_MAP)).toBe(1);
  });

  it('computeBaseRefFractional defaults unknown class to Poor (level/3)', () => {
    expect(computeBaseRefFractional([cls('UnknownClass', 3)], TEST_CLASS_MAP)).toBe(1);
  });

  it('computeBaseWillFractional defaults unknown class to Poor (level/3)', () => {
    expect(computeBaseWillFractional([cls('UnknownClass', 3)], TEST_CLASS_MAP)).toBe(1);
  });
});

// ---- computeMaxHP — unknown class fallback ----

describe('computeMaxHP — unknown class fallback', () => {
  it('defaults hit die to 8 for unknown class', () => {
    // UnknownClass level 2: first level = 8, second level = floor(8/2)+1 = 5, con 0 → 13
    expect(computeMaxHP([cls('UnknownClass', 2)], 0, TEST_CLASS_MAP)).toBe(13);
  });
});

// ---- computeFeatSlots ----

describe('computeFeatSlots', () => {
  it('returns one slot per every 2 HD', () => {
    // 4 HD → slots at HD 1, 3
    const slots = computeFeatSlots([cls('Fighter', 4)], 'Human');
    expect(slots.filter((s) => s.source === 'level')).toHaveLength(2);
  });

  it('adds a racial bonus feat for Human', () => {
    const slots = computeFeatSlots([cls('Fighter', 2)], 'Human');
    expect(slots.some((s) => s.source === 'racial')).toBe(true);
  });

  it('does not add a racial bonus feat for non-Human races', () => {
    const slots = computeFeatSlots([cls('Fighter', 2)], 'Elf');
    expect(slots.every((s) => s.source === 'level')).toBe(true);
  });

  it('sorts same-level slots by id when levels tie', () => {
    // Human at level 1 gets both a level feat (hd1) and a racial feat (availableAtLevel: 1)
    // Both are at level 1 — the sort's || branch fires
    const slots = computeFeatSlots([cls('Fighter', 1)], 'Human');
    const level1Slots = slots.filter((s) => s.availableAtLevel === 1);
    expect(level1Slots.length).toBeGreaterThanOrEqual(2);
    for (let i = 1; i < level1Slots.length; i++) {
      expect(level1Slots[i].id.localeCompare(level1Slots[i - 1].id)).toBeGreaterThanOrEqual(0);
    }
  });

  it('returns empty array for zero-level character', () => {
    expect(computeFeatSlots([], 'Human')).toHaveLength(1); // just the racial bonus
  });
});
