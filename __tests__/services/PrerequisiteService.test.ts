import { PrerequisiteService } from '@services/PrerequisiteService';
import { CharacterService } from '@services/CharacterService';
import { ModifierPipelineService } from '@services/ModifierPipelineService';
import { Size, Alignment } from '@/types/base';
import { AbilityScoreMethod } from '@/types/character';
import type { Character } from '@/types';
import type { FeatDefinition } from '@/types/feats';
import type { Race } from '@/types/race';

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

function createTestCharacter(
  overrides?: Partial<{
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
    className: string;
  }>,
): Character {
  const char = CharacterService.createDefaultCharacter({
    name: 'Test Fighter',
    race: mockRace,
    selectedClass: overrides?.className ?? 'Fighter',
    abilityScoreMethod: AbilityScoreMethod.PointBuy,
    abilityScores: {
      str: overrides?.str ?? 16,
      dex: overrides?.dex ?? 14,
      con: overrides?.con ?? 13,
      int: overrides?.int ?? 12,
      wis: overrides?.wis ?? 10,
      cha: overrides?.cha ?? 8,
    },
    alignment: Alignment.TrueNeutral,
  });
  // Recalculate to populate derived stats (BAB, saves, etc.)
  return ModifierPipelineService.recalculate(char);
}

function makeFeat(prereqs: FeatDefinition['prerequisites']): FeatDefinition {
  return {
    id: 'test_feat',
    name: 'Test Feat',
    description: 'A test feat',
    source: 'Test',
    types: ['general'],
    prerequisites: prereqs,
    effects: [],
    activationMode: 'passive',
  };
}

describe('PrerequisiteService', () => {
  describe('checkPrerequisites', () => {
    test('feat with no prerequisites is always met', () => {
      const char = createTestCharacter();
      const feat = makeFeat([]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(true);
      expect(result.unmet).toHaveLength(0);
      expect(result.reasons).toHaveLength(0);
    });

    test('ability score prerequisite met', () => {
      const char = createTestCharacter({ str: 16 });
      const feat = makeFeat([{ type: 'ability_score', ability: 'STR', minimum: 13 }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(true);
    });

    test('ability score prerequisite not met', () => {
      const char = createTestCharacter({ str: 10 });
      const feat = makeFeat([{ type: 'ability_score', ability: 'STR', minimum: 13 }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(false);
      expect(result.unmet).toHaveLength(1);
      expect(result.reasons[0]).toContain('STR');
      expect(result.reasons[0]).toContain('13');
    });

    test('BAB prerequisite met for level 1 fighter', () => {
      const char = createTestCharacter();
      const feat = makeFeat([{ type: 'bab', minimum: 1 }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(true);
    });

    test('BAB prerequisite not met', () => {
      const char = createTestCharacter();
      const feat = makeFeat([{ type: 'bab', minimum: 6 }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(false);
    });

    test('level prerequisite met', () => {
      const char = createTestCharacter();
      const feat = makeFeat([{ type: 'level', minimum: 1 }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(true);
    });

    test('level prerequisite not met', () => {
      const char = createTestCharacter();
      const feat = makeFeat([{ type: 'level', minimum: 5 }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(false);
    });

    test('feat prerequisite met when character has feat', () => {
      const char = createTestCharacter();
      char.feats.feats.push({
        featId: 'power_attack',
        name: 'Power Attack',
        source: 'level_1',
        grantedAtLevel: 1,
        active: true,
        choices: {},
      });
      const feat = makeFeat([{ type: 'feat', featId: 'power_attack' }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(true);
    });

    test('feat prerequisite not met when character lacks feat', () => {
      const char = createTestCharacter();
      const feat = makeFeat([{ type: 'feat', featId: 'power_attack' }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(false);
    });

    test('race prerequisite met', () => {
      const char = createTestCharacter();
      const feat = makeFeat([{ type: 'race', raceName: 'Human' }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(true);
    });

    test('race prerequisite not met', () => {
      const char = createTestCharacter();
      const feat = makeFeat([{ type: 'race', raceName: 'Elf' }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(false);
    });

    test('special prerequisite is always met', () => {
      const char = createTestCharacter();
      const feat = makeFeat([{ type: 'special', description: 'Must have a familiar' }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(true);
    });

    test('multiple prerequisites all met', () => {
      const char = createTestCharacter({ str: 16, dex: 14 });
      const feat = makeFeat([
        { type: 'ability_score', ability: 'STR', minimum: 13 },
        { type: 'bab', minimum: 1 },
      ]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(true);
    });

    test('multiple prerequisites partially met', () => {
      const char = createTestCharacter({ str: 16 });
      const feat = makeFeat([
        { type: 'ability_score', ability: 'STR', minimum: 13 },
        { type: 'bab', minimum: 6 },
      ]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(false);
      expect(result.unmet).toHaveLength(1);
    });
  });

  describe('getAvailableFeats', () => {
    const simpleFeat: FeatDefinition = {
      id: 'simple_feat',
      name: 'Simple Feat',
      description: 'No prereqs',
      source: 'Test',
      types: ['general'],
      prerequisites: [],
      effects: [],
      activationMode: 'passive',
    };

    const hardFeat: FeatDefinition = {
      id: 'hard_feat',
      name: 'Hard Feat',
      description: 'High level req',
      source: 'Test',
      types: ['general'],
      prerequisites: [{ type: 'level', minimum: 20 }],
      effects: [],
      activationMode: 'passive',
    };

    test('returns feats the character qualifies for', () => {
      const char = createTestCharacter();
      const available = PrerequisiteService.getAvailableFeats(char, [simpleFeat, hardFeat]);
      expect(available).toContainEqual(simpleFeat);
      expect(available).not.toContainEqual(hardFeat);
    });

    test('excludes already-taken feats', () => {
      const char = createTestCharacter();
      char.feats.feats.push({
        featId: 'simple_feat',
        name: 'Simple Feat',
        source: 'level_1',
        grantedAtLevel: 1,
        active: true,
        choices: {},
      });
      const available = PrerequisiteService.getAvailableFeats(char, [simpleFeat, hardFeat]);
      expect(available).not.toContainEqual(simpleFeat);
    });
  });
});
