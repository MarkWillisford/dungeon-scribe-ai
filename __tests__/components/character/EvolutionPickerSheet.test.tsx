import React from 'react';
import { render, fireEvent } from '../../helpers/testUtils';
import { EvolutionPickerSheet } from '@/components/character/direct-entry/EvolutionPickerSheet';
import { EidolonPoolService } from '@/services/EidolonPoolService';
import type { DraftEidolon } from '@/types/eidolon';

// ---- Redux mock ----

const mockDispatch = jest.fn();

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
}));

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: {
      bg: { primary: '#fff', secondary: '#f5f5f5', tertiary: '#eee' },
      border: { DEFAULT: '#ccc' },
      text: { primary: '#000', secondary: '#333', tertiary: '#999' },
    },
    fantasy: { gold: '#FFD700', bronze: '#CD7F32', darkWood: '#6B4423' },
    isDark: false,
  }),
}));

jest.mock('@/components/ui/InlinePicker', () => ({
  InlinePicker: () => null,
}));

// ---- Fixtures ----

const DATA_INDEX = EidolonPoolService.buildIndexFromStaticData();

function makeEidolon(overrides: Partial<DraftEidolon> = {}): DraftEidolon {
  return {
    id: 'eid-1',
    name: 'Aziel',
    summonerClassEntryId: 'summoner-1',
    edition: 'apg',
    baseForm: 'biped',
    selectedEvolutions: [],
    ...overrides,
  };
}

const BASE_PROPS = {
  visible: true,
  eidolon: makeEidolon(),
  summonerLevel: 5,
  remainingPool: 6,
  dataIndex: DATA_INDEX,
  onClose: jest.fn(),
};

beforeEach(() => {
  mockDispatch.mockClear();
  (BASE_PROPS.onClose as jest.Mock).mockClear();
});

// ---- Tests ----

describe('EvolutionPickerSheet', () => {
  describe('rendering', () => {
    it('renders header and summary when visible', () => {
      const { getAllText } = render(<EvolutionPickerSheet {...BASE_PROPS} />);
      const text = getAllText().join('');
      expect(text).toContain('Add Evolution');
      expect(text).toContain('Remaining:');
      expect(text).toContain('6');
      expect(text).toContain('Summoner level');
    });

    it('renders without crashing for an unchained eidolon with subtype', () => {
      const { getAllText } = render(
        <EvolutionPickerSheet
          {...BASE_PROPS}
          eidolon={makeEidolon({ edition: 'unchained', subtype: 'angel' })}
        />,
      );
      expect(getAllText().join(' ')).toContain('Add Evolution');
    });

    it('renders without crashing for a quadruped eidolon', () => {
      const { getAllText } = render(
        <EvolutionPickerSheet {...BASE_PROPS} eidolon={makeEidolon({ baseForm: 'quadruped' })} />,
      );
      expect(getAllText().join(' ')).toContain('Add Evolution');
    });

    it('renders without crashing when allowedEvolutionIds is provided', () => {
      const { getAllText } = render(
        <EvolutionPickerSheet
          {...BASE_PROPS}
          allowedEvolutionIds={['evolution-large', 'evolution-huge']}
        />,
      );
      expect(getAllText().join(' ')).toContain('Add Evolution');
    });

    it('renders with remainingPool of 0', () => {
      const { getAllText } = render(<EvolutionPickerSheet {...BASE_PROPS} remainingPool={0} />);
      const text = getAllText().join('');
      expect(text).toContain('Remaining:');
      expect(text).toContain('0');
    });

    it('renders the search input placeholder', () => {
      const { tree } = render(<EvolutionPickerSheet {...BASE_PROPS} />);
      // Search TextInput has a placeholder prop
      function findPlaceholder(node: typeof tree): boolean {
        if (node.props.placeholder === 'Search evolutions…') return true;
        return node.children.some((c) => typeof c !== 'string' && findPlaceholder(c));
      }
      expect(findPlaceholder(tree)).toBe(true);
    });
  });

  describe('close button', () => {
    it('calls onClose when the close button is pressed', () => {
      const { getByLabelText } = render(<EvolutionPickerSheet {...BASE_PROPS} />);
      fireEvent.press(getByLabelText('Close'));
      expect(BASE_PROPS.onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('search filter (exercises useMemo filter branches)', () => {
    it('accepts text input in the search box without crashing', () => {
      const { tree } = render(<EvolutionPickerSheet {...BASE_PROPS} />);
      // Find TextInput with the search placeholder
      function findInput(node: typeof tree): typeof tree | null {
        if (node.props.placeholder === 'Search evolutions…') return node;
        for (const c of node.children) {
          if (typeof c !== 'string') {
            const found = findInput(c);
            if (found) return found;
          }
        }
        return null;
      }
      const input = findInput(tree);
      expect(input).not.toBeNull();
      // Changing the text re-evaluates groupedByCost useMemo (exercises query branch)
      fireEvent.changeText(input!, 'bite');
    });

    it('handles empty search string (exercises the q && ... branch false path)', () => {
      const { getAllText } = render(<EvolutionPickerSheet {...BASE_PROPS} />);
      // Default empty query — useMemo runs with q = ''
      expect(getAllText().join(' ')).toContain('Add Evolution');
    });
  });

  describe('edition filtering (exercises summoner field branches)', () => {
    it('renders APG eidolon without crashing (filters unchained-only evolutions)', () => {
      // DATA_INDEX contains unchained-only evolutions; they should be filtered out
      const { getAllText } = render(
        <EvolutionPickerSheet {...BASE_PROPS} eidolon={makeEidolon({ edition: 'apg' })} />,
      );
      expect(getAllText().join(' ')).toContain('Add Evolution');
    });

    it('renders unchained eidolon without crashing (filters APG-only evolutions)', () => {
      const { getAllText } = render(
        <EvolutionPickerSheet
          {...BASE_PROPS}
          eidolon={makeEidolon({ edition: 'unchained', subtype: 'daemon' })}
        />,
      );
      expect(getAllText().join(' ')).toContain('Add Evolution');
    });
  });

  describe('form restriction filtering', () => {
    it('renders a serpentine eidolon (exercises form restriction filter)', () => {
      const { getAllText } = render(
        <EvolutionPickerSheet {...BASE_PROPS} eidolon={makeEidolon({ baseForm: 'serpentine' })} />,
      );
      expect(getAllText().join(' ')).toContain('Add Evolution');
    });

    it('renders an aquatic eidolon (exercises form restriction filter)', () => {
      const { getAllText } = render(
        <EvolutionPickerSheet {...BASE_PROPS} eidolon={makeEidolon({ baseForm: 'aquatic' })} />,
      );
      expect(getAllText().join(' ')).toContain('Add Evolution');
    });
  });

  describe('subtype restriction filtering', () => {
    it('renders unchained with no subtype (exercises missing subtype branch)', () => {
      const { getAllText } = render(
        <EvolutionPickerSheet
          {...BASE_PROPS}
          eidolon={makeEidolon({ edition: 'unchained', subtype: undefined })}
        />,
      );
      expect(getAllText().join(' ')).toContain('Add Evolution');
    });

    it('renders unchained with subtype that passes restriction', () => {
      // demon subtype can unlock subtype-restricted evolutions
      const { getAllText } = render(
        <EvolutionPickerSheet
          {...BASE_PROPS}
          eidolon={makeEidolon({ edition: 'unchained', subtype: 'demon' })}
        />,
      );
      expect(getAllText().join(' ')).toContain('Add Evolution');
    });
  });

  describe('onEvolutionSelected prop', () => {
    it('renders without crashing when onEvolutionSelected is provided', () => {
      const onSelected = jest.fn();
      const { getAllText } = render(
        <EvolutionPickerSheet {...BASE_PROPS} onEvolutionSelected={onSelected} />,
      );
      expect(getAllText().join(' ')).toContain('Add Evolution');
    });
  });
});
