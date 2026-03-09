# Spell Collection Agent — Prompt Template

Copy and customize this when launching each batch agent.

---

## Template

You are collecting Pathfinder 1e spell data from d20pfsrd.com for the Dungeon Scribe AI app.

**Your assignment:**

- School: `{SCHOOL}` (e.g. "divination")
- Batch number: `{BATCH_NUM}` (e.g. "001", "002")
- Batch size: `{BATCH_SIZE}` spells (default: 50)
- Start spell: `{START_SPELL}` — this is the first spell you should collect (skip anything before it alphabetically/in page order)
  - If "BEGINNING" — start from the first spell on the school's spell list page
- Start URL (optional): `{START_URL}` — direct link to the first spell's page, if known

**Data source:** https://www.d20pfsrd.com/magic/all-spells/

**Output file:** `src/data/spells/batches/{school}/batch_{BATCH_NUM}.ts`

---

## What to collect per spell

For each spell, fetch its d20pfsrd page and extract:

```typescript
{
  name: string;                          // Exact spell name
  classLevels: Record<string, number>;   // e.g. { wizard: 3, sorcerer: 3, magus: 3 }
  school: string;                        // e.g. "Divination"
  subschool?: string;                    // e.g. "Scrying" (if present)
  descriptor?: string[];                 // e.g. ["mind-affecting"] (if present)
  components: {
    verbal: boolean;
    somatic: boolean;
    material: boolean;
    materialComponents?: string;         // description of material component (if M is true)
    focus: boolean;
    focusComponents?: string;            // description of focus (if F is true)
    divine: boolean;                     // true if DF component is listed
  };
  castingTime: string;                   // e.g. "1 standard action"
  range: string;                         // e.g. "Close (25 ft. + 5 ft./2 levels)"
  area?: string;                         // if the spell has an Area line
  target: string;                        // if the spell has a Target line (use "" if area-only)
  duration: string;                      // e.g. "1 min./level (D)"
  savingThrow: string;                   // e.g. "Will negates" or "none"
  spellResistance: string;               // e.g. "yes" or "no"
  description: string;                   // Full description text (plain text, no HTML tags)
  source: string;                        // e.g. "Core Rulebook", "Advanced Player's Guide"
}
```

**classLevels keys** use lowercase class names exactly as they appear on d20pfsrd (e.g. `wizard`, `sorcerer`, `cleric`, `druid`, `paladin`, `ranger`, `bard`, `inquisitor`, `magus`, `bloodrager`, `shaman`, `witch`, `arcanist`, `summoner`, `hunter`, `warpriest`, `investigator`, etc.)

---

## Output file format

```typescript
// {School} spells — batch {BATCH_NUM}
// Batch metadata: {"school":"{school}","batchNum":"{BATCH_NUM}","startSpell":"{START_SPELL}","lastSpell":"{LAST_SPELL_COLLECTED}","nextSpell":"{NEXT_SPELL_NAME_OR_DONE}","nextUrl":"{NEXT_SPELL_URL_OR_NULL}","spellsInBatch":{N}}
import type { Spell } from '@/types/spells';

export const {SCHOOL_UPPER}_BATCH_{BATCH_NUM}: Spell[] = [
  {
    name: 'First Spell',
    classLevels: { wizard: 1, sorcerer: 1 },
    school: 'Divination',
    // ... all fields
  },
  {
    name: 'Second Spell',
    // ...
  },
  // ... up to BATCH_SIZE spells
];
```

**Critical:** The comment on line 2 MUST contain valid JSON with:

- `lastSpell`: the name of the last spell you collected in this batch
- `nextSpell`: the name of the next spell to collect (or `"DONE"` if you reached the end of the school)
- `nextUrl`: the d20pfsrd URL for the next spell (or `null` if DONE)
- `spellsInBatch`: exact count of spells in this file

---

## Rules

1. **Collect exactly BATCH_SIZE spells** (or fewer if you reach the end of the school).
2. **Do not duplicate** spells from the existing school file or previous batches. If the school file already has content, the `startSpell` field tells you where to begin — check d20pfsrd's alphabetical list for that school and start there.
3. **If a page 404s** on d20pfsrd, fall back to https://aonprd.com (Archives of Nethys) for that spell.
4. **Write what you have** if you run into context limits or repeated failures — a partial batch is better than nothing. Update the metadata comment accurately.
5. **One spell per page fetch** — don't try to scrape list pages, go to each spell's individual page.
6. **description** should be plain text — strip all HTML tags.
7. **mythic spells** — skip them (they are separate documents).
8. **Verify the file compiles** — all string values must be properly quoted/escaped.

---

## After writing the file

Report back with:

- Total spells written in this batch
- `lastSpell`: the last spell name collected
- `nextSpell`: the next spell to collect (or "DONE")
- `nextUrl`: URL for the next spell (or null)
- Any spells that had to be skipped and why

The orchestrator (Claude Code) will update `_progress.json` and launch the next batch agent if needed.

---

## Example metadata comment

```
// Batch metadata: {"school":"divination","batchNum":"001","startSpell":"BEGINNING","lastSpell":"Detect Thoughts","nextSpell":"Discern Lies","nextUrl":"https://www.d20pfsrd.com/magic/all-spells/d/discern-lies","spellsInBatch":50}
```
