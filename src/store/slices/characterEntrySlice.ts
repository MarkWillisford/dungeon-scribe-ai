import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';
import { Alignment } from '@/types/base';

// equippedSlots was changed from Map<ItemSlot,string> to Partial<Record<ItemSlot,string>>
// on main. enableMapSet is kept for any other Map/Set state that may be added later.
enableMapSet();
import { ClassChoice } from '@/types/classes';
import type {
  CompanionInstance,
  CompanionGrant,
  CompanionFeat,
  CompanionAbilityIncrease,
  TrickName,
} from '@/types/companions';
import type { AppliedTemplate } from '@/types/templates';
import type { CharacterMagicItem, ItemSlot } from '@/types/magicItems';
import { computeFeatSlots } from '@/utils/characterComputations';
import {
  type AbilityKey,
  type CharacterDraft,
  type DraftAbilityScore,
  type DraftTypedBonus,
  type DraftClassEntry,
  type DraftTemplateEntry,
  type DraftFeatSlot,
  type DraftSkillEntry,
  type DraftTrait,
  type DraftSpellcastingPool,
  type DraftEquipmentItem,
  type DraftEquippedSlot,
  type LevelIncrementSlot,
  type DraftCombatStats,
  type FavoredClassBonusSelection,
} from '@/types/characterDraft';
import type {
  DraftEidolon,
  EidolonEdition,
  EidolonForm,
  EidolonSubtype,
  SelectedEvolutionMetadata,
} from '@/types/eidolon';

// ---- Supporting types ----

export type EntryTabKey =
  | 'identity'
  | 'abilities'
  | 'classes'
  | 'combat'
  | 'skills'
  | 'traits'
  | 'feats'
  | 'spells'
  | 'equipment'
  | 'notes';

export type EntryMode = 'new' | 'import' | 'edit';

export type TabStatus = 'complete' | 'warnings' | 'empty';

export interface EntryValidationWarning {
  id: string;
  section: EntryTabKey;
  message: string;
  detail?: string;
  isAcknowledged: boolean;
}

// ---- Initial state helpers ----

const blankAbilityScore: DraftAbilityScore = {
  base: 10,
  racial: 0,
  inherent: 0,
  enhancement: 0,
  other: [],
  levelIncrements: 0,
};

function blankAbilities() {
  return {
    str: { ...blankAbilityScore },
    dex: { ...blankAbilityScore },
    con: { ...blankAbilityScore },
    int: { ...blankAbilityScore },
    wis: { ...blankAbilityScore },
    cha: { ...blankAbilityScore },
  };
}

const blankCombat: DraftCombatStats = {
  currentHP: 0,
  nonlethalDamage: 0,
  tempHP: 0,
  acMiscBonus: 0,
  saveFortMisc: 0,
  saveRefMisc: 0,
  saveWillMisc: 0,
  meleeAttackMisc: 0,
  rangedAttackMisc: 0,
  cmbMisc: 0,
  speedLand: 30,
};

export const BLANK_DRAFT: CharacterDraft = {
  name: '',
  player: '',
  raceId: '',
  raceName: '',
  alignment: Alignment.TrueNeutral,
  deity: '',
  gender: '',
  age: '',
  height: '',
  weight: '',
  hair: '',
  eyes: '',
  skin: '',
  background: '',
  abilities: blankAbilities(),
  racialFlexBonus: false,
  racialFlexAbility: undefined,
  levelIncrementSlots: [],
  classes: [],
  templates: [],
  combat: blankCombat,
  skills: {},
  traits: [],
  featSlots: [],
  spellcastingPools: [],
  equipment: [],
  companions: [],
  eidolons: [],
  characterNotes: '',
  campaignNotes: '',
};

// ---- Feat slot sync helper ----

function syncFeatSlotsFromClasses(draft: CharacterDraft): void {
  const generated = computeFeatSlots(draft.classes, draft.raceName);
  for (const slot of generated) {
    if (draft.featSlots.find((s) => s.id === slot.id)) continue;
    // Migrate a legacy slot at the same level+source to the stable ID (preserves feat assignment)
    const legacy = draft.featSlots.find(
      (s) => s.availableAtLevel === slot.availableAtLevel && s.source === slot.source,
    );
    if (legacy) {
      legacy.id = slot.id;
    } else {
      draft.featSlots.push(slot);
    }
  }
  const SOURCE_ORDER: Record<string, number> = { racial: 0, level: 1, bonus: 2, mythic: 3 };
  draft.featSlots.sort(
    (a, b) =>
      a.availableAtLevel - b.availableAtLevel ||
      (SOURCE_ORDER[a.source] ?? 9) - (SOURCE_ORDER[b.source] ?? 9) ||
      a.id.localeCompare(b.id),
  );
}

const ABILITY_KEYS: AbilityKey[] = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

function syncEnhancementBonuses(state: { draft: CharacterDraft }): void {
  for (const key of ABILITY_KEYS) state.draft.abilities[key].enhancement = 0;
  const accumulated: Partial<Record<AbilityKey, number[]>> = {};
  for (const item of state.draft.equipment) {
    if (item.slot && item.abilityScoreBonuses) {
      for (const [ab, val] of Object.entries(item.abilityScoreBonuses)) {
        (accumulated[ab as AbilityKey] ??= []).push(val as number);
      }
    }
  }
  for (const [ab, vals] of Object.entries(accumulated)) {
    state.draft.abilities[ab as AbilityKey].enhancement = Math.max(...(vals as number[]));
  }
}

// ---- Slice state ----

interface CharacterEntryState {
  draft: CharacterDraft;
  mode: EntryMode;
  activeTab: EntryTabKey;
  isDirty: boolean;
  originalCharacterId: string | null; // null for new characters
  lastValidatedAt: number | null; // epoch ms of last Validate press
  validationWarnings: EntryValidationWarning[];
}

const initialState: CharacterEntryState = {
  draft: BLANK_DRAFT,
  mode: 'new',
  activeTab: 'identity',
  isDirty: false,
  originalCharacterId: null,
  lastValidatedAt: null,
  validationWarnings: [],
};

// ---- Migration helpers ----

// Converts a DraftClassEntry from the legacy { hp, skillRank } counter format
// to the FavoredClassBonusSelection[] per-level format. Runs at loadCharacter time
// so old Firestore documents are transparently upgraded.
function promoteLegacyFCB(legacy: unknown, classLevel: number): FavoredClassBonusSelection[] {
  if (Array.isArray(legacy)) return legacy as FavoredClassBonusSelection[];
  if (!legacy || typeof legacy !== 'object') return [];
  const { hp = 0, skillRank = 0 } = legacy as { hp?: number; skillRank?: number };
  const out: FavoredClassBonusSelection[] = [];
  for (let i = 0; i < hp; i++) out.push({ level: out.length + 1, type: 'hp' });
  for (let i = 0; i < skillRank; i++) out.push({ level: out.length + 1, type: 'skill' });
  // Cap at classLevel in case of stale over-allocated data
  return out.slice(0, classLevel);
}

function migrateDraft(draft: CharacterDraft): CharacterDraft {
  const classes = draft.classes.map((cls) => {
    if (cls.isFavoredClass) {
      return {
        ...cls,
        favoredClassBonuses:
          cls.favoredClassBonuses !== undefined
            ? promoteLegacyFCB(cls.favoredClassBonuses, cls.level)
            : [],
      };
    }
    // Not the favored class — clear any stale FCB data that may have been left behind
    // by a toggle-off that predates this fix.
    return { ...cls, favoredClassBonuses: undefined };
  });
  return { ...draft, classes };
}

// ---- Slice ----

const characterEntrySlice = createSlice({
  name: 'characterEntry',
  initialState,
  reducers: {
    // ---- Session management ----

    loadCharacter(
      state,
      action: PayloadAction<{ draft: CharacterDraft; mode: EntryMode; characterId?: string }>,
    ) {
      state.draft = migrateDraft(action.payload.draft);
      state.mode = action.payload.mode;
      state.originalCharacterId = action.payload.characterId ?? null;
      state.activeTab = 'identity';
      state.isDirty = false;
      state.lastValidatedAt = null;
      state.validationWarnings = [];
    },

    resetDraft(state) {
      state.draft = BLANK_DRAFT;
      state.mode = 'new';
      state.activeTab = 'identity';
      state.isDirty = false;
      state.originalCharacterId = null;
      state.lastValidatedAt = null;
      state.validationWarnings = [];
    },

    setActiveTab(state, action: PayloadAction<EntryTabKey>) {
      state.activeTab = action.payload;
    },

    markDirty(state) {
      state.isDirty = true;
    },

    // ---- Validation ----

    setValidationWarnings(state, action: PayloadAction<EntryValidationWarning[]>) {
      state.validationWarnings = action.payload;
      state.lastValidatedAt = Date.now();
    },

    acknowledgeWarning(state, action: PayloadAction<string>) {
      const warning = state.validationWarnings.find((w) => w.id === action.payload);
      if (warning) {
        warning.isAcknowledged = true;
      }
    },

    clearValidation(state) {
      state.validationWarnings = [];
      state.lastValidatedAt = null;
    },

    // ---- Identity ----

    setName(state, action: PayloadAction<string>) {
      state.draft.name = action.payload;
      state.isDirty = true;
    },

    setPlayer(state, action: PayloadAction<string>) {
      state.draft.player = action.payload;
      state.isDirty = true;
    },

    setRace(
      state,
      action: PayloadAction<{
        raceId: string;
        raceName: string;
        racialBonuses: Partial<Record<AbilityKey, number>>;
        hasFlexBonus?: boolean;
      }>,
    ) {
      state.draft.raceId = action.payload.raceId;
      state.draft.raceName = action.payload.raceName;
      state.draft.racialFlexBonus = action.payload.hasFlexBonus ?? false;
      if (!action.payload.hasFlexBonus) {
        state.draft.racialFlexAbility = undefined;
      }
      // Apply racial bonuses to ability scores (clear old ones first)
      const keys: AbilityKey[] = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
      keys.forEach((k) => {
        state.draft.abilities[k].racial = action.payload.racialBonuses[k] ?? 0;
      });
      syncFeatSlotsFromClasses(state.draft);
      state.isDirty = true;
    },

    setRacialFlexAbility(state, action: PayloadAction<AbilityKey>) {
      const prev = state.draft.racialFlexAbility;
      const next = action.payload;
      if (prev && prev !== next) {
        state.draft.abilities[prev].racial = 0;
      }
      state.draft.abilities[next].racial = 2;
      state.draft.racialFlexAbility = next;
      state.isDirty = true;
    },

    setAlignment(state, action: PayloadAction<Alignment>) {
      state.draft.alignment = action.payload;
      state.isDirty = true;
    },

    setDeity(state, action: PayloadAction<string>) {
      const previousDeity = state.draft.deity;
      state.draft.deity = action.payload;
      // Clear stale domain selections when deity changes — domains valid for
      // the previous deity may not be valid for the new one.
      if (previousDeity !== action.payload) {
        for (const cls of state.draft.classes) {
          cls.classChoices = cls.classChoices.filter((c) => c.featureName !== 'Domain');
        }
      }
      state.isDirty = true;
    },

    setGender(state, action: PayloadAction<string>) {
      state.draft.gender = action.payload;
      state.isDirty = true;
    },

    setAge(state, action: PayloadAction<string>) {
      state.draft.age = action.payload;
      state.isDirty = true;
    },

    setHeight(state, action: PayloadAction<string>) {
      state.draft.height = action.payload;
      state.isDirty = true;
    },

    setWeight(state, action: PayloadAction<string>) {
      state.draft.weight = action.payload;
      state.isDirty = true;
    },

    setHair(state, action: PayloadAction<string>) {
      state.draft.hair = action.payload;
      state.isDirty = true;
    },

    setEyes(state, action: PayloadAction<string>) {
      state.draft.eyes = action.payload;
      state.isDirty = true;
    },

    setSkin(state, action: PayloadAction<string>) {
      state.draft.skin = action.payload;
      state.isDirty = true;
    },

    setBackground(state, action: PayloadAction<string>) {
      state.draft.background = action.payload;
      state.isDirty = true;
    },

    setPortrait(state, action: PayloadAction<string>) {
      state.draft.portrait = action.payload;
      state.isDirty = true;
    },

    // ---- Abilities ----

    setAbilityField(
      state,
      action: PayloadAction<{
        ability: AbilityKey;
        field: Exclude<keyof DraftAbilityScore, 'other'>;
        value: number;
      }>,
    ) {
      (state.draft.abilities[action.payload.ability][action.payload.field] as number) =
        action.payload.value;
      state.isDirty = true;
    },

    addOtherBonus(state, action: PayloadAction<{ ability: AbilityKey; bonus: DraftTypedBonus }>) {
      state.draft.abilities[action.payload.ability].other.push(action.payload.bonus);
      state.isDirty = true;
    },

    removeOtherBonus(state, action: PayloadAction<{ ability: AbilityKey; index: number }>) {
      state.draft.abilities[action.payload.ability].other.splice(action.payload.index, 1);
      state.isDirty = true;
    },

    updateOtherBonus(
      state,
      action: PayloadAction<{ ability: AbilityKey; index: number; bonus: DraftTypedBonus }>,
    ) {
      state.draft.abilities[action.payload.ability].other[action.payload.index] =
        action.payload.bonus;
      state.isDirty = true;
    },

    setLevelIncrementAbility(
      state,
      action: PayloadAction<{ atHD: number; ability: AbilityKey | null }>,
    ) {
      const slot = state.draft.levelIncrementSlots.find((s) => s.atHD === action.payload.atHD);
      if (slot) {
        slot.ability = action.payload.ability;
        // Recalculate levelIncrements counts on all abilities
        const keys: AbilityKey[] = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
        keys.forEach((k) => {
          state.draft.abilities[k].levelIncrements = state.draft.levelIncrementSlots.filter(
            (s) => s.ability === k,
          ).length;
        });
      }
      state.isDirty = true;
    },

    setLevelIncrementSlots(state, action: PayloadAction<LevelIncrementSlot[]>) {
      state.draft.levelIncrementSlots = action.payload;
      state.isDirty = true;
    },

    // ---- Classes ----

    addClass(state, action: PayloadAction<DraftClassEntry>) {
      state.draft.classes.push(action.payload);
      syncFeatSlotsFromClasses(state.draft);
      state.isDirty = true;
    },

    removeClass(state, action: PayloadAction<string>) {
      const removedId = action.payload;
      state.draft.classes = state.draft.classes.filter((c) => c.id !== removedId);

      // Cascade: clear advancement pointers that targeted the removed class,
      // so the validator can surface them as "missing target" warnings instead
      // of the pool silently ignoring them.
      for (const entry of state.draft.classes) {
        const adv = entry.spellcastingAdvancement;
        if (!adv) continue;
        if (adv.mode === 'single') {
          adv.perLevel = adv.perLevel.map((p) =>
            p.baseClassEntryId === removedId ? { baseClassEntryId: '' } : p,
          );
        } else {
          adv.perLevel = adv.perLevel.map((p) => ({
            arcaneBaseClassEntryId:
              p.arcaneBaseClassEntryId === removedId ? '' : p.arcaneBaseClassEntryId,
            divineBaseClassEntryId:
              p.divineBaseClassEntryId === removedId ? '' : p.divineBaseClassEntryId,
          }));
        }
      }

      // Remove the pool anchored to this class (if any).
      state.draft.spellcastingPools = state.draft.spellcastingPools.filter(
        (p) => p.baseClassEntryId !== removedId,
      );

      // Sweep companions granted by this class.
      state.draft.companions = state.draft.companions.filter(
        (c) => !(c.grantedBy.type === 'class' && c.grantedBy.classEntryId === removedId),
      );

      syncFeatSlotsFromClasses(state.draft);
      state.isDirty = true;
    },

    updateClassLevel(state, action: PayloadAction<{ id: string; level: number }>) {
      const cls = state.draft.classes.find((c) => c.id === action.payload.id);
      if (!cls) return;

      const oldLevel = cls.level;
      const newLevel = action.payload.level;
      cls.level = newLevel;

      // Prune favored class bonus selections that are now beyond the new level.
      if (cls.favoredClassBonuses && newLevel < oldLevel) {
        cls.favoredClassBonuses = cls.favoredClassBonuses.filter((s) => s.level <= newLevel);
      }

      // Resize advancement perLevel to match the new class level.
      // New rows default to the previous row's targets so the common
      // "all levels advance the same base class" case stays cheap.
      const adv = cls.spellcastingAdvancement;
      if (adv) {
        if (adv.mode === 'single') {
          if (newLevel > oldLevel) {
            const template = adv.perLevel[adv.perLevel.length - 1] ?? { baseClassEntryId: '' };
            for (let i = 0; i < newLevel - oldLevel; i++) {
              adv.perLevel.push({ ...template });
            }
          } else if (newLevel < oldLevel) {
            adv.perLevel.length = newLevel;
          }
        } else {
          if (newLevel > oldLevel) {
            const template = adv.perLevel[adv.perLevel.length - 1] ?? {
              arcaneBaseClassEntryId: '',
              divineBaseClassEntryId: '',
            };
            for (let i = 0; i < newLevel - oldLevel; i++) {
              adv.perLevel.push({ ...template });
            }
          } else if (newLevel < oldLevel) {
            adv.perLevel.length = newLevel;
          }
        }
      }

      syncFeatSlotsFromClasses(state.draft);
      state.isDirty = true;
    },

    updateClassArchetype(
      state,
      action: PayloadAction<{ id: string; archetypeId?: string; archetypeName?: string }>,
    ) {
      const cls = state.draft.classes.find((c) => c.id === action.payload.id);
      if (cls) {
        cls.archetypeId = action.payload.archetypeId;
        cls.archetypeName = action.payload.archetypeName;
        state.isDirty = true;
      }
    },

    updateClassSpellcastingAdvancement(
      state,
      action: PayloadAction<{
        id: string;
        advancement: DraftClassEntry['spellcastingAdvancement'];
      }>,
    ) {
      const cls = state.draft.classes.find((c) => c.id === action.payload.id);
      if (cls) {
        cls.spellcastingAdvancement = action.payload.advancement;
        state.isDirty = true;
      }
    },

    upsertClassChoice(
      state,
      action: PayloadAction<{ classId: string; choiceIndex: number; choice: ClassChoice }>,
    ) {
      const cls = state.draft.classes.find((c) => c.id === action.payload.classId);
      if (cls) {
        const { choiceIndex, choice } = action.payload;
        // Find the choiceIndex-th existing entry for this feature name.
        // This correctly handles features with multiple slots at the same level
        // (e.g. two Domain choices for Cleric, both at takenAtLevel 1).
        const sameFeatureIndices = cls.classChoices
          .map((ch, i) => ({ ch, i }))
          .filter(({ ch }) => ch.featureName === choice.featureName)
          .map(({ i }) => i);
        if (sameFeatureIndices[choiceIndex] !== undefined) {
          cls.classChoices[sameFeatureIndices[choiceIndex]] = choice;
        } else {
          cls.classChoices.push(choice);
        }
        state.isDirty = true;
      }
    },

    toggleClassPrereqOverride(state, action: PayloadAction<string>) {
      const cls = state.draft.classes.find((c) => c.id === action.payload);
      if (cls) {
        cls.prereqOverride = !cls.prereqOverride;
        state.isDirty = true;
      }
    },

    // ---- Companions ----------------------------------------------------
    //
    // Animal companions and special mounts. The slice owns the raw list;
    // CompanionService derives effective level + stat blocks at render time.
    // `grantedBy` is the durable link back to the granting class/template.

    addCompanion(
      state,
      action: PayloadAction<{
        instanceId: string;
        sourceEntryId: string;
        name: string;
        grantedBy: CompanionGrant;
        effectiveProgressionLevel: number;
      }>,
    ) {
      const { instanceId, sourceEntryId, name, grantedBy, effectiveProgressionLevel } =
        action.payload;
      const companion: CompanionInstance = {
        instanceId,
        sourceEntryId,
        name,
        grantedBy,
        effectiveProgressionLevel,
        abilityScoreOverrides: {},
        hdAbilityIncreases: [],
        hp: { max: 0, current: 0, temp: 0, nonlethal: 0 },
        appliedTemplates: [],
        feats: [],
        tricks: [],
        skillRanks: {},
        equipment: {
          armor: [],
          weapons: [],
          magicItems: [],
          gear: [],
          equippedSlots: {},
        },
        notes: '',
        background: '',
      };
      state.draft.companions.push(companion);
      state.isDirty = true;
    },

    removeCompanion(state, action: PayloadAction<string>) {
      const instanceId = action.payload;
      state.draft.companions = state.draft.companions.filter((c) => c.instanceId !== instanceId);
      state.isDirty = true;
    },

    renameCompanion(state, action: PayloadAction<{ instanceId: string; name: string }>) {
      const comp = state.draft.companions.find((c) => c.instanceId === action.payload.instanceId);
      if (comp) {
        comp.name = action.payload.name;
        state.isDirty = true;
      }
    },

    updateCompanionEffectiveLevel(
      state,
      action: PayloadAction<{ instanceId: string; effectiveProgressionLevel: number }>,
    ) {
      const comp = state.draft.companions.find((c) => c.instanceId === action.payload.instanceId);
      if (comp) {
        comp.effectiveProgressionLevel = action.payload.effectiveProgressionLevel;
        state.isDirty = true;
      }
    },

    // When a granting class changes ID (drag-reorder or class-replace), sweep
    // any companions whose grantedBy.classEntryId references the old ID. Kept
    // internal-ish — only the migration helpers + integration tests call it.
    removeCompanionsGrantedByClass(state, action: PayloadAction<string>) {
      const classId = action.payload;
      const before = state.draft.companions.length;
      state.draft.companions = state.draft.companions.filter(
        (c) => !(c.grantedBy.type === 'class' && c.grantedBy.classEntryId === classId),
      );
      if (state.draft.companions.length !== before) state.isDirty = true;
    },

    // Set or clear a single ability score override on a companion. Pass
    // `value: undefined` (via omitting or JSON null) to clear; any number sets.
    setCompanionAbilityOverride(
      state,
      action: PayloadAction<{
        instanceId: string;
        ability: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';
        value: number | null;
      }>,
    ) {
      const comp = state.draft.companions.find((c) => c.instanceId === action.payload.instanceId);
      if (!comp) return;
      const { ability, value } = action.payload;
      if (value === null) {
        delete comp.abilityScoreOverrides[ability];
      } else {
        comp.abilityScoreOverrides[ability] = value;
      }
      state.isDirty = true;
    },

    setCompanionHP(
      state,
      action: PayloadAction<{
        instanceId: string;
        field: 'max' | 'current' | 'temp' | 'nonlethal';
        value: number;
      }>,
    ) {
      const comp = state.draft.companions.find((c) => c.instanceId === action.payload.instanceId);
      if (!comp) return;
      comp.hp[action.payload.field] = action.payload.value;
      state.isDirty = true;
    },

    // Swap the companion form (e.g. Druid Nature Bond changes from Wolf to
    // Leopard). Preserves overrides, feats, templates, tricks, and name.
    // Player can manually reset overrides if the new form's base stats make
    // them stale.
    swapCompanionForm(state, action: PayloadAction<{ instanceId: string; sourceEntryId: string }>) {
      const comp = state.draft.companions.find((c) => c.instanceId === action.payload.instanceId);
      if (!comp) return;
      comp.sourceEntryId = action.payload.sourceEntryId;
      state.isDirty = true;
    },

    setCompanionNotes(state, action: PayloadAction<{ instanceId: string; notes: string }>) {
      const comp = state.draft.companions.find((c) => c.instanceId === action.payload.instanceId);
      if (!comp) return;
      comp.notes = action.payload.notes;
      state.isDirty = true;
    },

    // Phase 1.6: companion feats. Slots are derived from effective level via
    // CompanionService.computeFeatSlots; the slice just owns the assigned list.
    // Duplicate featIds are allowed (e.g. Toughness) so the UI can stack them.
    addCompanionFeat(state, action: PayloadAction<{ instanceId: string; feat: CompanionFeat }>) {
      const comp = state.draft.companions.find((c) => c.instanceId === action.payload.instanceId);
      if (!comp) return;
      comp.feats.push(action.payload.feat);
      state.isDirty = true;
    },

    // Removes the feat at a specific index so duplicates (e.g. two Toughness
    // picks) can be removed independently.
    removeCompanionFeatAt(state, action: PayloadAction<{ instanceId: string; index: number }>) {
      const comp = state.draft.companions.find((c) => c.instanceId === action.payload.instanceId);
      if (!comp) return;
      const { index } = action.payload;
      if (index < 0 || index >= comp.feats.length) return;
      comp.feats.splice(index, 1);
      state.isDirty = true;
    },

    // Toggle a trick on/off. Tricks are a set; no duplicates. The UI enforces
    // the known-tricks cap, not the slice.
    toggleCompanionTrick(state, action: PayloadAction<{ instanceId: string; trick: TrickName }>) {
      const comp = state.draft.companions.find((c) => c.instanceId === action.payload.instanceId);
      if (!comp) return;
      const { trick } = action.payload;
      const idx = comp.tricks.indexOf(trick);
      if (idx === -1) comp.tricks.push(trick);
      else comp.tricks.splice(idx, 1);
      state.isDirty = true;
    },

    // Set skill ranks for a given skill. Passing 0 clears the key so the
    // companion's skillRanks map doesn't accumulate noise.
    setCompanionSkillRank(
      state,
      action: PayloadAction<{ instanceId: string; skill: string; ranks: number }>,
    ) {
      const comp = state.draft.companions.find((c) => c.instanceId === action.payload.instanceId);
      if (!comp) return;
      const { skill, ranks } = action.payload;
      if (ranks <= 0) {
        delete comp.skillRanks[skill];
      } else {
        comp.skillRanks[skill] = ranks;
      }
      state.isDirty = true;
    },

    // Phase 1.7: long-form narrative. Kept separate from `notes` (short
    // handler's memo on the Identity tab) so the two surfaces don't overwrite
    // each other and the Notes tab has room to breathe.
    setCompanionBackground(
      state,
      action: PayloadAction<{ instanceId: string; background: string }>,
    ) {
      const comp = state.draft.companions.find((c) => c.instanceId === action.payload.instanceId);
      if (!comp) return;
      comp.background = action.payload.background;
      state.isDirty = true;
    },

    setCompanionHDAbilityIncrease(
      state,
      action: PayloadAction<{
        instanceId: string;
        atLevel: number;
        ability: CompanionAbilityIncrease['ability'];
      }>,
    ) {
      const comp = state.draft.companions.find((c) => c.instanceId === action.payload.instanceId);
      if (!comp) return;
      const existing = comp.hdAbilityIncreases.find((i) => i.atLevel === action.payload.atLevel);
      if (existing) {
        existing.ability = action.payload.ability;
      } else {
        comp.hdAbilityIncreases.push({
          atLevel: action.payload.atLevel,
          ability: action.payload.ability,
        });
      }
      state.isDirty = true;
    },

    // Phase 1.7: applied templates. Companion-side mirror of the character's
    // template flow, but uses the canonical `AppliedTemplate` shape (plan
    // character-system-redesign.md § Template System Design). Removal and
    // update target by index to stay stable when a duplicate template is
    // applied (e.g. Half-Celestial + Half-Fiend on the same companion, or
    // two instances of the same HD-tiered template).
    addCompanionTemplate(
      state,
      action: PayloadAction<{ instanceId: string; template: AppliedTemplate }>,
    ) {
      const comp = state.draft.companions.find((c) => c.instanceId === action.payload.instanceId);
      if (!comp) return;
      comp.appliedTemplates.push(action.payload.template);
      state.isDirty = true;
    },

    removeCompanionTemplateAt(state, action: PayloadAction<{ instanceId: string; index: number }>) {
      const comp = state.draft.companions.find((c) => c.instanceId === action.payload.instanceId);
      if (!comp) return;
      const { index } = action.payload;
      if (index < 0 || index >= comp.appliedTemplates.length) return;
      comp.appliedTemplates.splice(index, 1);
      state.isDirty = true;
    },

    updateCompanionTemplateAt(
      state,
      action: PayloadAction<{
        instanceId: string;
        index: number;
        patch: Partial<AppliedTemplate>;
      }>,
    ) {
      const comp = state.draft.companions.find((c) => c.instanceId === action.payload.instanceId);
      if (!comp) return;
      const { index, patch } = action.payload;
      if (index < 0 || index >= comp.appliedTemplates.length) return;
      comp.appliedTemplates[index] = { ...comp.appliedTemplates[index], ...patch };
      state.isDirty = true;
    },

    // Phase 1.7: companion equipment. Scoped to wondrous/magic-item-style
    // slots — weapons, rods, staves, and wands require the canGrasp pathway
    // and are deferred to a follow-up. Equipping an item populates two
    // places at once: the magicItems array (authoritative list) and the
    // equippedSlots map (slot → instanceId lookup). Swapping in a new item
    // automatically unequips whatever was in the slot previously, which
    // keeps the map tidy and matches how the body-shape table works (one
    // item per slot; ring is a single slot in the companion table even
    // though characters track left/right separately).
    equipCompanionMagicItem(
      state,
      action: PayloadAction<{
        instanceId: string;
        slot: ItemSlot;
        item: CharacterMagicItem;
      }>,
    ) {
      const comp = state.draft.companions.find((c) => c.instanceId === action.payload.instanceId);
      if (!comp) return;
      const { slot, item } = action.payload;

      // Displace any existing item in this slot.
      const existingInstanceId = comp.equipment.equippedSlots[slot];
      if (existingInstanceId) {
        comp.equipment.magicItems = comp.equipment.magicItems.filter(
          (m) => m.instanceId !== existingInstanceId,
        );
      }

      // Ensure the new item carries the slot and equipped flag so downstream
      // readers don't have to cross-reference the record.
      const placed: CharacterMagicItem = {
        ...item,
        equipped: true,
        equippedSlot: slot === 'ring' ? 'ring_left' : (slot as Exclude<ItemSlot, 'ring'>),
      };
      comp.equipment.magicItems.push(placed);
      comp.equipment.equippedSlots[slot] = placed.instanceId;
      state.isDirty = true;
    },

    unequipCompanionMagicItem(
      state,
      action: PayloadAction<{ instanceId: string; slot: ItemSlot }>,
    ) {
      const comp = state.draft.companions.find((c) => c.instanceId === action.payload.instanceId);
      if (!comp) return;
      const { slot } = action.payload;
      const instanceIdInSlot = comp.equipment.equippedSlots[slot];
      if (!instanceIdInSlot) return;
      comp.equipment.magicItems = comp.equipment.magicItems.filter(
        (m) => m.instanceId !== instanceIdInSlot,
      );
      delete comp.equipment.equippedSlots[slot];
      state.isDirty = true;
    },

    toggleFavoredClass(state, action: PayloadAction<string>) {
      const target = state.draft.classes.find((c) => c.id === action.payload);
      if (!target) return;
      const wasAlreadyFavored = target.isFavoredClass;
      // Clear favored (and stale FCB data) on all classes first
      for (const cls of state.draft.classes) {
        if (cls.isFavoredClass) {
          cls.isFavoredClass = false;
          cls.favoredClassBonuses = undefined;
        }
      }
      // Toggle: if it wasn't favored, mark it favored; if it was, leave all unfavored
      if (!wasAlreadyFavored) {
        target.isFavoredClass = true;
        if (!target.favoredClassBonuses) {
          target.favoredClassBonuses = [];
        }
      } else {
        // Toggling OFF — clear stale bonus data so migrateDraft never sees
        // FCB data on a non-favored class.
        target.favoredClassBonuses = undefined;
      }
      state.isDirty = true;
    },

    setFavoredClassBonuses(
      state,
      action: PayloadAction<{ id: string; selections: FavoredClassBonusSelection[] }>,
    ) {
      const cls = state.draft.classes.find((c) => c.id === action.payload.id);
      if (cls) {
        cls.favoredClassBonuses = action.payload.selections.filter((s) => s.level <= cls.level);
        state.isDirty = true;
      }
    },

    reorderClasses(state, action: PayloadAction<string[]>) {
      // action.payload is ordered array of class ids
      const map = new Map(state.draft.classes.map((c) => [c.id, c]));
      state.draft.classes = action.payload
        .map((id) => map.get(id))
        .filter(Boolean) as typeof state.draft.classes;
      state.isDirty = true;
    },

    // ---- Templates ----

    addTemplate(state, action: PayloadAction<DraftTemplateEntry>) {
      state.draft.templates.push(action.payload);
      state.isDirty = true;
    },

    removeTemplate(state, action: PayloadAction<string>) {
      const removedId = action.payload;
      state.draft.templates = state.draft.templates.filter((t) => t.id !== removedId);

      // Sweep companions granted by this template.
      state.draft.companions = state.draft.companions.filter(
        (c) => !(c.grantedBy.type === 'template' && c.grantedBy.templateId === removedId),
      );

      state.isDirty = true;
    },

    updateTemplate(state, action: PayloadAction<DraftTemplateEntry>) {
      const idx = state.draft.templates.findIndex((t) => t.id === action.payload.id);
      if (idx >= 0) {
        state.draft.templates[idx] = action.payload;
        state.isDirty = true;
      }
    },

    reorderTemplates(state, action: PayloadAction<string[]>) {
      // action.payload is ordered array of template ids
      const map = new Map(state.draft.templates.map((t) => [t.id, t]));
      state.draft.templates = action.payload
        .map((id) => map.get(id))
        .filter(Boolean) as typeof state.draft.templates;
      state.isDirty = true;
    },

    setTemplateAcquiredAtECL(
      state,
      action: PayloadAction<{ id: string; acquiredAtECL: number | undefined }>,
    ) {
      const t = state.draft.templates.find((t) => t.id === action.payload.id);
      if (t) {
        t.acquiredAtECL = action.payload.acquiredAtECL;
        state.isDirty = true;
      }
    },

    // ---- Combat stats ----

    setCombatField(
      state,
      action: PayloadAction<{ field: keyof DraftCombatStats; value: number | undefined }>,
    ) {
      (state.draft.combat as Record<string, number | undefined>)[action.payload.field] =
        action.payload.value;
      state.isDirty = true;
    },

    // ---- Skills ----

    setSkillEntry(state, action: PayloadAction<{ skillKey: string; entry: DraftSkillEntry }>) {
      state.draft.skills[action.payload.skillKey] = action.payload.entry;
      state.isDirty = true;
    },

    removeSkillEntry(state, action: PayloadAction<string>) {
      if (action.payload in state.draft.skills) {
        delete state.draft.skills[action.payload];
        state.isDirty = true;
      }
    },

    // ---- Traits ----

    addTrait(state, action: PayloadAction<DraftTrait>) {
      state.draft.traits.push(action.payload);
      state.isDirty = true;
    },

    removeTrait(state, action: PayloadAction<string>) {
      state.draft.traits = state.draft.traits.filter((t) => t.id !== action.payload);
      state.isDirty = true;
    },

    // ---- Feats ----

    syncFeatSlots(state) {
      syncFeatSlotsFromClasses(state.draft);
      state.isDirty = true;
    },

    addFeatSlot(state, action: PayloadAction<DraftFeatSlot>) {
      state.draft.featSlots.push(action.payload);
      // Keep sorted by availableAtLevel
      state.draft.featSlots.sort((a, b) => a.availableAtLevel - b.availableAtLevel);
      state.isDirty = true;
    },

    removeFeatSlot(state, action: PayloadAction<string>) {
      state.draft.featSlots = state.draft.featSlots.filter((f) => f.id !== action.payload);
      state.isDirty = true;
    },

    assignFeat(state, action: PayloadAction<{ slotId: string; featId: string; featName: string }>) {
      const slot = state.draft.featSlots.find((f) => f.id === action.payload.slotId);
      if (slot) {
        slot.featId = action.payload.featId;
        slot.featName = action.payload.featName;
        state.isDirty = true;
      }
    },

    unassignFeat(state, action: PayloadAction<string>) {
      const slot = state.draft.featSlots.find((f) => f.id === action.payload);
      if (slot) {
        slot.featId = undefined;
        slot.featName = undefined;
        state.isDirty = true;
      }
    },

    toggleFeatPrereqOverride(state, action: PayloadAction<string>) {
      const slot = state.draft.featSlots.find((f) => f.id === action.payload);
      if (slot) {
        slot.prereqOverride = !slot.prereqOverride;
        state.isDirty = true;
      }
    },

    // ---- Spellcasting ----

    addSpellcastingPool(state, action: PayloadAction<DraftSpellcastingPool>) {
      state.draft.spellcastingPools.push(action.payload);
      state.isDirty = true;
    },

    removeSpellcastingPool(state, action: PayloadAction<string>) {
      state.draft.spellcastingPools = state.draft.spellcastingPools.filter(
        (p) => p.id !== action.payload,
      );
      state.isDirty = true;
    },

    updatePoolCastingAbility(
      state,
      action: PayloadAction<{ poolId: string; ability: AbilityKey }>,
    ) {
      const pool = state.draft.spellcastingPools.find((p) => p.id === action.payload.poolId);
      if (pool) {
        pool.castingAbility = action.payload.ability;
        state.isDirty = true;
      }
    },

    setSpellsPerDayMisc(
      state,
      action: PayloadAction<{ poolId: string; spellLevel: number; value: number }>,
    ) {
      const pool = state.draft.spellcastingPools.find((p) => p.id === action.payload.poolId);
      if (pool) {
        pool.spellsPerDayMisc[action.payload.spellLevel] = action.payload.value;
        state.isDirty = true;
      }
    },

    // ---- Equipment ----

    addEquipment(state, action: PayloadAction<DraftEquipmentItem>) {
      state.draft.equipment.push(action.payload);
      syncEnhancementBonuses(state);
      state.isDirty = true;
    },

    removeEquipment(state, action: PayloadAction<string>) {
      state.draft.equipment = state.draft.equipment.filter((e) => e.id !== action.payload);
      syncEnhancementBonuses(state);
      state.isDirty = true;
    },

    updateEquipment(state, action: PayloadAction<DraftEquipmentItem>) {
      const idx = state.draft.equipment.findIndex((e) => e.id === action.payload.id);
      if (idx >= 0) {
        state.draft.equipment[idx] = action.payload;
        syncEnhancementBonuses(state);
        state.isDirty = true;
      }
    },

    assignEquipmentSlot(state, action: PayloadAction<{ id: string; slot: DraftEquippedSlot }>) {
      const item = state.draft.equipment.find((e) => e.id === action.payload.id);
      if (item) {
        item.slot = action.payload.slot;
        item.containerId = undefined;
        syncEnhancementBonuses(state);
        state.isDirty = true;
      }
    },

    unassignEquipmentSlot(state, action: PayloadAction<string>) {
      const item = state.draft.equipment.find((e) => e.id === action.payload);
      if (item) {
        item.slot = undefined;
        syncEnhancementBonuses(state);
        state.isDirty = true;
      }
    },

    assignEquipmentContainer(state, action: PayloadAction<{ id: string; containerId: string }>) {
      const item = state.draft.equipment.find((e) => e.id === action.payload.id);
      if (item) {
        item.containerId = action.payload.containerId;
        item.slot = undefined;
        state.isDirty = true;
      }
    },

    // ---- Eidolons ----

    addEidolon(
      state,
      action: PayloadAction<{
        classEntryId: string;
        edition: EidolonEdition;
        baseForm: EidolonForm;
        subtype?: EidolonSubtype;
        name?: string;
      }>,
    ) {
      // Make sure the owner class entry exists.
      const owner = state.draft.classes.find((c) => c.id === action.payload.classEntryId);
      if (!owner) return;
      const id = `eidolon-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
      const newEidolon: DraftEidolon = {
        id,
        name: action.payload.name?.trim() || 'Eidolon',
        summonerClassEntryId: action.payload.classEntryId,
        edition: action.payload.edition,
        baseForm: action.payload.baseForm,
        subtype: action.payload.subtype,
        selectedEvolutions: [],
      };
      state.draft.eidolons.push(newEidolon);
      state.isDirty = true;
    },

    removeEidolon(state, action: PayloadAction<string>) {
      const before = state.draft.eidolons.length;
      state.draft.eidolons = state.draft.eidolons.filter((e) => e.id !== action.payload);
      if (state.draft.eidolons.length !== before) state.isDirty = true;
    },

    renameEidolon(state, action: PayloadAction<{ eidolonId: string; name: string }>) {
      const eid = state.draft.eidolons.find((e) => e.id === action.payload.eidolonId);
      if (eid) {
        eid.name = action.payload.name;
        state.isDirty = true;
      }
    },

    setEidolonBaseForm(
      state,
      action: PayloadAction<{
        eidolonId: string;
        baseForm: EidolonForm;
        removeEvolutionInstanceIds?: string[];
      }>,
    ) {
      const eid = state.draft.eidolons.find((e) => e.id === action.payload.eidolonId);
      if (!eid) return;
      eid.baseForm = action.payload.baseForm;
      if (
        action.payload.removeEvolutionInstanceIds &&
        action.payload.removeEvolutionInstanceIds.length > 0
      ) {
        const toRemove = new Set(action.payload.removeEvolutionInstanceIds);
        eid.selectedEvolutions = eid.selectedEvolutions.filter((s) => !toRemove.has(s.instanceId));
      }
      state.isDirty = true;
    },

    setEidolonSubtype(
      state,
      action: PayloadAction<{
        eidolonId: string;
        subtype: EidolonSubtype | undefined;
        removeEvolutionInstanceIds?: string[];
      }>,
    ) {
      const eid = state.draft.eidolons.find((e) => e.id === action.payload.eidolonId);
      if (!eid) return;
      eid.subtype = action.payload.subtype;
      if (
        action.payload.removeEvolutionInstanceIds &&
        action.payload.removeEvolutionInstanceIds.length > 0
      ) {
        const toRemove = new Set(action.payload.removeEvolutionInstanceIds);
        eid.selectedEvolutions = eid.selectedEvolutions.filter((s) => !toRemove.has(s.instanceId));
      }
      state.isDirty = true;
    },

    addSelectedEvolution(
      state,
      action: PayloadAction<{
        eidolonId: string;
        evolutionId: string;
        metadata?: SelectedEvolutionMetadata;
      }>,
    ) {
      const eid = state.draft.eidolons.find((e) => e.id === action.payload.eidolonId);
      if (!eid) return;
      // Defense-in-depth: 30 is far beyond any real EP budget (largest pool ~30 at
      // level 20 with all extras, but every evolution costs at least 1 pt, so
      // ≥ 30 selections is impossible in a valid character).
      if (eid.selectedEvolutions.length >= 30) return;
      const instanceId = `evo-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
      eid.selectedEvolutions.push({
        instanceId,
        evolutionId: action.payload.evolutionId,
        metadata: action.payload.metadata,
      });
      state.isDirty = true;
    },

    removeSelectedEvolution(
      state,
      action: PayloadAction<{ eidolonId: string; instanceId: string }>,
    ) {
      const eid = state.draft.eidolons.find((e) => e.id === action.payload.eidolonId);
      if (!eid) return;
      const before = eid.selectedEvolutions.length;
      eid.selectedEvolutions = eid.selectedEvolutions.filter(
        (s) => s.instanceId !== action.payload.instanceId,
      );
      if (eid.selectedEvolutions.length !== before) state.isDirty = true;
    },

    updateEvolutionMetadata(
      state,
      action: PayloadAction<{
        eidolonId: string;
        instanceId: string;
        metadata?: SelectedEvolutionMetadata;
      }>,
    ) {
      const eid = state.draft.eidolons.find((e) => e.id === action.payload.eidolonId);
      if (!eid) return;
      const sel = eid.selectedEvolutions.find((s) => s.instanceId === action.payload.instanceId);
      if (sel) {
        sel.metadata = action.payload.metadata;
        state.isDirty = true;
      }
    },

    setEidolonPoolOverride(
      state,
      action: PayloadAction<
        { eidolonId: string; clear: true } | { eidolonId: string; value: number; note: string }
      >,
    ) {
      const eid = state.draft.eidolons.find((e) => e.id === action.payload.eidolonId);
      if (!eid) return;
      if ('clear' in action.payload) {
        eid.poolOverride = undefined;
      } else {
        eid.poolOverride = { value: action.payload.value, note: action.payload.note };
      }
      state.isDirty = true;
    },

    // ---- Broodmaster shared evolutions (live on the DraftClassEntry) ----

    setBroodmasterShared(
      state,
      action: PayloadAction<{
        classEntryId: string;
        evolutionId: string;
        metadata?: SelectedEvolutionMetadata;
      }>,
    ) {
      const cls = state.draft.classes.find((c) => c.id === action.payload.classEntryId);
      if (!cls) return;
      if (!cls.summonerBroodmaster) {
        cls.summonerBroodmaster = { sharedEvolutions: [] };
      }
      const instanceId = `brood-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
      cls.summonerBroodmaster.sharedEvolutions.push({
        instanceId,
        evolutionId: action.payload.evolutionId,
        metadata: action.payload.metadata,
      });
      state.isDirty = true;
    },

    removeBroodmasterShared(
      state,
      action: PayloadAction<{ classEntryId: string; instanceId: string }>,
    ) {
      const cls = state.draft.classes.find((c) => c.id === action.payload.classEntryId);
      if (!cls?.summonerBroodmaster) return;
      const before = cls.summonerBroodmaster.sharedEvolutions.length;
      cls.summonerBroodmaster.sharedEvolutions = cls.summonerBroodmaster.sharedEvolutions.filter(
        (s) => s.instanceId !== action.payload.instanceId,
      );
      if (cls.summonerBroodmaster.sharedEvolutions.length !== before) state.isDirty = true;
    },

    // ---- Aspect / Greater Aspect (live on the DraftEidolon) ----

    setAspectDivert(state, action: PayloadAction<{ eidolonId: string; divertedPoints: number }>) {
      const eid = state.draft.eidolons.find((e) => e.id === action.payload.eidolonId);
      if (!eid) return;
      if (!eid.aspectTransfer) {
        eid.aspectTransfer = { divertedPoints: 0, summonerEvolutions: [] };
      }
      // Clamp to [0, 6]. The absolute maximum is 6 (Greater Aspect at L18).
      // Aspect (L10) caps at 2, but the UI enforces that; the reducer uses the
      // game-wide ceiling so it remains valid for both abilities without knowing
      // which one the summoner has.
      eid.aspectTransfer.divertedPoints = Math.min(6, Math.max(0, action.payload.divertedPoints));
      state.isDirty = true;
    },

    addSummonerAspectEvolution(
      state,
      action: PayloadAction<{
        eidolonId: string;
        evolutionId: string;
        metadata?: SelectedEvolutionMetadata;
      }>,
    ) {
      const eid = state.draft.eidolons.find((e) => e.id === action.payload.eidolonId);
      if (!eid) return;
      if (!eid.aspectTransfer) {
        eid.aspectTransfer = { divertedPoints: 0, summonerEvolutions: [] };
      }
      const instanceId = `asp-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
      eid.aspectTransfer.summonerEvolutions.push({
        instanceId,
        evolutionId: action.payload.evolutionId,
        metadata: action.payload.metadata,
      });
      state.isDirty = true;
    },

    removeSummonerAspectEvolution(
      state,
      action: PayloadAction<{ eidolonId: string; instanceId: string }>,
    ) {
      const eid = state.draft.eidolons.find((e) => e.id === action.payload.eidolonId);
      if (!eid?.aspectTransfer) return;
      const before = eid.aspectTransfer.summonerEvolutions.length;
      eid.aspectTransfer.summonerEvolutions = eid.aspectTransfer.summonerEvolutions.filter(
        (s) => s.instanceId !== action.payload.instanceId,
      );
      if (eid.aspectTransfer.summonerEvolutions.length !== before) state.isDirty = true;
    },

    // ---- Notes ----

    setCharacterNotes(state, action: PayloadAction<string>) {
      state.draft.characterNotes = action.payload;
      state.isDirty = true;
    },

    setCampaignNotes(state, action: PayloadAction<string>) {
      state.draft.campaignNotes = action.payload;
      state.isDirty = true;
    },
  },
});

export const {
  loadCharacter,
  resetDraft,
  setActiveTab,
  markDirty,
  setValidationWarnings,
  acknowledgeWarning,
  clearValidation,
  setName,
  setPlayer,
  setRace,
  setRacialFlexAbility,
  setAlignment,
  setDeity,
  setGender,
  setAge,
  setHeight,
  setWeight,
  setHair,
  setEyes,
  setSkin,
  setBackground,
  setPortrait,
  setAbilityField,
  addOtherBonus,
  removeOtherBonus,
  updateOtherBonus,
  setLevelIncrementAbility,
  setLevelIncrementSlots,
  addClass,
  removeClass,
  updateClassLevel,
  updateClassArchetype,
  updateClassSpellcastingAdvancement,
  upsertClassChoice,
  toggleClassPrereqOverride,
  addCompanion,
  removeCompanion,
  renameCompanion,
  updateCompanionEffectiveLevel,
  removeCompanionsGrantedByClass,
  setCompanionAbilityOverride,
  setCompanionHP,
  swapCompanionForm,
  setCompanionNotes,
  addCompanionFeat,
  removeCompanionFeatAt,
  toggleCompanionTrick,
  setCompanionSkillRank,
  setCompanionBackground,
  setCompanionHDAbilityIncrease,
  addCompanionTemplate,
  removeCompanionTemplateAt,
  updateCompanionTemplateAt,
  equipCompanionMagicItem,
  unequipCompanionMagicItem,
  toggleFavoredClass,
  setFavoredClassBonuses,
  reorderClasses,
  addTemplate,
  removeTemplate,
  updateTemplate,
  reorderTemplates,
  setTemplateAcquiredAtECL,
  setCombatField,
  setSkillEntry,
  removeSkillEntry,
  addTrait,
  removeTrait,
  syncFeatSlots,
  addFeatSlot,
  removeFeatSlot,
  assignFeat,
  unassignFeat,
  toggleFeatPrereqOverride,
  addSpellcastingPool,
  removeSpellcastingPool,
  updatePoolCastingAbility,
  setSpellsPerDayMisc,
  addEquipment,
  removeEquipment,
  updateEquipment,
  assignEquipmentSlot,
  unassignEquipmentSlot,
  assignEquipmentContainer,
  addEidolon,
  removeEidolon,
  renameEidolon,
  setEidolonBaseForm,
  setEidolonSubtype,
  addSelectedEvolution,
  removeSelectedEvolution,
  updateEvolutionMetadata,
  setEidolonPoolOverride,
  setBroodmasterShared,
  removeBroodmasterShared,
  setAspectDivert,
  addSummonerAspectEvolution,
  removeSummonerAspectEvolution,
  setCharacterNotes,
  setCampaignNotes,
} = characterEntrySlice.actions;

export default characterEntrySlice.reducer;
