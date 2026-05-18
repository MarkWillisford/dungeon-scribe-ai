/**
 * Tests for seedResourceFeatEffects pure logic.
 *
 * Firebase admin and dotenv are mocked so the module can be imported without
 * credentials or a live database connection. The run() function is guarded by
 * require.main === module so it does not execute on import.
 */

jest.mock('firebase-admin', () => ({
  apps: [],
  initializeApp: jest.fn(),
  credential: { applicationDefault: jest.fn() },
  firestore: jest.fn(() => ({
    settings: jest.fn(),
    collection: jest.fn(),
  })),
}));

jest.mock('dotenv', () => ({ config: jest.fn() }));

import { applyEffectPatch, RESOURCE_FEAT_PATCHES } from '../../scripts/db/seedResourceFeatEffects';
import type { FeatEffect } from '../../src/types/feats';
import { BonusType } from '../../src/types/base';

const makeEffect = (target: string, value: number): FeatEffect => ({
  type: 'bonus',
  bonusType: BonusType.UNTYPED,
  target: target as FeatEffect['target'],
  value,
  source: 'test',
});

describe('applyEffectPatch', () => {
  it('adds effect to an empty array', () => {
    const patch = makeEffect('resource.ki', 2);
    const result = applyEffectPatch([], patch);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(patch);
  });

  it('appends effect when no existing effect targets the same pool', () => {
    const existing = makeEffect('resource.rage_rounds', 6);
    const patch = makeEffect('resource.ki', 2);
    const result = applyEffectPatch([existing], patch);
    expect(result).toHaveLength(2);
    expect(result).toContainEqual(existing);
    expect(result).toContainEqual(patch);
  });

  it('replaces an existing effect with the same target (idempotency)', () => {
    const stale = makeEffect('resource.ki', 1);
    const patch = makeEffect('resource.ki', 2);
    const result = applyEffectPatch([stale], patch);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(patch);
  });

  it('preserves unrelated effects when replacing a same-target effect', () => {
    const unrelated = makeEffect('ability.str', 2);
    const stale = makeEffect('resource.ki', 1);
    const patch = makeEffect('resource.ki', 2);
    const result = applyEffectPatch([unrelated, stale], patch);
    expect(result).toHaveLength(2);
    expect(result).toContainEqual(unrelated);
    expect(result).toContainEqual(patch);
    expect(result).not.toContainEqual(stale);
  });

  it('is idempotent when applied twice with the same patch', () => {
    const patch = makeEffect('resource.rage_rounds', 6);
    const once = applyEffectPatch([], patch);
    const twice = applyEffectPatch(once, patch);
    expect(twice).toHaveLength(1);
    expect(twice[0]).toEqual(patch);
  });
});

describe('RESOURCE_FEAT_PATCHES', () => {
  const featIds = RESOURCE_FEAT_PATCHES.map((p) => p.featId);

  it('covers all required feats', () => {
    const required = [
      'extra_channel',
      'extra_ki',
      'extra_rage',
      'extra_lay_on_hands',
      'extra_grit',
      'extra_panache',
      'extra_arcane_pool',
    ];
    for (const id of required) {
      expect(featIds).toContain(id);
    }
  });

  it('has no duplicate feat IDs', () => {
    const unique = new Set(featIds);
    expect(unique.size).toBe(featIds.length);
  });

  it('every effect uses type bonus and untyped bonus type', () => {
    for (const patch of RESOURCE_FEAT_PATCHES) {
      expect(patch.effect.type).toBe('bonus');
      expect(patch.effect.bonusType).toBe(BonusType.UNTYPED);
    }
  });

  it('every effect targets a resource pool path', () => {
    for (const patch of RESOURCE_FEAT_PATCHES) {
      expect(patch.effect.target).toMatch(/^resource\./);
    }
  });

  it('Extra Channel grants 2 channel energy uses', () => {
    const patch = RESOURCE_FEAT_PATCHES.find((p) => p.featId === 'extra_channel');
    expect(patch?.effect.target).toBe('resource.channel_energy_uses');
    expect(patch?.effect.value).toBe(2);
  });

  it('Extra Ki grants 2 ki points', () => {
    const patch = RESOURCE_FEAT_PATCHES.find((p) => p.featId === 'extra_ki');
    expect(patch?.effect.target).toBe('resource.ki');
    expect(patch?.effect.value).toBe(2);
  });

  it('Extra Rage grants 6 rage rounds', () => {
    const patch = RESOURCE_FEAT_PATCHES.find((p) => p.featId === 'extra_rage');
    expect(patch?.effect.target).toBe('resource.rage_rounds');
    expect(patch?.effect.value).toBe(6);
  });

  it('Extra Lay on Hands grants 2 uses', () => {
    const patch = RESOURCE_FEAT_PATCHES.find((p) => p.featId === 'extra_lay_on_hands');
    expect(patch?.effect.target).toBe('resource.lay_on_hands');
    expect(patch?.effect.value).toBe(2);
  });

  it('Extra Grit grants 2 grit points', () => {
    const patch = RESOURCE_FEAT_PATCHES.find((p) => p.featId === 'extra_grit');
    expect(patch?.effect.target).toBe('resource.grit');
    expect(patch?.effect.value).toBe(2);
  });

  it('Extra Panache grants 2 panache points', () => {
    const patch = RESOURCE_FEAT_PATCHES.find((p) => p.featId === 'extra_panache');
    expect(patch?.effect.target).toBe('resource.panache');
    expect(patch?.effect.value).toBe(2);
  });

  it('Extra Arcane Pool grants 2 arcane pool points', () => {
    const patch = RESOURCE_FEAT_PATCHES.find((p) => p.featId === 'extra_arcane_pool');
    expect(patch?.effect.target).toBe('resource.arcane_pool');
    expect(patch?.effect.value).toBe(2);
  });

  it('Extra Inspiration grants 3 inspiration uses', () => {
    const patch = RESOURCE_FEAT_PATCHES.find((p) => p.featId === 'extra_inspiration');
    expect(patch?.effect.target).toBe('resource.inspiration');
    expect(patch?.effect.value).toBe(3);
  });
});
