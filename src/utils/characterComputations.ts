// Pure computation helpers for CharacterDraft values.
// No Redux, no side effects — just math.
//
// Class stat data (BAB progression, save progression, hit die) is supplied
// by the caller via a ClassDataMap. In the app that map is built from the
// Firestore-backed gameData slice; in tests it's built from local fixtures.

import { BABProgression, SaveProgression } from '@/types/base';
import {
  type DraftClassEntry,
  type DraftAbilityScore,
  type AbilityKey,
  computeOtherBonusTotal,
} from '@/types/characterDraft';
import type { ExpandedClassData } from '@/data/classes/types';
import type { FavoredClassBonusEntry, FCBMechanicalEffect } from '@/types/favoredClassBonuses';

// ---- Class data lookup ----

export type ClassDataMap = Map<string, ExpandedClassData>;

export function lookupClassData(
  className: string,
  classDataMap: ClassDataMap,
): ExpandedClassData | null {
  return classDataMap.get(className.toLowerCase()) ?? null;
}

// ---- Ability scores ----

export function abilityTotal(score: DraftAbilityScore): number {
  return (
    score.base +
    score.racial +
    score.inherent +
    score.enhancement +
    computeOtherBonusTotal(score.other) +
    score.levelIncrements
  );
}

export function abilityModifier(total: number): number {
  return Math.floor((total - 10) / 2);
}

export function formatModifier(mod: number): string {
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

export function getAbilityModifier(
  abilities: Record<AbilityKey, DraftAbilityScore>,
  key: AbilityKey,
): number {
  return abilityModifier(abilityTotal(abilities[key]));
}

// ---- BAB ----

function babContrib(data: ExpandedClassData | null, level: number): number {
  if (!data) return Math.floor(level * 0.75); // default Medium for unknown classes
  switch (data.babProgression) {
    case BABProgression.Full:
      return level;
    case BABProgression.Medium:
      return Math.floor(level * 0.75);
    case BABProgression.Low:
      return Math.floor(level * 0.5);
    default:
      return Math.floor(level * 0.75);
  }
}

export function computeTotalBAB(classes: DraftClassEntry[], classDataMap: ClassDataMap): number {
  return classes.reduce(
    (sum, c) => sum + babContrib(lookupClassData(c.className, classDataMap), c.level),
    0,
  );
}

export function formatBABString(totalBAB: number): string {
  if (totalBAB <= 0) return '+0';
  const attacks: number[] = [];
  let cur = totalBAB;
  while (cur > 0) {
    attacks.push(cur);
    cur -= 5;
  }
  return attacks.map((b) => `+${b}`).join('/');
}

// ---- Saves ----

// Progression-only contribution (no +2 base bonus).
// The +2 is granted once per character per save type, not per class.
function saveProgContrib(
  data: ExpandedClassData | null,
  saveType: 'fortitude' | 'reflex' | 'will',
  level: number,
): number {
  if (!data) return Math.floor(level / 3); // default Poor for unknown classes
  const prog = data.saves[saveType];
  return prog === SaveProgression.Good ? Math.floor(level / 2) : Math.floor(level / 3);
}

function hasGoodSave(
  classes: DraftClassEntry[],
  saveType: 'fortitude' | 'reflex' | 'will',
  classDataMap: ClassDataMap,
): boolean {
  return classes.some((c) => {
    const data = lookupClassData(c.className, classDataMap);
    return data !== null && data.saves[saveType] === SaveProgression.Good;
  });
}

function computeBaseSave(
  classes: DraftClassEntry[],
  saveType: 'fortitude' | 'reflex' | 'will',
  classDataMap: ClassDataMap,
): number {
  const base = hasGoodSave(classes, saveType, classDataMap) ? 2 : 0;
  return (
    base +
    classes.reduce(
      (sum, c) =>
        sum + saveProgContrib(lookupClassData(c.className, classDataMap), saveType, c.level),
      0,
    )
  );
}

export function computeBaseFort(classes: DraftClassEntry[], classDataMap: ClassDataMap): number {
  return computeBaseSave(classes, 'fortitude', classDataMap);
}

export function computeBaseRef(classes: DraftClassEntry[], classDataMap: ClassDataMap): number {
  return computeBaseSave(classes, 'reflex', classDataMap);
}

export function computeBaseWill(classes: DraftClassEntry[], classDataMap: ClassDataMap): number {
  return computeBaseSave(classes, 'will', classDataMap);
}

// ---- Fractional BAB / saves (optional rule) ----
// Standard: floor each class's contribution individually, then sum.
// Fractional: sum raw fractions across all classes, floor once at the end.
// The +2 base bonus for good saves applies in both modes (once per character).

export function computeTotalBABFractional(
  classes: DraftClassEntry[],
  classDataMap: ClassDataMap,
): number {
  const raw = classes.reduce((sum, c) => {
    const data = lookupClassData(c.className, classDataMap);
    if (!data) return sum + c.level * 0.75;
    switch (data.babProgression) {
      case BABProgression.Full:
        return sum + c.level;
      case BABProgression.Medium:
        return sum + c.level * 0.75;
      case BABProgression.Low:
        return sum + c.level * 0.5;
      default:
        return sum + c.level * 0.75;
    }
  }, 0);
  return Math.floor(raw);
}

function computeBaseSaveFractional(
  classes: DraftClassEntry[],
  saveType: 'fortitude' | 'reflex' | 'will',
  classDataMap: ClassDataMap,
): number {
  const hasGood = classes.some((c) => {
    const data = lookupClassData(c.className, classDataMap);
    return data !== null && data.saves[saveType] === SaveProgression.Good;
  });
  const raw = classes.reduce((sum, c) => {
    const data = lookupClassData(c.className, classDataMap);
    if (!data) return sum + c.level / 3;
    return sum + (data.saves[saveType] === SaveProgression.Good ? c.level / 2 : c.level / 3);
  }, 0);
  return (hasGood ? 2 : 0) + Math.floor(raw);
}

export function computeBaseFortFractional(
  classes: DraftClassEntry[],
  classDataMap: ClassDataMap,
): number {
  return computeBaseSaveFractional(classes, 'fortitude', classDataMap);
}

export function computeBaseRefFractional(
  classes: DraftClassEntry[],
  classDataMap: ClassDataMap,
): number {
  return computeBaseSaveFractional(classes, 'reflex', classDataMap);
}

export function computeBaseWillFractional(
  classes: DraftClassEntry[],
  classDataMap: ClassDataMap,
): number {
  return computeBaseSaveFractional(classes, 'will', classDataMap);
}

// ---- Max HP ----

export function computeMaxHP(
  classes: DraftClassEntry[],
  conMod: number,
  classDataMap: ClassDataMap,
): number {
  if (classes.length === 0) return 0;
  let hp = 0;
  let isFirstLevel = true;
  for (const cls of classes) {
    const data = lookupClassData(cls.className, classDataMap);
    const hd = data?.hitDie ?? 8;
    for (let i = 0; i < cls.level; i++) {
      hp += isFirstLevel ? hd : Math.floor(hd / 2) + 1;
      isFirstLevel = false;
    }
    hp += cls.favoredClassBonuses?.filter((s) => s.type === 'hp').length ?? 0;
  }
  const totalLevel = classes.reduce((sum, c) => sum + c.level, 0);
  hp += conMod * totalLevel;
  return Math.max(1, hp);
}

// ---- Feat slots ----

export function computeFeatSlots(
  classes: DraftClassEntry[],
  race: string,
): import('@/types/characterDraft').DraftFeatSlot[] {
  const totalHD = classes.reduce((sum, c) => sum + c.level, 0);
  const slots: import('@/types/characterDraft').DraftFeatSlot[] = [];

  for (let hd = 1; hd <= totalHD; hd += 2) {
    slots.push({
      id: `level-feat-hd${hd}`,
      source: 'level',
      availableAt: `Lvl ${hd}`,
      availableAtLevel: hd,
      prereqOverride: false,
    });
  }

  if (race.toLowerCase() === 'human') {
    slots.push({
      id: 'racial-feat-human-1',
      source: 'racial',
      availableAt: 'Human Bonus',
      availableAtLevel: 1,
      prereqOverride: false,
    });
  }

  return slots.sort((a, b) => a.availableAtLevel - b.availableAtLevel || a.id.localeCompare(b.id));
}

// ---- ECL ----

export function computeECL(
  classes: DraftClassEntry[],
  templates: { laValue?: number; appliedAs?: 'CR' | 'LA' }[],
): number {
  const classLevels = classes.reduce((sum, c) => sum + c.level, 0);
  const templateLA = templates
    .filter((t) => t.appliedAs === 'LA' && t.laValue)
    .reduce((sum, t) => sum + (t.laValue ?? 0), 0);
  return classLevels + templateLA;
}

// ---- FCB alternate accumulation ----
//
// Tallies the number of class levels invested in each alternate FCB option and
// formats a human-readable display string for the current accumulated value.
// Pure / sync — callers supply the pre-loaded option documents.

export interface AccumulatedFCBEffect {
  optionId: string;
  shortName: string;
  className: string;
  count: number;
  display: string;
}

function frac(count: number, numerator: number, denominator: number): number {
  return Math.floor((count * numerator) / denominator);
}

function fcbEffectDisplay(effect: FCBMechanicalEffect, count: number): string {
  switch (effect.type) {
    case 'bonus': {
      const val = frac(count, effect.perLevelValue.numerator, effect.perLevelValue.denominator);
      const eff = effect.applyInIncrementsOf
        ? Math.floor(val / effect.applyInIncrementsOf) * effect.applyInIncrementsOf
        : val;
      let s = `+${eff} ${effect.target}`;
      if (effect.vsCombatManeuver?.length) s += ` vs ${effect.vsCombatManeuver.join('/')}`;
      if (effect.vsCreatureType?.length) s += ` vs ${effect.vsCreatureType.join(', ')}`;
      if (effect.inTerrain?.length) s += ` (${effect.inTerrain.join(', ')})`;
      if (effect.conditionDescription) s += ` (${effect.conditionDescription})`;
      if (effect.requiresPickOne) s += ` (chosen ${effect.pickOnePrompt ?? 'option'})`;
      return s;
    }
    case 'natural_armor': {
      const val = frac(count, effect.perLevelValue.numerator, effect.perLevelValue.denominator);
      const tgt = effect.target === 'self' ? '' : ` (${effect.target})`;
      return `+${val} natural armor${tgt}`;
    }
    case 'damage_reduction': {
      const val = frac(count, effect.perLevelValue.numerator, effect.perLevelValue.denominator);
      const cap = effect.maxTotal != null ? ` (max ${effect.maxTotal})` : '';
      return `DR +${val}/${effect.damageType}${cap} (${effect.target})`;
    }
    case 'resource_pool': {
      const val = frac(count, effect.perLevelValue.numerator, effect.perLevelValue.denominator);
      return `+${val} ${effect.resourceId.replace(/_/g, ' ')}`;
    }
    case 'class_level_bump': {
      const val = frac(count, effect.perLevelValue.numerator, effect.perLevelValue.denominator);
      const pick = effect.requiresPickOne
        ? ` (chosen ${effect.pickOnePrompt ?? effect.featureName})`
        : '';
      const scope = effect.scopeDescription ? ` — ${effect.scopeDescription}` : '';
      return `+${val} effective level for ${effect.featureName}${pick}${scope}`;
    }
    case 'feature_uses_per_day': {
      const val = frac(count, effect.perLevelValue.numerator, effect.perLevelValue.denominator);
      const pick = effect.requiresPickOne
        ? ` (chosen ${effect.pickOnePrompt ?? effect.featureName})`
        : '';
      return `+${val} uses/day for ${effect.featureName}${pick}`;
    }
    case 'arcane_spell_failure_reduction': {
      const val = frac(count, effect.perLevelPercent.numerator, effect.perLevelPercent.denominator);
      return `-${val}% arcane spell failure (${effect.armorCategory} armor)`;
    }
    case 'weapon_proficiency_chip': {
      const val = frac(count, effect.perLevelValue.numerator, effect.perLevelValue.denominator);
      return `Non-proficiency penalty -${val} (chosen weapon)`;
    }
    case 'firearm_misfire_reduction': {
      const val = frac(count, effect.perLevelValue.numerator, effect.perLevelValue.denominator);
      return `Misfire chance -${val} (chosen firearm)`;
    }
    case 'caster_level': {
      const val = frac(count, effect.perLevelValue.numerator, effect.perLevelValue.denominator);
      const filter = effect.schoolFilter ? ` ${effect.schoolFilter}` : '';
      const scope = effect.scopeType === 'full' ? '' : ` (${effect.scopeType.replace(/_/g, ' ')})`;
      const pick = effect.requiresPickOne ? ` (chosen ${effect.pickOnePrompt ?? 'option'})` : '';
      return `+${val} CL${filter}${scope}${pick}`;
    }
    case 'crafting_speedup': {
      const normal = count * effect.goldPerDay;
      const adv = count * effect.goldPerDayAdventuring;
      return `+${normal} gp/day crafting (+${adv} adventuring, chosen feat)`;
    }
    case 'hardness_reduction_on_strike': {
      const val = frac(count, effect.perLevelValue.numerator, effect.perLevelValue.denominator);
      return `Hardness -${val} on strike (${effect.materials.join(', ')})`;
    }
    case 'feature_numeric_bump': {
      const val = frac(count, effect.perLevelValue.numerator, effect.perLevelValue.denominator);
      return `+${val} ${effect.bumpType} for ${effect.featureName}`;
    }
    case 'learn_option': {
      const val = frac(count, effect.perLevelValue.numerator, effect.perLevelValue.denominator);
      return `${val}× ${effect.optionType.replace(/_/g, ' ')} learned`;
    }
    case 'compound':
      return effect.effects.map((e) => fcbEffectDisplay(e, count)).join('; ');
    case 'unmapped':
      return `${count} level${count !== 1 ? 's' : ''} invested`;
    default:
      return `${count} level${(count as number) !== 1 ? 's' : ''} invested`;
  }
}

export function computeFCBAlternateAccumulation(
  classes: DraftClassEntry[],
  options: FavoredClassBonusEntry[],
): AccumulatedFCBEffect[] {
  const optionMap = new Map(options.map((o) => [o.id, o]));
  const counts = new Map<string, number>();

  for (const cls of classes) {
    for (const sel of cls.favoredClassBonuses ?? []) {
      if (sel.type !== 'alternate') continue;
      counts.set(sel.optionId, (counts.get(sel.optionId) ?? 0) + 1);
    }
  }

  const results: AccumulatedFCBEffect[] = [];
  for (const [optionId, count] of counts) {
    const option = optionMap.get(optionId);
    if (!option) continue;
    results.push({
      optionId,
      shortName: option.shortName,
      className: option.className,
      count,
      display: fcbEffectDisplay(option.mechanicalEffect, count),
    });
  }
  return results;
}
