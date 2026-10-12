# Archetype Feature Resolver

## Problem Statement

A player building a multi-archetype character cannot enter that character correctly. Two bugs share a root cause:

1. Selecting an archetype records its name and ID on the class entry but never merges its features into the class. Bonuses granted by archetype features (dodge bonuses, resource pools, ability score effects) never reach the modifier pipeline and do not appear on the character sheet — no error, just a silently wrong sheet.

2. Only one archetype can be selected per class. Pathfinder allows stacking multiple archetypes as long as they do not replace or alter the same class feature. The app has no way to represent or validate this combination rule.

## Solution

Build an archetype feature resolver — a shared engine that sits behind both fixes. When an archetype is added to a class entry, the resolver merges the archetype's new features into the class's stored feature list, removes replaced features, and checks all selected archetypes for compatibility. Incompatible combinations are blocked in the picker by default. A DM-level ruleset flag unlocks a variant rule where conflicting archetypes are allowed but the class level is capped below the conflict point.

## User Stories

1. As a player, I want archetype features to contribute their bonuses to my derived stats, so that my character sheet is correct when I select an archetype.
2. As a player, I want archetype resource pools to appear when an archetype is selected, so that I can track abilities granted by the archetype.
3. As a player, I want to add a second archetype to a class, so that I can represent multi-archetype builds like Pathfinder allows.
4. As a player, I want incompatible archetypes to be visually blocked in the picker, so that I cannot accidentally create an illegal combination.
5. As a player, I want to see why an archetype is unavailable when it is greyed out, so that I understand the conflict without needing to look it up.
6. As a player, I want to remove an archetype from a class, so that I can correct a mistake or change my build.
7. As a player, I want to see all selected archetypes for a class at a glance on the class card, so that I do not have to open a picker to check what I have selected.
8. As a DM, I want to enable the archetype stacking cap variant in the ruleset, so that my players can combine conflicting archetypes up to the level where they conflict.
9. As a DM, I want conflicting archetypes in cap mode to automatically limit the class level, so that the character cannot advance past the point of conflict.
10. As a player using cap mode, I want to see the level cap displayed on the class card, so that I know why I cannot level the class further.
11. As a player, I want archetypes that require features my class does not have to be clearly blocked, so that data authoring errors surface visibly rather than producing a silent wrong build.
12. As a developer, I want a CI lint that verifies every archetype's replaced and modified feature names resolve against the parent class, so that authoring errors are caught at PR time rather than at the table.

## Implementation Decisions

### Resolver interface

A pure function `resolveArchetype` encapsulates all archetype logic. It takes the base class feature list, the list of archetypes already applied to the class (with their clash data), and the incoming archetype's full data. It returns a resolution object:

```ts
interface ArchetypeResolution {
  features: ClassFeature[];
  conflicts: Array<{ featureName: string; archetypeNames: string[] }>;
  maxSafeLevel: number;
  status: 'clean' | 'clash-hardblock' | 'clash-capped';
}
```

The resolver runs at write time only. Its output is persisted on the class entry. It is not called at load time or by the modifier pipeline — the pipeline reads `cls.classFeatures` directly, which the resolver has already updated.

### Clash detection

Both `replacedFeatures` and `modifiedFeatures` on an archetype count equally for compatibility checking. An incoming archetype clashes with an existing archetype if any feature name in either archetype's `replacedFeatures` or `modifiedFeatures` matches any feature name in the other's arrays.

Matching uses a normalizer before comparison: lowercase, trim whitespace, strip dice-roll suffixes (e.g. "Channel Energy 1d6" → "channel energy"), strip "(partial)" qualifiers, normalize plural to singular trailing-s. After normalization, slot-qualifier strings (e.g. "domain (1st domain)" vs "domain (2nd domain)") are compared exactly — different slot strings do not clash.

Feature names that include a parenthetical level list (e.g. "Rage Power (2nd, 6th, 10th)") are parsed into a name and a set of levels. Two such entries clash only if their level sets intersect — disjoint level lists on the same feature name are compatible.

### Gate check

Before an archetype appears as selectable in the picker, each entry in its `replacedFeatures` and `modifiedFeatures` is checked against the base class's feature list using the same normalizer. If any entry does not resolve to a feature on the base class, the archetype is greyed out in the picker with a message naming the unresolvable feature. This prevents silent feature-removal failures where the resolver would merge new features without removing the intended base feature.

### Clash modes

By default, the picker blocks all archetype combinations that produce a clash. A new `OptionalRules` field `archetypeStackingCap: boolean` (default false) enables the variant stacking rule at the ruleset level. When enabled, clashing combinations are allowed; the class level is soft-capped at `maxSafeLevel` (the lowest conflict level minus one), and the level stepper refuses to advance past the cap. No per-character universal override mode exists.

### ClassEntry type changes

Two new fields are added to `ClassEntry`:

```ts
archetypes?: Array<{
  id: string;
  name: string;
  replacedFeatures: string[];
  modifiedFeatures: string[];
}>;
archetypeMaxSafeLevel?: number;
```

The existing `archetypeId`, `archetypeName`, and `archetype` fields are deprecated. They remain in the type to support read-time coercion of legacy character documents and are removed only after no live documents carry them.

At load time, `FirebaseCharacterService` coerces legacy documents: a character with only `archetypeId`/`archetypeName` scalars is migrated to a single-element `archetypes` array; a character with the older `archetype: string[]` freeform field is migrated similarly. The next save persists the new shape. `CompanionService` functions that read `archetype[]` or `archetypeName` are updated to read from `archetypes[].name`.

### Reducer changes

`updateClassArchetype` is replaced by two reducers: `addClassArchetype` and `removeClassArchetype`.

`addClassArchetype` receives:

```ts
{
  classId: string;
  archetype: ArchetypeData;        // full object loaded by the picker
  baseFeatures: ClassFeatureData[]; // base class features for the resolver
}
```

The reducer reads `rulesetAllowsCap` from `state.character.ruleset.optionalRules.archetypeStackingCap`. It runs the resolver, and on a clean result or a capped result (when allowed), merges features into `cls.classFeatures`, appends `{ id, name, replacedFeatures, modifiedFeatures }` to `cls.archetypes`, and sets `cls.archetypeMaxSafeLevel` if a cap applies. On a hard-block result it returns without mutation — the UI already prevents this path but the reducer is the safety net.

`removeClassArchetype` receives `{ classId, archetypeId }`. It removes the archetype from `cls.archetypes`, removes that archetype's contributed features from `cls.classFeatures`, restores any features that were removed by that archetype (re-running the resolver from scratch over the remaining archetypes), and clears `archetypeMaxSafeLevel` if no remaining conflict produces a cap.

### UI changes

**ClassEntryCard:** The single archetype pressable is replaced by a chip list showing each selected archetype's name with an X button to remove it, followed by a `+ Add archetype` link that opens the picker. If `archetypeMaxSafeLevel` is set, a warning line in amber is shown below the chips: "Level capped at N — archetype conflict." The level stepper refuses to advance past `archetypeMaxSafeLevel`.

**ArchetypePickerSheet:** A `disabledItems` prop accepts a map of archetype ID to disable reason string. Disabled entries render visually muted. Pressing a disabled entry shows the reason (e.g. "conflicts with Exciter on Phantom" or "requires Calm Spirit which this class does not have"). Already-selected archetypes are always included in `disabledItems`.

## Testing Decisions

A good test verifies external behavior, not implementation details. Tests assert on what the module produces given specific inputs — they do not assert on which private helpers were called or how intermediate state is structured.

### ArchetypeResolver

The resolver is the deepest module and carries the most logic. It must be tested exhaustively as a pure function.

Test cases must cover:
- Clean combination: two archetypes with no overlapping features produce `status: 'clean'` and the correct merged feature list.
- Modify-modify clash: two archetypes both modifying the same feature produce `status: 'clash-hardblock'` naming the clashing feature.
- Replace-modify clash: one archetype replacing and another modifying the same feature produces a clash.
- Non-overlapping level sets: two archetypes both referencing "Rage Power" at different level parentheticals produce no clash.
- Overlapping level sets: two archetypes both referencing "Rage Power" at intersecting levels produce a clash.
- Normalizer edge cases: dice suffix stripping, plural normalization, partial qualifier stripping, slot qualifier exact match.
- Gate check pass: a feature name in `replacedFeatures` that resolves against the base class features.
- Gate check fail: a feature name that does not resolve after normalization.
- Feature merge: `newFeatures` from the archetype appear in the resolved feature list.
- Feature removal: entries in `replacedFeatures` are absent from the resolved feature list.
- maxSafeLevel: computed correctly as the minimum conflict level minus one.

Prior art: `ModifierPipelineService.test.ts` and `FormulaService.test.ts` for pure-service test structure.

### characterEntrySlice reducers

Test cases must cover:
- `addClassArchetype` in clean mode: archetype features appear in `cls.classFeatures`, archetype appears in `cls.archetypes`, no cap set.
- `addClassArchetype` with a clash and cap mode off: state unchanged.
- `addClassArchetype` with a clash and cap mode on: archetype added, `archetypeMaxSafeLevel` set correctly.
- `removeClassArchetype`: removed archetype's features are gone, base features restored, cap cleared when no longer applicable.

Prior art: integration tests in `CharacterCreationFlow.test.ts`.

### FirebaseCharacterService coercion

Test cases must cover:
- Character with `archetypeId`/`archetypeName` scalars loads with a correctly shaped single-element `archetypes` array.
- Character with legacy `archetype: string[]` loads with a correctly shaped `archetypes` array.
- Character already carrying the new `archetypes` array passes through unchanged.

Prior art: `FirebaseCharacterService.test.ts`.

### CI lint

`__tests__/data/archetypes.lint.test.ts` iterates every entry in `ALL_ARCHETYPES` and asserts that every string in `replacedFeatures` and `modifiedFeatures` resolves against the parent class's feature list via the gate check. A failure message names the archetype and the unresolvable feature string. This test is expected to surface pre-existing authoring gaps on first run; those gaps become data cleanup tickets.

Prior art: `warderClassFeatures.test.ts`, `flawsDataIntegrity.test.ts`.

### UI components

Component tests for `ClassEntryCard` assert that multiple archetype chips render when `cls.archetypes` contains multiple entries, that the cap warning line appears when `archetypeMaxSafeLevel` is set, and that pressing X on a chip dispatches `removeClassArchetype`.

Component tests for `ArchetypePickerSheet` assert that entries in `disabledItems` render as visually muted and that pressing a disabled entry shows the reason string rather than dispatching a selection.

## Out of Scope

- Full structured migration of `ArchetypeData.replacedFeatures` and `modifiedFeatures` from `string[]` to a typed `FeatureReference` shape. The normalizer handles all current authoring patterns; the CI lint surfaces drift. A migration can be revisited if the normalizer accumulates too many edge cases.
- Per-character universal DM override (allow any combination unconditionally). The cap variant covers the known optional rule; a hard override mode was evaluated and rejected.
- Archetype compatibility pre-screening during class selection (showing only classes whose archetypes are compatible before the player commits). Out of scope for this iteration.
- Conflict resolution UI for existing saved characters whose archetype data was recorded before this system existed. Affected characters are re-entered manually; the character count is small.

## Further Notes

- The CI lint is expected to fail on first run against the existing archetype catalog. Each failure is a pre-existing data authoring gap. These should be triaged into data cleanup issues, not treated as blockers for this feature.
- Issues #362 (class feature bonuses not reaching derived stats) and #249 (single archetype limit) are both resolved by this PRD. The resolver's write-time feature merge fixes #362; the multi-archetype picker and clash detection fix #249.
- `modifiedFeatures` on an archetype signals that a class feature is altered but not removed. The resolver does not remove modified features from `cls.classFeatures` — it only removes `replacedFeatures`. Modified features stay in the list but their effects may be superseded by the archetype's `newFeatures`. This distinction matters for clash detection (both count) but not for the feature list mutation.
