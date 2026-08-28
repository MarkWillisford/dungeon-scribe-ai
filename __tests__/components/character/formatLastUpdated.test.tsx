import { formatLastUpdated } from '@/components/character/CharacterCard';

describe('formatLastUpdated', () => {
  it('formats a real Date', () => {
    const date = new Date('2026-08-19T12:00:00.000Z');
    expect(formatLastUpdated(date)).toBe(date.toLocaleDateString());
  });

  it('formats an ISO string, which is what a JSON round-trip leaves behind', () => {
    // This is the exact value that crashed the list after a save (#376).
    const iso = '2026-08-19T12:00:00.000Z';
    expect(formatLastUpdated(iso)).toBe(new Date(iso).toLocaleDateString());
  });

  it('formats a Firestore Timestamp', () => {
    const date = new Date('2026-08-19T12:00:00.000Z');
    expect(formatLastUpdated({ toDate: () => date })).toBe(date.toLocaleDateString());
  });

  it('formats an epoch number', () => {
    const date = new Date('2026-08-19T12:00:00.000Z');
    expect(formatLastUpdated(date.getTime())).toBe(date.toLocaleDateString());
  });

  it('returns an empty string when toDate itself throws', () => {
    // Shape-checking the object is not enough: a malformed value can carry a
    // toDate that throws, which would crash render exactly like #376 did.
    const hostile = {
      toDate: () => {
        throw new Error('not really a Timestamp');
      },
    };
    expect(() => formatLastUpdated(hostile)).not.toThrow();
    expect(formatLastUpdated(hostile)).toBe('');
  });

  it('returns an empty string when toDate returns something that is not a Date', () => {
    expect(formatLastUpdated({ toDate: () => 'nope' as unknown as Date })).toBe('');
  });

  it.each([[undefined], [null], ['not a date'], [{}], [new Date('nonsense')]])(
    'returns an empty string rather than throwing for %p',
    (value) => {
      expect(() => formatLastUpdated(value)).not.toThrow();
      expect(formatLastUpdated(value)).toBe('');
    },
  );
});
