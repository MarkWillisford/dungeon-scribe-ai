import {
  rangerDefinitions,
  PLANES_FAVORED_TERRAIN_OPTIONS,
} from '../../src/data/classChoiceDefinitions/ranger';

describe('Ranger Favored Terrain options', () => {
  const favoredTerrainDef = rangerDefinitions.find((d) => d.id === 'ranger-favored-terrain');
  const terrainOptions = favoredTerrainDef?.optionGroups?.flatMap((g) => g.options) ?? [];

  it('has the ranger-favored-terrain definition', () => {
    expect(favoredTerrainDef).toBeDefined();
  });

  it('does not contain a generic "Planes (choose type)" entry', () => {
    const genericPlanes = terrainOptions.find((o) => o.id === 'planes');
    expect(genericPlanes).toBeUndefined();
  });

  test.each(PLANES_FAVORED_TERRAIN_OPTIONS.map(({ id, name }) => ({ id, name })))(
    'has individual entry for $name',
    ({ id, name }) => {
      const option = terrainOptions.find((o) => o.id === id);
      expect(option).toBeDefined();
      expect(option?.name).toBe(name);
    },
  );

  it('keeps all non-plane terrain entries intact', () => {
    const nonPlaneIds = [
      'cold',
      'desert',
      'forest',
      'jungle',
      'mountain',
      'plains',
      'swamp',
      'underground',
      'urban',
      'water',
    ];
    for (const id of nonPlaneIds) {
      expect(terrainOptions.find((o) => o.id === id)).toBeDefined();
    }
  });
});
