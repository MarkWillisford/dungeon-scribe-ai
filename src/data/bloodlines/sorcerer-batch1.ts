import type { BloodlineEntry } from '@/types/classOptions';

export const sorcererBloodlinesBatch1: BloodlineEntry[] = [
  {
    id: 'sorcerer-aberrant',
    name: 'Aberrant',
    classIds: ['sorcerer'],
    description: "There is a taint in your blood, one that is alien and bizarre. You tend to think in odd ways, approaching problems from an angle that most would not expect. Over time, this taint manifests itself in your physical form.",
    bloodlineArcana: "Whenever you cast a spell of the polymorph subschool, increase the duration of the spell by 50% (minimum 1 round). This bonus does not stack with the increase granted by the Extend Spell feat.",
    powers: [
      {
        name: "Acidic Ray",
        description: "Starting at 1st level, you can fire an acidic ray as a standard action, targeting any foe within 30 feet as a ranged touch attack. The acidic ray deals 1d6 points of acid damage + 1 for every two sorcerer levels you possess. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
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
        description: "At 20th level, your body becomes truly unnatural. You are immune to critical hits and sneak attacks. In addition, you gain blindsight with a range of 60 feet and damage reduction 5/--.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "enlarge person",      // 3rd
      "see invisibility",    // 5th
      "tongues",             // 7th
      "black tentacles",     // 9th
      "feeblemind",          // 11th
      "veil",                // 13th
      "plane shift",         // 15th
      "mind blank",          // 17th
      "shapechange",         // 19th
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
    source: "pf1e-core",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-abyssal',
    name: 'Abyssal',
    classIds: ['sorcerer'],
    description: "Generations ago, a demon spread its filth into your heritage. While it does not manifest in all of your kin, for you it is particularly strong. You might sometimes have urges to chaos or evil, but your destiny (and alignment) is up to you.",
    bloodlineArcana: "Whenever you cast a spell of the summoning subschool, the creatures summoned gain DR/good equal to 1/2 your sorcerer level (minimum 1). This does not stack with any DR the creature might have.",
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
        name: "Strength of the Abyss",
        description: "At 9th level, you gain a +2 inherent bonus to your Strength. This bonus increases to +4 at 13th level, and to +6 at 17th level.",
        levelGained: 9,
      },
      {
        name: "Added Summonings",
        description: "At 15th level, whenever you summon a creature with the demon subtype or the fiendish template using a summon monster spell, you summon one additional creature of the same kind.",
        levelGained: 15,
      },
      {
        name: "Demonic Might",
        description: "At 20th level, the power of the Abyss flows through you. You gain immunity to electricity and poison. You also gain resistance to acid 10, cold 10, and fire 10, and gain telepathy with a range of 60 feet (allowing you to communicate with any creature that can speak a language).",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "cause fear",          // 3rd
      "bull's strength",     // 5th
      "rage",                // 7th
      "stoneskin",           // 9th
      "dismissal",           // 11th
      "transformation",      // 13th
      "greater teleport",    // 15th
      "unholy aura",         // 17th
      "summon monster IX",   // 19th
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
    source: "pf1e-core",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-accursed',
    name: 'Accursed',
    classIds: ['sorcerer'],
    description: "Misfortune, pestilence, and nightmares follow your family like vermin drawn to carrion. Somewhere in your family history, a hag's foul influence entered your bloodline. You may actually be related to the hag, or you may still be suffering the effects of a curse that a hag laid upon your kin in generations past. Now the hag's powers are part of your heritage.",
    bloodlineArcana: "You count as a hag for the purpose of joining a hag's coven. The coven must contain at least one hag. In addition, whenever you are within 30 feet of another sorcerer with this bloodline or a witch with the coven hex, you can use the aid another action to grant a +1 bonus to the other spellcaster's caster level for 1 round.",
    powers: [
      {
        name: "Horrific Visage",
        description: "At 1st level, you can draw upon your hag ancestor to cause one target to perceive you as having a horrifying appearance. As a standard action, you can force one target within 30 feet to make a Will save (DC 10 + 1/2 your sorcerer level + your Charisma modifier) or be shaken for 1 round for every 2 sorcerer levels you possess (minimum 1 round). This is a mind-affecting, fear-based ability. This fear does not stack with other fear effects. You may use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Wretched Endurance",
        description: "At 3rd level, you gain a +2 bonus on all saving throws against charm, cold, fear, fire, and sleep effects. At 9th level, these bonuses increase to +4.",
        levelGained: 3,
      },
      {
        name: "Dread Gaze",
        description: "At 9th level, you gain a form of the green hag's evil eye power. As a standard action, you may fix your gaze on any one creature within 60 feet. The target must make a Will save (DC 10 + 1/2 your sorcerer level + your Charisma modifier) or be staggered for 1 round for every 2 sorcerer levels you possess. You may use this ability once per day at 9th level, twice per day at 17th level, and three times per day at 20th level.",
        levelGained: 9,
      },
      {
        name: "Dream Walking",
        description: "At 15th level, you can enter the ethereal plane. This functions like ethereal jaunt, but with a duration of 1 minute for every 2 sorcerer levels you possess. Once during this trip, you may cast nightmare as a spell-like ability on a creature you see on the Material Plane.",
        levelGained: 15,
      },
      {
        name: "Fearsome Survival",
        description: "At 20th level, your hag-blood gives you considerable resilience. You gain DR 10/cold iron, and gain SR equal to 6 + your sorcerer level.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "ray of enfeeblement",  // 3rd
      "touch of idiocy",      // 5th
      "ray of exhaustion",    // 7th
      "bestow curse",         // 9th
      "feeblemind",           // 11th
      "eyebite",              // 13th
      "insanity",             // 15th
      "dimensional lock",     // 17th
      "energy drain",         // 19th
    ],
    bonusFeats: [
      "Alertness",
      "Blind-Fight",
      "Combat Casting",
      "Deceitful",
      "Defensive Combat Training",
      "Endurance",
      "Great Fortitude",
      "Mounted Combat",
    ],
    bloodlineSkills: ["Perception"],
    source: "pf1e-um",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-aquatic',
    name: 'Aquatic',
    classIds: ['sorcerer'],
    description: "Your family traces its heritage back to the ocean depths, whether scions of undersea empires left in the wake of nomadic sea-tribes, or the spawn of creeping ichthyic infiltrators into remote seaside villages. The song of the sea hums in your blood, calling the waves and all those within to your command.",
    bloodlineArcana: "Whenever you cast a spell of the water type, your effective caster level is increased by one, and summoned creatures with a swim speed or the aquatic or water type gain a +1 morale bonus on attack and damage rolls.",
    powers: [
      {
        name: "Dehydrating Touch",
        description: "Starting at 1st level, you can make a melee touch attack as a standard action that inflicts 1d6 points of nonlethal damage + 1 for every two sorcerer levels you possess and sickens the target for 1 round. Oozes, plants, and creatures with the aquatic or water subtypes suffer lethal damage instead. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Aquatic Adaptation",
        description: "At 3rd level, you gain a swim speed of 30 feet. At 9th level, you gain the amphibious special quality and develop a fat layer that grants a +1 natural armor bonus and resist cold 5. When immersed in water, you gain blindsense 30 feet. At 15th level, you gain a swim speed of 60 feet and blindsense of 60 feet in water.",
        levelGained: 3,
      },
      {
        name: "Aquatic Telepathy",
        description: "At 9th level, you gain telepathy (100 feet) and can communicate with creatures with a swim speed or the aquatic or water types regardless of intelligence. You may cast suggestion on such creatures a number of times per day equal to your Charisma modifier. At 15th level, once per day you can telepathically call and request a service from an aquatic, water, or swimming creature as if using demand or greater planar ally.",
        levelGained: 9,
      },
      {
        name: "Raise the Deep",
        description: "At 15th level, you raise water as per control water, but no water need be present. This created water is stationary and lasts 1 round per sorcerer level before disappearing. At 20th level, the dimensions of the effect are doubled. You may use this ability once per day.",
        levelGained: 15,
      },
      {
        name: "Deep One",
        description: "At 20th level, you gain blindsense 60 feet and your body is covered with fine, slippery scales granting DR 10/piercing, resist cold 20, and continuous freedom of movement. Underwater, you gain evasion and blindsight 120 feet, and you are immune to pressure damage from deep water.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "hydraulic push",     // 3rd
      "slipstream",         // 5th
      "aqueous orb",        // 7th
      "geyser",             // 9th
      "control water",      // 11th
      "beast shape IV",     // 13th
      "summon monster VII", // 15th
      "seamantle",          // 17th
      "world wave",         // 19th
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
    source: "pf1e-apg",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-arcane',
    name: 'Arcane',
    classIds: ['sorcerer'],
    description: "Your family has always been skilled in the eldritch art of magic. While many of your relatives were accomplished wizards, your powers developed without the need for study and practice.",
    bloodlineArcana: "Whenever you apply a metamagic feat to a spell that increases the slot used by at least one level, increase the spell's DC by +1. This bonus does not stack with itself and does not apply to spells modified by the Heighten Spell feat.",
    powers: [
      {
        name: "Arcane Bond",
        description: "At 1st level, you gain an arcane bond, as a wizard equal to your sorcerer level. Your sorcerer levels stack with any wizard levels you possess when determining the powers of your familiar or bonded object. Once per day, your bonded item allows you to cast any one of your spells known (unlike a wizard's bonded item, which allows him to cast any one spell in his spellbook).",
        levelGained: 1,
      },
      {
        name: "Metamagic Adept",
        description: "At 3rd level, you can apply any one metamagic feat you know to a spell you are about to cast without increasing the casting time. You must still expend a higher-level spell slot to cast this spell. You can use this ability once per day at 3rd level and one additional time per day for every four sorcerer levels beyond 3rd, up to five times per day at 19th level. At 20th level, this ability is replaced by arcane apotheosis.",
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
        description: "At 20th level, your body surges with arcane power. You can add any metamagic feats that you know to your spells without increasing their casting time, although you must still expend higher-level spell slots. Whenever you use magic items that require charges, you can instead expend spell slots to power the item. For every three levels of spell slots that you expend, you consume one less charge when using a magic item that expends charges.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "identify",           // 3rd
      "invisibility",       // 5th
      "dispel magic",       // 7th
      "dimension door",     // 9th
      "overland flight",    // 11th
      "true seeing",        // 13th
      "greater teleport",   // 15th
      "power word stun",    // 17th
      "wish",               // 19th
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
    source: "pf1e-core",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-astral',
    name: 'Astral',
    classIds: ['sorcerer'],
    description: "Whether you were raised on the Astral Plane, had an ancestor with a strong connection to the Astral, or simply had a freak brush with an astral conduit in your youth, you have an unusual connection to both time and space. Your senses extend through the Astral Plane to the far reaches of the multiverse, allowing you to perceive and manipulate the timeless potential that binds the multiverse together.",
    bloodlineArcana: "When you cast a spell, you can choose to enhance the next spell you cast before the end of your next turn, increasing the enhanced spell's saving throw DC by 1. The level of the enhanced spell must be lower than that of the spell used to activate this ability.",
    powers: [
      {
        name: "Astral Warp",
        description: "At 1st level, you can create a sparkling field within 30 feet that distorts time within a 5-foot cube. This field lasts until the beginning of your next turn. Any creature that enters the area or that starts its turn within the cube takes 1d4 points of force damage + 1 point per 2 sorcerer levels (Fortitude negates). While within the area, a creature takes a -1 penalty on Reflex saves and to AC. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Peerless Speed",
        description: "At 3rd level, once per day as a swift action, you can cast one cantrip you know as though it were augmented by the Quicken Spell metamagic feat, without altering the cantrip's level. At 5th level and every 2 levels thereafter, the maximum level of the spell you can augment increases by 1, to a maximum of an 8th-level spell at 19th level.",
        levelGained: 3,
      },
      {
        name: "Astral Voyager",
        description: "At 9th level, you can send your consciousness to the Astral Plane once per day, functioning as lesser astral projection. You can bring up to one additional willing creature for every 2 sorcerer levels. At 13th level, you can cast plane shift once per day (only to/from the Astral Plane). At 17th level, the ability functions as astral projection.",
        levelGained: 9,
      },
      {
        name: "Arrest the Flow",
        description: "At 15th level, once per day as an immediate action, you can halt the effects of one condition or affliction (such as paralyzed, stunned, a poison, or a curse), including permanent and instantaneous conditions, until the end of your next turn. Alternatively, you can use this ability to extend the duration of any one effect affecting you until the end of your next turn. At 19th level, you can use this ability twice per day.",
        levelGained: 15,
      },
      {
        name: "Timeless Soul",
        description: "At 20th level, you become immune to retroactive aging from planes with the timeless planar trait. You do not gain negative levels when slain on the Astral Plane while using astral projection, and effects that would sever your silver cord instead return you to your physical body on a successful Will save. In addition, when applying the Quicken Spell metamagic feat, it uses up a spell slot only 3 levels higher than the spell's actual level.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "true strike",          // 3rd
      "false life",           // 5th
      "sands of time",        // 7th
      "wandering star motes", // 9th
      "permanency",           // 11th
      "contingency",          // 13th
      "ethereal jaunt",       // 15th
      "create demiplane",     // 17th
      "time stop",            // 19th
    ],
    bonusFeats: [
      "Combat Reflexes",
      "Dodge",
      "Forge Ring",
      "Improved Initiative",
      "Lightning Reflexes",
      "Quicken Spell",
      "Skill Focus (Knowledge [planes])",
      "Weapon Finesse",
    ],
    bloodlineSkills: ["Knowledge (planes)"],
    source: "pf1e-cs-dr",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-boreal',
    name: 'Boreal',
    classIds: ['sorcerer'],
    description: "Descended from inhabitants of the lands of ice and snow, you count among your ancestors giant-kin, troll-born, and frost-rimed spirits. Their savage and raw energies flow down through generations to infuse you to the marrow with the chill of the polar wind, crackling auroras, and the long winter's night.",
    bloodlineArcana: "Whenever you cast a spell with the cold descriptor, increase the spell's save DC by 1.",
    powers: [
      {
        name: "Cold Steel",
        description: "At 1st level, you can touch a weapon or up to 50 pieces of ammunition as a standard action, giving it the frost property for a number of rounds equal to 1/2 your sorcerer level (minimum 1). At 9th level, you can confer the icy burst property instead, but the duration is halved. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Icewalker",
        description: "At 3rd level, you gain resist cold 5 and can move across snow and icy surfaces without penalty and without leaving tracks. At 9th level, you gain resist cold 10 and can climb icy surfaces as if using spider climb.",
        levelGained: 3,
      },
      {
        name: "Snow Shroud",
        description: "At 9th level, you ignore concealment and Perception penalties in natural or magical snow, ice, fog, and similar weather conditions. In addition, you can surround yourself with a cloak of swirling snow for a number of rounds per day equal to your sorcerer level, acting as a fire shield (chill shield) that sheds no light. It provides a 20% miss chance on attacks against you and grants a bonus on Stealth checks equal to 1/2 your sorcerer level in snowy or icy areas.",
        levelGained: 9,
      },
      {
        name: "Blizzard",
        description: "At 15th level, you can create a savage winter storm centered on you once per day. This power acts as control winds, but in addition the entire area (excluding the eye) is affected as a sleet storm and all creatures in the area are exposed to extreme cold.",
        levelGained: 15,
      },
      {
        name: "Child of Ancient Winters",
        description: "At 20th level, you gain the cold subtype and become immune to fatigue and exhaustion. In addition, you gain immunity to sneak attacks and critical hits. This power causes you to gain vulnerability to fire.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "enlarge person",                    // 3rd
      "rage",                              // 5th
      "elemental aura (cold only)",        // 7th
      "wall of ice",                       // 9th
      "cone of cold",                      // 11th
      "transformation",                    // 13th
      "giant form I",                      // 15th
      "polar ray",                         // 17th
      "meteor swarm (dealing cold damage)",// 19th
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
    source: "pf1e-apg",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-celestial',
    name: 'Celestial',
    classIds: ['sorcerer'],
    description: "Your bloodline is blessed by a celestial power, either from a celestial ancestor or through divine intervention. Although this power drives you along the path of good, your fate (and alignment) is your own to determine.",
    bloodlineArcana: "Whenever you cast a spell of the summoning subschool, the creatures summoned gain DR/evil equal to 1/2 your sorcerer level (minimum 1). This does not stack with any DR the creature might have.",
    powers: [
      {
        name: "Heavenly Fire",
        description: "Starting at 1st level, you can unleash a ray of heavenly fire as a standard action, targeting any foe within 30 feet as a ranged touch attack. Against evil creatures, this ray deals 1d4 points of damage + 1 for every two sorcerer levels you possess. This damage is divine and not subject to energy resistance or immunity. This ray heals good creatures of 1d4 points of damage + 1 for every two sorcerer levels you possess. A good creature cannot benefit from your heavenly fire more than once per day. Neutral creatures are neither harmed nor healed by this effect. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Celestial Resistances",
        description: "At 3rd level, you gain resist acid 5 and resist cold 5. At 9th level, your resistances increase to 10.",
        levelGained: 3,
      },
      {
        name: "Wings of Heaven",
        description: "At 9th level, you can sprout feathery wings and fly for a number of minutes per day equal to your sorcerer level, with a speed of 60 feet and good maneuverability. This duration does not need to be consecutive, but it must be used in 1 minute increments.",
        levelGained: 9,
      },
      {
        name: "Conviction",
        description: "At 15th level, you can reroll any one ability check, attack roll, skill check, or saving throw you just made. You must decide to use this ability after the die is rolled, but before the results are revealed by the GM. You must take the second result, even if it is worse. You can use this ability once per day.",
        levelGained: 15,
      },
      {
        name: "Ascension",
        description: "At 20th level, you become infused with the power of the heavens. You gain immunity to acid, cold, and petrification. You also gain resist electricity 10, resist fire 10, and a +4 racial bonus on saves against poison. You gain unlimited use of the wings of heaven ability and the ability to speak with any creature that has a language (as per the tongues spell).",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "bless",                      // 3rd
      "resist energy",              // 5th
      "magic circle against evil",  // 7th
      "remove curse",               // 9th
      "flame strike",               // 11th
      "greater dispel magic",       // 13th
      "banishment",                 // 15th
      "sunburst",                   // 17th
      "gate",                       // 19th
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
    source: "pf1e-core",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-daemon',
    name: 'Daemon',
    classIds: ['sorcerer'],
    description: "A daemon lurks somewhere along your family tree. Your powers derive from these soul-devouring fiends, who take pleasure and gain power from manipulating mortal frailties like aging, pestilence, famine, and the horrors of war. Your lineage gives you great insight into how to exploit the weaknesses of living beings and how to use leeched soul energy to enhance your wicked abilities.",
    bloodlineArcana: "Whenever you cast a spell that kills one or more living creatures with an Intelligence score of 3 or higher, the caster level of any spell you cast in the next round increases by +1 for each creature your first spell killed. You cannot gain a bonus greater than 1/2 your Charisma modifier (minimum 1). The second spell must be of an equal or lower level than the first one.",
    powers: [
      {
        name: "Wasting Ray",
        description: "At 1st level, as a standard action, you can impose either starvation or thirst upon a living creature you can see within 30 feet. The creature must make a Constitution check each round (DC 10 + 1 for each previous check) or take 1d6 points of nonlethal damage. You can use this ability a number of times per day equal to 3 + your Charisma modifier, but can only apply it once every 24 hours to any given creature. Creatures that do not need to eat are immune.",
        levelGained: 1,
      },
      {
        name: "Daemonic Resistances",
        description: "At 3rd level, you gain resist acid 5 and a +2 bonus on saving throws made against poison and death effects. At 9th level, your resistance to acid increases to 10 and your bonus on saving throws against poison and death effects increases to +4.",
        levelGained: 3,
      },
      {
        name: "Age Out",
        description: "At 9th level, as a standard action, you can shift your effective age to the next highest aging step (e.g., from adulthood to middle age). Any debilitating condition or effect currently affecting you that initially allowed a Will or Fortitude saving throw immediately ends. You take the normal age penalties but gain none of the benefits. You cannot use this power to age beyond venerable or remove effects that did not allow a Will or Fortitude save.",
        levelGained: 9,
      },
      {
        name: "Wound Warp",
        description: "At 15th level, once per day as a standard action, you can teleport to an unoccupied square adjacent to any dead creature within 10 feet per caster level. Any creatures adjacent to the destination take 4d6 points of acid damage (Reflex half). At 20th level, you can use this ability twice per day.",
        levelGained: 15,
      },
      {
        name: "One with Abaddon",
        description: "At 20th level, you gain immunity to acid, death effects, and poison. You also gain DR 5/good or silver and resistance to cold 10, electricity 10, and fire 10.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "ray of enfeeblement",  // 3rd
      "touch of idiocy",      // 5th
      "vampiric touch",       // 7th
      "contagion",            // 9th
      "blight",               // 11th
      "circle of death",      // 13th
      "waves of exhaustion",  // 15th
      "horrid wilting",       // 17th
      "soul bind",            // 19th
    ],
    bonusFeats: [
      "Diehard",
      "Endurance",
      "Fast Healer",
      "Great Fortitude",
      "Heroic Defiance",
      "Heroic Recovery",
      "Sickening Spell",
      "Toughness",
    ],
    bloodlineSkills: ["Heal"],
    source: "pf1e-ppc-bof",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-deep-earth',
    name: 'Deep Earth',
    classIds: ['sorcerer'],
    description: "The echoing cave-songs and the rumble and creak of primal spirits deep below the ground thrum in your soul and in all your family line. You are likely slow, steady, and stable in your thinking, little prone to wandering and preferring to instead find depth in contemplation.",
    bloodlineArcana: "Whenever you and the target of your spell are both underground, increase the spell's save DC by +1.",
    powers: [
      {
        name: "Tremor",
        description: "At 1st level, as a standard action, you can cause the ground to shake beneath a single creature within 30 feet, functioning as a trip maneuver using your sorcerer level plus your Charisma modifier in place of your CMB. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Rockseer",
        description: "At 3rd level, you gain the stonecunning trait as a dwarf; if already a dwarf, your bonus improves to +4. At 9th level, you gain tremorsense 30 feet. At 15th level, you can see through solid objects as if using a ring of x-ray vision for a number of rounds per day equal to your sorcerer level.",
        levelGained: 3,
      },
      {
        name: "Crystal Shard",
        description: "At 9th level, you can touch a metal or stone weapon (or up to 50 pieces of ammunition) as a standard action, giving it the bane property against any creature with the earth subtype, oozes, or constructs made of stone or metal, for 1 minute. You can use this ability once per day at 9th level, twice per day at 17th, and three times per day at 20th.",
        levelGained: 9,
      },
      {
        name: "Earth Glide",
        description: "At 15th level, you can glide through any sort of natural earth or stone as easily as a fish swims through water, with a burrow speed equal to half your normal speed. You do not leave a tunnel or trace of your passage. You can use this ability for 1 minute per sorcerer level each day.",
        levelGained: 15,
      },
      {
        name: "Strength of Stone",
        description: "At 20th level, your flesh becomes as hard as stone, giving you DR 10/adamantine, and you become immune to petrification. You suffer no penalties while squeezing through tight spaces and are immune to bull rush, drag, grapple, reposition, and trip maneuvers, and to push and pull effects as long as you are standing on the ground.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "expeditious excavation", // 3rd
      "darkvision",             // 5th
      "shifting sand",          // 7th
      "stoneskin",              // 9th
      "spike stones",           // 11th
      "stone tell",             // 13th
      "repel metal or stone",   // 15th
      "earthquake",             // 17th
      "clashing rocks",         // 19th
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
    source: "pf1e-apg",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-destined',
    name: 'Destined',
    classIds: ['sorcerer'],
    description: "Your family is destined for greatness in some way. Your birth could have been foretold in prophecy, or perhaps it occurred during an especially auspicious event, such as a solar eclipse. Regardless of your bloodline's origin, you have a great future ahead.",
    bloodlineArcana: "Whenever you cast a spell with a range of \"personal,\" you gain a luck bonus equal to the spell's level on all your saving throws for 1 round.",
    powers: [
      {
        name: "Touch of Destiny",
        description: "At 1st level, you can touch a creature as a standard action, giving it an insight bonus on attack rolls, skill checks, ability checks, and saving throws equal to 1/2 your sorcerer level (minimum 1) for 1 round. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Fated",
        description: "Starting at 3rd level, you gain a +1 luck bonus on all of your saving throws and to your AC during surprise rounds and when you are otherwise unaware of an attack. At 7th level and every four levels thereafter, this bonus increases by +1, to a maximum of +5 at 19th level.",
        levelGained: 3,
      },
      {
        name: "It Was Meant To Be",
        description: "At 9th level, you may reroll any one attack roll, critical hit confirmation roll, or level check made to overcome spell resistance. You must decide to use this ability after the first roll is made but before the results are revealed. You must take the second result, even if it is worse. You can use this ability once per day at 9th level and twice per day at 17th level.",
        levelGained: 9,
      },
      {
        name: "Within Reach",
        description: "At 15th level, once per day, when an attack or spell that causes damage would result in your death, you may attempt a DC 20 Will save. If successful, you are instead reduced to -1 hit points and are automatically stabilized. The bonus from your fated ability applies to this save.",
        levelGained: 15,
      },
      {
        name: "Destiny Realized",
        description: "At 20th level, critical threats made against you only confirm if the second roll results in a natural 20 on the die. Any critical threats you score with a spell are automatically confirmed. Once per day, you can automatically succeed at one caster level check made to overcome spell resistance.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "alarm",                  // 3rd
      "blur",                   // 5th
      "protection from energy", // 7th
      "freedom of movement",    // 9th
      "break enchantment",      // 11th
      "mislead",                // 13th
      "spell turning",          // 15th
      "moment of prescience",   // 17th
      "foresight",              // 19th
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
    source: "pf1e-core",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-div',
    name: 'Div',
    classIds: ['sorcerer'],
    description: "You can trace your ancestry to one of the foul, corrupted genies known as divs.",
    bloodlineArcana: "Whenever you deal damage to more than one creature with a spell that affects an area, the save DCs of your spells increase by 1 for 1d4 rounds.",
    powers: [
      {
        name: "Spoiling Touch",
        description: "At 1st level, you can impose the broken condition upon one Medium or smaller object by making a successful melee touch attack. Magical items or objects carried or worn by a creature are allowed a Fortitude save to resist this effect. Multiple uses do not stack. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Div Resistances",
        description: "At 3rd level, you gain fire resistance 5 and a +2 bonus on saving throws against poison. At 9th level, your resistance to fire increases to 10 and your bonus on saving throws against poison increases to +4.",
        levelGained: 3,
      },
      {
        name: "Corrupting Aura",
        description: "At 9th level, you can surround yourself with an aura of corrupting energy for a number of rounds per day equal to your sorcerer level. Any creature within 10 feet takes 1d6 points of nonlethal damage + 1 for every 2 sorcerer levels and is sickened for 1 round. Any creature within the aura that attempts casting a divine spell must succeed at a caster level check (DC 15 + double the spell's level) or lose the spell.",
        levelGained: 9,
      },
      {
        name: "Squander",
        description: "At 15th level, once per day as a standard action, you can cause a target within 30 feet to gain the staggered condition for a number of rounds equal to your sorcerer level. The duration is halved if the target makes a successful Will save (DC 10 + 1/2 your sorcerer level + your Cha modifier).",
        levelGained: 15,
      },
      {
        name: "Ahriman's Favor",
        description: "At 20th level, you are filled with Ahriman's wickedness. You gain immunity to fire and poison. You also gain acid resistance 10 and electricity resistance 10, and the ability to see perfectly in darkness of any kind to a range of 60 feet.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "disguise self",    // 3rd
      "touch of idiocy",  // 5th
      "deeper darkness",  // 7th
      "bestow curse",     // 9th
      "insect plague",    // 11th
      "disintegrate",     // 13th
      "insanity",         // 15th
      "earthquake",       // 17th
      "wish",             // 19th
    ],
    bonusFeats: [
      "Blind-Fight",
      "Deceitful",
      "Empower Spell",
      "Improved Initiative",
      "Iron Will",
      "Lightning Reflexes",
      "Persuasive",
      "Power Attack",
    ],
    bloodlineSkills: ["Knowledge (planes)"],
    source: "pf1e-ppc-pos",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-djinni',
    name: 'Djinni',
    classIds: ['sorcerer'],
    description: "You were born with the power of air genies, and the magic of the djinn is strong in you.",
    bloodlineArcana: "Whenever you cast a spell that deals energy damage, you can change the type of damage to electricity. This also changes the spell's descriptors to match this energy type.",
    powers: [
      {
        name: "Electricity Ray",
        description: "Starting at 1st level, you can unleash an elemental ray as a standard action, targeting any foe within 30 feet as a ranged touch attack. This ray deals 1d6 points of electricity damage + 1 for every two sorcerer levels you possess. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Elemental Resistance",
        description: "At 3rd level, you gain electricity resistance 10. Your electricity resistance increases to 20 at 9th level.",
        levelGained: 3,
      },
      {
        name: "Whirlwind",
        description: "At 9th level, you gain the ability to turn into a 10-foot-high whirlwind once per day for 1 round per sorcerer level.",
        levelGained: 9,
      },
      {
        name: "Elemental Movement",
        description: "At 15th level, you gain a fly speed of 60 feet with average maneuverability.",
        levelGained: 15,
      },
      {
        name: "Power of the Djinn",
        description: "At 20th level, you gain the power of genies to grant wishes. Once per day, you can cast limited wish as a spell-like ability. You also become immune to electricity damage, and can use plane shift once per day to travel to or from the Plane of Air.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "shocking grasp",          // 3rd
      "invisibility",            // 5th
      "fly",                     // 7th
      "minor creation",          // 9th
      "overland flight",         // 11th
      "chain lightning",         // 13th
      "plane shift",             // 15th
      "greater planar binding",  // 17th
      "wish",                    // 19th
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
    id: 'sorcerer-draconic',
    name: 'Draconic',
    classIds: ['sorcerer'],
    description: "At some point in your family's history, a dragon interbred with your bloodline, and now its ancient power flows through your veins.",
    bloodlineArcana: "Whenever you cast a spell with an energy descriptor that matches your draconic bloodline's energy type, that spell deals +1 point of damage per die rolled.",
    powers: [
      {
        name: "Claws",
        description: "Starting at 1st level, you can grow claws as a free action. These claws deal 1d4 points of damage plus your Strength modifier (1d3 if Small). At 5th level, these claws are considered magic weapons. At 7th level, the damage increases to 1d6 (1d4 if Small). At 11th level, the claws deal an additional 1d6 of your energy type on a hit. You can use your claws for a number of rounds per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Dragon Resistances",
        description: "At 3rd level, you gain resist 5 against your energy type and a +1 natural armor bonus. At 9th level, your energy resistance increases to 10 and natural armor bonus increases to +2. At 15th level, your natural armor bonus increases to +4.",
        levelGained: 3,
      },
      {
        name: "Breath Weapon",
        description: "At 9th level, you gain a breath weapon that deals 1d6 points of damage of your energy type per sorcerer level (Reflex half). The DC equals 10 + 1/2 your sorcerer level + your Charisma modifier. The shape depends on your dragon type (line or cone). You can use this ability once per day at 9th level, twice at 17th, and three times at 20th.",
        levelGained: 9,
      },
      {
        name: "Wings",
        description: "At 15th level, leathery dragon wings grow from your back as a standard action, giving you a fly speed of 60 feet with average maneuverability. You can dismiss the wings as a free action.",
        levelGained: 15,
      },
      {
        name: "Power of Wyrms",
        description: "At 20th level, your draconic heritage becomes manifest. You gain immunity to paralysis, sleep, and damage of your energy type. You also gain blindsense 60 feet.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "mage armor",           // 3rd
      "resist energy",        // 5th
      "fly",                  // 7th
      "fear",                 // 9th
      "spell resistance",     // 11th
      "form of the dragon I", // 13th
      "form of the dragon II",// 15th
      "form of the dragon III",// 17th
      "wish",                 // 19th
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
    source: "pf1e-core",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-dreamspun',
    name: 'Dreamspun',
    classIds: ['sorcerer'],
    description: "Your family is a long line of dreamers, who dream not as ordinary mortals do but rather as those who reach through and touch the supernal realm of dreams and the farthest shores of night. Whether it is a gift or curse is not always clear, but your visions of the past and future call you ineluctably to a life of adventure.",
    bloodlineArcana: "Whenever you target a single creature with a spell, you gain an insight bonus equal to half the spell's level (minimum +1) for 1 round to your AC and saving throws against any spell or attack made by that creature.",
    powers: [
      {
        name: "Lullaby",
        description: "At 1st level, you can use lullaby as a spell-like ability a number of times per day equal to 3 + your Charisma modifier. This effect lasts for 1 minute and does not require concentration. The penalty on saves versus sleep effects increases to -4.",
        levelGained: 1,
      },
      {
        name: "Combat Precognition",
        description: "Your insight into the future grants you an advantage in combat. At 3rd level and every 4 levels thereafter, you gain a +1 insight bonus on initiative checks.",
        levelGained: 3,
      },
      {
        name: "Dreamshaper",
        description: "At 9th level, you can manipulate the dreamscape of others. This power allows you to tamper with the target's memories as if using modify memory, or ask questions as if using speak with dead upon a corpse. A successful Will save negates the effect. You can use this ability once per day at 9th level, twice at 17th, and three times at 20th.",
        levelGained: 9,
      },
      {
        name: "Eye of Somnus",
        description: "At 15th level, you can project your consciousness as if using arcane eye. In addition, at any point you can cause the arcane eye to become visible; the eye can no longer be moved, but it acts as a symbol of sleep to all who see it. You may use this power once per day.",
        levelGained: 15,
      },
      {
        name: "Solipsism",
        description: "At 20th level, you can drift into the dream world, fading from the world around you. You can become incorporeal for 1 minute per sorcerer level. You gain the incorporeal subtype and take only half damage from corporeal magical attacks. Your spells deal only half damage to corporeal creatures, but spells and abilities that do not deal damage function normally.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "sleep",                // 3rd
      "augury",               // 5th
      "deep slumber",         // 7th
      "divination",           // 9th
      "dream",                // 11th
      "shadow walk",          // 13th
      "vision",               // 15th
      "moment of prescience", // 17th
      "astral projection",    // 19th
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
    source: "pf1e-apg",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-ectoplasm',
    name: 'Ectoplasm',
    classIds: ['sorcerer'],
    description: "Your family has a connection with the ethereal substance known as ectoplasm, whether from communing with the spirits or battling the spiritual undead. The power of the Ethereal Plane thrums in your mind and pulls at your flesh.",
    bloodlineArcana: "Incorporeal creatures take 75% of the normal amount of damage from your damaging spells, and when incorporeal creatures attempt saving throws against your non-damaging spells, they roll twice and must take the lower result.",
    powers: [
      {
        name: "Entangling Ectoplasm",
        description: "At 1st level, you can create a ball of ectoplasm and hurl it at targets within 30 feet. This ectoplasm acts as a tanglefoot bag that can also entangle incorporeal creatures. The ectoplasm dissipates within 1d3 rounds. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Ectoplasmic Reach",
        description: "At 3rd level, you can exude small tendrils of ectoplasm to make melee touch attacks as part of a spell with a range of touch, effectively granting 5 additional feet of reach for touch spells. This does not otherwise increase your threatened area. At 11th level, this additional reach increases to 10 feet. At 17th level, this additional reach increases to 15 feet.",
        levelGained: 3,
      },
      {
        name: "Ectoplasmic Form",
        description: "At 9th level, you can transform into a cloud of ectoplasm. Treat this as gaseous form, except that you can fly at a speed of 30 feet, and you can solidify your form sufficiently to carry small objects. You can use this ability for a number of minutes per day equal to your sorcerer level.",
        levelGained: 9,
      },
      {
        name: "Malevolent Ectoplasm",
        description: "At 15th level, your ectoplasmic tendrils can lash out at creatures around you. Treat this as a black tentacles effect centered on your position, but the tentacles can also grapple ethereal and incorporeal creatures, and they do not affect you. You can use this ability a number of rounds per day equal to your sorcerer level.",
        levelGained: 15,
      },
      {
        name: "Ectoplasmic Body",
        description: "At 20th level, you are more ectoplasm than flesh. You become immune to sneak attacks and critical hits and gain DR 5/slashing.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "obscuring mist",         // 3rd
      "ghost whip",             // 5th
      "ectoplasmic snare",      // 7th
      "spirit-bound blade",     // 9th
      "wall of ectoplasm",      // 11th
      "ethereal jaunt",         // 13th
      "ectoplasmic eruption",   // 15th
      "create demiplane",       // 17th
      "etherealness",           // 19th
    ],
    bonusFeats: [
      "Blind-Fight",
      "Dodge",
      "Ectoplasmic Spell",
      "Lingering Spell",
      "Silent Spell",
      "Skill Focus (Fly)",
      "Skill Focus (Stealth)",
      "Spell Focus",
    ],
    bloodlineSkills: ["Stealth"],
    source: "pf1e-oa",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-efreeti',
    name: 'Efreeti',
    classIds: ['sorcerer'],
    description: "You were born with the power of fire genies, and the magic of the efreet is strong in you.",
    bloodlineArcana: "Whenever you cast a spell that deals energy damage, you can change the type of damage to fire. This also changes the spell's descriptors to match this energy type.",
    powers: [
      {
        name: "Fire Ray",
        description: "Starting at 1st level, you can unleash an elemental ray as a standard action, targeting any foe within 30 feet as a ranged touch attack. This ray deals 1d6 points of fire damage + 1 for every two sorcerer levels you possess. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Elemental Resistance",
        description: "At 3rd level, you gain fire resistance 10. At 9th level, your fire resistance increases to 20.",
        levelGained: 3,
      },
      {
        name: "Efreeti Form",
        description: "At 9th level, you gain the ability to assume the form of an efreeti once per day. This acts like the spell giant form I, except you only use it to become an efreeti and its duration is 1 round per level. While in this form, you also gain an efreeti's heat ability.",
        levelGained: 9,
      },
      {
        name: "Elemental Movement",
        description: "At 15th level, your base speed increases by +30 feet.",
        levelGained: 15,
      },
      {
        name: "Power of the Efreet",
        description: "At 20th level, you gain the power of genies to grant wishes. Once per day, you can cast limited wish as a spell-like ability. You also become immune to fire damage, and can use plane shift once per day to travel to or from the Plane of Fire.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "enlarge person",   // 3rd
      "scorching ray",    // 5th
      "fireball",         // 7th
      "wall of fire",     // 9th
      "persistent image", // 11th
      "planar binding",   // 13th
      "plane shift",      // 15th
      "giant form II",    // 17th
      "wish",             // 19th
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
    id: 'sorcerer-elemental',
    name: 'Elemental',
    classIds: ['sorcerer'],
    description: "The power of the elements resides in you, and at times you can hardly control its fury. This influence comes from an elemental outsider in your family history or a time when you or your relatives were exposed to a powerful elemental force.",
    bloodlineArcana: "Whenever you cast a spell that deals energy damage, you can change the type of damage to match the type of your bloodline. This also changes the spell's type to match the type of your bloodline.",
    powers: [
      {
        name: "Elemental Ray",
        description: "Starting at 1st level, you can unleash an elemental ray as a standard action, targeting any foe within 30 feet as a ranged touch attack. This ray deals 1d6 points of damage of your energy type + 1 for every two sorcerer levels you possess. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Elemental Resistance",
        description: "At 3rd level, you gain energy resistance 10 against your energy type. At 9th level, your energy resistance increases to 20.",
        levelGained: 3,
      },
      {
        name: "Elemental Blast",
        description: "At 9th level, you can unleash a 20-foot-radius burst that deals 1d6 points of damage of your energy type per sorcerer level (Reflex half). Creatures that fail their saves gain vulnerability to your energy type until the end of your next turn. You can use this ability once per day at 9th level, twice at 17th, and three times at 20th.",
        levelGained: 9,
      },
      {
        name: "Elemental Movement",
        description: "At 15th level, you gain a special movement type based on your chosen element: Air gains fly 60 feet (average); Earth gains burrow 30 feet; Fire gains +30 feet base speed; Water gains swim 60 feet.",
        levelGained: 15,
      },
      {
        name: "Elemental Body",
        description: "At 20th level, elemental power surges through your body. You gain immunity to sneak attacks, critical hits, and damage from your energy type.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "burning hands",              // 3rd
      "scorching ray",              // 5th
      "protection from energy",     // 7th
      "elemental body I",           // 9th
      "elemental body II",          // 11th
      "elemental body III",         // 13th
      "elemental body IV",          // 15th
      "summon monster VIII (elementals only)", // 17th
      "elemental swarm",            // 19th
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
    source: "pf1e-core",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-fey',
    name: 'Fey',
    classIds: ['sorcerer'],
    description: "The capricious nature of the fey runs in your family due to some intermingling of fey blood or magic. You are more emotional than most, prone to bouts of joy and rage.",
    bloodlineArcana: "Whenever you cast a spell of the compulsion subschool, increase the spell's DC by +2.",
    powers: [
      {
        name: "Laughing Touch",
        description: "At 1st level, you can cause a creature to burst out laughing for 1 round as a melee touch attack. A laughing creature can only take a move action but can defend itself normally. Once a creature has been affected by laughing touch, it is immune to its effects for 24 hours. You can use this ability a number of times per day equal to 3 + your Charisma modifier. This is a mind-affecting effect.",
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
        description: "At 15th level, you may reroll any caster level check made to overcome spell resistance. You must decide to use this ability before the results are revealed by the GM. You must take the second result, even if it is worse. You can use this ability at will.",
        levelGained: 15,
      },
      {
        name: "Soul of the Fey",
        description: "At 20th level, your soul becomes one with the world of the fey. You gain immunity to poison and DR 10/cold iron. Creatures of the animal type do not attack you unless compelled to do so through magic. Once per day, you can cast shadow walk as a spell-like ability using your sorcerer level as your caster level.",
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
    source: "pf1e-core",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-ghoul',
    name: 'Ghoul',
    classIds: ['sorcerer'],
    description: "Your connection to the hungering undead shapes your magic.",
    bloodlineArcana: "Whenever you cast a spell of the necromancy school that deals hit point damage, you are healed of 1 hit point per spell level.",
    powers: [
      {
        name: "Ghoulish Claws",
        description: "Starting at 1st level, you can grow claws as a free action. Each claw deals 1d4 points of damage + your Strength modifier (1d3 if Small). At 5th level, creatures damaged with your claw attack are paralyzed for 1 round (Fortitude negates). At 7th level, the duration of the paralysis increases to 1d4+1 rounds, and the claws are considered magic weapons. You can use your claws for a number of rounds per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Leathery Skin",
        description: "At 3rd level, you gain cold resistance 5 and a +1 natural armor bonus to AC. At 9th level, your cold resistance increases to 10 and natural armor bonus increases to +2. At 15th level, your natural armor bonus increases to +4.",
        levelGained: 3,
      },
      {
        name: "Ravenous Frenzy",
        description: "At 9th level, you gain the benefits of haste for a number of rounds per day equal to your sorcerer level. These rounds do not need to be consecutive. Each time you hit a creature with two or more claw attacks during a full attack while affected by this ability, that creature takes 1d4 points of bleed damage.",
        levelGained: 9,
      },
      {
        name: "Earth Crawler",
        description: "At 15th level, you gain a burrow speed of 30 feet. Additionally, as long as you are surrounded by at least 5 feet of dirt or natural stone on all sides, you gain fast healing 10. You can heal a number of hit points per day equal to 10 x your sorcerer level with this ability.",
        levelGained: 15,
      },
      {
        name: "Ghoulish Aspect",
        description: "At 20th level, you no longer need to eat (though you may still consume flesh if you choose) and are immune to hunger. You gain immunity to cold, nonlethal damage, paralysis, and sleep. You also gain DR 5/-- and the stench ability with a radius of 10 feet.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "ray of enfeeblement",  // 3rd
      "feast of ashes",       // 5th
      "vampiric touch",       // 7th
      "fear",                 // 9th
      "hungry earth",         // 11th
      "move earth",           // 13th
      "control undead",       // 15th
      "unholy aura",          // 17th
      "wail of the banshee",  // 19th
    ],
    bonusFeats: [
      "Arcane Strike",
      "Combat Casting",
      "Power Attack",
      "Skill Focus (Knowledge [religion])",
      "Spell Focus (necromancy)",
      "Toughness",
      "Warren Digger",
      "Weapon Finesse",
    ],
    bloodlineSkills: ["Stealth"],
    source: "pf1e-mc",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-harrow',
    name: 'Harrow',
    classIds: ['sorcerer'],
    description: "Just as knowledge of the harrow has passed from generation to generation since time immemorial, so too has a deep spiritual connection to the otherworldly forces bound by the harrow passed through the ages. Your connection to the mysterious deck grants you magical power over the cards of the harrow, visions of the future, and the ability to call down ephemeral forces.",
    bloodlineArcana: "Whenever you cast a divination spell that requires a percentage roll, add 5 to the result of your roll. In addition, you can roll the percentage dice twice and use the result you prefer. Your maximum percentage chance of receiving a meaningful and accurate reply for divination spells is 100%, instead of the usual 90%.",
    powers: [
      {
        name: "Twisted Fortune",
        description: "At 1st level, you can use your supernatural insight to hijack the fortunes of a single target within 30 feet. For 1 round, the target becomes confused and cannot directly control its actions (Will negates). Once a creature has been affected by twisted fortune, it is immune to the ability's effects for 24 hours. You can use this ability a number of times per day equal to 3 + your Cha modifier.",
        levelGained: 1,
      },
      {
        name: "See It Coming",
        description: "At 3rd level, you gain a +1 luck bonus on the saving throw type of your choice (Fortitude, Reflex, or Will). As a full-round action, you can change which saving throw your luck bonus applies to. At 7th level and every 4 levels thereafter, this bonus increases by 1, to a maximum of +5 at 19th level.",
        levelGained: 3,
      },
      {
        name: "Invoke the Harrow",
        description: "At 9th level, you can draw a random harrow card from a complete harrow deck you own as a standard action and channel the aspects of the card into your body. You gain a +4 enhancement bonus to the ability score associated with the card's suit. You can invoke the harrow for a number of minutes per day equal to your sorcerer level.",
        levelGained: 9,
      },
      {
        name: "Harrowed Home",
        description: "At 15th level, you can create a pocket dimension sanctuary functioning as mage's magnificent mansion. Time ceases to pass for anything in your harrowed home whenever you are not present. You can place a portal to your harrowed home once every 24 hours.",
        levelGained: 15,
      },
      {
        name: "Kin to the Old Tales",
        description: "At 20th level, your soul becomes host to the otherworldly energies of the harrow. You gain DR 10/cold iron and immunity to curses, paralysis, and sleep. You can always act in the surprise round of combat, cannot be caught flat-footed, and gain unlimited use of your invoke the harrow ability.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "ill omen",              // 3rd
      "augury",                // 5th
      "harrowing",             // 7th
      "shadow conjuration",    // 9th
      "contact other plane",   // 11th
      "legend lore",           // 13th
      "greater harrowing",     // 15th
      "moment of prescience",  // 17th
      "weird",                 // 19th
    ],
    bonusFeats: [
      "Alertness",
      "Craft Wondrous Item",
      "Extend Spell",
      "Fortune Teller",
      "Harrowed",
      "Skill Focus (Knowledge [history])",
      "Varisian Tattoo",
    ],
    bloodlineSkills: ["Knowledge (history)"],
    source: "pf1e-ppc-hh",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-imperious',
    name: 'Imperious',
    classIds: ['sorcerer'],
    description: "A scion of forgotten kings, with a lineage rich with the dust of ancient empires spanning every golden age of humanity's history, an imperious embodies the apex of human potential, as well as human temerity and uninhibited hubris.",
    bloodlineArcana: "Whenever you cast a harmful spell, you gain a bonus equal to the spell's level on Intimidate checks made against any creature adversely affected by that spell until the end of your next turn.",
    powers: [
      {
        name: "Student of Humanity",
        description: "At 1st level, you gain Diplomacy, Knowledge (history), Knowledge (local), Knowledge (nobility), and Linguistics as class skills. In addition, when using these skills to learn, study, or gather information about humans, you add an insight bonus equal to your Charisma bonus on such checks.",
        levelGained: 1,
      },
      {
        name: "Heroic Echo",
        description: "At 3rd level, when you receive a morale bonus from any spell, spell-like ability, or magic item, that bonus increases by +1. At 9th level, this ability also applies to competence bonuses. If you receive a morale effect that affects an area or multiple targets, as an immediate action you can share your increased bonus with all other recipients for a number of rounds equal to your Charisma bonus. You can use this ability once per day, plus one time per three levels after 3rd.",
        levelGained: 3,
      },
      {
        name: "Take Your Best Shot",
        description: "At 9th level, if you are targeted by a harmful spell, spell-like ability, or supernatural ability and suffer no harm from it (due to a successful save, spell resistance, or other protection), as an immediate action you can make an Intimidate check to demoralize the creature if it is within 30 feet and can clearly see and hear you. At 13th level, you can use this ability after succeeding at a saving throw to reduce the effects of an attack.",
        levelGained: 9,
      },
      {
        name: "Heroic Legends",
        description: "At 15th level, you may inspire greatness or inspire heroics as a bard of your sorcerer level by sacrificing a spell slot as a swift or move action. The effect lasts a number of rounds equal to the sacrificed spell's level; this duration is doubled for human recipients.",
        levelGained: 15,
      },
      {
        name: "Immortal Legend",
        description: "At 20th level, you cease aging; no longer need to eat, drink, or sleep; and gain immunity to death effects and energy drain.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "moment of greatness",    // 3rd
      "eagle's splendor",       // 5th
      "heroism",                // 7th
      "threefold aspect",       // 9th
      "greater command",        // 11th
      "repulsion",              // 13th
      "greater age resistance", // 15th
      "prediction of failure",  // 17th
      "overwhelming presence",  // 19th
    ],
    bonusFeats: [
      "Diehard",
      "Endurance",
      "Heroic Defiance",
      "Heroic Recovery",
      "Improved Initiative",
      "Lingering Spell",
      "Magical Aptitude",
      "Persuasive",
    ],
    bloodlineSkills: ["Perform (oratory)"],
    source: "pf1e-arg",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-impossible',
    name: 'Impossible',
    classIds: ['sorcerer'],
    description: "You can see beyond the mundane, and are capable of visualizing the improbable, and even the impossible. This ability derives from an equally unlikely source, such as the godmind of the axiomites or the monad of aeons. If this expanded perception does not drive you mad, you may learn to make the impossible into reality.",
    bloodlineArcana: "Constructs are susceptible to your enchantment (compulsion) spells as if they were not mind-affecting. Constructs are treated as living creatures for the purposes of determining which spells affect them.",
    powers: [
      {
        name: "Disorienting Touch",
        description: "At 1st level, as a melee touch attack, you can cause a creature to doubt its sense of depth and direction. The target is sickened for a number of rounds equal to 1/2 your sorcerer level (minimum 1). Multiple touches do not stack, but they do add to the duration. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Spontaneous Generation",
        description: "At 3rd level, you gain Craft Wondrous Item as a bonus feat. In addition, when you craft a magic item (except a potion, spell-trigger item, or spell-completion item), you may ignore one spell prerequisite without increasing the creation DC. You can ignore an additional spell prerequisite at 9th, 15th, and 20th levels.",
        levelGained: 3,
      },
      {
        name: "Distracting Pattern",
        description: "At 9th level, you can distort the scenery around you for a number of rounds equal to your sorcerer level. This ability provides a 20% miss chance on ranged attacks made against you and grants you a bonus on Stealth checks equal to 1/2 your sorcerer level. You can use this ability once per day at 9th level, twice per day at 17th, and three times per day at 20th.",
        levelGained: 9,
      },
      {
        name: "Relativity",
        description: "At 15th level, you can traverse vertical surfaces as easily as you walk on the ground. When climbing, you move at your normal land speed and take none of the penalties associated with climbing. You are also immune to reverse gravity and similar effects.",
        levelGained: 15,
      },
      {
        name: "Living Paradox",
        description: "At 20th level, your outward appearance remains the same, but beneath your skin lies not flesh and blood but something equally uncanny. You gain immunity to disease and poison. You take no additional damage from bleed effects, critical hits, and sneak attacks.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "lesser confusion",      // 3rd
      "make whole",            // 5th
      "shrink item",           // 7th
      "confusion",             // 9th
      "fabricate",             // 11th
      "animate objects",       // 13th
      "insanity",              // 15th
      "polymorph any object",  // 17th
      "wish",                  // 19th
    ],
    bonusFeats: [
      "Craft Construct",
      "Craft Magic Arms and Armor",
      "Deft Hands",
      "Exotic Weapon Proficiency",
      "Far Shot",
      "Iron Will",
      "Point-Blank Shot",
      "Skill Focus (Knowledge [engineering])",
    ],
    bloodlineSkills: ["Knowledge (engineering)"],
    source: "pf1e-ppc-cob",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
  {
    id: 'sorcerer-infernal',
    name: 'Infernal',
    classIds: ['sorcerer'],
    description: "Somewhere in your family's history, a relative made a deal with a devil, and that pact has influenced your family line ever since. In you, it manifests in direct and obvious ways, granting you powers and abilities. While your fate is still your own, you can't help but wonder if your ultimate reward is bound to the Pit.",
    bloodlineArcana: "Whenever you cast a spell of the charm subschool, increase the spell's DC by +2.",
    powers: [
      {
        name: "Corrupting Touch",
        description: "At 1st level, you can cause a creature to become shaken as a melee touch attack. This effect persists for a number of rounds equal to 1/2 your sorcerer level (minimum 1). Creatures shaken by this ability radiate an aura of evil. Multiple touches do not stack, but they do add to the duration. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
        levelGained: 1,
      },
      {
        name: "Infernal Resistances",
        description: "At 3rd level, you gain resist fire 5 and a +2 bonus on saving throws made against poison. At 9th level, your resistance to fire increases to 10 and your bonus on poison saving throws increases to +4.",
        levelGained: 3,
      },
      {
        name: "Hellfire",
        description: "At 9th level, you can call down a column of hellfire. This 10-foot-radius burst deals 1d6 points of fire damage per sorcerer level (Reflex half). Good creatures that fail their saves are shaken for a number of rounds equal to your sorcerer level. You can use this ability once per day at 9th level, twice at 17th, and three times at 20th.",
        levelGained: 9,
      },
      {
        name: "On Dark Wings",
        description: "At 15th level, you can grow fearsome bat wings as a standard action, giving you a fly speed of 60 feet with average maneuverability. The wings can be dismissed as a free action.",
        levelGained: 15,
      },
      {
        name: "Power of the Pit",
        description: "At 20th level, your form becomes infused with vile power. You gain immunity to fire and poison. You also gain resistance to acid 10 and cold 10, and the ability to see perfectly in darkness of any kind to a range of 60 feet.",
        levelGained: 20,
      },
    ],
    bonusSpells: [
      "protection from good",                                    // 3rd
      "scorching ray",                                           // 5th
      "suggestion",                                              // 7th
      "charm monster",                                           // 9th
      "dominate person",                                         // 11th
      "planar binding (devils and fiendish creatures only)",     // 13th
      "greater teleport",                                        // 15th
      "power word stun",                                         // 17th
      "meteor swarm",                                            // 19th
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
    source: "pf1e-core",
    isOfficial: true,
    verificationStatus: 'needs_review' as const,
    visibility: "global",
    rev: 1,
  },
];
