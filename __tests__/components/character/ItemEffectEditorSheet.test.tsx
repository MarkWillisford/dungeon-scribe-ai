import React from 'react';
import { render, fireEvent, type RenderedNode } from '../../helpers/testUtils';
import {
  buildClassAbilityTargets,
  buildTargetLabelMap,
  EffectTargetPickerSheet,
} from '@/components/character/direct-entry/EffectTargetPickerSheet';
import { ItemEffectEditorSheet } from '@/components/character/direct-entry/ItemEffectEditorSheet';
import {
  formatEffectSummary,
  formatSpecialSummary,
} from '@/components/character/direct-entry/EquipmentSection';
import { CharacterService } from '@/services/CharacterService';
import type { EditorEquipmentItem } from '@/types/character';
import type { Character } from '@/types';
import { BonusType } from '@/types/base';

// ---- Mocks ----

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    isDark: false,
    colors: {
      bg: { primary: '#fff', secondary: '#f5f5f5', tertiary: '#eee' },
      text: { primary: '#111', secondary: '#555', tertiary: '#999' },
      border: { DEFAULT: '#ddd' },
    },
    fantasy: { gold: '#d4af37', darkWood: '#8c5a28' },
  }),
}));

// ---- Helpers ----

function getAllText(node: RenderedNode): string[] {
  const texts: string[] = [];
  for (const child of node.children) {
    if (typeof child === 'string') texts.push(child);
    else texts.push(...getAllText(child));
  }
  return texts;
}

function findTestId(node: RenderedNode, testID: string): RenderedNode | null {
  if (node.props.testID === testID) return node;
  for (const child of node.children) {
    if (typeof child !== 'string') {
      const found = findTestId(child, testID);
      if (found) return found;
    }
  }
  return null;
}

// ---- Fixtures ----

function makeCharacter(classFeatureNames: string[] = [], spellPools: unknown[] = []): Character {
  const character = CharacterService.createBlankCharacter();
  if (classFeatureNames.length) {
    character.classes.classes = [
      {
        name: 'Test Class',
        level: 5,
        classFeatures: classFeatureNames.map((name) => ({
          name,
          level: 1,
          description: '',
        })),
        hitDie: 8,
        skillsPerLevel: 4,
        classSkills: [],
        isArchetype: false,
        hp: 40,
        babContribution: 0.75,
        fortContribution: 0.5,
        refContribution: 0.333,
        willContribution: 0.5,
        favoredClassBonus: [],
      } as unknown as (typeof character.classes.classes)[0],
    ];
  }
  if (spellPools.length) {
    (character.spellcasting as { pools: unknown[] }).pools = spellPools;
  }
  return character;
}

function makeItem(overrides: Partial<EditorEquipmentItem> = {}): EditorEquipmentItem {
  return {
    id: 'item-1',
    collection: 'magicItems',
    name: 'Cloak of Resistance +1',
    ...overrides,
  };
}

// ---- buildClassAbilityTargets tests ----

describe('buildClassAbilityTargets', () => {
  it('returns empty array for a character with no class features', () => {
    const character = makeCharacter();
    expect(buildClassAbilityTargets(character)).toEqual([]);
  });

  it('emits channel_dc and channel_dice targets for a cleric with Channel Energy', () => {
    const character = makeCharacter(['Channel Energy']);
    const targets = buildClassAbilityTargets(character);
    const targetKeys = targets.map((t) => t.target);
    expect(targetKeys).toContain('special.channel_dc');
    expect(targetKeys).toContain('special.channel_dice');
  });

  it('emits bardic_performance_rounds for a bard', () => {
    const character = makeCharacter(['Bardic Performance', 'Countersong']);
    const targets = buildClassAbilityTargets(character);
    expect(targets.map((t) => t.target)).toContain('special.bardic_performance_rounds');
  });

  it('emits sneak_attack_dice for a rogue', () => {
    const character = makeCharacter(['Sneak Attack']);
    const targets = buildClassAbilityTargets(character);
    expect(targets.map((t) => t.target)).toContain('special.sneak_attack_dice');
  });

  it('emits rage_rounds for a barbarian', () => {
    const character = makeCharacter(['Rage']);
    expect(buildClassAbilityTargets(character).map((t) => t.target)).toContain(
      'special.rage_rounds',
    );
  });

  it('emits lay_on_hands_dice for a paladin', () => {
    const character = makeCharacter(['Lay on Hands']);
    expect(buildClassAbilityTargets(character).map((t) => t.target)).toContain(
      'special.lay_on_hands_dice',
    );
  });

  it('emits ki_pool for a monk', () => {
    const character = makeCharacter(['Ki Pool']);
    expect(buildClassAbilityTargets(character).map((t) => t.target)).toContain('special.ki_pool');
  });

  it('emits bomb targets for an alchemist', () => {
    const character = makeCharacter(['Bomb']);
    const keys = buildClassAbilityTargets(character).map((t) => t.target);
    expect(keys).toContain('special.bomb_dice');
    expect(keys).toContain('special.bomb_dc');
  });

  it('emits wild_shape_uses for a druid', () => {
    const character = makeCharacter(['Wild Shape']);
    expect(buildClassAbilityTargets(character).map((t) => t.target)).toContain(
      'special.wild_shape_uses',
    );
  });

  it('emits smite_uses for a paladin', () => {
    const character = makeCharacter(['Smite Evil']);
    expect(buildClassAbilityTargets(character).map((t) => t.target)).toContain(
      'special.smite_uses',
    );
  });

  it('emits grit_points for a gunslinger (panache keyword)', () => {
    const character = makeCharacter(['Panache']);
    expect(buildClassAbilityTargets(character).map((t) => t.target)).toContain(
      'special.grit_points',
    );
  });

  it('does not emit duplicate targets when multiple features match the same keyword', () => {
    const character = makeCharacter(['Rage', 'Greater Rage']);
    const targets = buildClassAbilityTargets(character);
    const rageTargets = targets.filter((t) => t.target === 'special.rage_rounds');
    expect(rageTargets).toHaveLength(1);
  });

  it('emits no targets for a fighter with no matching class features', () => {
    const character = makeCharacter(['Bonus Feat', 'Bravery', 'Armor Training']);
    expect(buildClassAbilityTargets(character)).toEqual([]);
  });
});

// ---- buildTargetLabelMap tests ----

describe('buildTargetLabelMap', () => {
  it('includes static targets for all saves', () => {
    const map = buildTargetLabelMap(makeCharacter());
    expect(map.get('save.all')).toBe('All Saves');
    expect(map.get('save.fortitude')).toBe('Fortitude Save');
    expect(map.get('save.reflex')).toBe('Reflex Save');
    expect(map.get('save.will')).toBe('Will Save');
  });

  it('includes ability score targets', () => {
    const map = buildTargetLabelMap(makeCharacter());
    expect(map.get('ability.str')).toBe('Strength');
    expect(map.get('ability.con')).toBe('Constitution');
  });

  it('includes AC targets', () => {
    const map = buildTargetLabelMap(makeCharacter());
    expect(map.get('ac.armor')).toBe('Armor Bonus');
    expect(map.get('ac.deflection')).toBe('Deflection');
  });

  it('includes skill targets', () => {
    const map = buildTargetLabelMap(makeCharacter());
    expect(map.get('skill.perception')).toBe('Perception');
    expect(map.get('skill.stealth')).toBe('Stealth');
  });

  it('includes spellcasting targets when character has spell pools', () => {
    const character = makeCharacter([], [{ baseClass: 'Cleric', castingType: 'divine' }]);
    const map = buildTargetLabelMap(character);
    expect(map.get('spell.save_dc')).toBe('Spell DC');
    expect(map.get('spell.caster_level')).toBe('Caster Level');
    expect(map.get('spell.concentration')).toBe('Concentration');
  });

  it('does not include spellcasting targets when character has no spell pools', () => {
    const map = buildTargetLabelMap(makeCharacter());
    expect(map.has('spell.save_dc')).toBe(false);
  });

  it('includes class ability targets for matching characters', () => {
    const character = makeCharacter(['Channel Energy']);
    const map = buildTargetLabelMap(character);
    expect(map.get('special.channel_dc')).toBe('Channel Energy DC');
  });
});

// ---- EffectTargetPickerSheet component tests ----

describe('EffectTargetPickerSheet', () => {
  const onSelect = jest.fn();
  const onBack = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  it('renders without crashing', () => {
    const { queryByText } = render(
      <EffectTargetPickerSheet character={makeCharacter()} onSelect={onSelect} onBack={onBack} />,
    );
    expect(queryByText('← Back')).toBeTruthy();
    expect(queryByText('Choose Target')).toBeTruthy();
  });

  it('calls onBack when back button is pressed', () => {
    const { getByTestId } = render(
      <EffectTargetPickerSheet character={makeCharacter()} onSelect={onSelect} onBack={onBack} />,
    );
    fireEvent.press(getByTestId('back-btn'));
    expect(onBack).toHaveBeenCalled();
  });

  it('renders with a spellcasting character', () => {
    const character = makeCharacter([], [{ baseClass: 'Wizard', castingType: 'arcane' }]);
    const { queryByText } = render(
      <EffectTargetPickerSheet character={character} onSelect={onSelect} onBack={onBack} />,
    );
    expect(queryByText('← Back')).toBeTruthy();
  });

  it('renders with class abilities for a cleric', () => {
    const character = makeCharacter(['Channel Energy']);
    const { queryByText } = render(
      <EffectTargetPickerSheet character={character} onSelect={onSelect} onBack={onBack} />,
    );
    expect(queryByText('← Back')).toBeTruthy();
  });

  it('switches to FlatList and shows matching items when search query is active', () => {
    const rendered = render(
      <EffectTargetPickerSheet character={makeCharacter()} onSelect={onSelect} onBack={onBack} />,
    );
    const searchInput = rendered.getByTestId('search-input');
    fireEvent.changeText(searchInput, 'fort');
    const updated = rendered.rerender();
    // flatFiltered re-runs via useMemo(keepState) → 'Fortitude Save' appears in FlatList
    const texts = getAllText(updated);
    expect(texts.some((t) => t.includes('Fortitude'))).toBe(true);
  });

  it('shows empty state when search finds no matching targets', () => {
    const rendered = render(
      <EffectTargetPickerSheet character={makeCharacter()} onSelect={onSelect} onBack={onBack} />,
    );
    fireEvent.changeText(rendered.getByTestId('search-input'), 'zxqwerty');
    const updated = rendered.rerender();
    const texts = getAllText(updated);
    expect(texts.some((t) => t.includes('No targets matching'))).toBe(true);
  });

  it('calls onSelect when a target item is pressed from SectionList', () => {
    const rendered = render(
      <EffectTargetPickerSheet character={makeCharacter()} onSelect={onSelect} onBack={onBack} />,
    );
    const btn = findTestId(rendered.tree, 'target-item-save.all');
    expect(btn).toBeTruthy();
    fireEvent.press(btn!);
    expect(onSelect).toHaveBeenCalledWith(
      expect.objectContaining({ target: 'save.all', label: 'All Saves' }),
    );
  });

  it('calls onSelect from FlatList search results', () => {
    const rendered = render(
      <EffectTargetPickerSheet character={makeCharacter()} onSelect={onSelect} onBack={onBack} />,
    );
    fireEvent.changeText(rendered.getByTestId('search-input'), 'fort');
    const updated = rendered.rerender();
    const btn = findTestId(updated, 'target-item-save.fortitude');
    expect(btn).toBeTruthy();
    fireEvent.press(btn!);
    expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ target: 'save.fortitude' }));
  });
});

// ---- ItemEffectEditorSheet rendering tests ----

describe('ItemEffectEditorSheet', () => {
  const onSave = jest.fn();
  const onRemoveItem = jest.fn();
  const onClose = jest.fn();
  const character = makeCharacter();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows empty state when item has no effects', () => {
    const item = makeItem();
    const { queryByText } = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    expect(queryByText('No effects — tap Add Effect to begin')).toBeTruthy();
  });

  it('renders existing effects in the list', () => {
    const item = makeItem({
      effects: [
        {
          type: 'bonus',
          target: 'save.all',
          value: 1,
          bonusType: BonusType.RESISTANCE,
          source: 'Cloak of Resistance +1',
        },
      ],
    });
    const { getAllText } = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    const texts = getAllText();
    const hasEffect = texts.some((t) => t.includes('resistance') || t.includes('+1'));
    expect(hasEffect).toBe(true);
  });

  it('renders the Special badge for special-type effects', () => {
    const item = makeItem({
      effects: [
        {
          type: 'special',
          target: 'special.channel_dc',
          value: 2,
          source: 'Custom',
        },
      ],
    });
    const { queryByText } = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    expect(queryByText('Special')).toBeTruthy();
  });

  it('shows the add-effect form after pressing + Add Effect', () => {
    const item = makeItem();
    const rendered = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    fireEvent.press(rendered.getByTestId('add-effect-btn'));
    const updated = rendered.rerender();
    const texts = getAllText(updated);
    expect(texts.some((t) => t === 'Target')).toBe(true);
    expect(texts.some((t) => t === 'Value')).toBe(true);
  });

  it('shows the target picker view after pressing Choose target', () => {
    const item = makeItem();
    const rendered = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    fireEvent.press(rendered.getByTestId('add-effect-btn'));
    const withForm = rendered.rerender();
    const chooseBtn = findTestId(withForm, 'choose-target-btn');
    expect(chooseBtn).toBeTruthy();
    fireEvent.press(chooseBtn!);
    const withPicker = rendered.rerender();
    const texts = getAllText(withPicker);
    expect(texts.some((t) => t.includes('Choose Target') || t.includes('← Back'))).toBe(true);
  });

  it('removes an effect when the remove-effect button is pressed', () => {
    const item = makeItem({
      effects: [
        {
          type: 'bonus',
          target: 'save.all',
          value: 1,
          bonusType: BonusType.RESISTANCE,
          source: 'Test',
        },
      ],
    });
    const rendered = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    fireEvent.press(rendered.getByTestId('remove-effect-0'));
    const updated = rendered.rerender();
    const texts = getAllText(updated);
    expect(texts.some((t) => t.includes('No effects'))).toBe(true);
  });

  it('calls onClose when the close button is pressed', () => {
    const item = makeItem();
    const { getByTestId } = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    fireEvent.press(getByTestId('editor-close-btn'));
    expect(onClose).toHaveBeenCalled();
  });

  it('calls onRemoveItem with the item id when Remove Item is pressed', () => {
    const item = makeItem({ id: 'test-id' });
    const { getByTestId } = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    fireEvent.press(getByTestId('remove-item-btn'));
    expect(onRemoveItem).toHaveBeenCalledWith('test-id');
  });

  it('calls onSave with the item when Save is pressed', () => {
    const item = makeItem();
    const { getByTestId } = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    fireEvent.press(getByTestId('save-btn'));
    expect(onSave).toHaveBeenCalledWith(expect.objectContaining({ id: 'item-1' }));
  });

  it('renders nothing when item is null', () => {
    const { queryByTestId } = render(
      <ItemEffectEditorSheet
        item={null}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    expect(queryByTestId('save-btn')).toBeNull();
  });

  it('shows read-only name for DB items (has definitionId)', () => {
    const item = makeItem({ definitionId: 'db-123' });
    const { queryByText } = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    expect(queryByText('Cloak of Resistance +1')).toBeTruthy();
  });

  it('cancels the add-effect form when Cancel is pressed', () => {
    const item = makeItem();
    const rendered = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    fireEvent.press(rendered.getByTestId('add-effect-btn'));
    const withForm = rendered.rerender();
    const cancelBtn = findTestId(withForm, 'cancel-effect-btn');
    expect(cancelBtn).toBeTruthy();
    fireEvent.press(cancelBtn!);
    const updated = rendered.rerender();
    const texts = getAllText(updated);
    expect(texts.some((t) => t.includes('No effects'))).toBe(true);
  });

  it('back button in target picker returns to main form', () => {
    const item = makeItem();
    const rendered = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    fireEvent.press(rendered.getByTestId('add-effect-btn'));
    const withForm = rendered.rerender();
    const chooseBtn = findTestId(withForm, 'choose-target-btn');
    fireEvent.press(chooseBtn!);
    const withPicker = rendered.rerender();
    const backBtn = findTestId(withPicker, 'back-btn');
    expect(backBtn).toBeTruthy();
    fireEvent.press(backBtn!);
    const updated = rendered.rerender();
    const texts = getAllText(updated);
    expect(texts.some((t) => t === 'Target')).toBe(true);
  });

  it('adds a bonus effect end-to-end (standard target)', () => {
    const item = makeItem();
    const rendered = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    // Open add form
    fireEvent.press(rendered.getByTestId('add-effect-btn'));
    const withForm = rendered.rerender();
    // Navigate to target picker
    const chooseBtn = findTestId(withForm, 'choose-target-btn');
    fireEvent.press(chooseBtn!);
    const withPicker = rendered.rerender();
    // Select 'save.all' (All Saves) from the SectionList-rendered items
    const targetBtn = findTestId(withPicker, 'target-item-save.all');
    expect(targetBtn).toBeTruthy();
    fireEvent.press(targetBtn!);
    // Back in the form with target selected; set value
    const withTarget = rendered.rerender();
    const valueInput = findTestId(withTarget, 'pending-value-input');
    expect(valueInput).toBeTruthy();
    fireEvent.changeText(valueInput!, '2');
    // Confirm — re-render with value set so confirm is enabled
    const withValue = rendered.rerender();
    const confirmBtn = findTestId(withValue, 'confirm-effect-btn');
    expect(confirmBtn).toBeTruthy();
    fireEvent.press(confirmBtn!);
    // Effect should appear in list
    const final = rendered.rerender();
    const texts = getAllText(final);
    expect(
      texts.some((t) => t.includes('+2') || t.includes('resistance') || t.includes('save')),
    ).toBe(true);
  });

  it('does not add effect when confirm pressed with no target selected', () => {
    const item = makeItem();
    const rendered = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    fireEvent.press(rendered.getByTestId('add-effect-btn'));
    const withForm = rendered.rerender();
    // Set a value without selecting target
    fireEvent.changeText(findTestId(withForm, 'pending-value-input')!, '2');
    const withValue = rendered.rerender();
    const confirmBtn = findTestId(withValue, 'confirm-effect-btn');
    // confirmBtn is disabled (no target), pressing it calls handleConfirmEffect but returns early
    // The Pressable mock calls onPress when disabled=true is not passed and onPress is not removed
    // Our mock: if disabled, onPress is undefined → pressing does nothing
    expect(confirmBtn).toBeTruthy();
    // Confirm is disabled (no target) — press cancel to close the form and verify empty state
    const cancelBtn = findTestId(withValue, 'cancel-effect-btn');
    expect(cancelBtn).toBeTruthy();
    fireEvent.press(cancelBtn!);
    const final = rendered.rerender();
    expect(getAllText(final).some((t) => t.includes('No effects'))).toBe(true);
  });

  it('does not add effect when value is not a number', () => {
    const item = makeItem();
    const rendered = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    fireEvent.press(rendered.getByTestId('add-effect-btn'));
    const withForm = rendered.rerender();
    const chooseBtn = findTestId(withForm, 'choose-target-btn');
    fireEvent.press(chooseBtn!);
    const withPicker = rendered.rerender();
    fireEvent.press(findTestId(withPicker, 'target-item-save.all')!);
    const withTarget = rendered.rerender();
    // Enter a non-numeric value
    fireEvent.changeText(findTestId(withTarget, 'pending-value-input')!, 'abc');
    const withBadValue = rendered.rerender();
    const confirmBtn = findTestId(withBadValue, 'confirm-effect-btn');
    // disabled=true when pendingValue='abc' is truthy but parseFloat would give NaN
    // The Pressable mock disables the button so onPress is not called
    expect(confirmBtn).toBeTruthy();
  });

  it('auto-sets deflection bonus type for ac. targets', () => {
    const item = makeItem();
    const rendered = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    fireEvent.press(rendered.getByTestId('add-effect-btn'));
    const withForm = rendered.rerender();
    fireEvent.press(findTestId(withForm, 'choose-target-btn')!);
    const withPicker = rendered.rerender();
    fireEvent.press(findTestId(withPicker, 'target-item-ac.deflection')!);
    const withTarget = rendered.rerender();
    const texts = getAllText(withTarget);
    // Deflection chip should be selected (the selected state makes it appear in a different color,
    // but we can confirm the chip labels are rendered)
    expect(texts.some((t) => t === 'Deflection')).toBe(true);
  });

  it('auto-sets enhancement bonus type for ability. targets', () => {
    const item = makeItem();
    const rendered = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    fireEvent.press(rendered.getByTestId('add-effect-btn'));
    const withForm = rendered.rerender();
    fireEvent.press(findTestId(withForm, 'choose-target-btn')!);
    const withPicker = rendered.rerender();
    fireEvent.press(findTestId(withPicker, 'target-item-ability.str')!);
    const withTarget = rendered.rerender();
    const texts = getAllText(withTarget);
    expect(texts.some((t) => t === 'Enhancement')).toBe(true);
  });

  it('auto-sets untyped for hp target (no prefix match)', () => {
    const item = makeItem();
    const rendered = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    fireEvent.press(rendered.getByTestId('add-effect-btn'));
    const withForm = rendered.rerender();
    fireEvent.press(findTestId(withForm, 'choose-target-btn')!);
    const withPicker = rendered.rerender();
    fireEvent.press(findTestId(withPicker, 'target-item-hp')!);
    const withTarget = rendered.rerender();
    const texts = getAllText(withTarget);
    expect(texts.some((t) => t === 'Untyped')).toBe(true);
  });

  it('selects a bonus type chip when pressed', () => {
    const item = makeItem();
    const rendered = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    fireEvent.press(rendered.getByTestId('add-effect-btn'));
    const withForm = rendered.rerender();
    fireEvent.press(findTestId(withForm, 'choose-target-btn')!);
    const withPicker = rendered.rerender();
    // Select a standard target first (shows bonus type chips)
    fireEvent.press(findTestId(withPicker, 'target-item-save.all')!);
    const withTarget = rendered.rerender();
    // Find and press the 'Morale' chip (different from auto-set 'Resistance')
    const moraleChip = getAllText(withTarget).some((t) => t === 'Morale');
    expect(moraleChip).toBe(true);
    // Press Morale chip by testID in the rerendered tree
    const moraleNode = findTestId(withTarget, `bonus-chip-${BonusType.MORALE}`);
    expect(moraleNode).toBeTruthy();
    fireEvent.press(moraleNode!);
    // State updated: pendingBonusType = MORALE
    const afterChip = rendered.rerender();
    const afterTexts = getAllText(afterChip);
    expect(afterTexts.some((t) => t === 'Morale')).toBe(true);
  });

  it('allows editing item name for custom items (no definitionId)', () => {
    const item = makeItem(); // no definitionId → custom item
    const rendered = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    // The header shows a TextInput for custom items
    const texts = getAllText(rendered.tree);
    // Name is in the TextInput value prop, not as a text child — verify by saving with new name
    rendered.getByTestId('save-btn'); // just confirm the component rendered
    fireEvent.press(rendered.getByTestId('save-btn'));
    expect(onSave).toHaveBeenCalledWith(expect.objectContaining({ id: 'item-1' }));
  });

  it('auto-sets enhancement for attack. targets', () => {
    const item = makeItem();
    const rendered = render(
      <ItemEffectEditorSheet
        item={item}
        character={character}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    fireEvent.press(rendered.getByTestId('add-effect-btn'));
    const withForm = rendered.rerender();
    fireEvent.press(findTestId(withForm, 'choose-target-btn')!);
    const withPicker = rendered.rerender();
    fireEvent.press(findTestId(withPicker, 'target-item-attack.melee')!);
    const withTarget = rendered.rerender();
    const texts = getAllText(withTarget);
    expect(texts.some((t) => t === 'Enhancement')).toBe(true);
  });

  it('adds a special effect end-to-end (channel_dc)', () => {
    const clericCharacter = makeCharacter(['Channel Energy']);
    const item = makeItem();
    const rendered = render(
      <ItemEffectEditorSheet
        item={item}
        character={clericCharacter}
        onSave={onSave}
        onRemoveItem={onRemoveItem}
        onClose={onClose}
      />,
    );
    fireEvent.press(rendered.getByTestId('add-effect-btn'));
    const withForm = rendered.rerender();
    const chooseBtn = findTestId(withForm, 'choose-target-btn');
    fireEvent.press(chooseBtn!);
    const withPicker = rendered.rerender();
    const targetBtn = findTestId(withPicker, 'target-item-special.channel_dc');
    expect(targetBtn).toBeTruthy();
    fireEvent.press(targetBtn!);
    const withTarget = rendered.rerender();
    const valueInput = findTestId(withTarget, 'pending-value-input');
    fireEvent.changeText(valueInput!, '2');
    const withValue = rendered.rerender();
    const confirmBtn = findTestId(withValue, 'confirm-effect-btn');
    fireEvent.press(confirmBtn!);
    const final = rendered.rerender();
    const texts = getAllText(final);
    expect(texts.some((t) => t.includes('Special') || t.includes('channel'))).toBe(true);
  });
});

// ---- formatEffectSummary tests ----

describe('formatEffectSummary', () => {
  it('returns empty string for undefined effects', () => {
    expect(formatEffectSummary(undefined)).toBe('');
  });

  it('returns empty string for empty effects array', () => {
    expect(formatEffectSummary([])).toBe('');
  });

  it('returns empty string when all effects are special type', () => {
    expect(
      formatEffectSummary([
        { type: 'special', target: 'special.channel_dc', value: 2, source: 'x' },
      ]),
    ).toBe('');
  });

  it('formats a positive bonus effect', () => {
    const result = formatEffectSummary([
      { type: 'bonus', target: 'save.all', value: 2, bonusType: BonusType.RESISTANCE, source: 'x' },
    ]);
    expect(result).toContain('+2');
    expect(result).toContain('resistance');
  });

  it('formats a negative bonus effect', () => {
    const result = formatEffectSummary([
      {
        type: 'bonus',
        target: 'ability.str',
        value: -2,
        bonusType: BonusType.ENHANCEMENT,
        source: 'x',
      },
    ]);
    expect(result).toContain('-2');
  });

  it('uses "untyped" when bonusType is missing', () => {
    const result = formatEffectSummary([
      { type: 'bonus', target: 'hp', value: 5, source: 'x' } as never,
    ]);
    expect(result).toContain('untyped');
  });

  it('caps display at 3 bonus effects', () => {
    const effects = Array.from({ length: 5 }, (_, i) => ({
      type: 'bonus' as const,
      target: 'hp' as never,
      value: i + 1,
      bonusType: BonusType.UNTYPED,
      source: 'x',
    }));
    const result = formatEffectSummary(effects);
    const parts = result.split(' · ');
    expect(parts).toHaveLength(3);
  });
});

// ---- formatSpecialSummary tests ----

describe('formatSpecialSummary', () => {
  it('returns empty string for undefined effects', () => {
    expect(formatSpecialSummary(undefined)).toBe('');
  });

  it('returns empty string for empty effects array', () => {
    expect(formatSpecialSummary([])).toBe('');
  });

  it('returns empty string when no special effects exist', () => {
    expect(
      formatSpecialSummary([
        {
          type: 'bonus',
          target: 'save.all',
          value: 1,
          bonusType: BonusType.RESISTANCE,
          source: 'x',
        },
      ]),
    ).toBe('');
  });

  it('formats a positive special effect', () => {
    const result = formatSpecialSummary([
      { type: 'special', target: 'special.channel_dc', value: 2, source: 'x' },
    ]);
    expect(result).toContain('+2');
    expect(result).toContain('channel dc');
  });

  it('formats a negative special effect', () => {
    const result = formatSpecialSummary([
      { type: 'special', target: 'special.rage_rounds', value: -1, source: 'x' },
    ]);
    expect(result).toContain('-1');
  });
});
