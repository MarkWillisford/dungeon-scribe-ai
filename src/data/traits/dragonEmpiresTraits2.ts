import type { TraitDefinition } from '@/types/traits';
import { BonusType } from '@/types/base';

export const DRAGON_EMPIRES_PRIMER_TRAITS_2: TraitDefinition[] = [
  // ==================== REGIONAL TRAITS — TIAN XIA (continued) ====================

  // Region: Kaoling
  {
    id: 'privileged_slave_dep',
    name: 'Privileged Slave',
    description:
      'You were enslaved by the hobgoblins of Kaoling, and obeyed your masters dutifully, turning your back on comrades in order to find favor with your slavers — all the while plotting your escape. You gain a +1 trait bonus on Bluff checks, and Bluff becomes a class skill for you.',
    shortDescription: '+1 Bluff; Bluff becomes a class skill.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Kaoling',
    prerequisites: [{ type: 'region', regionName: 'Kaoling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Privileged Slave',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.bluff',
        value: 0,
        source: 'Privileged Slave',
      },
    ],
    tags: ['kaoling', 'bluff', 'social'],
  },

  // Region: Quain
  {
    id: 'quain_martial_artist_dep',
    name: 'Quain Martial Artist',
    description:
      "You trained in one of Quain's many martial arts schools and learned to strike with greater precision and force. You gain a +1 trait bonus on damage rolls when using unarmed strikes.",
    shortDescription: '+1 damage with unarmed strikes.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Quain',
    prerequisites: [{ type: 'region', regionName: 'Quain' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.unarmed',
        value: 1,
        source: 'Quain Martial Artist',
      },
    ],
    tags: ['quain', 'unarmed', 'damage', 'martial arts'],
  },
  {
    id: 'silvertongued_eunuch_dep',
    name: 'Silvertongued Eunuch',
    description:
      "You trained in Quain's eunuch bureaucracy, exchanging physical capability for formal education and diplomatic skills. You gain a +1 trait bonus on Knowledge (nobility) checks and a +1 trait bonus on Diplomacy checks.",
    shortDescription: '+1 Knowledge (nobility) and +1 Diplomacy.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Quain',
    prerequisites: [{ type: 'region', regionName: 'Quain' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nobility',
        value: 1,
        source: 'Silvertongued Eunuch',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Silvertongued Eunuch',
      },
    ],
    tags: ['quain', 'knowledge nobility', 'diplomacy', 'social'],
  },

  // Region: Shokuro
  {
    id: 'rebel_leader_dep',
    name: 'Rebel Leader',
    description:
      "A close relative of yours was involved in the rebellions that secured Shokuro's independence, and you have inherited their revolutionary spirit. You gain a +1 trait bonus to your Leadership score when you take the Leadership feat.",
    shortDescription: '+1 to Leadership score.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Shokuro',
    prerequisites: [{ type: 'region', regionName: 'Shokuro' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'special.leadership_score',
        value: 1,
        source: 'Rebel Leader',
      },
    ],
    tags: ['shokuro', 'leadership', 'social'],
  },

  // Region: Wanshou
  {
    id: 'rice_runner_dep',
    name: 'Rice Runner',
    description:
      "You grew up laboring in Wanshou's vast rice fields, navigating wet and unstable terrain under harsh conditions. You gain a +1 trait bonus on Acrobatics checks, and Acrobatics becomes a class skill for you.",
    shortDescription: '+1 Acrobatics; Acrobatics becomes a class skill.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Wanshou',
    prerequisites: [{ type: 'region', regionName: 'Wanshou' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.acrobatics',
        value: 1,
        source: 'Rice Runner',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.acrobatics',
        value: 0,
        source: 'Rice Runner',
      },
    ],
    tags: ['wanshou', 'acrobatics', 'athletic'],
  },
  {
    id: 'swamp_rebel_dep',
    name: 'Swamp Rebel',
    description:
      'You grew up hiding in the swamps of Wanshou to evade enslavement by monstrous overlords, becoming an expert at moving unseen through marshland. You gain a +2 trait bonus on Stealth checks in swampy terrain, and Stealth becomes a class skill for you.',
    shortDescription: '+2 Stealth in swampy terrain; Stealth becomes a class skill.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Wanshou',
    prerequisites: [{ type: 'region', regionName: 'Wanshou' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.stealth',
        value: 2,
        source: 'Swamp Rebel',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.stealth',
        value: 0,
        source: 'Swamp Rebel',
      },
    ],
    tags: ['wanshou', 'stealth', 'swamp', 'terrain'],
  },

  // Region: Shenmen
  {
    id: 'shenmen_prospector_dep',
    name: 'Shenmen Prospector',
    description:
      'You worked the silver mines of Shenmen and explored the mysterious caverns beneath this cursed nation. You gain a +1 trait bonus on Appraise checks and a +1 trait bonus on Knowledge (dungeoneering) checks.',
    shortDescription: '+1 Appraise and +1 Knowledge (dungeoneering).',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Shenmen',
    prerequisites: [{ type: 'region', regionName: 'Shenmen' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.appraise',
        value: 1,
        source: 'Shenmen Prospector',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_dungeoneering',
        value: 1,
        source: 'Shenmen Prospector',
      },
    ],
    tags: ['shenmen', 'appraise', 'knowledge', 'mining'],
  },

  // Region: Nagajor
  {
    id: 'snake_bleeder_dep',
    name: 'Snake Bleeder',
    description:
      'You have learned the art of poison-making from the nagas of Nagajor. You gain a +2 trait bonus on Craft (alchemy) checks when brewing poisons, and Craft (alchemy) becomes a class skill for you.',
    shortDescription:
      '+2 Craft (alchemy) for brewing poisons; Craft (alchemy) becomes a class skill.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Nagajor',
    prerequisites: [{ type: 'region', regionName: 'Nagajor' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.craft_alchemy',
        value: 2,
        source: 'Snake Bleeder',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.craft_alchemy',
        value: 0,
        source: 'Snake Bleeder',
      },
    ],
    tags: ['nagajor', 'craft alchemy', 'poison', 'alchemy'],
  },

  // Region: Zi Ha
  {
    id: 'sound_of_mind_dep',
    name: 'Sound of Mind',
    description:
      'You have lived in the mountains of Zi Ha and found utter tranquility among the samsarans of the region. You gain a +2 trait bonus on saving throws against mind-affecting effects.',
    shortDescription: '+2 on saving throws against mind-affecting effects.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Zi Ha',
    prerequisites: [{ type: 'region', regionName: 'Zi Ha' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'saving_throw.mind_affecting',
        value: 2,
        source: 'Sound of Mind',
      },
    ],
    tags: ['zi ha', 'mind-affecting', 'saving throw', 'samsaran'],
  },

  // Region: Forest of Spirits
  {
    id: 'spiritual_forester_dep',
    name: 'Spiritual Forester',
    description:
      'You grew up in settlements bordering the Forest of Spirits and learned to navigate both the natural world and the realm of kami. You gain a +1 trait bonus on Knowledge (nature) checks and a +1 trait bonus on Knowledge (planes) checks, and one of these skills becomes a class skill for you.',
    shortDescription: '+1 Knowledge (nature) and +1 Knowledge (planes); one becomes a class skill.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Forest of Spirits',
    prerequisites: [{ type: 'region', regionName: 'Forest of Spirits' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nature',
        value: 1,
        source: 'Spiritual Forester',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_planes',
        value: 1,
        source: 'Spiritual Forester',
      },
    ],
    tags: ['forest of spirits', 'knowledge nature', 'knowledge planes', 'kami'],
  },

  // Region: Hongal
  {
    id: 'storm_hunter_dep',
    name: 'Storm Hunter',
    description:
      'You trained to hunt in the persistently windy environment of Hongal and learned to maintain accuracy despite adverse weather conditions. You treat the wind category as one level lower for the purposes of determining penalties on ranged attacks made with normal weapons.',
    shortDescription: 'Treat wind as one category lower for ranged attack penalties.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Hongal',
    prerequisites: [{ type: 'region', regionName: 'Hongal' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'combat.wind_ranged_penalty',
        value: 0,
        source: 'Storm Hunter',
      },
    ],
    tags: ['hongal', 'ranged', 'wind', 'weather', 'archery'],
  },

  // Region: Bachuan
  {
    id: 'szaezan_crags_miner_dep',
    name: 'Szaezan Crags Miner',
    description:
      'You were a miner of the now-scarce ores of the Szaezan Crags in Bachuan, and have become adept at identifying minerals and gems. You gain a +1 trait bonus on Appraise checks, and Appraise becomes a class skill for you.',
    shortDescription: '+1 Appraise; Appraise becomes a class skill.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Bachuan',
    prerequisites: [{ type: 'region', regionName: 'Bachuan' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.appraise',
        value: 1,
        source: 'Szaezan Crags Miner',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.appraise',
        value: 0,
        source: 'Szaezan Crags Miner',
      },
    ],
    tags: ['bachuan', 'appraise', 'mining', 'gems'],
  },

  // Region: Tianjing
  {
    id: 'tianjing_temple_guard_dep',
    name: 'Tianjing Temple Guard',
    description:
      'You served as a guard protecting the sacred temple cities of Tianjing against bandit incursions, developing specialized polearm combat techniques. You gain a +1 trait bonus on attacks of opportunity made with polearm weapons.',
    shortDescription: '+1 on attacks of opportunity with polearms.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Tianjing',
    prerequisites: [{ type: 'region', regionName: 'Tianjing' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.opportunity_polearm',
        value: 1,
        source: 'Tianjing Temple Guard',
      },
    ],
    tags: ['tianjing', 'polearm', 'attack of opportunity', 'martial'],
  },

  // Region: Xidao
  {
    id: 'trench_navigator_dep',
    name: 'Trench Navigator',
    description:
      'You have experience navigating the hazardous waters and underwater trenches of the Xidao Gulf. You gain a +1 trait bonus on Knowledge (geography) checks and a +1 trait bonus on Profession (sailor) checks, and one of these skills becomes a class skill for you.',
    shortDescription:
      '+1 Knowledge (geography) and +1 Profession (sailor); one becomes a class skill.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Xidao',
    prerequisites: [{ type: 'region', regionName: 'Xidao' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_geography',
        value: 1,
        source: 'Trench Navigator',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.profession_sailor',
        value: 1,
        source: 'Trench Navigator',
      },
    ],
    tags: ['xidao', 'knowledge geography', 'profession sailor', 'naval'],
  },

  // Region: Xa Hoi
  {
    id: 'xa_hoi_soldier_dep',
    name: 'Xa Hoi Soldier',
    description:
      "You were trained as a soldier in one of Xa Hoi's armies under the watchful eye of draconic overseers, honing your reflexes through rigorous military drill. You gain a +1 trait bonus on Reflex saves.",
    shortDescription: '+1 on Reflex saves.',
    source: 'Pathfinder Player Companion: Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    subcategory: 'Xa Hoi',
    prerequisites: [{ type: 'region', regionName: 'Xa Hoi' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'saving_throw.reflex',
        value: 1,
        source: 'Xa Hoi Soldier',
      },
    ],
    tags: ['xa hoi', 'reflex', 'saving throw', 'martial'],
  },
];

// CHECKPOINT: last_written=xa_hoi_soldier_dep, written=15/15, status=complete
