import { Alert, Platform } from 'react-native';

type AlertButton = {
  text: string;
  style?: 'default' | 'cancel' | 'destructive';
  onPress?: () => void;
};

/**
 * Cross-platform Alert.alert wrapper.
 * React Native's Alert.alert is a no-op on web — this falls back to
 * window.confirm (2-button) or window.alert (1-button) on web.
 */
type AlertOptions = { cancelable?: boolean; onDismiss?: () => void };

export function showAlert(
  title: string,
  message?: string,
  buttons?: AlertButton[],
  options?: AlertOptions,
): void {
  if (Platform.OS !== 'web') {
    Alert.alert(title, message, buttons, options);
    return;
  }

  if (!buttons || buttons.length <= 1) {
    window.alert(message ? `${title}\n\n${message}` : title);
    buttons?.[0]?.onPress?.();
    return;
  }

  const cancelButton = buttons.find((b) => b.style === 'cancel') ?? buttons[0];
  const confirmButton = buttons.find((b) => b.style !== 'cancel') ?? buttons[1] ?? buttons[0];
  const label = message ? `${title}\n\n${message}` : title;

  if (window.confirm(label)) {
    confirmButton?.onPress?.();
  } else {
    cancelButton?.onPress?.();
  }
}
