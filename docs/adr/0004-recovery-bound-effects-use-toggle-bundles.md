# Recovery-bound effects use the toggle bundle pattern, not a dedicated activation type

Some initiating class features are mechanically active only during the recovery action (e.g. Warder's Defensive Focus: threatened-area expansion and +CMD while taking the full-round recovery action, expiring at the start of the next turn). The question was whether to model this with a new `recovery_action` activation type, an `isRecovering` boolean on Character, or some other mechanism.

We use the plain toggle bundle pattern — the same shape as Power Attack. The player toggles the feature on when initiating recovery and off at the start of their next turn. The timing rule lives in the feature description; the table enforces it.

## Considered options

- **`recovery_action` activation type** — would require the pipeline to know when a recovery action is in progress, introducing combat-time state into a pure stat calculator.
- **`isRecovering` on Character** — same problem: adds a combat-state flag the pipeline would have to read, coupling it to turn-order semantics it currently has no concept of.
- **`recoveryHook` on ClassFeatureData** — bolt-on field with no clear pipeline consumer; just defers the same problem.
- **Toggle bundle (chosen)** — zero new machinery. The pipeline already handles mixed-activation effect arrays (passive effects pass through unconditionally; toggled effects gate on `activation.active`). The player owns the toggle state exactly as they own Power Attack.

## Consequences

The combat panel should offer a convenience: clicking the "Recover Maneuvers" button auto-activates any recovery-bound toggles on the character and queues their deactivation at the start of the next turn. This is a UI concern, not a pipeline concern, and does not change the data shape.
