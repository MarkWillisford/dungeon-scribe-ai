// Batch 001 | first: 'Ancestor Totem, Greater' | last: 'Hive Totem Toxicity' | count: 83
// Source: https://www.d20pfsrd.com/classes/core-classes/barbarian/rage-powers/
// RagePowerDocument = ClassOptionBase — using base type directly

import { ClassOptionBase } from '@/types/classOptions';

export const ancestorTotemGreater: ClassOptionBase = {
  id: 'ancestor-totem-greater',
  name: 'Ancestor Totem, Greater',
  description:
    "Gain a +6 Insight Bonus to a skill while raging, and you may use it while raging even if you normally couldn't. Once per rage you may spend a round of rage to reroll a skill check of that skill.",
  prerequisites: [
    { type: 'level', minimum: 10 },
    { type: 'special', description: 'ancestor totem rage power' },
  ],
  source: 'pf1e-ppc-wo',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const ancestorTotemLesser: ClassOptionBase = {
  id: 'ancestor-totem-lesser',
  name: 'Ancestor Totem, Lesser',
  description:
    'Gain a +2 Insight Bonus to a skill (that you can use while raging) while raging.',
  source: 'pf1e-ppc-wo',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const ancestorTotem: ClassOptionBase = {
  id: 'ancestor-totem',
  name: 'Ancestor Totem',
  description:
    "Gain a +4 Insight Bonus to a skill while raging, and you may use it while raging even if you normally couldn't.",
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'lesser ancestor totem rage power' },
  ],
  source: 'pf1e-ppc-wo',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const animalFury: ClassOptionBase = {
  id: 'animal-fury',
  name: 'Animal Fury',
  description: 'Gain a bite attack while raging.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const armorRipper: ClassOptionBase = {
  id: 'armor-ripper',
  name: 'Armor Ripper',
  description:
    'Gain a bonus to Sunder checks with your natural attacks while raging.',
  source: 'pf1e-ppc-botm',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const atavismTotemGreater: ClassOptionBase = {
  id: 'atavism-totem-greater',
  name: 'Atavism Totem, Greater',
  description: 'You gain the trample ability.',
  prerequisites: [
    { type: 'level', minimum: 10 },
    { type: 'special', description: 'atavism totem rage power' },
  ],
  source: 'pf1e-prg-vc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const atavismTotemLesser: ClassOptionBase = {
  id: 'atavism-totem-lesser',
  name: 'Atavism Totem, Lesser',
  description:
    'You gain a bite attack; or if you already have a bite attack, it deals damage as if you were one size larger.',
  source: 'pf1e-prg-vc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const atavismTotem: ClassOptionBase = {
  id: 'atavism-totem',
  name: 'Atavism Totem',
  description: 'You gain the ferocity ability.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'lesser atavism totem rage power' },
  ],
  source: 'pf1e-prg-vc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const auspiciousMark: ClassOptionBase = {
  id: 'auspicious-mark',
  name: 'Auspicious Mark',
  description: 'Gain a bonus on a roll once per rage.',
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const battleRoar: ClassOptionBase = {
  id: 'battle-roar',
  name: 'Battle Roar',
  description:
    'You deal an additional 1d6 points of sonic damage to an opponent you successfully demoralized using intimidating glare.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'intimidating glare rage power' },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const beastTotemGreater: ClassOptionBase = {
  id: 'beast-totem-greater',
  name: 'Beast Totem, Greater',
  description: 'Gain a pounce attack while raging.',
  prerequisites: [
    { type: 'level', minimum: 10 },
    { type: 'special', description: 'beast totem rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const beastTotemLesser: ClassOptionBase = {
  id: 'beast-totem-lesser',
  name: 'Beast Totem, Lesser',
  description: 'Gain two claw attacks while raging.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const beastTotem: ClassOptionBase = {
  id: 'beast-totem',
  name: 'Beast Totem',
  description: 'Gain a natural armor bonus while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'lesser beast totem rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const bestialClimber: ClassOptionBase = {
  id: 'bestial-climber',
  name: 'Bestial Climber',
  description: 'Climb at your normal land speed while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'raging climber rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const bestialLeaper: ClassOptionBase = {
  id: 'bestial-leaper',
  name: 'Bestial Leaper',
  description: 'Take a standard action while moving during a rage.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'raging leaper rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const bestialSwimmer: ClassOptionBase = {
  id: 'bestial-swimmer',
  name: 'Bestial Swimmer',
  description: 'Swim at your normal land speed while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'raging swimmer rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const bleedingBlow: ClassOptionBase = {
  id: 'bleeding-blow',
  name: 'Bleeding Blow',
  description: 'Deal bleed damage with your powerful blows.',
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'powerful blow rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const bloodyBite: ClassOptionBase = {
  id: 'bloody-bite',
  name: 'Bloody Bite',
  description:
    'Your bite attack deals 1d6 points of bleed damage in addition to its other effects.',
  prerequisites: [
    { type: 'race', raceName: 'Half-orc' },
    {
      type: 'special',
      description: 'animal fury rage power or a natural bite attack',
    },
  ],
  source: 'pf1e-ppc-aoe',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const bloodyFist: ClassOptionBase = {
  id: 'bloody-fist',
  name: 'Bloody Fist',
  description:
    "Once per rage, the barbarian may attempt to punch through an opponent's flesh and rip out one of its vital organs. In order to do so, the barbarian must confirm a critical hit against an opponent with a natural attack or unarmed strike. The barbarian deals damage as normal for a critical hit and the opponent must succeed at a Fortitude save (DC = 10 + 1/2 the barbarian's class level + the barbarian's Strength modifier) or take 1d4 points of Constitution damage as one of its vital organs is ripped free from its body.",
  prerequisites: [{ type: 'level', minimum: 12 }],
  source: 'pf1e-pzo9437',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const boarsCharge: ClassOptionBase = {
  id: 'boars-charge',
  name: "Boar's Charge",
  description:
    'Automatically score critical hits with your gore attack while raging.',
  prerequisites: [{ type: 'level', minimum: 12 }],
  source: 'pf1e-ppc-botm',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const boastingTaunt: ClassOptionBase = {
  id: 'boasting-taunt',
  name: 'Boasting Taunt',
  description: 'Force an enemy to attack the barbarian.',
  prerequisites: [{ type: 'level', minimum: 6 }],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const bodyBludgeon: ClassOptionBase = {
  id: 'body-bludgeon',
  name: 'Body Bludgeon',
  description: 'Beat a foe with another creature.',
  prerequisites: [{ type: 'level', minimum: 10 }],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const brawler: ClassOptionBase = {
  id: 'brawler',
  name: 'Brawler',
  description: 'Gain Improved Unarmed Strike while raging.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const brawlerGreater: ClassOptionBase = {
  id: 'brawler-greater',
  name: 'Brawler, Greater',
  description: 'Gain Two-Weapon Fighting while raging.',
  prerequisites: [{ type: 'special', description: 'brawler rage power' }],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const breathtaker: ClassOptionBase = {
  id: 'breathtaker',
  name: 'Breathtaker',
  description:
    "While raging, whenever you make a successful melee attack against an opponent that is holding its breath, in addition to any other effects caused by that attack, the opponent loses a number of rounds of breath equal to your Strength modifier.",
  source: 'pf1e-ppc-potr',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const celestialTotemGreater: ClassOptionBase = {
  id: 'celestial-totem-greater',
  name: 'Celestial Totem, Greater',
  description:
    'Gain SR while raging equal to 11 + barbarian class level against spells with the evil descriptor; also gain +2 bonus on all saves against spells and effects from evil creatures.',
  prerequisites: [
    { type: 'level', minimum: 12 },
    { type: 'special', description: 'celestial totem rage power' },
  ],
  source: 'pf1e-ppc-cop',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const celestialTotemLesser: ClassOptionBase = {
  id: 'celestial-totem-lesser',
  name: 'Celestial Totem, Lesser',
  description:
    'Whenever subjected to a spell that cures hp damage, heal 1 additional hp per caster level. In the case of non-spell healing effects (such as channeled energy or lay on hands), heal a number of additional hp equal to the class level of the character performing the magical healing.',
  source: 'pf1e-ppc-cop',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const celestialTotem: ClassOptionBase = {
  id: 'celestial-totem',
  name: 'Celestial Totem',
  description:
    "Gain a halo that shines as daylight and triggers invisibility purge (only reveals non-good creatures) in the barbarian's square and each adjacent square.",
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'lesser celestial totem rage power' },
  ],
  source: 'pf1e-ppc-cop',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const chaosTotemGreater: ClassOptionBase = {
  id: 'chaos-totem-greater',
  name: 'Chaos Totem, Greater',
  description: 'Gain DR/lawful and weapons count as chaotic while raging.',
  prerequisites: [
    { type: 'level', minimum: 10 },
    { type: 'special', description: 'chaos totem rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const chaosTotemLesser: ClassOptionBase = {
  id: 'chaos-totem-lesser',
  name: 'Chaos Totem, Lesser',
  description:
    'Gain a deflection bonus to AC and a resistance bonus against lawful spells and creatures while raging.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const chaosTotem: ClassOptionBase = {
  id: 'chaos-totem',
  name: 'Chaos Totem',
  description:
    'Gain a bonus to Escape Artist and a chance to avoid critical hits while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'lesser chaos totem rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const clearMind: ClassOptionBase = {
  id: 'clear-mind',
  name: 'Clear Mind',
  description: 'Reroll a failed Will save once per rage.',
  prerequisites: [{ type: 'level', minimum: 8 }],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const comeAndGetMe: ClassOptionBase = {
  id: 'come-and-get-me',
  name: 'Come and Get Me',
  description:
    'Provoke attacks of opportunity from all enemies to gain extra attacks while raging.',
  prerequisites: [{ type: 'level', minimum: 12 }],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const cripplingBlow: ClassOptionBase = {
  id: 'crippling-blow',
  name: 'Crippling Blow',
  description:
    'Deal Strength or Dexterity damage with your powerful blows while raging.',
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'powerful blow rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const cultTotemGreater: ClassOptionBase = {
  id: 'cult-totem-greater',
  name: 'Cult Totem, Greater',
  description:
    'While the barbarian is raging, when she takes hit point damage that would render her dying or dead, she remains conscious and raging until the end of her next turn after taking that damage, though she is disabled during that turn. She becomes dying or dead at the end of her next turn as normal for her current hit point total. This ability has no effect if the barbarian dies from a cause other than hit point damage, such as from a death effect or if her Constitution damage exceeds her Constitution score.',
  prerequisites: [
    { type: 'level', minimum: 10 },
    { type: 'special', description: 'lesser cult totem rage power' },
    { type: 'special', description: 'cult totem rage power' },
  ],
  source: 'pf1e-pzo1135',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const cultTotemLesser: ClassOptionBase = {
  id: 'cult-totem-lesser',
  name: 'Cult Totem, Lesser',
  description:
    "While the barbarian is raging, any morale bonuses or bonuses for flanking she gains on attack rolls are added to her damage rolls instead of her attack rolls. They are still morale bonuses, and they don't stack with other morale bonuses on damage rolls.",
  source: 'pf1e-pzo1135',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const cultTotem: ClassOptionBase = {
  id: 'cult-totem',
  name: 'Cult Totem',
  description:
    "The barbarian can make an attack of opportunity against a creature within her reach who damages an ally of the barbarian with a melee attack. Only the enemy, not the barbarian's ally, needs to be within the barbarian's melee reach in order for the barbarian to make this attack of opportunity. Once the barbarian makes an attack of opportunity against a creature with this ability, she can't use this ability to make an attack of opportunity against the same creature for 24 hours.",
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'lesser cult totem rage power' },
  ],
  source: 'pf1e-pzo1135',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const daemonTotemGreater: ClassOptionBase = {
  id: 'daemon-totem-greater',
  name: 'Daemon Totem, Greater',
  description:
    "If the barbarian kills an intelligent creature with a CR equal to at least half her character level while raging, she heals 5 hit points. If she is already at her maximum number of hit points, she instead gains 5 temporary hit points, which don't stack if she kills multiple creatures.",
  prerequisites: [
    { type: 'level', minimum: 10 },
    { type: 'special', description: 'lesser daemon totem rage power' },
    { type: 'special', description: 'daemon totem rage power' },
  ],
  source: 'pf1e-pzo1135',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const daemonTotemLesser: ClassOptionBase = {
  id: 'daemon-totem-lesser',
  name: 'Daemon Totem, Lesser',
  description:
    'While raging, the barbarian gains a +2 bonus on saving throws against acid damage, death effects, disease, and poison. This bonus increases by 1 for each daemon totem rage power the barbarian has, excluding this one.',
  source: 'pf1e-pzo1135',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const daemonTotem: ClassOptionBase = {
  id: 'daemon-totem',
  name: 'Daemon Totem',
  description:
    "While the barbarian is raging, her melee attacks impose a temporary negative level on her opponent on a successful critical hit. After 1 hour, these temporary negative levels disappear automatically (without a saving throw).",
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'lesser daemon totem rage power' },
  ],
  source: 'pf1e-pzo1135',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const deadlyAccuracy: ClassOptionBase = {
  id: 'deadly-accuracy',
  name: 'Deadly Accuracy',
  description:
    'On a critical threat when using surprise accuracy, double the surprise accuracy bonus on the roll to confirm the critical hit.',
  prerequisites: [
    { type: 'level', minimum: 4 },
    { type: 'special', description: 'surprise accuracy rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const deathlessFrenzy: ClassOptionBase = {
  id: 'deathless-frenzy',
  name: 'Deathless Frenzy',
  description:
    'Ignore all consequences of being at 0 or lower hit points for one round while raging.',
  prerequisites: [{ type: 'level', minimum: 12 }],
  source: 'pf1e-ppc-botm',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const disembowellingTusks: ClassOptionBase = {
  id: 'disemboweling-tusks',
  name: 'Disemboweling Tusks',
  description:
    'While raging, deal Con damage when you confirm a critical hit with your gore attack.',
  prerequisites: [{ type: 'level', minimum: 10 }],
  source: 'pf1e-ppc-botm',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const disruptive: ClassOptionBase = {
  id: 'disruptive',
  name: 'Disruptive',
  description: 'Gain the Disruptive feat as a bonus feat while raging.',
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'superstition rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const dragonTotem: ClassOptionBase = {
  id: 'dragon-totem',
  name: 'Dragon Totem',
  description: 'Gain bonuses while raging based on a chosen dragon type.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'animal fury rage power' },
    { type: 'special', description: 'intimidating glare rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const dragonTotemResilience: ClassOptionBase = {
  id: 'dragon-totem-resilience',
  name: 'Dragon Totem Resilience',
  description: 'Gain energy resistance while raging.',
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'dragon totem rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const dragonTotemWings: ClassOptionBase = {
  id: 'dragon-totem-wings',
  name: 'Dragon Totem Wings',
  description: 'Gain wings and a fly speed while raging.',
  prerequisites: [
    { type: 'level', minimum: 10 },
    { type: 'special', description: 'dragon totem rage power' },
    { type: 'special', description: 'dragon totem resilience rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const eaterOfMagic: ClassOptionBase = {
  id: 'eater-of-magic',
  name: 'Eater of Magic',
  description:
    'Take a second saving throw against a spell effect and gain temporary hit points if you succeed while raging.',
  prerequisites: [
    { type: 'level', minimum: 10 },
    { type: 'special', description: 'superstition rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const elementalRageGreater: ClassOptionBase = {
  id: 'elemental-rage-greater',
  name: 'Elemental Rage, Greater',
  description:
    'Deal extra elemental damage on critical hits with melee weapons while raging.',
  prerequisites: [
    { type: 'level', minimum: 12 },
    { type: 'special', description: 'elemental rage rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const elementalRageLesser: ClassOptionBase = {
  id: 'elemental-rage-lesser',
  name: 'Elemental Rage, Lesser',
  description:
    'Use a swift action to cause extra elemental damage with melee attacks while raging.',
  prerequisites: [{ type: 'level', minimum: 4 }],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const elementalRage: ClassOptionBase = {
  id: 'elemental-rage',
  name: 'Elemental Rage',
  description:
    'Deal extra elemental damage with all melee attacks while raging.',
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'lesser elemental rage rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const energyAbsorption: ClassOptionBase = {
  id: 'energy-absorption',
  name: 'Energy Absorption',
  description:
    'Absorb energy damage to gain temporary hit points while raging.',
  prerequisites: [
    { type: 'level', minimum: 12 },
    { type: 'special', description: 'greater energy resistance rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const energyEruption: ClassOptionBase = {
  id: 'energy-eruption',
  name: 'Energy Eruption',
  description:
    'Store absorbed energy and release it as a breath weapon attack while raging.',
  prerequisites: [
    { type: 'level', minimum: 16 },
    { type: 'special', description: 'energy absorption rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const energyResistanceGreater: ClassOptionBase = {
  id: 'energy-resistance-greater',
  name: 'Energy Resistance, Greater',
  description:
    'Halve damage from one type of elemental attack while raging.',
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'energy resistance rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const energyResistance: ClassOptionBase = {
  id: 'energy-resistance',
  name: 'Energy Resistance',
  description:
    'Gain resistance to one type of elemental damage while raging.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const fearlessRage: ClassOptionBase = {
  id: 'fearless-rage',
  name: 'Fearless Rage',
  description:
    'Become immune to the shaken and frightened conditions while raging.',
  prerequisites: [{ type: 'level', minimum: 12 }],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const feastingBite: ClassOptionBase = {
  id: 'feasting-bite',
  name: 'Feasting Bite',
  description:
    'When the barbarian confirms a critical hit with her bite attack, she regains a number of hit points equal to half the damage dealt. Activating this ability consumes 1 round of rage.',
  prerequisites: [
    { type: 'race', raceName: 'Half-orc' },
    { type: 'special', description: 'bloody bite rage power' },
    {
      type: 'special',
      description: 'animal fury rage power or a natural bite attack',
    },
  ],
  source: 'pf1e-ppc-aoe',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const feastOfBlood: ClassOptionBase = {
  id: 'feast-of-blood',
  name: 'Feast of Blood',
  description:
    'While raging, the barbarian may feast on the organs of her foes and absorb their power.',
  prerequisites: [
    { type: 'level', minimum: 14 },
    { type: 'special', description: 'bloody fist rage power' },
  ],
  source: 'pf1e-pzo9437',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const ferociousBeast: ClassOptionBase = {
  id: 'ferocious-beast',
  name: 'Ferocious Beast',
  description:
    'Your animal companion also gains the benefits of rage though you must spend 1 additional round of rage per round if companion begins or ends its turn adjacent to you, and 2 additional rounds of rage per round if not.',
  source: 'pf1e-aa',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const ferociousBeastGreater: ClassOptionBase = {
  id: 'ferocious-beast-greater',
  name: 'Ferocious Beast, Greater',
  description:
    'Your animal companion shares the benefits of your rage powers that are constant in effect but gains no benefit from rage powers that require actions to activate, even if they are free actions.',
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'ferocious beast rage power' },
  ],
  source: 'pf1e-aa',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const ferociousMount: ClassOptionBase = {
  id: 'ferocious-mount',
  name: 'Ferocious Mount',
  description: 'Allow your mount to rage as well.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const ferociousMountGreater: ClassOptionBase = {
  id: 'ferocious-mount-greater',
  name: 'Ferocious Mount, Greater',
  description: 'Allow your mount to benefit from rage powers while raging.',
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'ferocious mount rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const ferociousTramplee: ClassOptionBase = {
  id: 'ferocious-trample',
  name: 'Ferocious Trample',
  description: 'While raging your mount gains the trample ability.',
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'ferocious mount rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const ferociousTrampleGreater: ClassOptionBase = {
  id: 'ferocious-trample-greater',
  name: 'Ferocious Trample, Greater',
  description:
    'Your mount can trample larger creatures and make overrun attacks while raging.',
  prerequisites: [
    { type: 'level', minimum: 12 },
    { type: 'special', description: 'ferocious trample rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const fiendTotem: ClassOptionBase = {
  id: 'fiend-totem',
  name: 'Fiend Totem',
  description:
    'Attackers take damage when they hit you in melee while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'lesser fiend totem rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const fiendTotemGreater: ClassOptionBase = {
  id: 'fiend-totem-greater',
  name: 'Fiend Totem, Greater',
  description:
    'Non-evil creatures adjacent to the barbarian take damage and are shaken while raging.',
  prerequisites: [
    { type: 'level', minimum: 10 },
    { type: 'special', description: 'fiend totem rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const fiendTotemLesser: ClassOptionBase = {
  id: 'fiend-totem-lesser',
  name: 'Fiend Totem, Lesser',
  description: 'Gain a gore attack while raging.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const fierceFortitude: ClassOptionBase = {
  id: 'fierce-fortitude',
  name: 'Fierce Fortitude',
  description:
    'You gain a +4 bonus on saving throws against diseases and poison. A skald must be trained in Intimidate to select this rage power.',
  prerequisites: [{ type: 'level', minimum: 8 }],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const fightResponse: ClassOptionBase = {
  id: 'fight-response',
  name: 'Fight Response',
  description:
    "When a barbarian with this rage power attempts a saving throw against a fear effect, she can enter a rage as an immediate action (as long as she would normally be able to enter rage). This consumes 3 rounds of the barbarian's daily allotment of rage rounds, but the barbarian can maintain the rage each round on her turn normally. Any benefits from the barbarian's rage apply immediately, so she gains her bonus on Will saves against the effect that required the initial saving throw. Unlike most rage powers, this rage power's effects are useful only when the barbarian is not raging, so a skald can't grant this rage power to allies with raging song.",
  source: 'pf1e-pzo1135',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const fleshWound: ClassOptionBase = {
  id: 'flesh-wound',
  name: 'Flesh Wound',
  description: 'Convert lethal damage to nonlethal damage while raging.',
  prerequisites: [{ type: 'level', minimum: 10 }],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const fueledByVengeance: ClassOptionBase = {
  id: 'fueled-by-vengeance',
  name: 'Fueled by Vengeance',
  description:
    'Gain an extra round of rage if you hit a creature that hit you this round while raging.',
  prerequisites: [{ type: 'level', minimum: 6 }],
  source: 'pf1e-ppc-botm',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const gearbreaker: ClassOptionBase = {
  id: 'gearbreaker',
  name: 'Gearbreaker',
  description:
    "Once per round while raging, whenever you make an attack against a construct, you can ignore an amount of that construct's hardness equal to your barbarian level. This ability must be used before the attack roll is made. This power stacks with hard hitter.",
  prerequisites: [{ type: 'special', description: 'smasher rage power' }],
  source: 'pf1e-ppc-potr',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const ghostRager: ClassOptionBase = {
  id: 'ghost-rager',
  name: 'Ghost Rager',
  description: 'Deal normal damage to incorporeal creatures while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'superstition rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const goodForWhatAilsYou: ClassOptionBase = {
  id: 'good-for-what-ails-you',
  name: 'Good for What Ails You',
  description:
    'Drink alcohol to gain a new saving throw against a condition while raging.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const greaterAnimalFury: ClassOptionBase = {
  id: 'greater-animal-fury',
  name: 'Greater Animal Fury',
  description:
    'As animal fury, but your bite attack deals damage as if you were one size larger.',
  prerequisites: [
    { type: 'special', description: 'animal fury rage power' },
  ],
  source: 'pf1e-ppc-coc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const groundBreaker: ClassOptionBase = {
  id: 'ground-breaker',
  name: 'Ground Breaker',
  description:
    'Attack the ground to create difficult terrain in adjacent squares while raging.',
  prerequisites: [{ type: 'level', minimum: 6 }],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const groundBreakerGreater: ClassOptionBase = {
  id: 'ground-breaker-greater',
  name: 'Ground Breaker, Greater',
  description:
    "Extend ground breaker's radius of difficult terrain while raging.",
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'ground breaker rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const guardedLife: ClassOptionBase = {
  id: 'guarded-life',
  name: 'Guarded Life',
  description:
    'Automatically stabilize when reduced to negative hit points while raging.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const guardedLifeGreater: ClassOptionBase = {
  id: 'guarded-life-greater',
  name: 'Guarded Life, Greater',
  description:
    'Convert more damage to nonlethal damage when reduced below 0 hit points while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'guarded life rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const guardedStance: ClassOptionBase = {
  id: 'guarded-stance',
  name: 'Guarded Stance',
  description:
    'Gain a dodge bonus to AC while raging equal to 1 plus one for every four barbarian levels beyond 4th.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const hiveTotem: ClassOptionBase = {
  id: 'hive-totem',
  name: 'Hive Totem',
  description: 'Take half damage from swarms while raging.',
  prerequisites: [
    { type: 'level', minimum: 4 },
    { type: 'special', description: 'animal fury rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const hiveTotemResilience: ClassOptionBase = {
  id: 'hive-totem-resilience',
  name: 'Hive Totem Resilience',
  description: 'Take no damage from swarms while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'hive totem rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const hiveTotemToxicity: ClassOptionBase = {
  id: 'hive-totem-toxicity',
  name: 'Hive Totem Toxicity',
  description:
    'Deal Constitution damage with your bite attack while raging.',
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'hive totem rage power' },
    { type: 'special', description: 'hive totem resilience rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const batch_001: ClassOptionBase[] = [
  ancestorTotemGreater,
  ancestorTotemLesser,
  ancestorTotem,
  animalFury,
  armorRipper,
  atavismTotemGreater,
  atavismTotemLesser,
  atavismTotem,
  auspiciousMark,
  battleRoar,
  beastTotemGreater,
  beastTotemLesser,
  beastTotem,
  bestialClimber,
  bestialLeaper,
  bestialSwimmer,
  bleedingBlow,
  bloodyBite,
  bloodyFist,
  boarsCharge,
  boastingTaunt,
  bodyBludgeon,
  brawler,
  brawlerGreater,
  breathtaker,
  celestialTotemGreater,
  celestialTotemLesser,
  celestialTotem,
  chaosTotemGreater,
  chaosTotemLesser,
  chaosTotem,
  clearMind,
  comeAndGetMe,
  cripplingBlow,
  cultTotemGreater,
  cultTotemLesser,
  cultTotem,
  daemonTotemGreater,
  daemonTotemLesser,
  daemonTotem,
  deadlyAccuracy,
  deathlessFrenzy,
  disembowellingTusks,
  disruptive,
  dragonTotem,
  dragonTotemResilience,
  dragonTotemWings,
  eaterOfMagic,
  elementalRageGreater,
  elementalRageLesser,
  elementalRage,
  energyAbsorption,
  energyEruption,
  energyResistanceGreater,
  energyResistance,
  fearlessRage,
  feastingBite,
  feastOfBlood,
  ferociousBeast,
  ferociousBeastGreater,
  ferociousMount,
  ferociousMountGreater,
  ferociousTramplee,
  ferociousTrampleGreater,
  fiendTotem,
  fiendTotemGreater,
  fiendTotemLesser,
  fierceFortitude,
  fightResponse,
  fleshWound,
  fueledByVengeance,
  gearbreaker,
  ghostRager,
  goodForWhatAilsYou,
  greaterAnimalFury,
  groundBreaker,
  groundBreakerGreater,
  guardedLife,
  guardedLifeGreater,
  guardedStance,
  hiveTotem,
  hiveTotemResilience,
  hiveTotemToxicity,
];
