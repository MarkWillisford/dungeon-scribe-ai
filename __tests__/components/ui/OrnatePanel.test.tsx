import React from 'react';
import { render } from '../../helpers/testUtils';
import { OrnatePanel } from '@/components/ui/OrnatePanel';
import { Text } from 'react-native';

describe('OrnatePanel', () => {
  test('should render children content', () => {
    const { getByText } = render(
      <OrnatePanel>
        <Text>Panel Content</Text>
      </OrnatePanel>,
    );
    expect(getByText('Panel Content')).toBeTruthy();
  });

  test('should render title when provided', () => {
    const { getByText } = render(
      <OrnatePanel title="Character Stats">
        <Text>Body</Text>
      </OrnatePanel>,
    );
    expect(getByText('Character Stats')).toBeTruthy();
  });

  test('should render without title', () => {
    const { queryByText, getByText } = render(
      <OrnatePanel>
        <Text>No Title Here</Text>
      </OrnatePanel>,
    );
    expect(getByText('No Title Here')).toBeTruthy();
    // No title element should be rendered when title prop is omitted
    expect(queryByText('Character Stats')).toBeNull();
  });

  test('should be findable by testID', () => {
    const { getByTestId } = render(
      <OrnatePanel testID="stats-panel">
        <Text>Content</Text>
      </OrnatePanel>,
    );
    expect(getByTestId('stats-panel')).toBeTruthy();
  });

  test('should have header accessibility role when title is present', () => {
    const { getByRole } = render(
      <OrnatePanel title="Abilities">
        <Text>Content</Text>
      </OrnatePanel>,
    );
    const header = getByRole('header');
    expect(header).toBeTruthy();
  });

  test('should render with different variants', () => {
    const { getByText } = render(
      <OrnatePanel variant="parchment" title="Parchment Panel">
        <Text>Parchment Content</Text>
      </OrnatePanel>,
    );
    expect(getByText('Parchment Panel')).toBeTruthy();
    expect(getByText('Parchment Content')).toBeTruthy();
  });
});
