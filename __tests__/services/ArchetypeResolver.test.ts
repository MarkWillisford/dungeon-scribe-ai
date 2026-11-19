import { resolveArchetype, type ArchetypeResolution } from '@services/ArchetypeResolver';
import type { ClassFeature } from '@/types/classes';
import type { ArchetypeData } from '@/data/classes/types';
import { BABProgression, SaveProgression } from '@/types/base';

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

function makeFeature(name: string, level = 1, description = ''): ClassFeature {
  return { name, level, description, effects: [] };
}

function makeArchetype(overrides: Partial<ArchetypeData> = {}): ArchetypeData {
  return {
    name: 'Test Archetype',
    className: 'Fighter',
    description: 'A test archetype.',
    replacedFeatures: [],
    modifiedFeatures: [],
    newFeatures: [],
    source: 'Test Source',
    ...overrides,
  };
}

// ---------------------------------------------------------------------------
// resolveArchetype
// ---------------------------------------------------------------------------

describe('resolveArchetype', () => {
  it('returns all base features when archetype has no replacements or additions', () => {
    const base = [makeFeature('Bravery'), makeFeature('Armor Training 1', 3)];
    const archetype = makeArchetype();
    const result = resolveArchetype(base, archetype);
    expect(result.features).toHaveLength(2);
    expect(result.features.map((f) => f.name)).toEqual(['Bravery', 'Armor Training 1']);
  });

  it('removes features named in replacedFeatures (exact match)', () => {
    const base = [
      makeFeature('Bravery'),
      makeFeature('Armor Training 1', 3),
      makeFeature('Weapon Training 1', 5),
    ];
    const archetype = makeArchetype({ replacedFeatures: ['Bravery', 'Armor Training 1'] });
    const result = resolveArchetype(base, archetype);
    expect(result.features.map((f) => f.name)).toEqual(['Weapon Training 1']);
  });

  it('appends newFeatures to the filtered list', () => {
    const base = [makeFeature('Bravery')];
    const archetype = makeArchetype({
      replacedFeatures: ['Bravery'],
      newFeatures: [
        {
          name: 'Specialist Training',
          level: 1,
          description: 'An archetype feature.',
          effects: [],
        },
      ],
    });
    const result = resolveArchetype(base, archetype);
    expect(result.features).toHaveLength(1);
    expect(result.features[0].name).toBe('Specialist Training');
  });

  it('leaves features in modifiedFeatures in the list untouched', () => {
    const base = [makeFeature('Armor Training 1', 3)];
    const archetype = makeArchetype({ modifiedFeatures: ['Armor Training 1'] });
    const result = resolveArchetype(base, archetype);
    expect(result.features.map((f) => f.name)).toContain('Armor Training 1');
  });

  it('maps ClassFeatureData fields onto ClassFeature correctly', () => {
    const base: ClassFeature[] = [];
    const archetype = makeArchetype({
      newFeatures: [
        {
          name: 'Dodge Bonus',
          level: 1,
          description: 'You gain a +1 dodge bonus to AC.',
          shortDescription: '+1 dodge AC',
          activationMode: 'passive',
          effects: [{ type: 'flat', stat: 'ac', value: 1, bonusType: 'dodge' } as never],
        },
      ],
    });
    const result = resolveArchetype(base, archetype);
    const feat = result.features[0];
    expect(feat.name).toBe('Dodge Bonus');
    expect(feat.level).toBe(1);
    expect(feat.shortDescription).toBe('+1 dodge AC');
    expect(feat.activationMode).toBe('passive');
    expect(feat.effects).toHaveLength(1);
  });

  it('defaults effects to [] when ClassFeatureData.effects is undefined', () => {
    const base: ClassFeature[] = [];
    const archetype = makeArchetype({
      newFeatures: [
        {
          name: 'Some Feature',
          level: 2,
          description: 'No effects.',
          // effects deliberately omitted
        },
      ],
    });
    const result = resolveArchetype(base, archetype);
    expect(result.features[0].effects).toEqual([]);
  });

  it('always returns status clean, empty conflicts, and maxSafeLevel 20', () => {
    const result = resolveArchetype([], makeArchetype());
    expect(result.status).toBe('clean');
    expect(result.conflicts).toEqual([]);
    expect(result.maxSafeLevel).toBe(20);
  });

  it('does not mutate the input base features array', () => {
    const base = [makeFeature('Bravery')];
    const archetype = makeArchetype({
      replacedFeatures: ['Bravery'],
      newFeatures: [{ name: 'New', level: 1, description: '' }],
    });
    resolveArchetype(base, archetype);
    expect(base).toHaveLength(1);
    expect(base[0].name).toBe('Bravery');
  });
});
