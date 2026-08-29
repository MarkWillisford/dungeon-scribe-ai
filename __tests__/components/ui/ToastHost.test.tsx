import React from 'react';
import { render, type RenderedNode } from '../../helpers/testUtils';
import { ToastHost } from '@/components/ui/ToastHost';
import type { Toast as ToastEntry } from '@/store/slices/uiSlice';

const mockDispatch = jest.fn();
let mockToasts: ToastEntry[] = [];

jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: (selector: (s: unknown) => unknown) => selector({ ui: { toasts: mockToasts } }),
}));

// The real Toast drives itself with reanimated timers, which the test renderer
// does not run. Standing in for it keeps this about the queue, not the animation.
jest.mock('@/components/ui/Toast', () => {
  const Toast = () => null;
  return { Toast };
});

function toastNode(node: RenderedNode): RenderedNode | null {
  if (node.type === 'Toast') return node;
  for (const child of node.children) {
    if (typeof child !== 'string') {
      const found = toastNode(child);
      if (found) return found;
    }
  }
  return null;
}

beforeEach(() => {
  jest.clearAllMocks();
  mockToasts = [];
});

describe('ToastHost', () => {
  it('renders nothing when the queue is empty', () => {
    const { tree } = render(<ToastHost />);
    expect(toastNode(tree)).toBeNull();
  });

  it('renders the toast at the head of the queue', () => {
    mockToasts = [{ id: 't1', message: 'Kah-Mei created', type: 'success' }];
    const { tree } = render(<ToastHost />);

    const toast = toastNode(tree);
    expect(toast).toBeTruthy();
    expect(toast!.props.message).toBe('Kah-Mei created');
    expect(toast!.props.type).toBe('success');
  });

  it('shows one at a time, so a second toast cannot cover the first', () => {
    // Toast positions itself absolutely at a fixed offset — two at once would
    // land on top of each other and one would never be read.
    mockToasts = [
      { id: 't1', message: 'first', type: 'success' },
      { id: 't2', message: 'second', type: 'error' },
    ];
    const { tree } = render(<ToastHost />);

    const toast = toastNode(tree);
    expect(toast!.props.message).toBe('first');
    expect(toast!.props.type).toBe('success');
  });

  it('passes a custom duration through', () => {
    mockToasts = [{ id: 't1', message: 'failed', type: 'error', durationMs: 6000 }];
    const { tree } = render(<ToastHost />);

    expect(toastNode(tree)!.props.duration).toBe(6000);
  });

  it('leaves duration unset so the Toast default applies', () => {
    mockToasts = [{ id: 't1', message: 'saved', type: 'success' }];
    const { tree } = render(<ToastHost />);

    expect(toastNode(tree)!.props.duration).toBeUndefined();
  });

  it('removes the toast from the queue when it dismisses itself', () => {
    mockToasts = [{ id: 't1', message: 'saved', type: 'success' }];
    const { tree } = render(<ToastHost />);

    const { onDismiss } = toastNode(tree)!.props as { onDismiss: () => void };
    onDismiss();

    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'ui/removeToast', payload: 't1' }),
    );
  });
});
