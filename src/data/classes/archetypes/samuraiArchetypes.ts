import { ArchetypeData } from '../types';

export const SAMURAI_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Ashigaru
  // ──────────────────────────────────────────────
  {
    name: 'Ashigaru',
    className: 'Samurai',
    description:
      "The ashigaru is a foot soldier rather than a mounted warrior, a common-born fighter who has risen through discipline and skill rather than noble birth. He sacrifices the samurai's mounted traditions for enhanced infantry capabilities and the ability to inspire commoner allies.",
    replacedFeatures: ['Mount', 'Mounted Archer', 'Expert Trainer'],
    modifiedFeatures: ['Challenge', 'Banner'],
    newFeatures: [
      {
        name: 'Infantry Training',
        level: 1,
        description:
          'An ashigaru treats spears, naginatas, and yaris as simple weapons and gains a +1 bonus on attack rolls with these weapons. At 5th level and every 5 levels thereafter, this bonus increases by +1 to a maximum of +4 at 20th level.',
      },
      {
        name: 'Rally the Peasants',
        level: 4,
        description:
          'At 4th level, once per day, the ashigaru can use his challenge to inspire all non-samurai, non-cavalier allies within 30 feet rather than a single target, granting them a +1 morale bonus on attack rolls for the duration. At 10th level, this becomes a +2 bonus.',
      },
      {
        name: 'Siege Expertise',
        level: 8,
        description:
          'At 8th level, the ashigaru treats siege weapons as martial weapons and gains a +2 competence bonus on attack rolls with them. He can direct a siege crew as a move action rather than a full-round action.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 2. Broken Promise
  // ──────────────────────────────────────────────
  {
    name: 'Broken Promise',
    className: 'Samurai',
    description:
      'A samurai who has forsaken his order and violated his code becomes a broken promise—a disgraced warrior whose rage and self-loathing fuel a dark and reckless fighting style. He fights with savage intensity, abandoning the disciplined resolve of the true samurai for raw fury.',
    replacedFeatures: ['Order', 'Resolve', 'Greater Resolve', 'True Resolve'],
    modifiedFeatures: ['Challenge', 'Honor'],
    newFeatures: [
      {
        name: 'Disgraced Fury',
        level: 1,
        description:
          "A broken promise enters a state of disgraced fury as a free action, functioning as the barbarian's rage ability with a number of rounds per day equal to 4 + his Charisma modifier, increasing by 2 each level. Unlike barbarian rage, he need not be in combat to end the fury.",
      },
      {
        name: 'Reckless Challenge',
        level: 1,
        description:
          'When a broken promise uses challenge, he gains a +2 morale bonus on damage rolls against the challenged target but takes a –2 penalty to AC against all opponents (not just the challenged target) for the duration.',
      },
      {
        name: 'Shameful Resilience',
        level: 8,
        description:
          "At 8th level, the broken promise's shame has hardened him against pain. While in disgraced fury, he gains DR 2/— that increases by 1 for every 4 samurai levels beyond 8th. He also becomes immune to the shaken and frightened conditions while in fury.",
      },
    ],
    source: 'Pathfinder Player Companion: Code of the Stalwart Defender',
  },

  // ──────────────────────────────────────────────
  // 3. Honored Fist of the Society
  // ──────────────────────────────────────────────
  {
    name: 'Honored Fist of the Society',
    className: 'Samurai',
    description:
      "The honored fist of the Society is a Pathfinder Society-aligned samurai who has sworn his blade and honor to the exploration and protection of historical sites. He receives additional resolve and tactical knowledge drawn from the Society's vast archives of battlefield lore.",
    replacedFeatures: ['Bonus Feat'],
    modifiedFeatures: ['Resolve', 'Order'],
    newFeatures: [
      {
        name: 'Society Training',
        level: 1,
        description:
          'An honored fist of the Society gains one additional use of resolve per day and adds half his samurai level as a bonus on Knowledge (history) and Knowledge (local) checks. He can use these Knowledge skills untrained.',
      },
    ],
    source: 'Pathfinder Society Primer',
  },

  // ──────────────────────────────────────────────
  // 4. Oathbound
  // ──────────────────────────────────────────────
  {
    name: 'Oathbound',
    className: 'Samurai',
    description:
      'The oathbound has sworn a sacred oath that goes beyond the normal samurai code, binding himself to a cause, deity, or individual with supernatural force. The power of this oath manifests as divine-like abilities, but breaking the oath exacts a terrible price.',
    replacedFeatures: ['Challenge', 'Weapon Expertise'],
    modifiedFeatures: ['Resolve', 'Order'],
    newFeatures: [
      {
        name: 'Sacred Oath',
        level: 1,
        description:
          'At 1st level, an oathbound declares a sacred oath to protect a specific individual, location, or ideal. When acting in direct service of that oath, he gains a +2 sacred bonus on attack rolls, saving throws, and skill checks. Violating the oath imposes a –2 penalty on all rolls until atoned.',
      },
      {
        name: 'Oath-Powered Strike',
        level: 5,
        description:
          'At 5th level, once per day when making an attack directly in service of his oath, the oathbound can add his Charisma modifier as a bonus on the damage roll. At 10th level, he can do this a number of times per day equal to his Charisma modifier.',
      },
      {
        name: 'Unbreakable Oath',
        level: 11,
        description:
          'At 11th level, the oathbound becomes immune to charm and compulsion effects that would cause him to act against his oath. He also gains SR equal to 11 + his samurai level against spells that would supernaturally prevent him from fulfilling his oath.',
      },
    ],
    source: 'Pathfinder Player Companion: Code of the Stalwart Defender',
  },

  // ──────────────────────────────────────────────
  // 5. Sword Saint
  // ──────────────────────────────────────────────
  {
    name: 'Sword Saint',
    className: 'Samurai',
    description:
      'The sword saint has devoted his entire existence to the perfection of a single sword style, forsaking all other weapons and many social aspects of the samurai code. His singular focus grants him a preternatural mastery of his chosen blade that borders on the supernatural.',
    replacedFeatures: ['Mount', 'Mounted Archer', 'Banner', 'Expert Trainer'],
    modifiedFeatures: ['Weapon Expertise', 'Challenge', 'Resolve'],
    newFeatures: [
      {
        name: 'Chosen Weapon',
        level: 1,
        description:
          'A sword saint selects a single one-handed slashing weapon as his chosen weapon at 1st level. He gains Weapon Focus and Weapon Specialization with this weapon as bonus feats. All challenge and order abilities apply only when using the chosen weapon.',
      },
      {
        name: 'Iaijutsu',
        level: 3,
        description:
          'At 3rd level, when the sword saint draws his chosen weapon in the same action as making an attack (from a sheathed position), he deals an additional 1d6 points of damage per 4 samurai levels. He can draw his weapon as a free action as part of any attack.',
      },
      {
        name: 'Perfect Strike',
        level: 9,
        description:
          'At 9th level, once per round when the sword saint confirms a critical hit with his chosen weapon, he can spend 1 point of resolve to double the threat multiplier (e.g., ×2 becomes ×3) for that strike. This ability cannot be used more than once per day per 4 samurai levels.',
      },
      {
        name: 'Blade Transcendence',
        level: 15,
        description:
          "At 15th level, the sword saint's mastery of his chosen weapon becomes supernatural. Attacks with his chosen weapon are treated as though they have the brilliant energy property, and he adds his Charisma modifier as an insight bonus on all attack rolls with the weapon.",
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 6. Warrior of True Grit
  // ──────────────────────────────────────────────
  {
    name: 'Warrior of True Grit',
    className: 'Samurai',
    description:
      'The warrior of true grit has trained alongside gunslingers, incorporating firearms into the honorable samurai tradition. He blends the discipline of the samurai with the grit and precision of the gunslinger, forming an unusual but potent warrior who combines ancient honor with modern firepower.',
    replacedFeatures: ['Mount', 'Mounted Archer', 'Expert Trainer'],
    modifiedFeatures: ['Resolve', 'Weapon Expertise'],
    newFeatures: [
      {
        name: 'Grit',
        level: 1,
        description:
          'A warrior of true grit gains the grit class feature as a gunslinger of his samurai level, with a pool equal to his Wisdom modifier (minimum 1). He gains two gunslinger deeds of his choice from those available at 1st level and can spend grit on those deeds.',
      },
      {
        name: 'Firearm Proficiency',
        level: 1,
        description:
          'The warrior of true grit gains proficiency with all firearms and the Amateur Gunslinger feat as a bonus feat. He can spend points of resolve as grit and vice versa for the purpose of qualifying for and using deeds.',
      },
      {
        name: 'Calm Under Fire',
        level: 5,
        description:
          'At 5th level, the warrior of true grit does not provoke attacks of opportunity when reloading a firearm. Additionally, when adjacent to an enemy, he does not take the normal –4 penalty on ranged attack rolls for firing at point-blank range.',
      },
    ],
    source: "Pathfinder Player Companion: Weapon Master's Handbook",
  },

  // ──────────────────────────────────────────────
  // 7. Ronin
  // ──────────────────────────────────────────────
  {
    name: 'Ronin',
    className: 'Samurai',
    description:
      'The ronin is a masterless samurai, a warrior who has lost or left his lord and now wanders seeking purpose. Without the structure of an order, he relies on personal discipline and raw skill, having learned to fight effectively both alone and alongside any allies fate brings him.',
    replacedFeatures: ['Order', 'Demanding Challenge'],
    modifiedFeatures: ['Resolve', 'Challenge', 'Banner'],
    newFeatures: [
      {
        name: 'Self-Reliance',
        level: 1,
        description:
          'A ronin gains a bonus equal to half his samurai level (minimum 1) on Survival, Sense Motive, and Profession (soldier) checks. He does not need to belong to an order and gains the challenge ability as normal but without order-related bonuses.',
      },
      {
        name: "Wanderer's Resolve",
        level: 4,
        description:
          "At 4th level, the ronin gains an additional use of resolve per day for every 4 samurai levels he possesses. His long experience fending for himself has honed his self-reliance to an extraordinary degree, granting him the equivalent of the Order of the Warrior's challenge benefit.",
      },
      {
        name: 'Masterless Mastery',
        level: 10,
        description:
          "At 10th level, the ronin's independence becomes a source of power. He gains a +2 morale bonus on saving throws against charm, compulsion, and fear effects. He also gains the benefits of the Order of the Warrior's 8th-level order ability.",
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 8. Daimyo
  // ──────────────────────────────────────────────
  {
    name: 'Daimyo',
    className: 'Samurai',
    description:
      'The daimyo is a warlord and feudal lord as much as a warrior, commanding troops and managing estates as naturally as he commands a battlefield. He trades some personal combat prowess for exceptional leadership and tactical abilities that make his allies significantly more effective.',
    replacedFeatures: ['Mounted Archer', 'Resolve', 'Greater Resolve'],
    modifiedFeatures: ['Challenge', 'Banner', 'Order'],
    newFeatures: [
      {
        name: 'Command Presence',
        level: 1,
        description:
          'A daimyo adds his Charisma modifier (instead of Strength) on Intimidate checks and gains a bonus equal to his samurai level on Leadership checks. He gains the Leadership feat as a bonus feat at 1st level even if he would not normally qualify.',
      },
      {
        name: 'War Council',
        level: 5,
        description:
          'At 5th level, the daimyo can spend 10 minutes advising allies to grant them a teamwork feat he possesses for 24 hours. He can do this a number of times per day equal to his Charisma modifier. Allies do not need to meet the prerequisites of the granted feat.',
      },
      {
        name: 'Strategic Mastery',
        level: 11,
        description:
          "At 11th level, when using the aid another action, the daimyo provides a +4 bonus instead of +2, and can use aid another as a swift action once per round. His banner's bonuses apply to all allies within 120 feet and the morale bonus increases by +1.",
      },
    ],
    source: 'Pathfinder Campaign Setting: Dragon Empires Gazetteer',
  },

  // ──────────────────────────────────────────────
  // 9. Yojimbo
  // ──────────────────────────────────────────────
  {
    name: 'Yojimbo',
    className: 'Samurai',
    description:
      'The yojimbo is a hired bodyguard, a samurai who has pledged his sword to the protection of a single ward rather than a noble house. His abilities focus entirely on shielding his charge from harm, interposing himself between danger and his employer with selfless devotion.',
    replacedFeatures: ['Mount', 'Mounted Archer', 'Banner'],
    modifiedFeatures: ['Challenge', 'Resolve', 'Order'],
    newFeatures: [
      {
        name: 'Bodyguard',
        level: 1,
        description:
          'A yojimbo selects one creature as his ward per day as a free action. He gains a +2 shield bonus to AC and a +2 bonus on Reflex saves while adjacent to his ward. If his ward would be hit by an attack, the yojimbo can use an immediate action to take the hit instead.',
      },
      {
        name: 'Intervention',
        level: 5,
        description:
          'At 5th level, once per round as an immediate action, the yojimbo can move up to his speed toward his ward when the ward is attacked. If he reaches the ward, he can interpose himself as per the bodyguard feat. He does not provoke attacks of opportunity for this movement.',
      },
      {
        name: 'Unyielding Guardian',
        level: 11,
        description:
          'At 11th level, the yojimbo is immune to fear effects while his ward is within 30 feet and conscious. While adjacent to his ward, the yojimbo gains DR 5/— against the first hit each round from attacks targeting him due to his protective interception.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Dragon Empires Primer',
  },

  // ──────────────────────────────────────────────
  // 10. Lotus Geisha
  // ──────────────────────────────────────────────
  {
    name: 'Lotus Geisha',
    className: 'Samurai',
    description:
      'The lotus geisha is a samurai who has mastered the social arts of the Dragon Empires to complement her martial training. Equally at home in a throne room or on the battlefield, she uses beauty, wit, and tradition to disarm opponents before she draws steel.',
    replacedFeatures: ['Mounted Archer', 'Expert Trainer', 'Demanding Challenge'],
    modifiedFeatures: ['Challenge', 'Order', 'Banner'],
    newFeatures: [
      {
        name: 'Court Mastery',
        level: 1,
        description:
          'A lotus geisha adds her samurai level as a bonus on Perform (act), Perform (dance), Perform (oratory), and Diplomacy checks. She can use her samurai level in place of ranks in these skills for the purpose of meeting feat prerequisites.',
      },
      {
        name: 'Social Challenge',
        level: 1,
        description:
          'When the lotus geisha uses challenge, she may instead issue a social challenge. The target is compelled to engage her socially and takes a –2 penalty on attack rolls against any creature other than her. The social challenge lasts until combat begins or 1 minute passes.',
      },
      {
        name: 'Deadly Refinement',
        level: 8,
        description:
          'At 8th level, after successfully engaging a target in conversation for at least 1 minute, the lotus geisha treats that target as flat-footed against her first attack in combat. Additionally, her challenge damage bonus applies to Iaijutsu draws against challenged targets.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Dragon Empires Gazetteer',
  },
];
