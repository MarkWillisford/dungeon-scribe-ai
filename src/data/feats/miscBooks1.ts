import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const MISC_FEATS_1: FeatDefinition[] = [
  // ==================== INNER SEA WORLD GUIDE / INNER SEA GODS ====================
  {
    id: 'deific_obedience',
    name: 'Deific Obedience',
    description:
      'By performing a daily obedience to your chosen deity, you gain a boon related to that deity. The obedience takes 1 hour to perform, after which you gain the first boon appropriate to your deity.',
    shortDescription: 'Perform daily obedience to gain a divine boon',
    source: 'Inner Sea Gods',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Must worship a deity' },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 3 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'obedience', 'religion'],
  },
  {
    id: 'diverse_obedience',
    name: 'Diverse Obedience',
    description:
      "You have learned to specialize in the obedience of your deity, gaining access to the boons normally reserved for one of your deity's prestige classes (evangelist, exalted, or sentinel) without taking levels in that class.",
    shortDescription: 'Access a different set of obedience boons',
    source: 'Inner Sea Gods',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'deific_obedience' },
      { type: 'special', description: 'Must worship a deity' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'obedience', 'religion'],
  },
  {
    id: 'demonic_obedience',
    name: 'Demonic Obedience',
    description:
      'By performing a daily obedience to a demon lord, you gain special boons. The obedience takes 1 hour and involves a depraved or destructive ritual specific to the demon lord.',
    shortDescription: 'Perform daily obedience to a demon lord for boons',
    source: 'Book of the Damned',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Must worship a demon lord' },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 3 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'obedience', 'evil'],
  },
  {
    id: 'celestial_obedience',
    name: 'Celestial Obedience',
    description:
      'By performing a daily obedience to an empyreal lord, you gain special boons. The obedience takes 1 hour and involves a contemplative or charitable ritual specific to the empyreal lord.',
    shortDescription: 'Perform daily obedience to an empyreal lord for boons',
    source: 'Chronicle of the Righteous',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Must worship an empyreal lord' },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 3 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'obedience', 'good'],
  },

  // ==================== DIRTY TACTICS TOOLBOX ====================
  {
    id: 'dirty_fighting',
    name: 'Dirty Fighting',
    description:
      'When you attempt a combat maneuver check against a foe you are flanking, you gain a +2 bonus on the check. This bonus stacks with the bonus from flanking. Additionally, this feat counts as having Dex 13, Int 13, Combat Expertise, and Improved Unarmed Strike for the purpose of meeting prerequisites of feats that have Improved Dirty Trick, Improved Disarm, Improved Grapple, Improved Reposition, Improved Steal, or Improved Trip as prerequisites.',
    shortDescription:
      '+2 to combat maneuvers when flanking; counts as Combat Expertise for maneuver feat prereqs',
    source: 'Dirty Tactics Toolbox',
    types: ['combat'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmb',
        value: 2,
        source: 'Dirty Fighting',
        condition: { type: 'custom', params: {}, description: 'When flanking the target' },
      },
    ],
    activationMode: 'conditional',
    tags: ['combat', 'maneuver', 'flanking', 'popular'],
  },
  {
    id: 'underhanded_trick',
    name: 'Underhanded Trick',
    description:
      'When you successfully use a dirty trick combat maneuver against a foe who is unaware of you or considers you an ally, the penalty lasts for 1d4+1 rounds plus 1 round for every 5 by which your check exceeds the DC.',
    shortDescription: 'Dirty trick lasts longer against unaware foes',
    source: 'Dirty Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_dirty_trick' },
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['combat', 'dirty trick', 'maneuver'],
  },
  {
    id: 'kitsune_style',
    name: 'Kitsune Style',
    description:
      'While using this style, you can attempt to feint as a move action. Additionally, whenever you successfully feint against a foe, that foe is denied its Dexterity bonus to AC against all melee attacks you make until the start of your next turn.',
    shortDescription:
      'Feint as a move action; successful feint works against all your melee attacks',
    source: 'Dirty Tactics Toolbox',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_feint' },
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'feint', 'combat'],
  },
  {
    id: 'kitsune_tricks',
    name: 'Kitsune Tricks',
    description:
      'While using Kitsune Style, when you successfully feint against a foe, that foe provokes an attack of opportunity from you.',
    shortDescription: 'Successful feint provokes an AoO',
    source: 'Dirty Tactics Toolbox',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'kitsune_style' },
      { type: 'feat', featId: 'improved_feint' },
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'feint', 'combat'],
  },
  {
    id: 'kitsune_vengeance',
    name: 'Kitsune Vengeance',
    description:
      'While using Kitsune Style, when you successfully feint against a foe, your first successful melee attack against that foe before the end of your turn deals additional damage equal to your Wisdom modifier.',
    shortDescription: 'Add Wis modifier to damage after successful feint',
    source: 'Dirty Tactics Toolbox',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'kitsune_tricks' },
      { type: 'feat', featId: 'kitsune_style' },
      { type: 'feat', featId: 'improved_feint' },
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['style', 'feint', 'combat', 'damage'],
  },

  // ==================== WEAPON MASTER'S HANDBOOK ====================
  {
    id: 'trained_grace',
    name: 'Trained Grace',
    description:
      'When you use Weapon Finesse to make a melee attack with a weapon from a fighter weapon group for which you have weapon training, you can add your Dexterity modifier to the damage roll instead of your Strength modifier. This is treated as the weapon having the finesse quality.',
    shortDescription: 'Add Dex to damage with finesse weapons in a trained group',
    source: "Weapon Master's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'weapon_finesse' },
      { type: 'class_feature', featureName: 'weapon training class feature' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['fighter', 'finesse', 'damage', 'popular'],
  },
  {
    id: 'warrior_spirit',
    name: 'Warrior Spirit',
    description:
      'You can forge a spiritual bond with a weapon you wield, allowing you to invest it with magic weapon special abilities as a standard action by spending a number of points from your weapon training bonus. The ability lasts for 1 minute.',
    shortDescription: 'Invest weapons with temporary special abilities',
    source: "Weapon Master's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'weapon training class feature' },
      { type: 'level', minimum: 5, class: 'fighter' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['fighter', 'weapon training', 'enhancement', 'popular'],
  },

  // ==================== ARMOR MASTER'S HANDBOOK ====================
  {
    id: 'armored_juggernaut',
    name: 'Armored Juggernaut',
    description:
      'When wearing heavy armor, you gain DR 1/--. At 7th level, this DR increases to 2/--. At 11th level, it increases to 3/--. If you are wearing adamantine armor, this DR stacks with the DR from the armor.',
    shortDescription: 'Gain DR/-- when wearing heavy armor',
    source: "Armor Master's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'armor training 2' },
      { type: 'proficiency', proficiency: 'heavy armor' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'dr',
        value: 1,
        source: 'Armored Juggernaut',
        condition: { type: 'custom', params: {}, description: 'When wearing heavy armor' },
      },
    ],
    activationMode: 'conditional',
    tags: ['fighter', 'armor', 'dr', 'popular'],
  },
  {
    id: 'armor_specialization',
    name: 'Armor Specialization',
    description:
      'Select one type of armor (light, medium, or heavy) for which you have Armor Focus. While wearing armor of the selected type, you gain DR 2/-- if wearing medium armor or DR 3/-- if wearing heavy armor. Light armor grants DR 1/--.',
    shortDescription: 'Gain DR/-- from armor of chosen type',
    source: "Armor Master's Handbook",
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'armor_focus' },
      { type: 'class_feature', featureName: 'armor training class feature' },
      { type: 'level', minimum: 12, class: 'fighter' },
    ],
    effects: [],
    activationMode: 'conditional',
    choices: [
      {
        type: 'custom',
        label: 'Armor Type',
        options: ['Light', 'Medium', 'Heavy'],
        affectsEffects: true,
      },
    ],
    tags: ['armor', 'dr', 'fighter'],
  },

  // ==================== MELEE TACTICS TOOLBOX ====================
  {
    id: 'hurtful',
    name: 'Hurtful',
    description:
      'When you successfully demoralize an opponent within your melee reach with an Intimidate check, you can make a melee attack against that creature as a swift action.',
    shortDescription: 'Swift action melee attack after successful Intimidate',
    source: 'Melee Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'feat', featId: 'power_attack' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['intimidate', 'swift action', 'melee', 'popular'],
  },
  {
    id: 'shield_snag',
    name: 'Shield Snag',
    description:
      'Any opponents hit by your shield bash are also targeted by a free disarm or trip combat maneuver attempt at the same CMB. You may choose which before making the attempt.',
    shortDescription: 'Shield bash also attempts disarm or trip',
    source: 'Melee Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_shield_bash' },
      { type: 'feat', featId: 'shield_proficiency' },
      { type: 'feat', featId: 'two_weapon_fighting' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['shield', 'combat', 'maneuver'],
  },

  // ==================== RANGED TACTICS TOOLBOX ====================
  {
    id: 'ace_trip',
    name: 'Ace Trip',
    description:
      'When you hit a creature with a ranged attack, you can attempt a trip combat maneuver check against that creature as a free action. You use your Dexterity modifier in place of your Strength modifier for this combat maneuver check.',
    shortDescription: 'Trip at range with ranged attacks',
    source: 'Ranged Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'deadly_aim' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ranged', 'trip', 'maneuver'],
  },
  {
    id: 'ace_disarm',
    name: 'Ace Disarm',
    description:
      'When you hit a creature with a ranged attack, you can attempt a disarm combat maneuver check against that creature as a free action. You use your Dexterity modifier in place of your Strength modifier for this combat maneuver check.',
    shortDescription: 'Disarm at range with ranged attacks',
    source: 'Ranged Tactics Toolbox',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'deadly_aim' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ranged', 'disarm', 'maneuver'],
  },

  // ==================== INNER SEA COMBAT ====================
  {
    id: 'hamatulatsu',
    name: 'Hamatulatsu',
    description:
      'Your unarmed strikes deal piercing or bludgeoning damage (your choice). On a confirmed critical hit with an unarmed strike, the target is sickened for 1 round per 4 character levels you possess (minimum 1 round).',
    shortDescription: 'Unarmed strikes deal piercing; sicken on crit',
    source: 'Inner Sea Combat',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['unarmed', 'devil style', 'combat'],
  },

  // ==================== BLOOD OF ANGELS ====================
  {
    id: 'angelic_blood',
    name: 'Angelic Blood',
    description:
      'You gain a +2 bonus on saving throws against effects with the evil descriptor and on Constitution checks to stabilize when you are dying. Furthermore, each time you take bleed or blood drain damage, each undead creature or creature with the evil subtype that is currently adjacent to you takes 1 point of damage.',
    shortDescription: '+2 to saves vs evil; blood damages adjacent evil/undead',
    source: 'Blood of Angels',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'race', raceName: 'aasimar' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RACIAL,
        target: 'save.all',
        value: 2,
        source: 'Angelic Blood',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against effects with the evil descriptor',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['aasimar', 'celestial', 'racial'],
  },
  {
    id: 'angelic_flesh',
    name: 'Angelic Flesh',
    description:
      'You gain one of the following benefits based on the appearance of your flesh: brazen (fire resistance 5), golden (+1 natural armor bonus to AC), silver (+3 bonus on saves vs blindness and dazzle effects), or steel (+1 bonus on natural armor and gain DR 1/magic).',
    shortDescription: 'Metallic skin grants defensive benefits',
    source: 'Blood of Angels',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'angelic_blood' },
      { type: 'race', raceName: 'aasimar' },
    ],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'custom',
        label: 'Flesh Type',
        options: [
          'Brazen (fire resistance 5)',
          'Golden (+1 natural armor)',
          'Silver (+3 vs blindness)',
          'Steel (DR 1/magic)',
        ],
        affectsEffects: true,
      },
    ],
    tags: ['aasimar', 'celestial', 'racial'],
  },
  {
    id: 'angelic_wings',
    name: 'Angelic Wings',
    description:
      'You gain a pair of gleaming feathered wings that grant you a fly speed of 30 feet with good maneuverability. If you are affected by a polymorph effect, these wings can be manifested if the new form would reasonably support them.',
    shortDescription: 'Gain wings with 30-ft fly speed (good)',
    source: 'Blood of Angels',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'angelic_blood' },
      { type: 'feat', featId: 'angelic_flesh' },
      { type: 'race', raceName: 'aasimar' },
      { type: 'level', minimum: 10 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['aasimar', 'celestial', 'racial', 'flight'],
  },

  // ==================== BLOOD OF FIENDS ====================
  {
    id: 'fiendish_darkness',
    name: 'Fiendish Darkness',
    description:
      'You can use darkness three times per day as a spell-like ability with a caster level equal to your character level.',
    shortDescription: 'Use darkness 3/day as a spell-like ability',
    source: 'Blood of Fiends',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'tiefling' },
      { type: 'level', minimum: 3 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['tiefling', 'fiendish', 'racial', 'spell-like'],
  },
  {
    id: 'fiendish_resilience',
    name: 'Fiendish Resilience',
    description:
      'You gain DR 1/-- that stacks with any other damage reduction you possess. This DR increases to 2/-- at 11th level and 3/-- at 15th level.',
    shortDescription: 'Gain DR 1/-- that stacks',
    source: 'Blood of Fiends',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'tiefling' },
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'level', minimum: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'dr',
        value: 1,
        source: 'Fiendish Resilience',
      },
    ],
    activationMode: 'passive',
    tags: ['tiefling', 'fiendish', 'racial', 'dr'],
  },

  // ==================== SARGAVA, THE LOST COLONY / ADVENTURER'S ARMORY ====================
  {
    id: 'piranha_strike',
    name: 'Piranha Strike',
    description:
      'When wielding a light weapon, you can choose to take a -1 penalty on melee attack rolls and combat maneuver checks to gain a +2 bonus on melee damage rolls. When your base attack bonus reaches +4, and every 4 points thereafter, the penalty increases by -1 and the bonus on damage increases by +2. You must choose to use this feat before making an attack roll, and its effects last until your next turn.',
    shortDescription: 'Trade attack for damage with light weapons (like Power Attack)',
    source: 'Sargava, the Lost Colony',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'bab', minimum: 1 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['combat', 'light weapon', 'damage', 'popular'],
  },

  // ==================== PATHS OF THE RIGHTEOUS / CHAMPIONS OF PURITY ====================
  {
    id: 'believers_boon',
    name: "Believer's Boon",
    description:
      'Choose one domain granted by your deity. You gain the 1st-level domain power of that domain as a cleric of a level equal to your character level - 2 (minimum 1st level). If the domain power has uses per day, you can use it once per day.',
    shortDescription: "Gain a 1st-level domain power from your deity's domain",
    source: 'Champions of Purity',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Must worship a deity' },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
    ],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'custom',
        label: 'Domain',
        affectsEffects: true,
      },
    ],
    tags: ['divine', 'domain', 'religion'],
  },
  {
    id: 'channel_endurance',
    name: 'Channel Endurance',
    description:
      'When you channel positive energy, you can choose to grant all living creatures healed by your channel a +2 morale bonus on saving throws against fear and exhaustion effects for a number of rounds equal to your Charisma modifier (minimum 1).',
    shortDescription: 'Channel energy grants +2 vs fear and exhaustion',
    source: 'Champions of Purity',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'channel positive energy' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['channel energy', 'divine', 'morale'],
  },

  // ==================== MONSTER CODEX ====================
  {
    id: 'blood_feast',
    name: 'Blood Feast',
    description:
      'If you make a successful bite attack against a living creature that is your size or larger, you gain temporary hit points equal to the damage you dealt. These temporary hit points last for 1 minute. You can gain a number of temporary hit points per day equal to twice your Hit Dice.',
    shortDescription: 'Gain temp HP from bite attacks',
    source: 'Monster Codex',
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Bite attack' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['bite', 'natural attack', 'temporary hp'],
  },

  // ==================== INNER SEA WORLD GUIDE ====================
  {
    id: 'flagbearer',
    name: 'Flagbearer',
    description:
      "As long as you hold your clan, house, or party's flag, allies within 30 feet who can see the flag (including you) gain a +1 morale bonus on attack rolls, weapon damage rolls, and saving throws against fear and charm effects.",
    shortDescription:
      'Allies within 30 ft gain +1 morale to attacks, damage, and saves vs fear/charm',
    source: 'Inner Sea World Guide',
    types: ['combat'],
    prerequisites: [{ type: 'ability_score', ability: 'CHA', minimum: 15 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'attack.all',
        value: 1,
        source: 'Flagbearer',
        condition: {
          type: 'custom',
          params: {},
          description: 'While holding a flag; also applies to allies within 30 ft',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'damage.melee',
        value: 1,
        source: 'Flagbearer',
        condition: {
          type: 'custom',
          params: {},
          description: 'While holding a flag; also applies to allies within 30 ft',
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['morale', 'teamwork', 'support', 'popular'],
  },

  // ==================== PATHS OF PRESTIGE / INNER SEA MAGIC ====================
  {
    id: 'false_focus',
    name: 'False Focus',
    description:
      'You can use a divine focus to cast spells with material components of 100 gp or less without needing to provide those material components.',
    shortDescription: 'Use divine focus in place of material components up to 100 gp',
    source: 'Inner Sea Magic',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Must worship a deity' },
      { type: 'special', description: 'Ability to cast divine spells or use a divine focus' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['divine', 'casting', 'economy'],
  },

  // ==================== ULTIMATE EQUIPMENT / ADVENTURER'S ARMORY ====================
  {
    id: 'net_adept',
    name: 'Net Adept',
    description:
      'You can treat a net as a one-handed ranged weapon with a range increment of 10 feet. You can use your Dexterity modifier for attack rolls with a net.',
    shortDescription: 'Treat net as one-handed ranged weapon',
    source: "Adventurer's Armory",
    types: ['combat'],
    prerequisites: [
      { type: 'proficiency', proficiency: 'net' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['net', 'ranged', 'combat'],
  },
  {
    id: 'net_maneuvering',
    name: 'Net Maneuvering',
    description:
      'You can use a net to perform reposition and trip combat maneuvers. You gain a +2 bonus on these combat maneuver checks when using a net.',
    shortDescription: 'Trip and reposition with nets at +2',
    source: "Adventurer's Armory",
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'net_adept' },
      { type: 'bab', minimum: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmb',
        value: 2,
        source: 'Net Maneuvering',
        condition: { type: 'custom', params: {}, description: 'Trip and reposition with nets' },
      },
    ],
    activationMode: 'conditional',
    tags: ['net', 'maneuver', 'combat'],
  },

  // ==================== HEROES OF THE STREETS / VILLAIN CODEX ====================
  {
    id: 'betrayer',
    name: 'Betrayer',
    description:
      'You can treat any ally within 30 feet as an enemy for the purpose of flanking another creature. The ally does not grant the flanking bonus to you, but your attacks against the flanked creature benefit from the flanking bonus.',
    shortDescription: 'Use allies as flanking partners even without their participation',
    source: 'Heroes of the Streets',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_feint' },
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['flanking', 'combat', 'deception'],
  },

  // ==================== HEROES OF THE HIGH COURT ====================
  {
    id: 'friendly_fire_maneuvers',
    name: 'Friendly Fire Maneuvers',
    description:
      'Allies who also have this feat do not provide soft cover to enemies against your ranged attacks. If an ally who also has this feat is in the area of your ranged attack, they gain a +4 dodge bonus to AC against the attack.',
    shortDescription: 'Allies with this feat do not provide soft cover',
    source: 'Heroes of the High Court',
    types: ['combat', 'teamwork'],
    prerequisites: [
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'feat', featId: 'precise_shot' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['ranged', 'teamwork', 'combat'],
  },

  // ==================== CHRONICLE OF LEGENDS ====================
  {
    id: 'spellsong',
    name: 'Spellsong',
    description:
      'You can combine your bardic performance and spellcasting. You can conceal the activity of casting a bard spell by blending it into your performance. Observers must succeed at a Perception or Sense Motive check (DC 15 + the level of the spell) to notice that you are also casting a spell while performing.',
    shortDescription: 'Hide spellcasting within bardic performance',
    source: 'Ultimate Magic',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'bardic performance' },
      { type: 'skill', skillId: 'perform', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['bard', 'performance', 'spellcasting'],
  },

  // ==================== CHRONICLE OF THE RIGHTEOUS ====================
  {
    id: 'ultimate_mercy',
    name: 'Ultimate Mercy',
    description:
      'You can expend 10 uses of lay on hands to cast raise dead as a spell-like ability, using your paladin level as your caster level.',
    shortDescription: 'Expend 10 lay on hands to raise dead',
    source: 'Champions of Purity',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 19 },
      { type: 'class_feature', featureName: 'lay on hands' },
      { type: 'class_feature', featureName: 'mercy class feature' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['paladin', 'lay on hands', 'mercy', 'healing'],
  },

  // ==================== PLANAR ADVENTURES / BLOOD OF THE BEAST ====================
  {
    id: 'planar_infusion',
    name: 'Planar Infusion',
    description:
      'You gain a planar infusion based on the plane where you spent the most time in the past year (or where you were born, if another plane). Each plane grants a specific passive benefit.',
    shortDescription: 'Gain a passive benefit based on planar affinity',
    source: 'Planar Adventures',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_planes', ranks: 5 }],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'custom',
        label: 'Plane',
        options: [
          'Abyss',
          'Astral Plane',
          'Elysium',
          'Ethereal Plane',
          'Heaven',
          'Hell',
          'Material Plane',
          'Nirvana',
          'Shadow Plane',
        ],
        affectsEffects: true,
      },
    ],
    tags: ['planar', 'extraplanar'],
  },

  // ==================== INNER SEA RACES / HUMANS OF GOLARION ====================
  {
    id: 'racial_heritage',
    name: 'Racial Heritage',
    description:
      'Select one humanoid race. You count as both human and that race for the purpose of taking traits, feats, how spells and magic items affect you, and so on.',
    shortDescription: 'Count as both human and another humanoid race',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'human' }],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'custom',
        label: 'Humanoid Race',
        options: [
          'Dwarf',
          'Elf',
          'Gnome',
          'Half-Elf',
          'Half-Orc',
          'Halfling',
          'Orc',
          'Goblin',
          'Catfolk',
          'Ratfolk',
          'Tengu',
          'Kitsune',
        ],
        affectsEffects: true,
      },
    ],
    tags: ['human', 'racial', 'popular'],
  },

  // ==================== HEROES OF THE WILD ====================
  {
    id: 'death_from_above',
    name: 'Death from Above',
    description:
      'Whenever you charge a foe from higher ground, or while flying or jumping, you gain a +5 bonus on attack rolls in place of the normal +2 bonus granted by charging.',
    shortDescription: '+5 instead of +2 on charge attacks from higher ground',
    source: 'Heroes of the Wild',
    types: ['combat'],
    prerequisites: [],
    effects: [],
    activationMode: 'conditional',
    tags: ['charge', 'combat', 'positioning'],
  },

  // ==================== GIANT HUNTER'S HANDBOOK ====================
  {
    id: 'potion_glutton',
    name: 'Potion Glutton',
    description: 'You can drink a potion as a move action instead of a standard action.',
    shortDescription: 'Drink potions as a move action',
    source: "Giant Hunter's Handbook",
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'orc' }],
    effects: [],
    activationMode: 'passive',
    tags: ['orc', 'racial', 'potion', 'action economy'],
  },

  // ==================== PATHFINDER SOCIETY FIELD GUIDE ====================
  {
    id: 'deadeye_bowman',
    name: 'Deadeye Bowman',
    description:
      'When you are adjacent to a foe and make a ranged attack with a bow, you do not provoke an attack of opportunity. You still provoke attacks of opportunity from other adjacent foes as normal.',
    shortDescription: 'No AoO for ranged attacks with bows from one adjacent foe',
    source: 'Pathfinder Society Field Guide',
    types: ['combat'],
    prerequisites: [],
    effects: [],
    activationMode: 'passive',
    tags: ['ranged', 'bow', 'combat'],
  },

  // ==================== MYTHIC ADVENTURES (non-mythic feats) ====================
  {
    id: 'dual_path',
    name: 'Dual Path',
    description:
      "Select a mythic path other than the path you selected at 1st tier. You gain that path's 1st-tier ability (the ability listed under the path at 1st tier).",
    shortDescription: "Gain another mythic path's 1st-tier ability",
    source: 'Mythic Adventures',
    types: ['general'],
    prerequisites: [{ type: 'special', description: '1st mythic tier' }],
    effects: [],
    activationMode: 'passive',
    tags: ['mythic'],
  },
  {
    id: 'extra_mythic_power',
    name: 'Extra Mythic Power',
    description: 'You can use your mythic power two additional times per day.',
    shortDescription: '+2 uses of mythic power per day',
    source: 'Mythic Adventures',
    types: ['general'],
    prerequisites: [{ type: 'special', description: '1st mythic tier' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'resource.mythic_power',
        value: 2,
        source: 'Extra Mythic Power',
      },
    ],
    activationMode: 'passive',
    tags: ['mythic', 'resource'],
  },

  // ==================== HEROES OF THE DARKLANDS ====================
  {
    id: 'blind_fight_improved_darklands',
    name: 'Blinded Blade Style',
    description:
      'While using this style, you do not need to attempt Perception checks to pinpoint the location of creatures within your melee reach. This functions similarly to blindsight with a range equal to your melee reach.',
    shortDescription: 'Effective blindsight within melee reach',
    source: 'Heroes of the Darklands',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'blind_fight' },
      { type: 'skill', skillId: 'perception', ranks: 5 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['blind-fight', 'style', 'perception', 'combat'],
  },
  {
    id: 'blinded_master',
    name: 'Blinded Master',
    description: 'While using Blinded Blade Style, you gain blindsight with a range of 30 feet.',
    shortDescription: 'Gain blindsight 30 ft while using Blinded Blade Style',
    source: 'Heroes of the Darklands',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'blinded_competence' },
      { type: 'feat', featId: 'blind_fight_improved_darklands' },
      { type: 'feat', featId: 'blind_fight' },
      { type: 'skill', skillId: 'perception', ranks: 15 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['blind-fight', 'style', 'blindsight', 'combat'],
  },

  // ==================== PATHFINDER UNCHAINED ====================
  {
    id: 'signature_skill_unchained',
    name: 'Signature Skill',
    description:
      'Choose one skill. You gain the skill unlock powers for that skill as appropriate for your number of ranks in that skill.',
    shortDescription: 'Unlock advanced skill uses for one chosen skill',
    source: 'Pathfinder Unchained',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'any', ranks: 5 }],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'skill',
        label: 'Skill',
        affectsEffects: true,
      },
    ],
    tags: ['skill', 'unchained'],
  },

  // ==================== OCCULT ORIGINS ====================
  {
    id: 'steadfast_personality',
    name: 'Steadfast Personality',
    description:
      'You can add your Charisma modifier instead of your Wisdom modifier on Will saving throws against mind-affecting effects.',
    shortDescription: 'Use Cha instead of Wis for Will saves vs mind-affecting',
    source: 'Occult Origins',
    types: ['general'],
    prerequisites: [{ type: 'ability_score', ability: 'CHA', minimum: 13 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['saves', 'will', 'charisma', 'mind-affecting', 'popular'],
  },

  // ==================== HEALER'S HANDBOOK ====================
  {
    id: 'incredible_healer',
    name: 'Incredible Healer',
    description:
      "When you use the Heal skill to treat deadly wounds, you can restore a number of hit points equal to the result of your Heal check instead of just your target's level.",
    shortDescription: 'Heal check result = HP restored with treat deadly wounds',
    source: "Healer's Handbook",
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'heal', ranks: 12 },
      { type: 'ability_score', ability: 'WIS', minimum: 17 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['heal', 'skill', 'support'],
  },

  // ==================== MONSTER HUNTER'S HANDBOOK ====================
  {
    id: 'monster_hunter',
    name: 'Monster Hunter',
    description:
      'You gain a +1 insight bonus on attack rolls and a +1 insight bonus on damage rolls against creatures you have identified using a Knowledge check.',
    shortDescription: "+1 insight to attack and damage vs creatures you've identified",
    source: "Monster Hunter's Handbook",
    types: ['combat'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_arcana', ranks: 1 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'attack.all',
        value: 1,
        source: 'Monster Hunter',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against creatures identified with a Knowledge check',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.INSIGHT,
        target: 'damage.melee',
        value: 1,
        source: 'Monster Hunter',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against creatures identified with a Knowledge check',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['knowledge', 'combat', 'insight'],
  },
];
