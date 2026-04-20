import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Alignment } from '@/types/base';
import { ClassChoice } from '@/types/classes';
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
} from '@/types/characterDraft';

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
      state.draft = action.payload.draft;
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

    addOtherBonus(
      state,
      action: PayloadAction<{ ability: AbilityKey; bonus: DraftTypedBonus }>,
    ) {
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
      state.draft.classes = state.draft.classes.filter((c) => c.id !== action.payload);
      syncFeatSlotsFromClasses(state.draft);
      state.isDirty = true;
    },

    updateClassLevel(state, action: PayloadAction<{ id: string; level: number }>) {
      const cls = state.draft.classes.find((c) => c.id === action.payload.id);
      if (cls) {
        cls.level = action.payload.level;
        syncFeatSlotsFromClasses(state.draft);
        state.isDirty = true;
      }
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
      state.draft.templates = state.draft.templates.filter((t) => t.id !== action.payload);
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
  reorderClasses,
  addTemplate,
  removeTemplate,
  updateTemplate,
  reorderTemplates,
  setTemplateAcquiredAtECL,
  setCombatField,
  setSkillEntry,
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
  setCharacterNotes,
  setCampaignNotes,
} = characterEntrySlice.actions;

export default characterEntrySlice.reducer;
