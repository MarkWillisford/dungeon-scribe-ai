---
name: babysit-pr
description: "Watch a DS AI PR through CI and CodeRabbit review feedback: wait for CI, auto-fix high-confidence failures, reply to active review threads, and summarize parsed CodeRabbit review-body comments with sentinel-tagged comments. Runs one pass against the current branch's PR; pass a PR number or URL to check out that PR first. Use when invoked as 'babysit-pr', 'babysit PR 123', 'watch my PR', or 'respond to comments'."
argument-hint: '[pr-number-or-url]'
---

# Babysit PR (DS AI)

Watch one PR through CI, auto-fix high-confidence failures, and leave a paper-trail reply on every active review thread and CodeRabbit review-body comment. Threads stay open for human resolution — this skill only posts replies, it never resolves.

Scripts live at `.agents/skills/babysit-pr/scripts/` in the DS AI repo root. All script paths in this document are relative to that directory — invoke them as `bash .agents/skills/babysit-pr/scripts/<name>.sh`.

This skill always runs exactly one pass. It never waits or repeats internally. For recurring execution, wrap the call with `/loop <cadence> /babysit-pr` or an external shell `while` loop.

## Inputs

Parse an optional PR number or URL from the invocation arguments. Priority order:

1. **Full PR URL** — if `$ARGUMENTS` or user text contains `https?://github\.com/[^/\s]+/[^/\s]+/pull/\d+`, capture and pass to `gh pr checkout`.
2. **Explicit PR token** — match `(?:PR|pr|pull request)\s*#?(\d+)` or a bare `#(\d+)`.
3. **Bare numeric argument** — only when `$ARGUMENTS` is a positive integer with no surrounding prose.
4. **None of the above** — operate on the PR for the current branch.

When a match is found, checkout happens in Preflight before Step 2.

## Sentinels

**Addressed sentinel**: `<!-- babysit-pr:addressed v1 ds-ai@0.1.0 -->`. Appended on its own line at the end of every reply. Dedupe matches by the version-agnostic prefix `<!-- babysit-pr:addressed v1 ` so older sentinels are still recognized.

**Follow-up sentinel**: `<!-- babysit-pr:followup v1 ds-ai@0.1.0 -->`. Attached to replies that defer an out-of-scope comment. A deferred thread is still machine-classified as addressed (the skill has handled it by deferring). The `addressed` sentinel is still appended after it.

**Sentinel recency rules.** The script emits per-thread `activityState` with three values:

- **`active`** — no sentinel yet, OR at least one human commented after the last sentinel. Always handle.
- **`uncertain`** — a sentinel exists AND one or more bot comments appeared after it. Read every entry in `postSentinelBotComments`:
  - Every entry is a non-actionable acknowledgement → **Skip-reply** (existing sentinel covers it).
  - Any entry carries new actionable content → treat as **active**; note in summary why the thread was reactivated.
  - Cannot classify confidently → default to **active** and flag it.
- **`addressed`** — sentinel is newest relevant activity. Skip.

Bot detection: `author.__typename == "Bot"` (primary) plus a login allowlist. Unknown bots never fall through to human classification.

## One iteration

### 1. Preflight

```bash
git status --short
```

If non-empty, stop and report dirty files. Never start with uncommitted changes.

```bash
gh auth status
```

If this fails, stop and tell the user to run `gh auth login`.

If a PR number or URL was parsed, check it out:

```bash
gh pr checkout <pr-number-or-url>
```

### 2. Locate the PR

```bash
gh pr view --json number,url,headRefName,statusCheckRollup,mergeable,mergeStateStatus 2>/dev/null
```

If no PR exists for the current branch:

- Verify commits ahead of base: `git log --oneline @{u}..HEAD 2>/dev/null || git log --oneline origin/HEAD..HEAD`. If nothing ahead, stop.
- Push and open a PR:

  ```bash
  git push -u origin HEAD
  gh pr create --fill
  ```

- Re-fetch `gh pr view --json number,url,statusCheckRollup,mergeable,mergeStateStatus`.

#### Resolve merge conflicts (if any)

If `mergeable == "CONFLICTING"` or `mergeStateStatus == "DIRTY"`:

```bash
BASE=$(gh pr view --json baseRefName --jq .baseRefName)
git fetch origin "$BASE"
git merge --no-edit "origin/$BASE"
```

Apply the same conservative bar as step 5: resolve directly only for lockfile/generated regenerations, additive non-overlapping edits, or trivial textual conflicts in PR-touched files. Anything semantic, ambiguous, or outside the PR's intentional surface — `git merge --abort` and skip to step 10, exit **stuck** with a diagnosis.

After a clean resolution, commit the merge and `git push origin HEAD`.

### 3. Wait for CI

```bash
rc=0
if command -v gtimeout >/dev/null 2>&1; then
  gtimeout 600 gh pr checks --watch || rc=$?
elif command -v timeout >/dev/null 2>&1; then
  timeout 600 gh pr checks --watch || rc=$?
else
  gh pr checks --watch || rc=$?
fi
case $rc in 0|1|8|124) ;; *) exit $rc;; esac
```

Exit codes 0 (pass), 1 (fail), 8 (pending), 124 (timeout) are expected. Others re-raise.

### 4. Fetch review data

```bash
bash .agents/skills/babysit-pr/scripts/unresolvedPrComments.sh
```

Output JSON fields: `threads`, `activeThreads`, `uncertainThreads`, `nitpickComments` (includes CodeRabbit Nitpick, Minor, and Outside diff range comments), `totalActiveThreads`, `totalUncertainThreads`, `totalNitpicks`, `totalUnresolvedComments`.

### Scope

Build the changed-line set from `gh pr diff` once per iteration. A comment is **in scope** when its anchor falls on a changed diff line (added or removed) on either side of the hunk. Comments on unchanged/context lines are **out of scope by default**.

Narrow escape hatch — treat an unchanged-line comment as in scope only when:

- The reviewer explicitly ties it to this PR's change.
- The comment points to an unchanged line directly used by a changed diff line, and you can name the changed `file:line` that creates the coupling.
- CI, test, or typecheck output proves the PR changed the contract or behavior for the named symbol.

If you cannot name one of those signals, classify out of scope. Do not use broad phrases like "related," "nearby," or "review confidence."

**Out-of-scope fix bar** (apply anyway):

- Security vulnerability, data loss, or crash in the PR's execution path.
- Obvious correctness bug confirmed by reading the code.
- One-line trivial change that obviously cannot regress anything.

**Everything else out of scope → Defer.**

### 5. Handle CI failures (conservative)

```bash
bash .agents/skills/babysit-pr/scripts/fetchFailedLogs.sh
```

First line is either `# babysit-pr: no failing checks` (skip to step 6) or `# babysit-pr: failing checks` followed by per-job log blocks.

Read logs. Diagnose build/type errors first (they cause cascading failures), then lint, then tests.

**Apply a fix directly** only when cause is high-confidence and inside the PR's changed surface:

- Compile/type errors in files the PR touched.
- Deterministic lint/format violations (auto-fixable).
- Tests the PR broke by renaming/removing symbols they reference.
- Missing test updates for intentional behavior changes — update the test to assert the correct behavior.

**Stop and report a diagnosis** (do not guess a fix) for:

- Flaky / intermittent failures.
- Infrastructure or provider outages.
- Permission / auth / missing-secret failures.
- Unrelated failures (code this PR didn't modify).
- Ambiguous test intent.
- External checks with no inspectable logs (CodeRabbit, Devin, etc.).

CI fixes are never Deferred as follow-ups: CI must pass on this PR.

### 6. Assess active review threads

**NO COMMITS IN THIS STEP.** Edit files freely. Do not run `git add`, `git commit`, or `commitAndPush.sh` here. All changes accumulate in the working tree and are committed once in Step 8 after Steps 5, 6, AND 7 are all complete.

For every thread in `activeThreads`:

- Group comments by file; read each file once (not per comment).
- If the referenced file no longer exists, classify as **Already fixed**.
- If `activityState == "uncertain"`, read EVERY entry in `postSentinelBotComments`:
  - All entries non-actionable → **Skip-reply**.
  - Any entry actionable → treat as active, note reactivation in summary.
- Each remaining thread gets scope classification (see Scope section), then one verdict:
  - **In-scope**: **Agree** (apply fix, record thread ID + what changed), **Disagree** (record reasoning), **Already fixed** (record pointer: commit SHA or file:line).
  - **Out-of-scope**: meets the fix bar → **Agree** (note it was out-of-scope but met the bar); does not meet the bar → **Defer** (record one-line rationale).

DS AI specifics to watch for when applying fixes:

- Firebase reads/writes: always check for missing `.limit()`, unhandled promise rejections, real-time listener cleanup.
- Redux: no state mutations outside Immer reducers, no side effects in reducers.
- React Native: platform-specific behavior, safe area handling, FlatList vs ScrollView for lists.
- TypeScript: never introduce `any`; use `unknown` with a narrowing guard.
- Tests: if fixing implementation changes behavior, update the test to assert the correct behavior. Don't defer a test update — update it alongside the fix.

### 7. Assess CodeRabbit review-body comments

**NO COMMITS IN THIS STEP.** Edit files freely. Do not run `git add`, `git commit`, or `commitAndPush.sh` here. All changes accumulate in the working tree and are committed once in Step 8 after Steps 5, 6, AND 7 are all complete.

For every parsed CodeRabbit review-body comment in `nitpickComments`:

- Check whether its `fingerprint` already appears in a prior babysit-pr sentinel comment. If yes, skip.
- Classify scope (in / out) using the Scope section.
- Pick a verdict:
  - In-scope → Agree / Disagree / Already fixed. If Agree, apply the fix.
  - Out-of-scope → meets bar → Agree (note). Does not meet bar → **Defer** (goes into summary under Deferred heading, not a separate thread reply).

Deferred CodeRabbit fingerprints go into the fenced fingerprint block at the end of the summary so future runs dedupe correctly.

### 8. Commit (do NOT push yet)

**This is the ONLY place in the skill where commits are made.** Steps 5, 6, and 7 must all be fully complete before reaching this step. One commit covers all changes from all three assessment steps combined.

If steps 5, 6, or 7 modified any files:

- Only stage files this iteration touched — run `git diff --name-only` and pick from that list deliberately.
- Commit message: `fix: babysit-pr — <one-line what changed>` (conventional-commit form required by DS AI commitlint).

```bash
bash .agents/skills/babysit-pr/scripts/commitOnly.sh "fix: babysit-pr — <message>" <file1> [<file2> ...]
```

Capture the `url=` line for reply templates in step 9.

**Do NOT push here.** Pushing triggers CodeRabbit to re-review, which fires a new babysit-pr run that cancels this one before replies are posted. The push happens at the end of step 9, after all sentinel replies are sent.

### 9. Post replies, then push

For every thread assessed in step 6 NOT marked Skip-reply:

```bash
bash .agents/skills/babysit-pr/scripts/postSentinelReply.sh "$THREAD_ID" "$BODY"
```

**Writing rule: never use em-dashes (—) in any reply, comment, or summary.** Use a comma, a period, or rewrite the sentence.

Body templates:

- **Agree**: `Addressed in <commit-url>. <one-line what changed>.`
- **Disagree**: `Leaving current behavior. <reasoning>.`
- **Already fixed**: `Already handled by <commit-url-or-file:line>. <brief pointer>.`
- **Defer**: `Out of scope for this PR; this looks like follow-up work rather than something introduced or required by this change. <one-line rationale>.\n\n<!-- babysit-pr:followup v1 ds-ai@0.1.0 -->`

The script appends the `addressed` sentinel.

If any CodeRabbit review-body comments were assessed in step 7, post ONE top-level PR comment:

```bash
bash .agents/skills/babysit-pr/scripts/postSentinelPrComment.sh "$PR_NUMBER" "$BODY"
```

The CodeRabbit summary body:

- Groups verdicts under **Agree / Disagree / Already fixed / Deferred (out of scope)** headings.
- Lists each deferred item with `<!-- babysit-pr:followup v1 ds-ai@0.1.0 -->` on its own line.
- Includes the commit URL for fixes.
- Includes every current fingerprint in a fenced block at the end (addressed and deferred).

**Push after all replies are posted.** Once every sentinel reply (thread replies + CodeRabbit summary comment) is sent, push the commit:

```bash
git push
```

All sentinels are now in place before CodeRabbit sees the new commit. When CodeRabbit re-reviews and triggers the next babysit-pr run, it will find those threads already addressed.

### 9a. Create follow-up issue for deferred items (if any)

If any threads or CodeRabbit comments were Deferred this pass, create ONE GitHub issue aggregating them:

```bash
gh issue create \
  --title "CodeRabbit deferred items from PR #${PR_NUMBER}" \
  --label "coderabbit-deferred" \
  --body "<checklist of deferred items with rationale>"
```

Format the body as a markdown checklist. Each item should include: the file/line referenced, the CodeRabbit finding or reviewer comment (one-line summary), and the reason it was deferred. Link back to the PR.

Do NOT label the issue `sandcastle` — these are for human review, not autonomous pickup.

If the `coderabbit-deferred` label does not exist yet, create it first:

```bash
gh label create "coderabbit-deferred" --color "FBCA04" --description "CodeRabbit findings deferred for manual review"
```

### 10. Summarize and exit

Report:

- Commits made (with URLs).
- Merge conflict status if relevant.
- CI checks fixed / still failing / skipped-with-diagnosis.
- Review threads replied to, grouped by verdict.
- CodeRabbit comments summarized (or skipped as already covered).
- Any deferred items (count + link to the follow-up issue created in 9a).
- The stop condition for this pass (clean / progressing / stuck).

When the report mentions deferrals, include the grep one-liner to enumerate them:

```bash
gh api graphql -f query='query($o:String!,$r:String!,$n:Int!){repository(owner:$o,name:$r){pullRequest(number:$n){reviewThreads(first:100){nodes{comments(first:50){nodes{body url}}}}comments(first:100){nodes{body url}}}}}' -F o=MarkWillisford -F r=dungeon-scribe-ai -F n=<pr> | grep -B1 babysit-pr:followup
```

## Loop control

After the single pass, pick exactly one outcome:

- **Exit clean** — CI green AND every thread in `activeThreads` was either Skip-reply or received a fresh sentinel reply (Agree / Disagree / Already-fixed / Defer all count) AND every current CodeRabbit fingerprint is covered. On clean exit:
  1. Add the `review-passed` label:

     ```bash
     gh pr edit "$PR_NUMBER" --add-label "review-passed"
     ```

     Create the label first if it doesn't exist:

     ```bash
     gh label create "review-passed" --color "0E8A16" --description "babysit-pr converged — ready for human review" 2>/dev/null || true
     ```

  2. Request MarkWillisford's review:

     ```bash
     gh pr edit "$PR_NUMBER" --add-reviewer "MarkWillisford"
     ```

  3. Report success and stop.

- **Exit progressing** — pass made commits, posted new replies, or both, and the PR is not yet clean. Report what was done and what is pending. Tell the user to re-run `/babysit-pr` once CI settles, or wrap with `/loop 2m /babysit-pr`.

- **Exit stuck** — pass made no commits and posted no new replies, and the PR is still not clean. Report the specific blocker:
  - Merge conflict exceeding resolution bar.
  - CI still running (timed out).
  - CI failing with diagnosis-only verdict (flaky / infra / auth / external / ambiguous / out-of-scope failure).
  - Only Skip-reply threads remained AND CI was already red or pending.

This skill never waits or repeats internally.

## Portability notes

- No subagent spawning — run everything inline.
- No `!` slash-command prefix in code fences — run these as ordinary bash.
- `argument-hint` is Claude Code UX only; strip it for strict validators.

## Input

PR number or URL: $ARGUMENTS
