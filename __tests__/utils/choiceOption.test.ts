import type { ChoiceOption, ChoiceOptionGroup } from '../../src/types/choiceOption';
import type { ClassChoiceOption, ClassChoiceOptionGroup } from '../../src/types/classChoices';

// These are compile-time type tests. If they compile, the assertions hold.
// Jest runs them as no-ops at runtime.

describe('ChoiceOption shared primitives', () => {
  it('ChoiceOption accepts the required fields', () => {
    const opt: ChoiceOption = {
      id: 'test',
      name: 'Test',
      description: 'A test option',
    };
    expect(opt.id).toBe('test');
  });

  it('ChoiceOption accepts optional fields', () => {
    const opt: ChoiceOption = {
      id: 'test',
      name: 'Test',
      description: 'A test option',
      prerequisites: [],
      subtypePrompt: { label: 'Choose', options: ['a', 'b'] },
    };
    expect(opt.subtypePrompt?.label).toBe('Choose');
  });

  it('ChoiceOptionGroup accepts required fields with generic type', () => {
    const group: ChoiceOptionGroup<ChoiceOption> = {
      id: 'group-1',
      name: 'Group One',
      options: [{ id: 'opt-1', name: 'Option 1', description: 'desc' }],
    };
    expect(group.id).toBe('group-1');
  });

  it('ChoiceOptionGroup allows the ungrouped sentinel name', () => {
    const group: ChoiceOptionGroup<ChoiceOption> = {
      id: 'ungrouped',
      name: '',
      options: [],
    };
    expect(group.name).toBe('');
  });

  it('ClassChoiceOption is assignable to ChoiceOption', () => {
    const classOpt: ClassChoiceOption = {
      id: 'familiar',
      name: 'Familiar',
      description: 'A magical familiar',
    };
    const base: ChoiceOption = classOpt;
    expect(base.id).toBe('familiar');
  });

  it('ClassChoiceOptionGroup is assignable to ChoiceOptionGroup<ClassChoiceOption>', () => {
    const classGroup: ClassChoiceOptionGroup = {
      id: 'bond-type',
      name: 'Arcane Bond',
      options: [{ id: 'familiar', name: 'Familiar', description: 'desc' }],
    };
    const base: ChoiceOptionGroup<ClassChoiceOption> = classGroup;
    expect(base.id).toBe('bond-type');
  });

  it('ClassChoiceOption preserves grantsFeature field', () => {
    const opt: ClassChoiceOption = {
      id: 'fast-movement',
      name: 'Fast Movement',
      description: 'Move faster',
      grantsFeature: { name: 'Fast Movement', description: 'Move faster', level: 1 },
    };
    expect(opt.grantsFeature?.name).toBe('Fast Movement');
  });

  it('ClassChoiceOptionGroup preserves minClassLevel field', () => {
    const group: ClassChoiceOptionGroup = {
      id: 'advanced-talents',
      name: 'Advanced Talents',
      minClassLevel: 10,
      options: [],
    };
    expect(group.minClassLevel).toBe(10);
  });
});
