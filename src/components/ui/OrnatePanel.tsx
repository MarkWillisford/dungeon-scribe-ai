import React from 'react';
import { View, Text, StyleSheet, type ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/hooks/useTheme';

export type OrnatePanelVariant = 'default' | 'dark' | 'parchment';

interface OrnatePanelProps {
  children: React.ReactNode;
  title?: string;
  variant?: OrnatePanelVariant;
  style?: ViewStyle;
  testID?: string;
}

function OrnateCorner({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const { fantasy } = useTheme();
  const size = 12;

  const positionStyle: ViewStyle = {
    position: 'absolute',
    width: size,
    height: size,
    ...(position.includes('t') ? { top: -1 } : { bottom: -1 }),
    ...(position.includes('l') ? { left: -1 } : { right: -1 }),
    borderColor: fantasy.gold,
    ...(position === 'tl' && { borderTopWidth: 2, borderLeftWidth: 2 }),
    ...(position === 'tr' && { borderTopWidth: 2, borderRightWidth: 2 }),
    ...(position === 'bl' && { borderBottomWidth: 2, borderLeftWidth: 2 }),
    ...(position === 'br' && { borderBottomWidth: 2, borderRightWidth: 2 }),
  };

  return <View style={positionStyle} />;
}

export function OrnatePanel({
  children,
  title,
  variant = 'default',
  style,
  testID,
}: OrnatePanelProps) {
  const { colors, fantasy, shadows, isDark } = useTheme();

  const bgColors = {
    default: isDark
      ? ([colors.bg.secondary, colors.bg.tertiary] as const)
      : ([colors.bg.primary, colors.bg.secondary] as const),
    dark: [colors.bg.primary, colors.bg.secondary] as const,
    parchment: [fantasy.parchmentLight, fantasy.parchment] as const,
  };

  const borderColor =
    variant === 'parchment' ? fantasy.bronze : isDark ? fantasy.gold : fantasy.bronze;

  return (
    <View testID={testID} style={[styles.container, shadows.panel, { borderColor }, style]}>
      <LinearGradient
        colors={[...bgColors[variant]]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <OrnateCorner position="tl" />
        <OrnateCorner position="tr" />
        <OrnateCorner position="bl" />
        <OrnateCorner position="br" />

        {title && (
          <View style={[styles.titleBar, { borderBottomColor: borderColor }]}>
            <Text
              style={[styles.titleText, { color: isDark ? fantasy.gold : fantasy.darkWood }]}
              accessibilityRole="header"
            >
              {title}
            </Text>
          </View>
        )}

        <View style={styles.content}>{children}</View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  gradient: {
    padding: 0,
  },
  titleBar: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Cinzel',
    fontSize: 16,
    fontWeight: '700',
  },
  content: {
    padding: 16,
  },
});
