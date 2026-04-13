# Character System Redesign — Design Session 2026-03-10

## Goals

Primary: Get the playtest group's characters (level 21-23) into the system in a usable form, then allow them to level their own characters. "Usable at the table" means a player can look at their character and know what to roll in any given situation.

Secondary: The system must handle the full complexity of our table — 3.5e ports, custom classes, multiple templates, epic levels, custom content.

---

## Immediate Priority: Single-Player Mode

Before campaigns, social features, or advanced tooling — players need to run full CRUD on characters using Pathfinder character creation rules, and use those characters at the game table.

The playtest group is the first target. These are level 21-23 multiclass characters, the most complex case. If the data model handles them, it handles anything.

---

## Architecture Decisions

### Everything Goes to Firestore

Static TS data files become **seed scripts only**, not runtime data. All game reference data (spells, feats, classes, races, archetypes, equipment, traits) lives in Firestore.

**Reasons:**

- Bug fixes and errata can be pushed without an app store update
- DMs can add custom content (homebrew classes, races, feats, 3.5e ports)
- Players can add personal homebrew
- Content can be shared within a campaign

The bundle size argument for static data was tested against real numbers: the entire spell database (~1,200 spells) is approximately 1 MB of JSON. This is trivially small. Size is not the reason to use Firestore. **Updateability and custom content are.**

### Content Ownership Model

Three tiers of content, all the same data structure:

| Tier     | Examples                  | Owner       | Visible To       |
| -------- | ------------------------- | ----------- | ---------------- |
| Official | PF1e core, APG, UM        | Us (seeded) | Everyone         |
| Campaign | DM's homebrew, 3.5e ports | DM          | Campaign players |
| Personal | Player's private homebrew | User        | Just them        |

All game content documents carry:

```typescript
interface ContentMetadata {
  source: string; // 'pf1e-core' | 'pf1e-apg' | '3.5e' | 'homebrew' | etc.
  createdBy?: string; // userId, null for official
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  isOfficial: boolean;
  rev: number; // increments on errata/updates
}
```

### Snapshot Pattern for Character Data

When a player selects a feat, class feature, archetype, etc., the **full text and mechanical data is snapshotted onto the character** at the time of selection. The character also stores `sourceId` and `sourceRev`.

If source data is updated (errata), characters with outdated snapshots receive a notification: _"Some character data has updates available."_ Player chooses whether to pull the update.

This means characters are **self-contained** — they don't break if source data changes, and they can be used offline after first load.

**Exception:** Spells are not snapshotted per-character. Instead, the character stores spell IDs, and the full spell list for a character is pre-fetched and cached on session start. (A level 20 cleric spell list is ~450 KB — trivially small.)

---

## Three Use Modes

1. **In-Game Play** — combat tracker, spell lookup, HP/buff tracking, dice rolling. Latency-sensitive. Offline-capable after first load.
2. **Out-of-Game Character Work** — creation, leveling, feat/spell browsing, equipment. Relaxed, network round-trips fine.
3. **Campaign Meta** — notes, wiki, DM tools, real-time sync. Phase 3.

Internet access assumed for session play. Graceful degradation if offline (cached character data sufficient for play).

---

## The Character Builder — Design Principles

### Not a Linear Wizard (for experienced players)

The current 6-step wizard is appropriate for new players only. Experienced players build characters **concept-first**: "I want a trip build with feats X, Y, Z" or "I want a debuff cleric — what deities offer the Madness domain?"

The full builder is a **constraint-aware workspace**:

- Any field can be filled in any order
- Choices filter available options dynamically (pick domain → filters deities → filters alignment)
- Reverse lookups: "I want X — what gives me that?"
- Soft validation: warns about conflicts but doesn't block planning
- Supports any level, multiclassing, archetypes

Keep the wizard as a "Quick Build" option for new players. The workspace is the primary builder.

### Prerequisites Are Point-in-Time

Prerequisites are evaluated at the moment a choice is made, not against the character's final stats.

A Human Cleric 3 cannot take Power Attack as their level 1 racial bonus feat even though they qualify for it at level 3 — because the racial feat slot was filled at level 1, when their BAB was 0.

Same rule applies to:

- Feat slots (racial, level, class bonus)
- Prestige class entry requirements (must be met at the level you enter)
- Archetype selection (must be met at character creation)

`CharacterFeat` stores enough state to validate:

```typescript
interface CharacterFeat {
  featId: string;
  name: string;
  source: string;
  grantedAtLevel: number;
  babWhenTaken: number;
  classLevelsWhenTaken: Record<string, number>;
  choices: Record<string, string>;
  active: boolean;
}
```

### Two Validation Modes

- **Strict** — new characters built in-system from level 1. Full build history known. Hard enforcement.
- **Legacy Entry** — importing existing paper characters. Validate current-state only, flag anything that couldn't have been legal at any point. Trust the player on edge cases.

---

## Type System Changes Needed

### 1. Class Choices (CRITICAL — missing entirely)

Every class has level-by-level selections the current model has no way to store. Examples:

| Class               | Missing                            |
| ------------------- | ---------------------------------- |
| Cleric              | Domain 1, Domain 2                 |
| Rogue               | Talent selected at each even level |
| Ranger              | Favored enemies, favored terrains  |
| Wizard              | School, opposition schools         |
| Barbarian           | Rage powers                        |
| Oracle              | Mystery, revelations               |
| Sorcerer/Bloodrager | Bloodline                          |

Add to `ClassEntry`:

```typescript
classChoices: ClassChoice[]

interface ClassChoice {
  featureName: string          // 'Domain', 'Favored Enemy', 'Rogue Talent', etc.
  takenAtLevel: number         // character class level when choice was made
  selection: string | string[]
  metadata?: Record<string, unknown>
}
```

### 2. Spellcasting Advancement

Most prestige classes advance a _type_ of casting, not a specific class. Update `ClassEntry`:

```typescript
spellcastingAdvancement?: {
  type: 'divine' | 'arcane' | 'both' | 'highest' | 'chosen'
  chosenType?: 'divine' | 'arcane'  // if type === 'chosen'
}
```

When `spellcastingAdvancement` is set, the class does not grant its own spell slots — it adds its levels to the appropriate existing casting progression.

**Rissi example:** Cleric 5 + Hathran 5 (divine) + Dweomerkeeper 10 (divine) + Radiant Servant 2 (divine) = **CL 22 divine**, despite only 5 actual Cleric levels.

### 3. Ability Score Level Increases

Every 4 class HD (4, 8, 12, 16, 20, 24...), the character gains +1 to any ability score. Currently not tracked.

Add per ability score:

```typescript
interface AbilityScore {
  // existing fields...
  levelIncrements: number; // count of level-up +1 increases allocated here
}
```

### 4. Custom Class Support

Add to `ClassEntry`:

```typescript
sourceSystem: 'pf1e' | '3.5e' | 'homebrew' | 'campaign'
isCustom: boolean
sourceNotes?: string    // e.g. "Ported from Complete Divine p.52, modified for Milani"
```

### 5. Epic Progression — DESIGNED (2026-03-10)

"Epic" means ECL > 20. It is not a structural change — just a label and extended math.

**Rules:**

- No class can exceed 20 levels. Class cap of 20 enforced by validation, not by types.
- `isEpic` is a computed boolean: `ecl > 20`. No new type needed.
- Epic feats are regular feats with `{ type: 'level', minimum: 21+ }` prereq. Already supported by `FeatPrerequisite`.
- Spell slot tables in Firestore are extended for CL 21–30. Spell levels extend up to 15th.

**Campaign toggle** (in `CampaignSettings`):

```typescript
epicEnabled: boolean;
epicSpellProgression: 'new_levels' | 'extra_slots';
// 'new_levels' (default) — CL 19 unlocks 10th level spells, continuing through 15th
// 'extra_slots'          — tables extend but spell level cap stays at 9th
```

When `epicEnabled: false`, spell tables cap at CL 20 / 9th level spells. When enabled, progression modifier controls whether new spell levels unlock.

**No new types required for epic.** All existing structures handle it.

---

### 6. Mythic Progression — DESIGNED (2026-03-10)

Mythic is a **parallel progression** alongside regular levels, not an extension of class levels. Gaining a tier does not consume a level-up event. Triggered by narrative events (trial completion), not XP.

```typescript
interface MythicProgression {
  path: 'archmage' | 'champion' | 'guardian' | 'hierophant' | 'marshal' | 'trickster';
  tier: number; // 1–10
  pathAbilities: MythicAbilityEntry[];
  universalAbilities: MythicAbilityEntry[];
  tierHistory: MythicTierGrant[];
}

interface MythicAbilityEntry {
  abilityId: string;
  name: string;
  takenAtTier: number;
  sourceId: string;
  sourceRev: number; // snapshotted like feats
}

interface MythicTierGrant {
  tier: number;
  grantedAtECL: number;
  note?: string; // e.g. "Trial of the Verdant Tomb"
}
```

On `Character`:

```typescript
mythic?: MythicProgression              // absent if campaign doesn't use mythic
```

**Mythic feats:** tagged in the main `feats[]` with `isMythic?: boolean` on `CharacterFeat`. Not a separate list.

**Mythic prereqs:** add to `FeatPrerequisite`:

```typescript
| { type: 'mythic_tier'; minimum: number }
```

Wire `PrerequisiteService.checkSingle()` to read `character.mythic?.tier`.

**Mythic power** lives in `ResourcePool[]` alongside ki, arcane pool, etc. (see below).

---

### 7. Resource Pools — DESIGNED (2026-03-10)

General pattern for all per-day/per-encounter tracked resources:

```typescript
interface ResourcePool {
  id: string; // 'ki', 'arcane_pool', 'mythic_power', 'rage_rounds', etc.
  name: string;
  current: number;
  max: number; // stored; recomputed on level-up
  rechargeOn: 'rest' | 'per_encounter' | 'special';
  // 'rest'          — after 8-hour rest (ki, arcane pool, mythic power, spells, rage)
  // 'per_encounter' — resets after each encounter
  // 'special'       — condition-based (panache on killing blow, grit on confirming crit, etc.)
  specialRechargeNote?: string;
}
```

On `Character`:

```typescript
resources: ResourcePool[]
```

---

### 8. Campaign Settings — DESIGNED (2026-03-10)

```typescript
interface CampaignSettings {
  epicEnabled: boolean;
  epicSpellProgression: 'new_levels' | 'extra_slots'; // default: 'new_levels'
  mythicEnabled: boolean;
  laBuybackMode: 'standard' | 'accelerated';
  // 'standard'     — eligible when classLevels >= 3 × current LA
  // 'accelerated'  — eligible after every 3 class levels

  // Trait slots per character (default 2; DM can increase for the campaign)
  maxTraits: number;

  // Campaign-wide free grants applied to all characters in this campaign
  globalGrants?: GrantedBonus[];
}
```

**Traits:** Default 2 per character (PF1e rule). `maxTraits` can be increased by the DM in campaign settings. Trait selection follows the same choice pattern as feats — one trait per slot, from the traits collection. Stored in `character.traits[]` (existing field).

---

## Spellcasting Redesign — DESIGNED (2026-03-10)

The current `SpellcastingClass` collapses three distinct numbers into one `casterLevel` field. They must be tracked separately.

### Three Separate Concepts

| Concept                      | Used For                                        | Can Diverge?                |
| ---------------------------- | ----------------------------------------------- | --------------------------- |
| `effectiveSpellcastingLevel` | Spell slot table, max spell level access        | Yes — stored explicitly     |
| `baseCasterLevel`            | Effect duration, damage dice, SR checks, dispel | Yes — stored explicitly     |
| `clBonuses[]`                | Scoped CL modifiers from gear/feats/abilities   | Per school/descriptor/spell |

### Pool Identity

Different base classes create separate pools even if same casting type. A Cleric/Druid has **two** divine pools — they do not merge. The `baseClass` field is the identity key and maps directly to `classLevels.{baseClass}` on Spell documents in Firestore.

Prestige classes are **contributors** to an existing pool, not pool owners.

### Types

```typescript
interface SpellcastingPool {
  baseClass: string; // 'cleric' | 'druid' | 'wizard' — owns the spell list
  castingType: 'divine' | 'arcane' | 'psychic' | 'occult';
  spellAbility: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';

  contributors: SpellcastingContributor[];

  // Stored explicitly — both can diverge independently from contributor sum
  effectiveSpellcastingLevel: number; // governs slot table + max spell level access
  baseCasterLevel: number; // governs effect duration, damage, SR, dispel

  clBonuses: CLBonus[]; // gear/feat bonuses, optionally scoped

  spellsPerDay: {
    base: number[];
    bonus: number[];
    misc: number[];
    total: number[];
    used: number[];
  };
  spellDC: { base: number; miscBonus: number; byLevel: number[] };
  spellFailure: number;
  concentration: { abilityMod: number; casterLevel: number; misc: number; total: number };
}

interface SpellcastingContributor {
  className: string;
  classLevels: number;
  advancesSpellSlots: boolean; // false = grants CL only, no new slots
  advancesCasterLevel: boolean;
}

interface CLBonus {
  bonus: number;
  source: string; // 'Orange Ioun Stone', 'Spell Penetration', etc.
  scope?: {
    schools?: string[]; // e.g. ['necromancy']
    descriptors?: string[]; // e.g. ['fire', 'evil']
    spellIds?: string[];
  };
  // absent scope = applies to all spells in this pool
}
```

`Spellcasting` on `Character` becomes:

```typescript
interface Spellcasting {
  pools: SpellcastingPool[]; // replaces spellcastingClasses[]
  preparedSpells: PreparedSpell[];
  knownSpells: KnownSpell[];
  spellbooks: Spellbook[];
}
```

### Rissi Example

One pool: `baseClass: 'cleric'`, `castingType: 'divine'`, four contributors:

- Cleric 5, Hathran 5, Dweomerkeeper 10, Radiant Servant 2 → ESL 22, base CL 22
- Any ioun stones/domain abilities added as `clBonuses[]`

---

## Template System Design

### Two Categories of Templates

**Paid Templates** — carry ECL machinery (CR or LA cost, level-up gating, refund cycles):

```typescript
appliedTemplates: AppliedTemplate[]
```

**Free Campaign Grants** — pure feature bundle, zero level implications:

```typescript
grantedBonuses: GrantedBonus[]
```

Free grants contribute to character capabilities but are **invisible to all ECL math**. No level cost, no refund. Rissi's Simple Druid Template is a free grant. Kah-Mei's CR templates are paid.

### Template Acquisition Types

```typescript
acquisitionType: 'inherited' | 'acquired' | 'either'
// inherited = normally at birth (Half-Dragon, Aasimar, etc.)
// acquired  = normally during play (Vampire, Lich, Lycanthrope...)
// either    = circumstance-dependent
acquiredAtCharacterLevel?: number   // if added mid-campaign
```

Note: the distinction is classification only. Either type can be added at any point in the narrative. The DM manages when acquired templates are applied.

### CR vs. LA — Player Chooses

If a template has both CR and LA, the player selects which applies. Only one counts toward ECL.

```typescript
appliedAs: 'la' | 'cr';
```

### LA System

Uses 3.5e LA rules. LA counts toward ECL but grants no class features or HD.

**LA Buyback** — campaign-level DM toggle between two modes:

```typescript
laBuybackMode: 'standard' | 'accelerated';
// standard:     eligible when classLevels >= 3 × current LA
// accelerated:  eligible after every 3 class levels
```

Cost in both modes: **1 level** (not XP).

### CR System

Based on Pathfinder Monsters as PCs rules (Bestiary p.313).

CR counts as class levels for party/ECL comparison. CR bonus levels are granted as the character advances:

- For every 3 class levels gained since CR was applied, the character earns 1 bonus class level (awarded between the 2nd and 3rd of each cycle)
- Total bonus levels = `floor(totalCRApplied / 2)`
- In single-player mode: track character's own class levels instead of party level

**Aggregate calculation:** CR refunds are calculated on **total CR across all templates**, not per-template individually. Two CR +1 templates = total CR 2 = 1 bonus level.

```typescript
// Character-level aggregate (not per-template)
interface CharacterCRTracking {
  totalCRApplied: number;
  crBonusLevelsTotal: number; // floor(totalCRApplied / 2)
  crBonusLevelsGranted: number;
  crBonusLevelsPending: number; // computed
}
```

### HD-Tiered CR Templates

Some templates have CR that scales with total HD (e.g., Druid Creature: CR+1 at HD 1-6, CR+2 at HD 7-12, CR+3 at HD 13+).

These are modeled as **HD-tiered template definitions** in Firestore. Each tier is a discrete level-up choice (see Level-Up System below).

### HD-Scaling Features

Template features that scale with total HD use a typed feature model:

```typescript
type TemplateFeature =
  | FlatFeature // always active, fixed value
  | HDThresholdFeature // activates when totalHD >= minimumHD
  | HDFormulaFeature // value derived from HD (e.g. 'HD - 3' for Wild Shape level)
  | HDTableFeature; // value looked up from HD range table (spellcasting)

interface HDTableFeature {
  scalingType: 'hd_table';
  name: string;
  overflowMax?: number; // for the ‡ rule: max overflow slots per level
  tiers: Array<{
    minHD: number;
    maxHD?: number;
    spellsPerDay?: Array<number | 'overflow' | null>;
  }>;
}
```

Spellcasting scales finer than CR tiers (every 3 HD vs. the 7/13 HD tier thresholds). **CR tiers are manually-timed discrete events; HD-scaling features within a template are auto-computed from total HD at load time.** These are independent systems.

---

## Level-Up System Design

### Level-Up Is a Choice Pool

Every level-up presents a pool of options. The player spends one level on one choice:

```typescript
type LevelUpDecision =
  | { type: 'class'; className: string; classLevel: number }
  | { type: 'cr_tier'; templateId: string; tierIndex: number }
  | { type: 'la_payment'; templateId: string } // usually at creation
  | { type: 'la_buyback'; templateId: string };
```

### Canonical Character History

`levelHistory: LevelUpDecision[]` is the **source of truth** for the character. Everything else is derived from it:

- Class levels per class
- Total class HD
- Which CR tiers are paid
- ECL
- LA buyback history
- Feat slot availability (every odd total level)
- Ability score increase eligibility (every 4 class HD)
- Prerequisite validation snapshots

### Mandatory CR Tier Gate

If taking a class level would push total class HD to or past an unpaid CR tier's `minHD`, that tier is **mandatory**. Class level options are locked until it's paid.

```
Rule: if (classHD + 1) >= tier.minHD AND tier not yet paid → tier is mandatory
```

The player can also pay for a tier **early** (before it's mandatory) as an optional choice at any level-up.

**Example — Rissi at level 7:**

- Class HD = 6 (Cleric 5 + Radiant Servant 1)
- Druid Creature Tier 2 minHD = 7, unpaid
- Player earns XP for level 7
- App: "Taking a class level would push HD to 7. Druid Creature Tier 2 is mandatory."
- Level 7 = CR Tier 2 payment (no HD gained, ECL advances to 7)
- Level 8 = class choice available

### No Circular Dependency

CR tiers are never auto-applied. They are explicitly chosen from the level-up pool. The gate is enforced, not bypassed. Processing order for any level-up event:

1. Apply the chosen decision (class level OR CR tier OR LA payment OR buyback)
2. Recalculate total HD and ECL
3. Check HD tier thresholds — mark any newly mandatory tiers (READ ONLY)
4. Check CR bonus level triggers against new class level count
5. If bonus level available: surface notification, queue for next explicit choice
6. Stop. One decision per event.

---

## The Playtest Group

First target for character entry. Using these as the design validation — if the model handles them, it handles anything.

**Characters confirmed:**

### Rissi

- Cleric 5 (Milani, CG)
- Hathran 5 (3.5e port) — advances divine spellcasting
- Dweomerkeeper 10 (3.5e port) — advances divine spellcasting
- Radiant Servant of Milani 2 (3.5e port, modified from Pelor version)
- Prestige Paladin 2 (custom 3.5e port, balanced for campaign)
- Simple Druid Template (FREE campaign grant — not paid, no refund)
- **Total: Level 24**
- Race: Player believes Human. Actual race: unknown (unrevealed narrative element — not modeled in the app per user decision; DM tracks this at the table)
- Spellcasting: CL 22 divine (5 base + 5 Hathran + 10 Dweomerkeeper + 2 Radiant Servant)
- All CR/refunds already resolved at the table

### Kah-Mei

- Multiple templates including CR templates with CR refunds
- Uses CR templates alongside LA templates
- Level range: 21-23
- Full details: not yet captured — **needs a dedicated session**

---

## Direct Entry UI — DESIGNED (2026-03-11)

Full spec in `plans/direct-entry-ui-design.md`. Summary:

**10 tabs:** Identity, Abilities, Classes & Templates, Combat, Skills, Traits, Feats, Spells, Equipment, Notes.

**Key design decisions:**

- Visual language from Hero's Ledger: `OrnatePanel`, `OrnateTab`, Cinzel/LibreBaskerville fonts, fantasy-gold borders
- No "Simple mode" for ability scores — all layers entered separately (base, racial auto-applied from race, enhancement auto from gear, level increments tracked)
- Classes and Templates are merged in one tab (both spend ECL)
- SpellsPerDay table: Base + Bonus(ability mod) + Domain/School + Total columns; domain/school slots auto-computed
- Feat slots: system generates full slot list from build history, player assigns feats; validated using class-order snapshots
- Trait slots: default 2, configurable in campaign settings
- Legacy Entry validation mode: current-state prereqs, best-case class ordering, offer reorder suggestions if needed
- CL Bonuses on spellcasting (gear/feats/class abilities) are all automatic — no manual entry in the spellcasting section
- 23 new components identified; see design doc for full inventory

**Critical data requirement:** Class choice definitions must be seeded in Firestore before the Classes & Templates tab can function. See Class Choices section below.

---

## Class Choices Data Design — IN DISCUSSION (2026-03-11)

### The Problem

Every class has structured selections the current `ClassChoice[]` on `ClassEntry` can store, but there's no definition of _what choices are available_ for each class feature. Before the UI can present options for "Cleric Domain" or "Rogue Talent", those option sets must exist in Firestore.

### Three-Layer Model

**Layer 1 — `ClassChoiceDefinition` (Firestore `classChoiceDefinitions/{id}`):**
A router only. Describes _when_ and _how many_ choices happen, and _which collection_ holds the options. Does NOT store the options themselves.

**Layer 2 — Option Collections (Firestore, one per major choice type):**
The actual selectable options — same structure as feats: name, description, prerequisites, ContentMetadata. Each major type gets its own searchable collection. Rogue talents are basically rogue-only feats and should be stored and queried like feats.

**Layer 3 — `ClassChoice` (on character, already typed):**
The player's specific selection: `{ featureName, takenAtLevel, selection, metadata? }`. `featureName` matches the definition; `selection` holds option id(s) from the collection.

### ClassChoiceDefinition — Router Only

```typescript
interface ClassChoiceDefinition {
  id: string; // e.g. 'cleric-domains', 'rogue-talent', 'sorcerer-bloodline'
  className: string;
  featureName: string; // matches ClassChoice.featureName on the character
  description: string;

  selectionMode: ClassChoiceSelectionMode;

  optionSource: 'inline' | 'collection';
  // inline — ONLY for 2–4 fixed options with no prereqs and no sub-structure
  optionGroups?: ClassChoiceOptionGroup[];
  // collection — points to a named Firestore collection of option documents
  collectionName?: string; // e.g. 'roguetalents', 'ragepowers', 'bloodlines', 'domains'
  collectionFilter?: Record<string, unknown>; // runtime substitution tokens resolved from character state

  // ContentMetadata
  source: string;
  isOfficial: boolean;
  createdBy?: string;
  visibility: 'global' | 'campaign' | 'private';
  campaignId?: string;
  rev: number;
}
```

`selectionMode` variants:

- `single_at_creation` — pick once (bloodline, mystery, patron, school)
- `multi_at_creation` — pick N at creation (cleric domains count:2, wizard opp. schools count:2)
- `at_class_levels` — pick at specific levels, with optional `canRepeat` (rogue talents, favored enemy)
- `every_n_class_levels` — pick every N levels from startLevel (rage powers n:2, startLevel:2)

**Inline reserved for:** 2–4 fixed options, no prerequisites, no sub-structure.
Examples: wizard arcane bond (`['familiar', 'bonded_object']`), ranger combat style label pick.

### Option Collections

Each major choice type gets its own Firestore collection, exactly like feats. Each document: name, description, prerequisites, ContentMetadata, plus collection-specific fields.

| Collection            | Used By                            | Key Fields                                      |
| --------------------- | ---------------------------------- | ----------------------------------------------- |
| `domains`             | Cleric, Inquisitor, Warpriest      | `spells[]` (1st–9th), `powers[]`, `deityIds[]`  |
| `bloodlines`          | Sorcerer, Bloodrager (shared pool) | `powers[]`, `spells[]`, `bonusFeats[]`          |
| `mysteries`           | Oracle                             | `spells[]`; revelations filtered by `mysteryId` |
| `roguetalents`        | Rogue, Ninja (shared pool)         | `talentTier: 'standard' \| 'advanced'`          |
| `ragepowers`          | Barbarian, Skald                   | standard prereq pattern                         |
| `hexes`               | Witch                              | `hexTier: 'standard' \| 'major' \| 'grand'`     |
| `arcanistexploits`    | Arcanist                           | `exploitTier: 'standard' \| 'greater'`          |
| `investigatortalents` | Investigator                       |                                                 |
| `shamanspirits`       | Shaman                             |                                                 |
| `wildtalents`         | Kineticist                         | complex — own design pass needed                |

Tier/level gating (e.g. `talentTier: 'advanced'` requires class level 10) is stored on the document. The UI filters by current class level before presenting options.

`collectionFilter` tokens like `'{chosen_mystery}'` are resolved at runtime from the character's existing `ClassChoice` records. Oracle revelations query `where('mysteryId', '==', resolvedMysteryId)`.

### ClassChoice on the Character (already implemented — no changes needed)

```typescript
interface ClassChoice {
  featureName: string; // matches ClassChoiceDefinition.featureName
  takenAtLevel: number;
  selection: string | string[]; // option id(s) from the collection
  metadata?: Record<string, unknown>;
  // e.g. favored enemy: { stackedBonus: 4 } when same enemy re-picked for +2 stack
  // e.g. wizard school: { oppositionSchools: ['necromancy', 'evocation'] }
}
```

### Pending Type Work (not yet implemented)

1. Update `src/types/classChoices.ts` — trim `ClassChoiceOption` to inline-only use; definition is router only
2. Create `src/types/classOptions.ts` — `ClassOptionDocument` base type + per-collection extension interfaces

### Seeding Priority

| Priority | Target                                                                                             | Reason                           |
| -------- | -------------------------------------------------------------------------------------------------- | -------------------------------- |
| 1        | Cleric definitions + `domains` collection                                                          | Rissi's character — needed first |
| 2        | Fighter, Rogue (`roguetalents`), Wizard, Sorcerer (`bloodlines`), Ranger, Barbarian (`ragepowers`) | Core classes                     |
| 3        | Oracle (`mysteries`), Witch (`hexes`), Druid, Bard, Monk                                           | APG classes                      |
| 4        | All remaining PF1e + hybrid classes                                                                | Full coverage                    |

**3.5e prestige classes** (Hathran, Dweomerkeeper, Radiant Servant, Prestige Paladin) have no class choices beyond spellcasting advancement. Entered as campaign content: `source: '3.5e'`, `visibility: 'campaign'`.

---

## Outstanding Questions

### High Priority (blockers for character entry)

1. ~~**Epic progression data model**~~ — **RESOLVED (2026-03-10).** ECL > 20 label only. No new types. See section 5.

2. ~~**Mythic Adventures data model**~~ — **RESOLVED (2026-03-10).** Parallel `MythicProgression` object. See section 6.

3. ~~**Character entry UI**~~ — **RESOLVED (2026-03-11).** Full direct-entry UI designed. See `plans/direct-entry-ui-design.md` for complete spec (10 tabs, 23 components, data requirements table).

4. **Kah-Mei's full character details** — Need a dedicated session to capture his classes, templates (with CR/LA values and refunds), and any other unique features.

5. **Rissi's actual race** — Unrevealed narratively. Decision: NOT modeled in the app. DM tracks at the table.

### Medium Priority (needed before leveling works)

6. **Prestige class entry requirements** — Same point-in-time validation problem as feats. How do we store and validate the entry requirements for 3.5e prestige classes (skill ranks, spell levels, BAB, etc.) that aren't in our system?

7. ~~**Spellcasting with multiple divine advancement chains**~~ — **RESOLVED (2026-03-10).** See Spellcasting Redesign section below.

8. **CR bonus level timing with class levels (single-player mode)** — Confirmed: use character's own class levels as the reference instead of party level. Does a bonus level gained count immediately toward triggering the next bonus level? Decision: bonus levels are queued (deferred), so no immediate cascade. Needs implementation validation.

9. **Ability score increase tracking** — At what point in the level-up flow do we present ability score increases? At every 4th class HD (not ECL). Needs to be wired into the level-up choice pool.

10. **Free campaign grants — campaign-wide vs. per-character** — Rissi and Kah-Mei both have free campaign grants. Is there a campaign document that lists "all players in this campaign receive X"? Or is it always stored per-character? If campaign-wide, how does the app apply it to new characters joining mid-campaign?

### Lower Priority (design debt)

11. **Content editor UI** — How does a DM enter a custom class (like the 3.5e ports)? Same data structure as official classes, just `isCustom: true`. The UI for this is Phase 3/4.

12. **Template definition library** — Where do we store the reusable template definitions (Half-Dragon, Druid Creature, etc.)? In Firestore as a shared collection? Should official 3.5e templates be seeded?

13. **Archetype feature replacement tracking** — `ClassEntry.archetype: string[]` currently just stores names. For validation and display purposes we need to know what class features were replaced. Low priority for initial character entry, higher priority for character validation.

14. **3.5e prestige class data** — Rissi has 4 prestige classes that need to be entered as custom content. Do we do this once as campaign-level content and reference them, or enter them inline on the character?

---

## Immediate Next Steps (Proposed)

### Completed (2026-03-11)

1. ~~Extend type system~~ — **DONE**
   - `ClassChoice[]` + `classChoices?` on `ClassEntry` ✓
   - `SpellcastingPool` replaces `SpellcastingClass`; `pools[]` on `Spellcasting` ✓
   - `levelIncrements` on `AbilityScore` ✓
   - `sourceSystem`, `isCustom`, `sourceNotes` on `ClassEntry` ✓
   - `appliedTemplates`, `grantedBonuses`, `levelHistory`, `mythic?`, `resources` on `Character` ✓
   - `src/types/templates.ts`, `src/types/mythic.ts`, `src/types/resources.ts` created ✓
2. ~~Update `CharacterFeat`: add `isMythic?`, `babWhenTaken`, `classLevelsWhenTaken`~~ — **DONE** ✓
3. ~~Update `FeatPrerequisite`: add `mythic_tier` variant; wire `PrerequisiteService`~~ — **DONE** ✓
4. ~~Direct-entry character sheet UI design~~ — **DONE** (see `plans/direct-entry-ui-design.md`) ✓
5. ~~Class choices data design~~ — **DONE** (see Class Choices section above) ✓

### Next: Implementation Queue

1. ~~**Seed `ClassChoiceDefinition` data**~~ — **DONE** — all major classes complete (PRs #37–#46 merged)
2. ~~**Seed `Domain` collection`**~~ — **DONE** — 181 domains seeded
3. ~~**Build direct-entry UI**~~ — **DONE** — 19 components built and wired (PRs #12, #50 merged)
4. **Seed all collections to Firestore** — scripts ready; not yet run against staging
5. **Seed 3.5e prestige classes** — Hathran, Dweomerkeeper, Radiant Servant, Prestige Paladin as campaign content — NOT STARTED
6. **Enter Rissi** — validate model end-to-end with a real character — NOT STARTED

### Parallel (not blockers)

- **Kah-Mei session** — capture full character details to stress-test the template model
- **Epic spell table data** — design the 10th–15th level spell slot tables for CL 21–30
