---
name: self-review
description: Review an open pull request using multiple independent agents, score every issue found, and automatically fix all issues scoring 50 or above — one commit per fix. Use when Mark says "self-review PR #N", "run self-review on this PR", "review and fix", or any variation asking for automated inline fixes rather than a GitHub comment. Takes a PR number as the argument.
---

# self-review

Review the open pull request identified by the argument (a PR number), find all issues
scoring 50 or above, fix each one in the code, and commit each fix as a separate commit.
Do not post any GitHub comments.

## Steps

1. Use a Haiku agent to check if the pull request (a) is closed, (b) is a draft, or
   (c) does not need review (automated PR, trivially simple). If so, stop.

2. Use a Haiku agent to find file paths of relevant CLAUDE.md files: the root CLAUDE.md
   and any CLAUDE.md in the directories whose files the PR modifies.

3. Use a Haiku agent to fetch and summarise the PR: title, body, files changed, and a
   concise summary of what logic changed.

4. Launch 5 parallel Sonnet agents to independently review the changes. Each agent should
   fetch the PR diff with `gh pr diff <PR> --repo <owner>/<repo>` and return a list of
   issues with reasons:
   - Agent 1 — CLAUDE.md compliance: audit the diff against every rule in the CLAUDE.md
     files found in step 2. Note: CLAUDE.md guides Claude writing code; not all rules
     apply during review.
   - Agent 2 — Obvious bugs: shallow scan of changed lines only. Focus on large logic
     errors. Ignore type errors, style, and likely false positives.
   - Agent 3 — Git history context: read git blame and recent log for the modified files,
     then identify bugs that only become visible with that historical context.
   - Agent 4 — Prior PR comments: find previous PRs that touched the same files, check
     their review comments, and flag any that also apply to the current change.
   - Agent 5 — Code comment compliance: read the full modified files, find any comments
     describing invariants or constraints, and check whether the PR violates them.

5. For each issue found across all 5 agents, launch a parallel Haiku agent to score it
   0-100. Give each agent the PR number, the issue description, and the CLAUDE.md paths.
   The rubric (provide verbatim to each agent):
   - 0: False positive — does not stand up to scrutiny, or is pre-existing.
   - 25: Might be real but unverified. Stylistic issues not explicitly in CLAUDE.md.
   - 50: Verified real issue but minor or infrequent in practice.
   - 75: Verified, will be hit in practice, important. Directly impacts functionality or
     is explicitly called out in CLAUDE.md.
   - 100: Definitely real, happens frequently, evidence directly confirms it.
     Examples of false positives to include with each agent's prompt: pre-existing issues,
     things a linter or type-checker would catch, pedantic nitpicks, issues on lines not
     modified by the PR.

6. Discard any issue scoring below 50. If none remain, stop — no fixes needed.

7. For each qualifying issue (highest score first), launch a Sonnet agent to apply the
   fix. Provide the agent with: the issue description, the score, the affected file
   path(s), the relevant CLAUDE.md content, and the PR diff for context. The agent
   should:
   - Read the affected file(s).
   - Apply the minimal fix using the Edit tool.
   - Run `npm run typecheck` — if it fails, revise the fix until it passes.
   - If the fix touches a file covered by an existing test suite, run the relevant Jest
     test file with `node_modules/.bin/jest <path> --maxWorkers=1 --no-coverage`.
   - Stage and commit: `git add <files> && git commit -m "fix: <concise description>"`.
     One commit per issue. Do not batch multiple fixes into one commit.
     Run these fix agents sequentially — each commit must land before the next fix agent
     starts, so later agents see the updated file state.

## Notes

- Never post a GitHub comment on the PR.
- Do not check build signal or attempt to build the full app.
- If a fix for one issue makes a later issue moot (the bug no longer exists after the
  first fix), skip it.
- Use `--no-verify` only if lint-staged fails with an EIO error on WSL2 (per project
  memory); prefer a clean commit when possible.
