import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Buff, BuffPackage, CombatAbilityState, RollRecord, SavedBuff } from '@/types/buff';

interface CombatState {
  // Session buffs (lost when combat ends or app closes)
  activeBuffs: Buff[];

  // Combat ability toggles
  combatAbilities: CombatAbilityState;

  // HP tracking — null means not in an active combat session
  currentHP: number | null;
  tempHP: number;
  nonlethalDamage: number;

  // Round counter
  round: number;

  // Session roll log (persisted to AsyncStorage)
  rollLog: RollRecord[];

  // Character's saved buff library (loaded from Firebase on mount)
  buffLibrary: SavedBuff[];
  buffPackages: BuffPackage[];
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
  round: 0,
  rollLog: [],
  buffLibrary: [],
  buffPackages: [],
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
    },

    // Called when Rage ends — reduces HP due to CON loss
    applyRageEndHPLoss(state, action: PayloadAction<{ newCurrentHP: number; newTempHP: number }>) {
      state.currentHP = action.payload.newCurrentHP;
      state.tempHP = action.payload.newTempHP;
    },

    // ---- Round management ----

    nextRound(state) {
      state.round += 1;
      // Tick down buff durations; remove expired round-duration buffs
      state.activeBuffs = state.activeBuffs.filter((buff) => {
        if (buff.duration === null || buff.durationType !== 'rounds') return true;
        buff.duration -= 1;
        return buff.duration > 0;
      });
    },

    setRound(state, action: PayloadAction<number>) {
      state.round = action.payload;
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

    // ---- Session reset ----

    resetCombat(state) {
      state.activeBuffs = [];
      state.combatAbilities = defaultCombatAbilities;
      state.currentHP = null;
      state.tempHP = 0;
      state.nonlethalDamage = 0;
      state.round = 0;
      // Keep roll log and buff library — they persist across sessions
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
  applyRageEndHPLoss,
  nextRound,
  setRound,
  appendRoll,
  clearRollLog,
  setBuffLibrary,
  addToBuffLibrary,
  removeFromBuffLibrary,
  setBuffPackages,
  resetCombat,
} = combatSlice.actions;

export default combatSlice.reducer;
