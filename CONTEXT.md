# Dungeon Scribe AI — Workflow Context

## Guiding Principle

The workflow system exists to **minimise interruptions to Mark's focused time**. Everything in this document is in service of moving from intent to open PR with the fewest context switches possible. Speed is a byproduct, not the goal.

---

## Core Concepts

### GitHub Issue

The canonical unit of work. Every task — whether born from a feature PRD or a bug report — is represented as a GitHub issue. The issue is also the branch point: its label determines which execution environment picks it up.

### Label

The routing mechanism. The label on a GitHub issue determines which track executes it. It is not a semantic distinction between bugs and features — it is an execution environment selector.

### Automated Track

Issues labeled `bug`. Picked up by GitHub Actions on a hosted runner. No human involvement until the PR is open. Designed for well-scoped, self-contained fixes.

### Local Track

Issues labeled `sandcastle`. Picked up by the polling script, executed locally via Sandcastle. Used for anything requiring more context, iteration, or judgment — including feature slices from a PRD and complex bugs that exceed automated track scope.

### Implementation Plan

Mark's steering layer. Lives above the workflow system. The implementation plan produces PRDs (via `to-prd`), which produce GitHub issues (via `to-issues`). Not a workflow artifact.

### PRD (Product Requirements Document)

The output of a `to-prd` session. Defines scope and acceptance criteria for a feature. Consumed by `to-issues` to produce a set of vertical, agent-executable GitHub issues labeled for the Local Track.

---

### Self-Escalation

When the Automated Track agent hits one of these triggers, it stops, relabels the issue `sandcastle`, and exits cleanly. The polling script picks it up on the next cycle.

**Escalation triggers** _(under observation — adjust as patterns emerge)_:

1. Fix requires modifying more than 3 files
2. Tests cannot pass after 2 fix attempts

> Note: shared infrastructure changes (types, store slices) are intentionally NOT a trigger. A scoped 1-file type fix is well within automated track capability. Rule 1 catches the genuinely complex cases.

### Bug Filing

Mark reports bugs to Amber in conversation. Amber analyzes the description and the codebase, proposes `bug` or `sandcastle` with a one-line reason, and creates the GitHub issue with the full template applied. Mark confirms the label or overrides. No manual GitHub issue creation required.

### Amber Pre-Triage

When Mark reports a bug, Amber proposes `bug` or `sandcastle` with a one-line reason before creating the issue. Default is `bug`. Escalation is proposed when the description clearly implies multi-file scope or ambiguous reproduction. Mark confirms or overrides.

### PR Review Routing

**Local Track PRs**: the initiator (almost always Mark) receives the first notification, does a review pass, then tags the other person.

**Automated Track PRs**: no human initiated it, so a rotation file determines the reviewer. GitHub Actions reads `.claude/reviewer-rotation.json` (`{ "next": "mark" }` or `{ "next": "doug" }`), assigns that person as reviewer, then writes the opposite name back. Simple flip on every automated PR.

Stale PR nudging is deferred -- build it when it's actually a problem.

### Milestone

A GitHub milestone groups all issues produced from a single PRD under one progress container. `to-issues` creates the milestone automatically (named after the PRD) and assigns every generated issue to it. The milestone progress bar is the live status of a feature in flight. Bug issues are not assigned to milestones -- they are reactive, not part of planned feature work.

### Sandcastle

The execution framework for the Local Track. Runs agents in isolated Docker sandboxes on the server, one per issue. Handles worktree creation, `.env` copy (`copyToWorktree`), `npm install` (`onSandboxReady` hook), multi-run patterns, and structured completion signals. Replaces `new-worktree` for automated execution. `new-worktree` remains for human-initiated branch work.

**HITL support via `createSandbox()` multi-run:**

- Run 1 (planning): agent proposes interface design, posts GitHub comment, emits `<promise>NEEDS_REVIEW</promise>`, stops
- Polling script detects `sandcastle-architecture-review` label, polls GitHub for Mark's reply
- Run 2 (implementation): agent reads approval from issue comments, continues on the same branch

**Interactive HITL via `wt.interactive()`:**

- Mark opens a live session in the worktree, designs the interface with Claude directly
- AFK agent runs on the same worktree to implement

**Prompt design**: The prompt file (`.sandcastle/prompt.md`) uses Sandcastle's `!`command``syntax to pull dynamic context at run time -- issue body, git log, CONTEXT.md. The polling script passes only`ISSUE_NUMBER`via`promptArgs`. `{{SOURCE_BRANCH}}`and`{{TARGET_BRANCH}}` are injected automatically. HITL and AFK both use TDD -- the HITL flag in the issue body tells the agent whether to post for approval or proceed straight to implementation.

**Completion signals**: `["<promise>COMPLETE</promise>", "<promise>NEEDS_REVIEW</promise>"]`. The polling script checks `result.completionSignal` to distinguish a finished run from a HITL pause.

**Starting template**: `sequential-reviewer` ("implements issues one by one, with a code review step after each") is the closest built-in template to our Local Track flow. Use as the scaffold for `.sandcastle/main.ts`.

> **Prerequisite**: Sandcastle not yet installed. Run `npm install --save-dev @ai-hero/sandcastle && npx sandcastle init` in DS AI repo.

### Polling Script

Written in TypeScript, lives at `.sandcastle/main.ts` (Sandcastle's natural entry point). Runs on the server. Watches the DS AI GitHub repo for issues labeled `sandcastle`. When it finds one, hands it to Sandcastle for execution. The `sandcastle` label is the intent signal -- labeling an issue is how Mark (or Amber) says "work this." No manual start required; works from anywhere.

> **Prerequisite**: Docker must be installed on the server (single command, not yet done).

### Self-Review

A pre-PR quality gate that runs on the working branch before any PR is created. Uses `git diff main...HEAD` instead of a PR diff. Finds issues, scores them, and auto-fixes anything scoring 50+. PR creation is the "done" signal -- not the starting point.

> **Build task**: modify the `self-review` skill to accept a branch name instead of a PR number. Skip agent 4 (prior PR comments) when running in branch mode -- no PR exists yet.

---

## Post-PR Segment

Applies to every PR regardless of origin (Automated Track or Local Track).

### CI Gate

Tests (Jest) and lint (ESLint) must pass before any review activity begins.

### AI Reviewer

A GitHub Actions workflow that leaves inline comments like a senior engineer. DS AI-specific -- reads CLAUDE.md, knows the stack (React Native + Expo + Firebase + Redux), enforces the `any` typing hard rule, and applies DS AI test patterns from `tdd/tests.md`. Lives in two files:

- `.github/workflows/ai-reviewer.yml` -- trigger logic and concurrency rules
- `.github/prompts/ai-reviewer.md` -- the full reviewer instructions and criteria

Writes back to GitHub via `gh api` using the automatically-provided `GITHUB_TOKEN`. Fires when:

- **First pass**: PR leaves draft state + CI green
- **Subsequent passes**: new commits pushed + PR not in draft + CI green

Uses `concurrency: cancel-in-progress: true` scoped to the PR number -- if a new commit lands mid-run, the current review is cancelled and restarted from latest state.

Author controls the loop pace: putting the PR back to draft pauses the reviewer. Marking ready resumes it.

**Review criteria** (non-exhaustive):

- Logic errors and edge cases
- `any` typing (never acceptable as a shortcut)
- Tests that don't verify what the author thinks they verify
- Unused variables and dead code
- Overengineered solutions
- Security vulnerabilities -- exposed secrets, missing auth checks, unvalidated input
- Error handling -- swallowed errors, unhandled promise rejections, silent catch blocks
- Race conditions -- async interleaving, stale closures, missing `useEffect` cleanup
- Missing null/undefined guards
- Dependency array correctness (`useEffect`, `useCallback`, `useMemo`)
- Performance -- unnecessary re-renders, Firestore N+1 patterns, missing memoization
- Misleading or inconsistent naming
- Drift from established codebase patterns
- Oversized components that should be split
- Breaking interface changes affecting callers outside the PR
- Outdated or lying comments

### Review Loop

1. AI reviewer leaves inline comments, requests changes
2. Author pushes fixes (one or two per commit by preference)
3. AI reviewer re-runs automatically (if PR not in draft)
4. Loop repeats until AI reviewer is satisfied OR human overrides (manually resolves comments)
5. AI reviewer satisfied → assigns human reviewer (rotation file for automated PRs, initiator-then-other for local track), steps back
6. Human reviews → approves or requests changes → author responds → merge

---

## Workflow Tracks

|               | Automated Track             | Local Track                    |
| ------------- | --------------------------- | ------------------------------ |
| **Label**     | `bug`                       | `sandcastle`                   |
| **Trigger**   | GitHub Actions webhook      | Polling script                 |
| **Execution** | GitHub-hosted runner        | Local Sandcastle               |
| **Scope**     | Well-scoped, self-contained | Complex, iterative, or planned |
| **Origin**    | Bug reports                 | PRD issues or escalated bugs   |

---

## Character Domain Language

> Everything above describes the **workflow system**. This section describes the
> **Pathfinder character model** — a separate context that happens to share the
> repo. If it grows much further it should move to its own `CONTEXT.md` behind a
> `CONTEXT-MAP.md`.

### Language

**Class Feature**:
An ability a class grants at a given level.
_Avoid_: class ability, class perk

**Effect**:
A machine-readable statement of what a Class Feature does to a derived stat.
_Avoid_: modifier, bonus (a bonus is one **kind** of Effect)

**Effects Status**:
Whether a Class Feature's mechanics have been expressed as **Effects** yet —
`modelled`, `none` (genuinely nothing to apply), or `unmodelled` (owed work).
_Avoid_: implemented, wired

**Verification Status**:
Whether a Class Feature's _prose_ has been checked against its source book.
Orthogonal to **Effects Status**.
_Avoid_: validated, confirmed

**Archetype**:
A named variant of a class that trades listed Class Features for its own.
_Avoid_: subclass, specialization, variant

**Feature Replacement**:
A structured reference naming the Class Feature an **Archetype** trades away and,
where the trade is partial, the levels it applies to.
_Avoid_: replacedFeatures string, swap

**Feature Instance**:
A Class Feature at one specific level. Two **Archetypes** conflict only when they
claim the same Feature Instance, not merely the same Class Feature.
_Avoid_: feature slot

**First Conflicting Level**:
The lowest class level at which two **Archetypes** claim the same **Feature
Instance**. Below it the combination is legal; reaching it is what makes a
character illegal, so it is the level-up that is refused, not the selection.
_Avoid_: incompatible, conflicting archetypes (without a level)

### Relationships

- A **Class Feature** carries zero or more **Effects**
- A **Class Feature** has exactly one **Effects Status** and one **Verification Status**
- An **Archetype** replaces named **Class Features** and contributes its own
- A class entry may carry more than one **Archetype**, if none replace the same **Class Feature**

### Flagged ambiguities

- **"verified" vs "modelled"** — used interchangeably; resolved as two independent
  axes. A Class Feature can be `verified` prose with `unmodelled` mechanics, which
  is the state of ~1,112 features whose description promises a numeric bonus their
  **Effects** do not deliver.
- **`effects: []` was overloaded** — it meant both "nothing to apply" and "not built
  yet." Resolved: **Effects Status** carries that distinction; an empty array alone
  no longer implies either.
- **Archetype cardinality** — `ClassEntry` carried both `archetype?: string[]` and
  `archetypeId`/`archetypeName`. Resolved: a single `archetypes: {id, name}[]`. The
  plural field was never written, which silently gave Sacred Huntsmaster Inquisitors
  and Mad Dog Barbarians an animal-companion effective level of 0.
- **"replaces the same feature"** — read as same Class Feature name; resolved as same
  **Feature Instance**. `'Arcanist Exploits (3rd, 11th)'` and `'Arcanist Exploits (7th)'`
  touch one Class Feature but different Feature Instances, and are compatible.
