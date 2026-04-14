import type { TraitDefinition } from '@/types/traits';
import { BonusType } from '@/types/base';

export const GIANTSLAYER_TRAITS: TraitDefinition[] = [
  // ==================== CAMPAIGN TRAITS — Giantslayer ====================
  {
    id: 'artifact_hunter_gs',
    name: 'Artifact Hunter',
    description:
      "You possess extensive knowledge of legendary magic items and artifacts, gained through years of dedicated research into mythical relics and their histories. You gain a +1 trait bonus on Spellcraft checks to identify the properties of magic items and a +1 trait bonus on Use Magic Device checks. One of these two skills (your choice) is always a class skill for you. When you first encounter an artifact, there is a 50% base chance that you recognize it, +1% per character level. If you successfully recognize an artifact, you learn the artifact's name, origin, and something of that artifact's powers, abilities, or dangers, as determined by the GM.",
    shortDescription:
      '+1 Spellcraft (ID items), Use Magic Device; one class skill; 50%+1%/level chance to recognize artifacts',
    source: "Giantslayer Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Giantslayer',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.spellcraft',
        value: 1,
        source: 'Artifact Hunter',
        condition: {
          type: 'custom',
          params: {},
          description: 'To identify magic item properties',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.use_magic_device',
        value: 1,
        source: 'Artifact Hunter',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Artifact Hunter',
      },
    ],
    tags: ['spellcraft', 'use_magic_device', 'artifact', 'magic_items', 'research'],
  },
  {
    id: 'dragonfoe',
    name: 'Dragonfoe',
    description:
      'You harbor a deep hatred of dragons, stemming from various possible origins—your ancestors were renowned dragonslayers, you suffered a personal tragedy involving dragons, or you were inspired by tales of legendary dragon hunters. This obsession has motivated you to study dragon combat and defensive techniques extensively. You gain a +1 dodge bonus to AC against creatures with the dragon type and a +2 trait bonus on Reflex saving throws against breath weapon attacks.',
    shortDescription: '+1 dodge AC vs dragons; +2 Reflex saves vs breath weapons',
    source: "Giantslayer Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Giantslayer',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'ac',
        value: 1,
        source: 'Dragonfoe',
        condition: {
          type: 'custom',
          params: {},
          description: 'Dodge bonus against creatures with the dragon type',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.reflex',
        value: 2,
        source: 'Dragonfoe',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against breath weapon attacks',
        },
      },
    ],
    tags: ['ac', 'dodge', 'dragon', 'reflex', 'breath_weapon', 'save'],
  },
  {
    id: 'dwarf_trained',
    name: 'Dwarf-Trained',
    description:
      'You were trained by dwarves and have learned combat tactics developed over centuries to fight giants and orcs. You gain a +2 dodge bonus to AC against creatures with the giant subtype (this bonus does not stack with the dwarf or gnome defensive training racial trait) and a +1 trait bonus on attack rolls against creatures with the orc subtype (this bonus does not stack with the dwarf hatred racial trait). You cannot be a dwarf or gnome to select this trait.',
    shortDescription:
      '+2 dodge AC vs giants; +1 attack vs orcs (no stack with dwarf/gnome racial bonuses)',
    source: "Giantslayer Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Giantslayer',
    prerequisites: [{ type: 'special', description: 'Cannot be a dwarf or gnome' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'ac',
        value: 2,
        source: 'Dwarf-Trained',
        condition: {
          type: 'custom',
          params: {},
          description: 'Dodge bonus against creatures with the giant subtype',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Dwarf-Trained',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against creatures with the orc subtype',
        },
      },
    ],
    tags: ['ac', 'dodge', 'giant', 'attack', 'orc', 'dwarf_training', 'combat'],
  },
  {
    id: 'giant_blooded',
    name: 'Giant-Blooded',
    description:
      'You have giant ancestry somewhere in your bloodline, manifesting as increased size relative to others of your race and minor physical features such as distinctive hair color, skin tone, or oversized hands. When you wield a weapon that is larger than your size, the penalty on attack rolls for using an inappropriately sized weapon is reduced by half. You also gain a +2 trait bonus to your Combat Maneuver Defense against awesome blow combat maneuvers. If you are a dwarf, your stability racial trait applies to awesome blow combat maneuvers as well.',
    shortDescription:
      'Half penalty for oversized weapons; +2 CMD vs awesome blow; dwarves apply stability to awesome blow',
    source: "Giantslayer Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Giantslayer',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'cmd',
        value: 2,
        source: 'Giant-Blooded',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against awesome blow combat maneuvers',
        },
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Giant-Blooded',
      },
    ],
    tags: ['cmd', 'awesome_blow', 'giant', 'ancestry', 'oversized_weapon', 'combat'],
  },
  {
    id: 'giantslayer_scion',
    name: 'Giantslayer Scion',
    description:
      "Your heritage includes a famed ancestor whose mighty battles against giant foes are the stuff of legend. That ancestor's reputation creates a psychological advantage when you confront giants. You take no penalty on Intimidate checks against creatures with the giant subtype that are larger than you. You also gain a +1 trait bonus to the DC of any fear-based effects you use against creatures with the giant subtype.",
    shortDescription: 'No Intimidate penalty vs larger giants; +1 DC on fear effects vs giants',
    source: "Giantslayer Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Giantslayer',
    prerequisites: [],
    effects: [
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Giantslayer Scion',
      },
    ],
    tags: ['intimidate', 'fear', 'giant', 'dc', 'heritage', 'combat'],
  },
  {
    id: 'orphaned_by_giants',
    name: 'Orphaned by Giants',
    description:
      "Your parents were killed by giants during a raid on your peaceful mountain settlement. You became an orphan and have dedicated your life to avenging your family's deaths. You gain a +1 trait bonus on attack rolls against creatures with the giant subtype and a +2 trait bonus on rolls to confirm critical hits against creatures with the giant subtype.",
    shortDescription: '+1 attack vs giants; +2 to confirm critical hits vs giants',
    source: "Giantslayer Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Giantslayer',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Orphaned by Giants',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against creatures with the giant subtype',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 2,
        source: 'Orphaned by Giants',
        condition: {
          type: 'custom',
          params: {},
          description: 'To confirm critical hits against creatures with the giant subtype',
        },
      },
    ],
    tags: ['attack', 'critical', 'giant', 'combat', 'vengeance'],
  },
  {
    id: 'roll_with_it',
    name: 'Roll With It',
    description:
      'You have been trained in defensive techniques against giant combatants and know how to roll with their powerful strikes to reduce damage. You gain a +1 trait bonus on Reflex saving throws. Once per day, when a creature with the giant subtype successfully confirms a critical hit against you with a weapon or a slam attack (not a spell or special ability), you can roll with the attack and take normal damage from the blow as if the critical had not been confirmed. You cannot use this ability if you are denied your Dexterity bonus to AC. If you are a dwarf or gnome, you may use this ability twice per day.',
    shortDescription:
      '+1 Reflex; 1/day (2/day for dwarves/gnomes) negate a confirmed crit from a giant',
    source: "Giantslayer Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Giantslayer',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.reflex',
        value: 1,
        source: 'Roll With It',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Roll With It',
      },
    ],
    tags: ['reflex', 'save', 'critical', 'giant', 'defense', 'combat'],
  },
  {
    id: 'student_of_giantkind',
    name: 'Student of Giantkind',
    description:
      'You have developed considerable expertise regarding giant races through dedicated study of their history and societies, gaining insight into their thinking and combat abilities. You gain a +1 trait bonus on Diplomacy checks against creatures with the giant subtype and a +1 trait bonus on Knowledge (local) checks regarding creatures with the giant subtype. One of these two skills (your choice) is always a class skill for you. You also learn the Giant language at no cost toward your language allotments.',
    shortDescription:
      '+1 Diplomacy and Knowledge (local) vs giants; one class skill; gain Giant language',
    source: "Giantslayer Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Giantslayer',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Student of Giantkind',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against creatures with the giant subtype',
        },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledge_local',
        value: 1,
        source: 'Student of Giantkind',
        condition: {
          type: 'custom',
          params: {},
          description: 'Regarding creatures with the giant subtype',
        },
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Student of Giantkind',
      },
    ],
    tags: ['diplomacy', 'knowledge', 'local', 'giant', 'language', 'lore'],
  },
  {
    id: 'trunau_native',
    name: 'Trunau Native',
    description:
      'You were born and raised in Trunau, a human settlement within the orc-dominated Hold of Belkzen. You have taken the Standing Vow to defend the town against all threats and to resist capture by orcs. You begin play with a masterwork dagger called a hopeknife, typically worn on a chain beneath clothing. You also gain a +1 trait bonus on Will saving throws.',
    shortDescription: '+1 Will saves; begin play with a masterwork hopeknife dagger',
    source: "Giantslayer Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Giantslayer',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.will',
        value: 1,
        source: 'Trunau Native',
      },
      {
        type: 'special',
        bonusType: BonusType.UNTYPED,
        target: 'special.ability',
        value: 0,
        source: 'Trunau Native',
      },
    ],
    tags: ['will', 'save', 'trunau', 'hopeknife', 'belkzen', 'orc', 'equipment'],
  },
  {
    id: 'vexing_defender',
    name: 'Vexing Defender',
    description:
      "You specialize in combat against larger opponents and excel at harassing them from multiple angles. You gain a +1 trait bonus on Acrobatics checks, and Acrobatics is always a class skill for you. You also gain a +4 trait bonus on Acrobatics checks to move through an enemy's space without provoking an attack of opportunity, provided that enemy is larger than you.",
    shortDescription:
      '+1 Acrobatics; class skill; +4 Acrobatics to move through larger enemy space without AoO',
    source: "Giantslayer Player's Guide",
    verificationStatus: 'needs_review' as const,
    category: 'campaign',
    subcategory: 'Giantslayer',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.acrobatics',
        value: 1,
        source: 'Vexing Defender',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.acrobatics',
        value: 4,
        source: 'Vexing Defender',
        condition: {
          type: 'custom',
          params: {},
          description:
            'To move through the space of an enemy larger than you without provoking an AoO',
        },
      },
    ],
    tags: ['acrobatics', 'movement', 'aoo', 'giant', 'combat', 'mobility'],
  },
];

// CHECKPOINT: last_written=vexing_defender, written=10/10, status=complete
