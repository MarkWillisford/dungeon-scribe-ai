/**
 * seedCampaignContent.ts — Upsert campaign-specific custom content into Firestore.
 *
 * Targets the 'classes' collection (prestige classes). All entries carry
 * visibility: 'campaign' and use CAMPAIGN_ID as the owning campaign reference.
 *
 * IMPORTANT: Update CAMPAIGN_ID below with the real Firestore campaign document ID
 * before seeding to production.
 *
 * Characters covered:
 *   Rissi   — Hathran, Dweomerkeeper, Radiant Servant of Milani, Prestige Paladin
 *   Kah-Mei — Nemesis (⚠ stat block placeholder — see below)
 *
 * NOT seeded here (already exist as global templates in 'templates' collection):
 *   Rissi's Simple Druid Template → templates/druid-creature   (visibility: 'global')
 *   Kah-Mei's Simple Paladin Template → templates/paladin-creature (visibility: 'global')
 *   Reference these existing doc IDs when building the characters' template lists.
 *
 * Prerequisites:
 *   1. export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json
 *   2. export FIREBASE_PROJECT_ID=dungeon-scribe-ai-stagin-b4fb5  (staging, default)
 *
 * Usage:
 *   npx tsx scripts/db/seedCampaignContent.ts [--dry-run]
 */

import * as admin from 'firebase-admin';
import { BABProgression, SaveProgression } from '../../src/types/base';
import type { ExpandedClassData } from '../../src/data/classes/types';

// ---------------------------------------------------------------------------
// CONFIG
// ---------------------------------------------------------------------------

const DRY_RUN = process.argv.includes('--dry-run');

/**
 * Resolve --campaign-id <id> from argv. Required for non-dry-run execution.
 * Usage: npx tsx scripts/db/seedCampaignContent.ts --campaign-id <firestore-campaign-doc-id>
 */
function resolveCampaignId(): string {
  const idx = process.argv.indexOf('--campaign-id');
  const id = idx !== -1 ? process.argv[idx + 1] : undefined;
  if (!id || id.startsWith('--')) {
    if (DRY_RUN) {
      console.warn('⚠  --campaign-id not provided; using placeholder for dry run.');
      return 'DRY-RUN-PLACEHOLDER';
    }
    console.error(
      'ERROR: --campaign-id <id> is required.\n' +
        '  npx tsx scripts/db/seedCampaignContent.ts --campaign-id <firestore-campaign-doc-id>\n' +
        '  Use --dry-run to preview without writing.',
    );
    process.exit(1);
  }
  return id;
}

const CAMPAIGN_ID = resolveCampaignId();
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? 'dungeon-scribe-ai-stagin-b4fb5';

// ---------------------------------------------------------------------------
// FIREBASE INIT
// ---------------------------------------------------------------------------

if (!admin.apps.length) {
  if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    console.error(
      'ERROR: GOOGLE_APPLICATION_CREDENTIALS env var not set.\n' +
        'Download a service account key from Firebase Console and set:\n' +
        '  export GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json',
    );
    process.exit(1);
  }
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: PROJECT_ID,
  });
}

const db = admin.firestore();

// ---------------------------------------------------------------------------
// TYPES
// ---------------------------------------------------------------------------

/** GameDataSource shape stored on class documents (source field). */
interface GameDataSource {
  bookId: string;
  bookName: string;
  publisher: string;
}

/**
 * Campaign class document shape: ExpandedClassData with a real GameDataSource
 * in place of the typed `source: string`, plus visibility and campaignId extras.
 */
type CampaignClass = Omit<ExpandedClassData, 'source'> & {
  source: GameDataSource;
  visibility: 'campaign';
  campaignId: string;
};

// ---------------------------------------------------------------------------
// SOURCE OBJECTS
// ---------------------------------------------------------------------------

const SOURCE_35E: GameDataSource = {
  bookId: '3.5e-converted',
  bookName: '3.5e Converted (Custom Campaign)',
  publisher: 'Campaign Homebrew',
};

// ---------------------------------------------------------------------------
// ============================================================
// PRESTIGE CLASSES  →  'classes' collection
// ============================================================
// ---------------------------------------------------------------------------

// ---- 1. HATHRAN ----------------------------------------------------------------
// 3.5e Forgotten Realms prestige class. Campaign adaptations:
//   • Region: Rashemen → Mendev
//   • Patron: Chauntea/Mielikki/Mystra → Mystra/Sarenrae/Iomedae
//   • Ethran feat prerequisite: dropped
const HATHRAN: CampaignClass = {
  name: 'Hathran',
  category: 'Prestige',
  maxLevel: 10,
  hitDie: 4,
  skillRanksPerLevel: 2,
  classSkills: [
    'Craft',
    'Diplomacy',
    'Knowledge (arcana)',
    'Knowledge (dungeoneering)',
    'Knowledge (geography)',
    'Knowledge (history)',
    'Knowledge (local)',
    'Knowledge (nature)',
    'Knowledge (nobility)',
    'Knowledge (planes)',
    'Knowledge (religion)',
    'Linguistics',
    'Perform',
    'Profession',
    'Spellcraft',
    'Survival',
    'Swim',
  ],
  babProgression: BABProgression.Low,
  saves: {
    fortitude: SaveProgression.Good,
    reflex: SaveProgression.Poor,
    will: SaveProgression.Good,
  },
  weaponProficiencies: ['Whip'],
  armorProficiencies: [],
  classFeatures: [
    {
      name: 'Spellcasting',
      level: 1,
      description:
        'At each Hathran level the character gains new spells per day and spells known as if she had also gained a level in whichever arcane or divine spellcasting class allowed her to cast 4th-level spells. She adds the Hathran level to that class level for determining spells per day, spells known, and caster level. If she had more than one qualifying class she must choose one each level.',
    },
    {
      name: 'Leadership Bonus',
      level: 1,
      description:
        '+2 bonus to Leadership score for recruiting a cohort. The cohort must be Mendevian and either female with a relevant regional background feat or male with at least 1 barbarian level.',
    },
    {
      name: 'Mendev Spirit Magic',
      level: 1,
      description:
        'A Hathran who prepares spells may spontaneously convert any prepared spell into any spell she knows of equal or lower level, even across spell lists. A Hathran who does not prepare spells may apply metamagic feats without added casting time (though the altered spell still occupies a higher-level slot). Usable only within the borders of Mendev.',
    },
    {
      name: 'Taboo',
      level: 1,
      description: 'The Hathran may not select item creation feats other than Scribe Scroll.',
    },
    {
      name: 'Spirit Speech',
      level: 2,
      description:
        'The Hathran can speak with and understand any creature with the spirit subtype, regardless of language barriers. She also gains a +2 bonus on Charisma-based skill and ability checks made against spirits.',
    },
    {
      name: 'Awe of the Wychlaran (–2)',
      level: 3,
      description:
        "Any character from the Mendev region whose character level is equal to or lower than the Hathran's takes a –2 penalty on attack rolls and opposed skill checks made against her.",
    },
    {
      name: 'Universal Spirit Magic (1/day)',
      level: 3,
      description:
        'Once per day, the Hathran may use her Mendev Spirit Magic ability outside the borders of Mendev.',
    },
    {
      name: 'Spirit Concordat',
      level: 4,
      description:
        'The Hathran casts all spells in the planar ally spell chain at +1 caster level.',
    },
    {
      name: 'Circle Leader',
      level: 5,
      description:
        'The Hathran can act as the focus for circle magic, leading a circle of up to five assistants to pool their spellcasting.',
    },
    {
      name: 'Universal Spirit Magic (2/day)',
      level: 6,
      description: 'The Hathran may use her Spirit Magic ability outside Mendev twice per day.',
    },
    {
      name: 'Awe of the Wychlaran (–4)',
      level: 7,
      description: 'The penalty from Awe of the Wychlaran increases to –4.',
    },
    {
      name: 'Spirit Dominion',
      level: 8,
      description:
        'The Hathran casts all spells in the planar binding spell chain at +1 caster level.',
    },
    {
      name: 'Universal Spirit Magic (3/day)',
      level: 9,
      description:
        'The Hathran may use her Spirit Magic ability outside Mendev three times per day.',
    },
    {
      name: 'Awe of the Wychlaran (–6)',
      level: 10,
      description: 'The penalty from Awe of the Wychlaran increases to –6.',
    },
    {
      name: 'Great Circle Leader',
      level: 10,
      description:
        'The Hathran masters circle magic and can lead a great circle with up to nine assistants instead of five.',
    },
  ],
  spellcasting: {
    type: 'Divine',
    casting: 'Prepared',
    spellList: 'Advances existing arcane or divine spellcasting class (+1 level per Hathran level)',
  },
  advancesSpellcasting: { mode: 'single', tradition: 'chosen' },
  prerequisites: {
    skills: [{ name: 'Knowledge (local)', ranks: 4 }],
    feats: ['Leadership'],
    spellcasting: 'Ability to cast 4th-level arcane or divine spells',
    alignment: 'Lawful good, lawful neutral, or neutral good',
    special: [
      'Female',
      'Patron deity must be Mystra, Sarenrae, or Iomedae',
      'Member in good standing of the Witches of Mendev',
      'May not possess any item creation feats other than Scribe Scroll',
    ],
  },
  source: SOURCE_35E,
  visibility: 'campaign',
  campaignId: CAMPAIGN_ID,
};

// ---- 2. DWEOMERKEEPER ----------------------------------------------------------
// 3.5e Complete Divine prestige class. Mystra's spellweavers — masters of both
// arcane and divine magic, advancing any existing spellcasting class.
const DWEOMERKEEPER: CampaignClass = {
  name: 'Dweomerkeeper',
  category: 'Prestige',
  maxLevel: 10,
  hitDie: 6,
  skillRanksPerLevel: 2,
  classSkills: ['Knowledge (arcana)', 'Spellcraft'],
  babProgression: BABProgression.Low,
  saves: {
    fortitude: SaveProgression.Poor,
    reflex: SaveProgression.Poor,
    will: SaveProgression.Good,
  },
  weaponProficiencies: [],
  armorProficiencies: [],
  classFeatures: [
    {
      name: 'Spellcasting',
      level: 1,
      description:
        'At each Dweomerkeeper level the character gains new spells per day and spells known as if she had also gained a level in a spellcasting class she belonged to before adding this prestige class. She adds the Dweomerkeeper level to that class level for spells per day, spells known, and caster level. If she had more than one spellcasting class she must choose one each level.',
    },
    {
      name: 'Mantle of Spells (1st)',
      level: 1,
      description:
        'The Dweomerkeeper chooses one arcane or divine spell she can cast. She may spontaneously convert any prepared spell of the same type (arcane or divine) of equal or higher level into the chosen spell, exactly as a good cleric converts prepared spells into cure spells.',
    },
    {
      name: 'Arcane Sight',
      level: 2,
      description:
        'The Dweomerkeeper can use arcane sight at will as a supernatural ability (as the spell, but duration is concentration).',
    },
    {
      name: 'Mantle of Spells (2nd)',
      level: 3,
      description: 'The Dweomerkeeper adds a second spell to her Mantle of Spells.',
    },
    {
      name: 'Supernatural Spell (1/day)',
      level: 4,
      description:
        'Once per day, the Dweomerkeeper may cast any one spell with a casting time of 1 standard action or less as a supernatural ability: no components required, no attacks of opportunity provoked, spell resistance ignored. The spell is still expended normally.',
    },
    {
      name: 'Mantle of Spells (3rd)',
      level: 5,
      description: 'The Dweomerkeeper adds a third spell to her Mantle of Spells.',
    },
    {
      name: 'Supernatural Spell (2/day)',
      level: 6,
      description: 'The Dweomerkeeper gains a second daily use of Supernatural Spell.',
    },
    {
      name: 'Mantle of Spells (4th)',
      level: 7,
      description: 'The Dweomerkeeper adds a fourth spell to her Mantle of Spells.',
    },
    {
      name: 'Supernatural Spell (3/day)',
      level: 8,
      description: 'The Dweomerkeeper gains a third daily use of Supernatural Spell.',
    },
    {
      name: 'Mantle of Spells (5th)',
      level: 9,
      description: 'The Dweomerkeeper adds a fifth spell to her Mantle of Spells.',
    },
    {
      name: 'Cloak of Mysteries',
      level: 10,
      description:
        'All metamagic feats the Dweomerkeeper currently knows or learns in the future cost 1 spell level less to apply (minimum +1 level increase, or +0 if the feat already had +0). Heighten Spell is unaffected.',
    },
    {
      name: 'Supernatural Spell (4/day)',
      level: 10,
      description: 'The Dweomerkeeper gains a fourth daily use of Supernatural Spell.',
    },
  ],
  spellcasting: {
    type: 'Arcane',
    casting: 'Prepared',
    spellList:
      'Advances any spellcasting class (+1 level per Dweomerkeeper level); requires both arcane and divine spellcasting',
  },
  advancesSpellcasting: { mode: 'single', tradition: 'chosen' },
  prerequisites: {
    skills: [
      { name: 'Knowledge (arcana)', ranks: 8 },
      { name: 'Spellcraft', ranks: 8 },
    ],
    feats: ['Any item creation feat', 'Any metamagic feat'],
    spellcasting: 'Ability to cast both arcane and divine spells; access to the Magic domain',
    special: ['Must have previously created at least one magic item'],
  },
  source: SOURCE_35E,
  visibility: 'campaign',
  campaignId: CAMPAIGN_ID,
};

// ---- 3. RADIANT SERVANT OF MILANI ----------------------------------------------
// 3.5e Complete Divine prestige class. Campaign adaptation: deity changed from
// Pelor to Milani; all "of Pelor" references updated accordingly.
const RADIANT_SERVANT_OF_MILANI: CampaignClass = {
  name: 'Radiant Servant of Milani',
  category: 'Prestige',
  maxLevel: 10,
  hitDie: 6,
  skillRanksPerLevel: 2,
  classSkills: [
    'Craft',
    'Diplomacy',
    'Heal',
    'Knowledge (arcana)',
    'Knowledge (religion)',
    'Profession',
    'Sense Motive',
    'Spellcraft',
  ],
  babProgression: BABProgression.Medium,
  saves: {
    fortitude: SaveProgression.Good,
    reflex: SaveProgression.Poor,
    will: SaveProgression.Good,
  },
  weaponProficiencies: ['All simple weapons', 'All martial weapons'],
  armorProficiencies: ['Light armor', 'Medium armor', 'Heavy armor', 'Shields'],
  classFeatures: [
    {
      name: 'Spellcasting',
      level: 1,
      description:
        'At each Radiant Servant level the character gains new spells per day as if she had also gained a level in a divine spellcasting class she belonged to before adding this prestige class. She does not gain other class benefits except enhanced turning undead (see below). Radiant Servant levels add to the divine spellcasting class level for determining spells per day and caster level.',
    },
    {
      name: 'Radiance',
      level: 1,
      description:
        'When the Radiant Servant casts any spell with the Light descriptor, the radius of illumination is doubled and the spell is treated as 1 level higher for all purposes, including countering or dispelling Darkness spells of equal or lower effective level.',
    },
    {
      name: 'Turn Undead',
      level: 1,
      description:
        'Radiant Servant levels stack with cleric levels (and all other applicable class levels) for all purposes related to turning undead.',
    },
    {
      name: 'Extra Greater Turning',
      level: 1,
      description:
        'If the Radiant Servant has access to the Sun domain, she can perform a greater turning a number of times per day equal to 3 + her Charisma modifier (replacing the normal once-per-day granted power).',
    },
    {
      name: 'Empower Healing',
      level: 2,
      description:
        'When the Radiant Servant casts a domain spell from the Healing domain, the spell is automatically Empowered with no increase to the spell slot used.',
    },
    {
      name: 'Divine Health',
      level: 2,
      description:
        'The Radiant Servant is immune to all diseases, including magical diseases such as mummy rot and lycanthropy.',
    },
    {
      name: 'Aura of Warding',
      level: 3,
      description:
        'The Radiant Servant and all allies within 10 feet of her gain a +2 morale bonus on Will saving throws.',
    },
    {
      name: 'Additional Domain',
      level: 5,
      description:
        "The Radiant Servant gains a third clerical domain from Milani's domain list. She gains the domain's granted power and may select domain spells from it each day. She can still cast only one domain spell of each level per day. Requires at least one cleric level to function.",
    },
    {
      name: 'Maximize Healing',
      level: 6,
      description:
        'When the Radiant Servant casts a domain spell from the Healing domain, the spell is automatically Maximized with no increase to the spell slot used. This ability supersedes Empower Healing.',
    },
    {
      name: 'Positive Energy Burst',
      level: 8,
      description:
        'As a standard action, the Radiant Servant creates a burst of positive energy dealing 1d6 damage per class level to all undead within 100 feet (Reflex DC 10 + class level for half). This supernatural ability costs 2 channel attempts and cannot be used with fewer than 2 remaining.',
    },
    {
      name: 'Supreme Healing',
      level: 10,
      description:
        'When the Radiant Servant casts a domain spell from the Healing domain, the spell is automatically both Empowered and Maximized with no increase to the spell slot used.',
    },
  ],
  spellcasting: {
    type: 'Divine',
    casting: 'Prepared',
    spellList: 'Advances existing divine spellcasting class (+1 level per Radiant Servant level)',
  },
  advancesSpellcasting: { mode: 'single', tradition: 'divine' },
  prerequisites: {
    skills: [
      { name: 'Heal', ranks: 5 },
      { name: 'Knowledge (religion)', ranks: 9 },
    ],
    feats: ['Extra Channel'],
    spellcasting: 'Ability to cast divine spells; must have access to the Sun domain',
    alignment: 'Neutral good',
    special: ['Base Will save +5', 'Patron deity must be Milani'],
  },
  source: SOURCE_35E,
  visibility: 'campaign',
  campaignId: CAMPAIGN_ID,
};

// ---- 4. PRESTIGE PALADIN -------------------------------------------------------
// Custom 15-level prestige class balanced for high-level campaign play.
// Blends paladin and fighter class features with ongoing divine spellcasting.
// Spellcasting advances at all levels except 1st, 6th, and 11th.
const PRESTIGE_PALADIN: CampaignClass = {
  name: 'Prestige Paladin',
  category: 'Prestige',
  maxLevel: 15,
  hitDie: 10,
  skillRanksPerLevel: 2,
  classSkills: [
    'Craft',
    'Diplomacy',
    'Handle Animal',
    'Heal',
    'Knowledge (nobility)',
    'Knowledge (religion)',
    'Profession',
    'Ride',
    'Sense Motive',
    'Spellcraft',
  ],
  babProgression: BABProgression.Full,
  saves: {
    fortitude: SaveProgression.Good,
    reflex: SaveProgression.Poor,
    will: SaveProgression.Good,
  },
  weaponProficiencies: ['All simple weapons', 'All martial weapons'],
  armorProficiencies: ['Light armor', 'Medium armor', 'Heavy armor', 'Shields (not tower shields)'],
  classFeatures: [
    {
      name: 'Detect Evil',
      level: 1,
      description:
        'As the standard paladin ability. The Prestige Paladin can detect evil at will (as the detect evil spell).',
    },
    {
      name: 'Smite Evil (1/day)',
      level: 1,
      description:
        'As the standard paladin ability. The Prestige Paladin uses his class level + 3 as his effective paladin level for all smite evil calculations (attack bonus, damage, and DR bypass).',
    },
    {
      name: 'Turn Undead / Channel Energy (choice)',
      level: 1,
      description:
        'At 1st level choose one permanently: (1) Turn Undead — class levels stack with all other classes that grant turn undead. (2) Channel Energy — gains channel positive energy as a cleric, treating class level + 3 as effective cleric level (Charisma-based).',
    },
    {
      name: 'Spellcasting',
      level: 2,
      description:
        'Starting at 2nd level, and at every level except 1st, 6th, and 11th, the Prestige Paladin gains new spells per day as if she had also gained a level in whatever divine spellcasting class she belonged to before adding this prestige class.',
    },
    {
      name: 'Divine Grace',
      level: 2,
      description:
        'As the standard paladin ability. Adds Charisma modifier as a bonus on all saving throws.',
    },
    {
      name: 'Lay on Hands',
      level: 2,
      description:
        'As the standard paladin ability. Heals a number of d6 equal to ½ class level + 3. Usable a number of times per day equal to class level + Charisma modifier + 3.',
    },
    {
      name: 'Divine Bond',
      level: 2,
      description:
        'As the standard paladin ability. Treat effective paladin level as 3 higher than actual class level for this ability.',
    },
    {
      name: 'Aura of Courage',
      level: 3,
      description:
        'As the standard paladin ability. The Prestige Paladin and allies within 10 feet are immune to fear effects.',
    },
    {
      name: 'Divine Health',
      level: 3,
      description:
        'As the standard paladin ability. The Prestige Paladin is immune to all diseases, including magical diseases.',
    },
    {
      name: 'Mercy (1st)',
      level: 3,
      description:
        'As the standard paladin ability. Select one mercy. Uses class level – 1 as effective paladin level for determining which mercies are available.',
    },
    {
      name: 'Armor Training (1)',
      level: 4,
      description:
        'As the fighter class feature. Reduces armor check penalty by 1 and increases maximum Dexterity bonus by 1 while wearing armor.',
    },
    {
      name: 'Smite Evil (2/day)',
      level: 5,
      description: 'The Prestige Paladin may use Smite Evil twice per day.',
    },
    {
      name: 'Aura of Resolve',
      level: 6,
      description:
        'As the standard paladin ability. The Prestige Paladin and all allies within 10 feet are immune to charm effects.',
    },
    {
      name: 'Mercy (2nd)',
      level: 7,
      description: 'Select a second mercy (uses class level – 1 as effective paladin level).',
    },
    {
      name: 'Weapon Training (1)',
      level: 8,
      description:
        'As the fighter class feature. Select one weapon group; gain +1 bonus on attack and damage rolls with weapons in that group.',
    },
    {
      name: 'Armor Training (2)',
      level: 9,
      description:
        'Armor check penalty reduced by 2 and maximum Dexterity bonus increased by 2 while wearing armor.',
    },
    {
      name: 'Smite Evil (3/day)',
      level: 10,
      description: 'The Prestige Paladin may use Smite Evil three times per day.',
    },
    {
      name: 'Aura of Justice',
      level: 11,
      description:
        'As the standard paladin ability. The Prestige Paladin may spend two uses of Smite Evil to grant all allies within 10 feet the ability to smite evil for one round.',
    },
    {
      name: 'Mercy (3rd)',
      level: 12,
      description: 'Select a third mercy.',
    },
    {
      name: 'Weapon Training (2)',
      level: 13,
      description:
        'Select a second weapon group (+2 bonus). The bonus to the first weapon group increases by 1 (now +2).',
    },
    {
      name: 'Aura of Faith',
      level: 14,
      description:
        "As the standard paladin ability. The Prestige Paladin's weapons are treated as good-aligned for overcoming DR. Allies within 10 feet deal good-aligned damage on their first hit each round.",
    },
    {
      name: 'Armor Training (3)',
      level: 14,
      description:
        'Armor check penalty reduced by 3 and maximum Dexterity bonus increased by 3 while wearing armor.',
    },
    {
      name: 'Smite Evil (4/day)',
      level: 15,
      description: 'The Prestige Paladin may use Smite Evil four times per day.',
    },
    {
      name: 'Mercy (4th)',
      level: 15,
      description: 'Select a fourth mercy.',
    },
  ],
  spellcasting: {
    type: 'Divine',
    casting: 'Prepared',
    spellList:
      'Advances existing divine spellcasting class (gained at levels 2–5, 7–10, 12–15; not at 1st, 6th, or 11th)',
  },
  advancesSpellcasting: {
    mode: 'single',
    tradition: 'divine',
    atLevels: [2, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15],
  },
  prerequisites: {
    bab: 3,
    skills: [
      { name: 'Knowledge (religion)', ranks: 5 },
      { name: 'Knowledge (nobility)', ranks: 1 },
      { name: 'Ride', ranks: 1 },
    ],
    feats: ['Weapon Focus (any)'],
    spellcasting: 'Ability to cast protection from evil as a divine spell',
    alignment: 'Any good',
    special: ['Ability to turn undead or channel energy'],
  },
  source: SOURCE_35E,
  visibility: 'campaign',
  campaignId: CAMPAIGN_ID,
};

// ---- 5. NEMESIS ----------------------------------------------------------------
// Custom 10-level prestige class for Kah-Mei. Heaven's assassins — righteous
// warriors trained to face demons and evil outsiders with ruthless precision.
// Full BAB, d10 HD, 6+Int skills. No spellcasting of its own.
//
// NOTE: Will save progression in the original stat block (1,1,2,2,3,3,4,4,5,5)
// is non-standard (+0.5/level). Modeled here as Good for system compatibility;
// treat the actual table values as authoritative at the table.
const NEMESIS: CampaignClass = {
  name: 'Nemesis',
  category: 'Prestige',
  maxLevel: 10,
  hitDie: 10,
  skillRanksPerLevel: 6,
  classSkills: [
    'Acrobatics',
    'Bluff',
    'Diplomacy',
    'Disguise',
    'Fly',
    'Intimidate',
    'Knowledge (planes)',
    'Knowledge (religion)',
    'Perception',
    'Sense Motive',
    'Stealth',
    'Survival',
  ],
  babProgression: BABProgression.Full,
  saves: {
    fortitude: SaveProgression.Poor,
    reflex: SaveProgression.Poor,
    will: SaveProgression.Good,
  },
  weaponProficiencies: ['All simple weapons', 'All martial weapons'],
  armorProficiencies: ['Light armor', 'Medium armor', 'Heavy armor', 'Shields'],
  classFeatures: [
    {
      name: 'Shield of Wings (fire resist 5)',
      level: 1,
      description:
        'The Nemesis gains fire resistance 5. As a swift action, he can manifest four burning wings to gain a fly speed of 40 ft (average) for a number of rounds equal to Nemesis level + Cha modifier (non-consecutive). Wings can be dismissed as a swift action. While the wings are active, and for a number of minutes equal to the rounds spent flying after dismissal, the Nemesis loses the fire resistance granted by this ability.',
    },
    {
      name: 'Divine Retribution +2 (3 rounds, standard action)',
      level: 1,
      description:
        "By studying a visible evil outsider for 3 consecutive rounds and succeeding on a Knowledge (planes) check, the Nemesis gains a +2 bonus on Bluff, Disguise, Intimidate, Knowledge, Perception, Sense Motive, Stealth, and Survival checks, on attack rolls, and on weapon damage rolls against that target. The DCs of the Nemesis's class abilities against that target also increase by 2. Only one target can be studied at a time. Bonuses persist until the target dies, the Nemesis studies a new target, or the bonuses are ended as a free action.\n\nDeath Attack (longsword sneak attack only): If the Nemesis makes a sneak attack with a longsword against a studied target and it deals damage, he may end his study as an immediate action. The sneak attack then functions as a death attack: the target must succeed on a Fortitude save (DC 10 + Nemesis level + Cha modifier) or die or be paralyzed for 1d6 + Nemesis level rounds (Nemesis's choice). On a successful save, the attack is a normal sneak attack. The death attack fails if the target is aware of the Nemesis or recognizes him as an enemy.",
    },
    {
      name: 'Divine Boon (1st)',
      level: 1,
      description:
        'The Nemesis gains the 1st boon of his worshipped deity (as Deific Obedience), without needing to meet the normal HD requirement. Does not grant additional daily uses once the character reaches the HD threshold naturally.',
    },
    {
      name: 'Ruthlessness',
      level: 2,
      description:
        'The Nemesis can deliver a coup de grace against a helpless opponent as a standard action, using the favored weapon of his deity.',
    },
    {
      name: 'Sneak Attack +1d6',
      level: 2,
      description:
        'As the rogue ability. The Nemesis deals +1d6 extra damage when flanking or when the target is denied its Dexterity bonus to AC. Stacks with sneak attack from other sources. Increases to +2d6 at 5th level and +3d6 at 8th level.',
    },
    {
      name: 'Shield of Wings (fire resist 10)',
      level: 3,
      description: 'Fire resistance increases to 10. Wings ability unchanged from 1st level.',
    },
    {
      name: 'Quiet Death',
      level: 3,
      description:
        'Whenever the Nemesis kills a creature using his death attack during a surprise round, he may immediately make a Stealth check opposed by the Perception checks of all creatures in the vicinity. Success prevents observers from identifying the Nemesis as the assailant, and may prevent them from noticing the target is dead for a few moments.',
    },
    {
      name: 'Heavenly Fire',
      level: 4,
      description:
        'When the Nemesis deals sneak attack damage to a target he has successfully studied with Divine Retribution, the sneak attack wreathes the target in blue celestial flame. The target must succeed on a Fortitude save (DC 10 + Nemesis level + Cha modifier) or take additional damage equal to 1d6 per 2 class levels. This damage is divine in nature and bypasses fire resistance and immunity. On a successful save, the target takes only the normal sneak attack damage. Usable a number of times per day equal to Nemesis level, no more than once per round.',
    },
    {
      name: 'Divine Boon (2nd)',
      level: 4,
      description:
        'The Nemesis gains the 2nd boon of his worshipped deity without needing to meet the normal HD requirement.',
    },
    {
      name: 'Sneak Attack +2d6',
      level: 5,
      description: 'Sneak attack damage increases to +2d6.',
    },
    {
      name: 'Divine Retribution +4 (2 rounds, move action)',
      level: 5,
      description:
        'Studying an evil outsider now requires only 2 consecutive rounds (down from 3) and is a move action (down from standard). The Nemesis can simultaneously maintain Divine Retribution bonuses against 2 evil outsiders at once (up from 1). All other rules remain as described at 1st level.',
    },
    {
      name: 'Shield of Wings (fire resist 30)',
      level: 6,
      description: 'Fire resistance increases to 30. Wings ability unchanged from 1st level.',
    },
    {
      name: 'Smite (bonus use)',
      level: 6,
      description:
        'If the Nemesis has the smite evil class feature, he gains 1 additional daily use. Nemesis levels stack with paladin levels when calculating the bonus damage dealt by smite evil.',
    },
    {
      name: 'Immolate',
      level: 7,
      description:
        'When the Nemesis reduces an evil-subtype outsider to negative hit points with a sneak attack or coup de grace, the target must succeed on a Fortitude save (DC 10 + Nemesis level + Cha modifier) or be entirely disintegrated, leaving only fine ash (as disintegrate). If the target was reduced to negative hit points by Heavenly Fire, it receives no saving throw against Immolate.',
    },
    {
      name: 'Divine Boon (3rd)',
      level: 7,
      description:
        'The Nemesis gains the 3rd boon of his worshipped deity without needing to meet the normal HD requirement.',
    },
    {
      name: 'Sneak Attack +3d6',
      level: 8,
      description: 'Sneak attack damage increases to +3d6.',
    },
    {
      name: 'Shield of Wings (fire immunity)',
      level: 9,
      description:
        'Fire resistance becomes full immunity to fire. Wings ability unchanged from 1st level.',
    },
    {
      name: 'Hide in Plain Sight',
      level: 9,
      description:
        'The Nemesis can use the Stealth skill even while being observed, as long as he is within 10 feet of some sort of shadow. He cannot hide in his own shadow.',
    },
    {
      name: 'Divine Retribution (immediate, +2 bonus increase, 3 targets)',
      level: 10,
      description:
        'All bonuses from Divine Retribution (attack/damage/skills/DCs) increase by a further +2. Divine Retribution can now be activated as an immediate action when the target is unaware of the Nemesis. The Nemesis can simultaneously study 3 evil outsiders at once. The death attack effect can now be triggered by any sneak attack against the studied target (not only longsword attacks), activated as an immediate action.',
    },
    {
      name: 'Divine Boon (4th)',
      level: 10,
      description:
        'The Nemesis gains the 4th boon of his worshipped deity without needing to meet the normal HD requirement.',
    },
  ],
  spellcasting: { type: 'None', casting: 'None' },
  prerequisites: {
    bab: 5,
    skills: [
      { name: 'Knowledge (religion)', ranks: 5 },
      { name: 'Knowledge (planes)', ranks: 5 },
    ],
    feats: ['Deific Obedience', 'Smite (any)', 'Sneak Attack (any source)'],
    alignment: 'Lawful good',
    special: ['Must worship the associated deity'],
  },
  source: SOURCE_35E,
  visibility: 'campaign',
  campaignId: CAMPAIGN_ID,
};

const CAMPAIGN_CLASSES: CampaignClass[] = [
  HATHRAN,
  DWEOMERKEEPER,
  RADIANT_SERVANT_OF_MILANI,
  PRESTIGE_PALADIN,
  NEMESIS,
];

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

/** Convert a class name to a deterministic kebab-case Firestore document ID. */
function toDocId(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

// ---------------------------------------------------------------------------
// SEED FUNCTIONS
// ---------------------------------------------------------------------------

async function runSeedClasses(classes: CampaignClass[]): Promise<void> {
  console.log(`\nSeeding ${classes.length} campaign classes → 'classes' collection`);

  for (const cls of classes) {
    const docId = toDocId(cls.name);
    if (DRY_RUN) {
      console.log(`  [DRY RUN] would upsert: ${cls.name} → classes/${docId}`);
      continue;
    }
    const ref = db.collection('classes').doc(docId);
    await ref.set(cls as unknown as Record<string, unknown>);
    console.log(`  ✓ ${cls.name} → classes/${docId}`);
  }
}

// ---------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  console.log(`\n=== seedCampaignContent ===`);
  console.log(`Project: ${PROJECT_ID}`);

  if (DRY_RUN) {
    console.log('[DRY RUN] — no writes will be performed.\n');
  }

  await runSeedClasses(CAMPAIGN_CLASSES);

  const totalClasses = CAMPAIGN_CLASSES.length;

  if (DRY_RUN) {
    console.log(`\n[DRY RUN] Summary: ${totalClasses} campaign classes — no writes performed.`);
  } else {
    console.log(`\n✓ Done. Seeded ${totalClasses} campaign classes to ${PROJECT_ID}.`);
  }
}

main().catch((err) => {
  console.error('\nFatal error:', err);
  process.exit(1);
});
