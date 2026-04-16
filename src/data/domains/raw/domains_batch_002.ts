// Batch 002 | first: 'Chaos/Entropy Subdomain' | last: 'Earth/Caves Subdomain' | count: 24
import { DomainEntry } from '@/types/classOptions';

// ---- Chaos Subdomains (5) ----

export const chaosEntropySubdomain: DomainEntry = {
  id: 'chaos-entropy',
  name: 'Entropy Subdomain',
  description: 'Subdomain of Chaos. You seek to bring about the end of all things.',
  domainSpells: [
    'entropic shield', // level 1 (replaces protection from law)
    'align weapon', // level 2
    'dispel magic', // level 3 (replaces magic circle against law)
    'chaos hammer', // level 4
    'confusion', // level 5 (replaces dispel law)
    'animate objects', // level 6
    'destruction', // level 7 (replaces word of chaos)
    'cloak of chaos', // level 8
    'summon monster IX', // level 9
  ],
  powers: [
    {
      name: 'Touch of Chaos',
      description:
        'You can imbue a target with chaos as a melee touch attack. For the next round, anytime the target rolls a d20, he must roll twice and take the less favorable result. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Hasten the End',
      description:
        'At 8th level, as an immediate action upon successfully hitting an opponent with a melee attack, you reduce the remaining duration of all beneficial magical effects currently affecting the target by 1 round, minute, hour, or day—whichever measurement is used to determine the duration of each particular magical effect. You can use this ability once per day at 8th level, and an additional time per day for every 4 levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const chaosProteanSubdomain: DomainEntry = {
  id: 'chaos-protean',
  name: 'Protean Subdomain',
  description:
    'Subdomain of Chaos. Proteans are a race of chaotic neutral outsiders whose anarchic nature embodies the essence of true chaos.',
  domainSpells: [
    'lesser confusion', // level 1 (replaces protection from law)
    'align weapon', // level 2
    'displacement', // level 3 (replaces magic circle against law)
    'chaos hammer', // level 4
    'dispel law', // level 5
    'planar binding', // level 6 (replaces animate objects; proteans only)
    'word of chaos', // level 7
    'cloak of chaos', // level 8
    'summon monster IX', // level 9
  ],
  powers: [
    {
      name: 'Touch of Chaos',
      description:
        'You can imbue a target with chaos as a melee touch attack. For the next round, anytime the target rolls a d20, he must roll twice and take the less favorable result. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Aura of Chaos',
      description:
        'At 8th level, you can surround yourself with a field of wild energies. These energies manifest as a 30-foot aura of chaos for a number of rounds per day equal to your cleric level. All enemies within this aura must declare one type of action at the start of their turn (attack, cast a spell, move, use an item, or activate a special ability) and make a Will save. Creatures that fail the Will save must take an action other than their declared action. If they succeed, they must take the declared action. Creatures cannot select actions that they cannot perform.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const chaosRevelrySubdomain: DomainEntry = {
  id: 'chaos-revelry',
  name: 'Revelry Subdomain',
  description: 'Subdomain of Chaos. You know how to best celebrate the good times in life.',
  domainSpells: [
    'protection from law', // level 1
    'hideous laughter', // level 2 (replaces align weapon)
    'good hope', // level 3 (replaces magic circle against law)
    'chaos hammer', // level 4
    'dispel law', // level 5
    "heroes' feast", // level 6 (replaces animate objects)
    'word of chaos', // level 7
    'irresistible dance', // level 8 (replaces cloak of chaos)
    'summon monster IX', // level 9
  ],
  powers: [
    {
      name: 'Touch of Chaos',
      description:
        'You can imbue a target with chaos as a melee touch attack. For the next round, anytime the target rolls a d20, he must roll twice and take the less favorable result. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Intense Celebration',
      description:
        'At 8th level, any spells you cast that confer a morale effect upon you or your allies are automatically affected as if by the Extend Spell metamagic feat, with no increase in spell level.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const chaosRiotSubdomain: DomainEntry = {
  id: 'chaos-riot',
  name: 'Riot Subdomain',
  description:
    'Subdomain of Chaos. This subdomain requires that the character possess the Urban Acolyte faith trait.',
  domainSpells: [
    'protection from law', // level 1
    'align weapon', // level 2
    'magic circle against law', // level 3
    'confusion', // level 4 (replaces chaos hammer)
    'dispel law', // level 5
    'animate objects', // level 6
    'song of discord', // level 7 (replaces word of chaos)
    'cloak of chaos', // level 8
    'symbol of strife', // level 9 (replaces summon monster IX)
  ],
  powers: [
    {
      name: 'Touch of Chaos',
      description:
        'You can imbue a target with chaos as a melee touch attack. For the next round, anytime the target rolls a d20, he must roll twice and take the less favorable result. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Aura of Bedlam',
      description:
        'At 8th level, you can emit a 30-foot-radius aura of chaos and strife for 1 round per cleric level. Enemies in the aura take a –4 penalty on concentration checks and are treated as experiencing vigorous motion (concentration DC = 10 + spell level) when attempting to cast spells. This penalty increases by 1 for every 2 cleric levels you have beyond 8th. This is a mind-affecting effect. These rounds need not be consecutive.',
      levelGained: 8,
    },
  ],
  grantedClassSkills: ['Knowledge (local)'],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const chaosWhimsySubdomain: DomainEntry = {
  id: 'chaos-whimsy',
  name: 'Whimsy Subdomain',
  description:
    'Subdomain of Chaos. You find the humor in all things, and enjoy spreading laughter through pranks and trickery, even in the direst of situations.',
  domainSpells: [
    'hideous laughter', // level 1 (replaces protection from law)
    'align weapon', // level 2
    'magic circle against law', // level 3
    'confusion', // level 4 (replaces chaos hammer)
    'dispel law', // level 5
    'cloak of dreams', // level 6 (replaces animate objects)
    'word of chaos', // level 7
    'cloak of chaos', // level 8
    'summon monster IX', // level 9
  ],
  powers: [
    {
      name: 'Touch of Chaos',
      description:
        'You can imbue a target with chaos as a melee touch attack. For the next round, anytime the target rolls a d20, he must roll twice and take the less favorable result. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Unexpected Whimsy',
      description:
        'At 8th level, as a standard action you can perform acts of whimsy causing enemies within 30 feet who can see and hear you to make Will saves (DC = 10 + 1/2 your cleric level + half your Wisdom modifier) or collapse into manic laughter, falling prone and unable to take actions other than laughing for 1 round. You can use this ability once per day at 8th level, and one additional time for every 4 levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

// ---- Charm Subdomains (3) ----

export const charmCaptivationSubdomain: DomainEntry = {
  id: 'charm-captivation',
  name: 'Captivation Subdomain',
  description:
    'Subdomain of Charm. You weave an aura of distraction and allure that makes it difficult for your enemies to notice anything beyond you.',
  domainSpells: [
    'hypnotism', // level 1 (replaces charm person)
    'hypnotic pattern', // level 2 (replaces calm emotions)
    'suggestion', // level 3
    'rainbow pattern', // level 4 (replaces heroism)
    'charm monster', // level 5
    'geas/quest', // level 6
    'insanity', // level 7
    'demand', // level 8
    'dominate monster', // level 9
  ],
  powers: [
    {
      name: 'Dazing Touch',
      description:
        'You can cause a living creature to become dazed for 1 round as a melee touch attack. Creatures with more Hit Dice than your cleric level are unaffected. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Entrancing Aura',
      description:
        'At 8th level, you can emit an imperceptible 30-foot aura of distraction as a standard action for a number of rounds equal to your cleric level. These rounds need not be consecutive. Enemies within this aura take a –5 penalty on Perception checks and are treated as though they had 2 fewer Hit Dice (minimum 1 Hit Die) for the purpose of your effects that would give them the fascinated condition. At 16th level, they are instead treated as if they had 3 fewer Hit Dice for such effects.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const charmLoveSubdomain: DomainEntry = {
  id: 'charm-love',
  name: 'Love Subdomain',
  description:
    'Subdomain of Charm. Your power flows from the bonds of love and devotion, allowing you to protect yourself and others through the force of affection.',
  domainSpells: [
    'charm person', // level 1
    'enthrall', // level 2 (replaces calm emotions)
    'suggestion', // level 3
    'heroism', // level 4
    'charm monster', // level 5
    'geas/quest', // level 6
    'insanity', // level 7
    'euphoric tranquility', // level 8 (replaces demand)
    'dominate monster', // level 9
  ],
  powers: [
    {
      name: 'Adoration',
      description:
        'As an immediate action, you can attempt to thwart a melee or ranged attack that targets you. This ability functions as sanctuary, but only against one individual attack. You must use the ability after the attack is declared but before the roll is made. The creature attacking you receives a Will save to negate this effect. If a creature has more than one attack, this ability only affects one of the attacks. You can use the ability a number of times per day equal to 3 + your Wisdom modifier. This is a mind-affecting effect.',
      levelGained: 1,
    },
    {
      name: 'Charming Smile',
      description:
        'At 8th level, you can cast charm person as a swift action, with a DC of 10 + 1/2 your cleric level + your Wisdom modifier. You can only have one creature charmed in this way at a time. The total number of rounds of this effect per day is equal to your cleric level. The rounds do not need to be consecutive, and you can dismiss the charm at any time as a free action. Each attempt to use this ability consumes 1 round of its duration, whether or not the creature succeeds on its save to resist the effect.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const charmLustSubdomain: DomainEntry = {
  id: 'charm-lust',
  name: 'Lust Subdomain',
  description:
    'Subdomain of Charm. You wield the power of desire and compulsion to bend others to your will.',
  domainSpells: [
    'charm person', // level 1
    'touch of idiocy', // level 2 (replaces calm emotions)
    'suggestion', // level 3
    'confusion', // level 4 (replaces heroism)
    'charm monster', // level 5
    'geas/quest', // level 6
    'insanity', // level 7
    'demand', // level 8
    'dominate monster', // level 9
  ],
  powers: [
    {
      name: 'Dazing Touch',
      description:
        'You can cause a living creature to become dazed for 1 round as a melee touch attack. Creatures with more Hit Dice than your cleric level are unaffected. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Anything to Please',
      description:
        "At 8th level, you can compel a creature within 30 feet to attempt to please you as a standard action. The creature receives a Will save to negate this effect. If the save fails, the creature attacks your enemies for 1 round, gives you its most valuable item, or drops prone at your feet and grovels for 1d4 rounds (GM's choice). You can use this ability once per day at 8th level and one additional time per day for every four levels beyond 8th. This is a mind-affecting effect.",
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

// ---- Community Subdomains (4) ----

export const communityCooperationSubdomain: DomainEntry = {
  id: 'community-cooperation',
  name: 'Cooperation Subdomain',
  description:
    'Subdomain of Community. You know that you and your allies are strongest when you work together toward a common goal.',
  domainSpells: [
    'borrow skill', // level 1 (replaces bless)
    'share language', // level 2 (replaces shield other)
    'coordinated effort', // level 3 (replaces prayer)
    'imbue with spell ability', // level 4
    'telepathic bond', // level 5
    "heroes' feast", // level 6
    'refuge', // level 7
    'mass cure critical wounds', // level 8
    'miracle', // level 9
  ],
  powers: [
    {
      name: 'Synergistic Touch',
      description:
        'You can touch a creature as a standard action to confer upon it the benefits of any one Teamwork feat that you possess. This effect persists for a number of rounds equal to 1/2 your cleric level (minimum 1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Unity',
      description:
        'At 8th level, whenever a spell or effect targets you and one or more allies within 30 feet, you can use this ability to allow your allies to use your saving throw against the effect in place of their own. Each ally must decide individually before the rolls are made. Using this ability is an immediate action. You can use this ability once per day at 8th level, and one additional time per day for every four cleric levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const communityEducationSubdomain: DomainEntry = {
  id: 'community-education',
  name: 'Education Subdomain',
  description:
    'Subdomain of Community. This subdomain requires that the character possess the Urban Acolyte faith trait.',
  domainSpells: [
    'know the enemy', // level 1 (replaces bless)
    "fox's cunning", // level 2 (replaces shield other)
    'prayer', // level 3
    'imbue with spell ability', // level 4
    'telepathic bond', // level 5
    'battlemind link', // level 6 (replaces heroes' feast)
    'refuge', // level 7
    'circle of clarity', // level 8 (replaces mass cure critical wounds)
    'miracle', // level 9
  ],
  powers: [
    {
      name: 'Calming Touch',
      description:
        'You can touch a creature as a standard action to heal it of 1d6 points of nonlethal damage + 1 point per cleric level. This touch also removes the fatigued, shaken, and sickened conditions (but has no effect on more severe conditions). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Teaching Moment',
      description:
        'At 8th level, when you or an ally within 30 feet rolls a natural 1 or a natural 20 on an attack roll, an ability check, a skill check, or a saving throw, as an immediate action you can grant all allies within 30 feet special insights that help them overcome similar challenges. Once during the next minute, each affected creature can choose to roll twice and take the better result before attempting an attack roll, ability check, skill check, or saving throw. You can use this ability once per day at 8th level, and one additional time per day for every 4 cleric levels beyond 8th.',
      levelGained: 8,
    },
  ],
  grantedClassSkills: ['Knowledge (local)'],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const communityFamilySubdomain: DomainEntry = {
  id: 'community-family',
  name: 'Family Subdomain',
  description:
    'Subdomain of Community. The bonds of family are sacred to you, and you draw power from the ties that bind kith and kin.',
  domainSpells: [
    'bless', // level 1
    'calm emotions', // level 2 (replaces shield other)
    'create food and water', // level 3 (replaces prayer)
    'imbue with spell ability', // level 4
    'telepathic bond', // level 5
    "heroes' feast", // level 6
    'refuge', // level 7
    'mass cure critical wounds', // level 8
    'miracle', // level 9
  ],
  powers: [
    {
      name: 'Binding Ties',
      description:
        'As a standard action, you can touch an ally and remove one condition affecting the ally by transferring it to yourself. This transfer lasts a number of rounds equal to your cleric level, but you can end it as a free action on your turn. At the end of this effect, the condition reverts to the original creature, unless it has ended or is removed by another effect. While this power is in use, the target is immune to the transferred condition. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Unity',
      description:
        'At 8th level, whenever a spell or effect targets you and one or more allies within 30 feet, you can use this ability to allow your allies to use your saving throw against the effect in place of their own. Each ally must decide individually before the rolls are made. Using this ability is an immediate action. You can use this ability once per day at 8th level, and one additional time per day for every four cleric levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const communityHomeSubdomain: DomainEntry = {
  id: 'community-home',
  name: 'Home Subdomain',
  description:
    'Subdomain of Community. The sanctity of home and hearth is a cornerstone of your faith, and you draw power from protecting those places of safety.',
  domainSpells: [
    'alarm', // level 1 (replaces bless)
    'shield other', // level 2
    'glyph of warding', // level 3 (replaces prayer)
    'imbue with spell ability', // level 4
    'telepathic bond', // level 5
    "heroes' feast", // level 6
    'guards and wards', // level 7 (replaces refuge)
    'mass cure critical wounds', // level 8
    'miracle', // level 9
  ],
  powers: [
    {
      name: 'Calming Touch',
      description:
        'You can touch a creature as a standard action to heal it of 1d6 points of nonlethal damage + 1 point per cleric level. This touch also removes the fatigued, shaken, and sickened conditions (but has no effect on more severe conditions). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Guarded Hearth',
      description:
        'At 8th level, you can create a ward that protects a specified area. Creating this ward takes 10 minutes of uninterrupted work. This ward has a maximum radius of 5 feet per 2 cleric levels you possess. When the ward is completed, you designate any number of creatures inside its area. Should any other creature enter the warded area, all of the selected creatures are immediately alerted (and awoken if they were asleep). The designated creatures also receive a sacred bonus equal to your Wisdom modifier on all saving throws and attack rolls while inside the warded area. This ward immediately ends if you leave the area. The ward lasts for 1 hour per cleric level. You can use this ability once per day.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

// ---- Darkness Subdomains (3) ----

export const darknessLossSubdomain: DomainEntry = {
  id: 'darkness-loss',
  name: 'Loss Subdomain',
  description:
    'Subdomain of Darkness. You channel the power of deprivation and forgetfulness, stripping foes of memory and magical resources.',
  domainSpells: [
    'obscuring mist', // level 1
    'blindness/deafness', // level 2
    'deeper darkness', // level 3
    'shadow conjuration', // level 4
    'enervation', // level 5 (replaces summon monster V)
    'modify memory', // level 6 (replaces shadow walk)
    'power word blind', // level 7
    'greater shadow evocation', // level 8
    'energy drain', // level 9 (replaces shades)
  ],
  powers: [
    {
      name: 'Touch of Darkness',
      description:
        "As a melee touch attack, you can cause a creature's vision to be fraught with shadows and darkness. The creature touched treats all other creatures as if they had concealment, suffering a 20% miss chance on all attack rolls. This effect lasts for a number of rounds equal to 1/2 your cleric level (minimum 1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.",
      levelGained: 1,
    },
    {
      name: 'Aura of Forgetfulness',
      description:
        'At 8th level, you can emit a 30-foot aura of forgetfulness for a number of rounds per day equal to your cleric level. Creatures you target in this area must make a Will save or have no memory of any time spent inside the area. In addition, spellcasters in the area lose one prepared spell or available spell slot per round spent in the area, starting with 1st-level spells and going up through higher-level spells. Spellcasters are allowed a save each round to negate this loss (this save is separate from the memory loss save). These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const darknessMoonSubdomain: DomainEntry = {
  id: 'darkness-moon',
  name: 'Moon Subdomain',
  description:
    'Subdomain of Darkness. Even amid the darkness of night, the power of the illuminating moon has always fascinated you.',
  domainSpells: [
    'faerie fire', // level 1 (replaces obscuring mist)
    'blindness/deafness', // level 2
    'deeper darkness', // level 3
    'moonstruck', // level 4 (replaces shadow conjuration)
    'summon monster V', // level 5
    'dream', // level 6 (replaces shadow walk)
    'power word blind', // level 7
    'greater shadow evocation', // level 8
    'shades', // level 9
  ],
  powers: [
    {
      name: 'Touch of Darkness',
      description:
        "As a melee touch attack, you can cause a creature's vision to be fraught with shadows and darkness. The creature touched treats all other creatures as if they had concealment, suffering a 20% miss chance on all attack rolls. This effect lasts for a number of rounds equal to 1/2 your cleric level (minimum 1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.",
      levelGained: 1,
    },
    {
      name: 'Moonfire',
      description:
        'At 8th level, as a standard action you can shoot a blast of divine moonlight from your eyes, as a ranged touch attack against a single target within 30 feet. Moonfire deals 1d8 points of damage per 2 cleric levels, and the target is dazzled for 1 round per cleric level. Moonfire deals 1d10 points of damage per cleric level against lycanthropes. You can use this ability once per day at 8th level, and one additional time per day for every 4 levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const darknessNightSubdomain: DomainEntry = {
  id: 'darkness-night',
  name: 'Night Subdomain',
  description:
    'Subdomain of Darkness. You draw power from the concealing shadows of night, becoming one with the darkness itself.',
  domainSpells: [
    'sleep', // level 1 (replaces obscuring mist)
    'blindness/deafness', // level 2
    'deeper darkness', // level 3
    'shadow conjuration', // level 4
    'summon monster V', // level 5
    'nightmare', // level 6 (replaces shadow walk)
    'power word blind', // level 7
    'greater shadow evocation', // level 8
    'shades', // level 9
  ],
  powers: [
    {
      name: 'Night Hunter',
      description:
        'As a standard action, you can blend into the shadows of the night, becoming nearly invisible. As long as you are in an area of dim light or darkness, you are invisible (as per invisibility) to creatures without darkvision. This ability lasts for a number of rounds equal to 1/2 your cleric level (minimum 1). You can use this ability for a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Eyes of Darkness',
      description:
        'At 8th level, your vision is not impaired by lighting conditions, even in absolute darkness and magic darkness. You can use this ability for a number of rounds per day equal to 1/2 your cleric level. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

// ---- Death Subdomains (4) ----

export const deathMurderSubdomain: DomainEntry = {
  id: 'death-murder',
  name: 'Murder Subdomain',
  description:
    'Subdomain of Death. You channel the power of death in its most violent and sudden form, turning your weapons into instruments of lethal finality.',
  domainSpells: [
    'cause fear', // level 1
    'death knell', // level 2
    'keen edge', // level 3 (replaces animate dead)
    'death ward', // level 4
    'suffocation', // level 5 (replaces slay living)
    'create undead', // level 6
    'destruction', // level 7
    'create greater undead', // level 8
    'mass suffocation', // level 9 (replaces wail of the banshee)
  ],
  powers: [
    {
      name: 'Bleeding Touch',
      description:
        'As a melee touch attack, you can cause a living creature to take 1d6 points of damage per round. This effect persists for a number of rounds equal to 1/2 your cleric level (minimum 1) or until stopped with a DC 15 Heal check or any spell or effect that heals damage. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Killing Blow',
      description:
        'At 8th level, weapons you use become infused with the power of death. Whenever you confirm a critical hit with a melee or ranged weapon, your attack deals an additional amount of bleed damage equal to half your cleric level. You can use this ability once per day at 8th level, plus one additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const deathPlagueSubdomain: DomainEntry = {
  id: 'death-plague',
  name: 'Plague Subdomain',
  description:
    'Subdomain of Death. This subdomain requires that the character possess the Urban Acolyte faith trait. You wield the power of pestilence, accelerating the ravaging effects of disease upon those who oppose you.',
  domainSpells: [
    'cause fear', // level 1
    'death knell', // level 2
    'animate dead', // level 3
    'death ward', // level 4
    'slay living', // level 5
    'create undead', // level 6
    'destruction', // level 7
    'create greater undead', // level 8
    'wail of the banshee', // level 9
  ],
  powers: [
    {
      name: 'Bleeding Touch',
      description:
        'As a melee touch attack, you can cause a living creature to take 1d6 points of damage per round. This effect persists for a number of rounds equal to 1/2 your cleric level (minimum 1) or until stopped with a DC 15 Heal check or any spell or effect that heals damage. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Touch of Virulence',
      description:
        'As a standard action, you can touch a diseased creature and exacerbate its condition. If it fails a Fortitude save (DC = 10 + 1/2 your cleric level + your Wisdom modifier), the creature takes damage as though it had failed its Fortitude save against the disease and any remaining onset time for the disease ends. You can use this ability once per day at 8th level, plus one additional time per day at 14th level and 20th level.',
      levelGained: 8,
    },
  ],
  grantedClassSkills: ['Knowledge (local)'],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const deathPsychopompSubdomain: DomainEntry = {
  id: 'death-psychopomp',
  name: 'Psychopomp Subdomain',
  description:
    'Subdomain of Death. Psychopomps are a race of neutral outsiders who shepherd souls to the afterlife, and you draw on their power to bridge the gap between the living and the dead.',
  domainSpells: [
    'cause fear', // level 1
    'death knell', // level 2
    'chain of perdition', // level 3 (replaces animate dead)
    'death ward', // level 4
    'slay living', // level 5
    'planar ally', // level 6 (replaces create undead; psychopomps only)
    'destruction', // level 7
    'trap the soul', // level 8 (replaces create greater undead)
    'wail of the banshee', // level 9
  ],
  powers: [
    {
      name: 'Bleeding Touch',
      description:
        'As a melee touch attack, you can cause a living creature to take 1d6 points of damage per round. This effect persists for a number of rounds equal to 1/2 your cleric level (minimum 1) or until stopped with a DC 15 Heal check or any spell or effect that heals damage. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Spirit Touch',
      description:
        'At 6th level, as a swift action, you can give your natural weapons or any weapons you wield the ghost touch weapon special ability. You can use this power a number of rounds per day equal to your cleric level. These rounds need not be consecutive.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const deathUndeadSubdomain: DomainEntry = {
  id: 'death-undead',
  name: 'Undead Subdomain',
  description:
    'Subdomain of Death. You draw power from the undead, imbuing your touch with the essence of negative energy and blurring the line between the living and those who have crossed into death.',
  domainSpells: [
    'cause fear', // level 1
    'ghoul touch', // level 2 (replaces death knell)
    'animate dead', // level 3
    'enervation', // level 4 (replaces death ward)
    'slay living', // level 5
    'create undead', // level 6
    'destruction', // level 7
    'create greater undead', // level 8
    'energy drain', // level 9 (replaces wail of the banshee)
  ],
  powers: [
    {
      name: "Death's Kiss",
      description:
        "You can cause a creature to take on some of the traits of the undead with a melee touch attack. Touched creatures are treated as undead for the purposes of effects that heal or cause damage based on positive and negative energy. This effect lasts for a number of rounds equal to 1/2 your cleric level (minimum 1). It does not apply to the Turn Undead or Command Undead feats. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.",
      levelGained: 1,
    },
    {
      name: "Death's Embrace",
      description:
        'At 8th level, you heal damage instead of taking damage from channeled negative energy. If the channeled negative energy targets undead, you heal hit points just like undead in the area.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

// ---- Destruction Subdomains (4) ----

export const destructionCatastropheSubdomain: DomainEntry = {
  id: 'destruction-catastrophe',
  name: 'Catastrophe Subdomain',
  description:
    'Subdomain of Destruction. You call down the wrath of the heavens in the form of storm and tempest, using the fury of nature itself as your instrument of ruin.',
  domainSpells: [
    'true strike', // level 1
    'gust of wind', // level 2 (replaces shatter)
    'call lightning', // level 3 (replaces rage)
    'inflict critical wounds', // level 4
    'shout', // level 5
    'harm', // level 6
    'control weather', // level 7 (replaces disintegrate)
    'earthquake', // level 8
    'implosion', // level 9
  ],
  powers: [
    {
      name: 'Destructive Smite',
      description:
        'You gain the supernatural ability to make a single melee attack with a morale bonus on damage rolls equal to 1/2 your cleric level (minimum 1). You must declare the destructive smite before making the attack. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Deadly Weather',
      description:
        "At 8th level, you can unleash a furious call to the heavens, summoning forth an everchanging storm of destruction for a number of rounds per day equal to your cleric level. This storm has a radius of 5 feet per cleric level. Each round, the storm has one of the following effects: driving rain (–4 on all Perception checks and ranged attack rolls), howling winds (–8 on Fly skill checks and ranged attack rolls), heavy snow (all terrain is considered difficult), or lightning bolt (as call lightning). Other effects depending on the weather might also apply (at the GM's discretion). You choose which effect takes place each round, but no effect may be repeated on the following round. These rounds do not need to be consecutive.",
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const destructionHatredSubdomain: DomainEntry = {
  id: 'destruction-hatred',
  name: 'Hatred Subdomain',
  description:
    'Subdomain of Destruction. You channel pure, consuming hatred, using it to sow discord among your enemies and strip them of their bonds of alliance.',
  domainSpells: [
    'murderous command', // level 1 (replaces true strike)
    'wrathful mantle', // level 2 (replaces shatter)
    'rage', // level 3
    'inflict critical wounds', // level 4
    'shout', // level 5
    'harm', // level 6
    'disintegrate', // level 7
    'earthquake', // level 8
    'implosion', // level 9
  ],
  powers: [
    {
      name: 'Destructive Smite',
      description:
        'You gain the supernatural ability to make a single melee attack with a morale bonus on damage rolls equal to 1/2 your cleric level (minimum 1). You must declare the destructive smite before making the attack. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Hateful Aura',
      description:
        'At 8th level, you can emit a 30-foot aura of hatred for a number of rounds per day equal to your cleric level. These rounds need not be consecutive. Enemies within this aura must attempt a Will save (DC = 10 + 1/2 your cleric level + your Wisdom modifier). Characters who fail their save are filled with hatred, and cannot consider other characters allies for the purpose of any actions or use any teamwork feats. The effect ends immediately if the creature leaves the aura, you end the aura as a free action, or you expend all rounds of this ability.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const destructionRageSubdomain: DomainEntry = {
  id: 'destruction-rage',
  name: 'Rage Subdomain',
  description:
    'Subdomain of Destruction. You tap into the primal fury of destruction, entering a fearsome rage that amplifies your capacity for devastation.',
  domainSpells: [
    'true strike', // level 1
    "bull's strength", // level 2 (replaces shatter)
    'rage', // level 3
    'inflict critical wounds', // level 4
    'shout', // level 5
    'moonstruck', // level 6 (replaces harm)
    'disintegrate', // level 7
    'earthquake', // level 8
    'implosion', // level 9
  ],
  powers: [
    {
      name: 'Destructive Smite',
      description:
        'You gain the supernatural ability to make a single melee attack with a morale bonus on damage rolls equal to 1/2 your cleric level (minimum 1). You must declare the destructive smite before making the attack. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Rage',
      description:
        'At 8th level, you can enter a fearsome rage, like a barbarian, for a number of rounds per day equal to your cleric level. At 12th and 16th level, you can select one rage power. You cannot select any rage power that possesses a level requirement, but otherwise your barbarian level is equal to 1/2 your cleric level. These rounds of rage stack with any rounds of rage you might have from levels of barbarian.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const destructionTortureSubdomain: DomainEntry = {
  id: 'destruction-torture',
  name: 'Torture Subdomain',
  description:
    'Subdomain of Destruction. You revel in the pleasure of causing pain in others, whether to extract information or simply for the sake of causing suffering.',
  domainSpells: [
    'true strike', // level 1
    'pain strike', // level 2 (replaces shatter)
    'rage', // level 3
    'inflict critical wounds', // level 4
    'symbol of pain', // level 5 (replaces shout)
    'harm', // level 6
    'disintegrate', // level 7
    'demand', // level 8 (replaces earthquake)
    'implosion', // level 9
  ],
  powers: [
    {
      name: 'Painful Smite',
      description:
        'Prior to making a melee attack roll, you can choose to convert all damage from that strike into nonlethal damage, adding your Wisdom modifier to the damage. Upon a successful hit, you may make an Intimidate check as a free action to demoralize the target, gaining a bonus equal to the nonlethal damage dealt. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Destructive Aura',
      description:
        'At 8th level, you can emit a 30-foot aura of destruction for a number of rounds per day equal to your cleric level. All attacks made by creatures within this aura (including you) gain a morale bonus on damage rolls equal to 1/2 your cleric level, and all critical threats are automatically confirmed. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

// ---- Earth Subdomains (1) ----

export const earthCavesSubdomain: DomainEntry = {
  id: 'earth-caves',
  name: 'Caves Subdomain',
  description:
    'Subdomain of Earth. You draw power from the deep places of the world, moving through tunnels and caverns with supernatural ease.',
  domainSpells: [
    'magic stone', // level 1
    'create pit', // level 2 (replaces soften earth and stone)
    'spiked pit', // level 3 (replaces stone shape)
    'spike stones', // level 4
    'wall of stone', // level 5
    'hungry pit', // level 6 (replaces stoneskin)
    'elemental body IV', // level 7
    'earthquake', // level 8
    'elemental swarm', // level 9
  ],
  powers: [
    {
      name: 'Acid Dart',
      description:
        'As a standard action, you can unleash an acid dart targeting any foe within 30 feet as a ranged touch attack. This acid dart deals 1d6 points of acid damage + 1 point for every two cleric levels you possess. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Tunnel Runner',
      description:
        'At 8th level, you can move through tunnels and caves with ease. Activating this ability is a standard action. You can move across any stone surface as if under the effects of spider climb. You can also see very well in darkness, gaining darkvision out to a range of 60 feet. If you already possess darkvision, extend the range by 60 feet. While underground, you also gain an insight bonus equal to your cleric level on Stealth skill checks and an insight bonus equal to your Wisdom modifier on initiative checks. You can use this ability for 1 minute per day per cleric level you possess. These minutes do not need to be consecutive, but they must be spent in 1-minute increments.',
      levelGained: 8,
    },
  ],
  druidAllowed: true,
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

// ---- Batch array ----

export const batch_002: DomainEntry[] = [
  chaosEntropySubdomain,
  chaosProteanSubdomain,
  chaosRevelrySubdomain,
  chaosRiotSubdomain,
  chaosWhimsySubdomain,
  charmCaptivationSubdomain,
  charmLoveSubdomain,
  charmLustSubdomain,
  communityCooperationSubdomain,
  communityEducationSubdomain,
  communityFamilySubdomain,
  communityHomeSubdomain,
  darknessLossSubdomain,
  darknessMoonSubdomain,
  darknessNightSubdomain,
  deathMurderSubdomain,
  deathPlagueSubdomain,
  deathPsychopompSubdomain,
  deathUndeadSubdomain,
  destructionCatastropheSubdomain,
  destructionHatredSubdomain,
  destructionRageSubdomain,
  destructionTortureSubdomain,
  earthCavesSubdomain,
];
