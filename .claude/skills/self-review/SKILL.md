---
name: self-review
description: Pre-PR quality gate that reviews a branch using multiple independent agents, scores every issue found, and automatically fixes all issues scoring 50 or above — one commit per fix. Use when Mark says "self-review branch <name>", "run self-review", "review and fix", or any variation asking for automated inline fixes on a branch before opening a PR. Takes a branch name as the argument.
---

# self-review

Review the branch identified by the argument (a branch name), find all issues
scoring 50 or above, fix each one in the code, and commit each fix as a separate
commit on the branch. Do not post any GitHub comments or create a PR.

## Steps

1. Use a Haiku agent to validate the branch. Check that the branch exists and has
   at least one commit ahead of main with `git log main...<BRANCH> --oneline`. If
   the branch does not exist or has no commits ahead of main, stop.

2. Use a Haiku agent to find file paths of relevant CLAUDE.md files: the root
   CLAUDE.md and any CLAUDE.md in the directories whose files the branch modifies.
   Get the changed file list with `git diff main...<BRANCH> --name-only`.

3. Use a Haiku agent to summarise the branch: recent commit messages from
   `git log main...<BRANCH> --oneline`, the diff stat from
   `git diff main...<BRANCH> --stat`, and a concise summary of what logic changed.

4. Launch 4 parallel Sonnet agents to independently review the changes. Each agent
   should fetch the branch diff with `git diff main...<BRANCH>` and return a list
   of issues with reasons:
   - Agent 1 — CLAUDE.md compliance: audit the diff against every rule in the
     CLAUDE.md files found in step 2. Note: CLAUDE.md guides Claude writing code;
     not all rules apply during review.
   - Agent 2 — Obvious bugs: shallow scan of changed lines only. Focus on large
     logic errors. Ignore type errors, style, and likely false positives.
   - Agent 3 — Git history context: read git blame and recent log for the modified
     files, then identify bugs that only become visible with that historical context.
   - Agent 4 — Code comment compliance: read the full modified files, find any
     comments describing invariants or constraints, and check whether the branch
     changes violate them.

   (Note: prior-PR-comments review is skipped in branch mode — no PR exists yet.)

5. For each issue found across all 4 agents, launch a parallel Haiku agent to
   score it 0-100. Give each agent the branch name, the issue description, and the
   CLAUDE.md paths. The rubric (provide verbatim to each agent):
   - 0: False positive — does not stand up to scrutiny, or is pre-existing.
   - 25: Might be real but unverified. Stylistic issues not explicitly in CLAUDE.md.
   - 50: Verified real issue but minor or infrequent in practice.
   - 75: Verified, will be hit in practice, important. Directly impacts
     functionality or is explicitly called out in CLAUDE.md.
   - 100: Definitely real, happens frequently, evidence directly confirms it.
     Examples of false positives to include with each agent's prompt: pre-existing
     issues, things a linter or type-checker would catch, pedantic nitpicks, issues
     on lines not modified by the branch.

6. Discard any issue scoring below 50. If none remain, stop — no fixes needed.

7. For each qualifying issue (highest score first), launch a Sonnet agent to apply
   the fix. Provide the agent with: the issue description, the score, the affected
   file path(s), the relevant CLAUDE.md content, and the branch diff for context.
   The agent should:
   - Read the affected file(s).
   - Apply the minimal fix using the Edit tool.
   - Run `npm run typecheck` — if it fails, revise the fix until it passes.
   - If the fix touches a file covered by an existing test suite, run the relevant
     Jest test file with
     `node_modules/.bin/jest <path> --maxWorkers=1 --no-coverage`.
   - Stage and commit: `git add <files> && git commit -m "fix: <concise description>"`.
     One commit per issue. Do not batch multiple fixes into one commit.
     Run these fix agents sequentially — each commit must land before the next fix
     agent starts, so later agents see the updated file state.

## Notes

- Never post a GitHub comment or create a PR.
- Do not check build signal or attempt to build the full app.
- If a fix for one issue makes a later issue moot (the bug no longer exists after
  the first fix), skip it.
- The branch argument is the working branch name (e.g. `sandcastle/issue-42`).
  All `git diff` commands use `main...<BRANCH>` three-dot syntax so they diff from
  the common ancestor, not the tip of main.
- Use `--no-verify` only if lint-staged fails with an EIO error on WSL2 (per
  project memory); prefer a clean commit when possible.
