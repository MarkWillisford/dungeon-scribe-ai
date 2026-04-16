# Firestore Seeding Playbook

## Status

**Seed scripts written:** 24 existing + 10 new = 34 total  
**Orchestrator:** `scripts/db/seedAll.ts`  
**Seeded to staging:** NOT STARTED  
**Seeded to prod:** NOT STARTED

---

## Context

Phase B of the data-access-layer refactor swaps `GameDataService` static imports for Firestore reads. Phase B is blocked until all collections are seeded to Firestore staging.

Audit (verified 2026-04-14):

- 24 seed scripts existed; 13 collections served by `GameDataService` had no seed script
- 10 new scripts cover all 13 missing collections (equipment uses one script for 4 collections)
- Doug's PRs #51–54 were confirmed merged before audit

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

---

## Orchestrator

`scripts/db/seedAll.ts` — runs all 34 scripts in the correct order via `child_process.spawnSync`. Supports `--dry-run` (passes through to all child scripts). Prints a pass/fail summary.

---

## Prerequisites (one-time setup)

```bash
# 1. Download service account key from Firebase Console:
#    Project Settings → Service Accounts → Generate New Private Key
# 2. Set credentials:
export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
# 3. Default target is staging (dungeon-scribe-ai-stagin-b4fb5)
#    Override for prod:
export FIREBASE_PROJECT_ID=<prod-project-id>
```

---

## Seed to Staging

```bash
# Dry run first
npx tsx scripts/db/seedAll.ts --dry-run

# Full run against staging (default)
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
32. seedClassChoiceDefinitions
33. seedRulesets
34. seedMagicItems

---

## Verification

After seeding staging:

1. Check Firestore console — document counts should match static array lengths
2. Spot-check 1–2 documents per collection for correct shape and normalized `source` field
3. Navigate to a class choice row in the app (e.g., Oracle mysteries) — picker should load from Firestore
