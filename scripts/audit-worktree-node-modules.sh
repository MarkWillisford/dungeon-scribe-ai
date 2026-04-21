#!/bin/bash
# Audit every git worktree for node_modules state:
# SYMLINK (broken setup), REAL (good), or MISSING (also broken).

for wt in /home/markw/worktrees/*/; do
  name=$(basename "$wt")
  nm="$wt/node_modules"
  if [ -L "$nm" ]; then
    target=$(readlink "$nm")
    printf "SYMLINK  %-40s -> %s\n" "$name" "$target"
  elif [ -d "$nm" ]; then
    count=$(ls "$nm" 2>/dev/null | wc -l)
    printf "REAL     %-40s (%s entries)\n" "$name" "$count"
  else
    printf "MISSING  %s\n" "$name"
  fi
done
