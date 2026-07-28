---
name: bug-filing
description: File a Dungeon Scribe AI bug as a GitHub issue with automatic label pre-triage. Use when Mark describes a DS AI bug in conversation — Amber analyzes the description, proposes `bug` (Automated Track) or `sandcastle` (Local Track) label with one-line reasoning, waits for Mark's confirmation, then creates the issue.
---

# Bug Filing

File a DS AI bug as a GitHub issue with Automated vs Local Track pre-triage.

## Process

### 1. Understand the bug

Work from what Mark has described in conversation. Do not proceed if the description sounds like a feature request rather than a bug — redirect to `/grill-with-docs` instead.

Before proposing a label, gather anything that's missing and would genuinely help the fixing agent. Ask about:

- **Reproduction steps** — if Mark didn't provide them and the bug isn't self-evidently obvious (e.g. a typo), ask. The fixing agent will need steps to write a regression test. Keep the ask tight: "What steps trigger it?" is enough.
- **Expected vs actual behavior** — if it's not clear from the description what *should* happen, ask.
- **Scope signals** — if it's unclear whether the bug is isolated or touches multiple areas, a quick question here can inform the label call.

Cap at two clarifying questions maximum. If you still don't have enough after two, proceed with what you have and note the uncertainty in the issue body.

Read `~/dungeon-scribe-ai/CONTEXT.md` for domain vocabulary. If scope is still ambiguous after clarifying, do a quick targeted read of the most likely affected area of the codebase before calling the label — don't guess.

### 2. Propose a label

**Default: `bug`** (Automated Track — GitHub Actions picks it up, no human involvement until PR is open)

Propose `sandcastle` (Local Track) if the description clearly implies any of:
- The fix will require changes to more than 3 files
- The bug spans multiple subsystems (e.g. Firebase + Redux, UI + service layer, navigation + state)
- Reproduction is ambiguous or environment-dependent, making automated test verification unreliable
- The bug involves live data from Firestore — empty selectors, missing options, collections not loading, or any symptom where the data source is the likely culprit. The Automated Track has no Firestore access; these bugs cannot be reproduced or tested in CI.

Present the proposal before creating anything:

> **Label: `bug`** — [one-line reason]
>
> Ready to file. Confirm or say `sandcastle` to override.

### 3. Wait for confirmation

Do not create the issue until Mark confirms or overrides the label. "Yes", "go ahead", or "file it" all count as confirmation.

### 4. Write the issue body

Use the Write tool to write the issue body to `/tmp/bug-issue.md`:

```
## What to build

[Concise description of the fix. What is the expected behavior? What is actually happening? End-to-end framing — not layer by layer.]

## Steps to reproduce

1. [Step]
2. [Step]

(Omit this section if Mark did not provide steps)

## Acceptance criteria

- [ ] Bug no longer reproduces under described conditions
- [ ] Existing tests pass
- [ ] [Any edge case specific to this bug]

## Blocked by

None — can start immediately
```

**Shared-mechanism bugs — two required elements:**

When the bug involves a system where multiple entities share a common code path (class features, racial traits, feat slots, equipment effects, skill bonuses, etc.), the issue body must include both:

1. **A concrete repro case.** Pick one specific entity as the test anchor — not because it's the only affected entity, but because the fixing agent needs a single failing test to write. Example: "Fighter level 1 should produce 1 bonus feat slot labeled 'Fighter Bonus'." This becomes the regression test. Name the entity, the level, and the expected output explicitly.

2. **A scope constraint.** Immediately after the repro case, state that the fix must work through the shared mechanism, not by special-casing the example entity. Example: "The fix must work through the general feat slot computation, not by adding a Fighter-specific branch. All classes that grant bonus feats (Fighter, Ranger, Wizard, etc.) use the same path." This prevents the agent from writing a hardcoded patch that passes the test but misses the real fix.

Without the scope constraint, an agent given only a concrete example will often implement the narrowest passing solution. Without the concrete example, an agent given only a general description cannot write a specific failing test. Both are required.

### 5. Create the issue

If the two-question cap was reached and uncertainty about scope or reproduction remains, add `needs-context` as a second label alongside the routing label. Note the specific uncertainty in the "What to build" section of the issue body.

```bash
gh issue create \
  --title "[concise bug title]" \
  --label "[confirmed label]" \
  --label "needs-context" \
  --body-file /tmp/bug-issue.md
```

(Omit `--label "needs-context"` if the issue is well-understood.)

**Rules:**
- Do NOT assign a milestone — bugs are reactive, not part of planned feature work
- Do NOT use `--body` inline — always write to `/tmp/bug-issue.md` first to avoid heredoc/backtick conflicts
- Routing label is exactly `bug` or `sandcastle` — no other values
- The `bug` label is a default GitHub label. The `sandcastle` and `needs-context` labels must already exist in the repo (created as part of workflow setup prerequisites)

Show Mark the issue URL when done.
