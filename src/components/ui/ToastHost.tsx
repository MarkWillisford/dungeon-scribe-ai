import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { removeToast } from '@/store/slices/uiSlice';
import { Toast } from './Toast';

/**
 * Renders the app-wide toast queue.
 *
 * Mounted once at the root, ABOVE the navigator, so a toast raised just before
 * a screen navigates away still gets seen — "saved" is worth nothing if it
 * unmounts with the screen that raised it (#368).
 *
 * Only the head of the queue is rendered. Toast positions itself absolutely at
 * a fixed offset, so two at once would land on top of each other; each one
 * starts its own dismissal timer when it mounts, so showing them in sequence
 * gives every toast its full duration rather than hiding it behind another.
 */
export function ToastHost() {
  const dispatch = useAppDispatch();
  const toasts = useAppSelector((state) => state.ui.toasts);
  const current = toasts[0];

  const dismiss = useCallback(() => {
    if (current) dispatch(removeToast(current.id));
  }, [dispatch, current]);

  if (!current) return null;

  return (
    <Toast
      // Remount on id change so the next toast restarts the animation and timer
      // instead of inheriting the finished ones from the toast it replaced.
      key={current.id}
      message={current.message}
      type={current.type}
      duration={current.durationMs}
      onDismiss={dismiss}
      testID={`toast-${current.type}`}
    />
  );
}
