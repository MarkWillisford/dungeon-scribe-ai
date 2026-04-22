#!/bin/bash
# new-worktree.sh: Create a git worktree with the correct setup.
#
# Does everything `git worktree add` does NOT do:
#   - Copies gitignored .env from the main repo
#   - Installs fresh node_modules (no symlinks, no sharing across worktrees)
#   - Verifies the install
#
# Usage:
#   scripts/new-worktree.sh <branch-name> [base-branch]
#
# Examples:
#   scripts/new-worktree.sh MW/my-feature              # new branch off main
#   scripts/new-worktree.sh MW/my-feature MW/other     # new branch off another branch
#   scripts/new-worktree.sh MW/existing-branch         # check out existing branch
#   scripts/new-worktree.sh my-feature                 # MW/ prefix added automatically

set -e

# ---- Args ----

if [ -z "$1" ]; then
  echo "Usage: $0 <branch-name> [base-branch]"
  echo ""
  echo "  <branch-name>: branch to check out (MW/ prefix added if missing)"
  echo "  [base-branch]: branch to base new branches off (default: main)"
  exit 1
fi

BRANCH="$1"
BASE="${2:-main}"

# Auto-add MW/ prefix if missing and no other prefix present
if [[ "$BRANCH" != */* ]]; then
  BRANCH="MW/$BRANCH"
fi

# ---- Paths ----

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
MAIN_REPO="$(dirname "$SCRIPT_DIR")"
SHORT_NAME=$(basename "$BRANCH")
WORKTREE_ROOT="/home/$(whoami)/worktrees"
WORKTREE_PATH="$WORKTREE_ROOT/$SHORT_NAME"

# ---- Sanity checks ----

if [ ! -d "$MAIN_REPO/.git" ] && [ ! -f "$MAIN_REPO/.git" ]; then
  echo "FAIL: $MAIN_REPO does not look like a git repo"
  exit 1
fi

if [ ! -f "$MAIN_REPO/.env" ]; then
  echo "FAIL: .env missing in main repo at $MAIN_REPO/.env"
  echo "Ask a teammate for a copy before creating worktrees."
  exit 1
fi

if [ -d "$WORKTREE_PATH" ] || [ -L "$WORKTREE_PATH" ]; then
  echo "FAIL: worktree path already exists: $WORKTREE_PATH"
  echo "Remove it first:"
  echo "  git -C \"$MAIN_REPO\" worktree remove --force $WORKTREE_PATH"
  exit 1
fi

mkdir -p "$WORKTREE_ROOT"

# ---- Create the worktree ----

cd "$MAIN_REPO"
git fetch --quiet origin 2>/dev/null || true

if git show-ref --verify --quiet "refs/heads/$BRANCH"; then
  echo "[1/4] Branch $BRANCH exists locally, checking out into $WORKTREE_PATH"
  git worktree add "$WORKTREE_PATH" "$BRANCH"
elif git show-ref --verify --quiet "refs/remotes/origin/$BRANCH"; then
  echo "[1/4] Branch $BRANCH exists on origin, checking out into $WORKTREE_PATH"
  git worktree add "$WORKTREE_PATH" "$BRANCH"
else
  echo "[1/4] Creating new branch $BRANCH off $BASE in $WORKTREE_PATH"
  git worktree add "$WORKTREE_PATH" -b "$BRANCH" "$BASE"
fi

cd "$WORKTREE_PATH"

# ---- Copy gitignored config ----

echo "[2/4] Copying .env from main repo"
cp "$MAIN_REPO/.env" .env

# ---- Install dependencies ----

echo "[3/4] Installing dependencies (fresh, no symlinks)"
rm -rf node_modules
t_start=$(date +%s)
if ! npm install --no-fund --no-audit; then
  echo ""
  echo "FAIL: npm install exited non-zero. Worktree is checked out but deps are broken."
  echo "Retry manually: cd $WORKTREE_PATH && npm install"
  exit 1
fi
dur=$(( $(date +%s) - t_start ))

# ---- Verify ----

echo "[4/4] Verifying dependency tree"
if npm ls --depth=0 >/dev/null 2>&1; then
  echo "      clean"
else
  issues=$(npm ls --depth=0 2>&1 | grep -cE "missing|UNMET|invalid" || true)
  if [ "$issues" -gt 0 ]; then
    echo "      WARN: $issues dep tree issues:"
    npm ls --depth=0 2>&1 | grep -E "missing|UNMET|invalid" | head -5
  else
    echo "      clean"
  fi
fi

# ---- Done ----

echo ""
echo "================================================================"
echo "Worktree ready"
echo "  path:     $WORKTREE_PATH"
echo "  branch:   $BRANCH"
echo "  install:  ${dur}s"
echo "================================================================"
echo ""
echo "Next steps:"
echo "  cd $WORKTREE_PATH"
echo "  npx expo start --tunnel --clear    # to test on phone"
