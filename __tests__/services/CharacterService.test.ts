import { CharacterService } from '@services/CharacterService';
import { CreateCharacterParams, AbilityScoreMethod } from '@/types/character';
import { Size, Alignment, BonusType } from '@/types/base';
import { Race } from '@/types/race';
import { Character } from '@/types';

describe('CharacterService', () => {
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

  const mockCreateParams: CreateCharacterParams = {
    name: 'Test Character',
    race: mockRace,
    selectedClass: 'Fighter',
    abilityScoreMethod: AbilityScoreMethod.PointBuy,
    abilityScores: {
      str: 15,
      dex: 14,
      con: 13,
      int: 12,
      wis: 10,
      cha: 8,
    },
    alignment: Alignment.LawfulGood,
    deity: 'Iomedae',
  };

  describe('createDefaultCharacter', () => {
    test('should create valid character with racial bonuses applied', () => {
      const character = CharacterService.createDefaultCharacter(mockCreateParams);

      expect(character.info.name).toBe('Test Character');
      expect(character.info.race.name).toBe('Human');
      expect(character.info.alignment).toBe(Alignment.LawfulGood);
      expect(character.abilityScores.str.base).toBe(15);
      expect(character.classes.totalLevel).toBe(1);
      expect(character.classes.classes[0].name).toBe('Fighter');
      expect(character.schemaVersion).toBeDefined();
      expect(character.lastUpdated).toBeInstanceOf(Date);
    });

    test('should set correct ability modifiers', () => {
      const character = CharacterService.createDefaultCharacter(mockCreateParams);

      expect(character.abilityScores.str.modifier).toBe(2);
      expect(character.abilityScores.dex.modifier).toBe(2);
      expect(character.abilityScores.con.modifier).toBe(1);
      expect(character.abilityScores.cha.modifier).toBe(-1);
    });

    test('should assign unique ID', () => {
      const char1 = CharacterService.createDefaultCharacter(mockCreateParams);
      const char2 = CharacterService.createDefaultCharacter(mockCreateParams);

      expect(char1.info.id).toBeDefined();
      expect(char2.info.id).toBeDefined();
      expect(char1.info.id).not.toBe(char2.info.id);
    });

    test('should apply racial ability modifiers', () => {
      const elfRace: Race = {
        ...mockRace,
        name: 'Elf',
        abilityModifiers: { dex: 2, con: -2 },
      };

      const elfParams = { ...mockCreateParams, race: elfRace };
      const character = CharacterService.createDefaultCharacter(elfParams);

      expect(character.abilityScores.dex.racial).toBe(2);
      expect(character.abilityScores.con.racial).toBe(-2);
      expect(character.abilityScores.dex.total).toBe(16);
      expect(character.abilityScores.con.total).toBe(11);
    });

    test('should handle missing optional fields', () => {
      const minimalParams = { ...mockCreateParams, deity: undefined };
      const character = CharacterService.createDefaultCharacter(minimalParams);
      expect(character.info.deity).toBe('');
    });
  });

  describe('validateCharacter', () => {
    test('should validate correct character', () => {
      const character = CharacterService.createDefaultCharacter(mockCreateParams);
      const validation = CharacterService.validateCharacter(character);

      expect(validation.valid).toBe(true);
      expect(validation.errors).toHaveLength(0);
    });

    test('should catch invalid ability scores', () => {
      const character = CharacterService.createDefaultCharacter(mockCreateParams);
      character.abilityScores.str.base = -5;

      const validation = CharacterService.validateCharacter(character);
      expect(validation.valid).toBe(false);
      expect(validation.errors.some((e) => e.includes('STR'))).toBe(true);
    });

    test('should catch missing required fields', () => {
      const character = CharacterService.createDefaultCharacter(mockCreateParams);
      character.info.name = '';

      const validation = CharacterService.validateCharacter(character);
      expect(validation.valid).toBe(false);
      expect(validation.errors).toContain('Character name is required');
    });

    test('should catch level inconsistencies', () => {
      const character = CharacterService.createDefaultCharacter(mockCreateParams);
      character.classes.totalLevel = 5;

      const validation = CharacterService.validateCharacter(character);
      expect(validation.valid).toBe(false);
      expect(
        validation.errors.some((e) => e.includes('level mismatch') || e.includes('mismatch')),
      ).toBe(true);
    });

    test('should catch characters without classes', () => {
      const character = CharacterService.createDefaultCharacter(mockCreateParams);
      character.classes.classes = [];

      const validation = CharacterService.validateCharacter(character);
      expect(validation.valid).toBe(false);
      expect(validation.errors).toContain('Character must have at least one class');
    });

    test('should warn about old schema versions', () => {
      const character = CharacterService.createDefaultCharacter(mockCreateParams);
      character.schemaVersion = '0.9.0';

      const validation = CharacterService.validateCharacter(character);
      expect(validation.valid).toBe(true);
      expect(
        validation.warnings.some(
          (w) => w.includes('old schema version') || w.includes('schema version'),
        ),
      ).toBe(true);
    });
  });

  describe('calculateAbilityModifiers', () => {
    test('should calculate modifiers correctly', () => {
      const character = CharacterService.createDefaultCharacter(mockCreateParams);
      const scores = CharacterService.calculateAbilityModifiers(character.abilityScores);

      expect(scores.str.modifier).toBe(2);
      expect(scores.dex.modifier).toBe(2);
      expect(scores.con.modifier).toBe(1);
      expect(scores.int.modifier).toBe(1);
      expect(scores.wis.modifier).toBe(0);
      expect(scores.cha.modifier).toBe(-1);
    });

    test('should handle bonuses correctly', () => {
      const character = CharacterService.createDefaultCharacter(mockCreateParams);

      character.abilityScores.str.bonuses.enhancement.push({
        type: BonusType.ENHANCEMENT,
        value: 2,
        source: 'Belt of Giant Strength',
        active: true,
      });

      const scores = CharacterService.calculateAbilityModifiers(character.abilityScores);
      expect(scores.str.total).toBe(17);
      expect(scores.str.modifier).toBe(3);
    });

    test('should handle untyped bonuses stacking', () => {
      const character = CharacterService.createDefaultCharacter(mockCreateParams);

      character.abilityScores.str.bonuses.untyped.push(
        { type: BonusType.UNTYPED, value: 1, source: 'Source 1', active: true },
        { type: BonusType.UNTYPED, value: 2, source: 'Source 2', active: true },
      );

      const scores = CharacterService.calculateAbilityModifiers(character.abilityScores);
      expect(scores.str.total).toBe(18);
    });

    test('should handle typed bonuses not stacking', () => {
      const character = CharacterService.createDefaultCharacter(mockCreateParams);

      character.abilityScores.str.bonuses.enhancement.push(
        { type: BonusType.ENHANCEMENT, value: 2, source: 'Belt +2', active: true },
        { type: BonusType.ENHANCEMENT, value: 4, source: 'Belt +4', active: true },
      );

      const scores = CharacterService.calculateAbilityModifiers(character.abilityScores);
      expect(scores.str.total).toBe(19);
    });

    test('should handle inactive bonuses', () => {
      const character = CharacterService.createDefaultCharacter(mockCreateParams);

      character.abilityScores.str.bonuses.enhancement.push({
        type: BonusType.ENHANCEMENT,
        value: 4,
        source: 'Inactive Item',
        active: false,
      });

      const scores = CharacterService.calculateAbilityModifiers(character.abilityScores);
      expect(scores.str.total).toBe(15);
    });
  });

  describe('applyRacialModifiers', () => {
    test('should apply racial ability modifiers', () => {
      const halfOrcRace: Race = {
        ...mockRace,
        name: 'Half-Orc',
        abilityModifiers: { str: 2, con: 2, int: -2 },
      };

      const params = { ...mockCreateParams, race: halfOrcRace };
      const character = CharacterService.createDefaultCharacter(params);

      expect(character.abilityScores.str.racial).toBe(2);
      expect(character.abilityScores.con.racial).toBe(2);
      expect(character.abilityScores.int.racial).toBe(-2);
      expect(character.abilityScores.str.total).toBe(17);
    });

    test('should update size from race', () => {
      const gnomeRace: Race = {
        ...mockRace,
        name: 'Gnome',
        sizeMod: Size.Small,
      };

      const params = { ...mockCreateParams, race: gnomeRace };
      const character = CharacterService.createDefaultCharacter(params);

      expect(character.info.size).toBe(Size.Small);
    });
  });

  describe('generateCharacterId', () => {
    test('should generate unique IDs', () => {
      const ids = new Set();
      for (let i = 0; i < 100; i++) {
        ids.add(CharacterService.generateCharacterId());
      }
      expect(ids.size).toBe(100);
    });

    test('should generate IDs with correct format', () => {
      const id = CharacterService.generateCharacterId();
      expect(id).toMatch(/^char_\d+_[a-z0-9]+$/);
    });
  });

  describe('exportToJSON and importFromJSON', () => {
    test('should export and import character correctly', () => {
      const originalCharacter = CharacterService.createDefaultCharacter(mockCreateParams);
      const json = CharacterService.exportToJSON(originalCharacter);
      const importedCharacter = CharacterService.importFromJSON(json);

      expect(importedCharacter.info.name).toBe(originalCharacter.info.name);
      expect(importedCharacter.abilityScores.str.base).toBe(
        originalCharacter.abilityScores.str.base,
      );
      expect(importedCharacter.classes.totalLevel).toBe(originalCharacter.classes.totalLevel);
    });

    test('should handle invalid JSON gracefully', () => {
      expect(() => {
        CharacterService.importFromJSON('invalid json');
      }).toThrow('Failed to import character');
    });

    test('should validate imported character', () => {
      const invalidCharacterJson = JSON.stringify({
        info: { name: '' },
        abilityScores: {},
        classes: { classes: [] },
      });

      expect(() => {
        CharacterService.importFromJSON(invalidCharacterJson);
      }).toThrow();
    });

    test('should update schema version on import', () => {
      const character = CharacterService.createDefaultCharacter(mockCreateParams);
      character.schemaVersion = '0.9.0';

      const json = JSON.stringify(character);
      const imported = CharacterService.importFromJSON(json);

      expect(imported.schemaVersion).toBe('1.1.0');
    });
  });

  describe('edge cases', () => {
    test('should handle extreme ability scores', () => {
      const extremeParams = {
        ...mockCreateParams,
        abilityScores: {
          str: 25,
          dex: 1,
          con: 1,
          int: 1,
          wis: 1,
          cha: 1,
        },
      };

      const character = CharacterService.createDefaultCharacter(extremeParams);
      expect(character.abilityScores.str.modifier).toBe(7);
      expect(character.abilityScores.dex.modifier).toBe(-5);
    });

    test('should handle empty character name gracefully', () => {
      const params = { ...mockCreateParams, name: '' };
      const character = CharacterService.createDefaultCharacter(params);

      expect(character.info.name).toBe('New Character');
    });

    test('should handle unknown class gracefully', () => {
      const params = { ...mockCreateParams, selectedClass: 'UnknownClass' };
      const character = CharacterService.createDefaultCharacter(params);

      expect(character.classes.classes[0].name).toBe('UnknownClass');
      expect(character.classes.classes[0].hitDieSize).toBe(8);
    });
  });
});
