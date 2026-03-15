# Mass Data Expansion: Full d20pfsrd Feats & Traits

## Context

Our Pathfinder 1e app has **251 feats** and **93 traits** at project start. The players optimize hard across every archetype and pull from any Paizo source on d20pfsrd. We need comprehensive coverage: **~2000+ feats** and **~900+ traits**.

The engine (types, services, pipeline, index files) is already built. This is a pure data population task using parallel agents.

---

## CURRENT STATUS (as of 2026-03-09)

### Progress: 1,785 feats across 43 files

**Verified totals: 1,785 feats (43 files), 458 traits (12 files)**

Last clean verified state:

- `npx tsx scripts/verify-feats.ts` → 1,785 feats, 0 duplicate IDs, 0 validation errors
- `npx tsx scripts/verify-traits.ts` → 458 traits, 0 duplicate IDs, 0 validation errors
- `npm run typecheck` → clean (pre-existing errors in abjurationSpells.ts only — unrelated)
- `npm test` → 409/409 tests pass (24 suites)

---

## IMMEDIATE NEXT STEPS

Launch these 3 agents in parallel:

**1. Plane-Hopper's Handbook** → `src/data/feats/planeHopperFeats.ts` (export `PLANE_HOPPER_FEATS`)
**2. Paths of the Righteous** → `src/data/feats/pathsRighteousFeats.ts` (export `PATHS_RIGHTEOUS_FEATS`)
**3. Divine Anthology** → `src/data/feats/divineAnthologyFeats.ts` (export `DIVINE_ANTHOLOGY_FEATS`)

### Source Books NOT YET COVERED (priority order)

1. Plane-Hopper's Handbook ← **NEXT**
2. Paths of the Righteous ← **NEXT**
3. Divine Anthology ← **NEXT**
4. Villain Codex
5. Taldor, Fallen Empire
6. Distant Shores

### LESSON LEARNED — obscure books + URL guessing = token waste

- Monster Hunter's Handbook: 4 feats, 173,944 tokens (622 tool calls, mostly 404s)
- Add to all future prompts: "If after 10 web fetches you cannot find a feat index page, write only what you've confirmed and stop. Do not guess URLs indefinitely."

### Traits expansion still needed

- Adventure Path campaign traits (Rise of the Runelords, Curse of the Crimson Throne, etc.)
- More regional traits per Inner Sea region
- More race traits for uncommon races

---

## Completed Feat Files (37 files, 1,679 total)

| File                      | Export                  | Count | Source                                                                         |
| ------------------------- | ----------------------- | ----- | ------------------------------------------------------------------------------ |
| `core.ts`                 | CORE_FEATS              | 170   | CRB                                                                            |
| `core-extra.ts`           | CORE_EXTRA_FEATS        | 3     | CRB remainder                                                                  |
| `apg.ts`                  | APG_FEATS               | 46    | APG                                                                            |
| `apg-extra.ts`            | APG_EXTRA_FEATS         | 60    | APG remainder                                                                  |
| `ucombat.ts`              | UCOMBAT_FEATS           | 12    | UC                                                                             |
| `ucombat-extra.ts`        | UCOMBAT_EXTRA_FEATS     | 44    | UC remainder                                                                   |
| `umagic.ts`               | UMAGIC_FEATS            | 16    | UM                                                                             |
| `umagic-extra.ts`         | UMAGIC_EXTRA_FEATS      | 75    | UM remainder                                                                   |
| `acg.ts`                  | ACG_FEATS               | 51    | ACG part 1                                                                     |
| `acg-extra.ts`            | ACG_EXTRA_FEATS         | 47    | ACG part 2                                                                     |
| `ultimateIntrigue.ts`     | UI_FEATS                | 53    | Ultimate Intrigue                                                              |
| `ultimateWilderness.ts`   | UW_FEATS                | 58    | Ultimate Wilderness                                                            |
| `racialFeats.ts`          | RACIAL_FEATS            | 54    | ARG racial                                                                     |
| `occultAdventures.ts`     | OA_FEATS                | 54    | Occult Adventures                                                              |
| `miscBooks1.ts`           | MISC_FEATS_1            | 48    | ISWG, misc                                                                     |
| `miscBooks2.ts`           | MISC_FEATS_2            | 37    | Monster Codex, misc                                                            |
| `teamworkFeats.ts`        | TEAMWORK_FEATS          | 64    | UC, APG, UM, misc                                                              |
| `styleFeats.ts`           | STYLE_FEATS             | 51    | 17 style chains                                                                |
| `styleFeats2.ts`          | STYLE_FEATS_2           | 55    | 20 more style chains                                                           |
| `mythicFeats.ts`          | MYTHIC_FEATS            | 90    | Mythic Adventures part 1                                                       |
| `mythicFeats2.ts`         | MYTHIC_FEATS_2          | 70    | Mythic Adventures part 2                                                       |
| `magicTacticsToolbox.ts`  | MAGIC_TACTICS_FEATS     | 36    | Magic Tactics Toolbox                                                          |
| `bloodOfTheMoon.ts`       | BLOOD_OF_THE_MOON_FEATS | 16    | Blood of the Moon                                                              |
| `wmhFeats.ts`             | WMH_FEATS               | 21    | Weapon Master's Handbook                                                       |
| `amhFeats.ts`             | AMH_FEATS               | 36    | Armor Master's Handbook                                                        |
| `horrorAdventures.ts`     | HORROR_ADVENTURES_FEATS | 49    | Horror Adventures                                                              |
| `rttFeats.ts`             | RTT_FEATS               | 3     | Ranged Tactics Toolbox                                                         |
| `dttFeats.ts`             | DTT_FEATS               | 33    | Dirty Tactics Toolbox                                                          |
| `mttFeats.ts`             | MTT_FEATS               | 19    | Melee Tactics Toolbox                                                          |
| `isgFeats.ts`             | ISG_FEATS               | 34    | Inner Sea Gods                                                                 |
| `familiarAlchemyFeats.ts` | FAMILIAR_ALCHEMY_FEATS  | 24    | Familiar Folio + Alchemy Manual                                                |
| `isrFeats.ts`             | ISR_FEATS               | 51    | Inner Sea Races                                                                |
| `bloodSeriesFeats.ts`     | BLOOD_SERIES_FEATS      | 47    | Blood of Angels/Fiends/Night/Elements/Shadows/Sea                              |
| `championsFeats.ts`       | CHAMPIONS_FEATS         | 31    | Champions of Purity + Corruption                                               |
| `heroesFeats.ts`          | HEROES_FEATS            | 42    | Heroes of the Wild + Streets                                                   |
| `faithsFeats.ts`          | FAITHS_FEATS            | 43    | Faiths & Philosophies + Faiths of Purity/Balance/Corruption                    |
| `psoFeats.ts`             | PSO_FEATS               | 36    | Pathfinder Society Primer/Field Guide + Cohorts and Companions + Faction Guide |

## Completed Trait Files (12 files, 458 total)

| File                      | Export                   | Count | Source                                                                |
| ------------------------- | ------------------------ | ----- | --------------------------------------------------------------------- |
| `core.ts`                 | APG_TRAITS               | ~54   | APG core                                                              |
| `apgTraits-extra.ts`      | APG_EXTRA_TRAITS         | 16    | APG remainder                                                         |
| `ucTraits.ts`             | UC_TRAITS                | ~19   | UC                                                                    |
| `ucTraits-extra.ts`       | UC_EXTRA_TRAITS          | ~61   | UC remainder                                                          |
| `argRaceTraits.ts`        | ARG_TRAITS               | 45    | ARG core + featured races                                             |
| `argRaceTraits2.ts`       | ARG_EXTRA_RACE_TRAITS_2  | 43    | ARG uncommon races                                                    |
| `religionTraits.ts`       | FAITH_TRAITS             | 45    | Faiths books (19 deities)                                             |
| `religionTraits-extra.ts` | RELIGION_EXTRA_TRAITS    | ~20   | Religion expansion                                                    |
| `innerSea.ts`             | INNER_SEA_TRAITS         | 48    | Inner Sea regional/campaign                                           |
| `miscTraits.ts`           | MISC_TRAITS              | 48    | AP campaign, equipment, blood of series                               |
| `religionTraits2.ts`      | RELIGION_TRAITS_2        | 55    | Gorum, Achaekek, Brigh, Groetus, Milani, Sivanah + extra deity traits |
| `bloodOfTheMoonTraits.ts` | BLOOD_OF_THE_MOON_TRAITS | ~12   | Blood of the Moon race traits                                         |

**Index files wired:**

- `src/data/feats/index.ts` — all 37 feat files imported and spread into ALL_FEATS
- `src/data/traits/index.ts` — all 12 trait files imported and spread into ALL_TRAITS

---

## Lessons Learned / Rules for Agents

1. **55-entry cap**: Agents cap out at ~55 entries per file. If a source has more, launch a part 2 agent immediately.

2. **Agents write files directly**: Give agents permission to write files and wire into index.ts — faster than extracting output manually.

3. **Duplicate handling**: Same name + different mechanics from different sources → keep BOTH, suffix ID with source abbreviation (`_wmh`, `_amh`, `_ha`, `_boa`, `_bof`, `_coc`, `_mtt`, etc.). Same name + same mechanics → remove from less-canonical file.

4. **Common agent errors to fix:**
   - `'situational'` or `'combat_state'` condition types → replace with `'custom'`
   - Missing `params: {}` on effect conditions → must always be present
   - Missing `source` field on effects → must match feat/trait name
   - `BonusType.NATURAL_ARMOR` → doesn't exist, use `BonusType.NATURAL`
   - `activationMode: 'active'` → not valid, use `'conditional'`
   - `activation` field on effects → not valid per EffectActivation interface, remove it
   - Wrong import path → fix to `from '@/types/base'` and `from '@/types/feats'`

5. **Verification pipeline** (run after every batch):

   ```
   npx tsx scripts/verify-feats.ts
   npx tsx scripts/verify-traits.ts
   npm run typecheck
   npm test
   ```

6. **Token cost**: Each agent costs ~55,000–70,000 tokens. A 3-agent batch = ~165,000–210,000 tokens. Champions-style complex agents can hit 120,000+.

7. **Wiring new files**: Add import + export + spread to the relevant index.ts.

8. **Flaky tests**: If tests fail, re-run once before investigating.

---

## How to Resume (clean start)

1. Read this file
2. Check current totals: `npx tsx scripts/verify-feats.ts`
3. Launch next batch of 3 agents (see IMMEDIATE NEXT STEPS above)
4. Each agent writes its own file and wires into index.ts
5. After all 3 return, run full verification pipeline
6. Fix any TypeScript errors (use Python script to inject missing `source` fields if needed)
7. Update this file with new totals

---

## Key File Paths

- Feat type: `src/types/feats.ts`
- Trait type: `src/types/traits.ts`
- BonusType enum: `src/types/base.ts`
- Feat data: `src/data/feats/*.ts`
- Trait data: `src/data/traits/*.ts`
- Feat index: `src/data/feats/index.ts`
- Trait index: `src/data/traits/index.ts`
- Verify: `scripts/verify-feats.ts`, `scripts/verify-traits.ts`
