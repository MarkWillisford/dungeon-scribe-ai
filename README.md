# Dungeon Scribe AI

> **Status:** Active development — targeting iOS/Android GA

**Pathfinder 1e character management and combat tracking for iOS and Android.**

Built for players and Dungeon Masters who need a real tool — not a glorified PDF viewer. Designed from the ground up to handle the full complexity of Pathfinder 1e: multiclass characters, templates, prestige class prerequisites, epic levels, 3.5e ports, and homebrew. AI-powered features are on the near-term roadmap, built on top of a structured game data layer assembled by a multi-agent pipeline.

---

## What It Does

**Character management** — Full Pathfinder 1e character sheet with automatic computation of BAB, saves, AC, skills, spells per day, and ability score breakdowns. Every modifier is traceable to its source.

**Direct-entry import** — Freeform 10-tab editor for importing existing paper characters with no required entry order. Validates on demand; warns but never hard-blocks. Reconstructs the ECL timeline to check prerequisites level-by-level and suggests class reorderings that would resolve conflicts.

**Ruleset system** — Configurable rulesets per character or campaign: allowed source collections, optional rules (Elephant in the Room feat tax removal, Relaxed Entry, fractional BAB/saves, gestalt, mythic, Path of War), explicit item bans, and DM-granted campaign rewards. Three built-in presets: PF1e Standard, PF1e Society, and Go Nuts. Campaign rulesets sync to all linked characters with version-aware drift detection.

**Combat tracker** — Initiative, HP tracking, buff/debuff toggles, attack resolution, and a full dice roller with roll history.

---

## Screenshots

> _Screenshots coming soon — drop simulator captures here._

| Character Entry | Combat Tracker | Ruleset Config |
| --------------- | -------------- | -------------- |
| _(screenshot)_  | _(screenshot)_ | _(screenshot)_ |

---

## Tech Stack

| Layer            | Technology                                 |
| ---------------- | ------------------------------------------ |
| Framework        | React Native + Expo SDK 54                 |
| Navigation       | Expo Router (file-based, auth-gated)       |
| State management | Redux Toolkit                              |
| Backend          | Firebase (Auth + Firestore + Storage)      |
| Styling          | NativeWind (Tailwind CSS for React Native) |
| Language         | TypeScript (strict mode)                   |
| Testing          | Jest + React Native Testing Library        |
| CI/CD            | GitHub Actions + EAS Build                 |

---

## Engineering Highlights

### Type System

A 30+ interface TypeScript model covering the full Pathfinder 1e rules surface: ability score layers, BAB/save progressions, feat prerequisites and chains, spell slot tables, archetype feature replacements, class choice definitions (domains, bloodlines, mysteries, rage powers, talents, hexes, exploits, and more), magic item overlays, templates with CR/LA tracking, and a versioned ruleset model. Designed to be the authoritative data contract between the game rules and every service that touches them.

### AI-Assisted Game Data Pipeline

The game data — ~2,600 feats, 971 traits, ~2,500 spells, 1,176 archetypes, 492 templates, 271 deities, and hundreds of class-specific options across 23 class choice collections — was assembled using a multi-agent scraping pipeline. A scout agent fetches source pages from the Pathfinder SRD, produces a numbered manifest, and passes batches to scraper agents that extract and validate each entry against the TypeScript schema. Output goes directly into typed seed scripts. The pipeline produced **~442,000 lines of structured, type-safe game data across 538 data files** without hand-entry.

### Services

Pure business logic services, each independently testable without Firebase:

- **ModifierPipelineService** — Aggregates all active modifier sources (gear, buffs, feats, racial traits, class abilities), deduplicates by Pathfinder bonus type stacking rules, and resolves the final computed value for any stat.
- **PrerequisiteService** — Validates feat prerequisites against a character snapshot. Handles feat chains with choice-key matching (Greater Weapon Focus requires Weapon Focus _with the same weapon_).
- **AbilityScoreService** — Resolves the layered ability score model: base + racial + inherent + level increments + enhancement + other bonuses, with per-source traceability.
- **CombatService** — Derives all combat statistics from character state: iterative attack bonus strings, touch/flat-footed AC, CMB/CMD, damage resolution.
- **FormulaService** — Parses and evaluates dice notation and stat-reference expressions.
- **RulesetService** — Full CRUD for user rulesets; global preset retrieval; character ruleset sync with campaign version tracking.

### Prerequisite Engine

The `DraftStateResolver` reconstructs a full ECL timeline from a character draft, walking level by level and computing ability scores, BAB, saves, feats, and caster levels at each checkpoint. `DraftValidationService` then checks every feat slot and prestige class entry against the character's state _at the moment they made that choice_ — not their final state. Flags ordering issues and suggests class reorderings that would resolve conflicts. Supports override acknowledgment (trust the player) and cross-section navigation (tap a warning to jump to the relevant section).

### Testing

690 tests across 36 suites covering all services, Redux slices, and UI components. Full branch protection on `main`: typecheck, lint, and full test suite must pass before merge.

---

## Project Structure

```
app/                    Expo Router screens (auth, characters, combat, campaigns)
src/
  types/                TypeScript interfaces (Pathfinder data model, 30+ interfaces)
  services/             Business logic (pure) + Firebase I/O
  store/                Redux Toolkit slices and typed hooks
  components/           React Native UI (combat tracker, character entry, shared primitives)
  data/                 Static game data (438 seed files → Firestore)
  config/               Firebase init, environment configuration
  theme/                Colors, fonts, shadows, animation constants
__tests__/              Jest tests (services, store, components, integration)
scripts/db/             Firestore seed scripts
plans/                  Design specs and implementation plans
```

---

## Roadmap

### Now

- **Draft validation system** — ECL timeline resolver + prerequisite validator + ValidationReportSheet UI
- **Firestore seeding** — Push all static collections to staging and production

### Next

- **Quick Build wizard** — Guided step-by-step character creation for new players
- **Campaign management UI** — DM tools for ruleset management, handouts, and session tracking
- **Enter Rissi** — End-to-end validation of a real level-24 multiclass character; the system integration test

### AI Features

The structured game data layer — 30+ typed interfaces, ~442,000 lines of validated game content — is the foundation the AI features are built on. Planned:

- Natural language rules queries ("Can my character take Arcane Strike at level 7?")
- Character build suggestions based on feat availability, class synergies, and campaign ruleset
- Encounter generation and encounter balance estimation
- In-session DM assistant: condition lookups, spell descriptions, roll narration

### General Availability

- iOS + Android release

---

## Development

```bash
# Install dependencies
npm install

# Start dev server
npx expo start

# Run tests
npm test

# Type check
npm run typecheck

# Lint
npm run lint
```

Requires `.env` with Firebase credentials — see `.env.example`. Two Firebase environments (staging + production):

```bash
npm run firebase:deploy-rules
```

Three EAS build profiles: `development` (internal dev client), `staging`, and `production`.
