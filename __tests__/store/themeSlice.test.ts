import themeReducer, { toggleTheme, setThemeMode, setContext } from '@store/slices/themeSlice';

describe('themeSlice', () => {
  const initialState = {
    mode: 'dark' as const,
    context: 'default' as const,
  };

  it('should return the initial state', () => {
    expect(themeReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('toggleTheme', () => {
    it('should toggle from dark to light', () => {
      const state = themeReducer(initialState, toggleTheme());
      expect(state.mode).toBe('light');
    });

    it('should toggle from light to dark', () => {
      const lightState = { ...initialState, mode: 'light' as const };
      const state = themeReducer(lightState, toggleTheme());
      expect(state.mode).toBe('dark');
    });

    it('should not affect context when toggling', () => {
      const stateWithContext = { mode: 'dark' as const, context: 'combat' as const };
      const state = themeReducer(stateWithContext, toggleTheme());
      expect(state.context).toBe('combat');
    });
  });

  describe('setThemeMode', () => {
    it('should set mode to light', () => {
      const state = themeReducer(initialState, setThemeMode('light'));
      expect(state.mode).toBe('light');
    });

    it('should set mode to dark', () => {
      const lightState = { ...initialState, mode: 'light' as const };
      const state = themeReducer(lightState, setThemeMode('dark'));
      expect(state.mode).toBe('dark');
    });
  });

  describe('setContext', () => {
    it('should set context to combat', () => {
      const state = themeReducer(initialState, setContext('combat'));
      expect(state.context).toBe('combat');
    });

    it('should set context to tavern', () => {
      const state = themeReducer(initialState, setContext('tavern'));
      expect(state.context).toBe('tavern');
    });

    it('should set context to adventure', () => {
      const state = themeReducer(initialState, setContext('adventure'));
      expect(state.context).toBe('adventure');
    });

    it('should set context to manager', () => {
      const state = themeReducer(initialState, setContext('manager'));
      expect(state.context).toBe('manager');
    });

    it('should set context back to default', () => {
      const combatState = { ...initialState, context: 'combat' as const };
      const state = themeReducer(combatState, setContext('default'));
      expect(state.context).toBe('default');
    });

    it('should not affect mode when setting context', () => {
      const state = themeReducer(initialState, setContext('combat'));
      expect(state.mode).toBe('dark');
    });
  });
});
