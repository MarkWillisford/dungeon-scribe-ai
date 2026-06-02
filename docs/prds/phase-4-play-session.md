# PRD: Phase 4 — Play Session

## Problem Statement

A player has built their character in Dungeon Scribe AI — multiclass, fully equipped, spells chosen, resource pools defined. They sit down at the table. The app has nothing to offer them. There is no way to track current HP, use spell slots, activate Rage, record incoming damage, or manage any of the live state that combat actually requires. They put their phone down and reach for a scratch pad. The app stops being useful the moment the game starts.

## Solution

A Play Session system that turns DS AI into a live table tool. The player opens the Play tab, selects their character, and enters a four-panel play screen seeded from their character's computed stats. From there they track HP, apply buffs and conditions, manage spell slots and resource pools, and move through the turn cycle — all with the game's rules enforced automatically. Session state persists across app closes. Multiple characters can have active sessions simultaneously. The character builder remains untouched; Play Session state lives separately from the character record.

## User Stories

1. As a player, I want to open the Play tab and see all my characters listed with a New Session or Resume Session option, so that I can start or continue play without navigating elsewhere.
2. As a player, I want tapping Resume Session to take me immediately into my last play state, so that I can pick up mid-combat exactly where I left off.
3. As a player, I want tapping New Session to require a confirmation dialog, so that I cannot accidentally reset my current HP, buffs, and spell slots.
4. As a player, I want the play screen to open with my character's computed stats already loaded, so that I never have to manually enter AC, attack bonuses, saves, or HP max.
5. As a player, I want my play state to save automatically as I make changes, so that closing the app never loses my current session.
6. As a player with multiple characters, I want each character to have its own independent session, so that pausing one character's session does not affect another.
7. As a player, I want an initiative button on the Combat Play Panel that rolls d20 and adds my initiative modifier, so that I never have to do that arithmetic at the table.
8. As a player, I want to enter incoming damage and have the app apply it to my HP, so that I always see my current hit points without manual subtraction.
9. As a player whose character has damage reduction or energy resistance, I want the app to show a damage type selector when I record incoming damage, so that DR is applied automatically without mental math.
10. As a player without DR or energy resistance, I want the damage type selector hidden entirely, so that the UI is not cluttered with options that don't apply to me.
11. As a player, I want my temporary HP to absorb damage before my regular HP, so that the app models the correct damage priority.
12. As a player gaining temporary HP from a new source, I want the app to automatically keep whichever value is higher, so that I never have to apply the take-highest rule myself.
13. As a player, I want to track non-lethal damage separately from lethal damage, so that the app can correctly determine when I am Staggered or Unconscious.
14. As a player whose non-lethal damage meets or exceeds my current HP, I want the Staggered condition applied automatically, so that I don't have to remember to toggle it.
15. As a player whose non-lethal damage exceeds my max HP, I want the app to reflect that I am Unconscious rather than Dying, so that the correct rules are applied.
16. As a Dying player, I want the app to automatically decrement my HP by 1 at End Turn, so that bleed-out is tracked without manual intervention.
17. As a Dying player at End Turn, I want the app to prompt me to make a DC 10 Constitution check and report whether I stabilized, so that the app can stop or continue the bleed-out accordingly.
18. As a player, I want to activate a buff from my buff library and have my combat stats update immediately, so that I always see the correct numbers with the buff applied.
19. As a player activating a buff, I want the full modifier pipeline to run with the buff included, so that typed bonus stacking is always enforced and I never see incorrect numbers from naively added bonuses.
20. As a player receiving a spell from another character (Haste, Bless, Shield of Faith), I want to search the spell database, select the spell, and have its mechanical effects added as an active buff, so that externally cast spells are reflected in my stats.
21. As a player, I want active buffs and conditions to decrement their durations automatically at End Turn, so that I never have to manually tick down timers.
22. As a player whose buff expires, I want it removed automatically and my stats updated, so that expired effects never silently persist.
23. As a player, I want to apply a condition (Shaken, Frightened, Fatigued, Sickened, Stunned, Staggered, etc.) and have it immediately affect my combat stats, so that conditions are reflected in the numbers I roll.
24. As a player, I want to toggle conditions on and off manually, so that I can apply or clear them based on what the DM says regardless of how they were caused.
25. As a player, I want Start Turn and End Turn buttons that own all duration management, so that I never manually tick individual buff or condition timers.
26. As a prepared caster (Cleric, Wizard), I want to see each of my prepared spells with a cast/uncast toggle, so that I always know which specific spells I have used.
27. As a spontaneous caster (Sorcerer, Bard), I want to see remaining slots per spell level with tap-to-decrement controls, so that I can track spell slot usage at the table.
28. As a player, I want each resource pool (rage rounds, ki points, channel energy, etc.) displayed with its current and max value and a tap-to-decrement control, so that I can track pool usage without mental arithmetic.
29. As a player whose resource pool use costs more than 1 point, I want to long-press the pool to enter a custom decrement amount, so that variable-cost abilities are handled correctly.
30. As a player, I want a Rest button that resets my HP to max, restores all spell slots, and refills all rest-recovery resource pools in one tap, so that long rest recovery requires no manual tracking.
31. As a player using Path of War, I want a New Encounter button that resets all per-encounter resource pools, so that initiator class resources recharge correctly between fights.
32. As a player not using Path of War, I want the New Encounter button hidden, so that the UI is not cluttered with options that don't apply to my character.
33. As a player, I want the Arcanist's arcane reservoir to recover partially on rest using the correct formula rather than resetting to max, so that the rules are applied correctly.
34. As a player, I want my active session state — current HP, buffs, conditions, spell slots, resource pool values — to persist when I navigate away from the Play tab, so that I can check the Characters tab mid-session without losing anything.
35. As a player with no active sessions, I want the Play tab to clearly show all my characters with a New Session option, so that starting play is always one tap away.
36. As a player with one active session, I want the Play tab to navigate straight into that session without a picker, so that the common case is frictionless.
37. As a player, I want to view my character's base combat stats on the character detail Combat tab at any time, even during an active Play Session, so that the character sheet and the play surface are always independently accessible.

## Implementation Decisions

### Module Boundaries

**PlaySessionService** — new pure Firebase I/O service responsible for Session Doc CRUD: create, read, update (debounced), and delete. Reads and writes to `users/{uid}/sessions/{characterId}`. No business logic — it serializes and deserializes session state only. Follows the existing pattern of Firebase I/O services (FirebaseCharacterService, FirebaseAuthService).

**DamageResolutionService** — new pure logic service. Accepts incoming damage amount, optional damage type, and the character's DR and resistance values. Returns resolved damage after applying DR or resistance. Has no Firebase dependency and no side effects. DR/resistance only shown in UI when character has relevant values — this service is what the UI consults to determine whether to show the damage type selector.

**NonLethalService** — new pure logic service managing the non-lethal damage pool: apply non-lethal damage, check Staggered threshold (non-lethal ≥ current HP), check Unconscious threshold (non-lethal > max HP), compute recovery on rest. Separately testable from the HP tracker.

**combatSlice extensions** — the existing `combatSlice` is extended to hold all Play Session in-memory state: active buff list, active conditions, non-lethal value, temp HP, current HP, per-pool current values, spell slot used counts (per pool, per level), turn cycle phase. This is the single source of truth for live play state in Redux.

**ModifierPipelineService.recalculate()** — extended to accept an optional active buff and condition list. When a buff or condition is toggled during a Play Session, `recalculate()` runs with the full active list so typed bonus stacking is always enforced. The character snapshot seeded at session start provides the base; active buffs and conditions layer on top. This is the only correct approach — naive addition bypasses stacking rules.

**Navigation rename** — `app/(tabs)/combat/` renamed to `app/(tabs)/play/`. The bottom nav tab label changes from "Combat" to "Play." The existing Character Tab named "Combat" on the character detail screen is unaffected. See ADR 0001.

### Session Initialization

When a Play Session starts (New Session), `combatSlice` is seeded from `character.combatStats` as stored — no pipeline re-run. `ModifierPipelineService.recalculate()` runs on every character change so the stored snapshot is always current. Trusting the snapshot is intentional; re-running at session start would imply distrust in the pipeline.

Resource pool current values are initialized to their max values from `ResourcePoolService` output. Spell slot used counts initialize to zero. Non-lethal, temp HP, and conditions initialize to zero/empty.

### Session Persistence

Session state is auto-saved to the Session Doc on a debounce of 2-3 seconds after the last change. Exception: `AppState` change to background triggers an immediate flush. This collapses rapid sequential taps (e.g. three HP decrements from one damage roll) into a single Firestore write.

There is no End Session action. The Session Doc persists indefinitely. New Session (with confirmation dialog) is the only reset path.

### Buff and Condition Pipeline

Every buff activation, buff deactivation, condition toggle, and duration expiry triggers `ModifierPipelineService.recalculate()` with the current active buff and condition list. Displayed stats are always pipeline output — never a cached value with bonuses naively added. This is required for PF1e typed bonus stacking rules to be enforced (e.g. morale bonus from Rage does not stack with morale bonus from Heroism).

### Turn Cycle

End Turn: decrements all active buff and condition durations by 1 round. Any effect at 0 is removed and `recalculate()` runs. If the character is Dying, HP is decremented by 1 and a stabilization prompt is shown ("Make a DC 10 Constitution check — did you stabilize?"). Start Turn: fires start-of-turn effects (bleed, regeneration).

### Staggered Auto-Trigger

The app watches the non-lethal pool after every change. When non-lethal ≥ current HP, the Staggered condition is applied automatically. When non-lethal drops below current HP (via healing), Staggered is removed automatically if it was auto-applied. Staggered remains a manual toggle — a DM can apply or clear it from any source. Auto-trigger does not own the toggle exclusively.

### Temporary HP Stacking

PF1e: temp HP does not stack. When a new source of temp HP is added, the app compares the new value against the current pool and keeps whichever is higher. The player is never asked to apply the take-highest rule themselves.

### Damage Resolution

When the player records incoming damage, `DamageResolutionService` is consulted. If the character has DR or energy resistance, a damage type selector is shown alongside the damage amount field. Selecting a type applies the appropriate reduction. If no type is selected, the entered amount is applied as-is. If the character has no DR or resistance, the selector is not shown.

### Spell Slot Tracking

Two models driven by pool casting type, both already typed in `SpellcastingPool` and `PreparedSpell`:

- **Prepared casters** (Cleric, Wizard): per-spell tracking via `PreparedSpell.cast`. UI shows each prepared spell with a cast/uncast toggle.
- **Spontaneous casters** (Sorcerer, Bard): per-level slot counts via `spellsPerDay.used[]`. UI shows remaining slots per level with tap-to-decrement.

No simplified "slot counts for everyone" shortcut. The type system supports the correct model and Phase 4 implements it correctly.

### Rest Recovery

Long Rest resets HP to max, restores all spell slot used counts to zero, and refills all `rechargeOn: 'rest'` resource pools. `rechargeOn: 'special'` pools (e.g. Arcanist arcane reservoir) recover via their `restRecoveryFormula` rather than resetting to max. Non-lethal damage recovers at 1 HP per character level (scaled to 8 hours). Both actions require a confirmation dialog.

New Encounter resets all `rechargeOn: 'per_encounter'` pools only. Gated on `ruleset.pathOfWarMechanics === true` — button hidden otherwise.

### Play Screen Layout

Four Play Panels within the Play tab session screen:

- **Combat**: HP tracker (current/max/temp/non-lethal), initiative button, attack panel, defense panel, dice roller
- **Buffs & Conditions**: active buff list, external spell quick-add (spell database search), condition toggles, Start Turn / End Turn buttons
- **Spells**: slot tracking per pool by caster type
- **Resources**: resource pool rows with current/max and tap-to-decrement, Rest button, New Encounter button (conditional)

### Multiple Sessions

One Session Doc per character. Sessions are fully independent. Navigating away from the Play tab auto-saves via debounced write. The Play tab session picker shows all characters with New Session or Resume Session. If exactly one active session exists, the picker is skipped and the app navigates straight in.

### Visual Design

Visual redesign of the play screen is explicitly deferred to a separate workstream (Doug). Phase 4 delivers correct functionality with the existing component library. Layout and color polish follow in a subsequent pass.

## Testing Decisions

A good test verifies external behavior — what a service returns given a specific input — not implementation details. Tests should not reach into internal methods or assert on intermediate values.

**PlaySessionService** — unit tests covering Session Doc create, read, update, and delete. Mock Firestore. Test debounce behavior and immediate-flush on app background signal. Prior art: `FirebaseCharacterService.test.ts`.

**DamageResolutionService** — unit tests covering: damage with no DR (no reduction), damage with DR/magic and a magic weapon (no reduction), damage with DR/magic and a non-magic weapon (reduction applied), damage with energy resistance (resistance applied), damage exceeding resistance (floored at 0). Pure function, no mocks needed.

**NonLethalService** — unit tests covering: applying non-lethal, Staggered threshold trigger, Unconscious threshold trigger, recovery on rest, recovery capped at total non-lethal taken. Pure function, no mocks needed.

**combatSlice extensions** — reducer tests for all new actions: applyDamage, applyNonLethal, addTempHP, toggleCondition, toggleBuff, startTurn, endTurn, applyRest, applyNewEncounter, useSpellSlot, togglePreparedSpell, decrementPool. Thunk tests for session load and save. Prior art: `combatSlice.test.ts`.

**ModifierPipelineService** — extend existing test suite to cover recalculate() with active buff list input. Specifically: morale bonus from two sources takes highest, dodge bonuses stack, condition penalties apply. Prior art: `ModifierPipelineService.test.ts`.

**UI components** — component tests for all four Play Panels, session picker, damage input with and without DR selector, stabilization prompt, dying state display. Prior art: `HPTracker.test.tsx`, `AttackPanel.test.tsx`.

**Integration** — end-to-end flow tests: session start seeds correctly from character snapshot, buff activation updates displayed stats through the pipeline, End Turn with Dying character decrements HP and shows prompt, Rest resets all correct pools and leaves special pools on formula recovery. Prior art: `CharacterCRUD.test.ts`.

All new code must maintain the existing 80% overall coverage floor (statements, functions, lines) and 70% branch coverage.

## Out of Scope

- Visual redesign of play screen layout and color system (separate workstream, Doug)
- Standalone condition duration tracking -- conditions applied via manual toggle (User Story 24) have no auto-expiry counter; the DM decides when they end. Conditions carried as effects of an active timed buff expire when that buff's duration reaches zero (covered by buff duration tracking in User Story 21)
- Initiative order / turn order tracking for the full combat encounter
- Real-time sync or DM-to-player push (single-player app scope)
- Spell preparation UI (choosing which spells to prepare before a session)
- Animal companion play-session tracking
- Mythic resource pool tracking
- E2E tests (deferred — requires running app on device)

## Further Notes

- Rissi (the real level-24 multiclass character) is the acceptance test character for Phase 4. Her HP, all active resource pools, spell slots, and buff interactions must be exactly correct before Phase 4 is considered complete.
- `combatSlice` retains its name in Phase 4 despite the nav tab rename to "Play." A rename to `playSlice` can follow in a future cleanup pass if desired.
- The Single-Player Constraint is intentional and permanent for this phase: there is no DM-to-player push, no shared session state, no networking. Every action is entered manually by the player holding the device. Phase 5 (Campaigns) builds multiplayer on top of this foundation.
- ADR 0001 records the decision to rename the bottom nav tab from "Combat" to "Play" and the reasoning behind it.
