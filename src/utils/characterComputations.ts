// Pure computation helpers for CharacterDraft values.
// No Redux, no side effects — just math.

import { BABProgression, SaveProgression } from '@/types/base';
import {
  type DraftClassEntry,
  type DraftAbilityScore,
  type AbilityKey,
} from '@/types/characterDraft';
import { ALL_EXPANDED_CLASSES, type ExpandedClassData } from '@/data/classes/index';

// ---- Class data lookup ----

const ALL_CLASSES: ExpandedClassData[] = ALL_EXPANDED_CLASSES;

const CLASS_DATA_MAP = new Map<string, ExpandedClassData>(
  ALL_CLASSES.map((c) => [c.name.toLowerCase(), c]),
);

export function lookupClassData(className: string): ExpandedClassData | null {
  return CLASS_DATA_MAP.get(className.toLowerCase()) ?? null;
}

export const ALL_CLASSES_LIST = ALL_CLASSES;

// ---- Ability scores ----

export function abilityTotal(score: DraftAbilityScore): number {
  return (
    score.base +
    score.racial +
    score.inherent +
    score.enhancement +
    score.other +
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

export function computeTotalBAB(classes: DraftClassEntry[]): number {
  return classes.reduce((sum, c) => sum + babContrib(lookupClassData(c.className), c.level), 0);
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
): boolean {
  return classes.some((c) => {
    const data = lookupClassData(c.className);
    return data !== null && data.saves[saveType] === SaveProgression.Good;
  });
}

function computeBaseSave(
  classes: DraftClassEntry[],
  saveType: 'fortitude' | 'reflex' | 'will',
): number {
  const base = hasGoodSave(classes, saveType) ? 2 : 0;
  return (
    base +
    classes.reduce(
      (sum, c) => sum + saveProgContrib(lookupClassData(c.className), saveType, c.level),
      0,
    )
  );
}

export function computeBaseFort(classes: DraftClassEntry[]): number {
  return computeBaseSave(classes, 'fortitude');
}

export function computeBaseRef(classes: DraftClassEntry[]): number {
  return computeBaseSave(classes, 'reflex');
}

export function computeBaseWill(classes: DraftClassEntry[]): number {
  return computeBaseSave(classes, 'will');
}

// ---- Fractional BAB / saves (optional rule) ----
// Standard: floor each class's contribution individually, then sum.
// Fractional: sum raw fractions across all classes, floor once at the end.
// The +2 base bonus for good saves applies in both modes (once per character).

export function computeTotalBABFractional(classes: DraftClassEntry[]): number {
  const raw = classes.reduce((sum, c) => {
    const data = lookupClassData(c.className);
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
): number {
  const hasGood = classes.some((c) => {
    const data = lookupClassData(c.className);
    return data !== null && data.saves[saveType] === SaveProgression.Good;
  });
  const raw = classes.reduce((sum, c) => {
    const data = lookupClassData(c.className);
    if (!data) return sum + c.level / 3;
    return sum + (data.saves[saveType] === SaveProgression.Good ? c.level / 2 : c.level / 3);
  }, 0);
  return (hasGood ? 2 : 0) + Math.floor(raw);
}

export function computeBaseFortFractional(classes: DraftClassEntry[]): number {
  return computeBaseSaveFractional(classes, 'fortitude');
}

export function computeBaseRefFractional(classes: DraftClassEntry[]): number {
  return computeBaseSaveFractional(classes, 'reflex');
}

export function computeBaseWillFractional(classes: DraftClassEntry[]): number {
  return computeBaseSaveFractional(classes, 'will');
}

// ---- Max HP ----

export function computeMaxHP(classes: DraftClassEntry[], conMod: number): number {
  if (classes.length === 0) return 0;
  let hp = 0;
  let isFirstLevel = true;
  for (const cls of classes) {
    const data = lookupClassData(cls.className);
    const hd = data?.hitDie ?? 8;
    for (let i = 0; i < cls.level; i++) {
      hp += isFirstLevel ? hd : Math.floor(hd / 2) + 1;
      isFirstLevel = false;
    }
  }
  const totalLevel = classes.reduce((sum, c) => sum + c.level, 0);
  hp += conMod * totalLevel;
  return Math.max(1, hp);
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
