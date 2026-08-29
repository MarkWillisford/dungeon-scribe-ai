import React from 'react';
import { render, fireEvent, getAllText } from '../../helpers/testUtils';
import { ClassChoicesUnavailable } from '@/components/character/direct-entry/ClassChoicesUnavailable';

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: {
      bg: { primary: '#fff', secondary: '#f5f5f5', tertiary: '#eee' },
      border: { DEFAULT: '#ccc' },
      text: { primary: '#000', secondary: '#333', tertiary: '#999', accent: '#00f' },
      accent: { DEFAULT: '#b00' },
    },
    fantasy: { gold: '#FFD700', darkWood: '#5C3317' },
    isDark: false,
  }),
}));

describe('ClassChoicesUnavailable', () => {
  it('names the class that failed', () => {
    const { getByText } = render(
      <ClassChoicesUnavailable className="Cavalier" message="denied" onRetry={jest.fn()} />,
    );
    expect(getByText('Cavalier choices could not be loaded')).toBeTruthy();
  });

  it('shows the underlying reason rather than a generic failure', () => {
    // "Missing or insufficient permissions" points at the rules deploy (#207);
    // a generic "something went wrong" would point at nothing.
    const rendered = render(
      <ClassChoicesUnavailable
        className="Cavalier"
        message='Could not load class choices for "cavalier": Missing or insufficient permissions.'
        onRetry={jest.fn()}
      />,
    );
    expect(
      getAllText(rendered.tree).some((t) => t.includes('Missing or insufficient permissions')),
    ).toBe(true);
  });

  it('warns that selections are missing from the sheet', () => {
    const rendered = render(
      <ClassChoicesUnavailable className="Cavalier" message="denied" onRetry={jest.fn()} />,
    );
    expect(getAllText(rendered.tree).some((t) => t.includes('missing from this sheet'))).toBe(true);
  });

  it('retries when asked', () => {
    const onRetry = jest.fn();
    const { getByLabelText } = render(
      <ClassChoicesUnavailable className="Cavalier" message="denied" onRetry={onRetry} />,
    );
    fireEvent.press(getByLabelText('Retry loading class choices for Cavalier'));
    expect(onRetry).toHaveBeenCalledTimes(1);
  });

  it('is findable as a whole by class name', () => {
    const { getByLabelText } = render(
      <ClassChoicesUnavailable
        className="Rogue (Unchained)"
        message="denied"
        onRetry={jest.fn()}
      />,
    );
    expect(getByLabelText('Class choices unavailable for Rogue (Unchained)')).toBeTruthy();
  });
});
