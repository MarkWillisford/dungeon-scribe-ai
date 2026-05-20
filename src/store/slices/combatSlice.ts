import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Buff, BuffPackage, CombatAbilityState, RollRecord, SavedBuff } from '@/types/buff';
import type { PlaySessionDoc } from '@/types/playSession';
import type { ResourcePool } from '@/types/resources';

interface CombatState {
  // Session buffs (lost when combat ends or app closes)
  activeBuffs: Buff[];

  // Combat ability toggles
  combatAbilities: CombatAbilityState;

  // HP tracking — null means not in an active combat session
  currentHP: number | null;
  tempHP: number;
  nonlethalDamage: number;

  // Staggered condition (PF1e: non-lethal >= current HP)
  isStaggered: boolean;
  // True when Staggered was set by the auto-trigger (allows auto-clear on recovery)
  staggeredAutoApplied: boolean;

  // Round counter
  round: number;

  // Session roll log (persisted to AsyncStorage)
  rollLog: RollRecord[];

  // Character's saved buff library (loaded from Firebase on mount)
  buffLibrary: SavedBuff[];
  buffPackages: BuffPackage[];

  // Resource pool current values (pool id → current remaining)
  resourcePools: Record<string, number>;

  // Spell tracking
  preparedSpellsCast: Record<string, boolean>;
  spellSlotsUsed: Record<string, number[]>;
}

const defaultCombatAbilities: CombatAbilityState = {
  powerAttack: false,
  deadlyAim: false,
  rage: false,
  twoWeaponFighting: false,
  twoWeaponFightingLightOffhand: false,
  haste: false,
  flurryOfBlows: false,
  combatExpertise: false,
  combatExpertisePenalty: 1,
};

const initialState: CombatState = {
  activeBuffs: [],
  combatAbilities: defaultCombatAbilities,
  currentHP: null,
  tempHP: 0,
  nonlethalDamage: 0,
  isStaggered: false,
  staggeredAutoApplied: false,
  round: 0,
  rollLog: [],
  buffLibrary: [],
  buffPackages: [],
  resourcePools: {},
  preparedSpellsCast: {},
  spellSlotsUsed: {},
};

const combatSlice = createSlice({
  name: 'combat',
  initialState,
  reducers: {
    // ---- Buff management ----

    addBuff(state, action: PayloadAction<Buff>) {
      // Prevent duplicate IDs
      if (!state.activeBuffs.find((b) => b.id === action.payload.id)) {
        state.activeBuffs.push(action.payload);
      }
    },

    removeBuff(state, action: PayloadAction<string>) {
      state.activeBuffs = state.activeBuffs.filter((b) => b.id !== action.payload);
    },

    toggleBuff(state, action: PayloadAction<string>) {
      const buff = state.activeBuffs.find((b) => b.id === action.payload);
      if (buff) {
        buff.isActive = !buff.isActive;
      }
    },

    updateBuffDuration(state, action: PayloadAction<{ id: string; remaining: number }>) {
      const buff = state.activeBuffs.find((b) => b.id === action.payload.id);
      if (buff && buff.duration !== null) {
        buff.duration = action.payload.remaining;
      }
    },

    clearAllBuffs(state) {
      state.activeBuffs = [];
    },

    // ---- Combat abilities ----

    toggleCombatAbility(
      state,
      action: PayloadAction<keyof Omit<CombatAbilityState, 'combatExpertisePenalty'>>,
    ) {
      const key = action.payload;
      (state.combatAbilities[key] as boolean) = !state.combatAbilities[key];
    },

    setCombatExpertisePenalty(state, action: PayloadAction<number>) {
      const value = Math.max(1, Math.min(5, action.payload));
      state.combatAbilities.combatExpertisePenalty = value;
    },

    // ---- HP tracking ----

    initHP(state, action: PayloadAction<number>) {
      state.currentHP = action.payload;
      state.tempHP = 0;
      state.nonlethalDamage = 0;
      state.isStaggered = false;
      state.staggeredAutoApplied = false;
    },

    setCurrentHP(state, action: PayloadAction<number>) {
      state.currentHP = action.payload;
    },

    adjustHP(state, action: PayloadAction<{ delta: number; maxHP: number }>) {
      if (state.currentHP === null) return;
      const { delta, maxHP } = action.payload;
      if (delta > 0) {
        // Healing: cap at max HP, don't overheal
        state.currentHP = Math.min(state.currentHP + delta, maxHP);
      } else {
        // Damage: temp HP absorbs first
        let remaining = Math.abs(delta);
        if (state.tempHP > 0) {
          const absorbed = Math.min(remaining, state.tempHP);
          state.tempHP -= absorbed;
          remaining -= absorbed;
        }
        state.currentHP = state.currentHP - remaining;
      }
      // Re-check staggered threshold after HP change
      if (state.currentHP > 0) {
        if (NonLethalService.checkStaggered(state.nonlethalDamage, state.currentHP)) {
          state.isStaggered = true;
          state.staggeredAutoApplied = true;
        } else if (state.staggeredAutoApplied) {
          state.isStaggered = false;
          state.staggeredAutoApplied = false;
        }
      } else if (state.staggeredAutoApplied) {
        state.isStaggered = false;
        state.staggeredAutoApplied = false;
      }
    },

    addTempHP(state, action: PayloadAction<number>) {
      // Temp HP doesn't stack — take the higher value
      state.tempHP = Math.max(state.tempHP, action.payload);
    },

    clearTempHP(state) {
      state.tempHP = 0;
    },

    adjustNonlethal(state, action: PayloadAction<number>) {
      state.nonlethalDamage = Math.max(0, state.nonlethalDamage + action.payload);
      // Auto-apply/clear staggered based on threshold
      if (state.currentHP !== null && state.currentHP > 0) {
        if (NonLethalService.checkStaggered(state.nonlethalDamage, state.currentHP)) {
          state.isStaggered = true;
          state.staggeredAutoApplied = true;
        } else if (state.staggeredAutoApplied) {
          state.isStaggered = false;
          state.staggeredAutoApplied = false;
        }
      }
    },

    toggleStaggered(state) {
      if (state.isStaggered) {
        state.isStaggered = false;
        state.staggeredAutoApplied = false;
      } else {
        state.isStaggered = true;
      }
    },

    applyNonlethalRest(state, action: PayloadAction<{ characterLevel: number }>) {
      const recovery = Math.max(1, action.payload.characterLevel);
      state.nonlethalDamage = Math.max(0, state.nonlethalDamage - recovery);
      // Re-check staggered threshold after recovery
      if (state.currentHP !== null && state.currentHP > 0 && state.staggeredAutoApplied) {
        if (state.nonlethalDamage < state.currentHP) {
          state.isStaggered = false;
          state.staggeredAutoApplied = false;
        }
      }
    },

    // Called when Rage ends — reduces HP due to CON loss
    applyRageEndHPLoss(state, action: PayloadAction<{ newCurrentHP: number; newTempHP: number }>) {
      state.currentHP = action.payload.newCurrentHP;
      state.tempHP = action.payload.newTempHP;
      // Re-check staggered threshold after HP change from rage ending
      if (state.currentHP > 0) {
        if (NonLethalService.checkStaggered(state.nonlethalDamage, state.currentHP)) {
          state.isStaggered = true;
          state.staggeredAutoApplied = true;
        } else if (state.staggeredAutoApplied) {
          state.isStaggered = false;
          state.staggeredAutoApplied = false;
        }
      } else if (state.staggeredAutoApplied) {
        state.isStaggered = false;
        state.staggeredAutoApplied = false;
      }
    },

    // ---- Round management ----

    nextRound(state) {
      state.round += 1;
    },

    setRound(state, action: PayloadAction<number>) {
      state.round = action.payload;
    },

    // ---- Turn management ----

    endTurnDecrement(state) {
      for (const buff of state.activeBuffs) {
        if (buff.duration !== null && buff.durationType === 'rounds') {
          buff.duration -= 1;
        }
      }
      state.activeBuffs = state.activeBuffs.filter((b) => b.duration === null || b.duration > 0);
    },

    startTurnApply(_state) {
      // Stub: bleed, regeneration effects go here
    },

    // ---- Roll log ----

    appendRoll(state, action: PayloadAction<RollRecord>) {
      state.rollLog.push(action.payload);
    },

    clearRollLog(state) {
      state.rollLog = [];
    },

    // ---- Buff library ----

    setBuffLibrary(state, action: PayloadAction<SavedBuff[]>) {
      state.buffLibrary = action.payload;
    },

    addToBuffLibrary(state, action: PayloadAction<SavedBuff>) {
      if (!state.buffLibrary.find((b) => b.id === action.payload.id)) {
        state.buffLibrary.push(action.payload);
      }
    },

    removeFromBuffLibrary(state, action: PayloadAction<string>) {
      state.buffLibrary = state.buffLibrary.filter((b) => b.id !== action.payload);
    },

    setBuffPackages(state, action: PayloadAction<BuffPackage[]>) {
      state.buffPackages = action.payload;
    },

    // ---- Resource pools ----

    decrementPool(state, action: PayloadAction<{ poolId: string; amount?: number }>) {
      const { poolId, amount = 1 } = action.payload;
      if (amount <= 0) return;
      if (!(poolId in state.resourcePools)) return;
      state.resourcePools[poolId] = Math.max(0, state.resourcePools[poolId] - amount);
    },

    applyNewEncounter(state, action: PayloadAction<ResourcePool[]>) {
      for (const pool of action.payload) {
        if (pool.rechargeOn === 'per_encounter') {
          if (!(pool.id in state.resourcePools)) continue;
          state.resourcePools[pool.id] = pool.max;
        }
      }
    },

    // ---- Session reset ----

    resetCombat(state) {
      state.activeBuffs = [];
      state.combatAbilities = { ...defaultCombatAbilities };
      state.currentHP = null;
      state.tempHP = 0;
      state.nonlethalDamage = 0;
      state.isStaggered = false;
      state.staggeredAutoApplied = false;
      state.round = 0;
      state.resourcePools = {};
      state.preparedSpellsCast = {};
      state.spellSlotsUsed = {};
      // Keep roll log and buff library — they persist across sessions
    },

    // ---- Session initialisation ----

    initNewSession(state, action: PayloadAction<{ maxHP: number; pools?: ResourcePool[] }>) {
      state.currentHP = action.payload.maxHP;
      state.tempHP = 0;
      state.nonlethalDamage = 0;
      state.isStaggered = false;
      state.staggeredAutoApplied = false;
      state.activeBuffs = [];
      state.combatAbilities = { ...defaultCombatAbilities };
      state.round = 0;
      state.resourcePools = {};
      state.preparedSpellsCast = {};
      state.spellSlotsUsed = {};
      for (const pool of action.payload.pools ?? []) {
        state.resourcePools[pool.id] = pool.max;
      }
    },

    initFromSession(state, action: PayloadAction<PlaySessionDoc>) {
      const s = action.payload;
      state.currentHP = s.currentHP;
      state.tempHP = s.tempHP;
      state.nonlethalDamage = s.nonlethalDamage;
      state.activeBuffs = s.activeBuffs.map((buff) => ({ ...buff }));
      state.combatAbilities = { ...defaultCombatAbilities, ...(s.combatAbilities ?? {}) };
      state.round = s.round;
      state.resourcePools = s.resourcePools ?? {};
      state.preparedSpellsCast = s.preparedSpellsCast ?? {};
      state.spellSlotsUsed = s.spellSlotsUsed ?? {};
      // Roll log and buff library are not session-scoped — leave them as-is
    },

    togglePreparedSpell(state, action: PayloadAction<{ spellIndex: number }>) {
      const key = String(action.payload.spellIndex);
      state.preparedSpellsCast[key] = !state.preparedSpellsCast[key];
    },

    useSpellSlot(state, action: PayloadAction<{ poolKey: string; level: number }>) {
      const { poolKey, level } = action.payload;
      if (level < 0 || !Number.isInteger(level)) return;
      if (!state.spellSlotsUsed[poolKey]) {
        state.spellSlotsUsed[poolKey] = [];
      }
      state.spellSlotsUsed[poolKey][level] = (state.spellSlotsUsed[poolKey][level] ?? 0) + 1;
    },
  },
});

export const {
  addBuff,
  removeBuff,
  toggleBuff,
  updateBuffDuration,
  clearAllBuffs,
  toggleCombatAbility,
  setCombatExpertisePenalty,
  initHP,
  setCurrentHP,
  adjustHP,
  addTempHP,
  clearTempHP,
  adjustNonlethal,
  toggleStaggered,
  applyNonlethalRest,
  applyRageEndHPLoss,
  nextRound,
  setRound,
  endTurnDecrement,
  startTurnApply,
  appendRoll,
  clearRollLog,
  setBuffLibrary,
  addToBuffLibrary,
  removeFromBuffLibrary,
  setBuffPackages,
  decrementPool,
  applyNewEncounter,
  resetCombat,
  initNewSession,
  initFromSession,
  togglePreparedSpell,
  useSpellSlot,
} = combatSlice.actions;

export default combatSlice.reducer;
