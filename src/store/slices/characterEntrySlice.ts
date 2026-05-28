import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Alignment, BonusType } from '@/types/base';
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
import type { AbilityKey } from '@/types/abilities';
import type { Character, ManualAbilityBonus } from '@/types';
import type { LevelIncrementSlot } from '@/types/character';
import type { CharacterFeat, Feats } from '@/types/feats';
import type { ClassEntry, CharacterClasses, FavoredClassBonusSelection } from '@/types/classes';
import type { CharacterTrait } from '@/types/traits';
import type { SpellcastingAdvancement, SpellcastingPool } from '@/types/spells';
import type { EditorEquipmentItem, EditorEquippedSlot } from '@/types/character';
import type {
  DraftEidolon,
  EidolonEdition,
  EidolonForm,
  EidolonSubtype,
  SelectedEvolutionMetadata,
} from '@/types/eidolon';
import { CharacterService } from '@/services/CharacterService';
import { computeCompanionEffectiveLevel } from '@/services/CompanionService';

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

// ---- Feat slot helpers ----

// Canonical source string format: "{source}_{level}" e.g. "level_3", "racial_1"
function makeFeatSource(source: 'racial' | 'level' | 'bonus' | 'mythic', level: number): string {
  return `${source}_${level}`;
}

function syncFeatSlotsFromClasses(character: Character): void {
  const raceName = character.info.race?.name ?? '';
  const generated = computeFeatSlots(character.classes.classes, raceName);

  // Build set of (source, level) pairs already in character feats
  const existingKeys = new Set(character.feats.feats.map((f) => `${f.source}_${f.grantedAtLevel}`));

  for (const slot of generated) {
    const key = `${slot.source}_${slot.availableAtLevel}`;
    if (existingKeys.has(key)) continue;
    // Add an "empty" feat entry as a placeholder slot marker
    // We only add truly new slots (not already in feats.feats)
    character.feats.feats.push({
      featId: '',
      name: '',
      source: makeFeatSource(slot.source, slot.availableAtLevel),
      grantedAtLevel: slot.availableAtLevel,
      active: true,
      choices: {},
    });
  }
  // Slots are computed on read — we just need to ensure assigned feats stay in sync.
  // Remove feat entries whose slots no longer exist
  const validKeys = new Set(generated.map((s) => `${s.source}_${s.availableAtLevel}`));
  character.feats.feats = character.feats.feats.filter((f) => {
    if (!f.featId) return false; // Remove empty placeholders
    // f.source is already the full key e.g. "level_3" — compare directly
    return validKeys.has(f.source) || f.source.startsWith('bonus_'); // Keep bonus feats regardless
  });
}

function syncLevelIncrementSlots(character: Character): void {
  const totalHD = character.classes.classes.reduce((sum, c) => sum + c.level, 0);
  const existing = character.levelIncrementSlots;
  const updated: LevelIncrementSlot[] = [];
  for (let hd = 4; hd <= totalHD; hd += 4) {
    const prev = existing.find((s) => s.atHD === hd);
    updated.push({ atHD: hd, ability: prev?.ability ?? null });
  }
  character.levelIncrementSlots = updated;
  // Recount levelIncrements on each ability score from the (possibly pruned) slots
  for (const key of ['str', 'dex', 'con', 'int', 'wis', 'cha'] as AbilityKey[]) {
    character.abilityScores[key].levelIncrements = updated.filter((s) => s.ability === key).length;
  }
}

const ABILITY_KEYS: AbilityKey[] = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

function syncEnhancementBonuses(character: Character): void {
  for (const key of ABILITY_KEYS) character.abilityScores[key].bonuses.enhancement = [];
  const accumulated: Partial<Record<AbilityKey, number[]>> = {};
  for (const item of character.editorEquipment ?? []) {
    if (item.slot && item.abilityScoreBonuses) {
      for (const [ab, val] of Object.entries(item.abilityScoreBonuses)) {
        (accumulated[ab as AbilityKey] ??= []).push(val as number);
      }
    }
  }
  for (const [ab, vals] of Object.entries(accumulated)) {
    const maxVal = Math.max(...(vals as number[]));
    character.abilityScores[ab as AbilityKey].bonuses.enhancement = [
      { value: maxVal, source: 'equipment', type: BonusType.ENHANCEMENT },
    ];
  }
}

// ---- Slice state ----

interface CharacterEntryState {
  character: Character;
  mode: EntryMode;
  activeTab: EntryTabKey;
  isDirty: boolean;
  isSaving: boolean;
  saveError: string | null;
  originalCharacterId: string | null;
  lastValidatedAt: number | null;
  validationWarnings: EntryValidationWarning[];
}

const initialState: CharacterEntryState = {
  character: CharacterService.createBlankCharacter(),
  mode: 'new',
  activeTab: 'identity',
  isDirty: false,
  isSaving: false,
  saveError: null,
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
      action: PayloadAction<{ character: Character; mode: EntryMode; characterId?: string }>,
    ) {
      state.character = action.payload.character;
      state.mode = action.payload.mode;
      state.originalCharacterId = action.payload.characterId ?? null;
      state.activeTab = 'identity';
      state.isDirty = false;
      state.isSaving = false;
      state.saveError = null;
      state.lastValidatedAt = null;
      state.validationWarnings = [];
    },

    resetDraft(state) {
      state.character = CharacterService.createBlankCharacter();
      state.mode = 'new';
      state.activeTab = 'identity';
      state.isDirty = false;
      state.isSaving = false;
      state.saveError = null;
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

    setSaving(state, action: PayloadAction<boolean>) {
      state.isSaving = action.payload;
    },

    setSaveError(state, action: PayloadAction<string | null>) {
      state.saveError = action.payload;
    },

    // Applied by the recalculate middleware — do NOT trigger another recalc
    applyComputedStats(state, action: PayloadAction<Character>) {
      state.character = action.payload;
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
      state.character.info.name = action.payload;
      state.isDirty = true;
    },

    setPlayer(state, action: PayloadAction<string>) {
      state.character.info.player = action.payload;
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
      // Update race info on CharacterInfo
      state.character.info.race = {
        ...state.character.info.race,
        name: action.payload.raceName,
        abilityModifiers: action.payload.racialBonuses as Record<string, number>,
      };
      state.character.info.racialFlexBonus = action.payload.hasFlexBonus ?? false;
      if (!action.payload.hasFlexBonus) {
        state.character.info.racialFlexAbility = undefined;
      }
      // Apply racial bonuses to ability scores (clear old ones first)
      const keys: AbilityKey[] = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
      keys.forEach((k) => {
        state.character.abilityScores[k].racial = action.payload.racialBonuses[k] ?? 0;
      });
      syncFeatSlotsFromClasses(state.character);
      state.isDirty = true;
    },

    setRacialFlexAbility(state, action: PayloadAction<AbilityKey>) {
      const prev = state.character.info.racialFlexAbility;
      const next = action.payload;
      if (prev && prev !== next) {
        state.character.abilityScores[prev].racial = 0;
      }
      state.character.abilityScores[next].racial = 2;
      state.character.info.racialFlexAbility = next;
      state.isDirty = true;
    },

    setAlignment(state, action: PayloadAction<Alignment>) {
      state.character.info.alignment = action.payload;
      state.isDirty = true;
    },

    setDeity(state, action: PayloadAction<string>) {
      const previousDeity = state.character.info.deity;
      state.character.info.deity = action.payload;
      // Clear stale domain selections when deity changes
      if (previousDeity !== action.payload) {
        for (const cls of state.character.classes.classes) {
          if (cls.classChoices) {
            cls.classChoices = cls.classChoices.filter((c) => c.featureName !== 'Domain');
          }
        }
      }
      state.isDirty = true;
    },

    setGender(state, action: PayloadAction<string>) {
      state.character.info.gender = action.payload;
      state.isDirty = true;
    },

    setAge(state, action: PayloadAction<string>) {
      state.character.info.age = parseInt(action.payload, 10) || 0;
      state.isDirty = true;
    },

    setHeight(state, action: PayloadAction<string>) {
      state.character.info.height = action.payload;
      state.isDirty = true;
    },

    setWeight(state, action: PayloadAction<string>) {
      state.character.info.weight = action.payload;
      state.isDirty = true;
    },

    setHair(state, action: PayloadAction<string>) {
      state.character.info.hair = action.payload;
      state.isDirty = true;
    },

    setEyes(state, action: PayloadAction<string>) {
      state.character.info.eyes = action.payload;
      state.isDirty = true;
    },

    setSkin(state, action: PayloadAction<string>) {
      state.character.info.skin = action.payload;
      state.isDirty = true;
    },

    setBackground(state, action: PayloadAction<string>) {
      state.character.info.background = action.payload;
      state.isDirty = true;
    },

    setPortrait(state, action: PayloadAction<string>) {
      state.character.info.portrait = action.payload;
      state.isDirty = true;
    },

    // ---- Abilities ----

    setAbilityBase(state, action: PayloadAction<{ ability: AbilityKey; value: number }>) {
      state.character.abilityScores[action.payload.ability].base = action.payload.value;
      state.isDirty = true;
    },

    setAbilityInherent(state, action: PayloadAction<{ ability: AbilityKey; value: number }>) {
      state.character.abilityScores[action.payload.ability].inherent = action.payload.value;
      state.isDirty = true;
    },

    addOtherBonus(state, action: PayloadAction<ManualAbilityBonus>) {
      if (!state.character.manualAbilityBonuses) state.character.manualAbilityBonuses = [];
      state.character.manualAbilityBonuses.push(action.payload);
      state.isDirty = true;
    },

    removeOtherBonus(state, action: PayloadAction<{ ability: AbilityKey; index: number }>) {
      if (!state.character.manualAbilityBonuses) return;
      const { ability, index } = action.payload;
      // Compute the global index by counting how many items before it match the ability.
      // This avoids indexOf (object identity), which can delete the wrong entry in Immer
      // when two bonuses have identical field values.
      let abilityCount = 0;
      const globalIndex = state.character.manualAbilityBonuses.findIndex((b) => {
        if (b.ability !== ability) return false;
        if (abilityCount === index) return true;
        abilityCount++;
        return false;
      });
      if (globalIndex !== -1) state.character.manualAbilityBonuses.splice(globalIndex, 1);
      state.isDirty = true;
    },

    updateOtherBonus(
      state,
      action: PayloadAction<{ ability: AbilityKey; index: number } & ManualAbilityBonus>,
    ) {
      if (!state.character.manualAbilityBonuses) return;
      const { ability, index } = action.payload;
      // Compute the global index by counting how many items before it match the ability.
      // This avoids indexOf (object identity), which can update the wrong entry in Immer
      // when two bonuses have identical field values.
      let abilityCount = 0;
      const globalIndex = state.character.manualAbilityBonuses.findIndex((b) => {
        if (b.ability !== ability) return false;
        if (abilityCount === index) return true;
        abilityCount++;
        return false;
      });
      if (globalIndex === -1) return;
      state.character.manualAbilityBonuses[globalIndex] = {
        ability: action.payload.ability,
        bonusType: action.payload.bonusType,
        value: action.payload.value,
        source: action.payload.source,
      };
      state.isDirty = true;
    },

    setLevelIncrementAbility(
      state,
      action: PayloadAction<{ atHD: number; ability: AbilityKey | null }>,
    ) {
      const slot = state.character.levelIncrementSlots.find((s) => s.atHD === action.payload.atHD);
      if (slot) {
        slot.ability = action.payload.ability;
        // Recalculate levelIncrements counts on all abilities
        const keys: AbilityKey[] = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
        keys.forEach((k) => {
          state.character.abilityScores[k].levelIncrements =
            state.character.levelIncrementSlots.filter((s) => s.ability === k).length;
        });
      }
      state.isDirty = true;
    },

    setLevelIncrementSlots(state, action: PayloadAction<LevelIncrementSlot[]>) {
      state.character.levelIncrementSlots = action.payload;
      state.isDirty = true;
    },

    // ---- Classes ----

    addClass(state, action: PayloadAction<ClassEntry>) {
      // Ensure every class entry has a stable id so reducers can target it
      // reliably. Without this guarantee, gestalt builds with two classes of
      // the same name would silently collide on the name-based fallback.
      if (!action.payload.id) {
        action.payload.id = Math.random().toString(36).slice(2) + Date.now().toString(36);
      }
      state.character.classes.classes.push(action.payload);
      state.character.classes.totalLevel = state.character.classes.classes.reduce(
        (sum, c) => sum + c.level,
        0,
      );
      if (state.character.classes.levelOrder) {
        const id = action.payload.id;
        for (let i = 0; i < action.payload.level; i++) {
          state.character.classes.levelOrder.push(id);
        }
      }
      syncFeatSlotsFromClasses(state.character);
      syncLevelIncrementSlots(state.character);
      state.isDirty = true;
    },

    removeClass(state, action: PayloadAction<string>) {
      const removedId = action.payload;
      state.character.classes.classes = state.character.classes.classes.filter(
        (c) => (c.id ?? c.name) !== removedId,
      );
      state.character.classes.totalLevel = state.character.classes.classes.reduce(
        (sum, c) => sum + c.level,
        0,
      );

      // Cascade: clear advancement pointers that targeted the removed class.
      // Pointers are set to '' intentionally — empty string is a sentinel so the validator
      // fires a "missing target" warning instead of silently dropping the advancement entry.
      for (const entry of state.character.classes.classes) {
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

      // Remove the spellcasting pool anchored to this class (if any)
      state.character.spellcasting.pools = state.character.spellcasting.pools.filter(
        (p) => p.baseClassEntryId !== removedId,
      );

      // Sweep companions granted by this class.
      state.character.companions = (state.character.companions ?? []).filter(
        (c) => !(c.grantedBy.type === 'class' && c.grantedBy.classEntryId === removedId),
      );

      if (state.character.classes.levelOrder) {
        state.character.classes.levelOrder = state.character.classes.levelOrder.filter(
          (id) => id !== removedId,
        );
      }
      syncFeatSlotsFromClasses(state.character);
      syncLevelIncrementSlots(state.character);
      state.isDirty = true;
    },

    updateClassLevel(state, action: PayloadAction<{ id: string; level: number }>) {
      const cls = state.character.classes.classes.find(
        (c) => (c.id ?? c.name) === action.payload.id,
      );
      if (!cls) return;

      const oldLevel = cls.level;
      const newLevel = action.payload.level;
      cls.level = newLevel;
      state.character.classes.totalLevel = state.character.classes.classes.reduce(
        (sum, c) => sum + c.level,
        0,
      );

      // Prune favored class bonus selections that are now beyond the new level.
      if (cls.favoredClassBonuses && newLevel < oldLevel) {
        cls.favoredClassBonuses = cls.favoredClassBonuses.filter((s) => s.level <= newLevel);
      }

      // Keep levelOrder in sync when levels are directly adjusted.
      if (state.character.classes.levelOrder) {
        const classId = action.payload.id;
        if (newLevel > oldLevel) {
          for (let i = 0; i < newLevel - oldLevel; i++) {
            state.character.classes.levelOrder.push(classId);
          }
        } else if (newLevel < oldLevel) {
          let toRemove = oldLevel - newLevel;
          for (let i = state.character.classes.levelOrder.length - 1; i >= 0 && toRemove > 0; i--) {
            if (state.character.classes.levelOrder[i] === classId) {
              state.character.classes.levelOrder.splice(i, 1);
              toRemove--;
            }
          }
        }
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

      // Recalculate effectiveProgressionLevel for all class-granted companions.
      // This handles both direct changes (more druid levels → druid's companion
      // advances) and stacking changes (more Nature Warden levels → druid's
      // companion also advances via advancesCompanionOf).
      for (const companion of state.character.companions) {
        const grant = companion.grantedBy;
        if (grant.type !== 'class') continue;
        const grantingCls = state.character.classes.classes.find(
          (c) => (c.id ?? c.name) === grant.classEntryId,
        );
        if (grantingCls) {
          companion.effectiveProgressionLevel = computeCompanionEffectiveLevel(
            grantingCls,
            state.character.classes.classes,
          );
        }
      }

      syncFeatSlotsFromClasses(state.character);
      syncLevelIncrementSlots(state.character);
      state.isDirty = true;
    },

    updateClassArchetype(
      state,
      action: PayloadAction<{ id: string; archetypeId?: string; archetypeName?: string }>,
    ) {
      const cls = state.character.classes.classes.find(
        (c) => (c.id ?? c.name) === action.payload.id,
      );
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
        advancement: ClassEntry['spellcastingAdvancement'];
      }>,
    ) {
      const cls = state.character.classes.classes.find(
        (c) => (c.id ?? c.name) === action.payload.id,
      );
      if (cls) {
        cls.spellcastingAdvancement = action.payload.advancement;
        state.isDirty = true;
      }
    },

    upsertClassChoice(
      state,
      action: PayloadAction<{
        classId: string;
        choiceIndex: number;
        choice: ClassChoice;
        grantedFeature?: { name: string; description: string; level: number };
        removedFeatureName?: string;
      }>,
    ) {
      const cls = state.character.classes.classes.find(
        (c) => (c.id ?? c.name) === action.payload.classId,
      );
      if (cls) {
        if (!cls.classChoices) cls.classChoices = [];
        const { choiceIndex, choice, grantedFeature, removedFeatureName } = action.payload;
        const sameFeatureIndices = cls.classChoices
          .map((ch, i) => ({ ch, i }))
          .filter(({ ch }) => ch.featureName === choice.featureName)
          .map(({ i }) => i);
        if (sameFeatureIndices[choiceIndex] !== undefined) {
          cls.classChoices[sameFeatureIndices[choiceIndex]] = choice;
        } else {
          cls.classChoices.push(choice);
        }
        if (removedFeatureName) {
          cls.classFeatures = (cls.classFeatures ?? []).filter(
            (f) => f.name !== removedFeatureName,
          );
        }
        if (grantedFeature) {
          if (!cls.classFeatures) cls.classFeatures = [];
          if (!cls.classFeatures.some((f) => f.name === grantedFeature.name)) {
            cls.classFeatures.push({ ...grantedFeature, effects: [] });
          }
        }
        state.isDirty = true;
      }
    },

    toggleClassPrereqOverride(state, action: PayloadAction<string>) {
      const cls = state.character.classes.classes.find((c) => (c.id ?? c.name) === action.payload);
      if (cls) {
        cls.prereqOverride = !cls.prereqOverride;
        state.isDirty = true;
      }
    },

    setAdvancesCompanionOf(
      state,
      action: PayloadAction<{ id: string; advancesCompanionOf: 'all' | string | undefined }>,
    ) {
      const cls = state.character.classes.classes.find(
        (c) => (c.id ?? c.name) === action.payload.id,
      );
      if (!cls) return;
      cls.advancesCompanionOf = action.payload.advancesCompanionOf;
      // Recalculate all companion effective levels — stacking changed.
      for (const companion of state.character.companions) {
        const grant = companion.grantedBy;
        if (grant.type !== 'class') continue;
        const grantingCls = state.character.classes.classes.find(
          (c) => (c.id ?? c.name) === grant.classEntryId,
        );
        if (grantingCls) {
          companion.effectiveProgressionLevel = computeCompanionEffectiveLevel(
            grantingCls,
            state.character.classes.classes,
          );
        }
      }
      state.isDirty = true;
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
        isMount?: boolean;
      }>,
    ) {
      const { instanceId, sourceEntryId, name, grantedBy, effectiveProgressionLevel, isMount } =
        action.payload;
      const companion: CompanionInstance = {
        instanceId,
        sourceEntryId,
        name,
        grantedBy,
        effectiveProgressionLevel,
        ...(isMount ? { isMount: true } : {}),
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
      state.character.companions.push(companion);
      state.isDirty = true;
    },

    removeCompanion(state, action: PayloadAction<string>) {
      const instanceId = action.payload;
      state.character.companions = state.character.companions.filter(
        (c) => c.instanceId !== instanceId,
      );
      state.isDirty = true;
    },

    renameCompanion(state, action: PayloadAction<{ instanceId: string; name: string }>) {
      const comp = state.character.companions.find(
        (c) => c.instanceId === action.payload.instanceId,
      );
      if (comp) {
        comp.name = action.payload.name;
        state.isDirty = true;
      }
    },

    updateCompanionEffectiveLevel(
      state,
      action: PayloadAction<{ instanceId: string; effectiveProgressionLevel: number }>,
    ) {
      const comp = state.character.companions.find(
        (c) => c.instanceId === action.payload.instanceId,
      );
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
      const before = state.character.companions.length;
      state.character.companions = state.character.companions.filter(
        (c) => !(c.grantedBy.type === 'class' && c.grantedBy.classEntryId === classId),
      );
      if (state.character.companions.length !== before) state.isDirty = true;
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
      const comp = state.character.companions.find(
        (c) => c.instanceId === action.payload.instanceId,
      );
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
      const comp = state.character.companions.find(
        (c) => c.instanceId === action.payload.instanceId,
      );
      if (!comp) return;
      comp.hp[action.payload.field] = action.payload.value;
      state.isDirty = true;
    },

    // Swap the companion form (e.g. Druid Nature Bond changes from Wolf to
    // Leopard). Preserves overrides, feats, templates, tricks, and name.
    // Player can manually reset overrides if the new form's base stats make
    // them stale.
    swapCompanionForm(state, action: PayloadAction<{ instanceId: string; sourceEntryId: string }>) {
      const comp = state.character.companions.find(
        (c) => c.instanceId === action.payload.instanceId,
      );
      if (!comp) return;
      comp.sourceEntryId = action.payload.sourceEntryId;
      state.isDirty = true;
    },

    setCompanionNotes(state, action: PayloadAction<{ instanceId: string; notes: string }>) {
      const comp = state.character.companions.find(
        (c) => c.instanceId === action.payload.instanceId,
      );
      if (!comp) return;
      comp.notes = action.payload.notes;
      state.isDirty = true;
    },

    // Phase 1.6: companion feats. Slots are derived from effective level via
    // CompanionService.computeFeatSlots; the slice just owns the assigned list.
    // Duplicate featIds are allowed (e.g. Toughness) so the UI can stack them.
    addCompanionFeat(state, action: PayloadAction<{ instanceId: string; feat: CompanionFeat }>) {
      const comp = state.character.companions.find(
        (c) => c.instanceId === action.payload.instanceId,
      );
      if (!comp) return;
      comp.feats.push(action.payload.feat);
      state.isDirty = true;
    },

    // Removes the feat at a specific index so duplicates (e.g. two Toughness
    // picks) can be removed independently.
    removeCompanionFeatAt(state, action: PayloadAction<{ instanceId: string; index: number }>) {
      const comp = state.character.companions.find(
        (c) => c.instanceId === action.payload.instanceId,
      );
      if (!comp) return;
      const { index } = action.payload;
      if (index < 0 || index >= comp.feats.length) return;
      comp.feats.splice(index, 1);
      state.isDirty = true;
    },

    // Toggle a trick on/off. Tricks are a set; no duplicates. The UI enforces
    // the known-tricks cap, not the slice.
    toggleCompanionTrick(state, action: PayloadAction<{ instanceId: string; trick: TrickName }>) {
      const comp = state.character.companions.find(
        (c) => c.instanceId === action.payload.instanceId,
      );
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
      const comp = state.character.companions.find(
        (c) => c.instanceId === action.payload.instanceId,
      );
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
      const comp = state.character.companions.find(
        (c) => c.instanceId === action.payload.instanceId,
      );
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
      const comp = state.character.companions.find(
        (c) => c.instanceId === action.payload.instanceId,
      );
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
      const comp = state.character.companions.find(
        (c) => c.instanceId === action.payload.instanceId,
      );
      if (!comp) return;
      comp.appliedTemplates.push(action.payload.template);
      state.isDirty = true;
    },

    removeCompanionTemplateAt(state, action: PayloadAction<{ instanceId: string; index: number }>) {
      const comp = state.character.companions.find(
        (c) => c.instanceId === action.payload.instanceId,
      );
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
      const comp = state.character.companions.find(
        (c) => c.instanceId === action.payload.instanceId,
      );
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
      const comp = state.character.companions.find(
        (c) => c.instanceId === action.payload.instanceId,
      );
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
      const comp = state.character.companions.find(
        (c) => c.instanceId === action.payload.instanceId,
      );
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
      const target = state.character.classes.classes.find(
        (c) => (c.id ?? c.name) === action.payload,
      );
      if (!target) return;
      const wasAlreadyFavored = target.isFavoredClass;
      // Clear favored (and stale FCB data) on all classes first
      for (const cls of state.character.classes.classes) {
        if (cls.isFavoredClass) {
          cls.isFavoredClass = false;
          cls.favoredClassBonuses = undefined;
        }
      }
      if (!wasAlreadyFavored) {
        target.isFavoredClass = true;
        if (!target.favoredClassBonuses) {
          target.favoredClassBonuses = [];
        }
      } else {
        target.favoredClassBonuses = undefined;
      }
      state.isDirty = true;
    },

    setFavoredClassBonuses(
      state,
      action: PayloadAction<{ id: string; selections: FavoredClassBonusSelection[] }>,
    ) {
      const cls = state.character.classes.classes.find(
        (c) => (c.id ?? c.name) === action.payload.id,
      );
      if (cls) {
        cls.favoredClassBonuses = action.payload.selections.filter((s) => s.level <= cls.level);
        state.isDirty = true;
      }
    },

    reorderClasses(state, action: PayloadAction<string[]>) {
      const map = new Map(state.character.classes.classes.map((c) => [c.id ?? c.name, c]));
      state.character.classes.classes = action.payload
        .map((id) => map.get(id))
        .filter(Boolean) as ClassEntry[];
      state.isDirty = true;
    },

    initLevelOrder(state) {
      const order: string[] = [];
      for (const cls of state.character.classes.classes) {
        // id is guaranteed by addClass; fall back only for legacy persisted
        // entries that pre-date this guarantee.
        const id = cls.id ?? cls.name;
        for (let i = 0; i < cls.level; i++) {
          order.push(id);
        }
      }
      state.character.classes.levelOrder = order;
      state.isDirty = true;
    },

    swapLevelSlot(state, action: PayloadAction<{ charLevel: number; newClassId: string }>) {
      const order = state.character.classes.levelOrder;
      if (!order) return;

      const { charLevel, newClassId } = action.payload;
      const idx = charLevel - 1;
      const oldClassId = order[idx];
      if (!oldClassId || oldClassId === newClassId) return;

      const oldCls = state.character.classes.classes.find((c) => (c.id ?? c.name) === oldClassId);
      const newCls = state.character.classes.classes.find((c) => (c.id ?? c.name) === newClassId);
      if (!oldCls || !newCls) return;

      order[idx] = newClassId;

      oldCls.level -= 1;
      newCls.level += 1;

      // Prune FCBs that are now beyond the reduced level
      if (oldCls.favoredClassBonuses) {
        oldCls.favoredClassBonuses = oldCls.favoredClassBonuses.filter(
          (s) => s.level <= oldCls.level,
        );
      }

      // Shrink spellcasting advancement arrays if the old class lost a level
      const oldAdv = oldCls.spellcastingAdvancement;
      if (oldAdv) {
        oldAdv.perLevel.length = oldCls.level;
      }

      // Grow spellcasting advancement arrays if the new class gained a level
      const newAdv = newCls.spellcastingAdvancement;
      if (newAdv) {
        if (newAdv.mode === 'single') {
          const template = newAdv.perLevel[newAdv.perLevel.length - 1] ?? { baseClassEntryId: '' };
          newAdv.perLevel.push({ ...template });
        } else {
          const template = newAdv.perLevel[newAdv.perLevel.length - 1] ?? {
            arcaneBaseClassEntryId: '',
            divineBaseClassEntryId: '',
          };
          newAdv.perLevel.push({ ...template });
        }
      }

      state.character.classes.totalLevel = state.character.classes.classes.reduce(
        (sum, c) => sum + c.level,
        0,
      );
      syncFeatSlotsFromClasses(state.character);
      syncLevelIncrementSlots(state.character);
      state.isDirty = true;
    },

    splitClass(
      state,
      action: PayloadAction<{ classId: string; firstRunLevel: number; newEntryId: string }>,
    ) {
      const { classId, firstRunLevel, newEntryId } = action.payload;
      const idx = state.character.classes.classes.findIndex((c) => (c.id ?? c.name) === classId);
      if (idx === -1) return;

      const original = state.character.classes.classes[idx];
      const totalLevel = original.level;
      const secondRunLevel = totalLevel - firstRunLevel;
      if (firstRunLevel < 1 || secondRunLevel < 1) return;

      // Mark the original as part of a split group (or reuse existing group)
      const groupId = original.splitGroup ?? newEntryId;
      original.splitGroup = groupId;
      original.level = firstRunLevel;

      // Prune FCBs beyond the new reduced level
      if (original.favoredClassBonuses) {
        original.favoredClassBonuses = original.favoredClassBonuses.filter(
          (s) => s.level <= firstRunLevel,
        );
      }

      // Split spellcasting advancement perLevel between the two runs
      let secondAdvancement: ClassEntry['spellcastingAdvancement'];
      const origAdv = original.spellcastingAdvancement;
      if (origAdv) {
        secondAdvancement = {
          mode: origAdv.mode,
          perLevel: origAdv.perLevel.slice(firstRunLevel) as typeof origAdv.perLevel,
        } as ClassEntry['spellcastingAdvancement'];
        origAdv.perLevel = origAdv.perLevel.slice(0, firstRunLevel) as typeof origAdv.perLevel;
      }

      // Split classChoices — choices taken at levels > firstRunLevel move to the second run
      let secondChoices: ClassEntry['classChoices'] = [];
      if (original.classChoices?.length) {
        secondChoices = original.classChoices
          .filter((c) => c.takenAtLevel > firstRunLevel)
          .map((c) => ({ ...c, takenAtLevel: c.takenAtLevel - firstRunLevel }));
        original.classChoices = original.classChoices.filter(
          (c) => c.takenAtLevel <= firstRunLevel,
        );
      }

      // Build the second entry as a shallow copy of the original, overriding level-specific data
      const secondEntry: ClassEntry = {
        ...original,
        id: newEntryId,
        splitGroup: groupId,
        level: secondRunLevel,
        hitDieResults: [],
        favoredClassBonuses: [],
        classChoices: secondChoices,
        spellcastingAdvancement: secondAdvancement,
        isFavoredClass: false,
      };

      // Insert the second card immediately after the first
      state.character.classes.classes.splice(idx + 1, 0, secondEntry);

      // Keep levelOrder in sync: replace the last (secondRunLevel) occurrences of classId
      // with the new entry's id
      if (state.character.classes.levelOrder) {
        let toReplace = secondRunLevel;
        for (let i = state.character.classes.levelOrder.length - 1; i >= 0 && toReplace > 0; i--) {
          if (state.character.classes.levelOrder[i] === classId) {
            state.character.classes.levelOrder[i] = newEntryId;
            toReplace--;
          }
        }
      }

      state.character.classes.totalLevel = state.character.classes.classes.reduce(
        (sum, c) => sum + c.level,
        0,
      );
      syncFeatSlotsFromClasses(state.character);
      syncLevelIncrementSlots(state.character);
      state.isDirty = true;
    },

    // ---- Templates ----

    addTemplate(state, action: PayloadAction<AppliedTemplate>) {
      // Ensure every template entry has a stable id so removeTemplate and
      // reorderTemplates can reliably target it by id.
      const stableId =
        action.payload.id ?? Math.random().toString(36).slice(2) + Date.now().toString(36);
      const template = { ...action.payload, id: stableId };
      if (template.isFreeGrant) {
        state.character.grantedBonuses.push({
          id: stableId,
          name: template.name,
          description: template.freeGrantNote ?? '',
          grantedBy: template.grantedBy ?? '',
        });
      } else {
        state.character.appliedTemplates.push(template);
      }
      state.isDirty = true;
    },

    removeTemplate(state, action: PayloadAction<string>) {
      const removedId = action.payload;
      state.character.appliedTemplates = state.character.appliedTemplates.filter(
        (t) => t.id !== removedId,
      );
      state.character.grantedBonuses = state.character.grantedBonuses.filter(
        (t) => t.id !== removedId,
      );

      // Sweep companions granted by this template.
      state.character.companions = (state.character.companions ?? []).filter(
        (c) => !(c.grantedBy.type === 'template' && c.grantedBy.templateId === removedId),
      );

      state.isDirty = true;
    },

    updateTemplate(state, action: PayloadAction<AppliedTemplate>) {
      if (action.payload.isFreeGrant) {
        const idx = state.character.grantedBonuses.findIndex((t) => t.id === action.payload.id);
        if (idx >= 0) {
          state.character.grantedBonuses[idx] = {
            id: action.payload.id ?? '',
            name: action.payload.name,
            description: action.payload.freeGrantNote ?? '',
            grantedBy: action.payload.grantedBy ?? '',
          };
          state.isDirty = true;
        }
      } else {
        const idx = state.character.appliedTemplates.findIndex((t) => t.id === action.payload.id);
        if (idx >= 0) {
          state.character.appliedTemplates[idx] = action.payload;
          state.isDirty = true;
        }
      }
    },

    reorderTemplates(state, action: PayloadAction<string[]>) {
      const map = new Map(state.character.appliedTemplates.map((t) => [t.id ?? t.name, t]));
      state.character.appliedTemplates = action.payload
        .map((id) => map.get(id))
        .filter(Boolean) as AppliedTemplate[];
      state.isDirty = true;
    },

    setTemplateAcquiredAtECL(
      state,
      action: PayloadAction<{ id: string; acquiredAtECL: number | undefined }>,
    ) {
      const t = state.character.appliedTemplates.find((t) => t.id === action.payload.id);
      if (t) {
        t.acquiredAtCharacterLevel = action.payload.acquiredAtECL;
        state.isDirty = true;
      }
    },

    // ---- Combat stats ----

    setCombatField(
      state,
      action: PayloadAction<{
        field:
          | 'currentHP'
          | 'nonlethalDamage'
          | 'tempHP'
          | 'maxHPOverride'
          | 'acMiscBonus'
          | 'saveFortMisc'
          | 'saveRefMisc'
          | 'saveWillMisc'
          | 'meleeAttackMisc'
          | 'rangedAttackMisc'
          | 'cmbMisc'
          | 'speedLand'
          | 'speedFly'
          | 'speedSwim'
          | 'speedClimb';
        value: number | undefined;
      }>,
    ) {
      const cs = state.character.combatStats;
      const { field, value } = action.payload;
      switch (field) {
        case 'currentHP':
          cs.hitPoints.current = value ?? 0;
          break;
        case 'nonlethalDamage':
          cs.hitPoints.nonlethal = value ?? 0;
          break;
        case 'tempHP':
          cs.hitPoints.temporary = value ?? 0;
          break;
        case 'maxHPOverride':
          cs.hitPoints.other = value ?? 0;
          break;
        case 'acMiscBonus':
          cs.armorClass.misc = value ?? 0;
          break;
        case 'saveFortMisc':
          cs.savingThrows.fortitude.misc = value ?? 0;
          break;
        case 'saveRefMisc':
          cs.savingThrows.reflex.misc = value ?? 0;
          break;
        case 'saveWillMisc':
          cs.savingThrows.will.misc = value ?? 0;
          break;
        case 'meleeAttackMisc':
          cs.attackBonuses.miscMods.melee = [
            { value: value ?? 0, source: 'misc', type: BonusType.UNTYPED },
          ];
          break;
        case 'rangedAttackMisc':
          cs.attackBonuses.miscMods.ranged = [
            { value: value ?? 0, source: 'misc', type: BonusType.UNTYPED },
          ];
          break;
        case 'cmbMisc':
          cs.combatManeuver.bonus.miscMods = [
            { value: value ?? 0, source: 'misc', type: BonusType.UNTYPED },
          ];
          break;
        case 'speedLand':
          cs.movement.base = value ?? 30;
          cs.movement.current = value ?? 30;
          break;
        case 'speedFly':
          cs.movement.fly = value ?? 0;
          break;
        case 'speedSwim':
          cs.movement.swim = value ?? 0;
          break;
        case 'speedClimb':
          cs.movement.climb = value ?? 0;
          break;
      }
      state.isDirty = true;
    },

    // ---- Skills ----

    setSkillEntry(
      state,
      action: PayloadAction<{ skillKey: string; entry: { ranks: number; misc: number } }>,
    ) {
      const skillsMap = state.character.skills as Record<string, { ranks: number; misc: number }>;
      const skill = skillsMap[action.payload.skillKey];
      if (skill && typeof skill === 'object' && 'ranks' in skill) {
        skill.ranks = action.payload.entry.ranks;
        skill.misc = action.payload.entry.misc;
      } else {
        // New specialty key (e.g. "craft (cooking)") — create the entry
        skillsMap[action.payload.skillKey] = {
          ranks: action.payload.entry.ranks,
          misc: action.payload.entry.misc,
        };
      }
      state.isDirty = true;
    },

    removeSkillEntry(state, action: PayloadAction<string>) {
      const skill = (state.character.skills as Record<string, { ranks: number; misc: number }>)[
        action.payload
      ];
      if (skill && typeof skill === 'object' && 'ranks' in skill) {
        skill.ranks = 0;
        skill.misc = 0;
        state.isDirty = true;
      }
    },

    // ---- Traits ----

    addTrait(state, action: PayloadAction<CharacterTrait>) {
      state.character.traits.traits.push(action.payload);
      state.isDirty = true;
    },

    removeTrait(state, action: PayloadAction<string>) {
      state.character.traits.traits = state.character.traits.traits.filter(
        (t) => (t.id ?? t.traitId) !== action.payload,
      );
      state.isDirty = true;
    },

    // ---- Feats ----

    syncFeatSlots(state) {
      syncFeatSlotsFromClasses(state.character);
      state.isDirty = true;
    },

    addFeatSlot(
      state,
      action: PayloadAction<{
        id: string;
        source: 'racial' | 'level' | 'bonus' | 'mythic';
        availableAtLevel: number;
        availableAt: string;
        sourceLabel?: string;
      }>,
    ) {
      // Bonus feat slots are stored as empty CharacterFeat entries (featId = '')
      // so the slot displays in the UI as an empty assignable slot
      const slot = action.payload;
      state.character.feats.feats.push({
        featId: '',
        name: '',
        source: makeFeatSource(slot.source, slot.availableAtLevel),
        grantedAtLevel: slot.availableAtLevel,
        active: true,
        choices: {},
        ...(slot.sourceLabel ? { sourceLabel: slot.sourceLabel } : {}),
      });
      state.character.feats.feats.sort((a, b) => a.grantedAtLevel - b.grantedAtLevel);
      state.isDirty = true;
    },

    removeFeatSlot(state, action: PayloadAction<string>) {
      // action.payload is the slot id (= source_level key)
      state.character.feats.feats = state.character.feats.feats.filter(
        (f) =>
          makeFeatSource(
            f.source.split('_')[0] as 'racial' | 'level' | 'bonus' | 'mythic',
            f.grantedAtLevel,
          ) !== action.payload,
      );
      state.isDirty = true;
    },

    assignFeat(state, action: PayloadAction<{ slotId: string; featId: string; featName: string }>) {
      // slotId format: "{source}_{level}" e.g. "level_3"
      const [sourceStr, levelStr] = action.payload.slotId.split('_');
      const grantedAtLevel = parseInt(levelStr, 10);
      const existing = state.character.feats.feats.find(
        (f) => f.source === sourceStr + '_' + grantedAtLevel,
      );
      if (existing) {
        existing.featId = action.payload.featId;
        existing.name = action.payload.featName;
      } else {
        state.character.feats.feats.push({
          featId: action.payload.featId,
          name: action.payload.featName,
          source: action.payload.slotId,
          grantedAtLevel,
          active: true,
          choices: {},
        });
      }
      state.isDirty = true;
    },

    unassignFeat(state, action: PayloadAction<string>) {
      // action.payload is slotId = "{source}_{level}" e.g. "level_3"
      // f.source already contains the full slotId string, so compare directly
      const feat = state.character.feats.feats.find((f) => f.source === action.payload);
      if (feat) {
        feat.featId = '';
        feat.name = '';
      }
      state.isDirty = true;
    },

    setFeatChoices(
      state,
      action: PayloadAction<{ slotId: string; choices: Record<string, string> }>,
    ) {
      const feat = state.character.feats.feats.find((f) => f.source === action.payload.slotId);
      if (feat) {
        feat.choices = action.payload.choices;
        state.isDirty = true;
      }
    },

    toggleFeatPrereqOverride(state, action: PayloadAction<string>) {
      const feat = state.character.feats.feats.find(
        (f) => f.source === action.payload || f.source + '_' + f.grantedAtLevel === action.payload,
      );
      if (feat) {
        feat.prereqOverride = !feat.prereqOverride;
        state.isDirty = true;
      }
    },

    // ---- Spellcasting ----

    addSpellcastingPool(state, action: PayloadAction<SpellcastingPool>) {
      state.character.spellcasting.pools.push(action.payload);
      state.isDirty = true;
    },

    removeSpellcastingPool(state, action: PayloadAction<string>) {
      state.character.spellcasting.pools = state.character.spellcasting.pools.filter(
        (p) => p.id !== action.payload,
      );
      state.isDirty = true;
    },

    updatePoolCastingAbility(state, action: PayloadAction<{ poolId: string; ability: string }>) {
      const pool = state.character.spellcasting.pools.find((p) => p.id === action.payload.poolId);
      if (pool) {
        pool.spellAbility = action.payload.ability.toUpperCase() as typeof pool.spellAbility;
        state.isDirty = true;
      }
    },

    setSpellsPerDayMisc(
      state,
      action: PayloadAction<{ poolId: string; spellLevel: number; value: number }>,
    ) {
      const pool = state.character.spellcasting.pools.find((p) => p.id === action.payload.poolId);
      if (pool) {
        pool.spellsPerDay.misc[action.payload.spellLevel] = action.payload.value;
        state.isDirty = true;
      }
    },

    // ---- Equipment ----

    addEquipment(state, action: PayloadAction<EditorEquipmentItem>) {
      if (!state.character.editorEquipment) state.character.editorEquipment = [];
      state.character.editorEquipment.push(action.payload);
      syncEnhancementBonuses(state.character);
      state.isDirty = true;
    },

    removeEquipment(state, action: PayloadAction<string>) {
      if (state.character.editorEquipment) {
        state.character.editorEquipment = state.character.editorEquipment.filter(
          (e) => e.id !== action.payload,
        );
        syncEnhancementBonuses(state.character);
        state.isDirty = true;
      }
    },

    updateEquipment(state, action: PayloadAction<EditorEquipmentItem>) {
      if (state.character.editorEquipment) {
        const idx = state.character.editorEquipment.findIndex((e) => e.id === action.payload.id);
        if (idx >= 0) {
          state.character.editorEquipment[idx] = action.payload;
          syncEnhancementBonuses(state.character);
          state.isDirty = true;
        }
      }
    },

    assignEquipmentSlot(state, action: PayloadAction<{ id: string; slot: EditorEquippedSlot }>) {
      const item = state.character.editorEquipment?.find((e) => e.id === action.payload.id);
      if (item) {
        item.slot = action.payload.slot;
        item.containerId = undefined;
        item.unequippedFromSlot = undefined;
        syncEnhancementBonuses(state.character);
        state.isDirty = true;
      }
    },

    unassignEquipmentSlot(state, action: PayloadAction<string>) {
      const item = state.character.editorEquipment?.find((e) => e.id === action.payload);
      if (item) {
        item.unequippedFromSlot = item.slot;
        const firstContainer = state.character.editorEquipment?.find(
          (e) => e.isContainer && !e.slot,
        );
        if (firstContainer) {
          item.containerId = firstContainer.id;
        }
        item.slot = undefined;
        syncEnhancementBonuses(state.character);
        state.isDirty = true;
      }
    },

    reequipFromContainer(state, action: PayloadAction<string>) {
      const item = state.character.editorEquipment?.find((e) => e.id === action.payload);
      if (!item?.unequippedFromSlot) return;
      const targetSlot = item.unequippedFromSlot;
      // Displace anything currently in that slot back into a container
      const displaced = state.character.editorEquipment?.find(
        (e) => e.slot === targetSlot && e.id !== item.id,
      );
      if (displaced) {
        const firstContainer = state.character.editorEquipment?.find(
          (e) => e.isContainer && !e.slot && e.id !== item.id,
        );
        displaced.slot = undefined;
        if (firstContainer) {
          displaced.containerId = firstContainer.id;
        }
      }
      item.slot = targetSlot;
      item.unequippedFromSlot = undefined;
      item.containerId = undefined;
      syncEnhancementBonuses(state.character);
      state.isDirty = true;
    },

    assignEquipmentContainer(state, action: PayloadAction<{ id: string; containerId: string }>) {
      const item = state.character.editorEquipment?.find((e) => e.id === action.payload.id);
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
      const owner = state.character.classes.classes.find(
        (c) => c.id === action.payload.classEntryId,
      );
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
      state.character.eidolons.push(newEidolon);
      state.isDirty = true;
    },

    removeEidolon(state, action: PayloadAction<string>) {
      const before = state.character.eidolons.length;
      state.character.eidolons = state.character.eidolons.filter((e) => e.id !== action.payload);
      if (state.character.eidolons.length !== before) state.isDirty = true;
    },

    renameEidolon(state, action: PayloadAction<{ eidolonId: string; name: string }>) {
      const eid = state.character.eidolons.find((e) => e.id === action.payload.eidolonId);
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
      const eid = state.character.eidolons.find((e) => e.id === action.payload.eidolonId);
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
      const eid = state.character.eidolons.find((e) => e.id === action.payload.eidolonId);
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
      const eid = state.character.eidolons.find((e) => e.id === action.payload.eidolonId);
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
      const eid = state.character.eidolons.find((e) => e.id === action.payload.eidolonId);
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
      const eid = state.character.eidolons.find((e) => e.id === action.payload.eidolonId);
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
      const eid = state.character.eidolons.find((e) => e.id === action.payload.eidolonId);
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
      const cls = state.character.classes.classes.find((c) => c.id === action.payload.classEntryId);
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
      const cls = state.character.classes.classes.find((c) => c.id === action.payload.classEntryId);
      if (!cls?.summonerBroodmaster) return;
      const before = cls.summonerBroodmaster.sharedEvolutions.length;
      cls.summonerBroodmaster.sharedEvolutions = cls.summonerBroodmaster.sharedEvolutions.filter(
        (s) => s.instanceId !== action.payload.instanceId,
      );
      if (cls.summonerBroodmaster.sharedEvolutions.length !== before) state.isDirty = true;
    },

    // ---- Aspect / Greater Aspect (live on the DraftEidolon) ----

    setAspectDivert(state, action: PayloadAction<{ eidolonId: string; divertedPoints: number }>) {
      const eid = state.character.eidolons.find((e) => e.id === action.payload.eidolonId);
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
      const eid = state.character.eidolons.find((e) => e.id === action.payload.eidolonId);
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
      const eid = state.character.eidolons.find((e) => e.id === action.payload.eidolonId);
      if (!eid?.aspectTransfer) return;
      const before = eid.aspectTransfer.summonerEvolutions.length;
      eid.aspectTransfer.summonerEvolutions = eid.aspectTransfer.summonerEvolutions.filter(
        (s) => s.instanceId !== action.payload.instanceId,
      );
      if (eid.aspectTransfer.summonerEvolutions.length !== before) state.isDirty = true;
    },

    // ---- Notes ----

    setNotes(state, action: PayloadAction<string>) {
      state.character.info.notes = action.payload;
      state.isDirty = true;
    },

    // Legacy aliases — kept so existing callers compile unchanged
    setCharacterNotes(state, action: PayloadAction<string>) {
      state.character.info.notes = action.payload;
      state.isDirty = true;
    },
  },
});

export const {
  loadCharacter,
  resetDraft,
  setActiveTab,
  markDirty,
  setSaving,
  setSaveError,
  applyComputedStats,
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
  setAbilityBase,
  setAbilityInherent,
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
  setAdvancesCompanionOf,
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
  initLevelOrder,
  swapLevelSlot,
  splitClass,
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
  setFeatChoices,
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
  reequipFromContainer,
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
  setNotes,
  setCharacterNotes,
} = characterEntrySlice.actions;

export default characterEntrySlice.reducer;
