import { recalculateMiddleware } from '@/store/middleware/recalculateMiddleware';
import { ModifierPipelineService } from '@/services/ModifierPipelineService';
import type { Character } from '@/types';

jest.mock('@/services/ModifierPipelineService');

const mockRecalculate = ModifierPipelineService.recalculate as jest.Mock;

function makeStore(character: Character | null) {
  return {
    getState: () => ({ characterEntry: { character } }),
    dispatch: jest.fn(),
  };
}

function makeChain(store: ReturnType<typeof makeStore>) {
  const next = jest.fn();
  const dispatch = recalculateMiddleware(store as never)(next);
  return { next, dispatch, store };
}

const mockCharacter = { info: { name: 'Test' } } as unknown as Character;
const recalculatedCharacter = { info: { name: 'Recalculated' } } as unknown as Character;

beforeEach(() => {
  jest.clearAllMocks();
  mockRecalculate.mockReturnValue(recalculatedCharacter);
});

describe('recalculateMiddleware', () => {
  it('calls next and returns result for all actions', () => {
    const store = makeStore(mockCharacter);
    const { next, dispatch } = makeChain(store);
    next.mockReturnValue('result');

    const result = dispatch({ type: 'characterEntry/setRace', payload: {} });
    expect(next).toHaveBeenCalledWith({ type: 'characterEntry/setRace', payload: {} });
    expect(result).toBe('result');
  });

  it('dispatches applyComputedStats after a stat-relevant characterEntry action', () => {
    const store = makeStore(mockCharacter);
    const { dispatch } = makeChain(store);

    dispatch({ type: 'characterEntry/setRace', payload: {} });

    expect(mockRecalculate).toHaveBeenCalledWith(mockCharacter);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'characterEntry/applyComputedStats',
      payload: recalculatedCharacter,
    });
  });

  it('does not dispatch applyComputedStats when recalculate returns same reference', () => {
    mockRecalculate.mockReturnValue(mockCharacter);
    const store = makeStore(mockCharacter);
    const { dispatch } = makeChain(store);

    dispatch({ type: 'characterEntry/setRace', payload: {} });

    expect(store.dispatch).not.toHaveBeenCalled();
  });

  it.each([
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
    'characterEntry/applyComputedStats',
  ])('skips pipeline for excluded action: %s', (type) => {
    const store = makeStore(mockCharacter);
    const { dispatch } = makeChain(store);

    dispatch({ type });

    expect(mockRecalculate).not.toHaveBeenCalled();
    expect(store.dispatch).not.toHaveBeenCalled();
  });

  it('skips pipeline for non-characterEntry actions', () => {
    const store = makeStore(mockCharacter);
    const { dispatch } = makeChain(store);

    dispatch({ type: 'characters/fetchCharacters/fulfilled' });

    expect(mockRecalculate).not.toHaveBeenCalled();
  });

  it('skips pipeline when character is null', () => {
    const store = makeStore(null);
    const { dispatch } = makeChain(store);

    dispatch({ type: 'characterEntry/setRace', payload: {} });

    expect(mockRecalculate).not.toHaveBeenCalled();
  });

  describe('when the pipeline throws', () => {
    let consoleError: jest.SpyInstance;

    beforeEach(() => {
      consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
      mockRecalculate.mockImplementation(() => {
        throw new Error('modifier pipeline exploded');
      });
    });

    afterEach(() => consoleError.mockRestore());

    it('does not let the throw escape dispatch', () => {
      // An escaping throw takes down the calling screen's handler, which is how
      // the guided flow's "Creating..." button ended up permanently stuck (#356).
      const store = makeStore(mockCharacter);
      const { dispatch } = makeChain(store);

      expect(() => dispatch({ type: 'characterEntry/setRace', payload: {} })).not.toThrow();
    });

    it('keeps the previous derived stats rather than dispatching a partial update', () => {
      const store = makeStore(mockCharacter);
      const { dispatch } = makeChain(store);

      dispatch({ type: 'characterEntry/setRace', payload: {} });

      expect(store.dispatch).not.toHaveBeenCalled();
    });

    it('reports the failure so the cause is not silent', () => {
      const store = makeStore(mockCharacter);
      const { dispatch } = makeChain(store);

      dispatch({ type: 'characterEntry/setRace', payload: {} });

      expect(consoleError).toHaveBeenCalled();
    });

    it('still passes the action down the chain', () => {
      const store = makeStore(mockCharacter);
      const { next, dispatch } = makeChain(store);
      next.mockReturnValue('result');

      expect(dispatch({ type: 'characterEntry/setRace', payload: {} })).toBe('result');
      expect(next).toHaveBeenCalled();
    });
  });
});
