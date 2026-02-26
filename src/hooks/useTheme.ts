import { lightColors, darkColors, fantasyColors } from '@/theme/colors';
import { contextAccents } from '@/theme/contextColors';
import { fontFamilies } from '@/theme/fonts';
import { shadows } from '@/theme/shadows';
import type { ThemeMode, ContextTheme, ThemeColors } from '@/types/theme';

// Standalone hook — will connect to Redux store once it exists (Step 5)
// For now, returns a static theme based on provided mode

interface UseThemeResult {
  mode: ThemeMode;
  colors: ThemeColors;
  fantasy: typeof fantasyColors;
  context: (typeof contextAccents)[ContextTheme];
  fonts: typeof fontFamilies;
  shadows: typeof shadows;
  isDark: boolean;
}

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
