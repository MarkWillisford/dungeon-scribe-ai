import { ModifierPipelineService } from '@/services/ModifierPipelineService';
import { setActiveCharacter } from '../slices/charactersSlice';
import { setSessionConditions } from '../slices/combatSlice';
import type { AppDispatch, RootState } from '../store';
import { PF1E_CONDITIONS } from '@/data/conditions/pf1eConditions';

export const toggleCondition =
  (conditionName: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const character = getState().characters.activeCharacter;
    if (!character) return;

    const existing = character.conditions.activeConditions;
    const isActive = existing.some((c) => c.name === conditionName);

    let updatedConditions;
    if (isActive) {
      updatedConditions = existing.filter((c) => c.name !== conditionName);
    } else {
      const def = PF1E_CONDITIONS.find((c) => c.name === conditionName);
      if (!def) return;
      updatedConditions = [
        ...existing,
        { name: def.name, description: def.description, effects: def.effects },
      ];
    }

    const updatedCharacter = {
      ...character,
      conditions: { ...character.conditions, activeConditions: updatedConditions },
    };

    const recalculated = ModifierPipelineService.recalculate(updatedCharacter);
    dispatch(setActiveCharacter(recalculated));
    dispatch(setSessionConditions(recalculated.conditions.activeConditions));
  };

/**
 * Re-applies the session's stored conditions to the active character.
 * Call after any action that reloads the character from Firestore (fetchCharacter,
 * initFromSession) so toggled conditions survive a sheet reload or app restart.
 */
export const restoreSessionConditions =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    const sessionConditions = state.combat.activeConditions;
    if (sessionConditions.length === 0) return;

    const character = state.characters.activeCharacter;
    if (!character) return;

    const updatedCharacter = {
      ...character,
      conditions: { ...character.conditions, activeConditions: sessionConditions },
    };
    const recalculated = ModifierPipelineService.recalculate(updatedCharacter);
    dispatch(setActiveCharacter(recalculated));
  };
