import { PATH_OF_WAR_TRAITS } from '@/data/traits/pathOfWar';
import { ALL_TRAITS, getTraitById, getTraitsBySource } from '@/data/traits';
import { ALL_DISCIPLINES } from '@/data/disciplines';

describe('Path of War traits seed data integrity', () => {
  test('seeds all four Path of War: Expanded traits', () => {
    expect(PATH_OF_WAR_TRAITS.map((t) => t.id).sort()).toEqual([
      'agile_dancer',
      'combat_training',
      'practiced_initiator',
      'unorthodox_method',
    ]);
  });

  test('every entry is wired into ALL_TRAITS', () => {
    for (const trait of PATH_OF_WAR_TRAITS) {
      expect(getTraitById(trait.id)).toBeDefined();
    }
  });

  test('no id collides with an existing trait', () => {
    const ids = ALL_TRAITS.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  test('all four share the repo source string', () => {
    expect(getTraitsBySource('Path of War: Expanded')).toHaveLength(PATH_OF_WAR_TRAITS.length);
  });

  test('every entry is flagged for review and carries a non-empty effect', () => {
    for (const trait of PATH_OF_WAR_TRAITS) {
      expect(trait.verificationStatus).toBe('needs_review');
      expect(trait.effects.length).toBeGreaterThan(0);
      expect(trait.description.length).toBeGreaterThan(0);
      expect(trait.shortDescription?.length).toBeGreaterThan(0);
    }
  });

  test('categories match the published trait types', () => {
    expect(getTraitById('agile_dancer')?.category).toBe('social');
    expect(getTraitById('combat_training')?.category).toBe('combat');
    expect(getTraitById('practiced_initiator')?.category).toBe('combat');
    expect(getTraitById('unorthodox_method')?.category).toBe('regional');
  });

  test('practiced_initiator is the only entry resolving to a numeric bonus', () => {
    const numeric = PATH_OF_WAR_TRAITS.filter((t) => t.effects.some((e) => e.type === 'bonus'));
    expect(numeric.map((t) => t.id)).toEqual(['practiced_initiator']);

    const effect = getTraitById('practiced_initiator')?.effects[0];
    expect(effect?.value).toBe(2);
    expect(effect?.bonusType).toBe('trait');
    expect(effect?.condition?.params.cappedAt).toBe('character_hit_dice');
  });

  test('combat_training grants a maneuver without granting discipline access', () => {
    const effect = getTraitById('combat_training')?.effects[0];
    expect(effect?.target).toBe('initiating.granted_maneuver');
    expect(effect?.condition?.params.addsDisciplineAccess).toBe(false);
    expect(effect?.condition?.params.exchangeableOnLevelUp).toBe(false);
    expect(effect?.condition?.params.maneuverLevel).toBe(1);
  });

  test('unorthodox_method swaps one discipline for one and grants a class skill', () => {
    const trait = getTraitById('unorthodox_method');
    expect(trait?.effects[0].condition?.params).toMatchObject({
      removes: 1,
      grants: 1,
      grantsClassSkill: true,
    });
    expect(trait?.choices?.some((c) => c.type === 'class_skill')).toBe(true);
  });

  test('agile_dancer expresses both substitutions as special effects', () => {
    // Neither half of this trait is a numeric bonus, so nothing downstream
    // would notice if the target or params drifted.
    const trait = getTraitById('agile_dancer');
    expect(trait?.effects).toHaveLength(2);
    expect(trait?.effects.every((e) => e.type === 'special')).toBe(true);

    const skillSwap = trait?.effects.find((e) => e.target === 'skill.acrobatics');
    expect(skillSwap?.condition?.params).toMatchObject({
      substituteSkill: 'perform (dance)',
      forSkill: 'acrobatics',
    });

    const abilitySwap = trait?.effects.find((e) => e.target === 'skill.perform_dance');
    expect(abilitySwap?.condition?.params.useHigherOf).toBe('DEX,CHA');
  });

  test('unorthodox_method names both sides of the discipline swap', () => {
    const trait = getTraitById('unorthodox_method');
    expect(trait?.effects[0].target).toBe('initiating.discipline_swap');

    const templates = trait?.choices?.map((c) => c.effectTargetTemplate ?? '') ?? [];
    expect(templates.some((t) => t.includes('removed_discipline'))).toBe(true);
    expect(templates.some((t) => t.includes('bonus_discipline'))).toBe(true);
    expect(trait?.choices?.some((c) => c.type === 'class_skill')).toBe(true);
  });

  test('traits requiring a player choice declare one', () => {
    for (const id of ['combat_training', 'practiced_initiator', 'unorthodox_method']) {
      expect(getTraitById(id)?.choices?.length).toBeGreaterThan(0);
    }
  });

  test('discipline-choosing traits have disciplines available to choose from', () => {
    // The pickers resolve options at runtime from the disciplines collection
    // rather than from a hardcoded list, so the guard is that it is populated.
    expect(ALL_DISCIPLINES.length).toBeGreaterThan(0);
  });
});
