import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const HEROES_FEATS: FeatDefinition[] = [
  // ==================== HEROES OF THE WILD (2015) ====================
  // Already in database (skipped): Death from Above (miscBooks1), Uncivilized Tactics (miscBooks2),
  //   Attuned to the Wild (racialFeats), Animal Soul (UW), Wild Speech (UW), Elven Spirit (racialFeats),
  //   Boon Companion (UW)

  {
    id: 'animal_friendship',
    name: 'Animal Friendship',
    description:
      'Animals feel an instinctive kinship with you. You gain a +2 bonus on Handle Animal checks. If you have 10 or more ranks in Handle Animal, this bonus increases to +4. Additionally, animals that are not currently trained to attack you will not willingly attack you unless you attack them first or use magic to influence them.',
    shortDescription:
      "+2 (or +4 with 10+ ranks) on Handle Animal; non-hostile animals won't attack you unprovoked",
    source: 'Heroes of the Wild',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'skill', skillId: 'handle_animal', ranks: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.handle_animal',
        value: 2,
        source: 'Animal Friendship',
      },
    ],
    activationMode: 'passive',
    tags: ['animals', 'handle animal', 'nature', 'wild'],
  },

  {
    id: 'careful_speaker',
    name: 'Careful Speaker',
    description:
      'You choose your words carefully to avoid breaking oaths or telling lies while still accomplishing your goals. You gain a +4 bonus on Bluff checks made to mislead using technically true statements. Additionally, detect lies and similar truth-detecting effects only detect deliberate falsehoods, not misleading-but-true statements, when used against you.',
    shortDescription:
      '+4 Bluff to mislead with true statements; truth-detection only catches outright lies',
    source: 'Heroes of the Wild',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'INT', minimum: 13 },
      { type: 'skill', skillId: 'bluff', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skills.bluff',
        value: 4,
        source: 'Careful Speaker',
        condition: {
          type: 'custom',
          description: 'When misleading with technically true statements',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['bluff', 'deception', 'social', 'wild'],
  },

  {
    id: 'familiar_terrain',
    name: 'Familiar Terrain',
    description:
      'In terrain types in which you have a favored terrain bonus, you gain an additional +2 bonus on initiative checks and Perception, Stealth, and Survival checks. You also leave no trail in your favored terrains.',
    shortDescription:
      '+2 on initiative, Perception, Stealth, and Survival in favored terrains; leave no trail',
    source: 'Heroes of the Wild',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'favored terrain' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'initiative',
        value: 2,
        source: 'Familiar Terrain',
        condition: { type: 'custom', description: 'In favored terrain', params: {} },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.perception',
        value: 2,
        source: 'Familiar Terrain',
        condition: { type: 'custom', description: 'In favored terrain', params: {} },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.stealth',
        value: 2,
        source: 'Familiar Terrain',
        condition: { type: 'custom', description: 'In favored terrain', params: {} },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.survival',
        value: 2,
        source: 'Familiar Terrain',
        condition: { type: 'custom', description: 'In favored terrain', params: {} },
      },
    ],
    activationMode: 'conditional',
    tags: ['favored terrain', 'ranger', 'stealth', 'wild'],
  },

  {
    id: 'feral_speech',
    name: 'Feral Speech',
    description:
      'You can speak with animals as if using the speak with animals spell. This ability works with all animals as defined by the animal type, not just a particular species. You do not need to use the same language the animal would naturally use — the communication is instinctual.',
    shortDescription: 'Speak with all animals as the speak with animals spell at will',
    source: 'Heroes of the Wild',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'skill', skillId: 'handle_animal', ranks: 6 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['animals', 'communication', 'druid', 'ranger', 'wild'],
  },

  {
    id: 'hunters_surprise',
    name: "Hunter's Surprise",
    description:
      'Once per day, you can designate one creature as your quarry as a swift action. Against this quarry, you can apply your favored enemy bonus from your ranger class even if that creature is not one of your favored enemies. If the quarry is already a favored enemy, you instead gain double your normal favored enemy bonus against it until the end of your next turn.',
    shortDescription:
      'Once/day: apply favored enemy bonus to any creature, or double it vs. actual favored enemy',
    source: 'Heroes of the Wild',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'favored enemy' }],
    effects: [],
    activationMode: 'conditional',
    tags: ['ranger', 'favored enemy', 'wild', 'tracking'],
  },

  {
    id: 'nature_mimic',
    name: "Nature's Mimic",
    description:
      'You can duplicate the appearance, sounds, and smells of natural terrain and wildlife to blend into the environment. You gain a +4 bonus on Disguise checks to appear as a natural part of the environment. Additionally, you gain a +4 bonus on Bluff checks to feint against animals and magical beasts.',
    shortDescription:
      '+4 Disguise to blend into natural environments; +4 Bluff to feint vs. animals and magical beasts',
    source: 'Heroes of the Wild',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'disguise', ranks: 1 },
      { type: 'skill', skillId: 'stealth', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skills.disguise',
        value: 4,
        source: "Nature's Mimic",
        condition: {
          type: 'custom',
          description: 'When disguising as part of a natural environment',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skills.bluff',
        value: 4,
        source: "Nature's Mimic",
        condition: {
          type: 'custom',
          description: 'When feinting against animals or magical beasts',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['stealth', 'disguise', 'nature', 'wild'],
  },

  {
    id: 'photographic_memory',
    name: 'Photographic Memory',
    description:
      'You have a flawless memory for maps and visual details. You can perfectly recall any map, diagram, or visual layout you have seen in the past month. You gain a +4 bonus on Knowledge checks to recall information about geography and places, and you never become lost when retracing a path you have traveled before.',
    shortDescription:
      'Perfectly recall maps and visual layouts; +4 Knowledge (geography); never lost on known paths',
    source: 'Heroes of the Wild',
    types: ['general'],
    prerequisites: [{ type: 'ability_score', ability: 'INT', minimum: 13 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.knowledge_geography',
        value: 4,
        source: 'Photographic Memory',
      },
    ],
    activationMode: 'passive',
    tags: ['memory', 'knowledge', 'navigation', 'wild'],
  },

  {
    id: 'planar_survivalist',
    name: 'Planar Survivalist',
    description:
      "You have trained yourself to adapt quickly to alien environments. You treat all planes as if they were your favored terrain. Additionally, you need only 24 hours instead of 1 week to adapt to a new planar environment's traits.",
    shortDescription:
      'Treat all planes as favored terrain; adapt to planar environments in 24 hours',
    source: 'Heroes of the Wild',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'favored terrain' },
      { type: 'skill', skillId: 'knowledge_planes', ranks: 5 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['planar', 'favored terrain', 'ranger', 'wild', 'exploration'],
  },

  {
    id: 'primal_scream',
    name: 'Primal Scream',
    description:
      'As a standard action, you can release a primal scream that shakes the resolve of all enemies within 30 feet. Enemies in range must succeed at a Will save (DC = 10 + 1/2 your character level + your Constitution modifier) or become shaken for 1d4 rounds. This is a mind-affecting fear effect. You can use this ability once per day.',
    shortDescription:
      'Once/day: enemies within 30 ft make Will save or become shaken for 1d4 rounds',
    source: 'Heroes of the Wild',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'bab', minimum: 3 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['fear', 'shaken', 'intimidate', 'wild', 'primal'],
  },

  {
    id: 'restoring_touch',
    name: 'Restoring Touch',
    description:
      'Your touch can cleanse creatures of debilitating conditions. Once per day when you use lay on hands or a healing spell that restores hit points, you can also remove one of the following conditions from the target: blinded, confused, dazzled, deafened, fatigued, frightened, nauseated, shaken, or sickened.',
    shortDescription:
      'Once/day: when healing with lay on hands or healing spell, also remove one debilitating condition',
    source: 'Heroes of the Wild',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      {
        type: 'special',
        description: 'Lay on hands class feature or ability to cast healing spells',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['healing', 'condition removal', 'paladin', 'druid', 'wild'],
  },

  {
    id: 'savage_critical',
    name: 'Savage Critical',
    description:
      'Your critical hits with natural weapons devastate opponents in a primal way. When you score a critical hit with a natural weapon (claw, bite, gore, etc.), the target must succeed at a Fortitude save (DC = 10 + 1/2 your character level + your Strength modifier) or become staggered for 1 round.',
    shortDescription:
      'Critical hits with natural weapons: target must save or become staggered for 1 round',
    source: 'Heroes of the Wild',
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 8 },
      { type: 'special', description: 'Must have at least one natural weapon attack' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['natural weapons', 'critical hit', 'wild', 'stagger'],
  },

  {
    id: 'spirit_of_the_wild',
    name: 'Spirit of the Wild',
    description:
      "You embody the spirit of a particular type of wild terrain or animal. Choose one animal type (bear, eagle, snake, wolf, etc.). You gain a +2 bonus on Perception checks and saving throws against the effects of environmental hazards in that animal's natural habitat. You also gain low-light vision if you do not already have it.",
    shortDescription:
      "+2 Perception and saves vs. environmental hazards in chosen animal's habitat; low-light vision",
    source: 'Heroes of the Wild',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'skill', skillId: 'knowledge_nature', ranks: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.perception',
        value: 2,
        source: 'Spirit of the Wild',
        condition: {
          type: 'custom',
          description: "In chosen animal's natural habitat",
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['wild', 'nature', 'perception', 'spirit', 'totem'],
  },

  {
    id: 'subtle_wildshape',
    name: 'Subtle Wildshape',
    description:
      'You can assume and dismiss your wild shape forms without the usual obvious magical transformation. The transformation is instantaneous and does not produce visual or auditory cues that would normally accompany wild shape. Observers must succeed at a Perception check (DC = 10 + your druid level) to notice you are transforming.',
    shortDescription:
      'Wild shape transformations are subtle; observers need Perception check (DC 10 + druid level) to notice',
    source: 'Heroes of the Wild',
    types: ['general'],
    prerequisites: [{ type: 'class_feature', featureName: 'wild shape' }],
    effects: [],
    activationMode: 'passive',
    tags: ['wild shape', 'druid', 'stealth', 'transformation'],
  },

  {
    id: 'terrain_mastery',
    name: 'Terrain Mastery',
    description:
      'Choose one of your favored terrain types. You gain additional mastery in that terrain. In that terrain, your favored terrain bonus increases by 2. Additionally, you can move through natural difficult terrain in that terrain type at your normal speed.',
    shortDescription:
      "+2 to favored terrain bonus in chosen terrain; move at normal speed through that terrain's natural difficult terrain",
    source: 'Heroes of the Wild',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'favored terrain' },
      { type: 'level', minimum: 6 },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['favored terrain', 'ranger', 'movement', 'wild'],
  },

  {
    id: 'totemic_mastery',
    name: 'Totemic Mastery',
    description:
      'You have an innate connection to the power of totemic animals. Choose three totem animal types (bear, eagle, wolf, etc.). You gain the natural attacks associated with each totem animal as secondary natural attacks. Additionally, you can use wild empathy with magical beasts whose CR is no greater than your character level.',
    shortDescription:
      'Gain secondary natural attacks from three totem animals; use wild empathy with magical beasts',
    source: 'Heroes of the Wild',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'skill', skillId: 'knowledge_nature', ranks: 7 },
      { type: 'feat', featId: 'spirit_of_the_wild' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['totem', 'natural weapons', 'wild empathy', 'wild'],
  },

  {
    id: 'wildspeak',
    name: 'Wildspeak',
    description:
      'You have learned to communicate your basic needs and intentions to wild animals through sound, scent, and body language. While this is not true language, you can convey simple concepts (danger, food, water, direction) to any animal within 30 feet. You also gain a +4 bonus on wild empathy checks when interacting with animals whose type matches your current favored terrain.',
    shortDescription:
      'Convey simple concepts to animals; +4 wild empathy with terrain-matched animals',
    source: 'Heroes of the Wild',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'wild empathy' },
      { type: 'skill', skillId: 'handle_animal', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'wild_empathy',
        value: 4,
        source: 'Wildspeak',
        condition: {
          type: 'custom',
          description: 'When interacting with animals matching current favored terrain',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['animals', 'wild empathy', 'ranger', 'druid', 'communication'],
  },

  {
    id: 'destroy_identity',
    name: 'Destroy Identity',
    description:
      'Your shapechanging abilities are so fluid that you can completely mask all traces of your original identity. While polymorphed or using wild shape, you gain a +10 bonus on Disguise checks to hide your true identity. Magical effects that would reveal your identity (such as true seeing) must succeed at a caster level check (DC = 10 + your character level) to pierce this concealment.',
    shortDescription:
      '+10 Disguise to hide identity in alternate form; magical ID requires CL check to pierce',
    source: 'Heroes of the Wild',
    types: ['general'],
    prerequisites: [
      { type: 'class_feature', featureName: 'wild shape' },
      { type: 'skill', skillId: 'disguise', ranks: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skills.disguise',
        value: 10,
        source: 'Destroy Identity',
        condition: {
          type: 'custom',
          description: 'While polymorphed or using wild shape to conceal identity',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['wild shape', 'disguise', 'identity', 'shapeshifting'],
  },

  // ==================== HEROES OF THE STREETS (2015) ====================
  // Already in database (skipped): Betrayer (miscBooks1), Edge Runner (miscBooks2),
  //   Throat Slicer (miscBooks2), Filthy Weapons (miscBooks2), Cunning Caster (UI),
  //   Intrepid Rescuer (UI), Sense Relationships (UI), Gang Up (APG)

  {
    id: 'accomplished_liar',
    name: 'Accomplished Liar',
    description:
      'You are so practised at lying that you can do so under pressure. You do not suffer a penalty on Bluff checks for preposterous lies or lies that would endanger the listener. Additionally, you can attempt a Bluff check to lie as a free action once per round, though this still requires speaking.',
    shortDescription:
      'No Bluff penalty for wild or dangerous lies; lie as a free action once per round',
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'bluff', ranks: 5 }],
    effects: [],
    activationMode: 'passive',
    tags: ['bluff', 'deception', 'social', 'urban'],
  },

  {
    id: 'black_market_connections',
    name: 'Black Market Connections',
    description:
      'You have established contacts throughout the underworld and can acquire unusual items. When in an urban settlement, you can use Diplomacy to find illegal or restricted goods as if they were available in the settlement at one settlement size larger than actual. You also gain a +4 bonus on Diplomacy checks to gather information in urban areas.',
    shortDescription:
      'Find illegal goods as if settlement is one size larger; +4 Diplomacy to gather urban information',
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'diplomacy', ranks: 3 },
      { type: 'skill', skillId: 'knowledge_local', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skills.diplomacy',
        value: 4,
        source: 'Black Market Connections',
        condition: {
          type: 'custom',
          description: 'When gathering information in urban areas',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['urban', 'black market', 'social', 'diplomacy', 'underworld'],
  },

  {
    id: 'citizen_warrior',
    name: 'Citizen Warrior',
    description:
      'You are a trained fighter who blends in with the civilian population. When you are not wearing armor and not visibly armed (weapon is hidden, sheathed, or stowed), you gain a +2 bonus on Bluff and Diplomacy checks made with NPCs who do not know you as a fighter. You also add half your character level on Disguise checks to appear as a commoner.',
    shortDescription:
      '+2 Bluff/Diplomacy when unarmed; add half level on Disguise to appear as a commoner',
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [
      { type: 'bab', minimum: 1 },
      { type: 'skill', skillId: 'disguise', ranks: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skills.bluff',
        value: 2,
        source: 'Citizen Warrior',
        condition: { type: 'custom', description: 'When not visibly armed or armored', params: {} },
      },
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skills.diplomacy',
        value: 2,
        source: 'Citizen Warrior',
        condition: { type: 'custom', description: 'When not visibly armed or armored', params: {} },
      },
    ],
    activationMode: 'conditional',
    tags: ['urban', 'disguise', 'social', 'streets'],
  },

  {
    id: 'city_sprinter',
    name: 'City Sprinter',
    description:
      'You are accustomed to running through crowded city streets and around urban obstacles. You ignore the movement penalty for moving through crowds and squares with light urban difficult terrain (market stalls, cobblestones, etc.). Additionally, you gain a +4 bonus on Acrobatics checks to move through squares occupied by other creatures.',
    shortDescription:
      'Ignore crowd/light urban difficult terrain; +4 Acrobatics to move through occupied squares',
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'skill', skillId: 'acrobatics', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skills.acrobatics',
        value: 4,
        source: 'City Sprinter',
        condition: {
          type: 'custom',
          description: 'When moving through squares occupied by creatures',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['urban', 'movement', 'acrobatics', 'streets'],
  },

  {
    id: 'covert_orientation',
    name: 'Covert Orientation',
    description:
      'You have trained yourself to observe without appearing to do so. When you use the Perception skill to observe or eavesdrop on someone, you gain a +5 bonus on Bluff checks to appear to not be paying attention. Additionally, you can use the Perception skill to lip-read creatures you can see but not hear at a distance of up to 30 feet.',
    shortDescription:
      '+5 Bluff to appear inattentive while observing; can lip-read targets within 30 ft',
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'perception', ranks: 3 },
      { type: 'skill', skillId: 'bluff', ranks: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skills.bluff',
        value: 5,
        source: 'Covert Orientation',
        condition: {
          type: 'custom',
          description: 'When concealing that you are observing or eavesdropping',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['perception', 'bluff', 'spy', 'urban', 'eavesdrop'],
  },

  {
    id: 'disabling_strike',
    name: 'Disabling Strike',
    description:
      "Your attacks can cripple an opponent's limbs. When you confirm a critical hit against a creature, you can choose to deal the normal critical hit damage and also impose one of the following conditions: –2 penalty to attack rolls (arm/hand), –10 ft movement speed (leg/foot), or –2 penalty on Perception checks (head). The condition lasts for 1 minute.",
    shortDescription:
      'On critical hit: impose –2 attacks, –10 ft speed, or –2 Perception for 1 minute',
    source: 'Heroes of the Streets',
    types: ['combat'],
    prerequisites: [{ type: 'bab', minimum: 6 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['critical hit', 'combat', 'cripple', 'streets'],
  },

  {
    id: 'distraction_hots',
    name: 'Distraction',
    description:
      'As a standard action, you can create a distraction that draws attention away from a nearby ally. Make a Bluff check against the Sense Motive check of all creatures within 30 feet that you choose. Those who fail cannot make attacks of opportunity or use immediate actions until the start of your next turn. A creature that succeeds is immune to this ability for 24 hours.',
    shortDescription:
      "Standard action: Bluff vs. Sense Motive in 30 ft — failures can't make AoOs or immediate actions until your next turn",
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'bluff', ranks: 5 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['bluff', 'distraction', 'social', 'urban', 'combat'],
  },

  {
    id: 'eye_for_ingredients',
    name: 'Eye for Ingredients',
    description:
      'You have developed a sharp eye for alchemical components and reagents available in urban markets. When in a settlement of small town size or larger, you can use Perception in place of Appraise to identify alchemical items and reagents. You also gain a +4 bonus on Appraise checks to determine the value of alchemical components.',
    shortDescription:
      'Use Perception instead of Appraise for alchemical items; +4 Appraise on alchemical components',
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'perception', ranks: 3 },
      { type: 'skill', skillId: 'craft_alchemy', ranks: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.appraise',
        value: 4,
        source: 'Eye for Ingredients',
        condition: {
          type: 'custom',
          description: 'When appraising alchemical components',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['alchemy', 'appraise', 'perception', 'urban'],
  },

  {
    id: 'eye_of_the_beholder',
    name: 'Eye of the Beholder',
    description:
      "You know how to use appearance to your advantage. When you succeed at a Diplomacy check to improve a creature's attitude by two or more steps, you can immediately make a Bluff check (DC equal to the creature's Sense Motive check result) as a free action to plant a false suggestion in the euphoric moment of goodwill.",
    shortDescription:
      'After improving attitude by 2+ steps, free Bluff check to implant a false suggestion',
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'skill', skillId: 'bluff', ranks: 5 },
      { type: 'skill', skillId: 'diplomacy', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['bluff', 'diplomacy', 'social', 'urban', 'deception'],
  },

  {
    id: 'familiar_face',
    name: 'Familiar Face',
    description:
      "You have a forgettable, pleasant face that people instinctively trust. You gain a +2 bonus on Bluff checks to pass yourself off as someone's acquaintance. When using Disguise to appear as a specific individual, you only take a –5 penalty (instead of the normal –10 penalty) on your Disguise check.",
    shortDescription:
      '+2 Bluff to pose as an acquaintance; only –5 (not –10) when disguised as a specific person',
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 3 },
      { type: 'skill', skillId: 'disguise', ranks: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skills.bluff',
        value: 2,
        source: 'Familiar Face',
        condition: {
          type: 'custom',
          description: "When passing yourself off as someone's acquaintance",
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['bluff', 'disguise', 'social', 'urban', 'identity'],
  },

  {
    id: 'flamboyant_arcana',
    name: 'Flamboyant Arcana',
    description:
      'You can use panache and deeds as a spellcaster. You gain 1 point of panache, which refreshes daily. You can expend 1 point of panache when you cast a spell to make it appear as though it originated from a prop, trinket, or theatrical gesture, adding a +2 bonus to the DC of Spellcraft checks to identify your spell.',
    shortDescription:
      'Gain 1 panache/day; spend it when casting to make spell identification harder (+2 Spellcraft DC)',
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'special', description: 'Ability to cast arcane spells' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['panache', 'arcane', 'spellcasting', 'urban', 'performance'],
  },

  {
    id: 'friend_in_every_town',
    name: 'Friend in Every Town',
    description:
      'Wherever you go, you can find someone who owes you a favor or shares your interests. When you arrive at any settlement of hamlet size or larger, you can spend 1 hour seeking contacts. After this time, you find one NPC contact who will provide minor assistance: shelter for a night, information about local rumors, or a single small favor (GM discretion).',
    shortDescription:
      'In any hamlet+ settlement, 1 hour of searching finds an NPC willing to give minor assistance',
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'skill', skillId: 'diplomacy', ranks: 5 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['social', 'contacts', 'diplomacy', 'urban', 'networking'],
  },

  {
    id: 'guileful_polyglot',
    name: 'Guileful Polyglot',
    description:
      "Your facility with languages includes a talent for linguistic deception. You can mimic the accent, dialect, or cant of any language you speak to pass yourself off as a native speaker with a Linguistics check (DC 15). You also gain a +2 bonus on Linguistics checks to decipher coded messages and can recognize thieves' cant with a DC 10 Perception check.",
    shortDescription:
      "+2 Linguistics to decipher codes; mimic accents of known languages (DC 15); recognize thieves' cant",
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'linguistics', ranks: 3 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'skills.linguistics',
        value: 2,
        source: 'Guileful Polyglot',
        condition: { type: 'custom', description: 'When deciphering coded messages', params: {} },
      },
    ],
    activationMode: 'passive',
    tags: ['linguistics', 'languages', 'urban', 'deception', 'spy'],
  },

  {
    id: 'gutsy_gamble',
    name: 'Gutsy Gamble',
    description:
      'You have nerves of steel and thrive on high-stakes situations. When you make an attack, skill check, or saving throw in a situation where failure would have a significant consequence (GM discretion), you gain a +1 bonus on the roll for each ally currently in a significantly endangered condition (staggered, frightened, or at negative hit points). Maximum +4.',
    shortDescription:
      '+1/endangered ally (max +4) on attacks, skills, or saves in high-stakes situations',
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [{ type: 'ability_score', ability: 'CHA', minimum: 13 }],
    effects: [],
    activationMode: 'conditional',
    tags: ['morale', 'risk', 'gamble', 'streets', 'underworld'],
  },

  {
    id: 'hidden_magic',
    name: 'Hidden Magic',
    description:
      "You can disguise your spellcasting to look like ordinary gestures or mundane activity. When you cast a spell, you can make a Bluff check to disguise the casting. The DC of the Bluff check equals the observer's Spellcraft check result. You take a –2 penalty on your concentration check when doing so.",
    shortDescription: 'Bluff vs. Spellcraft to disguise spellcasting; –2 concentration penalty',
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'bluff', ranks: 3 },
      { type: 'special', description: 'Ability to cast spells' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['spellcasting', 'bluff', 'deception', 'urban', 'spy'],
  },

  {
    id: 'innocent_facade',
    name: 'Innocent Facade',
    description:
      'You project an air of harmless innocence that causes enemies to underestimate you. When you use the Bluff skill to create a diversion to hide (for Stealth), you gain a +4 bonus on the Bluff check. Additionally, when a creature that has not seen you act violently first perceives you, it treats you as a non-threat for the purpose of determining target priority unless you have given it reason to think otherwise.',
    shortDescription:
      '+4 Bluff to create diversions for Stealth; hostile creatures deprioritize you as a target',
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'skill', skillId: 'bluff', ranks: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skills.bluff',
        value: 4,
        source: 'Innocent Facade',
        condition: {
          type: 'custom',
          description: 'When creating a diversion to hide using Stealth',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['bluff', 'stealth', 'deception', 'urban', 'social'],
  },

  {
    id: 'market_savvy',
    name: 'Market Savvy',
    description:
      'You know how to navigate markets and negotiate prices. When in an urban settlement, you can buy items for 10% less than the listed price and sell items for 10% more than the default price. You gain a +4 bonus on Appraise checks in urban settings, and you always know the approximate going rate for common goods and services.',
    shortDescription: 'Buy for 10% less, sell for 10% more; +4 Appraise in urban settings',
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'appraise', ranks: 3 },
      { type: 'skill', skillId: 'diplomacy', ranks: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.COMPETENCE,
        target: 'skills.appraise',
        value: 4,
        source: 'Market Savvy',
        condition: { type: 'custom', description: 'In urban settlements', params: {} },
      },
    ],
    activationMode: 'passive',
    tags: ['appraise', 'trade', 'urban', 'diplomacy', 'commerce'],
  },

  {
    id: 'perceptive_tracking',
    name: 'Perceptive Tracking',
    description:
      'You can use Perception in addition to Survival to follow tracks. When tracking, you may roll both Perception and Survival and use the higher result. You also gain a +2 bonus on Survival checks to track in urban environments (streets, sewers, buildings).',
    shortDescription:
      'Use Perception or Survival (whichever is higher) to track; +2 Survival to track in urban areas',
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'perception', ranks: 3 },
      { type: 'feat', featId: 'skill_focus_survival' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skills.survival',
        value: 2,
        source: 'Perceptive Tracking',
        condition: {
          type: 'custom',
          description: 'When tracking in urban environments',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['tracking', 'survival', 'perception', 'urban', 'streets'],
  },

  {
    id: 'quick_disguise',
    name: 'Quick Disguise',
    description:
      'You can assume disguises with remarkable speed. You can don or remove a disguise in one-quarter the normal time. You can create a disguise in 2d4 minutes instead of the normal 1d3×10 minutes. Additionally, you can make a single Disguise check as a standard action that only applies to one feature (hair color, hat, cloak) rather than a full disguise.',
    shortDescription:
      'Don/remove disguise in 1/4 normal time; create disguise in 2d4 minutes; partial disguise as standard action',
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [{ type: 'skill', skillId: 'disguise', ranks: 3 }],
    effects: [],
    activationMode: 'passive',
    tags: ['disguise', 'speed', 'urban', 'spy', 'streets'],
  },

  {
    id: 'signature_move_hots',
    name: 'Signature Move',
    description:
      'You have a trademark combat technique that enemies learn to fear. Choose one combat maneuver or specific attack type. When you successfully use that signature move in combat, all enemies that witnessed it must succeed at a Will save (DC = 10 + 1/2 your BAB + your Strength or Dexterity modifier) or be shaken for 1 round.',
    shortDescription:
      'Chosen combat maneuver: witnesses must save or be shaken 1 round on your success',
    source: 'Heroes of the Streets',
    types: ['combat'],
    prerequisites: [
      { type: 'bab', minimum: 5 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['combat', 'intimidate', 'fear', 'streets', 'maneuver'],
  },

  {
    id: 'solid_stance',
    name: 'Solid Stance',
    description:
      'You are difficult to move when you plant your feet. You gain a +4 bonus to your CMD against bull rush, drag, overrun, and reposition combat maneuvers. This bonus increases to +6 if you are standing on solid stone or packed earth. You can activate this stance as a free action at the start of your turn.',
    shortDescription:
      '+4 CMD vs. bull rush/drag/overrun/reposition; +6 on solid stone or packed earth',
    source: 'Heroes of the Streets',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 13 },
      { type: 'bab', minimum: 1 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'combat.cmd',
        value: 4,
        source: 'Solid Stance',
        condition: {
          type: 'custom',
          description: 'vs. bull rush, drag, overrun, and reposition maneuvers',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['CMD', 'combat', 'defense', 'streets', 'maneuver defense'],
  },

  {
    id: 'street_style',
    name: 'Street Style',
    description:
      'You fight with the improvised, unpredictable style common to street brawlers. While using Street Style, your unarmed strikes and attacks with improvised weapons threaten critical hits on a 19–20. Enemies who have not seen you fight before are flat-footed against your first attack each round while you use this style.',
    shortDescription:
      'Unarmed and improvised weapons crit on 19–20; previously unseen enemies are flat-footed to your first attack',
    source: 'Heroes of the Streets',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'perception', ranks: 3 },
      { type: 'bab', minimum: 3 },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['style', 'unarmed', 'improvised weapons', 'streets', 'brawl'],
  },

  {
    id: 'urban_grace',
    name: 'Urban Grace',
    description:
      'You move through city environments with fluid ease. You treat urban terrain (cobblestones, market crowds, tight alleys) as normal terrain rather than difficult terrain. You also gain a +2 bonus on Acrobatics checks in urban environments and can take 10 on Acrobatics checks to move through threatened squares even in combat.',
    shortDescription:
      'Urban terrain counts as normal terrain; +2 Acrobatics in cities; take 10 on Acrobatics in combat to avoid AoOs',
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [{ type: 'ability_score', ability: 'DEX', minimum: 13 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skills.acrobatics',
        value: 2,
        source: 'Urban Grace',
        condition: { type: 'custom', description: 'In urban environments', params: {} },
      },
    ],
    activationMode: 'passive',
    tags: ['urban', 'movement', 'acrobatics', 'streets'],
  },

  {
    id: 'underworld_connections',
    name: 'Underworld Connections',
    description:
      "You have deep ties to criminal organizations and underground networks. You gain a +4 bonus on Diplomacy and Knowledge (local) checks when dealing with or seeking information about criminal organizations, thieves' guilds, or underground figures. Additionally, you can request minor favors from underworld contacts once per week without payment.",
    shortDescription:
      '+4 Diplomacy/Knowledge (local) with criminal organizations; weekly minor favor from underworld contacts',
    source: 'Heroes of the Streets',
    types: ['general'],
    prerequisites: [
      { type: 'skill', skillId: 'diplomacy', ranks: 5 },
      { type: 'skill', skillId: 'knowledge_local', ranks: 5 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skills.diplomacy',
        value: 4,
        source: 'Underworld Connections',
        condition: {
          type: 'custom',
          description: 'When dealing with criminal organizations or underground figures',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'skills.knowledge_local',
        value: 4,
        source: 'Underworld Connections',
        condition: {
          type: 'custom',
          description: 'When seeking information about criminal organizations',
          params: {},
        },
      },
    ],
    activationMode: 'passive',
    tags: ['urban', 'social', 'underworld', 'contacts', 'diplomacy'],
  },

  {
    id: 'linked_resonance',
    name: 'Linked Resonance',
    description:
      "You and an ally who also has this feat have developed a mental shorthand that lets you anticipate each other's actions. When adjacent to an ally who has this feat, you both gain a +1 bonus on attack rolls and a +1 bonus on saving throws. If you have the same archetype or at least 5 levels in the same class, this bonus increases to +2.",
    shortDescription:
      'Both +1 attack and saves when adjacent to a Linked Resonance ally; +2 if same class/archetype',
    source: 'Heroes of the Streets',
    types: ['general', 'teamwork'],
    prerequisites: [{ type: 'bab', minimum: 3 }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'combat.attack_rolls',
        value: 1,
        source: 'Linked Resonance',
        condition: {
          type: 'custom',
          description: 'When adjacent to an ally who has Linked Resonance',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'saves.all',
        value: 1,
        source: 'Linked Resonance',
        condition: {
          type: 'custom',
          description: 'When adjacent to an ally who has Linked Resonance',
          params: {},
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['teamwork', 'urban', 'bonds', 'streets', 'coordination'],
  },
];
