import { lightColors, darkColors, fantasyColors } from '@/theme/colors';
import { contextAccents } from '@/theme/contextColors';
import { fontFamilies } from '@/theme/fonts';
import { shadows } from '@/theme/shadows';
import { useAppSelector } from '@/store/hooks';
import type { ThemeMode, ContextTheme, ThemeColors } from '@/types/theme';

export interface UseThemeResult {
  mode: ThemeMode;
  colors: ThemeColors;
  fantasy: typeof fantasyColors;
  context: (typeof contextAccents)[ContextTheme];
  fonts: typeof fontFamilies;
  shadows: typeof shadows;
  isDark: boolean;
}

export function useTheme(): UseThemeResult {
  const mode = useAppSelector((state) => state.theme.mode);
  const contextTheme = useAppSelector((state) => state.theme.context);

  const colors = mode === 'dark' ? darkColors : lightColors;
  const contextAccent = contextAccents[contextTheme];

  return {
    mode,
    colors,
    fantasy: fantasyColors,
    context: contextAccent,
    fonts: fontFamilies,
    shadows,
    isDark: mode === 'dark',
  };
}

// Standalone version for use outside Redux provider (e.g., tests, storybook)
export function useThemeColors(
  mode: ThemeMode = 'dark',
  context: ContextTheme = 'default',
): UseThemeResult {
  const colors = mode === 'dark' ? darkColors : lightColors;
  const contextAccent = contextAccents[context];

  return {
    mode,
    colors,
    fantasy: fantasyColors,
    context: contextAccent,
    fonts: fontFamilies,
    shadows,
    isDark: mode === 'dark',
  };
}
