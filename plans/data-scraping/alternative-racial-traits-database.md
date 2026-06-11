# Alternative Racial Traits — Collection Plan

## Overview

Scrape every Paizo **alternative racial trait (ART)** for all races already in our catalog and
fold them into the existing `races` Firestore documents. ARTs were missed in the original race
scrape — standard `racialTraits` were captured, but the "Alternate Racial Traits" section of
each race page was skipped entirely. This plan closes that gap.

Static TS files in `src/data/races/` are seed scripts only — the authoritative copy lives in
Firestore. ARTs are stored **embedded** on each race document (an `alternativeRacialTraits[]`
array, exactly mirroring the existing `racialTraits[]`), so no new collection, connector method,
or runtime query path is introduced. `seedRaces.ts` keeps writing whole race documents; it just
now carries one additional field per race.

**Scope:** all **64 races** in `ALL_EXPANDED_RACES` (Core 7, Featured 16, Uncommon 14,
Extended 27). Monstrous/obscure races with no published ARTs simply get the field omitted.

**Primary source:** d20pfsrd.com (matches our existing race catalog — the comment in
`coreRaces.ts` reads "full d20pfsrd race catalog").
**Fallback source:** Archives of Nethys (aonprd.com) when a d20pfsrd race page is missing,
thin, or its ART section is incomplete.

**Used by:** the race-selection step of character creation. The `replaces` field is what lets the
UI enforce the core PF1e rule — picking an ART means _giving up_ the standard trait(s) it
replaces.

---

## Data Model

One new interface and one new optional field, both in `src/data/races/types.ts`. No runtime
type changes are required for scraping/seeding; the runtime `Race` type
(`src/types/race.ts`) gains a matching field in a later UI phase (see "Out of Scope" below).

```typescript
// src/data/races/types.ts

export interface AlternativeRacialTraitData {
  name: string;
  description: string; // full text, copied faithfully — never summarized
  replaces: string[]; // names of the STANDARD racial trait(s) this gives up,
  // matched to existing racialTraits[].name where possible,
  // e.g. ['Darkvision'] or ['Defensive Training', 'Hardy']
  source: string; // sourcebook, e.g. 'Advanced Race Guide', 'Blood of the North'
}

export interface ExpandedRaceData {
  // ...all existing fields unchanged...
  racialTraits: RacialTraitData[];
  alternativeRacialTraits?: AlternativeRacialTraitData[]; // NEW — omit entirely if race has none
}
```

**Notes on `replaces` (the critical field):**

- Almost every ART text ends with a sentence like _"This racial trait replaces X."_ or
  _"This trait alters Y."_ — capture the named trait(s) into `replaces[]`.
- Match the spelling to the race's existing `racialTraits[].name` when it lines up (e.g.
  `'Darkvision'`, `'Stonecunning'`). When the page names something not in our standard list
  (e.g. an ability-score racial trait or a base-stat like "the dwarf's normal speed"), record
  the text as written — the UI reconciles loosely.
- A few ARTs replace **two** traits — `replaces` is an array, so list both.
- A handful "modify" rather than "replace" (text says _alters_); still record what they touch
  in `replaces[]`. Do not invent a separate `modifies` field.
- Some ARTs have **no** replacement clause (rare — usually a bonus-only trait). Use
  `replaces: []`.

**`source` values:** the heading the ART is listed under on the page, normalized to the book
name (`'Advanced Race Guide'`, `'Bestiary'`, `'Blood of the Moon'`, etc.). If the page gives a
short code only, expand it. Do **not** use the `'pf1e-*'` slug form here — the race seed
pipeline runs every race's `source` through `normalizeSource()`, and these per-trait sources
follow the same human-readable convention already used in the race files.

---

## File Structure

ARTs are scraped into per-race-batch raw files keyed by race name, combined into a single
map, then merged onto each race object in the barrel. This keeps the existing hand-organized
race files untouched and isolates the new data for easy review.

```
src/data/races/
  raw/
    alt_traits_batch_001.ts   ← Agent output: Record<raceName, AlternativeRacialTraitData[]>
    alt_traits_batch_002.ts
    ...
    alt_traits_batch_008.ts
  altRacialTraits.ts          ← Combined barrel (written after all batches done):
                                  ALL_ALT_RACIAL_TRAITS: Record<string, AlternativeRacialTraitData[]>
  index.ts                    ← MODIFIED: merge ALL_ALT_RACIAL_TRAITS onto each race by name
  types.ts                    ← MODIFIED: add AlternativeRacialTraitData + new optional field

scripts/db/
  seedRaces.ts                ← UNCHANGED — already upserts whole race docs by name
```

**Batch file shape** (note: a _map_, not a flat array — one race page yields many ARTs):

```typescript
// Batch 001 | first: 'Dwarf' | last: 'Human' | races: 7 | traits: 138
import { AlternativeRacialTraitData } from '../types';

export const dwarfAltTraits: AlternativeRacialTraitData[] = [
  /* ... */
];
export const elfAltTraits: AlternativeRacialTraitData[] = [
  /* ... */
];
// ... one named export per race in the batch

export const batch_001: Record<string, AlternativeRacialTraitData[]> = {
  Dwarf: dwarfAltTraits,
  Elf: elfAltTraits,
  // ... keyed by EXACT race name as it appears in ExpandedRaceData.name
};
```

**Barrel merge** (`index.ts`, after combining):

```typescript
import { ALL_ALT_RACIAL_TRAITS } from './altRacialTraits';

// existing ALL_EXPANDED_RACES assembly, then:
export const ALL_EXPANDED_RACES: ExpandedRaceData[] = [
  ...CORE_RACES_EXPANDED,
  ...FEATURED_RACES /* ... */,
].map((race) => {
  const arts = ALL_ALT_RACIAL_TRAITS[race.name];
  return arts && arts.length ? { ...race, alternativeRacialTraits: arts } : race;
});
```

Race-name keys MUST match `ExpandedRaceData.name` exactly (`'Half-Elf'`, `'Aquatic Elf'`,
`'Deep One Hybrid'`). A combine-time check logs any batch key that doesn't match a known race.

---

## Source & URL Pattern

**Primary — d20pfsrd:** each race has a page with an "Alternate Racial Traits" section.
URL pattern (kebab-case race slug):
`https://www.d20pfsrd.com/races/core-races/{slug}/` (core),
`https://www.d20pfsrd.com/races/other-races/featured-races/{slug}/`,
`https://www.d20pfsrd.com/races/other-races/uncommon-races/{slug}/`,
`https://www.d20pfsrd.com/races/3rd-party-races/...` — **skip 3pp**, official Paizo only.

The directory layout on d20pfsrd is inconsistent across race tiers, so the agent's reliable
move is: fetch the race's main page, locate the "Alternate Racial Traits" heading, and parse
the entries beneath it.

**Fallback — Archives of Nethys:** `https://www.aonprd.com/Races.aspx` → race page, which
lists "Alternate Racial Traits" with explicit sourcebook attribution. Use AoN when d20pfsrd's
page 404s, lacks the section, or the ART text is clearly truncated. AoN's sourcebook labels are
authoritative for the `source` field — prefer them when both sources are consulted.

**Two-stage URL strategy (per standard agent rules):**

1. Try the provided d20pfsrd URL.
2. On failure, find the race on d20pfsrd by slug, then try the AoN race page.
3. If both fail, emit a `PAGE_FETCH_FAILED` marker for that race (see Agent Rules) and log
   both attempted URLs in the checkpoint comment. Continue with remaining races.

**Quirks:**

- Some ARTs appear under a sub-heading naming the sourcebook — preserve that as `source`.
- Drow/Drow Noble, Goblin/Monkey Goblin, Elf/Aquatic Elf share trait lineage; scrape each
  race's own page — do not copy ARTs between them.
- Several Extended/Monstrous races (Drider, Gargoyle, Reptoid, Kuru, Astomoi, etc.) have
  **no** published ARTs. That is expected — omit the field; do not stub.

---

## Agent Batch Plan

Unit of work is **per race** (one page = all of that race's ARTs), so batches are sized by race
count, front-loading the ART-dense Core/Featured races into smaller batches. ~64 races →
**8 batches → 2 rounds of 4 agents.**

### Round 1 — Batches 001–004

| Agent | Batch | Races                                                                                    |
| ----- | ----- | ---------------------------------------------------------------------------------------- |
| 1     | 001   | **Core (7):** Dwarf, Elf, Gnome, Half-Elf, Halfling, Half-Orc, Human                     |
| 2     | 002   | **Featured A (8):** Aasimar, Catfolk, Dhampir, Drow, Fetchling, Goblin, Hobgoblin, Ifrit |
| 3     | 003   | **Featured B (8):** Kobold, Orc, Oread, Ratfolk, Sylph, Tengu, Tiefling, Undine          |
| 4     | 004   | **Uncommon A (7):** Changeling, Duergar, Gillman, Grippli, Kitsune, Merfolk, Nagaji      |

### Round 2 — Batches 005–008

| Agent | Batch | Races                                                                                                                             |
| ----- | ----- | --------------------------------------------------------------------------------------------------------------------------------- |
| 5     | 005   | **Uncommon B (7):** Samsaran, Strix, Suli, Svirfneblin, Vanara, Vishkanya, Wayang                                                 |
| 6     | 006   | **Extended A (7):** Gnoll, Lizardfolk, Monkey Goblin, Skinwalker, Triaxian, Android, Aquatic Elf                                  |
| 7     | 007   | **Extended B (9):** Gathlain, Ghoran, Kasatha, Lashunta, Shabti, Syrinx, Wyrwood, Wyvaran, Trox                                   |
| 8     | 008   | **Extended C (11):** Drow Noble, Drider, Gargoyle, Astomoi, Caligni, Deep One Hybrid, Ganzi, Kuru, Munavri, Orang-Pendak, Reptoid |

Batch 008 is the largest by race count but the lightest by content — most of those races have
few or zero ARTs.

---

## Agent Rules

Standard rules (verbatim from `scraping-agent-prompt.md`), then ART-specific additions:

1. You are given a pre-assigned list of races and their URLs. Work through them in order.
2. Write your output to `src/data/races/raw/alt_traits_batch_NNN.ts`.
3. Begin the file with: `// Batch NNN | first: 'Race' | last: 'Race' | races: N | traits: M`
4. Import the type: `import { AlternativeRacialTraitData } from '../types';`
5. Keys in the batch map are the **exact** race name from `ExpandedRaceData.name`
   (e.g. `'Half-Elf'`, `'Aquatic Elf'`). Trait `name` is copied as written.
6. Do not summarize or abbreviate descriptions — copy them faithfully from the source.
7. Emit one named camelCase export per race (`dwarfAltTraits`, `halfElfAltTraits`) and one
   `batch_NNN` map at the bottom keyed by race name.
8. **URL failures:** try d20pfsrd, then AoN. Only mark a race failed if both fail. Log the race
   name and both attempted URLs in the checkpoint comment.
9. Run `npm run typecheck` before reporting done. Fix all type errors.
10. **Response text must be brief.** Write all data to the file via the Write tool. Your final
    response is a short summary only: race count, trait count, first/last race, and any
    failures. Do NOT reproduce file contents or trait text — it causes a fatal output error.

ART-specific:

11. **`replaces` is mandatory analysis.** Read each ART's replacement clause and populate
    `replaces[]` with the standard trait name(s) given up. Match to the race's existing
    `racialTraits[].name` spelling where it lines up. Bonus-only ARTs with no replacement use
    `replaces: []`.
12. Capture the per-ART `source` from the sub-heading / AoN sourcebook label. Use the
    human-readable book name (`'Advanced Race Guide'`), not a slug.
13. **Skip 3rd-party content.** Only official Paizo ARTs. If a race page mixes them, stop at the
    3pp section.
14. A race with **no** ARTs: include its key in the batch map with an empty array
    (`Drider: []`) so reviewers can confirm it was checked, not missed. The barrel drops empty
    arrays at merge time.
15. **Race fetch failure (both sources):** set that race's value to a single sentinel trait
    `{ name: 'PAGE_FETCH_FAILED', description: 'PAGE_FETCH_FAILED', replaces: [], source: '' }`
    and log both URLs in the checkpoint comment. Do not stop the batch.
16. Every ART omits `createdBy`/`campaignId` — those are race-document-level metadata, not
    per-trait.

---

## Sample Documents

Hand-authored to validate the model before agents launch. Two ART-dense core races plus one
"alters not replaces" case.

### 1. Dwarf — selected ARTs

```typescript
export const dwarfAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Ancient Enmity',
    description:
      "Some dwarves' hatred of their ancient elven foes is so ingrained that they gain a +1 bonus on attack rolls against humanoid creatures of the elf subtype. This racial trait replaces defensive training.",
    replaces: ['Defensive Training'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Lorekeeper',
    description:
      'Dwarves with this racial trait receive a +2 bonus on Knowledge (history) checks that pertain to dwarves or their enemies. They can make such skill checks untrained. This racial trait replaces greed.',
    replaces: ['Greed'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Stonesinger',
    description:
      "Some dwarves' affinity for the earth grants them greater powers. Dwarves with this racial trait are treated as one level higher when casting spells with the earth descriptor, using granted powers of the Earth domain, using the bloodline powers of the elemental (earth) bloodline, and determining the effects of spell-like abilities with the earth descriptor. This racial trait replaces stonecunning.",
    replaces: ['Stonecunning'],
    source: 'Advanced Race Guide',
  },
];
```

### 2. Half-Orc — ART replacing two traits

```typescript
export const halfOrcAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Acute Darkvision',
    description:
      'Some half-orcs have especially sensitive eyes. They gain darkvision with a range of 90 feet. This racial trait replaces the darkvision and light sensitivity racial traits.',
    replaces: ['Darkvision', 'Light Sensitivity'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Sacred Tattoo',
    description:
      'Many half-orcs decorate themselves with tattoos, piercings, and ritual scars that they consider sacred markings. Half-orcs with this racial trait gain a +1 luck bonus on all saving throws. This racial trait replaces orc ferocity.',
    replaces: ['Orc Ferocity'],
    source: 'Advanced Race Guide',
  },
];
```

### 3. Human — bonus-only / "alters" case

```typescript
export const humanAltTraits: AlternativeRacialTraitData[] = [
  {
    name: 'Awareness',
    description:
      'Humans raised within monastic traditions or who have endured rigorous training tend to be more aware than other people. Humans with this trait gain a +1 bonus on initiative checks and Perception checks. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Advanced Race Guide',
  },
  {
    name: 'Heart of the Fields',
    description:
      'Humans from agrarian communities are hardworking and able to thrive in difficult conditions. The human gains a +4 racial bonus on a single Craft or Profession skill. Once per day, they can ignore a fatigued or exhausted condition for 1 hour as if they were not fatigued or exhausted. This racial trait replaces skilled.',
    replaces: ['Skilled'],
    source: 'Advanced Race Guide',
  },
];
```

---

## Seeding

`scripts/db/seedRaces.ts` — **no change required.** It already imports `ALL_EXPANDED_RACES`
and upserts each race as a whole document by `raceDocId(name)`. Once the barrel merge attaches
`alternativeRacialTraits[]` to each race object, re-running the seed simply overwrites each race
document with the enriched version. The script is idempotent (upsert, not clear+insert), so
campaign/homebrew race content is preserved.

Run with:

```bash
npx tsx scripts/db/seedRaces.ts --dry-run   # verify counts
npx tsx scripts/db/seedRaces.ts             # staging (default project)
```

**Do not run the seed automatically.** Leave it ready.

---

## Out of Scope — UI & Runtime (separate follow-up)

This plan delivers the **data**. Wiring ARTs into the app is a separate task:

- Add `alternativeRacialTraits?` to the runtime `Race` type (`src/types/race.ts`) and a
  character-level field to record chosen ARTs (e.g. `selectedAlternativeTraits?: string[]`).
- `RaceSelector` / `RacePickerSheet` UI to pick ARTs and gray out the standard traits they
  replace.
- Mechanical effect resolution (the `Effect[]` system) — out of scope here; ARTs are stored as
  text exactly like standard `racialTraits`.

---

## Execution Checklist

- [ ] Add `AlternativeRacialTraitData` + optional field to `src/data/races/types.ts`
- [ ] Hand-author the 3 sample race ART exports, confirm `npm run typecheck` passes
- [ ] Round 1: launch 4 agents in parallel (batches 001–004)
- [ ] Verify checkpoint headers, note any `PAGE_FETCH_FAILED` races
- [ ] Round 2: launch 4 agents in parallel (batches 005–008)
- [ ] Resolve any failed races by hand (AoN lookup)
- [ ] Combine batches into `src/data/races/altRacialTraits.ts` (`ALL_ALT_RACIAL_TRAITS`)
- [ ] Merge map onto `ALL_EXPANDED_RACES` in `index.ts`; log any unmatched race-name keys
- [ ] `npm run typecheck` — zero errors
- [ ] `npx tsx scripts/db/seedRaces.ts --dry-run` — confirm race count unchanged, spot-check ARTs
- [ ] Hand off to the UI/runtime follow-up task
      </content>
