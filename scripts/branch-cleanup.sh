#!/bin/bash
# Classify local MW/* branches: merged into origin/main vs. has unique commits.
# Auto-delete merged ones (safe: all commits preserved on main).
# Report unmerged ones for manual review.
# Skips branches currently checked out in any worktree.

set -e
cd "/mnt/c/Users/Markw/Documents/Development Projects/Dungeon Scribe AI 1.1"
git fetch --quiet origin 2>/dev/null || true

# Collect branches currently checked out in any worktree
checked_out=$(git worktree list --porcelain | awk '/^branch /{sub("refs/heads/",""); print $2}')

merged=()
unmerged=()

# All local MW/* branches
for branch in $(git for-each-ref --format='%(refname:short)' 'refs/heads/MW/*'); do
  # Skip if currently checked out anywhere
  if echo "$checked_out" | grep -qx "$branch"; then
    continue
  fi

  if git merge-base --is-ancestor "$branch" origin/main 2>/dev/null; then
    merged+=("$branch")
  else
    ahead=$(git rev-list --count origin/main.."$branch" 2>/dev/null)
    last=$(git log -1 --format=%cr "$branch" 2>/dev/null)
    unmerged+=("$branch | ahead=$ahead | last=$last")
  fi
done

echo "=========================================="
echo "MERGED into origin/main (deleting ${#merged[@]})"
echo "=========================================="
for b in "${merged[@]}"; do
  git branch -D "$b"
done

echo ""
echo "=========================================="
echo "UNMERGED (${#unmerged[@]}) — manual review needed"
echo "=========================================="
printf '%s\n' "${unmerged[@]}"

echo ""
echo "=========================================="
echo "Local branches remaining"
echo "=========================================="
git branch | grep -c "MW/" | xargs echo "MW/ branches remaining:"
