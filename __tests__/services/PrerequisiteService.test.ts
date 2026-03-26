import { PrerequisiteService } from '@services/PrerequisiteService';
import { CharacterService } from '@services/CharacterService';
import { ModifierPipelineService } from '@services/ModifierPipelineService';
import { Size, Alignment } from '@/types/base';
import { AbilityScoreMethod } from '@/types/character';
import type { Character } from '@/types';
import type { FeatDefinition } from '@/types/feats';
import type { Race } from '@/types/race';
import type { SpellcastingPool } from '@/types/spells';

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

    test('feat prerequisite with choiceRequirement met when choice matches', () => {
      const char = createTestCharacter();
      char.feats.feats.push({
        featId: 'weapon_focus',
        name: 'Weapon Focus',
        source: 'level_1',
        grantedAtLevel: 1,
        active: true,
        choices: { weapon: 'glaive' },
      });
      const feat = makeFeat([
        {
          type: 'feat',
          featId: 'weapon_focus',
          choiceRequirement: { key: 'weapon', value: 'glaive' },
        },
      ]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(true);
    });

    test('feat prerequisite with choiceRequirement not met when choice is wrong weapon', () => {
      const char = createTestCharacter();
      char.feats.feats.push({
        featId: 'weapon_focus',
        name: 'Weapon Focus',
        source: 'level_1',
        grantedAtLevel: 1,
        active: true,
        choices: { weapon: 'longsword' },
      });
      const feat = makeFeat([
        {
          type: 'feat',
          featId: 'weapon_focus',
          choiceRequirement: { key: 'weapon', value: 'glaive' },
        },
      ]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(false);
      expect(result.reasons[0]).toContain('Weapon Focus');
      expect(result.reasons[0]).toContain('glaive');
    });

    test('feat prerequisite with choiceRequirement not met when character lacks the feat entirely', () => {
      const char = createTestCharacter();
      const feat = makeFeat([
        {
          type: 'feat',
          featId: 'weapon_focus',
          choiceRequirement: { key: 'weapon', value: 'glaive' },
        },
      ]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(false);
    });

    test('feat prerequisite with choiceRequirement met when character has the feat twice with different choices', () => {
      const char = createTestCharacter();
      char.feats.feats.push({
        featId: 'weapon_focus',
        name: 'Weapon Focus',
        source: 'level_1',
        grantedAtLevel: 1,
        active: true,
        choices: { weapon: 'longsword' },
      });
      char.feats.feats.push({
        featId: 'weapon_focus',
        name: 'Weapon Focus',
        source: 'fighter_bonus_2',
        grantedAtLevel: 2,
        active: true,
        choices: { weapon: 'glaive' },
      });
      const feat = makeFeat([
        {
          type: 'feat',
          featId: 'weapon_focus',
          choiceRequirement: { key: 'weapon', value: 'glaive' },
        },
      ]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(true);
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

    test('ability_score with invalid ability key returns false', () => {
      const char = createTestCharacter();
      const feat = makeFeat([{ type: 'ability_score', ability: 'LCK' as 'STR', minimum: 10 }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(false);
    });

    test('level prerequisite with class met', () => {
      const char = createTestCharacter({ className: 'Fighter' });
      const feat = makeFeat([{ type: 'level', minimum: 1, class: 'Fighter' }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(true);
    });

    test('level prerequisite with class not met when wrong class', () => {
      const char = createTestCharacter({ className: 'Fighter' });
      const feat = makeFeat([{ type: 'level', minimum: 1, class: 'Wizard' }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(false);
      expect(result.reasons[0]).toContain('Wizard');
    });

    test('skill prerequisite met', () => {
      const char = createTestCharacter();
      char.skills.acrobatics.ranks = 5;
      const feat = makeFeat([{ type: 'skill', skillId: 'acrobatics', ranks: 5 }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(true);
    });

    test('skill prerequisite not met', () => {
      const char = createTestCharacter();
      char.skills.acrobatics.ranks = 2;
      const feat = makeFeat([{ type: 'skill', skillId: 'acrobatics', ranks: 5 }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(false);
      expect(result.reasons[0]).toContain('acrobatics');
    });

    test('skill prerequisite not met when skillId does not exist', () => {
      const char = createTestCharacter();
      const feat = makeFeat([{ type: 'skill', skillId: 'nonexistent_skill', ranks: 1 }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(false);
    });

    test('class_feature prerequisite met', () => {
      const char = createTestCharacter({ className: 'Fighter' });
      char.classes.classes[0].classFeatures.push({
        name: 'Bravery',
        description: 'Will save bonus',
        level: 2,
        effects: [],
      });
      const feat = makeFeat([{ type: 'class_feature', featureName: 'Bravery' }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(true);
    });

    test('class_feature prerequisite not met', () => {
      const char = createTestCharacter({ className: 'Fighter' });
      const feat = makeFeat([{ type: 'class_feature', featureName: 'Sneak Attack' }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(false);
      expect(result.reasons[0]).toContain('Sneak Attack');
    });

    test('proficiency prerequisite met (Fighter has Martial weapons)', () => {
      const char = createTestCharacter({ className: 'Fighter' });
      const feat = makeFeat([{ type: 'proficiency', proficiency: 'Martial weapons' }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(true);
    });

    test('proficiency prerequisite not met', () => {
      const char = createTestCharacter({ className: 'Fighter' });
      const feat = makeFeat([{ type: 'proficiency', proficiency: 'Exotic weapons' }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(false);
      expect(result.reasons[0]).toContain('Exotic weapons');
    });

    test('caster_level prerequisite met', () => {
      const char = createTestCharacter();
      const pool: SpellcastingPool = {
        baseClass: 'wizard',
        castingType: 'arcane',
        spellAbility: 'INT',
        contributors: [],
        effectiveSpellcastingLevel: 5,
        baseCasterLevel: 5,
        clBonuses: [],
        spellsPerDay: { base: [], bonus: [], misc: [], total: [], used: [] },
        spellDC: { base: 10, miscBonus: 0, byLevel: [] },
        spellFailure: 0,
        concentration: { abilityMod: 3, casterLevel: 5, misc: 0, total: 8 },
      };
      char.spellcasting.pools.push(pool);
      const feat = makeFeat([{ type: 'caster_level', minimum: 5 }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(true);
    });

    test('caster_level prerequisite not met', () => {
      const char = createTestCharacter();
      const feat = makeFeat([{ type: 'caster_level', minimum: 5 }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(false);
      expect(result.reasons[0]).toContain('Caster level');
    });

    test('mythic_tier prerequisite met', () => {
      const char = createTestCharacter();
      char.mythic = {
        tier: 3,
        path: 'archmage',
        pathAbilities: [],
        universalAbilities: [],
        tierHistory: [],
      };
      const feat = makeFeat([{ type: 'mythic_tier', minimum: 3 }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(true);
    });

    test('mythic_tier prerequisite not met (no mythic)', () => {
      const char = createTestCharacter();
      const feat = makeFeat([{ type: 'mythic_tier', minimum: 1 }]);
      const result = PrerequisiteService.checkPrerequisites(char, feat);
      expect(result.met).toBe(false);
      expect(result.reasons[0]).toContain('Mythic Tier');
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

    test('does not exclude choice-based feats already taken (repeatable)', () => {
      const choiceFeat: FeatDefinition = {
        id: 'weapon_focus',
        name: 'Weapon Focus',
        description: 'You are especially good with one weapon.',
        source: 'Test',
        types: ['combat'],
        prerequisites: [],
        effects: [],
        activationMode: 'passive',
        choices: [{ type: 'weapon', label: 'Weapon', affectsEffects: true }],
      };
      const char = createTestCharacter();
      char.feats.feats.push({
        featId: 'weapon_focus',
        name: 'Weapon Focus',
        source: 'level_1',
        grantedAtLevel: 1,
        active: true,
        choices: { weapon: 'longsword' },
      });
      const available = PrerequisiteService.getAvailableFeats(char, [choiceFeat]);
      expect(available).toContainEqual(choiceFeat);
    });
  });
});
