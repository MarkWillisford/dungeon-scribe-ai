import { FLAWS_3_5E } from '@/data/flaws';
import { FlawRegistryService } from '@services/FlawRegistryService';

describe('flaw seed data integrity', () => {
  beforeEach(() => {
    FlawRegistryService.registerBatch(FLAWS_3_5E);
  });

  afterEach(() => {
    FlawRegistryService.clear();
  });

  test('seeds at least 8 flaws', () => {
    expect(FlawRegistryService.getCount()).toBeGreaterThanOrEqual(8);
  });

  test('getFlawsBySource returns all seeded 3.5e entries', () => {
    const results = FlawRegistryService.getFlawsBySource('3.5e');
    expect(results.length).toBe(FLAWS_3_5E.length);
  });

  test('each seeded flaw has a non-empty effects array', () => {
    for (const flaw of FLAWS_3_5E) {
      expect(flaw.effects.length).toBeGreaterThan(0);
    }
  });

  test('getFlaw returns populated FlawDefinition for each seeded id', () => {
    for (const flaw of FLAWS_3_5E) {
      const found = FlawRegistryService.getFlaw(flaw.id);
      expect(found).toBeDefined();
      expect(found?.effects.length).toBeGreaterThan(0);
    }
  });

  test('noncombatant has penalty effect on attack.melee', () => {
    const flaw = FlawRegistryService.getFlaw('noncombatant');
    expect(flaw).toBeDefined();
    expect(flaw?.effects[0].type).toBe('penalty');
  });

  test("Taboo Proficiency and Deity's Wrath are absent", () => {
    expect(FlawRegistryService.getFlaw('taboo_proficiency')).toBeUndefined();
    expect(FlawRegistryService.getFlaw('deitys_wrath')).toBeUndefined();
  });
});
