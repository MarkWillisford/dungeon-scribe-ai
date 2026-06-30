import { ArchetypeData } from '../types';

// Standard Arcanist class features (for reference in replacedFeatures/modifiedFeatures):
// Arcane Reservoir, Arcanist Exploits, Consume Spells, Greater Exploits

export const ARCANIST_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Blood Arcanist
  // ──────────────────────────────────────────────
  {
    name: 'Blood Arcanist',
    className: 'Arcanist',
    description:
      "The blood arcanist melds the sorcerer's innate magical heritage with the arcanist's studied approach, drawing spells known from a sorcerer bloodline rather than a spellbook. She gains bloodline powers and feats in exchange for reduced exploit versatility.",
    replacedFeatures: ['Arcanist Exploits (4th, 6th, 8th, 10th, 12th, 14th, 16th, 18th, 20th)'],
    modifiedFeatures: ['Arcanist Exploits', 'Spells Known'],
    newFeatures: [
      {
        name: 'Bloodline',
        level: 1,
        description:
          'A blood arcanist selects one sorcerer bloodline. She gains bloodline arcana and treats her arcanist level as her sorcerer level for bloodline powers, using Intelligence rather than Charisma for any ability score-dependent effects.',
        effects: [],
      },
      {
        name: 'Bloodline Power (1st)',
        level: 1,
        description:
          'The blood arcanist gains the 1st-level bloodline power of her chosen bloodline at 1st level.',
        effects: [],
      },
      {
        name: 'Bloodline Feat',
        level: 7,
        description:
          "At 7th level, the blood arcanist gains the first bonus feat from her bloodline's feat list.",
        effects: [],
      },
      {
        name: 'Bloodline Power (3rd)',
        level: 9,
        description:
          'At 9th level, the blood arcanist gains the 3rd-level bloodline power of her chosen bloodline.',
        effects: [],
      },
      {
        name: 'Bloodline Power (9th)',
        level: 15,
        description:
          'At 15th level, the blood arcanist gains the 9th-level bloodline power of her chosen bloodline.',
        effects: [],
      },
      {
        name: 'Bloodline Power (15th)',
        level: 20,
        description:
          'At 20th level, the blood arcanist gains the 15th-level bloodline power of her chosen bloodline.',
        effects: [],
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 2. Brown-Fur Transmuter
  // ──────────────────────────────────────────────
  {
    name: 'Brown-Fur Transmuter',
    className: 'Arcanist',
    description:
      'The brown-fur transmuter specializes in the school of transmutation, transforming herself and her allies with greater ease and power than a typical arcanist. She trades broad magical flexibility for mastery over the art of physical alteration.',
    replacedFeatures: [
      'Arcanist Exploits (3rd)',
      'Greater Exploits (11th, 13th, 15th, 17th, 19th)',
    ],
    modifiedFeatures: ['Arcane Reservoir', 'Arcanist Exploits'],
    newFeatures: [
      {
        name: 'Powerful Change',
        level: 1,
        description:
          'A brown-fur transmuter adds the following spells to her spell list as arcanist spells of the appropriate level: spells from the transmutation school of any class. She casts transmutation spells at +1 caster level.',
        effects: [],
      },
      {
        name: 'Share Transmutation',
        level: 3,
        description:
          'At 3rd level, when the brown-fur transmuter casts a transmutation spell that targets only herself, she can spend 1 point from her arcane reservoir to instead affect one willing adjacent ally in addition to herself.',
        effects: [],
      },
      {
        name: 'Greater Transmutation',
        level: 11,
        description:
          'At 11th level, the brown-fur transmuter can apply metamagic feats to transmutation spells without increasing their casting time, though arcane reservoir points must be spent as normal.',
        effects: [],
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 3. Eldritch Font
  // ──────────────────────────────────────────────
  {
    name: 'Eldritch Font',
    className: 'Arcanist',
    description:
      'The eldritch font treats her arcane reservoir as a font of raw magical energy that she can weaponize directly, blasting foes with unformed eldritch power. She sacrifices refined exploit options for the ability to discharge arcane energy as a direct offensive weapon.',
    replacedFeatures: [
      'Consume Spells',
      'Arcanist Exploits (3rd, 7th, 9th, 11th, 13th, 15th, 17th, 19th)',
    ],
    modifiedFeatures: ['Arcane Reservoir'],
    newFeatures: [
      {
        name: 'Eldritch Blast',
        level: 1,
        description:
          'As a standard action, the eldritch font can expend 1 point from her arcane reservoir to unleash a ray of raw magical energy with a range of 30 feet, dealing 1d6 points of damage per arcanist level (max 10d6). The damage type is chosen when the blast is fired (acid, cold, electricity, or fire).',
        effects: [],
      },
      {
        name: 'Eldritch Surge',
        level: 3,
        description:
          'At 3rd level, the eldritch font can spend 2 reservoir points to add a secondary effect (bull rush, daze, or entangle) to her eldritch blast, with a DC equal to 10 + half her arcanist level + her Intelligence modifier.',
        effects: [],
      },
      {
        name: 'Empowered Eldritch Blast',
        level: 11,
        description:
          "At 11th level, the eldritch font's eldritch blast improves in range to 60 feet and she may spend 1 additional reservoir point to affect all targets in a 15-foot burst rather than a single ray.",
        effects: [],
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 4. Elemental Master
  // ──────────────────────────────────────────────
  {
    name: 'Elemental Master',
    className: 'Arcanist',
    description:
      'The elemental master dedicates her arcane studies to a single element, gaining mastery over elemental energies that surpasses other arcanists. She loses access to spells of opposed elements but gains extraordinary power over her chosen element.',
    replacedFeatures: ['Arcanist Exploits (3rd, 11th, 19th)'],
    modifiedFeatures: ['Spells Known', 'Arcane Reservoir'],
    newFeatures: [
      {
        name: 'Elemental Focus',
        level: 1,
        description:
          'The elemental master chooses one element (air, earth, fire, or water). She gains Elemental Focus as a bonus feat for that element and adds all spells with that energy descriptor to her spell list. She cannot learn spells of the opposed element.',
        effects: [],
      },
      {
        name: 'Elemental Resistance',
        level: 3,
        description:
          'At 3rd level, the elemental master gains energy resistance 10 against her chosen element. This increases to resistance 20 at 9th level and immunity at 15th level.',
        effects: [],
      },
      {
        name: 'Elemental Mastery',
        level: 11,
        description:
          'At 11th level, whenever the elemental master casts a spell with her chosen energy descriptor, she can spend 1 arcane reservoir point to treat the spell as if it were cast with the Empower Spell metamagic feat without increasing the casting time or spell level.',
        effects: [],
      },
      {
        name: 'Elemental Form',
        level: 19,
        description:
          'At 19th level, once per day the elemental master can transform into an elder elemental of her chosen type for 1 minute per arcanist level, as per elemental body IV but without the spell slot cost.',
        effects: [],
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 5. Occultist (Arcanist)
  // ──────────────────────────────────────────────
  {
    name: 'Occultist',
    className: 'Arcanist',
    description:
      'The occultist arcanist channels spirits and psychic energy rather than pure arcane force, blurring the line between wizard and occult practitioner. She trades some of her arcane adaptability for the ability to call upon otherworldly entities to aid her.',
    replacedFeatures: ['Consume Spells', 'Arcane Reservoir (partial)'],
    modifiedFeatures: ['Arcanist Exploits', 'Spellbook'],
    newFeatures: [
      {
        name: 'Spirit Lore',
        level: 1,
        description:
          'The occultist adds all spiritualist spells to her arcanist spell list as arcane spells of the same level. She treats her arcanist level as her spiritualist level for the purpose of spell prerequisites.',
        effects: [],
      },
      {
        name: 'Spirit Attunement',
        level: 1,
        description:
          'The occultist can call upon a spirit focus to enhance her spellcasting. Once per day per 4 arcanist levels, she can invoke a minor spiritual effect (as per the minor magic occultist implement ability) using her arcanist level as her occultist level.',
        effects: [],
      },
      {
        name: 'Spiritual Reservoir',
        level: 3,
        description:
          'At 3rd level, the occultist can spend points from her arcane reservoir to power occultist resonant and focus powers as if they were mental focus points. The exchange rate is 1 reservoir point per 2 focus points.',
        effects: [],
      },
    ],
    source: 'Pathfinder RPG: Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 6. School Savant
  // ──────────────────────────────────────────────
  {
    name: 'School Savant',
    className: 'Arcanist',
    description:
      "The school savant dedicates herself to mastering a single school of magic, gaining specialist wizard abilities in exchange for reduced flexibility. She functions as a specialist wizard for her chosen school while retaining the arcanist's flexible spell preparation.",
    replacedFeatures: ['Arcanist Exploits (1st, 3rd, 5th, 7th, 9th, 11th, 13th, 15th, 17th, 19th)'],
    modifiedFeatures: ['Arcane Reservoir', 'Spells Known'],
    newFeatures: [
      {
        name: 'Arcane School',
        level: 1,
        description:
          "The school savant selects one arcane school and gains all of that school's powers, treating her arcanist level as her wizard level. She must choose two opposition schools and cannot prepare or cast spells from those schools.",
        effects: [],
      },
      {
        name: 'School Exploit',
        level: 1,
        description:
          'At 1st level and every even level thereafter, the school savant gains an arcanist exploit from a limited list determined by her chosen arcane school, rather than the full list of arcanist exploits.',
        effects: [],
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 7. Spell Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Spell Specialist',
    className: 'Arcanist',
    description:
      'The spell specialist focuses her arcane studies on a specific spell, learning to cast it with unmatched precision and power. She sacrifices exploit versatility to become the absolute master of her chosen signature spell.',
    replacedFeatures: ['Consume Spells', 'Arcanist Exploits (3rd, 9th, 15th)'],
    modifiedFeatures: ['Arcane Reservoir'],
    newFeatures: [
      {
        name: 'Signature Spell',
        level: 1,
        description:
          'The spell specialist selects one arcanist spell as her signature spell. She always has this spell prepared and can cast it one additional time per day. Its save DC increases by 2.',
        effects: [],
      },
      {
        name: 'Spell Mastery',
        level: 3,
        description:
          'At 3rd level, the spell specialist can spend 1 point from her arcane reservoir to automatically apply one metamagic feat she knows to her signature spell without increasing its casting time or effective spell level.',
        effects: [],
      },
      {
        name: 'Perfected Spell',
        level: 9,
        description:
          "At 9th level, the spell specialist's signature spell ignores the spell resistance of creatures that have failed a save against it in the past 24 hours.",
        effects: [],
      },
      {
        name: 'Spell Legend',
        level: 15,
        description:
          'At 15th level, the spell specialist can cast her signature spell as a swift action by spending 3 points from her arcane reservoir.',
        effects: [],
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 8. Twilight Sage
  // ──────────────────────────────────────────────
  {
    name: 'Twilight Sage',
    className: 'Arcanist',
    description:
      'The twilight sage walks the boundary between arcane and divine magic, drawing on both sources of power to fuel her spells. She forgoes some standard arcanist abilities in exchange for access to divine magic and the ability to use both arcane and divine scrolls.',
    replacedFeatures: ['Consume Spells', 'Arcanist Exploits (5th, 11th, 17th)'],
    modifiedFeatures: ['Spells Known', 'Arcane Reservoir'],
    newFeatures: [
      {
        name: 'Divine Understanding',
        level: 1,
        description:
          'The twilight sage adds all cleric spells of 6th level and lower to her arcanist spell list. She can prepare these divine-origin spells using her arcanist spell slots, but they are treated as arcane spells for all other purposes.',
        effects: [],
      },
      {
        name: 'Twilight Reservoir',
        level: 1,
        description:
          'The twilight sage can use her arcane reservoir to power divine spell-like abilities and channel energy as if she were a 1st-level cleric. She can spend 2 reservoir points to channel energy (positive or negative) for 1d6 points of damage or healing.',
        effects: [],
      },
      {
        name: 'Balanced Understanding',
        level: 7,
        description:
          'At 7th level, the twilight sage can use Use Magic Device to activate divine spell completion and spell trigger items without a check, treating her arcanist level as her cleric level for this purpose.',
        effects: [],
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 9. Unlettered Arcanist
  // ──────────────────────────────────────────────
  {
    name: 'Unlettered Arcanist',
    className: 'Arcanist',
    description:
      "The unlettered arcanist forsakes the spellbook entirely, instead forming a pact with a familiar that stores her spells, much like a witch. She gains witch hexes and a familiar but loses the arcanist's traditional spellbook and some exploits.",
    replacedFeatures: ['Spellbook', 'Arcanist Exploits (3rd, 9th, 15th)', 'Consume Spells'],
    modifiedFeatures: ['Spells Known', 'Arcane Reservoir'],
    newFeatures: [
      {
        name: 'Familiar',
        level: 1,
        description:
          "The unlettered arcanist gains a witch's familiar, which stores her spells. She prepares spells by communing with her familiar each morning. If the familiar is lost or destroyed, the unlettered arcanist loses access to all her prepared spells until she gains a new familiar.",
        effects: [],
      },
      {
        name: 'Hex',
        level: 1,
        description:
          'At 1st level and every 4 levels thereafter (5th, 9th, 13th, 17th), the unlettered arcanist gains a witch hex, treating her arcanist level as her witch level. She cannot select major or grand hexes until 10th and 18th levels respectively.',
        effects: [],
      },
      {
        name: 'Witch Spell List',
        level: 1,
        description:
          'The unlettered arcanist uses the witch spell list instead of the sorcerer/wizard spell list for determining her spells known. Spells on the witch list become arcanist spells for her.',
        effects: [],
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 10. Magaambyan Initiate
  // ──────────────────────────────────────────────
  {
    name: 'Magaambyan Initiate',
    className: 'Arcanist',
    description:
      "Trained in the Magaambya academy, the oldest arcane school in the world, this arcanist blends arcane magic with druidic traditions inherited from Old-Mage Jatembe and his Ten Magic Warriors. She can cast both arcane and divine spells, representing the academy's synthesis of magical traditions.",
    replacedFeatures: ['Consume Spells', 'Arcanist Exploits (5th, 11th, 17th)'],
    modifiedFeatures: ['Spells Known', 'Arcane Reservoir'],
    newFeatures: [
      {
        name: 'Druid Spells',
        level: 1,
        description:
          'The Magaambyan initiate adds all druid spells up to 6th level to her arcanist spell list. These spells are prepared and cast as arcane spells, and she uses her Intelligence modifier for any druid spells she casts.',
        effects: [],
      },
      {
        name: 'Verdant Reservoir',
        level: 1,
        description:
          'The Magaambyan initiate can spend arcane reservoir points to produce nature-themed effects: she may spend 1 point to communicate with plants for 1 minute, or 2 points to cast speak with animals as a spell-like ability.',
        effects: [],
      },
      {
        name: 'Magaambyan Legacy',
        level: 7,
        description:
          "At 7th level, the Magaambyan initiate can spontaneously convert any prepared arcanist spell into a summon nature's ally spell of the same level, as a druid does, by spending 1 arcane reservoir point.",
        effects: [],
      },
    ],
    source: 'Pathfinder Campaign Setting: Paths of the Righteous / Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 11. Nature Mage
  // ──────────────────────────────────────────────
  {
    name: 'Nature Mage',
    className: 'Arcanist',
    description:
      "The nature mage combines the arcanist's intellectual approach with druidic attunement to the natural world. She gains access to druid spells and nature bond but loses some of the arcanist's trademark flexibility.",
    replacedFeatures: ['Arcanist Exploits (3rd, 9th, 15th)', 'Consume Spells'],
    modifiedFeatures: ['Spells Known'],
    newFeatures: [
      {
        name: 'Nature Bond',
        level: 1,
        description:
          "The nature mage gains the druid's nature bond class feature, gaining either an animal companion (using her arcanist level as her effective druid level) or a domain from the druid domain list.",
        effects: [],
      },
      {
        name: 'Expanded Spell List',
        level: 1,
        description:
          'The nature mage adds the following druid spells to her arcanist spell list: all spells with the plant, animal, or weather descriptors, as well as spells from the animal, plant, and weather domains.',
        effects: [],
      },
      {
        name: 'Wild Shape',
        level: 11,
        description:
          'At 11th level, the nature mage can use wild shape once per day, treating her arcanist level as her druid level (minimum druid level 6th for determining what forms are available). She can spend arcane reservoir points to gain additional uses.',
        effects: [],
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 12. Arcanist (Construct Rider)
  // ──────────────────────────────────────────────
  {
    name: 'Construct Rider',
    className: 'Arcanist',
    description:
      'The construct rider builds and bonds with a mechanical steed animated by arcane energy, trading some of her personal magical reserves for the creation and maintenance of a loyal construct mount. She is a rare sight: a spellcaster charging into battle atop a creature of her own creation.',
    replacedFeatures: ['Arcanist Exploits (1st, 7th, 13th, 19th)'],
    modifiedFeatures: ['Arcane Reservoir'],
    newFeatures: [
      {
        name: 'Arcane Mount',
        level: 1,
        description:
          "The construct rider creates and bonds with a Small or Medium construct mount. The mount has hit points equal to half the arcanist's maximum hit points, an AC equal to 10 + the arcanist's level, and can be repaired using the Craft (clockwork) or Spellcraft skill.",
        effects: [],
      },
      {
        name: 'Mount Upgrade',
        level: 4,
        description:
          'At 4th level and every 4 levels thereafter, the construct rider can apply an upgrade to her mount from a list including increased size, flight (60 ft., clumsy), increased natural armor, and weapon integration.',
        effects: [],
      },
      {
        name: 'Arcane Synergy',
        level: 7,
        description:
          "At 7th level, while mounted on her arcane mount, the construct rider can deliver touch spells through the mount's attacks. The mount must make a successful attack to deliver the spell.",
        effects: [],
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 13. Blade Adept
  // ──────────────────────────────────────────────
  {
    name: 'Blade Adept',
    className: 'Arcanist',
    description:
      "The blade adept combines arcane spellcasting with blade-based combat, channeling magical energy into melee strikes much like a magus but retaining the arcanist's flexible spellcasting approach. She sacrifices exploits for martial training and a bonded black blade.",
    replacedFeatures: ['Arcanist Exploits (3rd, 7th, 11th, 15th, 19th)', 'Consume Spells'],
    modifiedFeatures: ['Arcane Reservoir'],
    newFeatures: [
      {
        name: 'Black Blade',
        level: 1,
        description:
          'The blade adept gains a black blade (as the magus archetype), treating her arcanist level as her magus level. The black blade provides arcane pool points that supplement her arcane reservoir for the purpose of powering blade-related abilities.',
        effects: [],
      },
      {
        name: 'Arcane Weapon',
        level: 1,
        description:
          'The blade adept can spend 1 point from her arcane reservoir as a swift action to grant her black blade a +1 enhancement bonus for 1 minute. This bonus increases by +1 for every 4 levels beyond 1st.',
        effects: [],
      },
      {
        name: 'Spellstrike',
        level: 2,
        description:
          'At 2nd level, the blade adept can deliver touch spells through her black blade as a free action when making a melee attack with it, as per the magus spellstrike ability.',
        effects: [],
      },
      {
        name: 'Spell Combat (Blade)',
        level: 4,
        description:
          'At 4th level, the blade adept can use a full-round action to both cast a spell and make a full attack with her black blade, taking a -2 penalty on attack rolls as per the magus spell combat ability.',
        effects: [],
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 14. Adapted Arcanist (White Mage)
  // ──────────────────────────────────────────────
  {
    name: 'White Mage',
    className: 'Arcanist',
    description:
      'The white mage channels arcane magic through a lens of healing and protection, adding divine restorative magic to her arsenal. She is a rare blend of dedicated healer and arcane scholar, though she sacrifices offensive exploit options to maintain this dual focus.',
    replacedFeatures: ['Arcanist Exploits (3rd, 7th, 11th, 15th, 19th)'],
    modifiedFeatures: ['Spells Known', 'Arcane Reservoir'],
    newFeatures: [
      {
        name: 'Restorative Spells',
        level: 1,
        description:
          "The white mage adds all cure and restoration spells from the cleric list to her arcanist spell list. These are treated as arcane spells but use the cleric's spell level for determining their level on her spell list.",
        effects: [],
      },
      {
        name: 'Arcane Healing',
        level: 1,
        description:
          'The white mage can spend 1 point from her arcane reservoir to cast a cure spell without expending a spell slot, though she must have the spell prepared. The maximum spell level she can cast this way is equal to half her arcanist level.',
        effects: [],
      },
      {
        name: 'Protective Reservoir',
        level: 5,
        description:
          'At 5th level, the white mage can spend arcane reservoir points to grant allies within 30 feet temporary hit points equal to twice the points spent, lasting for 1 minute.',
        effects: [],
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },
];
