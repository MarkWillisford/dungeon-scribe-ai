import React from 'react';
import { render, fireEvent } from '../../helpers/testUtils';
import { CharacterCard } from '@/components/character/CharacterCard';
import type { CharacterSummary } from '@/types/character';

const mockCharacter: CharacterSummary = {
  id: 'char-001',
  name: 'Thorin Ironforge',
  level: 5,
  race: 'Dwarf',
  classes: 'Fighter 3/Cleric 2',
  lastUpdated: new Date('2025-06-15'),
};

describe('CharacterCard', () => {
  test('should render character name', () => {
    const { getByText } = render(<CharacterCard character={mockCharacter} onPress={() => {}} />);
    expect(getByText('Thorin Ironforge')).toBeTruthy();
  });

  test('should render character level', () => {
    const { getAllText } = render(<CharacterCard character={mockCharacter} onPress={() => {}} />);
    const allText = getAllText();
    expect(allText.some((t) => t.includes('Lv'))).toBe(true);
    expect(allText.some((t) => t.includes('5'))).toBe(true);
  });

  test('should render race and class info', () => {
    const { getAllText } = render(<CharacterCard character={mockCharacter} onPress={() => {}} />);
    const allText = getAllText();
    expect(allText).toContain('Dwarf');
    expect(allText.some((t) => t.includes('Fighter 3/Cleric 2'))).toBe(true);
  });

  test('should call onPress with character id when pressed', () => {
    const onPress = jest.fn();
    const { getByRole } = render(<CharacterCard character={mockCharacter} onPress={onPress} />);
    fireEvent.press(getByRole('button'));
    expect(onPress).toHaveBeenCalledTimes(1);
    expect(onPress).toHaveBeenCalledWith('char-001');
  });

  test('should have accessibility label with character details', () => {
    const { getByRole } = render(<CharacterCard character={mockCharacter} onPress={() => {}} />);
    const button = getByRole('button');
    expect(button.props.accessibilityLabel).toBe(
      'Thorin Ironforge, Level 5 Dwarf Fighter 3/Cleric 2',
    );
  });

  test('should render last updated date', () => {
    const { getAllText } = render(<CharacterCard character={mockCharacter} onPress={() => {}} />);
    const allText = getAllText();
    const dateText = allText.find((t) => t.includes('Last updated:'));
    expect(dateText).toBeTruthy();
  });
});
