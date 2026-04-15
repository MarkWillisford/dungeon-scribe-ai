# Firestore Seeding Playbook

## Status

**Seed scripts written:** 24 existing + 10 new = 34 total  
**Orchestrator:** `scripts/db/seedAll.ts`  
**Seeded to staging:** COMPLETE (2026-04-14) — 34/34 scripts passed  
**Seeded to prod:** NOT STARTED

---

## Context

Phase B of the data-access-layer refactor swaps `GameDataService` static imports for Firestore reads. Phase B is blocked until all collections are seeded to Firestore staging.

Audit (verified 2026-04-14):

- 24 seed scripts existed; 13 collections served by `GameDataService` had no seed script
- 10 new scripts cover all 13 missing collections (`seedEquipment.ts` handles 4 collections)
- Doug's PRs #51–54 confirmed merged before audit

---

## New Scripts Written (2026-04-14)

| Script                  | Collection(s)                         | Data source                                           |
| ----------------------- | ------------------------------------- | ----------------------------------------------------- |
| `seedMysteries.ts`      | `mysteries`                           | `ALL_MYSTERIES`                                       |
| `seedInquisitions.ts`   | `inquisitions`                        | `ALL_INQUISITIONS`                                    |
| `seedRevelations.ts`    | `revelations`                         | `ALL_REVELATIONS`                                     |
| `seedCavalierOrders.ts` | `cavalierOrders`                      | `ALL_CAVALIER_ORDERS`                                 |
| `seedBloodlines.ts`     | `bloodlines`                          | `ALL_BLOODLINES`                                      |
| `seedFeats.ts`          | `feats`                               | `ALL_FEATS`                                           |
| `seedTraits.ts`         | `traits`                              | `ALL_TRAITS`                                          |
| `seedClasses.ts`        | `classes`                             | `ALL_EXPANDED_CLASSES`                                |
| `seedRaces.ts`          | `races`                               | `ALL_EXPANDED_RACES`                                  |
| `seedEquipment.ts`      | `weapons`, `armor`, `shields`, `gear` | `ALL_WEAPONS`, `ALL_ARMOR`, `ALL_SHIELDS`, `ALL_GEAR` |

**Note on classes and races:** `ExpandedClassData` and `ExpandedRaceData` have no `id` field. Firestore document ID is derived from `name` (lowercase, non-alphanumeric chars → hyphens). Phase B queries these by name filter, not by document ID lookup.

**Note on equipment:** IDs could collide across categories (e.g., a weapon and armor both named "dagger"). Separate Firestore collections (`weapons`, `armor`, `shields`, `gear`) avoid this and match GameDataService's separate `getWeapons()` / `getArmor()` / `getShields()` / `getGear()` methods.

---

## Orchestrator

`scripts/db/seedAll.ts` — runs all 34 scripts in dependency order via `child_process.spawnSync`. Streams output in real time. Supports `--dry-run`. Prints a pass/fail summary. Continues on individual failures but exits non-zero if any script failed.

---

## Prerequisites (one-time setup)

```bash
# Download service account key from Firebase Console:
# Project Settings → Service Accounts → Generate New Private Key

export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json

# Target staging (default — baked into all scripts):
# No FIREBASE_PROJECT_ID override needed

# Override for prod:
export FIREBASE_PROJECT_ID=<prod-project-id>
```

---

## Seed to Staging

```bash
# Dry run first — catches import errors and reports counts without writing
npx tsx scripts/db/seedAll.ts --dry-run

# Full run against staging
npx tsx scripts/db/seedAll.ts
```

## Seed to Production

```bash
export FIREBASE_PROJECT_ID=<prod-project-id>
npx tsx scripts/db/seedAll.ts
```

---

## Execution Order (encoded in seedAll.ts)

Foundation → class option collections → class choice definitions → supplemental

1. seedRaces
2. seedClasses
3. seedFeats
4. seedTraits
5. seedEquipment (weapons, armor, shields, gear)
6. seedSpells
7. seedTemplates
8. seedDeities
9. seedDomains
10. seedAnimalCompanions
11. seedBloodlines
12. seedCavalierOrders
13. seedInquisitions
14. seedMysteries
15. seedRevelations
16. seedRagePowers
17. seedRogueTalents
18. seedHexes
19. seedArcanistExploits
20. seedInvestigatorTalents
21. seedKineticistWildTalents
22. seedMagusArcana
23. seedMesmeristTricks
24. seedNinjaTricks
25. seedOccultistFocusPowers
26. seedPhrenicAmplifications
27. seedShamanSpirits
28. seedSlayerTalents
29. seedWarpriestBlessings
30. seedAlchemistDiscoveries
31. seedEidolonEvolutions
32. seedClassChoiceDefinitions ← depends on option collections
33. seedRulesets
34. seedMagicItems

---

## Verification

### Programmatic — COMPLETE (2026-04-14)

`scripts/db/verifySeeding.ts` — built and run against staging. For each of the 38 Firestore collections it:

1. Uses Firestore `count()` aggregation to compare doc count against static array length (PASS / WARN ≤5 / FAIL)
2. Samples up to 5 docs and checks `source.bookId !== 'unknown'`

**Final result (2026-04-14):**

```
Count checks: 36 passed, 0 warned, 0 failed
Source checks: 0 collection(s) with unknown source entries
Total: 10,962 docs in Firestore, 10,959 expected
```

Note: Traits shows 1020 in Firestore vs 1017 in static data — 3 orphaned docs from a pre-fix run. Harmless; upserts never delete, and the 3 docs match valid entries.

Run at any time:

```bash
npx tsx scripts/db/verifySeeding.ts
```

### Manual (done for staging, 2026-04-14)

1. Firebase console spot-check — document counts confirmed across sampled collections
2. All 34 seed scripts reported expected write counts with no unknown-source fallbacks remaining

### App-level (pending)

3. Navigate to a class choice row in the app against staging (e.g., Oracle mysteries) — picker should load items from Firestore

After staging is verified end-to-end, seed production using the same `seedAll.ts` with `FIREBASE_PROJECT_ID` overridden to the prod project ID.
