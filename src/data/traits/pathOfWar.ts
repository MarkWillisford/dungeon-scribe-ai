import type { TraitDefinition } from '@/types/traits';
import { BonusType } from '@/types/base';

// Path of War traits (Dreamscarred Press, 3rd-party).
//
// Three of the four interact with the initiating system rather than with flat
// numeric bonuses, so their effects are typed 'special' where the modifier
// pipeline has no target to resolve. Only Practiced Initiator resolves to a
// computed value today (see InitiatingService.computeInitiatorLevel).
export const PATH_OF_WAR_TRAITS: TraitDefinition[] = [
  {
    id: 'agile_dancer',
    name: 'Agile Dancer',
    description:
      'You can make Perform (dance) checks in place of Acrobatics checks, and can use the higher of your Dexterity or Charisma modifiers when making Perform (dance) checks.',
    shortDescription: 'Perform (dance) substitutes for Acrobatics; use higher of Dex or Cha',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    category: 'social',
    prerequisites: [],
    effects: [
      {
        // Skill substitution has no modifier-pipeline target: it swaps which
        // skill is rolled, it does not add to a total.
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'skill.acrobatics',
        value: 'perform_dance_substitution',
        source: 'Agile Dancer',
        condition: {
          type: 'custom',
          params: { substituteSkill: 'perform (dance)', forSkill: 'acrobatics' },
          description: 'Perform (dance) may be rolled in place of Acrobatics',
        },
      },
      {
        // Ability substitution: SkillEntry.ability is a single key, so
        // "higher of Dex or Cha" cannot be expressed as a bonus today.
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'skill.perform_dance',
        value: 'ability_substitution',
        source: 'Agile Dancer',
        condition: {
          type: 'custom',
          params: { useHigherOf: 'DEX,CHA' },
          description: 'Perform (dance) uses the higher of Dexterity or Charisma',
        },
      },
    ],
    tags: ['acrobatics', 'perform', 'dance', 'skill', 'path of war'],
  },
  {
    id: 'combat_training',
    name: 'Combat Training',
    description:
      "You learn one 1st-level maneuver (strike, boost, or counter) from any one discipline of your choice. If you are not a member of an initiating class, you can ready this maneuver by spending ten minutes practicing it, and can recover it by taking a standard action to focus. Your initiation modifier for this maneuver is the key ability of its discipline's associated skill. If you can already initiate other maneuvers or later gain the ability to, the maneuver granted by this trait is added to your list of maneuvers known, and you can recover it as normal for your class. You cannot exchange this maneuver for another maneuver as you level up, nor does it add its discipline to your list of available disciplines.",
    shortDescription: 'Learn one 1st-level maneuver from any discipline',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        // Grants a maneuver outside any pool — the FeatGrantedManeuver shape
        // on Initiating covers this, and the grant must NOT count against pool
        // limits or add its discipline to the accessible list.
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'initiating.granted_maneuver',
        value: 1,
        source: 'Combat Training',
        condition: {
          type: 'custom',
          params: {
            maneuverLevel: 1,
            maneuverTypes: 'strike,boost,counter',
            addsDisciplineAccess: false,
            exchangeableOnLevelUp: false,
            nonInitiatorReady: '10 minutes of practice',
            nonInitiatorRecover: 'standard action to focus',
            initiationModifier: "key ability of the discipline's associated skill",
          },
          description: 'One 1st-level maneuver from a chosen discipline, granted outside the pool',
        },
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Discipline',
        affectsEffects: true,
        effectTargetTemplate: 'initiating.discipline.{choice}',
      },
      {
        type: 'custom',
        label: 'Maneuver (1st level: strike, boost, or counter)',
        affectsEffects: true,
        effectTargetTemplate: 'initiating.granted_maneuver.{choice}',
      },
    ],
    tags: ['maneuver', 'initiating', 'discipline', 'path of war'],
  },
  {
    id: 'practiced_initiator',
    name: 'Practiced Initiator',
    description:
      'Pick an initiating class — your initiator level in that class gains a +2 trait bonus as long as this bonus does not raise your initiator level above your current Hit Dice.',
    shortDescription: '+2 trait bonus to initiator level in one class, capped at your HD',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    category: 'combat',
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.TRAIT,
        target: 'initiating.initiator_level.{choice}',
        value: 2,
        source: 'Practiced Initiator',
        condition: {
          type: 'custom',
          params: { cappedAt: 'character_hit_dice' },
          description: 'Bonus may not raise initiator level above current Hit Dice',
        },
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Initiating Class',
        affectsEffects: true,
        effectTargetTemplate: 'initiating.initiator_level.{choice}',
      },
    ],
    tags: ['initiator level', 'initiating', 'path of war'],
  },
  {
    id: 'unorthodox_method',
    name: 'Unorthodox Method',
    description:
      "You trade one of your class's available disciplines for a different discipline of your choice. You gain the new discipline's skill as a class skill.",
    shortDescription: 'Trade one class discipline for another; gain its skill as a class skill',
    source: 'Path of War: Expanded',
    verificationStatus: 'needs_review' as const,
    category: 'regional',
    prerequisites: [],
    effects: [
      {
        // Maps onto InitiatingPool.removedDisciplines / bonusDisciplines —
        // the same swap shape InitiatingService.applyTradition already uses.
        type: 'special',
        bonusType: BonusType.TRAIT,
        target: 'initiating.discipline_swap',
        value: 1,
        source: 'Unorthodox Method',
        condition: {
          type: 'custom',
          params: { removes: 1, grants: 1, grantsClassSkill: true },
          description: 'Swap one available discipline for another; its skill becomes a class skill',
        },
      },
    ],
    choices: [
      {
        type: 'custom',
        label: 'Discipline Traded Away',
        affectsEffects: true,
        effectTargetTemplate: 'initiating.removed_discipline.{choice}',
      },
      {
        type: 'custom',
        label: 'New Discipline',
        affectsEffects: true,
        effectTargetTemplate: 'initiating.bonus_discipline.{choice}',
      },
      {
        type: 'class_skill',
        label: "Class Skill: new discipline's associated skill",
        affectsEffects: false,
      },
    ],
    tags: ['discipline', 'initiating', 'class skill', 'path of war'],
  },
];
