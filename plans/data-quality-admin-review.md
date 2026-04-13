# Data Quality & Admin Review System

## 2026-03-17 (revised 2026-04-13)

## Status (as of 2026-04-13): NOT STARTED

No code has been written for this plan. `verificationStatus` does not exist in any type file, seed script, or service. The admin UI does not exist. Everything below is the design spec ready to implement.

**Source normalization note (PR #55, merged 2026-04-11):** The source field across all collections is now a `GameDataSource` object `{ bookId, bookName, publisher, page? }` rather than a raw string. When querying Firestore to find unverified entries, `source.bookId === 'unknown'` is a useful secondary signal.

---

### Problem

Scraped game data contains entries we haven't personally verified. Without a system to track this, unverified entries get seeded to Firestore and silently used in character builders as if they were authoritative — which they may not be.

**Goal:** Tag every entry with a verification status, hide known-broken entries from players, and give admins a frictionless way to confirm data as they naturally encounter it in the app — no separate review queue required.

---

## Verification Status Values

| Status         | Meaning                                                          |
| -------------- | ---------------------------------------------------------------- |
| `needs_review` | Default for all seeded entries — not yet confirmed by a human    |
| `verified`     | An admin has looked at this entry and confirmed it looks correct |
| `stub`         | Clearly broken or empty — hidden from all player-facing pickers  |

Everything starts as `needs_review`. Admins mark things `verified` as they encounter them naturally while using the app. Admins mark things `stub` when they spot an entry that's clearly wrong or empty.

---

## Scope

This plan covers:

1. Type interface changes (all collection types)
2. Seed scripts — default all entries to `needs_review`
3. Firestore service query updates (hide `stub` from players)
4. Admin inline confirm button (shown whenever admin views any data entry)
5. Player-facing `needs_review` badge
6. Admin dashboard — optional progress view

---

## Data Model Changes

### New shared fields (add to every collection entry type)

```typescript
// Add to: AnimalCompanionEntry, DomainEntry, SpellEntry, ClassChoiceDefinition,
//          RagePowerEntry, RogueTalentEntry, TemplateEntry, DeityEntry, FeatEntry
verificationStatus: 'verified' | 'needs_review' | 'stub';
adminNotes?: string; // free-text; admin can note what's wrong or what source was used
```

### Shared type helper

```typescript
// src/types/base.ts — add to existing file
export interface DataQualityFields {
  verificationStatus: 'verified' | 'needs_review' | 'stub';
  adminNotes?: string;
}
```

Then add `extends DataQualityFields` (or duplicate the two fields) to each collection interface.

---

## Seed Script Strategy

**Every entry in every seed script gets `verificationStatus: 'needs_review'`.**

No manual scanning, no per-entry tagging decisions. Just set the default and move on. The only exception is entries that are clearly empty/placeholder at seed time — those can be tagged `stub` explicitly:

```typescript
// Default — use for everything
verificationStatus: 'needs_review',

// Only when the entry is demonstrably broken (empty stat block, all-zero progressions, etc.)
verificationStatus: 'stub',
```

**Known stubs in animal companions** (empty stat blocks, confirmed at scrape time):

- Squirrel Giant Tree, Stag Beetle, Trilobite Giant, Trout, Tuatara Giant
- Turkey, Turtle (plain), Ursine Charger, Viper Giant, Whale Shark
- Wombat Giant, Woodpecker Giant, Wyvern Skeletal

All other entries — including entries that previously had TODO comments or community-sourced stats — get `needs_review`. The admin will confirm them inline over time as they use the app.

---

## Firestore Service Changes

### All player-facing pickers

```typescript
// Hide stub entries from all player-facing queries
query(collection(db, collectionName), where('verificationStatus', '!=', 'stub'), orderBy('name'));
```

`needs_review` entries are visible to players — they just show a warning badge (see below). Only `stub` entries are hidden.

**Firestore index note:** `where('verificationStatus', '!=', 'stub')` combined with `orderBy('name')` requires a composite index. Add it to `firestore.indexes.json` before deploying.

---

## Admin Inline Confirm Button

This is the primary review workflow. No separate queue screen needed.

### How it works

When an admin is logged in, every data entry displayed anywhere in the app — feat picker rows, animal companion cards, domain lists, spell entries, etc. — shows a small status pill in the corner:

```
┌─ Power Attack ────────────────────────────┐
│  +1 to hit / +2 damage when -1 to hit    │
│                                [needs review ▾] │
└───────────────────────────────────────────┘
```

Tapping the pill opens a quick action sheet:

```
┌─ Power Attack ────────────────┐
│  Mark this entry as:          │
│                               │
│  ✓  Verified — looks correct  │
│  ✗  Stub — broken or empty    │
│  ·  Keep as needs review      │
│                               │
│  [Admin notes (optional)]     │
│  [________________________]   │
│                               │
│       [Save]  [Cancel]        │
└───────────────────────────────┘
```

Selecting **Verified** or **Stub** writes the update to Firestore immediately. The pill updates in-place. No navigation away, no separate screen.

If the entry is already `verified`, the pill shows a green checkmark instead — still tappable if the admin wants to revise.

### Admin role gate

```typescript
// src/services/AdminService.ts
const ADMIN_UIDS = ['your-firebase-uid-here']; // hardcoded for now, env var later

export function isAdmin(uid: string): boolean {
  return ADMIN_UIDS.includes(uid);
}
```

The confirm pill is rendered only when `isAdmin(currentUser.uid)` is true. Regular users never see it.

---

## Player-Facing Badge

For `needs_review` entries visible to regular users, show a small amber `⚠` badge in picker rows. Tapping shows a tooltip:

> "This entry's stats are unconfirmed. It may differ from your physical sourcebook."

Do **not** block selection — the player can still use it. This is informational, not a hard error.

---

## Admin Dashboard (optional, Phase 2)

A simple progress screen at `app/admin/data-review.tsx` showing how far along verification is per collection:

```
┌─ Data Quality ─────────────────────────┐
│  feats            2,401 ✓  186 ⚠  0 ✗ │
│  traits             891 ✓   80 ⚠  0 ✗ │
│  animalcompanions   185 ✓   18 ⚠ 13 ✗ │
│  domains            161 ✓   20 ⚠  0 ✗ │
│  spells           2,200 ✓  300 ⚠  0 ✗ │
│  ...                                   │
└────────────────────────────────────────┘
```

This is a progress view, not a worklist. The actual confirming happens inline throughout the app. Build this after the inline confirm button is working.

---

## Implementation Phases

### Phase A — Type changes

1. **Branch:** `MW/data-quality-fields`
2. Add `verificationStatus` + `adminNotes?` to all collection type interfaces (via `DataQualityFields` in `base.ts`)
3. Run `npm run typecheck` — TS will catch every seed script missing the field
4. Run tests — no logic changes, all should pass

### Phase B — Seed script defaults

5. Add `verificationStatus: 'needs_review'` to every entry in every seed script
6. Tag known animal companion stubs as `verificationStatus: 'stub'`
7. Re-run typecheck to confirm all entries covered

### Phase C — Service query updates

8. Add `where('verificationStatus', '!=', 'stub')` to all player-facing Firestore queries
9. Add composite indexes to `firestore.indexes.json`
10. This is a no-op until data is re-seeded — seed after Phase A/B are merged

### Phase D — Admin inline confirm + player badge

11. Build `src/services/AdminService.ts` — `isAdmin()` helper
12. Build `src/components/shared/VerificationStatusPill.tsx` — the tappable status pill
13. Build the confirm action sheet (status selector + adminNotes + Save)
14. Wire `AdminService.updateVerificationStatus(collectionName, docId, status, notes)` to Firestore
15. Add `VerificationStatusPill` to all picker row components — renders only when admin is logged in
16. Add `⚠` player badge for `needs_review` entries in picker rows (non-admin users)

### Phase E — Admin dashboard (optional)

17. Create `app/admin/_layout.tsx` (admin role gate)
18. Build `app/admin/data-review.tsx` — per-collection counts of verified/needs_review/stub

---

## Files to Create / Modify

| File                                                | Change                                                                            |
| --------------------------------------------------- | --------------------------------------------------------------------------------- |
| `src/types/base.ts`                                 | Add `DataQualityFields` interface                                                 |
| `src/types/animalCompanions.ts`                     | Add `verificationStatus`, `adminNotes?`                                           |
| `src/types/classOptions.ts`                         | Add to `DomainEntry`, `RagePowerEntry`, `RogueTalentEntry`                        |
| `src/types/spells.ts`                               | Add `verificationStatus`, `adminNotes?`                                           |
| `src/types/classChoices.ts`                         | Add `verificationStatus`, `adminNotes?`                                           |
| `src/types/templates.ts`                            | Add `verificationStatus`, `adminNotes?`                                           |
| `src/types/deities.ts`                              | Add `verificationStatus`, `adminNotes?`                                           |
| `src/types/feats.ts`                                | Add `verificationStatus`, `adminNotes?`                                           |
| `scripts/db/seed*.ts` (all)                         | Set `verificationStatus: 'needs_review'` on every entry; `stub` for known empties |
| `src/services/Firebase*Service.ts` (picker queries) | Add `where('verificationStatus', '!=', 'stub')` filter                            |
| `firestore.indexes.json`                            | Add composite indexes for `verificationStatus != stub` + `orderBy('name')`        |
| `src/services/AdminService.ts`                      | New — `isAdmin()`, `updateVerificationStatus()`                                   |
| `src/components/shared/VerificationStatusPill.tsx`  | New — tappable status pill shown to admins on any data entry                      |
| `src/components/shared/UnconfirmedBadge.tsx`        | New — amber ⚠ badge shown to players on `needs_review` entries                    |
| `app/admin/_layout.tsx`                             | New (Phase E) — admin role gate                                                   |
| `app/admin/data-review.tsx`                         | New (Phase E) — per-collection progress dashboard                                 |

---

## Status

- [ ] Phase A — Type changes
- [ ] Phase B — Seed script defaults
- [ ] Phase C — Service query updates
- [ ] Phase D — Admin inline confirm + player badge
- [ ] Phase E — Admin dashboard (optional)
