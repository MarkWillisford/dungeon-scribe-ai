import { getPerSkillMaxRanks, exceedsPerSkillMax, clampSkillRanks } from '@/utils/skillRanks';

describe('getPerSkillMaxRanks', () => {
  it('returns the character level as the cap', () => {
    expect(getPerSkillMaxRanks(1)).toBe(1);
    expect(getPerSkillMaxRanks(7)).toBe(7);
  });

  it('floors fractional levels', () => {
    expect(getPerSkillMaxRanks(3.9)).toBe(3);
  });

  it('never returns a negative cap', () => {
    expect(getPerSkillMaxRanks(0)).toBe(0);
    expect(getPerSkillMaxRanks(-4)).toBe(0);
  });

  it('returns 0 for non-finite input', () => {
    expect(getPerSkillMaxRanks(NaN)).toBe(0);
    expect(getPerSkillMaxRanks(Infinity)).toBe(0);
  });
});

describe('exceedsPerSkillMax', () => {
  it('flags ranks above the cap', () => {
    expect(exceedsPerSkillMax(8, 7)).toBe(true);
  });

  it('does not flag ranks at or below the cap', () => {
    expect(exceedsPerSkillMax(7, 7)).toBe(false);
    expect(exceedsPerSkillMax(3, 7)).toBe(false);
  });

  it('does not flag when no levels are assigned (cap 0)', () => {
    expect(exceedsPerSkillMax(5, 0)).toBe(false);
    expect(exceedsPerSkillMax(5, -1)).toBe(false);
  });
});

describe('clampSkillRanks', () => {
  it('clamps a request above the cap down to the cap', () => {
    expect(clampSkillRanks(9, 7)).toBe(7);
  });

  it('leaves a request at or below the cap unchanged', () => {
    expect(clampSkillRanks(7, 7)).toBe(7);
    expect(clampSkillRanks(3, 7)).toBe(3);
  });

  it('floors negatives and non-finite requests to 0', () => {
    expect(clampSkillRanks(-2, 7)).toBe(0);
    expect(clampSkillRanks(NaN, 7)).toBe(0);
  });

  it('floors fractional requests', () => {
    expect(clampSkillRanks(4.8, 7)).toBe(4);
  });

  it('does not enforce a cap when maxRanks <= 0', () => {
    expect(clampSkillRanks(5, 0)).toBe(5);
    expect(clampSkillRanks(5, -3)).toBe(5);
  });
});
