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

function saveContrib(
  data: ExpandedClassData | null,
  saveType: 'fortitude' | 'reflex' | 'will',
  level: number,
): number {
  if (!data) return Math.floor(level / 3); // default Poor for unknown classes
  const prog = data.saves[saveType];
  return prog === SaveProgression.Good ? 2 + Math.floor(level / 2) : Math.floor(level / 3);
}

export function computeBaseFort(classes: DraftClassEntry[]): number {
  return classes.reduce(
    (sum, c) => sum + saveContrib(lookupClassData(c.className), 'fortitude', c.level),
    0,
  );
}

export function computeBaseRef(classes: DraftClassEntry[]): number {
  return classes.reduce(
    (sum, c) => sum + saveContrib(lookupClassData(c.className), 'reflex', c.level),
    0,
  );
}

export function computeBaseWill(classes: DraftClassEntry[]): number {
  return classes.reduce(
    (sum, c) => sum + saveContrib(lookupClassData(c.className), 'will', c.level),
    0,
  );
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
