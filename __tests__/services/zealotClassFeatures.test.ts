import { ZEALOT_CLASS } from '@/data/classes/initiating/zealot';
import type { ClassFeatureData } from '@/data/classes/types';
import type { Effect } from '@/types/base';

// Helper: find a feature by name (throws if missing)
function find(name: string): ClassFeatureData {
  const feat = ZEALOT_CLASS.classFeatures.find((f) => f.name === name);
  if (!feat) throw new Error(`Feature not found: ${name}`);
  return feat;
}

describe('Zealot class feature effects — acceptance criteria', () => {
  // ── Criterion 1 ──────────────────────────────────────────────
  describe('every feature has an effects array', () => {
    it('all classFeatures have an effects property that is an array', () => {
      ZEALOT_CLASS.classFeatures.forEach((f) => {
        expect(Array.isArray(f.effects)).toBe(true);
      });
    });
  });

  // ── Criterion 2 ──────────────────────────────────────────────
  describe('mechanically-active features have id, shortDescription, activationMode', () => {
    it('every feature with activationMode set also has id and shortDescription', () => {
      const active = ZEALOT_CLASS.classFeatures.filter((f) => f.activationMode);
      expect(active.length).toBeGreaterThan(0);
      active.forEach((f) => {
        expect(f.id).toBeDefined();
        expect(f.shortDescription).toBeDefined();
      });
    });

    it('Martyrdom is action-mode with id and shortDescription', () => {
      const f = find('Martyrdom');
      expect(f.activationMode).toBe('action');
      expect(f.id).toBeDefined();
      expect(f.shortDescription).toBeDefined();
    });

    it('Echoes of Steel is action-mode with PP activationCost', () => {
      const f = find('Echoes of Steel');
      expect(f.activationMode).toBe('action');
      expect(f.id).toBeDefined();
      expect(f.activationCost).toBeDefined();
      expect(f.activationCost?.resourceId).toBe('power_points');
    });

    it('Conviction: Path of Dedication is action-mode with id', () => {
      const f = find('Conviction: Path of Dedication');
      expect(f.activationMode).toBe('action');
      expect(f.id).toBeDefined();
    });

    it('Conviction: Enduring Zeal is action-mode with PP activationCost', () => {
      const f = find('Conviction: Enduring Zeal');
      expect(f.activationMode).toBe('action');
      expect(f.activationCost?.resourceId).toBe('power_points');
    });

    it('Conviction: Strike of Unity is action-mode with PP activationCost', () => {
      const f = find('Conviction: Strike of Unity');
      expect(f.activationMode).toBe('action');
      expect(f.activationCost?.resourceId).toBe('power_points');
    });
  });

  // ── Criterion 3 ──────────────────────────────────────────────
  describe('toggle-gated effects carry activation.active = false', () => {
    it('every toggle activation in an effect has active: false', () => {
      ZEALOT_CLASS.classFeatures.forEach((f) => {
        (f.effects ?? []).forEach((effect: Effect) => {
          if (effect.activation?.type === 'toggle') {
            expect(effect.activation.active).toBe(false);
          }
        });
      });
    });
  });

  // ── Criterion 4 ──────────────────────────────────────────────
  describe('cross-character effects use type: special with special.X target', () => {
    it('Collective has a special effect with special.* target', () => {
      const f = find('Collective');
      const e = (f.effects ?? []).find((eff: Effect) => eff.type === 'special');
      expect(e).toBeDefined();
      expect(e?.target).toMatch(/^special\./);
    });

    it('Zeal has a special effect with special.* target', () => {
      const f = find('Zeal');
      const e = (f.effects ?? []).find((eff: Effect) => eff.type === 'special');
      expect(e).toBeDefined();
      expect(e?.target).toMatch(/^special\./);
    });

    it('Martyrdom has a special effect with special.* target', () => {
      const f = find('Martyrdom');
      const e = (f.effects ?? []).find((eff: Effect) => eff.type === 'special');
      expect(e).toBeDefined();
      expect(e?.target).toMatch(/^special\./);
    });

    it('Telepathy has a special effect with special.* target', () => {
      const f = find('Telepathy');
      const e = (f.effects ?? []).find((eff: Effect) => eff.type === 'special');
      expect(e).toBeDefined();
      expect(e?.target).toMatch(/^special\./);
    });

    it('all special-type effects use a compound special.X target', () => {
      ZEALOT_CLASS.classFeatures.forEach((f) => {
        (f.effects ?? []).forEach((effect: Effect) => {
          if (effect.type === 'special') {
            expect(effect.target).toMatch(/^special\./);
          }
        });
      });
    });
  });
});
