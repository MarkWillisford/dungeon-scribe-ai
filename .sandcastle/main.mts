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
// Usage:
//   npx tsx .sandcastle/main.mts
// Or add to package.json:
//   "scripts": { "sandcastle": "npx tsx .sandcastle/main.mts" }

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
  sandbox: { onSandboxReady: [{ command: 'npm install' }] },
};

// Copy host node_modules into each worktree for fast sandbox startup.
// The onSandboxReady hook above handles platform-specific binaries.
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
  execSync(`gh issue edit ${issueNumber} --add-label "${label}"`, {
    encoding: 'utf8',
  });
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

async function processIssue(issue: GitHubIssue): Promise<void> {
  const { number: issueNumber, title } = issue;

  // Use a deterministic branch name so HITL Run 2 continues on the same branch.
  const branch = `sandcastle/issue-${issueNumber}`;

  console.log(`\nPicking up issue #${issueNumber}: ${title}`);
  console.log(`Branch: ${branch}`);

  removeLabel(issueNumber, LABEL_SANDCASTLE);
  addLabel(issueNumber, LABEL_IN_PROGRESS);

  const box = await createSandbox({
    branch,
    sandbox: docker({
      // Mount host Claude Code auth (Max plan) into the container read-only.
      // The container installs claude-code but has no credentials of its own.
      mounts: [
        {
          hostPath: `${homedir()}/.claude`,
          sandboxPath: '/home/agent/.claude',
          readonly: true,
        },
      ],
    }),
    hooks,
    copyToWorktree,
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

    const signal = result.completionSignal;

    if (signal === '<promise>NEEDS_REVIEW</promise>') {
      console.log(`Issue #${issueNumber} paused for architecture review (HITL).`);
      removeLabel(issueNumber, LABEL_IN_PROGRESS);
      addLabel(issueNumber, LABEL_ARCH_REVIEW);
    } else {
      console.log(`Issue #${issueNumber} complete. PR open.`);
      removeLabel(issueNumber, LABEL_IN_PROGRESS);
      addLabel(issueNumber, LABEL_DONE);
    }
  } catch (err) {
    console.error(`Error processing issue #${issueNumber}:`, err);
    // Restore to sandcastle so a human can retry or investigate.
    removeLabel(issueNumber, LABEL_IN_PROGRESS);
    addLabel(issueNumber, LABEL_SANDCASTLE);
  } finally {
    await box.close();
  }
}

async function poll(): Promise<void> {
  console.log('Sandcastle polling started. Watching for sandcastle-labeled issues...\n');

  while (true) {
    const issues = listSandcastleIssues();

    // Skip issues paused for architecture review — those wait for Mark's
    // approval and a manual relabel back to `sandcastle`.
    const eligible = issues.filter(
      (issue) => !issue.labels.some((l) => l.name === LABEL_ARCH_REVIEW),
    );

    if (eligible.length > 0) {
      await processIssue(eligible[0]);
    } else {
      const ts = new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles',
        hour12: false,
      });
      console.log(
        `[${ts} PT] No eligible issues. Checking again in ${POLL_INTERVAL_MS / 1000}s...`,
      );
    }

    await sleep(POLL_INTERVAL_MS);
  }
}

poll().catch((err) => {
  console.error('Fatal error in polling loop:', err);
  process.exit(1);
});
