/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-function-type */
import React from 'react';

// Lightweight test renderer for React Native components in node environment
// Renders components to a tree and provides query/interaction methods
// Includes a minimal hooks implementation so useState/useRef work in function components.

interface RenderedNode {
  type: string | Function;
  props: Record<string, any>;
  children: (RenderedNode | string)[];
}

// --- Minimal hooks support ---
// React hooks require an internal dispatcher. When we call function components
// directly (outside React's reconciler), we install a lightweight dispatcher
// that supports useState, useRef, useMemo, useCallback, and useEffect (no-op).

let hooksState: any[] = [];
let hookIndex = 0;

function createMinimalDispatcher() {
  return {
    useState(initialState: any) {
      const idx = hookIndex++;
      if (idx >= hooksState.length) {
        hooksState.push(typeof initialState === 'function' ? initialState() : initialState);
      }
      const val = hooksState[idx];
      const setter = (newVal: any) => {
        hooksState[idx] = typeof newVal === 'function' ? newVal(hooksState[idx]) : newVal;
      };
      return [val, setter];
    },
    useReducer(reducer: any, initialArg: any, init?: any) {
      const idx = hookIndex++;
      if (idx >= hooksState.length) {
        hooksState.push(init ? init(initialArg) : initialArg);
      }
      const val = hooksState[idx];
      const dispatch = (action: any) => {
        hooksState[idx] = reducer(hooksState[idx], action);
      };
      return [val, dispatch];
    },
    useRef(initialValue: any) {
      const idx = hookIndex++;
      if (idx >= hooksState.length) {
        hooksState.push({ current: initialValue });
      }
      return hooksState[idx];
    },
    useMemo(factory: () => any, _deps: any[]) {
      const idx = hookIndex++;
      if (idx >= hooksState.length) {
        hooksState.push(factory());
      }
      return hooksState[idx];
    },
    useCallback(callback: any, _deps: any[]) {
      return callback;
    },
    useEffect() {
      /* no-op in test renderer */
    },
    useLayoutEffect() {
      /* no-op in test renderer */
    },
    useContext(context: any) {
      return context._currentValue ?? context._currentValue2 ?? undefined;
    },
    useDebugValue() {
      /* no-op */
    },
    useId() {
      const idx = hookIndex++;
      if (idx >= hooksState.length) {
        hooksState.push(`:r${idx}:`);
      }
      return hooksState[idx];
    },
    useImperativeHandle() {
      /* no-op */
    },
    useInsertionEffect() {
      /* no-op */
    },
    useSyncExternalStore(subscribe: any, getSnapshot: any) {
      return getSnapshot();
    },
    useTransition() {
      return [false, (cb: () => void) => cb()];
    },
    useDeferredValue(value: any) {
      return value;
    },
    useOptimistic(passthrough: any) {
      return [passthrough, () => {}];
    },
    useActionState(action: any, initialState: any) {
      return [initialState, action, false];
    },
    useFormStatus() {
      return { pending: false, data: null, method: null, action: null };
    },
  };
}

/**
 * Install our minimal dispatcher on React internals, call fn, then restore.
 */
function withHooks<T>(fn: () => T): T {
  const ReactInternals =
    (React as any).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE ??
    (React as any).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  const prev = ReactInternals?.H;
  try {
    hooksState = [];
    hookIndex = 0;
    if (ReactInternals) {
      ReactInternals.H = createMinimalDispatcher();
    }
    return fn();
  } finally {
    if (ReactInternals) {
      ReactInternals.H = prev;
    }
  }
}

function renderToTree(element: React.ReactElement): RenderedNode {
  if (typeof element === 'string' || typeof element === 'number') {
    return { type: 'TEXT', props: {}, children: [String(element)] };
  }

  if (!element || !element.type) {
    return { type: 'EMPTY', props: {}, children: [] };
  }

  let rendered: React.ReactElement;

  // If it's a function component, call it with hooks support
  if (typeof element.type === 'function') {
    try {
      const result = withHooks(() => (element.type as Function)(element.props));
      if (!result)
        return {
          type: String(element.type.name || 'Component'),
          props: element.props as Record<string, any>,
          children: [],
        };
      rendered = result;
    } catch {
      return {
        type: String((element.type as any).name || 'Component'),
        props: element.props as Record<string, any>,
        children: [],
      };
    }
  } else {
    rendered = element;
  }

  const children: (RenderedNode | string)[] = [];
  const renderedProps = (rendered.props ?? {}) as Record<string, any>;
  const rawChildren = renderedProps.children;

  if (rawChildren) {
    const childArray = Array.isArray(rawChildren) ? rawChildren : [rawChildren];
    for (const child of childArray.flat(Infinity)) {
      if (child === null || child === undefined || child === false) continue;
      if (typeof child === 'string' || typeof child === 'number') {
        children.push(String(child));
      } else if (React.isValidElement(child)) {
        children.push(renderToTree(child));
      }
    }
  }

  const typeName =
    typeof rendered.type === 'string'
      ? rendered.type
      : typeof rendered.type === 'function'
        ? (rendered.type as any).displayName || (rendered.type as any).name || 'Component'
        : 'Unknown';

  return { type: typeName, props: { ...renderedProps }, children };
}

function findAllNodes(node: RenderedNode, predicate: (n: RenderedNode) => boolean): RenderedNode[] {
  const results: RenderedNode[] = [];
  if (predicate(node)) results.push(node);
  for (const child of node.children) {
    if (typeof child !== 'string') {
      results.push(...findAllNodes(child, predicate));
    }
  }
  return results;
}

function getAllText(node: RenderedNode): string[] {
  const texts: string[] = [];
  for (const child of node.children) {
    if (typeof child === 'string') {
      texts.push(child);
    } else {
      texts.push(...getAllText(child));
    }
  }
  return texts;
}

export function render(element: React.ReactElement) {
  const tree = renderToTree(element);

  return {
    tree,

    getByText(text: string) {
      const nodes = findAllNodes(tree, (n) => {
        const nodeText = getAllText(n);
        return nodeText.some((t) => t.includes(text));
      });
      if (nodes.length === 0) throw new Error(`Could not find element with text: ${text}`);
      return nodes[0];
    },

    getByTestId(testId: string) {
      const nodes = findAllNodes(tree, (n) => n.props.testID === testId);
      if (nodes.length === 0) throw new Error(`Could not find element with testID: ${testId}`);
      return nodes[0];
    },

    getByRole(role: string) {
      const nodes = findAllNodes(tree, (n) => n.props.accessibilityRole === role);
      if (nodes.length === 0) throw new Error(`Could not find element with role: ${role}`);
      return nodes[0];
    },

    getAllByRole(role: string) {
      return findAllNodes(tree, (n) => n.props.accessibilityRole === role);
    },

    queryByText(text: string) {
      const nodes = findAllNodes(tree, (n) => getAllText(n).some((t) => t.includes(text)));
      return nodes.length > 0 ? nodes[0] : null;
    },

    queryByTestId(testId: string) {
      const nodes = findAllNodes(tree, (n) => n.props.testID === testId);
      return nodes.length > 0 ? nodes[0] : null;
    },

    getAllText() {
      return getAllText(tree);
    },
  };
}

export const fireEvent = {
  press(node: RenderedNode) {
    if (node.props.onPress && !node.props.disabled) {
      node.props.onPress();
    }
  },

  changeText(node: RenderedNode, text: string) {
    if (node.props.onChangeText) {
      node.props.onChangeText(text);
    }
  },
};
