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
- **Deploy rules:** `npm run firebase:deploy-rules`

## Project Structure

```
app/           — Expo Router screens (file-based routing)
src/
  types/       — TypeScript interfaces (Pathfinder data model)
  store/       — Redux Toolkit (slices, hooks)
  services/    — Business logic (pure) + Firebase I/O
  config/      — Firebase init, environment config
  theme/       — Colors, fonts, shadows, animations (HL visual port)
  data/        — SEEDING INFRASTRUCTURE ONLY — see "Data Architecture" below
  components/  — Reusable UI components
  hooks/       — Custom React hooks
__tests__/     — Jest tests (services, store, components, integration)
e2e/           — Maestro E2E tests
```

## Data Architecture

**`src/data/` is seeding infrastructure, not runtime code.** The TypeScript arrays in this directory (`ALL_FEATS`, `ALL_TRAITS`, etc.) exist solely to populate Firestore via the seed scripts in `scripts/db/`. They will be deleted once production seeding is complete. Do not modify them to fix bugs or add features.

**All runtime game data comes from Firestore**, accessed through `GameDataService` → `FirestoreGameDataConnector`. When diagnosing a data bug or adding a new data field, the correct files to look at are:

- `src/services/GameDataService.ts` — the public data access API
- `src/services/FirestoreGameDataConnector.ts` — the Firestore implementation
- `src/services/StaticGameDataConnector.ts` — test double only; imports `src/data/` by design

The only legitimate non-seeding imports from `src/data/` are:

- `StaticGameDataConnector.ts` — test isolation, intentional
- Type imports (interfaces, not data arrays) — always fine

## Architecture

- **Types:** DS-AI's comprehensive Pathfinder type system (30+ interfaces)
- **Services:** Pure logic (CharacterService, AbilityScoreService, ValidationService) + Firebase I/O (FirebaseAuthService, FirebaseCharacterService)
- **State:** Redux Toolkit with typed hooks
- **Navigation:** Expo Router (file-based, auth-gated)
- **Styling:** NativeWind (Tailwind for RN) with HL's fantasy theme
- **Backend:** Firebase (Auth + Firestore + Storage), two environments (staging + prod)

## Working Directory (WSL)

`$PROJ_DIR` is set at session start to the project root:
`/home/markw/dungeon-scribe-ai`

## Session Start

At the start of every new session, run /prime before doing anything else.

## Rules

- Never commit directly to main; use feature branches
- All tests must pass before merging
- Run `npm run typecheck` before committing
- Pre-commit hooks enforce lint + format via Husky + lint-staged
- Never include `Co-Authored-By: Claude` in commit messages
- Never include `🤖 Generated with [Claude Code](https://claude.com/claude-code)` in PR descriptions or any other output

## Git Standard — Orient Before Acting

- Run `git status` and `git branch` before any git operation. Never assume what branch you're on or what's staged. Read the state first, every time.
- Check for worktrees with `git worktree list` if anything seems ambiguous — you may be in a secondary worktree pointing at a different branch than expected.
- Never commit directly to main/master. If on main, create a feature branch first. Ask Mark what branch naming convention the repo uses.
- Never push without confirming branch and remote tracking. `git status` shows this — check it before `git push`.
- When a new window opens, establish context before doing any work: current branch, uncommitted changes, remote status. This is the first action, not an afterthought.
- Uncommitted work from a prior session may exist. Check `git status` before starting. Don't assume a clean slate.
- Always commit and push before closing a session if changes were made. Untracked local changes don't survive context switches.
- Never force push without explicit instruction.
