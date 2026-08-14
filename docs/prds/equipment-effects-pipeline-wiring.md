# Equipment Effects Pipeline Wiring

## Problem Statement

When a player equips a magic item on their character, nothing happens to their stats. The item editor lets you author effects (AC bonuses, save bonuses, ability score enhancements, attack bonuses, etc.) and feat grants, but those values are stored and then ignored. A character wearing a Belt of Physical Might sees no change to their Strength or Dexterity. A character equipping a ring that grants Power Attack has no access to Power Attack. The equipment section looks functional but produces no mechanical output.

## Solution

Wire the equipment section into the existing Modifier Pipeline so that equipping a magic item causes its effects and feat grants to flow through to the character's computed stats. The pipeline already knows how to collect and stack effects from equipment — it just isn't being called when equipment changes in the direct entry editor. Closing that gap, along with cleaning up the `abilityScoreBonuses` shorthand that the pipeline partially duplicated, produces a single consistent path from item to stat.

## User Stories

1. As a player, I want to equip a Headband of Vast Intellect and immediately see my Intelligence score update, so that I can see my character's true stats.
2. As a player, I want to equip an Amulet of Natural Armor and see my AC increase, so that I don't have to track equipment bonuses manually.
3. As a player, I want to equip a Belt of Physical Might and see both my Strength and Dexterity update, so that all the item's effects take effect at once.
4. As a player, I want two enhancement bonuses to the same stat (from two equipped items) to show only the higher value, so that the game's bonus stacking rules are respected automatically.
5. As a player, I want an ioun stone I'm orbiting to apply its effects to my character, so that slotless worn items work the same as slotted ones.
6. As a player, I want to unequip an item and immediately see my stats revert, so that I can evaluate my character with and without a specific piece of gear.
7. As a player, I want a magic item that grants Power Attack to give me access to that feat while it's equipped, so that item-granted feats work like any other feat.
8. As a player, I want to be able to toggle Power Attack off even if it came from a magic item, so that I retain control over toggle feats I didn't choose.
9. As a player, I want equipping a Ring of Weapon Focus (Longsword) to apply the Weapon Focus bonus to my longsword attacks, so that choice-based item-granted feats respect the choice made at item add time.
10. As a player, I want to be prompted to choose a weapon type when I add a Ring of Weapon Focus, so that the choice is captured at the right moment.
11. As a player, I want removing an item that granted me Power Attack to also remove Power Attack, so that my feat list stays accurate.
12. As a player, I want to move an item to a container (unequipping it) and have its effects and feat grants immediately stop applying, so that the equipped/unequipped distinction is mechanically meaningful.
13. As a player, I want an item's stat bonuses and its feat grants to update in the same action, so that I never see a half-applied state.
14. As a player, I want to see item-granted feats listed with the item name as their source, so that I know where each feat came from when reading my stats.
15. As a player, I want the equipment effects I manually authored in the item editor to flow through exactly the same pipeline as effects from the item database, so that custom items work the same way as official ones.

## Implementation Decisions

### Replace `syncEnhancementBonuses` with inline `recalculate()`

Every equipment reducer (`addEquipment`, `removeEquipment`, `updateEquipment`, `assignEquipmentSlot`, `unassignEquipmentSlot`, `reequipFromContainer`) currently calls `syncEnhancementBonuses()` — an inline function that reads `abilityScoreBonuses` from equipped items and writes enhancement values directly to ability score bonus slots. Replace all six call sites with `ModifierPipelineService.recalculate(character)` and delete `syncEnhancementBonuses`. The pipeline is a pure function with no async dependencies, safe to call inline in a reducer.

This is the only trigger change needed. No second dispatch, no listener middleware, no separate thunk.

### Equipped means `slot` assigned OR `isOrbiting: true`

The pipeline already gates on `!item.slot && !item.isOrbiting` to exclude unslotted inventory items. The old `syncEnhancementBonuses` only gated on `item.slot`, silently dropping ioun stone bonuses. The recalculate call fixes this as a side effect.

### Remove `abilityScoreBonuses` from `EditorEquipmentItem`

`MagicItemDefinition` uses `effects: Effect[]` for all item modifiers including ability score enhancements. The `abilityScoreBonuses` field on `EditorEquipmentItem` was a shorthand introduced before the pipeline handled equipment effects. Remove it from the type and from `collectEquipmentEffects()`. No seeding data migration is needed — definitions never used this field. Existing character documents in Firestore with stale `abilityScoreBonuses` values will have an inert field the pipeline no longer reads; the same bonuses are already present in `effects[]`.

### Add `GrantedFeat` type; replace `grantedFeatIds: string[]` on `EditorEquipmentItem`

Replace `grantedFeatIds?: string[]` on `EditorEquipmentItem` with `grantedFeats?: GrantedFeat[]`, where:

```typescript
interface GrantedFeat {
  featId: string;
  choices?: Record<string, string>; // same shape as CharacterFeat.choices
  active?: boolean;                 // toggle state; ignored for passive feats
}
```

`CharacterFeat` was considered as a reuse target but carries fields that don't apply to equipment grants (`grantedAtLevel`, `source`, `babWhenTaken`, `classLevelsWhenTaken`, `prereqOverride`). A lean dedicated type avoids dummy values and type confusion. See ADR-0003.

Existing character documents with `grantedFeatIds` set will have an inert field; since `grantedFeatIds` was never wired to produce any mechanical output, no behavior is lost.

### `collectEquipmentEffects()` gains a `grantedFeats` collection step

For each equipped item with `grantedFeats`, look up the feat definition via `FeatRegistryService.getFeat(featId)`. If the feat is a toggle and `active` is false on the grant, skip it. Otherwise, collect all effects from the feat definition, substituting choice placeholders from `grant.choices`, and push them with `source` set to `item.name`. This mirrors step 3 of `collectAllEffects()` for regular feats, but always-active for passive feats and respecting the grant's `active` field for toggle feats.

### `EquipmentPickerSheet` converts `MagicItemDefinition.grantedFeats: string[]` at pick time

When adding an item from the database, the picker converts `definition.grantedFeats` (feat IDs) into `GrantedFeat[]` on the resulting `EditorEquipmentItem`. For each feat ID:
- Look up the feat definition.
- If the feat has choice placeholders, open the existing choice prompt before confirming the add.
- Set `active` based on `featDef.activationMode`: toggle feats default to `false`, passive feats default to `true` (or omit `active` entirely for passive).

### `ItemEffectEditorSheet` gains `GrantedFeat[]` editing

Replace `workingFeatIds: string[]` with `workingFeats: GrantedFeat[]`. For manually added feat grants, detect choice placeholders and open the choice prompt before adding. Display a toggle chip for toggle feats so the user can set initial active state. The save path writes `grantedFeats` to the item.

### No seeding data changes; no staging reseed required

`MagicItemDefinition` already uses `effects: Effect[]`. No items in `src/data/magicItems/` use `abilityScoreBonuses`. Module 7 (seeding migration) is not needed for this feature.

## Testing Decisions

A good test verifies external behavior — what the character's computed stats look like after an action — not which internal functions were called or how many times.

### Modules to test

**`ModifierPipelineService`** — test the full `recalculate()` path with equipment:
- Equipped magic item with `effects[]` produces correct stat changes.
- Two enhancement bonuses to the same stat: only the higher applies.
- Ioun stone (`isOrbiting: true`, no slot) applies its effects.
- Item in a container (no slot, not orbiting) contributes nothing.
- Equipped item with `grantedFeats`: the feat's effects appear in computed stats.
- Toggle feat grant with `active: false`: feat effects do not appear.
- Choice-based feat grant: placeholder is substituted from `grant.choices`.

**`characterEntrySlice` equipment reducers** — test via Redux store:
- After `addEquipment`, character stats reflect the item's effects.
- After `removeEquipment`, stats revert.
- After `unassignEquipmentSlot`, stats revert.
- After `assignEquipmentSlot`, stats apply.
- After `reequipFromContainer`, stats apply.

### Prior art

Existing `ModifierPipelineService` tests (if present) follow the pattern of constructing a minimal `Character` fixture, calling `recalculate()`, and asserting on specific computed fields. Use the same pattern. For the slice tests, use Redux Toolkit's `configureStore` with the character entry reducer in isolation.

## Out of Scope

- Migrating existing character documents in Firestore that have stale `abilityScoreBonuses` values. The pipeline stops reading the field; the stale data is inert.
- `conditionalEffects` on `MagicItemDefinition` (class/race/alignment-gated powers). These require condition evaluation that is a separate feature.
- `spellLikeAbilities` on equipped items.
- UI display of item-granted feats in the feat list tab (feat list remains character-chosen feats only per ADR-0003).
- Feat prerequisites validation for equipment-granted feats (DM override is not surfaced for item grants in this pass).

## Further Notes

The `grantedFeats` field on `MagicItemDefinition` remains `string[]` (feat IDs only). Choices are not meaningful at the definition level — a Ring of Weapon Focus doesn't know which weapon until a specific character adds it. The conversion to `GrantedFeat[]` with resolved choices happens at pick time in `EquipmentPickerSheet`.

The Modifier Pipeline is already called in the play tab flow via `applyComputedStats`. After this change, the direct entry flow calls `recalculate()` inline on every equipment mutation. These are the same pipeline, same logic, same results — no divergence between play tab stats and editor stats for equipment effects.
