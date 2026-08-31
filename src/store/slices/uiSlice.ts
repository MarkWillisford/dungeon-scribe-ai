import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  /** Milliseconds on screen. Omitted uses the Toast component's own default. */
  durationMs?: number;
}

// Toast ids were Date.now(), which collides whenever two are raised in the same
// millisecond — a save that both succeeds and warns, say — and duplicate keys
// make React drop one of them. Generated in a prepare callback so the reducer
// itself stays pure.
let nextToastId = 0;

interface UIState {
  isLoading: boolean;
  activeModal: string | null;
  toasts: Toast[];
}

const initialState: UIState = {
  isLoading: false,
  activeModal: null,
  toasts: [],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    openModal(state, action: PayloadAction<string>) {
      state.activeModal = action.payload;
    },
    closeModal(state) {
      state.activeModal = null;
    },
    addToast: {
      reducer(state, action: PayloadAction<Toast>) {
        state.toasts.push(action.payload);
      },
      prepare(payload: Omit<Toast, 'id'>) {
        nextToastId += 1;
        return { payload: { ...payload, id: `toast-${nextToastId}` } };
      },
    },
    removeToast(state, action: PayloadAction<string>) {
      state.toasts = state.toasts.filter((t) => t.id !== action.payload);
    },
    clearToasts(state) {
      state.toasts = [];
    },
  },
});

export const { setLoading, openModal, closeModal, addToast, removeToast, clearToasts } =
  uiSlice.actions;
export default uiSlice.reducer;
