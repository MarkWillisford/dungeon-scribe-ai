# Eliminate CharacterDraft — Single Source of Truth Refactor

## Status: NOT STARTED

---

## Context

The direct-entry editor was originally built around a `CharacterDraft` type — a separate, flatter "form model" that stores only user inputs. At save time, a `draftToCharacter()` conversion was supposed to inflate it into a full `Character` for Firestore.

This split has produced two problems:

1. **Live computed stats are missing.** The full `ModifierPipelineService` (which already handles racial traits, class features, feats, equipment, buffs, conditions) only runs against a `Character`. The editor shows approximations using narrow utility functions in `characterComputations.ts` — feats, equipment, and class features never affect the displayed stats during entry.

2. **The split has no real justification.** `CharacterDraft` exists for inertia (49 actions, 14 components, 3 services, 6 test files written against it), not because the architecture requires two types. Every concern that motivated the split — separation of input from computed values, simpler editor state — is just as well served by a single `Character` type with the pipeline running live after every input change.

The fix is to delete `CharacterDraft` and make the editor work directly on `Character`. The pipeline runs as Redux middleware after every input-touching action, so the in-memory `Character` always has correct computed stats. Save becomes a direct Firestore write of the same object you've been editing — no conversion function, no translation layer.

---

## Goals

1. `state.characterEntry` holds a single `Character` object (no `draft`).
2. `ModifierPipelineService.recalculate()` runs automatically after every input-touching action.
3. All 14 direct-entry components display values directly from the `Character` (no inline utility computation).
4. Save writes the live character to Firestore. Load fetches the saved character into the slice. No conversion functions exist.
5. The Rissi fixture and the blank-character factory both produce `Character` objects.
6. `CharacterDraft` and all `Draft*` sub-types are deleted.

---

## Non-Goals

- Closing the magic-item effects TODO in `ModifierPipelineService.collectEquipmentEffects` (line 274) — separate work.
- Closing the character-trait effects TODO (line 210) — also separate.
- Reworking the Character type itself beyond two small additions (see below).
- Changing the picker UX.

---

## Type Changes

### Additions to `Character`

```typescript
// src/types/character.ts — add as top-level Character field
levelIncrementSlots: LevelIncrementSlot[];  // which ability got each +1 at HD 4/8/12/...
```

`LevelIncrementSlot` itself moves from `characterDraft.ts` to `src/types/character.ts` unchanged.

`Character.info.notes` is used for both in-character and out-of-character notes (the editor renders one text area).

### Deletions

`src/types/characterDraft.ts` — delete the file entirely. Sub-types either move or merge:

- `LevelIncrementSlot` → `src/types/character.ts`
- `SpellcastingAdvancement` discriminated union → `src/types/spells.ts`
- `FeatSlotSource` → maps to existing `FeatSource` on `Character.feats.feats[i].source`
- All other `Draft*` types → eliminated in favor of Character equivalents

---

## State Shape

**File:** `src/store/slices/characterEntrySlice.ts`

```typescript
interface CharacterEntryState {
  character: Character; // was: draft: CharacterDraft
  mode: EntryMode;
  activeTab: EntryTabKey;
  isDirty: boolean;
  isSaving: boolean; // NEW
  saveError: string | null; // NEW
  originalCharacterId: string | null;
  lastValidatedAt: number | null;
  validationWarnings: ValidationWarning[];
}
```

`BLANK_DRAFT` is replaced by `CharacterService.createBlankCharacter()`. `RISSI_FIXTURE` is rewritten as a `Character`.

---

## Pipeline Triggering — Redux Middleware

**New file:** `src/store/middleware/recalculateMiddleware.ts`

Listens for any `characterEntry/` action not in an exclusion list, calls `ModifierPipelineService.recalculate(character)`, dispatches `applyComputedStats`.

```typescript
const RECALC_EXCLUDED_ACTIONS = new Set([
  'characterEntry/setActiveTab',
  'characterEntry/setName',
  'characterEntry/setPlayer',
  'characterEntry/setHair',
  'characterEntry/setEyes',
  'characterEntry/setSkin',
  'characterEntry/setGender',
  'characterEntry/setHeight',
  'characterEntry/setWeight',
  'characterEntry/setAge',
  'characterEntry/setBackground',
  'characterEntry/setPortrait',
  'characterEntry/setNotes',
  'characterEntry/setValidationWarnings',
  'characterEntry/acknowledgeWarning',
  'characterEntry/clearValidation',
  'characterEntry/applyComputedStats', // critical: prevent infinite loop
]);

export const recalculateMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  if (
    typeof action.type === 'string' &&
    action.type.startsWith('characterEntry/') &&
    !RECALC_EXCLUDED_ACTIONS.has(action.type)
  ) {
    const character = store.getState().characterEntry.character;
    const recalculated = ModifierPipelineService.recalculate(character);
    if (recalculated !== character) {
      store.dispatch({ type: 'characterEntry/applyComputedStats', payload: recalculated });
    }
  }
  return result;
};
```

---

## Action Migration Table

| Old path                                       | New path                                                    |
| ---------------------------------------------- | ----------------------------------------------------------- |
| `state.draft.name`                             | `state.character.info.name`                                 |
| `state.draft.player`                           | `state.character.info.player`                               |
| `state.draft.alignment`                        | `state.character.info.alignment`                            |
| `state.draft.deity`                            | `state.character.info.deity`                                |
| `state.draft.raceId` / `raceName`              | `state.character.info.race` (full Race object)              |
| `state.draft.abilities[k].base`                | `state.character.abilityScores[k].base`                     |
| `state.draft.abilities[k].racial`              | `state.character.abilityScores[k].racial`                   |
| `state.draft.abilities[k].enhancement`         | read-only — set by pipeline from gear; remove manual setter |
| `state.draft.abilities[k].levelIncrements`     | `state.character.abilityScores[k].levelIncrements`          |
| `state.draft.levelIncrementSlots`              | `state.character.levelIncrementSlots`                       |
| `state.draft.classes`                          | `state.character.classes.classes`                           |
| `state.draft.classes[i].className`             | `state.character.classes.classes[i].name`                   |
| `state.draft.classes[i].level`                 | `state.character.classes.classes[i].level`                  |
| `state.draft.classes[i].classChoices`          | `state.character.classes.classes[i].classChoices`           |
| `state.draft.featSlots`                        | collapsed — only assigned feats in `character.feats.feats`  |
| `state.draft.combat.currentHP`                 | `state.character.combatStats.hitPoints.current`             |
| `state.draft.combat.acMiscBonus`               | `state.character.combatStats.armorClass.misc`               |
| `state.draft.combat.saveFortMisc`              | `state.character.combatStats.savingThrows.fortitude.misc`   |
| `state.draft.combat.speedLand`                 | `state.character.combatStats.movement.base`                 |
| `state.draft.skills[key].ranks`                | `state.character.skills[key].ranks`                         |
| `state.draft.skills[key].misc`                 | `state.character.skills[key].misc`                          |
| `state.draft.traits`                           | `state.character.traits.traits`                             |
| `state.draft.equipment` (unified array)        | split into typed arrays per item's `collection`             |
| `state.draft.spellcastingPools`                | `state.character.spellcasting.pools`                        |
| `state.draft.templates`                        | `state.character.appliedTemplates`                          |
| `state.draft.characterNotes` / `campaignNotes` | `state.character.info.notes`                                |

### Feat slots

The draft has `featSlots: DraftFeatSlot[]` — every potential slot, populated or not. On `Character`, only assigned feats live in `feats.feats[]`. The slot list is derived from class/race rules via `computeFeatSlots()`. The `assignFeat` action pushes a new `CharacterFeat`; `unassignFeat` removes by `(source, availableAtLevel)`.

---

## Component Migration (14 files)

All under `src/components/character/direct-entry/`:

`AbilityScoreEntryPanel`, `CharacterEntryHeader`, `CharacterEntryScreen`, `ClassesSection`, `ClassEntryCard`, `CombatStatsSection`, `EquipmentSection`, `FeatSlotList`, `IdentitySection`, `LevelIncrementSlots`, `NotesSection`, `SkillsSection`, `SpellcastingSection`, `TraitsSection`.

Each switches selectors from `state.characterEntry.draft.*` to `state.characterEntry.character.*` and reads computed values directly from the character.

`CombatStatsSection` is the biggest win — reads `character.combatStats.attackBonuses.baseAttack`, `character.combatStats.savingThrows.fortitude.total`, `character.combatStats.hitPoints.max` directly.

---

## Service Migration

### `DraftValidationService` → `CharacterValidationService`

`src/services/DraftValidationService.ts` → rename to `CharacterValidationService.ts`. `validate(draft, ...)` becomes `validate(character, ...)`.

### `DraftStateResolver` → `CharacterTimelineService`

`src/services/DraftStateResolver.ts` → rename to `CharacterTimelineService.ts`. `buildTimeline(draft, ...)` becomes `buildTimeline(character, ...)`.

### `characterComputations.ts` — slim down

Keep: `computeFeatSlots`, `computeTotalBAB`, `computeBaseFort/Ref/Will`, `computeMaxHP`, fractional variants, `computeECL`, `lookupClassData`.

Remove: `abilityTotal`, `abilityModifier`, `getAbilityModifier`, `formatModifier`.

---

## Save / Load Wiring

### Save — `src/store/thunks/saveCharacter.ts` (NEW)

```typescript
export const saveCharacter = createAsyncThunk<
  Character,
  void,
  { state: RootState; rejectValue: string }
>('characterEntry/save', async (_, { getState, rejectWithValue }) => {
  const { character, mode, originalCharacterId } = getState().characterEntry;
  const userId = getState().auth.user?.uid;
  if (!userId) return rejectWithValue('Not authenticated');
  const toSave: Character = { ...character, lastUpdated: new Date() };
  if (mode === 'edit' && originalCharacterId) {
    return await FirebaseCharacterService.update(originalCharacterId, toSave);
  }
  return await FirebaseCharacterService.create(userId, toSave);
});
```

### Load — `app/(tabs)/characters/entry.tsx`

Mode-aware: `edit` + `characterId` → `FirebaseCharacterService.getCharacter(id)` → `dispatch(loadCharacter(...))`. Otherwise → `dispatch(loadCharacter({ character: CharacterService.createBlankCharacter(), mode }))`.

### Edit button — `app/(tabs)/characters/[id]/index.tsx`

Add `OrnateButton` "Edit" navigating to `/(tabs)/characters/entry?mode=edit&characterId=${id}`.

---

## Factory: `CharacterService.createBlankCharacter()`

Produces a fully-empty editable character. `PLACEHOLDER_RACE` is a sentinel `Race` with `id: ''` used until user picks a real race.

---

## File Inventory

### Modified

| File                                                          | Change                                                                                                   |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `src/types/character.ts`                                      | Add `levelIncrementSlots: LevelIncrementSlot[]`; import `LevelIncrementSlot`                             |
| `src/types/spells.ts`                                         | Move `SpellcastingAdvancement` here                                                                      |
| `src/store/slices/characterEntrySlice.ts`                     | Replace `draft` with `character`; rewrite all actions; add `applyComputedStats`, `isSaving`, `saveError` |
| `src/store/index.ts`                                          | Wire `recalculateMiddleware`                                                                             |
| `src/services/CharacterService.ts`                            | Add `createBlankCharacter()`; expose private helpers                                                     |
| `src/services/DraftValidationService.ts`                      | Rename to `CharacterValidationService.ts`; switch to Character paths                                     |
| `src/services/DraftStateResolver.ts`                          | Rename to `CharacterTimelineService.ts`; switch to Character paths                                       |
| `src/utils/characterComputations.ts`                          | Remove ability helpers; update BAB/save/HP signatures to Character types                                 |
| `src/data/fixtures/rissi.ts`                                  | Convert to `Character` via programmatic construction                                                     |
| `app/(tabs)/characters/entry.tsx`                             | Mode-aware load; remove `RISSI_FIXTURE` import                                                           |
| `app/(tabs)/characters/[id]/index.tsx`                        | Add Edit button                                                                                          |
| All 14 components in `src/components/character/direct-entry/` | Switch selectors to `state.characterEntry.character.*`                                                   |

### Created

| File                                            | Purpose                              |
| ----------------------------------------------- | ------------------------------------ |
| `src/store/middleware/recalculateMiddleware.ts` | Auto-runs pipeline after input edits |
| `src/store/thunks/saveCharacter.ts`             | Save thunk                           |
| `__tests__/store/recalculateMiddleware.test.ts` | Pipeline trigger tests               |
| `__tests__/store/saveCharacter.test.ts`         | Save thunk tests                     |

### Deleted

| File                               | Reason                  |
| ---------------------------------- | ----------------------- |
| `src/types/characterDraft.ts`      | Type eliminated         |
| `plans/direct-entry-nav-wiring.md` | Superseded by this plan |

### Test files updated

| File                                                  | Change                                                                                        |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `__tests__/store/characterEntrySlice.test.ts`         | Replace `BLANK_DRAFT` with `createBlankCharacter()`; update all assertions to character paths |
| `__tests__/services/DraftValidationService.test.ts`   | Rename to `CharacterValidationService.test.ts`; update inputs                                 |
| `__tests__/services/DraftStateResolver.test.ts`       | Rename to `CharacterTimelineService.test.ts`; update inputs                                   |
| `__tests__/services/characterComputations.test.ts`    | Drop tests for removed helpers; keep BAB/save/HP/feat-slots tests                             |
| `__tests__/integration/CharacterCreationFlow.test.ts` | Update creation flow                                                                          |
| `__tests__/integration/CharacterCRUD.test.ts`         | Update Firestore round-trip                                                                   |

---

## Implementation Order

1. **Type foundation** — Add `levelIncrementSlots` to `Character`, move `SpellcastingAdvancement`, expose private helpers in `CharacterService`, write `createBlankCharacter()`.
2. **Pipeline middleware** — `recalculateMiddleware.ts` + wire into store config; write tests.
3. **Slice rewrite** — Replace `draft` with `character`, rewrite all actions. Update tests in lockstep.
4. **Service migration** — Rename and refactor `DraftValidationService` and `DraftStateResolver`. Slim `characterComputations.ts`. Update tests.
5. **Component migration** — Update all 14 direct-entry components.
6. **Fixture rewrite** — Convert `RISSI_FIXTURE` to a `Character`.
7. **Save / load wiring** — `saveCharacter` thunk, mode-aware `entry.tsx`, Edit button, save + back guard.
8. **Cleanup** — Delete `src/types/characterDraft.ts` and remaining draft references.

---

## Verification

```bash
npm run typecheck
npm run lint
npm test -- --maxWorkers=2
```

### Manual end-to-end

1. Blank editor loads with all stats at zero/default.
2. Pick a race → ability scores update (racial mod applied).
3. Add Cleric 5 → BAB shows +3, Will save shows +4, max HP populates.
4. Assign Iron Will to a feat slot → Will save jumps by 2 immediately. (**This is the original feature gap.**)
5. Equip "Mithral Full Plate +3" → AC shows the armor + enhancement bonuses immediately.
6. Save → character lands in Firestore; appears in character list.
7. Open saved character → tap Edit → editor opens with all values pre-filled.
8. Make an edit → save again → update lands.
9. Make an edit, hit Back → "Unsaved Changes" Alert appears.

---

## Known Pipeline Gaps (Pre-existing, Not In Scope)

1. **Magic item effects** — `ModifierPipelineService.collectEquipmentEffects` line 274 has a TODO. Headbands, belts, rings of protection, ioun stones don't contribute to stats.
2. **Character trait effects** — line 210 says "effects resolved via trait registry (future)". Reactionary, Fate's Favored, etc. don't contribute.
