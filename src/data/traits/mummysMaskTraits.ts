import { BonusType } from '@/types/base';
import type { TraitDefinition } from '@/types/traits';

export const MUMMYS_MASK_TRAITS: TraitDefinition[] = [
  {
    id: 'blood_of_pharaohs',
    name: 'Blood of Pharaohs',
    description:
      "Long ago, one of your ancestors ruled over the lands of Osirion. Although you are many generations removed and the line of descent is hard to prove, his or her blood still runs in your veins. You gain a +1 trait bonus on Will saves and a +1 trait bonus on Knowledge (nobility) checks, and Knowledge (nobility) is always a class skill for you. You may also select Ancient Osiriani as a bonus language.",
    shortDescription:
      '+1 Will saves, +1 Knowledge (nobility) (class skill), and Ancient Osiriani as a bonus language.',
    source: "Mummy's Mask Player's Guide",
    category: 'campaign',
    subcategory: "Mummy's Mask",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Blood of Pharaohs',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_nobility',
        value: 1,
        source: 'Blood of Pharaohs',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'skill.knowledge_nobility_class_skill',
        value: 0,
        source: 'Blood of Pharaohs',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'language.ancient_osiriani',
        value: 0,
        source: 'Blood of Pharaohs',
      },
    ],
    tags: ['osirion', 'will-save', 'knowledge-nobility', 'language'],
  },

  {
    id: 'devotee_of_the_old_gods',
    name: 'Devotee of the Old Gods',
    description:
      "Your family has long venerated the ancient deities of Osirion—gods such as Anubis, Osiris, Ra, and Set—maintaining their faith despite the religious shifts in modern Osirion. You gain a +1 trait bonus on Knowledge (history) and Knowledge (religion) checks, and one of those two skills (your choice) is always a class skill for you. You also gain a +1 trait bonus on saving throws against divine magic.",
    shortDescription:
      '+1 Knowledge (history) and Knowledge (religion); one becomes a class skill; +1 saves vs. divine magic.',
    source: "Mummy's Mask Player's Guide",
    category: 'campaign',
    subcategory: "Mummy's Mask",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_history',
        value: 1,
        source: 'Devotee of the Old Gods',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_religion',
        value: 1,
        source: 'Devotee of the Old Gods',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Devotee of the Old Gods',
        condition: {
          type: 'custom',
          description: 'Against divine magic',
          params: {},
        },
      },
    ],
    choices: [
      {
        type: 'skill',
        label: 'Choose a class skill',
        options: [
          'Knowledge (history)',
          'Knowledge (religion)',
        ],
        affectsEffects: false,
      },
    ],
    tags: ['osirion', 'religion', 'history', 'divine-magic', 'saving-throw'],
  },

  {
    id: 'foreign_opportunist',
    name: 'Foreign Opportunist',
    description:
      "You are an outsider to Osirion who has come to profit from the looting of ancient tombs, particularly those in the newly opened necropolis of Wati. You gain a +2 trait bonus on Appraise checks, and Appraise is always a class skill for you. In addition, you can sell Ancient Osirion relics for 60% of their listed price rather than the standard 50%.",
    shortDescription:
      '+2 Appraise (class skill); sell Ancient Osirion relics for 60% of listed price.',
    source: "Mummy's Mask Player's Guide",
    category: 'campaign',
    subcategory: "Mummy's Mask",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.appraise',
        value: 2,
        source: 'Foreign Opportunist',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'skill.appraise_class_skill',
        value: 0,
        source: 'Foreign Opportunist',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'relic_sale_price',
        value: 0,
        source: 'Foreign Opportunist',
        condition: {
          type: 'custom',
          description: 'Sell Ancient Osirion relics for 60% instead of 50% of listed price',
          params: {},
        },
      },
    ],
    tags: ['osirion', 'appraise', 'treasure', 'economics'],
  },

  {
    id: 'inquisitive_archaeologist',
    name: 'Inquisitive Archaeologist',
    description:
      "You have long been fascinated by the ancient architecture of Osirion and have studied it extensively, hoping to explore the recently opened necropolis of Wati firsthand. You gain a +2 trait bonus on Knowledge (engineering) checks, and Knowledge (engineering) is always a class skill for you. In addition, you gain a +2 trait bonus on Perception checks to find concealed or secret doors in structures built in the style of Ancient Osirion.",
    shortDescription:
      '+2 Knowledge (engineering) (class skill); +2 Perception to find hidden doors in Ancient Osirion structures.',
    source: "Mummy's Mask Player's Guide",
    category: 'campaign',
    subcategory: "Mummy's Mask",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_engineering',
        value: 2,
        source: 'Inquisitive Archaeologist',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'skill.knowledge_engineering_class_skill',
        value: 0,
        source: 'Inquisitive Archaeologist',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 2,
        source: 'Inquisitive Archaeologist',
        condition: {
          type: 'custom',
          description: 'To find concealed or secret doors in Ancient Osirion structures',
          params: {},
        },
      },
    ],
    tags: ['osirion', 'archaeology', 'knowledge-engineering', 'perception', 'secret-doors'],
  },

  {
    id: 'mummy_cursed',
    name: 'Mummy-Cursed',
    description:
      "One of your ancestors encountered a mummy's curse while exploring an ancient tomb, and though the curse has faded through the generations, it has left your bloodline with a heightened resistance to such effects. You gain a +2 trait bonus on saving throws against curses and curse effects (including mummy rot and spells with the curse descriptor), and a +2 trait bonus on saving throws against a mummy's aura of despair.",
    shortDescription:
      '+2 saves vs. curses and curse effects; +2 saves vs. mummy aura of despair.',
    source: "Mummy's Mask Player's Guide",
    category: 'campaign',
    subcategory: "Mummy's Mask",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Mummy-Cursed',
        condition: {
          type: 'custom',
          description: 'Against curses, curse effects, mummy rot, and spells with the curse descriptor',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Mummy-Cursed',
        condition: {
          type: 'custom',
          description: "Against a mummy's aura of despair",
          params: {},
        },
      },
    ],
    tags: ['osirion', 'curse', 'mummy', 'saving-throw', 'undead'],
  },

  {
    id: 'resurrected',
    name: 'Resurrected',
    description:
      "You died—or came very close to death—in the recent past and were brought back to life through magical means, divine intervention, destiny, or simple luck. This brush with mortality has sparked a deep curiosity about death itself and led you to seek answers in the tombs of Wati's necropolis. You gain a +2 trait bonus on saving throws against death effects. In addition, you do not die until your hit points drop to a negative amount equal to your Constitution score plus 4 (rather than the standard negative Constitution score).",
    shortDescription:
      '+2 saves vs. death effects; do not die until hp drops to negative (Con + 4).',
    source: "Mummy's Mask Player's Guide",
    category: 'campaign',
    subcategory: "Mummy's Mask",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Resurrected',
        condition: {
          type: 'custom',
          description: 'Against death effects',
          params: {},
        },
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'death_threshold',
        value: 0,
        source: 'Resurrected',
        condition: {
          type: 'custom',
          description: 'Do not die until hp reaches negative (Con score + 4) instead of negative Con score',
          params: {},
        },
      },
    ],
    tags: ['osirion', 'death', 'saving-throw', 'resurrection', 'hit-points'],
  },

  {
    id: 'sphinx_riddler',
    name: 'Sphinx Riddler',
    description:
      "You have long been fascinated by the ancient sphinxes of Osirion and their love of puzzles and riddles, and you have come to Wati hoping to explore its necropolis and perhaps encounter the legendary sphinxes said to dwell at Ubet's Folly. You gain a +1 trait bonus on Bluff and Diplomacy checks made against sphinxes. You also gain a +1 trait bonus on any skill check made to decipher a puzzle or riddle. You may select Sphinx as a bonus language.",
    shortDescription:
      '+1 Bluff and Diplomacy vs. sphinxes; +1 on checks to decipher puzzles/riddles; Sphinx as bonus language.',
    source: "Mummy's Mask Player's Guide",
    category: 'campaign',
    subcategory: "Mummy's Mask",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.bluff',
        value: 1,
        source: 'Sphinx Riddler',
        condition: {
          type: 'custom',
          description: 'Against sphinxes',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Sphinx Riddler',
        condition: {
          type: 'custom',
          description: 'Against sphinxes',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.any',
        value: 1,
        source: 'Sphinx Riddler',
        condition: {
          type: 'custom',
          description: 'On skill checks to decipher a puzzle or riddle',
          params: {},
        },
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'language.sphinx',
        value: 0,
        source: 'Sphinx Riddler',
      },
    ],
    tags: ['osirion', 'sphinx', 'bluff', 'diplomacy', 'riddle', 'language'],
  },

  {
    id: 'trap_finder',
    name: 'Trap Finder',
    description:
      "You have a knack for locating and disabling traps, a skill you put to use as you explore the forgotten dungeons and ancient tombs of Osirion. You gain a +1 trait bonus on Disable Device checks, and Disable Device is always a class skill for you. In addition, you can use Disable Device to disarm magic traps, as per the rogue's trapfinding ability.",
    shortDescription:
      '+1 Disable Device (class skill); can use Disable Device to disarm magic traps.',
    source: "Mummy's Mask Player's Guide",
    category: 'campaign',
    subcategory: "Mummy's Mask",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.disable_device',
        value: 1,
        source: 'Trap Finder',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'skill.disable_device_class_skill',
        value: 0,
        source: 'Trap Finder',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'disable_device_magic_traps',
        value: 0,
        source: 'Trap Finder',
        condition: {
          type: 'custom',
          description: 'Can use Disable Device to disarm magic traps (as rogue trapfinding)',
          params: {},
        },
      },
    ],
    tags: ['osirion', 'traps', 'disable-device', 'dungeoneering', 'rogue'],
  },

  {
    id: 'undead_crusader',
    name: 'Undead Crusader',
    description:
      "You have dedicated yourself to eliminating the undead threat from Golarion, and have spent years studying their weaknesses and training to combat them. You gain a +1 trait bonus on damage rolls against undead creatures. You also gain a +1 trait bonus on Knowledge (religion) checks, and Knowledge (religion) is always a class skill for you.",
    shortDescription:
      '+1 damage vs. undead; +1 Knowledge (religion) (class skill).',
    source: "Mummy's Mask Player's Guide",
    category: 'campaign',
    subcategory: "Mummy's Mask",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'damage',
        value: 1,
        source: 'Undead Crusader',
        condition: {
          type: 'custom',
          description: 'Against undead creatures',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_religion',
        value: 1,
        source: 'Undead Crusader',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'skill.knowledge_religion_class_skill',
        value: 0,
        source: 'Undead Crusader',
      },
    ],
    tags: ['osirion', 'undead', 'damage', 'knowledge-religion'],
  },

  {
    id: 'wati_native',
    name: 'Wati Native',
    description:
      "You are a native of Wati who knows the city intimately, including its streets and secrets. Having grown up in the shadow of the necropolis, you have explored its edges many times but have always respectfully avoided entering the tombs themselves. You gain a +2 trait bonus on saving throws against fear effects. You also gain a +1 trait bonus on Knowledge (local) checks, and Knowledge (local) is always a class skill for you.",
    shortDescription:
      '+2 saves vs. fear; +1 Knowledge (local) (class skill).',
    source: "Mummy's Mask Player's Guide",
    category: 'campaign',
    subcategory: "Mummy's Mask",
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 2,
        source: 'Wati Native',
        condition: {
          type: 'custom',
          description: 'Against fear effects',
          params: {},
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_local',
        value: 1,
        source: 'Wati Native',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'skill.knowledge_local_class_skill',
        value: 0,
        source: 'Wati Native',
      },
    ],
    tags: ['osirion', 'wati', 'fear', 'knowledge-local'],
  },
];

// CHECKPOINT: last_written=wati_native, written=10/10, status=complete
