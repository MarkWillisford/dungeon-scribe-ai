import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface ClassChoicesUnavailableProps {
  className: string;
  message: string;
  onRetry: () => void;
}

/**
 * Shown when the class choice definitions for a class could not be read.
 *
 * The point of this component is the distinction it draws. A class with no
 * choices and a class whose choices failed to load both used to render as
 * nothing at all, so a Cavalier missing its Order looked exactly like a
 * Fighter correctly having no choices (#360). Naming the failure, showing the
 * underlying reason and offering a retry turns a dead end into something the
 * user can act on and report.
 */
export function ClassChoicesUnavailable({
  className,
  message,
  onRetry,
}: ClassChoicesUnavailableProps) {
  const { colors } = useTheme();

  return (
    <View
      style={[styles.container, { borderColor: colors.accent.DEFAULT }]}
      accessibilityLabel={`Class choices unavailable for ${className}`}
    >
      <Text style={[styles.title, { color: colors.accent.DEFAULT }]}>
        {`${className} choices could not be loaded`}
      </Text>
      <Text style={[styles.detail, { color: colors.text.secondary }]}>{message}</Text>
      <Text style={[styles.detail, { color: colors.text.tertiary }]}>
        This class may have selections — an Order, talents — that are missing from this sheet until
        the load succeeds.
      </Text>
      <Pressable
        onPress={onRetry}
        style={[styles.retry, { borderColor: colors.border.DEFAULT }]}
        accessibilityRole="button"
        accessibilityLabel={`Retry loading class choices for ${className}`}
      >
        <Text style={[styles.retryText, { color: colors.text.primary }]}>↺ Retry</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginTop: 8,
    gap: 4,
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
  },
  detail: {
    fontSize: 11,
  },
  retry: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 4,
  },
  retryText: {
    fontSize: 12,
  },
});
