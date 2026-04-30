import type { Character } from '@/types';
import { BonusType, type Bonus, type Effect } from '@/types/base';
import type { AbilityScores } from '@/types/abilities';
import { Size, SaveProgression } from '@/types/base';
import { FormulaService, type FormulaContext } from './FormulaService';
import { FeatRegistryService } from './FeatRegistryService';

// ---- Resolved Effect (after formula evaluation) ----

export interface ResolvedEffect {
  target: string;
  bonusType: BonusType;
  value: number;
  source: string;
}

// ---- Stat Breakdown (for UI tooltips) ----

export interface StatBreakdown {
  base: number;
  bonuses: { type: BonusType; value: number; source: string; stacked: boolean }[];
  total: number;
}

// ---- Stacked Result ----

interface StackedResult {
  total: number;
  contributions: ResolvedEffect[];
}

// ---- Size Modifier Tables ----

const SIZE_AC_ATTACK: Record<string, number> = {
  [Size.Fine]: 8,
  [Size.Diminutive]: 4,
  [Size.Tiny]: 2,
  [Size.Small]: 1,
  [Size.Medium]: 0,
  [Size.Large]: -1,
  [Size.Huge]: -2,
  [Size.Gargantuan]: -4,
  [Size.Colossal]: -8,
};

const SIZE_CMB_CMD: Record<string, number> = {
  [Size.Fine]: -8,
  [Size.Diminutive]: -4,
  [Size.Tiny]: -2,
  [Size.Small]: -1,
  [Size.Medium]: 0,
  [Size.Large]: 1,
  [Size.Huge]: 2,
  [Size.Gargantuan]: 4,
  [Size.Colossal]: 8,
};

export class ModifierPipelineService {
  /**
   * Recalculate ALL derived stats on a character.
   * Call this whenever anything changes.
   * Returns a new Character with all computed fields updated.
   * Pure function — no side effects.
   */
  static recalculate(character: Character): Character {
    const c = JSON.parse(JSON.stringify(character)) as Character;

    // Reconstitute Map after deep clone
    if (!(c.equipment.equippedSlots instanceof Map)) {
      c.equipment.equippedSlots = new Map(
        Object.entries(c.equipment.equippedSlots || {}),
      ) as Character['equipment']['equippedSlots'];
    }

    // Phase 1: Collect all active effects from every source
    const allEffects = this.collectAllEffects(c);

    // Phase 2: Build formula context from base ability scores
    const context = this.buildBaseContext(c);

    // Phase 3: Resolve formulas to numbers
    const resolved = this.resolveEffects(allEffects, context);

    // Phase 4: Apply stacking rules per target
    const stacked = this.applyStackingRules(resolved);

    // Phase 5: Calculate final stats in dependency order
    this.applyAbilityScores(c, stacked);
    this.applySavingThrows(c, stacked);
    this.applyArmorClass(c, stacked);
    this.applyInitiative(c, stacked);
    this.applyAttackBonuses(c, stacked);
    this.applyCombatManeuvers(c, stacked);
    this.applyHitPoints(c, stacked);
    this.applySkills(c, stacked);
    this.applyMovement(c, stacked);

    return c;
  }

  /**
   * Get a detailed breakdown of all bonuses contributing to a specific stat.
   */
  static getBreakdown(character: Character, target: string): StatBreakdown {
    const allEffects = this.collectAllEffects(character);
    const context = this.buildBaseContext(character);
    const resolved = this.resolveEffects(allEffects, context).filter((e) => e.target === target);

    // Group by bonus type and apply stacking
    const byType = new Map<BonusType, ResolvedEffect[]>();
    for (const e of resolved) {
      const list = byType.get(e.bonusType) ?? [];
      list.push(e);
      byType.set(e.bonusType, list);
    }

    const bonuses: StatBreakdown['bonuses'] = [];
    let total = 0;

    for (const [bonusType, effects] of byType) {
      if (bonusType === BonusType.DODGE || bonusType === BonusType.UNTYPED) {
        for (const e of effects) {
          total += e.value;
          bonuses.push({ type: bonusType, value: e.value, source: e.source, stacked: true });
        }
      } else {
        const best = effects.reduce((max, e) => (e.value > max.value ? e : max), effects[0]);
        total += best.value;
        for (const e of effects) {
          bonuses.push({
            type: bonusType,
            value: e.value,
            source: e.source,
            stacked: e === best,
          });
        }
      }
    }

    return { base: 0, bonuses, total };
  }

  // ============================================================
  // Phase 1: Effect Collection
  // ============================================================

  private static collectAllEffects(character: Character): Effect[] {
    const effects: Effect[] = [];

    // 1. Racial traits
    for (const trait of character.info.race.traits) {
      for (const effect of trait.effects) {
        effects.push(effect);
      }
    }

    // 2. Class features
    for (const cls of character.classes.classes) {
      for (const feature of cls.classFeatures) {
        for (const effect of feature.effects) {
          effects.push(effect);
        }
      }
    }

    // 3. Feats (only active toggle feats; passive and conditional always included)
    for (const charFeat of character.feats.feats) {
      const featDef = FeatRegistryService.getFeat(charFeat.featId);
      if (!featDef) continue;

      if (featDef.activationMode === 'toggle' && !charFeat.active) {
        continue;
      }

      for (const effect of featDef.effects) {
        // Substitute choice placeholders into target and source
        let target = effect.target;
        let source = effect.source;
        for (const [key, val] of Object.entries(charFeat.choices)) {
          target = target.replace(`{${key}}`, val) as typeof effect.target;
          source = source.replace(`{${key}}`, val);
        }

        // For toggle feats, check individual effect activation too
        if (effect.activation?.type === 'toggle' && !charFeat.active) {
          continue;
        }

        // Override activation.active with charFeat.active so the pipeline respects toggle state
        const activation = effect.activation
          ? { ...effect.activation, active: charFeat.active }
          : undefined;
        effects.push({ ...effect, target, source, activation });
      }
    }

    // 4. Equipment (equipped items)
    effects.push(...this.collectEquipmentEffects(character));

    // 5. Active buffs
    effects.push(...this.collectBuffEffects(character));

    // 6. Conditions
    for (const condition of character.conditions.activeConditions) {
      for (const effect of condition.effects) {
        effects.push(effect);
      }
    }

    // 7. Character traits — effects resolved via trait registry (future)
    // CharacterTrait stores traitId; effects will be looked up from TraitRegistryService

    return effects;
  }

  /**
   * Convert equipment into Effects for the pipeline.
   */
  private static collectEquipmentEffects(character: Character): Effect[] {
    const effects: Effect[] = [];

    // Equipped armor → AC bonus
    for (const armor of character.equipment.armor.filter((a) => a.equipped)) {
      const totalAc = armor.acBonus + armor.enhancement;
      if (totalAc > 0) {
        effects.push({
          type: 'bonus',
          bonusType: BonusType.ARMOR,
          target: 'ac.armor',
          value: totalAc,
          source: armor.name,
        });
      }
    }

    // Equipped shields → AC bonus
    for (const shield of character.equipment.shields.filter((s) => s.equipped)) {
      const totalAc = shield.acBonus + shield.enhancement;
      if (totalAc > 0) {
        effects.push({
          type: 'bonus',
          bonusType: BonusType.SHIELD,
          target: 'ac.shield',
          value: totalAc,
          source: shield.name,
        });
      }
    }

    // Equipped weapons with enhancement bonuses → attack bonus
    for (const weapon of character.equipment.weapons.filter((w) => w.equipped)) {
      if (weapon.enhancement > 0) {
        const target = weapon.isRanged ? 'attack.ranged' : 'attack.melee';
        effects.push({
          type: 'bonus',
          bonusType: BonusType.ENHANCEMENT,
          target,
          value: weapon.enhancement,
          source: weapon.name,
        });
      }
      if (weapon.masterwork && weapon.enhancement === 0) {
        const target = weapon.isRanged ? 'attack.ranged' : 'attack.melee';
        effects.push({
          type: 'bonus',
          bonusType: BonusType.ENHANCEMENT,
          target,
          value: 1,
          source: `${weapon.name} (masterwork)`,
        });
      }
    }

    // Magic items added via the direct-entry editor — effects snapshotted at pick time.
    for (const item of character.editorEquipment ?? []) {
      if (!item.slot || !item.effects?.length) continue;
      for (const effect of item.effects) {
        effects.push({ ...effect, source: effect.source || item.name });
      }
    }

    return effects;
  }

  /**
   * Collect active buff effects directly into the pipeline.
   * Buffs now carry Effect[] natively — no conversion mapping needed.
   */
  private static collectBuffEffects(character: Character): Effect[] {
    const effects: Effect[] = [];
    for (const buff of character.buffs) {
      if (!buff.isActive) continue;
      for (const effect of buff.effects) {
        effects.push({ ...effect, source: effect.source || buff.name });
      }
    }
    return effects;
  }

  // ============================================================
  // Phase 2: Build Context
  // ============================================================

  private static buildBaseContext(character: Character): FormulaContext {
    return FormulaService.buildContext(character);
  }

  // ============================================================
  // Phase 3: Resolve Formulas
  // ============================================================

  private static resolveEffects(effects: Effect[], context: FormulaContext): ResolvedEffect[] {
    const resolved: ResolvedEffect[] = [];

    for (const effect of effects) {
      // Skip inactive effects
      if (effect.activation && !effect.activation.active) continue;
      if (effect.duration && effect.duration.remaining <= 0 && effect.duration.type !== 'permanent')
        continue;

      try {
        const value = FormulaService.resolveValue(effect.value, context);
        resolved.push({
          target: effect.target,
          bonusType: (effect.bonusType as BonusType) ?? BonusType.UNTYPED,
          value,
          source: effect.source,
        });
      } catch {
        // Skip effects with invalid formulas rather than crashing
      }
    }

    return resolved;
  }

  // ============================================================
  // Phase 4: Stacking Rules
  // ============================================================

  private static applyStackingRules(effects: ResolvedEffect[]): Map<string, StackedResult> {
    const byTarget = new Map<string, ResolvedEffect[]>();
    for (const effect of effects) {
      const list = byTarget.get(effect.target) ?? [];
      list.push(effect);
      byTarget.set(effect.target, list);
    }

    const result = new Map<string, StackedResult>();

    for (const [target, targetEffects] of byTarget) {
      const byType = new Map<BonusType, ResolvedEffect[]>();
      for (const e of targetEffects) {
        const list = byType.get(e.bonusType) ?? [];
        list.push(e);
        byType.set(e.bonusType, list);
      }

      let total = 0;
      const contributions: ResolvedEffect[] = [];

      for (const [bonusType, typeEffects] of byType) {
        if (bonusType === BonusType.DODGE || bonusType === BonusType.UNTYPED) {
          for (const e of typeEffects) {
            total += e.value;
            contributions.push(e);
          }
        } else {
          const best = typeEffects.reduce(
            (max, e) => (e.value > max.value ? e : max),
            typeEffects[0],
          );
          total += best.value;
          contributions.push(best);
        }
      }

      result.set(target, { total, contributions });
    }

    return result;
  }

  // ============================================================
  // Phase 5: Apply to Character
  // ============================================================

  private static get(stacked: Map<string, StackedResult>, target: string): number {
    return stacked.get(target)?.total ?? 0;
  }

  private static applyAbilityScores(c: Character, stacked: Map<string, StackedResult>): void {
    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;
    for (const ab of abilities) {
      const score = c.abilityScores[ab];
      const result = stacked.get(`ability.${ab}`);
      score.total = score.base + score.racial + score.inherent + (result?.total ?? 0);
      score.tempTotal = Math.max(0, score.total - score.damage - score.drain);
      score.modifier = Math.floor((score.total - 10) / 2);
      score.tempModifier = Math.floor((score.tempTotal - 10) / 2);

      // Populate per-bonusType breakdown so the UI can show "+6 Enhancement" etc.
      for (const key of Object.keys(score.bonuses) as (keyof typeof score.bonuses)[]) {
        score.bonuses[key] = [];
      }
      for (const contrib of result?.contributions ?? []) {
        const key = contrib.bonusType as string;
        if (key in score.bonuses) {
          (score.bonuses as Record<string, Bonus[]>)[key].push({
            type: contrib.bonusType as BonusType,
            value: contrib.value,
            source: contrib.source,
          });
        }
      }
    }
  }

  private static applySavingThrows(c: Character, stacked: Map<string, StackedResult>): void {
    const saves = c.combatStats.savingThrows;
    const allSaveBonus = this.get(stacked, 'save.all');

    // Calculate base saves from class progressions
    c.classes.baseFortSave = this.calculateBaseSave(c, 'fort');
    c.classes.baseRefSave = this.calculateBaseSave(c, 'ref');
    c.classes.baseWillSave = this.calculateBaseSave(c, 'will');

    saves.fortitude.base = c.classes.baseFortSave;
    saves.fortitude.ability = c.abilityScores.con.tempModifier;
    saves.fortitude.misc = this.get(stacked, 'save.fortitude') + allSaveBonus;
    saves.fortitude.total =
      saves.fortitude.base +
      saves.fortitude.ability +
      saves.fortitude.magic +
      saves.fortitude.misc +
      saves.fortitude.temporary;

    saves.reflex.base = c.classes.baseRefSave;
    saves.reflex.ability = c.abilityScores.dex.tempModifier;
    saves.reflex.misc = this.get(stacked, 'save.reflex') + allSaveBonus;
    saves.reflex.total =
      saves.reflex.base +
      saves.reflex.ability +
      saves.reflex.magic +
      saves.reflex.misc +
      saves.reflex.temporary;

    saves.will.base = c.classes.baseWillSave;
    saves.will.ability = c.abilityScores.wis.tempModifier;
    saves.will.misc = this.get(stacked, 'save.will') + allSaveBonus;
    saves.will.total =
      saves.will.base +
      saves.will.ability +
      saves.will.magic +
      saves.will.misc +
      saves.will.temporary;
  }

  private static applyArmorClass(c: Character, stacked: Map<string, StackedResult>): void {
    const ac = c.combatStats.armorClass;
    const sizeMod = SIZE_AC_ATTACK[c.info.size] ?? 0;

    ac.base = 10;
    ac.dexterity = Math.min(c.abilityScores.dex.tempModifier, c.equipment.maxDexBonus);
    ac.armor = this.get(stacked, 'ac.armor');
    ac.shield = this.get(stacked, 'ac.shield');
    ac.natural = this.get(stacked, 'ac.natural');
    ac.deflection = this.get(stacked, 'ac.deflection');
    ac.dodge = this.get(stacked, 'ac.dodge');
    ac.size = sizeMod;
    ac.misc = this.get(stacked, 'ac');

    ac.total =
      ac.base +
      ac.armor +
      ac.shield +
      ac.dexterity +
      ac.size +
      ac.natural +
      ac.deflection +
      ac.dodge +
      ac.misc;
    ac.touch = ac.base + ac.dexterity + ac.size + ac.deflection + ac.dodge + ac.misc;
    ac.flatFooted = ac.base + ac.armor + ac.shield + ac.size + ac.natural + ac.deflection + ac.misc;
  }

  private static applyInitiative(c: Character, stacked: Map<string, StackedResult>): void {
    c.combatStats.initiative.dexterity = c.abilityScores.dex.tempModifier;
    c.combatStats.initiative.misc = this.get(stacked, 'initiative');
    c.combatStats.initiative.total =
      c.combatStats.initiative.dexterity + c.combatStats.initiative.misc;
  }

  private static applyAttackBonuses(c: Character, stacked: Map<string, StackedResult>): void {
    const atk = c.combatStats.attackBonuses;
    const sizeMod = SIZE_AC_ATTACK[c.info.size] ?? 0;

    // Recalculate BAB from class levels
    atk.baseAttack = this.calculateBAB(c);
    c.classes.baseAttackBonus = atk.baseAttack;

    atk.strengthMod = c.abilityScores.str.tempModifier;
    atk.sizeMod = sizeMod;

    const meleeBonus = this.get(stacked, 'attack.melee') + this.get(stacked, 'attack.all');
    const rangedBonus = this.get(stacked, 'attack.ranged') + this.get(stacked, 'attack.all');

    atk.meleeTotal = atk.baseAttack[0] + atk.strengthMod + atk.sizeMod + meleeBonus;
    atk.rangedTotal =
      atk.baseAttack[0] + c.abilityScores.dex.tempModifier + atk.sizeMod + rangedBonus;

    // Calculate iterative attacks
    atk.allAttacks.melee = atk.baseAttack.map(
      (bab) => bab + atk.strengthMod + atk.sizeMod + meleeBonus,
    );
    atk.allAttacks.ranged = atk.baseAttack.map(
      (bab) => bab + c.abilityScores.dex.tempModifier + atk.sizeMod + rangedBonus,
    );
  }

  private static applyCombatManeuvers(c: Character, stacked: Map<string, StackedResult>): void {
    const cmb = c.combatStats.combatManeuver;
    const bab = c.combatStats.attackBonuses.baseAttack[0];
    const sizeMod = SIZE_CMB_CMD[c.info.size] ?? 0;

    cmb.bonus.baseAttack = bab;
    cmb.bonus.strengthMod = c.abilityScores.str.tempModifier;
    cmb.bonus.sizeMod = sizeMod;
    cmb.bonus.total =
      cmb.bonus.baseAttack + cmb.bonus.strengthMod + cmb.bonus.sizeMod + this.get(stacked, 'cmb');

    cmb.defense.baseAttack = bab;
    cmb.defense.strengthMod = c.abilityScores.str.tempModifier;
    cmb.defense.dexterityMod = c.abilityScores.dex.tempModifier;
    cmb.defense.sizeMod = sizeMod;
    cmb.defense.total =
      10 +
      cmb.defense.baseAttack +
      cmb.defense.strengthMod +
      cmb.defense.dexterityMod +
      cmb.defense.sizeMod +
      this.get(stacked, 'cmd');
    cmb.defense.flatFooted = cmb.defense.total - cmb.defense.dexterityMod;
  }

  private static applyHitPoints(c: Character, stacked: Map<string, StackedResult>): void {
    const hp = c.combatStats.hitPoints;

    // Base HP from hit dice
    hp.base = 0;
    for (const cls of c.classes.classes) {
      hp.base += cls.hitDieResults.reduce((sum, roll) => sum + roll, 0);
    }

    hp.constitution = c.abilityScores.con.tempModifier * c.classes.totalLevel;
    hp.other = this.get(stacked, 'hp') + this.get(stacked, 'hp.per_level') * c.classes.totalLevel;

    // Favored class HP
    hp.favoredClass = c.classes.favoredClassBonuses
      .filter((b) => b.bonusType === 'HP')
      .reduce((sum, b) => sum + b.value, 0);

    const maxHP = hp.base + hp.constitution + hp.favoredClass + hp.other;

    // Cap current HP at max
    if (hp.current > maxHP || hp.current === 0) {
      hp.current = maxHP;
    }
  }

  private static applySkills(c: Character, stacked: Map<string, StackedResult>): void {
    const skillKeys = Object.keys(c.skills).filter(
      (k) => k !== 'totalRanks' && !Array.isArray(c.skills[k]),
    );

    for (const key of skillKeys) {
      const skill = c.skills[key];
      if (!skill || typeof skill !== 'object' || !('ability' in skill)) continue;

      const abilityMod = c.abilityScores[skill.ability as keyof AbilityScores]?.tempModifier ?? 0;
      skill.abilityMod = abilityMod;
      skill.classSkillBonus = skill.isClassSkill && skill.ranks > 0 ? 3 : 0;

      const pipelineBonus = this.get(stacked, `skill.${key}`);
      skill.total =
        skill.ranks +
        skill.abilityMod +
        skill.classSkillBonus +
        skill.racial +
        skill.trait +
        skill.item +
        pipelineBonus -
        Math.abs(skill.armorPenalty);
    }
  }

  private static applyMovement(c: Character, stacked: Map<string, StackedResult>): void {
    c.combatStats.movement.current =
      c.combatStats.movement.base + this.get(stacked, 'speed.base') - c.combatStats.movement.armor;
  }

  // ============================================================
  // Helper Calculations
  // ============================================================

  private static calculateBAB(character: Character): number[] {
    let totalBAB = 0;
    for (const cls of character.classes.classes) {
      switch (cls.babProgression) {
        case 'Full':
          totalBAB += cls.level;
          break;
        case 'Medium':
          totalBAB += Math.floor(cls.level * 0.75);
          break;
        case 'Low':
          totalBAB += Math.floor(cls.level * 0.5);
          break;
      }
    }

    // Generate iterative attacks
    const attacks = [totalBAB];
    let iterative = totalBAB - 5;
    while (iterative >= 1) {
      attacks.push(iterative);
      iterative -= 5;
    }

    return attacks;
  }

  private static calculateBaseSave(character: Character, save: 'fort' | 'ref' | 'will'): number {
    let total = 0;
    for (const cls of character.classes.classes) {
      const progression =
        save === 'fort'
          ? cls.fortProgression
          : save === 'ref'
            ? cls.refProgression
            : cls.willProgression;

      if (progression === SaveProgression.Good) {
        total += 2 + Math.floor(cls.level / 2);
      } else {
        total += Math.floor(cls.level / 3);
      }
    }
    return total;
  }
}
