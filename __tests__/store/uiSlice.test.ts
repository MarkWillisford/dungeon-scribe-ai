import uiReducer, {
  setLoading,
  openModal,
  closeModal,
  addToast,
  removeToast,
  clearToasts,
} from '@store/slices/uiSlice';

describe('uiSlice', () => {
  const initialState = {
    isLoading: false,
    activeModal: null,
    toasts: [] as { id: string; message: string; type: 'success' | 'error' | 'warning' | 'info' }[],
  };

  it('should return the initial state', () => {
    expect(uiReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('setLoading', () => {
    it('should set loading to true', () => {
      const state = uiReducer(initialState, setLoading(true));
      expect(state.isLoading).toBe(true);
    });

    it('should set loading to false', () => {
      const loadingState = { ...initialState, isLoading: true };
      const state = uiReducer(loadingState, setLoading(false));
      expect(state.isLoading).toBe(false);
    });
  });

  describe('openModal / closeModal', () => {
    it('should open a modal by name', () => {
      const state = uiReducer(initialState, openModal('characterCreate'));
      expect(state.activeModal).toBe('characterCreate');
    });

    it('should close the active modal', () => {
      const modalState = { ...initialState, activeModal: 'characterCreate' };
      const state = uiReducer(modalState, closeModal());
      expect(state.activeModal).toBeNull();
    });

    it('should replace active modal when opening a new one', () => {
      const modalState = { ...initialState, activeModal: 'characterCreate' };
      const state = uiReducer(modalState, openModal('settings'));
      expect(state.activeModal).toBe('settings');
    });
  });

  describe('addToast', () => {
    it('should add a success toast', () => {
      const state = uiReducer(
        initialState,
        addToast({ message: 'Character saved!', type: 'success' }),
      );
      expect(state.toasts).toHaveLength(1);
      expect(state.toasts[0].message).toBe('Character saved!');
      expect(state.toasts[0].type).toBe('success');
      expect(state.toasts[0].id).toBeDefined();
    });

    it('should add an error toast', () => {
      const state = uiReducer(initialState, addToast({ message: 'Failed to save', type: 'error' }));
      expect(state.toasts[0].type).toBe('error');
    });

    it('should stack multiple toasts', () => {
      let state = uiReducer(initialState, addToast({ message: 'First', type: 'info' }));
      state = uiReducer(state, addToast({ message: 'Second', type: 'warning' }));
      expect(state.toasts).toHaveLength(2);
      expect(state.toasts[0].message).toBe('First');
      expect(state.toasts[1].message).toBe('Second');
    });
  });

  describe('removeToast', () => {
    it('should remove a specific toast by id', () => {
      const stateWithToasts = {
        ...initialState,
        toasts: [
          { id: '1', message: 'First', type: 'info' as const },
          { id: '2', message: 'Second', type: 'error' as const },
        ],
      };
      const state = uiReducer(stateWithToasts, removeToast('1'));
      expect(state.toasts).toHaveLength(1);
      expect(state.toasts[0].id).toBe('2');
    });

    it('should not change state when removing non-existent toast', () => {
      const stateWithToast = {
        ...initialState,
        toasts: [{ id: '1', message: 'Test', type: 'info' as const }],
      };
      const state = uiReducer(stateWithToast, removeToast('999'));
      expect(state.toasts).toHaveLength(1);
    });
  });

  describe('clearToasts', () => {
    it('should remove all toasts', () => {
      const stateWithToasts = {
        ...initialState,
        toasts: [
          { id: '1', message: 'First', type: 'info' as const },
          { id: '2', message: 'Second', type: 'error' as const },
        ],
      };
      const state = uiReducer(stateWithToasts, clearToasts());
      expect(state.toasts).toHaveLength(0);
    });

    it('should handle clearing already empty toasts', () => {
      const state = uiReducer(initialState, clearToasts());
      expect(state.toasts).toHaveLength(0);
    });
  });
});
