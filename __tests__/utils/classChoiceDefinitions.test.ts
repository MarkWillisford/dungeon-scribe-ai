import { getDefinitionsForClass, getDefinitionById } from '@/data/classChoiceDefinitions/index';

describe('classChoiceDefinitions — rogue', () => {
  test('getDefinitionsForClass("Rogue") returns the rogue talent definition', () => {
    const defs = getDefinitionsForClass('Rogue');
    expect(defs.length).toBeGreaterThan(0);
    const talentDef = defs.find((d) => d.id === 'rogue-talent');
    expect(talentDef).toBeDefined();
    expect(talentDef?.featureName).toBe('Rogue Talent');
    expect(talentDef?.selectionMode.type).toBe('at_class_levels');
  });

  test('getDefinitionsForClass("rogue") also works (case-insensitive)', () => {
    const defs = getDefinitionsForClass('rogue');
    expect(defs.find((d) => d.id === 'rogue-talent')).toBeDefined();
  });

  test('getDefinitionsForClass("Rogue (Unchained)") returns unchained rogue definitions', () => {
    const defs = getDefinitionsForClass('Rogue (Unchained)');
    expect(defs.length).toBeGreaterThanOrEqual(2);
    expect(defs.find((d) => d.id === 'rogue-unchained-talent')).toBeDefined();
    expect(defs.find((d) => d.id === 'rogue-unchained-finesse-training')).toBeDefined();
  });

  test('unchained rogue talent definition has correct levels', () => {
    const defs = getDefinitionsForClass('Rogue (Unchained)');
    const talentDef = defs.find((d) => d.id === 'rogue-unchained-talent');
    expect(talentDef?.selectionMode.type).toBe('at_class_levels');
    if (talentDef?.selectionMode.type === 'at_class_levels') {
      expect(talentDef.selectionMode.levels).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    }
  });

  test('unchained finesse training definition has correct levels', () => {
    const defs = getDefinitionsForClass('Rogue (Unchained)');
    const finesseDef = defs.find((d) => d.id === 'rogue-unchained-finesse-training');
    expect(finesseDef?.selectionMode.type).toBe('at_class_levels');
    if (finesseDef?.selectionMode.type === 'at_class_levels') {
      expect(finesseDef.selectionMode.levels).toEqual([3, 11, 19]);
    }
  });

  test('getDefinitionById returns rogue-talent definition', () => {
    const def = getDefinitionById('rogue-talent');
    expect(def).toBeDefined();
    expect(def?.className).toBe('rogue');
  });

  test('getDefinitionById returns rogue-unchained-talent definition', () => {
    const def = getDefinitionById('rogue-unchained-talent');
    expect(def).toBeDefined();
  });
});

describe('classChoiceDefinitions — barbarian (unchained)', () => {
  test('getDefinitionsForClass("Barbarian (Unchained)") returns unchained barbarian definitions', () => {
    const defs = getDefinitionsForClass('Barbarian (Unchained)');
    expect(defs.length).toBeGreaterThan(0);
    expect(defs.find((d) => d.id === 'barbarian-unchained-rage-power')).toBeDefined();
  });
});

describe('classChoiceDefinitions — summoner (unchained)', () => {
  test('getDefinitionsForClass("Summoner (Unchained)") returns unchained summoner definitions', () => {
    const defs = getDefinitionsForClass('Summoner (Unchained)');
    expect(defs.length).toBeGreaterThan(0);
    expect(defs.find((d) => d.id === 'summoner-unchained-subtype')).toBeDefined();
    expect(defs.find((d) => d.id === 'summoner-unchained-eidolon-evolution')).toBeDefined();
  });
});
