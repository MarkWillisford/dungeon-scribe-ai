import React from 'react';
import { render, fireEvent, type RenderedNode } from '../../helpers/testUtils';
import { CharacterEntryHeader } from '@/components/character/direct-entry/CharacterEntryHeader';

const mockDispatch = jest.fn();

let mockCharacterName = '';
let mockIsDirty = false;
let mockClasses: { name: string; level: number }[] = [];
let mockRaceName = '';
let mockAlignment = 'Neutral Good';
let mockPortrait = '';

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: (selector: (s: unknown) => unknown) =>
    selector({
      characterEntry: {
        character: {
          info: {
            name: mockCharacterName,
            race: { name: mockRaceName },
            alignment: mockAlignment,
            portrait: mockPortrait,
          },
          classes: { classes: mockClasses },
        },
        isDirty: mockIsDirty,
      },
    }),
}));

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: {
      bg: { primary: '#111', secondary: '#222' },
      border: { DEFAULT: '#ccc' },
      text: { primary: '#fff', secondary: '#aaa', tertiary: '#666', accent: '#gold' },
    },
    fantasy: { gold: '#FFD700', bronze: '#CD7F32', darkWood: '#5C3317' },
    shadows: { panel: {} },
    isDark: true,
  }),
}));

const onValidate = jest.fn();
const onSave = jest.fn();
const onPortraitPress = jest.fn();
const onBack = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  mockCharacterName = 'Rissi';
  mockIsDirty = false;
  mockClasses = [];
  mockRaceName = 'Human';
  mockAlignment = 'Chaotic Good';
  mockPortrait = '';
});

function findByType(node: RenderedNode, typeName: string): RenderedNode[] {
  const results: RenderedNode[] = [];
  if (node.type === typeName) results.push(node);
  for (const child of node.children) {
    if (typeof child !== 'string') results.push(...findByType(child, typeName));
  }
  return results;
}

function getAllText(node: RenderedNode): string[] {
  const texts: string[] = [];
  if (typeof node === 'string') return [node];
  if (node.type === 'Text') {
    const text = node.children.filter((c) => typeof c === 'string').join('');
    if (text) texts.push(text);
  }
  for (const child of node.children) {
    if (typeof child !== 'string') texts.push(...getAllText(child));
  }
  return texts;
}

describe('CharacterEntryHeader — Save button', () => {
  it('shows "Save" when isDirty is false', () => {
    mockIsDirty = false;
    const { tree } = render(
      <CharacterEntryHeader
        onValidate={onValidate}
        onSave={onSave}
        onPortraitPress={onPortraitPress}
      />,
    );
    const texts = getAllText(tree);
    expect(texts.some((t) => t === 'Save')).toBe(true);
    expect(texts.some((t) => t === 'Save*')).toBe(false);
  });

  it('shows "Save*" when isDirty is true', () => {
    mockIsDirty = true;
    const { tree } = render(
      <CharacterEntryHeader
        onValidate={onValidate}
        onSave={onSave}
        onPortraitPress={onPortraitPress}
      />,
    );
    const texts = getAllText(tree);
    expect(texts.some((t) => t === 'Save*')).toBe(true);
  });

  it('calls onSave when Save button is pressed', () => {
    const { getAllByRole } = render(
      <CharacterEntryHeader
        onValidate={onValidate}
        onSave={onSave}
        onPortraitPress={onPortraitPress}
      />,
    );
    const buttons = getAllByRole('button');
    const saveButton = buttons.find((b) => b.props.accessibilityLabel?.includes('Save'));
    expect(saveButton).toBeDefined();
    fireEvent.press(saveButton!);
    expect(onSave).toHaveBeenCalled();
  });
});

describe('CharacterEntryHeader — Validate button', () => {
  it('calls onValidate when Validate button is pressed', () => {
    const { getAllByRole } = render(
      <CharacterEntryHeader
        onValidate={onValidate}
        onSave={onSave}
        onPortraitPress={onPortraitPress}
      />,
    );
    const buttons = getAllByRole('button');
    const validateButton = buttons.find((b) => b.props.accessibilityLabel === 'Validate character');
    expect(validateButton).toBeDefined();
    fireEvent.press(validateButton!);
    expect(onValidate).toHaveBeenCalled();
  });
});

describe('CharacterEntryHeader — back button', () => {
  it('does not render a back button when onBack is not provided', () => {
    const { getAllByRole } = render(
      <CharacterEntryHeader
        onValidate={onValidate}
        onSave={onSave}
        onPortraitPress={onPortraitPress}
      />,
    );
    const buttons = getAllByRole('button');
    const back = buttons.find((b) => b.props.accessibilityLabel === 'Go back');
    expect(back).toBeUndefined();
  });

  it('renders a back button when onBack is provided', () => {
    const { getAllByRole } = render(
      <CharacterEntryHeader
        onValidate={onValidate}
        onSave={onSave}
        onPortraitPress={onPortraitPress}
        onBack={onBack}
      />,
    );
    const buttons = getAllByRole('button');
    const back = buttons.find((b) => b.props.accessibilityLabel === 'Go back');
    expect(back).toBeDefined();
  });

  it('calls onBack when back button is pressed', () => {
    const { getAllByRole } = render(
      <CharacterEntryHeader
        onValidate={onValidate}
        onSave={onSave}
        onPortraitPress={onPortraitPress}
        onBack={onBack}
      />,
    );
    const buttons = getAllByRole('button');
    const back = buttons.find((b) => b.props.accessibilityLabel === 'Go back');
    fireEvent.press(back!);
    expect(onBack).toHaveBeenCalled();
  });
});

describe('CharacterEntryHeader — portrait button', () => {
  it('calls onPortraitPress when portrait area is pressed', () => {
    const { getAllByRole } = render(
      <CharacterEntryHeader
        onValidate={onValidate}
        onSave={onSave}
        onPortraitPress={onPortraitPress}
      />,
    );
    const buttons = getAllByRole('button');
    const portrait = buttons.find((b) => b.props.accessibilityLabel === 'Change portrait');
    expect(portrait).toBeDefined();
    fireEvent.press(portrait!);
    expect(onPortraitPress).toHaveBeenCalled();
  });

  it('renders placeholder icon when portrait is empty', () => {
    mockPortrait = '';
    const { tree } = render(
      <CharacterEntryHeader
        onValidate={onValidate}
        onSave={onSave}
        onPortraitPress={onPortraitPress}
      />,
    );
    const texts = getAllText(tree);
    expect(texts.some((t) => t === '⚔')).toBe(true);
  });

  it('renders Image when portrait URI is set', () => {
    mockPortrait = 'https://example.com/portrait.jpg';
    const { tree } = render(
      <CharacterEntryHeader
        onValidate={onValidate}
        onSave={onSave}
        onPortraitPress={onPortraitPress}
      />,
    );
    const images = findByType(tree, 'Image');
    expect(images.length).toBeGreaterThan(0);
    expect(images[0].props.source).toEqual({ uri: mockPortrait });
  });
});

describe('CharacterEntryHeader — ECL and class summary', () => {
  it('shows ECL 0 when no classes are present', () => {
    mockClasses = [];
    const { tree } = render(
      <CharacterEntryHeader
        onValidate={onValidate}
        onSave={onSave}
        onPortraitPress={onPortraitPress}
      />,
    );
    const texts = getAllText(tree);
    expect(texts.some((t) => t.includes('ECL 0'))).toBe(true);
  });

  it('computes ECL as sum of class levels', () => {
    mockClasses = [
      { name: 'Cleric', level: 5 },
      { name: 'Hathran', level: 5 },
    ];
    const { tree } = render(
      <CharacterEntryHeader
        onValidate={onValidate}
        onSave={onSave}
        onPortraitPress={onPortraitPress}
      />,
    );
    const texts = getAllText(tree);
    expect(texts.some((t) => t.includes('ECL 10'))).toBe(true);
  });

  it('shows "No classes" in class summary when no classes', () => {
    mockClasses = [];
    const { tree } = render(
      <CharacterEntryHeader
        onValidate={onValidate}
        onSave={onSave}
        onPortraitPress={onPortraitPress}
      />,
    );
    const texts = getAllText(tree);
    expect(texts.some((t) => t === 'No classes')).toBe(true);
  });

  it('shows class names and levels in class summary', () => {
    mockClasses = [
      { name: 'Fighter', level: 3 },
      { name: 'Wizard', level: 2 },
    ];
    const { tree } = render(
      <CharacterEntryHeader
        onValidate={onValidate}
        onSave={onSave}
        onPortraitPress={onPortraitPress}
      />,
    );
    const texts = getAllText(tree);
    expect(texts.some((t) => t.includes('Fighter 3') && t.includes('Wizard 2'))).toBe(true);
  });

  it('shows race name in subtitle', () => {
    mockRaceName = 'Elf';
    const { tree } = render(
      <CharacterEntryHeader
        onValidate={onValidate}
        onSave={onSave}
        onPortraitPress={onPortraitPress}
      />,
    );
    const texts = getAllText(tree);
    expect(texts.some((t) => t.includes('Elf'))).toBe(true);
  });
});

describe('CharacterEntryHeader — name editing', () => {
  it('shows character name as text initially', () => {
    mockCharacterName = 'Rissi';
    const { tree } = render(
      <CharacterEntryHeader
        onValidate={onValidate}
        onSave={onSave}
        onPortraitPress={onPortraitPress}
      />,
    );
    const texts = getAllText(tree);
    expect(texts.some((t) => t === 'Rissi')).toBe(true);
  });

  it('shows "Unnamed Character" when name is empty', () => {
    mockCharacterName = '';
    const { tree } = render(
      <CharacterEntryHeader
        onValidate={onValidate}
        onSave={onSave}
        onPortraitPress={onPortraitPress}
      />,
    );
    const texts = getAllText(tree);
    expect(texts.some((t) => t === 'Unnamed Character')).toBe(true);
  });

  it('shows a TextInput when name area is pressed', () => {
    mockCharacterName = 'Rissi';
    const { tree, getAllByRole, rerender } = render(
      <CharacterEntryHeader
        onValidate={onValidate}
        onSave={onSave}
        onPortraitPress={onPortraitPress}
      />,
    );
    // Initially no TextInput
    expect(findByType(tree, 'TextInput')).toHaveLength(0);
    // Press the name Pressable (accessibilityLabel = "Edit character name")
    const buttons = getAllByRole('button');
    const nameButton = buttons.find((b) => b.props.accessibilityLabel === 'Edit character name');
    expect(nameButton).toBeDefined();
    fireEvent.press(nameButton!);
    const updatedTree = rerender();
    expect(findByType(updatedTree, 'TextInput').length).toBeGreaterThan(0);
  });

  it('dispatches setName when TextInput value changes', () => {
    mockCharacterName = 'Rissi';
    const { getAllByRole, rerender } = render(
      <CharacterEntryHeader
        onValidate={onValidate}
        onSave={onSave}
        onPortraitPress={onPortraitPress}
      />,
    );
    const nameButton = getAllByRole('button').find(
      (b) => b.props.accessibilityLabel === 'Edit character name',
    );
    fireEvent.press(nameButton!);
    const updatedTree = rerender();
    const inputs = findByType(updatedTree, 'TextInput');
    expect(inputs.length).toBeGreaterThan(0);
    fireEvent.changeText(inputs[0], 'Aria');
    expect(mockDispatch).toHaveBeenCalled();
    const call = mockDispatch.mock.calls[mockDispatch.mock.calls.length - 1][0];
    expect(call.type).toBe('characterEntry/setName');
    expect(call.payload).toBe('Aria');
  });
});
