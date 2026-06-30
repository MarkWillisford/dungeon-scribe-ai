import { WARDER_CLASS } from '@/data/classes/initiating/warder';

describe('WARDER_CLASS classFeatures — wiring (issues #294, #295)', () => {
  const features = WARDER_CLASS.classFeatures;

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

  describe('Defensive Focus — toggle bundle', () => {
    let feature: (typeof features)[number];

    beforeAll(() => {
      feature = features.find((f) => f.name === 'Defensive Focus')!;
    });

    it('exists in classFeatures', () => {
      expect(feature).toBeDefined();
    });

    it('has id defensive-focus', () => {
      expect(feature.id).toBe('defensive-focus');
    });

    it('has activationMode toggle', () => {
      expect(feature.activationMode).toBe('toggle');
    });

    it('has a shortDescription', () => {
      expect(typeof feature.shortDescription).toBe('string');
      expect(feature.shortDescription!.length).toBeGreaterThan(0);
    });

    it('effects array is populated (not empty)', () => {
      expect(Array.isArray(feature.effects)).toBe(true);
      expect(feature.effects!.length).toBeGreaterThan(0);
    });

    it('has exactly 4 effects', () => {
      expect(feature.effects).toHaveLength(4);
    });

    it('includes passive Combat Reflexes special effect (no activation field)', () => {
      const combatReflexes = feature.effects!.find(
        (e) => e.type === 'special' && e.target === 'special.combat_reflexes_int_mod',
      );
      expect(combatReflexes).toBeDefined();
      expect(combatReflexes!.activation).toBeUndefined();
    });

    it('includes +CMD bonus effect with toggle activation', () => {
      const cmdBonus = feature.effects!.find((e) => e.type === 'bonus' && e.target === 'cmd');
      expect(cmdBonus).toBeDefined();
      expect(cmdBonus!.value).toBe('intMod + warderLevel');
      expect(cmdBonus!.bonusType).toBe('untyped');
      expect(cmdBonus!.activation?.type).toBe('toggle');
      expect(cmdBonus!.activation?.active).toBe(false);
    });

    it('includes threatened-area-expansion special effect with toggle activation', () => {
      const threatenedArea = feature.effects!.find(
        (e) => e.type === 'special' && e.target === 'special.defensive_focus_threatened_area',
      );
      expect(threatenedArea).toBeDefined();
      expect(threatenedArea!.activation?.type).toBe('toggle');
      expect(threatenedArea!.activation?.active).toBe(false);
    });

    it('includes movement-AoO special effect with toggle activation', () => {
      const movementAoo = feature.effects!.find(
        (e) => e.type === 'special' && e.target === 'special.defensive_focus_movement_aoo',
      );
      expect(movementAoo).toBeDefined();
      expect(movementAoo!.activation?.type).toBe('toggle');
      expect(movementAoo!.activation?.active).toBe(false);
    });

    it('all toggle-gated effects have active: false', () => {
      const toggleEffects = feature.effects!.filter((e) => e.activation !== undefined);
      toggleEffects.forEach((e) => {
        expect(e.activation?.type).toBe('toggle');
        expect(e.activation?.active).toBe(false);
      });
    });
  });

  describe('Adaptive Tactics', () => {
    let feature: (typeof features)[number];

    beforeAll(() => {
      feature = features.find((f) => f.name === 'Adaptive Tactics')!;
    });

    it('exists in classFeatures', () => {
      expect(feature).toBeDefined();
    });

    it('has id adaptive-tactics', () => {
      expect(feature.id).toBe('adaptive-tactics');
    });

    it('has activationMode action', () => {
      expect(feature.activationMode).toBe('action');
    });

    it('has activationCost expending 1 armigers_mark', () => {
      expect(feature.activationCost).toEqual({ resourceId: 'armigers_mark', amount: 1 });
    });

    it('has an empty effects array', () => {
      expect(feature.effects).toEqual([]);
    });

    it('has a shortDescription', () => {
      expect(typeof feature.shortDescription).toBe('string');
      expect(feature.shortDescription!.length).toBeGreaterThan(0);
    });
  });

  describe('Deathless Defenses', () => {
    let feature: (typeof features)[number];

    beforeAll(() => {
      feature = features.find((f) => f.name === 'Deathless Defenses')!;
    });

    it('exists in classFeatures', () => {
      expect(feature).toBeDefined();
    });

    it('has id deathless-defenses', () => {
      expect(feature.id).toBe('deathless-defenses');
    });

    it('has activationMode toggle', () => {
      expect(feature.activationMode).toBe('toggle');
    });

    it('has activationCost expending 2 armigers_mark', () => {
      expect(feature.activationCost).toEqual({ resourceId: 'armigers_mark', amount: 2 });
    });

    it('has maintenanceCost of 1 armigers_mark per round', () => {
      expect(feature.maintenanceCost).toEqual({
        resourceId: 'armigers_mark',
        amount: 1,
        per: 'round',
      });
    });

    it('has a shortDescription', () => {
      expect(typeof feature.shortDescription).toBe('string');
      expect(feature.shortDescription!.length).toBeGreaterThan(0);
    });

    it('has a non-empty effects array', () => {
      expect(Array.isArray(feature.effects)).toBe(true);
      expect(feature.effects!.length).toBeGreaterThan(0);
    });

    it('includes immunity to mind_affecting with toggle activation', () => {
      const immunity = feature.effects!.find(
        (e) => e.type === 'immunity' && e.target === 'mind_affecting',
      );
      expect(immunity).toBeDefined();
      expect(immunity!.activation?.type).toBe('toggle');
      expect(immunity!.activation?.active).toBe(false);
    });

    it('includes cannot-die-from-HP special effect with toggle activation', () => {
      const deathless = feature.effects!.find(
        (e) => e.type === 'special' && e.target === 'special.deathless_defenses_hp',
      );
      expect(deathless).toBeDefined();
      expect(deathless!.activation?.type).toBe('toggle');
      expect(deathless!.activation?.active).toBe(false);
    });

    it('includes aegis benefit special effect with toggle activation', () => {
      const aegis = feature.effects!.find(
        (e) => e.type === 'special' && e.target === 'special.deathless_defenses_aegis',
      );
      expect(aegis).toBeDefined();
      expect(aegis!.activation?.type).toBe('toggle');
      expect(aegis!.activation?.active).toBe(false);
    });

    it('includes focus benefit special effect with toggle activation', () => {
      const focus = feature.effects!.find(
        (e) => e.type === 'special' && e.target === 'special.deathless_defenses_focus',
      );
      expect(focus).toBeDefined();
      expect(focus!.activation?.type).toBe('toggle');
      expect(focus!.activation?.active).toBe(false);
    });
  });
});
