// Theme system types

export type ThemeMode = 'light' | 'dark';

// Contextual themes that change accent colors based on activity
export type ContextTheme = 'default' | 'combat' | 'tavern' | 'adventure' | 'manager';

export interface ThemeColors {
  bg: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    accent: string;
  };
  primary: { DEFAULT: string; hover: string; light: string };
  secondary: { DEFAULT: string; hover: string; light: string };
  accent: { DEFAULT: string; hover: string; light: string };
  success: { DEFAULT: string; hover: string; light: string };
  warning: { DEFAULT: string; hover: string; light: string };
  error: { DEFAULT: string; hover: string; light: string };
  info: { DEFAULT: string; hover: string; light: string };
  border: { DEFAULT: string; hover: string; focus: string };
}
