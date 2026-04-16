import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

// Dragon Empires Gazetteer contains no feats (setting book only).
// All 13 feats below are from Dragon Empires Primer.
//
// Already in DB (skipped): Kirin Style chain (styleFeats2), Mantis Style chain (styleFeats),
//   Dragon Style chain (styleFeats2), Hamatulatsu (miscBooks1), Ki Throw (ucombat).

export const DRAGON_EMPIRES_FEATS: FeatDefinition[] = [
  // ==================== DRAGON EMPIRES PRIMER ====================

  {
    id: 'blinding_flash_dep',
    name: 'Blinding Flash',
    description:
      "As a move action, you can angle a weapon or shield's reflective surface to flash bright light into an opponent's eyes. The target must succeed at a Fortitude save (DC 10 + 1/2 your character level + your Dexterity modifier) or be dazzled for 1 round. This ability functions as a gaze attack and requires bright light and a polished or otherwise reflective weapon or shield. It has no effect on creatures that are already blinded or that do not rely on sight.",
    shortDescription: 'Flash bright light to dazzle an opponent for 1 round as a move action',
    source: 'Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'feat', featId: 'combat_expertise' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['dazzle', 'light', 'sight', 'tian xia', 'move action'],
  },

  {
    id: 'disorienting_blow',
    name: 'Disorienting Blow',
    description:
      'You must declare that you are using this feat before you make your attack roll (thus, a failed attack roll ruins the attempt). When you successfully hit with Stunning Fist and the target fails its Fortitude save, it is confused for 1 round instead of being stunned. Multiple disorienting blows delivered against the same opponent stack their duration. This feat is otherwise subject to all of the limits and conditions of Stunning Fist.',
    shortDescription: 'On a successful Stunning Fist, confuse the target instead of stunning it',
    source: 'Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'stunning_fist' },
      { type: 'bab', minimum: 11 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['stunning fist', 'confusion', 'monk', 'tian xia', 'unarmed'],
  },

  {
    id: 'enhanced_ki_throw',
    name: 'Enhanced Ki Throw',
    description:
      'You can expend 1 ki point when using Ki Throw. If your ki throw succeeds, when the target hits the ground, it takes damage as if you had hit it with an unarmed strike.',
    shortDescription:
      'Spend 1 ki with Ki Throw to deal unarmed strike damage when the target lands',
    source: 'Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'ki pool' },
      { type: 'feat', featId: 'ki_throw' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['ki', 'throw', 'monk', 'tian xia', 'unarmed'],
  },

  {
    id: 'feinting_flurry',
    name: 'Feinting Flurry',
    description:
      'While using flurry of blows to make melee attacks, you can forgo your first attack to make a Bluff check to feint.',
    shortDescription: 'Forgo your first flurry attack to feint as part of a flurry of blows',
    source: 'Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 15 },
      { type: 'class_feature', featureName: 'flurry of blows' },
      { type: 'feat', featId: 'combat_expertise' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['feint', 'flurry of blows', 'monk', 'tian xia', 'bluff'],
  },

  {
    id: 'fox_shape',
    name: 'Fox Shape',
    description:
      'You can take the shape of a specific fox, the appearance of which is determined when you first use this ability. While in fox form, you can only use your bite attack (dealing 1d3 points of damage), and you gain a +10 racial bonus on Disguise checks made to appear as a fox. Transforming between your kitsune and fox forms is a standard action. This ability otherwise functions as beast shape II, adjusting your ability scores appropriately.',
    shortDescription: 'Assume fox form as a standard action; function as beast shape II',
    source: 'Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'bab', minimum: 3 },
      { type: 'race', raceName: 'Kitsune' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RACIAL,
        target: 'skills.disguise',
        value: 10,
        source: 'Fox Shape',
        condition: {
          type: 'custom',
          params: {},
          description: 'While using Disguise to appear as a fox',
        },
      },
    ],
    activationMode: 'toggle',
    tags: ['kitsune', 'shapeshifting', 'fox', 'tian xia', 'racial'],
  },

  {
    id: 'hold_the_blade',
    name: 'Hold the Blade',
    description:
      'When an opponent who is flanking you or who benefits from a sneak attack against you deals damage with a melee weapon, you can make a disarm combat maneuver check as an immediate action. You must have at least one free hand to use this ability. If you use this feat, you take a –4 penalty to AC until the start of your next turn and can only attempt to disarm once per round.',
    shortDescription:
      'Disarm as an immediate action when flanked or sneak attacked with a melee weapon',
    source: 'Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_disarm' },
      { type: 'bab', minimum: 10 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['disarm', 'immediate action', 'flanking', 'sneak attack', 'tian xia'],
  },

  {
    id: 'improved_feinting_flurry',
    name: 'Improved Feinting Flurry',
    description:
      'While using Feinting Flurry, if you successfully feint, your opponent is denied its Dexterity bonus to AC until the end of your turn. Normal: A successful feint causes your opponent to be denied its Dexterity bonus to AC against your next attack.',
    shortDescription:
      'Feinting Flurry denies Dex to AC for the entire turn instead of just one attack',
    source: 'Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 17 },
      { type: 'class_feature', featureName: 'flurry of blows' },
      { type: 'feat', featId: 'combat_expertise' },
      { type: 'feat', featId: 'feinting_flurry' },
      { type: 'bab', minimum: 6 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['feint', 'flurry of blows', 'monk', 'tian xia', 'bluff'],
  },

  {
    id: 'quivering_palm_adept',
    name: 'Quivering Palm Adept',
    description: 'Add +2 to the saving throw DC against your quivering palm attacks.',
    shortDescription: '+2 to quivering palm save DC',
    source: 'Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [{ type: 'class_feature', featureName: 'quivering palm' }],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'class_features.quivering_palm_dc',
        value: 2,
        source: 'Quivering Palm Adept',
        condition: {
          type: 'custom',
          params: {},
          description: 'Applied to quivering palm save DC',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['monk', 'quivering palm', 'dc', 'tian xia'],
  },

  {
    id: 'quivering_palm_versatility',
    name: 'Quivering Palm Versatility',
    description:
      'When you activate a quivering palm attack, you can choose to have it produce one of the following effects instead of killing the target. The target must still fail its Fortitude save to be affected. You must declare the effect you want before making the attack roll. Coma: The target falls unconscious and helpless for a number of days equal to your monk level. Memory Loss: The target falls asleep for 24 hours. When it wakes, it loses memories of the previous days equal to your monk level (these memories can only be restored by wish or miracle). Pain: The target takes 1d6 points of nonlethal damage per monk level. Your quivering palm attack is still subject to all of its normal limitations.',
    shortDescription: 'Use quivering palm to produce coma, memory loss, or pain instead of death',
    source: 'Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'class_feature', featureName: 'quivering palm' },
      { type: 'bab', minimum: 13 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['monk', 'quivering palm', 'tian xia', 'nonlethal'],
  },

  {
    id: 'sleeper_hold',
    name: 'Sleeper Hold',
    description:
      "You must declare that you are using this feat before you attempt a grapple maintenance check (thus, a failed maintenance check ruins the attempt). You must maintain a grapple for a number of consecutive rounds equal to your opponent's Constitution bonus (minimum 1) before using this ability. When you activate this ability, your opponent falls unconscious for 1d4 rounds unless it succeeds at a Fortitude save (DC 10 + 1/2 your character level + your Strength modifier). Each subsequent round you maintain the grapple, the save DC decreases by 1. This penalty is cumulative. While using this feat, you take an additional –2 penalty to AC. This feat has no effect on creatures that are immune to bleed damage, being stunned, or critical hits.",
    shortDescription: 'Render a grappled opponent unconscious after sustained grappling',
    source: 'Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'greater_grapple' },
      { type: 'bab', minimum: 8 },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['grapple', 'unconscious', 'tian xia', 'monk', 'unarmed'],
  },

  {
    id: 'stunning_fist_adept',
    name: 'Stunning Fist Adept',
    description:
      'Add +1 to the saving throw DC against your Stunning Fist attacks. This bonus does not stack with other feats that add to the Stunning Fist DC, such as Mantis Style.',
    shortDescription: '+1 to Stunning Fist save DC',
    source: 'Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'stunning_fist' },
      { type: 'bab', minimum: 3 },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'class_features.stunning_fist_dc',
        value: 1,
        source: 'Stunning Fist Adept',
        condition: {
          type: 'custom',
          params: {},
          description: 'Applied to Stunning Fist save DC',
        },
      },
    ],
    activationMode: 'passive',
    tags: ['stunning fist', 'monk', 'dc', 'tian xia', 'unarmed'],
  },

  {
    id: 'swift_kitsune_shapechanger',
    name: 'Swift Kitsune Shapechanger',
    description:
      'You can assume human or kitsune form as a swift action. If you also possess the Fox Shape feat, you can assume fox form as a swift action. Normal: Assuming kitsune or human form is a standard action.',
    shortDescription: 'Change between kitsune and human (or fox) form as a swift action',
    source: 'Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'bab', minimum: 6 },
      { type: 'race', raceName: 'Kitsune' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['kitsune', 'shapeshifting', 'swift action', 'tian xia', 'racial'],
  },

  {
    id: 'vulpine_pounce',
    name: 'Vulpine Pounce',
    description:
      'You can change shape into your kitsune form and use the charge action in the same round. If you do, you can make a full attack at the end of the charge rather than a single attack.',
    shortDescription: 'Change to kitsune form and charge in the same round, making a full attack',
    source: 'Dragon Empires Primer',
    verificationStatus: 'needs_review' as const,
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'swift_kitsune_shapechanger' },
      { type: 'bab', minimum: 10 },
      { type: 'race', raceName: 'Kitsune' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['kitsune', 'shapeshifting', 'charge', 'pounce', 'tian xia', 'racial'],
  },
];
