# WSL2 Hot Reload Fix

## Status: COMPLETE — Fix 3 applied (2026-05-08)

## Date: 2026-05-06

---

## Root Cause

The project lives at `/mnt/c/Users/Markw/Documents/Development Projects/Dungeon Scribe AI 1.1/` — a Windows NTFS drive mounted inside WSL2 via the **9P protocol**.

WSL2 kernel **5.10.16.3** (currently installed) does not propagate inotify events from the Windows host to the Linux side over 9P. Metro's file watcher chain:

1. **WatchmanWatcher** — watchman is not installed → skipped
2. **NativeWatcher** (`fs.watch` recursive) — not supported on Linux → skipped
3. **FallbackWatcher** — the actual fallback; calls `fs.watch()` per directory → this is inotify → **events never arrive on `/mnt/c/` paths in kernel 5.10**

Result: Metro starts, serves the initial bundle, and then sits silent. File saves on the Windows side are invisible to Metro. No Fast Refresh, no full reload — nothing.

**Proof this is the root cause:** Worktrees at `/home/markw/worktrees/` hot-reload correctly. They live on WSL2's native ext4 virtual disk, where inotify works. Same Metro config, same code, different filesystem.

---

## What Is NOT the Problem

Investigated and ruled out:

| Config                                               | Status                                    |
| ---------------------------------------------------- | ----------------------------------------- |
| `babel.config.js` — `react-native-reanimated/plugin` | Correct for v4.x. Plugin dir exists.      |
| `babel.config.js` — `api.cache(true)`                | Correct.                                  |
| `metro.config.js` — `withNativeWind` wiring          | Correct.                                  |
| `metro.config.js` — `METRO_MAIN_ROOT` worktree logic | Correct.                                  |
| `global.css` — referenced in metro config            | File exists.                              |
| `app.json`                                           | Clean. No issues.                         |
| NativeWind v4 Fast Refresh quirks                    | Secondary issue; not the primary blocker. |

---

## Fixes (in order of preference)

### Fix 1 — Update the WSL2 kernel (try first)

Run in **Windows PowerShell** (not WSL):

```powershell
wsl --update
wsl --shutdown
```

Microsoft improved 9P inotify propagation in the 5.15 kernel series. Updating from 5.10 → 5.15+ may resolve the issue entirely with no code or filesystem changes. Current latest WSL2 kernel is 5.15.167+.

After the update, reopen WSL and test: `npx expo start --tunnel`

**Cost:** ~2 minutes. **Confidence:** Moderate — 5.15 is better but not guaranteed on all paths.

---

### Fix 2 — Install watchman in WSL2

Watchman uses its own crawling mechanism that can work on `/mnt/c/` paths even when raw inotify doesn't:

```bash
sudo apt install watchman
```

No config changes needed — Metro auto-detects watchman. Restart Metro after installing.

**Cost:** ~5 minutes. **Confidence:** Low-to-moderate — worth trying before moving files.

---

### Fix 3 — Move the main repo to a native Linux path (definitive fix)

The worktrees at `/home/markw/worktrees/` already prove this works. Extend the model to the main repo:

```bash
git clone git@github.com:MarkWillisford/dungeon-scribe-ai.git /home/markw/dungeon-scribe-ai
cd /home/markw/dungeon-scribe-ai
cp "/mnt/c/Users/Markw/Documents/Development Projects/Dungeon Scribe AI 1.1/.env" .env
npm install
npx expo start --tunnel
```

Then update:

- VS Code workspace to point at `/home/markw/dungeon-scribe-ai/`
- `CLAUDE.md` working directory note
- Any scripts or aliases that reference the Windows path

The Windows-side repo at `/mnt/c/` can remain as a backup or be removed.

**Cost:** ~15 minutes one-time setup. **Confidence:** Guaranteed — this is the same model as the working worktrees.

---

## Metro Version Reference

| Package          | Version                           |
| ---------------- | --------------------------------- |
| `metro`          | 0.83.3                            |
| `metro-file-map` | same                              |
| `expo`           | ~54.0.0                           |
| `react-native`   | 0.81.5                            |
| WSL2 kernel      | 5.10.16.3-microsoft-standard-WSL2 |

---

## Recommended Order

1. `wsl --update` + `wsl --shutdown` — takes 2 minutes, no risk
2. `sudo apt install watchman` — takes 5 minutes, low risk
3. Clone to `/home/markw/dungeon-scribe-ai/` — guaranteed fix, ~15 minutes

Do them in sequence and stop when hot reload works.
