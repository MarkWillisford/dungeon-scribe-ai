// Smoke test for AC4 of issue #136: verify Sandcastle can create a Docker
// sandbox and run a minimal Claude Code agent on the server.
//
// Usage (from repo root):
//   sg docker -c "npx tsx .sandcastle/smoke-test.ts"
//
// Requires: Docker daemon running, sandcastle:dungeon-scribe-ai image built,
// and ~/.claude/.credentials.json present (Claude subscription auth).

import { createSandbox, claudeCode } from "@ai-hero/sandcastle";
import { docker } from "@ai-hero/sandcastle/sandboxes/docker";
import * as os from "node:os";
import * as path from "node:path";

const CREDENTIALS_PATH = path.join(os.homedir(), ".claude", ".credentials.json");

async function main(): Promise<void> {
  console.log("Sandcastle smoke test starting...");
  console.log(`Credentials: ${CREDENTIALS_PATH}`);

  const branch = `sandcastle/smoke-test-${Date.now()}`;
  console.log(`Test branch: ${branch}`);

  const box = await createSandbox({
    branch,
    sandbox: docker({
      mounts: [
        {
          hostPath: CREDENTIALS_PATH,
          sandboxPath: "/home/agent/.claude/.credentials.json",
        },
      ],
    }),
  });

  console.log(`Sandbox created. Worktree: ${box.worktreePath}`);

  try {
    const result = await box.run({
      name: "smoke-test",
      maxIterations: 1,
      agent: claudeCode("claude-haiku-4-5-20251001"),
      prompt: "Output exactly: <promise>COMPLETE</promise>",
      completionSignal: "<promise>COMPLETE</promise>",
    });

    console.log(`\nRun complete.`);
    console.log(`Completion signal: ${result.completionSignal}`);
    console.log(`Commits: ${result.commits.length}`);

    if (result.completionSignal === "<promise>COMPLETE</promise>") {
      console.log("\n✓ Smoke test PASSED — Sandcastle + Docker stack is working.");
    } else {
      console.log("\n✗ Smoke test FAILED — completion signal not received.");
      process.exit(1);
    }
  } finally {
    await box.close();
    console.log("Sandbox closed.");
  }
}

main().catch((err) => {
  console.error("Smoke test error:", err);
  process.exit(1);
});
