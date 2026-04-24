// src/services/CompanionService.ts
//
// Pure compute layer for animal companions / special mounts. No I/O.
// All state (effective level, base stats, slot list, trick/feat counts) is
// derived from:
//   1. The entry definition (AnimalCompanionEntry from static data)
//   2. The CompanionInstance (player selections + overrides)
//   3. The Character (for class-derived effective level)
//
// Source citations:
// - AC_PROGRESSION table: Paizo Core Rulebook — "Animal Companion Base
//   Statistics" (aonprd.com / d20pfsrd druid animal companions page)
// - Granting source formulas: plans/animal-companion-builder.md § Granting
//   Sources (mirrors the class rules for Druid, Ranger, Hunter, etc.)
// - Slot computation: BODY_SHAPE_SLOTS (Ultimate Wilderness p. 176 via AoN)

import type { Character } from '@/types';
import type { ClassEntry } from '@/types/classes';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';
import type { CompanionInstance, CompanionGrant } from '@/types/companions';
import { BODY_SHAPE_SLOTS, type CompanionSlotAccess } from '@/data/companions/bodyShapeSlots';
import { ALL_TEMPLATES } from '@/data/templates';
import type { GrantsCompanionSpec } from '@/data/templates/types';

// ---------------------------------------------------------------------------
// AC progression table — totals at each effective class level (1–20).
// All columns are cumulative totals, not deltas.
// ---------------------------------------------------------------------------

export interface CompanionACProgression {
  hd: number;
  bab: number;
  fort: number;
  ref: number;
  will: number;
  feats: number;
  naturalArmorBonus: number;
  strDexBonus: number;
  bonusTricks: number;
  special: string[];
}

export const AC_PROGRESSION: Record<number, CompanionACProgression> = {
  1: {
    hd: 2,
    bab: 1,
    fort: 3,
    ref: 3,
    will: 0,
    feats: 1,
    naturalArmorBonus: 0,
    strDexBonus: 0,
    bonusTricks: 1,
    special: ['Link', 'Share Spells'],
  },
  2: {
    hd: 3,
    bab: 2,
    fort: 3,
    ref: 3,
    will: 1,
    feats: 2,
    naturalArmorBonus: 0,
    strDexBonus: 0,
    bonusTricks: 1,
    special: [],
  },
  3: {
    hd: 3,
    bab: 2,
    fort: 3,
    ref: 3,
    will: 1,
    feats: 2,
    naturalArmorBonus: 2,
    strDexBonus: 1,
    bonusTricks: 2,
    special: ['Evasion'],
  },
  4: {
    hd: 4,
    bab: 3,
    fort: 4,
    ref: 4,
    will: 1,
    feats: 2,
    naturalArmorBonus: 2,
    strDexBonus: 1,
    bonusTricks: 2,
    special: ['Ability Score Increase'],
  },
  5: {
    hd: 5,
    bab: 3,
    fort: 4,
    ref: 4,
    will: 1,
    feats: 3,
    naturalArmorBonus: 2,
    strDexBonus: 1,
    bonusTricks: 2,
    special: [],
  },
  6: {
    hd: 6,
    bab: 4,
    fort: 5,
    ref: 5,
    will: 2,
    feats: 3,
    naturalArmorBonus: 4,
    strDexBonus: 2,
    bonusTricks: 3,
    special: ['Devotion'],
  },
  7: {
    hd: 6,
    bab: 4,
    fort: 5,
    ref: 5,
    will: 2,
    feats: 3,
    naturalArmorBonus: 4,
    strDexBonus: 2,
    bonusTricks: 3,
    special: [],
  },
  8: {
    hd: 7,
    bab: 5,
    fort: 5,
    ref: 5,
    will: 2,
    feats: 4,
    naturalArmorBonus: 4,
    strDexBonus: 2,
    bonusTricks: 3,
    special: [],
  },
  9: {
    hd: 8,
    bab: 6,
    fort: 6,
    ref: 6,
    will: 2,
    feats: 4,
    naturalArmorBonus: 6,
    strDexBonus: 3,
    bonusTricks: 4,
    special: ['Ability Score Increase', 'Multiattack'],
  },
  10: {
    hd: 9,
    bab: 6,
    fort: 6,
    ref: 6,
    will: 3,
    feats: 5,
    naturalArmorBonus: 6,
    strDexBonus: 3,
    bonusTricks: 4,
    special: [],
  },
  11: {
    hd: 9,
    bab: 6,
    fort: 6,
    ref: 6,
    will: 3,
    feats: 5,
    naturalArmorBonus: 6,
    strDexBonus: 3,
    bonusTricks: 4,
    special: [],
  },
  12: {
    hd: 10,
    bab: 7,
    fort: 7,
    ref: 7,
    will: 3,
    feats: 5,
    naturalArmorBonus: 8,
    strDexBonus: 4,
    bonusTricks: 5,
    special: [],
  },
  13: {
    hd: 11,
    bab: 8,
    fort: 7,
    ref: 7,
    will: 3,
    feats: 6,
    naturalArmorBonus: 8,
    strDexBonus: 4,
    bonusTricks: 5,
    special: [],
  },
  14: {
    hd: 12,
    bab: 9,
    fort: 8,
    ref: 8,
    will: 4,
    feats: 6,
    naturalArmorBonus: 8,
    strDexBonus: 4,
    bonusTricks: 5,
    special: ['Ability Score Increase'],
  },
  15: {
    hd: 12,
    bab: 9,
    fort: 8,
    ref: 8,
    will: 4,
    feats: 6,
    naturalArmorBonus: 10,
    strDexBonus: 5,
    bonusTricks: 6,
    special: ['Improved Evasion'],
  },
  16: {
    hd: 13,
    bab: 9,
    fort: 8,
    ref: 8,
    will: 4,
    feats: 7,
    naturalArmorBonus: 10,
    strDexBonus: 5,
    bonusTricks: 6,
    special: [],
  },
  17: {
    hd: 14,
    bab: 10,
    fort: 9,
    ref: 9,
    will: 4,
    feats: 7,
    naturalArmorBonus: 10,
    strDexBonus: 5,
    bonusTricks: 6,
    special: [],
  },
  18: {
    hd: 15,
    bab: 11,
    fort: 9,
    ref: 9,
    will: 5,
    feats: 8,
    naturalArmorBonus: 12,
    strDexBonus: 6,
    bonusTricks: 7,
    special: [],
  },
  19: {
    hd: 15,
    bab: 11,
    fort: 9,
    ref: 9,
    will: 5,
    feats: 8,
    naturalArmorBonus: 12,
    strDexBonus: 6,
    bonusTricks: 7,
    special: [],
  },
  20: {
    hd: 16,
    bab: 12,
    fort: 10,
    ref: 10,
    will: 5,
    feats: 8,
    naturalArmorBonus: 12,
    strDexBonus: 6,
    bonusTricks: 7,
    special: ['Ability Score Increase'],
  },
  21: {
    hd: 17,
    bab: 12,
    fort: 10,
    ref: 10,
    will: 5,
    feats: 9,
    naturalArmorBonus: 14,
    strDexBonus: 7,
    bonusTricks: 8,
    special: [],
  },
  22: {
    hd: 18,
    bab: 13,
    fort: 11,
    ref: 11,
    will: 6,
    feats: 9,
    naturalArmorBonus: 14,
    strDexBonus: 7,
    bonusTricks: 8,
    special: [],
  },
  23: {
    hd: 18,
    bab: 13,
    fort: 11,
    ref: 11,
    will: 6,
    feats: 9,
    naturalArmorBonus: 14,
    strDexBonus: 7,
    bonusTricks: 8,
    special: [],
  },
  24: {
    hd: 19,
    bab: 14,
    fort: 11,
    ref: 11,
    will: 6,
    feats: 10,
    naturalArmorBonus: 16,
    strDexBonus: 8,
    bonusTricks: 9,
    special: [],
  },
  25: {
    hd: 20,
    bab: 15,
    fort: 12,
    ref: 12,
    will: 6,
    feats: 10,
    naturalArmorBonus: 16,
    strDexBonus: 8,
    bonusTricks: 9,
    special: ['Ability Score Increase'],
  },
  26: {
    hd: 21,
    bab: 15,
    fort: 12,
    ref: 12,
    will: 7,
    feats: 11,
    naturalArmorBonus: 16,
    strDexBonus: 8,
    bonusTricks: 9,
    special: [],
  },
  27: {
    hd: 21,
    bab: 15,
    fort: 12,
    ref: 12,
    will: 7,
    feats: 11,
    naturalArmorBonus: 18,
    strDexBonus: 9,
    bonusTricks: 10,
    special: [],
  },
  28: {
    hd: 22,
    bab: 16,
    fort: 13,
    ref: 13,
    will: 7,
    feats: 11,
    naturalArmorBonus: 18,
    strDexBonus: 9,
    bonusTricks: 10,
    special: [],
  },
  29: {
    hd: 23,
    bab: 17,
    fort: 13,
    ref: 13,
    will: 7,
    feats: 12,
    naturalArmorBonus: 18,
    strDexBonus: 9,
    bonusTricks: 10,
    special: [],
  },
  30: {
    hd: 24,
    bab: 18,
    fort: 14,
    ref: 14,
    will: 8,
    feats: 12,
    naturalArmorBonus: 20,
    strDexBonus: 10,
    bonusTricks: 11,
    special: ['Ability Score Increase'],
  },
};

// ---------------------------------------------------------------------------
// Computed stat block output — what the builder screen renders from.
// Values are post-progression-tier + post-AC-table but pre-equipment,
// pre-template, pre-override.
// ---------------------------------------------------------------------------

export interface CompanionBaseStats {
  name: string;
  size: string;
  speed: string;
  attacks: string;
  specialQualities: string[];

  hd: number;
  bab: number;
  fort: number;
  ref: number;
  will: number;

  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;

  naturalArmor: number;
  bonusTricks: number;
  featSlots: number;
  skillRanksPerHD: number;
  totalSkillRanks: number;

  progression: CompanionACProgression;
  appliedTiers: number[]; // atDruidLevel values that applied, for debugging
}

// ---------------------------------------------------------------------------
// Granting-source formulas — plan § Granting Sources
// ---------------------------------------------------------------------------

// Apply a template's grantsCompanion formula against the character's total
// class level. Negative offsets clamp to a minimum of 1 so the AC progression
// table never underflows. Mirrors the Paladin/Druid-style −N pattern used by
// `effectiveLevelFromClass` for mount/companion math.
function applyGrantsCompanionFormula(spec: GrantsCompanionSpec, characterLevel: number): number {
  switch (spec.effectiveLevelFormula) {
    case 'characterLevel':
      return Math.max(1, characterLevel);
    case 'characterLevel-3':
      return Math.max(1, characterLevel - 3);
    case 'characterLevel-4':
      return Math.max(1, characterLevel - 4);
  }
}

function effectiveLevelFromClass(classEntry: ClassEntry): number {
  const archetypes = classEntry.archetype ?? [];
  switch (classEntry.name) {
    case 'Druid':
      return classEntry.level;
    case 'Hunter':
      return classEntry.level;
    case 'Cavalier':
      return classEntry.level;
    case 'Ranger':
      // Beastmaster uses the same formula as standard Ranger Hunter's Bond.
      return Math.max(1, classEntry.level - 3);
    case 'Paladin':
      return Math.max(1, classEntry.level - 4);
    case 'Inquisitor':
      return archetypes.includes('Sacred Huntsmaster') ? classEntry.level : 0;
    case 'Barbarian':
      return archetypes.includes('Mad Dog') ? Math.max(1, classEntry.level - 2) : 0;
    default:
      return 0;
  }
}

// ---------------------------------------------------------------------------
// Service — static methods, pure functions
// ---------------------------------------------------------------------------

export class CompanionService {
  static computeEffectiveLevel(character: Character, grant: CompanionGrant): number {
    switch (grant.type) {
      case 'class': {
        const classEntry = character.classes.classes.find((c) => c.name === grant.classEntryId);
        if (!classEntry) return 0;
        return effectiveLevelFromClass(classEntry);
      }
      case 'template': {
        // Template-granted companions resolve their effective level from the
        // definition's `grantsCompanion.effectiveLevelFormula`. Fallback to
        // the character's total class level for templates without the field
        // (covers hand-rolled campaign content that forgot to set it).
        const def = ALL_TEMPLATES.find((t) => t.id === grant.templateId);
        const spec = def?.grantsCompanion;
        if (!spec) return character.classes.totalLevel;
        return applyGrantsCompanionFormula(spec, character.classes.totalLevel);
      }
      case 'feat':
      case 'cohort':
        // Reserved — not implemented. Phase 1 scope excludes cohorts, and no
        // current feat grants a companion. Caller override via
        // CompanionInstance.effectiveProgressionLevel is the escape hatch.
        return 0;
    }
  }

  static getProgression(effectiveLevel: number): CompanionACProgression {
    const clamped = Math.max(1, Math.min(30, Math.floor(effectiveLevel)));
    return AC_PROGRESSION[clamped];
  }

  static computeBaseStatBlock(
    entry: AnimalCompanionEntry,
    effectiveLevel: number,
  ): CompanionBaseStats {
    const progression = CompanionService.getProgression(effectiveLevel);

    // Start with entry base stats
    let str = entry.str;
    let dex = entry.dex;
    let con = entry.con;
    const int = entry.int;
    const wis = entry.wis;
    const cha = entry.cha;

    let size = entry.size;
    let naturalArmor = entry.naturalArmor;
    let attacks = entry.attacks;
    const specialQualities = [...entry.specialQualities];
    const appliedTiers: number[] = [];

    // Apply progression tiers whose atDruidLevel has been reached.
    // Tiers are processed in their declared order (matching ascending
    // atDruidLevel in every entry we've seen).
    for (const tier of entry.progressionTiers) {
      if (tier.atDruidLevel > effectiveLevel) continue;

      for (const change of tier.abilityScoreChanges) {
        switch (change.ability) {
          case 'STR':
            str += change.change;
            break;
          case 'DEX':
            dex += change.change;
            break;
          case 'CON':
            con += change.change;
            break;
          // INT/WIS/CHA deltas possible but rare; we ignore them here since
          // the entry declares them directly and tiers that modify those are
          // not represented in current data. Add cases if that assumption
          // breaks.
        }
      }

      if (typeof tier.naturalArmorChange === 'number') {
        naturalArmor += tier.naturalArmorChange;
      }
      if (tier.sizeChange) {
        size = sizeFromTier(size, tier.sizeChange);
      }
      if (tier.attackUpdate) {
        attacks = tier.attackUpdate;
      }
      if (tier.specialQualitiesGained?.length) {
        for (const sq of tier.specialQualitiesGained) {
          if (!specialQualities.includes(sq)) specialQualities.push(sq);
        }
      }
      appliedTiers.push(tier.atDruidLevel);
    }

    // Universal AC progression — adds to Str/Dex and natural armor.
    str += progression.strDexBonus;
    dex += progression.strDexBonus;
    naturalArmor += progression.naturalArmorBonus;

    // Skill ranks per HD: (2 + INT mod), minimum 1. Clamped because a base-INT
    // 2 animal has a -4 modifier that would otherwise produce negative ranks.
    const intMod = Math.floor((int - 10) / 2);
    const skillRanksPerHD = Math.max(1, 2 + intMod);
    const totalSkillRanks = skillRanksPerHD * progression.hd;

    return {
      name: entry.name,
      size,
      speed: entry.speed,
      attacks,
      specialQualities,
      hd: progression.hd,
      bab: progression.bab,
      fort: progression.fort,
      ref: progression.ref,
      will: progression.will,
      str,
      dex,
      con,
      int,
      wis,
      cha,
      naturalArmor,
      bonusTricks: progression.bonusTricks,
      featSlots: progression.feats,
      skillRanksPerHD,
      totalSkillRanks,
      progression,
      appliedTiers,
    };
  }

  static computeAvailableSlots(
    entry: AnimalCompanionEntry,
    instance: CompanionInstance,
  ): CompanionSlotAccess[] {
    const profile = BODY_SHAPE_SLOTS[entry.bodyShape];
    if (!profile) return [];

    const removed = new Set(entry.slotOverrides?.removed ?? []);
    const baseSlots = profile.slots.filter((s) => !removed.has(s.slot));

    // Added overrides are treated as automatic (no Extra Item Slot feat
    // requirement) per plans/animal-companion-builder.md.
    const added: CompanionSlotAccess[] = (entry.slotOverrides?.added ?? []).map((slot) => ({
      slot,
      automatic: true,
    }));

    const unlockedByFeat = extraItemSlotFeatSlots(instance);

    return [...baseSlots, ...added].filter((s) => s.automatic || unlockedByFeat.has(s.slot));
  }

  static computeBonusTricks(effectiveLevel: number): number {
    return CompanionService.getProgression(effectiveLevel).bonusTricks;
  }

  static computeFeatSlots(effectiveLevel: number): number {
    return CompanionService.getProgression(effectiveLevel).feats;
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const SIZE_ORDER = [
  'Fine',
  'Diminutive',
  'Tiny',
  'Small',
  'Medium',
  'Large',
  'Huge',
  'Gargantuan',
  'Colossal',
];

function sizeFromTier(current: string, sizeChange: string): string {
  // Entries use the format 'Medium to Large'. We parse the "to X" half and
  // validate X is a known size. Falls back to the current size on parse fail.
  const match = sizeChange.match(/to\s+([A-Z][a-z]+)/i);
  if (!match) return current;
  const target = match[1];
  const canonical = SIZE_ORDER.find((s) => s.toLowerCase() === target.toLowerCase());
  return canonical ?? current;
}

function extraItemSlotFeatSlots(instance: CompanionInstance): Set<string> {
  // Extra Item Slot (Animal Archive) is taken once per slot. The feat's slot
  // parameter is stored in CompanionFeat.choices.slot — kebab-cased slot name
  // matching ItemSlot.
  const set = new Set<string>();
  for (const feat of instance.feats) {
    if (feat.featId !== 'extra-item-slot') continue;
    if (!feat.active) continue;
    const slot = feat.choices?.slot;
    if (slot) set.add(slot);
  }
  return set;
}
