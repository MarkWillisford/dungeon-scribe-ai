import { CharacterService } from '@/services/CharacterService';
import { AbilityScoreService } from '@/services/AbilityScoreService';
import { ValidationService } from '@/services/ValidationService';
import { CORE_RACES, getRaceByName } from '@/data/races';
import { CORE_CLASSES, getClassByName } from '@/data/classes';
import { CreateCharacterParams, AbilityScoreMethod } from '@/types/character';
import { Alignment, Size, BABProgression, SaveProgression } from '@/types/base';
import { Race } from '@/types/race';
import { Character } from '@/types';

// ---------------------------------------------------------------------------
// Helper: convert static RaceData -> the Race interface expected by services
// ---------------------------------------------------------------------------
function raceDataToRace(name: string): Race {
  const data = getRaceByName(name);
  if (!data) throw new Error(`Unknown race: ${name}`);

  return {
    name: data.name,
    sizeMod: data.size,
    baseSpeed: data.speed,
    alternativeMovements: {},
    abilityModifiers: {
      str: data.abilityModifiers.strength,
      dex: data.abilityModifiers.dexterity,
      con: data.abilityModifiers.constitution,
      int: data.abilityModifiers.intelligence,
      wis: data.abilityModifiers.wisdom,
      cha: data.abilityModifiers.charisma,
    },
    traits: data.traits.map((t) => ({ name: t, description: t, effects: [] })),
    languages: data.languages,
    bonusLanguages: [],
  };
}

// ---------------------------------------------------------------------------
// Shared constants
// ---------------------------------------------------------------------------
const ABILITIES = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;

describe('Character Creation Flow Integration', () => {
  // =========================================================================
  // 1. Full creation flow: Human Fighter with point buy
  // =========================================================================
  describe('1 - Human Fighter with point buy', () => {
    let character: Character;

    // Point buy scores that fit within 20-point budget
    const scores = { str: 15, dex: 14, con: 13, int: 12, wis: 10, cha: 8 };

    beforeAll(() => {
      // Step 1: Set name
      const name = 'Gareth the Bold';

      // Step 2: Select Human race
      const race = raceDataToRace('Human');

      // Step 3: Select Fighter class
      const selectedClass = 'Fighter';

      // Step 4: Allocate points via point buy
      const params: CreateCharacterParams = {
        name,
        race,
        selectedClass,
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: scores,
        alignment: Alignment.LawfulGood,
      };

      character = CharacterService.createDefaultCharacter(params);
    });

    test('character name is set correctly', () => {
      expect(character.info.name).toBe('Gareth the Bold');
    });

    test('race is Human with Medium size', () => {
      expect(character.info.race.name).toBe('Human');
      expect(character.info.size).toBe(Size.Medium);
    });

    test('class is Fighter at level 1 with d10 hit die', () => {
      expect(character.classes.classes).toHaveLength(1);
      expect(character.classes.classes[0].name).toBe('Fighter');
      expect(character.classes.classes[0].level).toBe(1);
      expect(character.classes.classes[0].hitDieSize).toBe(10);
    });

    test('ability scores match the point buy allocation', () => {
      expect(character.abilityScores.str.base).toBe(15);
      expect(character.abilityScores.dex.base).toBe(14);
      expect(character.abilityScores.con.base).toBe(13);
      expect(character.abilityScores.int.base).toBe(12);
      expect(character.abilityScores.wis.base).toBe(10);
      expect(character.abilityScores.cha.base).toBe(8);
    });

    test('Human has no fixed racial modifiers applied', () => {
      for (const ability of ABILITIES) {
        expect(character.abilityScores[ability].racial).toBe(0);
      }
    });

    test('point buy allocation is within 20-point budget', () => {
      let totalCost = 0;
      for (const ability of ABILITIES) {
        totalCost += AbilityScoreService.calculatePointCost(scores[ability]);
      }
      expect(totalCost).toBeLessThanOrEqual(20);

      const validation = AbilityScoreService.validatePointBuy(character.abilityScores, 20);
      expect(validation.isValid).toBe(true);
      expect(validation.errors).toHaveLength(0);
    });

    test('complete character passes full validation', () => {
      const result = CharacterService.validateCharacter(character);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
  });

  // =========================================================================
  // 2. Full creation flow: Dwarf Cleric with 4d6-drop-lowest
  // =========================================================================
  describe('2 - Dwarf Cleric with 4d6-drop-lowest', () => {
    let character: Character;
    let rolledResults: { [key: string]: { total: number; rolls: number[] } };

    beforeAll(() => {
      // Step 1: Roll ability scores using 4d6 drop lowest
      rolledResults = AbilityScoreService.rollAllAbilities(AbilityScoreMethod.Roll4d6DropLowest);

      // Step 2: Select Dwarf race
      const race = raceDataToRace('Dwarf');

      // Step 3: Select Cleric class
      // Step 4: Create character from rolled scores
      const params: CreateCharacterParams = {
        name: 'Durak Stonehelm',
        race,
        selectedClass: 'Cleric',
        abilityScoreMethod: AbilityScoreMethod.Roll4d6DropLowest,
        abilityScores: {
          str: rolledResults.str.total,
          dex: rolledResults.dex.total,
          con: rolledResults.con.total,
          int: rolledResults.int.total,
          wis: rolledResults.wis.total,
          cha: rolledResults.cha.total,
        },
        alignment: Alignment.LawfulGood,
        deity: 'Torag',
      };

      character = CharacterService.createDefaultCharacter(params);
    });

    test('racial CON+2 and CHA-2 are applied', () => {
      expect(character.abilityScores.con.racial).toBe(2);
      expect(character.abilityScores.cha.racial).toBe(-2);
    });

    test('racial WIS+2 is also applied for Dwarf', () => {
      expect(character.abilityScores.wis.racial).toBe(2);
    });

    test('CON total equals base + racial modifier', () => {
      expect(character.abilityScores.con.total).toBe(rolledResults.con.total + 2);
    });

    test('CHA total equals base + racial modifier', () => {
      expect(character.abilityScores.cha.total).toBe(rolledResults.cha.total - 2);
    });

    test('all rolled base scores are in the valid 3-18 range', () => {
      for (const ability of ABILITIES) {
        expect(character.abilityScores[ability].base).toBeGreaterThanOrEqual(3);
        expect(character.abilityScores[ability].base).toBeLessThanOrEqual(18);
      }
    });

    test('class is Cleric with d8 hit die', () => {
      expect(character.classes.classes[0].name).toBe('Cleric');
      expect(character.classes.classes[0].hitDieSize).toBe(8);
    });

    test('Cleric level-1 features are present', () => {
      const featureNames = character.classes.classes[0].classFeatures.map((f) => f.name);
      expect(featureNames).toContain('Aura');
      expect(featureNames).toContain('Channel Energy 1d6');
      expect(featureNames).toContain('Domains');
      expect(featureNames).toContain('Orisons');
      expect(featureNames).toContain('Spontaneous Casting');
    });

    test('complete character passes full validation', () => {
      const result = CharacterService.validateCharacter(character);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
  });

  // =========================================================================
  // 3. Full creation flow: Elf Wizard with 3d6 rolling
  // =========================================================================
  describe('3 - Elf Wizard with 3d6 rolling', () => {
    let character: Character;
    let rolledResults: { [key: string]: { total: number; rolls: number[] } };

    beforeAll(() => {
      // Step 1: Roll ability scores using 3d6
      rolledResults = AbilityScoreService.rollAllAbilities(AbilityScoreMethod.Roll3d6);

      // Step 2: Select Elf race
      const race = raceDataToRace('Elf');

      // Step 3: Select Wizard class and create character
      const params: CreateCharacterParams = {
        name: 'Aelindra Starwhisper',
        race,
        selectedClass: 'Wizard',
        abilityScoreMethod: AbilityScoreMethod.Roll3d6,
        abilityScores: {
          str: rolledResults.str.total,
          dex: rolledResults.dex.total,
          con: rolledResults.con.total,
          int: rolledResults.int.total,
          wis: rolledResults.wis.total,
          cha: rolledResults.cha.total,
        },
        alignment: Alignment.ChaoticNeutral,
      };

      character = CharacterService.createDefaultCharacter(params);
    });

    test('racial DEX+2 and INT+2 are applied', () => {
      expect(character.abilityScores.dex.racial).toBe(2);
      expect(character.abilityScores.int.racial).toBe(2);
    });

    test('racial CON-2 is applied', () => {
      expect(character.abilityScores.con.racial).toBe(-2);
    });

    test('DEX total equals base + 2', () => {
      expect(character.abilityScores.dex.total).toBe(rolledResults.dex.total + 2);
    });

    test('INT total equals base + 2', () => {
      expect(character.abilityScores.int.total).toBe(rolledResults.int.total + 2);
    });

    test('CON total equals base - 2', () => {
      expect(character.abilityScores.con.total).toBe(rolledResults.con.total - 2);
    });

    test('all rolled base scores are in the valid 3-18 range', () => {
      for (const ability of ABILITIES) {
        expect(character.abilityScores[ability].base).toBeGreaterThanOrEqual(3);
        expect(character.abilityScores[ability].base).toBeLessThanOrEqual(18);
      }
    });

    test('Wizard level-1 class features are present', () => {
      const featureNames = character.classes.classes[0].classFeatures.map((f) => f.name);
      expect(featureNames).toContain('Arcane Bond');
      expect(featureNames).toContain('Arcane School');
      expect(featureNames).toContain('Cantrips');
      expect(featureNames).toContain('Scribe Scroll');
    });

    test('Wizard has d6 hit die and Low BAB', () => {
      expect(character.classes.classes[0].hitDieSize).toBe(6);
      expect(character.classes.classes[0].babProgression).toBe(BABProgression.Low);
    });

    test('Wizard save progressions are correct (Poor/Poor/Good)', () => {
      expect(character.classes.classes[0].fortProgression).toBe(SaveProgression.Poor);
      expect(character.classes.classes[0].refProgression).toBe(SaveProgression.Poor);
      expect(character.classes.classes[0].willProgression).toBe(SaveProgression.Good);
    });

    test('ValidationService accepts the rolled scores for 3d6', () => {
      const validation = ValidationService.validateAbilityScores(
        character.abilityScores,
        AbilityScoreMethod.Roll3d6,
      );
      expect(validation.isValid).toBe(true);
      expect(validation.errors).toHaveLength(0);
    });

    test('complete character passes full validation', () => {
      const result = CharacterService.validateCharacter(character);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
  });

  // =========================================================================
  // 4. Verify racial traits are preserved (darkvision, weapon familiarity, etc.)
  // =========================================================================
  describe('4 - Racial traits are preserved on the character', () => {
    test('Dwarf has darkvision and weapon familiarity traits', () => {
      const race = raceDataToRace('Dwarf');
      const character = CharacterService.createDefaultCharacter({
        name: 'Trait Test Dwarf',
        race,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: { str: 14, dex: 12, con: 14, int: 10, wis: 12, cha: 8 },
        alignment: Alignment.LawfulNeutral,
      });

      const traitNames = character.info.race.traits.map((t) => t.name);
      expect(traitNames.some((t) => t.includes('Darkvision'))).toBe(true);
      expect(traitNames.some((t) => t.includes('Weapon Familiarity'))).toBe(true);
      expect(traitNames.some((t) => t.includes('Hardy'))).toBe(true);
      expect(traitNames.some((t) => t.includes('Stability'))).toBe(true);
      expect(traitNames.some((t) => t.includes('Stonecunning'))).toBe(true);
    });

    test('Elf has low-light vision and elven immunities traits', () => {
      const race = raceDataToRace('Elf');
      const character = CharacterService.createDefaultCharacter({
        name: 'Trait Test Elf',
        race,
        selectedClass: 'Wizard',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: { str: 8, dex: 14, con: 12, int: 16, wis: 12, cha: 10 },
        alignment: Alignment.ChaoticGood,
      });

      const traitNames = character.info.race.traits.map((t) => t.name);
      expect(traitNames.some((t) => t.includes('Low-Light Vision'))).toBe(true);
      expect(traitNames.some((t) => t.includes('Elven Immunities'))).toBe(true);
      expect(traitNames.some((t) => t.includes('Keen Senses'))).toBe(true);
      expect(traitNames.some((t) => t.includes('Weapon Familiarity'))).toBe(true);
    });

    test('Halfling has fearless and halfling luck traits', () => {
      const race = raceDataToRace('Halfling');
      const character = CharacterService.createDefaultCharacter({
        name: 'Trait Test Halfling',
        race,
        selectedClass: 'Rogue',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: { str: 10, dex: 16, con: 12, int: 12, wis: 10, cha: 12 },
        alignment: Alignment.NeutralGood,
      });

      const traitNames = character.info.race.traits.map((t) => t.name);
      expect(traitNames.some((t) => t.includes('Fearless'))).toBe(true);
      expect(traitNames.some((t) => t.includes('Halfling Luck'))).toBe(true);
      expect(traitNames.some((t) => t.includes('Sure-Footed'))).toBe(true);
    });

    test('all 7 core races preserve their traits on created characters', () => {
      expect(CORE_RACES).toHaveLength(7);

      for (const raceData of CORE_RACES) {
        const race = raceDataToRace(raceData.name);
        const character = CharacterService.createDefaultCharacter({
          name: `${raceData.name} Trait Check`,
          race,
          selectedClass: 'Fighter',
          abilityScoreMethod: AbilityScoreMethod.PointBuy,
          abilityScores: { str: 12, dex: 12, con: 12, int: 10, wis: 10, cha: 10 },
          alignment: Alignment.TrueNeutral,
        });

        // Each race's traits should be on the character
        expect(character.info.race.traits).toHaveLength(raceData.traits.length);

        for (let i = 0; i < raceData.traits.length; i++) {
          expect(character.info.race.traits[i].name).toBe(raceData.traits[i]);
        }
      }
    });
  });

  // =========================================================================
  // 5. Verify class features are set (Fighter bonus feat, etc.)
  // =========================================================================
  describe('5 - Class features are set correctly', () => {
    test('Fighter has Bonus Feat at level 1', () => {
      const race = raceDataToRace('Human');
      const character = CharacterService.createDefaultCharacter({
        name: 'Fighter Feature Test',
        race,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: { str: 15, dex: 14, con: 13, int: 12, wis: 10, cha: 8 },
        alignment: Alignment.LawfulGood,
      });

      const featureNames = character.classes.classes[0].classFeatures.map((f) => f.name);
      expect(featureNames).toContain('Bonus Feat');
    });

    test('Rogue has Sneak Attack and Trapfinding at level 1', () => {
      const race = raceDataToRace('Halfling');
      const character = CharacterService.createDefaultCharacter({
        name: 'Rogue Feature Test',
        race,
        selectedClass: 'Rogue',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: { str: 10, dex: 16, con: 12, int: 12, wis: 10, cha: 12 },
        alignment: Alignment.ChaoticNeutral,
      });

      const featureNames = character.classes.classes[0].classFeatures.map((f) => f.name);
      expect(featureNames).toContain('Sneak Attack +1d6');
      expect(featureNames).toContain('Trapfinding');
    });

    test('Barbarian has Rage and Fast Movement at level 1', () => {
      const race = raceDataToRace('Half-Orc');
      const character = CharacterService.createDefaultCharacter({
        name: 'Barbarian Feature Test',
        race,
        selectedClass: 'Barbarian',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: { str: 16, dex: 12, con: 14, int: 8, wis: 10, cha: 10 },
        alignment: Alignment.ChaoticNeutral,
      });

      const featureNames = character.classes.classes[0].classFeatures.map((f) => f.name);
      expect(featureNames).toContain('Rage');
      expect(featureNames).toContain('Fast Movement');
    });

    test('all 11 core classes have at least one level-1 feature', () => {
      expect(CORE_CLASSES).toHaveLength(11);

      const race = raceDataToRace('Human');

      for (const classData of CORE_CLASSES) {
        const character = CharacterService.createDefaultCharacter({
          name: `${classData.name} Feature Check`,
          race,
          selectedClass: classData.name,
          abilityScoreMethod: AbilityScoreMethod.PointBuy,
          abilityScores: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
          alignment: Alignment.TrueNeutral,
        });

        const expectedLevel1Features = classData.classFeatures.filter((f) => f.level === 1);
        expect(expectedLevel1Features.length).toBeGreaterThan(0);

        const actualFeatureNames = character.classes.classes[0].classFeatures.map((f) => f.name);
        for (const expected of expectedLevel1Features) {
          expect(actualFeatureNames).toContain(expected.name);
        }
      }
    });
  });

  // =========================================================================
  // 6. Test changing race mid-creation (Elf -> Dwarf)
  // =========================================================================
  describe('6 - Changing race mid-creation: Elf to Dwarf', () => {
    test('switching race correctly updates racial modifiers', () => {
      // Step 1: Create character as Elf
      const elfRace = raceDataToRace('Elf');
      const scores = { str: 12, dex: 14, con: 12, int: 14, wis: 10, cha: 10 };

      let character = CharacterService.createDefaultCharacter({
        name: 'Indecisive Hero',
        race: elfRace,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: scores,
        alignment: Alignment.TrueNeutral,
      });

      // Verify Elf modifiers are applied (DEX+2, INT+2, CON-2)
      expect(character.abilityScores.dex.racial).toBe(2);
      expect(character.abilityScores.int.racial).toBe(2);
      expect(character.abilityScores.con.racial).toBe(-2);
      expect(character.abilityScores.dex.total).toBe(16); // 14 + 2
      expect(character.abilityScores.con.total).toBe(10); // 12 - 2

      // Step 2: "Change" race by re-creating with Dwarf
      const dwarfRace = raceDataToRace('Dwarf');

      character = CharacterService.createDefaultCharacter({
        name: 'Indecisive Hero',
        race: dwarfRace,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: scores,
        alignment: Alignment.TrueNeutral,
      });

      // Verify Elf modifiers are gone and Dwarf modifiers are now applied
      expect(character.abilityScores.dex.racial).toBe(0);
      expect(character.abilityScores.int.racial).toBe(0);
      expect(character.abilityScores.con.racial).toBe(2); // Dwarf CON+2
      expect(character.abilityScores.wis.racial).toBe(2); // Dwarf WIS+2
      expect(character.abilityScores.cha.racial).toBe(-2); // Dwarf CHA-2
    });

    test('totals and modifiers correctly reflect the new race', () => {
      const dwarfRace = raceDataToRace('Dwarf');
      const scores = { str: 12, dex: 14, con: 12, int: 14, wis: 10, cha: 10 };

      const character = CharacterService.createDefaultCharacter({
        name: 'Now a Dwarf',
        race: dwarfRace,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: scores,
        alignment: Alignment.TrueNeutral,
      });

      // CON: 12 base + 2 racial = 14 -> modifier +2
      expect(character.abilityScores.con.total).toBe(14);
      expect(character.abilityScores.con.modifier).toBe(2);

      // WIS: 10 base + 2 racial = 12 -> modifier +1
      expect(character.abilityScores.wis.total).toBe(12);
      expect(character.abilityScores.wis.modifier).toBe(1);

      // CHA: 10 base + (-2) racial = 8 -> modifier -1
      expect(character.abilityScores.cha.total).toBe(8);
      expect(character.abilityScores.cha.modifier).toBe(-1);

      // DEX and INT have no Dwarf racial modifier
      expect(character.abilityScores.dex.total).toBe(14);
      expect(character.abilityScores.int.total).toBe(14);
    });

    test('size updates when switching from Medium race to Small race', () => {
      const elfRace = raceDataToRace('Elf');
      const gnomeRace = raceDataToRace('Gnome');
      const scores = { str: 10, dex: 12, con: 12, int: 12, wis: 10, cha: 12 };

      const elfChar = CharacterService.createDefaultCharacter({
        name: 'Size Test',
        race: elfRace,
        selectedClass: 'Wizard',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: scores,
        alignment: Alignment.TrueNeutral,
      });
      expect(elfChar.info.size).toBe(Size.Medium);

      const gnomeChar = CharacterService.createDefaultCharacter({
        name: 'Size Test',
        race: gnomeRace,
        selectedClass: 'Wizard',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: scores,
        alignment: Alignment.TrueNeutral,
      });
      expect(gnomeChar.info.size).toBe(Size.Small);
    });

    test('switched character still passes full validation', () => {
      const dwarfRace = raceDataToRace('Dwarf');
      const character = CharacterService.createDefaultCharacter({
        name: 'Valid After Switch',
        race: dwarfRace,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: { str: 14, dex: 12, con: 14, int: 10, wis: 12, cha: 8 },
        alignment: Alignment.LawfulNeutral,
      });

      const result = CharacterService.validateCharacter(character);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
  });

  // =========================================================================
  // 7. Test changing class mid-creation
  // =========================================================================
  describe('7 - Changing class mid-creation', () => {
    test('switching from Fighter to Wizard updates class features', () => {
      const race = raceDataToRace('Elf');
      const scores = { str: 8, dex: 14, con: 12, int: 16, wis: 12, cha: 10 };

      // Start as Fighter
      const fighterChar = CharacterService.createDefaultCharacter({
        name: 'Class Switcher',
        race,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: scores,
        alignment: Alignment.TrueNeutral,
      });

      const fighterFeatures = fighterChar.classes.classes[0].classFeatures.map((f) => f.name);
      expect(fighterFeatures).toContain('Bonus Feat');
      expect(fighterChar.classes.classes[0].hitDieSize).toBe(10);

      // Switch to Wizard
      const wizardChar = CharacterService.createDefaultCharacter({
        name: 'Class Switcher',
        race,
        selectedClass: 'Wizard',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: scores,
        alignment: Alignment.TrueNeutral,
      });

      const wizardFeatures = wizardChar.classes.classes[0].classFeatures.map((f) => f.name);
      expect(wizardFeatures).toContain('Arcane Bond');
      expect(wizardFeatures).toContain('Arcane School');
      expect(wizardFeatures).toContain('Cantrips');
      expect(wizardFeatures).toContain('Scribe Scroll');
      expect(wizardFeatures).not.toContain('Bonus Feat');
      expect(wizardChar.classes.classes[0].hitDieSize).toBe(6);
    });

    test('switching class updates BAB and save progressions', () => {
      const race = raceDataToRace('Human');
      const scores = { str: 14, dex: 12, con: 12, int: 10, wis: 14, cha: 12 };

      // Fighter: Full BAB, Good Fort, Poor Ref, Poor Will
      const fighterChar = CharacterService.createDefaultCharacter({
        name: 'Progression Test',
        race,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: scores,
        alignment: Alignment.TrueNeutral,
      });

      expect(fighterChar.classes.classes[0].babProgression).toBe(BABProgression.Full);
      expect(fighterChar.classes.classes[0].fortProgression).toBe(SaveProgression.Good);
      expect(fighterChar.classes.classes[0].willProgression).toBe(SaveProgression.Poor);

      // Cleric: Medium BAB, Good Fort, Poor Ref, Good Will
      const clericChar = CharacterService.createDefaultCharacter({
        name: 'Progression Test',
        race,
        selectedClass: 'Cleric',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: scores,
        alignment: Alignment.TrueNeutral,
      });

      expect(clericChar.classes.classes[0].babProgression).toBe(BABProgression.Medium);
      expect(clericChar.classes.classes[0].fortProgression).toBe(SaveProgression.Good);
      expect(clericChar.classes.classes[0].willProgression).toBe(SaveProgression.Good);
    });

    test('switching class updates skill ranks per level', () => {
      const race = raceDataToRace('Human');
      const scores = { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };

      const fighterChar = CharacterService.createDefaultCharacter({
        name: 'Skill Ranks Test',
        race,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: scores,
        alignment: Alignment.TrueNeutral,
      });
      // Fighter: 2 skill ranks
      expect(fighterChar.classes.classes[0].skillRanks).toBe(2);

      const rogueChar = CharacterService.createDefaultCharacter({
        name: 'Skill Ranks Test',
        race,
        selectedClass: 'Rogue',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: scores,
        alignment: Alignment.TrueNeutral,
      });
      // Rogue: 8 skill ranks
      expect(rogueChar.classes.classes[0].skillRanks).toBe(8);
    });

    test('switched character passes full validation', () => {
      const race = raceDataToRace('Human');
      const character = CharacterService.createDefaultCharacter({
        name: 'Valid Wizard',
        race,
        selectedClass: 'Wizard',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: { str: 8, dex: 14, con: 12, int: 16, wis: 12, cha: 10 },
        alignment: Alignment.TrueNeutral,
      });

      const result = CharacterService.validateCharacter(character);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
  });

  // =========================================================================
  // 8. Verify point buy validation: can't exceed point total
  // =========================================================================
  describe('8 - Point buy validation: cannot exceed point total', () => {
    test('all-18 allocation exceeds 20-point budget', () => {
      const race = raceDataToRace('Human');
      const scores = { str: 18, dex: 18, con: 18, int: 18, wis: 18, cha: 18 };

      const character = CharacterService.createDefaultCharacter({
        name: 'Over Budget',
        race,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: scores,
        alignment: Alignment.TrueNeutral,
      });

      // Total cost = 17 * 6 = 102, far above 20
      const asValidation = AbilityScoreService.validatePointBuy(character.abilityScores, 20);
      expect(asValidation.isValid).toBe(false);
      expect(asValidation.errors.some((e) => e.includes('exceeds'))).toBe(true);

      const vsValidation = ValidationService.validatePointBuy(character.abilityScores, 20);
      expect(vsValidation.isValid).toBe(false);
      expect(vsValidation.errors.some((e) => e.includes('exceeds'))).toBe(true);
    });

    test('15-point budget allocation is rejected against 10-point limit', () => {
      const race = raceDataToRace('Human');
      // Cost: 7 + 5 + 3 + 2 + 0 + (-2) = 15
      const scores = { str: 15, dex: 14, con: 13, int: 12, wis: 10, cha: 8 };

      const character = CharacterService.createDefaultCharacter({
        name: 'Over Small Budget',
        race,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: scores,
        alignment: Alignment.TrueNeutral,
      });

      const validation = AbilityScoreService.validatePointBuy(character.abilityScores, 10);
      expect(validation.isValid).toBe(false);
    });

    test('exact budget allocation is valid', () => {
      const race = raceDataToRace('Human');
      // All 10s: cost = 0 each = 0 total, fits in 20
      const scores = { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };

      const character = CharacterService.createDefaultCharacter({
        name: 'Balanced',
        race,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: scores,
        alignment: Alignment.TrueNeutral,
      });

      const validation = AbilityScoreService.validatePointBuy(character.abilityScores, 20);
      expect(validation.isValid).toBe(true);
      expect(validation.errors).toHaveLength(0);
    });

    test('cost table is monotonically increasing from 7 to 18', () => {
      let prevCost = -Infinity;
      for (let score = 7; score <= 18; score++) {
        const cost = AbilityScoreService.calculatePointCost(score);
        expect(cost).toBeGreaterThan(prevCost);
        prevCost = cost;
      }
    });
  });

  // =========================================================================
  // 9. Verify ability score boundaries
  // =========================================================================
  describe('9 - Ability score boundaries', () => {
    describe('Point buy boundaries: min 7, max 18', () => {
      test('score of 7 is the minimum valid point buy score', () => {
        const race = raceDataToRace('Human');
        const scores = { str: 7, dex: 7, con: 7, int: 7, wis: 7, cha: 7 };

        const character = CharacterService.createDefaultCharacter({
          name: 'All Sevens',
          race,
          selectedClass: 'Fighter',
          abilityScoreMethod: AbilityScoreMethod.PointBuy,
          abilityScores: scores,
          alignment: Alignment.TrueNeutral,
        });

        const validation = ValidationService.validateAbilityScores(
          character.abilityScores,
          AbilityScoreMethod.PointBuy,
        );
        expect(validation.isValid).toBe(true);
      });

      test('score of 18 is the maximum valid point buy score', () => {
        const race = raceDataToRace('Human');
        const scores = { str: 18, dex: 18, con: 18, int: 18, wis: 18, cha: 18 };

        const character = CharacterService.createDefaultCharacter({
          name: 'All Eighteens',
          race,
          selectedClass: 'Fighter',
          abilityScoreMethod: AbilityScoreMethod.PointBuy,
          abilityScores: scores,
          alignment: Alignment.TrueNeutral,
        });

        // Each individual score is valid for point buy range...
        const validation = ValidationService.validateAbilityScores(
          character.abilityScores,
          AbilityScoreMethod.PointBuy,
        );
        expect(validation.isValid).toBe(true);
      });

      test('score below 7 is invalid for point buy', () => {
        const race = raceDataToRace('Human');
        const scores = { str: 6, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };

        const character = CharacterService.createDefaultCharacter({
          name: 'Below Min',
          race,
          selectedClass: 'Fighter',
          abilityScoreMethod: AbilityScoreMethod.PointBuy,
          abilityScores: scores,
          alignment: Alignment.TrueNeutral,
        });

        const validation = ValidationService.validateAbilityScores(
          character.abilityScores,
          AbilityScoreMethod.PointBuy,
        );
        expect(validation.isValid).toBe(false);
        expect(validation.errors.some((e) => e.includes('STR'))).toBe(true);
      });

      test('score above 18 is invalid for point buy', () => {
        const race = raceDataToRace('Human');
        const scores = { str: 19, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };

        const character = CharacterService.createDefaultCharacter({
          name: 'Above Max',
          race,
          selectedClass: 'Fighter',
          abilityScoreMethod: AbilityScoreMethod.PointBuy,
          abilityScores: scores,
          alignment: Alignment.TrueNeutral,
        });

        const validation = ValidationService.validateAbilityScores(
          character.abilityScores,
          AbilityScoreMethod.PointBuy,
        );
        expect(validation.isValid).toBe(false);
        expect(validation.errors.some((e) => e.includes('STR'))).toBe(true);
      });
    });

    describe('Roll boundaries: min 3, max 18', () => {
      test('3d6 rolls are always between 3 and 18', () => {
        for (let i = 0; i < 100; i++) {
          const roll = AbilityScoreService.roll3d6();
          expect(roll.total).toBeGreaterThanOrEqual(3);
          expect(roll.total).toBeLessThanOrEqual(18);
          expect(roll.rolls).toHaveLength(3);
        }
      });

      test('4d6-drop-lowest rolls are always between 3 and 18', () => {
        for (let i = 0; i < 100; i++) {
          const roll = AbilityScoreService.roll4d6DropLowest();
          expect(roll.total).toBeGreaterThanOrEqual(3);
          expect(roll.total).toBeLessThanOrEqual(18);
          expect(roll.rolls).toHaveLength(3);
        }
      });

      test('score of 2 is invalid for 3d6 method', () => {
        const race = raceDataToRace('Human');
        const scores = { str: 2, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };

        const character = CharacterService.createDefaultCharacter({
          name: 'Below Roll Min',
          race,
          selectedClass: 'Fighter',
          abilityScoreMethod: AbilityScoreMethod.Roll3d6,
          abilityScores: scores,
          alignment: Alignment.TrueNeutral,
        });

        const validation = ValidationService.validateAbilityScores(
          character.abilityScores,
          AbilityScoreMethod.Roll3d6,
        );
        expect(validation.isValid).toBe(false);
        expect(validation.errors.some((e) => e.includes('STR'))).toBe(true);
      });

      test('score of 19 is invalid for 4d6 method', () => {
        const race = raceDataToRace('Human');
        const scores = { str: 19, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };

        const character = CharacterService.createDefaultCharacter({
          name: 'Above Roll Max',
          race,
          selectedClass: 'Fighter',
          abilityScoreMethod: AbilityScoreMethod.Roll4d6DropLowest,
          abilityScores: scores,
          alignment: Alignment.TrueNeutral,
        });

        const validation = ValidationService.validateAbilityScores(
          character.abilityScores,
          AbilityScoreMethod.Roll4d6DropLowest,
        );
        expect(validation.isValid).toBe(false);
        expect(validation.errors.some((e) => e.includes('STR'))).toBe(true);
      });

      test('individual dice are always 1-6', () => {
        for (let i = 0; i < 100; i++) {
          const roll3d6 = AbilityScoreService.roll3d6();
          for (const die of roll3d6.rolls) {
            expect(die).toBeGreaterThanOrEqual(1);
            expect(die).toBeLessThanOrEqual(6);
          }

          const roll4d6 = AbilityScoreService.roll4d6DropLowest();
          for (const die of roll4d6.rolls) {
            expect(die).toBeGreaterThanOrEqual(1);
            expect(die).toBeLessThanOrEqual(6);
          }
        }
      });
    });
  });

  // =========================================================================
  // 10. Complete flow produces a character that passes full validation
  // =========================================================================
  describe('10 - Complete end-to-end flows pass full validation', () => {
    test('Dwarf Fighter with point buy passes all validation checks', () => {
      // Step 1: Name
      const name = 'Thorin Oakenshield';
      const nameResult = ValidationService.validateCharacterName(name);
      expect(nameResult.isValid).toBe(true);

      // Step 2: Race
      const race = raceDataToRace('Dwarf');

      // Step 3: Class
      const selectedClass = 'Fighter';
      const raceClassResult = ValidationService.validateRaceClassCombination(race, selectedClass);
      expect(raceClassResult.isValid).toBe(true);

      // Step 4: Ability scores via point buy
      const scores = { str: 16, dex: 12, con: 14, int: 10, wis: 12, cha: 8 };
      const character = CharacterService.createDefaultCharacter({
        name,
        race,
        selectedClass,
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: scores,
        alignment: Alignment.LawfulGood,
        deity: 'Torag',
      });

      // Step 5: Validate ability scores for point buy
      const abilityValidation = ValidationService.validateAbilityScores(
        character.abilityScores,
        AbilityScoreMethod.PointBuy,
      );
      expect(abilityValidation.isValid).toBe(true);

      // Step 6: Validate point buy budget
      const pointBuyValidation = ValidationService.validatePointBuy(
        character.abilityScores,
        25, // High Fantasy
      );
      expect(pointBuyValidation.isValid).toBe(true);

      // Step 7: Full character validation
      const charValidation = CharacterService.validateCharacter(character);
      expect(charValidation.valid).toBe(true);
      expect(charValidation.errors).toHaveLength(0);

      // Verify derived values are sensible
      // Dwarf CON: 14 + 2 = 16, modifier = +3
      expect(character.abilityScores.con.total).toBe(16);
      expect(character.abilityScores.con.modifier).toBe(3);
      // Dwarf WIS: 12 + 2 = 14, modifier = +2
      expect(character.abilityScores.wis.total).toBe(14);
      expect(character.abilityScores.wis.modifier).toBe(2);
      // Dwarf CHA: 8 + (-2) = 6, modifier = -2
      expect(character.abilityScores.cha.total).toBe(6);
      expect(character.abilityScores.cha.modifier).toBe(-2);
    });

    test('Half-Elf Bard with 4d6 drop lowest passes all validation', () => {
      const name = 'Lyra Songweaver';
      const nameResult = ValidationService.validateCharacterName(name);
      expect(nameResult.isValid).toBe(true);

      const race = raceDataToRace('Half-Elf');
      // Apply flexible +2 to CHA
      race.abilityModifiers = { cha: 2 };

      const rolls = AbilityScoreService.rollAllAbilities(AbilityScoreMethod.Roll4d6DropLowest);

      const character = CharacterService.createDefaultCharacter({
        name,
        race,
        selectedClass: 'Bard',
        abilityScoreMethod: AbilityScoreMethod.Roll4d6DropLowest,
        abilityScores: {
          str: rolls.str.total,
          dex: rolls.dex.total,
          con: rolls.con.total,
          int: rolls.int.total,
          wis: rolls.wis.total,
          cha: rolls.cha.total,
        },
        alignment: Alignment.ChaoticGood,
      });

      // Validate ability scores for 4d6 drop lowest method
      const abilityValidation = ValidationService.validateAbilityScores(
        character.abilityScores,
        AbilityScoreMethod.Roll4d6DropLowest,
      );
      expect(abilityValidation.isValid).toBe(true);

      // Validate race/class combo
      const raceClassResult = ValidationService.validateRaceClassCombination(race, 'Bard');
      expect(raceClassResult.isValid).toBe(true);

      // Full character validation
      const charValidation = CharacterService.validateCharacter(character);
      expect(charValidation.valid).toBe(true);
      expect(charValidation.errors).toHaveLength(0);

      // Bard features
      const featureNames = character.classes.classes[0].classFeatures.map((f) => f.name);
      expect(featureNames).toContain('Bardic Knowledge');
      expect(featureNames).toContain('Bardic Performance');
      expect(featureNames).toContain('Inspire Courage +1');

      // Half-Elf flexible CHA +2
      expect(character.abilityScores.cha.racial).toBe(2);
    });

    test('Gnome Sorcerer with 3d6 passes all validation', () => {
      const name = 'Fizwick Sparkletop';
      const race = raceDataToRace('Gnome');

      const rolls = AbilityScoreService.rollAllAbilities(AbilityScoreMethod.Roll3d6);

      const character = CharacterService.createDefaultCharacter({
        name,
        race,
        selectedClass: 'Sorcerer',
        abilityScoreMethod: AbilityScoreMethod.Roll3d6,
        abilityScores: {
          str: rolls.str.total,
          dex: rolls.dex.total,
          con: rolls.con.total,
          int: rolls.int.total,
          wis: rolls.wis.total,
          cha: rolls.cha.total,
        },
        alignment: Alignment.ChaoticNeutral,
      });

      // Gnome: CON+2, CHA+2, STR-2
      expect(character.abilityScores.con.racial).toBe(2);
      expect(character.abilityScores.cha.racial).toBe(2);
      expect(character.abilityScores.str.racial).toBe(-2);

      // Gnome is Small
      expect(character.info.size).toBe(Size.Small);

      // Sorcerer features
      const featureNames = character.classes.classes[0].classFeatures.map((f) => f.name);
      expect(featureNames).toContain('Bloodline');
      expect(featureNames).toContain('Cantrips');
      expect(featureNames).toContain('Eschew Materials');

      // Full validation
      const charValidation = CharacterService.validateCharacter(character);
      expect(charValidation.valid).toBe(true);
      expect(charValidation.errors).toHaveLength(0);
    });

    test('character can round-trip through JSON export/import', () => {
      const race = raceDataToRace('Dwarf');
      const character = CharacterService.createDefaultCharacter({
        name: 'JSON Round Trip',
        race,
        selectedClass: 'Cleric',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: { str: 12, dex: 10, con: 14, int: 10, wis: 16, cha: 8 },
        alignment: Alignment.LawfulGood,
        deity: 'Torag',
      });

      const json = CharacterService.exportToJSON(character);
      const imported = CharacterService.importFromJSON(json);

      expect(imported.info.name).toBe('JSON Round Trip');
      expect(imported.info.race.name).toBe('Dwarf');
      expect(imported.classes.classes[0].name).toBe('Cleric');
      expect(imported.abilityScores.con.racial).toBe(2);
      expect(imported.abilityScores.wis.base).toBe(16);

      const importedValidation = CharacterService.validateCharacter(imported);
      expect(importedValidation.valid).toBe(true);
    });
  });
});
