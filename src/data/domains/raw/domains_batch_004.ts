// Batch 004 | first: 'Glory/Heroism Subdomain' | last: 'Law/Tyranny Subdomain' | count: 26
import { DomainEntry } from '@/types/classOptions';

// ---- Glory Subdomains (4) ----

export const gloryHeroismSubdomain: DomainEntry = {
  id: 'glory-heroism',
  name: 'Heroism Subdomain',
  description:
    'Subdomain of Glory. You inspire others to great deeds and lead by example in battle.',
  domainSpells: [
    'shield of faith', // level 1
    'bless weapon', // level 2
    'heroism', // level 3 (replaces searing light)
    'holy smite', // level 4
    'righteous might', // level 5
    'heroism (greater)', // level 6 (replaces undeath to death)
    'holy sword', // level 7
    'holy aura', // level 8
    'gate', // level 9
  ],
  powers: [
    {
      name: 'Touch of Glory',
      description:
        'You can cause your hand to shimmer with divine radiance, allowing you to touch a creature as a standard action and give it a bonus equal to your cleric level on a single Charisma-based skill check or Charisma ability check. This ability lasts for 1 hour or until the creature touched elects to apply the bonus to a roll. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Aura of Heroism (Su)',
      description:
        'At 8th level, you can emit a 30-foot aura of heroism for a number of rounds per day equal to your cleric level. Using this ability is a swift action. Allies in the area are treated as if they were under the effects of heroism. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const gloryHonorSubdomain: DomainEntry = {
  id: 'glory-honor',
  name: 'Honor Subdomain',
  description:
    'Subdomain of Glory. You embody the virtues of honor, duty, and righteous conduct.',
  domainSpells: [
    'shield of faith', // level 1
    'zone of truth', // level 2 (replaces bless weapon)
    'searing light', // level 3
    'holy smite', // level 4
    'righteous might', // level 5
    'geas/quest', // level 6 (replaces undeath to death)
    'holy sword', // level 7
    'holy aura', // level 8
    'gate', // level 9
  ],
  powers: [
    {
      name: 'Honor Bound (Su)',
      description:
        'With a touch, you can remind a creature of its duties and responsibilities, granting it a new saving throw against each enchantment (charm) or enchantment (compulsion) effect that currently affects it. If the saving throw is successful, the enchantment effect is ended. This power only affects effects that allow a save. If you fail a save against such an effect, you can use this ability as an immediate action to grant yourself an additional save. Once the target (either you or a touched creature) has made one additional save per effect, this ability has no further effect on that particular enchantment effect. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Divine Presence (Su)',
      description:
        'At 8th level, you can emit a 30-foot aura for a number of rounds per day equal to your cleric level. Allies within this aura are protected as if under a sanctuary spell. These rounds do not need to be consecutive. This aura ends immediately if the cleric or any protected ally attacks.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const gloryHubrisSubdomain: DomainEntry = {
  id: 'glory-hubris',
  name: 'Hubris Subdomain',
  description:
    'Subdomain of Glory. You revel in overreach and tempt fate by petitioning your deity for power beyond what you are due.',
  domainSpells: [
    'shield of faith', // level 1
    'bless weapon', // level 2
    'searing light', // level 3
    'hollow heroism', // level 4 (replaces holy smite)
    'righteous might', // level 5
    'undeath to death', // level 6
    'greater hollow heroism', // level 7 (replaces holy sword)
    'holy aura', // level 8
    'overwhelming presence', // level 9 (replaces gate)
  ],
  powers: [
    {
      name: 'Touch of Glory',
      description:
        'You can cause your hand to shimmer with divine radiance, allowing you to touch a creature as a standard action and give it a bonus equal to your cleric level on a single Charisma-based skill check or Charisma ability check. This ability lasts for 1 hour or until the creature touched elects to apply the bonus to a roll. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Divine Demand (Su)',
      description:
        'At 6th level, you can petition your divine patron for far greater power than you deserve. Activating this ability is a swift action that you must use as you cast a spell that has a reduced (but not negated) effect on a successful save. The saving throw DC of the spell increases by 2, and you gain a +2 bonus on caster level checks to overcome spell resistance with the spell. Any creature that succeeds at the saving throw instead avoids the effect entirely. If half or more of the targets are unaffected, you become shaken for a number of rounds equal to the spell\'s level. If all of the targets are unaffected, you instead lose the ability to cast divine spells, channel energy, and use domain powers for 1d4+1 rounds; you can end this loss as a full-round action by loudly apologizing to your patron deity as a full-round action that provokes attacks of opportunity. You can use this ability once per day at 6th level, and one additional time per day for every 4 levels beyond 6th.',
      levelGained: 6,
    },
  ],
  grantedClassSkills: ['Intimidate'],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const gloryLegendSubdomain: DomainEntry = {
  id: 'glory-legend',
  name: 'Legend Subdomain',
  description:
    'Subdomain of Glory. You inspire legends and ensure the deeds of heroes are remembered throughout the ages.',
  domainSpells: [
    'shield of faith', // level 1
    'aid', // level 2 (replaces bless weapon)
    'contagious zeal', // level 3 (replaces searing light)
    'righteous vigor', // level 4 (replaces holy smite)
    'righteous might', // level 5
    'unshakable zeal', // level 6 (replaces undeath to death)
    'holy sword', // level 7
    'holy aura', // level 8
    'gate', // level 9
  ],
  powers: [
    {
      name: 'Marked for Glory (Bonus Feat)',
      description:
        'In campaigns that use the optional hero point system, you gain Hero\'s Fortune as a bonus feat. Otherwise, you gain Marked for Glory as a bonus feat, even if you do not meet its prerequisites.',
      levelGained: 1,
    },
    {
      name: 'Witness the Legend (Su)',
      description:
        'At 8th level, as a move action, you can extol the virtues of yourself or an ally within 60 feet that you can see. This causes the target to shed light like a torch for 1 minute, and while the effect lasts, you can expend a daily use of your touch of glory domain ability as an immediate action to add 1d6 to an attack, saving throw, skill check, or ability check attempted by the target; for a roll to confirm a critical hit or save against a fear effect, you instead add 1d12. You can use this ability once per day at 8th level and one additional time per day for every 4 levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Good Subdomains (5) ----

export const goodAgathionSubdomain: DomainEntry = {
  id: 'good-agathion',
  name: 'Agathion Subdomain',
  description:
    'Subdomain of Good. You call upon the power of the agathions, the exemplars of neutral good outsiders, to protect and aid the innocent.',
  domainSpells: [
    'shield of faith', // level 1 (replaces protection from evil)
    'align weapon', // level 2 (good only)
    'tongues', // level 3 (replaces magic circle against evil)
    'holy smite', // level 4
    'dispel evil', // level 5
    'planar ally', // level 6 (replaces blade barrier; agathions only)
    'holy word', // level 7
    'holy aura', // level 8
    'summon monster IX', // level 9 (good spell only)
  ],
  powers: [
    {
      name: 'Touch of Good',
      description:
        'You can touch a creature as a standard action, granting a sacred bonus on attack rolls, skill checks, ability checks, and saving throws equal to half your cleric level (minimum 1) for 1 round. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Protective Aura (Su)',
      description:
        'At 8th level, you can emit a 30-foot protective aura as a standard action. Allies in this aura receive a +2 deflection bonus to AC and a +2 resistance bonus on all saving throws. In addition, allies in the area gain the benefits of protection from evil (although the AC bonus and saving throw bonus do not stack with those granted by this effect). You can use this ability for a number of rounds per day equal to your cleric level. These rounds do not have to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const goodArchonSubdomain: DomainEntry = {
  id: 'good-archon',
  name: 'Archon Subdomain',
  description:
    'Subdomain of Good. You call upon the lawful good archons to bring order and righteousness to bear against evil.',
  domainSpells: [
    'divine favor', // level 1 (replaces protection from evil)
    'align weapon', // level 2 (good only)
    'prayer', // level 3 (replaces magic circle against evil)
    'holy smite', // level 4
    'dispel evil', // level 5
    'planar ally', // level 6 (replaces blade barrier; archons only)
    'holy word', // level 7
    'holy aura', // level 8
    'summon monster IX', // level 9 (good spell only)
  ],
  powers: [
    {
      name: 'Touch of Good',
      description:
        'You can touch a creature as a standard action, granting a sacred bonus on attack rolls, skill checks, ability checks, and saving throws equal to half your cleric level (minimum 1) for 1 round. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Aura of Menace (Su)',
      description:
        'At 8th level, you can emit a 30-foot aura of menace as a standard action. Enemies in this aura take a –2 penalty to AC and on attacks and saves as long as they remain inside the aura. You can use this ability for a number of rounds per day equal to your cleric level. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const goodAzataSubdomain: DomainEntry = {
  id: 'good-azata',
  name: 'Azata Subdomain',
  description:
    'Subdomain of Good. You draw power from the chaotic good azatas, celestials who embody freedom, joy, and the joy of living.',
  domainSpells: [
    'expeditious retreat', // level 1 (replaces protection from evil)
    'align weapon', // level 2 (good only)
    'fly', // level 3 (replaces magic circle against evil)
    'holy smite', // level 4
    'dispel evil', // level 5
    'planar ally', // level 6 (replaces blade barrier; azatas only)
    'holy word', // level 7
    'holy aura', // level 8
    'summon monster IX', // level 9 (good spell only)
  ],
  powers: [
    {
      name: "Elysium's Call (Su)",
      description:
        'With a touch, you can imbue creatures with the spirit of Elysium, lifting their spirits and freeing them from bonds. The creatures touched can immediately reroll any failed saving throws against spells and spell-like abilities of the enchantment (charm) and enchantment (compulsion) subschools. In addition, affected creatures receive a +2 sacred bonus on such saving throws and on CMB checks to escape a grapple, and they can ignore up to 5 feet of difficult terrain each round. These bonuses last for a number of rounds equal to 1/2 your cleric level (minimum 1). You can use this ability for a number of rounds per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Holy Lance (Su)',
      description:
        'At 8th level, you can give a weapon you touch the holy special weapon quality for a number of rounds equal to half your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const goodFriendshipSubdomain: DomainEntry = {
  id: 'good-friendship',
  name: 'Friendship Subdomain',
  description:
    'Subdomain of Good. You celebrate the bonds between people and use those bonds to strengthen and protect your allies.',
  domainSpells: [
    'protection from evil', // level 1
    'shield other', // level 2 (replaces align weapon)
    'magic circle against evil', // level 3
    'holy smite', // level 4
    'telepathic bond', // level 5 (replaces dispel evil)
    'blade barrier', // level 6
    'holy word', // level 7
    'holy aura', // level 8
    'summon monster IX', // level 9 (good spell only)
  ],
  powers: [
    {
      name: 'Powerful Bond (Su)',
      description:
        'As a free action, you can open a link to communicate telepathically with a single ally within 60 feet. The telepathic link is two-way and lasts for 1 minute. Unlike normal telepathy, this ability requires a shared language. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Holy Lance (Su)',
      description:
        'At 8th level, you can give a weapon you touch the holy special weapon quality for a number of rounds equal to half your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const goodRedemptionSubdomain: DomainEntry = {
  id: 'good-redemption',
  name: 'Redemption Subdomain',
  description:
    'Subdomain of Good. You believe that all creatures deserve a chance at redemption and use your power to turn evil hearts toward the light.',
  domainSpells: [
    'protection from evil', // level 1
    'qualm', // level 2 (replaces align weapon)
    'magic circle against evil', // level 3
    'forced repentance', // level 4 (replaces holy smite)
    'atonement', // level 5 (replaces dispel evil)
    'blade barrier', // level 6
    'holy word', // level 7
    'holy aura', // level 8
    'summon monster IX', // level 9 (good spell only)
  ],
  powers: [
    {
      name: 'Touch of Good',
      description:
        'You can touch a creature as a standard action, granting a sacred bonus on attack rolls, skill checks, ability checks, and saving throws equal to half your cleric level (minimum 1) for 1 round. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Aura of Sanctification (Su)',
      description:
        'At 8th level, as an immediate action, you can emit a 30-foot-radius aura of sanctification for a number of rounds per day equal to your cleric level. These rounds do not need to be consecutive. Within this aura, effects that are specifically harmful to good-aligned creatures are inverted so that they no longer harm good creatures and instead harm evil creatures. Similarly, effects that are specifically beneficial to evil creatures instead become beneficial only to good creatures.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Healing Subdomains (3) ----

export const healingMedicineSubdomain: DomainEntry = {
  id: 'healing-medicine',
  name: 'Medicine Subdomain',
  description:
    'Subdomain of Healing. Your deity guides your healing hands, granting you miraculous skill with mundane medicine and the Heal skill.',
  domainSpells: [
    'diagnose disease', // level 1 (replaces cure light wounds)
    'placebo effect', // level 2 (replaces cure moderate wounds)
    'cure serious wounds', // level 3
    'cure critical wounds', // level 4
    'breath of life', // level 5
    'heal', // level 6
    'regenerate', // level 7
    'cure critical wounds (mass)', // level 8
    'heal (mass)', // level 9
  ],
  powers: [
    {
      name: 'Blessed Surgery (Su)',
      description:
        'Your divine patron guides your healing hands, allowing you to perform minor miracles with mundane cures. You can use this ability as a free action when using the Heal skill in order to roll the check twice and take the higher result. When you\'re using this ability, any use of the Heal skill requiring 1 hour instead takes at most 1 minute. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: "Healer's Blessing (Su)",
      description:
        'At 6th level, all of your cure spells are treated as if they were empowered, increasing the amount of damage healed by half (+50%). This does not apply to damage dealt to undead with a cure spell. This does not stack with the Empower Spell metamagic feat.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const healingRestorationSubdomain: DomainEntry = {
  id: 'healing-restoration',
  name: 'Restoration Subdomain',
  description:
    'Subdomain of Healing. You channel your deity\'s healing energy to restore creatures to their natural state, curing conditions and ailments.',
  domainSpells: [
    'cure light wounds', // level 1
    'remove disease', // level 2 (replaces cure moderate wounds)
    'cure serious wounds', // level 3
    'neutralize poison', // level 4 (replaces cure critical wounds)
    'break enchantment', // level 5 (replaces breath of life)
    'heal', // level 6
    'regenerate', // level 7
    'cure critical wounds (mass)', // level 8
    'heal (mass)', // level 9
  ],
  powers: [
    {
      name: 'Restorative Touch (Su)',
      description:
        'You can touch a creature, letting the healing power of your deity flow through you to relieve the creature of a minor condition. Your touch can remove the dazed, fatigued, shaken, sickened, or staggered condition. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: "Healer's Blessing (Su)",
      description:
        'At 6th level, all of your cure spells are treated as if they were empowered, increasing the amount of damage healed by half (+50%). This does not apply to damage dealt to undead with a cure spell. This does not stack with the Empower Spell metamagic feat.',
      levelGained: 6,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const healingResurrectionSubdomain: DomainEntry = {
  id: 'healing-resurrection',
  name: 'Resurrection Subdomain',
  description:
    'Subdomain of Healing. You channel the ultimate healing power of your deity, restoring life itself to those who have fallen.',
  domainSpells: [
    'cure light wounds', // level 1
    'cure moderate wounds', // level 2
    'cure serious wounds', // level 3
    'cure critical wounds', // level 4
    'raise dead', // level 5 (replaces breath of life)
    'heal', // level 6
    'resurrection', // level 7 (replaces regenerate)
    'cure critical wounds (mass)', // level 8
    'true resurrection', // level 9 (replaces heal (mass))
  ],
  powers: [
    {
      name: 'Rebuke Death (Sp)',
      description:
        'You can touch a living creature as a standard action, causing it to heal 1d4 points of damage plus 1 point for every two cleric levels you possess. You can only use this ability on a creature that is below 0 hit points. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Gift of Life (Su)',
      description:
        'At 8th level, you can touch a creature that has died within the past minute to grant it a few moments of life. The dead creature returns to life for a number of rounds equal to your cleric level. Creatures returned to life in this way have a number of hit points equal to half your cleric level, and continue to be affected by any still-active spells, conditions, or afflictions present at the time of their death. At the end of this time, the creature dies again. The creature is free to act as it sees fit during this time. You are granted no control over it. You can use this power once per day at 8th level, plus one additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Knowledge Subdomains (5) ----

export const knowledgeAeonSubdomain: DomainEntry = {
  id: 'knowledge-aeon',
  name: 'Aeon Subdomain',
  description:
    'Subdomain of Knowledge. You draw upon the alien wisdom of the aeons, inscrutable outsiders who seek to maintain the balance of existence.',
  domainSpells: [
    'sanctuary', // level 1 (replaces comprehend languages)
    'detect thoughts', // level 2
    'speak with dead', // level 3
    'divination', // level 4
    'telepathic bond', // level 5 (replaces true seeing)
    'planar binding', // level 6 (replaces find the path; aeons only)
    'legend lore', // level 7
    'discern location', // level 8
    'foresight', // level 9
  ],
  powers: [
    {
      name: 'Lore Keeper (Sp)',
      description:
        'You can touch a creature to learn about its capabilities and weaknesses. With a successful touch attack, you gain information as if you made the appropriate Knowledge skill check with a result equal to 15 + your cleric level + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Void Form (Su)',
      description:
        'At 6th level, you can become semi-tangible as a standard action. While in this form, you are immune to critical hits and gain a +1 deflection bonus to AC. This bonus increases by 1 at 8th level and every 4 levels thereafter. You can use this power a number of rounds per day equal to your cleric level. These rounds need not be consecutive.',
      levelGained: 6,
    },
  ],
  grantedClassSkills: [
    'Knowledge (arcana)',
    'Knowledge (dungeoneering)',
    'Knowledge (engineering)',
    'Knowledge (geography)',
    'Knowledge (history)',
    'Knowledge (local)',
    'Knowledge (nature)',
    'Knowledge (nobility)',
    'Knowledge (planes)',
    'Knowledge (religion)',
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const knowledgeEducationSubdomain: DomainEntry = {
  id: 'knowledge-education',
  name: 'Education Subdomain',
  description:
    'Subdomain of Knowledge. You spread knowledge and empower others through teaching, helping allies learn from both triumphs and failures.',
  domainSpells: [
    'know the enemy', // level 1 (replaces comprehend languages)
    "fox's cunning", // level 2 (replaces detect thoughts)
    'speak with dead', // level 3
    'divination', // level 4
    'true seeing', // level 5
    'battlemind link', // level 6 (replaces find the path)
    'legend lore', // level 7
    'circle of clarity', // level 8 (replaces discern location)
    'foresight', // level 9
  ],
  powers: [
    {
      name: 'Lore Keeper (Sp)',
      description:
        'You can touch a creature to learn about its capabilities and weaknesses. With a successful touch attack, you gain information as if you made the appropriate Knowledge skill check with a result equal to 15 + your cleric level + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Teaching Moment (Su)',
      description:
        'At 8th level, when you or an ally within 30 feet rolls a natural 1 or a natural 20 on an attack roll, an ability check, a skill check, or a saving throw, as an immediate action you can grant all allies within 30 feet special insights that help them overcome similar challenges. Affected creatures can roll twice and take the better result once during the next minute. You can use this ability once per day at 8th level, plus one additional time per day for every 4 cleric levels beyond 8th.',
      levelGained: 8,
    },
  ],
  grantedClassSkills: ['Knowledge (local)'],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const knowledgeEspionageSubdomain: DomainEntry = {
  id: 'knowledge-espionage',
  name: 'Espionage Subdomain',
  description:
    'Subdomain of Knowledge. You specialize in subterfuge and deception, using your deity\'s insight to maintain false identities and protect secrets.',
  domainSpells: [
    'comprehend languages', // level 1
    'anonymous interaction', // level 2 (replaces detect thoughts)
    'speak with dead', // level 3
    'zone of silence', // level 4 (replaces divination)
    'true seeing', // level 5
    'find the path', // level 6
    'legend lore', // level 7
    'mind blank', // level 8 (replaces discern location)
    'foresight', // level 9
  ],
  powers: [
    {
      name: 'Deep Cover (Su)',
      description:
        'When you prepare your spells, you can also choose one cover identity—whether that of a real person or a fictitious one. You can assume the disguise of your cover identity in half the normal amount of time. When targeted by a spell or effect that would compromise your chosen disguise (such as detect evil, detect thoughts, or zone of truth), as an immediate action you can force the creature using the ability to attempt a Will save (DC = 10 + 1/2 your cleric level + your Wisdom modifier). If the creature fails, it gains false information in keeping with your cover identity. You can use this false information ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Remote Viewing (Sp)',
      description:
        'Starting at 6th level, you can use clairvoyance/clairaudience at will as a spell-like ability using your cleric level as the caster level. You can use this ability for a number of rounds per day equal to your cleric level. These rounds do not need to be consecutive.',
      levelGained: 6,
    },
  ],
  grantedClassSkills: ['Knowledge (local)'],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const knowledgeMemorySubdomain: DomainEntry = {
  id: 'knowledge-memory',
  name: 'Memory Subdomain',
  description:
    'Subdomain of Knowledge. You draw upon the power of memory and recollection, helping creatures recall lost knowledge and manipulating memories.',
  domainSpells: [
    'comprehend languages', // level 1
    'memory lapse', // level 2 (replaces detect thoughts)
    'speak with dead', // level 3
    'divination', // level 4
    'true seeing', // level 5
    'modify memory', // level 6 (replaces find the path)
    'legend lore', // level 7
    'moment of prescience', // level 8 (replaces discern location)
    'foresight', // level 9
  ],
  powers: [
    {
      name: 'Recall (Su)',
      description:
        'With a touch, you can cause a creature to recall some bit of forgotten lore or information. The creature can retry any Knowledge skill check it has made within the past minute, gaining an insight bonus on the check equal to your Wisdom modifier. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Remote Viewing (Sp)',
      description:
        'Starting at 6th level, you can use clairvoyance/clairaudience at will as a spell-like ability using your cleric level as the caster level. You can use this ability for a number of rounds per day equal to your cleric level. These rounds do not need to be consecutive.',
      levelGained: 6,
    },
  ],
  grantedClassSkills: [
    'Knowledge (arcana)',
    'Knowledge (dungeoneering)',
    'Knowledge (engineering)',
    'Knowledge (geography)',
    'Knowledge (history)',
    'Knowledge (local)',
    'Knowledge (nature)',
    'Knowledge (nobility)',
    'Knowledge (planes)',
    'Knowledge (religion)',
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const knowledgeThoughtSubdomain: DomainEntry = {
  id: 'knowledge-thought',
  name: 'Thought Subdomain',
  description:
    'Subdomain of Knowledge. You delve into the minds of those around you, reading thoughts and broadening your mental awareness.',
  domainSpells: [
    'comprehend languages', // level 1
    'detect thoughts', // level 2
    'seek thoughts', // level 3 (replaces speak with dead)
    'divination', // level 4
    'telepathic bond', // level 5 (replaces true seeing)
    'find the path', // level 6
    'legend lore', // level 7
    'mind blank', // level 8 (replaces discern location)
    'foresight', // level 9
  ],
  powers: [
    {
      name: 'Lore Keeper (Sp)',
      description:
        'You can touch a creature to learn about its capabilities and weaknesses. With a successful touch attack, you gain information as if you made the appropriate Knowledge skill check with a result equal to 15 + your cleric level + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Read Minds (Su)',
      description:
        'At 8th level, you can broaden your mental spectrum to encompass those around you. Doing so allows you to read the mind of every creature within 30 feet as if you had cast detect thoughts. This ability allows you to read the surface thoughts of any creature that you are aware of after only 1 round of concentration. Creatures can attempt a Will save (DC = 10 + 1/2 your cleric level + your Wisdom modifier) to negate the effect. You can use this ability for a number of rounds per day equal to your cleric level. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  grantedClassSkills: [
    'Knowledge (arcana)',
    'Knowledge (dungeoneering)',
    'Knowledge (engineering)',
    'Knowledge (geography)',
    'Knowledge (history)',
    'Knowledge (local)',
    'Knowledge (nature)',
    'Knowledge (nobility)',
    'Knowledge (planes)',
    'Knowledge (religion)',
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Law Subdomains (9) ----

export const lawArchonSubdomain: DomainEntry = {
  id: 'law-archon',
  name: 'Archon Subdomain',
  description:
    'Subdomain of Law. You draw upon the power of the archons, lawful good outsiders who serve as paragons of law and righteousness.',
  domainSpells: [
    'divine favor', // level 1 (replaces protection from chaos)
    'align weapon', // level 2 (law only)
    'prayer', // level 3 (replaces magic circle against chaos)
    "order's wrath", // level 4
    'dispel chaos', // level 5
    'planar ally', // level 6 (replaces hold monster; archons only)
    'dictum', // level 7
    'shield of law', // level 8
    'summon monster IX', // level 9 (law spell only)
  ],
  powers: [
    {
      name: 'Touch of Law',
      description:
        'You can touch a willing creature as a standard action, infusing it with the power of divine order and allowing it to act with confidence. Until the end of its next turn, all attack rolls, skill checks, ability checks, and saving throws it makes are treated as if the natural d20 roll resulted in an 11. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Aura of Menace (Su)',
      description:
        'At 8th level, you can emit a 30-foot aura of menace as a standard action. Enemies in this aura take a –2 penalty to AC and on attacks and saves as long as they remain inside the aura. You can use this ability for a number of rounds per day equal to your cleric level. These rounds do not need to be consecutive.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const lawDevilSubdomain: DomainEntry = {
  id: 'law-devil',
  name: 'Devil Subdomain',
  description:
    'Subdomain of Law. You draw upon the power of the devils, lawful evil outsiders who enforce contracts and corrupt mortal souls.',
  domainSpells: [
    'command', // level 1 (replaces protection from chaos)
    'align weapon', // level 2 (law only)
    'suggestion', // level 3 (replaces magic circle against chaos)
    "order's wrath", // level 4
    'dispel chaos', // level 5
    'planar binding', // level 6 (replaces hold monster; devils only)
    'dictum', // level 7
    'shield of law', // level 8
    'summon monster IX', // level 9 (law spell only)
  ],
  powers: [
    {
      name: "Hell's Corruption (Su)",
      description:
        'You can cause a creature to become more susceptible to corruption as a melee touch attack. Creatures touched take a –2 penalty on all saving throws and must roll all opposed skill checks twice, taking the worse result. This effect lasts for a number of rounds equal to 1/2 your cleric level (minimum 1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Staff of Order (Su)',
      description:
        'At 8th level, you can give a weapon you touch the axiomatic special weapon quality for a number of rounds equal to half your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const lawInevitableSubdomain: DomainEntry = {
  id: 'law-inevitable',
  name: 'Inevitable Subdomain',
  description:
    'Subdomain of Law. You draw upon the power of the inevitables, outsiders created to enforce universal laws and ensure cosmic order.',
  domainSpells: [
    'protection from chaos', // level 1
    'align weapon', // level 2 (law only)
    'command undead', // level 3 (replaces magic circle against chaos)
    "order's wrath", // level 4
    'command (greater)', // level 5 (replaces dispel chaos)
    'planar binding', // level 6 (replaces hold monster; inevitables only)
    'dictum', // level 7
    'shield of law', // level 8
    'summon monster IX', // level 9 (law spell only)
  ],
  powers: [
    {
      name: 'Command (Su)',
      description:
        'As a standard action, you can give a creature an emotionless yet undeniable order, as per the spell command. A Will save negates this effect. You cannot target a creature more than once per day with this ability. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Staff of Order (Su)',
      description:
        'At 8th level, you can give a weapon you touch the axiomatic special weapon quality for a number of rounds equal to half your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const lawJudgmentSubdomain: DomainEntry = {
  id: 'law-judgment',
  name: 'Judgment Subdomain',
  description:
    'Subdomain of Law. You embody divine justice, empowering your spells against those who have wronged you.',
  domainSpells: [
    'protection from chaos', // level 1
    'castigate', // level 2 (replaces align weapon)
    'magic circle against chaos', // level 3
    'rebuke', // level 4 (replaces order's wrath)
    'mark of justice', // level 5 (replaces dispel chaos)
    'hold monster', // level 6
    'dictum', // level 7
    'shield of law', // level 8
    'summon monster IX', // level 9 (law spell only)
  ],
  powers: [
    {
      name: 'Chastisement (Su)',
      description:
        'As a standard action, you can cast a strengthened spell against a creature that damaged you since your last turn. The spell is cast at +1 caster level against that creature. Area-of-effect spells may not be used with this ability, but spells that affect multiple targets may be. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Staff of Order (Su)',
      description:
        'At 8th level, you can give a weapon you touch the axiomatic special weapon quality for a number of rounds equal to half your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const lawKytonSubdomain: DomainEntry = {
  id: 'law-kyton',
  name: 'Kyton Subdomain',
  description:
    'Subdomain of Law. You draw upon the power of the kytons, lawful evil outsiders who revel in pain and transform suffering into strength.',
  domainSpells: [
    'delay pain', // level 1 (replaces protection from chaos)
    'instrument of agony', // level 2 (replaces align weapon)
    'agonize', // level 3 (replaces magic circle against chaos)
    "order's wrath", // level 4
    'symbol of pain', // level 5 (replaces dispel chaos)
    'hold monster', // level 6
    'dictum', // level 7
    'shield of law', // level 8
    'summon monster IX', // level 9 (law spell only)
  ],
  powers: [
    {
      name: 'Touch of Law',
      description:
        'You can touch a willing creature as a standard action, infusing it with the power of divine order and allowing it to act with confidence. Until the end of its next turn, all attack rolls, skill checks, ability checks, and saving throws it makes are treated as if the natural d20 roll resulted in an 11. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Pain Is Power (Su)',
      description:
        'At 8th level, after taking damage from any source, you may attempt a DC 25 concentration check as an immediate action. If you succeed, you gain the benefits of a blessing of fervor spell for a number of rounds equal to 1/2 your cleric level. You can use this ability once per day at 8th level, and one additional time per day for every 4 additional cleric levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const lawLegislationSubdomain: DomainEntry = {
  id: 'law-legislation',
  name: 'Legislation Subdomain',
  description:
    'Subdomain of Law. You enforce the letter of the law, commanding creatures to abstain from certain actions and punishing transgressors.',
  domainSpells: [
    'forbid action', // level 1 (replaces protection from chaos)
    'align weapon', // level 2 (law only)
    'magic circle against chaos', // level 3
    "order's wrath", // level 4
    'forbid action (greater)', // level 5 (replaces dispel chaos)
    'hold monster', // level 6
    'dictum', // level 7
    'shield of law', // level 8
    'hold monster (mass)', // level 9 (replaces summon monster IX)
  ],
  powers: [
    {
      name: 'Prohibition (Su)',
      description:
        'As a standard action, you can command a creature within 30 feet to refrain from committing a particular action. This is a language-dependent effect. If the creature performs the named action before the beginning of your next turn, it takes 1d6 points of damage + 1 point for every 2 cleric levels you possess. You can use this ability a number of times per day equal to 3 + your Wisdom modifier. If you also possess the Rune domain, you may attach a spell effect to the prohibition that triggers when the prohibited action is performed.',
      levelGained: 1,
    },
    {
      name: 'Staff of Order (Su)',
      description:
        'At 8th level, you can give a weapon you touch the axiomatic special weapon quality for a number of rounds equal to half your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  grantedClassSkills: ['Knowledge (local)'],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const lawLoyaltySubdomain: DomainEntry = {
  id: 'law-loyalty',
  name: 'Loyalty Subdomain',
  description:
    'Subdomain of Law. You reward those who demonstrate unwavering loyalty and protect your allies from effects that would compromise their dedication.',
  domainSpells: [
    'remove fear', // level 1 (replaces protection from chaos)
    'align weapon', // level 2 (law only)
    'magic circle against chaos', // level 3
    "order's wrath", // level 4
    'command (greater)', // level 5 (replaces dispel chaos)
    'hold monster', // level 6
    'dictum', // level 7
    'shield of law', // level 8
    'summon monster IX', // level 9 (law spell only)
  ],
  powers: [
    {
      name: 'Touch of Loyalty (Su)',
      description:
        'As a standard action, you can touch a willing creature, granting it a +4 sacred bonus on saving throws to resist charm, compulsion, and fear effects for 1 hour. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Staff of Order (Su)',
      description:
        'At 8th level, you can give a weapon you touch the axiomatic special weapon quality for a number of rounds equal to half your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const lawSlaverySubdomain: DomainEntry = {
  id: 'law-slavery',
  name: 'Slavery Subdomain',
  description:
    'Subdomain of Law. You use the power of your deity to dominate and control others, bending their will to your own.',
  domainSpells: [
    'charm person', // level 1 (replaces protection from chaos)
    'align weapon', // level 2 (law only)
    'magic circle against chaos', // level 3
    "order's wrath", // level 4
    'dominate person', // level 5 (replaces dispel chaos)
    'hold monster', // level 6
    'dictum', // level 7
    'binding', // level 8 (replaces shield of law)
    'summon monster IX', // level 9 (law spell only)
  ],
  powers: [
    {
      name: 'Touch of Law',
      description:
        'You can touch a willing creature as a standard action, infusing it with the power of divine order and allowing it to act with confidence. Until the end of its next turn, all attack rolls, skill checks, ability checks, and saving throws it makes are treated as if the natural d20 roll resulted in an 11. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: "Master's Yoke (Su)",
      description:
        'At 8th level, you can attempt to assert your dominance over any visible creature within 30 feet by declaring the target your property. The target can resist this effect with a successful Will save (DC = 10 + 1/2 your cleric level + your Wisdom modifier). If the target fails the save, it is affected as if by dominate monster for a number of rounds equal to 1/2 your cleric level, save that the target can choose to ignore any order you give and instead take 2 points of Constitution damage and become staggered for 1 round. You can use this ability once per day at 8th level, and an additional time per day for every 4 levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const lawTyrannySubdomain: DomainEntry = {
  id: 'law-tyranny',
  name: 'Tyranny Subdomain',
  description:
    'Subdomain of Law. You rule through fear and overwhelming force, bending others to your will through absolute authority.',
  domainSpells: [
    'command', // level 1 (replaces protection from chaos)
    'align weapon', // level 2 (law only)
    'bestow curse', // level 3 (replaces magic circle against chaos)
    "order's wrath", // level 4
    'dispel chaos', // level 5
    'hold monster', // level 6
    'symbol of persuasion', // level 7 (replaces dictum)
    'shield of law', // level 8
    'summon monster IX', // level 9 (law spell only)
  ],
  powers: [
    {
      name: 'Touch of Law',
      description:
        'You can touch a willing creature as a standard action, infusing it with the power of divine order and allowing it to act with confidence. Until the end of its next turn, all attack rolls, skill checks, ability checks, and saving throws it makes are treated as if the natural d20 roll resulted in an 11. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.',
      levelGained: 1,
    },
    {
      name: 'Tyrannical Strike (Su)',
      description:
        'At 8th level, as an immediate action upon successfully hitting an opponent with a melee attack, you can choose to forgo the damage (but not any other effects of the attack) to instead affect the creature you hit as a greater command spell, with a caster level equal to your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every 4 levels beyond 8th.',
      levelGained: 8,
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

// ---- Batch Array ----

export const batch_004: DomainEntry[] = [
  gloryHeroismSubdomain,
  gloryHonorSubdomain,
  gloryHubrisSubdomain,
  gloryLegendSubdomain,
  goodAgathionSubdomain,
  goodArchonSubdomain,
  goodAzataSubdomain,
  goodFriendshipSubdomain,
  goodRedemptionSubdomain,
  healingMedicineSubdomain,
  healingRestorationSubdomain,
  healingResurrectionSubdomain,
  knowledgeAeonSubdomain,
  knowledgeEducationSubdomain,
  knowledgeEspionageSubdomain,
  knowledgeMemorySubdomain,
  knowledgeThoughtSubdomain,
  lawArchonSubdomain,
  lawDevilSubdomain,
  lawInevitableSubdomain,
  lawJudgmentSubdomain,
  lawKytonSubdomain,
  lawLegislationSubdomain,
  lawLoyaltySubdomain,
  lawSlaverySubdomain,
  lawTyrannySubdomain,
];
