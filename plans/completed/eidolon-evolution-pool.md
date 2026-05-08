# Eidolon Evolution Pool

## 2026-04-23

## Status: DESIGN COMPLETE, NOT STARTED

Supports both APG Summoner and Pathfinder Unchained Summoner plus all first-party archetypes that modify the pool (Master Summoner, Wild Caller ARG, Morphic Savant, Unwavering Conduit, Pyroclast, Broodmaster, Synthesist). Rule data is verified against Archives of Nethys as of 2026-04-23.

---

## Problem

Summoner characters customize their eidolon by spending evolution points from a class-level-scaled pool on evolutions. The pool is re-allocatable: the summoner can reassign all points on a long rest (or via `transmogrify`). Points cost 1, 2, 3, or 4 each, and evolutions have their own level gates, base-form requirements, and prereq chains. The system is functionally a point-buy sub-builder, not a per-level ladder, so it does not fit `ClassChoiceRow`.

Several existing components are in the wrong place for this:

- The uncommitted reducer work on `src/store/slices/characterEntrySlice.ts` stores evolutions as `ClassChoice` entries with `featureName: 'Eidolon Evolution'`. That is a workaround that does not model base form, subtype, size upgrades, or the brood/synthesist/master summoner pool variants.
- `src/data/eidolonEvolutions/raw/*.ts` has ~200 evolution records seeded, but many shared evolutions are mis-tagged `summoner: 'apg'` and exclude Unchained summoners incorrectly. See Seed Data Audit below.
- `EidolonEvolutionEntry.evolutionPointCost: 1|2|3|4` cannot represent Pounce, which costs 1pt in APG and 3pt in Unchained.
- `PrerequisiteService.checkSingle` has no `case 'evolution':`. Any evolution with an `evolutionId` prereq silently fails validation. Flagged as a latent bug in `plans/character-system-redesign.md`.

The existing `eidolonEvolutions` Firestore collection ships, but the type shape needs revision and the seeds need an audit pass before the UI can trust the data.

---

## Rule Corrections from Authoritative Research

Two rounds of research: first against d20pfsrd, then verified against AoN. Several d20pfsrd claims were wrong. Everything below is AoN-verified.

### Pool size tables

| Level | APG Pool | Unchained Pool |
| ----: | -------: | -------------: |
|     1 |        3 |              1 |
|     2 |        4 |              2 |
|     3 |        5 |              3 |
|     4 |        7 |              3 |
|     5 |        8 |              4 |
|     6 |        9 |              5 |
|     7 |       10 |              6 |
|     8 |       11 |              6 |
|     9 |       13 |              7 |
|    10 |       14 |              8 |
|    11 |       15 |              9 |
|    12 |       16 |              9 |
|    13 |       17 |             10 |
|    14 |       19 |             11 |
|    15 |       20 |             12 |
|    16 |       21 |             12 |
|    17 |       22 |             13 |
|    18 |       23 |             14 |
|    19 |       25 |             15 |
|    20 |       26 |             15 |

Unchained compensates for the smaller pool with subtype grants at specific class levels. These grants include free evolutions, DR, energy immunities, truespeech, and so on. Unchained does **not** rebalance the evolution list by lowering costs.

### Cost and prereq divergences between APG and Unchained

| Evolution        | APG                               | Unchained                                                                                           | Notes                                                                                   |
| ---------------- | --------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Pounce           | 1pt, quadruped                    | **3pt**, quadruped, **L7**                                                                          | Cost tripled, level gate added                                                          |
| Damage Reduction | 3pt, L9, grants DR 5/alignment    | **3pt, L15, upgrades existing subtype DR by +5**                                                    | Same cost, completely different function. UC requires a subtype that already grants DR. |
| Poison           | 2pt, L7                           | 2pt, L7, + subtype gate (daemon/demon/devil/elemental/protean) + bite/sting evolution prereq        | UC adds structural prereqs                                                              |
| Swallow Whole    | 3pt, L9, grab(bite)               | 3pt, L9, + subtype gate (agathion/daemon/demon/devil/div/elemental/protean/psychopomp) + grab(bite) | UC adds subtype gate                                                                    |
| Web              | 3pt, L7, climb                    | 3pt, L7, + subtype gate (daemon/demon/protean) + climb                                              | UC adds subtype gate                                                                    |
| Mount            | 1pt, quadruped/aquatic/serpentine | 1pt, + subtype gate (daemon/demon/devil/elemental/protean) + quadruped or serpentine                | UC adds subtype gate                                                                    |
| Tail             | 1pt                               | 1pt, + subtype gate (agathion/daemon/demon/devil/div/elemental/protean/psychopomp)                  | UC adds subtype gate                                                                    |
| Tentacle         | 1pt                               | 1pt, + subtype gate (daemon/demon/protean)                                                          | UC adds subtype gate                                                                    |
| Gore             | 2pt                               | 2pt, + subtype gate (agathion/daemon/demon/devil/div/elemental/protean/psychopomp)                  | UC adds subtype gate                                                                    |

Important simplification: **all minimum summoner level gates are identical across APG and Unchained**. The d20pfsrd reprint misrepresented this. Our validation logic can use a single `summonerLevelMin` value per evolution.

### APG-only evolutions (unavailable in Unchained)

Basic Magic, Bleed, Hooves, Low-Light Vision, Shared Evolution, Slippery, Spirit-Touched, Sticky, Unnatural Aura (1pt); Alignment Smite, Channel Resistance, Extra Feat, Head, Keen Scent, Minor Magic, Rider Bond, Shadow Blend, Shadow Form, Sickening, Undead Appearance (2pt); Celestial Appearance, Fiendish Appearance, Major Magic, Sacrifice, See in Darkness (3pt); Dimension Door, Incorporeal Form, Lifesense, No Breath, Ultimate Magic (4pt).

### Unchained-only evolutions

Tentacle Mass, Basic Psychic Magic, Intermediate Psychic Magic, Advanced Psychic Magic, Superior Psychic Magic, Blood Frenzy, Alien Consciousness, Amorphous, Disease. All require the aberrant subtype or a specific prereq chain.

### Subtypes that grant bonus evolution points

| Subtype    | +1 ep at |
| ---------- | -------: |
| Aberrant   |       L4 |
| Archon     |       L4 |
| Elemental  |       L4 |
| Kyton      |       L4 |
| Daemon     |       L8 |
| Demon      |       L8 |
| Div        |       L8 |
| Psychopomp |       L8 |
| Shadow     |       L8 |

### Archetype pool modifiers (first-party, AoN-verified)

| Archetype          | Edition            | Effect                                                                                                                                 |
| ------------------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| Master Summoner    | APG                | Eidolon uses half summoner class level (min 1) for pool math                                                                           |
| Wild Caller (ARG)  | ARG, half-elf only | +floor(summoner level / 4) bonus ep                                                                                                    |
| Morphic Savant     | APG                | -1 ep flat                                                                                                                             |
| Unwavering Conduit | APG                | -1 ep flat, evolutions only reassignable via `transmogrify`                                                                            |
| Pyroclast          | APG                | -1 ep flat                                                                                                                             |
| Broodmaster        | APG                | Pool split across a brood (2-4 Small eidolons). Summoner may pre-spend 4 ep (L8) or 6 ep (L13) on a shared evolution before the split. |
| Synthesist         | APG                | Pool unchanged. Evolutions apply to the fused summoner-eidolon composite.                                                              |

Archetypes that d20pfsrd attributed pool modifications to but which do NOT exist in first-party sources: Construct Caller, Soulbound Summoner, Devil Binder, Devil Impostor, Fey Caller. Exclude from v1.

### Feat and spell pool modifiers

- **Extra Evolution** feat: +1 ep, stackable up to 5 times total, selectable at summoner levels 1, 5, 10, 15, 20.
- **Aspect** (summoner L10 class feature): summoner may divert up to 2 ep from eidolon's pool to apply evolutions to self. 1:1 exchange.
- **Greater Aspect** (summoner L18 class feature): up to 6 ep diverted. Eidolon loses 1 ep per 2 ep (rounded up) diverted to summoner. Subtype prereqs waived for the summoner if the eidolon meets them (UC only).
- **Lesser Evolution Surge** (2nd-level spell): temporary evolution up to 2 ep, 1 min/level duration.
- **Evolution Surge** (3rd-level spell): temporary evolution up to 4 ep.
- **Greater Evolution Surge** (4th-level spell): up to two evolutions totaling 6 ep.
- **Transmogrify** (4th-level spell, 1-hour cast, 1,000 gp quicksilver): permanent full reassignment of the pool, 1/day per eidolon. Cannot change base form.

Surge spells grant temporary evolutions that do not count against the pool. The draft character entry UI does not need to model surges (they are runtime combat mechanics, out of scope here). `transmogrify` is the canonical reassignment action and is implicit in the draft UI: every edit is effectively a `transmogrify`.

---

## Goals

1. A first-class eidolon sub-sheet inside the Classes & Templates tab, triggered when a Summoner (APG or Unchained) class entry is present.
2. A pool manager UI that shows total available points, spent points, remaining points, and a running history of selected evolutions.
3. A picker sheet that filters evolutions by: edition, current class level, base form, subtype, other prereqs, and budget remaining.
4. Correct pool math for all first-party archetypes, including Broodmaster (multi-eidolon) and Synthesist (fused).
5. Correct subtype grants (free evolutions and +ep bumps) applied automatically.
6. Validation integration: pool overages, missing prereqs, level-gate violations surface as warnings via `DraftValidationService`.
7. Aspect and Greater Aspect support: the summoner can divert ep to self as a separate sub-flow.
8. Extra Evolution feat stacking (up to 5x) recognized in pool math.

---

## Non-Goals (v1)

1. Evolution Surge spells (runtime combat, not draft entry).
2. Per-encounter eidolon stat blocks (handled by combat system later).
3. Mid-combat evolution swaps via `transmogrify` UX (single reassign is the `EidolonEvolutionPool` itself).
4. Third-party archetypes (Dreamscarred Press, etc.). Structure supports them via campaign content later.
5. Eidolon equipment, skills, feats, spell progression. Those are eidolon sheet concerns, tracked separately. This plan is only about evolutions.

---

## Design Decisions

### D1. Single `eidolons` list on the draft, length-aware

```typescript
interface CharacterDraft {
  // existing fields unchanged
  eidolons: DraftEidolon[];
}

interface DraftEidolon {
  id: string;
  name: string;
  summonerClassEntryId: string; // the DraftClassEntry this eidolon belongs to
  edition: 'apg' | 'unchained';

  baseForm: EidolonBaseForm; // 'biped' | 'quadruped' | 'serpentine' | 'aquatic' | 'avian' | 'tauric' | 'aberrant'
  subtype?: EidolonSubtype; // Unchained only, required for unchained

  selectedEvolutions: SelectedEvolution[];
  poolOverride?: number; // manual GM override; surfaces as "trust" warning when set

  // Archetype flags resolved from summonerClassEntry.archetype:
  //   synthesist, broodmaster member index, master summoner lesser flag, etc.
  //   Derived, not stored here.
}

interface SelectedEvolution {
  instanceId: string; // unique per selection, enables multi-select (e.g., ability increase x3)
  evolutionId: string; // document id in `eidolonEvolutions` collection
  metadata?: {
    abilityScore?: AbilityKey; // for ability increase
    energyType?: EnergyType; // for resistance, energy attacks, breath weapon, immunity
    attackType?: string; // for pull, push, bleed, reach: which attack the modifier applies to
    spellId?: string; // for basic/minor/major/ultimate magic and psychic magic variants
    feat?: string; // for extra feat (APG only)
    skill?: string; // for skilled
    // ... extend per evolution
  };
}
```

`eidolons` is almost always length 1. Broodmaster has length 2-4. Synthesist is still length 1; the `fused` computation happens at character sheet render time, not in the data model.

**Rationale:** keeping eidolons in a list accommodates Broodmaster without needing a branched schema. The simple case (one eidolon) is only marginally more verbose than a singleton.

### D2. Fork divergent evolutions into edition-specific records, add structured stacking rules

The existing codebase already uses the fork pattern for divergent evolutions: when an evolution genuinely differs between editions (different cost, level gate, or function), it lives in two records with a `-uc` suffix on the Unchained variant. For example `evolution-pounce-apg` (1pt) and `evolution-pounce-uc` (3pt). This plan aligns with that pattern rather than introducing a cost-map.

```typescript
interface EidolonEvolutionEntry extends ClassOptionBase {
  evolutionPointCost: 1 | 2 | 3 | 4;

  // Replaces the existing `canBeTakenMultipleTimes: boolean` with structured rules.
  // Pool calc uses this to validate "ability increase on STR at cap", "resistance needs
  // different energy type", "skilled needs different skill", etc.
  stacking: {
    canRepeat: boolean;
    // Absolute cap across all metadata variants. Absent = unlimited.
    // Example: breath weapon has maxTotal: 3 (uses per day cap).
    maxTotal?: number;
    // If present, repeats must pick a different metadata value.
    // 'ability'   — ability increase, different score each repeat
    // 'attack'    — bleed, pull, push, grab, different attack type
    // 'energy'    — resistance, immunity, energy attacks, different energy type
    // 'skill'     — skilled, different skill
    // 'spell'     — basic/minor/major/ultimate magic, different spell
    // 'limbPair'  — claws, slams, pincers, hooves: one per limbs evolution
    // 'tail'      — tail slap, sting: one per tail evolution
    requiresDifferentMetadata?:
      | 'ability'
      | 'attack'
      | 'energy'
      | 'skill'
      | 'spell'
      | 'limbPair'
      | 'tail';
  };

  effects: Effect[];
  summoner?: 'apg' | 'unchained'; // absent = available to both
  formRestrictions?: EidolonForm[];
  subtypeRestrictions?: EidolonSubtype[];
}
```

Prerequisites continue to use the inherited `prerequisites?: Prerequisite[]` from `ClassOptionBase`. The `Prerequisite` union already supports `{ type: 'evolution'; evolutionId }` and `{ type: 'level'; minimum; class }` which cover the main cases. Subtype gating stays on `subtypeRestrictions` (distinct from prereqs since it's a hard filter, not a soft check).

**Rationale:** the fork-pattern is already in use, simpler to read, and each record is self-contained. Forking is only needed for ~9 evolutions (Pounce, Damage Reduction, Swallow Whole, Web, Poison, Mount, Gore, Tail, Tentacle). The cost-map approach would complicate every record shape to help a handful.

**Divergent evolutions that need UC forks:**

| Evolution        | APG record                                             | UC record                                                    | Divergence                       |
| ---------------- | ------------------------------------------------------ | ------------------------------------------------------------ | -------------------------------- |
| Pounce           | `evolution-pounce-apg` (1pt, quadruped)                | `evolution-pounce-uc` (3pt, L7, quadruped)                   | Cost and level gate              |
| Damage Reduction | `evolution-damage-reduction-apg` (3pt, L9, DR 5/align) | `evolution-damage-reduction-uc` (3pt, L15, +5 to subtype DR) | Function                         |
| Poison           | `evolution-poison` (2pt, L7)                           | `evolution-poison-uc` (2pt, L7, subtype + bite/sting)        | UC adds prereqs                  |
| Mount            | `evolution-mount` (1pt)                                | `evolution-mount-uc` (1pt, subtype + base form)              | UC adds prereqs                  |
| Gore             | `evolution-gore` (2pt)                                 | `evolution-gore-uc` (2pt, subtype)                           | UC adds prereqs                  |
| Tail             | `evolution-tail` (1pt)                                 | `evolution-tail-uc` (1pt, subtype)                           | UC adds prereqs                  |
| Tentacle         | `evolution-tentacle` (1pt)                             | `evolution-tentacle-uc` (1pt, subtype)                       | UC adds prereqs                  |
| Swallow Whole    | `evolution-swallow-whole-apg` (3pt, L9, grab)          | `evolution-swallow-whole-uc` (3pt, L9, subtype + grab)       | UC adds prereqs (already forked) |
| Web              | `evolution-web-apg` (3pt, L7, climb)                   | `evolution-web-uc` (3pt, L7, subtype + climb)                | UC adds prereqs (already forked) |

The last two are already forked. The other seven need new UC records.

### D3. Base form evolutions are FREE, marked on the form not the evolution

```typescript
interface EidolonBaseFormDefinition {
  id: EidolonBaseForm;
  edition: 'apg' | 'unchained' | 'both';
  startingSize: Size;
  baseSpeed: Record<'land' | 'swim' | 'fly' | 'climb' | 'burrow', number | undefined>;
  naturalArmor: number;
  saves: { fort: 'good' | 'bad'; ref: 'good' | 'bad'; will: 'good' | 'bad' };
  abilityScores: Record<AbilityKey, number>;
  baseAttacks: string[];
  freeEvolutions: string[]; // evolution ids, not charged to pool
}
```

Stored in a new Firestore collection `eidolonBaseForms`. Free evolutions are never selected manually; the pool manager renders them as a read-only "base form grants" section.

### D4. Subtype grants are scaling, stored on a new collection

```typescript
interface EidolonSubtypeDefinition {
  id: EidolonSubtype;
  name: string;
  edition: 'unchained';
  alignment?: Alignment[]; // some subtypes restrict alignment
  requiredBaseForms: EidolonBaseForm[]; // e.g., angel is biped-only
  scalingGrants: Array<{
    classLevel: 1 | 4 | 8 | 12 | 16 | 20;
    freeEvolutions?: string[]; // evolution ids granted free at this level
    bonusEvolutionPoints?: number; // the +1 ep at L4/L8
    specialAbilities?: string[]; // DR 5/evil, truespeech, poison immunity, etc. (display only in v1)
  }>;
}
```

The `specialAbilities` array is descriptive in v1 (rendered as text). Runtime effect wiring (applying DR, immunities, etc. to the eidolon's combat stats) is out of scope here and lives with the eidolon combat sheet.

### D5. Pool computation is a pure service

`PoolCalcService.computeEidolonPool(draft, eidolonId)` returns:

```typescript
interface EidolonPoolBreakdown {
  total: number; // sum of all sources
  spent: number; // sum of selected evolution costs (in this eidolon's edition)
  remaining: number;
  transferredToSummoner: number; // Aspect / Greater Aspect

  sources: {
    base: number; // from class level + edition
    extraEvolutionFeats: number; // up to 5
    subtypeGrants: number; // +1 ep from subtype at qualifying levels
    archetypeModifier: number; // Morphic Savant/Pyroclast/Unwavering Conduit -1; Wild Caller ARG +floor(level/4); Master Summoner halves base
    broodmasterShare?: number; // for brood members
  };

  freeEvolutionsGranted: string[]; // ids from base form and subtype, not charged
  warnings: string[]; // e.g., "Over pool by 2 points", "Ability increase on STR at cap"
}
```

`computeEidolonPool` is called by the UI on every change, and by `DraftValidationService` during validate. Pure function, fully testable, no Redux or Firestore dependency.

### D6. Broodmaster split is explicit

When the summoner class entry has `archetype: ['broodmaster']`, the pool is split. Summoner chooses to pre-spend 4 ep (at L8+) on a shared Large evolution or 6 ep (at L13+) on Huge before the split.

```typescript
interface DraftSummonerArchetypeState {
  broodmaster?: {
    brood: string[]; // list of eidolon ids in the brood
    sharedEvolutionIds: string[]; // Large (L8) or Huge (L13) pre-spent from shared pool
  };
}
```

Stored on the `DraftClassEntry` (the summoner class entry), not the eidolon. Pool math:

- Total pool = computeBasePool - sharedEvolutionsCost
- Remaining pool is split equally among brood members (floor division; leftover goes to eidolon #1)

### D7. Aspect / Greater Aspect is a separate sub-flow

Summoner class entry gains an `aspectTransfer` field at L10+:

```typescript
interface DraftClassEntry {
  // ... existing ...
  summonerAspectTransfer?: {
    sourceEidolonId: string;
    divertedPoints: number; // 0-2 at L10, 0-6 at L18
    evolutions: SelectedEvolution[]; // evolutions applied to summoner, not eidolon
  };
}
```

The UI for Aspect lives in the Classes tab, on the Summoner class entry card, not in the eidolon sub-sheet. Pool math deducts diverted points from the eidolon (1:1 for Aspect, 2:1 rounded up for Greater Aspect).

### D8. Extra Evolution feat recognition

When the draft's feat list includes `extra-evolution` entries (up to 5), each counts toward the pool. Per-feat validation requires the summoner level at the time of taking the feat matches the allowed levels (1/5/10/15/20). Already handled by feat-slot system since `CharacterFeat.classLevelsWhenTaken` is snapshotted; we just need the pool calc to count qualifying Extra Evolution feats.

### D9. Evolution prerequisite case in PrerequisiteService

Existing `PrerequisiteService.formatPrerequisite` handles `{ type: 'evolution'; evolutionId }` for display, but `checkSingle` silently returns false. Add:

```typescript
case 'evolution': {
  const evolutionPrereq = prereq as EvolutionPrerequisite;
  const eidolons = (character as CharacterWithEidolons).eidolons ?? [];
  return eidolons.some((eid) =>
    eid.selectedEvolutions.some((e) => e.evolutionId === evolutionPrereq.evolutionId)
  );
}
```

---

## UI Design

### Entry point: Classes & Templates tab

When a `DraftClassEntry` is a Summoner (APG or Unchained), the card renders a new "Eidolon" section below the existing class choice rows:

```
┌─ Cleric 5 ──────────────────────────────┐  (existing)
│ ...                                     │
└─────────────────────────────────────────┘

┌─ Summoner (Unchained) 9 ─────[Unchained]┐
│ Level [9]   Archetype: [none      🔍]   │
│ ▾ Class Choices (none at this level)    │
│                                         │
│ ┌─ Eidolon ────────────────────────────┐│
│ │ Name:  [Aziel                       ]││
│ │ Base:  [Biped          ▼]            ││
│ │ Subtype: [Angel        ▼]            ││
│ │                                      ││
│ │ Pool: 7 total, 5 spent, 2 remaining  ││
│ │ ├ Base (L9):   7                     ││
│ │ ├ Extra Evol:  0                     ││
│ │ ├ Subtype:     0  (Angel gives 0 ep) ││
│ │ ├ Archetype:   0                     ││
│ │ └ To summoner: 0                     ││
│ │                                      ││
│ │ Free from base form: limbs(arms),    ││
│ │   limbs(legs), claws                 ││
│ │ Free from subtype:   flight (L8),    ││
│ │   DR 5/evil (L12), acid immunity (L16)││
│ │                                      ││
│ │ ▾ Selected Evolutions                ││
│ │ ┌─ Ability Increase (STR) ──── [2pt]┐││
│ │ └─────────────────────── [ ✕] ──────┘││
│ │ ┌─ Improved Natural Armor ──── [1pt]┐││
│ │ └─────────────────────── [ ✕] ──────┘││
│ │ ┌─ Magic Attacks ───────────── [2pt]┐││
│ │ └─────────────────────── [ ✕] ──────┘││
│ │                                      ││
│ │ [+ Add Evolution]                    ││
│ │                                      ││
│ │ ▾ Aspect (L10, not yet available)    ││
│ └──────────────────────────────────────┘│
└─────────────────────────────────────────┘
```

### Evolution picker sheet

```
┌─ Add Evolution ─────────────── [✕]────┐
│  Remaining: 2 ep                       │
│  [Filter: All ▼] [Cost: Any ▼]  [🔍]  │
│                                        │
│  1 Point                               │
│  ┌ Bite ──────────────────────── 1pt ─┐│
│  │ Primary bite 1d6                   ││
│  │ Prereqs: none. Stacks with slam.   ││
│  │                              [Add] ││
│  └────────────────────────────────────┘│
│  ┌ Claws ─────────────────────── 1pt ─┐│
│  │ 2 claws 1d4 primary                ││
│  │ Prereqs: limbs (arms)              ││
│  │                              [Add] ││
│  └────────────────────────────────────┘│
│  ...                                   │
│                                        │
│  2 Points                              │
│  ┌ Ability Increase ────────── 2pt ──┐ │
│  │ +2 to one ability score            ││
│  │ Stackable: up to 2x STR at L9      ││
│  │   (current: 1x STR)                ││
│  │ Choose ability: [STR ▼]            ││
│  │                              [Add] ││
│  └────────────────────────────────────┘│
│  ⊘ Poison                     2pt      │
│  │ Requires: daemon/demon/devil/       │
│  │           elemental/protean subtype │
│  │ Your subtype is Angel. Not available.│
│  └────────────────────────────────────┘│
│                                        │
│  3 Points (requires 1 ep more)         │
│  ...                                   │
│                                        │
│  4 Points                              │
│  ⊘ Large  [L9, 4pt] requires L7       │
│  ...                                   │
└────────────────────────────────────────┘
```

Filtering behavior:

- Costs higher than remaining pool are rendered but grayed out with "requires X more ep" label.
- Prereq failures (base form, subtype, level, missing evolutions) render grayed out with the specific failure reason.
- Stacking-capped evolutions render with current count out of max (e.g., "Ability Increase STR: 1/2").
- Evolutions only in APG when eidolon is UC (or vice versa) are filtered out entirely.

### Aspect sub-flow (summoner class entry, L10+)

```
┌─ Aspect ─────────────────────────────┐
│  Divert evolution points from Aziel  │
│  to yourself.                         │
│                                       │
│  Diverted: 2 of 2 max                │
│  [Slider or number input]             │
│                                       │
│  Selected evolutions (for summoner):  │
│  ┌─ Scent ────────────────── 1pt ──┐│
│  └────────────────────────── [✕]───┘│
│  ┌─ Swim ─────────────────── 1pt ──┐│
│  └────────────────────────── [✕]───┘│
│                                       │
│  [+ Add Evolution to Summoner]        │
│                                       │
│  Cost to eidolon: 2 ep (1:1 at L10)   │
└───────────────────────────────────────┘
```

When summoner hits L18, the header changes to "Greater Aspect" and max increases to 6, with the 2:1 exchange note.

### Broodmaster UI

When the summoner archetype is `broodmaster` and class level >= 2, a broodmaster pool card appears above each eidolon card:

```
┌─ Brood Pool ─────────────────────────┐
│  Shared budget before split: 10 ep    │
│  Shared evolutions (pre-split):       │
│  ┌─ Large (L8, shared) ──── 4pt ──┐ │
│  └─────────────────────────── [✕]─┘ │
│  [+ Add Shared Evolution]            │
│                                       │
│  After shared: 6 ep split across 2   │
│  brood members (3 ep each)            │
└───────────────────────────────────────┘
```

Each eidolon card below shows its 3 ep pool with normal evolution selection.

---

## Components Inventory

| Component                                                           | Purpose                                                                                     |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `src/components/character/direct-entry/EidolonSection.tsx`          | Top-level container, rendered inside `ClassEntryCard` when class is summoner                |
| `src/components/character/direct-entry/EidolonEvolutionPool.tsx`    | Pool breakdown display (total, spent, remaining, sources)                                   |
| `src/components/character/direct-entry/SelectedEvolutionsList.tsx`  | Renders the list of purchased evolutions with remove buttons                                |
| `src/components/character/direct-entry/FreeEvolutionsList.tsx`      | Renders base-form and subtype free evolutions, read-only                                    |
| `src/components/character/direct-entry/EvolutionPickerSheet.tsx`    | Modal sheet for adding an evolution                                                         |
| `src/components/character/direct-entry/EidolonBaseFormPicker.tsx`   | Base form dropdown + confirmation (warns if changing clears subtype or evolutions)          |
| `src/components/character/direct-entry/EidolonSubtypePicker.tsx`    | Subtype dropdown, Unchained only, filtered by base form                                     |
| `src/components/character/direct-entry/EidolonAspectCard.tsx`       | Aspect / Greater Aspect sub-flow, rendered in summoner class card                           |
| `src/components/character/direct-entry/BroodmasterPoolCard.tsx`     | Shared pool + pre-split evolutions for Broodmaster                                          |
| `src/components/character/direct-entry/EvolutionMetadataPicker.tsx` | Metadata collection for multi-meta evolutions (ability, energy, skill, spell, attack, feat) |

All use existing primitives: `OrnatePanel`, `OrnateButton`, `OrnateStatInput`, `FantasyTextInput`, `FantasyDivider`, `SearchPickerSheet` (extended).

---

## Service Layer

### New: `src/services/EidolonPoolService.ts`

```typescript
export class EidolonPoolService {
  static computePool(draft: CharacterDraft, eidolonId: string): EidolonPoolBreakdown;

  static computeFreeEvolutions(
    baseForm: EidolonBaseForm,
    subtype: EidolonSubtype | undefined,
    summonerClassLevel: number,
  ): string[]; // evolution ids

  static canSelectEvolution(
    evolution: EidolonEvolutionEntry,
    eidolon: DraftEidolon,
    summonerClassLevel: number,
    remainingPool: number,
  ): { allowed: boolean; reason?: string };

  static totalEvolutionCost(
    evolutions: SelectedEvolution[],
    evolutionIndex: Map<string, EidolonEvolutionEntry>,
    edition: 'apg' | 'unchained',
  ): number;
}
```

All static methods. All pure. Full unit test coverage required (see Testing section).

### Modified: `src/services/PrerequisiteService.ts`

Add the `case 'evolution':` branch described in D9.

### Modified: `src/services/DraftValidationService.ts`

Add eidolon validation checks:

| Check                                        | Condition                                                  | Section                      |
| -------------------------------------------- | ---------------------------------------------------------- | ---------------------------- |
| Pool overage                                 | spent > total                                              | spells (eidolon sub-section) |
| Unchained base form missing subtype          | edition === 'unchained' && !subtype                        | classes                      |
| Subtype requires specific base form          | subtype.requiredBaseForms does not include baseForm        | classes                      |
| Evolution level gate violated                | summonerLevelMin > current summoner class level            | classes                      |
| Evolution prereq missing                     | shared/edition-specific prereq chain not satisfied         | classes                      |
| Ability increase cap                         | applied to same stat more than (1 + summonerLevel/6) times | classes                      |
| Extra Evolution feat without summoner class  | feat present but no summoner class                         | feats                        |
| Aspect divert over max                       | summonerAspectTransfer.divertedPoints > allowed            | classes                      |
| Broodmaster shared evolution below min level | shared evolution tier below L8/L13 respectively            | classes                      |

All surface as `EntryValidationWarning` entries. `prereqOverride: true` on the evolution's parent class entry suppresses evolution-level warnings the same way it suppresses feat-level ones.

### Modified: `src/services/DraftStateResolver.ts`

Extend `DraftCharacterSnapshot` with an `eidolons` field mirroring the draft so prerequisite checks that reference `{ type: 'evolution' }` work during validation timeline walks.

---

## Redux Changes

### `src/store/slices/characterEntrySlice.ts`

Replace the two uncommitted reducers (`addEidolonEvolution`, `removeEidolonEvolution` stored as ClassChoices) with a proper eidolon sub-state. Draft reducers required:

- `addEidolon(classEntryId, baseForm, edition)` - default subtype picked or required
- `removeEidolon(eidolonId)`
- `renameEidolon(eidolonId, name)`
- `setEidolonBaseForm(eidolonId, baseForm)` - warns via a returned list of invalidated evolutions
- `setEidolonSubtype(eidolonId, subtype)` - same
- `addSelectedEvolution(eidolonId, evolutionId, metadata)` - generates instanceId
- `removeSelectedEvolution(eidolonId, instanceId)`
- `updateEvolutionMetadata(eidolonId, instanceId, metadata)`
- `overridePool(eidolonId, value | null)` - for GM override
- `setBroodmasterShared(classEntryId, evolutionId, metadata)`
- `removeBroodmasterShared(classEntryId, instanceId)`
- `setAspectTransfer(classEntryId, divertedPoints)`
- `addSummonerAspectEvolution(classEntryId, evolutionId, metadata)`
- `removeSummonerAspectEvolution(classEntryId, instanceId)`

Discard the current uncommitted 40 lines. Do not try to shim through `classChoices`.

---

## Seed Data Audit

### `src/data/eidolonEvolutions/raw/*.ts` corrections

Existing audit state (spot-checked 2026-04-23): the `summoner: 'apg'` tagging is mostly correct. APG-only evolutions (Basic Magic, Bleed, Hooves, Low-Light Vision, Slippery, Sticky, Unnatural Aura, Alignment Smite, Channel Resistance, Head, Keen Scent, Minor Magic, Rider Bond, Shadow Blend, Shadow Form, Sickening, Undead Appearance, Shared Evolution, Extra Feat, Shared Slot) are correctly tagged. Shared evolutions (Bite, Claws, Limbs, etc.) have no `summoner` field which is correct.

The actual audit work is narrower than first estimated:

1. **Fork seven UC variants for subtype-gating divergences.** Create `-uc` records for Poison, Mount, Gore, Tail, Tentacle (new), and verify the existing Swallow Whole and Web UC forks capture the full prereq set.
2. **Replace `canBeTakenMultipleTimes: boolean` with `stacking: {...}` object** on every record. Migration table:
   - `canBeTakenMultipleTimes: false` (or absent) → `stacking: { canRepeat: false }`
   - `canBeTakenMultipleTimes: true` → `stacking: { canRepeat: true, ... }` with metadata kind inferred from description:
     - Ability Increase → `requiresDifferentMetadata: 'ability'`
     - Bleed, Pull, Push, Grab, Improved Damage → `requiresDifferentMetadata: 'attack'`
     - Resistance, Immunity, Energy Attacks → `requiresDifferentMetadata: 'energy'`
     - Skilled → `requiresDifferentMetadata: 'skill'`
     - Basic Magic, Minor Magic, Major Magic, Ultimate Magic → `requiresDifferentMetadata: 'spell'`
     - Claws, Slam, Pincers, Hooves → `requiresDifferentMetadata: 'limbPair'`
     - Tail Slap, Sting → `requiresDifferentMetadata: 'tail'`
     - Breath Weapon → `maxTotal: 3` (uses per day cap)
3. **Add `aspectEligible?: boolean`** (optional; populated in Phase 5).
4. **Spot-check level gates** against the Rule Corrections section. Known gates are already in the data; verify they match.

### New seed scripts

- `scripts/db/seedEidolonBaseForms.ts` - seeds the 7 base forms (biped, quadruped, serpentine, aquatic, avian, tauric, aberrant) with starting stats, free evolutions, and edition.
- `scripts/db/seedEidolonSubtypes.ts` - seeds the 23+ Unchained subtypes with scaling grants tables.

Data files:

- `src/data/eidolonBaseForms/index.ts` - 7 base form definitions.
- `src/data/eidolonSubtypes/index.ts` - all Unchained subtypes from AoN.

Update `scripts/db/seedAll.ts` to include the new scripts in dependency order (base forms and subtypes before evolutions).

### Firestore indexes

Add to `firestore.indexes.json`:

```json
{
  "collectionGroup": "eidolonEvolutions",
  "fields": [
    { "fieldPath": "visibility", "order": "ASCENDING" },
    { "fieldPath": "verificationStatus", "order": "ASCENDING" },
    { "fieldPath": "name", "order": "ASCENDING" }
  ]
}
```

Similar composite indexes for `eidolonBaseForms` and `eidolonSubtypes`.

---

## GameDataService / Connector Changes

`src/services/GameDataService.ts`:

- `searchEvolutions(query, context, edition): Promise<EidolonEvolutionEntry[]>`
- `getEvolutionById(id, context): Promise<EidolonEvolutionEntry | null>`
- `getAllBaseForms(context): Promise<EidolonBaseFormDefinition[]>`
- `getSubtypes(context, edition): Promise<EidolonSubtypeDefinition[]>`
- `getSubtypeById(id, context): Promise<EidolonSubtypeDefinition | null>`

`src/services/FirestoreGameDataConnector.ts`: implement above methods.

`src/services/StaticGameDataConnector.ts`: implement for tests, reading from `src/data/eidolonEvolutions`, `src/data/eidolonBaseForms`, `src/data/eidolonSubtypes`.

---

## Type Changes Summary

| File                          | Change                                                                                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/types/classOptions.ts`   | Replace `EidolonEvolutionEntry` shape (cost map, prereq shape, stacking rules). Existing seed data must be migrated.                             |
| `src/types/eidolon.ts` (new)  | `EidolonBaseForm`, `EidolonSubtype`, `EidolonBaseFormDefinition`, `EidolonSubtypeDefinition`, `EidolonPrereq` union.                             |
| `src/types/characterDraft.ts` | Add `eidolons: DraftEidolon[]` to `CharacterDraft`. Add `summonerAspectTransfer` and `broodmaster` to `DraftClassEntry`.                         |
| `src/types/character.ts`      | Add `eidolons: Eidolon[]` to `Character` (runtime), shape mirrors `DraftEidolon` but with more computed fields for the eidolon sheet (deferred). |
| `src/types/feats.ts`          | `EvolutionPrerequisite` already exists. No change needed except add evolution case in `PrerequisiteService`.                                     |

---

## Testing

### Unit: EidolonPoolService

- Base pool at every level 1-20, APG and UC.
- Extra Evolution feat stacks: 0, 1, 3, 5 times, verify cap at 5.
- Wild Caller ARG: summoner levels 1, 4, 5, 8, 16 yield 0, 1, 1, 2, 4 bonus ep respectively.
- Master Summoner: level 10 yields level-5 base pool (8 APG, 4 UC).
- Morphic Savant / Unwavering Conduit / Pyroclast: -1 at every level.
- Subtype bumps: angel (no bump), archon at L4 (+1), daemon at L8 (+1), shadow at L8 (+1).
- Aspect at L10: diverting 2 ep reduces eidolon pool by 2.
- Greater Aspect at L18: diverting 6 ep reduces eidolon pool by 3; diverting 5 ep reduces by 3 (rounded up); diverting 3 ep reduces by 2 (rounded up).
- Broodmaster: 10 ep at L5 splits to 5/5 across 2 eidolons; 11 ep splits 6/5; pre-split shared evolution of 4 ep leaves 6 to split 3/3.
- Synthesist: pool unchanged, no double-counting.

### Unit: EvolutionSelection

- Cost applied per edition: Pounce costs 1 for APG eidolon, 3 for UC eidolon.
- Ability increase cap: L6 allows 2 purchases of STR, L12 allows 3, L18 allows 4.
- Breath weapon max 3/day cap: fourth purchase blocked.
- Resistance different energy types: 5 separate purchases allowed, one per energy type.
- Level gate enforcement: Large at L6 blocked, L7 allowed.
- Subtype gate: poison without daemon/demon/devil/elemental/protean subtype blocked in UC.
- Attack-type prereq: swallow whole without grab-bite evolution blocked in UC.

### Unit: PrerequisiteService

- Feat requiring `{ type: 'evolution'; evolutionId: 'claws' }` passes when eidolon has claws.
- Same feat fails when eidolon lacks claws.
- Feat passes when any of multiple eidolons has the evolution.

### Integration: DraftValidationService

- Fixture: Summoner UC 9, biped, angel, with 5 ep spent of 7 available, no warnings.
- Fixture: same but 9 ep spent, pool overage warning.
- Fixture: poison selected with angel subtype in UC, subtype prereq warning.
- Fixture: Large selected at L6, level gate warning.
- Fixture: Broodmaster L8 with 1 shared Large evolution, 7 ep remaining split 4/3, no warning.
- Fixture: Aspect at L10 with 3 ep diverted, overage warning.

### Component: EidolonSection, EvolutionPickerSheet, BroodmasterPoolCard

- Picker filters evolutions by cost remaining.
- Picker filters by base form.
- Picker filters by subtype (UC).
- Ability increase metadata picker works for different stats.
- Energy type metadata picker works for resistance.
- Remove button returns cost to pool.
- Broodmaster pre-split evolution count-down works.

---

## Phase Breakdown

All phases land on `main` as separate PRs, with progressively growing test coverage. Each phase passes typecheck and leaves the app functional.

### Phase 1: Type system + seed data audit

Branch: `MW/eidolon-types` (split from current `MW/eidolon-evolution-pool`)

- New types: `EidolonBaseForm`, `EidolonSubtype`, `EidolonBaseFormDefinition`, `EidolonSubtypeDefinition`, `EidolonPrereq`, revised `EidolonEvolutionEntry`.
- New `DraftEidolon` type; `eidolons` field added to `CharacterDraft`; `summonerAspectTransfer` / `broodmaster` fields on `DraftClassEntry`.
- Seed data audit on `src/data/eidolonEvolutions/raw/*` (cost map migration, prereq restructure, tag corrections).
- New data files: `src/data/eidolonBaseForms/`, `src/data/eidolonSubtypes/`.
- New seed scripts: `seedEidolonBaseForms.ts`, `seedEidolonSubtypes.ts`; update `seedAll.ts`.
- `npm run typecheck` passes.
- Tests: none new (data-only phase).

### Phase 2: Service layer + PrerequisiteService integration

Branch: `MW/eidolon-pool-service`

- `EidolonPoolService` with all pure methods.
- `PrerequisiteService.checkSingle` evolution case.
- `DraftStateResolver` snapshot includes eidolons.
- `DraftValidationService` eidolon validation checks.
- Full unit test coverage on `EidolonPoolService` and `PrerequisiteService` evolution case.
- Integration tests on `DraftValidationService` with Summoner fixtures.

### Phase 3: Redux + base UI

Branch: `MW/eidolon-ui-base`

- Remove the uncommitted `addEidolonEvolution` / `removeEidolonEvolution` reducers from `characterEntrySlice`.
- Add all the new eidolon-focused reducers listed in Redux Changes.
- Build `EidolonSection`, `EidolonEvolutionPool`, `SelectedEvolutionsList`, `FreeEvolutionsList`, `EvolutionPickerSheet`, `EvolutionMetadataPicker`.
- Wire into `ClassEntryCard` for Summoner class entries.
- Handles single-eidolon case for APG and UC.
- Component tests on the new components.

### Phase 4: Base form + subtype pickers

Branch: `MW/eidolon-picker-ui`

- `EidolonBaseFormPicker`, `EidolonSubtypePicker`.
- Confirmation flow when changing base form or subtype invalidates selections.
- Free evolutions display driven by base form + subtype + summoner level.

### Phase 5: Archetype flows

Branch: `MW/eidolon-archetypes`

- Wild Caller (ARG) / Master Summoner / Morphic Savant / Unwavering Conduit / Pyroclast recognized; pool math automatic.
- `EidolonAspectCard` for Aspect / Greater Aspect (L10+ / L18+).
- `BroodmasterPoolCard` with pre-split shared evolutions.
- Synthesist flag (pool unchanged, evolutions apply to composite at display).
- Extra Evolution feat recognition in pool math.

### Phase 6: Validation polish

Branch: `MW/eidolon-validation`

- All validation cases wired through `ValidationReportSheet`.
- Fix-in-section navigation hooks for eidolon warnings.
- Manual test: stress cases (max ability increase, Broodmaster overspend, level-gate violations).

---

## Resolved Decisions (2026-04-23)

1. **Aquatic, avian, tauric base forms** - allowed in BOTH APG and Unchained. Flagged with `legacyBaseForm: true` so the UI can note they are late-APG additions, but no hard restriction.
2. **All 26 subtypes ship in v1.** Any partial-data subtype records are marked `verificationStatus: 'needs_review'` but still shipped.
3. **Reset all evolutions button** - long-press confirm on the pool card. Confirms with summary of how many evolutions will be cleared.
4. **Aspect evolution eligibility** - a follow-up research pass before Phase 5 will produce the authoritative list. Phase 1 adds an optional `aspectEligible?: boolean` field on `EidolonEvolutionEntry` that is populated in the Phase 5 work.
5. **Pool override reason** - required. `DraftEidolon.poolOverride` becomes an object `{ value: number; note: string }` not a bare number. Empty note blocks submission; surfaces in validation report.
6. **Transmogrify runtime tracking** - trust the DM. No timestamp.

## Deferred (post-v1)

- Eidolon runtime stat block (HP, AC, saves, feats, skills, spells). v1 is draft-only; the combat sheet is a separate phase.
- Evolution Surge temporary evolutions. Draft-time only in v1.
- Third-party archetypes (Dreamscarred etc.) - structure supports them via campaign content.

---

## References

- Archives of Nethys: https://www.aonprd.com
  - APG Evolutions: https://www.aonprd.com/SummonerEvolutions.aspx
  - Unchained Evolutions: https://www.aonprd.com/SummonerUCEvolutions.aspx
  - APG Eidolon: https://www.aonprd.com/ClassDisplay.aspx?ItemName=Eidolon
  - Unchained Eidolon: https://www.aonprd.com/ClassDisplay.aspx?ItemName=Eidolon+(Unchained)
  - Unchained Subtypes: https://www.aonprd.com/EidolonUCSubtypes.aspx
  - Summoner Archetypes: https://www.aonprd.com/Archetypes.aspx?Class=Summoner
  - Extra Evolution: https://www.aonprd.com/FeatDisplay.aspx?ItemName=Extra+Evolution
  - Transmogrify: https://www.aonprd.com/SpellDisplay.aspx?ItemName=Transmogrify

Related plans:

- `plans/character-system-redesign.md` - flags evolution prereq gap and eidolon pool TODO
- `plans/direct-entry-ui-design.md` - section on Classes & Templates tab
- `plans/data-access-layer.md` - GameDataConnector pattern
- `plans/admin-panel.md` - `DataQualityFields` applied to new types

---

## File Change Table

| File                                                                        | Change                                                                               |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `plans/eidolon-evolution-pool.md`                                           | New, this file                                                                       |
| `src/types/classOptions.ts`                                                 | Revised `EidolonEvolutionEntry`                                                      |
| `src/types/eidolon.ts`                                                      | New, all eidolon base form / subtype types                                           |
| `src/types/characterDraft.ts`                                               | `eidolons: DraftEidolon[]` added; aspect and broodmaster fields on `DraftClassEntry` |
| `src/types/character.ts`                                                    | `eidolons: Eidolon[]` added (mirrors draft; runtime sheet extension deferred)        |
| `src/services/EidolonPoolService.ts`                                        | New                                                                                  |
| `src/services/PrerequisiteService.ts`                                       | Evolution case added                                                                 |
| `src/services/DraftStateResolver.ts`                                        | Snapshot includes eidolons                                                           |
| `src/services/DraftValidationService.ts`                                    | Eidolon validation checks added                                                      |
| `src/services/GameDataService.ts`                                           | Evolution / base form / subtype methods added                                        |
| `src/services/FirestoreGameDataConnector.ts`                                | Implement new methods                                                                |
| `src/services/StaticGameDataConnector.ts`                                   | Implement new methods for tests                                                      |
| `src/store/slices/characterEntrySlice.ts`                                   | Discard uncommitted reducers; add eidolon reducers                                   |
| `src/components/character/direct-entry/EidolonSection.tsx`                  | New                                                                                  |
| `src/components/character/direct-entry/EidolonEvolutionPool.tsx`            | New                                                                                  |
| `src/components/character/direct-entry/SelectedEvolutionsList.tsx`          | New                                                                                  |
| `src/components/character/direct-entry/FreeEvolutionsList.tsx`              | New                                                                                  |
| `src/components/character/direct-entry/EvolutionPickerSheet.tsx`            | New                                                                                  |
| `src/components/character/direct-entry/EvolutionMetadataPicker.tsx`         | New                                                                                  |
| `src/components/character/direct-entry/EidolonBaseFormPicker.tsx`           | New                                                                                  |
| `src/components/character/direct-entry/EidolonSubtypePicker.tsx`            | New                                                                                  |
| `src/components/character/direct-entry/EidolonAspectCard.tsx`               | New                                                                                  |
| `src/components/character/direct-entry/BroodmasterPoolCard.tsx`             | New                                                                                  |
| `src/components/character/direct-entry/ClassEntryCard.tsx`                  | Wire `EidolonSection` for summoner class entries                                     |
| `src/data/eidolonEvolutions/raw/*`                                          | Audit and migrate per Rule Corrections                                               |
| `src/data/eidolonBaseForms/index.ts`                                        | New, 7 base form definitions                                                         |
| `src/data/eidolonSubtypes/index.ts`                                         | New, 23+ Unchained subtype definitions                                               |
| `scripts/db/seedEidolonBaseForms.ts`                                        | New                                                                                  |
| `scripts/db/seedEidolonSubtypes.ts`                                         | New                                                                                  |
| `scripts/db/seedEidolonEvolutions.ts`                                       | Migrate to new shape                                                                 |
| `scripts/db/seedAll.ts`                                                     | Add new scripts to pipeline                                                          |
| `firestore.indexes.json`                                                    | Add composite indexes for `eidolonEvolutions`, `eidolonBaseForms`, `eidolonSubtypes` |
| `__tests__/services/EidolonPoolService.test.ts`                             | New, comprehensive                                                                   |
| `__tests__/services/PrerequisiteService.test.ts`                            | Add evolution case tests                                                             |
| `__tests__/services/DraftValidationService.test.ts`                         | Add eidolon validation fixtures                                                      |
| `__tests__/components/character/direct-entry/EidolonSection.test.tsx`       | New                                                                                  |
| `__tests__/components/character/direct-entry/EvolutionPickerSheet.test.tsx` | New                                                                                  |
| `__tests__/components/character/direct-entry/BroodmasterPoolCard.test.tsx`  | New                                                                                  |
