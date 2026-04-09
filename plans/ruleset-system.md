# Ruleset System — Design & Implementation Plan

## 2026-04-08

## Status: NOT STARTED

No code has been written for this system. This document captures all design decisions made in design discussion. It is a prerequisite for the Draft Validation System (`plans/draft-validation-system.md`).

---

## Problem

The draft validator needs to know what rules are in play before it can check prerequisites, sources, or optional mechanics. "Is this feat allowed?" depends on whether 3rd-party content is enabled. "Is this prestige class prereq met?" depends on whether Relaxed Entry is on. Without a Ruleset system, the validator has no context to operate.

---

## What a Ruleset Is

A `Ruleset` is a named, versioned document that answers the question: _what rules govern this character or campaign?_ It captures:

- Which **source collections** are allowed
- Which **optional rules** are active
- Which **specific items/feats/classes/spells** are explicitly banned or allowed
- What **campaign requirements** exist (alignment restrictions, etc.)
- **Validation settings**: how ability scores were generated, trait limits

Characters embed a snapshot of their ruleset. When a character is part of a campaign, the campaign's ruleset is the source of truth, and the embedded snapshot must stay in sync.

---

## Data Model

### `Ruleset`

```typescript
export type SourceCollection =
  | 'pf1e-official'
  | '3.5e'
  | 'dreamscarred'
  | 'pf1e-3rdparty'
  | 'campaign-homebrew'
  | 'system-homebrew';

export type EitrMode = 'off' | 'syrens_subset' | 'full';

export interface OptionalRules {
  heroPoints: boolean;
  gestalt: boolean;
  fractionalBABSaves: boolean;
  variantMulticlassing: boolean;
  eitrMode: EitrMode;
  relaxedEntry: boolean; // Removes HD + skill rank prereqs for prestige classes
  mythic: boolean;
  pathOfWarMechanics: boolean; // Activates PoW maneuver level validation
  tomeOfBattleMechanics: boolean; // Activates ToB maneuver level validation (3.5e)
  crTemplates: boolean;
  laTemplates: boolean;
  crRefunds: boolean;
  laBuyback: boolean;
  crLaAbilityScoreReductions: boolean;
}

export type OverrideKind = 'feat' | 'class' | 'spell' | 'item';

export interface ItemOverrideEntry {
  kind: OverrideKind;
  id: string;
  name: string; // Denormalized for display without lookup
  reason?: string;
  grantedAs?: 'campaign-reward'; // For allowed overrides only — DM-approved rewards
}

export interface ValidationSettings {
  abilityScoreMethod: 'point-buy' | 'standard-array' | 'dice' | 'freeform';
  pointBuyBudget?: number; // Only used when method === 'point-buy'
  maxTraits: number;
  minTraits: number;
}

export interface CampaignRequirements {
  allowedAlignments?: string[]; // If set, character alignment must be in this list
  requiredSources?: SourceCollection[]; // Sources the character MUST draw from
  // Future: level cap, starting wealth, etc.
}

export interface Ruleset {
  id: string;
  name: string;
  description?: string;
  visibility: 'private' | 'global'; // 'global' = system presets
  ownerId: string; // Firebase UID — rulesets are user-scoped

  allowedSources: SourceCollection[];

  optionalRules: OptionalRules;

  itemOverrides: {
    banned: ItemOverrideEntry[];
    allowed: ItemOverrideEntry[]; // Includes campaign-reward grants
  };

  campaignRequirements: CampaignRequirements;

  validationSettings: ValidationSettings;

  version: number; // Monotonically incremented on save
  createdAt: string; // ISO timestamp
  updatedAt: string;
}
```

### Character ↔ Campaign Link

A character always carries an embedded ruleset snapshot. When the character is linked to a campaign, it also carries a link record:

```typescript
export interface CampaignRulesetLink {
  campaignId: string;
  rulesetId: string;
  rulesetVersion: number; // Version at time of last sync
}

// On the Character type (additive — no existing fields change):
export interface Character {
  // ... existing fields ...
  ruleset: Ruleset; // Always present; embedded snapshot
  campaignRulesetLink?: CampaignRulesetLink; // Present when in a campaign
}
```

**Sync behavior:**

- When `campaignRulesetLink` is present and `character.ruleset.version !== campaignRulesetLink.rulesetVersion`, the character is flagged as **Ruleset out of date**.
- The player is shown a diff of what changed and must re-sync before the character can be validated in the context of that campaign.
- **While campaign-linked, the player cannot modify their own ruleset.** The DM controls the ruleset; the player can only accept/re-sync.
- A character leaving a campaign retains its last-synced ruleset snapshot as a free-standing personal ruleset.

---

## System Presets

Three global presets ship with the system (`visibility: 'global'`). These are read-only and serve as starting points.

### PF1e Standard

```typescript
{
  name: 'PF1e Standard',
  allowedSources: ['pf1e-official'],
  optionalRules: {
    heroPoints: false,
    gestalt: false,
    fractionalBABSaves: false,
    variantMulticlassing: false,
    eitrMode: 'off',
    relaxedEntry: false,
    mythic: false,
    pathOfWarMechanics: false,
    tomeOfBattleMechanics: false,
    crTemplates: true,
    laTemplates: true,
    crRefunds: false,
    laBuyback: false,
    crLaAbilityScoreReductions: true,
  },
  itemOverrides: { banned: [], allowed: [] },
  campaignRequirements: {},
  validationSettings: {
    abilityScoreMethod: 'point-buy',
    pointBuyBudget: 20,
    maxTraits: 2,
    minTraits: 0,
  },
}
```

### PF1e Society

```typescript
{
  name: 'PF1e Society',
  allowedSources: ['pf1e-official'],
  optionalRules: {
    // Same as Standard except:
    heroPoints: false,
    mythic: false,
    gestalt: false,
    // ... all off/false
  },
  itemOverrides: {
    banned: [], // TODO: populate from PF Society ban list (PAUSED — needs research)
    allowed: [],
  },
  campaignRequirements: {},
  validationSettings: {
    abilityScoreMethod: 'point-buy',
    pointBuyBudget: 20,
    maxTraits: 2,
    minTraits: 0,
  },
}
```

> **PAUSED:** The PF Society banned item list has not been researched yet. This preset ships incomplete until that work is done.

### Go Nuts

```typescript
{
  name: 'Go Nuts',
  allowedSources: ['pf1e-official', '3.5e', 'dreamscarred', 'pf1e-3rdparty', 'campaign-homebrew', 'system-homebrew'],
  optionalRules: {
    heroPoints: true,
    gestalt: true,
    fractionalBABSaves: true,
    variantMulticlassing: true,
    eitrMode: 'full',
    relaxedEntry: true,
    mythic: true,
    pathOfWarMechanics: true,
    tomeOfBattleMechanics: true,
    crTemplates: true,
    laTemplates: true,
    crRefunds: true,
    laBuyback: true,
    crLaAbilityScoreReductions: false,
  },
  itemOverrides: { banned: [], allowed: [] },
  campaignRequirements: {},
  validationSettings: {
    abilityScoreMethod: 'freeform',
    maxTraits: 99,
    minTraits: 0,
  },
}
```

---

## Storage

Rulesets live at `users/{uid}/rulesets/{rulesetId}` in Firestore. They are **user-scoped** — a ruleset can be applied to any of the user's own characters or campaigns, but is not shared across accounts.

System presets live at `rulesets/{id}` (top-level collection, `visibility: 'global'`). They are read-only.

When a DM creates a campaign, they select or create a ruleset from their personal library. That ruleset ID is stored on the campaign document. The campaign's current ruleset version drives player sync.

---

## Optional Rules — Detailed Behavior

### `eitrMode`

The Elephant in the Room (EitR) feat tax removal system by Mathew & Michael Iantorno (v2.2, 2021). Three modes:

- **`'off'`**: Standard PF1e feat system. Power Attack, Combat Expertise, Weapon Finesse, Deadly Aim, Mobility all function as normal feats with their normal prereqs.
- **`'full'`**: Full EitR ruleset applied:
  - Removed feats (now free combat options with BAB +1): Power Attack → Risky Strike option, Combat Expertise → Defensive Stance option, Weapon Finesse, Deadly Aim, Mobility
  - Merged feats (old feat names now map to EitR replacements):
    - Deft Maneuvers = Improved Disarm + Improved Trip + Improved Feint
    - Powerful Maneuvers = Improved Bull Rush + Improved Overrun + Improved Sunder
    - Unarmed Combatant = Improved Grapple + Improved Unarmed Strike
    - Greater Two-Weapon Fighting = Improved TWF + Greater TWF
    - Dodge = Dodge + Mobility
    - Catch Off-Guard = Catch Off-Guard + Throw Anything
  - New feats added: Deft Maneuvers, Powerful Maneuvers, Unarmed Combatant, Whirling Cleave, Savage Charge, Iron Guard, Powerful Stride, Weapon Proficiency, Scorpion Stance (revised)
  - Feat prereqs that required removed feats are rewritten (e.g., feats requiring Power Attack now require BAB +1)
  - Weapon Focus/Specialization apply to weapon groups, not individual weapons
  - Rogue finesse training updated, Druid/Monk/Ranger bonus feat lists updated, Sorcerer bloodline feat table replaced
  - Validator behavior: when `eitrMode === 'full'`, maintain a lookup table mapping standard PF1e feat prereqs to their EitR equivalents. Removed feats are never checked as prerequisites.
- **`'syrens_subset'`**: A subset of EitR used at Syren's table.

> **PAUSED:** The specific feats/rules in Syren's subset have not been defined yet. Mark needs to specify which parts of EitR his table uses. This mode cannot be validated until that definition is captured.

### `relaxedEntry`

When `true`, HD requirements and skill rank requirements for prestige class entry are ignored during validation. BAB, feat, alignment, and spellcasting prereqs still apply. This is the "Relaxed Entry" optional rule.

### `pathOfWarMechanics` / `tomeOfBattleMechanics`

These flags do two things:

1. Allow the corresponding source's content (maneuvers, disciplines, stances) to be used by characters
2. Tell the validator to enforce maneuver-level progression rules (a character must meet the initiator level requirement for each maneuver known)

`pathOfWarMechanics` → Dreamscarred Press Path of War (PF1e)
`tomeOfBattleMechanics` → Tome of Battle: The Book of Nine Swords (3.5e, requires `'3.5e'` in `allowedSources`)

These are separate from source flags because you might allow the books as reference material without activating the mechanics system.

### `crTemplates` / `laTemplates` / `crRefunds` / `laBuyback` / `crLaAbilityScoreReductions`

Control which template acquisition mechanics are permitted. `crRefunds` and `laBuyback` allow characters to buy down CR/LA costs. `crLaAbilityScoreReductions` applies the standard ability score penalties associated with template acquisition.

---

## Validation Settings (Campaign-Level)

`ValidationSettings` captures rules about character _creation_ that vary campaign to campaign. These are not part of the core Ruleset type structure that affects feat/class prereqs — they inform the validator's creation-method checks.

| Field                | Purpose                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------- |
| `abilityScoreMethod` | How ability scores were generated — `'point-buy'`, `'standard-array'`, `'dice'`, `'freeform'` |
| `pointBuyBudget`     | Point budget when method is `'point-buy'` (e.g., 15, 20, 25)                                  |
| `maxTraits`          | Maximum number of traits allowed (common: 2; some tables allow more)                          |
| `minTraits`          | Minimum number of traits required (usually 0)                                                 |

---

## Item Overrides

Overrides operate at the individual item/feat/class/spell level. Each entry carries a `kind` and an `id` matching the relevant collection's document ID.

**Banned entries** — the validator flags this item as disallowed even if its source collection is enabled.

**Allowed entries** — the validator permits this item even if its source collection is not in `allowedSources`. This is how DM-approved campaign rewards are handled:

```typescript
// Example: DM grants Vorpal Sword as campaign reward
{
  kind: 'item',
  id: 'vorpal-sword',
  name: 'Vorpal Sword',
  reason: 'Granted by DM at end of Chapter 3',
  grantedAs: 'campaign-reward',
}
```

`grantedAs: 'campaign-reward'` is the only current value — it signals that the entry was specifically approved by a DM, not derived from a source rulebook. This distinction matters for display and audit.

---

## Campaign Requirements

Requirements complement allowances. A campaign may mandate specific constraints that the character must satisfy:

```typescript
campaignRequirements: {
  allowedAlignments: ['LG', 'NG', 'CG', 'LN', 'N', 'CN'], // No evil
  requiredSources: ['pf1e-official'], // Must draw from core
}
```

The validator checks requirements as well as allowances. Failing a requirement produces a `section: 'identity'` warning.

---

## Validator Integration

The `DraftValidationService.validate` signature changes:

```typescript
// Before:
static validate(draft: CharacterDraft, campaignSettings?: { maxTraits: number }): EntryValidationWarning[]

// After:
static validate(draft: CharacterDraft, ruleset: Ruleset, campaignSettings?: ValidationSettings): EntryValidationWarning[]
```

The ruleset drives:

- Which sources are allowed (flag items from banned sources)
- Which optional rules are active (skip removed feats in EitR mode, skip HD/skill prereqs in Relaxed Entry)
- Which items are explicitly banned or allowed (override source-level decisions)
- Whether PoW/ToB maneuver levels are validated

`campaignSettings` (ValidationSettings) drives:

- Ability score method check
- Trait count check (min/max)

---

## EitR — Separate Data Plan

The validator's `eitrMode: 'full'` requires a structured lookup table:

1. Removed feats → mark as `removedByEitr: true` in `FeatDefinition`
2. Prereq rewrites → map old prereq IDs to EitR replacements
3. Merged feat definitions → new EitR-specific `FeatDefinition` entries
4. Weapon group definitions → new collection for EitR weapon groups

This data work is **a separate scraping/data plan** — not in scope for the Ruleset system MVP. The MVP ships with `eitrMode: 'off'` as the only functional mode; `'full'` and `'syrens_subset'` are stored but validation is skipped with a soft warning: "EitR validation not yet implemented."

---

## PF Society Preset — Separate Research Task

The Society preset needs its banned item list populated from PF Society organized play documentation. This is **a separate research task** (PAUSED). The preset ships without a ban list until that work is done.

---

## CRUD & Campaign Management

DMs need full CRUD for rulesets:

- **Create** — from a preset or from scratch
- **Read** — list personal rulesets; view current campaign ruleset
- **Update** — edit any field; increments `version`; triggers "Ruleset out of date" for all linked characters
- **Delete** — only if no active campaign is using the ruleset

The campaign ruleset management **UI** is out of scope for the current implementation phase. The data model and Firestore structure are in scope. The UI ships in a later phase alongside campaign management screens.

---

## Firestore Structure

```
users/{uid}/rulesets/{rulesetId}    ← User's personal ruleset library
rulesets/{id}                       ← System presets (visibility: 'global')
campaigns/{id}/ruleset              ← Embedded ruleset snapshot on campaign doc (OR reference to users/{uid}/rulesets/{id})
```

**Decision:** Store the ruleset ID on the campaign; embed a full snapshot in each character. When the DM updates the campaign ruleset, bump the version. Characters compare their snapshot version against the campaign's current version to detect drift.

---

## Implementation Steps

### Phase A — Type System

1. Branch: `MW/ruleset-types`
2. Create `src/types/ruleset.ts` with `Ruleset`, `OptionalRules`, `ValidationSettings`, `CampaignRequirements`, `ItemOverrideEntry`, `CampaignRulesetLink`, `SourceCollection`, `EitrMode`, `OverrideKind`
3. Add `ruleset: Ruleset` and `campaignRulesetLink?: CampaignRulesetLink` to `Character` type
4. Add `acquiredAtECL?: number` to `DraftTemplateEntry` in `src/types/characterDraft.ts`
5. Run `npm run typecheck` — zero errors

### Phase B — Presets & Firestore Seed

6. Create `src/data/rulesets/presets.ts` — three system presets (Standard, Society stub, Go Nuts)
7. Create `scripts/db/seedRulesets.ts` — seeds presets to `rulesets/` collection
8. Run seed against staging

### Phase C — RulesetService

9. Create `src/services/RulesetService.ts`:
   - `getUserRulesets(uid: string): Promise<Ruleset[]>`
   - `getGlobalPresets(): Promise<Ruleset[]>`
   - `createRuleset(uid: string, ruleset: Omit<Ruleset, 'id' | 'version' | 'createdAt' | 'updatedAt'>): Promise<Ruleset>`
   - `updateRuleset(uid: string, rulesetId: string, changes: Partial<Ruleset>): Promise<Ruleset>`
   - `deleteRuleset(uid: string, rulesetId: string): Promise<void>`
   - `syncCharacterRuleset(characterId: string, campaignRuleset: Ruleset): Promise<void>`

### Phase D — Redux Integration

10. Add `rulesetSlice` to Redux store:
    - `activeRuleset: Ruleset | null`
    - `setActiveRuleset(ruleset: Ruleset)`
    - `clearRuleset()`

### Phase E — Validator Integration

11. Update `DraftValidationService.validate` signature (see Validator Integration section above)
12. Wire ruleset into each validation check
13. Update tests

---

## Open Items

| Item                                                                | Status                           | Blocking                               |
| ------------------------------------------------------------------- | -------------------------------- | -------------------------------------- |
| Syren's subset definition — which EitR rules does Mark's table use? | PAUSED — needs Mark input        | `eitrMode: 'syrens_subset'` validation |
| PF Society banned item list                                         | PAUSED — needs research          | Society preset completeness            |
| EitR feat/prereq data (lookup table, removed feats, merged feats)   | Separate data plan — NOT STARTED | `eitrMode: 'full'` validation          |
| Campaign ruleset management UI                                      | Out of scope for current phase   | Campaign management screens (future)   |

---

## Files to Create / Modify

| File                                        | Change                                                                     |
| ------------------------------------------- | -------------------------------------------------------------------------- |
| `src/types/ruleset.ts`                      | New — all Ruleset types                                                    |
| `src/types/character.ts`                    | Add `ruleset: Ruleset`, `campaignRulesetLink?`                             |
| `src/types/characterDraft.ts`               | Add `acquiredAtECL?: number` to `DraftTemplateEntry`                       |
| `src/data/rulesets/presets.ts`              | New — system presets                                                       |
| `scripts/db/seedRulesets.ts`                | New — seed presets to Firestore                                            |
| `src/services/RulesetService.ts`            | New — Firestore CRUD                                                       |
| `src/store/slices/rulesetSlice.ts`          | New — Redux slice                                                          |
| `src/services/DraftValidationService.ts`    | Update validate() signature + ruleset-driven checks                        |
| `__tests__/services/RulesetService.test.ts` | New — service tests                                                        |
| `plans/draft-validation-system.md`          | Update validator signature, rename acquiredAtHD → acquiredAtECL            |
| `plans/implementation-plan.md`              | Add Ruleset system as prereq for validation; note campaign UI out of scope |
