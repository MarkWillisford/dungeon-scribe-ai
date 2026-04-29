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
      const recalculated = ModifierPipelineService.recalculate(character);
      if (recalculated !== character) {
        store.dispatch({ type: 'characterEntry/applyComputedStats', payload: recalculated });
      }
    }
  }

  return result;
};
