# Magic Items — Design & Scraping Plan

## 2026-03-25

## Status: PR 1 MERGED — PR A MERGED — PR 2 READY TO START

PR 1 (`MW/magic-items-types`, PR #23) merged. Type system complete.
PR A (`MW/effect-type-redesign`, PR #29) merged. EffectType/EffectTarget locked down.
Both engineers branch `DH/magic-items-data` and `MW/magic-items-data` off `main`.

---

## Implementation Phases

This plan is implemented in two separate PRs:

### PR 1 — Types + Cleanup + Seed Scaffold (`MW/magic-items-types`)

1. Type system (`src/types/magicItems.ts`)
2. Cleanup of existing stubs in `equipment.ts` (remove `MagicItem`, `EquipmentSlot` enum, dead enhancement fields)
3. Update `character.ts` (`magicItems: MagicItem[]` → `CharacterMagicItem[]`)
4. Seed script scaffold (`scripts/db/seedMagicItems.ts`) — structure only, no data yet

### PR 2 — Data Scraping (separate campaign, like feats/traits)

- Static data files (`src/data/magicItems/`) — **~3,508 entries** (scouted 2026-04-01)
- Wands/potions/scrolls generated from spell list at seed time (deferred — needs spell collection seeded first)
- Source: d20pfsrd.com primary (static HTML), AoN fallback for 404s
- Two engineers running parallel agents — see Scraping Strategy section below

---

## Overview

Pathfinder 1e has a rich magic item system spanning 11 item categories, each with distinct mechanics. This plan covers:

1. Type system (`src/types/magicItems.ts`)
2. Cleanup of existing stubs in `equipment.ts`
3. Static data files (`src/data/magicItems/`)
4. Seed script (`scripts/db/seedMagicItems.ts`)

---

## Pre-existing Code to Clean Up

Before writing new types, three things in `equipment.ts` need cleanup:

### 1. `EquipmentSlot` enum — replace with unified slot type

The existing enum is incomplete for magic items (missing `eyes`, `headband`, `shoulders`) and uses `RING_LEFT`/`RING_RIGHT` (two ring slots) while PF1e wondrous items only need one `ring` slot (rings are tracked as individual items, not by finger). The `TWO_HANDED` slot is a _grip mode_, not a worn slot.

**Resolution:** `ItemSlot` was added as a new unified type in `magicItems.ts`. `EquipmentSlot` was **preserved** (not removed) because existing tests depend on `EquipmentSlot.TWO_HANDED`. Ring items use a single `'ring'` slot on the item definition; left vs. right finger is tracked via `CharacterMagicItem.equippedSlot` using `EquipmentSlot.RING_LEFT`/`RING_RIGHT`:

```
armor | belt | body | chest | eyes | feet | hands | head | headband
neck | ring | shield | shoulders | wrists
main_hand | off_hand | none
```

`TWO_HANDED` remains in `EquipmentSlot` for backwards compatibility. Removal of `EquipmentSlot` in favour of `ItemSlot` is deferred to PR 2 once tests are updated.

### 2. `MagicItem` interface (equipment.ts:229–256) — replaced

The existing stub `MagicItem extends BaseItem` is superseded by `MagicItemDefinition` + `CharacterMagicItem` in this plan. The stub should be deleted.

### 3. `enhancement` and `weaponAbilities`/`armorAbilities` on `Weapon`/`Armor` — removed

Per the data model decision: mundane weapons and armor do NOT have enhancement numbers. Magic weapons and armor live in a separate collection (`MagicWeaponDefinition`, `MagicArmorDefinition`) that reference the base item via `baseWeaponId`/`baseArmorId`. The `enhancement`, `weaponAbilities`, `armorAbilities`, `specialAbilities` fields on `Weapon` and `Armor` are **deferred to PR 2** — they were retained in PR 1 to avoid breaking existing tests that set these fields directly.

---

## Item Categories

| Category       | Slot                        | Requires Free Hand | Charges      | Spell-based      |
| -------------- | --------------------------- | ------------------ | ------------ | ---------------- |
| `wondrous`     | varies                      | no                 | sometimes    | no               |
| `ring`         | ring                        | no                 | no           | no               |
| `staff`        | none                        | yes                | 10 max       | yes (list)       |
| `rod`          | none                        | yes                | varies       | sometimes        |
| `wand`         | none                        | yes                | 50 max       | yes (1 spell)    |
| `potion`       | none                        | no                 | 1 (consumed) | yes (1 spell)    |
| `scroll`       | none                        | no                 | 1 (consumed) | yes (1 spell)    |
| `magic_weapon` | main_hand / off_hand / none | —                  | no           | sometimes (SLAs) |
| `magic_armor`  | armor                       | —                  | no           | sometimes (SLAs) |
| `magic_shield` | off_hand                    | —                  | no           | sometimes (SLAs) |
| `ioun_stone`   | none                        | no                 | no           | no               |

**Note on bucklers:** Bucklers use `off_hand` slot but allow the hand to carry items (like gripping a two-handed weapon). Heavy and light shields use `off_hand` and block all hand use. This is a property of the shield item, not the slot.

**Artifacts** are not a category — they are any of the above with an `artifactProperties` overlay applied.

---

## Type System

### Slot type

```typescript
// Replaces EquipmentSlot enum in equipment.ts
export type ItemSlot =
  | 'armor'
  | 'belt'
  | 'body'
  | 'chest'
  | 'eyes'
  | 'feet'
  | 'hands'
  | 'head'
  | 'headband'
  | 'neck'
  | 'ring' // item definition slot — character equips to ring_left or ring_right (EquipmentSlot)
  | 'shield'
  | 'shoulders'
  | 'wrists'
  | 'main_hand'
  | 'off_hand'
  | 'none';
```

### Item physical stats

Every magic item has breakable physical statistics:

```typescript
export interface ItemPhysicalStats {
  hardness: number;
  hitPoints: number;
  breakDC: number;
  savingThrowBonus?: number; // e.g., wand: Fort +2 vs. fire damage
}
```

### Activation

Activation has two orthogonal dimensions — category (how it works) and action cost (how long it takes):

```typescript
export type ActivationCategory =
  | 'continuous' // always active when worn/held
  | 'command_word' // speak a word — costs an action
  | 'spell_trigger' // requires knowing the spell (wands, staves)
  | 'spell_completion' // read from the item (scrolls)
  | 'use_activated'; // works by using it — drink potion, open bag, etc.

export type ActivationAction = 'standard' | 'move' | 'swift' | 'free' | 'immediate';
// only relevant for command_word and similar — omit for continuous/use_activated
```

### Construction requirements

```typescript
export interface ConstructionRequirements {
  feats: string[]; // e.g. ['Craft Wondrous Item']
  spells: string[]; // spell IDs
  specialRequirements?: string[]; // free text for unusual prerequisites
  cost: number; // gp (typically price / 2)
}
```

### Spell-like abilities on items

Items like Holy Avenger and Celestial Armor have x/day spell-like abilities:

```typescript
export interface ItemSpellLikeAbility {
  spellId: string;
  spellName: string;
  casterLevel: number;
  usesPerDay: number; // 0 = at will
  saveDC?: number;
  activationAction: ActivationAction;
}
```

### Conditional effects

Used for class-gated or race-gated powers on specific items. Covers:

- **Holy Avenger**: +5 enhancement (vs +2) and SR aura only for paladins
- **Dwarven Thrower**: extra damage vs giants regardless of wielder race
- **Bane**: +2 enhancement and 2d6 vs designated creature type

```typescript
export interface ConditionalEffect {
  condition: 'wielder_class' | 'wielder_race' | 'wielder_alignment' | 'target_type';
  classId?: string;
  raceId?: string;
  alignment?: Alignment;
  creatureType?: string; // for Bane / Dwarven Thrower pattern
  enhancementBonus?: number; // replaces base enhancement when condition met
  effects?: Effect[];
  spellLikeAbilities?: ItemSpellLikeAbility[];
}
```

### Weapon and armor special abilities

`bonusEquivalent` is **optional** — some abilities (Holy Avenger aura, Shadow armor, Freedom movement) do not fit the +1/+2/+3 model:

```typescript
export interface ItemSpecialAbility {
  id: string;
  name: string;
  description: string;
  bonusEquivalent?: number; // omit for non-standard abilities
  casterLevel: number;
  effects: Effect[];
  spellLikeAbilities?: ItemSpellLikeAbility[];
  alignmentRequired?: Alignment[];
  conditionalEffects?: ConditionalEffect[];
}
```

### Scaling items (Pathfinder Unchained)

Items that gain new powers at character level thresholds. Each `ScalingTier` describes what unlocks. The effective caster level rule: `effectiveCL = max(item.casterLevel, characterLevel)`, capped at `maxEffectiveCL`.

The scaling trigger is always character level, class level, BAB, or caster level — NOT ability scores (Adaptive bow) or creature types (Bane). Those are runtime conditional effects, not scaling tiers.

```typescript
export interface ScalingTier {
  triggerType: 'character_level' | 'class_level' | 'bab' | 'caster_level';
  triggerClass?: string; // only for class_level
  threshold: number;

  // What changes at this tier — any combination
  enhancementBonus?: number;
  additionalEffects?: Effect[];
  additionalSpellLikeAbilities?: ItemSpellLikeAbility[];
  additionalGrantedFeats?: string[];
  notes?: string; // free text for complex unlocks
}

export interface LevelingScaling {
  scalingTiers: ScalingTier[];
  scalingItemTier?: 'bauble' | 'prize' | 'wonder';
  clScalesWithCharacterLevel?: boolean;
  maxEffectiveCL?: number;
}
```

### Overlays (optional on any item)

Any item can carry any combination of these:

```typescript
// Curse overlay
export interface ItemCurse {
  curseType:
    | 'delusion' // appears to work normally
    | 'opposite_effect' // does the reverse
    | 'intermittent' // works unreliably
    | 'requirement' // demands a condition
    | 'drawback' // automatic negative effect
    | 'different_effect'; // does something unrelated
  description: string;
  appearsAs: string; // "appears to be a +2 longsword"
  removalDC: number; // 10 + item CL for remove curse
}

// Intelligent item overlay
export interface IntelligentItemProperties {
  intelligence: number;
  wisdom: number;
  charisma: number;
  alignment: Alignment;
  ego: number;
  communication: ('empathy' | 'speech' | 'telepathy')[];
  languages: string[];
  senses: string[]; // "darkvision 60 ft.", "read magic", etc.
  powers: string[]; // free text — structure further if needed
  specialPurpose?: string;
  dedicatedPowers?: string[];
}

// Artifact overlay — applied to items of any category
export interface ArtifactProperties {
  tier: 'minor' | 'major';
  destruction?: string; // specific method to destroy it
}
```

---

## Base Definition Interface

Shared by all 11 categories. `MagicAura`, `AuraStrength`, and `MagicSchool` are already defined in `equipment.ts` and reused here.

```typescript
export type MagicItemCategory =
  | 'wondrous'
  | 'ring'
  | 'staff'
  | 'rod'
  | 'wand'
  | 'potion'
  | 'scroll'
  | 'magic_weapon'
  | 'magic_armor'
  | 'magic_shield'
  | 'ioun_stone';

export interface MagicItemDefinition {
  id: string;
  name: string;
  category: MagicItemCategory;
  source: string;
  isOfficial: boolean;

  aura: MagicAura; // reused from equipment.ts
  casterLevel: number;
  slot: ItemSlot;
  requiresFreeHand?: boolean;

  price: number | null; // null = priceless (artifacts)
  weight: number | null; // null = negligible

  description: string;
  construction: ConstructionRequirements;
  physicalStats: ItemPhysicalStats;

  activationCategory: ActivationCategory;
  activationAction?: ActivationAction;

  effects: Effect[];
  grantedFeats?: string[]; // feat IDs — always suppressed in antimagic field
  spellLikeAbilities?: ItemSpellLikeAbility[];
  useMagicDeviceDC?: number;

  // Overlays — any combination may be present simultaneously
  curse?: ItemCurse;
  intelligentItem?: IntelligentItemProperties;
  artifactProperties?: ArtifactProperties;
  levelingScaling?: LevelingScaling;
}
```

---

## Category-Specific Extensions

Each category extends `MagicItemDefinition` with additional required fields.

```typescript
export interface WondrousItemDefinition extends MagicItemDefinition {
  category: 'wondrous';
  charges?: { maximum: number; rechargeMethod?: string };
}

export interface RingDefinition extends MagicItemDefinition {
  category: 'ring';
  // slot must be ring_left or ring_right
}

export interface StaffDefinition extends MagicItemDefinition {
  category: 'staff';
  requiresFreeHand: true;
  spells: {
    spellId: string;
    spellName: string;
    spellLevel: number;
    casterLevel: number;
    chargesRequired: 1 | 2 | 3;
  }[];
  maximumCharges: 10;
}

export interface RodDefinition extends MagicItemDefinition {
  category: 'rod';
  requiresFreeHand: true;
  charges?: { maximum: number; rechargeMethod?: string };
  metamagicType?: string; // "Empower", "Maximize", etc.
  metamagicTier?: 'lesser' | 'normal' | 'greater'; // what max spell level it applies to
}

export interface WandDefinition extends MagicItemDefinition {
  category: 'wand';
  requiresFreeHand: true;
  spellId: string;
  spellName: string;
  spellLevel: number; // max 4 per rules; DM may override
  spellLevelDmOverride?: boolean; // flag when DM allowed above-limit spell level
  spellCasterClass: string;
  maximumCharges: 50;
  useMagicDeviceDC: number; // required — no omitting on wands
}

export interface PotionDefinition extends MagicItemDefinition {
  category: 'potion';
  spellId: string;
  spellName: string;
  spellLevel: number; // max 3 per rules; DM may override
  spellLevelDmOverride?: boolean;
  spellCasterClass: string;
}

export interface ScrollDefinition extends MagicItemDefinition {
  category: 'scroll';
  scrollType: 'arcane' | 'divine';
  spellId: string;
  spellName: string;
  spellLevel: number;
  spellCasterClass: string;
  useMagicDeviceDC: number; // required — no omitting on scrolls
}

export interface MagicWeaponDefinition extends MagicItemDefinition {
  category: 'magic_weapon';
  baseWeaponId: string; // → WeaponDefinition.id
  enhancementBonus: 1 | 2 | 3 | 4 | 5;
  weaponSpecialAbilities: ItemSpecialAbility[];
  // Rule: enhancementBonus + sum of bonusEquivalent values ≤ 10
}

export interface MagicArmorDefinition extends MagicItemDefinition {
  category: 'magic_armor';
  baseArmorId: string; // → ArmorDefinition.id
  enhancementBonus: 1 | 2 | 3 | 4 | 5;
  armorSpecialAbilities: ItemSpecialAbility[];
}

export interface MagicShieldDefinition extends MagicItemDefinition {
  category: 'magic_shield';
  baseShieldId: string; // → ShieldDefinition.id
  enhancementBonus: 1 | 2 | 3 | 4 | 5;
  shieldSpecialAbilities: ItemSpecialAbility[];
  allowsHandUse?: boolean; // true for bucklers
}

// Resonance power granted when an ioun stone is slotted in a wayfinder.
// Most powers are plain text; structured fields cover the common numeric bonus cases.
// All three grades (standard/cracked/flawed) of a stone share the same resonance power.
// Source: Seekers of Secrets (primary), PFS Field Guide, PFS Primer, Inner Sea Combat, others.
export interface IounStoneResonancePower {
  description: string; // always present — full rules text
  // Optional structured fields for simple bonus resonance powers:
  bonusType?: 'competence' | 'insight' | 'resistance' | 'sacred' | 'circumstance';
  bonusValue?: number;
  bonusTarget?: string; // e.g. 'fortitude_saves', 'combat_maneuver_checks'
  // Flags for special cases:
  requiresHoldingWayfinder?: boolean; // e.g. Pale Lavender / Lavender and Green Ellipsoid
  consumesStone?: boolean; // e.g. Clear Spindle — destroys on use
}

export interface IounStoneDefinition extends MagicItemDefinition {
  category: 'ioun_stone';
  color: string; // "dusty rose prism"
  shape: string; // "prism", "rhomboid", "ellipsoid", etc.
  iounVariant?: 'standard' | 'cracked' | 'flawed';
  // Cracked/flawed variants are separate definition entries (different IDs, prices, effects)
  // slot is always 'none' — actual floating/embedded/wayfinder state lives on CharacterMagicItem
  resonancePower?: IounStoneResonancePower; // undefined = no resonance (e.g. Dark Green Rhomboid)
  // NOTE: Wayfinder of Hidden Strength uses shape-based resonance that overrides the stone's
  // resonancePower for 24 hours. That is modeled on the WayfinderOfHiddenStrength wondrous item
  // entry, not on the stone. No additional field needed here.
}
```

---

## Character Instance

The runtime record on a character's sheet. One `CharacterMagicItem` per item owned.

```typescript
export type IounStoneState = 'floating' | 'embedded' | 'wayfinder';

export interface CharacterMagicItem {
  instanceId: string; // UUID, unique to this character's item
  definitionId: string; // → MagicItemDefinition.id
  name: string; // denormalized for display

  equipped: boolean;
  equippedSlot?: ItemSlot;
  charges?: number; // current charges remaining

  // Identification state — three independent fields, each answers a different question:
  identified: boolean; // has the item been identified at all?
  identifiedAs?: string; // what the player currently thinks it is
  //   (may be wrong for cursed items — e.g. "Sword +2")
  playerKnowsCurse?: boolean; // for cursed items: does the player know it's cursed?
  //   can be true even if item hasn't been fully identified

  // Ioun stone only
  iounState?: IounStoneState;

  notes?: string;
  dmOverrides?: Record<string, unknown>;
}
```

---

## File Layout

```
src/
  types/
    magicItems.ts              — all interfaces (complete, PR 1 merged)
  data/
    magicItems/
      index.ts                 — re-exports all categories
      wondrousItems/
        index.ts               — re-exports all batches
        aB-batch1.ts           — Abjurant Salt → Armbands of the Brawler (~25 items)
        aB-batch2.ts           — Armguards of Waning Hope → Azata's Whimsy (~25 items)
        aB-batch3.ts           — Badge of Last Resort → Bead of Force (~25 items)
        ...                    — continue through A-B (~21 batch files for A-B alone)
        cD-batch1.ts           — C-D range batches
        ...
        eG-batch1.ts           — E-G range batches
        ...
        hL-batch1.ts           — H-L range batches
        ...
        mP-batch1.ts           — M-P range batches (Doug)
        ...
        rZ-batch1.ts           — R-Z range batches (Doug)
        ...
      rings/
        index.ts
        rings-batch1.ts        — ~25 items
        rings-batch2.ts
        rings-batch3.ts
        rings-batch4.ts
      staves/
        index.ts
        staves-batch1.ts       — ~25 items each
        staves-batch2.ts
        staves-batch3.ts
        staves-batch4.ts
        staves-batch5.ts
      rods/
        index.ts
        rods-batch1.ts         — all 40 rods in 2 batch files
        rods-batch2.ts
      wands/                   — DEFERRED: generated from spell list at seed time
      potions/                 — DEFERRED: generated from spell list at seed time
      scrolls/                 — DEFERRED: generated from spell list at seed time
      magicWeapons/
        index.ts
        specificWeapons-batch1.ts  — ~25 named weapons each (~12 batch files)
        ...
        weaponAbilities-batch1.ts  — weapon special abilities (~9 batch files)
        ...
      magicArmor/
        index.ts
        specificArmor-batch1.ts    — ~25 named armors each (~8 batch files)
        ...
        specificShields-batch1.ts  — ~25 shields each (~2 batch files)
        ...
        armorAbilities-batch1.ts   — armor special abilities (~7 batch files)
        ...
      iounStones/
        index.ts
        iounStones-batch1.ts   — all 47 stones in 2 batch files
        iounStones-batch2.ts
scripts/
  db/
    seedMagicItems.ts          — upsert all magic item definitions to Firestore
```

---

## Wands, Potions, and Scrolls — Deferred

These three categories are algorithmically generated from the spell list:

- Every arcane/divine spell of the appropriate level can be a scroll
- Every spell ≤ level 3 with valid targets can be a potion
- Every spell ≤ level 4 can be a wand

Rather than hand-writing thousands of entries, `seedMagicItems.ts` will generate these
from the spell collection at seed time. The static data files for these categories
are not written by hand.

**Prerequisite:** Spell collection must be seeded to Firestore first.

---

## Scraping Strategy

### Real Scope (scouted 2026-04-01 from d20pfsrd.com)

| Category                       | Count      | Agents @ 25/batch |
| ------------------------------ | ---------- | ----------------- |
| Wondrous Items                 | 2,325      | 93                |
| Specific Weapons               | 477 (AoN)  | ~20               |
| Weapon Special Abilities       | 217        | 9                 |
| Specific Armor                 | 184        | 8                 |
| Armor/Shield Special Abilities | 158        | 7                 |
| Specific Shields               | 50         | 2                 |
| Staves                         | ~120       | 5                 |
| Rings                          | ~79        | 4                 |
| Ioun Stones                    | 47         | 2                 |
| Rods                           | 40         | 2                 |
| **Total**                      | **~3,508** | **~144**          |

### Engineer Assignment

| Engineer  | Branch                | Worktree path                            | Categories                                                |
| --------- | --------------------- | ---------------------------------------- | --------------------------------------------------------- |
| Mark (E1) | `MW/magic-items-data` | `/home/markw/worktrees/magic-items-mark` | Wondrous A–M, Ioun Stones                                 |
| Doug (E2) | `DH/magic-items-data` | `/home/markw/worktrees/magic-items-doug` | Wondrous N–Z, Rings, Staves, Rods, Weapons, Armor/Shields |

**Mark (~72 agents)**

- Wondrous Items A–B, C–D, E–G, H–L (~1,390 items, ~56 batches)
- Ioun Stones (47 items, 2 batches)

**Doug (~72 agents)**

- Wondrous Items M–P, R–Z (~935 items, ~38 batches)
- Rings (~79), Staves (~120), Rods (40) — 11 batches
- Specific Weapons (288) + Weapon Special Abilities (217) — 21 batches
- Specific Armor (184) + Specific Shields (50) + Armor/Shield Special Abilities (158) — 16 batches

Zero file conflicts — each category and letter range writes to its own directory and files.

### Worktree Setup (do this once before starting)

Each engineer creates their branch and worktree from WSL. Run from the project root.
**Both engineers branch off `main`** — PRs #23 and #29 are both merged.

**Mark:**

```bash
# From WSL, in project root
git checkout main && git pull
git checkout -b MW/magic-items-data
git push -u origin MW/magic-items-data
git checkout main  # leave main checked out in the primary working directory
git worktree add /home/markw/worktrees/magic-items-mark MW/magic-items-data
```

**Doug:**

```bash
git checkout main && git pull
git checkout -b DH/magic-items-data
git push -u origin DH/magic-items-data
git checkout main
git worktree add /home/markw/worktrees/magic-items-doug DH/magic-items-data
```

Agents write files directly into the worktree path. After each session, commit and push from the worktree:

```bash
cd /home/markw/worktrees/magic-items-mark
git add src/data/magicItems/
git commit -m "feat: wondrous items A-B batch 1-4"
git push
```

Tests in worktrees need reduced workers (symlinked node_modules):

```bash
NODE_OPTIONS="--max-old-space-size=4096" npx jest --maxWorkers=1
```

Typecheck via full path:

```bash
/home/markw/worktrees/magic-items-mark/node_modules/.bin/tsc --project /home/markw/worktrees/magic-items-mark/tsconfig.json --noEmit
```

### Pipeline

1. **No scout needed** — full item lists already enumerated (see counts above). Divide each letter range into batches of 25 and assign directly to scraper agents.
2. **Scraper agents** — each agent receives a list of 25 item names, fetches from d20pfsrd, writes one TypeScript batch file to the worktree.
3. **Source priority** — d20pfsrd primary (static HTML, reliable); AoN fallback when d20pfsrd 404s.
4. **Batch size** — 25 items per agent (go over only to complete variants of the last item).
5. **File naming** — `wondrousItems/aB-batch1.ts`, `aB-batch2.ts`, etc. Each batch ~25 entries.
6. **Agents do NOT modify index.ts** — index wiring happens after all batches for a range are complete.

### Agent Conventions (type fixes from 2026-04-02)

These corrections apply to all batch files:

**`MagicSchool.UNIVERSAL`** — now added to the `MagicSchool` enum. Use `MagicSchool.UNIVERSAL`
for items with a "universal" aura school (e.g. Admixture Vial, Arcane Battery). Do NOT
substitute `MagicSchool.TRANSMUTATION` with a comment.

**Ring slot** — All ring-slot items (rings, bands, wondrous items worn on a finger) use
`slot: 'ring'` in their item definition. Left vs. right is a character-sheet concern (tracked
via `CharacterMagicItem.equippedSlot` with `EquipmentSlot.RING_LEFT`/`RING_RIGHT`). The item
definition never specifies which finger — that's up to the player.

**Conditional bonuses** (`EffectCondition` on individual effects):
Use the `condition` field on an `Effect` for bonuses that only apply sometimes:

```typescript
{
  type: 'bonus',
  bonusType: 'luck',
  target: 'ac',
  value: 1,
  source: 'Item Name',
  condition: {
    type: 'weapon_type',           // or 'target_type', 'custom', 'range', etc.
    params: { weaponType: 'firearm' },
    description: 'against firearm attacks only',
  },
}
```

**Class/race/alignment-gated power blocks** (`conditionalEffects[]` on the item):
Use `conditionalEffects[]` when an entirely different set of effects or spell-like abilities
applies only when the wielder meets a condition (paladin, dwarf, lawful good, etc.):

```typescript
conditionalEffects: [
  {
    condition: 'wielder_class',
    classId: 'paladin',
    spellLikeAbilities: [...],
    effects: [...],
  },
],
```

See `_example.ts` Examples 4 and 5 for complete patterns.

### d20pfsrd URL Patterns

| Category         | URL Pattern                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| Wondrous (A-B)   | `https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/[item-slug]/`                               |
| Wondrous (C-D)   | `https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/c-d/[item-slug]/`                               |
| Wondrous (E-G)   | `https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/e-g/[item-slug]/`                               |
| Wondrous (H-L)   | `https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/h-l/[item-slug]/`                               |
| Wondrous (M-P)   | `https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/m-p/[item-slug]/`                               |
| Wondrous (R-Z)   | `https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/r-z/[item-slug]/`                               |
| Rings            | `https://www.d20pfsrd.com/magic-items/rings/[item-slug]/`                                                           |
| Staves           | `https://www.d20pfsrd.com/magic-items/staves/[item-slug]/`                                                          |
| Rods             | `https://www.d20pfsrd.com/magic-items/rods/[item-slug]/`                                                            |
| Specific Weapons | `https://www.d20pfsrd.com/magic-items/magic-weapons/specific-magic-weapons/[item-slug]/`                            |
| Weapon Abilities | `https://www.d20pfsrd.com/magic-items/magic-weapons/magic-weapon-special-ability-descriptions/[item-slug]/`         |
| Specific Armor   | `https://www.d20pfsrd.com/magic-items/magic-armor/specific-magic-armor-and-shields/[item-slug]/`                    |
| Armor Abilities  | `https://www.d20pfsrd.com/magic-items/magic-armor/magic-armor-and-shield-special-ability-descriptions/[item-slug]/` |

AoN fallback base URLs:

- Wondrous: `https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=[Item+Name]`
- Rings: `https://www.aonprd.com/MagicRingsDisplay.aspx?FinalName=[Item+Name]`
- Staves: `https://www.aonprd.com/MagicStavesDisplay.aspx?FinalName=[Item+Name]`
- Rods: `https://www.aonprd.com/MagicRodsDisplay.aspx?FinalName=[Item+Name]`
- Weapons: `https://www.aonprd.com/MagicWeaponsDisplay.aspx?ItemName=[Item+Name]`
- Armor: `https://www.aonprd.com/MagicArmorDisplay.aspx?ItemName=[Item+Name]`

---

## Post-Scraping Review (after all batches complete)

Before opening the PR, two cleanup passes are required:

### 1. `special.*` Key Audit

Run across all generated files to find every unique `special.*` key used:

```bash
grep -r "target: 'special\." src/data/magicItems/ | \
  grep -oP "special\.[a-z_]+" | sort | uniq
```

Review the list as a pair (both engineers together):

- **Consolidate duplicates** — if two agents used different keys for the same mechanic
  (e.g. `special.lay_on_hands_boost` and `special.lay_on_hands_level_boost`), pick one
  and do a find-replace across all files
- **Flag unclear keys** — anything that isn't self-explanatory gets a comment added
  above the effect explaining what the future service should do
- **Document the final key list** — add a section to this plan listing every approved
  `special.*` key and its intended behavior. This becomes the service backlog for
  the feature implementation phase.

### 2. File Consolidation

After the audit, combine the small batch files (~25 items each) into larger files per
letter range, matching the pattern used for feats (e.g. `core.ts`, `apg-extra.ts`):

```
wondrousItems/
  aB.ts          — all A-B items (~21 batch files consolidated into one)
  cD.ts          — all C-D items
  eG.ts
  hL.ts
  mP.ts          — Doug's
  rZ.ts          — Doug's
```

This keeps the directory manageable and matches project convention. Delete the
individual batch files after consolidating. Update `wondrousItems/index.ts` to
import from the consolidated files.

Do the same for other categories (rings, staves, etc. are small enough to stay
in a single file each, so no consolidation needed beyond what agents already wrote).

---

## Migration Notes

### Existing `Equipment` interface on Character

`Character.equipment.magicItems: MagicItem[]` currently uses the stub `MagicItem extends BaseItem`.
This array changes to `CharacterMagicItem[]` in the same PR that introduces `magicItems.ts`.

### No runtime magic item effects yet

The modifier pipeline (`ModifierPipelineService`) does not yet process magic item effects.
This plan does **not** wire magic items into the combat calculator — that is a separate phase.
This plan covers data model + static data + Firestore seeding only.

---

## TODOs / Deferred Work

- **Batch lists ready:** Full item lists are in `plans/magic-items-batches-mark.md` and
  `plans/magic-items-batches-doug.md`. Each file lists every item split into named batches
  of ~25 with the exact file name and export name for each batch. Scraper agents receive
  their batch list and write directly to the worktree.

- **Example batch file:** `src/data/magicItems/wondrousItems/_example.ts` shows the
  expected TypeScript format — imports, array structure, Effect usage, multi-school aura,
  spellLikeAbilities. Delete this file before opening the PR.

- **AoN vs d20pfsrd count discrepancy:** Original plan estimated 288 specific weapons.
  AoN returned 477. The AoN count is authoritative. Batch assignments in Doug's file
  reflect the full AoN list. Adjust expected batch file count accordingly (~20 batches
  for specific weapons instead of ~12).

- **Source as enum (PR 3):** `source: string` on `MagicItemDefinition` should become a typed enum (e.g. `ItemSource`) so DMs can toggle allowed source books per campaign. Every item carries its source book; the UI/service layer filters the collection to only show sources the DM has enabled. Requires: define `ItemSource` enum with every book, update all ~3,508 data entries, update `CharacterMagicItem` to store `enabledSources` on campaign settings. Deferred until all data files are written (changing the enum after the fact is a simple find-replace).

---

## Open Questions

All open questions resolved. Design is complete.

- **Two ring slots:** ✅ Resolved. Item definitions use a single `'ring'` slot in `ItemSlot`. Per-finger tracking (`ring_left`/`ring_right`) uses `EquipmentSlot` on `CharacterMagicItem.equippedSlot`.
- **Wayfinder resonance powers:** ✅ Resolved (2026-03-28). Resonance lives on `IounStoneDefinition.resonancePower?: IounStoneResonancePower`. ~50 stones have resonance; ~5 don't (undefined = no resonance). All three grades of a stone share the same resonance power. The Wayfinder of Hidden Strength uses shape-based resonance that overrides the stone's power for 24h — modeled on its own wondrous item entry, not on the stone. Sources: Seekers of Secrets (primary), PFS Field Guide, PFS Primer, Inner Sea Combat.
- **Intelligent artifact weapons:** All three overlays (`intelligentItem`, `artifactProperties`, `conditionalEffects`) can coexist on one object — TypeScript structural typing handles it.
- **Antimagic field:** `grantedFeats` suppression enforced at runtime in modifier pipeline, not in types.
