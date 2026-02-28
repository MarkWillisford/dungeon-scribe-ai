# Dungeon Scribe AI

Pathfinder 1e character manager & combat tracker built with React Native, Expo, and Firebase.

This project merges the best of two earlier apps: **Dungeon Scribe AI** (comprehensive Pathfinder type system, service layer, character creation) and **Hero's Ledger** (working combat tracker, campaign management, fantasy visual theme, Firebase backend) into a single modern TypeScript codebase.

## Tech Stack

- **TypeScript** -- strict mode, path aliases (`@/*`)
- **React Native** (Expo SDK 55)
- **Expo Router** -- file-based navigation with auth gating
- **Redux Toolkit** -- global state with typed hooks
- **Firebase** -- Auth, Firestore, Storage (staging + production environments)
- **NativeWind** -- Tailwind CSS for React Native
- **React Native Reanimated** -- animations and gestures

## Prerequisites

- Node.js 20+
- npm
- Expo CLI (`npx expo`)
- Firebase CLI (for local emulators): `npm install -g firebase-tools`

## Getting Started

```bash
# Clone the repo
git clone git@github.com:MarkWillisford/dungeon-scribe-ai.git
cd "Dungeon Scribe AI 1.1"

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your Firebase config values in .env

# Start the dev server
npx expo start
```

## Available Scripts

| Command                  | Description                    |
| ------------------------ | ------------------------------ |
| `npm start`              | Start Expo dev server          |
| `npm run ios`            | Start on iOS simulator         |
| `npm run android`        | Start on Android emulator      |
| `npm run web`            | Start in web browser           |
| `npm test`               | Run Jest test suite            |
| `npm run test:coverage`  | Run tests with coverage report |
| `npm run lint`           | Lint with ESLint               |
| `npm run lint:fix`       | Lint and auto-fix              |
| `npm run format`         | Format with Prettier           |
| `npm run typecheck`      | TypeScript type checking       |
| `npm run emulators`      | Start Firebase emulators       |
| `npm run emulators:seed` | Start emulators with seed data |

## Project Structure

```
app/            Expo Router screens (file-based routing)
src/
  types/        TypeScript interfaces (Pathfinder data model, 30+ interfaces)
  store/        Redux Toolkit slices and typed hooks
  services/     Business logic (pure) + Firebase I/O
  config/       Firebase initialization, environment config
  theme/        Colors, fonts, shadows, animations (Hero's Ledger visual port)
  data/         Static game data (races, classes, skills)
  components/   Reusable UI components
  hooks/        Custom React hooks
__tests__/      Jest tests (services, store, components, integration)
e2e/            Maestro E2E tests
```

## Testing

```bash
npm test
```

The test suite is organized into three layers:

- **Service unit tests** -- pure logic functions (character calculations, ability scores, validation)
- **Component tests** -- React Native component rendering and interaction
- **Integration tests** -- Redux store + service layer working together

Current count: **351 tests**.

All tests must pass before merging. Pre-commit hooks enforce linting and formatting via Husky + lint-staged.

## Architecture

- **Service layer split:** Pure logic services (CharacterService, AbilityScoreService, ValidationService) are separated from Firebase I/O services (FirebaseAuthService, FirebaseCharacterService). This keeps business logic testable without mocking Firebase.
- **State management:** Redux Toolkit with typed hooks (`useAppSelector`, `useAppDispatch`). Async operations use RTK thunks that call into the service layer.
- **Routing:** Expo Router provides file-based navigation. Routes are auth-gated so unauthenticated users are redirected to sign-in.
- **Styling:** NativeWind (Tailwind for RN) with Hero's Ledger's fantasy theme -- custom colors (fantasy-gold, parchment, ink), Cinzel + Libre Baskerville fonts, contextual color schemes for combat, tavern, adventure, and manager views.

## Deployment

The project uses EAS Build with three profiles:

- **development** -- internal builds with dev client
- **staging** -- staging Firebase environment for QA
- **production** -- production Firebase environment for release

## Phase Roadmap

- **Phase 1 (current):** Scaffold + Character Management -- project init, type system, theme, Redux store, Firebase config, navigation, UI components, game data
- **Phase 2:** Combat System -- initiative tracker, turn management, HP/condition tracking, combat log
- **Phase 3:** Campaigns & Social -- campaign creation, player invites, shared character sheets, session notes
- **Phase 4:** Advanced Features -- buff/debuff stacking, spell tracking, advanced rule automation
