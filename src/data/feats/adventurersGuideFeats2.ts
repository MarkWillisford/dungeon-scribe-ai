import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

export const ADVENTURERS_GUIDE_FEATS_2: FeatDefinition[] = [
  {
    id: 'gray_maiden_initiate',
    name: 'Gray Maiden Initiate',
    types: ['general'],
    source: "Adventurer's Guide",
    description:
      'You gain affiliation with the Gray Maidens and select two training focuses from the following options: Avenging Knight (+1 bonus on damage rolls against any creature that dealt damage to you during the previous round); Deeper Indoctrination (+1 bonus on Will saving throws, except -2 penalty when resisting charm or compulsion effects from lawful evil creatures); Faceless Maiden (+2 bonus on Intimidate checks while wearing Gray Maiden plate); Gray Maiden Adept (arcane spell failure chance of Gray Maiden plate reduced by 5%); Gray Maiden Endurance (gain 2 hit points and can sleep in armor without fatigue); Korvosan Acceptance (+1 bonus on Diplomacy and Knowledge [local] checks, one becomes a class skill); Scarred (-1 penalty on Diplomacy and Disguise checks, but +2 bonus on Intimidate checks and saving throws against pain effects); Tamed and Broken (gain temporary hit points equal to spell level when affected by an enemy compulsion effect).',
    shortDescription: 'Join Gray Maidens; choose two training focuses granting various bonuses',
    prerequisites: [
      { type: 'special', description: 'Female' },
      { type: 'special', description: 'Must be taken at 1st level' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['gray_maidens', 'faction', 'story'],
  },

  {
    id: 'horse_whisperer',
    name: 'Horse Whisperer',
    types: ['general'],
    source: "Adventurer's Guide",
    description:
      'You gain a +2 bonus on Handle Animal and Ride checks to handle or ride horses. You can make a single Handle Animal check to command all horses within 60 feet simultaneously. Opponents can make a DC 20 Handle Animal check as an immediate action to protect their animal companion or mount from being influenced; if successful, that creature cannot be affected by this feat again for 1 hour.',
    shortDescription: '+2 on Handle Animal/Ride for horses; command multiple horses at once',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.handle_animal',
        value: 2,
        source: 'Horse Whisperer',
        condition: {
          type: 'custom',
          description: 'When handling or riding horses',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.ride',
        value: 2,
        source: 'Horse Whisperer',
        condition: {
          type: 'custom',
          description: 'When handling or riding horses',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['horses', 'handle_animal', 'ride'],
  },

  {
    id: 'improved_forceful_charge',
    name: 'Improved Forceful Charge',
    types: ['combat'],
    source: "Adventurer's Guide",
    description:
      'Your animal companion can perform bull rush maneuvers against targets up to two size categories larger than itself. If it pushes the target at least 10 feet as a result of this bull rush, it can attempt a trip combat maneuver check against the target as a free action. This trip attempt follows standard rules regarding attacks of opportunity.',
    shortDescription: 'Animal companion bull rushes larger foes; trip if pushed 10+ feet',
    prerequisites: [
      { type: 'feat', featId: 'forceful_charge' },
      { type: 'feat', featId: 'improved_bull_rush' },
      { type: 'feat', featId: 'power_attack' },
      { type: 'special', description: 'Animal companion' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['animal_companion', 'bull_rush', 'trip', 'mounted'],
  },

  {
    id: 'improved_horse_whisperer',
    name: 'Improved Horse Whisperer',
    types: ['general'],
    source: "Adventurer's Guide",
    description:
      'With a successful DC 20 Handle Animal check, you can communicate with a horse as if you were using speak with animals for 1 round. The horse remains constrained by its intelligence regarding what it can understand and accomplish.',
    shortDescription: 'Communicate with horses via DC 20 Handle Animal check',
    prerequisites: [
      { type: 'feat', featId: 'horse_whisperer' },
      { type: 'skill', skillId: 'handle_animal', ranks: 5 },
      { type: 'skill', skillId: 'ride', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['horses', 'handle_animal', 'speak_with_animals'],
  },

  {
    id: 'improved_mounted_archery',
    name: 'Improved Mounted Archery',
    types: ['combat'],
    source: "Adventurer's Guide",
    description:
      'You take no penalty when using a ranged weapon while mounted and taking a double move action. The penalty while your mount is running is reduced to -2.',
    shortDescription: 'No penalty for ranged attacks while double-moving mounted; -2 at run',
    prerequisites: [
      { type: 'feat', featId: 'mounted_archery' },
      { type: 'feat', featId: 'mounted_combat' },
      { type: 'skill', skillId: 'ride', ranks: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['mounted', 'archery', 'ranged'],
  },

  {
    id: 'legionnaires_inspiration',
    name: "Legionnaire's Inspiration",
    types: ['general'],
    source: "Adventurer's Guide",
    description:
      'As a standard action, you can select one creature you can see. All allies within 30 feet who are able to see and hear you gain a +1 morale bonus to their Armor Class against that creature for a number of rounds equal to your Charisma bonus (minimum 1 round). You can do this once per day, plus one additional time for every 3 character levels you have.',
    shortDescription: 'Grant allies +1 morale AC vs one target as standard action',
    prerequisites: [{ type: 'special', description: 'Affiliated with the Golden Legion' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'ac',
        value: 1,
        source: "Legionnaire's Inspiration",
        condition: {
          type: 'custom',
          description:
            'Allies within 30 feet who can see and hear you, against the designated target creature',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['faction', 'golden_legion', 'morale', 'aura'],
  },

  {
    id: 'mask_focus',
    name: 'Mask Focus',
    types: ['general'],
    source: "Adventurer's Guide",
    description:
      'While benefiting from the Nameless One feat, the mask you wear to gain the benefits of that feat satisfies the focus component of any spell you cast that requires a mask. Once per day, you can apply the Extend Spell metamagic feat to a spell without increasing its spell level by adding your mask as a focus component; when applied this way, the duration increase applies only to effects targeting yourself, not other creatures affected by the spell. For shamans and mediums, when you use a supernatural ability granted by your spirit, you increase your effective class level by 1 when determining the effects of that ability.',
    shortDescription:
      'Mask satisfies focus components; once/day free Extend Spell for self-effects',
    prerequisites: [
      { type: 'feat', featId: 'extend_spell' },
      { type: 'feat', featId: 'nameless_one' },
      { type: 'special', description: 'Ability to cast 3rd-level arcane spells' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['mask', 'metamagic', 'arcane', 'nameless_one'],
  },

  {
    id: 'masked_by_fear_ag',
    name: 'Masked by Fear',
    types: ['general'],
    source: "Adventurer's Guide",
    description:
      'By donning a mask etched with your greatest terrors, you are able to eschew fear completely. While benefiting from the Nameless One feat, when you suffer the cowering, frightened, or panicked condition, that condition causes you to act as if shaken instead of imposing its normal effects. In addition, whenever you attempt a skill check (normally Intimidate) to demoralize an opponent, you gain a +3 bonus on the check.',
    shortDescription: 'While masked, reduce fear conditions to shaken; +3 on demoralize checks',
    prerequisites: [
      { type: 'feat', featId: 'nameless_one' },
      { type: 'special', description: 'Base Will save bonus +6 or bravery class feature' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.intimidate',
        value: 3,
        source: 'Masked by Fear',
        condition: {
          type: 'custom',
          description:
            'When attempting to demoralize an opponent while benefiting from Nameless One',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['mask', 'fear', 'intimidate', 'nameless_one'],
  },

  {
    id: 'masked_intent',
    name: 'Masked Intent',
    types: ['general'],
    source: "Adventurer's Guide",
    description:
      "While you're benefiting from the Nameless One feat, your intentions become difficult to read. You gain a +4 circumstance bonus on opposed Bluff checks, and increase the DC by 4 of checks to gather information about you using Diplomacy, to answer questions about you or your abilities or weaknesses using the appropriate Knowledge skill, or to identify any spells or spell-like abilities that you cast using Spellcraft. If you have 10 or more ranks in any of these skills, the bonus for that skill or increase to that DC increases to +8.",
    shortDescription:
      '+4 circumstance bonus to Bluff and +4 DC on checks to identify you while masked',
    prerequisites: [{ type: 'feat', featId: 'nameless_one' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skill.bluff',
        value: 4,
        source: 'Masked Intent',
        condition: {
          type: 'custom',
          description:
            'On opposed Bluff checks while benefiting from Nameless One (increases to +8 with 10+ ranks)',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['mask', 'bluff', 'stealth', 'nameless_one'],
  },

  {
    id: 'mounted_blade_ag',
    name: 'Mounted Blade',
    types: ['combat'],
    source: "Adventurer's Guide",
    description:
      'When you use the Ride-By Attack feat, if your attack hits, you can also make an attack against a target adjacent to your original target. You take a -5 penalty on this additional attack, which does not benefit from any effects of a charge.',
    shortDescription: 'After a Ride-By Attack hit, make an extra attack vs. adjacent foe at -5',
    prerequisites: [
      { type: 'feat', featId: 'mounted_combat' },
      { type: 'feat', featId: 'ride_by_attack' },
      { type: 'skill', skillId: 'ride', ranks: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['mounted', 'ride_by_attack', 'extra_attack'],
  },

  {
    id: 'mounted_onslaught',
    name: 'Mounted Onslaught',
    types: ['combat'],
    source: "Adventurer's Guide",
    description:
      'On your turn, you can overrun more than one creature. Each overrun combat maneuver check beyond the first takes a cumulative -5 penalty. If you fail to overrun a target, your movement ends. Your mount can make only a single hoof attack against one target that is knocked prone by your overrun (not one per prone opponent). Normally you can perform only one overrun combat maneuver per round.',
    shortDescription: 'Overrun multiple creatures in one turn with cumulative -5 penalties',
    prerequisites: [
      { type: 'feat', featId: 'mounted_combat' },
      { type: 'feat', featId: 'trample' },
      { type: 'skill', skillId: 'ride', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['mounted', 'overrun', 'trample'],
  },

  {
    id: 'nameless_one',
    name: 'Nameless One',
    types: ['general'],
    source: "Adventurer's Guide",
    description:
      'You perform an 8-hour ritual costing 200 gp to completely sever your former identity. You eschew all of your former identities, going as far as to render your former name completely inaccessible to discover by mortal means. You adopt a descriptive title instead and create a special mask. Scrying or location attempts targeting your eschewed identities reveal only darkness. You are immune to effects requiring use of your name (e.g., named bullet). You cannot wear magic items in the head slot while using the mask, and cannot impersonate specific individuals. Successful Knowledge checks reveal your new title rather than old identities. Revealing your connection to past identities causes immediate loss of benefits and inflicts 1d4 permanent negative levels, requiring atonement to restore the feat.',
    shortDescription:
      'Sever your identity via ritual; become immune to name-based effects while masked',
    prerequisites: [],
    effects: [],
    activationMode: 'toggle',
    tags: ['mask', 'identity', 'ritual', 'arcane_anthology'],
  },

  {
    id: 'perfect_style',
    name: 'Perfect Style',
    types: ['combat', 'style'],
    source: "Adventurer's Guide",
    description:
      'Upon selecting this feat, you choose one House of Perfection (permanent choice). You gain energy resistance 5 based on your house: Monastery of Untwisting Iron (acid resistance 5), Monastery of Unblinking Flame (fire resistance 5), or Monastery of Unfolding Wind (electricity resistance 5). You gain a ki pool with 2 points, increasing by 1 at 9th level and every 4 levels thereafter. This resistance stacks with racial or class feature resistances. You can select this feat multiple times, each time choosing a different House of Perfection.',
    shortDescription:
      'Gain energy resistance 5 and a ki pool based on your chosen House of Perfection',
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'special', description: 'Base attack bonus +5 or monk level 5th' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'energy_resistance',
        value: 5,
        source: 'Perfect Style',
        condition: {
          type: 'custom',
          description:
            'Acid, fire, or electricity resistance 5 based on chosen House of Perfection; stacks with racial and class feature resistances',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['ki', 'style', 'energy_resistance', 'house_of_perfection', 'monk'],
  },

  {
    id: 'purifying_channel_ag',
    name: 'Purifying Channel',
    types: ['general'],
    source: "Adventurer's Guide",
    description:
      'When you channel positive energy to heal, one creature that you exclude from your channeling takes an amount of fire damage equal to the die result you roll for healing, and is dazzled for 1 round by the light of these flames. A successful saving throw against your channel energy halves the fire damage and negates the dazzled effect.',
    shortDescription: 'When healing via channel, deal fire damage to one excluded creature',
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 15 },
      { type: 'feat', featId: 'selective_channeling' },
      { type: 'class_feature', featureName: 'channel energy' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['channel_energy', 'fire', 'healing', 'cleric'],
  },

  {
    id: 'redistributed_might',
    name: 'Redistributed Might',
    types: ['combat'],
    source: "Adventurer's Guide",
    description:
      "Whenever an effect would grant you an enhancement or morale bonus to your Strength score (such as via bull's strength or a skald's inspired rage performance), you can instead apply that bonus to your Dexterity score. You select which ability receives the bonus when you first obtain it.",
    shortDescription: 'Redirect Strength enhancement or morale bonuses to Dexterity instead',
    prerequisites: [
      { type: 'special', description: 'Constitution 13 or Wisdom 13' },
      { type: 'feat', featId: 'enhanced_morale' },
      { type: 'feat', featId: 'exotic_weapon_proficiency_aldori_dueling_sword' },
      { type: 'feat', featId: 'iron_will' },
      { type: 'bab', minimum: 4 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['aldori', 'strength', 'dexterity', 'enhancement'],
  },

  {
    id: 'ritual_mask',
    name: 'Ritual Mask',
    types: ['general'],
    source: "Adventurer's Guide",
    description:
      "When using the Nameless One feat's masked identity, you can attempt all required skill checks for occult rituals you know, even if untrained in such a skill. If trained in the relevant skill, you receive a +3 bonus on your skill check. For characters with spirit class features (shaman or medium), once per day when you use a supernatural ability granted to you by your spirit, you increase your effective class level by 1 when determining the effects of that supernatural ability.",
    shortDescription:
      'Use occult rituals untrained while masked; +3 if trained; spirit power boosted',
    prerequisites: [
      { type: 'feat', featId: 'nameless_one' },
      { type: 'special', description: 'Ability to cast one or more occult rituals' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'special.occult_ritual_skill_check',
        value: 3,
        source: 'Ritual Mask',
        condition: {
          type: 'custom',
          description:
            'When trained in the skill required for an occult ritual while benefiting from Nameless One',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['mask', 'occult', 'ritual', 'spirit', 'nameless_one'],
  },

  {
    id: 'rugged_northerner',
    name: 'Rugged Northerner',
    types: ['general'],
    source: "Adventurer's Guide",
    description:
      'You treat extreme cold conditions as severe cold, and severe cold as normal cold weather. Normal cold weather imposes no penalties on you. You cannot become fatigued from frostbite or hypothermia. This feat is unaffiliated; a creature need not be affiliated with the Mammoth Lords to select this feat.',
    shortDescription: 'Downgrade cold condition severity; immune to frostbite/hypothermia fatigue',
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'skill', skillId: 'survival', ranks: 1 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['cold', 'environment', 'survival', 'mammoth_lords'],
  },

  {
    id: 'scarlet_rose_devotion',
    name: 'Scarlet Rose Devotion',
    types: ['general'],
    source: "Adventurer's Guide",
    description:
      'Through the bond of sisterhood, you can inspire your allies to overcome terrible threats. When allies within 30 feet make saving throws, you may use an immediate action to attempt a DC 10 Perform (oratory) check. Success grants the ally a +2 morale bonus on her saving throw. The ability requires that the ally can hear and understand your speech.',
    shortDescription:
      'Use immediate action to grant ally +2 morale on saving throw via Perform check',
    prerequisites: [
      { type: 'feat', featId: 'bodyguard' },
      { type: 'feat', featId: 'combat_reflexes' },
      { type: 'skill', skillId: 'perform_oratory', ranks: 3 },
      { type: 'special', description: 'Any good alignment' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'save.all',
        value: 2,
        source: 'Scarlet Rose Devotion',
        condition: {
          type: 'custom',
          description:
            'Ally within 30 feet who can hear and understand you, when they attempt a saving throw; requires immediate action and DC 10 Perform (oratory) check',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['gray_maidens', 'morale', 'saving_throw', 'teamwork_support'],
  },

  {
    id: 'scholar',
    name: 'Scholar',
    types: ['general'],
    source: "Adventurer's Guide",
    description:
      'You have graduated from one of the many colleges, universities, and specialized schools of higher learning scattered throughout the Inner Sea region. Select any two Knowledge skills and gain a +2 bonus on checks with those skills. If you have 10 or more ranks in one of these Knowledge skills, the bonus increases to +4 for that skill. This feat is unaffiliated; a creature need not be affiliated with the Magaambya to select this feat.',
    shortDescription: '+2 (or +4 at 10 ranks) on two chosen Knowledge skills',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.all',
        value: 2,
        source: 'Scholar',
        condition: {
          type: 'custom',
          description:
            'On checks with the two Knowledge skills selected when this feat was chosen (increases to +4 with 10+ ranks)',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['knowledge', 'skills', 'magaambya', 'academic'],
  },

  {
    id: 'serrens_masterstroke',
    name: "Serren's Masterstroke",
    types: ['combat'],
    source: "Adventurer's Guide",
    description:
      'Once per round when you hit a foe you have successfully feinted against via a melee attack using an Aldori dueling sword, you deal an extra 2d6 points of precision damage. This damage increases to 3d6 at base attack bonus +11 and 4d6 at base attack bonus +16. This precision damage does not stack with sneak attack or similar effects, and defenses against sneak attack also protect against this damage.',
    shortDescription: 'After feinting, deal 2d6-4d6 precision damage with Aldori dueling sword',
    prerequisites: [
      { type: 'feat', featId: 'exotic_weapon_proficiency_aldori_dueling_sword' },
      { type: 'feat', featId: 'weapon_focus_aldori_dueling_sword' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['aldori', 'feint', 'precision', 'dueling'],
  },

  {
    id: 'sinister_reputation',
    name: 'Sinister Reputation',
    types: ['general'],
    source: "Adventurer's Guide",
    description:
      'After spending 8 hours cultivating your local legend and succeeding at an Intimidate check (DC varies by settlement size: Thorp 10, Hamlet 12, Village 15, Small town 18, Large town 20, Small city 25, Large city 30, Metropolis 35), your reputation becomes known in that settlement. You can then attempt Intimidate checks to demoralize creatures with fewer Hit Dice as a swift action, and using Intimidate to change friendly behavior takes half the normal time. Benefits last for a number of days equal to half your level plus your Charisma modifier, and only apply within the settlement while not disguised. Vigilantes gain automatic benefits in their area of renown.',
    shortDescription:
      'Establish local legend; demoralize as swift action and halve Intimidate time',
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'skill', skillId: 'intimidate', ranks: 5 },
      { type: 'special', description: 'Persuasive feat or renown social talent' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['intimidate', 'reputation', 'social', 'settlement'],
  },

  {
    id: 'sisterhood_dedication',
    name: 'Sisterhood Dedication',
    types: ['combat'],
    source: "Adventurer's Guide",
    description:
      'When using Sisterhood Style with a longsword and shield, the saving throw bonus increases to +2 and you extend half that bonus (+1) to allies within 20 feet. Additionally, you may select two teamwork feats you possess and grant either one feat to two allies or both feats to a single ally within 20 feet as a swift action, lasting until your next turn begins.',
    shortDescription:
      'Sisterhood Style grants +2 saves; grant two teamwork feats to allies as swift action',
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'feat', featId: 'shield_focus' },
      { type: 'feat', featId: 'shield_wall' },
      { type: 'feat', featId: 'sisterhood_rampart' },
      { type: 'feat', featId: 'sisterhood_style' },
      { type: 'feat', featId: 'weapon_focus_longsword' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'save.all',
        value: 2,
        source: 'Sisterhood Dedication',
        condition: {
          type: 'custom',
          description: 'While using Sisterhood Style with a longsword and shield',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['gray_maidens', 'style', 'teamwork', 'longsword', 'shield'],
  },

  {
    id: 'sisterhood_rampart',
    name: 'Sisterhood Rampart',
    types: ['combat'],
    source: "Adventurer's Guide",
    description:
      "When utilizing Sisterhood Style, you and nearby allies receive an extra +1 to shield bonuses from Shield Wall. Additionally, everyone in this formation adds their shield bonus to AC against bull rush attempts. You and adjacent allies do not provide soft cover against allies' attacks.",
    shortDescription:
      '+1 to Shield Wall bonuses; add shield AC vs bull rush; no soft cover to allies',
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'feat', featId: 'shield_focus' },
      { type: 'feat', featId: 'shield_wall' },
      { type: 'feat', featId: 'sisterhood_style' },
      { type: 'feat', featId: 'weapon_focus_longsword' },
      { type: 'bab', minimum: 4 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.SHIELD,
        target: 'ac',
        value: 1,
        source: 'Sisterhood Rampart',
        condition: {
          type: 'custom',
          description: 'Extra +1 to shield bonus from Shield Wall while using Sisterhood Style',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['gray_maidens', 'style', 'shield', 'formation', 'bull_rush'],
  },

  {
    id: 'sisterhood_style',
    name: 'Sisterhood Style',
    types: ['combat', 'style'],
    source: "Adventurer's Guide",
    description:
      'You gain a +1 bonus on Reflex and Will saving throws while using this style with a longsword and shield. Additionally, upon entering the stance, you may select a teamwork feat you possess and grant it to an ally within 10 feet as a swift action, lasting until the start of your next turn.',
    shortDescription: '+1 Reflex and Will saves; grant a teamwork feat to an ally within 10 feet',
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'feat', featId: 'shield_focus' },
      { type: 'feat', featId: 'weapon_focus_longsword' },
      { type: 'bab', minimum: 2 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'save.reflex',
        value: 1,
        source: 'Sisterhood Style',
        condition: {
          type: 'custom',
          description: 'While using Sisterhood Style with a longsword and shield',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'save.will',
        value: 1,
        source: 'Sisterhood Style',
        condition: {
          type: 'custom',
          description: 'While using Sisterhood Style with a longsword and shield',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['gray_maidens', 'style', 'longsword', 'shield', 'teamwork'],
  },

  {
    id: 'spirit_beacon_ag',
    name: 'Spirit Beacon',
    types: ['general'],
    source: "Adventurer's Guide",
    description:
      'Select one spirit category (fey, outsiders, or undead including haunts). You receive a +1 bonus on Perception and Sense Motive checks against those creatures, increasing to +2 if you have 10 or more ranks in either skill. Additionally, you gain a +1 dodge bonus to your Armor Class against creatures of the chosen type, and a +1 insight bonus on Will saving throws against supernatural abilities of that type. Loss of your Dexterity bonus to AC also removes these bonuses. As a drawback, fey, outsiders, and undead creatures gain a +2 bonus on Perception checks to notice you. This feat can be selected up to three times, each time choosing a different creature type.',
    shortDescription:
      '+1 Perception/Sense Motive vs chosen spirits; +1 dodge AC and +1 Will vs their abilities',
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'iron_will' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.perception',
        value: 1,
        source: 'Spirit Beacon',
        condition: {
          type: 'custom',
          description:
            'Against creatures of chosen spirit type (fey, outsiders, or undead); increases to +2 with 10+ ranks',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.DODGE,
        target: 'ac',
        value: 1,
        source: 'Spirit Beacon',
        condition: {
          type: 'custom',
          description: 'Against creatures of chosen spirit type; lost if Dex bonus to AC is lost',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'save.will',
        value: 1,
        source: 'Spirit Beacon',
        condition: {
          type: 'custom',
          description: 'Against supernatural abilities of creatures of chosen spirit type',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['spirits', 'perception', 'undead', 'fey', 'outsiders', 'will'],
  },
];

// CHECKPOINT: last_written=spirit_beacon, written=25/25, status=complete
