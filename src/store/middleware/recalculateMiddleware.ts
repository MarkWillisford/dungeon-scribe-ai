import type { Middleware } from '@reduxjs/toolkit';
import { ModifierPipelineService } from '@/services/ModifierPipelineService';

// Actions that do NOT touch stat-relevant data — skip the pipeline for these.
// CRITICAL: 'characterEntry/applyComputedStats' must be in this set to prevent
// an infinite dispatch loop.
const RECALC_EXCLUDED_ACTIONS = new Set([
  'characterEntry/setActiveTab',
  'characterEntry/setName',
  'characterEntry/setPlayer',
  'characterEntry/setHair',
  'characterEntry/setEyes',
  'characterEntry/setSkin',
  'characterEntry/setGender',
  'characterEntry/setHeight',
  'characterEntry/setWeight',
  'characterEntry/setAge',
  'characterEntry/setBackground',
  'characterEntry/setPortrait',
  'characterEntry/setNotes',
  'characterEntry/setValidationWarnings',
  'characterEntry/acknowledgeWarning',
  'characterEntry/clearValidation',
  'characterEntry/setSaving',
  'characterEntry/setSaveError',
  'characterEntry/applyComputedStats',
  'characterEntry/loadCharacter',
  'characterEntry/resetDraft',
  'characterEntry/markDirty',
  'characterEntry/save/pending',
  'characterEntry/save/fulfilled',
  'characterEntry/save/rejected',
]);

export const recalculateMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (
    typeof (action as { type?: string }).type === 'string' &&
    (action as { type: string }).type.startsWith('characterEntry/') &&
    !RECALC_EXCLUDED_ACTIONS.has((action as { type: string }).type)
  ) {
    const character = store.getState().characterEntry.character;
    if (character) {
      try {
        const recalculated = ModifierPipelineService.recalculate(character);
        if (recalculated !== character) {
          store.dispatch({ type: 'characterEntry/applyComputedStats', payload: recalculated });
        }
      } catch (err) {
        // A throw here would propagate out of dispatch and take the calling
        // screen's handler down with it — the same failure mode that stranded
        // the guided flow's "Creating..." button (#356). Keep the last good
        // derived stats and let the user carry on editing; the entry is still
        // saveable, it is only the computed layer that is stale.
        console.error(
          '[recalculateMiddleware] recalculation failed, keeping previous derived stats:',
          err,
        );
      }
    }
  }

  return result;
};
