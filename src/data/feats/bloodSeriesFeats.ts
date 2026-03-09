import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const BLOOD_SERIES_FEATS: FeatDefinition[] = [
  // ==================== BLOOD OF ANGELS (2012) ====================
  // Angelic Blood, Angelic Flesh, Angelic Wings — already in miscBooks1
  // Angel Wings, Celestial Servant, Channel Force, Metallic Wings — already in racialFeats (ARG)

  {
    id: 'angel_feather',
    name: 'Angel Feather',
    description:
      'Your wings are particularly powerful. You can use your wings to fly faster and more agilely. If you have a fly speed granted by feathered wings, your fly speed increases by 10 feet and your maneuverability improves by one step (up to perfect).',
    shortDescription: '+10 ft fly speed; improve wing maneuverability one step',
    source: 'Blood of Angels',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'aasimar' },
      { type: 'special', description: 'Fly speed from feathered wings' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['aasimar', 'celestial', 'racial', 'flight'],
  },
  {
    id: 'beacon_of_hope',
    name: 'Beacon of Hope',
    description:
      'You radiate an aura of hope and courage. All allies within 30 feet of you gain a +2 morale bonus on saving throws against fear effects. Additionally, any ally within 30 feet who would be shaken instead becomes unaffected as long as they remain within range.',
    shortDescription: 'Allies within 30 ft gain +2 vs fear; suppress shaken',
    source: 'Blood of Angels',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'aasimar' },
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'saves.all',
        value: 2,
        source: 'Beacon of Hope',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against fear effects, for allies within 30 ft',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['aasimar', 'celestial', 'racial', 'morale', 'aura'],
  },
  {
    id: 'channel_force_improved',
    name: 'Improved Channel Force',
    description:
      'When you use Channel Force, you can affect all creatures in a 30-foot line or a 15-foot cone rather than a single target. Each creature in the area is affected by a bull rush attempt using your channel energy damage as the CMB.',
    shortDescription: 'Channel Force affects a line or cone area',
    source: 'Blood of Angels',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'aasimar' },
      { type: 'feat', featId: 'channel_force' },
      { type: 'class_feature', featureName: 'channel energy' },
      { type: 'level', minimum: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['aasimar', 'celestial', 'racial', 'channel energy', 'bull rush'],
  },
  {
    id: 'channel_force_greater',
    name: 'Greater Channel Force',
    description:
      'When you use Improved Channel Force, you can affect all creatures in a 60-foot line or a 30-foot cone. You may also choose to have the effect knock creatures prone instead of moving them, provided they fail their saving throw.',
    shortDescription: 'Channel Force affects a larger area; option to knock prone',
    source: 'Blood of Angels',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'aasimar' },
      { type: 'feat', featId: 'channel_force_improved' },
      { type: 'class_feature', featureName: 'channel energy' },
      { type: 'level', minimum: 9 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['aasimar', 'celestial', 'racial', 'channel energy', 'bull rush'],
  },
  {
    id: 'corruption_toll',
    name: "Corruption's Toll",
    description:
      'When you deal damage with a spell or spell-like ability that has the good descriptor, evil creatures damaged by the effect are also sickened for 1 round. On a successful saving throw, the creature is instead staggered for 1 round.',
    shortDescription: 'Good spells sicken evil targets; stagger on save',
    source: 'Blood of Angels',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'aasimar' },
      { type: 'special', description: 'Ability to cast spells with the good descriptor' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['aasimar', 'celestial', 'racial', 'good descriptor', 'divine'],
  },
  {
    id: 'heavenly_radiance',
    name: 'Heavenly Radiance',
    description:
      'You can use your daylight spell-like ability to cast spells from a short list including flare, light, dancing lights, and faerie fire. You gain access to the spells on this list and can use your daylight spell-like ability to cast each once per day. At higher levels you gain access to additional spells.',
    shortDescription: 'Use daylight SLA to cast light-themed spells',
    source: 'Blood of Angels',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'aasimar' },
      { type: 'special', description: 'Daylight spell-like ability' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['aasimar', 'celestial', 'racial', 'spell-like', 'light'],
  },
  {
    id: 'touched_by_divinity',
    name: 'Touched by Divinity',
    description:
      "Choose a domain available to clerics of your chosen deity. You gain that domain's 1st-level domain spell as a spell-like ability usable once per day, with a caster level equal to your character level.",
    shortDescription: 'Gain a 1st-level domain spell as a 1/day SLA',
    source: 'Blood of Angels',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'aasimar' },
      { type: 'special', description: 'Must worship a deity' },
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
    tags: ['aasimar', 'celestial', 'racial', 'spell-like', 'divine'],
  },
  {
    id: 'scion_of_war',
    name: 'Scion of War',
    description:
      'You are trained in martial matters of the heavens. You can use your Charisma modifier in place of your Strength modifier when making bull rush and overrun combat maneuver checks.',
    shortDescription: 'Use CHA instead of STR for bull rush and overrun CMB',
    source: 'Blood of Angels',
    types: ['combat'],
    prerequisites: [
      { type: 'race', raceName: 'aasimar' },
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['aasimar', 'celestial', 'racial', 'combat', 'charisma'],
  },
  {
    id: 'purifying_channel_boa',
    name: 'Purifying Channel',
    description:
      'When you channel positive energy to heal living creatures, evil outsiders and undead in the area take additional damage equal to your Charisma modifier (minimum 1). This additional damage does not increase with feats or effects that increase channel energy damage.',
    shortDescription:
      'Channel healing also deals extra damage to evil outsiders/undead equal to CHA',
    source: 'Blood of Angels',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'aasimar' },
      { type: 'class_feature', featureName: 'channel positive energy' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['aasimar', 'celestial', 'racial', 'channel energy', 'divine'],
  },
  {
    id: 'glorious_heat',
    name: 'Glorious Heat',
    description:
      'When you cast a spell with the fire or light descriptor, one creature of your choice that was affected by the spell is warmed. That creature gains a +1 morale bonus on attack rolls and is immune to the shaken condition for 1 round.',
    shortDescription:
      'Fire/light spells grant target +1 morale on attacks and immunity to shaken for 1 round',
    source: 'Blood of Angels',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'aasimar' },
      { type: 'special', description: 'Ability to cast spells with the fire or light descriptor' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['aasimar', 'celestial', 'racial', 'fire', 'light', 'morale'],
  },
  {
    id: 'wings_of_heaven',
    name: 'Wings of Heaven',
    description:
      'You have learned to control the manifestation of your celestial wings more precisely. You may manifest your wings for a number of minutes per day equal to your character level. These minutes need not be consecutive, but must be used in 1-minute increments.',
    shortDescription: 'Manifest wings for CL minutes/day (not always-on)',
    source: 'Blood of Angels',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'aasimar' },
      { type: 'special', description: 'Celestial wings racial trait or Angelic Wings feat' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['aasimar', 'celestial', 'racial', 'flight'],
  },

  // ==================== BLOOD OF FIENDS (2012) ====================
  // Fiendish Darkness, Fiendish Resilience — already in miscBooks1

  {
    id: 'fiendish_facade',
    name: 'Fiendish Facade',
    description:
      'You have learned to disguise your fiendish nature with particular skill. You gain a +4 bonus on Disguise checks to appear as a member of your base race (typically human). This bonus increases to +8 when using magic to enhance your disguise.',
    shortDescription: '+4 (or +8 with magic) Disguise to appear as base race',
    source: 'Blood of Fiends',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'tiefling' },
      { type: 'skill', skillId: 'disguise', ranks: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.disguise',
        value: 4,
        source: 'Fiendish Facade',
        condition: { type: 'custom', params: {}, description: 'To appear as base race' },
      },
    ],
    activationMode: 'passive',
    tags: ['tiefling', 'fiendish', 'racial', 'disguise', 'social'],
  },
  // Accursed Hex — already in umagic-extra.ts (same mechanic), skipped
  {
    id: 'damned',
    name: 'Damned',
    description:
      'Your soul is stained with the marks of sin and corruption. You gain a +2 profane bonus on saves against death effects and effects that would affect your soul (such as trap the soul). If you die, your soul goes to your fiendish patron or the Lower Planes rather than the normal afterlife.',
    shortDescription: '+2 profane bonus vs death and soul-affecting effects',
    source: 'Blood of Fiends',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'tiefling' },
      { type: 'special', description: 'Nongood alignment' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.PROFANE,
        target: 'saves.all',
        value: 2,
        source: 'Damned',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against death effects and soul-affecting effects',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['tiefling', 'fiendish', 'racial', 'death', 'profane'],
  },
  {
    id: 'hellish_shackles_bof',
    name: 'Hellish Shackles',
    description:
      'You can channel the power of your fiendish blood to bind your targets. Once per day as a standard action, you can attempt to entangle a single creature within 30 feet for 1 minute (no saving throw). The creature can escape with a successful Escape Artist or Strength check (DC 10 + 1/2 your character level + your Charisma modifier).',
    shortDescription: '1/day entangle a creature within 30 ft for 1 minute (tiefling)',
    source: 'Blood of Fiends',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'tiefling' },
      { type: 'level', minimum: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['tiefling', 'fiendish', 'racial', 'entangle', 'spell-like'],
  },
  {
    id: 'imp_companion',
    name: 'Imp Companion',
    description:
      "You gain the service of a young imp as a familiar. This imp is particularly loyal due to your fiendish blood, and assists you as a wizard's familiar. Your effective wizard level for determining the familiar's abilities is equal to your character level. If the imp dies, you can attract a new one after 24 hours.",
    shortDescription: 'Gain an imp as a familiar',
    source: 'Blood of Fiends',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'tiefling' },
      { type: 'level', minimum: 7 },
      { type: 'special', description: 'Nongood alignment' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['tiefling', 'fiendish', 'racial', 'familiar', 'imp'],
  },
  {
    id: 'fiendish_wings',
    name: 'Fiendish Wings',
    description:
      'Leathery batlike wings sprout from your back. You gain a fly speed of 30 feet with average maneuverability. These wings function in medium or lighter armor. If you are carrying no more than a medium load, you may fly.',
    shortDescription: 'Gain fly speed 30 ft (average) with leathery wings',
    source: 'Blood of Fiends',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'tiefling' },
      { type: 'level', minimum: 10 },
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['tiefling', 'fiendish', 'racial', 'flight'],
  },
  {
    id: 'wicked_valor',
    name: 'Wicked Valor',
    description:
      'Your fiendish heritage allows you to shrug off wounds and keep fighting. Once per day when you are reduced to fewer than half your maximum hit points, you gain fast healing 1 for a number of rounds equal to your Constitution modifier (minimum 1).',
    shortDescription: '1/day gain fast healing 1 for CON rounds when below half HP',
    source: 'Blood of Fiends',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'tiefling' },
      { type: 'ability_score', ability: 'CON', minimum: 13 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['tiefling', 'fiendish', 'racial', 'fast healing', 'healing'],
  },

  // ==================== BLOOD OF THE NIGHT (2012) ====================
  // Aversion Tolerance — already in miscBooks2
  // Vampiric Companion — already in miscBooks2

  {
    id: 'dhampir_bite',
    name: 'Dhampir Bite',
    description:
      'Your fangs are more developed than those of other dhampirs, allowing you to make a bite attack. This is a primary natural attack that deals 1d4 points of damage for a Medium dhampir. Once per day when you damage a living creature with this bite, you can drain blood, regaining 1d4 hit points.',
    shortDescription: 'Gain a bite attack; 1/day drain blood to regain 1d4 HP',
    source: 'Blood of the Night',
    types: ['combat'],
    prerequisites: [
      { type: 'race', raceName: 'dhampir' },
      { type: 'special', description: 'Fangs racial trait' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['dhampir', 'vampire', 'racial', 'natural attack', 'bite'],
  },
  {
    id: 'necromantic_affinity',
    name: 'Necromantic Affinity',
    description:
      'Your ties to negative energy are so strong that positive energy harms you like an undead. Positive energy that would heal you instead damages you, and negative energy that would damage you instead heals you. You may have this ability whenever you choose, toggling it as a free action.',
    shortDescription: 'Toggle negative energy healing/positive energy harming like undead',
    source: 'Blood of the Night',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'dhampir' },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['dhampir', 'vampire', 'racial', 'negative energy', 'undead'],
  },
  {
    id: 'vampire_hunter',
    name: 'Vampire Hunter',
    description:
      "You have studied vampire physiology and know how to exploit their weaknesses. You gain a +2 bonus on Perception and Sense Motive checks against vampires and vampire spawn. Additionally, you deal an additional 1d6 damage with weapons that bypass a vampire's damage reduction.",
    shortDescription: '+2 Perception/Sense Motive vs vampires; +1d6 damage through their DR',
    source: 'Blood of the Night',
    types: ['combat'],
    prerequisites: [{ type: 'skill', skillId: 'knowledge_religion', ranks: 3 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.perception',
        value: 2,
        source: 'Vampire Hunter',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against vampires and vampire spawn',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['dhampir', 'vampire', 'combat', 'knowledge'],
  },
  {
    id: 'children_of_the_night',
    name: 'Children of the Night',
    description:
      "Bats, rats, and wolves answer your call. Once per day as a standard action, you can call a swarm of bats, rats, or 1d6+1 wolves that serve you for 1 hour. You command them as per a druid's wild empathy. Treat your character level as your druid level for determining the swarm's obedience.",
    shortDescription: '1/day call a swarm of bats/rats or 1d6+1 wolves for 1 hour',
    source: 'Blood of the Night',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'dhampir' },
      { type: 'level', minimum: 7 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['dhampir', 'vampire', 'racial', 'animal control'],
  },
  {
    id: 'spider_climb_vampire',
    name: 'Crawling Darkness',
    description:
      'You gain the ability to climb walls and ceilings as if under the effects of spider climb. This supernatural ability can be used for up to 1 minute per character level per day, divided into 1-minute increments.',
    shortDescription: 'Spider climb for up to CL minutes/day',
    source: 'Blood of the Night',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'dhampir' },
      { type: 'level', minimum: 5 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['dhampir', 'vampire', 'racial', 'climb', 'supernatural'],
  },
  {
    id: 'mist_form',
    name: 'Mist Form',
    description:
      'You can transform into a cloud of mist once per day for up to 1 minute per character level. In this form you are incorporeal, gain a fly speed of 20 feet (perfect), and cannot attack or be attacked. You can end the transformation early as a free action.',
    shortDescription: '1/day transform into mist: incorporeal, fly 20 ft (perfect)',
    source: 'Blood of the Night',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'dhampir' },
      { type: 'level', minimum: 11 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['dhampir', 'vampire', 'racial', 'incorporeal', 'flight'],
  },
  {
    id: 'undead_manipulation',
    name: 'Undead Manipulation',
    description:
      'You can channel negative energy to make undead creatures hostile toward your enemies. Once per day, you can command or rebuke undead as a cleric of your character level. If you have the ability to channel negative energy, you gain one additional daily use instead.',
    shortDescription: '1/day command/rebuke undead as a cleric of your level',
    source: 'Blood of the Night',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'dhampir' },
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['dhampir', 'vampire', 'racial', 'undead', 'channel energy'],
  },

  // ==================== BLOOD OF THE ELEMENTS (2014) ====================

  {
    id: 'scorching_weapons',
    name: 'Scorching Weapons',
    description:
      'Your weapons flare with inner fire. As a swift action, you can cause your natural weapons or any weapons you wield to deal an additional 1d4 points of fire damage for 1 round. You can use this ability a number of times per day equal to 3 + your Constitution modifier.',
    shortDescription: 'Swift action: weapons deal +1d4 fire damage for 1 round',
    source: 'Blood of the Elements',
    types: ['combat'],
    prerequisites: [
      { type: 'race', raceName: 'ifrit' },
      { type: 'ability_score', ability: 'CON', minimum: 13 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'combat.damage',
        value: '1d4',
        source: 'Scorching Weapons',
        condition: {
          type: 'custom',
          params: {},
          description: 'Fire damage; when ability is activated',
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['ifrit', 'elemental', 'racial', 'fire', 'weapon'],
  },
  {
    id: 'groundling',
    name: 'Groundling',
    description:
      'You have learned to move through solid earth and stone. You gain a burrow speed of 10 feet through loose earth (but not solid stone). If you already have a burrow speed, it increases by 10 feet.',
    shortDescription: 'Gain burrow speed 10 ft (loose earth), or +10 if already have one',
    source: 'Blood of the Elements',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'oread' }],
    effects: [],
    activationMode: 'passive',
    tags: ['oread', 'elemental', 'racial', 'earth', 'movement'],
  },
  {
    id: 'breeze_kissed',
    name: 'Breeze-Kissed',
    description:
      'You are surrounded by a constant light breeze that protects you from heat and ranged attacks. You gain a +2 circumstance bonus to AC against ranged attacks, and resistance to fire 2.',
    shortDescription: '+2 circumstance AC vs ranged; fire resistance 2',
    source: 'Blood of the Elements',
    types: ['general'],
    prerequisites: [{ type: 'race', raceName: 'sylph' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'ac',
        value: 2,
        source: 'Breeze-Kissed',
        condition: { type: 'custom', params: {}, description: 'Against ranged attacks only' },
      },
    ],
    activationMode: 'passive',
    tags: ['sylph', 'elemental', 'racial', 'air', 'defense'],
  },
  {
    id: 'hydraulic_maneuver',
    name: 'Hydraulic Maneuver',
    description:
      "You can use your hydraulic push spell-like ability to make combat maneuver checks. When you use this ability to make a bull rush or trip maneuver check, you use your caster level as your CMB. You do not need to move into the target's space to perform a bull rush this way.",
    shortDescription: 'Use hydraulic push SLA for bull rush or trip combat maneuvers',
    source: 'Blood of the Elements',
    types: ['combat'],
    prerequisites: [
      { type: 'race', raceName: 'undine' },
      { type: 'special', description: 'Hydraulic push spell-like ability' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['undine', 'elemental', 'racial', 'water', 'combat maneuver'],
  },
  {
    id: 'elemental_jaunt_boe',
    name: 'Elemental Jaunt',
    description:
      "Once per day you can travel between the Material Plane and your corresponding elemental plane as if using plane shift. You may only travel to and from the Inner Plane corresponding to your race's element. You arrive on the corresponding plane in a random location within 100 miles of your destination.",
    shortDescription: '1/day plane shift to/from your elemental plane',
    source: 'Blood of the Elements',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ifrit, oread, sylph, or undine' },
      { type: 'level', minimum: 15 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ifrit', 'oread', 'sylph', 'undine', 'elemental', 'racial', 'planar'],
  },
  {
    id: 'elemental_jaunt_lesser',
    name: 'Lesser Elemental Jaunt',
    description:
      'You can travel short distances through elemental matter. Once per day as a move action, you can step through a volume of elemental matter (earth, air, fire, or water corresponding to your elemental subtype) and emerge from another point up to 30 feet away, as if using dimension door. You must begin and end in a square containing your associated element.',
    shortDescription: '1/day dimension door through your elemental material',
    source: 'Blood of the Elements',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ifrit, oread, sylph, or undine' },
      { type: 'level', minimum: 7 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ifrit', 'oread', 'sylph', 'undine', 'elemental', 'racial', 'movement'],
  },
  {
    id: 'fire_in_the_blood',
    name: 'Fire in the Blood',
    description:
      'Your inner fire is invigorating. Whenever you take fire damage, you gain fast healing 2 for 1 round. This fast healing does not apply against the fire damage that triggered it.',
    shortDescription: 'Taking fire damage triggers fast healing 2 for 1 round',
    source: 'Blood of the Elements',
    types: ['general'],
    prerequisites: [
      { type: 'race', raceName: 'ifrit' },
      { type: 'ability_score', ability: 'CON', minimum: 13 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ifrit', 'elemental', 'racial', 'fire', 'fast healing'],
  },
  {
    id: 'elemental_overload',
    name: 'Elemental Overload',
    description:
      'When you deal energy damage of your associated element type, you can overload targets exposed to that damage. Creatures that take energy damage from your spells or spell-like abilities must succeed at a Fortitude save (DC 10 + 1/2 your level + your Charisma modifier) or be staggered for 1 round.',
    shortDescription: 'Energy damage from spells/SLAs can stagger targets on a failed Fort save',
    source: 'Blood of the Elements',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Ifrit, oread, sylph, or undine' },
      { type: 'level', minimum: 9 },
      { type: 'ability_score', ability: 'CHA', minimum: 15 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ifrit', 'oread', 'sylph', 'undine', 'elemental', 'racial'],
  },

  // ==================== BLOOD OF SHADOWS (2016) ====================

  {
    id: 'shadow_step',
    name: 'Shadow Step',
    description:
      'You can step into a shadow and emerge from a different shadow within 30 feet as a move action. Both shadows must be large enough to contain your space. You cannot use this ability in bright light.',
    shortDescription: 'Teleport between shadows within 30 ft as a move action',
    source: 'Blood of Shadows',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Fetchling, wayang, or dark folk' },
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'level', minimum: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['fetchling', 'wayang', 'shadow', 'racial', 'movement'],
  },
  {
    id: 'shadow_cloak',
    name: 'Shadow Cloak',
    description:
      'As a standard action, you can wrap shadows around yourself to gain concealment (20% miss chance). This effect lasts for 1 round per character level. You can use this ability once per day.',
    shortDescription: '1/day gain 20% miss chance from shadow concealment for CL rounds',
    source: 'Blood of Shadows',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Fetchling, wayang, or dark folk' },
      { type: 'level', minimum: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['fetchling', 'wayang', 'shadow', 'racial', 'concealment'],
  },
  {
    id: 'shadow_blending',
    name: 'Shadow Blending',
    description:
      'Attacks against you in dim light have a 50% miss chance instead of the normal 20% miss chance. This effect does not grant total concealment; it just increases the miss chance. You can use this ability a number of rounds per day equal to your character level.',
    shortDescription: 'In dim light, attacks against you have 50% miss chance instead of 20%',
    source: 'Blood of Shadows',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Fetchling, wayang, or dark folk' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['fetchling', 'wayang', 'shadow', 'racial', 'concealment', 'defense'],
  },
  {
    id: 'shadow_magic_boost',
    name: 'Lasting Shadows',
    description:
      'Spells with the darkness or shadow descriptor that you cast have their duration doubled (as if affected by Extend Spell), without requiring a higher-level spell slot.',
    shortDescription: 'Double duration of darkness/shadow spells without metamagic cost',
    source: 'Blood of Shadows',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Fetchling, wayang, or dark folk' },
      {
        type: 'special',
        description: 'Ability to cast spells with the darkness or shadow descriptor',
      },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['fetchling', 'wayang', 'shadow', 'racial', 'spellcasting'],
  },
  {
    id: 'shadow_walk_ability',
    name: 'Shadow Traveler',
    description:
      'You gain the ability to use shadow walk once per day as a spell-like ability, using your character level as the caster level. You can bring along other willing creatures at the rate of one additional creature per two character levels.',
    shortDescription: '1/day use shadow walk as a SLA',
    source: 'Blood of Shadows',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Fetchling, wayang, or dark folk' },
      { type: 'level', minimum: 9 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['fetchling', 'wayang', 'shadow', 'racial', 'spell-like', 'travel'],
  },
  {
    id: 'dark_sight',
    name: 'Dark Sight',
    description:
      'Your eyes adapt to see in supernatural darkness. You can see in darkness created by magical spells such as deeper darkness, though creatures with total concealment from such effects still have a 20% miss chance. Your darkvision range also increases by 30 feet.',
    shortDescription: 'See in magical darkness; darkvision +30 ft',
    source: 'Blood of Shadows',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Fetchling, wayang, or dark folk' },
      { type: 'special', description: 'Darkvision racial trait' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['fetchling', 'wayang', 'shadow', 'racial', 'darkvision', 'senses'],
  },
  {
    id: 'shadow_ghost',
    name: 'Shadow Ghost',
    description:
      'Your connection to the Shadow Plane grants you the ability to become partially incorporeal. Once per day as an immediate action when you would be hit by a physical attack, you can make yourself incorporeal until the beginning of your next turn, causing the attack to have a 50% miss chance.',
    shortDescription:
      '1/day become partially incorporeal as immediate action (50% miss chance) until next turn',
    source: 'Blood of Shadows',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Fetchling, wayang, or dark folk' },
      { type: 'level', minimum: 7 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['fetchling', 'wayang', 'shadow', 'racial', 'incorporeal', 'defense'],
  },

  // ==================== BLOOD OF THE SEA (2017) ====================

  {
    id: 'deep_diver',
    name: 'Deep Diver',
    description:
      'You can dive to greater depths than normal. You ignore the effects of water pressure for depths up to 1,000 feet. Additionally, you can hold your breath for a number of rounds equal to 4 × your Constitution score.',
    shortDescription: 'Ignore pressure to 1,000 ft; hold breath 4× CON rounds',
    source: 'Blood of the Sea',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Aquatic subtype or amphibious trait' }],
    effects: [],
    activationMode: 'passive',
    tags: ['aquatic', 'racial', 'underwater', 'survival'],
  },
  {
    id: 'aquatic_spellcasting',
    name: 'Aquatic Spellcasting',
    description:
      'You can cast spells normally while submerged in water. You do not need to make concentration checks to cast spells underwater, and your verbal components are not hindered by being submerged.',
    shortDescription: 'Cast spells normally while underwater; no concentration checks',
    source: 'Blood of the Sea',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Aquatic subtype or amphibious trait' },
      { type: 'special', description: 'Ability to cast spells' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['aquatic', 'racial', 'underwater', 'spellcasting'],
  },
  {
    id: 'crushing_current',
    name: 'Crushing Current',
    description:
      'You can use the pressure of water as a weapon. When underwater, you gain a slam attack dealing 1d6 points of bludgeoning damage plus your Strength modifier. On a successful hit, the target must succeed at a Fortitude save (DC 10 + 1/2 your character level + your Strength modifier) or be pushed 5 feet in any direction you choose.',
    shortDescription: 'Underwater slam attack; push target 5 ft on failed Fort save',
    source: 'Blood of the Sea',
    types: ['combat'],
    prerequisites: [
      { type: 'special', description: 'Aquatic subtype or amphibious trait' },
      { type: 'ability_score', ability: 'STR', minimum: 15 },
      { type: 'bab', minimum: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['aquatic', 'racial', 'underwater', 'combat', 'natural attack'],
  },
  {
    id: 'fluid_form',
    name: 'Fluid Form',
    description:
      'You can reshape your body to slip through tight spaces. You can squeeze through a space half your normal size without penalty, and can move through a space one-quarter your size with a –4 penalty on attack and AC. This ability works only in water or other liquids.',
    shortDescription: 'Squeeze through tight spaces in water without penalty',
    source: 'Blood of the Sea',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Aquatic subtype or amphibious trait' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['aquatic', 'racial', 'underwater', 'movement'],
  },
  {
    id: 'song_of_the_deep',
    name: 'Song of the Deep',
    description:
      'You can use sound to navigate and communicate underwater. You gain the ability to use echolocation in water, gaining blindsense 30 feet in any body of water. Additionally, you can communicate with aquatic animals and creatures with the aquatic subtype as if using speak with animals.',
    shortDescription: 'Blindsense 30 ft in water; speak with aquatic creatures',
    source: 'Blood of the Sea',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Aquatic subtype or amphibious trait' },
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['aquatic', 'racial', 'underwater', 'blindsense', 'communication'],
  },
  {
    id: 'siren_call',
    name: 'Siren Call',
    description:
      'Your voice has a haunting, alluring quality when heard underwater. Once per day, as a standard action you can attempt to fascinate all creatures within 60 feet that can hear you. Each creature must succeed at a Will save (DC 10 + 1/2 your character level + your Charisma modifier) or be fascinated for 1d4 rounds.',
    shortDescription: '1/day fascinate all creatures within 60 ft that can hear you',
    source: 'Blood of the Sea',
    types: ['general'],
    prerequisites: [
      { type: 'special', description: 'Aquatic subtype or amphibious trait' },
      { type: 'ability_score', ability: 'CHA', minimum: 15 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['aquatic', 'racial', 'underwater', 'fascinate', 'sonic'],
  },
  {
    id: 'rapid_swimmer',
    name: 'Rapid Swimmer',
    description:
      'Your swimming speed increases by 20 feet. If you do not have a swim speed, you gain a swim speed of 20 feet. Additionally, you do not need to make Swim skill checks to swim in calm or rough water.',
    shortDescription:
      '+20 ft swim speed or gain swim speed 20 ft; no Swim checks for calm/rough water',
    source: 'Blood of the Sea',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Aquatic subtype or amphibious trait' }],
    effects: [],
    activationMode: 'passive',
    tags: ['aquatic', 'racial', 'underwater', 'movement', 'swim'],
  },
  {
    id: 'ocean_s_child',
    name: "Ocean's Child",
    description:
      'You are supernaturally connected to the sea. You can always determine true north and always know your direction relative to the nearest body of salt water. You also gain a +4 bonus on Survival checks in aquatic environments.',
    shortDescription: 'Always know direction to nearest sea; +4 Survival in aquatic environments',
    source: 'Blood of the Sea',
    types: ['general'],
    prerequisites: [{ type: 'special', description: 'Aquatic subtype or amphibious trait' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skill.survival',
        value: 4,
        source: "Ocean's Child",
        condition: { type: 'custom', params: {}, description: 'In aquatic environments' },
      },
    ],
    activationMode: 'passive',
    tags: ['aquatic', 'racial', 'underwater', 'survival', 'navigation'],
  },
];
