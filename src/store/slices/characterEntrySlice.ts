import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Alignment } from '@/types/base';
import { ClassChoice } from '@/types/classes';
import {
  type AbilityKey,
  type CharacterDraft,
  type DraftAbilityScore,
  type DraftClassEntry,
  type DraftTemplateEntry,
  type DraftFeatSlot,
  type DraftSkillEntry,
  type DraftTrait,
  type DraftSpellcastingPool,
  type DraftWeapon,
  type DraftArmor,
  type DraftMagicItem,
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
  other: 0,
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
  levelIncrementSlots: [],
  classes: [],
  templates: [],
  combat: blankCombat,
  skills: {},
  traits: [],
  featSlots: [],
  spellcastingPools: [],
  weapons: [],
  armor: [],
  magicItems: [],
  characterNotes: '',
  campaignNotes: '',
};

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
      }>,
    ) {
      state.draft.raceId = action.payload.raceId;
      state.draft.raceName = action.payload.raceName;
      // Apply racial bonuses to ability scores (clear old ones first)
      const keys: AbilityKey[] = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
      keys.forEach((k) => {
        state.draft.abilities[k].racial = action.payload.racialBonuses[k] ?? 0;
      });
      state.isDirty = true;
    },

    setAlignment(state, action: PayloadAction<Alignment>) {
      state.draft.alignment = action.payload;
      state.isDirty = true;
    },

    setDeity(state, action: PayloadAction<string>) {
      state.draft.deity = action.payload;
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
      action: PayloadAction<{ ability: AbilityKey; field: keyof DraftAbilityScore; value: number }>,
    ) {
      state.draft.abilities[action.payload.ability][action.payload.field] = action.payload.value;
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
      state.isDirty = true;
    },

    removeClass(state, action: PayloadAction<string>) {
      state.draft.classes = state.draft.classes.filter((c) => c.id !== action.payload);
      state.isDirty = true;
    },

    updateClassLevel(state, action: PayloadAction<{ id: string; level: number }>) {
      const cls = state.draft.classes.find((c) => c.id === action.payload.id);
      if (cls) {
        cls.level = action.payload.level;
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

    upsertClassChoice(state, action: PayloadAction<{ classId: string; choice: ClassChoice }>) {
      const cls = state.draft.classes.find((c) => c.id === action.payload.classId);
      if (cls) {
        const idx = cls.classChoices.findIndex(
          (ch) =>
            ch.featureName === action.payload.choice.featureName &&
            ch.takenAtLevel === action.payload.choice.takenAtLevel,
        );
        if (idx >= 0) {
          cls.classChoices[idx] = action.payload.choice;
        } else {
          cls.classChoices.push(action.payload.choice);
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

    addWeapon(state, action: PayloadAction<DraftWeapon>) {
      state.draft.weapons.push(action.payload);
      state.isDirty = true;
    },

    removeWeapon(state, action: PayloadAction<string>) {
      state.draft.weapons = state.draft.weapons.filter((w) => w.id !== action.payload);
      state.isDirty = true;
    },

    updateWeapon(state, action: PayloadAction<DraftWeapon>) {
      const idx = state.draft.weapons.findIndex((w) => w.id === action.payload.id);
      if (idx >= 0) {
        state.draft.weapons[idx] = action.payload;
        state.isDirty = true;
      }
    },

    addArmor(state, action: PayloadAction<DraftArmor>) {
      state.draft.armor.push(action.payload);
      state.isDirty = true;
    },

    removeArmor(state, action: PayloadAction<string>) {
      state.draft.armor = state.draft.armor.filter((a) => a.id !== action.payload);
      state.isDirty = true;
    },

    updateArmor(state, action: PayloadAction<DraftArmor>) {
      const idx = state.draft.armor.findIndex((a) => a.id === action.payload.id);
      if (idx >= 0) {
        state.draft.armor[idx] = action.payload;
        state.isDirty = true;
      }
    },

    addMagicItem(state, action: PayloadAction<DraftMagicItem>) {
      state.draft.magicItems.push(action.payload);
      state.isDirty = true;
    },

    removeMagicItem(state, action: PayloadAction<string>) {
      state.draft.magicItems = state.draft.magicItems.filter((m) => m.id !== action.payload);
      state.isDirty = true;
    },

    updateMagicItem(state, action: PayloadAction<DraftMagicItem>) {
      const idx = state.draft.magicItems.findIndex((m) => m.id === action.payload.id);
      if (idx >= 0) {
        state.draft.magicItems[idx] = action.payload;
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
  setCombatField,
  setSkillEntry,
  addTrait,
  removeTrait,
  addFeatSlot,
  removeFeatSlot,
  assignFeat,
  unassignFeat,
  toggleFeatPrereqOverride,
  addSpellcastingPool,
  removeSpellcastingPool,
  updatePoolCastingAbility,
  setSpellsPerDayMisc,
  addWeapon,
  removeWeapon,
  updateWeapon,
  addArmor,
  removeArmor,
  updateArmor,
  addMagicItem,
  removeMagicItem,
  updateMagicItem,
  setCharacterNotes,
  setCampaignNotes,
} = characterEntrySlice.actions;

export default characterEntrySlice.reducer;
