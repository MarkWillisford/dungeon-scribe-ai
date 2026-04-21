#!/bin/bash
# Fix any worktrees whose node_modules is a symlink to the main repo.
# Removes the symlink and installs fresh locally.

set -e

for wt in /home/markw/worktrees/*/; do
  name=$(basename "$wt")
  nm="$wt/node_modules"
  if [ -L "$nm" ]; then
    echo "==============================================="
    echo "FIXING: $name"
    echo "==============================================="
    cd "$wt"
    rm "$nm"
    t_start=$(date +%s)
    if npm install --no-fund --no-audit --silent > /tmp/npm.install.log 2>&1; then
      dur=$(( $(date +%s) - t_start ))
      count=$(ls node_modules 2>/dev/null | wc -l)
      echo "OK: $name installed in ${dur}s, $count top-level entries"
    else
      echo "FAIL: npm install exited non-zero. Tail of log:"
      tail -20 /tmp/npm.install.log
    fi
    echo ""
  fi
done

echo "=== final audit ==="
for wt in /home/markw/worktrees/*/; do
  name=$(basename "$wt")
  nm="$wt/node_modules"
  if [ -L "$nm" ]; then
    printf "SYMLINK  %s (still broken)\n" "$name"
  elif [ -d "$nm" ]; then
    count=$(ls "$nm" 2>/dev/null | wc -l)
    printf "REAL     %-40s (%s entries)\n" "$name" "$count"
  else
    printf "MISSING  %s\n" "$name"
  fi
done
