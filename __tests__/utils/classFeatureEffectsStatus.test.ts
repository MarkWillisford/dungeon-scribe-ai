import { classifyEffectsStatus } from '@/utils/classFeatureEffectsStatus';

describe('classifyEffectsStatus', () => {
  describe('modelled — effects array is non-empty', () => {
    it('returns modelled when effectsLength > 0 regardless of description', () => {
      expect(classifyEffectsStatus('Grants a +2 bonus to AC.', 1)).toBe('modelled');
    });

    it('returns modelled even for a description with no bonus language', () => {
      expect(classifyEffectsStatus('You can speak with animals at will.', 2)).toBe('modelled');
    });
  });

  describe('none — no numeric bonus language', () => {
    it('classifies purely narrative text as none', () => {
      expect(
        classifyEffectsStatus('Starting at 1st level, the fighter gets a bonus combat feat.', 0),
      ).toBe('none');
    });

    it('classifies spell-list text as none', () => {
      expect(
        classifyEffectsStatus('The cleric can prepare any spell from the cleric spell list.', 0),
      ).toBe('none');
    });

    it('classifies ability description with no numeric expression as none', () => {
      expect(
        classifyEffectsStatus('You can move through difficult terrain without penalty.', 0),
      ).toBe('none');
    });
  });

  describe('unmodelled — description contains numeric bonus language', () => {
    it('detects "+2 morale bonus" pattern', () => {
      expect(
        classifyEffectsStatus(
          'The barbarian gains a +2 morale bonus to Strength and Constitution.',
          0,
        ),
      ).toBe('unmodelled');
    });

    it('detects "+N to saving throw" pattern', () => {
      expect(classifyEffectsStatus('You gain a +2 to Will saves against fear effects.', 0)).toBe(
        'unmodelled',
      );
    });

    it('detects "+N to AC" pattern', () => {
      expect(
        classifyEffectsStatus(
          'The monk gains a +1 dodge bonus to AC for every four monk levels.',
          0,
        ),
      ).toBe('unmodelled');
    });

    it('detects "adds your Wisdom modifier" pattern', () => {
      expect(
        classifyEffectsStatus('The paladin adds her Charisma modifier to all saving throws.', 0),
      ).toBe('unmodelled');
    });

    it('detects "bonus equal to your" pattern', () => {
      expect(
        classifyEffectsStatus(
          'The rogue gains a bonus equal to her Intelligence modifier on Perception checks.',
          0,
        ),
      ).toBe('unmodelled');
    });

    it('detects "increases your" pattern', () => {
      expect(
        classifyEffectsStatus('This ability increases your base land speed by 10 feet.', 0),
      ).toBe('unmodelled');
    });

    it('detects "grants a +N" pattern', () => {
      expect(classifyEffectsStatus('This ability grants a +4 bonus on Perception checks.', 0)).toBe(
        'unmodelled',
      );
    });

    it('detects "+N on Fortitude" pattern', () => {
      expect(
        classifyEffectsStatus('The dwarf gains a +2 on Fortitude saves against poison.', 0),
      ).toBe('unmodelled');
    });

    it('detects "+N resistance bonus" pattern', () => {
      expect(
        classifyEffectsStatus(
          'The oracle gains a +1 resistance bonus to all saving throws per two oracle levels.',
          0,
        ),
      ).toBe('unmodelled');
    });
  });

  describe('edge cases', () => {
    it('returns none for empty description', () => {
      expect(classifyEffectsStatus('', 0)).toBe('none');
    });

    it('returns modelled for empty description with effects', () => {
      expect(classifyEffectsStatus('', 1)).toBe('modelled');
    });
  });
});
