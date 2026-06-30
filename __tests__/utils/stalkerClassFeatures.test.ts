import { STALKER_CLASS } from '@/data/classes/initiating/stalker';
import { BonusType } from '@/types/base';

describe('STALKER_CLASS classFeatures — recovery bonus wiring (issue #296)', () => {
  const features = STALKER_CLASS.classFeatures;

  it('every class feature has an effects array', () => {
    features.forEach((f) => {
      expect(Array.isArray(f.effects)).toBe(true);
    });
  });

  it('every feature with activationMode has id and shortDescription', () => {
    features
      .filter((f) => f.activationMode !== undefined)
      .forEach((f) => {
        expect(f.id).toBeDefined();
        expect(typeof f.id).toBe('string');
        expect(f.shortDescription).toBeDefined();
        expect(typeof f.shortDescription).toBe('string');
      });
  });

  it('all special-type effects use a compound target key (containing a dot)', () => {
    features.forEach((f) => {
      f.effects?.forEach((e) => {
        if (e.type === 'special') {
          expect(e.target).toMatch(/\./);
        }
      });
    });
  });

  describe('Stalker Art: Concealed Recovery — toggle bundle', () => {
    let feature: (typeof features)[number];

    beforeAll(() => {
      feature = features.find((f) => f.name === 'Stalker Art: Concealed Recovery')!;
    });

    it('exists in classFeatures', () => {
      expect(feature).toBeDefined();
    });

    it('has id stalker-art-concealed-recovery', () => {
      expect(feature.id).toBe('stalker-art-concealed-recovery');
    });

    it('has activationMode toggle', () => {
      expect(feature.activationMode).toBe('toggle');
    });

    it('has a shortDescription', () => {
      expect(typeof feature.shortDescription).toBe('string');
      expect(feature.shortDescription!.length).toBeGreaterThan(0);
    });

    it('has exactly 4 effects', () => {
      expect(feature.effects).toHaveLength(4);
    });

    it('includes +4 insight bonus to ac with toggle activation', () => {
      const acBonus = feature.effects!.find((e) => e.type === 'bonus' && e.target === 'ac');
      expect(acBonus).toBeDefined();
      expect(acBonus!.bonusType).toBe(BonusType.INSIGHT);
      expect(acBonus!.value).toBe(4);
      expect(acBonus!.activation?.type).toBe('toggle');
      expect(acBonus!.activation?.active).toBe(false);
    });

    it('includes concealment special effect with toggle activation', () => {
      const concealment = feature.effects!.find(
        (e) => e.type === 'special' && e.target === 'special.stalker_recovery_concealment',
      );
      expect(concealment).toBeDefined();
      expect(concealment!.activation?.type).toBe('toggle');
      expect(concealment!.activation?.active).toBe(false);
    });

    it('includes deadly strike charge special effect with toggle activation', () => {
      const dsCharge = feature.effects!.find(
        (e) => e.type === 'special' && e.target === 'special.stalker_recovery_deadly_strike_charge',
      );
      expect(dsCharge).toBeDefined();
      expect(dsCharge!.activation?.type).toBe('toggle');
      expect(dsCharge!.activation?.active).toBe(false);
    });

    it('includes movement special effect with toggle activation', () => {
      const movement = feature.effects!.find(
        (e) => e.type === 'special' && e.target === 'special.stalker_recovery_movement',
      );
      expect(movement).toBeDefined();
      expect(movement!.activation?.type).toBe('toggle');
      expect(movement!.activation?.active).toBe(false);
    });
  });

  it('recoveryMechanics.primary is full_round_modifier_min_2 with no custom description', () => {
    const recovery = STALKER_CLASS.initiating?.recoveryMechanics?.primary;
    expect(recovery).toBeDefined();
    expect(recovery!.type).toBe('full_round_modifier_min_2');
    expect('description' in recovery!).toBe(false);
  });
});
