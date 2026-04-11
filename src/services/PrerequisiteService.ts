import type { Character } from '@/types';
import type { CharacterFeat, FeatDefinition, FeatPrerequisite } from '@/types/feats';
import type { Skills, Skill } from '@/types/skills';
import type { AbilityScores } from '@/types/abilities';
import { getClassByName } from '@/data/classes';
import { getFeatById } from '@/data/feats';

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
  static checkPrerequisites(
    character: Character,
    feat: FeatDefinition,
    characterFeatInstance?: CharacterFeat,
  ): PrerequisiteResult {
    const unmet: FeatPrerequisite[] = [];
    const reasons: string[] = [];

    for (const prereq of feat.prerequisites) {
      if (!this.checkSingle(character, prereq, characterFeatInstance)) {
        unmet.push(prereq);
        reasons.push(this.describe(prereq, characterFeatInstance));
      }
    }

    return { met: unmet.length === 0, unmet, reasons };
  }

  /**
   * Get all feats a character currently qualifies for (excluding already-taken feats).
   */
  static getAvailableFeats(character: Character, allFeats: FeatDefinition[]): FeatDefinition[] {
    const currentFeatIds = new Set(character.feats.feats.map((f) => f.featId));
    return allFeats.filter((feat) => {
      // Choice-based feats (e.g. Weapon Focus) can be taken multiple times with different choices
      const alreadyTaken = currentFeatIds.has(feat.id) && !feat.choices?.length;
      return !alreadyTaken && this.checkPrerequisites(character, feat).met;
    });
  }

  /**
   * Check a single prerequisite.
   */
  private static checkSingle(
    character: Character,
    prereq: FeatPrerequisite,
    characterFeatInstance?: CharacterFeat,
  ): boolean {
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

      case 'proficiency':
        // Proficiencies live on static class data, not on the character's ClassEntry
        return character.classes.classes.some((cls) => {
          const classData = getClassByName(cls.name);
          return (
            classData?.weaponProficiencies?.some((p) =>
              p.toLowerCase().includes(prereq.proficiency.toLowerCase()),
            ) ||
            classData?.armorProficiencies?.some((p) =>
              p.toLowerCase().includes(prereq.proficiency.toLowerCase()),
            )
          );
        });

      case 'race':
        return character.info.race.name.toLowerCase() === prereq.raceName.toLowerCase();

      case 'caster_level':
        return character.spellcasting.pools.some((pool) => pool.baseCasterLevel >= prereq.minimum);

      case 'mythic_tier':
        return (character.mythic?.tier ?? 0) >= prereq.minimum;

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
  private static describe(prereq: FeatPrerequisite, characterFeatInstance?: CharacterFeat): string {
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
        const featName = getFeatById(prereq.featId)?.name ?? prereq.featId;
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
      case 'evolution':
        return `Evolution: ${prereq.evolutionId}`;
      case 'special':
        return prereq.description;
      case 'evolution':
        return `Evolution: ${prereq.evolutionId}`;
    }
  }
}
