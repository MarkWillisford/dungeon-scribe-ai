import { resolveTemplateChoice } from '@/services/TemplateChoiceService';
import type { TemplateDefinition, TemplateChoiceDefinition } from '@/data/templates/types';
import type { AppliedTemplate } from '@/types/templates';

// ---- Fixtures ----

const ASTRAL_DEVA_FEATURE = {
  id: 'stunning-strike',
  scalingType: 'flat' as const,
  name: 'Stunning Strike 5/day',
  description: 'Fort or stunned 1d6 rounds.',
  shortDescription: 'Stun; Fort or stunned 1d6 rounds',
  activationMode: 'action' as const,
  resourcePool: {
    id: 'stunning_strike_uses',
    name: 'Stunning Strike',
    rechargeOn: 'rest' as const,
    maxFormula: '5',
    restRecoveryMode: 'full' as const,
  },
};

const BRALANI_FEATURE = {
  id: 'wind-wall',
  scalingType: 'flat' as const,
  name: 'Wind Wall at will',
  description: 'Wind Wall spell-like ability usable at will.',
  activationMode: 'toggle' as const,
};

const CELESTIAL_CHOICE: TemplateChoiceDefinition = {
  id: 'celestial-type',
  label: 'Celestial Type',
  optionSource: 'inline',
  optionGroups: [
    {
      id: 'celestial-types',
      name: '',
      options: [
        {
          id: 'astral-deva',
          name: 'Astral Deva',
          description: 'Grants Stunning Strike 5/day',
          grantsFeature: ASTRAL_DEVA_FEATURE,
        },
        {
          id: 'bralani',
          name: 'Bralani',
          description: 'Grants Wind Wall at will',
          grantsFeature: BRALANI_FEATURE,
        },
        {
          id: 'leonal',
          name: 'Leonal',
          description: 'Grants Pounce (Ex)',
          // no grantsFeature — passive, not a toggle/resource
        },
      ],
    },
  ],
};

function makeTemplateDef(overrides: Partial<TemplateDefinition> = {}): TemplateDefinition {
  return {
    id: 'celestial-blessed-creature',
    name: 'Celestial-Blessed Creature',
    description: 'A blessed celestial creature.',
    crAdjustment: 1,
    acquisitionType: 'acquired',
    isSimpleTemplate: false,
    features: [],
    sourceInfo: { type: 'third_party', publisher: 'Test', publication: 'Test' },
    visibility: 'global',
    rev: 1,
    verificationStatus: 'needs_review',
    choices: [CELESTIAL_CHOICE],
    ...overrides,
  } as TemplateDefinition;
}

function makeApplied(overrides: Partial<AppliedTemplate> = {}): AppliedTemplate {
  return {
    id: 'applied-1',
    templateId: 'celestial-blessed-creature',
    name: 'Celestial-Blessed Creature',
    appliedAs: 'cr',
    cr: 1,
    acquisitionType: 'acquired',
    paidTiers: [],
    sourceId: 'templates',
    sourceRev: 1,
    ...overrides,
  };
}

const DERIVED_FEATURE_ID = 'celestial-blessed-creature__choice__celestial-type';

// ---- Tests ----

describe('resolveTemplateChoice', () => {
  it('first resolution: inserts choice and injects feature', () => {
    const def = makeTemplateDef();
    const applied = makeApplied();
    const result = resolveTemplateChoice(def, applied, 'celestial-type', 'astral-deva');

    expect(result.newTemplateChoices).toEqual([
      { choiceId: 'celestial-type', selection: 'astral-deva' },
    ]);
    expect(result.newFeatures).toHaveLength(1);
    expect(result.newFeatures[0]).toMatchObject({
      id: DERIVED_FEATURE_ID,
      scalingType: 'flat',
      name: 'Stunning Strike 5/day',
    });
  });

  it('same-option re-selection is idempotent', () => {
    const def = makeTemplateDef();
    const applied = makeApplied({
      templateChoices: [{ choiceId: 'celestial-type', selection: 'astral-deva' }],
      features: [{ ...ASTRAL_DEVA_FEATURE, id: DERIVED_FEATURE_ID }],
    });
    const result = resolveTemplateChoice(def, applied, 'celestial-type', 'astral-deva');

    expect(result.newTemplateChoices).toEqual([
      { choiceId: 'celestial-type', selection: 'astral-deva' },
    ]);
    expect(result.newFeatures).toHaveLength(1);
    expect(result.newFeatures[0]).toMatchObject({ id: DERIVED_FEATURE_ID });
  });

  it('re-selection to different option: removes old injected feature, injects new one', () => {
    const def = makeTemplateDef();
    const applied = makeApplied({
      templateChoices: [{ choiceId: 'celestial-type', selection: 'astral-deva' }],
      features: [{ ...ASTRAL_DEVA_FEATURE, id: DERIVED_FEATURE_ID }],
    });
    const result = resolveTemplateChoice(def, applied, 'celestial-type', 'bralani');

    expect(result.newTemplateChoices).toEqual([
      { choiceId: 'celestial-type', selection: 'bralani' },
    ]);
    expect(result.newFeatures).toHaveLength(1);
    expect(result.newFeatures[0]).toMatchObject({
      id: DERIVED_FEATURE_ID,
      name: 'Wind Wall at will',
    });
  });

  it('no grantsFeature: stores choice but injects no feature', () => {
    const def = makeTemplateDef();
    const applied = makeApplied();
    const result = resolveTemplateChoice(def, applied, 'celestial-type', 'leonal');

    expect(result.newTemplateChoices).toEqual([
      { choiceId: 'celestial-type', selection: 'leonal' },
    ]);
    expect(result.newFeatures).toHaveLength(0);
  });

  it('template with no choices returns input unchanged', () => {
    const def = makeTemplateDef({ choices: undefined });
    const applied = makeApplied({
      templateChoices: [{ choiceId: 'other', selection: 'x' }],
      features: [],
    });
    const result = resolveTemplateChoice(def, applied, 'celestial-type', 'astral-deva');

    expect(result.newTemplateChoices).toEqual(applied.templateChoices);
    expect(result.newFeatures).toEqual(applied.features);
  });

  it('preserves other choices when resolving one', () => {
    const choiceDef2: TemplateChoiceDefinition = {
      id: 'other-choice',
      label: 'Other',
      optionSource: 'inline',
      optionGroups: [
        { id: 'g1', name: '', options: [{ id: 'opt-a', name: 'Option A', description: '' }] },
      ],
    };
    const def = makeTemplateDef({ choices: [CELESTIAL_CHOICE, choiceDef2] });
    const applied = makeApplied({
      templateChoices: [{ choiceId: 'other-choice', selection: 'opt-a' }],
    });
    const result = resolveTemplateChoice(def, applied, 'celestial-type', 'astral-deva');

    expect(result.newTemplateChoices).toHaveLength(2);
    expect(result.newTemplateChoices).toContainEqual({
      choiceId: 'other-choice',
      selection: 'opt-a',
    });
    expect(result.newTemplateChoices).toContainEqual({
      choiceId: 'celestial-type',
      selection: 'astral-deva',
    });
  });

  it('preserves non-choice features when injecting', () => {
    const def = makeTemplateDef();
    const existingFeature = {
      scalingType: 'flat' as const,
      name: 'Sacredness',
      description: 'Extra damage.',
      id: 'sacredness',
      activationMode: 'passive' as const,
    };
    const applied = makeApplied({ features: [existingFeature] });
    const result = resolveTemplateChoice(def, applied, 'celestial-type', 'astral-deva');

    expect(result.newFeatures).toHaveLength(2);
    expect(result.newFeatures).toContainEqual(existingFeature);
  });
});
