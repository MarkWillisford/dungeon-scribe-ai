/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
// Component test setup — mocks for React Native, Reanimated, Expo modules

// Mock react-native
jest.mock('react-native', () => {
  const React = require('react');

  const mockComponent = (name: string) => {
    const Component = (props: any) => React.createElement(name, props, props.children);
    Component.displayName = name;
    return Component;
  };

  return {
    Platform: { OS: 'ios', select: (obj: any) => obj.ios ?? obj.default },
    StyleSheet: {
      create: (styles: any) => styles,
      flatten: (style: any) => (Array.isArray(style) ? Object.assign({}, ...style) : style),
    },
    Dimensions: { get: () => ({ width: 375, height: 812 }) },
    View: mockComponent('View'),
    Text: mockComponent('Text'),
    TextInput: (props: any) => {
      const { onChangeText, onFocus, onBlur, ...rest } = props;
      return React.createElement('TextInput', {
        ...rest,
        onChange: onChangeText ? (e: any) => onChangeText(e.nativeEvent?.text ?? '') : undefined,
        onFocus,
        onBlur,
      });
    },
    Pressable: (props: any) => {
      const { onPress, onPressIn, onPressOut, disabled, children, ...rest } = props;
      return React.createElement(
        'Pressable',
        { ...rest, onPress: disabled ? undefined : onPress, disabled },
        typeof children === 'function' ? children({ pressed: false }) : children,
      );
    },
    TouchableOpacity: mockComponent('TouchableOpacity'),
    ScrollView: mockComponent('ScrollView'),
    FlatList: mockComponent('FlatList'),
    Image: mockComponent('Image'),
    ActivityIndicator: mockComponent('ActivityIndicator'),
    Modal: mockComponent('Modal'),
    Alert: { alert: jest.fn() },
    Animated: {
      View: mockComponent('Animated.View'),
      Text: mockComponent('Animated.Text'),
      Value: jest.fn(() => ({ interpolate: jest.fn() })),
      timing: jest.fn(() => ({ start: jest.fn() })),
      spring: jest.fn(() => ({ start: jest.fn() })),
      createAnimatedComponent: (c: any) => c,
    },
    useWindowDimensions: () => ({ width: 375, height: 812 }),
    PixelRatio: {
      get: () => 2,
      getFontScale: () => 1,
      getPixelSizeForLayoutSize: (s: number) => s * 2,
      roundToNearestPixel: (s: number) => s,
    },
    I18nManager: { isRTL: false },
    NativeModules: {},
    NativeEventEmitter: jest.fn(() => ({ addListener: jest.fn(), removeListeners: jest.fn() })),
    AppState: { currentState: 'active', addEventListener: jest.fn() },
    Linking: { openURL: jest.fn(), canOpenURL: jest.fn().mockResolvedValue(true) },
    BackHandler: { addEventListener: jest.fn(), removeEventListener: jest.fn() },
  };
});

// Mock expo-linear-gradient
jest.mock('expo-linear-gradient', () => {
  const React = require('react');
  return {
    LinearGradient: (props: any) => React.createElement('LinearGradient', props, props.children),
  };
});

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const React = require('react');

  const Animated = {
    View: (props: any) => React.createElement('Animated.View', props, props.children),
    Text: (props: any) => React.createElement('Animated.Text', props, props.children),
    createAnimatedComponent: (component: any) => component,
  };

  return {
    __esModule: true,
    default: Animated,
    ...Animated,
    useSharedValue: (initial: any) => ({ value: initial }),
    useAnimatedStyle: (fn: () => any) => fn(),
    withTiming: (value: any) => value,
    withSpring: (value: any) => value,
    withSequence: (...args: any[]) => args[args.length - 1],
    withRepeat: (value: any) => value,
    withDelay: (_delay: any, value: any) => value,
    runOnJS: (fn: any) => fn,
    Easing: {
      linear: (x: number) => x,
      ease: (x: number) => x,
      in: () => (x: number) => x,
      out: () => (x: number) => x,
      inOut: () => (x: number) => x,
    },
    createAnimatedComponent: (component: any) => component,
  };
});

// Mock Redux store hooks for useTheme
jest.mock('@/store/hooks', () => ({
  useAppDispatch: () => jest.fn(),
  useAppSelector: (selector: any) =>
    selector({
      theme: { mode: 'dark', context: 'default' },
      auth: { user: null, loading: false, error: null, isAuthenticated: false },
      characters: {
        characters: [],
        activeCharacter: null,
        loading: false,
        error: null,
      },
      ui: {
        isLoading: false,
        activeModal: null,
        toasts: [],
        activeTab: 'characters',
      },
    }),
}));
