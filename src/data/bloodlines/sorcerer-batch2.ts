import type { BloodlineEntry } from '@/types/classOptions';

export const sorcererBloodlinesBatch2: BloodlineEntry[] = [
  {
    id: 'sorcerer-kobold',
    name: 'Kobold',
    classIds: ['sorcerer'],
    description: "While many kobold sorcerers tout their purely draconic bloodline, over generations of eldritch training, some such spellcasters have created a bloodline that, while tinged with some draconic magic, is the embodiment of the race's virtue distilled into arcane form. Many practitioners of this bloodline go on to lead powerful kobold tribes.",
    bloodlineArcana: "Whenever you cast a spell against a creature that is denied its Dexterity bonus to AC, increase that spell's DC by +2.",
    powers: [
      {
        name: "Trap Rune",
        description: "At 1st level, as a standard action, you can sketch a single, nearly invisible magical rune on any 5-foot-square solid surface. When you create a rune, pick one energy type: acid, cold, electricity, or fire. The next creature other than you who steps on or touches the rune causes it to explode, dealing 1d8 + 1 per sorcerer level energy damage to anything in its square (Reflex half, DC 10 + 1/2 sorcerer level + Cha modifier). The rune functions as a magical trap for Perception and Disable Device checks. You can use this ability a number of times per day equal to 3 + your Charisma modifier. Each rune lasts 24 hours or until discharged.",
        levelGained: 1,
      },
      {
        name: "Trap Sense",
        description: "At 3rd level, you gain a +2 bonus on Perception checks to notice traps, a +1 bonus on Reflex saves to avoid traps, and a +1 dodge bonus to AC against attacks made by traps. These bonuses increase by +1 at 7th level and every four sorcerer levels thereafter (maximum +5 at 19th level). This stacks with rogue trap sense and similar abilities.",
        levelGained: 3,
      },
      {
        name: "Arcane Ambush",
        description: "At 9th level, as a swift action you can expend a spell slot to grant yourself and nearby allies a bonus on attack and damage rolls equal to the level of the spell expended for 1 round. This bonus applies only against opponents your allies are flanking or opponents denied their Dexterity bonus to AC against your allies. You grant this bonus to yourself plus up to one ally per four sorcerer levels (maximum five allies at 20th level) within 30 feet with line of effect.",
        levelGained: 9,
      },
      {
        name: "Earth Glide",
        description: "At 15th level, you gain the earth glide universal monster ability with a speed equal to your base speed. This does not grant you the ability to breathe while passing through earth, so you must hold your breath or use an alternate means to breathe while using this ability.",
        levelGained: 15,
      },
      {
        name: "Nimble Walker",
        description: "At 20th level, you gain a +5 racial bonus on Reflex saving throws and on Acrobatics checks made to move through a creature's threatened area or through its space. You also gain the ability to breathe while passing through earth using your earth glide ability.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "alarm",                    // 3rd
      "create pit",               // 5th
      "explosive runes",          // 7th
      "dragon's breath",          // 9th
      "transmute rock to mud",    // 11th
      "guards and wards",         // 13th
      "delayed blast fireball",   // 15th
      "form of the dragon III",   // 17th
      "imprisonment",             // 19th
    ],
    bonusFeats: [
      "Alertness",
      "Combat Casting",
      "Defensive Combat Training",
      "Dodge",
      "Improved Initiative",
      "Lightning Reflexes",
      "Silent Spell",
    ],
    bloodlineSkills: ["Disable Device"],
    source: "pf1e-arg",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-maestro',
    name: 'Maestro',
    classIds: ['sorcerer'],
    description: "The spiritual power of art and song runs strongly through your family line. You hear music whenever you cast spells, and can use the songs in your head to create magic effects.",
    bloodlineArcana: "Whenever you cast a spell with a verbal component and no somatic or material component, you treat your caster level as if it were one higher.",
    powers: [
      {
        name: "Beguiling Voice",
        description: "At 1st level, you can use the sound of your voice to lull a target creature into taking no action. This ability acts as the daze spell, except it is language-dependent, has a duration of 1 round, and affects a living creature whose Hit Dice do not exceed your sorcerer level. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Fascinate",
        description: "At 3rd level, you gain the ability to use a Perform skill to cause one or more creatures to become fascinated with you. This acts as the fascinate bardic performance ability, except the save DC is 10 + 1/2 your sorcerer level + your Charisma bonus, and it lasts 1 round/level. You may use this ability once per day at 3rd level, twice per day at 8th level, three times per day at 13th level, and four times per day at 18th level.",
        levelGained: 3,
      },
      {
        name: "Perfect Voice",
        description: "At 9th level, you understand all communication through sound and can make yourself understood to any creature that understands at least one spoken language. The save DCs of language-dependent spells you cast increase by +1.",
        levelGained: 9,
      },
      {
        name: "Inspire",
        description: "At 15th level, you can cast greater heroism as a spell-like ability. You can use this ability once per day at 15th level, twice per day at 17th level, and three times per day at 19th level.",
        levelGained: 15,
      },
      {
        name: "Grand Maestro",
        description: "At 20th level, the power of pure magic music flows through you. You cast any spell with a verbal component as if it had the Still Spell metamagic feat applied to it, with no increase to casting time or spell slot required. You gain immunity to sonic damage and language-dependent spells.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "ventriloquism",      // 3rd
      "hideous laughter",   // 5th
      "suggestion",         // 7th
      "shout",              // 9th
      "dominate person",    // 11th
      "mass suggestion",    // 13th
      "power word blind",   // 15th
      "greater shout",      // 17th
      "wail of the banshee", // 19th
    ],
    bonusFeats: [
      "Deceitful",
      "Greater Spell Focus (enchantment)",
      "Lingering Performance",
      "Persuasive",
      "Skill Focus (Perform)",
      "Spell Focus (enchantment)",
      "Spellsong",
      "Still Spell",
    ],
    bloodlineSkills: ["Perform"],
    source: "pf1e-um",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-marid',
    name: 'Marid',
    classIds: ['sorcerer'],
    description: "You were born with the power of water genies, and the magic of the marids is strong in you. Like a marid, you have both natural power over water and several other genie-based abilities.",
    bloodlineArcana: "Whenever you cast a spell that deals energy damage, you can change the type of damage to cold. This also changes the spell's descriptors to match this energy type.",
    powers: [
      {
        name: "Frost Ray",
        description: "Starting at 1st level, you can unleash an elemental ray as a standard action, targeting any foe within 30 feet as a ranged touch attack. This ray deals 1d6 points of cold damage + 1 for every two sorcerer levels you possess. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Elemental Resistance",
        description: "At 3rd level, you gain cold resistance 10. At 9th level, your cold resistance increases to 20.",
        levelGained: 3,
      },
      {
        name: "Water's Fury",
        description: "At 9th level, as a standard action, you can create a jet of water in a 60-foot line that deals 1d6 points of damage per two sorcerer levels and blinds struck targets for 1d6 rounds. A Reflex save (DC 10 + 1/2 sorcerer level + Cha bonus) halves the damage and negates the blinding effect.",
        levelGained: 9,
      },
      {
        name: "Elemental Movement",
        description: "At 15th level, you gain a swim speed of 60 feet.",
        levelGained: 15,
      },
      {
        name: "Power of the Marid",
        description: "At 20th level, once per day you can cast limited wish as a spell-like ability. Wishes must begin with the words 'I wish' and cannot duplicate a wish granted within the past 24 hours. You become immune to cold damage and can use plane shift once per day to travel to or from the Plane of Water.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "obscuring mist",     // 3rd
      "see invisibility",   // 5th
      "gaseous form",       // 7th
      "wall of ice",        // 9th
      "persistent image",   // 11th
      "elemental body III", // 13th
      "plane shift",        // 15th
      "polar ray",          // 17th
      "wish",               // 19th
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
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-martyred',
    name: 'Martyred',
    classIds: ['sorcerer'],
    description: "One of your ancestors paid the ultimate price for your beliefs, and you draw upon the power of your ancestor's self-sacrifice.",
    bloodlineArcana: "Whenever you take damage in battle, your effective caster level increases by 1 during your next turn. This effect does not apply more than once per round.",
    powers: [
      {
        name: "Sacrificial Boon",
        description: "At 1st level, as an immediate action, you can sacrifice 1 hit point in exchange for a +1 sacred bonus on the next damage roll, saving throw, or skill check you make. This bonus only applies if used by or during your next turn. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Rallying Cry",
        description: "At 3rd level, as a standard action once per day, you and any allies within 30 feet who can hear you gain a +1 morale bonus on attack and damage rolls for a number of rounds equal to half your sorcerer level (minimum 1). At 7th level and every four levels thereafter, this bonus increases by +1 (maximum +5 at 19th level).",
        levelGained: 3,
      },
      {
        name: "Gift of Blood",
        description: "At 9th level, as a standard action, you can sacrifice hit points to grant an ally double that number in temporary hit points (up to your character level). These temporary hit points last up to 1 minute per sorcerer level. You cannot heal the sacrificed hit points until your target has lost the temporary hit points. Usable once per day at 9th level, twice per day at 17th level.",
        levelGained: 9,
      },
      {
        name: "Sacrificial Exchange",
        description: "At 15th level, as a swift action once per day, you can take 2 points of temporary ability damage to one ability score and add a temporary +2 inherent bonus to any other ability score. This bonus lasts up to 1 hour per sorcerer level or until dismissed. The ability damage cannot be healed until the effect ends. At 20th level, usable twice per day.",
        levelGained: 15,
      },
      {
        name: "Eternal Martyr",
        description: "At 20th level, you become immune to death effects. Material components for spells to bring you back to life cost half as much as normal. Your body cannot be turned into an undead creature, as though permanently affected by hallow (caster level equal to your sorcerer level).",
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
    source: "pf1e-ppc-boan",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-naga',
    name: 'Naga',
    classIds: ['sorcerer'],
    description: "Naga blood flows within your veins. Perhaps a curious naga experimented upon one of your ancestors in an attempt to create the perfect servant, or maybe one of your ancestors was a shapeshifting naga. Either way, you boast powers similar to those of true nagas. You can draw upon the ancient magic of the nagas to ensnare the minds of lesser creatures and destroy those who would defy your will.",
    bloodlineArcana: "Whenever you cast a spell with the poison descriptor, increase the spell's DC by 2.",
    powers: [
      {
        name: "Vanishing",
        description: "At 1st level, you can cloak yourself in illusory magic as a standard action, becoming invisible (as per invisibility) for a number of rounds per day equal to your sorcerer level + your Charisma bonus. These rounds need not be used consecutively.",
        levelGained: 1,
      },
      {
        name: "Naga Resistances",
        description: "At 3rd level, you gain a +2 bonus on saving throws against mind-affecting effects and poison effects. At 9th level, this bonus increases to +4.",
        levelGained: 3,
      },
      {
        name: "Ensnaring Eyes",
        description: "At 9th level, add 2 to the save DC of any spell, spell-like ability, or supernatural ability you use that causes a target to become fascinated or that belongs to the charm subschool.",
        levelGained: 9,
      },
      {
        name: "Cast without Hands",
        description: "At 15th level, you learn to eschew the use of your hands when casting spells. Whenever you cast an arcane spell with a somatic component, you can do so even with your hands full by twisting and gyrating your body. This doubles the arcane spell failure chance from your armor, and you cannot use this ability if pinned or immobile.",
        levelGained: 15,
      },
      {
        name: "Power of the Naga",
        description: "At 20th level, you gain immunity to charm effects, mind-reading effects, and poison. In addition, you can assume the shape of a naga at will as if using naga shape III.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "ray of enfeeblement",  // 3rd
      "invisibility",         // 5th
      "lightning bolt",       // 7th
      "poison",               // 9th
      "dominate person",      // 11th
      "veil",                 // 13th
      "limited wish",         // 15th
      "mass charm monster",   // 17th
      "shapechange",          // 19th
    ],
    bonusFeats: [
      "Alertness",
      "Blind-Fight",
      "Combat Casting",
      "Dodge",
      "Improved Initiative",
      "Lightning Reflexes",
      "Skill Focus (Knowledge [dungeoneering])",
      "Stealthy",
    ],
    bloodlineSkills: ["Knowledge (dungeoneering)"],
    source: "pf1e-ppc-bob",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-nanite',
    name: 'Nanite',
    classIds: ['sorcerer'],
    description: "Either you were born from one of the forgewombs scattered throughout the wastelands of Numeria, or you were infected by nanites, which now course through your blood. The microscopic nanites in your blood grant you incredible powers and alien magic.",
    bloodlineArcana: "Whenever you cast a spell from the transmutation school and target only yourself, increase the spell's duration by 50%. This does not stack with metamagic feats or abilities such as Extend Spell.",
    powers: [
      {
        name: "Nanite Strike",
        description: "At 1st level as a free action, you can cause nanites to flow from your body and coat the striking end of any manufactured melee weapon you wield. When you hit with a melee attack, some nanites infect the victim (Poison: injury; Fort DC 10 + 1/2 sorcerer level + Con modifier; frequency 1/round for 6 rounds; effect 1 Str damage; cure 1 save). At 5th level, weapons are treated as magical for DR and the poison also deals 1 Con damage. At 7th level, damage increases to 1d2 Con and 1d2 Str. At 11th level, the cure becomes two successful saves. Usable for rounds per day equal to 3 + Charisma modifier (need not be consecutive).",
        levelGained: 1,
      },
      {
        name: "Nanite Surge",
        description: "At 3rd level, once per day as an immediate action, your nanites surge granting a bonus equal to 3 + your sorcerer level on any one d20 roll (must be activated before the roll). At 9th level, usable one additional time per day. If you already have nanite surge from another source, you can use it one additional time per day.",
        levelGained: 3,
      },
      {
        name: "Nanite Resurgence",
        description: "At 9th level, once per day as an immediate action upon being reduced to one-quarter maximum hit points, you can force the mechanical swarm inside you to keep you alive (functions as resurgent transformation using your sorcerer level as caster level, as an extraordinary ability that cannot be dispelled). At 17th level, usable twice per day (using it twice in 24 hours risks system shock). At 20th level, you never die of system shock from this ability.",
        levelGained: 9,
      },
      {
        name: "Distributed Body",
        description: "At 15th level, anytime you are struck by a critical hit or sneak attack, there is a 25% chance your nanites scatter and reincorporate around the attack, negating the extra damage and causing the attack to deal damage as a normal hit instead.",
        levelGained: 15,
      },
      {
        name: "Living Swarm",
        description: "At 20th level, you and the machines within you become one. You become immune to bleed effects, diseases, and poisons, and gain DR 5/--. At will, you can break down your body and move in a shimmering stream of flying nanites, as if affected by gaseous form.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "disguise self",      // 3rd
      "defensive shock",    // 5th
      "gaseous form",       // 7th
      "miasmatic form",     // 9th
      "echolocation",       // 11th
      "fluid form",         // 13th
      "magnetic field",     // 15th
      "iron body",          // 17th
      "shapechange",        // 19th
    ],
    bonusFeats: [
      "Blind-Fight",
      "Combat Expertise",
      "Dodge",
      "Eldritch Heritage",
      "Expanded Arcana",
      "Improved Disarm",
      "Lightning Reflexes",
      "Skill Focus (Knowledge [engineering])",
    ],
    bloodlineSkills: ["Knowledge (engineering)"],
    source: "pf1e-ppc-por",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-oni',
    name: 'Oni',
    classIds: ['sorcerer'],
    description: "As slaves of capricious oni lords, your ancestors were forced to yield to their masters' hedonistic desires, inevitably tainting their descendants with oni blood. While some would call you cursed, you have learned to unlock the powers of your oni heritage.",
    bloodlineArcana: "Whenever you cast a spell of the charm or compulsion subschool, you gain a bonus on Bluff, Diplomacy, and Intimidate skill checks equal to the level of the spell for 1d4 rounds.",
    powers: [
      {
        name: "Touch of Agony",
        description: "At 1st level, you can make a melee touch attack as a standard action that wracks a living creature with agonizing pain. The target takes 1d4 points of nonlethal damage each round for a number of rounds equal to 1/2 your sorcerer level (minimum 1). You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Altered Form",
        description: "At 3rd level, you gain the ability to change shape (as the spell alter self) for a number of minutes per day equal to your sorcerer level. These rounds need not be consecutive. At 17th level, the duration is no longer limited and you may remain in your chosen form as long as you want.",
        levelGained: 3,
      },
      {
        name: "Windborne",
        description: "At 9th level, you can turn gaseous (as gaseous form) for a number of rounds per day equal to your sorcerer level. These rounds need not be consecutive. At 11th level and every two levels thereafter, your speed while gaseous increases by +10 feet (maximum 60 feet at 19th level).",
        levelGained: 9,
      },
      {
        name: "Oni Healing",
        description: "At 15th level, if your hit points drop below 0, you automatically stabilize and begin regenerating 2 hit points per round for a number of rounds per day equal to your sorcerer level. If you take acid or fire damage, you stop regenerating for the rest of the day. You still die if your hit points reach a negative number equal to your Constitution score. This ability only works once per day.",
        levelGained: 15,
      },
      {
        name: "Hedonistic Master",
        description: "At 20th level, you can change your shape between your natural form and that of any one Large humanoid creature of the giant subtype at will (as giant form I). You choose the giant form at 20th level; this cannot later be changed. You gain SR equal to 6 + your sorcerer level, and whenever you cast a spell of the charm or compulsion subschool, the spell's DC increases by +2.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "ray of enfeeblement",   // 3rd
      "invisibility",          // 5th
      "fly",                   // 7th
      "charm monster",         // 9th
      "cone of cold",          // 11th
      "greater dispel magic",  // 13th
      "waves of exhaustion",   // 15th
      "trap the soul",         // 17th
      "dominate monster",      // 19th
    ],
    bonusFeats: [
      "Combat Expertise",
      "Combat Reflexes",
      "Enforcer",
      "Fast Healer",
      "Improved Initiative",
      "Iron Will",
      "Power Attack",
      "Skill Focus (Intimidate)",
      "Weapon Proficiency (katana)",
    ],
    bloodlineSkills: ["Intimidate"],
    source: "pf1e-ppc-dep",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-orc',
    name: 'Orc',
    classIds: ['sorcerer'],
    description: "The rage of your ancestors burns within you, and the taint of savage orc blood flows through your veins. Your anger is never far from the surface, giving you strength and driving you to seek greater power. You are heir to the bestial power of the great orc warlords of the past.",
    bloodlineArcana: "You gain the orc subtype, including darkvision 60 feet and light sensitivity. If you already have darkvision, its range increases to 90 feet. Whenever you cast a spell that deals damage, that spell deals +1 point of damage per die rolled.",
    powers: [
      {
        name: "Touch of Rage",
        description: "At 1st level, you can touch a creature as a standard action, giving it a morale bonus on attack rolls, damage rolls, and Will saving throws equal to 1/2 your sorcerer level (minimum 1) for 1 round. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Fearless",
        description: "At 3rd level, you gain a +4 bonus on saving throws against fear and a +1 natural armor bonus. At 9th level, you lose your light sensitivity, gain immunity to fear, and your natural armor bonus increases to +2.",
        levelGained: 3,
      },
      {
        name: "Strength of the Beast",
        description: "At 9th level, you gain a +2 inherent bonus to your Strength. This bonus increases to +4 at 13th level and to +6 at 17th level.",
        levelGained: 9,
      },
      {
        name: "Power of Giants",
        description: "At 15th level, you may grow to Large size as a standard action, gaining a +6 size bonus to Strength, -2 penalty to Dexterity, +4 size bonus to Constitution, and +4 natural armor bonus. You may return to normal size as a standard action. You may remain Large for up to 1 minute per character level per day (in 1-minute increments).",
        levelGained: 15,
      },
      {
        name: "Warlord Reborn",
        description: "At 20th level, you become a true orc warlord of legend. You gain immunity to fire and DR 5/--. Once per day, you can cast transformation as a spell-like ability using your sorcerer level as your caster level.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "burning hands",          // 3rd
      "bull's strength",        // 5th
      "rage",                   // 7th
      "wall of fire",           // 9th
      "cloudkill",              // 11th
      "transformation",         // 13th
      "delayed blast fireball", // 15th
      "iron body",              // 17th
      "meteor swarm",           // 19th
    ],
    bonusFeats: [
      "Diehard",
      "Endurance",
      "Great Fortitude",
      "Intimidating Prowess",
      "Improved Overrun",
      "Power Attack",
      "Toughness",
      "Widen Spell",
    ],
    bloodlineSkills: ["Survival"],
    source: "pf1e-ppc-oog",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-pestilence',
    name: 'Pestilence',
    classIds: ['sorcerer'],
    description: "You were born during the height of a great magical plague, to a mother suffering from an eldritch disease, or you suffered an eldritch pox as a child, such that your very soul now carries a blight of pestilence within it. You awaken and quicken the lurking pestilence in your own body or the surrounding world to wreak hideous malice, or to command and commune with agents of such plagues.",
    bloodlineArcana: "Vermin are susceptible to your mind-affecting spells. They are treated as animals for the purposes of determining which mind-affecting spells affect them.",
    powers: [
      {
        name: "Plague's Caress",
        description: "At 1st level, you can make a melee touch attack as a standard action that causes a living creature's flesh to break out into rancid-smelling pustules and sores for a number of rounds equal to 1/2 your sorcerer level (minimum 1 round). These sores cause the victim to become sickened for the duration (a disease effect). You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Accustomed to Awfulness",
        description: "At 3rd level, you become immune to the sickened condition and gain a +4 bonus on saving throws against nausea or disease effects. At 9th level, you become immune to the nauseated condition and to the debilitating effects of disease (though you can still be a carrier).",
        levelGained: 3,
      },
      {
        name: "Shroud of Vermin",
        description: "At 9th level, swarms no longer harm you. You can walk among swarms without fear and, as a standard action, mentally command a swarm you stand in (if you have more Hit Dice than the swarm). Your body crawls with vermin, increasing your natural armor bonus by +1 (increasing to +2 at 11th level and +3 at 17th level).",
        levelGained: 9,
      },
      {
        name: "Pestilential Breath",
        description: "At 15th level, once per day as a standard action, you can exhale a cloud of pestilence in a 30-foot cone. Those caught must make a Fortitude save (DC 10 + 1/2 sorcerer level + Cha modifier) or contract two diseases chosen from: blinding sickness, bubonic plague, cackle fever, filth fever, leprosy, mindfire, red ache, shakes, or slimy doom. At 17th level, usable twice per day; at 20th level, three times per day.",
        levelGained: 15,
      },
      {
        name: "Plague Carrier",
        description: "At 20th level, your touch inflicts mummy rot on those you strike. You can suppress this ability for 1 round as a swift action. You can inflict this disease via touch attack, melee weapon, or touch-based spell. The target can resist contracting mummy rot with a Fortitude save (DC 10 + 1/2 sorcerer level + Cha modifier).",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "ray of enfeeblement",  // 3rd
      "summon swarm",         // 5th
      "stinking cloud",       // 7th
      "poison",               // 9th
      "insect plague",        // 11th
      "eyebite",              // 13th
      "creeping doom",        // 15th
      "horrid wilting",       // 17th
      "power word kill",      // 19th
    ],
    bonusFeats: [
      "Brew Potion",
      "Diehard",
      "Endurance",
      "Great Fortitude",
      "Self Sufficient",
      "Skill Focus (Knowledge [nature])",
      "Silent Spell",
      "Toughness",
    ],
    bloodlineSkills: ["Knowledge (nature)"],
    source: "pf1e-ap29",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-phoenix',
    name: 'Phoenix',
    classIds: ['sorcerer'],
    description: "One of your ancestors bore witness to a phoenix's resurrection and formed a bond with the magical creature. The resurrecting flames still course through your veins, surging with power. The phoenix is an elemental creature of sky and primal fire, and its blood within you sings with a similar power.",
    bloodlineArcana: "When casting any spell that deals fire damage, you can instead heal your targets. The spell deals no damage, and living creatures affected instead regain a number of hit points equal to half the fire damage the spell would normally deal.",
    powers: [
      {
        name: "The Unseen World",
        description: "At 1st level, you gain detect magic and read magic as spells known. At 5th level, as a swift action you can automatically identify the properties of a non-cursed magic item you hold (cursed items must still be identified normally). You can use this identification ability a number of times equal to your Charisma modifier per day.",
        levelGained: 1,
      },
      {
        name: "Immolation",
        description: "At 3rd level, you gain the ability to surround yourself in fire as a swift action. This fire burns for a number of rounds per day equal to your character level plus your Charisma bonus (need not be consecutive). Any unarmed attacks you make while immolated deal an additional 1d6 fire damage, and any creature that ends its turn adjacent to you takes 1d6 fire damage.",
        levelGained: 3,
      },
      {
        name: "Vermilion Wings",
        description: "At 9th level, you gain the ability to grow a pair of phoenix wings from your back as a standard action, granting a fly speed of 60 feet with good maneuverability. You can dismiss the wings as a free action.",
        levelGained: 9,
      },
      {
        name: "Restoring Flames",
        description: "At 15th level, you can cast greater restoration once per day as a spell-like ability.",
        levelGained: 15,
      },
      {
        name: "Rebirth",
        description: "At 20th level, the full power of a phoenix erupts from within you if you perish. When you die, you are brought back to life (as true resurrection) after 1 minute. This ability can be used only once every 24 hours; if slain again within this period, your death is permanent.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "color spray",                // 3rd
      "see invisibility",           // 5th
      "magic circle against evil",  // 7th
      "wall of fire",               // 9th
      "break enchantment",          // 11th
      "path of the winds",          // 13th
      "firebrand",                  // 15th
      "prismatic wall",             // 17th
      "fiery body",                 // 19th
    ],
    bonusFeats: [
      "Dodge",
      "Elemental Focus (fire)",
      "Fast Healer",
      "Improved Initiative",
      "Iron Will",
      "Mobility",
      "Quicken Spell",
      "Skill Focus (Knowledge [arcana])",
    ],
    bloodlineSkills: ["Knowledge (arcana)"],
    source: "pf1e-ppc-hog",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-possessed',
    name: 'Possessed',
    classIds: ['sorcerer'],
    description: "A spirit once possessed one of your ancestors, and the haunting that it sends ripples of power down through the generations. The mystical connection with your possessing spirit allows you to gain more control over your body and mind.",
    bloodlineArcana: "Whenever you cast a non-cantrip spell, you can roll the next Will save you attempt against a mind-affecting effect before your next turn twice and take the better result. If you have already failed a save against a mind-affecting effect, you can instead attempt another Will save against that ongoing effect after successfully casting your spell (usable only once against a given effect). Usable a number of times per day equal to 3 + your Charisma modifier.",
    powers: [
      {
        name: "Aggressive Possession",
        description: "At 1st level, you can make a melee touch attack as a standard action. The target must succeed at a Will save (DC 10 + 1/2 sorcerer level + Cha modifier) or be confused for 1 round. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Sight Unseen",
        description: "At 3rd level, you gain darkvision with a range of up to 30 feet. If you already have darkvision, its range increases by 30 feet instead. At 9th level, you gain lifesense with a range of 30 feet (allowing you to sense and locate living creatures as if you had blindsight).",
        levelGained: 3,
      },
      {
        name: "Inside Agent",
        description: "At 9th level, you can reroll any Perception check you just attempted by allowing your possessing spirit to take further control. You take a -2 penalty on all other skill checks for the following minute as the spirit interferes. At 13th level, you can reroll any other skill check, but the penalty increases to -4 for the following 10 minutes. You must reroll before learning the original result.",
        levelGained: 9,
      },
      {
        name: "One Body, Two Minds",
        description: "At 15th level, once per day you can improve the effectiveness of a single spell by having your possessing spirit channel it. The spell acts as though affected by both Silent Spell and Still Spell metamagic feats. If the spell is a mind-affecting spell, it also benefits from Extend Spell. This ability does not increase the spell slot used.",
        levelGained: 15,
      },
      {
        name: "Dual Spirit",
        description: "At 20th level, you gain immunity to mind-affecting effects. Whenever you successfully employ a possession effect (such as magic jar or possession), you remain in complete control of your body as the possessing spirit inhabits the target.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "anticipate peril",   // 3rd
      "share memory",       // 5th
      "purge spirit",       // 7th
      "entrap spirit",      // 9th
      "possession",         // 11th
      "telepathy",          // 13th
      "insanity",           // 15th
      "bilocation",         // 17th
      "divide mind",        // 19th
    ],
    bonusFeats: [
      "Combat Casting",
      "Deceitful",
      "Fearsome Spell",
      "Improved Iron Will",
      "Iron Will",
      "Persuasive",
      "Selective Spell",
      "Skill Focus (Bluff)",
      "Spell Focus",
      "Traumatic Spell",
    ],
    bloodlineSkills: ["Knowledge (religion)"],
    source: "pf1e-ppc-hhh",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-protean',
    name: 'Protean',
    classIds: ['sorcerer'],
    description: "You have in your veins the ever-changing wildness of primal chaos, the raw essence of unbound creation. Your ancestral immersion in primordial chaos begets your curiously warped magical talents. You find it difficult to stay on a task when another, new and exciting, catches your interest.",
    bloodlineArcana: "Your magic of creation and changing is hard to unravel. The DC to dispel transmutation or conjuration (creation) spells that you cast is increased by +4.",
    powers: [
      {
        name: "Protoplasm",
        description: "At 1st level, you can create a ball of entropic protoplasm and hurl it at targets within 30 feet. This protoplasm acts as a tanglefoot bag that also inflicts 1 point of acid damage per round to a creature entangled by it. The protoplasm dissolves within 1d3 rounds. You may use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Protean Resistances",
        description: "At 3rd level, you gain resist acid 5 and a +2 bonus on saving throws against polymorph, petrification, and transmutation spells or effects. At 9th level, you gain resist acid 10 and your save bonus increases to +4.",
        levelGained: 3,
      },
      {
        name: "Reality Wrinkle",
        description: "At 9th level, you can surround yourself with a mobile 10-foot-radius emanation of mutable reality. This is similar to solid fog but does not provide concealment or block line of sight, and your movement is not slowed. Attacks from outside the aura suffer a 20% miss chance against targets inside. You may use this ability for rounds per day equal to your sorcerer level (need not be consecutive).",
        levelGained: 9,
      },
      {
        name: "Spatial Tear",
        description: "At 15th level, once per day you can unravel the fibers of reality and ride along them as they snap back. This functions as dimension door while also creating a mass of black tentacles centered on your former location (both at your sorcerer level as caster level). At 20th level, usable twice per day.",
        levelGained: 15,
      },
      {
        name: "Avatar of Chaos",
        description: "At 20th level, you are infused with the essence of raw chaos. You gain immunity to acid, petrification, and polymorph effects (except when cast on yourself), as well as a +2 bonus to save DCs and on checks to overcome spell penetration against creatures with the lawful subtype.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "entropic shield",      // 3rd
      "blur",                 // 5th
      "gaseous form",         // 7th
      "confusion",            // 9th
      "major creation",       // 11th
      "disintegrate",         // 13th
      "greater polymorph",    // 15th
      "polymorph any object", // 17th
      "shapechange",          // 19th
    ],
    bonusFeats: [
      "Agile Maneuvers",
      "Defensive Combat Training",
      "Enlarge Spell",
      "Great Fortitude",
      "Improved Great Fortitude",
      "Skill Focus (Craft [any])",
      "Spell Focus",
      "Toughness",
    ],
    bloodlineSkills: ["Knowledge (planes)"],
    source: "pf1e-apg",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-psychic',
    name: 'Psychic',
    classIds: ['sorcerer'],
    description: "Psychic power runs through your blood, whether from a familial predisposition to psychic power or exposure to a powerful psychic phenomenon. Whatever the source of this power, your mind is a dangerous weapon. Your psychic powers make you a master mentalist, but your soul struggles with the urge to transcend into a pure thought-form.",
    bloodlineArcana: "Your sorcerer spells and spell-like abilities count as psychic instead of arcane. You use thought and emotion components instead of verbal and somatic components when casting your spells.",
    powers: [
      {
        name: "Psychic Strike",
        description: "At 1st level, you can overwhelm the minds of those nearby. Target one creature within 30 feet that you can see; it must succeed at a Will save (DC 10 + 1/2 sorcerer level + Cha modifier) or take 1d6 + 1 per 2 sorcerer levels points of damage and become shaken for 1 round. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Mental Resistance",
        description: "At 3rd level, your mind blocks attempts to assail it. You gain a +2 bonus on saving throws against mind-affecting effects. At 9th level, this bonus increases to +4.",
        levelGained: 3,
      },
      {
        name: "Undercasting Prodigy",
        description: "Starting at 9th level, whenever you gain a new level of spells, you automatically replace any psychic bloodline spells that can be undercast with the highest-level version you can cast. For example, at 9th level you replace mind thrust I, id insinuation I, and ego whip I with mind thrust IV, id insinuation III, and ego whip II.",
        levelGained: 9,
      },
      {
        name: "Thoughtsense",
        description: "At 15th level, you can detect the thoughts of others around you as a constant thoughtsense effect with a range of 30 feet.",
        levelGained: 15,
      },
      {
        name: "True Thought-Form",
        description: "At 20th level, you can shed the restrictions of the flesh and become a thoughtform. Whenever a creature would kill you, you can attempt to use mind swap against that creature as an immediate action just before dying.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "mind thrust I",        // 3rd
      "id insinuation I",     // 5th
      "ego whip I",           // 7th
      "intellect fortress I", // 9th
      "psychic crush I",      // 11th
      "mental barrier V",     // 13th
      "tower of iron will III", // 15th
      "bilocation",           // 17th
      "microcosm",            // 19th
    ],
    bonusFeats: [
      "Focused Spell",
      "Heighten Spell",
      "Intuitive Spell",
      "Iron Will",
      "Logical Spell",
      "Persuasive",
      "Quicken Spell",
      "Skill Focus (Sense Motive)",
      "Spell Focus",
    ],
    bloodlineSkills: ["Sense Motive"],
    source: "pf1e-oa",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-rakshasa',
    name: 'Rakshasa',
    classIds: ['sorcerer'],
    description: "At some point in your family's history, one of your ancestors was tainted by the influence of a rakshasa. You benefit from societies that would never deal with you if your heritage were known. You can call upon the nearly divine power of your rakshasa ancestors, giving you the power to convincingly deceive your enemies.",
    bloodlineArcana: "Add half your sorcerer level to the Spellcraft DC for others to identify spells you cast. If their checks fail by 5 or more, they mistakenly believe you are casting an entirely different spell (selected by you when you begin casting).",
    powers: [
      {
        name: "Silver Tongue",
        description: "At 1st level, you can draw upon your outsider heritage to spin amazingly convincing lies as a swift action. You gain a +5 bonus on one Bluff check made to convince another of the truth of your words (similar to glibness). If a magical effect would detect your lies or force you to speak truthfully, the user must succeed on a caster level check (DC 10 + sorcerer level) or the effect fails. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Mind Reader",
        description: "At 3rd level, you can read minds as a spell-like ability (as detect thoughts, but lasting only 1 round, targeting a single creature as a standard action; on a failed Will save, you gain information as if you had concentrated for 3 rounds). Usable once per day at 3rd level, plus one additional time per day for every four sorcerer levels beyond 3rd (maximum five times per day at 20th level).",
        levelGained: 3,
      },
      {
        name: "Hide Aura",
        description: "At 9th level, you can conceal yourself from prying magic. This acts as a constant nondetection spell cast upon yourself. You can end or restore this protection as a move action.",
        levelGained: 9,
      },
      {
        name: "Alter Self",
        description: "At 15th level, you can change your shape into that of any humanoid at will (as alter self, but you may remain in a chosen form as long as you want).",
        levelGained: 15,
      },
      {
        name: "Outsider",
        description: "At 20th level, your natural form becomes an animal-headed humanoid. You are forevermore treated as a native outsider rather than a humanoid for the purpose of spells and magical effects (but can still be raised from the dead as your previous creature type). You gain DR 10/piercing.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "charm person",      // 3rd
      "invisibility",      // 5th
      "suggestion",        // 7th
      "detect scrying",    // 9th
      "prying eyes",       // 11th
      "mass suggestion",   // 13th
      "greater polymorph", // 15th
      "mind blank",        // 17th
      "dominate monster",  // 19th
    ],
    bonusFeats: [
      "Arcane Armor Mastery",
      "Arcane Armor Training",
      "Deceitful",
      "Detect Expertise",
      "Empower Spell",
      "Light Armor Proficiency",
      "Martial Weapon Proficiency",
      "Stealthy",
    ],
    bloodlineSkills: ["Disguise"],
    source: "pf1e-um",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-salamander',
    name: 'Salamander',
    classIds: ['sorcerer'],
    description: "You are descended from the elemental outsiders known as salamanders. You wield flame as a weapon and a tool, and your smithing skills are unrivaled. Your salamander blood gives you great skill at crafting, even as it reshapes your form.",
    bloodlineArcana: "The DCs of your sorcerer spells increase by 2 against creatures that are suffering ongoing fire damage.",
    powers: [
      {
        name: "Ember",
        description: "At 1st level, when making a Craft check involving metal, you can expend any number of uses of this ability (up to half your sorcerer level, minimum one use) to gain a circumstance bonus on the check equal to twice the number of uses expended. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Forge and Fire",
        description: "At 3rd level, you gain Craft Magic Arms and Armor as a bonus feat. Whenever you cast a nonpermanent, noninstantaneous spell that improves or enhances a manufactured weapon, you can also give that weapon the flaming special ability for the spell's duration (no effect if it already has flaming).",
        levelGained: 3,
      },
      {
        name: "Serpent's Tail",
        description: "At 9th level, you can transform your legs into a serpentine tail as a free action. Your speed is reduced by 10 feet (minimum 5 feet), and you cannot be tripped. You gain a tail slap natural attack (1d8 damage + Str modifier; 1d6 if Small). At 15th level, your reach with the tail slap increases by 5 feet. These effects last for minutes per day equal to your sorcerer level (in 1-minute increments).",
        levelGained: 9,
      },
      {
        name: "Searing Heat",
        description: "At 15th level, your body becomes as hot as a salamander's. You deal 1d6 additional fire damage with natural weapons and melee attacks made with metal weapons, and 2d6 fire damage per round to any creature you grapple. This heat does not damage your equipment. You can activate or deactivate this effect as a free action.",
        levelGained: 15,
      },
      {
        name: "Reforged Flesh",
        description: "At 20th level, you become immune to fire damage and gain DR 10/adamantine and magic.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "magic weapon",               // 3rd
      "molten orb",                 // 5th
      "magic vestment",             // 7th
      "fire shield (warm shield)",  // 9th
      "fire snake",                 // 11th
      "tar pool",                   // 13th
      "firebrand",                  // 15th
      "wall of lava",               // 17th
      "meteor swarm",               // 19th
    ],
    bonusFeats: [
      "Cleave",
      "Craft Wondrous Item",
      "Iron Will",
      "Power Attack",
      "Prodigy",
      "Skill Focus (Acrobatics)",
      "Skill Focus (Perception)",
      "Toughness",
    ],
    bloodlineSkills: ["Acrobatics"],
    source: "pf1e-ppc-emh",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-scorpion',
    name: 'Scorpion',
    classIds: ['sorcerer'],
    description: "Whether your ancestors served a scorpion goddess or simply worked closely with more mundane members of the species, the venom from these arachnids has seeped down through generations into your blood. Wherever your lineage hails from, the desert is in your blood.",
    bloodlineArcana: "You are trained in the use of poison and cannot accidentally poison yourself when applying poison to a weapon.",
    powers: [
      {
        name: "Progenitor's Sting",
        description: "You can magically apply your toxic essence onto your weapon or a willing ally's weapon within 30 feet as a standard action (Poison: injury; Fort DC 10 + half sorcerer level + Cha modifier; frequency 1/round for 6 rounds; effect 1 Str, Dex, or Con damage; cure 1 save). Usable a number of times per day equal to 3 + Cha modifier. At 5th level, ability damage increases to 1d3. At 7th level, choose two ability scores to affect. At 11th level, you can apply it to all willing allies' weapons within 20 feet as one use.",
        levelGained: 1,
      },
      {
        name: "Modify Onset",
        description: "At 3rd level, you can increase the onset time of poisons you use by up to 1 hour per level. At 9th level, you can alter a poison to have no onset time but trigger it as a swift action at any time (the poison dissipates harmlessly after 1 week if not triggered). The poison can be detected and removed normally before triggering.",
        levelGained: 3,
      },
      {
        name: "Sudden Sting",
        description: "At 9th level, when you are able to act in the surprise round, you can take a full round's worth of actions rather than just a single standard action. You can also cast accelerate poison and delay poison as spell-like abilities a total of three times per day.",
        levelGained: 9,
      },
      {
        name: "Sandwalker",
        description: "At 15th level, you gain a burrow speed of 30 feet and tremorsense with a range of 60 feet.",
        levelGained: 15,
      },
      {
        name: "It Is My Nature",
        description: "At 20th level, three times per day when an enemy moves into a square adjacent to you, you can make a melee touch attack as an immediate action. On a hit, the creature must succeed at a Fortitude save (DC 10 + half sorcerer level + Cha modifier) or die. A creature that succeeds at this save is immune to this effect for 24 hours. This is a poison and death effect.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "thorn javelin",              // 3rd
      "spider climb",               // 5th
      "poison",                     // 7th
      "giant vermin (scorpions only)", // 9th
      "vermin shape II",            // 11th
      "sirocco",                    // 13th
      "creeping doom",              // 15th
      "horrid wilting",             // 17th
      "transmute blood to acid",    // 19th
    ],
    bonusFeats: [
      "Arcane Strike",
      "Blind-Fight",
      "Combat Reflexes",
      "Disruptive Spell",
      "Improved Initiative",
      "Nimble Moves",
      "Skill Focus (Climb)",
      "Stealthy",
    ],
    bloodlineSkills: ["Climb"],
    source: "pf1e-ppc-pp",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-serpentine',
    name: 'Serpentine',
    classIds: ['sorcerer'],
    description: "Your bloodline carries the lingering stain of ancient serpent races that ruled when the world was young. Though deception and a love of power are your birthright, you may struggle for truth in spite of your heritage. The treacherous and yet hypnotic serpent's blood that flows through you taints your magic with sinuous and seductive grace.",
    bloodlineArcana: "Your powers of compulsion can affect even bestial creatures. Whenever you cast a mind-affecting or language-dependent spell, it affects animals, magical beasts, and monstrous humanoids as if they were humanoids who understood your language.",
    powers: [
      {
        name: "Serpent's Fang",
        description: "At 1st level, you can grow fangs as a free action. These fangs deal 1d4 damage + Str modifier (1d3 if Small) plus poison (Bite: injury; Fort DC 10 + 1/2 sorcerer level + Con modifier; frequency 1/round for 6 rounds; effect 1 Con damage; cure 1 save). At 5th level, fangs are magical for DR and poison damage increases to 1d2 Con. At 7th level, your poison requires 2 saves to cure. At 11th level, poison damage increases to 1d4 Con. Usable for rounds per day equal to 3 + Cha modifier.",
        levelGained: 1,
      },
      {
        name: "Serpentfriend",
        description: "At 3rd level, you can use speak with animals at will with reptilian animals (including dinosaurs, lizards, and other cold-blooded creatures), and you gain a viper familiar using your sorcerer level - 2 as your effective wizard level.",
        levelGained: 3,
      },
      {
        name: "Snakeskin",
        description: "At 9th level, you gain a +1 bonus to natural armor, a +2 racial bonus on saves against poison, and a +2 bonus on Escape Artist checks. At 13th level and 17th level, these bonuses increase by +1.",
        levelGained: 9,
      },
      {
        name: "Den of Vipers",
        description: "At 15th level, once per day you may summon a host of writhing serpents (as creeping doom, but the swarms' poison inflicts Con damage and any creature other than you sharing a space with a swarm is entangled).",
        levelGained: 15,
      },
      {
        name: "Scaled Soul",
        description: "At 20th level, you gain the shapechanger subtype and can assume the form of a reptilian humanoid (as alter self) or snake of Diminutive to Huge size (as beast shape III) at will. You retain speech and somatic spell casting while transformed. You also become immune to poison and paralysis, can use serpent's fang as often as desired, and may choose to inflict damage to any ability score.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "hypnotism",                        // 3rd
      "delay poison",                     // 5th
      "summon monster III (reptiles only)", // 7th
      "poison",                           // 9th
      "hold monster",                     // 11th
      "mass suggestion",                  // 13th
      "summon monster VII (reptiles only)", // 15th
      "irresistible dance",               // 17th
      "dominate monster",                 // 19th
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
    source: "pf1e-apg",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-shadow',
    name: 'Shadow',
    classIds: ['sorcerer'],
    description: "Spirits from the Shadow Plane dally at times in the world of light, and such as these lay with your ancestors once upon a time, imparting the mystery of shadow-stuff into your lineage. Your benighted heritage infuses your mastery of magic with the essence of shadowstuff. You tend to avoid the light, cultivating an air of mystery and majesty that is all your own.",
    bloodlineArcana: "Whenever you cast a spell with the darkness descriptor or the shadow subschool, you gain a circumstance bonus on Stealth checks equal to the spell's level for 1d4 rounds.",
    powers: [
      {
        name: "Shadowstrike",
        description: "At 1st level, you can make a melee touch attack as a standard action that inflicts 1d4 points of nonlethal damage + 1 for every two sorcerer levels you possess. The target is also dazzled for 1 minute. Creatures with low-light vision or darkvision are not dazzled by this ability. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Nighteye",
        description: "At 3rd level, you gain darkvision 30 feet. At 9th level, you gain darkvision 60 feet. If you already possess darkvision, its range is increased by these amounts.",
        levelGained: 3,
      },
      {
        name: "Shadow Well",
        description: "At 9th level, you can use the Stealth skill even while being observed and without cover or concealment, as long as you are within 10 feet of a shadow other than your own. When within darkness or dim light, as a standard action you may switch places with a willing ally within 60 feet who is also in darkness or dim light (as dimension door). At 13th level, you can instead switch the positions of two willing allies each within 60 feet of you. Usable once per day at 9th level, plus one additional use per day at 17th and 20th levels.",
        levelGained: 9,
      },
      {
        name: "Enveloping Darkness",
        description: "At 15th level, once per day you may create an area of deeper darkness that you can see through without penalty. All creatures except you are entangled within this darkness unless using freedom of movement or a similar effect.",
        levelGained: 15,
      },
      {
        name: "Shadow Master",
        description: "At 20th level, you can see perfectly in natural or magical darkness. When you use shadow conjuration or shadow evocation spells, your creations are 20% more real, and any creatures you create gain the benefits of the Augment Summoning feat.",
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
    source: "pf1e-apg",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-shaitan',
    name: 'Shaitan',
    classIds: ['sorcerer'],
    description: "You were born with the power of earth genies, and the magic of the shaitans is strong in you. Like a shaitan, you have both natural power over earth and several other genie-based abilities.",
    bloodlineArcana: "Whenever you cast a spell that deals energy damage, you can change the type of damage to acid. This effect also changes the spell's descriptors to match this energy type.",
    powers: [
      {
        name: "Acid Ray",
        description: "Starting at 1st level, you can unleash an elemental ray as a standard action, targeting any foe within 30 feet as a ranged touch attack. This ray deals 1d6 points of acid damage + 1 for every two sorcerer levels you possess. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Elemental Resistance",
        description: "At 3rd level, you gain acid resistance 10. At 9th level, your acid resistance increases to 20.",
        levelGained: 3,
      },
      {
        name: "Avalanche",
        description: "At 9th level, whenever you hit a single target with a spell that deals damage, you may make a bull rush check as a swift action. Your CMB for this maneuver equals your sorcerer caster level + your Charisma bonus. You can make this maneuver even if the target is not in melee range, without provoking attacks of opportunity. If the target is in contact with earth, stone, or rock, you gain a +4 bonus on your CMB check.",
        levelGained: 9,
      },
      {
        name: "Elemental Movement",
        description: "At 15th level, you gain a burrow speed of 30 feet.",
        levelGained: 15,
      },
      {
        name: "Power of the Shaitan",
        description: "At 20th level, once per day you can cast limited wish as a spell-like ability. Wishes must begin with the words 'I wish' and cannot duplicate a wish granted within the past 24 hours. You become immune to acid damage and can use plane shift once per day to travel to or from the Plane of Earth.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "true strike",        // 3rd
      "glitterdust",        // 5th
      "greater magic weapon", // 7th
      "stoneskin",          // 9th
      "wall of stone",      // 11th
      "wall of iron",       // 13th
      "plane shift",        // 15th
      "iron body",          // 17th
      "wish",               // 19th
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
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-shapechanger',
    name: 'Shapechanger',
    classIds: ['sorcerer'],
    description: "Channeling the power of your shapeshifting ancestors that you carry in your blood, you gain powers that allow you to change your shape and alter your appearance and physical abilities.",
    bloodlineArcana: "You are very skilled with magic that transforms you. Transmutation spells you cast only on yourself affect you as though your caster level were 1 higher.",
    powers: [
      {
        name: "Hardened Fists",
        description: "At 1st level, you can make your fists grow large, callused, and gnarled as a free action. Your unarmed strikes deal damage as though you were one size category larger, deal lethal damage, and do not provoke attacks of opportunity. If you have claws, they are affected instead. You can use this ability for rounds per day equal to 3 + Charisma modifier (need not be consecutive).",
        levelGained: 1,
      },
      {
        name: "Mutable Flesh",
        description: "At 3rd level, once per day when you cast a transmutation spell with a duration of 1 minute per level that affects only you, you can increase its duration to 10 minutes per level. At 9th level, you can increase the duration to 1 hour per level.",
        levelGained: 3,
      },
      {
        name: "Vortex of Flesh",
        description: "At 9th level, once per day as a standard action, you change into an amalgam of erratic geometric shapes and lash out at every creature in a 20-foot-radius spread, dealing 1d6 bludgeoning, piercing, and slashing damage per sorcerer level (Reflex half, DC 10 + half sorcerer level + Cha modifier). At 17th level, usable twice per day. At 20th level, three times per day.",
        levelGained: 9,
      },
      {
        name: "Superior Transformation",
        description: "At 15th level, you are immune to polymorph effects unless you are a willing target. Once per day when you cast a polymorph spell on yourself, in addition to the normal effects, you can choose to gain a fly speed of 60 feet (average), a swim speed of 60 feet, or an increase to your base land speed of 30 feet.",
        levelGained: 15,
      },
      {
        name: "Amorphous Anatomy",
        description: "At 20th level, you gain immunity to critical hits and sneak attacks. In addition, you gain blindsight with a range of 60 feet and DR 5/--. You automatically recover from physical blindness or deafness after 1 round by growing new sensory organs.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "disguise self",      // 3rd
      "alter self",         // 5th
      "fly",                // 7th
      "beast shape II",     // 9th
      "polymorph",          // 11th
      "transformation",     // 13th
      "greater polymorph",  // 15th
      "frightful aspect",   // 17th
      "shapechange",        // 19th
    ],
    bonusFeats: [
      "Combat Casting",
      "Dodge",
      "Extend Spell",
      "Great Fortitude",
      "Improved Initiative",
      "Lightning Reflexes",
      "Skill Focus (Disguise)",
      "Toughness",
    ],
    bloodlineSkills: ["Disguise"],
    source: "pf1e-ppc-lfw",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-solar',
    name: 'Solar',
    classIds: ['sorcerer'],
    description: "Sorcerers who serve in the sun goddess's court display powers infused with the glory of the sun itself. The solar power that infuses your being alters the way you interact with the world, searing through your spells.",
    bloodlineArcana: "Whenever you cast a spell with the fire descriptor, if it deals damage, it deals +1 point of damage per die rolled.",
    powers: [
      {
        name: "Sunsight",
        description: "At 1st level, you gain low-light vision and cannot be dazzled. If you already have low-light vision, you instead gain a +4 bonus on saving throws against blindness effects.",
        levelGained: 1,
      },
      {
        name: "Friend of Fire",
        description: "At 3rd level, you gain fire resistance 10. At 5th level, when in contact with flame or a burning object, add 1 per die to any healing effect of which you are the target. At 9th level, fire resistance increases to 20. At 20th level, you gain immunity to fire.",
        levelGained: 3,
      },
      {
        name: "Cleansing Flame",
        description: "At 9th level, twice per day, as a standard action you can wreathe your hand in halo of flame and touch yourself or another creature. The touch heals 2d8 + character level hit points and can remove one of the following: 1d6 ability damage, blinded, confused, dazzled, deafened, diseased, exhausted, fatigued, nauseated, poisoned, or sickened. At 20th level, usable three times per day.",
        levelGained: 9,
      },
      {
        name: "Healing Fire",
        description: "At 15th level, you can channel energy twice per day as a cleric of half your level. Instead of damaging undead, you can convert the positive energy to flame and deal an equivalent amount of fire damage.",
        levelGained: 15,
      },
      {
        name: "Solar Ascension",
        description: "At 20th level, as a full-round action you can become an incorporeal being of light for 1 round per sorcerer level. You gain the incorporeal subtype and take half damage from corporeal magic attacks (no damage from nonmagical sources). Your spells deal half damage to corporeal creatures but non-damage spells function normally. While in this form, any creature you move through takes 2d6 fire damage.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "searing light",          // 3rd
      "fury of the sun",        // 5th
      "daylight",               // 7th
      "shield of dawn",         // 9th
      "flame strike",           // 11th
      "true seeing",            // 13th
      "sunbeam",                // 15th
      "sunburst",               // 17th
      "overwhelming presence",  // 19th
    ],
    bonusFeats: [
      "Alertness",
      "Combat Casting",
      "Empower Spell",
      "Improved Initiative",
      "Lightning Reflexes",
      "Quicken Spell",
      "Spell Focus",
      "Spell Penetration",
    ],
    bloodlineSkills: ["Perception"],
    source: "pf1e-cs-qje",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-starsoul',
    name: 'Starsoul',
    classIds: ['sorcerer'],
    description: "You come from a line of stargazers and explorers who delved deeply into the darkness beyond the stars. Your skyward gaze and communion with the heavens focus and enhance your magical talents. Your mind, spirit, and body yearn to span the gulf between worlds.",
    bloodlineArcana: "Whenever you cast an evocation spell, targets that fail their saves are dazzled by tiny sparkling starlights for 1 round per level of the spell.",
    powers: [
      {
        name: "Minute Meteors",
        description: "At 1st level, you can summon a rain of tiny meteorites as a standard action to fall in a 5-foot column, 30 feet high, with a range of 30 feet. The meteors inflict 1d4 points of fire damage + 1 per 2 sorcerer levels (Reflex negates; DC 10 + 1/2 sorcerer level + Cha modifier). You may use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Voidwalker",
        description: "At 3rd level, you gain low-light vision and resist cold and fire 5. At 9th level, you no longer need to breathe, as if wearing a necklace of adaptation.",
        levelGained: 3,
      },
      {
        name: "Aurora Borealis",
        description: "At 9th level, you can create a sheet of cascading colors (as wall of fire, but inflicting cold damage with no heat radiation). One designated side of the aurora fascinates creatures within 10 feet (maximum 2 HD of creatures per sorcerer level; Will negates, DC 10 + 1/2 sorcerer level + Cha modifier). Usable for rounds per day equal to your sorcerer level (need not be consecutive).",
        levelGained: 9,
      },
      {
        name: "Breaching the Gulf",
        description: "At 15th level, your caster level is increased by 3 when casting spells of the teleportation subschool. Once per day, you can teleport a single creature within 30 feet into the void of space (Will negates; DC 10 + 1/2 sorcerer level + Cha modifier). The target takes 6d6 cold damage per round and must hold its breath or begin to suffocate; it can attempt a new saving throw as a full-round action each round to return.",
        levelGained: 15,
      },
      {
        name: "Starborn",
        description: "At 20th level, you gain immunity to cold and blindness, and you can see perfectly in natural or magical darkness. In addition, you gain fast healing 1 when you are outdoors at night.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "unseen servant",         // 3rd
      "glitterdust",            // 5th
      "blink",                  // 7th
      "call lightning storm",   // 9th
      "overland flight",        // 11th
      "repulsion",              // 13th
      "reverse gravity",        // 15th
      "greater prying eyes",    // 17th
      "meteor swarm",           // 19th
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
      "Skill Focus (Perception)",
      "Toughness",
    ],
    bloodlineSkills: ["Knowledge (nature)"],
    source: "pf1e-apg",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-stormborn',
    name: 'Stormborn',
    classIds: ['sorcerer'],
    description: "You trace your heritage to fierce and proud spirits of storm and sky, and living lightning sings in your veins. Your mastery of the storm is reflected in the unique panoply of powers you manifest.",
    bloodlineArcana: "Whenever you cast a spell with the electricity or sonic descriptor, increase the save DC by 1.",
    powers: [
      {
        name: "Thunderstaff",
        description: "At 1st level, you can touch a weapon as a standard action, giving it the shock property for a number of rounds equal to 1/2 your sorcerer level (minimum 1). At 9th level, you can confer the shocking burst property instead, but the duration is halved. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Stormchild",
        description: "At 3rd level, you gain resist electricity 5 and resist sonic 5, and treat wind effects as one step less severe. At 9th level, you treat wind effects as two steps less severe and gain blindsense 60 feet against concealment from natural or magical fog, mist, or weather effects.",
        levelGained: 3,
      },
      {
        name: "Thunderbolt",
        description: "At 9th level, you can command a stroke of lightning to strike from above in a 5-foot-radius cylinder 60 feet high (range 120 feet). The thunderbolt inflicts 1d6 damage per sorcerer level (half electricity, half sonic; Reflex half, DC 10 + 1/2 sorcerer level + Cha modifier). Creatures failing their saves are deafened for 1 round. Usable once per day at 9th level, twice per day at 17th, and three times per day at 20th.",
        levelGained: 9,
      },
      {
        name: "Ride the Lightning",
        description: "At 15th level, as a full-round action you can become a living lightning bolt and move in a straight line up to 10 times your speed without provoking attacks of opportunity. Creatures or objects in your path are affected as by your thunderbolt power. Solid barriers block your movement unless reduced to 0 hit points. Usable once per day for rounds per day equal to your sorcerer level.",
        levelGained: 15,
      },
      {
        name: "Storm Lord",
        description: "At 20th level, you gain immunity to deafness, stunning, and wind effects, and gain blindsight 120 feet against concealment from natural or magical fog, mist, or weather. Once per day when attacked with an electricity or sonic effect, you may forgo your saving throw and absorb the energies, healing 1 point of damage for every 3 points the attack would have dealt.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "shocking grasp",   // 3rd
      "gust of wind",     // 5th
      "lightning bolt",   // 7th
      "shout",            // 9th
      "overland flight",  // 11th
      "chain lightning",  // 13th
      "control weather",  // 15th
      "whirlwind",        // 17th
      "storm of vengeance", // 19th
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
    source: "pf1e-apg",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-undead',
    name: 'Undead',
    classIds: ['sorcerer'],
    description: "The taint of the grave runs through your family. The forces of death move through you and touch your every action. You can call upon the foul powers of the afterlife. Unfortunately, the more you draw upon them, the closer you come to joining them.",
    bloodlineArcana: "Some undead are susceptible to your mind-affecting spells. Corporeal undead that were once humanoids are treated as humanoids for the purposes of determining which spells affect them.",
    powers: [
      {
        name: "Grave Touch",
        description: "Starting at 1st level, you can make a melee touch attack as a standard action that causes a living creature to become shaken for a number of rounds equal to 1/2 your sorcerer level (minimum 1). If you touch a shaken creature, it becomes frightened for 1 round if it has fewer Hit Dice than your sorcerer level. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Death's Gift",
        description: "At 3rd level, you gain resist cold 5 and DR 5/-- against nonlethal damage. At 9th level, cold resistance increases to 10 and DR increases to 10/-- against nonlethal damage.",
        levelGained: 3,
      },
      {
        name: "Grasp of the Dead",
        description: "At 9th level, you can cause a swarm of skeletal arms to burst from the ground in a 20-foot-radius burst (range 60 feet). Anyone in this area takes 1d6 slashing damage per sorcerer level (Reflex half; DC 10 + 1/2 sorcerer level + Cha modifier). Those who fail the save are unable to move for 1 round. The skeletal arms disappear after 1 round and must burst from a solid surface. Usable once per day at 9th level, twice per day at 17th, and three times per day at 20th level.",
        levelGained: 9,
      },
      {
        name: "Incorporeal Form",
        description: "At 15th level, you can become incorporeal for 1 round per sorcerer level. While in this form, you gain the incorporeal subtype. You take only half damage from corporeal magic sources (no damage from non-magic sources). Likewise, your spells deal only half damage to corporeal creatures. Non-damaging spells and effects function normally. Usable once per day.",
        levelGained: 15,
      },
      {
        name: "One of Us",
        description: "At 20th level, you gain immunity to cold, nonlethal damage, paralysis, and sleep. You also gain DR 5/--. Unintelligent undead do not notice you unless you attack them. You receive a +4 morale bonus on saving throws against spells and spell-like abilities cast by undead.",
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
    source: "pf1e-core",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-unicorn',
    name: 'Unicorn',
    classIds: ['sorcerer'],
    description: "When a unicorn and a human form a particularly strong bond, the unicorn's magic can become a part of the bonded human, and sometimes is even passed on to her children. These children, blessed by their parent's connection to that force of true good, grow up to become sorcerers of the unicorn bloodline. Your connection to the unicorns' blessing shapes you as you grow, empowering you with the forces of good and restoration.",
    bloodlineArcana: "Every time you cast a spell, you can restore a number of hit points equal to double the level of the spell to one target of your choice that you can see. A creature at its maximum hit points cannot be affected. Healing a dying creature with this ability does not automatically stabilize it unless its hit points are brought to 0 or above.",
    powers: [
      {
        name: "Safekeeping",
        description: "At 1st level, you can touch a creature as a standard action, granting it a +2 insight bonus to AC for 1 round. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Pure of Mind",
        description: "At 3rd level, you gain a +2 bonus on saving throws against charm effects and a +4 bonus against spells with the evil descriptor. At 9th level, your bonus against charm effects increases to +4 and your bonus against spells with the evil descriptor increases to +6.",
        levelGained: 3,
      },
      {
        name: "Righteous Fury",
        description: "At 9th level, once per day you can create a spear of pure light and throw it at a creature within 60 feet (ranged touch attack using Charisma in place of Dexterity). The spear deals 1d6 damage per sorcerer level and ignores all DR and hardness. This damage increases to 1d8 per sorcerer level against evil creatures. At 13th level, usable twice per day; at 17th level, three times per day.",
        levelGained: 9,
      },
      {
        name: "Friend to Nature",
        description: "At 15th level, creatures with the animal or magical beast type and a nonevil alignment instinctively trust you. Such creatures automatically have a starting attitude of indifferent or better toward you unless you or an ally has attacked or threatened violence against them.",
        levelGained: 15,
      },
      {
        name: "Blessing",
        description: "At 20th level, you gain immunity to poison, charm effects, and spells and weapons with the evil descriptor. You can also cast magic circle against evil at will with a caster level equal to your sorcerer level.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "cure light wounds",        // 3rd
      "cure moderate wounds",     // 5th
      "cure serious wounds",      // 7th
      "neutralize poison",        // 9th
      "atonement",                // 11th
      "heal",                     // 13th
      "greater restoration",      // 15th
      "mass cure critical wounds", // 17th
      "mass heal",                // 19th
    ],
    bonusFeats: [
      "Alertness",
      "Animal Affinity",
      "Brew Potion",
      "Fleet",
      "Greater Fortitude",
      "Improved Counterspell",
      "Self-Sufficient",
      "Skill Focus (Heal)",
    ],
    bloodlineSkills: ["Heal"],
    source: "pf1e-ppc-hog",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-verdant',
    name: 'Verdant',
    classIds: ['sorcerer'],
    description: "Your progenitors infused themselves with raw plant life, binding it into their own tissue and passing it down to their literal seed, giving you innate communion with nature. The power of living things infuses every aspect of your magic, as you draw power from nature and its life energies flow through you.",
    bloodlineArcana: "Whenever you cast a spell with a range of personal, your skin toughens, granting you a natural armor bonus equal to the spell's level for 1d4 rounds. This bonus does not stack with any other natural armor bonuses you might have.",
    powers: [
      {
        name: "Tanglevine",
        description: "At 1st level, as a standard action, you can create a 15-foot-long animated vine that springs from your hand lasting 1 round. It can be used to make a single disarm, steal, or trip combat maneuver, using your sorcerer level + Charisma modifier in place of your normal CMB. Usable a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Photosynthesis",
        description: "At 3rd level, your need to eat and sleep is reduced as if wearing a ring of sustenance, and you gain a +2 racial bonus on saving throws against poison and sleep effects. At 9th level, these bonuses increase to +4.",
        levelGained: 3,
      },
      {
        name: "Massmorph",
        description: "At 9th level, as a full-round action, you can alter the size and health of plant life as if using plant growth or diminish plants. Alternatively, you can transform one willing non-plant creature per sorcerer level (no two more than 30 feet apart) as tree shape. You may transform non-plant creatures using tree shape once per day, as plant shape I at 15th level, or plant shape II at 20th level.",
        levelGained: 9,
      },
      {
        name: "Rooting",
        description: "At 15th level, as a move action you can extend roots into the ground. Your speed reduces to 5 feet, but you gain a +4 natural armor bonus, +10 CMD against bull rush, overrun, reposition, and trip, tremorsense 30 feet, and fast healing 1. Usable for minutes per day equal to your sorcerer level (in 1-minute increments).",
        levelGained: 15,
      },
      {
        name: "Shepherd of the Trees",
        description: "At 20th level, you gain a +4 natural armor bonus and immunity to paralysis, poison, polymorph, sleep, and stunning. You also gain tremorsense 30 feet even when not rooted.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "entangle",             // 3rd
      "barkskin",             // 5th
      "speak with plants",    // 7th
      "command plants",       // 9th
      "wall of thorns",       // 11th
      "transport via plants", // 13th
      "plant shape III",      // 15th
      "animate plants",       // 17th
      "shambler",             // 19th
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
    source: "pf1e-apg",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-vestige',
    name: 'Vestige',
    classIds: ['sorcerer'],
    description: "You trace your ancestry to a bygone civilization and can call upon its forgotten people or places for power. Your connection to your past allows you to tap into ancient secrets and power.",
    bloodlineArcana: "Whenever you cast a spell of the divination school, you see into the past. You gain an insight bonus equal to the divination spell's level on the next Appraise, Craft, or Knowledge skill check you attempt within 24 hours.",
    powers: [
      {
        name: "Bonded Object",
        description: "At 1st level, you gain an arcane bond (as a wizard equal to your sorcerer level) with an object constructed by a long-lost civilization. Your sorcerer levels stack with any wizard levels for determining bonded object powers. This ability does not allow you to have both a familiar and a bonded object. Once per day, your bonded object allows you to cast any one spell you know and increase that spell's save DC by 1.",
        levelGained: 1,
      },
      {
        name: "Restored Glory",
        description: "At 3rd level, objects in your possession with the broken condition function as if they did not have the broken condition. At 9th level, destroyed objects in your possession function and appear as if broken. At 15th level, destroyed objects in your possession function and appear as if fully repaired. Objects that leave your possession are affected normally. This ability does not affect artifacts.",
        levelGained: 3,
      },
      {
        name: "Call Ancestor",
        description: "At 9th level, once per day as a standard action, you can grant a long-dead relative a brief facsimile of life (as lesser simulacrum) lasting 1 round per sorcerer level. The simulacrum has your statistics and the likeness of an ancestor. Choose one Knowledge skill: the simulacrum has a bonus on that skill equal to twice your level + your Intelligence modifier. The simulacrum cannot attack or take hostile actions. At 17th level, usable twice per day; at 20th level, three times per day (only one active at a time).",
        levelGained: 9,
      },
      {
        name: "Eternal Past",
        description: "At 15th level, you gain an immersive mindscape (as permanent greater create mindscape) that must appear as a lost civilization. You can open a conduit to your mindscape at will (as mindscape door). While within your mindscape, you can spend 1d4 hours researching to use a Knowledge (history) check in place of any other Knowledge check.",
        levelGained: 15,
      },
      {
        name: "Manifest Memory",
        description: "At 20th level, you can overlay portions of your mindscape onto the world around you (as mirage arcana, but all structures and terrain must match places in your mindscape). Usable at will, but only one manifest memory can be active at a time. You can allow any creature that has previously entered your mindscape to automatically disbelieve the illusion as a free action.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "identify",          // 3rd
      "share memory",      // 5th
      "arcane sight",      // 7th
      "hypercognition",    // 9th
      "telepathic bond",   // 11th
      "analyze dweomer",   // 13th
      "vision",            // 15th
      "discern location",  // 17th
      "foresight",         // 19th
    ],
    bonusFeats: [
      "Arcane Strike",
      "Augment Summoning",
      "Craft Wondrous Item",
      "Echoing Spell",
      "Iron Will",
      "Leadership",
      "Skill Focus (Knowledge [history])",
      "Spell Focus",
    ],
    bloodlineSkills: ["Knowledge (history)"],
    source: "pf1e-ppc-boa",
    isOfficial: true,
    visibility: "global",
    rev: 1,
  },
];
