import { ContextTheme } from '@/types/theme';

// Context-specific accent colors that overlay on the base theme
export interface ContextAccent {
  primary: string;
  secondary: string;
  glow: string;
}

export const contextAccents: Record<ContextTheme, ContextAccent> = {
  default: {
    primary: '#D4AF37', // fantasy-gold
    secondary: '#B87333', // fantasy-bronze
    glow: 'rgba(212, 175, 55, 0.3)',
  },
  combat: {
    primary: '#8B0000', // blood-red
    secondary: '#D32F2F',
    glow: 'rgba(139, 0, 0, 0.3)',
  },
  tavern: {
    primary: '#D4AF37', // warm gold
    secondary: '#B8860B',
    glow: 'rgba(212, 175, 55, 0.4)',
  },
  adventure: {
    primary: '#228B22', // forest-green
    secondary: '#4CAF50',
    glow: 'rgba(34, 139, 34, 0.3)',
  },
  manager: {
    primary: '#6B46C1', // mystic-purple
    secondary: '#7C4DFF',
    glow: 'rgba(107, 70, 193, 0.3)',
  },
};
