import type { FlawDefinition, CharacterFlaw, CharacterFlaws } from '@/types/flaws';
import type { OptionalRules, ValidationSettings } from '@/types/ruleset';
import { BonusType } from '@/types/base';
import { PRESET_PF1E_STANDARD, PRESET_PF1E_SOCIETY, PRESET_GO_NUTS } from '@config/rulesetPresets';

describe('FlawDefinition type shape', () => {
  it('accepts a valid FlawDefinition object', () => {
    const flaw: FlawDefinition = {
      id: 'flaw-frail',
      name: 'Frail',
      description: 'You are physically weak and sickly.',
      source: '3.5e',
      effects: [
        {
          type: 'penalty',
          bonusType: BonusType.UNTYPED,
          target: 'ability.con',
          value: -2,
          source: 'Frail',
        },
      ],
    };
    expect(flaw.id).toBe('flaw-frail');
    expect(flaw.effects).toHaveLength(1);
  });
});

describe('CharacterFlaw type shape', () => {
  it('accepts a valid CharacterFlaw object', () => {
    const characterFlaw: CharacterFlaw = {
      flawId: 'flaw-frail',
      name: 'Frail',
    };
    expect(characterFlaw.flawId).toBe('flaw-frail');
    expect(characterFlaw.name).toBe('Frail');
  });
});

describe('CharacterFlaws container shape', () => {
  it('accepts a valid CharacterFlaws object', () => {
    const container: CharacterFlaws = {
      flaws: [{ flawId: 'flaw-frail', name: 'Frail' }],
      maxFlaws: 2,
    };
    expect(container.flaws).toHaveLength(1);
    expect(container.maxFlaws).toBe(2);
  });

  it('accepts an empty flaws array', () => {
    const container: CharacterFlaws = {
      flaws: [],
      maxFlaws: 2,
    };
    expect(container.flaws).toHaveLength(0);
  });
});

describe('OptionalRules.flaws field', () => {
  it('compiles with flaws boolean field present', () => {
    const rules: OptionalRules = {
      heroPoints: false,
      gestalt: false,
      fractionalBABSaves: false,
      variantMulticlassing: false,
      eitrMode: 'off',
      relaxedEntry: false,
      mythic: false,
      pathOfWarMechanics: false,
      tomeOfBattleMechanics: false,
      crTemplates: true,
      laTemplates: true,
      crRefunds: false,
      laBuyback: false,
      crLaAbilityScoreReductions: true,
      flaws: false,
    };
    expect(rules.flaws).toBe(false);
  });
});

describe('ValidationSettings.maxFlaws field', () => {
  it('compiles with maxFlaws number field present', () => {
    const settings: ValidationSettings = {
      abilityScoreMethod: 'point-buy',
      pointBuyBudget: 20,
      maxTraits: 2,
      maxFlaws: 2,
    };
    expect(settings.maxFlaws).toBe(2);
  });
});

describe('Ruleset presets include flaw defaults', () => {
  it('PRESET_PF1E_STANDARD has flaws: false and maxFlaws: 2', () => {
    expect(PRESET_PF1E_STANDARD.optionalRules.flaws).toBe(false);
    expect(PRESET_PF1E_STANDARD.validationSettings.maxFlaws).toBe(2);
  });

  it('PRESET_PF1E_SOCIETY has flaws: false and maxFlaws: 2', () => {
    expect(PRESET_PF1E_SOCIETY.optionalRules.flaws).toBe(false);
    expect(PRESET_PF1E_SOCIETY.validationSettings.maxFlaws).toBe(2);
  });

  it('PRESET_GO_NUTS has flaws: true and maxFlaws: 99', () => {
    expect(PRESET_GO_NUTS.optionalRules.flaws).toBe(true);
    expect(PRESET_GO_NUTS.validationSettings.maxFlaws).toBe(99);
  });
});
