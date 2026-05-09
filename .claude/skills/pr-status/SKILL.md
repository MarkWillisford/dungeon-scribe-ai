---
name: pr-status
description: Show the current status of all open PRs on Dungeon Scribe AI. Use this skill whenever Mark asks about open PRs, what's in the queue, what needs review, what Doug is working on, what's waiting on Mark, what's waiting on Doug, or any variation of "what's the PR situation." Always use this skill for PR status — don't try to answer from memory.
---

# PR Status

> Rundown of all open PRs: Doug's PRs show whether he's waiting on Mark to review; Mark's PRs show their current status.

## Fetch all open PRs

```bash
gh pr list --state open --json number,title,author,reviewDecision,reviews,reviewRequests,isDraft,createdAt,url
```

## Build the status table

Using the JSON output above, produce a markdown table with these columns:

`PR` | `Author` | `Title` | `Status`

**Known logins:**

- Mark = `MarkWillisford`
- Doug = `Doug824`

---

**Status rules for Doug's PRs** (author.login == `Doug824`):

1. If `isDraft` is true → `Draft`
2. If `MarkWillisford` appears in `reviewRequests[].login` → `Waiting on Mark`
3. If the most recent review from `MarkWillisford` has state `CHANGES_REQUESTED` → `Changes Requested (Mark)`
4. If the most recent review from `MarkWillisford` has state `APPROVED` → `Mark Approved`
5. Otherwise → `In Flight`

**Status rules for Mark's PRs** (author.login == `MarkWillisford`):

1. If `isDraft` is true → `Draft`
2. If `reviewDecision` is `APPROVED` → `Approved — Ready to Merge`
3. If `Doug824` appears in `reviewRequests[].login` AND the most recent review from `Doug824` has state `CHANGES_REQUESTED` → `Fixes Pushed — Waiting on Doug`
4. If `reviewDecision` is `CHANGES_REQUESTED` → `Back in Mark's Court`
5. If `Doug824` appears in `reviewRequests[].login` → `Waiting on Doug`
6. If any review from `Doug824` exists and decision is not yet set → `Waiting on Doug (responded)`
7. Otherwise → `In Flight`

---

**Sort order:** Doug's PRs first (ascending by PR number), then Mark's PRs (ascending by PR number).

**Aged flag:** If `createdAt` is more than 14 days before today, append `*(aged)*` after the title.

Render the table directly — no preamble needed.
