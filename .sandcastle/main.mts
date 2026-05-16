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
// Usage:
//   npx tsx .sandcastle/main.mts

import { createSandbox, claudeCode } from '@ai-hero/sandcastle';
import { docker } from '@ai-hero/sandcastle/sandboxes/docker';
import { execSync } from 'node:child_process';
import { homedir } from 'node:os';

const POLL_INTERVAL_MS = 30_000;

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

async function processIssue(issue: GitHubIssue): Promise<void> {
  const { number: issueNumber, title } = issue;
  const branch = `sandcastle/issue-${issueNumber}`;

  console.log(`\nPicking up issue #${issueNumber}: ${title}`);
  console.log(`Branch: ${branch}`);

  removeLabel(issueNumber, LABEL_SANDCASTLE);
  addLabel(issueNumber, LABEL_IN_PROGRESS);

  const box = await createSandbox({
    branch,
    sandbox: docker({
      mounts: [
        {
          hostPath: `${homedir()}/.claude`,
          sandboxPath: '/home/agent/.claude',
          readonly: true,
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

async function poll(): Promise<void> {
  console.log('Sandcastle polling started. Watching for sandcastle-labeled issues...\n');

  while (true) {
    resolvedCache.clear();

    const issues = listSandcastleIssues();
    const eligible = issues.filter(
      (issue) => !issue.labels.some((l) => l.name === LABEL_ARCH_REVIEW),
    );

    const next = selectIssue(eligible);

    if (next) {
      await processIssue(next);
    } else {
      const ts = new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles',
        hour12: false,
      });
      const reason =
        eligible.length === 0
          ? 'No eligible issues.'
          : 'All eligible issues are blocked or in-progress.';
      console.log(`[${ts} PT] ${reason} Checking again in ${POLL_INTERVAL_MS / 1000}s...`);
    }

    await sleep(POLL_INTERVAL_MS);
  }
}

poll().catch((err) => {
  console.error('Fatal error in polling loop:', err);
  process.exit(1);
});
