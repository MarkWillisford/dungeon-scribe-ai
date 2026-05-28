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
  toggleStaggered,
  applyNonlethalRest,
  applyLongRest,
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
  togglePreparedSpell,
  useSpellSlot,
  confirmStabilization,
  clearStabilizationPrompt,
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
    expect(state.combatAbilities.activeToggles).toEqual({});
    expect(state.combatAbilities.twoWeaponFighting).toBe(false);
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
  it('toggles a feat ID in activeToggles', () => {
    let state = combatReducer(undefined, toggleCombatAbility('power_attack'));
    expect(state.combatAbilities.activeToggles['power_attack']).toBe(true);
    state = combatReducer(state, toggleCombatAbility('power_attack'));
    expect(state.combatAbilities.activeToggles['power_attack']).toBe(false);
  });

  it('toggles feat IDs independently', () => {
    let state = combatReducer(undefined, toggleCombatAbility('rage'));
    expect(state.combatAbilities.activeToggles['rage']).toBe(true);
    expect(state.combatAbilities.activeToggles['power_attack']).toBeFalsy();
  });

  it('toggles twoWeaponFighting named field', () => {
    let state = combatReducer(undefined, toggleCombatAbility('twoWeaponFighting'));
    expect(state.combatAbilities.twoWeaponFighting).toBe(true);
    state = combatReducer(state, toggleCombatAbility('twoWeaponFighting'));
    expect(state.combatAbilities.twoWeaponFighting).toBe(false);
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

  it('auto-applies staggered when nonlethal reaches current HP', () => {
    let state = combatReducer(undefined, initHP(10));
    state = combatReducer(state, adjustNonlethal(10));
    expect(state.isStaggered).toBe(true);
    expect(state.staggeredAutoApplied).toBe(true);
  });

  it('auto-applies staggered when nonlethal exceeds current HP', () => {
    let state = combatReducer(undefined, initHP(10));
    state = combatReducer(state, adjustNonlethal(15));
    expect(state.isStaggered).toBe(true);
    expect(state.staggeredAutoApplied).toBe(true);
  });

  it('does not auto-apply staggered when nonlethal is below current HP', () => {
    let state = combatReducer(undefined, initHP(10));
    state = combatReducer(state, adjustNonlethal(9));
    expect(state.isStaggered).toBe(false);
  });

  it('does not auto-apply staggered when currentHP is null (no session)', () => {
    const state = combatReducer(undefined, adjustNonlethal(10));
    expect(state.isStaggered).toBe(false);
  });

  it('auto-clears staggered when nonlethal healed below current HP', () => {
    let state = combatReducer(undefined, initHP(10));
    state = combatReducer(state, adjustNonlethal(10)); // triggers auto-staggered
    state = combatReducer(state, adjustNonlethal(-5)); // drops to 5, below currentHP=10
    expect(state.isStaggered).toBe(false);
    expect(state.staggeredAutoApplied).toBe(false);
  });

  it('does not auto-clear staggered set manually when nonlethal drops below HP', () => {
    let state = combatReducer(undefined, initHP(10));
    state = combatReducer(state, toggleStaggered()); // manual apply
    expect(state.staggeredAutoApplied).toBe(false);
    state = combatReducer(state, adjustNonlethal(5)); // below currentHP
    // staggeredAutoApplied is false, so auto-clear should not fire
    expect(state.isStaggered).toBe(true);
  });
});

describe('toggleStaggered', () => {
  it('applies staggered manually', () => {
    let state = combatReducer(undefined, initHP(20));
    state = combatReducer(state, toggleStaggered());
    expect(state.isStaggered).toBe(true);
    expect(state.staggeredAutoApplied).toBe(false);
  });

  it('clears staggered manually', () => {
    let state = combatReducer(undefined, initHP(20));
    state = combatReducer(state, toggleStaggered()); // on
    state = combatReducer(state, toggleStaggered()); // off
    expect(state.isStaggered).toBe(false);
  });

  it('clears staggeredAutoApplied when manually clearing', () => {
    let state = combatReducer(undefined, initHP(10));
    state = combatReducer(state, adjustNonlethal(10)); // auto-apply
    expect(state.staggeredAutoApplied).toBe(true);
    state = combatReducer(state, toggleStaggered()); // manual clear
    expect(state.isStaggered).toBe(false);
    expect(state.staggeredAutoApplied).toBe(false);
  });
});

describe('applyNonlethalRest', () => {
  it('recovers 1 nonlethal per character level', () => {
    let state = combatReducer(undefined, initHP(20));
    state = combatReducer(state, adjustNonlethal(10));
    state = combatReducer(state, applyNonlethalRest({ characterLevel: 5 }));
    expect(state.nonlethalDamage).toBe(5);
  });

  it('floors nonlethal at 0 (no negative nonlethal)', () => {
    let state = combatReducer(undefined, initHP(20));
    state = combatReducer(state, adjustNonlethal(3));
    state = combatReducer(state, applyNonlethalRest({ characterLevel: 10 }));
    expect(state.nonlethalDamage).toBe(0);
  });

  it('recovers at least 1 for level 0', () => {
    let state = combatReducer(undefined, initHP(20));
    state = combatReducer(state, adjustNonlethal(5));
    state = combatReducer(state, applyNonlethalRest({ characterLevel: 0 }));
    expect(state.nonlethalDamage).toBe(4);
  });

  it('auto-clears staggered when rest drops nonlethal below current HP', () => {
    let state = combatReducer(undefined, initHP(10));
    state = combatReducer(state, adjustNonlethal(10)); // auto-staggered
    state = combatReducer(state, applyNonlethalRest({ characterLevel: 5 })); // drops to 5 < 10
    expect(state.isStaggered).toBe(false);
    expect(state.staggeredAutoApplied).toBe(false);
  });

  it('does not auto-clear staggered if nonlethal still >= current HP after rest', () => {
    let state = combatReducer(undefined, initHP(10));
    state = combatReducer(state, adjustNonlethal(12)); // auto-staggered, 12 >= 10
    state = combatReducer(state, applyNonlethalRest({ characterLevel: 1 })); // drops to 11, still >= 10
    expect(state.isStaggered).toBe(true);
  });
});

describe('adjustHP nonlethal threshold interaction', () => {
  it('auto-applies staggered when lethal damage drops HP to nonlethal level', () => {
    let state = combatReducer(undefined, initHP(20));
    state = combatReducer(state, adjustNonlethal(5)); // nonlethal=5, currentHP=20 — no stagger
    state = combatReducer(state, adjustHP({ delta: -15, maxHP: 20 })); // currentHP=5, nonlethal=5 — stagger
    expect(state.isStaggered).toBe(true);
    expect(state.staggeredAutoApplied).toBe(true);
  });

  it('auto-clears staggered when healing brings HP above nonlethal', () => {
    let state = combatReducer(undefined, initHP(5));
    state = combatReducer(state, adjustNonlethal(5)); // auto-staggered
    state = combatReducer(state, adjustHP({ delta: 10, maxHP: 20 })); // currentHP=15 > nonlethal=5
    expect(state.isStaggered).toBe(false);
    expect(state.staggeredAutoApplied).toBe(false);
  });

  it('auto-clears staggered when lethal damage drives HP to 0 or below', () => {
    let state = combatReducer(undefined, initHP(5));
    state = combatReducer(state, adjustNonlethal(5)); // auto-staggered
    state = combatReducer(state, adjustHP({ delta: -5, maxHP: 20 })); // HP=0
    expect(state.isStaggered).toBe(false);
    expect(state.staggeredAutoApplied).toBe(false);
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

describe('applyRageEndHPLoss staggered interaction', () => {
  it('auto-applies staggered when rage-end HP loss meets nonlethal threshold', () => {
    let state = combatReducer(undefined, initHP(10));
    state = combatReducer(state, adjustNonlethal(8)); // nonlethal=8, HP=10 — no stagger
    state = combatReducer(state, applyRageEndHPLoss({ newCurrentHP: 8, newTempHP: 0 })); // HP=8, nonlethal=8 — stagger
    expect(state.isStaggered).toBe(true);
    expect(state.staggeredAutoApplied).toBe(true);
  });

  it('auto-clears staggered when rage-end HP loss drives HP to 0 or below', () => {
    let state = combatReducer(undefined, initHP(5));
    state = combatReducer(state, adjustNonlethal(5)); // auto-staggered
    state = combatReducer(state, applyRageEndHPLoss({ newCurrentHP: 0, newTempHP: 0 }));
    expect(state.isStaggered).toBe(false);
    expect(state.staggeredAutoApplied).toBe(false);
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
  it('clears buffs, abilities, HP, staggered, and round but keeps library and log', () => {
    let state = combatReducer(undefined, addBuff(makeBuff()));
    state = combatReducer(state, toggleCombatAbility('powerAttack'));
    state = combatReducer(state, initHP(20));
    state = combatReducer(state, adjustNonlethal(20)); // triggers auto-staggered
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
    expect(state.combatAbilities.activeToggles).toEqual({});
    expect(state.currentHP).toBeNull();
    expect(state.round).toBe(0);
    expect(state.isStaggered).toBe(false);
    expect(state.staggeredAutoApplied).toBe(false);
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
    state = combatReducer(state, toggleCombatAbility('power_attack'));
    state = combatReducer(state, initNewSession({ maxHP: 40 }));
    expect(state.activeBuffs).toHaveLength(0);
    expect(state.combatAbilities.activeToggles).toEqual({});
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
      activeToggles: { power_attack: true },
      twoWeaponFighting: false,
      twoWeaponFightingLightOffhand: false,
      combatExpertisePenalty: 2,
    },
    spellSlotsUsed: { wizard: [0, 2, 1] },
    preparedSpellsCast: { '0': true },
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
    expect(state.combatAbilities.activeToggles['power_attack']).toBe(true);
    expect(state.combatAbilities.combatExpertisePenalty).toBe(2);
  });

  it('migrates old flat-boolean combatAbilities format', () => {
    const legacyDoc = {
      ...makeSessionDoc(),
      combatAbilities: {
        powerAttack: true,
        deadlyAim: false,
        rage: true,
        twoWeaponFighting: true,
        twoWeaponFightingLightOffhand: false,
        haste: false,
        flurryOfBlows: false,
        combatExpertise: false,
        combatExpertisePenalty: 1,
      },
    } as unknown as PlaySessionDoc;
    const state = combatReducer(undefined, initFromSession(legacyDoc));
    expect(state.combatAbilities.activeToggles['power_attack']).toBe(true);
    expect(state.combatAbilities.activeToggles['rage']).toBe(true);
    expect(state.combatAbilities.twoWeaponFighting).toBe(true);
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

  it('handles a session doc with empty buffs and missing combatAbilities', () => {
    const doc: Partial<PlaySessionDoc> = { ...makeSessionDoc({ activeBuffs: [] }) };
    delete doc.combatAbilities;
    const state = combatReducer(undefined, initFromSession(doc as unknown as PlaySessionDoc));
    expect(state.activeBuffs).toHaveLength(0);
    expect(state.combatAbilities.activeToggles).toEqual({});
    expect(state.combatAbilities.combatExpertisePenalty).toBe(1);
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
  it('reduces the pool current value by an explicit amount of 1', () => {
    let state = combatReducer(undefined, initNewSession({ maxHP: 20, pools: [makePool()] }));
    state = combatReducer(state, decrementPool({ poolId: 'ki', amount: 1 }));
    expect(state.resourcePools['ki']).toBe(7);
  });

  it('uses the default decrement amount of 1 when amount is omitted', () => {
    let state = combatReducer(undefined, initNewSession({ maxHP: 20, pools: [makePool()] }));
    state = combatReducer(state, decrementPool({ poolId: 'ki' }));
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

  it('clamps unknown pool id to 0', () => {
    const state = combatReducer(undefined, decrementPool({ poolId: 'nonexistent', amount: 1 }));
    expect(state.resourcePools['nonexistent']).toBe(0);
  });

  it('is a no-op when amount is zero or negative', () => {
    let state = combatReducer(undefined, initNewSession({ maxHP: 20, pools: [makePool()] }));
    state = combatReducer(state, decrementPool({ poolId: 'ki', amount: 0 }));
    expect(state.resourcePools['ki']).toBe(8);
    state = combatReducer(state, decrementPool({ poolId: 'ki', amount: -2 }));
    expect(state.resourcePools['ki']).toBe(8);
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

  it('does not create phantom entries for pool IDs absent from state', () => {
    const knownPool = makePool({ id: 'stamina', max: 10, rechargeOn: 'per_encounter' });
    const phantomPool = makePool({ id: 'phantom', max: 5, rechargeOn: 'per_encounter' });
    let state = combatReducer(undefined, initNewSession({ maxHP: 20, pools: [knownPool] }));
    state = combatReducer(state, applyNewEncounter([knownPool, phantomPool]));
    expect(state.resourcePools['stamina']).toBe(10);
    expect(state.resourcePools['phantom']).toBeUndefined();
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

  it('defaults resourcePools to empty when missing from the session doc', () => {
    const doc: Partial<PlaySessionDoc> = { ...makeSessionDoc() };
    delete doc.resourcePools;
    const state = combatReducer(undefined, initFromSession(doc as unknown as PlaySessionDoc));
    expect(state.resourcePools).toEqual({});
  });

  it('restores preparedSpellsCast from the session doc', () => {
    const state = combatReducer(undefined, initFromSession(makeSessionDoc()));
    expect(state.preparedSpellsCast['0']).toBe(true);
  });

  it('restores spellSlotsUsed from the session doc', () => {
    const state = combatReducer(undefined, initFromSession(makeSessionDoc()));
    expect(state.spellSlotsUsed['wizard']).toEqual([0, 2, 1]);
  });

  it('defaults preparedSpellsCast and spellSlotsUsed to empty objects when absent', () => {
    const doc = makeSessionDoc();
    const { preparedSpellsCast: _psc, spellSlotsUsed: _ssu, ...rest } = doc;
    const state = combatReducer(undefined, initFromSession(rest as typeof doc));
    expect(state.preparedSpellsCast).toEqual({});
    expect(state.spellSlotsUsed).toEqual({});
  });
});

// ----------------------------------------------------------------
// togglePreparedSpell
// ----------------------------------------------------------------

describe('togglePreparedSpell', () => {
  it('marks a spell as cast (false → true)', () => {
    const state = combatReducer(undefined, togglePreparedSpell({ spellIndex: 0 }));
    expect(state.preparedSpellsCast['0']).toBe(true);
  });

  it('unmarks a cast spell (true → false)', () => {
    let state = combatReducer(undefined, togglePreparedSpell({ spellIndex: 2 }));
    state = combatReducer(state, togglePreparedSpell({ spellIndex: 2 }));
    expect(state.preparedSpellsCast['2']).toBe(false);
  });

  it('toggles different spell indices independently', () => {
    let state = combatReducer(undefined, togglePreparedSpell({ spellIndex: 0 }));
    state = combatReducer(state, togglePreparedSpell({ spellIndex: 3 }));
    expect(state.preparedSpellsCast['0']).toBe(true);
    expect(state.preparedSpellsCast['3']).toBe(true);
    state = combatReducer(state, togglePreparedSpell({ spellIndex: 0 }));
    expect(state.preparedSpellsCast['0']).toBe(false);
    expect(state.preparedSpellsCast['3']).toBe(true);
  });

  it('starts from false when the key is absent', () => {
    const state = combatReducer(undefined, togglePreparedSpell({ spellIndex: 99 }));
    expect(state.preparedSpellsCast['99']).toBe(true);
  });
});

// ----------------------------------------------------------------
// useSpellSlot
// ----------------------------------------------------------------

describe('useSpellSlot', () => {
  it('increments used count for the given pool and level', () => {
    const state = combatReducer(undefined, useSpellSlot({ poolKey: 'sorcerer', level: 2 }));
    expect(state.spellSlotsUsed['sorcerer'][2]).toBe(1);
  });

  it('increments again on repeated use', () => {
    let state = combatReducer(undefined, useSpellSlot({ poolKey: 'bard', level: 1 }));
    state = combatReducer(state, useSpellSlot({ poolKey: 'bard', level: 1 }));
    state = combatReducer(state, useSpellSlot({ poolKey: 'bard', level: 1 }));
    expect(state.spellSlotsUsed['bard'][1]).toBe(3);
  });

  it('initialises the pool entry when first used', () => {
    const state = combatReducer(undefined, useSpellSlot({ poolKey: 'wizard', level: 3 }));
    expect(state.spellSlotsUsed['wizard']).toBeDefined();
    expect(state.spellSlotsUsed['wizard'][3]).toBe(1);
  });

  it('tracks different pools independently', () => {
    let state = combatReducer(undefined, useSpellSlot({ poolKey: 'cleric', level: 1 }));
    state = combatReducer(state, useSpellSlot({ poolKey: 'wizard', level: 1 }));
    state = combatReducer(state, useSpellSlot({ poolKey: 'wizard', level: 1 }));
    expect(state.spellSlotsUsed['cleric'][1]).toBe(1);
    expect(state.spellSlotsUsed['wizard'][1]).toBe(2);
  });

  it('tracks different levels within the same pool independently', () => {
    let state = combatReducer(undefined, useSpellSlot({ poolKey: 'sorcerer', level: 1 }));
    state = combatReducer(state, useSpellSlot({ poolKey: 'sorcerer', level: 2 }));
    state = combatReducer(state, useSpellSlot({ poolKey: 'sorcerer', level: 2 }));
    expect(state.spellSlotsUsed['sorcerer'][1]).toBe(1);
    expect(state.spellSlotsUsed['sorcerer'][2]).toBe(2);
  });

  it('ignores negative level and does not mutate state', () => {
    const state = combatReducer(undefined, useSpellSlot({ poolKey: 'wizard', level: -1 }));
    expect(state.spellSlotsUsed['wizard']).toBeUndefined();
  });

  it('ignores non-integer level and does not mutate state', () => {
    const state = combatReducer(undefined, useSpellSlot({ poolKey: 'bard', level: 1.5 }));
    expect(state.spellSlotsUsed['bard']).toBeUndefined();
  });

  it('re-derives staggered when nonlethal >= currentHP on load', () => {
    const state = combatReducer(
      undefined,
      initFromSession(makeSessionDoc({ currentHP: 10, nonlethalDamage: 10 })),
    );
    expect(state.isStaggered).toBe(true);
    expect(state.staggeredAutoApplied).toBe(true);
  });

  it('clears staggered when nonlethal < currentHP on load', () => {
    const state = combatReducer(
      undefined,
      initFromSession(makeSessionDoc({ currentHP: 20, nonlethalDamage: 3 })),
    );
    expect(state.isStaggered).toBe(false);
    expect(state.staggeredAutoApplied).toBe(false);
  });
});

// ----------------------------------------------------------------
// applyLongRest
// ----------------------------------------------------------------

describe('applyLongRest', () => {
  const restAction = (overrides: Partial<Parameters<typeof applyLongRest>[0]> = {}) =>
    applyLongRest({
      maxHP: 20,
      characterLevel: 5,
      pools: [],
      specialPoolRecovery: {},
      ...overrides,
    });

  it('is a no-op when there is no active session (currentHP is null)', () => {
    const state = combatReducer(undefined, restAction({ maxHP: 999 }));
    expect(state.currentHP).toBeNull();
  });

  it('recovers at least 1 nonlethal at level 0', () => {
    let state = combatReducer(undefined, initHP(20));
    state = combatReducer(state, adjustNonlethal(5));
    state = combatReducer(state, restAction({ characterLevel: 0 }));
    expect(state.nonlethalDamage).toBe(4);
  });

  it('resets currentHP to maxHP', () => {
    let state = combatReducer(undefined, initHP(20));
    state = combatReducer(state, adjustHP({ delta: -8, maxHP: 20 }));
    expect(state.currentHP).toBe(12);
    state = combatReducer(state, restAction({ maxHP: 20 }));
    expect(state.currentHP).toBe(20);
  });

  it('resets preparedSpellsCast to empty', () => {
    let state = combatReducer(undefined, initHP(20));
    state = combatReducer(state, togglePreparedSpell({ spellIndex: 0 }));
    state = combatReducer(state, togglePreparedSpell({ spellIndex: 3 }));
    state = combatReducer(state, restAction());
    expect(state.preparedSpellsCast).toEqual({});
  });

  it('resets spellSlotsUsed to empty', () => {
    let state = combatReducer(undefined, initHP(20));
    state = combatReducer(state, useSpellSlot({ poolKey: 'wizard', level: 1 }));
    state = combatReducer(state, useSpellSlot({ poolKey: 'wizard', level: 2 }));
    state = combatReducer(state, restAction());
    expect(state.spellSlotsUsed).toEqual({});
  });

  it('refills rechargeOn rest pools to max', () => {
    const pool = makePool({ id: 'ki', max: 10, rechargeOn: 'rest' });
    let state = combatReducer(undefined, initNewSession({ maxHP: 20, pools: [pool] }));
    state = combatReducer(state, decrementPool({ poolId: 'ki', amount: 7 }));
    expect(state.resourcePools['ki']).toBe(3);
    state = combatReducer(state, restAction({ pools: [pool] }));
    expect(state.resourcePools['ki']).toBe(10);
  });

  it('does not refill per_encounter pools on rest', () => {
    const pool = makePool({ id: 'stamina', max: 5, rechargeOn: 'per_encounter' });
    let state = combatReducer(undefined, initNewSession({ maxHP: 20, pools: [pool] }));
    state = combatReducer(state, decrementPool({ poolId: 'stamina', amount: 3 }));
    expect(state.resourcePools['stamina']).toBe(2);
    state = combatReducer(state, restAction({ pools: [pool] }));
    expect(state.resourcePools['stamina']).toBe(2);
  });

  it('applies formula recovery for special pools, not max reset', () => {
    const pool = makePool({
      id: 'arcane_reservoir',
      max: 10,
      rechargeOn: 'special',
      restRecoveryFormula: '3 + casterLevel',
    });
    let state = combatReducer(undefined, initNewSession({ maxHP: 20, pools: [pool] }));
    state = combatReducer(state, decrementPool({ poolId: 'arcane_reservoir', amount: 8 }));
    expect(state.resourcePools['arcane_reservoir']).toBe(2);
    state = combatReducer(
      state,
      restAction({ pools: [pool], specialPoolRecovery: { arcane_reservoir: 5 } }),
    );
    expect(state.resourcePools['arcane_reservoir']).toBe(7);
    expect(state.resourcePools['arcane_reservoir']).not.toBe(pool.max);
  });

  it('caps special pool recovery at max', () => {
    const pool = makePool({ id: 'arcane_reservoir', max: 10, rechargeOn: 'special' });
    let state = combatReducer(undefined, initNewSession({ maxHP: 20, pools: [pool] }));
    state = combatReducer(state, decrementPool({ poolId: 'arcane_reservoir', amount: 2 }));
    expect(state.resourcePools['arcane_reservoir']).toBe(8);
    state = combatReducer(
      state,
      restAction({ pools: [pool], specialPoolRecovery: { arcane_reservoir: 100 } }),
    );
    expect(state.resourcePools['arcane_reservoir']).toBe(10);
  });

  it('ignores special pools with no recovery entry', () => {
    const pool = makePool({ id: 'grit', max: 3, rechargeOn: 'special' });
    let state = combatReducer(undefined, initNewSession({ maxHP: 20, pools: [pool] }));
    state = combatReducer(state, decrementPool({ poolId: 'grit', amount: 2 }));
    expect(state.resourcePools['grit']).toBe(1);
    state = combatReducer(state, restAction({ pools: [pool] }));
    expect(state.resourcePools['grit']).toBe(1);
  });

  it('reduces nonlethal damage by character level', () => {
    let state = combatReducer(undefined, initHP(20));
    state = combatReducer(state, adjustNonlethal(10));
    state = combatReducer(state, restAction({ characterLevel: 4 }));
    expect(state.nonlethalDamage).toBe(6);
  });

  it('does not reduce nonlethal below zero', () => {
    let state = combatReducer(undefined, initHP(20));
    state = combatReducer(state, adjustNonlethal(3));
    state = combatReducer(state, restAction({ characterLevel: 10 }));
    expect(state.nonlethalDamage).toBe(0);
  });

  it('clears auto-applied staggered when nonlethal drops below max hp after rest', () => {
    let state = combatReducer(undefined, initHP(10));
    state = combatReducer(state, adjustNonlethal(10));
    expect(state.isStaggered).toBe(true);
    state = combatReducer(state, restAction({ maxHP: 10, characterLevel: 15 }));
    expect(state.isStaggered).toBe(false);
    expect(state.staggeredAutoApplied).toBe(false);
  });
});

// ----------------------------------------------------------------
// Dying state
// ----------------------------------------------------------------

describe('Dying — auto-set on HP drop below 0', () => {
  it('sets isDying when HP drops to -1', () => {
    let state = combatReducer(undefined, initHP(1));
    state = combatReducer(state, adjustHP({ delta: -2, maxHP: 20 }));
    expect(state.currentHP).toBe(-1);
    expect(state.isDying).toBe(true);
    expect(state.dyingAutoApplied).toBe(true);
  });

  it('sets isDying when HP drops below 0 by a larger amount', () => {
    let state = combatReducer(undefined, initHP(5));
    state = combatReducer(state, adjustHP({ delta: -10, maxHP: 20 }));
    expect(state.currentHP).toBe(-5);
    expect(state.isDying).toBe(true);
    expect(state.dyingAutoApplied).toBe(true);
  });

  it('does not set isDying when HP is exactly 0', () => {
    let state = combatReducer(undefined, initHP(5));
    state = combatReducer(state, adjustHP({ delta: -5, maxHP: 20 }));
    expect(state.currentHP).toBe(0);
    expect(state.isDying).toBe(false);
  });

  it('clears isDying when auto-applied and healing brings HP back to 0', () => {
    let state = combatReducer(undefined, initHP(5));
    state = combatReducer(state, adjustHP({ delta: -10, maxHP: 20 })); // HP=-5, dying
    state = combatReducer(state, adjustHP({ delta: 5, maxHP: 20 })); // HP=0
    expect(state.currentHP).toBe(0);
    expect(state.isDying).toBe(false);
    expect(state.dyingAutoApplied).toBe(false);
  });

  it('clears isDying when healing brings HP above 0', () => {
    let state = combatReducer(undefined, initHP(5));
    state = combatReducer(state, adjustHP({ delta: -10, maxHP: 20 })); // HP=-5, dying
    state = combatReducer(state, adjustHP({ delta: 10, maxHP: 20 })); // HP=5
    expect(state.isDying).toBe(false);
    expect(state.dyingAutoApplied).toBe(false);
  });

  it('clears isStabilized when healing out of dying', () => {
    let state = combatReducer(undefined, initHP(5));
    state = combatReducer(state, adjustHP({ delta: -10, maxHP: 20 }));
    state = combatReducer(state, confirmStabilization());
    state = combatReducer(state, adjustHP({ delta: 10, maxHP: 20 }));
    expect(state.isStabilized).toBe(false);
  });

  it('clears isStabilized when a stabilized dying character takes further damage', () => {
    let state = combatReducer(undefined, initHP(5));
    state = combatReducer(state, adjustHP({ delta: -10, maxHP: 20 })); // HP=-5, dying
    state = combatReducer(state, confirmStabilization()); // stabilized while still dying
    expect(state.isStabilized).toBe(true);
    state = combatReducer(state, adjustHP({ delta: -1, maxHP: 20 })); // HP=-6, still dying
    expect(state.isStabilized).toBe(false);
    expect(state.isDying).toBe(true);
  });
});

describe('endTurnDecrement while dying', () => {
  it('decrements HP by 1 when dying and not stabilized', () => {
    let state = combatReducer(undefined, initHP(3));
    state = combatReducer(state, adjustHP({ delta: -5, maxHP: 20 })); // HP=-2, dying
    state = combatReducer(state, { type: 'combat/endTurnDecrement' });
    expect(state.currentHP).toBe(-3);
  });

  it('sets pendingStabilizationPrompt when dying and not stabilized', () => {
    let state = combatReducer(undefined, initHP(3));
    state = combatReducer(state, adjustHP({ delta: -5, maxHP: 20 })); // dying
    state = combatReducer(state, { type: 'combat/endTurnDecrement' });
    expect(state.pendingStabilizationPrompt).toBe(true);
  });

  it('does not decrement HP when not dying', () => {
    let state = combatReducer(undefined, initHP(10));
    state = combatReducer(state, { type: 'combat/endTurnDecrement' });
    expect(state.currentHP).toBe(10);
  });

  it('does not set pendingStabilizationPrompt when not dying', () => {
    let state = combatReducer(undefined, initHP(10));
    state = combatReducer(state, { type: 'combat/endTurnDecrement' });
    expect(state.pendingStabilizationPrompt).toBe(false);
  });
});

describe('confirmStabilization', () => {
  it('sets isStabilized and clears pendingStabilizationPrompt', () => {
    let state = combatReducer(undefined, initHP(3));
    state = combatReducer(state, adjustHP({ delta: -5, maxHP: 20 }));
    state = combatReducer(state, { type: 'combat/endTurnDecrement' }); // sets prompt
    state = combatReducer(state, confirmStabilization());
    expect(state.isStabilized).toBe(true);
    expect(state.pendingStabilizationPrompt).toBe(false);
  });

  it('stops bleed-out on the next End Turn after stabilization', () => {
    let state = combatReducer(undefined, initHP(3));
    state = combatReducer(state, adjustHP({ delta: -5, maxHP: 20 })); // HP=-2
    state = combatReducer(state, confirmStabilization());
    const hpBeforeEndTurn = state.currentHP;
    state = combatReducer(state, { type: 'combat/endTurnDecrement' });
    expect(state.currentHP).toBe(hpBeforeEndTurn); // no change
    expect(state.pendingStabilizationPrompt).toBe(false);
  });
});

describe('clearStabilizationPrompt', () => {
  it('clears pendingStabilizationPrompt without stabilizing', () => {
    let state = combatReducer(undefined, initHP(3));
    state = combatReducer(state, adjustHP({ delta: -5, maxHP: 20 }));
    state = combatReducer(state, { type: 'combat/endTurnDecrement' });
    expect(state.pendingStabilizationPrompt).toBe(true);
    state = combatReducer(state, clearStabilizationPrompt());
    expect(state.pendingStabilizationPrompt).toBe(false);
    expect(state.isStabilized).toBe(false);
  });

  it('bleed-out continues after clearing prompt without stabilizing', () => {
    let state = combatReducer(undefined, initHP(3));
    state = combatReducer(state, adjustHP({ delta: -5, maxHP: 20 })); // HP=-2
    state = combatReducer(state, { type: 'combat/endTurnDecrement' }); // HP=-3, prompt set
    state = combatReducer(state, clearStabilizationPrompt()); // prompt cleared, not stabilized
    const hpAfterClear = state.currentHP; // -3
    state = combatReducer(state, { type: 'combat/endTurnDecrement' }); // HP=-4
    expect(state.currentHP).toBe(hpAfterClear! - 1);
    expect(state.pendingStabilizationPrompt).toBe(true);
  });
});

describe('initFromSession re-derives dying state', () => {
  it('sets isDying when session currentHP is negative', () => {
    const state = combatReducer(undefined, initFromSession(makeSessionDoc({ currentHP: -3 })));
    expect(state.isDying).toBe(true);
    expect(state.dyingAutoApplied).toBe(true);
  });

  it('does not set isDying when session currentHP is 0', () => {
    const state = combatReducer(undefined, initFromSession(makeSessionDoc({ currentHP: 0 })));
    expect(state.isDying).toBe(false);
  });

  it('does not set isDying when session currentHP is positive', () => {
    const state = combatReducer(undefined, initFromSession(makeSessionDoc({ currentHP: 10 })));
    expect(state.isDying).toBe(false);
  });

  it('restores isStabilized=true from the session doc', () => {
    const state = combatReducer(
      undefined,
      initFromSession(makeSessionDoc({ currentHP: -3, isStabilized: true })),
    );
    expect(state.isDying).toBe(true);
    expect(state.isStabilized).toBe(true);
  });

  it('defaults isStabilized to false when missing in the session doc', () => {
    const state = combatReducer(undefined, initFromSession(makeSessionDoc({ currentHP: -3 })));
    expect(state.isDying).toBe(true);
    expect(state.isStabilized).toBe(false);
  });
});
