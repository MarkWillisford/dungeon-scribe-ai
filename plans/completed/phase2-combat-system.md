# Phase 2: Combat System

## Context

Phase 1 scaffold is complete (409 tests passing). Phase 2 builds the combat tab into a fully
functional playsheet and introduces a character-aware dice roller accessible from anywhere in
the app.

**Core principle:** The buff system is central to everything. All rolls — attacks, saves, skill
checks — are character-aware and apply active buffs using the existing `Effect` target system
from `src/types/base.ts`.

---

## Key Architecture Decisions

### 1. Buff System Redesign

The existing `BuffEffects` interface in `src/types/buff.ts` is too flat and doesn't cover skills.
Rather than patching it, we align `Buff` with the existing `Effect` system from `base.ts`.

**Before:**

```typescript
interface Buff {
  effects: BuffEffects; // flat: { strength?, ac?, attackBonus?, ... }
}
```

**After:**

```typescript
interface Buff {
  effects: Effect[]; // uses Effect.target: 'skill.perception', 'ac.dodge', 'save.will', etc.
}
```

This gives every buff the ability to target anything the `Effect` system supports — abilities,
AC components, saves, attack, damage, skills, initiative, speed, HP — using the same target
string pattern already used by feats and traits.

**Effect target strings for Phase 2:**
| Target | Meaning |
|--------|---------|
| `ability.str` / `.dex` / `.con` / `.int` / `.wis` / `.cha` | Ability score bonus |
| `ac.armor` / `.shield` / `.dodge` / `.natural` / `.deflection` / `.misc` | AC component |
| `save.fortitude` / `.reflex` / `.will` / `.all` | Saving throw |
| `attack.melee` / `.ranged` / `.all` | Attack bonus |
| `damage.melee` / `.ranged` / `.all` | Damage bonus |
| `skill.perception` / `.stealth` / `.diplomacy` / ... (any skill key) | Skill bonus |
| `initiative` | Initiative bonus |
| `speed` | Movement speed bonus |
| `hp.temp` | Temporary HP granted |
| `cmb` / `cmd` | Combat maneuver |

### 2. Buff Stacking Rules (Pathfinder 1e)

Implemented in `CombatService`:

- **DODGE** — always stacks (every dodge bonus adds)
- **UNTYPED** — always stacks
- **CIRCUMSTANCE** — stacks (different sources)
- **All other typed bonuses** (enhancement, luck, morale, sacred, profane, alchemical,
  competence, insight, resistance, deflection, natural, armor, shield, size, racial, trait,
  inherent) — take highest only; multiple bonuses of same type do not stack
- **Penalties** — always stack regardless of type

### 3. Buff Persistence

| Buff Type                       | Storage                        | Example                       |
| ------------------------------- | ------------------------------ | ----------------------------- |
| Permanent / feat-sourced        | Saved on character in Firebase | Weapon Focus, Toughness       |
| Session buffs                   | `combatSlice` (lost on close)  | Bless, Haste, Inspire Courage |
| Long-duration but not permanent | Session-local for now          | Rage, enlarge person          |

The `SavedBuff` type (buff library entries) persists to Firebase per character so players can
one-tap re-apply common buffs. Active `Buff` objects live in Redux during a session.

### 4. Dice Roller — Two Layers

**Layer 1 — Contextual rolls in the combat playsheet:**

- Attack buttons auto-calculate full bonus (BAB + STR/DEX + size + active buff bonuses)
  and display a breakdown: `d20 (14) + BAB (6) + STR (3) + Power Attack (-3) = 20`
- Damage buttons roll the weapon's dice + applicable bonuses
- Save buttons (Fort/Ref/Will) pull from character + active buffs

**Layer 2 — Global FAB (Floating Action Button):**

- Persistent dice icon overlaid on every screen
- Opens a smart roll modal with four modes:
  - **Skill** — pick a skill from the character's list; auto-populates total including
    ranks + ability mod + class skill bonus + all active buff bonuses affecting that skill
  - **Save** — Fort/Ref/Will; pulls from character + active buffs
  - **Attack** — shortcut that opens the combat panel
  - **Free-form** — raw dice only (XdY+Z), no character modifiers
- Roll history is appended to the session log regardless of which layer triggered the roll

### 5. Combat Abilities

Toggleable abilities that modify combat stats while active. Processed by `CombatService`
alongside buffs before calculating totals.

| Ability             | Toggle | Variable Input            | Effect                                   |
| ------------------- | ------ | ------------------------- | ---------------------------------------- |
| Power Attack        | on/off | none (auto by BAB)        | -1/+2 attack/damage per 4 BAB            |
| Deadly Aim          | on/off | none (auto by BAB)        | -1/+2 ranged attack/damage per 4 BAB     |
| Rage                | on/off | none                      | +4 STR, +4 CON, +2 Will, -2 AC (morale)  |
| Two-Weapon Fighting | on/off | light/one-handed off-hand | TWF penalty set                          |
| Haste               | on/off | none                      | +1 dodge AC/Ref, +30 speed, extra attack |
| Flurry of Blows     | on/off | none (monk only)          | monk TWF penalty set                     |
| Combat Expertise    | on/off | penalty amount (-1 to -5) | -attack/+dodge AC                        |
| Crane Style         | on/off | none                      | requires Combat Expertise active         |

---

## Type Changes

### `src/types/buff.ts` — Full Rewrite

```typescript
import { BonusType, Effect } from './base';

// Active buff on a character (session-local in combatSlice)
export interface Buff {
  id: string;
  name: string;
  description?: string;
  source: string; // spell name, feat name, item name, etc.
  bonusType: BonusType; // primary type (for display grouping)
  duration: number | null; // null = permanent/toggle
  durationType: 'rounds' | 'minutes' | 'hours' | 'permanent';
  effects: Effect[]; // uses Effect.target system from base.ts
  isActive: boolean;
}

// Saved buff template in character's personal library (persists to Firebase)
export interface SavedBuff {
  id: string;
  name: string;
  description: string;
  source: string;
  category: 'Spell' | 'Item' | 'Ability' | 'Custom';
  bonusType: BonusType;
  duration: number;
  durationType: 'rounds' | 'minutes' | 'hours' | 'permanent';
  effects: Effect[];
}

// Buff package — group of SavedBuffs applied together
export interface BuffPackage {
  id: string;
  name: string;
  description: string;
  buffs: SavedBuff[];
}

// Active combat ability toggle state
export interface CombatAbilityState {
  powerAttack: boolean;
  deadlyAim: boolean;
  rage: boolean;
  twoWeaponFighting: boolean;
  twoWeaponFightingLightOffhand: boolean;
  haste: boolean;
  flurryOfBlows: boolean;
  combatExpertise: boolean;
  combatExpertisePenalty: number; // 1–5
}

// Result of a single dice roll (stored in session log)
export interface RollRecord {
  id: string;
  timestamp: number;
  type: 'attack' | 'damage' | 'save' | 'skill' | 'initiative' | 'free';
  label: string; // e.g. "Attack vs Goblin", "Perception Check"
  diceNotation: string; // e.g. "1d20+9"
  rawRoll: number; // the raw d20/dice result
  modifier: number; // total modifier applied
  total: number; // rawRoll + modifier
  breakdown: string[]; // ["d20: 14", "BAB: +6", "STR: +3", "Power Attack: -3"]
  isCrit?: boolean;
  isCritFail?: boolean;
  isManual: boolean; // true if player typed result from physical dice
}
```

### `src/types/combat.ts` — Minor Extension

Add to `CombatStats`:

```typescript
// Calculated totals with all active buffs applied (computed by CombatService)
buffedTotals?: {
  ac: number;
  touchAC: number;
  flatFootedAC: number;
  fort: number;
  ref: number;
  will: number;
  meleeAttack: number[];   // iterative attack array
  rangedAttack: number[];
  skills: Partial<Record<string, number>>; // skill key → buffed total
};
```

---

## Services to Build

### `src/services/CombatService.ts`

Pure logic. No Firebase I/O. Receives character + active buffs + active combat abilities,
returns calculated totals.

**Public API:**

```typescript
class CombatService {
  // Apply stacking rules to a list of Effects targeting the same stat
  static stackBonuses(effects: Effect[], target: string): number;

  // Calculate full AC with all active buffs applied
  static calculateAC(character: Character, activeBuffs: Buff[]): ACTotals;

  // Calculate attack bonus array (iterative) with buffs + combat abilities
  static calculateAttackBonuses(
    character: Character,
    activeBuffs: Buff[],
    abilities: CombatAbilityState,
    attackType: 'melee' | 'ranged',
  ): number[];

  // Calculate saving throw total with buffs
  static calculateSave(
    character: Character,
    activeBuffs: Buff[],
    save: 'fortitude' | 'reflex' | 'will',
  ): number;

  // Calculate a skill total with buffs
  static calculateSkill(character: Character, activeBuffs: Buff[], skillKey: string): SkillTotal; // { total, breakdown: string[] }

  // Calculate all buffed totals at once (used to populate buffedTotals on character)
  static calculateAllTotals(
    character: Character,
    activeBuffs: Buff[],
    abilities: CombatAbilityState,
  ): BuffedTotals;

  // HP state helpers
  static getHPState(
    current: number,
    max: number,
    con: number,
  ): 'healthy' | 'wounded' | 'disabled' | 'dying' | 'dead';
  static isDying(current: number): boolean;
  static isDead(current: number, conScore: number): boolean;
}
```

**Stacking implementation:**

```
For each unique (target, bonusType) pair in active effects:
  - If bonusType is DODGE or UNTYPED: sum all values
  - If bonusType is anything else: take the highest positive value only
  - Penalties (negative values): always sum regardless of type
Sum all per-type results for the final total on that target.
```

### `src/services/DiceService.ts`

Pure dice rolling. No character awareness — that's CombatService's job.

```typescript
class DiceService {
  // Parse "2d6+3" → { count: 2, sides: 6, modifier: 3 }
  static parse(notation: string): DiceExpression;

  // Roll a parsed expression, return { rolls: number[], total: number }
  static roll(expr: DiceExpression): DiceResult;

  // Convenience: parse + roll in one call
  static rollNotation(notation: string): DiceResult;

  // Roll with advantage/disadvantage (take highest/lowest of 2d20)
  static rollWithAdvantage(modifier: number): DiceResult;
  static rollWithDisadvantage(modifier: number): DiceResult;

  // Check if a d20 roll is a natural 20 or natural 1
  static isCriticalHit(rawRoll: number): boolean;
  static isCriticalFail(rawRoll: number): boolean;

  // Format a DiceResult into a breakdown string array for display
  static formatBreakdown(result: DiceResult, bonuses: BreakdownEntry[]): string[];
}
```

---

## Redux: `src/store/slices/combatSlice.ts`

```typescript
interface CombatState {
  // Active session buffs (session-local, lost on close)
  activeBuffs: Buff[];

  // Combat ability toggle states
  combatAbilities: CombatAbilityState;

  // HP tracking (mirrors character but mutable during combat)
  currentHP: number | null; // null = not in combat
  tempHP: number;
  nonlethalDamage: number;

  // Round counter
  round: number;

  // Roll history (session-local)
  rollLog: RollRecord[];

  // Buff library (character's saved buffs — loaded from Firebase on mount)
  buffLibrary: SavedBuff[];
  buffPackages: BuffPackage[];
}
```

**Actions:**

- `addBuff(buff: Buff)` — add active buff
- `removeBuff(id: string)` — remove active buff
- `toggleBuff(id: string)` — flip isActive on a buff
- `clearAllBuffs()` — end of session
- `toggleCombatAbility(key: keyof CombatAbilityState)` — flip a toggle
- `setCombatExpertisePenalty(value: number)` — set the variable input
- `setCurrentHP(value: number)` — direct HP set
- `adjustHP(delta: number)` — apply damage (negative) or healing (positive)
- `adjustTempHP(delta: number)` — apply/remove temp HP
- `adjustNonlethal(delta: number)` — apply/remove nonlethal
- `nextRound()` — increment round counter, tick down buff durations
- `resetCombat()` — reset round, clear session buffs, restore HP from character
- `appendRoll(record: RollRecord)` — add to roll log
- `clearRollLog()` — clear history
- `setBuffLibrary(buffs: SavedBuff[])` — load from Firebase

---

## UI Components

### Combat Components (`src/components/combat/`)

**`HPTracker.tsx`**

- Large current HP display (color-coded: green/yellow/orange/red by % of max)
- Nonlethal damage indicator below current HP
- Temp HP overlay badge on the HP number
- +/- step buttons (tap for 1, long-press for 5, type for custom)
- HP state label: Healthy / Wounded / Disabled / Dying / Dead
- Quick-add temp HP input

**`AttackPanel.tsx`**

- Shows iterative attack array: `+14 / +9 / +4`
- Buffed total includes all active buffs + combat ability toggles
- Tap any individual attack to roll it (triggers DiceService, appends to roll log)
- "Full Attack" button rolls all iterative attacks in sequence (300ms stagger);
  results accumulate on screen — each new result appears below the previous ones
- Manual entry field per attack row for physical dice users
- Melee / Ranged tabs
- Bonus breakdown popover on long-press (shows every component)

**`DefensePanel.tsx`**

- AC row: Normal / Touch / Flat-Footed — all three with buffed totals
- CMB / CMD row
- Saves row: Fort / Ref / Will with buffed totals
- Tap any save to roll it
- Bonus breakdown popover on each value

**`BuffsPanel.tsx`**

- List of active buffs with on/off toggle per buff
- Duration countdown (rounds remaining) shown as badge
- "Add Buff" → opens buff picker (library + common presets)
- "Add Package" → applies all buffs in a package at once
- Swipe-to-delete on individual buffs
- Common presets section: Bless, Haste, Inspire Courage, Bull's Strength, etc.

**`CombatAbilityToggles.tsx`**

- Grid of toggle chips: Power Attack, Rage, TWF, Haste, Deadly Aim, etc.
- Only shows abilities relevant to the character's class/feats
- Power Attack shows current penalty/bonus inline: `PA (-3/+6)`
- Combat Expertise shows a stepper for penalty amount

**`RollLog.tsx`**

- Scrollable session log of all rolls
- Each entry: label, dice notation, breakdown, total (large)
- Crits highlighted in gold, nat 1s highlighted in red
- Clear log button

### Dice Components (`src/components/dice/`)

**`DiceRoller.tsx`**

- Bottom sheet modal (opens from FAB or contextual buttons)
- Four tabs: Skill / Save / Attack / Free-form
- **Skill tab:** Searchable skill list, each shows buffed total, tap to roll
- **Save tab:** Three buttons (Fort/Ref/Will) with buffed totals shown
- **Attack tab:** Shortcut message pointing to combat tab
- **Free-form tab:** Dice builder (d4/d6/d8/d10/d12/d20/d100 buttons + modifier input)
- **Every tab includes a manual entry row:** a number input labeled "Enter physical roll"
  with an "Apply" button — uses the typed value as the raw roll, applies all the same
  modifiers, logs with `isManual: true`
- All roll results show breakdown and append to roll log

**`RollResultDisplay.tsx`**

- Single roll result card: dice notation, raw roll, breakdown accordion, total
- Crit/fail badge overlay

**`DiceFAB.tsx`**

- Floating action button — bottom right, above tab bar
- Dice icon (d20 shape)
- Opens `DiceRoller` bottom sheet
- Should NOT appear on the combat tab (dice roller is already embedded there)

---

## Screens

### `app/(tabs)/combat/index.tsx` — Main Combat Screen

Tabbed layout with 4 tabs (OrnateTab component):

1. **Playsheet** — HPTracker + AttackPanel + DefensePanel + CombatAbilityToggles
2. **Buffs** — BuffsPanel full screen
3. **Dice** — DiceRoller embedded (full-screen, not modal — so on combat tab FAB is hidden)
4. **Log** — RollLog full screen

Header shows: character name, round counter, "End Combat" button (resets state).

### Root Layout Update (`app/_layout.tsx`)

Mount `DiceFAB` outside the tab navigator so it overlays all screens. Hide it when the
active route is `/(tabs)/combat` (dice are embedded there).

---

## Tests

### Service Tests

- `__tests__/services/CombatService.test.ts`
  - `stackBonuses`: dodge stacks, morale takes highest, penalties always stack
  - AC calculation with multiple buff types active
  - Attack bonus with Power Attack, Haste, buff combinations
  - Save calculation with Resistance + Morale (only highest morale applies)
  - Skill calculation: Perception with Competence + Insight + Untyped all present
  - HP state transitions (healthy → wounded → disabled → dying → dead)
- `__tests__/services/DiceService.test.ts`
  - Notation parsing: `2d6+3`, `1d20`, `d8-1`, `4d6`
  - Roll bounds (result always within valid range)
  - Crit/fail detection

### Store Tests

- `__tests__/store/combatSlice.test.ts`
  - addBuff / removeBuff / toggleBuff
  - CombatAbility toggles
  - HP adjustment (damage, healing, overkill, temp HP absorption)
  - Nonlethal tracking
  - nextRound ticks down buff durations, removes expired buffs
  - resetCombat clears session state

### Component Tests

- `__tests__/components/combat/HPTracker.test.tsx`
- `__tests__/components/combat/AttackPanel.test.tsx`
- `__tests__/components/combat/BuffsPanel.test.tsx`
- `__tests__/components/dice/DiceRoller.test.tsx`

---

## Implementation Order

- [x] 1. Type changes — rewrite `buff.ts`, extend `combat.ts`
- [x] 2. `DiceService.ts` + tests
- [x] 3. `CombatService.ts` (stacking engine + stat calculations) + tests
- [x] 4. `combatSlice.ts` + tests
- [x] 5. `HPTracker.tsx` + tests
- [x] 6. `AttackPanel.tsx` + `DefensePanel.tsx` + tests
- [x] 7. `BuffsPanel.tsx` + `CombatAbilityToggles.tsx` + tests
- [x] 8. `RollLog.tsx` + tests
- [x] 9. `DiceRoller.tsx` + `RollResultDisplay.tsx` + tests
- [x] 10. `DiceFAB.tsx`
- [x] 11. Combat screen — wire all components into tabbed layout
- [x] 12. Root layout — mount FAB, hide on combat tab
- [x] 13. Seed buff library with common presets (Bless, Haste, Inspire Courage, etc.)
- [ ] 14. E2E tests (deferred — requires running app on device)

---

## Decisions

1. **Buff library presets** — seed with 15–20 common spell buffs on first load. Additionally,
   when a player applies any buff during a session, offer a "Save to Library" prompt so they
   can persist it for future sessions. Saved buffs sync to Firebase per character.

2. **Rage temp HP** — implement RAW: Rage grants a CON bonus which raises max HP. When Rage
   ends, max HP drops back. If current HP now exceeds the new max, it is clamped. If the HP
   drop would bring the character to 0 or below, they become disabled/dying immediately.
   `CombatService.endRage()` handles this calculation explicitly.

3. **Roll log persistence** — persist the last session's roll log to AsyncStorage. Cleared
   when the player taps "End Combat" or starts a new session. Lets players review rolls
   after breaks.

4. **Iterative attacks** — "Full Attack" button rolls all iterative attacks in sequence with
   staggered display (300ms apart). Results accumulate on screen — previous rolls are NOT
   removed when the next one appears. Individual attack buttons also available for
   single-attack actions.

5. **Buff duration tracking** — round-by-round. "Next Round" button increments the counter
   and ticks down all active buff durations. Expired buffs are automatically removed with a
   brief toast notification ("Haste expired").

   **Future (Phase 3+ networking):** When the app supports real-time multiplayer, the DM
   should own the round counter and initiative order. The DM's "Next Round" should push to
   all connected players simultaneously. Design the round counter in Redux to be receivable
   from a Firestore `onSnapshot` update without breaking local-only mode.

6. **Manual dice input** — every dice roller surface (combat attack buttons, save buttons,
   skill rolls, DiceRoller modal) must include a manual entry field alongside the roll button.
   Players who prefer physical dice can type in their roll result and have the app apply
   modifiers and log it identically to a digital roll. The `RollRecord` should include an
   `isManual: boolean` flag.

---

## Current Status

### Phase: COMPLETE (2026-03-10)

- **570 tests passing** across 35 suites (added 161 tests in this phase)
- All 13 implementation steps done
- **Remaining:** E2E tests (Step 14, deferred until app runs on device)

### Key Implementation Notes

- JSX text interpolation **must** use template literals — bare `text {expr}` splits into
  multiple text nodes, breaking `getByText` in the custom test renderer
- `Effect.value` is typed as `number | string` — guard with `typeof e.value === 'number'`
  before comparisons
- `AttackPanel` state spreads need to be defensive (`Array.isArray(prev) ? prev : []`)
  because the minimal test renderer's `hooksState` resets on nested component renders
- `findByLabel` helper (search by `accessibilityLabel`) is more reliable than `getByText`
  for interactive elements, since `getByText` matches the first DFS ancestor with that text
  substring (often the root container)
