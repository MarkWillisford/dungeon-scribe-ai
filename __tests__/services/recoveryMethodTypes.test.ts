import type { RecoveryMethod } from '@/types/initiating';
import type { ClassFeatureData } from '@/data/classes/types';
import { WARDER_CLASS } from '@/data/classes/initiating/warder';
import { STALKER_CLASS } from '@/data/classes/initiating/stalker';
import { WARLORD_CLASS } from '@/data/classes/initiating/warlord';
import { HARBINGER_CLASS } from '@/data/classes/initiating/harbinger';
import { ZEALOT_CLASS } from '@/data/classes/initiating/zealot';

describe('RecoveryMethod — new variants', () => {
  it('standard_one is a valid RecoveryMethod', () => {
    const method: RecoveryMethod = { type: 'standard_one' };
    expect(method.type).toBe('standard_one');
  });

  it('full_round_modifier_min_2 is a valid RecoveryMethod', () => {
    const method: RecoveryMethod = { type: 'full_round_modifier_min_2' };
    expect(method.type).toBe('full_round_modifier_min_2');
  });
});

describe('ClassFeatureData — new fields', () => {
  it('activationCost is accepted', () => {
    const feature: ClassFeatureData = {
      name: 'Test',
      level: 1,
      description: '',
      activationCost: { resourceId: 'ki', amount: 1 },
    };
    expect(feature.activationCost).toEqual({ resourceId: 'ki', amount: 1 });
  });

  it('maintenanceCost is accepted', () => {
    const feature: ClassFeatureData = {
      name: 'Test',
      level: 1,
      description: '',
      maintenanceCost: { resourceId: 'ki', amount: 1, per: 'round' },
    };
    expect(feature.maintenanceCost).toEqual({ resourceId: 'ki', amount: 1, per: 'round' });
  });

  it('activationMode accepts action', () => {
    const feature: ClassFeatureData = {
      name: 'Test',
      level: 1,
      description: '',
      activationMode: 'action',
    };
    expect(feature.activationMode).toBe('action');
  });
});

describe('Data migrations — primary recovery', () => {
  it('warder primary is full_round_modifier_min_2', () => {
    expect(WARDER_CLASS.initiating!.recoveryMechanics.primary.type).toBe(
      'full_round_modifier_min_2',
    );
  });

  it('stalker primary is full_round_modifier_min_2', () => {
    expect(STALKER_CLASS.initiating!.recoveryMechanics.primary.type).toBe(
      'full_round_modifier_min_2',
    );
  });
});

describe('Data migrations — secondary recovery', () => {
  it('warder secondary is standard_one', () => {
    expect(WARDER_CLASS.initiating!.recoveryMechanics.secondary?.type).toBe('standard_one');
  });

  it('warlord secondary is standard_one', () => {
    expect(WARLORD_CLASS.initiating!.recoveryMechanics.secondary?.type).toBe('standard_one');
  });

  it('harbinger secondary is standard_one', () => {
    expect(HARBINGER_CLASS.initiating!.recoveryMechanics.secondary?.type).toBe('standard_one');
  });

  it('zealot secondary is standard_one', () => {
    expect(ZEALOT_CLASS.initiating!.recoveryMechanics.secondary?.type).toBe('standard_one');
  });
});

describe('Data migrations — no stale custom entries for named patterns', () => {
  // Primaries migrated to full_round_modifier_min_2 — verify no lingering custom
  const migratedPrimaries = [
    { name: 'warder', data: WARDER_CLASS },
    { name: 'stalker', data: STALKER_CLASS },
  ] as const;

  it.each(migratedPrimaries)('$name primary is not custom', ({ data }) => {
    expect(data.initiating!.recoveryMechanics.primary.type).not.toBe('custom');
  });

  // Secondaries migrated to standard_one — verify no lingering custom
  const migratedSecondaries = [
    { name: 'warder', data: WARDER_CLASS },
    { name: 'warlord', data: WARLORD_CLASS },
    { name: 'harbinger', data: HARBINGER_CLASS },
    { name: 'zealot', data: ZEALOT_CLASS },
  ] as const;

  it.each(migratedSecondaries)('$name secondary is not custom', ({ data }) => {
    expect(data.initiating!.recoveryMechanics.secondary?.type).not.toBe('custom');
  });
});
