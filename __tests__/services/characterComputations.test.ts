import {
  abilityModifier,
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
  computeClassBonusFeatSlots,
  selectedArchetypeNames,
  buildReplacedFeaturesByClassId,
  parseFeatGrantingFeatureName,
  makeClassFeatSlotId,
  parseClassFeatSlotId,
  characterLevelForClassLevel,
  computeFCBAlternateAccumulation,
  type ClassDataMap,
} from '@/utils/characterComputations';
import type { ClassEntry } from '@/types/classes';
import type { AppliedTemplate } from '@/types/templates';
import { BABProgression, SaveProgression, BonusType } from '@/types/base';
import type { FavoredClassBonusEntry } from '@/types/favoredClassBonuses';
import type { AbilityKey } from '@/types/abilities';
import type { CharacterFlaw } from '@/types/flaws';
import { ALL_EXPANDED_CLASSES } from '@/data/classes/index';

// Reuse the full static set as the test map. These are the same classes the
// runtime used before the Firestore migration, so existing test expectations
// still hold.
const TEST_CLASS_MAP: ClassDataMap = new Map(
  ALL_EXPANDED_CLASSES.map((c) => [c.name.toLowerCase(), c]),
);

// ---- helpers ----

function cls(name: string, level: number): ClassEntry {
  return {
    name,
    level,
    id: `class-${name.toLowerCase()}`,
    hitDieSize: 8,
    hitDieResults: [],
    skillRanks: 2,
    classSkills: [],
    babProgression: BABProgression.Medium,
    fortProgression: SaveProgression.Poor,
    refProgression: SaveProgression.Poor,
    willProgression: SaveProgression.Poor,
    classFeatures: [],
    sourceSystem: 'pf1e',
    classChoices: [],
    prereqOverride: false,
  };
}

function laTemplate(la: number): Pick<AppliedTemplate, 'appliedAs' | 'la' | 'isFreeGrant'> {
  return { appliedAs: 'la', la, isFreeGrant: false };
}

function crTemplate(cr: number): Pick<AppliedTemplate, 'appliedAs' | 'la' | 'isFreeGrant'> {
  return { appliedAs: 'cr', la: undefined, isFreeGrant: false };
}

function freeGrant(): Pick<AppliedTemplate, 'appliedAs' | 'la' | 'isFreeGrant'> {
  return { appliedAs: 'cr', la: undefined, isFreeGrant: true };
}

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

  it('computes Low BAB (Wizard)', () => {
    // Wizard: Low BAB — floor(level * 0.5)
    expect(computeTotalBAB([cls('Wizard', 4)], TEST_CLASS_MAP)).toBe(2);
    expect(computeTotalBAB([cls('Wizard', 5)], TEST_CLASS_MAP)).toBe(2);
  });
});

// ---- computeTotalBABFractional ----

describe('computeTotalBABFractional', () => {
  it('returns floor of fractional BAB sum', () => {
    expect(computeTotalBABFractional([cls('Fighter', 1)], TEST_CLASS_MAP)).toBe(1);
    expect(computeTotalBABFractional([cls('Cleric', 2)], TEST_CLASS_MAP)).toBe(1); // floor(2*0.75)
    expect(computeTotalBABFractional([cls('Wizard', 3)], TEST_CLASS_MAP)).toBe(1); // floor(3*0.5)
  });

  it('defaults unknown class to Medium BAB fractional', () => {
    expect(computeTotalBABFractional([cls('Unknown', 4)], TEST_CLASS_MAP)).toBe(3); // floor(4*0.75)
  });
});

// ---- computeBaseFortFractional / computeBaseRefFractional / computeBaseWillFractional ----

describe('computeBaseFortFractional', () => {
  it('returns fractional fort save for good/poor progressions', () => {
    expect(computeBaseFortFractional([cls('Fighter', 1)], TEST_CLASS_MAP)).toBeGreaterThanOrEqual(
      2,
    ); // good
    expect(computeBaseFortFractional([cls('Wizard', 3)], TEST_CLASS_MAP)).toBe(1); // poor: floor(3/3)
  });

  it('returns 0 for unknown class with no levels', () => {
    expect(computeBaseFortFractional([], TEST_CLASS_MAP)).toBe(0);
  });
});

describe('computeBaseRefFractional', () => {
  it('returns fractional ref save', () => {
    expect(computeBaseRefFractional([cls('Rogue', 4)], TEST_CLASS_MAP)).toBeGreaterThanOrEqual(2); // good ref
    expect(computeBaseRefFractional([cls('Fighter', 3)], TEST_CLASS_MAP)).toBe(1); // poor: floor(3/3)
  });
});

describe('computeBaseWillFractional', () => {
  it('returns fractional will save', () => {
    expect(computeBaseWillFractional([cls('Wizard', 4)], TEST_CLASS_MAP)).toBeGreaterThanOrEqual(2); // good will
    expect(computeBaseWillFractional([cls('Fighter', 3)], TEST_CLASS_MAP)).toBe(1); // poor: floor(3/3)
  });
});

// ---- computeFeatSlots ----

describe('computeFeatSlots', () => {
  it('generates one slot per odd HD', () => {
    const slots = computeFeatSlots([cls('Fighter', 5)], 'Dwarf', []);
    expect(slots.map((s) => s.availableAtLevel)).toEqual([1, 3, 5]);
  });

  it('adds a bonus racial feat for Human', () => {
    const slots = computeFeatSlots([cls('Fighter', 1)], 'Human', []);
    const racial = slots.filter((s) => s.source === 'racial');
    expect(racial).toHaveLength(1);
    expect(racial[0].id).toBe('racial-feat-human-1');
  });

  it('does not add a racial feat for non-Human races', () => {
    const slots = computeFeatSlots([cls('Fighter', 1)], 'Elf', []);
    expect(slots.filter((s) => s.source === 'racial')).toHaveLength(0);
  });

  it('omits class-granted slots when no class data is supplied', () => {
    const slots = computeFeatSlots([cls('Fighter', 6)], 'Elf', []);
    expect(slots.filter((s) => s.source === 'class')).toHaveLength(0);
  });

  it('includes class-granted slots when class data is supplied', () => {
    const slots = computeFeatSlots([cls('Fighter', 6)], 'Elf', [], {
      classDataMap: TEST_CLASS_MAP,
    });
    expect(slots.filter((s) => s.source === 'class').map((s) => s.classLevel)).toEqual([
      1, 2, 4, 6,
    ]);
  });
});

// ---- parseFeatGrantingFeatureName ----

describe('parseFeatGrantingFeatureName', () => {
  it('recognizes feat-granting feature names', () => {
    expect(parseFeatGrantingFeatureName('Bonus Feat')).toEqual({
      base: 'bonus feat',
      levels: null,
    });
    expect(parseFeatGrantingFeatureName('Combat Style Feat')).toEqual({
      base: 'combat style feat',
      levels: null,
    });
  });

  it('singularizes plural feature names so they match their singular form', () => {
    expect(parseFeatGrantingFeatureName('Bonus Feats')?.base).toBe('bonus feat');
  });

  it('extracts an ordinal level list from a parenthetical', () => {
    expect(parseFeatGrantingFeatureName('Bonus Feats (4th, 8th, 12th)')).toEqual({
      base: 'bonus feat',
      levels: [4, 8, 12],
    });
  });

  it('treats a descriptive parenthetical as no level restriction', () => {
    expect(parseFeatGrantingFeatureName('Bonus Feats (Zen Archer)')).toEqual({
      base: 'bonus feat',
      levels: null,
    });
  });

  it('rejects features that are not feat grants', () => {
    expect(parseFeatGrantingFeatureName('Armor Training 1')).toBeNull();
    expect(parseFeatGrantingFeatureName('Feathered Companion')).toBeNull();
  });
});

// ---- computeClassBonusFeatSlots ----

describe('computeClassBonusFeatSlots', () => {
  const opts = { classDataMap: TEST_CLASS_MAP };

  it('generates a slot per bonus feat level up to the class level', () => {
    const slots = computeClassBonusFeatSlots([cls('Fighter', 5)], opts);
    expect(slots.map((s) => s.classLevel)).toEqual([1, 2, 4]);
  });

  it('labels each slot with the granting class and class level', () => {
    const slots = computeClassBonusFeatSlots([cls('Fighter', 2)], opts);
    expect(slots.map((s) => s.sourceLabel)).toEqual(['Fighter 1', 'Fighter 2']);
  });

  it('restricts fighter bonus feats to combat feats', () => {
    const slots = computeClassBonusFeatSlots([cls('Fighter', 1)], opts);
    expect(slots[0].allowedFeatTypes).toEqual(['combat']);
  });

  it('restricts teamwork feat grants to teamwork feats', () => {
    const slots = computeClassBonusFeatSlots([cls('Inquisitor', 3)], opts);
    expect(slots[0].featureName).toBe('Teamwork Feat');
    expect(slots[0].allowedFeatTypes).toEqual(['teamwork']);
  });

  it('restricts wizard bonus feats to item creation and metamagic', () => {
    const slots = computeClassBonusFeatSlots([cls('Wizard', 5)], opts);
    expect(slots.length).toBeGreaterThan(0);
    expect(slots[0].allowedFeatTypes).toEqual(['item_creation', 'metamagic']);
  });

  it('restricts magus bonus feats to combat, item creation and metamagic', () => {
    const slots = computeClassBonusFeatSlots([cls('Magus', 5)], opts);
    expect(slots.length).toBeGreaterThan(0);
    expect(slots[0].allowedFeatTypes).toEqual(['combat', 'item_creation', 'metamagic']);
  });

  it('leaves the restriction unset when the rules are not modelled for that class', () => {
    const slots = computeClassBonusFeatSlots([cls('Sorcerer', 7)], opts);
    expect(slots[0].featureName).toBe('Bloodline Feat');
    expect(slots[0].allowedFeatTypes).toBeUndefined();
  });

  it('generates no slots for classes that grant no bonus feats', () => {
    expect(computeClassBonusFeatSlots([cls('Rogue', 20)], opts)).toHaveLength(0);
  });

  it('ignores classes missing from the class data map', () => {
    expect(computeClassBonusFeatSlots([cls('Fighter', 5)], { classDataMap: new Map() })).toEqual(
      [],
    );
  });

  it('keeps slot ids distinct across two classes at the same class level', () => {
    const slots = computeClassBonusFeatSlots([cls('Fighter', 1), cls('Warlord', 1)], opts);
    const ids = slots.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  describe('placement', () => {
    it('falls back to the class level when no level order is recorded', () => {
      const slots = computeClassBonusFeatSlots([cls('Fighter', 2)], opts);
      expect(slots.map((s) => s.availableAtLevel)).toEqual([1, 2]);
    });

    it('places slots at the character level the class level was taken at', () => {
      // Wizard 1, Fighter 1, Wizard 2, Fighter 2 → Fighter 2 is character level 4
      const levelOrder = ['class-wizard', 'class-fighter', 'class-wizard', 'class-fighter'];
      const slots = computeClassBonusFeatSlots([cls('Fighter', 2)], { ...opts, levelOrder });
      expect(slots.map((s) => s.availableAtLevel)).toEqual([2, 4]);
    });
  });

  describe('archetypes', () => {
    it('removes only the levels an archetype names', () => {
      const replacedFeaturesByClassId = new Map([
        ['class-fighter', ['Bonus Feats (4th, 8th, 12th, 16th, 20th)']],
      ]);
      const slots = computeClassBonusFeatSlots([cls('Fighter', 8)], {
        ...opts,
        replacedFeaturesByClassId,
      });
      expect(slots.map((s) => s.classLevel)).toEqual([1, 2, 6]);
    });

    it('removes every grant when the archetype names no levels', () => {
      const replacedFeaturesByClassId = new Map([['class-fighter', ['Bonus Feats']]]);
      const slots = computeClassBonusFeatSlots([cls('Fighter', 8)], {
        ...opts,
        replacedFeaturesByClassId,
      });
      expect(slots).toHaveLength(0);
    });

    it('ignores replaced features that are not feat grants', () => {
      const replacedFeaturesByClassId = new Map([
        ['class-fighter', ['Bravery', 'Armor Training 1']],
      ]);
      const slots = computeClassBonusFeatSlots([cls('Fighter', 4)], {
        ...opts,
        replacedFeaturesByClassId,
      });
      expect(slots.map((s) => s.classLevel)).toEqual([1, 2, 4]);
    });
  });
});

// ---- archetype selection ----
//
// The character editor writes `archetypeName`; the legacy `archetype` array
// only appears on older persisted characters. Reading only the array silently
// disabled archetype-aware slot removal, so both are covered here.

describe('selectedArchetypeNames', () => {
  it('reads the name the editor writes', () => {
    expect(selectedArchetypeNames({ archetypeName: 'Myrmidon' })).toEqual(['Myrmidon']);
  });

  it('reads the legacy array', () => {
    expect(selectedArchetypeNames({ archetype: ['Zen Archer'] })).toEqual(['Zen Archer']);
  });

  it('combines both when both are present', () => {
    expect(selectedArchetypeNames({ archetype: ['Zen Archer'], archetypeName: 'Sohei' })).toEqual([
      'Zen Archer',
      'Sohei',
    ]);
  });

  it('returns nothing when no archetype is selected', () => {
    expect(selectedArchetypeNames({})).toEqual([]);
  });
});

describe('buildReplacedFeaturesByClassId', () => {
  const archetypes = new Map([
    [
      'Fighter',
      [
        { name: 'Myrmidon', replacedFeatures: ['Bonus Feats (2nd)', 'Bravery'] },
        { name: 'Unbreakable', replacedFeatures: ['Bonus Feats (1st)'] },
      ],
    ],
  ]);

  it('collects the features the selected archetype trades away', () => {
    const classes = [cls('Fighter', 4)];
    classes[0].archetypeName = 'Myrmidon';
    expect(buildReplacedFeaturesByClassId(classes, archetypes).get('class-fighter')).toEqual([
      'Bonus Feats (2nd)',
      'Bravery',
    ]);
  });

  it('ignores archetypes the class has not selected', () => {
    const classes = [cls('Fighter', 4)];
    classes[0].archetypeName = 'Myrmidon';
    const replaced = buildReplacedFeaturesByClassId(classes, archetypes).get('class-fighter');
    expect(replaced).not.toContain('Bonus Feats (1st)');
  });

  it('omits classes with no archetype selected', () => {
    expect(buildReplacedFeaturesByClassId([cls('Fighter', 4)], archetypes).size).toBe(0);
  });

  it('omits classes whose archetype data has not loaded yet', () => {
    const classes = [cls('Fighter', 4)];
    classes[0].archetypeName = 'Myrmidon';
    expect(buildReplacedFeaturesByClassId(classes, new Map()).size).toBe(0);
  });

  it('feeds through to slot computation so the traded grant disappears', () => {
    const classes = [cls('Fighter', 4)];
    classes[0].archetypeName = 'Myrmidon';
    const slots = computeClassBonusFeatSlots(classes, {
      classDataMap: TEST_CLASS_MAP,
      replacedFeaturesByClassId: buildReplacedFeaturesByClassId(classes, archetypes),
    });
    expect(slots.map((s) => s.classLevel)).toEqual([1, 4]);
  });
});

// ---- class feat slot ids ----

describe('class feat slot ids', () => {
  it('round-trips the class id and class level', () => {
    const id = makeClassFeatSlotId('class-fighter', 'bonus feat', 4);
    expect(parseClassFeatSlotId(id)).toEqual({ classId: 'class-fighter', classLevel: 4 });
  });

  it('returns null for non-class slot ids', () => {
    expect(parseClassFeatSlotId('level_3')).toBeNull();
    expect(parseClassFeatSlotId('bonus_0')).toBeNull();
  });
});

// ---- characterLevelForClassLevel ----

describe('characterLevelForClassLevel', () => {
  const levelOrder = ['a', 'b', 'a', 'a', 'b'];

  it('returns the character level the nth class level was taken at', () => {
    expect(characterLevelForClassLevel('a', 1, levelOrder)).toBe(1);
    expect(characterLevelForClassLevel('a', 3, levelOrder)).toBe(4);
    expect(characterLevelForClassLevel('b', 2, levelOrder)).toBe(5);
  });

  it('returns null when the class level is not in the order', () => {
    expect(characterLevelForClassLevel('a', 4, levelOrder)).toBeNull();
    expect(characterLevelForClassLevel('c', 1, levelOrder)).toBeNull();
  });

  it('returns null when no level order is recorded', () => {
    expect(characterLevelForClassLevel('a', 1, undefined)).toBeNull();
    expect(characterLevelForClassLevel('a', 1, [])).toBeNull();
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
      favoredClassBonuses: [
        { level: 1, type: 'hp' as const },
        { level: 2, type: 'hp' as const },
        { level: 3, type: 'skill' as const },
      ],
    };
    // Base: 10 + 6 + 6 = 22, con 0, favored HP +2 = 24
    expect(computeMaxHP([fighter], 0, TEST_CLASS_MAP)).toBe(24);
  });

  it('ignores favored class skill rank bonuses for HP', () => {
    const fighter = {
      ...cls('Fighter', 3),
      isFavoredClass: true,
      favoredClassBonuses: [
        { level: 1, type: 'skill' as const },
        { level: 2, type: 'skill' as const },
        { level: 3, type: 'skill' as const },
      ],
    };
    expect(computeMaxHP([fighter], 0, TEST_CLASS_MAP)).toBe(10 + 6 + 6);
  });

  it('does not add favored class HP when not set', () => {
    expect(computeMaxHP([cls('Fighter', 2)], 0, TEST_CLASS_MAP)).toBe(10 + 6);
  });
});

// ---- computeTotalBAB — Low BAB branch ----

describe('computeTotalBAB — Low BAB', () => {
  it('computes Low BAB (Wizard): floor(level * 0.5)', () => {
    expect(computeTotalBAB([cls('Wizard', 4)], TEST_CLASS_MAP)).toBe(2);
    expect(computeTotalBAB([cls('Wizard', 5)], TEST_CLASS_MAP)).toBe(2);
    expect(computeTotalBAB([cls('Wizard', 10)], TEST_CLASS_MAP)).toBe(5);
  });

  it('mixed Full + Low BAB multiclass', () => {
    // Fighter 5 (5) + Wizard 5 (2) = 7
    expect(computeTotalBAB([cls('Fighter', 5), cls('Wizard', 5)], TEST_CLASS_MAP)).toBe(7);
  });
});

// ---- computeFeatSlots ----

describe('computeFeatSlots', () => {
  it('returns empty array for no classes', () => {
    expect(computeFeatSlots([], 'Dwarf', [])).toHaveLength(0);
  });

  it('grants a level feat slot at every odd HD (non-human)', () => {
    // 4 levels → slots at HD 1, 3
    const slots = computeFeatSlots([cls('Fighter', 4)], 'Dwarf', []);
    expect(slots).toHaveLength(2);
    expect(slots.map((s) => s.availableAtLevel)).toEqual([1, 3]);
    expect(slots.every((s) => s.source === 'level')).toBe(true);
  });

  it('human gets an extra racial bonus feat slot', () => {
    const slots = computeFeatSlots([cls('Fighter', 4)], 'Human', []);
    expect(slots).toHaveLength(3);
    expect(slots.some((s) => s.source === 'racial')).toBe(true);
  });

  it('slots are sorted by availableAtLevel', () => {
    const slots = computeFeatSlots([cls('Fighter', 6)], 'Human', []);
    const levels = slots.map((s) => s.availableAtLevel);
    expect(levels).toEqual([...levels].sort((a, b) => a - b));
  });

  it('each level feat slot has a unique id', () => {
    const slots = computeFeatSlots([cls('Fighter', 6)], 'Dwarf', []);
    const ids = slots.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('grants one bonus feat slot per flaw', () => {
    const flaws: CharacterFlaw[] = [
      { flawId: 'flaw-1', name: 'Cowardly' },
      { flawId: 'flaw-2', name: 'Meager Fortitude' },
    ];
    const slots = computeFeatSlots([cls('Fighter', 1)], 'Dwarf', flaws);
    const bonusSlots = slots.filter((s) => s.source === 'bonus');
    expect(bonusSlots).toHaveLength(2);
  });

  it('flaw bonus slot has correct shape', () => {
    const flaws: CharacterFlaw[] = [{ flawId: 'flaw-1', name: 'Cowardly' }];
    const slots = computeFeatSlots([cls('Fighter', 1)], 'Dwarf', flaws);
    const bonusSlot = slots.find((s) => s.source === 'bonus');
    expect(bonusSlot).toEqual({
      id: 'flaw-feat-flaw-1',
      source: 'bonus',
      availableAt: 'Flaw: Cowardly',
      availableAtLevel: 1,
      prereqOverride: false,
    });
  });

  it('empty flaws array produces no bonus slots', () => {
    const slots = computeFeatSlots([cls('Fighter', 1)], 'Dwarf', []);
    expect(slots.filter((s) => s.source === 'bonus')).toHaveLength(0);
  });

  it('orders same-level slots level → racial → class → flaw bonus', () => {
    const flaws: CharacterFlaw[] = [{ flawId: 'flaw-1', name: 'Cowardly' }];
    const slots = computeFeatSlots([cls('Fighter', 1)], 'Human', flaws, {
      classDataMap: TEST_CLASS_MAP,
    });
    const atLevel1 = slots.filter((s) => s.availableAtLevel === 1).map((s) => s.source);
    expect(atLevel1).toEqual(['level', 'racial', 'class', 'bonus']);
  });

  it('elven noble gets a racial bonus feat slot at level 1', () => {
    const slots = computeFeatSlots([cls('Fighter', 1)], 'Elven Noble', []);
    const racial = slots.filter((s) => s.source === 'racial');
    expect(racial).toHaveLength(1);
    expect(racial[0].availableAtLevel).toBe(1);
    expect(racial[0].id).toBe('racial-feat-elven-noble-1');
  });

  it('elven noble racial slot label is distinct from human slot', () => {
    const humanSlots = computeFeatSlots([cls('Fighter', 1)], 'Human', []);
    const elvenSlots = computeFeatSlots([cls('Fighter', 1)], 'Elven Noble', []);
    const humanRacial = humanSlots.find((s) => s.source === 'racial')!;
    const elvenRacial = elvenSlots.find((s) => s.source === 'racial')!;
    expect(humanRacial.availableAt).not.toBe(elvenRacial.availableAt);
    expect(elvenRacial.availableAt).toBe('Elven Noble Bonus');
  });

  it('human racial feat slot is unaffected by elven noble addition', () => {
    const slots = computeFeatSlots([cls('Fighter', 1)], 'Human', []);
    const racial = slots.filter((s) => s.source === 'racial');
    expect(racial).toHaveLength(1);
    expect(racial[0].id).toBe('racial-feat-human-1');
  });
});

// ---- computeTotalBABFractional ----

describe('computeTotalBABFractional', () => {
  it('returns 0 for empty class list', () => {
    expect(computeTotalBABFractional([], TEST_CLASS_MAP)).toBe(0);
  });

  it('Full BAB: same as standard (no fractional difference)', () => {
    expect(computeTotalBABFractional([cls('Fighter', 5)], TEST_CLASS_MAP)).toBe(5);
    expect(computeTotalBABFractional([cls('Fighter', 10)], TEST_CLASS_MAP)).toBe(10);
  });

  it('Medium BAB (Cleric): floors once at end', () => {
    // Cleric 5: 5 × 0.75 = 3.75 → 3
    expect(computeTotalBABFractional([cls('Cleric', 5)], TEST_CLASS_MAP)).toBe(3);
  });

  it('Low BAB (Wizard): floors once at end', () => {
    // Wizard 5: 5 × 0.5 = 2.5 → 2
    expect(computeTotalBABFractional([cls('Wizard', 5)], TEST_CLASS_MAP)).toBe(2);
  });

  it('defaults unknown class to Medium (0.75)', () => {
    expect(computeTotalBABFractional([cls('UnknownClass', 4)], TEST_CLASS_MAP)).toBe(3);
  });

  it('fractional multi-class sums before flooring', () => {
    // Cleric 1 (0.75) + Rogue 1 (0.75) = 1.5 → 1
    // vs standard: floor(0.75)+floor(0.75) = 0+0 = 0
    const fractional = computeTotalBABFractional(
      [cls('Cleric', 1), cls('Rogue', 1)],
      TEST_CLASS_MAP,
    );
    expect(fractional).toBe(1); // fractional is strictly better here
  });
});

// ---- computeBase*Fractional ----

describe('computeBaseFortFractional', () => {
  it('Good Fort (Cleric 5): 2 + floor(5/2) = 4', () => {
    expect(computeBaseFortFractional([cls('Cleric', 5)], TEST_CLASS_MAP)).toBe(4);
  });

  it('Poor Fort (Wizard 5): floor(5/3) = 1', () => {
    expect(computeBaseFortFractional([cls('Wizard', 5)], TEST_CLASS_MAP)).toBe(1);
  });

  it('no +2 when all classes have Poor Fort', () => {
    expect(computeBaseFortFractional([cls('Wizard', 3)], TEST_CLASS_MAP)).toBe(1);
  });

  it('defaults unknown class to Poor save (level/3)', () => {
    expect(computeBaseFortFractional([cls('UnknownClass', 3)], TEST_CLASS_MAP)).toBe(1);
  });

  it('multi-class: Good + Poor sums fractions before floor', () => {
    // Cleric 1 (good: 0.5) + Wizard 1 (poor: 0.33) = 0.83 → 0; +2 base = 2
    expect(computeBaseFortFractional([cls('Cleric', 1), cls('Wizard', 1)], TEST_CLASS_MAP)).toBe(2);
  });
});

describe('computeBaseRefFractional', () => {
  it('Good Ref (Rogue 4): 2 + floor(4/2) = 4', () => {
    expect(computeBaseRefFractional([cls('Rogue', 4)], TEST_CLASS_MAP)).toBe(4);
  });

  it('Poor Ref (Cleric 5): floor(5/3) = 1', () => {
    expect(computeBaseRefFractional([cls('Cleric', 5)], TEST_CLASS_MAP)).toBe(1);
  });

  it('mixed Good + Poor Ref', () => {
    expect(computeBaseRefFractional([cls('Rogue', 4), cls('Cleric', 4)], TEST_CLASS_MAP)).toBe(5);
  });
});

describe('computeBaseWillFractional', () => {
  it('Good Will (Cleric 5): 2 + floor(5/2) = 4', () => {
    expect(computeBaseWillFractional([cls('Cleric', 5)], TEST_CLASS_MAP)).toBe(4);
  });

  it('Poor Will (Fighter 5): floor(5/3) = 1', () => {
    expect(computeBaseWillFractional([cls('Fighter', 5)], TEST_CLASS_MAP)).toBe(1);
  });

  it('multiple Good Will classes: +2 once', () => {
    // Cleric 5 + Wizard 5: 2 + floor((5/2 + 5/2)) = 2 + floor(5) = 7
    expect(computeBaseWillFractional([cls('Cleric', 5), cls('Wizard', 5)], TEST_CLASS_MAP)).toBe(7);
  });
});

// ---- computeFCBAlternateAccumulation ----

function fcbOption(
  id: string,
  className: string,
  effect: FavoredClassBonusEntry['mechanicalEffect'],
): FavoredClassBonusEntry {
  return {
    id,
    raceName: 'Dwarf',
    className,
    shortName: id,
    description: '',
    mechanicalEffect: effect,
    source: { bookId: 'crb', bookName: 'Core Rulebook', publisher: 'Paizo', page: 1 },
    isOfficial: true,
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review',
  };
}

function clsWithFCB(
  className: string,
  level: number,
  bonuses: ClassEntry['favoredClassBonuses'],
): ClassEntry {
  return { ...cls(className, level), isFavoredClass: true, favoredClassBonuses: bonuses };
}

describe('computeFCBAlternateAccumulation', () => {
  it('returns empty for no classes', () => {
    expect(computeFCBAlternateAccumulation([], [])).toEqual([]);
  });

  it('returns empty when no alternate selections exist', () => {
    const entry = clsWithFCB('Fighter', 3, [
      { level: 1, type: 'hp' as const },
      { level: 2, type: 'skill' as const },
      { level: 3, type: 'hp' as const },
    ]);
    expect(computeFCBAlternateAccumulation([entry], [])).toEqual([]);
  });

  it('tallies a single alternate and formats a bonus display', () => {
    const opt = fcbOption('dwarf-fighter', 'Fighter', {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmd',
      perLevelValue: { numerator: 1, denominator: 1 },
      vsCombatManeuver: ['bull_rush', 'trip'],
    });
    const entry = clsWithFCB('Fighter', 4, [
      { level: 1, type: 'alternate' as const, optionId: 'dwarf-fighter' },
      { level: 2, type: 'alternate' as const, optionId: 'dwarf-fighter' },
      { level: 3, type: 'alternate' as const, optionId: 'dwarf-fighter' },
      { level: 4, type: 'hp' as const },
    ]);
    const result = computeFCBAlternateAccumulation([entry], [opt]);
    expect(result).toHaveLength(1);
    expect(result[0].count).toBe(3);
    expect(result[0].display).toBe('+3 cmd vs bull_rush/trip');
  });

  it('floors fractional accumulation correctly', () => {
    // 3 levels in a 1/2 bonus → floor(3/2) = 1
    const opt = fcbOption('dwarf-ranger', 'Ranger', {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'wild_empathy',
      perLevelValue: { numerator: 1, denominator: 2 },
    });
    const entry = clsWithFCB('Ranger', 3, [
      { level: 1, type: 'alternate' as const, optionId: 'dwarf-ranger' },
      { level: 2, type: 'alternate' as const, optionId: 'dwarf-ranger' },
      { level: 3, type: 'alternate' as const, optionId: 'dwarf-ranger' },
    ]);
    const result = computeFCBAlternateAccumulation([entry], [opt]);
    expect(result[0].display).toBe('+1 wild_empathy');
  });

  it('accumulates resource_pool correctly', () => {
    const opt = fcbOption('dwarf-barbarian', 'Barbarian', {
      type: 'resource_pool',
      resourceId: 'rage_rounds',
      perLevelValue: { numerator: 1, denominator: 1 },
    });
    const entry = clsWithFCB('Barbarian', 5, [
      ...Array.from({ length: 5 }, (_, i) => ({
        level: i + 1,
        type: 'alternate' as const,
        optionId: 'dwarf-barbarian',
      })),
    ]);
    const result = computeFCBAlternateAccumulation([entry], [opt]);
    expect(result[0].count).toBe(5);
    expect(result[0].display).toBe('+5 rage rounds');
  });

  it('handles two distinct alternates independently', () => {
    const opt1 = fcbOption('dwarf-paladin-a', 'Paladin', {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'concentration',
      perLevelValue: { numerator: 1, denominator: 2 },
    });
    const opt2 = fcbOption('dwarf-paladin-b', 'Paladin', {
      type: 'feature_uses_per_day',
      featureName: 'domain_power',
      perLevelValue: { numerator: 1, denominator: 2 },
      requiresPickOne: true,
    });
    const entry = clsWithFCB('Paladin', 4, [
      { level: 1, type: 'alternate' as const, optionId: 'dwarf-paladin-a' },
      { level: 2, type: 'alternate' as const, optionId: 'dwarf-paladin-b' },
      { level: 3, type: 'alternate' as const, optionId: 'dwarf-paladin-a' },
      { level: 4, type: 'alternate' as const, optionId: 'dwarf-paladin-b' },
    ]);
    const result = computeFCBAlternateAccumulation([entry], [opt1, opt2]);
    expect(result).toHaveLength(2);
    const a = result.find((r) => r.optionId === 'dwarf-paladin-a')!;
    const b = result.find((r) => r.optionId === 'dwarf-paladin-b')!;
    expect(a.count).toBe(2);
    expect(a.display).toBe('+1 concentration');
    expect(b.count).toBe(2);
    expect(b.display).toContain('domain_power');
  });

  it('ignores unknown optionIds (option not in provided list)', () => {
    const entry = clsWithFCB('Fighter', 2, [
      { level: 1, type: 'alternate' as const, optionId: 'unknown-option' },
    ]);
    expect(computeFCBAlternateAccumulation([entry], [])).toEqual([]);
  });

  // ---- fcbEffectDisplay branch coverage ----

  function display(effect: FavoredClassBonusEntry['mechanicalEffect'], count: number): string {
    const opt = fcbOption('test-opt', 'Fighter', effect);
    const entry = clsWithFCB('Fighter', count, [
      ...Array.from({ length: count }, (_, i) => ({
        level: i + 1,
        type: 'alternate' as const,
        optionId: 'test-opt',
      })),
    ]);
    return computeFCBAlternateAccumulation([entry], [opt])[0]?.display ?? '';
  }

  it('natural_armor — self target omits entity suffix', () => {
    expect(
      display(
        { type: 'natural_armor', target: 'self', perLevelValue: { numerator: 1, denominator: 2 } },
        4,
      ),
    ).toBe('+2 natural armor');
  });

  it('natural_armor — non-self target appends entity name', () => {
    expect(
      display(
        {
          type: 'natural_armor',
          target: 'eidolon',
          perLevelValue: { numerator: 1, denominator: 1 },
        },
        3,
      ),
    ).toBe('+3 natural armor (eidolon)');
  });

  it('damage_reduction — standard model (no baseValue)', () => {
    expect(
      display(
        {
          type: 'damage_reduction',
          target: 'eidolon',
          damageType: 'evil',
          perLevelValue: { numerator: 1, denominator: 2 },
        },
        4,
      ),
    ).toBe('DR 2/evil (eidolon)');
  });

  it('damage_reduction — baseValue model (first pick full, rest fractional)', () => {
    expect(
      display(
        {
          type: 'damage_reduction',
          target: 'eidolon',
          damageType: 'evil',
          perLevelValue: { numerator: 1, denominator: 2 },
          baseValue: 1,
        },
        3,
      ),
    ).toBe('DR 2/evil (eidolon)');
  });

  it('damage_reduction — maxTotal cap shown in display', () => {
    expect(
      display(
        {
          type: 'damage_reduction',
          target: 'self',
          damageType: 'silver',
          perLevelValue: { numerator: 1, denominator: 1 },
          maxTotal: 5,
        },
        3,
      ),
    ).toBe('DR 3/silver (max 5) (self)');
  });

  it('class_level_bump — no requiresPickOne, no scope', () => {
    expect(
      display(
        {
          type: 'class_level_bump',
          featureName: 'judgment',
          perLevelValue: { numerator: 1, denominator: 3 },
          requiresPickOne: false,
        },
        3,
      ),
    ).toBe('+1 effective level for judgment');
  });

  it('class_level_bump — requiresPickOne with pickOnePrompt and scopeDescription', () => {
    const d = display(
      {
        type: 'class_level_bump',
        featureName: 'bardic_performance',
        perLevelValue: { numerator: 1, denominator: 6 },
        requiresPickOne: true,
        pickOnePrompt: 'bardic performance',
        scopeDescription: 'only for duration',
      },
      6,
    );
    expect(d).toContain('(chosen bardic performance)');
    expect(d).toContain('only for duration');
  });

  it('feature_uses_per_day — no requiresPickOne', () => {
    expect(
      display(
        {
          type: 'feature_uses_per_day',
          featureName: 'smite_evil',
          perLevelValue: { numerator: 1, denominator: 4 },
          requiresPickOne: false,
        },
        4,
      ),
    ).toBe('+1 uses/day for smite_evil');
  });

  it('arcane_spell_failure_reduction', () => {
    expect(
      display(
        {
          type: 'arcane_spell_failure_reduction',
          armorCategory: 'medium',
          perLevelPercent: { numerator: 1, denominator: 1 },
          maxReduction: 10,
        },
        3,
      ),
    ).toBe('-3% arcane spell failure (medium armor)');
  });

  it('weapon_proficiency_chip', () => {
    expect(
      display(
        {
          type: 'weapon_proficiency_chip',
          perLevelValue: { numerator: 1, denominator: 1 },
          requiresPickOne: true,
          unlockProficiencyAtZero: true,
        },
        4,
      ),
    ).toBe('Non-proficiency penalty -4 (chosen weapon)');
  });

  it('firearm_misfire_reduction', () => {
    expect(
      display(
        {
          type: 'firearm_misfire_reduction',
          perLevelValue: { numerator: 1, denominator: 4 },
          requiresPickOne: true,
          minimumMisfire: 1,
        },
        4,
      ),
    ).toBe('Misfire chance -1 (chosen firearm)');
  });

  it('caster_level — full scope, no extras', () => {
    expect(
      display(
        {
          type: 'caster_level',
          scopeType: 'full',
          perLevelValue: { numerator: 1, denominator: 4 },
        },
        4,
      ),
    ).toBe('+1 CL');
  });

  it('caster_level — duration_only scope with schoolFilter and requiresPickOne', () => {
    const d = display(
      {
        type: 'caster_level',
        scopeType: 'duration_only',
        perLevelValue: { numerator: 1, denominator: 3 },
        schoolFilter: 'abjuration',
        requiresPickOne: true,
        pickOnePrompt: 'option',
      },
      3,
    );
    expect(d).toContain('abjuration');
    expect(d).toContain('duration only');
    expect(d).toContain('(chosen option)');
  });

  it('crafting_speedup', () => {
    expect(
      display(
        {
          type: 'crafting_speedup',
          goldPerDay: 200,
          goldPerDayAdventuring: 50,
          requiresPickOne: true,
          pickOnePrompt: 'item_creation_feat',
        },
        3,
      ),
    ).toBe('+600 gp/day crafting (+150 adventuring, chosen feat)');
  });

  it('hardness_reduction_on_strike', () => {
    expect(
      display(
        {
          type: 'hardness_reduction_on_strike',
          materials: ['clay', 'stone', 'metal'],
          perLevelValue: { numerator: 1, denominator: 1 },
          minimumResultingHardness: 0,
        },
        2,
      ),
    ).toBe('Hardness -2 on strike (clay, stone, metal)');
  });

  it('feature_numeric_bump', () => {
    expect(
      display(
        {
          type: 'feature_numeric_bump',
          featureName: 'painful_stare',
          bumpType: 'damage',
          perLevelValue: { numerator: 1, denominator: 4 },
        },
        4,
      ),
    ).toBe('+1 damage for painful_stare');
  });

  it('learn_option', () => {
    expect(
      display(
        {
          type: 'learn_option',
          optionType: 'spell_known',
          perLevelValue: { numerator: 1, denominator: 1 },
        },
        3,
      ),
    ).toBe('3× spell known learned');
  });

  it('compound — delegates to sub-effects', () => {
    const d = display(
      {
        type: 'compound',
        effects: [
          {
            type: 'resource_pool',
            resourceId: 'ki',
            perLevelValue: { numerator: 1, denominator: 2 },
          },
          { type: 'unmapped', reason: 'complex secondary effect' },
        ],
      },
      2,
    );
    expect(d).toContain('ki');
    expect(d).toContain('invested');
  });

  it('unmapped — shows count and investment label', () => {
    expect(display({ type: 'unmapped', reason: 'complex movement adjustment' }, 1)).toBe(
      '1 level invested',
    );
    expect(display({ type: 'unmapped', reason: 'complex movement adjustment' }, 3)).toBe(
      '3 levels invested',
    );
  });

  it('bonus — vsCreatureType, inTerrain, conditionDescription, requiresPickOne', () => {
    const d = display(
      {
        type: 'bonus',
        bonusType: 'untyped',
        target: 'attack',
        perLevelValue: { numerator: 1, denominator: 2 },
        vsCreatureType: ['goblin'],
        inTerrain: ['forest'],
        conditionDescription: 'while raging',
        requiresPickOne: true,
        pickOnePrompt: 'weapon type',
      },
      2,
    );
    expect(d).toContain('vs goblin');
    expect(d).toContain('forest');
    expect(d).toContain('while raging');
    expect(d).toContain('chosen weapon type');
  });

  it('bonus — applyInIncrementsOf snaps to nearest multiple', () => {
    // 7 levels × 1/level = 7, but snap to multiples of 5 → effective 5
    expect(
      display(
        {
          type: 'bonus',
          bonusType: 'untyped',
          target: 'speed',
          perLevelValue: { numerator: 1, denominator: 1 },
          applyInIncrementsOf: 5,
        },
        7,
      ),
    ).toBe('+5 speed');
  });

  it('spans multiple class entries', () => {
    const opt = fcbOption('human-fighter', 'Fighter', {
      type: 'bonus',
      bonusType: 'untyped',
      target: 'cmb',
      perLevelValue: { numerator: 1, denominator: 1 },
    });
    const cls1 = clsWithFCB('Fighter', 2, [
      { level: 1, type: 'alternate' as const, optionId: 'human-fighter' },
    ]);
    const cls2 = clsWithFCB('Fighter', 3, [
      { level: 1, type: 'alternate' as const, optionId: 'human-fighter' },
      { level: 2, type: 'alternate' as const, optionId: 'human-fighter' },
    ]);
    const result = computeFCBAlternateAccumulation([cls1, cls2], [opt]);
    expect(result[0].count).toBe(3);
    expect(result[0].display).toBe('+3 cmb');
  });
});

// ---- fcbEffectDisplay branch coverage (count=0 and bonus+requiresPickOne) ----

it('returns empty string when count is 0', () => {
  const opt = fcbOption('test', 'Fighter', {
    type: 'bonus',
    bonusType: 'untyped',
    target: 'cmb',
    perLevelValue: { numerator: 1, denominator: 1 },
  });
  const entry = clsWithFCB('Fighter', 0, []);
  const result = computeFCBAlternateAccumulation([entry], [opt]);
  // count is 0 so display should be empty
  expect(result).toHaveLength(0);
});

it('bonus type with requiresPickOne appends chosen prompt', () => {
  const opt = fcbOption('pick-one', 'Magus', {
    type: 'bonus',
    bonusType: 'untyped',
    target: 'concentration',
    perLevelValue: { numerator: 1, denominator: 1 },
    requiresPickOne: true,
    pickOnePrompt: 'school',
  });
  const entry = clsWithFCB('Magus', 2, [{ level: 1, type: 'alternate', optionId: 'pick-one' }]);
  const result = computeFCBAlternateAccumulation([entry], [opt]);
  expect(result[0].display).toContain('(chosen school)');
});

it('class_level_bump with requiresPickOne but no pickOnePrompt falls back to featureName', () => {
  const opt = fcbOption('bump-noprompt', 'Inquisitor', {
    type: 'class_level_bump',
    featureName: 'bane',
    perLevelValue: { numerator: 1, denominator: 3 },
    requiresPickOne: true,
  });
  const entry = clsWithFCB('Inquisitor', 3, [
    { level: 1, type: 'alternate', optionId: 'bump-noprompt' },
  ]);
  const result = computeFCBAlternateAccumulation([entry], [opt]);
  expect(result[0].display).toContain('(chosen bane)');
});
