# Dungeon Scribe AI 1.1 — Implementation Plan

## Status (as of 2026-04-22)

All Phase 1 scaffold steps (0–10) are **COMPLETE**. The project has grown significantly beyond the original plan through additional phases.

| Step | Description                  | Status                                                                                                                                                                                      |
| ---- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0    | GitHub repo setup            | **COMPLETE**                                                                                                                                                                                |
| 1    | Project initialization       | **COMPLETE**                                                                                                                                                                                |
| 2    | Type system                  | **COMPLETE** + extended (PR #1, #4)                                                                                                                                                         |
| 3    | Theme system                 | **COMPLETE**                                                                                                                                                                                |
| 4    | Redux store                  | **COMPLETE** + `characterEntrySlice` added (PR #12)                                                                                                                                         |
| 5    | Firebase config + services   | **COMPLETE**                                                                                                                                                                                |
| 6    | Navigation (Expo Router)     | **COMPLETE** + `entry.tsx` added (PR #12)                                                                                                                                                   |
| 7    | Shared UI components         | **COMPLETE** + 18 direct-entry components (PR #12) + `ValidationReportSheet` (PR #50)                                                                                                       |
| 8    | Game data                    | **COMPLETE** + massively extended (races, classes, archetypes, feats, traits, spells, templates, domains, rage powers, rogue talents, animal companions, deities, class choice definitions) |
| 9    | Testing                      | **COMPLETE** — 900+ tests, all thresholds passing (count grows with each feature PR)                                                                                                        |
| 10   | CI/CD (GitHub Actions + EAS) | **COMPLETE** — `ci.yml`, `build-staging.yml`, `build-production.yml`                                                                                                                        |

### Currently in flight

| Work                                                                                                                                   | Plan                                      | Status                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ruleset system** (types, presets, service, Redux)                                                                                    | `ruleset-system.md`                       | **COMPLETE** — PR #49 (merged)                                                                                                                       |
| **Draft Validation System** (`DraftStateResolver`, `DraftValidationService`, `ValidationReportSheet`)                                  | `draft-validation-system.md`              | **COMPLETE** — PR #50 (merged)                                                                                                                       |
| **Source normalization** (`normalizeSource`, `GameDataSource`, wired into all seed scripts)                                            | —                                         | **COMPLETE** — PR #55 (merged)                                                                                                                       |
| Magic items — types + equipment cleanup (PR 1)                                                                                         | `magic-items.md`                          | **COMPLETE** — PR #23 (merged)                                                                                                                       |
| Magic items — data scraping (PR 2)                                                                                                     | `magic-items.md`                          | **COMPLETE** — Doug PRs #51–54 merged                                                                                                                |
| Feats expansion                                                                                                                        | `data-scraping/feats-traits-expansion.md` | **COMPLETE** — all PRs merged (~2,908 feats)                                                                                                         |
| Traits expansion                                                                                                                       | `data-scraping/feats-traits-expansion.md` | **COMPLETE** — merged (971/900+ traits)                                                                                                              |
| Class choices (all major classes)                                                                                                      | `data-scraping/class-choices-database.md` | **COMPLETE** — all PRs merged (#37–#46)                                                                                                              |
| `{chosen_deity}` token resolution in ClassChoiceRow                                                                                    | `data-scraping/class-choices-database.md` | **COMPLETE** — fixed in ClassChoiceRow                                                                                                               |
| `Effect.type` enum review                                                                                                              | `src/types/base.ts`                       | **COMPLETE** — PR #29 (merged)                                                                                                                       |
| **Data access layer Phase A** — `GameDataService` unified async API                                                                    | `data-access-layer.md`                    | **COMPLETE** — PR #58 (merged)                                                                                                                       |
| **Data access layer Phase B** — `GameDataConnector`, `FirestoreGameDataConnector`, `GameDataCache`                                     | `data-access-layer.md`                    | **COMPLETE** — PR #59 (merged)                                                                                                                       |
| **Data quality fields** — `verificationStatus` + `adminNotes` on all collection types                                                  | `data-quality-admin-review.md`            | **COMPLETE** — PR #57 (merged 2026-04-16); all 9 collection interfaces extend `DataQualityFields`; all ~13k seed entries default to `'needs_review'` |
| **Seeding** — all 38 official collections to Firestore staging                                                                         | `seeding-playbook.md`                     | **COMPLETE** — 10,962 docs, 36/36 verified (2026-04-14)                                                                                              |
| **Seeding** — 5 campaign prestige classes for Rissi                                                                                    | `seeding-playbook.md`                     | **COMPLETE** — PR #62; staging patched (2026-04-15)                                                                                                  |
| **Seeding** — production                                                                                                               | `seeding-playbook.md`                     | NOT STARTED                                                                                                                                          |
| **Admin role system** — Firebase Custom Claims, `AdminService`, Firestore rules                                                        | `admin-panel.md`                          | **COMPLETE** — PR #60 (merged)                                                                                                                       |
| **Admin panel Phase A** — nav shell, settings entry, role gate                                                                         | `admin-panel.md`                          | **COMPLETE** — PR #61 (merged 2026-04-16); role-gated `/admin` nav shell, Settings entry, Data Quality + Content placeholder cards                   |
| **Admin panel Phases B–E** — data quality, inline review, dashboard, custom content creation                                           | `admin-panel.md`                          | NOT STARTED                                                                                                                                          |
| Data quality + admin review system (superseded by admin-panel.md)                                                                      | `data-quality-admin-review.md`            | Superseded — see `admin-panel.md` Phases B–D                                                                                                         |
| **Spellcasting advancement redesign** — per-level target pointers, tradition locks, `atLevels` skip                                    | —                                         | **COMPLETE** — PR #90 (merged 2026-04-21); 18 advancers specced + seeded to staging; old enum model replaced                                         |
| **Seeding — archetypes** — 1,030 archetypes to Firestore staging                                                                       | `seeding-playbook.md`                     | **COMPLETE** — PR #91 (merged); `{className}-{archetypeName}` doc ID strategy                                                                        |
| **classChoiceDefinitions query fix** — corrects `classIds` → `className` field; all class choice pickers were silently returning empty | —                                         | **COMPLETE** — PR #92 (merged 2026-04-21)                                                                                                            |
| **Archetype picker** — `getArchetypesByClass`, `ArchetypePickerSheet`, wired into `ClassEntryCard`                                     | —                                         | **COMPLETE** — PR #93 (merged 2026-04-21)                                                                                                            |
| **Ruleset selector UI** — Identity tab Ruleset row, `RulesetSettingsSheet`, preset picker + inline customization, `patchActiveRuleset` | —                                         | **COMPLETE** — PR #97 (merged 2026-04-21)                                                                                                            |
| **new-worktree skill + scripts** — `scripts/new-worktree.sh`, audit and fix scripts, Claude skill                                      | —                                         | **COMPLETE** — PR #99 (merged 2026-04-21)                                                                                                            |
| **self-review skill** — multi-agent inline PR review, fixes at score ≥ 50, one commit per fix                                          | —                                         | **COMPLETE** — PR #102 (merged 2026-04-21)                                                                                                           |
| **Issue #72 skills-tab fixes** — `SpecialtyGroup` component for Craft/Profession free-text specialties, initiating gating, skill tests | —                                         | **COMPLETE** — PR #100 (merged 2026-04-22)                                                                                                           |
| **Issue #72 classes + template fixes** — favored class selection/steppers, drag-to-reorder multiclass, template picker improvements    | —                                         | **COMPLETE** — PR #101 (merged 2026-04-22)                                                                                                           |
| **Typed ability score bonuses + equipment enhancement sync** — `DraftTypedBonus[]`, stacking rules, enhancement auto-sync              | —                                         | **IN REVIEW** — PR #98 open; CI green after merge from main (2026-04-22)                                                                             |
| **Eidolon Evolution Pool** — dedicated pool manager UI for summoner eidolon evolutions                                                 | —                                         | **IN PROGRESS** — branch `MW/eidolon-evolution-pool`; slice reducers done                                                                            |
| Enter Rissi — validate model end-to-end                                                                                                | —                                         | NOT STARTED                                                                                                                                          |

#### Note: Campaign content seeding — campaignId deferred (2026-04-15)

`scripts/db/seedCampaignContent.ts` seeded 5 prestige classes (hathran, dweomerkeeper, radiant-servant-of-milani, prestige-paladin, nemesis) to staging. PR #62 fixed the three post-seed issues:

1. **`CAMPAIGN_ID` placeholder** — script now requires `--campaign-id <id>` and fails hard without it. The 5 live class docs have `campaignId: 'FIXME-campaign-id'` (unchanged) and `visibility: 'global'` (temporary playtest workaround). Once a campaign document exists in Firestore, run `patchCampaignContent.ts --campaign-id <real-id>` to set the correct ID and revert visibility to `'campaign'`.

2. **Radiant Servant name/identifier mismatch** — `radiantServant.ts` `className` corrected from `'radiant-servant'` to `'radiant servant'`; Firestore doc patched. The fixture uses `'Radiant Servant'` (lowercases to `'radiant servant'`) — all three now agree.

3. **Prestige Paladin missing `ClassChoiceDefinition` entries** — `prestigePaladin.ts` created with Turn Undead/Channel Energy, Divine Bond, Mercy, and Weapon Training definitions. Seeded to Firestore staging.

#### Note: Ruleset UI — character selector SHIPPED; campaign DM UI still out of scope

The **character-level ruleset selector** is complete (PR #97): the Identity tab has a Ruleset row that opens `RulesetSettingsSheet`, letting users pick a preset (PF1e Standard, Society Play, Go Nuts) or customize any setting inline. The **DM-side UI for creating/managing campaign rulesets** remains out of scope until campaign management screens are built in a later phase.

#### Note: `Effect.type` enum — COMPLETE (PR #29)

`Effect.type` and `Effect.target` were locked down in PR #29 (merged). Valid values: `'bonus' | 'special' | 'damage' | 'resistance' | 'penalty' | 'custom'`.

#### Note: Race/class-specific favored class bonuses (APG) — data absent (2026-04-20)

The APG introduced per-race, per-class favored class bonus options (e.g., "Dwarf Fighter: +1/4 DR/–"). The data model currently supports only the universal HP/skill-rank choice. No race+class FCB option data exists anywhere in the codebase — not in static files, not seeded, not typed. The direct-entry UI ships HP/skill-rank only for now. Before the "Enter Rissi" milestone or any character that uses an APG FCB, this gap must be addressed: scrape/add FCB option data per race+class combination, extend `DraftClassEntry.favoredClassBonuses` to support alternate bonus types, and update the ClassEntryCard picker accordingly.

#### Note: Test suite needs memory / mock audit (2026-04-16)

Running `npm test` unbounded kills the WSL2 VM; even at `--maxWorkers=2` we see six suites SIGTERMed mid-run (`authSlice`, `rulesetSlice`, `normalizeSource`, `FeatRegistryService`, `HPTracker`, `OrnateStatInput`). `jest.config.js` now caps workers at 2 locally (CI unaffected) as a stopgap — but the underlying problem is likely memory bleed between tests or bloated mocks holding too much in scope. Needs a dedicated pass: audit global mocks (`jest.setup.ts`, `jest.setup.components.ts`), check for tests that import full data files (`src/data/feats/*` is large), and add `workerIdleMemoryLimit` if leaks are confirmed. Tracked as a GitHub issue. This will only get worse as the suite grows.

---

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

**Config files:** `app.json` (v1.1.0), `babel.config.js` (NativeWind + Reanimated plugins), `tsconfig.json` (strict, path aliases `@/*`), `metro.config.js`, `.env.example` (EXPO*PUBLIC_FIREBASE*\*), `jest.config.js`, `CLAUDE.md`

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

**Known issue — full-suite OOM in WSL worktrees:**

Running `npm test -- --maxWorkers=1` across all suites in sequence exhausts the Node heap (confirmed pre-Phase-A, not caused by any specific PR). The static game data (2,500+ feats, all classes, races, etc.) accumulates in memory across suites in one process and eventually causes `FATAL ERROR: Reached heap limit Allocation failed`. Individual suites run fine.

Options to investigate:

- `--workerThreads` flag (Jest 29+) — threads share memory differently than processes
- `--logHeapUsage` to identify which suite tips the balance
- Splitting the Jest config into two projects (services vs. components) so they run in separate processes with independent heaps
- `--maxWorkers=2` with `--isolateModules` to force module teardown between suites
- Raising the Node heap limit via `NODE_OPTIONS=--max-old-space-size=4096` in the test script

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
  development: {
    firebaseConfig: {
      /* dev/local */
    },
    apiUrl: 'http://localhost',
  },
  staging: {
    firebaseConfig: {
      /* staging project */
    },
    apiUrl: 'https://staging.example.com',
  },
  production: {
    firebaseConfig: {
      /* production project */
    },
    apiUrl: 'https://api.example.com',
  },
};
export const config = ENV[process.env.APP_ENV || 'development'];
```

### Step 11: Firebase Setup (Two Projects — Staging + Production)

**Create two Firebase projects:**

1. `dungeon-scribe-ai-staging` — for dev/staging
2. `dungeon-scribe-ai-prod` — for production

**For each project, enable:**

- Authentication (Email/Password, Google, Apple)
- Cloud Firestore
- Firebase Storage

**Setup:** Run `bash scripts/firebase-setup.sh` interactively. It walks through project creation, service enabling, config extraction, and rule deployment.

**Configuration files:**

- `firebase.json` — Points to `firestore.rules`, `firestore.indexes.json`, `storage.rules`
- `.firebaserc` — Project aliases (`staging` → `dungeon-scribe-ai-staging`, `production` → `dungeon-scribe-ai-prod`)
- `.env` — Firebase web app config values (copied from `.env.example`, filled in from Firebase Console)

**Deploy rules:** `npm run firebase:deploy-rules`

**Decision:** No local emulators — develop directly against the staging Firebase project. Simpler setup, no Java dependency.

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

- [x] 0. GitHub repo + .gitignore + initial commit + PR template — `130fe8f`
- [x] 1. Project init + all deps + config (jest, eslint, prettier, husky, lint-staged, eas.json) — `8145fd1`
- [x] 2. Firebase projects setup (staging + prod) + security rules + setup script — `999903a`, `397c0dc`
- [x] 3. Types (all `src/types/`) — verify with `tsc --noEmit` — `0161a70`
- [x] 4. Theme (`src/theme/` + fonts + tailwind config) — `0161a70`
- [x] 5. Store (`src/store/`) + store unit tests — `0161a70`
- [x] 6. Firebase config (`src/config/firebase.ts` + `environment.ts`) — `0161a70`
- [x] 7. Services (all `src/services/`) + service unit tests — `9d35cce`
- [x] 8. Game data (`src/data/`) — `9d35cce`
- [x] 9. Hooks (`src/hooks/`) — `c07d21f`
- [x] 10. UI components (`src/components/ui/`) + component tests — `c07d21f`
- [x] 11. Auth screens (`app/(auth)/`) + auth component tests — `c07d21f`, `810a4b5`
- [x] 12. Root layout + navigation — `810a4b5`
- [x] 13. Character list screen + CharacterCard tests — `810a4b5`, `c07d21f`
- [x] 14. Character creation wizard + AbilityScoreEditor/RaceSelector/ClassSelector tests — `810a4b5`, `c07d21f`
- [x] 15. Character detail/edit screens — `810a4b5`
- [x] 16. Settings screen — `810a4b5`
- [x] 17. Placeholder screens (Combat, Campaigns) — `810a4b5`
- [x] 18. Integration tests (CharacterCRUD, EquipmentManagement, CreationFlow) — `7db606a`
- [ ] 19. E2E tests (deferred — requires running app on device/emulator)
- [x] 20. CI/CD pipelines (GitHub Actions: ci.yml, build-staging.yml, build-production.yml) — `4339bab`
- [x] 21. Firestore + Storage security rules — `9d35cce`, `999903a`
- [x] 22. Documentation (CLAUDE.md, README.md) — `4339bab`

---

## Phases 2-4 Roadmap

### Phase 2: Combat System — COMPLETE (2026-03-10)

**570 tests passing** across 35 suites. See `plans/phase2-combat-system.md` for full details.

- [x] Playsheet UI (attacks, defense, saves, iterative attacks, two-weapon fighting, haste)
- [x] Buff system with stacking engine (dodge/untyped stack, typed take highest), library, presets
- [x] Combat abilities (Power Attack, Rage, TWF, Haste, Deadly Aim, Combat Expertise, Flurry)
- [x] HP tracker (current/max/temp, non-lethal, HP state: Healthy/Wounded/Disabled/Dying/Dead)
- [x] Dice roller (d4–d100, count/modifier, manual entry, roll log, FAB overlay)
- [x] `DiceFAB` mounted in root layout, hidden on combat tab
- [x] 18 buff presets seeded (`src/data/buffs/presets.ts`)
- [ ] E2E tests (deferred — requires running app on device)

### Phase 3: Character System — IN PROGRESS (2026-03-11)

Full design in `plans/character-system-redesign.md` and `plans/direct-entry-ui-design.md`.

#### 3a. Type System — COMPLETE (2026-03-11)

All type changes implemented and tests passing. Key additions:

- `src/types/templates.ts` — `LevelUpDecision`, `AppliedTemplate`, `GrantedBonus`, `CharacterCRTracking`, `TemplateFeature` variants
- `src/types/mythic.ts` — `MythicProgression`, `MythicAbilityEntry`, `MythicTierGrant`
- `src/types/resources.ts` — `ResourcePool` (`rechargeOn: 'rest' | 'per_encounter' | 'special'`)
- `src/types/spells.ts` — `SpellcastingPool` replaces `SpellcastingClass`; `CLBonus`, `SpellcastingContributor` added
- `src/types/classes.ts` — `ClassChoice`, `spellcastingAdvancement`, `prerequisites`, `sourceSystem`, `isCustom`
- `src/types/feats.ts` — `CharacterFeat.babWhenTaken`, `classLevelsWhenTaken`, `isMythic`; `FeatPrerequisite.mythic_tier`
- `src/types/abilities.ts` — `AbilityScore.levelIncrements`
- `src/types/campaign.ts` — `CampaignSettings` extended with `epicEnabled`, `epicSpellProgression`, `mythicEnabled`, `laBuybackMode`, `maxTraits`, `globalGrants`
- `src/types/index.ts` — `Character` extended with `levelHistory`, `appliedTemplates`, `grantedBonuses`, `crTracking`, `mythic`, `resources`
- `src/services/PrerequisiteService.ts` — `mythic_tier` prereq check; caster level check updated for pool model

#### 3b. Direct Entry UI — DESIGNED (2026-03-11)

See `plans/direct-entry-ui-design.md` for full spec. **23 new components** needed in `src/components/character/direct-entry/`.

10 tabs: Identity, Abilities, Classes & Templates, Combat, Skills, Traits, Feats, Spells, Equipment, Notes.

**Critical dependency:** Class choice definitions must be seeded in Firestore before Classes tab can function.

#### 3c. Class Choices Data — DESIGNED (2026-03-12)

Full design in `plans/data-scraping/class-choices-database.md` (canonical reference).
High-level architecture in `plans/character-system-redesign.md` §"Class Choices Data Design".

Firestore collection: `classChoiceDefinitions/{id}`. Key types: `ClassChoiceDefinition`, `ClassChoiceSelectionMode`, `ClassChoiceOptionGroup`, `ClassChoiceOption`.

**Interface naming convention:** all collection document interfaces use `*Entry` suffix (not `*Document`). `ClassOptionDocument` → `ClassOptionBase`. Full rename table in class-choices-database.md.

**Collections needed:** `classChoiceDefinitions`, `domains`, `deities`, `animalcompanions`, `ragepowers`, `roguetalents`. Plus existing `feats` and `spells`.

**Priority classes (12):** Fighter, Cleric, Druid, Barbarian, Hathran (3.5e), Dweomerkeeper (3.5e), Radiant Servant of Milani (3.5e), Rogue, Sentinel (PF PrC), Ranger, Paladin, Wizard.

**Scraping plans status:**

| Plan                                                | Status                                               |
| --------------------------------------------------- | ---------------------------------------------------- |
| `plans/data-scraping/domains-database.md`           | Ready to run                                         |
| `plans/data-scraping/deities-database.md`           | Needs writing — see `plans/scraping-agent-prompt.md` |
| `plans/data-scraping/animal-companions-database.md` | Needs writing — see `plans/scraping-agent-prompt.md` |
| `plans/data-scraping/ragepowers-database.md`        | Needs writing — see `plans/scraping-agent-prompt.md` |
| `plans/data-scraping/roguetalents-database.md`      | Needs writing — see `plans/scraping-agent-prompt.md` |

`plans/scraping-agent-prompt.md` is a complete prompt for another AI model to write all 4 missing plans.

#### 3d. Implementation Queue

- [x] Collect all ~2,500 PF1e spells into `src/data/spells/` (9 school files, batch + gap fill strategy) + `scripts/db/seedSpells.ts` — COMPLETE (2026-03-14)
- [x] Collect ~492 PF1e templates into `src/data/templates/` (20 raw batch files) + `src/data/templates/index.ts` + `scripts/db/seedTemplates.ts` — COMPLETE (2026-03-14)
- [x] Write `ClassChoiceDefinition` TypeScript type + add to `src/types/` — `classChoices.ts` (trimmed) + `classOptions.ts` (9 collection interfaces) + `deities.ts` — `291b6c3`
- [x] Write class choices design plan — `plans/data-scraping/class-choices-database.md` — `MW/plans-reorg`
- [x] Write scraping agent prompt — `plans/scraping-agent-prompt.md` — `MW/plans-reorg`
- [x] Phase A type changes (see class-choices-database.md §"Type Changes Required") — `07072a4`
  - [x] Rename all `*Document` → `*Entry` in `src/types/classOptions.ts`; `ClassOptionDocument` → `ClassOptionBase`
  - [x] Add `druidAllowed: boolean` to `DomainEntry`
  - [x] Add `DeityBoonTier`, `DeityBoons` + `boons?` to `DeityEntry` in `src/types/deities.ts`
  - [x] Add `subtypePrompt?` to `ClassChoiceOption` in `src/types/classChoices.ts`
  - [x] Add `levelFilterTable?` to `ClassChoiceDefinition` in `src/types/classChoices.ts`
  - [x] Create `src/types/animalCompanions.ts` with `AnimalCompanionEntry`
  - [x] `npm run typecheck` — zero errors
- [x] Write 4 scraping plans using `plans/scraping-agent-prompt.md` — `805551b`
- [x] Write `src/data/classChoiceDefinitions/` static files (Fighter, Cleric, Druid, Barbarian, Ranger, Paladin, Wizard, Rogue, prestige3_5e, Sentinel) — `12097e0`
- [x] Seed script: `scripts/db/seedClassChoiceDefinitions.ts` — COMPLETE
- [x] Seed script: `scripts/db/seedDomains.ts` — COMPLETE
- [ ] Run domain scraping agents (plan ready: `plans/data-scraping/domains-database.md`)
- [ ] Run remaining scraping agents (deities, animal companions, rage powers, rogue talents) once plans written
- [x] Seed 3.5e prestige classes (Hathran, Dweomerkeeper, Radiant Servant, Prestige Paladin) as campaign content — COMPLETE (PR #62)
- [x] **Spellcasting advancement redesign** — per-level `DraftClassEntry.id` pointers, `advancesSpellcasting` class-data field, `atLevels` skip patterns, 18 advancers specced + seeded — COMPLETE (PR #90)
- [x] **classChoiceDefinitions query fix** — `className` field (was `classIds`); all class choice pickers now load — COMPLETE (PR #92)
- [x] **Archetype picker** — `getArchetypesByClass`, `ArchetypePickerSheet`, wired into `ClassEntryCard` — COMPLETE (PR #93)
- [x] **Ruleset selector UI** — `RulesetSettingsSheet` on Identity tab — COMPLETE (PR #97)
- [ ] Build remaining direct-entry UI components (`src/components/character/direct-entry/`)
  - **IN PROGRESS (Eidolon Evolution Pool):** Branch `MW/eidolon-evolution-pool`. Slice reducers `addEidolonEvolution` / `removeEidolonEvolution` done. Still needed: `GameDataService.getEidolonEvolutions()`, `EidolonEvolutionPickerSheet.tsx`, `EidolonEvolutionPool.tsx`, wire into `ClassEntryCard.tsx`, tests. Pool formula: `availablePoints = classEntry.level` (both APG and unchained summoner). Each selected evolution stored as `ClassChoice { featureName: 'Eidolon Evolution', takenAtLevel: 0, selection: evolutionId, metadata: { cost, name } }`.
  - **TODO (Wandering Spirit Daily Reset):** Shaman wandering spirit uses `selectionMode: { type: 'special' }`. The UI needs a daily-reset component (analogous to spell preparation) that triggers after 8 hours of rest. Reads available spirits from `shamanspirits` collection filtered by `wanderingOnly: true`. Likely lives in a dedicated `WanderingSpiritPicker.tsx` component that integrates with the rest/long-rest flow.
  - **TODO (Evolution Prerequisite Enforcement):** The `Prerequisite` union includes a `{ type: 'evolution'; evolutionId: string }` variant (added with eidolon evolution work) and `PrerequisiteService.formatPrerequisite` handles it for display. However, `PrerequisiteService.checkSingle` has no `case 'evolution':` — it falls through to `default: return false`, meaning any evolution that lists another evolution as a prerequisite will always fail validation silently. This is latent today (no evolution data currently uses prerequisites) but must be implemented before the eidolon evolution picker enforces selection rules. **Fix:** add a `case 'evolution':` to `checkSingle` that looks up the character's current eidolon evolutions and checks whether `evolutionId` is present.
- [ ] Wire direct-entry screen into navigation (`app/(tabs)/characters/[id]/entry.tsx`)
- [ ] Enter Rissi — validate model end-to-end
- [ ] Kah-Mei session — capture character, stress-test template model

#### 3e. Animal Companion Builder — PLANNED

**Trigger:** Druid or Ranger selects `animal_companion` as their Nature Bond / Hunter's Bond choice.

The animal companion is not a `ClassChoiceDefinition` — it is a separate builder UI flow. The companion has its own HD, BAB, saves, skills, feats, ability scores, tricks, and HP. Its stats update automatically as druid/ranger level increases.

**Data dependency:** `animalcompanions` Firestore collection must be seeded before this UI can function. Scraping plan: `plans/data-scraping/animal-companions-database.md` (needs writing).

**Not a blocker for Rissi** — she has no animal companion. Can be built after the core direct-entry UI (3d) is functional.

Key facts:

- Companion has its own character-like stat block, tracked separately from the PC
- Progression tiers activate at druid levels 4 and 7 (size, ability score changes, natural armor, new attacks)
- Multiple companions possible (Leadership feat, secondary sources)
- DM additions (e.g. Fleshraker from 3.5e) use `visibility: 'campaign'` — same homebrew pattern as all content

**Implementation items:**

- [ ] Write `plans/data-scraping/animal-companions-database.md`
- [ ] Run animal companion scraping agents
- [ ] Seed script: `scripts/db/seedAnimalCompanions.ts`
- [ ] Design companion builder UI (separate spec doc)
- [ ] Build companion builder components
- [ ] Wire companion builder into direct-entry Classes & Templates tab

### Phase 4: Play Session — Combat Wiring

The combat tracker (Phase 2) was built as a standalone system. This phase wires it to the character system so a saved character can actually be played at the table.

#### 4a. Character → Combat Session Initialization

When a player taps "Play" on a saved character, `combatSlice` must be hydrated from the character's computed stats. No manual re-entry of stats.

- Load the character from Firestore (already available via `FirebaseCharacterService.getCharacter`)
- Dispatch a `initCombatSession(character)` thunk that seeds `combatSlice` from:
  - `character.combatStats.hitPoints.max` → HP tracker max
  - `character.combatStats.armorClass` → DefensePanel base values
  - `character.combatStats.savingThrows` → save totals
  - `character.combatStats.attackBonuses` → AttackPanel base values
  - `character.classes` → available combat ability toggles (Power Attack, Rage, etc.) gated by class/feat
- Add a "Play" button to the character detail screen (`[id]/index.tsx`) that navigates to the combat tab with the character pre-loaded
- The combat tab must show which character is active and provide a way to switch

#### 4b. Play-State Persistence

Combat state (current HP, active buffs, spell slots used) must survive app close and session breaks.

- `combatSlice` state is currently ephemeral Redux (lost on app close)
- Add a `PlaySessionService` / `FirebasePlaySessionService` that persists combat state to Firestore under `users/{uid}/sessions/{characterId}`
- Auto-save on meaningful state changes (HP change, buff added/removed, slot used)
- Load existing session on "Play" if one exists for that character; offer "Resume" or "New Session"

#### 4c. Spell Slot Tracking

Using spells at the table must decrement slots and persist that state.

- Add slot-use controls to the playsheet spellcasting panel: tap a slot level → mark one use
- Recovery via rest (see 4e)
- Track per-pool, per-level remaining uses in `combatSlice` (not in the editor `Character`)
- For spontaneous casters (Sorcerer, Bard): spells-per-day remaining
- For prepared casters (Cleric, Wizard): prepared spells with cast/uncast toggle

#### 4d. Resource Pool Tracking

Class resources that recharge on rest or per-encounter.

- Ki points, rage rounds, channel energy, bardic performance, lay on hands, etc.
- UI: a row per active resource pool showing current / max with tap-to-decrement
- Pools initialized from `character.resources` on session start
- State persisted in play session (see 4b)
- `rechargeOn: 'rest' | 'per_encounter' | 'special'` already typed — wire per-encounter pools to a "New Encounter" action

#### 4e. Rest / Recovery

- **Long rest**: reset HP to max, recover all spell slots, refill all `rechargeOn: 'rest'` pools, clear non-permanent conditions
- **Short rest**: recover `rechargeOn: 'per_encounter'` pools, optionally spend HD for HP
- Single button per rest type in the playsheet. Confirmation alert before applying.
- Write the recovered state back to the play session in Firestore

---

### Phase 5: Campaigns & Social

- Campaign CRUD with invite codes
- DM/player roles with permission rules
- Notes system (shared/personal/DM, tags, attachments, reactions, edit history)
- Real-time Firestore sync (onSnapshot)
- Bestiary with creature templates

### Phase 6: Advanced

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

### Phase 1 Status: COMPLETE (code scaffold)

1. `npx tsc --noEmit` — zero type errors
2. `npm test` — **351 tests passing** across **20 suites**:
   - Service unit tests: 6 suites (CharacterService, AbilityScoreService, ValidationService, EquipmentService, FirebaseAuthService, FirebaseCharacterService)
   - Redux store tests: 4 suites (authSlice, charactersSlice, themeSlice, uiSlice)
   - Component tests: 7 suites (OrnatePanel, OrnateButton, OrnateStatInput, FantasyTextInput, CharacterCard, RaceSelector, AuthForm)
   - Integration tests: 3 suites (CharacterCRUD — 50 tests, EquipmentManagement — 29 tests, CharacterCreationFlow — 59 tests)
3. E2E tests: **deferred** — requires running app on device/emulator with Firebase connected
4. Manual verification: pending Firebase project creation (run `bash scripts/firebase-setup.sh`)

### Phase 2 Status: COMPLETE (2026-03-10)

1. `npm test` — **570 tests passing** across **35 suites** (added 219 tests)
   - New service tests: CombatService, DiceService, ModifierPipelineService
   - New store tests: combatSlice
   - New component tests: HPTracker, AttackPanel, DefensePanel, BuffsPanel, CombatAbilityToggles, RollLog, DiceRoller, RollResultDisplay
2. E2E tests: **deferred** — requires running app on device

### CI Coverage Fix — COMPLETE (2026-03-14) — `MW/coverage-fix`

All four Jest coverage thresholds now met globally (statements 80%, branches 70%, functions 80%, lines 80%).

`npm test` — **657 tests passing** across **35 suites** (added 87 tests)

| File                                   | Coverage problem fixed                                                                                                   |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `store/slices/authSlice.ts`            | Async thunks never executed — mocked `FirebaseAuthService`, dispatched real thunks, covered all `try/catch` branches     |
| `store/slices/charactersSlice.ts`      | 31% functions — mocked deps, added thunk execution + `addFeat`/`removeFeat`/`toggleFeat`/`recalculateStats` tests        |
| `services/PrerequisiteService.ts`      | Missing prereq types — added `level+class`, `skill`, `class_feature`, `proficiency`, `caster_level`, `mythic_tier` tests |
| `services/CombatService.ts`            | `calculateSkill`, `isDying`, `isDead` untested                                                                           |
| `services/EquipmentDatabaseService.ts` | `getEquipmentByCategory`, `searchEquipment` (all filter branches) untested                                               |
| `services/ModifierPipelineService.ts`  | Medium/Low BAB progressions, condition effects untested                                                                  |

### Deviations from Original Plan

- **No local emulators:** Decided to develop against a real staging Firebase project instead of local emulators (which require Java). Emulator config removed; `firebase.ts` connects directly to the project in `.env`.
- **Custom test renderer:** Could not install `react-test-renderer` (npm peer dep conflict). Built a lightweight custom renderer at `__tests__/helpers/testUtils.tsx` with minimal React hooks support.
- **Jest projects config:** Tests split into two Jest projects (`services` + `components`) with separate configs. Component tests use `tsconfig.jest.json` to override `jsx: "react-jsx"`.
- **firebase-tools as devDependency:** Installed locally for rule deployment (`npm run firebase:deploy-rules`) rather than globally.

## Critical Source Files

| File                                        | Source                  | Purpose                             |
| ------------------------------------------- | ----------------------- | ----------------------------------- |
| DS-AI `src/types/*.ts` (all 12 files)       | Port directly           | Foundation type system              |
| DS-AI `src/services/CharacterService.ts`    | Port directly           | Character creation/validation logic |
| DS-AI `src/services/AbilityScoreService.ts` | Port directly           | Point buy + dice rolling            |
| DS-AI `src/services/ValidationService.ts`   | Port directly           | All validation rules                |
| DS-AI `src/data/races.ts`, `classes.ts`     | Port directly           | Game data                           |
| HL `tailwind.config.js`                     | Translate to NativeWind | Color palette + theme tokens        |
| HL `src/styles/themes.css`                  | Translate to colors.ts  | 200+ CSS vars → TS constants        |
| HL `src/components/OrnatePanel.jsx`         | Port to RN              | Fantasy container components        |
| HL `src/config/firebase.js`                 | Adapt for RN            | Firebase init pattern               |
| HL `src/services/characterService.js`       | Port CRUD patterns      | Firestore operations                |
| HL `firestore.rules`                        | Port + extend           | Security rules                      |
