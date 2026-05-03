import React from 'react';
import { render, fireEvent } from '../../helpers/testUtils';
import { buildClassAbilityTargets } from '@/components/character/direct-entry/EffectTargetPickerSheet';
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

// ---- Fixtures ----

function makeCharacter(classFeatureNames: string[] = []): Character {
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
        archetypeName: undefined,
        hp: 40,
        babContribution: 0.75,
        fortContribution: 0.5,
        refContribution: 0.333,
        willContribution: 0.5,
        favoredClassBonus: [],
      } as unknown as (typeof character.classes.classes)[0],
    ];
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
});
