import { BonusType } from '@/types/base';
import type { FeatDefinition } from '@/types/feats';

export const BLOOD_OF_THE_MOON_FEATS: FeatDefinition[] = [
  // ==================== GENERAL FEATS ====================
  {
    id: 'extra_feature',
    name: 'Extra Feature',
    description:
      "You are an exceptional shapechanger. When you assume your bestial form, you may select one additional feature from your shapechange ability's options and gain that benefit while in bestial form.",
    shortDescription: 'Gain one additional feature when assuming bestial form',
    source: 'Blood of the Moon',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CON', minimum: 13 },
      { type: 'race', raceName: 'Skinwalker' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['skinwalker', 'shapeshifting', 'bestial_form'],
  },
  {
    id: 'fast_change',
    name: 'Fast Change',
    description: 'You can assume your bestial form as a move action instead of a standard action.',
    shortDescription: 'Assume bestial form as a move action',
    source: 'Blood of the Moon',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'DEX', minimum: 13 },
      { type: 'bab', minimum: 6 },
      { type: 'race', raceName: 'Skinwalker' },
    ],
    effects: [],
    activationMode: 'passive',
    tags: ['skinwalker', 'shapeshifting', 'bestial_form', 'speed'],
  },

  // ==================== WEREBAT-KIN (BLOODMARKED) FEATS ====================
  {
    id: 'bat_shape',
    name: 'Bat Shape',
    description:
      'You can take the form of a bat whose appearance is static and cannot be changed each time you assume this form. You gain a +10 racial bonus on Disguise checks to appear as a bat. Transforming from werebat-kin to bat shape takes a standard action. This ability otherwise functions as beast shape II with corresponding ability score adjustments. If you wear a bat pelt, you may adopt the appearance of that specific bat instead of your normal form.',
    shortDescription: 'Transform into a bat (functions as beast shape II)',
    source: 'Blood of the Moon',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'special', description: 'Werebat-kin' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.RACIAL,
        target: 'skill.disguise',
        value: 10,
        source: 'Bat Shape',
        condition: { type: 'custom', params: {}, description: 'When disguising as a bat' },
      },
    ],
    activationMode: 'toggle',
    tags: ['werebat_kin', 'shapeshifting', 'polymorph', 'bat'],
  },
  {
    id: 'bloodmarked_flight',
    name: 'Bloodmarked Flight',
    description:
      'When you use your change shape ability, you gain a fly speed. With a light load and no armor or light armor, you have a fly speed of 30 feet with poor maneuverability. With a medium or heavy load or in medium or heavy armor, you have a fly speed of 20 feet with clumsy maneuverability.',
    shortDescription: 'Gain a fly speed when using change shape',
    source: 'Blood of the Moon',
    types: ['general'],
    prerequisites: [
      { type: 'bab', minimum: 5 },
      { type: 'special', description: 'Werebat-kin' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['werebat_kin', 'shapeshifting', 'flight', 'movement'],
  },
  {
    id: 'dire_bat_shape',
    name: 'Dire Bat Shape',
    description:
      'When you use Bat Shape to become a bat, you can choose to become a bat or a dire bat.',
    shortDescription: 'When using Bat Shape, can choose to become a dire bat instead',
    source: 'Blood of the Moon',
    types: ['general'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'feat', featId: 'bat_shape' },
      { type: 'bab', minimum: 3 },
      { type: 'special', description: 'Werebat-kin' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['werebat_kin', 'shapeshifting', 'polymorph', 'bat', 'dire'],
  },

  // ==================== WEREBEAR-KIN (COLDBORN) FEATS ====================
  {
    id: 'beartrap_bite',
    name: 'Beartrap Bite',
    description:
      "When you confirm a critical hit with your bite attack, if your confirmation roll equals or exceeds your target's CMD, you can clamp down on your foe as a free action, preventing it from moving away from your threatened area unless it escapes with a combat maneuver check or Escape Artist check (as if grappled, though neither you nor your target gains the grappled condition). You cannot make bite attacks while maintaining this hold. You can release the target as a swift action.",
    shortDescription:
      'On critical hit with bite, clamp foe in place if confirmation roll beats CMD',
    source: 'Blood of the Moon',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'bab', minimum: 6 },
      {
        type: 'special',
        description: 'Weapon Focus (bite); werebear, werebear-kin, or associate of these creatures',
      },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['werebear_kin', 'bite', 'grapple', 'critical', 'combat_maneuver'],
  },
  {
    id: 'bear_hug',
    name: 'Bear Hug',
    description:
      'You can crush your foes with your powerful arms. You can attempt to grapple foes caught by your Beartrap Bite feat without provoking attacks of opportunity. In addition, you gain a +2 bonus on damage rolls when grappling opponents.',
    shortDescription: 'Grapple foes caught by Beartrap Bite without AoO; +2 damage when grappling',
    source: 'Blood of the Moon',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'STR', minimum: 17 },
      { type: 'feat', featId: 'beartrap_bite' },
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'bab', minimum: 8 },
      {
        type: 'special',
        description: 'Weapon Focus (bite); werebear, werebear-kin, or associate of these creatures',
      },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'damage.melee',
        value: 2,
        source: 'Bear Hug',
        condition: { type: 'custom', params: {}, description: 'When grappling opponents' },
      },
    ],
    activationMode: 'conditional',
    tags: ['werebear_kin', 'grapple', 'damage'],
  },
  {
    id: 'ferocious_loyalty',
    name: 'Ferocious Loyalty',
    description:
      'You have a powerful sense of responsibility toward your companions. You gain a +1 morale bonus on attack rolls against any enemy currently threatening an ally who also has this feat. When an ally with this feat becomes helpless or is killed within 30 feet of you, you gain a +2 morale bonus on attack rolls for 1 minute or until the foe responsible for the condition is helpless or killed, whichever comes first.',
    shortDescription:
      '+1 morale on attacks vs. enemies threatening feat-sharing allies; +2 when an ally is downed',
    source: 'Blood of the Moon',
    types: ['teamwork'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'attack.melee',
        value: 1,
        source: 'Ferocious Loyalty',
        condition: {
          type: 'custom',
          params: {},
          description: 'Against enemies threatening an ally who also has Ferocious Loyalty',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['werebear_kin', 'teamwork', 'morale', 'ally'],
  },

  // ==================== WERETIGER-KIN (FANGLORD) FEATS ====================
  {
    id: 'motivating_display',
    name: 'Motivating Display',
    description:
      'When you use Dazzling Display to demoralize foes, your Intimidate check while using Dazzling Display also applies to allies within 30 feet who can see you. Allies affected in this way gain a +1 morale bonus on attack rolls and skill checks for a number of rounds equal to the number of rounds they would normally be shaken.',
    shortDescription: 'Dazzling Display also grants nearby allies +1 morale on attacks and skills',
    source: 'Blood of the Moon',
    types: ['combat'],
    prerequisites: [
      { type: 'ability_score', ability: 'CHA', minimum: 13 },
      { type: 'feat', featId: 'dazzling_display' },
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'special', description: 'Weretiger, weretiger-kin, or associate of these creatures' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.MORALE,
        target: 'attack.melee',
        value: 1,
        source: 'Motivating Display',
        condition: {
          type: 'custom',
          params: {},
          description: 'Allies within 30 feet after successful Dazzling Display',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['weretiger_kin', 'intimidate', 'dazzling_display', 'morale', 'ally'],
  },
  {
    id: 'surprising_combatant',
    name: 'Surprising Combatant',
    description:
      'At the beginning of combat, after initiative is rolled but before the first round of combat begins, you can attempt a Bluff check as a free action. Each aware opponent must succeed at a Sense Motive check (DC equal to your Bluff check result) or treat you as if you were unaware at the start of combat. Opponents who are unaware of all foes cannot act during the surprise round.',
    shortDescription: 'Bluff check at start of combat to appear unaware and act in surprise round',
    source: 'Blood of the Moon',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'improved_initiative' },
      { type: 'skill', skillId: 'bluff', ranks: 3 },
      { type: 'special', description: 'Weretiger, weretiger-kin, or associate of these creatures' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['weretiger_kin', 'bluff', 'initiative', 'surprise_round'],
  },
  {
    id: 'violent_display',
    name: 'Violent Display',
    description:
      'You never miss an opportunity to cow foes. When you land a successful sneak attack or confirm a critical hit against a creature using a weapon with which you have Weapon Focus, you can activate Dazzling Display as an immediate action.',
    shortDescription:
      'Activate Dazzling Display as an immediate action after sneak attack or critical hit',
    source: 'Blood of the Moon',
    types: ['combat'],
    prerequisites: [
      { type: 'feat', featId: 'dazzling_display' },
      { type: 'feat', featId: 'weapon_focus' },
      { type: 'bab', minimum: 6 },
      { type: 'special', description: 'Weretiger, weretiger-kin, or associate of these creatures' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['weretiger_kin', 'intimidate', 'dazzling_display', 'critical', 'sneak_attack'],
  },

  // ==================== WERERAT-KIN FEATS ====================
  {
    id: 'swarm_scatter_botm',
    name: 'Swarm Scatter',
    description:
      'You have studied the habits of swarming rats for defensive tactics. For each adjacent ally with this feat, you receive a +1 circumstance bonus to AC. While you have this bonus, you gain immunity to rat swarm attacks and their distraction ability.',
    shortDescription:
      '+1 circumstance AC per adjacent feat-sharing ally; immunity to rat swarm distraction',
    source: 'Blood of the Moon',
    types: ['teamwork'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.CIRCUMSTANCE,
        target: 'ac',
        value: 1,
        source: 'Swarm Scatter',
        condition: {
          type: 'custom',
          params: {},
          description: 'Per adjacent ally who also has Swarm Scatter',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['wererat_kin', 'teamwork', 'ac', 'swarm'],
  },
  {
    id: 'swarm_strike',
    name: 'Swarm Strike',
    description:
      'You and your allies have trained to overwhelm foes like a swarm of rodents. When an opponent triggers an attack of opportunity from you, you receive a +1 bonus on your attack roll. This bonus increases by +1 for each ally with this feat who also threatens that opponent.',
    shortDescription:
      '+1 attack on AoO, +1 more per ally with this feat also threatening the target',
    source: 'Blood of the Moon',
    types: ['teamwork'],
    prerequisites: [],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'attack.melee',
        value: 1,
        source: 'Swarm Strike',
        condition: {
          type: 'custom',
          params: {},
          description:
            'On attacks of opportunity when allies with Swarm Strike also threaten the target',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['wererat_kin', 'teamwork', 'attack_of_opportunity'],
  },

  // ==================== WEREWOLF-KIN (WITCHWOLF) FEATS ====================
  {
    id: 'wolf_style_botm',
    name: 'Wolf Style',
    description:
      "While in this style, you hamper foes that turn their backs on you. When you damage an opponent with an attack of opportunity and deal at least 10 points of damage, that foe's base speed decreases by 5 feet until the end of its next turn. For every 10 additional points of damage you deal beyond the first 10, the foe's speed decreases by an additional 5 feet. If the cumulative penalty to the foe's speed equals or exceeds its total base speed, you can attempt a trip against that foe as a free action after the attack resolves.",
    shortDescription:
      'Attacks of opportunity slow foes; enough damage lets you trip as a free action',
    source: 'Blood of the Moon',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 13 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'skill', skillId: 'knowledge_nature', ranks: 3 },
      { type: 'special', description: 'Werewolf, werewolf-kin, or associate of these creatures' },
    ],
    effects: [],
    activationMode: 'toggle',
    tags: ['werewolf_kin', 'style', 'attack_of_opportunity', 'trip', 'speed_reduction'],
  },
  {
    id: 'wolf_trip_botm',
    name: 'Wolf Trip',
    description:
      "You have studied the manner in which wolves bring down their prey. While using Wolf Style, you gain a +2 bonus on trip attempts made as part of attacks of opportunity. After successfully tripping an opponent, you may use a free action to choose an unoccupied space adjacent to both you and the creature's original space, and the tripped creature lands prone in that space.",
    shortDescription: '+2 to trip AoOs in Wolf Style; choose where tripped foe lands',
    source: 'Blood of the Moon',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 15 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'wolf_style_botm' },
      { type: 'skill', skillId: 'knowledge_nature', ranks: 6 },
      { type: 'special', description: 'Werewolf, werewolf-kin, or associate of these creatures' },
    ],
    effects: [
      {
        type: 'bonus',
        bonusType: BonusType.UNTYPED,
        target: 'combat_maneuver.trip',
        value: 2,
        source: 'Wolf Trip',
        condition: {
          type: 'custom',
          params: {},
          description: 'When making trip attempts as attacks of opportunity while using Wolf Style',
        },
      },
    ],
    activationMode: 'conditional',
    tags: ['werewolf_kin', 'style', 'attack_of_opportunity', 'trip'],
  },
  {
    id: 'wolf_savage_botm',
    name: 'Wolf Savage',
    description:
      "While using Wolf Style, if you deal at least 10 points of damage to a prone opponent with your natural weapons or unarmed strikes, as a swift action you can savage the foe. Your target must succeed at a Fortitude save (DC = 10 + 1/2 your character level + your Wisdom modifier) or you choose one of the following effects: the target takes 1d4 points of Charisma damage, the target takes 1d4 points of Constitution damage, or the target becomes fatigued. Ability score damage dealt this way cannot cause a victim's ability score to equal or fall below their actual total.",
    shortDescription:
      'In Wolf Style, savage prone foes with swift action for ability damage or fatigue',
    source: 'Blood of the Moon',
    types: ['combat', 'style'],
    prerequisites: [
      { type: 'ability_score', ability: 'WIS', minimum: 17 },
      { type: 'feat', featId: 'improved_unarmed_strike' },
      { type: 'feat', featId: 'wolf_style_botm' },
      { type: 'feat', featId: 'wolf_trip_botm' },
      { type: 'skill', skillId: 'knowledge_nature', ranks: 9 },
      { type: 'special', description: 'Werewolf, werewolf-kin, or associate of these creatures' },
    ],
    effects: [],
    activationMode: 'conditional',
    tags: ['werewolf_kin', 'style', 'ability_damage', 'fatigue', 'natural_weapons'],
  },
];
