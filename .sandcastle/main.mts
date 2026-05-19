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
import { execSync, spawn } from 'node:child_process';
import { homedir } from 'node:os';
import { readFileSync } from 'node:fs';

const POLL_INTERVAL_MS = 30_000;
const DOCKER_IMAGE = 'sandcastle:dungeon-scribe-ai';
const SCRIPT_PATH = new URL(import.meta.url).pathname;

const LABEL_SANDCASTLE = 'sandcastle';
const LABEL_IN_PROGRESS = 'sandcastle-in-progress';
const LABEL_ARCH_REVIEW = 'sandcastle-architecture-review';
const LABEL_DONE = 'sandcastle-done';

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
    const child = spawn(process.execPath, process.argv.slice(1), {
      detached: true,
      stdio: 'inherit',
    });
    child.unref();
    process.exit(0);
  }
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

// Check whether a GitHub issue/PR is closed. Cached per poll cycle.
const resolvedCache = new Map<number, boolean>();
function isIssueResolved(issueNumber: number): boolean {
  if (resolvedCache.has(issueNumber)) return resolvedCache.get(issueNumber)!;
  try {
    const out = execSync(`gh issue view ${issueNumber} --json state`, { encoding: 'utf8' });
    const resolved = JSON.parse(out).state === 'CLOSED';
    resolvedCache.set(issueNumber, resolved);
    return resolved;
  } catch {
    // Issue not found or inaccessible -- treat as resolved so it doesn't block forever.
    resolvedCache.set(issueNumber, true);
    return true;
  }
}

// Walk the dependency graph to find the best issue to work on.
// If an issue has unresolved blockers, recurse into those first.
// Skips issues whose blockers are all in-progress or outside the queue.
// visited guards against cycles.
function selectIssue(issues: GitHubIssue[], visited = new Set<number>()): GitHubIssue | null {
  for (const issue of issues) {
    if (visited.has(issue.number)) continue;
    visited.add(issue.number);

    const unresolvedBlockers = parseBlockers(issue.body).filter((n) => !isIssueResolved(n));
    if (unresolvedBlockers.length === 0) return issue;

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

async function processIssue(issue: GitHubIssue): Promise<void> {
  const { number: issueNumber, title } = issue;
  const branch = `sandcastle/issue-${issueNumber}`;

  console.log(`\nPicking up issue #${issueNumber}: ${title}`);
  console.log(`Branch: ${branch}`);

  // Pull latest main so the sandbox always branches from the most recent commit.
  execSync('git pull origin main', { encoding: 'utf8' });
  console.log('main updated.');

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

  // If the branch already exists, rebase it onto main so the agent doesn't work
  // on stale code. If the rebase conflicts (e.g. squash-merged commits), reset
  // the branch to main and start fresh.
  let branchExists = false;
  try {
    execSync(`git rev-parse --verify ${branch}`, { encoding: 'utf8', stdio: 'pipe' });
    branchExists = true;
  } catch {
    // Branch doesn't exist yet — createSandbox will create it from current main.
  }
  if (branchExists) {
    try {
      execSync(`git rebase main ${branch}`, { encoding: 'utf8', stdio: 'pipe' });
      // git rebase <upstream> <branch> checks out <branch> into the working tree.
      // We must return to main so the SDK can create a fresh worktree for the branch.
      execSync(`git checkout main`, { encoding: 'utf8', stdio: 'pipe' });
      console.log(`${branch} rebased onto main.`);
    } catch {
      try {
        execSync('git rebase --abort', { encoding: 'utf8', stdio: 'pipe' });
      } catch {
        // Rebase may have already been aborted or not started cleanly.
      }
      execSync(`git checkout -f main`, { encoding: 'utf8', stdio: 'pipe' });
      execSync(`git branch -f ${branch} main`, { encoding: 'utf8', stdio: 'pipe' });
      console.log(`${branch} had rebase conflicts — reset to main.`);
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
    console.error(`Error processing issue #${issueNumber}:`, err);
    removeLabel(issueNumber, LABEL_IN_PROGRESS);
    addLabel(issueNumber, LABEL_SANDCASTLE);
  } finally {
    await box.close();
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

    resolvedCache.clear();

    const issues = listSandcastleIssues();
    const eligible = issues.filter(
      (issue) => !issue.labels.some((l) => l.name === LABEL_ARCH_REVIEW),
    );

    const next = selectIssue(eligible);

    if (next) {
      await processIssue(next);
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
