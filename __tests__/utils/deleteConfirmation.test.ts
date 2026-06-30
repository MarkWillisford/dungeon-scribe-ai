import { isDeleteConfirmationValid } from '@/utils/deleteConfirmation';

describe('isDeleteConfirmationValid', () => {
  it('accepts an exact match', () => {
    expect(isDeleteConfirmationValid('Kah-Mei', 'Kah-Mei')).toBe(true);
  });

  it('ignores surrounding whitespace', () => {
    expect(isDeleteConfirmationValid('  Kah-Mei  ', 'Kah-Mei')).toBe(true);
  });

  it('ignores letter case', () => {
    expect(isDeleteConfirmationValid('kah-mei', 'Kah-Mei')).toBe(true);
    expect(isDeleteConfirmationValid('KAH-MEI', 'Kah-Mei')).toBe(true);
  });

  it('rejects a non-matching name', () => {
    expect(isDeleteConfirmationValid('Kah Mei', 'Kah-Mei')).toBe(false);
    expect(isDeleteConfirmationValid('Bob', 'Kah-Mei')).toBe(false);
  });

  it('rejects an empty input', () => {
    expect(isDeleteConfirmationValid('', 'Kah-Mei')).toBe(false);
    expect(isDeleteConfirmationValid('   ', 'Kah-Mei')).toBe(false);
  });

  it('never confirms when the target name is empty or whitespace', () => {
    expect(isDeleteConfirmationValid('', '')).toBe(false);
    expect(isDeleteConfirmationValid('  ', '   ')).toBe(false);
    expect(isDeleteConfirmationValid('anything', '   ')).toBe(false);
  });

  it('does not partial-match a longer or shorter string', () => {
    expect(isDeleteConfirmationValid('Kah', 'Kah-Mei')).toBe(false);
    expect(isDeleteConfirmationValid('Kah-Mei the Brave', 'Kah-Mei')).toBe(false);
  });
});
