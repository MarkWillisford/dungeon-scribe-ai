import type { TraitDefinition } from '@/types/traits';
import { BonusType } from '@/types/base';

export const HELLS_VENGEANCE_TRAITS: TraitDefinition[] = [
  // ==================== CAMPAIGN TRAITS — Hell's Vengeance ====================
  {
    id: 'amoral_mercenary',
    name: 'Amoral Mercenary',
    description:
      "You have killed before and have no moral qualms about doing so again—as long as the coin is right. You gain a +1 trait bonus on Sense Motive checks, and Sense Motive is always a class skill for you. Once per day as an immediate action, you can shift your effective alignment so that you are considered neutral instead of evil for the purpose of good effects targeting evil creatures (such as holy smite or a paladin's smite evil). Your actual alignment does not change when you use this ability.",
    shortDescription:
      '+1 Sense Motive; class skill; 1/day appear neutral vs good effects targeting evil',
    source: "Hell's Vengeance Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: "Hell's Vengeance",
    prerequisites: [{ type: 'special', description: 'Must be neutral evil alignment' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive',
        value: 1,
        source: 'Amoral Mercenary',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Amoral Mercenary',
      },
    ],
    tags: ['sense_motive', 'alignment', 'evil', 'mercenary', 'cheliax'],
  },
  {
    id: 'apprentice_devilbinder',
    name: 'Apprentice Devilbinder',
    description:
      "You trained as an apprentice to a diabolist in Cheliax from a young age. After learning what you could from your master, you left to pursue your own path, aiming to bind Hell's minions to your will and establish yourself as a premier devilbinder in Cheliax. When you cast summon monster spells to summon devils or fiendish creatures, the duration of the spell increases by 1 round. You also gain a +1 trait bonus on opposed Charisma checks when using planar binding spells against conjured devils, and payments to devils summoned via planar ally spells are reduced by 10%.",
    shortDescription:
      'Summon monster +1 round for devils; +1 Cha checks vs planar binding devils; 10% cheaper planar ally',
    source: "Hell's Vengeance Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: "Hell's Vengeance",
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Apprentice Devilbinder',
      },
    ],
    tags: ['summon', 'devil', 'fiend', 'planar_binding', 'diabolist', 'cheliax', 'conjuration'],
  },
  {
    id: 'asmodean_acolyte',
    name: 'Asmodean Acolyte',
    description:
      'You were raised within the church of Asmodeus from childhood. You studied infernal texts, learned the hierarchies of Hell, and worked to suppress emotion and compassion in imitation of the Prince of Darkness. You may have continued on as a priest of the faith, or you may have left (willingly or not) but retained your religious education. You gain a +1 trait bonus on Diplomacy checks, a +1 trait bonus on Knowledge (planes) checks, and a +1 trait bonus on Knowledge (religion) checks. One of these three skills (your choice) is always a class skill for you. You also gain the ability to speak and understand Infernal; this language does not count toward your language limit.',
    shortDescription:
      '+1 Diplomacy, Knowledge (planes), Knowledge (religion); one is class skill; gain Infernal language',
    source: "Hell's Vengeance Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: "Hell's Vengeance",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Asmodean Acolyte',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_planes',
        value: 1,
        source: 'Asmodean Acolyte',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_religion',
        value: 1,
        source: 'Asmodean Acolyte',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Asmodean Acolyte',
      },
    ],
    tags: ['diplomacy', 'knowledge', 'planes', 'religion', 'asmodeus', 'infernal', 'cheliax'],
  },
  {
    id: 'chelish_noble',
    name: 'Chelish Noble',
    description:
      "You were born into one of Cheliax's noble families loyal to House Thrune. Your family has a small estate and a minor title. Non-humans may have been adopted into such a family or granted a nonhereditary title. You gain a +1 trait bonus on Knowledge (nobility) checks, and Knowledge (nobility) is always a class skill for you. You also gain a +1 trait bonus on Charisma-based checks against members of the Chelish aristocracy. In addition, the Noble Scion feat has no Charisma prerequisite for you. You begin play with a noble's outfit, a signet ring, and one additional nonmagical item worth no more than 200 gp.",
    shortDescription:
      '+1 Knowledge (nobility); class skill; +1 Cha checks vs nobles; Noble Scion needs no Cha prereq; starting equipment',
    source: "Hell's Vengeance Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: "Hell's Vengeance",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nobility',
        value: 1,
        source: 'Chelish Noble',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.charisma_checks',
        value: 1,
        source: 'Chelish Noble',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against members of the Chelish aristocracy',
        },
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Chelish Noble',
      },
    ],
    tags: ['knowledge', 'nobility', 'noble', 'charisma', 'cheliax', 'thrune', 'social'],
  },
  {
    id: 'erratic_malefactor',
    name: 'Erratic Malefactor',
    description:
      "You thrive on unpredictability and volatile behavior, cherishing your freedom from others' control. In lawful Cheliax, you manage your chaotic nature while seeking opportunities to act without restraint, often working with House Thrune for the rewards and the liberty it offers to pursue your darker instincts. You gain a +2 trait bonus on initiative checks. Once per day, when an ally is within 10 feet of you, you may reroll a single attack roll or skill check before the outcome of that roll is determined; you must take the result of the second roll, even if it is worse.",
    shortDescription: '+2 initiative; 1/day reroll attack or skill check when ally within 10 ft',
    source: "Hell's Vengeance Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: "Hell's Vengeance",
    prerequisites: [{ type: 'special', description: 'Must be chaotic evil alignment' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 2,
        source: 'Erratic Malefactor',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Erratic Malefactor',
      },
    ],
    tags: ['initiative', 'reroll', 'chaotic_evil', 'cheliax'],
  },
  {
    id: 'ex_iomedaean',
    name: 'Ex-Iomedaean',
    description:
      "You or your family were once devoted to Iomedae but lost faith—perhaps accusations of dishonor were leveled at your family, your family fell victim to the church's unflinching justice, or you experienced an ideological awakening that revealed the goddess as a liar who abandoned those she once championed. You left the church, and your family was subjected to scorn and holier-than-thou disapproval as a result. You now seek vengeance against the church of Iomedae, and opportunity has come in Cheliax. Choose one of the following benefits: you gain a +1 trait bonus on attack rolls and weapon damage rolls against followers of Iomedae (including many, but not all, archons and angels), or you gain a +1 trait bonus to the save DCs of your spells against these same targets.",
    shortDescription:
      'Choose: +1 attack and damage vs Iomedae followers, or +1 spell save DC vs same',
    source: "Hell's Vengeance Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: "Hell's Vengeance",
    prerequisites: [],
    effects: [],
    choices: [
      {
        type: 'skill',
        label: 'Choose a benefit',
        options: [
          '+1 attack and damage rolls vs followers of Iomedae',
          '+1 save DC of spells vs followers of Iomedae',
        ],
        affectsEffects: true,
        effectTargetTemplate: 'special.{choice}',
      },
    ],
    tags: ['iomedae', 'attack', 'damage', 'spell_dc', 'cheliax', 'religion'],
  },
  {
    id: 'good_slip',
    name: 'Good Slip',
    description:
      "You are a Chelish halfling who has embraced your role in that nation's society, whether you were born free or eventually freed from slavery. You know how to use your tendency to be overlooked to your advantage while keeping knowledge of your place in the social structure. You gain a +1 trait bonus on Bluff checks, and Bluff is always a class skill for you. Once per day, when you are adjacent to a human ally of Chelish descent, you may reroll a Will saving throw before the result of that saving throw is known. You must take the results of the second roll, even if it is worse.",
    shortDescription:
      '+1 Bluff; class skill; 1/day reroll Will save when adjacent to a Chelish human ally',
    source: "Hell's Vengeance Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: "Hell's Vengeance",
    prerequisites: [{ type: 'race', raceName: 'Halfling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Good Slip',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Good Slip',
      },
    ],
    tags: ['bluff', 'will', 'reroll', 'halfling', 'cheliax', 'social'],
  },
  {
    id: 'hellknight_aspirant',
    name: 'Hellknight Aspirant',
    description:
      "You admire the Hellknights and their philosophy of the Measure and the Chain, and you aspire to eventually join their ranks and uphold the laws of Hell and Cheliax. You gain a +1 trait bonus on Knowledge (planes) checks, and Knowledge (planes) is always a class skill for you. Select one Hellknight order: Order of the Chain (flail), Order of the Gate (dagger), Order of the Godclaw (morningstar), Order of the Nail (lance or halberd), Order of the Pike (longspear), Order of the Pyre (glaive), Order of the Rack (longsword or whip), or Order of the Scourge (heavy mace or whip). You gain proficiency with that order's associated weapon and a +1 trait bonus to your Combat Maneuver Defense against sunder and disarm attempts targeting that weapon.",
    shortDescription:
      '+1 Knowledge (planes); class skill; proficiency with chosen Hellknight order weapon; +1 CMD vs sunder/disarm for that weapon',
    source: "Hell's Vengeance Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: "Hell's Vengeance",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_planes',
        value: 1,
        source: 'Hellknight Aspirant',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Hellknight Aspirant',
      },
    ],
    choices: [
      {
        type: 'skill',
        label: 'Choose a Hellknight order',
        options: [
          'Order of the Chain (flail)',
          'Order of the Gate (dagger)',
          'Order of the Godclaw (morningstar)',
          'Order of the Nail (lance)',
          'Order of the Nail (halberd)',
          'Order of the Pike (longspear)',
          'Order of the Pyre (glaive)',
          'Order of the Rack (longsword)',
          'Order of the Rack (whip)',
          'Order of the Scourge (heavy mace)',
          'Order of the Scourge (whip)',
        ],
        affectsEffects: true,
        effectTargetTemplate: 'special.{choice}',
      },
    ],
    tags: ['knowledge', 'planes', 'hellknight', 'weapon_proficiency', 'cmd', 'cheliax'],
  },
  {
    id: 'local_tough',
    name: 'Local Tough',
    description:
      'You are a native of Longacre, a town on the southwestern fringes of the Whisperwood, and have established yourself as a local troublemaker—a thug, enforcer, and petty thief. You work with fellow miscreant Cimri Staelish and have agreed to participate in a burglary of a tannery outside town. You gain a +1 trait bonus on Intimidate checks, and Intimidate is always a class skill for you. You also gain a +1 trait bonus on weapon damage rolls when flanking a foe with an ally.',
    shortDescription: '+1 Intimidate; class skill; +1 weapon damage when flanking',
    source: "Hell's Vengeance Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: "Hell's Vengeance",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Local Tough',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.melee',
        value: 1,
        source: 'Local Tough',
        condition: {
          type: 'custom',
          params: {},
          description: 'When flanking a foe with an ally',
        },
      },
    ],
    tags: ['intimidate', 'damage', 'flanking', 'longacre', 'cheliax', 'thug'],
  },
  {
    id: 'scion_of_the_nine_circles',
    name: 'Scion of the Nine Circles',
    description:
      "You are a philosophical devotee of diabolism and the structure of Hell itself, rather than a worshiper of any single archdevil. You view Hell's hierarchy as an ideal model for society and have studied its structure extensively. You gain a +1 trait bonus on Knowledge (planes) checks, and Knowledge (planes) is always a class skill for you. You learn Infernal (this language does not count toward your language limit). You also gain a +2 trait bonus on Will saving throws against mind-affecting effects from good-subtype outsiders.",
    shortDescription:
      '+1 Knowledge (planes); class skill; gain Infernal; +2 Will saves vs mind-affecting from good outsiders',
    source: "Hell's Vengeance Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: "Hell's Vengeance",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_planes',
        value: 1,
        source: 'Scion of the Nine Circles',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 2,
        source: 'Scion of the Nine Circles',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against mind-affecting effects from good-subtype outsiders',
        },
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Scion of the Nine Circles',
      },
    ],
    tags: ['knowledge', 'planes', 'will', 'infernal', 'diabolism', 'cheliax', 'outsider'],
  },
  {
    id: 'thrune_informant',
    name: 'Thrune Informant',
    description:
      'You serve House Thrune as a paid informant, reporting your observations to authorities and occasionally carrying out assigned tasks, with an eye toward eventual promotion within the organization. You gain a +1 trait bonus on Diplomacy checks to gather information, Disguise checks, and Knowledge (local) checks. One of these three skills (your choice) is always a class skill for you.',
    shortDescription: '+1 Diplomacy (gather info), Disguise, Knowledge (local); one is class skill',
    source: "Hell's Vengeance Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: "Hell's Vengeance",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Thrune Informant',
        condition: {
          type: 'custom',
          params: {},
          description: 'To gather information only',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.disguise',
        value: 1,
        source: 'Thrune Informant',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_local',
        value: 1,
        source: 'Thrune Informant',
      },
    ],
    tags: ['diplomacy', 'disguise', 'knowledge', 'local', 'thrune', 'cheliax', 'spy'],
  },
];

// CHECKPOINT: last_written=thrune_informant, written=11/11, status=complete
