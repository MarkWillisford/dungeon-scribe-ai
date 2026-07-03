# PRD: AI-Assisted Development Workflow System

## Problem Statement

Mark is building Dungeon Scribe AI with part-time help from Doug. As the codebase grows, the cognitive overhead of context-switching between planning, implementation, and review is the primary bottleneck. Bugs go unfiled because filing them is friction. Features require Mark to be at his desk to make progress. Code review is inconsistent or skipped entirely. The development process does not scale to the ambition of the project, and every interruption to focused time compounds the problem.

## Solution

A two-track workflow system where GitHub issues are the canonical unit of work. The label on an issue determines which execution environment handles it. The Automated Track handles well-scoped bugs via GitHub Actions with no human involvement until a PR is open. The Local Track handles features and complex bugs via Sandcastle running on the server, triggered by labeling an issue. Every PR passes through an AI reviewer before human review. Mark's involvement is scoped to: reporting bugs to Amber, steering features via grill-with-docs sessions, approving issue breakdowns from to-issues, responding to HITL architecture checkpoints, and doing final human PR review.

## User Stories

1. As Mark, I want to report a bug in natural language to Amber so that a correctly labeled GitHub issue is created without me touching GitHub directly.
2. As Mark, I want Amber to propose whether a bug should go to the Automated or Local Track so that I don't have to make that routing decision manually every time.
3. As Mark, I want simple bugs to be automatically fixed and submitted as PRs so that I never have to context-switch into fixing trivial issues.
4. As Mark, I want the automated agent to self-escalate when a bug is more complex than expected so that nothing gets stuck or silently fails.
5. As Mark, I want feature ideas to flow from a grill-with-docs conversation to a PRD to GitHub issues without manual reformatting so that planning sessions produce immediate, executable output.
6. As Mark, I want PRDs stored as files in the repo so that they are version-controlled and not confused with executable work items in the issue tracker.
7. As Mark, I want to-issues to automatically create a GitHub milestone for each PRD so that I can see feature progress at a glance without any extra setup.
8. As Mark, I want every issue generated from a PRD to be labeled `sandcastle` automatically so that the polling script picks them up without manual labeling.
9. As Mark, I want HITL issues to pause and post their proposed interface design as a GitHub comment so that I can approve or redirect before implementation begins.
10. As Mark, I want to resume a paused HITL issue by responding to a GitHub comment so that I can provide architectural input asynchronously from anywhere.
11. As Mark, I want the self-review quality gate to run on the branch before any PR is created so that GitHub Actions does not trigger on a partially-reviewed state.
12. As Mark, I want every PR to receive an AI code review that leaves inline comments like a senior engineer so that issues are caught before Doug or I spend time on them.
13. As Mark, I want the AI reviewer to know the DS AI codebase, stack, and conventions specifically so that the review catches DS AI-specific problems, not just generic issues.
14. As Mark, I want the AI reviewer to re-run automatically when I push fixes so that the feedback loop is tight without requiring manual re-requests.
15. As Mark, I want to pause the AI review loop by putting a PR back into draft so that I can work through a batch of fixes at my own pace without the reviewer firing mid-work.
16. As Mark, I want automated PRs assigned to me and Doug in rotation so that review load is distributed without coordination overhead.
17. As Mark, I want Local Track PRs assigned to me first (as the initiator) so that I can verify the agent's work before Doug spends time on it.
18. As Doug, I want PRs to arrive for my review only after the AI reviewer is satisfied so that I am not reviewing code that has obvious, catchable problems.
19. As Doug, I want PR descriptions to clearly describe what changed and why so that I can review without needing context from Mark.
20. As Doug, I want to see milestone progress bars on GitHub so that I know where a feature stands without asking Mark.

## Implementation Decisions

### Canonical Unit of Work

A GitHub issue is the single canonical unit of work. Every task — whether born from a bug report or a PRD — is represented as a GitHub issue. The issue is also the routing branch point: its label determines which execution environment picks it up.

### Label as Execution Environment Selector

The label on an issue is not a semantic distinction between bugs and features. It is an execution environment selector. `bug` routes to the Automated Track. `sandcastle` routes to the Local Track. The distinction between a bug and a feature is upstream context; the label is downstream routing.

### Automated Track

Triggered by the `bug` label via `on: issues: types: [labeled]` in GitHub Actions. Claude runs via `claude-code-action@v1` on a GitHub-hosted runner. The agent reads the issue, explores the codebase, writes a fix, and runs tests. Self-escalation triggers (relabels to `sandcastle` and exits): fix requires modifying more than 3 files, or tests cannot pass after 2 attempts. These thresholds are under observation and should be adjusted as real patterns emerge.

### Local Track

Triggered by the `sandcastle` label. A TypeScript polling script at `.sandcastle/main.ts` watches the GitHub repo for `sandcastle`-labeled issues. On pickup, it relabels the issue `sandcastle-in-progress` and calls Sandcastle's `run()`. Sandcastle uses Docker sandboxes on the server, one per issue, with the `sequential-reviewer` template as the starting scaffold.

### Self-Review (Pre-PR Quality Gate)

Self-review runs on the working branch before any PR is created, using `git diff main...HEAD` instead of a PR diff. The existing `self-review` skill requires modification: accept a branch name instead of a PR number, and skip agent 4 (prior PR comments) since no PR exists yet. PR creation is the "done" signal, not the starting point.

### HITL Issues

Issues flagged as HITL by `to-issues` use Sandcastle's `createSandbox()` multi-run pattern. Run 1 (planning): agent proposes interface design, posts a GitHub comment tagging Mark, emits `<promise>NEEDS_REVIEW</promise>`, and stops. The polling script detects the `sandcastle-architecture-review` label and skips the issue on future cycles. When Mark replies and relabels to `sandcastle`, Run 2 (implementation) starts on the same sandbox and branch. Both HITL and AFK issues use TDD — the difference is whether the TDD planning phase requires a human checkpoint.

### Sandcastle Prompt Design

The prompt file at `.sandcastle/prompt.md` uses Sandcastle's dynamic context syntax to pull issue body, git log, and CONTEXT.md at run time. The polling script passes only `ISSUE_NUMBER` via `promptArgs`. `SOURCE_BRANCH` and `TARGET_BRANCH` are automatically injected by Sandcastle. Completion signals: `COMPLETE` and `NEEDS_REVIEW`.

### PRD Storage

PRDs are written to `docs/prds/<slugified-title>.md`. They are planning documents, not executable work items, and must not appear in the GitHub issue tracker. `to-issues` reads a PRD file by path argument.

### Milestone Creation

`to-issues` automatically creates a GitHub milestone named after the PRD and assigns every generated issue to it. Bug issues are not assigned to milestones — they are reactive, not part of planned feature work.

### to-issues Modifications

AFK issues are labeled `sandcastle` automatically at publish time. HITL issues include a `<!-- HITL -->` flag in the issue body so the Sandcastle agent can detect them at run time. `to-issues` creates the milestone before publishing issues so real issue IDs can be referenced in Blocked-by fields.

### AI Reviewer

A GitHub Actions workflow at `.github/workflows/ai-reviewer.yml` with the prompt at `.github/prompts/ai-reviewer.md`. DS AI-specific: reads `CLAUDE.md`, knows the stack (React Native + Expo + Firebase + Redux), treats `any` typing as a hard failure, and applies DS AI test patterns from `tdd/tests.md`. Fires on `ready_for_review` event (first pass) and `synchronize` event when PR is not in draft (subsequent passes). Uses `concurrency: cancel-in-progress: true` scoped to the PR number to avoid reviewing stale state. Writes inline comments via `gh api` using the automatically-provided `GITHUB_TOKEN`.

### PR Review Routing

Automated Track PRs: reviewer assigned from `.claude/reviewer-rotation.json` (`{ "next": "mark" }` or `{ "next": "doug" }`), flipped after each assignment. Local Track PRs: initiator (Mark) reviews first, then tags the other person. Stale PR nudging is deferred.

## Testing Decisions

The modules introduced by this feature are infrastructure and configuration: GitHub Actions YAML, prompt files, and the Sandcastle polling script. These are verified through integration — running the workflow end-to-end — rather than unit tests. The polling script (`.sandcastle/main.ts`) is treated as infrastructure and tested manually.

No new Jest test files are required for this feature. The existing test suite continues to cover all production application code.

## Out of Scope

- Stale PR nudge automation (deferred — build when it is actually a problem)
- HITL interactive mode via `wt.interactive()` (deferred)
- Parallel planner template for running multiple issues simultaneously (deferred)
- `pr-status` skill update for agent-authored PRs (deferred)
- External user bug reporting and triage
- Automated deployment post-merge

## Further Notes

**Prerequisites before any Local Track execution:**

- Docker must be installed on the server: `sudo apt-get install docker.io`
- GitHub labels must be created: `sandcastle`, `sandcastle-in-progress`, `sandcastle-architecture-review`, `sandcastle-done`
- `.claude/reviewer-rotation.json` must be seeded: `{ "next": "mark" }`
- Sandcastle must be installed: `npm install --save-dev @ai-hero/sandcastle && npx sandcastle init` (choose `sequential-reviewer` template, Docker provider)

**Self-escalation thresholds are under observation.** The 3-file and 2-attempt limits are starting points. Adjust based on real failure patterns as the Automated Track accumulates runs.

**The workflow is designed to grow.** The Automated Track handles simple cases today. As confidence in the agent's output builds, the definition of "simple" can expand and thresholds can relax.

**Automated Track agent logs — where to find them:**

Two log surfaces exist for every Fix agent run:

1. **GitHub Actions step log** (primary). The "Fix agent (TDD loop)" step streams the full agent conversation — every tool call, file read, test run, and reasoning step — directly to the Actions log. Find it at: `Actions → automated-track run → Fix agent (TDD loop)`. Retained 90 days by GitHub's default log retention policy.

2. **Structured JSON artifact** (secondary). After each run, the workflow uploads `claude-execution-output.json` as an artifact named `agent-log-issue-<N>-run-<run_id>`. This contains the full structured execution record including turn count, cost, session ID, and all tool call inputs/outputs in machine-readable form. Find it in the Artifacts section at the bottom of the Actions run summary page. Retained 30 days.

If a run silently fails or hits `error_max_turns`, download the JSON artifact to see exactly which turn the agent was on and what it was attempting. The session ID in the artifact can also be used to correlate with Anthropic usage logs if needed.
