import { MYSTIC_CLASS } from '@/data/classes/initiating/mystic';
import type { ClassFeatureData } from '@/data/classes/types';

function getFeature(name: string, level?: number): ClassFeatureData {
  const feature =
    level !== undefined
      ? MYSTIC_CLASS.classFeatures.find((f) => f.name === name && f.level === level)
      : MYSTIC_CLASS.classFeatures.find((f) => f.name === name);
  if (!feature)
    throw new Error(`Feature not found: ${name}${level !== undefined ? ` (level ${level})` : ''}`);
  return feature;
}

describe('MYSTIC_CLASS classFeatures', () => {
  describe('data integrity', () => {
    it('every feature has an effects array', () => {
      MYSTIC_CLASS.classFeatures.forEach((feature: ClassFeatureData) => {
        expect(Array.isArray(feature.effects)).toBe(true);
      });
    });

    it('every feature with activationMode set has id and shortDescription', () => {
      MYSTIC_CLASS.classFeatures
        .filter((f: ClassFeatureData) => f.activationMode !== undefined)
        .forEach((feature: ClassFeatureData) => {
          expect(feature.id).toBeTruthy();
          expect(feature.shortDescription).toBeTruthy();
        });
    });

    it('all type:special effects use compound dot-separated target keys', () => {
      MYSTIC_CLASS.classFeatures.forEach((feature: ClassFeatureData) => {
        (feature.effects ?? [])
          .filter((e) => e.type === 'special')
          .forEach((effect) => {
            expect(effect.target).toContain('.');
          });
      });
    });
  });

  describe('Animus — resource pool definition', () => {
    it('has id and shortDescription', () => {
      const feature = getFeature('Animus');
      expect(feature.id).toBeTruthy();
      expect(feature.shortDescription).toBeTruthy();
    });

    it('defines the mystic_animus resource pool', () => {
      const feature = getFeature('Animus');
      expect(feature.resourcePool).toBeDefined();
      expect(feature.resourcePool!.id).toBe('mystic_animus');
      expect(feature.resourcePool!.name).toBeTruthy();
      expect(feature.resourcePool!.maxFormula).toBeTruthy();
      expect(feature.resourcePool!.rechargeOn).toBe('special');
      expect(feature.resourcePool!.restRecoveryMode).toBe('full');
    });
  });

  describe('Elemental Attunement — action-mode', () => {
    it('is marked as action-mode with id and shortDescription', () => {
      const feature = getFeature('Elemental Attunement');
      expect(feature.activationMode).toBe('action');
      expect(feature.id).toBeTruthy();
      expect(feature.shortDescription).toBeTruthy();
    });
  });

  describe('Blade Meditation — action-mode with animus cost', () => {
    it('is action-mode with 1 animus activation cost', () => {
      const feature = getFeature('Blade Meditation');
      expect(feature.activationMode).toBe('action');
      expect(feature.activationCost).toEqual({ resourceId: 'mystic_animus', amount: 1 });
    });

    it('models retaliation damage as a special effect with compound target', () => {
      const feature = getFeature('Blade Meditation');
      const specialEffects = (feature.effects ?? []).filter((e) => e.type === 'special');
      expect(specialEffects).toHaveLength(1);
      expect(specialEffects[0].target).toContain('.');
    });
  });

  describe('Elemental Glyph — action-mode with animus cost', () => {
    it('base glyph is action-mode with 1 animus activation cost', () => {
      const feature = getFeature('Elemental Glyph');
      expect(feature.activationMode).toBe('action');
      expect(feature.activationCost).toEqual({ resourceId: 'mystic_animus', amount: 1 });
    });

    it('base glyph has a special effect for cross-character delivery', () => {
      const feature = getFeature('Elemental Glyph');
      const specialEffects = (feature.effects ?? []).filter((e) => e.type === 'special');
      expect(specialEffects).toHaveLength(1);
    });

    it.each([
      'Elemental Glyph: Air',
      'Elemental Glyph: Darkness',
      'Elemental Glyph: Earth',
      'Elemental Glyph: Fire',
      'Elemental Glyph: Illumination',
      'Elemental Glyph: Metal',
      'Elemental Glyph: Water',
    ])('%s uses type:special for its cross-character effect', (name) => {
      const feature = getFeature(name);
      const specialEffects = (feature.effects ?? []).filter((e) => e.type === 'special');
      expect(specialEffects).toHaveLength(1);
      expect(specialEffects[0].target).toContain('.');
    });
  });

  describe('Instant Enlightenment — action-mode with daily uses', () => {
    it('is action-mode with a per-rest resource pool', () => {
      const feature = getFeature('Instant Enlightenment', 6);
      expect(feature.activationMode).toBe('action');
      expect(feature.resourcePool).toBeDefined();
      expect(feature.resourcePool!.rechargeOn).toBe('rest');
      expect(feature.resourcePool!.restRecoveryMode).toBe('full');
    });
  });

  describe('Quell Magic — action-mode', () => {
    it('is action-mode with a special effect', () => {
      const feature = getFeature('Quell Magic');
      expect(feature.activationMode).toBe('action');
      const specialEffects = (feature.effects ?? []).filter((e) => e.type === 'special');
      expect(specialEffects).toHaveLength(1);
    });
  });

  describe('Font of Animus — action-mode with daily uses', () => {
    it('is action-mode with a per-rest resource pool', () => {
      const feature = getFeature('Font of Animus');
      expect(feature.activationMode).toBe('action');
      expect(feature.resourcePool).toBeDefined();
      expect(feature.resourcePool!.rechargeOn).toBe('rest');
    });
  });

  describe('Glyph Mastery — action-mode with 2 animus cost', () => {
    it('is action-mode with 2 animus activation cost', () => {
      const feature = getFeature('Glyph Mastery');
      expect(feature.activationMode).toBe('action');
      expect(feature.activationCost).toEqual({ resourceId: 'mystic_animus', amount: 2 });
    });

    it('has a special effect for cross-character glyph application', () => {
      const feature = getFeature('Glyph Mastery');
      const specialEffects = (feature.effects ?? []).filter((e) => e.type === 'special');
      expect(specialEffects).toHaveLength(1);
    });
  });
});
