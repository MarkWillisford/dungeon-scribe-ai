import { Character } from '@/types';
import {
  CreateCharacterParams,
  CharacterValidationResult,
  AbilityScoreMethod,
} from '@/types/character';
import { EncumbranceVariant } from '@/types/equipment';
import { AbilityScores } from '@/types/abilities';
import { Race } from '@/types/race';
import { BABProgression, SaveProgression } from '@/types/base';
import { ClassFeature } from '@/types/classes';
import { AbilityScoreService } from '@services/AbilityScoreService';
import { getClassByName } from '@data/classes';

export class CharacterService {
  private static readonly CURRENT_SCHEMA_VERSION = '1.1.0';

  /**
   * Creates a default character from creation parameters
   */
  static createDefaultCharacter(params: CreateCharacterParams): Character {
    const character: Character = {
      info: {
        id: this.generateCharacterId(),
        name: params.name || 'New Character',
        player: '', // Will be set by user management later
        userId: '',
        firebaseId: undefined,
        race: params.race,
        size: params.race.sizeMod,
        alignment: params.alignment,
        deity: params.deity || '',
        gender: '',
        age: 0,
        height: '',
        weight: '',
        hair: '',
        eyes: '',
        skin: '',
        homeland: '',
        campaign: '',
        portrait: '',
        background: '',
        notes: '',
      },

      abilityScores: this.createAbilityScoresFromParams(params),

      classes: {
        classes: [
          {
            name: params.selectedClass,
            level: 1,
            hitDieSize: this.getClassHitDie(params.selectedClass),
            hitDieResults: [this.getClassHitDie(params.selectedClass)], // Max HP at level 1
            skillRanks: this.getClassSkillRanks(params.selectedClass),
            classSkills: this.getClassSkills(params.selectedClass),
            babProgression: this.getClassBABProgression(params.selectedClass),
            fortProgression: this.getClassFortProgression(params.selectedClass),
            refProgression: this.getClassRefProgression(params.selectedClass),
            willProgression: this.getClassWillProgression(params.selectedClass),
            classFeatures: this.getLevel1ClassFeatures(params.selectedClass),
          },
        ],
        totalLevel: 1,
        baseAttackBonus: [0], // Will be calculated
        baseFortSave: 0, // Will be calculated
        baseRefSave: 0, // Will be calculated
        baseWillSave: 0, // Will be calculated
        favoredClassBonuses: [],
      },

      combatStats: this.createDefaultCombatStats(),
      skills: this.createDefaultSkills(),
      feats: { feats: [], totalFeats: 0, bonusFeats: 0 },
      traits: { traits: [] },
      equipment: this.createDefaultEquipment(),
      spellcasting: {
        spellcastingClasses: [],
        preparedSpells: [],
        knownSpells: [],
        spellbooks: [],
      },
      specialAbilities: { specialAbilities: [] },
      conditions: { activeConditions: [] },
      experience: { current: 0, nextLevel: 2000 },
      currency: { platinum: 0, gold: 0, silver: 0, copper: 0, totalGP: 0 },

      buffs: [],
      savedBuffs: [],

      schemaVersion: this.CURRENT_SCHEMA_VERSION,
      lastUpdated: new Date(),
    };

    // Apply racial modifiers
    return this.applyRacialModifiers(character);
  }

  /**
   * Validates a complete character
   */
  static validateCharacter(character: Character): CharacterValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    try {
      // Basic info validation
      if (!character.info?.name?.trim()) {
        errors.push('Character name is required');
      }

      if (character.info?.name?.length > 100) {
        warnings.push('Character name is very long');
      }

      // Ability score validation
      if (character.abilityScores) {
        const abilityValidation = this.validateAbilityScores(character.abilityScores);
        errors.push(...abilityValidation.errors);
        warnings.push(...abilityValidation.warnings);
      } else {
        errors.push('Character missing ability scores');
      }

      // Class validation
      if (!character.classes?.classes || character.classes.classes.length === 0) {
        errors.push('Character must have at least one class');
      } else {
        // Level consistency
        const calculatedLevel = character.classes.classes.reduce((sum, cls) => sum + cls.level, 0);
        if (calculatedLevel !== character.classes.totalLevel) {
          errors.push(
            `Total level mismatch: ${character.classes.totalLevel} vs calculated ${calculatedLevel}`,
          );
        }
      }

      // Schema version check
      if (character.schemaVersion !== this.CURRENT_SCHEMA_VERSION) {
        warnings.push(`Character uses old schema version: ${character.schemaVersion}`);
      }
    } catch (error) {
      errors.push(
        `Character validation failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }

    return {
      valid: errors.length === 0,
      errors,
      warnings,
    };
  }

  /**
   * Calculates and updates all derived ability modifiers
   */
  static calculateAbilityModifiers(scores: AbilityScores): AbilityScores {
    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;

    for (const ability of abilities) {
      const score = scores[ability];

      // Calculate total score (base + racial + bonuses)
      score.total = score.base + score.racial + score.inherent;

      // Add typed bonuses (only highest of each type)
      Object.entries(score.bonuses).forEach(([type, bonuses]) => {
        if (type === 'untyped') {
          // Untyped bonuses stack
          score.total += bonuses.reduce(
            (sum, bonus) => (bonus.active !== false ? sum + bonus.value : sum),
            0,
          );
        } else {
          // Typed bonuses - only highest applies
          const highestBonus = bonuses
            .filter((bonus) => bonus.active !== false)
            .reduce((max, bonus) => Math.max(max, bonus.value), 0);
          score.total += highestBonus;
        }
      });

      // Calculate temporary total (including damage/drain)
      score.tempTotal = Math.max(0, score.total - score.damage - score.drain);

      // Calculate modifiers
      score.modifier = AbilityScoreService.calculateAbilityModifier(score.total);
      score.tempModifier = AbilityScoreService.calculateAbilityModifier(score.tempTotal);
    }

    return scores;
  }

  /**
   * Applies racial modifiers to a character
   */
  static applyRacialModifiers(character: Character): Character {
    const race: Race = character.info.race;

    // Apply ability score modifiers
    if (race.abilityModifiers.str) {
      character.abilityScores.str.racial = race.abilityModifiers.str;
    }
    if (race.abilityModifiers.dex) {
      character.abilityScores.dex.racial = race.abilityModifiers.dex;
    }
    if (race.abilityModifiers.con) {
      character.abilityScores.con.racial = race.abilityModifiers.con;
    }
    if (race.abilityModifiers.int) {
      character.abilityScores.int.racial = race.abilityModifiers.int;
    }
    if (race.abilityModifiers.wis) {
      character.abilityScores.wis.racial = race.abilityModifiers.wis;
    }
    if (race.abilityModifiers.cha) {
      character.abilityScores.cha.racial = race.abilityModifiers.cha;
    }

    // Recalculate ability modifiers
    character.abilityScores = this.calculateAbilityModifiers(character.abilityScores);

    // Apply size modifiers
    character.info.size = race.sizeMod;

    return character;
  }

  /**
   * Generates a unique character ID
   */
  static generateCharacterId(): string {
    return `char_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Exports character to JSON string
   */
  static exportToJSON(character: Character): string {
    return JSON.stringify(character, null, 2);
  }

  /**
   * Imports character from JSON string
   */
  static importFromJSON(json: string): Character {
    try {
      const character = JSON.parse(json) as Character;

      // Validate imported character
      const validation = this.validateCharacter(character);
      if (!validation.valid) {
        throw new Error(`Invalid character data: ${validation.errors.join(', ')}`);
      }

      // Update schema version if needed
      if (character.schemaVersion !== this.CURRENT_SCHEMA_VERSION) {
        character.schemaVersion = this.CURRENT_SCHEMA_VERSION;
        character.lastUpdated = new Date();
      }

      return character;
    } catch (error) {
      throw new Error(
        `Failed to import character: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }

  // Private helper methods

  private static createAbilityScoresFromParams(params: CreateCharacterParams): AbilityScores {
    const scores: AbilityScores = {
      str: AbilityScoreService.createDefaultAbilityScore(params.abilityScores.str),
      dex: AbilityScoreService.createDefaultAbilityScore(params.abilityScores.dex),
      con: AbilityScoreService.createDefaultAbilityScore(params.abilityScores.con),
      int: AbilityScoreService.createDefaultAbilityScore(params.abilityScores.int),
      wis: AbilityScoreService.createDefaultAbilityScore(params.abilityScores.wis),
      cha: AbilityScoreService.createDefaultAbilityScore(params.abilityScores.cha),
    };

    return this.calculateAbilityModifiers(scores);
  }

  private static validateAbilityScores(scores: AbilityScores): CharacterValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];
    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;

    for (const ability of abilities) {
      const score = scores[ability];

      if (score.base < 1 || score.base > 25) {
        errors.push(
          `${ability.toUpperCase()} base score ${score.base} is outside valid range (1-25)`,
        );
      }

      if (score.tempTotal <= 0 && ability === 'con') {
        errors.push('Constitution cannot be reduced to 0 or below');
      }

      if (score.tempTotal === 0 && ['str', 'dex', 'int', 'wis', 'cha'].includes(ability)) {
        warnings.push(`${ability.toUpperCase()} reduced to 0 - character is severely impaired`);
      }
    }

    return { valid: errors.length === 0, errors, warnings };
  }

  private static createDefaultCombatStats() {
    return {
      hitPoints: {
        base: 0,
        constitution: 0,
        favoredClass: 0,
        other: 0,
        current: 0,
        temporary: 0,
        nonlethal: 0,
      },
      armorClass: {
        base: 10,
        armor: 0,
        shield: 0,
        dexterity: 0,
        size: 0,
        natural: 0,
        deflection: 0,
        dodge: 0,
        misc: 0,
        total: 10,
        touch: 10,
        flatFooted: 10,
      },
      combatManeuver: {
        bonus: {
          baseAttack: 0,
          strengthMod: 0,
          sizeMod: 0,
          miscMods: [],
          total: 0,
        },
        defense: {
          baseValue: 10,
          baseAttack: 0,
          strengthMod: 0,
          dexterityMod: 0,
          sizeMod: 0,
          armorBonus: 0,
          shieldBonus: 0,
          naturalArmorBonus: 0,
          deflectionBonus: 0,
          dodgeBonus: 0,
          miscMods: [],
          total: 10,
          flatFooted: 10,
        },
      },
      initiative: { dexterity: 0, misc: 0, total: 0 },
      savingThrows: {
        fortitude: { base: 0, ability: 0, magic: 0, misc: 0, temporary: 0, total: 0 },
        reflex: { base: 0, ability: 0, magic: 0, misc: 0, temporary: 0, total: 0 },
        will: { base: 0, ability: 0, magic: 0, misc: 0, temporary: 0, total: 0 },
      },
      movement: {
        base: 30,
        armor: 0,
        fly: 0,
        swim: 0,
        climb: 0,
        burrow: 0,
        current: 30,
      },
      attackBonuses: {
        baseAttack: [0],
        strengthMod: 0,
        sizeMod: 0,
        abilityModifiers: { melee: 'STR', ranged: 'DEX', thrown: 'STR' },
        miscMods: { melee: [], ranged: [], thrown: [], all: [] },
        meleeTotal: 0,
        rangedTotal: 0,
        allAttacks: { melee: [0], ranged: [0] },
      },
    };
  }

  private static createDefaultSkills() {
    const createSkill = (ability: string, isClassSkill = false) => ({
      isClassSkill,
      ranks: 0,
      ability,
      abilityMod: 0,
      classSkillBonus: 0,
      racial: 0,
      trait: 0,
      item: 0,
      misc: 0,
      armorPenalty: 0,
      total: 0,
    });

    return {
      acrobatics: createSkill('dex'),
      appraise: createSkill('int'),
      bluff: createSkill('cha'),
      climb: createSkill('str'),
      craft: [],
      diplomacy: createSkill('cha'),
      disableDevice: createSkill('dex'),
      disguise: createSkill('cha'),
      escapeArtist: createSkill('dex'),
      fly: createSkill('dex'),
      handleAnimal: createSkill('cha'),
      heal: createSkill('wis'),
      intimidate: createSkill('cha'),
      knowledgeArcana: createSkill('int'),
      knowledgeDungeoneering: createSkill('int'),
      knowledgeEngineering: createSkill('int'),
      knowledgeGeography: createSkill('int'),
      knowledgeHistory: createSkill('int'),
      knowledgeLocal: createSkill('int'),
      knowledgeNature: createSkill('int'),
      knowledgeNobility: createSkill('int'),
      knowledgePlanes: createSkill('int'),
      knowledgeReligion: createSkill('int'),
      linguistics: createSkill('int'),
      perception: createSkill('wis'),
      perform: [],
      profession: [],
      ride: createSkill('dex'),
      senseMotive: createSkill('wis'),
      sleightOfHand: createSkill('dex'),
      spellcraft: createSkill('int'),
      stealth: createSkill('dex'),
      survival: createSkill('wis'),
      swim: createSkill('str'),
      useMagicDevice: createSkill('cha'),
      totalRanks: 0,
    };
  }

  private static createDefaultEquipment() {
    return {
      weapons: [],
      armor: [],
      shields: [],
      magicItems: [],
      gear: [],
      equippedSlots: new Map(),
      encumbranceSettings: {
        enabled: false,
        variant: EncumbranceVariant.CORE_RULES,
      },
      totalWeight: 0,
      lightLoad: 0,
      mediumLoad: 0,
      heavyLoad: 0,
      currentLoad: 'Light',
      acPenalty: 0,
      maxDexBonus: 99,
      spellFailure: 0,
    };
  }

  private static getClassHitDie(className: string): number {
    const classData = getClassByName(className);
    if (classData) {
      return classData.hitDie;
    }
    // Fallback for unknown classes
    return 8;
  }

  private static getClassSkillRanks(className: string): number {
    const classData = getClassByName(className);
    if (classData) {
      return classData.skillRanksPerLevel;
    }
    return 2;
  }

  private static getClassSkills(className: string): string[] {
    const classData = getClassByName(className);
    if (classData) {
      return classData.classSkills;
    }
    return [];
  }

  private static getClassBABProgression(className: string): BABProgression {
    const classData = getClassByName(className);
    if (classData) {
      return classData.babProgression;
    }
    return BABProgression.Medium;
  }

  private static getClassFortProgression(className: string): SaveProgression {
    const classData = getClassByName(className);
    if (classData) {
      return classData.saves.fortitude;
    }
    return SaveProgression.Poor;
  }

  private static getClassRefProgression(className: string): SaveProgression {
    const classData = getClassByName(className);
    if (classData) {
      return classData.saves.reflex;
    }
    return SaveProgression.Poor;
  }

  private static getClassWillProgression(className: string): SaveProgression {
    const classData = getClassByName(className);
    if (classData) {
      return classData.saves.will;
    }
    return SaveProgression.Poor;
  }

  private static getLevel1ClassFeatures(className: string): ClassFeature[] {
    const classData = getClassByName(className);
    if (classData) {
      return classData.classFeatures
        .filter((feature) => feature.level === 1)
        .map((feature) => ({
          name: feature.name,
          description: feature.description ?? '',
          level: feature.level,
          effects: [],
        }));
    }
    return [];
  }
}
