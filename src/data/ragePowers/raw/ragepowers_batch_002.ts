// Batch 002 | first: 'Hurling, Greater' | last: 'Wild Talent' | count: 80
// Source: https://www.d20pfsrd.com/classes/core-classes/barbarian/rage-powers/
// RagePowerDocument = ClassOptionDocument — using base type directly
// Note: Moon Totem and Spirit Totem descriptions filled in from individual subpages.

import { ClassOptionDocument } from '@/types/classOptions';

export const hurlingGreater: ClassOptionDocument = {
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
  visibility: 'global',
  rev: 1,
};

export const hurlingLesser: ClassOptionDocument = {
  id: 'hurling-lesser',
  name: 'Hurling, Lesser',
  description:
    'Pick up and throw large objects as a standard action while raging.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const hurling: ClassOptionDocument = {
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
  visibility: 'global',
  rev: 1,
};

export const hurlingCharge: ClassOptionDocument = {
  id: 'hurling-charge',
  name: 'Hurling Charge',
  description: 'Hurl an object as part of a charge action while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'lesser hurling rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const impellingDisarm: ClassOptionDocument = {
  id: 'impelling-disarm',
  name: 'Impelling Disarm',
  description:
    'Once per rage, attempt to hit another opponent with a weapon disarmed from a different opponent.',
  prerequisites: [{ type: 'level', minimum: 4 }],
  source: 'pf1e-ppc-cob',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const increasedDamageReduction: ClassOptionDocument = {
  id: 'increased-damage-reduction',
  name: 'Increased Damage Reduction',
  description: 'Gain DR/— while raging.',
  prerequisites: [{ type: 'level', minimum: 8 }],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const inspireFerocity: ClassOptionDocument = {
  id: 'inspire-ferocity',
  name: 'Inspire Ferocity',
  description:
    'Use a move action to share the benefits of reckless abandon with willing allies within 30 feet.',
  prerequisites: [
    { type: 'special', description: 'reckless abandon rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const internalFortitude: ClassOptionDocument = {
  id: 'internal-fortitude',
  name: 'Internal Fortitude',
  description:
    'Gain immunity to the nauseated and sickened conditions while raging.',
  prerequisites: [{ type: 'level', minimum: 8 }],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const intimidatingGlare: ClassOptionDocument = {
  id: 'intimidating-glare',
  name: 'Intimidating Glare',
  description:
    "The barbarian can make an Intimidate check against one adjacent foe as a move action. If the barbarian successfully demoralizes the opponent, the foe is shaken for 1d4 rounds + 1 round for every 5 points by which the barbarian's check exceeds the DC.",
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const knockback: ClassOptionDocument = {
  id: 'knockback',
  name: 'Knockback',
  description:
    'Once per round, make a bull rush combat maneuver check in place of a melee attack while raging. This bull rush does not provoke an attack of opportunity.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const knockdown: ClassOptionDocument = {
  id: 'knockdown',
  name: 'Knockdown',
  description:
    'Once per round, make a trip attack in place of a melee attack while raging. This trip does not provoke an attack of opportunity.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const lethalAccuracy: ClassOptionDocument = {
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
  visibility: 'global',
  rev: 1,
};

export const linnormDeathCurseCairn: ClassOptionDocument = {
  id: 'linnorm-death-curse-cairn',
  name: 'Linnorm Death Curse, Cairn',
  description:
    'Melee attacks deal 1 additional point of negative energy damage; if the character is knocked unconscious or killed, the attacker suffers a curse of decay (Will negates).',
  prerequisites: [{ type: 'level', minimum: 8 }],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const linnormDeathCurseCrag: ClassOptionDocument = {
  id: 'linnorm-death-curse-crag',
  name: 'Linnorm Death Curse, Crag',
  description:
    'Melee attacks deal 1 additional point of fire damage; if the character is knocked unconscious or killed, the attacker suffers a curse of fire (Will negates).',
  prerequisites: [{ type: 'level', minimum: 4 }],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const linnormDeathCurseFjord: ClassOptionDocument = {
  id: 'linnorm-death-curse-fjord',
  name: 'Linnorm Death Curse, Fjord',
  description:
    'Melee attacks deal 1 additional point of cold damage; if the character is knocked unconscious or killed, the attacker suffers a curse of drowning (Will negates).',
  prerequisites: [{ type: 'level', minimum: 4 }],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const linnormDeathCurseIce: ClassOptionDocument = {
  id: 'linnorm-death-curse-ice',
  name: 'Linnorm Death Curse, Ice',
  description:
    'Melee attacks deal 1 additional point of cold damage; if the character is knocked unconscious or killed, the attacker suffers a curse of frost.',
  prerequisites: [{ type: 'level', minimum: 4 }],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const linnormDeathCurseTaiga: ClassOptionDocument = {
  id: 'linnorm-death-curse-taiga',
  name: 'Linnorm Death Curse, Taiga',
  description:
    'Melee attacks deal 1 additional point of electricity damage; if the character is knocked unconscious or killed, the attacker suffers a curse of electricity (Will negates).',
  prerequisites: [{ type: 'level', minimum: 4 }],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const linnormDeathCurseTarn: ClassOptionDocument = {
  id: 'linnorm-death-curse-tarn',
  name: 'Linnorm Death Curse, Tarn',
  description:
    'Melee attacks deal 1 additional point of acid damage; if the character is knocked unconscious or killed, the attacker suffers a curse of death (Will negates).',
  prerequisites: [{ type: 'level', minimum: 4 }],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const linnormDeathCurseTor: ClassOptionDocument = {
  id: 'linnorm-death-curse-tor',
  name: 'Linnorm Death Curse, Tor',
  description:
    'Melee attacks deal 1 additional point of fire damage; if the character is knocked unconscious or killed, the attacker suffers a curse of boiling blood (Will negates).',
  prerequisites: [{ type: 'level', minimum: 8 }],
  source: 'pf1e-uw',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const liquidCourage: ClassOptionDocument = {
  id: 'liquid-courage',
  name: 'Liquid Courage',
  description:
    'Alcoholic beverages grant an increased morale bonus on saving throws while raging.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const lowLightVision: ClassOptionDocument = {
  id: 'low-light-vision',
  name: 'Low-Light Vision',
  description: 'Gain low-light vision while raging.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const mightySwing: ClassOptionDocument = {
  id: 'mighty-swing',
  name: 'Mighty Swing',
  description: 'Automatically confirm a critical hit once per rage.',
  prerequisites: [{ type: 'level', minimum: 12 }],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const momentOfClarity: ClassOptionDocument = {
  id: 'moment-of-clarity',
  name: 'Moment of Clarity',
  description:
    'The barbarian does not gain or suffer any benefits or penalties from her rage for 1 round.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const moonTotemGreater: ClassOptionDocument = {
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
  visibility: 'global',
  rev: 1,
};

export const moonTotemLesser: ClassOptionDocument = {
  id: 'moon-totem-lesser',
  name: 'Moon Totem, Lesser',
  description:
    'While raging, the barbarian gains darkvision with a range of 30 feet. If the barbarian already has darkvision, the range of her darkvision increases by 30 feet while she is raging.',
  source: 'pf1e-ppc-wo',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const moonTotem: ClassOptionDocument = {
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
  visibility: 'global',
  rev: 1,
};

export const nightVision: ClassOptionDocument = {
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
  visibility: 'global',
  rev: 1,
};

export const noEscape: ClassOptionDocument = {
  id: 'no-escape',
  name: 'No Escape',
  description:
    "Take a double move as an immediate action when an adjacent opponent uses the withdraw action. The barbarian must end this movement adjacent to the foe that used the withdraw action.",
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const overbearingAdvance: ClassOptionDocument = {
  id: 'overbearing-advance',
  name: 'Overbearing Advance',
  description:
    'Deal damage equal to your Strength modifier to any target you successfully overrun while raging.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const overbearingOnslaught: ClassOptionDocument = {
  id: 'overbearing-onslaught',
  name: 'Overbearing Onslaught',
  description: 'Overrun multiple targets in a single round while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'overbearing advance rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const penetratingBite: ClassOptionDocument = {
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
  visibility: 'global',
  rev: 1,
};

export const perfectClarity: ClassOptionDocument = {
  id: 'perfect-clarity',
  name: 'Perfect Clarity',
  description:
    'Roll twice when attempting a Will save to disbelieve an illusion while raging.',
  prerequisites: [
    { type: 'special', description: 'moment of clarity rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const powerfulBlow: ClassOptionDocument = {
  id: 'powerful-blow',
  name: 'Powerful Blow',
  description:
    'Gain a +1 bonus on a single damage roll once per rage. This bonus increases by +1 for every 4 levels the barbarian has.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const primalScent: ClassOptionDocument = {
  id: 'primal-scent',
  name: 'Primal Scent',
  description: 'Gain a bonus when using the scent ability while raging.',
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'scent rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const quickReflexes: ClassOptionDocument = {
  id: 'quick-reflexes',
  name: 'Quick Reflexes',
  description:
    'Make one additional attack of opportunity per round while raging.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const ragingClimber: ClassOptionDocument = {
  id: 'raging-climber',
  name: 'Raging Climber',
  description:
    "Gain a bonus on Climb checks while raging equal to the barbarian's level.",
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const ragingFlier: ClassOptionDocument = {
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
  visibility: 'global',
  rev: 1,
};

export const ragingGrappler: ClassOptionDocument = {
  id: 'raging-grappler',
  name: 'Raging Grappler',
  description:
    'While raging, whenever you succeed at a check to start a grapple, you can choose to deal damage as if you had also succeeded at a check to maintain the grapple.',
  source: 'pf1e-ppc-potr',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const ragingLeaper: ClassOptionDocument = {
  id: 'raging-leaper',
  name: 'Raging Leaper',
  description:
    "Gain a bonus on Acrobatics checks to jump while raging equal to the barbarian's level.",
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const ragingSwimmer: ClassOptionDocument = {
  id: 'raging-swimmer',
  name: 'Raging Swimmer',
  description:
    "Gain a bonus on Swim checks while raging equal to the barbarian's level.",
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const recklessAbandon: ClassOptionDocument = {
  id: 'reckless-abandon',
  name: 'Reckless Abandon',
  description:
    "While raging, the barbarian can take a penalty to AC in order to gain a bonus on attack rolls. The penalty and bonus are both equal to the barbarian's Constitution modifier (minimum 1). The bonus applies to all attacks in a round, but the penalty lasts until the start of the barbarian's next turn.",
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const reflexiveDodge: ClassOptionDocument = {
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
  visibility: 'global',
  rev: 1,
};

export const regenerativeVigor: ClassOptionDocument = {
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
  visibility: 'global',
  rev: 1,
};

export const renewedLife: ClassOptionDocument = {
  id: 'renewed-life',
  name: 'Renewed Life',
  description: 'Ignore temporary negative levels while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'renewed vitality rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const renewedVigor: ClassOptionDocument = {
  id: 'renewed-vigor',
  name: 'Renewed Vigor',
  description:
    "As a standard action, heal 1d8 points of damage + the barbarian's Constitution modifier. This power can be used once per day, plus one additional time per day for every four barbarian levels beyond 4th.",
  prerequisites: [{ type: 'level', minimum: 4 }],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const renewedVitality: ClassOptionDocument = {
  id: 'renewed-vitality',
  name: 'Renewed Vitality',
  description: 'Heal hit points as a standard action while raging.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const retribution: ClassOptionDocument = {
  id: 'retribution',
  name: 'Retribution',
  description:
    'Deal an additional 1d6 points of damage to creatures that damage you while raging.',
  prerequisites: [{ type: 'level', minimum: 8 }],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const reverberatingSlam: ClassOptionDocument = {
  id: 'reverberating-slam',
  name: 'Reverberating Slam',
  description:
    'Create shockwave effects that radiate out from your ground breaker attack while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'ground breaker rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const rollingDodge: ClassOptionDocument = {
  id: 'rolling-dodge',
  name: 'Rolling Dodge',
  description:
    'Gain a +1 dodge bonus to AC while raging. This bonus increases by +1 for every 6 levels the barbarian has.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const scarredScream: ClassOptionDocument = {
  id: 'scarred-scream',
  name: 'Scarred Scream',
  description:
    'Emit a damaging sonic scream as a free action while raging.',
  prerequisites: [
    { type: 'level', minimum: 10 },
    { type: 'special', description: 'scar tissue rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const scent: ClassOptionDocument = {
  id: 'scent',
  name: 'Scent',
  description: 'Gain the scent ability while raging.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const scarTissue: ClassOptionDocument = {
  id: 'scar-tissue',
  name: 'Scar Tissue',
  description:
    'While raging, ignore the first 1 point of damage per die from physical attacks.',
  prerequisites: [{ type: 'level', minimum: 6 }],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const scavenger: ClassOptionDocument = {
  id: 'scavenger',
  name: 'Scavenger',
  description:
    'Gain improved salvage abilities and bonuses to Appraise checks while raging.',
  prerequisites: [{ type: 'level', minimum: 4 }],
  source: 'pf1e-ppc-potr',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const sickeningBlows: ClassOptionDocument = {
  id: 'sickening-blows',
  name: 'Sickening Blows',
  description:
    'Sicken opponents struck by your powerful blow attacks while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'powerful blow rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const smasher: ClassOptionDocument = {
  id: 'smasher',
  name: 'Smasher',
  description:
    'Ignore the hardness of objects and gain a bonus on attack rolls against objects while raging.',
  source: 'pf1e-ppc-potr',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const sonicBoom: ClassOptionDocument = {
  id: 'sonic-boom',
  name: 'Sonic Boom',
  description:
    'Deal sonic damage and deafen targets with your ground breaker attack while raging.',
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'ground breaker rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const spiritTotem: ClassOptionDocument = {
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
  visibility: 'global',
  rev: 1,
};

export const spiritTotemGreater: ClassOptionDocument = {
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
  visibility: 'global',
  rev: 1,
};

export const spiritTotemLesser: ClassOptionDocument = {
  id: 'spirit-totem-lesser',
  name: 'Spirit Totem, Lesser',
  description:
    'While raging, the barbarian is surrounded by spirit wisps that harass her enemies. These spirits make one slam attack per round against each living enemy adjacent to the barbarian, using the barbarian\'s full base attack bonus plus her Charisma modifier. Each attack deals 1d4 points of negative energy damage plus the barbarian\'s Charisma modifier.',
  source: 'pf1e-ppc-wo',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const staggeringBlow: ClassOptionDocument = {
  id: 'staggering-blow',
  name: 'Staggering Blow',
  description:
    'Stagger opponents struck by your powerful blow attacks while raging.',
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'powerful blow rage power' },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const strengthSurge: ClassOptionDocument = {
  id: 'strength-surge',
  name: 'Strength Surge',
  description:
    "Add the barbarian's level on one Strength check or combat maneuver check, or to the barbarian's Combat Maneuver Defense when an opponent attempts a maneuver against her. This power is usable once per rage.",
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const strengthSurgeGreater: ClassOptionDocument = {
  id: 'strength-surge-greater',
  name: 'Strength Surge, Greater',
  description:
    'Gain enhanced Strength and combat maneuver bonuses while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'strength surge rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const superstition: ClassOptionDocument = {
  id: 'superstition',
  name: 'Superstition',
  description:
    'Gain a +2 morale bonus on saving throws against all spells, supernatural abilities, and spell-like abilities while raging. This bonus increases by +1 for every 4 levels the barbarian has beyond 4th.',
  prerequisites: [{ type: 'level', minimum: 4 }],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const surpriseAccuracy: ClassOptionDocument = {
  id: 'surprise-accuracy',
  name: 'Surprise Accuracy',
  description:
    'Gain a +1 morale bonus on one attack roll per rage. This bonus increases by +1 for every 4 barbarian levels beyond 4th.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const sweepingBlow: ClassOptionDocument = {
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
  visibility: 'global',
  rev: 1,
};

export const swiftFoot: ClassOptionDocument = {
  id: 'swift-foot',
  name: 'Swift Foot',
  description:
    'Gain a 5-foot enhancement bonus to speed while raging. This power can be selected multiple times.',
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const terrifyingHowl: ClassOptionDocument = {
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
  visibility: 'global',
  rev: 1,
};

export const titansBane: ClassOptionDocument = {
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
  visibility: 'global',
  rev: 1,
};

export const titanicBlow: ClassOptionDocument = {
  id: 'titanic-blow',
  name: 'Titanic Blow',
  description:
    'Deal devastating damage with a powerful blow attack while raging.',
  prerequisites: [
    { type: 'level', minimum: 12 },
    { type: 'special', description: 'powerful blow rage power' },
  ],
  source: 'pf1e-core',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const tocsin: ClassOptionDocument = {
  id: 'tocsin',
  name: 'Tocsin',
  description:
    'Alert allies through ground-based vibrations created by ground breaker while raging.',
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'ground breaker rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const trollTotem: ClassOptionDocument = {
  id: 'troll-totem',
  name: 'Troll Totem',
  description: 'Gain enhanced regeneration benefits while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'lesser troll totem rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const trollTotemGreater: ClassOptionDocument = {
  id: 'troll-totem-greater',
  name: 'Troll Totem, Greater',
  description:
    'Regeneration applies even after taking acid or fire damage while raging.',
  prerequisites: [
    { type: 'level', minimum: 10 },
    { type: 'special', description: 'troll totem rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const trollTotemLesser: ClassOptionDocument = {
  id: 'troll-totem-lesser',
  name: 'Troll Totem, Lesser',
  description:
    'Gain fast healing 1 while raging as long as you have at least 1 hit point.',
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const uncontrolledRage: ClassOptionDocument = {
  id: 'uncontrolled-rage',
  name: 'Uncontrolled Rage',
  description:
    'Continue raging even when unconscious or disabled, attacking the nearest creature.',
  prerequisites: [{ type: 'level', minimum: 12 }],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const unstoppableStrike: ClassOptionDocument = {
  id: 'unstoppable-strike',
  name: 'Unstoppable Strike',
  description:
    'Ignore some damage reduction with powerful blow attacks while raging.',
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'powerful blow rage power' },
  ],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const upsettingBlow: ClassOptionDocument = {
  id: 'upsetting-blow',
  name: 'Upsetting Blow',
  description:
    'Shake opponents struck by your powerful blow attacks while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'powerful blow rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const volcanicRage: ClassOptionDocument = {
  id: 'volcanic-rage',
  name: 'Volcanic Rage',
  description:
    'Deal fire damage and create difficult terrain from lava effects while raging.',
  prerequisites: [
    { type: 'level', minimum: 12 },
    { type: 'special', description: 'elemental rage rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const warlord: ClassOptionDocument = {
  id: 'warlord',
  name: 'Warlord',
  description:
    'Grant the benefits of reckless abandon to willing allies within 30 feet while raging.',
  prerequisites: [
    { type: 'level', minimum: 6 },
    { type: 'special', description: 'reckless abandon rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const whirlwindAssault: ClassOptionDocument = {
  id: 'whirlwind-assault',
  name: 'Whirlwind Assault',
  description:
    'Make a single melee attack against all adjacent foes as a full-round action while raging.',
  prerequisites: [
    { type: 'level', minimum: 8 },
    { type: 'special', description: 'no escape rage power' },
  ],
  source: 'pf1e-apg',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const wildTalent: ClassOptionDocument = {
  id: 'wild-talent',
  name: 'Wild Talent',
  description:
    'Gain additional combat abilities or feat benefits while raging.',
  prerequisites: [{ type: 'level', minimum: 4 }],
  source: 'pf1e-uc',
  isOfficial: true,
  visibility: 'global',
  rev: 1,
};

export const batch_002: ClassOptionDocument[] = [
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
  ragingSwimmer,
  recklessAbandon,
  reflexiveDodge,
  regenerativeVigor,
  renewedLife,
  renewedVigor,
  renewedVitality,
  retribution,
  reverberatingSlam,
  rollingDodge,
  scarredScream,
  scent,
  scarTissue,
  scavenger,
  sickeningBlows,
  smasher,
  sonicBoom,
  spiritTotem,
  spiritTotemGreater,
  spiritTotemLesser,
  staggeringBlow,
  strengthSurge,
  strengthSurgeGreater,
  superstition,
  surpriseAccuracy,
  sweepingBlow,
  swiftFoot,
  terrifyingHowl,
  titansBane,
  titanicBlow,
  tocsin,
  trollTotem,
  trollTotemGreater,
  trollTotemLesser,
  uncontrolledRage,
  unstoppableStrike,
  upsettingBlow,
  volcanicRage,
  warlord,
  whirlwindAssault,
  wildTalent,
];
