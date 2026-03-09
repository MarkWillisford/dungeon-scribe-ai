import { ArchetypeData, ClassFeatureData } from '../types';

export const ROGUE_ARCHETYPES: ArchetypeData[] = [
  // ──────────────────────────────────────────────
  // 1. Acrobat
  // ──────────────────────────────────────────────
  {
    name: 'Acrobat',
    className: 'Rogue',
    description:
      'The acrobat forgoes the typical rogue tricks in favor of gymnastic prowess, using agility and balance to outmaneuver foes and navigate treacherous terrain.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Expert Acrobat',
        level: 1,
        description:
          'The acrobat does not suffer any armor check penalties on Acrobatics, Climb, Fly, Sleight of Hand, or Stealth skill checks while wearing light armor. When unarmored, she gains a +2 competence bonus on Acrobatics and Fly checks.',
      },
      {
        name: 'Second Chance',
        level: 3,
        description:
          'At 3rd level, once per day the acrobat can reroll an Acrobatics, Climb, or Fly check she has just made. She must take the result of the second roll even if it is worse. She can use this ability one additional time per day for every 3 levels beyond 3rd.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 2. Bandit
  // ──────────────────────────────────────────────
  {
    name: 'Bandit',
    className: 'Rogue',
    description:
      'The bandit specializes in ambushes and intimidation, preying on travelers and caravans with ruthless efficiency.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Ambush',
        level: 1,
        description:
          'At 1st level, a bandit gains a +1/2 bonus on initiative checks and a +1/2 bonus on Intimidate checks. These bonuses increase by +1/2 for every 2 rogue levels thereafter.',
      },
      {
        name: 'Fearsome Strike',
        level: 3,
        description:
          'At 3rd level, when a bandit confirms a critical hit or deals sneak attack damage, she can make a free Intimidate check to demoralize the target. This bonus increases by +1 for every 3 levels beyond 3rd.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 3. Bellflower Tiller
  // ──────────────────────────────────────────────
  {
    name: 'Bellflower Tiller',
    className: 'Rogue',
    description:
      'A Bellflower tiller is a member of the Bellflower Network who specializes in liberating slaves, using guile and stealth to guide the oppressed to freedom.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Crop Follower',
        level: 1,
        description:
          'A Bellflower tiller adds half her level (minimum 1) as a bonus on Bluff, Diplomacy, Knowledge (local), and Sense Motive checks made to interact with or gather information about halflings and slaves.',
      },
      {
        name: "Tiller's Resolve",
        level: 3,
        description:
          'At 3rd level, a Bellflower tiller gains a +1 morale bonus on saving throws against fear effects. This bonus increases by +1 for every 3 levels beyond 3rd.',
      },
    ],
    source: "Adventurer's Guide",
  },

  // ──────────────────────────────────────────────
  // 4. Burglar
  // ──────────────────────────────────────────────
  {
    name: 'Burglar',
    className: 'Rogue',
    description:
      'The burglar specializes in breaking and entering, bypassing locks, traps, and other security measures to steal from the wealthy and well-protected.',
    replacedFeatures: ['Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Careful Disarm',
        level: 4,
        description:
          "At 4th level, a burglar who triggers a trap can attempt a Reflex save (DC equal to the trap's DC) to avoid setting off the trap. She gains a +1 bonus on this save for every 2 rogue levels she possesses beyond 4th.",
      },
      {
        name: 'Distraction',
        level: 8,
        description:
          "At 8th level, a burglar can create a distraction as a swift action. She makes a Bluff check opposed by nearby creatures' Sense Motive checks. Creatures that fail do not notice the burglar's actions for 1 round.",
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 5. Carnivalist
  // ──────────────────────────────────────────────
  {
    name: 'Carnivalist',
    className: 'Rogue',
    description:
      'The carnivalist is a rogue who has trained a small animal to serve as an accomplice in her acts of theft and deception, performing tricks to distract and amuse.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: ['Rogue Talents'],
    newFeatures: [
      {
        name: 'Animal Companion',
        level: 1,
        description:
          "A carnivalist gains a familiar as a wizard of her rogue level. The familiar can also perform the aid another action in combat, using the carnivalist's BAB.",
      },
      {
        name: 'Trained Tricks',
        level: 3,
        description:
          "At 3rd level, a carnivalist's familiar gains the ability to perform sneak attack using the carnivalist's sneak attack dice (to a maximum of half). The familiar must be adjacent to the target.",
      },
    ],
    source: 'Animal Archive',
  },

  // ──────────────────────────────────────────────
  // 6. Chameleon
  // ──────────────────────────────────────────────
  {
    name: 'Chameleon',
    className: 'Rogue',
    description:
      'The chameleon is a master of blending in, able to adopt the mannerisms, speech, and appearance of those around her to infiltrate any social group.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Mingle',
        level: 1,
        description:
          'A chameleon can blend into a social group by adopting the mannerisms and dress of those around her. She gains a +4 circumstance bonus on Disguise checks to appear as a member of any social, ethnic, or regional group she has observed for at least 1 minute.',
      },
      {
        name: 'Effortless Sneak',
        level: 3,
        description:
          'At 3rd level, the chameleon can move at full speed using Stealth without penalty. At 6th level, she gains a +2 bonus on Stealth checks in crowds or urban environments, increasing by +2 every 3 levels thereafter.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 7. Charlatan
  // ──────────────────────────────────────────────
  {
    name: 'Charlatan',
    className: 'Rogue',
    description:
      'The charlatan is a master of deception, using elaborate cons, fast talk, and misdirection to swindle marks out of their valuables.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Natural Born Liar',
        level: 1,
        description:
          'A charlatan adds half her level (minimum +1) on Bluff checks. In addition, the charlatan qualifies for the Skill Focus (Bluff) feat at 1st level regardless of her ranks in Bluff.',
      },
      {
        name: 'Grand Hoax',
        level: 3,
        description:
          'At 3rd level, once per day the charlatan can use Bluff to convince a target of something the target would otherwise find unbelievable, gaining a +2 bonus on the check. This bonus increases by +1 for every 3 levels beyond 3rd.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 8. Consigliere
  // ──────────────────────────────────────────────
  {
    name: 'Consigliere',
    className: 'Rogue',
    description:
      "The consigliere serves as a trusted advisor and right hand to a powerful leader, using social acumen and subtle manipulation to protect their patron's interests.",
    replacedFeatures: ['Trapfinding', 'Evasion', 'Trap Sense', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Advisor',
        level: 1,
        description:
          'A consigliere gains a +1 bonus on Diplomacy, Intimidate, Knowledge (local), and Sense Motive checks. This bonus increases by +1 at 5th level and every 4 levels thereafter.',
      },
      {
        name: 'Protective Counsel',
        level: 2,
        description:
          'At 2nd level, the consigliere can use the aid another action to grant an ally within 30 feet a +2 bonus on a saving throw against a mind-affecting effect as an immediate action.',
      },
      {
        name: 'Strategic Advice',
        level: 3,
        description:
          'At 3rd level, once per day the consigliere can spend 1 minute counseling an ally. That ally gains a +2 insight bonus on one skill check or attack roll made within the next hour. This bonus increases by +1 for every 3 levels beyond 3rd.',
      },
      {
        name: 'Inner Circle',
        level: 8,
        description:
          "At 8th level, the consigliere's allies within 30 feet gain a +2 morale bonus on saving throws against charm and compulsion effects. This bonus increases to +4 at 14th level.",
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 9. Counterfeit Mage
  // ──────────────────────────────────────────────
  {
    name: 'Counterfeit Mage',
    className: 'Rogue',
    description:
      'The counterfeit mage uses minor magic and deception to appear as a true spellcaster, employing wands, scrolls, and tricks to mimic arcane ability.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: ['Rogue Talents'],
    newFeatures: [
      {
        name: 'Magical Expertise',
        level: 1,
        description:
          'A counterfeit mage adds half her level to Use Magic Device checks (minimum +1). She also adds Spellcraft to her list of class skills.',
      },
      {
        name: 'Fake Casting',
        level: 3,
        description:
          'At 3rd level, the counterfeit mage gains the ability to use minor magic (prestidigitation, mage hand, ghost sound) as spell-like abilities a number of times per day equal to her Intelligence modifier.',
      },
    ],
    source: 'Inner Sea Intrigue',
  },

  // ──────────────────────────────────────────────
  // 10. Cutpurse
  // ──────────────────────────────────────────────
  {
    name: 'Cutpurse',
    className: 'Rogue',
    description:
      'The cutpurse is a master pickpocket who specializes in relieving marks of their valuables without being noticed.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Measure the Mark',
        level: 1,
        description:
          "When the cutpurse makes a Sleight of Hand check to steal something from a target, the target takes a penalty on its Perception check to notice the theft equal to half the cutpurse's class level.",
      },
      {
        name: 'Stab and Grab',
        level: 3,
        description:
          "At 3rd level, when the cutpurse successfully deals sneak attack damage to a target, she can make a Sleight of Hand check as a free action to steal an item from the target. The DC of this check is equal to 10 + the target's CMD.",
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 11. Dark Lurker
  // ──────────────────────────────────────────────
  {
    name: 'Dark Lurker',
    className: 'Rogue',
    description:
      'The dark lurker embraces the shadows and darkness, gaining supernatural abilities related to stealth and vision in lightless environments.',
    replacedFeatures: ['Trapfinding', 'Trap Sense', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Shadow Sight',
        level: 1,
        description:
          'A dark lurker gains darkvision out to 60 feet. If she already possesses darkvision, the range increases by 30 feet.',
      },
      {
        name: 'Shadow Blend',
        level: 3,
        description:
          'At 3rd level, in conditions of dim light a dark lurker can disappear from sight as a move action, effectively becoming invisible until she attacks or moves into an area of bright light.',
      },
      {
        name: 'Shadow Step',
        level: 4,
        description:
          'At 4th level, a dark lurker can move between areas of dim light or darkness as if using dimension door, limited to a total of 30 feet per day. This distance increases by 30 feet every 2 levels thereafter.',
      },
      {
        name: 'Improved Shadow Blend',
        level: 8,
        description:
          'At 8th level, the dark lurker can use shadow blend even in areas of normal light. She gains a +4 bonus on Stealth checks in dim light or darkness.',
      },
    ],
    source: 'Blood of Shadows',
  },

  // ──────────────────────────────────────────────
  // 12. Deadly Courtesan
  // ──────────────────────────────────────────────
  {
    name: 'Deadly Courtesan',
    className: 'Rogue',
    description:
      'The deadly courtesan uses charm, seduction, and social graces as weapons, moving through high society to gather information and eliminate targets.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Graceful Killer',
        level: 1,
        description:
          'A deadly courtesan adds half her level (minimum +1) as a bonus on Bluff, Diplomacy, and Disguise checks. She also gains the ability to use Bluff to feint in combat as a move action.',
      },
      {
        name: 'Insightful Killer',
        level: 3,
        description:
          'At 3rd level, a deadly courtesan can study a target for 3 rounds. After studying, she gains a +1 bonus on attack rolls and a +1d6 bonus on damage rolls against that target. This bonus increases by +1/+1d6 every 3 levels beyond 3rd.',
      },
    ],
    source: "Adventurer's Guide",
  },

  // ──────────────────────────────────────────────
  // 13. Driver
  // ──────────────────────────────────────────────
  {
    name: 'Driver',
    className: 'Rogue',
    description:
      'The driver is an expert at operating vehicles of all types, using her rogue skills to navigate dangerous terrain at breakneck speed.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Hard Drive',
        level: 1,
        description:
          'A driver gains a bonus equal to half her rogue level (minimum +1) on Driving checks with all vehicles. She also gains the ability to take 10 on Driving checks even under stressful conditions.',
      },
      {
        name: 'Terrain Mastery',
        level: 3,
        description:
          'At 3rd level, the driver ignores difficult terrain penalties when driving a vehicle. At 6th level, the vehicle gains a +10 feet bonus to speed when the driver is at the reins.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 14. Eldritch Raider
  // ──────────────────────────────────────────────
  {
    name: 'Eldritch Raider',
    className: 'Rogue',
    description:
      "The eldritch raider combines a rogue's cunning with minor magical talent, focusing on reading and disrupting magical effects.",
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: ['Rogue Talents'],
    newFeatures: [
      {
        name: 'Eldritch Intuition',
        level: 1,
        description:
          'An eldritch raider gains detect magic as a spell-like ability usable at will. She adds half her level (minimum +1) on Spellcraft checks to identify magic items and on Use Magic Device checks.',
      },
      {
        name: 'Spell Sense',
        level: 3,
        description:
          'At 3rd level, the eldritch raider gains a +1 bonus on saving throws against spells and spell-like abilities. This bonus increases by +1 for every 3 levels beyond 3rd.',
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 15. Filcher
  // ──────────────────────────────────────────────
  {
    name: 'Filcher',
    className: 'Rogue',
    description:
      'The filcher is obsessed with acquiring objects, specializing in stealing items during combat and using pilfered goods to her advantage.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Filch',
        level: 1,
        description:
          'A filcher adds half her level (minimum +1) on Sleight of Hand checks. She can use Sleight of Hand to steal an object from a creature as a standard action without provoking an attack of opportunity.',
      },
      {
        name: 'Pilfering Strike',
        level: 3,
        description:
          "At 3rd level, when a filcher successfully deals sneak attack damage, she can make a free Sleight of Hand check to steal a small item from the target (DC = target's CMD). This ability can be used a number of times per day equal to her Charisma modifier.",
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 16. Heister
  // ──────────────────────────────────────────────
  {
    name: 'Heister',
    className: 'Rogue',
    description:
      'The heister excels at planning and executing elaborate thefts, coordinating with allies to bypass security through careful teamwork.',
    replacedFeatures: ['Trapfinding', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Case the Joint',
        level: 1,
        description:
          'A heister can spend 1 hour observing a building or location. Afterward, she gains a +2 circumstance bonus on all skill checks made inside that location for 24 hours. This bonus increases by +1 for every 4 rogue levels she possesses.',
      },
      {
        name: 'Coordinated Heist',
        level: 4,
        description:
          'At 4th level, the heister can grant her case the joint bonus to a number of allies equal to her Charisma modifier. She can designate roles for each ally, granting them an additional +1 bonus on specific skill checks related to the heist.',
      },
      {
        name: 'Contingency Plan',
        level: 8,
        description:
          'At 8th level, once per day the heister can declare a contingency plan, retroactively deciding that she prepared for a specific obstacle. This functions similarly to a free use of a relevant skill check with a +4 bonus.',
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 17. Investigator (Rogue)
  // ──────────────────────────────────────────────
  {
    name: 'Investigator',
    className: 'Rogue',
    description:
      'The investigator rogue archetype focuses on solving mysteries and uncovering hidden truths, using keen observation and deductive reasoning.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Follow Up',
        level: 1,
        description:
          'An investigator can roll twice on Diplomacy checks to gather information and receive the information for both results. This also reduces the time needed to gather information by half.',
      },
      {
        name: 'Reasoning',
        level: 3,
        description:
          'At 3rd level, an investigator can use her Intelligence modifier in place of her Charisma modifier on Diplomacy, Intimidate, and Bluff checks. The bonus increases by +1 for every 3 levels beyond 3rd.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 18. Knife Master
  // ──────────────────────────────────────────────
  {
    name: 'Knife Master',
    className: 'Rogue',
    description:
      'The knife master focuses on close-up combat with light blades, gaining deadly expertise with daggers and similar weapons at the expense of other rogue skills.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: ['Sneak Attack'],
    newFeatures: [
      {
        name: 'Hidden Blade',
        level: 1,
        description:
          'A knife master adds half her level on Sleight of Hand checks made to conceal a light blade. She also gains a +1 bonus on initiative checks made during a surprise round if she has a concealed light blade.',
      },
      {
        name: 'Sneak Stab',
        level: 1,
        description:
          'A knife master uses d8s for sneak attack damage dealt with daggers, kukris, and other light blades, instead of the normal d6s. For all other weapons, she uses d4s instead of d6s.',
      },
      {
        name: 'Blade Sense',
        level: 3,
        description:
          'At 3rd level, a knife master gains a +1 dodge bonus to AC against attacks made with light blades. This bonus increases by +1 for every 3 rogue levels beyond 3rd.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 19. Liberator
  // ──────────────────────────────────────────────
  {
    name: 'Liberator',
    className: 'Rogue',
    description:
      'The liberator is dedicated to freeing the oppressed and enslaved, specializing in breaking bonds and leading escapes from captivity.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Lockbreaker',
        level: 1,
        description:
          'A liberator adds half her level (minimum +1) on Disable Device checks to open locks and on checks to escape bonds, manacles, or similar restraints. She can attempt to open a lock as a standard action instead of a full-round action.',
      },
      {
        name: 'Liberating Strike',
        level: 3,
        description:
          'At 3rd level, when a liberator deals sneak attack damage to a creature that is grappling, pinning, or otherwise restraining another creature, she can free the restrained creature as a free action. The restrained creature can immediately move up to half its speed.',
      },
    ],
    source: 'Andoran, Spirit of Liberty',
  },

  // ──────────────────────────────────────────────
  // 20. Makeshift Scrapper
  // ──────────────────────────────────────────────
  {
    name: 'Makeshift Scrapper',
    className: 'Rogue',
    description:
      'The makeshift scrapper turns everyday objects into deadly weapons, improvising tools and weapons from whatever materials are at hand.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Improvised Weapon Mastery',
        level: 1,
        description:
          'A makeshift scrapper gains the Catch Off-Guard feat as a bonus feat at 1st level. She treats improvised weapons as if they were light weapons for the purpose of weapon finesse and sneak attack.',
      },
      {
        name: 'Improved Improvisation',
        level: 3,
        description:
          'At 3rd level, a makeshift scrapper reduces the penalty for using improvised weapons by 1. This reduction increases by 1 for every 3 levels beyond 3rd. At 6th level, she gains Improvised Weapon Mastery as a bonus feat.',
      },
    ],
    source: "Adventurer's Armory 2",
  },

  // ──────────────────────────────────────────────
  // 21. Master of Disguise (Masked Performer)
  // ──────────────────────────────────────────────
  {
    name: 'Master of Disguise',
    className: 'Rogue',
    description:
      'The master of disguise is an expert at creating false identities and maintaining convincing personas, becoming nearly anyone at will.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Many Guises',
        level: 1,
        description:
          'A master of disguise can create a disguise in half the normal time. She adds half her rogue level (minimum +1) on Disguise checks and can create a disguise that mimics a specific individual she has observed for at least 10 minutes.',
      },
      {
        name: 'Quick Change',
        level: 3,
        description:
          'At 3rd level, the master of disguise can don a prepared disguise as a full-round action (rather than 1d3 x 10 minutes). At 9th level, she can do so as a standard action.',
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 22. Phantom Thief
  // ──────────────────────────────────────────────
  {
    name: 'Phantom Thief',
    className: 'Rogue',
    description:
      'The phantom thief sacrifices much of her combat prowess in favor of supreme social and skill versatility, becoming a consummate expert in nearly every field.',
    replacedFeatures: ['Sneak Attack', 'Trapfinding', 'Trap Sense'],
    modifiedFeatures: ['Rogue Talents'],
    newFeatures: [
      {
        name: 'Refined Education',
        level: 1,
        description:
          'A phantom thief gains all Knowledge skills as class skills. She adds half her level (minimum 1) on all Knowledge, Linguistics, and Sense Motive checks.',
      },
      {
        name: 'Social Grace',
        level: 1,
        description:
          'At 1st level, a phantom thief selects any one Charisma-, Dexterity-, or Intelligence-based skill. She gains a +1 bonus on checks with that skill, increasing by +1 at 5th level and every 4 levels thereafter. She selects an additional skill at 3rd level and every 3 levels thereafter.',
      },
      {
        name: 'Phantom Recall',
        level: 3,
        description:
          'At 3rd level, a phantom thief can take 10 on any skill check she has ranks in, even when stress or distraction would normally prevent her from doing so.',
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 23. Pirate
  // ──────────────────────────────────────────────
  {
    name: 'Pirate',
    className: 'Rogue',
    description:
      'The pirate rogue plies her trade on the high seas, combining maritime expertise with traditional rogue skills for a life of nautical adventure.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Sea Legs',
        level: 1,
        description:
          'A pirate gains a +1 bonus on Acrobatics, Climb, and Swim checks. This bonus increases by +1 for every 3 levels beyond 1st. She can always take 10 on Swim checks, even when distracted or in danger.',
      },
      {
        name: 'Swinging Reposition',
        level: 2,
        description:
          'At 2nd level, a pirate who grabs a rope, vine, or similar object can make a full attack action in the same round she swings to a new position, as long as the new position is within her movement range.',
      },
      {
        name: 'Unflinching',
        level: 3,
        description:
          'At 3rd level, a pirate gains a +1 bonus on saving throws against fear and a +1 bonus on Intimidate checks. These bonuses increase by +1 for every 3 levels beyond 3rd.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 24. Poisoner
  // ──────────────────────────────────────────────
  {
    name: 'Poisoner',
    className: 'Rogue',
    description:
      'The poisoner is a rogue who specializes in the crafting and application of poisons, turning toxins into her most reliable weapon.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Poison Use',
        level: 1,
        description:
          'A poisoner is trained in the use of poison and cannot accidentally poison herself when applying poison to a weapon. She also adds half her level on Craft (alchemy) checks to create poisons.',
      },
      {
        name: 'Master Poisoner',
        level: 3,
        description:
          'At 3rd level, a poisoner can use Craft (alchemy) to change the type of a poison (from injury to contact, for example). The DC to create the altered poison increases by 5. At 7th level, she can increase the DC of any poison she applies by +1, increasing by an additional +1 at 11th, 15th, and 19th levels.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 25. Rake
  // ──────────────────────────────────────────────
  {
    name: 'Rake',
    className: 'Rogue',
    description:
      'The rake is a scoundrel who uses bravado and panache to make a name for herself, taunting enemies in combat and cutting a dashing figure in society.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Bravado's Blade",
        level: 1,
        description:
          'When a rake hits an enemy that is denied its Dexterity bonus to AC or is flanked, she can attempt an Intimidate check to demoralize that target as a free action.',
      },
      {
        name: "Rake's Smile",
        level: 3,
        description:
          'At 3rd level, a rake gains a +1 morale bonus on Bluff and Diplomacy checks. This bonus increases by +1 for every 3 levels beyond 3rd.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 26. River Rat
  // ──────────────────────────────────────────────
  {
    name: 'River Rat',
    className: 'Rogue',
    description:
      'The river rat plies her trade along waterways and river ports, using knowledge of rivers and aquatic environments to gain an edge.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Waterway Expert',
        level: 1,
        description:
          'A river rat gains a +1 bonus on Knowledge (geography), Knowledge (nature), and Survival checks made near rivers or other waterways. This bonus increases by +1 for every 3 levels beyond 1st. She also gains a swim speed of 15 feet.',
      },
      {
        name: 'River Strike',
        level: 3,
        description:
          'At 3rd level, a river rat gains a +1 bonus on attack rolls and damage rolls when standing in or adjacent to water. This bonus increases by +1 for every 3 levels beyond 3rd.',
      },
    ],
    source: 'People of the River',
  },

  // ──────────────────────────────────────────────
  // 27. Roof Runner
  // ──────────────────────────────────────────────
  {
    name: 'Roof Runner',
    className: 'Rogue',
    description:
      'The roof runner specializes in moving across urban rooftops, using superior mobility and knowledge of cityscapes to pursue targets or escape pursuit.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Roof Running',
        level: 1,
        description:
          'A roof runner can move across rooftops at full speed without needing an Acrobatics check for DC 20 or less. She does not lose her Dexterity bonus to AC while climbing and gains a +1 bonus on Climb and Acrobatics checks in urban environments, increasing by +1 per 3 levels.',
      },
      {
        name: 'Tumbling Descent',
        level: 3,
        description:
          'At 3rd level, the roof runner can make an Acrobatics check to reduce falling damage as if the fall were 10 feet shorter, plus 10 additional feet for every 3 levels beyond 3rd.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 28. Sanctified Rogue
  // ──────────────────────────────────────────────
  {
    name: 'Sanctified Rogue',
    className: 'Rogue',
    description:
      'The sanctified rogue has been touched by divine providence, gaining minor divine abilities and the favor of a deity while maintaining her roguish skills.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: ['Rogue Talents'],
    newFeatures: [
      {
        name: 'Divine Purpose',
        level: 1,
        description:
          'A sanctified rogue must select a deity. She gains Knowledge (religion) and Heal as class skills. She adds half her level (minimum +1) on Knowledge (religion) checks and can use divine focus components for skill checks.',
      },
      {
        name: 'Divine Epiphany',
        level: 3,
        description:
          'At 3rd level, once per day the sanctified rogue can gain a +2 sacred (or profane) bonus on a single attack roll, saving throw, or skill check. This ability can be used one additional time per day for every 3 levels beyond 3rd.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 29. Sapper
  // ──────────────────────────────────────────────
  {
    name: 'Sapper',
    className: 'Rogue',
    description:
      'The sapper specializes in demolition and siege warfare, using her expertise to undermine fortifications and set devastating explosives.',
    replacedFeatures: ['Trapfinding', 'Trap Sense', 'Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Demolition Expert',
        level: 1,
        description:
          'A sapper adds half her level (minimum +1) on Craft (alchemy) and Knowledge (engineering) checks. She can assess structural weaknesses with a successful Knowledge (engineering) check (DC 15), gaining a +2 bonus on attack rolls against objects and constructs.',
      },
      {
        name: 'Careful Saboteur',
        level: 3,
        description:
          'At 3rd level, a sapper can set explosive traps that deal 1d6 points of fire damage per rogue level (Reflex save DC 10 + half rogue level + Intelligence modifier for half). Setting a trap takes 1 minute.',
      },
      {
        name: 'Breach',
        level: 4,
        description:
          'At 4th level, the sapper treats the hardness of objects as 2 lower when attempting to damage or destroy them. This reduction increases by 2 for every 4 levels beyond 4th.',
      },
    ],
    source: 'Melee Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 30. Savage (Unchained)
  // ──────────────────────────────────────────────
  {
    name: 'Savage',
    className: 'Rogue',
    description:
      'The savage rogue is a fierce combatant from an uncivilized land, replacing finesse with raw ferocity and primal instincts.',
    replacedFeatures: ['Evasion', 'Trap Sense', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Savage Resilience',
        level: 2,
        description:
          'At 2nd level, a savage gains DR 1/- when wearing no armor or light armor. This DR increases by 1 for every 3 rogue levels beyond 2nd.',
      },
      {
        name: 'Primal Instinct',
        level: 3,
        description:
          'At 3rd level, a savage gains a +1 bonus on Perception checks and initiative checks. This bonus increases by +1 for every 3 levels beyond 3rd.',
      },
      {
        name: 'Hard to Kill',
        level: 8,
        description:
          'At 8th level, the savage automatically stabilizes when reduced to negative hit points. She also gains Diehard as a bonus feat.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 31. Scout
  // ──────────────────────────────────────────────
  {
    name: 'Scout',
    className: 'Rogue',
    description:
      'The scout is a skilled skirmisher who relies on mobility to deal sneak attack damage, charging into combat and striking vulnerable foes on the move.',
    replacedFeatures: ['Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Scout's Charge",
        level: 4,
        description:
          'At 4th level, whenever a scout makes a charge, her attack deals sneak attack damage as if the target were flat-footed. Foes with uncanny dodge are immune to this ability.',
      },
      {
        name: 'Skirmisher',
        level: 8,
        description:
          'At 8th level, whenever a scout moves more than 10 feet in a round and makes a melee attack, the attack deals sneak attack damage as if the target were flat-footed. Foes with uncanny dodge are immune. If the scout makes more than one attack this turn, this ability only applies to the first attack.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 32. Skulking Slayer
  // ──────────────────────────────────────────────
  {
    name: 'Skulking Slayer',
    className: 'Rogue',
    description:
      'The skulking slayer combines dirty fighting with sneak attacks, using underhanded combat maneuvers to gain an edge over larger, stronger opponents.',
    replacedFeatures: ['Trapfinding', 'Trap Sense', 'Evasion'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Underhanded Maneuvers',
        level: 1,
        description:
          'A skulking slayer gains a +1 bonus on combat maneuver checks made against foes that are denied their Dexterity bonus to AC, and can deal sneak attack damage when making dirty trick, steal, or trip combat maneuvers.',
      },
      {
        name: 'Bold Strike',
        level: 2,
        description:
          'At 2nd level, when a skulking slayer charges, she gains a +1 circumstance bonus on attack rolls. This bonus increases by +1 for every 3 levels beyond 2nd.',
      },
      {
        name: 'Bully',
        level: 3,
        description:
          'At 3rd level, a skulking slayer can deal sneak attack damage against a target she has successfully demoralized within the past round, even if the target is not flanked or denied its Dexterity bonus.',
      },
    ],
    source: 'Advanced Race Guide',
  },

  // ──────────────────────────────────────────────
  // 33. Snare Setter
  // ──────────────────────────────────────────────
  {
    name: 'Snare Setter',
    className: 'Rogue',
    description:
      'The snare setter specializes in creating and deploying traps in the field, using her cunning to set deadly snares that catch enemies unaware.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: ['Rogue Talents'],
    newFeatures: [
      {
        name: 'Snare',
        level: 1,
        description:
          'A snare setter gains the ability to create ranger traps (as the ranger class feature). She gains one ranger trap at 1st level and an additional trap at 3rd level and every 2 levels thereafter. The DC is 10 + half rogue level + Intelligence modifier.',
      },
      {
        name: 'Quick Trapper',
        level: 3,
        description:
          'At 3rd level, a snare setter can set a ranger trap as a full-round action (rather than 1 minute). At 7th level, she can set a trap as a standard action.',
      },
    ],
    source: 'Kobolds of Golarion',
  },

  // ──────────────────────────────────────────────
  // 34. Sniper
  // ──────────────────────────────────────────────
  {
    name: 'Sniper',
    className: 'Rogue',
    description:
      'The sniper is a master of ranged stealth, picking off targets from a distance with deadly accuracy and precision.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: ['Sneak Attack'],
    newFeatures: [
      {
        name: 'Accuracy',
        level: 1,
        description:
          'At 1st level, a sniper halves all range increment penalties when making ranged attacks with a bow or crossbow.',
      },
      {
        name: 'Deadly Range',
        level: 3,
        description:
          'At 3rd level, a sniper increases the range at which she can apply sneak attack damage by 10 feet. This range increases by 10 feet for every 3 levels beyond 3rd.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 35. Spy
  // ──────────────────────────────────────────────
  {
    name: 'Spy',
    className: 'Rogue',
    description:
      'The spy uses her keen social skills and knowledge of intrigue to gather intelligence, manipulate targets, and serve as a secret agent for powerful organizations.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Skilled Liar',
        level: 1,
        description:
          'At 1st level, a spy adds half her level (minimum +1) on Bluff checks to deceive someone. She also adds half her level on Diplomacy checks to gather information.',
      },
      {
        name: 'Poison Use',
        level: 3,
        description:
          'At 3rd level, a spy is trained in the use of poison and cannot accidentally poison herself when applying poison to a blade.',
      },
      {
        name: 'Art of Deception',
        level: 3,
        description:
          'At 3rd level, a spy gains a +1 bonus on Bluff, Disguise, and Sense Motive checks. This bonus increases by +1 for every 3 rogue levels beyond 3rd.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 36. Survivalist
  // ──────────────────────────────────────────────
  {
    name: 'Survivalist',
    className: 'Rogue',
    description:
      'The survivalist is a rogue who has adapted to life in the wild, combining survival skills with her rogue talents to thrive in the harshest environments.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Hardy',
        level: 1,
        description:
          'A survivalist adds half her level (minimum +1) on Heal, Knowledge (geography), Knowledge (nature), Perception, and Survival checks. She gains Survival as a class skill.',
      },
      {
        name: 'Endurance',
        level: 3,
        description:
          'At 3rd level, a survivalist gains Endurance as a bonus feat. At 6th level, she gains Diehard as a bonus feat.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 37. Swashbuckler (Rogue)
  // ──────────────────────────────────────────────
  {
    name: 'Swashbuckler',
    className: 'Rogue',
    description:
      'The swashbuckler rogue archetype combines daring swordplay with panache, using light weapons and daring maneuvers to outfight opponents with style.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Martial Training',
        level: 1,
        description:
          'At 1st level, a swashbuckler gains proficiency with martial weapons. She gains Weapon Finesse as a bonus feat at 1st level.',
      },
      {
        name: 'Daring',
        level: 3,
        description:
          'At 3rd level, a swashbuckler gains a +1 morale bonus on Acrobatics checks and saving throws against fear. This bonus increases by +1 for every 3 levels beyond 3rd.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 38. Swindler
  // ──────────────────────────────────────────────
  {
    name: 'Swindler',
    className: 'Rogue',
    description:
      'The swindler is a master con artist who uses elaborate schemes, forged identities, and subtle manipulation to fleece her marks of everything they have.',
    replacedFeatures: ['Trapfinding', 'Trap Sense', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Convincing Persona',
        level: 1,
        description:
          'A swindler gains the ability to create and maintain up to a number of false identities equal to her Charisma modifier (minimum 1). Each identity has its own full background, set of documentation, and disguise. She gains a +4 circumstance bonus on Disguise checks when using a prepared identity.',
      },
      {
        name: 'Friendly Swindle',
        level: 3,
        description:
          "At 3rd level, a swindler can make a Bluff check opposed by a target's Sense Motive to cause the target to regard her as a trusted friend for a number of minutes equal to her Charisma modifier. This does not work in combat.",
      },
      {
        name: 'Con Artist',
        level: 4,
        description:
          'At 4th level, a swindler gains a +2 bonus on Bluff, Diplomacy, Disguise, and Sense Motive checks. This bonus increases by +1 for every 4 levels beyond 4th.',
      },
      {
        name: 'Perfect Lie',
        level: 8,
        description:
          "At 8th level, a swindler's lies become nearly undetectable. She can choose to take 20 on Bluff checks without spending any additional time, once per day. She gains an additional use per day at 14th and 20th level.",
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 39. Sylvan Trickster
  // ──────────────────────────────────────────────
  {
    name: 'Sylvan Trickster',
    className: 'Rogue',
    description:
      'The sylvan trickster draws on her connection to the fey, gaining access to witch hexes that she uses in combination with her rogue abilities.',
    replacedFeatures: ['Trap Sense'],
    modifiedFeatures: ['Rogue Talents'],
    newFeatures: [
      {
        name: 'Fey Tricks',
        level: 2,
        description:
          'A sylvan trickster can select a witch hex in place of a rogue talent. She uses her rogue level as her witch level for determining the effects of the hex. She cannot select major or grand hexes this way until she qualifies for advanced rogue talents.',
      },
      {
        name: 'Fey Resistance',
        level: 3,
        description:
          'At 3rd level, a sylvan trickster gains a +1 bonus on saving throws against enchantment and illusion spells and effects. This bonus increases by +1 for every 3 levels beyond 3rd.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 40. Thug
  // ──────────────────────────────────────────────
  {
    name: 'Thug',
    className: 'Rogue',
    description:
      'The thug uses intimidation and brute force rather than subtlety, frightening victims into submission and using fear as a weapon.',
    replacedFeatures: ['Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Frightening',
        level: 1,
        description:
          'Whenever a thug successfully uses Intimidate to demoralize a creature, the duration of the shaken condition is increased by 1 round. In addition, if the target is shaken for 4 or more rounds, the thug can instead make the target frightened for 1 round.',
      },
      {
        name: 'Brutal Beating',
        level: 3,
        description:
          'At 3rd level, whenever a thug deals sneak attack damage, she can choose to forgo 1d6 points of sneak attack damage to make the target sickened for a number of rounds equal to half her sneak attack dice. This ability does not stack with itself.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 41. Trapsmith
  // ──────────────────────────────────────────────
  {
    name: 'Trapsmith',
    className: 'Rogue',
    description:
      'The trapsmith is an expert at crafting and deploying mechanical traps, creating deadly devices that protect her allies and punish her enemies.',
    replacedFeatures: ['Trap Sense', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: ['Trapfinding'],
    newFeatures: [
      {
        name: 'Careful Disarm',
        level: 4,
        description:
          "At 4th level, whenever a trapsmith disarms a trap, she can harvest the trap's components and repurpose them. She can carry a number of salvaged trap components equal to her Intelligence modifier.",
      },
      {
        name: 'Trap Master',
        level: 3,
        description:
          'At 3rd level, a trapsmith can build simple traps with easily found materials. She can create a trap in 1 minute that lasts for 1 hour per rogue level. The trap deals 1d6 damage per 2 rogue levels (Reflex DC 10 + half rogue level + Intelligence modifier for half).',
      },
      {
        name: 'Quick Trapsmith',
        level: 8,
        description:
          'At 8th level, a trapsmith can create traps as a full-round action. She can also apply poison to traps without risk of poisoning herself.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 42. Underground Chemist
  // ──────────────────────────────────────────────
  {
    name: 'Underground Chemist',
    className: 'Rogue',
    description:
      'The underground chemist combines alchemical expertise with rogue cunning, hurling splash weapons with deadly precision and using chemicals as tools of the trade.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: ['Sneak Attack'],
    newFeatures: [
      {
        name: 'Chemical Weapons',
        level: 1,
        description:
          'An underground chemist can use her Intelligence modifier instead of her Dexterity modifier on attack rolls made with splash weapons. She adds her Intelligence modifier as a bonus on damage rolls with splash weapons.',
      },
      {
        name: 'Precise Splash Weapons',
        level: 2,
        description:
          'At 2nd level, an underground chemist can deal sneak attack damage with splash weapons. The sneak attack damage is only dealt to the direct target of the splash weapon, not to creatures in the splash area.',
      },
      {
        name: 'Chemical Resistance',
        level: 3,
        description:
          'At 3rd level, an underground chemist gains a +2 bonus on saving throws against poison. This bonus increases by +2 at 6th level and every 3 levels thereafter.',
      },
      {
        name: 'Discovery',
        level: 4,
        description:
          'At 4th level, an underground chemist can select an alchemist discovery in place of a rogue talent. She uses her rogue level as her alchemist level for the purpose of qualifying for and using discoveries.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 43. Vexing Dodger
  // ──────────────────────────────────────────────
  {
    name: 'Vexing Dodger',
    className: 'Rogue',
    description:
      'The vexing dodger specializes in fighting opponents larger than herself, climbing onto bigger creatures and using their size against them.',
    replacedFeatures: ['Evasion', 'Trap Sense', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Limb-Climber',
        level: 1,
        description:
          'A vexing dodger can climb onto a creature at least one size category larger than herself as a move action that provokes attacks of opportunity. While clinging to a larger creature, she gains a +2 circumstance bonus on melee attack rolls against that creature and the creature takes a -2 penalty on attack rolls against her.',
      },
      {
        name: 'Improved Limb-Climber',
        level: 2,
        description:
          'At 2nd level, climbing onto a larger creature no longer provokes an attack of opportunity. The vexing dodger also gains a +2 bonus on CMD to resist being pulled off a creature she is climbing.',
      },
      {
        name: 'Tangle Fighter',
        level: 3,
        description:
          'At 3rd level, while the vexing dodger is climbing a larger creature, that creature takes a -1 penalty on Reflex saves and to its AC. This penalty increases by -1 for every 3 levels beyond 3rd.',
      },
      {
        name: 'Ride the Beast',
        level: 4,
        description:
          'At 4th level, the vexing dodger can take a full-attack action while climbing a larger creature. She does not need to make a check to maintain her grip while attacking.',
      },
      {
        name: 'Greater Limb-Climber',
        level: 8,
        description:
          'At 8th level, the vexing dodger can climb onto a creature as a swift action. She gains evasion while clinging to a creature larger than herself.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 44. Counterfeit Mage (Unchained)
  // ──────────────────────────────────────────────
  {
    name: 'Unchained Knife Master',
    className: 'Rogue',
    description:
      'The unchained knife master variant applies the knife master concept to the unchained rogue, gaining deadly expertise with light blades and debilitating strikes.',
    replacedFeatures: ['Trapfinding', 'Danger Sense'],
    modifiedFeatures: ['Sneak Attack'],
    newFeatures: [
      {
        name: 'Hidden Blade',
        level: 1,
        description:
          'An unchained knife master adds half her level on Sleight of Hand checks made to conceal a light blade.',
      },
      {
        name: 'Sneak Stab',
        level: 1,
        description:
          'An unchained knife master uses d8s for sneak attack damage with daggers, kukris, and other light blades, instead of the normal d6s. For all other weapons, she uses d4s instead.',
      },
      {
        name: 'Blade Sense',
        level: 3,
        description:
          'At 3rd level, a knife master gains a +1 dodge bonus to AC against attacks made with light blades. This bonus increases by +1 for every 3 rogue levels beyond 3rd.',
      },
    ],
    source: 'Ultimate Combat',
  },

  // ──────────────────────────────────────────────
  // 45. Guild Agent
  // ──────────────────────────────────────────────
  {
    name: 'Guild Agent',
    className: 'Rogue',
    description:
      "The guild agent works for a thieves' guild or criminal organization, gaining contacts, safe houses, and organizational support in exchange for loyalty and a cut of the profits.",
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Guild Contact',
        level: 1,
        description:
          "A guild agent gains a network of contacts within her organization. She can make a Diplomacy check (DC 15 + the settlement's danger modifier) to locate a safe house, fence stolen goods, or gather information through guild channels, gaining a +2 bonus on the check.",
      },
      {
        name: 'Guild Talent',
        level: 3,
        description:
          'At 3rd level, the guild agent gains a +1 bonus on Bluff, Intimidate, and Knowledge (local) checks. This bonus increases by +1 for every 3 levels beyond 3rd. She also gains access to guild-specific rogue talents.',
      },
    ],
    source: 'Inner Sea World Guide',
  },

  // ──────────────────────────────────────────────
  // 46. Discretion Specialist
  // ──────────────────────────────────────────────
  {
    name: 'Discretion Specialist',
    className: 'Rogue',
    description:
      'The discretion specialist is a rogue who excels at infiltration missions, capable of entering and exiting secured locations without leaving any trace.',
    replacedFeatures: ['Trapfinding', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Leave No Trace',
        level: 1,
        description:
          'A discretion specialist adds half her level (minimum +1) on Stealth checks and on checks to cover her tracks. She also gains a +2 bonus on Survival checks to hide her trail.',
      },
      {
        name: 'Ghost Step',
        level: 4,
        description:
          'At 4th level, the discretion specialist can move at full speed without taking a penalty on Stealth checks. At 8th level, she can run or charge without penalty on Stealth checks.',
      },
      {
        name: 'Undetectable',
        level: 8,
        description:
          'At 8th level, the discretion specialist cannot be detected by scent, tremorsense, or blindsight while she is actively stealthing. She also gains a +4 bonus on saves against divination effects.',
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 47. Escapologist
  // ──────────────────────────────────────────────
  {
    name: 'Escapologist',
    className: 'Rogue',
    description:
      'The escapologist specializes in escaping bonds, grapples, and confinement, becoming nearly impossible to capture or restrain.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Escape Artist',
        level: 1,
        description:
          'An escapologist adds half her level (minimum +1) on Escape Artist checks. She can attempt an Escape Artist check to escape a grapple as a move action instead of a standard action.',
      },
      {
        name: 'Slippery',
        level: 3,
        description:
          'At 3rd level, the escapologist gains a +1 bonus to CMD against grapple, pin, and tie-up combat maneuvers. This bonus increases by +1 for every 3 levels beyond 3rd. At 9th level, she can escape from any non-magical bonds as a full-round action.',
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 48. False Medium
  // ──────────────────────────────────────────────
  {
    name: 'False Medium',
    className: 'Rogue',
    description:
      'The false medium pretends to communicate with spirits and the dead, using cold reading and psychological manipulation to convince marks of her supernatural abilities.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Cold Reading',
        level: 1,
        description:
          "A false medium can use Sense Motive to learn a creature's desires, fears, and general background after 1 minute of conversation. The DC equals 10 + the target's HD + the target's Wisdom modifier. Success grants a +2 bonus on Bluff and Diplomacy checks against that target.",
      },
      {
        name: 'Séance',
        level: 3,
        description:
          "At 3rd level, a false medium can perform a fake séance that takes 10 minutes. She makes a Bluff check opposed by each participant's Sense Motive. Participants who fail believe the séance is real and become more susceptible to her suggestions for 24 hours.",
      },
    ],
    source: 'Occult Adventures',
  },

  // ──────────────────────────────────────────────
  // 49. Guerrilla
  // ──────────────────────────────────────────────
  {
    name: 'Guerrilla',
    className: 'Rogue',
    description:
      'The guerrilla is a rogue who specializes in hit-and-run tactics, ambushes, and unconventional warfare against larger, more organized forces.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Ambush Training',
        level: 1,
        description:
          'A guerrilla gains a +1 bonus on initiative rolls and a +1 bonus on attack rolls made during the surprise round. These bonuses increase by +1 for every 4 levels beyond 1st.',
      },
      {
        name: 'Terrain Advantage',
        level: 3,
        description:
          'At 3rd level, the guerrilla selects one type of terrain (as the ranger favored terrain). While in that terrain, she gains a +2 bonus on Stealth, Perception, and Survival checks. She selects an additional terrain at 6th level and every 3 levels thereafter.',
      },
    ],
    source: 'Dirty Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 50. Knifemaster (Unchained variant already covered above)
  // Numerian Scavenger
  // ──────────────────────────────────────────────
  {
    name: 'Numerian Scavenger',
    className: 'Rogue',
    description:
      'The Numerian scavenger specializes in finding and repurposing technological artifacts from the crashed starship buried in the wastelands of Numeria.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Technic Training',
        level: 1,
        description:
          'A Numerian scavenger adds half her level (minimum +1) on Knowledge (engineering) and Disable Device checks made against technological items. She can use Disable Device to disarm technological traps and devices.',
      },
      {
        name: 'Salvage',
        level: 3,
        description:
          'At 3rd level, a Numerian scavenger can harvest technological components from broken devices. She gains a +2 bonus on Craft checks to repair or repurpose technological items. This bonus increases by +1 for every 3 levels beyond 3rd.',
      },
    ],
    source: 'People of the Stars',
  },

  // ──────────────────────────────────────────────
  // 51. Rake of the Biting Rose (variant of Rake)
  // ──────────────────────────────────────────────

  // ──────────────────────────────────────────────
  // 52. Scroll Scoundrel
  // ──────────────────────────────────────────────
  {
    name: 'Scroll Scoundrel',
    className: 'Rogue',
    description:
      'The scroll scoundrel uses stolen scrolls and minor magical know-how to augment her roguish abilities with arcane tricks.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: ['Rogue Talents'],
    newFeatures: [
      {
        name: 'Scroll Expertise',
        level: 1,
        description:
          'A scroll scoundrel adds half her level (minimum +1) on Use Magic Device checks made to use scrolls. She also adds Spellcraft to her list of class skills.',
      },
      {
        name: 'Borrowed Magic',
        level: 3,
        description:
          'At 3rd level, a scroll scoundrel can use a scroll without provoking an attack of opportunity. Additionally, she reduces the chance of a scroll mishap by an amount equal to half her rogue level.',
      },
    ],
    source: 'Inner Sea Intrigue',
  },

  // ──────────────────────────────────────────────
  // 53. Sharper
  // ──────────────────────────────────────────────
  {
    name: 'Sharper',
    className: 'Rogue',
    description:
      'The sharper is a con artist and card cheat who uses sleight of hand and mental acuity to cheat at games of chance and swindle marks.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Cheater's Edge",
        level: 1,
        description:
          'A sharper adds half her level (minimum +1) on Bluff and Sleight of Hand checks made during games of chance or to cheat. She also gains Profession (gambler) as a class skill.',
      },
      {
        name: 'Lucky Strike',
        level: 3,
        description:
          'At 3rd level, once per day the sharper can reroll any one attack roll, skill check, or saving throw and take the better result. She gains one additional daily use for every 3 levels beyond 3rd.',
      },
    ],
    source: 'Inner Sea Combat',
  },

  // ──────────────────────────────────────────────
  // 54. Skulking Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Skulking Hunter',
    className: 'Rogue',
    description:
      'The skulking hunter is an expert tracker and predator, combining rogue skills with hunting techniques to track and bring down prey.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Hunter's Quarry",
        level: 1,
        description:
          'A skulking hunter can designate one target as her quarry as a swift action. She gains a +1 bonus on Perception, Stealth, and Survival checks against her quarry. This bonus increases by +1 for every 4 rogue levels she possesses.',
      },
      {
        name: 'Wild Stalking',
        level: 3,
        description:
          'At 3rd level, a skulking hunter gains the ability to use Stealth in natural terrain even without cover or concealment. She can also track at full speed without penalty.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 55. Trickster (Rogue)
  // ──────────────────────────────────────────────
  {
    name: 'Trickster',
    className: 'Rogue',
    description:
      'The trickster relies on deception, diversions, and misdirection to defeat opponents, preferring to avoid direct confrontation when possible.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Diversion',
        level: 1,
        description:
          'A trickster gains a +1 bonus on Bluff checks to create a diversion to hide and on Sleight of Hand checks to conceal objects. This bonus increases by +1 for every 3 rogue levels she possesses.',
      },
      {
        name: 'Misdirection',
        level: 3,
        description:
          'At 3rd level, a trickster can create an illusory double of herself as a swift action for 1 round per rogue level per day. The double mimics her actions and creatures must make a Will save (DC 10 + half rogue level + Charisma modifier) to determine which is real.',
      },
    ],
    source: 'Inner Sea Intrigue',
  },

  // ──────────────────────────────────────────────
  // 56. Waylayer
  // ──────────────────────────────────────────────
  {
    name: 'Waylayer',
    className: 'Rogue',
    description:
      'The waylayer is an expert ambusher who excels at catching foes off guard with devastating surprise attacks.',
    replacedFeatures: ['Trapfinding', 'Evasion', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Ambusher',
        level: 1,
        description:
          'A waylayer can always act in a surprise round even if she fails to notice her enemies. She gains a +1 bonus on attack rolls during the surprise round, increasing by +1 for every 4 levels beyond 1st.',
      },
      {
        name: 'Knockout Strike',
        level: 2,
        description:
          'At 2nd level, a waylayer can attempt to knock out a flat-footed target by dealing nonlethal sneak attack damage. The target must succeed on a Fortitude save (DC 10 + half rogue level + Strength modifier) or be rendered unconscious for 1d4 rounds.',
      },
      {
        name: 'Sudden Strike',
        level: 3,
        description:
          'At 3rd level, the waylayer deals an additional 1d6 points of damage on attacks made during the surprise round. This additional damage increases by +1d6 at 6th level and every 3 levels thereafter.',
      },
    ],
    source: 'Dirty Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 57. Unchained Scout
  // ──────────────────────────────────────────────
  {
    name: 'Unchained Scout',
    className: 'Rogue',
    description:
      'The unchained scout variant works with the unchained rogue, combining mobility-based sneak attack with debilitating injuries.',
    replacedFeatures: ['Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Scout's Charge",
        level: 4,
        description:
          'At 4th level, whenever an unchained scout makes a charge, her attack deals sneak attack damage as if the target were flat-footed. Foes with uncanny dodge are immune.',
      },
      {
        name: 'Skirmisher',
        level: 8,
        description:
          'At 8th level, whenever an unchained scout moves more than 10 feet in a round and makes a melee attack, the first attack deals sneak attack damage as if the target were flat-footed. Foes with uncanny dodge are immune.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 58. Rake (Unchained)
  // ──────────────────────────────────────────────

  // ──────────────────────────────────────────────
  // 59. Eldritch Scoundrel
  // ──────────────────────────────────────────────
  {
    name: 'Eldritch Scoundrel',
    className: 'Rogue',
    description:
      'The eldritch scoundrel is a rogue who has studied wizardry, gaining the ability to cast arcane spells while maintaining roguish versatility at the cost of some combat prowess.',
    replacedFeatures: ['Trapfinding', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: ['Sneak Attack', 'Rogue Talents'],
    newFeatures: [
      {
        name: 'Spellcasting',
        level: 1,
        description:
          'An eldritch scoundrel casts arcane spells drawn from the wizard spell list as a wizard of her rogue level -3 (minimum 1). She uses Intelligence as her casting ability and must prepare spells from a spellbook. Her sneak attack progression is reduced by 1d6 for every 2 levels of spellcasting gained.',
      },
      {
        name: 'Alarm Sense',
        level: 4,
        description:
          'At 4th level, an eldritch scoundrel can use detect magic at will and gains a +1 bonus on Perception checks to notice magical traps. This bonus increases by +1 for every 4 levels beyond 4th.',
      },
      {
        name: 'Uncanny Alertness',
        level: 8,
        description:
          'At 8th level, the eldritch scoundrel cannot be caught flat-footed while she has at least one spell slot remaining, and she adds her Intelligence modifier to initiative checks.',
      },
    ],
    source: 'Arcane Anthology',
  },

  // ──────────────────────────────────────────────
  // 60. Unchained Thug
  // ──────────────────────────────────────────────
  {
    name: 'Unchained Thug',
    className: 'Rogue',
    description:
      'The unchained thug variant uses the unchained rogue framework, combining frightening and brutal beating with the debilitating injury class feature.',
    replacedFeatures: ['Danger Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Frightening',
        level: 1,
        description:
          'Whenever an unchained thug successfully uses Intimidate to demoralize a creature, the duration of the shaken condition is increased by 1 round. If the target is shaken for 4 or more rounds, the thug can instead make the target frightened for 1 round.',
      },
      {
        name: 'Brutal Beating',
        level: 3,
        description:
          'At 3rd level, whenever an unchained thug deals sneak attack damage, she can forgo 1d6 points of sneak attack damage to sicken the target for a number of rounds equal to half her sneak attack dice.',
      },
    ],
    source: "Advanced Player's Guide",
  },

  // ──────────────────────────────────────────────
  // 61. Verdant Grifter
  // ──────────────────────────────────────────────
  {
    name: 'Verdant Grifter',
    className: 'Rogue',
    description:
      'The verdant grifter uses knowledge of herbalism and natural poisons to augment her rogue abilities, blending wilderness survival with urban cunning.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Herbalism',
        level: 1,
        description:
          'A verdant grifter gains a +2 bonus on Knowledge (nature), Profession (herbalist), and Survival checks. She can create herbal remedies that function as antitoxin or smelling salts using only natural materials.',
      },
      {
        name: 'Natural Toxins',
        level: 3,
        description:
          'At 3rd level, the verdant grifter can create simple plant-based poisons at half the normal cost and time. She gains poison use as the alchemist class feature. The DC of her poisons increases by +1 for every 3 levels beyond 3rd.',
      },
    ],
    source: 'Heroes of the Wild',
  },

  // ──────────────────────────────────────────────
  // 62. Cat Burglar
  // ──────────────────────────────────────────────
  {
    name: 'Cat Burglar',
    className: 'Rogue',
    description:
      'The cat burglar is the ultimate infiltrator, excelling at scaling walls, bypassing security, and disappearing without a trace.',
    replacedFeatures: ['Trapfinding', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Nimble Climber',
        level: 1,
        description:
          'A cat burglar gains a climb speed of 20 feet. She adds half her level (minimum +1) on Climb checks and can always take 10 on Climb checks even when threatened or distracted.',
      },
      {
        name: 'Silent Entry',
        level: 4,
        description:
          'At 4th level, a cat burglar gains a +2 bonus on Stealth and Disable Device checks when breaking into a building or secured area. This bonus increases by +2 at 8th level and every 4 levels thereafter.',
      },
      {
        name: 'Clean Getaway',
        level: 8,
        description:
          'At 8th level, when a cat burglar successfully disables a trap or picks a lock, she can choose to leave it appearing undisturbed. Detecting the tampering requires a Perception check opposed by her Disable Device check result.',
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 63. Smuggler
  // ──────────────────────────────────────────────
  {
    name: 'Smuggler',
    className: 'Rogue',
    description:
      'The smuggler specializes in transporting contraband across borders and through checkpoints, using hidden compartments and clever diversions.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Distraction',
        level: 1,
        description:
          'A smuggler gains a +1 bonus on Bluff checks made to create a distraction and on Sleight of Hand checks to conceal objects. This bonus increases by +1 for every 3 rogue levels she possesses.',
      },
      {
        name: 'Concealed Compartment',
        level: 3,
        description:
          "At 3rd level, a smuggler can create hidden compartments in containers, vehicles, or clothing. Finding a concealed compartment requires a Perception check with a DC equal to 20 + half the smuggler's rogue level + her Intelligence modifier.",
      },
    ],
    source: 'Inner Sea Intrigue',
  },

  // ──────────────────────────────────────────────
  // 64. Relic Raider
  // ──────────────────────────────────────────────
  {
    name: 'Relic Raider',
    className: 'Rogue',
    description:
      'The relic raider is a treasure hunter who delves into ancient ruins and tombs, using rogue skills to bypass ancient traps and claim lost artifacts.',
    replacedFeatures: ['Trap Sense', 'Uncanny Dodge', 'Improved Uncanny Dodge'],
    modifiedFeatures: ['Trapfinding'],
    newFeatures: [
      {
        name: 'Ancient Lore',
        level: 1,
        description:
          'A relic raider adds half her level (minimum +1) on Knowledge (history), Knowledge (religion), and Linguistics checks to decipher ancient texts and identify relics.',
      },
      {
        name: 'Ruin Sense',
        level: 3,
        description:
          'At 3rd level, a relic raider gains a +1 bonus on Perception and Reflex saves to avoid traps in ruins or underground environments. This bonus increases by +1 for every 3 levels beyond 3rd.',
      },
      {
        name: 'Trap Salvage',
        level: 4,
        description:
          "At 4th level, when a relic raider disarms a trap, she can recover components worth half the trap's construction cost. She can repurpose these components to set her own traps.",
      },
    ],
    source: 'Pathfinder Society Field Guide',
  },

  // ──────────────────────────────────────────────
  // 65. Clip Artist
  // ──────────────────────────────────────────────
  {
    name: 'Clip Artist',
    className: 'Rogue',
    description:
      'The clip artist is a skilled counterfeiter and forger who can create convincing fake documents, currency, and artwork.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Master Forger',
        level: 1,
        description:
          'A clip artist adds half her level (minimum +1) on Linguistics checks to create or detect forgeries. She can create a forgery in half the normal time and gains a +4 bonus on Linguistics checks to create forgeries.',
      },
      {
        name: 'Convincing Fake',
        level: 3,
        description:
          'At 3rd level, a clip artist can create forgeries that are nearly undetectable. Creatures examining her forgeries take a -2 penalty on Linguistics checks to detect them. This penalty increases by -1 for every 3 levels beyond 3rd.',
      },
    ],
    source: 'Agents of Evil',
  },

  // ──────────────────────────────────────────────
  // 66. Unchained Sylvan Trickster
  // ──────────────────────────────────────────────
  {
    name: 'Unchained Sylvan Trickster',
    className: 'Rogue',
    description:
      'The unchained sylvan trickster brings fey magic to the unchained rogue, trading danger sense for witch hexes and resistance to enchantment.',
    replacedFeatures: ['Danger Sense'],
    modifiedFeatures: ['Rogue Talents'],
    newFeatures: [
      {
        name: 'Fey Tricks',
        level: 2,
        description:
          'An unchained sylvan trickster can select a witch hex in place of a rogue talent. She uses her rogue level as her witch level for the hex effects. She cannot select major or grand hexes until she qualifies for advanced rogue talents.',
      },
      {
        name: 'Fey Resistance',
        level: 3,
        description:
          'At 3rd level, an unchained sylvan trickster gains a +1 bonus on saves against enchantment and illusion spells and effects. This bonus increases by +1 for every 3 levels beyond 3rd.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 67. Galtan Agitator (variant Rake)
  // ──────────────────────────────────────────────
  {
    name: 'Galtan Agitator',
    className: 'Rogue',
    description:
      'The Galtan agitator is a revolutionary who uses rhetoric, mob manipulation, and sabotage to overthrow established authority and incite rebellion.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Rabble Rouser',
        level: 1,
        description:
          'A Galtan agitator adds half her level (minimum +1) on Diplomacy and Intimidate checks to influence crowds. She can shift the attitude of a crowd by two steps with a single check instead of one.',
      },
      {
        name: 'Incite Violence',
        level: 3,
        description:
          "At 3rd level, a Galtan agitator can use a full-round action to attempt an Intimidate check to incite a crowd into a violent mob. The DC is 15 + the crowd's average Hit Dice. A mob under her influence acts hostile toward a target of her choice for 1 minute per rogue level.",
      },
    ],
    source: 'Inner Sea World Guide',
  },

  // ──────────────────────────────────────────────
  // 68. Fey Prankster
  // ──────────────────────────────────────────────
  {
    name: 'Fey Prankster',
    className: 'Rogue',
    description:
      'The fey prankster draws on her connection to the First World to play tricks on foes, using minor illusions and enchantments alongside her roguish skills.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Prank Magic',
        level: 1,
        description:
          'A fey prankster gains prestidigitation and dancing lights as spell-like abilities, usable a number of times per day equal to 3 + her Charisma modifier.',
      },
      {
        name: 'Bewildering Prank',
        level: 3,
        description:
          'At 3rd level, when a fey prankster deals sneak attack damage, the target must succeed on a Will save (DC 10 + half rogue level + Charisma modifier) or become confused for 1 round. This ability can be used a number of times per day equal to her Charisma modifier.',
      },
    ],
    source: 'Ultimate Wilderness',
  },

  // ──────────────────────────────────────────────
  // 69. Grazing Shot
  // ──────────────────────────────────────────────
  {
    name: 'Snoop',
    className: 'Rogue',
    description:
      'The snoop is an investigative rogue who uses keen observation and deductive reasoning to solve crimes and uncover hidden truths, often working with or against the authorities.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: ['Rogue Talents'],
    newFeatures: [
      {
        name: 'Inspiration',
        level: 1,
        description:
          'A snoop gains a limited pool of inspiration, functioning as the investigator class feature. She has a number of inspiration points equal to half her rogue level + her Intelligence modifier (minimum 1).',
      },
      {
        name: 'Eye for Detail',
        level: 3,
        description:
          'At 3rd level, the snoop can use inspiration on Perception, Sense Motive, and Knowledge checks without spending a point of inspiration.',
      },
    ],
    source: 'Advanced Class Guide',
  },

  // ──────────────────────────────────────────────
  // 70. Rogue (Underground Chemist - already above)
  // Bounty Hunter
  // ──────────────────────────────────────────────
  {
    name: 'Bounty Hunter',
    className: 'Rogue',
    description:
      'The bounty hunter tracks down criminals and fugitives for coin, combining tracking skills with urban investigation to locate and capture marks.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Track the Mark',
        level: 1,
        description:
          'A bounty hunter gains a +1 bonus on Perception, Sense Motive, and Survival checks made to track or locate a specific target. This bonus increases by +1 for every 3 rogue levels she possesses.',
      },
      {
        name: 'Dirty Trick',
        level: 3,
        description:
          'At 3rd level, a bounty hunter can deal sneak attack damage as part of a dirty trick combat maneuver. She gains a +1 bonus on dirty trick combat maneuver checks, increasing by +1 for every 3 levels beyond 3rd.',
      },
    ],
    source: 'Ultimate Intrigue',
  },

  // ──────────────────────────────────────────────
  // 71. Pathfinder Delver
  // ──────────────────────────────────────────────
  {
    name: 'Pathfinder Delver',
    className: 'Rogue',
    description:
      'The Pathfinder delver is a member of the Pathfinder Society who specializes in exploring ancient ruins and dangerous dungeons, combining rogue skills with scholarly knowledge of history and arcana.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Deep Delver',
        level: 1,
        description:
          'A Pathfinder delver adds half her level (minimum +1) on Knowledge (dungeoneering), Knowledge (history), and Perception checks made in underground environments or ruins. She also adds half her level on Disable Device checks to disarm magical traps.',
      },
      {
        name: 'Lore of the Ages',
        level: 3,
        description:
          'At 3rd level, a Pathfinder delver gains a +1 bonus on all Knowledge checks. This bonus increases by +1 for every 3 levels beyond 3rd. She can make Knowledge checks untrained, even for obscure facts related to ruins, traps, and ancient civilizations.',
      },
      {
        name: 'Ruin Sense',
        level: 6,
        description:
          'At 6th level, the Pathfinder delver gains the ability to automatically detect the presence of traps within 10 feet, as per the trapfinding class feature. She gains a +2 bonus on saves against magical traps.',
      },
    ],
    source: 'Pathfinder Society Field Guide',
  },

  // ──────────────────────────────────────────────
  // 72. Quah-Nomad
  // ──────────────────────────────────────────────
  {
    name: 'Quah-Nomad',
    className: 'Rogue',
    description:
      'A Shoanti rogue who combines the tracking and combat skills of her nomadic people with roguish cunning, serving as a scout and raider for her quah.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: "Nomad's Training",
        level: 1,
        description:
          'The quah-nomad adds half her level (minimum +1) on Perception, Stealth, and Survival checks in natural environments. She also gains Ride as a class skill and a +1 bonus on Ride checks.',
      },
      {
        name: 'Tribal Weapons',
        level: 1,
        description:
          'The quah-nomad gains proficiency with the klar and earth breaker, weapons traditional to the Shoanti people. She also gains a +1 bonus on attack rolls with these weapons.',
      },
      {
        name: 'Steppe Runner',
        level: 3,
        description:
          'At 3rd level, a quah-nomad gains a +10 foot bonus to her land speed when wearing light or no armor. She also ignores difficult terrain from natural sources (rocky ground, scrub brush, etc.).',
      },
      {
        name: 'Quah Bond',
        level: 5,
        description:
          'The quah-nomad gains a +2 bonus on all attack rolls and saving throws when fighting to protect members of her party, which she considers her adopted quah. She can take a saving throw for an adjacent ally as an immediate action once per day.',
      },
    ],
    source: 'Pathfinder Campaign Setting: Varisia, Birthplace of Legends',
  },

  // ──────────────────────────────────────────────
  // 73. Sea Rover
  // ──────────────────────────────────────────────
  {
    name: 'Sea Rover',
    className: 'Rogue',
    description:
      'The sea rover is a nautical rogue who excels at shipboard combat and maritime thievery, combining seamanship with the traditional skills of a pirate and rogue.',
    replacedFeatures: ['Trapfinding', 'Trap Sense', 'Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Sea-Legs',
        level: 1,
        description:
          'A sea rover gains a +2 bonus on Acrobatics, Climb, and Profession (sailor) checks aboard ships and in aquatic environments. She can always take 10 on these checks, even when distracted.',
      },
      {
        name: 'Boarding Action',
        level: 2,
        description:
          'At 2nd level, the sea rover does not provoke attacks of opportunity when moving through occupied squares on a ship or during shipboard combat. She gains a +1 bonus on attack rolls against opponents who are not yet aware of her.',
      },
      {
        name: "Corsair's Eye",
        level: 3,
        description:
          'At 3rd level, the sea rover gains a +1 bonus on Perception checks and initiative checks while at sea or within sight of large bodies of water. She also gains a +1 bonus on Appraise checks to value stolen goods.',
      },
      {
        name: 'Aquatic Escape',
        level: 8,
        description:
          'At 8th level, the sea rover gains a swim speed equal to half her land speed. She also gains evasion while in or adjacent to water.',
      },
    ],
    source: 'Pathfinder Player Companion: Pirates of the Inner Sea',
  },

  // ──────────────────────────────────────────────
  // 74. Street Boss
  // ──────────────────────────────────────────────
  {
    name: 'Street Boss',
    className: 'Rogue',
    description:
      'The street boss is a criminal leader who controls a small gang or territory, using intimidation and favors to build loyalty and power in the urban underworld.',
    replacedFeatures: ['Trapfinding', 'Evasion', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Gang Leader',
        level: 1,
        description:
          'A street boss gains the Leadership feat as a bonus feat, even if she does not meet the prerequisites. Her Leadership score is increased by 2. She gains Intimidate and Knowledge (local) as class skills if she does not already have them.',
      },
      {
        name: 'Demand Respect',
        level: 2,
        description:
          'At 2nd level, once per day the street boss can demoralize all opponents within 30 feet simultaneously with a single Intimidate check against the highest DC. Affected opponents are shaken for a number of rounds equal to half her rogue level.',
      },
      {
        name: 'Street Connections',
        level: 3,
        description:
          'At 3rd level, the street boss has a network of criminal contacts. She gains a +2 bonus on Gather Information (Diplomacy) checks in any urban settlement. Once per week, she can call in a favor from her network to obtain information, contraband, or a small service worth up to 500 gp.',
      },
      {
        name: 'Iron Fist',
        level: 6,
        description:
          "At 6th level, the street boss's followers and cohort gain a +1 morale bonus on attack rolls and saving throws against fear when they can see or hear her. Opponents who fail a saving throw against her Demand Respect are frightened rather than shaken.",
      },
    ],
    source: 'Pathfinder Campaign Setting: Magnimar, City of Monuments',
  },

  // ──────────────────────────────────────────────
  // 75. Dagger Dancer
  // ──────────────────────────────────────────────
  {
    name: 'Dagger Dancer',
    className: 'Rogue',
    description:
      'A graceful rogue who wields daggers with the fluid movements of a dancer, using momentum and misdirection to land devastating sneak attacks and escape retaliation.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: ['Sneak Attack'],
    newFeatures: [
      {
        name: 'Dancing Knives',
        level: 1,
        description:
          'A dagger dancer gains Weapon Finesse as a bonus feat. When wielding two daggers, she gains a +1 dodge bonus to AC. This bonus increases by +1 for every 4 rogue levels she possesses.',
      },
      {
        name: 'Fluid Motion',
        level: 3,
        description:
          'At 3rd level, the dagger dancer can move up to 10 feet as a free action when she successfully deals sneak attack damage with a dagger, without provoking attacks of opportunity. She can use this ability once per round.',
      },
      {
        name: 'Whirling Death',
        level: 5,
        description:
          'At 5th level, when the dagger dancer makes a full attack while wielding two daggers, she gains one additional attack at her highest base attack bonus at a -5 penalty. She must have the Two-Weapon Fighting feat to use this ability.',
      },
      {
        name: 'Dance of Death',
        level: 9,
        description:
          'At 9th level, once per day as a full-round action the dagger dancer can move up to her speed and attack every enemy she passes adjacent to, making one attack roll against each. She does not provoke attacks of opportunity during this movement.',
      },
    ],
    source: 'Pathfinder Player Companion: Melee Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 76. Unchained Eldritch Scoundrel
  // ──────────────────────────────────────────────
  {
    name: 'Unchained Eldritch Scoundrel',
    className: 'Rogue',
    description:
      'The unchained variant of the eldritch scoundrel applies the wizard-rogue hybrid concept to the unchained rogue chassis, combining spellcasting with debilitating injuries and rogue talents.',
    replacedFeatures: [
      'Finesse Training',
      'Danger Sense',
      'Uncanny Dodge',
      'Improved Uncanny Dodge',
    ],
    modifiedFeatures: ['Sneak Attack', 'Rogue Talents'],
    newFeatures: [
      {
        name: 'Spellcasting',
        level: 1,
        description:
          'An unchained eldritch scoundrel casts arcane spells drawn from the wizard spell list, using Intelligence as her spellcasting ability. She casts as a wizard of her rogue level -3 (minimum 1) and must prepare spells from a spellbook. Her sneak attack progression is one die lower than normal for the unchained rogue.',
      },
      {
        name: 'Alarm Sense',
        level: 4,
        description:
          'At 4th level, an unchained eldritch scoundrel can use detect magic at will as a spell-like ability and gains a +1 bonus on Perception checks to notice magical traps and wards. This bonus increases by +1 for every 4 levels beyond 4th.',
      },
      {
        name: 'Uncanny Alertness',
        level: 8,
        description:
          'At 8th level, the unchained eldritch scoundrel adds her Intelligence modifier to initiative checks. She cannot be caught flat-footed while she has at least one spell slot remaining.',
      },
      {
        name: 'Spell Ambush',
        level: 12,
        description:
          "At 12th level, when the unchained eldritch scoundrel delivers a touch spell as part of a sneak attack, she can apply her sneak attack damage dice to the spell's damage as if the touch attack were a normal sneak attack.",
      },
    ],
    source: 'Pathfinder RPG: Pathfinder Unchained',
  },

  // ──────────────────────────────────────────────
  // 77. Bravado Rogue
  // ──────────────────────────────────────────────
  {
    name: 'Bravado Rogue',
    className: 'Rogue',
    description:
      'The bravado rogue uses confidence and panache as weapons, taunting enemies into rash actions and using their aggressive responses to create openings for devastating attacks.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Taunt',
        level: 1,
        description:
          'As a move action, the bravado rogue can taunt one creature within 30 feet that can hear and understand her. The target must succeed at a Will save (DC 10 + half rogue level + Charisma modifier) or take a -2 penalty on all attack rolls that do not include the bravado rogue as a target. This effect lasts for 1 minute or until the bravado rogue attacks a different creature.',
      },
      {
        name: "Bravado's Opening",
        level: 3,
        description:
          'At 3rd level, the bravado rogue gains a +2 bonus on attack rolls against any creature currently affected by her Taunt ability. She can also deal sneak attack damage to taunted creatures even when they are not flanked or denied their Dexterity bonus, once per round.',
      },
      {
        name: 'Fearless Panache',
        level: 6,
        description:
          'At 6th level, the bravado rogue gains a +2 morale bonus on saving throws against fear and is immune to the shaken condition. Allies within 30 feet who can hear her gain a +1 morale bonus on saves against fear.',
      },
    ],
    source: 'Pathfinder Player Companion: Dirty Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 78. Hidden Blade (Archetype)
  // ──────────────────────────────────────────────
  {
    name: 'Hidden Blade',
    className: 'Rogue',
    description:
      'The hidden blade is a specialist in concealing weapons on her person and drawing them at the most unexpected moment, striking from apparent unarmed helplessness.',
    replacedFeatures: ['Trapfinding', 'Trap Sense', 'Uncanny Dodge'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Conceal Weapon',
        level: 1,
        description:
          'A hidden blade adds half her level (minimum +1) on Sleight of Hand checks to conceal weapons on her person. She can draw a hidden weapon as a free action without provoking attacks of opportunity. Creatures attempting to detect her hidden weapons take a -4 penalty on Perception checks.',
      },
      {
        name: 'Unassuming Assassin',
        level: 3,
        description:
          'At 3rd level, the hidden blade can make a Bluff check to feign being unarmed. If she succeeds, she gains a +2 bonus on attack rolls on her first attack in the same round she draws a concealed weapon. This bonus increases by +1 for every 3 levels beyond 3rd.',
      },
      {
        name: 'Weapon Cache',
        level: 6,
        description:
          'At 6th level, the hidden blade can conceal up to three weapons on her person without any penalty to Sleight of Hand checks. She can also conceal magical items of weapon-like appearance with a +4 bonus on Sleight of Hand.',
      },
    ],
    source: 'Pathfinder Player Companion: Melee Tactics Toolbox',
  },

  // ──────────────────────────────────────────────
  // 79. Improvisational Rogue
  // ──────────────────────────────────────────────
  {
    name: 'Improvisational Rogue',
    className: 'Rogue',
    description:
      'The improvisational rogue is never caught without a weapon, turning anything at hand—from chairs to tankards to loose cobblestones—into deadly instruments of violence.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: [],
    newFeatures: [
      {
        name: 'Improvised Proficiency',
        level: 1,
        description:
          'An improvisational rogue gains the Catch Off-Guard and Throw Anything feats as bonus feats at 1st level. She does not take the -4 penalty on attack rolls for using improvised weapons.',
      },
      {
        name: 'Improvised Sneak Attack',
        level: 1,
        description:
          'An improvisational rogue can deal sneak attack damage with improvised weapons. Improvised weapons deal sneak attack damage as if they were light melee weapons.',
      },
      {
        name: 'Weapon Improvisation',
        level: 3,
        description:
          'At 3rd level, an improvisational rogue can treat improvised weapons as one category better (improvised light weapons deal d6 damage, improvised one-handed weapons deal d8 damage). She also gains the Improvised Weapon Mastery feat at 6th level as a bonus feat.',
      },
      {
        name: 'Environmental Hazard',
        level: 9,
        description:
          'At 9th level, the improvisational rogue can use her surroundings as a weapon. As a full-round action, she can use terrain features (tables, walls, stairs, etc.) as improvised weapons that deal 2d6+Strength modifier damage and have reach equal to her normal reach +5 feet.',
      },
    ],
    source: "Pathfinder Player Companion: Adventurer's Armory 2",
  },

  // ──────────────────────────────────────────────
  // 80. Knife Expert
  // ──────────────────────────────────────────────
  {
    name: 'Knife Expert',
    className: 'Rogue',
    description:
      'A specialist in thrown and melee knife combat who can hurl daggers with deadly precision at impressive ranges while also excelling with them in close-quarters fighting.',
    replacedFeatures: ['Trapfinding', 'Trap Sense'],
    modifiedFeatures: ['Sneak Attack'],
    newFeatures: [
      {
        name: 'Throwing Blades',
        level: 1,
        description:
          'A knife expert can apply sneak attack damage to thrown dagger attacks as if they were melee attacks, as long as the target is within 30 feet. She gains a +1 bonus on attack rolls with thrown daggers and starknives.',
      },
      {
        name: 'Rapid Throw',
        level: 3,
        description:
          'At 3rd level, a knife expert can draw and throw a dagger as a single standard action. She also reduces the penalty for throwing multiple daggers in a round by 1.',
      },
      {
        name: 'Blade Expertise',
        level: 5,
        description:
          'At 5th level, a knife expert gains a +1 bonus on attack and damage rolls with daggers and similar light blades, both in melee and when thrown. This bonus increases by +1 every 4 levels beyond 5th.',
      },
      {
        name: 'Trick Shot',
        level: 9,
        description:
          'At 9th level, the knife expert can use her thrown daggers to perform combat maneuvers at range. She can attempt disarm and dirty trick maneuvers against targets within 30 feet using thrown dagger attacks, substituting her attack bonus for CMB.',
      },
    ],
    source: 'Pathfinder Player Companion: Ranged Tactics Toolbox',
  },
];
