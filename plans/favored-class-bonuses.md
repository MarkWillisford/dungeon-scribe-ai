# Favored Class Bonuses (FCB) — APG Alternate Bonus System

## 2026-04-23

## Status: Phase 1 COMPLETE (2026-04-24) — Phases 2 and 3 not yet started

Single-PR rollout confirmed 2026-04-23. No phase split across PRs. Phases below are internal staging only — each phase is tested before the next begins, but all land together.

---

## Context

Pathfinder 1e's core rules give every character a "favored class." Each level in that class grants one of:

- **+1 hit point**, OR
- **+1 skill rank**

The Advanced Player's Guide (2010) introduced a **third option**: a per-race, per-class **mechanical alternate**. Later books (ACG, Occult Adventures, Ultimate Intrigue, Adventurer's Armory 2, Adventurer's Guide) expanded the catalog to cover every class released for every race in the Advanced Race Guide.

Examples:

- Dwarf Fighter → +1 to CMD when resisting bull rush or trip
- Aasimar Cleric → +1/2 damage with positive energy against undead
- Dwarf Paladin → has TWO alternates; player may invest levels into either

The current data model supports only the universal HP / skill-rank choice. `DraftClassEntry.favoredClassBonuses` stores two counters (`hp: number`, `skillRank: number`). No alternate option data exists in the codebase — not typed, not scraped, not seeded. The `ClassEntryCard` UI shows only two steppers.

This plan closes that gap.

---

## Blocking Dependencies

**Rissi race decision reversal.** `plans/character-system-redesign.md` §"The Playtest Group" currently reads "Actual race: unknown (unrevealed narrative element — not modeled in the app per user decision; DM tracks this at the table)." This must be reversed. The FCB system requires every character to have a tracked race. Rissi's race becomes a tracked field like every other character's. The narrative fact that her race is plot-relevant is not the app's concern.

Updated wording: `Race: Human (tracked field — her actual race is a narrative element that may be revealed and changed later)`. Mark confirmed this 2026-04-23.

---

## Scope

**Target:** All official PF1e races × all official classes with documented FCB entries on d20pfsrd/AoN.

**Confirmed race list (36 races with FCB data):**

Core (7): Dwarf, Elf, Gnome, Half-Elf, Half-Orc, Halfling, Human

Featured (16, ARG): Aasimar, Catfolk, Dhampir, Drow, Fetchling, Goblin, Hobgoblin, Ifrit, Kobold, Orc, Oread, Ratfolk, Sylph, Tengu, Tiefling, Undine

Uncommon (13, ARG): Changeling, Duergar, Grippli, Kitsune, Merfolk, Nagaji, Samsaran, Strix, Suli, Svirfneblin, Vanara, Vishkanya, Wayang

**Note — Gillman excluded:** Gillman has no alternate favored class bonuses in official Paizo sources (ARG p. 186 lists only the standard HP/skill rank options, no class-specific alternates). Excluded intentionally; not a data gap.

Plus a small set of later additions (Android, Gathlain, Ghoran, Kasatha, Lashunta, Shabti, Syrinx, Wyrwood, Wyvaran, Skinwalker) — include if FCB data exists.

**Class coverage:** All official classes that appear on race FCB tables (Core + APG + UC/UM + ACG + OA + Intrigue + Hybrid). Class lists per race are not uniform — Core races have entries for virtually every class, whereas uncommon/later races often only have Core + APG + a subset.

**Estimated scale:** ~1,200–1,500 distinct FCB entries (some race × class combos have multiple variants — up to 2–3 entries).

**Excluded from this PR:** Homebrew/3rd-party races and classes. Campaign content (e.g., the 5 Rissi prestige classes) does not have FCB entries — prestige classes do not appear on FCB tables.

---

## Phase Staging (internal, single PR)

All three phases ship together in this branch. They execute sequentially so each layer is tested before the next builds on it.

### Phase 1 — Data

- Define `FavoredClassBonusOption` type
- Scrape all 36 races × ~30 classes → static TS files under `src/data/favoredClassBonuses/`
- `GameDataService.getFavoredClassBonuses(raceName, className)` API
- `FirestoreGameDataConnector` + `StaticGameDataConnector` wire-through
- `scripts/db/seedFavoredClassBonuses.ts` + `seedAll.ts` entry
- Firestore composite index on `raceName` + `className`
- Updates to planning docs (this file, `implementation-plan.md`, `character-system-redesign.md`)

**Ships with:** HP / skill-rank UI unchanged. Alternate data available for Phase 2 consumption but not yet reachable from the app.

### Phase 2 — UI + per-level selection model

- Replace `DraftClassEntry.favoredClassBonuses: { hp: number; skillRank: number }` with `DraftClassEntry.favoredClassBonuses: FavoredClassBonusSelection[]` indexed by class level
- `ClassEntryCard` replaces the two steppers with a per-level picker that lets the player choose HP / skill rank / alternate for each class level
- Alternates filter by character race + this class
- Fallback: if race has no alternates for this class, show HP / skill rank only
- Migration: existing draft data (hp / skillRank counts) promoted to a list of `{ type: 'hp' }` and `{ type: 'skill' }` selections at load time
- Validation: flag level mismatch (e.g., 5 selections for a level 4 class)

### Phase 3 — Runtime mechanical effect wiring

- `ModifierPipelineService` consumes selected alternates and applies effects
- Structured `mechanicalEffect` field added to `FavoredClassBonusOption` (optional — many alternates remain flavor-only)
- Tested per class effect: DR, bonus rage rounds, natural armor, spell-slot gains, etc.
- Player-visible effect on character sheet where applicable

---

## Phase 1 Detail

### Type System

`src/types/favoredClassBonuses.ts` — new file, single interface:

```typescript
export interface FavoredClassBonusOption extends DataQualityFields {
  id: string; // 'dwarf-fighter', 'dwarf-paladin-concentration', etc.
  raceName: string; // matches ExpandedRaceData.name exactly
  className: string; // matches ExpandedClassData.name exactly
  shortName: string; // UI label, scraper-synthesized from first clause
  description: string; // verbatim rules text
  source: GameDataSource;
  createdBy?: string;
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  isOfficial: boolean;
  rev: number;
}
```

Added to barrel export in `src/types/index.ts`.

### Data Files

```
src/data/favoredClassBonuses/
  index.ts              # ALL_FAVORED_CLASS_BONUSES barrel
  dwarf.ts              # Dwarf entries across all classes
  elf.ts
  gnome.ts
  halfElf.ts
  halfOrc.ts
  halfling.ts
  human.ts
  aasimar.ts
  catfolk.ts
  ...                   # one file per race, ~37 files total
```

Each race file exports a single named constant — e.g., `DWARF_FAVORED_CLASS_BONUSES: FavoredClassBonusOption[]`. `index.ts` concatenates into `ALL_FAVORED_CLASS_BONUSES`.

### Doc ID strategy

- Base: `{race-slug}-{class-slug}` — e.g., `dwarf-fighter`, `aasimar-summoner`.
- When a race × class has multiple entries: append a disambiguating suffix derived from the bonus concept. Prefer meaningful suffixes (`dwarf-paladin-concentration` and `dwarf-paladin-knowledge-smite`) over numeric (`dwarf-paladin-1`). Scrapers document the rationale in `adminNotes` when the suffix is non-obvious.

### Source attribution

Parse d20pfsrd's Paizo product codes:

| Code                                                             | Book                                       | bookId      |
| ---------------------------------------------------------------- | ------------------------------------------ | ----------- |
| (no code, core classes)                                          | Core Rulebook                              | `crb`       |
| (no code on alchemist/cavalier/inquisitor/oracle/summoner/witch) | APG                                        | `apg`       |
| PZO1117                                                          | Advanced Player's Guide                    | `apg`       |
| PZO1118                                                          | Ultimate Magic                             | `um`        |
| PZO1121                                                          | Ultimate Combat                            | `uc`        |
| PZO1122                                                          | Advanced Race Guide                        | `arg`       |
| PZO1129                                                          | Advanced Class Guide                       | `acg`       |
| PZO1132                                                          | Occult Adventures                          | `oa`        |
| PZO1134                                                          | Ultimate Intrigue                          | `ui`        |
| PZO1135                                                          | Adventurer's Guide / Adventurer's Armory 2 | `adv-guide` |

Add any missing codes to `normalizeSource.ts` SHORT_CODE_MAP.

**Heuristic when ambiguous:** If a race is a Core race and the bonus targets a Core class without citation → `crb`. If a race is an ARG race (any non-core) and the bonus targets a Core class without citation → the race's origin book (typically `arg`). When scrapers hit an unresolvable case, mark `verificationStatus: 'needs_review'` and note in `adminNotes`.

### Verification status

All seeded entries default to `verificationStatus: 'needs_review'` per the `data-quality-admin-review.md` convention. The admin inline-review system (Phase D of `admin-panel.md`) will promote to `verified` over time.

### GameDataService integration

New method signatures:

```typescript
// src/services/GameDataService.ts
static async getFavoredClassBonuses(
  raceName: string,
  className: string,
  context?: QueryContext,
): Promise<FavoredClassBonusOption[]>;
```

Connector interface additions:

```typescript
// src/services/GameDataConnector.ts
getFavoredClassBonuses(
  raceName: string,
  className: string,
  context: QueryContext,
): Promise<FavoredClassBonusOption[]>;
```

Both `FirestoreGameDataConnector` and `StaticGameDataConnector` implement. Firestore query: `where('raceName', '==', raceName).where('className', '==', className)`.

### Firestore index

Add to `firestore.indexes.json`:

```json
{
  "collectionGroup": "favoredClassBonuses",
  "queryScope": "COLLECTION",
  "fields": [
    { "fieldPath": "raceName", "order": "ASCENDING" },
    { "fieldPath": "className", "order": "ASCENDING" }
  ]
}
```

### Seed script

`scripts/db/seedFavoredClassBonuses.ts` — upsert each entry from `ALL_FAVORED_CLASS_BONUSES` with doc ID = `entry.id`. Idempotent. Follows the existing seed script pattern (see `seedDomains.ts` for reference).

Wired into `scripts/db/seedAll.ts` execution order — between `seedRaces` and `seedClasses` is fine (no cross-collection dependencies at seed time; FCBs reference races/classes by name string only).

### Scraping strategy

**Source priority:** d20pfsrd primary (static HTML, confirmed working). AoN fallback (JS-rendered, not usable via WebFetch — only accessible if Mark grabs content manually).

**Pipeline:**

1. Pre-enumerate all 37 race URLs in the scraping plan doc — no scout pass needed.
2. Each scraper agent receives:
   - One race name and its d20pfsrd URL
   - The target TS file path (e.g., `src/data/favoredClassBonuses/dwarf.ts`)
   - The TypeScript shape (copy of `FavoredClassBonusOption`)
   - Source code parse rules
   - The short-name synthesis guide
3. Scraper fetches the page, extracts the "Favored Class Options" section, produces one TS file with one array.
4. Cap: 1 race per agent. No 25-item batching needed — each race file is ~30 entries max and self-contained.
5. Agents do NOT edit `index.ts`. Barrel file is hand-written after all races complete.

**Scraper prompt lives at:** `plans/data-scraping/favored-class-bonuses-database.md` (to be written as the next step).

### Tests

- `__tests__/services/favoredClassBonuses.test.ts` — structural checks:
  - Every entry has non-empty `raceName`, `className`, `description`, `shortName`
  - All doc IDs are unique across `ALL_FAVORED_CLASS_BONUSES`
  - Every `raceName` resolves to a known race in `ALL_EXPANDED_RACES`
  - Every `className` resolves to a known class in `ALL_EXPANDED_CLASSES`
  - All entries have `isOfficial: true` and `visibility: 'global'`
- `__tests__/services/GameDataService.test.ts` — add `getFavoredClassBonuses` coverage via `StaticGameDataConnector`

---

## Phase 2 Preview

Per-level selection type (to be added in Phase 2 — NOT this PR):

```typescript
// src/types/characterDraft.ts — Phase 2
export type FavoredClassBonusSelection =
  | { level: number; type: 'hp' }
  | { level: number; type: 'skill' }
  | { level: number; type: 'alternate'; optionId: string };

export interface DraftClassEntry {
  // ...
  favoredClassBonuses?: FavoredClassBonusSelection[];
}
```

Migration logic at load time:

```typescript
// Pseudocode — the counter-based model gets promoted to explicit per-level selections
function promoteFCB(
  legacy: { hp: number; skillRank: number } | undefined,
  classEntryLevel: number,
): FavoredClassBonusSelection[] {
  if (!legacy) return [];
  const out: FavoredClassBonusSelection[] = [];
  for (let i = 0; i < legacy.hp; i++) out.push({ level: out.length + 1, type: 'hp' });
  for (let i = 0; i < legacy.skillRank; i++) out.push({ level: out.length + 1, type: 'skill' });
  return out;
}
```

Preserves meaning but loses the level-index attribution (legacy counters don't record WHICH level got HP vs skill). For existing characters this is acceptable — the total contribution is what matters, not the level ordering.

UI: `ClassEntryCard` renders a list of rows (one per class level) with a picker per row. Alternates loaded via `GameDataService.getFavoredClassBonuses(character.raceName, entry.className)`.

---

## Phase 3 Preview

Structured mechanical effect model. Add to `FavoredClassBonusOption`:

```typescript
mechanicalEffect?: FavoredClassMechanicalEffect;

type FavoredClassMechanicalEffect =
  | { type: 'dr'; amount: string; damageType: string; per: number }    // +DR/evil per N levels
  | { type: 'bonus_rounds'; resource: string; perLevel: number }       // +rage/performance rounds
  | { type: 'natural_armor'; targetSlot: 'self' | 'familiar' | 'eidolon' | 'companion'; amount: string }
  | { type: 'skill_bonus'; skill: string; amount: string; condition?: string }
  | { type: 'spell_damage'; element?: string; amount: string }
  | { type: 'free_text'; note: string };  // fallback for anything not worth structurally modeling
```

`ModifierPipelineService` consumes selected FCBs, sums their contributions based on how many class levels invested in each, and emits `Effect` entries. Structural modeling is optional per-entry — anything that's purely flavor text or too niche to wire mechanically stays as `free_text`.

---

## Implementation Order

1. ~~Write this plan~~ — COMPLETE
2. ~~Write scraping plan `plans/data-scraping/favored-class-bonuses-database.md`~~ — COMPLETE
3. ~~Mark reviews both plans; approves before any code ships~~ — COMPLETE
4. ~~Add `FavoredClassBonusOption` type + barrel export~~ — COMPLETE (commit `29bdde7`)
5. ~~Scrape core 7 races by hand~~ — COMPLETE (included in scraped set)
6. ~~Dispatch scraper agents for the remaining ~30 races in parallel~~ — COMPLETE (36 races total)
7. ~~Write `src/data/favoredClassBonuses/index.ts` barrel~~ — COMPLETE
8. ~~Add `bookId` entries to `normalizeSource.ts` for any missing product codes~~ — COMPLETE (blood-of-shadows, bots, people-of-the-darklands)
9. ~~Extend `GameDataConnector` interface, `FirestoreGameDataConnector`, `StaticGameDataConnector`~~ — COMPLETE
10. ~~Extend `GameDataService` with `getFavoredClassBonuses`~~ — COMPLETE
11. ~~Write `seedFavoredClassBonuses.ts`; wire into `seedAll.ts`~~ — COMPLETE
12. ~~Add composite index to `firestore.indexes.json`~~ — COMPLETE
13. ~~Write tests (static structure validation + service integration)~~ — COMPLETE (77 tests passing)
14. ~~Run typecheck + tests (`--maxWorkers=2` per WSL feedback)~~ — COMPLETE (typecheck clean, 77 passing)
15. ~~Update `plans/implementation-plan.md` status row~~ — COMPLETE
16. ~~Update `plans/character-system-redesign.md` to reverse the Rissi race decision~~ — COMPLETE
17. Commit, push, open PR — IN PROGRESS

---

## Open Questions

1. **Multi-entry suffix naming** — For races with 2+ entries per class, should suffix be semantic (`-concentration`, `-knowledge-smite`) or numeric (`-1`, `-2`)? **Default: semantic.** Scrapers derive suffix from the concept; ambiguous cases get numeric and a note in `adminNotes`.
2. **Class name casing** — Pathfinder class names use varied casing in source material ("Magus" vs "magus"). What canonical casing matches `ExpandedClassData.name`? Needs verification during scraping. Decision: **match exactly what's in `src/data/classes/` `.name` fields.** Scraper includes a lookup table.
3. **Skinwalker sub-breeds** — Skinwalker has heritage variants (Bloodmarked, Ragebred, etc.). Does each get its own race document, or is it one Skinwalker entry? Deferred: **check against current `ALL_EXPANDED_RACES` — if only one Skinwalker entry exists there, one FCB file; otherwise, one per heritage.**
4. **Drow (Common) vs Drow (Noble)** — Two race entries exist. Do both have FCB data? **Check during scraping; ARG only defines Drow FCB on Common.**
5. **Non-PF1e-official races the app currently ships** — Does `ALL_EXPANDED_RACES` include any races that lack d20pfsrd FCB data? If so, they ship with zero alternates and fall back to HP/skill-rank only in the UI. **No action required for Phase 1.**

---

## References

- d20pfsrd Races index: https://www.d20pfsrd.com/races/
- Per-race URL pattern: `https://www.d20pfsrd.com/races/core-races/{race}/` or `/races/other-races/{category}-races/arg-{race}/`
- `plans/data-scraping/class-choices-database.md` — reference pattern for scraping plan doc structure
- `plans/scraping-agent-prompt.md` — general-purpose scraper prompt template
- `src/utils/normalizeSource.ts` — source attribution normalization
- `plans/data-quality-admin-review.md` — verificationStatus convention
