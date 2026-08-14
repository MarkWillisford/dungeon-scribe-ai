# Template Choice Infrastructure

## Problem Statement

Several templates grant features whose effect depends on a sub-choice made when the template is applied. The Celestial-Blessed Creature template is the canonical case: choosing one of 10 celestial types (Astral Deva, Avoral, Bralani, Ghaele, Hound Archon, Lantern Archon, Leonal, Planetar, Solar, Trumpet Archon) determines which ability the Celestial Quality feature grants — Stunning Strike 5/day, Lightning Bolt 3/day, Wind Wall at-will, and so on. The editor today never prompts for that selection, stores nothing on the applied template, and renders the same opaque prose blob regardless of which celestial supposedly merged with the character. The same gap blocks every other template with conditional features (Half-Dragon color, Lycanthrope animal form, Oracle simple template revelations, Half-Fiend outsider type, Half-Elemental element, etc.), leaving these templates non-functional in the editor.

## Solution

Add a general template sub-choice system. Templates carry an optional `choices` array on the definition document. The user sees an unresolved choice as an inline row in the template card immediately on apply — non-blocking, matching the existing race/class element pattern. When the user picks an option, the chosen ability is snapshotted into the runtime `AppliedTemplate.features` array using the existing toggle/pool feature path, so the combat panel surfaces it without any new code path. The infrastructure ships with Celestial-Blessed as its first consumer; future templates with sub-choices add a `choices` entry and follow the same pattern.

## User Stories

1. As a player adding the Celestial-Blessed Creature template, I want a "Celestial Type" picker to appear immediately on the template card, so that I know a choice is required without being blocked by a modal.
2. As a player tapping the Celestial Type picker, I want to see the 10 celestial options each with their granted ability described, so that I can choose based on what my character actually gains.
3. As a player picking "Astral Deva" from the picker, I want the card to show "Stunning Strike 5/day (Fortitude or stunned 1d6 rounds)" instead of the generic Celestial Quality prose, so that I can see the specific ability my character gained.
4. As a player who picked "Astral Deva", I want Stunning Strike to appear in the combat panel as a toggle with a 5/day resource tracker, so that I can use the ability at the table.
5. As a player changing the Celestial Type from "Astral Deva" to "Avoral", I want Stunning Strike to disappear from the combat panel and Lightning Bolt 3/day to appear, so that the character sheet reflects my updated decision.
6. As a player saving a character with an unresolved template choice, I want the save to succeed and the choice to remain visible as "— choose —" until I resolve it, so that I can park a partially-configured character without losing other work.
7. As a player reopening a character with resolved template choices, I want the chosen abilities to still be there, so that my picks persist across sessions.
8. As a player applying a template with both a sub-choice and a companion grant, I want both UIs to appear and work independently, so that complex templates don't conflict.
9. As a developer adding a new template with a sub-choice, I want to declare the choice as data on the template definition, so that I don't have to write picker UI per template.
10. As a developer maintaining the class choice system, I want the template choice system to share the `ChoiceOption` primitive but not pollute `ClassChoiceDefinition` with template-specific fields, so that both systems evolve independently.
11. As a player viewing the template card after selecting a celestial, I want to see both the selected option's name (e.g. "Astral Deva") and a description of the granted ability, so that I can read the rule at the table without leaving the character editor.
12. As a player removing a Celestial-Blessed template that has a resolved choice, I want the injected feature to be removed from the combat panel along with the template, so that no orphan toggles remain.

## Implementation Decisions

### Share choice primitives in a new types module

A new module carries `ChoiceOption` (`id`, `name`, `description`, optional `prerequisites`, optional `subtypePrompt`) and a generic `ChoiceOptionGroup<T extends ChoiceOption>`. The existing `ClassChoiceOption` and `ClassChoiceOptionGroup` are updated to extend from these — no field changes, only the inheritance edge. The class system continues to work as today; the template system uses the same primitives without inheriting class-specific machinery.

This is the "shared primitives, separate shells" factoring. The alternative — a polymorphic `ChoiceDefinition` with an `owner: 'class' | 'template'` discriminator and a refactored `ClassChoiceRow` — was rejected because `ClassChoiceRow` is roughly half class-specific (class slice queries, companion picker, deity-token resolution, castable-spells logic), so forcing it polymorphic produces abstraction without real reuse.

### Choice definition lives at the template level

`TemplateDefinition` gains an optional `choices: TemplateChoiceDefinition[]` field. Each `TemplateChoiceDefinition` carries `id`, `label` (e.g. "Celestial Type"), `optionSource: 'inline' | 'collection'`, `optionGroups?: TemplateChoiceOptionGroup[]`, `collectionName?: string`, `collectionFilter?: Record<string, unknown>`. Each `TemplateChoiceOption` extends `ChoiceOption` with `grantsFeature?: FlatFeature` carrying a required `id` (so it can be matched and removed from `AppliedTemplate.features` on re-selection).

Template choices are template-scoped, not feature-scoped: the celestial type is the merged celestial's identity, and the Celestial Quality feature is just where that identity expresses mechanically. Inline-on-feature was rejected because the same choice may shape future features (e.g. flavor of a follow-up granted bonus), and template-level keeps the option open without later restructuring.

### Storage parallel to the class system

`AppliedTemplate` gains an optional `templateChoices: TemplateChoice[]` field. A `TemplateChoice` is `{ choiceId: string; selection: string }` — minimal, parallel to `ClassChoice` on `ClassEntry`. The `selection` value is the chosen option's `id`. The option's display data is resolved at render time by joining `templateChoices[].selection` against the template definition's `choices[].optionGroups[].options[]`.

### Selection injects the chosen feature into `AppliedTemplate.features`

The runtime `AppliedTemplate.features` array currently snapshots toggle/pool features from the template document at character load time so the combat panel can render them. The template-choice system extends this pattern: when a user resolves a choice, the chosen option's `grantsFeature` is snapshotted into `AppliedTemplate.features` using a stable derived `id` derived from the template id and choice id. The combat panel needs no change — it already reads `AppliedTemplate.features`.

When the user changes the selection, the previously injected feature is removed (matched by the derived `id`) and the new one is injected. This mirrors the class-choice `grantsFeature` injection/removal pattern.

When the template itself is removed from the character, the injected feature goes with it because the entire `AppliedTemplate` is dropped. No additional cleanup logic is needed.

### Resolution logic as a pure module

The injection/removal logic lives in a pure function. Input: `(templateDefinition, currentAppliedTemplate, choiceId, newSelectionId)`. Output: `(newTemplateChoices, newFeatures)`. The slice action wraps this function; the function itself has no Redux, no React, no Firestore — testable against object fixtures in isolation. This is the deep module of the feature; it encapsulates all the rule logic in a single tested seam.

### Choice UI: inline row, immediate, non-blocking

A new `TemplateChoiceRow` component renders one row per template choice on `TemplateEntryCard`. The row shows the choice label (e.g. "Celestial Type") and either the resolved option's name or a "— choose —" placeholder. Tapping opens `SearchPickerSheet` for collection-backed options or the same sheet wrapping inline option groups. On select, the row dispatches the resolution action.

Below the row, when resolved, the card displays the chosen option's `description` (e.g. "Stunning Strike 5/day, Fortitude or stunned 1d6 rounds"). This replaces the static prose blob that previously listed all 10 celestials in the Celestial Quality feature description.

The choice surfaces immediately when the template is applied — non-blocking — matching the race/class element pattern already in the editor.

### Soft validation

Unresolved template choices do not block character save, consistent with how the class-choice system handles unresolved class choices. A "— choose —" placeholder remains until the user picks.

### Celestial-Blessed restructuring

The `celestial-blessed-creature` template entry is updated:
- The `Celestial Quality (Su)` feature's description is shortened to a pointer ("Gains a celestial-specific ability — see chosen Celestial Type below.").
- A new top-level `choices` array is added with one entry: a single `TemplateChoiceDefinition` for Celestial Type with 10 inline options.
- Each of the 10 options carries `grantsFeature` with `id`, `name`, `description`, `activationMode`, and where applicable `resourcePool` (e.g. 5/day for Stunning Strike, 3/day for Lightning Bolt, at-will for Wind Wall).
- Options match the published list: Astral Deva, Avoral, Bralani, Ghaele, Hound Archon, Lantern Archon, Leonal, Planetar, Solar, Trumpet Archon.

## Testing Decisions

A good test verifies external behavior — what the resolved `AppliedTemplate` looks like after a dispatch, what the card renders for each state, what the combat panel surfaces — not which helper functions were called.

### Modules to test

**Template choice resolution logic (pure function)** — unit tests with object fixtures:
- First resolution: empty `templateChoices` → resolution adds the choice entry and injects the chosen feature.
- Re-resolution to a different option: previously injected feature is removed (matched by derived id), new one is injected.
- Re-resolution to the same option: idempotent — no duplicate features, selection unchanged.
- Resolution against a template with no `choices` definition: returns the input unchanged (defensive).
- Resolution when the option has no `grantsFeature`: choice is stored but no feature is injected.

**Slice action via Redux store** — `resolveTemplateChoice` integration:
- Dispatch updates both `templateChoices` and `features` on the targeted `AppliedTemplate`.
- Dispatch with a different selection replaces the previously injected feature.
- Dispatch against a wrong template id is a no-op.

**`TemplateChoiceRow` component** — behavior tests via React Native Testing Library:
- Renders the choice label and "— choose —" when unresolved.
- Renders the selected option's name when resolved.
- Tapping the row opens the picker sheet; selecting an item dispatches `resolveTemplateChoice` with the correct payload.
- Disabled state when no options are available.

**`TemplateEntryCard` integration** — component tests:
- Renders one `TemplateChoiceRow` per entry in the template definition's `choices` array.
- Displays the resolved option's description below the row when a selection exists.
- Hides the choice section entirely when the template definition has no `choices`.
- Coexists with the existing companion section without layout regressions.

**Celestial-Blessed data shape** — validation test on the restructured template definition:
- The `choices` array has exactly one definition with id `celestial-type`.
- Exactly 10 options present with the expected names.
- Each option has a `grantsFeature` with non-empty `id`, `name`, `description`, and `activationMode`.
- The original `Celestial Quality (Su)` feature stays in the `features` array (as a pointer header).

### Prior art

Reducer tests follow the `characterEntrySlice` pattern used in the equipment-effects work: minimal `Character` fixture, dispatch the action, assert on the resulting state. Pure-function tests use Jest with object fixtures (no test framework setup beyond Jest itself). Component tests follow the existing React Native Testing Library scaffolding in `__tests__/components/` with theme provider wrapping. Data shape validation follows the existing seed-data assertion pattern in `src/data/__tests__/`.

## Out of Scope

- Collection-backed template choices. The `optionSource: 'collection'` and `collectionName` fields are reserved in the type from day one for future use (most likely the Oracle Simple Class Template referencing the revelations collection), but this PRD ships inline options only.
- Effects flowing into `ModifierPipelineService` beyond what `AppliedTemplate.features` already surfaces. The chosen ability's resource pool and activation toggle surface via the existing combat-panel path; any deeper pipeline wiring (e.g. Pounce as a static modifier on attack sequences) inherits whatever pipeline support template features already have today. Extending `ModifierPipelineService` to consume `tpl.features.effects[]` is a separate cross-cutting feature.
- Per-level template choice acquisition. No template in the data model needs to re-prompt as HD increases.
- Sibling exclusion among template choices (mutual-exclusion rules between simultaneously available choices). The class system has this; templates do not yet need it.
- Token resolution between template choices (e.g. a sibling feature filtering on `{chosen_celestial_type}`). Future work if a template surfaces a real need.
- Restructuring any template other than `celestial-blessed-creature`. Subsequent templates (Half-Dragon color, Lycanthrope animal form, Half-Fiend outsider type, etc.) will be filed as separate issues consuming this infrastructure.
- Migration of existing character documents in Firestore that already reference Celestial-Blessed without a resolved choice. They will render with a "— choose —" placeholder until the player resolves it.

## Further Notes

The injection of `grantsFeature` into `AppliedTemplate.features` reuses the existing snapshot path used by `FirebaseCharacterService`'s template loader. The loader's existing filter (a feature must have `id` to be retained at runtime) is satisfied by the derived `id` on the injected entry, so no loader change is needed beyond awareness of the new field.

The `optionSource: 'collection'` field is included in `TemplateChoiceDefinition` from day one even though no template uses it yet. This keeps the type aligned with `ClassChoiceDefinition` and gives the next consumer a clean entry point without re-shaping the type.

The `subtypePrompt` field on `ChoiceOption` is inherited from the class system into the shared primitive. No template choice today needs a sub-subtype, but preserving the field maintains a single shared shape across both systems.
