import React from 'react';
import { render, fireEvent, setHookStateAt, type RenderedNode } from '../../helpers/testUtils';
import { RISSI_FIXTURE } from '@/data/fixtures/rissi';
import type { Character } from '@/types';
import type { CharacterSummary } from '@/types/character';

const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

// ---- Store ----

const mockDispatch = jest.fn();
const mockUnwrap = jest.fn().mockResolvedValue(undefined);

let mockCharacter: Character | null = null;
let mockCharacters: CharacterSummary[] = [];
let mockCombat: Record<string, unknown> = {};

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: (selector: (s: unknown) => unknown) =>
    selector({
      characters: { activeCharacter: mockCharacter, characters: mockCharacters },
      auth: { user: { uid: 'user-1' } },
      combat: mockCombat,
    }),
}));

const mockUpdateCharacter = jest.fn((args: unknown) => ({
  type: 'characters/updateCharacter',
  args,
}));
jest.mock('@store/slices/charactersSlice', () => ({
  updateCharacter: (args: unknown) => mockUpdateCharacter(args),
}));

// ---- Environment ----

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: {
      bg: { primary: '#111', secondary: '#222', tertiary: '#333' },
      border: { DEFAULT: '#ccc' },
      text: { primary: '#fff', secondary: '#aaa', tertiary: '#666', accent: '#FFD700' },
      accent: { DEFAULT: '#8B0000' },
      error: { DEFAULT: '#B00' },
      primary: { DEFAULT: '#6B21A8' },
    },
    fantasy: { gold: '#FFD700', bronze: '#CD7F32', darkWood: '#3b2b1a' },
  }),
}));

jest.mock('react-native-safe-area-context', () => ({
  SafeAreaView: ({ children }: { children: React.ReactNode }) =>
    React.createElement('SafeAreaView', null, children),
}));

const mockShowAlert = jest.fn();
jest.mock('@/utils/crossPlatformAlert', () => ({
  showAlert: (...a: unknown[]) => mockShowAlert(...a),
}));

jest.mock('@services/PlaySessionService', () => ({
  PlaySessionService: {
    create: jest.fn().mockResolvedValue(undefined),
    delete: jest.fn().mockResolvedValue(undefined),
    get: jest.fn().mockResolvedValue(null),
    listActive: jest.fn().mockResolvedValue([]),
    cancelPendingUpdate: jest.fn(),
    scheduleUpdate: jest.fn(),
  },
}));

jest.mock('@services/CombatService', () => ({
  CombatService: { calculateAllTotals: jest.fn().mockReturnValue(null) },
}));

jest.mock('@services/DamageResolutionService', () => ({
  DamageResolutionService: {
    extractResistances: jest.fn().mockReturnValue({ dr: [], energyResistance: {} }),
  },
}));

jest.mock('@store/thunks/turnThunks', () => ({ startTurn: jest.fn(), endTurn: jest.fn() }));
jest.mock('@store/thunks/conditionThunks', () => ({ toggleCondition: jest.fn() }));

// ---- Panel stubs ----
// Each stub echoes the props under test onto its own output element, which is
// what the lightweight renderer records on the node.

function stub(name: string, keys: string[]) {
  const Stub = (props: Record<string, unknown>) => {
    const echoed: Record<string, unknown> = { testID: `${name}-stub` };
    for (const k of keys) echoed[k] = props[k];
    return React.createElement(name, echoed);
  };
  Stub.displayName = `${name}Stub`;
  return Stub;
}

jest.mock('@/components/combat/HPTracker', () => ({
  HPTracker: stub('HPTracker', ['currentHP', 'maxHP', 'tempHP', 'nonlethalDamage']),
}));
jest.mock('@/components/combat/InitiativeRow', () => ({
  InitiativeRow: stub('InitiativeRow', []),
}));
jest.mock('@/components/combat/AttackPanel', () => ({ AttackPanel: stub('AttackPanel', []) }));
jest.mock('@/components/combat/DefensePanel', () => ({ DefensePanel: stub('DefensePanel', []) }));
jest.mock('@/components/combat/ResourcesPlayPanel', () => ({
  ResourcesPlayPanel: stub('ResourcesPlayPanel', []),
}));
jest.mock('@/components/combat/BuffsPanel', () => ({ BuffsPanel: stub('BuffsPanel', []) }));
jest.mock('@/components/combat/SpellsPanel', () => ({ SpellsPanel: stub('SpellsPanel', []) }));
jest.mock('@/components/combat/CombatAbilityToggles', () => ({
  CombatAbilityToggles: stub('CombatAbilityToggles', []),
}));
jest.mock('@/components/combat/RollLog', () => ({ RollLog: stub('RollLog', []) }));
jest.mock('@/components/combat/DamageInputPanel', () => ({
  DamageInputPanel: stub('DamageInputPanel', []),
}));
jest.mock('@/components/dice/DiceRoller', () => ({ DiceRoller: stub('DiceRoller', []) }));

import PlayScreen from '../../../app/(tabs)/play/index';

// ---- Helpers ----

function characterWith(hp: Partial<Character['combatStats']['hitPoints']>): Character {
  const c = JSON.parse(JSON.stringify(RISSI_FIXTURE)) as Character;
  c.combatStats.hitPoints = { ...c.combatStats.hitPoints, ...hp };
  return c;
}

function inSession(overrides: Record<string, unknown> = {}) {
  return {
    activeBuffs: [],
    combatAbilities: {
      activeToggles: {},
      twoWeaponFighting: false,
      twoWeaponFightingLightOffhand: false,
    },
    currentHP: 12,
    tempHP: 0,
    nonlethalDamage: 0,
    isStaggered: false,
    staggeredAutoApplied: false,
    isStabilized: false,
    pendingStabilizationPrompt: false,
    round: 1,
    rollLog: [],
    buffLibrary: [{ id: 'seeded' }],
    resourcePools: {},
    preparedSpellsCast: {},
    spellSlotsUsed: {},
    ...overrides,
  };
}

function hpTracker(tree: RenderedNode) {
  const found: RenderedNode[] = [];
  const walk = (n: RenderedNode) => {
    if (n.props?.testID === 'HPTracker-stub') found.push(n);
    for (const ch of n.children) if (typeof ch !== 'string') walk(ch);
  };
  walk(tree);
  if (found.length === 0) throw new Error('HPTracker stub not rendered');
  return found[0];
}

beforeEach(() => {
  jest.clearAllMocks();
  mockCharacters = [];
  mockDispatch.mockImplementation(() => ({ unwrap: mockUnwrap }));
  mockUnwrap.mockResolvedValue(undefined);
});

// ----------------------------------------------------------------

describe('Play screen — maximum hit points', () => {
  it('shows the manual maximum, not the sum of the parts', () => {
    // The sheet's parts add to 187; the player has overridden the maximum to 210.
    mockCharacter = characterWith({
      base: 187,
      constitution: 0,
      favoredClass: 0,
      other: 0,
      manualMax: 210,
      max: 210,
      current: 200,
    });
    mockCombat = inSession({ currentHP: 200 });

    const { tree } = render(React.createElement(PlayScreen));

    expect(hpTracker(tree).props.maxHP).toBe(210);
  });

  it('falls back to the computed maximum when no override is set', () => {
    mockCharacter = characterWith({
      base: 187,
      constitution: 0,
      favoredClass: 0,
      other: 0,
      manualMax: null,
      max: 187,
      current: 187,
    });
    mockCombat = inSession({ currentHP: 187 });

    const { tree } = render(React.createElement(PlayScreen));

    expect(hpTracker(tree).props.maxHP).toBe(187);
  });
});

describe('Play screen — ending a session', () => {
  it('writes the session hit points back to the character', async () => {
    mockCharacter = characterWith({ max: 40, manualMax: 40, current: 40, nonlethal: 0 });
    mockCombat = inSession({ currentHP: 12, nonlethalDamage: 5 });

    const { getByLabelText } = render(React.createElement(PlayScreen));
    fireEvent.press(getByLabelText('End combat'));
    await flushPromises();

    expect(mockUpdateCharacter).toHaveBeenCalledTimes(1);
    const arg = mockUpdateCharacter.mock.calls[0][0] as {
      characterId: string;
      data: Character;
    };
    expect(arg.data.combatStats.hitPoints.current).toBe(12);
    expect(arg.data.combatStats.hitPoints.nonlethal).toBe(5);
    expect(arg.data.combatStats.hitPoints.currentInitialized).toBe(true);
  });

  it('persists temporary hit points — they last as long as their source', async () => {
    mockCharacter = characterWith({ max: 40, manualMax: 40, current: 40, temporary: 0 });
    mockCombat = inSession({ currentHP: 12, tempHP: 9 });

    const { getByLabelText } = render(React.createElement(PlayScreen));
    fireEvent.press(getByLabelText('End combat'));
    await flushPromises();

    const arg = mockUpdateCharacter.mock.calls[0][0] as { data: Character };
    expect(arg.data.combatStats.hitPoints.temporary).toBe(9);
  });

  it('persists temporary hit points already spent down to zero', async () => {
    mockCharacter = characterWith({ max: 40, manualMax: 40, current: 40, temporary: 9 });
    mockCombat = inSession({ currentHP: 12, tempHP: 0 });

    const { getByLabelText } = render(React.createElement(PlayScreen));
    fireEvent.press(getByLabelText('End combat'));
    await flushPromises();

    const arg = mockUpdateCharacter.mock.calls[0][0] as { data: Character };
    expect(arg.data.combatStats.hitPoints.temporary).toBe(0);
  });

  it('tells the user when the write-back fails rather than failing silently', async () => {
    mockCharacter = characterWith({ max: 40, manualMax: 40, current: 40 });
    mockCombat = inSession({ currentHP: 12 });
    mockUnwrap.mockRejectedValueOnce(new Error('offline'));
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const { getByLabelText } = render(React.createElement(PlayScreen));
    fireEvent.press(getByLabelText('End combat'));
    await flushPromises();

    expect(mockShowAlert).toHaveBeenCalledWith('Hit Points Not Saved', expect.any(String));
    errorSpy.mockRestore();
  });
});

// ----------------------------------------------------------------

describe('Play screen — starting a new session', () => {
  // Sets up the picker view by forcing sessionCheckDone=true (hook slot 2).
  // Slot index: useMemo(th)=0, useState(activeTab)=1, useState(sessionCheckDone)=2.
  // useEffect is a no-op in the test renderer and does not consume a slot.
  const SESSION_CHECK_DONE_SLOT = 2;

  function notInSession(): Record<string, unknown> {
    return {
      currentHP: null,
      tempHP: 0,
      nonlethalDamage: 0,
      activeBuffs: [],
      combatAbilities: {
        activeToggles: {},
        twoWeaponFighting: false,
        twoWeaponFightingLightOffhand: false,
      },
      isStaggered: false,
      staggeredAutoApplied: false,
      isDying: false,
      dyingAutoApplied: false,
      isStabilized: false,
      pendingStabilizationPrompt: false,
      round: 0,
      rollLog: [],
      buffLibrary: [],
      resourcePools: {},
      preparedSpellsCast: {},
      spellSlotsUsed: {},
    };
  }

  it('seeds the new session with the character sheet current HP, not max HP', async () => {
    // Character is at 12/40 from the previous session — the bug would start at 40/40.
    mockCharacter = characterWith({
      max: 40,
      manualMax: 40,
      current: 12,
      nonlethal: 0,
      temporary: 0,
    });
    mockCharacters = [
      {
        id: 'fixture-rissi',
        name: 'Rissi',
        level: 11,
        race: 'Human',
        classes: 'Cleric 11',
        lastUpdated: new Date(),
      },
    ];
    mockCombat = notInSession();

    const { rerender } = render(React.createElement(PlayScreen));

    // Force the session-check-done flag so the picker renders rather than
    // the loading spinner (effects are no-ops in this test renderer).
    setHookStateAt(SESSION_CHECK_DONE_SLOT, true);
    const updatedTree = rerender();

    // PlayScreen returns <SessionPicker onNewSession={handleNewSession} .../>.
    // The renderer preserves the props on the SessionPicker node even if the
    // child component itself throws during rendering (e.g. missing theme key).
    // We call onNewSession directly rather than locating a UI button, which
    // avoids depending on the picker's internal rendering behaviour.
    expect(updatedTree.type).toBe('SessionPicker');
    const { onNewSession } = updatedTree.props as { onNewSession: (id: string) => void };
    onNewSession('fixture-rissi');

    // showAlert is called; extract the "Start New Session" button's onPress.
    expect(mockShowAlert).toHaveBeenCalledWith(
      'New Session',
      expect.any(String),
      expect.any(Array),
    );
    const alertButtons = mockShowAlert.mock.calls[0][2] as Array<{
      text: string;
      onPress?: () => Promise<void>;
    }>;
    const startBtn = alertButtons.find((b) => b.text === 'Start New Session');
    expect(startBtn).toBeDefined();
    expect(startBtn?.onPress).toBeDefined();
    await startBtn!.onPress!();
    await flushPromises();

    // The dispatch must carry currentHP=12 from the character sheet, not 40 (maxHP).
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'combat/initNewSession',
        payload: expect.objectContaining({ currentHP: 12, maxHP: 40 }),
      }),
    );
  });
});
