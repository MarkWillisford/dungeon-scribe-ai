import {
  withTiming,
  withSpring,
  withSequence,
  Easing,
  type WithTimingConfig,
  type WithSpringConfig,
} from 'react-native-reanimated';

// Timing presets
export const timingPresets: Record<string, WithTimingConfig> = {
  fast: { duration: 150, easing: Easing.out(Easing.ease) },
  normal: { duration: 300, easing: Easing.inOut(Easing.ease) },
  slow: { duration: 500, easing: Easing.inOut(Easing.ease) },
  fadeIn: { duration: 400, easing: Easing.out(Easing.ease) },
  fadeOut: { duration: 200, easing: Easing.in(Easing.ease) },
};

// Spring presets
export const springPresets: Record<string, WithSpringConfig> = {
  gentle: { damping: 15, stiffness: 100, mass: 1 },
  bouncy: { damping: 8, stiffness: 150, mass: 0.8 },
  snappy: { damping: 20, stiffness: 300, mass: 0.5 },
  diceRoll: { damping: 6, stiffness: 200, mass: 1 },
};

// Animation factory functions
export const animations = {
  fadeIn: (value: number) => withTiming(value, timingPresets.fadeIn),
  fadeOut: (value: number) => withTiming(value, timingPresets.fadeOut),
  slideIn: (value: number) => withSpring(value, springPresets.gentle),
  bounce: (value: number) => withSpring(value, springPresets.bouncy),
  snap: (value: number) => withSpring(value, springPresets.snappy),

  pulse: (baseValue: number, scaleAmount = 1.1) =>
    withSequence(
      withTiming(baseValue * scaleAmount, { duration: 150 }),
      withSpring(baseValue, springPresets.gentle),
    ),

  statIncrease: (value: number) =>
    withSequence(
      withTiming(value * 1.2, { duration: 100 }),
      withSpring(value, springPresets.bouncy),
    ),

  statDecrease: (value: number) =>
    withSequence(
      withTiming(value * 0.8, { duration: 100 }),
      withSpring(value, springPresets.gentle),
    ),

  diceRoll: (value: number) => withSpring(value, springPresets.diceRoll),

  buttonPress: (value: number) =>
    withSequence(
      withTiming(value * 0.95, { duration: 50 }),
      withSpring(value, springPresets.snappy),
    ),
};
