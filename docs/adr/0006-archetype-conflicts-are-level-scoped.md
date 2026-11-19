# Archetype conflicts are evaluated per feature instance and scoped to level

Pathfinder allows a class to carry several archetypes as long as they do not replace or alter the same class feature. The obvious reading — compare the archetypes' replaced-feature names — is wrong in two ways, and both were found in the seeded data.

First, the unit of conflict is a **Feature Instance** (a class feature at one level), not a class feature. `'Arcanist Exploits (3rd, 11th)'` and `'Arcanist Exploits (7th)'` name one feature but claim different instances, and stack legally. Comparing names would forbid a legal build.

Second, a conflict has a level at which it first applies. Two archetypes whose earliest shared Feature Instance is 5th are a legal combination for a character with four levels in that class. So conflict is not a property of the pair — it is a property of the pair _at a given class level_. The app computes the first conflicting level and only objects once the character reaches it, which is also why taking that level is the action that gets blocked rather than the archetype selection.

Conflicts at or above that level are permitted two ways: an explicit per-character override, following the existing `prereqOverride` precedent, or a per-campaign relaxation on the ruleset's `optionalRules`, alongside `relaxedEntry`.

## Consequences

- `replacedFeatures` / `modifiedFeatures` must carry levels, not prose. This is what forces the structured Feature Replacement shape rather than the current strings.
- A legal character can be made illegal by advancement alone, so the check belongs on the level-up path and not only on archetype selection.
