import React from 'react';
import { Alert } from 'react-native';
import { render, type RenderedNode } from '../../helpers/testUtils';
import { CharacterEntryScreen } from '@/components/character/direct-entry/CharacterEntryScreen';

// ---- Router mock ----

const mockBack = jest.fn();
jest.mock('expo-router', () => ({
  useRouter: () => ({ back: mockBack }),
}));

// ---- Store state vars ----

const mockDispatch = jest.fn();
let mockActiveTab = 'identity';
let mockCharacterName = '';
let mockStrBase = 10;
let mockClasses: unknown[] = [];
let mockTraits: unknown[] = [];
let mockFeats: unknown[] = [];
let mockSpellPools: unknown[] = [];
let mockEditorEquipment: unknown[] = [];
let mockNotes = '';
let mockCurrentHP = 0;
let mockWarnings: { section: string; isAcknowledged: boolean }[] = [];
let mockLastValidatedAt: number | null = null;
let mockIsDirty = false;
let mockIsSaving = false;

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: (selector: (s: unknown) => unknown) =>
    selector({
      characterEntry: {
        character: {
          info: { name: mockCharacterName, notes: mockNotes },
          abilityScores: { str: { base: mockStrBase } },
          classes: { classes: mockClasses },
          combatStats: { hitPoints: { current: mockCurrentHP } },
          traits: { traits: mockTraits },
          feats: { feats: mockFeats },
          spellcasting: { pools: mockSpellPools },
          editorEquipment: mockEditorEquipment,
        },
        activeTab: mockActiveTab,
        validationWarnings: mockWarnings,
        lastValidatedAt: mockLastValidatedAt,
        isDirty: mockIsDirty,
        isSaving: mockIsSaving,
      },
      ruleset: { activeRuleset: null },
      gameData: { classes: {}, classChoiceDefinitions: {} },
    }),
}));

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: {
      bg: { primary: '#111', secondary: '#222' },
      border: { DEFAULT: '#ccc' },
      text: { primary: '#fff', secondary: '#aaa', tertiary: '#666' },
    },
    fantasy: { gold: '#FFD700', bronze: '#CD7F32', darkWood: '#5C3317' },
    shadows: { panel: {} },
    isDark: true,
  }),
}));

// ---- Thunk + service mocks ----

const mockUnwrap = jest.fn();
jest.mock('@/store/thunks/saveCharacter', () => ({
  saveCharacter: jest.fn(() => 'SAVE_THUNK'),
}));

jest.mock('@/services/CharacterValidationService', () => ({
  CharacterValidationService: { validate: jest.fn().mockResolvedValue([]) },
}));

jest.mock('@/store/slices/gameDataSlice', () => ({
  selectClassDataMap: (_state: unknown) => ({}),
}));

// ---- Child component mocks (all return null so only props matter) ----

jest.mock('@/components/character/direct-entry/CharacterEntryHeader', () => {
  const CharacterEntryHeader = () => null;
  return { CharacterEntryHeader };
});
jest.mock('@/components/ui/OrnateTab', () => {
  const OrnateTab = () => null;
  return { OrnateTab };
});
jest.mock('@/components/character/direct-entry/ValidationReportSheet', () => {
  const ValidationReportSheet = () => null;
  return { ValidationReportSheet };
});
jest.mock('@/components/character/direct-entry/IdentitySection', () => ({
  IdentitySection: () => null,
}));
jest.mock('@/components/character/direct-entry/AbilityScoreEntryPanel', () => ({
  AbilityScoreEntryPanel: () => null,
}));
jest.mock('@/components/character/direct-entry/LevelIncrementSlots', () => ({
  LevelIncrementSlots: () => null,
}));
jest.mock('@/components/character/direct-entry/ClassesSection', () => ({
  ClassesSection: () => null,
}));
jest.mock('@/components/character/direct-entry/CombatStatsSection', () => ({
  CombatStatsSection: () => null,
}));
jest.mock('@/components/character/direct-entry/SkillsSection', () => ({
  SkillsSection: () => null,
}));
jest.mock('@/components/character/direct-entry/EquipmentSection', () => ({
  EquipmentSection: () => null,
}));
jest.mock('@/components/character/direct-entry/TraitsSection', () => ({
  TraitsSection: () => null,
}));
jest.mock('@/components/character/direct-entry/FeatSlotList', () => ({
  FeatSlotList: () => null,
}));
jest.mock('@/components/character/direct-entry/SpellcastingSection', () => ({
  SpellcastingSection: () => null,
}));
jest.mock('@/components/character/direct-entry/NotesSection', () => ({
  NotesSection: () => null,
}));

// ---- Helpers ----

function findByType(node: RenderedNode, typeName: string): RenderedNode[] {
  const results: RenderedNode[] = [];
  if (node.type === typeName) results.push(node);
  for (const child of node.children) {
    if (typeof child !== 'string') results.push(...findByType(child, typeName));
  }
  return results;
}

function headerNode(tree: RenderedNode) {
  const nodes = findByType(tree, 'CharacterEntryHeader');
  expect(nodes).toHaveLength(1);
  return nodes[0];
}

function ornateTabNode(tree: RenderedNode) {
  const nodes = findByType(tree, 'OrnateTab');
  expect(nodes).toHaveLength(1);
  return nodes[0];
}

// ---- Setup ----

beforeEach(() => {
  jest.clearAllMocks();
  mockBack.mockReset();
  mockDispatch.mockReturnValue({ unwrap: mockUnwrap });
  mockUnwrap.mockResolvedValue(undefined);
  mockActiveTab = 'identity';
  mockCharacterName = '';
  mockStrBase = 10;
  mockClasses = [];
  mockTraits = [];
  mockFeats = [];
  mockSpellPools = [];
  mockEditorEquipment = [];
  mockNotes = '';
  mockCurrentHP = 0;
  mockWarnings = [];
  mockLastValidatedAt = null;
  mockIsDirty = false;
  mockIsSaving = false;
});

// ---- Tests: handleSave ----

describe('CharacterEntryScreen — handleSave', () => {
  it('dispatches saveCharacter thunk when onSave is called', async () => {
    const { tree } = render(<CharacterEntryScreen />);
    const { onSave } = headerNode(tree).props as { onSave: () => Promise<void> };
    await onSave();
    expect(mockDispatch).toHaveBeenCalledWith('SAVE_THUNK');
  });

  it('calls router.back after successful save', async () => {
    const { tree } = render(<CharacterEntryScreen />);
    const { onSave } = headerNode(tree).props as { onSave: () => Promise<void> };
    await onSave();
    expect(mockBack).toHaveBeenCalled();
  });

  it('does not call router.back when save throws', async () => {
    mockUnwrap.mockRejectedValueOnce(new Error('Save failed'));
    const { tree } = render(<CharacterEntryScreen />);
    const { onSave } = headerNode(tree).props as { onSave: () => Promise<void> };
    await onSave();
    expect(mockBack).not.toHaveBeenCalled();
  });

  it('passes a no-op as onSave when isSaving is true', async () => {
    mockIsSaving = true;
    const { tree } = render(<CharacterEntryScreen />);
    const { onSave } = headerNode(tree).props as { onSave: () => void };
    // No await: the isSaving guard returns synchronously without dispatching.
    // The async test wrapper is kept for consistency with the surrounding suite.
    onSave();
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});

// ---- Tests: handleBack ----

describe('CharacterEntryScreen — handleBack', () => {
  let alertSpy: jest.SpyInstance;

  beforeEach(() => {
    alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => undefined);
  });

  afterEach(() => {
    alertSpy.mockRestore();
  });

  it('calls router.back immediately when not dirty', () => {
    mockIsDirty = false;
    const { tree } = render(<CharacterEntryScreen />);
    const { onBack } = headerNode(tree).props as { onBack: () => void };
    onBack();
    expect(mockBack).toHaveBeenCalled();
    expect(alertSpy).not.toHaveBeenCalled();
  });

  it('shows Alert instead of navigating immediately when dirty', () => {
    mockIsDirty = true;
    const { tree } = render(<CharacterEntryScreen />);
    const { onBack } = headerNode(tree).props as { onBack: () => void };
    onBack();
    expect(mockBack).not.toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith('Unsaved Changes', expect.any(String), expect.any(Array));
  });

  it('calls router.back when Alert Leave button is pressed', () => {
    mockIsDirty = true;
    const { tree } = render(<CharacterEntryScreen />);
    const { onBack } = headerNode(tree).props as { onBack: () => void };
    onBack();
    const alertButtons: { text: string; onPress?: () => void }[] = alertSpy.mock.calls[0][2];
    const leaveBtn = alertButtons.find((b) => b.text === 'Leave');
    expect(leaveBtn).toBeDefined();
    leaveBtn!.onPress?.();
    expect(mockBack).toHaveBeenCalled();
  });

  it('does not navigate when Alert Cancel button is pressed', () => {
    mockIsDirty = true;
    const { tree } = render(<CharacterEntryScreen />);
    const { onBack } = headerNode(tree).props as { onBack: () => void };
    onBack();
    const alertButtons: { text: string; onPress?: () => void }[] = alertSpy.mock.calls[0][2];
    const cancelBtn = alertButtons.find((b) => b.text === 'Cancel');
    expect(cancelBtn).toBeDefined();
    cancelBtn!.onPress?.();
    expect(mockBack).not.toHaveBeenCalled();
  });
});

// ---- Tests: useTabStatus ----

describe('CharacterEntryScreen — useTabStatus', () => {
  it('identity is empty when name is blank', () => {
    mockCharacterName = '';
    const { tree } = render(<CharacterEntryScreen />);
    const { tabStatus } = ornateTabNode(tree).props as { tabStatus: Record<string, string> };
    expect(tabStatus.identity).toBe('empty');
  });

  it('identity is complete when name is set', () => {
    mockCharacterName = 'Rissi';
    const { tree } = render(<CharacterEntryScreen />);
    const { tabStatus } = ornateTabNode(tree).props as { tabStatus: Record<string, string> };
    expect(tabStatus.identity).toBe('complete');
  });

  it('abilities is empty when str.base is 10', () => {
    mockStrBase = 10;
    const { tree } = render(<CharacterEntryScreen />);
    const { tabStatus } = ornateTabNode(tree).props as { tabStatus: Record<string, string> };
    expect(tabStatus.abilities).toBe('empty');
  });

  it('abilities is complete when str.base is not 10', () => {
    mockStrBase = 18;
    const { tree } = render(<CharacterEntryScreen />);
    const { tabStatus } = ornateTabNode(tree).props as { tabStatus: Record<string, string> };
    expect(tabStatus.abilities).toBe('complete');
  });

  it('classes is empty when no classes', () => {
    mockClasses = [];
    const { tree } = render(<CharacterEntryScreen />);
    const { tabStatus } = ornateTabNode(tree).props as { tabStatus: Record<string, string> };
    expect(tabStatus.classes).toBe('empty');
  });

  it('classes is complete when classes are present', () => {
    mockClasses = [{ name: 'Fighter', level: 5 }];
    const { tree } = render(<CharacterEntryScreen />);
    const { tabStatus } = ornateTabNode(tree).props as { tabStatus: Record<string, string> };
    expect(tabStatus.classes).toBe('complete');
  });

  it('skills mirrors classes completion', () => {
    mockClasses = [{ name: 'Rogue', level: 3 }];
    const { tree } = render(<CharacterEntryScreen />);
    const { tabStatus } = ornateTabNode(tree).props as { tabStatus: Record<string, string> };
    expect(tabStatus.skills).toBe('complete');
  });

  it('combat is complete when currentHP > 0', () => {
    mockCurrentHP = 10;
    const { tree } = render(<CharacterEntryScreen />);
    const { tabStatus } = ornateTabNode(tree).props as { tabStatus: Record<string, string> };
    expect(tabStatus.combat).toBe('complete');
  });

  it('traits is complete when traits are present', () => {
    mockTraits = [{ name: 'Reactionary' }];
    const { tree } = render(<CharacterEntryScreen />);
    const { tabStatus } = ornateTabNode(tree).props as { tabStatus: Record<string, string> };
    expect(tabStatus.traits).toBe('complete');
  });

  it('feats is complete when feats are present', () => {
    mockFeats = [{ featId: 'power_attack' }];
    const { tree } = render(<CharacterEntryScreen />);
    const { tabStatus } = ornateTabNode(tree).props as { tabStatus: Record<string, string> };
    expect(tabStatus.feats).toBe('complete');
  });

  it('spells is complete when spell pools are present', () => {
    mockSpellPools = [{ baseClass: 'Cleric' }];
    const { tree } = render(<CharacterEntryScreen />);
    const { tabStatus } = ornateTabNode(tree).props as { tabStatus: Record<string, string> };
    expect(tabStatus.spells).toBe('complete');
  });

  it('notes is complete when notes is set', () => {
    mockNotes = 'Backstory here';
    const { tree } = render(<CharacterEntryScreen />);
    const { tabStatus } = ornateTabNode(tree).props as { tabStatus: Record<string, string> };
    expect(tabStatus.notes).toBe('complete');
  });

  it('warning status overrides complete status', () => {
    mockCharacterName = 'Rissi';
    mockWarnings = [{ section: 'identity', isAcknowledged: false }];
    const { tree } = render(<CharacterEntryScreen />);
    const { tabStatus } = ornateTabNode(tree).props as { tabStatus: Record<string, string> };
    expect(tabStatus.identity).toBe('warnings');
  });

  it('acknowledged warning does not override complete status', () => {
    mockCharacterName = 'Rissi';
    mockWarnings = [{ section: 'identity', isAcknowledged: true }];
    const { tree } = render(<CharacterEntryScreen />);
    const { tabStatus } = ornateTabNode(tree).props as { tabStatus: Record<string, string> };
    expect(tabStatus.identity).toBe('complete');
  });

  // Warning-override branch for each remaining tab
  it.each([
    'abilities',
    'classes',
    'combat',
    'skills',
    'traits',
    'feats',
    'spells',
    'equipment',
    'notes',
  ])('%s warning overrides its status', (section) => {
    mockWarnings = [{ section, isAcknowledged: false }];
    const { tree } = render(<CharacterEntryScreen />);
    const { tabStatus } = ornateTabNode(tree).props as { tabStatus: Record<string, string> };
    expect(tabStatus[section]).toBe('warnings');
  });

  it('equipment is complete when editorEquipment has items', () => {
    mockEditorEquipment = [{ id: 'item1' }];
    const { tree } = render(<CharacterEntryScreen />);
    const { tabStatus } = ornateTabNode(tree).props as { tabStatus: Record<string, string> };
    expect(tabStatus.equipment).toBe('complete');
  });

  it('equipment is empty when editorEquipment is undefined', () => {
    (mockEditorEquipment as unknown) = undefined;
    const { tree } = render(<CharacterEntryScreen />);
    const { tabStatus } = ornateTabNode(tree).props as { tabStatus: Record<string, string> };
    expect(tabStatus.equipment).toBe('empty');
  });
});

// ---- Tests: tab content rendering ----

describe('CharacterEntryScreen — tab content rendering', () => {
  it.each([
    'abilities',
    'classes',
    'combat',
    'skills',
    'equipment',
    'traits',
    'feats',
    'spells',
    'notes',
  ])('renders with activeTab=%s without crashing', (tab) => {
    mockActiveTab = tab;
    expect(() => render(<CharacterEntryScreen />)).not.toThrow();
  });
});

// ---- Tests: validation FAB ----

describe('CharacterEntryScreen — validation FAB', () => {
  function getAllText(node: RenderedNode): string[] {
    const texts: string[] = [];
    if (node.type === 'Text') {
      const text = node.children.filter((c) => typeof c === 'string').join('');
      if (text) texts.push(text);
    }
    for (const child of node.children) {
      if (typeof child !== 'string') texts.push(...getAllText(child));
    }
    return texts;
  }

  it('FAB is not rendered when lastValidatedAt is null', () => {
    mockLastValidatedAt = null;
    const { tree } = render(<CharacterEntryScreen />);
    const buttons = findByType(tree, 'Pressable');
    const fab = buttons.find(
      (b) =>
        b.props.accessibilityLabel?.includes('warning') ||
        b.props.accessibilityLabel === 'Validation passed',
    );
    expect(fab).toBeUndefined();
  });

  it('FAB is rendered when lastValidatedAt is set', () => {
    mockLastValidatedAt = Date.now();
    const { tree } = render(<CharacterEntryScreen />);
    const buttons = findByType(tree, 'Pressable');
    const fab = buttons.find(
      (b) =>
        b.props.accessibilityLabel === 'Validation passed' ||
        b.props.accessibilityLabel?.includes('warning'),
    );
    expect(fab).toBeDefined();
  });

  it('FAB shows warning count when there are unacknowledged warnings', () => {
    mockLastValidatedAt = Date.now();
    mockWarnings = [
      { section: 'identity', isAcknowledged: false },
      { section: 'classes', isAcknowledged: false },
    ];
    const { tree } = render(<CharacterEntryScreen />);
    const texts = getAllText(tree);
    expect(texts.some((t) => t === '⚠')).toBe(true);
    expect(texts.some((t) => t === '2')).toBe(true);
  });

  it('FAB shows checkmark when all warnings are acknowledged', () => {
    mockLastValidatedAt = Date.now();
    mockWarnings = [{ section: 'identity', isAcknowledged: true }];
    const { tree } = render(<CharacterEntryScreen />);
    const texts = getAllText(tree);
    expect(texts.some((t) => t === '✓')).toBe(true);
  });

  it('FAB accessibilityLabel includes warning count when warnings present', () => {
    mockLastValidatedAt = Date.now();
    mockWarnings = [{ section: 'combat', isAcknowledged: false }];
    const { tree } = render(<CharacterEntryScreen />);
    const buttons = findByType(tree, 'Pressable');
    const fab = buttons.find((b) => b.props.accessibilityLabel?.includes('warning'));
    expect(fab).toBeDefined();
    expect(fab!.props.accessibilityLabel).toBe('1 validation warnings');
  });

  it('FAB accessibilityLabel is "Validation passed" when no unacknowledged warnings', () => {
    mockLastValidatedAt = Date.now();
    mockWarnings = [];
    const { tree } = render(<CharacterEntryScreen />);
    const buttons = findByType(tree, 'Pressable');
    const fab = buttons.find((b) => b.props.accessibilityLabel === 'Validation passed');
    expect(fab).toBeDefined();
  });
});
