# Animal Companion Builder — Design Spec

## 2026-04-23

## Status: IN PROGRESS

### Progress

- **Phase 1.1 — Types: COMPLETE.** New `src/types/companions.ts` with `CompanionInstance`, `CompanionGrant`, `CompanionFeat`, `CompanionEquipment`, `TrickName`. `BodyShape` added to `src/types/animalCompanions.ts` (extension to `AnimalCompanionEntry` deferred to 1.2). `Character.companions: CompanionInstance[]` wired into the master interface. `CharacterService.createDefaultCharacter` and the charactersSlice test fixture both updated to seed `companions: []`. Typecheck clean; 72/72 affected tests passing.

---

## Purpose

A separate builder UI for animal companions and special mounts, triggered by class choices and certain templates. Each companion has its own stats, gear, feats, tricks, and HP — just like a character — and levels automatically as its granting source advances.

This spec covers the **builder** (data entry + display). Auto-progression UI is out of scope for Phase 1; effective level is tracked as a single number that we will eventually compute from class/template state.

---

## Scope

### In scope (Phase 1)

- Builder screen for ACs and special mounts (separate route from character entry)
- Multi-companion support (Beastmaster archetype gets multiple)
- Magic item slot computation by body shape
- Templates applied to ACs (using existing `AppliedTemplate` model)
- Druid Simple template treated as a granting source
- All listed granting classes/archetypes/templates (see "Granting Sources" below)

### Out of scope (Phase 1)

- Leveling / advancement UI (effective level entered or auto-computed; no per-tier walkthrough)
- Familiars (similar pattern, different rules — separate plan later)
- Cohort-as-granting-source (data model leaves room; UI not built)
- Fleshraker and other 3.5e companion forms — tracked as a separate campaign content task

---

## Data Model Changes

### New: `CompanionInstance`

Lives at the character level. Snapshots the player's selections + overrides. Computed values (full stat block, slot list, attack lines) are derived at render time, not stored.

```typescript
// src/types/companions.ts (new)

export type CompanionGrant =
  | { type: 'class'; classEntryId: string; classChoiceId: string }
  | { type: 'template'; templateId: string }
  | { type: 'feat'; featId: string }
  // Reserved — implemented when cohorts ship
  | { type: 'cohort'; cohortId: string };

export interface CompanionInstance {
  instanceId: string;
  sourceEntryId: string; // 'wolf', 'leopard', 'fleshraker'
  name: string; // player-named
  grantedBy: CompanionGrant;
  effectiveProgressionLevel: number;

  // Player overrides on top of computed base
  abilityScoreOverrides: Partial<Record<'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA', number>>;
  hp: { max: number; current: number; temp: number; nonlethal: number };

  appliedTemplates: AppliedTemplate[];
  feats: CompanionFeat[];
  tricks: TrickName[];
  skillRanks: Record<string, number>;
  equipment: CompanionEquipment;

  notes: string;
}

export interface CompanionFeat {
  featId: string;
  hdWhenTaken: number; // analogue of classLevelsWhenTaken on PC feats
}

export type TrickName =
  | 'attack'
  | 'come'
  | 'defend'
  | 'down'
  | 'fetch'
  | 'guard'
  | 'heel'
  | 'perform'
  | 'seek'
  | 'stay'
  | 'track'
  | 'work'
  | 'assist'
  | 'distract'
  | 'flank'
  | 'getHelp'
  | 'maneuver'
  | 'sneak';
```

### Extension: `Character.companions`

```typescript
// src/types/index.ts
interface Character {
  // ... existing fields
  companions: CompanionInstance[];
}
```

### Extension: `AnimalCompanionEntry`

```typescript
// src/types/animalCompanions.ts

export type BodyShape =
  | 'biped' // gorilla, dire ape — humanoid item slots
  | 'quadruped' // wolf, big cat, bear, dog
  | 'serpentine' // snake, eel
  | 'avian' // roc, giant eagle, dire bat
  | 'aquatic' // shark, dolphin, octopus
  | 'multilegged' // giant spider, giant mantis, scorpion
  | 'amorphous'; // ooze (rare AC)

export interface AnimalCompanionEntry extends DataQualityFields {
  // ... existing fields

  bodyShape: BodyShape;
  slotOverrides?: {
    added?: SlotName[]; // gorilla quadruped + adds 'hands', 'arms'
    removed?: SlotName[]; // serpentine but somehow has none of the default
  };
}
```

### Body shape → slot map (static, in code)

```typescript
// src/data/companions/bodyShapeSlots.ts (new)

export const BODY_SHAPE_SLOTS: Record<BodyShape, SlotName[]> = {
  biped: [
    'armor',
    'belt',
    'body',
    'chest',
    'eyes',
    'feet',
    'hands',
    'head',
    'headband',
    'neck',
    'ring1',
    'ring2',
    'shoulders',
    'wrists',
  ],
  quadruped: ['armor', 'belt', 'chest', 'eyes', 'neck', 'ring1', 'ring2', 'shoulders'],
  serpentine: ['armor', 'belt', 'eyes', 'headband'],
  avian: ['armor', 'belt', 'chest', 'eyes', 'neck', 'ring1', 'ring2'],
  aquatic: ['armor', 'eyes', 'neck', 'ring1', 'ring2'],
  multilegged: ['armor', 'belt', 'eyes', 'neck'],
  amorphous: ['armor', 'eyes', 'neck'],
};
```

Source: PF1e community-standard "Magic Item Slots for Animals" tables (Paizo blog + d20pfsrd FAQ). One-shot data pass needed to assign `bodyShape` to all ~220 existing entries.

---

## Granting Sources

Table of which classes / templates / archetypes can grant a companion, the effective-level formula, and what gets shown in the picker.

| Source                                    | Trigger                                   | Effective Level              | Picker Filter |
| ----------------------------------------- | ----------------------------------------- | ---------------------------- | ------------- |
| Druid                                     | Nature Bond → `animal_companion` choice   | druid level                  | full AC list  |
| Ranger                                    | Hunter's Bond → `animal_companion` choice | max(1, ranger − 3)           | full AC list  |
| Hunter                                    | class feature (auto, no choice)           | hunter level                 | full AC list  |
| Cavalier                                  | Mount class feature (auto)                | cavalier level               | mounts only   |
| Paladin                                   | Divine Bond → mount option                | max(1, paladin − 4)          | mounts only   |
| Inquisitor (Sacred Huntsmaster archetype) | replaces Judgment                         | inquisitor level             | full AC list  |
| Barbarian (Mad Dog archetype)             | replaces Fast Movement                    | max(1, barbarian − 2)        | full AC list  |
| Ranger (Beastmaster archetype)            | replaces Combat Style                     | max(1, ranger − 3), multiple | full AC list  |
| Druid Simple template                     | template applied to character             | varies (DM call)             | full AC list  |

Effective-level computation lives in `CompanionService.computeEffectiveLevel(character, grant)`. The UI displays the result as read-only with an override option.

---

## Where the Companion Appears

### On the character — Classes & Templates tab

When a player picks `animal_companion` in a `ClassChoiceRow`, the existing `SearchPickerSheet` opens with `bodyShape`-aware filtering. On selection:

1. A new `CompanionInstance` is added to `Character.companions`
2. A **Companion card** appears below the class card that granted it
3. The card displays: name, source form, granted-by label, effective level
4. Tapping the card opens the AC builder screen

```
┌─ Druid  ──────────────── [PF1e] ──── ┐
│ Level [10]   Archetype: [none      ] │
│ ▾ Class Choices                      │
│   Nature Bond: [Animal Companion   ] │
└──────────────────────────────────────┘
  └─ Companion ───────────────────────┐
     │ 🐺 Shadow  (Wolf)              │
     │ from Druid · effective lvl 10  │
     │                       [Edit ›] │
     └────────────────────────────────┘

  [+ Add Companion]   ← only enabled for Beastmaster / multi-grant sources
```

### Multi-companion handling

`Character.companions` is a flat array. Beastmaster's `1 + INT mod` companions all live there. The **+ Add Companion** button on the granting class card is enabled only when the granting source allows multiple, and it reuses the same picker.

---

## AC Builder Screen

Route: `app/(tabs)/characters/[characterId]/companions/[instanceId].tsx`

Same general shape as the character entry screen, fewer tabs:

```
┌─────────────────────────────────────────────┐
│  HEADER (sticky)                            │
│  [Sprite]  Shadow                           │
│            Wolf · Medium · Effective Lvl 10 │
│            from Druid (Rissi)               │
│                                  [Save]     │
├─────────────────────────────────────────────┤
│  ORNATETAB (horizontal scroll)              │
│  Identity │ Abilities │ Combat │ Skills    │
│  Feats │ Tricks │ Equipment │ Templates    │
│  Notes                                      │
├─────────────────────────────────────────────┤
│                                             │
│  SECTION CONTENT                            │
│                                             │
└─────────────────────────────────────────────┘
```

### Tabs (per-tab specs)

#### 1. Identity

Name, source form (read-only chip with link to swap), size category (auto from form + tiers), special qualities (read-only list).

#### 2. Abilities

Six ability scores with breakdown panel. Source: base form stats + tier advancements + level-increment slots (every 4 HD) + override input. Same pattern as the character ability tab.

#### 3. Combat

HP (max/current/temp/nonlethal), AC breakdown (touch/FF), saves, BAB, attack lines (auto-built from form + size + STR/DEX), CMB/CMD, speeds.

#### 4. Skills

AC class skills are: Acrobatics, Climb, Fly, Perception, Stealth, Swim, Survival. Plus skills granted by form (e.g. swim speed → Swim). Skill ranks per HD calculated from INT.

#### 5. Feats

Feat slots derived from HD. Picker filtered to feats the AC qualifies for (no Two-Weapon Fighting on a snake).

#### 6. Tricks

Standard tricks list with checkboxes. Counter at top: `X of Y tricks known`. Y = HD modified by INT and bonus tricks. Read-only computation; player just picks which tricks fill the slots.

#### 7. Equipment

Filtered by `bodyShape`. Same `EquipmentSection` component as the character screen, reading from `BODY_SHAPE_SLOTS[entry.bodyShape] + entry.slotOverrides.added − entry.slotOverrides.removed`. Items requiring an unavailable slot are greyed out with a tooltip.

#### 8. Templates

Same `appliedTemplates` model as PCs. Add/remove templates via picker. Template effects auto-apply to the AC stat block.

#### 9. Notes

Freeform text.

---

## Templates That Grant ACs

The Druid Simple template, when applied to a character, grants an AC (the character functionally becomes a druid for AC purposes).

Implementation: when `DraftValidationService` walks templates, it checks each `AppliedTemplate` for a `grantsCompanion` flag on the template definition. If true, that template registers as a granting source for `Character.companions`, with `grantedBy: { type: 'template', templateId }`. The Classes & Templates tab renders an AC picker on that template's card just like a class choice.

This requires a small extension to `TemplateDefinition`:

```typescript
grantsCompanion?: {
  effectiveLevelFormula: 'characterLevel' | 'characterLevel-4' | { custom: string };
  pickerFilter: 'fullList' | 'mountsOnly';
};
```

---

## Component Inventory (new)

| Component                   | Purpose                                                                      |
| --------------------------- | ---------------------------------------------------------------------------- |
| `CompanionEntryScreen`      | Root screen for the AC builder                                               |
| `CompanionEntryHeader`      | Sticky header (sprite, name, granted-by, effective level)                    |
| `CompanionCard`             | Card shown on the character's Classes tab below granting source              |
| `CompanionPickerSheet`      | Bottom sheet for picking AC form (filtered by source + bodyShape)            |
| `CompanionAbilitySection`   | Per-tab — Abilities                                                          |
| `CompanionCombatSection`    | Per-tab — Combat                                                             |
| `CompanionSkillsSection`    | Per-tab — Skills                                                             |
| `CompanionFeatList`         | Per-tab — Feats (reuses `FeatPickerSheet` with companion-eligibility filter) |
| `TricksSection`             | Per-tab — Tricks (new control type)                                          |
| `CompanionEquipmentSection` | Per-tab — Equipment (wraps existing `EquipmentSection` with slot filter)     |
| `CompanionTemplatesSection` | Per-tab — Templates (reuses character template machinery)                    |
| `CompanionNotesSection`     | Per-tab — Notes                                                              |

Plus one new service:

| Service            | Purpose                                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| `CompanionService` | `computeEffectiveLevel`, `computeBaseStatBlock`, `computeAvailableSlots`, `computeTrickCount`, `computeFeatSlots` |

---

## Implementation Phases

| Phase | Work                                                                                                                    | Status      |
| ----- | ----------------------------------------------------------------------------------------------------------------------- | ----------- |
| 1.1   | Types: `CompanionInstance`, `CompanionGrant`, `BodyShape`, `Character.companions`                                       | COMPLETE    |
| 1.2   | `AnimalCompanionEntry` extension + `BODY_SHAPE_SLOTS` map + one-shot data pass to assign `bodyShape` to all 220 entries | NOT STARTED |
| 1.3   | `CompanionService` (effective level, base stats, slot computation) + tests                                              | NOT STARTED |
| 1.4   | Classes & Templates tab: companion card + picker integration when `animal_companion` choice selected                    | NOT STARTED |
| 1.5   | AC Builder screen — Identity / Abilities / Combat tabs                                                                  | NOT STARTED |
| 1.6   | AC Builder screen — Skills / Feats / Tricks tabs                                                                        | NOT STARTED |
| 1.7   | AC Builder screen — Equipment / Templates / Notes tabs                                                                  | NOT STARTED |
| 1.8   | `TemplateDefinition.grantsCompanion` + Druid Simple wiring                                                              | NOT STARTED |
| 1.9   | Tests: integration test covering druid + AC + template grant + multi-companion                                          | NOT STARTED |

---

## Open Items / Follow-ups

- **Fleshraker (3.5e):** Add as `visibility: 'campaign'` companion entry in a separate seed task. Not a blocker for this builder.
- **Body-shape data pass:** Assigning `bodyShape` to all 220 existing AC entries can be a scout + agent pass against AoN/d20pfsrd creature stat blocks.
- **Cohorts (Leadership feat):** Out of scope for this project but `CompanionGrant.type === 'cohort'` is reserved in the union so the data model accommodates them when cohort support ships.
- **Effective-level formulas:** Some sources have non-trivial formulas (Paladin Divine Bond's "for X minutes per day" semantics). For Phase 1, treat all granting sources as always-on; partial-availability mounts are a Phase 2 concern.
- **Item-by-item slot eligibility:** Beyond the slot map, some specific items have explicit "humanoid only" restrictions (e.g. cloaks of resistance work on quadrupeds, but specific named items may not). Add a per-item `creatureRestriction` flag later if it becomes a problem.
