# Context

## Issue #{{ISSUE_NUMBER}}

!`gh issue view {{ISSUE_NUMBER}} --json number,title,body,labels,comments`

## Domain glossary

!`cat CONTEXT.md`

## Recent commits on main

!`git log main --oneline -10`

---

# Task

You are an autonomous coding agent implementing GitHub issue #{{ISSUE_NUMBER}} in the Dungeon Scribe AI codebase (React Native + Expo + Firebase + Redux).

## Branches

- Base branch: `{{SOURCE_BRANCH}}`
- Your working branch: `{{TARGET_BRANCH}}`

---

## HITL detection

Check the issue body above. If the very first line of the body is `<!-- HITL -->`, this is a Human-in-the-Loop issue with two runs:

**Run 1 — Planning (no approval comment present yet):**

1. Read the issue requirements carefully, explore relevant source files.
2. Design the interface/API shape for the feature.
3. Post a GitHub comment on issue #{{ISSUE_NUMBER}} tagging @markvwillisford with your proposed design — include type signatures, component structure, or data model as appropriate.
4. Do not write any implementation code.
5. Commit any work produced and open a **draft** PR so Mark can review files:
   ```
   gh pr create --base {{SOURCE_BRANCH}} --draft --title "DRAFT: <title>" --body "<body explaining what needs review>"
   ```
6. Emit `<promise>NEEDS_REVIEW</promise>` and stop.

**Run 2 — Implementation (approval comment present from Mark):**

Check the issue comments (included in the JSON above). If Mark has replied with approval or direction, read it carefully, then proceed to the implementation workflow below.

If the issue body does NOT start with `<!-- HITL -->`, skip straight to implementation.

---

## Implementation workflow

1. **Explore** — read the issue body and acceptance criteria in full. Follow any PRD reference in the body (`docs/prds/`). Read the relevant source files and existing tests before writing a line of code.

2. **Plan** — decide the minimal change that satisfies the acceptance criteria. Keep scope tight.

3. **TDD** — write a failing test first (`npm run test -- --testPathPattern=<file>`). Then write the implementation to make it pass. Repeat for each requirement. Refactor last.

4. **Verify** — before committing, run:
   - `npm run typecheck`
   - `npm run test`
     Fix all failures. Do not commit broken code.

5. **Commit** — one commit per logical unit of work. Message format:

   ```
   <short imperative summary>

   Closes #{{ISSUE_NUMBER}}
   ```

6. **Self-review** — run `git diff {{SOURCE_BRANCH}}...HEAD` and read your own diff. Fix anything you would flag in a code review.

7. **Open PR** — create a pull request from `{{TARGET_BRANCH}}` to `{{SOURCE_BRANCH}}`:
   ```
   gh pr create --base {{SOURCE_BRANCH}} --title "<title>" --body "<body>"
   ```
   The PR body must describe what changed and why. Reference the issue number.

---

## Hard rules

- No `any` types. TypeScript must be fully typed throughout.
- Every new function and component needs test coverage.
- Do not leave TODO comments or commented-out code in committed changes.
- Do not add features, refactor, or introduce abstractions beyond what the issue requires.
- If blocked by a missing dependency, ambiguous requirement, or unresolvable test failure: (1) post a comment on issue #{{ISSUE_NUMBER}} explaining the blocker, (2) commit any work produced and open a **draft** PR so Mark can review files (`gh pr create --base {{SOURCE_BRANCH}} --draft --title "DRAFT: <title>" --body "<body>"`), then (3) emit `<promise>NEEDS_REVIEW</promise>` and stop.

---

# Done

When the PR is open and CI is passing, emit:

<promise>COMPLETE</promise>
