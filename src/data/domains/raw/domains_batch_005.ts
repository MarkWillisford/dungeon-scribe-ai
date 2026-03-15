// Batch 005 | first: 'Liberation/Freedom Subdomain' | last: 'Nobility/Martyr Subdomain' | count: 26
import { DomainDocument } from '@/types/classOptions';

// ---- Liberation Subdomains (3) ----

export const liberationFreedomSubdomain: DomainDocument = {
  id: 'liberation-freedom',
  name: 'Freedom Subdomain',
  description:
    'Subdomain of Liberation. You champion absolute freedom, granting allies the power to shake off magical constraints through force of will.',
  domainSpells: [
    'sanctuary', // level 1 (replaces remove fear)
    'remove paralysis', // level 2
    'remove curse', // level 3
    'freedom of movement', // level 4
    'plane shift', // level 5 (replaces break enchantment)
    'dispel magic (greater)', // level 6
    'refuge', // level 7
    'mind blank', // level 8
    'freedom', // level 9
  ],
  powers: [
    {
      name: 'Liberty\'s Blessing (Sp)',
      description:
        'You touch a willing creature as a standard action, granting it a boon. A creature with this boon can, as a swift action, make a saving throw against a single spell or effect it is suffering from that grants a save. The DC of the saving throw is equal to the original DC of the spell or effect. If the saving throw is successful, the effect ends. This boon lasts for 1 minute or until successfully used to remove a spell or effect, whichever duration is shorter. You can use this ability a number of times equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Freedom\'s Call (Su)',
      description:
        'At 8th level, you can emit a 30-foot aura of freedom for a number of rounds per day equal to your cleric level. Allies within this aura are not affected by the confused, grappled, frightened, panicked, paralyzed, pinned, or shaken conditions.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const liberationRevolutionSubdomain: DomainDocument = {
  id: 'liberation-revolution',
  name: 'Revolution Subdomain',
  description:
    'Subdomain of Liberation. You use persuasion and oratory to topple unjust authority and inspire others to throw off their oppressors.',
  domainSpells: [
    'remove fear', // level 1
    'enthrall', // level 2 (replaces remove paralysis)
    'remove curse', // level 3
    'freedom of movement', // level 4
    'break enchantment', // level 5
    'symbol of persuasion', // level 6 (replaces dispel magic greater)
    'refuge', // level 7
    'mind blank', // level 8
    'freedom', // level 9
  ],
  powers: [
    {
      name: 'Liberation (Su)',
      description:
        'For a number of rounds per day equal to your cleric level, you can move normally regardless of magical effects that impede movement, as if you were affected by freedom of movement.',
      levelGained: 1,
    },
    {
      name: 'Powerful Persuader (Su)',
      description:
        'At 8th level, when you make a Diplomacy or Intimidate check, you can roll twice and take the higher result. Using this ability is a free action. You can use this ability once per day at 8th level, plus one additional time per day for every 2 levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const liberationSelfRealizationSubdomain: DomainDocument = {
  id: 'liberation-self-realization',
  name: 'Self-Realization Subdomain',
  description:
    'Subdomain of Liberation. You maintain an unshakable sense of self, resisting forces that would alter your form or compel you to act against your nature.',
  domainSpells: [
    'remove fear', // level 1
    'remove paralysis', // level 2
    'remove curse', // level 3
    'paragon surge', // level 4 (replaces freedom of movement)
    'break enchantment', // level 5
    'primal scream', // level 6 (replaces dispel magic greater)
    'transformation', // level 7 (replaces refuge)
    'mind blank', // level 8
    'freedom', // level 9
  ],
  powers: [
    {
      name: 'Perfected Form (Su)',
      description:
        'You maintain an unshakable sense of who you are, and no force can compel you to be anything else. You gain a +1 sacred (if your patron is good or neutral) or profane (if your patron is evil) bonus on saving throws against polymorph, petrification, and transmutation effects. This bonus increases by 1 for every 5 cleric levels you have (maximum +5). Once per day when you succeed at a saving throw against such an effect, you can gain a surge of self-confidence as an immediate action that grants you a number of temporary hit points equal to your cleric level and a +2 morale bonus on attack rolls, skill checks, and saving throws; both effects last for 1 minute.',
      levelGained: 1,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Luck Subdomains (3) ----

export const luckCurseSubdomain: DomainDocument = {
  id: 'luck-curse',
  name: 'Curse Subdomain',
  description:
    'Subdomain of Luck. You wield the dark side of fortune, afflicting enemies with misfortune and ill fate rather than granting blessings.',
  domainSpells: [
    'bane', // level 1 (replaces true strike)
    'aid', // level 2
    'bestow curse', // level 3 (replaces protection from energy)
    'freedom of movement', // level 4
    'break enchantment', // level 5
    'eyebite', // level 6 (replaces mislead)
    'spell turning', // level 7
    'moment of prescience', // level 8
    'miracle', // level 9
  ],
  powers: [
    {
      name: 'Malign Eye (Su)',
      description:
        'As a standard action, you can afflict one target within 30 feet with your malign eye, causing it to take a –2 penalty on all saving throws against your spells. The effect lasts for 1 minute or until the target hits you with an attack. You can use this ability for a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Good Fortune (Ex)',
      description:
        'At 6th level, as an immediate action, you can reroll any one d20 roll you have just made before the results of the roll are revealed. You must take the result of the reroll, even if it\'s worse than the original roll. You can use this ability once per day at 6th level, and one additional time per day for every six cleric levels beyond 6th.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const luckFateSubdomain: DomainDocument = {
  id: 'luck-fate',
  name: 'Fate Subdomain',
  description:
    'Subdomain of Luck. You perceive and manipulate the strands of fate, forcing others to accept the results destiny has ordained for them.',
  domainSpells: [
    'true strike', // level 1
    'augury', // level 2 (replaces aid)
    'borrow fortune', // level 3 (replaces protection from energy)
    'freedom of movement', // level 4
    'break enchantment', // level 5
    'mislead', // level 6
    'spell turning', // level 7
    'moment of prescience', // level 8
    'miracle', // level 9
  ],
  powers: [
    {
      name: 'Bit of Luck (Sp)',
      description:
        'You can touch a willing creature as a standard action, giving it a bit of luck. For the next round, any time the target rolls a d20, he may roll twice and take the more favorable result. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Tugging Strands (Su)',
      description:
        'At 8th level, you can force a creature within line of sight to reroll any one roll that it has just made before the result of the roll is revealed. The result of the reroll must be taken, even if it is worse than the original roll. You can use this ability once per day at 8th level, and one additional time per day for every 6 levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const luckImaginationSubdomain: DomainDocument = {
  id: 'luck-imagination',
  name: 'Imagination Subdomain',
  description:
    'Subdomain of Luck. You harness the power of imagination and illusion, weaving daydreams that fascinate and distract your enemies.',
  domainSpells: [
    'silent image', // level 1 (replaces true strike)
    'minor image', // level 2 (replaces aid)
    'major image', // level 3 (replaces protection from energy)
    'freedom of movement', // level 4
    'dream', // level 5 (replaces break enchantment)
    'mislead', // level 6
    'spell turning', // level 7
    'moment of prescience', // level 8
    'miracle', // level 9
  ],
  powers: [
    {
      name: 'Bit of Luck (Sp)',
      description:
        'You can touch a willing creature as a standard action, giving it a bit of luck. For the next round, any time the target rolls a d20, he may roll twice and take the more favorable result. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Haze of Daydreams (Su)',
      description:
        'At 6th level, you can emit a 15-foot-radius haze of daydreams for a number of rounds per day equal to your cleric level. Creatures within the haze gain the fascinated condition unless they succeed at a Will save (DC = 10 + 1/2 your cleric level + your Wisdom modifier). You may designate a number of creatures equal to your cleric level that are unaffected by the haze. The fascinated condition ends when creatures leave the area or the aura expires.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Madness Subdomains (3) ----

export const madnessInsanitySubdomain: DomainDocument = {
  id: 'madness-insanity',
  name: 'Insanity Subdomain',
  description:
    'Subdomain of Madness. You channel the protective paradox of madness, shielding allies from mind-affecting effects even as you wield confusion as a weapon.',
  domainSpells: [
    'lesser confusion', // level 1
    'touch of idiocy', // level 2
    'rage', // level 3
    'moonstruck', // level 4 (replaces confusion)
    'nightmare', // level 5
    'phantasmal web', // level 6 (replaces phantasmal killer)
    'insanity', // level 7
    'scintillating pattern', // level 8
    'weird', // level 9
  ],
  powers: [
    {
      name: 'Insane Focus (Su)',
      description:
        'You can touch a willing creature as a standard action, granting it a +4 bonus on all saving throws made against mind-affecting effects and immunity to confusion. This bonus lasts for 1 minute. If the creature fails a saving throw against a mind-affecting effect during this period, it loses its immunity to confusion and is immediately confused for one round. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Aura of Madness (Su)',
      description:
        'At 8th level, you can emit a 30-foot aura of madness for a number of rounds per day equal to your cleric level. Enemies within this aura are affected by confusion unless they succeed on a Will save (DC = 10 + 1/2 your cleric level + your Wisdom modifier). The confusion effect ends immediately when the creature leaves the aura or the aura expires. Creatures that successfully save against this effect are immune to it for 24 hours. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const madnessNightmareSubdomain: DomainDocument = {
  id: 'madness-nightmare',
  name: 'Nightmare Subdomain',
  description:
    'Subdomain of Madness. You draw upon terrifying hallucinations and waking nightmares to break your enemies\'s resolve and strip away their defenses against fear.',
  domainSpells: [
    'lesser confusion', // level 1
    'touch of idiocy', // level 2
    'rage', // level 3
    'phantasmal killer', // level 4 (replaces confusion)
    'nightmare', // level 5
    'cloak of dreams', // level 6 (replaces phantasmal killer)
    'insanity', // level 7
    'scintillating pattern', // level 8
    'weird', // level 9
  ],
  powers: [
    {
      name: 'Fearful Touch (Su)',
      description:
        'As a standard action, you can make a melee touch attack against a creature, causing it to experience terrible hallucinations for 1 round. During this time, the creature loses any immunity to fear effects it might possess and takes a –2 penalty on attack rolls made against you. In addition, the creature takes a penalty on Will saves made against fear effects equal to 1/2 your cleric level (minimum –1). This power is a mind-affecting effect. You can use this ability for a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Aura of Madness (Su)',
      description:
        'At 8th level, you can emit a 30-foot aura of madness for a number of rounds per day equal to your cleric level. Enemies within this aura are affected by confusion unless they succeed on a Will save (DC = 10 + 1/2 your cleric level + your Wisdom modifier). The confusion effect ends immediately when the creature leaves the aura or the aura expires. Creatures that successfully save against this effect are immune to it for 24 hours. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const madnessTruthSubdomain: DomainDocument = {
  id: 'madness-truth',
  name: 'Truth Subdomain',
  description:
    'Subdomain of Madness. You peer into truths so vast and terrible that comprehending them breaks the minds of both seer and seen, sharing visions of ineffable reality.',
  domainSpells: [
    'lesser confusion', // level 1
    'touch of idiocy', // level 2
    'wall of nausea', // level 3 (replaces rage)
    'confusion', // level 4
    'contact other plane', // level 5 (replaces nightmare)
    'litany of madness', // level 6 (replaces phantasmal killer)
    'insanity', // level 7
    'scintillating pattern', // level 8
    'weird', // level 9
  ],
  powers: [
    {
      name: 'Vision of Madness (Sp)',
      description:
        'You can give a creature a vision of madness as a melee touch attack. Choose one of the following: attack rolls, saving throws, or skill checks. The target receives a bonus to the chosen rolls equal to 1/2 your cleric level (minimum +1) and takes an equal penalty to the other two types of rolls. This effect fades after 3 rounds. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Dawning Realization (Su)',
      description:
        'At 8th level, you can impart a shared vision of unfathomable ineffability to a living creature you touch as a standard action, after which your turn immediately ends. You are dazed and the target confused for 1 round by what you both learn. On the following round, you are both staggered for 1 round by the ramifications of your discovery. On the third round, you are confused and the target dazed for 1 round as you attempt to regain your bearings. Each round, the target can attempt a Will save with a DC equal to 10 + 1/2 your cleric level + your Wisdom modifier to negate that round\'s effects for both of you, though the effect does not end until the end of the third round. This is a mind-affecting effect that you can use a number of times per day equal to 1/2 your class level.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Magic Subdomains (4) ----

export const magicAlchemySubdomain: DomainDocument = {
  id: 'magic-alchemy',
  name: 'Alchemy Subdomain',
  description:
    'Subdomain of Magic. You blend divine power with alchemical craft, infusing spells into improvised potions that allies can consume at a moment of need.',
  domainSpells: [
    'identify', // level 1
    'touch injection', // level 2 (replaces magic mouth)
    'dispel magic', // level 3
    'amplify elixir', // level 4 (replaces imbue with spell ability)
    'spell resistance', // level 5
    'delayed consumption', // level 6 (replaces antimagic field)
    'spell turning', // level 7
    'protection from spells', // level 8
    'mage\'s disjunction', // level 9
  ],
  powers: [
    {
      name: 'Divine Alchemy (Su)',
      description:
        'You can perform a 1-minute ritual infusing a flask of water with one of your prepared spells, creating an improvised potion that lasts until consumed or the next time you prepare spells. This power works only with spells that target one or more creatures. The maximum spell level you can infuse is equal to 1 plus 1 for every 4 cleric levels you possess. These potions function as alchemist extracts. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Dispelling Touch (Sp)',
      description:
        'At 8th level, you can use a targeted dispel magic effect as a melee touch attack. You can use this ability once per day at 8th level and one additional time per day for every four cleric levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const magicArcaneSubdomain: DomainDocument = {
  id: 'magic-arcane',
  name: 'Arcane Subdomain',
  description:
    'Subdomain of Magic. You act as a nexus of arcane energy, empowering the spells of other casters who work within your sacred aura.',
  domainSpells: [
    'magic aura', // level 1 (replaces identify)
    'magic mouth', // level 2
    'dispel magic', // level 3
    'arcane eye', // level 4 (replaces imbue with spell ability)
    'spell resistance', // level 5
    'analyze dweomer', // level 6 (replaces antimagic field)
    'spell turning', // level 7
    'protection from spells', // level 8
    'mage\'s disjunction', // level 9
  ],
  powers: [
    {
      name: 'Arcane Beacon (Su)',
      description:
        'As a standard action you can become a beacon of arcane energy until the end of your next turn. The aura emanates 15 feet from you. All arcane spells cast within the aura either gain a +1 bonus to their caster level or increase their saving throw DC by +1. The caster chooses the benefit when she casts the spell. You can use this ability for a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Dispelling Touch (Sp)',
      description:
        'At 8th level, you can use a targeted dispel magic effect as a melee touch attack. You can use this ability once per day at 8th level and one additional time per day for every four cleric levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const magicDivineSubdomain: DomainDocument = {
  id: 'magic-divine',
  name: 'Divine Subdomain',
  description:
    'Subdomain of Magic. You channel divine magic as a conduit of blessings, sharing the sacred power flowing through you with nearby allies.',
  domainSpells: [
    'identify', // level 1
    'bless water', // level 2 (replaces magic mouth)
    'dispel magic', // level 3
    'imbue with spell ability', // level 4
    'cleanse', // level 5 (replaces spell resistance)
    'antimagic field', // level 6
    'resurrection', // level 7 (replaces spell turning)
    'protection from spells', // level 8
    'miracle', // level 9 (replaces mage's disjunction)
  ],
  powers: [
    {
      name: 'Divine Vessel (Su)',
      description:
        'Whenever you are the target of a divine spell, you can, as a swift action, grant each ally within 15 feet of you a divine boon. This boon grants a +2 bonus on the next attack roll, skill check, or ability check made before the end of their next turn. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Dispelling Touch (Sp)',
      description:
        'At 8th level, you can use a targeted dispel magic effect as a melee touch attack. You can use this ability once per day at 8th level and one additional time per day for every four cleric levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const magicRitesSubdomain: DomainDocument = {
  id: 'magic-rites',
  name: 'Rites Subdomain',
  description:
    'Subdomain of Magic. You master the rituals and ceremonies of spellcasting, extending the duration of your magic and reducing the cost of powerful workings.',
  domainSpells: [
    'sanctify corpse', // level 1 (replaces identify)
    'magic mouth', // level 2
    'dispel magic', // level 3
    'imbue with spell ability', // level 4
    'permanency', // level 5 (replaces spell resistance)
    'antimagic field', // level 6
    'spell turning', // level 7
    'binding', // level 8 (replaces protection from spells)
    'mage\'s disjunction', // level 9
  ],
  powers: [
    {
      name: 'Enduring Ritual (Su)',
      description:
        'As a swift action when you cast a spell with a duration of at least 1 minute per caster level, you can increase the spell\'s effective caster level by 1 for the purpose of determining its duration and preventing attempts to dispel it. The effective caster level increases by an additional 1 for every 10 cleric levels you have (maximum +3). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Dispelling Touch (Sp)',
      description:
        'At 8th level, you can use a targeted dispel magic effect as a melee touch attack. You can use this ability once per day at 8th level and one additional time per day for every four cleric levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Core Domains (9) ----

export const nobilityDomain: DomainDocument = {
  id: 'nobility',
  name: 'Nobility Domain',
  description:
    'You are a great leader, an inspiration to all who follow the teachings of your faith.',
  domainSpells: [
    'divine favor', // level 1
    'enthrall', // level 2
    'magic vestment', // level 3
    'discern lies', // level 4
    'greater command', // level 5
    'geas/quest', // level 6
    'repulsion', // level 7
    'demand', // level 8
    'storm of vengeance', // level 9
  ],
  powers: [
    {
      name: 'Inspiring Word (Sp)',
      description:
        'As a standard action, you can speak an inspiring word to a creature within 30 feet. That creature receives a +2 morale bonus on attack rolls, skill checks, ability checks, and saving throws for a number of rounds equal to 1/2 your cleric level (minimum 1). You can use this power a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Leadership (Ex)',
      description:
        'At 8th level, you receive Leadership as a bonus feat. In addition, you gain a +2 bonus on your leadership score as long as you uphold the tenets of your deity (or divine concept if you do not venerate a deity).',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const plantDomain: DomainDocument = {
  id: 'plant',
  name: 'Plant Domain',
  description:
    'You find solace in the green, can grow defensive thorns, and can communicate with plants.',
  domainSpells: [
    'entangle', // level 1
    'barkskin', // level 2
    'plant growth', // level 3
    'command plants', // level 4
    'wall of thorns', // level 5
    'repel wood', // level 6
    'animate plants', // level 7
    'control plants', // level 8
    'shambler', // level 9
  ],
  powers: [
    {
      name: 'Wooden Fist (Su)',
      description:
        'As a free action, your hands can become as hard as wood, covered in tiny thorns. While you have wooden fists, your unarmed strikes do not provoke attacks of opportunity, deal lethal damage, and gain a bonus on damage rolls equal to 1/2 your cleric level (minimum +1). You can use this ability for a number of rounds per day equal to 3 + your Wisdom modifier. These rounds do not need to be consecutive.',
      levelGained: 1,
    },
    {
      name: 'Bramble Armor (Su)',
      description:
        'At 6th level, you can cause a host of wooden thorns to burst from your skin as a free action. While bramble armor is in effect, any foe striking you with an unarmed strike or a melee weapon without reach takes 1d6 points of piercing damage + 1 point per two cleric levels you possess. You can use this ability for a number of rounds per day equal to your cleric level. These rounds do not need to be consecutive.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const protectionDomain: DomainDocument = {
  id: 'protection',
  name: 'Protection Domain',
  description:
    'Your faith is your greatest source of protection, and you can use that faith to defend others. You also gain a +1 resistance bonus on saving throws. This bonus increases by 1 for every 5 levels you possess.',
  domainSpells: [
    'sanctuary', // level 1
    'shield other', // level 2
    'protection from energy', // level 3
    'spell immunity', // level 4
    'spell resistance', // level 5
    'antimagic field', // level 6
    'repulsion', // level 7
    'mind blank', // level 8
    'prismatic sphere', // level 9
  ],
  powers: [
    {
      name: 'Resistant Touch (Sp)',
      description:
        'As a standard action, you can touch an ally to grant him your resistance bonus for 1 minute. When you do so, you lose your resistance bonus for 1 minute. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Aura of Protection (Su)',
      description:
        'At 8th level, you can emit a 30-foot aura of protection for a number of rounds per day equal to your cleric level. You and your allies within this aura gain a +1 deflection bonus to AC and resistance 5 against all elements (acid, cold, electricity, fire, and sonic). The deflection bonus increases by +1 for every four cleric levels beyond 8th. At 14th level, the resistance to elements increases to 10. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const reposeDomain: DomainDocument = {
  id: 'repose',
  name: 'Repose Domain',
  description:
    'You see death not as something to be feared, but as a final rest and reward for a life well spent. The taint of undeath is a mockery of what you hold dear.',
  domainSpells: [
    'deathwatch', // level 1
    'gentle repose', // level 2
    'speak with dead', // level 3
    'death ward', // level 4
    'slay living', // level 5
    'undeath to death', // level 6
    'destruction', // level 7
    'waves of exhaustion', // level 8
    'wail of the banshee', // level 9
  ],
  powers: [
    {
      name: 'Gentle Rest (Sp)',
      description:
        'Your touch can fill a creature with lethargy, causing a living creature to become staggered for 1 round as a melee touch attack. If you touch a staggered living creature, that creature falls asleep for 1 round instead. Undead creatures touched are staggered for a number of rounds equal to your Wisdom modifier. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Ward Against Death (Su)',
      description:
        'At 8th level, you can emit a 30-foot aura that wards against death for a number of rounds per day equal to your cleric level. Living creatures in this area are immune to all death effects, energy drain, and effects that cause negative levels.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const runeDomain: DomainDocument = {
  id: 'rune',
  name: 'Rune Domain',
  description:
    'In strange and eldritch runes you find potent magic. You gain Scribe Scroll as a bonus feat.',
  domainSpells: [
    'erase', // level 1
    'secret page', // level 2
    'glyph of warding', // level 3
    'explosive runes', // level 4
    'lesser planar binding', // level 5
    'glyph of warding (greater)', // level 6
    'instant summons', // level 7
    'symbol of death', // level 8
    'teleportation circle', // level 9
  ],
  powers: [
    {
      name: 'Blast Rune (Sp)',
      description:
        'As a standard action, you can create a blast rune in any adjacent square. Any creature entering this square takes 1d6 points of damage + 1 point for every two cleric levels you possess. This rune deals your choice of acid, cold, electricity, or fire damage. The rune is invisible and lasts for a number of rounds equal to your cleric level or until discharged. A single square can hold only one blast rune at a time. The DC to find the rune with Perception is 26 and the DC to disable the rune with Disable Device is also 26. The blast rune counts as a 1st-level spell for the purposes of dispel magic. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Spell Rune (Sp)',
      description:
        'At 8th level, you can attach another spell that you cast to one of your blast runes, causing that spell to affect the creature that triggers the rune, in addition to the damage. This spell must be at least one level lower than the highest-level cleric spell you can cast and must target one or more creatures. Only the creature that triggers the rune is affected by the spell.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const scalykindDomain: DomainDocument = {
  id: 'scalykind',
  name: 'Scalykind Domain',
  description:
    'You are a true lord of reptiles, able to induce pain, panic, and confusion with a mere glance.',
  domainSpells: [
    'magic fang', // level 1
    'animal trance', // level 2
    'magic fang (greater)', // level 3
    'poison', // level 4
    'animal growth', // level 5
    'eyebite', // level 6
    'creeping doom', // level 7
    'animal shapes', // level 8
    'shapechange', // level 9
  ],
  powers: [
    {
      name: 'Venomous Stare (Sp)',
      description:
        'As a standard action, you can focus your gaze on one creature within 30 feet. That creature must make a Will save (DC = 10 + 1/2 your cleric level + your Wisdom modifier) or take 1d6 points of nonlethal damage + 1 point per two cleric levels you possess and become fascinated with you until the beginning of your next turn. This is a mind-affecting effect. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Serpent Companion (Ex)',
      description:
        'At 4th level, you gain the service of an animal companion. Your effective druid level for this animal companion is equal to your cleric level – 2. You may choose either a viper or a constrictor snake as your animal companion.',
      levelGained: 4,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const strengthDomain: DomainDocument = {
  id: 'strength',
  name: 'Strength Domain',
  description:
    'In strength and brawn there is truth—your faith gives you incredible might and power.',
  domainSpells: [
    'enlarge person', // level 1
    "bull's strength", // level 2
    'magic vestment', // level 3
    'spell immunity', // level 4
    'righteous might', // level 5
    'stoneskin', // level 6
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

export const sunDomain: DomainDocument = {
  id: 'sun',
  name: 'Sun Domain',
  description:
    'You see truth in the pure and burning light of the sun, and can call upon its blessing or wrath to work great deeds.',
  domainSpells: [
    'endure elements', // level 1
    'heat metal', // level 2
    'searing light', // level 3
    'fire shield', // level 4
    'flame strike', // level 5
    'fire seeds', // level 6
    'sunbeam', // level 7
    'sunburst', // level 8
    'prismatic sphere', // level 9
  ],
  powers: [
    {
      name: 'Sun\'s Blessing (Su)',
      description:
        'Whenever you channel positive energy to harm undead creatures, add your cleric level to the damage dealt. Undead do not add their channel resistance to their saves when you channel positive energy.',
      levelGained: 1,
    },
    {
      name: 'Nimbus of Light (Su)',
      description:
        'At 8th level, you can emit a 30-foot nimbus of light for a number of rounds per day equal to your cleric level. This acts as a daylight spell. In addition, undead within this area take an amount of damage equal to your cleric level each round that they remain within the nimbus. Spells with the darkness descriptor that are brought within this area are automatically dispelled. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const travelDomain: DomainDocument = {
  id: 'travel',
  name: 'Travel Domain',
  description:
    'You are an explorer and find enlightenment in the simple joy of travel, be it by foot or conveyance or magic. You also gain Survival as a class skill.',
  domainSpells: [
    'longstrider', // level 1
    'locate object', // level 2
    'fly', // level 3
    'dimension door', // level 4
    'teleport', // level 5
    'find the path', // level 6
    'greater teleport', // level 7
    'phase door', // level 8
    'astral projection', // level 9
  ],
  powers: [
    {
      name: 'Agile Feet (Su)',
      description:
        'As a free action, you can gain increased mobility for 1 round. For the next round, you ignore all difficult terrain and do not take any penalties for moving through it. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Dimensional Hop (Sp)',
      description:
        'At 8th level, you can teleport up to 10 feet per cleric level per day as a move action. This teleportation must be used in 5-foot increments and such movement does not provoke attacks of opportunity. You must have line of sight to your destination to use this ability. You can bring other willing creatures with you, but you must expend an equal amount of distance for each creature brought.',
      levelGained: 8,
    },
  ],
  grantedClassSkills: ['Survival'],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Nobility Subdomains (4) ----

export const nobilityAristocracySubdomain: DomainDocument = {
  id: 'nobility-aristocracy',
  name: 'Aristocracy Subdomain',
  description:
    'Subdomain of Nobility. You carry yourself with the bearing of the highborn, projecting natural authority over those of your own kind.',
  domainSpells: [
    'divine favor', // level 1
    'enthrall', // level 2
    'enter image', // level 3 (replaces magic vestment)
    'discern lies', // level 4
    'greater command', // level 5
    'geas/quest', // level 6
    'repulsion', // level 7
    'demand', // level 8
    'overwhelming presence', // level 9 (replaces storm of vengeance)
  ],
  powers: [
    {
      name: 'Noble Visage (Su)',
      description:
        'You gain a +1 bonus on Charisma checks and Charisma-based skill checks against creatures that share your creature type (and subtype, if you are a humanoid). This bonus increases by 1 for every 5 levels you possess. As a standard action, you can touch an ally to grant them this bonus against creatures of their matching type for 1 minute, during which time you lose your own bonus. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Leadership (Ex)',
      description:
        'At 8th level, you receive Leadership as a bonus feat. In addition, you gain a +2 bonus on your leadership score as long as you uphold the tenets of your deity (or divine concept if you do not venerate a deity).',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const nobilityHubrisSubdomain: DomainDocument = {
  id: 'nobility-hubris',
  name: 'Hubris Subdomain',
  description:
    'Subdomain of Nobility. You petition your divine patron for power beyond what you deserve, gambling your own capabilities for a chance at greater effect.',
  domainSpells: [
    'divine favor', // level 1
    'enthrall', // level 2
    'magic vestment', // level 3
    'hollow heroism', // level 4 (replaces discern lies)
    'greater command', // level 5
    'geas/quest', // level 6
    'greater hollow heroism', // level 7 (replaces repulsion)
    'demand', // level 8
    'overwhelming presence', // level 9 (replaces storm of vengeance)
  ],
  powers: [
    {
      name: 'Inspiring Word (Sp)',
      description:
        'As a standard action, you can speak an inspiring word to a creature within 30 feet. That creature receives a +2 morale bonus on attack rolls, skill checks, ability checks, and saving throws for a number of rounds equal to 1/2 your cleric level (minimum 1). You can use this power a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Divine Demand (Su)',
      description:
        'At 6th level, you can petition your divine patron for far greater power than you deserve. This is a swift action you take when casting a spell that has a reduced effect on a successful saving throw. When you use this ability, the saving throw DC of the spell increases by 2 and you gain a +2 bonus on caster level checks to overcome spell resistance. However, if a successful saving throw would normally reduce the spell\'s effect, a successful save instead negates the effect entirely. If half or more of the targets of the spell succeed at their saving throws, you are shaken for a number of rounds equal to the spell\'s level. If all of the targets of the spell succeed at their saving throws, you lose the ability to cast divine spells, channel energy, and use domain powers for 1d4+1 rounds; you can end this effect early by spending a full-round action to apologize to your deity, which provokes attacks of opportunity. You can use this ability once per day at 6th level, plus one additional time per day for every 4 cleric levels beyond 6th.',
      levelGained: 6,
    },
  ],
  grantedClassSkills: ['Intimidate'],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const nobilityLeadershipSubdomain: DomainDocument = {
  id: 'nobility-leadership',
  name: 'Leadership Subdomain',
  description:
    'Subdomain of Nobility. You lead through inspiration and tactical direction, empowering your allies with insight bonuses in the heat of battle.',
  domainSpells: [
    'bless', // level 1 (replaces divine favor)
    'enthrall', // level 2
    'prayer', // level 3 (replaces magic vestment)
    'discern lies', // level 4
    'greater command', // level 5
    'brilliant inspiration', // level 6 (replaces geas/quest)
    'repulsion', // level 7
    'demand', // level 8
    'storm of vengeance', // level 9
  ],
  powers: [
    {
      name: 'Inspiring Command (Su)',
      description:
        'As a standard action, you can issue an inspiring command to your allies. The inspiring command affects one ally plus one additional ally for every three cleric levels you possess, who must all be within 30 feet of you. Affected allies gain a +2 insight bonus on attack rolls, AC, combat maneuver defense, and skill checks for 1 round. This is a language-dependent mind-affecting effect.',
      levelGained: 1,
    },
    {
      name: 'Leadership (Ex)',
      description:
        'At 8th level, you receive Leadership as a bonus feat. In addition, you gain a +2 bonus on your leadership score as long as you uphold the tenets of your deity (or divine concept if you do not venerate a deity).',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const nobilityMartyrSubdomain: DomainDocument = {
  id: 'nobility-martyr',
  name: 'Martyr Subdomain',
  description:
    'Subdomain of Nobility. You sacrifice yourself willingly in defense of others, absorbing harm meant for your allies as an act of devotion.',
  domainSpells: [
    'divine favor', // level 1
    'shield other', // level 2 (replaces enthrall)
    'magic vestment', // level 3
    'discern lies', // level 4
    'greater command', // level 5
    'sacrificial oath', // level 6 (replaces geas/quest)
    'repulsion', // level 7
    'demand', // level 8
    'storm of vengeance', // level 9
  ],
  powers: [
    {
      name: 'Inspiring Word (Sp)',
      description:
        'As a standard action, you can speak an inspiring word to a creature within 30 feet. That creature receives a +2 morale bonus on attack rolls, skill checks, ability checks, and saving throws for a number of rounds equal to 1/2 your cleric level (minimum 1). You can use this power a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Sacrificial Bond (Su)',
      description:
        'At 8th level, when an ally within 30 feet takes damage from an attack, you can, as an immediate action, transfer this damage to yourself. This power also transfers any effects that accompany the damage. The damage done to you cannot be reduced in any way. You can use this ability once per day at 8th level, plus one additional time per day at 14th level and 20th level.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Batch Array ----

export const batch_005: DomainDocument[] = [
  liberationFreedomSubdomain,
  liberationRevolutionSubdomain,
  liberationSelfRealizationSubdomain,
  luckCurseSubdomain,
  luckFateSubdomain,
  luckImaginationSubdomain,
  madnessInsanitySubdomain,
  madnessNightmareSubdomain,
  madnessTruthSubdomain,
  magicAlchemySubdomain,
  magicArcaneSubdomain,
  magicDivineSubdomain,
  magicRitesSubdomain,
  nobilityDomain,
  plantDomain,
  protectionDomain,
  reposeDomain,
  runeDomain,
  scalykindDomain,
  strengthDomain,
  sunDomain,
  travelDomain,
  nobilityAristocracySubdomain,
  nobilityHubrisSubdomain,
  nobilityLeadershipSubdomain,
  nobilityMartyrSubdomain,
];
