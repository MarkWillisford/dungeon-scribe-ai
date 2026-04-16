import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

// Demon Hunter's Handbook (7), Undead Slayer's Handbook (7), Champions of Balance (7), People of the Stars (7)

export const TIER3_BATCH3_FEATS: FeatDefinition[] = [
  // ─── Demon Hunter's Handbook ──────────────────────────────────────────────────
  {
    id: 'coordinated_distraction_dhh',
    name: 'Coordinated Distraction',
    description:
      'When you and at least one ally with this feat threaten the same enemy, the enemy treats the DC to cast spells defensively as 2 higher for each threatening character with this feat. Does not apply if you or allies cannot take AoOs against the target.',
    shortDescription: '+2 defensive casting DC per ally with this feat threatening the same foe.',
    source: "Pathfinder Player Companion: Demon Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'teamwork'],
    prerequisites: [],
    effects: [
      {
        type: 'special',
        value: 2,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Coordinated Distraction',
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'concentration', 'anti-caster', 'demon'],
  },
  {
    id: 'demonic_nemesis',
    name: 'Demonic Nemesis',
    description:
      'Choose a specific demon lord. You gain a +2 bonus on damage rolls and crit confirmation rolls against followers of that demon lord, including cultists and demonic entities. Can be taken multiple times for different demon lords.',
    shortDescription: '+2 damage and crit confirm vs. followers of a chosen demon lord.',
    source: "Pathfinder Player Companion: Demon Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'demon_hunter' },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 6 },
    ],
    effects: [
      {
        type: 'damage',
        target: 'special.demon_lord_followers',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Demonic Nemesis',
      },
    ],
    activationMode: 'passive',
    tags: ['demon', 'demon lord', 'favored enemy', 'critical hit'],
  },
  {
    id: 'exorcists_rebuttal',
    name: "Exorcist's Rebuttal",
    description:
      'If you use Improved Iron Will to reroll a Will save against a compulsion effect and succeed, the creature that created the effect takes 1d4 Wisdom damage.',
    shortDescription: 'Successful Iron Will reroll vs. compulsion deals 1d4 WIS damage to source.',
    source: "Pathfinder Player Companion: Demon Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_iron_will' },
      { type: 'feat', featId: 'iron_will' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: "Exorcist's Rebuttal",
      },
    ],
    activationMode: 'conditional',
    tags: ['compulsion', 'will save', 'wisdom damage', 'demon'],
  },
  {
    id: 'outer_planes_traveler',
    name: 'Outer Planes Traveler',
    description:
      'Choose one plane within one alignment step of yours. You gain a +2 bonus on saves against spells with the associated descriptor and cast spells with that descriptor at +1 caster level.',
    shortDescription: "+2 saves and +1 CL for spells matching a chosen plane's descriptor.",
    source: "Pathfinder Player Companion: Demon Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_planes', ranks: 11 },
      { type: 'special', description: 'Ability to cast plane shift or gate' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'special.planar_descriptor',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Outer Planes Traveler',
      },
    ],
    activationMode: 'passive',
    tags: ['planar', 'caster level', 'saving throw', 'descriptor'],
  },
  {
    id: 'punch_through_dhh',
    name: 'Punch Through',
    description:
      'As a full-round action, make a single attack. If it hits and deals damage, all allies with this feat ignore up to 5 points of DR against the same target for 1 round. Does not apply to DR without a type (DR X/—).',
    shortDescription: 'Single attack lets allies ignore 5 DR against that target for 1 round.',
    source: "Pathfinder Player Companion: Demon Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat', 'teamwork'],
    prerequisites: [{ type: 'bab', minimum: 6 }],
    effects: [
      {
        type: 'special',
        value: 5,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Punch Through',
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'damage reduction', 'demon', 'support'],
  },
  {
    id: 'spell_chain_dhh',
    name: 'Spell Chain',
    description:
      "When you succeed at a caster level check to overcome SR, the next ally with this feat who attempts to overcome the same target's SR within 1 round can roll twice and take the better result.",
    shortDescription:
      'Successful SR penetration lets next ally with this feat roll twice vs. same target.',
    source: "Pathfinder Player Companion: Demon Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['teamwork'],
    prerequisites: [{ type: 'feat', featId: 'spell_penetration' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Spell Chain',
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'spell resistance', 'spell penetration', 'demon'],
  },
  {
    id: 'vengeful_banisher',
    name: 'Vengeful Banisher',
    description:
      'You gain a +2 bonus on saves against spells/effects from demon worshipers and demon-type creatures. When a demon reduces you below 0 HP, righteous energy may dismiss it (as dismissal, Will negates). Usable 1/day; requires healing to full HP before reuse.',
    shortDescription: '+2 saves vs. demons; auto-dismissal when a demon drops you below 0 HP.',
    source: "Pathfinder Player Companion: Demon Hunter's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['story'],
    prerequisites: [
      {
        type: 'special',
        description:
          'Witnessed a family member or close friend killed by demons or demonic cultists, or possess Hated Foe or An Eye for an Eye background',
      },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'special.demon',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Vengeful Banisher',
      },
    ],
    activationMode: 'conditional',
    tags: ['story', 'demon', 'dismissal', 'saving throw'],
  },

  // ─── Undead Slayer's Handbook ─────────────────────────────────────────────────
  {
    id: 'align_equipment',
    name: 'Align Equipment',
    description:
      'In addition to Bless Equipment blessings, you can imbue weapons, shields, and armor with aligned properties using channel energy, with specific alignment requirements tied to your Alignment Channel ability.',
    shortDescription: 'Imbue equipment with aligned properties via channel energy.',
    source: "Pathfinder Player Companion: Undead Slayer's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'alignment_channel' },
      { type: 'feat', featId: 'bless_equipment_ush' },
      { type: 'caster_level', minimum: 3 },
      { type: 'class_feature', featureName: 'channel energy' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Align Equipment',
      },
    ],
    activationMode: 'conditional',
    tags: ['channel energy', 'alignment', 'equipment', 'undead'],
  },
  {
    id: 'bless_equipment_ush',
    name: 'Bless Equipment',
    description:
      'As a standard action, expend channel energy uses to touch a weapon, armor, or shield and temporarily grant it a special ability (bane, ghost touch, disruption, lifesurge, nullifying, deathless, stanching, undead-controlling). Lasts rounds equal to channel energy dice. Masterwork items require an extra use but gain +1 enhancement.',
    shortDescription:
      'Channel energy to temporarily enchant weapons/armor with anti-undead properties.',
    source: "Pathfinder Player Companion: Undead Slayer's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'caster_level', minimum: 3 },
      { type: 'class_feature', featureName: 'channel energy' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Bless Equipment',
      },
    ],
    activationMode: 'conditional',
    tags: ['channel energy', 'equipment', 'enchantment', 'undead'],
  },
  {
    id: 'greater_bless_equipment',
    name: 'Greater Bless Equipment',
    description:
      'The duration of your equipment blessings doubles. As a standard action you may bless up to two pieces of equipment within range with a single blessing, expending channel energy as if you blessed only one item.',
    shortDescription: 'Double blessing duration; bless two items for the cost of one.',
    source: "Pathfinder Player Companion: Undead Slayer's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'bless_equipment_ush' },
      { type: 'feat', featId: 'improved_bless_equipment' },
      { type: 'caster_level', minimum: 12 },
      { type: 'class_feature', featureName: 'channel energy' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Greater Bless Equipment',
      },
    ],
    activationMode: 'conditional',
    tags: ['channel energy', 'equipment', 'undead', 'duration'],
  },
  {
    id: 'holy_water_assault',
    name: 'Holy Water Assault',
    description:
      'Gain access to six holy water combat techniques: Blinding Water (blind undead), Concentrate Holy Water (combine vials for more damage), Healing Glyph (substitute for diamonds), Healing Water (+4 Heal, 1/day self-heal 1d8), Holy Circle (replace silver components), Holy Water Splash (+1 splash damage within 30 ft).',
    shortDescription: 'Unlock six specialized holy water combat techniques.',
    source: "Pathfinder Player Companion: Undead Slayer's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 1 },
      { type: 'skill', skillId: 'knowledge_religion', ranks: 3 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Holy Water Assault',
      },
    ],
    activationMode: 'conditional',
    tags: ['holy water', 'undead', 'combat', 'healing'],
  },
  {
    id: 'improved_bless_equipment',
    name: 'Improved Bless Equipment',
    description:
      'Reduce channel energy cost for blessings by one use (minimum one). You can bless a single item with up to two different special abilities simultaneously from the Bless Equipment or Align Equipment lists.',
    shortDescription: 'Reduced blessing cost; stack two blessings on one item.',
    source: "Pathfinder Player Companion: Undead Slayer's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'bless_equipment_ush' },
      { type: 'caster_level', minimum: 9 },
      { type: 'class_feature', featureName: 'channel energy' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Improved Bless Equipment',
      },
    ],
    activationMode: 'conditional',
    tags: ['channel energy', 'equipment', 'undead', 'cost reduction'],
  },
  {
    id: 'lingering_smite',
    name: 'Lingering Smite',
    description:
      "Channel Smite damage is delivered over time instead of immediately. Starting on the target's next turn, it takes 1d8 damage each round at the start of its turn. Duration equals your channel energy dice. Will save each round negates that round's damage. Multiple uses reset duration.",
    shortDescription: 'Channel Smite deals 1d8/round damage over time instead of all at once.',
    source: "Pathfinder Player Companion: Undead Slayer's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'channel_smite' },
      { type: 'special', description: 'Channel energy 3d6' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Lingering Smite',
      },
    ],
    activationMode: 'conditional',
    tags: ['channel smite', 'channel energy', 'undead', 'damage over time'],
  },
  {
    id: 'weapon_versatility',
    name: 'Weapon Versatility',
    description:
      "When wielding a weapon with Weapon Focus, you can shift your grip as a swift action to deal bludgeoning, piercing, or slashing damage instead of the weapon's normal type. At BAB +5, this becomes a free action.",
    shortDescription: 'Swift action to change damage type of a Weapon Focus weapon.',
    source: "Pathfinder Player Companion: Undead Slayer's Handbook",
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Weapon Versatility',
      },
    ],
    activationMode: 'conditional',
    tags: ['damage type', 'weapon focus', 'versatile', 'undead', 'DR'],
  },

  // ─── Champions of Balance ─────────────────────────────────────────────────────
  {
    id: 'crisis_of_conscience',
    name: 'Crisis of Conscience',
    description:
      'You gain a +2 bonus on opposed skill checks and Will saves when others try to discern your alignment, loyalties, or intentions. Upon completing the story goal (decisive act of good or evil), gain interaction bonuses with creatures of your previous alignment (+4 if success would cause them to act against theirs).',
    shortDescription: '+2 vs. alignment detection; story bonuses for alignment-shifting acts.',
    source: 'Pathfinder Player Companion: Champions of Balance',
    verificationStatus: 'needs_review' as const,
    types: ['story'],
    prerequisites: [
      {
        type: 'special',
        description: 'LN, N, or CN alignment; must have shifted from good or evil at least once',
      },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'special.will',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Crisis of Conscience',
      },
    ],
    activationMode: 'passive',
    tags: ['story', 'alignment', 'neutral', 'social'],
  },
  {
    id: 'fabulist',
    name: 'Fabulist',
    description:
      'You gain a +1 bonus on Perform (act, comedy, oratory, sing) checks; Perform is a class skill. Each time you make a successful Bluff check to convince someone of a far-fetched or impossible story, regain 1 grit point. Does not work on friendly/helpful creatures or those with fewer than half your HD.',
    shortDescription: '+1 Perform; regain grit from convincing far-fetched Bluff checks.',
    source: 'Pathfinder Player Companion: Champions of Balance',
    verificationStatus: 'needs_review' as const,
    types: ['grit'],
    prerequisites: [
      { type: 'special', description: 'Amateur Gunslinger feat or grit class feature' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'special.perform',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Fabulist',
      },
    ],
    activationMode: 'passive',
    tags: ['grit', 'gunslinger', 'bluff', 'perform', 'storytelling'],
  },
  {
    id: 'gun_twirling',
    name: 'Gun Twirling',
    description:
      'You may expend 1 grit point to feint with a one-handed firearm (Weapon Focus required) against enemies within 30 ft who can see you. With Quick Draw, you can holster a one-handed firearm as a free action while you have at least 1 grit.',
    shortDescription: 'Spend grit to ranged feint with firearm; free holster with Quick Draw.',
    source: 'Pathfinder Player Companion: Champions of Balance',
    verificationStatus: 'needs_review' as const,
    types: ['grit'],
    prerequisites: [
      { type: 'special', description: 'Amateur Gunslinger or grit class feature' },
      { type: 'feat', featId: 'dazzling_display' },
      { type: 'feat', featId: 'weapon_focus' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Gun Twirling',
      },
    ],
    activationMode: 'conditional',
    tags: ['grit', 'gunslinger', 'feint', 'firearm', 'holster'],
  },
  {
    id: 'named_bullet_cb',
    name: 'Named Bullet',
    description:
      "You can craft ammunition inscribed with a specific target's name, granting it the bane weapon special ability against that creature only. Using it against other targets incurs -2. Crafting costs 1 grit point and temporarily reduces max grit until fired or destroyed.",
    shortDescription: 'Craft bane ammunition against a named target; costs 1 grit.',
    source: 'Pathfinder Player Companion: Champions of Balance',
    verificationStatus: 'needs_review' as const,
    types: ['grit'],
    prerequisites: [
      { type: 'special', description: 'Amateur Gunslinger or grit class feature' },
      { type: 'feat', featId: 'gunsmithing' },
      { type: 'bab', minimum: 5 },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Named Bullet',
      },
    ],
    activationMode: 'conditional',
    tags: ['grit', 'gunslinger', 'bane', 'crafting', 'ammunition'],
  },
  {
    id: 'planar_hunter',
    name: 'Planar Hunter',
    description:
      'In a favored terrain plane, gain +2 on weapon attack rolls against native outsiders and ignore up to 5 DR (except DR X/—). Also applies to extraplanar creatures you identify as being from your favored terrain plane. Can be taken multiple times for different planes.',
    shortDescription: '+2 attack and ignore 5 DR vs. outsiders in favored terrain planes.',
    source: 'Pathfinder Player Companion: Champions of Balance',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'knowledge_planes', ranks: 5 },
      { type: 'class_feature', featureName: 'favored terrain' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'special.outsiders',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Planar Hunter',
      },
    ],
    activationMode: 'conditional',
    tags: ['ranger', 'favored terrain', 'outsider', 'planar', 'DR'],
  },
  {
    id: 'practiced_leadership',
    name: 'Practiced Leadership',
    description:
      'When you and your cohort belong to the same organization, your cohort gains a +4 morale bonus on Will saves vs. enchantment. Your cohort is treated as having your teamwork feats for determining your bonuses (but only gains bonuses from feats they actually possess).',
    shortDescription: 'Cohort gets +4 Will vs. enchantment; counts as having your teamwork feats.',
    source: 'Pathfinder Player Companion: Champions of Balance',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'leadership' },
      { type: 'special', description: 'Same organization as your cohort' },
    ],
    effects: [
      {
        type: 'special',
        value: 4,
        bonusType: BonusType.MORALE,
        target: 'special.cohort_will',
        source: 'Practiced Leadership',
      },
    ],
    activationMode: 'passive',
    tags: ['leadership', 'cohort', 'teamwork', 'organization'],
  },
  {
    id: 'summon_neutral_monster',
    name: 'Summon Neutral Monster',
    description:
      'You can summon neutral creatures from a special list when casting summon monster spells. Summoned creatures can use the counterpoised creature template instead of celestial or fiendish. All neutral summoned creatures gain a +2 resistance bonus on Will saves.',
    shortDescription: 'Access neutral creature summon list with counterpoised template.',
    source: 'Pathfinder Player Companion: Champions of Balance',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Chaotic neutral, lawful neutral, or neutral alignment' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Summon Neutral Monster',
      },
    ],
    activationMode: 'conditional',
    tags: ['summoning', 'neutral', 'counterpoised', 'alignment'],
  },

  // ─── People of the Stars ──────────────────────────────────────────────────────
  {
    id: 'astrological_timing',
    name: 'Astrological Timing',
    description:
      'When using a cosmogram or star chart as a focus for augury, the divination extends to 1 hour ahead with +4% success rate. Using specialized orreries extends to 1 full day with +8% success.',
    shortDescription: 'Extend augury range and accuracy with star charts/orreries.',
    source: 'Pathfinder Player Companion: People of the Stars',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Ability to cast augury' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Astrological Timing',
      },
    ],
    activationMode: 'conditional',
    tags: ['divination', 'augury', 'astrology', 'stars'],
  },
  {
    id: 'celestial_guidance',
    name: 'Celestial Guidance',
    description:
      'You gain a +2 bonus on Knowledge (geography) checks about stars or planets. At night with clear skies, you cannot get lost. Once per night when stars are visible, you can reroll a failed Knowledge check from earlier that day (or substitute Knowledge (geography)).',
    shortDescription:
      "+2 Knowledge (geography) for stars; can't get lost at night; 1/night Knowledge reroll.",
    source: 'Pathfinder Player Companion: People of the Stars',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        target: 'special.knowledge_geography',
        value: 2,
        bonusType: BonusType.UNTYPED,
        source: 'Celestial Guidance',
      },
    ],
    activationMode: 'passive',
    tags: ['navigation', 'stars', 'knowledge', 'reroll'],
  },
  {
    id: 'empathy_android',
    name: 'Empathy',
    description:
      'You lose the emotionless special quality. You can gain morale bonuses, and can be affected by emotion-based effects and fear effects.',
    shortDescription: 'Remove android emotionless trait to gain morale bonuses and feel emotions.',
    source: 'Pathfinder Player Companion: People of the Stars',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'race', raceName: 'Android' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Empathy',
      },
    ],
    activationMode: 'passive',
    tags: ['android', 'racial', 'emotion', 'morale'],
  },
  {
    id: 'extra_surge',
    name: 'Extra Surge',
    description:
      'You can use your nanite surge ability one additional time per day. Can be taken multiple times; effects stack.',
    shortDescription: '+1 daily use of nanite surge (stackable).',
    source: 'Pathfinder Player Companion: People of the Stars',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'special', description: 'Nanite surge racial ability' },
    ],
    effects: [
      {
        type: 'special',
        value: 1,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Extra Surge',
      },
    ],
    activationMode: 'passive',
    tags: ['android', 'nanite', 'surge', 'extra use'],
  },
  {
    id: 'nanite_disruption',
    name: 'Nanite Disruption',
    description:
      'When adjacent to an android, robot, or electronic creature, expend nanite surge as an immediate action. Make a melee touch attack; if it hits and the target fails a Will save (DC 10 + 1/2 level + 1/2 CON mod), they take a penalty equal to 1 + half your level on their next d20 roll.',
    shortDescription: "Expend nanite surge to penalize an adjacent android/robot's next d20 roll.",
    source: 'Pathfinder Player Companion: People of the Stars',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Nanite surge racial trait' }],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Nanite Disruption',
      },
    ],
    activationMode: 'conditional',
    tags: ['android', 'nanite', 'robot', 'debuff', 'technology'],
  },
  {
    id: 'rapid_repair',
    name: 'Rapid Repair',
    description:
      'You can use your nanite surge ability to restore hit points equal to your character level, rather than its standard effects.',
    shortDescription: 'Use nanite surge to heal HP equal to character level.',
    source: 'Pathfinder Player Companion: People of the Stars',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'special', description: 'Nanite surge racial ability' },
    ],
    effects: [
      {
        type: 'bonus',
        target: 'hp.healing',
        value: 1,
        bonusType: BonusType.UNTYPED,
        source: 'Rapid Repair',
      },
    ],
    activationMode: 'conditional',
    tags: ['android', 'nanite', 'healing', 'self-repair'],
  },
  {
    id: 'rapid_recovery',
    name: 'Rapid Recovery',
    description:
      'When you heal damage using Rapid Repair, you also remove any of the following conditions: blinded, confused, dazzled, deafened, shaken, sickened, and staggered. Cannot cure blindness or deafness from loss of sensory organs.',
    shortDescription: 'Rapid Repair also removes multiple conditions.',
    source: 'Pathfinder Player Companion: People of the Stars',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'rapid_repair' },
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'special', description: 'Nanite surge racial ability' },
    ],
    effects: [
      {
        type: 'special',
        value: 0,
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        source: 'Rapid Recovery',
      },
    ],
    activationMode: 'conditional',
    tags: ['android', 'nanite', 'condition removal', 'healing'],
  },
];
