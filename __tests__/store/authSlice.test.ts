import authReducer, { setUser, clearError } from '@store/slices/authSlice';
import type { AppUser } from '@/types/auth';

const mockUser: AppUser = {
  uid: 'test-uid-123',
  email: 'test@example.com',
  displayName: 'Test User',
  photoURL: null,
  createdAt: new Date('2025-01-01'),
  lastLogin: new Date('2025-06-01'),
  campaigns: ['campaign-1'],
  role: 'player',
};

describe('authSlice', () => {
  const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  };

  it('should return the initial state', () => {
    expect(authReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('setUser', () => {
    it('should set user and mark as authenticated', () => {
      const state = authReducer(initialState, setUser(mockUser));
      expect(state.user).toEqual(mockUser);
      expect(state.isAuthenticated).toBe(true);
    });

    it('should clear user and mark as unauthenticated', () => {
      const authenticatedState = {
        ...initialState,
        user: mockUser,
        isAuthenticated: true,
      };
      const state = authReducer(authenticatedState, setUser(null));
      expect(state.user).toBeNull();
      expect(state.isAuthenticated).toBe(false);
    });
  });

  describe('clearError', () => {
    it('should clear the error', () => {
      const errorState = { ...initialState, error: 'Something went wrong' };
      const state = authReducer(errorState, clearError());
      expect(state.error).toBeNull();
    });

    it('should not affect other state when clearing error', () => {
      const stateWithError = {
        user: mockUser,
        isAuthenticated: true,
        loading: false,
        error: 'Some error',
      };
      const state = authReducer(stateWithError, clearError());
      expect(state.user).toEqual(mockUser);
      expect(state.isAuthenticated).toBe(true);
      expect(state.error).toBeNull();
    });
  });

  describe('async thunk reducers', () => {
    it('should set loading on login pending', () => {
      const state = authReducer(initialState, { type: 'auth/login/pending' });
      expect(state.loading).toBe(true);
      expect(state.error).toBeNull();
    });

    it('should clear loading and set error on login rejected', () => {
      const loadingState = { ...initialState, loading: true };
      const state = authReducer(loadingState, {
        type: 'auth/login/rejected',
        payload: 'Invalid credentials',
      });
      expect(state.loading).toBe(false);
      expect(state.error).toBe('Invalid credentials');
    });

    it('should set user on login fulfilled', () => {
      const loadingState = { ...initialState, loading: true };
      const state = authReducer(loadingState, {
        type: 'auth/login/fulfilled',
        payload: mockUser,
      });
      expect(state.loading).toBe(false);
      expect(state.user).toEqual(mockUser);
      expect(state.isAuthenticated).toBe(true);
    });

    it('should set loading on signup pending', () => {
      const state = authReducer(initialState, { type: 'auth/signup/pending' });
      expect(state.loading).toBe(true);
    });

    it('should set user on signup fulfilled', () => {
      const loadingState = { ...initialState, loading: true };
      const state = authReducer(loadingState, {
        type: 'auth/signup/fulfilled',
        payload: mockUser,
      });
      expect(state.user).toEqual(mockUser);
      expect(state.isAuthenticated).toBe(true);
    });

    it('should set loading on googleLogin pending', () => {
      const state = authReducer(initialState, { type: 'auth/googleLogin/pending' });
      expect(state.loading).toBe(true);
    });

    it('should set user on googleLogin fulfilled', () => {
      const loadingState = { ...initialState, loading: true };
      const state = authReducer(loadingState, {
        type: 'auth/googleLogin/fulfilled',
        payload: mockUser,
      });
      expect(state.user).toEqual(mockUser);
      expect(state.isAuthenticated).toBe(true);
    });

    it('should clear user on logout fulfilled', () => {
      const authenticatedState = {
        user: mockUser,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
      const state = authReducer(authenticatedState, { type: 'auth/logout/fulfilled' });
      expect(state.user).toBeNull();
      expect(state.isAuthenticated).toBe(false);
    });

    it('should set error on logout rejected', () => {
      const authenticatedState = {
        user: mockUser,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
      const state = authReducer(authenticatedState, {
        type: 'auth/logout/rejected',
        payload: 'Network error',
      });
      expect(state.error).toBe('Network error');
    });

    it('should set loading on resetPassword pending', () => {
      const state = authReducer(initialState, { type: 'auth/resetPassword/pending' });
      expect(state.loading).toBe(true);
    });

    it('should clear loading on resetPassword fulfilled', () => {
      const loadingState = { ...initialState, loading: true };
      const state = authReducer(loadingState, { type: 'auth/resetPassword/fulfilled' });
      expect(state.loading).toBe(false);
    });

    it('should set error on resetPassword rejected', () => {
      const loadingState = { ...initialState, loading: true };
      const state = authReducer(loadingState, {
        type: 'auth/resetPassword/rejected',
        payload: 'User not found',
      });
      expect(state.loading).toBe(false);
      expect(state.error).toBe('User not found');
    });
  });
});
