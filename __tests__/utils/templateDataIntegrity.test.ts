import { TEMPLATES_BATCH_010 } from '@/data/templates/raw/templates_batch_010';
import { TEMPLATES_BATCH_018 } from '@/data/templates/raw/templates_batch_018';

describe('template data integrity', () => {
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
