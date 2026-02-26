# Dungeon Scribe AI 1.1 — Development Guidelines

## Overview

Pathfinder 1e character manager & combat tracker. React Native / Expo / Firebase.
Merges the best of Dungeon Scribe AI (types, services, character creation) and Hero's Ledger (combat, campaigns, fantasy theme).

## Branch Naming

`MW/{concise_descriptive_name}`
Examples: `MW/fix_ability_score_calc`, `MW/add_combat_tracker_screen`

## Commands

- **Start:** `npx expo start`
- **iOS:** `npm run ios`
- **Android:** `npm run android`
- **Web:** `npm run web`
- **Tests:** `npm test` (with coverage: `npm run test:coverage`)
- **Lint:** `npm run lint` / `npm run lint:fix`
- **Format:** `npm run format`
- **Type check:** `npm run typecheck`
- **Firebase emulators:** `npm run emulators`

## Project Structure

```
app/           — Expo Router screens (file-based routing)
src/
  types/       — TypeScript interfaces (Pathfinder data model)
  store/       — Redux Toolkit (slices, hooks)
  services/    — Business logic (pure) + Firebase I/O
  config/      — Firebase init, environment config
  theme/       — Colors, fonts, shadows, animations (HL visual port)
  data/        — Static game data (races, classes)
  components/  — Reusable UI components
  hooks/       — Custom React hooks
__tests__/     — Jest tests (services, store, components, integration)
e2e/           — Maestro E2E tests
```

## Architecture

- **Types:** DS-AI's comprehensive Pathfinder type system (30+ interfaces)
- **Services:** Pure logic (CharacterService, AbilityScoreService, ValidationService) + Firebase I/O (FirebaseAuthService, FirebaseCharacterService)
- **State:** Redux Toolkit with typed hooks
- **Navigation:** Expo Router (file-based, auth-gated)
- **Styling:** NativeWind (Tailwind for RN) with HL's fantasy theme
- **Backend:** Firebase (Auth + Firestore + Storage), two environments (staging + prod)

## Rules

- Never commit directly to main; use feature branches
- All tests must pass before merging
- Run `npm run typecheck` before committing
- Pre-commit hooks enforce lint + format via Husky + lint-staged
