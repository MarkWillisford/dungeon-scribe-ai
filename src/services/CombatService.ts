import { Character } from '@/types';
import { BonusType, Effect } from '@/types/base';
import { Buff, CombatAbilityState } from '@/types/buff';
import { ACTotals, BuffedTotals, SkillTotal } from '@/types/combat';
import { ModifierPipelineService } from './ModifierPipelineService';

export type HPState = 'healthy' | 'wounded' | 'disabled' | 'dying' | 'dead';

export interface RageEndResult {
  newCurrentHP: number;
  newTempHP: number;
  hpLost: number;
}

export class CombatService {
  // ============================================================
  // Power Attack / Deadly Aim
  // ============================================================

  /**
   * Calculate Power Attack penalty and melee damage bonus based on BAB.
   * PF1e formula: penalty = floor(BAB / 4) + 1, damage bonus = penalty * 2
   */
  static getPowerAttackValues(bab: number): { penalty: number; damageBonus: number } {
    const penalty = Math.floor(bab / 4) + 1;
    return { penalty, damageBonus: penalty * 2 };
  }

  /**
   * Deadly Aim uses the same formula as Power Attack but for ranged attacks.
   */
  static getDeadlyAimValues(bab: number): { penalty: number; damageBonus: number } {
    const penalty = Math.floor(bab / 4) + 1;
    return { penalty, damageBonus: penalty * 2 };
  }

  // ============================================================
  // Combat Ability → Effect[] conversion
  // ============================================================

  /**
   * Convert active CombatAbilityState into Effect[] for the modifier pipeline.
   * These effects are processed alongside buffs using the same stacking rules.
   */
  static getCombatAbilityEffects(character: Character, abilities: CombatAbilityState): Effect[] {
    const effects: Effect[] = [];
    const bab = character.combatStats.attackBonuses.baseAttack[0] ?? 0;

    // Power Attack
    if (abilities.powerAttack) {
      const { penalty, damageBonus } = this.getPowerAttackValues(bab);
      effects.push({
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: -penalty,
        source: 'Power Attack',
      });
      effects.push({
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'damage.melee',
        value: damageBonus,
        source: 'Power Attack',
      });
    }

    // Deadly Aim (ranged equivalent of Power Attack)
    if (abilities.deadlyAim) {
      const { penalty, damageBonus } = this.getDeadlyAimValues(bab);
      effects.push({
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'attack.ranged',
        value: -penalty,
        source: 'Deadly Aim',
      });
      effects.push({
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'damage.ranged',
        value: damageBonus,
        source: 'Deadly Aim',
      });
    }

    // Rage — +4 morale STR, +4 morale CON, +2 morale Will, -2 AC penalty
    if (abilities.rage) {
      effects.push(
        {
          type: 'bonus',
          bonusType: BonusType.MORALE,
          target: 'ability.str',
          value: 4,
          source: 'Rage',
        },
        {
          type: 'bonus',
          bonusType: BonusType.MORALE,
          target: 'ability.con',
          value: 4,
          source: 'Rage',
        },
        {
          type: 'bonus',
          bonusType: BonusType.MORALE,
          target: 'save.will',
          value: 2,
          source: 'Rage',
        },
        {
          type: 'penalty',
          bonusType: BonusType.UNTYPED,
          target: 'ac',
          value: -2,
          source: 'Rage',
        },
      );
    }

    // Haste — +1 untyped attack, +1 dodge AC, +1 dodge Reflex, +30 enhancement speed
    if (abilities.haste) {
      effects.push(
        {
          type: 'bonus',
          bonusType: BonusType.UNTYPED,
          target: 'attack.all',
          value: 1,
          source: 'Haste',
        },
        {
          type: 'bonus',
          bonusType: BonusType.DODGE,
          target: 'ac.dodge',
          value: 1,
          source: 'Haste',
        },
        {
          type: 'bonus',
          bonusType: BonusType.DODGE,
          target: 'save.reflex',
          value: 1,
          source: 'Haste',
        },
        {
          type: 'bonus',
          bonusType: BonusType.ENHANCEMENT,
          target: 'speed.base',
          value: 30,
          source: 'Haste',
        },
      );
    }

    // Combat Expertise — variable attack penalty, equal dodge bonus to AC
    if (abilities.combatExpertise) {
      const p = abilities.combatExpertisePenalty;
      effects.push(
        {
          type: 'penalty',
          bonusType: BonusType.UNTYPED,
          target: 'attack.melee',
          value: -p,
          source: 'Combat Expertise',
        },
        {
          type: 'penalty',
          bonusType: BonusType.UNTYPED,
          target: 'attack.ranged',
          value: -p,
          source: 'Combat Expertise',
        },
        {
          type: 'bonus',
          bonusType: BonusType.DODGE,
          target: 'ac.dodge',
          value: p,
          source: 'Combat Expertise',
        },
      );
    }

    // Two-Weapon Fighting — main-hand penalty (off-hand tracked separately in future)
    if (abilities.twoWeaponFighting) {
      const hasTWFFeat = character.feats.feats.some((f) => f.featId === 'two_weapon_fighting');
      const lightOffhand = abilities.twoWeaponFightingLightOffhand;
      // Without feat: -6 main / -10 off-hand (-4/-8 with light off-hand)
      // With feat:    -4 main / -4 off-hand  (-2/-2 with light off-hand)
      const mainPenalty = hasTWFFeat ? (lightOffhand ? -2 : -4) : lightOffhand ? -4 : -6;

      effects.push({
        type: 'penalty',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: mainPenalty,
        source: 'Two-Weapon Fighting',
      });
    }

    return effects;
  }

  // ============================================================
  // Full Buffed Totals
  // ============================================================

  /**
   * Calculate all stat totals with session buffs and combat abilities applied.
   * Merges session buffs + ability effects into a temporary character,
   * runs the full modifier pipeline, then extracts results.
   */
  static calculateAllTotals(
    character: Character,
    sessionBuffs: Buff[],
    abilities: CombatAbilityState,
  ): BuffedTotals {
    // Pre-run the pipeline on the base character so BAB and other derived stats
    // are accurate before we compute ability effects (Power Attack needs real BAB).
    const baseCalc = ModifierPipelineService.recalculate(character);
    const abilityEffects = this.getCombatAbilityEffects(baseCalc, abilities);

    // Wrap ability effects in a synthetic buff so the pipeline handles them
    const abilityBuff: Buff = {
      id: '_combat_abilities',
      name: 'Combat Abilities',
      source: 'Combat Abilities',
      bonusType: BonusType.UNTYPED,
      duration: null,
      durationType: 'permanent',
      effects: abilityEffects,
      isActive: true,
    };

    const tempChar: Character = {
      ...character,
      buffs: [
        ...character.buffs,
        ...sessionBuffs.filter((b) => b.isActive),
        ...(abilityEffects.length > 0 ? [abilityBuff] : []),
      ],
    };

    const c = ModifierPipelineService.recalculate(tempChar);
    const cs = c.combatStats;

    // Collect all skill totals
    const skills: Partial<Record<string, number>> = {};
    const skillsObj = c.skills as unknown as Record<string, unknown>;
    const skillKeys = Object.keys(skillsObj).filter(
      (k) => k !== 'totalRanks' && !Array.isArray(skillsObj[k]),
    );
    for (const key of skillKeys) {
      const skill = skillsObj[key];
      if (skill && typeof skill === 'object' && 'total' in skill) {
        skills[key] = (skill as { total: number }).total;
      }
    }

    const ac: ACTotals = {
      total: cs.armorClass.total,
      touch: cs.armorClass.touch,
      flatFooted: cs.armorClass.flatFooted,
      breakdown: [
        'Base: 10',
        cs.armorClass.armor !== 0 ? `Armor: +${cs.armorClass.armor}` : null,
        cs.armorClass.shield !== 0 ? `Shield: +${cs.armorClass.shield}` : null,
        cs.armorClass.dexterity !== 0
          ? `DEX: ${cs.armorClass.dexterity >= 0 ? '+' : ''}${cs.armorClass.dexterity}`
          : null,
        cs.armorClass.natural !== 0 ? `Natural: +${cs.armorClass.natural}` : null,
        cs.armorClass.deflection !== 0 ? `Deflection: +${cs.armorClass.deflection}` : null,
        cs.armorClass.dodge !== 0 ? `Dodge: +${cs.armorClass.dodge}` : null,
        cs.armorClass.size !== 0
          ? `Size: ${cs.armorClass.size >= 0 ? '+' : ''}${cs.armorClass.size}`
          : null,
        cs.armorClass.misc !== 0
          ? `Misc: ${cs.armorClass.misc >= 0 ? '+' : ''}${cs.armorClass.misc}`
          : null,
      ].filter((x): x is string => x !== null),
    };

    return {
      ac,
      fort: cs.savingThrows.fortitude.total,
      ref: cs.savingThrows.reflex.total,
      will: cs.savingThrows.will.total,
      meleeAttack: cs.attackBonuses.allAttacks.melee,
      rangedAttack: cs.attackBonuses.allAttacks.ranged,
      skills,
    };
  }

  /**
   * Calculate buffed total and breakdown for a single skill.
   */
  static calculateSkill(character: Character, sessionBuffs: Buff[], skillKey: string): SkillTotal {
    const totals = this.calculateAllTotals(character, sessionBuffs, this.defaultAbilities());
    const total = totals.skills[skillKey] ?? 0;
    const breakdown = ModifierPipelineService.getBreakdown(character, `skill.${skillKey}`);
    return {
      total,
      breakdown: breakdown.bonuses.map((b) => {
        const sign = b.value >= 0 ? '+' : '';
        return `${b.source} (${b.type}): ${sign}${b.value}${b.stacked ? '' : ' [suppressed]'}`;
      }),
    };
  }

  // ============================================================
  // HP State
  // ============================================================

  /**
   * Returns the HP state label for display.
   * PF1e: dead at <= -(CON score), dying at < 0, disabled at 0, otherwise alive.
   */
  static getHPState(current: number, max: number, conScore: number): HPState {
    if (current <= -conScore) return 'dead';
    if (current < 0) return 'dying';
    if (current === 0) return 'disabled';
    if (current <= Math.floor(max / 2)) return 'wounded';
    return 'healthy';
  }

  static isDying(current: number): boolean {
    return current < 0;
  }

  static isDead(current: number, conScore: number): boolean {
    return current <= -conScore;
  }

  // ============================================================
  // Rage End HP Adjustment
  // ============================================================

  /**
   * When Rage ends, the +4 morale CON bonus is lost.
   * This reduces max HP by 2 per character level (4 CON → +2 CON mod → +2 HP/level).
   * Per RAW: apply HP loss to current HP. If current drops to 0 → disabled.
   * Temp HP absorbs damage first.
   */
  static calculateRageEndHPAdjustment(
    character: Character,
    currentHP: number,
    tempHP: number,
  ): RageEndResult {
    const hpLost = character.classes.totalLevel * 2;
    let remaining = hpLost;
    let newTempHP = tempHP;
    let newCurrentHP = currentHP;

    if (newTempHP > 0) {
      const fromTemp = Math.min(remaining, newTempHP);
      newTempHP -= fromTemp;
      remaining -= fromTemp;
    }

    newCurrentHP -= remaining;

    return { newCurrentHP, newTempHP, hpLost };
  }

  // ============================================================
  // Helpers
  // ============================================================

  /**
   * Default all-off CombatAbilityState. Used when only buffs are relevant.
   */
  static defaultAbilities(): CombatAbilityState {
    return {
      powerAttack: false,
      deadlyAim: false,
      rage: false,
      twoWeaponFighting: false,
      twoWeaponFightingLightOffhand: false,
      haste: false,
      flurryOfBlows: false,
      combatExpertise: false,
      combatExpertisePenalty: 1,
    };
  }
}
