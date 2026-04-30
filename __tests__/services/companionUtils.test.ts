import { makeCompanionInstanceId } from '@/utils/companionUtils';

describe('makeCompanionInstanceId', () => {
  it('returns a string with the comp- prefix', () => {
    const id = makeCompanionInstanceId();
    expect(id).toMatch(/^comp-[a-z0-9]+-[a-z0-9]+$/);
  });

  it('returns unique IDs on successive calls', () => {
    const ids = new Set(Array.from({ length: 20 }, makeCompanionInstanceId));
    expect(ids.size).toBe(20);
  });
});
