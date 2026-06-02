# Resource Pool Computation Pipeline

## Problem Statement

A player opens their character sheet and taps "Play." The app seeds the combat tracker with their character's resource pools -- rage rounds, channel energy uses, ki points, bardic performance rounds, lay on hands uses. But the max values are wrong. Extra Channel isn't counted. The headband of charisma isn't counted. The Favored Class Bonus isn't counted. The player has to mentally correct the numbers at the table, which defeats the purpose of the app.

The root cause: `character.resources[].max` is computed outside the modifier pipeline, with no structured formulas, empty feat effect arrays, and no equipment bonus wiring. The formulas that should drive these values exist only as prose in class feature descriptions ("a cleric may channel energy a number of times per day equal to 3 + her Charisma modifier"). There is no systematic way to verify that every class, feat, and equipment interaction is correctly wired -- coverage is provable only by spot-checking individual characters.

Phase 4 (Play Session / Combat Wiring) depends entirely on `character.resources[].max` being correct before building resource tracking and rest recovery on top of it. This phase establishes that guarantee.

## Solution

Introduce a `ResourcePoolService` that computes `character.resources` systematically, running as the final step of `ModifierPipelineService.recalculate()`. The service reads structured `resourcePool` fields from class feature documents in Firestore, evaluates `maxFormula` and `restRecovery` expressions via `FormulaService`, applies feat and equipment effect bonuses, and writes a fully traced contributions breakdown into each `ResourcePool` -- the same traceability pattern as ability scores.

All formula data lives in Firestore alongside the class feature and feat documents that define it. No resource pool logic is hardcoded in the app. New classes and feats ship via DB update, not app release.

## User Stories

1. As a player, I want my channel energy uses to reflect my Charisma modifier, Extra Channel feat, and any equipment bonuses, so that I never have to mentally correct the number at the table.
2. As a player, I want my rage rounds to reflect my Constitution modifier and Barbarian level, so that the app shows the correct number as I level up.
3. As a player, I want my ki pool to reflect my Monk level and Wisdom modifier, so that I can trust the number without cross-checking the rulebook.
4. As a player, I want my arcane reservoir to partially recover on rest (not fully reset), so that the app models the Arcanist correctly.
5. As a player, I want to tap a resource pool max and see a breakdown of every source that contributed to it, so that I can verify the number and understand where it came from.
6. As a player, I want resource pools to update automatically when I change equipment, so that equipping or removing an item that affects a pool max is reflected immediately.
7. As a player, I want resource pools to update automatically when I level up, so that gaining a Barbarian level increases my rage rounds without any manual adjustment.
8. As a player with Extra Ki, Extra Rage, Extra Lay on Hands, Extra Grit, Extra Panache, or Extra Arcane Pool feats, I want those bonuses counted in my pool max, so that the feat does something in the app.
9. As a Favored Class Bonus user who chose a resource pool bonus, I want that bonus counted in my pool max, so that my FCB choices matter in play.
10. As a player with Path of War / Tomb of Battle enabled, I want per-encounter maneuver recovery to surface correctly, so that initiator classes work at the table.
11. As a player resting after an interrupted rest, I want only the correct partial recovery applied to each pool, so that the app enforces the actual rules rather than always resetting to max.
12. As a developer adding a new class to Firestore, I want to add the resource pool formula to the class feature document without shipping a new app build, so that new content ships via DB update.
13. As a developer, I want resource pool max computation to be provably complete -- every class, every relevant feat, every relevant equipment effect -- so that we never discover a gap by spot-checking a specific character.
14. As a DM running Rissi (a real level-24 multiclass character), I want every resource pool on her sheet to be exactly correct, so that I can trust the app during an actual session.

## Implementation Decisions

### ResourcePoolService

A new pure service, `ResourcePoolService`, with a single primary method: `computePools(character): ResourcePool[]`. Called as the final step of `ModifierPipelineService.recalculate(character)` -- the pipeline already returns a new Character; resource pools populate before that Character is returned. No changes to existing callsites required.

`ResourcePoolService` is pure (no Firebase dependency) and independently testable.

### FormulaService Extension

`FormulaService.buildContext(character)` extended to include dynamic per-class level variables. The method iterates `character.classes` and injects `{classId}Level` for each class present (e.g. `barbarianLevel: 4`, `clericLevel: 3`). This is dynamic -- no fixed list of class names in code. New classes added to Firestore automatically have their level variable available in formula context.

Existing context variables (`chaMod`, `conMod`, `wisMod`, `level`, etc.) remain unchanged.

### ResourcePool Type Extension

`ResourcePool` extended with a `contributions` array that mirrors the ability score breakdown pattern:

```typescript
interface ResourcePoolContribution {
  source: string; // e.g. "Cleric class feature", "Extra Channel", "Headband of Charisma +2"
  sourceType: 'class_feature' | 'feat' | 'equipment' | 'favored_class_bonus' | 'other';
  value: number;
  bonusType?: string; // present on feat/equipment contributions; used for typed stacking
}

interface ResourcePool {
  id: string;
  name: string;
  current: number;
  max: number;
  baseMax: number; // result of maxFormula before bonuses
  contributions: ResourcePoolContribution[];
  rechargeOn: 'rest' | 'per_encounter' | 'special';
  restRecoveryMode: 'full' | 'formula'; // full = set current to max; formula = evaluate restRecoveryFormula
  restRecoveryFormula?: string; // only present when restRecoveryMode is 'formula'
  specialRechargeNote?: string;
}
```

### Firestore Class Feature Schema Extension

Class feature documents that generate resource pools gain a `resourcePool` field:

```typescript
{
  resourcePool: {
    id: string;                // 'rage_rounds' | 'channel_energy_uses' | 'ki' | etc.
    name: string;
    rechargeOn: 'rest' | 'per_encounter' | 'special';
    maxFormula: string;        // FormulaService expression, e.g. "4 + (barbarianLevel * 2) + conMod"
    restRecoveryMode: 'full' | 'formula';
    restRecoveryFormula?: string; // only when restRecoveryMode is 'formula'
    specialRechargeNote?: string;
  }
}
```

This field lives on the class feature document in Firestore, not in app code. New classes ship via DB update.

### Feat Effects Population

Feats that modify resource pool maxes (Extra Channel, Extra Ki, Extra Rage, Extra Lay on Hands, Extra Grit, Extra Panache, Extra Arcane Pool, and others) currently have empty `effects` arrays in Firestore. A seed script populates these with structured effects using the existing `EffectTarget` compound path pattern (`resource.{poolId}`):

```typescript
effects: [{ target: 'resource.channel_energy_uses', operation: 'add', value: 2 }];
```

The existing `FeatEffect` type already supports this target pattern. No type changes required.

### Stacking Rules

Class feature and favored class bonus contributions always stack -- they are ability definitions, not bonuses, and are always additive.

Feat and equipment contributions follow PF1e typed bonus stacking rules: contributions sharing the same bonus type take only the highest value; untyped and dodge bonuses stack freely. `ResourcePoolService` aggregates feat/equipment contributions by bonus type before summing the final max. See `ResourcePoolService.ts` for the full aggregation logic.

### Per-Encounter Resources

`rechargeOn: 'per_encounter'` is a valid value in the type system but surfaces no "New Encounter" reset UI unless the character's ruleset has Path of War or Tomb of Battle enabled. This is enforced at the UI layer in Phase 4, not in `ResourcePoolService`.

### Rest Recovery

Rest recovery is not a simple `current = max` for all pools. `ResourcePoolService` exposes a `applyRest(pools, character): ResourcePool[]` method used by the Phase 4 rest action:

- `restRecoveryMode: 'full'` -- sets `current = max`
- `restRecoveryMode: 'formula'` -- evaluates `restRecoveryFormula` via `FormulaService` and adds the result to `current`, capped at `max`

### AI Agent Data Extraction Pass

An AI agent walks every class feature document in Firestore, identifies features that generate resource pools from their prose descriptions, and produces a structured seed file containing the `resourcePool` field for each -- including `maxFormula`, `restRecoveryMode`, and `restRecoveryFormula` where applicable. A human reviews the output before seeding. This pass covers all core classes and ACG hybrid classes.

### Seed Scripts

Two seed scripts:

1. **Class feature resource pool fields** -- applies the AI agent extraction output to Firestore class feature documents
2. **Feat resource effects** -- populates `effects` arrays on all resource-modifying feats

Both scripts are idempotent and target staging before production.

## Testing Decisions

A good test for `ResourcePoolService` tests the computed output against known correct values -- not the internal formula evaluation steps. Tests should not reach into `FormulaService` internals or assert on intermediate values.

**Modules to test:**

- `ResourcePoolService.computePools(character)` -- primary unit test target
  - Base formula evaluation per class (Barbarian rage rounds, Cleric channel energy, Monk ki, Arcanist arcane reservoir, etc.)
  - Feat bonus application (Extra Channel adds 2, Extra Ki adds 2, etc.)
  - Equipment bonus application
  - FCB bonus application
  - Contributions array correctness -- right sources, right values, right total
  - Multiclass characters -- only relevant class levels contribute to each pool
  - `rechargeOn` value matches the class feature definition

- `ResourcePoolService.applyRest(pools, character)` -- rest recovery unit tests
  - Full recovery pools reset to max
  - Partial recovery pools (Arcanist) recover correct formula amount
  - Recovery is capped at max
  - `special` pools are untouched

- `FormulaService.buildContext(character)` -- per-class level variable injection
  - Single class character has correct `{classId}Level`
  - Multiclass character has correct level for each class
  - Total `level` still correct

Prior art: existing `ModifierPipelineService` tests and `AbilityScoreService` tests demonstrate the pattern for testing derived stat computation with known character fixtures.

## Out of Scope

- Spell slot computation (covered in Phase 4c)
- Per-encounter resource reset UI (covered in Phase 4, Path of War ruleset gate)
- Resource pool tracking UI -- current value changes, tap-to-decrement (Phase 4d)
- Rest UI and Prepare Spells flow (Phase 4e)
- Animal companion resource pools
- Mythic pool tracking

## Further Notes

- Rissi (the real level-24 multiclass character used for end-to-end validation) should be used as the acceptance test character for this phase. Her channel energy, ki, and any other active pools must be exactly correct before Phase 3.75 is considered complete.
- The `rechargeOn: 'per_encounter'` value exists in the type system and may be populated by the AI agent pass for Path of War initiator classes. This is correct and intentional -- the UI gate in Phase 4 handles whether it surfaces to the player.
- Favored Class Bonus resource pool contributions (`FCBEffectResourcePool` type) are already typed and partially wired. The seed pass and `ResourcePoolService` should treat them as a first-class contribution source alongside feats and equipment.
