import type { Character } from '@/types';
import type { CharacterFeat, FeatDefinition, FeatPrerequisite } from '@/types/feats';
import type { Skills, Skill } from '@/types/skills';
import type { AbilityScores } from '@/types/abilities';
import { GameDataService } from '@/services/GameDataService';
import { InitiatingService } from '@/services/InitiatingService';

export interface PrerequisiteResult {
  met: boolean;
  unmet: FeatPrerequisite[];
  reasons: string[];
}

export class PrerequisiteService {
  /**
   * Check all prerequisites for a feat against a character.
   *
   * Pass `characterFeatInstance` when validating an already-taken feat (e.g. direct-entry).
   * This enables `matchChoiceKey` validation — prereq feats must share the same choice value
   * (e.g. Greater Weapon Focus requires Weapon Focus with the same weapon).
   * When omitted (e.g. browsing available feats), `matchChoiceKey` prereqs fall back to
   * checking that the prereq feat exists at all.
   */
  static async checkPrerequisites(
    character: Character,
    feat: FeatDefinition,
    characterFeatInstance?: CharacterFeat,
  ): Promise<PrerequisiteResult> {
    const unmet: FeatPrerequisite[] = [];
    const reasons: string[] = [];

    for (const prereq of feat.prerequisites) {
      if (!(await this.checkSingle(character, prereq, characterFeatInstance))) {
        unmet.push(prereq);
        reasons.push(await this.describe(prereq, characterFeatInstance));
      }
    }

    return { met: unmet.length === 0, unmet, reasons };
  }

  /**
   * Get all feats a character currently qualifies for (excluding already-taken feats).
   */
  static async getAvailableFeats(
    character: Character,
    allFeats: FeatDefinition[],
  ): Promise<FeatDefinition[]> {
    const currentFeatIds = new Set(character.feats.feats.map((f) => f.featId));
    const results: FeatDefinition[] = [];
    for (const feat of allFeats) {
      const alreadyTaken = currentFeatIds.has(feat.id) && !feat.choices?.length;
      if (!alreadyTaken) {
        const result = await this.checkPrerequisites(character, feat);
        if (result.met) results.push(feat);
      }
    }
    return results;
  }

  /**
   * Check a single prerequisite.
   */
  private static async checkSingle(
    character: Character,
    prereq: FeatPrerequisite,
    characterFeatInstance?: CharacterFeat,
  ): Promise<boolean> {
    switch (prereq.type) {
      case 'ability_score': {
        const keyMap: Record<string, keyof AbilityScores> = {
          STR: 'str',
          DEX: 'dex',
          CON: 'con',
          INT: 'int',
          WIS: 'wis',
          CHA: 'cha',
        };
        const key = keyMap[prereq.ability];
        if (!key) return false;
        return character.abilityScores[key].total >= prereq.minimum;
      }

      case 'bab':
        return (character.classes.baseAttackBonus[0] ?? 0) >= prereq.minimum;

      case 'level':
        if (prereq.class) {
          const cls = character.classes.classes.find(
            (c) => c.name.toLowerCase() === prereq.class!.toLowerCase(),
          );
          return (cls?.level ?? 0) >= prereq.minimum;
        }
        return character.classes.totalLevel >= prereq.minimum;

      case 'feat': {
        const requiredChoiceValue =
          prereq.matchChoiceKey && characterFeatInstance
            ? characterFeatInstance.choices?.[prereq.matchChoiceKey]
            : undefined;
        return character.feats.feats.some(
          (f) =>
            f.featId === prereq.featId &&
            (!prereq.choiceRequirement ||
              f.choices?.[prereq.choiceRequirement.key] === prereq.choiceRequirement.value) &&
            (!requiredChoiceValue || f.choices?.[prereq.matchChoiceKey!] === requiredChoiceValue),
        );
      }

      case 'skill': {
        const skill = this.getSkill(character.skills, prereq.skillId);
        return (skill?.ranks ?? 0) >= prereq.ranks;
      }

      case 'class_feature':
        return character.classes.classes.some((cls) =>
          cls.classFeatures.some((f) => f.name.toLowerCase() === prereq.featureName.toLowerCase()),
        );

      case 'proficiency': {
        // Proficiencies live on static class data, not on the character's ClassEntry
        const profChecks = await Promise.all(
          character.classes.classes.map(async (cls) => {
            const classData = await GameDataService.getClassByName(cls.name);
            return (
              classData?.weaponProficiencies?.some((p) =>
                p.toLowerCase().includes(prereq.proficiency.toLowerCase()),
              ) ||
              classData?.armorProficiencies?.some((p) =>
                p.toLowerCase().includes(prereq.proficiency.toLowerCase()),
              )
            );
          }),
        );
        return profChecks.some(Boolean);
      }

      case 'race':
        return character.info.race.name.toLowerCase() === prereq.raceName.toLowerCase();

      case 'caster_level':
        return character.spellcasting.pools.some((pool) => pool.baseCasterLevel >= prereq.minimum);

      case 'mythic_tier':
        return (character.mythic?.tier ?? 0) >= prereq.minimum;

      case 'initiator_level': {
        const pools = (character as unknown as { initiating?: { pools: Array<{ effectiveInitiatorLevel: number }> } })
          .initiating?.pools ?? [];
        const highestIL = pools.reduce((max, p) => Math.max(max, p.effectiveInitiatorLevel), 0);
        return highestIL >= prereq.minimum;
      }

      case 'maneuver_known': {
        const knownManeuvers = (character as unknown as { initiating?: { knownManeuvers: Array<{ maneuverId: string }> } })
          .initiating?.knownManeuvers ?? [];
        return knownManeuvers.some((m) => m.maneuverId === prereq.maneuverId);
      }

      case 'discipline_access': {
        const initiatingPools = (character as unknown as { initiating?: { pools: Array<Record<string, unknown>> } })
          .initiating?.pools ?? [];
        return initiatingPools.some((pool) => {
          // Snapshot pools only carry { effectiveInitiatorLevel, baseClass } — no discipline
          // fields. Guard before calling getEffectiveDisciplines which requires a full pool.
          if (!('accessibleDisciplines' in pool)) return false;
          return InitiatingService.getEffectiveDisciplines(
            pool as unknown as Parameters<typeof InitiatingService.getEffectiveDisciplines>[0],
          ).includes(prereq.disciplineId);
        });
      }

      case 'special':
        // Can't auto-check; assume met (DM can override)
        return true;

      default:
        return false;
    }
  }

  /**
   * Get a skill by key from the Skills object.
   */
  private static getSkill(skills: Skills, skillId: string): Skill | null {
    const skill = (skills as unknown as Record<string, unknown>)[skillId];
    if (skill && typeof skill === 'object' && 'ranks' in skill) {
      return skill as Skill;
    }
    return null;
  }

  /**
   * Describe a prerequisite in human-readable text.
   */
  private static async describe(
    prereq: FeatPrerequisite,
    characterFeatInstance?: CharacterFeat,
  ): Promise<string> {
    switch (prereq.type) {
      case 'ability_score':
        return `${prereq.ability} ${prereq.minimum}+`;
      case 'bab':
        return `BAB +${prereq.minimum}`;
      case 'level':
        return prereq.class
          ? `${prereq.class} level ${prereq.minimum}`
          : `Character level ${prereq.minimum}`;
      case 'feat': {
        const featDef = await GameDataService.getFeatById(prereq.featId);
        const featName = featDef?.name ?? prereq.featId;
        if (prereq.choiceRequirement) {
          return `Feat: ${featName} (${prereq.choiceRequirement.key}: ${prereq.choiceRequirement.value})`;
        }
        if (prereq.matchChoiceKey) {
          const resolvedValue = characterFeatInstance?.choices?.[prereq.matchChoiceKey];
          return resolvedValue
            ? `Feat: ${featName} (${prereq.matchChoiceKey}: ${resolvedValue})`
            : `Feat: ${featName} (same ${prereq.matchChoiceKey})`;
        }
        return `Feat: ${featName}`;
      }
      case 'skill':
        return `${prereq.skillId} ${prereq.ranks} ranks`;
      case 'class_feature':
        return `Class feature: ${prereq.featureName}`;
      case 'proficiency':
        return `Proficiency: ${prereq.proficiency}`;
      case 'race':
        return `Race: ${prereq.raceName}`;
      case 'caster_level':
        return `Caster level ${prereq.minimum}`;
      case 'mythic_tier':
        return `Mythic Tier ${prereq.minimum}`;
      case 'initiator_level':
        return `Initiator level ${prereq.minimum}`;
      case 'maneuver_known':
        return `Maneuver known: ${prereq.maneuverId}`;
      case 'discipline_access':
        return `Discipline access: ${prereq.disciplineId}`;
      case 'evolution':
        return `Evolution: ${prereq.evolutionId}`;
      case 'special':
        return prereq.description;
      default:
        return `Unknown prerequisite: ${(prereq as { type: string }).type}`;
    }
  }
}
