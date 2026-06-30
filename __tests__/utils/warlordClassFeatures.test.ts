import { WARLORD_CLASS } from '@/data/classes/initiating/warlord';
import { BonusType } from '@/types/base';

describe('WARLORD_CLASS classFeatures — effects wiring (issue #298)', () => {
  const features = WARLORD_CLASS.classFeatures;

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

  it('every toggle feature has at least one effect with toggle activation', () => {
    features
      .filter((f) => f.activationMode === 'toggle')
      .forEach((f) => {
        const hasToggle = f.effects!.some(
          (e) => e.activation?.type === 'toggle' && e.activation?.active === false,
        );
        expect(hasToggle).toBe(true);
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

  it("Warlord's Gambit is action mode with a special effect", () => {
    const gambit = features.find((f) => f.name === "Warlord's Gambit" && f.level === 1);
    expect(gambit).toBeDefined();
    expect(gambit!.activationMode).toBe('action');
    expect(gambit!.id).toBe('warlords_gambit');
    expect(gambit!.effects!.some((e) => e.type === 'special')).toBe(true);
  });

  it('Tactical Presence (Indomitable) is toggle mode with a special effect and toggle activation', () => {
    const f = features.find((f) => f.name === 'Tactical Presence (Indomitable)');
    expect(f).toBeDefined();
    expect(f!.activationMode).toBe('toggle');
    expect(f!.effects!.some((e) => e.type === 'special' && e.activation?.type === 'toggle')).toBe(
      true,
    );
  });

  it('Tactical Presence (Rallying) is toggle mode with a special effect and toggle activation', () => {
    const f = features.find((f) => f.name === 'Tactical Presence (Rallying)');
    expect(f).toBeDefined();
    expect(f!.activationMode).toBe('toggle');
    expect(f!.effects!.some((e) => e.type === 'special' && e.activation?.type === 'toggle')).toBe(
      true,
    );
  });

  it('Tactical Presence (Victorious) is toggle mode with a special effect and toggle activation', () => {
    const f = features.find((f) => f.name === 'Tactical Presence (Victorious)');
    expect(f).toBeDefined();
    expect(f!.activationMode).toBe('toggle');
    expect(f!.effects!.some((e) => e.type === 'special' && e.activation?.type === 'toggle')).toBe(
      true,
    );
  });

  it('Warleader is action mode with a resource pool and a special effect', () => {
    const f = features.find((f) => f.name === 'Warleader');
    expect(f).toBeDefined();
    expect(f!.activationMode).toBe('action');
    expect(f!.resourcePool).toBeDefined();
    expect(f!.resourcePool!.id).toBe('warleader');
    expect(f!.effects!.some((e) => e.type === 'special')).toBe(true);
  });

  it('Dual Boost (1/day) is action mode with a resource pool', () => {
    const f = features.find((f) => f.name === 'Dual Boost (1/day)');
    expect(f).toBeDefined();
    expect(f!.activationMode).toBe('action');
    expect(f!.resourcePool).toBeDefined();
    expect(f!.resourcePool!.id).toBe('dual_boost');
  });

  it('Tactical Assistance is action mode with a special effect', () => {
    const f = features.find((f) => f.name === 'Tactical Assistance');
    expect(f).toBeDefined();
    expect(f!.activationMode).toBe('action');
    expect(f!.effects!.some((e) => e.type === 'special')).toBe(true);
  });

  describe('Battle Prowess features carry competence bonuses to attack, damage, cmb, cmd', () => {
    const bpFeatures = [
      { name: 'Battle Prowess +1', value: 1 },
      { name: 'Battle Prowess +2', value: 2 },
      { name: 'Battle Prowess +3', value: 3 },
    ];

    bpFeatures.forEach(({ name, value }) => {
      it(`${name} has toggle mode and correct competence bonus value ${value}`, () => {
        const f = features.find((feat) => feat.name === name);
        expect(f).toBeDefined();
        expect(f!.activationMode).toBe('toggle');

        const targets = f!.effects!.map((e) => e.target);
        expect(targets).toContain('attack.all');
        expect(targets).toContain('damage.all');
        expect(targets).toContain('cmb');
        expect(targets).toContain('cmd');

        f!.effects!.forEach((e) => {
          expect(e.bonusType).toBe(BonusType.COMPETENCE);
          expect(e.value).toBe(value);
          expect(e.activation?.type).toBe('toggle');
          expect(e.activation?.active).toBe(false);
        });
      });
    });
  });
});
