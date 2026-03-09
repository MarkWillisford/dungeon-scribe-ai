# Plan: Downgrade Expo SDK 55 → SDK 54

## Context

The app is built on Expo SDK 55, but Expo Go on the App Store only supports SDK 54. We need to downgrade so the app can run on the user's phone via Expo Go.

## Approach

Use Expo's built-in tooling (`npx expo install --fix`) to resolve compatible versions rather than guessing individual package versions.

### Steps

1. **Update `expo` version in package.json** from `~55.0.3` to `~54.0.0`
2. **Delete `node_modules/` and `package-lock.json`** for a clean slate
3. **Run `npm install --legacy-peer-deps`** to install the new expo base
4. **Run `npx expo install --fix`** — this auto-corrects all expo-_ and react-native-_ packages to SDK 54-compatible versions
5. **Manually verify/fix key packages:**
   - `react-native` → should become `0.81.x`
   - `react-native-reanimated` → must be `~4.1.x` (4.2.x is SDK 55 only)
   - `expo-router` → may change to `~6.0.x` or `~54.0.x` (aligned versioning)
6. **Run `npm test`** — verify all 351 tests still pass
7. **Run `npx expo start --tunnel`** — verify the app launches on phone

### Files Modified

- `package.json` — dependency versions
- `package-lock.json` — regenerated

### Verification

- `npm test` — 351 tests pass
- `npx expo start --tunnel` — QR code works with Expo Go on phone

---

## FINAL STATUS: COMPLETE (2026-03-06)

Confirmed: `package.json` shows `"expo": "~54.0.0"`. Downgrade was completed successfully.
