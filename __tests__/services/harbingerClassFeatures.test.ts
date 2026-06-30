import { HARBINGER_CLASS } from '@data/classes/initiating/harbinger';
import { BonusType } from '@/types/base';

describe('HARBINGER_CLASS classFeatures shape', () => {
  const features = HARBINGER_CLASS.classFeatures;

  test('every feature has an effects property', () => {
    for (const feature of features) {
      expect(feature).toHaveProperty('effects');
      expect(Array.isArray(feature.effects)).toBe(true);
    }
  });

  test('all mechanically-active features have id, shortDescription, and activationMode', () => {
    const activeFeatures = features.filter(
      (f) => f.activationMode === 'toggle' || f.activationMode === 'action',
    );
    expect(activeFeatures.length).toBeGreaterThan(0);
    for (const feature of activeFeatures) {
      expect(typeof feature.id).toBe('string');
      expect(typeof feature.shortDescription).toBe('string');
      expect(feature.activationMode).toBeDefined();
    }
  });

  test('toggle-gated effects carry { type: "toggle", active: false }', () => {
    const toggleFeatures = features.filter((f) => f.activationMode === 'toggle');
    for (const feature of toggleFeatures) {
      const effectsWithActivation = (feature.effects ?? []).filter((e) => e.type !== 'special');
      for (const effect of effectsWithActivation) {
        expect(effect.activation).toEqual({ type: 'toggle', active: false });
      }
    }
  });

  test('cross-character display-only features use type "special"', () => {
    const crossCharacterFeatures = ['Ill Intentions', 'Bleak Prophecy', 'Dark Murmur'];
    for (const name of crossCharacterFeatures) {
      const feature = features.find((f) => f.name === name);
      expect(feature).toBeDefined();
      const hasSpecial = (feature!.effects ?? []).some((e) => e.type === 'special');
      expect(hasSpecial).toBe(true);
    }
  });

  test('all wired features (non-empty effects) have id and shortDescription', () => {
    const wiredFeatures = features.filter((f) => (f.effects ?? []).length > 0);
    expect(wiredFeatures.length).toBeGreaterThan(0);
    for (const feature of wiredFeatures) {
      expect(typeof feature.id).toBe('string');
      expect(typeof feature.shortDescription).toBe('string');
    }
  });

  describe('Elusive Shadow', () => {
    const feature = features.find((f) => f.name === 'Elusive Shadow')!;

    test('is toggle-mode', () => {
      expect(feature.activationMode).toBe('toggle');
    });

    test('has dodge bonus to AC and Reflex, both toggle-gated', () => {
      const acEffect = (feature.effects ?? []).find((e) => e.target === 'ac.dodge');
      const reflexEffect = (feature.effects ?? []).find((e) => e.target === 'save.reflex');
      expect(acEffect).toBeDefined();
      expect(acEffect?.bonusType).toBe(BonusType.DODGE);
      expect(acEffect?.value).toBe(2);
      expect(acEffect?.activation).toEqual({ type: 'toggle', active: false });
      expect(reflexEffect).toBeDefined();
      expect(reflexEffect?.bonusType).toBe(BonusType.DODGE);
      expect(reflexEffect?.value).toBe(2);
      expect(reflexEffect?.activation).toEqual({ type: 'toggle', active: false });
    });
  });

  describe('Dark Claim', () => {
    const feature = features.find((f) => f.name === 'Dark Claim')!;

    test('is action-mode with id "dark-claim"', () => {
      expect(feature.activationMode).toBe('action');
      expect(feature.id).toBe('dark-claim');
    });

    test('effects use type "special" for cross-character mechanics', () => {
      const hasSpecial = (feature.effects ?? []).some((e) => e.type === 'special');
      expect(hasSpecial).toBe(true);
    });
  });

  describe('Grim News', () => {
    const feature = features.find((f) => f.name === 'Grim News')!;

    test('is action-mode with per_encounter resource pool', () => {
      expect(feature.activationMode).toBe('action');
      expect(feature.resourcePool?.rechargeOn).toBe('per_encounter');
    });
  });

  describe('Massacre', () => {
    const feature = features.find((f) => f.name === 'Massacre')!;

    test('is action-mode with per_encounter resource pool', () => {
      expect(feature.activationMode).toBe('action');
      expect(feature.resourcePool?.rechargeOn).toBe('per_encounter');
    });
  });

  describe('Black Omen', () => {
    const feature = features.find((f) => f.name === 'Black Omen')!;

    test('is action-mode with per_encounter resource pool', () => {
      expect(feature.activationMode).toBe('action');
      expect(feature.resourcePool?.rechargeOn).toBe('per_encounter');
    });
  });

  describe('Rumors of War', () => {
    const feature = features.find((f) => f.name === 'Rumors of War')!;

    test('is action-mode with special effect', () => {
      expect(feature.activationMode).toBe('action');
      const hasSpecial = (feature.effects ?? []).some((e) => e.type === 'special');
      expect(hasSpecial).toBe(true);
    });
  });
});
