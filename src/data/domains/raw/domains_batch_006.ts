// Batch 006 | first: 'Plant/Leshy Subdomain' | last: 'Sun/Thirst Subdomain' | count: 26
import { DomainDocument } from '@/types/classOptions';

// ---- Plant Subdomains (4) ----

export const plantLeshySubdomain: DomainDocument = {
  id: 'plant-leshy',
  name: 'Leshy Subdomain',
  description:
    'Subdomain of Plant. You have a strong connection to these little manifestations of nature spirits.',
  domainSpells: [
    'tree shape', // level 1 (replaces entangle)
    'barkskin', // level 2
    'plant growth', // level 3
    'command plants', // level 4
    'commune with nature', // level 5 (replaces wall of thorns)
    'repel wood', // level 6
    'animate plants', // level 7
    'control plants', // level 8
    'shambler', // level 9
  ],
  powers: [
    {
      name: 'Leshy Caller (Sp)',
      description:
        'You can spontaneously swap out any of your domain spells for a summon nature\'s ally spell of the same level or lower, to a maximum of summon nature\'s ally VII. When casting these spells you must summon leshys rather than other creatures. The following leshy types are added to the appropriate spell level summon lists: leaf leshy (summon nature\'s ally I), gourd leshy (summon nature\'s ally II), fungus leshy (summon nature\'s ally III), seaweed leshy (summon nature\'s ally IV), and lotus leshy (summon nature\'s ally V). You count as a plant creature for the purposes of creating leshys. As a standard action, you can grant a single leshy within 30 feet a +4 sacred bonus on its next attack roll before the start of your next turn. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const plantDecaySubdomain: DomainDocument = {
  id: 'plant-decay',
  name: 'Decay Subdomain',
  description:
    'Subdomain of Plant. You channel the entropic power of rot and decomposition.',
  domainSpells: [
    'entangle', // level 1
    'barkskin', // level 2
    'contagion', // level 3 (replaces plant growth)
    'poison', // level 4 (replaces command plants)
    'wall of thorns', // level 5
    'harm', // level 6 (replaces repel wood)
    'animate plants', // level 7
    'control plants', // level 8
    'shambler', // level 9
  ],
  powers: [
    {
      name: 'Wooden Fist (Su)',
      description:
        'Your hands can become as hard as wood, covered in tiny thorns. As a free action, your unarmed strikes can deal lethal piercing damage. Normal unarmed strikes made with this ability do not provoke attacks of opportunity. You gain a bonus on damage rolls equal to 1/2 your cleric level (minimum +1). You can use this ability for a number of rounds per day equal to 3 + your Wisdom modifier. These rounds do not need to be consecutive.',
      levelGained: 1,
    },
    {
      name: 'Aura of Decay (Su)',
      description:
        'At 8th level, you can emit a 30-foot aura of decay as a standard action. Living creatures in this aura (except you) take 1d6 points of damage per round as their flesh rots. They also take a cumulative –1 penalty to Strength each round they remain in the aura. This ability lasts for a number of rounds per day equal to your cleric level. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const plantGrowthSubdomain: DomainDocument = {
  id: 'plant-growth',
  name: 'Growth Subdomain',
  description:
    'Subdomain of Plant. You draw on the power of natural growth and expansion.',
  domainSpells: [
    'enlarge person', // level 1 (replaces entangle)
    'barkskin', // level 2
    'plant growth', // level 3
    'command plants', // level 4
    'plant shape I', // level 5 (replaces wall of thorns)
    'repel wood', // level 6
    'animate plants', // level 7
    'control plants', // level 8
    'shambler', // level 9
  ],
  powers: [
    {
      name: 'Enlarge (Su)',
      description:
        'As a swift action you can enlarge yourself for 1 round, as if you were the target of the enlarge person spell. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Bramble Armor (Su)',
      description:
        'At 6th level, a host of wooden thorns burst from your skin as a free action. Any creature striking you with a melee weapon or natural attack takes 1d6 points of piercing damage + 1 point per two cleric levels you possess. You can use this ability for a number of rounds per day equal to your cleric level. These rounds do not need to be consecutive.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const plantThornsSubdomain: DomainDocument = {
  id: 'plant-thorns',
  name: 'Thorns Subdomain',
  description:
    'Subdomain of Plant. You wield the piercing, defensive power of thorns and briars.',
  domainSpells: [
    'thorn javelin', // level 1 (replaces entangle)
    'barkskin', // level 2
    'thorny entanglement', // level 3 (replaces plant growth)
    'thorn body', // level 4 (replaces command plants)
    'wall of thorns', // level 5
    'repel wood', // level 6
    'animate plants', // level 7
    'control plants', // level 8
    'shambler', // level 9
  ],
  powers: [
    {
      name: 'Cruel Thicket (Su)',
      description:
        'As a standard action, you can cause the ground in a 5-foot-radius burst centered on you to sprout twisting, thorny vines. Any creature moving through this area must travel at half speed or take bleed damage equal to half your cleric level. If you activate this ability in an area with numerous plants, the area also becomes difficult terrain. These effects last for 1 minute, after which the vines crumble to dust. Creatures able to move through natural undergrowth unhindered ignore this ability\'s effects. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Bramble Armor (Su)',
      description:
        'At 6th level, a host of wooden thorns burst from your skin as a free action. Any creature striking you with a melee weapon or natural attack takes 1d6 points of piercing damage + 1 point per two cleric levels you possess. You can use this ability for a number of rounds per day equal to your cleric level. These rounds do not need to be consecutive.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Protection Subdomains (4) ----

export const protectionDefenseSubdomain: DomainDocument = {
  id: 'protection-defense',
  name: 'Defense Subdomain',
  description:
    'Subdomain of Protection. Your faith grants you and your allies enhanced defensive capabilities.',
  domainSpells: [
    'shield', // level 1 (replaces sanctuary)
    'barkskin', // level 2 (replaces shield other)
    'protection from energy', // level 3
    'spell immunity', // level 4
    'spell resistance', // level 5
    'antimagic field', // level 6
    'deflection', // level 7 (replaces repulsion)
    'mind blank', // level 8
    'prismatic sphere', // level 9
  ],
  powers: [
    {
      name: 'Deflection Aura (Su)',
      description:
        'Once each day, you can emit a 20-foot aura for a number of rounds equal to your cleric level. Allies within the aura gain a +2 deflection bonus to AC and combat maneuver defense.',
      levelGained: 1,
    },
    {
      name: 'Aura of Protection (Su)',
      description:
        'At 8th level, you can emit a 30-foot aura of protection for a number of rounds per day equal to your cleric level. You and your allies within this aura gain a +1 deflection bonus to AC and resistance 5 against all elements (acid, cold, electricity, fire, and sonic). The deflection bonus increases by +1 for every four cleric levels you possess beyond 8th. At 14th level, the resistance against all elements increases to 10.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const protectionFortificationsSubdomain: DomainDocument = {
  id: 'protection-fortifications',
  name: 'Fortifications Subdomain',
  description:
    'Subdomain of Protection. You call upon the power of sturdy walls and barriers to shield your allies.',
  domainSpells: [
    'hold portal', // level 1 (replaces sanctuary)
    'shield other', // level 2
    'protection from energy', // level 3
    'spell immunity', // level 4
    'wall of stone', // level 5 (replaces spell resistance)
    'antimagic field', // level 6
    'repulsion', // level 7
    'mind blank', // level 8
    'prismatic wall', // level 9 (replaces prismatic sphere)
  ],
  powers: [
    {
      name: 'Sheltering Walls (Sp)',
      description:
        'As a standard action, you can touch an ally to conjure a floating stone blockade that grants the ally the benefits of partial cover for 1 round plus 1 round for every 6 cleric levels you possess. This cover does not allow the ally to make Stealth checks or avoid attacks of opportunity. If the ally already has some form of cover, the bonuses to AC and on Reflex saves increase by 1. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Aura of Protection (Su)',
      description:
        'At 8th level, you can emit a 30-foot aura of protection for a number of rounds per day equal to your cleric level. You and your allies within this aura gain a +1 deflection bonus to AC and resistance 5 against all elements (acid, cold, electricity, fire, and sonic). The deflection bonus increases by +1 for every four cleric levels you possess beyond 8th. At 14th level, the resistance against all elements increases to 10.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const protectionPuritySubdomain: DomainDocument = {
  id: 'protection-purity',
  name: 'Purity Subdomain',
  description:
    'Subdomain of Protection. You channel the cleansing power of your faith to purify body and soul.',
  domainSpells: [
    'protection from chaos/evil/good/law', // level 1 (replaces sanctuary)
    'shield other', // level 2
    'remove blindness/deafness', // level 3 (replaces protection from energy)
    'spell immunity', // level 4
    'atonement', // level 5 (replaces spell resistance)
    'antimagic field', // level 6
    'repulsion', // level 7
    'mind blank', // level 8
    'prismatic sphere', // level 9
  ],
  powers: [
    {
      name: 'Resistant Touch (Sp)',
      description:
        'As a standard action, you can touch an ally to grant him your resistance bonus for 1 minute. When you use this ability, you lose your resistance bonus granted by the Protection domain for 1 minute. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Purifying Touch (Su)',
      description:
        'At 8th level, you can touch a willing creature as a standard action, granting it a saving throw against each effect currently affecting it that was caused by a spell or effect with a saving throw, using the original saving throw DC of the effect. Each successful saving throw ends the related effect. The creature can choose to not attempt a saving throw against any one effect. You can use this ability once per day at 8th level, and one additional time per day for every 6 levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const protectionSolitudeSubdomain: DomainDocument = {
  id: 'protection-solitude',
  name: 'Solitude Subdomain',
  description:
    'Subdomain of Protection. You enforce the sanctity of isolation, making yourself untouchable to those who would violate your sacred space.',
  domainSpells: [
    'sanctuary', // level 1
    'silence', // level 2 (replaces shield other)
    'protection from energy', // level 3
    'detect scrying', // level 4 (replaces spell immunity)
    'mirage arcana', // level 5 (replaces spell resistance)
    'antimagic field', // level 6
    'repulsion', // level 7
    'mind blank', // level 8
    'create demiplane (greater)', // level 9 (replaces prismatic sphere)
  ],
  powers: [
    {
      name: 'Taboo (Su)',
      description:
        'When a creature touches you or hits you with a melee attack, you can use this ability as an immediate action. That creature takes a –1 penalty on saving throws for 1 minute. This penalty increases by 1 for every 5 levels you possess. When you use this ability, you lose your resistance bonus granted by the Protection domain for 1 minute. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Aura of Protection (Su)',
      description:
        'At 8th level, you can emit a 30-foot aura of protection for a number of rounds per day equal to your cleric level. You and your allies within this aura gain a +1 deflection bonus to AC and resistance 5 against all elements (acid, cold, electricity, fire, and sonic). The deflection bonus increases by +1 for every four cleric levels you possess beyond 8th. At 14th level, the resistance against all elements increases to 10.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Repose Subdomains (3) ----

export const reposeAncestorsSubdomain: DomainDocument = {
  id: 'repose-ancestors',
  name: 'Ancestors Subdomain',
  description:
    'Subdomain of Repose. You call upon the wisdom and presence of those who have passed beyond the veil.',
  domainSpells: [
    'deathwatch', // level 1
    'gentle repose', // level 2
    'speak with dead', // level 3
    'rest eternal', // level 4 (replaces death ward)
    'slay living', // level 5
    'geas/quest', // level 6 (replaces undeath to death)
    'destruction', // level 7
    'waves of exhaustion', // level 8
    'wail of the banshee', // level 9
  ],
  powers: [
    {
      name: 'Gentle Rest (Sp)',
      description:
        'Your touch can fill a creature with lethargy. As a melee touch attack, you can cause a living creature to become staggered for 1 round as a melee touch attack. If you touch a staggered living creature, that creature falls asleep for 1 round instead. Undead creatures touched are staggered for a number of rounds equal to your Wisdom modifier. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Speak with Dead (Sp)',
      description:
        'At 8th level, as a standard action, you can ask one question of a dead creature as if using speak with dead. The dead creature you are questioning does not gain a Will saving throw if your alignments are different. You can use this ability a number of times per day equal to your cleric level.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const reposePsychopompSubdomain: DomainDocument = {
  id: 'repose-psychopomp',
  name: 'Psychopomp Subdomain',
  description:
    'Subdomain of Repose. Psychopomps are a race of neutral outsiders whose duty it is to escort the souls of the recently deceased to their final resting places.',
  domainSpells: [
    'deathwatch', // level 1
    'gentle repose', // level 2
    'chain of perdition', // level 3 (replaces speak with dead)
    'death ward', // level 4
    'slay living', // level 5
    'planar ally (psychopomps only)', // level 6 (replaces undeath to death)
    'destruction', // level 7
    'trap the soul', // level 8 (replaces waves of exhaustion)
    'wail of the banshee', // level 9
  ],
  powers: [
    {
      name: 'Gentle Rest (Sp)',
      description:
        'Your touch can fill a creature with lethargy. As a melee touch attack, you can cause a living creature to become staggered for 1 round as a melee touch attack. If you touch a staggered living creature, that creature falls asleep for 1 round instead. Undead creatures touched are staggered for a number of rounds equal to your Wisdom modifier. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Spirit Touch (Su)',
      description:
        'At 6th level, as a swift action, you can give your natural weapons or any weapons you wield the ghost touch weapon special ability. You can use this power a number of rounds per day equal to your cleric level. These rounds need not be consecutive.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const reposeSoulsSubdomain: DomainDocument = {
  id: 'repose-souls',
  name: 'Souls Subdomain',
  description:
    'Subdomain of Repose. You commune with the souls of the departed and can empower weapons to affect even those who have shed their mortal coil.',
  domainSpells: [
    'deathwatch', // level 1
    'gentle repose', // level 2
    'animate dead', // level 3 (replaces speak with dead)
    'death ward', // level 4
    'slay living', // level 5
    'antilife shell', // level 6 (replaces undeath to death)
    'destruction', // level 7
    'waves of exhaustion', // level 8
    'trap the soul', // level 9 (replaces wail of the banshee)
  ],
  powers: [
    {
      name: 'Touch the Spirit World (Su)',
      description:
        'With a touch, you can empower a weapon to affect incorporeal creatures. The weapon touched deals half damage to incorporeal creatures, or full damage if it is a magic weapon. This benefit lasts for a number of rounds equal to your cleric level. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Ward Against Death (Su)',
      description:
        'At 8th level, you can emit a 30-foot aura that wards against death for a number of rounds per day equal to your cleric level. Living creatures in this aura (including you) are immune to death effects, energy drain, and effects that cause negative levels. If a creature in the aura has temporary negative levels, these become dormant while in the aura. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Rune Subdomains (3) ----

export const runeLanguageSubdomain: DomainDocument = {
  id: 'rune-language',
  name: 'Language Subdomain',
  description:
    'Subdomain of Rune. You find power not just in the written rune, but in the living languages of all creatures.',
  domainSpells: [
    'comprehend languages', // level 1 (replaces erase)
    'share language', // level 2 (replaces secret page)
    'tongues', // level 3 (replaces glyph of warding)
    'explosive runes', // level 4
    'telepathic bond', // level 5 (replaces lesser planar binding)
    'glyph of warding (greater)', // level 6
    'instant summons', // level 7
    'symbol of death', // level 8
    'teleportation circle', // level 9
  ],
  powers: [
    {
      name: 'Blast Rune (Sp)',
      description:
        'As a standard action, you can create a blast rune in any adjacent square. Any creature entering this square takes 1d6 points of acid, cold, electricity, or fire damage (your choice when you create the rune) + 1 point for every two cleric levels you possess. This rune deals damage to the first creature that enters the square, then disappears. A rune lasts for a number of rounds equal to your cleric level or until discharged. You can use this ability a number of times per day equal to 3 + your Wisdom modifier. This rune can be detected with a DC 26 Perception skill check and disarmed with a DC 26 Disable Device skill check.',
      levelGained: 1,
    },
    {
      name: 'Rune Shift (Su)',
      description:
        'At 6th level, as a swift action, you can change the location of one of your blast runes. The rune must be within 30 feet. You can place the blast rune in any square adjacent to you, including one occupied by another creature.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const runeLegislationSubdomain: DomainDocument = {
  id: 'rune-legislation',
  name: 'Legislation Subdomain',
  description:
    'Subdomain of Rune. You inscribe the laws of your deity into the world, enforcing them through divine power.',
  domainSpells: [
    'forbid action', // level 1 (replaces erase)
    'secret page', // level 2
    'glyph of warding', // level 3
    'explosive runes', // level 4
    'forbid action (greater)', // level 5 (replaces lesser planar binding)
    'glyph of warding (greater)', // level 6
    'instant summons', // level 7
    'symbol of death', // level 8
    'mass hold monster', // level 9 (replaces teleportation circle)
  ],
  powers: [
    {
      name: 'Prohibition (Su)',
      description:
        'As a standard action, you can command a creature within 30 feet to refrain from committing a particular action. If the creature performs the named action before the beginning of your next turn, it takes 1d6 points of damage + 1 point for every 2 cleric levels you possess. You can use this ability a number of times per day equal to 3 + your Wisdom modifier. When you also have the spell rune power, you may attach a domain spell of at least 1 level lower than the highest level cleric spell you can cast to your prohibition; this extends its duration by a number of rounds equal to the attached spell\'s level, and the spell affects the creature if it violates the prohibition.',
      levelGained: 1,
    },
    {
      name: 'Spell Rune (Sp)',
      description:
        'At 8th level, you can attach one of your domain spells to a blast rune. To do so, you must expend one use of the blast rune ability and one prepared domain spell. The spell must be lower than your highest level cleric spell and must target one or more creatures. The attached spell is cast on the creature that triggers the blast rune, though it only affects that creature even if it would normally affect more than one. You can use this ability once per day at 8th level, and an additional time per day for every 4 levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const runeWardsSubdomain: DomainDocument = {
  id: 'rune-wards',
  name: 'Wards Subdomain',
  description:
    'Subdomain of Rune. You specialize in protective runes that punish those who transgress against you.',
  domainSpells: [
    'arcane lock', // level 1 (replaces erase)
    'secret page', // level 2
    'glyph of warding', // level 3
    'dimensional anchor', // level 4 (replaces explosive runes)
    'planar binding (lesser)', // level 5
    'guards and wards', // level 6 (replaces glyph of warding greater)
    'instant summons', // level 7
    'symbol of death', // level 8
    'teleportation circle', // level 9
  ],
  powers: [
    {
      name: 'Blast Rune (Sp)',
      description:
        'As a standard action, you can create a blast rune in any adjacent square. Any creature entering this square takes 1d6 points of acid, cold, electricity, or fire damage (your choice when you create the rune) + 1 point for every two cleric levels you possess. This rune deals damage to the first creature that enters the square, then disappears. A rune lasts for a number of rounds equal to your cleric level or until discharged. You can use this ability a number of times per day equal to 3 + your Wisdom modifier. This rune can be detected with a DC 26 Perception skill check and disarmed with a DC 26 Disable Device skill check.',
      levelGained: 1,
    },
    {
      name: 'Warding Rune (Su)',
      description:
        'At 6th level, when a creature is damaged by your blast rune, it cannot attack you for a number of rounds equal to 1/2 your cleric level unless it succeeds at a Will save, as per the spell sanctuary. Using this ability is an immediate action when a creature triggers one of your blast runes. The ability does not prevent you from being attacked or affected by area of effect spells or abilities. You can use this ability once per day at 8th level, plus one additional time per day at 14th level and 20th level.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Scalykind Subdomains (3) ----

export const scalykindDragonSubdomain: DomainDocument = {
  id: 'scalykind-dragon',
  name: 'Dragon Subdomain',
  description:
    'Subdomain of Scalykind. You have an innate connection to dragons and their kin.',
  domainSpells: [
    'magic fang', // level 1
    'animal trance', // level 2
    'draconic reservoir', // level 3 (replaces greater magic fang)
    'dragon\'s breath', // level 4 (replaces poison)
    'animal growth', // level 5
    'form of the dragon I', // level 6 (replaces eyebite)
    'creeping doom', // level 7
    'animal shapes', // level 8
    'shapechange', // level 9
  ],
  powers: [
    {
      name: 'Venomous Stare (Sp)',
      description:
        'You are a true lord of reptiles, able to induce pain, panic, and confusion with a mere glance. As a standard action, you can activate a gaze attack with a 30-foot range targeting one creature. The target must make a Will save (DC 10 + 1/2 your cleric level + your Wisdom modifier). Those who fail take 1d6 points of nonlethal damage + 1 point per two cleric levels you possess and become fascinated until the beginning of your next turn. This is a mind-affecting effect. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Dragonbreath (Su)',
      description:
        'At 4th level, you gain the ability to use a breath weapon as a standard action once per day. When you gain this ability, you must choose acid, cold, electricity, or fire; this choice is permanent. The breath weapon fills a 15-foot cone, and deals 3d6 points of damage—this damage increases by 1d6 points at every even-numbered cleric level beyond 4th. Creatures in the area can make a Reflex save (DC 10 + 1/2 your cleric level + your Wisdom modifier) for half damage. At 9th level you can use this ability twice per day, and at 14th level you can use it three times per day.',
      levelGained: 4,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const scalykindSaurianSubdomain: DomainDocument = {
  id: 'scalykind-saurian',
  name: 'Saurian Subdomain',
  description:
    'Subdomain of Scalykind. Few creatures demand your respect and awe like the mighty dinosaur.',
  domainSpells: [
    'magic fang', // level 1
    'animal trance', // level 2
    'magic fang (greater)', // level 3
    "summon nature's ally IV (deinonychus or pteranodon only)", // level 4 (replaces poison)
    'beast shape III', // level 5 (replaces animal growth)
    'eyebite', // level 6
    "summon nature's ally VII (brachiosaurus or tyrannosaurus only)", // level 7 (replaces creeping doom)
    'animal shapes', // level 8
    'shapechange', // level 9
  ],
  powers: [
    {
      name: 'Venomous Stare (Sp)',
      description:
        'You are a true lord of reptiles, able to induce pain, panic, and confusion with a mere glance. As a standard action, you can activate a gaze attack with a 30-foot range targeting one creature. The target must make a Will save (DC 10 + 1/2 your cleric level + your Wisdom modifier). Those who fail take 1d6 points of nonlethal damage + 1 point per two cleric levels you possess and become fascinated until the beginning of your next turn. This is a mind-affecting effect. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Dinosaur Companion (Ex)',
      description:
        'At 4th level, you gain the service of a loyal animal companion. Your effective druid level for this animal companion is equal to your cleric level – 2. You may only choose a dinosaur as your companion.',
      levelGained: 4,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const scalykindVenomSubdomain: DomainDocument = {
  id: 'scalykind-venom',
  name: 'Venom Subdomain',
  description:
    'Subdomain of Scalykind. Poison may not course through your veins, but it\'s ever on your mind and plays a vital part in your faith and your daily worship.',
  domainSpells: [
    'magic fang', // level 1
    'pernicious poison', // level 2 (replaces animal trance)
    'magic fang (greater)', // level 3
    'poison', // level 4
    'animal growth', // level 5
    'cloudkill', // level 6 (replaces eyebite)
    'creeping doom', // level 7
    'animal shapes', // level 8
    'shapechange', // level 9
  ],
  powers: [
    {
      name: 'Venomous Saliva (Su)',
      description:
        'As a swift action, you can spit venom onto a weapon you are wielding. The venom stays potent for 1 minute or until the weapon successfully injures a foe, whichever comes first. The venom functions as an injury poison with the following statistics: Venomous Saliva—injury; save Fortitude DC 10 + 1/2 your cleric level + your Wisdom modifier; frequency 1/round for 3 rounds; effect 1 Con damage; cure 1 save. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Serpent Companion (Ex)',
      description:
        'At 4th level, you gain the service of an animal companion. Your effective druid level for this animal companion is equal to your cleric level – 2. You may choose either a viper or a constrictor snake as your companion.',
      levelGained: 4,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Strength Subdomains (5) ----

export const strengthCompetitionSubdomain: DomainDocument = {
  id: 'strength-competition',
  name: 'Competition Subdomain',
  description:
    'Subdomain of Strength. You honor your deity through athletic excellence and the pursuit of victory.',
  domainSpells: [
    'jump', // level 1 (replaces enlarge person)
    "bull's strength", // level 2
    'greater animal aspect', // level 3 (replaces magic vestment)
    'spell immunity', // level 4
    'righteous might', // level 5
    'greater heroism', // level 6 (replaces stoneskin)
    'grasping hand', // level 7
    'clenched fist', // level 8
    'crushing hand', // level 9
  ],
  powers: [
    {
      name: 'Athletic Exploit (Su)',
      description:
        'As a swift action, you gain the ability to overcome physical obstacles with ease. Until the beginning of your next turn, you halve your armor check penalty when attempting Acrobatics, Climb, Escape Artist, and Swim skill checks, and you gain a bonus equal to 1/2 your cleric level (minimum +1) on such skill checks. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Might of the Gods (Su)',
      description:
        'At 8th level, you can add your cleric level as an enhancement bonus to your Strength score for a number of rounds per day equal to your cleric level. This bonus only applies on Strength checks and Strength-based skill checks. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const strengthFerocitySubdomain: DomainDocument = {
  id: 'strength-ferocity',
  name: 'Ferocity Subdomain',
  description:
    'Subdomain of Strength. You channel the raw, unrestrained fury of battle, striking down your foes with savage power.',
  domainSpells: [
    'enlarge person', // level 1
    "bull's strength", // level 2
    'rage', // level 3 (replaces magic vestment)
    'spell immunity', // level 4
    'righteous might', // level 5
    "bull's strength (mass)", // level 6 (replaces stoneskin)
    'grasping hand', // level 7
    'clenched fist', // level 8
    'crushing hand', // level 9
  ],
  powers: [
    {
      name: 'Ferocious Strike (Su)',
      description:
        'Whenever you make a melee attack, you can designate that attack as a ferocious strike. If the attack hits, it deals additional damage equal to 1/2 your cleric level (minimum +1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Might of the Gods (Su)',
      description:
        'At 8th level, you can add your cleric level as an enhancement bonus to your Strength score for a number of rounds per day equal to your cleric level. This bonus only applies on Strength checks and Strength-based skill checks. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const strengthFistSubdomain: DomainDocument = {
  id: 'strength-fist',
  name: 'Fist Subdomain',
  description:
    'Subdomain of Strength. You honor your deity through the perfection of unarmed combat and the raw strength of your strikes.',
  domainSpells: [
    'true strike', // level 1 (replaces enlarge person)
    "bull's strength", // level 2
    'magic fang (greater)', // level 3 (replaces magic vestment)
    'force punch', // level 4 (replaces spell immunity)
    'righteous might', // level 5
    'stoneskin', // level 6
    'grasping hand', // level 7
    'clenched fist', // level 8
    'crushing hand', // level 9
  ],
  powers: [
    {
      name: 'Wooden Fist (Su)',
      description:
        'Your hands can become as hard as wood, covered in tiny thorns. As a free action, your unarmed strikes can deal lethal piercing damage. Normal unarmed strikes made with this ability do not provoke attacks of opportunity. You gain a bonus on damage rolls equal to 1/2 your cleric level (minimum +1). You can use this ability for a number of rounds per day equal to 3 + your Wisdom modifier. These rounds do not need to be consecutive.',
      levelGained: 1,
    },
    {
      name: 'Might of the Gods (Su)',
      description:
        'At 8th level, you can add your cleric level as an enhancement bonus to your Strength score for a number of rounds per day equal to your cleric level. This bonus only applies on Strength checks and Strength-based skill checks. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const strengthResolveSubdomain: DomainDocument = {
  id: 'strength-resolve',
  name: 'Resolve Subdomain',
  description:
    'Subdomain of Strength. You draw on an inner reserve of fortitude to inspire and sustain your allies.',
  domainSpells: [
    'bless', // level 1 (replaces enlarge person)
    "bull's strength", // level 2
    'magic vestment', // level 3
    'spell immunity', // level 4
    'righteous might', // level 5
    "heroes' feast", // level 6 (replaces stoneskin)
    'grasping hand', // level 7
    'clenched fist', // level 8
    'crushing hand', // level 9
  ],
  powers: [
    {
      name: 'Strength Surge (Sp)',
      description:
        'As a standard action, you can touch a creature to give it great strength. For 1 round, the target gains an enhancement bonus equal to 1/2 your cleric level (minimum +1) to melee attacks, combat maneuver checks that rely on Strength, Strength-based skills, and Strength checks. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Bestow Resolve (Su)',
      description:
        'At 8th level, you can bless creatures with the boldness of your deity. You can bestow a number of temporary hit points equal to your level + your Wisdom modifier to all allies within 20 feet. The temporary hit points remain for 1 minute. You can use this ability once per day at 8th level, plus one additional time per day for every 4 levels you possess beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const strengthSelfRealizationSubdomain: DomainDocument = {
  id: 'strength-self-realization',
  name: 'Self-Realization Subdomain',
  description:
    'Subdomain of Strength. You maintain a powerful conviction in your own identity and resist all attempts to alter your form or undermine your sense of self.',
  domainSpells: [
    'enlarge person', // level 1
    "bull's strength", // level 2
    'magic vestment', // level 3
    'paragon surge (always matches your actual race)', // level 4 (replaces spell immunity)
    'righteous might', // level 5
    'primal scream', // level 6 (replaces stoneskin)
    'transformation', // level 7 (replaces grasping hand)
    'clenched fist', // level 8
    'crushing hand', // level 9
  ],
  powers: [
    {
      name: 'Perfected Form (Su)',
      description:
        'You maintain an unshakable conviction about your own physical identity. You gain a +1 sacred bonus (if your patron is good or neutral) or profane bonus (if your patron is evil) on saving throws against polymorph, petrification, and transmutation effects. This bonus increases by +1 for every 5 cleric levels you have (maximum +5). Once per day, when you succeed at a saving throw against such an effect, you can trigger your self-confidence as an immediate action, gaining a number of temporary hit points equal to your cleric level and a +2 morale bonus on attack rolls, skill checks, and saving throws; both effects last for 1 minute.',
      levelGained: 1,
    },
    {
      name: 'Might of the Gods (Su)',
      description:
        'At 8th level, you can add your cleric level as an enhancement bonus to your Strength score for a number of rounds per day equal to your cleric level. This bonus only applies on Strength checks and Strength-based skill checks. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Sun Subdomains (4) ----

export const sunDaySubdomain: DomainDocument = {
  id: 'sun-day',
  name: 'Day Subdomain',
  description:
    'Subdomain of Sun. You embody the restorative power of each new day, bringing renewal and healing to those in your care.',
  domainSpells: [
    'endure elements', // level 1
    'continual flame', // level 2 (replaces heat metal)
    'daylight', // level 3 (replaces searing light)
    'fire shield', // level 4
    'flame strike', // level 5
    'fire seeds', // level 6
    'sunbeam', // level 7
    'sunburst', // level 8
    'prismatic sphere', // level 9
  ],
  powers: [
    {
      name: "Sun's Blessing (Su)",
      description:
        'Whenever you channel positive energy to harm undead creatures, add your cleric level to the damage dealt. Undead do not add their channel resistance to their saves when you channel positive energy.',
      levelGained: 1,
    },
    {
      name: "Day's Resurgence (Su)",
      description:
        'At 8th level, you can restore a single creature as if it had just completed 8 hours of rest. It takes 10 minutes to use this power. If the use of this power is disrupted, it must be restarted, but it is not lost. At the end of the 10 minutes, a single willing creature that you have touched regains hit points as if it had rested for the night and may make new saving throws against effects that require a save once per day. The target does not suffer any negative effects if such saving throws are failed, but success counts toward removing the affliction (if possible). This ability does not allow a target to prepare spells an additional time per day. You can use this ability once per day at 8th level, plus one additional time per day for every 2 levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const sunLightSubdomain: DomainDocument = {
  id: 'sun-light',
  name: 'Light Subdomain',
  description:
    'Subdomain of Sun. You wield the blinding brilliance of pure light, using it to blind and dazzle your enemies.',
  domainSpells: [
    'faerie fire', // level 1 (replaces endure elements)
    'heat metal', // level 2
    'daylight', // level 3 (replaces searing light)
    'fire shield', // level 4
    'flame strike', // level 5
    'fire seeds', // level 6
    'sunbeam', // level 7
    'sunburst', // level 8
    'prismatic sphere', // level 9
  ],
  powers: [
    {
      name: 'Blinding Flash (Su)',
      description:
        'As a standard action, you can emit a flash of light from your holy symbol or divine focus. The most powerful light emanates out 20 feet from you. Creatures with fewer Hit Dice than your cleric level within this area are blinded for 1d4 rounds (Fortitude negates). All creatures in the area are dazzled for a number of rounds equal to 1/2 your cleric level (minimum 1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Nimbus of Light (Su)',
      description:
        'At 8th level, you can emit a 30-foot nimbus of light for a number of rounds per day equal to your cleric level. This acts as a daylight spell. In addition, undead within this radius take an amount of damage equal to your cleric level each round that they remain inside the nimbus. Spells with the darkness descriptor are automatically dispelled if brought into contact with this nimbus. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const sunRevelationSubdomain: DomainDocument = {
  id: 'sun-revelation',
  name: 'Revelation Subdomain',
  description:
    'Subdomain of Sun. You see through illusions, deceptions, and hidden truths, and your divine sight is empowered to pierce all concealments.',
  domainSpells: [
    'detect secret doors', // level 1 (replaces endure elements)
    'see invisibility', // level 2 (replaces heat metal)
    'banish seeming', // level 3 (replaces searing light)
    'fire shield', // level 4
    'true seeing', // level 5 (replaces flame strike)
    'fire seeds', // level 6
    'sunbeam', // level 7
    'sunburst', // level 8
    'prismatic sphere', // level 9
  ],
  powers: [
    {
      name: 'Guided Eyes (Su)',
      description:
        'Perception is always a class skill for you. In addition, whenever you make a skill check to see through a disguise or find something that is hidden or concealed, you gain a +4 sacred bonus on the check.',
      levelGained: 1,
    },
    {
      name: 'Nimbus of Light (Su)',
      description:
        'At 8th level, you can emit a 30-foot nimbus of light for a number of rounds per day equal to your cleric level. This acts as a daylight spell. In addition, undead within this radius take an amount of damage equal to your cleric level each round that they remain inside the nimbus. Spells with the darkness descriptor are automatically dispelled if brought into contact with this nimbus. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  grantedClassSkills: ['Perception'],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const sunThirstSubdomain: DomainDocument = {
  id: 'sun-thirst',
  name: 'Thirst Subdomain',
  description:
    'Subdomain of Sun. You channel the merciless, desiccating power of the blazing sun to sap the vitality of the living.',
  domainSpells: [
    'endure elements', // level 1
    'heat metal', // level 2
    'cup of dust', // level 3 (replaces searing light)
    'fire shield', // level 4
    'flame strike', // level 5
    'fire seeds', // level 6
    'sunbeam', // level 7
    'sunburst', // level 8
    'horrid wilting', // level 9 (replaces prismatic sphere)
  ],
  powers: [
    {
      name: 'Wilting Glare (Su)',
      description:
        'As a standard action, you can leach moisture and vitality from a living, corporeal creature you can see within 30 feet. The target takes an amount of nonlethal damage equal to 1d6 + 1 for every 2 cleric levels you have and becomes fatigued until the beginning of your next turn (Fort negates). Plant creatures and those with the aquatic or water subtype take lethal damage from this ability, and they are fatigued for a number of rounds equal to your Wisdom modifier. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Withering Nimbus (Su)',
      description:
        'At 8th level, this ability functions as the nimbus of light domain ability, but it damages plants and creatures with the aquatic or water subtype rather than undead. Creatures with the aquatic or water subtype take damage equal to your cleric level each round they remain inside the nimbus. Spells with the darkness descriptor are automatically dispelled if brought into contact with this nimbus. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Batch Array ----

export const batch_006: DomainDocument[] = [
  plantLeshySubdomain,
  plantDecaySubdomain,
  plantGrowthSubdomain,
  plantThornsSubdomain,
  protectionDefenseSubdomain,
  protectionFortificationsSubdomain,
  protectionPuritySubdomain,
  protectionSolitudeSubdomain,
  reposeAncestorsSubdomain,
  reposePsychopompSubdomain,
  reposeSoulsSubdomain,
  runeLanguageSubdomain,
  runeLegislationSubdomain,
  runeWardsSubdomain,
  scalykindDragonSubdomain,
  scalykindSaurianSubdomain,
  scalykindVenomSubdomain,
  strengthCompetitionSubdomain,
  strengthFerocitySubdomain,
  strengthFistSubdomain,
  strengthResolveSubdomain,
  strengthSelfRealizationSubdomain,
  sunDaySubdomain,
  sunLightSubdomain,
  sunRevelationSubdomain,
  sunThirstSubdomain,
];
