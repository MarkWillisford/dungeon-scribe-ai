import type { Character } from '@/types';
import type { Effect } from '@/types/base';
import type { DamageType } from '@/types/base';
import type { Buff } from '@/types/buff';
import { ModifierPipelineService } from './ModifierPipelineService';

// DR bypass materials/descriptors not covered by DamageType
export type DRBypassMaterial =
  | 'magic'
  | 'silver'
  | 'cold iron'
  | 'adamantine'
  | 'good'
  | 'evil'
  | 'lawful'
  | 'chaotic';

export type IncomingDamageDescriptor = DamageType | DRBypassMaterial;

const KNOWN_DR_BYPASSES = new Set<DRBypassMaterial>([
  'magic',
  'silver',
  'cold iron',
  'adamantine',
  'good',
  'evil',
  'lawful',
  'chaotic',
]);

export interface DREntry {
  amount: number;
  bypass: string; // e.g. "magic", "cold iron", "-" (cannot be bypassed)
}

export interface CharacterResistances {
  dr: DREntry[];
  energyResistance: Partial<Record<DamageType, number>>;
}

const ENERGY_TYPES = new Set<DamageType>([
  'fire',
  'cold',
  'electricity',
  'acid',
  'sonic',
  'force',
  'negative',
  'positive',
]);

function parseDRBypass(effect: Effect): string {
  const desc = effect.condition?.description ?? '';
  const match = desc.match(/DR\s*\d+\/(.+)/i);
  if (match) return match[1].trim().toLowerCase();
  const descriptor = effect.condition?.params?.descriptor;
  if (descriptor) return String(descriptor).toLowerCase();
  return '-';
}

export class DamageResolutionService {
  /**
   * Resolve incoming damage after applying DR or energy resistance.
   *
   * - Energy types (fire, cold, etc.) → energy resistance applied; DR skipped.
   * - Other types (physical, 'magic') → DR applied; resistance entry checked against bypass.
   * - null → "skip type selection"; raw amount returned with no reduction.
   *
   * Result is floored at 0.
   */
  static resolve(
    amount: number,
    damageType: IncomingDamageDescriptor | null,
    resistances: CharacterResistances,
  ): number {
    if (damageType !== null && ENERGY_TYPES.has(damageType as DamageType)) {
      const resistance = resistances.energyResistance[damageType as DamageType] ?? 0;
      return Math.max(0, amount - resistance);
    }

    if (damageType === null) {
      return amount;
    }

    // Physical/magic descriptor — apply best non-bypassed DR
    const incomingStr = String(damageType).toLowerCase();
    let bestDR = 0;
    for (const entry of resistances.dr) {
      const bypassed = incomingStr === entry.bypass.toLowerCase();
      if (!bypassed) {
        bestDR = Math.max(bestDR, entry.amount);
      }
    }

    return Math.max(0, amount - bestDR);
  }

  /**
   * Extract the character's active DR and energy resistance from all effect sources,
   * including active session buffs.
   */
  static extractResistances(character: Character, activeBuffs: Buff[]): CharacterResistances {
    const characterWithBuffsForCollection = { ...character };
    const characterEffects = ModifierPipelineService.collectAllEffects(
      characterWithBuffsForCollection,
    );

    // Merge buff effects that aren't already included via character.buffs
    const buffIds = new Set((character.buffs ?? []).map((b) => b.id));
    const extraBuffEffects: Effect[] = [];
    for (const buff of activeBuffs) {
      if (!buffIds.has(buff.id) && buff.isActive) {
        for (const effect of buff.effects) {
          extraBuffEffects.push(effect);
        }
      }
    }

    const allEffects = [...characterEffects, ...extraBuffEffects];

    const dr: DREntry[] = [];
    const energyResistance: Partial<Record<DamageType, number>> = {};

    for (const effect of allEffects) {
      if (effect.target === 'dr' && typeof effect.value === 'number') {
        dr.push({ amount: effect.value, bypass: parseDRBypass(effect) });
      } else if (
        typeof effect.target === 'string' &&
        effect.target.startsWith('energy_resistance.') &&
        typeof effect.value === 'number'
      ) {
        const type = effect.target.slice('energy_resistance.'.length) as DamageType;
        const current = energyResistance[type] ?? 0;
        energyResistance[type] = Math.max(current, effect.value);
      }
    }

    return { dr, energyResistance };
  }

  /** Returns true when the character has any DR or energy resistance worth showing in the UI. */
  static hasResistances(resistances: CharacterResistances): boolean {
    return resistances.dr.length > 0 || Object.keys(resistances.energyResistance).length > 0;
  }

  /**
   * Build the list of damage type options to show in the selector, derived from the
   * character's active resistances.
   */
  static buildSelectorOptions(resistances: CharacterResistances): IncomingDamageDescriptor[] {
    const options = new Set<IncomingDamageDescriptor>();

    for (const entry of resistances.dr) {
      const bypass = entry.bypass.toLowerCase() as DRBypassMaterial;
      if (KNOWN_DR_BYPASSES.has(bypass)) {
        options.add(bypass);
      }
    }

    for (const type of Object.keys(resistances.energyResistance) as DamageType[]) {
      options.add(type);
    }

    return Array.from(options);
  }
}
