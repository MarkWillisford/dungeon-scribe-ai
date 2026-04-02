import { BonusType } from '@/types/base';
import type { TraitDefinition } from '@/types/traits';

export const PEOPLE_NORTH_RIVER_TRAITS: TraitDefinition[] = [
  // ─── Pathfinder Player Companion: People of the North ────────────────────────

  {
    id: 'big_game_hunter',
    name: 'Big Game Hunter',
    description:
      'You have spent years hunting the megafauna and great beasts of the Realm of the Mammoth Lords, learning to exploit their weak points. You gain a +1 trait bonus on damage rolls against creatures of Large size or larger.',
    shortDescription: '+1 trait bonus on damage rolls against Large or larger creatures.',
    source: 'Pathfinder Player Companion: People of the North',
    category: 'regional',
    subcategory: 'Realm of the Mammoth Lords',
    prerequisites: [{ type: 'region', regionName: 'Realm of the Mammoth Lords' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.melee',
        value: 1,
        source: 'Big Game Hunter',
        condition: { type: 'custom', description: 'Against Large or larger creatures', params: {} },
      },
    ],
    tags: ['mammoth-lords', 'damage', 'large-creatures', 'hunting'],
  },

  {
    id: 'call_of_the_longships',
    name: 'Call of the Longships',
    description:
      'The sea and the longships of the Linnorm Kings call to you as surely as they call to any Ulfen warrior. You gain a +1 trait bonus on Profession (sailor) checks. In addition, while aboard a vessel at sea, you gain a +1 trait bonus on attack rolls.',
    shortDescription: '+1 Profession (sailor); +1 attack rolls while aboard a vessel at sea.',
    source: 'Pathfinder Player Companion: People of the North',
    category: 'regional',
    subcategory: 'Lands of the Linnorm Kings',
    prerequisites: [{ type: 'region', regionName: 'Lands of the Linnorm Kings' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.profession_sailor',
        value: 1,
        source: 'Call of the Longships',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Call of the Longships',
        condition: { type: 'custom', description: 'While aboard a vessel at sea', params: {} },
      },
    ],
    tags: ['linnorm-kings', 'sailor', 'attack', 'ship'],
  },

  {
    id: 'huldras_luck',
    name: "Huldra's Luck",
    description:
      'The woodland huldra of the Linnorm Kings have blessed you with a portion of their fey fortune. Once per day, when you roll a d20, you may treat the result as a 10 instead of the actual roll.',
    shortDescription: 'Once per day, treat any d20 roll as a 10.',
    source: 'Pathfinder Player Companion: People of the North',
    category: 'regional',
    subcategory: 'Lands of the Linnorm Kings',
    prerequisites: [{ type: 'region', regionName: 'Lands of the Linnorm Kings' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.d20_roll',
        value: 0,
        source: "Huldra's Luck",
        condition: { type: 'custom', description: 'Once per day', params: {} },
      },
    ],
    tags: ['linnorm-kings', 'luck', 'fey', 'd20'],
  },

  {
    id: 'chillblight_emissary',
    name: 'Chillblight Emissary',
    description:
      'Your time in the frozen kingdom of Irrisen has given you an unnaturally cold constitution. You gain DR 1/cold iron. However, whenever you are struck by a cold iron weapon, you become sickened for 1 round.',
    shortDescription: 'DR 1/cold iron; become sickened for 1 round when struck by cold iron.',
    source: 'Pathfinder Player Companion: People of the North',
    category: 'regional',
    subcategory: 'Irrisen',
    prerequisites: [{ type: 'region', regionName: 'Irrisen' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'dr',
        value: 1,
        source: 'Chillblight Emissary',
        condition: { type: 'custom', description: 'DR 1/cold iron', params: {} },
      },
    ],
    tags: ['irrisen', 'dr', 'cold-iron', 'sickened'],
  },

  {
    id: 'warded_against_witchery',
    name: 'Warded Against Witchery',
    description:
      'Training in Mendev has taught you to resist the arcane magics of those who would corrupt and enslave. You gain a +1 trait bonus on saving throws against spells and spell-like abilities cast by evil arcane spellcasters. You also gain a +1 trait bonus on Spellcraft checks made to identify spells cast by evil arcane spellcasters.',
    shortDescription: '+1 saves and Spellcraft against spells from evil arcane casters.',
    source: 'Pathfinder Player Companion: People of the North',
    category: 'regional',
    subcategory: 'Mendev',
    prerequisites: [{ type: 'region', regionName: 'Mendev' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Warded Against Witchery',
        condition: {
          type: 'custom',
          description: 'Against spells from evil arcane spellcasters',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.spellcraft',
        value: 1,
        source: 'Warded Against Witchery',
        condition: {
          type: 'custom',
          description: 'To identify spells from evil arcane spellcasters',
          params: {},
        },
      },
    ],
    tags: ['mendev', 'saves', 'spellcraft', 'evil', 'arcane'],
  },

  {
    id: 'glint_tongued',
    name: 'Glint-Tongued',
    description:
      'You have the silver tongue and fierce demeanor of the Ulfen people. You gain a +2 trait bonus on Intimidate checks.',
    shortDescription: '+2 trait bonus on Intimidate checks.',
    source: 'Pathfinder Player Companion: People of the North',
    category: 'race',
    subcategory: 'Ulfen',
    prerequisites: [{ type: 'special', description: 'Ulfen ethnicity' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 2,
        source: 'Glint-Tongued',
      },
    ],
    tags: ['ulfen', 'intimidate', 'human'],
  },

  {
    id: 'honor_driven',
    name: 'Honor-Driven',
    description:
      'The Ulfen code of honor has sharpened your ability to read the sincerity of others. You gain a +1 trait bonus on Sense Motive checks, and Sense Motive is always a class skill for you.',
    shortDescription: '+1 Sense Motive; Sense Motive is a class skill.',
    source: 'Pathfinder Player Companion: People of the North',
    category: 'race',
    subcategory: 'Ulfen',
    prerequisites: [{ type: 'special', description: 'Ulfen ethnicity' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive',
        value: 1,
        source: 'Honor-Driven',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.sense_motive',
        value: 0,
        source: 'Honor-Driven',
      },
    ],
    tags: ['ulfen', 'sense-motive', 'class-skill', 'human'],
  },

  {
    id: 'wary_of_danger',
    name: 'Wary of Danger',
    description:
      'Growing up among the nomadic Kellid tribes has honed your survival instincts to a razor edge. You gain a +2 trait bonus on initiative checks.',
    shortDescription: '+2 trait bonus on initiative checks.',
    source: 'Pathfinder Player Companion: People of the North',
    category: 'race',
    subcategory: 'Kellid',
    prerequisites: [{ type: 'special', description: 'Kellid ethnicity' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 2,
        source: 'Wary of Danger',
      },
    ],
    tags: ['kellid', 'initiative', 'human'],
  },

  {
    id: 'storied_scars',
    name: 'Storied Scars',
    description:
      'Your scars tell the tale of your battles and earn you respect from your Kellid kin while marking you as a warrior to outsiders. You gain a +1 trait bonus on Diplomacy checks against Kellid creatures and a +1 trait bonus on Intimidate checks against non-Kellid creatures.',
    shortDescription: '+1 Diplomacy vs Kellids; +1 Intimidate vs non-Kellids.',
    source: 'Pathfinder Player Companion: People of the North',
    category: 'race',
    subcategory: 'Kellid',
    prerequisites: [{ type: 'special', description: 'Kellid ethnicity' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Storied Scars',
        condition: { type: 'custom', description: 'Against Kellid creatures', params: {} },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Storied Scars',
        condition: { type: 'custom', description: 'Against non-Kellid creatures', params: {} },
      },
    ],
    tags: ['kellid', 'diplomacy', 'intimidate', 'human'],
  },

  {
    id: 'jadwiga_scion',
    name: 'Jadwiga Scion',
    description:
      'You are descended from the witch-queens of Irrisen and carry their imperious bearing. Intimidate is always a class skill for you, and you gain a +1 trait bonus on Intimidate checks. You also gain a +1 trait bonus on Knowledge (nobility) checks regarding Irrisen and its ruling families.',
    shortDescription: '+1 Intimidate (class skill); +1 Knowledge (nobility) for Irrisen.',
    source: 'Pathfinder Player Companion: People of the North',
    category: 'race',
    subcategory: 'Jadwiga',
    prerequisites: [{ type: 'special', description: 'Jadwiga ethnicity' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Jadwiga Scion',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.intimidate',
        value: 0,
        source: 'Jadwiga Scion',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nobility',
        value: 1,
        source: 'Jadwiga Scion',
        condition: {
          type: 'custom',
          description: 'Regarding Irrisen and its ruling families',
          params: {},
        },
      },
    ],
    tags: ['jadwiga', 'irrisen', 'intimidate', 'knowledge-nobility', 'human'],
  },

  {
    id: 'snowblooded',
    name: 'Snowblooded',
    description:
      'The cold magic of the Snowcaster elves flows through you, granting you unusual resistance to cold. You gain a +4 trait bonus on Fortitude saves against the effects of nonlethal cold damage, and a +1 trait bonus on saving throws against spells with the cold descriptor.',
    shortDescription: '+4 Fort vs nonlethal cold damage; +1 saves vs cold spells.',
    source: 'Pathfinder Player Companion: People of the North',
    category: 'race',
    subcategory: 'Snowcaster Elf',
    prerequisites: [{ type: 'race', raceName: 'Elf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.fortitude',
        value: 4,
        source: 'Snowblooded',
        condition: { type: 'custom', description: 'Against nonlethal cold damage', params: {} },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Snowblooded',
        condition: {
          type: 'custom',
          description: 'Against spells with the cold descriptor',
          params: {},
        },
      },
    ],
    tags: ['elf', 'snowcaster', 'cold', 'fortitude', 'saves'],
  },

  {
    id: 'snowstepper',
    name: 'Snowstepper',
    description:
      'You have lived your entire life in snow-laden lands and move through deep snow as easily as other creatures move through open terrain. You ignore the movement penalties of snow and ice terrain.',
    shortDescription: 'Ignore movement penalties from snow and ice difficult terrain.',
    source: 'Pathfinder Player Companion: People of the North',
    category: 'race',
    subcategory: 'Gnome',
    prerequisites: [{ type: 'race', raceName: 'Gnome' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'speed.base',
        value: 0,
        source: 'Snowstepper',
        condition: {
          type: 'custom',
          description: 'Ignore difficult terrain from snow and ice',
          params: {},
        },
      },
    ],
    tags: ['gnome', 'snow', 'difficult-terrain', 'movement'],
  },

  {
    id: 'varki_landspeaker',
    name: 'Varki Landspeaker',
    description:
      'Your Varki blood connects you to the frozen tundra and teaches you to read the land. You gain a +1 trait bonus on Survival checks in arctic environments. In addition, once per day you may add a +5 bonus to a single Survival check made to track, forage for food and water, or find shelter.',
    shortDescription:
      '+1 Survival in arctic; once per day +5 to a tracking, foraging, or shelter Survival check.',
    source: 'Pathfinder Player Companion: People of the North',
    category: 'race',
    subcategory: 'Varki',
    prerequisites: [{ type: 'special', description: 'Varki ethnicity' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Varki Landspeaker',
        condition: { type: 'custom', description: 'In arctic environments', params: {} },
      },
    ],
    tags: ['varki', 'survival', 'arctic', 'tracking', 'human'],
  },

  // ─── Pathfinder Player Companion: People of the River ────────────────────────

  {
    id: 'blighted_physiology',
    name: 'Blighted Physiology',
    description:
      'Exposure to the strange energies of Numeria has altered your body in subtle ways. You gain a +1 natural armor bonus to AC. However, whenever you receive magical healing, you become sickened for 1 round as your body struggles against the natural magic.',
    shortDescription: '+1 natural armor; sickened for 1 round when magically healed.',
    source: 'Pathfinder Player Companion: People of the River',
    category: 'regional',
    subcategory: 'Numeria',
    prerequisites: [{ type: 'region', regionName: 'Numeria' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.NATURAL,
        target: 'ac',
        value: 1,
        source: 'Blighted Physiology',
      },
    ],
    tags: ['numeria', 'natural-armor', 'ac', 'sickened', 'healing'],
  },

  {
    id: 'mivoni_duelist',
    name: 'Mivoni Duelist',
    description:
      'You have trained in the dueling traditions of Mivon, where victory in single combat is paramount. When you are the only creature threatening an opponent, you gain a +1 trait bonus on damage rolls against that opponent.',
    shortDescription: '+1 damage when you are the sole creature threatening the target.',
    source: 'Pathfinder Player Companion: People of the River',
    category: 'regional',
    subcategory: 'Mivon',
    prerequisites: [{ type: 'region', regionName: 'Mivon' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage.melee',
        value: 1,
        source: 'Mivoni Duelist',
        condition: {
          type: 'custom',
          description: 'When you are the only creature threatening the target',
          params: {},
        },
      },
    ],
    tags: ['mivon', 'damage', 'duelist', 'flanking'],
  },

  {
    id: 'noble_in_exile',
    name: 'Noble in Exile',
    description:
      'You are of noble birth but have been driven from your homeland of Gralton and have learned to use your bearing both to impress and intimidate. You gain a +1 trait bonus on Diplomacy checks against nobles and a +1 trait bonus on Intimidate checks against commoners.',
    shortDescription: '+1 Diplomacy vs nobles; +1 Intimidate vs commoners.',
    source: 'Pathfinder Player Companion: People of the River',
    category: 'regional',
    subcategory: 'Gralton',
    prerequisites: [{ type: 'region', regionName: 'Gralton' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Noble in Exile',
        condition: { type: 'custom', description: 'Against nobles', params: {} },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 1,
        source: 'Noble in Exile',
        condition: { type: 'custom', description: 'Against commoners', params: {} },
      },
    ],
    tags: ['gralton', 'diplomacy', 'intimidate', 'noble'],
  },

  {
    id: 'sevenarches_seeker',
    name: 'Sevenarches Seeker',
    description:
      'You have studied the mysterious elven Sevenarches and are trained to find hidden passages and ancient secrets. Knowledge (history) is always a class skill for you. In addition, you gain a +1 trait bonus on Perception checks to notice secret doors and passages.',
    shortDescription: 'Knowledge (history) is a class skill; +1 Perception to notice secret doors.',
    source: 'Pathfinder Player Companion: People of the River',
    category: 'regional',
    subcategory: 'Sevenarches',
    prerequisites: [{ type: 'region', regionName: 'Sevenarches' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.knowledge_history',
        value: 0,
        source: 'Sevenarches Seeker',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 1,
        source: 'Sevenarches Seeker',
        condition: {
          type: 'custom',
          description: 'To notice secret doors and passages',
          params: {},
        },
      },
    ],
    tags: ['sevenarches', 'perception', 'secret-doors', 'knowledge-history', 'class-skill'],
  },

  {
    id: 'fey_wise',
    name: 'Fey-Wise',
    description:
      'Living near the Sevenarches has taught you to recognize and resist the tricks of fey creatures. You gain a +1 trait bonus on saving throws against spell-like and supernatural abilities of fey creatures. You also gain a +1 trait bonus on Sense Motive checks against fey creatures.',
    shortDescription:
      '+1 saves vs fey spell-like and supernatural abilities; +1 Sense Motive vs fey.',
    source: 'Pathfinder Player Companion: People of the River',
    category: 'regional',
    subcategory: 'Sevenarches',
    prerequisites: [{ type: 'region', regionName: 'Sevenarches' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Fey-Wise',
        condition: {
          type: 'custom',
          description: 'Against spell-like and supernatural abilities of fey creatures',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.sense_motive',
        value: 1,
        source: 'Fey-Wise',
        condition: { type: 'custom', description: 'Against fey creatures', params: {} },
      },
    ],
    tags: ['sevenarches', 'fey', 'saves', 'sense-motive'],
  },

  {
    id: 'river_acumen',
    name: 'River Acumen',
    description:
      'You have spent years traveling the rivers of the River Kingdoms, learning to read currents, find ford crossings, and forage along riverbanks. You gain a +2 trait bonus on Swim checks in rivers and on Survival checks to forage for food and water near rivers.',
    shortDescription: '+2 Swim in rivers; +2 Survival to forage near rivers.',
    source: 'Pathfinder Player Companion: People of the River',
    category: 'faith',
    subcategory: 'River Kingdoms',
    prerequisites: [{ type: 'region', regionName: 'River Kingdoms' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.swim',
        value: 2,
        source: 'River Acumen',
        condition: { type: 'custom', description: 'In rivers', params: {} },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 2,
        source: 'River Acumen',
        condition: {
          type: 'custom',
          description: 'To forage for food and water near rivers',
          params: {},
        },
      },
    ],
    tags: ['river-kingdoms', 'swim', 'survival', 'foraging'],
  },

  {
    id: 'brevoy_bandit',
    name: 'Brevoy Bandit',
    description:
      "You were raised among Brevoy's turbulent border regions, where survival meant knowing when to fight and when to disappear. You gain a +1 trait bonus on Disable Device checks, and Disable Device is always a class skill for you.",
    shortDescription: '+1 Disable Device; Disable Device is a class skill.',
    source: 'Pathfinder Player Companion: People of the River',
    category: 'regional',
    subcategory: 'Brevoy',
    prerequisites: [{ type: 'region', regionName: 'Brevoy' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.disable_device',
        value: 1,
        source: 'Brevoy Bandit',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'class_skill.disable_device',
        value: 0,
        source: 'Brevoy Bandit',
      },
    ],
    tags: ['brevoy', 'disable-device', 'class-skill'],
  },

  {
    id: 'wasteland_hunter',
    name: 'Wasteland Hunter',
    description:
      'Your Kellid upbringing taught you to bring down prey at distance with thrown weapons. When throwing spears or javelins, you treat the range increment penalty as 2 less than it would otherwise be (minimum 0).',
    shortDescription: 'Reduce range increment penalty by 2 for thrown spears and javelins.',
    source: 'Pathfinder Player Companion: People of the River',
    category: 'race',
    subcategory: 'Kellid',
    prerequisites: [{ type: 'special', description: 'Kellid ethnicity' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.range_increment_penalty',
        value: 0,
        source: 'Wasteland Hunter',
        condition: {
          type: 'custom',
          description: 'When throwing spears or javelins; reduce penalty by 2',
          params: {},
        },
      },
    ],
    tags: ['kellid', 'thrown-weapons', 'spear', 'javelin', 'range', 'human'],
  },

  {
    id: 'pragmatic_polytheist',
    name: 'Pragmatic Polytheist',
    description:
      'The Kellid people acknowledge many spirits and gods without pledging exclusive devotion to any single one. You may attempt Knowledge (religion) checks untrained. In addition, once per day you can invoke the protection of the spirits to gain resist energy 5 against one energy type of your choice for 1 minute.',
    shortDescription: 'Know (religion) untrained; once per day gain resist energy 5 for 1 minute.',
    source: 'Pathfinder Player Companion: People of the River',
    category: 'race',
    subcategory: 'Kellid',
    prerequisites: [{ type: 'special', description: 'Kellid ethnicity' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'skill.knowledge_religion',
        value: 0,
        source: 'Pragmatic Polytheist',
        condition: { type: 'custom', description: 'May be used untrained', params: {} },
      },
    ],
    tags: ['kellid', 'knowledge-religion', 'energy-resistance', 'human'],
  },

  {
    id: 'destined_pioneer',
    name: 'Destined Pioneer',
    description:
      'You are driven by manifest destiny to tame the wild frontiers of the world. Once per day, you may ignore the movement penalties of a single type of nonmagical difficult terrain (chosen when you select this trait) for 1 minute.',
    shortDescription:
      'Once per day, ignore nonmagical difficult terrain of one chosen type for 1 minute.',
    source: 'Pathfinder Player Companion: People of the River',
    category: 'race',
    subcategory: 'Taldan',
    prerequisites: [{ type: 'special', description: 'Taldan ethnicity' }],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'speed.base',
        value: 0,
        source: 'Destined Pioneer',
        condition: {
          type: 'custom',
          description: 'Once per day; ignore one type of nonmagical difficult terrain for 1 minute',
          params: {},
        },
      },
    ],
    tags: ['taldan', 'difficult-terrain', 'movement', 'human'],
  },
];

// CHECKPOINT: last_written=destined_pioneer, written=23/23, status=complete
