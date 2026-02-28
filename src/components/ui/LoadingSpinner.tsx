import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useTheme } from '@/hooks/useTheme';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'small' | 'large';
  testID?: string;
}

export function LoadingSpinner({
  message = 'Loading...',
  size = 'large',
  testID,
}: LoadingSpinnerProps) {
  const { colors, fantasy } = useTheme();
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 1500, easing: Easing.linear }),
      -1,
      false,
    );
  }, [rotation]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value}deg` }],
  }));

  const spinnerSize = size === 'large' ? 40 : 24;

  return (
    <View testID={testID} style={styles.container} accessibilityRole="progressbar">
      <Animated.View
        style={[
          animatedStyle,
          styles.spinner,
          {
            width: spinnerSize,
            height: spinnerSize,
            borderColor: colors.bg.quaternary,
            borderTopColor: fantasy.gold,
          },
        ]}
      />
      {message && <Text style={[styles.message, { color: colors.text.secondary }]}>{message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  spinner: {
    borderWidth: 3,
    borderRadius: 999,
  },
  message: {
    fontFamily: 'LibreBaskerville',
    fontSize: 14,
    marginTop: 12,
  },
});
