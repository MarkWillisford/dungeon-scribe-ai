# Draft Validation System — Implementation Plan

## Context

The direct-entry UI lets users import existing paper characters. All fields are freeform, and validation is on-demand (warnings only, no hard blocks). A floating action button (FAB) is already scaffolded in `CharacterEntryScreen.tsx:172-199` with a no-op `onPress`. The Redux infrastructure (`EntryValidationWarning`, `setValidationWarnings`, `acknowledgeWarning`, `clearValidation`) is ready.

**The core challenge:** Validating prerequisites (class entry requirements, feat prerequisites) requires knowing the character's state _at the point they made each decision_, not their final state. A character entering Hathran at level 11 needs BAB +4 at that moment — computed from only their first 10 class levels.

**HD vs ECL:** Hit Dice = actual class levels. ECL = HD + Level Adjustment from templates. Inherited LA templates consume ECL slots before class levels. Validation checkpoints happen at each ECL.

**Prerequisite: Ruleset System.** The validator requires a `Ruleset` to know which optional rules are active (EitR mode, Relaxed Entry, Path of War mechanics, etc.) and which sources/items are allowed. See `plans/ruleset-system.md`. The `Ruleset` type must be defined before the validator can be implemented.

---

## New Files

| File                                                              | Purpose                                                                          |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `src/services/DraftStateResolver.ts`                              | Builds ECL timeline from `CharacterDraft`; computes snapshots at each checkpoint |
| `src/services/DraftValidationService.ts`                          | Runs all validation checks against the draft using the timeline                  |
| `src/components/character/direct-entry/ValidationReportSheet.tsx` | Bottom sheet UI showing grouped warnings with action buttons                     |
| `__tests__/services/DraftStateResolver.test.ts`                   | Timeline building, snapshot correctness                                          |
| `__tests__/services/DraftValidationService.test.ts`               | All validation checks                                                            |

## Modified Files

| File                                                             | Changes                                                                  |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `src/components/character/direct-entry/CharacterEntryScreen.tsx` | Wire FAB `onPress`, add `handleValidate`, render `ValidationReportSheet` |

## No Changes Needed

- `src/utils/characterComputations.ts` — already has `computeTotalBAB`, `computeBaseFort/Ref/Will`, `computeECL`, `abilityTotal`, `lookupClassData`. We call these with sliced class arrays.
- `src/services/PrerequisiteService.ts` — snapshot is structurally compatible with `Character` via TypeScript structural typing. No modification needed.

---

## 1. DraftStateResolver

### Types

```typescript
/** A single step in the ECL timeline. Each step consumes one ECL point. */
interface ECLCheckpoint {
  ecl: number;
  hd: number; // Total class levels so far
  decision: LevelUpDecision;
  snapshot: DraftCharacterSnapshot;
}

interface ECLTimeline {
  checkpoints: ECLCheckpoint[];
  finalECL: number;
  totalHD: number;
  totalLA: number;
}

/**
 * Character state at a checkpoint. Shaped to be structurally compatible
 * with the fields PrerequisiteService.checkSingle reads from Character.
 */
interface DraftCharacterSnapshot {
  abilityScores: Record<AbilityKey, { total: number }>;
  classes: {
    baseAttackBonus: number[]; // iterative array
    totalLevel: number; // = hd at this checkpoint
    classes: Array<{
      name: string;
      level: number;
      classFeatures: Array<{ name: string; level: number; description: string }>;
    }>;
  };
  feats: {
    feats: Array<{ featId: string; choices: Record<string, string> }>;
  };
  skills: Record<string, { ranks: number }>;
  info: { race: { name: string } };
  spellcasting: {
    pools: Array<{ baseCasterLevel: number; baseClass: string }>;
  };
  mythic?: { tier: number };
}
```

### Timeline Building Algorithm

1. **Collect inherited LA templates** — filter `draft.templates` for `acquired === 'inherited'` (or undefined, since most templates are inherited), `appliedAs === 'LA'`, `!isFreeGrant`. These consume ECL 1..totalLA before any class levels.

2. **Expand classes into per-level decisions** — `draft.classes` is ordered. Expand `[{className: 'Fighter', level: 5}, {className: 'Wizard', level: 3}]` into 8 individual `LevelUpDecision` entries: `{type:'class', className:'Fighter', classLevel:1}` through `classLevel:5`, then Wizard 1-3.

3. **Append acquired LA templates** — placed after all class levels by default. If `DraftTemplateEntry.acquiredAtECL` is set, use that ECL for timeline placement instead. (Direct-entry doesn't always track acquisition point; defaulting to end-of-class is a reasonable fallback for imported characters.)

4. **Build checkpoints** — walk ECL 1 to finalECL. At each step:
   - If it's an LA slot: `decision = {type:'la_payment', templateId}`, HD unchanged
   - If it's a class level: `decision = {type:'class', ...}`, HD increments
   - Compute snapshot from the **partial class list** up to this point

5. **Snapshot computation** at each checkpoint:
   - **Partial classes**: Aggregate expanded decisions back into `DraftClassEntry[]` with adjusted levels
   - **BAB**: `computeTotalBAB(partialClasses)` + `formatBABString` for iterative array
   - **Saves**: `computeBaseFort/Ref/Will(partialClasses)`
   - **Ability scores**: `draft.abilities` base/racial/inherent/enhancement/other + count `levelIncrementSlots` where `atHD <= currentHD`
   - **Feats**: filter `draft.featSlots` where `availableAtLevel <= currentECL` and `featId` is assigned
   - **Skills**: use `draft.skills` as-is (total ranks, not per-level — known limitation)
   - **Class features**: lookup `ExpandedClassData.classFeatures` where `feature.level <= classLevel` for each class
   - **Caster level**: class levels in casting classes + prestige advancement contributions

### Public API

```typescript
class DraftStateResolver {
  static buildTimeline(draft: CharacterDraft): ECLTimeline;
  static snapshotAtECL(draft: CharacterDraft, ecl: number): DraftCharacterSnapshot | null;
}
```

---

## 2. DraftValidationService

### Public API

```typescript
class DraftValidationService {
  static validate(
    draft: CharacterDraft,
    ruleset: Ruleset,
    campaignSettings?: ValidationSettings,
  ): EntryValidationWarning[];
}
```

`ruleset` controls which sources, optional rules, and item overrides are active. `campaignSettings` (from `ValidationSettings`) controls trait limits and ability score method. Both come from `plans/ruleset-system.md`.

### Validation Checks

| Check                        | Section     | Logic                                                                                                                                                                                                         |
| ---------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Required fields**          | `identity`  | Name non-empty, race set, at least one class                                                                                                                                                                  |
| **Ability score sanity**     | `abilities` | No total ≤ 0, base in 1-30 range, CON > 0                                                                                                                                                                     |
| **Level increment slots**    | `abilities` | Count matches `floor(totalHD / 4)`, no unassigned slots                                                                                                                                                       |
| **Class prerequisites**      | `classes`   | For each prestige class (has `prerequisites` in static data) where `prereqOverride === false`: get snapshot at ECL _before_ first level of that class, check BAB, skills, feats, alignment, spellcasting text |
| **Feat prerequisites**       | `feats`     | For each assigned feat slot where `prereqOverride === false`: look up `FeatDefinition`, get snapshot at `availableAtLevel`, call `PrerequisiteService.checkPrerequisites(snapshot, featDef)`                  |
| **Trait count**              | `traits`    | `draft.traits.length > maxTraits` (default 2)                                                                                                                                                                 |
| **Skill ranks**              | `skills`    | Total assigned vs total available (`sum((skillRanksPerLevel + INT mod) * level)` per class, min 1/level). Per-skill max = totalHD.                                                                            |
| **Spellcasting advancement** | `spells`    | Prestige class with casting but no `spellcastingAdvancement` set; `type: 'chosen'` without `chosenType`                                                                                                       |

#### Prestige Class Prerequisite Detail

For spellcasting prerequisites (free-text like "Ability to cast 3rd-level arcane spells"):

- Parse with regex: extract spell level number and casting type (arcane/divine)
- Check if any spellcasting pool's `baseCasterLevel` at that ECL can cast that level
- Spell level access: CL 1→1st, CL 3→2nd, CL 5→3rd, CL 7→4th, CL 9→5th (full casters); varies by class
- If parsing fails, generate a soft warning: "Could not auto-check: [text]"

#### PrerequisiteService Integration

The `DraftCharacterSnapshot` is structurally compatible with `Character` for the fields `checkSingle` accesses. We cast via `snapshot as unknown as Character` for the call. This avoids modifying PrerequisiteService.

---

## 3. ValidationReportSheet

Follows the `SearchPickerSheet` pattern — React Native `Modal` with `presentationStyle="pageSheet"`.

### Props

```typescript
interface ValidationReportSheetProps {
  visible: boolean;
  onClose: () => void;
  onSave: () => void; // "Save Anyway" action
}
```

### Structure

```
Modal (slide animation, pageSheet)
  SafeAreaView
    Header: "Validation Report" + close [X] button
    Summary: "N warnings | All required fields OK" (or "M required fields missing")
    SectionList (grouped by warning.section):
      Section header: tab name in caps (CLASSES, FEATS, etc.)
      WarningRow per warning:
        ⚠ icon + message + detail (if present)
        Action buttons:
          [Override — trust player] → dispatches acknowledgeWarning(id)
          [Fix in {Section}] → dispatches setActiveTab(section), calls onClose
        Acknowledged state: muted/dimmed with ✓ checkmark
    Footer: [Save Anyway] button → calls onSave
```

Only sections with warnings are rendered. Section order follows tab order. Acknowledged warnings sort to the bottom within their section.

---

## 4. Wiring (CharacterEntryScreen.tsx)

### Changes

1. Add `useState` for sheet visibility:

   ```typescript
   const [showValidationSheet, setShowValidationSheet] = useState(false);
   ```

2. Update `handleValidate`:

   ```typescript
   const handleValidate = useCallback(() => {
     const warnings = DraftValidationService.validate(draft);
     dispatch(setValidationWarnings(warnings));
     setShowValidationSheet(true);
   }, [draft, dispatch]);
   ```

3. Wire FAB `onPress`:

   ```typescript
   onPress={() => {
     if (lastValidatedAt !== null) {
       setShowValidationSheet(true);  // Re-open existing results
     } else {
       handleValidate();               // Run validation first time
     }
   }}
   ```

4. Render `ValidationReportSheet` below the FAB:
   ```typescript
   <ValidationReportSheet
     visible={showValidationSheet}
     onClose={() => setShowValidationSheet(false)}
     onSave={() => { setShowValidationSheet(false); handleSave(); }}
   />
   ```

---

## 5. Known Limitations

1. **Skill ranks not split by level** — draft stores total ranks per skill, not per-level. Cannot validate "did you have 5 ranks in Spellcraft at level 7?" Validates total assigned vs total available only.

2. **Feat choices not stored on draft slots** — `DraftFeatSlot` has `featId` but not `choices`. Choice-dependent prerequisites (e.g., Greater Weapon Focus requires Weapon Focus with the same weapon) won't validate correctly. The `matchChoiceKey` path falls back gracefully.

3. **Acquired template timing** — `DraftTemplateEntry` has no `acquiredAtECL` field. Acquired LA templates are placed after all class levels. Future enhancement: add `acquiredAtECL?: number` to `DraftTemplateEntry`.

4. **Spellcasting prerequisite text parsing** — heuristic regex, covers common formats. Unusual phrasings produce a soft "could not auto-check" warning.

---

## 6. Test Strategy

### DraftStateResolver Tests

- Single class (Fighter 5): 5 checkpoints, BAB progression verified at each
- Multiclass (Fighter 5 / Wizard 3): 8 checkpoints in order, BAB sums correctly
- Inherited LA template (Fighter 5 + LA +3): 8 checkpoints, first 3 are `la_payment` with HD=0
- Ability scores with level increments: at HD 4, increment applied to snapshot
- Class features included up to current class level
- Feats filtered by `availableAtLevel`
- Caster level accumulates correctly

### DraftValidationService Tests

- Missing name → identity warning
- Prestige class without BAB → classes warning; `prereqOverride: true` suppresses
- Feat without prerequisite → feats warning; `prereqOverride: true` suppresses
- 3 traits with maxTraits=2 → traits warning
- Skill ranks exceeding available → skills warning
- Complete valid character → empty warnings array

### ValidationReportSheet Tests

- Renders grouped warnings by section
- Override button dispatches `acknowledgeWarning`
- Fix in Section dispatches `setActiveTab`
- Acknowledged warnings show dimmed style

---

## 7. Verification

1. `npm run typecheck` — zero errors
2. `npm test` — all existing + new tests pass
3. Manual: load Rissi fixture, press Validate, verify warnings appear correctly (Hathran BAB check, feat prereqs, etc.)
