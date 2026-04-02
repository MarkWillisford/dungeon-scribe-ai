import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const ISR_FEATS: FeatDefinition[] = [
  // ==================== FETCHLING FEATS ====================
  // shadow_ghost already in bloodSeriesFeats.ts — skipped
  {
    id: 'shadow_caster',
    name: 'Shadow Caster',
    description:
      'Your spells from the shadow subschool and spells with the darkness or shadow descriptor are more difficult to resist. The DC to disbelieve your shadow spells increases by 2, and creatures affected by your shadow spells take a –2 penalty on their saving throws to disbelieve them.',
    shortDescription: 'Shadow and darkness spells harder to disbelieve; +2 DC',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'fetchling' },
      {
        type: 'special',
        description: 'Ability to cast spells with the shadow or darkness descriptor',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'spell_dc.shadow',
        value: 2,
        source: 'Shadow Caster',
      },
    ],
    activationMode: 'passive',
    tags: ['fetchling', 'shadow', 'spellcasting', 'racial'],
  },
  {
    id: 'shadow_walker',
    name: 'Shadow Walker',
    description:
      'You can use shadow walk as a spell-like ability once per day. Your caster level for this effect equals your character level.',
    shortDescription: 'Use shadow walk once per day as a spell-like ability',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'fetchling' },
      { type: 'level', minimum: 9, class: 'character' },
      { type: 'special', description: 'Fetchling spell-like ability racial trait' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['fetchling', 'shadow', 'racial', 'spell-like ability'],
  },
  {
    id: 'improved_shadow_blend',
    name: 'Improved Shadow Blend',
    description:
      'Your shadow blend racial ability is enhanced. In any condition of illumination other than full daylight, you can disappear into the shadows as a free action, gaining concealment (20% miss chance). In shadowy illumination, you gain total concealment instead.',
    shortDescription:
      'Enhanced shadow blend; concealment in dim light, total concealment in shadows',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'fetchling' },
      { type: 'class_feature', featureName: 'shadow blend' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['fetchling', 'shadow', 'racial', 'concealment'],
  },

  // ==================== GILLMAN FEATS ====================
  {
    id: 'gillman_water_dependent',
    name: 'Gillman Weapon Familiarity',
    description:
      'You are proficient with tridents and underwater crossbows, and treat any weapon with "gillman" in its name as a martial weapon.',
    shortDescription: 'Proficiency with tridents and underwater crossbows',
    source: 'Inner Sea Races',
    types: ['combat'],
    prerequisites: [{ type: 'race', raceName: 'gillman' }],
    effects: [],
    activationMode: 'passive',
    tags: ['gillman', 'racial', 'weapon', 'aquatic'],
  },
  {
    id: 'surface_survivalist',
    name: 'Surface Survivalist',
    description:
      'You have adapted to life on the surface. You no longer suffer the penalties associated with the gillman water dependency racial trait when on the surface. Additionally, you gain a +2 bonus on saving throws against spells and effects with the fire descriptor.',
    shortDescription: 'No water dependency penalties on the surface; +2 vs fire effects',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'gillman' },
      { type: 'special', description: 'Gillman water dependency racial trait' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RACIAL,
        target: 'save.all',
        value: 2,
        source: 'Surface Survivalist',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against spells and effects with the fire descriptor',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['gillman', 'racial', 'aquatic', 'fire'],
  },
  {
    id: 'above_the_waves',
    name: 'Above the Waves',
    description:
      'You have learned to fight effectively on land. You do not take penalties on attack rolls or to your Armor Class while fighting in non-aquatic environments. Additionally, you treat your land speed as your primary speed for the purpose of calculating your movement.',
    shortDescription: 'No penalties for fighting on land; land speed is primary speed',
    source: 'Inner Sea Races',
    types: ['combat'],
    prerequisites: [
      { type: 'race', raceName: 'gillman' },
      { type: 'feat', featId: 'surface_survivalist' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['gillman', 'racial', 'aquatic', 'combat'],
  },

  // ==================== GRIPPLI FEATS ====================
  {
    id: 'grippli_tongue',
    name: 'Grippli Tongue',
    description:
      'Your sticky tongue can grab objects and creatures within 5 feet of you as a swift action, functioning like a whip for the purpose of disarming or tripping. This does not provoke attacks of opportunity.',
    shortDescription: 'Tongue attack to trip or disarm within 5 feet as swift action',
    source: 'Inner Sea Races',
    types: ['combat'],
    prerequisites: [{ type: 'race', raceName: 'grippli' }],
    effects: [],
    activationMode: 'toggle',
    tags: ['grippli', 'racial', 'combat maneuver', 'tongue'],
  },
  {
    id: 'poisonous_secretion',
    name: 'Poisonous Secretion',
    description:
      'You have developed a toxic skin secretion. Once per day, you can apply a dose of your natural poison (Fortitude DC 10 + 1/2 your level + your CON modifier; initial effect 1d2 DEX damage; secondary effect 1d2 DEX damage) to a weapon as a swift action.',
    shortDescription: 'Apply natural skin poison to weapon once/day',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'grippli' },
      { type: 'ability_score', ability: 'CON', minimum: 13 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['grippli', 'racial', 'poison'],
  },
  {
    id: 'improved_poisonous_secretion',
    name: 'Improved Poisonous Secretion',
    description:
      'You can use your Poisonous Secretion feat three times per day, and the DC of your poison increases by 2.',
    shortDescription: 'Poisonous Secretion 3/day with +2 DC',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'grippli' },
      { type: 'feat', featId: 'poisonous_secretion' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['grippli', 'racial', 'poison'],
  },

  // ==================== MERFOLK FEATS ====================
  {
    id: 'merfolk_sharpshooter',
    name: 'Merfolk Sharpshooter',
    description:
      'You are skilled with ranged weapons while submerged. You do not take the standard penalties for making ranged attacks underwater when wielding weapons specifically designed for underwater use.',
    shortDescription: 'No penalties on ranged attacks with underwater weapons while submerged',
    source: 'Inner Sea Races',
    types: ['combat'],
    prerequisites: [
      { type: 'race', raceName: 'merfolk' },
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['merfolk', 'racial', 'ranged', 'aquatic'],
  },
  {
    id: 'aquatic_ancestry',
    name: 'Aquatic Ancestry',
    description:
      'Your connection to water is powerful. You gain a +4 racial bonus on Swim checks, can always take 10 on Swim checks, and can use the run action while swimming. Additionally, you can hold your breath for a number of rounds equal to four times your Constitution score.',
    shortDescription: '+4 Swim, always take 10 on Swim, run while swimming, hold breath 4x CON',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'merfolk' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RACIAL,
        target: 'skill.swim',
        value: 4,
        source: 'Aquatic Ancestry',
      },
    ],
    activationMode: 'passive',
    tags: ['merfolk', 'racial', 'swim', 'aquatic'],
  },

  // ==================== NAGAJI FEATS ====================
  {
    id: 'serpents_fang',
    name: "Serpent's Fang",
    description:
      'You develop venomous fangs. You gain a bite attack that deals 1d4 points of damage plus your Strength modifier. Once per day, you can apply your venom to the bite (Fortitude DC 10 + 1/2 your level + your CON modifier; initial and secondary 1d2 CON damage).',
    shortDescription: 'Gain venomous bite attack (1d4 + STR); venom once/day',
    source: 'Inner Sea Races',
    types: ['combat'],
    prerequisites: [
      { type: 'race', raceName: 'nagaji' },
      { type: 'level', minimum: 3, class: 'character' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['nagaji', 'racial', 'natural attack', 'poison'],
  },
  {
    id: 'nagaji_hypnotic_gaze',
    name: 'Nagaji Hypnotic Gaze',
    description:
      'Your gaze can beguile foes. Once per day, you can attempt to hypnotize a single creature within 30 feet as a standard action. The creature must succeed on a Will save (DC 10 + 1/2 your level + your CHA modifier) or be fascinated for 1d4 rounds.',
    shortDescription: 'Fascinate one creature within 30 ft once/day (Will negates)',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'nagaji' },
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['nagaji', 'racial', 'enchantment', 'mind-affecting'],
  },
  {
    id: 'scaled_skin_nagaji',
    name: 'Scaled Skin (Nagaji)',
    description:
      'Your scales have become harder. You gain a +1 natural armor bonus to your Armor Class, and this bonus increases by 1 for every 5 character levels you possess.',
    shortDescription: '+1 natural armor (scales with level)',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'nagaji' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.NATURAL,
        target: 'ac',
        value: 1,
        source: 'Scaled Skin (Nagaji)',
      },
    ],
    activationMode: 'passive',
    tags: ['nagaji', 'racial', 'natural armor', 'defense'],
  },

  // ==================== SAMSARAN FEATS ====================
  {
    id: 'mystic_past_life',
    name: 'Mystic Past Life',
    description:
      "You can add spells from another class's spell list to the spell list of your current class. Add a number of spells from the spell list of another class equal to 1 + your Wisdom modifier to your class spell list. These spells must be of spell levels you can cast.",
    shortDescription: "Add WIS mod + 1 spells from another class's spell list to your own",
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'samsaran' }],
    effects: [],
    activationMode: 'passive',
    tags: ['samsaran', 'racial', 'spellcasting', 'reincarnation'],
  },
  {
    id: 'life_s_blood',
    name: "Life's Blood",
    description:
      'Your healing magic is enhanced by memories of past lives. When you cast a healing spell, you can recall techniques from a past life to grant the recipient temporary hit points equal to your caster level. These temporary hit points last for 1 hour.',
    shortDescription: 'Healing spells grant temporary HP equal to caster level',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'samsaran' },
      { type: 'special', description: 'Ability to cast cure spells' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['samsaran', 'racial', 'healing', 'reincarnation'],
  },
  {
    id: 'shards_of_the_past',
    name: 'Shards of the Past',
    description:
      'Your past lives grant you broad knowledge. You gain two skills as class skills. Additionally, you gain a +2 bonus on all checks using those skills.',
    shortDescription: 'Gain 2 class skills with +2 bonus on each',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'samsaran' }],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'skill',
        label: 'Past Life Skill 1',
        affectsEffects: true,
      },
      {
        type: 'skill',
        label: 'Past Life Skill 2',
        affectsEffects: true,
      },
    ],
    tags: ['samsaran', 'racial', 'skills', 'reincarnation'],
  },

  // ==================== STRIX FEATS ====================
  {
    id: 'hover',
    name: 'Hover',
    description:
      'You can hover in place while flying. You do not need to make Fly checks to hover. You can also make Fly checks to hover at a penalty of 0 (instead of the normal –5).',
    shortDescription: 'Hover while flying without Fly checks',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'strix' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.fly',
        value: 5,
        source: 'Hover',
        condition: { type: 'custom', params: {}, description: 'When attempting to hover in place' },
      },
    ],
    activationMode: 'passive',
    tags: ['strix', 'racial', 'flight', 'movement'],
  },
  {
    id: 'strix_hatred',
    name: 'Strix Hatred',
    description:
      'Your hatred of humans is legendary. You gain a +1 bonus on attack rolls against humans and a +4 dodge bonus to AC against attacks made by humans.',
    shortDescription: '+1 attack vs humans; +4 dodge AC vs human attacks',
    source: 'Inner Sea Races',
    types: ['combat'],
    prerequisites: [{ type: 'race', raceName: 'strix' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RACIAL,
        target: 'attack.all',
        value: 1,
        source: 'Strix Hatred',
        condition: { type: 'custom', params: {}, description: 'Against humans' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.DODGE,
        target: 'ac',
        value: 4,
        source: 'Strix Hatred',
        condition: { type: 'custom', params: {}, description: 'Against attacks made by humans' },
      },
    ],
    activationMode: 'conditional',
    tags: ['strix', 'racial', 'combat'],
  },
  {
    id: 'strix_dive_bomber',
    name: 'Dive Bomber',
    description:
      'When you charge a target while flying and descend at least 30 feet before attacking, you deal additional damage equal to your Strength modifier and the target must succeed on a Reflex save (DC 10 + 1/2 your level + your STR modifier) or be knocked prone.',
    shortDescription: 'Diving charge deals extra damage and may knock prone',
    source: 'Inner Sea Races',
    types: ['combat'],
    prerequisites: [
      { type: 'race', raceName: 'strix' },
      { type: 'special', description: 'Fly speed of at least 30 feet' },
      { type: 'bab', minimum: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['strix', 'racial', 'flight', 'combat', 'charge'],
  },
  {
    id: 'wingover',
    name: 'Wingover',
    description:
      'Once per round, you can turn up to 180° as a free action without making a Fly skill check. This does not reduce your speed.',
    shortDescription: 'Turn up to 180° as free action while flying once per round',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'strix' },
      { type: 'special', description: 'Fly speed' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['strix', 'racial', 'flight', 'movement'],
  },

  // ==================== SULI FEATS ====================
  // elemental_jaunt already in bloodSeriesFeats.ts — skipped
  {
    id: 'suli_elemental_assault',
    name: 'Elemental Assault',
    description:
      'Once per day, you can shroud your arms in elemental energy as a swift action, choosing acid, cold, electricity, or fire. For 1 round per character level, your unarmed strikes and natural attacks deal 1d6 additional points of energy damage of the chosen type.',
    shortDescription:
      'Shroud arms in elemental energy; +1d6 energy damage for character level rounds',
    source: 'Inner Sea Races',
    types: ['combat'],
    prerequisites: [
      { type: 'race', raceName: 'suli' },
      { type: 'level', minimum: 3, class: 'character' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['suli', 'racial', 'elemental', 'combat', 'energy'],
  },
  // elemental_fist already in apg-extra.ts — skipped

  // ==================== SVIRFNEBLIN FEATS ====================
  {
    id: 'svirfneblin_magic',
    name: 'Svirfneblin Magic',
    description:
      'You have the innate magical talents of deep gnomes. You can use nondetection, blindness/deafness, blur, and disguise self as spell-like abilities once each per day. Your caster level equals your character level.',
    shortDescription: 'Use nondetection, blindness/deafness, blur, disguise self 1/day each',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'svirfneblin' },
      { type: 'level', minimum: 9, class: 'character' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['svirfneblin', 'deep gnome', 'racial', 'spell-like ability', 'magic'],
  },
  {
    id: 'shadow_sense',
    name: 'Shadow Sense',
    description:
      'You can sense creatures in darkness with exceptional acuity. You gain blindsense 30 feet in areas of dim light or darkness. Additionally, you gain a +4 bonus on Perception checks to notice hidden creatures in shadowy areas.',
    shortDescription:
      'Blindsense 30 ft in dim light or darkness; +4 Perception vs hidden creatures in shadows',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'svirfneblin' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RACIAL,
        target: 'skill.perception',
        value: 4,
        source: 'Shadow Sense',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against hidden creatures in shadowy areas',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['svirfneblin', 'deep gnome', 'racial', 'perception', 'darkness'],
  },

  // ==================== TENGU FEATS ====================
  {
    id: 'tengu_raven_s_flight',
    name: "Raven's Flight",
    description:
      "You can transform into a Tiny black bird as a swift action. While in this form, you gain a fly speed of 40 feet (average), can't speak, and can't use your natural attacks or manipulate objects. You can stay in bird form for 1 minute per character level per day.",
    shortDescription: 'Transform into Tiny bird with 40-ft fly (average) for 1 min/level per day',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'tengu' },
      { type: 'level', minimum: 3, class: 'character' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['tengu', 'racial', 'shapeshifting', 'flight'],
  },
  {
    id: 'murder_s_eyes',
    name: "Murder's Eyes",
    description:
      'You gain extraordinary low-light vision. You can see in dim light as well as a cat can, and you gain a +4 bonus on Perception checks made in dim light or darkness.',
    shortDescription: '+4 Perception in dim light or darkness; improved low-light vision',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'tengu' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RACIAL,
        target: 'skill.perception',
        value: 4,
        source: "Murder's Eyes",
        condition: { type: 'custom', params: {}, description: 'In dim light or darkness' },
      },
    ],
    activationMode: 'passive',
    tags: ['tengu', 'racial', 'perception', 'vision'],
  },
  {
    id: 'tengu_sword_training',
    name: 'Tengu Sword Training',
    description:
      'You gain proficiency with all swords. In addition, you gain Weapon Focus with one sword of your choice.',
    shortDescription: 'Proficiency with all swords; Weapon Focus with one sword',
    source: 'Inner Sea Races',
    types: ['combat'],
    prerequisites: [
      { type: 'race', raceName: 'tengu' },
      { type: 'bab', minimum: 1 },
    ],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'weapon',
        label: 'Sword for Weapon Focus',
        affectsEffects: false,
      },
    ],
    tags: ['tengu', 'racial', 'combat', 'sword'],
  },
  {
    id: 'caw_before_the_storm',
    name: 'Caw Before the Storm',
    description:
      'Your war cry shakes the resolve of your foes. Once per day as a standard action, you can make a deafening screech in a 30-foot cone. All creatures in the area must succeed on a Will save (DC 10 + 1/2 your level + your CHA modifier) or become shaken for 1d4 rounds.',
    shortDescription: 'War screech in 30-ft cone: shaken for 1d4 rounds (Will negates)',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'tengu' },
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['tengu', 'racial', 'fear', 'shaken'],
  },

  // ==================== UNDINE FEATS ====================
  {
    id: 'water_s_soul',
    name: "Water's Soul",
    description:
      'Your elemental heritage suffuses your body with water. You gain the aquatic subtype, are treated as aquatic for any effect that affects aquatic creatures, and gain a swim speed equal to your base land speed.',
    shortDescription: 'Gain aquatic subtype and swim speed equal to land speed',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'undine' },
      { type: 'level', minimum: 11, class: 'character' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['undine', 'racial', 'aquatic', 'water', 'elemental'],
  },
  {
    id: 'cold_control',
    name: 'Cold Control',
    description:
      "Your mastery of cold energy extends beyond resistance. You gain cold resistance 10. When you deal cold damage to a creature, you can choose to reduce that creature's speed by 10 feet for 1 round.",
    shortDescription: "Cold resistance 10; cold attacks reduce target's speed by 10 ft for 1 round",
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'undine' },
      {
        type: 'special',
        description: 'Undine energy resistance or spell-like ability racial trait',
      },
    ],
    effects: [
      {
        type: 'resistance',
        bonusType: BonusType.UNTYPED,
        target: 'energy_resistance.cold',
        value: 10,
        source: 'Cold Control',
      },
    ],
    activationMode: 'passive',
    tags: ['undine', 'racial', 'cold', 'energy resistance', 'elemental'],
  },
  {
    id: 'undine_s_gift',
    name: "Undine's Gift",
    description:
      'Your elemental connection to water allows you to breathe underwater indefinitely, as if under the effect of a water breathing spell. You also gain a +4 competence bonus on Swim checks.',
    shortDescription: 'Breathe underwater indefinitely; +4 competence to Swim',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'undine' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.COMPETENCE,
        target: 'skill.swim',
        value: 4,
        source: "Undine's Gift",
      },
    ],
    activationMode: 'passive',
    tags: ['undine', 'racial', 'aquatic', 'swim', 'water'],
  },

  // ==================== OREAD FEATS ====================
  {
    id: 'earth_s_embrace',
    name: "Earth's Embrace",
    description:
      "When you grapple a creature, you can infuse your hold with stone's power. While grappling, you deal an additional 1d6 points of bludgeoning damage, and the grappled creature has its movement speed reduced by 10 feet for 1 round after escaping.",
    shortDescription: "+1d6 bludgeoning damage while grappling; escapee's speed reduced 10 ft",
    source: 'Inner Sea Races',
    types: ['combat'],
    prerequisites: [
      { type: 'race', raceName: 'oread' },
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'feat', featId: 'improved_grapple' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['oread', 'racial', 'grapple', 'earth', 'elemental'],
  },
  {
    id: 'mountain_s_stance',
    name: "Mountain's Stance",
    description:
      'You are immovable as stone. You gain a +4 bonus to your CMD against bull rush, overrun, and trip attempts. Additionally, once per day, you can use stone call as a spell-like ability.',
    shortDescription: '+4 CMD vs bull rush, overrun, trip; use stone call 1/day',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'oread' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'cmd',
        value: 4,
        source: "Mountain's Stance",
        condition: {
          type: 'custom',
          params: {},
          description: 'Against bull rush, overrun, and trip attempts',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['oread', 'racial', 'earth', 'elemental', 'combat maneuver defense'],
  },

  // ==================== SYLPH FEATS ====================
  {
    id: 'air_s_reach',
    name: "Air's Reach",
    description:
      'Your elemental connection to air extends your reach. Once per day, as a swift action, you can double the range of your electricity-based spell-like abilities and spells for one round.',
    shortDescription: 'Double range of electricity spells/SLAs for 1 round once/day',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'sylph' },
      { type: 'special', description: 'Sylph electricity-based spell-like ability' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['sylph', 'racial', 'electricity', 'air', 'elemental'],
  },
  {
    id: 'storm_s_child',
    name: "Storm's Child",
    description:
      'You are immune to natural weather effects. Wind effects do not cause you to make Fly checks to stay airborne, and you are never blown off course or slowed by natural winds. You also gain electricity resistance 10.',
    shortDescription:
      "Immune to natural weather; wind doesn't hinder flight; electricity resistance 10",
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'sylph' },
      { type: 'level', minimum: 9, class: 'character' },
    ],
    effects: [
      {
        type: 'resistance',
        bonusType: BonusType.UNTYPED,
        target: 'energy_resistance.electricity',
        value: 10,
        source: "Storm's Child",
      },
    ],
    activationMode: 'passive',
    tags: ['sylph', 'racial', 'electricity', 'air', 'elemental', 'weather'],
  },

  // ==================== IFRIT FEATS ====================
  {
    id: 'ifrit_fire_insight',
    name: 'Ifrit Fire Insight',
    description:
      'Your connection to fire grants you a preternatural awareness of heat and flame. You gain the ability to detect the presence of fire (including invisible or magical fire) within 30 feet as a free action, and you never take damage from heat due to natural sources of fire.',
    shortDescription: 'Detect fire within 30 ft; immune to natural fire heat damage',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'ifrit' }],
    effects: [],
    activationMode: 'passive',
    tags: ['ifrit', 'racial', 'fire', 'elemental'],
  },
  {
    id: 'fire_affinity',
    name: 'Fire Affinity',
    description:
      'Your connection to fire deepens. Fire spells and effects you control deal +1 point of damage per die. Your fire-based spell-like abilities are treated as being cast at a caster level 1 higher than your character level.',
    shortDescription: '+1 damage per die for fire spells; fire SLAs at CL+1',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'ifrit' },
      { type: 'special', description: 'Ifrit fire-based spell-like ability' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'spell_damage.fire',
        value: 1,
        source: 'Fire Affinity',
      },
    ],
    activationMode: 'passive',
    tags: ['ifrit', 'racial', 'fire', 'elemental', 'spellcasting'],
  },

  // ==================== WAYANG FEATS ====================
  {
    id: 'wayang_spellhunter',
    name: 'Wayang Spellhunter',
    description:
      "You have mastered the art of disabling a foe's magical defenses. Choose one spell of 3rd level or lower. When this spell is cast and overcomes a creature's spell resistance, that creature also loses its spell resistance against that spell for 1d4 rounds.",
    shortDescription: 'Chosen spell bypasses SR for 1d4 rounds after initial bypass',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'wayang' },
      { type: 'special', description: 'Ability to cast spells' },
    ],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'custom',
        label: 'Spell Level 3 or lower',
        affectsEffects: false,
      },
    ],
    tags: ['wayang', 'racial', 'spell resistance', 'magic'],
  },
  {
    id: 'shadow_of_doubt',
    name: 'Shadow of Doubt',
    description:
      'Your presence sows uncertainty. When you create a shadow effect, illusion, or use a shadow-related ability, creatures affected suffer a –2 penalty on Sense Motive checks and Will saves to disbelieve illusions for 24 hours.',
    shortDescription:
      'Shadow/illusion abilities impose –2 on Sense Motive and disbelief Will saves for 24 hours',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'wayang' },
      { type: 'ability_score', ability: 'INT', minimum: 13 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['wayang', 'racial', 'shadow', 'illusion', 'magic'],
  },
  {
    id: 'shadow_shroud',
    name: 'Shadow Shroud',
    description:
      'You can envelop yourself in shadow to enhance your concealment. Once per day as a swift action, you gain concealment (20% miss chance) for a number of rounds equal to your character level. This concealment does not apply to creatures with darkvision or those in an area of bright light.',
    shortDescription: 'Gain concealment (20% miss) for character level rounds once/day',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'wayang' }],
    effects: [],
    activationMode: 'toggle',
    tags: ['wayang', 'racial', 'shadow', 'concealment'],
  },

  // ==================== KITSUNE FEATS (not already in database) ====================
  {
    id: 'swift_kitsune_shapechanger',
    name: 'Swift Kitsune Shapechanger',
    description:
      'You can shift between your humanoid, hybrid, and fox forms with greater ease. You can assume any of your alternate forms as a swift action instead of a standard action.',
    shortDescription: 'Change form as swift action instead of standard action',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'kitsune' },
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['kitsune', 'racial', 'shapeshifting', 'polymorph'],
  },
  {
    id: 'magical_tail',
    name: 'Magical Tail',
    description:
      'You grow an extra tail that represents your growing magical power. Each time you take this feat, you gain a new spell-like ability usable once per day, chosen from the following list based on the number of tails you have: 1st tail — dancing lights; 2nd — charm person; 3rd — misdirection; 4th — invisibility; 5th — suggestion; 6th — displacement; 7th — confusion; 8th — dominate person. Your caster level equals your character level.',
    shortDescription:
      'Gain an additional magical tail with a new spell-like ability (up to 8 total)',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'kitsune' }],
    effects: [],
    activationMode: 'toggle',
    tags: ['kitsune', 'racial', 'shapeshifting', 'spell-like ability', 'magic'],
  },

  // ==================== GENERAL ISR FEATS ====================
  // blood_feast already in miscBooks1.ts — skipped
  {
    id: 'fearsome_shape',
    name: 'Fearsome Shape',
    description:
      'When you use wild shape or a polymorph effect, you can choose a form that frightens weaker creatures. As a swift action after taking a new shape, creatures with fewer HD than you that can see you must succeed on a Will save (DC 10 + 1/2 your level + your CHA modifier) or be shaken for 1d4 rounds.',
    shortDescription: 'Polymorph triggers fear in weaker creatures (Will negates)',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'special', description: 'Ability to use wild shape or polymorph effect' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['shapeshifting', 'fear', 'polymorph'],
  },
  {
    id: 'reclaim_wild_shape',
    name: 'Reclaim Wild Shape',
    description:
      'You can recover your wild shape even when transformed against your will. If a polymorph or petrification effect forces you into a different form, you can use a standard action to reassert your true form, returning to your normal shape as if using a free dismissal of the effect.',
    shortDescription: 'Recover true form from forced polymorph as standard action',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'wild shape' },
      { type: 'level', minimum: 6, class: 'druid' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['druid', 'wild shape', 'polymorph', 'shapeshifting'],
  },

  // ==================== CATFOLK FEATS ====================
  {
    id: 'catfolk_exemplar',
    name: 'Catfolk Exemplar',
    description:
      'Your catfolk traits are more powerful than usual. Choose one of the following benefits: enhanced low-light vision (see four times as far as normal in dim light), a climb speed of 20 feet, +2 natural armor bonus to AC, or pounce (charge and make a full attack).',
    shortDescription: 'Choose one enhanced catfolk racial benefit',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'catfolk' }],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'custom',
        label: 'Enhanced Trait',
        options: [
          'Enhanced low-light vision (4x in dim light)',
          'Climb speed 20 feet',
          '+2 natural armor bonus to AC',
          'Pounce (full attack on charge)',
        ],
        affectsEffects: true,
      },
    ],
    tags: ['catfolk', 'racial'],
  },
  {
    id: 'sprightly_step',
    name: 'Sprightly Step',
    description:
      'You move with preternatural grace. Your movement never provokes attacks of opportunity when you leave a square threatened by an enemy, and you gain a +2 bonus on Acrobatics checks made to avoid attacks of opportunity.',
    shortDescription: "Movement doesn't provoke AoOs; +2 Acrobatics to avoid AoOs",
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'catfolk' },
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'feat', featId: 'dodge' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.acrobatics',
        value: 2,
        source: 'Sprightly Step',
        condition: {
          type: 'custom',
          params: {},
          description: 'When using Acrobatics to avoid attacks of opportunity',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['catfolk', 'racial', 'movement', 'acrobatics'],
  },

  // ==================== RATFOLK FEATS ====================
  {
    id: 'ratfolk_pack_tactics',
    name: 'Pack Tactics',
    description:
      'You and your allies overwhelm foes with combined numbers. Whenever you and two or more allies are adjacent to the same foe, you gain a +2 bonus on attack rolls against that foe, in addition to the normal flanking bonus.',
    shortDescription: '+2 attack when 2+ allies adjacent to same foe (in addition to flanking)',
    source: 'Inner Sea Races',
    types: ['combat'],
    prerequisites: [{ type: 'race', raceName: 'ratfolk' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.all',
        value: 2,
        source: 'Pack Tactics',
        condition: {
          type: 'custom',
          params: {},
          description: 'When 2+ allies are adjacent to the same foe',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['ratfolk', 'racial', 'combat', 'teamwork'],
  },
  {
    id: 'warren_digger',
    name: 'Warren Digger',
    description:
      'You are adept at digging through earth and stone. You gain a burrow speed of 10 feet through earth (but not stone). In addition, you gain a +4 bonus on Escape Artist checks.',
    shortDescription: 'Gain burrow speed 10 ft through earth; +4 Escape Artist',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'ratfolk' },
      { type: 'ability_score', ability: 'STR', minimum: 13 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RACIAL,
        target: 'skill.escape_artist',
        value: 4,
        source: 'Warren Digger',
      },
    ],
    activationMode: 'passive',
    tags: ['ratfolk', 'racial', 'burrow', 'movement'],
  },

  // ==================== VISHKANYA FEATS ====================
  {
    id: 'toxic_recovery',
    name: 'Toxic Recovery',
    description:
      'Your venom-producing biology allows you to more quickly recover from poison. When you attempt a saving throw to recover from a poison, you roll the save twice and take the better result. You also gain a +2 bonus on saving throws against all poisons.',
    shortDescription: 'Roll poison saves twice, take better; +2 vs poisons',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'vishkanya' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RACIAL,
        target: 'save.all',
        value: 2,
        source: 'Toxic Recovery',
        condition: { type: 'custom', params: {}, description: 'Against poison effects' },
      },
    ],
    activationMode: 'passive',
    tags: ['vishkanya', 'racial', 'poison', 'saves'],
  },
  {
    id: 'vishkanya_s_gift',
    name: "Vishkanya's Gift",
    description:
      'You can produce venom more quickly. You can apply your toxic racial ability to a weapon or ammunition as a free action once per round instead of the standard swift action.',
    shortDescription: 'Apply vishkanya toxic as free action once per round',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'vishkanya' },
      { type: 'special', description: 'Toxic racial trait' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['vishkanya', 'racial', 'poison', 'combat'],
  },

  // ==================== CHANGELINGS FEATS ====================
  {
    id: 'mother_s_gift',
    name: "Mother's Gift",
    description:
      "Your hag heritage manifests in one of three ways: a hag's claws (2 claw attacks dealing 1d4 damage each), a hag's eye (you can detect magic at will as a spell-like ability), or a hag's skin (you gain a +1 natural armor bonus and can change your appearance at will as disguise self).",
    shortDescription:
      'Choose: claw attacks, detect magic at will, or +1 natural armor with disguise self',
    source: 'Inner Sea Races',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'changeling' }],
    effects: [],
    activationMode: 'passive',
    choices: [
      {
        type: 'custom',
        label: 'Hag Heritage Manifestation',
        options: [
          "Hag's Claws (2 claw attacks, 1d4 each)",
          "Hag's Eye (detect magic at will)",
          "Hag's Skin (+1 natural armor, disguise self at will)",
        ],
        affectsEffects: true,
      },
    ],
    tags: ['changeling', 'racial', 'hag heritage'],
  },
];
