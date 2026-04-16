import { BonusType } from '@/types/base';
import type { TraitDefinition } from '@/types/traits';

/**
 * Additional Advanced Race Guide race traits not already in advancedRace.ts or apgTraits-extra.ts.
 * Covers remaining core-race traits plus 1-2 popular traits per featured race.
 */
export const ARG_EXTRA_RACE_TRAITS: TraitDefinition[] = [
  // ==================== DWARF RACE TRAITS ====================
  {
    id: 'deep_guardian',
    name: 'Deep Guardian',
    description:
      'You have spent your life guarding the tunnels beneath the surface. You gain a +1 trait bonus on Knowledge (dungeoneering) checks and a +1 trait bonus on Survival checks made underground.',
    shortDescription: '+1 Knowledge (dungeoneering) and +1 Survival underground',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Dwarf',
    prerequisites: [{ type: 'race', raceName: 'Dwarf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeDungeoneering',
        value: 1,
        source: 'Deep Guardian',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Deep Guardian',
        condition: { type: 'custom', params: {}, description: 'While underground' },
      },
    ],
    tags: ['knowledge', 'dungeoneering', 'survival', 'dwarf', 'underground'],
  },
  {
    id: 'zest_for_battle',
    name: 'Zest for Battle',
    description:
      'Your greatest joy is being in the thick of battle, and you act accordingly. You gain a +1 trait bonus on initiative checks.',
    shortDescription: '+1 trait bonus on initiative checks',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Dwarf',
    prerequisites: [{ type: 'race', raceName: 'Dwarf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 1,
        source: 'Zest for Battle',
      },
    ],
    tags: ['initiative', 'dwarf', 'combat'],
  },
  {
    id: 'grounded',
    name: 'Grounded',
    description:
      'You are well balanced, both physically and mentally. You gain a +2 trait bonus on balance-related Acrobatics checks and a +1 trait bonus on Reflex saves.',
    shortDescription: '+2 Acrobatics (balance) and +1 Reflex saves',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Dwarf',
    prerequisites: [{ type: 'race', raceName: 'Dwarf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.acrobatics',
        value: 2,
        source: 'Grounded',
        condition: { type: 'custom', params: {}, description: 'Balance-related checks only' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.reflex',
        value: 1,
        source: 'Grounded',
      },
    ],
    tags: ['acrobatics', 'reflex', 'save', 'dwarf'],
  },

  // ==================== ELF RACE TRAITS ====================
  {
    id: 'dilettante',
    name: 'Dilettante',
    description:
      'You have a broad but shallow base of knowledge. You gain a +1 trait bonus on all untrained Knowledge skill checks.',
    shortDescription: '+1 trait bonus on untrained Knowledge checks',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Elf',
    prerequisites: [{ type: 'race', raceName: 'Elf' }],
    effects: [],
    tags: ['knowledge', 'elf', 'untrained'],
  },
  {
    id: 'envoy',
    name: 'Envoy',
    description:
      'You grew up around elven diplomats. You gain a +1 trait bonus on Diplomacy checks and Sense Motive checks.',
    shortDescription: '+1 Diplomacy and +1 Sense Motive',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Elf',
    prerequisites: [{ type: 'race', raceName: 'Elf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.diplomacy',
        value: 1,
        source: 'Envoy',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.senseMotive',
        value: 1,
        source: 'Envoy',
      },
    ],
    tags: ['diplomacy', 'sense motive', 'elf', 'social'],
  },
  {
    id: 'elven_arcanist',
    name: 'Elven Arcanist',
    description:
      'You have an innate understanding of arcane magic. You gain a +1 trait bonus on caster level checks to overcome spell resistance.',
    shortDescription: '+1 caster level checks to overcome SR',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Elf',
    prerequisites: [{ type: 'race', raceName: 'Elf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'spell.caster_level_check',
        value: 1,
        source: 'Elven Arcanist',
        condition: { type: 'custom', params: {}, description: 'To overcome spell resistance' },
      },
    ],
    tags: ['caster level', 'spell resistance', 'elf', 'magic'],
  },

  // ==================== GNOME RACE TRAITS ====================
  {
    id: 'gift_of_tongues',
    name: 'Gift of Tongues',
    description:
      'You have an ear for languages and learn them quickly. You gain a +1 trait bonus on Linguistics checks and learn an additional language.',
    shortDescription: '+1 Linguistics and learn one extra language',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Gnome',
    prerequisites: [{ type: 'race', raceName: 'Gnome' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.linguistics',
        value: 1,
        source: 'Gift of Tongues',
      },
    ],
    tags: ['linguistics', 'language', 'gnome'],
  },
  {
    id: 'master_tinker',
    name: 'Master Tinker',
    description:
      'You are incredibly skilled at building and repairing mechanical devices. You gain a +1 trait bonus on Disable Device and Knowledge (engineering) checks. You are also treated as proficient with any weapon you have personally crafted.',
    shortDescription:
      '+1 Disable Device and Knowledge (engineering); proficient with self-crafted weapons',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Gnome',
    prerequisites: [{ type: 'race', raceName: 'Gnome' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.disableDevice',
        value: 1,
        source: 'Master Tinker',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.knowledgeEngineering',
        value: 1,
        source: 'Master Tinker',
      },
    ],
    tags: ['disable device', 'knowledge', 'engineering', 'gnome', 'crafting'],
  },
  {
    id: 'pyromaniac',
    name: 'Pyromaniac',
    description:
      'You are fascinated by fire and gain a +1 trait bonus on damage rolls with fire spells. Additionally, your effective caster level is increased by 1 for all fire spells you cast.',
    shortDescription: '+1 fire spell damage and +1 effective CL for fire spells',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Gnome',
    prerequisites: [{ type: 'race', raceName: 'Gnome' }],
    effects: [],
    tags: ['fire', 'gnome', 'magic', 'caster level', 'damage'],
  },

  // ==================== HALF-ELF RACE TRAITS ====================
  {
    id: 'sociable',
    name: 'Sociable',
    description:
      "You have a way of putting others at ease. When you attempt a Diplomacy check to change a creature's attitude and fail by 5 or more, you can try to influence the creature a second time, even if 24 hours have not passed.",
    shortDescription: 'Retry failed Diplomacy checks to shift attitude',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Half-Elf',
    prerequisites: [{ type: 'race', raceName: 'Half-Elf' }],
    effects: [],
    tags: ['diplomacy', 'half-elf', 'social'],
  },
  {
    id: 'fey_thoughts',
    name: 'Fey Thoughts',
    description:
      'Your elven heritage has given you an otherworldly connection. Select two of the following skills: Acrobatics, Bluff, Climb, Diplomacy, Disguise, Fly, Knowledge (nature), Perception, Perform, Sense Motive, Sleight of Hand, Stealth, Swim, or Use Magic Device. These are always class skills for you.',
    shortDescription: 'Choose 2 skills from a list to become class skills',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Half-Elf',
    prerequisites: [{ type: 'race', raceName: 'Half-Elf' }],
    effects: [],
    choices: [
      {
        type: 'class_skill',
        label: 'First Fey Skill',
        options: [
          'acrobatics',
          'bluff',
          'climb',
          'diplomacy',
          'disguise',
          'fly',
          'knowledgeNature',
          'perception',
          'perform',
          'senseMotive',
          'sleightOfHand',
          'stealth',
          'swim',
          'useMagicDevice',
        ],
        affectsEffects: true,
        effectTargetTemplate: 'class_skill.{value}',
      },
      {
        type: 'class_skill',
        label: 'Second Fey Skill',
        options: [
          'acrobatics',
          'bluff',
          'climb',
          'diplomacy',
          'disguise',
          'fly',
          'knowledgeNature',
          'perception',
          'perform',
          'senseMotive',
          'sleightOfHand',
          'stealth',
          'swim',
          'useMagicDevice',
        ],
        affectsEffects: true,
        effectTargetTemplate: 'class_skill.{value}',
      },
    ],
    tags: ['class skill', 'half-elf', 'fey'],
  },
  {
    id: 'wary',
    name: 'Wary',
    description:
      'You grew up on the streets or in the wild, and you learned quickly that the only person you can trust is yourself. You gain a +1 trait bonus on Sense Motive checks and Sense Motive is always a class skill for you.',
    shortDescription: '+1 Sense Motive; Sense Motive is a class skill',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Half-Elf',
    prerequisites: [{ type: 'race', raceName: 'Half-Elf' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.senseMotive',
        value: 1,
        source: 'Wary',
      },
    ],
    tags: ['sense motive', 'half-elf', 'class skill'],
  },

  // ==================== HALF-ORC RACE TRAITS ====================
  {
    id: 'shamans_apprentice',
    name: "Shaman's Apprentice",
    description:
      'Only the most brutal survive the harsh lands where orcs dwell. You gain Endurance as a bonus feat.',
    shortDescription: 'Gain Endurance as a bonus feat',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Half-Orc',
    prerequisites: [{ type: 'race', raceName: 'Half-Orc' }],
    effects: [],
    tags: ['endurance', 'half-orc', 'bonus feat'],
  },
  {
    id: 'sacred_tattoo_halforc',
    name: 'Sacred Tattoo',
    description:
      'Many half-orcs decorate themselves with tattoos, piercings, and ritual scarification, which they consider sacred. You gain a +1 luck bonus on all saving throws.',
    shortDescription: '+1 luck bonus on all saving throws',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Half-Orc',
    prerequisites: [{ type: 'race', raceName: 'Half-Orc' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.LUCK,
        target: 'save.all',
        value: 1,
        source: 'Sacred Tattoo',
      },
    ],
    tags: ['save', 'luck', 'half-orc'],
  },
  {
    id: 'feral',
    name: 'Feral',
    description:
      'You were raised in the wild, without any connection to civilization. You gain a +1 trait bonus on Survival checks and Survival is always a class skill for you.',
    shortDescription: '+1 Survival; Survival is a class skill',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Half-Orc',
    prerequisites: [{ type: 'race', raceName: 'Half-Orc' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Feral',
      },
    ],
    tags: ['survival', 'half-orc', 'class skill'],
  },

  // ==================== HALFLING RACE TRAITS ====================
  {
    id: 'craven',
    name: 'Craven',
    description:
      'While living on the streets, you learned that running and hiding are much better survival mechanisms than trying to fight. You gain a +1 bonus on initiative checks and a +1 bonus on Stealth checks.',
    shortDescription: '+1 initiative and +1 Stealth',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Halfling',
    prerequisites: [{ type: 'race', raceName: 'Halfling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiative',
        value: 1,
        source: 'Craven',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.stealth',
        value: 1,
        source: 'Craven',
      },
    ],
    tags: ['initiative', 'stealth', 'halfling'],
  },
  {
    id: 'underfoot',
    name: 'Underfoot',
    description:
      'You have learned to take advantage of your small size in combat. You gain a +1 dodge bonus to AC against foes larger than you.',
    shortDescription: '+1 dodge bonus to AC vs larger foes',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Halfling',
    prerequisites: [{ type: 'race', raceName: 'Halfling' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.DODGE,
        target: 'ac',
        value: 1,
        source: 'Underfoot',
        condition: { type: 'custom', params: {}, description: 'Against foes larger than you' },
      },
    ],
    tags: ['ac', 'dodge', 'halfling', 'size'],
  },
  {
    id: 'swift_as_shadows',
    name: 'Swift as Shadows',
    description:
      'You reduce the penalty for using Stealth while moving by 5 and the penalty for using Stealth while sniping by 10.',
    shortDescription: 'Reduced Stealth penalties for moving and sniping',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Halfling',
    prerequisites: [{ type: 'race', raceName: 'Halfling' }],
    effects: [],
    tags: ['stealth', 'halfling', 'movement'],
  },

  // ==================== HUMAN RACE TRAITS ====================
  {
    id: 'comprehensive_education',
    name: 'Comprehensive Education',
    description:
      'You were raised by scholars or in an environment that focused on well-rounded learning. You gain a +1 trait bonus on all Knowledge skill checks and can make untrained Knowledge checks with a DC of 15 or lower.',
    shortDescription: '+1 on all Knowledge checks; untrained Knowledge up to DC 15',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Human',
    prerequisites: [{ type: 'race', raceName: 'Human' }],
    effects: [],
    tags: ['knowledge', 'human', 'untrained'],
  },
  {
    id: 'militia_veteran_arg',
    name: 'Militia Veteran',
    description:
      'Your first experience with combat was serving in a local militia or garrison. You gain a +1 trait bonus on Survival checks and Survival is always a class skill for you.',
    shortDescription: '+1 Survival; Survival is a class skill',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Human',
    prerequisites: [{ type: 'race', raceName: 'Human' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.survival',
        value: 1,
        source: 'Militia Veteran',
      },
    ],
    tags: ['survival', 'human', 'class skill'],
  },
  {
    id: 'heart_of_the_fields',
    name: 'Heart of the Fields',
    description:
      'You grew up on a farm or in a similar rural area. Once per day, you may ignore an effect that would cause you to become fatigued or exhausted. In addition, you gain a bonus to a single Craft or Profession skill equal to half your character level.',
    shortDescription: 'Ignore fatigue/exhaustion 1/day; bonus to one Craft/Profession skill',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Human',
    prerequisites: [{ type: 'race', raceName: 'Human' }],
    effects: [],
    choices: [
      {
        type: 'skill',
        label: 'Craft or Profession Skill',
        affectsEffects: true,
        effectTargetTemplate: 'skill.{value}',
      },
    ],
    tags: ['fatigue', 'exhaustion', 'human', 'craft', 'profession'],
  },

  // ==================== AASIMAR RACE TRAITS ====================
  {
    id: 'celestial_crusader',
    name: 'Celestial Crusader',
    description:
      'You were raised to fight against the forces of evil. You gain a +1 trait bonus on attack rolls and AC against evil outsiders.',
    shortDescription: '+1 attack and AC vs evil outsiders',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Aasimar',
    prerequisites: [{ type: 'race', raceName: 'Aasimar' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Celestial Crusader',
        condition: { type: 'custom', params: {}, description: 'Against evil outsiders' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'ac',
        value: 1,
        source: 'Celestial Crusader',
        condition: { type: 'custom', params: {}, description: 'Against evil outsiders' },
      },
    ],
    tags: ['attack', 'ac', 'aasimar', 'evil', 'outsider'],
  },
  {
    id: 'exalted_resistance',
    name: 'Exalted Resistance',
    description:
      'Your celestial heritage has granted you an innate resistance to a specific type of energy. You gain energy resistance 5 to acid, cold, or electricity (chosen when you take this trait).',
    shortDescription: 'Energy resistance 5 to acid, cold, or electricity',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Aasimar',
    prerequisites: [{ type: 'race', raceName: 'Aasimar' }],
    effects: [],
    choices: [
      {
        type: 'custom',
        label: 'Energy Type',
        options: ['acid', 'cold', 'electricity'],
        affectsEffects: true,
        effectTargetTemplate: 'resistance.{value}',
      },
    ],
    tags: ['resistance', 'energy', 'aasimar'],
  },

  // ==================== TIEFLING RACE TRAITS ====================
  {
    id: 'fiendish_sorcery',
    name: 'Fiendish Sorcery',
    description:
      'Your sorcerous bloodline is particularly strong. If you are a sorcerer with the Abyssal or Infernal bloodline, treat your Charisma score as 2 points higher for all sorcerer class abilities.',
    shortDescription: '+2 effective Charisma for Abyssal/Infernal sorcerer abilities',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Tiefling',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [],
    tags: ['sorcerer', 'charisma', 'tiefling', 'bloodline'],
  },
  {
    id: 'maw_or_claw',
    name: 'Maw or Claw',
    description:
      'You have a pointed muzzle, sharp teeth, or vicious claws. You gain a natural attack: either a bite attack that deals 1d6 damage or two claw attacks that each deal 1d4 damage. These are primary natural attacks.',
    shortDescription: 'Gain a 1d6 bite or two 1d4 claw attacks',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Tiefling',
    prerequisites: [{ type: 'race', raceName: 'Tiefling' }],
    effects: [],
    choices: [
      {
        type: 'custom',
        label: 'Natural Attack Type',
        options: ['bite', 'claws'],
        affectsEffects: true,
      },
    ],
    tags: ['natural attack', 'bite', 'claw', 'tiefling'],
  },

  // ==================== CATFOLK RACE TRAITS ====================
  {
    id: 'cats_luck',
    name: "Cat's Luck",
    description:
      'Once per day when you make a Reflex saving throw, you can roll the saving throw twice and take the better result. You must decide to use this ability before the results are revealed.',
    shortDescription: 'Reroll one Reflex save per day',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Catfolk',
    prerequisites: [{ type: 'race', raceName: 'Catfolk' }],
    effects: [],
    tags: ['reflex', 'save', 'catfolk', 'reroll'],
  },
  {
    id: 'nimble_faller',
    name: 'Nimble Faller',
    description:
      'You land on your feet even when you take lethal damage from a fall. You do not take damage from the first 20 feet of a fall, and you always land on your feet.',
    shortDescription: 'Ignore first 20 ft of fall damage; always land on feet',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Catfolk',
    prerequisites: [{ type: 'race', raceName: 'Catfolk' }],
    effects: [],
    tags: ['falling', 'catfolk', 'acrobatics'],
  },

  // ==================== TENGU RACE TRAITS ====================
  {
    id: 'claw_attack_tengu',
    name: 'Claw Attack',
    description:
      'You have powerful claws that allow you to make two claw attacks as primary natural attacks, each dealing 1d3 points of damage.',
    shortDescription: 'Two 1d3 claw natural attacks',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Tengu',
    prerequisites: [{ type: 'race', raceName: 'Tengu' }],
    effects: [],
    tags: ['natural attack', 'claw', 'tengu'],
  },
  {
    id: 'scavenger',
    name: 'Scavenger',
    description:
      'You are adept at finding hidden treasures in refuse and rubble. You gain a +2 trait bonus on Appraise checks and a +2 bonus on Perception checks to find hidden objects (including traps and secret doors).',
    shortDescription: '+2 Appraise; +2 Perception to find hidden objects',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Tengu',
    prerequisites: [{ type: 'race', raceName: 'Tengu' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.appraise',
        value: 2,
        source: 'Scavenger',
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 2,
        source: 'Scavenger',
        condition: {
          type: 'custom',
          params: {},
          description: 'To find hidden objects, traps, and secret doors',
        },
      },
    ],
    tags: ['appraise', 'perception', 'tengu', 'traps'],
  },

  // ==================== GOBLIN RACE TRAITS ====================
  {
    id: 'over_sized_ears',
    name: 'Over-Sized Ears',
    description:
      'Your ears are larger than normal for your race. You gain a +4 bonus on Perception checks.',
    shortDescription: '+4 bonus on Perception checks',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Goblin',
    prerequisites: [{ type: 'race', raceName: 'Goblin' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 4,
        source: 'Over-Sized Ears',
      },
    ],
    tags: ['perception', 'goblin'],
  },
  {
    id: 'tree_runner',
    name: 'Tree Runner',
    description:
      'You are adept at climbing trees. You gain a +4 racial bonus on Climb checks in trees and forests.',
    shortDescription: '+4 Climb in trees and forests',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Goblin',
    prerequisites: [{ type: 'race', raceName: 'Goblin' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RACIAL,
        target: 'skill.climb',
        value: 4,
        source: 'Tree Runner',
        condition: { type: 'custom', params: {}, description: 'In trees and forests' },
      },
    ],
    tags: ['climb', 'goblin', 'forest'],
  },

  // ==================== DROW RACE TRAITS ====================
  {
    id: 'blasphemous_covenant',
    name: 'Blasphemous Covenant',
    description:
      'Since birth, you were designated as a sacrifice to dark powers. You gain a +1 bonus on saves against divine spells.',
    shortDescription: '+1 on saves vs divine spells',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Drow',
    prerequisites: [{ type: 'race', raceName: 'Drow' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'save.all',
        value: 1,
        source: 'Blasphemous Covenant',
        condition: { type: 'custom', params: {}, description: 'Against divine spells' },
      },
    ],
    tags: ['save', 'drow', 'divine'],
  },

  // ==================== IFRIT RACE TRAITS ====================
  {
    id: 'wildfire_heart',
    name: 'Wildfire Heart',
    description:
      'Your body burns with an inner flame. You gain fire resistance 4 and whenever you receive magical healing, you heal 1 additional hit point.',
    shortDescription: 'Fire resistance 4; +1 HP from magical healing',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Ifrit',
    prerequisites: [{ type: 'race', raceName: 'Ifrit' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RACIAL,
        target: 'resistance.fire',
        value: 4,
        source: 'Wildfire Heart',
      },
    ],
    tags: ['fire', 'resistance', 'healing', 'ifrit'],
  },

  // ==================== OREAD RACE TRAITS ====================
  {
    id: 'stonekeeper',
    name: 'Stonekeeper',
    description:
      'Your flesh has taken on some of the characteristics of stone. You gain a +1 natural armor bonus to AC.',
    shortDescription: '+1 natural armor bonus to AC',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Oread',
    prerequisites: [{ type: 'race', raceName: 'Oread' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.NATURAL,
        target: 'ac',
        value: 1,
        source: 'Stonekeeper',
      },
    ],
    tags: ['ac', 'natural armor', 'oread'],
  },

  // ==================== SYLPH RACE TRAITS ====================
  {
    id: 'breeze_kissed',
    name: 'Breeze-Kissed',
    description:
      'Breezes seem to follow your every movement. You gain a +2 racial bonus on saving throws against nonmagical effects that deal electricity damage or create a vacuum.',
    shortDescription: '+2 on saves vs electricity and vacuum effects',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Sylph',
    prerequisites: [{ type: 'race', raceName: 'Sylph' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RACIAL,
        target: 'save.all',
        value: 2,
        source: 'Breeze-Kissed',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against nonmagical electricity or vacuum effects',
        },
      },
    ],
    tags: ['save', 'electricity', 'sylph'],
  },

  // ==================== UNDINE RACE TRAITS ====================
  {
    id: 'water_child',
    name: 'Water Child',
    description:
      'You gain a +4 racial bonus on Swim checks, can always take 10 on Swim checks, and can use the run action while swimming.',
    shortDescription: '+4 Swim; always take 10; run while swimming',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Undine',
    prerequisites: [{ type: 'race', raceName: 'Undine' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RACIAL,
        target: 'skill.swim',
        value: 4,
        source: 'Water Child',
      },
    ],
    tags: ['swim', 'undine', 'aquatic'],
  },

  // ==================== FETCHLING RACE TRAITS ====================
  {
    id: 'shadow_blending',
    name: 'Shadow Blending',
    description:
      'Attacks made against you while you are within an area of dim light have a 50% miss chance instead of the normal 20% miss chance. This does not grant total concealment; it just increases the miss chance.',
    shortDescription: '50% miss chance in dim light instead of 20%',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Fetchling',
    prerequisites: [{ type: 'race', raceName: 'Fetchling' }],
    effects: [],
    tags: ['concealment', 'dim light', 'fetchling', 'defense'],
  },

  // ==================== DHAMPIR RACE TRAITS ====================
  {
    id: 'vampire_hunter',
    name: 'Vampire Hunter',
    description:
      'You have been trained to hunt the undead. You gain a +2 trait bonus on Perception checks made against undead and a +1 trait bonus on attack rolls against undead.',
    shortDescription: '+2 Perception and +1 attack vs undead',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Dhampir',
    prerequisites: [{ type: 'race', raceName: 'Dhampir' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.perception',
        value: 2,
        source: 'Vampire Hunter',
        condition: { type: 'custom', params: {}, description: 'Against undead' },
      },
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'attack.melee',
        value: 1,
        source: 'Vampire Hunter',
        condition: { type: 'custom', params: {}, description: 'Against undead' },
      },
    ],
    tags: ['perception', 'attack', 'undead', 'dhampir'],
  },

  // ==================== KOBOLD RACE TRAITS ====================
  {
    id: 'dragon_scaled',
    name: 'Dragon-Scaled',
    description:
      'Your scales are especially thick and colored to match a specific type of chromatic dragon. You gain energy resistance 5 to the energy type that matches your dragon color (acid for black/green, electricity for blue, fire for red, cold for white).',
    shortDescription: 'Energy resistance 5 matching your dragon color',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Kobold',
    prerequisites: [{ type: 'race', raceName: 'Kobold' }],
    effects: [],
    choices: [
      {
        type: 'custom',
        label: 'Dragon Color',
        options: [
          'black (acid)',
          'blue (electricity)',
          'green (acid)',
          'red (fire)',
          'white (cold)',
        ],
        affectsEffects: true,
      },
    ],
    tags: ['resistance', 'energy', 'dragon', 'kobold'],
  },

  // ==================== RATFOLK RACE TRAITS ====================
  {
    id: 'swarming',
    name: 'Swarming',
    description:
      'You are used to living and fighting communally with your kind. You can share a square with another ratfolk without penalty. When two ratfolk share the same square, they are considered to be flanking an enemy they can both reach.',
    shortDescription: 'Share square with another ratfolk; auto-flank',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Ratfolk',
    prerequisites: [{ type: 'race', raceName: 'Ratfolk' }],
    effects: [],
    tags: ['flanking', 'teamwork', 'ratfolk'],
  },

  // ==================== HOBGOBLIN RACE TRAITS ====================
  {
    id: 'scarred_arg',
    name: 'Scarred',
    description:
      'You have many scars earned in battle or in punishment. You gain a +2 bonus on Intimidate checks and a +1 natural armor bonus to AC.',
    shortDescription: '+2 Intimidate and +1 natural armor',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Hobgoblin',
    prerequisites: [{ type: 'race', raceName: 'Hobgoblin' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'skill.intimidate',
        value: 2,
        source: 'Scarred',
      },
      { type: 'bonus', bonusType: BonusType.NATURAL, target: 'ac', value: 1, source: 'Scarred' },
    ],
    tags: ['intimidate', 'natural armor', 'ac', 'hobgoblin'],
  },

  // ==================== ORC RACE TRAITS ====================
  {
    id: 'smeller',
    name: 'Smeller',
    description:
      'Your sense of smell is far more acute than normal. You gain the scent special ability.',
    shortDescription: 'Gain the scent special ability',
    source: 'Advanced Race Guide',
    verificationStatus: 'needs_review' as const,
    category: 'race',
    subcategory: 'Orc',
    prerequisites: [{ type: 'race', raceName: 'Orc' }],
    effects: [],
    tags: ['scent', 'orc', 'senses'],
  },
];
