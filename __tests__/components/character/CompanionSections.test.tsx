import React from 'react';
import { render, fireEvent, type RenderedNode } from '../../helpers/testUtils';
import { IdentitySection } from '@/components/character/companion-entry/IdentitySection';
import { AbilitiesSection } from '@/components/character/companion-entry/AbilitiesSection';
import { CombatSection } from '@/components/character/companion-entry/CombatSection';
import type { CompanionInstance } from '@/types/companions';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';

// ---- Mocks ----

const mockDispatch = jest.fn();

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: (selector: (s: unknown) => unknown) => selector({}),
}));

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: {
      bg: { primary: '#fff', secondary: '#f5f5f5', tertiary: '#eee' },
      border: { DEFAULT: '#ccc' },
      text: { primary: '#000', secondary: '#333', tertiary: '#999' },
    },
    fantasy: { gold: '#FFD700', bronze: '#CD7F32', darkWood: '#4A2C2A' },
    isDark: false,
  }),
}));

// ---- Helpers ----

function findByType(node: RenderedNode, typeName: string): RenderedNode[] {
  const results: RenderedNode[] = [];
  if (node.type === typeName) results.push(node);
  for (const child of node.children) {
    if (typeof child !== 'string') results.push(...findByType(child, typeName));
  }
  return results;
}

// ---- Fixtures ----

const wolf: AnimalCompanionEntry = {
  id: 'wolf',
  name: 'Wolf',
  companionType: 'animal',
  bodyShape: 'quadrupedClaws',
  size: 'Medium',
  speed: '50 ft.',
  naturalArmor: 2,
  attacks: 'bite (1d6)',
  str: 13,
  dex: 15,
  con: 15,
  int: 2,
  wis: 12,
  cha: 6,
  specialQualities: ['low-light vision', 'scent'],
  progressionTiers: [
    {
      atDruidLevel: 4,
      sizeChange: 'Medium to Large',
      abilityScoreChanges: [
        { ability: 'STR', change: 8 },
        { ability: 'DEX', change: -2 },
        { ability: 'CON', change: 4 },
      ],
      naturalArmorChange: 2,
      attackUpdate: 'bite (1d8)',
      specialQualitiesGained: ['trip'],
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'verified',
  visibility: 'global',
  rev: 1,
};

function makeCompanion(overrides: Partial<CompanionInstance> = {}): CompanionInstance {
  return {
    instanceId: 'comp-1',
    sourceEntryId: 'wolf',
    name: 'Shadow',
    grantedBy: { type: 'class', classEntryId: 'class-druid', classChoiceId: 'nature-bond' },
    effectiveProgressionLevel: 4,
    abilityScoreOverrides: {},
    hp: { max: 0, current: 0, temp: 0, nonlethal: 0 },
    appliedTemplates: [],
    feats: [],
    tricks: [],
    skillRanks: {},
    equipment: {
      armor: [],
      weapons: [],
      magicItems: [],
      gear: [],
      equippedSlots: new Map(),
    },
    notes: '',
    ...overrides,
  };
}

beforeEach(() => {
  mockDispatch.mockClear();
});

// ---- IdentitySection ----

describe('IdentitySection', () => {
  it('renders companion form, size, type, and special qualities', () => {
    const comp = makeCompanion({ name: 'Shadow', notes: 'prefers flanking' });
    const r = render(<IdentitySection companion={comp} entry={wolf} />);
    const text = r.getAllText().join(' ');
    expect(text).toContain('Wolf');
    expect(text).toContain('Medium');
    expect(text).toContain('animal');
    expect(text).toContain('low-light vision');
    expect(text).toContain('scent');
  });

  it('typing in the name field dispatches renameCompanion', () => {
    const comp = makeCompanion();
    const r = render(<IdentitySection companion={comp} entry={wolf} />);
    const inputs = findByType(r.tree, 'TextInput');
    // First TextInput is the name field; second is notes.
    fireEvent.changeText(inputs[0], 'Umbra');
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'characterEntry/renameCompanion',
        payload: { instanceId: 'comp-1', name: 'Umbra' },
      }),
    );
  });

  it('typing in the notes field dispatches setCompanionNotes', () => {
    const comp = makeCompanion();
    const r = render(<IdentitySection companion={comp} entry={wolf} />);
    const inputs = findByType(r.tree, 'TextInput');
    fireEvent.changeText(inputs[1], 'new note');
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'characterEntry/setCompanionNotes',
        payload: { instanceId: 'comp-1', notes: 'new note' },
      }),
    );
  });
});

// ---- AbilitiesSection ----

describe('AbilitiesSection', () => {
  it('renders six ability rows with applied progression tier info', () => {
    const comp = makeCompanion({ effectiveProgressionLevel: 4 });
    const r = render(<AbilitiesSection companion={comp} entry={wolf} />);
    const text = r.getAllText().join(' ');
    for (const ab of ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']) {
      expect(text).toContain(ab);
    }
    expect(text).toContain('lvl 4');
  });

  it('typing a numeric override dispatches setCompanionAbilityOverride', () => {
    const comp = makeCompanion();
    const r = render(<AbilitiesSection companion={comp} entry={wolf} />);
    const inputs = findByType(r.tree, 'TextInput');
    expect(inputs.length).toBe(6);
    fireEvent.changeText(inputs[0], '24');
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'characterEntry/setCompanionAbilityOverride',
        payload: { instanceId: 'comp-1', ability: 'STR', value: 24 },
      }),
    );
  });

  it('clearing the override input dispatches value: null', () => {
    const comp = makeCompanion({ abilityScoreOverrides: { STR: 24 } });
    const r = render(<AbilitiesSection companion={comp} entry={wolf} />);
    const inputs = findByType(r.tree, 'TextInput');
    fireEvent.changeText(inputs[0], '');
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'characterEntry/setCompanionAbilityOverride',
        payload: { instanceId: 'comp-1', ability: 'STR', value: null },
      }),
    );
  });
});

// ---- CombatSection ----

describe('CombatSection', () => {
  it('renders computed combat block for a level-4 wolf', () => {
    const comp = makeCompanion({ effectiveProgressionLevel: 4 });
    const r = render(<CombatSection companion={comp} entry={wolf} />);
    const text = r.getAllText().join(' ');
    // HD 4, BAB +3 at effective level 4 (universal AC table)
    expect(text).toContain('+3');
    // Size Large at tier 4 → -1 size modifier in AC breakdown
    expect(text).toMatch(/-1\s*size/);
    // AC = 10 + 6 nat (2 base + 2 tier + 2 table) + 2 Dex + (-1) size = 17
    expect(text).toContain('17');
    // CMD = 10 + 3 BAB + 6 Str + 2 Dex + 1 large-size-cmb = 22
    expect(text).toContain('22');
    // Expected speed passed through from entry
    expect(text).toContain('50 ft.');
  });

  it('editing the Max HP input dispatches setCompanionHP', () => {
    const comp = makeCompanion();
    const r = render(<CombatSection companion={comp} entry={wolf} />);
    const inputs = findByType(r.tree, 'TextInput');
    // First four inputs are max/current/temp/nonlethal
    fireEvent.changeText(inputs[0], '48');
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'characterEntry/setCompanionHP',
        payload: { instanceId: 'comp-1', field: 'max', value: 48 },
      }),
    );
  });

  it('shows not-found message when entry is missing', () => {
    const comp = makeCompanion();
    const r = render(<CombatSection companion={comp} entry={undefined} />);
    const text = r.getAllText().join(' ');
    expect(text).toContain("can't compute");
  });
});
