// Batch 007 | first: 'Travel/Exploration Subdomain' | last: 'Weather/Storms Subdomain' | count: 29
import { DomainEntry } from '@/types/classOptions';

// ---- Travel Subdomains (3) ----

export const travelExplorationSubdomain: DomainEntry = {
  id: 'travel-exploration',
  name: 'Exploration Subdomain',
  description:
    'Subdomain of Travel. You are an explorer and find enlightenment in the simple joy of travel, be it by foot or conveyance or magic. Increase your base speed by 10 feet.',
  domainSpells: [
    'expeditious retreat', // level 1 (replaces longstrider)
    'locate object', // level 2
    'fly', // level 3
    'locate creature', // level 4 (replaces dimension door)
    'teleport', // level 5
    'find the path', // level 6
    'greater teleport', // level 7
    'phase door', // level 8
    'world wave', // level 9 (replaces astral projection)
  ],
  powers: [
    {
      name: 'Door Sight (Su)',
      description:
        'You can lay your hand upon any surface and see what is on the other side, as if using clairvoyance. Using this power takes 1 minute, during which time you must be touching the surface you want to see through. You can keep looking for as long as 10 minutes with each use of this power, but must touch the surface and take no other action the entire time. The surface cannot be thicker than 6 inches plus 1 inch per cleric level you possess. You can use this power a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Dimensional Hop (Sp)',
      description:
        'At 8th level, you can teleport up to 10 feet per cleric level per day as a move action. This teleportation must be used in 5-foot increments and does not provoke attacks of opportunity. You must have line of sight to your destination. You can bring other willing creatures with you, but you must expend an equal amount of distance for each creature brought.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const travelPortalSubdomain: DomainEntry = {
  id: 'travel-portal',
  name: 'Portal Subdomain',
  description:
    'Subdomain of Travel. You are an explorer and find enlightenment in the simple joy of travel, be it by foot or conveyance or magic. Increase your base speed by 10 feet.',
  domainSpells: [
    'open and shut', // level 1 (replaces longstrider)
    'knock', // level 2 (replaces locate object)
    'urban step', // level 3 (replaces fly)
    'dimension door', // level 4
    'teleport', // level 5
    'find the path', // level 6
    'greater teleport', // level 7
    'phase door', // level 8
    'teleportation circle', // level 9 (replaces astral projection)
  ],
  powers: [
    {
      name: 'Sacred Threshold (Su)',
      description:
        'As a standard action, you can bless a door, a window, or another portal with a touch. For 1 minute, you can increase or decrease the DC of any check to unlock or force open the portal by an amount equal to half your cleric level. Additionally, the first ally to pass through the blessed portal gains temporary hit points equal to 1d4 + 1 for every 2 cleric levels you possess. These temporary hit points last for 1 minute. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Travel as One (Su)',
      description:
        'When you cast a teleportation spell, you treat your caster level as 3 higher than normal for the purpose of determining how many additional creatures you can transport with you. You and any creatures you teleport gain a number of temporary hit points equal to your level that disappear after you reach your destination; these offset any damage from teleportation mishaps.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const travelTradeSubdomain: DomainEntry = {
  id: 'travel-trade',
  name: 'Trade Subdomain',
  description:
    'Subdomain of Travel. You are an explorer and find enlightenment in the simple joy of travel, be it by foot or conveyance or magic. Increase your base speed by 10 feet.',
  domainSpells: [
    'floating disk', // level 1 (replaces longstrider)
    'locate object', // level 2
    'fly', // level 3
    'dimension door', // level 4
    'overland flight', // level 5 (replaces teleport)
    'find the path', // level 6
    'greater teleport', // level 7
    'phase door', // level 8
    'gate', // level 9 (replaces astral projection)
  ],
  powers: [
    {
      name: 'Silver-Tongued Haggler (Su)',
      description:
        'Whenever you make a Bluff, Diplomacy, or Sense Motive check, you can, as a free action, grant yourself a bonus on the roll equal to 1/2 your cleric level (minimum +1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Dimensional Hop (Sp)',
      description:
        'At 8th level, you can teleport up to 10 feet per cleric level per day as a move action. This teleportation must be used in 5-foot increments and does not provoke attacks of opportunity. You must have line of sight to your destination. You can bring other willing creatures with you, but you must expend an equal amount of distance for each creature brought.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Core Domains (6) ----

export const trickeryDomain: DomainEntry = {
  id: 'trickery',
  name: 'Trickery Domain',
  description:
    'You are a master of illusions and deceptions. Bluff, Disguise, and Stealth are class skills.',
  domainSpells: [
    'disguise self', // level 1
    'invisibility', // level 2
    'nondetection', // level 3
    'confusion', // level 4
    'false vision', // level 5
    'mislead', // level 6
    'screen', // level 7
    'mass invisibility', // level 8
    'time stop', // level 9
  ],
  powers: [
    {
      name: 'Copycat (Sp)',
      description:
        'You can create an illusory double of yourself as a move action. This double functions as a single mirror image and lasts for a number of rounds equal to your cleric level, or until the illusory duplicate is dispelled or destroyed. You can have no more than one copycat at a time. This ability does not stack with the mirror image spell. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: "Master's Illusion (Sp)",
      description:
        "At 8th level, you can create an illusion that hides the appearance of yourself and any number of allies within 30 feet for 1 round per cleric level. This ability otherwise functions like the veil spell, although it is not illusory. The save DC to disbelieve the illusion is equal to 10 + 1/2 your cleric level + your Wisdom modifier.",
      levelGained: 8,
    },
  ],
  grantedClassSkills: ['Bluff', 'Disguise', 'Stealth'],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const verminDomain: DomainEntry = {
  id: 'vermin',
  name: 'Vermin Domain',
  description: 'You share a deep connection with mindless invertebrates.',
  domainSpells: [
    'jump', // level 1
    'vomit swarm', // level 2
    'darkvision', // level 3
    'insect plague', // level 4
    'swarm skin', // level 5
    'whip of ants', // level 6
    'creeping doom', // level 7
    'mass fly', // level 8
    'mind blank', // level 9
  ],
  powers: [
    {
      name: 'Familiar',
      description:
        'You gain a greensting scorpion familiar. Your effective wizard level for this ability is equal to your druid level. Your druid level stacks with levels from other classes that grant familiars when determining the powers of your familiar.',
      levelGained: 1,
    },
    {
      name: 'Vermin Friend (Ex)',
      description:
        'You can use wild empathy to influence vermin as easily as you influence animals if you do not already possess this ability.',
      levelGained: 1,
    },
    {
      name: 'Tremorsense (Ex)',
      description:
        'At 6th level, you gain tremorsense 30 feet. At 12th level, you gain tremorsense 60 feet.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const voidDomain: DomainEntry = {
  id: 'void',
  name: 'Void Domain',
  description:
    'You can call upon the cold darkness between the stars to gain flight, travel to other worlds, or summon monsters from beyond to do your bidding.',
  domainSpells: [
    'feather fall', // level 1
    'levitate', // level 2
    'fly', // level 3
    'lesser planar binding', // level 4
    'overland flight', // level 5
    'planar binding', // level 6
    'reverse gravity', // level 7
    'greater planar binding', // level 8
    'interplanetary teleport', // level 9
  ],
  powers: [
    {
      name: 'Guarded Mind (Ex)',
      description:
        'You gain a +2 insight bonus on saving throws against all mind-affecting effects.',
      levelGained: 1,
    },
    {
      name: 'Part the Veil (Su)',
      description:
        'At 8th level, when you cast a spell that targets a single creature and allows a Will save, you can use a swift action to lace the spell with void madness. If the target fails its saving throw, it becomes confused for a number of rounds equal to the level of the spell as visions of the void cause temporary insanity. The victim can make a new saving throw each round to end the confusion effect—this saving throw does not negate the other effects of the original spell, only the confusion. This is a mind-affecting effect. You can use this ability a number of times per day equal to 1/2 your cleric level.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const warDomain: DomainEntry = {
  id: 'war',
  name: 'War Domain',
  description:
    'You are a crusader for your god, always ready and willing to fight to defend your faith.',
  domainSpells: [
    'magic weapon', // level 1
    'spiritual weapon', // level 2
    'magic vestment', // level 3
    'divine power', // level 4
    'flame strike', // level 5
    'blade barrier', // level 6
    'power word blind', // level 7
    'power word stun', // level 8
    'power word kill', // level 9
  ],
  powers: [
    {
      name: 'Battle Rage (Sp)',
      description:
        'You can touch a creature as a standard action to give it a bonus on melee damage rolls equal to 1/2 your cleric level for 1 round (minimum +1). You can do so a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Weapon Master (Su)',
      description:
        "At 8th level, as a swift action, you gain the use of one combat feat for a number of rounds per day equal to your cleric level. These rounds do not need to be consecutive, and you can change the feat chosen each time you use this ability. You must meet the prerequisites to use this feat.",
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const waterDomain: DomainEntry = {
  id: 'water',
  name: 'Water Domain',
  description:
    'You can manipulate water and mist and ice, conjure creatures of water, and resist cold.',
  domainSpells: [
    'obscuring mist', // level 1
    'fog cloud', // level 2
    'water breathing', // level 3
    'control water', // level 4
    'ice storm', // level 5
    'cone of cold', // level 6
    'elemental body IV', // level 7 (water only)
    'horrid wilting', // level 8
    'elemental swarm', // level 9 (water spell only)
  ],
  powers: [
    {
      name: 'Icicle (Sp)',
      description:
        'As a standard action, you can fire an icicle from your finger, targeting any foe within 30 feet as a ranged touch attack. The icicle deals 1d6 points of cold damage + 1 point for every two cleric levels you possess. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Cold Resistance (Ex)',
      description:
        'At 6th level, you gain resist cold 10. This resistance increases to 20 at 12th level. At 20th level, you gain immunity to cold.',
      levelGained: 6,
    },
  ],
  druidAllowed: true,
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const weatherDomain: DomainEntry = {
  id: 'weather',
  name: 'Weather Domain',
  description:
    'With power over storm and sky, you can call down the wrath of the gods upon the world below.',
  domainSpells: [
    'obscuring mist', // level 1
    'fog cloud', // level 2
    'call lightning', // level 3
    'sleet storm', // level 4
    'ice storm', // level 5
    'control winds', // level 6
    'control weather', // level 7
    'whirlwind', // level 8
    'storm of vengeance', // level 9
  ],
  powers: [
    {
      name: 'Storm Burst (Sp)',
      description:
        'As a standard action, you can create a storm burst targeting any foe within 30 feet as a ranged touch attack. The storm burst deals 1d6 points of nonlethal damage + 1 point for every two cleric levels you possess. In addition, the target takes a –2 penalty on attack rolls for 1 round. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Lightning Lord (Sp)',
      description:
        'At 8th level, you can call down a number of bolts of lightning per day equal to your cleric level. You can call down as many bolts as you want with a single standard action, but no creature can be the target of more than one bolt and no two bolts can strike the same creature. Each bolt deals 10d6 points of electricity damage, and the creatures must all be within 30 feet of each other. This ability otherwise functions as call lightning.',
      levelGained: 8,
    },
  ],
  druidAllowed: true,
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Trickery Subdomains (6) ----

export const trickeryAmbushSubdomain: DomainEntry = {
  id: 'trickery-ambush',
  name: 'Ambush Subdomain',
  description:
    'Subdomain of Trickery. You are a master of illusions and deceptions. Bluff, Disguise, and Stealth are class skills.',
  domainSpells: [
    'alarm', // level 1 (replaces disguise self)
    'invisibility', // level 2
    'nondetection', // level 3
    'confusion', // level 4
    'illusory wall', // level 5 (replaces false vision)
    'veil', // level 6 (replaces mislead)
    'screen', // level 7
    'mass invisibility', // level 8
    'time stop', // level 9
  ],
  powers: [
    {
      name: 'Chameleon Aspect (Su)',
      description:
        'As a swift action, you can subtly alter the color of your scales, blending them with the surrounding environment. This grants you concealment (20% miss chance) against foes more than 10 feet away, and total concealment (50% miss chance) against foes more than 40 feet away. You can use this ability for a number of rounds per day equal to 3 + your Wisdom modifier. These rounds do not need to be consecutive.',
      levelGained: 1,
    },
    {
      name: "Master's Illusion (Sp)",
      description:
        "At 8th level, you can create an illusion that hides the appearance of yourself and any number of allies within 30 feet for 1 round per cleric level. This ability otherwise functions like the veil spell, although it is not illusory. The save DC to disbelieve the illusion is equal to 10 + 1/2 your cleric level + your Wisdom modifier.",
      levelGained: 8,
    },
  ],
  grantedClassSkills: ['Bluff', 'Disguise', 'Stealth'],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const trickeryDeceptionSubdomain: DomainEntry = {
  id: 'trickery-deception',
  name: 'Deception Subdomain',
  description:
    'Subdomain of Trickery. You are a master of illusions and deceptions. Bluff, Disguise, and Stealth are class skills.',
  domainSpells: [
    'disguise self', // level 1
    'mirror image', // level 2 (replaces invisibility)
    'nondetection', // level 3
    'confusion', // level 4
    'false vision', // level 5
    'mislead', // level 6
    'project image', // level 7 (replaces screen)
    'mass invisibility', // level 8
    'time stop', // level 9
  ],
  powers: [
    {
      name: 'Sudden Shift (Sp)',
      description:
        'In the blink of an eye, you can appear somewhere else. As an immediate action, after you are missed by a melee attack, you can teleport up to 10 feet to a space that you can see. This space must be inside the reach of the creature that attacked you. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: "Master's Illusion (Sp)",
      description:
        "At 8th level, you can create an illusion that hides the appearance of yourself and any number of allies within 30 feet for 1 round per cleric level. This ability otherwise functions like the veil spell, although it is not illusory. The save DC to disbelieve the illusion is equal to 10 + 1/2 your cleric level + your Wisdom modifier.",
      levelGained: 8,
    },
  ],
  grantedClassSkills: ['Bluff', 'Disguise', 'Stealth'],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const trickeryEspionageSubdomain: DomainEntry = {
  id: 'trickery-espionage',
  name: 'Espionage Subdomain',
  description:
    'Subdomain of Trickery. You are a master of illusions and deceptions. Bluff, Disguise, and Stealth are class skills.',
  domainSpells: [
    'disguise self', // level 1
    'anonymous interaction', // level 2 (replaces invisibility)
    'nondetection', // level 3
    'zone of silence', // level 4 (replaces confusion)
    'false vision', // level 5
    'mislead', // level 6
    'screen', // level 7
    'mind blank', // level 8 (replaces mass invisibility)
    'time stop', // level 9
  ],
  powers: [
    {
      name: 'Deep Cover (Su)',
      description:
        'When you prepare your spells, you can also choose one cover identity—whether that of a real person or a fictitious one. You can assume the disguise of your cover identity in half the normal amount of time. When you are targeted by a spell or effect that would reveal your alignment, thoughts, or other hidden information (such as detect evil, detect thoughts, or zone of truth), you can spend an immediate action to force the caster to attempt a Will saving throw (DC = 10 + 1/2 your cleric level + your Wisdom modifier). On a failed save, the spell or effect receives false information consistent with your cover identity instead of true information. You can use this false information ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: "Master's Illusion (Sp)",
      description:
        "At 8th level, you can create an illusion that hides the appearance of yourself and any number of allies within 30 feet for 1 round per cleric level. This ability otherwise functions like the veil spell, although it is not illusory. The save DC to disbelieve the illusion is equal to 10 + 1/2 your cleric level + your Wisdom modifier.",
      levelGained: 8,
    },
  ],
  grantedClassSkills: ['Bluff', 'Disguise', 'Stealth'],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const trickeryGreedSubdomain: DomainEntry = {
  id: 'trickery-greed',
  name: 'Greed Subdomain',
  description:
    'Subdomain of Trickery. You are a master of illusions and deceptions. Bluff, Disguise, and Stealth are class skills.',
  domainSpells: [
    'disguise self', // level 1
    'masterwork transformation', // level 2 (replaces invisibility)
    'nondetection', // level 3
    'confusion', // level 4
    'false vision', // level 5
    'guards and wards', // level 6 (replaces mislead)
    'screen', // level 7
    'create demiplane', // level 8 (replaces mass invisibility)
    'time stop', // level 9
  ],
  powers: [
    {
      name: 'More for Me (Su)',
      description:
        'As an immediate action, when another character within 30 feet casts a spell with a range greater than touch, you can attempt a caster level check (DC 15 + the spell level). If you succeed, you receive the benefit of the spell instead of (or in addition to) one of the intended targets. If you were already a target, you are affected twice (though bonuses do not stack). You gain no foreknowledge of which spell is being cast. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: "Master's Illusion (Sp)",
      description:
        "At 8th level, you can create an illusion that hides the appearance of yourself and any number of allies within 30 feet for 1 round per cleric level. This ability otherwise functions like the veil spell, although it is not illusory. The save DC to disbelieve the illusion is equal to 10 + 1/2 your cleric level + your Wisdom modifier.",
      levelGained: 8,
    },
  ],
  grantedClassSkills: ['Bluff', 'Disguise', 'Stealth'],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const trickeryInnuendoSubdomain: DomainEntry = {
  id: 'trickery-innuendo',
  name: 'Innuendo Subdomain',
  description:
    'Subdomain of Trickery. You are a master of illusions and deceptions. Bluff, Disguise, and Stealth are class skills.',
  domainSpells: [
    'sow thought', // level 1 (replaces disguise self)
    'invisibility', // level 2
    'suggestion', // level 3 (replaces nondetection)
    'confusion', // level 4
    'false vision', // level 5
    'mass suggestion', // level 6 (replaces mislead)
    'screen', // level 7
    'mass invisibility', // level 8
    'time stop', // level 9
  ],
  powers: [
    {
      name: "Fool's Privilege (Su)",
      description:
        "You can use this power as a swift action when you fail a Bluff, Diplomacy, or Intimidate check outside of combat. You suffer no negative effects due to the failed check, and the next round you can attempt the check again without the usual penalty for a failed attempt. You can use this ability once per day at 1st level, plus one additional time per day for every 4 cleric levels beyond 1st.",
      levelGained: 1,
    },
    {
      name: "Master's Illusion (Sp)",
      description:
        "At 8th level, you can create an illusion that hides the appearance of yourself and any number of allies within 30 feet for 1 round per cleric level. This ability otherwise functions like the veil spell, although it is not illusory. The save DC to disbelieve the illusion is equal to 10 + 1/2 your cleric level + your Wisdom modifier.",
      levelGained: 8,
    },
  ],
  grantedClassSkills: ['Bluff', 'Disguise', 'Stealth'],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const trickeryThieverySubdomain: DomainEntry = {
  id: 'trickery-thievery',
  name: 'Thievery Subdomain',
  description:
    'Subdomain of Trickery. You are a master of illusions and deceptions. Bluff, Disguise, and Stealth are class skills.',
  domainSpells: [
    'disguise self', // level 1
    'invisibility', // level 2
    'locate object', // level 3 (replaces nondetection)
    'confusion', // level 4
    'false vision', // level 5
    'mislead', // level 6
    'ethereal jaunt', // level 7 (replaces screen)
    'mass invisibility', // level 8
    'time stop', // level 9
  ],
  powers: [
    {
      name: 'Copycat (Sp)',
      description:
        'You can create an illusory double of yourself as a move action. This double functions as a single mirror image and lasts for a number of rounds equal to your cleric level, or until the illusory duplicate is dispelled or destroyed. You can have no more than one copycat at a time. This ability does not stack with the mirror image spell. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Thief of the Gods (Su)',
      description:
        'At 8th level, when you make a Disable Device or Sleight of Hand check, you can roll twice and take the higher result. Using this ability is a free action. You can use this ability once per day at 8th level, plus one additional time per day for every 2 cleric levels beyond 8th.',
      levelGained: 8,
    },
  ],
  grantedClassSkills: ['Bluff', 'Disguise', 'Stealth'],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Void Subdomains (3) ----

export const voidDarkTapestrySubdomain: DomainEntry = {
  id: 'void-dark-tapestry',
  name: 'Dark Tapestry Subdomain',
  description:
    'Subdomain of Void. You can call upon the cold darkness between the stars to gain flight, travel to other worlds, or summon monsters from beyond to do your bidding.',
  domainSpells: [
    'feather fall', // level 1
    'summon monster II', // level 2 (replaces levitate)
    'fly', // level 3
    'lesser planar binding', // level 4
    'summon monster V', // level 5 (replaces overland flight)
    'planar binding', // level 6
    'insanity', // level 7 (replaces reverse gravity)
    'greater planar binding', // level 8
    'interplanetary teleport', // level 9
  ],
  powers: [
    {
      name: 'It Came from Beyond (Su)',
      description:
        'Once per day, when you cast a summoning spell, any one creature you summon is more powerful than normal. The creature gains the advanced creature simple template. Only one summoned creature gains this benefit per spell. The summoned creature appears unnervingly deformed or unnaturally hideous, bringing with it a whiff of the emptiness of the void. This ability affects only spells cast using your cleric spell slots, not abilities from other classes.',
      levelGained: 1,
    },
    {
      name: 'Part the Veil (Su)',
      description:
        'At 8th level, when you cast a spell that targets a single creature and allows a Will save, you can use a swift action to lace the spell with void madness. If the target fails its saving throw, it becomes confused for a number of rounds equal to the level of the spell as visions of the void cause temporary insanity. The victim can make a new saving throw each round to end the confusion effect—this saving throw does not negate the other effects of the original spell, only the confusion. This is a mind-affecting effect. You can use this ability a number of times per day equal to 1/2 your cleric level.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const voidIsolationSubdomain: DomainEntry = {
  id: 'void-isolation',
  name: 'Isolation Subdomain',
  description:
    'Subdomain of Void. You can call upon the cold darkness between the stars to gain flight, travel to other worlds, or summon monsters from beyond to do your bidding.',
  domainSpells: [
    'feather fall', // level 1
    'levitate', // level 2
    'fly', // level 3
    'crushing despair', // level 4 (replaces lesser planar binding)
    'overland flight', // level 5
    'wall of force', // level 6 (replaces planar binding)
    'reverse gravity', // level 7
    'prismatic wall', // level 8 (replaces greater planar binding)
    'interplanetary teleport', // level 9
  ],
  powers: [
    {
      name: 'Guarded Mind (Ex)',
      description:
        'You gain a +2 insight bonus on saving throws against all mind-affecting effects.',
      levelGained: 1,
    },
    {
      name: 'Aura of Isolation (Su)',
      description:
        'As a standard action, you can create a 20-foot aura that causes enemies within to be overcome with feelings of isolation and loss. Your enemies treat the aura as difficult terrain, as they become sluggish within its area of effect. Furthermore, while within the aura, your enemies cannot provide flanking, nor can they use or benefit from the aid another action. The aura lasts for a number of rounds equal to 3 + your Wisdom modifier, but the rounds need not be consecutive. This is a mind-affecting emotion effect.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const voidStarsSubdomain: DomainEntry = {
  id: 'void-stars',
  name: 'Stars Subdomain',
  description:
    'Subdomain of Void. The firmament provides you inspiration, and you draw power from the stars\'s distant light.',
  domainSpells: [
    'feather fall', // level 1
    'hypnotic pattern', // level 2 (replaces levitate)
    'fly', // level 3
    'lesser planar binding', // level 4
    'overland flight', // level 5
    'planar binding', // level 6
    'sunbeam', // level 7 (replaces reverse gravity)
    'greater planar binding', // level 8
    'meteor swarm', // level 9 (replaces interplanetary teleport)
  ],
  powers: [
    {
      name: 'Guarded Mind (Ex)',
      description:
        'You gain a +2 insight bonus on saving throws against all mind-affecting effects.',
      levelGained: 1,
    },
    {
      name: 'The Stars Are Right (Su)',
      description:
        'If the stars are visible, you can spontaneously cast any of your Stars subdomain spells by exchanging a prepared spell of the same level. Whenever you cast a Stars subdomain spell while under a night sky where the stars are visible, you are healed of a number of hit points equal to the spell\'s level as the starlight infuses you.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- War Subdomains (3) ----

export const warBloodSubdomain: DomainEntry = {
  id: 'war-blood',
  name: 'Blood Subdomain',
  description:
    'Subdomain of War. You are a crusader for your god, always ready and willing to fight to defend your faith.',
  domainSpells: [
    'magic weapon', // level 1
    'spiritual weapon', // level 2
    'vampiric touch', // level 3 (replaces magic vestment)
    'divine power', // level 4
    'wall of thorns', // level 5 (replaces flame strike)
    'blade barrier', // level 6
    'mass inflict serious wounds', // level 7 (replaces power word blind)
    'power word stun', // level 8
    'power word kill', // level 9
  ],
  powers: [
    {
      name: 'Battle Rage (Sp)',
      description:
        'You can touch a creature as a standard action to give it a bonus on melee damage rolls equal to 1/2 your cleric level for 1 round (minimum +1). You can do so a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Wounding Blade (Su)',
      description:
        'At 8th level, you can give a weapon that you touch the wounding special quality for a number of rounds equal to 1/2 your cleric level. You can use this ability once per day at 8th level, plus one additional time per day for every 4 cleric levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const warDuelsSubdomain: DomainEntry = {
  id: 'war-duels',
  name: 'Duels Subdomain',
  description:
    'Subdomain of War. You are a crusader for your god, always ready and willing to fight to defend your faith.',
  domainSpells: [
    'magic weapon', // level 1
    'warding weapon', // level 2 (replaces spiritual weapon)
    'magic vestment', // level 3
    'divine power', // level 4
    'dance of a hundred cuts', // level 5 (replaces flame strike)
    'blade barrier', // level 6
    'power word blind', // level 7
    'dance of a thousand cuts', // level 8 (replaces power word stun)
    'power word kill', // level 9
  ],
  powers: [
    {
      name: 'Divine Challenge (Su)',
      description:
        'As a swift action, you can challenge a visible foe within 30 feet, gaining a +1 sacred bonus to your AC against that creature\'s attacks and a bonus equal to 1/2 your cleric level on Bluff skill checks to feint against it. These effects last for a number of rounds equal to 1/2 your cleric level. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Weapon Master (Su)',
      description:
        "At 8th level, as a swift action, you gain the use of one combat feat for a number of rounds per day equal to your cleric level. These rounds do not need to be consecutive, and you can change the feat chosen each time you use this ability. You must meet the prerequisites to use this feat.",
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const warTacticsSubdomain: DomainEntry = {
  id: 'war-tactics',
  name: 'Tactics Subdomain',
  description:
    'Subdomain of War. You are a crusader for your god, always ready and willing to fight to defend your faith.',
  domainSpells: [
    'magic weapon', // level 1
    'aid', // level 2 (replaces spiritual weapon)
    'magic vestment', // level 3
    'divine power', // level 4
    'greater command', // level 5 (replaces flame strike)
    'blade barrier', // level 6
    'power word blind', // level 7
    'greater planar ally', // level 8 (replaces power word stun)
    'power word kill', // level 9
  ],
  powers: [
    {
      name: 'Seize the Initiative (Su)',
      description:
        'Whenever you and your allies roll for initiative, you can grant one ally within 30 feet the ability to roll twice and take either result. This decision is made before results are revealed. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Weapon Master (Su)',
      description:
        "At 8th level, as a swift action, you gain the use of one combat feat for a number of rounds per day equal to your cleric level. These rounds do not need to be consecutive, and you can change the feat chosen each time you use this ability. You must meet the prerequisites to use this feat.",
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Water Subdomains (5) ----

export const waterFlotsamSubdomain: DomainEntry = {
  id: 'water-flotsam',
  name: 'Flotsam Subdomain',
  description:
    "Subdomain of Water. You know that the sea's bounty takes many forms, including hidden treasures among refuse.",
  domainSpells: [
    'obscuring mist', // level 1
    'make whole', // level 2 (replaces fog cloud)
    'water breathing', // level 3
    'control water', // level 4
    'major creation', // level 5 (replaces ice storm)
    'animate objects', // level 6 (replaces cone of cold)
    'elemental body IV', // level 7 (water only)
    'horrid wilting', // level 8
    'elemental swarm', // level 9 (water spell only)
  ],
  powers: [
    {
      name: 'Icicle (Sp)',
      description:
        'As a standard action, you can fire an icicle from your finger, targeting any foe within 30 feet as a ranged touch attack. The icicle deals 1d6 points of cold damage + 1 point for every two cleric levels you possess. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Sift (Su)',
      description:
        'At 6th level, you can reach into water as a standard action and pull out an object with a maximum gp value of up to 50 gp × your cleric level. Retrieved objects emerge in broken condition initially. At 12th level, items no longer manifest as broken. At 20th level, the maximum value increases to 5,000 gp. Objects persist for 24 hours before vanishing. This ability functions once per day and requires a body of water deep enough for full immersion.',
      levelGained: 6,
    },
  ],
  druidAllowed: true,
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const waterFlowingSubdomain: DomainEntry = {
  id: 'water-flowing',
  name: 'Flowing Subdomain',
  description:
    'Subdomain of Water. You can manipulate water and mist and ice, conjure creatures of water, and resist cold.',
  domainSpells: [
    'obscuring mist', // level 1
    "cat's grace", // level 2 (replaces fog cloud)
    'water breathing', // level 3
    'freedom of movement', // level 4 (replaces control water)
    'ice storm', // level 5
    'fluid form', // level 6 (replaces cone of cold)
    'elemental body IV', // level 7 (water only)
    'mind blank', // level 8 (replaces horrid wilting)
    'elemental swarm', // level 9 (water spell only)
  ],
  powers: [
    {
      name: 'Go with the Flow (Su)',
      description:
        'You can touch a creature as a standard action to suppress its strong emotions. The target is affected as the calm emotions spell, except it can still take violent actions and violent actions against the target do not end the effect. This effect lasts for a number of rounds equal to 1/2 your cleric level (minimum 1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Cold Resistance (Ex)',
      description:
        'At 6th level, you gain resist cold 10. This resistance increases to 20 at 12th level. At 20th level, you gain immunity to cold.',
      levelGained: 6,
    },
  ],
  druidAllowed: true,
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const waterIceSubdomain: DomainEntry = {
  id: 'water-ice',
  name: 'Ice Subdomain',
  description:
    'Subdomain of Water. You can manipulate water and mist and ice, conjure creatures of water, and resist cold.',
  domainSpells: [
    'obscuring mist', // level 1
    'fog cloud', // level 2
    'water breathing', // level 3
    'control water', // level 4
    'ice storm', // level 5
    'cone of cold', // level 6
    'freezing sphere', // level 7 (replaces elemental body IV)
    'horrid wilting', // level 8
    'polar ray', // level 9 (replaces elemental swarm)
  ],
  powers: [
    {
      name: 'Icicle (Sp)',
      description:
        'As a standard action, you can fire an icicle from your finger, targeting any foe within 30 feet as a ranged touch attack. The icicle deals 1d6 points of cold damage + 1 point for every two cleric levels you possess. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Body of Ice (Su)',
      description:
        'At 8th level, you can transmute your body and equipment to ice for a period of time. It takes a standard action to take on the form of ice, and you can end the transmutation with a free action on your turn. When you take on the form of ice, you are immune to cold and have DR 5/—, but you take twice the normal amount of damage from fire. You can take on the form of ice for a number of rounds per day equal to your cleric level. The rounds need not be consecutive.',
      levelGained: 8,
    },
  ],
  druidAllowed: true,
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const waterOceansSubdomain: DomainEntry = {
  id: 'water-oceans',
  name: 'Oceans Subdomain',
  description:
    'Subdomain of Water. You can manipulate water and mist and ice, conjure creatures of water, and resist cold.',
  domainSpells: [
    'obscuring mist', // level 1
    'slipstream', // level 2 (replaces fog cloud)
    'water walk', // level 3 (replaces water breathing)
    'control water', // level 4
    'ice storm', // level 5
    'cone of cold', // level 6
    'elemental body IV', // level 7 (water only)
    'horrid wilting', // level 8
    'tsunami', // level 9 (replaces elemental swarm)
  ],
  powers: [
    {
      name: 'Surge (Su)',
      description:
        'As a standard action, you can cause a mighty wave to appear that pushes or pulls a single creature. You make a combat maneuver check against the target, using your cleric level plus your Wisdom modifier as your CMB. On a success, the creature can be moved via a bull rush or drag maneuver. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Cold Resistance (Ex)',
      description:
        'At 6th level, you gain resist cold 10. This resistance increases to 20 at 12th level. At 20th level, you gain immunity to cold.',
      levelGained: 6,
    },
  ],
  druidAllowed: true,
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const waterRiversSubdomain: DomainEntry = {
  id: 'water-rivers',
  name: 'Rivers Subdomain',
  description:
    'Subdomain of Water. Freshwater rivers and streams are the lifeblood of both the land and your life.',
  domainSpells: [
    'hydraulic push', // level 1 (replaces obscuring mist)
    'slipstream', // level 2 (replaces fog cloud)
    'water breathing', // level 3
    'control water', // level 4
    'elemental body II', // level 5 (replaces ice storm)
    'fluid form', // level 6 (replaces cone of cold)
    'elemental body IV', // level 7 (water only)
    'horrid wilting', // level 8
    'elemental swarm', // level 9 (water spell only)
  ],
  powers: [
    {
      name: 'Current Flow (Su)',
      description:
        'As a free action, you can boost either your land speed or your swim speed by 10 feet. While swimming, you gain a bonus on Swim checks equal to 1/2 your cleric level (minimum 1). These effects persist for a number of rounds equal to your Wisdom modifier (minimum 1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Cold Resistance (Ex)',
      description:
        'At 6th level, you gain resist cold 10. This resistance increases to 20 at 12th level. At 20th level, you gain immunity to cold.',
      levelGained: 6,
    },
  ],
  druidAllowed: true,
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Weather Subdomains (3) ----

export const weatherMonsoonSubdomain: DomainEntry = {
  id: 'weather-monsoon',
  name: 'Monsoon Subdomain',
  description:
    'Subdomain of Weather. With power over storm and sky, you can call down the wrath of the gods upon the world below.',
  domainSpells: [
    'obscuring mist', // level 1
    'fog cloud', // level 2
    'hydraulic torrent', // level 3 (replaces call lightning)
    'control water', // level 4 (replaces sleet storm)
    'fickle winds', // level 5 (replaces ice storm)
    'control winds', // level 6
    'control weather', // level 7
    'whirlwind', // level 8
    'tsunami', // level 9 (replaces storm of vengeance)
  ],
  powers: [
    {
      name: 'Storm Burst (Sp)',
      description:
        'As a standard action, you can create a storm burst targeting any foe within 30 feet as a ranged touch attack. The storm burst deals 1d6 points of nonlethal damage + 1 point for every two cleric levels you possess. In addition, the target takes a –2 penalty on attack rolls for 1 round. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Refreshing Rain (Su)',
      description:
        'As a standard action, you can call a brief shower of rain in a 30-foot radius. Creatures in the area are healed of an amount of nonlethal damage equal to double your cleric level and are no longer exhausted, fatigued, nauseated, or sickened. You can use this ability once per day at 8th level, and one additional time per day for every 4 cleric levels beyond 8th.',
      levelGained: 8,
    },
  ],
  druidAllowed: true,
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const weatherSeasonsSubdomain: DomainEntry = {
  id: 'weather-seasons',
  name: 'Seasons Subdomain',
  description:
    'Subdomain of Weather. With power over storm and sky, you can call down the wrath of the gods upon the world below.',
  domainSpells: [
    'goodberry', // level 1 (replaces obscuring mist)
    'fog cloud', // level 2
    'call lightning', // level 3
    'blight', // level 4 (replaces sleet storm)
    'ice storm', // level 5
    'control winds', // level 6
    'control weather', // level 7
    'sunburst', // level 8 (replaces whirlwind)
    'storm of vengeance', // level 9
  ],
  powers: [
    {
      name: 'Untouched by the Seasons (Su)',
      description:
        'By touching a creature, you can grant it the benefits of endure elements, which last for 1 hour per cleric level. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Lightning Lord (Sp)',
      description:
        'At 8th level, you can call down a number of bolts of lightning per day equal to your cleric level. You can call down as many bolts as you want with a single standard action, but no creature can be the target of more than one bolt and no two bolts can strike the same creature. Each bolt deals 10d6 points of electricity damage, and the creatures must all be within 30 feet of each other. This ability otherwise functions as call lightning.',
      levelGained: 8,
    },
  ],
  druidAllowed: true,
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const weatherStormsSubdomain: DomainEntry = {
  id: 'weather-storms',
  name: 'Storms Subdomain',
  description:
    'Subdomain of Weather. With power over storm and sky, you can call down the wrath of the gods upon the world below.',
  domainSpells: [
    'obscuring mist', // level 1
    'fog cloud', // level 2
    'call lightning', // level 3
    'sleet storm', // level 4
    'call lightning storm', // level 5 (replaces ice storm)
    'sirocco', // level 6 (replaces control winds)
    'control weather', // level 7
    'whirlwind', // level 8
    'storm of vengeance', // level 9
  ],
  powers: [
    {
      name: 'Storm Burst (Sp)',
      description:
        'As a standard action, you can create a storm burst targeting any foe within 30 feet as a ranged touch attack. The storm burst deals 1d6 points of nonlethal damage + 1 point for every two cleric levels you possess. In addition, the target takes a –2 penalty on attack rolls for 1 round. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Gale Aura (Su)',
      description:
        'At 6th level, as a standard action, you can create a 30-foot aura of gale-like winds that slows the progress of enemies. Creatures in the aura cannot take a 5-foot step. Enemies in the aura treat each square that brings them closer to you as difficult terrain. They can move normally in any other direction. You can use this ability for a number of rounds per day equal to your cleric level. The rounds do not need to be consecutive.',
      levelGained: 6,
    },
  ],
  druidAllowed: true,
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Batch Array ----

export const batch_007: DomainEntry[] = [
  travelExplorationSubdomain,
  travelPortalSubdomain,
  travelTradeSubdomain,
  trickeryDomain,
  verminDomain,
  voidDomain,
  warDomain,
  waterDomain,
  weatherDomain,
  trickeryAmbushSubdomain,
  trickeryDeceptionSubdomain,
  trickeryEspionageSubdomain,
  trickeryGreedSubdomain,
  trickeryInnuendoSubdomain,
  trickeryThieverySubdomain,
  voidDarkTapestrySubdomain,
  voidIsolationSubdomain,
  voidStarsSubdomain,
  warBloodSubdomain,
  warDuelsSubdomain,
  warTacticsSubdomain,
  waterFlotsamSubdomain,
  waterFlowingSubdomain,
  waterIceSubdomain,
  waterOceansSubdomain,
  waterRiversSubdomain,
  weatherMonsoonSubdomain,
  weatherSeasonsSubdomain,
  weatherStormsSubdomain,
];
