// Pure computation helpers for Character values.
// No Redux, no side effects — just math.
//
// Class stat data (BAB progression, save progression, hit die) is supplied
// by the caller via a ClassDataMap. In the app that map is built from the
// Firestore-backed gameData slice; in tests it's built from local fixtures.

import { BABProgression, SaveProgression } from '@/types/base';
import type { ClassEntry } from '@/types/classes';
import type { AppliedTemplate } from '@/types/templates';
import type { ArchetypeData, ExpandedClassData } from '@/data/classes/types';
import type { FavoredClassBonusEntry, FCBMechanicalEffect } from '@/types/favoredClassBonuses';
import type { FeatType } from '@/types/feats';
import type { CharacterFlaw } from '@/types/flaws';

// ---- Class data lookup ----

export type ClassDataMap = Map<string, ExpandedClassData>;

export function lookupClassData(
  className: string,
  classDataMap: ClassDataMap,
): ExpandedClassData | null {
  return classDataMap.get(className.toLowerCase()) ?? null;
}

// ---- Ability score math ----

export function abilityModifier(total: number): number {
  return Math.floor((total - 10) / 2);
}

export function formatModifier(mod: number): string {
  return mod >= 0 ? `+${mod}` : `${mod}`;
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

export function computeTotalBAB(classes: ClassEntry[], classDataMap: ClassDataMap): number {
  return classes.reduce(
    (sum, c) => sum + babContrib(lookupClassData(c.name, classDataMap), c.level),
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
  classes: ClassEntry[],
  saveType: 'fortitude' | 'reflex' | 'will',
  classDataMap: ClassDataMap,
): boolean {
  return classes.some((c) => {
    const data = lookupClassData(c.name, classDataMap);
    return data !== null && data.saves[saveType] === SaveProgression.Good;
  });
}

function computeBaseSave(
  classes: ClassEntry[],
  saveType: 'fortitude' | 'reflex' | 'will',
  classDataMap: ClassDataMap,
): number {
  const base = hasGoodSave(classes, saveType, classDataMap) ? 2 : 0;
  return (
    base +
    classes.reduce(
      (sum, c) => sum + saveProgContrib(lookupClassData(c.name, classDataMap), saveType, c.level),
      0,
    )
  );
}

export function computeBaseFort(classes: ClassEntry[], classDataMap: ClassDataMap): number {
  return computeBaseSave(classes, 'fortitude', classDataMap);
}

export function computeBaseRef(classes: ClassEntry[], classDataMap: ClassDataMap): number {
  return computeBaseSave(classes, 'reflex', classDataMap);
}

export function computeBaseWill(classes: ClassEntry[], classDataMap: ClassDataMap): number {
  return computeBaseSave(classes, 'will', classDataMap);
}

// ---- Fractional BAB / saves (optional rule) ----
// Standard: floor each class's contribution individually, then sum.
// Fractional: sum raw fractions across all classes, floor once at the end.
// The +2 base bonus for good saves applies in both modes (once per character).

export function computeTotalBABFractional(
  classes: ClassEntry[],
  classDataMap: ClassDataMap,
): number {
  const raw = classes.reduce((sum, c) => {
    const data = lookupClassData(c.name, classDataMap);
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
  classes: ClassEntry[],
  saveType: 'fortitude' | 'reflex' | 'will',
  classDataMap: ClassDataMap,
): number {
  const hasGood = classes.some((c) => {
    const data = lookupClassData(c.name, classDataMap);
    return data !== null && data.saves[saveType] === SaveProgression.Good;
  });
  const raw = classes.reduce((sum, c) => {
    const data = lookupClassData(c.name, classDataMap);
    if (!data) return sum + c.level / 3;
    return sum + (data.saves[saveType] === SaveProgression.Good ? c.level / 2 : c.level / 3);
  }, 0);
  return (hasGood ? 2 : 0) + Math.floor(raw);
}

export function computeBaseFortFractional(
  classes: ClassEntry[],
  classDataMap: ClassDataMap,
): number {
  return computeBaseSaveFractional(classes, 'fortitude', classDataMap);
}

export function computeBaseRefFractional(
  classes: ClassEntry[],
  classDataMap: ClassDataMap,
): number {
  return computeBaseSaveFractional(classes, 'reflex', classDataMap);
}

export function computeBaseWillFractional(
  classes: ClassEntry[],
  classDataMap: ClassDataMap,
): number {
  return computeBaseSaveFractional(classes, 'will', classDataMap);
}

// ---- Max HP ----

export function computeMaxHP(
  classes: ClassEntry[],
  conMod: number,
  classDataMap: ClassDataMap,
): number {
  if (classes.length === 0) return 0;
  let hp = 0;
  let isFirstLevel = true;
  for (const cls of classes) {
    const data = lookupClassData(cls.name, classDataMap);
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

export type FeatSlotSource = 'racial' | 'level' | 'bonus' | 'mythic' | 'class';

export interface FeatSlot {
  id: string;
  source: FeatSlotSource;
  availableAt: string;
  availableAtLevel: number;
  prereqOverride: boolean;
  // ---- class-granted slots only ----
  // Long-form origin shown in the row, e.g. "Fighter 4".
  sourceLabel?: string;
  // Identity of the granting class entry (ClassEntry.id, falling back to name).
  classId?: string;
  // Level within the granting class — not the character level.
  classLevel?: number;
  // Class feature that granted the slot, verbatim, e.g. "Combat Style Feat".
  featureName?: string;
  // Feat types this slot is normally restricted to. Undefined means the rules
  // restriction isn't modelled, so the picker shows everything.
  allowedFeatTypes?: FeatType[];
}

// Display order when several slots land on the same character level.
const SOURCE_RANK: Record<FeatSlotSource, number> = {
  level: 0,
  racial: 1,
  class: 2,
  bonus: 3,
  mythic: 4,
};

function sortFeatSlots(slots: FeatSlot[]): FeatSlot[] {
  return slots.sort(
    (a, b) =>
      a.availableAtLevel - b.availableAtLevel ||
      SOURCE_RANK[a.source] - SOURCE_RANK[b.source] ||
      a.id.localeCompare(b.id),
  );
}

// ---- Class-granted bonus feat slots ----
//
// Classes grant extra feats through ordinary class features — Fighter's
// "Bonus Feat", Ranger's "Combat Style Feat", Inquisitor's "Teamwork Feat".
// They are detected by name rather than a dedicated data field, because that
// is how the class catalog stores them.

// A feat-granting feature is one whose name ends in "feat" or "feats", once any
// trailing parenthetical is stripped: "Bonus Feat", "Bonus Feats (Zen Archer)".
const FEAT_FEATURE_SUFFIX = /\bfeats?$/i;

export interface FeatFeatureRef {
  // Normalized feature name, singularized and lowercased: "bonus feat".
  base: string;
  // Levels named in a parenthetical, e.g. "Bonus Feats (4th, 8th)" → [4, 8].
  // Null when the name carries no level list, meaning "all of them".
  levels: number[] | null;
}

// Parses a parenthetical as an ordinal level list. Returns null when the
// contents are descriptive rather than levels ("(Zen Archer)").
function parseOrdinalLevels(inner: string): number[] | null {
  const parts = inner
    .split(',')
    .map((p) => p.trim())
    .filter(Boolean);
  if (parts.length === 0) return null;
  const levels: number[] = [];
  for (const part of parts) {
    const match = part.match(/^(\d+)(?:st|nd|rd|th)$/i);
    if (!match) return null;
    levels.push(parseInt(match[1], 10));
  }
  return levels;
}

function normalizeFeatureBase(base: string): string {
  return base.toLowerCase().replace(/\bfeats$/, 'feat');
}

// Recognizes a class feature (or an archetype's replacedFeatures entry) as a
// feat grant. Returns null for anything that isn't one.
export function parseFeatGrantingFeatureName(name: string): FeatFeatureRef | null {
  const trimmed = name.trim();
  const parenthetical = trimmed.match(/^(.*?)\s*\(([^)]*)\)$/);
  const base = (parenthetical ? parenthetical[1] : trimmed).trim();
  if (!FEAT_FEATURE_SUFFIX.test(base)) return null;
  return {
    base: normalizeFeatureBase(base),
    levels: parenthetical ? parseOrdinalLevels(parenthetical[2]) : null,
  };
}

// Feature names that state their own restriction.
const FEATURE_KEYWORD_TYPES: { keyword: string; types: FeatType[] }[] = [
  { keyword: 'combat', types: ['combat'] },
  { keyword: 'teamwork', types: ['teamwork'] },
  { keyword: 'metamagic', types: ['metamagic'] },
  { keyword: 'style', types: ['style'] },
];

// A plain "Bonus Feat" means something different per class. Only classes whose
// restriction is unambiguous in the rules are listed here; anything absent is
// left unrestricted rather than guessed at. Every slot can be opened to the
// full feat list in the picker regardless.
const CLASS_BONUS_FEAT_TYPES: Record<string, FeatType[]> = {
  brawler: ['combat'],
  cavalier: ['combat'],
  fighter: ['combat'],
  gunslinger: ['combat'],
  magus: ['combat', 'item_creation', 'metamagic'],
  monk: ['combat'],
  'monk (unchained)': ['combat'],
  samurai: ['combat'],
  swashbuckler: ['combat'],
  warpriest: ['combat'],
  wizard: ['item_creation', 'metamagic'],
};

function allowedFeatTypesFor(className: string, featureBase: string): FeatType[] | undefined {
  for (const { keyword, types } of FEATURE_KEYWORD_TYPES) {
    if (featureBase.includes(keyword)) return types;
  }
  return CLASS_BONUS_FEAT_TYPES[className.toLowerCase()];
}

// Slot ids are `class:{classId}:{featureSlug}:{classLevel}`. The class entry id
// is generated (base36) and the slug is alphanumeric, so ':' never collides.
export function makeClassFeatSlotId(
  classId: string,
  featureBase: string,
  classLevel: number,
): string {
  const slug = featureBase.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
  return `class:${classId}:${slug}:${classLevel}`;
}

export function parseClassFeatSlotId(
  slotId: string,
): { classId: string; classLevel: number } | null {
  if (!slotId.startsWith('class:')) return null;
  const parts = slotId.split(':');
  if (parts.length !== 4) return null;
  const classLevel = parseInt(parts[3], 10);
  if (!Number.isFinite(classLevel)) return null;
  return { classId: parts[1], classLevel };
}

// Maps a class level back to the character level it was taken at, using the
// per-character-level class order. Returns null when the order isn't recorded.
export function characterLevelForClassLevel(
  classId: string,
  classLevel: number,
  levelOrder: string[] | undefined,
): number | null {
  if (!levelOrder?.length) return null;
  let seen = 0;
  for (let i = 0; i < levelOrder.length; i++) {
    if (levelOrder[i] !== classId) continue;
    seen += 1;
    if (seen === classLevel) return i + 1;
  }
  return null;
}

// `archetypeName` is what the character editor writes. The legacy `archetype`
// array only appears on older persisted characters — reading both keeps this
// correct today and when a class can carry several archetypes (issue #249).
export function selectedArchetypeNames(
  cls: Pick<ClassEntry, 'archetype' | 'archetypeName'>,
): string[] {
  const names = cls.archetype ?? [];
  return cls.archetypeName ? [...names, cls.archetypeName] : names;
}

// Collapses each class entry's selected archetypes down to the class feature
// names they trade away, keyed by class entry id. Only entries with something
// to remove appear in the map.
export function buildReplacedFeaturesByClassId(
  classes: ClassEntry[],
  archetypesByClassName: Map<string, Pick<ArchetypeData, 'name' | 'replacedFeatures'>[]>,
): Map<string, string[]> {
  const map = new Map<string, string[]>();
  for (const cls of classes) {
    const selected = selectedArchetypeNames(cls).map((n) => n.toLowerCase());
    if (selected.length === 0) continue;
    const replaced = (archetypesByClassName.get(cls.name) ?? [])
      .filter((a) => selected.includes(a.name.toLowerCase()))
      .flatMap((a) => a.replacedFeatures ?? []);
    if (replaced.length > 0) map.set(cls.id ?? cls.name, replaced);
  }
  return map;
}

export interface ClassFeatSlotOptions {
  classDataMap: ClassDataMap;
  // levelOrder[i] is the class entry id taken at character level i + 1.
  levelOrder?: string[];
  // Feature names each class entry's archetypes trade away, keyed by entry id.
  replacedFeaturesByClassId?: Map<string, string[]>;
}

export function computeClassBonusFeatSlots(
  classes: ClassEntry[],
  options: ClassFeatSlotOptions,
): FeatSlot[] {
  const slots: FeatSlot[] = [];

  for (const entry of classes) {
    const classId = entry.id ?? entry.name;
    const classData = lookupClassData(entry.name, options.classDataMap);
    if (!classData) continue;

    const removed = (options.replacedFeaturesByClassId?.get(classId) ?? [])
      .map(parseFeatGrantingFeatureName)
      .filter((ref): ref is FeatFeatureRef => ref !== null);

    for (const feature of classData.classFeatures) {
      if (feature.level > entry.level) continue;
      const ref = parseFeatGrantingFeatureName(feature.name);
      if (!ref) continue;

      const tradedAway = removed.some(
        (r) => r.base === ref.base && (r.levels === null || r.levels.includes(feature.level)),
      );
      if (tradedAway) continue;

      const characterLevel =
        characterLevelForClassLevel(classId, feature.level, options.levelOrder) ?? feature.level;
      const label = `${entry.name} ${feature.level}`;

      slots.push({
        id: makeClassFeatSlotId(classId, ref.base, feature.level),
        source: 'class',
        availableAt: label,
        availableAtLevel: characterLevel,
        prereqOverride: false,
        sourceLabel: label,
        classId,
        classLevel: feature.level,
        featureName: feature.name,
        allowedFeatTypes: allowedFeatTypesFor(entry.name, ref.base),
      });
    }
  }

  return slots;
}

export function computeFeatSlots(
  classes: ClassEntry[],
  race: string,
  flaws: CharacterFlaw[],
  options?: ClassFeatSlotOptions,
): FeatSlot[] {
  const totalHD = classes.reduce((sum, c) => sum + c.level, 0);
  const slots: FeatSlot[] = [];

  for (let hd = 1; hd <= totalHD; hd += 2) {
    slots.push({
      id: `level-feat-hd${hd}`,
      source: 'level',
      availableAt: `Lvl ${hd}`,
      availableAtLevel: hd,
      prereqOverride: false,
    });
  }

  const racialFeatRaces: { key: string; id: string; label: string }[] = [
    { key: 'human', id: 'racial-feat-human-1', label: 'Human Bonus' },
    { key: 'elven noble', id: 'racial-feat-elven-noble-1', label: 'Elven Noble Bonus' },
  ];
  const raceLower = race.toLowerCase();
  const racialFeatEntry = racialFeatRaces.find((r) => r.key === raceLower);
  if (racialFeatEntry) {
    slots.push({
      id: racialFeatEntry.id,
      source: 'racial',
      availableAt: racialFeatEntry.label,
      availableAtLevel: 1,
      prereqOverride: false,
    });
  }

  for (const flaw of flaws) {
    slots.push({
      id: `flaw-feat-${flaw.flawId}`,
      source: 'bonus',
      availableAt: `Flaw: ${flaw.name}`,
      availableAtLevel: 1,
      prereqOverride: false,
    });
  }

  // Class data is only available to callers wired to the gameData slice, so
  // class-granted slots are opt-in. Without it the other slots still compute.
  if (options) {
    slots.push(...computeClassBonusFeatSlots(classes, options));
  }

  return sortFeatSlots(slots);
}

// ---- ECL ----

export function computeECL(
  classes: ClassEntry[],
  templates: Pick<AppliedTemplate, 'appliedAs' | 'la' | 'isFreeGrant'>[],
): number {
  const classLevels = classes.reduce((sum, c) => sum + c.level, 0);
  const templateLA = templates
    .filter((t) => t.appliedAs === 'la' && !t.isFreeGrant && t.la)
    .reduce((sum, t) => sum + (t.la ?? 0), 0);
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
  if (count <= 0) return '';
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
      const val =
        effect.baseValue != null
          ? effect.baseValue +
            frac(count - 1, effect.perLevelValue.numerator, effect.perLevelValue.denominator)
          : frac(count, effect.perLevelValue.numerator, effect.perLevelValue.denominator);
      const cap = effect.maxTotal != null ? ` (max ${effect.maxTotal})` : '';
      return `DR ${val}/${effect.damageType}${cap} (${effect.target})`;
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
  classes: ClassEntry[],
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
