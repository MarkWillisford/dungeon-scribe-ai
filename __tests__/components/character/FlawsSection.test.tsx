import React from 'react';
import { render, fireEvent } from '../../helpers/testUtils';
import { FlawsSection } from '@/components/character/direct-entry/FlawsSection';
import { FlawRegistryService } from '@/services/FlawRegistryService';
import type { CharacterFlaw } from '@/types/flaws';

const mockDispatch = jest.fn();
let mockFlaws: CharacterFlaw[] = [];
let mockMaxFlaws = 2;
let mockAllowedSources: string[] = ['3.5e'];

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: (selector: (s: unknown) => unknown) =>
    selector({
      characterEntry: {
        character: {
          flaws: {
            flaws: mockFlaws,
            maxFlaws: mockMaxFlaws,
          },
        },
      },
      ruleset: {
        activeRuleset: {
          validationSettings: { maxFlaws: mockMaxFlaws },
          allowedSources: mockAllowedSources,
        },
      },
    }),
}));

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: {
      bg: { primary: '#fff', secondary: '#f5f5f5', tertiary: '#eee' },
      border: { DEFAULT: '#ccc' },
      text: { primary: '#000', secondary: '#333', tertiary: '#999' },
    },
    fantasy: { gold: '#D4AF37', bronze: '#B87333', darkWood: '#3E2723' },
    isDark: false,
  }),
}));

jest.mock('@/services/FlawRegistryService', () => ({
  FlawRegistryService: {
    getAllFlaws: jest.fn(() => [
      {
        id: 'flaw-1',
        name: 'Noncombatant',
        description: 'You are not a trained combatant.',
        source: '3.5e',
        effects: [],
      },
      {
        id: 'flaw-2',
        name: 'Shaky',
        description: 'You are not steady with ranged weapons.',
        source: '3.5e',
        effects: [],
      },
      {
        id: 'flaw-pf',
        name: 'PF Flaw',
        description: 'A Pathfinder-only flaw.',
        source: 'pf1e-official',
        effects: [],
      },
    ]),
  },
}));

// Capture the last props passed to SearchPickerSheet for direct inspection.
let lastPickerProps: {
  visible: boolean;
  items: { key: string; label: string }[];
  onSelect: (item: { key: string; label: string }) => void;
  onClose: () => void;
  allowCustom?: boolean;
  onAddCustom?: (name: string) => void;
} | null = null;

jest.mock('@/components/ui/SearchPickerSheet', () => ({
  SearchPickerSheet: (props: {
    visible: boolean;
    items: { key: string; label: string }[];
    onSelect: (item: { key: string; label: string }) => void;
    onClose: () => void;
    allowCustom?: boolean;
    onAddCustom?: (name: string) => void;
  }) => {
    lastPickerProps = props;
    return null;
  },
}));

beforeEach(() => {
  mockDispatch.mockClear();
  mockFlaws = [];
  mockMaxFlaws = 2;
  mockAllowedSources = ['3.5e'];
  lastPickerProps = null;
  (FlawRegistryService.getAllFlaws as jest.Mock).mockClear();
});

describe('FlawsSection', () => {
  it('renders the section', () => {
    const { getByTestId } = render(<FlawsSection />);
    expect(getByTestId('flaws-section')).toBeTruthy();
  });

  it('displays flaw count and max in the summary row', () => {
    mockFlaws = [{ flawId: 'flaw-1', name: 'Noncombatant' }];
    const { getAllText } = render(<FlawsSection />);
    const texts = getAllText();
    expect(texts).toContain('Flaws:');
    expect(texts).toContain('1');
    expect(texts).toContain(' / ');
    expect(texts).toContain('2');
  });

  it('renders existing flaws as cards', () => {
    mockFlaws = [
      { flawId: 'flaw-1', name: 'Noncombatant' },
      { flawId: 'flaw-2', name: 'Shaky' },
    ];
    const { getByTestId } = render(<FlawsSection />);
    expect(getByTestId('flaw-card-flaw-1')).toBeTruthy();
    expect(getByTestId('flaw-card-flaw-2')).toBeTruthy();
  });

  it('flaw card shows the flaw name', () => {
    mockFlaws = [{ flawId: 'flaw-1', name: 'Noncombatant' }];
    const { getByText } = render(<FlawsSection />);
    expect(getByText('Noncombatant')).toBeTruthy();
  });

  it('add button is enabled when below maxFlaws', () => {
    mockFlaws = [{ flawId: 'flaw-1', name: 'Noncombatant' }];
    mockMaxFlaws = 2;
    const { getByTestId } = render(<FlawsSection />);
    const addBtn = getByTestId('add-flaw-button');
    expect(addBtn.props.disabled).toBeFalsy();
  });

  it('add button is disabled when flaw count equals maxFlaws', () => {
    mockFlaws = [
      { flawId: 'flaw-1', name: 'Noncombatant' },
      { flawId: 'flaw-2', name: 'Shaky' },
    ];
    mockMaxFlaws = 2;
    const { getByTestId } = render(<FlawsSection />);
    const addBtn = getByTestId('add-flaw-button');
    expect(addBtn.props.disabled).toBe(true);
  });

  it('add button is disabled when flaw count exceeds maxFlaws', () => {
    mockFlaws = [
      { flawId: 'flaw-1', name: 'Noncombatant' },
      { flawId: 'flaw-2', name: 'Shaky' },
      { flawId: 'flaw-3', name: 'Extra' },
    ];
    mockMaxFlaws = 2;
    const { getByTestId } = render(<FlawsSection />);
    const addBtn = getByTestId('add-flaw-button');
    expect(addBtn.props.disabled).toBe(true);
  });

  it('dispatches removeFlaw when remove button is pressed', () => {
    mockFlaws = [{ flawId: 'flaw-1', name: 'Noncombatant' }];
    const { getByTestId } = render(<FlawsSection />);
    fireEvent.press(getByTestId('remove-flaw-flaw-1'));
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    const action = mockDispatch.mock.calls[0][0];
    expect(action.type).toContain('removeFlaw');
    expect(action.payload).toBe('flaw-1');
  });

  it('filters flaw picker items by allowedSources', () => {
    mockAllowedSources = ['3.5e'];
    render(<FlawsSection />);
    // getAllFlaws returns 3 items: flaw-1 (3.5e), flaw-2 (3.5e), flaw-pf (pf1e-official)
    // With allowedSources=['3.5e'], only 2 items should be passed to the picker
    expect(lastPickerProps).not.toBeNull();
    expect(lastPickerProps!.items).toHaveLength(2);
    expect(lastPickerProps!.items.every((i) => ['flaw-1', 'flaw-2'].includes(i.key))).toBe(true);
  });

  it('passes allowCustom as true to the picker', () => {
    render(<FlawsSection />);
    expect(lastPickerProps).not.toBeNull();
    expect(lastPickerProps!.allowCustom).toBe(true);
  });

  it('dispatches addFlaw when an item is selected from the picker', () => {
    render(<FlawsSection />);
    expect(lastPickerProps).not.toBeNull();
    lastPickerProps!.onSelect({ key: 'flaw-1', label: 'Noncombatant' });
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    const action = mockDispatch.mock.calls[0][0];
    expect(action.type).toContain('addFlaw');
    expect(action.payload).toEqual({ flawId: 'flaw-1', name: 'Noncombatant' });
  });

  it('dispatches addFlaw with generated id when a custom flaw is added', () => {
    render(<FlawsSection />);
    expect(lastPickerProps).not.toBeNull();
    lastPickerProps!.onAddCustom?.('My Custom Flaw');
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    const action = mockDispatch.mock.calls[0][0];
    expect(action.type).toContain('addFlaw');
    expect(action.payload.name).toBe('My Custom Flaw');
    expect(action.payload.flawId).toBeTruthy();
  });

  it('does not dispatch addFlaw if the flaw is already in the list', () => {
    mockFlaws = [{ flawId: 'flaw-1', name: 'Noncombatant' }];
    render(<FlawsSection />);
    expect(lastPickerProps).not.toBeNull();
    lastPickerProps!.onSelect({ key: 'flaw-1', label: 'Noncombatant' });
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it('calls FlawRegistryService.getAllFlaws to populate the picker', () => {
    render(<FlawsSection />);
    expect(FlawRegistryService.getAllFlaws).toHaveBeenCalled();
  });

  it('shows all registry flaws when allowedSources is empty', () => {
    mockAllowedSources = [];
    render(<FlawsSection />);
    expect(lastPickerProps).not.toBeNull();
    expect(lastPickerProps!.items).toHaveLength(3);
  });

  it('opens the picker when add button is pressed', () => {
    mockFlaws = [];
    const { getByTestId, rerender } = render(<FlawsSection />);
    expect(lastPickerProps!.visible).toBeFalsy();
    fireEvent.press(getByTestId('add-flaw-button'));
    rerender();
    expect(lastPickerProps!.visible).toBe(true);
  });

  it('does not open the picker when at maxFlaws limit', () => {
    mockFlaws = [
      { flawId: 'flaw-1', name: 'Noncombatant' },
      { flawId: 'flaw-2', name: 'Shaky' },
    ];
    mockMaxFlaws = 2;
    const { getByTestId } = render(<FlawsSection />);
    const addButton = getByTestId('add-flaw-button');
    expect(addButton.props.disabled).toBe(true);
    const previousVisible = lastPickerProps?.visible;
    fireEvent.press(addButton);
    expect(lastPickerProps?.visible).toBe(previousVisible ?? false);
  });

  it('does not dispatch addFlaw when at limit and an item is selected', () => {
    mockFlaws = [
      { flawId: 'flaw-1', name: 'Noncombatant' },
      { flawId: 'flaw-2', name: 'Shaky' },
    ];
    mockMaxFlaws = 2;
    render(<FlawsSection />);
    lastPickerProps!.onSelect({ key: 'flaw-pf', label: 'PF Flaw' });
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
