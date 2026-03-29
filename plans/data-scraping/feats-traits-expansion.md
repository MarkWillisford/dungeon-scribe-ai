# Mass Data Expansion: Full d20pfsrd Feats & Traits

## Context

Our Pathfinder 1e app has **251 feats** and **93 traits** at project start. The players optimize hard across every archetype and pull from any Paizo source on d20pfsrd. We need comprehensive coverage: **~2000+ feats** and **~900+ traits**.

The engine (types, services, pipeline, index files) is already built. This is a pure data population task using parallel agents.

---

## CURRENT STATUS (as of 2026-03-24)

### Progress: 2,587 feats across 89 files | 971 traits across 30 files

**Traits expansion COMPLETE (971 > 900+ target). Feats expansion in progress.**

- Feats: `MW/feats-expansion` — PR #18 open. Tier 2 Batch 3 complete (2,587 feats).
- Traits: `MW/traits-expansion` — PR #19 open. All Priority 1–4 batches complete (971 traits).

Session 2026-03-24 additions:

- **Traits (+323 today, +466 total on branch):**
  - AP Player's Guides (10 books): +110 traits
  - ISG remaining deities: +46 traits
  - Divine Anthology + Disciple's Doctrine: +44 traits
  - Adventurer's Armory + scattered sources: +60 traits
  - UC Drawbacks + multi-source: +63 traits

---

## IMMEDIATE NEXT STEPS

**Traits:** DONE at 971. PRs open (#18 feats, #19 traits) — merge when ready.
**Feats next books to scrape (Tier 2 Batch 4):**

---

## REMAINING BOOKS — Full Research List

_Researched 2026-03-20 via Archives of Nethys. Counts are approximate._

### Tier 1 — Large (25+ feats) — scout + multi-agent

| Book                   | Total | Have | Remaining | File pattern                                                                |
| ---------------------- | ----- | ---- | --------- | --------------------------------------------------------------------------- |
| Monster Codex          | ~79   | ~80  | 0         | ✅ DONE — `monsterCodexFeats.ts` / `2.ts` (+ pre-existing in miscBooks2.ts) |
| Planar Adventures      | ~57   | 48   | 0         | ✅ DONE — `planarAdventuresFeats.ts` / `2.ts`                               |
| Villain Codex          | ~26   | 26   | 0         | ✅ DONE — `villainCodexFeats.ts`                                            |
| Wilderness Origins     | ~28   | 28   | 0         | ✅ DONE — `wildernessOriginsFeats.ts`                                       |
| Heroes from the Fringe | ~27   | 27   | 0         | ✅ DONE — `heroesFromFringeFeats.ts`                                        |
| Ultimate Campaign      | ~28   | 28   | 0         | ✅ DONE — `ultimateCampaignFeats.ts`                                        |
| Inner Sea World Guide  | ~38   | 33   | 0         | ✅ DONE — `iswgFeats.ts` / `2.ts` (4 reprints skipped)                      |

### Tier 2 — Medium (10–24 feats) — single agent each

**Player Companion:**

| Book                          | Feats | Have | File                                                                               |
| ----------------------------- | ----- | ---- | ---------------------------------------------------------------------------------- |
| Blood of the Beast            | ~22   | 21   | ✅ DONE — `bloodOfBeastFeats.ts` (Underfoot skipped — reprint)                     |
| Quests and Campaigns          | ~22   | 18   | ✅ DONE — `questsCampaignsFeats.ts` (4 UC story reprints skipped)                  |
| Heroes of Golarion            | ~21   | 21   | ✅ DONE — `heroesOfGolarionFeats.ts`                                               |
| Inner Sea Combat              | ~24   | 7    | `innerSeaCombatFeats.ts`                                                           |
| Pathfinder Unchained          | ~22   | 20   | ✅ DONE — `pathfinderUnchainedFeats.ts` (Signature Skill + Combat Stamina skipped) |
| Heroes of the High Court      | ~19   | 19   | ✅ DONE — `heroesHighCourtFeats.ts`                                                |
| People of the Wastes          | ~17   | 17   | ✅ DONE — `peopleWastesFeats.ts`                                                   |
| Elemental Master's Handbook   | ~17   | 17   | ✅ DONE — `elementalMastersFeats.ts`                                               |
| Legacy of the First World     | ~17   | 17   | ✅ DONE — `legacyFirstWorldFeats.ts`                                               |
| Legacy of Dragons             | ~17   | 17   | ✅ DONE — `legacyDragonsFeats.ts`                                                  |
| Chronicle of Legends          | ~17   | 17   | ✅ DONE — `chronicleLegendsFeats.ts`                                               |
| Monster Summoner's Handbook   | ~16   | 16   | ✅ DONE — `monsterSummonerFeats.ts`                                                |
| Agents of Evil                | ~16   | 0    | `agentsEvilFeats.ts`                                                               |
| Blood of the Ancients         | ~16   | 0    | `bloodAncientFeats.ts`                                                             |
| Psychic Anthology             | ~15   | 0    | `psychicAnthologyFeats.ts`                                                         |
| Potions and Poisons           | ~15   | 0    | `potionsPoisonsFeats.ts`                                                           |
| Kobolds of Golarion           | ~15   | 2    | `koboldGolarionFeats.ts`                                                           |
| Giant Hunter's Handbook       | ~15   | 1    | `giantHunterFeats.ts`                                                              |
| Advanced Class Origins        | ~14   | 0    | `advancedClassOriginsFeats.ts`                                                     |
| Dragonslayer's Handbook       | ~14   | 0    | `dragonslayerFeats.ts`                                                             |
| Demons Revisited              | ~14   | 0    | `demonsRevisitedFeats.ts`                                                          |
| Halflings of Golarion         | ~13   | 0    | `halflingGolarionFeats.ts`                                                         |
| Animal Archive                | ~13   | 0    | `animalArchiveFeats.ts`                                                            |
| Spymaster's Handbook          | ~13   | 0    | `spymasterFeats.ts`                                                                |
| Book of the Damned (2017)     | ~12   | 1    | `bookDamnedFeats.ts`                                                               |
| Occult Origins                | ~12   | 1    | `occultOriginsFeats.ts`                                                            |
| Cheliax, Empire of Devils     | ~12   | 0    | `cheliaxFeats.ts`                                                                  |
| Path of the Hellknight        | ~12   | 0    | `hellknightFeats.ts`                                                               |
| Inner Sea Monster Codex       | ~13   | 0    | `innerSeaMonsterCodexFeats.ts`                                                     |
| Distant Realms                | ~12   | 0    | `distantRealmsFeats.ts`                                                            |
| Aquatic Adventures            | ~16   | 13   | ✅ DONE — `aquaticAdventuresFeats.ts` (Dolphin Style chain skipped — reprint)      |
| Arcane Anthology              | ~10   | 0    | `arcaneAnthologyFeats.ts`                                                          |
| Goblins of Golarion           | ~10   | 0    | `goblinGolarionFeats.ts`                                                           |
| Gnomes of Golarion            | ~13   | 0    | `gnomeGolarionFeats.ts`                                                            |
| Technology Guide              | ~10   | 0    | `technologyGuideFeats.ts`                                                          |
| Orcs of Golarion              | ~11   | 4    | `orcGolarionFeats.ts`                                                              |
| Osirion, Land of the Pharaohs | ~10   | 0    | `osirionFeats.ts`                                                                  |

### Tier 3 — Small (1–9 feats) — low priority, batch multiple per file

| Book                       | Feats    | Notes                                   |
| -------------------------- | -------- | --------------------------------------- |
| Blood of the Coven         | ~9       |                                         |
| Dungeoneer's Handbook      | ~9       |                                         |
| Black Markets              | ~9       |                                         |
| Bastards of Golarion       | ~8       |                                         |
| Heroes of the Darklands    | ~8       | Have 2                                  |
| Rival Guide                | ~8       | Have 2                                  |
| People of the River        | ~7       |                                         |
| Demon Hunter's Handbook    | ~7       |                                         |
| Undead Slayer's Handbook   | ~7       |                                         |
| Champions of Balance       | ~7       | Have 4                                  |
| People of the Stars        | ~7       |                                         |
| Taldor, Echoes of Glory    | ~8       |                                         |
| People of the Sands        | ~6       |                                         |
| Distant Shores             | ~6       |                                         |
| Andoran, Spirit of Liberty | ~4       |                                         |
| Inner Sea Magic            | ~7       | Have 1                                  |
| Inner Sea Intrigue         | ~6       |                                         |
| Occult Mysteries           | ~4       | Have 1                                  |
| Magical Marketplace        | ~5       |                                         |
| The Harrow Handbook        | ~5       |                                         |
| Dwarves of Golarion        | ~5       |                                         |
| People of the North        | ~3       |                                         |
| Seekers of Secrets         | ~3       |                                         |
| Various AP Player's Guides | 3–8 each | Rise of Runelords, Crimson Throne, etc. |

### Adventure Path volumes (feats worth grabbing)

| Book                                       | Feats    |
| ------------------------------------------ | -------- |
| Pathfinder #91: Battle of Bloodmarch Hills | ~14      |
| Pathfinder #132: The Six-Legend Soul       | ~11      |
| Pathfinder #139: The Dead Road             | ~10      |
| Pathfinder #131: The Reaper's Right Hand   | ~8       |
| Legacy of Fire Player's Guide              | ~8       |
| Rise of the Runelords Player's Guide       | ~6       |
| Curse of the Crimson Throne Player's Guide | ~5       |
| Various others                             | 1–4 each |

---

### LESSON LEARNED — obscure books + URL guessing = token waste

- Monster Hunter's Handbook: 4 feats, 173,944 tokens (622 tool calls, mostly 404s)
- Add to all future prompts: "If after 10 web fetches you cannot find a feat index page, write only what you've confirmed and stop. Do not guess URLs indefinitely."

### Traits expansion — Researched 2026-03-23

Scout confirmed d20pfsrd totals: Combat ~168, Social ~215, Magic ~120, Faith ~95, Race ~500+, Regional ~400+, Religion ~250+. We have ~458 of these. Need ~442 more to hit 900+.

**Priority 1 — High Yield Regional/Race Player Companions (~200 traits)**

| Book                              | ~Count | File                        |
| --------------------------------- | ------ | --------------------------- |
| Inner Sea Primer                  | ~20    | `innerSeaPrimerTraits.ts`   |
| Dragon Empires Primer             | ~15    | `dragonEmpiresTraits.ts`    |
| People of the North               | ~15    | `peopleNorthTraits.ts`      |
| People of the River               | ~15    | `peopleRiverTraits.ts`      |
| People of the Sands               | ~12    | `peopleSandsTraits.ts`      |
| Humans of Golarion                | ~12    | `humansGolarionTraits.ts`   |
| Blood of Angels + Blood of Fiends | ~16    | `bloodAngelsFindsTraits.ts` |
| Blood of the Moon                 | ~10    | `bloodMoonTraits2.ts`       |
| Blood of Shadows                  | ~8     | `bloodShadowsTraits.ts`     |
| Blood of the Beast                | ~10    | `bloodBeastTraits.ts`       |

**Priority 2 — AP Player's Guides (~80 traits)**

| Book                              | ~Count  | Already Have | File                      |
| --------------------------------- | ------- | ------------ | ------------------------- |
| Shattered Star Player's Guide     | ~13     | 0            | `shatteredStarTraits.ts`  |
| Serpent's Skull Player's Guide    | ~10     | 0            | `serpentSkullTraits.ts`   |
| Hell's Rebels Player's Guide      | ~10     | 0            | `hellsRebelsTraits.ts`    |
| Council of Thieves Player's Guide | ~7      | 0            | `councilThievesTraits.ts` |
| Jade Regent Player's Guide        | ~8      | 0            | `jadeRegentTraits.ts`     |
| Reign of Winter Player's Guide    | ~8      | 0            | `reignWinterTraits.ts`    |
| Mummy's Mask Player's Guide       | ~8      | 0            | `mummysMaskTraits.ts`     |
| Iron Gods Player's Guide          | ~8      | 0            | `ironGodsTraits.ts`       |
| Hell's Vengeance Player's Guide   | ~8      | 0            | `hellsVengeanceTraits.ts` |
| Giantslayer Player's Guide        | ~8      | 0            | `giantslayerTraits.ts`    |
| Curse of the Crimson Throne PG    | ~3 more | ~2           | add to `miscTraits.ts`    |
| Kingmaker PG                      | ~4 more | ~3           | add to `miscTraits.ts`    |
| Carrion Crown PG                  | ~4 more | ~2           | add to `miscTraits.ts`    |

**Priority 3 — Religion Traits Expansion (~80 traits)**

| Book                                    | ~Count | Notes                                              |
| --------------------------------------- | ------ | -------------------------------------------------- |
| Inner Sea Gods (remaining deities)      | ~30–40 | We have ~40 deities; ISG has 20 major + ~60 minor  |
| Faiths of Golarion (Campaign Setting)   | ~20    | Different from Faiths of Purity/Balance/Corruption |
| Disciple's Doctrine / Divine Anthology  | ~15    | Various deities                                    |
| Paths of the Righteous / Agents of Evil | ~12    | Good/evil deity traits                             |

**Priority 4 — Equipment + Drawbacks (~45 traits)**

| Book                        | ~Count | Notes                                                    |
| --------------------------- | ------ | -------------------------------------------------------- |
| Adventurer's Armory         | 14     | All 14 equipment traits (none covered yet)               |
| Ultimate Campaign Drawbacks | ~25–30 | UC pg. 65 — mechanically distinct negative traits        |
| Scattered basic traits      | ~10    | Quests and Campaigns, Heroes of the Wild, Society Primer |

**Priority 5 — Race Traits from Race Books (~60 traits)**

| Book                                                            | ~Count    | Notes                   |
| --------------------------------------------------------------- | --------- | ----------------------- |
| Goblins/Kobolds/Dwarves/Elves/Gnomes/Halflings/Orcs of Golarion | ~6–8 each | Batch multiple per file |
| Bastards of Golarion                                            | ~8        | Half-race variants      |
| Inner Sea Races (Campaign Setting)                              | ~20       | Many races              |

**Scraping notes:**

- AoN trait pages are JS-rendered — individual trait display pages work; category list pages don't
- Many Player Companion books have only 3–5 traits — batch by region (e.g. "People of the \_\_\_" books together)
- `source` on AoN individual trait pages is reliable and exact
- Drawbacks use `TraitCategory` of their own — need to check if type system supports it

---

## Completed Feat Files (56 files, 2,064 total)

| File                        | Export                    | Count | Source                                                                         |
| --------------------------- | ------------------------- | ----- | ------------------------------------------------------------------------------ |
| `core.ts`                   | CORE_FEATS                | 170   | CRB                                                                            |
| `core-extra.ts`             | CORE_EXTRA_FEATS          | 3     | CRB remainder                                                                  |
| `apg.ts`                    | APG_FEATS                 | 46    | APG                                                                            |
| `apg-extra.ts`              | APG_EXTRA_FEATS           | 60    | APG remainder                                                                  |
| `ucombat.ts`                | UCOMBAT_FEATS             | 12    | UC                                                                             |
| `ucombat-extra.ts`          | UCOMBAT_EXTRA_FEATS       | 44    | UC remainder                                                                   |
| `umagic.ts`                 | UMAGIC_FEATS              | 16    | UM                                                                             |
| `umagic-extra.ts`           | UMAGIC_EXTRA_FEATS        | 75    | UM remainder                                                                   |
| `acg.ts`                    | ACG_FEATS                 | 51    | ACG part 1                                                                     |
| `acg-extra.ts`              | ACG_EXTRA_FEATS           | 47    | ACG part 2                                                                     |
| `ultimateIntrigue.ts`       | UI_FEATS                  | 53    | Ultimate Intrigue                                                              |
| `ultimateWilderness.ts`     | UW_FEATS                  | 58    | Ultimate Wilderness                                                            |
| `racialFeats.ts`            | RACIAL_FEATS              | 54    | ARG racial                                                                     |
| `occultAdventures.ts`       | OA_FEATS                  | 54    | Occult Adventures                                                              |
| `miscBooks1.ts`             | MISC_FEATS_1              | 48    | ISWG, misc                                                                     |
| `miscBooks2.ts`             | MISC_FEATS_2              | 37    | Monster Codex, misc                                                            |
| `teamworkFeats.ts`          | TEAMWORK_FEATS            | 64    | UC, APG, UM, misc                                                              |
| `styleFeats.ts`             | STYLE_FEATS               | 51    | 17 style chains                                                                |
| `styleFeats2.ts`            | STYLE_FEATS_2             | 55    | 20 more style chains                                                           |
| `mythicFeats.ts`            | MYTHIC_FEATS              | 90    | Mythic Adventures part 1                                                       |
| `mythicFeats2.ts`           | MYTHIC_FEATS_2            | 70    | Mythic Adventures part 2                                                       |
| `magicTacticsToolbox.ts`    | MAGIC_TACTICS_FEATS       | 36    | Magic Tactics Toolbox                                                          |
| `bloodOfTheMoon.ts`         | BLOOD_OF_THE_MOON_FEATS   | 16    | Blood of the Moon                                                              |
| `wmhFeats.ts`               | WMH_FEATS                 | 21    | Weapon Master's Handbook                                                       |
| `amhFeats.ts`               | AMH_FEATS                 | 36    | Armor Master's Handbook                                                        |
| `horrorAdventures.ts`       | HORROR_ADVENTURES_FEATS   | 49    | Horror Adventures                                                              |
| `rttFeats.ts`               | RTT_FEATS                 | 3     | Ranged Tactics Toolbox                                                         |
| `dttFeats.ts`               | DTT_FEATS                 | 33    | Dirty Tactics Toolbox                                                          |
| `mttFeats.ts`               | MTT_FEATS                 | 19    | Melee Tactics Toolbox                                                          |
| `isgFeats.ts`               | ISG_FEATS                 | 34    | Inner Sea Gods                                                                 |
| `familiarAlchemyFeats.ts`   | FAMILIAR_ALCHEMY_FEATS    | 24    | Familiar Folio + Alchemy Manual                                                |
| `isrFeats.ts`               | ISR_FEATS                 | 51    | Inner Sea Races                                                                |
| `bloodSeriesFeats.ts`       | BLOOD_SERIES_FEATS        | 47    | Blood of Angels/Fiends/Night/Elements/Shadows/Sea                              |
| `championsFeats.ts`         | CHAMPIONS_FEATS           | 31    | Champions of Purity + Corruption                                               |
| `heroesFeats.ts`            | HEROES_FEATS              | 42    | Heroes of the Wild + Streets                                                   |
| `faithsFeats.ts`            | FAITHS_FEATS              | 43    | Faiths & Philosophies + Faiths of Purity/Balance/Corruption                    |
| `psoFeats.ts`               | PSO_FEATS                 | 36    | Pathfinder Society Primer/Field Guide + Cohorts and Companions + Faction Guide |
| `antiheroFeats.ts`          | ANTIHERO_FEATS            | —     | Added post-plan                                                                |
| `armoryFeats.ts`            | ARMORY_FEATS              | —     | Added post-plan                                                                |
| `dragonEmpiresFeats.ts`     | DRAGON_EMPIRES_FEATS      | —     | Added post-plan                                                                |
| `hauntedHeroesFeats.ts`     | HAUNTED_HEROES_FEATS      | —     | Added post-plan                                                                |
| `healerFeats.ts`            | HEALER_FEATS              | —     | Added post-plan                                                                |
| `monsterHunterFeats.ts`     | MONSTER_HUNTER_FEATS      | —     | Added post-plan                                                                |
| `planeHopperFeats.ts`       | PLANE_HOPPER_FEATS        | 38    | Plane-Hopper's Handbook                                                        |
| `pathsRighteousFeats.ts`    | PATHS_RIGHTEOUS_FEATS     | 13    | Paths of the Righteous                                                         |
| `divineAnthologyFeats.ts`   | DIVINE_ANTHOLOGY_FEATS    | 9     | Divine Anthology                                                               |
| `martialArtsFeats.ts`       | MARTIAL_ARTS_FEATS        | 25    | Martial Arts Handbook part 1                                                   |
| `martialArtsFeats2.ts`      | MARTIAL_ARTS_FEATS_2      | 25    | Martial Arts Handbook part 2                                                   |
| `martialArtsFeats3.ts`      | MARTIAL_ARTS_FEATS_3      | 10    | Martial Arts Handbook part 3                                                   |
| `adventurersGuideFeats.ts`  | ADVENTURERS_GUIDE_FEATS   | 25    | Adventurer's Guide part 1                                                      |
| `adventurersGuideFeats2.ts` | ADVENTURERS_GUIDE_FEATS_2 | 25    | Adventurer's Guide part 2                                                      |
| `adventurersGuideFeats3.ts` | ADVENTURERS_GUIDE_FEATS_3 | 14    | Adventurer's Guide part 3                                                      |
| `villainCodexFeats.ts`      | VILLAIN_CODEX_FEATS       | 26    | Villain Codex                                                                  |
| `planarAdventuresFeats.ts`  | PLANAR_ADVENTURES_FEATS   | 18    | Planar Adventures part 1 (7 reprints removed)                                  |
| `planarAdventuresFeats2.ts` | PLANAR_ADVENTURES_FEATS_2 | 23    | Planar Adventures part 2                                                       |
| `wildernessOriginsFeats.ts` | WILDERNESS_ORIGINS_FEATS  | 28    | Wilderness Origins                                                             |
| `monsterCodexFeats.ts`      | MONSTER_CODEX_FEATS       | 25    | Monster Codex part 1                                                           |
| `monsterCodexFeats2.ts`     | MONSTER_CODEX_FEATS_2     | 26    | Monster Codex part 2                                                           |
| `heroesFromFringeFeats.ts`  | HEROES_FROM_FRINGE_FEATS  | 27    | Heroes from the Fringe                                                         |
| `ultimateCampaignFeats.ts`  | ULTIMATE_CAMPAIGN_FEATS   | 28    | Ultimate Campaign (story feats)                                                |
| `iswgFeats.ts`              | ISWG_FEATS                | 22    | Inner Sea World Guide part 1 (3 reprints out)                                  |
| `iswgFeats2.ts`             | ISWG_FEATS_2              | 10    | Inner Sea World Guide part 2 (1 reprint out)                                   |

## Completed Trait Files (12 files, 458 total)

| File                  | Export                  | Count | Source                                                                |
| --------------------- | ----------------------- | ----- | --------------------------------------------------------------------- |
| `core.ts`             | APG_TRAITS              | ~54   | APG core                                                              |
| `apgTraits-extra.ts`  | APG_EXTRA_TRAITS        | 16    | APG remainder                                                         |
| `ultimateCampaign.ts` | UC_TRAITS               | ~19   | UC                                                                    |
| `ucTraits-extra.ts`   | UC_EXTRA_TRAITS         | ~61   | UC remainder                                                          |
| `advancedRace.ts`     | ARG_TRAITS              | 45    | ARG core + featured races                                             |
| `argRaceTraits.ts`    | ARG_EXTRA_RACE_TRAITS   | 45    | ARG core + featured races (extra)                                     |
| `argRaceTraits2.ts`   | ARG_EXTRA_RACE_TRAITS_2 | 43    | ARG uncommon races                                                    |
| `religionTraits.ts`   | RELIGION_EXTRA_TRAITS   | ~20   | Religion expansion                                                    |
| `faiths.ts`           | FAITH_TRAITS            | 45    | Faiths books (19 deities)                                             |
| `innerSea.ts`         | INNER_SEA_TRAITS        | 48    | Inner Sea regional/campaign                                           |
| `miscTraits.ts`       | MISC_TRAITS             | 48    | AP campaign, equipment, Blood of the Moon race traits                 |
| `religionTraits2.ts`  | RELIGION_TRAITS_2       | 55    | Gorum, Achaekek, Brigh, Groetus, Milani, Sivanah + extra deity traits |

**Index files wired:**

- `src/data/feats/index.ts` — all 62 feat files imported and spread into ALL_FEATS
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
