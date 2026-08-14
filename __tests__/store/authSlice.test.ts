import { configureStore } from '@reduxjs/toolkit';
import authReducer, {
  login,
  signup,
  googleLogin,
  logout,
  resetPassword,
  setUser,
  setIsAdmin,
  setAuthInitialized,
  clearError,
} from '@store/slices/authSlice';
import type { AppUser } from '@/types/auth';
import { FirebaseAuthService } from '@/services/FirebaseAuthService';

jest.mock('@/services/FirebaseAuthService', () => ({
  FirebaseAuthService: {
    login: jest.fn(),
    signUp: jest.fn(),
    googleLogin: jest.fn(),
    logout: jest.fn(),
    resetPassword: jest.fn(),
  },
}));

function makeAuthStore() {
  return configureStore({ reducer: { auth: authReducer } });
}

const mockUser: AppUser = {
  uid: 'test-uid-123',
  email: 'test@example.com',
  displayName: 'Test User',
  photoURL: null,
  createdAt: '2025-01-01T00:00:00.000Z',
  lastLogin: '2025-06-01T00:00:00.000Z',
  campaigns: ['campaign-1'],
  role: 'player',
};

describe('authSlice', () => {
  const initialState = {
    user: null,
    isAuthenticated: false,
    isAdmin: false,
    authInitialized: false,
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

  describe('setIsAdmin', () => {
    it('should set isAdmin to true', () => {
      const state = authReducer(undefined, setIsAdmin(true));
      expect(state.isAdmin).toBe(true);
    });

    it('should set isAdmin to false', () => {
      const state = authReducer(
        { ...authReducer(undefined, { type: 'unknown' }), isAdmin: true },
        setIsAdmin(false),
      );
      expect(state.isAdmin).toBe(false);
    });
  });

  describe('setAuthInitialized', () => {
    it('should set authInitialized to true', () => {
      const state = authReducer(undefined, setAuthInitialized());
      expect(state.authInitialized).toBe(true);
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
        isAdmin: false,
        authInitialized: false,
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
        isAdmin: false,
        authInitialized: true,
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
        isAdmin: false,
        authInitialized: true,
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

    it('should set error on signup rejected', () => {
      const loadingState = { ...initialState, loading: true };
      const state = authReducer(loadingState, {
        type: 'auth/signup/rejected',
        payload: 'Email already in use',
      });
      expect(state.loading).toBe(false);
      expect(state.error).toBe('Email already in use');
    });

    it('should set error on googleLogin rejected', () => {
      const loadingState = { ...initialState, loading: true };
      const state = authReducer(loadingState, {
        type: 'auth/googleLogin/rejected',
        payload: 'Google sign-in failed',
      });
      expect(state.loading).toBe(false);
      expect(state.error).toBe('Google sign-in failed');
    });
  });

  describe('async thunk execution', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('login succeeds - sets user in store', async () => {
      const store = makeAuthStore();
      (FirebaseAuthService.login as jest.Mock).mockResolvedValue(mockUser);
      await store.dispatch(login({ email: 'test@example.com', password: 'pass' }));
      const state = store.getState().auth;
      expect(state.user).toEqual(mockUser);
      expect(state.isAuthenticated).toBe(true);
      expect(state.loading).toBe(false);
    });

    it('login fails with Error - sets error.message', async () => {
      const store = makeAuthStore();
      (FirebaseAuthService.login as jest.Mock).mockRejectedValue(new Error('Bad credentials'));
      await store.dispatch(login({ email: 'x@x.com', password: 'bad' }));
      expect(store.getState().auth.error).toBe('Bad credentials');
    });

    it('login fails with non-Error - uses fallback message', async () => {
      const store = makeAuthStore();
      (FirebaseAuthService.login as jest.Mock).mockRejectedValue('string error');
      await store.dispatch(login({ email: 'x@x.com', password: 'bad' }));
      expect(store.getState().auth.error).toBe('Login failed');
    });

    it('signup succeeds - sets user in store', async () => {
      const store = makeAuthStore();
      (FirebaseAuthService.signUp as jest.Mock).mockResolvedValue(mockUser);
      await store.dispatch(
        signup({ email: 'new@example.com', password: 'pass', displayName: 'New' }),
      );
      expect(store.getState().auth.user).toEqual(mockUser);
    });

    it('signup fails with Error - sets error.message', async () => {
      const store = makeAuthStore();
      (FirebaseAuthService.signUp as jest.Mock).mockRejectedValue(new Error('Email in use'));
      await store.dispatch(signup({ email: 'x@x.com', password: 'p', displayName: 'X' }));
      expect(store.getState().auth.error).toBe('Email in use');
    });

    it('signup fails with non-Error - uses fallback message', async () => {
      const store = makeAuthStore();
      (FirebaseAuthService.signUp as jest.Mock).mockRejectedValue('unknown');
      await store.dispatch(signup({ email: 'x@x.com', password: 'p', displayName: 'X' }));
      expect(store.getState().auth.error).toBe('Signup failed');
    });

    it('googleLogin succeeds - sets user in store', async () => {
      const store = makeAuthStore();
      (FirebaseAuthService.googleLogin as jest.Mock).mockResolvedValue(mockUser);
      await store.dispatch(googleLogin('google-id-token'));
      expect(store.getState().auth.user).toEqual(mockUser);
    });

    it('googleLogin fails with Error - sets error.message', async () => {
      const store = makeAuthStore();
      (FirebaseAuthService.googleLogin as jest.Mock).mockRejectedValue(new Error('Google failed'));
      await store.dispatch(googleLogin('bad-token'));
      expect(store.getState().auth.error).toBe('Google failed');
    });

    it('googleLogin fails with non-Error - uses fallback message', async () => {
      const store = makeAuthStore();
      (FirebaseAuthService.googleLogin as jest.Mock).mockRejectedValue('token invalid');
      await store.dispatch(googleLogin('bad-token'));
      expect(store.getState().auth.error).toBe('Google login failed');
    });

    it('logout succeeds - clears user', async () => {
      const store = makeAuthStore();
      (FirebaseAuthService.logout as jest.Mock).mockResolvedValue(undefined);
      store.dispatch(setUser(mockUser));
      await store.dispatch(logout());
      expect(store.getState().auth.user).toBeNull();
    });

    it('logout fails with Error - sets error.message', async () => {
      const store = makeAuthStore();
      (FirebaseAuthService.logout as jest.Mock).mockRejectedValue(new Error('Network error'));
      await store.dispatch(logout());
      expect(store.getState().auth.error).toBe('Network error');
    });

    it('logout fails with non-Error - uses fallback message', async () => {
      const store = makeAuthStore();
      (FirebaseAuthService.logout as jest.Mock).mockRejectedValue('network down');
      await store.dispatch(logout());
      expect(store.getState().auth.error).toBe('Logout failed');
    });

    it('resetPassword succeeds - clears loading', async () => {
      const store = makeAuthStore();
      (FirebaseAuthService.resetPassword as jest.Mock).mockResolvedValue(undefined);
      await store.dispatch(resetPassword('test@example.com'));
      expect(store.getState().auth.loading).toBe(false);
      expect(store.getState().auth.error).toBeNull();
    });

    it('resetPassword fails with Error - sets error.message', async () => {
      const store = makeAuthStore();
      (FirebaseAuthService.resetPassword as jest.Mock).mockRejectedValue(
        new Error('User not found'),
      );
      await store.dispatch(resetPassword('unknown@example.com'));
      expect(store.getState().auth.error).toBe('User not found');
    });

    it('resetPassword fails with non-Error - uses fallback message', async () => {
      const store = makeAuthStore();
      (FirebaseAuthService.resetPassword as jest.Mock).mockRejectedValue('bad request');
      await store.dispatch(resetPassword('test@example.com'));
      expect(store.getState().auth.error).toBe('Password reset failed');
    });
  });
});
