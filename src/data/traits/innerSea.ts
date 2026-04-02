import { BonusType } from '@/types/base';
import type { TraitDefinition } from '@/types/traits';

export const INNER_SEA_TRAITS: TraitDefinition[] = [
  // ==================== REGIONAL TRAITS — VARISIA ====================
  {
    id: 'outlander_varisia',
    name: 'Outlander',
    description:
      'You have lived much of your life in the wilds of Varisia, far from its few cities. You are used to the harsh weather, the ## dangerous flora and fauna, and the vast distances between settlements. You gain a +1 trait bonus on Survival checks, and Survival is always a class skill for you.',
    shortDescription: '+1 Survival, Survival is a class skill',
    source: 'Inner Sea World Guide',
    category: 'regional',
    subcategory: 'Varisia',
    prerequisites: [{ type: 'region', regionName: 'Varisia' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Outlander',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.survival',
        value: 1,
        source: 'Outlander',
      },
    ],
    tags: ['survival', 'wilderness', 'varisia'],
  },
  {
    id: 'varisian_tattoo',
    name: 'Varisian Tattoo',
    description:
      'You bear the elaborate tattoos of the Varisian people, which depict winding images of creatures and places along your skin. You gain a +1 trait bonus on Fortitude saves.',
    shortDescription: '+1 Fortitude saves',
    source: 'Inner Sea World Guide',
    category: 'regional',
    subcategory: 'Varisia',
    prerequisites: [{ type: 'region', regionName: 'Varisia' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 1,
        source: 'Varisian Tattoo',
      },
    ],
    tags: ['save', 'fortitude', 'varisia', 'tattoo'],
  },
  {
    id: 'sheriffs_informant',
    name: "Sheriff's Informant",
    description:
      'You have a close relationship with the local sheriff, feeding them information about criminal activities. You gain a +1 trait bonus on Diplomacy checks to gather information, and Diplomacy is always a class skill for you.',
    shortDescription: '+1 Diplomacy to gather info, class skill',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Varisia',
    prerequisites: [{ type: 'region', regionName: 'Varisia' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: "Sheriff's Informant",
        condition: { type: 'custom', params: {}, description: 'When gathering information' },
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.diplomacy',
        value: 1,
        source: "Sheriff's Informant",
      },
    ],
    tags: ['diplomacy', 'gather information', 'varisia'],
  },

  // ==================== REGIONAL TRAITS — CHELIAX ====================
  {
    id: 'chelish_noble',
    name: 'Chelish Noble',
    description:
      'You belong to one of the noble families of Cheliax, and your upbringing has given you a keen eye for political machinations. You gain a +1 trait bonus on Knowledge (nobility) checks and Knowledge (nobility) is always a class skill for you.',
    shortDescription: '+1 Knowledge (nobility), class skill',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Cheliax',
    prerequisites: [{ type: 'region', regionName: 'Cheliax' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nobility',
        value: 1,
        source: 'Chelish Noble',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.knowledge_nobility',
        value: 1,
        source: 'Chelish Noble',
      },
    ],
    tags: ['knowledge', 'nobility', 'cheliax'],
  },
  {
    id: 'fiendish_dabbler',
    name: 'Fiendish Dabbler',
    description:
      'You have studied the dark arts of conjuration and demonology common in Cheliax. You gain a +1 trait bonus on Knowledge (planes) checks and Knowledge (planes) is always a class skill for you.',
    shortDescription: '+1 Knowledge (planes), class skill',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Cheliax',
    prerequisites: [{ type: 'region', regionName: 'Cheliax' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_planes',
        value: 1,
        source: 'Fiendish Dabbler',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.knowledge_planes',
        value: 1,
        source: 'Fiendish Dabbler',
      },
    ],
    tags: ['knowledge', 'planes', 'cheliax', 'fiendish'],
  },
  {
    id: 'shadow_child',
    name: 'Shadow Child',
    description:
      'You grew up in the shadowy underbelly of Chelish society, where the worship of Asmodeus and dark pacts are commonplace. You gain a +1 trait bonus on Stealth checks and Stealth is always a class skill for you.',
    shortDescription: '+1 Stealth, class skill',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Cheliax',
    prerequisites: [{ type: 'region', regionName: 'Cheliax' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.stealth',
        value: 1,
        source: 'Shadow Child',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.stealth',
        value: 1,
        source: 'Shadow Child',
      },
    ],
    tags: ['stealth', 'cheliax', 'shadow'],
  },

  // ==================== REGIONAL TRAITS — ABSALOM ====================
  {
    id: 'absalom_bouncer',
    name: 'Absalom Bouncer',
    description:
      'You grew up on the mean streets of Absalom, working as muscle for various taverns and establishments in the city. You gain a +1 trait bonus on Intimidate checks, and Intimidate is always a class skill for you.',
    shortDescription: '+1 Intimidate, class skill',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Absalom',
    prerequisites: [{ type: 'region', regionName: 'Absalom' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Absalom Bouncer',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.intimidate',
        value: 1,
        source: 'Absalom Bouncer',
      },
    ],
    tags: ['intimidate', 'absalom'],
  },
  {
    id: 'absalom_scholar',
    name: 'Absalom Scholar',
    description:
      'Growing up in Absalom, you had access to the great libraries and universities of the city. You gain a +1 trait bonus on Knowledge (history) checks, and Knowledge (history) is always a class skill for you.',
    shortDescription: '+1 Knowledge (history), class skill',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Absalom',
    prerequisites: [{ type: 'region', regionName: 'Absalom' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_history',
        value: 1,
        source: 'Absalom Scholar',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.knowledge_history',
        value: 1,
        source: 'Absalom Scholar',
      },
    ],
    tags: ['knowledge', 'history', 'absalom'],
  },

  // ==================== REGIONAL TRAITS — OSIRION ====================
  {
    id: 'osiriani_noble',
    name: 'Osiriani Noble',
    description:
      'You are a scion of one of the great noble families of Osirion, and your upbringing provided extensive education in the history and lore of the ancient empire. You gain a +1 trait bonus on Knowledge (history) checks relating to Osirion and a +1 trait bonus on Diplomacy checks.',
    shortDescription: '+1 Diplomacy',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Osirion',
    prerequisites: [{ type: 'region', regionName: 'Osirion' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Osiriani Noble',
      },
    ],
    tags: ['diplomacy', 'nobility', 'osirion'],
  },
  {
    id: 'tomb_raider',
    name: 'Tomb Raider',
    description:
      'You have spent time exploring the ancient tombs and ruins of Osirion, learning to spot traps and hidden treasures. You gain a +1 trait bonus on Perception checks, and Perception is always a class skill for you.',
    shortDescription: '+1 Perception, class skill',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Osirion',
    prerequisites: [{ type: 'region', regionName: 'Osirion' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 1,
        source: 'Tomb Raider',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.perception',
        value: 1,
        source: 'Tomb Raider',
      },
    ],
    tags: ['perception', 'osirion', 'tomb', 'trap'],
  },
  {
    id: 'desert_child',
    name: 'Desert Child',
    description:
      'You were born and raised in the scorching deserts of Osirion or another desert region. You are accustomed to high temperatures and gain a +4 trait bonus on any saving throws made to resist the effects of being in hot conditions and a +1 trait bonus on all saving throws against fire effects.',
    shortDescription: '+4 saves vs hot conditions, +1 saves vs fire',
    source: 'Inner Sea World Guide',
    category: 'regional',
    subcategory: 'Osirion',
    prerequisites: [{ type: 'region', regionName: 'Osirion' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 4,
        source: 'Desert Child',
        condition: { type: 'custom', params: {}, description: 'Against hot conditions' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Desert Child',
        condition: { type: 'custom', params: {}, description: 'Against fire effects' },
      },
    ],
    tags: ['save', 'fire', 'environment', 'osirion', 'desert'],
  },

  // ==================== REGIONAL TRAITS — ANDORAN ====================
  {
    id: 'andoran_spirit',
    name: 'Andoran Spirit',
    description:
      'You have been raised in the free nation of Andoran, and the ideals of liberty and equality are deeply ingrained in your soul. You gain a +1 trait bonus on Will saving throws against compulsion effects and a +1 trait bonus on Sense Motive checks.',
    shortDescription: '+1 Will vs compulsion, +1 Sense Motive',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Andoran',
    prerequisites: [{ type: 'region', regionName: 'Andoran' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Andoran Spirit',
        condition: { type: 'custom', params: {}, description: 'Against compulsion effects' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive',
        value: 1,
        source: 'Andoran Spirit',
      },
    ],
    tags: ['will', 'compulsion', 'sense motive', 'andoran', 'freedom'],
  },
  {
    id: 'eagle_knight_recruit',
    name: 'Eagle Knight Recruit',
    description:
      'You have trained with the Eagle Knights of Andoran, the elite military force that fights for freedom and opposes slavery. You gain a +1 trait bonus on attack rolls against slavers or anyone who is currently holding a sentient being against its will.',
    shortDescription: '+1 attack vs slavers',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Andoran',
    prerequisites: [{ type: 'region', regionName: 'Andoran' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.all',
        value: 1,
        source: 'Eagle Knight Recruit',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against slavers or captors of sentient beings',
        },
      },
    ],
    tags: ['attack', 'andoran', 'eagle knight', 'slavery'],
  },

  // ==================== REGIONAL TRAITS — USTALAV ====================
  {
    id: 'haunted_ustalav',
    name: 'Haunted',
    description:
      'You grew up in the haunted nation of Ustalav, surrounded by ghosts, undead, and other horrors. These experiences have toughened your nerves. You gain a +1 trait bonus on Will saves against fear effects and a +1 trait bonus on Perception checks at night.',
    shortDescription: '+1 Will vs fear, +1 Perception at night',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Ustalav',
    prerequisites: [{ type: 'region', regionName: 'Ustalav' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Haunted',
        condition: { type: 'custom', params: {}, description: 'Against fear effects' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 1,
        source: 'Haunted',
        condition: { type: 'custom', params: {}, description: 'At night' },
      },
    ],
    tags: ['will', 'fear', 'perception', 'ustalav', 'undead'],
  },
  {
    id: 'undead_survivor',
    name: 'Undead Survivor',
    description:
      'Living in Ustalav has exposed you to the horrors of undead on a regular basis. You gain a +1 trait bonus on damage rolls against undead creatures.',
    shortDescription: '+1 damage vs undead',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Ustalav',
    prerequisites: [{ type: 'region', regionName: 'Ustalav' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.all',
        value: 1,
        source: 'Undead Survivor',
        condition: { type: 'custom', params: {}, description: 'Against undead creatures' },
      },
    ],
    tags: ['damage', 'undead', 'ustalav'],
  },

  // ==================== REGIONAL TRAITS — TALDOR ====================
  {
    id: 'taldan_patriot',
    name: 'Taldan Patriot',
    description:
      'Your love for the aging empire of Taldor runs deep. You gain a +1 trait bonus on Knowledge (history) checks and Knowledge (history) is always a class skill for you.',
    shortDescription: '+1 Knowledge (history), class skill',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Taldor',
    prerequisites: [{ type: 'region', regionName: 'Taldor' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_history',
        value: 1,
        source: 'Taldan Patriot',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.knowledge_history',
        value: 1,
        source: 'Taldan Patriot',
      },
    ],
    tags: ['knowledge', 'history', 'taldor'],
  },
  {
    id: 'prestigious_influence',
    name: 'Prestigious Influence',
    description:
      "Taldor's complex political system has taught you the art of leveraging social connections. You gain a +1 trait bonus on Diplomacy checks and Diplomacy is always a class skill for you.",
    shortDescription: '+1 Diplomacy, class skill',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Taldor',
    prerequisites: [{ type: 'region', regionName: 'Taldor' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Prestigious Influence',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.diplomacy',
        value: 1,
        source: 'Prestigious Influence',
      },
    ],
    tags: ['diplomacy', 'taldor', 'social'],
  },

  // ==================== REGIONAL TRAITS — MWANGI ====================
  {
    id: 'jungle_survivor',
    name: 'Jungle Survivor',
    description:
      'You have grown up in the dangerous Mwangi Expanse, where deadly predators, poisonous creatures, and tropical diseases are a constant threat. You gain a +1 trait bonus on Survival checks in jungle and forest environments, and a +1 trait bonus on Fortitude saves against disease.',
    shortDescription: '+1 Survival (jungle), +1 Fort vs disease',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Mwangi Expanse',
    prerequisites: [{ type: 'region', regionName: 'Mwangi Expanse' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Jungle Survivor',
        condition: { type: 'custom', params: {}, description: 'In jungle and forest environments' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 1,
        source: 'Jungle Survivor',
        condition: { type: 'custom', params: {}, description: 'Against disease' },
      },
    ],
    tags: ['survival', 'fortitude', 'disease', 'mwangi', 'jungle'],
  },
  {
    id: 'mwangi_scholar',
    name: 'Mwangi Scholar',
    description:
      'You have studied the ancient ruins and relics of the Mwangi Expanse. You gain a +1 trait bonus on Knowledge (arcana) checks relating to ancient Mwangi civilizations and a +1 trait bonus on Linguistics checks. Linguistics is always a class skill for you.',
    shortDescription: '+1 Linguistics, class skill',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Mwangi Expanse',
    prerequisites: [{ type: 'region', regionName: 'Mwangi Expanse' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.linguistics',
        value: 1,
        source: 'Mwangi Scholar',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.linguistics',
        value: 1,
        source: 'Mwangi Scholar',
      },
    ],
    tags: ['linguistics', 'knowledge', 'mwangi', 'ancient'],
  },

  // ==================== REGIONAL TRAITS — LASTWALL ====================
  {
    id: 'lastwall_lineage',
    name: 'Lastwall Lineage',
    description:
      'You are descended from a line of soldiers who have served in Lastwall, the bastion nation that guards against the resurgence of the Whispering Tyrant. You gain a +2 trait bonus on saving throws against the spells and abilities of undead creatures.',
    shortDescription: '+2 saves vs undead abilities',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Lastwall',
    prerequisites: [{ type: 'region', regionName: 'Lastwall' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Lastwall Lineage',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against spells and abilities of undead',
        },
      },
    ],
    tags: ['save', 'undead', 'lastwall'],
  },
  {
    id: 'righteous_indignation',
    name: 'Righteous Indignation',
    description:
      'Growing up in Lastwall, you have been instilled with a burning hatred of the undead and the evil they represent. You gain a +1 trait bonus on attack rolls against undead creatures.',
    shortDescription: '+1 attack vs undead',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Lastwall',
    prerequisites: [{ type: 'region', regionName: 'Lastwall' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.all',
        value: 1,
        source: 'Righteous Indignation',
        condition: { type: 'custom', params: {}, description: 'Against undead creatures' },
      },
    ],
    tags: ['attack', 'undead', 'lastwall'],
  },

  // ==================== REGIONAL TRAITS — RIVER KINGDOMS ====================
  {
    id: 'freebooter',
    name: 'Freebooter',
    description:
      'You have spent time among the pirates and scoundrels of the River Kingdoms, learning to fight dirty and survive by your wits. You gain a +1 trait bonus on Bluff checks and a +1 trait bonus on attack rolls during a surprise round.',
    shortDescription: '+1 Bluff, +1 attack in surprise round',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'River Kingdoms',
    prerequisites: [{ type: 'region', regionName: 'River Kingdoms' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Freebooter',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.all',
        value: 1,
        source: 'Freebooter',
        condition: { type: 'custom', params: {}, description: 'During surprise rounds' },
      },
    ],
    tags: ['bluff', 'attack', 'surprise', 'river kingdoms'],
  },
  {
    id: 'river_kingdoms_scavenger',
    name: 'River Kingdoms Scavenger',
    description:
      'Growing up in the ever-changing River Kingdoms has taught you to make use of whatever you can find. You gain a +1 trait bonus on Perception checks to find hidden objects and traps, and a +1 trait bonus on Craft checks to repair objects.',
    shortDescription: '+1 Perception (find traps/objects), +1 Craft (repair)',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'River Kingdoms',
    prerequisites: [{ type: 'region', regionName: 'River Kingdoms' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 1,
        source: 'River Kingdoms Scavenger',
        condition: { type: 'custom', params: {}, description: 'To find hidden objects and traps' },
      },
    ],
    tags: ['perception', 'craft', 'river kingdoms'],
  },

  // ==================== REGIONAL TRAITS — QADIRA ====================
  {
    id: 'qadiran_horselord',
    name: 'Qadiran Horselord',
    description:
      'You were raised among the legendary horse-breeders of Qadira and can ride before you can walk. You gain a +2 trait bonus on Ride checks, and Ride is always a class skill for you.',
    shortDescription: '+2 Ride, class skill',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Qadira',
    prerequisites: [{ type: 'region', regionName: 'Qadira' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.ride',
        value: 2,
        source: 'Qadiran Horselord',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.ride',
        value: 1,
        source: 'Qadiran Horselord',
      },
    ],
    tags: ['ride', 'qadira', 'horse'],
  },

  // ==================== REGIONAL TRAITS — KATAPESH ====================
  {
    id: 'katapesh_haggler',
    name: 'Katapesh Haggler',
    description:
      'Growing up in the markets of Katapesh, you learned to drive a hard bargain. You gain a +1 trait bonus on Appraise checks and a +1 trait bonus on Bluff checks when negotiating prices.',
    shortDescription: '+1 Appraise, +1 Bluff (negotiation)',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Katapesh',
    prerequisites: [{ type: 'region', regionName: 'Katapesh' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.appraise',
        value: 1,
        source: 'Katapesh Haggler',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Katapesh Haggler',
        condition: { type: 'custom', params: {}, description: 'When negotiating prices' },
      },
    ],
    tags: ['appraise', 'bluff', 'katapesh', 'merchant'],
  },

  // ==================== REGIONAL TRAITS — MENDEV ====================
  {
    id: 'crusader_road',
    name: 'Crusader Road',
    description:
      'You were raised along the Crusader Road in Mendev, where you learned to fight the demons of the Worldwound. You gain a +1 trait bonus on Knowledge (planes) checks to identify demons and a +1 trait bonus on Will saves against fear caused by demons.',
    shortDescription: '+1 Knowledge (planes) for demons, +1 Will vs demon fear',
    source: 'Inner Sea World Guide',
    category: 'regional',
    subcategory: 'Mendev',
    prerequisites: [{ type: 'region', regionName: 'Mendev' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_planes',
        value: 1,
        source: 'Crusader Road',
        condition: { type: 'custom', params: {}, description: 'To identify demons' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Crusader Road',
        condition: { type: 'custom', params: {}, description: 'Against fear caused by demons' },
      },
    ],
    tags: ['knowledge', 'planes', 'demons', 'will', 'fear', 'mendev'],
  },

  // ==================== REGIONAL TRAITS — NIDAL ====================
  {
    id: 'shadow_diplomat',
    name: 'Shadow Diplomat',
    description:
      'Growing up in Nidal, where the shadowlands touch the mortal world, you have learned to speak carefully and navigate dangerous political waters. You gain a +1 trait bonus on Bluff checks and Bluff is always a class skill for you.',
    shortDescription: '+1 Bluff, class skill',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Nidal',
    prerequisites: [{ type: 'region', regionName: 'Nidal' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Shadow Diplomat',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.bluff',
        value: 1,
        source: 'Shadow Diplomat',
      },
    ],
    tags: ['bluff', 'nidal', 'shadow'],
  },

  // ==================== REGIONAL TRAITS — LINNORM KINGS ====================
  {
    id: 'viking_blood',
    name: 'Viking Blood',
    description:
      'You hail from the Lands of the Linnorm Kings, where only the strongest survive. The harsh northern climate has toughened you. You gain a +1 trait bonus on Fortitude saves against cold effects and a +1 trait bonus on Intimidate checks.',
    shortDescription: '+1 Fort vs cold, +1 Intimidate',
    source: 'Inner Sea Primer',
    category: 'regional',
    subcategory: 'Lands of the Linnorm Kings',
    prerequisites: [{ type: 'region', regionName: 'Lands of the Linnorm Kings' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 1,
        source: 'Viking Blood',
        condition: { type: 'custom', params: {}, description: 'Against cold effects' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Viking Blood',
      },
    ],
    tags: ['fortitude', 'cold', 'intimidate', 'linnorm kings'],
  },

  // ==================== CAMPAIGN TRAITS ====================
  {
    id: 'conspiracy_hunter',
    name: 'Conspiracy Hunter',
    description:
      'You have long heard rumors of sinister conspiracies lurking beneath the surface of civilized society. You gain a +1 trait bonus on Knowledge (local) checks and Knowledge (local) is always a class skill for you.',
    shortDescription: '+1 Knowledge (local), class skill',
    source: 'Pathfinder Campaign Setting',
    category: 'campaign',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_local',
        value: 1,
        source: 'Conspiracy Hunter',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.knowledge_local',
        value: 1,
        source: 'Conspiracy Hunter',
      },
    ],
    tags: ['knowledge', 'local', 'campaign'],
  },
  {
    id: 'reclaiming_your_roots',
    name: 'Reclaiming Your Roots',
    description:
      'You have returned to the land of your ancestors after a long absence, and your homecoming has inspired you. You gain a +1 trait bonus on Will saves and a +1 trait bonus on Knowledge (history) checks relating to your homeland.',
    shortDescription: '+1 Will saves',
    source: 'Pathfinder Campaign Setting',
    category: 'campaign',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Reclaiming Your Roots',
      },
    ],
    tags: ['will', 'save', 'campaign', 'homeland'],
  },
  {
    id: 'local_ties',
    name: 'Local Ties',
    description:
      'You have deep connections to the community you call home. You gain a +1 trait bonus on Knowledge (local) checks and can make Knowledge (local) checks untrained regarding your home region.',
    shortDescription: '+1 Knowledge (local)',
    source: 'Pathfinder Campaign Setting',
    category: 'campaign',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_local',
        value: 1,
        source: 'Local Ties',
      },
    ],
    tags: ['knowledge', 'local', 'campaign', 'community'],
  },
  {
    id: 'touched_by_divinity',
    name: 'Touched by Divinity',
    description:
      'As long as you can remember, you have had an unexplained connection to a deity. Perhaps you were birth-blessed or witnessed a miracle as a child. You gain a +1 trait bonus on a save of your choice (Fortitude, Reflex, or Will).',
    shortDescription: '+1 to one save of your choice',
    source: 'Pathfinder Campaign Setting',
    category: 'campaign',
    prerequisites: [],
    effects: [],
    choices: [
      {
        type: 'custom',
        label: 'Choose a saving throw',
        options: ['Fortitude', 'Reflex', 'Will'],
        affectsEffects: true,
        effectTargetTemplate: 'save.{choice}',
      },
    ],
    tags: ['save', 'divine', 'campaign'],
  },
  {
    id: 'worldwound_refugee',
    name: 'Worldwound Refugee',
    description:
      'You fled your home near the Worldwound when the demons invaded. The horrors you witnessed during your escape have hardened your resolve. You gain a +2 trait bonus on Initiative checks.',
    shortDescription: '+2 Initiative',
    source: 'Pathfinder Campaign Setting',
    category: 'campaign',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 2,
        source: 'Worldwound Refugee',
      },
    ],
    tags: ['initiative', 'campaign', 'worldwound', 'demon'],
  },
  {
    id: 'stolen_fury',
    name: 'Stolen Fury',
    description:
      'You were abducted by demons or their mortal minions at a young age, but you managed to escape. The experience left you with a burning hatred for a particular type of demon. You gain a +2 trait bonus on attack rolls against one demon subtype of your choice.',
    shortDescription: '+2 attack vs chosen demon subtype',
    source: 'Pathfinder Campaign Setting',
    category: 'campaign',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.all',
        value: 2,
        source: 'Stolen Fury',
        condition: { type: 'custom', params: {}, description: 'Against chosen demon subtype' },
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Choose a demon subtype',
        options: ['Babau', 'Brimorak', 'Dretch', 'Incubus', 'Schir', 'Succubus', 'Vrock'],
        affectsEffects: true,
      },
    ],
    tags: ['attack', 'demon', 'campaign', 'worldwound'],
  },
  {
    id: 'chance_encounter',
    name: 'Chance Encounter',
    description:
      'You once met a famous hero or wise sage, and that brief encounter left a lasting impression. The memory of their wisdom drives you. You gain a +1 trait bonus on Perception checks and a +1 trait bonus on Knowledge checks of one type of your choice.',
    shortDescription: '+1 Perception',
    source: 'Pathfinder Campaign Setting',
    category: 'campaign',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 1,
        source: 'Chance Encounter',
      },
    ],
    tags: ['perception', 'campaign'],
  },

  // ==================== SOCIAL TRAITS (INNER SEA) ====================
  {
    id: 'inner_sea_merchant',
    name: 'Inner Sea Merchant',
    description:
      'You have travelled the trade routes of the Inner Sea extensively, buying and selling goods across many nations. You gain a +1 trait bonus on Appraise checks and a +1 trait bonus on one Profession skill of your choice. Appraise is always a class skill for you.',
    shortDescription: '+1 Appraise, class skill; +1 Profession (choice)',
    source: 'Inner Sea World Guide',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.appraise',
        value: 1,
        source: 'Inner Sea Merchant',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.appraise',
        value: 1,
        source: 'Inner Sea Merchant',
      },
    ],
    choices: [
      {
        type: 'skill',
        label: 'Choose a Profession skill',
        options: [
          'profession.merchant',
          'profession.sailor',
          'profession.teamster',
          'profession.scribe',
        ],
        affectsEffects: true,
        effectTargetTemplate: 'skill.{choice}',
      },
    ],
    tags: ['appraise', 'profession', 'merchant', 'trade'],
  },
  {
    id: 'inner_sea_pioneer',
    name: 'Inner Sea Pioneer',
    description:
      'You have ventured into the untamed wilderness of the Inner Sea region to carve out a new life. Your self-reliance has made you strong. You gain a +1 trait bonus on Survival checks and Survival is always a class skill for you.',
    shortDescription: '+1 Survival, class skill',
    source: 'Inner Sea World Guide',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Inner Sea Pioneer',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.survival',
        value: 1,
        source: 'Inner Sea Pioneer',
      },
    ],
    tags: ['survival', 'wilderness', 'pioneer'],
  },
  {
    id: 'watchman',
    name: 'Watchman',
    description:
      'You have served in the city watch or town guard. Your experience patrolling and keeping order has sharpened your senses. You gain a +1 trait bonus on Perception checks and Perception is always a class skill for you.',
    shortDescription: '+1 Perception, class skill',
    source: 'Inner Sea World Guide',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 1,
        source: 'Watchman',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.perception',
        value: 1,
        source: 'Watchman',
      },
    ],
    tags: ['perception', 'guard', 'city'],
  },
  {
    id: 'pathfinder_recruit',
    name: 'Pathfinder Recruit',
    description:
      'You have recently been accepted into the Pathfinder Society and are eager to prove yourself. Your training has given you a broad base of knowledge. You gain a +1 trait bonus on Knowledge (geography) checks and Knowledge (geography) is always a class skill for you.',
    shortDescription: '+1 Knowledge (geography), class skill',
    source: 'Inner Sea World Guide',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_geography',
        value: 1,
        source: 'Pathfinder Recruit',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.knowledge_geography',
        value: 1,
        source: 'Pathfinder Recruit',
      },
    ],
    tags: ['knowledge', 'geography', 'pathfinder society'],
  },
  {
    id: 'dervish',
    name: 'Dervish',
    description:
      'You have trained in the whirling dervish style of dance and combat popular in Qadira and Katapesh. You gain a +1 trait bonus on Perform (dance) checks and a +1 trait bonus on Acrobatics checks to avoid attacks of opportunity.',
    shortDescription: '+1 Perform (dance), +1 Acrobatics vs AoO',
    source: 'Inner Sea World Guide',
    category: 'social',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perform_dance',
        value: 1,
        source: 'Dervish',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.acrobatics',
        value: 1,
        source: 'Dervish',
        condition: { type: 'custom', params: {}, description: 'To avoid attacks of opportunity' },
      },
    ],
    tags: ['perform', 'acrobatics', 'dance', 'combat'],
  },

  // ==================== COMBAT TRAITS (INNER SEA) ====================
  {
    id: 'genie_blooded',
    name: 'Genie-Blooded',
    description:
      'One of your ancestors was a genie, and their elemental blood runs through your veins. Choose an energy type (acid, cold, electricity, or fire). You gain a +1 trait bonus on damage rolls with spells that deal damage of the chosen energy type.',
    shortDescription: '+1 spell damage with chosen energy type',
    source: 'Inner Sea World Guide',
    category: 'combat',
    prerequisites: [],
    effects: [],
    choices: [
      {
        type: 'custom',
        label: 'Choose an energy type',
        options: ['Acid', 'Cold', 'Electricity', 'Fire'],
        affectsEffects: true,
      },
    ],
    tags: ['damage', 'spell', 'elemental', 'genie'],
  },
  {
    id: 'demon_smiter',
    name: 'Demon Smiter',
    description:
      'You have been trained to fight against the demonic forces of the Worldwound or the Abyss. You gain a +1 trait bonus on weapon damage rolls against creatures with the demon subtype.',
    shortDescription: '+1 damage vs demons',
    source: 'Inner Sea World Guide',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.all',
        value: 1,
        source: 'Demon Smiter',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against creatures with the demon subtype',
        },
      },
    ],
    tags: ['damage', 'demon', 'combat'],
  },
  {
    id: 'dueling_unto_death',
    name: 'Dueling unto Death',
    description:
      'You have fought in several formal duels and have learned to remain calm and focused during single combat. You gain a +1 trait bonus on attack rolls when you are the only one threatening a foe.',
    shortDescription: '+1 attack in one-on-one combat',
    source: 'Inner Sea World Guide',
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.all',
        value: 1,
        source: 'Dueling unto Death',
        condition: {
          type: 'custom',
          params: {},
          description: 'When you are the only one threatening a foe',
        },
      },
    ],
    tags: ['attack', 'duel', 'combat'],
  },

  // ==================== MAGIC TRAITS (INNER SEA) ====================
  {
    id: 'thassilonian_arcana',
    name: 'Thassilonian Arcana',
    description:
      'You have studied the ancient magical traditions of Thassilon. You gain a +1 trait bonus on Spellcraft checks to identify magic items and a +1 trait bonus on Use Magic Device checks.',
    shortDescription: '+1 Spellcraft (identify), +1 UMD',
    source: 'Inner Sea World Guide',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.spellcraft',
        value: 1,
        source: 'Thassilonian Arcana',
        condition: { type: 'custom', params: {}, description: 'To identify magic items' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.use_magic_device',
        value: 1,
        source: 'Thassilonian Arcana',
      },
    ],
    tags: ['spellcraft', 'use magic device', 'thassilon', 'magic'],
  },
  {
    id: 'ley_line_sensitive',
    name: 'Ley Line Sensitive',
    description:
      'You are attuned to the ley lines that crisscross Golarion. When within 100 feet of a ley line or magical nexus, you gain a +1 trait bonus on caster level checks to overcome spell resistance.',
    shortDescription: '+1 CL checks vs SR near ley lines',
    source: 'Inner Sea World Guide',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'spell.caster_level_check',
        value: 1,
        source: 'Ley Line Sensitive',
        condition: {
          type: 'custom',
          params: {},
          description: 'When within 100 feet of a ley line or magical nexus',
        },
      },
    ],
    tags: ['caster level', 'spell resistance', 'ley line', 'magic'],
  },
  {
    id: 'nexian_channeler',
    name: 'Nexian Channeler',
    description:
      'You were trained in the magical nation of Nex, where conjuration magic is highly prized. Your summoned creatures last 1 round longer than normal.',
    shortDescription: 'Summoned creatures last 1 extra round',
    source: 'Inner Sea World Guide',
    category: 'magic',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'spell.summon_duration',
        value: 1,
        source: 'Nexian Channeler',
      },
    ],
    tags: ['summoning', 'conjuration', 'nex', 'magic'],
  },

  // ==================== FAITH TRAITS (INNER SEA) ====================
  {
    id: 'aroden_s_blessing',
    name: "Aroden's Blessing",
    description:
      'Though the god Aroden is dead, his blessing still lingers in your bloodline. Once per day as a swift action, you gain a +1 trait bonus on a single attack roll, saving throw, ability check, or skill check.',
    shortDescription: '1/day +1 to one roll as swift action',
    source: 'Inner Sea World Guide',
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'misc.once_per_day_bonus',
        value: 1,
        source: "Aroden's Blessing",
      },
    ],
    tags: ['aroden', 'faith', 'once per day'],
  },
  {
    id: 'history_of_the_gods',
    name: 'History of the Gods',
    description:
      'You have studied the histories and mythologies of the gods of the Inner Sea extensively. You gain a +1 trait bonus on Knowledge (religion) checks and Knowledge (religion) is always a class skill for you.',
    shortDescription: '+1 Knowledge (religion), class skill',
    source: 'Inner Sea World Guide',
    category: 'faith',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_religion',
        value: 1,
        source: 'History of the Gods',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.knowledge_religion',
        value: 1,
        source: 'History of the Gods',
      },
    ],
    tags: ['knowledge', 'religion', 'faith', 'gods'],
  },
];
