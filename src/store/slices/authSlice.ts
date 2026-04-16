import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { AppUser } from '@/types/auth';
import { FirebaseAuthService } from '@/services/FirebaseAuthService';

interface AuthState {
  user: AppUser | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  authInitialized: boolean; // true after onAuthStateChanged fires for the first time
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isAdmin: false,
  authInitialized: false,
  loading: false,
  error: null,
};

// Async thunks — implementations will call FirebaseAuthService (Step 6)
export const login = createAsyncThunk<AppUser, { email: string; password: string }>(
  'auth/login',
  async (params, { rejectWithValue }) => {
    try {
      return await FirebaseAuthService.login(params.email, params.password);
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Login failed');
    }
  },
);

export const signup = createAsyncThunk<
  AppUser,
  { email: string; password: string; displayName: string }
>('auth/signup', async (params, { rejectWithValue }) => {
  try {
    return await FirebaseAuthService.signUp(params.email, params.password);
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : 'Signup failed');
  }
});

export const googleLogin = createAsyncThunk<AppUser, string>(
  'auth/googleLogin',
  async (idToken, { rejectWithValue }) => {
    try {
      return await FirebaseAuthService.googleLogin(idToken);
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Google login failed');
    }
  },
);

export const logout = createAsyncThunk<void, void>(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await FirebaseAuthService.logout();
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Logout failed');
    }
  },
);

export const resetPassword = createAsyncThunk<void, string>(
  'auth/resetPassword',
  async (email, { rejectWithValue }) => {
    try {
      await FirebaseAuthService.resetPassword(email);
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Password reset failed');
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<AppUser | null>) {
      state.user = action.payload;
      state.isAuthenticated = action.payload !== null;
    },
    setIsAdmin(state, action: PayloadAction<boolean>) {
      state.isAdmin = action.payload;
    },
    setAuthInitialized(state) {
      state.authInitialized = true;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Signup
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Google Login
    builder.addCase(googleLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(googleLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(googleLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Logout
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    });

    // Reset Password
    builder.addCase(resetPassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(resetPassword.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { setUser, setIsAdmin, setAuthInitialized, clearError } = authSlice.actions;
export default authSlice.reducer;
