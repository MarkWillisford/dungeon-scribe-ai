# Path of War & Path of War: Expanded — Data Scraping Plan

## Context

Architecture for the full initiating system (ToB + PoW + PoWE) is defined in [`plans/initiating-system.md`](../initiating-system.md) (PR #63, merged 2026-04-16). That doc is the source of truth for **types, services, file layout, and seed pipeline**. This doc is the **scraping execution playbook** — what to extract, from where, in what order, at what batch size.

Scope of this plan: **Path of War + Path of War: Expanded** (both Dreamscarred Press). Tome of Battle is out of scope here; it's 3.5e content from a different source (tob-tools.net) and warrants its own plan.

Primary source: **d20pfsrd.com** hosts full PoW/PoWE content with Dreamscarred's permission. Backup: `libraryofmetzofitz.fandom.com`.

**Hard limit: 25 items per agent batch.** This applies to every phase. Oversized data pools split into part 2 / part 3 files.

---

## Status (as of 2026-04-16)

**NOT STARTED — foundation required before any scraping begins.**

---

## Data inventory — everything that needs scraping

Mapped from Mark's plan. Every row here produces data files that need book-sourced content.

| # | Domain | Count | Source per entry | Phase |
| --- | --- | --- | --- | --- |
| 1 | Disciplines (PoW + PoWE) | ~20 | d20pfsrd discipline index pages | 1 |
| 2 | Maneuvers (PoW + PoWE) | ~500+ | d20pfsrd per-maneuver pages | 2 |
| 3 | Stances (PoW + PoWE) | ~100+ | d20pfsrd per-stance pages | 3 |
| 4 | Base classes (PoW + PoWE) | 6 | d20pfsrd per-class pages + tables | 4 |
| 5 | Base class progression tables | 6 × 20 levels | Class page tables | 4 |
| 6 | Prestige classes | 9 | d20pfsrd per-prestige-class pages | 5 |
| 7 | Prestige class progression tables | 9 × 10 levels | Class page tables | 5 |
| 8 | Initiating-granting archetypes | 7 | Archetype pages on each base class | 6 |
| 9 | Discipline-swapping archetypes | ~13 | Archetype pages on Stalker/Warder/Warlord/Zealot | 6 |
| 10 | Martial Traditions | ~20 | d20pfsrd traditions index + per-tradition pages | 7 |
| 11 | PoW / PoWE feats | ~40–60 (scout first) | d20pfsrd feats index | 8 |

Mark flagged these explicit **TBDs requiring source book** (can't all be found on d20pfsrd):
- ~10 Martial Traditions — favored discipline + alignment
- ~8 discipline-swapping archetypes — exact gained/lost disciplines
- Progression table per-level values

Scraping agents must flag items they can't resolve from d20pfsrd so Doug/Mark can do source-book lookup.

---

## Phase 0 — Foundation (blocks all scraping)

Mechanical code drop from Mark's plan into the repo. No scraping, no creative decisions.

| Task | File(s) |
| --- | --- |
| Types (copy verbatim from initiating-system.md Phase 1) | `src/types/initiating.ts` — `ManeuverDefinition`, `StanceDefinition`, `DisciplineDefinition`, `MartialTradition`, `InitiatingPool`, `RecoveryMechanic`, etc. |
| Extend `DataQualityFields` onto every new type | same file — every catalog type must `extends DataQualityFields` |
| bookIds for 3pp sources | `src/utils/normalizeSource.ts` — `dsp-pow` → Path of War / Dreamscarred Press; `dsp-powe` → Path of War: Expanded / Dreamscarred Press |
| Empty data directories with index barrels | `src/data/disciplines/index.ts`, `src/data/maneuvers/index.ts`, `src/data/stances/index.ts`, `src/data/martialTraditions/index.ts` — each exports an empty `ALL_*` array for now |
| Progression table skeleton | `src/data/classes/initiatingProgressionTables.ts` — types + empty registry |
| Class data skeletons | `src/data/classes/initiatingClasses.ts`, `src/data/classes/initiatingPrestigeClasses.ts` — empty arrays |
| Verify scripts | `scripts/verify-disciplines.ts`, `scripts/verify-maneuvers.ts`, `scripts/verify-stances.ts`, `scripts/verify-martial-traditions.ts` — mirror `scripts/verify-feats.ts` pattern (duplicate IDs, required fields, counts by source/discipline) |

**Review checklist before Phase 0 ships:**
- Every new catalog type `extends DataQualityFields` (don't repeat the PR #57 review miss)
- `AppliedTemplate`-style character subdocs stay clean (no `DataQualityFields` on character state)
- bookIds match Mark's plan exactly (`dsp-pow` / `dsp-powe`, not `pow` / `powe`)

---

## Phase 1 — Disciplines (metadata, 1 agent)

Disciplines are small — name, description, associated skill, associated weapon groups, sourceSystem. Must land first because every maneuver/stance URL is discipline-scoped.

**Source URLs (expected, agent to verify on first fetch):**
- PoW: `https://www.d20pfsrd.com/path-of-war/disciplines/`
- PoWE: `https://www.d20pfsrd.com/path-of-war-expanded/disciplines/`

### PoW base disciplines (10)

Broken Blade, Golden Lion, Iron Tortoise, Primal Fury, Scarlet Throne, Silver Crane, Solar Wind, Steel Serpent, Thrashing Dragon, Veiled Moon

### PoWE disciplines (10)

Black Seraph, Cursed Razor, Elemental Flux, Eternal Guardian, Mithral Current, Piercing Thunder, Riven Hourglass, Shattered Mirror, Sleeping Goddess, Tempest Gale

**Output files:** `src/data/disciplines/pow.ts`, `src/data/disciplines/pow-extended.ts`

**Batch plan:** 20 items total, under the 25-cap. **1 agent, 1 pass.**

---

## Phase 2 — Maneuvers (~500+ entries, ~25 agents)

Each discipline has ~20–40 maneuvers across levels 1–9. Every maneuver gets extracted from its own d20pfsrd page — the text is the authoritative mechanical description.

**URL pattern (agent to verify):** `https://www.d20pfsrd.com/path-of-war<-expanded>/disciplines/<slug>/`

The discipline page lists all maneuvers. Per-maneuver detail pages hang off that index.

**Output file pattern:** `src/data/maneuvers/raw/<pow|powe>-<discipline-slug>.ts`
If a discipline has >25 maneuvers, split into part 2: `<pow|powe>-<discipline-slug>-part2.ts`.

### PoW maneuvers — batch assignments (one row = one agent)

| # | Discipline | Expected | Split? | File(s) |
| --- | --- | --- | --- | --- |
| 1 | Broken Blade | ~29 | 2 | `pow-broken-blade.ts` (lvl 1–4), `pow-broken-blade-part2.ts` (lvl 5–9) |
| 2 | Golden Lion | ~30 | 2 | `pow-golden-lion.ts` + `part2` |
| 3 | Iron Tortoise | ~30 | 2 | `pow-iron-tortoise.ts` + `part2` |
| 4 | Primal Fury | ~30 | 2 | `pow-primal-fury.ts` + `part2` |
| 5 | Scarlet Throne | ~30 | 2 | `pow-scarlet-throne.ts` + `part2` |
| 6 | Silver Crane | ~30 | 2 | `pow-silver-crane.ts` + `part2` |
| 7 | Solar Wind | ~30 | 2 | `pow-solar-wind.ts` + `part2` |
| 8 | Steel Serpent | ~30 | 2 | `pow-steel-serpent.ts` + `part2` |
| 9 | Thrashing Dragon | ~30 | 2 | `pow-thrashing-dragon.ts` + `part2` |
| 10 | Veiled Moon | ~30 | 2 | `pow-veiled-moon.ts` + `part2` |

### PoWE maneuvers — batch assignments

| # | Discipline | Expected | Split? | File(s) |
| --- | --- | --- | --- | --- |
| 11 | Black Seraph | ~30 | 2 | `powe-black-seraph.ts` + `part2` |
| 12 | Cursed Razor | ~30 | 2 | `powe-cursed-razor.ts` + `part2` |
| 13 | Elemental Flux | ~30 | 2 | `powe-elemental-flux.ts` + `part2` |
| 14 | Eternal Guardian | ~30 | 2 | `powe-eternal-guardian.ts` + `part2` |
| 15 | Mithral Current | ~30 | 2 | `powe-mithral-current.ts` + `part2` |
| 16 | Piercing Thunder | ~30 | 2 | `powe-piercing-thunder.ts` + `part2` |
| 17 | Riven Hourglass | ~30 | 2 | `powe-riven-hourglass.ts` + `part2` |
| 18 | Shattered Mirror | ~30 | 2 | `powe-shattered-mirror.ts` + `part2` |
| 19 | Sleeping Goddess | ~30 | 2 | `powe-sleeping-goddess.ts` + `part2` |
| 20 | Tempest Gale | ~30 | 2 | `powe-tempest-gale.ts` + `part2` |

**Split rule:** Part 1 covers maneuver levels 1–4; Part 2 covers levels 5–9. If a discipline turns out to have ≤25 maneuvers total, skip part 2 and bundle everything in part 1.

**Parallelism:** 3 agents concurrent per round = ~200k tokens. 40 part-1/part-2 agents total = 13–14 rounds. Run verify pipeline between rounds, not at the end.

---

## Phase 3 — Stances (~100+ entries, 4 agents)

Each discipline has ~3–9 stances. Most disciplines fit comfortably with all stances in one file. Since stances are sparser than maneuvers, we can bundle multiple disciplines per agent.

**Output file pattern:** `src/data/stances/raw/<pow|powe>-<discipline-slug>.ts` (one file per discipline)

### Batch assignments (25-cap applied)

| # | Bundle | Estimated entries | Files produced |
| --- | --- | --- | --- |
| 21 | PoW stances — first 5 disciplines (Broken Blade, Golden Lion, Iron Tortoise, Primal Fury, Scarlet Throne) | ~25 | 5 files |
| 22 | PoW stances — remaining 5 disciplines (Silver Crane, Solar Wind, Steel Serpent, Thrashing Dragon, Veiled Moon) | ~25 | 5 files |
| 23 | PoWE stances — first 5 disciplines (Black Seraph, Cursed Razor, Elemental Flux, Eternal Guardian, Mithral Current) | ~25 | 5 files |
| 24 | PoWE stances — remaining 5 disciplines (Piercing Thunder, Riven Hourglass, Shattered Mirror, Sleeping Goddess, Tempest Gale) | ~25 | 5 files |

---

## Phase 4 — Base classes (6 classes, 6 agents)

Each class needs: HD, BAB, saves, skill ranks, class skills, armor/weapon proficiencies, the **20-level progression table** (BAB + saves + class features + maneuvers-known / maneuvers-readied / stances-known columns), per-level class features with full descriptions, key ability for initiating, default disciplines, recovery mechanic, favored class bonuses.

**Source:** `https://www.d20pfsrd.com/path-of-war<-expanded>/classes/<class-slug>/`

One class = one agent. Each class easily fits under the 25-item cap if we count features+table as one unit — but the class features list for a base class typically has 15–25 named features across 20 levels, so one agent = one class is the right size.

| # | Class | Book | Output files |
| --- | --- | --- | --- |
| 25 | Stalker | PoW | `src/data/classes/initiating/stalker.ts` + progression table entry |
| 26 | Warder | PoW | `warder.ts` + progression |
| 27 | Warlord | PoW | `warlord.ts` + progression |
| 28 | Harbinger | PoWE | `harbinger.ts` + progression |
| 29 | Mystic | PoWE | `mystic.ts` + progression |
| 30 | Zealot | PoWE | `zealot.ts` + progression |

Each agent must also produce the entry for `initiatingProgressionTables.ts` — the `[maneuversKnown, maneuversReadied, stancesKnown][]` array for all 20 levels.

**Note on Mark's plan line 641:** "Progression table exact values — per-level numbers need source book verification." d20pfsrd may have some gaps here; agents must flag any cell they can't read off the page.

---

## Phase 5 — Prestige classes (9 classes, 9 agents)

Each prestige class needs: prerequisites, HD, BAB, saves, 10-level progression table, per-level class features, discipline access gained (some prestige classes grant new discipline access, tracked via `bonusDisciplines`).

**Source:** `https://www.d20pfsrd.com/path-of-war<-expanded>/prestige-classes/<class-slug>/`

| # | Prestige Class | Book | Output file |
| --- | --- | --- | --- |
| 31 | Animus Adept | PoWE | `src/data/classes/initiating/prestige/animus-adept.ts` |
| 32 | Awakened Blade | PoW | `awakened-blade.ts` |
| 33 | Battle Templar | PoWE | `battle-templar.ts` |
| 34 | Bladecaster | PoW | `bladecaster.ts` |
| 35 | Dragon Fury | PoW | `dragon-fury.ts` |
| 36 | Landsknecht | PoWE | `landsknecht.ts` |
| 37 | Mage Hunter | PoWE | `mage-hunter.ts` |
| 38 | Phoenix Champion | PoW | `phoenix-champion.ts` |
| 39 | Umbral Blade | PoWE | `umbral-blade.ts` |

Each prestige class is smaller than a base class (10 levels, fewer features). 1 agent per class, no splits expected.

---

## Phase 6 — Martial archetypes (~20 archetypes, 6–8 agents)

Two sub-types, both defined in Mark's plan (Phase 4):

### 6a — Archetypes that GRANT initiating to non-initiating classes (7)

Each needs: base class, IL progression rate (full/half), key ability, discipline list, what class features they trade away, per-level progression table.

**Source:** d20pfsrd archetype pages nested under the base class. URL pattern: `https://www.d20pfsrd.com/path-of-war<-expanded>/classes/<base-class>/<archetype-slug>/`

| # | Archetype | Base | Output file |
| --- | --- | --- | --- |
| 40 | Primal Disciple | Barbarian | `src/data/classes/archetypes/primal-disciple.ts` |
| 41 | Rubato | Bard | `rubato.ts` |
| 42 | Myrmidon | Fighter | `myrmidon.ts` |
| 43 | Monk of the Silver Fist | Monk | `monk-of-the-silver-fist.ts` |
| 44 | Knight Disciple | Paladin | `knight-disciple.ts` |
| 45 | Ambush Hunter | Ranger | `ambush-hunter.ts` |
| 46 | Hidden Blade | Rogue | `hidden-blade.ts` |

One agent per archetype — 7 agents total. Each also emits a progression-table entry.

### 6b — Archetypes that SWAP disciplines on initiating classes (~13)

Smaller data — each just needs gained/lost discipline lists and any modified class features.

**Source:** d20pfsrd archetype pages on each initiating class.

| # | Archetype | Base Class | Output file |
| --- | --- | --- | --- |
| 47 (bundle 1: Warder, 5 archetypes) | Fiendbound Marauder, Ordained Defender, Dervish Defender, Zweihander Sentinel, Hawkguard | Warder | One file `warder-archetypes.ts` with 5 entries |
| 48 (bundle 2: Warder + Warlord, ~5 archetypes) | Sworn Defender (Warder), Bannerman, Bushi, Steelfist Commando, Vanguard Commander (Warlord) | mixed | `warder-warlord-archetypes.ts` |
| 49 (bundle 3: Stalker + Zealot, 3 archetypes) | Brutal Slayer (Stalker), Discordant Crusader, Void Prophet (Zealot) | mixed | `stalker-zealot-archetypes.ts` |

**Mark flagged (plan lines 406–413):** 8 of these have `TBD` for gained/lost disciplines. Agent must flag anything it can't confirm from d20pfsrd — Doug/Mark source-book it afterward.

---

## Phase 7 — Martial Traditions (~20 entries, 1 agent)

**Source:** `https://www.d20pfsrd.com/path-of-war-expanded/martial-traditions/` (PoWE only; PoW base has no traditions).

Each tradition: name, description, favored discipline (the one members swap in), alignment requirement, source attribution.

**Output file:** `src/data/martialTraditions/traditions.ts` (single file — entries are small)

20 entries = under 25-cap, **1 agent.**

**Mark flagged (plan lines 442–458):** 10 traditions have `TBD` for favored discipline. Agent must report which TBDs it could resolve and which remain for source-book lookup.

---

## Phase 8 — PoW / PoWE feats (scout + scrape)

Mark's plan doesn't enumerate PoW feats; these need a scout pass first to produce a count, then a scraping pass.

**Source:** `https://www.d20pfsrd.com/path-of-war/feats/` and the PoWE equivalent.

| # | Pass | Work | Output |
| --- | --- | --- | --- |
| 50 | Scout | Fetch the PoW + PoWE feat index pages. Report: total count, list of feat names + URLs. No extraction. | Discovery report (inline chat) |
| 51+ | Scrape | 25-item batches, one bundle per file. Target files: `src/data/feats/pow-feats.ts`, `src/data/feats/powe-feats.ts` (add `-part2` if either exceeds 25) | Feat definitions |

Feats extend `FeatDefinition` (existing type — no new shape). Use the PoW/PoWE prerequisite types added in Mark's plan Phase 1 (`initiator_level`, `maneuver_known`, `discipline_access`).

---

## Agent prompt template — maneuvers & stances (Phase 2 & 3)

```
You are scraping Path of War data from d20pfsrd.com for the Dungeon Scribe AI project.

Target: <discipline name>, <maneuvers levels 1-4 | maneuvers levels 5-9 | stances> from <Path of War | Path of War: Expanded>
Source: https://www.d20pfsrd.com/path-of-war<-expanded>/disciplines/<slug>/

Task:
1. Fetch the discipline's index page. Confirm it lists maneuvers and stances in the expected format.
2. For each <maneuver|stance> in the assigned range, fetch the per-entry page and extract the full mechanical text.
3. Write entries to: src/data/<maneuvers|stances>/raw/<pow|powe>-<slug><-part2>.ts
4. Wire the export into src/data/<maneuvers|stances>/index.ts

Types reference: src/types/initiating.ts — ManeuverDefinition, StanceDefinition

Required fields per entry:
- id: kebab-case, prefix with <pow|powe>- to avoid collisions across books, e.g. 'pow-broken-blade-distracting-ember'
- name: as printed
- disciplineId: must match the DisciplineDefinition id from Phase 1 (kebab-case)
- level: 1-9 integer
- type (maneuvers only): 'strike' | 'boost' | 'counter'
- actionType: 'standard' | 'full-round' | 'swift' | 'immediate' | 'move' | 'free'
- range, target?, area?, duration, savingThrow?, description
- prerequisites: ManeuverPrerequisite (usually { disciplineManeuversKnown: N })
- source: use normalizeSource helper; bookId = 'pow' or 'powe'; publisher: 'Dreamscarred Press'
- isOfficial: false  (third-party)
- visibility: 'global', rev: 1
- verificationStatus: 'needs_review' as const  (REQUIRED — DataQualityFields)

Hard rules:
1. CAP: 25 items per agent output. If the assigned range has more than 25, stop at 25 and report the overflow.
2. If after 10 web fetches you cannot find the discipline page, stop and report. Do not guess URLs indefinitely.
3. Descriptions must be the full mechanical text, not a summary.
4. Do not fabricate fields — if the book doesn't specify an area or save, omit the field.
5. Counters have an immediate-action trigger; don't default to 'strike' for counters.
6. After writing, run: npm run typecheck

Report: count of entries written, any entries you couldn't fully resolve, URL you used.
```

## Agent prompt template — classes & prestige classes (Phase 4 & 5)

```
You are scraping Path of War class data from d20pfsrd.com.

Target: <class name> from <Path of War | Path of War: Expanded>
Source: https://www.d20pfsrd.com/path-of-war<-expanded>/<classes|prestige-classes>/<class-slug>/

Task:
1. Fetch the class page. Extract:
   - Full class description, role, background
   - HD, BAB progression, save progressions (good/poor)
   - Skill ranks per level, class skills list
   - Armor/weapon/shield proficiencies
   - Key ability score for initiating
   - Default disciplines (list of kebab-case disciplineIds)
   - Recovery mechanic (match Mark's RecoveryMechanic discriminated union)
   - Per-level class features (name + full text) for levels 1–20 (base) or 1–10 (prestige)
   - Favored class bonuses (base classes only)
2. Extract the progression table columns: maneuvers known, maneuvers readied, stances known — one triple per level.
3. Write class to src/data/classes/initiating/<slug>.ts using the ExpandedClassData + initiating pattern from Mark's plan Phase 1.
4. Append the progression-table entry to src/data/classes/initiatingProgressionTables.ts (registry key = <SLUG>_PROGRESSION).

Hard rules:
1. CAP: one class per agent, one file per agent.
2. Every class feature needs full mechanical text, not a summary.
3. If the d20pfsrd page is missing any progression cell, flag it — do not invent values.
4. verificationStatus: 'needs_review' as const on the class definition.

Report: class features extracted, any flags for missing data (especially progression cells), URL used.
```

## Agent prompt template — archetypes (Phase 6)

```
You are scraping Path of War archetype data from d20pfsrd.com.

Target: <archetype name> from <base class>, book: <PoW | PoWE>
Source: https://www.d20pfsrd.com/<base-class-path>/<archetype-slug>/ — verify on first fetch

Task (GRANT archetypes):
  Extract full ArchetypeData with 'initiating' field populated:
  - IL progression ('full' | 'half')
  - Initiating ability
  - Discipline list
  - Recovery mechanic
  - Per-level progression table (maneuvers known/readied, stances known)
  - What class features are replaced at which levels

Task (SWAP archetypes):
  Extract ArchetypeData with 'disciplineSwaps' field populated:
  - gained: disciplineIds added
  - lost: disciplineIds removed
  - Any other modified class features

Hard rules:
1. CAP: one archetype per agent for GRANT type; up to 5 per agent for SWAP type (they're shorter).
2. If gained/lost discipline isn't stated on d20pfsrd, mark the field with a TBD marker and flag in the report — do not invent.
3. verificationStatus: 'needs_review' as const on every entry.

Report: entries written, TBD flags, URL used.
```

---

## Verification pipeline (run after EVERY batch)

```bash
npx tsx scripts/verify-disciplines.ts
npx tsx scripts/verify-maneuvers.ts
npx tsx scripts/verify-stances.ts
npx tsx scripts/verify-martial-traditions.ts
npm run typecheck
npm test
```

Don't wait until the end to verify. Each batch must green-light before the next launches.

---

## Lessons carried forward (from feats/traits expansion)

1. **25-entry cap per agent.** Hard — don't let agents promise more, they will drop entries.
2. **Agents write files directly** and wire into `index.ts` themselves. Faster than extracting output manually.
3. **Duplicate handling.** PoW and PoWE sometimes share discipline names with variant content. Use `pow-` vs `powe-` ID prefixes. If a maneuver appears verbatim in both books, keep both entries with distinct source attribution — dedup later via the same strategy traits used (`_pow`, `_powe` suffix if needed).
4. **Common agent errors to pre-empt in the prompt:**
   - `'immediate action'` (with space) → must be `'immediate'`
   - Missing `verificationStatus` — REQUIRED (repeat PR #57 lesson)
   - `isOfficial: true` on 3pp → must be `false`
   - Wrong import path → `from '@/types/initiating'`
   - Using discipline display name as `disciplineId` → must be kebab-case
   - Fabricated fields when the book is silent — omit instead
5. **No URL guessing.** 10-fetch cap, then stop. Don't burn tokens on 404 loops.
6. **Token cost.** Each maneuver/stance agent ≈ 60–80k tokens. Each class agent ≈ 80–120k tokens (longer pages, more features). 3-agent batch ≈ 200–300k tokens.
7. **Flag TBDs loudly.** If Mark's plan marks a field TBD and d20pfsrd doesn't have it, agent writes the entry with a placeholder value + reports the TBD. Doug/Mark source-book it later.
8. **Flaky tests** — re-run once before investigating.

---

## Execution order

Phases with no mutual dependency can overlap; otherwise sequential.

```
Phase 0 (Foundation)
    ↓
Phase 1 (Disciplines)  — must complete; every downstream item references disciplineId
    ↓
Phase 2 (Maneuvers) ─┐
Phase 3 (Stances)  ──┤ parallel after Phase 1
Phase 7 (Traditions)─┤ parallel after Phase 1
Phase 8 (Feats)    ──┘
    ↓
Phase 4 (Base classes)   — can start after Phase 1 but best after 2/3 so discipline IDs & maneuver IDs are concrete
    ↓
Phase 5 (Prestige) ─┐ parallel after Phase 4
Phase 6 (Archetypes)┘
```

---

## How to Resume (clean start)

1. Read this file + `plans/initiating-system.md`
2. Confirm Phase 0 foundation has shipped (`ls src/types/initiating.ts`)
3. Check current totals via verify scripts
4. Find the lowest-numbered Phase with incomplete items in the progress tracker below
5. Launch the next batch of 3 agents using the appropriate prompt template
6. Agents write files + wire into index barrels
7. Run verification pipeline
8. Update the progress tracker in this file with current counts
9. Repeat

---

## Progress tracker

Update after each batch. Agent # references the numbered rows in phase tables above.

### Phase 0 — Foundation
- [ ] `src/types/initiating.ts` (all types, all extend `DataQualityFields`)
- [ ] `src/utils/normalizeSource.ts` — `dsp-pow`, `dsp-powe` bookIds
- [ ] Data directories + empty barrel `index.ts` (disciplines, maneuvers, stances, martialTraditions)
- [ ] `initiatingProgressionTables.ts` skeleton
- [ ] `initiatingClasses.ts` / `initiatingPrestigeClasses.ts` skeletons
- [ ] Verify scripts (4)

### Phase 1 — Disciplines (0/20) [Agent 1]
- [ ] PoW (0/10)
- [ ] PoWE (0/10)

### Phase 2 — Maneuvers (0/20 disciplines, 0/40 agents)
- [ ] Broken Blade — part1, part2 [Agents 1a, 1b]
- [ ] Golden Lion — part1, part2 [Agents 2a, 2b]
- [ ] Iron Tortoise — part1, part2
- [ ] Primal Fury — part1, part2
- [ ] Scarlet Throne — part1, part2
- [ ] Silver Crane — part1, part2
- [ ] Solar Wind — part1, part2
- [ ] Steel Serpent — part1, part2
- [ ] Thrashing Dragon — part1, part2
- [ ] Veiled Moon — part1, part2
- [ ] Black Seraph — part1, part2
- [ ] Cursed Razor — part1, part2
- [ ] Elemental Flux — part1, part2
- [ ] Eternal Guardian — part1, part2
- [ ] Mithral Current — part1, part2
- [ ] Piercing Thunder — part1, part2
- [ ] Riven Hourglass — part1, part2
- [ ] Shattered Mirror — part1, part2
- [ ] Sleeping Goddess — part1, part2
- [ ] Tempest Gale — part1, part2

### Phase 3 — Stances (0/4 bundle agents)
- [ ] PoW stances bundle 1 (BB, GL, IT, PF, ST) [Agent 21]
- [ ] PoW stances bundle 2 (SC, SW, SS, TD, VM) [Agent 22]
- [ ] PoWE stances bundle 1 (BS, CR, EF, EG, MC) [Agent 23]
- [ ] PoWE stances bundle 2 (PT, RH, SM, SG, TG) [Agent 24]

### Phase 4 — Base classes (0/6)
- [ ] Stalker [Agent 25]
- [ ] Warder [Agent 26]
- [ ] Warlord [Agent 27]
- [ ] Harbinger [Agent 28]
- [ ] Mystic [Agent 29]
- [ ] Zealot [Agent 30]

### Phase 5 — Prestige classes (0/9)
- [ ] Animus Adept [Agent 31]
- [ ] Awakened Blade [Agent 32]
- [ ] Battle Templar [Agent 33]
- [ ] Bladecaster [Agent 34]
- [ ] Dragon Fury [Agent 35]
- [ ] Landsknecht [Agent 36]
- [ ] Mage Hunter [Agent 37]
- [ ] Phoenix Champion [Agent 38]
- [ ] Umbral Blade [Agent 39]

### Phase 6a — Grant archetypes (0/7)
- [ ] Primal Disciple [Agent 40]
- [ ] Rubato [Agent 41]
- [ ] Myrmidon [Agent 42]
- [ ] Monk of the Silver Fist [Agent 43]
- [ ] Knight Disciple [Agent 44]
- [ ] Ambush Hunter [Agent 45]
- [ ] Hidden Blade [Agent 46]

### Phase 6b — Swap archetypes (0/3 bundle agents)
- [ ] Warder bundle 1 [Agent 47]
- [ ] Warder/Warlord bundle [Agent 48]
- [ ] Stalker/Zealot bundle [Agent 49]

### Phase 7 — Martial Traditions (0/~20) [Agent single-pass]

### Phase 8 — Feats (0/?)
- [ ] Scout pass [Agent 50]
- [ ] Scrape passes [Agents 51+]

---

## Key file paths

- Architecture plan: [`plans/initiating-system.md`](../initiating-system.md)
- Types: `src/types/initiating.ts` (Phase 0 output)
- Source normalization: `src/utils/normalizeSource.ts`
- Disciplines: `src/data/disciplines/{pow,pow-extended}.ts`
- Maneuvers: `src/data/maneuvers/raw/<pow|powe>-<discipline>.ts`
- Stances: `src/data/stances/raw/<pow|powe>-<discipline>.ts`
- Martial Traditions: `src/data/martialTraditions/traditions.ts`
- Base classes: `src/data/classes/initiating/<class-slug>.ts`
- Prestige classes: `src/data/classes/initiating/prestige/<class-slug>.ts`
- Archetypes: `src/data/classes/archetypes/<archetype-slug>.ts`
- Progression tables: `src/data/classes/initiatingProgressionTables.ts`
- Verification: `scripts/verify-{disciplines,maneuvers,stances,martial-traditions}.ts` (Phase 0 outputs)
- Seed scripts: `scripts/db/seed{Disciplines,Maneuvers,Stances,MartialTraditions}.ts` (Mark's plan Phase 9)
