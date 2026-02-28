import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface FantasyDividerProps {
  symbol?: string;
  testID?: string;
}

export function FantasyDivider({ symbol = '\u203B', testID }: FantasyDividerProps) {
  const { colors, fantasy, isDark } = useTheme();

  const lineColor = isDark ? colors.border.DEFAULT : fantasy.bronze;
  const symbolColor = isDark ? fantasy.gold : fantasy.bronze;

  return (
    <View testID={testID} style={styles.container} accessibilityRole="none">
      <View style={[styles.line, { backgroundColor: lineColor }]} />
      <Text style={[styles.symbol, { color: symbolColor }]}>{symbol}</Text>
      <View style={[styles.line, { backgroundColor: lineColor }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  line: {
    flex: 1,
    height: 1,
  },
  symbol: {
    marginHorizontal: 12,
    fontSize: 14,
  },
});
