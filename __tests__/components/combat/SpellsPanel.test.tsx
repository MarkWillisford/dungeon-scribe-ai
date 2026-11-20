import React from 'react';
import { render, type RenderedNode } from '../../helpers/testUtils';
import { SpellsPanel } from '@/components/combat/SpellsPanel';
import type { SpellcastingPool, PreparedSpell } from '@/types/spells';
import { preparedSpellKey } from '@/utils/spellUtils';

// ----------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------

function findByLabel(node: RenderedNode, label: string): RenderedNode | null {
  if (node.props?.accessibilityLabel === label) return node;
  for (const child of node.children ?? []) {
    if (typeof child !== 'string') {
      const found = findByLabel(child, label);
      if (found) return found;
    }
  }
  return null;
}

function makeBasePool(baseClass: string, total: number[]): SpellcastingPool {
  return {
    baseClass,
    castingType: 'arcane',
    spellAbility: 'INT',
    contributors: [],
    effectiveSpellcastingLevel: 5,
    baseCasterLevel: 5,
    clBonuses: [],
    spellsPerDay: {
      base: total,
      bonus: total.map(() => 0),
      misc: total.map(() => 0),
      total,
      used: total.map(() => 0),
    },
    spellDC: { base: 14, miscBonus: 0, byLevel: [] },
    spellFailure: 0,
    concentration: { abilityMod: 3, casterLevel: 5, misc: 0, total: 8 },
  };
}

function makePreparedSpell(
  name: string,
  className: string,
  level: number,
  prepared = 1,
): PreparedSpell {
  return {
    name,
    className,
    classLevels: { [className]: level },
    school: 'Evocation',
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    castingTime: '1 standard action',
    range: 'Medium',
    target: 'one creature',
    duration: 'instantaneous',
    savingThrow: 'Reflex half',
    spellResistance: 'Yes',
    description: 'Deals fire damage.',
    source: 'Core Rulebook',
    prepared,
    cast: 0,
  };
}

function makeProps(overrides: Partial<React.ComponentProps<typeof SpellsPanel>> = {}) {
  return {
    pools: [],
    preparedSpells: [],
    preparedSpellsCast: {},
    spellSlotsUsed: {},
    onCastPreparedSpell: jest.fn(),
    onUncastPreparedSpell: jest.fn(),
    onUseSpellSlot: jest.fn(),
    ...overrides,
  };
}

// ----------------------------------------------------------------
// Empty state
// ----------------------------------------------------------------

describe('SpellsPanel — no pools', () => {
  it('shows empty message when no pools', () => {
    const { getByText } = render(<SpellsPanel {...makeProps()} />);
    expect(getByText('No spellcasting pools for this character.')).toBeTruthy();
  });

  it('is findable by testID', () => {
    const { getByTestId } = render(<SpellsPanel {...makeProps()} testID="spells-panel" />);
    expect(getByTestId('spells-panel')).toBeTruthy();
  });
});

// ----------------------------------------------------------------
// Prepared caster view
// ----------------------------------------------------------------

describe('SpellsPanel — prepared caster (wizard)', () => {
  const wizardPool = makeBasePool('wizard', [4, 3, 2]);

  const preparedSpells: PreparedSpell[] = [
    makePreparedSpell('Magic Missile', 'wizard', 1),
    makePreparedSpell('Fireball', 'wizard', 3),
    makePreparedSpell('Mage Armor', 'wizard', 1),
  ];

  it('renders pool title', () => {
    const { getByText } = render(
      <SpellsPanel {...makeProps({ pools: [wizardPool], preparedSpells })} />,
    );
    expect(getByText('Wizard')).toBeTruthy();
  });

  it('renders all prepared spell names for the pool', () => {
    const { getByText } = render(
      <SpellsPanel {...makeProps({ pools: [wizardPool], preparedSpells })} />,
    );
    expect(getByText('Magic Missile')).toBeTruthy();
    expect(getByText('Fireball')).toBeTruthy();
    expect(getByText('Mage Armor')).toBeTruthy();
  });

  it('shows Cast button for uncast spells', () => {
    const { getAllText } = render(
      <SpellsPanel {...makeProps({ pools: [wizardPool], preparedSpells })} />,
    );
    // All 3 spells are uncast — there should be 3 "Cast" buttons
    const castCount = getAllText().filter((t) => t === 'Cast').length;
    expect(castCount).toBe(3);
  });

  it('shows Uncast button for a cast spell (castCount > 0)', () => {
    const castKey = preparedSpellKey(preparedSpells[1]); // Fireball
    const { getByText } = render(
      <SpellsPanel
        {...makeProps({
          pools: [wizardPool],
          preparedSpells,
          preparedSpellsCast: { [castKey]: 1 },
        })}
      />,
    );
    expect(getByText('Uncast')).toBeTruthy();
  });

  it('hides Cast button for a fully-cast spell (castCount >= prepared)', () => {
    const castKey = preparedSpellKey(preparedSpells[0]); // Magic Missile (prepared=1)
    const { getAllText } = render(
      <SpellsPanel
        {...makeProps({
          pools: [wizardPool],
          preparedSpells,
          preparedSpellsCast: { [castKey]: 1 },
        })}
      />,
    );
    // Magic Missile is fully cast — no Cast button for it; Fireball and Mage Armor still have Cast
    const castCount = getAllText().filter((t) => t === 'Cast').length;
    expect(castCount).toBe(2);
  });

  it('calls onCastPreparedSpell with stable key and maxCasts when Cast is pressed', () => {
    const onCast = jest.fn();
    const { tree } = render(
      <SpellsPanel
        {...makeProps({ pools: [wizardPool], preparedSpells, onCastPreparedSpell: onCast })}
      />,
    );
    const btn = findByLabel(tree, 'Cast Magic Missile');
    expect(btn).toBeTruthy();
    if (btn?.props?.onPress) btn.props.onPress();
    expect(onCast).toHaveBeenCalledWith('Magic Missile|1|wizard|', 1);
  });

  it('calls onUncastPreparedSpell with stable key when Uncast is pressed', () => {
    const onUncast = jest.fn();
    const castKey = preparedSpellKey(preparedSpells[0]); // Magic Missile
    const { tree } = render(
      <SpellsPanel
        {...makeProps({
          pools: [wizardPool],
          preparedSpells,
          preparedSpellsCast: { [castKey]: 1 },
          onUncastPreparedSpell: onUncast,
        })}
      />,
    );
    const btn = findByLabel(tree, 'Uncast Magic Missile');
    expect(btn).toBeTruthy();
    if (btn?.props?.onPress) btn.props.onPress();
    expect(onUncast).toHaveBeenCalledWith('Magic Missile|1|wizard|');
  });

  it('shows empty prepared message when pool has no matching spells', () => {
    const { getByText } = render(
      <SpellsPanel {...makeProps({ pools: [wizardPool], preparedSpells: [] })} />,
    );
    expect(getByText('No prepared spells.')).toBeTruthy();
  });

  it('cast mark follows the spell when list order changes', () => {
    // Start: [A, B, C], cast B at stable key
    const A = makePreparedSpell('Magic Missile', 'wizard', 1);
    const B = makePreparedSpell('Fireball', 'wizard', 3);
    const C = makePreparedSpell('Mage Armor', 'wizard', 1);
    const castKey = preparedSpellKey(B);

    // Simulate removing A — new list is [B, C]
    const reorderedSpells = [B, C];
    const { getAllText } = render(
      <SpellsPanel
        {...makeProps({
          pools: [wizardPool],
          preparedSpells: reorderedSpells,
          preparedSpellsCast: { [castKey]: 1 },
        })}
      />,
    );
    // B (Fireball) is still cast after reorder; C (Mage Armor) is not cast
    const uncastCount = getAllText().filter((t) => t === 'Uncast').length;
    const castCount = getAllText().filter((t) => t === 'Cast').length;
    expect(uncastCount).toBe(1); // only Fireball
    expect(castCount).toBe(1); // only Mage Armor

    // Confirm Fireball shows Uncast and Mage Armor shows Cast (not swapped)
    const { tree } = render(
      <SpellsPanel
        {...makeProps({
          pools: [wizardPool],
          preparedSpells: reorderedSpells,
          preparedSpellsCast: { [castKey]: 1 },
        })}
      />,
    );
    expect(findByLabel(tree, 'Uncast Fireball')).toBeTruthy();
    expect(findByLabel(tree, 'Cast Mage Armor')).toBeTruthy();
    // Confirm regression: without fix, Cast Fireball (index 0 of reordered list) would show
    // After fix: Cast Fireball is NOT present (Fireball is marked cast)
    expect(findByLabel(tree, 'Cast Fireball')).toBeNull();
  });
});

// ----------------------------------------------------------------
// Multi-prepared spell tracking
// ----------------------------------------------------------------

describe('SpellsPanel — multi-prepared spell', () => {
  const wizardPool = makeBasePool('wizard', [4, 3, 2]);
  const multiSpell = makePreparedSpell('Magic Missile', 'wizard', 1, 2);
  const spellKey = preparedSpellKey(multiSpell);

  it('shows cast count in meta text when partially cast', () => {
    const { getByText } = render(
      <SpellsPanel
        {...makeProps({
          pools: [wizardPool],
          preparedSpells: [multiSpell],
          preparedSpellsCast: { [spellKey]: 1 },
        })}
      />,
    );
    expect(getByText('(1/2 cast)')).toBeTruthy();
  });

  it('shows both Cast and Uncast buttons when partially cast', () => {
    const { getAllText } = render(
      <SpellsPanel
        {...makeProps({
          pools: [wizardPool],
          preparedSpells: [multiSpell],
          preparedSpellsCast: { [spellKey]: 1 },
        })}
      />,
    );
    expect(getAllText().filter((t) => t === 'Cast').length).toBe(1);
    expect(getAllText().filter((t) => t === 'Uncast').length).toBe(1);
  });

  it('shows only Uncast when all copies are cast', () => {
    const { getAllText } = render(
      <SpellsPanel
        {...makeProps({
          pools: [wizardPool],
          preparedSpells: [multiSpell],
          preparedSpellsCast: { [spellKey]: 2 },
        })}
      />,
    );
    expect(getAllText().filter((t) => t === 'Cast').length).toBe(0);
    expect(getAllText().filter((t) => t === 'Uncast').length).toBe(1);
  });

  it('shows only Cast when none are cast', () => {
    const { getAllText } = render(
      <SpellsPanel
        {...makeProps({
          pools: [wizardPool],
          preparedSpells: [multiSpell],
          preparedSpellsCast: {},
        })}
      />,
    );
    expect(getAllText().filter((t) => t === 'Cast').length).toBe(1);
    expect(getAllText().filter((t) => t === 'Uncast').length).toBe(0);
  });

  it('calls onCastPreparedSpell with correct maxCasts for multi-prepared', () => {
    const onCast = jest.fn();
    const { tree } = render(
      <SpellsPanel
        {...makeProps({
          pools: [wizardPool],
          preparedSpells: [multiSpell],
          onCastPreparedSpell: onCast,
        })}
      />,
    );
    const btn = findByLabel(tree, 'Cast Magic Missile');
    if (btn?.props?.onPress) btn.props.onPress();
    expect(onCast).toHaveBeenCalledWith(spellKey, 2);
  });
});

// ----------------------------------------------------------------
// Spontaneous caster view
// ----------------------------------------------------------------

describe('SpellsPanel — spontaneous caster (sorcerer)', () => {
  // total[0]=0 cantrips, total[1]=5, total[2]=3
  const sorcererPool = makeBasePool('sorcerer', [0, 5, 3]);

  it('renders pool title', () => {
    const { getByText } = render(<SpellsPanel {...makeProps({ pools: [sorcererPool] })} />);
    expect(getByText('Sorcerer')).toBeTruthy();
  });

  it('renders remaining/total slot counts for levels with slots', () => {
    const { getByText } = render(<SpellsPanel {...makeProps({ pools: [sorcererPool] })} />);
    expect(getByText('5/5')).toBeTruthy();
    expect(getByText('3/3')).toBeTruthy();
  });

  it('shows reduced remaining after using a slot', () => {
    const { getByText } = render(
      <SpellsPanel
        {...makeProps({
          pools: [sorcererPool],
          spellSlotsUsed: { sorcerer: [0, 2, 1] },
        })}
      />,
    );
    expect(getByText('3/5')).toBeTruthy();
    expect(getByText('2/3')).toBeTruthy();
  });

  it('calls onUseSpellSlot with correct pool key and level', () => {
    const onUse = jest.fn();
    const { tree } = render(
      <SpellsPanel {...makeProps({ pools: [sorcererPool], onUseSpellSlot: onUse })} />,
    );
    const btn = findByLabel(tree, 'Use level 1 spell slot');
    expect(btn).toBeTruthy();
    if (btn?.props?.onPress) btn.props.onPress();
    expect(onUse).toHaveBeenCalledWith('sorcerer', 1);
  });

  it('uses pool.id as key when id is present (not baseClass)', () => {
    const onUse = jest.fn();
    const poolWithId = { ...sorcererPool, id: 'sorcerer-pool-uuid' };
    const { tree } = render(
      <SpellsPanel {...makeProps({ pools: [poolWithId], onUseSpellSlot: onUse })} />,
    );
    const btn = findByLabel(tree, 'Use level 1 spell slot');
    expect(btn).toBeTruthy();
    if (btn?.props?.onPress) btn.props.onPress();
    expect(onUse).toHaveBeenCalledWith('sorcerer-pool-uuid', 1);
  });

  it('disables Use button when no slots remain', () => {
    const { tree } = render(
      <SpellsPanel
        {...makeProps({
          pools: [sorcererPool],
          spellSlotsUsed: { sorcerer: [0, 5, 0] }, // level 1 fully used
        })}
      />,
    );
    const btn = findByLabel(tree, 'Use level 1 spell slot');
    expect(btn).toBeTruthy();
    expect(btn?.props?.disabled).toBe(true);
  });

  it('shows empty slot message when all levels have 0 total slots', () => {
    const emptyPool = makeBasePool('sorcerer', [0, 0, 0]);
    const { getByText } = render(<SpellsPanel {...makeProps({ pools: [emptyPool] })} />);
    expect(getByText('No spell slots available.')).toBeTruthy();
  });

  it('never displays used above the current maximum when stored count exceeds total', () => {
    // used=6 for a pool with total=5 — remaining must display 0, not negative
    const { getByText } = render(
      <SpellsPanel
        {...makeProps({
          pools: [sorcererPool],
          spellSlotsUsed: { sorcerer: [0, 6, 0] }, // 6 used but total is 5
        })}
      />,
    );
    // Remaining = max(0, 5-5) = 0 after capping used to total
    expect(getByText('0/5')).toBeTruthy();
  });
});

// ----------------------------------------------------------------
// Multiple pools
// ----------------------------------------------------------------

describe('SpellsPanel — multiple pools', () => {
  it('renders sections for each pool', () => {
    const wizardPool = makeBasePool('wizard', [4, 3, 2]);
    const clericPool = makeBasePool('cleric', [3, 2, 1]);
    clericPool.castingType = 'divine';

    const { getByText } = render(
      <SpellsPanel
        {...makeProps({
          pools: [wizardPool, clericPool],
          preparedSpells: [makePreparedSpell('Cure Light Wounds', 'cleric', 1)],
        })}
      />,
    );
    expect(getByText('Wizard')).toBeTruthy();
    expect(getByText('Cleric')).toBeTruthy();
  });

  it('only shows prepared spells belonging to their respective pool', () => {
    const wizardPool = makeBasePool('wizard', [4, 3]);
    const clericPool = makeBasePool('cleric', [3, 2]);
    clericPool.castingType = 'divine';

    const preparedSpells: PreparedSpell[] = [
      makePreparedSpell('Magic Missile', 'wizard', 1),
      makePreparedSpell('Cure Light Wounds', 'cleric', 1),
    ];

    const { getByText } = render(
      <SpellsPanel {...makeProps({ pools: [wizardPool, clericPool], preparedSpells })} />,
    );
    expect(getByText('Magic Missile')).toBeTruthy();
    expect(getByText('Cure Light Wounds')).toBeTruthy();
  });
});
