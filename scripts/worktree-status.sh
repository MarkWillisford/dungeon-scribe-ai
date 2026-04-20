#!/bin/bash
# Report status of every git worktree: branch, last commit, ahead/behind main,
# dirty state, node_modules presence. Discovers worktrees dynamically.
# Run from anywhere in the repo.

set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO="$(dirname "$SCRIPT_DIR")"
cd "$REPO"
git fetch --quiet origin 2>/dev/null || true

printf "%-42s %-34s %-12s %-10s %-6s %-10s %s\n" \
  "PATH" "BRANCH" "LAST" "A/B main" "DIRTY" "node_mods" "SUBJECT"
printf "%-42s %-34s %-12s %-10s %-6s %-10s %s\n" \
  "----" "------" "----" "--------" "-----" "---------" "-------"

git worktree list --porcelain | awk '
  /^worktree /{ path = $0; sub(/^worktree /, "", path) }
  /^branch /  { branch = $0; sub(/^branch /, "", branch); print path"|"branch }
  /^detached/ { print path"|(detached)" }
' | while IFS='|' read -r wpath branch; do
  short_path="${wpath/#\/mnt\/c\/Users\/Markw\/Documents\//WIN:}"
  short_path="${short_path/#\/home\/markw\/worktrees\//wt:}"
  short_branch="${branch#refs/heads/}"

  cd "$wpath" 2>/dev/null || continue

  last=$(git log -1 --format=%cr 2>/dev/null || echo "?")
  subject=$(git log -1 --format=%s 2>/dev/null | cut -c1-40)
  dirty=$(git status --porcelain 2>/dev/null | wc -l)

  if [ "$short_branch" = "(detached)" ]; then
    ab="detached"
  else
    ahead=$(git rev-list --count origin/main..HEAD 2>/dev/null || echo "?")
    behind=$(git rev-list --count HEAD..origin/main 2>/dev/null || echo "?")
    ab="${ahead}/${behind}"
  fi

  if [ -d "$wpath/node_modules" ]; then
    nm="present"
  else
    nm="MISSING"
  fi

  printf "%-42s %-34s %-12s %-10s %-6s %-10s %s\n" \
    "$short_path" "$short_branch" "$last" "$ab" "$dirty" "$nm" "$subject"
done
