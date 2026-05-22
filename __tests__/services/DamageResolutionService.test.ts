import {
  DamageResolutionService,
  type CharacterResistances,
  type IncomingDamageDescriptor,
} from '@services/DamageResolutionService';

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
