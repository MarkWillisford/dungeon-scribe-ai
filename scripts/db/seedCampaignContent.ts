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

const SOURCE_HOMEBREW: GameDataSource = {
  bookId: 'campaign-homebrew',
  bookName: 'Campaign Homebrew',
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
      id: 'awe-of-the-wychlaran',
      activationMode: 'toggle',
      shortDescription:
        'Mendev characters of equal/lower level take –2 on attacks and opposed skill checks vs. you',
      description:
        "Any character from the Mendev region whose character level is equal to or lower than the Hathran's takes a –2 penalty on attack rolls and opposed skill checks made against her.",
    },
    {
      name: 'Universal Spirit Magic (1/day)',
      level: 3,
      id: 'universal-spirit-magic',
      shortDescription: 'Use Mendev Spirit Magic outside Mendev (uses/day scale with level)',
      resourcePool: {
        id: 'universal_spirit_magic',
        name: 'Universal Spirit Magic',
        rechargeOn: 'rest',
        maxFormula: 'floor(hathranLevel / 3)',
        restRecoveryMode: 'full',
      },
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
      id: 'universal-spirit-magic',
      description: 'The Hathran may use her Spirit Magic ability outside Mendev twice per day.',
    },
    {
      name: 'Awe of the Wychlaran (–4)',
      level: 7,
      id: 'awe-of-the-wychlaran',
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
      id: 'universal-spirit-magic',
      description:
        'The Hathran may use her Spirit Magic ability outside Mendev three times per day.',
    },
    {
      name: 'Awe of the Wychlaran (–6)',
      level: 10,
      id: 'awe-of-the-wychlaran',
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
      id: 'supernatural-spell',
      shortDescription:
        'Standard — cast a spell as a supernatural ability (no components, ignores SR; uses/day scale with level)',
      resourcePool: {
        id: 'supernatural_spell',
        name: 'Supernatural Spell',
        rechargeOn: 'rest',
        maxFormula: 'max(0, floor(dweomerkeeperLevel / 2) - 1)',
        restRecoveryMode: 'full',
      },
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
      id: 'supernatural-spell',
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
      id: 'supernatural-spell',
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
      id: 'supernatural-spell',
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
      id: 'extra-greater-turning',
      shortDescription:
        'Greater turning (3 + CHA mod/day) if Sun domain — destroys instead of turning',
      resourcePool: {
        id: 'extra_greater_turning',
        name: 'Extra Greater Turning',
        rechargeOn: 'rest',
        maxFormula: '3 + chaMod',
        restRecoveryMode: 'full',
        specialRechargeNote:
          'Requires Sun domain. Replaces the normal once-per-day greater turning.',
      },
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
      id: 'positive-energy-burst',
      shortDescription:
        'Standard — 1d6/level to all undead in 100 ft (Ref DC 10 + level for half); costs 2 channel attempts',
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
      id: 'smite-evil',
      activationMode: 'toggle',
      shortDescription:
        'Swift — +CHA bonus attack, +level damage vs. evil (uses/day scale with level)',
      resourcePool: {
        id: 'smite_evil',
        name: 'Smite Evil',
        rechargeOn: 'rest',
        maxFormula: 'floor(prestigePaladinLevel / 5) + 1',
        restRecoveryMode: 'full',
      },
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
      id: 'lay-on-hands',
      shortDescription: 'Touch heal (½ level + 3 d6); uses/day = level + CHA mod + 3',
      resourcePool: {
        id: 'lay_on_hands',
        name: 'Lay on Hands',
        rechargeOn: 'rest',
        maxFormula: 'prestigePaladinLevel + chaMod + 3',
        restRecoveryMode: 'full',
      },
      description:
        'As the standard paladin ability. Heals a number of d6 equal to ½ class level + 3. Usable a number of times per day equal to class level + Charisma modifier + 3.',
    },
    {
      name: 'Divine Bond',
      level: 2,
      id: 'divine-bond',
      activationMode: 'toggle',
      shortDescription: 'Swift — bond weapon with spirit or enhance mount (1 min/level)',
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
      id: 'smite-evil',
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
      id: 'smite-evil',
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
      id: 'smite-evil',
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
      id: 'shield-of-wings',
      activationMode: 'toggle',
      shortDescription:
        'Swift — manifest fly speed 40 ft (avg) for nemesisLevel + CHA mod rounds (also grants fire resistance)',
      resourcePool: {
        id: 'shield_of_wings',
        name: 'Shield of Wings',
        rechargeOn: 'rest',
        maxFormula: 'nemesisLevel + chaMod',
        restRecoveryMode: 'full',
      },
      description:
        'The Nemesis gains fire resistance 5. As a swift action, he can manifest four burning wings to gain a fly speed of 40 ft (average) for a number of rounds equal to Nemesis level + Cha modifier (non-consecutive). Wings can be dismissed as a swift action. While the wings are active, and for a number of minutes equal to the rounds spent flying after dismissal, the Nemesis loses the fire resistance granted by this ability.',
    },
    {
      name: 'Divine Retribution +2 (3 rounds, standard action)',
      level: 1,
      id: 'divine-retribution',
      activationMode: 'toggle',
      shortDescription:
        'Study evil outsider (3 rounds) — +2 attack, damage, and skills vs. target; enables death attack',
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
      id: 'shield-of-wings',
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
      id: 'heavenly-fire',
      shortDescription:
        'On sneak attack vs. studied target — extra divine fire damage (Nemesis level uses/day)',
      resourcePool: {
        id: 'heavenly_fire',
        name: 'Heavenly Fire',
        rechargeOn: 'rest',
        maxFormula: 'nemesisLevel',
        restRecoveryMode: 'full',
      },
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
      id: 'divine-retribution',
      description:
        'Studying an evil outsider now requires only 2 consecutive rounds (down from 3) and is a move action (down from standard). The Nemesis can simultaneously maintain Divine Retribution bonuses against 2 evil outsiders at once (up from 1). All other rules remain as described at 1st level.',
    },
    {
      name: 'Shield of Wings (fire resist 30)',
      level: 6,
      id: 'shield-of-wings',
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
      id: 'shield-of-wings',
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
      id: 'divine-retribution',
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

// ---- 6. BATTLECASTER -----------------------------------------------------------
// Custom 10-level prestige class blending Path of War initiating with full divine
// spellcasting advancement. Full BAB, d10 HD, 4+Int skills.
const BATTLECASTER: CampaignClass = {
  name: 'Battlecaster',
  category: 'Prestige',
  maxLevel: 10,
  hitDie: 10,
  skillRanksPerLevel: 4,
  classSkills: [
    'Acrobatics',
    'Knowledge (religion)',
    'Knowledge (martial)',
    'Perception',
    'Sense Motive',
    'Spellcraft',
    'Stealth',
  ],
  babProgression: BABProgression.Full,
  saves: {
    fortitude: SaveProgression.Good,
    reflex: SaveProgression.Poor,
    will: SaveProgression.Poor,
  },
  weaponProficiencies: [],
  armorProficiencies: [],
  classFeatures: [
    {
      name: 'Maneuvers',
      level: 1,
      description:
        'At 1st level and every even-numbered level, the battlecaster gains maneuvers known from Eternal Guardian, Silver Crane, and a chosen third discipline (plus any prior martial disciplines). Evil battlecasters may also choose Black Seraph. Full battlecaster levels add to initiator level. Progression: L1 6/4/1, L2 7/5/2, L3 8/5/2, L4 8/5/2, L5 9/6/3, L6 9/6/3, L7 10/6/3, L8 10/7/4, L9 11/7/4, L10 12/8/5 (known/readied/stances).',
    },
    {
      name: "Battlecaster's Shield (Su)",
      level: 1,
      id: 'battlecasters-shield',
      activationMode: 'toggle',
      shortDescription:
        'Standard — channel into shield for sacred/profane AC bonus = channel dice (24 hrs or until struck)',
      description:
        "As a standard action, channel energy into a worn shield. While worn, the shield grants a sacred bonus (positive energy) or profane bonus (negative energy) to AC equal to the number of dice of the battlecaster's channel energy. This bonus lasts 24 hours or until the battlecaster is struck in combat. Applies only to this battlecaster.",
    },
    {
      name: 'Stance of Divine Steel (Su)',
      level: 1,
      id: 'stance-of-divine-steel',
      activationMode: 'toggle',
      shortDescription:
        'Swift — divine stance; burn spell slots for 1-round bonuses: attack, damage, AC, saves, or energy resist',
      description:
        'As a swift action, forgo any current stance to enter the Stance of Divine Steel (3rd-level stance). While in this stance, sacrifice any uncast divine spell or spell slot as a free action to gain one of the following for 1 round (2 rounds at 5th level, 3 rounds at 9th level): Divine Edge (+insight to attacks = spell level), Sacred Smite (+1d6 divine damage/spell level on first hit per round), Defensive Field (+insight to AC = spell level), Grace of the Divine (+insight to saves = spell level), Energy Shield (resistance 5 × spell level to one energy type).',
    },
    {
      name: 'Spellcasting',
      level: 1,
      description:
        'At each battlecaster level, gains new spells per day and caster level as if gaining a level in a divine spellcasting class possessed before. Choose which divine class to advance each level.',
    },
    {
      name: "Battlecaster's Strike (Su)",
      level: 2,
      description:
        "When initiating a martial strike, as a swift action cast a divine touch spell against the same target, delivering it as part of the strike. At 5th level, when using the Full-Attack action, Battlecaster's Strike may replace the first attack at full BAB.",
    },
    {
      name: 'Divine Recovery (Su)',
      level: 3,
      description:
        'As a swift action, expend a prepared divine spell or spell slot of a level equal to or greater than the maneuver level to instantly recover an expended maneuver. Also grants +4 circumstance bonus to caster level on the next divine spell cast within 1 minute (does not stack with multiple uses).',
    },
    {
      name: 'Divine Steel (Su)',
      level: 4,
      id: 'divine-power-pool',
      shortDescription:
        'Casting divine spells grants temp HP or power point discounts; pool = 10×level + 10×(CHA+WIS mod)',
      resourcePool: {
        id: 'divine_power_pool',
        name: 'Divine Power Pool',
        rechargeOn: 'rest',
        maxFormula: '10 * battlecasterLevel + 10 * chaMod + 10 * wisMod',
        restRecoveryMode: 'full',
      },
      description:
        'When casting a divine spell, choose: (1) gain temporary HP equal to the spell level (stacks, lasts until end of encounter), or (2) receive a 10% discount on divine power pool point costs. At 6th level, up to 3 pool bonuses active at once. At 8th level, pool bonuses last 2 rounds and the discount applies when spending pool points to cast spells.\n\nDivine Power Pool: Max = 10 × battlecaster level + 10 × (Cha modifier + Wis modifier). Spend points for sacred/profane bonuses to AC, attack, damage, saves, or skills (1 pt/CL = +1 per 5 CL, lasts until next turn, max 2 active). Or spend to cast domain spells spontaneously: 1st=2 pts, 2nd=6, 3rd=18, 4th=36, 5th=54, 6th=78, 7th=108, 8th=144, 9th=180.',
    },
    {
      name: 'Divine Ruin (Su)',
      level: 5,
      description:
        "Foes damaged by the battlecaster's martial strikes suffer –2 to AC and saving throws against the battlecaster's divine spells for the rest of the encounter, or until maneuvers are recovered.",
    },
    {
      name: 'Extra Channel (bonus feat)',
      level: 6,
      description: 'Gains Extra Channel as a bonus feat.',
    },
    {
      name: 'Divine Impetus (Su)',
      level: 7,
      description:
        'Expend one channel energy use to gain one additional swift action this round. Usable once per round.',
    },
    {
      name: 'Shaped Channel (Su)',
      level: 8,
      description: 'Channel energy can instead affect a 30-foot cone or a 120-foot line.',
    },
    {
      name: 'Improved Battlecasting (Su)',
      level: 9,
      description:
        "When using Battlecaster's Strike, ranged touch spells may target foes as if they were melee touch spells.",
    },
    {
      name: 'Divine Assault (Su)',
      level: 10,
      id: 'divine-assault',
      shortDescription:
        'Free — weave a strike into a spell attack roll; spell delivers maneuver effects (1 + WIS mod uses/day)',
      resourcePool: {
        id: 'divine_assault',
        name: 'Divine Assault',
        rechargeOn: 'rest',
        maxFormula: '1 + wisMod',
        restRecoveryMode: 'full',
      },
      description:
        "As a free action when casting a divine spell requiring an attack roll, initiate a strike as part of that spell — the spell delivers the maneuver's effects instead of a weapon attack. Range capped at 30 ft. Spell resistance or a successful save negates the maneuver. Only the first attack of multi-attack spells gains the strike effect. Usable 1 + Wisdom modifier times per day.",
    },
  ],
  spellcasting: {
    type: 'Divine',
    casting: 'Prepared',
    spellList: 'Advances existing divine spellcasting class (+1 level per battlecaster level)',
  },
  advancesSpellcasting: { mode: 'single', tradition: 'divine' },
  prerequisites: {
    bab: 4,
    skills: [
      { name: 'Knowledge (martial)', ranks: 5 },
      { name: 'Spellcraft', ranks: 5 },
      { name: 'Knowledge (religion)', ranks: 5 },
    ],
    feats: ['Combat Casting', 'Alignment Channel or Elemental Channel'],
    spellcasting: 'Ability to cast 2nd-level divine spells',
    special: ['Channel energy class feature'],
  },
  source: SOURCE_HOMEBREW,
  visibility: 'campaign',
  campaignId: CAMPAIGN_ID,
};

// ---- 7. LEADER OF THE FAITH ---------------------------------------------------
// Custom 10-level prestige class for divine leaders. Leadership-focused with
// selectable primary/secondary abilities borrowed from cohorts and followers.
// Medium BAB, d6 HD, 2+Int skills. Full Will, Poor Fort and Ref.
const LEADER_OF_THE_FAITH: CampaignClass = {
  name: 'Leader of the Faith',
  category: 'Prestige',
  maxLevel: 10,
  hitDie: 6,
  skillRanksPerLevel: 2,
  classSkills: ['Bluff', 'Diplomacy', 'Intimidate', 'Sense Motive'],
  babProgression: BABProgression.Medium,
  saves: {
    fortitude: SaveProgression.Poor,
    reflex: SaveProgression.Poor,
    will: SaveProgression.Good,
  },
  weaponProficiencies: ['All simple weapons', "Deity's favored weapon"],
  armorProficiencies: ['Light armor'],
  classFeatures: [
    {
      name: 'Leader of the Faith (Ex)',
      level: 1,
      description:
        'Grants an enhanced Leadership ability. Leadership score = character level + Cha modifier + Leader of the Faith level (counted twice). Cohort max level = total character level – 1. Cannot also take the Leadership feat; if already possessed, raises cohort max level by 1 and grants a second cohort at ECL – 2. Any feats or abilities referring to Leadership also affect this ability.',
    },
    {
      name: 'Secondary Ability (1st)',
      level: 1,
      description:
        'Select one Secondary Ability from: Channel (1d6/selection; Frequency or Power scaling), Lay on Hands (1d6/selection, ½ECL+Cha uses), Fervor (1d6/selection), Favored Terrain, Sacred Armor (+1 enh, ECL min/day), Zealous Inspiration (+1 morale to followers per selection), Divine Tracker, Sacred Empathy, Divine Mandate (grant action to follower), or Minor Blessings. Must have a follower or cohort with the ability. May be selected again.',
    },
    {
      name: 'Aligned Class (Ex)',
      level: 2,
      description:
        'Choose a divine class with at least 1 level. At LotF levels 2–5 and 7–9, gain either all class features or the spellcasting progression of the aligned class (not both), treating those Leader levels as additional aligned class levels.',
    },
    {
      name: 'Primary Ability (2nd)',
      level: 2,
      description:
        'Select one Primary Ability from: Smite Evil/Good (1/day per selection, uses ECL as paladin level), Divine Bond (weapon or armor, +1 enh/selection, ECL min/day, 1/day per selection), Judgment (1/day per selection, uses ECL as inquisitor level), Revelation (any in-portfolio revelation, uses ECL as oracle level), Favored Enemy, Faithful Coordination (share teamwork feats within 30 ft), Heretical Insight (1/day per selection; gain a forbidden ability for 1 min/ECL), or Major Blessings (ECL 10+). Must have a follower or cohort with the ability. May be selected again.',
    },
    {
      name: 'Primary Ability (3rd)',
      level: 3,
      description: 'Gain another Primary Ability selection.',
    },
    {
      name: 'Secondary Ability (4th)',
      level: 4,
      description: 'Gain another Secondary Ability selection.',
    },
    {
      name: 'Primary Ability (5th)',
      level: 5,
      description: 'Gain another Primary Ability selection.',
    },
    {
      name: 'Secondary Ability (6th)',
      level: 6,
      description: 'Gain another Secondary Ability selection.',
    },
    {
      name: 'Primary Ability (7th)',
      level: 7,
      description: 'Gain another Primary Ability selection.',
    },
    {
      name: 'Secondary Ability (8th)',
      level: 8,
      description: 'Gain another Secondary Ability selection.',
    },
    {
      name: 'Primary Ability (9th)',
      level: 9,
      description: 'Gain another Primary Ability selection.',
    },
    {
      name: 'Expanded Call',
      level: 10,
      description:
        'The Leader gains the Epic Leadership feat, expanding the maximum followers and cohorts she can attract.',
    },
    {
      name: 'Twofold Master (Ex)',
      level: 10,
      description:
        "Gain a second cohort with max level equal to the Leader's level – 2. If Leadership was already possessed, both cohorts' max levels increase to match the Leader's level. If the Leader is herself a cohort, all cohort max levels are reduced by 1.",
    },
    {
      name: 'Secondary Ability (10th)',
      level: 10,
      description: 'Gain another Secondary Ability selection.',
    },
  ],
  spellcasting: { type: 'None', casting: 'None' },
  prerequisites: {
    skills: [
      { name: 'Diplomacy, Intimidate, or Sense Motive', ranks: 5 },
      { name: 'Knowledge (religion)', ranks: 5 },
    ],
    special: [
      'At least 1 level in a divine class (Cleric, Evangelist, Exalted, Inquisitor, Oracle, Paladin, Ranger, or Sentinel)',
      "Must be within one step of chosen deity's alignment",
    ],
  },
  source: SOURCE_HOMEBREW,
  visibility: 'campaign',
  campaignId: CAMPAIGN_ID,
};

// ---- 8. REDEEMED MORD SITH ---------------------------------------------------
// Custom 20-level base class. Warrior-monks who have broken free from Cheliax's
// conditioning, wielding stolen magic and brutal martial arts in service of
// redemption. Full BAB, d10 HD, all Good saves, 6+Int skills. Alignment: Any Lawful.
const REDEEMED_MORD_SITH: CampaignClass = {
  name: 'Redeemed Mord Sith',
  category: 'Base',
  maxLevel: 20,
  hitDie: 10,
  skillRanksPerLevel: 6,
  classSkills: [
    'Acrobatics',
    'Climb',
    'Craft',
    'Diplomacy',
    'Escape Artist',
    'Intimidate',
    'Knowledge (arcana)',
    'Knowledge (history)',
    'Knowledge (religion)',
    'Perception',
    'Sense Motive',
    'Spellcraft',
    'Stealth',
    'Swim',
  ],
  babProgression: BABProgression.Full,
  saves: {
    fortitude: SaveProgression.Good,
    reflex: SaveProgression.Good,
    will: SaveProgression.Good,
  },
  weaponProficiencies: ['All simple weapons', 'Agiel', 'Whip'],
  armorProficiencies: ['Mord-Sith leather', 'Studded leather'],
  startingWealth: '1d6 × 10 gp (average 35 gp)',
  alignment: 'Any lawful',
  classFeatures: [
    {
      name: 'Crane Style',
      level: 1,
      description: 'Gains Crane Style as a bonus feat, ignoring prerequisites.',
    },
    {
      name: 'Redirection',
      level: 1,
      id: 'redirection',
      shortDescription:
        'Immediate — trip or reposition an attacker; success sickens 1 round (Reflex DC = 10 + ½ level + CHA)',
      resourcePool: {
        id: 'redirection',
        name: 'Redirection',
        rechargeOn: 'rest',
        maxFormula: 'redeemedMordSithLevel',
        restRecoveryMode: 'full',
      },
      description:
        'As an immediate action, attempt a reposition or trip against a creature that threatens and attacks the Mord-Sith. Success sickens for 1 round (Reflex DC = 10 + ½ level + Cha modifier negates), +1 round at 4th and every four levels thereafter. Gains +2 to the maneuver check and DC if the attacker uses Power Attack or is charging (+4 if both). At 4th level, usable against opponents attacking allies. At 8th level, attempt both reposition and trip in the same immediate action. Usable once per round, up to Mord-Sith level times per day.',
    },
    {
      name: 'Mord-Sith Finesse',
      level: 1,
      description:
        'Gains Improved Unarmed Strike as a bonus feat. Unarmed damage follows the Agiel damage progression but one die size smaller (minimum 1d3). May use Charisma in place of Intelligence as a combat feat prerequisite.',
    },
    {
      name: 'Agiel Pain',
      level: 1,
      id: 'agiel-pain',
      activationMode: 'passive',
      shortDescription: 'Agiel attacks sicken target 1d4 rounds (Fort DC = 10 + ½ level + CHA mod)',
      description:
        "The Agiel counts as a monk weapon. Each successful Agiel attack forces a Fortitude save (DC 10 + ½ level + Cha modifier) or the target is sickened for 1d4 rounds. Immune to this sickening until the beginning of the Mord-Sith's next turn after a successful save.",
    },
    {
      name: 'Spelldrinker',
      level: 1,
      id: 'spelldrinker',
      activationMode: 'passive',
      shortDescription:
        'Spells failing to overcome SR are stolen: added to spells known and grant a spell slot',
      description:
        'The Mord-Sith does not learn spells by leveling. When a spell targeting her fails to overcome her SR, she gains: (1) the spell added to her Spells Known (replacing one if needed), and (2) a spell slot of the level used to cast it. Stolen spells are cast spontaneously as arcane spells using Charisma (CL = Mord-Sith level). May cast 0-level spells at will. May forget any known spell as a free action. Slots can be partially expended (spending 2 levels from a 4th-level slot leaves a 2nd-level slot).',
    },
    {
      name: 'Spell Resistance',
      level: 1,
      id: 'spell-resistance',
      activationMode: 'passive',
      shortDescription: 'SR = 11 + Mord-Sith level',
      description: 'Gains Spell Resistance equal to 11 + Mord-Sith level.',
    },
    {
      name: 'Fuse Style (2 stances)',
      level: 1,
      id: 'fuse-style',
      activationMode: 'toggle',
      shortDescription: 'Two style stances active simultaneously; switching one keeps the other',
      description:
        'Can have two style feat stances active at once. Starting a stance is still a swift action, but when switching, may choose one active style to persist.',
    },
    {
      name: 'Agiel Strike',
      level: 2,
      id: 'agiel-strike',
      shortDescription:
        'Standard — Agiel touch attack inflicts conditions scaling with level; 3 + CHA uses/day',
      resourcePool: {
        id: 'agiel_strike',
        name: 'Agiel Strike',
        rechargeOn: 'rest',
        maxFormula: '3 + chaMod',
        restRecoveryMode: 'full',
      },
      description:
        "As a standard action, make a melee touch attack with the Agiel. If it hits, deals Agiel damage as nonlethal and sickens for 1 minute; also applies one of the following conditions (Fort save DC = 10 + ½ level + Cha modifier negates): shaken 1 min (2nd level), fatigued 1 min (4th), staggered 2d6+3 rounds (8th), dazed 1d6 rounds (12th), blinded or deafened permanently (16th), paralyzed 1d6 rounds (20th). Successful strike grants a bonus to Intimidate vs. affected creatures equal to half this ability's effective level (stacks twice). Usable 3 + Cha modifier times per day.",
    },
    {
      name: 'Flowing Dodge',
      level: 2,
      description:
        'Gains +1 dodge bonus to AC per adjacent enemy, maximum equal to Cha modifier (minimum 1).',
    },
    {
      name: 'Unbalancing Counter',
      level: 3,
      description:
        "Attacks of opportunity render the struck creature flat-footed until the end of the Mord-Sith's next turn (Reflex DC = 10 + ½ level + Cha modifier negates).",
    },
    { name: 'Fast Movement (+10 ft)', level: 3, description: 'Base speed increases by +10 feet.' },
    {
      name: 'AC Bonus',
      level: 4,
      id: 'ac-bonus',
      activationMode: 'passive',
      shortDescription:
        'When wearing only Mord-Sith leather and unencumbered, add CHA mod to AC and CMD',
      description:
        'When wearing only Mord-Sith leather and unencumbered, adds Charisma modifier (minimum 0) to AC and CMD. Applies against touch attacks and when flat-footed. Lost when immobilized, helpless, wearing other armor, using a shield, or under medium/heavy load.',
    },
    {
      name: 'Crane Wing',
      level: 4,
      description:
        'Once per round while using Crane Style and fighting defensively or using total defense, deflect one melee attack that would hit, expending no action.',
    },
    {
      name: 'Elusive Target',
      level: 5,
      description:
        "As an immediate action, spend 3 spell slot levels for one of: (1) Reflex save vs. attacker's attack roll to halve damage (negate at 11th; redirects to non-attacking flanker); or (2) evasion (improved evasion at 11th) applied to a Reflex or Will save against a spell (non-damage spells: 50% chance of no effect on success).",
    },
    {
      name: 'Style Strike (1st)',
      level: 5,
      description:
        'During a full attack, designate one attack as a style strike with an additional effect. Knows 1 strike from the Unchained Monk list or Spell-Infused Shuriken list (Seeking Star, Spell-Charged Shuriken, Arcane Ricochet, Energy Burst Shuriken). Additional strikes at 9th, 13th, and 17th level.',
    },
    {
      name: 'Spellthief',
      level: 6,
      id: 'spellthief',
      activationMode: 'passive',
      shortDescription:
        "Stolen spells are removed from caster's list; saving against a spell grants 1 spell slot level",
      description:
        "While a stolen spell remains known and a usable slot is retained, that spell is removed from the original caster's spell list and their slot doesn't refresh. When the Mord-Sith succeeds on a save against a spell targeting her, she gains 1 spell slot level of magical energy.",
    },
    {
      name: 'Fast Movement (+20 ft)',
      level: 6,
      description: 'Base speed increases to +20 feet above base.',
    },
    {
      name: 'Bonus Feat',
      level: 6,
      description:
        "Gains a bonus feat from: Stunning Fist, Elemental Fist, Superstition, Disruptive, Eater of Magic, Spellbreaker, Witch Hunter, Deflect Arrows, Medusa's Wrath, Snatch Arrows, Spring Attack, combat style feats, combat maneuver feats, or Mord-Sith style feats. Additional bonus feats at 10th, 14th, 16th, and 18th level. At 10th level may instead gain a wildcard style slot.",
    },
    {
      name: 'Crane Riposte',
      level: 7,
      description:
        'Fighting defensively penalty reduced to –1 (Combat Expertise penalty also reduced by 1). When deflecting an attack with Crane Wing, may make an attack of opportunity against the attacker.',
    },
    {
      name: 'Fuse Style (3 stances)',
      level: 8,
      id: 'fuse-style',
      description:
        'Can have three style stances active simultaneously. Gains +1 bonus on attack rolls for each active style stance. Can enter up to three stances as a single swift action.',
    },
    { name: 'Style Strike (2nd)', level: 9, description: 'Learns a second style strike.' },
    {
      name: 'Fast Movement (+30 ft)',
      level: 9,
      description: 'Base speed increases to +30 feet above base.',
    },
    {
      name: 'Black Leather',
      level: 10,
      description:
        'Mord-Sith leather advances to +1 light fortification leather of invulnerability (+5 equiv), Max Dex +10.',
    },
    {
      name: 'Bonus Feat',
      level: 10,
      description: 'Gains another bonus feat from the Mord-Sith list.',
    },
    {
      name: 'Improved Spell Resistance',
      level: 11,
      id: 'spell-resistance',
      activationMode: 'passive',
      shortDescription: 'SR increases by +5 (total: 16 + level)',
      description: 'Spell Resistance increases by +5, total 16 + Mord-Sith level.',
    },
    {
      name: 'Improved Spelldrinker',
      level: 11,
      description:
        "When stealing a spell slot, make a caster level check (DC = spell level × 3). Success grants an additional slot one level lower. On a confirmed critical hit against a spellcaster, gain spell slot levels equal to ½ the target's highest spell level (minimum 1).",
    },
    {
      name: 'Counterstrike',
      level: 12,
      id: 'counterstrike',
      shortDescription:
        'Reflect spells failing to overcome SR back at caster (spell turning); 3 + CHA uses/day',
      resourcePool: {
        id: 'counterstrike',
        name: 'Counterstrike',
        rechargeOn: 'rest',
        maxFormula: '3 + chaMod',
        restRecoveryMode: 'full',
      },
      description:
        "When a spell fails to overcome the Mord-Sith's SR, reflect it back at the caster (as spell turning). At 16th level, may also reflect spells she successfully saved against via an opposed caster level check. Usable 3 + Cha modifier times per day.",
    },
    {
      name: 'Fast Movement (+40 ft)',
      level: 12,
      description: 'Base speed increases to +40 feet above base.',
    },
    { name: 'Style Strike (3rd)', level: 13, description: 'Learns a third style strike.' },
    {
      name: 'Bonus Feat',
      level: 14,
      description: 'Gains another bonus feat from the Mord-Sith list.',
    },
    {
      name: 'Breath of Life',
      level: 15,
      description: 'Can use breath of life 3 times per day, but only within 1 minute of death.',
    },
    {
      name: 'Fast Movement (+50 ft)',
      level: 15,
      description: 'Base speed increases to +50 feet above base.',
    },
    {
      name: 'Greater Spell Resistance',
      level: 16,
      id: 'spell-resistance',
      activationMode: 'passive',
      shortDescription:
        'Spells with SR: caster rolls with disadvantage; spells ignoring SR now apply but caster rolls with advantage',
      description:
        'Against spells that normally allow SR, the caster makes their caster level check with disadvantage. Against spells that normally ignore SR, the Mord-Sith may now apply her SR, but the caster makes their check with advantage.',
    },
    { name: 'Style Strike (4th)', level: 17, description: 'Learns a fourth style strike.' },
    {
      name: 'Bonus Feat',
      level: 18,
      description: 'Gains another bonus feat from the Mord-Sith list.',
    },
    {
      name: 'Fast Movement (+60 ft)',
      level: 18,
      description: 'Base speed increases to +60 feet above base.',
    },
    {
      name: 'Enchantment Drinker',
      level: 19,
      description:
        "When struck by a magic weapon, it must make a Will save (DC 20 + Cha modifier) or have its enchantments stripped. The Mord-Sith gains spell slot levels equal to the weapon's total enhancement equivalent and adds one of its crafting-requirement spells to her Spells Known. The weapon becomes masterwork until those slots are expended or the known spell is lost. While drained, the wielder is treated as if she had stolen a spell of the highest level gained.",
    },
    {
      name: 'White Leather',
      level: 20,
      description:
        'Mord-Sith leather advances to +1 heavy fortification leather of determination and improved invulnerability (+9 equiv), fly at will, Max Dex +12.',
    },
    {
      name: 'Master Spelldrinker',
      level: 20,
      description:
        'Can cast stolen spells without expending slots (and use stolen spell-like abilities without expending uses) when within 30 feet of whoever she stole them from.',
    },
    {
      name: 'Perfect Style (4 stances)',
      level: 20,
      id: 'fuse-style',
      description:
        'Can have four style stances active simultaneously and change them as a free action.',
    },
  ],
  spellcasting: {
    type: 'Arcane',
    casting: 'Spontaneous',
    spellList: 'Stolen spells only (Spelldrinker ability); Charisma-based, CL = Mord-Sith level',
  },
  source: SOURCE_HOMEBREW,
  visibility: 'campaign',
  campaignId: CAMPAIGN_ID,
};

const CAMPAIGN_CLASSES: CampaignClass[] = [
  HATHRAN,
  DWEOMERKEEPER,
  RADIANT_SERVANT_OF_MILANI,
  PRESTIGE_PALADIN,
  NEMESIS,
  BATTLECASTER,
  LEADER_OF_THE_FAITH,
  REDEEMED_MORD_SITH,
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
