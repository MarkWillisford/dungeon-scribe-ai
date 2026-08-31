# Archetype and Class Feature Effect Resolution

## Problem Statement

A player builds a Daring Champion Cavalier, reaches 9th level, and the character sheet shows no dodge bonus to AC — even though the archetype plainly grants one. Nothing errors. The sheet simply reports a number that is wrong, and the only reason anyone noticed is that the player already knew what the AC should be. On a class they knew less well, it would have passed.

This is not one archetype's problem. Of 6,239 seeded Class Features, 49 carry any **Effect** at all. A further 1,112 promise a numeric bonus in their own description text and deliver nothing. Every one of those is a silently wrong stat waiting for a player who happens to take that class.

Separately, a class can carry only one **Archetype**. Pathfinder allows several as long as they do not replace or alter the same Class Feature, and characters that need two — a Spiritualist with two, a Warder with two — cannot be entered at all.

The two problems are one problem. Archetypes contribute nothing to derived stats today, so allowing a player to select more of them would change no numbers.

## Solution

Make a Class Feature's mechanics reach the character sheet, and let a class carry as many Archetypes as the rules permit.

Three things change. The modifier pipeline stops discarding the condition attached to an Effect, so "+1 dodge while wearing light armor" can mean what it says instead of applying in full plate. The 1,112 features whose prose promises a bonus get machine-readable **Effects** generated from that prose, seeded as unverified and applied immediately, so a sheet is right now rather than after a review queue drains. And Archetypes gain a real resolution path: the features they trade away are removed, the features they add are present, and several may be selected at once — with conflicts judged per **Feature Instance** and scoped to the level at which they first bite, so a combination that only collides at 5th remains legal for the first four levels.

The organising principle is that the app may be incomplete but must not be quiet about it. Every bonus it applies is traceable in the stat breakdown, every bonus it cannot model is visible as unmodelled, and every unverified value says so.

## User Stories

1. As a player, I want my Daring Champion's Nimble dodge bonus to appear in my AC, so that my character sheet matches the rules.
2. As a player, I want that bonus to grow as I level, so that "increases by 1 for every 4 levels beyond 9th" is calculated rather than ignored.
3. As a player, I want a bonus that depends on wearing light armor to disappear when I equip heavy armor, so that the sheet reflects what I am actually wearing.
4. As a player, I want to see each Class Feature contribution named in my AC breakdown, so that I can trace where every point came from.
5. As a player, I want a contribution generated from description text to be labelled unverified, so that I know which numbers to sanity-check.
6. As a player, I want to see that a Class Feature has not been modelled yet, so that I know to account for it myself instead of assuming it is handled.
7. As a player, I want a feature that genuinely grants no numeric bonus to be distinguishable from one nobody has modelled yet, so that the unmodelled list is short enough to be worth reading.
8. As a player, I want a bonus that depends on what happened this round to be shown as conditional rather than folded into my printed total, so that my sheet's AC is the AC I actually have standing still.
9. As a player in a session, I want to toggle a round-scoped feature on when it applies, so that the live numbers are right during combat.
10. As a player, I want to select a second Archetype on a class, so that I can build the character I designed.
11. As a player, I want to be told which Class Feature two Archetypes fight over, so that I can decide which one to drop.
12. As a player, I want two Archetypes that touch the same Class Feature at different levels to be allowed, so that the app does not forbid a legal build.
13. As a player, I want to take four levels of a combination that only conflicts at 5th, so that the app follows the rules rather than a simplification of them.
14. As a player, I want to be stopped at the level that creates the conflict, so that I find out when I can still choose differently.
15. As a player, I want to override a conflict my GM has allowed, so that a table ruling is not blocked by the app.
16. As a GM, I want to permit conflicting Archetypes for a whole campaign, so that I set the ruling once instead of per character.
17. As a player, I want the Class Features an Archetype trades away to disappear from my sheet, so that I am not shown abilities I do not have.
18. As a player, I want the Class Features an Archetype grants to appear at the right level, so that my feature list is complete.
19. As a player, I want an Archetype's effects to reach my stats, so that selecting one changes something.
20. As a Sacred Huntsmaster Inquisitor, I want my animal companion to have the right effective level, so that the companion works at all.
21. As a Mad Dog Barbarian, I want the same, so that the archetype I chose functions.
22. As a player, I want my character to keep working after the game data is re-seeded, so that a catalog change does not break a character I already built.
23. As a player, I want the ability text I read when I chose a feature to stay as I read it, so that my sheet is a record of what I agreed to.
24. As a player, I want a Class Feature's mechanics to improve when the catalog is corrected, so that a fix reaches the character I built last month without my doing anything.
25. As a player entering a character by hand, I want an unmodelled feature's bonus to be enterable, so that my sheet can be right even when the data is not.
26. As a data maintainer, I want seeding to fail when an Archetype names a Class Feature that does not exist, so that broken references are caught before a player sees them.
27. As a data maintainer, I want to know which Class Features still need Effects authored, so that I can work the backlog.
28. As a data maintainer, I want generated Effects marked for review, so that I can confirm them incrementally.
29. As a data maintainer, I want to confirm a generated Effect and have it stop being labelled unverified, so that review progress is visible.
30. As a developer, I want the conflict rule expressed as a testable function, so that a rules mistake is caught by a test rather than by a player.
31. As a developer, I want condition evaluation isolated from the pipeline, so that I can test "does this apply?" without building a whole character.
32. As a developer, I want one representation of a class entry's Archetypes, so that two fields cannot disagree.

## Implementation Decisions

### Effect conditions are evaluated, not discarded

`ModifierPipelineService.resolveEffects` currently builds a resolved effect from target, bonus type, value and source, and drops `condition` entirely. Every conditional Effect therefore applies unconditionally. The resolved effect shape gains the condition, and resolution consults a new condition evaluator before including it.

This is a prerequisite, not a parallel workstream. Authoring the 434 conditional Effects before the evaluator exists would make characters newly wrong rather than merely incomplete.

### A dedicated condition evaluator

A new module answers a single question: given an `EffectCondition` and a character — plus, in a session, the live combat context — does this Effect apply? Conditions derivable from the character (armor type, size, weapon) are evaluated automatically. Conditions about the current round or a GM ruling fall back to a player-controlled toggle, which the pipeline already supports through the existing activation gate.

The interface is deliberately narrow so it can be tested exhaustively without constructing a full character.

### The character sheet shows the unconditional value

Round-scoped conditional bonuses are not folded into the printed total. The sheet shows the value that holds when the condition is not met and lists the conditional contribution separately in the breakdown; the Play session applies it live when toggled. A sheet total is then always a true statement rather than a guess about circumstance.

### Effects are derived; prose is snapshotted

Recorded as ADR 0005. The character stores which Class Features and Archetypes it has and the feature prose as read at selection; the pipeline resolves Effects from the catalog on every recalculation. Authoring reaches characters already built, with no migration and no opt-in errata flow. This amends issue #213's blanket snapshot pattern for the mechanics half only — the load-time Firestore merge that #213 removed stays removed, because resolution happens in the pipeline against already-loaded game data.

### Effects Status is a catalog property

A Class Feature carries an explicit status — modelled, none, or unmodelled — distinct from its **Verification Status**, which describes whether the prose matches the source book. The two were conflated by an empty `effects` array meaning both "nothing to apply" and "not built yet". Initial values are seeded from a scan of description text for numeric bonus language: the 1,112 whose prose promises a bonus become unmodelled, the 49 with Effects become modelled, the remainder none.

Because Effects are derived rather than snapshotted, this status lives only on the catalog. A character never records that a feature was unmodelled; it simply gains the bonus when the catalog learns it.

### Generated Effects apply while unverified

Recorded as ADR 0007. Effects are generated from each feature's own description, seeded with a review-pending verification status, and applied to the sheet immediately, with the breakdown marking the contribution unverified. Withholding them would keep a wrong number out of the sheet only by leaving the sheet wrong in the way this PRD exists to fix, and would make every character wait on a 1,112-entry review. Verification then follows real usage — players check the features their own characters use — rather than a queue ordered by class popularity.

Generation confidence varies by shape and the work should be sequenced accordingly: 428 features are flat and unconditional, 255 scale by level, 295 are conditional, and 139 are both. The formula evaluator already resolves level-scaling expressions and exposes per-class levels, so scaling requires no new pipeline capability.

### Feature Replacement becomes a structured reference

An Archetype's traded-away and altered features are currently prose strings. Of 515 distinct values, 286 resolve exactly to a real Class Feature, 413 resolve after stripping a parenthetical, and 102 never resolve — including outright corruption such as a bare comma. Worse, many parentheticals carry meaning rather than annotation: `Arcanist Exploits (3rd, 11th, 19th)` names which levels are replaced.

A Feature Replacement therefore becomes a structured reference naming the Class Feature, the levels it applies to where the trade is partial, and an optional note. Seeding fails when the named feature does not resolve against the parent class, so broken references surface at seed time rather than in a character sheet.

### Archetype conflicts are per Feature Instance and level-scoped

Recorded as ADR 0006. Two Archetypes conflict only when they claim the same **Feature Instance** — a Class Feature at a specific level — not merely the same Class Feature name. The **First Conflicting Level** is the lowest level at which they collide. Below it the combination is legal and silent; reaching it is what makes the character illegal, so the level-up is refused, naming both Archetypes and the contested feature. Comparing names alone would forbid legal builds.

Conflicts are permitted two ways: an explicit per-character override following the existing prerequisite-override precedent, and a per-campaign relaxation on the ruleset's optional rules, alongside the existing relaxed-entry flag.

### One archetype field

A class entry carries a single list of selected Archetypes, each with an id and a display name. This replaces both the existing plural string array and the singular id/name pair. The plural field was declared and read but never written, which silently gave Sacred Huntsmaster Inquisitors and Mad Dog Barbarians an animal companion effective level of zero — a bug this consolidation fixes as a side effect. Ids drive catalog lookup for derived Effects; names satisfy the snapshot-prose requirement so a character reads correctly without the catalog.

### Modules

- **Condition evaluator** — new, pure. Does this Effect apply to this character in this context?
- **Archetype resolver** — new, pure. Given a class entry and its Archetypes, the effective Class Feature set: base features minus Feature Replacements, plus archetype-granted features.
- **Archetype compatibility checker** — new, pure. Given several Archetypes, the conflicting Feature Instances and the First Conflicting Level.
- **Effect generator** — new, offline. Reads feature descriptions and proposes Effects for seeding. Not part of the runtime app.
- **Modifier pipeline** — modified. Carries conditions through resolution, consults the evaluator, and records provenance for the breakdown.
- **Seeding and validation** — modified. Structured Feature Replacements, Effects Status population, referential validation.
- **Character entry and level-up** — modified. Multi-archetype selection, conflict warnings, override, level-up guard.
- **Companion service** — modified. Migrated to the consolidated archetype field.

## Testing Decisions

A good test here states a rules outcome, not an implementation shape. It asserts that a Sacred Huntsmaster Inquisitor's companion advances, not that a particular function was called; that two Archetypes touching one feature at different levels are compatible, not that a map has two keys. All four new modules are pure functions over data, so none of them needs a rendered component or a Firestore double to test.

All four are tested.

**Condition evaluator.** Armor-dependent bonuses apply in light armor and unarmored, and do not apply in medium or heavy. Conditions that cannot be derived from the character fall back to the toggle rather than defaulting to applied — the current behaviour, where an unevaluated condition applies unconditionally, is the specific regression to lock out. Unknown condition types must not throw.

**Archetype compatibility checker.** Same feature at the same level conflicts; same feature at different levels does not; the First Conflicting Level is the lowest shared instance; a class with one Archetype never conflicts; a partial replacement naming levels is compared per level rather than per name. `Arcanist Exploits (3rd, 11th)` against `Arcanist Exploits (7th)` is the canonical compatible case and belongs in the suite by name.

**Archetype resolver.** Traded-away features are absent, archetype-granted features are present at their correct level, features untouched by the Archetype survive, and two Archetypes on one class compose. A Feature Replacement naming a feature that does not exist degrades without throwing, since the seed-time guard is the primary defence and the runtime should not crash a character sheet over it.

**Generated Effect output.** A golden-file suite over a fixed sample of descriptions: Nimble's prose yields a dodge bonus to AC scaling as `1 + floor((cavalierLevel - 9) / 4)`; a flat unconditional bonus yields a flat Effect; a description with no numeric bonus yields nothing rather than a guess. This suite is the guard against a generator change silently altering thousands of seeded Effects.

Prior art: the existing modifier pipeline suite covers stacking rules and equipment effect collection in the same style, and the Path of War trait data-integrity suite is the model for asserting seeded data shape.

## Sequencing and Dependencies

The work slices into parallel tracks, but four orderings are not preferences — breaking them ships a character sheet that is wrong in a new way. Any issue breakdown must preserve them.

**Condition evaluation lands before any conditional Effect is authored.** Today an Effect's condition is discarded, so a conditional Effect applies unconditionally. Seeding the 434 conditional features first would grant every one of those bonuses in circumstances the rules forbid — a regression, where the current state is merely an omission.

**Breakdown provenance lands before generated Effects are applied.** ADR 0007 accepts machine-generated rules data reaching a character sheet specifically because the contribution is visibly labelled unverified. Without that label the trade-off the ADR makes does not hold, and generated Effects must not be applied.

**Feature Replacement migration lands before seed-time validation is enforced.** 102 of 515 distinct replacement references do not resolve today. Turning on the referential guard first would fail the seed outright rather than surface the bad data.

**The archetype field consolidation lands before multi-archetype selection.** Selection writes to the consolidated list; building the UI against the old singular pair would need redoing, and the companion-service fix rides on the same migration.

Everything else is genuinely parallel. In particular the 428 flat, unconditional Effects depend on none of the above and can be generated and seeded immediately — they are the fastest path to a correct sheet for most characters, and they exercise the generator before the harder shapes reach it.

## Out of Scope

- The errata and update-notification flow that would let a player pull catalog changes into snapshotted prose. ADR 0005 removes the need for it for mechanics; prose updates remain a separate future concern, as issue #213 already noted.
- Model support for the Path of War traits tracked by issues #348, #349 and #350. They share the shape of this problem but concern traits rather than Class Features.
- The disconnect between character sheet HP and Play session HP tracked by issue #387. This PRD touches the same sheet-versus-session boundary and should not settle it.
- Giving every Class Feature a stable id. Feature Replacements reference features by name against the parent class, validated at seed time; an id migration across all 6,239 features is a larger change that this design does not require.
- The remaining seeding-integrity issues — #352, #353, #354, #384 — beyond the referential validation this PRD introduces for Feature Replacements.
- Backfilling Effects for the roughly 5,100 Class Features whose descriptions promise no numeric bonus. They are marked as having none and revisited only if that classification proves wrong.

## Further Notes

The original diagnosis in issue #362 was that class feature bonuses do not reach derived stats. That is the symptom, not the cause. The pipeline collects Class Feature Effects correctly and resolves level-scaling formulas correctly, including per-class level variables. What it does not do is honour conditions, and what the data does not do is exist. Anyone picking this up should not go looking for a missing calculation.

The `verificationStatus` field becomes load-bearing in the UI rather than remaining an administrative annotation. If the breakdown cannot distinguish a verified contribution from a generated one, the decision to apply unverified Effects is not safe and should be revisited.

The archetype data carries visible corruption beyond the unresolvable references — a bare comma as a replaced feature, and at least one entry reading `BAB (3/4 instead of 3/4)`. The seed-time validation introduced here will surface these; they need a human to decide what each was meant to say.

`CONTEXT.md` now documents two distinct contexts in one file: the workflow system and the character domain. If the character domain section grows much further it should move behind a `CONTEXT-MAP.md`.
