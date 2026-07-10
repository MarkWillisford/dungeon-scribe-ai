import { StaticGameDataConnector } from '@/services/StaticGameDataConnector';

const connector = new StaticGameDataConnector();

describe('classChoiceDefinitions — rogue (chained)', () => {
  test('returns rogue talent definition for "Rogue"', async () => {
    const defs = await connector.getClassChoiceDefinitions('Rogue');
    expect(defs.length).toBeGreaterThan(0);
    const talentDef = defs.find((d) => d.id === 'rogue-talent');
    expect(talentDef).toBeDefined();
    expect(talentDef?.className).toBe('rogue');
    expect(talentDef?.featureName).toBe('Rogue Talent');
    expect(talentDef?.selectionMode.type).toBe('at_class_levels');
  });

  test('lookup is case-insensitive ("rogue" works like "Rogue")', async () => {
    const defs = await connector.getClassChoiceDefinitions('rogue');
    expect(defs.find((d) => d.id === 'rogue-talent')).toBeDefined();
  });
});

describe('classChoiceDefinitions — rogue (unchained)', () => {
  test('returns unchained rogue definitions for "Rogue (Unchained)"', async () => {
    const defs = await connector.getClassChoiceDefinitions('Rogue (Unchained)');
    expect(defs.length).toBeGreaterThanOrEqual(2);
    expect(defs.find((d) => d.id === 'rogue-unchained-talent')).toBeDefined();
    expect(defs.find((d) => d.id === 'rogue-unchained-finesse-training')).toBeDefined();
  });

  test('unchained talent definition has className matching class display name', async () => {
    const defs = await connector.getClassChoiceDefinitions('Rogue (Unchained)');
    const talentDef = defs.find((d) => d.id === 'rogue-unchained-talent');
    expect(talentDef?.className).toBe('rogue (unchained)');
  });

  test('unchained talent definition has correct levels', async () => {
    const defs = await connector.getClassChoiceDefinitions('Rogue (Unchained)');
    const talentDef = defs.find((d) => d.id === 'rogue-unchained-talent');
    expect(talentDef?.selectionMode.type).toBe('at_class_levels');
    if (talentDef?.selectionMode.type === 'at_class_levels') {
      expect(talentDef.selectionMode.levels).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    }
  });

  test('finesse training definition has correct levels', async () => {
    const defs = await connector.getClassChoiceDefinitions('Rogue (Unchained)');
    const finesseDef = defs.find((d) => d.id === 'rogue-unchained-finesse-training');
    expect(finesseDef?.selectionMode.type).toBe('at_class_levels');
    if (finesseDef?.selectionMode.type === 'at_class_levels') {
      expect(finesseDef.selectionMode.levels).toEqual([3, 11, 19]);
    }
  });
});

describe('classChoiceDefinitions — barbarian (unchained)', () => {
  test('returns unchained barbarian definitions for "Barbarian (Unchained)"', async () => {
    const defs = await connector.getClassChoiceDefinitions('Barbarian (Unchained)');
    expect(defs.length).toBeGreaterThan(0);
    const ragePowerDef = defs.find((d) => d.id === 'barbarian-unchained-rage-power');
    expect(ragePowerDef).toBeDefined();
    expect(ragePowerDef?.className).toBe('barbarian (unchained)');
  });
});

describe('classChoiceDefinitions — summoner (unchained)', () => {
  test('returns unchained summoner definitions for "Summoner (Unchained)"', async () => {
    const defs = await connector.getClassChoiceDefinitions('Summoner (Unchained)');
    expect(defs.length).toBeGreaterThan(0);

    const subtypeDef = defs.find((d) => d.id === 'summoner-unchained-subtype');
    expect(subtypeDef).toBeDefined();
    expect(subtypeDef?.className).toBe('summoner (unchained)');

    const eidolonEvolutionDef = defs.find((d) => d.id === 'summoner-unchained-eidolon-evolution');
    expect(eidolonEvolutionDef).toBeDefined();
    expect(eidolonEvolutionDef?.className).toBe('summoner (unchained)');
  });
});
