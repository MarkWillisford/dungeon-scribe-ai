# Class feature prose is snapshotted onto the character; its effects are derived at compute time

Issue #213 established that a selected class feature is snapshotted onto the character in full, so the catalog is never read at load time and a character cannot change under its owner. That is right for the _words_ — the player agreed to a specific ability text — but wrong for the _mechanics_: only 49 of 6,239 seeded class features currently carry `effects`, so snapshotting today freezes an empty array onto every character built before the data is authored. Kah-Mei would show no dodge bonus from Daring Champion's Nimble even after we author it.

So the two halves are split. The character stores which class features and archetypes it has plus the feature prose as read at selection; `ModifierPipelineService` resolves `Effect[]` from the catalog on every recalculation. Authoring a feature's effects therefore reaches every existing character with no migration and no opt-in errata flow.

This amends #213 rather than reversing it — the load-time Firestore merge it removed stays removed, because effect resolution happens in the pipeline against already-loaded game data, not as a read on the character load path.

## Consequences

- **Effects Status** (see `CONTEXT.md`) is a catalog property, not a character property. A character never records that a feature was unmodelled — it simply gains the bonus when the catalog learns it.
- Re-seeding can change a character's computed stats without changing its stored document. That is the intended behaviour, and it is the reason the prose stays snapshotted: the text a player read is stable even when the mechanics behind it are corrected.
- A character built against a since-renamed feature keeps working: the prose is local, and a failed catalog lookup costs the bonus, not the feature.
