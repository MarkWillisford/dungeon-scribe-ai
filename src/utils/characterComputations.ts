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
