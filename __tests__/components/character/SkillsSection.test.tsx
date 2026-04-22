import React from 'react';
import { render } from '../../helpers/testUtils';
import { SkillsSection } from '@/components/character/direct-entry/SkillsSection';
import { PRESET_PF1E_STANDARD, PRESET_GO_NUTS } from '@/data/rulesets/presets';
import type { DraftAbilityScore, DraftSkillEntry } from '@/types/characterDraft';
import type { Ruleset } from '@/types/ruleset';

const mockDispatch = jest.fn();

const baseAbilityScore: DraftAbilityScore = {
  base: 10,
  racial: 0,
  inherent: 0,
  enhancement: 0,
  other: 0,
  levelIncrements: 0,
};

const mockAbilities = {
  str: baseAbilityScore,
  dex: baseAbilityScore,
  con: baseAbilityScore,
  int: baseAbilityScore,
  wis: baseAbilityScore,
  cha: baseAbilityScore,
};

let mockSkills: Record<string, DraftSkillEntry> = {};
let mockRuleset: Ruleset = PRESET_PF1E_STANDARD;

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: (selector: (s: unknown) => unknown) =>
    selector({
      characterEntry: { draft: { skills: mockSkills, abilities: mockAbilities } },
      ruleset: { activeRuleset: mockRuleset },
    }),
}));

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: {
      bg: { primary: '#fff', secondary: '#f5f5f5', tertiary: '#eee' },
      border: { DEFAULT: '#ccc' },
      text: { primary: '#000', secondary: '#333', tertiary: '#999' },
    },
    fantasy: { gold: '#FFD700', bronze: '#CD7F32' },
    isDark: false,
  }),
}));

beforeEach(() => {
  mockSkills = {};
  mockRuleset = PRESET_PF1E_STANDARD;
  mockDispatch.mockClear();
});

describe('SkillsSection — Knowledge (Martial) gating', () => {
  it('hides Knowledge (Martial) with standard ruleset (no initiating mechanics)', () => {
    mockRuleset = PRESET_PF1E_STANDARD; // pathOfWarMechanics: false, tomeOfBattleMechanics: false
    const { getAllText } = render(<SkillsSection />);
    const allText = getAllText();
    expect(allText.some((t) => t.includes('Knowledge (Martial)'))).toBe(false);
  });

  it('shows Knowledge (Martial) when pathOfWarMechanics is enabled', () => {
    mockRuleset = PRESET_GO_NUTS; // pathOfWarMechanics: true
    mockSkills = { knowledgeMartial: { ranks: 1, misc: 0 } };
    const { getAllText } = render(<SkillsSection />);
    const allText = getAllText();
    expect(allText.some((t) => t.includes('Knowledge (Martial)'))).toBe(true);
  });

  it('shows Knowledge (Martial) when only tomeOfBattleMechanics is enabled', () => {
    mockRuleset = {
      ...PRESET_PF1E_STANDARD,
      optionalRules: {
        ...PRESET_PF1E_STANDARD.optionalRules,
        tomeOfBattleMechanics: true,
      },
    };
    mockSkills = { knowledgeMartial: { ranks: 1, misc: 0 } };
    const { getAllText } = render(<SkillsSection />);
    const allText = getAllText();
    expect(allText.some((t) => t.includes('Knowledge (Martial)'))).toBe(true);
  });
});

describe('SkillsSection — specialty group visibility', () => {
  it('hides Craft group when no specialties exist and showAll is false', () => {
    mockSkills = {};
    const { getAllText } = render(<SkillsSection />);
    const allText = getAllText();
    // In ranked-only mode with no craft specialties, the Craft group should not appear
    expect(allText.some((t) => t === 'Craft')).toBe(false);
  });

  it('shows Craft group when a 0-rank specialty exists (fix: length > 0 not ranks > 0)', () => {
    mockSkills = { 'craft (alchemy)': { ranks: 0, misc: 0 } };
    const { getAllText } = render(<SkillsSection />);
    const allText = getAllText();
    // Craft group header should appear even though the specialty has 0 ranks
    expect(allText.some((t) => t === 'Craft')).toBe(true);
  });

  it('shows specialty row label for an existing craft specialty', () => {
    mockSkills = { 'craft (alchemy)': { ranks: 3, misc: 0 } };
    const { getAllText } = render(<SkillsSection />);
    const allText = getAllText();
    expect(allText.some((t) => t.includes('Craft (Alchemy)'))).toBe(true);
  });
});
