import React from 'react';
import { render, fireEvent, type RenderedNode } from '../../helpers/testUtils';
import {
  buildClassAbilityTargets,
  buildTargetLabelMap,
  EffectTargetPickerSheet,
} from '@/components/character/direct-entry/EffectTargetPickerSheet';
import { ItemEffectEditorSheet } from '@/components/character/direct-entry/ItemEffectEditorSheet';
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
});
