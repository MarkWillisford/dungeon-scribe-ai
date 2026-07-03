import React from 'react';
import { act, create } from 'react-test-renderer';
import EntryRoute from '../../../app/(tabs)/characters/entry';
import { setActiveRuleset, clearRuleset } from '@/store/slices/rulesetSlice';
import { PRESET_GO_NUTS } from '@/config/rulesetPresets';
import type { Character } from '@/types';

// ---- Search params (mutable per test) ----

let mockParams: Record<string, string> = {};

jest.mock('expo-router', () => ({
  useLocalSearchParams: () => mockParams,
  useRouter: () => ({ back: jest.fn(), replace: jest.fn() }),
  Link: 'Link',
  Stack: { Screen: 'Screen' },
}));

// ---- Dispatch mock ----

const mockDispatch = jest.fn();

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: jest.fn().mockReturnValue(null),
}));

// ---- Thunk / slice mocks ----

jest.mock('@/store/thunks/loadCharacterById', () => ({
  loadCharacterById: jest.fn(() => 'LOAD_THUNK'),
}));

jest.mock('@/store/slices/gameDataSlice', () => ({
  loadClasses: jest.fn(() => 'LOAD_CLASSES_THUNK'),
}));

jest.mock('@/store/slices/characterEntrySlice', () => ({
  loadCharacter: jest.fn((args) => ({ type: 'characterEntry/load', payload: args })),
}));

// ---- Component stubs ----

jest.mock('@/components/character/direct-entry/CharacterEntryScreen', () => ({
  CharacterEntryScreen: () => null,
}));

jest.mock('@/components/ui/LoadingSpinner', () => ({
  LoadingSpinner: () => null,
}));

jest.mock('@/services/CharacterService', () => ({
  CharacterService: {
    createBlankCharacter: jest.fn(() => ({ info: {}, ruleset: null })),
  },
}));

// ---- Test data ----

const savedCharacter = {
  id: 'char-abc',
  ruleset: PRESET_GO_NUTS,
} as unknown as Character;

// ---- Setup ----

beforeEach(() => {
  jest.clearAllMocks();
  mockParams = {};
  // Default: .unwrap() resolves the saved character
  mockDispatch.mockReturnValue({ unwrap: () => Promise.resolve(savedCharacter) });
});

// ---- Tests ----

describe('EntryRoute — ruleset sync on load', () => {
  it('dispatches setActiveRuleset with character.ruleset when mode=edit', async () => {
    mockParams = { mode: 'edit', characterId: 'char-abc' };

    await act(async () => {
      create(<EntryRoute />);
      // Allow the async initCharacter chain to resolve
      await Promise.resolve();
      await Promise.resolve();
    });

    expect(mockDispatch).toHaveBeenCalledWith(setActiveRuleset(savedCharacter.ruleset));
  });

  it('does not dispatch setActiveRuleset when mode=new', async () => {
    mockParams = { mode: 'new' };

    await act(async () => {
      create(<EntryRoute />);
      await Promise.resolve();
      await Promise.resolve();
    });

    const calls = mockDispatch.mock.calls.map((c) => c[0]);
    const rulesetCalls = calls.filter(
      (a) => typeof a === 'object' && a !== null && a.type === 'ruleset/setActiveRuleset',
    );
    expect(rulesetCalls).toHaveLength(0);
  });

  it('does not dispatch setActiveRuleset when loadCharacterById rejects', async () => {
    mockParams = { mode: 'edit', characterId: 'char-abc' };

    mockDispatch.mockImplementation((action) => {
      if (action === 'LOAD_THUNK') {
        return { unwrap: () => Promise.reject(new Error('load failed')) };
      }
      return {};
    });

    await act(async () => {
      create(<EntryRoute />);
      await Promise.resolve();
      await Promise.resolve();
      await Promise.resolve();
    });

    const calls = mockDispatch.mock.calls.map((c) => c[0]);

    const rulesetCalls = calls.filter(
      (a) => typeof a === 'object' && a !== null && a.type === 'ruleset/setActiveRuleset',
    );
    expect(rulesetCalls).toHaveLength(0);

    const loadCalls = calls.filter(
      (a) => typeof a === 'object' && a !== null && a.type === 'characterEntry/load',
    );
    expect(loadCalls).toHaveLength(1);
    expect(loadCalls[0].payload.mode).toBe('new');
  });

  it('dispatches clearRuleset on unmount', async () => {
    mockParams = {};

    let renderer: ReturnType<typeof create>;
    await act(async () => {
      renderer = create(<EntryRoute />);
      await Promise.resolve();
    });

    mockDispatch.mockClear();

    await act(async () => {
      renderer!.unmount();
    });

    expect(mockDispatch).toHaveBeenCalledWith(clearRuleset());
  });
});
