import { ArchetypeData } from '../types';

export const NINJA_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Deadly Courier
  // ──────────────────────────────────────────────
  {
    name: 'Deadly Courier',
    className: 'Ninja',
    description:
      'The deadly courier is a ninja who specializes in the delivery and interception of sensitive information, trained to pass through hostile territory undetected and to eliminate those who would interfere with the message. Speed and infiltration define her role rather than prolonged combat.',
    replacedFeatures: ['Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: ['Ki Pool', 'No Trace'],
    newFeatures: [
      {
        name: 'Swift Passage',
        level: 2,
        description:
          'At 2nd level, a deadly courier adds half her ninja level as a bonus on Disguise and Linguistics checks. She can also move at full speed without penalty on Stealth checks, and can attempt Stealth checks while running at a –10 penalty instead of the normal impossibility.',
      },
      {
        name: 'Evasive Delivery',
        level: 4,
        description:
          'At 4th level, the deadly courier gains a bonus on Escape Artist checks equal to half her ninja level and can spend 1 ki point as a swift action to ignore difficult terrain for 1 round and gain a +4 dodge bonus to AC against attacks of opportunity.',
      },
      {
        name: 'Vanishing Messenger',
        level: 10,
        description:
          'At 10th level, once per day the deadly courier can use greater invisibility as a spell-like ability, remaining invisible even while attacking. At 14th level, she can use this ability twice per day.',
      },
    ],
    source: 'Pathfinder Player Companion: Heroes of the Streets',
  },

  // ──────────────────────────────────────────────
  // 2. Makiko's Devotee
  // ──────────────────────────────────────────────
  {
    name: "Makiko's Devotee",
    className: 'Ninja',
    description:
      "Makiko's devotees are ninja trained in the traditions of the Dragon Empires who have sworn fealty to Makiko, a legendary kunoichi. They blend seduction, social manipulation, and lethal skill, serving as diplomats and assassins in equal measure.",
    replacedFeatures: ['Poison Use', 'No Trace'],
    modifiedFeatures: ['Ki Pool', 'Ninja Tricks'],
    newFeatures: [
      {
        name: 'Social Infiltrator',
        level: 1,
        description:
          "A Makiko's devotee adds her ninja level as a bonus on Bluff, Diplomacy, and Disguise checks. She can take 10 on these checks even when stressed or threatened, and treats social situations as though she had 5 additional ranks in the relevant skill.",
      },
      {
        name: 'Hidden in Plain Sight',
        level: 3,
        description:
          "At 3rd level, by spending 1 ki point, the devotee can attempt a Bluff check to appear as an innocent bystander even after being spotted attacking. The DC equals 10 + the observer's Sense Motive modifier; success causes the observer to disbelieve they witnessed violence.",
      },
      {
        name: 'Heart Seeker',
        level: 8,
        description:
          'At 8th level, once per day, the devotee can make a single sneak attack that the target cannot negate with improved uncanny dodge. The devotee must have been in conversation with the target for at least 1 minute before the attack is made.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Dragon Empires Gazetteer',
  },

  // ──────────────────────────────────────────────
  // 3. Ninjitsu Practitioner
  // ──────────────────────────────────────────────
  {
    name: 'Ninjitsu Practitioner',
    className: 'Ninja',
    description:
      'The ninjitsu practitioner is a master of the formalized school of ninja arts, devoting himself to perfecting traditional ninjitsu techniques over individual improvisation. His training makes him a more reliable and methodical combatant, favoring practiced forms over spontaneous tricks.',
    replacedFeatures: ['Light Steps', 'Master Tricks'],
    modifiedFeatures: ['Ninja Tricks', 'Ki Pool'],
    newFeatures: [
      {
        name: 'Kata Mastery',
        level: 2,
        description:
          'At 2nd level, the ninjitsu practitioner gains a +1 insight bonus on attack and damage rolls when attacking flat-footed or flanked enemies. This bonus increases by +1 for every 4 ninja levels beyond 2nd, to a maximum of +5 at 18th level.',
      },
      {
        name: 'Flowing Defense',
        level: 6,
        description:
          'At 6th level, the practitioner can spend 1 ki point as an immediate action when he would be hit by a melee attack to deflect it. He makes an Acrobatics check (DC = the attack roll result); success means the attack misses. He can use this ability once per round.',
      },
      {
        name: 'Perfect Form',
        level: 14,
        description:
          "At 14th level, the ninjitsu practitioner's kata becomes flawless. He can make one additional attack per round at his highest base attack bonus when making a full attack, but only if all previous attacks in that round hit.",
      },
    ],
    source: 'Pathfinder Player Companion: Martial Arts Handbook',
  },

  // ──────────────────────────────────────────────
  // 4. Shadow Sword
  // ──────────────────────────────────────────────
  {
    name: 'Shadow Sword',
    className: 'Ninja',
    description:
      'The shadow sword forsakes the wide toolkit of ninja tricks in favor of an intense focus on bladework and shadow-infused combat. She channels ki into her weapon rather than her body, creating a lethal assassin who fights from concealment with preternatural precision.',
    replacedFeatures: ['Poison Use', 'Light Steps', 'Hidden Master'],
    modifiedFeatures: ['Sneak Attack', 'Ki Pool'],
    newFeatures: [
      {
        name: 'Shadow Blade',
        level: 1,
        description:
          'A shadow sword can spend 1 ki point as a swift action to infuse her weapon with shadow energy for 1 minute. The weapon gains the ghost touch property and deals an additional 1d6 points of cold damage. At 10th level, this increases to 2d6 cold damage.',
      },
      {
        name: 'Umbral Step',
        level: 3,
        description:
          'At 3rd level, the shadow sword can teleport up to 30 feet to an adjacent square of dim light or darkness as a move action by spending 1 ki point. She must be able to see her destination and it must be within range of her darkvision or low-light vision.',
      },
      {
        name: 'Shadow Meld',
        level: 10,
        description:
          'At 10th level, the shadow sword can spend 2 ki points to merge with a shadow as a full-round action, becoming incorporeal and invisible until the start of her next turn or until she attacks. She can move through walls and objects while merged.',
      },
    ],
    source: 'Pathfinder Player Companion: Melee Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 5. Shinobi
  // ──────────────────────────────────────────────
  {
    name: 'Shinobi',
    className: 'Ninja',
    description:
      'The shinobi is the quintessential ninja operative, trained in the full breadth of classical espionage arts. He emphasizes information gathering, counterintelligence, and long-term infiltration missions, accepting a reduced combat role in exchange for extraordinary investigative and deceptive capabilities.',
    replacedFeatures: ['Uncanny Dodge', 'Improved Uncanny Dodge', 'Light Steps'],
    modifiedFeatures: ['No Trace', 'Ki Pool'],
    newFeatures: [
      {
        name: 'Intelligence Network',
        level: 1,
        description:
          'At 1st level, a shinobi can use Knowledge (local) untrained and adds half his ninja level as a bonus on all Knowledge checks used to gather information. He can gather information in half the normal time and does so without revealing his presence.',
      },
      {
        name: 'Perfect Mimicry',
        level: 3,
        description:
          "At 3rd level, the shinobi can perfectly imitate the voice and speech patterns of any individual he has observed speaking for at least 10 minutes. Listeners must succeed at a Sense Motive check opposed by the shinobi's Bluff to detect the imitation.",
      },
      {
        name: 'Opsec Mastery',
        level: 9,
        description:
          'At 9th level, the shinobi cannot be magically compelled to reveal information about his allies or mission. He is immune to divination spells targeting him for the purpose of revealing mission-critical information, as determined by the GM.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Dragon Empires Primer',
  },

  // ──────────────────────────────────────────────
  // 6. Spirit Walker
  // ──────────────────────────────────────────────
  {
    name: 'Spirit Walker',
    className: 'Ninja',
    description:
      'The spirit walker is a ninja who has learned to commune with the spirit world, trading some of her physical prowess for the ability to interact with and leverage the power of kami and other spirits. She is a bridge between the mortal and spirit realms, using ghostly allies to achieve her objectives.',
    replacedFeatures: ['Poison Use', 'Plague Bringer', 'Cruelty'],
    modifiedFeatures: ['Ki Pool', 'Ninja Tricks'],
    newFeatures: [
      {
        name: 'Spirit Sight',
        level: 1,
        description:
          'A spirit walker can see invisible and ethereal creatures as though they were visible, and can detect the presence of spirits within 60 feet as a free action. She gains a +4 insight bonus on Perception checks against spirits, undead, and creatures from the Spirit Plane.',
      },
      {
        name: 'Spirit Companion',
        level: 3,
        description:
          "At 3rd level, the spirit walker is accompanied by a minor kami spirit that provides a +2 insight bonus on one skill of the spirit walker's choice. The kami can Scout ahead, moving up to 120 feet per round and reporting back as a free action on its next turn.",
      },
      {
        name: 'Ghostwalk',
        level: 8,
        description:
          'At 8th level, by spending 2 ki points, the spirit walker becomes incorporeal for a number of rounds equal to her ninja level. While incorporeal she can move through solid objects (ending her movement in open space), is immune to nonmagical damage, and gains the incorporeal subtype.',
      },
    ],
    source: 'Pathfinder Player Companion: Occult Origins',
  },

  // ──────────────────────────────────────────────
  // 7. Chirurgeon Ninja
  // ──────────────────────────────────────────────
  {
    name: 'Chirurgeon Ninja',
    className: 'Ninja',
    description:
      'The chirurgeon ninja combines the precise anatomical knowledge of a healer with the lethal skill of an assassin. He knows exactly where to strike to cause maximum damage or, when necessary, to save a life—making him as valuable alive as he is deadly.',
    replacedFeatures: ['Poison Use', 'Light Steps'],
    modifiedFeatures: ['Sneak Attack', 'Ninja Tricks'],
    newFeatures: [
      {
        name: 'Anatomical Strike',
        level: 1,
        description:
          'When the chirurgeon ninja deals sneak attack damage, he can choose to deal the damage as nonlethal damage without the normal –4 attack penalty. Additionally, he can use sneak attack dice to impose a condition (blinded, deafened, or staggered) for 1 round instead of dealing damage.',
      },
      {
        name: 'Field Medicine',
        level: 3,
        description:
          'At 3rd level, by spending 1 ki point, the chirurgeon ninja can stabilize a dying creature as a swift action and grants it 1 hit point. At 6th level, he can instead spend 1 ki point to heal 1d8 + ninja level hit points with a touch as a standard action.',
      },
      {
        name: 'Nerve Strike',
        level: 10,
        description:
          'At 10th level, once per day the chirurgeon ninja can make a single attack that, on a hit and failed Fortitude save (DC 10 + half ninja level + Dexterity modifier), paralyzes the target for 1d4 rounds rather than dealing standard sneak attack damage.',
      },
    ],
    source: 'Pathfinder Player Companion: Dirty Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 8. Toxic Avenger
  // ──────────────────────────────────────────────
  {
    name: 'Toxic Avenger',
    className: 'Ninja',
    description:
      'The toxic avenger is a ninja who has elevated poison to an art form, developing resistance to toxins and the ability to synthesize compounds far more powerful than any she could purchase. She sacrifices some of her ki-powered tricks for unparalleled mastery over alchemical venoms.',
    replacedFeatures: ['Ki Pool', 'Light Steps', 'Hidden Master'],
    modifiedFeatures: ['Poison Use', 'Sneak Attack'],
    newFeatures: [
      {
        name: 'Poison Immunity',
        level: 1,
        description:
          'A toxic avenger is immune to all poisons she personally crafts. She gains a +4 bonus on saves against all other poisons and adds her ninja level to Craft (alchemy) checks made to create poisons.',
      },
      {
        name: 'Virulent Venom',
        level: 4,
        description:
          'At 4th level, the toxic avenger can craft poisons with a save DC 2 higher than normal and poisons she applies impose the poisoned condition (–2 on attack rolls and saving throws) even on a successful save against the primary damage.',
      },
      {
        name: 'Persistent Toxin',
        level: 10,
        description:
          'At 10th level, poisons crafted or applied by the toxic avenger increase their frequency by two stages (e.g., 6 rounds becomes 6 minutes). Additionally, her sneak attack damage automatically triggers the onset of any poison she has applied to her weapon.',
      },
    ],
    source: 'Pathfinder Player Companion: Villain Codex',
  },
];
