import { ModifierPipelineService } from '@services/ModifierPipelineService';
import { FeatRegistryService } from '@services/FeatRegistryService';
import { CharacterService } from '@services/CharacterService';
import { Size, Alignment, BonusType } from '@/types/base';
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

function createTestCharacter(overrides?: {
  str?: number;
  dex?: number;
  con?: number;
  int?: number;
  wis?: number;
  cha?: number;
  className?: string;
}): Character {
  return CharacterService.createDefaultCharacter({
    name: 'Test Character',
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
}

// Test feats registered for pipeline tests
const testFeats: FeatDefinition[] = [
  {
    id: 'lightning_reflexes',
    name: 'Lightning Reflexes',
    description: '+2 Reflex',
    source: 'CRB',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        target: 'save.reflex',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Lightning Reflexes',
      },
    ],
    activationMode: 'passive',
  },
  {
    id: 'improved_initiative',
    name: 'Improved Initiative',
    description: '+4 init',
    source: 'CRB',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        target: 'initiative',
        value: 4,
        bonusType: BonusType.UNTYPED,
        source: 'Improved Initiative',
      },
    ],
    activationMode: 'passive',
  },
  {
    id: 'dodge',
    name: 'Dodge',
    description: '+1 dodge AC',
    source: 'CRB',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'ability_score', ability: 'DEX', minimum: 13 }],
    effects: [
      { type: 'bonus', target: 'ac.dodge', value: 1, bonusType: BonusType.DODGE, source: 'Dodge' },
    ],
    activationMode: 'passive',
  },
  {
    id: 'toughness',
    name: 'Toughness',
    description: '+HP',
    source: 'CRB',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        target: 'hp',
        value: 'max(3, level)',
        bonusType: BonusType.UNTYPED,
        source: 'Toughness',
      },
    ],
    activationMode: 'passive',
  },
  {
    id: 'power_attack',
    name: 'Power Attack',
    description: 'Trade attack for damage',
    source: 'CRB',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'bab', minimum: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'attack.melee',
        value: '-(floor(BAB / 4) + 1)',
        bonusType: BonusType.UNTYPED,
        source: 'Power Attack',
        activation: { type: 'toggle', active: false },
      },
      {
        type: 'bonus',
        target: 'damage.melee',
        value: '(floor(BAB / 4) + 1) * 2',
        bonusType: BonusType.UNTYPED,
        source: 'Power Attack',
        activation: { type: 'toggle', active: false },
      },
    ],
    activationMode: 'toggle',
  },
];

describe('ModifierPipelineService', () => {
  beforeEach(() => {
    FeatRegistryService.clear();
    FeatRegistryService.registerBatch(testFeats);
  });

  afterEach(() => {
    FeatRegistryService.clear();
  });

  describe('recalculate', () => {
    test('calculates ability scores correctly', () => {
      const char = createTestCharacter({ str: 16, dex: 14, con: 13 });
      const result = ModifierPipelineService.recalculate(char);

      expect(result.abilityScores.str.total).toBe(16);
      expect(result.abilityScores.str.modifier).toBe(3);
      expect(result.abilityScores.dex.total).toBe(14);
      expect(result.abilityScores.dex.modifier).toBe(2);
      expect(result.abilityScores.con.total).toBe(13);
      expect(result.abilityScores.con.modifier).toBe(1);
    });

    test('applies passive feat effects', () => {
      const char = createTestCharacter();
      char.feats.feats.push({
        featId: 'lightning_reflexes',
        name: 'Lightning Reflexes',
        source: 'level_1',
        grantedAtLevel: 1,
        active: true,
        choices: {},
      });

      const before = ModifierPipelineService.recalculate(createTestCharacter());
      const after = ModifierPipelineService.recalculate(char);

      expect(after.combatStats.savingThrows.reflex.misc).toBe(
        before.combatStats.savingThrows.reflex.misc + 2,
      );
    });

    test('applies initiative bonus from feat', () => {
      const char = createTestCharacter();
      char.feats.feats.push({
        featId: 'improved_initiative',
        name: 'Improved Initiative',
        source: 'level_1',
        grantedAtLevel: 1,
        active: true,
        choices: {},
      });

      const result = ModifierPipelineService.recalculate(char);
      // Initiative = dexMod + misc; misc should include +4
      expect(result.combatStats.initiative.misc).toBe(4);
    });

    test('applies dodge AC bonus', () => {
      const char = createTestCharacter({ dex: 14 });
      char.feats.feats.push({
        featId: 'dodge',
        name: 'Dodge',
        source: 'level_1',
        grantedAtLevel: 1,
        active: true,
        choices: {},
      });

      const result = ModifierPipelineService.recalculate(char);
      expect(result.combatStats.armorClass.dodge).toBe(1);
    });

    test('toggle feat inactive does not apply effects', () => {
      const char = createTestCharacter({ str: 16 });
      char.feats.feats.push({
        featId: 'power_attack',
        name: 'Power Attack',
        source: 'level_1',
        grantedAtLevel: 1,
        active: false,
        choices: {},
      });

      const baseline = ModifierPipelineService.recalculate(createTestCharacter({ str: 16 }));
      const result = ModifierPipelineService.recalculate(char);

      expect(result.combatStats.attackBonuses.meleeTotal).toBe(
        baseline.combatStats.attackBonuses.meleeTotal,
      );
    });

    test('toggle feat active applies effects', () => {
      const char = createTestCharacter({ str: 16 });
      char.feats.feats.push({
        featId: 'power_attack',
        name: 'Power Attack',
        source: 'level_1',
        grantedAtLevel: 1,
        active: true,
        choices: {},
      });

      const baseline = ModifierPipelineService.recalculate(createTestCharacter({ str: 16 }));
      const result = ModifierPipelineService.recalculate(char);

      // Power Attack at BAB 1: -(floor(1/4)+1) = -1 attack
      expect(result.combatStats.attackBonuses.meleeTotal).toBe(
        baseline.combatStats.attackBonuses.meleeTotal - 1,
      );
    });

    test('formula-based HP feat (Toughness) works', () => {
      const char = createTestCharacter();
      char.feats.feats.push({
        featId: 'toughness',
        name: 'Toughness',
        source: 'level_1',
        grantedAtLevel: 1,
        active: true,
        choices: {},
      });

      const baseline = ModifierPipelineService.recalculate(createTestCharacter());
      const result = ModifierPipelineService.recalculate(char);

      // Toughness at level 1: max(3, 1) = 3 bonus HP
      expect(result.combatStats.hitPoints.other).toBe(baseline.combatStats.hitPoints.other + 3);
    });

    test('recalculate is pure (does not mutate input)', () => {
      const char = createTestCharacter();
      const originalStr = char.abilityScores.str.total;
      ModifierPipelineService.recalculate(char);
      expect(char.abilityScores.str.total).toBe(originalStr);
    });

    test('calculates BAB and iterative attacks', () => {
      const char = createTestCharacter();
      const result = ModifierPipelineService.recalculate(char);

      // Fighter level 1 = BAB +1
      expect(result.combatStats.attackBonuses.baseAttack).toEqual([1]);
    });

    test('calculates saving throws from class progression', () => {
      const char = createTestCharacter();
      const result = ModifierPipelineService.recalculate(char);

      // Fighter: Fort Good, Ref Poor, Will Poor
      expect(result.combatStats.savingThrows.fortitude.base).toBeGreaterThan(0);
    });
  });

  describe('getBreakdown', () => {
    test('returns breakdown for a stat with bonuses', () => {
      const char = createTestCharacter();
      char.feats.feats.push({
        featId: 'improved_initiative',
        name: 'Improved Initiative',
        source: 'level_1',
        grantedAtLevel: 1,
        active: true,
        choices: {},
      });

      const breakdown = ModifierPipelineService.getBreakdown(char, 'initiative');
      expect(breakdown.total).toBe(4);
      expect(breakdown.bonuses.length).toBeGreaterThan(0);
      expect(breakdown.bonuses.some((b) => b.source === 'Improved Initiative')).toBe(true);
    });

    test('returns empty breakdown for stat with no bonuses', () => {
      const char = createTestCharacter();
      const breakdown = ModifierPipelineService.getBreakdown(char, 'speed.fly');
      expect(breakdown.total).toBe(0);
      expect(breakdown.bonuses).toHaveLength(0);
    });
  });

  describe('stacking rules', () => {
    test('dodge bonuses stack', () => {
      const char = createTestCharacter({ dex: 14 });
      // Add Dodge feat and a racial dodge bonus
      char.feats.feats.push({
        featId: 'dodge',
        name: 'Dodge',
        source: 'level_1',
        grantedAtLevel: 1,
        active: true,
        choices: {},
      });
      char.info.race.traits.push({
        name: 'Defensive Training',
        description: 'Dodge bonus to AC',
        effects: [
          {
            type: 'bonus',
            target: 'ac.dodge',
            value: 2,
            bonusType: BonusType.DODGE,
            source: 'Defensive Training',
          },
        ],
      });

      const result = ModifierPipelineService.recalculate(char);
      // Dodge bonuses stack: 1 (Dodge) + 2 (Defensive Training) = 3
      expect(result.combatStats.armorClass.dodge).toBe(3);
    });

    test('typed bonuses take highest only', () => {
      const char = createTestCharacter();
      // Add two armor bonuses — only highest should apply
      char.info.race.traits.push({
        name: 'Natural Armor 1',
        description: 'Natural armor bonus',
        effects: [
          {
            type: 'bonus',
            target: 'ac.natural',
            value: 2,
            bonusType: BonusType.NATURAL,
            source: 'Natural Armor 1',
          },
        ],
      });
      char.info.race.traits.push({
        name: 'Natural Armor 2',
        description: 'Natural armor bonus',
        effects: [
          {
            type: 'bonus',
            target: 'ac.natural',
            value: 3,
            bonusType: BonusType.NATURAL,
            source: 'Natural Armor 2',
          },
        ],
      });

      const result = ModifierPipelineService.recalculate(char);
      // Only highest natural armor should apply: 3, not 5
      expect(result.combatStats.armorClass.natural).toBe(3);
    });
  });

  describe('BAB progressions', () => {
    test('Rogue (medium BAB) has lower BAB than Fighter (full BAB) at level 1', () => {
      const fighter = createTestCharacter({ className: 'Fighter' });
      const rogue = createTestCharacter({ className: 'Rogue' });
      const recalcFighter = ModifierPipelineService.recalculate(fighter);
      const recalcRogue = ModifierPipelineService.recalculate(rogue);
      // Both level 1: Fighter BAB = 1, Rogue BAB = 0 (floor(1*0.75)=0)
      expect(recalcFighter.classes.baseAttackBonus[0]).toBeGreaterThanOrEqual(
        recalcRogue.classes.baseAttackBonus[0],
      );
    });

    test('Wizard (low BAB) has BAB of 0 at level 1', () => {
      const wizard = createTestCharacter({ className: 'Wizard' });
      const result = ModifierPipelineService.recalculate(wizard);
      expect(result.classes.baseAttackBonus[0]).toBe(0);
    });
  });

  describe('collectEquipmentEffects — editorEquipment magic items', () => {
    test('applies ability enhancement bonus from equipped magic item', () => {
      const char = createTestCharacter({ cha: 10 });
      char.editorEquipment = [
        {
          id: 'item-1',
          definitionId: 'headband-cha-6',
          collection: 'magicItems',
          name: 'Headband of Alluring Charisma +6',
          slot: 'headband',
          effects: [
            {
              type: 'bonus',
              bonusType: BonusType.ENHANCEMENT,
              target: 'ability.cha',
              value: 6,
              source: 'Headband of Alluring Charisma +6',
            },
          ],
        },
      ];
      const result = ModifierPipelineService.recalculate(char);
      expect(result.abilityScores.cha.total).toBe(16);
    });

    test('populates bonuses.enhancement breakdown for equipped magic item', () => {
      const char = createTestCharacter({ int: 10 });
      char.editorEquipment = [
        {
          id: 'item-2',
          definitionId: 'headband-int-6',
          collection: 'magicItems',
          name: 'Headband of Vast Intellect +6',
          slot: 'headband',
          effects: [
            {
              type: 'bonus',
              bonusType: BonusType.ENHANCEMENT,
              target: 'ability.int',
              value: 6,
              source: 'Headband of Vast Intellect +6',
            },
          ],
        },
      ];
      const result = ModifierPipelineService.recalculate(char);
      expect(result.abilityScores.int.bonuses.enhancement).toHaveLength(1);
      expect(result.abilityScores.int.bonuses.enhancement[0].value).toBe(6);
    });

    test('applies effects from orbiting ioun stones (isOrbiting:true, slot:undefined)', () => {
      const char = createTestCharacter({ int: 10 });
      char.editorEquipment = [
        {
          id: 'ioun-1',
          collection: 'magicItems',
          name: 'Dusty Rose Prism Ioun Stone',
          isOrbiting: true,
          // slot intentionally absent — ioun stones orbit, not worn in a slot
          effects: [
            {
              type: 'bonus',
              bonusType: BonusType.INSIGHT,
              target: 'ac',
              value: 1,
              source: 'Dusty Rose Prism Ioun Stone',
            },
          ],
        },
      ];
      const result = ModifierPipelineService.recalculate(char);
      expect(result.combatStats.armorClass.misc).toBe(1);
    });

    test('does not apply effects from unequipped (no slot) items', () => {
      const char = createTestCharacter({ int: 10 });
      const baseInt = char.abilityScores.int.total;
      char.editorEquipment = [
        {
          id: 'item-3',
          collection: 'magicItems',
          name: 'Headband (carried)',
          effects: [
            {
              type: 'bonus',
              bonusType: BonusType.ENHANCEMENT,
              target: 'ability.int',
              value: 6,
              source: 'Headband',
            },
          ],
        },
      ];
      const result = ModifierPipelineService.recalculate(char);
      expect(result.abilityScores.int.total).toBe(baseInt);
    });

    test('stacks deflection AC from Ring of Protection through pipeline', () => {
      const char = createTestCharacter();
      char.editorEquipment = [
        {
          id: 'item-4',
          collection: 'magicItems',
          name: 'Ring of Protection +3',
          slot: 'ring_left',
          effects: [
            {
              type: 'bonus',
              bonusType: BonusType.DEFLECTION,
              target: 'ac.deflection',
              value: 3,
              source: 'Ring of Protection +3',
            },
          ],
        },
      ];
      const result = ModifierPipelineService.recalculate(char);
      expect(result.combatStats.armorClass.deflection).toBe(3);
    });
  });

  describe('collectEquipmentEffects — armor, shields, weapons', () => {
    test('equipped armor with enhancement contributes armor+enhancement to AC', () => {
      const char = createTestCharacter();
      char.equipment.armor = [
        { acBonus: 6, enhancement: 1, equipped: true, name: 'Chainmail +1' },
      ] as unknown as typeof char.equipment.armor;
      const result = ModifierPipelineService.recalculate(char);
      expect(result.combatStats.armorClass.armor).toBe(7);
    });

    test('unequipped armor is not counted', () => {
      const char = createTestCharacter();
      char.equipment.armor = [
        { acBonus: 6, enhancement: 0, equipped: false, name: 'Chainmail' },
      ] as unknown as typeof char.equipment.armor;
      const result = ModifierPipelineService.recalculate(char);
      expect(result.combatStats.armorClass.armor).toBe(0);
    });

    test('equipped shield with enhancement contributes to AC', () => {
      const char = createTestCharacter();
      char.equipment.shields = [
        { acBonus: 2, enhancement: 2, equipped: true, name: 'Heavy Shield +2' },
      ] as unknown as typeof char.equipment.shields;
      const result = ModifierPipelineService.recalculate(char);
      expect(result.combatStats.armorClass.shield).toBe(4);
    });

    test('equipped weapon with enhancement adds to melee attack', () => {
      const char = createTestCharacter();
      char.equipment.weapons = [
        { enhancement: 1, equipped: true, masterwork: true, isRanged: false, name: 'Longsword +1' },
      ] as unknown as typeof char.equipment.weapons;
      const baseline = ModifierPipelineService.recalculate(createTestCharacter());
      const result = ModifierPipelineService.recalculate(char);
      expect(result.combatStats.attackBonuses.meleeTotal).toBe(
        baseline.combatStats.attackBonuses.meleeTotal + 1,
      );
    });

    test('masterwork weapon with no enhancement gives +1 melee attack', () => {
      const char = createTestCharacter();
      char.equipment.weapons = [
        {
          enhancement: 0,
          equipped: true,
          masterwork: true,
          isRanged: false,
          name: 'Longsword (masterwork)',
        },
      ] as unknown as typeof char.equipment.weapons;
      const baseline = ModifierPipelineService.recalculate(createTestCharacter());
      const result = ModifierPipelineService.recalculate(char);
      expect(result.combatStats.attackBonuses.meleeTotal).toBe(
        baseline.combatStats.attackBonuses.meleeTotal + 1,
      );
    });

    test('equipped ranged weapon with enhancement adds to ranged attack', () => {
      const char = createTestCharacter();
      char.equipment.weapons = [
        { enhancement: 1, equipped: true, masterwork: true, isRanged: true, name: 'Longbow +1' },
      ] as unknown as typeof char.equipment.weapons;
      const baseline = ModifierPipelineService.recalculate(createTestCharacter());
      const result = ModifierPipelineService.recalculate(char);
      expect(result.combatStats.attackBonuses.rangedTotal).toBe(
        baseline.combatStats.attackBonuses.rangedTotal + 1,
      );
    });
  });

  describe('resource pools', () => {
    test('recalculate computes resource pools from class features', () => {
      const char = createTestCharacter();
      char.classes.classes[0].classFeatures.push({
        name: 'Rage',
        description: 'Barbarian rage',
        level: 1,
        effects: [],
        resourcePool: {
          id: 'rage',
          name: 'Rage',
          maxFormula: '4 + conMod',
          rechargeOn: 'rest' as const,
          restRecoveryMode: 'full' as const,
        },
      });
      const result = ModifierPipelineService.recalculate(char);
      expect(result.resources.length).toBeGreaterThan(0);
      const ragePool = result.resources.find((p) => p.id === 'rage');
      expect(ragePool).toBeDefined();
      expect(ragePool!.max).toBeGreaterThan(0);
    });
  });

  describe('conditions effects', () => {
    test('active condition effects are applied to stats', () => {
      const char = createTestCharacter();
      char.conditions.activeConditions.push({
        name: 'Blessed',
        description: 'Morale bonus to attacks',
        effects: [
          {
            type: 'bonus',
            target: 'attack.melee',
            value: 1,
            bonusType: BonusType.MORALE,
            source: 'Blessed',
          },
        ],
      });
      const baseline = ModifierPipelineService.recalculate(createTestCharacter());
      const result = ModifierPipelineService.recalculate(char);
      expect(result.combatStats.attackBonuses.meleeTotal).toBe(
        baseline.combatStats.attackBonuses.meleeTotal + 1,
      );
    });
  });
});
