import {
  DamageResolutionService,
  type CharacterResistances,
  type IncomingDamageDescriptor,
} from '@services/DamageResolutionService';
import { ModifierPipelineService } from '@services/ModifierPipelineService';
import type { Character } from '@/types';
import type { Buff } from '@/types/buff';
import { BonusType } from '@/types/base';
import type { Effect } from '@/types/base';

jest.mock('@services/ModifierPipelineService', () => ({
  ModifierPipelineService: {
    collectAllEffects: jest.fn(() => []),
  },
}));

const mockCollectAllEffects = ModifierPipelineService.collectAllEffects as jest.Mock;

function makeCharacterStub(buffs?: Buff[]): Character {
  return { buffs } as unknown as Character;
}

function makeDREffect(value: number, opts?: { description?: string; descriptor?: string }): Effect {
  return {
    type: 'resistance',
    target: 'dr',
    value,
    source: 'test',
    condition: opts
      ? {
          type: 'always',
          params: opts.descriptor ? { descriptor: opts.descriptor } : {},
          description: opts.description ?? '',
        }
      : undefined,
  } as Effect;
}

function makeEREffect(damageType: string, value: number): Effect {
  return {
    type: 'resistance',
    target: `energy_resistance.${damageType}` as Effect['target'],
    value,
    source: 'test',
  };
}

const noResistances: CharacterResistances = { dr: [], energyResistance: {} };

describe('DamageResolutionService.resolve', () => {
  describe('no DR or resistance', () => {
    it('returns full damage when no DR or resistance exists', () => {
      expect(DamageResolutionService.resolve(10, null, noResistances)).toBe(10);
    });

    it('returns full damage for energy type with no resistance', () => {
      expect(DamageResolutionService.resolve(10, 'fire', noResistances)).toBe(10);
    });
  });

  describe('skipping damage type (null)', () => {
    it('returns raw amount when type is null even when DR exists', () => {
      const r: CharacterResistances = {
        dr: [{ amount: 5, bypass: 'magic' }],
        energyResistance: {},
      };
      expect(DamageResolutionService.resolve(10, null, r)).toBe(10);
    });

    it('returns raw amount when type is null even when energy resistance exists', () => {
      const r: CharacterResistances = { dr: [], energyResistance: { fire: 10 } };
      expect(DamageResolutionService.resolve(8, null, r)).toBe(8);
    });
  });

  describe('DR resolution', () => {
    it('applies DR when incoming type does not bypass it', () => {
      const r: CharacterResistances = {
        dr: [{ amount: 5, bypass: 'magic' }],
        energyResistance: {},
      };
      // bludgeoning weapon does not bypass DR/magic
      expect(DamageResolutionService.resolve(10, 'bludgeoning', r)).toBe(5);
    });

    it('does not apply DR when incoming type matches the bypass', () => {
      const r: CharacterResistances = {
        dr: [{ amount: 5, bypass: 'magic' }],
        energyResistance: {},
      };
      expect(DamageResolutionService.resolve(10, 'magic', r)).toBe(10);
    });

    it('applies the best non-bypassed DR when multiple entries exist', () => {
      const r: CharacterResistances = {
        dr: [
          { amount: 5, bypass: 'magic' },
          { amount: 3, bypass: 'cold iron' },
        ],
        energyResistance: {},
      };
      // magic weapon bypasses DR/magic but not DR/cold iron
      expect(DamageResolutionService.resolve(10, 'magic', r)).toBe(7);
    });

    it('floors damage at 0 when DR exceeds damage', () => {
      const r: CharacterResistances = { dr: [{ amount: 15, bypass: '-' }], energyResistance: {} };
      expect(DamageResolutionService.resolve(8, 'bludgeoning', r)).toBe(0);
    });

    it('DR/- is never bypassed', () => {
      const r: CharacterResistances = { dr: [{ amount: 5, bypass: '-' }], energyResistance: {} };
      expect(DamageResolutionService.resolve(10, 'magic', r)).toBe(5);
    });
  });

  describe('energy resistance', () => {
    it('applies energy resistance to matching energy type', () => {
      const r: CharacterResistances = { dr: [], energyResistance: { fire: 10 } };
      expect(DamageResolutionService.resolve(15, 'fire', r)).toBe(5);
    });

    it('does not apply energy resistance for non-matching type', () => {
      const r: CharacterResistances = { dr: [], energyResistance: { fire: 10 } };
      expect(DamageResolutionService.resolve(15, 'cold', r)).toBe(15);
    });

    it('floors energy damage at 0 when resistance exceeds damage', () => {
      const r: CharacterResistances = { dr: [], energyResistance: { cold: 20 } };
      expect(DamageResolutionService.resolve(10, 'cold', r)).toBe(0);
    });

    it('does not apply DR to energy damage types', () => {
      const r: CharacterResistances = {
        dr: [{ amount: 5, bypass: '-' }],
        energyResistance: { acid: 3 },
      };
      // acid is an energy type — only energy resistance applies, not DR
      expect(DamageResolutionService.resolve(10, 'acid', r)).toBe(7);
    });
  });
});

describe('DamageResolutionService.hasResistances', () => {
  it('returns false when no DR or resistance', () => {
    expect(DamageResolutionService.hasResistances(noResistances)).toBe(false);
  });

  it('returns true when DR present', () => {
    const r: CharacterResistances = { dr: [{ amount: 5, bypass: 'magic' }], energyResistance: {} };
    expect(DamageResolutionService.hasResistances(r)).toBe(true);
  });

  it('returns true when energy resistance present', () => {
    const r: CharacterResistances = { dr: [], energyResistance: { fire: 10 } };
    expect(DamageResolutionService.hasResistances(r)).toBe(true);
  });
});

describe('DamageResolutionService.buildSelectorOptions', () => {
  it('returns empty array for no resistances', () => {
    expect(DamageResolutionService.buildSelectorOptions(noResistances)).toEqual([]);
  });

  it('includes magic for DR/magic entry', () => {
    const r: CharacterResistances = { dr: [{ amount: 5, bypass: 'magic' }], energyResistance: {} };
    expect(DamageResolutionService.buildSelectorOptions(r)).toContain('magic');
  });

  it('includes energy types from resistance entries', () => {
    const r: CharacterResistances = { dr: [], energyResistance: { fire: 10, cold: 5 } };
    const options = DamageResolutionService.buildSelectorOptions(r);
    expect(options).toContain('fire');
    expect(options).toContain('cold');
  });

  it('does not duplicate options', () => {
    const r: CharacterResistances = {
      dr: [
        { amount: 5, bypass: 'magic' },
        { amount: 3, bypass: 'magic' },
      ],
      energyResistance: {},
    };
    const options = DamageResolutionService.buildSelectorOptions(r);
    expect(options.filter((o) => o === 'magic')).toHaveLength(1);
  });
});

describe('DamageResolutionService.extractResistances', () => {
  beforeEach(() => mockCollectAllEffects.mockReturnValue([]));

  it('returns empty resistances when character has no effects', () => {
    const result = DamageResolutionService.extractResistances(makeCharacterStub(), []);
    expect(result).toEqual({ dr: [], energyResistance: {} });
  });

  it('extracts DR with bypass parsed from condition description', () => {
    mockCollectAllEffects.mockReturnValue([makeDREffect(5, { description: 'DR 5/magic' })]);
    const { dr } = DamageResolutionService.extractResistances(makeCharacterStub(), []);
    expect(dr).toEqual([{ amount: 5, bypass: 'magic' }]);
  });

  it('extracts DR with bypass from condition params.descriptor when no description match', () => {
    mockCollectAllEffects.mockReturnValue([makeDREffect(10, { descriptor: 'cold iron' })]);
    const { dr } = DamageResolutionService.extractResistances(makeCharacterStub(), []);
    expect(dr).toEqual([{ amount: 10, bypass: 'cold iron' }]);
  });

  it('uses "-" as bypass when DR effect has no condition', () => {
    mockCollectAllEffects.mockReturnValue([makeDREffect(3)]);
    const { dr } = DamageResolutionService.extractResistances(makeCharacterStub(), []);
    expect(dr).toEqual([{ amount: 3, bypass: '-' }]);
  });

  it('uses "-" when condition description does not match DR pattern and no descriptor', () => {
    mockCollectAllEffects.mockReturnValue([makeDREffect(3, { description: 'no match here' })]);
    const { dr } = DamageResolutionService.extractResistances(makeCharacterStub(), []);
    expect(dr).toEqual([{ amount: 3, bypass: '-' }]);
  });

  it('extracts energy resistance', () => {
    mockCollectAllEffects.mockReturnValue([makeEREffect('fire', 10)]);
    const { energyResistance } = DamageResolutionService.extractResistances(
      makeCharacterStub(),
      [],
    );
    expect(energyResistance).toEqual({ fire: 10 });
  });

  it('keeps the highest energy resistance when multiple effects target the same type', () => {
    mockCollectAllEffects.mockReturnValue([makeEREffect('cold', 5), makeEREffect('cold', 15)]);
    const { energyResistance } = DamageResolutionService.extractResistances(
      makeCharacterStub(),
      [],
    );
    expect(energyResistance.cold).toBe(15);
  });

  it('ignores effects with non-numeric values for DR', () => {
    const badEffect: Effect = {
      type: 'resistance',
      target: 'dr',
      value: 'formula',
      source: 'test',
    };
    mockCollectAllEffects.mockReturnValue([badEffect]);
    const { dr } = DamageResolutionService.extractResistances(makeCharacterStub(), []);
    expect(dr).toHaveLength(0);
  });

  it('merges active buff effects not already on the character', () => {
    const buff: Buff = {
      id: 'b1',
      name: 'Stoneskin',
      source: 'spell',
      bonusType: BonusType.ENHANCEMENT,
      duration: null,
      durationType: 'permanent',
      isActive: true,
      effects: [makeDREffect(10, { description: 'DR 10/adamantine' })],
    };
    const { dr } = DamageResolutionService.extractResistances(makeCharacterStub(), [buff]);
    expect(dr).toEqual([{ amount: 10, bypass: 'adamantine' }]);
  });

  it('does not double-add buff effects already present on the character', () => {
    const buff: Buff = {
      id: 'b1',
      name: 'Stoneskin',
      source: 'spell',
      bonusType: BonusType.ENHANCEMENT,
      duration: null,
      durationType: 'permanent',
      isActive: true,
      effects: [makeDREffect(10, { description: 'DR 10/adamantine' })],
    };
    const character = makeCharacterStub([buff]);
    mockCollectAllEffects.mockReturnValue([makeDREffect(10, { description: 'DR 10/adamantine' })]);
    const { dr } = DamageResolutionService.extractResistances(character, [buff]);
    expect(dr).toHaveLength(1);
  });

  it('skips inactive buffs', () => {
    const inactiveBuff: Buff = {
      id: 'b2',
      name: 'Inactive',
      source: 'spell',
      bonusType: BonusType.ENHANCEMENT,
      duration: null,
      durationType: 'permanent',
      isActive: false,
      effects: [makeDREffect(5)],
    };
    const { dr } = DamageResolutionService.extractResistances(makeCharacterStub(), [inactiveBuff]);
    expect(dr).toHaveLength(0);
  });

  it('covers the buffs.map() path when character has existing buffs', () => {
    const existingBuff: Buff = {
      id: 'existing',
      name: 'Existing',
      source: 'item',
      bonusType: BonusType.ENHANCEMENT,
      duration: null,
      durationType: 'permanent',
      isActive: true,
      effects: [],
    };
    const result = DamageResolutionService.extractResistances(
      makeCharacterStub([existingBuff]),
      [],
    );
    expect(result).toEqual({ dr: [], energyResistance: {} });
  });
});
