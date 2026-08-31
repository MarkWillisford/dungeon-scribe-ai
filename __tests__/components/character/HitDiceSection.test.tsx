import React from 'react';
import { render, fireEvent, getAllText, type RenderedNode } from '../../helpers/testUtils';
import { HitDiceSection } from '@/components/character/direct-entry/HitDiceSection';
import { BABProgression, SaveProgression } from '@/types/base';
import type { ClassEntry } from '@/types/classes';

const mockDispatch = jest.fn();

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
}));

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: {
      bg: { primary: '#fff', secondary: '#f5f5f5', tertiary: '#eee' },
      border: { DEFAULT: '#ccc' },
      text: { primary: '#000', secondary: '#333', tertiary: '#999', accent: '#00f' },
    },
    fantasy: { gold: '#FFD700', darkWood: '#5C3317' },
    isDark: false,
  }),
}));

function findLabel(node: RenderedNode, label: string): RenderedNode | null {
  if (node.props.accessibilityLabel === label) return node;
  for (const child of node.children) {
    if (typeof child !== 'string') {
      const found = findLabel(child, label);
      if (found) return found;
    }
  }
  return null;
}

function makeRogue(overrides: Partial<ClassEntry> = {}): ClassEntry {
  return {
    id: 'rogue-1',
    name: 'Rogue',
    level: 4,
    hitDieSize: 8,
    hitDieResults: [8, 5, 5, 5],
    hitDieSources: ['max', 'average', 'average', 'average'],
    skillRanks: 8,
    classSkills: [],
    babProgression: BABProgression.Medium,
    fortProgression: SaveProgression.Poor,
    refProgression: SaveProgression.Good,
    willProgression: SaveProgression.Poor,
    classFeatures: [],
    ...overrides,
  };
}

/** Render and open the per-level rows, returning the expanded tree. */
function renderExpanded(entry: ClassEntry = makeRogue()) {
  const rendered = render(<HitDiceSection entry={entry} />);
  fireEvent.press(rendered.getByLabelText(`Edit hit points for ${entry.name}`));
  return rendered.rerender();
}

beforeEach(() => jest.clearAllMocks());

describe('HitDiceSection', () => {
  it('shows the die size and the HP the class contributes', () => {
    const { getByText } = render(<HitDiceSection entry={makeRogue()} />);
    expect(getByText('Hit Points (d8)')).toBeTruthy();
    expect(getByText('23 from 4 levels')).toBeTruthy();
  });

  it('keeps the per-level rows collapsed until asked', () => {
    const { queryByLabelText } = render(<HitDiceSection entry={makeRogue()} />);
    expect(queryByLabelText('Rogue level 1 hit points')).toBeNull();
  });

  it('reveals one row per class level when expanded', () => {
    const tree = renderExpanded();
    expect(findLabel(tree, 'Rogue level 1 hit points')?.props.value).toBe('8');
    expect(findLabel(tree, 'Rogue level 4 hit points')?.props.value).toBe('5');
    expect(findLabel(tree, 'Rogue level 5 hit points')).toBeNull();
  });

  it('dispatches a manual value when a level is typed into', () => {
    const tree = renderExpanded();
    fireEvent.changeText(findLabel(tree, 'Rogue level 2 hit points')!, '7');

    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: { id: 'rogue-1', levelIndex: 1, value: 7, source: 'manual' },
      }),
    );
  });

  it('ignores unparseable text rather than dispatching NaN', () => {
    const tree = renderExpanded();
    fireEvent.changeText(findLabel(tree, 'Rogue level 2 hit points')!, '');

    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it('rolls a single level within the die range', () => {
    const tree = renderExpanded();
    fireEvent.press(findLabel(tree, 'Roll Rogue level 3 hit points')!);

    const { payload } = mockDispatch.mock.calls[0][0];
    expect(payload.levelIndex).toBe(2);
    expect(payload.source).toBe('rolled');
    expect(payload.value).toBeGreaterThanOrEqual(1);
    expect(payload.value).toBeLessThanOrEqual(8);
  });

  it('averages a single level to half the die rounded up', () => {
    const tree = renderExpanded();
    fireEvent.press(findLabel(tree, 'Average Rogue level 3 hit points')!);

    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: { id: 'rogue-1', levelIndex: 2, value: 5, source: 'average' },
      }),
    );
  });

  it('averages every level at once', () => {
    const tree = renderExpanded();
    fireEvent.press(findLabel(tree, 'Set every Rogue level to average')!);

    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: { id: 'rogue-1', values: [5, 5, 5, 5], source: 'average' },
      }),
    );
  });

  it('maxes every level at once', () => {
    const tree = renderExpanded();
    fireEvent.press(findLabel(tree, 'Set every Rogue level to max')!);

    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: { id: 'rogue-1', values: [8, 8, 8, 8], source: 'max' },
      }),
    );
  });

  it('rolls every level at once, one value per level', () => {
    const tree = renderExpanded();
    fireEvent.press(findLabel(tree, 'Set every Rogue level to rolled')!);

    const { payload } = mockDispatch.mock.calls[0][0];
    expect(payload.values).toHaveLength(4);
    expect(payload.source).toBe('rolled');
    for (const v of payload.values) {
      expect(v).toBeGreaterThanOrEqual(1);
      expect(v).toBeLessThanOrEqual(8);
    }
  });

  it('falls back to the class name when the entry has no id', () => {
    const tree = renderExpanded(makeRogue({ id: undefined }));
    fireEvent.press(findLabel(tree, 'Average Rogue level 1 hit points')!);

    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({ payload: expect.objectContaining({ id: 'Rogue' }) }),
    );
  });

  it('handles a class whose hit dice have not been populated yet', () => {
    const entry = makeRogue({ hitDieResults: [], hitDieSources: [] });
    const rendered = render(<HitDiceSection entry={entry} />);
    expect(getAllText(rendered.tree).some((t) => t.includes('0 from 4 levels'))).toBe(true);

    fireEvent.press(rendered.getByLabelText('Edit hit points for Rogue'));
    const tree = rendered.rerender();
    expect(findLabel(tree, 'Rogue level 1 hit points')?.props.value).toBe('');
  });

  it('spells out that Constitution is applied elsewhere', () => {
    // The single most likely data-entry mistake here is baking CON into each
    // level, which would double-count it and freeze it at today's modifier.
    const tree = renderExpanded();
    expect(getAllText(tree).some((t) => t.includes('Constitution is added'))).toBe(true);
  });
});
