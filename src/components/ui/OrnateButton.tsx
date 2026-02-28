import React from 'react';
import { Pressable, Text, StyleSheet, type ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withSequence,
} from 'react-native-reanimated';
import { useTheme } from '@/hooks/useTheme';

export type OrnateButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

interface OrnateButtonProps {
  title: string;
  onPress: () => void;
  variant?: OrnateButtonVariant;
  disabled?: boolean;
  style?: ViewStyle;
  testID?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function OrnateButton({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  style,
  testID,
  accessibilityLabel,
  accessibilityHint,
}: OrnateButtonProps) {
  const { colors, fantasy, shadows, isDark } = useTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    // eslint-disable-next-line react-hooks/immutability -- Reanimated shared values use .value assignment
    scale.value = withTiming(0.95, { duration: 50 });
  };

  const handlePressOut = () => {
    // eslint-disable-next-line react-hooks/immutability -- Reanimated shared values use .value assignment
    scale.value = withSequence(
      withTiming(1.02, { duration: 80 }),
      withSpring(1, { damping: 15, stiffness: 200 }),
    );
  };

  const gradientColors = {
    primary: isDark ? (['#2A1A4E', '#1A237E'] as const) : (['#1A237E', '#000051'] as const),
    secondary: [fantasy.bronze, fantasy.gold] as const,
    danger: ['#8B0000', '#B71C1C'] as const,
    ghost: ['transparent', 'transparent'] as const,
  };

  const textColor =
    variant === 'ghost' ? (isDark ? colors.text.accent : colors.primary.DEFAULT) : '#FFFFFF';

  const borderColor =
    variant === 'ghost' ? (isDark ? colors.border.DEFAULT : colors.border.hover) : 'transparent';

  return (
    <AnimatedPressable
      testID={testID}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      style={[animatedStyle, disabled && styles.disabled, style]}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
    >
      <LinearGradient
        colors={[...gradientColors[variant]]}
        style={[
          styles.gradient,
          disabled ? shadows.none : shadows.button,
          { borderColor, borderWidth: variant === 'ghost' ? 1 : 0 },
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      </LinearGradient>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  gradient: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
    minWidth: 44,
  },
  text: {
    fontFamily: 'Cinzel',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  disabled: {
    opacity: 0.5,
  },
});
