import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  runOnJS,
} from 'react-native-reanimated';
import { useTheme } from '@/hooks/useTheme';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onDismiss: () => void;
  testID?: string;
}

export function Toast({ message, type = 'info', duration = 3000, onDismiss, testID }: ToastProps) {
  const { colors } = useTheme();
  const translateY = useSharedValue(-100);
  const opacity = useSharedValue(0);

  useEffect(() => {
    translateY.value = withTiming(0, { duration: 300 });
    opacity.value = withTiming(1, { duration: 300 });

    translateY.value = withDelay(
      duration,
      withTiming(-100, { duration: 300 }, (finished) => {
        if (finished) {
          runOnJS(onDismiss)();
        }
      }),
    );
    opacity.value = withDelay(duration, withTiming(0, { duration: 300 }));
  }, [duration, onDismiss, opacity, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  const bgColors: Record<ToastType, string> = {
    success: colors.success.DEFAULT,
    error: colors.error.DEFAULT,
    warning: colors.warning.DEFAULT,
    info: colors.info.DEFAULT,
  };

  return (
    <Animated.View
      testID={testID}
      style={[styles.container, animatedStyle, { backgroundColor: bgColors[type] }]}
      accessibilityRole="alert"
      accessibilityLiveRegion="assertive"
    >
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 16,
    right: 16,
    padding: 14,
    borderRadius: 8,
    zIndex: 1000,
  },
  message: {
    color: '#FFFFFF',
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    textAlign: 'center',
  },
});
