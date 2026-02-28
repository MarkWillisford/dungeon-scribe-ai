import { CharacterService } from '@/services/CharacterService';
import { AbilityScoreService } from '@/services/AbilityScoreService';
import { ValidationService } from '@/services/ValidationService';
import { CORE_RACES, FLEXIBLE_ABILITY_RACES, getRaceByName } from '@/data/races';
import { CORE_CLASSES, getClassByName } from '@/data/classes';
import { CreateCharacterParams, AbilityScoreMethod } from '@/types/character';
import { Alignment, Size, BABProgression, SaveProgression } from '@/types/base';
import { Race } from '@/types/race';
import { Character } from '@/types';

// ---------------------------------------------------------------------------
// Helpers to convert static RaceData -> the Race interface expected by services
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

// Standard point-buy scores used across several tests
const STANDARD_SCORES = { str: 15, dex: 14, con: 13, int: 12, wis: 10, cha: 8 };

describe('Character CRUD Integration', () => {
  // -----------------------------------------------------------------
  // 1. Create a default character, verify structure and defaults
  // -----------------------------------------------------------------
  describe('1 - Create a default character', () => {
    const race = raceDataToRace('Human');

    const params: CreateCharacterParams = {
      name: 'Alric the Bold',
      race,
      selectedClass: 'Fighter',
      abilityScoreMethod: AbilityScoreMethod.PointBuy,
      abilityScores: STANDARD_SCORES,
      alignment: Alignment.LawfulGood,
    };

    let character: Character;

    beforeAll(() => {
      character = CharacterService.createDefaultCharacter(params);
    });

    test('has a unique id starting with "char_"', () => {
      expect(character.info.id).toMatch(/^char_\d+_[a-z0-9]+$/);
    });

    test('has correct top-level structure keys', () => {
      expect(character).toHaveProperty('info');
      expect(character).toHaveProperty('abilityScores');
      expect(character).toHaveProperty('classes');
      expect(character).toHaveProperty('combatStats');
      expect(character).toHaveProperty('skills');
      expect(character).toHaveProperty('feats');
      expect(character).toHaveProperty('traits');
      expect(character).toHaveProperty('equipment');
      expect(character).toHaveProperty('spellcasting');
      expect(character).toHaveProperty('specialAbilities');
      expect(character).toHaveProperty('conditions');
      expect(character).toHaveProperty('experience');
      expect(character).toHaveProperty('currency');
      expect(character).toHaveProperty('buffs');
      expect(character).toHaveProperty('savedBuffs');
      expect(character).toHaveProperty('schemaVersion');
      expect(character).toHaveProperty('lastUpdated');
    });

    test('defaults empty string fields for optional info', () => {
      expect(character.info.player).toBe('');
      expect(character.info.userId).toBe('');
      expect(character.info.deity).toBe('');
      expect(character.info.background).toBe('');
    });

    test('initialises experience at level 1 values', () => {
      expect(character.experience.current).toBe(0);
      expect(character.experience.nextLevel).toBe(2000);
    });

    test('initialises currency to zero', () => {
      expect(character.currency.gold).toBe(0);
      expect(character.currency.silver).toBe(0);
      expect(character.currency.copper).toBe(0);
      expect(character.currency.platinum).toBe(0);
    });
  });

  // -----------------------------------------------------------------
  // 2. Set basic info (name, alignment), validate passes
  // -----------------------------------------------------------------
  describe('2 - Set basic info and validate', () => {
    test('character with valid name and alignment passes CharacterService validation', () => {
      const race = raceDataToRace('Human');
      const character = CharacterService.createDefaultCharacter({
        name: 'Branwen Stormcloak',
        race,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: STANDARD_SCORES,
        alignment: Alignment.NeutralGood,
      });

      const result = CharacterService.validateCharacter(character);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('name passes ValidationService.validateCharacterName', () => {
      const nameResult = ValidationService.validateCharacterName('Branwen Stormcloak');
      expect(nameResult.isValid).toBe(true);
      expect(nameResult.errors).toHaveLength(0);
    });
  });

  // -----------------------------------------------------------------
  // 3. Apply a race (Dwarf), verify racial modifiers applied correctly
  // -----------------------------------------------------------------
  describe('3 - Apply Dwarf race', () => {
    const dwarfRace = raceDataToRace('Dwarf');
    let character: Character;

    beforeAll(() => {
      character = CharacterService.createDefaultCharacter({
        name: 'Durak Ironbeard',
        race: dwarfRace,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: { str: 14, dex: 12, con: 14, int: 10, wis: 12, cha: 8 },
        alignment: Alignment.LawfulNeutral,
      });
    });

    test('racial modifiers match Dwarf data (CON +2, WIS +2, CHA -2)', () => {
      const dwarfData = getRaceByName('Dwarf')!;

      expect(character.abilityScores.con.racial).toBe(dwarfData.abilityModifiers.constitution);
      expect(character.abilityScores.wis.racial).toBe(dwarfData.abilityModifiers.wisdom);
      expect(character.abilityScores.cha.racial).toBe(dwarfData.abilityModifiers.charisma);
    });

    test('totals reflect base + racial', () => {
      // CON: base 14 + racial 2 = 16
      expect(character.abilityScores.con.total).toBe(16);
      // WIS: base 12 + racial 2 = 14
      expect(character.abilityScores.wis.total).toBe(14);
      // CHA: base 8 + racial -2 = 6
      expect(character.abilityScores.cha.total).toBe(6);
    });

    test('modifiers are derived correctly after racial adjustment', () => {
      // CON 16 -> +3
      expect(character.abilityScores.con.modifier).toBe(3);
      // WIS 14 -> +2
      expect(character.abilityScores.wis.modifier).toBe(2);
      // CHA 6 -> -2
      expect(character.abilityScores.cha.modifier).toBe(-2);
    });

    test('size is Medium for Dwarf', () => {
      expect(character.info.size).toBe(Size.Medium);
    });
  });

  // -----------------------------------------------------------------
  // 4. Apply a class (Fighter level 1), verify class features set
  // -----------------------------------------------------------------
  describe('4 - Apply Fighter class at level 1', () => {
    let character: Character;
    const fighterData = getClassByName('Fighter')!;

    beforeAll(() => {
      const race = raceDataToRace('Human');
      character = CharacterService.createDefaultCharacter({
        name: 'Caelum Brightshield',
        race,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: STANDARD_SCORES,
        alignment: Alignment.LawfulGood,
      });
    });

    test('class entry is Fighter at level 1', () => {
      expect(character.classes.classes).toHaveLength(1);
      expect(character.classes.classes[0].name).toBe('Fighter');
      expect(character.classes.classes[0].level).toBe(1);
    });

    test('hit die matches Fighter (d10)', () => {
      expect(character.classes.classes[0].hitDieSize).toBe(fighterData.hitDie);
      expect(character.classes.classes[0].hitDieSize).toBe(10);
    });

    test('hit die results contain max hit die at level 1', () => {
      expect(character.classes.classes[0].hitDieResults).toEqual([10]);
    });

    test('BAB progression is Full', () => {
      expect(character.classes.classes[0].babProgression).toBe(BABProgression.Full);
    });

    test('save progressions match Fighter', () => {
      expect(character.classes.classes[0].fortProgression).toBe(SaveProgression.Good);
      expect(character.classes.classes[0].refProgression).toBe(SaveProgression.Poor);
      expect(character.classes.classes[0].willProgression).toBe(SaveProgression.Poor);
    });

    test('level 1 class features are present', () => {
      const featureNames = character.classes.classes[0].classFeatures.map((f) => f.name);
      const expectedLevel1 = fighterData.classFeatures
        .filter((f) => f.level === 1)
        .map((f) => f.name);

      expect(expectedLevel1.length).toBeGreaterThan(0);
      for (const name of expectedLevel1) {
        expect(featureNames).toContain(name);
      }
    });

    test('class skills match Fighter data', () => {
      expect(character.classes.classes[0].classSkills).toEqual(fighterData.classSkills);
    });

    test('skill ranks per level match Fighter data', () => {
      expect(character.classes.classes[0].skillRanks).toBe(fighterData.skillRanksPerLevel);
    });

    test('totalLevel is 1', () => {
      expect(character.classes.totalLevel).toBe(1);
    });
  });

  // -----------------------------------------------------------------
  // 5. Use point buy to set ability scores, verify points calculation
  // -----------------------------------------------------------------
  describe('5 - Point buy ability scores', () => {
    test('standard fantasy 20-point buy validates correctly', () => {
      const race = raceDataToRace('Human');
      const scores = { str: 15, dex: 14, con: 13, int: 12, wis: 10, cha: 8 };
      // Cost: 7 + 5 + 3 + 2 + 0 + (-2) = 15  (not 20 -- let us check)

      const character = CharacterService.createDefaultCharacter({
        name: 'Point Buy Hero',
        race,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: scores,
        alignment: Alignment.TrueNeutral,
      });

      // Calculate cost manually from AbilityScoreService
      let totalCost = 0;
      for (const ability of ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const) {
        totalCost += AbilityScoreService.calculatePointCost(scores[ability]);
      }

      // Validate through AbilityScoreService
      const validation = AbilityScoreService.validatePointBuy(character.abilityScores, 20);
      // The point cost we calculated must not exceed the budget
      expect(totalCost).toBeLessThanOrEqual(20);
      // Should have no errors for a valid allocation
      expect(validation.isValid).toBe(true);
      expect(validation.errors).toHaveLength(0);
    });

    test('ValidationService.validatePointBuy agrees with AbilityScoreService', () => {
      const race = raceDataToRace('Human');
      const scores = { str: 16, dex: 14, con: 12, int: 10, wis: 10, cha: 8 };

      const character = CharacterService.createDefaultCharacter({
        name: 'Cross Validation',
        race,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: scores,
        alignment: Alignment.TrueNeutral,
      });

      const asResult = AbilityScoreService.validatePointBuy(character.abilityScores, 20);
      const vsResult = ValidationService.validatePointBuy(character.abilityScores, 20);

      // Both services should agree on validity
      expect(asResult.isValid).toBe(vsResult.isValid);
    });

    test('over-budget allocation is caught as invalid', () => {
      const race = raceDataToRace('Human');
      // All 18s would cost 17*6 = 102 points, way over budget
      const scores = { str: 18, dex: 18, con: 18, int: 18, wis: 18, cha: 18 };

      const character = CharacterService.createDefaultCharacter({
        name: 'Overpowered',
        race,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: scores,
        alignment: Alignment.TrueNeutral,
      });

      const validation = AbilityScoreService.validatePointBuy(character.abilityScores, 20);
      expect(validation.isValid).toBe(false);
      expect(validation.errors.some((e) => e.includes('exceeds'))).toBe(true);
    });

    test('individual point costs match the expected table', () => {
      // Pathfinder point-buy cost table
      const expectedCosts: [number, number][] = [
        [7, -4],
        [8, -2],
        [9, -1],
        [10, 0],
        [11, 1],
        [12, 2],
        [13, 3],
        [14, 5],
        [15, 7],
        [16, 10],
        [17, 13],
        [18, 17],
      ];

      for (const [score, expected] of expectedCosts) {
        expect(AbilityScoreService.calculatePointCost(score)).toBe(expected);
      }
    });
  });

  // -----------------------------------------------------------------
  // 6. Use 4d6-drop-lowest rolling, verify scores are within valid range
  // -----------------------------------------------------------------
  describe('6 - 4d6 drop lowest rolling', () => {
    test('individual roll produces score in 3-18 range', () => {
      for (let i = 0; i < 50; i++) {
        const roll = AbilityScoreService.roll4d6DropLowest();
        expect(roll.total).toBeGreaterThanOrEqual(3);
        expect(roll.total).toBeLessThanOrEqual(18);
        // Only 3 dice are kept
        expect(roll.rolls).toHaveLength(3);
        // Each kept die is 1-6
        for (const die of roll.rolls) {
          expect(die).toBeGreaterThanOrEqual(1);
          expect(die).toBeLessThanOrEqual(6);
        }
        // Total equals sum of kept dice
        expect(roll.total).toBe(roll.rolls.reduce((s, d) => s + d, 0));
      }
    });

    test('rollAllAbilities produces scores for all six abilities', () => {
      const results = AbilityScoreService.rollAllAbilities(AbilityScoreMethod.Roll4d6DropLowest);

      const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
      for (const ability of abilities) {
        expect(results[ability]).toBeDefined();
        expect(results[ability].ability).toBe(ability);
        expect(results[ability].total).toBeGreaterThanOrEqual(3);
        expect(results[ability].total).toBeLessThanOrEqual(18);
      }
    });

    test('ValidationService accepts rolled scores within range', () => {
      const results = AbilityScoreService.rollAllAbilities(AbilityScoreMethod.Roll4d6DropLowest);
      const abilityScores = AbilityScoreService.createAbilityScoresFromRolls(results);

      const validation = ValidationService.validateAbilityScores(
        abilityScores,
        AbilityScoreMethod.Roll4d6DropLowest,
      );

      expect(validation.isValid).toBe(true);
      expect(validation.errors).toHaveLength(0);
    });

    test('a character can be created from rolled scores and passes validation', () => {
      const results = AbilityScoreService.rollAllAbilities(AbilityScoreMethod.Roll4d6DropLowest);
      const race = raceDataToRace('Elf');

      const character = CharacterService.createDefaultCharacter({
        name: 'Rolled Elf',
        race,
        selectedClass: 'Wizard',
        abilityScoreMethod: AbilityScoreMethod.Roll4d6DropLowest,
        abilityScores: {
          str: results.str.total,
          dex: results.dex.total,
          con: results.con.total,
          int: results.int.total,
          wis: results.wis.total,
          cha: results.cha.total,
        },
        alignment: Alignment.ChaoticNeutral,
      });

      const charValidation = CharacterService.validateCharacter(character);
      expect(charValidation.valid).toBe(true);
    });
  });

  // -----------------------------------------------------------------
  // 7. Create a full valid character (name + race + class + abilities), validate
  // -----------------------------------------------------------------
  describe('7 - Full valid character creation and validation', () => {
    let character: Character;

    beforeAll(() => {
      const dwarfRace = raceDataToRace('Dwarf');
      character = CharacterService.createDefaultCharacter({
        name: 'Gimbal Stoneforge',
        race: dwarfRace,
        selectedClass: 'Cleric',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: { str: 12, dex: 10, con: 14, int: 10, wis: 16, cha: 8 },
        alignment: Alignment.LawfulGood,
        deity: 'Torag',
      });
    });

    test('CharacterService.validateCharacter passes with no errors', () => {
      const result = CharacterService.validateCharacter(character);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('ValidationService.validateCharacterName passes', () => {
      const result = ValidationService.validateCharacterName(character.info.name);
      expect(result.isValid).toBe(true);
    });

    test('ValidationService.validateAbilityScores passes for point buy', () => {
      const result = ValidationService.validateAbilityScores(
        character.abilityScores,
        AbilityScoreMethod.PointBuy,
      );
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('ValidationService.validateRaceClassCombination passes', () => {
      const result = ValidationService.validateRaceClassCombination(
        character.info.race,
        character.classes.classes[0].name,
      );
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('can round-trip through JSON export/import', () => {
      const json = CharacterService.exportToJSON(character);
      const imported = CharacterService.importFromJSON(json);

      expect(imported.info.name).toBe('Gimbal Stoneforge');
      expect(imported.info.race.name).toBe('Dwarf');
      expect(imported.classes.classes[0].name).toBe('Cleric');
      expect(imported.abilityScores.wis.base).toBe(16);
    });
  });

  // -----------------------------------------------------------------
  // 8. Validate incomplete character (no name) fails with correct error
  // -----------------------------------------------------------------
  describe('8 - Validate incomplete character (no name)', () => {
    test('empty name fails ValidationService.validateCharacterName', () => {
      const result = ValidationService.validateCharacterName('');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Character name is required');
    });

    test('whitespace-only name fails ValidationService.validateCharacterName', () => {
      const result = ValidationService.validateCharacterName('   ');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Character name is required');
    });

    test('empty name on character fails CharacterService.validateCharacter', () => {
      const race = raceDataToRace('Human');
      const character = CharacterService.createDefaultCharacter({
        name: '',
        race,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: STANDARD_SCORES,
        alignment: Alignment.TrueNeutral,
      });

      // createDefaultCharacter defaults empty name to 'New Character', so
      // explicitly clear it to simulate an incomplete character.
      character.info.name = '';

      const result = CharacterService.validateCharacter(character);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Character name is required');
    });

    test('character without classes fails validation', () => {
      const race = raceDataToRace('Human');
      const character = CharacterService.createDefaultCharacter({
        name: 'No Class',
        race,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: STANDARD_SCORES,
        alignment: Alignment.TrueNeutral,
      });

      character.classes.classes = [];

      const result = CharacterService.validateCharacter(character);
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Character must have at least one class');
    });
  });

  // -----------------------------------------------------------------
  // 9. Update character fields after creation
  // -----------------------------------------------------------------
  describe('9 - Update character fields after creation', () => {
    let character: Character;

    beforeEach(() => {
      const race = raceDataToRace('Elf');
      character = CharacterService.createDefaultCharacter({
        name: 'Elowen Starfall',
        race,
        selectedClass: 'Wizard',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: { str: 8, dex: 14, con: 12, int: 16, wis: 12, cha: 10 },
        alignment: Alignment.TrueNeutral,
      });
    });

    test('can update character name and still pass validation', () => {
      character.info.name = 'Elowen the Wise';

      const charResult = CharacterService.validateCharacter(character);
      expect(charResult.valid).toBe(true);

      const nameResult = ValidationService.validateCharacterName(character.info.name);
      expect(nameResult.isValid).toBe(true);
    });

    test('can update alignment', () => {
      character.info.alignment = Alignment.ChaoticGood;
      expect(character.info.alignment).toBe(Alignment.ChaoticGood);

      const result = CharacterService.validateCharacter(character);
      expect(result.valid).toBe(true);
    });

    test('can update deity', () => {
      character.info.deity = 'Nethys';
      expect(character.info.deity).toBe('Nethys');
    });

    test('can update background fields', () => {
      character.info.gender = 'Female';
      character.info.age = 130;
      character.info.height = '5\'4"';
      character.info.weight = '105 lbs';
      character.info.hair = 'Silver';
      character.info.eyes = 'Violet';

      expect(character.info.gender).toBe('Female');
      expect(character.info.age).toBe(130);
      expect(character.info.hair).toBe('Silver');
    });

    test('can add experience and still pass validation', () => {
      character.experience.current = 1500;

      const result = CharacterService.validateCharacter(character);
      expect(result.valid).toBe(true);
    });

    test('recalculating ability modifiers after manual base change works', () => {
      character.abilityScores.int.base = 18;
      const updated = CharacterService.calculateAbilityModifiers(character.abilityScores);

      // INT: base 18 + racial (Elf +2) = 20 -> mod +5
      expect(updated.int.total).toBe(20);
      expect(updated.int.modifier).toBe(5);
    });

    test('updated character can round-trip through JSON', () => {
      character.info.name = 'Elowen Updated';
      character.info.notes = 'Updated during test';

      const json = CharacterService.exportToJSON(character);
      const imported = CharacterService.importFromJSON(json);

      expect(imported.info.name).toBe('Elowen Updated');
      expect(imported.info.notes).toBe('Updated during test');
    });
  });

  // -----------------------------------------------------------------
  // 10. Verify racial modifiers for Human with flexible ability choice
  // -----------------------------------------------------------------
  describe('10 - Human flexible ability score modifier', () => {
    test('Human is in the FLEXIBLE_ABILITY_RACES list', () => {
      expect(FLEXIBLE_ABILITY_RACES).toContain('Human');
    });

    test('Half-Elf and Half-Orc are also in the flexible list', () => {
      expect(FLEXIBLE_ABILITY_RACES).toContain('Half-Elf');
      expect(FLEXIBLE_ABILITY_RACES).toContain('Half-Orc');
    });

    test('Human RaceData has no fixed ability modifiers', () => {
      const humanData = getRaceByName('Human')!;
      const mods = humanData.abilityModifiers;

      // All modifier keys should be undefined (no fixed bonuses)
      expect(mods.strength).toBeUndefined();
      expect(mods.dexterity).toBeUndefined();
      expect(mods.constitution).toBeUndefined();
      expect(mods.intelligence).toBeUndefined();
      expect(mods.wisdom).toBeUndefined();
      expect(mods.charisma).toBeUndefined();
    });

    test('Human character created without explicit racial mods has zero racial on all scores', () => {
      const humanRace = raceDataToRace('Human');
      const character = CharacterService.createDefaultCharacter({
        name: 'Gareth the Versatile',
        race: humanRace,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: { str: 14, dex: 14, con: 14, int: 10, wis: 10, cha: 10 },
        alignment: Alignment.NeutralGood,
      });

      const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;
      for (const ability of abilities) {
        expect(character.abilityScores[ability].racial).toBe(0);
      }
    });

    test('flexible +2 can be applied manually to any one ability and passes validation', () => {
      const humanRace = raceDataToRace('Human');
      // Simulate the user choosing +2 STR for their Human
      humanRace.abilityModifiers = { str: 2 };

      const character = CharacterService.createDefaultCharacter({
        name: 'Strong Human',
        race: humanRace,
        selectedClass: 'Fighter',
        abilityScoreMethod: AbilityScoreMethod.PointBuy,
        abilityScores: { str: 15, dex: 14, con: 13, int: 12, wis: 10, cha: 8 },
        alignment: Alignment.TrueNeutral,
      });

      expect(character.abilityScores.str.racial).toBe(2);
      expect(character.abilityScores.str.total).toBe(17); // 15 base + 2 racial
      expect(character.abilityScores.str.modifier).toBe(3); // (17 - 10) / 2 = 3

      // All other racials remain 0
      expect(character.abilityScores.dex.racial).toBe(0);
      expect(character.abilityScores.con.racial).toBe(0);
      expect(character.abilityScores.int.racial).toBe(0);
      expect(character.abilityScores.wis.racial).toBe(0);
      expect(character.abilityScores.cha.racial).toBe(0);

      const result = CharacterService.validateCharacter(character);
      expect(result.valid).toBe(true);
    });

    test('each flexible race can apply +2 to different abilities', () => {
      for (const raceName of FLEXIBLE_ABILITY_RACES) {
        const race = raceDataToRace(raceName);
        // Apply +2 to WIS for variety
        race.abilityModifiers = { wis: 2 };

        const character = CharacterService.createDefaultCharacter({
          name: `${raceName} Sage`,
          race,
          selectedClass: 'Cleric',
          abilityScoreMethod: AbilityScoreMethod.PointBuy,
          abilityScores: { str: 10, dex: 10, con: 12, int: 10, wis: 16, cha: 12 },
          alignment: Alignment.NeutralGood,
        });

        expect(character.abilityScores.wis.racial).toBe(2);
        expect(character.abilityScores.wis.total).toBe(18); // 16 + 2
        expect(character.abilityScores.wis.modifier).toBe(4);

        const result = CharacterService.validateCharacter(character);
        expect(result.valid).toBe(true);
      }
    });
  });
});
