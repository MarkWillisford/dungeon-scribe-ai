# WSL Development Setup

This guide is for engineers developing Dungeon Scribe AI from **WSL2** on Windows. If you're on macOS or native Linux, skip to the main [README](../README.md); none of this applies to you.

WSL2 introduces several gotchas when running Expo and testing against a physical phone. The workarounds below are what we learned the hard way. Following them in order will save you a full day of debugging.

---

## One-time WSL setup

### 1. Fix Node's IPv6 DNS behavior

WSL2 returns IPv6 AAAA records via DNS but cannot actually route IPv6 traffic. Node's `fetch` (used by Expo CLI) prefers IPv6 by default, times out, and Expo flips to offline mode for the rest of the process. Symptoms:

- `Networking has been disabled`
- `Unable to reach well-known versions endpoint`
- Tunnel setup failing before it even starts

Add this to your `~/.bashrc`:

```bash
export NODE_OPTIONS="--dns-result-order=ipv4first"
```

Open a new terminal (or `source ~/.bashrc`). This tells Node to prefer IPv4 DNS resolution globally. Safe for all tools; IPv6 wasn't working from WSL2 anyway.

### 2. Get your own ngrok authtoken

`npx expo start --tunnel` uses Expo's built-in **shared** ngrok account by default. That account is heavily rate-limited and fails intermittently with:

```
CommandError: TypeError: Cannot read properties of undefined (reading 'body')
Check the Ngrok status page for outages: https://status.ngrok.com/
```

The fix is a free personal ngrok account:

1. Sign up at https://dashboard.ngrok.com/signup (no credit card).
2. Copy your authtoken from https://dashboard.ngrok.com/get-started/your-authtoken.
3. Write it to `~/.expo/ngrok.yml`:
   ```bash
   mkdir -p ~/.expo
   echo "authtoken: YOUR_TOKEN_HERE" > ~/.expo/ngrok.yml
   chmod 600 ~/.expo/ngrok.yml
   ```

Your token is personal. Do not commit it or share it. It lives outside the repo in your home directory.

### 3. Get a `.env` from the team

The app's `.env` is gitignored and not checked into the repo. Ask Mark or Doug to send you a copy privately. It contains Firebase staging credentials and any other runtime config the app needs.

Without `.env`, the app fails at launch with `FirebaseError: Firebase: Error (auth/invalid-api-key)` and cascading "missing default export" warnings from every route.

---

## Creating a new worktree

`git worktree add` is the standard command, but git does **not** copy gitignored files and does **not** run `npm install`. Both are required. Use this as your template:

```bash
# From the main repo:
git worktree add /home/$(whoami)/worktrees/<name> -b MW/<name>

cd /home/$(whoami)/worktrees/<name>

# Copy gitignored config that doesn't travel with git:
cp "/mnt/c/path/to/main-repo/.env" .env

# Install fresh dependencies for this worktree. Never symlink across worktrees.
rm -rf node_modules
npm install
npm ls --depth=0
```

**Why you can't skip either step:**

- Skipping `.env` → `auth/invalid-api-key` at runtime, with misleading cascading errors.
- Skipping `npm install` → Metro cannot resolve any modules.
- Sharing `node_modules` across worktrees → Metro resolves through symlinks unpredictably, native modules get built for one branch's config and silently break others.

---

## Running Expo against a physical phone

### The network topology

WSL2 has its own internal subnet (often `192.168.x.x/20` or `172.x.x.x/20`), separate from your home LAN. Your phone on the home WiFi cannot reach WSL's internal IP directly. You have two options.

### Option A: Tunnel mode (works across networks)

```bash
npx expo start --tunnel --clear
```

Requires your personal ngrok token from step 2. Bundle transfers go through ngrok's public relay. Slower than LAN for the initial bundle, but works from any network (useful when testing from cellular or a separate WiFi).

### Option B: LAN mode with Windows port-forward (faster, same-WiFi only)

Get WSL's current internal IP:

```bash
hostname -I
```

From an **elevated PowerShell** on Windows (once per WSL reboot):

```powershell
netsh interface portproxy add v4tov4 listenport=8081 listenaddress=0.0.0.0 connectport=8081 connectaddress=<WSL-IP>
```

And, one time ever (persists across reboots):

```powershell
New-NetFirewallRule -DisplayName "Expo Metro 8081" -Direction Inbound -LocalPort 8081 -Protocol TCP -Action Allow
```

Back in WSL, tell Metro to advertise the Windows LAN IP so the QR code works:

```bash
export REACT_NATIVE_PACKAGER_HOSTNAME=<your-windows-LAN-IP>
npx expo start --clear
```

WSL's internal IP can change on reboot. When LAN mode stops working after a restart, re-run the `netsh portproxy` line with the new IP. The firewall rule stays.

---

## Switching between worktrees

Expo caches bundles per-project. When switching which worktree is running Metro:

1. Stop Metro (Ctrl+C).
2. Force-stop Expo Go on your phone (or the dev client).
3. In the new worktree, start with `--clear`:
   ```bash
   npx expo start --tunnel --clear
   ```
4. If the new branch changed native deps or `app.json` / `app.config.js`, also run:
   ```bash
   npx expo prebuild --clean
   ```

---

## Troubleshooting

| Error                                                                              | Cause                                                                              | Fix                                                                                                 |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `Networking has been disabled`                                                     | WSL2 IPv6 routing broken                                                           | `NODE_OPTIONS="--dns-result-order=ipv4first"` in `~/.bashrc`                                        |
| `Unable to reach well-known versions endpoint`                                     | Same as above (downstream)                                                         | Same as above                                                                                       |
| `Cannot read properties of undefined (reading 'body')` with ngrok status page link | Expo's shared ngrok account rate-limited                                           | Use your own ngrok authtoken in `~/.expo/ngrok.yml`                                                 |
| `FirebaseError: auth/invalid-api-key`                                              | Missing `.env` in the worktree                                                     | `cp` from main repo                                                                                 |
| Many "Route is missing the required default export" warnings                       | Downstream of an earlier module-init error                                         | Fix the first real error in the log; warnings clear                                                 |
| Phone shows `java.io.IOException: failed to download remote update`                | Phone cannot reach Metro                                                           | Confirm tunnel is up, or set up port-forward (Option B above)                                       |
| `git worktree prune` removes your live worktrees                                   | Worktree paths stored in WSL (`/home/...`) aren't resolvable from Windows Git Bash | Only run `git worktree` commands from **inside WSL**, never from a Windows shell                    |
| Expo Go gives "failed to download" after scanning QR                               | QR code points at WSL's internal IP which phone can't reach                        | Use tunnel mode, or set `REACT_NATIVE_PACKAGER_HOSTNAME` to the Windows LAN IP and use port-forward |

---

## Useful scripts in this repo

From anywhere in the repo:

- **`scripts/worktree-status.sh`**: lists all worktrees with branch, last commit, ahead/behind `origin/main`, dirty count, and `node_modules` presence. Handy orientation when you have several branches in flight.
- **`scripts/branch-cleanup.sh`**: classifies local `MW/*` branches as merged-vs-unmerged against `origin/main`, auto-deletes the merged ones, reports the rest for manual review. Safe to run periodically; never touches anything with unique commits.

Each script is self-locating (doesn't matter which directory you run it from).

---

## Why WSL at all?

Two reasons:

1. **Native Linux toolchain.** Firebase CLI, ts-node, various scripts run faster and more predictably on ext4 + native Node than through the `/mnt/c/` WSL-to-Windows bridge.
2. **Filesystem speed.** Node projects with thousands of files in `node_modules` are 5-10x faster to install and bundle on WSL's ext4 than on NTFS via `/mnt/c`.

The tradeoffs (networking quirks, cross-filesystem bridges) are what this document exists to mitigate.
