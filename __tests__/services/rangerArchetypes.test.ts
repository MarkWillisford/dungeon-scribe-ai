import { RANGER_ARCHETYPES } from '../../src/data/classes/archetypes/rangerArchetypes';

describe('RANGER_ARCHETYPES', () => {
  describe('Divine Marksman', () => {
    const divineMarksman = RANGER_ARCHETYPES.find((a) => a.name === 'Divine Marksman');

    test('exists in the ranger archetypes list', () => {
      expect(divineMarksman).toBeDefined();
    });

    test('is assigned to the Ranger class', () => {
      expect(divineMarksman?.className).toBe('Ranger');
    });

    test('replaces Track and Wild Empathy at level 1', () => {
      expect(divineMarksman?.replacedFeatures).toContain('Track');
      expect(divineMarksman?.replacedFeatures).toContain('Wild Empathy');
    });

    test('replaces all spellcasting at level 4', () => {
      expect(divineMarksman?.replacedFeatures).toContain('Spellcasting');
    });

    test('replaces Swift Tracker at level 8', () => {
      expect(divineMarksman?.replacedFeatures).toContain('Swift Tracker');
    });

    test('replaces Quarry at level 11', () => {
      expect(divineMarksman?.replacedFeatures).toContain('Quarry');
    });

    test('replaces Improved Quarry at level 19', () => {
      expect(divineMarksman?.replacedFeatures).toContain('Improved Quarry');
    });

    test('modifies the combat style feat to require archery', () => {
      expect(divineMarksman?.modifiedFeatures).toContain('Combat Style Feat (must select archery)');
    });

    test('includes Bullseye Shot feature at level 1', () => {
      const feature = divineMarksman?.newFeatures.find((f) => f.name === 'Bullseye Shot');
      expect(feature).toBeDefined();
      expect(feature?.level).toBe(1);
    });

    test('includes Archery Style feature at level 2', () => {
      const feature = divineMarksman?.newFeatures.find((f) => f.name === 'Archery Style');
      expect(feature).toBeDefined();
      expect(feature?.level).toBe(2);
    });

    test('includes Vicious Aim feature at level 4', () => {
      const feature = divineMarksman?.newFeatures.find((f) => f.name === 'Vicious Aim');
      expect(feature).toBeDefined();
      expect(feature?.level).toBe(4);
    });

    test('includes Divine Influence feature at level 8', () => {
      const feature = divineMarksman?.newFeatures.find((f) => f.name === 'Divine Influence');
      expect(feature).toBeDefined();
      expect(feature?.level).toBe(8);
    });

    test('includes Pinpoint Targeting feature at level 11', () => {
      const feature = divineMarksman?.newFeatures.find((f) => f.name === 'Pinpoint Targeting');
      expect(feature).toBeDefined();
      expect(feature?.level).toBe(11);
    });

    test('includes Quarry feature at level 19', () => {
      const feature = divineMarksman?.newFeatures.find((f) => f.name === 'Quarry');
      expect(feature).toBeDefined();
      expect(feature?.level).toBe(19);
    });

    test("is attributed to Pathfinder Player Companion: Weapon Master's Handbook", () => {
      expect(divineMarksman?.source).toBe("Pathfinder Player Companion: Weapon Master's Handbook");
    });

    test('all new features have non-empty descriptions', () => {
      divineMarksman?.newFeatures.forEach((feature) => {
        expect(feature.description.trim().length).toBeGreaterThan(0);
      });
    });
  });
});
