# Direct-Entry UI Nav Wiring

## Status: NOT STARTED

---

## Overview

The direct-entry character sheet (`CharacterEntryScreen`) is fully built — all 10 tabs, all section
components, validation — but it is isolated from navigation. Three gaps need to close:

1. `app/(tabs)/characters/entry.tsx` always loads the Rissi dev fixture regardless of mode
2. The Save button in `CharacterEntryScreen` is a complete no-op stub
3. There is no Edit button on the character detail screen (`[id]/index.tsx`)

`isDirty` and `mode` are already tracked in Redux but never consumed. This PR closes all three
gaps: correct data loading per mode, the save path (draft → Character → Firestore → navigate),
and the Edit entry point from the detail screen.

---

## What Already Exists (do not recreate)

- `BLANK_DRAFT` — exported from `src/store/slices/characterEntrySlice.ts:83`
- `RISSI_FIXTURE` — `CharacterDraft` at `src/data/fixtures/rissi.ts`
- `loadCharacter(draft, mode, characterId?)` — Redux action in `characterEntrySlice`
- `state.characterEntry.isDirty` — set by every edit action, never read
- `state.characterEntry.mode` and `state.characterEntry.originalCharacterId` — set by `loadCharacter`, never read by the screen
- `FirebaseCharacterService.getCharacter(id)` — `src/services/FirebaseCharacterService.ts`
- `FirebaseCharacterService.create(userId, character)` — auto-generates Firestore ID via `addDoc`
- `FirebaseCharacterService.update(characterId, partial)` — merges via `updateDoc`
- `CharacterService.createDefaultCombatStats()` — private static, needs visibility change only
- `CharacterService.createDefaultSkills()` — private static, needs visibility change only
- `CharacterService.createDefaultEquipment()` — private static, needs visibility change only

---

## Implementation Plan

### Step 1 — Expose Three Private CharacterService Helpers

**File:** `src/services/CharacterService.ts`

Remove `private` from `createDefaultCombatStats()`, `createDefaultSkills()`, and
`createDefaultEquipment()`. Change nothing else. Purely a visibility change — no logic moves.

---

### Step 2 — `src/utils/characterConversions.ts` (new file)

Two pure functions. Neither touches Redux or Firebase.

#### `characterToDraft(character: Character): CharacterDraft`

Extracts user-input fields from a fully-computed `Character` for loading into the editor.

Key mappings:

- `name/player/alignment/deity/gender/background` → `character.info.*` (direct)
- `raceId` → `character.info.race.name.toLowerCase().replace(/\s+/g, '-')` (best-effort slug)
- `raceName` → `character.info.race.name`
- `age` → `String(character.info.age)`
- Ability scores: `base/racial/inherent/levelIncrements` from `character.abilityScores[k]` directly.
  `enhancement`: sum all active enhancement-typed bonuses. `other`: sum all untyped bonuses.
- `levelIncrementSlots`: reconstruct from per-ability increment counts — emit one `{ atHD, ability }`
  slot per milestone (4, 8, 12...) up to total class HD. Documented as best-effort.
- `classes`: `character.classes.classes` → `DraftClassEntry[]`
- `templates`: `character.appliedTemplates` → `DraftTemplateEntry[]` (`isFreeGrant=false`).
  `character.grantedBonuses` → `DraftTemplateEntry[]` (`isFreeGrant=true`)
- `combat`: map current/temp/nonlethal HP, misc save/AC/attack/speed fields
- `skills`: emit only skills where `character.skills[key].ranks > 0`
- `traits`: `character.traits.traits` → `DraftTrait[]`
- `featSlots`: `character.feats.feats` → `DraftFeatSlot[]`. Parse source string to `FeatSlotSource`.
- `spellcastingPools`: map `castingType` → `poolType`, `spellAbility` → `castingAbility`,
  zero out `spellsPerDayMisc`
- `equipment`: flatten `character.equipment.weapons/armor/shields/magicItems` into `DraftEquipmentItem[]`
- `characterNotes` ← `character.info.notes`; `campaignNotes` ← `''`

#### `draftToCharacter(draft: CharacterDraft, userId: string, existingId?: string): Character`

Builds a full `Character` from the draft. Used by the save thunk.

Strategy: build from scratch using the now-public helper methods for default structure, then fill
in every field from the draft. Call `ModifierPipelineService.recalculate(character)` at the end
to recompute derived stats (BAB, saves, HP, AC, attack totals).

Key construction steps:

```
info: {
  id: existingId ?? CharacterService.generateCharacterId(),
  name: draft.name,
  player: draft.player,
  userId,
  firebaseId: existingId,
  race: buildMinimalRace(draft.raceId, draft.raceName),
  age: parseInt(draft.age, 10) || 0,
  notes: draft.characterNotes,
  // ...all other info fields from draft
}
```

`buildMinimalRace(raceId, raceName)`: attempt `getExpandedRaceByName(raceName)` lookup. If not
found, construct a minimal `Race` object with `{ id: raceId, name: raceName, sizeMod: Size.Medium,
baseSpeed: 30, abilityModifiers: {}, traits: [], languages: ['Common'], bonusLanguages: [] }`.
The draft stores racial ability modifiers separately in `abilities[k].racial`, so the race
object's `abilityModifiers` is only needed as a display fallback.

```
abilityScores: build each key from draft.abilities[k]:
  base, racial, inherent, levelIncrements → direct
  enhancement → placed as single-entry BonusType.Enhancement bonus array if > 0
  other → placed as BonusType.Untyped if > 0
  total/modifier → computed by CharacterService.calculateAbilityModifiers() after build

classes: {
  classes: draft.classes.map(entry => {
    classData = getClassByName(entry.className)  // fallback to hardcoded defaults if not found
    return {
      name: entry.className,
      level: entry.level,
      hitDieSize: classData?.hitDieSize ?? 8,
      hitDieResults: Array(entry.level).fill(classData?.hitDieSize ?? 8),  // max HP default
      skillRanks: classData?.skillRanksPerLevel ?? 2,
      classSkills: classData?.classSkills ?? [],
      babProgression: classData?.babProgression ?? BABProgression.Medium,
      fortProgression: classData?.fortProgression ?? SaveProgression.Poor,
      refProgression: classData?.refProgression ?? SaveProgression.Poor,
      willProgression: classData?.willProgression ?? SaveProgression.Good,
      classFeatures: classData?.classFeatures?.filter(f => f.level <= entry.level) ?? [],
      classChoices: entry.classChoices,
      archetype: entry.archetypeId ? [entry.archetypeId] : [],
      sourceSystem: entry.sourceSystem,
    }
  }),
  totalLevel: draft.classes.reduce((s, c) => s + c.level, 0),
  baseAttackBonus: [0],  // recalculate() fills this
  baseFortSave: 0, baseRefSave: 0, baseWillSave: 0,
  favoredClassBonuses: [],
}

combatStats: CharacterService.createDefaultCombatStats(), then apply draft.combat overrides:
  hitPoints.current = draft.combat.currentHP
  hitPoints.temporary = draft.combat.tempHP
  hitPoints.nonlethal = draft.combat.nonlethalDamage
  armorClass.misc = draft.combat.acMiscBonus
  savingThrows.fortitude.misc = draft.combat.saveFortMisc
  savingThrows.reflex.misc = draft.combat.saveRefMisc
  savingThrows.will.misc = draft.combat.saveWillMisc
  movement.base = draft.combat.speedLand
  movement.fly = draft.combat.speedFly ?? 0
  movement.swim = draft.combat.speedSwim ?? 0
  movement.climb = draft.combat.speedClimb ?? 0

skills: CharacterService.createDefaultSkills(), then:
  for each [key, entry] in draft.skills where entry.ranks > 0:
    skills[key].ranks = entry.ranks
    skills[key].misc = entry.misc

feats: {
  feats: draft.featSlots
    .filter(s => s.featId && s.featName)
    .map(s => ({ featId: s.featId, name: s.featName, source: mapSlotSource(s),
                 grantedAtLevel: s.availableAtLevel, active: true, choices: {},
                 babWhenTaken: 0, classLevelsWhenTaken: {} })),
  totalFeats: draft.featSlots.length,
  bonusFeats: draft.featSlots.filter(s => s.source === 'bonus').length,
}

traits: { traits: draft.traits.map(t => ({ traitId: t.traitId ?? t.id, name: t.traitName,
          category: t.category, choices: {} })), maxTraits: 2 }

equipment: CharacterService.createDefaultEquipment(), then populate from draft.equipment
spellcasting: { pools: draft.spellcastingPools.map(mapDraftPoolToPool),
               preparedSpells: [], knownSpells: [], spellbooks: [] }

// Zero defaults for remaining fields:
initiating, specialAbilities, conditions, experience, currency, buffs, savedBuffs,
levelHistory, resources, ruleset: PRESET_PF1E_STANDARD, schemaVersion: '1.2.0',
lastUpdated: new Date()

// Templates:
appliedTemplates: draft.templates.filter(t => !t.isFreeGrant) → AppliedTemplate[]
grantedBonuses: draft.templates.filter(t => t.isFreeGrant) → GrantedBonus[]
```

Final call: `return ModifierPipelineService.recalculate(character)`

---

### Step 3 — `src/store/thunks/saveCharacterDraft.ts` (new file)

```typescript
export const saveCharacterDraft = createAsyncThunk<
  Character,
  void,
  { state: RootState; rejectValue: string }
>('characterEntry/save', async (_, { getState, rejectWithValue }) => {
  const { draft, mode, originalCharacterId } = getState().characterEntry;
  const userId = getState().auth.user?.uid;
  if (!userId) return rejectWithValue('Not authenticated');

  const character = draftToCharacter(draft, userId, originalCharacterId ?? undefined);

  if (mode === 'edit' && originalCharacterId) {
    return await FirebaseCharacterService.update(originalCharacterId, character);
  }
  return await FirebaseCharacterService.create(userId, character);
});
```

Navigation after save happens in the component (`.unwrap().then(() => router.*)`) — keeps the
thunk testable without a router mock.

---

### Step 4 — `src/store/slices/characterEntrySlice.ts`

Add two fields to `CharacterEntryState`:

```typescript
isSaving: boolean; // default false
saveError: string | null; // default null
```

Add extra reducers for `saveCharacterDraft`:

- `pending` → `isSaving = true, saveError = null`
- `fulfilled` → `isSaving = false, saveError = null`
- `rejected` → `isSaving = false, saveError = action.payload`

---

### Step 5 — `app/(tabs)/characters/entry.tsx`

Replace the `useEffect` that always loads `RISSI_FIXTURE` with mode-aware logic:

```typescript
const [loading, setLoading] = useState(true);
const [loadError, setLoadError] = useState<string | null>(null);

useEffect(() => {
  async function load() {
    setLoading(true);
    try {
      if (resolvedMode === 'edit' && characterId) {
        const character = await FirebaseCharacterService.getCharacter(characterId);
        const draft = characterToDraft(character);
        dispatch(loadCharacter({ draft, mode: 'edit', characterId }));
      } else {
        dispatch(loadCharacter({ draft: BLANK_DRAFT, mode: resolvedMode }));
      }
    } catch (e) {
      setLoadError(e instanceof Error ? e.message : 'Failed to load character');
    } finally {
      setLoading(false);
    }
  }
  load();
}, [dispatch, resolvedMode, characterId]);
```

Show `<LoadingSpinner>` while loading. Show error view with Back button if `loadError` is set.
Remove `RISSI_FIXTURE` import entirely.

Keep the `loadClasses()` dispatch as-is.

---

### Step 6 — `src/components/character/direct-entry/CharacterEntryHeader.tsx`

Add `onBack?: () => void` to the props interface. When provided, render a `"< Back"` Pressable
in the top-left of the header (match the style in `[id]/index.tsx:backText`). Additive change —
no existing callers break.

---

### Step 7 — `src/components/character/direct-entry/CharacterEntryScreen.tsx`

Three additions:

**a. Add `useRouter`** at the top of the component.

**b. Wire `handleSave`:**

```typescript
const mode = useAppSelector((state) => state.characterEntry.mode);
const isSaving = useAppSelector((state) => state.characterEntry.isSaving);

const handleSave = useCallback(async () => {
  try {
    await dispatch(saveCharacterDraft()).unwrap();
    mode === 'edit' ? router.back() : router.replace('/(tabs)/characters');
  } catch (err) {
    Alert.alert('Save Failed', String(err));
  }
}, [dispatch, mode, router]);
```

Pass `isSaving` to the Save button to disable it and show a loading state during the async call.

**c. Add `handleBack` with dirty guard:**

```typescript
const isDirty = useAppSelector((state) => state.characterEntry.isDirty);

const handleBack = useCallback(() => {
  if (isDirty) {
    Alert.alert('Unsaved Changes', 'You have unsaved changes. Leave without saving?', [
      { text: 'Stay', style: 'cancel' },
      { text: 'Leave', style: 'destructive', onPress: () => router.back() },
    ]);
  } else {
    router.back();
  }
}, [isDirty, router]);
```

Pass `onBack={handleBack}` to `<CharacterEntryHeader>`.

---

### Step 8 — `app/(tabs)/characters/[id]/index.tsx`

Add an Edit button to the header:

```tsx
<OrnateButton
  title="Edit"
  onPress={() => router.push(`/(tabs)/characters/entry?mode=edit&characterId=${id}`)}
  variant="secondary"
  testID="character-detail-edit"
/>
```

Place it in the header `View`, right-aligned. The existing header is column-layout; wrap the
name/class text and the Edit button in a row with `justifyContent: 'space-between'` to keep the
layout clean.

---

## Tests

### New: `__tests__/utils/characterConversions.test.ts`

`draftToCharacter`:

- `RISSI_FIXTURE` → correct `info.name`, `info.alignment`, 5-entry `classes.classes`, correct ability `base` values
- `BLANK_DRAFT` → minimal valid Character (name empty, no classes, all bases at 10)
- `existingId` → `info.id` and `info.firebaseId` both set to `existingId`
- Enhancement bonus on `wis` → lands in `abilityScores.wis.bonuses.enhancement`
- Skill with ranks > 0 in draft → appears in output; skill at 0 → absent

`characterToDraft`:

- Fighter 5 / Wizard 3 Character → two `DraftClassEntry` items matching levels
- Ability `racial`, `inherent`, `levelIncrements` round-trip correctly
- `currentHP` maps to `combat.currentHP`
- Skill with ranks → in draft; skill with 0 ranks → omitted

Round-trip smoke test:

- `characterToDraft(draftToCharacter(RISSI_FIXTURE, 'uid1'))` preserves `name`, `alignment`, class count, and `wis.base`

### New: `__tests__/store/saveCharacterDraft.test.ts`

- `mode=new`: thunk calls `FirebaseCharacterService.create`, not `update`
- `mode=edit` + `originalCharacterId`: calls `FirebaseCharacterService.update` with correct ID
- `userId` undefined → rejects with 'Not authenticated'
- Firebase throws → thunk rejects with error message
- `fulfilled`: `isSaving=false`, `saveError=null`
- `rejected`: `saveError` set to error message

### Modified: `__tests__/store/characterEntrySlice.test.ts`

- `saveCharacterDraft.pending` → `isSaving=true`
- `saveCharacterDraft.fulfilled` → `isSaving=false`
- `saveCharacterDraft.rejected` → `saveError` set

### New: `__tests__/integration/DirectEntryFlow.test.ts`

Mock `FirebaseCharacterService.create`, `update`, `getCharacter`.

- `mode=import`: `loadCharacter` dispatched with `BLANK_DRAFT`
- `mode=edit` + `characterId`: `getCharacter` called, `characterToDraft` applied, `loadCharacter` dispatched
- Save `mode=new`: `create` called once
- Save `mode=edit`: `update` called with correct `characterId`

---

## File Inventory

| File                                                             | Status                          |
| ---------------------------------------------------------------- | ------------------------------- |
| `src/utils/characterConversions.ts`                              | NEW                             |
| `src/store/thunks/saveCharacterDraft.ts`                         | NEW                             |
| `__tests__/utils/characterConversions.test.ts`                   | NEW                             |
| `__tests__/store/saveCharacterDraft.test.ts`                     | NEW                             |
| `__tests__/integration/DirectEntryFlow.test.ts`                  | NEW                             |
| `app/(tabs)/characters/entry.tsx`                                | MODIFIED                        |
| `app/(tabs)/characters/[id]/index.tsx`                           | MODIFIED                        |
| `src/components/character/direct-entry/CharacterEntryScreen.tsx` | MODIFIED                        |
| `src/components/character/direct-entry/CharacterEntryHeader.tsx` | MODIFIED                        |
| `src/store/slices/characterEntrySlice.ts`                        | MODIFIED                        |
| `src/services/CharacterService.ts`                               | MODIFIED (3 `private` removals) |
| `__tests__/store/characterEntrySlice.test.ts`                    | MODIFIED                        |

---

## Implementation Order

1. `CharacterService.ts` — remove `private` from 3 helpers (unblocks step 2)
2. `characterConversions.ts` — write `draftToCharacter` first, then `characterToDraft`
3. `saveCharacterDraft.ts` thunk (depends on step 2)
4. `characterEntrySlice.ts` — add `isSaving`/`saveError` + extra reducers (depends on step 3)
5. `entry.tsx` — mode-aware loading (depends on step 2)
6. `CharacterEntryHeader.tsx` — `onBack` prop (independent)
7. `CharacterEntryScreen.tsx` — wire save + back (depends on steps 3, 4, 6)
8. `[id]/index.tsx` — Edit button (independent)
9. All tests (depends on steps 1–8)

---

## Verification

```bash
npm run typecheck
npm test -- --testPathPattern="characterConversions|saveCharacterDraft|DirectEntryFlow|characterEntrySlice" --maxWorkers=2
```

Manual: launch Expo, navigate to Characters list, tap "Direct Entry" → blank editor loads (not
Rissi). Open a saved character → Edit button present → taps into editor with data pre-filled.
Save → navigates back. Back with edits → dirty guard Alert appears.
