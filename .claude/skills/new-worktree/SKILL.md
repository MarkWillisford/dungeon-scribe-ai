---
name: new-worktree
description: Create a new git worktree for Dungeon Scribe AI with the correct setup (copies .env, installs fresh node_modules, no symlinks). Use whenever Mark or another engineer asks to create a worktree, spin up a branch for testing, set up parallel work on a new feature, fresh a branch off main, or any variation of "make a worktree for X" or "set up X in a new branch". Do not substitute raw `git worktree add` commands; always use the script.
---

# new-worktree

When this skill triggers, create the worktree by running the project's shell script. Never run `git worktree add` manually, never symlink `node_modules`, never skip the `.env` copy.

## The one command

```bash
bash scripts/new-worktree.sh <branch-name> [base-branch]
```

The script lives at the repo root. It is the canonical way to create a worktree for this project.

### Arguments

- `<branch-name>`: required. The branch to check out or create. If no prefix is given, `MW/` is added automatically.
- `[base-branch]`: optional. The branch to base a new branch off. Defaults to `main`.

### Examples of how to invoke

```bash
# Most common: new branch off main
bash scripts/new-worktree.sh MW/my-feature

# Same, auto-prefix
bash scripts/new-worktree.sh my-feature

# Check out a branch that already exists locally or on origin
bash scripts/new-worktree.sh MW/existing-branch

# New branch off a non-main base
bash scripts/new-worktree.sh MW/stacked-feature MW/base-feature
```

## What the script does (so you know what to expect)

1. Creates the worktree directory at `/home/<user>/worktrees/<short-name>`.
2. Either creates a new branch off the base, or checks out an existing local/remote branch if one matches.
3. Copies `.env` from the main repo into the worktree (Firebase credentials, gitignored, does not travel with `git worktree add`).
4. Runs a fresh `npm install` inside the worktree, explicitly removing any prior `node_modules` or symlink first.
5. Verifies the dependency tree with `npm ls --depth=0` and reports warnings.

Every step is required. Skipping any of them causes a specific, user-visible failure:

- Skip `.env` copy → Firebase fails with `auth/invalid-api-key` at app launch, with cascading "missing default export" warnings from every Expo Router route.
- Skip `npm install` → Metro cannot resolve any module.
- Symlink `node_modules` to main → Metro resolves through symlinks and produces bundle URLs pointing at `/mnt/c/...` paths that return 404 to the phone.

## After the script succeeds

Report back to Mark with the concrete path and branch the script printed, then suggest the obvious next moves:

- `cd <worktree-path>` to move into it.
- `npx expo start --tunnel --clear` if he wants to test on phone.

Do NOT cd into the worktree yourself in the same shell invocation; that shell ends when the tool call returns. Just tell Mark the path.

## Errors the script surfaces and what to do

- `.env missing in main repo`: stop. Tell Mark the main repo is missing its `.env` file and ask where to get it from (team, 1Password, Doug). Do not continue.
- `worktree path already exists`: stop. Show Mark the `git worktree remove --force <path>` command the script printed, and ask whether to remove it. Do not auto-remove; the existing worktree might contain uncommitted work.
- `npm install failed`: stop. Leave the worktree directory as-is so Mark can investigate. Surface the tail of the install log, do NOT delete the worktree or rerun the command blindly.

## Things you must not do when this skill is active

- Do NOT run `git worktree add` directly.
- Do NOT `ln -s` node_modules from another worktree or from the main repo.
- Do NOT copy an existing worktree's `node_modules` into the new worktree.
- Do NOT skip `.env` copy even if the user says "just make a worktree quickly."
- Do NOT omit `--clear` from the suggested `expo start` next step when a fresh worktree is involved (Metro cache is per-project-path, but `--clear` is cheap insurance).

## Related reference

- Full WSL dev setup guide (including rationale for each step): [docs/wsl-dev-setup.md](../../../docs/wsl-dev-setup.md)
- Audit existing worktrees for symlinked node_modules: `bash scripts/audit-worktree-node-modules.sh`
- Bulk-fix symlinked worktrees: `bash scripts/fix-symlinked-worktrees.sh`
