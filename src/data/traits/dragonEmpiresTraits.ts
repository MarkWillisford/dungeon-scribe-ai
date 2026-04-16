import type { TraitDefinition } from '@/types/traits';
import { BonusType } from '@/types/base';

export const DRAGON_EMPIRES_PRIMER_TRAITS: TraitDefinition[] = [
  // ==================== REGIONAL TRAITS — TIAN XIA ====================

  // Region: Shenmen
  {
    id: 'aberration_hunter_dep',
    name: 'Aberration Hunter',
    description:
      'You have dedicated yourself to combating the aberrations that threaten your homeland of Shenmen. You gain a +1 trait bonus on attacks of opportunity against aberrations.',
    shortDescription: '+1 on attacks of opportunity against aberrations.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Shenmen',
    prerequisites: [{ type: 'region', regionName: 'Shenmen' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'special.attack_of_opportunity_vs_aberrations',
        value: 1,
        source: 'Aberration Hunter',
      },
    ],
    tags: ['shenmen', 'combat', 'aberrations', 'attack of opportunity'],
  },

  // Region: Chu Ye
  {
    id: 'acupuncturist_dep',
    name: 'Acupuncturist',
    description:
      'You have studied acupuncture as a path to healing and enlightenment in the forests of Chu Ye. You gain a +2 trait bonus on all Fortitude saves made against poison effects.',
    shortDescription: '+2 Fortitude saves against poison.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Chu Ye',
    prerequisites: [{ type: 'region', regionName: 'Chu Ye' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'saving_throw.fort',
        value: 2,
        source: 'Acupuncturist',
      },
    ],
    tags: ['chu ye', 'fortitude', 'poison', 'healing'],
  },

  // Region: Tian Xia (general)
  {
    id: 'advocate_for_the_empire_dep',
    name: 'Advocate for the Empire',
    description:
      'You possess strong ties to the empire and spread flattering words regarding it. You gain a +1 trait bonus on Bluff checks, and Bluff becomes a class skill for you.',
    shortDescription: '+1 Bluff; Bluff becomes a class skill.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Tian Xia',
    prerequisites: [{ type: 'region', regionName: 'Tian Xia' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Advocate for the Empire',
      },
      {
        type: 'special',
        target: 'class_skill.bluff',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Advocate for the Empire',
      },
    ],
    tags: ['tian xia', 'bluff', 'social', 'empire'],
  },

  // Region: Hwanggot
  {
    id: 'altruistic_diplomat_dep',
    name: 'Altruistic Diplomat',
    description:
      'Your background in Hwanggot has shaped you toward peaceful and wise conduct, making your reasoning persuasive to those you meet. You must be of good alignment to take this trait. You receive a +2 trait bonus on Diplomacy checks.',
    shortDescription: '+2 Diplomacy (good alignment required).',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Hwanggot',
    prerequisites: [
      { type: 'region', regionName: 'Hwanggot' },
      { type: 'alignment', alignment: 'good' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 2,
        source: 'Altruistic Diplomat',
      },
    ],
    tags: ['hwanggot', 'diplomacy', 'social', 'good alignment'],
  },

  // Region: Minata
  {
    id: 'belem_pirate_dep',
    name: 'Belem Pirate',
    description:
      'You have worked the hidden coves and bays of the island of Belem as a pirate, learning the sea routes and maritime customs of the Minata region. You gain a +1 trait bonus on Knowledge (geography) checks and Profession (sailor) checks, and one of these skills becomes a class skill for you.',
    shortDescription:
      '+1 Knowledge (geography) and Profession (sailor); one becomes a class skill.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Minata',
    prerequisites: [{ type: 'region', regionName: 'Minata' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_geography',
        value: 1,
        source: 'Belem Pirate',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.profession_sailor',
        value: 1,
        source: 'Belem Pirate',
      },
    ],
    tags: ['minata', 'knowledge', 'profession', 'pirate', 'nautical'],
  },

  // Region: Kwanlai
  {
    id: 'border_guard_dep',
    name: 'Border Guard',
    description:
      'You have served as a warrior stationed along the frontier between Kwanlai and Wanshou, gaining hard-won experience fighting against the aquatic terrors that press against the borders. You gain a +2 trait bonus on rolls to confirm critical hits against foes with the aquatic subtype.',
    shortDescription: '+2 to confirm critical hits against aquatic creatures.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Kwanlai',
    prerequisites: [{ type: 'region', regionName: 'Kwanlai' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.crit_confirm_vs_aquatic',
        value: 2,
        source: 'Border Guard',
      },
    ],
    tags: ['kwanlai', 'combat', 'aquatic', 'critical hit'],
  },

  // Region: Po Li
  {
    id: 'chosen_child_dep',
    name: 'Chosen Child',
    description:
      "As a child you were identified by Po Li's oracles as divinely favored, granting you an elevated social status and access to greater resources. Your starting money increases by 900 gp.",
    shortDescription: 'Starting money increases by 900 gp.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Po Li',
    prerequisites: [{ type: 'region', regionName: 'Po Li' }],
    effects: [
      {
        type: 'special',
        target: 'special.starting_wealth',
        value: 900,
        bonusType: BonusType.UNTYPED,
        source: 'Chosen Child',
      },
    ],
    tags: ['po li', 'wealth', 'oracle', 'divine'],
  },

  // Region: Xa Hoi
  {
    id: 'clan_artisan_dep',
    name: 'Clan Artisan',
    description:
      "You were raised in one of Xa Hoi's numerous clans where you learned a trade early in life. Select one Craft skill. You gain a +2 trait bonus on checks with that Craft skill, and it becomes a class skill for you.",
    shortDescription: '+2 to one Craft skill; it becomes a class skill.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Xa Hoi',
    prerequisites: [{ type: 'region', regionName: 'Xa Hoi' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.craft_chosen',
        value: 2,
        source: 'Clan Artisan',
      },
      {
        type: 'special',
        target: 'class_skill.craft_chosen',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Clan Artisan',
      },
    ],
    tags: ['xa hoi', 'craft', 'artisan', 'class skill'],
  },

  // Region: Jinin
  {
    id: 'conscientious_miner_dep',
    name: 'Conscientious Miner',
    description:
      'You trained as a mithral miner in the tunnels of Jinin, developing a keen eye for valuable materials and underground work. You gain a +1 trait bonus on Appraise checks and a +1 trait bonus on Profession (miner) checks. Profession (miner) becomes a class skill for you.',
    shortDescription:
      '+1 Appraise, +1 Profession (miner); Profession (miner) becomes a class skill.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Jinin',
    prerequisites: [{ type: 'region', regionName: 'Jinin' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.appraise',
        value: 1,
        source: 'Conscientious Miner',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.profession_miner',
        value: 1,
        source: 'Conscientious Miner',
      },
    ],
    tags: ['jinin', 'appraise', 'mining', 'class skill'],
  },

  // Region: Goka
  {
    id: 'cosmopolitan_dep',
    name: 'Cosmopolitan',
    description:
      'Growing up among the diverse peoples of Goka has exposed you to many languages and cultures. You receive a +1 trait bonus on Linguistics checks, and Linguistics becomes a class skill for you.',
    shortDescription: '+1 Linguistics; Linguistics becomes a class skill.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Goka',
    prerequisites: [{ type: 'region', regionName: 'Goka' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.linguistics',
        value: 1,
        source: 'Cosmopolitan',
      },
      {
        type: 'special',
        target: 'class_skill.linguistics',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Cosmopolitan',
      },
    ],
    tags: ['goka', 'linguistics', 'languages', 'class skill', 'urban'],
  },

  // Region: Tian Xia Darklands
  {
    id: 'darklands_delver_dep',
    name: 'Darklands Delver',
    description:
      "You have spent time exploring the underground passages of Tian Xia's Darklands and are familiar with its terrain and denizens. You gain a +1 trait bonus on Knowledge (dungeoneering) checks and a +1 trait bonus on Survival checks made in the Darklands. One of these two skills becomes a class skill for you.",
    shortDescription:
      '+1 Knowledge (dungeoneering) and +1 Survival in the Darklands; one becomes a class skill.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Tian Xia',
    prerequisites: [{ type: 'region', regionName: 'Tian Xia Darklands' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_dungeoneering',
        value: 1,
        source: 'Darklands Delver',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Darklands Delver',
      },
    ],
    tags: ['tian xia', 'darklands', 'knowledge', 'survival', 'underground'],
  },

  // Region: Zi Ha
  {
    id: 'discerning_beliefs_dep',
    name: 'Discerning Beliefs',
    description:
      'Your experience in Zi Ha helping samsarans maintain magical boundaries in the Enlightened Peaks has trained your mind to resist illusions. You gain a +2 trait bonus on saving throws to disbelieve illusions.',
    shortDescription: '+2 saves to disbelieve illusions.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Zi Ha',
    prerequisites: [{ type: 'region', regionName: 'Zi Ha' }],
    effects: [
      {
        type: 'special',
        target: 'saving_throw.disbelieve_illusions',
        value: 2,
        bonusType: BonusType.TRAIT,
        source: 'Discerning Beliefs',
      },
    ],
    tags: ['zi ha', 'illusions', 'saving throw', 'samsaran'],
  },

  // Region: Dtang Ma
  {
    id: 'dtang_ma_bloodline_dep',
    name: 'Dtang Ma Bloodline',
    description:
      'You were born in Dtang Ma into one of its favored magical bloodlines. Select one of the following sorcerer bloodlines: fey, maestro, starsoul, or stormborn. Once per day, you may use one of your bloodline powers as if your sorcerer level were 1 higher than normal.',
    shortDescription:
      'Once per day, use one sorcerer bloodline power as if your level were 1 higher.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Dtang Ma',
    prerequisites: [{ type: 'region', regionName: 'Dtang Ma' }],
    effects: [
      {
        type: 'special',
        target: 'bloodline_power.caster_level',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Dtang Ma Bloodline',
      },
    ],
    tags: ['dtang ma', 'sorcerer', 'bloodline', 'magic'],
  },

  // Region: Shokuro
  {
    id: 'freedom_fighter_shokuro_dep',
    name: 'Freedom Fighter (Shokuro)',
    description:
      'You come from a farming background in Shokuro and have actively resisted the oppression that threatens your people. You gain a +1 trait bonus on attack rolls made with improvised weapons.',
    shortDescription: '+1 attack rolls with improvised weapons.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Shokuro',
    prerequisites: [{ type: 'region', regionName: 'Shokuro' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.improvised_weapons',
        value: 1,
        source: 'Freedom Fighter (Shokuro)',
      },
    ],
    tags: ['shokuro', 'combat', 'improvised weapons', 'resistance'],
  },

  // Region: Dtang Ma
  {
    id: 'guerilla_dep',
    name: 'Guerilla',
    description:
      'You spent considerable time among the guerilla fighters operating in the rainforests of Dtang Ma and know the environment well. You gain a +1 trait bonus on Knowledge (nature) checks and a +1 trait bonus on Survival checks made in rainforest settings. One of these two skills becomes a class skill for you.',
    shortDescription:
      '+1 Knowledge (nature) and +1 Survival in rainforests; one becomes a class skill.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Dtang Ma',
    prerequisites: [{ type: 'region', regionName: 'Dtang Ma' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nature',
        value: 1,
        source: 'Guerilla',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Guerilla',
      },
    ],
    tags: ['dtang ma', 'knowledge nature', 'survival', 'rainforest'],
  },

  // Region: Lingshen
  {
    id: 'heart_of_clay_dep',
    name: 'Heart of Clay',
    description:
      'You believe you are destined for service in the terra-cotta army of King Huang after death, and this faith fortifies you against hardship. You gain a +1 trait bonus on Fortitude saves.',
    shortDescription: '+1 Fortitude saves.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Lingshen',
    prerequisites: [{ type: 'region', regionName: 'Lingshen' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'saving_throw.fort',
        value: 1,
        source: 'Heart of Clay',
      },
    ],
    tags: ['lingshen', 'fortitude', 'saving throw', 'faith'],
  },

  // Region: Tianjing
  {
    id: 'heavenly_touch_dep',
    name: 'Heavenly Touch',
    description:
      'Growing up, you were exposed to everyday miracles performed by your half-celestial friends in Tianjing, and some of this magic rubbed off on you. At will, you can touch a dying creature to stabilize it as a standard action.',
    shortDescription: 'At will, touch a dying creature to stabilize it as a standard action.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Tianjing',
    prerequisites: [{ type: 'region', regionName: 'Tianjing' }],
    effects: [
      {
        type: 'special',
        target: 'ability.stabilize_dying_at_will',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Heavenly Touch',
      },
    ],
    tags: ['tianjing', 'celestial', 'healing', 'stabilize'],
  },

  // Region: Amanandar
  {
    id: 'honeyed_tongue_dep',
    name: 'Honeyed Tongue',
    description:
      'You grew up in New Oppara of Amanandar and learned to bridge the cultural gap between Tian-Shu and Taldan customs. You gain a +1 trait bonus on Diplomacy checks, and Diplomacy becomes a class skill for you.',
    shortDescription: '+1 Diplomacy; Diplomacy becomes a class skill.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Amanandar',
    prerequisites: [{ type: 'region', regionName: 'Amanandar' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Honeyed Tongue',
      },
      {
        type: 'special',
        target: 'class_skill.diplomacy',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Honeyed Tongue',
      },
    ],
    tags: ['amanandar', 'diplomacy', 'social', 'class skill'],
  },

  // Region: Hongal
  {
    id: 'hongal_bloodrider_dep',
    name: 'Hongal Bloodrider',
    description:
      'You belong to one of the nomadic groups of horseback riders that range throughout the steppes of Hongal. You gain a +1 trait bonus on Handle Animal checks and a +1 trait bonus on Ride checks.',
    shortDescription: '+1 Handle Animal and +1 Ride.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Hongal',
    prerequisites: [{ type: 'region', regionName: 'Hongal' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.handle_animal',
        value: 1,
        source: 'Hongal Bloodrider',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.ride',
        value: 1,
        source: 'Hongal Bloodrider',
      },
    ],
    tags: ['hongal', 'handle animal', 'ride', 'mounted', 'nomad'],
  },

  // Region: Hwanggot
  {
    id: 'hwan_artist_dep',
    name: 'Hwan Artist',
    description:
      'You were raised in Hwanggot and received early training in the performing arts that flourish there. Select one Perform skill. You gain a +1 trait bonus on checks with that Perform skill, and it becomes a class skill for you.',
    shortDescription: '+1 to one Perform skill; it becomes a class skill.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Hwanggot',
    prerequisites: [{ type: 'region', regionName: 'Hwanggot' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perform_chosen',
        value: 1,
        source: 'Hwan Artist',
      },
      {
        type: 'special',
        target: 'class_skill.perform_chosen',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Hwan Artist',
      },
    ],
    tags: ['hwanggot', 'perform', 'art', 'class skill'],
  },

  // Region: Kaoling
  {
    id: 'indentured_blacksmith_dep',
    name: 'Indentured Blacksmith',
    description:
      'You were forced to make many of the weapons and shields that your captors in Kaoling used in war, giving you deep practical knowledge of arms and armor. Select either Craft (armor) or Craft (weapons). You gain a +1 trait bonus on checks with that skill, and it becomes a class skill for you.',
    shortDescription: '+1 to Craft (armor) or Craft (weapons); it becomes a class skill.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Kaoling',
    prerequisites: [{ type: 'region', regionName: 'Kaoling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.craft_armor_or_weapons',
        value: 1,
        source: 'Indentured Blacksmith',
      },
      {
        type: 'special',
        target: 'class_skill.craft_armor_or_weapons',
        value: 0,
        bonusType: BonusType.UNTYPED,
        source: 'Indentured Blacksmith',
      },
    ],
    tags: ['kaoling', 'craft', 'blacksmith', 'class skill'],
  },

  // Region: Minkai
  {
    id: 'instigator_of_rebellion_dep',
    name: 'Instigator of Rebellion',
    description:
      'Your dissatisfaction with the changes in Minkai has led you to organize public demonstrations against governmental authority. You gain a +1 trait bonus on Diplomacy and Intimidate checks.',
    shortDescription: '+1 Diplomacy and +1 Intimidate.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Minkai',
    prerequisites: [{ type: 'region', regionName: 'Minkai' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Instigator of Rebellion',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Instigator of Rebellion',
      },
    ],
    tags: ['minkai', 'diplomacy', 'intimidate', 'social', 'rebellion'],
  },

  // Region: Jinin
  {
    id: 'intrepid_delver_dep',
    name: 'Intrepid Delver',
    description:
      'One of the elder elves in Ayajinbo told you many stories of the Darklands beneath Jinin, and your nerves have hardened to horrors others can hardly fathom. You gain a +2 trait bonus on saving throws made to resist fear effects.',
    shortDescription: '+2 saving throws against fear effects.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Jinin',
    prerequisites: [{ type: 'region', regionName: 'Jinin' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'saving_throw.all_vs_fear',
        value: 2,
        source: 'Intrepid Delver',
      },
    ],
    tags: ['jinin', 'fear', 'saving throw', 'darklands'],
  },

  // Region: Valashmai Jungle
  {
    id: 'jungle_diplomat_dep',
    name: 'Jungle Diplomat',
    description:
      'You know the ways and mores of the tribes of the Valashmai Jungle and how to handle delicate communications with different groups of people. You gain a +1 trait bonus on Diplomacy checks and a +1 trait bonus on Sense Motive checks.',
    shortDescription: '+1 Diplomacy and +1 Sense Motive.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Valashmai Jungle',
    prerequisites: [{ type: 'region', regionName: 'Valashmai Jungle' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Jungle Diplomat',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive',
        value: 1,
        source: 'Jungle Diplomat',
      },
    ],
    tags: ['valashmai', 'jungle', 'diplomacy', 'sense motive', 'tribal'],
  },

  // Region: Amanandar
  {
    id: 'militia_dep',
    name: 'Militia',
    description:
      "As part of Amanandar's militia, you have trained extensively with groups and know how to press an advantage against distracted foes. You gain a +1 trait bonus on attacks made while flanking an opponent.",
    shortDescription: '+1 attack rolls while flanking.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Amanandar',
    prerequisites: [{ type: 'region', regionName: 'Amanandar' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.while_flanking',
        value: 1,
        source: 'Militia',
      },
    ],
    tags: ['amanandar', 'combat', 'flanking', 'militia'],
  },
];

// CHECKPOINT: last_written=militia_dep, written=25/25, status=complete
