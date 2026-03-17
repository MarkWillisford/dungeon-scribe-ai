# Class Choices Database — Design & Scraping Plan

## 2026-03-12

### Purpose

Every class has structured player selections that must exist in Firestore before the
direct-entry UI (Classes & Templates tab) can function. This plan defines:

- What choices each priority class requires
- Which Firestore collection each choice maps to
- What type changes are needed
- What scraping plans are needed
- The execution order

---

## Naming Convention

All collection document interfaces use the suffix **`Entry`**, not `Document`.
`Document` is too easily confused with Firestore's own terminology.

| Old name                     | New name                  |
| ---------------------------- | ------------------------- |
| `ClassOptionDocument`        | `ClassOptionBase`         |
| `DomainDocument`             | `DomainEntry`             |
| `BloodlineDocument`          | `BloodlineEntry`          |
| `MysteryDocument`            | `MysteryEntry`            |
| `RogueTalentDocument`        | `RogueTalentEntry`        |
| `RagePowerDocument`          | `RagePowerEntry`          |
| `HexDocument`                | `HexEntry`                |
| `ArcanistExploitDocument`    | `ArcanistExploitEntry`    |
| `InvestigatorTalentDocument` | `InvestigatorTalentEntry` |
| `ShamanSpiritDocument`       | `ShamanSpiritEntry`       |
| `WildTalentDocument`         | `WildTalentEntry`         |

**File:** `src/types/classOptions.ts` — rename all interfaces in place.

---

## Type Changes Required

### 1. `DomainEntry` — add `druidAllowed`

```typescript
interface DomainEntry extends ClassOptionBase {
  domainSpells: string[];
  powers: DomainPower[];
  grantedClassSkills?: string[];
  druidAllowed: boolean; // true for Air, Animal, Earth, Fire, Plant, Water, Weather + subdomains
}
```

### 2. `DeityEntry` — add boons

AoN deity pages include all 9 boons per deity (Evangelist / Exalted / Sentinel, tiers 1–3)
on a single page. Boons come free with deity scraping — no separate collection needed.

```typescript
interface DeityBoonTier {
  tier: 1 | 2 | 3;
  description: string;
}

interface DeityBoons {
  obedienceRequirement: string;
  evangelist: DeityBoonTier[]; // 3 entries
  exalted: DeityBoonTier[];    // 3 entries
  sentinel: DeityBoonTier[];   // 3 entries
}

// Add to DeityEntry:
boons?: DeityBoons;
```

**File:** `src/types/deities.ts`

### 3. `ClassChoiceOption` — add `subtypePrompt`

For Ranger Favored Enemy: Humanoid and Outsider subtypes require a secondary pick
(e.g. Human, Elf; Chaotic, Evil). The `subtypePrompt` field flags this and provides
the subtype list for the UI.

```typescript
interface ClassChoiceOption {
  id: string;
  name: string;
  description: string;
  prerequisites?: FeatPrerequisite[];
  subtypePrompt?: {
    label: string; // e.g. 'Choose a humanoid subtype'
    options: string[]; // e.g. ['human', 'elf', 'dwarf', 'goblinoid', ...]
  };
}
```

**File:** `src/types/classChoices.ts`

### 4. `ClassChoiceDefinition` — add `levelFilterTable`

For Dweomerkeeper's Mantle of Spells: the maximum spell level available changes per
class level. Rather than token substitution, the definition carries a lookup table
that the UI resolves at the time of the choice.

```typescript
interface ClassChoiceDefinition {
  // ... existing fields ...

  // Optional: overrides collectionFilter at specific class levels.
  // Key = class level at which this filter becomes active.
  // e.g. Dweomerkeeper: { 1: { maxSpellLevel: 3 }, 3: { maxSpellLevel: 5 }, ... }
  levelFilterTable?: Record<number, Record<string, unknown>>;
}
```

**File:** `src/types/classChoices.ts`

### 5. New type: `AnimalCompanionEntry`

New file: `src/types/animalCompanions.ts`

```typescript
interface AnimalCompanionProgressionTier {
  atLevel: 4 | 7; // druid level at which this tier activates
  sizeChange?: string; // e.g. 'Medium → Large'
  abilityScoreChanges: { ability: string; change: number }[];
  naturalArmorChange?: number;
  attackChanges?: string; // e.g. 'bite (1d8)'
  specialQualitiesGained?: string[];
}

interface AnimalCompanionEntry {
  id: string; // kebab-case: 'wolf', 'leopard', 'fleshraker'
  name: string;
  description?: string;

  // Starting statistics
  size: string;
  speed: string; // e.g. '50 ft.' or '30 ft., climb 20 ft.'
  naturalArmor: number;
  attacks: string; // e.g. 'bite (1d6)'
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  specialQualities: string[];

  progressionTiers: AnimalCompanionProgressionTier[];

  // ContentMetadata
  source: string;
  isOfficial: boolean;
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  createdBy?: string;
  rev: number;
}
```

---

## Collections Inventory

### Needs scraping — plan exists

| Collection | Plan file                                 | Status       |
| ---------- | ----------------------------------------- | ------------ |
| `domains`  | `plans/data-scraping/domains-database.md` | Ready to run |

### Needs scraping — plan needed

| Collection         | Plan file to create                                 | Approx. count | Source   |
| ------------------ | --------------------------------------------------- | ------------- | -------- |
| `deities`          | `plans/data-scraping/deities-database.md`           | ~400          | AoN      |
| `animalcompanions` | `plans/data-scraping/animal-companions-database.md` | ~200          | d20pfsrd |
| `ragepowers`       | `plans/data-scraping/ragepowers-database.md`        | ~100+         | d20pfsrd |
| `roguetalents`     | `plans/data-scraping/roguetalents-database.md`      | ~100+         | d20pfsrd |

### Small enough to hand-author — no plan needed

| Collection / Data                      | Used By          | Count         |
| -------------------------------------- | ---------------- | ------------- |
| `advancedweapontraining`               | Fighter level 9+ | ~20 options   |
| `advancedarmorrtraining`               | Fighter level 7+ | ~8 options    |
| Paladin mercies (inline on definition) | Paladin          | ~18 options   |
| Ranger favored enemies (inline)        | Ranger           | ~20 types     |
| Ranger favored terrains (inline)       | Ranger           | ~12 types     |
| Ranger combat styles (inline)          | Ranger           | 7 options     |
| Wizard schools + bond (inline)         | Wizard           | 9 + 2 options |
| Druid nature bond type (inline)        | Druid            | 3 options     |

### Points at existing collections — no new scraping

| Collection | Used By                        | Filter                                                               |
| ---------- | ------------------------------ | -------------------------------------------------------------------- |
| `feats`    | Fighter bonus feats            | `isCombatFeat: true`                                                 |
| `feats`    | Wizard bonus feats             | `isMetamagic: true OR isItemCreation: true OR name: 'Spell Mastery'` |
| `spells`   | Dweomerkeeper Mantle of Spells | castable by character + `levelFilterTable` per class level           |
| `deities`  | Sentinel deity pick            | deities with Sentinel boons                                          |

---

## Per-Class Choice Definitions

### Fighter

| Definition ID                      | Feature                  | Mode                                            | Source                   | Notes                                                                                 |
| ---------------------------------- | ------------------------ | ----------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------- |
| `fighter-bonus-feat`               | Bonus Combat Feat        | `at_class_levels` [1,2,4,6,8,10,12,14,16,18,20] | `feats`                  | filter: `isCombatFeat: true`                                                          |
| `fighter-weapon-training`          | Weapon Training          | `at_class_levels` [5,9,13,17]                   | inline                   | ~15 weapon groups; at level 9+, player may pick from `advancedweapontraining` instead |
| `fighter-advanced-weapon-training` | Advanced Weapon Training | `at_class_levels` [9,13,17]                     | `advancedweapontraining` | optional replacement for standard weapon training pick                                |
| `fighter-advanced-armor-training`  | Advanced Armor Training  | `at_class_levels` [7,11,15]                     | `advancedarmorrtraining` | optional replacement for standard armor training progression                          |

### Cleric

| Definition ID    | Feature      | Mode                          | Source    | Notes                                              |
| ---------------- | ------------ | ----------------------------- | --------- | -------------------------------------------------- |
| `cleric-domains` | Domain 1 & 2 | `multi_at_creation, count: 2` | `domains` | `collectionFilter: { deityIds: '{chosen_deity}' }` |

Deity must be selected in Identity section first. Filter resolves at runtime from character's `deity` field.
Channel Energy direction is determined by deity alignment — not a player choice.

### Druid

| Definition ID              | Feature            | Mode                 | Source    | Notes                                                                       |
| -------------------------- | ------------------ | -------------------- | --------- | --------------------------------------------------------------------------- |
| `druid-nature-bond`        | Nature Bond type   | `single_at_creation` | inline    | Options: `animal_companion`, `domain`, `druidic_herbalism`                  |
| `druid-nature-bond-domain` | Nature Bond domain | `single_at_creation` | `domains` | Conditional on above = `domain`. `collectionFilter: { druidAllowed: true }` |

**Animal Companion selection:** When `druid-nature-bond` = `animal_companion`, the UI launches the Animal Companion builder. The companion choice itself (`collectionName: 'animalcompanions'`) is a separate UI flow, not a `ClassChoiceDefinition` — see implementation plan Phase 3e.

Druidic Herbalism is an optional variant from _Pathfinder Unchained_. No sub-picks — just swaps the nature bond mechanic.

### Barbarian

| Definition ID          | Feature    | Mode                                      | Source       | Notes                                                 |
| ---------------------- | ---------- | ----------------------------------------- | ------------ | ----------------------------------------------------- |
| `barbarian-rage-power` | Rage Power | `every_n_class_levels, n:2, startLevel:2` | `ragepowers` | prereq rage powers use `prerequisites[]` on the entry |

### Ranger

| Definition ID            | Feature         | Mode                                                | Source | Notes                                                                        |
| ------------------------ | --------------- | --------------------------------------------------- | ------ | ---------------------------------------------------------------------------- |
| `ranger-favored-enemy`   | Favored Enemy   | `at_class_levels` [1,5,10,15,20], `canRepeat: true` | inline | Humanoid and Outsider entries carry `subtypePrompt`                          |
| `ranger-combat-style`    | Combat Style    | `single_at_creation`                                | inline | Archery, Crossbow, Mounted, Natural Weapon, Two-Handed, TWF, Weapon & Shield |
| `ranger-favored-terrain` | Favored Terrain | `at_class_levels` [3,8,13,18]                       | inline | ~12 terrain types                                                            |
| `ranger-hunters-bond`    | Hunter's Bond   | `single_at_creation`                                | inline | `animal_companion` or `bonds_with_companions`                                |

Animal Companion sub-flow applies here too if `ranger-hunters-bond` = `animal_companion`.

### Paladin

| Definition ID         | Feature          | Mode                               | Source | Notes                                                           |
| --------------------- | ---------------- | ---------------------------------- | ------ | --------------------------------------------------------------- |
| `paladin-mercy`       | Mercy            | `at_class_levels` [3,6,9,12,15,18] | inline | ~18 mercies (Dazed, Diseased, Fatigued, Shaken, Sickened, etc.) |
| `paladin-divine-bond` | Divine Bond type | `single_at_creation`               | inline | `mount` or `weapon`                                             |

Deity determines alignment requirement and is set in Identity section — same pattern as Cleric. Weapon enhancement choices on Divine Bond are per-use selections at the table, not permanent character data.

### Wizard

| Definition ID               | Feature            | Mode                           | Source  | Notes                                                                          |
| --------------------------- | ------------------ | ------------------------------ | ------- | ------------------------------------------------------------------------------ |
| `wizard-arcane-school`      | Arcane School      | `single_at_creation`           | inline  | Universalist + 8 schools                                                       |
| `wizard-opposition-schools` | Opposition Schools | `multi_at_creation, count: 2`  | inline  | Conditional on school ≠ Universalist; same 8 schools list                      |
| `wizard-arcane-bond`        | Arcane Bond        | `single_at_creation`           | inline  | `familiar` or `bonded_object`                                                  |
| `wizard-bonus-feat`         | Bonus Feat         | `at_class_levels` [5,10,15,20] | `feats` | filter: `isMetamagic: true OR isItemCreation: true OR name == 'Spell Mastery'` |

### Rogue

| Definition ID  | Feature      | Mode                                          | Source         | Notes                                                               |
| -------------- | ------------ | --------------------------------------------- | -------------- | ------------------------------------------------------------------- |
| `rogue-talent` | Rogue Talent | `at_class_levels` [2,4,6,8,10,12,14,16,18,20] | `roguetalents` | `talentTier: 'advanced'` entries only available at class level ≥ 10 |

Some talents (Minor Magic, Major Magic) have a sub-pick (a spell). Stored as `metadata` on the `ClassChoice` record — no second collection query needed.

### Hathran _(3.5e PrC — campaign content)_

**No ClassChoiceDefinitions needed.** Pure spellcasting advancement + fixed features at every level. The class document itself must be authored as custom campaign content (`source: '3.5e'`, `visibility: 'campaign'`).

Entry requirements: Rashemen regional feat, female, 3rd-level divine spellcasting, Wychlaran membership.

### Dweomerkeeper _(3.5e PrC — campaign content)_

| Definition ID                    | Feature          | Mode                          | Source   | Notes                                                                                                                              |
| -------------------------------- | ---------------- | ----------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `dweomerkeeper-mantle-of-spells` | Mantle of Spells | `at_class_levels` [1,3,5,7,9] | `spells` | Pick a spell to spontaneously convert prepared divine spells into. Max spell level scales per class level — see `levelFilterTable` |

```typescript
// levelFilterTable for dweomerkeeper-mantle-of-spells
levelFilterTable: {
  1: { maxSpellLevel: 3 },
  3: { maxSpellLevel: 5 },
  5: { maxSpellLevel: 7 },
  7: { maxSpellLevel: 8 },
  9: { maxSpellLevel: 9 },
}
```

Dweomerkeeper requires both arcane and divine spellcasting. The `spells` filter should allow any spell from lists the character can cast. Class document must be authored as campaign content.

### Radiant Servant of Pelor/Milani _(3.5e PrC — campaign content)_

| Definition ID                  | Feature      | Mode                  | Source    | Notes                                                                      |
| ------------------------------ | ------------ | --------------------- | --------- | -------------------------------------------------------------------------- |
| `radiant-servant-extra-domain` | Extra Domain | `at_class_levels` [4] | `domains` | `collectionFilter: { deityIds: '{chosen_deity}' }` — same filter as Cleric |

All other features are automatic. Class document must be authored as campaign content, modified from Pelor to Milani.

### Sentinel _(PF PrC — Inner Sea Gods)_

| Definition ID    | Feature | Mode                 | Source    | Notes                                                                  |
| ---------------- | ------- | -------------------- | --------- | ---------------------------------------------------------------------- |
| `sentinel-deity` | Deity   | `single_at_creation` | `deities` | Filter: deities that have Sentinel boons (most major Golarion deities) |

**Divine Boons are automatic** — at levels 3, 6, 9 the boons from the chosen deity's `boons.sentinel[]` array are granted in tier order. No runtime choice. The Sentinel class document drives this via its feature list referencing `character.classChoices['sentinel-deity']`.

Entry requirements: Deific Obedience feat, Weapon Focus (deity's favored weapon), BAB +5, worship chosen deity. Source: _Inner Sea Gods_ (2014).

---

## New Plan Files Needed

These four plan files do not exist yet and must be written before their collection's
scraping agent runs can be launched.

### `plans/data-scraping/deities-database.md`

- **Source:** https://www.aonprd.com/DeitiesByGroup.aspx
- **Scope:** ~400 deities across ~15 groups
- **Per-deity data:** alignment, areas of concern, domains, subdomains, favored weapon, symbol, sacred animal/colors, obedience requirement, all 9 boons (Evangelist/Exalted/Sentinel × tiers 1–3), follower resources
- **Key fact:** boons are on the individual deity page — one scrape per deity gets everything
- **Collection:** `deities`, document ID = `deity.id` (kebab-case name)
- **Type:** `DeityEntry` (with new `boons` field)
- **Seed script:** `scripts/db/seedDeities.ts`
- **Static data:** `src/data/deities/` (Milani + Iomedae already authored)

### `plans/data-scraping/animal-companions-database.md`

- **Source:** https://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/
- **Scope:** ~200 entries, official Pathfinder only (3pp clearly separated — skip)
- **Per-entry data:** starting stats block (size, speed, natural armor, attacks, ability scores, special qualities) + progression tiers at 4th and/or 7th druid level
- **DM additions:** `visibility: 'campaign'` entries (e.g. Fleshraker from 3.5e) — same pattern as other homebrew content
- **Collection:** `animalcompanions`, document ID = `companion.id`
- **Type:** `AnimalCompanionEntry` (new file `src/types/animalCompanions.ts`)
- **Seed script:** `scripts/db/seedAnimalCompanions.ts`

### `plans/data-scraping/ragepowers-database.md`

- **Source:** https://www.d20pfsrd.com/classes/core-classes/barbarian/rage-powers/
- **Scope:** ~100+ rage powers across Core + APG + UM + UC
- **Type:** `RagePowerEntry` (= `ClassOptionBase` — no extra fields needed)
- **Collection:** `ragepowers`
- **Also used by:** Skald (same collection, shared pool)
- **Seed script:** `scripts/db/seedRagePowers.ts`

### `plans/data-scraping/roguetalents-database.md`

- **Source:** https://www.d20pfsrd.com/classes/core-classes/rogue/rogue-talents/
- **Scope:** ~100+ talents (standard + advanced tiers)
- **Type:** `RogueTalentEntry` — has `talentTier: 'standard' | 'advanced'`
- **Collection:** `roguetalents`
- **Also used by:** Ninja (same collection, shared pool)
- **Seed script:** `scripts/db/seedRogueTalents.ts`

---

## Animal Companion Builder — Implementation Note

When a Druid or Ranger selects `animal_companion` as their Nature Bond / Hunter's Bond,
the UI must launch a companion builder. This is a substantial feature:

- Companion has its own HD, BAB, saves, skills, feats, ability scores, tricks, HP
- Progression is tied to druid/ranger level (not character level)
- Companion stats update automatically as druid level increases
- Multiple companions possible (Leadership, secondary sources)

**Recommendation:** Add to `IMPLEMENTATION_PLAN.md` as **Phase 3e — Animal Companion Builder**.
Data scraping (`animalcompanions` collection) can run in the background during Phase 3b/3c UI work.
The builder UI is a separate deliverable, not a blocker for Rissi's entry (she has no animal companion).

---

## Seed Scripts Needed

| Script                                     | Collection               | Notes                                                 |
| ------------------------------------------ | ------------------------ | ----------------------------------------------------- |
| `scripts/db/seedClassChoiceDefinitions.ts` | `classChoiceDefinitions` | All inline + router definitions for priority classes  |
| `scripts/db/seedDomains.ts`                | `domains`                | Already designed in domains-database.md               |
| `scripts/db/seedDeities.ts`                | `deities`                | Milani + Iomedae already authored; full scrape needed |
| `scripts/db/seedAnimalCompanions.ts`       | `animalcompanions`       | After scraping                                        |
| `scripts/db/seedRagePowers.ts`             | `ragepowers`             | After scraping                                        |
| `scripts/db/seedRogueTalents.ts`           | `roguetalents`           | After scraping                                        |

All seed scripts follow the `seedSpells.ts` pattern: firebase-admin, batch writes, idempotent.

---

## Static Data Files Needed

```
src/data/
  classChoiceDefinitions/
    fighter.ts         — all 4 Fighter definitions
    cleric.ts          — cleric-domains
    druid.ts           — druid-nature-bond + druid-nature-bond-domain
    barbarian.ts       — barbarian-rage-power
    ranger.ts          — all 4 Ranger definitions (with inline favored enemy/terrain/style lists)
    paladin.ts         — paladin-mercy (with inline mercy list) + paladin-divine-bond
    wizard.ts          — all 4 Wizard definitions (with inline school list)
    rogue.ts           — rogue-talent
    prestige3_5e.ts    — dweomerkeeper-mantle-of-spells + radiant-servant-extra-domain
    sentinel.ts        — sentinel-deity
    index.ts           — barrel + ALL_CLASS_CHOICE_DEFINITIONS array

  domains/
    raw/               — agent output (plan: domains-database.md)
    index.ts           — after all batches complete

  deities/
    milani.ts          — DONE
    iomedae.ts         — DONE
    index.ts           — DONE (2 entries; expand after scraping)

  animalCompanions/
    raw/               — agent output (plan: animal-companions-database.md)
    index.ts           — after all batches complete
```

---

## Execution Checklist

### Phase A — Type changes (do first, unblocks everything) — COMPLETE `07072a4`

- [x] Rename all `*Document` → `*Entry` in `src/types/classOptions.ts`
- [x] Add `druidAllowed: boolean` to `DomainEntry`
- [x] Add `DeityBoonTier`, `DeityBoons` interfaces + `boons?` to `DeityEntry` in `src/types/deities.ts`
- [x] Add `subtypePrompt?` to `ClassChoiceOption` in `src/types/classChoices.ts`
- [x] Add `levelFilterTable?` to `ClassChoiceDefinition` in `src/types/classChoices.ts`
- [x] Create `src/types/animalCompanions.ts` with `AnimalCompanionEntry`
- [x] `npm run typecheck` — zero errors

### Phase B — Inline static data (can do immediately, no scraping needed)

- [ ] Write all `src/data/classChoiceDefinitions/*.ts` files
- [ ] Write `scripts/db/seedClassChoiceDefinitions.ts`
- [ ] `npm run typecheck` — zero errors

### Phase C — Write scraping plans (then run as background work)

- [ ] Write `plans/data-scraping/deities-database.md`
- [ ] Write `plans/data-scraping/animal-companions-database.md`
- [ ] Write `plans/data-scraping/ragepowers-database.md`
- [ ] Write `plans/data-scraping/roguetalents-database.md`

### Phase D — Scraping (background, parallel where possible)

- [ ] Run domains agents (plan ready)
- [ ] Run deities agents
- [ ] Run animal companions agents
- [ ] Run rage powers agents
- [ ] Run rogue talents agents

### Phase E — Seed scripts + seed to Firestore

- [ ] Write remaining seed scripts (domains, deities, animalcompanions, ragepowers, roguetalents)
- [ ] Seed all collections to staging
- [ ] Verify in Firestore console
- [ ] Seed to prod

### Phase F — Implementation plan update

- [ ] Add Phase 3e (Animal Companion Builder) to `IMPLEMENTATION_PLAN.md`
