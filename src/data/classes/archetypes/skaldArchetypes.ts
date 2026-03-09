import { ArchetypeData, ClassFeatureData } from '../types';

export const SKALD_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Fated Champion
  // ──────────────────────────────────────────────
  {
    name: 'Fated Champion',
    className: 'Skald',
    description:
      'A fated champion draws upon prophetic visions of victory to bolster herself and her allies. She replaces her bardic-flavored abilities with powers rooted in destiny and foreknowledge, making her allies harder to kill when fate is on their side.',
    replacedFeatures: ['Spell Kenning', 'Lore Master', 'Scribe Scroll'],
    modifiedFeatures: ['Inspired Rage'],
    newFeatures: [
      {
        name: 'Fated',
        level: 1,
        description:
          'A fated champion adds her Charisma modifier as a luck bonus to saving throws against death effects and effects that would reduce her to 0 or fewer hit points. This bonus applies continuously while in inspired rage.',
      },
      {
        name: 'Inspired Fate',
        level: 3,
        description:
          "At 3rd level, allies sharing the fated champion's inspired rage gain a +1 luck bonus on saving throws. This bonus increases by +1 for every 6 levels beyond 3rd (maximum +3 at 15th level).",
      },
      {
        name: "Champion's Destiny",
        level: 8,
        description:
          'At 8th level, once per day the fated champion can reroll any single d20 roll made by herself or an ally within 30 feet who is sharing her inspired rage. The decision to reroll must be made before the result is revealed.',
      },
      {
        name: 'Inexorable Fate',
        level: 16,
        description:
          "At 16th level, when an ally sharing the fated champion's inspired rage would be reduced to 0 hit points or fewer, they can immediately make a free saving throw (DC 20). On a success, they are reduced to 1 hit point instead. This ability can be used once per day per affected ally.",
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 2. Herald of the Horn
  // ──────────────────────────────────────────────
  {
    name: 'Herald of the Horn',
    className: 'Skald',
    description:
      'A herald of the horn uses mighty war-horns to inspire allies and terrorize enemies. Rather than performing poetry or song, she blasts commanding tones across the battlefield that empower her companions with surging vigor.',
    replacedFeatures: ['Scribe Scroll', 'Song of Marching', 'Dirge of Doom'],
    modifiedFeatures: ['Raging Song', 'Inspired Rage'],
    newFeatures: [
      {
        name: 'Horn of the Herald',
        level: 1,
        description:
          'A herald of the horn begins play with a masterwork horn. She uses this horn to activate her raging song, which requires a free hand to hold and play the horn. Her raging song has a range of 300 feet instead of 30 feet.',
      },
      {
        name: 'Rallying Blast',
        level: 3,
        description:
          'At 3rd level, as a standard action the herald of the horn can blast her horn to grant all allies within 300 feet a +2 morale bonus on saving throws versus fear for 1 minute. She can use this ability a number of times per day equal to her Charisma modifier.',
      },
      {
        name: 'Sounding Charge',
        level: 6,
        description:
          "At 6th level, allies sharing the herald's inspired rage gain a +2 morale bonus on attack and damage rolls during a charge. This bonus increases to +4 at 12th level.",
      },
      {
        name: 'Horn of Doom',
        level: 10,
        description:
          "At 10th level, the herald of the horn can use her horn as a substitute for Dirge of Doom. Enemies within 300 feet who can hear the blast must succeed at a Will save (DC 10 + half the skald's level + Charisma modifier) or become shaken for 1 round.",
      },
    ],
    source: 'Pathfinder RPG: Inner Sea Combat',
  },

  // ──────────────────────────────────────────────
  // 3. Totemic Skald
  // ──────────────────────────────────────────────
  {
    name: 'Totemic Skald',
    className: 'Skald',
    description:
      'A totemic skald channels the primal spirits of nature, weaving their essence into battle-chants that transform allies into half-beast warriors. Her songs evoke the power of specific animal totems to grant bestial enhancements to those who hear her voice.',
    replacedFeatures: ['Rage Powers', 'Scribe Scroll', 'Lore Master'],
    modifiedFeatures: ['Inspired Rage'],
    newFeatures: [
      {
        name: 'Totem Spirit',
        level: 1,
        description:
          'A totemic skald chooses an animal totem (bear, eagle, lion, serpent, or wolf) at 1st level. Her inspired rage grants allies additional benefits based on the chosen totem, such as a bite attack for the wolf totem or improved initiative for the eagle totem.',
      },
      {
        name: 'Totemic Rage Powers',
        level: 2,
        description:
          'At 2nd level and every 2 levels thereafter, the totemic skald selects totem rage powers available to barbarians associated with her chosen totem. These powers apply to allies sharing her inspired rage.',
      },
      {
        name: 'Spirit Avatar',
        level: 10,
        description:
          "At 10th level, allies under the totemic skald's inspired rage gain a physical trait of the chosen totem (low-light vision for eagle, scent for wolf, etc.) in addition to normal inspired rage benefits.",
      },
      {
        name: 'Totem Transformation',
        level: 16,
        description:
          'At 16th level, once per day the totemic skald can grant one ally sharing her inspired rage a more powerful totem transformation, granting them the effects of beast shape I based on their totem animal. This lasts until the inspired rage ends.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 4. Urban Skald
  // ──────────────────────────────────────────────
  {
    name: 'Urban Skald',
    className: 'Skald',
    description:
      'Not every skald is a wildland warrior; the urban skald thrives in cities, taverns, and criminal courts, inspiring her allies with controlled, tempered rage rather than animal fury. She trades raw berserker power for more refined and precise battle-song techniques.',
    replacedFeatures: ['Inspired Rage (standard)', 'Song of Marching', 'Rage Powers (some)'],
    modifiedFeatures: ['Inspired Rage', 'Raging Song'],
    newFeatures: [
      {
        name: 'Controlled Inspired Rage',
        level: 1,
        description:
          "The urban skald's inspired rage grants allies a +2 morale bonus to Strength or Dexterity (ally's choice each round), a +2 morale bonus on Will saves, and immunity to the confused and frightened conditions. Allies do not take the penalty to AC that normal inspired rage imposes.",
      },
      {
        name: 'Inspired Finesse',
        level: 2,
        description:
          "At 2nd level, allies sharing the urban skald's controlled inspired rage may use Dexterity instead of Strength on attack rolls with light weapons and rapiers as if they had Weapon Finesse.",
      },
      {
        name: 'Song of Discord',
        level: 6,
        description:
          'At 6th level, the urban skald can use Song of Discord as a bard of her skald level. This replaces Song of Marching.',
      },
      {
        name: 'Urban Fury',
        level: 10,
        description:
          "At 10th level, allies sharing the urban skald's controlled inspired rage gain a +2 bonus on Acrobatics, Bluff, and Stealth checks, helping them fight effectively in the tight quarters of city streets.",
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 5. War Painter
  // ──────────────────────────────────────────────
  {
    name: 'War Painter',
    className: 'Skald',
    description:
      'A war painter marks her allies with sacred battle-symbols painted before combat, empowering them with lasting runic blessings. Rather than singing in battle, she conducts pre-fight rituals that grant durable bonuses without requiring her ongoing performance.',
    replacedFeatures: ['Raging Song (performance-based)', 'Scribe Scroll', 'Lore Master'],
    modifiedFeatures: ['Inspired Rage'],
    newFeatures: [
      {
        name: 'War Paint',
        level: 1,
        description:
          'A war painter can spend 10 minutes applying war paint to herself or an ally during a short rest. Painted creatures gain a +1 morale bonus on attack and damage rolls for 24 hours. The number of creatures she can paint equals her Charisma modifier (minimum 1).',
      },
      {
        name: 'Rune of Protection',
        level: 3,
        description:
          'At 3rd level, war paint can include protective runes granting a +1 sacred bonus on saving throws. The war painter can apply either the morale or sacred benefit (or both at 8th level) to each painted creature.',
      },
      {
        name: 'Empowered Symbols',
        level: 7,
        description:
          "At 7th level, the war painter's morale and sacred bonuses from war paint each increase by +1. She can also paint symbols that grant the painted creature DR 1/— for the duration.",
      },
      {
        name: 'Master War Painter',
        level: 13,
        description:
          'At 13th level, the war painter can apply war paint to a number of creatures equal to twice her Charisma modifier, and the duration of war paint increases to 48 hours. Bonuses from war paint increase to +3 morale and +2 sacred.',
      },
    ],
    source: "Pathfinder RPG: Adventurer's Guide",
  },

  // ──────────────────────────────────────────────
  // 6. Wyrm Singer
  // ──────────────────────────────────────────────
  {
    name: 'Wyrm Singer',
    className: 'Skald',
    description:
      'A wyrm singer has learned the draconic battle-hymns of old, channeling the power and fury of dragons through her songs. Her inspired rage carries a draconic essence, granting allies elemental resistances and the ability to breathe devastating energy.',
    replacedFeatures: ['Rage Powers (selected)', 'Scribe Scroll', 'Lore Master'],
    modifiedFeatures: ['Inspired Rage', 'Raging Song'],
    newFeatures: [
      {
        name: 'Draconic Lineage',
        level: 1,
        description:
          'A wyrm singer chooses a dragon type (acid, cold, electricity, or fire) at 1st level. This choice determines the energy type of her draconic abilities. She gains a +2 bonus on Knowledge (arcana) checks related to dragons.',
      },
      {
        name: 'Draconic Inspired Rage',
        level: 1,
        description:
          "Allies sharing the wyrm singer's inspired rage gain energy resistance 5 against the wyrm singer's chosen energy type. This resistance increases to 10 at 8th level and 20 at 16th level.",
      },
      {
        name: 'Breath Song',
        level: 6,
        description:
          'At 6th level, once per performance, the wyrm singer can end her raging song in a draconic shout, granting all allies sharing her inspired rage a one-time breath weapon (30-ft. cone or 60-ft. line, 4d6 energy damage, Reflex DC 10 + half skald level + Cha modifier for half).',
      },
      {
        name: "Wyrm's Majesty",
        level: 12,
        description:
          'At 12th level, the wyrm singer gains the frightful presence ability of a dragon (range 30 ft., Will DC 10 + half skald level + Cha modifier) while her inspired rage is active. Allies sharing her inspired rage are immune to this effect.',
      },
      {
        name: 'True Dragon Hymn',
        level: 20,
        description:
          "At 20th level, the wyrm singer's inspired rage grants all sharing allies immunity to the chosen energy type and a +4 morale bonus on saving throws versus dragon spells and breath weapons.",
      },
    ],
    source: 'Pathfinder RPG: Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 7. Spell Warrior (Spell Warrior Skald)
  // ──────────────────────────────────────────────
  {
    name: 'Spell Warrior',
    className: 'Skald',
    description:
      'A spell warrior focuses her magical knowledge inward, sacrificing broad arcane knowledge for the ability to channel specific powerful spells directly into her inspired rage. She is a spellcasting warrior who blends weapon mastery with targeted magical power.',
    replacedFeatures: ['Spell Kenning', 'Lore Master', 'Scribe Scroll'],
    modifiedFeatures: ['Spellcasting'],
    newFeatures: [
      {
        name: 'Combat Casting',
        level: 1,
        description:
          'A spell warrior gains Combat Casting as a bonus feat at 1st level. She does not need to meet the prerequisites for this feat.',
      },
      {
        name: 'Arcane Strike',
        level: 2,
        description:
          'At 2nd level, the spell warrior gains Arcane Strike as a bonus feat. While in inspired rage, she automatically activates Arcane Strike as a free action when she makes a melee attack.',
      },
      {
        name: 'Spellbattle Rage',
        level: 5,
        description:
          'At 5th level, the spell warrior can cast one skald spell with a casting time of 1 standard action or less while using a full-attack action, as if she had the Quicken Spell feat, once per rage.',
      },
      {
        name: 'Battle Spell Mastery',
        level: 11,
        description:
          'At 11th level, the spell warrior selects three skald spells of 4th level or lower. She can cast these spells without expending spell slots a total number of times per day equal to her Charisma modifier.',
      },
    ],
    source: 'Pathfinder RPG: Inner Sea Magic',
  },

  // ──────────────────────────────────────────────
  // 8. Demon Dancer
  // ──────────────────────────────────────────────
  {
    name: 'Demon Dancer',
    className: 'Skald',
    description:
      'A demon dancer performs ecstatic war-dances infused with demonic energy, whipping allies into a frenzied state that borders on possession. Her inspired rage takes on a supernatural, chaotic character that makes those affected unpredictable and terrifying.',
    replacedFeatures: ['Lore Master', 'Scribe Scroll', 'Spell Kenning'],
    modifiedFeatures: ['Inspired Rage', 'Raging Song'],
    newFeatures: [
      {
        name: 'Demonic Frenzy',
        level: 1,
        description:
          'When a demon dancer starts her inspired rage, affected allies also gain the ability to make one additional natural attack (claw or bite) as a secondary attack each round. This attack is made at a –5 penalty.',
      },
      {
        name: 'Chaotic Surge',
        level: 4,
        description:
          "At 4th level, allies sharing the demon dancer's inspired rage gain a +2 bonus to confirm critical hits. On a critical threat, they may also attempt to demoralize the struck creature as a free action.",
      },
      {
        name: 'Possession Dance',
        level: 8,
        description:
          'At 8th level, once per day the demon dancer can perform a special 1-minute ritual dance that grants all allies within 30 feet the effects of haste for a number of rounds equal to her Charisma modifier.',
      },
      {
        name: 'Abyssal Aspect',
        level: 14,
        description:
          "At 14th level, allies sharing the demon dancer's inspired rage gain electricity resistance 10, a +2 profane bonus to Strength, and are treated as having the Intimidating Prowess feat for the duration.",
      },
    ],
    source: "Pathfinder RPG: Demon Hunter's Handbook",
  },

  // ──────────────────────────────────────────────
  // 9. Battle Scion
  // ──────────────────────────────────────────────
  {
    name: 'Battle Scion',
    className: 'Skald',
    description:
      'A battle scion is a skald who has dedicated herself to a specific martial tradition, learning legendary tactics passed down through generations of warriors. She trades some of her versatile spellcasting for deep mastery of one particular fighting style.',
    replacedFeatures: ['Spell Kenning', 'Scribe Scroll', 'Lore Master (2 uses)'],
    modifiedFeatures: ['Inspired Rage'],
    newFeatures: [
      {
        name: 'Martial Tradition',
        level: 1,
        description:
          "A battle scion selects a combat style (Archery, Two-Weapon Fighting, or a fighter weapon group) at 1st level. She gains the first feat in that style's chain as a bonus feat, ignoring prerequisites.",
      },
      {
        name: "Tradition's Inspiration",
        level: 3,
        description:
          "At 3rd level, allies sharing the battle scion's inspired rage who use the chosen fighting style's primary weapons gain an additional +1 morale bonus on attack and damage rolls.",
      },
      {
        name: 'Advanced Tradition',
        level: 6,
        description:
          'At 6th level, the battle scion gains the second feat in her martial tradition chain as a bonus feat. At 10th level, she gains the third feat in the chain.',
      },
      {
        name: 'Legendary Technique',
        level: 14,
        description:
          'At 14th level, once per day the battle scion can grant all allies sharing her inspired rage the benefits of the last feat in her martial tradition chain for a number of rounds equal to her Charisma modifier, even if they do not meet the prerequisites.',
      },
    ],
    source: 'Pathfinder RPG: Advanced Class Guide',
  },
];
