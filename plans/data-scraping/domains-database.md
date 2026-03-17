# Domains Database — Collection Plan

## Overview

Collect all Paizo domains and subdomains from d20pfsrd.com into the Firestore `domains` collection. Static TS files are seed scripts only — the authoritative copy lives in Firestore.

**Scope:** 38 domains + 124 subdomains = **~162 entries total**

**Source index:** https://www.d20pfsrd.com/classes/core-classes/cleric/domains/

---

## Data Model

Types are already defined — no new type files needed.

- `DomainEntry` — `src/types/classOptions.ts`
- `DomainPower` — `src/types/classOptions.ts`
- `ClassOptionBase` — base type, `src/types/classOptions.ts`

```typescript
// For reference:
interface DomainPower {
  name: string;
  description: string;
  levelGained: number; // typically 1 or 6
}

interface DomainEntry extends ClassOptionBase {
  domainSpells: string[]; // 9 entries — index 0 = level 1 spell name
  powers: DomainPower[];
  grantedClassSkills?: string[];
  druidAllowed?: boolean; // true if Druids can choose this domain via Nature Bond; omit if unknown
}
```

**Subdomain notes:**

- Subdomains replace one or both domain powers and swap some domain spells
- `id` for subdomains uses format: `'death-undead'`, `'good-agathion'`, `'chaos-demon'`
- `description` should note which parent domain this subdomain modifies
- `domainSpells` contains the subdomain's full spell list (after replacements)
- `powers` contains the subdomain's powers (after replacements)

---

## File Structure

```
src/data/domains/
  raw/
    domains_batch_001.ts    ← Agent output, 25 entries each
    domains_batch_002.ts
    ...
    domains_batch_007.ts
  index.ts                  ← Combined barrel (written after all batches done)

scripts/db/
  seedDomains.ts            ← Seed script (ready to run, not auto-executed)
```

---

## Agent Batch Plan

Pre-divide the full URL list into 25-entry batches. Run 4 agents in parallel per round.

### Round 1 — Batches 001–004

| Agent | Batch | Contents                                                                                                                                                                                                                                                                                                                            |
| ----- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | 001   | Domains: Air, Animal, Artifice, Chaos, Charm, Community, Darkness, Death, Destruction, Earth + subdomains: Air/Cloud, Air/Lightning, Air/Wind, Air/Wind, Animal/Feather, Animal/Fur, Animal/Insect, Artifice/Alchemy, Artifice/Construct, Artifice/Industry, Artifice/Toil, Artifice/Trap, Chaos/Azata, Chaos/Demodand, Chaos/Demon |
| 2     | 002   | Chaos subdomains: Entropy, Protean, Revelry, Riot, Whimsy + Charm: Captivation, Love, Lust + Community: Cooperation, Education, Family, Home + Darkness: Loss, Moon, Night + Death: Murder, Plague, Psychopomp, Undead + Destruction: Catastrophe, Hatred, Rage, Torture + Earth: Caves                                             |
| 3     | 003   | Earth subdomains: Metal, Petrification, Radiation + Evil: Cannibalism, Corruption, Daemon, Demodand, Demon, Devil, Fear, Kyton, Plague + Fire: Arson, Ash, Smoke + Domains: Erosion, Evil, Fire, Glory, Good, Healing, Knowledge, Law, Liberation, Luck, Madness, Magic                                                             |
| 4     | 004   | Subdomains: Glory/Heroism, Glory/Honor, Glory/Hubris, Glory/Legend + Good: Agathion, Archon, Azata, Friendship, Redemption + Healing: Medicine, Restoration, Resurrection + Knowledge: Aeon, Education, Espionage, Memory, Thought + Law: Archon, Devil, Inevitable, Judgment, Kyton, Legislation, Loyalty, Slavery, Tyranny        |

### Round 2 — Batches 005–007

| Agent | Batch | Contents                                                                                                                                                                                                                                                                                                              |
| ----- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5     | 005   | Liberation: Freedom, Revolution, Self-Realization + Luck: Curse, Fate, Imagination + Madness: Insanity, Nightmare, Truth + Magic: Alchemy, Arcane, Divine, Rites + Domains: Nobility, Plant, Protection, Repose, Ruins, Rune, Scalykind, Strength, Sun, Travel + Nobility: Aristocracy, Hubris, Leadership, Martyr    |
| 6     | 006   | Plant: Leshy, Decay, Growth, Thorns + Protection: Defense, Fortifications, Purity, Solitude + Repose: Ancestors, Psychopomp, Souls + Rune: Language, Legislation, Wards + Scalykind: Dragon, Saurian, Venom + Strength: Competition, Ferocity, Fist, Resolve, Self-Realization + Sun: Day, Light, Revelation, Thirst  |
| 7     | 007   | Travel: Exploration, Portal, Trade + Trickery: Ambush, Deception, Espionage, Greed, Innuendo, Thievery + Domains: Trickery, Vermin, Void, War, Water, Weather + Void: Dark Tapestry, Isolation, Stars + War: Blood, Duels, Tactics + Water: Flotsam, Flowing, Ice, Oceans, Rivers + Weather: Monsoon, Seasons, Storms |

---

## Agent Rules

Every scraping agent must follow these rules:

1. You are given a pre-assigned list of URLs. Scrape only those URLs, in order.
2. Write output to `src/data/domains/raw/domains_batch_NNN.ts`.
3. Begin the file with: `// Batch NNN | first: 'Name' | last: 'Name' | count: N`
4. Import types: `import { DomainEntry } from '@/types/classOptions';`
5. `id` format:
   - Domain: kebab-case name, e.g. `'air'`, `'good'`, `'death'`
   - Subdomain: `'{parent}-{subdomain}'`, e.g. `'death-undead'`, `'good-agathion'`
6. `domainSpells` is always 9 entries (indices 0–8 = spell levels 1–9). Use the spell name as written on the page.
7. `powers` — capture each power's name, full description text, and the cleric level it is gained (typically 1 and 6 for domains; subdomains may differ).
8. `grantedClassSkills` — include only if the domain/subdomain explicitly grants a class skill.
9. For subdomains, `description` must note the parent domain: e.g. `'Subdomain of Death. ...'`
10. Every entry gets `source: 'pf1e-core'`, `isOfficial: true`, `visibility: 'global'`, `rev: 1`. Omit `createdBy` and `campaignId`.
11. Do not summarize or abbreviate power descriptions — copy them faithfully.
12. Emit one named export per domain: `export const goodDomain: DomainEntry = { ... }`.
13. Also emit a batch array at the bottom: `export const batch_NNN = [airDomain, animalDomain, ...]`.
14. If a page cannot be fetched (404, timeout), emit a stub with `description: 'PAGE_FETCH_FAILED'` and `powers: []`, `domainSpells: []`. Log the failed URL in the checkpoint comment.
15. Run `npm run typecheck` before reporting done. Fix all errors.

---

## Sample Documents

Hand-authored to validate the model before agents launch.

### 1. Good Domain

```typescript
export const goodDomain: DomainEntry = {
  id: 'good',
  name: 'Good Domain',
  description: 'You have pledged your life and soul to goodness and purity.',
  domainSpells: [
    'protection from evil', // level 1
    'align weapon', // level 2
    'magic circle against evil', // level 3
    'holy smite', // level 4
    'dispel evil', // level 5
    'blade barrier', // level 6
    'holy word', // level 7
    'holy aura', // level 8
    'summon monster IX', // level 9
  ],
  powers: [
    {
      name: 'Touch of Good',
      description:
        'You can touch a creature as a standard action, granting it a sacred bonus on attack rolls, skill checks, ability checks, and saving throws equal to half your cleric level (minimum 1) for 1 round. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Holy Lance',
      description:
        'At 8th level, you can give a weapon you touch the holy special weapon quality for a number of rounds equal to 1/2 your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};
```

### 2. Good — Agathion Subdomain

```typescript
export const goodAgathionDomain: DomainEntry = {
  id: 'good-agathion',
  name: 'Agathion Subdomain',
  description:
    'Subdomain of Good. Associated with agathion-type outsiders — paragons of bestial nobility and selfless courage.',
  domainSpells: [
    'protection from evil',
    'align weapon',
    'magic circle against evil',
    'holy smite',
    'dispel evil',
    'blade barrier',
    'holy word',
    'holy aura',
    'summon monster IX',
  ],
  powers: [
    {
      name: 'Protective Aura',
      description:
        'As a standard action you can touch an ally to grant them a sacred bonus to AC equal to 1/2 your cleric level (minimum +1) and a +4 sacred bonus on saves against the spell-like abilities and supernatural abilities of evil outsiders for 1 minute. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Compelled Mercy',
      description:
        'At 8th level, when you cast a spell with the good descriptor, you may declare a single target of that spell to be affected by the mercy subdomain aura — that creature takes a –2 penalty on attack rolls against creatures with the good subtype for 1 round. This is a mind-affecting compulsion effect.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};
```

### 3. Healing Domain

```typescript
export const healingDomain: DomainEntry = {
  id: 'healing',
  name: 'Healing Domain',
  description:
    'Your touch staves off pain and death, and your healing magic is particularly vital and potent.',
  domainSpells: [
    'cure light wounds',
    'cure moderate wounds',
    'cure serious wounds',
    'cure critical wounds',
    'breath of life',
    'heal',
    'regenerate',
    'mass cure critical wounds',
    'mass heal',
  ],
  powers: [
    {
      name: 'Rebuke Death',
      description:
        'You can touch a living creature as a standard action, healing it for 1d4 points of damage plus 1 for every two cleric levels you possess. You can only use this ability on a creature that is below 0 hit points. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: "Healer's Blessing",
      description:
        'At 6th level, all of your cure spells are treated as if they were empowered, increasing the amount of damage healed by half (+50%). This does not stack with the Empower Spell metamagic feat.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};
```

### 4. Liberation Domain

```typescript
export const liberationDomain: DomainEntry = {
  id: 'liberation',
  name: 'Liberation Domain',
  description:
    'Your spirit is independent and free. You prize liberty above nearly all things, and can suspend the effects of magic that bind and constrain.',
  domainSpells: [
    'remove fear',
    'remove paralysis',
    'remove curse',
    'freedom of movement',
    'break enchantment',
    'greater dispel magic',
    'refuge',
    'mind blank',
    'freedom',
  ],
  powers: [
    {
      name: 'Liberation',
      description:
        'You have the ability to ignore impediments to your mobility. For a number of rounds per day equal to your cleric level, you can move normally regardless of magical effects that impede movement, as if you were affected by freedom of movement. This effect occurs automatically as soon as it applies. These rounds do not need to be consecutive.',
      levelGained: 1,
    },
    {
      name: "Freedom's Call",
      description:
        'At 8th level, you can emit a 30-foot aura of liberation for a number of rounds per day equal to your cleric level. Allies within this aura are not affected by the confused, grappled, frightened, panicked, paralyzed, pinned, or shaken conditions. This does not remove such conditions, but suppresses them while allies remain in the aura. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};
```

---

## Seeding

`scripts/db/seedDomains.ts` — follows the same pattern as `seedSpells.ts` and `seedTemplates.ts`:

1. Import `ALL_DOMAINS` from `src/data/domains/index.ts`
2. Batch-write to Firestore `domains` collection
3. Document ID = `domain.id` (deterministic, idempotent)
4. Run with: `npx ts-node scripts/db/seedDomains.ts`

**Do not run the seed script automatically.** Write it and leave it ready.

---

## Related: classChoiceDefinitions

Once domains are seeded, the Cleric's domain choice needs a `ClassChoiceDefinition` document in the `classChoiceDefinitions` Firestore collection. This is a separate but parallel task — seed it at the same time as domains.

```typescript
// classChoiceDefinitions/cleric-domains
{
  id: 'cleric-domains',
  className: 'cleric',
  featureName: 'Domain',
  description: 'Clerics choose two domains from those available to their deity.',
  selectionMode: { type: 'multi_at_creation', count: 2 },
  optionSource: 'collection',
  collectionName: 'domains',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
}
```

A separate seeding pass for `classChoiceDefinitions` covering all core classes should follow the domains seed.

---

## Deities

Deities gate domain availability for clerics and must be seeded alongside domains.

### Type — DONE

`src/types/deities.ts` — `DeityEntry` interface. Fields: `id`, `name`, `title`, `alignment`, `portfolio`, `domains[]`, `subdomains[]`, `favoredWeapon`, `allowedClericAlignments[]`, `symbol`, `sacredAnimal?`, `sacredColors?`, `description?`, plus ContentMetadata.

### Hand-Authored Entries — DONE

Two entries already written and type-checked:

- `src/data/deities/milani.ts` — Milani, The Everbloom (CG). Domains: Chaos, Good, Healing, Liberation, Protection.
- `src/data/deities/iomedae.ts` — Iomedae, The Inheritor (LG). Domains: Glory, Good, Law, Sun, War.
- `src/data/deities/index.ts` — barrel with `ALL_DEITIES`, `getDeityById`, `getDeityByName`.

### Seed Script — PENDING

`scripts/db/seedDeities.ts` — same pattern as other seed scripts:

1. Import `ALL_DEITIES` from `src/data/deities/index.ts`
2. Batch-write to Firestore `deities` collection
3. Document ID = `deity.id` (deterministic, idempotent)
4. Run with: `npx ts-node scripts/db/seedDeities.ts`

**Do not run automatically.** Write it and leave it ready.

### Full Pantheon Collection — FUTURE

The full PF1e deity list (~100+ entries) will need a scraping run similar to domains. Source: https://www.aonprd.com/Deities.aspx. Defer until after Rissi and Kah-Mei are entered — two deities are sufficient for now.

---

## Execution Checklist

- [ ] Hand-author 4 sample domain docs, verify `npm run typecheck` passes
- [ ] Round 1: launch 4 agents in parallel (batches 001–004)
- [ ] Round 2: launch 3 agents in parallel (batches 005–007)
- [ ] Combine all `raw/domains_batch_NNN.ts` into `src/data/domains/index.ts`
- [ ] Write `scripts/db/seedDomains.ts`
- [ ] Write `scripts/db/seedDeities.ts`
- [ ] Write `src/data/classChoiceDefinitions/clericDomains.ts` + seed script
- [ ] Final `npm run typecheck` — zero errors
