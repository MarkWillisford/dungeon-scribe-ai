import React from 'react';
import { View, Text, Pressable, StyleSheet, type ViewStyle } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface FantasyCardProps {
  children: React.ReactNode;
  title?: string;
  accentColor?: string;
  onPress?: () => void;
  style?: ViewStyle;
  testID?: string;
}

export function FantasyCard({
  children,
  title,
  accentColor,
  onPress,
  style,
  testID,
}: FantasyCardProps) {
  const { colors, context, shadows, isDark } = useTheme();

  const borderLeft = accentColor || context.primary;

  const content = (
    <View
      testID={testID}
      style={[
        styles.card,
        shadows.card,
        {
          backgroundColor: isDark ? colors.bg.secondary : colors.bg.primary,
          borderColor: colors.border.DEFAULT,
          borderLeftColor: borderLeft,
        },
        style,
      ]}
    >
      {title && <Text style={[styles.title, { color: colors.text.primary }]}>{title}</Text>}
      {children}
    </View>
  );

  if (onPress) {
    return (
      <Pressable onPress={onPress} accessibilityRole="button" accessibilityLabel={title}>
        {content}
      </Pressable>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderLeftWidth: 3,
    borderRadius: 8,
    padding: 16,
  },
  title: {
    fontFamily: 'Cinzel',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
  },
});
