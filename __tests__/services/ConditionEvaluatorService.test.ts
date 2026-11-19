import { ConditionEvaluatorService } from '@services/ConditionEvaluatorService';
import { CharacterService } from '@services/CharacterService';
import { Size, Alignment } from '@/types/base';
import type { EffectCondition } from '@/types/base';
import type { Character } from '@/types';
import type { Race } from '@/types/race';
import { AbilityScoreMethod } from '@/types/character';

const mockRace: Race = {
  name: 'Human',
  sizeMod: Size.Medium,
  baseSpeed: 30,
  alternativeMovements: {},
  abilityModifiers: {},
  traits: [],
  languages: ['Common'],
  bonusLanguages: ['Any'],
};

function createTestCharacter(): Character {
  return CharacterService.createDefaultCharacter({
    name: 'Test',
    race: mockRace,
    selectedClass: 'Fighter',
    abilityScoreMethod: AbilityScoreMethod.PointBuy,
    abilityScores: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
    alignment: Alignment.TrueNeutral,
  });
}

function withEquippedArmor(char: Character, type: 'light' | 'medium' | 'heavy'): Character {
  const c = JSON.parse(JSON.stringify(char)) as Character;
  c.equipment.armor = [
    {
      ...c.equipment.armor[0],
      type,
      acBonus: 2,
      equipped: true,
      name: `${type} armor`,
    } as (typeof c.equipment.armor)[0],
  ];
  return c;
}

function withNoArmor(char: Character): Character {
  const c = JSON.parse(JSON.stringify(char)) as Character;
  c.equipment.armor = [];
  return c;
}

describe('ConditionEvaluatorService', () => {
  describe('evaluate', () => {
    test('undefined condition always evaluates to true', () => {
      const char = createTestCharacter();
      expect(ConditionEvaluatorService.evaluate(undefined, char)).toBe(true);
    });

    test('always condition evaluates to true', () => {
      const char = createTestCharacter();
      const condition: EffectCondition = {
        type: 'always',
        params: {},
        description: 'Always active',
      };
      expect(ConditionEvaluatorService.evaluate(condition, char)).toBe(true);
    });

    describe('armor_type condition', () => {
      const lightOnlyCondition: EffectCondition = {
        type: 'armor_type',
        params: { maxArmor: 'light' },
        description: 'While wearing light or no armor',
      };

      test('applies when unarmored (no equipped armor)', () => {
        const char = withNoArmor(createTestCharacter());
        expect(ConditionEvaluatorService.evaluate(lightOnlyCondition, char)).toBe(true);
      });

      test('applies when wearing light armor', () => {
        const char = withEquippedArmor(createTestCharacter(), 'light');
        expect(ConditionEvaluatorService.evaluate(lightOnlyCondition, char)).toBe(true);
      });

      test('does not apply when wearing medium armor', () => {
        const char = withEquippedArmor(createTestCharacter(), 'medium');
        expect(ConditionEvaluatorService.evaluate(lightOnlyCondition, char)).toBe(false);
      });

      test('does not apply when wearing heavy armor', () => {
        const char = withEquippedArmor(createTestCharacter(), 'heavy');
        expect(ConditionEvaluatorService.evaluate(lightOnlyCondition, char)).toBe(false);
      });

      test('unequipped armor is ignored', () => {
        const char = createTestCharacter();
        const c = JSON.parse(JSON.stringify(char)) as Character;
        c.equipment.armor = [
          {
            ...c.equipment.armor[0],
            type: 'heavy',
            acBonus: 8,
            equipped: false,
            name: 'Full Plate (unequipped)',
          } as (typeof c.equipment.armor)[0],
        ];
        expect(ConditionEvaluatorService.evaluate(lightOnlyCondition, c)).toBe(true);
      });
    });

    describe('unrecognised condition types', () => {
      test('weapon_type condition does not throw and returns false', () => {
        const char = createTestCharacter();
        const condition: EffectCondition = {
          type: 'weapon_type',
          params: { weaponType: 'longsword' },
          description: 'While using a longsword',
        };
        expect(() => ConditionEvaluatorService.evaluate(condition, char)).not.toThrow();
        expect(ConditionEvaluatorService.evaluate(condition, char)).toBe(false);
      });

      test('weapon_group condition does not throw and returns false', () => {
        const char = createTestCharacter();
        const condition: EffectCondition = {
          type: 'weapon_group',
          params: { group: 'blades_light' },
          description: 'While using a light blade',
        };
        expect(() => ConditionEvaluatorService.evaluate(condition, char)).not.toThrow();
        expect(ConditionEvaluatorService.evaluate(condition, char)).toBe(false);
      });

      test('custom condition does not throw and returns false', () => {
        const char = createTestCharacter();
        const condition: EffectCondition = {
          type: 'custom',
          params: {},
          description: 'Some custom condition',
        };
        expect(() => ConditionEvaluatorService.evaluate(condition, char)).not.toThrow();
        expect(ConditionEvaluatorService.evaluate(condition, char)).toBe(false);
      });
    });
  });
});
