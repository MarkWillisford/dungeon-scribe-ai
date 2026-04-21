# Initiating System — Path of War, Path of War: Expanded, and Tome of Battle

## 2026-04-16

## Status: DESIGN COMPLETE — NOT STARTED

---

## Context

Adding full support for martial initiating from three books:

- **Tome of Battle: The Book of Nine Swords** (D&D 3.5e, WotC) — one book, two names
- **Path of War** (PF1e, Dreamscarred Press)
- **Path of War: Expanded** (PF1e, Dreamscarred Press)

The initiating system is the martial analogue to spellcasting — characters learn maneuvers (strikes, boosts, counters) and stances organized into disciplines, ready a subset for combat, expend them when used, and recover them via class-specific mechanics.

**Core mechanics are the same across all three books.** PoW is Dreamscarred Press's Pathfinder adaptation of ToB. The differences are minor (readying time: 5 min ToB vs 10 min PoW) and cosmetic. One unified type system handles both.

**Decisions made:**

- PoW and PoW Extended share the same gate (`'dreamscarred'` SourceCollection) — no separate gating
- No new ruleset presets — DMs build custom rulesets
- Full system design: types, 9 base classes, 9 prestige classes, ~20 martial traditions, martial archetypes for 7+ non-initiating classes, discipline-swapping archetypes for initiating classes
- Martial Traditions and all archetypes included (not deferred)

---

## Key Differences from Spellcasting (drives all design divergences)

| Spellcasting                                 | Initiating                                                                                         |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Slots per level (`spellsPerDay: number[][]`) | One readied count per pool (varies by class and level, looked up from progression table)           |
| Per-day recovery (8-hour rest)               | Per-encounter recovery (primary full-round + secondary swift, class-specific)                      |
| No "stance" equivalent                       | Stances: always-on, no readying; usually one active, but some high-level features allow two        |
| Spell schools don't restrict access          | Classes grant access to specific disciplines; all maneuvers within those disciplines are available |
| Uniform recovery (rest)                      | Each class has primary + secondary recovery methods (see RecoveryMechanics below)                  |
| N/A                                          | Discipline access can be swapped via archetypes or Martial Traditions                              |
| N/A                                          | Feats (Martial Study, etc.) grant maneuvers outside the class pool system                          |

---

## Phase 1: Types

### New file: `src/types/initiating.ts`

```typescript
import type { GameDataSource } from './gameData';

// ---- Discipline ----
export type DisciplineSourceSystem = 'tob' | 'pow' | 'pow-extended';

export interface DisciplineDefinition {
  id: string; // 'iron-heart', 'golden-lion'
  name: string;
  description: string;
  associatedSkill: string; // 'Acrobatics', 'Diplomacy'
  associatedWeaponGroups: string[];
  sourceSystem: DisciplineSourceSystem;
  source: GameDataSource;
  isOfficial: boolean; // true = published by Paizo (PF1e) or WotC (3.5e). Always false for Dreamscarred Press / 3rd party.
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  rev: number;
}

// ---- Maneuver ----
export type ManeuverType = 'strike' | 'boost' | 'counter';
export type ManeuverActionType =
  | 'standard'
  | 'full-round'
  | 'swift'
  | 'immediate'
  | 'move'
  | 'free';

export interface ManeuverPrerequisite {
  // N maneuvers from same discipline. SELF-INCLUSIVE: the maneuver being learned counts
  // toward this number. So "requires 2 Primal Fury" means you need 1 OTHER Primal Fury
  // maneuver already known. canLearnManeuver() adds +1 to the current count when checking.
  disciplineManeuversKnown?: number;
  requiredManeuverIds?: string[]; // Specific maneuver(s) required
  minimumInitiatorLevel?: number; // Derived: (maneuverLevel * 2) - 1
}

export interface ManeuverDefinition {
  id: string;
  name: string;
  disciplineId: string;
  level: number; // 1-9
  type: ManeuverType;
  actionType: ManeuverActionType;
  range: string;
  target?: string;
  area?: string;
  duration: string;
  savingThrow?: string;
  description: string;
  prerequisites: ManeuverPrerequisite;
  source: GameDataSource;
  isOfficial: boolean;
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  rev: number;
}

// ---- Stance ----
export interface StanceDefinition {
  id: string;
  name: string;
  disciplineId: string;
  level: number;
  description: string;
  prerequisites: ManeuverPrerequisite;
  source: GameDataSource;
  isOfficial: boolean;
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  rev: number;
}

// ---- Martial Tradition (Path of War: Expanded) ----
export interface MartialTradition {
  id: string; // 'empyreal-guardians'
  name: string; // 'Empyreal Guardians'
  description: string;
  favoredDisciplineId: string; // The discipline members can swap in
  alignmentRequirement?: string; // 'Lawful Good', 'Any non-evil', etc.
  source: GameDataSource;
  isOfficial: boolean;
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  rev: number;
}

// ---- Recovery Mechanics ----
// Most classes have TWO recovery methods: a primary (full-round, recover all/most)
// and a secondary (swift/move, recover one). Both are tracked per pool.
export type RecoveryMethod =
  | { type: 'full_round_one' } // Full-round action, recover one maneuver
  | { type: 'full_round_all' } // Full-round action, recover all maneuvers
  | { type: 'strike_recovers_all' } // Initiate a strike, recover all others
  | { type: 'random_grant'; grantCount: number } // N random readied maneuvers granted per round
  | { type: 'swift_one'; resourceId?: string } // Swift action, recover one (optional resource cost)
  | { type: 'gambit' } // Gambit success recovers maneuvers
  | { type: 'move_through_threatened' } // Move through threatened square, recover one
  | { type: 'animus_fueled'; resourceId: string } // Spend animus to recover
  | { type: 'conviction_fueled'; resourceId: string } // Spend conviction to recover
  | { type: 'custom'; description: string };

export interface RecoveryMechanics {
  primary: RecoveryMethod; // Main recovery (typically full-round)
  secondary?: RecoveryMethod; // Quick recovery (typically swift action, recover one)
}

// ---- Initiating Pool (on Character — parallels SpellcastingPool) ----
export interface InitiatingContributor {
  className: string;
  classLevels: number;
  ilProgression: 'full' | 'half';
  advancesManeuverAccess: boolean; // Prestige: advances readied/known counts
  advancesInitiatorLevel: boolean; // Prestige: advances IL
}

export interface InitiatingPool {
  baseClass: string; // 'warblade', 'stalker'
  initiatingAbility: 'INT' | 'WIS' | 'CHA'; // Always a mental stat
  contributors: InitiatingContributor[];
  effectiveInitiatorLevel: number;
  maxManeuverLevel: number; // ceil(IL / 2), capped at 9
  maneuversKnown: number; // Flat count from progression table
  maneuversReadied: number;
  stancesKnown: number;
  accessibleDisciplines: string[]; // Base class default disciplineIds
  bonusDisciplines: { disciplineId: string; source: string }[];
  removedDisciplines: { disciplineId: string; reason: string }[];
  martialTraditionId?: string; // If a tradition is active on this pool
  recoveryMechanics: RecoveryMechanics;
  maneuverDC: {
    base: number; // 10 + maneuver level + ability mod
    abilityMod: number;
    miscBonus: number;
  };
}

// ---- Character's Maneuver Tracking ----
export interface KnownManeuver {
  maneuverId: string;
  maneuverName: string; // Denormalized for display
  disciplineId: string;
  level: number;
  type: ManeuverType;
  poolBaseClass: string;
}

export interface ReadiedManeuver extends KnownManeuver {
  isExpended: boolean; // true = used this encounter
  isGranted?: boolean; // Crusader: whether granted this round
}

export interface KnownStance {
  stanceId: string;
  stanceName: string; // Denormalized for display
  disciplineId: string;
  level: number;
  poolBaseClass: string;
}

// ---- Feat-Granted Maneuvers ----
// Feats like Martial Study grant maneuvers outside the class pool system.
// These are tracked separately — they have their own readied rules and
// do NOT count toward any pool's maneuversKnown/maneuversReadied limits.
export interface FeatGrantedManeuver {
  maneuverId: string;
  maneuverName: string;
  disciplineId: string;
  level: number;
  type: ManeuverType;
  grantedByFeatId: string; // e.g. 'martial-study'
  isReadied: boolean; // Feat-granted maneuvers have their own readied state
  isExpended: boolean;
}

// ---- Top-level container (parallels Spellcasting) ----
export interface Initiating {
  pools: InitiatingPool[];
  knownManeuvers: KnownManeuver[];
  readiedManeuvers: ReadiedManeuver[];
  knownStances: KnownStance[];
  // Usually one active stance; some high-level class features (e.g. Stance Mastery) allow two
  activeStanceIds: string[];
  maxActiveStances: number; // Default 1; increased by class features
  featGrantedManeuvers: FeatGrantedManeuver[];
}
```

### Modifications to existing types

**`src/types/index.ts`** — Add to Character interface (after `spellcasting`):

```typescript
initiating: Initiating;
```

Add re-export: `export * from './initiating';`

**`src/types/classes.ts`** — Add to ClassEntry (after `spellcastingAdvancement`):

```typescript
initiatingAdvancement?: {
  type: 'full' | 'half' | 'chosen';
  chosenPool?: string;                  // Required when type === 'chosen'
};
```

**`src/types/feats.ts`** — Add to Prerequisite union:

```typescript
| { type: 'initiator_level'; minimum: number }
| { type: 'maneuver_known'; maneuverId: string }
| { type: 'discipline_access'; disciplineId: string }
```

**`src/data/classes/types.ts`** — New type + extensions:

```typescript
export interface InitiatingData {
  type: 'Martial';
  initiatingAbility: 'INT' | 'WIS' | 'CHA'; // Always a mental stat
  ilProgression: 'full' | 'half';
  disciplines: string[]; // disciplineIds
  progressionTableKey: string; // key into INITIATING_TABLES
  recoveryMechanics: RecoveryMechanics; // Primary + secondary recovery methods
}
```

Add to `ExpandedClassData`: `initiating?: InitiatingData;`

Add to `ArchetypeData`:

```typescript
initiating?: InitiatingData;            // Archetypes that GRANT initiating to non-initiating classes
disciplineSwaps?: {                     // Archetypes that MODIFY an initiating class's discipline list
  gained: string[];                     // disciplineIds added
  lost: string[];                       // disciplineIds removed
};
```

---

## Phase 2: Progression Tables and Class Data

### New file: `src/data/classes/initiatingProgressionTables.ts`

Type: `InitiatingProgressionTable = [maneuversKnown, maneuversReadied, stancesKnown][]`

Nine tables for base classes: `CRUSADER_PROGRESSION`, `SWORDSAGE_PROGRESSION`, `WARBLADE_PROGRESSION`, `STALKER_PROGRESSION`, `WARDER_PROGRESSION`, `WARLORD_PROGRESSION`, `HARBINGER_PROGRESSION`, `MYSTIC_PROGRESSION`, `ZEALOT_PROGRESSION`

Additional tables for martial archetypes that use different progression rates (e.g., Fighter Myrmidon).

Registry: `INITIATING_TABLES: Record<string, InitiatingProgressionTable>`

**NOTE:** Exact numbers must be verified against source books during implementation.

### New file: `src/data/classes/initiatingClasses.ts`

Nine base class definitions using `ExpandedClassData` + `initiating` field:

| Class     | Book | HD  | BAB  | Good Saves | Key Ability | Disciplines                                                                                        | Recovery                |
| --------- | ---- | --- | ---- | ---------- | ----------- | -------------------------------------------------------------------------------------------------- | ----------------------- |
| Crusader  | ToB  | d10 | Full | Fort, Will | CHA         | Devoted Spirit, Stone Dragon, White Raven                                                          | Random grant            |
| Swordsage | ToB  | d8  | 3/4  | Ref, Will  | WIS         | 6 of 9 ToB + 1 chosen                                                                              | Full-round one          |
| Warblade  | ToB  | d12 | Full | Fort       | INT         | Diamond Mind, Iron Heart, Stone Dragon, Tiger Claw, White Raven                                    | Strike recovers all     |
| Stalker   | PoW  | d8  | 3/4  | Fort, Ref  | WIS         | Broken Blade, Solar Wind, Steel Serpent, Thrashing Dragon, Veiled Moon                             | Swift one (ki)          |
| Warder    | PoW  | d12 | Full | Fort, Will | INT         | Broken Blade, Golden Lion, Iron Tortoise, Primal Fury, Scarlet Throne                              | Full-round all          |
| Warlord   | PoW  | d10 | Full | Fort, Will | CHA         | Golden Lion, Primal Fury, Scarlet Throne, Solar Wind, Thrashing Dragon                             | Gambit                  |
| Harbinger | PoWE | d8  | 3/4  | Fort, Will | INT         | Cursed Razor, Eternal Guardian, Shattered Mirror, Veiled Moon + 1 chosen                           | Move through threatened |
| Mystic    | PoWE | d8  | 3/4  | Ref, Will  | WIS         | Elemental Flux, Mithral Current, Riven Hourglass, Shattered Mirror, Sleeping Goddess, Tempest Gale | Animus                  |
| Zealot    | PoWE | d8  | Full | Fort, Will | CHA         | Eternal Guardian, Golden Lion, Silver Crane, Sleeping Goddess                                      | Conviction              |

### New file: `src/data/classes/initiatingPrestigeClasses.ts`

Nine prestige classes (all 10-level, all advance IL at full progression):

| Prestige Class   | Book | Key Prereqs             | New Discipline Access                        | Notes                     |
| ---------------- | ---- | ----------------------- | -------------------------------------------- | ------------------------- |
| Animus Adept     | PoWE | IL 5, animus pool       | None (extends existing)                      | Animus/glyph specialist   |
| Awakened Blade   | PoW  | Psionics + IL 5         | None                                         | Psionic/initiating hybrid |
| Battle Templar   | PoWE | Divine spells + IL 5    | Golden Lion, Iron Tortoise                   | Divine initiator          |
| Bladecaster      | PoW  | Arcane spells + IL 3    | None                                         | Arcane/initiating hybrid  |
| Dragon Fury      | PoW  | IL 7, Thrashing Dragon  | Mithral Current, Primal Fury + 2 existing    | TWF specialist            |
| Landsknecht      | PoWE | IL 5, Quick Draw        | Mithral Current, Scarlet Throne + 2 existing | One-handed specialist     |
| Mage Hunter      | PoWE | IL 5, Spellcraft 5      | None                                         | Anti-caster specialist    |
| Phoenix Champion | PoW  | IL 5, ranged feats      | Solar Wind, Tempest Gale                     | Ranged specialist         |
| Umbral Blade     | PoWE | IL 7, Veiled Moon focus | Veiled Moon (deepened)                       | Shadow specialist         |

### BookId additions to `src/utils/normalizeSource.ts`

```
SHORT_CODE_MAP:
  '3.5e-tob' → { bookId: 'tob', bookName: 'Tome of Battle: The Book of Nine Swords', publisher: 'Wizards of the Coast' }
  'dsp-pow'  → { bookId: 'pow', bookName: 'Path of War', publisher: 'Dreamscarred Press' }
  'dsp-powe' → { bookId: 'powe', bookName: 'Path of War: Expanded', publisher: 'Dreamscarred Press' }

FULL_NAME_MAP:
  'tome of battle' → '3.5e-tob'
  'book of nine swords' → '3.5e-tob'
  'path of war' → 'dsp-pow'
  'path of war expanded' → 'dsp-powe'
  'path of war: expanded' → 'dsp-powe'
```

---

## Phase 3: Discipline, Maneuver, and Stance Data

### Complete Discipline List

**Tome of Battle (9 disciplines):**
Desert Wind, Devoted Spirit, Diamond Mind, Iron Heart, Setting Sun, Shadow Hand, Stone Dragon, Tiger Claw, White Raven

**Path of War base (~10 disciplines):**
Broken Blade, Golden Lion, Iron Tortoise, Primal Fury, Scarlet Throne, Silver Crane, Solar Wind, Steel Serpent, Thrashing Dragon, Veiled Moon

**Path of War: Expanded (~10 disciplines):**
Black Seraph, Cursed Razor, Elemental Flux, Eternal Guardian, Mithral Current, Piercing Thunder, Riven Hourglass, Shattered Mirror, Sleeping Goddess, Tempest Gale

**Total: ~29 disciplines** (ToB disciplines stored as separate documents from PoW even if names overlap)

### Data file structure

```
src/data/
  disciplines/
    index.ts              # Barrel: ALL_DISCIPLINES
    tob.ts                # 9 ToB disciplines
    pow.ts                # ~10 PoW disciplines
    pow-extended.ts       # ~10 PoWE disciplines
  maneuvers/
    index.ts              # Barrel: ALL_MANEUVERS
    raw/
      tob-{discipline}.ts # 9 files
      pow-{discipline}.ts # 10 files
      powe-{discipline}.ts # 10 files
  stances/
    index.ts              # Barrel: ALL_STANCES
    raw/
      (same per-discipline structure)
  martialTraditions/
    index.ts              # Barrel: ALL_MARTIAL_TRADITIONS
    traditions.ts         # ~20 tradition definitions
```

**Estimated totals:** ~29 discipline documents, ~500+ maneuver documents, ~100+ stance documents, ~20 tradition documents

### Data scraping strategy

- **PoW/PoWE content**: d20pfsrd.com (full content available)
- **ToB content**: tob-tools.net (searchable maneuver database), srd.dndtools.org
- **NOT on AoN** — 3rd party and 3.5e content not available there
- Scout + scraper pipeline per existing pattern (25-item cap per scraper agent)

---

## Phase 4: Martial Archetypes

### Archetypes that GRANT initiating to non-initiating classes

These archetypes add the full initiating system to standard Pathfinder classes. Uses the new `initiating` field on `ArchetypeData`. Existing archetype data lives in `src/data/classes/archetypes/` (37 files already exist).

| Archetype               | Base Class | IL   | Key Ability | Disciplines                                                                                                                                             | Trades Away                                                               |
| ----------------------- | ---------- | ---- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Primal Disciple         | Barbarian  | Full | WIS         | Golden Lion, Piercing Thunder, Primal Fury, Thrashing Dragon                                                                                            | Rage abilities (partial)                                                  |
| Rubato                  | Bard       | Full | CHA         | Elemental Flux, Golden Lion, Mithral Current                                                                                                            | Some spell progression                                                    |
| Myrmidon                | Fighter    | Full | WIS         | 4 chosen from: Broken Blade, Golden Lion, Iron Tortoise, Mithral Current, Piercing Thunder, Primal Fury, Scarlet Throne, Tempest Gale, Thrashing Dragon | Bonus feats at 2/6/10/14/18                                               |
| Monk of the Silver Fist | Monk       | Full | WIS         | Eternal Guardian, Iron Tortoise, Mithral Current                                                                                                        | Some unarmed strike bonuses                                               |
| Knight Disciple         | Paladin    | Full | CHA         | Golden Lion, Iron Tortoise, Silver Crane                                                                                                                | Spells, Lay on Hands, Divine Bond, Smite, Mercy, Channel, Aura of Justice |
| Ambush Hunter           | Ranger     | Full | WIS         | Golden Lion, Primal Fury + 1 chosen                                                                                                                     | Spells, Favored Enemy, Hunter's Bond, Quarry                              |
| Hidden Blade            | Rogue      | Full | INT         | Mithral Current, Thrashing Dragon, Veiled Moon + 1 bonus                                                                                                | Rogue talents at 4/8/12/16/20                                             |

Each gets its own progression table in `initiatingProgressionTables.ts` and a new `ArchetypeData` entry with the `initiating` field populated.

### Archetypes that SWAP disciplines on initiating classes

These use the new `disciplineSwaps` field on `ArchetypeData`:

| Archetype           | Base Class | Gains                                                      | Loses                      |
| ------------------- | ---------- | ---------------------------------------------------------- | -------------------------- |
| Brutal Slayer       | Stalker    | Black Seraph, Primal Fury                                  | Thrashing Dragon           |
| Fiendbound Marauder | Warder     | Black Seraph, Cursed Razor, Eternal Guardian               | Golden Lion, Iron Tortoise |
| Ordained Defender   | Warder     | Eternal Guardian, Black Seraph or Silver Crane (alignment) | Varies                     |
| Dervish Defender    | Warder     | Mithral Current                                            | Varies                     |
| Zweihander Sentinel | Warder     | Piercing Thunder                                           | Varies                     |
| Hawkguard           | Warder     | TBD                                                        | TBD                        |
| Sworn Defender      | Warder     | TBD                                                        | TBD                        |
| Bannerman           | Warlord    | TBD                                                        | TBD                        |
| Bushi               | Warlord    | TBD                                                        | TBD                        |
| Steelfist Commando  | Warlord    | TBD                                                        | TBD                        |
| Vanguard Commander  | Warlord    | TBD                                                        | TBD                        |
| Discordant Crusader | Zealot     | TBD                                                        | TBD                        |
| Void Prophet        | Zealot     | TBD                                                        | TBD                        |

**TBD entries** require source book verification during data entry.

### How discipline swapping works on InitiatingPool

When an archetype or tradition modifies disciplines:

1. `removedDisciplines` tracks what was swapped out (with reason)
2. `bonusDisciplines` tracks what was gained (with source attribution)
3. Effective discipline list = `accessibleDisciplines - removedDisciplines + bonusDisciplines`
4. `martialTraditionId` tracks if a tradition is active (max one per pool)
5. New discipline's associated skill becomes a class skill

---

## Phase 5: Martial Traditions

~20 traditions from Path of War: Expanded. Each lets a character trade one class discipline for the tradition's favored discipline.

**Mechanic:** Any character can join a Martial Tradition. Members trade one class discipline for the tradition's favored discipline. Selection is either at creation (starting member) or later (one week training). Leaving a tradition requires one week to swap the discipline back.

### Known traditions:

| Tradition                           | Favored Discipline | Alignment    | Source |
| ----------------------------------- | ------------------ | ------------ | ------ |
| Acolytes of the Arrow               | Solar Wind         | Any          | PoWE   |
| Black Thorn Knights                 | Black Seraph       | Lawful Evil  | PoWE   |
| Bloody Fangs                        | Primal Fury        | Chaotic      | PoWE   |
| Cagebreaker Brotherhood             | TBD                | TBD          | PoWE   |
| Cirque de la Fumee                  | TBD                | TBD          | PoWE   |
| Crashing Tempest Academy            | TBD                | TBD          | PoWE   |
| Defenders of the Realm              | Iron Tortoise      | TBD          | PoWE   |
| Descendants of the Golden Council   | TBD                | TBD          | PoWE   |
| Empyreal Guardians                  | Silver Crane       | Lawful Good  | PoWE   |
| Lens Maker Society                  | TBD                | TBD          | PoWE   |
| Lords of the Wheel                  | TBD                | TBD          | PoWE   |
| Loyal Order of the Branded Waerloch | TBD                | TBD          | PoWE   |
| Ordre des Repas Exotiques           | TBD                | TBD          | PoWE   |
| Reverents of the Lance              | Piercing Thunder   | TBD          | PoWE   |
| Scarlet Sentinels                   | TBD                | Lawful       | PoWE   |
| Servants of the Sacred Hymn         | TBD                | TBD          | PoWE   |
| Stained Glass Champions             | TBD                | TBD          | PoWE   |
| Sultanate of Beggars                | TBD                | Any non-evil | PoWE   |
| The Quills                          | TBD                | Any Evil     | PoWE   |
| The Wayward Path                    | TBD                | TBD          | PoWE   |

**TBD entries** require source book lookup during data entry phase.

---

## Phase 6: Service Layer

### Initiator Level Calculation

Initiator Level (IL) is distinct from character level. It determines the highest maneuver level a character can access and feeds into maneuver save DCs.

**Formula:** `IL = (initiating class levels × 1) + floor(all other class levels / 2)`

Each initiating pool calculates its own IL independently. Non-initiating class levels always contribute at half rate. When a character has two initiating pools, each pool treats the other initiating class as non-initiating for its own IL.

**Examples:**

- **Warder 4 / Fighter 10** → IL = 4 + floor(10/2) = **9** → max maneuver level = ceil(9/2) = **5**
- **Stalker 6 / Warder 4** → Stalker pool IL = 6 + floor(4/2) = **8**; Warder pool IL = 4 + floor(6/2) = **7**
- **Warblade 10** → IL = **10** → max maneuver level = **5**
- **Warblade 20** → IL = **20** → max maneuver level = **9** (cap)

**Max maneuver level** = `Math.min(9, Math.ceil(IL / 2))`

**Minimum IL** = 1 if the character has any initiating class levels.

### New file: `src/services/InitiatingService.ts`

Key functions:

- `computeInitiatorLevel(pool, allClasses)` — IL calculation per the formula above
- `maxManeuverLevel(il)` — `Math.min(9, Math.ceil(il / 2))`
- `getProgressionAtLevel(tableKey, classLevel)` — lookup from progression table
- `computeManeuverDC(maneuverLevel, abilityMod, miscBonus)` — `10 + level + mod + misc`
- `canLearnManeuver(maneuver, pool, knownManeuvers)` — discipline check, level check, prereq check. **Self-inclusive prereqs:** when checking `disciplineManeuversKnown`, the maneuver being learned counts toward its own requirement (add +1 to current discipline count)
- `buildPool(baseClassData, classLevel, contributors, bonusDisciplines, removedDisciplines)` — construct InitiatingPool
- `getEffectiveDisciplines(pool)` — computes `accessibleDisciplines - removedDisciplines + bonusDisciplines`
- `applyTradition(pool, tradition, removedDisciplineId)` — apply a martial tradition swap
- `rollCrusaderGrants(readiedManeuvers, grantCount)` — Crusader random grant roller

### Updates to existing services

**`src/services/PrerequisiteService.ts`** — Add cases:

- `'initiator_level'` — check highest IL across all pools
- `'maneuver_known'` — check `knownManeuvers`
- `'discipline_access'` — check pool discipline lists (including tradition/archetype swaps)

**`src/services/DraftValidationService.ts`** — Add initiating validation:

- Maneuver count vs `maneuversKnown` limit
- Discipline access violations (accounting for swaps and traditions)
- Maneuver level vs max accessible level

**`src/services/DraftStateResolver.ts`** — Extend snapshot:

```typescript
initiating: {
  pools: Array<{ effectiveInitiatorLevel: number; baseClass: string }>;
}
```

---

## Phase 7: ClassChoiceDefinitions

Each base initiating class gets 2-3 ClassChoiceDefinitions:

1. **Maneuvers Known** — `selectionMode: { type: 'special' }`, `collectionName: 'maneuvers'`
   - `special` because: pick count varies per level (table delta), discipline filtering is dynamic, some classes allow swapping one maneuver per level
2. **Stances Known** — `selectionMode: { type: 'special' }`, `collectionName: 'stances'`
3. **Bonus Discipline** (Swordsage, Harbinger only) — `selectionMode: { type: 'single_at_creation' }`, `collectionName: 'disciplines'`

For martial archetypes (Myrmidon, Hidden Blade, etc.) that grant initiating, their class choice definitions attach to the archetype name, not the base class.

New files in `src/data/classChoiceDefinitions/`: 9 base classes + 9 prestige classes + 7 martial archetypes = ~25 files

---

## Phase 8: Firestore Collections

Four new top-level collections:

### `disciplines` (~29 Firestore documents)

```
{ id, name, description, associatedSkill, associatedWeaponGroups, sourceSystem, source, isOfficial, visibility, rev }
```

### `maneuvers` (~500+ Firestore documents)

```
{ id, name, disciplineId, level, type, actionType, range, target?, area?, duration, savingThrow?, description, prerequisites, source, isOfficial, visibility, rev }
```

Indexes: `disciplineId ASC, level ASC` / `source.bookId ASC, level ASC`

### `stances` (~100+ Firestore documents)

```
{ id, name, disciplineId, level, description, prerequisites, source, isOfficial, visibility, rev }
```

Index: `disciplineId ASC, level ASC`

### `martialTraditions` (~20 Firestore documents)

```
{ id, name, description, favoredDisciplineId, alignmentRequirement?, source, isOfficial, visibility, rev }
```

---

## Phase 9: Seed Scripts

- `scripts/db/seedDisciplines.ts` — ~29 documents
- `scripts/db/seedManeuvers.ts` — ~500+ documents, batched at 500
- `scripts/db/seedStances.ts` — ~100+ documents
- `scripts/db/seedMartialTraditions.ts` — ~20 documents

Update `scripts/db/seedAll.ts`: disciplines → maneuvers → stances → martialTraditions (before classChoiceDefinitions).

---

## Phase 10: Store and Integration

**`src/store/slices/characterEntrySlice.ts`** — New actions:

- `addInitiatingPool` / `removeInitiatingPool`
- `setInitiatingAdvancement`
- `applyMartialTradition` / `removeMartialTradition`

**`src/types/index.ts`** — `Character.initiating` always present (empty arrays for non-initiating characters), matching how `spellcasting` works.

**`ResourcePool` integration** — Initiating classes auto-create pools:

- Stalker: `{ id: 'stalker_ki', rechargeOn: 'rest' }`
- Mystic: `{ id: 'mystic_animus', rechargeOn: 'per_encounter' }`
- Zealot: `{ id: 'zealot_conviction', rechargeOn: 'special' }`

**Combat integration** — Maneuver bonuses flow through existing `Effect` system and `attackBonuses.miscMods`. Stance bonuses flow through `armorClass.misc`. No CombatStats type changes needed.

---

## Content Gating Summary

Two-layer gate (already built, just needs content):

1. **SourceCollection**: `'3.5e'` in `allowedSources` → ToB visible; `'dreamscarred'` → PoW/PoWE visible
2. **OptionalRules**: `tomeOfBattleMechanics: true` → ToB classes + validation; `pathOfWarMechanics: true` → PoW/PoWE classes + validation

Both must be true for a character to use the system. Class selector and maneuver picker filter based on these flags.

---

## Implementation Order and Work Breakdown

### Dependency Map

| Phase | Work | Blocked By | Blocks | Owner |
|---|---|---|---|---|
| 1 | Types (`initiating.ts`, modify `classes.ts`, `feats.ts`, `ArchetypeData`) | Nothing | ALL | Mark |
| 2 | Progression tables + 9 base classes + 9 prestige classes + bookIds | Phase 1 | 4, 6, 7 | Mark |
| 3 | Discipline/maneuver/stance data (~29 + ~500 + ~100 files) | Phase 1 | 9 | Doug |
| 4 | Martial archetypes (7 non-initiating + discipline-swapping) | Phases 1, 2 | 9 | Mark |
| 5 | Martial Traditions data (~20 traditions) | Phase 1 | 9 | Doug |
| 6 | `InitiatingService` + service updates | Phases 1, 2 | 10 | Mark |
| 7 | ClassChoiceDefinitions (~25 files) | Phases 1, 2 | 9 | Mark |
| 8 | Firestore collections + indexes | Phase 1 | 9 | Mark |
| 9 | Seed scripts | Phases 3, 5, 7, 8 | 10 | Mark |
| 10 | Store + combat integration | Phases 1, 6 | Nothing | Mark |

### Critical path

Phase 1 → Phase 2 → Phase 6 → Phase 10

### Parallel tracks after Phase 1 merges

**Mark track:** Phase 2 → Phases 4, 6, 7, 8 → Phase 9 → Phase 10
**Doug track:** Phases 3, 5 (scraping — can start immediately after Phase 1)

Doug's scraping work (Phases 3 and 5) runs fully in parallel with Mark's architecture work (Phases 2, 4, 6, 7, 8). They converge at Phase 9 (seed scripts), which needs both the data files and the Firestore collections/ClassChoiceDefinitions to be ready.

### Status

- [ ] Phase 1 — Types (PR #TBD)
- [ ] Phase 2 — Classes + progression tables + bookIds
- [ ] Phase 3 — Discipline/maneuver/stance data (Doug)
- [ ] Phase 4 — Martial archetypes
- [ ] Phase 5 — Martial Traditions data (Doug)
- [ ] Phase 6 — InitiatingService
- [ ] Phase 7 — ClassChoiceDefinitions
- [ ] Phase 8 — Firestore collections + indexes
- [ ] Phase 9 — Seed scripts
- [ ] Phase 10 — Store + combat integration

---

## Verification

1. `npm run typecheck` — zero errors after Phase 1
2. `npm test` — all 877 existing tests still pass
3. New `InitiatingService` tests: IL calc (single/multi/prestige), max maneuver level, canLearnManeuver, buildPool, getEffectiveDisciplines, applyTradition, Crusader grants
4. New prerequisite tests: `initiator_level`, `maneuver_known`, `discipline_access`
5. Seed scripts: dry-run staging, verify document counts match static arrays
6. Spot-check: Firestore docs match type definitions

---

## Data Sources for Scraping

| Book                  | Primary Source | Backup                         |
| --------------------- | -------------- | ------------------------------ |
| Tome of Battle        | tob-tools.net  | srd.dndtools.org, dandwiki.com |
| Path of War           | d20pfsrd.com   | libraryofmetzofitz.fandom.com  |
| Path of War: Expanded | d20pfsrd.com   | libraryofmetzofitz.fandom.com  |

---

## Open Questions / TBD Items

- **Progression table exact values** — structure designed, per-level numbers need source book verification
- **~10 Martial Traditions** — favored discipline not confirmed online, need source book
- **~8 discipline-swapping archetypes** — exact gained/lost disciplines need source book
- **Archetype progression tables** — martial archetypes may have different maneuver/stance gain rates than base classes
- **Per-book selection within SourceCollections** — not yet implemented; out of scope, future feature
- **ToB and PoW disciplines with shared names** (e.g., Stone Dragon) stored as separate documents with different `sourceSystem`
- **`DisciplineDefinition.associatedSkill` cannot express multiple valid choices.** Shattered Mirror (PoWE) accepts any of Craft (glassmaking), Craft (painting), Craft (sculpture), or Craft (sketching). The current `associatedSkill: string` type forces us to pick one; PR #70 stores `'Craft (glassmaking)'` with the other three recorded in `adminNotes`. Downstream eligibility checks (Phase 6 `InitiatingService`) will get this wrong unless the type is extended before that phase lands. Options: change to `associatedSkill: string | string[]`, add an `associatedSkillOptions?: string[]` field, or model Craft specialties as a single `'Craft'` match with a separate eligibility rule. Decide before Phase 6 starts.
