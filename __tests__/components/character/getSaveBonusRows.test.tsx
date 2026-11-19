import { getSaveBonusRows } from '@/components/character/direct-entry/CombatStatsSection';
import { BonusType } from '@/types/base';
import type { StatBreakdown } from '@/services/ModifierPipelineService';

function emptyBreakdown(): StatBreakdown {
  return { base: 0, bonuses: [], total: 0 };
}

describe('getSaveBonusRows', () => {
  test('returns empty array when no stacked bonuses', () => {
    const rows = getSaveBonusRows(emptyBreakdown(), emptyBreakdown());
    expect(rows).toHaveLength(0);
  });

  test('skips unstacked bonuses', () => {
    const bd: StatBreakdown = {
      base: 0,
      bonuses: [
        { type: BonusType.MORALE, value: 2, source: 'A', stacked: false, conditional: false },
      ],
      total: 2,
    };
    expect(getSaveBonusRows(emptyBreakdown(), bd)).toHaveLength(0);
  });

  test('skips UNTYPED bonuses (they go in the misc field)', () => {
    const bd: StatBreakdown = {
      base: 0,
      bonuses: [
        { type: BonusType.UNTYPED, value: 2, source: 'A', stacked: true, conditional: false },
      ],
      total: 2,
    };
    expect(getSaveBonusRows(emptyBreakdown(), bd)).toHaveLength(0);
  });

  test('aggregates typed stacked bonuses into one row per type', () => {
    const bd: StatBreakdown = {
      base: 0,
      bonuses: [
        { type: BonusType.MORALE, value: 2, source: 'Heroism', stacked: true, conditional: false },
      ],
      total: 2,
    };
    const rows = getSaveBonusRows(emptyBreakdown(), bd);
    expect(rows).toHaveLength(1);
    expect(rows[0].value).toBe(2);
    expect(rows[0].unverified).toBe(false);
    expect(rows[0].conditional).toBe(false);
  });

  test('sets unverified: true when any stacked contribution has needs_review status', () => {
    const bd: StatBreakdown = {
      base: 0,
      bonuses: [
        {
          type: BonusType.MORALE,
          value: 2,
          source: 'Feature',
          stacked: true,
          verificationStatus: 'needs_review',
          conditional: false,
        },
      ],
      total: 2,
    };
    const rows = getSaveBonusRows(emptyBreakdown(), bd);
    expect(rows[0].unverified).toBe(true);
  });

  test('sets unverified: true when any stacked contribution has stub status', () => {
    const bd: StatBreakdown = {
      base: 0,
      bonuses: [
        {
          type: BonusType.MORALE,
          value: 2,
          source: 'Feature',
          stacked: true,
          verificationStatus: 'stub',
          conditional: false,
        },
      ],
      total: 2,
    };
    const rows = getSaveBonusRows(emptyBreakdown(), bd);
    expect(rows[0].unverified).toBe(true);
  });

  test('verified contribution leaves unverified: false', () => {
    const bd: StatBreakdown = {
      base: 0,
      bonuses: [
        {
          type: BonusType.LUCK,
          value: 1,
          source: 'Item',
          stacked: true,
          verificationStatus: 'verified',
          conditional: false,
        },
      ],
      total: 1,
    };
    const rows = getSaveBonusRows(emptyBreakdown(), bd);
    expect(rows[0].unverified).toBe(false);
  });

  test('sets conditional: true when any stacked contribution is conditional', () => {
    const bd: StatBreakdown = {
      base: 0,
      bonuses: [
        {
          type: BonusType.INSIGHT,
          value: 2,
          source: 'Foresight',
          stacked: true,
          conditional: true,
        },
      ],
      total: 2,
    };
    const rows = getSaveBonusRows(emptyBreakdown(), bd);
    expect(rows[0].conditional).toBe(true);
  });

  test('merges contributions from both breakdown arguments', () => {
    const all: StatBreakdown = {
      base: 0,
      bonuses: [
        { type: BonusType.MORALE, value: 1, source: 'A', stacked: true, conditional: false },
      ],
      total: 1,
    };
    const specific: StatBreakdown = {
      base: 0,
      bonuses: [
        { type: BonusType.MORALE, value: 2, source: 'B', stacked: true, conditional: false },
      ],
      total: 2,
    };
    const rows = getSaveBonusRows(all, specific);
    expect(rows).toHaveLength(1);
    expect(rows[0].value).toBe(3);
  });
});
