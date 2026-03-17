import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { type TabStatus } from '@/store/slices/characterEntrySlice';

interface SectionCompletionDotProps {
  status: TabStatus;
  testID?: string;
}

/**
 * Small indicator dot shown on each tab label.
 * green  = complete / no warnings
 * amber  = has validation warnings
 * grey   = empty / no data entered
 */
export function SectionCompletionDot({ status, testID }: SectionCompletionDotProps) {
  const { fantasy, colors } = useTheme();

  const dotColor =
    status === 'complete' ? '#4CAF50' : status === 'warnings' ? fantasy.gold : colors.text.tertiary;

  return (
    <View
      testID={testID}
      style={[styles.dot, { backgroundColor: dotColor }]}
      accessibilityLabel={
        status === 'complete'
          ? 'Section complete'
          : status === 'warnings'
            ? 'Section has warnings'
            : 'Section empty'
      }
    />
  );
}

const styles = StyleSheet.create({
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginLeft: 4,
    alignSelf: 'center',
  },
});
