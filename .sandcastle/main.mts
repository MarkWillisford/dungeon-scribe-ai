// Sandcastle polling script — Local Track entry point
//
// Watches the DS AI GitHub repo for issues labeled `sandcastle`, picks them
// up one at a time, and hands them to Sandcastle for execution in a Docker
// sandbox.
//
// Label state machine per issue:
//   sandcastle  →  sandcastle-in-progress  →  sandcastle-done
//                                          →  sandcastle-architecture-review  (HITL pause)
//
// HITL issues: the agent emits NEEDS_REVIEW, the polling script relabels to
// sandcastle-architecture-review and leaves the issue alone. When Mark
// approves and relabels back to sandcastle, the next poll cycle picks it up
// for Run 2 on the same branch.
//
// Dependency scheduling: before starting an issue, parseBlockers() extracts
// any "Blocked by: #NNN" references from the issue body. If a blocker is still
// open, selectIssue() walks up the chain and tries to work on the blocker
// instead. If every eligible issue is blocked or in-progress, the loop idles.
//
// Shutdown: when the queue is empty (no sandcastle-labeled issues remain),
// the process exits cleanly. If issues exist but are all paused for architecture
// review, it also exits — those require human input before work can resume.
//
// Self-healing: the poll loop never exits on error. Infrastructure failures
// (missing Docker image, transient git errors) are caught and recovered:
//   - Missing Docker image: auto-rebuilt before the next issue attempt.
//   - Any other processIssue failure: issue reset to `sandcastle`, loop continues.
//   - main.mts changed on disk: process restarts itself to pick up new code.
//   - Stale worktrees from prior crashed runs: removed before processing.
//   - Rebase conflicts on stale branches: branch reset to main.
//
// Usage:
//   npx tsx .sandcastle/main.mts

import { createSandbox, claudeCode } from '@ai-hero/sandcastle';
import { docker } from '@ai-hero/sandcastle/sandboxes/docker';
import { execSync, execFileSync, spawn } from 'node:child_process';
import { homedir } from 'node:os';
import { readFileSync } from 'node:fs';

const POLL_INTERVAL_MS = 300_000; // 5 minutes
const DOCKER_IMAGE = 'sandcastle:dungeon-scribe-ai';
const SCRIPT_PATH = new URL(import.meta.url).pathname;

const LABEL_SANDCASTLE = 'sandcastle';
const LABEL_IN_PROGRESS = 'sandcastle-in-progress';
const LABEL_ARCH_REVIEW = 'sandcastle-architecture-review';
const LABEL_DONE = 'sandcastle-done';
const LABEL_REVIEW_PASSED = 'review-passed';

const COMPLETION_SIGNALS = ['<promise>COMPLETE</promise>', '<promise>NEEDS_REVIEW</promise>'];

const hooks = {
  sandbox: { onSandboxReady: [{ command: 'NODE_ENV=development npm install' }] },
};

const copyToWorktree = ['node_modules'];

interface GitHubLabel {
  name: string;
}

interface GitHubIssue {
  number: number;
  title: string;
  body: string;
  labels: GitHubLabel[];
}

// ---------------------------------------------------------------------------
// Self-update: restart if main.mts has changed on disk since boot.
// ---------------------------------------------------------------------------

const SCRIPT_HASH_AT_BOOT = readFileSync(SCRIPT_PATH, 'utf8');

function restartIfScriptChanged(): void {
  const current = readFileSync(SCRIPT_PATH, 'utf8');
  if (current !== SCRIPT_HASH_AT_BOOT) {
    console.log('main.mts changed on disk — restarting to pick up new code...');
    // Restart via npx tsx explicitly — process.execPath is bare node and can't load .mts.
    const child = spawn('npx', ['tsx', SCRIPT_PATH], {
      detached: true,
      stdio: 'inherit',
      cwd: process.cwd(),
    });
    child.unref();
    process.exit(0);
  }
}

// ---------------------------------------------------------------------------
// Rate limit handling
// ---------------------------------------------------------------------------

function parseResetEpoch(text: string): number | null {
  const match = text.match(/resets (\d+):(\d+)(am|pm) \(UTC\)/i);
  if (!match) return null;
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const ampm = match[3].toLowerCase();
  if (ampm === 'pm' && hours !== 12) hours += 12;
  if (ampm === 'am' && hours === 12) hours = 0;
  const now = new Date();
  const reset = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), hours, minutes, 0));
  if (reset.getTime() <= Date.now()) reset.setUTCDate(reset.getUTCDate() + 1);
  return reset.getTime();
}

// ---------------------------------------------------------------------------
// Docker image health: build if missing.
// ---------------------------------------------------------------------------

function ensureDockerImage(): void {
  try {
    execSync(`docker image inspect ${DOCKER_IMAGE}`, { stdio: 'pipe' });
  } catch {
    console.log(`Docker image '${DOCKER_IMAGE}' not found — building now...`);
    execSync('npx sandcastle docker build-image', { encoding: 'utf8', stdio: 'inherit' });
    console.log('Docker image built.');
  }
}

// ---------------------------------------------------------------------------
// GitHub helpers
// ---------------------------------------------------------------------------

function listSandcastleIssues(): GitHubIssue[] {
  const out = execSync(
    `gh issue list --label "${LABEL_SANDCASTLE}" --state open --json number,title,body,labels`,
    { encoding: 'utf8' },
  );
  return JSON.parse(out);
}

function addLabel(issueNumber: number, label: string): void {
  execSync(`gh issue edit ${issueNumber} --add-label "${label}"`, { encoding: 'utf8' });
}

function removeLabel(issueNumber: number, label: string): void {
  execSync(`gh issue edit ${issueNumber} --remove-label "${label}"`, {
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'ignore'],
  });
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ---------------------------------------------------------------------------
// Dependency scheduling
// ---------------------------------------------------------------------------

// Extract #NNN references from the "Blocked by" section of an issue body.
function parseBlockers(body: string): number[] {
  const match = body.match(/##\s*Blocked by\s*\n([\s\S]*?)(?:\n##|$)/i);
  if (!match) return [];
  return [...match[1].matchAll(/#(\d+)/g)].map((m) => parseInt(m[1], 10));
}

// A blocker is "resolved" when either:
//   - the issue is CLOSED (merged into main), or
//   - the issue has an open PR with the review-passed label (babysit converged,
//     waiting on human review -- safe to start downstream work on that branch).
//
// baseBranch is non-null when the blocker resolved via review-passed rather than
// merge, and downstream work should branch from that PR's head rather than main.
interface BlockerResolution {
  resolved: boolean;
  baseBranch: string | null;
}

// Caches for the current poll cycle -- both cleared in the poll loop.
const resolverCache = new Map<number, BlockerResolution>();
let reviewPassedPRsCache: Array<{ number: number; headRefName: string; body: string }> | null =
  null;

function getReviewPassedPRs(): Array<{ number: number; headRefName: string; body: string }> {
  if (reviewPassedPRsCache) return reviewPassedPRsCache;
  try {
    const out = execSync(
      `gh pr list --state open --label "${LABEL_REVIEW_PASSED}" --json number,headRefName,body`,
      { encoding: 'utf8' },
    );
    reviewPassedPRsCache = JSON.parse(out);
  } catch {
    reviewPassedPRsCache = [];
  }
  return reviewPassedPRsCache!;
}

function findReviewPassedPR(
  issueNumber: number,
): { headRefName: string } | null {
  const matches = getReviewPassedPRs().filter((pr) =>
    new RegExp(`(?:closes|fixes|resolves)\\s+#${issueNumber}\\b`, 'i').test(pr.body ?? ''),
  );
  const uniqueHeads = [...new Set(matches.map((pr) => pr.headRefName))];
  if (uniqueHeads.length !== 1) return null;
  return { headRefName: uniqueHeads[0] };
}

function resolveBlocker(issueNumber: number): BlockerResolution {
  if (resolverCache.has(issueNumber)) return resolverCache.get(issueNumber)!;

  // First: is the issue closed (merged)?
  try {
    const out = execSync(`gh issue view ${issueNumber} --json state`, { encoding: 'utf8' });
    if (JSON.parse(out).state === 'CLOSED') {
      const result: BlockerResolution = { resolved: true, baseBranch: null };
      resolverCache.set(issueNumber, result);
      return result;
    }
  } catch (err) {
    console.error(`Failed to inspect blocker #${issueNumber}:`, err);
    // Retry next poll cycle instead of incorrectly unblocking downstream work.
    const result: BlockerResolution = { resolved: false, baseBranch: null };
    resolverCache.set(issueNumber, result);
    return result;
  }

  // Second: open issue with a review-passed PR? Safe to start downstream work.
  const linkedPR = findReviewPassedPR(issueNumber);
  if (linkedPR) {
    const result: BlockerResolution = { resolved: true, baseBranch: linkedPR.headRefName };
    resolverCache.set(issueNumber, result);
    return result;
  }

  const result: BlockerResolution = { resolved: false, baseBranch: null };
  resolverCache.set(issueNumber, result);
  return result;
}

// The issue to work on next, paired with the git branch it should base on.
// baseBranch is 'main' for fully-merged dependency chains, or a pre-merge
// parent branch when starting downstream of a review-passed PR.
interface IssueSelection {
  issue: GitHubIssue;
  baseBranch: string;
}

// Walk the dependency graph to find the best issue to work on.
// If an issue has unresolved blockers, recurse into those first.
// Skips issues whose blockers are all in-progress or outside the queue.
// visited guards against cycles.
function selectIssue(issues: GitHubIssue[], visited = new Set<number>()): IssueSelection | null {
  for (const issue of issues) {
    if (visited.has(issue.number)) continue;
    visited.add(issue.number);

    const blockerNumbers = parseBlockers(issue.body);
    const unresolvedBlockers = blockerNumbers.filter((n) => !resolveBlocker(n).resolved);

    if (unresolvedBlockers.length === 0) {
      // All blockers resolved. Determine the base branch: if exactly one blocker
      // resolved via review-passed (not yet merged), start downstream work on that
      // branch. If multiple pre-merge parents exist, wait for merges to avoid a
      // complex multi-parent base.
      const reviewPassedBranches = [
        ...new Set(
          blockerNumbers
            .map((n) => resolveBlocker(n).baseBranch)
            .filter((b): b is string => b !== null),
        ),
      ];

      if (reviewPassedBranches.length > 1) {
        // Multiple unmerged parents -- too complex to base safely. Skip for now.
        continue;
      }

      return { issue, baseBranch: reviewPassedBranches[0] ?? 'main' };
    }

    for (const blockerNum of unresolvedBlockers) {
      const blockerIssue = issues.find(
        (i) => i.number === blockerNum && !i.labels.some((l) => l.name === LABEL_IN_PROGRESS),
      );
      if (blockerIssue) {
        // Reuse the same issues array and visited set -- no rebuild on each recursion.
        const candidate = selectIssue(issues, visited);
        if (candidate) return candidate;
      }
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// Issue processing
// ---------------------------------------------------------------------------

function git(args: string[], options: Record<string, unknown> = {}): string {
  return execFileSync('git', args, { encoding: 'utf8', ...options }) as string;
}

async function processIssue(issue: GitHubIssue, baseBranch = 'main'): Promise<void> {
  const { number: issueNumber, title } = issue;
  const branch = `sandcastle/issue-${issueNumber}`;

  console.log(`\nPicking up issue #${issueNumber}: ${title}`);
  console.log(`Branch: ${branch} (base: ${baseBranch})`);

  // Fetch main and, when branching from a pre-merge parent, that branch too.
  // Using fetch + reset (rather than pull) avoids both the "divergent branches"
  // error from unconfigured pull.rebase and the refspec rejection that occurs
  // when main is checked out and we try to fetch into refs/heads/main directly.
  const fetchArgs = baseBranch !== 'main' ? ['origin', 'main', baseBranch] : ['origin', 'main'];
  git(['fetch', ...fetchArgs]);

  if (baseBranch !== 'main') {
    // Position HEAD at the pre-merge parent so createSandbox branches from there
    // if the issue branch doesn't exist yet.
    git(['checkout', '--detach', `origin/${baseBranch}`], { stdio: 'pipe' });
    console.log(`Positioned at base: ${baseBranch}`);
  } else {
    execSync('git checkout main', { encoding: 'utf8', stdio: 'pipe' });
    execSync('git reset --hard origin/main', { encoding: 'utf8', stdio: 'pipe' });
    console.log('main updated.');
  }

  // Remove any stale worktree for this branch left over from a prior crashed run.
  try {
    execSync(`git worktree remove --force .sandcastle/worktrees/sandcastle-issue-${issueNumber}`, {
      encoding: 'utf8',
      stdio: 'pipe',
    });
    console.log(`Removed stale worktree for ${branch}.`);
  } catch {
    // No stale worktree — nothing to do.
  }

  // If the branch already exists, rebase it onto the base so the agent doesn't work
  // on stale code. If the rebase conflicts (e.g. squash-merged commits, or parent
  // branch was amended after babysit exited), reset the branch to the base and start fresh.
  const rebaseTarget = baseBranch !== 'main' ? `origin/${baseBranch}` : 'main';
  let branchExists = false;
  try {
    execSync(`git rev-parse --verify ${branch}`, { encoding: 'utf8', stdio: 'pipe' });
    branchExists = true;
  } catch {
    // Branch doesn't exist yet — createSandbox will create it from current HEAD.
  }
  if (branchExists) {
    try {
      git(['rebase', rebaseTarget, branch], { stdio: 'pipe' });
      // git rebase <upstream> <branch> checks out <branch> into the working tree.
      // Return to the base ref so the SDK can create a fresh worktree for the branch.
      if (baseBranch !== 'main') {
        git(['checkout', '--detach', `origin/${baseBranch}`], { stdio: 'pipe' });
      } else {
        execSync('git checkout main', { encoding: 'utf8', stdio: 'pipe' });
      }
      console.log(`${branch} rebased onto ${baseBranch}.`);
    } catch {
      try {
        execSync('git rebase --abort', { encoding: 'utf8', stdio: 'pipe' });
      } catch {
        // Rebase may have already been aborted or not started cleanly.
      }
      if (baseBranch !== 'main') {
        git(['checkout', '--detach', '--force', `origin/${baseBranch}`], { stdio: 'pipe' });
      } else {
        execSync('git checkout -f main', { encoding: 'utf8', stdio: 'pipe' });
      }
      git(['branch', '-f', branch, rebaseTarget], { stdio: 'pipe' });
      console.log(`${branch} had rebase conflicts — reset to ${baseBranch}.`);
    }
  }

  removeLabel(issueNumber, LABEL_SANDCASTLE);
  addLabel(issueNumber, LABEL_IN_PROGRESS);

  const box = await createSandbox({
    branch,
    sandbox: docker({
      mounts: [
        {
          hostPath: `${homedir()}/.claude`,
          sandboxPath: '/home/agent/.claude',
          readonly: false,
        },
        {
          hostPath: `${homedir()}/.firebase/serviceAccount-staging.json`,
          sandboxPath: '/home/agent/.firebase/serviceAccount-staging.json',
          readonly: true,
        },
      ],
      env: {
        GOOGLE_APPLICATION_CREDENTIALS: '/home/agent/.firebase/serviceAccount-staging.json',
        FIREBASE_PROJECT_ID: 'dungeon-scribe-ai-stagin-b4fb5',
      },
    }),
    hooks,
  });

  try {
    const result = await box.run({
      name: `issue-${issueNumber}`,
      maxIterations: 100,
      agent: claudeCode('claude-sonnet-4-6'),
      promptFile: './.sandcastle/prompt.md',
      promptArgs: { ISSUE_NUMBER: String(issueNumber) },
      completionSignal: COMPLETION_SIGNALS,
    });

    if (result.completionSignal === '<promise>NEEDS_REVIEW</promise>') {
      console.log(`Issue #${issueNumber} paused for review.`);
      removeLabel(issueNumber, LABEL_IN_PROGRESS);
      addLabel(issueNumber, LABEL_ARCH_REVIEW);
    } else {
      console.log(`Issue #${issueNumber} complete. PR open.`);
      removeLabel(issueNumber, LABEL_IN_PROGRESS);
      addLabel(issueNumber, LABEL_DONE);
    }
  } catch (err) {
    const msg = String((err as any)?.message ?? err ?? '');
    if (msg.toLowerCase().includes('hit your limit')) {
      const resetEpoch = parseResetEpoch(msg);
      const waitMs = resetEpoch
        ? Math.max(resetEpoch - Date.now() + 120_000, 0)
        : 3_600_000;
      const waitMins = Math.ceil(waitMs / 60_000);
      console.log(
        `Rate limited on issue #${issueNumber}. Re-queuing and waiting ${waitMins}m for reset...`,
      );
      removeLabel(issueNumber, LABEL_IN_PROGRESS);
      addLabel(issueNumber, LABEL_SANDCASTLE);
      await sleep(waitMs);
    } else {
      console.error(`Error processing issue #${issueNumber}:`, err);
      removeLabel(issueNumber, LABEL_IN_PROGRESS);
      addLabel(issueNumber, LABEL_SANDCASTLE);
    }
  } finally {
    await box.close();
  }
}

// ---------------------------------------------------------------------------
// Conflict watcher
// ---------------------------------------------------------------------------

// On each poll cycle, scan open PRs that babysit already cleared (review-passed)
// for merge conflicts. A conflict means the parent branch changed after babysit
// exited clean -- most likely because Mark requested changes on a parent PR.
// Re-queue the linked issue so Sandcastle rebases it and re-runs babysit.
async function checkConflictedReviewPassedPRs(): Promise<void> {
  let prs: Array<{ number: number; mergeable: string; body: string }>;
  try {
    const out = execSync(
      `gh pr list --state open --label "${LABEL_REVIEW_PASSED}" --json number,mergeable,body`,
      { encoding: 'utf8' },
    );
    prs = JSON.parse(out);
  } catch {
    return;
  }

  for (const pr of prs) {
    if (pr.mergeable !== 'CONFLICTING') continue;

    const match = pr.body?.match(/(?:closes|fixes|resolves)\s+#(\d+)/i);
    if (!match) continue;
    const issueNumber = parseInt(match[1], 10);

    console.log(
      `PR #${pr.number} has a merge conflict — re-queuing issue #${issueNumber} for rebase`,
    );
    try {
      execSync(
        `gh issue edit ${issueNumber} --remove-label "${LABEL_ARCH_REVIEW}" --add-label "${LABEL_SANDCASTLE}"`,
        { encoding: 'utf8' },
      );
      execSync(`gh pr edit ${pr.number} --remove-label "${LABEL_REVIEW_PASSED}"`, {
        encoding: 'utf8',
      });
    } catch (err) {
      console.error(`Failed to re-queue issue #${issueNumber}:`, err);
    }
  }
}

// ---------------------------------------------------------------------------
// Poll loop
// ---------------------------------------------------------------------------

async function poll(): Promise<void> {
  console.log('Sandcastle polling started. Watching for sandcastle-labeled issues...\n');

  while (true) {
    // Restart if main.mts was updated since this process booted.
    restartIfScriptChanged();

    // Ensure the Docker image is present before attempting any issue.
    // A build failure is logged and retried next cycle — it must not exit the loop.
    try {
      ensureDockerImage();
    } catch (err) {
      console.error('Docker image unavailable, will retry next cycle:', err);
      await sleep(POLL_INTERVAL_MS);
      continue;
    }

    // Clear per-cycle caches before any resolution or PR lookups.
    resolverCache.clear();
    reviewPassedPRsCache = null;

    // Re-queue any review-passed PRs that developed a conflict since babysit
    // last ran -- parent branch changed while child was waiting for human review.
    await checkConflictedReviewPassedPRs();

    const issues = listSandcastleIssues();
    const eligible = issues.filter(
      (issue) => !issue.labels.some((l) => l.name === LABEL_ARCH_REVIEW),
    );

    const selection = selectIssue(eligible);

    if (selection) {
      await processIssue(selection.issue, selection.baseBranch);
    } else if (issues.length === 0) {
      console.log('Queue empty — all issues complete. Shutting down.');
      process.exit(0);
    } else if (eligible.every((i) => i.labels.some((l) => l.name === LABEL_ARCH_REVIEW))) {
      // Every remaining issue is paused for architecture review — human input required.
      console.log('All remaining issues are paused for architecture review. Shutting down.');
      process.exit(0);
    } else {
      // Some issues are blocked or in-progress — this shouldn't happen in normal
      // sequential operation, but log and continue rather than exit.
      const ts = new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles',
        hour12: false,
      });
      console.log(`[${ts} PT] Issues exist but none are workable right now. Checking again in ${POLL_INTERVAL_MS / 1000}s...`);
      await sleep(POLL_INTERVAL_MS);
    }
  }
}

poll().catch((err) => {
  console.error('Fatal error in polling loop:', err);
  process.exit(1);
});
