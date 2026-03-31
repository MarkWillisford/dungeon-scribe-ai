import type { FeatDefinition } from '@/types/feats';
import { BonusType } from '@/types/base';

// Bastards of Golarion (8), Heroes of the Darklands (8, have 2→6 new), Rival Guide (8, have 3→4 new+1 monster skip), People of the River (7)

export const TIER3_BATCH2_FEATS: FeatDefinition[] = [
  // ─── Bastards of Golarion ────────────────────────────────────────────────────
  {
    id: 'betraying_blow',
    name: 'Betraying Blow',
    description:
      "When dealing nonlethal melee damage to a creature only you threaten, make a Bluff check opposed by the target's Sense Motive. You deal extra nonlethal damage equal to half the difference (minimum 0). If the target is friendly or helpful, the extra damage equals the full difference. Max extra damage cannot exceed your HD.",
    shortDescription: 'Bluff for extra nonlethal damage vs. a foe only you threaten.',
    source: 'Pathfinder Player Companion: Bastards of Golarion',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'solo_maneuvers' },
      { type: 'bab', minimum: 8 },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Betraying Blow' }],
    activationMode: 'conditional',
    tags: ['bluff', 'nonlethal', 'solo', 'deception'],
  },
  {
    id: 'dirty_trick_master',
    name: 'Dirty Trick Master',
    description:
      'When you successfully dirty trick an opponent already affected by a dirty trick condition, you can worsen it: dazzled→dazed, entangled→pinned, shaken→frightened, sickened→nauseated. The worsened condition replaces the previous one and lasts for the dirty trick duration or until removed with a standard action.',
    shortDescription: 'Escalate dirty trick conditions to worse versions.',
    source: 'Pathfinder Player Companion: Bastards of Golarion',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'greater_dirty_trick' },
      { type: 'feat', featId: 'improved_dirty_trick' },
      { type: 'bab', minimum: 11 },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Dirty Trick Master' }],
    activationMode: 'conditional',
    tags: ['dirty trick', 'combat maneuver', 'debuff', 'escalation'],
  },
  {
    id: 'divert_harm',
    name: 'Divert Harm',
    description:
      'When targeted by an AoE requiring a Reflex save, use an immediate action to force an adjacent enemy (within one size category) to save instead. If they fail, they take half damage and you avoid damage. If they succeed, you take full damage as if you failed.',
    shortDescription: 'Redirect AoE Reflex saves to an adjacent enemy.',
    source: 'Pathfinder Player Companion: Bastards of Golarion',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'bab', minimum: 6 },
      { type: 'class_feature', featureName: 'evasion' },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Divert Harm' }],
    activationMode: 'conditional',
    tags: ['evasion', 'redirect', 'reflex', 'area of effect'],
  },
  {
    id: 'solo_maneuvers',
    name: 'Solo Maneuvers',
    description:
      'Whenever you are the only one threatening an opponent, you gain a +1 bonus on combat maneuvers against that creature and a +1 bonus to CMD against combat maneuvers made by that creature.',
    shortDescription: '+1 CMB and CMD when you\'re the only one threatening a foe.',
    source: 'Pathfinder Player Companion: Bastards of Golarion',
    types: ['combat'],
    prerequisites: [],
    effects: [
      { type: 'special', value: 1, bonusType: BonusType.UNTYPED, target: 'cmb', source: 'Solo Maneuvers' },
    ],
    activationMode: 'conditional',
    tags: ['combat maneuver', 'solo', 'CMB', 'CMD'],
  },
  {
    id: 'unusual_origin_changeling',
    name: 'Unusual Origin (Changeling)',
    description:
      'When within 30 feet of at least two other changelings, you gain a +2 bonus on concentration and dispel checks. If at least two of those changelings also have this feat, bonuses increase to +4.',
    shortDescription: '+2 concentration/dispel near other changelings (+4 if they have this feat).',
    source: 'Pathfinder Player Companion: Bastards of Golarion',
    types: ['teamwork'],
    prerequisites: [{ type: 'race', raceName: 'Changeling' }],
    effects: [{ type: 'special', value: 2, bonusType: BonusType.UNTYPED, target: 'concentration', source: 'Unusual Origin (Changeling)' }],
    activationMode: 'conditional',
    tags: ['changeling', 'racial', 'teamwork', 'concentration'],
  },
  {
    id: 'unusual_origin_dhampir',
    name: 'Unusual Origin (Dhampir)',
    description:
      'You gain a natural bite attack dealing 1d4 damage. Once per day upon a successful bite attack, you can deal an additional 1d4 bleed damage. This feat may only be selected at 1st level.',
    shortDescription: 'Gain 1d4 bite attack; 1/day add 1d4 bleed on bite. 1st level only.',
    source: 'Pathfinder Player Companion: Bastards of Golarion',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'Dhampir' }],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'natural_attack', source: 'Unusual Origin (Dhampir)' }],
    activationMode: 'passive',
    tags: ['dhampir', 'racial', 'bite', 'natural attack', 'bleed'],
  },
  {
    id: 'unusual_origin_fetchling',
    name: 'Unusual Origin (Fetchling)',
    description:
      'Once per day while sleeping, you can create a magical sensor (as arcane eye) that views your current location as it exists on the Shadow Plane. This lasts 1 minute per character level.',
    shortDescription: 'See the Shadow Plane version of your location while sleeping 1/day.',
    source: 'Pathfinder Player Companion: Bastards of Golarion',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'Fetchling' }],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Unusual Origin (Fetchling)' }],
    activationMode: 'conditional',
    tags: ['fetchling', 'racial', 'shadow plane', 'divination'],
  },
  {
    id: 'unusual_origin_gillman',
    name: 'Unusual Origin (Gillman)',
    description:
      'Your divination spells and spell-like abilities manifest at 1 caster level higher. Once per day while fully immersed in water, you can cast augury as a spell-like ability.',
    shortDescription: '+1 CL for divination; 1/day augury while immersed in water.',
    source: 'Pathfinder Player Companion: Bastards of Golarion',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'Gillman' }],
    effects: [{ type: 'special', value: 1, bonusType: BonusType.UNTYPED, target: 'caster_level', source: 'Unusual Origin (Gillman)' }],
    activationMode: 'passive',
    tags: ['gillman', 'racial', 'divination', 'augury', 'water'],
  },

  // ─── Heroes of the Darklands (6 new — have 2 already) ────────────────────────
  {
    id: 'assisted_ascension',
    name: 'Assisted Ascension',
    description:
      'When you succeed at a Climb check, allies within 20 feet who also have this feat can climb 5 feet as an immediate action. You gain a +5 bonus on Climb checks to catch falling allies who have this feat.',
    shortDescription: 'Allies with this feat climb 5 ft on your success; +5 to catch falling allies.',
    source: 'Pathfinder Player Companion: Heroes of the Darklands',
    types: ['teamwork'],
    prerequisites: [{ type: 'skill', skillId: 'climb', ranks: 5 }],
    effects: [{ type: 'skill_bonus', target: 'climb', value: 5, bonusType: BonusType.UNTYPED, source: 'Assisted Ascension' }],
    activationMode: 'conditional',
    tags: ['teamwork', 'climb', 'darklands', 'dungeon'],
  },
  {
    id: 'aural_insight',
    name: 'Aural Insight',
    description:
      'By expending a move action to produce sound and listen for echoes, you gain blindsense 30 ft until your turn ends. This imposes a -4 penalty on Stealth. Cannot be used if deafened, unable to make noise, or in magically silenced areas.',
    shortDescription: 'Move action for blindsense 30 ft until end of turn (-4 Stealth).',
    source: 'Pathfinder Player Companion: Heroes of the Darklands',
    types: ['general'],
    prerequisites: [
      { type: 'feat', featId: 'blind_fight' },
      { type: 'feat', featId: 'improved_blind_fight' },
      { type: 'skill', skillId: 'perception', ranks: 10 },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Aural Insight' }],
    activationMode: 'conditional',
    tags: ['blindsense', 'echolocation', 'darklands', 'perception'],
  },
  {
    id: 'natural_pathseeker',
    name: 'Natural Pathseeker',
    description:
      'While in favored terrain, you apply half your favored terrain bonus to Acrobatics, Climb, and Swim checks.',
    shortDescription: 'Half favored terrain bonus to Acrobatics, Climb, and Swim.',
    source: 'Pathfinder Player Companion: Heroes of the Darklands',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'favored terrain' }],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Natural Pathseeker' }],
    activationMode: 'passive',
    tags: ['ranger', 'favored terrain', 'darklands', 'physical skills'],
  },
  {
    id: 'obscuring_beacon',
    name: 'Obscuring Beacon',
    description:
      'When holding a light source in dim or darker conditions, foes within the light radius take a -1 penalty on attack rolls against other targets also within the radius. Blind creatures are unaffected.',
    shortDescription: '-1 attack penalty for foes in your light radius vs. other lit targets.',
    source: 'Pathfinder Player Companion: Heroes of the Darklands',
    types: ['combat'],
    prerequisites: [],
    effects: [{ type: 'special', value: -1, bonusType: BonusType.UNTYPED, target: 'special', source: 'Obscuring Beacon' }],
    activationMode: 'conditional',
    tags: ['light', 'darklands', 'defense', 'support'],
  },
  {
    id: 'searing_distraction',
    name: 'Searing Distraction',
    description:
      'When attacking with a light source as an improvised weapon, the target must Fort save (DC 10 + 1/2 level + DEX mod) or be dazzled for 1 round. On a crit, the target is blinded for 1 round instead. Blind targets are unaffected.',
    shortDescription: 'Light source attacks dazzle on hit (blind on crit).',
    source: 'Pathfinder Player Companion: Heroes of the Darklands',
    types: ['combat'],
    prerequisites: [{ type: 'feat', featId: 'catch_off_guard' }],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Searing Distraction' }],
    activationMode: 'conditional',
    tags: ['light', 'improvised weapon', 'dazzle', 'blind', 'darklands'],
  },
  {
    id: 'sense_metals_minerals',
    name: 'Sense Metals and Minerals',
    description:
      'You gain a +4 bonus on Perception checks to notice natural deposits of precious metals or minerals, and a +4 on Appraise checks to determine their worth. By scrutinizing a vein for 5 minutes, you determine its worth within 1,000 gp (max 50,000 gp).',
    shortDescription: '+4 Perception/Appraise for metals and minerals; estimate vein value.',
    source: 'Pathfinder Player Companion: Heroes of the Darklands',
    types: ['general'],
    prerequisites: [],
    effects: [
      { type: 'skill_bonus', target: 'perception', value: 4, bonusType: BonusType.UNTYPED, source: 'Sense Metals and Minerals' },
      { type: 'skill_bonus', target: 'appraise', value: 4, bonusType: BonusType.UNTYPED, source: 'Sense Metals and Minerals' },
    ],
    activationMode: 'passive',
    tags: ['mining', 'perception', 'appraise', 'darklands'],
  },
  {
    id: 'terrain_celerity',
    name: 'Terrain Celerity',
    description:
      'While in favored terrain, you gain a +5 ft movement speed bonus. The bonus increases to +10 ft if a visible creature matching a favored enemy type is present in the same terrain.',
    shortDescription: '+5 ft speed in favored terrain (+10 ft if favored enemy visible).',
    source: 'Pathfinder Player Companion: Heroes of the Darklands',
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'favored enemy' },
      { type: 'class_feature', featureName: 'favored terrain' },
    ],
    effects: [{ type: 'speed_bonus', target: 'land', value: 5, bonusType: BonusType.UNTYPED, source: 'Terrain Celerity' }],
    activationMode: 'conditional',
    tags: ['ranger', 'favored terrain', 'favored enemy', 'speed', 'darklands'],
  },
  {
    id: 'tracer_fire',
    name: 'Tracer Fire',
    description:
      'As a standard action, make a single ranged attack with an illuminated weapon/ammo. On a hit, allies in dim/darker areas gain +2 circumstance bonus vs. that target for 1 round. The target is treated as in bright light until the projectile is removed (move action, provokes).',
    shortDescription: 'Illuminated ranged attack grants allies +2 vs. that target.',
    source: 'Pathfinder Player Companion: Heroes of the Darklands',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'point_blank_shot' },
      { type: 'feat', featId: 'precise_shot' },
    ],
    effects: [{ type: 'special', value: 2, bonusType: BonusType.CIRCUMSTANCE, target: 'special', source: 'Tracer Fire' }],
    activationMode: 'conditional',
    tags: ['ranged', 'light', 'support', 'darklands', 'teamwork'],
  },

  // ─── Rival Guide (4 new — Circling Offense, Topple Foe, Serpent Lash already exist; Vampiric Animal Companion skipped—vampire prereq) ─
  {
    id: 'footslasher',
    name: 'Footslasher',
    description:
      'As a standard action with a -2 attack penalty using a piercing or slashing weapon against a larger foe, on a hit dealing 1+ damage the target\'s speed is halved for 24 hours or until healed (DC 15 Heal or magical healing). Does not stack with itself or caltrops.',
    shortDescription: 'Standard action attack to halve a larger foe\'s speed.',
    source: 'Pathfinder Campaign Setting: Rival Guide',
    types: ['combat'],
    prerequisites: [],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Footslasher' }],
    activationMode: 'conditional',
    tags: ['speed reduction', 'piercing', 'slashing', 'size'],
  },
  {
    id: 'greater_serpent_lash',
    name: 'Greater Serpent Lash',
    description:
      'When you make a successful disarm or trip with Serpent Lash, you can make your additional attempt against any target within your whip\'s reach (not just adjacent). With a reposition, you can move the target to any point within reach.',
    shortDescription: 'Serpent Lash chain attacks can target anyone in whip reach.',
    source: 'Pathfinder Campaign Setting: Rival Guide',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'serpent_lash' },
      { type: 'bab', minimum: 4 },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Greater Serpent Lash' }],
    activationMode: 'conditional',
    tags: ['whip', 'trip', 'disarm', 'reposition', 'reach'],
  },
  {
    id: 'jackal_heritage',
    name: 'Jackal Heritage',
    description:
      'You gain a +2 racial bonus on saving throws against mind-affecting effects, and a +2 racial bonus on Perception checks. Must be taken at 1st level.',
    shortDescription: '+2 racial saves vs. mind-affecting; +2 racial Perception. 1st level only.',
    source: 'Pathfinder Campaign Setting: Rival Guide',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Humanoid, must be taken at 1st level' },
    ],
    effects: [
      { type: 'save_bonus', target: 'mind_affecting', value: 2, bonusType: BonusType.RACIAL, source: 'Jackal Heritage' },
      { type: 'skill_bonus', target: 'perception', value: 2, bonusType: BonusType.RACIAL, source: 'Jackal Heritage' },
    ],
    activationMode: 'passive',
    tags: ['heritage', 'racial', 'mind-affecting', 'perception'],
  },
  {
    id: 'slaying_sprint',
    name: 'Slaying Sprint',
    description:
      'You can move up to half your speed instead of a 5-foot step when performing a coup de grace as a full-round action. The coup de grace does not provoke AoOs. Light or one-handed weapon only.',
    shortDescription: 'Move half speed during coup de grace without provoking.',
    source: 'Pathfinder Campaign Setting: Rival Guide',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'dodge' },
      { type: 'feat', featId: 'mobility' },
      { type: 'feat', featId: 'spring_attack' },
      { type: 'bab', minimum: 13 },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Slaying Sprint' }],
    activationMode: 'conditional',
    tags: ['coup de grace', 'movement', 'assassin', 'mobility'],
  },

  // ─── People of the River ──────────────────────────────────────────────────────
  {
    id: 'call_out',
    name: 'Call Out',
    description:
      'As a standard action, make an Intimidate check against a hostile target within 30 ft (DC = 10 + HD + WIS mod, or 10 + Sense Motive bonus if higher). Success forces the target into a duel for 1 round + 1 round per 5 you exceed the DC. The opponent cannot withdraw.',
    shortDescription: 'Intimidate to force a foe into a duel for multiple rounds.',
    source: 'Pathfinder Player Companion: People of the River',
    types: ['combat'],
    prerequisites: [],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Call Out' }],
    activationMode: 'conditional',
    tags: ['intimidate', 'duel', 'river kingdoms', 'challenge'],
  },
  {
    id: 'improved_parry_river',
    name: 'Improved Parry',
    description:
      'When you successfully parry a foe\'s melee attack (dueling parry or parry class feature), your next melee attack against the target does not allow the enemy to apply its Dexterity bonus to AC. Must attack before end of your next turn.',
    shortDescription: 'Successful parry denies target DEX to AC on your next attack.',
    source: 'Pathfinder Player Companion: People of the River',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Improved Parry' }],
    activationMode: 'conditional',
    tags: ['parry', 'duel', 'dexterity', 'river kingdoms'],
  },
  {
    id: 'leapfrog',
    name: 'Leapfrog',
    description:
      'When performing a swift action performance combat check after a successful charge or combat maneuver, gain +2 on the check. You also gain +4 on your next Acrobatics, Climb, Fly, Ride, or Swim check before the end of your next turn.',
    shortDescription: '+2 performance check after charge/maneuver; +4 on next physical skill check.',
    source: 'Pathfinder Player Companion: People of the River',
    types: ['combat', 'performance'],
    prerequisites: [{ type: 'skill', skillId: 'acrobatics', ranks: 3 }],
    effects: [{ type: 'special', value: 2, bonusType: BonusType.UNTYPED, target: 'special', source: 'Leapfrog' }],
    activationMode: 'conditional',
    tags: ['performance combat', 'charge', 'acrobatics', 'river kingdoms'],
  },
  {
    id: 'river_raider',
    name: 'River Raider',
    description:
      'You gain a +2 bonus on Swim and Stealth checks while swimming in calm or rough water (not stormy). If you can act in a surprise round and start in water, you can take both a move and standard action.',
    shortDescription: '+2 Swim/Stealth while swimming; full surprise round from water.',
    source: 'Pathfinder Player Companion: People of the River',
    types: ['combat'],
    prerequisites: [],
    effects: [
      { type: 'skill_bonus', target: 'swim', value: 2, bonusType: BonusType.UNTYPED, source: 'River Raider' },
      { type: 'skill_bonus', target: 'stealth', value: 2, bonusType: BonusType.UNTYPED, source: 'River Raider' },
    ],
    activationMode: 'conditional',
    tags: ['swimming', 'stealth', 'surprise', 'river kingdoms', 'water'],
  },
  {
    id: 'second_wind_performance',
    name: 'Second Wind',
    description:
      'When you spend a swift action to attempt a performance combat check, you gain +2 on the check. If you are shaken, sickened, or fatigued, these conditions are suppressed until end of your next turn.',
    shortDescription: '+2 performance check; suppresses shaken/sickened/fatigued for 1 round.',
    source: 'Pathfinder Player Companion: People of the River',
    types: ['combat', 'performance'],
    prerequisites: [{ type: 'feat', featId: 'endurance' }],
    effects: [{ type: 'special', value: 2, bonusType: BonusType.UNTYPED, target: 'special', source: 'Second Wind' }],
    activationMode: 'conditional',
    tags: ['performance combat', 'endurance', 'condition suppression', 'river kingdoms'],
  },
  {
    id: 'sweeping_dodge',
    name: 'Sweeping Dodge',
    description:
      'When performing a dueling dodge while wearing a cloak, you gain evasion. There is a 25% chance that critical hits or sneak attacks are negated (damage rolled normally instead). Lasts only until the triggering attack resolves. Does not stack with fortification.',
    shortDescription: 'Dueling dodge with cloak grants evasion and 25% crit/sneak attack negation.',
    source: 'Pathfinder Player Companion: People of the River',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'dodge' },
    ],
    effects: [{ type: 'special', value: 0, bonusType: BonusType.UNTYPED, target: 'special', source: 'Sweeping Dodge' }],
    activationMode: 'conditional',
    tags: ['dodge', 'duel', 'evasion', 'cloak', 'fortification', 'river kingdoms'],
  },
  {
    id: 'waterway_caster',
    name: 'Waterway Caster',
    description:
      'You automatically succeed at concentration checks for vigorous or violent motion while swimming or on a ship. You gain a +4 bonus on concentration checks to cast spells underwater.',
    shortDescription: 'Auto-pass concentration on ships/swimming; +4 concentration underwater.',
    source: 'Pathfinder Player Companion: People of the River',
    types: ['general'],
    prerequisites: [],
    effects: [{ type: 'special', value: 4, bonusType: BonusType.UNTYPED, target: 'concentration', source: 'Waterway Caster' }],
    activationMode: 'passive',
    tags: ['spellcasting', 'water', 'concentration', 'river kingdoms', 'ship'],
  },
];
