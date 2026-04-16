// Batch 002 | first: 'Hurling, Greater' | last: 'Witch Hunter' | count: 67
// Source: https://www.d20pfsrd.com/classes/core-classes/barbarian/rage-powers/
// RagePowerDocument = ClassOptionBase — using base type directly
// Note: Moon Totem, Spirit Totem, Spire Totem descriptions filled in from individual subpages.
// 21 entries removed (non-Paizo/3rd-party); 8 new Paizo entries added after cross-referencing AON.

import { ClassOptionBase } from '@/types/classOptions';

export const hurlingGreater: ClassOptionBase = {
  id: 'hurling-greater',
  name: 'Hurling, Greater',
  description:
    'Increase the range and size of objects that can be hurled while raging.',
  prerequisites: [
    { type: 'level', minimum: 12 },
    { type: 'special', description: 'hurling rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const hurlingLesser: ClassOptionBase = {
  id: 'hurling-lesser',
  name: 'Hurling, Lesser',
  description:
    'Pick up and throw large objects as a standard action while raging.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const hurling: ClassOptionBase = {
  id: 'hurling',
  name: 'Hurling',
  description:
    'Increase the range and size of objects that can be hurled while raging.',
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'lesser hurling rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const hurlingCharge: ClassOptionBase = {
  id: 'hurling-charge',
  name: 'Hurling Charge',
  description: 'Hurl an object as part of a charge action while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'lesser hurling rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const impellingDisarm: ClassOptionBase = {
  id: 'impelling-disarm',
  name: 'Impelling Disarm',
  description:
    'Once per rage, attempt to hit another opponent with a weapon disarmed from a different opponent.',
  prerequisites: [{ type: 'level', minimum: 4 }],
  source: 'pf1e-ppc-cob',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const increasedDamageReduction: ClassOptionBase = {
  id: 'increased-damage-reduction',
  name: 'Increased Damage Reduction',
  description: 'Gain DR/— while raging.',
  prerequisites: [{ type: 'level', minimum: 8 }],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const inspireFerocity: ClassOptionBase = {
  id: 'inspire-ferocity',
  name: 'Inspire Ferocity',
  description:
    'Use a move action to share the benefits of reckless abandon with willing allies within 30 feet.',
  prerequisites: [
    { type: 'special', description: 'reckless abandon rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const internalFortitude: ClassOptionBase = {
  id: 'internal-fortitude',
  name: 'Internal Fortitude',
  description:
    'Gain immunity to the nauseated and sickened conditions while raging.',
  prerequisites: [{ type: 'level', minimum: 8 }],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const intimidatingGlare: ClassOptionBase = {
  id: 'intimidating-glare',
  name: 'Intimidating Glare',
  description:
    "The barbarian can make an Intimidate check against one adjacent foe as a move action. If the barbarian successfully demoralizes the opponent, the foe is shaken for 1d4 rounds + 1 round for every 5 points by which the barbarian's check exceeds the DC.",
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const knockback: ClassOptionBase = {
  id: 'knockback',
  name: 'Knockback',
  description:
    'Once per round, make a bull rush combat maneuver check in place of a melee attack while raging. This bull rush does not provoke an attack of opportunity.',
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const knockdown: ClassOptionBase = {
  id: 'knockdown',
  name: 'Knockdown',
  description:
    'Once per round, make a trip attack in place of a melee attack while raging. This trip does not provoke an attack of opportunity.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const lethalAccuracy: ClassOptionBase = {
  id: 'lethal-accuracy',
  name: 'Lethal Accuracy',
  description:
    'When scoring a critical hit while using surprise accuracy, deal maximum damage for the attack instead of rolling.',
  prerequisites: [
    { type: 'level', minimum: 16 },
    { type: 'special', description: 'deadly accuracy rage power' },
    { type: 'special', description: 'surprise accuracy rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const linnormDeathCurseCairn: ClassOptionBase = {
  id: 'linnorm-death-curse-cairn',
  name: 'Linnorm Death Curse, Cairn',
  description:
    'Melee attacks deal 1 additional point of negative energy damage; if the character is knocked unconscious or killed, the attacker suffers a curse of decay (Will negates).',
  prerequisites: [{ type: 'level', minimum: 8 }],
  source: 'pf1e-uw',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const linnormDeathCurseCrag: ClassOptionBase = {
  id: 'linnorm-death-curse-crag',
  name: 'Linnorm Death Curse, Crag',
  description:
    'Melee attacks deal 1 additional point of fire damage; if the character is knocked unconscious or killed, the attacker suffers a curse of fire (Will negates).',
  prerequisites: [{ type: 'level', minimum: 4 }],
  source: 'pf1e-uw',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const linnormDeathCurseFjord: ClassOptionBase = {
  id: 'linnorm-death-curse-fjord',
  name: 'Linnorm Death Curse, Fjord',
  description:
    'Melee attacks deal 1 additional point of cold damage; if the character is knocked unconscious or killed, the attacker suffers a curse of drowning (Will negates).',
  prerequisites: [{ type: 'level', minimum: 4 }],
  source: 'pf1e-uw',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const linnormDeathCurseIce: ClassOptionBase = {
  id: 'linnorm-death-curse-ice',
  name: 'Linnorm Death Curse, Ice',
  description:
    'Melee attacks deal 1 additional point of cold damage; if the character is knocked unconscious or killed, the attacker suffers a curse of frost.',
  prerequisites: [{ type: 'level', minimum: 4 }],
  source: 'pf1e-uw',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const linnormDeathCurseTaiga: ClassOptionBase = {
  id: 'linnorm-death-curse-taiga',
  name: 'Linnorm Death Curse, Taiga',
  description:
    'Melee attacks deal 1 additional point of electricity damage; if the character is knocked unconscious or killed, the attacker suffers a curse of electricity (Will negates).',
  prerequisites: [{ type: 'level', minimum: 4 }],
  source: 'pf1e-uw',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const linnormDeathCurseTarn: ClassOptionBase = {
  id: 'linnorm-death-curse-tarn',
  name: 'Linnorm Death Curse, Tarn',
  description:
    'Melee attacks deal 1 additional point of acid damage; if the character is knocked unconscious or killed, the attacker suffers a curse of death (Will negates).',
  prerequisites: [{ type: 'level', minimum: 4 }],
  source: 'pf1e-uw',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const linnormDeathCurseTor: ClassOptionBase = {
  id: 'linnorm-death-curse-tor',
  name: 'Linnorm Death Curse, Tor',
  description:
    'Melee attacks deal 1 additional point of fire damage; if the character is knocked unconscious or killed, the attacker suffers a curse of boiling blood (Will negates).',
  prerequisites: [{ type: 'level', minimum: 8 }],
  source: 'pf1e-uw',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const liquidCourage: ClassOptionBase = {
  id: 'liquid-courage',
  name: 'Liquid Courage',
  description:
    'Alcoholic beverages grant an increased morale bonus on saving throws while raging.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const lowLightVision: ClassOptionBase = {
  id: 'low-light-vision',
  name: 'Low-Light Vision',
  description: 'Gain low-light vision while raging.',
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const mightySwing: ClassOptionBase = {
  id: 'mighty-swing',
  name: 'Mighty Swing',
  description: 'Automatically confirm a critical hit once per rage.',
  prerequisites: [{ type: 'level', minimum: 12 }],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const momentOfClarity: ClassOptionBase = {
  id: 'moment-of-clarity',
  name: 'Moment of Clarity',
  description:
    'The barbarian does not gain or suffer any benefits or penalties from her rage for 1 round.',
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const moonTotemGreater: ClassOptionBase = {
  id: 'moon-totem-greater',
  name: 'Moon Totem, Greater',
  description:
    'While raging, the barbarian ignores the miss chance for concealment and treats total concealment as concealment.',
  prerequisites: [
    { type: 'level', minimum: 10 },
    { type: 'special', description: 'moon totem rage power' },
  ],
  source: 'pf1e-ppc-wo',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const moonTotemLesser: ClassOptionBase = {
  id: 'moon-totem-lesser',
  name: 'Moon Totem, Lesser',
  description:
    'While raging, the barbarian gains darkvision with a range of 30 feet. If the barbarian already has darkvision, the range of her darkvision increases by 30 feet while she is raging.',
  source: 'pf1e-ppc-wo',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const moonTotem: ClassOptionBase = {
  id: 'moon-totem',
  name: 'Moon Totem',
  description:
    'While raging, the barbarian gains a bonus equal to half her character level on Perception checks to locate unseen creatures. Additionally, unseen attackers receive no attack bonus against the barbarian while she is raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'lesser moon totem rage power' },
  ],
  source: 'pf1e-ppc-wo',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const nightVision: ClassOptionBase = {
  id: 'night-vision',
  name: 'Night Vision',
  description: 'Gain darkvision 60 feet while raging.',
  prerequisites: [
    {
      type: 'special',
      description: 'low-light vision rage power or racial low-light vision',
    },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const noEscape: ClassOptionBase = {
  id: 'no-escape',
  name: 'No Escape',
  description:
    "Take a double move as an immediate action when an adjacent opponent uses the withdraw action. The barbarian must end this movement adjacent to the foe that used the withdraw action.",
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const overbearingAdvance: ClassOptionBase = {
  id: 'overbearing-advance',
  name: 'Overbearing Advance',
  description:
    'Deal damage equal to your Strength modifier to any target you successfully overrun while raging.',
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const overbearingOnslaught: ClassOptionBase = {
  id: 'overbearing-onslaught',
  name: 'Overbearing Onslaught',
  description: 'Overrun multiple targets in a single round while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'overbearing advance rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const penetratingBite: ClassOptionBase = {
  id: 'penetrating-bite',
  name: 'Penetrating Bite',
  description:
    'Your bite ability can pierce most resistances while raging, treating DR as if it were 5 lower.',
  prerequisites: [
    { type: 'level', minimum: 4 },
    { type: 'special', description: 'animal fury rage power' },
  ],
  source: 'pf1e-ppc-coc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const perfectClarity: ClassOptionBase = {
  id: 'perfect-clarity',
  name: 'Perfect Clarity',
  description:
    'Roll twice when attempting a Will save to disbelieve an illusion while raging.',
  prerequisites: [
    { type: 'special', description: 'moment of clarity rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const powerfulBlow: ClassOptionBase = {
  id: 'powerful-blow',
  name: 'Powerful Blow',
  description:
    'Gain a +1 bonus on a single damage roll once per rage. This bonus increases by +1 for every 4 levels the barbarian has.',
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const primalScent: ClassOptionBase = {
  id: 'primal-scent',
  name: 'Primal Scent',
  description: 'Gain a bonus when using the scent ability while raging.',
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'scent rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const quickReflexes: ClassOptionBase = {
  id: 'quick-reflexes',
  name: 'Quick Reflexes',
  description:
    'Make one additional attack of opportunity per round while raging.',
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const ragingClimber: ClassOptionBase = {
  id: 'raging-climber',
  name: 'Raging Climber',
  description:
    "Gain a bonus on Climb checks while raging equal to the barbarian's level.",
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const ragingFlier: ClassOptionBase = {
  id: 'raging-flier',
  name: 'Raging Flier',
  description:
    'Once per rage, fly up to your base speed as a move action and use flight as part of a charge.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'raging leaper rage power' },
  ],
  source: 'pf1e-uw',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const ragingGrappler: ClassOptionBase = {
  id: 'raging-grappler',
  name: 'Raging Grappler',
  description:
    'While raging, whenever you succeed at a check to start a grapple, you can choose to deal damage as if you had also succeeded at a check to maintain the grapple.',
  source: 'pf1e-ppc-potr',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const ragingLeaper: ClassOptionBase = {
  id: 'raging-leaper',
  name: 'Raging Leaper',
  description:
    "Gain a bonus on Acrobatics checks to jump while raging equal to the barbarian's level.",
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const ragingWhirlwind: ClassOptionBase = {
  id: 'raging-whirlwind',
  name: 'Raging Whirlwind',
  description:
    "When the barbarian confirms a critical hit with a melee attack, she can use an immediate action. The target attempts a Fortitude save (DC = 10 + half the barbarian's level + her Constitution modifier) or loses its Dexterity modifier to AC for the remainder of the turn and lands prone at the end of the turn. Raging Whirlwind has no effect on flying creatures.",
  prerequisites: [{ type: 'level', minimum: 12 }],
  source: 'pf1e-uw',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const ragingSwimmer: ClassOptionBase = {
  id: 'raging-swimmer',
  name: 'Raging Swimmer',
  description:
    "Gain a bonus on Swim checks while raging equal to the barbarian's level.",
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const recklessAbandon: ClassOptionBase = {
  id: 'reckless-abandon',
  name: 'Reckless Abandon',
  description:
    "While raging, the barbarian can take a penalty to AC in order to gain a bonus on attack rolls. The penalty and bonus are both equal to the barbarian's Constitution modifier (minimum 1). The bonus applies to all attacks in a round, but the penalty lasts until the start of the barbarian's next turn.",
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const reflexiveDodge: ClassOptionBase = {
  id: 'reflexive-dodge',
  name: 'Reflexive Dodge',
  description:
    'Use your rolling dodge bonus on Reflex saving throws while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'rolling dodge rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const regenerativeVigor: ClassOptionBase = {
  id: 'regenerative-vigor',
  name: 'Regenerative Vigor',
  description:
    'Gain fast healing after expending rounds of rage with renewed vigor.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'renewed vigor rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const renewedLife: ClassOptionBase = {
  id: 'renewed-life',
  name: 'Renewed Life',
  description: 'Ignore temporary negative levels while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'renewed vitality rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const renewedVigor: ClassOptionBase = {
  id: 'renewed-vigor',
  name: 'Renewed Vigor',
  description:
    "As a standard action, heal 1d8 points of damage + the barbarian's Constitution modifier. This power can be used once per day, plus one additional time per day for every four barbarian levels beyond 4th.",
  prerequisites: [{ type: 'level', minimum: 4 }],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const renewedVitality: ClassOptionBase = {
  id: 'renewed-vitality',
  name: 'Renewed Vitality',
  description: 'Heal hit points as a standard action while raging.',
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const rousedAnger: ClassOptionBase = {
  id: 'roused-anger',
  name: 'Roused Anger',
  description:
    'The barbarian may enter a rage even if fatigued. While raging after using this ability, the barbarian is immune to the fatigued condition. Once this rage ends, the barbarian is exhausted for 10 minutes per round spent raging.',
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const rollingDodge: ClassOptionBase = {
  id: 'rolling-dodge',
  name: 'Rolling Dodge',
  description:
    'Gain a +1 dodge bonus to AC while raging. This bonus increases by +1 for every 6 levels the barbarian has.',
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};


export const scent: ClassOptionBase = {
  id: 'scent',
  name: 'Scent',
  description: 'Gain the scent ability while raging.',
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};


export const smasher: ClassOptionBase = {
  id: 'smasher',
  name: 'Smasher',
  description:
    'Ignore the hardness of objects and gain a bonus on attack rolls against objects while raging.',
  source: 'pf1e-ppc-potr',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const spellSunder: ClassOptionBase = {
  id: 'spell-sunder',
  name: 'Spell Sunder',
  description:
    "Once per rage, the barbarian can attempt to sunder an ongoing spell effect by succeeding at a combat maneuver check. For effects not on a creature, the check is against CMD 15 plus the effect's caster level. For effects on a creature, the barbarian makes a sunder combat maneuver against the creature's CMD + 5, ignoring miss chances from spells or spell-like abilities. Success suppresses the effect for 1 round; exceeding the CMD by 5–9 suppresses it for 2 rounds; exceeding the CMD by 10 or more dispels the effect entirely.",
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'witch hunter rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const spireTotemLesser: ClassOptionBase = {
  id: 'spire-totem-lesser',
  name: 'Spire Totem, Lesser',
  description:
    'While raging, the barbarian gains a +1 morale bonus on attacks against any creature that has targeted one of her allies with an attack or a harmful spell within the last round.',
  source: 'pf1e-ppc-wo',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const spireTotem: ClassOptionBase = {
  id: 'spire-totem',
  name: 'Spire Totem',
  description:
    'While raging, the barbarian takes no penalties for using a weapon to deal nonlethal damage. When dealing nonlethal damage, the barbarian adds a bonus equal to half her barbarian level on her damage rolls.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'lesser spire totem rage power' },
  ],
  source: 'pf1e-ppc-wo',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const spireTotemGreater: ClassOptionBase = {
  id: 'spire-totem-greater',
  name: 'Spire Totem, Greater',
  description:
    'While raging, the barbarian grants all allies within 30 feet a +2 morale bonus on Will saves. Additionally, all allies within this area can roll twice and use the better result when making Will saves against fear effects.',
  prerequisites: [
    { type: 'level', minimum: 10 },
    { type: 'special', description: 'spire totem rage power' },
  ],
  source: 'pf1e-ppc-wo',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const spiritTotem: ClassOptionBase = {
  id: 'spirit-totem',
  name: 'Spirit Totem',
  description:
    'While raging, the barbarian is surrounded by a protective barrier of spirits. Enemies suffer a 20% miss chance on ranged attacks and melee attacks made by creatures that are not adjacent to the barbarian (typically those using reach).',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'lesser spirit totem rage power' },
  ],
  source: 'pf1e-ppc-wo',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const spiritTotemGreater: ClassOptionBase = {
  id: 'spirit-totem-greater',
  name: 'Spirit Totem, Greater',
  description:
    'While raging, the spirit wisps surrounding the barbarian grow more powerful. At the start of the barbarian\'s turn, each living enemy adjacent to the barbarian takes 1d8 points of negative energy damage. In addition, the spirits\' slam attacks now reach out to 15 feet, dealing 1d6 points of negative energy damage.',
  prerequisites: [
    { type: 'level', minimum: 10 },
    { type: 'special', description: 'spirit totem rage power' },
  ],
  source: 'pf1e-ppc-wo',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const spiritTotemLesser: ClassOptionBase = {
  id: 'spirit-totem-lesser',
  name: 'Spirit Totem, Lesser',
  description:
    'While raging, the barbarian is surrounded by spirit wisps that harass her enemies. These spirits make one slam attack per round against each living enemy adjacent to the barbarian, using the barbarian\'s full base attack bonus plus her Charisma modifier. Each attack deals 1d4 points of negative energy damage plus the barbarian\'s Charisma modifier.',
  source: 'pf1e-ppc-wo',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};


export const strengthSurge: ClassOptionBase = {
  id: 'strength-surge',
  name: 'Strength Surge',
  description:
    "Add the barbarian's level on one Strength check or combat maneuver check, or to the barbarian's Combat Maneuver Defense when an opponent attempts a maneuver against her. This power is usable once per rage.",
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};


export const superstition: ClassOptionBase = {
  id: 'superstition',
  name: 'Superstition',
  description:
    'Gain a +2 morale bonus on saving throws against all spells, supernatural abilities, and spell-like abilities while raging. This bonus increases by +1 for every 4 levels the barbarian has beyond 4th.',
  prerequisites: [{ type: 'level', minimum: 4 }],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const surpriseAccuracy: ClassOptionBase = {
  id: 'surprise-accuracy',
  name: 'Surprise Accuracy',
  description:
    'Gain a +1 morale bonus on one attack roll per rage. This bonus increases by +1 for every 4 barbarian levels beyond 4th.',
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const sweepingBlow: ClassOptionBase = {
  id: 'sweeping-blow',
  name: 'Sweeping Blow',
  description:
    "Apply a powerful blow's extra damage to all adjacent enemies using a single attack roll against each target's CMD while raging.",
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'powerful blow rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const swiftFoot: ClassOptionBase = {
  id: 'swift-foot',
  name: 'Swift Foot',
  description:
    'Gain a 5-foot enhancement bonus to speed while raging. This power can be selected multiple times.',
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const terrifyingHowl: ClassOptionBase = {
  id: 'terrifying-howl',
  name: 'Terrifying Howl',
  description:
    "As a standard action, all shaken enemies within 30 feet must make a Will save (DC = 10 + 1/2 the barbarian's level + the barbarian's Strength modifier) or become frightened for 1d4+1 rounds.",
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'intimidating glare rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const titansBane: ClassOptionBase = {
  id: 'titans-bane',
  name: "Titan's Bane",
  description:
    'Deal additional damage to creatures larger than the barbarian with powerful blow attacks while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'powerful blow rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const unexpectedStrike: ClassOptionBase = {
  id: 'unexpected-strike',
  name: 'Unexpected Strike',
  description:
    'The barbarian can make an attack of opportunity against a foe that moves into any square threatened by the barbarian, regardless of whether or not that movement would normally provoke an attack of opportunity. This power can only be used once per rage.',
  prerequisites: [{ type: 'level', minimum: 8 }],
  source: 'pf1e-core',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const witchHunter: ClassOptionBase = {
  id: 'witch-hunter',
  name: 'Witch Hunter',
  description:
    "While raging, the barbarian gains a +1 bonus on damage rolls against creatures possessing spells or spell-like abilities. This damage bonus increases by +1 for every four character levels attained.",
  prerequisites: [
    { type: 'special', description: 'superstition rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  verificationStatus: 'needs_review' as const,
  visibility: 'global',
  rev: 1,
};

export const batch_002: ClassOptionBase[] = [
  hurlingGreater,
  hurlingLesser,
  hurling,
  hurlingCharge,
  impellingDisarm,
  increasedDamageReduction,
  inspireFerocity,
  internalFortitude,
  intimidatingGlare,
  knockback,
  knockdown,
  lethalAccuracy,
  linnormDeathCurseCairn,
  linnormDeathCurseCrag,
  linnormDeathCurseFjord,
  linnormDeathCurseIce,
  linnormDeathCurseTaiga,
  linnormDeathCurseTarn,
  linnormDeathCurseTor,
  liquidCourage,
  lowLightVision,
  mightySwing,
  momentOfClarity,
  moonTotemGreater,
  moonTotemLesser,
  moonTotem,
  nightVision,
  noEscape,
  overbearingAdvance,
  overbearingOnslaught,
  penetratingBite,
  perfectClarity,
  powerfulBlow,
  primalScent,
  quickReflexes,
  ragingClimber,
  ragingFlier,
  ragingGrappler,
  ragingLeaper,
  ragingWhirlwind,
  ragingSwimmer,
  recklessAbandon,
  reflexiveDodge,
  regenerativeVigor,
  renewedLife,
  renewedVigor,
  renewedVitality,
  rollingDodge,
  rousedAnger,
  scent,
  smasher,
  spellSunder,
  spireTotemLesser,
  spireTotem,
  spireTotemGreater,
  spiritTotem,
  spiritTotemGreater,
  spiritTotemLesser,
  strengthSurge,
  superstition,
  surpriseAccuracy,
  sweepingBlow,
  swiftFoot,
  terrifyingHowl,
  titansBane,
  unexpectedStrike,
  witchHunter,
];
