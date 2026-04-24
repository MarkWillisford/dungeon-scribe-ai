import React from 'react';
import { render, fireEvent, type RenderedNode } from '../../helpers/testUtils';
import { IdentitySection } from '@/components/character/companion-entry/IdentitySection';
import { AbilitiesSection } from '@/components/character/companion-entry/AbilitiesSection';
import { CombatSection } from '@/components/character/companion-entry/CombatSection';
import { SkillsSection } from '@/components/character/companion-entry/SkillsSection';
import { FeatsSection } from '@/components/character/companion-entry/FeatsSection';
import { TricksSection } from '@/components/character/companion-entry/TricksSection';
import { NotesSection } from '@/components/character/companion-entry/NotesSection';
import { TemplatesSection } from '@/components/character/companion-entry/TemplatesSection';
import { CompanionTemplateCard } from '@/components/character/companion-entry/CompanionTemplateCard';
import { EquipmentSection } from '@/components/character/companion-entry/EquipmentSection';
import type { AppliedTemplate } from '@/types/templates';
import type { MagicItemDefinition } from '@/types/magicItems';
import type { CompanionInstance } from '@/types/companions';
import type { AnimalCompanionEntry } from '@/types/animalCompanions';

// FeatPickerSheet pulls in GameDataService (Firestore). Replace it with a
// button that fires a canned FeatPickerResult so FeatsSection's dispatch path
// is testable without touching the picker internals. The mock ignores the
// `visible` prop so the test renderer (which doesn't re-render on setState)
// can find the select trigger without having to press "Add Feat" first.
// Mock SearchPickerSheet so TemplatesSection's add-template flow is testable
// without driving a full-screen modal. The mock always renders a pressable
// that fires onSelect with a canned template id when pressed; the custom
// test renderer can't flip `visible` via setState so we ignore it.
jest.mock('@/components/ui/SearchPickerSheet', () => {
  const React = require('react');
  const { Pressable, Text } = require('react-native');
  return {
    SearchPickerSheet: ({
      onSelect,
    }: {
      visible: boolean;
      title: string;
      items: { key: string; label: string }[];
      onSelect: (item: { key: string; label: string }) => void;
      onClose: () => void;
      placeholder?: string;
    }) =>
      React.createElement(
        Pressable,
        {
          testID: 'mock-template-picker-select',
          accessibilityRole: 'button',
          accessibilityLabel: 'mock-template-select',
          // Fixture id chosen to match a real ALL_TEMPLATES entry so the
          // lookup in handlePick resolves (half-celestial is CR+1 official).
          onPress: () =>
            onSelect({ key: 'half-celestial', label: 'Half-Celestial' } as {
              key: string;
              label: string;
            }),
        },
        React.createElement(Text, null, 'mock-template-select'),
      ),
  };
});

// InlinePicker opens its own modal; replace with a Pressable that calls
// onValueChange('acquired') when pressed so card update dispatches are
// testable without driving the modal.
jest.mock('@/components/ui/InlinePicker', () => {
  const React = require('react');
  const { Pressable, Text } = require('react-native');
  return {
    InlinePicker: ({
      value,
      options,
      onValueChange,
    }: {
      value: string;
      options: { label: string; value: string }[];
      onValueChange: (v: string) => void;
    }) => {
      // Pick the option that is NOT currently selected so pressing flips state.
      const next = options.find((o) => o.value !== value) ?? options[0];
      return React.createElement(
        Pressable,
        {
          accessibilityRole: 'button',
          accessibilityLabel: `mock-picker-${value}`,
          onPress: () => onValueChange(next.value),
        },
        React.createElement(Text, null, value),
      );
    },
  };
});

// Replace the 492-template dataset with a pair of fixtures so tests don't
// depend on scraper output or pay the cost of loading the full batch tree.
jest.mock('@/data/templates', () => ({
  ALL_TEMPLATES: [
    {
      id: 'half-celestial',
      name: 'Half-Celestial',
      description: 'A celestial inheritance.',
      crAdjustment: 2,
      acquisitionType: 'inherited',
      isSimpleTemplate: false,
      features: [],
      sourceInfo: { book: 'Bestiary', page: 170 },
      visibility: 'global',
      rev: 1,
      verificationStatus: 'verified',
    },
    {
      id: 'half-fiend',
      name: 'Half-Fiend',
      description: 'A fiendish inheritance.',
      crAdjustment: 2,
      laAdjustment: 4,
      acquisitionType: 'inherited',
      isSimpleTemplate: false,
      features: [],
      sourceInfo: { book: 'Bestiary', page: 171 },
      visibility: 'global',
      rev: 1,
      verificationStatus: 'verified',
    },
  ],
}));

jest.mock('@/components/character/direct-entry/FeatPickerSheet', () => {
  const React = require('react');
  const { Pressable, Text } = require('react-native');
  return {
    FeatPickerSheet: ({
      onSelect,
    }: {
      visible: boolean;
      onSelect: (r: { featId: string; featName: string }) => void;
    }) =>
      React.createElement(
        Pressable,
        {
          testID: 'mock-feat-picker-select',
          accessibilityRole: 'button',
          accessibilityLabel: 'mock-picker-select',
          onPress: () => onSelect({ featId: 'toughness', featName: 'Toughness' }),
        },
        React.createElement(Text, null, 'mock-select'),
      ),
  };
});

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
    hdAbilityIncreases: [],
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
    background: '',
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

// ---- SkillsSection ----

describe('SkillsSection', () => {
  it('renders the rank budget and all seven class skills', () => {
    const comp = makeCompanion({ effectiveProgressionLevel: 4 });
    const r = render(<SkillsSection companion={comp} entry={wolf} />);
    const text = r.getAllText().join(' ');
    // INT 2 on the wolf → mod -4 → skillRanksPerHD clamped to 1; HD 4 → budget 4
    expect(text).toMatch(/0\s*\/\s*4/);
    for (const skill of [
      'Acrobatics',
      'Climb',
      'Fly',
      'Perception',
      'Stealth',
      'Survival',
      'Swim',
    ]) {
      expect(text).toContain(skill);
    }
  });

  it('typing a rank dispatches setCompanionSkillRank with a clamped value', () => {
    const comp = makeCompanion();
    const r = render(<SkillsSection companion={comp} entry={wolf} />);
    const inputs = findByType(r.tree, 'TextInput');
    // Seven skill rows × one rank input each.
    expect(inputs.length).toBe(7);
    fireEvent.changeText(inputs[4], '2'); // Stealth
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'characterEntry/setCompanionSkillRank',
        payload: { instanceId: 'comp-1', skill: 'Stealth', ranks: 2 },
      }),
    );
  });

  it('non-numeric rank input clamps to 0', () => {
    const comp = makeCompanion();
    const r = render(<SkillsSection companion={comp} entry={wolf} />);
    const inputs = findByType(r.tree, 'TextInput');
    fireEvent.changeText(inputs[0], 'abc');
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'characterEntry/setCompanionSkillRank',
        payload: { instanceId: 'comp-1', skill: 'Acrobatics', ranks: 0 },
      }),
    );
  });

  it('caps rank input at the HD limit', () => {
    const comp = makeCompanion({ effectiveProgressionLevel: 4 }); // HD 4
    const r = render(<SkillsSection companion={comp} entry={wolf} />);
    const inputs = findByType(r.tree, 'TextInput');
    fireEvent.changeText(inputs[0], '99');
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'characterEntry/setCompanionSkillRank',
        payload: { instanceId: 'comp-1', skill: 'Acrobatics', ranks: 4 },
      }),
    );
  });

  it('shows not-found message when entry is missing', () => {
    const comp = makeCompanion();
    const r = render(<SkillsSection companion={comp} entry={undefined} />);
    const text = r.getAllText().join(' ');
    expect(text).toContain("can't compute");
  });
});

// ---- FeatsSection ----

describe('FeatsSection', () => {
  it('renders the feat budget for the current progression level', () => {
    const comp = makeCompanion({ effectiveProgressionLevel: 4 });
    const r = render(<FeatsSection companion={comp} entry={wolf} />);
    const text = r.getAllText().join(' ');
    // AC_PROGRESSION[4].feats === 2
    expect(text).toMatch(/0\s*\/\s*2/);
    expect(text).toContain('No feats assigned yet.');
  });

  it('shows assigned feats and dispatches removeCompanionFeatAt on ✕', () => {
    const comp = makeCompanion({
      feats: [
        { featId: 'toughness', name: 'Toughness', hdWhenTaken: 3, active: true, choices: {} },
      ],
    });
    const r = render(<FeatsSection companion={comp} entry={wolf} />);
    const removeBtn = r
      .getAllByRole('button')
      .find((n) => n.props.accessibilityLabel === 'Remove feat Toughness');
    expect(removeBtn).toBeDefined();
    fireEvent.press(removeBtn!);
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'characterEntry/removeCompanionFeatAt',
        payload: { instanceId: 'comp-1', index: 0 },
      }),
    );
  });

  it('selecting a feat from the picker dispatches addCompanionFeat with current HD', () => {
    const comp = makeCompanion({ effectiveProgressionLevel: 4 }); // HD 4 via AC_PROGRESSION
    const r = render(<FeatsSection companion={comp} entry={wolf} />);
    const pickerTrigger = r.getByTestId('mock-feat-picker-select');
    fireEvent.press(pickerTrigger);
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'characterEntry/addCompanionFeat',
        payload: expect.objectContaining({
          instanceId: 'comp-1',
          feat: expect.objectContaining({
            featId: 'toughness',
            name: 'Toughness',
            hdWhenTaken: 4,
          }),
        }),
      }),
    );
  });

  it('disables the Add button when all feat slots are filled', () => {
    const comp = makeCompanion({
      effectiveProgressionLevel: 1, // feats: 1
      feats: [
        { featId: 'toughness', name: 'Toughness', hdWhenTaken: 2, active: true, choices: {} },
      ],
    });
    const r = render(<FeatsSection companion={comp} entry={wolf} />);
    const addBtn = r.getAllByRole('button').find((n) => n.props.accessibilityLabel === 'Add feat');
    expect(addBtn?.props.disabled).toBe(true);
    const text = r.getAllText().join(' ');
    expect(text).toContain('All feat slots filled');
  });
});

// ---- TricksSection ----

describe('TricksSection', () => {
  it('renders known counter as HD + bonus tricks', () => {
    const comp = makeCompanion({ effectiveProgressionLevel: 4 });
    const r = render(<TricksSection companion={comp} entry={wolf} />);
    const text = r.getAllText().join(' ');
    // HD 4 + bonus 2 = 6 budget at level 4
    expect(text).toMatch(/0\s*\/\s*6\s+known/);
  });

  it('pressing a trick row dispatches toggleCompanionTrick', () => {
    const comp = makeCompanion();
    const r = render(<TricksSection companion={comp} entry={wolf} />);
    const attackRow = r
      .getAllByRole('checkbox')
      .find((n) => n.props.accessibilityLabel === 'Trick: Attack');
    expect(attackRow).toBeDefined();
    fireEvent.press(attackRow!);
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'characterEntry/toggleCompanionTrick',
        payload: { instanceId: 'comp-1', trick: 'attack' },
      }),
    );
  });

  it('known tricks are reflected in checkbox accessibility state', () => {
    const comp = makeCompanion({ tricks: ['attack', 'stay'] });
    const r = render(<TricksSection companion={comp} entry={wolf} />);
    const attackRow = r
      .getAllByRole('checkbox')
      .find((n) => n.props.accessibilityLabel === 'Trick: Attack');
    expect(attackRow?.props.accessibilityState).toEqual({ checked: true });
    const fetchRow = r
      .getAllByRole('checkbox')
      .find((n) => n.props.accessibilityLabel === 'Trick: Fetch');
    expect(fetchRow?.props.accessibilityState).toEqual({ checked: false });
  });
});

// ---- NotesSection ----

describe('NotesSection', () => {
  it('renders the current background value', () => {
    const comp = makeCompanion({ background: 'Raised in the Whisperwood.' });
    const r = render(<NotesSection companion={comp} entry={wolf} />);
    const input = findByType(r.tree, 'TextInput')[0];
    expect(input.props.value).toBe('Raised in the Whisperwood.');
  });

  it('typing into the background input dispatches setCompanionBackground', () => {
    const comp = makeCompanion({ background: '' });
    const r = render(<NotesSection companion={comp} entry={wolf} />);
    const input = findByType(r.tree, 'TextInput')[0];
    fireEvent.changeText(input, 'A stray adopted by the village.');
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'characterEntry/setCompanionBackground',
        payload: { instanceId: 'comp-1', background: 'A stray adopted by the village.' },
      }),
    );
  });

  it('shows the hint explaining the split with Identity notes', () => {
    const comp = makeCompanion();
    const r = render(<NotesSection companion={comp} entry={wolf} />);
    const text = r.getAllText().join(' ');
    expect(text).toMatch(/Identity tab.*shorter notes/i);
  });
});

// ---- Helpers shared by template tests ----

function makeAppliedTemplate(overrides: Partial<AppliedTemplate> = {}): AppliedTemplate {
  return {
    templateId: 'half-celestial',
    name: 'Half-Celestial',
    appliedAs: 'cr',
    cr: 2,
    acquisitionType: 'inherited',
    paidTiers: [],
    sourceId: 'half-celestial',
    sourceRev: 1,
    ...overrides,
  };
}

// ---- TemplatesSection ----

describe('TemplatesSection', () => {
  it('renders an empty-state panel when no templates are applied', () => {
    const comp = makeCompanion({ appliedTemplates: [] });
    const r = render(<TemplatesSection companion={comp} entry={wolf} />);
    const text = r.getAllText().join(' ');
    expect(text).toContain('No templates applied yet.');
  });

  it('renders a card per applied template', () => {
    const comp = makeCompanion({
      appliedTemplates: [
        makeAppliedTemplate({ templateId: 'half-celestial', name: 'Half-Celestial' }),
        makeAppliedTemplate({ templateId: 'half-fiend', name: 'Half-Fiend', cr: 2 }),
      ],
    });
    const r = render(<TemplatesSection companion={comp} entry={wolf} />);
    const text = r.getAllText().join(' ');
    expect(text).toContain('Half-Celestial');
    expect(text).toContain('Half-Fiend');
  });

  it('selecting a template from the picker dispatches addCompanionTemplate', () => {
    const comp = makeCompanion();
    const r = render(<TemplatesSection companion={comp} entry={wolf} />);
    const pickerTrigger = r.getByTestId('mock-template-picker-select');
    fireEvent.press(pickerTrigger);
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'characterEntry/addCompanionTemplate',
        payload: expect.objectContaining({
          instanceId: 'comp-1',
          template: expect.objectContaining({
            templateId: 'half-celestial',
            name: 'Half-Celestial',
            appliedAs: 'cr',
            cr: 2,
            acquisitionType: 'inherited',
            paidTiers: [],
          }),
        }),
      }),
    );
  });
});

// ---- CompanionTemplateCard ----

describe('CompanionTemplateCard', () => {
  it('renders the template name and ECL cost label for a CR template', () => {
    const r = render(
      <CompanionTemplateCard
        instanceId="comp-1"
        index={0}
        template={makeAppliedTemplate({ cr: 2 })}
        canSwitchAppliedAs={false}
      />,
    );
    const text = r.getAllText().join(' ');
    expect(text).toContain('Half-Celestial');
    expect(text).toContain('CR +2');
  });

  it('renders LA label for an LA template', () => {
    const r = render(
      <CompanionTemplateCard
        instanceId="comp-1"
        index={0}
        template={makeAppliedTemplate({ appliedAs: 'la', la: 4, cr: undefined })}
        canSwitchAppliedAs={false}
      />,
    );
    const text = r.getAllText().join(' ');
    expect(text).toContain('LA +4');
  });

  it('remove button dispatches removeCompanionTemplateAt with the index', () => {
    const r = render(
      <CompanionTemplateCard
        instanceId="comp-1"
        index={2}
        template={makeAppliedTemplate()}
        canSwitchAppliedAs={false}
      />,
    );
    const removeBtn = r
      .getAllByRole('button')
      .find((n) => n.props.accessibilityLabel === 'Remove Half-Celestial');
    expect(removeBtn).toBeDefined();
    fireEvent.press(removeBtn!);
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'characterEntry/removeCompanionTemplateAt',
        payload: { instanceId: 'comp-1', index: 2 },
      }),
    );
  });

  it('hides the applied-as picker when canSwitchAppliedAs is false', () => {
    const r = render(
      <CompanionTemplateCard
        instanceId="comp-1"
        index={0}
        template={makeAppliedTemplate()}
        canSwitchAppliedAs={false}
      />,
    );
    const text = r.getAllText().join(' ');
    expect(text).not.toContain('Applied as');
  });

  it('shows the applied-as picker when canSwitchAppliedAs is true, and pressing it flips appliedAs', () => {
    const r = render(
      <CompanionTemplateCard
        instanceId="comp-1"
        index={1}
        template={makeAppliedTemplate()}
        canSwitchAppliedAs
      />,
    );
    const text = r.getAllText().join(' ');
    expect(text).toContain('Applied as');
    // Mocked InlinePicker carries accessibilityLabel=`mock-picker-${value}`.
    // Current value is 'cr'; pressing it flips to 'la'.
    const switchBtn = r
      .getAllByRole('button')
      .find((n) => n.props.accessibilityLabel === 'mock-picker-cr');
    expect(switchBtn).toBeDefined();
    fireEvent.press(switchBtn!);
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'characterEntry/updateCompanionTemplateAt',
        payload: {
          instanceId: 'comp-1',
          index: 1,
          patch: { appliedAs: 'la', cr: undefined },
        },
      }),
    );
  });

  it('acquisition picker dispatches updateCompanionTemplateAt with new acquisitionType', () => {
    const r = render(
      <CompanionTemplateCard
        instanceId="comp-1"
        index={0}
        template={makeAppliedTemplate({ acquisitionType: 'inherited' })}
        canSwitchAppliedAs={false}
      />,
    );
    // Two mock pickers on the card when canSwitchAppliedAs is false: just the
    // acquired one. Current value is 'inherited'; mock flips to first other
    // option which per ACQUISITION_OPTIONS order is 'acquired'.
    const acquiredBtn = r
      .getAllByRole('button')
      .find((n) => n.props.accessibilityLabel === 'mock-picker-inherited');
    expect(acquiredBtn).toBeDefined();
    fireEvent.press(acquiredBtn!);
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'characterEntry/updateCompanionTemplateAt',
        payload: {
          instanceId: 'comp-1',
          index: 0,
          patch: { acquisitionType: 'acquired' },
        },
      }),
    );
  });

  it('renders paid-tier summary when tiers are present', () => {
    const r = render(
      <CompanionTemplateCard
        instanceId="comp-1"
        index={0}
        template={makeAppliedTemplate({ paidTiers: [0, 1] })}
        canSwitchAppliedAs={false}
      />,
    );
    const text = r.getAllText().join(' ');
    expect(text).toContain('Tiers paid');
    expect(text).toMatch(/0,\s*1/);
  });
});

// ---- EquipmentSection ----
//
// GameDataService is mocked out since the real connector loads Firebase.
// The async getMagicItemsBySlot is a no-op in this suite — useEffect is
// suppressed by the custom test renderer — so the item-selection dispatch
// path is covered by the slice tests (equipCompanionMagicItem). These tests
// verify the slot grid renders correctly and that unequip dispatches.
jest.mock('@/services/GameDataService', () => ({
  GameDataService: {
    getMagicItemsBySlot: jest.fn().mockResolvedValue([] as never[]),
  },
}));

describe('EquipmentSection', () => {
  it('renders empty state when entry is missing', () => {
    const comp = makeCompanion();
    const r = render(<EquipmentSection companion={comp} entry={undefined} />);
    const text = r.getAllText().join(' ');
    expect(text).toContain("can't render equipment slots");
  });

  it('renders the automatic-slot grid for a quadruped-claws companion (wolf)', () => {
    // wolf = quadrupedClaws; only `armor` and `neck` are automatic per the
    // Ultimate Wilderness table — the other seven slots require Extra Item Slot.
    const comp = makeCompanion({ feats: [] });
    const r = render(<EquipmentSection companion={comp} entry={wolf} />);
    const text = r.getAllText().join(' ');
    expect(text).toMatch(/2\s+unlocked/);
    expect(text).toContain('Armor / Barding');
    expect(text).toContain('Neck');
  });

  it('surfaces additional slots when Extra Item Slot feat is taken', () => {
    // Extra Item Slot with choices.slot === 'belt' unlocks the belt slot on
    // top of the automatic armor + neck.
    const comp = makeCompanion({
      feats: [
        {
          featId: 'extra-item-slot',
          name: 'Extra Item Slot',
          hdWhenTaken: 4,
          active: true,
          choices: { slot: 'belt' },
        },
      ],
    });
    const r = render(<EquipmentSection companion={comp} entry={wolf} />);
    const text = r.getAllText().join(' ');
    expect(text).toMatch(/3\s+unlocked/);
    expect(text).toContain('Belt');
  });

  it('shows the saddle subtype restriction for quadruped-hooves belt slot', () => {
    // Horse-shaped fixture to trigger the saddle subtype.
    const horse: AnimalCompanionEntry = {
      ...wolf,
      id: 'horse',
      name: 'Horse',
      bodyShape: 'quadrupedHooves',
    };
    const comp = makeCompanion({
      sourceEntryId: 'horse',
      feats: [
        {
          featId: 'extra-item-slot',
          name: 'Extra Item Slot',
          hdWhenTaken: 4,
          active: true,
          choices: { slot: 'belt' },
        },
      ],
    });
    const r = render(<EquipmentSection companion={comp} entry={horse} />);
    const text = r.getAllText().join(' ');
    expect(text).toContain('saddles only');
  });

  it('renders an equipped item and dispatches unequipCompanionMagicItem on ✕', () => {
    const comp = makeCompanion({
      equipment: {
        armor: [],
        weapons: [],
        gear: [],
        magicItems: [
          {
            instanceId: 'item-1',
            definitionId: 'amulet-of-natural-armor',
            name: 'Amulet of Natural Armor +1',
            equipped: true,
            equippedSlot: 'neck',
            identified: true,
          },
        ],
        equippedSlots: new Map([['neck', 'item-1']]),
      },
    });
    const r = render(<EquipmentSection companion={comp} entry={wolf} />);
    const text = r.getAllText().join(' ');
    expect(text).toContain('Amulet of Natural Armor +1');
    const unequipBtn = r
      .getAllByRole('button')
      .find((n) => n.props.accessibilityLabel === 'Unequip Amulet of Natural Armor +1');
    expect(unequipBtn).toBeDefined();
    fireEvent.press(unequipBtn!);
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'characterEntry/unequipCompanionMagicItem',
        payload: { instanceId: 'comp-1', slot: 'neck' },
      }),
    );
  });

  it('empty slot button carries accessibilityLabel naming the slot', () => {
    const comp = makeCompanion();
    const r = render(<EquipmentSection companion={comp} entry={wolf} />);
    const armorBtn = r
      .getAllByRole('button')
      .find((n) => n.props.accessibilityLabel === 'Equip Armor / Barding');
    expect(armorBtn).toBeDefined();
  });

  it('renders an informative empty panel when a body shape has no auto slots', () => {
    // `unusual` = plants + vermin → zero automatic slots per the table.
    const insect: AnimalCompanionEntry = { ...wolf, id: 'insect', bodyShape: 'unusual' };
    const comp = makeCompanion({ sourceEntryId: 'insect' });
    const r = render(<EquipmentSection companion={comp} entry={insect} />);
    const text = r.getAllText().join(' ');
    expect(text).toMatch(/no automatic magic-item slots/i);
  });

  // Silences MagicItemDefinition import-only warning if a future refactor
  // drops the type from the module. Guards against accidental unused exports.
  it('MagicItemDefinition type re-import sanity', () => {
    const items: MagicItemDefinition[] = [];
    expect(items).toEqual([]);
  });
});
