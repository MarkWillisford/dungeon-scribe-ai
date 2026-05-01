# Equipment Effects Pipeline & Direct-Entry Bug Fixes

## Branch: `MW/equipment-effects-pipeline`

This branch has two overlapping scopes: wiring magic item effects through the
`ModifierPipelineService` so all equipped gear updates stats correctly, and a batch of
direct-entry UI bugs discovered during the Rissi character entry session.

---

## Part 1 — Equipment Effects Pipeline

### Problem

Equipping a magic item (Headband of Vast Intellect, Ring of Protection, etc.) had no effect
on any stat. Root cause: `collectEquipmentEffects()` had a TODO comment where magic item
processing should go, and `EditorEquipmentItem` carried no `effects` field at all.

### What Shipped (all COMPLETE — merged in `17a9012`)

| File                                                             | Change                                                                              |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `src/types/character.ts`                                         | Added `effects?: Effect[]` to `EditorEquipmentItem`                                 |
| `src/components/character/direct-entry/EquipmentPickerSheet.tsx` | Added `effects` to `EquipmentPickerResult`; `mapMagicItem()` now copies `m.effects` |
| `src/components/character/direct-entry/EquipmentSection.tsx`     | `handlePickerSelect` copies effects onto new `EditorEquipmentItem`                  |
| `src/services/ModifierPipelineService.ts`                        | Replaced TODO block with real loop over `editorEquipment[].effects` (step 4b)       |

**Effect:** Any `Effect[]` on a magic item — ability score enhancements, AC deflection, save
resistance, skill bonuses — flows through the stacking pipeline the moment it's equipped.

---

## Part 2 — Ability Score "Other" Typed Bonuses

### Problem

The "Other" row in the ability score breakdown was a single untyped number. PR #98 added a
typed bonus UI (type picker, value, source label, remove button) but the eliminate-character-draft
refactor (PR #109) removed it. The replacement wrote directly into `score.bonuses.untyped` —
a computed field the pipeline clears on every recalculate, so it was dead code.

### What Shipped (COMPLETE — merged in `17a9012`)

| File                                                               | Change                                                                                                                       |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `src/types/index.ts`                                               | `ManualAbilityBonus` interface + `manualAbilityBonuses?: ManualAbilityBonus[]` on `Character`                                |
| `src/services/ModifierPipelineService.ts`                          | Step 9: feeds `manualAbilityBonuses` into pipeline as typed effects                                                          |
| `src/store/slices/characterEntrySlice.ts`                          | `addOtherBonus` / `removeOtherBonus` replace broken `setAbilityOther`                                                        |
| `src/components/character/direct-entry/AbilityScoreEntryPanel.tsx` | `OtherBonusSection` reinstated; `AutoPipelineRow` added to show pipeline-sourced bonuses (templates, feats, buffs) read-only |

**Effect:** User can add typed bonuses (morale/sacred/insight/etc.) with source labels. Template
and feat bonuses appear in a separate read-only "Auto" row that expands to show each source.

---

## Part 3 — Template Ability Score Changes

### Problem

`AppliedTemplate` had no `abilityScoreChanges` field, so the pipeline had no way to apply
template stat changes (e.g. druid-creature +4 WIS) without a Firestore lookup.

### What Shipped (COMPLETE — merged in `17a9012`)

| File                                                       | Change                                                                                                                        |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `src/types/templates.ts`                                   | Added `abilityScoreChanges?` to `AppliedTemplate`                                                                             |
| `src/components/character/direct-entry/ClassesSection.tsx` | Snapshots `abilityScoreChanges` from the template definition at add-time                                                      |
| `src/services/ModifierPipelineService.ts`                  | Step 8: loops `appliedTemplates[].abilityScoreChanges` and pushes as `UNTYPED` effects                                        |
| `scripts/db/patchDruidCreatureTemplate.ts`                 | One-off patch script for the single Firestore doc (druid-creature `abilityScoreChanges` was already present from the scraper) |

---

## Part 4 — Firestore Security Rules

### Problem

Three collections were missing read rules — Firestore defaults to deny-all, so any read was
silently failing with `Missing or insufficient permissions`.

| Collection            | Symptom                                           |
| --------------------- | ------------------------------------------------- |
| `favoredClassBonuses` | FCB section never loaded race-specific alternates |
| `eidolonbaseforms`    | Eidolon base form picker failed silently          |
| `eidolonsubtypes`     | Eidolon subtype picker failed silently            |

### What Shipped (COMPLETE — merged in `17a9012`)

Added authenticated-read rules for all three collections to `firestore.rules` and deployed
to staging.

---

## Part 5 — Direct-Entry Bug Fixes (Rissi Session)

These were discovered during end-to-end character entry. Tracked as a numbered list.

### Bug 2 — Max level cap per class (COMPLETE)

Prestige classes (`maxLevel < 20`) had no enforcement on the level input — you could enter
level 11 on a 10-level PrC.

**Fix:** `ClassEntryCard.tsx` clamps level input to `classData.maxLevel ?? 20` and shows
`/ N` beside the input for prestige classes.

### Bug 6 — Druid class: no choices rendered (COMPLETE)

Animal companion choice was not rendering. Fixed via `animalCompanions` collection name
correction in the seed script.

### Bug 7 — Druid template: +4 WIS not applied (COMPLETE)

Covered by Part 3 above. Additionally, the Auto Pipeline Row in the breakdown now makes
the source visible to the user.

---

## Remaining Bugs (NOT STARTED)

### Bug 1 — Level splitting: interleave class levels by order taken

**Problem:** When a character has e.g. Fighter 3 / Wizard 2, the levels currently display as
all Fighter levels first, then all Wizard levels. They should interleave in the order they
were actually taken (e.g. F1, W1, F2, W2, F3).

**Scope:** Requires a `levelHistory` order-of-acquisition model. Complex — deferred.

---

### Bug 3 — Dweomerkeeper: Mantle of Spells has nothing to click (DEFERRED)

**Problem:** The Dweomerkeeper prestige class has a class feature "Mantle of Spells" that
grants a spell from any list. The choice slot renders but there's nothing to select from
because the feature needs to search the full spell database.

**Scope:** Requires spell search infrastructure in choice slots. Deferred until spell search
UI is available.

---

### Bug 4 — Prestige Paladin advances Cleric casting on level 1 (should skip)

**Problem:** When a Prestige Paladin level is added, it advances the Cleric spellcasting
progression starting at level 1 instead of skipping level 1 (the standard prestige class
rule: caster level advancement starts from level 2 of the PrC, not level 1).

**Scope:** Spellcasting advancement logic in `ModifierPipelineService` or the spellcasting
slice. Needs investigation into how prestige class caster level advancement is modeled.

---

### Bug 5 — Paladin divine bond: no UI to add a mount after selecting Mount

**Problem:** When the Paladin Divine Bond choice is set to "Mount", there's no UI to
actually configure or attach a mount companion. The selection registers but nothing
actionable appears.

**Scope:** Requires integration between the Divine Bond class choice and the companion/mount
builder. Part of the animal companion builder work (`MW/animal-companion-builder`).

---

## Verification Checklist (manual — Expo/Rissi)

- [ ] Equip Headband of Vast Intellect → INT enhancement appears in Abilities breakdown
- [ ] Equip Ring of Protection → deflection AC visible on Combat tab
- [ ] Equip Cloak of Resistance → save totals update
- [ ] Unequip any item → bonus drops immediately
- [ ] Add Simple Druid Template → WIS shows +4 in Auto row, source "Simple Druid Template"
- [ ] Add morale bonus via Other UI → type pill visible, bonus reflected in total
- [ ] FCB section loads race-specific alternates for Human/Elf/etc.
- [ ] Prestige class level input enforces maxLevel cap and shows / N indicator
