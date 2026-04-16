import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const ACG_FEATS: FeatDefinition[] = [
  // ==================== PANACHE FEATS ====================
  {
    id: 'extra_panache',
    name: 'Extra Panache',
    description:
      'You have more panache than normal. You gain 2 more panache points at the start of each day, and your maximum panache increases by 2.',
    shortDescription: 'Gain 2 additional panache points',
    source: 'Advanced Class Guide',
    types: ['panache'],
    prerequisites: [{ type: 'class_feature', featureName: 'panache class feature' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'resource.panache',
        value: 2,
        source: 'Extra Panache',
      },
    ],
    activationMode: 'passive',
    tags: ['panache', 'swashbuckler', 'resource'],
  },

  // ==================== EXTRA CLASS FEATURE FEATS ====================
  {
    id: 'extra_investigator_talent',
    name: 'Extra Investigator Talent',
    description:
      'You gain one additional investigator talent. You must meet all of the prerequisites for this investigator talent.',
    shortDescription: 'Gain one additional investigator talent',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'investigator talent class feature' }],
    effects: [],
    activationMode: 'passive',
    tags: ['investigator', 'talent', 'extra'],
  },
  {
    id: 'extra_slayer_talent',
    name: 'Extra Slayer Talent',
    description:
      'You gain one additional slayer talent. You must meet the prerequisites for this slayer talent.',
    shortDescription: 'Gain one additional slayer talent',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'slayer talent class feature' }],
    effects: [],
    activationMode: 'passive',
    tags: ['slayer', 'talent', 'extra'],
  },
  {
    id: 'extra_bane',
    name: 'Extra Bane',
    description: 'You can use your bane ability for 3 additional rounds per day.',
    shortDescription: 'Use bane ability for 3 additional rounds per day',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'bane class feature' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'resource.bane_rounds',
        value: 3,
        source: 'Extra Bane',
      },
    ],
    activationMode: 'passive',
    tags: ['inquisitor', 'bane', 'resource'],
  },
  {
    id: 'extra_arcanist_exploit',
    name: 'Extra Arcanist Exploit',
    description:
      'You gain one additional arcanist exploit. You must meet the prerequisites for this arcanist exploit.',
    shortDescription: 'Gain one additional arcanist exploit',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'arcanist exploit class feature' }],
    effects: [],
    activationMode: 'passive',
    tags: ['arcanist', 'exploit', 'extra'],
  },

  // ==================== SNEAK ATTACK / SLAYER ====================
  {
    id: 'accomplished_sneak_attacker',
    name: 'Accomplished Sneak Attacker',
    description:
      'Your sneak attack damage increases by 1d6. Your number of sneak attack dice cannot exceed half your character level (rounded up).',
    shortDescription: '+1d6 sneak attack damage (max half character level)',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'sneak attack 1d6' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'sneak_attack',
        value: 1,
        source: 'Accomplished Sneak Attacker',
      },
    ],
    activationMode: 'passive',
    tags: ['sneak attack', 'rogue', 'slayer', 'damage'],
  },

  // ==================== BLOODRAGER FEATS ====================
  {
    id: 'extra_bloodrage',
    name: 'Extra Bloodrage',
    description: 'You can bloodrage for 6 additional rounds per day.',
    shortDescription: 'Gain 6 additional rounds of bloodrage per day',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'bloodrage class feature' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'resource.bloodrage_rounds',
        value: 6,
        source: 'Extra Bloodrage',
      },
    ],
    activationMode: 'passive',
    tags: ['bloodrager', 'bloodrage', 'resource'],
  },
  {
    id: 'blooded_arcane_strike',
    name: 'Blooded Arcane Strike',
    description:
      "While you are bloodraging, you don't need to spend a swift action to use your Arcane Strike feat—it is always in effect. When you use the attack action or full-attack action while bloodraging, all of your attacks are treated as if you were using Arcane Strike.",
    shortDescription: 'Arcane Strike always active while bloodraging',
    source: 'Advanced Class Guide',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'arcane_strike' },
      { type: 'class_feature', featureName: 'bloodrage class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['bloodrager', 'arcane strike', 'bloodrage'],
  },

  // ==================== WEAPON OF THE CHOSEN ====================
  {
    id: 'weapon_of_the_chosen',
    name: 'Weapon of the Chosen',
    description:
      "As a swift action, you can call upon your deity to guide an attack you make with your deity's favored weapon. On your next attack in that round with that weapon, your weapon counts as magical for the purpose of overcoming damage reduction, and you can roll your attack roll twice and take the higher result. If one of these rolls is a critical threat, you can only apply this effect to that roll (you must take the other result for the other roll).",
    shortDescription: 'Swift action to roll attack twice with favored weapon, take better result',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'channel energy class feature' },
      { type: 'special', description: 'Must worship and receive spells from a deity' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['warpriest', 'favored weapon', 'attack'],
  },
  {
    id: 'improved_weapon_of_the_chosen',
    name: 'Improved Weapon of the Chosen',
    description:
      "When you use your deity's favored weapon to attempt an attack that you have used Weapon of the Chosen on, you can also add your Wisdom bonus to the damage roll. If the attack is a critical hit, you do not add this bonus damage on the critical hit.",
    shortDescription: 'Add Wis bonus to damage with favored weapon when using Weapon of the Chosen',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'weapon_of_the_chosen' },
      { type: 'special', description: 'Must worship and receive spells from a deity' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['warpriest', 'favored weapon', 'damage'],
  },
  {
    id: 'greater_weapon_of_the_chosen',
    name: 'Greater Weapon of the Chosen',
    description:
      "When you use Weapon of the Chosen, the attack and damage rolls gain a bonus equal to half your favored weapon's enhancement bonus (if any). In addition, your favored weapon overcomes damage reduction as if it were aligned to your deity's alignment.",
    shortDescription: 'Favored weapon overcomes DR as aligned, bonus from enhancement',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'improved_weapon_of_the_chosen' },
      { type: 'special', description: 'Must worship and receive spells from a deity' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['warpriest', 'favored weapon', 'DR'],
  },

  // ==================== TEAMWORK FEATS ====================
  {
    id: 'bonded_mind',
    name: 'Bonded Mind',
    description:
      'You are so close to your allies that you can almost read their thoughts. As long as you can see each other, you and an ally who also has this feat can trade nonverbal messages. These function as the message spell.',
    shortDescription: 'Communicate nonverbally with allies who have this feat',
    source: 'Advanced Class Guide',
    types: ['teamwork'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['teamwork', 'communication'],
  },
  {
    id: 'share_spells_teamwork',
    name: 'Share Spells (Teamwork)',
    description:
      'You can cast a spell with a target of "you" on an ally as a touch spell, as per the share spells familiar ability, so long as the ally possesses this feat. Alternatively, you may cast a spell with a target of "you" that instead affects all allies within 30 feet who also have this feat.',
    shortDescription: 'Cast personal spells on allies with this feat',
    source: 'Advanced Class Guide',
    types: ['teamwork'],
    prerequisites: [
      { type: 'feat', featId: 'bonded_mind' },
      { type: 'caster_level', minimum: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['teamwork', 'spellcasting', 'sharing'],
  },
  {
    id: 'telepathic_bond_teamwork',
    name: 'Telepathic Bond (Teamwork)',
    description:
      'So long as you and an ally who has this feat are within 30 feet of each other, you can communicate telepathically as if using a telepathic bond spell.',
    shortDescription: 'Telepathic communication within 30 ft with allies who have this feat',
    source: 'Advanced Class Guide',
    types: ['teamwork'],
    prerequisites: [{ type: 'feat', featId: 'bonded_mind' }],
    effects: [],
    activationMode: 'passive',
    tags: ['teamwork', 'telepathy', 'communication'],
  },

  // ==================== STYLE FEATS: STARTOSS ====================
  {
    id: 'startoss_style',
    name: 'Startoss Style',
    description:
      'You gain a +2 bonus on damage rolls made with thrown weapons. You must use this style with a thrown weapon to benefit from its feats.',
    shortDescription: '+2 damage with thrown weapons',
    source: 'Advanced Class Guide',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'special', description: 'Weapon Focus with a thrown weapon' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'damage.thrown',
        value: 2,
        source: 'Startoss Style',
        condition: {
          type: 'weapon_type',
          params: { category: 'thrown' },
          description: 'Using a thrown weapon',
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'thrown weapon', 'damage'],
  },
  {
    id: 'startoss_comet',
    name: 'Startoss Comet',
    description:
      'When using Startoss Style and making a full attack with thrown weapons, if your first thrown weapon attack hits, you can immediately make another thrown weapon attack at your highest attack bonus against a target within one range increment of the first target. You can make only one additional attack per round with this feat.',
    shortDescription: 'Extra thrown attack on hit during full attack',
    source: 'Advanced Class Guide',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'startoss_style' },
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'bab', minimum: 4 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'thrown weapon', 'extra attack'],
  },
  {
    id: 'startoss_shower',
    name: 'Startoss Shower',
    description:
      'When using Startoss Style and Startoss Comet, the bonus attacks granted by Startoss Comet continue as long as you keep hitting. Each consecutive bonus attack takes a cumulative -2 penalty on the attack roll, and each must target a different creature within one range increment of the previous target. You can continue this chain so long as you keep hitting and have new targets.',
    shortDescription: 'Chain thrown attacks as long as each hits a new target',
    source: 'Advanced Class Guide',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'startoss_comet' },
      { type: 'bab', minimum: 8 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'thrown weapon', 'chain attack'],
  },

  // ==================== STYLE FEATS: CERBERUS ====================
  {
    id: 'cerberus_style',
    name: 'Cerberus Style',
    description:
      'While using this style, you gain a +1 bonus on attack rolls with unarmed strikes against flat-footed opponents. You also gain a +2 bonus on combat maneuver checks made to grapple flat-footed opponents.',
    shortDescription: '+1 attack vs flat-footed, +2 grapple vs flat-footed',
    source: 'Advanced Class Guide',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'intimidate', ranks: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.unarmed',
        value: 1,
        source: 'Cerberus Style',
        condition: {
          type: 'target_type',
          params: { condition: 'flat-footed' },
          description: 'Against flat-footed opponents',
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'unarmed', 'flat-footed'],
  },
  {
    id: 'cerberus_snare',
    name: 'Cerberus Snare',
    description:
      'While using Cerberus Style, when you successfully grapple a flat-footed opponent, that opponent cannot attempt to break free from the grapple as a standard action and instead must use a full-round action to do so.',
    shortDescription: 'Grappled flat-footed foes need full-round to escape',
    source: 'Advanced Class Guide',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'cerberus_style' },
      { type: 'feat', featId: 'improved_grapple' },
      { type: 'skill', skillId: 'intimidate', ranks: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'grapple', 'flat-footed'],
  },
  {
    id: 'cerberus_crush',
    name: 'Cerberus Crush',
    description:
      'While using Cerberus Style, when you pin a flat-footed opponent, that opponent takes an amount of damage equal to your unarmed strike damage + 1-1/2 times your Strength bonus at the start of each of its turns that it remains pinned.',
    shortDescription: 'Pinned flat-footed foes take unarmed damage each round',
    source: 'Advanced Class Guide',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'cerberus_snare' },
      { type: 'skill', skillId: 'intimidate', ranks: 7 },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'grapple', 'pin', 'damage'],
  },

  // ==================== STYLE FEATS: KYTON ====================
  {
    id: 'kyton_style',
    name: 'Kyton Style',
    description:
      'While using this style, you gain a +1 bonus on damage rolls with chains, spiked chains, and whips. This bonus increases by +1 for every 4 levels beyond 1st (maximum +5 at 17th level).',
    shortDescription: '+1 damage with chains/whips, scaling with level',
    source: 'Advanced Class Guide',
    types: ['combat', 'style'],
    prerequisites: [
      {
        type: 'special',
        description: 'Exotic Weapon Proficiency (spiked chain) or Weapon Proficiency (whip)',
      },
      { type: 'bab', minimum: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'damage.chain_whip',
        value: 1,
        source: 'Kyton Style',
        condition: {
          type: 'weapon_type',
          params: { names: 'chain,spiked chain,whip' },
          description: 'Using a chain or whip weapon',
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['style', 'chain', 'whip', 'damage'],
  },
  {
    id: 'kyton_shield',
    name: 'Kyton Shield',
    description:
      'While using Kyton Style, you gain a shield bonus to your AC equal to half the damage bonus you receive from Kyton Style (minimum +1). You lose this bonus if you are flat-footed or lose your Dexterity bonus to AC.',
    shortDescription: 'Gain shield bonus to AC while using Kyton Style',
    source: 'Advanced Class Guide',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'kyton_style' },
      { type: 'bab', minimum: 4 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.SHIELD,
        target: 'ac',
        value: 1,
        source: 'Kyton Shield',
      },
    ],
    activationMode: 'conditional',
    tags: ['style', 'chain', 'whip', 'AC', 'shield'],
  },
  {
    id: 'kyton_cut',
    name: 'Kyton Cut',
    description:
      'While using Kyton Style, when you confirm a critical hit with a chain, spiked chain, or whip, the target is also staggered for 1 round.',
    shortDescription: 'Critical hits with chains/whips stagger foe for 1 round',
    source: 'Advanced Class Guide',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'kyton_shield' },
      { type: 'bab', minimum: 8 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'chain', 'whip', 'critical', 'stagger'],
  },

  // ==================== STYLE FEATS: ASCETIC ====================

  // ==================== GENERAL POWER FEATS ====================
  {
    id: 'barroom_brawler',
    name: 'Barroom Brawler',
    description:
      "Once per day as a move action, you can gain the benefit of a combat feat you don't possess for 1 minute. You must meet all the feat's prerequisites. You may use this ability additional times per day by spending a grit or panache point each time after the first.",
    shortDescription: 'Gain a combat feat you qualify for as a move action for 1 minute',
    source: 'Advanced Class Guide',
    types: ['combat'],
    prerequisites: [{ type: 'bab', minimum: 4 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['flexibility', 'combat feat', 'temporary'],
  },
  {
    id: 'feral_combat_training',
    name: 'Feral Combat Training',
    description:
      'Choose one of your natural weapons. While using the selected natural weapon, you can apply the effects of feats that have Improved Unarmed Strike as a prerequisite, as well as effects that augment an unarmed strike.',
    shortDescription: 'Apply unarmed strike feats to a chosen natural weapon',
    source: 'Advanced Class Guide',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'special', description: 'Weapon Focus with selected natural weapon' },
    ],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'custom',
        label: 'Natural Weapon',
        affectsEffects: true,
        effectTargetTemplate: 'natural_weapon.{choice}',
      },
    ],
    tags: ['natural weapon', 'unarmed', 'monk'],
  },
  {
    id: 'planar_focus_acg',
    name: 'Planar Focus',
    description:
      'When you use your animal focus class feature, you can choose from the following additional options: Chaos (your natural attacks and unarmed strikes count as chaotic-aligned), Evil (gain a +1 profane bonus on attack rolls and saving throws), Good (gain a +1 sacred bonus on attack rolls and saving throws), Law (your natural attacks and unarmed strikes count as lawful-aligned).',
    shortDescription: 'Additional alignment-themed animal focus options',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'animal focus class feature' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['hunter', 'animal focus', 'planar'],
  },
  {
    id: 'studied_combatant',
    name: 'Studied Combatant',
    description:
      "You gain the investigator's studied combat class feature, treating your character level as your investigator level. If you already have the studied combat class feature, you instead treat your effective investigator level as your character level.",
    shortDescription: 'Gain studied combat or use full character level for it',
    source: 'Advanced Class Guide',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['investigator', 'studied combat', 'insight'],
  },
  {
    id: 'twist_away',
    name: 'Twist Away',
    description:
      'When you are the target of a Fortitude save, you may make a Reflex save instead. If you do and you succeed, you are staggered until the end of your next turn. If you fail the save, you suffer the effects as normal.',
    shortDescription: 'Use Reflex save instead of Fortitude (staggered on success)',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Evasion class feature' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['save', 'reflex', 'fortitude', 'evasion'],
  },
  {
    id: 'artful_dodge',
    name: 'Artful Dodge',
    description:
      'If you can see an opponent, you can use your Intelligence modifier in place of your Dexterity modifier for the purpose of meeting the prerequisites of Combat Expertise and any feat that lists Combat Expertise as a prerequisite. In addition, you may use your Intelligence modifier in place of your Dexterity modifier for the purpose of qualifying for the Dodge feat.',
    shortDescription: 'Use Int instead of Dex to qualify for Combat Expertise and Dodge chains',
    source: 'Advanced Class Guide',
    types: ['combat'],
    prerequisites: [{ type: 'ability_score', ability: 'INT', minimum: 13 }],
    effects: [],
    activationMode: 'passive',
    tags: ['prerequisite substitution', 'intelligence', 'investigator'],
  },

  // ==================== EXTRA CLASS RESOURCE FEATS ====================
  {
    id: 'extra_inspiration',
    name: 'Extra Inspiration',
    description: 'You gain three extra uses of inspiration per day.',
    shortDescription: 'Gain 3 extra inspiration uses per day',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'inspiration class feature' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'resource.inspiration',
        value: 3,
        source: 'Extra Inspiration',
      },
    ],
    activationMode: 'passive',
    tags: ['investigator', 'inspiration', 'resource'],
  },
  {
    id: 'extra_reservoir',
    name: 'Extra Reservoir',
    description:
      'You gain 3 more points in your arcane reservoir, and the maximum number of points in your arcane reservoir increases by that amount.',
    shortDescription: 'Gain 3 additional arcane reservoir points',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'arcane reservoir class feature' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'resource.arcane_reservoir',
        value: 3,
        source: 'Extra Reservoir',
      },
    ],
    activationMode: 'passive',
    tags: ['arcanist', 'arcane reservoir', 'resource'],
  },
  {
    id: 'extra_spirit',
    name: 'Extra Spirit',
    description: 'You can use your spirit ability one additional time per day.',
    shortDescription: 'Gain one additional spirit use per day',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'spirit class feature' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'resource.spirit',
        value: 1,
        source: 'Extra Spirit',
      },
    ],
    activationMode: 'passive',
    tags: ['shaman', 'spirit', 'resource'],
  },

  // ==================== METAMAGIC ====================
  {
    id: 'studied_spell',
    name: 'Studied Spell',
    description:
      "When you cast a spell that deals damage and that targets a creature you are studying with studied combat, you may increase the damage dealt by an amount equal to 1/2 your caster level (minimum 1). A studied spell uses up a spell slot one level higher than the spell's actual level.",
    shortDescription: '+1/2 caster level damage to studied target, +1 spell level',
    source: 'Advanced Class Guide',
    types: ['metamagic'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'class_feature', featureName: 'studied combat class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['metamagic', 'investigator', 'studied combat', 'damage'],
  },

  // ==================== ITEM CREATION ====================
  {
    id: 'craft_poppet_acg',
    name: 'Craft Poppet',
    description:
      'You can create poppets, magical constructs that obey your commands. Creating a poppet takes 1 day for each 1,000 gp in its base price. To create a poppet, you must use up raw materials costing half of its base price.',
    shortDescription: 'Create poppet constructs',
    source: 'Advanced Class Guide',
    types: ['item_creation'],
    prerequisites: [
      { type: 'caster_level', minimum: 1 },
      { type: 'special', description: 'Craft (any) 1 rank' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['crafting', 'construct', 'poppet'],
  },

  // ==================== WARPRIEST / BLESSING FEATS ====================
  {
    id: 'blessed_hammer',
    name: 'Blessed Hammer',
    description:
      'When wielding a weapon you have chosen with your sacred weapon ability, you can treat it as if it had the throwing weapon special ability. In addition, you can catch the weapon after making a ranged attack with it as a free action.',
    shortDescription: 'Sacred weapon can be thrown and returns',
    source: 'Advanced Class Guide',
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'sacred weapon class feature' },
      { type: 'feat', featId: 'weapon_focus' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['warpriest', 'sacred weapon', 'thrown'],
  },

  // ==================== SWASHBUCKLER / PANACHE FEATS ====================
  {
    id: 'slashing_grace',
    name: 'Slashing Grace',
    description:
      "Choose one kind of one-handed slashing weapon (such as the longsword). When wielding your chosen weapon one-handed, you can treat it as a one-handed piercing melee weapon for all feats and class abilities that require such a weapon (such as a swashbuckler's or a duelist's precise strike) and you can add your Dexterity modifier instead of your Strength modifier to that weapon's damage. The weapon must be one appropriate for your size.",
    shortDescription: 'Dex to damage with one-handed slashing weapon, treat as piercing',
    source: 'Advanced Class Guide',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'weapon_finesse' },
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'weapon',
        label: 'Slashing Weapon',
        affectsEffects: true,
        effectTargetTemplate: 'damage.{choice}',
      },
    ],
    tags: ['swashbuckler', 'dex to damage', 'finesse'],
  },
  {
    id: 'devoted_brawler',
    name: 'Devoted Brawler',
    description:
      "Choose one deity. You gain proficiency with your chosen deity's favored weapon. If you are already proficient with that weapon, you instead gain Weapon Focus with it as a bonus feat. When using your chosen deity's favored weapon, you treat your total brawler level as your base attack bonus for the purpose of meeting combat feat prerequisites.",
    shortDescription: 'Proficiency/Weapon Focus with deity favored weapon, brawler level as BAB',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: "Alignment must match one component of deity's alignment" },
      { type: 'special', description: 'Brawler level 1st or monk level 1st' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['brawler', 'deity', 'favored weapon'],
  },

  // ==================== GENERAL COMBAT FEATS ====================
  {
    id: 'combat_style_master',
    name: 'Combat Style Master',
    description:
      'You can switch your style as a free action. At the start of combat, you are considered to be in all of your styles.',
    shortDescription: 'Switch combat styles as free action, start in all styles',
    source: 'Advanced Class Guide',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'special', description: 'Two or more style feats' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['style', 'free action', 'flexibility'],
  },
  {
    id: 'horn_of_the_criosphinx',
    name: 'Horn of the Criosphinx',
    description:
      'Whenever you make a successful charge attack while using Power Attack, you deal an amount of additional damage equal to the bonus damage from Power Attack.',
    shortDescription: 'Double Power Attack bonus on charge attacks',
    source: 'Advanced Class Guide',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'power_attack' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['charge', 'power attack', 'damage'],
  },
  {
    id: 'shield_brace',
    name: 'Shield Brace',
    description:
      'You can wield a two-handed weapon (other than a tower shield) while also using a light or heavy shield. When you do so, treat the weapon as a one-handed weapon for the purposes of determining the penalties of two-weapon fighting and all other purposes.',
    shortDescription: 'Wield two-handed weapon with shield',
    source: 'Advanced Class Guide',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'shield_focus' },
      { type: 'bab', minimum: 3 },
      { type: 'proficiency', proficiency: 'shield' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['shield', 'two-handed', 'weapon'],
  },
  {
    id: 'extended_bane',
    name: 'Extended Bane',
    description:
      'Add your Wisdom bonus to the number of rounds per day that you can use your bane ability.',
    shortDescription: 'Add Wisdom bonus to bane rounds per day',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'bane class feature' }],
    effects: [],
    activationMode: 'passive',
    tags: ['inquisitor', 'bane', 'resource'],
  },

  // ==================== HYBRID CLASS SUPPORT ====================
  {
    id: 'extra_martial_flexibility',
    name: 'Extra Martial Flexibility',
    description: 'You gain 2 additional uses per day of your martial flexibility ability.',
    shortDescription: 'Gain 2 additional martial flexibility uses per day',
    source: 'Advanced Class Guide',
    types: ['combat'],
    prerequisites: [{ type: 'class_feature', featureName: 'martial flexibility class feature' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'resource.martial_flexibility',
        value: 2,
        source: 'Extra Martial Flexibility',
      },
    ],
    activationMode: 'passive',
    tags: ['brawler', 'martial flexibility', 'resource'],
  },
  {
    id: 'extra_shamanic_hex',
    name: 'Extra Shamanic Hex',
    description:
      'You gain one additional hex from the list of hexes available from your spirit. You must meet all of the prerequisites for this hex.',
    shortDescription: 'Gain one additional shamanic hex',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'hex class feature (shaman)' }],
    effects: [],
    activationMode: 'passive',
    tags: ['shaman', 'hex', 'extra'],
  },

  // ==================== INVESTIGATOR / STUDIED ====================
  {
    id: 'expanded_inspiration',
    name: 'Expanded Inspiration',
    description:
      'You can use your inspiration ability when attempting Diplomacy, Heal, Perception, Profession, and Sense Motive checks without expending uses of inspiration, provided you are trained in the skill.',
    shortDescription: 'Free inspiration on Diplomacy, Heal, Perception, Profession, Sense Motive',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'inspiration class feature' }],
    effects: [],
    activationMode: 'passive',
    tags: ['investigator', 'inspiration', 'skill'],
  },
  {
    id: 'underworld_inspiration',
    name: 'Underworld Inspiration',
    description:
      'You can use your inspiration ability when attempting Bluff, Disable Device, Disguise, Intimidate, or Sleight of Hand checks without expending uses of inspiration, provided you are trained in the skill.',
    shortDescription:
      'Free inspiration on Bluff, Disable Device, Disguise, Intimidate, Sleight of Hand',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'inspiration class feature' }],
    effects: [],
    activationMode: 'passive',
    tags: ['investigator', 'inspiration', 'skill', 'subterfuge'],
  },
  {
    id: 'quick_study',
    name: 'Quick Study',
    description:
      'You can use your studied combat ability as a swift action instead of a move action.',
    shortDescription: 'Use studied combat as a swift action',
    source: 'Advanced Class Guide',
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'studied combat class feature' },
      { type: 'bab', minimum: 8 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['investigator', 'studied combat', 'action economy'],
  },

  // ==================== BLOODRAGER SUPPORT ====================
  {
    id: 'spell_eater',
    name: 'Spell Eater',
    description:
      'While bloodraging, you can consume a spell slot as a swift action. This heals you for 1d8 hit points per level of the spell slot consumed.',
    shortDescription: 'Consume spell slot while bloodraging to heal 1d8/spell level',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'bloodrage class feature' },
      { type: 'class_feature', featureName: 'bloodrager spellcasting' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['bloodrager', 'healing', 'spell slot'],
  },

  // ==================== SKALD ====================
  {
    id: 'extra_rage_song',
    name: 'Extra Rage Song',
    description: 'You can use raging song for 6 additional rounds per day.',
    shortDescription: 'Gain 6 additional rounds of raging song per day',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'raging song class feature' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'resource.raging_song_rounds',
        value: 6,
        source: 'Extra Rage Song',
      },
    ],
    activationMode: 'passive',
    tags: ['skald', 'raging song', 'resource'],
  },

  // ==================== GENERAL UTILITY ====================
  {
    id: 'pack_flanking',
    name: 'Pack Flanking',
    description:
      'When you and your animal companion are adjacent to each other and you are both threatening the same opponent, you are considered to be flanking that opponent, regardless of your actual positioning.',
    shortDescription: 'Always flank with adjacent companion threatening same foe',
    source: 'Advanced Class Guide',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'special', description: 'Animal companion or mount class feature' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['teamwork', 'flanking', 'companion', 'hunter'],
  },
  {
    id: 'spirit_talker',
    name: 'Spirit Talker',
    description:
      'Once per day as a full-round action, you can call upon a wandering spirit to grant you access to one hex from its list of hexes for 24 hours.',
    shortDescription: 'Gain one hex from a wandering spirit for 24 hours',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'hex class feature' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['shaman', 'spirit', 'hex', 'flexibility'],
  },
  {
    id: 'mutated_shape',
    name: 'Mutated Shape',
    description:
      "When you use wild shape to take the form of an animal, you can select one of the following natural attack options: bite (1d6 if Medium, 1d4 if Small), 2 claws (1d4 if Medium, 1d3 if Small), or gore (1d6 if Medium, 1d4 if Small). This natural attack replaces one of the form's natural attacks.",
    shortDescription: 'Customize natural attacks when using wild shape',
    source: 'Advanced Class Guide',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'wild shape class feature' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['wild shape', 'natural attack', 'druid'],
  },
];
