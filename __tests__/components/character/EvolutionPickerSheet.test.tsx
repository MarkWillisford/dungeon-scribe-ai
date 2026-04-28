import React from 'react';
import { render, fireEvent } from '../../helpers/testUtils';
import {
  EvolutionPickerSheet,
  EvolutionRow,
  MetadataStep,
  needsMetadata,
  labelForKind,
  placeholderForKind,
} from '@/components/character/direct-entry/EvolutionPickerSheet';
import { EidolonPoolService } from '@/services/EidolonPoolService';
import type { DraftEidolon, SelectedEvolutionMetadata } from '@/types/eidolon';
import type { EidolonEvolutionEntry } from '@/types/classOptions';

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

// ---- Helper function tests ----

describe('needsMetadata', () => {
  function makeEvolution(overrides: Partial<EidolonEvolutionEntry> = {}): EidolonEvolutionEntry {
    return {
      id: 'evolution-bite',
      name: 'Bite',
      evolutionPointCost: 1,
      stacking: { canRepeat: false },
      effects: [],
      source: 'pf1e-apg',
      isOfficial: true,
      verificationStatus: 'needs_review',
      visibility: 'global',
      rev: 1,
      ...overrides,
    } as EidolonEvolutionEntry;
  }

  it('returns true for evolution-ability-increase', () => {
    expect(needsMetadata(makeEvolution({ id: 'evolution-ability-increase' }))).toBe(true);
  });

  it('returns true when stacking.requiresDifferentMetadata is set', () => {
    expect(
      needsMetadata(
        makeEvolution({ stacking: { canRepeat: true, requiresDifferentMetadata: 'energy' } }),
      ),
    ).toBe(true);
  });

  it('returns false when canRepeat is false and id is not ability-increase', () => {
    expect(
      needsMetadata(makeEvolution({ id: 'evolution-bite', stacking: { canRepeat: false } })),
    ).toBe(false);
  });

  it('returns false when canRepeat is true but no requiresDifferentMetadata', () => {
    expect(needsMetadata(makeEvolution({ stacking: { canRepeat: true } }))).toBe(false);
  });
});

describe('labelForKind', () => {
  it('returns correct labels for all known kinds', () => {
    expect(labelForKind('attack')).toBe('Attack');
    expect(labelForKind('skill')).toBe('Skill');
    expect(labelForKind('spell')).toBe('Spell');
    expect(labelForKind('feat')).toBe('Feat');
    expect(labelForKind('slot')).toBe('Item slot');
    expect(labelForKind('limbPair')).toBe('Limb pair');
    expect(labelForKind('tail')).toBe('Tail');
  });

  it('returns Option for unknown kinds', () => {
    expect(labelForKind('unknown')).toBe('Option');
  });
});

describe('placeholderForKind', () => {
  it('returns correct placeholders for all known kinds', () => {
    expect(placeholderForKind('attack')).toBe('e.g. bite, claws, slam');
    expect(placeholderForKind('skill')).toBe('e.g. stealth');
    expect(placeholderForKind('spell')).toBe('e.g. magic-missile');
    expect(placeholderForKind('feat')).toBe('e.g. improved-grapple');
    expect(placeholderForKind('slot')).toBe('e.g. neck, belt');
    expect(placeholderForKind('limbPair')).toBe('arms or legs');
    expect(placeholderForKind('tail')).toBe('which tail (if more than one)');
  });

  it('returns empty string for unknown kinds', () => {
    expect(placeholderForKind('unknown')).toBe('');
  });
});

// ---- EvolutionRow tests ----

describe('EvolutionRow', () => {
  const DATA_INDEX_ROW = EidolonPoolService.buildIndexFromStaticData();

  function makeEvolutionFromIndex(id: string): EidolonEvolutionEntry {
    const evo = DATA_INDEX_ROW.evolutions.get(id);
    if (!evo) throw new Error(`Evolution not found: ${id}`);
    return evo;
  }

  function makeEidolonForRow(overrides: Partial<DraftEidolon> = {}): DraftEidolon {
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

  const onSelect = jest.fn();

  beforeEach(() => onSelect.mockClear());

  it('renders the evolution name and cost', () => {
    const evo = makeEvolutionFromIndex('evolution-bite');
    const { getAllText } = render(
      <EvolutionRow
        evolution={evo}
        eidolon={makeEidolonForRow()}
        summonerLevel={5}
        remainingPool={6}
        dataIndex={DATA_INDEX_ROW}
        onSelect={onSelect}
      />,
    );
    const text = getAllText().join('');
    expect(text).toContain('Bite');
    expect(text).toContain('1');
  });

  it('renders the description when present', () => {
    const evo = makeEvolutionFromIndex('evolution-bite');
    const { getAllText } = render(
      <EvolutionRow
        evolution={evo}
        eidolon={makeEidolonForRow()}
        summonerLevel={5}
        remainingPool={6}
        dataIndex={DATA_INDEX_ROW}
        onSelect={onSelect}
      />,
    );
    // description is present on bite evolution
    expect(getAllText().join('').length).toBeGreaterThan(10);
  });

  it('calls onSelect when pressed (allowed evolution)', () => {
    const evo = makeEvolutionFromIndex('evolution-bite');
    const { getByRole } = render(
      <EvolutionRow
        evolution={evo}
        eidolon={makeEidolonForRow()}
        summonerLevel={5}
        remainingPool={6}
        dataIndex={DATA_INDEX_ROW}
        onSelect={onSelect}
      />,
    );
    fireEvent.press(getByRole('button'));
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it('does not call onSelect when evolution is disabled (0 ep remaining, no metadata)', () => {
    const evo = makeEvolutionFromIndex('evolution-bite');
    const { getByRole } = render(
      <EvolutionRow
        evolution={evo}
        eidolon={makeEidolonForRow()}
        summonerLevel={5}
        remainingPool={0}
        dataIndex={DATA_INDEX_ROW}
        onSelect={onSelect}
      />,
    );
    fireEvent.press(getByRole('button'));
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('shows a warning message when evolution is not allowed', () => {
    // Use an evolution that requires a higher level gate to trigger warning
    const evo = makeEvolutionFromIndex('evolution-bite');
    const { getAllText } = render(
      <EvolutionRow
        evolution={evo}
        eidolon={makeEidolonForRow()}
        summonerLevel={5}
        remainingPool={0}
        dataIndex={DATA_INDEX_ROW}
        onSelect={onSelect}
      />,
    );
    const text = getAllText().join('');
    // When not allowed, a warning is rendered
    expect(text).toContain('⚠');
  });

  it('does not call onSelect when needs metadata but pool is exhausted (budget always wins)', () => {
    // Ability increase needs metadata, but if the pool is exhausted the row
    // must still be disabled — budget checks are independent of metadata.
    const evo = makeEvolutionFromIndex('evolution-ability-increase');
    const { getByRole } = render(
      <EvolutionRow
        evolution={evo}
        eidolon={makeEidolonForRow()}
        summonerLevel={5}
        remainingPool={0}
        dataIndex={DATA_INDEX_ROW}
        onSelect={onSelect}
      />,
    );
    fireEvent.press(getByRole('button'));
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('calls onSelect when needs metadata and pool has enough points', () => {
    // Ability increase needs metadata — when there are enough ep remaining the
    // row is clickable so the user can proceed to the metadata step.
    const evo = makeEvolutionFromIndex('evolution-ability-increase');
    const { getByRole } = render(
      <EvolutionRow
        evolution={evo}
        eidolon={makeEidolonForRow()}
        summonerLevel={5}
        remainingPool={6}
        dataIndex={DATA_INDEX_ROW}
        onSelect={onSelect}
      />,
    );
    fireEvent.press(getByRole('button'));
    expect(onSelect).toHaveBeenCalledTimes(1);
  });
});

// ---- MetadataStep tests ----

describe('MetadataStep', () => {
  function makeEvoWithKind(
    id: string,
    kind?: EidolonEvolutionEntry['stacking']['requiresDifferentMetadata'],
  ): EidolonEvolutionEntry {
    return {
      id,
      name: id,
      description: 'Test evolution',
      evolutionPointCost: 2,
      stacking: { canRepeat: true, requiresDifferentMetadata: kind },
      effects: [],
      source: 'pf1e-apg',
      isOfficial: true,
      verificationStatus: 'needs_review',
      visibility: 'global',
      rev: 1,
    } as EidolonEvolutionEntry;
  }

  const onConfirm = jest.fn();
  const onBack = jest.fn();
  const onChange = jest.fn();

  beforeEach(() => {
    onConfirm.mockClear();
    onBack.mockClear();
    onChange.mockClear();
  });

  it('renders description', () => {
    const evo = makeEvoWithKind('evolution-ability-increase');
    const { getAllText } = render(
      <MetadataStep
        evolution={evo}
        metadata={{}}
        onChange={onChange}
        onConfirm={onConfirm}
        onBack={onBack}
      />,
    );
    expect(getAllText().join('')).toContain('Test evolution');
  });

  it('calls onBack when Back is pressed', () => {
    const evo = makeEvoWithKind('evolution-ability-increase');
    const { getByLabelText } = render(
      <MetadataStep
        evolution={evo}
        metadata={{}}
        onChange={onChange}
        onConfirm={onConfirm}
        onBack={onBack}
      />,
    );
    fireEvent.press(getByLabelText('Back'));
    expect(onBack).toHaveBeenCalledTimes(1);
  });

  it('Add button is disabled when no ability selected for ability-increase', () => {
    const evo = makeEvoWithKind('evolution-ability-increase');
    const { getByLabelText } = render(
      <MetadataStep
        evolution={evo}
        metadata={{}}
        onChange={onChange}
        onConfirm={onConfirm}
        onBack={onBack}
      />,
    );
    // Pressing Add with empty metadata should not fire onConfirm (button is disabled)
    fireEvent.press(getByLabelText('Add evolution'));
    expect(onConfirm).not.toHaveBeenCalled();
  });

  it('Add button fires onConfirm when ability is selected', () => {
    const evo = makeEvoWithKind('evolution-ability-increase');
    const metadata: SelectedEvolutionMetadata = { ability: 'str' };
    const { getByLabelText } = render(
      <MetadataStep
        evolution={evo}
        metadata={metadata}
        onChange={onChange}
        onConfirm={onConfirm}
        onBack={onBack}
      />,
    );
    fireEvent.press(getByLabelText('Add evolution'));
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it('renders energy picker for energy kind', () => {
    const evo = makeEvoWithKind('evolution-resistance', 'energy');
    const { getAllText } = render(
      <MetadataStep
        evolution={evo}
        metadata={{}}
        onChange={onChange}
        onConfirm={onConfirm}
        onBack={onBack}
      />,
    );
    expect(getAllText().join('')).toContain('Energy type');
  });

  it('Add fires onConfirm when energyType is selected', () => {
    const evo = makeEvoWithKind('evolution-resistance', 'energy');
    const metadata: SelectedEvolutionMetadata = { energyType: 'fire' };
    const { getByLabelText } = render(
      <MetadataStep
        evolution={evo}
        metadata={metadata}
        onChange={onChange}
        onConfirm={onConfirm}
        onBack={onBack}
      />,
    );
    fireEvent.press(getByLabelText('Add evolution'));
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it('renders text input for attack kind', () => {
    const evo = makeEvoWithKind('evolution-bleed', 'attack');
    const { getAllText } = render(
      <MetadataStep
        evolution={evo}
        metadata={{}}
        onChange={onChange}
        onConfirm={onConfirm}
        onBack={onBack}
      />,
    );
    expect(getAllText().join('')).toContain('Attack');
  });

  it('renders text input for skill kind', () => {
    const evo = makeEvoWithKind('evolution-skilled', 'skill');
    const { getAllText } = render(
      <MetadataStep
        evolution={evo}
        metadata={{}}
        onChange={onChange}
        onConfirm={onConfirm}
        onBack={onBack}
      />,
    );
    expect(getAllText().join('')).toContain('Skill');
  });

  it('renders text input for spell kind', () => {
    const evo = makeEvoWithKind('evolution-basic-magic', 'spell');
    const { getAllText } = render(
      <MetadataStep
        evolution={evo}
        metadata={{}}
        onChange={onChange}
        onConfirm={onConfirm}
        onBack={onBack}
      />,
    );
    expect(getAllText().join('')).toContain('Spell');
  });

  it('renders text input for limbPair kind', () => {
    const evo = makeEvoWithKind('evolution-limbs', 'limbPair');
    const { getAllText } = render(
      <MetadataStep
        evolution={evo}
        metadata={{}}
        onChange={onChange}
        onConfirm={onConfirm}
        onBack={onBack}
      />,
    );
    expect(getAllText().join('')).toContain('Limb pair');
  });

  it('renders text input for tail kind', () => {
    const evo = makeEvoWithKind('evolution-tail-slap', 'tail');
    const { getAllText } = render(
      <MetadataStep
        evolution={evo}
        metadata={{}}
        onChange={onChange}
        onConfirm={onConfirm}
        onBack={onBack}
      />,
    );
    expect(getAllText().join('')).toContain('Tail');
  });

  it('Add fires onConfirm when notes filled for attack kind', () => {
    const evo = makeEvoWithKind('evolution-bleed', 'attack');
    const metadata: SelectedEvolutionMetadata = { notes: 'bite' };
    const { getByLabelText } = render(
      <MetadataStep
        evolution={evo}
        metadata={metadata}
        onChange={onChange}
        onConfirm={onConfirm}
        onBack={onBack}
      />,
    );
    fireEvent.press(getByLabelText('Add evolution'));
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });
});
