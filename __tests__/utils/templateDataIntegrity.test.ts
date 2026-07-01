import { TEMPLATES_BATCH_003 } from '@/data/templates/raw/templates_batch_003';
import { TEMPLATES_BATCH_010 } from '@/data/templates/raw/templates_batch_010';
import { TEMPLATES_BATCH_018 } from '@/data/templates/raw/templates_batch_018';

const EXPECTED_CELESTIAL_NAMES = [
  'Astral Deva',
  'Avoral',
  'Bralani',
  'Ghaele',
  'Hound Archon',
  'Lantern Archon',
  'Leonal',
  'Planetar',
  'Solar',
  'Trumpet Archon',
];

describe('template data integrity', () => {
  describe('celestial-blessed-creature', () => {
    const template = TEMPLATES_BATCH_003.find((t) => t.id === 'celestial-blessed-creature');
    const celestialChoice = template?.choices?.[0];
    const allOptions = celestialChoice?.optionGroups?.flatMap((g) => g.options) ?? [];

    it('has exactly 10 celestial options', () => {
      expect(allOptions).toHaveLength(10);
    });

    it('has all expected celestial names in order', () => {
      const names = allOptions.map((o) => o.name);
      expect(names).toEqual(EXPECTED_CELESTIAL_NAMES);
    });

    it('every option has a valid grantsFeature with non-empty id, name, description, and activationMode', () => {
      for (const option of allOptions) {
        const f = option.grantsFeature;
        expect(f).toBeDefined();
        expect(f!.id).toBeTruthy();
        expect(f!.name).toBeTruthy();
        expect(f!.description).toBeTruthy();
        expect(f!.activationMode).toBeTruthy();
      }
    });

    it('resource-pool-bearing options have resourcePool set', () => {
      const withPool = allOptions.filter((o) => o.grantsFeature?.resourcePool != null);
      const withoutPool = allOptions.filter((o) => o.grantsFeature?.resourcePool == null);
      // 8 options have pools; Bralani (at-will) and Leonal (passive) do not
      expect(withPool).toHaveLength(8);
      expect(withoutPool).toHaveLength(2);
      const withoutPoolNames = withoutPool.map((o) => o.name).sort();
      expect(withoutPoolNames).toEqual(['Bralani', 'Leonal']);
      for (const option of withPool) {
        expect(option.grantsFeature?.resourcePool).toBeDefined();
      }
    });

    it('Celestial Quality (Su) feature is still present with pointer text', () => {
      const feature = template?.features?.find((f) => f.name === 'Celestial Quality (Su)');
      expect(feature).toBeDefined();
      if (feature && 'description' in feature) {
        expect(feature.description).toMatch(/see chosen Celestial Type/i);
      } else {
        throw new Error('Celestial Quality (Su) feature missing description field');
      }
    });
  });

  describe('holy-creature', () => {
    it('does not appear in batch_018', () => {
      const batch018Entry = TEMPLATES_BATCH_018.find((t) => t.id === 'holy-creature');
      expect(batch018Entry).toBeUndefined();
    });

    it('canonical entry in batch_010 has the good-alignment prerequisite', () => {
      const entry = TEMPLATES_BATCH_010.find((t) => t.id === 'holy-creature');
      expect(entry).toBeDefined();
      expect(entry!.prerequisites).toBeDefined();
      expect(entry!.prerequisites).toContainEqual({ type: 'alignment', allowed: ['any good'] });
    });

    it('canonical entry in batch_010 has evil-control immunities', () => {
      const entry = TEMPLATES_BATCH_010.find((t) => t.id === 'holy-creature');
      expect(entry).toBeDefined();
      expect(entry!.immunities).toBeDefined();
      expect(entry!.immunities).toContain('possession by evil creatures');
      expect(entry!.immunities).toContain('charm by evil creatures');
      expect(entry!.immunities).toContain('influence by evil creatures');
    });
  });
});
