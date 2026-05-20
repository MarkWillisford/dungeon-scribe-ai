import { ModifierPipelineService } from '@/services/ModifierPipelineService';
import { setActiveCharacter } from '../slices/charactersSlice';
import { endTurnDecrement, startTurnApply } from '../slices/combatSlice';
import type { AppDispatch, RootState } from '../store';

export const endTurn = () => (dispatch: AppDispatch, getState: () => RootState) => {
  dispatch(endTurnDecrement());

  const character = getState().characters.activeCharacter;
  if (!character) return;

  const updatedConditions = character.conditions.activeConditions
    .map((condition) => {
      if (!condition.duration) return condition;
      return {
        ...condition,
        duration: { ...condition.duration, remaining: condition.duration.remaining - 1 },
      };
    })
    .filter((condition) => !condition.duration || condition.duration.remaining > 0);

  const updatedCharacter = {
    ...character,
    conditions: { ...character.conditions, activeConditions: updatedConditions },
  };

  const recalculated = ModifierPipelineService.recalculate(updatedCharacter);
  dispatch(setActiveCharacter(recalculated));
};

export const startTurn = () => (dispatch: AppDispatch, getState: () => RootState) => {
  dispatch(startTurnApply());

  const _character = getState().characters.activeCharacter;
  // Start-of-turn effects: bleed, regeneration — stubs for future implementation
};
