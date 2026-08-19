import React from 'react';
import { render, fireEvent, getAllText, type RenderedNode } from '../../helpers/testUtils';

import { ClassSelector } from '@/components/character/ClassSelector';

/** Query helpers returned by render() close over the first tree, so a tree
 *  produced by rerender() needs its own walk. */
function findRadios(node: RenderedNode): RenderedNode[] {
  const found: RenderedNode[] = [];
  if (node.props.accessibilityRole === 'radio') found.push(node);
  for (const child of node.children) {
    if (typeof child !== 'string') found.push(...findRadios(child));
  }
  return found;
}

describe('ClassSelector', () => {
  test('renders the class list', () => {
    const { getByText } = render(<ClassSelector selectedClass={null} onSelectClass={() => {}} />);
    expect(getByText('Fighter')).toBeTruthy();
    expect(getByText('Wizard')).toBeTruthy();
  });

  test('reports the class that was pressed', () => {
    const onSelectClass = jest.fn();
    const { getAllByRole } = render(
      <ClassSelector selectedClass={null} onSelectClass={onSelectClass} />,
    );
    fireEvent.press(getAllByRole('radio')[0]);
    expect(onSelectClass).toHaveBeenCalledTimes(1);
  });

  describe('filtering', () => {
    // Scrolling the full class list to find one was the complaint behind #363.
    function filterTo(query: string) {
      const rendered = render(<ClassSelector selectedClass={null} onSelectClass={() => {}} />);
      fireEvent.changeText(rendered.getByTestId('class-filter'), query);
      return rendered.rerender();
    }

    test('narrows the list to matching classes', () => {
      const text = getAllText(filterTo('wizard'));
      expect(text.some((t) => t === 'Wizard')).toBe(true);
      expect(text.some((t) => t === 'Fighter')).toBe(false);
    });

    test('matches case-insensitively and on partial names', () => {
      const text = getAllText(filterTo('CLER'));
      expect(text.some((t) => t === 'Cleric')).toBe(true);
      expect(text.some((t) => t === 'Rogue')).toBe(false);
    });

    test('says so when nothing matches, rather than showing an empty list', () => {
      const text = getAllText(filterTo('zzzz'));
      expect(text.some((t) => t.includes('No class matches'))).toBe(true);
    });

    test('restores the full list when the filter is cleared', () => {
      const rendered = render(<ClassSelector selectedClass={null} onSelectClass={() => {}} />);
      fireEvent.changeText(rendered.getByTestId('class-filter'), 'wizard');
      rendered.rerender();
      fireEvent.changeText(rendered.getByTestId('class-filter'), '');
      const text = getAllText(rendered.rerender());
      expect(text.some((t) => t === 'Fighter')).toBe(true);
      expect(text.some((t) => t === 'Wizard')).toBe(true);
    });

    test('still selects a class while the filter is active', () => {
      // The keyboard-dismiss gesture must not eat the first tap (#358), which is
      // what keyboardShouldPersistTaps="handled" on the list is for.
      const onSelectClass = jest.fn();
      const rendered = render(<ClassSelector selectedClass={null} onSelectClass={onSelectClass} />);
      fireEvent.changeText(rendered.getByTestId('class-filter'), 'wizard');
      const tree = rendered.rerender();

      const radios = findRadios(tree);
      expect(radios).toHaveLength(1);
      fireEvent.press(radios[0]);
      expect(onSelectClass).toHaveBeenCalledWith('Wizard');
    });
  });
});
