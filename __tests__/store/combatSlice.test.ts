import combatReducer, {
  addBuff,
  removeBuff,
  toggleBuff,
  clearAllBuffs,
  toggleCombatAbility,
  setCombatExpertisePenalty,
  initHP,
  adjustHP,
  addTempHP,
  adjustNonlethal,
  applyRageEndHPLoss,
  nextRound,
  appendRoll,
  clearRollLog,
  setBuffLibrary,
  addToBuffLibrary,
  removeFromBuffLibrary,
  decrementPool,
  applyNewEncounter,
  resetCombat,
  initNewSession,
  initFromSession,
} from '@store/slices/combatSlice';
import { BonusType } from '@/types/base';
import { Buff, RollRecord, SavedBuff } from '@/types/buff';
import type { PlaySessionDoc } from '@/types/playSession';
import type { ResourcePool } from '@/types/resources';

// ----------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------

function makeBuff(overrides: Partial<Buff> = {}): Buff {
  return {
    id: 'test_buff',
    name: 'Test Buff',
    source: 'Test',
    bonusType: BonusType.MORALE,
    duration: 10,
    durationType: 'rounds',
    isActive: true,
    effects: [],
    ...overrides,
  };
}

function makeRoll(overrides: Partial<RollRecord> = {}): RollRecord {
  return {
    id: 'roll_1',
    timestamp: Date.now(),
    type: 'attack',
    label: 'Attack',
    diceNotation: '1d20+5',
    rawRoll: 14,
    modifier: 5,
    total: 19,
    breakdown: ['d20: 14', 'BAB: +5'],
    isManual: false,
    ...overrides,
  };
}

const getInitialState = () => combatReducer(undefined, { type: '@@INIT' });

// ----------------------------------------------------------------
// Initial state
// ----------------------------------------------------------------

describe('combatSlice initial state', () => {
  it('starts with empty active buffs', () => {
    expect(getInitialState().activeBuffs).toHaveLength(0);
  });

  it('starts with all combat abilities off', () => {
    const state = getInitialState();
    expect(state.combatAbilities.powerAttack).toBe(false);
    expect(state.combatAbilities.rage).toBe(false);
    expect(state.combatAbilities.haste).toBe(false);
  });

  it('starts with null HP (no active session)', () => {
    expect(getInitialState().currentHP).toBeNull();
  });

  it('round starts at 0', () => {
    expect(getInitialState().round).toBe(0);
  });
});

// ----------------------------------------------------------------
// Buff management
// ----------------------------------------------------------------

describe('addBuff', () => {
  it('adds a buff to activeBuffs', () => {
    const state = combatReducer(undefined, addBuff(makeBuff()));
    expect(state.activeBuffs).toHaveLength(1);
    expect(state.activeBuffs[0].name).toBe('Test Buff');
  });

  it('does not add duplicate IDs', () => {
    let state = combatReducer(undefined, addBuff(makeBuff({ id: 'buff_1' })));
    state = combatReducer(state, addBuff(makeBuff({ id: 'buff_1', name: 'Duplicate' })));
    expect(state.activeBuffs).toHaveLength(1);
    expect(state.activeBuffs[0].name).toBe('Test Buff');
  });
});

describe('removeBuff', () => {
  it('removes a buff by ID', () => {
    let state = combatReducer(undefined, addBuff(makeBuff({ id: 'buff_a' })));
    state = combatReducer(state, addBuff(makeBuff({ id: 'buff_b', name: 'B' })));
    state = combatReducer(state, removeBuff('buff_a'));
    expect(state.activeBuffs).toHaveLength(1);
    expect(state.activeBuffs[0].id).toBe('buff_b');
  });

  it('is a no-op for unknown ID', () => {
    const state = combatReducer(undefined, removeBuff('nonexistent'));
    expect(state.activeBuffs).toHaveLength(0);
  });
});

describe('toggleBuff', () => {
  it('flips isActive from true to false', () => {
    let state = combatReducer(undefined, addBuff(makeBuff({ id: 'b', isActive: true })));
    state = combatReducer(state, toggleBuff('b'));
    expect(state.activeBuffs[0].isActive).toBe(false);
  });

  it('flips isActive from false to true', () => {
    let state = combatReducer(undefined, addBuff(makeBuff({ id: 'b', isActive: false })));
    state = combatReducer(state, toggleBuff('b'));
    expect(state.activeBuffs[0].isActive).toBe(true);
  });
});

describe('clearAllBuffs', () => {
  it('empties activeBuffs', () => {
    let state = combatReducer(undefined, addBuff(makeBuff({ id: 'a' })));
    state = combatReducer(state, addBuff(makeBuff({ id: 'b' })));
    state = combatReducer(state, clearAllBuffs());
    expect(state.activeBuffs).toHaveLength(0);
  });
});

// ----------------------------------------------------------------
// Combat abilities
// ----------------------------------------------------------------

describe('toggleCombatAbility', () => {
  it('toggles powerAttack', () => {
    let state = combatReducer(undefined, toggleCombatAbility('powerAttack'));
    expect(state.combatAbilities.powerAttack).toBe(true);
    state = combatReducer(state, toggleCombatAbility('powerAttack'));
    expect(state.combatAbilities.powerAttack).toBe(false);
  });

  it('toggles rage independently of other abilities', () => {
    let state = combatReducer(undefined, toggleCombatAbility('rage'));
    expect(state.combatAbilities.rage).toBe(true);
    expect(state.combatAbilities.powerAttack).toBe(false);
  });

  it('toggles haste', () => {
    const state = combatReducer(undefined, toggleCombatAbility('haste'));
    expect(state.combatAbilities.haste).toBe(true);
  });
});

describe('setCombatExpertisePenalty', () => {
  it('sets penalty within 1–5', () => {
    const state = combatReducer(undefined, setCombatExpertisePenalty(3));
    expect(state.combatAbilities.combatExpertisePenalty).toBe(3);
  });

  it('clamps to minimum 1', () => {
    const state = combatReducer(undefined, setCombatExpertisePenalty(0));
    expect(state.combatAbilities.combatExpertisePenalty).toBe(1);
  });

  it('clamps to maximum 5', () => {
    const state = combatReducer(undefined, setCombatExpertisePenalty(10));
    expect(state.combatAbilities.combatExpertisePenalty).toBe(5);
  });
});

// ----------------------------------------------------------------
// HP tracking
// ----------------------------------------------------------------

describe('initHP', () => {
  it('sets currentHP and resets temp and nonlethal', () => {
    let state = combatReducer(undefined, addTempHP(5));
    state = combatReducer(state, initHP(20));
    expect(state.currentHP).toBe(20);
    expect(state.tempHP).toBe(0);
    expect(state.nonlethalDamage).toBe(0);
  });
});

describe('adjustHP', () => {
  it('applies damage (negative delta)', () => {
    let state = combatReducer(undefined, initHP(20));
    state = combatReducer(state, adjustHP({ delta: -5, maxHP: 20 }));
    expect(state.currentHP).toBe(15);
  });

  it('temp HP absorbs damage first', () => {
    let state = combatReducer(undefined, initHP(20));
    state = combatReducer(state, addTempHP(5));
    state = combatReducer(state, adjustHP({ delta: -3, maxHP: 20 }));
    expect(state.tempHP).toBe(2);
    expect(state.currentHP).toBe(20); // current HP unaffected
  });

  it('damage overflows temp HP into current HP', () => {
    let state = combatReducer(undefined, initHP(20));
    state = combatReducer(state, addTempHP(3));
    state = combatReducer(state, adjustHP({ delta: -5, maxHP: 20 }));
    expect(state.tempHP).toBe(0);
    expect(state.currentHP).toBe(18); // 20 - 2 overflow
  });

  it('healing caps at max HP', () => {
    let state = combatReducer(undefined, initHP(15));
    state = combatReducer(state, adjustHP({ delta: 10, maxHP: 20 }));
    expect(state.currentHP).toBe(20);
  });

  it('can go below 0 (dying)', () => {
    let state = combatReducer(undefined, initHP(3));
    state = combatReducer(state, adjustHP({ delta: -10, maxHP: 20 }));
    expect(state.currentHP).toBe(-7);
  });

  it('is a no-op when currentHP is null', () => {
    const state = combatReducer(undefined, adjustHP({ delta: -5, maxHP: 20 }));
    expect(state.currentHP).toBeNull();
  });
});

describe('addTempHP', () => {
  it('sets temp HP', () => {
    const state = combatReducer(undefined, addTempHP(8));
    expect(state.tempHP).toBe(8);
  });

  it('takes the higher value (temp HP does not stack)', () => {
    let state = combatReducer(undefined, addTempHP(5));
    state = combatReducer(state, addTempHP(3));
    expect(state.tempHP).toBe(5); // keeps the higher

    state = combatReducer(state, addTempHP(10));
    expect(state.tempHP).toBe(10); // new higher value wins
  });
});

describe('adjustNonlethal', () => {
  it('tracks nonlethal damage', () => {
    let state = combatReducer(undefined, adjustNonlethal(5));
    expect(state.nonlethalDamage).toBe(5);
    state = combatReducer(state, adjustNonlethal(3));
    expect(state.nonlethalDamage).toBe(8);
  });

  it('does not go below 0', () => {
    const state = combatReducer(undefined, adjustNonlethal(-5));
    expect(state.nonlethalDamage).toBe(0);
  });
});

describe('applyRageEndHPLoss', () => {
  it('updates current and temp HP', () => {
    let state = combatReducer(undefined, initHP(18));
    state = combatReducer(state, addTempHP(3));
    state = combatReducer(state, applyRageEndHPLoss({ newCurrentHP: 18, newTempHP: 1 }));
    expect(state.currentHP).toBe(18);
    expect(state.tempHP).toBe(1);
  });
});

// ----------------------------------------------------------------
// Round management
// ----------------------------------------------------------------

describe('nextRound', () => {
  it('increments the round counter', () => {
    const state = combatReducer(undefined, nextRound());
    expect(state.round).toBe(1);
  });

  it('ticks down round-duration buff durations', () => {
    let state = combatReducer(
      undefined,
      addBuff(makeBuff({ id: 'b', duration: 3, durationType: 'rounds' })),
    );
    state = combatReducer(state, nextRound());
    expect(state.activeBuffs[0].duration).toBe(2);
  });

  it('removes buff when duration reaches 0', () => {
    let state = combatReducer(
      undefined,
      addBuff(makeBuff({ id: 'b', duration: 1, durationType: 'rounds' })),
    );
    state = combatReducer(state, nextRound());
    expect(state.activeBuffs).toHaveLength(0);
  });

  it('does not remove permanent buffs', () => {
    let state = combatReducer(
      undefined,
      addBuff(makeBuff({ id: 'perm', duration: null, durationType: 'permanent' })),
    );
    state = combatReducer(state, nextRound());
    expect(state.activeBuffs).toHaveLength(1);
  });

  it('does not decrement non-round buffs', () => {
    let state = combatReducer(
      undefined,
      addBuff(makeBuff({ id: 'min', duration: 5, durationType: 'minutes' })),
    );
    state = combatReducer(state, nextRound());
    expect(state.activeBuffs[0].duration).toBe(5); // unchanged
  });
});

// ----------------------------------------------------------------
// Roll log
// ----------------------------------------------------------------

describe('appendRoll', () => {
  it('adds a roll record to the log', () => {
    const state = combatReducer(undefined, appendRoll(makeRoll()));
    expect(state.rollLog).toHaveLength(1);
    expect(state.rollLog[0].total).toBe(19);
  });
});

describe('clearRollLog', () => {
  it('empties the roll log', () => {
    let state = combatReducer(undefined, appendRoll(makeRoll()));
    state = combatReducer(state, appendRoll(makeRoll({ id: 'roll_2' })));
    state = combatReducer(state, clearRollLog());
    expect(state.rollLog).toHaveLength(0);
  });
});

// ----------------------------------------------------------------
// Buff library
// ----------------------------------------------------------------

describe('setBuffLibrary / addToBuffLibrary / removeFromBuffLibrary', () => {
  const savedBuff: SavedBuff = {
    id: 'bless',
    name: 'Bless',
    description: '+1 morale attack and saves vs fear',
    source: 'Cleric',
    category: 'Spell',
    bonusType: BonusType.MORALE,
    duration: 10,
    durationType: 'rounds',
    effects: [],
  };

  it('sets the entire library', () => {
    const state = combatReducer(undefined, setBuffLibrary([savedBuff]));
    expect(state.buffLibrary).toHaveLength(1);
  });

  it('adds a single buff to the library', () => {
    const state = combatReducer(undefined, addToBuffLibrary(savedBuff));
    expect(state.buffLibrary).toHaveLength(1);
  });

  it('does not add duplicate to library', () => {
    let state = combatReducer(undefined, addToBuffLibrary(savedBuff));
    state = combatReducer(state, addToBuffLibrary(savedBuff));
    expect(state.buffLibrary).toHaveLength(1);
  });

  it('removes a buff from the library', () => {
    let state = combatReducer(undefined, addToBuffLibrary(savedBuff));
    state = combatReducer(state, removeFromBuffLibrary('bless'));
    expect(state.buffLibrary).toHaveLength(0);
  });
});

// ----------------------------------------------------------------
// resetCombat
// ----------------------------------------------------------------

describe('resetCombat', () => {
  it('clears buffs, abilities, HP, and round but keeps library and log', () => {
    let state = combatReducer(undefined, addBuff(makeBuff()));
    state = combatReducer(state, toggleCombatAbility('powerAttack'));
    state = combatReducer(state, initHP(20));
    state = combatReducer(state, nextRound());
    state = combatReducer(state, appendRoll(makeRoll()));
    state = combatReducer(
      state,
      addToBuffLibrary({
        id: 'saved',
        name: 'Saved',
        description: '',
        source: 'Spell',
        category: 'Spell',
        bonusType: BonusType.MORALE,
        duration: 10,
        durationType: 'rounds',
        effects: [],
      }),
    );

    state = combatReducer(state, resetCombat());

    expect(state.activeBuffs).toHaveLength(0);
    expect(state.combatAbilities.powerAttack).toBe(false);
    expect(state.currentHP).toBeNull();
    expect(state.round).toBe(0);
    // Roll log and library persist
    expect(state.rollLog).toHaveLength(1);
    expect(state.buffLibrary).toHaveLength(1);
  });
});

// ----------------------------------------------------------------
// initNewSession
// ----------------------------------------------------------------

describe('initNewSession', () => {
  it('sets currentHP to the provided maxHP', () => {
    const state = combatReducer(undefined, initNewSession({ maxHP: 55 }));
    expect(state.currentHP).toBe(55);
  });

  it('clears tempHP and nonlethalDamage', () => {
    let state = combatReducer(undefined, initHP(30));
    state = combatReducer(state, addTempHP(10));
    state = combatReducer(state, adjustNonlethal(5));
    state = combatReducer(state, initNewSession({ maxHP: 30 }));
    expect(state.tempHP).toBe(0);
    expect(state.nonlethalDamage).toBe(0);
  });

  it('clears active buffs and resets combat abilities', () => {
    let state = combatReducer(undefined, addBuff(makeBuff()));
    state = combatReducer(state, toggleCombatAbility('powerAttack'));
    state = combatReducer(state, initNewSession({ maxHP: 40 }));
    expect(state.activeBuffs).toHaveLength(0);
    expect(state.combatAbilities.powerAttack).toBe(false);
  });

  it('resets the round counter to 0', () => {
    let state = combatReducer(undefined, initHP(20));
    state = combatReducer(state, nextRound());
    state = combatReducer(state, nextRound());
    state = combatReducer(state, initNewSession({ maxHP: 20 }));
    expect(state.round).toBe(0);
  });

  it('does not clear the roll log or buff library', () => {
    let state = combatReducer(undefined, appendRoll(makeRoll()));
    state = combatReducer(
      state,
      addToBuffLibrary({
        id: 'lib',
        name: 'Library Buff',
        description: '',
        source: 'Spell',
        category: 'Spell',
        bonusType: BonusType.MORALE,
        duration: 5,
        durationType: 'rounds',
        effects: [],
      }),
    );
    state = combatReducer(state, initNewSession({ maxHP: 30 }));
    expect(state.rollLog).toHaveLength(1);
    expect(state.buffLibrary).toHaveLength(1);
  });
});

// ----------------------------------------------------------------
// initFromSession
// ----------------------------------------------------------------

function makeSessionDoc(overrides: Partial<PlaySessionDoc> = {}): PlaySessionDoc {
  return {
    characterId: 'char-1',
    userId: 'user-1',
    currentHP: 22,
    nonlethalDamage: 3,
    tempHP: 5,
    activeBuffs: [makeBuff({ id: 'session_buff', name: 'Session Buff', duration: 4 })],
    combatAbilities: {
      powerAttack: true,
      deadlyAim: false,
      rage: false,
      twoWeaponFighting: false,
      twoWeaponFightingLightOffhand: false,
      haste: true,
      flurryOfBlows: false,
      combatExpertise: false,
      combatExpertisePenalty: 2,
    },
    spellSlotsUsed: { 1: 2, 2: 1 },
    resourcePools: { rage: 5 },
    round: 7,
    createdAt: '2026-01-01T00:00:00.000Z',
    updatedAt: '2026-01-01T01:00:00.000Z',
    ...overrides,
  };
}

describe('initFromSession', () => {
  it('restores currentHP from the session doc', () => {
    const state = combatReducer(undefined, initFromSession(makeSessionDoc()));
    expect(state.currentHP).toBe(22);
  });

  it('restores tempHP and nonlethalDamage', () => {
    const state = combatReducer(undefined, initFromSession(makeSessionDoc()));
    expect(state.tempHP).toBe(5);
    expect(state.nonlethalDamage).toBe(3);
  });

  it('restores activeBuffs from the session doc', () => {
    const state = combatReducer(undefined, initFromSession(makeSessionDoc()));
    expect(state.activeBuffs).toHaveLength(1);
    expect(state.activeBuffs[0].id).toBe('session_buff');
  });

  it('restores combatAbilities from the session doc', () => {
    const state = combatReducer(undefined, initFromSession(makeSessionDoc()));
    expect(state.combatAbilities.powerAttack).toBe(true);
    expect(state.combatAbilities.haste).toBe(true);
    expect(state.combatAbilities.combatExpertisePenalty).toBe(2);
  });

  it('restores the round counter', () => {
    const state = combatReducer(undefined, initFromSession(makeSessionDoc()));
    expect(state.round).toBe(7);
  });

  it('does not overwrite the roll log or buff library', () => {
    let state = combatReducer(undefined, appendRoll(makeRoll()));
    state = combatReducer(
      state,
      addToBuffLibrary({
        id: 'lib2',
        name: 'Lib Buff',
        description: '',
        source: 'Feat',
        category: 'Ability',
        bonusType: BonusType.MORALE,
        duration: 1,
        durationType: 'rounds',
        effects: [],
      }),
    );
    state = combatReducer(state, initFromSession(makeSessionDoc()));
    expect(state.rollLog).toHaveLength(1);
    expect(state.buffLibrary).toHaveLength(1);
  });

  it('handles a session doc with empty buffs and default abilities', () => {
    const state = combatReducer(
      undefined,
      initFromSession(
        makeSessionDoc({
          activeBuffs: [],
          combatAbilities: {
            powerAttack: false,
            deadlyAim: false,
            rage: false,
            twoWeaponFighting: false,
            twoWeaponFightingLightOffhand: false,
            haste: false,
            flurryOfBlows: false,
            combatExpertise: false,
            combatExpertisePenalty: 1,
          },
        }),
      ),
    );
    expect(state.activeBuffs).toHaveLength(0);
    expect(state.combatAbilities.powerAttack).toBe(false);
  });
});

// ----------------------------------------------------------------
// Resource pool helpers
// ----------------------------------------------------------------

function makePool(overrides: Partial<ResourcePool> = {}): ResourcePool {
  return {
    id: 'ki',
    name: 'Ki Points',
    current: 8,
    max: 8,
    baseMax: 8,
    contributions: [],
    rechargeOn: 'rest',
    restRecoveryMode: 'full',
    ...overrides,
  };
}

// ----------------------------------------------------------------
// decrementPool
// ----------------------------------------------------------------

describe('decrementPool', () => {
  it('reduces the pool current value by 1', () => {
    let state = combatReducer(undefined, initNewSession({ maxHP: 20, pools: [makePool()] }));
    state = combatReducer(state, decrementPool({ poolId: 'ki', amount: 1 }));
    expect(state.resourcePools['ki']).toBe(7);
  });

  it('reduces the pool current value by a custom amount', () => {
    let state = combatReducer(undefined, initNewSession({ maxHP: 20, pools: [makePool()] }));
    state = combatReducer(state, decrementPool({ poolId: 'ki', amount: 3 }));
    expect(state.resourcePools['ki']).toBe(5);
  });

  it('does not go below 0', () => {
    let state = combatReducer(
      undefined,
      initNewSession({ maxHP: 20, pools: [makePool({ max: 2 })] }),
    );
    state = combatReducer(state, decrementPool({ poolId: 'ki', amount: 10 }));
    expect(state.resourcePools['ki']).toBe(0);
  });

  it('is a no-op for an unknown pool id', () => {
    const state = combatReducer(undefined, decrementPool({ poolId: 'nonexistent', amount: 1 }));
    expect(state.resourcePools['nonexistent']).toBeUndefined();
  });
});

// ----------------------------------------------------------------
// applyNewEncounter
// ----------------------------------------------------------------

describe('applyNewEncounter', () => {
  it('resets per_encounter pools to their max', () => {
    const encounterPool = makePool({
      id: 'stamina',
      name: 'Stamina',
      max: 10,
      rechargeOn: 'per_encounter',
    });
    let state = combatReducer(undefined, initNewSession({ maxHP: 20, pools: [encounterPool] }));
    state = combatReducer(state, decrementPool({ poolId: 'stamina', amount: 7 }));
    expect(state.resourcePools['stamina']).toBe(3);
    state = combatReducer(state, applyNewEncounter([encounterPool]));
    expect(state.resourcePools['stamina']).toBe(10);
  });

  it('does not reset rest-recharge pools', () => {
    const restPool = makePool({ id: 'ki', max: 8, rechargeOn: 'rest' });
    const encounterPool = makePool({ id: 'stamina', max: 10, rechargeOn: 'per_encounter' });
    let state = combatReducer(
      undefined,
      initNewSession({ maxHP: 20, pools: [restPool, encounterPool] }),
    );
    state = combatReducer(state, decrementPool({ poolId: 'ki', amount: 4 }));
    state = combatReducer(state, decrementPool({ poolId: 'stamina', amount: 5 }));
    state = combatReducer(state, applyNewEncounter([restPool, encounterPool]));
    expect(state.resourcePools['ki']).toBe(4);
    expect(state.resourcePools['stamina']).toBe(10);
  });

  it('does not reset special-recharge pools', () => {
    const specialPool = makePool({ id: 'grit', max: 3, rechargeOn: 'special' });
    let state = combatReducer(undefined, initNewSession({ maxHP: 20, pools: [specialPool] }));
    state = combatReducer(state, decrementPool({ poolId: 'grit', amount: 2 }));
    state = combatReducer(state, applyNewEncounter([specialPool]));
    expect(state.resourcePools['grit']).toBe(1);
  });
});

// ----------------------------------------------------------------
// initNewSession with pools
// ----------------------------------------------------------------

describe('initNewSession with pools', () => {
  it('initialises resource pools to their max values', () => {
    const pools = [
      makePool({ id: 'ki', max: 8 }),
      makePool({ id: 'rage', max: 12, rechargeOn: 'rest' }),
    ];
    const state = combatReducer(undefined, initNewSession({ maxHP: 40, pools }));
    expect(state.resourcePools['ki']).toBe(8);
    expect(state.resourcePools['rage']).toBe(12);
  });

  it('initialises to empty resourcePools when no pools provided', () => {
    const state = combatReducer(undefined, initNewSession({ maxHP: 20 }));
    expect(state.resourcePools).toEqual({});
  });
});

// ----------------------------------------------------------------
// initFromSession restores resource pools
// ----------------------------------------------------------------

describe('initFromSession resource pools', () => {
  it('restores resourcePools from the session doc', () => {
    const state = combatReducer(
      undefined,
      initFromSession(makeSessionDoc({ resourcePools: { ki: 5, rage: 3 } })),
    );
    expect(state.resourcePools['ki']).toBe(5);
    expect(state.resourcePools['rage']).toBe(3);
  });
});
