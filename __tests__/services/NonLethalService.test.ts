import { NonLethalService } from '@services/NonLethalService';

describe('NonLethalService.checkStaggered', () => {
  it('returns true when nonlethal equals current HP', () => {
    expect(NonLethalService.checkStaggered(10, 10)).toBe(true);
  });

  it('returns true when nonlethal exceeds current HP', () => {
    expect(NonLethalService.checkStaggered(15, 10)).toBe(true);
  });

  it('returns false when nonlethal is less than current HP', () => {
    expect(NonLethalService.checkStaggered(9, 10)).toBe(false);
  });

  it('returns false when current HP is 0', () => {
    expect(NonLethalService.checkStaggered(0, 0)).toBe(false);
  });

  it('returns false when current HP is negative', () => {
    expect(NonLethalService.checkStaggered(5, -1)).toBe(false);
  });

  it('returns false when nonlethal is 0 and current HP is 0', () => {
    expect(NonLethalService.checkStaggered(0, 0)).toBe(false);
  });
});

describe('NonLethalService.checkUnconscious', () => {
  it('returns true when nonlethal exceeds max HP', () => {
    expect(NonLethalService.checkUnconscious(21, 20)).toBe(true);
  });

  it('returns false when nonlethal equals max HP', () => {
    expect(NonLethalService.checkUnconscious(20, 20)).toBe(false);
  });

  it('returns false when nonlethal is less than max HP', () => {
    expect(NonLethalService.checkUnconscious(10, 20)).toBe(false);
  });

  it('returns false when nonlethal is 0', () => {
    expect(NonLethalService.checkUnconscious(0, 20)).toBe(false);
  });
});

describe('NonLethalService.restRecoveryAmount', () => {
  it('returns 1 per character level', () => {
    expect(NonLethalService.restRecoveryAmount(5)).toBe(5);
    expect(NonLethalService.restRecoveryAmount(1)).toBe(1);
    expect(NonLethalService.restRecoveryAmount(20)).toBe(20);
  });

  it('returns at least 1 for level 0', () => {
    expect(NonLethalService.restRecoveryAmount(0)).toBe(1);
  });

  it('returns at least 1 for negative level', () => {
    expect(NonLethalService.restRecoveryAmount(-5)).toBe(1);
  });
});

describe('NonLethalService.applyHeal', () => {
  it('reduces non-lethal damage by amount', () => {
    expect(NonLethalService.applyHeal(10, 3)).toBe(7);
  });

  it('caps at 0 (cannot go negative)', () => {
    expect(NonLethalService.applyHeal(3, 10)).toBe(0);
  });

  it('returns 0 when already at 0', () => {
    expect(NonLethalService.applyHeal(0, 5)).toBe(0);
  });

  it('returns exactly 0 when amount equals current nonlethal', () => {
    expect(NonLethalService.applyHeal(8, 8)).toBe(0);
  });
});
