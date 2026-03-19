# Deities Database — Collection Plan

## Overview

Collect all Paizo deities from Archives of Nethys into the Firestore `deities` collection.
Static TS files are seed scripts only — the authoritative copy lives in Firestore.

**Firestore collection:** `deities`
**Scope:** ~400 deities across 15 groups
**Source index:** https://www.aonprd.com/DeitiesByGroup.aspx
**Individual entry URL:** https://www.aonprd.com/DeityDisplay.aspx?ItemName={Name}

**Used by:**

- Cleric domain filter (`collectionFilter: { deityIds: '{chosen_deity}' }` on `cleric-domains` definition)
- Sentinel class: deity pick at creation (`sentinel-deity` definition)
- Identity section: deity field on all characters (Firestore query, no filter)

---

## Data Model

Types are defined in `src/types/deities.ts`. No new type files needed — `DeityBoonTier`,
`DeityBoons`, and `DeityEntry` already exist (added in Phase 3a type work).

```typescript
// src/types/deities.ts (reference — do not re-create)

export interface DeityBoonTier {
  tier: 1 | 2 | 3;
  description: string;
}

export interface DeityBoons {
  obedienceRequirement: string;
  evangelist: DeityBoonTier[]; // exactly 3 entries
  exalted: DeityBoonTier[]; // exactly 3 entries
  sentinel: DeityBoonTier[]; // exactly 3 entries
}

export interface DeityEntry {
  id: string; // kebab-case: 'sarenrae', 'iomedae', 'demon-lord-lamashtu'
  name: string;
  title?: string; // e.g. 'The Dawnflower'
  alignment: string; // 'LG'|'NG'|'CG'|'LN'|'N'|'CN'|'LE'|'NE'|'CE'
  pantheon: string; // exact group name from index: 'Core Deities', 'Empyreal Lords', etc.
  portfolio: string; // areas of concern text
  domains: string[]; // kebab-case domain ids matching the domains collection
  subdomains: string[]; // kebab-case subdomain ids, e.g. 'good-agathion'
  favoredWeapon: string;
  allowedClericAlignments: string[]; // derived from deity alignment using PF1e one-step rule
  symbol?: string;
  sacredAnimal?: string;
  sacredColors?: string[];
  description?: string;
  boons?: DeityBoons; // omit entirely if deity has no Deific Obedience entry
  source: string;
  isOfficial: boolean;
  visibility: 'global' | 'campaign' | 'private';
  rev: number;
}
```

**`allowedClericAlignments` derivation:** A cleric's alignment must be within one step of their
deity on no more than one alignment axis. Examples:

| Deity alignment | Allowed cleric alignments |
| --------------- | ------------------------- |
| LG              | LG, LN, NG                |
| NG              | LG, NG, CG, N             |
| CG              | NG, CG, CN                |
| LN              | LG, LN, LE, N             |
| N               | LN, N, CN, NG, NE         |
| CN              | CG, CN, CE, N             |
| LE              | LG, LN, LE, NE            |
| NE              | N, NE, LE, CE             |
| CE              | CN, NE, CE                |

---

## File Structure

```
src/data/deities/
  milani.ts           ← DONE (hand-authored)
  iomedae.ts          ← DONE (hand-authored)
  raw/
    deities_batch_001.ts    ← Agent output, 25 entries each
    deities_batch_002.ts
    ...
    deities_batch_016.ts
  index.ts            ← Combined barrel (written after all batches done)

scripts/db/
  seedDeities.ts      ← Seed script (ready to run, not auto-executed)
```

---

## Source & URL Pattern

**Index page:** https://www.aonprd.com/DeitiesByGroup.aspx

Lists all 15 groups. Each group heading expands to a list of deity names linking to individual
pages. Fetch the index to extract the full ordered name/URL list.

**Individual entry URL:** `https://www.aonprd.com/DeityDisplay.aspx?ItemName={Name}`

- Spaces → `%20` (e.g. `Demon%20Lord%2C%20Lamashtu`)
- Apostrophes → `%27` (e.g. `Cayden%20Cailean`)
- Individual pages contain everything: domains, subdomains, favored weapon, sacred animal/colors,
  obedience text, and all 9 boons (when present). One fetch per deity retrieves all data.
  No chaining required.

**Fallback URL construction (if provided URL fails):**
Try `https://www.aonprd.com/DeityDisplay.aspx?ItemName={name with spaces as +}`.
If both fail, emit `PAGE_FETCH_FAILED` stub.

**Already-authored entries:** `milani` and `iomedae` exist in `src/data/deities/`. Agents that
encounter these entries should note them in the checkpoint comment. The seed script uses upsert
so re-seeding them is a safe no-op.

---

## Agent Batch Plan

~400 entries ÷ 10 per batch = **~40 batches → 10 rounds of 4 agents**.

**Why 10 per batch:** Deity entries with full Deific Obedience boons average ~700 words of boon
text alone (~100–150 lines of TypeScript per entry). At 10 per batch the output file stays in
the 1,000–1,500 line range — the same safe zone as other successful scraping runs. 25 per batch
would push 3,000+ lines and risks agent output limits.

The orchestrating Claude instance fetches the index page, extracts the full ordered list of
deity names and URLs across all groups, divides them into 40 sequential batches of 10, and
assigns one batch per agent. Exact batch boundaries depend on the live index order.

| Round | Batches | Approximate Groups Covered                                     |
| ----- | ------- | -------------------------------------------------------------- |
| 1     | 001–004 | Core Deities (first ~40)                                       |
| 2     | 005–008 | Core Deities (remaining) + start of Other Deities              |
| 3     | 009–012 | Other Deities (continued)                                      |
| 4     | 013–016 | Other Deities (cont) + Archdevils + Asura Ranas                |
| 5     | 017–020 | Azlanti + start of Daemon Harbingers                           |
| 6     | 021–024 | Daemon Harbingers (cont) + Dead Deities + start of Demon Lords |
| 7     | 025–028 | Demon Lords (continued)                                        |
| 8     | 029–032 | Demon Lords (cont) + Dwarven + Eldest + Elemental Lords        |
| 9     | 033–036 | Elven + Empyreal Lords (first half)                            |
| 10    | 037–040 | Empyreal Lords (cont) + Giants + Tian Xia                      |

---

## Agent Rules

1. You are given a pre-assigned list of 10 entry URLs. Work through them in order.
2. Write your output to `src/data/deities/raw/deities_batch_NNN.ts`.
3. Begin the file with: `// Batch NNN | first: 'Name' | last: 'Name' | count: N`
4. Import types: `import { DeityEntry } from '@/types/deities';`
5. `id` is always kebab-case of the deity's name only — strip leading prefixes like
   "Demon Lord," or "Empyreal Lord,". E.g. "Demon Lord, Lamashtu" → `'lamashtu'`;
   "Empyreal Lord, Andoletta" → `'andoletta'`.
6. Do not summarize or abbreviate boon descriptions — copy them faithfully from the source.
7. Emit one named camelCase export per entry (e.g. `sarenrae`, `aroden`), and one batch
   array at the bottom: `export const batch_NNN: DeityEntry[] = [...]`.
8. **URL failures:** if the provided URL fails, attempt the name-based fallback URL. Only
   emit a `PAGE_FETCH_FAILED` stub if both attempts fail. Log the entry name and both
   attempted URLs in the checkpoint comment.
9. Run `npm run typecheck` before reporting done. Fix all type errors.
10. **Collection-specific rules:**
    - `domains[]` — use kebab-case IDs matching the Firestore `domains` collection.
      "Good" → `'good'`; "Good (Agathion)" → `'good-agathion'`.
    - `subdomains[]` — same pattern: `'{parent}-{subdomain}'`, e.g. `'death-undead'`.
    - `allowedClericAlignments[]` — derive from the deity's alignment using the one-step
      rule table in the Data Model section above. Do not blindly copy from the page.
    - `boons` — if the page contains a Deific Obedience block (Evangelist / Exalted /
      Sentinel tiers 1–3), populate the full `boons` object with `obedienceRequirement`
      and all nine tier descriptions. If no such section exists, omit `boons` entirely.
      Do **not** write `boons: undefined`.
    - `pantheon` — copy the exact group heading from the index page. Preserve
      capitalisation. E.g. `'Empyreal Lords'`, not `'empyreal lords'`.
    - `sacredAnimal`, `sacredColors`, `symbol`, `title` — include only if listed on the
      page. Omit optional fields when absent.
    - `source` — `'pf1e-core'` for CRB deities; `'pf1e-inner-sea-gods'` for ISG;
      `'pf1e-inner-sea-world-guide'` for ISWG; `'pf1e-ap'` for Adventure Path deities.
      Use the page's source citation.

---

## Sample Documents

Hand-authored to validate the model before agents launch.

### 1. Sarenrae — Core Deity, full boons

```typescript
export const sarenrae: DeityEntry = {
  id: 'sarenrae',
  name: 'Sarenrae',
  title: 'The Dawnflower',
  alignment: 'NG',
  pantheon: 'Core Deities',
  portfolio: 'healing, honesty, redemption, the sun',
  domains: ['fire', 'glory', 'good', 'healing', 'sun'],
  subdomains: ['day', 'light', 'restoration', 'resurrection'],
  favoredWeapon: 'scimitar',
  allowedClericAlignments: ['LG', 'NG', 'CG', 'N'],
  symbol: 'angelic ankh',
  sacredAnimal: 'dove',
  sacredColors: ['gold', 'red'],
  boons: {
    obedienceRequirement:
      "Spend 1 hour in prayer as the sun rises, tending to at least one wound (your own or another's) during this time. Gain a +4 sacred bonus on saving throws against spells and effects with the fire descriptor.",
    evangelist: [
      {
        tier: 1,
        description:
          'You gain the ability to channel positive energy as a cleric of half your total Hit Dice (rounded down), usable 3/day. If you already have channel positive energy, add 1d6 to your channel energy dice.',
      },
      {
        tier: 2,
        description:
          'Once per day as a swift action, you can cause a scimitar you are holding to burst into holy flame for 1 minute. The weapon deals an additional 1d6 points of fire damage, and undead struck by it take an additional 1d6 points of positive energy damage.',
      },
      {
        tier: 3,
        description:
          'Once per day, you can emit a burst of sunlight in a 30-foot-radius centered on you as per sunbeam (one beam only), using your total Hit Dice as your caster level.',
      },
    ],
    exalted: [
      {
        tier: 1,
        description:
          'Your cure spells and channel positive energy heal 2 additional hit points per die rolled. Once per day you may spontaneously convert a prepared spell of 3rd level or higher into cure serious wounds without expending a spell slot.',
      },
      {
        tier: 2,
        description:
          'You gain fire resistance 10. Undead that strike you with natural attacks take 1d6 points of positive energy damage. You are immune to the blinded condition caused by magical darkness effects.',
      },
      {
        tier: 3,
        description:
          'Once per day as a standard action, you can call down a pillar of divine fire on a single target within 60 feet, dealing 10d6 points of fire and positive energy damage (Reflex DC 10 + half your Hit Dice + your Wisdom modifier for half). Undead do not receive a saving throw.',
      },
    ],
    sentinel: [
      {
        tier: 1,
        description:
          'You gain Weapon Focus (scimitar) as a bonus feat. If you already have this feat, gain a +2 sacred bonus on attack and damage rolls made with scimitars instead.',
      },
      {
        tier: 2,
        description:
          'When you confirm a critical hit with a scimitar, your target must succeed at a Fortitude save (DC 10 + half your Hit Dice + your Wisdom modifier) or be blinded for 1d4 rounds.',
      },
      {
        tier: 3,
        description:
          'Once per day when you reduce an evil creature to 0 or fewer hit points with a scimitar, you may immediately cast cure critical wounds as a free action targeting yourself or an adjacent ally.',
      },
    ],
  },
  source: 'pf1e-inner-sea-gods',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};
```

### 2. Aroden — Dead Deity, no boons

```typescript
export const aroden: DeityEntry = {
  id: 'aroden',
  name: 'Aroden',
  title: 'Last of the First Humans',
  alignment: 'LG',
  pantheon: 'Dead Deities',
  portfolio: 'humanity, innovation, history, human mortality',
  domains: ['glory', 'good', 'law', 'protection', 'travel'],
  subdomains: ['defense', 'heroism', 'honor', 'trade'],
  favoredWeapon: 'longsword',
  allowedClericAlignments: ['LG', 'LN', 'NG'],
  symbol: 'eye of Aroden',
  description:
    'Aroden was the god of humanity who raised the Starstone from the depths of the Inner Sea. He died unexpectedly in 4606 AR, triggering the Age of Lost Omens. His clerics lost their spells overnight. Small cults persist but receive no divine power.',
  source: 'pf1e-inner-sea-world-guide',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};
```

### 3. Urgathoa — NE Core Deity, unusual domain combination (Death + Magic + Strength), full boons

```typescript
export const urgathoa: DeityEntry = {
  id: 'urgathoa',
  name: 'Urgathoa',
  title: 'Pallid Princess',
  alignment: 'NE',
  pantheon: 'Core Deities',
  portfolio: 'disease, gluttony, undeath',
  domains: ['death', 'evil', 'magic', 'strength', 'war'],
  subdomains: ['blood', 'divine', 'ferocity', 'murder', 'undead'],
  favoredWeapon: 'scythe',
  allowedClericAlignments: ['N', 'NE', 'LE', 'CE'],
  symbol: 'skull with a rose clutched in its teeth',
  sacredAnimal: 'fly',
  sacredColors: ['gray', 'white'],
  boons: {
    obedienceRequirement:
      'Gorge yourself on at least 1 pound of raw or rotting flesh while whispering prayers to Urgathoa. Gain a +4 profane bonus on saving throws against disease.',
    evangelist: [
      {
        tier: 1,
        description:
          'You gain the ability to channel negative energy as a cleric of half your total Hit Dice (rounded down), usable 3/day. If you already have channel negative energy, add 1d6 to your channel dice.',
      },
      {
        tier: 2,
        description:
          'Once per day as an immediate action when a living creature within 30 feet drops to 0 or fewer hit points, you can attempt to reanimate the corpse as per animate dead, except the undead created has half the normal Hit Dice maximum and crumbles to dust after 1 hour.',
      },
      {
        tier: 3,
        description:
          'You gain immunity to disease and the nauseated condition. Once per day you can cast plague storm as a spell-like ability, using your total Hit Dice as your caster level.',
      },
    ],
    exalted: [
      {
        tier: 1,
        description:
          'You gain Selective Channeling as a bonus feat. Once per day you can spontaneously convert any prepared spell into an inflict wounds spell of the same level or lower without expending the prepared spell.',
      },
      {
        tier: 2,
        description:
          'Undead creatures you control gain a +2 profane bonus on attack rolls, damage rolls, and saving throws. The maximum Hit Dice of undead you can control at one time increases by your Charisma modifier.',
      },
      {
        tier: 3,
        description:
          'Once per day as a standard action, you can emanate a 30-foot-radius aura of necrotic energy for 1 minute. Living creatures that begin their turn in this aura become fatigued (or exhausted if already fatigued). Undead in the aura gain fast healing 5.',
      },
    ],
    sentinel: [
      {
        tier: 1,
        description:
          'You gain Weapon Focus (scythe) as a bonus feat. Scythes you wield have their critical threat range expanded by 1 (×4 scythes threaten on a 19–20).',
      },
      {
        tier: 2,
        description:
          'Whenever you reduce a living creature to 0 or fewer hit points with a scythe, you gain 5 temporary hit points. These do not stack; if you already have temporary hit points from this ability, use the higher value.',
      },
      {
        tier: 3,
        description:
          'Once per day when you confirm a critical hit with a scythe against a living target, you can cast finger of death as a free action targeting that creature, using your total Hit Dice as the caster level.',
      },
    ],
  },
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};
```

---

## Seeding

**Script:** `scripts/db/seedDeities.ts`

Follows the upsert pattern (no clear before seed — preserves campaign/homebrew deities):

```typescript
// Usage:
//   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
//   export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5
//   npx tsx scripts/db/seedDeities.ts [--dry-run]
```

1. Import `ALL_DEITIES` from `src/data/deities/index.ts`
2. Batch-write to Firestore `deities` collection using `batch.set(ref, entry)` (upsert)
3. Document ID = `deity.id` (deterministic, idempotent)

**Do not run the seed script automatically.** Write it and leave it ready.

---

## Execution Checklist

- [ ] Orchestrating Claude fetches https://www.aonprd.com/DeitiesByGroup.aspx
- [ ] Extract full ordered URL list across all 15 groups
- [ ] Divide into 40 batches of 10; note any entries already hand-authored (Milani, Iomedae)
- [ ] Round 1: launch 4 background agents (batches 001–004)
- [ ] Round 2: launch 4 background agents (batches 005–008)
- [ ] Round 3: launch 4 background agents (batches 009–012)
- [ ] Round 4: launch 4 background agents (batches 013–016)
- [ ] Round 5: launch 4 background agents (batches 017–020)
- [ ] Round 6: launch 4 background agents (batches 021–024)
- [ ] Round 7: launch 4 background agents (batches 025–028)
- [ ] Round 8: launch 4 background agents (batches 029–032)
- [ ] Round 9: launch 4 background agents (batches 033–036)
- [ ] Round 10: launch 4 background agents (batches 037–040)
- [ ] Combine all `raw/deities_batch_NNN.ts` into `src/data/deities/index.ts`
- [ ] `npm run typecheck` — zero errors
- [ ] Write `scripts/db/seedDeities.ts`
- [ ] Final `npm run typecheck` — zero errors
