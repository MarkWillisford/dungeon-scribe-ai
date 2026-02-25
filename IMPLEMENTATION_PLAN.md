# Dungeon Scribe AI 1.1 — Implementation Plan

## Context

Two Pathfinder 1e apps exist: **Dungeon Scribe AI** (TypeScript/React Native — strong type system, services, character creation) and **Hero's Ledger** (JS/React web — working combat tracker, campaigns, rich fantasy theme, Firebase backend). This plan merges the best of both into a new modern TS/React Native project with HL's visual identity.

**Decisions:** Firebase from day one, Redux Toolkit, Expo Router, full scaffold + Phase 1 implementation.

---

## Phase 1: Scaffold + Character Management (9 Steps)

### Step 0: GitHub Repository Setup

Create a new repo under MarkWillisford, initialize git locally, push.

```bash
# Create repo on GitHub
gh repo create MarkWillisford/dungeon-scribe-ai --public --description "Pathfinder 1e character manager & combat tracker — React Native / Expo / Firebase"

# Init local git in project dir
cd "Dungeon Scribe AI 1.1"
git init
git remote add origin git@github.com:MarkWillisford/dungeon-scribe-ai.git

# Initial commit with plan + .gitignore
git add IMPLEMENTATION_PLAN.md .gitignore
git commit -m "Initial commit: implementation plan"
git push -u origin main
```

Create `.gitignore` for Expo/React Native (node_modules, .expo, dist, .env, etc.)

### Step 1: Project Initialization

Create Expo project, install deps, configure tooling.

```
npx create-expo-app@latest DungeonScribeAI --template blank-typescript
```

**Dependencies:**
- Core: `expo-router`, `expo-linking`, `expo-constants`, `react-native-safe-area-context`, `react-native-screens`, `react-native-gesture-handler`, `react-native-reanimated`
- State: `@reduxjs/toolkit`, `react-redux`
- Firebase: `firebase`, `@react-native-async-storage/async-storage`, `expo-auth-session`, `expo-crypto`, `expo-web-browser`
- Theme: `nativewind`, `tailwindcss`, `expo-font`, `expo-splash-screen`, `expo-linear-gradient`
- Testing: `jest`, `@testing-library/react-native`, `@testing-library/jest-native`, `ts-jest`

**Config files:** `app.json` (v1.1.0), `babel.config.js` (NativeWind + Reanimated plugins), `tsconfig.json` (strict, path aliases `@/*`), `metro.config.js`, `.env.example` (EXPO_PUBLIC_FIREBASE_*), `jest.config.js`, `CLAUDE.md`

### Step 2: Complete Type System

Port all DS-AI types directly, add new types for HL features.

**Direct ports from DS-AI** (unchanged):
- `src/types/base.ts` — Size, Alignment, BonusType (17 types), Bonus, Effect, BaseItem
- `src/types/abilities.ts` — AbilityScore with per-type bonus arrays (11 categories), AbilityScores
- `src/types/combat.ts` — CombatStats (HP, AC, CMB/CMD, initiative, saves, movement, attacks)
- `src/types/classes.ts` — CharacterClasses, ClassEntry, ClassFeature
- `src/types/race.ts` — Race, RacialTrait
- `src/types/skills.ts` — 36+ skills with ranks/bonuses
- `src/types/feats.ts` — Feats, Traits with prerequisites/effects
- `src/types/equipment.ts` — Weapon, Armor, Shield, MagicItem, Gear, 13 EquipmentSlots, encumbrance
- `src/types/spells.ts` — Spellcasting, SpellcastingClass, Spell, Spellbook
- `src/types/specialAbilities.ts` — SpecialAbility (Ex/Su/Sp)
- `src/types/storage.ts` — StorageService interface, StorageError

**Port with modifications:**
- `src/types/character.ts` — Add `userId: string` and `firebaseId?: string` to CharacterInfo

**New types (from HL's Firestore schema):**
- `src/types/auth.ts` — AppUser, UserPreferences
- `src/types/campaign.ts` — Campaign, CampaignSettings, CampaignMember, CampaignSummary
- `src/types/notes.ts` — Note, NoteAttachment, NoteEdit, NoteType
- `src/types/session.ts` — Session
- `src/types/handout.ts` — Handout
- `src/types/buff.ts` — Buff (with BonusType + effects + duration), BuffPackage
- `src/types/theme.ts` — ThemeMode, ContextTheme, ThemeColors
- `src/types/index.ts` — Barrel re-export + Character master interface

### Step 3: Theme System (HL Visual Port)

Port HL's entire design system to React Native via NativeWind.

**Source:** HL's `tailwind.config.js`, `src/styles/themes.css`, `contextual-themes.css`, `fantasy-styles.css`, `animations.css`, `OrnatePanel.jsx`

**Files:**
- `tailwind.config.js` — All HL custom colors (fantasy-gold #D4AF37, parchment #D2B48C, ink #2C1810, blood-red #8B0000, mystic-purple #6B46C1, etc.), font families (Cinzel, LibreBaskerville)
- `global.css` — NativeWind Tailwind directives
- `src/theme/colors.ts` — Complete light mode (#FBF8F3 bg, #2D1B0E text, #1A237E primary, #B8860B secondary) + dark mode (#0A0A0F bg, #E8E3D3 text, #7C4DFF primary, #FFD700 secondary) color objects
- `src/theme/contextColors.ts` — Combat (red), Tavern (gold), Adventure (green), Manager (purple) accent themes
- `src/theme/fonts.ts` — expo-font config for Cinzel + Libre Baskerville
- `src/theme/shadows.ts` — RN shadow presets (fantasyGlow, magicPurple, fireRed, card, etc.)
- `src/theme/animations.ts` — Reanimated presets for 30+ HL animations (fadeIn, pulse, diceRoll, statIncrease, etc.)
- `src/hooks/useTheme.ts` — Hook reading theme mode from Redux, returning correct color set
- `assets/fonts/` — Cinzel + LibreBaskerville .ttf files (downloaded from Google Fonts)

### Step 4: Redux Store

**Files:**
- `src/store/store.ts` — configureStore with serializableCheck disabled (Firebase timestamps)
- `src/store/hooks.ts` — Typed `useAppDispatch`, `useAppSelector`
- `src/store/slices/authSlice.ts` — user, loading, error, isAuthenticated + async thunks (login, signup, Google, logout, resetPassword)
- `src/store/slices/charactersSlice.ts` — characters[], activeCharacter, loading, creationState + async thunks (fetch, create, update, delete)
- `src/store/slices/themeSlice.ts` — mode (light/dark), context (combat/tavern/etc.) + toggleTheme, setContext
- `src/store/slices/uiSlice.ts` — isLoading, activeModal, toasts
- `src/store/slices/combatSlice.ts` — Placeholder (Phase 2)
- `src/store/slices/campaignsSlice.ts` — Placeholder (Phase 3)
- `src/store/slices/notesSlice.ts` — Placeholder (Phase 3)

### Step 5: Firebase Config + Services

**Firebase setup:**
- `src/config/firebase.ts` — `initializeAuth` with `getReactNativePersistence(AsyncStorage)` (NOT web `getAuth`), Firestore, Storage exports

**Services (split: pure logic vs Firebase I/O):**
- `src/services/CharacterService.ts` — **Direct port from DS-AI.** createDefaultCharacter, validateCharacter, calculateAbilityModifiers, applyRacialModifiers, generateCharacterId, export/import JSON. Pure logic, no I/O.
- `src/services/AbilityScoreService.ts` — **Direct port from DS-AI.** Point buy (15/20/25/custom), dice rolling (3d6, 4d6 drop lowest, custom), statistics, ability modifier calculation.
- `src/services/ValidationService.ts` — **Direct port from DS-AI.** All validation (ability scores, point buy, rolled stats, character name, race/class combo, dice formula).
- `src/services/EquipmentService.ts` — **Direct port from DS-AI.** Add/remove/equip items, bonus calc, encumbrance.
- `src/services/EquipmentDatabaseService.ts` — **Direct port from DS-AI.** Weapon/armor/shield/gear database.
- `src/services/FirebaseAuthService.ts` — **NEW, patterns from HL.** signUp, login, Google (via expo-auth-session), logout, resetPassword, createUserProfile.
- `src/services/FirebaseCharacterService.ts` — **NEW, merges HL Firestore CRUD + DS-AI validation.** create (validates then saves), getUserCharacters, getCharacter, update, delete. Handles Map<->Record serialization for equippedSlots.

**Security:**
- `firestore.rules` — Port from HL + character ownership rules (userId == auth.uid)

### Step 6: Navigation (Expo Router)

```
app/
├── _layout.tsx              # Root: Redux Provider + font loading + splash
├── index.tsx                # Auth check → redirect to (auth) or (tabs)
├── (auth)/
│   ├── _layout.tsx          # Stack layout
│   ├── login.tsx            # Email + Google sign-in
│   ├── signup.tsx
│   └── reset-password.tsx
└── (tabs)/
    ├── _layout.tsx          # 4 tabs: Characters, Combat, Campaigns, Settings
    ├── characters/
    │   ├── _layout.tsx      # Stack
    │   ├── index.tsx        # Character list (FlatList of CharacterCards)
    │   ├── create.tsx       # 5-step creation wizard
    │   └── [id]/
    │       ├── index.tsx    # Character detail (tabbed: Overview/Abilities/Combat/Skills/Equipment)
    │       └── edit.tsx     # Edit character
    ├── combat/
    │   ├── _layout.tsx
    │   └── index.tsx        # "Coming in Phase 2" placeholder
    ├── campaigns/
    │   ├── _layout.tsx
    │   └── index.tsx        # "Coming in Phase 3" placeholder
    └── settings/
        └── index.tsx        # Theme toggle, profile, logout
```

### Step 7: Shared UI Components

**Fantasy UI (ported from HL's OrnatePanel.jsx → React Native):**
- `src/components/ui/OrnatePanel.tsx` — LinearGradient gold/bronze borders, corner decorations, variant (default/dark/parchment)
- `src/components/ui/OrnateButton.tsx` — Gradient button with Pressable + scale animation (primary/secondary/danger)
- `src/components/ui/OrnateTab.tsx` — Tab bar with gold active state
- `src/components/ui/OrnateStatInput.tsx` — Number input with +/- buttons + modifier display
- `src/components/ui/FantasyCard.tsx` — Parchment-textured card with context-colored left border
- `src/components/ui/FantasyDivider.tsx` — Ornate divider with center symbol
- `src/components/ui/FantasyTextInput.tsx` — Text input with gold focus border
- `src/components/ui/LoadingSpinner.tsx` — Fantasy-themed loading
- `src/components/ui/Toast.tsx` — Slide-in toast notifications

**Character components (DS-AI logic + HL styling):**
- `src/components/character/RaceSelector.tsx` — DS-AI logic, OrnatePanel style. 7 core races, flexible ability choice for Human/Half-Elf/Half-Orc
- `src/components/character/ClassSelector.tsx` — DS-AI logic, OrnatePanel style. 11 classes with feature/progression preview
- `src/components/character/AbilityScoreEditor.tsx` — 6 generation methods with OrnateStatInput
- `src/components/character/CharacterCard.tsx` — Summary card for character list
- `src/components/character/CharacterDetailTabs.tsx` — Tabbed detail view (OrnateTab)

**Auth:**
- `src/components/auth/AuthForm.tsx` — Shared form for login/signup with OrnatePanel wrapper

**Utility:**
- `src/components/ErrorBoundary.tsx` — From DS-AI with fantasy styling

### Step 8: Game Data

**Data (direct ports from DS-AI):**
- `src/data/races.ts` — 7 core races (Human, Dwarf, Elf, Gnome, Half-Elf, Half-Orc, Halfling) with traits, modifiers, languages
- `src/data/classes.ts` — 11 core classes (Fighter, Cleric, Rogue, Wizard, Barbarian, Bard, Druid, Monk, Paladin, Ranger, Sorcerer) with progressions, features, skills

### Step 9: Testing (Full Coverage + E2E)

**Additional testing dependencies:**
```bash
npm install --save-dev @testing-library/react-native @testing-library/jest-native
npm install --save-dev maestro  # or use Detox for E2E
npx expo install expo-dev-client  # needed for E2E testing on device
```

**Testing layers:**

#### Layer 1: Service Unit Tests (ported from DS-AI — 1,375+ lines)
- `__tests__/services/CharacterService.test.ts` — creation, validation, racial modifiers, JSON export/import (port DS-AI's 338-line suite)
- `__tests__/services/AbilityScoreService.test.ts` — point buy, dice rolling, custom formulas, statistics (port DS-AI's 229-line suite)
- `__tests__/services/ValidationService.test.ts` — all validation methods (port DS-AI's 377-line suite)
- `__tests__/services/EquipmentService.test.ts` — add/remove/equip, bonus stacking, encumbrance, range (port DS-AI's 432-line suite)
- `__tests__/services/FirebaseAuthService.test.ts` — NEW. Mock Firebase auth, test signup/login/logout/Google flows
- `__tests__/services/FirebaseCharacterService.test.ts` — NEW. Mock Firestore, test CRUD, Map serialization, userId scoping

**Test helpers to port from DS-AI:**
- `createMockCharacter()` fixture builder
- `createMockAbilityScores()` fixture builder
- `makeRace()` test helper

#### Layer 2: Redux Store Tests
- `__tests__/store/authSlice.test.ts` — reducers + async thunks (mock FirebaseAuthService)
- `__tests__/store/charactersSlice.test.ts` — reducers + async thunks (mock FirebaseCharacterService)
- `__tests__/store/themeSlice.test.ts` — toggle, set mode, set context
- `__tests__/store/uiSlice.test.ts` — modal, toast, loading state

#### Layer 3: Integration Tests (ported from DS-AI — 662+ lines)
- `__tests__/integration/CharacterCRUD.test.ts` — full create → save → load → update → delete lifecycle (port DS-AI's 291-line suite, adapt for Firebase mocks)
- `__tests__/integration/EquipmentManagement.test.ts` — armor sets, magic weapons, slot conflicts, encumbrance (port DS-AI's 371-line suite)
- `__tests__/integration/CharacterCreationFlow.test.ts` — NEW. Tests the full creation wizard flow: basic info → race → class → ability scores → review → persist

#### Layer 4: Component Tests
- `__tests__/components/ui/OrnatePanel.test.tsx` — renders variants, shows corners, title
- `__tests__/components/ui/OrnateButton.test.tsx` — renders variants, press handler, disabled state
- `__tests__/components/ui/OrnateStatInput.test.tsx` — increment/decrement, min/max bounds, modifier display
- `__tests__/components/ui/FantasyTextInput.test.tsx` — input, focus styling, validation display
- `__tests__/components/character/RaceSelector.test.tsx` — race list, selection, flexible ability choice, racial trait display
- `__tests__/components/character/ClassSelector.test.tsx` — class list, selection, feature/progression preview
- `__tests__/components/character/AbilityScoreEditor.test.tsx` — method switching, point buy controls, dice rolling, validation feedback
- `__tests__/components/character/CharacterCard.test.tsx` — renders summary, navigation on press
- `__tests__/components/auth/AuthForm.test.tsx` — form validation, submit, error display

#### Layer 5: E2E Tests (Maestro)
E2E tests for critical user flows using Maestro (YAML-based, no code, works with Expo):

- `e2e/auth_flow.yaml` — Sign up → verify logged in → log out → log in
- `e2e/character_creation.yaml` — Log in → create character (point buy) → verify in list → view detail
- `e2e/character_management.yaml` — Edit character → delete character → verify removed
- `e2e/theme_toggle.yaml` — Toggle dark/light mode → verify visual change

**Maestro setup:**
```bash
# Install Maestro CLI
curl -Ls "https://get.maestro.mobile.dev" | bash

# Run E2E tests
maestro test e2e/
```

**Test infrastructure files:**
- `jest.config.js` — Jest config for TS + React Native + path aliases
- `jest.setup.ts` — Global test setup (mock AsyncStorage, Firebase, etc.)
- `__tests__/fixtures/` — Shared test fixture builders (createMockCharacter, createMockAbilityScores, etc.)
- `__tests__/mocks/firebase.ts` — Firebase mock (auth, Firestore, storage)
- `e2e/` — Maestro E2E test directory

**Coverage targets:**
- Services: 90%+ line coverage
- Redux slices: 90%+ line coverage
- Components: 80%+ line coverage
- Integration: Critical paths covered
- E2E: 4 core user flows

---

### Step 10: CI/CD Pipeline (GitHub Actions + EAS)

**Two environments:** Staging and Production, each with its own Firebase project.

**GitHub Actions workflows:**

1. **`.github/workflows/ci.yml`** — Runs on every PR to `main`:
   ```yaml
   - Checkout
   - Node 18 setup + npm ci
   - TypeScript check: npx tsc --noEmit
   - Lint: npm run lint
   - Unit + integration tests: npm test -- --coverage
   - Upload coverage report as artifact
   - Fail PR if coverage drops below thresholds
   ```

2. **`.github/workflows/build-staging.yml`** — Runs on merge to `main`:
   ```yaml
   - Checkout
   - Install EAS CLI
   - Build staging: eas build --platform all --profile staging --non-interactive
   - Deploy staging Firebase rules: firebase deploy --only firestore:rules --project staging
   ```

3. **`.github/workflows/build-production.yml`** — Runs on release tag (`v*`):
   ```yaml
   - Checkout
   - Build production: eas build --platform all --profile production --non-interactive
   - Submit to stores: eas submit --platform all --profile production
   ```

**EAS configuration (`eas.json`):**
```json
{
  "cli": { "version": ">= 3.0.0" },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "env": { "APP_ENV": "development" }
    },
    "staging": {
      "distribution": "internal",
      "env": { "APP_ENV": "staging" },
      "channel": "staging"
    },
    "production": {
      "env": { "APP_ENV": "production" },
      "channel": "production",
      "autoIncrement": true
    }
  },
  "submit": {
    "production": {
      "ios": { "appleId": "<your-apple-id>", "ascAppId": "<asc-app-id>" },
      "android": { "serviceAccountKeyPath": "./google-services-key.json" }
    }
  }
}
```

**Environment config (`src/config/environment.ts`):**
```typescript
const ENV = {
  development: { firebaseConfig: { /* dev/local */ }, apiUrl: 'http://localhost' },
  staging: { firebaseConfig: { /* staging project */ }, apiUrl: 'https://staging.example.com' },
  production: { firebaseConfig: { /* production project */ }, apiUrl: 'https://api.example.com' },
};
export const config = ENV[process.env.APP_ENV || 'development'];
```

### Step 11: Firebase Setup (Two Projects + Emulators)

**Create two Firebase projects:**
1. `dungeon-scribe-ai-staging` — for dev/staging
2. `dungeon-scribe-ai-prod` — for production

**For each project, enable:**
- Authentication (Email/Password, Google, Apple)
- Cloud Firestore
- Firebase Storage
- Firebase Hosting (optional, for web builds)

**Firebase emulators for local development:**
```bash
npm install -g firebase-tools
firebase init emulators  # select Auth + Firestore + Storage
```

**`firebase.json`** additions:
```json
{
  "emulators": {
    "auth": { "port": 9099 },
    "firestore": { "port": 8080 },
    "storage": { "port": 9199 },
    "ui": { "enabled": true, "port": 4000 }
  }
}
```

**`src/config/firebase.ts`** — conditional emulator connection:
```typescript
if (__DEV__) {
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectFirestoreEmulator(db, 'localhost', 8080);
  connectStorageEmulator(storage, 'localhost', 9199);
}
```

**NPM scripts:**
```json
{
  "emulators": "firebase emulators:start",
  "emulators:seed": "firebase emulators:start --import=./firebase-seed",
  "emulators:export": "firebase emulators:export ./firebase-seed"
}
```

### Step 12: Security & OAuth Setup

**Authentication methods:** Email/Password + Google Sign-In + Apple Sign-In

#### Google OAuth Setup (step-by-step):

1. **Google Cloud Console** (console.cloud.google.com):
   - Create project (or use Firebase's auto-created project)
   - Navigate to "APIs & Services" → "OAuth consent screen"
   - Configure: App name, support email, authorized domains
   - Set to "External" (testing mode initially, publish when ready)

2. **Create OAuth 2.0 Client IDs** (APIs & Services → Credentials):
   - **Web client:** Authorized redirect URI = `https://auth.expo.io/@your-username/dungeon-scribe-ai`
   - **iOS client:** Bundle ID = `com.markwillisford.dungeonscribeai`
   - **Android client:** Package name = `com.markwillisford.dungeonscribeai`, SHA-1 = (get from `eas credentials`)

3. **Firebase Console** (console.firebase.google.com):
   - Authentication → Sign-in method → Enable Google
   - It will auto-link to your Google Cloud OAuth config
   - Copy the Web Client ID — needed in the app

4. **In the app** — use `expo-auth-session` with Google provider:
   ```typescript
   import * as Google from 'expo-auth-session/providers/google';

   const [request, response, promptAsync] = Google.useAuthRequest({
     expoClientId: '<web-client-id>',
     iosClientId: '<ios-client-id>',
     androidClientId: '<android-client-id>',
   });
   ```

5. **Environment variables** (per environment):
   ```
   EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=xxx.apps.googleusercontent.com
   EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID=xxx.apps.googleusercontent.com
   EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID=xxx.apps.googleusercontent.com
   ```

#### Apple Sign-In Setup (step-by-step):

1. **Apple Developer Account** (developer.apple.com):
   - Certificates, Identifiers & Profiles → Identifiers
   - Create App ID with "Sign In with Apple" capability enabled
   - Bundle ID: `com.markwillisford.dungeonscribeai`

2. **Create Service ID** (for web/Expo):
   - Identifiers → Service IDs → New
   - Enable "Sign In with Apple"
   - Configure domains and redirect URLs

3. **Firebase Console:**
   - Authentication → Sign-in method → Enable Apple
   - Add Service ID and team information

4. **In the app** — use `expo-apple-authentication`:
   ```bash
   npx expo install expo-apple-authentication
   ```
   ```typescript
   import * as AppleAuthentication from 'expo-apple-authentication';
   // Apple Sign-In button + credential exchange with Firebase
   ```

5. **Important:** Apple Sign-In is only available on iOS 13+ and requires a paid Apple Developer account ($99/year). On Android/web, it works via web-based OAuth redirect.

#### Security rules checklist:
- Firestore rules enforce userId ownership on all character operations
- Campaign rules enforce member-only access, DM-only writes
- Notes visibility rules (personal/shared/dm)
- Rate limiting via Firebase App Check (optional but recommended for production)
- No sensitive data in client-side code (API keys are restricted by platform)

### Step 13: Code Quality

**ESLint + Prettier:**
- `.eslintrc.js` — extends `@react-native`, adds TypeScript rules, import ordering
- `.prettierrc` — consistent formatting (single quotes, trailing commas, 100 char width)
- `npm run lint` / `npm run lint:fix` scripts

**Husky + lint-staged (pre-commit hooks):**
```bash
npm install --save-dev husky lint-staged
npx husky init
```
- `.husky/pre-commit` → runs `npx lint-staged`
- `lint-staged` config in package.json:
  ```json
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md}": ["prettier --write"]
  }
  ```

**TypeScript strict mode:**
- `tsconfig.json` with `"strict": true`
- `npx tsc --noEmit` in CI pipeline

**PR template (`.github/pull_request_template.md`):**
```markdown
## Summary
<!-- What does this PR do? -->

## Type
- [ ] Feature
- [ ] Bug fix
- [ ] Refactor
- [ ] Tests

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] E2E tests pass

## Screenshots (if UI changes)
```

### Step 14: Accessibility

**Standards:** WCAG 2.1 AA compliance target

**Implementation:**
- All interactive elements: `accessibilityRole`, `accessibilityLabel`, `accessibilityHint`
- DS-AI already has good a11y labels — carry forward that pattern
- Minimum touch targets: 44x44pt (already in DS-AI)
- Color contrast: verify all theme colors meet 4.5:1 ratio (text) / 3:1 (large text)
- Screen reader support: test with VoiceOver (iOS) and TalkBack (Android)
- Reduced motion: respect `useReducedMotion()` from Reanimated — disable animations when system setting is on
- Font scaling: support dynamic type sizes (don't use fixed pixel sizes for text)

**A11y testing:**
- Add `@testing-library/react-native` a11y queries in component tests (`getByRole`, `getByLabelText`)
- Manual testing checklist with VoiceOver/TalkBack for each screen

### Step 15: Documentation

- **`CLAUDE.md`** — Development guidelines: branch naming (`MW/`), test commands, project structure, no "Generated with Claude" in commits, architecture overview
- **`README.md`** — Project overview, setup instructions, environment configuration, running locally, running tests, deployment
- **`.env.example`** — All required env vars with placeholder values and comments

### Step 16: App Store Preparation (Partial — Complete Later)

**Now (during scaffold):**
- `app.json` — correct bundle ID (`com.markwillisford.dungeonscribeai`), version `1.1.0`, orientation, icon/splash config placeholders
- `eas.json` — build profiles for dev/staging/production

**Later (before submission):**
- App icon (1024x1024) — fantasy-themed
- Splash screen — branded loading screen
- App Store screenshots (6.7", 6.5", 12.9" iPad)
- App Store description and metadata
- Privacy policy URL (required)
- Apple Developer account enrollment
- Google Play Developer account enrollment ($25 one-time)

---

## Implementation Order

0. GitHub repo + .gitignore + initial commit + PR template
1. Project init + all deps + config (jest, eslint, prettier, husky, lint-staged, eas.json)
2. Firebase projects setup (staging + prod) + emulator config + OAuth credentials
3. Types (all `src/types/`) — verify with `tsc --noEmit`
4. Theme (`src/theme/` + fonts + tailwind config) with a11y color contrast verification
5. Store (`src/store/`) + store unit tests
6. Firebase config (`src/config/firebase.ts` + `environment.ts` + emulator connection)
7. Services (all `src/services/`) + service unit tests (port DS-AI's 1,375+ lines + new Firebase tests)
8. Game data (`src/data/`)
9. Hooks (`src/hooks/`)
10. UI components (`src/components/ui/`) + component tests (with a11y queries)
11. Auth screens (`app/(auth)/` — Email + Google + Apple) + auth component tests
12. Root layout + navigation
13. Character list screen + CharacterCard tests
14. Character creation wizard + AbilityScoreEditor/RaceSelector/ClassSelector tests
15. Character detail/edit screens
16. Settings screen
17. Placeholder screens (Combat, Campaigns)
18. Integration tests (CharacterCRUD, EquipmentManagement, CreationFlow)
19. E2E tests (Maestro: auth flow, character creation, management, theme)
20. CI/CD pipelines (GitHub Actions: ci.yml, build-staging.yml, build-production.yml)
21. Firestore rules (staging + prod)
22. Documentation (CLAUDE.md, README.md)

---

## Phases 2-4 Roadmap (Future)

### Phase 2: Combat System
- Playsheet UI (attacks, defense, saves, iterative attacks, two-weapon fighting, haste)
- Buff system with HL's stacking engine (dodge/untyped stack, typed take highest), library, packages
- Combat abilities (Power Attack, Rage, etc.) with toggles, variable inputs, mutual exclusion
- HP tracker (current/max/temp, non-lethal, negative levels at -5 HP / -1 rolls each)
- Dice roller (multi-dice groups, modifier auto-apply, roll history, statistics)
- Combat stats calculator with full bonus breakdown

### Phase 3: Campaigns & Social
- Campaign CRUD with invite codes
- DM/player roles with permission rules
- Notes system (shared/personal/DM, tags, attachments, reactions, edit history)
- Real-time Firestore sync (onSnapshot)
- Bestiary with creature templates

### Phase 4: Advanced
- Spell management UI (spells per day, prepared spells, DCs)
- Condition tracking UI with automated effects
- Skill rank allocation per level
- Character import/export (JSON)
- PDF character sheet generation

---

## Key Design Decisions

- **Service layer split:** Pure business logic (CharacterService, from DS-AI) vs Firebase I/O (FirebaseCharacterService, from HL patterns). Keeps logic testable without mocking Firebase.
- **Type system is DS-AI's:** It's the comprehensive canonical model. HL features get new typed interfaces layered on top.
- **Map serialization:** Equipment.equippedSlots (Map) converts to Record for Firestore at the service layer. Types stay as-is.
- **Google auth on mobile:** Uses expo-auth-session (not web popup). Requires OAuth credentials in Firebase console.
- **Font loading:** Bundled .ttf via expo-font with splash screen until ready.
- **Enum casing:** Standardize to DS-AI's base.ts casing (Size.Medium, not Size.MEDIUM).

## Verification

After Phase 1 completion:
1. `npx tsc --noEmit` — zero type errors
2. `npm test` — all tests pass across all 5 layers:
   - Service unit tests (6 suites, ported from DS-AI + new Firebase tests)
   - Redux store tests (4 suites)
   - Integration tests (3 suites)
   - Component tests (9 suites)
   - Coverage: `npm test -- --coverage` meets targets (90% services/store, 80% components)
3. `maestro test e2e/` — all 4 E2E flows pass (auth, character creation, management, theme)
4. Manual: sign up → create character (point buy + dice rolling) → view character list → view detail → edit → delete → sign out
5. Verify Firestore: characters saved with correct userId, load on re-login
6. Theme: toggle dark/light mode, verify all colors apply correctly

## Critical Source Files

| File | Source | Purpose |
|---|---|---|
| DS-AI `src/types/*.ts` (all 12 files) | Port directly | Foundation type system |
| DS-AI `src/services/CharacterService.ts` | Port directly | Character creation/validation logic |
| DS-AI `src/services/AbilityScoreService.ts` | Port directly | Point buy + dice rolling |
| DS-AI `src/services/ValidationService.ts` | Port directly | All validation rules |
| DS-AI `src/data/races.ts`, `classes.ts` | Port directly | Game data |
| HL `tailwind.config.js` | Translate to NativeWind | Color palette + theme tokens |
| HL `src/styles/themes.css` | Translate to colors.ts | 200+ CSS vars → TS constants |
| HL `src/components/OrnatePanel.jsx` | Port to RN | Fantasy container components |
| HL `src/config/firebase.js` | Adapt for RN | Firebase init pattern |
| HL `src/services/characterService.js` | Port CRUD patterns | Firestore operations |
| HL `firestore.rules` | Port + extend | Security rules |
