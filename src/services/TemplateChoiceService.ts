import type { TemplateDefinition } from '@/data/templates/types';
import type {
  AppliedTemplate,
  FlatFeature,
  TemplateChoice,
  TemplateFeature,
} from '@/types/templates';

// Stable derived id for a feature injected by a template choice resolution.
// Encodes both template and choice so it survives re-selections correctly.
function derivedFeatureId(templateId: string, choiceId: string): string {
  return `${templateId}__choice__${choiceId}`;
}

export interface ResolveTemplateChoiceResult {
  newTemplateChoices: TemplateChoice[] | undefined;
  newFeatures: TemplateFeature[] | undefined;
}

/**
 * Pure function: resolves one sub-choice on a template.
 *
 * Handles:
 * - First resolution (insert + inject snapshot)
 * - Re-selection to a different option (remove prior injected feature, inject new)
 * - Same-option re-selection (idempotent)
 * - Option without grantsFeature (stores choice, no feature injected)
 * - Template with no choices (returns input unchanged)
 */
export function resolveTemplateChoice(
  templateDefinition: TemplateDefinition,
  currentAppliedTemplate: AppliedTemplate,
  choiceId: string,
  newSelectionId: string,
): ResolveTemplateChoiceResult {
  // Preserve original references so the reducer's reference-equality guard fires correctly on
  // no-op paths (undefined !== [] would break the guard if we eagerly coalesced here).
  const existingChoices = currentAppliedTemplate.templateChoices;
  const existingFeatures = currentAppliedTemplate.features;

  if (!templateDefinition.choices || templateDefinition.choices.length === 0) {
    return { newTemplateChoices: existingChoices, newFeatures: existingFeatures };
  }

  const choiceDef = templateDefinition.choices.find((c) => c.id === choiceId);
  if (!choiceDef) {
    return { newTemplateChoices: existingChoices, newFeatures: existingFeatures };
  }

  const choiceList = existingChoices ?? [];
  const prior = choiceList.find((c) => c.choiceId === choiceId);

  // Idempotent: same option already selected
  if (prior?.selection === newSelectionId) {
    return { newTemplateChoices: existingChoices, newFeatures: existingFeatures };
  }

  // Update the choices list
  const otherChoices = choiceList.filter((c) => c.choiceId !== choiceId);
  const newTemplateChoices: TemplateChoice[] = [
    ...otherChoices,
    { choiceId, selection: newSelectionId },
  ];

  // Remove any previously injected feature for this choice slot
  const featureSlotId = derivedFeatureId(templateDefinition.id, choiceId);
  const featureList = existingFeatures ?? [];
  const featuresWithoutPrior = featureList.filter(
    (f) => !('id' in f) || f.id !== featureSlotId,
  );

  // Find the selected option across all option groups
  const selectedOption = choiceDef.optionGroups
    ?.flatMap((g) => g.options)
    .find((o) => o.id === newSelectionId);

  if (!selectedOption?.grantsFeature) {
    return { newTemplateChoices, newFeatures: featuresWithoutPrior };
  }

  // Only inject the feature into the features array when it has activationMode or
  // resourcePool — matching the contract stated on AppliedTemplate.features.
  // If neither is present, still record the choice but skip the feature injection.
  const { grantsFeature } = selectedOption;
  if (grantsFeature.activationMode == null && grantsFeature.resourcePool == null) {
    return { newTemplateChoices, newFeatures: featuresWithoutPrior };
  }

  // Inject the feature snapshot with the stable derived id.
  // sourceFeatureId preserves the original id from the template data so callers
  // can cross-reference back to the source definition after the slot id replaces it.
  const injectedFeature: FlatFeature = {
    ...grantsFeature,
    id: featureSlotId,
    sourceFeatureId: selectedOption.grantsFeature.id,
  };

  return { newTemplateChoices, newFeatures: [...featuresWithoutPrior, injectedFeature] };
}
