import React, { useEffect, useRef, useState } from 'react';
import { Animated, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onDismiss: () => void;
  testID?: string;
}

/**
 * Uses React Native's own Animated, not Reanimated.
 *
 * This was a Reanimated component that faded in from opacity 0. Reanimated 4
 * needs the react-native-worklets Babel plugin, and this project's
 * babel.config.js still points at the pre-4 'react-native-reanimated/plugin'
 * path — so the entrance animation never ran and the toast sat invisible at
 * opacity 0 forever. Save reported success into a void.
 *
 * A confirmation the user cannot see is worse than no confirmation at all, so
 * this deliberately uses the built-in Animated API, which needs no plugin. It
 * also starts fully opaque and animates only on the way out: if anything ever
 * goes wrong with the animation again, the failure mode is a toast that stays
 * on screen rather than one that never appears.
 */
export function Toast({ message, type = 'info', duration = 3000, onDismiss, testID }: ToastProps) {
  const { colors } = useTheme();
  // Lazy state rather than a ref, so the value is created once without being
  // read during render (react-hooks/refs).
  const [opacity] = useState(() => new Animated.Value(1));
  const onDismissRef = useRef(onDismiss);

  useEffect(() => {
    onDismissRef.current = onDismiss;
  }, [onDismiss]);

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) onDismissRef.current();
      });
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, opacity]);

  const bgColors: Record<ToastType, string> = {
    success: colors.success.DEFAULT,
    error: colors.error.DEFAULT,
    warning: colors.warning.DEFAULT,
    info: colors.info.DEFAULT,
  };

  return (
    <Animated.View
      testID={testID}
      style={[styles.container, { opacity, backgroundColor: bgColors[type] }]}
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
    elevation: 12,
  },
  message: {
    color: '#FFFFFF',
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    textAlign: 'center',
  },
});
