import { Platform, ViewStyle } from 'react-native';

type ShadowPreset = Pick<
  ViewStyle,
  'shadowColor' | 'shadowOffset' | 'shadowOpacity' | 'shadowRadius' | 'elevation'
>;

function createShadow(
  color: string,
  offsetX: number,
  offsetY: number,
  opacity: number,
  radius: number,
  elevation: number,
): ShadowPreset {
  if (Platform.OS === 'android') {
    return { elevation };
  }
  return {
    shadowColor: color,
    shadowOffset: { width: offsetX, height: offsetY },
    shadowOpacity: opacity,
    shadowRadius: radius,
  };
}

export const shadows = {
  card: createShadow('#000', 0, 2, 0.1, 4, 3),
  cardHover: createShadow('#000', 0, 4, 0.15, 8, 6),
  panel: createShadow('#000', 0, 4, 0.2, 8, 5),
  fantasyGlow: createShadow('#D4AF37', 0, 0, 0.4, 12, 8),
  magicPurple: createShadow('#6B46C1', 0, 0, 0.5, 16, 10),
  fireRed: createShadow('#8B0000', 0, 0, 0.4, 12, 8),
  healGreen: createShadow('#228B22', 0, 0, 0.4, 12, 8),
  button: createShadow('#000', 0, 2, 0.2, 4, 3),
  buttonPressed: createShadow('#000', 0, 1, 0.1, 2, 1),
  modal: createShadow('#000', 0, 8, 0.3, 16, 12),
  none: createShadow('#000', 0, 0, 0, 0, 0),
};
