import type { BloodlineEntry } from '@/types/classOptions';

export const sorcererWildblooded: BloodlineEntry[] = [
  {
    id: 'sorcerer-wildblooded-aerial',
    name: 'Aerial (Wildblooded)',
    classIds: ['sorcerer'],
    description: "Your magic is more focused on the power of air and rain than on lightning and thunder. A variant of the Stormborn bloodline, the Aerial bloodline channels atmospheric forces rather than raw electrical discharge.",
    bloodlineArcana: "Whenever you are outdoors during any form of precipitation, your effective caster level is increased by 2. This replaces the standard Stormborn bloodline arcana.",
    powers: [
      {
        name: "Thunderstaff",
        description: "Starting at 1st level, you can touch a weapon and imbue it with the shock special ability for a number of rounds equal to half your sorcerer level (minimum 1). At 9th level, the weapon gains the shocking burst special ability instead, but the duration is halved. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Stormchild",
        description: "At 3rd level, you gain resist electricity 5 and resist sonic 5, and treat wind effects as one step less severe. At 9th level, your resistances increase to 10 and wind effects are treated as two steps less severe. You also gain blindsense 60 feet against concealment from weather.",
        levelGained: 3,
      },
      {
        name: "Windcaller",
        description: "At 9th level, you can call the winds to obey your commands for 1 minute per level. This functions like control winds, except that you may choose to be immune to any increased wind effects you create. The ability's duration does not need to be consecutive, but it must be used in 1-minute increments. This power replaces the Thunderbolt power of the Stormborn bloodline.",
        levelGained: 9,
      },
      {
        name: "Ride the Lightning",
        description: "At 15th level, you can transform yourself into electricity, moving in a straight line up to 10 times your speed in any direction as a full-round action. Creatures in your path are affected as if by your thunderbolt bloodline power. You can use this ability once per day, and the duration lasts for a number of rounds equal to your sorcerer level.",
        levelGained: 15,
      },
      {
        name: "Storm Lord",
        description: "At 20th level, you are immune to deafness and stunning, and are unaffected by wind of any kind. You also gain blindsight 120 feet against concealment from weather. Once per day, you can use the electricity or sonic absorption ability to absorb up to 20 points of electricity or sonic damage per sorcerer level, healing 1 hit point per 3 points of damage prevented.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "shocking grasp",        // 3rd
      "gust of wind",          // 5th
      "lightning bolt",        // 7th
      "shout",                 // 9th
      "overland flight",       // 11th
      "chain lightning",       // 13th
      "control weather",       // 15th
      "whirlwind",             // 17th
      "storm of vengeance",    // 19th
    ],
    bonusFeats: [
      "Deadly Aim",
      "Dodge",
      "Enlarge Spell",
      "Far Shot",
      "Great Fortitude",
      "Point-Blank Shot",
      "Skill Focus (Fly)",
      "Wind Stance",
    ],
    bloodlineSkills: ["Knowledge (nature)"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-anarchic',
    name: 'Anarchic (Wildblooded)',
    classIds: ['sorcerer'],
    description: "Your magical power taps into pure anarchy. A variant of the Protean bloodline, the Anarchic bloodline channels the chaotic essence of disorder itself rather than the more measured shapeshifting of true proteans.",
    bloodlineArcana: "When you fail a concentration check to cast a spell, a randomly determined cantrip effect is triggered. There is a 50% chance it affects a target of your choice within 60 feet; otherwise it affects you. This replaces the Protean bloodline arcana.",
    powers: [
      {
        name: "Protoplasm",
        description: "At 1st level, you can create a globe of entropic protoplasm and hurl it at any target within 30 feet as a ranged touch attack. This glob functions as a tanglefoot bag, but in addition deals 1 point of acid damage each round until removed. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Wild Feedback",
        description: "At 3rd level, when you successfully dispel or counterspell an opponent's spell, the caster (if it is within 100 feet) takes 1d6 points of damage +1 per level of the spell affected. This power replaces Protean Resistances.",
        levelGained: 3,
      },
      {
        name: "Reality Wrinkle",
        description: "At 9th level, you can surround yourself with a mobile, 10-foot-radius aura of scrambled reality as a standard action. Attacks made through this aura have a 20% miss chance. You can use this ability for a number of rounds per day equal to your sorcerer level. These rounds need not be consecutive.",
        levelGained: 9,
      },
      {
        name: "Spatial Tear",
        description: "At 15th level, when you use dimension door, you leave a rift in space that lasts 1 round per 5 sorcerer levels. Any creature that passes through the rift is affected as if by black tentacles.",
        levelGained: 15,
      },
      {
        name: "Avatar of Chaos",
        description: "At 20th level, you gain immunity to acid, petrification, and polymorph effects (except those you cast on yourself).",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "entropic shield",       // 3rd
      "blur",                  // 5th
      "gaseous form",          // 7th
      "confusion",             // 9th
      "major creation",        // 11th
      "disintegrate",          // 13th
      "greater polymorph",     // 15th
      "polymorph any object",  // 17th
      "shapechange",           // 19th
    ],
    bonusFeats: [
      "Agile Maneuvers",
      "Defensive Combat Training",
      "Enlarge Spell",
      "Great Fortitude",
      "Improved Great Fortitude",
      "Skill Focus (Craft)",
      "Spell Focus",
      "Toughness",
    ],
    bloodlineSkills: ["Knowledge (planes)"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-bedrock',
    name: 'Bedrock (Wildblooded)',
    classIds: ['sorcerer'],
    description: "Your earth magic is more defensive than offensive. A variant of the Deep Earth bloodline, the Bedrock bloodline draws upon the unyielding, protective qualities of stone and deep earth rather than its trembling, resonant nature.",
    bloodlineArcana: "Whenever you cast a spell of the summoning subschool, the creatures summoned gain DR/adamantine equal to 1/2 your sorcerer level (minimum 1). This does not stack with any DR the creature might have. This replaces the Deep Earth bloodline arcana.",
    powers: [
      {
        name: "Tremor",
        description: "At 1st level, you can make one creature or object within 30 feet of you vibrate violently for 1 round. You can use this ability as a standard action, and the tremor acts as a trip maneuver using your sorcerer level plus your Charisma modifier in place of your CMB. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Rockseer",
        description: "At 3rd level, you gain the stonecunning ability as a dwarf. At 9th level, you gain tremorsense 30 feet. At 15th level, you can use x-ray vision to see through solid objects for a number of rounds per day equal to your sorcerer level.",
        levelGained: 3,
      },
      {
        name: "Iron Hide",
        description: "At 9th level, as a swift action, you can grant yourself DR 10/adamantine for a number of rounds per day equal to your sorcerer level. The rounds do not need to be used consecutively. This power replaces Crystal Shard.",
        levelGained: 9,
      },
      {
        name: "Earth Glide",
        description: "At 15th level, you can glide through any sort of natural earth or stone as easily as a fish swims through water, at a speed of half your normal speed. You do not leave a tunnel or hole, nor do you create any ripple or other signs of your presence. You can use this ability for a number of minutes per day equal to your sorcerer level, in 1-minute increments.",
        levelGained: 15,
      },
      {
        name: "Strength of Stone",
        description: "At 20th level, your body becomes infused with the strength of deep stone. You gain DR 10/adamantine, immunity to petrification, and immunity to bull rush, drag, grapple, reposition, and trip combat maneuvers while standing on the ground.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "expeditious excavation",  // 3rd
      "darkvision",              // 5th
      "shifting sand",           // 7th
      "stoneskin",               // 9th
      "spike stones",            // 11th
      "stone tell",              // 13th
      "repel metal or stone",    // 15th
      "earthquake",              // 17th
      "clashing rocks",          // 19th
    ],
    bonusFeats: [
      "Acrobatic Steps",
      "Alertness",
      "Blind-Fight",
      "Forge Ring",
      "Nimble Moves",
      "Skill Focus (Perception)",
      "Stealthy",
      "Still Spell",
    ],
    bloodlineSkills: ["Knowledge (dungeoneering)"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-brutal',
    name: 'Brutal (Wildblooded)',
    classIds: ['sorcerer'],
    description: "The powers of the Abyss can vary radically, even for similar fiends. A variant of the Abyssal bloodline, the Brutal bloodline emphasizes raw destructive force over demonic summoning and infernal strength.",
    bloodlineArcana: "Whenever you cast a spell that deals hit point damage, one target of your choice affected by the spell takes 2 additional hit points of damage. This replaces the Abyssal bloodline arcana.",
    powers: [
      {
        name: "Claws",
        description: "At 1st level, you can grow claws as a free action. These claws are treated as natural weapons, allowing you to make two claw attacks as a full attack action using your full base attack bonus. These attacks deal 1d4 points of damage each (1d3 if you are Small) plus your Strength modifier. At 5th level, these claws are considered magic weapons for the purpose of overcoming DR. At 7th level, the damage increases by one step to 1d6 points of damage (1d4 if you are Small). At 11th level, these claws become flaming weapons, each dealing an additional 1d6 points of fire damage on a successful hit. You can use your claws for a number of rounds per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Demon Resistances",
        description: "At 3rd level, you gain resist electricity 5 and a +2 bonus on saving throws made against poison. At 9th level, your resistance to electricity increases to 10 and your bonus on poison saving throws increases to +4.",
        levelGained: 3,
      },
      {
        name: "Wings of the Abyss",
        description: "At 9th level, you can sprout leathery wings and fly for a number of minutes per day equal to your sorcerer level, with a speed of 60 feet and good maneuverability. This duration does not need to be consecutive, but it must be used in 1-minute increments. This power replaces Strength of the Abyss.",
        levelGained: 9,
      },
      {
        name: "Added Summonings",
        description: "At 15th level, whenever you summon a creature with the demon subtype or the fiendish template using a summon monster spell, you summon one additional creature of the same kind.",
        levelGained: 15,
      },
      {
        name: "Demonic Might",
        description: "At 20th level, the power of the Abyss flows through you. You gain immunity to electricity and poison, and resistance 10 to acid, cold, and fire. You also gain telepathy with a range of 60 feet.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "cause fear",        // 3rd
      "bull's strength",   // 5th
      "rage",              // 7th
      "stoneskin",         // 9th
      "dismissal",         // 11th
      "transformation",    // 13th
      "greater teleport",  // 15th
      "unholy aura",       // 17th
      "summon monster IX", // 19th
    ],
    bonusFeats: [
      "Augment Summoning",
      "Cleave",
      "Empower Spell",
      "Great Fortitude",
      "Improved Bull Rush",
      "Improved Sunder",
      "Power Attack",
      "Skill Focus (Knowledge [planes])",
    ],
    bloodlineSkills: ["Knowledge (planes)"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-dark-fey',
    name: 'Dark Fey (Wildblooded)',
    classIds: ['sorcerer'],
    description: "Your powers were born of malevolent trickery and shadowy magic. A variant of the Fey bloodline, the Dark Fey bloodline channels the sinister aspects of fey nature — illusion, fascination, and cursed glamour — rather than whimsical caprice.",
    bloodlineArcana: "Whenever you cast a spell with the curse descriptor, increase the spell's DC by 2. This replaces the Fey bloodline arcana.",
    powers: [
      {
        name: "Fey Fascination",
        description: "As a standard action, you can force one target within 30 feet to make a Will save (DC = 10 + 1/2 your sorcerer level + your Charisma modifier) or be fascinated for 1 round for every 2 sorcerer levels you possess (minimum 1). This is a mind-affecting, illusion (pattern) effect. You can use this ability a number of times per day equal to 3 + your Charisma modifier. This power replaces Laughing Touch.",
        levelGained: 1,
      },
      {
        name: "Woodland Stride",
        description: "At 3rd level, you can move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at your normal speed and without taking damage or suffering any other impairment. Thorns, briars, and overgrown areas that have been magically manipulated to impede motion still affect you.",
        levelGained: 3,
      },
      {
        name: "Fleeting Glance",
        description: "At 9th level, you can turn invisible for a number of rounds per day equal to your sorcerer level. This ability functions as greater invisibility. These rounds need not be consecutive.",
        levelGained: 9,
      },
      {
        name: "Fey Magic",
        description: "At 15th level, you can reroll any caster level check made to overcome spell resistance. You must decide to use this ability after the first roll is made but before the results are revealed. You must take the second result, even if it is worse.",
        levelGained: 15,
      },
      {
        name: "Soul of the Fey",
        description: "At 20th level, your soul becomes one with the world of the fey. You gain immunity to poison, and gain DR 10/cold iron. Animals do not willingly attack you unless magically compelled to do so. Once per day, you can cast shadow walk as a spell-like ability.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "entangle",           // 3rd
      "hideous laughter",   // 5th
      "deep slumber",       // 7th
      "poison",             // 9th
      "tree stride",        // 11th
      "mislead",            // 13th
      "phase door",         // 15th
      "irresistible dance", // 17th
      "shapechange",        // 19th
    ],
    bonusFeats: [
      "Dodge",
      "Improved Initiative",
      "Lightning Reflexes",
      "Mobility",
      "Point-Blank Shot",
      "Precise Shot",
      "Quicken Spell",
      "Skill Focus (Knowledge [nature])",
    ],
    bloodlineSkills: ["Knowledge (nature)"],
    source: "pf1e-ppc-por",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-empyreal',
    name: 'Empyreal (Wildblooded)',
    classIds: ['sorcerer'],
    description: "Your heavenly power derives from insight rather than from force of personality. A variant of the Celestial bloodline, the Empyreal bloodline draws upon divine wisdom and perception, channeling holy power through intellect and devotion rather than charismatic force.",
    bloodlineArcana: "You use Wisdom instead of Charisma to determine all class features and effects relating to your sorcerer class, such as bonus spells per day, maximum spell level you can cast, and the save DCs of your spells. You gain a +2 bonus on Heal and Knowledge (religion) checks. This replaces the Celestial bloodline arcana.",
    powers: [
      {
        name: "Heavenly Fire",
        description: "Starting at 1st level, you can unleash a ray of heavenly fire as a standard action, targeting any foe within 30 feet as a ranged touch attack. Against evil creatures, this ray deals 1d4 points of damage + 1 for every two sorcerer levels you possess; this damage is divine and not subject to energy resistance or immunity. This ray heals good creatures of the same amount. Neutral creatures are unaffected by this ray. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.",
        levelGained: 1,
      },
      {
        name: "Celestial Resistances",
        description: "At 3rd level, you gain resist acid 5 and resist cold 5. At 9th level, your resistances increase to 10.",
        levelGained: 3,
      },
      {
        name: "Sacred Cistern",
        description: "At 9th level, you can channel energy once per day as a cleric of your sorcerer level -4. This power replaces Wings of Heaven.",
        levelGained: 9,
      },
      {
        name: "Conviction",
        description: "At 15th level, you can reroll any one ability check, attack roll, skill check, or saving throw you have just made. You must decide to use this ability before the result of the roll is revealed. You must take the second result, even if it is worse. Once per day.",
        levelGained: 15,
      },
      {
        name: "Ascension",
        description: "At 20th level, you become infused with the power of the heavens. You gain immunity to acid, cold, and petrification. You also gain resistance 10 to electricity and fire, a +4 racial bonus on saves against poison, and the ability to speak with any creature that has a language (as the tongues spell, continuously active). Your Wings of Heaven ability (if gained by level) becomes unlimited in duration.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "bless",                  // 3rd
      "resist energy",          // 5th
      "magic circle against evil", // 7th
      "remove curse",           // 9th
      "flame strike",           // 11th
      "greater dispel magic",   // 13th
      "banishment",             // 15th
      "sunburst",               // 17th
      "gate",                   // 19th
    ],
    bonusFeats: [
      "Dodge",
      "Extend Spell",
      "Iron Will",
      "Mobility",
      "Mounted Combat",
      "Ride-By Attack",
      "Skill Focus (Knowledge [religion])",
      "Weapon Finesse",
    ],
    bloodlineSkills: ["Heal"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-envenomed',
    name: 'Envenomed (Wildblooded)',
    classIds: ['sorcerer'],
    description: "The ophidian source of your bloodline has more to do with stealth and assassination than it does with leadership and alliances. A variant of the Serpentine bloodline, the Envenomed bloodline focuses on delivering deadly venom and moving unseen rather than commanding others.",
    bloodlineArcana: "You gain a +2 bonus on Acrobatics, Climb, and Stealth checks. This replaces the Serpentine bloodline arcana.",
    powers: [
      {
        name: "Serpent's Fang",
        description: "At 1st level, you can grow fangs as a free action. These fangs are treated as a natural weapon, allowing you to make a bite attack as if you were proficient with it. This attack deals 1d4 points of damage plus your Strength modifier (1d3 if you are Small). In addition, your fangs deliver a poison with the following stats: Bite — injury; save Fort (DC = 10 + 1/2 your sorcerer level + your Constitution modifier); frequency 1/round for 6 rounds; effect 1d3 Str damage; cure 1 save. At 5th level, your fangs are considered magic weapons for the purpose of overcoming DR. At 7th level, the damage increases by one step to 1d6 (1d4 if you are Small). At 11th level, the poison frequency is extended to 1/round for 8 rounds. You can use your fangs for a number of rounds per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Envenom",
        description: "At 3rd level, as a swift action, you can lick or bite a melee weapon to imbue it with 1 dose of black adder venom. The poison's DC equals 10 + 1/2 your sorcerer level + your Charisma modifier. You can use this ability once per day at 3rd level, plus one additional time per day for every three sorcerer levels you possess beyond 3rd. The poison cannot be removed or stored, and it dissipates after the first successful attack or 1 hour, whichever comes first. This power replaces Serpentfriend.",
        levelGained: 3,
      },
      {
        name: "Snakeskin",
        description: "At 9th level, you gain a +1 natural armor bonus to AC, a +2 racial bonus on saves against poison, and a +2 bonus on Escape Artist checks. At 13th level, your natural armor increases to +2 and your racial bonus on saves against poison increases to +4. At 17th level, your natural armor increases to +4.",
        levelGained: 9,
      },
      {
        name: "Den of Vipers",
        description: "At 15th level, you can use creeping doom as a spell-like ability once per day, except that you summon 3d6 swarms of venomous snakes. These serpent swarms have the same statistics as centipede swarms, except that they have the poison ability.",
        levelGained: 15,
      },
      {
        name: "Scaled Soul",
        description: "At 20th level, you gain the shapechanger subtype. You can take on the form of a Medium snake or a snake-humanoid hybrid as a standard action. In the hybrid form, your fangs deal 1d6 damage (plus poison). You become immune to poison and paralysis.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "hypnotism",              // 3rd
      "delay poison",           // 5th
      "summon monster III",     // 7th (reptiles only)
      "poison",                 // 9th
      "hold monster",           // 11th
      "mass suggestion",        // 13th
      "summon monster VII",     // 15th (reptiles only)
      "irresistible dance",     // 17th
      "dominate monster",       // 19th
    ],
    bonusFeats: [
      "Combat Casting",
      "Combat Reflexes",
      "Deceitful",
      "Deft Hands",
      "Persuasive",
      "Silent Spell",
      "Skill Focus (Bluff)",
      "Stealthy",
    ],
    bloodlineSkills: ["Diplomacy"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-groveborn',
    name: 'Groveborn (Wildblooded)',
    classIds: ['sorcerer'],
    description: "Some plant magic is more green, while some is more brown, like hardwood. A variant of the Verdant bloodline, the Groveborn bloodline channels the generative, sustaining power of plant life into summoned creatures and allies.",
    bloodlineArcana: "Your powers of compulsion can affect even plant creatures. Whenever you cast a mind-affecting or language-dependent spell, it affects creatures of the plant type as if they were humanoids that understood your language. This replaces the Verdant bloodline arcana.",
    powers: [
      {
        name: "Tanglevine",
        description: "At 1st level, as a standard action, you can create a 15-foot-long vine that springs from your hand. You can use this vine to make a single combat maneuver check to trip, disarm, or pull (drag) an opponent. For the purpose of this maneuver, your sorcerer level counts as your base attack bonus, and you use your Charisma modifier in place of your Strength modifier. The vine disappears after the attempt, whether or not it is successful. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Lush Summoning",
        description: "At 3rd level, whenever you summon a creature via a conjuration (summoning) spell, you may give it a plant-like appearance (green and leafy). The summoned creature gains a +2 bonus to natural armor and a +4 bonus on saving throws against paralysis, poison, polymorph, sleep, and stunning effects. This power replaces Photosynthesis.",
        levelGained: 3,
      },
      {
        name: "Massmorph",
        description: "At 9th level, as a full-round action, you can alter the size and health of natural plants. Alternatively, you can use this ability to transform willing creatures into trees using tree shape. At 15th level, willing non-plant creatures can use plant shape I, and at 20th level, plant shape II. Usable once per day for non-plant creatures.",
        levelGained: 9,
      },
      {
        name: "Rooting",
        description: "At 15th level, as a move action, you can extend roots into the ground below you, reducing your speed to 5 feet but granting you a +4 bonus to natural armor, a +10 bonus to CMD against bull rush, drag, overrun, reposition, and trip attempts, tremorsense 30 feet, and fast healing 1. You can use this ability for a number of minutes per day equal to your sorcerer level.",
        levelGained: 15,
      },
      {
        name: "Shepherd of the Trees",
        description: "At 20th level, you gain a permanent +4 bonus to natural armor and become immune to paralysis, poison, polymorph, sleep, and stunning. You also gain permanent tremorsense 30 feet.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "entangle",              // 3rd
      "barkskin",              // 5th
      "speak with plants",     // 7th
      "command plants",        // 9th
      "wall of thorns",        // 11th
      "transport via plants",  // 13th
      "plant shape III",       // 15th
      "animate plants",        // 17th
      "shambler",              // 19th
    ],
    bonusFeats: [
      "Acrobatic Steps",
      "Craft Staff",
      "Endurance",
      "Extend Spell",
      "Fleet",
      "Nimble Moves",
      "Skill Focus (Knowledge [nature])",
      "Toughness",
    ],
    bloodlineSkills: ["Knowledge (nature)"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-karmic',
    name: 'Karmic (Wildblooded)',
    classIds: ['sorcerer'],
    description: "The universe punishes those who interfere with destiny. A variant of the Destined bloodline, the Karmic bloodline channels retributive fate, punishing those who seek to disrupt the natural order of events.",
    bloodlineArcana: "When you fail a concentration check to cast a spell defensively due to a threatening creature, one threatening creature of your choice provokes an attack of opportunity from you or an adjacent ally of your choice. You determine which creature provokes the attack of opportunity and which of your allies may make it. This replaces the Destined bloodline arcana.",
    powers: [
      {
        name: "Fate's Retribution",
        description: "At 1st level, when a creature hits you with a melee attack, you can curse the attacker as an immediate action. The target takes a -2 penalty on all attack rolls and damage rolls for 1d4 rounds. A Will save (DC 10 + 1/2 your sorcerer level + your Charisma modifier) negates this effect. You can use this ability a number of times per day equal to 3 + your Charisma modifier. This power replaces Touch of Destiny.",
        levelGained: 1,
      },
      {
        name: "Fated",
        description: "At 3rd level, you gain a +1 luck bonus on all saving throws and to AC during surprise rounds. This bonus increases by +1 for every four sorcerer levels you possess beyond 3rd (to a maximum of +5 at 19th level).",
        levelGained: 3,
      },
      {
        name: "It Was Meant To Be",
        description: "At 9th level, once per day, you may reroll any one attack roll, critical hit confirmation roll, or spell resistance check that you have just made. You must decide to use this ability after the d20 roll has been made but before the results are revealed. You must take the second result, even if it is worse. At 17th level, you may use this ability twice per day.",
        levelGained: 9,
      },
      {
        name: "Within Reach",
        description: "At 15th level, your destiny makes you difficult to kill. Once per day, when damage would cause you to fall below 0 hit points, you may make a DC 20 Will save. If successful, you are instead reduced to -1 hit points.",
        levelGained: 15,
      },
      {
        name: "Destiny Realized",
        description: "At 20th level, you are a master of destiny. Critical threats against you are only confirmed on a natural 20. Whenever you score a critical threat with a spell, the critical is automatically confirmed. Once per day, you can automatically succeed at one caster level check as if you had rolled a natural 20.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "alarm",                   // 3rd
      "blur",                    // 5th
      "protection from energy",  // 7th
      "freedom of movement",     // 9th
      "break enchantment",       // 11th
      "mislead",                 // 13th
      "spell turning",           // 15th
      "moment of prescience",    // 17th
      "foresight",               // 19th
    ],
    bonusFeats: [
      "Arcane Strike",
      "Diehard",
      "Endurance",
      "Leadership",
      "Lightning Reflexes",
      "Maximize Spell",
      "Skill Focus (Knowledge [history])",
      "Weapon Focus",
    ],
    bloodlineSkills: ["Knowledge (history)"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-lifewater',
    name: 'Lifewater (Wildblooded)',
    classIds: ['sorcerer'],
    description: "Your soul is infused with the restorative and life-giving powers of elemental water. A variant of the Elemental (Water) bloodline, the Lifewater bloodline channels the healing and sustaining aspects of pure water rather than its destructive cold.",
    bloodlineArcana: "Whenever you cast a spell with the cold or water descriptor, you gain a number of temporary hit points equal to the spell's level. Half of these temporary hit points (rounded down) can be transferred to one adjacent ally as part of the same action. These temporary hit points last 1 minute. This replaces the Elemental bloodline arcana.",
    powers: [
      {
        name: "Elemental Ray",
        description: "Starting at 1st level, you can unleash an elemental ray as a standard action, targeting any foe within 30 feet as a ranged touch attack. This ray deals 1d6 points of cold damage + 1 for every two sorcerer levels you possess. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Elemental Resistance",
        description: "At 3rd level, you gain energy resistance 10 against cold. At 9th level, your resistance increases to 20.",
        levelGained: 3,
      },
      {
        name: "Lifewater Stream",
        description: "At 9th level, once per day, you can unleash a 30-foot line of restorative water as a standard action. Any creature in the area loses one of the following conditions: fatigued, shaken, or sickened. If the creature is exhausted, it becomes fatigued instead. If it is frightened or panicked, it becomes shaken instead. If it is nauseated, it becomes sickened instead. At 17th level, you can use this ability twice per day, and the list of conditions you can remove expands to include blinded, deafened, dazed, and staggered. At 20th level, you can use this ability three times per day. This power replaces Elemental Blast.",
        levelGained: 9,
      },
      {
        name: "Elemental Movement",
        description: "At 15th level, you gain a swim speed of 60 feet.",
        levelGained: 15,
      },
      {
        name: "Elemental Body",
        description: "At 20th level, you gain immunity to sneak attacks, critical hits, and cold damage.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "burning hands",           // 3rd (cold damage)
      "scorching ray",           // 5th (cold damage)
      "protection from energy",  // 7th
      "elemental body I",        // 9th
      "elemental body II",       // 11th
      "elemental body III",      // 13th
      "elemental body IV",       // 15th
      "summon monster VIII",     // 17th (elementals only)
      "elemental swarm",         // 19th
    ],
    bonusFeats: [
      "Dodge",
      "Empower Spell",
      "Great Fortitude",
      "Improved Initiative",
      "Lightning Reflexes",
      "Power Attack",
      "Skill Focus (Knowledge [planes])",
      "Weapon Finesse",
    ],
    bloodlineSkills: ["Knowledge (planes)"],
    source: "pf1e-ppc-bote",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-linnorm',
    name: 'Linnorm (Wildblooded)',
    classIds: ['sorcerer'],
    description: "Your draconic heritage stems from a mighty, primordial linnorm rather than from the more common, somewhat civilized dragons. A variant of the Draconic bloodline, the Linnorm bloodline taps into the raw, feral power of ancient linnorms — unpredictable and fierce compared to true dragons.",
    bloodlineArcana: "Whenever you cast a spell with an energy descriptor that matches your linnorm bloodline's energy type, you gain a natural armor bonus equal to the spell's level for 1d4 rounds. This replaces the Draconic bloodline arcana.",
    powers: [
      {
        name: "Elemental Spit",
        description: "At 1st level, you can fire an elemental ray that matches your linnorm bloodline's energy type as a standard action, targeting any foe within 30 feet as a ranged touch attack. The ray deals 1d6 points of damage + 1 for every two sorcerer levels you possess. You can use this ability a number of times per day equal to 3 + your Charisma modifier. This power replaces the Draconic bloodline's Claws ability.",
        levelGained: 1,
      },
      {
        name: "Dragon Resistances",
        description: "At 3rd level, you gain resist 5 against your energy type and a +1 natural armor bonus. At 9th level, your resistance increases to 10 and your natural armor bonus increases to +2. At 15th level, your natural armor bonus increases to +4.",
        levelGained: 3,
      },
      {
        name: "Breath Weapon",
        description: "At 9th level, you gain a breath weapon. As a standard action, you can breathe a 30-foot cone (or 60-foot line, depending on dragon type) of energy that deals 1d6 points of damage per sorcerer level. Those caught in the area can attempt a Reflex save (DC 10 + 1/2 your sorcerer level + your Charisma modifier) for half damage. You can use this ability once per day at 9th level, twice per day at 17th level, and three times per day at 20th level.",
        levelGained: 9,
      },
      {
        name: "Wings",
        description: "At 15th level, leathery dragon wings grow from your back as a standard action, giving you a fly speed of 60 feet with average maneuverability. You can dismiss the wings as a free action.",
        levelGained: 15,
      },
      {
        name: "Power of Wyrms",
        description: "At 20th level, your draconic heritage becomes manifest. You gain blindsense 60 feet. You become immune to paralysis, sleep, and damage of your energy type.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "mage armor",          // 3rd
      "resist energy",       // 5th
      "fly",                 // 7th
      "fear",                // 9th
      "spell resistance",    // 11th
      "form of the dragon I",   // 13th
      "form of the dragon II",  // 15th
      "form of the dragon III", // 17th
      "wish",                // 19th
    ],
    bonusFeats: [
      "Blind-Fight",
      "Great Fortitude",
      "Improved Initiative",
      "Power Attack",
      "Quicken Spell",
      "Skill Focus (Fly)",
      "Skill Focus (Knowledge [arcana])",
      "Toughness",
    ],
    bloodlineSkills: ["Perception"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-pit-touched',
    name: 'Pit-Touched (Wildblooded)',
    classIds: ['sorcerer'],
    description: "Your diabolic corruption is from a source in the deepest parts of Hell. A variant of the Infernal bloodline, the Pit-Touched bloodline draws upon the most punishing and physically domineering aspects of infernal power, granting preternatural resilience and intimidation rather than silver-tongued manipulation.",
    bloodlineArcana: "Whenever you cast a spell, you gain a bonus on Intimidate checks equal to the spell's level for 1 round. This replaces the Infernal bloodline arcana.",
    powers: [
      {
        name: "Corrupting Touch",
        description: "At 1st level, you can cause a creature to become shaken as a melee touch attack. This effect persists for a number of rounds equal to 1/2 your sorcerer level (minimum 1). Creatures shaken by this ability radiate an aura of evil. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Infernal Resistances",
        description: "At 3rd level, you gain resist fire 5 and a +2 bonus on saving throws made against poison. At 9th level, your resistance to fire increases to 10 and your bonus on poison saving throws increases to +4.",
        levelGained: 3,
      },
      {
        name: "Tough as Hell",
        description: "At 9th level, you gain a +2 inherent bonus to your Constitution. This bonus increases to +4 at 13th level, and to +6 at 17th level. This power replaces Hellfire.",
        levelGained: 9,
      },
      {
        name: "On Dark Wings",
        description: "At 15th level, you can grow bat wings as a standard action, giving you a fly speed of 60 feet with average maneuverability. You can dismiss these wings as a free action.",
        levelGained: 15,
      },
      {
        name: "Power of the Pit",
        description: "At 20th level, your diabolic essence is complete. You gain immunity to fire and poison. You gain resist acid 10 and resist cold 10. You also gain darkvision 60 feet; if you already have darkvision, its range is extended by 60 feet.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "protection from good",  // 3rd
      "scorching ray",         // 5th
      "suggestion",            // 7th
      "charm monster",         // 9th
      "dominate person",       // 11th
      "planar binding",        // 13th (devils only)
      "greater teleport",      // 15th
      "power word stun",       // 17th
      "meteor swarm",          // 19th
    ],
    bonusFeats: [
      "Blind-Fight",
      "Combat Expertise",
      "Deceitful",
      "Extend Spell",
      "Improved Disarm",
      "Iron Will",
      "Skill Focus (Knowledge [planes])",
      "Spell Penetration",
    ],
    bloodlineSkills: ["Diplomacy"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-primal',
    name: 'Primal (Wildblooded)',
    classIds: ['sorcerer'],
    description: "Your powers are attuned to the concentrated core of the elemental plane. A variant of the Elemental bloodline, the Primal bloodline channels the concentrated essence of elemental power, enhancing summoned beings with elemental energy rather than unleashing raw elemental blasts.",
    bloodlineArcana: "Whenever you cast a spell with an energy descriptor that matches your elemental bloodline's energy type, that spell deals +1 point of damage per die rolled. This modifies the standard Elemental bloodline arcana.",
    powers: [
      {
        name: "Elemental Ray",
        description: "Starting at 1st level, you can unleash an elemental ray as a standard action, targeting any foe within 30 feet as a ranged touch attack. This ray deals 1d6 points of damage of your energy type + 1 for every two sorcerer levels you possess. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Elemental Resistance",
        description: "At 3rd level, you gain energy resistance 10 against your energy type. At 9th level, your resistance increases to 20.",
        levelGained: 3,
      },
      {
        name: "Elementalist Summoning",
        description: "At 9th level, whenever you summon a creature, it gains energy resistance 10 against the energy type that matches your elemental bloodline (if it already has such resistance, its resistance increases by +5 instead), and its natural attacks deal an additional 1d6 points of damage of the same energy type. This power replaces Elemental Blast.",
        levelGained: 9,
      },
      {
        name: "Elemental Movement",
        description: "At 15th level, you gain a special movement type based on your element: Air grants fly 60 feet (average); Earth grants burrow 30 feet; Fire grants +30 feet to base speed; Water grants swim 60 feet.",
        levelGained: 15,
      },
      {
        name: "Elemental Body",
        description: "At 20th level, you gain immunity to sneak attacks, critical hits, and damage of your energy type.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "burning hands",           // 3rd (energy type varies)
      "scorching ray",           // 5th (energy type varies)
      "protection from energy",  // 7th
      "elemental body I",        // 9th
      "elemental body II",       // 11th
      "elemental body III",      // 13th
      "elemental body IV",       // 15th
      "summon monster VIII",     // 17th (elementals only)
      "elemental swarm",         // 19th
    ],
    bonusFeats: [
      "Dodge",
      "Empower Spell",
      "Great Fortitude",
      "Improved Initiative",
      "Lightning Reflexes",
      "Power Attack",
      "Skill Focus (Knowledge [planes])",
      "Weapon Finesse",
    ],
    bloodlineSkills: ["Knowledge (planes)"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-retribution',
    name: 'Retribution (Wildblooded)',
    classIds: ['sorcerer'],
    description: "One of your ancestors was unjustly executed, and your soul is infused with this forebear's vengeful spirit. A variant of the Martyred bloodline, the Retribution bloodline channels the fury of injustice and the power of vengeance rather than the endurance of suffering.",
    bloodlineArcana: "Whenever a creature damages you, until the end of your next turn if you apply a metamagic feat to a spell that targets that creature, reduce the spell level increase of that metamagic feat by 1 (minimum 0). This replaces the Martyred bloodline arcana.",
    powers: [
      {
        name: "Sacrificial Boon",
        description: "At 1st level, as an immediate action, you can spend 1 hit point to gain a +1 sacred bonus on your next damage roll, saving throw, or skill check. This bonus must be used before the end of your next turn. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Rallying Cry",
        description: "At 3rd level, once per day as a standard action, you can issue a rallying cry. You and all allies within 30 feet gain a +1 morale bonus on attack rolls and damage rolls for a number of rounds equal to 1/2 your sorcerer level. This bonus increases to +2 at 9th level, +3 at 13th level, +4 at 17th level, and +5 at 19th level.",
        levelGained: 3,
      },
      {
        name: "Vengeful Strike",
        description: "At 9th level, once per day, after a foe has damaged you in melee, as an immediate action you can deal the same amount and type of damage to your foe (maximum amount of damage equal to double your character level). At 17th level, you can use this ability twice per day. This power replaces Gift of Blood.",
        levelGained: 9,
      },
      {
        name: "Sacrificial Exchange",
        description: "At 15th level, once per day as a free action, you can take 2 points of temporary ability damage to one ability score to gain a +2 inherent bonus to a different ability score for up to 1 hour per sorcerer level. At 20th level, you can use this ability twice per day.",
        levelGained: 15,
      },
      {
        name: "Eternal Martyr",
        description: "At 20th level, you are immune to death effects. The material component cost for spells that would raise you from the dead is reduced by 50%. If you would become undead, you instead die (and may be resurrected normally).",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "endure elements",        // 3rd
      "surmount affliction",    // 5th
      "heroism",                // 7th
      "blessing of fervor",     // 9th
      "death ward",             // 11th
      "greater heroism",        // 13th
      "joyful rapture",         // 15th
      "mind blank",             // 17th
      "overwhelming presence",  // 19th
    ],
    bonusFeats: [
      "Diehard",
      "Endurance",
      "Heroic Defiance",
      "Heroic Recovery",
      "Leadership",
      "Persuasive",
      "Skill Focus (Perform)",
      "Toughness",
    ],
    bloodlineSkills: ["Perform (oratory)"],
    source: "pf1e-ppc-por",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-rime-blooded',
    name: 'Rime-Blooded (Wildblooded)',
    classIds: ['sorcerer'],
    description: "The wintry origin of your magic flows like ice water in your veins. A variant of the Boreal bloodline, the Rime-Blooded bloodline channels biting cold and slowing ice rather than the storm winds and giant-kin might of the north.",
    bloodlineArcana: "When you cast a spell with the cold descriptor, you may select one target of the spell to be slowed (as the slow spell) for 1 round. A Fortitude save (DC 10 + the level of the cold spell + your Charisma modifier) negates this effect. This replaces the Boreal bloodline arcana.",
    powers: [
      {
        name: "Cold Steel",
        description: "At 1st level, you can touch a weapon or up to 50 pieces of ammunition as a standard action, granting it the frost special ability for a number of rounds equal to 1/2 your sorcerer level (minimum 1). At 9th level, the weapon gains the icy burst special ability instead, but the duration is halved. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Icewalker",
        description: "At 3rd level, you gain resist cold 5 and can move across snow and ice-covered terrain without penalty or leaving tracks. At 9th level, your resistance increases to 10 and you can move across icy surfaces as if under the effects of spider climb.",
        levelGained: 3,
      },
      {
        name: "Freezing Bolt",
        description: "At 9th level, you can cause the air to erupt in freezing sleet as a standard action. This 10-foot-radius burst deals 1d6 points of cold damage per sorcerer level (Reflex half, DC 10 + 1/2 your sorcerer level + your Charisma modifier). The burst has a range of 60 feet. You can use this ability once per day at 9th level, twice per day at 17th level, and three times per day at 20th level. This power replaces Snow Shroud.",
        levelGained: 9,
      },
      {
        name: "Blizzard",
        description: "At 15th level, you can create a savage winter storm centered on yourself as a standard action. This functions as control winds, but also creates a sleet storm effect in the area. Creatures in the area are also exposed to extreme cold. You can use this ability once per day.",
        levelGained: 15,
      },
      {
        name: "Child of Ancient Winters",
        description: "At 20th level, you gain the cold subtype. You become immune to fatigue and exhaustion, and are not subject to critical hits or sneak attacks. You gain vulnerability to fire.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "enlarge person",        // 3rd
      "rage",                  // 5th
      "elemental aura",        // 7th (cold)
      "wall of ice",           // 9th
      "cone of cold",          // 11th
      "transformation",        // 13th
      "giant form I",          // 15th
      "polar ray",             // 17th
      "meteor swarm",          // 19th (cold damage)
    ],
    bonusFeats: [
      "Arcane Strike",
      "Diehard",
      "Empower Spell",
      "Endurance",
      "Exotic Weapon Proficiency",
      "Power Attack",
      "Skill Focus (Intimidate)",
      "Toughness",
    ],
    bloodlineSkills: ["Survival"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-sage',
    name: 'Sage (Wildblooded)',
    classIds: ['sorcerer'],
    description: "Scholars of the arcane are always creating new means to use magic. A variant of the Arcane bloodline, the Sage bloodline derives its power from accumulated knowledge and pure intellect rather than from innate magical personality.",
    bloodlineArcana: "You use Intelligence instead of Charisma to determine all class features and effects relating to your sorcerer class, such as bonus spells per day, maximum spell level you can cast, and the save DCs of your spells. You gain a +2 bonus on Knowledge (arcana) and Spellcraft checks. This replaces the Arcane bloodline arcana.",
    powers: [
      {
        name: "Arcane Bolt",
        description: "Starting at 1st level, you can unleash a ray of magic force as a standard action, targeting any foe within 30 feet as a ranged touch attack. The ray deals 1d4 points of damage + 1 for every two sorcerer levels you possess. This damage is treated as a spell of a level equal to half your sorcerer level, and is a force effect. You can use this ability a number of times per day equal to 3 + your Intelligence modifier. This power replaces Arcane Bond.",
        levelGained: 1,
      },
      {
        name: "Metamagic Adept",
        description: "At 3rd level, you can apply any one metamagic feat you know to a spell you are about to cast without increasing the casting time. You must still expend a higher-level spell slot to cast this spell. You can use this ability once per day at 3rd level and one additional time per day for every four sorcerer levels you possess beyond 3rd, up to five times per day at 19th level.",
        levelGained: 3,
      },
      {
        name: "New Arcana",
        description: "At 9th level, you can add any one spell from the sorcerer/wizard spell list to your list of spells known. This spell must be of a level that you are capable of casting. You can also add one additional spell at 13th level and 17th level.",
        levelGained: 9,
      },
      {
        name: "School Power",
        description: "At 15th level, pick one school of magic. The DC for any spells you cast from that school increases by +2. This bonus stacks with the bonus granted by Spell Focus.",
        levelGained: 15,
      },
      {
        name: "Arcane Apotheosis",
        description: "At 20th level, your body surges with arcane power. You can add any metamagic feats that you know to your spells without increasing their casting time, although you must still expend higher-level spell slots. Whenever you use magic items that require charges, you can instead expend spell slots to power the item, at a rate of one charge per spell slot level expended.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "identify",          // 3rd
      "invisibility",      // 5th
      "dispel magic",      // 7th
      "dimension door",    // 9th
      "overland flight",   // 11th
      "true seeing",       // 13th
      "greater teleport",  // 15th
      "power word stun",   // 17th
      "wish",              // 19th
    ],
    bonusFeats: [
      "Combat Casting",
      "Improved Counterspell",
      "Improved Initiative",
      "Iron Will",
      "Scribe Scroll",
      "Skill Focus (Knowledge [arcana])",
      "Spell Focus",
      "Still Spell",
    ],
    bloodlineSkills: ["Knowledge (any one)"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-sanguine',
    name: 'Sanguine (Wildblooded)',
    classIds: ['sorcerer'],
    description: "The power of undeath can derive from cold blood as well as hard bone. A variant of the Undead bloodline, the Sanguine bloodline draws upon the vampiric aspects of undeath, sustaining itself through blood rather than the more skeletal aspects of necromantic power.",
    bloodlineArcana: "Whenever you cast a spell of the necromancy school, your effective caster level is increased by 1. This replaces the Undead bloodline arcana.",
    powers: [
      {
        name: "The Blood Is the Life",
        description: "At 1st level, you gain sustenance from the blood of recently dead creatures. As a standard action, you can drink blood from a creature that has been dead for no more than 1 minute. The creature must be at least your size category, must be corporeal, and must have blood. Drinking the blood restores 1d6 hit points and nourishes you as if you had eaten a full meal. You can use this ability a number of times per day equal to 3 + your Charisma modifier. This power replaces Grave Touch.",
        levelGained: 1,
      },
      {
        name: "Death's Gift",
        description: "At 3rd level, you gain resist cold 5 and DR 5/— against nonlethal damage. At 9th level, your resist cold increases to 10 and your DR against nonlethal damage increases to 10/—.",
        levelGained: 3,
      },
      {
        name: "Grasp of the Dead",
        description: "At 9th level, you can cause a swarm of skeletal arms to burst from the ground to claw at your foes. This ability affects a 20-foot-radius patch of ground and functions as black tentacles, but the arms deal slashing damage instead of bludgeoning damage. You can use this ability once per day at 9th level, twice per day at 17th level, and three times per day at 20th level.",
        levelGained: 9,
      },
      {
        name: "Incorporeal Form",
        description: "At 15th level, you can become incorporeal for 1 round per sorcerer level per day. While incorporeal, you gain the incorporeal subtype and take only half damage from corporeal magic weapons. Your own attacks deal half damage to corporeal creatures. You can use this ability in 1-round increments.",
        levelGained: 15,
      },
      {
        name: "One of Us",
        description: "At 20th level, your ties to undeath are complete. You gain immunity to cold and nonlethal damage. Undead creatures see you as one of their own and do not attack you unless you attack them first or compel them to attack. You gain DR 5/— and a +4 bonus on saving throws against mind-affecting effects.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "chill touch",      // 3rd
      "false life",       // 5th
      "vampiric touch",   // 7th
      "animate dead",     // 9th
      "waves of fatigue", // 11th
      "undeath to death", // 13th
      "finger of death",  // 15th
      "horrid wilting",   // 17th
      "energy drain",     // 19th
    ],
    bonusFeats: [
      "Combat Casting",
      "Diehard",
      "Endurance",
      "Iron Will",
      "Skill Focus (Knowledge [religion])",
      "Spell Focus",
      "Still Spell",
      "Toughness",
    ],
    bloodlineSkills: ["Knowledge (religion)"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-seaborn',
    name: 'Seaborn (Wildblooded)',
    classIds: ['sorcerer'],
    description: "Your powers rise like the tides. A variant of the Aquatic bloodline, the Seaborn bloodline draws power from immersion in water, channeling the surging force of waves rather than the alien depths of the ocean.",
    bloodlineArcana: "When you are in a body of water large enough to float in, your effective caster level is increased by 1. This replaces the Aquatic bloodline arcana.",
    powers: [
      {
        name: "Water Blast",
        description: "At 1st level, as a standard action, you can fire a bolt of water at a foe within 30 feet as a ranged touch attack. The foe is knocked prone and, at your option, pushed 5 feet directly away from you. A Reflex save (DC 10 + 1/2 your sorcerer level + your Charisma modifier) negates the prone and push effects. You can use this ability a number of times per day equal to 3 + your Charisma modifier. This power replaces Dehydrating Touch.",
        levelGained: 1,
      },
      {
        name: "Aquatic Adaptation",
        description: "At 3rd level, you gain a swim speed of 30 feet. At 9th level, you gain the amphibious quality, a +1 natural armor bonus, resist cold 5, and a 30-foot blindsense while underwater. At 15th level, your swim speed increases to 60 feet and your blindsense increases to 60 feet.",
        levelGained: 3,
      },
      {
        name: "Aquatic Telepathy",
        description: "At 9th level, you gain telepathy (100 feet) with any creature that has a swim speed or the aquatic or water subtypes. You can also use suggestion as a spell-like ability on such a creature a number of times per day equal to your Charisma modifier. At 15th level, once per day you can send a telepathic call to any such creature to come to you, functioning as demand or greater planar ally.",
        levelGained: 9,
      },
      {
        name: "Raise the Deep",
        description: "At 15th level, once per day you can cause water to burst up from the ground or pour down from the sky, functioning as control water except that you do not need an existing body of water. This effect lasts for 1 round per sorcerer level. At 20th level, the dimensions of the effect are doubled.",
        levelGained: 15,
      },
      {
        name: "Deep One",
        description: "At 20th level, you gain blindsense 60 feet, DR 10/piercing, and resist cold 20. You also benefit from a continuous freedom of movement effect. While underwater, you gain blindsight 120 feet, evasion, and immunity to pressure damage from deep water.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "hydraulic push",    // 3rd
      "slipstream",        // 5th
      "aqueous orb",       // 7th
      "geyser",            // 9th
      "control water",     // 11th
      "beast shape IV",    // 13th
      "summon monster VII", // 15th
      "seamantle",         // 17th
      "world wave",        // 19th
    ],
    bonusFeats: [
      "Athletic",
      "Brew Potion",
      "Defensive Combat Training",
      "Dodge",
      "Mobility",
      "Silent Spell",
      "Skill Focus (Swim)",
      "Toughness",
    ],
    bloodlineSkills: ["Swim"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-shahzada',
    name: 'Shahzada (Wildblooded)',
    classIds: ['sorcerer'],
    description: "You are descended from the ranks of noble marids, making your blood royal as well as magical. A variant of the Marid bloodline, the Shahzada bloodline channels the regal, commanding power of marid royalty, able to summon crashing waves rather than merely manipulating the element of water.",
    bloodlineArcana: "Whenever you cast a spell with the water descriptor, you gain a swim speed of 30 feet for a number of rounds equal to double the level of the spell cast. This replaces the Marid bloodline arcana.",
    powers: [
      {
        name: "Frost Ray",
        description: "At 1st level, you can unleash an elemental ray of cold as a standard action, targeting any foe within 30 feet as a ranged touch attack. This ray deals 1d6 points of cold damage + 1 for every two sorcerer levels you possess. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Elemental Resistance",
        description: "At 3rd level, you gain resist cold 10. At 9th level, your resistance increases to 20.",
        levelGained: 3,
      },
      {
        name: "Water's Fury",
        description: "At 9th level, you can unleash a 60-foot-long jet of water as a standard action. All creatures in the line take 1d6 points of damage per two sorcerer levels and are blinded for 1d6 rounds. A Reflex save (DC 10 + 1/2 your sorcerer level + your Charisma modifier) halves the damage and negates the blindness.",
        levelGained: 9,
      },
      {
        name: "Sweeping Waves",
        description: "At 15th level, you can summon a wave of water that pours from your mouth and violently sweeps creatures away from you on all sides. All creatures within 5 feet must make a Reflex save (DC 10 + 1/2 your sorcerer level + your Charisma modifier) or take 1d6 + 1 per 2 sorcerer levels damage and be the target of a bull rush combat maneuver using your caster level as your base attack bonus and your Charisma modifier as your Strength modifier. A successful save halves the damage and negates the bull rush. This power replaces Elemental Movement.",
        levelGained: 15,
      },
      {
        name: "Power of the Marid",
        description: "At 20th level, you can cast limited wish as a spell-like ability once per day. You gain immunity to cold damage. You can use plane shift as a spell-like ability once per day, but only to travel to or from the Plane of Water.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "obscuring mist",    // 3rd
      "see invisibility",  // 5th
      "gaseous form",      // 7th
      "wall of ice",       // 9th
      "persistent image",  // 11th
      "elemental body III", // 13th
      "plane shift",       // 15th
      "polar ray",         // 17th
      "wish",              // 19th
    ],
    bonusFeats: [
      "Dodge",
      "Empower Spell",
      "Great Fortitude",
      "Improved Initiative",
      "Lightning Reflexes",
      "Power Attack",
      "Skill Focus (Knowledge [planes])",
      "Weapon Finesse",
    ],
    bloodlineSkills: ["Knowledge (planes)"],
    source: "pf1e-ppc-bote",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-sylvan',
    name: 'Sylvan (Wildblooded)',
    classIds: ['sorcerer'],
    description: "Your ties to nature have more to do with creatures than with capriciousness. A variant of the Fey bloodline, the Sylvan bloodline channels the bond between fey and wild animals, granting a druidic kinship with creatures of the natural world.",
    bloodlineArcana: "Whenever you cast a spell of the compulsion subschool, increase the spell's DC by +2. This is the same as the Fey bloodline arcana.",
    powers: [
      {
        name: "Animal Companion",
        description: "At 1st level, you gain an animal companion. Your effective druid level for this ability is equal to your sorcerer level - 3 (minimum 1st). This power replaces Laughing Touch.",
        levelGained: 1,
      },
      {
        name: "Woodland Stride",
        description: "At 3rd level, you can move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at your normal speed and without taking damage or suffering any other impairment. Thorns, briars, and overgrown areas that have been magically manipulated to impede motion still affect you.",
        levelGained: 3,
      },
      {
        name: "Fleeting Glance",
        description: "At 9th level, you can turn invisible for a number of rounds per day equal to your sorcerer level. This ability functions as greater invisibility. These rounds need not be consecutive.",
        levelGained: 9,
      },
      {
        name: "Fey Wings",
        description: "At 15th level, you can grow insectlike wings from your back and become one size category smaller (as if using reduce person), gaining a fly speed of 60 feet with average maneuverability. You can maintain this form for 1 minute per sorcerer level. This power replaces Fey Magic.",
        levelGained: 15,
      },
      {
        name: "Soul of the Fey",
        description: "At 20th level, your soul becomes one with the world of the fey. You gain immunity to poison, and gain DR 10/cold iron. Animals do not willingly attack you unless magically compelled to do so. Once per day, you can cast shadow walk as a spell-like ability.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "entangle",           // 3rd
      "hideous laughter",   // 5th
      "deep slumber",       // 7th
      "poison",             // 9th
      "tree stride",        // 11th
      "mislead",            // 13th
      "phase door",         // 15th
      "irresistible dance", // 17th
      "shapechange",        // 19th
    ],
    bonusFeats: [
      "Dodge",
      "Improved Initiative",
      "Lightning Reflexes",
      "Mobility",
      "Point-Blank Shot",
      "Precise Shot",
      "Quicken Spell",
      "Skill Focus (Knowledge [nature])",
    ],
    bloodlineSkills: ["Knowledge (nature)"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-umbral',
    name: 'Umbral (Wildblooded)',
    classIds: ['sorcerer'],
    description: "Your nature is to gather the darkness into yourself. A variant of the Shadow bloodline, the Umbral bloodline embraces shadow as a protective and empowering force, cloaking allies and drawing strength from dim light and darkness.",
    bloodlineArcana: "Whenever you cast a spell in an area of dim light or darkness, your effective caster level is increased by 1. This replaces the Shadow bloodline arcana.",
    powers: [
      {
        name: "Cloak of Shadows",
        description: "At 1st level, as a standard action, you can grant one target a cloak of shadows. This cloak gives the target a bonus on Stealth checks made in areas of dim or no light equal to 1/2 your sorcerer level for 1 round per 2 sorcerer levels you possess (minimum +1 bonus for 1 round). You may use this ability a number of times per day equal to 3 + your Charisma modifier. This power replaces Shadowstrike.",
        levelGained: 1,
      },
      {
        name: "Nighteye",
        description: "At 3rd level, you gain darkvision 30 feet. At 9th level, your darkvision increases to 60 feet.",
        levelGained: 3,
      },
      {
        name: "Shadow Well",
        description: "At 9th level, if you are within 10 feet of a shadow, you can use the Stealth skill to hide as if you had cover or concealment. Additionally, as a standard action, you can use the shadow as a portal, switching your location with that of a willing ally within 60 feet who is also within 10 feet of a shadow (the ally must be in dim light or darkness). At 13th level, you can switch two allies instead. Once per day at 9th level, twice per day at 17th, three times per day at 20th.",
        levelGained: 9,
      },
      {
        name: "Enveloping Darkness",
        description: "At 15th level, you can surround a creature with deeper darkness (as the spell) as a standard action. The creature is also entangled for the duration of the effect. You can see through this darkness as if it did not exist. Once per day.",
        levelGained: 15,
      },
      {
        name: "Shadow Master",
        description: "At 20th level, you can see perfectly in darkness of any kind, even that created by a deeper darkness spell. Whenever you use shadow conjuration or shadow evocation, the spell is 20% more real than normal. Any creature you summon using shadow conjuration gains the benefit of Augment Summoning.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "ray of enfeeblement",     // 3rd
      "darkvision",              // 5th
      "deeper darkness",         // 7th
      "shadow conjuration",      // 9th
      "shadow evocation",        // 11th
      "shadow walk",             // 13th
      "power word blind",        // 15th
      "greater shadow evocation", // 17th
      "shades",                  // 19th
    ],
    bonusFeats: [
      "Acrobatic",
      "Blind-Fight",
      "Dodge",
      "Quick Draw",
      "Silent Spell",
      "Skill Focus (Stealth)",
      "Stealthy",
      "Weapon Finesse",
    ],
    bloodlineSkills: ["Stealth"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-visionary',
    name: 'Visionary (Wildblooded)',
    classIds: ['sorcerer'],
    description: "Your dream-magic strongly influences the waking world. A variant of the Dreamspun bloodline, the Visionary bloodline focuses on prophetic insight and waking divination rather than slumber-based manipulation.",
    bloodlineArcana: "You require only 1 hour of sleep before preparing yourself for spellcasting. You still risk fatigue from insufficient sleep if you receive less than 8 hours total, but a single hour is sufficient to ready your spells. This replaces the Dreamspun bloodline arcana.",
    powers: [
      {
        name: "Lullaby",
        description: "At 1st level, you can use lullaby as a spell-like ability a number of times per day equal to 3 + your Charisma modifier. When you use this ability, it lasts for 1 minute without requiring concentration, and creatures that fail their saves against the following sleep effect take a -4 penalty instead of the normal -2.",
        levelGained: 1,
      },
      {
        name: "Combat Precognition",
        description: "At 3rd level, your knowledge of the future grants you a +1 insight bonus to initiative checks. This bonus increases by +1 for every 4 sorcerer levels you possess beyond 3rd.",
        levelGained: 3,
      },
      {
        name: "Visions",
        description: "At 9th level, you gain prophetic visions about the future while sleeping. Once per day, you may use divination as a spell-like ability, but it works only for events occurring within the next week and requires a full night's sleep to receive the answer. At 17th level, you can ask two questions per day. At 20th level, you can ask three questions per day. This power replaces Dreamshaper.",
        levelGained: 9,
      },
      {
        name: "Eye of Somnus",
        description: "At 15th level, you can project your consciousness, allowing your senses to travel while your body remains immobile. This functions as arcane eye, but you can also make the projected eye visible to other creatures. If you do, it functions as a symbol of sleep against any creature that can see it. Once per day.",
        levelGained: 15,
      },
      {
        name: "Solipsism",
        description: "At 20th level, you can become incorporeal for a number of minutes per day equal to your sorcerer level. These minutes need not be consecutive. While incorporeal, you gain the incorporeal subtype and take no damage from nonmagical attacks. You take only half damage from corporeal magic weapons.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "sleep",               // 3rd
      "augury",              // 5th
      "deep slumber",        // 7th
      "divination",          // 9th
      "dream",               // 11th
      "shadow walk",         // 13th
      "vision",              // 15th
      "moment of prescience", // 17th
      "astral projection",   // 19th
    ],
    bonusFeats: [
      "Alertness",
      "Blind-Fight",
      "Combat Expertise",
      "Deceitful",
      "Heighten Spell",
      "Improved Feint",
      "Persuasive",
      "Skill Focus (Sense Motive)",
    ],
    bloodlineSkills: ["Sense Motive"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-void-touched',
    name: 'Void-Touched (Wildblooded)',
    classIds: ['sorcerer'],
    description: "The darkness between the stars calls to you. A variant of the Starsoul bloodline, the Void-Touched bloodline channels the cold emptiness of interstellar space rather than the blazing light of celestial bodies.",
    bloodlineArcana: "Whenever you cast an evocation spell, you may select one target that fails its save to suffer the choking airlessness of the void, silencing it (as the silence spell, but affecting only that target) for 1 round. This replaces the Starsoul bloodline arcana.",
    powers: [
      {
        name: "Black Motes",
        description: "At 1st level, you can summon a rain of tiny black motes of void energy from above as a standard action. This functions identically to Minute Meteors from the Starsoul bloodline, except that the motes deal cold damage instead of fire damage. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Voidwalker",
        description: "At 3rd level, you gain low-light vision and resist cold 5 and resist fire 5. At 9th level, you no longer need to breathe.",
        levelGained: 3,
      },
      {
        name: "Voidfield",
        description: "At 9th level, as a standard action, you can create an area of void influence that acts as ice storm, except the area is also subject to deeper darkness for 1 round per four sorcerer levels. You may use this ability once per day, plus one additional time per day for every three sorcerer levels you possess beyond 9th. This power replaces Aurora Borealis.",
        levelGained: 9,
      },
      {
        name: "Breaching the Gulf",
        description: "At 15th level, your caster level is increased by 3 for any spell of the teleportation subschool. Once per day, you can use dimension door as a standard action, and at the destination, you tear a rift in space that deposits a target of your choice within 30 feet into the void of space (Will save negates). The target takes 6d6 points of cold damage per round and must hold its breath or suffocate.",
        levelGained: 15,
      },
      {
        name: "Starborn",
        description: "At 20th level, you gain immunity to cold and blindness. You can see perfectly in darkness of any kind. You gain fast healing 1 whenever you are outdoors at night.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "unseen servant",    // 3rd
      "glitterdust",       // 5th
      "blink",             // 7th
      "call lightning storm", // 9th
      "overland flight",   // 11th
      "repulsion",         // 13th
      "reverse gravity",   // 15th
      "greater prying eyes", // 17th
      "meteor swarm",      // 19th
    ],
    bonusFeats: [
      "Blind-Fight",
      "Craft Rod",
      "Dodge",
      "Endurance",
      "Improved Counterspell",
      "Improved Iron Will",
      "Iron Will",
      "Quicken Spell",
    ],
    bloodlineSkills: ["Knowledge (nature)"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-wildblooded-warped',
    name: 'Warped (Wildblooded)',
    classIds: ['sorcerer'],
    description: "The alien taint in your blood causes malformations and mutations in others. A variant of the Aberrant bloodline, the Warped bloodline externalizes the mutagenic qualities of aberrant heritage, twisting the forms of those around you.",
    bloodlineArcana: "Whenever you cast a spell of the polymorph subschool, one target of your choice may receive one random effect from the Warped Polymorph Benefits table (see Ultimate Magic). This bonus lasts as long as the polymorph effect on the target. This replaces the Aberrant bloodline arcana.",
    powers: [
      {
        name: "Warp Touch",
        description: "At 1st level, you create brief, disorienting changes in a creature's physical form. This ability affects one creature within 30 feet, which is dazed for 1 round (Fortitude negates; DC 10 + 1/2 your sorcerer level + your Charisma modifier). You can use this ability a number of times per day equal to 3 + your Charisma modifier. This power replaces Acidic Ray.",
        levelGained: 1,
      },
      {
        name: "Long Limbs",
        description: "At 3rd level, your reach increases by 5 feet whenever you are making a melee touch attack. This ability does not otherwise increase your threatened area. At 11th level, this bonus to your reach increases to 10 feet. At 17th level, this bonus to your reach increases to 15 feet.",
        levelGained: 3,
      },
      {
        name: "Unusual Anatomy",
        description: "At 9th level, your anatomy changes, giving you a 25% chance to ignore any critical hit or sneak attack scored against you. This chance increases to 50% at 13th level.",
        levelGained: 9,
      },
      {
        name: "Alien Resistance",
        description: "At 15th level, you gain spell resistance equal to your sorcerer level + 10.",
        levelGained: 15,
      },
      {
        name: "Aberrant Form",
        description: "At 20th level, your body becomes truly unnatural. You are immune to critical hits and sneak attacks. In addition, you gain blindsight with a range of 60 feet and damage reduction 5/—.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "enlarge person",    // 3rd
      "see invisibility",  // 5th
      "tongues",           // 7th
      "black tentacles",   // 9th
      "feeblemind",        // 11th
      "veil",              // 13th
      "plane shift",       // 15th
      "mind blank",        // 17th
      "shapechange",       // 19th
    ],
    bonusFeats: [
      "Combat Casting",
      "Improved Disarm",
      "Improved Grapple",
      "Improved Initiative",
      "Improved Unarmed Strike",
      "Iron Will",
      "Silent Spell",
      "Skill Focus (Knowledge [dungeoneering])",
    ],
    bloodlineSkills: ["Knowledge (dungeoneering)"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
];
