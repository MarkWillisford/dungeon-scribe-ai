# Magic Items — Design & Scraping Plan

## 2026-03-25

## Status: NOT STARTED

No code has been written for this plan. Everything below is the design spec ready to implement.

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

**Resolution:** Replace `EquipmentSlot` with a new unified `ItemSlot` type defined in `magicItems.ts` and imported by `equipment.ts`. The two ring slots stay (since a character can wear two rings simultaneously), but PF1e body slots are added:

```
armor | belt | body | chest | eyes | feet | hands | head | headband
neck | ring_left | ring_right | shield | shoulders | wrists
main_hand | off_hand | none
```

`TWO_HANDED` is removed as a slot — wielding two-handed is a property of the weapon (`handedness: 'two-handed'`), not an equipment slot.

### 2. `MagicItem` interface (equipment.ts:229–256) — replaced

The existing stub `MagicItem extends BaseItem` is superseded by `MagicItemDefinition` + `CharacterMagicItem` in this plan. The stub should be deleted.

### 3. `enhancement` and `weaponAbilities`/`armorAbilities` on `Weapon`/`Armor` — removed

Per the data model decision: mundane weapons and armor do NOT have enhancement numbers. Magic weapons and armor live in a separate collection (`MagicWeaponDefinition`, `MagicArmorDefinition`) that reference the base item via `baseWeaponId`/`baseArmorId`. The `enhancement`, `weaponAbilities`, `armorAbilities`, `specialAbilities` fields on `Weapon` and `Armor` are removed in the same PR that introduces `magicItems.ts`.

---

## Item Categories

| Category       | Slot                        | Requires Free Hand | Charges      | Spell-based      |
| -------------- | --------------------------- | ------------------ | ------------ | ---------------- |
| `wondrous`     | varies                      | no                 | sometimes    | no               |
| `ring`         | ring_left / ring_right      | no                 | no           | no               |
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
  | 'ring_left'
  | 'ring_right'
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

export interface IounStoneDefinition extends MagicItemDefinition {
  category: 'ioun_stone';
  color: string; // "dusty rose prism"
  shape: string; // "prism", "rhomboid", "ellipsoid", etc.
  iounVariant?: 'standard' | 'cracked' | 'flawed';
  // Cracked/flawed variants are separate definition entries (different IDs, prices, effects)
  // slot is always 'none' — actual floating/embedded/wayfinder state lives on CharacterMagicItem
  //
  // NOTE: Wayfinder resonance powers — when a stone is slotted in a wayfinder, it may grant
  // an additional resonance power. This data is deferred (no resonance power field yet).
  // Track as a known gap when implementing IounStoneDefinition data.
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
    magicItems.ts              — all interfaces above
  data/
    magicItems/
      index.ts                 — re-exports all categories
      wondrousItems/
        core.ts                — CRB wondrous items
        apg.ts
        ultimateEquipment.ts
        ...
      rings/
        core.ts
        ...
      staves/
        core.ts
        ...
      rods/
        core.ts
        ...
      wands/                   — likely generated from spell list; defer
      potions/                 — likely generated from spell list; defer
      scrolls/                 — likely generated from spell list; defer
      magicWeapons/
        specificWeapons.ts     — named specific weapons (Frost Brand, Holy Avenger, etc.)
        weaponSpecialAbilities.ts  — the +1/+2/+3 ability definitions (Flaming, Bane, etc.)
        armorSpecialAbilities.ts
      magicArmor/
        specificArmor.ts       — named specific armors (Celestial Armor, etc.)
      iounStones/
        core.ts
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

## Scraping Priority

The static hand-authored data (non-wand/scroll/potion) comes primarily from:

- **Core Rulebook** — ~130 wondrous items, ~30 rings, ~30 staves, ~30 rods
- **Ultimate Equipment** — the comprehensive magic item reference (~400+ items)
- **Advanced Player's Guide** — ~50 additional items
- **Specific named weapons/armor** — Holy Avenger, Frost Brand, Celestial Armor, etc. (~100 items)
- **Ioun Stones** — ~50 stones (standard + cracked + flawed variants)

Estimated total hand-authored entries: **~750–900 items** across wondrous/rings/staves/rods/specific weapons/armor/ioun stones.

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

## Open Questions

- **Two ring slots:** The existing `EquipmentSlot` has `RING_LEFT` and `RING_RIGHT`. Keep both in `ItemSlot` to allow tracking which finger a ring is on, even though the mechanic is simply "max two rings worn."
- **Wayfinder resonance powers:** Known gap in `IounStoneDefinition`. No field defined yet — requires research into which stones have resonance powers and what they do.
- **Intelligent artifact weapons:** e.g., a sentient Holy Avenger that is also a major artifact. All three overlays (`intelligentItem`, `artifactProperties`, and the weapon's `conditionalEffects`) can coexist on a single `MagicWeaponDefinition` object — TypeScript structural typing allows this without any special syntax.
- **Antimagic field:** All `grantedFeats` from magic items are suppressed in antimagic fields. This is enforced at runtime in the modifier pipeline, not in the type definition.
