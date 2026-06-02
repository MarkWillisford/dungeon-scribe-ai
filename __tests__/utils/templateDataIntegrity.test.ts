import { TEMPLATES_BATCH_010 } from '@/data/templates/raw/templates_batch_010';
import { TEMPLATES_BATCH_018 } from '@/data/templates/raw/templates_batch_018';

describe('template data integrity', () => {
  describe('holy-creature', () => {
    it('appears only once across all raw batches (batch_018 must not redefine it)', () => {
      const batch018Entry = TEMPLATES_BATCH_018.find((t) => t.id === 'holy-creature');
      expect(batch018Entry).toBeUndefined();
    });

    it('canonical entry in batch_010 has prerequisites', () => {
      const entry = TEMPLATES_BATCH_010.find((t) => t.id === 'holy-creature');
      expect(entry).toBeDefined();
      expect(entry!.prerequisites).toBeDefined();
      expect(entry!.prerequisites!.length).toBeGreaterThan(0);
    });

    it('canonical entry in batch_010 has immunities', () => {
      const entry = TEMPLATES_BATCH_010.find((t) => t.id === 'holy-creature');
      expect(entry).toBeDefined();
      expect(entry!.immunities).toBeDefined();
      expect(entry!.immunities!.length).toBeGreaterThan(0);
    });
  });
});
