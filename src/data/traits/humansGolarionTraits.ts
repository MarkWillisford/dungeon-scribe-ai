import type { TraitDefinition } from '@/types/traits';
import { BonusType } from '@/types/base';

// NOTE: People of the Sands traits not yet included — to be added in a follow-up scrape.
export const HUMANS_GOLARION_TRAITS: TraitDefinition[] = [
  // ==================== RACE TRAITS — HUMANS OF GOLARION ====================

  // Taldan
  {
    id: 'blade_bravado_ig',
    name: 'Blade Bravado',
    description:
      'You trained in the classical Taldan dueling style, where daring moves and risky maneuvers are prized above all else. When you use the Acrobatics skill to avoid attacks of opportunity while moving or to tumble through a space, you gain a +1 trait bonus on your next attack roll made against a creature that attacked you since the start of your last turn. Additionally, you gain a +1 trait bonus on Bluff checks made as part of a feint in combat.',
    shortDescription: '+1 on next attack after avoiding AoOs via Acrobatics; +1 Bluff to feint.',
    source: 'Pathfinder Player Companion: Humans of Golarion',
    category: 'race',
    subcategory: 'Taldan',
    prerequisites: [{ type: 'race', raceName: 'Human (Taldan)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.acrobatics',
        value: 1,
        source: 'Blade Bravado',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Blade Bravado',
      },
    ],
    tags: ['taldan', 'acrobatics', 'bluff', 'dueling', 'combat'],
  },

  // Shoanti
  {
    id: 'bred_for_war_ig',
    name: 'Bred for War',
    description:
      'You tower above most other humans and possess a physique of hard, corded muscle. You gain a +1 trait bonus on Intimidate checks and a +1 trait bonus on your CMB because of your great size. You must be at least 6 feet tall.',
    shortDescription: '+1 Intimidate and +1 CMB; must be at least 6 feet tall.',
    source: 'Pathfinder Player Companion: Humans of Golarion',
    category: 'race',
    subcategory: 'Shoanti',
    prerequisites: [{ type: 'race', raceName: 'Human (Shoanti)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Bred for War',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmb',
        value: 1,
        source: 'Bred for War',
      },
    ],
    tags: ['shoanti', 'intimidate', 'cmb', 'combat', 'size'],
  },

  // Garundi
  {
    id: 'ever_home_ig',
    name: 'Ever Home',
    description:
      'You have spent many years living in multiple cities along the northern Garundi coastline, collecting mementos from each place you have left behind. This broad exposure has sharpened your awareness of local customs and geography. You gain a +1 trait bonus on Knowledge (geography) and Sleight of Hand checks.',
    shortDescription: '+1 Knowledge (geography) and Sleight of Hand.',
    source: 'Pathfinder Player Companion: Humans of Golarion',
    category: 'race',
    subcategory: 'Garundi',
    prerequisites: [{ type: 'race', raceName: 'Human (Garundi)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_geography',
        value: 1,
        source: 'Ever Home',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sleight_of_hand',
        value: 1,
        source: 'Ever Home',
      },
    ],
    tags: ['garundi', 'knowledge geography', 'sleight of hand', 'travel'],
  },

  // Chelaxian
  {
    id: 'glib_barrister_ig',
    name: 'Glib Barrister',
    description:
      'You grew up in Cheliax, a land where legal contracts rule every interaction. Despite growing up within rigid legal structures, you developed an aptitude for exploiting loopholes in seemingly airtight contracts. You gain a +2 trait bonus on Linguistics checks to create forgeries.',
    shortDescription: '+2 trait bonus on Linguistics checks to create forgeries.',
    source: 'Pathfinder Player Companion: Humans of Golarion',
    category: 'race',
    subcategory: 'Chelaxian',
    prerequisites: [{ type: 'race', raceName: 'Human (Chelaxian)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.linguistics',
        value: 2,
        source: 'Glib Barrister',
      },
    ],
    tags: ['chelaxian', 'linguistics', 'forgery', 'legal'],
  },

  // Varisian
  {
    id: 'harrow_born_ig',
    name: 'Harrow Born',
    description:
      'You grew up around the mysterious fortune-tellers known throughout Ustalav and Varisia. You start play with a harrow deck passed down from a relative. Because of your skill with fortune-telling, you gain a +1 trait bonus on initiative checks.',
    shortDescription: '+1 trait bonus on initiative checks; begin play with a harrow deck.',
    source: 'Pathfinder Player Companion: Humans of Golarion',
    category: 'race',
    subcategory: 'Varisian',
    prerequisites: [{ type: 'race', raceName: 'Human (Varisian)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'combat.initiative',
        value: 1,
        source: 'Harrow Born',
      },
    ],
    tags: ['varisian', 'initiative', 'fortune-telling', 'harrow'],
  },

  // Keleshite
  {
    id: 'horse_lord_ig',
    name: 'Horse Lord',
    description:
      'You grew up horse racing along the plains of Paresh, dreaming of competing in the legendary Histaqen competition. You gain a +2 trait bonus on Handle Animal checks and a +1 trait bonus on Ride checks. Both bonuses apply only to horses.',
    shortDescription: '+2 Handle Animal and +1 Ride, for horses only.',
    source: 'Pathfinder Player Companion: Humans of Golarion',
    category: 'race',
    subcategory: 'Keleshite',
    prerequisites: [{ type: 'race', raceName: 'Human (Keleshite)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.handle_animal',
        value: 2,
        source: 'Horse Lord',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.ride',
        value: 1,
        source: 'Horse Lord',
      },
    ],
    tags: ['keleshite', 'handle animal', 'ride', 'horse', 'mount'],
  },

  // Kellid
  {
    id: 'ice_walker_ig',
    name: 'Ice Walker',
    description:
      'You grew up in the frozen north, where walking on ice is a daily necessity. You gain a +1 trait bonus on saving throws against attacks that deal cold damage. You ignore Acrobatics skill penalties for walking on icy surfaces and can move across ice at your normal speed.',
    shortDescription:
      '+1 save vs. cold; ignore Acrobatics penalties on ice; move at normal speed on ice.',
    source: 'Pathfinder Player Companion: Humans of Golarion',
    category: 'race',
    subcategory: 'Kellid',
    prerequisites: [{ type: 'race', raceName: 'Human (Kellid)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'saving_throw.cold',
        value: 1,
        source: 'Ice Walker',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'movement.ice_terrain',
        value: 0,
        source: 'Ice Walker',
      },
    ],
    tags: ['kellid', 'cold', 'ice', 'acrobatics', 'movement'],
  },

  // Tian
  {
    id: 'keeper_of_ancestral_scrolls_ig',
    name: 'Keeper of the Ancestral Scrolls',
    description:
      'You take pride in recording the genealogy of your family, tracing your heritage on large scrolls dating back hundreds, if not thousands of years. You gain a +1 trait bonus on Knowledge (history) and Knowledge (nobility) checks, and one of these skills (your choice) is always a class skill for you.',
    shortDescription: '+1 Knowledge (history) and Knowledge (nobility); one becomes a class skill.',
    source: 'Pathfinder Player Companion: Humans of Golarion',
    category: 'race',
    subcategory: 'Tian',
    prerequisites: [{ type: 'race', raceName: 'Human (Tian)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_history',
        value: 1,
        source: 'Keeper of the Ancestral Scrolls',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nobility',
        value: 1,
        source: 'Keeper of the Ancestral Scrolls',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.knowledge_choice',
        value: 0,
        source: 'Keeper of the Ancestral Scrolls',
      },
    ],
    tags: ['tian', 'knowledge history', 'knowledge nobility', 'genealogy'],
  },

  // Keleshite
  {
    id: 'market_rat_ig',
    name: 'Market Rat',
    description:
      'You come from a family of merchants, or you dwelt amid the many booths of a market, begging to survive. Either way, you know how to identify value and navigate local social customs. You gain a +1 trait bonus on Appraise and Knowledge (local) checks.',
    shortDescription: '+1 trait bonus on Appraise and Knowledge (local) checks.',
    source: 'Pathfinder Player Companion: Humans of Golarion',
    category: 'race',
    subcategory: 'Keleshite',
    prerequisites: [{ type: 'race', raceName: 'Human (Keleshite)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.appraise',
        value: 1,
        source: 'Market Rat',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_local',
        value: 1,
        source: 'Market Rat',
      },
    ],
    tags: ['keleshite', 'appraise', 'knowledge local', 'merchant'],
  },

  // Tian
  {
    id: 'master_of_the_sudden_strike_ig',
    name: 'Master of the Sudden Strike',
    description:
      "You have trained in your people's lethal blade techniques, focusing on the decisive first strike. When you wield a masterwork version of any sword and act before your opponent during the surprise round, you gain a +2 trait bonus on weapon damage rolls for the surprise round only. This additional damage is precision damage.",
    shortDescription: '+2 damage with masterwork swords in the surprise round when acting first.',
    source: 'Pathfinder Player Companion: Humans of Golarion',
    category: 'race',
    subcategory: 'Tian',
    prerequisites: [{ type: 'race', raceName: 'Human (Tian)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.surprise_round',
        value: 2,
        source: 'Master of the Sudden Strike',
      },
    ],
    tags: ['tian', 'damage', 'surprise round', 'sword', 'precision'],
  },

  // Vudrani
  {
    id: 'open_palm_of_irori_ig',
    name: 'Open Palm of Irori',
    description:
      'You have studied the martial philosophy of Irori as practiced by Vudrani warriors and monks. You gain a +1 trait bonus on Acrobatics and Knowledge (religion) checks. Once per day as a swift action, if you possess a ki pool, you may channel your ki during an unarmed strike to gain a +2 trait bonus on one damage roll; this additional damage is precision damage.',
    shortDescription:
      '+1 Acrobatics and Knowledge (religion); once/day channel ki for +2 unarmed damage (precision).',
    source: 'Pathfinder Player Companion: Humans of Golarion',
    category: 'race',
    subcategory: 'Vudrani',
    prerequisites: [{ type: 'race', raceName: 'Human (Vudrani)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.acrobatics',
        value: 1,
        source: 'Open Palm of Irori',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_religion',
        value: 1,
        source: 'Open Palm of Irori',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'damage.ki_unarmed',
        value: 2,
        source: 'Open Palm of Irori',
      },
    ],
    tags: ['vudrani', 'acrobatics', 'knowledge religion', 'ki', 'monk', 'unarmed'],
  },

  // Chelaxian
  {
    id: 'operatic_ig',
    name: 'Operatic',
    description:
      'You were raised amid the grandeur of Chelish opera and devoted extensive effort to vocal training. You gain a +1 trait bonus on Perform (sing) checks. Having memorized many great works sung in ancient Azlanti, you gain a +2 trait bonus on Linguistics checks when trying to decipher the ancient Azlanti language.',
    shortDescription: '+1 Perform (sing); +2 Linguistics to decipher the Azlanti language.',
    source: 'Pathfinder Player Companion: Humans of Golarion',
    category: 'race',
    subcategory: 'Chelaxian',
    prerequisites: [{ type: 'race', raceName: 'Human (Chelaxian)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perform_sing',
        value: 1,
        source: 'Operatic',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.linguistics',
        value: 2,
        source: 'Operatic',
      },
    ],
    tags: ['chelaxian', 'perform', 'linguistics', 'azlanti', 'opera'],
  },

  // Ulfen
  {
    id: 'shield_bearer_ig',
    name: 'Shield Bearer',
    description:
      'You have survived many battles thanks to your skill with a shield, and you have learned to use it to protect those fighting beside you. Your shield bash attacks deal 1 additional point of damage. Once per day as a free action on your turn, while wielding a shield, you may grant one adjacent ally a +2 trait bonus to AC for 1 round, as long as you both remain adjacent.',
    shortDescription: '+1 shield bash damage; once/day grant adjacent ally +2 AC for 1 round.',
    source: 'Pathfinder Player Companion: Humans of Golarion',
    category: 'race',
    subcategory: 'Ulfen',
    prerequisites: [{ type: 'race', raceName: 'Human (Ulfen)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.shield_bash',
        value: 1,
        source: 'Shield Bearer',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'combat.ally_ac_buff',
        value: 2,
        source: 'Shield Bearer',
      },
    ],
    tags: ['ulfen', 'shield', 'damage', 'combat', 'support'],
  },

  // Varisian
  {
    id: 'stargazer_ig_hog',
    name: 'Stargazer',
    description:
      "You spent many years wandering the roads of Varisia and beyond, and during clear nights, you took to tracking the celestial bodies that adorn Golarion's skies. You gain a +1 trait bonus on Knowledge (geography) and Survival checks.",
    shortDescription: '+1 Knowledge (geography) and Survival.',
    source: 'Pathfinder Player Companion: Humans of Golarion',
    category: 'race',
    subcategory: 'Varisian',
    prerequisites: [{ type: 'race', raceName: 'Human (Varisian)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_geography',
        value: 1,
        source: 'Stargazer',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Stargazer',
      },
    ],
    tags: ['varisian', 'knowledge geography', 'survival', 'navigation'],
  },

  // Mwangi
  {
    id: 'student_of_nantambu_ig',
    name: 'Student of Nantambu',
    description:
      'You received training at Magaambya, the legendary magical academy in the Mwangi city of Nantambu. You gain a +1 trait bonus on Knowledge (arcana) and Spellcraft checks, and you may make these checks untrained.',
    shortDescription: '+1 Knowledge (arcana) and Spellcraft; may use both untrained.',
    source: 'Pathfinder Player Companion: Humans of Golarion',
    category: 'race',
    subcategory: 'Mwangi',
    prerequisites: [{ type: 'race', raceName: 'Human (Mwangi)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_arcana',
        value: 1,
        source: 'Student of Nantambu',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.spellcraft',
        value: 1,
        source: 'Student of Nantambu',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'skill.untrained_knowledge_spellcraft',
        value: 0,
        source: 'Student of Nantambu',
      },
    ],
    tags: ['mwangi', 'knowledge arcana', 'spellcraft', 'magic', 'untrained'],
  },

  // Kellid
  {
    id: 'superstitious_ig',
    name: 'Superstitious',
    description:
      "You have a healthy fear of sorcerers' speech and wizards' words that has helped you survive their charms. You gain a +1 trait bonus on saving throws against arcane spells.",
    shortDescription: '+1 trait bonus on saving throws against arcane spells.',
    source: 'Pathfinder Player Companion: Humans of Golarion',
    category: 'race',
    subcategory: 'Kellid',
    prerequisites: [{ type: 'race', raceName: 'Human (Kellid)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'saving_throw.vs_arcane',
        value: 1,
        source: 'Superstitious',
      },
    ],
    tags: ['kellid', 'saving throw', 'arcane', 'magic'],
  },

  // Mwangi
  {
    id: 'trailblazer_ig',
    name: 'Trailblazer',
    description:
      'Your ability to endure in the darkest jungles has earned you a reputation as a novice guide. While traversing any wilderness, you gain a +1 trait bonus on Survival checks, and you gain a +1 trait bonus on Fortitude saving throws against diseases.',
    shortDescription: '+1 Survival in wilderness; +1 Fortitude vs. diseases.',
    source: 'Pathfinder Player Companion: Humans of Golarion',
    category: 'race',
    subcategory: 'Mwangi',
    prerequisites: [{ type: 'race', raceName: 'Human (Mwangi)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Trailblazer',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'saving_throw.fort_disease',
        value: 1,
        source: 'Trailblazer',
      },
    ],
    tags: ['mwangi', 'survival', 'fortitude', 'disease', 'wilderness'],
  },

  // Vudrani
  {
    id: 'voice_of_velvet_ig',
    name: 'Voice of Velvet',
    description:
      'Your Vudrani upbringing has given you a natural gift for persuasion and performance. You gain a +1 trait bonus on Diplomacy and Perform (oratory) checks.',
    shortDescription: '+1 Diplomacy and Perform (oratory).',
    source: 'Pathfinder Player Companion: Humans of Golarion',
    category: 'race',
    subcategory: 'Vudrani',
    prerequisites: [{ type: 'race', raceName: 'Human (Vudrani)' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Voice of Velvet',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perform_oratory',
        value: 1,
        source: 'Voice of Velvet',
      },
    ],
    tags: ['vudrani', 'diplomacy', 'perform', 'social'],
  },
];

// CHECKPOINT: last_written=voice_of_velvet_ig, written=18/18, status=complete Humans of Golarion
// NOTE: People of the Sands regional traits not yet included — to be added as a follow-up scrape.
