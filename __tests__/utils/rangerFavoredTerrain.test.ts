import { rangerDefinitions } from '../../src/data/classChoiceDefinitions/ranger';

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

  const expectedPlanes = [
    { id: 'planes-astral', name: 'Planes (Astral Plane)' },
    { id: 'planes-ethereal', name: 'Planes (Ethereal Plane)' },
    { id: 'planes-shadow', name: 'Planes (Shadow Plane)' },
    { id: 'planes-positive', name: 'Planes (Positive Energy Plane)' },
    { id: 'planes-negative', name: 'Planes (Negative Energy Plane)' },
    { id: 'planes-air', name: 'Planes (Elemental Plane of Air)' },
    { id: 'planes-earth', name: 'Planes (Elemental Plane of Earth)' },
    { id: 'planes-fire', name: 'Planes (Elemental Plane of Fire)' },
    { id: 'planes-water', name: 'Planes (Elemental Plane of Water)' },
    { id: 'planes-heaven', name: 'Planes (Heaven)' },
    { id: 'planes-nirvana', name: 'Planes (Nirvana)' },
    { id: 'planes-elysium', name: 'Planes (Elysium)' },
    { id: 'planes-axis', name: 'Planes (Axis)' },
    { id: 'planes-maelstrom', name: 'Planes (Maelstrom)' },
    { id: 'planes-hell', name: 'Planes (Hell)' },
    { id: 'planes-abaddon', name: 'Planes (Abaddon)' },
    { id: 'planes-abyss', name: 'Planes (The Abyss)' },
    { id: 'planes-boneyard', name: 'Planes (Boneyard)' },
  ];

  test.each(expectedPlanes)('has individual entry for $name', ({ id, name }) => {
    const option = terrainOptions.find((o) => o.id === id);
    expect(option).toBeDefined();
    expect(option?.name).toBe(name);
  });

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
